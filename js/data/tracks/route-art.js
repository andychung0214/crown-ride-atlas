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
      "generatedAt": "2026-08-01T05:24:13.518Z",
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
      "reviewedAt": "2026-08-01T05:30:05.845Z",
      "reviewerNote": "小台灣圖形以南窄北寬輪廓為辨識重點；為合法公共道路已刪除科博館步道與中科 service 尖角，不追求精準海岸線。raw 的 service、track、footway、path、pedestrian、權限禁制與非法逆向均為 0；live OSM 五窗 5/5，最大偏差 0.06 公尺。"
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
  },
  "route-art-elephant": {
    "routeId": "route-art-elephant",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:29:16.290Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "795043cc2e4506e7edff4c6b5505a440d8a2b2fba3191bcc784cf50bc3f88649",
      "roadPolicyAuditSha256": "46c7261073fcf91a9976b1ccbd539873ceab8caf11e6c418d7e0f16bb0b45a64",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "100/100、500/200、750/300、1000/500 公尺視窗依序為 3.31 公里、27/5.49%、11/1.60%、7/1.24%、6/0.66%。採 500/200 降低都市 SRTM 短波；僅供行程規劃。",
        "referenceUrl": "https://www.openstreetmap.org/copyright",
        "referenceLabel": "OpenStreetMap 即時道路資料"
      },
      "reviewedAt": "2026-08-01T05:30:05.845Z",
      "reviewerNote": "大象圖形為 3.31 公里「大象近似短線」，只保留長鼻與背弧的粗略方向；擴成 5 公里版會引入 471 公尺 service，故以合法公共道路優先，捨棄腹部與四肢。raw 的 service、track 等禁止道路與非法逆向均為 0；live OSM 五窗 5/5，最大偏差 0.06 公尺。"
    },
    "waypoints": [
      {
        "name": "彰化車站周邊公共道路",
        "lat": 24.0809664,
        "lng": 120.5381841,
        "role": "start"
      },
      {
        "name": "公園路一段公共主線",
        "lat": 24.075325,
        "lng": 120.5500277,
        "role": "via"
      },
      {
        "name": "彰化車站周邊公共道路",
        "lat": 24.0809664,
        "lng": 120.5381841,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.080966,
        "lng": 120.538184,
        "ele": 18,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 21.42015042719023,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.080846,
        "lng": 120.538413,
        "ele": 19,
        "distanceKm": 0.02680478179936729,
        "gradePct": 0.9320104790240589,
        "smoothedEle": 21.669973802439866,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0808,
        "lng": 120.538475,
        "ele": 19.25,
        "distanceKm": 0.03491519137237173,
        "gradePct": 0.905479823797118,
        "smoothedEle": 21.736300440507208,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.080942,
        "lng": 120.538622,
        "ele": 19.5,
        "distanceKm": 0.05664107867649172,
        "gradePct": 0.8853620083906077,
        "smoothedEle": 21.92162901893452,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.080861,
        "lng": 120.538811,
        "ele": 20,
        "distanceKm": 0.07783679100715282,
        "gradePct": 0.879201139394814,
        "smoothedEle": 22.104492380593477,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.080884,
        "lng": 120.538945,
        "ele": 20.5,
        "distanceKm": 0.09167849995685287,
        "gradePct": 0.8582939153051833,
        "smoothedEle": 22.207021413962963,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.081147,
        "lng": 120.539219,
        "ele": 22.25,
        "distanceKm": 0.1320387659008931,
        "gradePct": 0.7545611210657893,
        "smoothedEle": 22.41646361941344,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.080908,
        "lng": 120.539597,
        "ele": 22.75,
        "distanceKm": 0.1787164254154236,
        "gradePct": 0.6387244861081892,
        "smoothedEle": 22.56165599701582,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.080685499786895,
        "lng": 120.53999616704898,
        "ele": 23.791667664349966,
        "distanceKm": 0.22619477975650049,
        "gradePct": 0.5312275044133319,
        "smoothedEle": 22.726743528304752,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.080464,
        "lng": 120.540396,
        "ele": 24,
        "distanceKm": 0.27367310144316936,
        "gradePct": 0.526705012093414,
        "smoothedEle": 23.121980692940834,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.080056,
        "lng": 120.540435,
        "ele": 24.75,
        "distanceKm": 0.3192131261002018,
        "gradePct": 0.6597193221354996,
        "smoothedEle": 23.669345955807415,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.079709,
        "lng": 120.540437,
        "ele": 24.25,
        "distanceKm": 0.357798353140194,
        "gradePct": 0.8310043635526405,
        "smoothedEle": 24.158598380176553,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.079363,
        "lng": 120.540394,
        "ele": 23.75,
        "distanceKm": 0.3965187092513006,
        "gradePct": 0.96941654196627,
        "smoothedEle": 24.562389606578563,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078719,
        "lng": 120.54034,
        "ele": 24.25,
        "distanceKm": 0.468337871861382,
        "gradePct": 0.9210476487639205,
        "smoothedEle": 24.91966243628906,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078708,
        "lng": 120.540311,
        "ele": 24.25,
        "distanceKm": 0.47152591402540517,
        "gradePct": 0.9021208166168115,
        "smoothedEle": 24.90834788923585,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078662,
        "lng": 120.540266,
        "ele": 24.5,
        "distanceKm": 0.4783839786890269,
        "gradePct": 0.8527027268962435,
        "smoothedEle": 24.884008218887004,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078565,
        "lng": 120.540277,
        "ele": 24.75,
        "distanceKm": 0.4892275567082784,
        "gradePct": 0.7682936541007468,
        "smoothedEle": 24.845523729845873,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078541,
        "lng": 120.540302,
        "ele": 24.75,
        "distanceKm": 0.49291039037938184,
        "gradePct": 0.7396255728746084,
        "smoothedEle": 24.83245313895749,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078522,
        "lng": 120.54037,
        "ele": 24.75,
        "distanceKm": 0.500129781162428,
        "gradePct": 0.6833872631397515,
        "smoothedEle": 24.80674950135283,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078529,
        "lng": 120.540405,
        "ele": 25,
        "distanceKm": 0.503767225816395,
        "gradePct": 0.6543147038229193,
        "smoothedEle": 24.792324404044926,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078546,
        "lng": 120.540436,
        "ele": 25,
        "distanceKm": 0.5074384103606645,
        "gradePct": 0.6249724758085549,
        "smoothedEle": 24.777765503683757,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078571,
        "lng": 120.54046,
        "ele": 24.75,
        "distanceKm": 0.5111349101212062,
        "gradePct": 0.5954279139591243,
        "smoothedEle": 24.763106210191467,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078499,
        "lng": 120.540854,
        "ele": 25.5,
        "distanceKm": 0.5519270275936774,
        "gradePct": 0.1633749808420859,
        "smoothedEle": 24.410901189977533,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078435145258013,
        "lng": 120.54129870266742,
        "ele": 26.830307124750224,
        "distanceKm": 0.5976280609633556,
        "gradePct": -0.2967760391608181,
        "smoothedEle": 23.974356128180766,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078369,
        "lng": 120.541743,
        "ele": 27.5,
        "distanceKm": 0.6433287658329443,
        "gradePct": -0.5458269925627999,
        "smoothedEle": 23.703597726301354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078342171815983,
        "lng": 120.54222409937157,
        "ele": 24.605690066702792,
        "distanceKm": 0.6922609041467185,
        "gradePct": -0.6230115973256236,
        "smoothedEle": 23.588735008719386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078342862096378,
        "lng": 120.54270660536778,
        "ele": 22.017138584888933,
        "distanceKm": 0.74124488853752,
        "gradePct": -0.5259056676517276,
        "smoothedEle": 23.451320982532074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078337,
        "lng": 120.543189,
        "ele": 19.5,
        "distanceKm": 0.790221845975036,
        "gradePct": -0.34197578304243587,
        "smoothedEle": 23.36115015232365,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078133,
        "lng": 120.543588,
        "ele": 20,
        "distanceKm": 0.8366473414682807,
        "gradePct": -0.24338975287283132,
        "smoothedEle": 23.256402988195855,
        "gradeBand": "descent"
      },
      {
        "lat": 24.077925999999998,
        "lng": 120.5439045,
        "ele": 21.375,
        "distanceKm": 0.8761721139249566,
        "gradePct": -0.30072960311802704,
        "smoothedEle": 23.025042436666116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.077719,
        "lng": 120.544221,
        "ele": 22.75,
        "distanceKm": 0.9156969285511418,
        "gradePct": -0.34809548502536825,
        "smoothedEle": 22.82679931595392,
        "gradeBand": "descent"
      },
      {
        "lat": 24.077547,
        "lng": 120.544358,
        "ele": 22.75,
        "distanceKm": 0.9393449183536482,
        "gradePct": -0.29848336015333576,
        "smoothedEle": 22.859684219676776,
        "gradeBand": "descent"
      },
      {
        "lat": 24.077466,
        "lng": 120.544334,
        "ele": 22.75,
        "distanceKm": 0.9486754577251254,
        "gradePct": -0.2797134186127472,
        "smoothedEle": 22.878213822403257,
        "gradeBand": "descent"
      },
      {
        "lat": 24.077133,
        "lng": 120.544896,
        "ele": 24,
        "distanceKm": 1.0166923525541762,
        "gradePct": 0.027842967825874265,
        "smoothedEle": 23.357112212813,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.076881,
        "lng": 120.545275,
        "ele": 24.75,
        "distanceKm": 1.06429088073812,
        "gradePct": 0.5592197539066391,
        "smoothedEle": 24.213029433107522,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.076921,
        "lng": 120.545672,
        "ele": 24,
        "distanceKm": 1.1048393844124564,
        "gradePct": 1.0313419790131708,
        "smoothedEle": 24.943941048259042,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.076905,
        "lng": 120.546098,
        "ele": 25,
        "distanceKm": 1.1481238910187284,
        "gradePct": 1.3773804504574536,
        "smoothedEle": 25.631879361995544,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0767138749894,
        "lng": 120.54641275905249,
        "ele": 25.598644599595115,
        "distanceKm": 1.1865003814678665,
        "gradePct": 1.509132690494328,
        "smoothedEle": 26.16279972777482,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.076514,
        "lng": 120.546721,
        "ele": 26,
        "distanceKm": 1.2248827590868776,
        "gradePct": 1.6113045244209467,
        "smoothedEle": 26.727001235637715,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.076181,
        "lng": 120.547318,
        "ele": 28.5,
        "distanceKm": 1.2959069336206663,
        "gradePct": 1.4648926058521146,
        "smoothedEle": 27.712713363213126,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.07597729791209,
        "lng": 120.54769576230225,
        "ele": 29.06716516157252,
        "distanceKm": 1.3404474219548712,
        "gradePct": 1.4139744143270652,
        "smoothedEle": 28.337822937562763,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.075774156764915,
        "lng": 120.54807388641778,
        "ele": 29.40238157604656,
        "distanceKm": 1.384987929450483,
        "gradePct": 1.433141761415794,
        "smoothedEle": 29.008159201301872,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.075571,
        "lng": 120.548452,
        "ele": 29.75,
        "distanceKm": 1.4295284484698747,
        "gradePct": 1.3736357243694255,
        "smoothedEle": 29.538748088643178,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0754925,
        "lng": 120.548986,
        "ele": 30.5,
        "distanceKm": 1.4844394414415665,
        "gradePct": 1.2444230298298042,
        "smoothedEle": 30.042407328701792,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.075414,
        "lng": 120.54952,
        "ele": 31.25,
        "distanceKm": 1.5393504671784308,
        "gradePct": 0.9890400723324276,
        "smoothedEle": 30.30050772041128,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.075325,
        "lng": 120.550028,
        "ele": 32,
        "distanceKm": 1.591864654150512,
        "gradePct": 0.6321776199013095,
        "smoothedEle": 30.354433417072244,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.075414,
        "lng": 120.54952,
        "ele": 31.25,
        "distanceKm": 1.644378841122593,
        "gradePct": 0.3127738040159348,
        "smoothedEle": 30.30050772041128,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0754925,
        "lng": 120.548986,
        "ele": 30.5,
        "distanceKm": 1.6992898668594574,
        "gradePct": -0.03490101091698428,
        "smoothedEle": 30.042407328701792,
        "gradeBand": "descent"
      },
      {
        "lat": 24.075571,
        "lng": 120.548452,
        "ele": 29.75,
        "distanceKm": 1.7542008598311492,
        "gradePct": -0.388727051048262,
        "smoothedEle": 29.538303169258246,
        "gradeBand": "descent"
      },
      {
        "lat": 24.075774156764915,
        "lng": 120.54807388641778,
        "ele": 29.40238157604656,
        "distanceKm": 1.7987413788505409,
        "gradePct": -0.6732517153665845,
        "smoothedEle": 29.000868424662574,
        "gradeBand": "descent"
      },
      {
        "lat": 24.07597729791209,
        "lng": 120.54769576230225,
        "ele": 29.06716516157252,
        "distanceKm": 1.8432818863461526,
        "gradePct": -0.9837557594328177,
        "smoothedEle": 28.334122640969653,
        "gradeBand": "descent"
      },
      {
        "lat": 24.076181,
        "lng": 120.547318,
        "ele": 28.5,
        "distanceKm": 1.8878223746803573,
        "gradePct": -1.2226413260136797,
        "smoothedEle": 27.651025768188084,
        "gradeBand": "descent"
      },
      {
        "lat": 24.076514,
        "lng": 120.546721,
        "ele": 26,
        "distanceKm": 1.958846549214146,
        "gradePct": -1.3600665749511072,
        "smoothedEle": 26.762114209006477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.076763,
        "lng": 120.546337,
        "ele": 25.5,
        "distanceKm": 2.006662490762728,
        "gradePct": -1.3871400135375827,
        "smoothedEle": 26.108013907385853,
        "gradeBand": "descent"
      },
      {
        "lat": 24.076941991549262,
        "lng": 120.54601685724678,
        "ele": 24.701681054324357,
        "distanceKm": 2.044773611287672,
        "gradePct": -1.3843353922198571,
        "smoothedEle": 25.54257396091828,
        "gradeBand": "descent"
      },
      {
        "lat": 24.077082,
        "lng": 120.545683,
        "ele": 24,
        "distanceKm": 2.0820715802271677,
        "gradePct": -1.3559961359625867,
        "smoothedEle": 25.027230771459077,
        "gradeBand": "descent"
      },
      {
        "lat": 24.077557,
        "lng": 120.545694,
        "ele": 24,
        "distanceKm": 2.134901047531248,
        "gradePct": -1.4033334690321202,
        "smoothedEle": 24.25514006393914,
        "gradeBand": "descent"
      },
      {
        "lat": 24.07788,
        "lng": 120.545569,
        "ele": 25,
        "distanceKm": 2.1729930014334347,
        "gradePct": -1.4797120969024289,
        "smoothedEle": 23.609172992137314,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078154,
        "lng": 120.545326,
        "ele": 24.25,
        "distanceKm": 2.2121956026749134,
        "gradePct": -1.4588542423324076,
        "smoothedEle": 23.10821278255903,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078311,
        "lng": 120.544929,
        "ele": 22,
        "distanceKm": 2.2561175017885504,
        "gradePct": -1.287915443072294,
        "smoothedEle": 22.810005405731125,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078314396156156,
        "lng": 120.54445250342347,
        "ele": 22.433973974018024,
        "distanceKm": 2.3044928360634205,
        "gradePct": -0.9610407806716426,
        "smoothedEle": 22.777467630771895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078317,
        "lng": 120.543976,
        "ele": 22,
        "distanceKm": 2.3528682567651744,
        "gradePct": -0.43891631861978336,
        "smoothedEle": 23.072617739027137,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078337,
        "lng": 120.543612,
        "ele": 20.25,
        "distanceKm": 2.3898883359305776,
        "gradePct": -0.044973116694444884,
        "smoothedEle": 23.30332551641891,
        "gradeBand": "descent"
      },
      {
        "lat": 24.078337,
        "lng": 120.543189,
        "ele": 19.5,
        "distanceKm": 2.432831223715297,
        "gradePct": 0.26101110576836795,
        "smoothedEle": 23.490129612865633,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078342776188386,
        "lng": 120.542646555682,
        "ele": 22.339293551537537,
        "distanceKm": 2.487903822473247,
        "gradePct": 0.453967137819944,
        "smoothedEle": 23.696559857030287,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078342,
        "lng": 120.542104,
        "ele": 25.25,
        "distanceKm": 2.542984047990511,
        "gradePct": 0.4978094845105612,
        "smoothedEle": 24.007930766569313,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078369,
        "lng": 120.541743,
        "ele": 27.5,
        "distanceKm": 2.579755468697724,
        "gradePct": 0.4410063751550442,
        "smoothedEle": 24.1221906092793,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.078938,
        "lng": 120.541703,
        "ele": 27,
        "distanceKm": 2.6431556496313267,
        "gradePct": 0.4235575717080696,
        "smoothedEle": 24.375944106063194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.079414,
        "lng": 120.541652,
        "ele": 26.5,
        "distanceKm": 2.6963371342079094,
        "gradePct": 0.4580051726379356,
        "smoothedEle": 24.660244080192243,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.079395516747432,
        "lng": 120.54123274080872,
        "ele": 25.423656117769994,
        "distanceKm": 2.73894949366896,
        "gradePct": 0.3294029804754072,
        "smoothedEle": 24.6439292165325,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.079379258373717,
        "lng": 120.54081337040436,
        "ele": 24.586828058884993,
        "distanceKm": 2.781561923448817,
        "gradePct": 0.11334513595006782,
        "smoothedEle": 24.35611105313039,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.079363,
        "lng": 120.540394,
        "ele": 23.75,
        "distanceKm": 2.8241743586226478,
        "gradePct": -0.2400089939754435,
        "smoothedEle": 23.819955215569152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.07939,
        "lng": 120.53991,
        "ele": 23.25,
        "distanceKm": 2.8734011946884173,
        "gradePct": -0.7262950982093676,
        "smoothedEle": 23.085041905865534,
        "gradeBand": "descent"
      },
      {
        "lat": 24.079438,
        "lng": 120.539335,
        "ele": 22.25,
        "distanceKm": 2.932018108819497,
        "gradePct": -1.2334613395046705,
        "smoothedEle": 22.17966033562827,
        "gradeBand": "descent"
      },
      {
        "lat": 24.079491,
        "lng": 120.53885,
        "ele": 20.874999999999993,
        "distanceKm": 2.9816062376386974,
        "gradePct": -1.465521011261171,
        "smoothedEle": 21.424511463046038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.079544,
        "lng": 120.538365,
        "ele": 19.5,
        "distanceKm": 3.031194346248344,
        "gradePct": -1.448843382550486,
        "smoothedEle": 20.81746621753194,
        "gradeBand": "descent"
      },
      {
        "lat": 24.079590500000002,
        "lng": 120.537975,
        "ele": 19.75,
        "distanceKm": 3.0711228982321277,
        "gradePct": -1.3472241936426055,
        "smoothedEle": 20.424606478237955,
        "gradeBand": "descent"
      },
      {
        "lat": 24.079637,
        "lng": 120.537585,
        "ele": 20,
        "distanceKm": 3.111051435977039,
        "gradePct": -1.1824934809503993,
        "smoothedEle": 20.138519135009037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.080039799792893,
        "lng": 120.53788673098039,
        "ele": 18.893407162385746,
        "distanceKm": 3.1653134304618247,
        "gradePct": -0.968163415988065,
        "smoothedEle": 19.73629834827981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.080441,
        "lng": 120.538191,
        "ele": 18.5,
        "distanceKm": 3.2195749075848936,
        "gradePct": -0.7895364062607719,
        "smoothedEle": 19.380635672238515,
        "gradeBand": "descent"
      },
      {
        "lat": 24.080745,
        "lng": 120.538434,
        "ele": 19,
        "distanceKm": 3.2614224552655244,
        "gradePct": -0.6648619539351811,
        "smoothedEle": 19.190325888633772,
        "gradeBand": "descent"
      },
      {
        "lat": 24.0808,
        "lng": 120.538475,
        "ele": 19.25,
        "distanceKm": 3.2688201804272614,
        "gradePct": -0.6324888843807622,
        "smoothedEle": 19.182285306611604,
        "gradeBand": "descent"
      },
      {
        "lat": 24.080846,
        "lng": 120.538413,
        "ele": 19,
        "distanceKm": 3.2769305900002657,
        "gradePct": -0.6050091130191482,
        "smoothedEle": 19.172976232274117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.080966,
        "lng": 120.538184,
        "ele": 18,
        "distanceKm": 3.303735371799633,
        "gradePct": -0.527801169846057,
        "smoothedEle": 19.135336279766317,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 3.303735371799633,
      "elevationGainM": 11.027146110217153,
      "elevationLossM": 13.311960257641065,
      "minimumElevationM": 18,
      "maximumElevationM": 32,
      "maximumSustainedGradePct": 1.6113045244209467
    },
    "climbs": []
  },
  "route-art-heart-bay": {
    "routeId": "route-art-heart-bay",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:24:15.778Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "986a1d21e270e2d723d7c3bbe281e105ae0390838db5cbfd84665ed31cbcd4e0",
      "roadPolicyAuditSha256": "2181b482b91a0262149452e3cbb9ec2f62563ef7c901aaf390603c22a21d584b",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "100/100、500/200、750/300、1000/500 公尺視窗依序為 10.10 公里、85/9.01%、27/2.05%、19/1.54%、15/2.01%。採 500/200 減少港邊 SRTM 像元短波；僅供行程規劃。",
        "referenceUrl": "https://www.openstreetmap.org/copyright",
        "referenceLabel": "OpenStreetMap 即時道路資料"
      },
      "reviewedAt": "2026-08-01T05:30:05.845Z",
      "reviewerNote": "心形圖形改稱「心形港灣近似線」；已移除駁二 pedestrian、輪渡站 service 與河畔 footway，以南窄北寬三角弧線表現，不宣稱精準心形。raw 的 service、track 等禁止道路與非法逆向均為 0；live OSM 五窗 5/5，最大偏差 0.05 公尺，全程只用合法公共道路。"
    },
    "waypoints": [
      {
        "name": "文橫一路公共道路",
        "lat": 22.6249356,
        "lng": 120.302902,
        "role": "start"
      },
      {
        "name": "美術館路公共主線",
        "lat": 22.6548613,
        "lng": 120.2850326,
        "role": "via"
      },
      {
        "name": "博仁街公共道路",
        "lat": 22.6465133,
        "lng": 120.3041471,
        "role": "via"
      },
      {
        "name": "文橫一路公共道路",
        "lat": 22.6249356,
        "lng": 120.302902,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.624936,
        "lng": 120.302902,
        "ele": 9.25,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 8.581884425032703,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.625327,
        "lng": 120.302785,
        "ele": 9,
        "distanceKm": 0.045105213034912356,
        "gradePct": -0.11246308447741182,
        "smoothedEle": 8.531157711193533,
        "gradeBand": "descent"
      },
      {
        "lat": 22.625983,
        "lng": 120.302736,
        "ele": 8.5,
        "distanceKm": 0.11822235377465254,
        "gradePct": -0.24792242833715689,
        "smoothedEle": 8.28878469471724,
        "gradeBand": "descent"
      },
      {
        "lat": 22.62648242210727,
        "lng": 120.30271806085995,
        "ele": 8.25,
        "distanceKm": 0.17378614963671105,
        "gradePct": -0.10207841077687016,
        "smoothedEle": 8.404486285333235,
        "gradeBand": "descent"
      },
      {
        "lat": 22.626982,
        "lng": 120.302705,
        "ele": 8.25,
        "distanceKm": 0.2293529255529213,
        "gradePct": 0.3970240681557389,
        "smoothedEle": 9.342921355883007,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.627538,
        "lng": 120.302604,
        "ele": 8.25,
        "distanceKm": 0.2920404320057015,
        "gradePct": 1.0820153841691456,
        "smoothedEle": 10.53960484365884,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.627511826995786,
        "lng": 120.30206848139358,
        "ele": 6.83842368393677,
        "distanceKm": 0.3470808593070202,
        "gradePct": 1.701367410870172,
        "smoothedEle": 11.751612153058307,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.627485,
        "lng": 120.301533,
        "ele": 9.25,
        "distanceKm": 0.40212137649468527,
        "gradePct": 1.8856225297336282,
        "smoothedEle": 12.654268567395578,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.627347,
        "lng": 120.30117,
        "ele": 16.5,
        "distanceKm": 0.44241455392790185,
        "gradePct": 1.7380806263544677,
        "smoothedEle": 13.068424716521813,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.627131,
        "lng": 120.300488,
        "ele": 18.75,
        "distanceKm": 0.5164183812960897,
        "gradePct": 1.2414712580060971,
        "smoothedEle": 13.559357376903806,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.627614871743777,
        "lng": 120.30030028398338,
        "ele": 19.933600074693544,
        "distanceKm": 0.5735680303389954,
        "gradePct": 0.8792745437590384,
        "smoothedEle": 13.944546963154929,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.62809893587189,
        "lng": 120.30011314199169,
        "ele": 16.34180003734677,
        "distanceKm": 0.6307179691617947,
        "gradePct": 0.779773331585921,
        "smoothedEle": 14.507747242178352,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.628583,
        "lng": 120.299926,
        "ele": 12.75,
        "distanceKm": 0.6878678852507107,
        "gradePct": 0.535540728376473,
        "smoothedEle": 14.441038211050458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.629072,
        "lng": 120.299758,
        "ele": 11,
        "distanceKm": 0.7449107139519283,
        "gradePct": -0.08671906878117583,
        "smoothedEle": 13.577958035919055,
        "gradeBand": "descent"
      },
      {
        "lat": 22.629502,
        "lng": 120.299597,
        "ele": 11.5,
        "distanceKm": 0.7954994048731636,
        "gradePct": -0.747611862299068,
        "smoothedEle": 12.665452188323634,
        "gradeBand": "descent"
      },
      {
        "lat": 22.629911,
        "lng": 120.299451,
        "ele": 12.25,
        "distanceKm": 0.8433832065062011,
        "gradePct": -1.3971166171247273,
        "smoothedEle": 11.698730334214737,
        "gradeBand": "descent"
      },
      {
        "lat": 22.630255,
        "lng": 120.29933,
        "ele": 11.5,
        "distanceKm": 0.8835997658002082,
        "gradePct": -1.6927869905514166,
        "smoothedEle": 11.060446251493172,
        "gradeBand": "descent"
      },
      {
        "lat": 22.630738922705554,
        "lng": 120.29912928311063,
        "ele": 9.581524106753688,
        "distanceKm": 0.9412180790184602,
        "gradePct": -1.6142193106375717,
        "smoothedEle": 10.405390416795072,
        "gradeBand": "descent"
      },
      {
        "lat": 22.631223,
        "lng": 120.298929,
        "ele": 9.5,
        "distanceKm": 0.9988365221226133,
        "gradePct": -1.1884714443154099,
        "smoothedEle": 10.221136533438997,
        "gradeBand": "descent"
      },
      {
        "lat": 22.631589,
        "lng": 120.298762,
        "ele": 10,
        "distanceKm": 1.0429958697686796,
        "gradePct": -0.7432554788527954,
        "smoothedEle": 10.220039283790754,
        "gradeBand": "descent"
      },
      {
        "lat": 22.631918,
        "lng": 120.298626,
        "ele": 9.75,
        "distanceKm": 1.082151410636561,
        "gradePct": -0.4649350597089425,
        "smoothedEle": 10.153563231501797,
        "gradeBand": "descent"
      },
      {
        "lat": 22.632252211556867,
        "lng": 120.29850802450802,
        "ele": 9.04231631336102,
        "distanceKm": 1.1212368475680294,
        "gradePct": -0.31357645184954036,
        "smoothedEle": 10.005401786310287,
        "gradeBand": "descent"
      },
      {
        "lat": 22.632584,
        "lng": 120.298382,
        "ele": 8.25,
        "distanceKm": 1.1603316591824593,
        "gradePct": -0.25325869176412225,
        "smoothedEle": 9.837751087231451,
        "gradeBand": "descent"
      },
      {
        "lat": 22.632902,
        "lng": 120.298266,
        "ele": 9.75,
        "distanceKm": 1.1976420941584207,
        "gradePct": -0.2250852503250274,
        "smoothedEle": 9.774785608239702,
        "gradeBand": "descent"
      },
      {
        "lat": 22.633495,
        "lng": 120.298024,
        "ele": 11.25,
        "distanceKm": 1.2681032857905943,
        "gradePct": -0.1662893788209683,
        "smoothedEle": 9.844834581944776,
        "gradeBand": "descent"
      },
      {
        "lat": 22.633907973730853,
        "lng": 120.29786602486024,
        "ele": 10.894582556928375,
        "distanceKm": 1.3168020886212717,
        "gradePct": -0.03376960439155498,
        "smoothedEle": 9.954673449970018,
        "gradeBand": "descent"
      },
      {
        "lat": 22.634325,
        "lng": 120.297721,
        "ele": 10,
        "distanceKm": 1.3655035192623541,
        "gradePct": 0.072597903999303,
        "smoothedEle": 9.974218810247432,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.634658287757915,
        "lng": 120.29759385914167,
        "ele": 9,
        "distanceKm": 1.4047935348670184,
        "gradePct": 0.06046683986428116,
        "smoothedEle": 9.902828890723281,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.634989,
        "lng": 120.297459,
        "ele": 8.75,
        "distanceKm": 1.444085511856213,
        "gradePct": -0.0052739627025655276,
        "smoothedEle": 9.810409393385104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.635393589315466,
        "lng": 120.29730527230993,
        "ele": 10.5,
        "distanceKm": 1.4917601141869001,
        "gradePct": -0.1603151460036641,
        "smoothedEle": 9.57756164373426,
        "gradeBand": "descent"
      },
      {
        "lat": 22.635798,
        "lng": 120.297151,
        "ele": 11.25,
        "distanceKm": 1.5394344915593678,
        "gradePct": -0.3475041392625756,
        "smoothedEle": 9.268748240741717,
        "gradeBand": "descent"
      },
      {
        "lat": 22.636168,
        "lng": 120.297013,
        "ele": 9.75,
        "distanceKm": 1.5829461700726253,
        "gradePct": -0.45549111555765187,
        "smoothedEle": 9.031543299848083,
        "gradeBand": "descent"
      },
      {
        "lat": 22.636753,
        "lng": 120.296786,
        "ele": 7.75,
        "distanceKm": 1.652041254543725,
        "gradePct": -0.5144875522901505,
        "smoothedEle": 8.742577608496514,
        "gradeBand": "descent"
      },
      {
        "lat": 22.637206,
        "lng": 120.296633,
        "ele": 7.5,
        "distanceKm": 1.7048033100020477,
        "gradePct": -0.5153357121158015,
        "smoothedEle": 8.462402200831647,
        "gradeBand": "descent"
      },
      {
        "lat": 22.637707,
        "lng": 120.296506,
        "ele": 8,
        "distanceKm": 1.7620164514229009,
        "gradePct": -0.5761199828620953,
        "smoothedEle": 7.993402188612249,
        "gradeBand": "descent"
      },
      {
        "lat": 22.638141747924227,
        "lng": 120.29641148533784,
        "ele": 8.193474369809973,
        "distanceKm": 1.811321825331235,
        "gradePct": -0.6553608854745995,
        "smoothedEle": 7.602150412102036,
        "gradeBand": "descent"
      },
      {
        "lat": 22.638579,
        "lng": 120.296331,
        "ele": 8,
        "distanceKm": 1.8606387569361273,
        "gradePct": -0.586106619496898,
        "smoothedEle": 7.5247101826677545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.639154,
        "lng": 120.296298,
        "ele": 6.25,
        "distanceKm": 1.924665560880047,
        "gradePct": -0.23225719171097578,
        "smoothedEle": 7.8350686525614766,
        "gradeBand": "descent"
      },
      {
        "lat": 22.63951,
        "lng": 120.296284,
        "ele": 6,
        "distanceKm": 1.964277075266817,
        "gradePct": 0.013499616131612326,
        "smoothedEle": 8.00246274553761,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.639836,
        "lng": 120.296276,
        "ele": 6,
        "distanceKm": 2.0005359677813965,
        "gradePct": 0.2124791081027118,
        "smoothedEle": 8.11269739060761,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64036300017176,
        "lng": 120.29625565852925,
        "ele": 7.917683843216549,
        "distanceKm": 2.0591729664870524,
        "gradePct": 0.3660840702535887,
        "smoothedEle": 8.259179990066707,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64089,
        "lng": 120.296233,
        "ele": 10.25,
        "distanceKm": 2.117818873922552,
        "gradePct": 0.30873180713069426,
        "smoothedEle": 8.419344177505918,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.640956,
        "lng": 120.295819,
        "ele": 10.5,
        "distanceKm": 2.1609351611882763,
        "gradePct": 0.29999775572343,
        "smoothedEle": 8.588335679631852,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64099029394327,
        "lng": 120.29532500391241,
        "ele": 9.27521631176854,
        "distanceKm": 2.2117751425459047,
        "gradePct": 0.36091239064814984,
        "smoothedEle": 8.862599044384107,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.641024398892707,
        "lng": 120.2948309923363,
        "ele": 9.22371942973459,
        "distanceKm": 2.2626151244595363,
        "gradePct": 0.40544412856658735,
        "smoothedEle": 9.079468910584733,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.641058490051684,
        "lng": 120.29433697962806,
        "ele": 9.5,
        "distanceKm": 2.313455095326369,
        "gradePct": 0.3085539202650717,
        "smoothedEle": 9.024534373931212,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64109330302708,
        "lng": 120.29384302592332,
        "ele": 9.406707560902886,
        "distanceKm": 2.3642950633962125,
        "gradePct": -0.002668026944230737,
        "smoothedEle": 8.601125086457172,
        "gradeBand": "descent"
      },
      {
        "lat": 22.641127491568252,
        "lng": 120.29334902071044,
        "ele": 9.022566648863029,
        "distanceKm": 2.415135050366095,
        "gradePct": -0.4770765036735836,
        "smoothedEle": 7.922778511833034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.641161680109423,
        "lng": 120.29285501549755,
        "ele": 8.638425736823173,
        "distanceKm": 2.4659750247533676,
        "gradePct": -0.9114416449876598,
        "smoothedEle": 7.252955119594235,
        "gradeBand": "descent"
      },
      {
        "lat": 22.641195846339333,
        "lng": 120.2923610083061,
        "ele": 7.427188693548878,
        "distanceKm": 2.516815003594584,
        "gradePct": -1.1649547302137124,
        "smoothedEle": 6.666642670008498,
        "gradeBand": "descent"
      },
      {
        "lat": 22.64123,
        "lng": 120.291867,
        "ele": 5.75,
        "distanceKm": 2.567654979514245,
        "gradePct": -1.2001633559872171,
        "smoothedEle": 6.155967765241199,
        "gradeBand": "descent"
      },
      {
        "lat": 22.641643,
        "lng": 120.291834,
        "ele": 4,
        "distanceKm": 2.6137032525743193,
        "gradePct": -1.1099127354168021,
        "smoothedEle": 5.722057198681076,
        "gradeBand": "descent"
      },
      {
        "lat": 22.642028,
        "lng": 120.291803,
        "ele": 3.5,
        "distanceKm": 2.656631405967337,
        "gradePct": -1.0626442657109463,
        "smoothedEle": 5.250770002492944,
        "gradeBand": "descent"
      },
      {
        "lat": 22.642177,
        "lng": 120.291267,
        "ele": 3,
        "distanceKm": 2.714079393271026,
        "gradePct": -1.1116469041576855,
        "smoothedEle": 4.4748973089284565,
        "gradeBand": "descent"
      },
      {
        "lat": 22.642342,
        "lng": 120.2907435,
        "ele": 3.999999999999996,
        "distanceKm": 2.770849996387107,
        "gradePct": -1.2209000940703045,
        "smoothedEle": 3.6840610934184723,
        "gradeBand": "descent"
      },
      {
        "lat": 22.642507,
        "lng": 120.29022,
        "ele": 5,
        "distanceKm": 2.8276205384308226,
        "gradePct": -1.2987162481387216,
        "smoothedEle": 2.9718336291466363,
        "gradeBand": "descent"
      },
      {
        "lat": 22.64266584292674,
        "lng": 120.28975506179125,
        "ele": 3.8674523776321967,
        "distanceKm": 2.8784988524119415,
        "gradePct": -1.2412532118161184,
        "smoothedEle": 2.4729293927444433,
        "gradeBand": "descent"
      },
      {
        "lat": 22.642827,
        "lng": 120.289291,
        "ele": 2.25,
        "distanceKm": 2.9293828259201757,
        "gradePct": -0.9867738150660132,
        "smoothedEle": 2.2881670086067363,
        "gradeBand": "descent"
      },
      {
        "lat": 22.642992159363054,
        "lng": 120.28879132968746,
        "ele": 1.1910368834266962,
        "distanceKm": 2.9838506223180596,
        "gradePct": -0.5590735731270229,
        "smoothedEle": 2.402811702454154,
        "gradeBand": "descent"
      },
      {
        "lat": 22.643156677794618,
        "lng": 120.28829139770937,
        "ele": 0.3408124309141056,
        "distanceKm": 3.0383196652149365,
        "gradePct": -0.16355735552484804,
        "smoothedEle": 2.5398050705119086,
        "gradeBand": "descent"
      },
      {
        "lat": 22.643325,
        "lng": 120.287793,
        "ele": -0.75,
        "distanceKm": 3.0927842651612267,
        "gradePct": 0.03596429154720979,
        "smoothedEle": 2.492986890780579,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.643829,
        "lng": 120.287984,
        "ele": 1.75,
        "distanceKm": 3.1521555324364385,
        "gradePct": 0.00197462129883008,
        "smoothedEle": 2.340048610126401,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.644355,
        "lng": 120.288168,
        "ele": 4.25,
        "distanceKm": 3.2136167003296396,
        "gradePct": 0.045764349353804426,
        "smoothedEle": 2.569204123081687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64469370015628,
        "lng": 120.28821270025486,
        "ele": 5.027078023560234,
        "distanceKm": 3.251556833051654,
        "gradePct": 0.21232664287674058,
        "smoothedEle": 2.9530795872388227,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.645037,
        "lng": 120.288202,
        "ele": 5.25,
        "distanceKm": 3.28974587730126,
        "gradePct": 0.46294535328397735,
        "smoothedEle": 3.421489418404077,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.645646,
        "lng": 120.288193,
        "ele": 2.75,
        "distanceKm": 3.357469979384181,
        "gradePct": 1.002127242704234,
        "smoothedEle": 4.364117798999336,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.646024273389486,
        "lng": 120.28817533874404,
        "ele": 2.8140084458360533,
        "distanceKm": 3.399571149691385,
        "gradePct": 1.0979695776500327,
        "smoothedEle": 4.71277500306942,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64640263669474,
        "lng": 120.28815916937202,
        "ele": 4.532004222918027,
        "distanceKm": 3.4416759972333413,
        "gradePct": 1.0273081004153553,
        "smoothedEle": 4.90772222013801,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.646781,
        "lng": 120.288143,
        "ele": 6.25,
        "distanceKm": 3.4837808445955254,
        "gradePct": 0.7883140043896468,
        "smoothedEle": 4.924952989122912,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647189,
        "lng": 120.288138,
        "ele": 6.75,
        "distanceKm": 3.5291513388530626,
        "gradePct": 0.44395913299696954,
        "smoothedEle": 4.857878690535604,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64764813003594,
        "lng": 120.28811821506626,
        "ele": 6.641707079095973,
        "distanceKm": 3.580244697055819,
        "gradePct": 0.07734180070675471,
        "smoothedEle": 4.707408256919161,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.648107550498388,
        "lng": 120.28810720804843,
        "ele": 5,
        "distanceKm": 3.6313424784370705,
        "gradePct": -0.12751307573857573,
        "smoothedEle": 4.604851441510704,
        "gradeBand": "descent"
      },
      {
        "lat": 22.648567,
        "lng": 120.288098,
        "ele": 4.5,
        "distanceKm": 3.6824397406243823,
        "gradePct": -0.30733696520061143,
        "smoothedEle": 4.309730232300048,
        "gradeBand": "descent"
      },
      {
        "lat": 22.64911131983359,
        "lng": 120.28808427113223,
        "ele": 4.4533491827490534,
        "distanceKm": 3.7429818229389404,
        "gradePct": -0.5340017072269432,
        "smoothedEle": 3.7491443668064077,
        "gradeBand": "descent"
      },
      {
        "lat": 22.649656,
        "lng": 120.288083,
        "ele": 3.5,
        "distanceKm": 3.8035477182147006,
        "gradePct": -0.7215509440425454,
        "smoothedEle": 3.2175355781099206,
        "gradeBand": "descent"
      },
      {
        "lat": 22.650111,
        "lng": 120.288063,
        "ele": 1.75,
        "distanceKm": 3.8541830910556287,
        "gradePct": -0.8613785750075091,
        "smoothedEle": 2.7501743230560667,
        "gradeBand": "descent"
      },
      {
        "lat": 22.650768,
        "lng": 120.288017,
        "ele": 0,
        "distanceKm": 3.9273906064293818,
        "gradePct": -0.7375147625832015,
        "smoothedEle": 2.418480797797545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.651128486189435,
        "lng": 120.28801514827539,
        "ele": 0.8426107700187969,
        "distanceKm": 3.9674753475849442,
        "gradePct": -0.5707103546323147,
        "smoothedEle": 2.392735124660619,
        "gradeBand": "descent"
      },
      {
        "lat": 22.651489,
        "lng": 120.288025,
        "ele": 2.25,
        "distanceKm": 4.007575455449119,
        "gradePct": -0.35832346319943625,
        "smoothedEle": 2.4637128944628754,
        "gradeBand": "descent"
      },
      {
        "lat": 22.65193405599656,
        "lng": 120.28803511490901,
        "ele": 2.25,
        "distanceKm": 4.05707437677147,
        "gradePct": -0.009502237400950344,
        "smoothedEle": 2.7180698168336104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.652379,
        "lng": 120.288049,
        "ele": 1.75,
        "distanceKm": 4.106570473939679,
        "gradePct": 0.33953332852408286,
        "smoothedEle": 3.1918807088374863,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.65275649703638,
        "lng": 120.28807007851472,
        "ele": 2.8678000231212897,
        "distanceKm": 4.148601980504027,
        "gradePct": 0.6488694315795868,
        "smoothedEle": 3.7025959954928083,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.653134,
        "lng": 120.288091,
        "ele": 4,
        "distanceKm": 4.190633318815989,
        "gradePct": 0.9324012978758148,
        "smoothedEle": 4.298527663798233,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.65351749470054,
        "lng": 120.2881180873474,
        "ele": 5.268809540855303,
        "distanceKm": 4.233366539530799,
        "gradePct": 1.1103969763831414,
        "smoothedEle": 4.817037831670202,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.653901,
        "lng": 120.288145,
        "ele": 6.25,
        "distanceKm": 4.276099773527913,
        "gradePct": 1.144156216173389,
        "smoothedEle": 5.188506511973533,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.654352942465746,
        "lng": 120.28817209852284,
        "ele": 7.285210486778234,
        "distanceKm": 4.326430428270049,
        "gradePct": 1.0728155860690698,
        "smoothedEle": 5.578825673838808,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.654805,
        "lng": 120.288197,
        "ele": 7.5,
        "distanceKm": 4.376761908549924,
        "gradePct": 0.9373568123491258,
        "smoothedEle": 5.97656868672848,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.654846234423353,
        "lng": 120.28774894325457,
        "ele": 7.076409216034654,
        "distanceKm": 4.422967529309469,
        "gradePct": 0.7563038792140995,
        "smoothedEle": 6.203467585132457,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.654848695352797,
        "lng": 120.28729628604547,
        "ele": 6.730341013362212,
        "distanceKm": 4.469417972747152,
        "gradePct": 0.5754560212622056,
        "smoothedEle": 6.2813354307576095,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.654851156282238,
        "lng": 120.28684362883638,
        "ele": 6.38427281068977,
        "distanceKm": 4.515868415352137,
        "gradePct": 0.38364549919242885,
        "smoothedEle": 6.264207226561749,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.65485361721168,
        "lng": 120.28639097162728,
        "ele": 6.0382046080173275,
        "distanceKm": 4.562318857124426,
        "gradePct": 0.16202633589440638,
        "smoothedEle": 6.186485577941111,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.65485607814112,
        "lng": 120.28593831441819,
        "ele": 5.692136405344884,
        "distanceKm": 4.6087692980640185,
        "gradePct": -0.0348772385151985,
        "smoothedEle": 6.063990789130461,
        "gradeBand": "descent"
      },
      {
        "lat": 22.65485853907056,
        "lng": 120.2854856572091,
        "ele": 5.346068202672442,
        "distanceKm": 4.655219738170914,
        "gradePct": -0.14838986739462212,
        "smoothedEle": 5.960754288353916,
        "gradeBand": "descent"
      },
      {
        "lat": 22.654861,
        "lng": 120.285033,
        "ele": 5,
        "distanceKm": 4.701670177445115,
        "gradePct": -0.17086209430701987,
        "smoothedEle": 5.9277185169755615,
        "gradeBand": "descent"
      },
      {
        "lat": 22.65485821552471,
        "lng": 120.28554516942411,
        "ele": 5.391566838007367,
        "distanceKm": 4.754227596796564,
        "gradePct": -0.1128102523463598,
        "smoothedEle": 5.974403504059944,
        "gradeBand": "descent"
      },
      {
        "lat": 22.654855431049416,
        "lng": 120.28605733884822,
        "ele": 5.7831336760147405,
        "distanceKm": 4.806785017214057,
        "gradePct": 0.005958511371609626,
        "smoothedEle": 6.081140573043227,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.654852646574124,
        "lng": 120.28656950827234,
        "ele": 6.174700514022114,
        "distanceKm": 4.8593424386975945,
        "gradePct": 0.09697320622396335,
        "smoothedEle": 6.151768616752932,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.654849862098832,
        "lng": 120.28708167769645,
        "ele": 6.566267352029481,
        "distanceKm": 4.911899861247175,
        "gradePct": 0.11336761502260363,
        "smoothedEle": 6.163540430919439,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.65484707762354,
        "lng": 120.28759384712056,
        "ele": 6.957834190036848,
        "distanceKm": 4.9644572848627995,
        "gradePct": 0.04514993857613488,
        "smoothedEle": 6.08547850510775,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.654821,
        "lng": 120.288103,
        "ele": 7.5,
        "distanceKm": 5.016784662587233,
        "gradePct": -0.1195647533908687,
        "smoothedEle": 5.855448852411623,
        "gradeBand": "descent"
      },
      {
        "lat": 22.654427473977783,
        "lng": 120.28808458082216,
        "ele": 6.870547951746625,
        "distanceKm": 5.060583621709606,
        "gradePct": -0.3073126414092806,
        "smoothedEle": 5.537421334168309,
        "gradeBand": "descent"
      },
      {
        "lat": 22.654034,
        "lng": 120.288065,
        "ele": 6.25,
        "distanceKm": 5.104382106062335,
        "gradePct": -0.4716312940492405,
        "smoothedEle": 5.218594015633623,
        "gradeBand": "descent"
      },
      {
        "lat": 22.65351651242339,
        "lng": 120.28803117964826,
        "ele": 5.072654941731286,
        "distanceKm": 5.162028741868864,
        "gradePct": -0.6806526790962172,
        "smoothedEle": 4.72778018717683,
        "gradeBand": "descent"
      },
      {
        "lat": 22.652999,
        "lng": 120.287998,
        "ele": 3.5,
        "distanceKm": 5.219674215644505,
        "gradePct": -0.9044615393159231,
        "smoothedEle": 4.0255445128993745,
        "gradeBand": "descent"
      },
      {
        "lat": 22.652408,
        "lng": 120.287966,
        "ele": 2,
        "distanceKm": 5.285472498915997,
        "gradePct": -1.085871505835829,
        "smoothedEle": 3.1845018708837025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.652032067283013,
        "lng": 120.28794822031665,
        "ele": 2.31277484580705,
        "distanceKm": 5.3273141652520115,
        "gradePct": -1.1062899861649944,
        "smoothedEle": 2.8107663656584436,
        "gradeBand": "descent"
      },
      {
        "lat": 22.651656065244396,
        "lng": 120.28793187240193,
        "ele": 2.46414442657243,
        "distanceKm": 5.369157384664413,
        "gradePct": -1.0583363868138491,
        "smoothedEle": 2.524266470933263,
        "gradeBand": "descent"
      },
      {
        "lat": 22.65128,
        "lng": 120.287919,
        "ele": 1.5,
        "distanceKm": 5.410994848005413,
        "gradePct": -0.8891297773000364,
        "smoothedEle": 2.3530167909504094,
        "gradeBand": "descent"
      },
      {
        "lat": 22.650785,
        "lng": 120.287918,
        "ele": 0,
        "distanceKm": 5.466036508380745,
        "gradePct": -0.5736866713453647,
        "smoothedEle": 2.2855620133420005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.65031313989971,
        "lng": 120.28794940974949,
        "ele": 1.4277158859048282,
        "distanceKm": 5.518603940940207,
        "gradePct": -0.322655017363949,
        "smoothedEle": 2.243257249700255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.649841,
        "lng": 120.287971,
        "ele": 2.75,
        "distanceKm": 5.57115030454232,
        "gradePct": -0.15207953300133323,
        "smoothedEle": 2.2119499578946393,
        "gradeBand": "descent"
      },
      {
        "lat": 22.649837,
        "lng": 120.288407,
        "ele": 3,
        "distanceKm": 5.615894497336004,
        "gradePct": -0.07743805273470043,
        "smoothedEle": 2.19213605637461,
        "gradeBand": "descent"
      },
      {
        "lat": 22.649767,
        "lng": 120.288937,
        "ele": 4,
        "distanceKm": 5.670836849071989,
        "gradePct": 0.008593460393703893,
        "smoothedEle": 2.2988857574731543,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.649652,
        "lng": 120.289431,
        "ele": 3.25,
        "distanceKm": 5.723118724763001,
        "gradePct": 0.20315174997677216,
        "smoothedEle": 2.646870826985701,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64953,
        "lng": 120.289882,
        "ele": 1.75,
        "distanceKm": 5.771347291556159,
        "gradePct": 0.45057713030205543,
        "smoothedEle": 3.1130169874850875,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.649395485316326,
        "lng": 120.29033449239178,
        "ele": 1.832584648650559,
        "distanceKm": 5.820131407712573,
        "gradePct": 0.7059823156521516,
        "smoothedEle": 3.6123327509595944,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64926,
        "lng": 120.290787,
        "ele": 2.5,
        "distanceKm": 5.868950252243337,
        "gradePct": 0.8796656078471783,
        "smoothedEle": 4.05455142844311,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.649209777813788,
        "lng": 120.29115443568375,
        "ele": 3.1624573668476628,
        "distanceKm": 5.9070676827228015,
        "gradePct": 0.9055547635465957,
        "smoothedEle": 4.3511455684809475,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.649171,
        "lng": 120.291524,
        "ele": 3.75,
        "distanceKm": 5.945236603104707,
        "gradePct": 0.845281520741589,
        "smoothedEle": 4.5512109875692,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.649144,
        "lng": 120.291968,
        "ele": 5.25,
        "distanceKm": 5.9908985713061185,
        "gradePct": 0.7493098197601318,
        "smoothedEle": 4.811748117064008,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.649149,
        "lng": 120.292324,
        "ele": 7,
        "distanceKm": 6.027435429961856,
        "gradePct": 0.6972979389912903,
        "smoothedEle": 5.07309109326172,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.649014,
        "lng": 120.292691,
        "ele": 7.5,
        "distanceKm": 6.067978321106931,
        "gradePct": 0.6439022310702772,
        "smoothedEle": 5.333551788276909,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.648868,
        "lng": 120.29332,
        "ele": 7.25,
        "distanceKm": 6.134536503753116,
        "gradePct": 0.5237533833710994,
        "smoothedEle": 5.5426323361323515,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.648754820726996,
        "lng": 120.29381695265295,
        "ele": 6.552592507898806,
        "distanceKm": 6.187063677806939,
        "gradePct": 0.4106053899300269,
        "smoothedEle": 5.611077839590145,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64864164145399,
        "lng": 120.29431390530588,
        "ele": 5.855185015797613,
        "distanceKm": 6.239590892668693,
        "gradePct": 0.3814923224863028,
        "smoothedEle": 5.9141663769488915,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.648528638778362,
        "lng": 120.29481090459923,
        "ele": 5.007462440959826,
        "distanceKm": 6.292118094278639,
        "gradePct": 0.4928764930912126,
        "smoothedEle": 6.395135525828808,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.648415819389182,
        "lng": 120.29530795229962,
        "ele": 4.003731220479913,
        "distanceKm": 6.344645288766647,
        "gradePct": 0.7761278618183007,
        "smoothedEle": 7.108060306174,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.648303,
        "lng": 120.295805,
        "ele": 3,
        "distanceKm": 6.397172523947986,
        "gradePct": 1.023409988143479,
        "smoothedEle": 7.716227110497774,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.648194,
        "lng": 120.296263,
        "ele": 6,
        "distanceKm": 6.4457102910809,
        "gradePct": 1.0588370837810475,
        "smoothedEle": 8.087873261955785,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.648092,
        "lng": 120.296637,
        "ele": 8.75,
        "distanceKm": 6.485731135394418,
        "gradePct": 0.972465156195098,
        "smoothedEle": 8.281583183816691,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64804157731428,
        "lng": 120.2970947980069,
        "ele": 12.242268571757712,
        "distanceKm": 6.533044003799319,
        "gradePct": 0.7481099188390539,
        "smoothedEle": 8.446821828827453,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.648009,
        "lng": 120.297555,
        "ele": 15,
        "distanceKm": 6.580408923344439,
        "gradePct": 0.8056159633167029,
        "smoothedEle": 9.13336800277876,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647967033622525,
        "lng": 120.29809766754445,
        "ele": 12.389347783674772,
        "distanceKm": 6.6362929678385285,
        "gradePct": 1.1103987906252293,
        "smoothedEle": 10.236563860400889,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647923376377086,
        "lng": 120.29864018867988,
        "ele": 9.594219264551558,
        "distanceKm": 6.69217807561781,
        "gradePct": 1.5047873787036017,
        "smoothedEle": 11.313673669035241,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647883,
        "lng": 120.299183,
        "ele": 7,
        "distanceKm": 6.748062375595566,
        "gradePct": 1.689610272261445,
        "smoothedEle": 12.043731029738101,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647841,
        "lng": 120.299809,
        "ele": 12,
        "distanceKm": 6.812472469660517,
        "gradePct": 1.357233132585894,
        "smoothedEle": 12.480794387369134,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647814799314045,
        "lng": 120.30025237146027,
        "ele": 13.75,
        "distanceKm": 6.858064750881462,
        "gradePct": 0.9532315203354652,
        "smoothedEle": 12.562648549823406,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647780899657022,
        "lng": 120.30069518573013,
        "ele": 13.75,
        "distanceKm": 6.903662757243511,
        "gradePct": 0.6529716748929134,
        "smoothedEle": 12.769649789375755,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647747,
        "lng": 120.301138,
        "ele": 13.75,
        "distanceKm": 6.9492607747851265,
        "gradePct": 0.47615504587644386,
        "smoothedEle": 13.004173020398687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.6476955,
        "lng": 120.30172499999999,
        "ele": 14.874999999999991,
        "distanceKm": 7.009770772836111,
        "gradePct": 0.49153911710914544,
        "smoothedEle": 13.445539894357042,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647644,
        "lng": 120.302312,
        "ele": 16,
        "distanceKm": 7.070280793378471,
        "gradePct": 0.4708178257670226,
        "smoothedEle": 13.559741361462804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647623,
        "lng": 120.302684,
        "ele": 15.75,
        "distanceKm": 7.1085271084339885,
        "gradePct": 0.31314932537274814,
        "smoothedEle": 13.420967145309033,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647598,
        "lng": 120.303181,
        "ele": 13.25,
        "distanceKm": 7.159605392844684,
        "gradePct": 0.05609076375020101,
        "smoothedEle": 13.191809379865749,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.647581160055182,
        "lng": 120.30370742041345,
        "ele": 11.675558621265354,
        "distanceKm": 7.213659575790496,
        "gradePct": -0.20278925861585045,
        "smoothedEle": 13.047300773124473,
        "gradeBand": "descent"
      },
      {
        "lat": 22.647568,
        "lng": 120.304234,
        "ele": 11.25,
        "distanceKm": 7.267717465600529,
        "gradePct": -0.31295101965803046,
        "smoothedEle": 12.929001515279547,
        "gradeBand": "descent"
      },
      {
        "lat": 22.647137841512958,
        "lng": 120.30419852721481,
        "ele": 11.25,
        "distanceKm": 7.3156872953773435,
        "gradePct": -0.2956879854697545,
        "smoothedEle": 12.797467690602872,
        "gradeBand": "descent"
      },
      {
        "lat": 22.646707683025912,
        "lng": 120.30416305442962,
        "ele": 11.25,
        "distanceKm": 7.3636571260198656,
        "gradePct": -0.31405884038946635,
        "smoothedEle": 12.552859784068882,
        "gradeBand": "descent"
      },
      {
        "lat": 22.646277526921452,
        "lng": 120.30412754787612,
        "ele": 11.847214329648416,
        "distanceKm": 7.411626956461229,
        "gradePct": -0.345984694058927,
        "smoothedEle": 12.360765395314427,
        "gradeBand": "descent"
      },
      {
        "lat": 22.64584737278683,
        "lng": 120.30409201340413,
        "ele": 12.938184960944353,
        "distanceKm": 7.459596787079548,
        "gradePct": -0.3316838418119132,
        "smoothedEle": 12.28340497007058,
        "gradeBand": "descent"
      },
      {
        "lat": 22.645417164286606,
        "lng": 120.30405737558448,
        "ele": 13.75,
        "distanceKm": 7.507565739853612,
        "gradePct": -0.27228581119442885,
        "smoothedEle": 12.275165466819985,
        "gradeBand": "descent"
      },
      {
        "lat": 22.644987,
        "lng": 120.304022,
        "ele": 14.25,
        "distanceKm": 7.555535461043527,
        "gradePct": -0.14777051864008317,
        "smoothedEle": 12.298732765575592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.644512391322493,
        "lng": 120.303983117221,
        "ele": 12.846934110925954,
        "distanceKm": 7.608460248699797,
        "gradePct": -0.010894435341620037,
        "smoothedEle": 12.351657553231862,
        "gradeBand": "descent"
      },
      {
        "lat": 22.644037824901226,
        "lng": 120.30394363621217,
        "ele": 11.884940815257663,
        "distanceKm": 7.661385016597678,
        "gradePct": 0.08029867925645011,
        "smoothedEle": 12.443695169013063,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64356317924225,
        "lng": 120.30390530310777,
        "ele": 11.454837574636054,
        "distanceKm": 7.714309683967483,
        "gradePct": 0.1509160345622361,
        "smoothedEle": 12.580310804018154,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.64308861290272,
        "lng": 120.30386582158732,
        "ele": 11.412307256071152,
        "distanceKm": 7.767234448966452,
        "gradePct": 0.13738348978182546,
        "smoothedEle": 12.585198733062168,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.642614,
        "lng": 120.303827,
        "ele": 11.75,
        "distanceKm": 7.82015923617166,
        "gradePct": 0.04714799334528226,
        "smoothedEle": 12.46629839842123,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.642641,
        "lng": 120.303446,
        "ele": 11.75,
        "distanceKm": 7.859374308213275,
        "gradePct": -0.08270409826524443,
        "smoothedEle": 12.27479029572645,
        "gradeBand": "descent"
      },
      {
        "lat": 22.642673,
        "lng": 120.302762,
        "ele": 13.75,
        "distanceKm": 7.929659655928653,
        "gradePct": -0.32110829213596287,
        "smoothedEle": 11.939511884496847,
        "gradeBand": "descent"
      },
      {
        "lat": 22.64225770184443,
        "lng": 120.30272652691984,
        "ele": 13.655298435516594,
        "distanceKm": 7.97598203696363,
        "gradePct": -0.38332886352140216,
        "smoothedEle": 11.79888875619297,
        "gradeBand": "descent"
      },
      {
        "lat": 22.641842350922214,
        "lng": 120.30269176345992,
        "ele": 13.202649217758298,
        "distanceKm": 8.022304602500112,
        "gradePct": -0.5072639384191437,
        "smoothedEle": 11.441293554086592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.641427,
        "lng": 120.302657,
        "ele": 12.75,
        "distanceKm": 8.068627168867424,
        "gradePct": -0.618427987834114,
        "smoothedEle": 10.99379589689761,
        "gradeBand": "descent"
      },
      {
        "lat": 22.64124,
        "lng": 120.302569,
        "ele": 10.5,
        "distanceKm": 8.091297164332243,
        "gradePct": -0.6838685994107119,
        "smoothedEle": 10.754773214548592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.641121,
        "lng": 120.302404,
        "ele": 9.25,
        "distanceKm": 8.112787304090837,
        "gradePct": -0.7561802745106585,
        "smoothedEle": 10.50763660732476,
        "gradeBand": "descent"
      },
      {
        "lat": 22.640974,
        "lng": 120.301949,
        "ele": 10.25,
        "distanceKm": 8.162260322531482,
        "gradePct": -0.9174819299377558,
        "smoothedEle": 10.005580579078757,
        "gradeBand": "descent"
      },
      {
        "lat": 22.640645,
        "lng": 120.301801,
        "ele": 10,
        "distanceKm": 8.201871230919382,
        "gradePct": -0.9499563595864717,
        "smoothedEle": 9.699119845167113,
        "gradeBand": "descent"
      },
      {
        "lat": 22.640117,
        "lng": 120.301759,
        "ele": 7.25,
        "distanceKm": 8.2607402424737,
        "gradePct": -0.758396309186729,
        "smoothedEle": 9.553194676376066,
        "gradeBand": "descent"
      },
      {
        "lat": 22.639652008876162,
        "lng": 120.30172236433569,
        "ele": 6.545467994185944,
        "distanceKm": 8.312581487506225,
        "gradePct": -0.561516997236762,
        "smoothedEle": 9.386969503574264,
        "gradeBand": "descent"
      },
      {
        "lat": 22.639187,
        "lng": 120.301686,
        "ele": 6,
        "distanceKm": 8.36442269023299,
        "gradePct": -0.23409310460539862,
        "smoothedEle": 9.520664614864575,
        "gradeBand": "descent"
      },
      {
        "lat": 22.638741,
        "lng": 120.301651,
        "ele": 9,
        "distanceKm": 8.41414560627548,
        "gradePct": 0.13908582962046584,
        "smoothedEle": 9.946865644548131,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.638273,
        "lng": 120.301615,
        "ele": 12,
        "distanceKm": 8.466315890305486,
        "gradePct": 0.4882309577834869,
        "smoothedEle": 10.511778683653231,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.638166,
        "lng": 120.301636,
        "ele": 12.5,
        "distanceKm": 8.478407384122997,
        "gradePct": 0.5661783410161736,
        "smoothedEle": 10.628902956701893,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.638115,
        "lng": 120.301659,
        "ele": 12.75,
        "distanceKm": 8.484549969553596,
        "gradePct": 0.6079825529222228,
        "smoothedEle": 10.692815628145187,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.638068,
        "lng": 120.301689,
        "ele": 12.75,
        "distanceKm": 8.490615618424064,
        "gradePct": 0.6571338010291005,
        "smoothedEle": 10.771669063461271,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.638026,
        "lng": 120.301726,
        "ele": 12.5,
        "distanceKm": 8.496634731098775,
        "gradePct": 0.7059079564040249,
        "smoothedEle": 10.849917528232506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.637941,
        "lng": 120.301859,
        "ele": 12,
        "distanceKm": 8.513237207003774,
        "gradePct": 0.8385445766093923,
        "smoothedEle": 11.065749714997501,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.637777,
        "lng": 120.302224,
        "ele": 11,
        "distanceKm": 8.554899533226045,
        "gradePct": 1.0964105881917094,
        "smoothedEle": 11.688926184816998,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.63767,
        "lng": 120.302319,
        "ele": 11.25,
        "distanceKm": 8.570281853589403,
        "gradePct": 1.1852245532179733,
        "smoothedEle": 11.941335664306708,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.637578,
        "lng": 120.302348,
        "ele": 11.75,
        "distanceKm": 8.580935947732087,
        "gradePct": 1.2269755126242268,
        "smoothedEle": 12.116159377079914,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.637526,
        "lng": 120.302349,
        "ele": 12.25,
        "distanceKm": 8.586719002618349,
        "gradePct": 1.2329484296704747,
        "smoothedEle": 12.177674788812126,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.637231,
        "lng": 120.302327,
        "ele": 13.75,
        "distanceKm": 8.61959916358862,
        "gradePct": 1.257526551339022,
        "smoothedEle": 12.520971246038117,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.636596,
        "lng": 120.302271,
        "ele": 15.5,
        "distanceKm": 8.690441551116741,
        "gradePct": 1.0443888339814287,
        "smoothedEle": 12.858183856428937,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.635996,
        "lng": 120.302229,
        "ele": 13.75,
        "distanceKm": 8.757297697732701,
        "gradePct": 0.37879931020032975,
        "smoothedEle": 12.485876440117798,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.635967,
        "lng": 120.302611,
        "ele": 14.75,
        "distanceKm": 8.796634590820908,
        "gradePct": 0.018751004621259847,
        "smoothedEle": 12.318703855124964,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.635916,
        "lng": 120.303297,
        "ele": 11.25,
        "distanceKm": 8.867266526964585,
        "gradePct": -0.34568826261854146,
        "smoothedEle": 12.0564932852809,
        "gradeBand": "descent"
      },
      {
        "lat": 22.635563,
        "lng": 120.303264,
        "ele": 10.5,
        "distanceKm": 8.906664230793567,
        "gradePct": -0.45602460601964256,
        "smoothedEle": 11.855794051013602,
        "gradeBand": "descent"
      },
      {
        "lat": 22.635131259824767,
        "lng": 120.30322820992278,
        "ele": 9.561729284223354,
        "distanceKm": 8.954811928583053,
        "gradePct": -0.5080802116143612,
        "smoothedEle": 11.483558727492298,
        "gradeBand": "descent"
      },
      {
        "lat": 22.63469954054745,
        "lng": 120.30319213111042,
        "ele": 9.427400799807986,
        "distanceKm": 9.002959580131627,
        "gradePct": -0.5274292870807457,
        "smoothedEle": 11.240364697788639,
        "gradeBand": "descent"
      },
      {
        "lat": 22.63426780878796,
        "lng": 120.30315628111563,
        "ele": 9.68480835125049,
        "distanceKm": 9.051106816152346,
        "gradePct": -0.6014479353895655,
        "smoothedEle": 10.91358794020353,
        "gradeBand": "descent"
      },
      {
        "lat": 22.63383614274805,
        "lng": 120.30311945782213,
        "ele": 10.49666547880734,
        "distanceKm": 9.099254504360058,
        "gradePct": -0.6859664407042334,
        "smoothedEle": 10.521607694828807,
        "gradeBand": "descent"
      },
      {
        "lat": 22.63340442900233,
        "lng": 120.30308329490269,
        "ele": 11.417627432458826,
        "distanceKm": 9.147402209955155,
        "gradePct": -0.6251356893036069,
        "smoothedEle": 10.290572725700335,
        "gradeBand": "descent"
      },
      {
        "lat": 22.632972675688947,
        "lng": 120.30304769093908,
        "ele": 11.730779006502722,
        "distanceKm": 9.195549915368105,
        "gradePct": -0.535336583130091,
        "smoothedEle": 10.207117785450235,
        "gradeBand": "descent"
      },
      {
        "lat": 22.632541,
        "lng": 120.303011,
        "ele": 12,
        "distanceKm": 9.243697611684238,
        "gradePct": -0.3407210228007823,
        "smoothedEle": 10.282432391034106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.632033022369637,
        "lng": 120.30296818218339,
        "ele": 10.109109169937229,
        "distanceKm": 9.300352912516608,
        "gradePct": -0.013219938206665607,
        "smoothedEle": 10.489897147852826,
        "gradeBand": "descent"
      },
      {
        "lat": 22.631525,
        "lng": 120.302926,
        "ele": 8.5,
        "distanceKm": 9.357008152049595,
        "gradePct": 0.13345360681734467,
        "smoothedEle": 10.540829855667239,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.63105735816242,
        "lng": 120.30288768989342,
        "ele": 9.132752664505514,
        "distanceKm": 9.409156064433667,
        "gradePct": 0.0958720929813829,
        "smoothedEle": 10.420145269032473,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.630589646086026,
        "lng": 120.30285032411237,
        "ele": 10.1216312555448,
        "distanceKm": 9.461304548832969,
        "gradePct": -0.05220019894290414,
        "smoothedEle": 10.242506435613828,
        "gradeBand": "descent"
      },
      {
        "lat": 22.630122,
        "lng": 120.302812,
        "ele": 11.5,
        "distanceKm": 9.51345304269877,
        "gradePct": -0.2594438470614975,
        "smoothedEle": 9.982786389250691,
        "gradeBand": "descent"
      },
      {
        "lat": 22.629703144731497,
        "lng": 120.30277848120257,
        "ele": 10.932532211728784,
        "distanceKm": 9.560154566845034,
        "gradePct": -0.3711971065706181,
        "smoothedEle": 9.791153974830998,
        "gradeBand": "descent"
      },
      {
        "lat": 22.62928432362651,
        "lng": 120.30274446589011,
        "ele": 10.107764835350105,
        "distanceKm": 9.606856085067474,
        "gradePct": -0.3586427193847563,
        "smoothedEle": 9.708182613983107,
        "gradeBand": "descent"
      },
      {
        "lat": 22.628865483817375,
        "lng": 120.30271072224492,
        "ele": 9.863682917390019,
        "distanceKm": 9.65355760210039,
        "gradePct": -0.30498783058621565,
        "smoothedEle": 9.658920008874258,
        "gradeBand": "descent"
      },
      {
        "lat": 22.628446653486645,
        "lng": 120.30267684031243,
        "ele": 10,
        "distanceKm": 9.700259123565033,
        "gradePct": -0.2508762159063016,
        "smoothedEle": 9.546744873230665,
        "gradeBand": "descent"
      },
      {
        "lat": 22.628027851270993,
        "lng": 120.30264257689258,
        "ele": 9.302196930698667,
        "distanceKm": 9.746960460245097,
        "gradePct": -0.2405117897214266,
        "smoothedEle": 9.364270352275588,
        "gradeBand": "descent"
      },
      {
        "lat": 22.627609,
        "lng": 120.302609,
        "ele": 8.25,
        "distanceKm": 9.79366198457121,
        "gradePct": -0.30561151145566545,
        "smoothedEle": 9.120400637851553,
        "gradeBand": "descent"
      },
      {
        "lat": 22.627174,
        "lng": 120.302699,
        "ele": 8.25,
        "distanceKm": 9.842905968356524,
        "gradePct": -0.3568290745219093,
        "smoothedEle": 8.956497623896057,
        "gradeBand": "descent"
      },
      {
        "lat": 22.626695529442316,
        "lng": 120.30271248942634,
        "ele": 8.25,
        "distanceKm": 9.896127551702529,
        "gradePct": -0.36397331214933665,
        "smoothedEle": 8.828722114783954,
        "gradeBand": "descent"
      },
      {
        "lat": 22.626217,
        "lng": 120.302725,
        "ele": 8.25,
        "distanceKm": 9.94935316217953,
        "gradePct": -0.3352671728730184,
        "smoothedEle": 8.681241606274483,
        "gradeBand": "descent"
      },
      {
        "lat": 22.625771834612895,
        "lng": 120.30275177302434,
        "ele": 8.660949227977389,
        "distanceKm": 9.998929576617185,
        "gradePct": -0.28002270933551376,
        "smoothedEle": 8.542822636593641,
        "gradeBand": "descent"
      },
      {
        "lat": 22.625327,
        "lng": 120.302785,
        "ele": 9,
        "distanceKm": 10.048510422829171,
        "gradePct": -0.21362927592997924,
        "smoothedEle": 8.515783778553331,
        "gradeBand": "descent"
      },
      {
        "lat": 22.624936,
        "lng": 120.302902,
        "ele": 9.25,
        "distanceKm": 10.093615635864083,
        "gradePct": -0.13550803069135278,
        "smoothedEle": 8.563736714364818,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 10.093615635864083,
      "elevationGainM": 27.290068761701683,
      "elevationLossM": 27.356169408181056,
      "minimumElevationM": -0.75,
      "maximumElevationM": 19.933600074693544,
      "maximumSustainedGradePct": 1.8856225297336282
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 208,
        "startDistanceKm": 0,
        "endDistanceKm": 10.093615635864083,
        "distanceKm": 10.093615635864083,
        "gainM": 30.464637068541904,
        "averageGradePct": 0.30182085555444194,
        "maximumGradePct": 1.8856225297336282
      }
    ]
  },
  "route-art-crown": {
    "routeId": "route-art-crown",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:22:06.175Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "fa0b795ac75adb8c9f2ad2259b36681372f68c54c8705432bc2ad6254d5ecebd",
      "roadPolicyAuditSha256": "14b76b971a3210e5485e80da896360af1f0cdae58163b82c1058c1121e2d5720",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "100/100、500/200、750/300、1000/500 公尺視窗依序為 7.00 公里、49/4.51%、24/1.73%、19/1.43%、14/0.75%。採 500/200 降低都市 SRTM 短波；僅供行程規劃。",
        "referenceUrl": "https://www.openstreetmap.org/copyright",
        "referenceLabel": "OpenStreetMap 即時道路資料"
      },
      "reviewedAt": "2026-08-01T05:30:05.845Z",
      "reviewerNote": "皇冠圖形保留高低折線與西側收邊；酒泉街、南京東路逆向齒尖與車站 service 已刪，因此齒冠數量減少。raw 的 service、track 等禁止道路與非法逆向均為 0；live OSM 五窗 5/5，最大偏差 0.04 公尺，圖形必須讓位給合法公共道路。"
    },
    "waypoints": [
      {
        "name": "民樂街公共道路",
        "lat": 25.0574605,
        "lng": 121.5106009,
        "role": "start"
      },
      {
        "name": "松江路公共主線",
        "lat": 25.0627545,
        "lng": 121.5331558,
        "role": "via"
      },
      {
        "name": "民族東路公共主線",
        "lat": 25.0683667,
        "lng": 121.5294659,
        "role": "via"
      },
      {
        "name": "民樂街公共道路",
        "lat": 25.0574605,
        "lng": 121.5106009,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 25.057461,
        "lng": 121.510601,
        "ele": 13,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 14.398109266592456,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.056925,
        "lng": 121.510632,
        "ele": 12.75,
        "distanceKm": 0.05968230835206966,
        "gradePct": 0.5522256456197041,
        "smoothedEle": 14.727690279210416,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.05693368853064,
        "lng": 121.51112326804903,
        "ele": 14.238388608518557,
        "distanceKm": 0.10917727943571251,
        "gradePct": 0.39151024226924175,
        "smoothedEle": 14.825549497814182,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.056942421928174,
        "lng": 121.51161470434803,
        "ele": 15.338870510952711,
        "distanceKm": 0.15868928923147033,
        "gradePct": 0.16885398480230024,
        "smoothedEle": 14.666062454914242,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.05695355039189,
        "lng": 121.5121061001615,
        "ele": 15.729028354156311,
        "distanceKm": 0.20820315756695607,
        "gradePct": -0.0455806634638769,
        "smoothedEle": 14.352247879500027,
        "gradeBand": "descent"
      },
      {
        "lat": 25.056963275195944,
        "lng": 121.51259755008076,
        "ele": 15.989514177078156,
        "distanceKm": 0.25771881565640736,
        "gradePct": -0.36073628586344597,
        "smoothedEle": 13.995374797268207,
        "gradeBand": "descent"
      },
      {
        "lat": 25.056973,
        "lng": 121.513089,
        "ele": 16.25,
        "distanceKm": 0.307234469817142,
        "gradePct": -0.5862171691787301,
        "smoothedEle": 13.649273924135098,
        "gradeBand": "descent"
      },
      {
        "lat": 25.056987,
        "lng": 121.513588,
        "ele": 14.75,
        "distanceKm": 0.35752293211425074,
        "gradePct": -0.7678648625462037,
        "smoothedEle": 13.134089774796537,
        "gradeBand": "descent"
      },
      {
        "lat": 25.056992793432304,
        "lng": 121.51405970553454,
        "ele": 12.508209619459626,
        "distanceKm": 0.4050422799769823,
        "gradePct": -0.9387699615521035,
        "smoothedEle": 12.49474132264612,
        "gradeBand": "descent"
      },
      {
        "lat": 25.056997915982564,
        "lng": 121.51453147301577,
        "ele": 11.251441041662385,
        "distanceKm": 0.45256691241531727,
        "gradePct": -1.1251195454762692,
        "smoothedEle": 11.782266901980815,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057003457991282,
        "lng": 121.51500323650788,
        "ele": 10.125720520831193,
        "distanceKm": 0.5000917229000779,
        "gradePct": -1.3665992584797921,
        "smoothedEle": 10.966001253586427,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057009,
        "lng": 121.515475,
        "ele": 9,
        "distanceKm": 0.5476165312360601,
        "gradePct": -1.5846006746453467,
        "smoothedEle": 10.066375336743748,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057043367946402,
        "lng": 121.5159752528758,
        "ele": 8,
        "distanceKm": 0.5981517786064512,
        "gradePct": -1.7025879533345796,
        "smoothedEle": 9.18227357768228,
        "gradeBand": "descent"
      },
      {
        "lat": 25.0571156839732,
        "lng": 121.5164726264379,
        "ele": 8,
        "distanceKm": 0.6488934745850313,
        "gradePct": -1.6376502046948849,
        "smoothedEle": 8.56203752324823,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057188,
        "lng": 121.51697,
        "ele": 8,
        "distanceKm": 0.6996351413737084,
        "gradePct": -1.3642323686030622,
        "smoothedEle": 8.245378563762824,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057251,
        "lng": 121.517486,
        "ele": 6.5,
        "distanceKm": 0.7520817677661341,
        "gradePct": -0.9150996087225598,
        "smoothedEle": 8.158057901296655,
        "gradeBand": "descent"
      },
      {
        "lat": 25.05731271284898,
        "lng": 121.51796965861475,
        "ele": 6.744477864959169,
        "distanceKm": 0.8012815707420335,
        "gradePct": -0.4410147360551627,
        "smoothedEle": 8.26198740390018,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057372452322603,
        "lng": 121.51845361858082,
        "ele": 7.402456816179704,
        "distanceKm": 0.8504813018183659,
        "gradePct": -0.03137387803933757,
        "smoothedEle": 8.489380756461564,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057432933646297,
        "lng": 121.51893746917037,
        "ele": 8.377962037045592,
        "distanceKm": 0.8996813004504376,
        "gradePct": 0.3007267039291658,
        "smoothedEle": 8.846755119372764,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.05749310559104,
        "lng": 121.51942136478301,
        "ele": 9.366643877954559,
        "distanceKm": 0.9488810777636048,
        "gradePct": 0.5951431259431266,
        "smoothedEle": 9.35367312075612,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057553634682883,
        "lng": 121.51990520840495,
        "ele": 10.282735472968021,
        "distanceKm": 0.9980810599362331,
        "gradePct": 0.8238320872818526,
        "smoothedEle": 9.90289082992416,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057614044900124,
        "lng": 121.52038907027955,
        "ele": 10.75,
        "distanceKm": 1.0472810331415978,
        "gradePct": 0.9969486278674158,
        "smoothedEle": 10.468486878025795,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057674,
        "lng": 121.520873,
        "ele": 10.75,
        "distanceKm": 1.096480869829633,
        "gradePct": 1.2014218734489739,
        "smoothedEle": 11.226351876718848,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057733499999998,
        "lng": 121.5213505,
        "ele": 12.25,
        "distanceKm": 1.145032150781371,
        "gradePct": 1.3570462101098788,
        "smoothedEle": 12.028109053083964,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057793,
        "lng": 121.521828,
        "ele": 13.75,
        "distanceKm": 1.1935834085982155,
        "gradePct": 1.4235240440345973,
        "smoothedEle": 12.699731790766451,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057843212592346,
        "lng": 121.52223454325723,
        "ele": 12.519685191378993,
        "distanceKm": 1.2349131826365596,
        "gradePct": 1.4897465307382531,
        "smoothedEle": 13.305800850502337,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057894,
        "lng": 121.522641,
        "ele": 12.25,
        "distanceKm": 1.2762429903702786,
        "gradePct": 1.5793975120653756,
        "smoothedEle": 14.07340642522026,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057940680467397,
        "lng": 121.5230264715034,
        "ele": 14.256941053793671,
        "distanceKm": 1.3154167190423387,
        "gradePct": 1.643183005322537,
        "smoothedEle": 14.825417216799657,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057987,
        "lng": 121.523412,
        "ele": 16.25,
        "distanceKm": 1.3545908264551088,
        "gradePct": 1.7183060693913608,
        "smoothedEle": 15.596948948948345,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.058054,
        "lng": 121.523966,
        "ele": 15.5,
        "distanceKm": 1.410889985303885,
        "gradePct": 1.6978356040082205,
        "smoothedEle": 16.349190514328484,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.058069933970568,
        "lng": 121.52449026224929,
        "ele": 16.952153368770094,
        "distanceKm": 1.4637282655818264,
        "gradePct": 1.39394710164523,
        "smoothedEle": 16.62886856457351,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.058062,
        "lng": 121.525016,
        "ele": 20,
        "distanceKm": 1.5166928042120815,
        "gradePct": 0.94931107496703,
        "smoothedEle": 16.749171788795234,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.058052,
        "lng": 121.525622,
        "ele": 20.75,
        "distanceKm": 1.5777448856775451,
        "gradePct": 0.33035276590051776,
        "smoothedEle": 16.567027588812586,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.05804472693351,
        "lng": 121.52608971412202,
        "ele": 18.93173337733771,
        "distanceKm": 1.6248643449279512,
        "gradePct": -0.15958578430963583,
        "smoothedEle": 16.103986562227444,
        "gradeBand": "descent"
      },
      {
        "lat": 25.058037705304507,
        "lng": 121.52655743261381,
        "ele": 16.982121803051943,
        "distanceKm": 1.6719837754569573,
        "gradePct": -0.5093463350664945,
        "smoothedEle": 15.628927392730834,
        "gradeBand": "descent"
      },
      {
        "lat": 25.05803075894702,
        "lng": 121.52702515054972,
        "ele": 14.586315673051352,
        "distanceKm": 1.7191030147390125,
        "gradePct": -0.8219624752325745,
        "smoothedEle": 15.09805616017989,
        "gradeBand": "descent"
      },
      {
        "lat": 25.05802357579449,
        "lng": 121.52749285844297,
        "ele": 12.436369173269034,
        "distanceKm": 1.7662216842680345,
        "gradePct": -1.0982118125137605,
        "smoothedEle": 14.404982550912543,
        "gradeBand": "descent"
      },
      {
        "lat": 25.058015948730795,
        "lng": 121.52796056139651,
        "ele": 11.424909342597669,
        "distanceKm": 1.8133407217350597,
        "gradePct": -1.332069796115872,
        "smoothedEle": 13.553089150574648,
        "gradeBand": "descent"
      },
      {
        "lat": 25.05800907769248,
        "lng": 121.52842828279063,
        "ele": 10.934120891256873,
        "distanceKm": 1.860460181118525,
        "gradePct": -1.585491209938819,
        "smoothedEle": 12.57412611287486,
        "gradeBand": "descent"
      },
      {
        "lat": 25.058002,
        "lng": 121.528896,
        "ele": 10.5,
        "distanceKm": 1.9075795999123646,
        "gradePct": -1.7800508348912465,
        "smoothedEle": 11.667783611695375,
        "gradeBand": "descent"
      },
      {
        "lat": 25.05852,
        "lng": 121.528934,
        "ele": 11,
        "distanceKm": 1.9653056952355725,
        "gradePct": -1.8127127515610482,
        "smoothedEle": 10.793030429596923,
        "gradeBand": "descent"
      },
      {
        "lat": 25.058961,
        "lng": 121.528934,
        "ele": 11.5,
        "distanceKm": 2.0143427256184028,
        "gradePct": -1.5860957030396077,
        "smoothedEle": 10.360079917248273,
        "gradeBand": "descent"
      },
      {
        "lat": 25.059362,
        "lng": 121.528951,
        "ele": 11,
        "distanceKm": 2.058964821425523,
        "gradePct": -1.1916938563129362,
        "smoothedEle": 10.22180628359632,
        "gradeBand": "descent"
      },
      {
        "lat": 25.059808,
        "lng": 121.528961,
        "ele": 9.25,
        "distanceKm": 2.108568055559504,
        "gradePct": -0.7123977408408202,
        "smoothedEle": 10.228009553724151,
        "gradeBand": "descent"
      },
      {
        "lat": 25.060334,
        "lng": 121.528969,
        "ele": 8.5,
        "distanceKm": 2.167062218560041,
        "gradePct": -0.19649533593646767,
        "smoothedEle": 10.384531321194615,
        "gradeBand": "descent"
      },
      {
        "lat": 25.060848,
        "lng": 121.528967,
        "ele": 8.75,
        "distanceKm": 2.224216844836965,
        "gradePct": 0.08590652396429992,
        "smoothedEle": 10.501295335935861,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.061237,
        "lng": 121.528981,
        "ele": 10,
        "distanceKm": 2.2674947118930673,
        "gradePct": 0.14594547673421307,
        "smoothedEle": 10.514763966193499,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.061622486297157,
        "lng": 121.52898807015725,
        "ele": 11.007015725266745,
        "distanceKm": 2.310364807133396,
        "gradePct": 0.10995870647163644,
        "smoothedEle": 10.452734809324276,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.062008,
        "lng": 121.528993,
        "ele": 11.5,
        "distanceKm": 2.3532349102008077,
        "gradePct": 0.04935997716543379,
        "smoothedEle": 10.446251434298137,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.062417,
        "lng": 121.528994,
        "ele": 12.25,
        "distanceKm": 2.3987138095595673,
        "gradePct": 0.030567283530173104,
        "smoothedEle": 10.510328490021369,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.062784391408577,
        "lng": 121.52900553837766,
        "ele": 11.953837767188926,
        "distanceKm": 2.4395824553295498,
        "gradePct": 0.05723628665083864,
        "smoothedEle": 10.620549885348774,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.063152,
        "lng": 121.529001,
        "ele": 11.5,
        "distanceKm": 2.480461278161434,
        "gradePct": 0.11159402763048999,
        "smoothedEle": 10.71919057087671,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.063141,
        "lng": 121.529715,
        "ele": 10.5,
        "distanceKm": 2.552389410292318,
        "gradePct": 0.15814142320830346,
        "smoothedEle": 10.762662148216782,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.063125,
        "lng": 121.530304,
        "ele": 9.75,
        "distanceKm": 2.611743179525624,
        "gradePct": 0.09411293071952267,
        "smoothedEle": 10.733694134314451,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.063108666666665,
        "lng": 121.53076966666667,
        "ele": 9.833333333333334,
        "distanceKm": 2.6586826682161546,
        "gradePct": -0.019775952673096935,
        "smoothedEle": 10.627086833896746,
        "gradeBand": "descent"
      },
      {
        "lat": 25.063092333333334,
        "lng": 121.53123533333333,
        "ele": 9.916666666666666,
        "distanceKm": 2.7056221631535156,
        "gradePct": -0.16914373676117728,
        "smoothedEle": 10.396109711588236,
        "gradeBand": "descent"
      },
      {
        "lat": 25.063076,
        "lng": 121.531701,
        "ele": 10,
        "distanceKm": 2.7525616643405946,
        "gradePct": -0.30496952632931124,
        "smoothedEle": 10.152639025789219,
        "gradeBand": "descent"
      },
      {
        "lat": 25.063067999999998,
        "lng": 121.53218050000001,
        "ele": 10.625000000000004,
        "distanceKm": 2.800867577342611,
        "gradePct": -0.37909809315908716,
        "smoothedEle": 9.980805860186239,
        "gradeBand": "descent"
      },
      {
        "lat": 25.06306,
        "lng": 121.53266,
        "ele": 11.25,
        "distanceKm": 2.849173493496304,
        "gradePct": -0.40290189919784203,
        "smoothedEle": 9.842879935560351,
        "gradeBand": "descent"
      },
      {
        "lat": 25.063064,
        "lng": 121.533165,
        "ele": 10.75,
        "distanceKm": 2.9000416557990265,
        "gradePct": -0.3472191791304879,
        "smoothedEle": 9.729131587645535,
        "gradeBand": "descent"
      },
      {
        "lat": 25.062567,
        "lng": 121.533152,
        "ele": 8.75,
        "distanceKm": 2.955321121385407,
        "gradePct": -0.24830556060099762,
        "smoothedEle": 9.64621199986898,
        "gradeBand": "descent"
      },
      {
        "lat": 25.062575183261924,
        "lng": 121.53271398962214,
        "ele": 9.121182043277475,
        "distanceKm": 2.999449356511738,
        "gradePct": -0.1739880063110116,
        "smoothedEle": 9.637874724262494,
        "gradeBand": "descent"
      },
      {
        "lat": 25.06258409163096,
        "lng": 121.53227599481106,
        "ele": 8.93559102163874,
        "distanceKm": 3.043577757191233,
        "gradePct": -0.12768962920742755,
        "smoothedEle": 9.603477956230401,
        "gradeBand": "descent"
      },
      {
        "lat": 25.062593,
        "lng": 121.531838,
        "ele": 8.75,
        "distanceKm": 3.08770615466241,
        "gradePct": -0.12315963115241846,
        "smoothedEle": 9.510396236602151,
        "gradeBand": "descent"
      },
      {
        "lat": 25.062608962649414,
        "lng": 121.53133767990462,
        "ele": 8.621498382454881,
        "distanceKm": 3.1381324262444656,
        "gradePct": -0.14388526337686247,
        "smoothedEle": 9.384224636906456,
        "gradeBand": "descent"
      },
      {
        "lat": 25.062615943160157,
        "lng": 121.53083682825863,
        "ele": 9.275921264853798,
        "distanceKm": 3.188586956281711,
        "gradePct": -0.13717205015007028,
        "smoothedEle": 9.365582888781157,
        "gradeBand": "descent"
      },
      {
        "lat": 25.062624,
        "lng": 121.530336,
        "ele": 10,
        "distanceKm": 3.239041111008508,
        "gradePct": -0.04936084202454611,
        "smoothedEle": 9.508292452146774,
        "gradeBand": "descent"
      },
      {
        "lat": 25.063125,
        "lng": 121.530304,
        "ele": 9.75,
        "distanceKm": 3.2948430129937405,
        "gradePct": 0.09628194187100095,
        "smoothedEle": 9.685102983494362,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.06355,
        "lng": 121.53032,
        "ele": 9.75,
        "distanceKm": 3.342128393660309,
        "gradePct": 0.25880412596419133,
        "smoothedEle": 9.900356473971238,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.063970964472098,
        "lng": 121.5303322284265,
        "ele": 10.006345180612152,
        "distanceKm": 3.3889537741921796,
        "gradePct": 0.3766439828675706,
        "smoothedEle": 10.119908398879515,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.064392,
        "lng": 121.530341,
        "ele": 10.25,
        "distanceKm": 3.4357791893552583,
        "gradePct": 0.37543529570931583,
        "smoothedEle": 10.249936699027701,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.064713,
        "lng": 121.530355,
        "ele": 10.25,
        "distanceKm": 3.471500654113623,
        "gradePct": 0.347049761582596,
        "smoothedEle": 10.305241320218421,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.065174027439312,
        "lng": 121.53036768073171,
        "ele": 10.692018292875133,
        "distanceKm": 3.5227805461743364,
        "gradePct": 0.2607598534631952,
        "smoothedEle": 10.333800508335383,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.06563500697249,
        "lng": 121.53038226832876,
        "ele": 11.141770547645157,
        "distanceKm": 3.574060256644296,
        "gradePct": 0.12266057728306723,
        "smoothedEle": 10.295397756903867,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.066096,
        "lng": 121.530396,
        "ele": 11,
        "distanceKm": 3.6253390691355176,
        "gradePct": -0.14255771865469657,
        "smoothedEle": 9.935830358364054,
        "gradeBand": "descent"
      },
      {
        "lat": 25.066531977401162,
        "lng": 121.53042904151314,
        "ele": 10.12327028565067,
        "distanceKm": 3.673931710440497,
        "gradePct": -0.4268242801073235,
        "smoothedEle": 9.45294668241219,
        "gradeBand": "descent"
      },
      {
        "lat": 25.066968,
        "lng": 121.530461,
        "ele": 10.25,
        "distanceKm": 3.7225220165432535,
        "gradePct": -0.6739113617492801,
        "smoothedEle": 8.985833802545299,
        "gradeBand": "descent"
      },
      {
        "lat": 25.067341,
        "lng": 121.530472,
        "ele": 10.25,
        "distanceKm": 3.764012577003994,
        "gradePct": -0.8405454603460705,
        "smoothedEle": 8.621831421279655,
        "gradeBand": "descent"
      },
      {
        "lat": 25.067662,
        "lng": 121.530467,
        "ele": 9.5,
        "distanceKm": 3.7997097503273665,
        "gradePct": -0.8613818694207007,
        "smoothedEle": 8.39277958560922,
        "gradeBand": "descent"
      },
      {
        "lat": 25.06800398885115,
        "lng": 121.53046561685248,
        "ele": 7.0280491889156265,
        "distanceKm": 3.837737483252241,
        "gradePct": -0.8151925618845822,
        "smoothedEle": 8.182237447903875,
        "gradeBand": "descent"
      },
      {
        "lat": 25.068346,
        "lng": 121.530463,
        "ele": 5,
        "distanceKm": 3.8757683537394274,
        "gradePct": -0.6947764297070126,
        "smoothedEle": 8.0457376316822,
        "gradeBand": "descent"
      },
      {
        "lat": 25.068355483828714,
        "lng": 121.52996448569988,
        "ele": 5.201610891228503,
        "distanceKm": 3.9259902033801892,
        "gradePct": -0.5686855351157893,
        "smoothedEle": 7.818035853204356,
        "gradeBand": "descent"
      },
      {
        "lat": 25.068367,
        "lng": 121.529466,
        "ele": 5.75,
        "distanceKm": 3.976214422432544,
        "gradePct": -0.44317546294743926,
        "smoothedEle": 7.657187038682803,
        "gradeBand": "descent"
      },
      {
        "lat": 25.0683725,
        "lng": 121.5288535,
        "ele": 7.5,
        "distanceKm": 4.0379089557473264,
        "gradePct": -0.31094202312545044,
        "smoothedEle": 7.559737955207327,
        "gradeBand": "descent"
      },
      {
        "lat": 25.068378,
        "lng": 121.528241,
        "ele": 9.25,
        "distanceKm": 4.099603486292182,
        "gradePct": -0.16243335681742307,
        "smoothedEle": 7.612804367107098,
        "gradeBand": "descent"
      },
      {
        "lat": 25.068379,
        "lng": 121.5277,
        "ele": 8.25,
        "distanceKm": 4.154093559256875,
        "gradePct": 0.14549753701679954,
        "smoothedEle": 8.019026710903002,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.068384162208996,
        "lng": 121.52727099236547,
        "ele": 8.501881430097377,
        "distanceKm": 4.197307368137835,
        "gradePct": 0.4604774417348692,
        "smoothedEle": 8.544824736393297,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.0683905811045,
        "lng": 121.52684199618274,
        "ele": 9.125940715048696,
        "distanceKm": 4.240522103721145,
        "gradePct": 0.8242831956268596,
        "smoothedEle": 9.210552039822339,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.068397,
        "lng": 121.526413,
        "ele": 9.75,
        "distanceKm": 4.2837368370404585,
        "gradePct": 1.1669319182179168,
        "smoothedEle": 9.93302054082105,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.068435,
        "lng": 121.525754,
        "ele": 7.75,
        "distanceKm": 4.350246190394993,
        "gradePct": 1.4764355076296758,
        "smoothedEle": 10.943215672505836,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.067947033891805,
        "lng": 121.52575905313806,
        "ele": 10.310627611859754,
        "distanceKm": 4.404508007919026,
        "gradePct": 1.487752204862296,
        "smoothedEle": 11.631255718727708,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.067459,
        "lng": 121.525769,
        "ele": 13,
        "distanceKm": 4.458784222930548,
        "gradePct": 1.421935894422332,
        "smoothedEle": 12.359731877030704,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.067068,
        "lng": 121.525754,
        "ele": 14.75,
        "distanceKm": 4.502287741819085,
        "gradePct": 1.3533895015143143,
        "smoothedEle": 12.921564930979832,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.06673,
        "lng": 121.525749,
        "ele": 16.25,
        "distanceKm": 4.539875052876568,
        "gradePct": 1.2851064162122616,
        "smoothedEle": 13.355903704241072,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.066166,
        "lng": 121.525732,
        "ele": 15.5,
        "distanceKm": 4.602612448971767,
        "gradePct": 1.281174802893254,
        "smoothedEle": 14.169569630075657,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.065779,
        "lng": 121.525746,
        "ele": 14.75,
        "distanceKm": 4.6456680427095725,
        "gradePct": 1.2488448655943107,
        "smoothedEle": 14.68138087699004,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.06533102221738,
        "lng": 121.52573650654674,
        "ele": 15.267623331235718,
        "distanceKm": 4.695490145066563,
        "gradePct": 1.107749404992347,
        "smoothedEle": 15.049275105917104,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.064883,
        "lng": 121.52573,
        "ele": 15.5,
        "distanceKm": 4.7453123219863675,
        "gradePct": 0.966769367382133,
        "smoothedEle": 15.359960517210613,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.064449,
        "lng": 121.525704,
        "ele": 15.25,
        "distanceKm": 4.793641991456228,
        "gradePct": 0.7332773044585158,
        "smoothedEle": 15.51978285293221,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.06407,
        "lng": 121.525678,
        "ele": 15,
        "distanceKm": 4.835866217572247,
        "gradePct": 0.48317154115896394,
        "smoothedEle": 15.531207522997242,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.063671520834138,
        "lng": 121.52567098145262,
        "ele": 14.75,
        "distanceKm": 4.880180779572998,
        "gradePct": 0.2655910962455976,
        "smoothedEle": 15.467410539095315,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.063273,
        "lng": 121.525668,
        "ele": 14.75,
        "distanceKm": 4.924495353253828,
        "gradePct": -0.00015207346968892907,
        "smoothedEle": 15.229844128165407,
        "gradeBand": "descent"
      },
      {
        "lat": 25.062615,
        "lng": 121.525631,
        "ele": 17.5,
        "distanceKm": 4.997756570459047,
        "gradePct": -0.42346431237895615,
        "smoothedEle": 14.67396751577925,
        "gradeBand": "descent"
      },
      {
        "lat": 25.06215565159514,
        "lng": 121.52562054455495,
        "ele": 16.558345174149405,
        "distanceKm": 5.048844708998003,
        "gradePct": -0.4167239054609203,
        "smoothedEle": 14.679075366091201,
        "gradeBand": "descent"
      },
      {
        "lat": 25.061696369382922,
        "lng": 121.52560586377538,
        "ele": 14.965943848309966,
        "distanceKm": 5.099936035499064,
        "gradePct": -0.23023638297562937,
        "smoothedEle": 14.901031637587858,
        "gradeBand": "descent"
      },
      {
        "lat": 25.061237,
        "lng": 121.525595,
        "ele": 12.25,
        "distanceKm": 5.151027370726944,
        "gradePct": -0.007300141710391722,
        "smoothedEle": 15.013929581136193,
        "gradeBand": "descent"
      },
      {
        "lat": 25.060858,
        "lng": 121.525583,
        "ele": 9.75,
        "distanceKm": 5.1931876365455185,
        "gradePct": 0.2057437481099001,
        "smoothedEle": 15.120122242533238,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.060379,
        "lng": 121.525567,
        "ele": 14.5,
        "distanceKm": 5.246474457129425,
        "gradePct": 0.1973169285161578,
        "smoothedEle": 15.073472242640522,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.05974,
        "lng": 121.525553,
        "ele": 17.25,
        "distanceKm": 5.317542105866032,
        "gradePct": -0.048442437044812395,
        "smoothedEle": 14.843051386552855,
        "gradeBand": "descent"
      },
      {
        "lat": 25.059069,
        "lng": 121.525538,
        "ele": 15.75,
        "distanceKm": 5.392169301551665,
        "gradePct": -0.05199412055907167,
        "smoothedEle": 15.013569034114926,
        "gradeBand": "descent"
      },
      {
        "lat": 25.058783,
        "lng": 121.525053,
        "ele": 16.25,
        "distanceKm": 5.45046171201957,
        "gradePct": 0.20766646673217862,
        "smoothedEle": 15.47587739952074,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.05858703994624,
        "lng": 121.52473302523954,
        "ele": 16.022333183997294,
        "distanceKm": 5.489366866762448,
        "gradePct": 0.28041580532045857,
        "smoothedEle": 15.495234868687144,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.058399,
        "lng": 121.524405,
        "ele": 15.5,
        "distanceKm": 5.528468539132824,
        "gradePct": 0.23511167719688578,
        "smoothedEle": 15.338240836480296,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.058227,
        "lng": 121.524106,
        "ele": 14.5,
        "distanceKm": 5.564145990860847,
        "gradePct": 0.07162217281634302,
        "smoothedEle": 15.092782178092538,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.058054,
        "lng": 121.523966,
        "ele": 15.5,
        "distanceKm": 5.587998066435738,
        "gradePct": -0.05173690154007633,
        "smoothedEle": 14.900564265910578,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057987,
        "lng": 121.523412,
        "ele": 16.25,
        "distanceKm": 5.644297225284514,
        "gradePct": -0.5097937945520594,
        "smoothedEle": 14.407400190598633,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057940680467397,
        "lng": 121.5230264715034,
        "ele": 14.25694105379365,
        "distanceKm": 5.683471332697284,
        "gradePct": -0.7443991117092275,
        "smoothedEle": 14.003503290559262,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057894,
        "lng": 121.522641,
        "ele": 12.25,
        "distanceKm": 5.722645061369344,
        "gradePct": -0.8938932669917278,
        "smoothedEle": 13.573835687489677,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057843212592346,
        "lng": 121.52223454325723,
        "ele": 12.519685191378967,
        "distanceKm": 5.7639748691030634,
        "gradePct": -0.9929724730155184,
        "smoothedEle": 13.108014539157494,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057793,
        "lng": 121.521828,
        "ele": 13.75,
        "distanceKm": 5.805304643141407,
        "gradePct": -1.0544945832488937,
        "smoothedEle": 12.639974576911335,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057733499999998,
        "lng": 121.5213505,
        "ele": 12.25,
        "distanceKm": 5.853855900958251,
        "gradePct": -1.1403691496110753,
        "smoothedEle": 12.028109053083966,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057674,
        "lng": 121.520873,
        "ele": 10.75,
        "distanceKm": 5.9024071819099895,
        "gradePct": -1.2847290574038792,
        "smoothedEle": 11.22635187671885,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057614044900124,
        "lng": 121.52038907027955,
        "ele": 10.75,
        "distanceKm": 5.9516070185980245,
        "gradePct": -1.389461787567926,
        "smoothedEle": 10.468486878025802,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057553634682883,
        "lng": 121.51990520840495,
        "ele": 10.282735472968021,
        "distanceKm": 6.0008069918033895,
        "gradePct": -1.3940087507197858,
        "smoothedEle": 9.902890829924164,
        "gradeBand": "descent"
      },
      {
        "lat": 25.05749310559104,
        "lng": 121.51942136478301,
        "ele": 9.366643877954559,
        "distanceKm": 6.050006973976018,
        "gradePct": -1.3614709498151574,
        "smoothedEle": 9.35367312075612,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057432933646297,
        "lng": 121.51893746917037,
        "ele": 8.377962037045599,
        "distanceKm": 6.099206751289185,
        "gradePct": -1.2162237187195728,
        "smoothedEle": 8.846755119372762,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057372452322603,
        "lng": 121.51845361858082,
        "ele": 7.402456816179715,
        "distanceKm": 6.148406749921257,
        "gradePct": -1.0142012281318875,
        "smoothedEle": 8.48938075646156,
        "gradeBand": "descent"
      },
      {
        "lat": 25.05731271284898,
        "lng": 121.51796965861475,
        "ele": 6.744477864959174,
        "distanceKm": 6.19760648099759,
        "gradePct": -0.8604506107025173,
        "smoothedEle": 8.218782235541731,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057251,
        "lng": 121.517486,
        "ele": 6.5,
        "distanceKm": 6.2468062839734895,
        "gradePct": -0.6379295042699175,
        "smoothedEle": 8.113543304653344,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057188,
        "lng": 121.51697,
        "ele": 8,
        "distanceKm": 6.299252910365915,
        "gradePct": -0.32347122126254363,
        "smoothedEle": 8.199477390849758,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057128,
        "lng": 121.51655733333334,
        "ele": 8,
        "distanceKm": 6.341352843021216,
        "gradePct": -0.04731687555998927,
        "smoothedEle": 8.445984516612445,
        "gradeBand": "descent"
      },
      {
        "lat": 25.057068,
        "lng": 121.51614466666666,
        "ele": 8,
        "distanceKm": 6.38345279577186,
        "gradePct": 0.3006480599473862,
        "smoothedEle": 8.897923624178018,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057008,
        "lng": 121.515732,
        "ele": 8,
        "distanceKm": 6.425552768615101,
        "gradePct": 0.6878448702662346,
        "smoothedEle": 9.534694553131942,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057006036953336,
        "lng": 121.51522277065253,
        "ele": 9.601868854077681,
        "distanceKm": 6.476847987203062,
        "gradePct": 1.1720127336657287,
        "smoothedEle": 10.506792268182643,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057000050691553,
        "lng": 121.51471319011853,
        "ele": 10.817828278087427,
        "distanceKm": 6.528182433899794,
        "gradePct": 1.5452243162992647,
        "smoothedEle": 11.459316643485835,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.056994064429773,
        "lng": 121.51420360958453,
        "ele": 12.033787702097197,
        "distanceKm": 6.579516883103603,
        "gradePct": 1.6931634107594875,
        "smoothedEle": 12.241998786430676,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.056991,
        "lng": 121.513694,
        "ele": 14.25,
        "distanceKm": 6.630851075598676,
        "gradePct": 1.6628787028232517,
        "smoothedEle": 12.960860383854907,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.056973,
        "lng": 121.513089,
        "ele": 16.25,
        "distanceKm": 6.6918256944193395,
        "gradePct": 1.4279825349731998,
        "smoothedEle": 13.640672697652482,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.056963275195944,
        "lng": 121.51259755008076,
        "ele": 15.989514177078155,
        "distanceKm": 6.741341348580074,
        "gradePct": 1.1667922327345206,
        "smoothedEle": 13.993531440058657,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.05695355039189,
        "lng": 121.5121061001615,
        "ele": 15.729028354156315,
        "distanceKm": 6.790857006669525,
        "gradePct": 0.9744141293659451,
        "smoothedEle": 14.349629179673004,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.056942421928174,
        "lng": 121.51161470434803,
        "ele": 15.338870510952717,
        "distanceKm": 6.840370875005011,
        "gradePct": 0.8009294708172734,
        "smoothedEle": 14.668856550887183,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.05693368853064,
        "lng": 121.51112326804903,
        "ele": 14.238388608518562,
        "distanceKm": 6.889882884800769,
        "gradePct": 0.599491821191791,
        "smoothedEle": 14.817995755228582,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.056925,
        "lng": 121.510632,
        "ele": 12.75,
        "distanceKm": 6.939377855884412,
        "gradePct": 0.37407554610453586,
        "smoothedEle": 14.727690279210417,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.057461,
        "lng": 121.510601,
        "ele": 13,
        "distanceKm": 6.999060164236481,
        "gradePct": -0.002203784439276822,
        "smoothedEle": 14.398109266592458,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 6.999060164236481,
      "elevationGainM": 23.267035905863736,
      "elevationLossM": 22.847149417227605,
      "minimumElevationM": 5,
      "maximumElevationM": 20.75,
      "maximumSustainedGradePct": 1.7183060693913608
    },
    "climbs": []
  },
  "route-art-bear": {
    "routeId": "route-art-bear",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:25:51.045Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "834fc482d249fa6680fae2f03c5cf79136d8829b9b4f1c6c3ae1022b6f5cfe18",
      "roadPolicyAuditSha256": "92837051923c99526412491a41b6e9b26d4a3b77026489de6250886f035c16e2",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "100/100、500/200、750/300、1000/500 公尺視窗依序為 6.94 公里、15/4.02%、14/1.39%、14/0.87%、14/0.65%。採 500/200 壓低海岸 SRTM 短波；僅供行程規劃。",
        "referenceUrl": "https://www.openstreetmap.org/copyright",
        "referenceLabel": "OpenStreetMap 即時道路資料"
      },
      "reviewedAt": "2026-08-01T05:30:05.845Z",
      "reviewerNote": "熊形圖形保留身體弧線與西側頭部方向；為避免北濱 footway、尚志路周邊 service 與吉安車站單行，已捨棄一腳與耳尖。raw 的 service、track 等禁止道路與非法逆向均為 0；live OSM 五窗 5/5，最大偏差 0.02 公尺，只使用合法公共道路。"
    },
    "waypoints": [
      {
        "name": "吉安公共主線",
        "lat": 23.964112,
        "lng": 121.59005,
        "role": "start"
      },
      {
        "name": "中興路公共主線",
        "lat": 23.9739959,
        "lng": 121.5648581,
        "role": "via"
      },
      {
        "name": "吉安公共主線",
        "lat": 23.964112,
        "lng": 121.59005,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 23.964112,
        "lng": 121.59005,
        "ele": 23.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 23.693268002972967,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.964485,
        "lng": 121.589773,
        "ele": 24,
        "distanceKm": 0.05012418068783798,
        "gradePct": -0.15631542582069996,
        "smoothedEle": 23.614916176491636,
        "gradeBand": "descent"
      },
      {
        "lat": 23.964897999999998,
        "lng": 121.58951275,
        "ele": 23.8125,
        "distanceKm": 0.10311714289076963,
        "gradePct": -0.16547536472819374,
        "smoothedEle": 23.522634534677174,
        "gradeBand": "descent"
      },
      {
        "lat": 23.965311,
        "lng": 121.58925249999999,
        "ele": 23.625,
        "distanceKm": 0.15611006281566253,
        "gradePct": -0.11558069722430711,
        "smoothedEle": 23.51283490393332,
        "gradeBand": "descent"
      },
      {
        "lat": 23.965724,
        "lng": 121.58899224999999,
        "ele": 23.4375,
        "distanceKm": 0.20910294046014932,
        "gradePct": -0.06280931563757264,
        "smoothedEle": 23.553420071555333,
        "gradeBand": "descent"
      },
      {
        "lat": 23.966137,
        "lng": 121.588732,
        "ele": 23.25,
        "distanceKm": 0.2620957758240244,
        "gradePct": -0.004460340844097743,
        "smoothedEle": 23.585148227385652,
        "gradeBand": "descent"
      },
      {
        "lat": 23.966627,
        "lng": 121.588371,
        "ele": 23,
        "distanceKm": 0.32777792752004165,
        "gradePct": 0.033156061758843336,
        "smoothedEle": 23.584386302140448,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.967058,
        "lng": 121.587987,
        "ele": 23.5,
        "distanceKm": 0.38957739255458435,
        "gradePct": 0.07215165896220554,
        "smoothedEle": 23.682769537756965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.967489,
        "lng": 121.587603,
        "ele": 24,
        "distanceKm": 0.45137677521350483,
        "gradePct": 0.1584842162024529,
        "smoothedEle": 23.89569892200807,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.967818751842593,
        "lng": 121.58731628455308,
        "ele": 23.854606771343942,
        "distanceKm": 0.4982078361542427,
        "gradePct": 0.20475565262561088,
        "smoothedEle": 23.994240625982457,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.968148461212788,
        "lng": 121.5870295103492,
        "ele": 23.877357042407976,
        "distanceKm": 0.545038867500034,
        "gradePct": 0.2390799474631482,
        "smoothedEle": 24.09002519100407,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.968477957836175,
        "lng": 121.58674244272903,
        "ele": 24.352785627921804,
        "distanceKm": 0.5918698979891259,
        "gradePct": 0.289376595510797,
        "smoothedEle": 24.269421541834078,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.96880697891809,
        "lng": 121.58645472136452,
        "ele": 24.926392813960902,
        "distanceKm": 0.6387009613709551,
        "gradePct": 0.31154070498306474,
        "smoothedEle": 24.47510589510689,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.969136,
        "lng": 121.586167,
        "ele": 25.5,
        "distanceKm": 0.6855319781617074,
        "gradePct": 0.3676541384221643,
        "smoothedEle": 24.702876420486433,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.969555,
        "lng": 121.585809,
        "ele": 24,
        "distanceKm": 0.7446406263729646,
        "gradePct": 0.45569436263181917,
        "smoothedEle": 25.000599384705325,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.969847098345,
        "lng": 121.58547151323305,
        "ele": 24.475812163635275,
        "distanceKm": 0.7918718321654692,
        "gradePct": 0.49266448096202187,
        "smoothedEle": 25.25475899875656,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.970066087375116,
        "lng": 121.5850678801642,
        "ele": 25.262970259481662,
        "distanceKm": 0.8395674892518441,
        "gradePct": 0.5125171361293719,
        "smoothedEle": 25.504354671431773,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.970286530732213,
        "lng": 121.58466519528177,
        "ele": 25.73266491238732,
        "distanceKm": 0.8872631801160765,
        "gradePct": 0.4893933565426244,
        "smoothedEle": 25.6903829841031,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.97050586956976,
        "lng": 121.58426179160928,
        "ele": 26.422835899817684,
        "distanceKm": 0.9349585555535194,
        "gradePct": 0.42276386283615264,
        "smoothedEle": 25.797359714888564,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.970723681171993,
        "lng": 121.58385739379956,
        "ele": 26.5,
        "distanceKm": 0.9826542451895992,
        "gradePct": 0.37597516385178775,
        "smoothedEle": 25.957107832935645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.970942575077494,
        "lng": 121.58345369937766,
        "ele": 26.57337746593943,
        "distanceKm": 1.0303496239203425,
        "gradePct": 0.41069436853321245,
        "smoothedEle": 26.27750548834796,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.971163,
        "lng": 121.583051,
        "ele": 26.75,
        "distanceKm": 1.078045286055097,
        "gradePct": 0.4966336363793379,
        "smoothedEle": 26.647697548189868,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9713725,
        "lng": 121.58263,
        "ele": 26.5,
        "distanceKm": 1.126752724519537,
        "gradePct": 0.6461626718733077,
        "smoothedEle": 27.07128006717967,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.971582,
        "lng": 121.582209,
        "ele": 26.25,
        "distanceKm": 1.1754601019090385,
        "gradePct": 0.7183737585374763,
        "smoothedEle": 27.36975986342052,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.971783,
        "lng": 121.581843,
        "ele": 26.75,
        "distanceKm": 1.2188468788178028,
        "gradePct": 0.7108658695622643,
        "smoothedEle": 27.621966584912652,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972036,
        "lng": 121.581396,
        "ele": 27.75,
        "distanceKm": 1.2722709280803632,
        "gradePct": 0.6816186837153959,
        "smoothedEle": 27.966116972494262,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972355,
        "lng": 121.580769,
        "ele": 29.75,
        "distanceKm": 1.345185955140034,
        "gradePct": 0.6981896835045858,
        "smoothedEle": 28.580618645186156,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972642,
        "lng": 121.580248,
        "ele": 29,
        "distanceKm": 1.4069969211256572,
        "gradePct": 0.7505932710939354,
        "smoothedEle": 29.054269490373112,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9728395,
        "lng": 121.57988,
        "ele": 29.375,
        "distanceKm": 1.4503593359292237,
        "gradePct": 0.7796521429359073,
        "smoothedEle": 29.384269791275216,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.973037,
        "lng": 121.579512,
        "ele": 29.75,
        "distanceKm": 1.4937217013179143,
        "gradePct": 0.813817345464461,
        "smoothedEle": 29.77453107977343,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.97331,
        "lng": 121.579051,
        "ele": 31,
        "distanceKm": 1.549537375002884,
        "gradePct": 0.8036390961317539,
        "smoothedEle": 30.221241304130245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972876,
        "lng": 121.578731,
        "ele": 30.5,
        "distanceKm": 1.6077266443020466,
        "gradePct": 0.7699203401329788,
        "smoothedEle": 30.599663571409636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972442,
        "lng": 121.578411,
        "ele": 30,
        "distanceKm": 1.6659159747891181,
        "gradePct": 0.771260527013425,
        "smoothedEle": 31.066800595041116,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.971937,
        "lng": 121.578141,
        "ele": 31.25,
        "distanceKm": 1.728412268716403,
        "gradePct": 0.6980086028868497,
        "smoothedEle": 31.448187703340576,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.971369,
        "lng": 121.577791,
        "ele": 32,
        "distanceKm": 1.8008943422231092,
        "gradePct": 0.5324152415943556,
        "smoothedEle": 31.620061545398812,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.970906,
        "lng": 121.577479,
        "ele": 33.5,
        "distanceKm": 1.8613547537117143,
        "gradePct": 0.3449585467439481,
        "smoothedEle": 31.720100748268855,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.970352,
        "lng": 121.577143,
        "ele": 32.75,
        "distanceKm": 1.9317841825252333,
        "gradePct": 0.24784938465220213,
        "smoothedEle": 31.95188215700353,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.969923,
        "lng": 121.576835,
        "ele": 31.5,
        "distanceKm": 1.9888358121525094,
        "gradePct": 0.2594294896915362,
        "smoothedEle": 32.11032661469435,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.96954910275607,
        "lng": 121.57661273240343,
        "ele": 31.387357050597817,
        "distanceKm": 2.0361490855997637,
        "gradePct": 0.24734861497218938,
        "smoothedEle": 32.1730920935915,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.969180961724756,
        "lng": 121.57637801490378,
        "ele": 31.571304934331945,
        "distanceKm": 2.0835249530108397,
        "gradePct": 0.1833915184176736,
        "smoothedEle": 32.15984533132213,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.968812820693444,
        "lng": 121.57614329740414,
        "ele": 31.755252818066076,
        "distanceKm": 2.130900854715231,
        "gradePct": 0.01627474260439677,
        "smoothedEle": 31.981524633485634,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.96844467966213,
        "lng": 121.57590857990449,
        "ele": 31.939200701800203,
        "distanceKm": 2.178276790713969,
        "gradePct": -0.13019235239149124,
        "smoothedEle": 31.82061727121997,
        "gradeBand": "descent"
      },
      {
        "lat": 23.968077,
        "lng": 121.575673,
        "ele": 32.5,
        "distanceKm": 2.225652652745191,
        "gradePct": -0.2171020554553758,
        "smoothedEle": 31.724963483553385,
        "gradeBand": "descent"
      },
      {
        "lat": 23.96828925,
        "lng": 121.5752785,
        "ele": 32.1875,
        "distanceKm": 2.2721686079712082,
        "gradePct": -0.22087600520878486,
        "smoothedEle": 31.721268667578084,
        "gradeBand": "descent"
      },
      {
        "lat": 23.968501500000002,
        "lng": 121.574884,
        "ele": 31.875,
        "distanceKm": 2.3186845063121053,
        "gradePct": -0.14781096241229527,
        "smoothedEle": 31.731884477743808,
        "gradeBand": "descent"
      },
      {
        "lat": 23.96871375,
        "lng": 121.5744895,
        "ele": 31.5625,
        "distanceKm": 2.3652003477672316,
        "gradePct": -0.06503012273677017,
        "smoothedEle": 31.73496978294099,
        "gradeBand": "descent"
      },
      {
        "lat": 23.968926,
        "lng": 121.574095,
        "ele": 31.25,
        "distanceKm": 2.4117161323365384,
        "gradePct": -0.011288623861188887,
        "smoothedEle": 31.730524635995668,
        "gradeBand": "descent"
      },
      {
        "lat": 23.969145,
        "lng": 121.5737028,
        "ele": 31.349999999999998,
        "distanceKm": 2.4584175740409577,
        "gradePct": 0.06252346868379982,
        "smoothedEle": 31.847407865431265,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.969364,
        "lng": 121.5733106,
        "ele": 31.45,
        "distanceKm": 2.5051189579634645,
        "gradePct": 0.18118571454951554,
        "smoothedEle": 32.09115999144188,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.969583,
        "lng": 121.5729184,
        "ele": 31.55,
        "distanceKm": 2.5518202841015363,
        "gradePct": 0.3991325239089299,
        "smoothedEle": 32.53234735718694,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.969801999999998,
        "lng": 121.5725262,
        "ele": 31.650000000000002,
        "distanceKm": 2.5985215524567553,
        "gradePct": 0.6676061783903661,
        "smoothedEle": 33.066997894790426,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.970021,
        "lng": 121.572134,
        "ele": 31.75,
        "distanceKm": 2.645222763026599,
        "gradePct": 0.9165223861640126,
        "smoothedEle": 33.64742898652146,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.970229666666665,
        "lng": 121.57175033333334,
        "ele": 33.49999999999999,
        "distanceKm": 2.6905880246999287,
        "gradePct": 1.1364504554761572,
        "smoothedEle": 34.288218484495346,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.970438333333334,
        "lng": 121.57136666666666,
        "ele": 35.25000000000001,
        "distanceKm": 2.735953232134256,
        "gradePct": 1.2881676114422465,
        "smoothedEle": 34.95878656129698,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.970647,
        "lng": 121.570983,
        "ele": 37,
        "distanceKm": 2.781318385326274,
        "gradePct": 1.3752486592351179,
        "smoothedEle": 35.620548045041694,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.97086841480612,
        "lng": 121.57056968726161,
        "ele": 37.60483538458996,
        "distanceKm": 2.829997950125885,
        "gradePct": 1.408451050120578,
        "smoothedEle": 36.2751078382529,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.971067,
        "lng": 121.57014,
        "ele": 37.75,
        "distanceKm": 2.8789228146781207,
        "gradePct": 1.3968848647083711,
        "smoothedEle": 36.91721579118342,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.971405,
        "lng": 121.569545,
        "ele": 38.75,
        "distanceKm": 2.950107904198901,
        "gradePct": 1.2575716394515932,
        "smoothedEle": 37.68041028010459,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.97166672146689,
        "lng": 121.56907081807623,
        "ele": 38.75,
        "distanceKm": 3.0063941305168167,
        "gradePct": 1.0160529365563589,
        "smoothedEle": 37.98982978762047,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.971929,
        "lng": 121.568597,
        "ele": 38.25,
        "distanceKm": 3.0626807026672624,
        "gradePct": 0.6595833869276854,
        "smoothedEle": 38.02321510121423,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972108,
        "lng": 121.568282,
        "ele": 38.25,
        "distanceKm": 3.1003702153253445,
        "gradePct": 0.41609205918807357,
        "smoothedEle": 37.9793432598572,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972330799999998,
        "lng": 121.567878,
        "ele": 38,
        "distanceKm": 3.148314902944141,
        "gradePct": 0.13385007034284147,
        "smoothedEle": 37.92888717213702,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972553599999998,
        "lng": 121.56747399999999,
        "ele": 37.75,
        "distanceKm": 3.1962595297981995,
        "gradePct": -0.04753146537778004,
        "smoothedEle": 37.839054414081616,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9727764,
        "lng": 121.56707,
        "ele": 37.5,
        "distanceKm": 3.2442040958859857,
        "gradePct": -0.1549761910697852,
        "smoothedEle": 37.702303669909384,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9729992,
        "lng": 121.566666,
        "ele": 37.25,
        "distanceKm": 3.29214860120906,
        "gradePct": -0.2102185424323009,
        "smoothedEle": 37.56847640619937,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973222,
        "lng": 121.566262,
        "ele": 37,
        "distanceKm": 3.3400930457658866,
        "gradePct": -0.2255805504820321,
        "smoothedEle": 37.48637859906733,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973401,
        "lng": 121.565944,
        "ele": 37.25,
        "distanceKm": 3.3780414638510634,
        "gradePct": -0.22385566826043382,
        "smoothedEle": 37.42547785381937,
        "gradeBand": "descent"
      },
      {
        "lat": 23.97358,
        "lng": 121.565626,
        "ele": 37.5,
        "distanceKm": 3.4159898437217207,
        "gradePct": -0.21002527551318176,
        "smoothedEle": 37.36272772308867,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973787853922342,
        "lng": 121.5652419130877,
        "ele": 37.343780815289215,
        "distanceKm": 3.4613447562105932,
        "gradePct": -0.17794027943142493,
        "smoothedEle": 37.29857846953929,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973996,
        "lng": 121.564858,
        "ele": 37.25,
        "distanceKm": 3.506700988340383,
        "gradePct": -0.1331815395497421,
        "smoothedEle": 37.27719450526221,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973787853922342,
        "lng": 121.5652419130877,
        "ele": 37.343780815289215,
        "distanceKm": 3.5520572204701724,
        "gradePct": -0.08429983381193644,
        "smoothedEle": 37.298578469539294,
        "gradeBand": "descent"
      },
      {
        "lat": 23.97358,
        "lng": 121.565626,
        "ele": 37.5,
        "distanceKm": 3.597412132959045,
        "gradePct": -0.015359730547235259,
        "smoothedEle": 37.362727723088675,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973401,
        "lng": 121.565944,
        "ele": 37.25,
        "distanceKm": 3.635360512829702,
        "gradePct": 0.04507384567205005,
        "smoothedEle": 37.42547785381937,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.973222,
        "lng": 121.566262,
        "ele": 37,
        "distanceKm": 3.673308930914879,
        "gradePct": 0.09672042122296168,
        "smoothedEle": 37.48637859906732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9729992,
        "lng": 121.566666,
        "ele": 37.25,
        "distanceKm": 3.7212533754717056,
        "gradePct": 0.1422104657044122,
        "smoothedEle": 37.568476406199366,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9727764,
        "lng": 121.56707,
        "ele": 37.5,
        "distanceKm": 3.76919788079478,
        "gradePct": 0.18974086402871376,
        "smoothedEle": 37.702303669909384,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972553599999998,
        "lng": 121.56747399999999,
        "ele": 37.75,
        "distanceKm": 3.817142446882566,
        "gradePct": 0.22185066255349972,
        "smoothedEle": 37.83905441408161,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972330799999998,
        "lng": 121.567878,
        "ele": 38,
        "distanceKm": 3.8650870737366247,
        "gradePct": 0.2278516264865898,
        "smoothedEle": 37.92888717213701,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.972108,
        "lng": 121.568282,
        "ele": 38.25,
        "distanceKm": 3.913031761355421,
        "gradePct": 0.2124725790839113,
        "smoothedEle": 37.97934325985721,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.971929,
        "lng": 121.568597,
        "ele": 38.25,
        "distanceKm": 3.950721274013503,
        "gradePct": 0.1862425468181817,
        "smoothedEle": 38.02321510121422,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.97166672146689,
        "lng": 121.56907081807623,
        "ele": 38.75,
        "distanceKm": 4.0070078461639485,
        "gradePct": 0.09376392151640536,
        "smoothedEle": 37.99767566136754,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.971405,
        "lng": 121.569545,
        "ele": 38.75,
        "distanceKm": 4.063294072481864,
        "gradePct": -0.04638042770952917,
        "smoothedEle": 37.83276681100311,
        "gradeBand": "descent"
      },
      {
        "lat": 23.971067,
        "lng": 121.57014,
        "ele": 37.75,
        "distanceKm": 4.134479162002645,
        "gradePct": -0.27185489569290744,
        "smoothedEle": 37.460598953359764,
        "gradeBand": "descent"
      },
      {
        "lat": 23.97086841480612,
        "lng": 121.57056968726161,
        "ele": 37.60483538458996,
        "distanceKm": 4.18340402655488,
        "gradePct": -0.45060912800589353,
        "smoothedEle": 37.10716739013589,
        "gradeBand": "descent"
      },
      {
        "lat": 23.970647,
        "lng": 121.570983,
        "ele": 37,
        "distanceKm": 4.232083591354492,
        "gradePct": -0.6191619075018404,
        "smoothedEle": 36.685884275664634,
        "gradeBand": "descent"
      },
      {
        "lat": 23.97107673011927,
        "lng": 121.57126976865537,
        "ele": 36.07415044988884,
        "distanceKm": 4.288050249329365,
        "gradePct": -0.8168062362276551,
        "smoothedEle": 36.06972479982277,
        "gradeBand": "descent"
      },
      {
        "lat": 23.971508153412845,
        "lng": 121.5715535124369,
        "ele": 35.38276696659256,
        "distanceKm": 4.344018757382581,
        "gradePct": -1.009166316758658,
        "smoothedEle": 35.37335260616105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.971939576706422,
        "lng": 121.57183725621846,
        "ele": 34.691383483296285,
        "distanceKm": 4.399987215718674,
        "gradePct": -1.1323318252324899,
        "smoothedEle": 34.69898935930314,
        "gradeBand": "descent"
      },
      {
        "lat": 23.972371,
        "lng": 121.572121,
        "ele": 34,
        "distanceKm": 4.4559556243351,
        "gradePct": -1.227624140737144,
        "smoothedEle": 33.96781916965858,
        "gradeBand": "descent"
      },
      {
        "lat": 23.972718,
        "lng": 121.572351,
        "ele": 33.400000000000006,
        "distanceKm": 4.501065254359213,
        "gradePct": -1.2314165716515457,
        "smoothedEle": 33.44495616961093,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973065,
        "lng": 121.572581,
        "ele": 32.800000000000004,
        "distanceKm": 4.546174851781662,
        "gradePct": -1.1461249477702173,
        "smoothedEle": 33.05512395646653,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973412,
        "lng": 121.572811,
        "ele": 32.199999999999996,
        "distanceKm": 4.591284416602743,
        "gradePct": -1.001128741993429,
        "smoothedEle": 32.801591791830845,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973758999999998,
        "lng": 121.573041,
        "ele": 31.599999999999998,
        "distanceKm": 4.636393948821401,
        "gradePct": -0.8282025972784225,
        "smoothedEle": 32.566967319366725,
        "gradeBand": "descent"
      },
      {
        "lat": 23.974106,
        "lng": 121.573271,
        "ele": 31,
        "distanceKm": 4.681503448437932,
        "gradePct": -0.6947608071769297,
        "smoothedEle": 32.28217426748445,
        "gradeBand": "descent"
      },
      {
        "lat": 23.974512,
        "lng": 121.573608,
        "ele": 31.25,
        "distanceKm": 4.7381643606568415,
        "gradePct": -0.5824101588308851,
        "smoothedEle": 31.95952942803799,
        "gradeBand": "descent"
      },
      {
        "lat": 23.974783902308964,
        "lng": 121.57390544675718,
        "ele": 32.09707130717624,
        "distanceKm": 4.7809127240253035,
        "gradePct": -0.5518648269282607,
        "smoothedEle": 31.756154823362085,
        "gradeBand": "descent"
      },
      {
        "lat": 23.975036,
        "lng": 121.574224,
        "ele": 33,
        "distanceKm": 4.823730012966713,
        "gradePct": -0.523115403224796,
        "smoothedEle": 31.586604393231717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.975256,
        "lng": 121.57461,
        "ele": 32.5,
        "distanceKm": 4.869952258253084,
        "gradePct": -0.40553613016657725,
        "smoothedEle": 31.544028967848725,
        "gradeBand": "descent"
      },
      {
        "lat": 23.975398,
        "lng": 121.575072,
        "ele": 31.25,
        "distanceKm": 4.919476559186549,
        "gradePct": -0.22427700321494531,
        "smoothedEle": 31.617389569719496,
        "gradeBand": "descent"
      },
      {
        "lat": 23.975229189079567,
        "lng": 121.57544155904203,
        "ele": 31.021877134549236,
        "distanceKm": 4.961454825050042,
        "gradePct": -0.0372077913348647,
        "smoothedEle": 31.774309860947657,
        "gradeBand": "descent"
      },
      {
        "lat": 23.97506127467233,
        "lng": 121.5758116060827,
        "ele": 30.949136514676905,
        "distanceKm": 5.003433054473407,
        "gradePct": 0.11206263866785615,
        "smoothedEle": 31.89110276582779,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.974894,
        "lng": 121.576182,
        "ele": 30.75,
        "distanceKm": 5.045411328041542,
        "gradePct": 0.17152486360057914,
        "smoothedEle": 31.90968340705765,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.974601,
        "lng": 121.576735,
        "ele": 31.75,
        "distanceKm": 5.110359793166359,
        "gradePct": 0.07893836625364152,
        "smoothedEle": 31.76176158979773,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.974377,
        "lng": 121.577102,
        "ele": 32.37500000000001,
        "distanceKm": 5.155201518930781,
        "gradePct": -0.04749211251241543,
        "smoothedEle": 31.65594995335975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.974153,
        "lng": 121.577469,
        "ele": 33,
        "distanceKm": 5.200043298601496,
        "gradePct": -0.1669126477315109,
        "smoothedEle": 31.547846404773072,
        "gradeBand": "descent"
      },
      {
        "lat": 23.97394225,
        "lng": 121.57786449999999,
        "ele": 32.5,
        "distanceKm": 5.246561014142027,
        "gradePct": -0.25010333628670955,
        "smoothedEle": 31.406858294511316,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9737315,
        "lng": 121.57826,
        "ele": 31.999999999999996,
        "distanceKm": 5.293078786461516,
        "gradePct": -0.280180122688632,
        "smoothedEle": 31.24075928630483,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973520750000002,
        "lng": 121.57865550000001,
        "ele": 31.499999999999996,
        "distanceKm": 5.3395966155580705,
        "gradePct": -0.29192181483136154,
        "smoothedEle": 31.108928732606927,
        "gradeBand": "descent"
      },
      {
        "lat": 23.97331,
        "lng": 121.579051,
        "ele": 31,
        "distanceKm": 5.386114501430396,
        "gradePct": -0.36185324950374537,
        "smoothedEle": 30.857719135064624,
        "gradeBand": "descent"
      },
      {
        "lat": 23.973037,
        "lng": 121.579512,
        "ele": 29.75,
        "distanceKm": 5.441930175115366,
        "gradePct": -0.5435930438197878,
        "smoothedEle": 30.333707574595817,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9728395,
        "lng": 121.57988,
        "ele": 29.375,
        "distanceKm": 5.485292540504057,
        "gradePct": -0.732446454187252,
        "smoothedEle": 29.803668391369474,
        "gradeBand": "descent"
      },
      {
        "lat": 23.972642,
        "lng": 121.580248,
        "ele": 29,
        "distanceKm": 5.528654955307624,
        "gradePct": -0.9331318360921844,
        "smoothedEle": 29.273673496482562,
        "gradeBand": "descent"
      },
      {
        "lat": 23.972413,
        "lng": 121.580664,
        "ele": 29.75,
        "distanceKm": 5.577999665077485,
        "gradePct": -1.0809701586208904,
        "smoothedEle": 28.739601204333088,
        "gradeBand": "descent"
      },
      {
        "lat": 23.972222769683427,
        "lng": 121.58102890096706,
        "ele": 28.920969802056486,
        "distanceKm": 5.620684673816947,
        "gradePct": -1.0969333684774751,
        "smoothedEle": 28.339298938803665,
        "gradeBand": "descent"
      },
      {
        "lat": 23.972036,
        "lng": 121.581396,
        "ele": 27.75,
        "distanceKm": 5.663375337938932,
        "gradePct": -1.0532693183745794,
        "smoothedEle": 27.965034331367754,
        "gradeBand": "descent"
      },
      {
        "lat": 23.971783,
        "lng": 121.581843,
        "ele": 26.75,
        "distanceKm": 5.716799387201492,
        "gradePct": -0.8987676668571797,
        "smoothedEle": 27.621042236969277,
        "gradeBand": "descent"
      },
      {
        "lat": 23.971582,
        "lng": 121.582209,
        "ele": 26.25,
        "distanceKm": 5.760186164110256,
        "gradePct": -0.7852070140677258,
        "smoothedEle": 27.361987931073806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9713725,
        "lng": 121.58263,
        "ele": 26.5,
        "distanceKm": 5.808893541499757,
        "gradePct": -0.6973587415440996,
        "smoothedEle": 27.05515931710324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.971163,
        "lng": 121.583051,
        "ele": 26.75,
        "distanceKm": 5.8576009799641975,
        "gradePct": -0.6875289386531497,
        "smoothedEle": 26.640599649203917,
        "gradeBand": "descent"
      },
      {
        "lat": 23.970932155525976,
        "lng": 121.58347273509678,
        "ele": 26.565028466325263,
        "distanceKm": 5.907551231692282,
        "gradePct": -0.7145198626324423,
        "smoothedEle": 26.251550457373973,
        "gradeBand": "descent"
      },
      {
        "lat": 23.97070308968292,
        "lng": 121.58389562616799,
        "ele": 26.5,
        "distanceKm": 5.957501202476247,
        "gradePct": -0.7188585278488795,
        "smoothedEle": 25.940302277614492,
        "gradeBand": "descent"
      },
      {
        "lat": 23.970474971859954,
        "lng": 121.58431913330496,
        "ele": 26.283657026818013,
        "distanceKm": 6.007451480506677,
        "gradePct": -0.6382930861186201,
        "smoothedEle": 25.78765730417578,
        "gradeBand": "descent"
      },
      {
        "lat": 23.970244849040505,
        "lng": 121.58474133541748,
        "ele": 25.643854489714045,
        "distanceKm": 6.0574014854528,
        "gradePct": -0.4896707857054383,
        "smoothedEle": 25.66295601923689,
        "gradeBand": "descent"
      },
      {
        "lat": 23.97001429745367,
        "lng": 121.58516325887632,
        "ele": 25.083808922431675,
        "distanceKm": 6.107351695575006,
        "gradePct": -0.4006643131230355,
        "smoothedEle": 25.451775964740477,
        "gradeBand": "descent"
      },
      {
        "lat": 23.969785,
        "lng": 121.585586,
        "ele": 24.25,
        "distanceKm": 6.157301965427567,
        "gradePct": -0.378908860386202,
        "smoothedEle": 25.18372604242795,
        "gradeBand": "descent"
      },
      {
        "lat": 23.969466602851355,
        "lng": 121.58588452787401,
        "ele": 24.31645757271122,
        "distanceKm": 6.2039227318777765,
        "gradePct": -0.4321649351401536,
        "smoothedEle": 24.934111072384976,
        "gradeBand": "descent"
      },
      {
        "lat": 23.969136,
        "lng": 121.586167,
        "ele": 25.5,
        "distanceKm": 6.250561133253954,
        "gradePct": -0.4867172260124639,
        "smoothedEle": 24.70659865678484,
        "gradeBand": "descent"
      },
      {
        "lat": 23.96880697891809,
        "lng": 121.58645472136452,
        "ele": 24.9263928139609,
        "distanceKm": 6.297392150044706,
        "gradePct": -0.5069011627848794,
        "smoothedEle": 24.480080716652527,
        "gradeBand": "descent"
      },
      {
        "lat": 23.968477957836175,
        "lng": 121.58674244272903,
        "ele": 24.3527856279218,
        "distanceKm": 6.3442232134265355,
        "gradePct": -0.4890833684214662,
        "smoothedEle": 24.275744280924876,
        "gradeBand": "descent"
      },
      {
        "lat": 23.968148461212788,
        "lng": 121.5870295103492,
        "ele": 23.877357042407976,
        "distanceKm": 6.391054243915628,
        "gradePct": -0.4539432814342059,
        "smoothedEle": 24.09512443291445,
        "gradeBand": "descent"
      },
      {
        "lat": 23.967818751842593,
        "lng": 121.58731628455308,
        "ele": 23.854606771343942,
        "distanceKm": 6.437885275261419,
        "gradePct": -0.38399480479207926,
        "smoothedEle": 24.000444680211018,
        "gradeBand": "descent"
      },
      {
        "lat": 23.967489,
        "lng": 121.587603,
        "ele": 24,
        "distanceKm": 6.4847163362021565,
        "gradePct": -0.3228468539710804,
        "smoothedEle": 23.89569892200801,
        "gradeBand": "descent"
      },
      {
        "lat": 23.967058,
        "lng": 121.587987,
        "ele": 23.500000000000004,
        "distanceKm": 6.546515718861077,
        "gradePct": -0.292066456873991,
        "smoothedEle": 23.68276953775684,
        "gradeBand": "descent"
      },
      {
        "lat": 23.966627,
        "lng": 121.588371,
        "ele": 23,
        "distanceKm": 6.60831518389562,
        "gradePct": -0.23792057576626016,
        "smoothedEle": 23.58438630214038,
        "gradeBand": "descent"
      },
      {
        "lat": 23.966137,
        "lng": 121.588732,
        "ele": 23.25,
        "distanceKm": 6.673997335591637,
        "gradePct": -0.1672627956368567,
        "smoothedEle": 23.58514822738565,
        "gradeBand": "descent"
      },
      {
        "lat": 23.965723999999998,
        "lng": 121.58899224999999,
        "ele": 23.4375,
        "distanceKm": 6.726990170955855,
        "gradePct": -0.098312309349632,
        "smoothedEle": 23.553420071555003,
        "gradeBand": "descent"
      },
      {
        "lat": 23.965311,
        "lng": 121.58925249999999,
        "ele": 23.625,
        "distanceKm": 6.779983048599999,
        "gradePct": -0.05832773204385328,
        "smoothedEle": 23.512834903933317,
        "gradeBand": "descent"
      },
      {
        "lat": 23.964898,
        "lng": 121.58951275,
        "ele": 23.8125,
        "distanceKm": 6.83297596852455,
        "gradePct": -0.031018918589060335,
        "smoothedEle": 23.522634534676662,
        "gradeBand": "descent"
      },
      {
        "lat": 23.964485,
        "lng": 121.589773,
        "ele": 24,
        "distanceKm": 6.885968930727824,
        "gradePct": 0.018467823514949782,
        "smoothedEle": 23.614916176491636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.964112,
        "lng": 121.59005,
        "ele": 23.75,
        "distanceKm": 6.936093111415662,
        "gradePct": 0.07340975833655422,
        "smoothedEle": 23.693268002972967,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 6.936093111415662,
      "elevationGainM": 14.32994709824126,
      "elevationLossM": 14.51038019728091,
      "minimumElevationM": 23,
      "maximumElevationM": 38.75,
      "maximumSustainedGradePct": 1.408451050120578
    },
    "climbs": []
  },
  "route-art-flying-bird": {
    "routeId": "route-art-flying-bird",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:22:08.347Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "a5596ef1f8a451cf99e2691fe53a84b8a1dafe7bab46b99825c414e56396b098",
      "roadPolicyAuditSha256": "8a3e82e85269442555e33478d822384e7c6e718983cab47593a11c664b53c40a",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "100/100、500/200、750/300、1000/500 公尺視窗依序為 12.63 公里、41/3.28%、30/1.06%、28/0.87%、27/0.75%。採 500/200 降低河海平原 SRTM 短波；僅供行程規劃。",
        "referenceUrl": "https://www.openstreetmap.org/copyright",
        "referenceLabel": "OpenStreetMap 即時道路資料"
      },
      "reviewedAt": "2026-08-01T05:30:05.845Z",
      "reviewerNote": "飛鳥圖形保留西高東低的展翼折線；海岸 service、森林公園 footway 與北側 track 均已刪，翼尖改用新站路、中興路公共主線。raw 禁止道路與非法逆向均為 0；live OSM 五窗 5/5，最大偏差 0.05 公尺，合法公共道路優先於完整羽翼。"
    },
    "waypoints": [
      {
        "name": "光明路公共道路",
        "lat": 22.7514974,
        "lng": 121.1481032,
        "role": "start"
      },
      {
        "name": "新站路公共主線",
        "lat": 22.7934998,
        "lng": 121.1248106,
        "role": "via"
      },
      {
        "name": "中興路二段公共主線",
        "lat": 22.7676821,
        "lng": 121.1287391,
        "role": "via"
      },
      {
        "name": "光明路公共道路",
        "lat": 22.7514974,
        "lng": 121.1481032,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.751497,
        "lng": 121.148103,
        "ele": 14.25,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 13.873528097842435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.75176904083046,
        "lng": 121.14776737297909,
        "ele": 13.580393134290981,
        "distanceKm": 0.04582044320378944,
        "gradePct": 0.08536350815212448,
        "smoothedEle": 13.912642035612041,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.75204072320001,
        "lng": 121.14743140420795,
        "ele": 13.431174707273845,
        "distanceKm": 0.09164087351620213,
        "gradePct": -0.0025479258086845216,
        "smoothedEle": 13.871193156374812,
        "gradeBand": "descent"
      },
      {
        "lat": 22.752313,
        "lng": 121.147096,
        "ele": 13.75,
        "distanceKm": 0.13746138802546493,
        "gradePct": -0.06880479625436674,
        "smoothedEle": 13.77894806988309,
        "gradeBand": "descent"
      },
      {
        "lat": 22.75261870349708,
        "lng": 121.14739186049233,
        "ele": 13.940083465387108,
        "distanceKm": 0.18302358441090258,
        "gradePct": -0.0019419159561510832,
        "smoothedEle": 13.86997393365324,
        "gradeBand": "descent"
      },
      {
        "lat": 22.752925,
        "lng": 121.147687,
        "ele": 14.5,
        "distanceKm": 0.22858581070800732,
        "gradePct": 0.11776400509376028,
        "smoothedEle": 14.133457958884037,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.753216685623094,
        "lng": 121.14733769548538,
        "ele": 14.102208639869765,
        "distanceKm": 0.2769068104405131,
        "gradePct": 0.27904822958229225,
        "smoothedEle": 14.442617958309947,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7535088005947,
        "lng": 121.14698880630117,
        "ele": 13.539113293906805,
        "distanceKm": 0.3252282716349793,
        "gradePct": 0.5090864620299698,
        "smoothedEle": 14.82174849740058,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.753801,
        "lng": 121.14664,
        "ele": 13,
        "distanceKm": 0.37354969653921843,
        "gradePct": 0.6679232549702894,
        "smoothedEle": 15.18689315528914,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.754093331705533,
        "lng": 121.14629033447329,
        "ele": 15.12347485860199,
        "distanceKm": 0.42194619597763855,
        "gradePct": 0.7407712387507797,
        "smoothedEle": 15.576603883861331,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.754386,
        "lng": 121.145941,
        "ele": 17.25,
        "distanceKm": 0.47034265337559955,
        "gradePct": 0.7936041320340488,
        "smoothedEle": 15.987828440758161,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.754656,
        "lng": 121.1456545,
        "ele": 17.375,
        "distanceKm": 0.5123477057334094,
        "gradePct": 0.8155001149688923,
        "smoothedEle": 16.35168771276346,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.754926,
        "lng": 121.145368,
        "ele": 17.5,
        "distanceKm": 0.5543527174814314,
        "gradePct": 0.8567562583711901,
        "smoothedEle": 16.755342185918664,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.755252,
        "lng": 121.145046,
        "ele": 17.25,
        "distanceKm": 0.6033855834255186,
        "gradePct": 0.894499007666969,
        "smoothedEle": 17.21614336553342,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.755521499999997,
        "lng": 121.144775,
        "ele": 17.75,
        "distanceKm": 0.6442539073364983,
        "gradePct": 0.8884687574093206,
        "smoothedEle": 17.543089956821255,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.755791,
        "lng": 121.144504,
        "ele": 18.25,
        "distanceKm": 0.6851221939696879,
        "gradePct": 0.8112660008577084,
        "smoothedEle": 17.738384872376184,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7560675,
        "lng": 121.14421250000001,
        "ele": 18.625,
        "distanceKm": 0.7280024283378578,
        "gradePct": 0.6782026821767244,
        "smoothedEle": 17.858529859356043,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.756344,
        "lng": 121.143921,
        "ele": 19,
        "distanceKm": 0.7708826205306756,
        "gradePct": 0.551455535543994,
        "smoothedEle": 18.013598017655458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.756739,
        "lng": 121.143923,
        "ele": 18.5,
        "distanceKm": 0.8148051559916403,
        "gradePct": 0.46953906633024733,
        "smoothedEle": 18.246578078722887,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.757253,
        "lng": 121.143915,
        "ele": 17,
        "distanceKm": 0.8719653137259892,
        "gradePct": 0.4679589073408737,
        "smoothedEle": 18.611430665061473,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.75771412360254,
        "lng": 121.14391283510047,
        "ele": 17.360816590408447,
        "distanceKm": 0.9232404702323171,
        "gradePct": 0.49665044711817263,
        "smoothedEle": 18.838488349964727,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.75817524877676,
        "lng": 121.14391115067833,
        "ele": 18.45548687812381,
        "distanceKm": 0.9745156118734903,
        "gradePct": 0.47050047840658155,
        "smoothedEle": 18.973869595711754,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.75863637486081,
        "lng": 121.14390973947859,
        "ele": 19.880260708432246,
        "distanceKm": 1.0257907679657015,
        "gradePct": 0.37736039873622584,
        "smoothedEle": 19.07141990280055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.759097500562152,
        "lng": 121.1439081868668,
        "ele": 20.656566602948583,
        "distanceKm": 1.0770659244714214,
        "gradePct": 0.33982449804676673,
        "smoothedEle": 19.313666288800064,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.759558625970993,
        "lng": 121.14390653564631,
        "ele": 20.20086736778723,
        "distanceKm": 1.1283410808408556,
        "gradePct": 0.5347009229758728,
        "smoothedEle": 19.921357287301355,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.760019751652738,
        "lng": 121.14390497793578,
        "ele": 19.744483943841676,
        "distanceKm": 1.1796162367900749,
        "gradePct": 0.78831036037127,
        "smoothedEle": 20.560194187975675,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.76048087662207,
        "lng": 121.1439032204978,
        "ele": 19.629917032159497,
        "distanceKm": 1.2308913814039861,
        "gradePct": 0.9892232182524555,
        "smoothedEle": 21.07396388002515,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.760942,
        "lng": 121.143901,
        "ele": 20,
        "distanceKm": 1.2821665379093214,
        "gradePct": 1.050151292561875,
        "smoothedEle": 21.47441914053469,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.761328,
        "lng": 121.1439,
        "ele": 22.25,
        "distanceKm": 1.3250879613544961,
        "gradePct": 0.922075118235828,
        "smoothedEle": 21.726952957217105,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.761678,
        "lng": 121.143909,
        "ele": 24,
        "distanceKm": 1.364017178736123,
        "gradePct": 0.7758389539984274,
        "smoothedEle": 21.917523512996116,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7620165,
        "lng": 121.14390449999999,
        "ele": 23.5,
        "distanceKm": 1.401659541408555,
        "gradePct": 0.6546872876673897,
        "smoothedEle": 22.090439555794124,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.762355,
        "lng": 121.1439,
        "ele": 23,
        "distanceKm": 1.4393019040665542,
        "gradePct": 0.5689854808467276,
        "smoothedEle": 22.277620414877404,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.762903,
        "lng": 121.143912,
        "ele": 23.25,
        "distanceKm": 1.5002492292501197,
        "gradePct": 0.521532163318181,
        "smoothedEle": 22.62387535014331,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.76355,
        "lng": 121.143901,
        "ele": 23.25,
        "distanceKm": 1.5722012866649382,
        "gradePct": 0.505861873595052,
        "smoothedEle": 22.966842231819573,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7639125,
        "lng": 121.1438985,
        "ele": 22.75,
        "distanceKm": 1.6125103183049463,
        "gradePct": 0.42176673036436096,
        "smoothedEle": 22.987929718434486,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.764275,
        "lng": 121.143896,
        "ele": 22.25,
        "distanceKm": 1.652819349940636,
        "gradePct": 0.35697915374507094,
        "smoothedEle": 23.068374255756314,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.764907,
        "lng": 121.143886,
        "ele": 22.5,
        "distanceKm": 1.7231021201685732,
        "gradePct": 0.29385776414965475,
        "smoothedEle": 23.3205215333425,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.765393542741187,
        "lng": 121.14389056541447,
        "ele": 22.82610103296747,
        "distanceKm": 1.7772053043894063,
        "gradePct": 0.2702113085884275,
        "smoothedEle": 23.509882678115417,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.76588,
        "lng": 121.1439,
        "ele": 23.25,
        "distanceKm": 1.8313056074652851,
        "gradePct": 0.38236541209390407,
        "smoothedEle": 23.79017020928952,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.766421,
        "lng": 121.143879,
        "ele": 24.75,
        "distanceKm": 1.8915006676488573,
        "gradePct": 0.5079832571378021,
        "smoothedEle": 24.223114311853656,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.766972,
        "lng": 121.143871,
        "ele": 25,
        "distanceKm": 1.9527746473265175,
        "gradePct": 0.635807100972688,
        "smoothedEle": 24.695989580340683,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.76747,
        "lng": 121.143871,
        "ele": 25,
        "distanceKm": 2.008149797282854,
        "gradePct": 0.6855887409355701,
        "smoothedEle": 25.041380066223944,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.767968,
        "lng": 121.143871,
        "ele": 26,
        "distanceKm": 2.0635249472391903,
        "gradePct": 0.5992176483389021,
        "smoothedEle": 25.220338360807617,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.768581,
        "lng": 121.143861,
        "ele": 26.5,
        "distanceKm": 2.1316952423295126,
        "gradePct": 0.374649774246537,
        "smoothedEle": 25.28261111526351,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.769114999346538,
        "lng": 121.14385968025562,
        "ele": 26.010191707128836,
        "distanceKm": 2.191073496691341,
        "gradePct": 0.19229422570246163,
        "smoothedEle": 25.31945879687792,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.769649,
        "lng": 121.143859,
        "ele": 25.5,
        "distanceKm": 2.250451783160366,
        "gradePct": 0.07438958627525055,
        "smoothedEle": 25.326868417099224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.769866,
        "lng": 121.144154,
        "ele": 24.25,
        "distanceKm": 2.2891435814241334,
        "gradePct": 0.00869142409164602,
        "smoothedEle": 25.26112352687703,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.770225,
        "lng": 121.144545,
        "ele": 24,
        "distanceKm": 2.3457178627598707,
        "gradePct": -0.19158931448846223,
        "smoothedEle": 24.908134342859682,
        "gradeBand": "descent"
      },
      {
        "lat": 22.770545,
        "lng": 121.14484,
        "ele": 24.75,
        "distanceKm": 2.392418303617376,
        "gradePct": -0.41036782093696156,
        "smoothedEle": 24.498890969017932,
        "gradeBand": "descent"
      },
      {
        "lat": 22.770781,
        "lng": 121.145074,
        "ele": 25.5,
        "distanceKm": 2.4279745548103304,
        "gradePct": -0.5733524773291728,
        "smoothedEle": 24.177358603365192,
        "gradeBand": "descent"
      },
      {
        "lat": 22.771131,
        "lng": 121.144795,
        "ele": 25,
        "distanceKm": 2.4762746982174213,
        "gradePct": -0.7251481325924936,
        "smoothedEle": 23.83269399706422,
        "gradeBand": "descent"
      },
      {
        "lat": 22.771476,
        "lng": 121.144595,
        "ele": 24.25,
        "distanceKm": 2.519773521968345,
        "gradePct": -0.7201915239861231,
        "smoothedEle": 23.629628237371612,
        "gradeBand": "descent"
      },
      {
        "lat": 22.771812,
        "lng": 121.14455,
        "ele": 23.25,
        "distanceKm": 2.5574188663795963,
        "gradePct": -0.6249192963409674,
        "smoothedEle": 23.55575799869737,
        "gradeBand": "descent"
      },
      {
        "lat": 22.77196,
        "lng": 121.144599,
        "ele": 22.75,
        "distanceKm": 2.574625487563026,
        "gradePct": -0.5692367055305437,
        "smoothedEle": 23.516338828474307,
        "gradeBand": "descent"
      },
      {
        "lat": 22.77206,
        "lng": 121.144736,
        "ele": 22.25,
        "distanceKm": 2.5925403361922585,
        "gradePct": -0.508733659292012,
        "smoothedEle": 23.480320119516776,
        "gradeBand": "descent"
      },
      {
        "lat": 22.772526,
        "lng": 121.144257,
        "ele": 21.75,
        "distanceKm": 2.6639325538876206,
        "gradePct": -0.3734153119677771,
        "smoothedEle": 23.17393558195188,
        "gradeBand": "descent"
      },
      {
        "lat": 22.77299,
        "lng": 121.143897,
        "ele": 22.75,
        "distanceKm": 2.7273701209152903,
        "gradePct": -0.42980178521044865,
        "smoothedEle": 22.755118107159603,
        "gradeBand": "descent"
      },
      {
        "lat": 22.773275,
        "lng": 121.143719,
        "ele": 23.5,
        "distanceKm": 2.763939895104761,
        "gradePct": -0.4791041806757561,
        "smoothedEle": 22.582610414903144,
        "gradeBand": "descent"
      },
      {
        "lat": 22.773677000000003,
        "lng": 121.14345466666667,
        "ele": 23,
        "distanceKm": 2.816214195159206,
        "gradePct": -0.42622150271326087,
        "smoothedEle": 22.526279144926228,
        "gradeBand": "descent"
      },
      {
        "lat": 22.774079,
        "lng": 121.14319033333334,
        "ele": 22.5,
        "distanceKm": 2.8684884538271787,
        "gradePct": -0.20151289719517587,
        "smoothedEle": 22.74083154532283,
        "gradeBand": "descent"
      },
      {
        "lat": 22.774481,
        "lng": 121.142926,
        "ele": 22,
        "distanceKm": 2.920762671108751,
        "gradePct": 0.14971618632579528,
        "smoothedEle": 23.098173140207116,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.774805,
        "lng": 121.142651,
        "ele": 22,
        "distanceKm": 2.966510822081861,
        "gradePct": 0.42647898215983526,
        "smoothedEle": 23.432797924496743,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.775133,
        "lng": 121.142335,
        "ele": 22.5,
        "distanceKm": 3.0152944174025844,
        "gradePct": 0.6298570826954742,
        "smoothedEle": 23.786984471347992,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.775453,
        "lng": 121.141934,
        "ele": 24,
        "distanceKm": 3.069666799545643,
        "gradePct": 0.7241471478951056,
        "smoothedEle": 24.19718090076306,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.775728051503553,
        "lng": 121.14152835731653,
        "ele": 25.063921105589106,
        "distanceKm": 3.1212905193253637,
        "gradePct": 0.76853788430351,
        "smoothedEle": 24.639109853832995,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.775974,
        "lng": 121.141101,
        "ele": 25.5,
        "distanceKm": 3.1729398895526146,
        "gradePct": 0.8170408824916989,
        "smoothedEle": 25.113557044684683,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.776171,
        "lng": 121.140742,
        "ele": 26.250000000000004,
        "distanceKm": 3.215771592808288,
        "gradePct": 0.8587185330757389,
        "smoothedEle": 25.50802144686355,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.776368,
        "lng": 121.140383,
        "ele": 27,
        "distanceKm": 3.25860325040352,
        "gradePct": 0.8779642100499326,
        "smoothedEle": 25.86964363155734,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.776581,
        "lng": 121.1399845,
        "ele": 27,
        "distanceKm": 3.3058278872422724,
        "gradePct": 0.8509636895905565,
        "smoothedEle": 26.208668143042594,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.776794,
        "lng": 121.139586,
        "ele": 27,
        "distanceKm": 3.3530524689083454,
        "gradePct": 0.7801059747470902,
        "smoothedEle": 26.491084659085438,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.777019653213085,
        "lng": 121.13917669471932,
        "ele": 26.794112031855025,
        "distanceKm": 3.401945514398865,
        "gradePct": 0.6995252795914814,
        "smoothedEle": 26.77973885467274,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.777245306426174,
        "lng": 121.13876738943866,
        "ele": 26.588224063710054,
        "distanceKm": 3.450838500329941,
        "gradePct": 0.6529604540077804,
        "smoothedEle": 27.110007751840236,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.77747095963926,
        "lng": 121.13835808415799,
        "ele": 26.382336095565076,
        "distanceKm": 3.499731426700636,
        "gradePct": 0.6413559340708298,
        "smoothedEle": 27.447613670238642,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.77769692229982,
        "lng": 121.1379489791125,
        "ele": 26.577952582861172,
        "distanceKm": 3.5486243490833838,
        "gradePct": 0.6434516285930533,
        "smoothedEle": 27.751506492202427,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.777923441724866,
        "lng": 121.13754023433437,
        "ele": 27.495964437145876,
        "distanceKm": 3.5975173946629133,
        "gradePct": 0.6397583537764658,
        "smoothedEle": 28.033112880224134,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.77814996114991,
        "lng": 121.13713148955624,
        "ele": 28.41397629143059,
        "distanceKm": 3.646410380615957,
        "gradePct": 0.6100614300802215,
        "smoothedEle": 28.300218955213655,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.778376480574956,
        "lng": 121.13672274477813,
        "ele": 29.331988145715293,
        "distanceKm": 3.695303306940731,
        "gradePct": 0.5740664653767945,
        "smoothedEle": 28.565170410338673,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.778603,
        "lng": 121.136314,
        "ele": 30.25,
        "distanceKm": 3.744196173639198,
        "gradePct": 0.5519919900623758,
        "smoothedEle": 28.827967250840235,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.778844,
        "lng": 121.1358656,
        "ele": 30,
        "distanceKm": 3.797407830431261,
        "gradePct": 0.5324887841464316,
        "smoothedEle": 29.097459397880524,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.779085,
        "lng": 121.1354172,
        "ele": 29.75,
        "distanceKm": 3.85061941707269,
        "gradePct": 0.4919439845473419,
        "smoothedEle": 29.306915752040965,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.779326,
        "lng": 121.1349688,
        "ele": 29.5,
        "distanceKm": 3.9038309335642727,
        "gradePct": 0.4045983402259289,
        "smoothedEle": 29.420202679598702,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.779567,
        "lng": 121.1345204,
        "ele": 29.25,
        "distanceKm": 3.957042379902422,
        "gradePct": 0.27214657854706714,
        "smoothedEle": 29.437320432671562,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.779808,
        "lng": 121.134072,
        "ele": 29,
        "distanceKm": 4.010253756087924,
        "gradePct": 0.11892537963146656,
        "smoothedEle": 29.385875474279967,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.780054,
        "lng": 121.133642,
        "ele": 29,
        "distanceKm": 4.062135065626378,
        "gradePct": 0.03804126082891554,
        "smoothedEle": 29.40751500484079,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.780285666666668,
        "lng": 121.13322766666667,
        "ele": 29.083333333333332,
        "distanceKm": 4.111813796799797,
        "gradePct": 0.05032712033962379,
        "smoothedEle": 29.523424951990748,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.780517333333332,
        "lng": 121.13281333333333,
        "ele": 29.166666666666668,
        "distanceKm": 4.161492466299942,
        "gradePct": 0.08931609878648665,
        "smoothedEle": 29.611650269998087,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.780749,
        "lng": 121.132399,
        "ele": 29.25,
        "distanceKm": 4.211171074124163,
        "gradePct": 0.15333667795113634,
        "smoothedEle": 29.692931440641686,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7810405,
        "lng": 121.1318835,
        "ele": 30.124999999999993,
        "distanceKm": 4.27316869058363,
        "gradePct": 0.3018476133282097,
        "smoothedEle": 30.03695378121073,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.781332,
        "lng": 121.131368,
        "ele": 31,
        "distanceKm": 4.3351662107835685,
        "gradePct": 0.4259507030954751,
        "smoothedEle": 30.416798365598307,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.781618499999997,
        "lng": 121.13101,
        "ele": 30.500000000000004,
        "distanceKm": 4.383766179374443,
        "gradePct": 0.5261955737314739,
        "smoothedEle": 30.700484336306125,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.781905,
        "lng": 121.130652,
        "ele": 30,
        "distanceKm": 4.432366089758227,
        "gradePct": 0.6201032036173538,
        "smoothedEle": 31.05074815780815,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7822025,
        "lng": 121.130343,
        "ele": 31.375000000000014,
        "distanceKm": 4.478168528218121,
        "gradePct": 0.6868886247614132,
        "smoothedEle": 31.44136388898585,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7825,
        "lng": 121.130034,
        "ele": 32.75,
        "distanceKm": 4.523970918896721,
        "gradePct": 0.7464328265855963,
        "smoothedEle": 31.841073033514874,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.782891,
        "lng": 121.129717,
        "ele": 31.5,
        "distanceKm": 4.57825204898085,
        "gradePct": 0.8310534245248864,
        "smoothedEle": 32.330404303786395,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.78326725,
        "lng": 121.1294265,
        "ele": 32.3125,
        "distanceKm": 4.6296067682947974,
        "gradePct": 0.8909379325458079,
        "smoothedEle": 32.81273735082772,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7836435,
        "lng": 121.129136,
        "ele": 33.125,
        "distanceKm": 4.680961439970599,
        "gradePct": 0.9244064553721244,
        "smoothedEle": 33.314550033327485,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.78401975,
        "lng": 121.12884550000001,
        "ele": 33.9375,
        "distanceKm": 4.732316064008764,
        "gradePct": 0.9122249629691704,
        "smoothedEle": 33.74075242597219,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.784396,
        "lng": 121.128555,
        "ele": 34.75,
        "distanceKm": 4.783670640409801,
        "gradePct": 0.8132374717442261,
        "smoothedEle": 34.00777166280185,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.784766,
        "lng": 121.128278,
        "ele": 35.5,
        "distanceKm": 4.833661638867213,
        "gradePct": 0.7323973547835394,
        "smoothedEle": 34.31715426832125,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.785109,
        "lng": 121.128107,
        "ele": 35.5,
        "distanceKm": 4.875637511947858,
        "gradePct": 0.6689161836526475,
        "smoothedEle": 34.60035958527153,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.785478,
        "lng": 121.128054,
        "ele": 35,
        "distanceKm": 4.917026688668309,
        "gradePct": 0.6232259168230949,
        "smoothedEle": 34.86031464696535,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.785929494470636,
        "lng": 121.12802041242851,
        "ele": 34.838521290902484,
        "distanceKm": 4.967348596185566,
        "gradePct": 0.6145625862528975,
        "smoothedEle": 35.152030011400456,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.786380988371473,
        "lng": 121.12798681575295,
        "ele": 34.84989636213142,
        "distanceKm": 5.017670503584328,
        "gradePct": 0.5928270616564855,
        "smoothedEle": 35.40384299282854,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.78683248158095,
        "lng": 121.12795320803119,
        "ele": 35.070999794785756,
        "distanceKm": 5.067992411027278,
        "gradePct": 0.524975460438124,
        "smoothedEle": 35.598730084576324,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.787283978162673,
        "lng": 121.12791965378577,
        "ele": 35.35866805191158,
        "distanceKm": 5.118314316741688,
        "gradePct": 0.45110922107885504,
        "smoothedEle": 35.76999745029724,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.787735489081335,
        "lng": 121.12788632689289,
        "ele": 35.9293340259558,
        "distanceKm": 5.168636224355762,
        "gradePct": 0.4361055234398488,
        "smoothedEle": 36.03068440483175,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.788187,
        "lng": 121.127853,
        "ele": 36.5,
        "distanceKm": 5.218958131202396,
        "gradePct": 0.4931602989894937,
        "smoothedEle": 36.39515032550203,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.788714,
        "lng": 121.127798,
        "ele": 36.75,
        "distanceKm": 5.277828567990719,
        "gradePct": 0.6386622572313806,
        "smoothedEle": 36.90953132588458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.789163968175405,
        "lng": 121.12774561133467,
        "ele": 37.002911502077986,
        "distanceKm": 5.3281502282533095,
        "gradePct": 0.7824392039042991,
        "smoothedEle": 37.385829685943605,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.78961481274118,
        "lng": 121.12770239428161,
        "ele": 37.66984133310488,
        "distanceKm": 5.378477312190376,
        "gradePct": 0.8889742273861493,
        "smoothedEle": 37.87990879811272,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.790065657306954,
        "lng": 121.12765917722857,
        "ele": 38.33677116413177,
        "distanceKm": 5.4288043948375275,
        "gradePct": 0.9442707805556116,
        "smoothedEle": 38.36972370861043,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.79051650187273,
        "lng": 121.12761596017552,
        "ele": 39.00370099515866,
        "distanceKm": 5.4791314761956595,
        "gradePct": 0.9624596311459532,
        "smoothedEle": 38.84678271390688,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.790967394685083,
        "lng": 121.1275733414986,
        "ele": 39.53002627518981,
        "distanceKm": 5.529458537926035,
        "gradePct": 0.9686066318196175,
        "smoothedEle": 39.335887096928055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.791418315748068,
        "lng": 121.12753107319888,
        "ele": 39.97402102015185,
        "distanceKm": 5.57978562265835,
        "gradePct": 0.980128693367397,
        "smoothedEle": 39.85289948749625,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.79186923681105,
        "lng": 121.12748880489916,
        "ele": 40.418015765113886,
        "distanceKm": 5.630112706156584,
        "gradePct": 0.9744515601027351,
        "smoothedEle": 40.33102853540496,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.792320157874034,
        "lng": 121.12744653659945,
        "ele": 40.862010510075926,
        "distanceKm": 5.68043978842138,
        "gradePct": 0.9256994023369094,
        "smoothedEle": 40.71089637261666,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.792771078937015,
        "lng": 121.12740426829973,
        "ele": 41.30600525503796,
        "distanceKm": 5.730766869452183,
        "gradePct": 0.8221074291859793,
        "smoothedEle": 40.993542503537356,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.793222,
        "lng": 121.127362,
        "ele": 41.75,
        "distanceKm": 5.781093949249635,
        "gradePct": 0.6756331524024469,
        "smoothedEle": 41.216595460463154,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.793588,
        "lng": 121.127233,
        "ele": 42.25,
        "distanceKm": 5.8238859159869625,
        "gradePct": 0.5481080699381161,
        "smoothedEle": 41.36808747704154,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.793628866078425,
        "lng": 121.12682909067162,
        "ele": 42.04849821760235,
        "distanceKm": 5.865539852733398,
        "gradePct": 0.42546895276001667,
        "smoothedEle": 41.44936985362253,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.793640933039214,
        "lng": 121.1264195453358,
        "ele": 41.77424910880117,
        "distanceKm": 5.9075443685498294,
        "gradePct": 0.2857143078928137,
        "smoothedEle": 41.43454928885093,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.793653,
        "lng": 121.12601,
        "ele": 41.5,
        "distanceKm": 5.949548880652473,
        "gradePct": 0.12174110803823258,
        "smoothedEle": 41.32026783946299,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.793676273789984,
        "lng": 121.12541707249324,
        "ele": 41.5,
        "distanceKm": 6.010385784724955,
        "gradePct": -0.09036943349535767,
        "smoothedEle": 41.139555478187816,
        "gradeBand": "descent"
      },
      {
        "lat": 22.793671,
        "lng": 121.124827,
        "ele": 41.5,
        "distanceKm": 6.07087778712506,
        "gradePct": -0.21303420868926873,
        "smoothedEle": 41.021418038688736,
        "gradeBand": "descent"
      },
      {
        "lat": 22.793226991353574,
        "lng": 121.12478510796659,
        "ele": 40.58366090481544,
        "distanceKm": 6.120435779919839,
        "gradePct": -0.22712414854244384,
        "smoothedEle": 40.94522739842396,
        "gradeBand": "descent"
      },
      {
        "lat": 22.792783,
        "lng": 121.124743,
        "ele": 39.5,
        "distanceKm": 6.169993781424412,
        "gradePct": -0.16071595275366932,
        "smoothedEle": 40.93810558695884,
        "gradeBand": "descent"
      },
      {
        "lat": 22.792333970861975,
        "lng": 121.12470364780066,
        "ele": 39.5154945333725,
        "distanceKm": 6.220086314260597,
        "gradePct": -0.058213254107929616,
        "smoothedEle": 41.00418438761963,
        "gradeBand": "descent"
      },
      {
        "lat": 22.791884949509104,
        "lng": 121.12466418359472,
        "ele": 40.68659314043605,
        "distanceKm": 6.270178911316284,
        "gradePct": 0.026353910225630252,
        "smoothedEle": 41.075490723837824,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.791435997215256,
        "lng": 121.1246237972216,
        "ele": 41.25,
        "distanceKm": 6.320271580081054,
        "gradePct": 0.0865802104195658,
        "smoothedEle": 41.118640260698726,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.790987,
        "lng": 121.124584,
        "ele": 41.5,
        "distanceKm": 6.3703642728890975,
        "gradePct": 0.1127775017521201,
        "smoothedEle": 41.16414931862785,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.79093214710524,
        "lng": 121.12508489140518,
        "ele": 42.10767618231251,
        "distanceKm": 6.422073363597432,
        "gradePct": 0.07749321417824001,
        "smoothedEle": 41.16199936183763,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.790877874652335,
        "lng": 121.12558585652084,
        "ele": 42.33084050182504,
        "distanceKm": 6.473782405993274,
        "gradePct": 0.02174237693024137,
        "smoothedEle": 41.122079507294394,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.79082443732617,
        "lng": 121.12608692826042,
        "ele": 42.04042025091252,
        "distanceKm": 6.525491571090443,
        "gradePct": -0.10590163264505027,
        "smoothedEle": 40.911579341246295,
        "gradeBand": "descent"
      },
      {
        "lat": 22.790771,
        "lng": 121.126588,
        "ele": 41.75,
        "distanceKm": 6.577200756183736,
        "gradePct": -0.32245516500564236,
        "smoothedEle": 40.518954741814326,
        "gradeBand": "descent"
      },
      {
        "lat": 22.790704,
        "lng": 121.127288,
        "ele": 40,
        "distanceKm": 6.649345980808208,
        "gradePct": -0.6785621925578974,
        "smoothedEle": 39.783820266334175,
        "gradeBand": "descent"
      },
      {
        "lat": 22.79026975,
        "lng": 121.12733349999999,
        "ele": 39.12499999999999,
        "distanceKm": 6.697857206183645,
        "gradePct": -0.9077067966936411,
        "smoothedEle": 39.208661054843446,
        "gradeBand": "descent"
      },
      {
        "lat": 22.7898355,
        "lng": 121.127379,
        "ele": 38.24999999999999,
        "distanceKm": 6.746368432987393,
        "gradePct": -1.0741227621746665,
        "smoothedEle": 38.60481711382191,
        "gradeBand": "descent"
      },
      {
        "lat": 22.78940125,
        "lng": 121.1274245,
        "ele": 37.37500000000001,
        "distanceKm": 6.794879661218756,
        "gradePct": -1.159328418881709,
        "smoothedEle": 38.02015607695658,
        "gradeBand": "descent"
      },
      {
        "lat": 22.788967,
        "lng": 121.12747,
        "ele": 36.5,
        "distanceKm": 6.8433908908786405,
        "gradePct": -1.198389568446248,
        "smoothedEle": 37.44772140224694,
        "gradeBand": "descent"
      },
      {
        "lat": 22.788644,
        "lng": 121.12751,
        "ele": 36.25,
        "distanceKm": 6.879540230864884,
        "gradePct": -1.1777499954241817,
        "smoothedEle": 37.07033094580492,
        "gradeBand": "descent"
      },
      {
        "lat": 22.788154666666667,
        "lng": 121.12755833333334,
        "ele": 36.166666666666664,
        "distanceKm": 6.934176830569479,
        "gradePct": -1.0802256506309886,
        "smoothedEle": 36.5961208955881,
        "gradeBand": "descent"
      },
      {
        "lat": 22.787665333333333,
        "lng": 121.12760666666667,
        "ele": 36.083333333333336,
        "distanceKm": 6.98881343188623,
        "gradePct": -0.9403177950623337,
        "smoothedEle": 36.212631147203204,
        "gradeBand": "descent"
      },
      {
        "lat": 22.787176,
        "lng": 121.127655,
        "ele": 36,
        "distanceKm": 7.0434500348153755,
        "gradePct": -0.7633728815274943,
        "smoothedEle": 35.92035819064964,
        "gradeBand": "descent"
      },
      {
        "lat": 22.786668,
        "lng": 121.127701,
        "ele": 35.75,
        "distanceKm": 7.100133638496902,
        "gradePct": -0.5996497330405143,
        "smoothedEle": 35.692294132961564,
        "gradeBand": "descent"
      },
      {
        "lat": 22.78616,
        "lng": 121.127747,
        "ele": 35.5,
        "distanceKm": 7.15681724363969,
        "gradePct": -0.4978190394984164,
        "smoothedEle": 35.441571645281584,
        "gradeBand": "descent"
      },
      {
        "lat": 22.78574,
        "lng": 121.1277795,
        "ele": 35.375,
        "distanceKm": 7.203637875465861,
        "gradePct": -0.44081175097497965,
        "smoothedEle": 35.251705790416125,
        "gradeBand": "descent"
      },
      {
        "lat": 22.78532,
        "lng": 121.127812,
        "ele": 35.25,
        "distanceKm": 7.250458508022508,
        "gradePct": -0.3741351769092557,
        "smoothedEle": 35.143889544309054,
        "gradeBand": "descent"
      },
      {
        "lat": 22.784731,
        "lng": 121.128004,
        "ele": 35,
        "distanceKm": 7.318846291707369,
        "gradePct": -0.24668933606865176,
        "smoothedEle": 35.11614579661179,
        "gradeBand": "descent"
      },
      {
        "lat": 22.78436563026203,
        "lng": 121.1278384684737,
        "ele": 34.295570614094515,
        "distanceKm": 7.362875372700454,
        "gradePct": -0.14753855654130976,
        "smoothedEle": 35.12192775878852,
        "gradeBand": "descent"
      },
      {
        "lat": 22.783967,
        "lng": 121.127773,
        "ele": 33.75,
        "distanceKm": 7.407706357143905,
        "gradePct": -0.07538536364127063,
        "smoothedEle": 35.091566363952694,
        "gradeBand": "descent"
      },
      {
        "lat": 22.783580666666666,
        "lng": 121.127722,
        "ele": 34.50000000000001,
        "distanceKm": 7.450981731378111,
        "gradePct": -0.09897160412771547,
        "smoothedEle": 34.94573407333673,
        "gradeBand": "descent"
      },
      {
        "lat": 22.783194333333334,
        "lng": 121.12767099999999,
        "ele": 35.24999999999999,
        "distanceKm": 7.494257107401149,
        "gradePct": -0.21798553137213597,
        "smoothedEle": 34.69015014305195,
        "gradeBand": "descent"
      },
      {
        "lat": 22.782808,
        "lng": 121.12762,
        "ele": 36,
        "distanceKm": 7.5375324852134264,
        "gradePct": -0.35564977243891926,
        "smoothedEle": 34.407300149513375,
        "gradeBand": "descent"
      },
      {
        "lat": 22.782368319576776,
        "lng": 121.12755955875583,
        "ele": 35.85185969567876,
        "distanceKm": 7.586813891996444,
        "gradePct": -0.48213984941483856,
        "smoothedEle": 34.1414359056831,
        "gradeBand": "descent"
      },
      {
        "lat": 22.78192862112101,
        "lng": 121.12749927259682,
        "ele": 35.24837312929887,
        "distanceKm": 7.6360952939955995,
        "gradePct": -0.4955642275044912,
        "smoothedEle": 34.004770944474984,
        "gradeBand": "descent"
      },
      {
        "lat": 22.781488882977158,
        "lng": 121.12743932776708,
        "ele": 33.64270804707337,
        "distanceKm": 7.68537670076456,
        "gradePct": -0.38747992249768226,
        "smoothedEle": 33.967637889257134,
        "gradeBand": "descent"
      },
      {
        "lat": 22.781049144833307,
        "lng": 121.12737938293735,
        "ele": 32.0370429648479,
        "distanceKm": 7.734658110003212,
        "gradePct": -0.29584020840278286,
        "smoothedEle": 33.834406790169524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.780609141683406,
        "lng": 121.12732179204774,
        "ele": 31.927136090304455,
        "distanceKm": 7.7839392640429494,
        "gradePct": -0.2954116967326425,
        "smoothedEle": 33.56612060821261,
        "gradeBand": "descent"
      },
      {
        "lat": 22.780169405835156,
        "lng": 121.12726182806843,
        "ele": 32.58248012644199,
        "distanceKm": 7.833220669822006,
        "gradePct": -0.3942177928745632,
        "smoothedEle": 33.22430713682541,
        "gradeBand": "descent"
      },
      {
        "lat": 22.779729669986907,
        "lng": 121.12720186408913,
        "ele": 33.23782416257952,
        "distanceKm": 7.8825020780726005,
        "gradePct": -0.5205245576867088,
        "smoothedEle": 32.928754773804364,
        "gradeBand": "descent"
      },
      {
        "lat": 22.77928995143012,
        "lng": 121.1271417519214,
        "ele": 33.63446443077827,
        "distanceKm": 7.931783478672386,
        "gradePct": -0.5460398776069648,
        "smoothedEle": 32.750098531298626,
        "gradeBand": "descent"
      },
      {
        "lat": 22.778850294732514,
        "lng": 121.12708110961827,
        "ele": 33.10560713614364,
        "distanceKm": 7.981064884550442,
        "gradePct": -0.43148238319881893,
        "smoothedEle": 32.71880393923814,
        "gradeBand": "descent"
      },
      {
        "lat": 22.778410638034906,
        "lng": 121.12702046731516,
        "ele": 32.576749841509006,
        "distanceKm": 8.030346292956093,
        "gradePct": -0.2578707259545572,
        "smoothedEle": 32.72850222526211,
        "gradeBand": "descent"
      },
      {
        "lat": 22.777970891576334,
        "lng": 121.12696060397646,
        "ele": 32.388247058934724,
        "distanceKm": 8.079627595653035,
        "gradePct": -0.16105607746771952,
        "smoothedEle": 32.6238815757438,
        "gradeBand": "descent"
      },
      {
        "lat": 22.777531,
        "lng": 121.126902,
        "ele": 32.75,
        "distanceKm": 8.12890900375079,
        "gradePct": -0.21081552920206173,
        "smoothedEle": 32.33888809573434,
        "gradeBand": "descent"
      },
      {
        "lat": 22.77705574401677,
        "lng": 121.12681613442321,
        "ele": 32.75,
        "distanceKm": 8.182483349382629,
        "gradePct": -0.3969012483225352,
        "smoothedEle": 31.92528058797675,
        "gradeBand": "descent"
      },
      {
        "lat": 22.776581,
        "lng": 121.126727,
        "ele": 32.5,
        "distanceKm": 8.236057693330912,
        "gradePct": -0.6147712798153422,
        "smoothedEle": 31.48683477476669,
        "gradeBand": "descent"
      },
      {
        "lat": 22.776195,
        "lng": 121.126517,
        "ele": 31.5,
        "distanceKm": 8.284076275988602,
        "gradePct": -0.7257968271207876,
        "smoothedEle": 31.146561284638118,
        "gradeBand": "descent"
      },
      {
        "lat": 22.775755,
        "lng": 121.126059,
        "ele": 30,
        "distanceKm": 8.351889496859844,
        "gradePct": -0.7242121541249994,
        "smoothedEle": 30.713048564399887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.775453392522575,
        "lng": 121.12575670705104,
        "ele": 29.657264230201523,
        "distanceKm": 8.397554454303828,
        "gradePct": -0.7034127933944017,
        "smoothedEle": 30.395114940140665,
        "gradeBand": "descent"
      },
      {
        "lat": 22.775153,
        "lng": 121.125453,
        "ele": 29.25,
        "distanceKm": 8.443219068341582,
        "gradePct": -0.6803122847326442,
        "smoothedEle": 30.07546264187639,
        "gradeBand": "descent"
      },
      {
        "lat": 22.774807499999998,
        "lng": 121.12510866666666,
        "ele": 29.25,
        "distanceKm": 8.495394081610318,
        "gradePct": -0.6729550474662787,
        "smoothedEle": 29.72829932912201,
        "gradeBand": "descent"
      },
      {
        "lat": 22.774462,
        "lng": 121.12476433333333,
        "ele": 29.25,
        "distanceKm": 8.547569155353386,
        "gradePct": -0.6382508603093756,
        "smoothedEle": 29.464165691179325,
        "gradeBand": "descent"
      },
      {
        "lat": 22.774116499999998,
        "lng": 121.12441999999999,
        "ele": 29.25,
        "distanceKm": 8.599744289571571,
        "gradePct": -0.5275621483134573,
        "smoothedEle": 29.324661796639546,
        "gradeBand": "descent"
      },
      {
        "lat": 22.773771,
        "lng": 121.12407566666666,
        "ele": 29.25,
        "distanceKm": 8.651919484261533,
        "gradePct": -0.3762647449958769,
        "smoothedEle": 29.265042122752472,
        "gradeBand": "descent"
      },
      {
        "lat": 22.773425500000002,
        "lng": 121.12373133333332,
        "ele": 29.25,
        "distanceKm": 8.704094739423764,
        "gradePct": -0.21712634733411107,
        "smoothedEle": 29.250000000000004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.77308,
        "lng": 121.123387,
        "ele": 29.25,
        "distanceKm": 8.756270055057769,
        "gradePct": -0.07223569052664684,
        "smoothedEle": 29.296430174576603,
        "gradeBand": "descent"
      },
      {
        "lat": 22.772675,
        "lng": 121.1229915,
        "ele": 29.25,
        "distanceKm": 8.816869717204682,
        "gradePct": 0.1118464856400671,
        "smoothedEle": 29.528785844090457,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.77227,
        "lng": 121.122596,
        "ele": 29.25,
        "distanceKm": 8.877469459866374,
        "gradePct": 0.32536079417474656,
        "smoothedEle": 29.90839765475637,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.771847,
        "lng": 121.122235,
        "ele": 29.25,
        "distanceKm": 8.937321475720298,
        "gradePct": 0.50893384599331,
        "smoothedEle": 30.297435757806873,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.771610906814978,
        "lng": 121.12259216257549,
        "ele": 29.721782730991023,
        "distanceKm": 8.982378650892377,
        "gradePct": 0.5521637374878579,
        "smoothedEle": 30.50086514273454,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.771394054249697,
        "lng": 121.12296555414756,
        "ele": 30.757702628841553,
        "distanceKm": 9.027622774890597,
        "gradePct": 0.5198726439147913,
        "smoothedEle": 30.63589095093996,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.771173,
        "lng": 121.123336,
        "ele": 32.25,
        "distanceKm": 9.072863816874069,
        "gradePct": 0.4417358611015592,
        "smoothedEle": 30.76301848752007,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.770941249933415,
        "lng": 121.12369768760098,
        "ele": 32.5,
        "distanceKm": 9.118021684075648,
        "gradePct": 0.36325248850407504,
        "smoothedEle": 30.898492089124804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.770705,
        "lng": 121.124056,
        "ele": 32.5,
        "distanceKm": 9.163185057216815,
        "gradePct": 0.24432535086664495,
        "smoothedEle": 30.902858371134023,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.770428,
        "lng": 121.124427,
        "ele": 31.5,
        "distanceKm": 9.212129990877086,
        "gradePct": 0.03782883709752141,
        "smoothedEle": 30.665312219212797,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.769983,
        "lng": 121.124798,
        "ele": 30.5,
        "distanceKm": 9.274542809117545,
        "gradePct": -0.40498326462395223,
        "smoothedEle": 29.9580889350026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.769677,
        "lng": 121.125013,
        "ele": 30.75,
        "distanceKm": 9.315085098144891,
        "gradePct": -0.7617152660680153,
        "smoothedEle": 29.36625179919651,
        "gradeBand": "descent"
      },
      {
        "lat": 22.769351,
        "lng": 121.125267,
        "ele": 30.75,
        "distanceKm": 9.359719675047314,
        "gradePct": -1.126020412310512,
        "smoothedEle": 28.650482522028135,
        "gradeBand": "descent"
      },
      {
        "lat": 22.768932,
        "lng": 121.125624,
        "ele": 28,
        "distanceKm": 9.41896904396294,
        "gradePct": -1.4308383848826318,
        "smoothedEle": 27.726139548435164,
        "gradeBand": "descent"
      },
      {
        "lat": 22.768937,
        "lng": 121.126065,
        "ele": 25.25,
        "distanceKm": 9.464188189842517,
        "gradePct": -1.4828610281218708,
        "smoothedEle": 27.109698991886937,
        "gradeBand": "descent"
      },
      {
        "lat": 22.768734,
        "lng": 121.126482,
        "ele": 23.75,
        "distanceKm": 9.512536051087706,
        "gradePct": -1.4247507265565866,
        "smoothedEle": 26.553961385359933,
        "gradeBand": "descent"
      },
      {
        "lat": 22.76852925,
        "lng": 121.12691575,
        "ele": 24.124999999999996,
        "distanceKm": 9.562497505240394,
        "gradePct": -1.2764917547275136,
        "smoothedEle": 26.054162385233425,
        "gradeBand": "descent"
      },
      {
        "lat": 22.7683245,
        "lng": 121.1273495,
        "ele": 24.499999999999993,
        "distanceKm": 9.612459018768313,
        "gradePct": -1.1365772474757585,
        "smoothedEle": 25.55454724995424,
        "gradeBand": "descent"
      },
      {
        "lat": 22.768119749999997,
        "lng": 121.12778325000001,
        "ele": 24.875000000000004,
        "distanceKm": 9.662420591672092,
        "gradePct": -0.9744450364666316,
        "smoothedEle": 25.184905331628784,
        "gradeBand": "descent"
      },
      {
        "lat": 22.767915,
        "lng": 121.128217,
        "ele": 25.25,
        "distanceKm": 9.71238222394847,
        "gradePct": -0.7281254600246719,
        "smoothedEle": 25.099478641274853,
        "gradeBand": "descent"
      },
      {
        "lat": 22.767682,
        "lng": 121.128739,
        "ele": 25.5,
        "distanceKm": 9.771844450798644,
        "gradePct": -0.4021391058641313,
        "smoothedEle": 25.156414717922654,
        "gradeBand": "descent"
      },
      {
        "lat": 22.767485,
        "lng": 121.129141,
        "ele": 25.75,
        "distanceKm": 9.81852129086228,
        "gradePct": -0.1609284713501348,
        "smoothedEle": 25.18783843898831,
        "gradeBand": "descent"
      },
      {
        "lat": 22.767249,
        "lng": 121.129638,
        "ele": 25.75,
        "distanceKm": 9.87583936503818,
        "gradePct": 0.04220290292724564,
        "smoothedEle": 25.246367103330563,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.766992,
        "lng": 121.130163,
        "ele": 26,
        "distanceKm": 9.936783683129876,
        "gradePct": 0.052843110996226815,
        "smoothedEle": 25.22852966852042,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.766737,
        "lng": 121.130587,
        "ele": 25,
        "distanceKm": 9.988686728405158,
        "gradePct": -0.08353959782586204,
        "smoothedEle": 25.00067405831784,
        "gradeBand": "descent"
      },
      {
        "lat": 22.766473,
        "lng": 121.130945,
        "ele": 24.25,
        "distanceKm": 10.03568782043773,
        "gradePct": -0.18523549667903327,
        "smoothedEle": 24.834896542025906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.766196,
        "lng": 121.131325,
        "ele": 24.75000000000001,
        "distanceKm": 10.085354230235442,
        "gradePct": -0.25181196346645596,
        "smoothedEle": 24.739958326341114,
        "gradeBand": "descent"
      },
      {
        "lat": 22.765919,
        "lng": 121.131705,
        "ele": 25.25,
        "distanceKm": 10.135020702045425,
        "gradePct": -0.2978414763450658,
        "smoothedEle": 24.63336271241783,
        "gradeBand": "descent"
      },
      {
        "lat": 22.765755,
        "lng": 121.132114,
        "ele": 24,
        "distanceKm": 10.180749861401983,
        "gradePct": -0.27497433886177725,
        "smoothedEle": 24.485568416576346,
        "gradeBand": "descent"
      },
      {
        "lat": 22.765781,
        "lng": 121.132474,
        "ele": 22.75,
        "distanceKm": 10.21777456298859,
        "gradePct": -0.27754885950025626,
        "smoothedEle": 24.3429806598763,
        "gradeBand": "descent"
      },
      {
        "lat": 22.765950908485863,
        "lng": 121.13295203834447,
        "ele": 23.84265907306675,
        "distanceKm": 10.270304112120998,
        "gradePct": -0.2838860510149256,
        "smoothedEle": 24.20095478973506,
        "gradeBand": "descent"
      },
      {
        "lat": 22.766121,
        "lng": 121.13343,
        "ele": 25,
        "distanceKm": 10.322833591771905,
        "gradePct": -0.30516048616240465,
        "smoothedEle": 24.049198067575407,
        "gradeBand": "descent"
      },
      {
        "lat": 22.76577096966813,
        "lng": 121.13377036379654,
        "ele": 24.554830609903807,
        "distanceKm": 10.375109624702379,
        "gradePct": -0.358593270502705,
        "smoothedEle": 23.78661083108043,
        "gradeBand": "descent"
      },
      {
        "lat": 22.76542093933626,
        "lng": 121.13411072759308,
        "ele": 24.10966121980761,
        "distanceKm": 10.427385717361807,
        "gradePct": -0.31923051170294886,
        "smoothedEle": 23.678533642197404,
        "gradeBand": "descent"
      },
      {
        "lat": 22.76507090900439,
        "lng": 121.13445109138962,
        "ele": 23.6644918297114,
        "distanceKm": 10.479661869749405,
        "gradePct": -0.2048755530789535,
        "smoothedEle": 23.764169290053953,
        "gradeBand": "descent"
      },
      {
        "lat": 22.764720888449908,
        "lng": 121.13479146685624,
        "ele": 23.185530614720165,
        "distanceKm": 10.531938071233146,
        "gradePct": -0.07051341372769951,
        "smoothedEle": 23.862438617205942,
        "gradeBand": "descent"
      },
      {
        "lat": 22.764371,
        "lng": 121.135132,
        "ele": 22.25,
        "distanceKm": 10.584214193756718,
        "gradePct": 0.002590179675678437,
        "smoothedEle": 23.772968126592737,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.763893,
        "lng": 121.135615,
        "ele": 23.75,
        "distanceKm": 10.656861664501818,
        "gradePct": -0.07779030715052954,
        "smoothedEle": 23.571238751199104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.7635525,
        "lng": 121.1359365,
        "ele": 24.125,
        "distanceKm": 10.70706319455685,
        "gradePct": -0.19103106893575084,
        "smoothedEle": 23.433616437009476,
        "gradeBand": "descent"
      },
      {
        "lat": 22.763212,
        "lng": 121.136258,
        "ele": 24.5,
        "distanceKm": 10.75726477859081,
        "gradePct": -0.2711520570454527,
        "smoothedEle": 23.276787888570595,
        "gradeBand": "descent"
      },
      {
        "lat": 22.762815,
        "lng": 121.136642,
        "ele": 23.75,
        "distanceKm": 10.816416981303126,
        "gradePct": -0.28049103091618577,
        "smoothedEle": 23.122564531552907,
        "gradeBand": "descent"
      },
      {
        "lat": 22.762482,
        "lng": 121.136958,
        "ele": 23.25,
        "distanceKm": 10.865619550543475,
        "gradePct": -0.22252261262056808,
        "smoothedEle": 23.102184685129004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.762229,
        "lng": 121.137225,
        "ele": 23,
        "distanceKm": 10.904874105939482,
        "gradePct": -0.21379402794386668,
        "smoothedEle": 23.01202954166721,
        "gradeBand": "descent"
      },
      {
        "lat": 22.761919,
        "lng": 121.137517,
        "ele": 22.5,
        "distanceKm": 10.950531887163152,
        "gradePct": -0.22933870645719606,
        "smoothedEle": 22.839143867524516,
        "gradeBand": "descent"
      },
      {
        "lat": 22.761528,
        "lng": 121.137897,
        "ele": 21.75,
        "distanceKm": 11.008913600577387,
        "gradePct": -0.3194276449495963,
        "smoothedEle": 22.503272275850993,
        "gradeBand": "descent"
      },
      {
        "lat": 22.761101,
        "lng": 121.138319,
        "ele": 21.75,
        "distanceKm": 11.07315282549227,
        "gradePct": -0.47547015165085676,
        "smoothedEle": 22.1339428616115,
        "gradeBand": "descent"
      },
      {
        "lat": 22.760781,
        "lng": 121.138611,
        "ele": 22.5,
        "distanceKm": 11.119655978506087,
        "gradePct": -0.5246219719365489,
        "smoothedEle": 21.906813232618298,
        "gradeBand": "descent"
      },
      {
        "lat": 22.760494,
        "lng": 121.138897,
        "ele": 22.25,
        "distanceKm": 11.162996670456275,
        "gradePct": -0.5208892944383852,
        "smoothedEle": 21.72565503994985,
        "gradeBand": "descent"
      },
      {
        "lat": 22.760198,
        "lng": 121.139207,
        "ele": 21.5,
        "distanceKm": 11.208753454208262,
        "gradePct": -0.465257619843653,
        "smoothedEle": 21.573678362598848,
        "gradeBand": "descent"
      },
      {
        "lat": 22.759895,
        "lng": 121.13949033333333,
        "ele": 21.333333333333332,
        "distanceKm": 11.253241432469762,
        "gradePct": -0.38646330638375614,
        "smoothedEle": 21.47549246071359,
        "gradeBand": "descent"
      },
      {
        "lat": 22.759591999999998,
        "lng": 121.13977366666667,
        "ele": 21.166666666666668,
        "distanceKm": 11.297729452824848,
        "gradePct": -0.2961278990569191,
        "smoothedEle": 21.421650466273938,
        "gradeBand": "descent"
      },
      {
        "lat": 22.759289,
        "lng": 121.140057,
        "ele": 21,
        "distanceKm": 11.342217515270542,
        "gradePct": -0.2316570723431352,
        "smoothedEle": 21.34919493541021,
        "gradeBand": "descent"
      },
      {
        "lat": 22.758924,
        "lng": 121.140558,
        "ele": 21,
        "distanceKm": 11.4076869183574,
        "gradePct": -0.25000654061439054,
        "smoothedEle": 21.077207675778034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.758710999999998,
        "lng": 121.1408555,
        "ele": 21,
        "distanceKm": 11.446306977762589,
        "gradePct": -0.27420986647810885,
        "smoothedEle": 20.942377214859576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.758498,
        "lng": 121.141153,
        "ele": 21,
        "distanceKm": 11.48492707474528,
        "gradePct": -0.2756938518337463,
        "smoothedEle": 20.885756946520964,
        "gradeBand": "descent"
      },
      {
        "lat": 22.758213154559055,
        "lng": 121.14157205833041,
        "ele": 21.178474587058368,
        "distanceKm": 11.538308461149468,
        "gradePct": -0.2929635832364436,
        "smoothedEle": 20.769634254145874,
        "gradeBand": "descent"
      },
      {
        "lat": 22.75792776067371,
        "lng": 121.14199067638795,
        "ele": 20.781621098763708,
        "distanceKm": 11.5916898188516,
        "gradePct": -0.27251314070698485,
        "smoothedEle": 20.598640030788065,
        "gradeBand": "descent"
      },
      {
        "lat": 22.757642,
        "lng": 121.142409,
        "ele": 20,
        "distanceKm": 11.645071241316558,
        "gradePct": -0.28691979945097146,
        "smoothedEle": 20.372851822542458,
        "gradeBand": "descent"
      },
      {
        "lat": 22.757246,
        "lng": 121.142957,
        "ele": 20.75,
        "distanceKm": 11.716460136529404,
        "gradePct": -0.410017852643907,
        "smoothedEle": 19.997126094500217,
        "gradeBand": "descent"
      },
      {
        "lat": 22.75694533333333,
        "lng": 121.14327833333333,
        "ele": 20.166666666666675,
        "distanceKm": 11.763400413676752,
        "gradePct": -0.5034683564613083,
        "smoothedEle": 19.682321561300167,
        "gradeBand": "descent"
      },
      {
        "lat": 22.756644666666666,
        "lng": 121.14359966666667,
        "ele": 19.583333333333325,
        "distanceKm": 11.810340741736233,
        "gradePct": -0.6003575378907658,
        "smoothedEle": 19.31903686499708,
        "gradeBand": "descent"
      },
      {
        "lat": 22.756344,
        "lng": 121.143921,
        "ele": 19,
        "distanceKm": 11.857281120705784,
        "gradePct": -0.6522243589046243,
        "smoothedEle": 19.004141488004908,
        "gradeBand": "descent"
      },
      {
        "lat": 22.7560675,
        "lng": 121.14421250000001,
        "ele": 18.625,
        "distanceKm": 11.900161312898602,
        "gradePct": -0.6622872203902391,
        "smoothedEle": 18.75833372608067,
        "gradeBand": "descent"
      },
      {
        "lat": 22.755791,
        "lng": 121.144504,
        "ele": 18.25,
        "distanceKm": 11.943041547266771,
        "gradePct": -0.6808287809421614,
        "smoothedEle": 18.457200548114905,
        "gradeBand": "descent"
      },
      {
        "lat": 22.7555215,
        "lng": 121.144775,
        "ele": 17.75,
        "distanceKm": 11.983909833899672,
        "gradePct": -0.7705623023816585,
        "smoothedEle": 17.982468656053005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.755252,
        "lng": 121.145046,
        "ele": 17.25,
        "distanceKm": 12.02477815781094,
        "gradePct": -0.9162596193612572,
        "smoothedEle": 17.389665498587508,
        "gradeBand": "descent"
      },
      {
        "lat": 22.754926,
        "lng": 121.145368,
        "ele": 17.5,
        "distanceKm": 12.073811023755027,
        "gradePct": -1.0654336890994947,
        "smoothedEle": 16.778517573848983,
        "gradeBand": "descent"
      },
      {
        "lat": 22.754656,
        "lng": 121.1456545,
        "ele": 17.374999999999996,
        "distanceKm": 12.11581603550305,
        "gradePct": -1.148354133033028,
        "smoothedEle": 16.351687712763187,
        "gradeBand": "descent"
      },
      {
        "lat": 22.754386,
        "lng": 121.145941,
        "ele": 17.25,
        "distanceKm": 12.15782108786086,
        "gradePct": -1.1488454196795677,
        "smoothedEle": 15.987828440757884,
        "gradeBand": "descent"
      },
      {
        "lat": 22.754093331705533,
        "lng": 121.14629033447329,
        "ele": 15.123474858602034,
        "distanceKm": 12.206217545258822,
        "gradePct": -1.0411434935756392,
        "smoothedEle": 15.576603883861054,
        "gradeBand": "descent"
      },
      {
        "lat": 22.753801,
        "lng": 121.14664,
        "ele": 13,
        "distanceKm": 12.254614044697242,
        "gradePct": -0.9154482297992225,
        "smoothedEle": 15.186893155289155,
        "gradeBand": "descent"
      },
      {
        "lat": 22.7535088005947,
        "lng": 121.14698880630117,
        "ele": 13.539113293906812,
        "distanceKm": 12.302935469601481,
        "gradePct": -0.8304119195112893,
        "smoothedEle": 14.821748497400591,
        "gradeBand": "descent"
      },
      {
        "lat": 22.753216685623094,
        "lng": 121.14733769548538,
        "ele": 14.102208639869758,
        "distanceKm": 12.351256930795948,
        "gradePct": -0.8010355046911093,
        "smoothedEle": 14.44261795830995,
        "gradeBand": "descent"
      },
      {
        "lat": 22.752925,
        "lng": 121.147687,
        "ele": 14.5,
        "distanceKm": 12.399577930528453,
        "gradePct": -0.7497813559563333,
        "smoothedEle": 14.133457958884044,
        "gradeBand": "descent"
      },
      {
        "lat": 22.75261870349708,
        "lng": 121.14739186049233,
        "ele": 13.94008346538711,
        "distanceKm": 12.445140156825557,
        "gradePct": -0.6966036479665545,
        "smoothedEle": 13.869973933653245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.752313,
        "lng": 121.147096,
        "ele": 13.75,
        "distanceKm": 12.490702353210995,
        "gradePct": -0.5676204681093531,
        "smoothedEle": 13.778948069883088,
        "gradeBand": "descent"
      },
      {
        "lat": 22.75204072320001,
        "lng": 121.14743140420795,
        "ele": 13.431174707273842,
        "distanceKm": 12.536522867720258,
        "gradePct": -0.34351418446911575,
        "smoothedEle": 13.871193156374808,
        "gradeBand": "descent"
      },
      {
        "lat": 22.75176904083046,
        "lng": 121.14776737297909,
        "ele": 13.580393134290967,
        "distanceKm": 12.58234329803267,
        "gradePct": -0.1655419510194799,
        "smoothedEle": 13.912642035612036,
        "gradeBand": "descent"
      },
      {
        "lat": 22.751497,
        "lng": 121.148103,
        "ele": 14.25,
        "distanceKm": 12.62816374123646,
        "gradePct": -0.04730978960739857,
        "smoothedEle": 13.873528097842433,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 12.62816374123646,
      "elevationGainM": 30.37643102795309,
      "elevationLossM": 30.471011055912438,
      "minimumElevationM": 13,
      "maximumElevationM": 42.33084050182504,
      "maximumSustainedGradePct": 1.050151292561875
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 211,
        "startDistanceKm": 0,
        "endDistanceKm": 10.531938071233146,
        "distanceKm": 10.531938071233146,
        "gainM": 32.78674574014162,
        "averageGradePct": 0.3113078098103813,
        "maximumGradePct": 1.050151292561875
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
