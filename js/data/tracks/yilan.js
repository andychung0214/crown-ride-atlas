"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("yilan", {
  "yilan-beiyi": {
    "routeId": "yilan-beiyi",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T16:49:38.201Z",
      "reviewStatus": "approved",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "台9北宜公路為連續長坡與彎道路段，預設100公尺分析為爬升1140公尺、最大持續坡度24.3%，短距離尖峰明顯偏高。比較500/200、750/300、1000/500公尺後，爬升依序為521、481、454公尺，最大持續坡度依序為8.0%、5.9%、5.3%；實騎資料顯示完整新店至宜蘭71公里爬升1063公尺，本路線僅取縣界至坪林36.8公里往返，500/200的521公尺符合其局部尺度並保留山路起伏，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://www.ptt.cc/bbs/bicycle/M.1657784486.A.C32.html",
        "referenceLabel": "北宜公路新店至宜蘭71公里、爬升1063公尺實騎資料"
      },
      "reviewedAt": "2026-07-29T17:10:00.000Z",
      "reviewerNote": "研究版曾因縣界公園、石碇與坪林景點近似座標偏離台9，導入1450公尺track、7980公尺path、61公尺footway與57公尺service，已全部棄用。核准版僅使用目前OSM ref=9、highway=primary主線節點，完整原路往返；raw messages的motorway、trunk、tunnel、service、track、footway、pedestrian、path、steps、private、access禁制與bicycle=no全為0。live OSM `/api/0.6/map?bbox=`於10%、30%、50%、70%、90%取樣5/5點皆在0.1公尺內貼合台9 primary，禁止道路為0。最終500/200公尺bundle為36.7公里、爬升519公尺、最大7.8%。"
    },
    "waypoints": [
      {
        "name": "北宜公路縣界台9主線",
        "lat": 24.8651203,
        "lng": 121.7756527,
        "role": "start"
      },
      {
        "name": "坪林橋台9北宜公路主線",
        "lat": 24.9340776,
        "lng": 121.7109625,
        "role": "via"
      },
      {
        "name": "北宜公路縣界台9主線",
        "lat": 24.8651203,
        "lng": 121.7756527,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.86512,
        "lng": 121.775653,
        "ele": 531,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 546.9641848639811,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.865194,
        "lng": 121.775245,
        "ele": 542.5,
        "distanceKm": 0.041976402630183686,
        "gradePct": -0.4317104859272964,
        "smoothedEle": 546.7829683322116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.865506,
        "lng": 121.774832,
        "ele": 552.25,
        "distanceKm": 0.09619524045695702,
        "gradePct": -0.8851556138335505,
        "smoothedEle": 546.1127072928357,
        "gradeBand": "descent"
      },
      {
        "lat": 24.865797,
        "lng": 121.774489,
        "ele": 550,
        "distanceKm": 0.14357113969799992,
        "gradePct": -1.2999682522434644,
        "smoothedEle": 545.097805628523,
        "gradeBand": "descent"
      },
      {
        "lat": 24.866112,
        "lng": 121.774169,
        "ele": 548.25,
        "distanceKm": 0.1912061159673777,
        "gradePct": -1.6540525366083247,
        "smoothedEle": 543.8015352526725,
        "gradeBand": "descent"
      },
      {
        "lat": 24.866377,
        "lng": 121.773975,
        "ele": 549,
        "distanceKm": 0.22658051126701167,
        "gradePct": -2.019550313626894,
        "smoothedEle": 542.8103333823746,
        "gradeBand": "descent"
      },
      {
        "lat": 24.86684869556031,
        "lng": 121.77373598916489,
        "ele": 545.2124579248338,
        "distanceKm": 0.2843079455967612,
        "gradePct": -2.400945892690004,
        "smoothedEle": 541.4577679492218,
        "gradeBand": "descent"
      },
      {
        "lat": 24.867342,
        "lng": 121.773551,
        "ele": 540.75,
        "distanceKm": 0.34224889157776844,
        "gradePct": -3.405284859373751,
        "smoothedEle": 538.3155615318609,
        "gradeBand": "descent"
      },
      {
        "lat": 24.867647819677966,
        "lng": 121.7731911743833,
        "ele": 535.2542331990343,
        "distanceKm": 0.3919897877910846,
        "gradePct": -4.407575850532396,
        "smoothedEle": 534.964424816461,
        "gradeBand": "descent"
      },
      {
        "lat": 24.867933,
        "lng": 121.772808,
        "ele": 531,
        "distanceKm": 0.44198876697177697,
        "gradePct": -5.163607369043746,
        "smoothedEle": 532.1221001044296,
        "gradeBand": "descent"
      },
      {
        "lat": 24.868347,
        "lng": 121.772446,
        "ele": 527.25,
        "distanceKm": 0.5007504285514778,
        "gradePct": -5.720744751540167,
        "smoothedEle": 529.124583038293,
        "gradeBand": "descent"
      },
      {
        "lat": 24.868725,
        "lng": 121.772038,
        "ele": 520,
        "distanceKm": 0.5595797222229495,
        "gradePct": -5.316417251433563,
        "smoothedEle": 526.515116726309,
        "gradeBand": "descent"
      },
      {
        "lat": 24.869031,
        "lng": 121.771953,
        "ele": 517.25,
        "distanceKm": 0.5946693400057642,
        "gradePct": -4.830607315799625,
        "smoothedEle": 525.1508839253707,
        "gradeBand": "descent"
      },
      {
        "lat": 24.869121,
        "lng": 121.772008,
        "ele": 517,
        "distanceKm": 0.6061121734710784,
        "gradePct": -4.737075569719309,
        "smoothedEle": 524.6874491700255,
        "gradeBand": "descent"
      },
      {
        "lat": 24.869185,
        "lng": 121.772118,
        "ele": 517.25,
        "distanceKm": 0.6192952365438606,
        "gradePct": -4.6191667756770585,
        "smoothedEle": 524.1738405384942,
        "gradeBand": "descent"
      },
      {
        "lat": 24.869198,
        "lng": 121.772207,
        "ele": 517.75,
        "distanceKm": 0.6283895305443478,
        "gradePct": -4.513040054854798,
        "smoothedEle": 523.8691046935645,
        "gradeBand": "descent"
      },
      {
        "lat": 24.869183,
        "lng": 121.772284,
        "ele": 518.75,
        "distanceKm": 0.6363346453292434,
        "gradePct": -4.42032378917952,
        "smoothedEle": 523.6028760817661,
        "gradeBand": "descent"
      },
      {
        "lat": 24.869024,
        "lng": 121.772638,
        "ele": 521.5,
        "distanceKm": 0.6761843432416089,
        "gradePct": -4.032387486593791,
        "smoothedEle": 522.3129594904548,
        "gradeBand": "descent"
      },
      {
        "lat": 24.868857,
        "lng": 121.77303,
        "ele": 523.5,
        "distanceKm": 0.719873737870539,
        "gradePct": -3.6012961404381363,
        "smoothedEle": 521.0737461444453,
        "gradeBand": "descent"
      },
      {
        "lat": 24.86891067491386,
        "lng": 121.77345612756895,
        "ele": 523.3982071437276,
        "distanceKm": 0.7632756231542014,
        "gradePct": -3.1636369562531277,
        "smoothedEle": 520.0441516140114,
        "gradeBand": "descent"
      },
      {
        "lat": 24.868983,
        "lng": 121.77388,
        "ele": 523.25,
        "distanceKm": 0.8067873211338921,
        "gradePct": -2.6825202888036874,
        "smoothedEle": 519.2961050190175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.869232,
        "lng": 121.774142,
        "ele": 520.5,
        "distanceKm": 0.8450656771558736,
        "gradePct": -2.2188776104256367,
        "smoothedEle": 518.8825013329775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.869651,
        "lng": 121.774118,
        "ele": 518.5,
        "distanceKm": 0.8917192856676173,
        "gradePct": -1.6500894545673082,
        "smoothedEle": 518.5721448584565,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87004525,
        "lng": 121.77409475,
        "ele": 517.1875,
        "distanceKm": 0.9356206490128631,
        "gradePct": -1.3015587887073254,
        "smoothedEle": 518.0970748958617,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8704395,
        "lng": 121.77407149999999,
        "ele": 515.875,
        "distanceKm": 0.9795220119584697,
        "gradePct": -1.1430473894878899,
        "smoothedEle": 517.4787513519067,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87083375,
        "lng": 121.77404824999999,
        "ele": 514.5625,
        "distanceKm": 1.0234233745042791,
        "gradePct": -1.1855946207397212,
        "smoothedEle": 516.7451605918347,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871228,
        "lng": 121.774025,
        "ele": 513.25,
        "distanceKm": 1.0673247366503633,
        "gradePct": -1.4297930646948775,
        "smoothedEle": 515.8748399860165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871683,
        "lng": 121.773961,
        "ele": 514.25,
        "distanceKm": 1.1183288006329608,
        "gradePct": -1.781561576459581,
        "smoothedEle": 514.7210720767334,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872084,
        "lng": 121.773676,
        "ele": 515.25,
        "distanceKm": 1.171383838879269,
        "gradePct": -2.137958862737833,
        "smoothedEle": 513.3174547607654,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872294,
        "lng": 121.773413,
        "ele": 516,
        "distanceKm": 1.2067279546506118,
        "gradePct": -2.339146794230147,
        "smoothedEle": 512.3458470857669,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872404737060265,
        "lng": 121.77303961964343,
        "ele": 515.2811724732986,
        "distanceKm": 1.2463566504120398,
        "gradePct": -2.493570460381677,
        "smoothedEle": 511.30337996046234,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872486,
        "lng": 121.772656,
        "ele": 514,
        "distanceKm": 1.286097621694431,
        "gradePct": -2.6331863675185625,
        "smoothedEle": 510.18380398618746,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872493,
        "lng": 121.772278,
        "ele": 511.75,
        "distanceKm": 1.3242386959950903,
        "gradePct": -2.7461439550669136,
        "smoothedEle": 509.0724327296761,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872374,
        "lng": 121.771897,
        "ele": 507.25,
        "distanceKm": 1.3648884395224523,
        "gradePct": -2.6824111220346945,
        "smoothedEle": 508.12447397252583,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872326,
        "lng": 121.771431,
        "ele": 503.75,
        "distanceKm": 1.412201196778701,
        "gradePct": -2.696301521123957,
        "smoothedEle": 506.8092656743666,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872432,
        "lng": 121.770774,
        "ele": 502.75,
        "distanceKm": 1.4795201488787821,
        "gradePct": -3.0270889928568474,
        "smoothedEle": 504.3149254609102,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872563,
        "lng": 121.77011,
        "ele": 499,
        "distanceKm": 1.548070850422693,
        "gradePct": -3.846435576732092,
        "smoothedEle": 500.8237917845478,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872657,
        "lng": 121.769572,
        "ele": 502.25,
        "distanceKm": 1.6033422516557216,
        "gradePct": -4.748878682946612,
        "smoothedEle": 497.55777081386015,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872598,
        "lng": 121.769171,
        "ele": 500.5,
        "distanceKm": 1.6443241292817161,
        "gradePct": -5.183900848245913,
        "smoothedEle": 495.25122675912996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872416,
        "lng": 121.769025,
        "ele": 499.5,
        "distanceKm": 1.669353916396545,
        "gradePct": -5.375754586541405,
        "smoothedEle": 493.9401013328069,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872212,
        "lng": 121.76899,
        "ele": 498,
        "distanceKm": 1.6923108657338184,
        "gradePct": -5.455869352027237,
        "smoothedEle": 492.75178419857804,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871823,
        "lng": 121.7690015,
        "ele": 492.5,
        "distanceKm": 1.7355813071979524,
        "gradePct": -5.422952739426166,
        "smoothedEle": 490.6139507656098,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871434,
        "lng": 121.769013,
        "ele": 487,
        "distanceKm": 1.7788517487595927,
        "gradePct": -5.301625055573881,
        "smoothedEle": 488.40167952729536,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870804,
        "lng": 121.768847,
        "ele": 479.5,
        "distanceKm": 1.850878504308388,
        "gradePct": -5.490879786402333,
        "smoothedEle": 483.92613195491873,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870416,
        "lng": 121.768705,
        "ele": 477.75,
        "distanceKm": 1.8963383117376995,
        "gradePct": -5.594098344425392,
        "smoothedEle": 481.3646062092081,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87036,
        "lng": 121.76866,
        "ele": 477.5,
        "distanceKm": 1.904044399497524,
        "gradePct": -5.598312327613856,
        "smoothedEle": 480.9754487773369,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87032,
        "lng": 121.768594,
        "ele": 477.5,
        "distanceKm": 1.9120516254076496,
        "gradePct": -5.597478382078977,
        "smoothedEle": 480.5815090740126,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870291,
        "lng": 121.768453,
        "ele": 477.75,
        "distanceKm": 1.92663707123581,
        "gradePct": -5.592037616367692,
        "smoothedEle": 479.8717773491079,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870308,
        "lng": 121.76836,
        "ele": 478,
        "distanceKm": 1.9362077349943716,
        "gradePct": -5.593454717524169,
        "smoothedEle": 479.39501419732954,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870658,
        "lng": 121.767987,
        "ele": 478.25,
        "distanceKm": 1.9903427446164685,
        "gradePct": -5.443459627567309,
        "smoothedEle": 476.800740902281,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870813,
        "lng": 121.767525,
        "ele": 470.75,
        "distanceKm": 2.0400352235546526,
        "gradePct": -5.010965316432051,
        "smoothedEle": 474.57797342915865,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870875,
        "lng": 121.767384,
        "ele": 468,
        "distanceKm": 2.0558422978434954,
        "gradePct": -4.830614360727113,
        "smoothedEle": 473.9852081433271,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870915,
        "lng": 121.767344,
        "ele": 467.75,
        "distanceKm": 2.0618478479508577,
        "gradePct": -4.7740209287364355,
        "smoothedEle": 473.760000014301,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871044,
        "lng": 121.767304,
        "ele": 468.5,
        "distanceKm": 2.07674881221573,
        "gradePct": -4.525831218399164,
        "smoothedEle": 473.416754153682,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87143,
        "lng": 121.76728,
        "ele": 472.75,
        "distanceKm": 2.1197383477894647,
        "gradePct": -3.713272109091407,
        "smoothedEle": 472.7809268730911,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871751,
        "lng": 121.767206,
        "ele": 475.25,
        "distanceKm": 2.1562042884150183,
        "gradePct": -2.9985398119619058,
        "smoothedEle": 472.4396540652035,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872037,
        "lng": 121.766977,
        "ele": 473.75,
        "distanceKm": 2.1955114525639896,
        "gradePct": -2.263070728392365,
        "smoothedEle": 472.04340075810313,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872253,
        "lng": 121.766473,
        "ele": 466,
        "distanceKm": 2.251743253696913,
        "gradePct": -1.2532684986954896,
        "smoothedEle": 471.6323853014329,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872313,
        "lng": 121.766374,
        "ele": 466.25,
        "distanceKm": 2.263753962004754,
        "gradePct": -1.080888352384135,
        "smoothedEle": 471.55431569743206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872434,
        "lng": 121.766297,
        "ele": 467,
        "distanceKm": 2.2792899251568643,
        "gradePct": -0.8843739293263575,
        "smoothedEle": 471.6104225223862,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872583,
        "lng": 121.766278,
        "ele": 468.25,
        "distanceKm": 2.2959684967892544,
        "gradePct": -0.811069269599414,
        "smoothedEle": 471.51035109259186,
        "gradeBand": "descent"
      },
      {
        "lat": 24.873039,
        "lng": 121.766323,
        "ele": 471.75,
        "distanceKm": 2.3468762664742973,
        "gradePct": -0.5917259406558908,
        "smoothedEle": 471.3435000894205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87323,
        "lng": 121.766305,
        "ele": 473,
        "distanceKm": 2.3681920124630254,
        "gradePct": -0.6949995799319872,
        "smoothedEle": 470.9288073346365,
        "gradeBand": "descent"
      },
      {
        "lat": 24.873332,
        "lng": 121.766237,
        "ele": 473.25,
        "distanceKm": 2.3814470744710206,
        "gradePct": -0.8098332609958724,
        "smoothedEle": 470.5655164392367,
        "gradeBand": "descent"
      },
      {
        "lat": 24.873412,
        "lng": 121.766125,
        "ele": 473.25,
        "distanceKm": 2.3958272948217894,
        "gradePct": -1.0054866083849552,
        "smoothedEle": 470.0301189535375,
        "gradeBand": "descent"
      },
      {
        "lat": 24.873429,
        "lng": 121.766071,
        "ele": 473.25,
        "distanceKm": 2.401593496998529,
        "gradePct": -1.098295632509461,
        "smoothedEle": 469.8023539675562,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87341,
        "lng": 121.765961,
        "ele": 472.75,
        "distanceKm": 2.412889683003232,
        "gradePct": -1.2917607260813202,
        "smoothedEle": 469.33285649720597,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87334,
        "lng": 121.765884,
        "ele": 472,
        "distanceKm": 2.4238862315539165,
        "gradePct": -1.490303044913445,
        "smoothedEle": 468.855394718257,
        "gradeBand": "descent"
      },
      {
        "lat": 24.873183,
        "lng": 121.765749,
        "ele": 473.75,
        "distanceKm": 2.446027661858231,
        "gradePct": -1.8880406955119309,
        "smoothedEle": 467.89808092168,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872824,
        "lng": 121.765605,
        "ele": 475,
        "distanceKm": 2.488507757611247,
        "gradePct": -2.5922970842455846,
        "smoothedEle": 466.3705213591687,
        "gradeBand": "descent"
      },
      {
        "lat": 24.872158,
        "lng": 121.76561,
        "ele": 467.75,
        "distanceKm": 2.5625653988229367,
        "gradePct": -3.419021424394427,
        "smoothedEle": 464.2002289123682,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871943,
        "lng": 121.76563,
        "ele": 465.75,
        "distanceKm": 2.586557329368384,
        "gradePct": -3.555990665690726,
        "smoothedEle": 463.2632725418728,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871832,
        "lng": 121.765702,
        "ele": 462.75,
        "distanceKm": 2.6008786204094227,
        "gradePct": -3.6058885738998723,
        "smoothedEle": 462.61881444502615,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871545,
        "lng": 121.766052,
        "ele": 455.5,
        "distanceKm": 2.648472127809875,
        "gradePct": -3.822847267485198,
        "smoothedEle": 460.1644848113135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871431,
        "lng": 121.766092,
        "ele": 454,
        "distanceKm": 2.6617751560869687,
        "gradePct": -3.9683076865984184,
        "smoothedEle": 459.39519480524945,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871364,
        "lng": 121.766093,
        "ele": 453.5,
        "distanceKm": 2.6692259094596644,
        "gradePct": -4.049788689058769,
        "smoothedEle": 458.96430803790474,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871307,
        "lng": 121.766063,
        "ele": 452.75,
        "distanceKm": 2.6762495312957313,
        "gradePct": -4.120890767167534,
        "smoothedEle": 458.56953852115873,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871247,
        "lng": 121.765977,
        "ele": 452,
        "distanceKm": 2.687194049768602,
        "gradePct": -4.229000692749619,
        "smoothedEle": 457.9597601444319,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871101,
        "lng": 121.765584,
        "ele": 453.5,
        "distanceKm": 2.7300359099254776,
        "gradePct": -4.82877005946042,
        "smoothedEle": 455.49598007976624,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8709745,
        "lng": 121.76520599999999,
        "ele": 452.5,
        "distanceKm": 2.7706810475352928,
        "gradePct": -5.26058914737555,
        "smoothedEle": 453.36211035525093,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870848,
        "lng": 121.764828,
        "ele": 451.5,
        "distanceKm": 2.8113262217612904,
        "gradePct": -5.1249407897714105,
        "smoothedEle": 451.8301648906133,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870851,
        "lng": 121.764448,
        "ele": 449.25,
        "distanceKm": 2.8496630756125634,
        "gradePct": -4.728017747183368,
        "smoothedEle": 450.6395789647782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.870831,
        "lng": 121.764043,
        "ele": 445.75,
        "distanceKm": 2.890581026387868,
        "gradePct": -3.8872522554133835,
        "smoothedEle": 449.9904749811433,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87084,
        "lng": 121.763832,
        "ele": 443.75,
        "distanceKm": 2.911890777331046,
        "gradePct": -3.3613713277602217,
        "smoothedEle": 449.81674057264263,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871006,
        "lng": 121.763651,
        "ele": 444.5,
        "distanceKm": 2.9378547959381534,
        "gradePct": -2.746815903435047,
        "smoothedEle": 449.5918567572307,
        "gradeBand": "descent"
      },
      {
        "lat": 24.871597,
        "lng": 121.763529,
        "ele": 448.75,
        "distanceKm": 3.0047136697978964,
        "gradePct": -1.6930413772356003,
        "smoothedEle": 448.69331391292513,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8721185,
        "lng": 121.76330700000001,
        "ele": 450.375,
        "distanceKm": 3.0668764039792773,
        "gradePct": -1.261407326417184,
        "smoothedEle": 447.84369980595704,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87264,
        "lng": 121.763085,
        "ele": 452,
        "distanceKm": 3.1290391041153436,
        "gradePct": -1.3077667147685463,
        "smoothedEle": 447.05267924326307,
        "gradeBand": "descent"
      },
      {
        "lat": 24.873047,
        "lng": 121.762823,
        "ele": 448.625,
        "distanceKm": 3.181448359273757,
        "gradePct": -1.2153627128631672,
        "smoothedEle": 446.57526019530843,
        "gradeBand": "descent"
      },
      {
        "lat": 24.873454,
        "lng": 121.762561,
        "ele": 445.25,
        "distanceKm": 3.233857570533979,
        "gradePct": -1.371379849747284,
        "smoothedEle": 445.5522276352398,
        "gradeBand": "descent"
      },
      {
        "lat": 24.874028,
        "lng": 121.762357,
        "ele": 445.25,
        "distanceKm": 3.3009192898395776,
        "gradePct": -1.7195561900897174,
        "smoothedEle": 443.97139159178073,
        "gradeBand": "descent"
      },
      {
        "lat": 24.874489,
        "lng": 121.762341,
        "ele": 442.5,
        "distanceKm": 3.352205627153102,
        "gradePct": -1.9698487306540342,
        "smoothedEle": 442.9019476938025,
        "gradeBand": "descent"
      },
      {
        "lat": 24.874938,
        "lng": 121.762439,
        "ele": 440.25,
        "distanceKm": 3.403101611600948,
        "gradePct": -2.173314403577761,
        "smoothedEle": 441.8059579376385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.875415,
        "lng": 121.762336,
        "ele": 435.75,
        "distanceKm": 3.457149837633093,
        "gradePct": -1.930218339851221,
        "smoothedEle": 441.14272576983336,
        "gradeBand": "descent"
      },
      {
        "lat": 24.875849,
        "lng": 121.762441,
        "ele": 436,
        "distanceKm": 3.506557274851451,
        "gradePct": -1.702550089504085,
        "smoothedEle": 440.4487258196014,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87614,
        "lng": 121.762343,
        "ele": 439.25,
        "distanceKm": 3.5403915753124693,
        "gradePct": -1.877046224726739,
        "smoothedEle": 439.3942067350809,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8764855,
        "lng": 121.7619495,
        "ele": 440.5,
        "distanceKm": 3.5956335231205054,
        "gradePct": -2.193753335201846,
        "smoothedEle": 437.5792684429214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876831,
        "lng": 121.761556,
        "ele": 441.75,
        "distanceKm": 3.6508753911722835,
        "gradePct": -2.311929865491292,
        "smoothedEle": 436.5958605127398,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877092,
        "lng": 121.761157,
        "ele": 443.25,
        "distanceKm": 3.700497450248073,
        "gradePct": -2.0035662786003723,
        "smoothedEle": 436.5267123904091,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877163,
        "lng": 121.760806,
        "ele": 436.75,
        "distanceKm": 3.736774931411621,
        "gradePct": -1.3517401661644601,
        "smoothedEle": 436.803446924926,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876826,
        "lng": 121.760491,
        "ele": 428.5,
        "distanceKm": 3.785906888706265,
        "gradePct": -0.2966722307330653,
        "smoothedEle": 437.30548623356094,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876663,
        "lng": 121.760185,
        "ele": 427.25,
        "distanceKm": 3.82170325279981,
        "gradePct": 0.281369257033077,
        "smoothedEle": 437.67791731251197,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876666,
        "lng": 121.760061,
        "ele": 428.25,
        "distanceKm": 3.8342165585457493,
        "gradePct": 0.41464759255865113,
        "smoothedEle": 437.7217138826228,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876826,
        "lng": 121.75983,
        "ele": 431.5,
        "distanceKm": 3.8635345853301497,
        "gradePct": 0.5988602856807854,
        "smoothedEle": 437.77594055239956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876936,
        "lng": 121.759417,
        "ele": 436.25,
        "distanceKm": 3.906955457816036,
        "gradePct": 0.47101436240819755,
        "smoothedEle": 437.518004560782,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876903,
        "lng": 121.758996,
        "ele": 439.5,
        "distanceKm": 3.949583190496675,
        "gradePct": 0.11724841113499442,
        "smoothedEle": 437.1688208766642,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.87666,
        "lng": 121.758347,
        "ele": 441.5,
        "distanceKm": 4.020409615639132,
        "gradePct": -0.20580808612356785,
        "smoothedEle": 437.2528419330039,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876592,
        "lng": 121.758212,
        "ele": 444.25,
        "distanceKm": 4.035986419245463,
        "gradePct": -0.1344353087127671,
        "smoothedEle": 437.4561168024111,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876511,
        "lng": 121.758121,
        "ele": 445.25,
        "distanceKm": 4.0488469391830515,
        "gradePct": -0.13025307803317776,
        "smoothedEle": 437.48826810225506,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876241,
        "lng": 121.757961,
        "ele": 442.25,
        "distanceKm": 4.082933249684184,
        "gradePct": 0.0048528218704007,
        "smoothedEle": 437.67041097769004,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.875894,
        "lng": 121.757673,
        "ele": 438.5,
        "distanceKm": 4.131232874584499,
        "gradePct": 0.2998990275720243,
        "smoothedEle": 437.9189349470405,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.875632,
        "lng": 121.757399,
        "ele": 438.5,
        "distanceKm": 4.171391919389864,
        "gradePct": 0.36713431911115857,
        "smoothedEle": 437.9289611078032,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.875451642055186,
        "lng": 121.75700008799852,
        "ele": 438.4638266219404,
        "distanceKm": 4.216354120008523,
        "gradePct": 0.23348191321142034,
        "smoothedEle": 437.71499474395927,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8753,
        "lng": 121.756585,
        "ele": 437.5,
        "distanceKm": 4.26149527217975,
        "gradePct": 0.024879078009917045,
        "smoothedEle": 437.60561361835016,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.875265,
        "lng": 121.7562,
        "ele": 429.75,
        "distanceKm": 4.300528199149007,
        "gradePct": -0.019520735488157453,
        "smoothedEle": 437.7219036814727,
        "gradeBand": "descent"
      },
      {
        "lat": 24.875656,
        "lng": 121.755877,
        "ele": 433,
        "distanceKm": 4.354860349487945,
        "gradePct": 0.3108329482914766,
        "smoothedEle": 438.54649971056483,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876156,
        "lng": 121.755619,
        "ele": 436.25,
        "distanceKm": 4.416248241413035,
        "gradePct": 1.3897536035919689,
        "smoothedEle": 440.49500580677693,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876634,
        "lng": 121.755463,
        "ele": 437,
        "distanceKm": 4.471680253010412,
        "gradePct": 2.121928557712975,
        "smoothedEle": 441.8798146550668,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.87695,
        "lng": 121.755477,
        "ele": 442,
        "distanceKm": 4.5068462690102145,
        "gradePct": 2.3484674877230964,
        "smoothedEle": 442.5147276524138,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.877365,
        "lng": 121.755464,
        "ele": 447.25,
        "distanceKm": 4.553010857781181,
        "gradePct": 2.3502925764094846,
        "smoothedEle": 443.21901523043675,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.877829,
        "lng": 121.755165,
        "ele": 455.75,
        "distanceKm": 4.6127750297346575,
        "gradePct": 1.5317192740543235,
        "smoothedEle": 443.4482015379957,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.877899,
        "lng": 121.754977,
        "ele": 454.5,
        "distanceKm": 4.633275058738215,
        "gradePct": 1.0537896202334016,
        "smoothedEle": 443.02795094342275,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.877895,
        "lng": 121.75452,
        "ele": 452.25,
        "distanceKm": 4.679377940792719,
        "gradePct": -0.10006303988211578,
        "smoothedEle": 441.8186682658804,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877848,
        "lng": 121.753951,
        "ele": 447,
        "distanceKm": 4.737014330225306,
        "gradePct": -1.3803369716119096,
        "smoothedEle": 440.2142980508484,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87778100037703,
        "lng": 121.75356117660142,
        "ele": 442.03264148090875,
        "distanceKm": 4.777038015080334,
        "gradePct": -2.273078658772986,
        "smoothedEle": 438.76499832549143,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877726,
        "lng": 121.753169,
        "ele": 437.25,
        "distanceKm": 4.817069538230225,
        "gradePct": -3.1842669031016984,
        "smoothedEle": 436.99163030763316,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877583,
        "lng": 121.752584,
        "ele": 422.75,
        "distanceKm": 4.878187323891645,
        "gradePct": -4.282466490222273,
        "smoothedEle": 433.28496527215026,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877613,
        "lng": 121.75198,
        "ele": 423.25,
        "distanceKm": 4.939208359094976,
        "gradePct": -5.379480415638535,
        "smoothedEle": 429.37588912652956,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877535,
        "lng": 121.751448,
        "ele": 422.25,
        "distanceKm": 4.9935713360912874,
        "gradePct": -6.076799304184499,
        "smoothedEle": 425.87898534957446,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877486,
        "lng": 121.75115,
        "ele": 425.25,
        "distanceKm": 5.024122521213835,
        "gradePct": -6.369603496636494,
        "smoothedEle": 423.82467474431166,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877259,
        "lng": 121.750699,
        "ele": 424,
        "distanceKm": 5.076151149987065,
        "gradePct": -6.571239621921358,
        "smoothedEle": 420.26597568907636,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877225836548945,
        "lng": 121.75018341087133,
        "ele": 421.9282065257486,
        "distanceKm": 5.128293013204629,
        "gradePct": -6.0692940874578145,
        "smoothedEle": 417.9365502858636,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877217,
        "lng": 121.749665,
        "ele": 420.75,
        "distanceKm": 5.18059820299783,
        "gradePct": -5.31836478698852,
        "smoothedEle": 416.07675382224653,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877174,
        "lng": 121.74945,
        "ele": 419.25,
        "distanceKm": 5.202807646102057,
        "gradePct": -5.062731253337996,
        "smoothedEle": 415.1324585688774,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876971,
        "lng": 121.749101,
        "ele": 412,
        "distanceKm": 5.244628736745714,
        "gradePct": -4.684630069098001,
        "smoothedEle": 413.05281277784496,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876876,
        "lng": 121.748659,
        "ele": 405.5,
        "distanceKm": 5.290450916139757,
        "gradePct": -4.258100546040762,
        "smoothedEle": 411.110935927247,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876901,
        "lng": 121.748531,
        "ele": 404.75,
        "distanceKm": 5.303659111056898,
        "gradePct": -4.206314864891564,
        "smoothedEle": 410.62443430649535,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876979,
        "lng": 121.748441,
        "ele": 405,
        "distanceKm": 5.316215095257069,
        "gradePct": -4.145576776607921,
        "smoothedEle": 410.1849748594894,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877161,
        "lng": 121.748344,
        "ele": 405.75,
        "distanceKm": 5.3386940905955,
        "gradePct": -4.161433051347014,
        "smoothedEle": 409.24385688637875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877492,
        "lng": 121.748183,
        "ele": 407.5,
        "distanceKm": 5.378923786250655,
        "gradePct": -4.280978378151641,
        "smoothedEle": 407.57433368854856,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877955,
        "lng": 121.748093,
        "ele": 402.75,
        "distanceKm": 5.431201501130301,
        "gradePct": -4.313154237479065,
        "smoothedEle": 405.094203150598,
        "gradeBand": "descent"
      },
      {
        "lat": 24.878055,
        "lng": 121.748087,
        "ele": 402,
        "distanceKm": 5.442337469848571,
        "gradePct": -4.288210550985976,
        "smoothedEle": 404.59032996599024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87811,
        "lng": 121.748098,
        "ele": 401.5,
        "distanceKm": 5.448553051576202,
        "gradePct": -4.277061369334401,
        "smoothedEle": 404.3323833242936,
        "gradeBand": "descent"
      },
      {
        "lat": 24.878152,
        "lng": 121.748126,
        "ele": 400.75,
        "distanceKm": 5.4540109609116,
        "gradePct": -4.274663886110883,
        "smoothedEle": 404.10588008687455,
        "gradeBand": "descent"
      },
      {
        "lat": 24.878224,
        "lng": 121.748208,
        "ele": 398.75,
        "distanceKm": 5.4655227310627295,
        "gradePct": -4.269607137433919,
        "smoothedEle": 403.6281416256027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.878274,
        "lng": 121.748317,
        "ele": 396.25,
        "distanceKm": 5.477843971493165,
        "gradePct": -4.234282909115361,
        "smoothedEle": 403.1766339587442,
        "gradeBand": "descent"
      },
      {
        "lat": 24.878447,
        "lng": 121.748919,
        "ele": 406.5,
        "distanceKm": 5.541545626365321,
        "gradePct": -3.295431115745114,
        "smoothedEle": 402.53465657055483,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8787475,
        "lng": 121.74942399999999,
        "ele": 401.87500000000006,
        "distanceKm": 5.602468903741246,
        "gradePct": -2.2560195415111632,
        "smoothedEle": 401.94528011775674,
        "gradeBand": "descent"
      },
      {
        "lat": 24.879048,
        "lng": 121.749929,
        "ele": 397.25,
        "distanceKm": 5.663392077516671,
        "gradePct": -1.25769226922469,
        "smoothedEle": 401.2011792093148,
        "gradeBand": "descent"
      },
      {
        "lat": 24.87919,
        "lng": 121.750334,
        "ele": 398.5,
        "distanceKm": 5.7071918947763685,
        "gradePct": -0.7784382090886475,
        "smoothedEle": 401.3239928045338,
        "gradeBand": "descent"
      },
      {
        "lat": 24.879296,
        "lng": 121.750782,
        "ele": 405,
        "distanceKm": 5.753896011153075,
        "gradePct": -0.5368811504795583,
        "smoothedEle": 401.34141570096943,
        "gradeBand": "descent"
      },
      {
        "lat": 24.879794,
        "lng": 121.751182,
        "ele": 401,
        "distanceKm": 5.822412776616933,
        "gradePct": -1.11481909864193,
        "smoothedEle": 399.4720522811781,
        "gradeBand": "descent"
      },
      {
        "lat": 24.880125,
        "lng": 121.751337,
        "ele": 397.75,
        "distanceKm": 5.862401823137984,
        "gradePct": -1.305491708714469,
        "smoothedEle": 398.60229051934516,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8805,
        "lng": 121.751632,
        "ele": 404.5,
        "distanceKm": 5.913629555977787,
        "gradePct": -2.0789511429024667,
        "smoothedEle": 397.16849207801533,
        "gradeBand": "descent"
      },
      {
        "lat": 24.880606,
        "lng": 121.751673,
        "ele": 405.25,
        "distanceKm": 5.926120799152342,
        "gradePct": -2.3066842323764525,
        "smoothedEle": 396.71768573749415,
        "gradeBand": "descent"
      },
      {
        "lat": 24.880699,
        "lng": 121.751642,
        "ele": 403.75,
        "distanceKm": 5.9369244127821394,
        "gradePct": -2.5145024644915828,
        "smoothedEle": 396.30607954416945,
        "gradeBand": "descent"
      },
      {
        "lat": 24.880772,
        "lng": 121.751581,
        "ele": 401.75,
        "distanceKm": 5.947110349084317,
        "gradePct": -2.7226675982904545,
        "smoothedEle": 395.8935491239312,
        "gradeBand": "descent"
      },
      {
        "lat": 24.880928,
        "lng": 121.751328,
        "ele": 396.75,
        "distanceKm": 5.97796861395041,
        "gradePct": -2.9208848619756487,
        "smoothedEle": 394.8428659497671,
        "gradeBand": "descent"
      },
      {
        "lat": 24.881367,
        "lng": 121.750913,
        "ele": 391.5,
        "distanceKm": 6.042275406892639,
        "gradePct": -3.472768817327474,
        "smoothedEle": 392.0945024380265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.881805,
        "lng": 121.750628,
        "ele": 391,
        "distanceKm": 6.098830987202186,
        "gradePct": -3.7899089300971944,
        "smoothedEle": 390.0028671494254,
        "gradeBand": "descent"
      },
      {
        "lat": 24.882053,
        "lng": 121.750253,
        "ele": 384.5,
        "distanceKm": 6.145643206233908,
        "gradePct": -3.6185120883332296,
        "smoothedEle": 388.71594423270636,
        "gradeBand": "descent"
      },
      {
        "lat": 24.882161,
        "lng": 121.750068,
        "ele": 379.75,
        "distanceKm": 6.167834929687111,
        "gradePct": -3.7107968232690745,
        "smoothedEle": 387.76631087211615,
        "gradeBand": "descent"
      },
      {
        "lat": 24.882194,
        "lng": 121.750025,
        "ele": 378.5,
        "distanceKm": 6.17351640508814,
        "gradePct": -3.7417968348746595,
        "smoothedEle": 387.5108641131863,
        "gradeBand": "descent"
      },
      {
        "lat": 24.882339,
        "lng": 121.749964,
        "ele": 378.25,
        "distanceKm": 6.190773958003172,
        "gradePct": -3.771093851113673,
        "smoothedEle": 386.7533995116601,
        "gradeBand": "descent"
      },
      {
        "lat": 24.882724,
        "lng": 121.750054,
        "ele": 384.75,
        "distanceKm": 6.234536107911083,
        "gradePct": -3.526873599755842,
        "smoothedEle": 385.3715197807066,
        "gradeBand": "descent"
      },
      {
        "lat": 24.882999,
        "lng": 121.749722,
        "ele": 381.75,
        "distanceKm": 6.279886069598374,
        "gradePct": -3.46923829475713,
        "smoothedEle": 383.7650439345718,
        "gradeBand": "descent"
      },
      {
        "lat": 24.88339915890845,
        "lng": 121.74955806127326,
        "ele": 382.2366217561218,
        "distanceKm": 6.327355398217112,
        "gradePct": -3.740981025937625,
        "smoothedEle": 381.73673551575473,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883802,
        "lng": 121.749402,
        "ele": 385.25,
        "distanceKm": 6.374835037168711,
        "gradePct": -3.9442847403041097,
        "smoothedEle": 379.56441753213477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884125,
        "lng": 121.749038,
        "ele": 382.5,
        "distanceKm": 6.42619772851757,
        "gradePct": -3.90617131063075,
        "smoothedEle": 377.8224786082346,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884284,
        "lng": 121.74869,
        "ele": 383.75,
        "distanceKm": 6.465502043447089,
        "gradePct": -3.7473091948181687,
        "smoothedEle": 376.7799649077589,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884286,
        "lng": 121.748325,
        "ele": 376.75,
        "distanceKm": 6.50232087429824,
        "gradePct": -3.6759720979467803,
        "smoothedEle": 375.4544869971175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883989,
        "lng": 121.747765,
        "ele": 369.25,
        "distanceKm": 6.567754532038115,
        "gradePct": -2.9111621190188517,
        "smoothedEle": 374.06604497039325,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883782,
        "lng": 121.747307,
        "ele": 367,
        "distanceKm": 6.619370246706394,
        "gradePct": -2.799820713577217,
        "smoothedEle": 372.4543876704875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883764,
        "lng": 121.74719,
        "ele": 366.25,
        "distanceKm": 6.631340796374199,
        "gradePct": -2.8732045249038807,
        "smoothedEle": 371.9396540347718,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883781,
        "lng": 121.747088,
        "ele": 366,
        "distanceKm": 6.641801955413546,
        "gradePct": -2.969466285034966,
        "smoothedEle": 371.46965712155185,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883838,
        "lng": 121.747014,
        "ele": 365.5,
        "distanceKm": 6.651594350493455,
        "gradePct": -3.069203759776994,
        "smoothedEle": 371.01044717733294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.88396,
        "lng": 121.746962,
        "ele": 365,
        "distanceKm": 6.666138921611257,
        "gradePct": -3.2144733032147004,
        "smoothedEle": 370.32809068741943,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884036,
        "lng": 121.746962,
        "ele": 365,
        "distanceKm": 6.6745897477090015,
        "gradePct": -3.2757417924233296,
        "smoothedEle": 369.90132396948337,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884181,
        "lng": 121.746881,
        "ele": 364.5,
        "distanceKm": 6.692665127426165,
        "gradePct": -3.4138903096032576,
        "smoothedEle": 368.9743132653057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884254,
        "lng": 121.746766,
        "ele": 366.75,
        "distanceKm": 6.706823353281507,
        "gradePct": -3.6272416880634895,
        "smoothedEle": 368.1044651586649,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884356,
        "lng": 121.746415,
        "ele": 366.75,
        "distanceKm": 6.74400157214428,
        "gradePct": -4.364759584691054,
        "smoothedEle": 365.84054176030236,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884597,
        "lng": 121.746077,
        "ele": 373,
        "distanceKm": 6.787367150242533,
        "gradePct": -4.976632635861502,
        "smoothedEle": 363.50039218253187,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884642,
        "lng": 121.74555,
        "ele": 368.5,
        "distanceKm": 6.840761354719445,
        "gradePct": -5.090305764639875,
        "smoothedEle": 361.33579749732223,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884566,
        "lng": 121.745166,
        "ele": 363.75,
        "distanceKm": 6.880407127726025,
        "gradePct": -4.833575597238958,
        "smoothedEle": 359.9358236597761,
        "gradeBand": "descent"
      },
      {
        "lat": 24.88448,
        "lng": 121.745067,
        "ele": 361.5,
        "distanceKm": 6.894233638866357,
        "gradePct": -4.700740471181997,
        "smoothedEle": 359.4764666680612,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884245,
        "lng": 121.745,
        "ele": 357.25,
        "distanceKm": 6.921224321305392,
        "gradePct": -4.343230415344205,
        "smoothedEle": 358.54107451623156,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883889,
        "lng": 121.744967,
        "ele": 352.75,
        "distanceKm": 6.96094948277785,
        "gradePct": -3.9124571905721237,
        "smoothedEle": 357.1010622412651,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883811,
        "lng": 121.744918,
        "ele": 351.75,
        "distanceKm": 6.970932230501779,
        "gradePct": -3.8352740932688754,
        "smoothedEle": 356.7167264538938,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883741,
        "lng": 121.744851,
        "ele": 350.75,
        "distanceKm": 6.981240560456827,
        "gradePct": -3.7555737085694116,
        "smoothedEle": 356.3198557506244,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883696,
        "lng": 121.744775,
        "ele": 350.25,
        "distanceKm": 6.9903953231631215,
        "gradePct": -3.6999691611223366,
        "smoothedEle": 355.97769209102745,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883604,
        "lng": 121.744363,
        "ele": 348.75,
        "distanceKm": 7.033195214203017,
        "gradePct": -3.4447594715238354,
        "smoothedEle": 354.7530089889698,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883616,
        "lng": 121.744265,
        "ele": 348.75,
        "distanceKm": 7.043170339915696,
        "gradePct": -3.382285378187444,
        "smoothedEle": 354.4861605158739,
        "gradeBand": "descent"
      },
      {
        "lat": 24.88366,
        "lng": 121.744193,
        "ele": 348.75,
        "distanceKm": 7.051927372033689,
        "gradePct": -3.3415123825062634,
        "smoothedEle": 354.2584776808061,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883774,
        "lng": 121.74414,
        "ele": 349,
        "distanceKm": 7.065684884153947,
        "gradePct": -3.2701641642861974,
        "smoothedEle": 353.915368050736,
        "gradeBand": "descent"
      },
      {
        "lat": 24.883916,
        "lng": 121.744137,
        "ele": 349.25,
        "distanceKm": 7.081477485161434,
        "gradePct": -3.1374496166120847,
        "smoothedEle": 353.6253640334347,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884347,
        "lng": 121.744151,
        "ele": 349.5,
        "distanceKm": 7.129423366904785,
        "gradePct": -3.0143302045553613,
        "smoothedEle": 352.2152038285844,
        "gradeBand": "descent"
      },
      {
        "lat": 24.88473,
        "lng": 121.743946,
        "ele": 347.25,
        "distanceKm": 7.176765949063128,
        "gradePct": -2.790293180085226,
        "smoothedEle": 350.91154192911137,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884843,
        "lng": 121.743937,
        "ele": 347,
        "distanceKm": 7.189363746818161,
        "gradePct": -2.703526485059482,
        "smoothedEle": 350.6091947829905,
        "gradeBand": "descent"
      },
      {
        "lat": 24.884972,
        "lng": 121.743974,
        "ele": 347.25,
        "distanceKm": 7.204185509276015,
        "gradePct": -2.6058687473391706,
        "smoothedEle": 350.3713599491116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.885051,
        "lng": 121.744066,
        "ele": 347.5,
        "distanceKm": 7.216963884052466,
        "gradePct": -2.5179289476910163,
        "smoothedEle": 350.18159703670403,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8852,
        "lng": 121.744486,
        "ele": 355,
        "distanceKm": 7.2624541349944005,
        "gradePct": -2.169889432986592,
        "smoothedEle": 349.65616342953115,
        "gradeBand": "descent"
      },
      {
        "lat": 24.885509,
        "lng": 121.744742,
        "ele": 360,
        "distanceKm": 7.305435334324875,
        "gradePct": -1.9749385201500314,
        "smoothedEle": 348.970850760456,
        "gradeBand": "descent"
      },
      {
        "lat": 24.885606,
        "lng": 121.744765,
        "ele": 360,
        "distanceKm": 7.316467951598028,
        "gradePct": -1.9351753881019234,
        "smoothedEle": 348.7258912237232,
        "gradeBand": "descent"
      },
      {
        "lat": 24.885682,
        "lng": 121.744757,
        "ele": 359,
        "distanceKm": 7.3249572185508125,
        "gradePct": -1.9337727384024088,
        "smoothedEle": 348.4790144651459,
        "gradeBand": "descent"
      },
      {
        "lat": 24.885832,
        "lng": 121.744648,
        "ele": 353.75,
        "distanceKm": 7.344934335160698,
        "gradePct": -1.9464723962322221,
        "smoothedEle": 347.8951370369113,
        "gradeBand": "descent"
      },
      {
        "lat": 24.886078,
        "lng": 121.744375,
        "ele": 346.75,
        "distanceKm": 7.38374876290726,
        "gradePct": -1.9527265448100746,
        "smoothedEle": 346.83850130723204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.88663,
        "lng": 121.744202,
        "ele": 345.25,
        "distanceKm": 7.447560876320836,
        "gradePct": -2.40022976150186,
        "smoothedEle": 345.0277279878498,
        "gradeBand": "descent"
      },
      {
        "lat": 24.88693,
        "lng": 121.744016,
        "ele": 345,
        "distanceKm": 7.485833509439857,
        "gradePct": -2.716258878664403,
        "smoothedEle": 343.8508738149228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.887282023041735,
        "lng": 121.74370374361568,
        "ele": 340.77776237342874,
        "distanceKm": 7.536075523716383,
        "gradePct": -3.3693066515520482,
        "smoothedEle": 341.4154429834832,
        "gradeBand": "descent"
      },
      {
        "lat": 24.887616,
        "lng": 121.743366,
        "ele": 334.5,
        "distanceKm": 7.586471433863074,
        "gradePct": -4.201397680685968,
        "smoothedEle": 338.3584456944672,
        "gradeBand": "descent"
      },
      {
        "lat": 24.887683,
        "lng": 121.743305,
        "ele": 335.25,
        "distanceKm": 7.596133887448958,
        "gradePct": -4.303449427305363,
        "smoothedEle": 337.880154241966,
        "gradeBand": "descent"
      },
      {
        "lat": 24.887767,
        "lng": 121.743267,
        "ele": 336.75,
        "distanceKm": 7.60623016603213,
        "gradePct": -4.4100830948941585,
        "smoothedEle": 337.38038845209894,
        "gradeBand": "descent"
      },
      {
        "lat": 24.887939,
        "lng": 121.743302,
        "ele": 335.25,
        "distanceKm": 7.625678831223325,
        "gradePct": -4.549093322554139,
        "smoothedEle": 336.550480241588,
        "gradeBand": "descent"
      },
      {
        "lat": 24.888096,
        "lng": 121.743499,
        "ele": 334.25,
        "distanceKm": 7.652129353026207,
        "gradePct": -4.670945206492686,
        "smoothedEle": 335.54536041307847,
        "gradeBand": "descent"
      },
      {
        "lat": 24.888221,
        "lng": 121.743832,
        "ele": 332.75,
        "distanceKm": 7.688480805433942,
        "gradePct": -4.920214861565849,
        "smoothedEle": 333.8821190957339,
        "gradeBand": "descent"
      },
      {
        "lat": 24.888451,
        "lng": 121.744484,
        "ele": 330.5,
        "distanceKm": 7.759044699629058,
        "gradePct": -5.03767220979429,
        "smoothedEle": 329.94679683977466,
        "gradeBand": "descent"
      },
      {
        "lat": 24.888707,
        "lng": 121.744839,
        "ele": 329.25,
        "distanceKm": 7.804788953742861,
        "gradePct": -5.018087024273623,
        "smoothedEle": 327.4155544118705,
        "gradeBand": "descent"
      },
      {
        "lat": 24.889014,
        "lng": 121.745092,
        "ele": 329,
        "distanceKm": 7.847410269388792,
        "gradePct": -5.000355967712035,
        "smoothedEle": 325.72397365587614,
        "gradeBand": "descent"
      },
      {
        "lat": 24.889333,
        "lng": 121.74514,
        "ele": 327.75,
        "distanceKm": 7.883210405699743,
        "gradePct": -4.815920884274898,
        "smoothedEle": 324.4914216561237,
        "gradeBand": "descent"
      },
      {
        "lat": 24.889697581204775,
        "lng": 121.74503637897955,
        "ele": 322.64826428430865,
        "distanceKm": 7.9250757380652965,
        "gradePct": -4.432198999940706,
        "smoothedEle": 322.9768352507305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.890056790602387,
        "lng": 121.74490568948978,
        "ele": 318.0741321421544,
        "distanceKm": 7.967137133603384,
        "gradePct": -4.062578725596747,
        "smoothedEle": 321.3738473627266,
        "gradeBand": "descent"
      },
      {
        "lat": 24.890416,
        "lng": 121.744775,
        "ele": 313.5,
        "distanceKm": 8.009198517124426,
        "gradePct": -3.673815313187529,
        "smoothedEle": 319.8929143460741,
        "gradeBand": "descent"
      },
      {
        "lat": 24.890876,
        "lng": 121.744876,
        "ele": 313,
        "distanceKm": 8.061352913145997,
        "gradePct": -3.3633232431088205,
        "smoothedEle": 318.5173001302217,
        "gradeBand": "descent"
      },
      {
        "lat": 24.891182,
        "lng": 121.744793,
        "ele": 319.25,
        "distanceKm": 8.096393410499207,
        "gradePct": -3.0538913957071516,
        "smoothedEle": 317.9067096556646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.891440203246354,
        "lng": 121.74451334169977,
        "ele": 317.97305961205194,
        "distanceKm": 8.136642739765856,
        "gradePct": -2.688625841269411,
        "smoothedEle": 317.1587574046915,
        "gradeBand": "descent"
      },
      {
        "lat": 24.891696,
        "lng": 121.744231,
        "ele": 313.75,
        "distanceKm": 8.176892636952825,
        "gradePct": -2.3731787611304163,
        "smoothedEle": 316.2840097693211,
        "gradeBand": "descent"
      },
      {
        "lat": 24.891857,
        "lng": 121.743548,
        "ele": 313.25,
        "distanceKm": 8.248071915140873,
        "gradePct": -2.083921628853155,
        "smoothedEle": 314.69975389539724,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89196,
        "lng": 121.74315,
        "ele": 317,
        "distanceKm": 8.289818171291868,
        "gradePct": -2.0133375211696105,
        "smoothedEle": 313.9946099969869,
        "gradeBand": "descent"
      },
      {
        "lat": 24.892165,
        "lng": 121.742893,
        "ele": 320.75,
        "distanceKm": 8.3243374666616,
        "gradePct": -1.9725623536772972,
        "smoothedEle": 313.44230127107124,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89225,
        "lng": 121.74289,
        "ele": 320.25,
        "distanceKm": 8.333793891091345,
        "gradePct": -1.9911040610157682,
        "smoothedEle": 313.229489364336,
        "gradeBand": "descent"
      },
      {
        "lat": 24.892335,
        "lng": 121.742914,
        "ele": 319.75,
        "distanceKm": 8.343550555114005,
        "gradePct": -2.025522670459715,
        "smoothedEle": 312.9575850929304,
        "gradeBand": "descent"
      },
      {
        "lat": 24.892446,
        "lng": 121.743038,
        "ele": 319.25,
        "distanceKm": 8.361122487556036,
        "gradePct": -2.0566162281406624,
        "smoothedEle": 312.51350864550005,
        "gradeBand": "descent"
      },
      {
        "lat": 24.892806,
        "lng": 121.743278,
        "ele": 314,
        "distanceKm": 8.40790309737316,
        "gradePct": -2.071654285436502,
        "smoothedEle": 311.45049324292194,
        "gradeBand": "descent"
      },
      {
        "lat": 24.893212543913894,
        "lng": 121.74325012149026,
        "ele": 308.26980714600785,
        "distanceKm": 8.45319615277068,
        "gradePct": -1.8480952262668278,
        "smoothedEle": 310.9170089771028,
        "gradeBand": "descent"
      },
      {
        "lat": 24.893618,
        "lng": 121.743204,
        "ele": 305,
        "distanceKm": 8.498520244999135,
        "gradePct": -1.394509820522193,
        "smoothedEle": 311.0663571766263,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894217,
        "lng": 121.743109,
        "ele": 305,
        "distanceKm": 8.56581181622115,
        "gradePct": -0.3275261411821487,
        "smoothedEle": 311.7518987825857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894644982234706,
        "lng": 121.74290971027986,
        "ele": 306.6140406683978,
        "distanceKm": 8.61747238074018,
        "gradePct": 0.5581538169026905,
        "smoothedEle": 312.4540890698804,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895067,
        "lng": 121.74269,
        "ele": 306.75,
        "distanceKm": 8.669368158763849,
        "gradePct": 1.3088274175342225,
        "smoothedEle": 313.58795246857915,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895444,
        "lng": 121.74233,
        "ele": 315,
        "distanceKm": 8.724827963777976,
        "gradePct": 1.973454274807956,
        "smoothedEle": 315.28127902201254,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895723,
        "lng": 121.741962,
        "ele": 319.75,
        "distanceKm": 8.773203089637118,
        "gradePct": 2.726564547706924,
        "smoothedEle": 317.30549291263003,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895947,
        "lng": 121.741573,
        "ele": 325.75,
        "distanceKm": 8.819676853943157,
        "gradePct": 3.5169896555610034,
        "smoothedEle": 319.5362335993199,
        "gradeBand": "hard"
      },
      {
        "lat": 24.896001,
        "lng": 121.741038,
        "ele": 328.25,
        "distanceKm": 8.87397113825799,
        "gradePct": 4.053100283459756,
        "smoothedEle": 321.834693511621,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895907,
        "lng": 121.740561,
        "ele": 324.25,
        "distanceKm": 8.923204691302338,
        "gradePct": 4.301112269133498,
        "smoothedEle": 323.8339409917535,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895717,
        "lng": 121.739893,
        "ele": 325.75,
        "distanceKm": 8.993815429211253,
        "gradePct": 3.6678007270960067,
        "smoothedEle": 325.63048666638053,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895562,
        "lng": 121.739411,
        "ele": 329,
        "distanceKm": 9.045395824619117,
        "gradePct": 2.2109418522676743,
        "smoothedEle": 325.0468879512693,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895307,
        "lng": 121.738938,
        "ele": 327,
        "distanceKm": 9.100893969462266,
        "gradePct": -0.039186553267029606,
        "smoothedEle": 322.84958707212394,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894929,
        "lng": 121.738495,
        "ele": 327,
        "distanceKm": 9.162238641890125,
        "gradePct": -2.0075929859925523,
        "smoothedEle": 320.81189398373954,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894636,
        "lng": 121.738347,
        "ele": 327.5,
        "distanceKm": 9.198075830552156,
        "gradePct": -2.6366049388135004,
        "smoothedEle": 320.30907311119836,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89419,
        "lng": 121.738342,
        "ele": 319,
        "distanceKm": 9.247671400498765,
        "gradePct": -3.0342780330092403,
        "smoothedEle": 318.8882365335045,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894059,
        "lng": 121.738312,
        "ele": 315.25,
        "distanceKm": 9.262548922622676,
        "gradePct": -2.9517384205114285,
        "smoothedEle": 318.4642799892007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894013,
        "lng": 121.738264,
        "ele": 313.25,
        "distanceKm": 9.26959183890108,
        "gradePct": -2.9109165147842293,
        "smoothedEle": 318.2670783334053,
        "gradeBand": "descent"
      },
      {
        "lat": 24.893965,
        "lng": 121.738201,
        "ele": 311.25,
        "distanceKm": 9.27789039619697,
        "gradePct": -2.889742206544849,
        "smoothedEle": 317.98086772878884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89394,
        "lng": 121.738053,
        "ele": 308.75,
        "distanceKm": 9.29307486441447,
        "gradePct": -2.8510800430931442,
        "smoothedEle": 317.4570035752851,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89398,
        "lng": 121.737707,
        "ele": 305.25,
        "distanceKm": 9.328256018638516,
        "gradePct": -2.7895018593583627,
        "smoothedEle": 316.3616949971111,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894081,
        "lng": 121.737493,
        "ele": 304.25,
        "distanceKm": 9.352587762114483,
        "gradePct": -2.608776218045828,
        "smoothedEle": 315.91491593882716,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894171,
        "lng": 121.737454,
        "ele": 304.5,
        "distanceKm": 9.363340671142991,
        "gradePct": -2.4891459917105383,
        "smoothedEle": 315.81813975757063,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894597,
        "lng": 121.737372,
        "ele": 320,
        "distanceKm": 9.411426408853874,
        "gradePct": -2.1611825749478233,
        "smoothedEle": 315.6042344862551,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894775,
        "lng": 121.737059,
        "ele": 314.5,
        "distanceKm": 9.448688021538793,
        "gradePct": -1.6541206393937729,
        "smoothedEle": 315.55102516551744,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894823,
        "lng": 121.736933,
        "ele": 311,
        "distanceKm": 9.46247206067577,
        "gradePct": -1.4646145776692714,
        "smoothedEle": 315.5372411263804,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894926,
        "lng": 121.736838,
        "ele": 310.25,
        "distanceKm": 9.477404837296909,
        "gradePct": -1.1991375735335381,
        "smoothedEle": 315.5993391198739,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89527,
        "lng": 121.73659450000001,
        "ele": 311.74999999999994,
        "distanceKm": 9.522861913590164,
        "gradePct": -0.07735408149594064,
        "smoothedEle": 316.3749236076942,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895614,
        "lng": 121.736351,
        "ele": 313.25,
        "distanceKm": 9.568318952910712,
        "gradePct": 0.9770035470730285,
        "smoothedEle": 317.75000139314824,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896014,
        "lng": 121.736365,
        "ele": 322.5,
        "distanceKm": 9.61281939431229,
        "gradePct": 2.008861990044842,
        "smoothedEle": 319.6199692929113,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896154,
        "lng": 121.736294,
        "ele": 324.25,
        "distanceKm": 9.629954855355315,
        "gradePct": 2.396419289041413,
        "smoothedEle": 320.3706145731018,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896235,
        "lng": 121.73614,
        "ele": 326,
        "distanceKm": 9.647910034345461,
        "gradePct": 2.614159730592187,
        "smoothedEle": 320.78045558693987,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896192,
        "lng": 121.73553,
        "ele": 327,
        "distanceKm": 9.709621318782279,
        "gradePct": 2.770365888602849,
        "smoothedEle": 321.6897455644737,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895983779603167,
        "lng": 121.73512985306955,
        "ele": 325.59874676493956,
        "distanceKm": 9.756150504290146,
        "gradePct": 3.221835918089977,
        "smoothedEle": 323.82557703055056,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895757,
        "lng": 121.734741,
        "ele": 323.75,
        "distanceKm": 9.802778173886649,
        "gradePct": 3.272342957315698,
        "smoothedEle": 325.74270973286866,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895539,
        "lng": 121.73426,
        "ele": 326.5,
        "distanceKm": 9.857011833328848,
        "gradePct": 3.318807821751318,
        "smoothedEle": 327.55218243342017,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895393,
        "lng": 121.733858,
        "ele": 325,
        "distanceKm": 9.900687873580045,
        "gradePct": 3.8831781671157297,
        "smoothedEle": 329.32447131831174,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895329,
        "lng": 121.733507,
        "ele": 324.25,
        "distanceKm": 9.936798830644776,
        "gradePct": 4.102180950240538,
        "smoothedEle": 331.1416381142025,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895657,
        "lng": 121.73311,
        "ele": 334.5,
        "distanceKm": 9.990961558062098,
        "gradePct": 3.9428594035239684,
        "smoothedEle": 333.1425792400478,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895798,
        "lng": 121.732773,
        "ele": 332.5,
        "distanceKm": 10.028393852104895,
        "gradePct": 3.8756818815879086,
        "smoothedEle": 334.34872484944293,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895905,
        "lng": 121.732347,
        "ele": 330,
        "distanceKm": 10.07297802878778,
        "gradePct": 3.769883374713273,
        "smoothedEle": 335.7398263846976,
        "gradeBand": "hard"
      },
      {
        "lat": 24.896199,
        "lng": 121.732179,
        "ele": 339.5,
        "distanceKm": 10.109799920605832,
        "gradePct": 3.4328865462566807,
        "smoothedEle": 336.6487786243652,
        "gradeBand": "hard"
      },
      {
        "lat": 24.896579,
        "lng": 121.732078,
        "ele": 350.75,
        "distanceKm": 10.153264703219461,
        "gradePct": 2.9472620632623534,
        "smoothedEle": 337.6444632473172,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896735,
        "lng": 121.732014,
        "ele": 352.5,
        "distanceKm": 10.171773283775229,
        "gradePct": 2.7900774502179315,
        "smoothedEle": 338.01385907112524,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.89684,
        "lng": 121.731837,
        "ele": 348,
        "distanceKm": 10.19310466625486,
        "gradePct": 2.6144260603830483,
        "smoothedEle": 338.4404867207179,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896837,
        "lng": 121.731769,
        "ele": 345.5,
        "distanceKm": 10.199971350095211,
        "gradePct": 2.5724635508273175,
        "smoothedEle": 338.5778203975249,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896794,
        "lng": 121.731614,
        "ele": 343.5,
        "distanceKm": 10.216319704554847,
        "gradePct": 2.4475532900263577,
        "smoothedEle": 338.8547775275887,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896711,
        "lng": 121.731548,
        "ele": 345,
        "distanceKm": 10.227699148194588,
        "gradePct": 2.261373873562044,
        "smoothedEle": 338.8490878057688,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896393,
        "lng": 121.731499,
        "ele": 341.25,
        "distanceKm": 10.263402896710687,
        "gradePct": 1.8165807549389463,
        "smoothedEle": 339.0742276185374,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896075,
        "lng": 121.731411,
        "ele": 339.25,
        "distanceKm": 10.29985989588937,
        "gradePct": 1.624705942524378,
        "smoothedEle": 339.65281996264724,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895611,
        "lng": 121.731362,
        "ele": 338.25,
        "distanceKm": 10.351690582119707,
        "gradePct": 1.405514273248945,
        "smoothedEle": 340.4194320673091,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895284,
        "lng": 121.731438,
        "ele": 336.75,
        "distanceKm": 10.388850612477038,
        "gradePct": 0.910313390434371,
        "smoothedEle": 340.1760324260302,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894961,
        "lng": 121.731555,
        "ele": 334.25,
        "distanceKm": 10.426655668374725,
        "gradePct": 0.170633127044369,
        "smoothedEle": 339.19087579976747,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894722,
        "lng": 121.731325,
        "ele": 334.25,
        "distanceKm": 10.461932207831032,
        "gradePct": -0.2405625924837986,
        "smoothedEle": 338.58382860007146,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894646,
        "lng": 121.73096,
        "ele": 337.75,
        "distanceKm": 10.499704751156687,
        "gradePct": -0.6631055644522826,
        "smoothedEle": 338.32414660271485,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894519,
        "lng": 121.730642,
        "ele": 340.75,
        "distanceKm": 10.534750423044144,
        "gradePct": -1.0097585235274131,
        "smoothedEle": 338.1493582179671,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894204,
        "lng": 121.730297,
        "ele": 339,
        "distanceKm": 10.584123949497876,
        "gradePct": -0.9497752061804227,
        "smoothedEle": 338.30744183965743,
        "gradeBand": "descent"
      },
      {
        "lat": 24.893998,
        "lng": 121.729812,
        "ele": 338.25,
        "distanceKm": 10.638140144492391,
        "gradePct": 0.6186413371095818,
        "smoothedEle": 340.2305308388882,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.893994,
        "lng": 121.729423,
        "ele": 338.5,
        "distanceKm": 10.677378659255837,
        "gradePct": 1.5532290713777341,
        "smoothedEle": 341.58409412234374,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.89411,
        "lng": 121.728854,
        "ele": 340.75,
        "distanceKm": 10.736201716658346,
        "gradePct": 2.0508204431375603,
        "smoothedEle": 342.2556458404012,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894152,
        "lng": 121.728498,
        "ele": 338.25,
        "distanceKm": 10.77241160149525,
        "gradePct": 2.071983716297815,
        "smoothedEle": 342.41390880340384,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894313,
        "lng": 121.72813,
        "ele": 340.5,
        "distanceKm": 10.81362114063642,
        "gradePct": 1.8196556849474983,
        "smoothedEle": 342.9969146248928,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894614,
        "lng": 121.727993,
        "ele": 352,
        "distanceKm": 10.849831180040463,
        "gradePct": 1.7240811230225634,
        "smoothedEle": 344.08198450813944,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894743,
        "lng": 121.727947,
        "ele": 357,
        "distanceKm": 10.864907053277207,
        "gradePct": 1.7947855961357169,
        "smoothedEle": 344.7434475033609,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.89482,
        "lng": 121.727877,
        "ele": 359.25,
        "distanceKm": 10.876004696745014,
        "gradePct": 1.8648670630318585,
        "smoothedEle": 345.2664323360314,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894861,
        "lng": 121.727775,
        "ele": 359,
        "distanceKm": 10.887257609432304,
        "gradePct": 2.0632873226703414,
        "smoothedEle": 345.8234515140523,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894775,
        "lng": 121.727372,
        "ele": 346.25,
        "distanceKm": 10.929015142987794,
        "gradePct": 2.713306985177165,
        "smoothedEle": 347.60021450218915,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894849,
        "lng": 121.726956,
        "ele": 336.25,
        "distanceKm": 10.971773393406574,
        "gradePct": 3.330483856411474,
        "smoothedEle": 349.0720870927425,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895019,
        "lng": 121.726811,
        "ele": 339,
        "distanceKm": 10.995673687265782,
        "gradePct": 3.540970324863947,
        "smoothedEle": 349.82494634930754,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895134,
        "lng": 121.726756,
        "ele": 341.5,
        "distanceKm": 11.009612580812934,
        "gradePct": 3.700480683930933,
        "smoothedEle": 350.34116548927454,
        "gradeBand": "hard"
      },
      {
        "lat": 24.895626,
        "lng": 121.726585,
        "ele": 351.5,
        "distanceKm": 11.06697493321008,
        "gradePct": 4.0017042733203,
        "smoothedEle": 352.8443064541178,
        "gradeBand": "hard"
      },
      {
        "lat": 24.89603,
        "lng": 121.726475,
        "ele": 360.75,
        "distanceKm": 11.113247545990244,
        "gradePct": 3.107523446257613,
        "smoothedEle": 353.1443577188473,
        "gradeBand": "hard"
      },
      {
        "lat": 24.896157,
        "lng": 121.726424,
        "ele": 363,
        "distanceKm": 11.12827701344681,
        "gradePct": 2.740118640583016,
        "smoothedEle": 353.04904472606034,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896277,
        "lng": 121.726295,
        "ele": 361.25,
        "distanceKm": 11.146914008777705,
        "gradePct": 2.3409611502362195,
        "smoothedEle": 352.8982716935923,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896478,
        "lng": 121.726017,
        "ele": 356.5,
        "distanceKm": 11.18277136335816,
        "gradePct": 2.4364477657906405,
        "smoothedEle": 354.29141867779873,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896783,
        "lng": 121.725638,
        "ele": 356.5,
        "distanceKm": 11.233873826021847,
        "gradePct": 3.4490459236423714,
        "smoothedEle": 358.2979537498459,
        "gradeBand": "hard"
      },
      {
        "lat": 24.897114,
        "lng": 121.725386,
        "ele": 364,
        "distanceKm": 11.278602750997218,
        "gradePct": 4.413101460391703,
        "smoothedEle": 361.7459090816273,
        "gradeBand": "hard"
      },
      {
        "lat": 24.897118,
        "lng": 121.724993,
        "ele": 354.75,
        "distanceKm": 11.318243693373143,
        "gradePct": 4.916916155666018,
        "smoothedEle": 362.9465057565452,
        "gradeBand": "hard"
      },
      {
        "lat": 24.897134,
        "lng": 121.7248,
        "ele": 351,
        "distanceKm": 11.337791033801025,
        "gradePct": 5.131584139897929,
        "smoothedEle": 363.23524471379517,
        "gradeBand": "hard"
      },
      {
        "lat": 24.897204,
        "lng": 121.724691,
        "ele": 351,
        "distanceKm": 11.351261384882203,
        "gradePct": 5.063089543254552,
        "smoothedEle": 363.193357102948,
        "gradeBand": "hard"
      },
      {
        "lat": 24.897347,
        "lng": 121.724642,
        "ele": 355,
        "distanceKm": 11.367912624142265,
        "gradePct": 4.685502084383546,
        "smoothedEle": 363.0851240477577,
        "gradeBand": "hard"
      },
      {
        "lat": 24.897869,
        "lng": 121.724508,
        "ele": 370,
        "distanceKm": 11.427509192669174,
        "gradePct": 2.8247131791607485,
        "smoothedEle": 363.4483801496717,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.89819,
        "lng": 121.724477,
        "ele": 381,
        "distanceKm": 11.463339496199007,
        "gradePct": 1.8071066578592996,
        "smoothedEle": 364.18354547780655,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898293,
        "lng": 121.72443,
        "ele": 383.25,
        "distanceKm": 11.475734860124994,
        "gradePct": 1.4565186136384847,
        "smoothedEle": 364.43787326435216,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898354,
        "lng": 121.72436,
        "ele": 383.25,
        "distanceKm": 11.485525383832432,
        "gradePct": 1.3448025296115182,
        "smoothedEle": 364.64517842896987,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898383,
        "lng": 121.724258,
        "ele": 381,
        "distanceKm": 11.496306661307834,
        "gradePct": 1.2974361492769664,
        "smoothedEle": 364.87697589469104,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898383,
        "lng": 121.724141,
        "ele": 377,
        "distanceKm": 11.508107299229685,
        "gradePct": 1.2315737383098666,
        "smoothedEle": 365.1026544492086,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898206,
        "lng": 121.723602,
        "ele": 360.75,
        "distanceKm": 11.56592399480644,
        "gradePct": 1.1211430050447615,
        "smoothedEle": 365.34033614853007,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898206,
        "lng": 121.723485,
        "ele": 358.75,
        "distanceKm": 11.577724649648793,
        "gradePct": 1.1729692840056358,
        "smoothedEle": 365.49086938359943,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898239,
        "lng": 121.723381,
        "ele": 357.75,
        "distanceKm": 11.588837423581031,
        "gradePct": 1.2491317674399385,
        "smoothedEle": 365.7109295077071,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898292,
        "lng": 121.723315,
        "ele": 357.5,
        "distanceKm": 11.597728099607133,
        "gradePct": 1.3109430724050288,
        "smoothedEle": 365.8887430282291,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898369,
        "lng": 121.723279,
        "ele": 357.5,
        "distanceKm": 11.607028214037808,
        "gradePct": 1.3756009462941612,
        "smoothedEle": 366.0747453168426,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898771,
        "lng": 121.723263,
        "ele": 365.25,
        "distanceKm": 11.651757756524228,
        "gradePct": 1.3083444808339142,
        "smoothedEle": 366.56260057624763,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.89920707524057,
        "lng": 121.723094117062,
        "ele": 366.75898828240025,
        "distanceKm": 11.703151951403262,
        "gradePct": 0.3061472457165461,
        "smoothedEle": 365.62018154399715,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.89963,
        "lng": 121.722882,
        "ele": 367.25,
        "distanceKm": 11.754816789089485,
        "gradePct": -0.766256540305622,
        "smoothedEle": 363.7621618708687,
        "gradeBand": "descent"
      },
      {
        "lat": 24.899964,
        "lng": 121.722626,
        "ele": 361.25,
        "distanceKm": 11.800049347953276,
        "gradePct": -1.3723541680065856,
        "smoothedEle": 363.1904596591388,
        "gradeBand": "descent"
      },
      {
        "lat": 24.900316,
        "lng": 121.72243,
        "ele": 361,
        "distanceKm": 11.843898839819381,
        "gradePct": -1.4968875527111773,
        "smoothedEle": 363.48310999880033,
        "gradeBand": "descent"
      },
      {
        "lat": 24.900798,
        "lng": 121.722089,
        "ele": 362,
        "distanceKm": 11.90758080390129,
        "gradePct": -1.1661896486822385,
        "smoothedEle": 363.1285276715203,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901126,
        "lng": 121.721898,
        "ele": 363,
        "distanceKm": 11.948827659769446,
        "gradePct": -0.8382951916514715,
        "smoothedEle": 362.30095821091373,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901454,
        "lng": 121.721707,
        "ele": 364,
        "distanceKm": 11.99007449172867,
        "gradePct": -0.9663959663209346,
        "smoothedEle": 361.38374167651307,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901608,
        "lng": 121.72151,
        "ele": 366,
        "distanceKm": 12.016304393367575,
        "gradePct": -1.2777796639752852,
        "smoothedEle": 360.74338607091437,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901628,
        "lng": 121.721447,
        "ele": 366.25,
        "distanceKm": 12.02303635802379,
        "gradePct": -1.396174636645076,
        "smoothedEle": 360.55152507821225,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901661,
        "lng": 121.721312,
        "ele": 366.25,
        "distanceKm": 12.03713790820758,
        "gradePct": -1.585949373632451,
        "smoothedEle": 360.2660889742086,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901656,
        "lng": 121.721178,
        "ele": 365,
        "distanceKm": 12.050664241099245,
        "gradePct": -1.7012678203349543,
        "smoothedEle": 360.0429044814961,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901601,
        "lng": 121.720828,
        "ele": 361.25,
        "distanceKm": 12.08649022331579,
        "gradePct": -1.7771921497078218,
        "smoothedEle": 359.69157610609,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901637,
        "lng": 121.720363,
        "ele": 357.25,
        "distanceKm": 12.13355949316079,
        "gradePct": -1.4671484482808859,
        "smoothedEle": 359.6729990494066,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901896,
        "lng": 121.720146,
        "ele": 356,
        "distanceKm": 12.169731471460837,
        "gradePct": -1.0491194905161516,
        "smoothedEle": 359.73787573028136,
        "gradeBand": "descent"
      },
      {
        "lat": 24.90246,
        "lng": 121.719956,
        "ele": 355.75,
        "distanceKm": 12.235307865056503,
        "gradePct": -0.6026072696260222,
        "smoothedEle": 359.09791719836863,
        "gradeBand": "descent"
      },
      {
        "lat": 24.902876,
        "lng": 121.720101,
        "ele": 353,
        "distanceKm": 12.283821696986319,
        "gradePct": -0.2808801985514161,
        "smoothedEle": 359.15598467804415,
        "gradeBand": "descent"
      },
      {
        "lat": 24.903236,
        "lng": 121.720722,
        "ele": 360.5,
        "distanceKm": 12.35815311411831,
        "gradePct": 0.5857924178392032,
        "smoothedEle": 360.88869406576634,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.903405,
        "lng": 121.721012,
        "ele": 363.25,
        "distanceKm": 12.392918033744197,
        "gradePct": 1.5065506148992593,
        "smoothedEle": 362.52469982671914,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.903737,
        "lng": 121.72132,
        "ele": 358.5,
        "distanceKm": 12.441165274466877,
        "gradePct": 3.02018504782772,
        "smoothedEle": 365.14529818119496,
        "gradeBand": "hard"
      },
      {
        "lat": 24.903838,
        "lng": 121.721463,
        "ele": 358,
        "distanceKm": 12.459444592274401,
        "gradePct": 3.4862390440278954,
        "smoothedEle": 366.09928516919405,
        "gradeBand": "hard"
      },
      {
        "lat": 24.903986,
        "lng": 121.72197299999999,
        "ele": 366.125,
        "distanceKm": 12.513449492008217,
        "gradePct": 4.422076674350437,
        "smoothedEle": 368.69077948836,
        "gradeBand": "hard"
      },
      {
        "lat": 24.904134,
        "lng": 121.722483,
        "ele": 374.25,
        "distanceKm": 12.567454332992282,
        "gradePct": 4.553742415890002,
        "smoothedEle": 370.4338858684082,
        "gradeBand": "hard"
      },
      {
        "lat": 24.90426,
        "lng": 121.722837,
        "ele": 378.75,
        "distanceKm": 12.60580778352911,
        "gradePct": 3.7652681533109975,
        "smoothedEle": 370.75535611056654,
        "gradeBand": "hard"
      },
      {
        "lat": 24.904486,
        "lng": 121.723183,
        "ele": 383.75,
        "distanceKm": 12.648810649959396,
        "gradePct": 2.787891687146593,
        "smoothedEle": 371.1200892654601,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.904553,
        "lng": 121.723195,
        "ele": 384,
        "distanceKm": 12.656358383519871,
        "gradePct": 2.613578970725579,
        "smoothedEle": 371.165375666823,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.904659,
        "lng": 121.723178,
        "ele": 383.75,
        "distanceKm": 12.668269110802507,
        "gradePct": 2.3218956733136986,
        "smoothedEle": 371.1665323457124,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.904816,
        "lng": 121.723032,
        "ele": 382,
        "distanceKm": 12.691107438458571,
        "gradePct": 1.8595761924664838,
        "smoothedEle": 371.3378198031329,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.905043,
        "lng": 121.722624,
        "ele": 379.25,
        "distanceKm": 12.739381062908143,
        "gradePct": 1.1633950645394049,
        "smoothedEle": 371.8545591512784,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.904988,
        "lng": 121.722056,
        "ele": 368.25,
        "distanceKm": 12.796992080452446,
        "gradePct": 0.37711400896609026,
        "smoothedEle": 371.4356928315441,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.905047,
        "lng": 121.721675,
        "ele": 364,
        "distanceKm": 12.835973756649407,
        "gradePct": -0.25105335625050973,
        "smoothedEle": 370.5091051458315,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905194,
        "lng": 121.721308,
        "ele": 366.25,
        "distanceKm": 12.876435984142082,
        "gradePct": -0.9347292300285834,
        "smoothedEle": 369.35832543570206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905214,
        "lng": 121.720682,
        "ele": 362.25,
        "distanceKm": 12.939610106606038,
        "gradePct": -2.454383784983813,
        "smoothedEle": 366.9441262975702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905342,
        "lng": 121.720214,
        "ele": 365.5,
        "distanceKm": 12.988909289149564,
        "gradePct": -3.2135123906248397,
        "smoothedEle": 365.0674347444188,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905293,
        "lng": 121.71981,
        "ele": 362.5,
        "distanceKm": 13.030017185475051,
        "gradePct": -3.5690624989453696,
        "smoothedEle": 363.5125668121812,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905292,
        "lng": 121.719677,
        "ele": 361.75,
        "distanceKm": 13.043431295776648,
        "gradePct": -3.542209212679195,
        "smoothedEle": 363.2125880485283,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905347,
        "lng": 121.719521,
        "ele": 362,
        "distanceKm": 13.06031142799944,
        "gradePct": -3.470978716110847,
        "smoothedEle": 362.8749639136327,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905538,
        "lng": 121.719262,
        "ele": 363.75,
        "distanceKm": 13.093977215681798,
        "gradePct": -2.9540921402864164,
        "smoothedEle": 362.77980297846335,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905668,
        "lng": 121.719137,
        "ele": 365,
        "distanceKm": 13.113157632482952,
        "gradePct": -2.563936909367138,
        "smoothedEle": 362.82713379762026,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905921,
        "lng": 121.719063,
        "ele": 365.25,
        "distanceKm": 13.142263109905349,
        "gradePct": -2.018643624261849,
        "smoothedEle": 362.8058461192367,
        "gradeBand": "descent"
      },
      {
        "lat": 24.906314,
        "lng": 121.71936,
        "ele": 362.5,
        "distanceKm": 13.195243090155943,
        "gradePct": -0.908912228981794,
        "smoothedEle": 363.01004015627836,
        "gradeBand": "descent"
      },
      {
        "lat": 24.90692,
        "lng": 121.719591,
        "ele": 357.25,
        "distanceKm": 13.266540984234993,
        "gradePct": 0.06676424410017058,
        "smoothedEle": 362.9908837124818,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.90702,
        "lng": 121.719678,
        "ele": 356.75,
        "distanceKm": 13.280705391913456,
        "gradePct": 0.08678305805929684,
        "smoothedEle": 362.9908837124817,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.907063,
        "lng": 121.719746,
        "ele": 357.25,
        "distanceKm": 13.289065653072193,
        "gradePct": 0.1003548259352275,
        "smoothedEle": 362.9943958311513,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.907086,
        "lng": 121.719829,
        "ele": 358.25,
        "distanceKm": 13.297818428920838,
        "gradePct": 0.10912159690676088,
        "smoothedEle": 363.0075249949242,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.907126,
        "lng": 121.720236,
        "ele": 365,
        "distanceKm": 13.33910588498123,
        "gradePct": 0.17857970775708118,
        "smoothedEle": 363.1653147217054,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.907166,
        "lng": 121.720365,
        "ele": 366.25,
        "distanceKm": 13.352855211856477,
        "gradePct": 0.18900718144519213,
        "smoothedEle": 363.2246842810022,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.907224,
        "lng": 121.720439,
        "ele": 366,
        "distanceKm": 13.362718872256684,
        "gradePct": 0.19061663815912835,
        "smoothedEle": 363.2659194531678,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.9075135,
        "lng": 121.7207595,
        "ele": 365.5,
        "distanceKm": 13.408337468209394,
        "gradePct": 0.26399363182574215,
        "smoothedEle": 363.53450919936427,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.907803,
        "lng": 121.72108,
        "ele": 365,
        "distanceKm": 13.453956010427369,
        "gradePct": 0.5882577104045218,
        "smoothedEle": 364.17078048622614,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.908029000000003,
        "lng": 121.72138600000001,
        "ele": 363.74999999999994,
        "distanceKm": 13.493754398904024,
        "gradePct": 0.6665105724199544,
        "smoothedEle": 364.3344500947389,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.908255,
        "lng": 121.721692,
        "ele": 362.5,
        "distanceKm": 13.533552743547974,
        "gradePct": 0.6050441924832647,
        "smoothedEle": 364.3541804702312,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.908567,
        "lng": 121.72192,
        "ele": 364.75,
        "distanceKm": 13.575174015201453,
        "gradePct": 0.3627611973705042,
        "smoothedEle": 364.0647743039503,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.908934,
        "lng": 121.721864,
        "ele": 367,
        "distanceKm": 13.616371561601987,
        "gradePct": -0.07332565027729769,
        "smoothedEle": 363.49991459096015,
        "gradeBand": "descent"
      },
      {
        "lat": 24.909144,
        "lng": 121.721459,
        "ele": 369.75,
        "distanceKm": 13.66342013449199,
        "gradePct": -0.5153480687494341,
        "smoothedEle": 363.1790052583385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.909132,
        "lng": 121.721292,
        "ele": 370.25,
        "distanceKm": 13.680315086926733,
        "gradePct": -0.5669829988149239,
        "smoothedEle": 363.145215353469,
        "gradeBand": "descent"
      },
      {
        "lat": 24.908815,
        "lng": 121.720751,
        "ele": 360.75,
        "distanceKm": 13.745271583427085,
        "gradePct": -0.6078058872885799,
        "smoothedEle": 363.0570838109319,
        "gradeBand": "descent"
      },
      {
        "lat": 24.908675,
        "lng": 121.720421,
        "ele": 354,
        "distanceKm": 13.7820135195964,
        "gradePct": -0.5303425199639397,
        "smoothedEle": 362.9103127936481,
        "gradeBand": "descent"
      },
      {
        "lat": 24.90881,
        "lng": 121.719999,
        "ele": 357.25,
        "distanceKm": 13.82714270917193,
        "gradePct": -0.4223088524842936,
        "smoothedEle": 362.5818289449698,
        "gradeBand": "descent"
      },
      {
        "lat": 24.9089925,
        "lng": 121.71959799999999,
        "ele": 360.875,
        "distanceKm": 13.872390061093203,
        "gradePct": -0.6014906401784422,
        "smoothedEle": 361.9580841247792,
        "gradeBand": "descent"
      },
      {
        "lat": 24.909175,
        "lng": 121.719197,
        "ele": 364.5,
        "distanceKm": 13.917637359548168,
        "gradePct": -0.8106851801179318,
        "smoothedEle": 361.47320695648034,
        "gradeBand": "descent"
      },
      {
        "lat": 24.90927,
        "lng": 121.718671,
        "ele": 363.75,
        "distanceKm": 13.97172668657449,
        "gradePct": -1.0345297101785924,
        "smoothedEle": 360.882345626576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.909498,
        "lng": 121.718172,
        "ele": 360.75,
        "distanceKm": 14.028076723215053,
        "gradePct": -0.8006324088707714,
        "smoothedEle": 360.9676885356932,
        "gradeBand": "descent"
      },
      {
        "lat": 24.909922,
        "lng": 121.717816,
        "ele": 359,
        "distanceKm": 14.087337437370826,
        "gradePct": -0.2288186237097997,
        "smoothedEle": 361.3402684417298,
        "gradeBand": "descent"
      },
      {
        "lat": 24.91008,
        "lng": 121.717768,
        "ele": 359,
        "distanceKm": 14.10556097108087,
        "gradePct": -0.12484557017600695,
        "smoothedEle": 361.35292829473474,
        "gradeBand": "descent"
      },
      {
        "lat": 24.910186,
        "lng": 121.717777,
        "ele": 359.75,
        "distanceKm": 14.117382545751246,
        "gradePct": -0.12821368985930848,
        "smoothedEle": 361.21951020149544,
        "gradeBand": "descent"
      },
      {
        "lat": 24.910332,
        "lng": 121.717894,
        "ele": 362.75,
        "distanceKm": 14.137452091152388,
        "gradePct": -0.23687853902606631,
        "smoothedEle": 360.78299758902057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.910404,
        "lng": 121.717962,
        "ele": 364,
        "distanceKm": 14.147993747765454,
        "gradePct": -0.30474418310851203,
        "smoothedEle": 360.53211128621183,
        "gradeBand": "descent"
      },
      {
        "lat": 24.910513,
        "lng": 121.717987,
        "ele": 364.75,
        "distanceKm": 14.160373470326462,
        "gradePct": -0.4656215310048156,
        "smoothedEle": 360.07512289944196,
        "gradeBand": "descent"
      },
      {
        "lat": 24.910608,
        "lng": 121.717987,
        "ele": 364.75,
        "distanceKm": 14.170937002948445,
        "gradePct": -0.7327531671671775,
        "smoothedEle": 359.42546564318997,
        "gradeBand": "descent"
      },
      {
        "lat": 24.910673,
        "lng": 121.717953,
        "ele": 364.5,
        "distanceKm": 14.178936799704985,
        "gradePct": -0.9798936499381091,
        "smoothedEle": 358.93347814266275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.910787,
        "lng": 121.717697,
        "ele": 362.25,
        "distanceKm": 14.207698516196412,
        "gradePct": -1.884393104754572,
        "smoothedEle": 357.1680392500754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.91077,
        "lng": 121.717512,
        "ele": 360.25,
        "distanceKm": 14.226451287503052,
        "gradePct": -2.6018226943851155,
        "smoothedEle": 355.76158140207747,
        "gradeBand": "descent"
      },
      {
        "lat": 24.91090014506027,
        "lng": 121.71694986397887,
        "ele": 359.0616558541167,
        "distanceKm": 14.284960597805112,
        "gradePct": -4.843526383162885,
        "smoothedEle": 351.6382721723654,
        "gradeBand": "descent"
      },
      {
        "lat": 24.911046,
        "lng": 121.716392,
        "ele": 358.75,
        "distanceKm": 14.343512109348968,
        "gradePct": -5.98788988937644,
        "smoothedEle": 348.6629923231266,
        "gradeBand": "descent"
      },
      {
        "lat": 24.911121,
        "lng": 121.716022,
        "ele": 350,
        "distanceKm": 14.381747107766078,
        "gradePct": -5.624775868466336,
        "smoothedEle": 347.51142532594633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.911026,
        "lng": 121.715525,
        "ele": 333.75,
        "distanceKm": 14.43297051396373,
        "gradePct": -5.005055937753486,
        "smoothedEle": 345.2920420184163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.911034,
        "lng": 121.715056,
        "ele": 326.25,
        "distanceKm": 14.480277442686807,
        "gradePct": -4.567994181416411,
        "smoothedEle": 342.83231840785186,
        "gradeBand": "descent"
      },
      {
        "lat": 24.911243,
        "lng": 121.714792,
        "ele": 326.75,
        "distanceKm": 14.515617814110618,
        "gradePct": -4.508093680221764,
        "smoothedEle": 341.0642463291492,
        "gradeBand": "descent"
      },
      {
        "lat": 24.911359,
        "lng": 121.71471,
        "ele": 327.5,
        "distanceKm": 14.530939760067609,
        "gradePct": -4.508542394725412,
        "smoothedEle": 340.28476819650257,
        "gradeBand": "descent"
      },
      {
        "lat": 24.911498,
        "lng": 121.7147,
        "ele": 330.25,
        "distanceKm": 14.546428742878517,
        "gradePct": -4.5391782015687046,
        "smoothedEle": 339.4967923459198,
        "gradeBand": "descent"
      },
      {
        "lat": 24.911635,
        "lng": 121.714746,
        "ele": 334.5,
        "distanceKm": 14.562353170380659,
        "gradePct": -4.7157743116081745,
        "smoothedEle": 338.6639860047572,
        "gradeBand": "descent"
      },
      {
        "lat": 24.911984,
        "lng": 121.714965,
        "ele": 343.5,
        "distanceKm": 14.607004931617354,
        "gradePct": -5.078096702598618,
        "smoothedEle": 336.2608729782033,
        "gradeBand": "descent"
      },
      {
        "lat": 24.912086,
        "lng": 121.715012,
        "ele": 345.75,
        "distanceKm": 14.619297422535258,
        "gradePct": -5.100714607554256,
        "smoothedEle": 335.6830339859521,
        "gradeBand": "descent"
      },
      {
        "lat": 24.912194,
        "lng": 121.715003,
        "ele": 346.25,
        "distanceKm": 14.631340741883461,
        "gradePct": -5.074655737126439,
        "smoothedEle": 335.2133445313721,
        "gradeBand": "descent"
      },
      {
        "lat": 24.912273,
        "lng": 121.714965,
        "ele": 345.25,
        "distanceKm": 14.640924690239759,
        "gradePct": -5.019447051209074,
        "smoothedEle": 334.8395705454766,
        "gradeBand": "descent"
      },
      {
        "lat": 24.912597,
        "lng": 121.714631,
        "ele": 336.75,
        "distanceKm": 14.6902454235838,
        "gradePct": -4.095925789705646,
        "smoothedEle": 334.14177063496646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.912934500000002,
        "lng": 121.71436824999999,
        "ele": 335.1875,
        "distanceKm": 14.736185774689428,
        "gradePct": -2.8572622277441257,
        "smoothedEle": 334.30336160393256,
        "gradeBand": "descent"
      },
      {
        "lat": 24.913272,
        "lng": 121.71410549999999,
        "ele": 333.625,
        "distanceKm": 14.782126083980257,
        "gradePct": -1.639684435922567,
        "smoothedEle": 334.32045874524533,
        "gradeBand": "descent"
      },
      {
        "lat": 24.9136095,
        "lng": 121.71384275,
        "ele": 332.0625,
        "distanceKm": 14.828066351455654,
        "gradePct": -0.8750150893075984,
        "smoothedEle": 333.5910155794414,
        "gradeBand": "descent"
      },
      {
        "lat": 24.913947,
        "lng": 121.71358,
        "ele": 330.5,
        "distanceKm": 14.874006577116493,
        "gradePct": -1.6967442195602362,
        "smoothedEle": 330.9780327458354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.914404,
        "lng": 121.713215,
        "ele": 332.75,
        "distanceKm": 14.936753702698516,
        "gradePct": -4.380887353707679,
        "smoothedEle": 325.54179825655325,
        "gradeBand": "descent"
      },
      {
        "lat": 24.914694,
        "lng": 121.712682,
        "ele": 327.5,
        "distanceKm": 14.999435889673672,
        "gradePct": -6.676439423356295,
        "smoothedEle": 320.6927334477319,
        "gradeBand": "descent"
      },
      {
        "lat": 24.914889,
        "lng": 121.712346,
        "ele": 325.5,
        "distanceKm": 15.039664162788828,
        "gradePct": -7.385251269287549,
        "smoothedEle": 318.1608540713019,
        "gradeBand": "descent"
      },
      {
        "lat": 24.914992,
        "lng": 121.712103,
        "ele": 323.5,
        "distanceKm": 15.066714192137077,
        "gradePct": -7.324992006345552,
        "smoothedEle": 316.7428241612829,
        "gradeBand": "descent"
      },
      {
        "lat": 24.914983,
        "lng": 121.711927,
        "ele": 317.75,
        "distanceKm": 15.084491381381916,
        "gradePct": -7.113402418084089,
        "smoothedEle": 315.84285395576296,
        "gradeBand": "descent"
      },
      {
        "lat": 24.914992,
        "lng": 121.711337,
        "ele": 301.5,
        "distanceKm": 15.143999280317388,
        "gradePct": -6.1435874517196325,
        "smoothedEle": 312.69410884098977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.915105,
        "lng": 121.710999,
        "ele": 295.75,
        "distanceKm": 15.180327567439248,
        "gradePct": -5.989899049588949,
        "smoothedEle": 310.19114626259386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.915476,
        "lng": 121.71073,
        "ele": 297.75,
        "distanceKm": 15.229701154301516,
        "gradePct": -6.141944954271246,
        "smoothedEle": 306.50401408966064,
        "gradeBand": "descent"
      },
      {
        "lat": 24.91581816804825,
        "lng": 121.71060931924738,
        "ele": 302.5621578112863,
        "distanceKm": 15.269647594833131,
        "gradePct": -5.955915667791565,
        "smoothedEle": 304.68248931421203,
        "gradeBand": "descent"
      },
      {
        "lat": 24.916177,
        "lng": 121.710567,
        "ele": 306.75,
        "distanceKm": 15.309775529591388,
        "gradePct": -5.345755023142307,
        "smoothedEle": 303.8134822208628,
        "gradeBand": "descent"
      },
      {
        "lat": 24.916597,
        "lng": 121.710396,
        "ele": 306,
        "distanceKm": 15.359559521002772,
        "gradePct": -4.248835335951626,
        "smoothedEle": 303.1243617451222,
        "gradeBand": "descent"
      },
      {
        "lat": 24.916838659226773,
        "lng": 121.71012579255459,
        "ele": 300.0731491632737,
        "distanceKm": 15.397829377987055,
        "gradePct": -2.802955106811008,
        "smoothedEle": 303.2782317809729,
        "gradeBand": "descent"
      },
      {
        "lat": 24.917057,
        "lng": 121.709828,
        "ele": 293.25,
        "distanceKm": 15.43644667541823,
        "gradePct": -1.6910391892711005,
        "smoothedEle": 302.8143455059866,
        "gradeBand": "descent"
      },
      {
        "lat": 24.917349,
        "lng": 121.709721,
        "ele": 295,
        "distanceKm": 15.470661673771087,
        "gradePct": -1.344632687253868,
        "smoothedEle": 301.97126313370694,
        "gradeBand": "descent"
      },
      {
        "lat": 24.9176,
        "lng": 121.709996,
        "ele": 307.75,
        "distanceKm": 15.51000686270626,
        "gradePct": -1.6886397380715215,
        "smoothedEle": 300.433000583108,
        "gradeBand": "descent"
      },
      {
        "lat": 24.917694,
        "lng": 121.710071,
        "ele": 312,
        "distanceKm": 15.522908619538773,
        "gradePct": -1.7646446673771328,
        "smoothedEle": 300.102401893946,
        "gradeBand": "descent"
      },
      {
        "lat": 24.917906,
        "lng": 121.710071,
        "ele": 315.75,
        "distanceKm": 15.546481976548021,
        "gradePct": -1.880788910125069,
        "smoothedEle": 299.5438060446476,
        "gradeBand": "descent"
      },
      {
        "lat": 24.917983,
        "lng": 121.710024,
        "ele": 315.75,
        "distanceKm": 15.556268330956499,
        "gradePct": -1.9353859526246777,
        "smoothedEle": 299.29914718443564,
        "gradeBand": "descent"
      },
      {
        "lat": 24.918048,
        "lng": 121.709925,
        "ele": 314.75,
        "distanceKm": 15.568593547456283,
        "gradePct": -2.0980361508699805,
        "smoothedEle": 298.9646121810096,
        "gradeBand": "descent"
      },
      {
        "lat": 24.91811,
        "lng": 121.709731,
        "ele": 311.75,
        "distanceKm": 15.589336467315084,
        "gradePct": -2.447378343490905,
        "smoothedEle": 298.34932799827266,
        "gradeBand": "descent"
      },
      {
        "lat": 24.918165,
        "lng": 121.709383,
        "ele": 305.5,
        "distanceKm": 15.624959085511815,
        "gradePct": -3.2355295147577126,
        "smoothedEle": 296.481279957236,
        "gradeBand": "descent"
      },
      {
        "lat": 24.918242,
        "lng": 121.708802,
        "ele": 289,
        "distanceKm": 15.68417171701285,
        "gradePct": -4.165240043052947,
        "smoothedEle": 293.11258648435626,
        "gradeBand": "descent"
      },
      {
        "lat": 24.918422,
        "lng": 121.708437,
        "ele": 278.75,
        "distanceKm": 15.72606961658657,
        "gradePct": -4.681512680914027,
        "smoothedEle": 290.66447333399265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.918558,
        "lng": 121.708362,
        "ele": 279.75,
        "distanceKm": 15.742978020664857,
        "gradePct": -5.030595509998324,
        "smoothedEle": 289.56564499834934,
        "gradeBand": "descent"
      },
      {
        "lat": 24.918859,
        "lng": 121.708381,
        "ele": 289.75,
        "distanceKm": 15.776502537968442,
        "gradePct": -6.007864563801228,
        "smoothedEle": 286.7142836432627,
        "gradeBand": "descent"
      },
      {
        "lat": 24.918956,
        "lng": 121.708382,
        "ele": 292.75,
        "distanceKm": 15.787288932160225,
        "gradePct": -6.343003417687037,
        "smoothedEle": 285.724055910126,
        "gradeBand": "descent"
      },
      {
        "lat": 24.919032,
        "lng": 121.708365,
        "ele": 294.25,
        "distanceKm": 15.79591189049001,
        "gradePct": -6.560597856868607,
        "smoothedEle": 284.8833174729718,
        "gradeBand": "descent"
      },
      {
        "lat": 24.919084,
        "lng": 121.708325,
        "ele": 294.25,
        "distanceKm": 15.802962008941181,
        "gradePct": -6.719437229144967,
        "smoothedEle": 284.1959309239828,
        "gradeBand": "descent"
      },
      {
        "lat": 24.919129,
        "lng": 121.708263,
        "ele": 293.5,
        "distanceKm": 15.810970054680407,
        "gradePct": -6.902994935734792,
        "smoothedEle": 283.40887405470136,
        "gradeBand": "descent"
      },
      {
        "lat": 24.919161,
        "lng": 121.708169,
        "ele": 291.75,
        "distanceKm": 15.821095144538921,
        "gradePct": -7.128006726973407,
        "smoothedEle": 282.42789134476584,
        "gradeBand": "descent"
      },
      {
        "lat": 24.919166,
        "lng": 121.707591,
        "ele": 274.5,
        "distanceKm": 15.879385146923564,
        "gradePct": -7.966014274809793,
        "smoothedEle": 277.45287292916447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.919297,
        "lng": 121.707257,
        "ele": 267.25,
        "distanceKm": 15.916081668246196,
        "gradePct": -7.982530346817185,
        "smoothedEle": 275.28301296223594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.919595,
        "lng": 121.706877,
        "ele": 264.5,
        "distanceKm": 15.96674181017837,
        "gradePct": -6.763904656381438,
        "smoothedEle": 274.0166536815134,
        "gradeBand": "descent"
      },
      {
        "lat": 24.920104,
        "lng": 121.706541,
        "ele": 267,
        "distanceKm": 16.032707199813043,
        "gradePct": -4.691575450543286,
        "smoothedEle": 272.05365815738037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.92049664698407,
        "lng": 121.70642898430884,
        "ele": 266.4511229257848,
        "distanceKm": 16.07780519649231,
        "gradePct": -4.136297233327,
        "smoothedEle": 269.3151263295487,
        "gradeBand": "descent"
      },
      {
        "lat": 24.920898,
        "lng": 121.706353,
        "ele": 267.75,
        "distanceKm": 16.123086690729256,
        "gradePct": -3.8684154100487684,
        "smoothedEle": 267.37107652863716,
        "gradeBand": "descent"
      },
      {
        "lat": 24.921339,
        "lng": 121.70656,
        "ele": 274.5,
        "distanceKm": 16.176381744657565,
        "gradePct": -3.754148990278579,
        "smoothedEle": 266.22149090200037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.921477,
        "lng": 121.706607,
        "ele": 275,
        "distanceKm": 16.192441939764883,
        "gradePct": -3.641835666348171,
        "smoothedEle": 265.96819888240594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.921591,
        "lng": 121.706575,
        "ele": 273.5,
        "distanceKm": 16.205522461439436,
        "gradePct": -3.525676413442836,
        "smoothedEle": 265.8112677280133,
        "gradeBand": "descent"
      },
      {
        "lat": 24.921697,
        "lng": 121.70648,
        "ele": 271.5,
        "distanceKm": 16.22071128732205,
        "gradePct": -3.402206740337147,
        "smoothedEle": 265.606218578598,
        "gradeBand": "descent"
      },
      {
        "lat": 24.921936,
        "lng": 121.705876,
        "ele": 263.75,
        "distanceKm": 16.287164607318815,
        "gradePct": -2.6605103198478255,
        "smoothedEle": 263.5922823609076,
        "gradeBand": "descent"
      },
      {
        "lat": 24.922143,
        "lng": 121.705577,
        "ele": 261.75,
        "distanceKm": 16.325097535143787,
        "gradePct": -2.568583809930752,
        "smoothedEle": 262.1905345678949,
        "gradeBand": "descent"
      },
      {
        "lat": 24.922422,
        "lng": 121.705427,
        "ele": 261.5,
        "distanceKm": 16.35961204980936,
        "gradePct": -2.6430160416367223,
        "smoothedEle": 261.2971846964512,
        "gradeBand": "descent"
      },
      {
        "lat": 24.922701,
        "lng": 121.705384,
        "ele": 260,
        "distanceKm": 16.39093704188237,
        "gradePct": -2.5796042763101443,
        "smoothedEle": 260.8327247004703,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923045101736875,
        "lng": 121.70545256097954,
        "ele": 259.1878898916453,
        "distanceKm": 16.429819068935533,
        "gradePct": -2.6882690325649983,
        "smoothedEle": 259.9536598232286,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923387,
        "lng": 121.705535,
        "ele": 257.75,
        "distanceKm": 16.468734764272863,
        "gradePct": -2.8791702648430646,
        "smoothedEle": 258.39247718202705,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923773,
        "lng": 121.705642,
        "ele": 248.25,
        "distanceKm": 16.51299149892307,
        "gradePct": -3.1295625451535725,
        "smoothedEle": 256.3787677630546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923859,
        "lng": 121.705749,
        "ele": 246.75,
        "distanceKm": 16.52740908337107,
        "gradePct": -3.0924612586555438,
        "smoothedEle": 255.94578153198353,
        "gradeBand": "descent"
      },
      {
        "lat": 24.92388,
        "lng": 121.705921,
        "ele": 247.25,
        "distanceKm": 16.544909929081047,
        "gradePct": -3.0801477273477613,
        "smoothedEle": 255.51742878547665,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923859,
        "lng": 121.706039,
        "ele": 248,
        "distanceKm": 16.55703592682428,
        "gradePct": -3.049579613433476,
        "smoothedEle": 255.26470405857336,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923753,
        "lng": 121.706249,
        "ele": 251.25,
        "distanceKm": 16.58127144029571,
        "gradePct": -3.073262670223738,
        "smoothedEle": 254.829512573435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923557,
        "lng": 121.706422,
        "ele": 257.5,
        "distanceKm": 16.60918783063998,
        "gradePct": -3.1304035776147545,
        "smoothedEle": 254.1592943207151,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923473,
        "lng": 121.706521,
        "ele": 260.25,
        "distanceKm": 16.622859170560517,
        "gradePct": -3.235614691843506,
        "smoothedEle": 253.6397834037346,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923441,
        "lng": 121.706597,
        "ele": 261.5,
        "distanceKm": 16.631308734665144,
        "gradePct": -3.2785481520966586,
        "smoothedEle": 253.33680253421664,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923442,
        "lng": 121.70674,
        "ele": 262.75,
        "distanceKm": 16.645729236067393,
        "gradePct": -3.2416529858870833,
        "smoothedEle": 252.83208498513795,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923529,
        "lng": 121.706863,
        "ele": 262.25,
        "distanceKm": 16.661459047306696,
        "gradePct": -3.226164204032142,
        "smoothedEle": 252.2320290277117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.923773,
        "lng": 121.706905,
        "ele": 256,
        "distanceKm": 16.688919220533503,
        "gradePct": -3.13419400756116,
        "smoothedEle": 251.20568364037553,
        "gradeBand": "descent"
      },
      {
        "lat": 24.924116,
        "lng": 121.706994,
        "ele": 247.75,
        "distanceKm": 16.728100824104438,
        "gradePct": -2.9601247602630387,
        "smoothedEle": 250.0086008843611,
        "gradeBand": "descent"
      },
      {
        "lat": 24.924266,
        "lng": 121.707144,
        "ele": 246.5,
        "distanceKm": 16.750617248669617,
        "gradePct": -2.9137506261041004,
        "smoothedEle": 249.57097808144493,
        "gradeBand": "descent"
      },
      {
        "lat": 24.924311,
        "lng": 121.707233,
        "ele": 247,
        "distanceKm": 16.76089258235322,
        "gradePct": -2.8379247890856862,
        "smoothedEle": 249.5196014130269,
        "gradeBand": "descent"
      },
      {
        "lat": 24.924328,
        "lng": 121.707407,
        "ele": 250.25,
        "distanceKm": 16.77854009271605,
        "gradePct": -2.7110877407354033,
        "smoothedEle": 249.45638326591973,
        "gradeBand": "descent"
      },
      {
        "lat": 24.924357,
        "lng": 121.707533,
        "ele": 252.5,
        "distanceKm": 16.791648615373827,
        "gradePct": -2.5990493063606075,
        "smoothedEle": 249.3822781640275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.924416,
        "lng": 121.707606,
        "ele": 253.25,
        "distanceKm": 16.80150904811795,
        "gradePct": -2.540249083959859,
        "smoothedEle": 249.26314879085007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.924478,
        "lng": 121.70767,
        "ele": 253.75,
        "distanceKm": 16.81095249087065,
        "gradePct": -2.4782874591304793,
        "smoothedEle": 249.13566231368858,
        "gradeBand": "descent"
      },
      {
        "lat": 24.924591,
        "lng": 121.70772,
        "ele": 252,
        "distanceKm": 16.824491378523323,
        "gradePct": -2.3315320364654832,
        "smoothedEle": 248.9181923131159,
        "gradeBand": "descent"
      },
      {
        "lat": 24.92507,
        "lng": 121.707866,
        "ele": 242.5,
        "distanceKm": 16.879751108010495,
        "gradePct": -2.8657948125754262,
        "smoothedEle": 245.81675936991303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.925368,
        "lng": 121.708046,
        "ele": 240.5,
        "distanceKm": 16.917532820130372,
        "gradePct": -3.692587751309076,
        "smoothedEle": 242.94630076635917,
        "gradeBand": "descent"
      },
      {
        "lat": 24.925732999999997,
        "lng": 121.70835,
        "ele": 243.12499999999991,
        "distanceKm": 16.968394915642545,
        "gradePct": -4.687548930503399,
        "smoothedEle": 240.11762816847988,
        "gradeBand": "descent"
      },
      {
        "lat": 24.926098,
        "lng": 121.708654,
        "ele": 245.75,
        "distanceKm": 17.019256956457053,
        "gradePct": -5.2363464911566,
        "smoothedEle": 238.52957786066074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.926416,
        "lng": 121.708651,
        "ele": 241.25,
        "distanceKm": 17.054618285973067,
        "gradePct": -5.031899422144509,
        "smoothedEle": 237.1635313508147,
        "gradeBand": "descent"
      },
      {
        "lat": 24.926755,
        "lng": 121.708313,
        "ele": 226.75,
        "distanceKm": 17.105437275777863,
        "gradePct": -4.719568481126106,
        "smoothedEle": 234.4261205533714,
        "gradeBand": "descent"
      },
      {
        "lat": 24.927052,
        "lng": 121.708195,
        "ele": 223.75,
        "distanceKm": 17.1405403634065,
        "gradePct": -4.407933116575237,
        "smoothedEle": 232.85088034743725,
        "gradeBand": "descent"
      },
      {
        "lat": 24.9273995,
        "lng": 121.7082605,
        "ele": 226.5,
        "distanceKm": 17.179741069594677,
        "gradePct": -4.131673982324173,
        "smoothedEle": 231.5000226280894,
        "gradeBand": "descent"
      },
      {
        "lat": 24.927747,
        "lng": 121.708326,
        "ele": 229.25,
        "distanceKm": 17.21894177264627,
        "gradePct": -4.203696293809984,
        "smoothedEle": 230.13202616301913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.928114,
        "lng": 121.708443,
        "ele": 233.25,
        "distanceKm": 17.261421529495774,
        "gradePct": -4.347393725284392,
        "smoothedEle": 228.10228104161317,
        "gradeBand": "descent"
      },
      {
        "lat": 24.92841,
        "lng": 121.708433,
        "ele": 232,
        "distanceKm": 17.29435071581957,
        "gradePct": -4.300497557681127,
        "smoothedEle": 226.4223130061389,
        "gradeBand": "descent"
      },
      {
        "lat": 24.928733,
        "lng": 121.70827,
        "ele": 223.25,
        "distanceKm": 17.333848917342202,
        "gradePct": -4.269384703468135,
        "smoothedEle": 224.6123875141128,
        "gradeBand": "descent"
      },
      {
        "lat": 24.92913,
        "lng": 121.708212,
        "ele": 220,
        "distanceKm": 17.378379091861078,
        "gradePct": -4.294441273091878,
        "smoothedEle": 222.95807388269435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.929611,
        "lng": 121.708442,
        "ele": 226.5,
        "distanceKm": 17.43667571855549,
        "gradePct": -4.254327171631588,
        "smoothedEle": 220.77601785960871,
        "gradeBand": "descent"
      },
      {
        "lat": 24.92989,
        "lng": 121.708434,
        "ele": 222.5,
        "distanceKm": 17.467709631827905,
        "gradePct": -4.1312231007821225,
        "smoothedEle": 219.51903095446556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.930214,
        "lng": 121.708312,
        "ele": 218.75,
        "distanceKm": 17.505779217624262,
        "gradePct": -4.137305128990705,
        "smoothedEle": 217.62401468250903,
        "gradeBand": "descent"
      },
      {
        "lat": 24.930507,
        "lng": 121.708181,
        "ele": 219.5,
        "distanceKm": 17.540935314588058,
        "gradePct": -4.364203821179786,
        "smoothedEle": 215.62071740561365,
        "gradeBand": "descent"
      },
      {
        "lat": 24.930716,
        "lng": 121.707919,
        "ele": 215.5,
        "distanceKm": 17.576120849264626,
        "gradePct": -4.582714493751213,
        "smoothedEle": 213.87653950262887,
        "gradeBand": "descent"
      },
      {
        "lat": 24.93075,
        "lng": 121.707587,
        "ele": 206.5,
        "distanceKm": 17.609810442004896,
        "gradePct": -4.428944229863959,
        "smoothedEle": 212.92370282381796,
        "gradeBand": "descent"
      },
      {
        "lat": 24.930771,
        "lng": 121.707527,
        "ele": 205.25,
        "distanceKm": 17.61629545781923,
        "gradePct": -4.379476534403339,
        "smoothedEle": 212.77990259486106,
        "gradeBand": "descent"
      },
      {
        "lat": 24.93085,
        "lng": 121.707404,
        "ele": 204.25,
        "distanceKm": 17.631493774491943,
        "gradePct": -4.264119578994582,
        "smoothedEle": 212.44174004889322,
        "gradeBand": "descent"
      },
      {
        "lat": 24.931216,
        "lng": 121.70717,
        "ele": 208,
        "distanceKm": 17.678536348139453,
        "gradePct": -3.9310222541507893,
        "smoothedEle": 211.11805745197978,
        "gradeBand": "descent"
      },
      {
        "lat": 24.931841,
        "lng": 121.706904,
        "ele": 206,
        "distanceKm": 17.75302943792988,
        "gradePct": -3.0064769276322316,
        "smoothedEle": 209.00824721834857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932187,
        "lng": 121.706846,
        "ele": 202.75,
        "distanceKm": 17.79194489210947,
        "gradePct": -2.524078219357074,
        "smoothedEle": 208.38083451247084,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932275,
        "lng": 121.706869,
        "ele": 203.25,
        "distanceKm": 17.802001130837706,
        "gradePct": -2.464832795225073,
        "smoothedEle": 208.21490657345493,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932345,
        "lng": 121.706917,
        "ele": 204.25,
        "distanceKm": 17.81116685328976,
        "gradePct": -2.3966909391325912,
        "smoothedEle": 208.1002435704303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932377,
        "lng": 121.706955,
        "ele": 205,
        "distanceKm": 17.816395857021693,
        "gradePct": -2.3543995822837984,
        "smoothedEle": 208.0688695480387,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932397,
        "lng": 121.707008,
        "ele": 206.25,
        "distanceKm": 17.822184233289313,
        "gradePct": -2.307369025109389,
        "smoothedEle": 208.03413929043296,
        "gradeBand": "descent"
      },
      {
        "lat": 24.93242,
        "lng": 121.707144,
        "ele": 209,
        "distanceKm": 17.836133875725174,
        "gradePct": -2.1803677883923815,
        "smoothedEle": 207.95044143581782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932429499999998,
        "lng": 121.7076525,
        "ele": 208.875,
        "distanceKm": 17.887417991581508,
        "gradePct": -1.3970867532173705,
        "smoothedEle": 208.07233601971421,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932439,
        "lng": 121.708161,
        "ele": 208.75,
        "distanceKm": 17.93870210348804,
        "gradePct": -0.8525515123353702,
        "smoothedEle": 207.7089262187098,
        "gradeBand": "descent"
      },
      {
        "lat": 24.93238,
        "lng": 121.708506,
        "ele": 208.5,
        "distanceKm": 17.974102477034332,
        "gradePct": -0.7335217208419377,
        "smoothedEle": 207.20145462650504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932242,
        "lng": 121.708938,
        "ele": 211,
        "distanceKm": 18.020285868093698,
        "gradePct": -0.7038881455439447,
        "smoothedEle": 206.63775319051877,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932227,
        "lng": 121.709222,
        "ele": 211.25,
        "distanceKm": 18.048970824481614,
        "gradePct": -0.7473550578600507,
        "smoothedEle": 206.48624280500954,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932283,
        "lng": 121.709324,
        "ele": 212.5,
        "distanceKm": 18.0609938848764,
        "gradePct": -0.8021226295674524,
        "smoothedEle": 206.40528465701547,
        "gradeBand": "descent"
      },
      {
        "lat": 24.932727066162844,
        "lng": 121.70962547116909,
        "ele": 207.66671675819504,
        "distanceKm": 18.11897856968836,
        "gradePct": -1.1657539394317282,
        "smoothedEle": 205.51718337090136,
        "gradeBand": "descent"
      },
      {
        "lat": 24.933181,
        "lng": 121.70991,
        "ele": 202,
        "distanceKm": 18.17703749428493,
        "gradePct": -1.339593023886356,
        "smoothedEle": 204.48644458658154,
        "gradeBand": "descent"
      },
      {
        "lat": 24.933479,
        "lng": 121.710251,
        "ele": 199.5,
        "distanceKm": 18.224789281524572,
        "gradePct": -1.4735666534055323,
        "smoothedEle": 203.66683341194906,
        "gradeBand": "descent"
      },
      {
        "lat": 24.933697,
        "lng": 121.710733,
        "ele": 200.5,
        "distanceKm": 18.27909980687735,
        "gradePct": -1.582497210807651,
        "smoothedEle": 202.9629774817399,
        "gradeBand": "descent"
      },
      {
        "lat": 24.933749,
        "lng": 121.710873,
        "ele": 200.25,
        "distanceKm": 18.294354487138868,
        "gradePct": -1.5329397626306103,
        "smoothedEle": 202.82844962909144,
        "gradeBand": "descent"
      },
      {
        "lat": 24.933926,
        "lng": 121.710959,
        "ele": 200.25,
        "distanceKm": 18.315861629227953,
        "gradePct": -1.4543111186045132,
        "smoothedEle": 202.6563006159471,
        "gradeBand": "descent"
      },
      {
        "lat": 24.934078,
        "lng": 121.710963,
        "ele": 200.25,
        "distanceKm": 18.3327680930003,
        "gradePct": -1.3249429173410239,
        "smoothedEle": 202.6224876884024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.933749,
        "lng": 121.710873,
        "ele": 200.25,
        "distanceKm": 18.37046001711031,
        "gradePct": -0.8680106290641763,
        "smoothedEle": 202.86719539879326,
        "gradeBand": "descent"
      },
      {
        "lat": 24.933479,
        "lng": 121.710251,
        "ele": 199.5,
        "distanceKm": 18.43999270917092,
        "gradePct": 0.08559594937219148,
        "smoothedEle": 203.64099126178894,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.933181,
        "lng": 121.70991,
        "ele": 202,
        "distanceKm": 18.48774449641056,
        "gradePct": 0.7868698385577801,
        "smoothedEle": 204.4604814397333,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.9328005,
        "lng": 121.7096715,
        "ele": 206.75,
        "distanceKm": 18.536411102408618,
        "gradePct": 1.327176542830633,
        "smoothedEle": 205.3004923257499,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.93242,
        "lng": 121.709433,
        "ele": 211.5,
        "distanceKm": 18.585077745093642,
        "gradePct": 1.5589611278047697,
        "smoothedEle": 206.14779131343556,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.932283,
        "lng": 121.709324,
        "ele": 212.5,
        "distanceKm": 18.60386238092464,
        "gradePct": 1.5571857481266191,
        "smoothedEle": 206.35328572496428,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.932227,
        "lng": 121.709222,
        "ele": 211.25,
        "distanceKm": 18.615885441319424,
        "gradePct": 1.530933114251658,
        "smoothedEle": 206.4345793094999,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.932216,
        "lng": 121.709084,
        "ele": 210.75,
        "distanceKm": 18.629853979610836,
        "gradePct": 1.489212655912402,
        "smoothedEle": 206.5065875322358,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.93238,
        "lng": 121.708506,
        "ele": 208.5,
        "distanceKm": 18.690921507037505,
        "gradePct": 1.3323250322700109,
        "smoothedEle": 207.1799683571192,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.932439,
        "lng": 121.708161,
        "ele": 208.75,
        "distanceKm": 18.726321880583797,
        "gradePct": 1.2799414317307527,
        "smoothedEle": 207.68622998244223,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.932429499999998,
        "lng": 121.7076525,
        "ele": 208.875,
        "distanceKm": 18.77760599249033,
        "gradePct": 1.0022186615867419,
        "smoothedEle": 208.02214346804712,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.93242,
        "lng": 121.707144,
        "ele": 209,
        "distanceKm": 18.828890108346663,
        "gradePct": 0.7454658662937588,
        "smoothedEle": 207.99255048031407,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.932397,
        "lng": 121.707008,
        "ele": 206.25,
        "distanceKm": 18.842839750782524,
        "gradePct": 0.7163539811065672,
        "smoothedEle": 208.0824872965706,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.932377,
        "lng": 121.706955,
        "ele": 205,
        "distanceKm": 18.848628127050144,
        "gradePct": 0.7169994603355317,
        "smoothedEle": 208.14760565643277,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.932345,
        "lng": 121.706917,
        "ele": 204.25,
        "distanceKm": 18.853857130782078,
        "gradePct": 0.7182365821038442,
        "smoothedEle": 208.20773919935,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.932275,
        "lng": 121.706869,
        "ele": 203.25,
        "distanceKm": 18.86302285323413,
        "gradePct": 0.7257264427513118,
        "smoothedEle": 208.32378772112693,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.932187,
        "lng": 121.706846,
        "ele": 202.75,
        "distanceKm": 18.873079091962367,
        "gradePct": 0.7533509200239079,
        "smoothedEle": 208.48992504164005,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.931841,
        "lng": 121.706904,
        "ele": 206,
        "distanceKm": 18.91199454614196,
        "gradePct": 0.8333006386451446,
        "smoothedEle": 209.14793569241354,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.931216,
        "lng": 121.70717,
        "ele": 208,
        "distanceKm": 18.986487635932384,
        "gradePct": 1.6558354553755723,
        "smoothedEle": 211.32868931500332,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.93085,
        "lng": 121.707404,
        "ele": 204.25,
        "distanceKm": 19.033530209579894,
        "gradePct": 2.316598591473658,
        "smoothedEle": 212.6556635506358,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.930721,
        "lng": 121.707828,
        "ele": 213,
        "distanceKm": 19.078625824804156,
        "gradePct": 2.5599822939592887,
        "smoothedEle": 213.70367780096345,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.930716,
        "lng": 121.707919,
        "ele": 215.5,
        "distanceKm": 19.0878185211813,
        "gradePct": 2.6186322141011638,
        "smoothedEle": 213.976414401604,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.930681,
        "lng": 121.708029,
        "ele": 218.25,
        "distanceKm": 19.099573195536014,
        "gradePct": 2.723882480235555,
        "smoothedEle": 214.3856714712134,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.930507,
        "lng": 121.708181,
        "ele": 219.5,
        "distanceKm": 19.1242562242938,
        "gradePct": 3.0654233496376233,
        "smoothedEle": 215.6377378212982,
        "gradeBand": "hard"
      },
      {
        "lat": 24.930214,
        "lng": 121.708312,
        "ele": 218.75,
        "distanceKm": 19.159412321257594,
        "gradePct": 3.5682490076962226,
        "smoothedEle": 217.67256897175446,
        "gradeBand": "hard"
      },
      {
        "lat": 24.92989,
        "lng": 121.708434,
        "ele": 222.5,
        "distanceKm": 19.19748190705395,
        "gradePct": 3.9340104310995514,
        "smoothedEle": 219.50683595023503,
        "gradeBand": "hard"
      },
      {
        "lat": 24.929731,
        "lng": 121.708466,
        "ele": 226.25,
        "distanceKm": 19.21545395864213,
        "gradePct": 4.06595759199304,
        "smoothedEle": 220.2776848786655,
        "gradeBand": "hard"
      },
      {
        "lat": 24.929611,
        "lng": 121.708442,
        "ele": 226.5,
        "distanceKm": 19.22901504726355,
        "gradePct": 4.127607037289394,
        "smoothedEle": 220.78351418399689,
        "gradeBand": "hard"
      },
      {
        "lat": 24.92925,
        "lng": 121.708263,
        "ele": 221.5,
        "distanceKm": 19.273027722964994,
        "gradePct": 4.419531248046384,
        "smoothedEle": 222.41264138448895,
        "gradeBand": "hard"
      },
      {
        "lat": 24.92913,
        "lng": 121.708212,
        "ele": 220,
        "distanceKm": 19.287327818903336,
        "gradePct": 4.504244644929843,
        "smoothedEle": 222.97034512608434,
        "gradeBand": "hard"
      },
      {
        "lat": 24.928965,
        "lng": 121.708202,
        "ele": 219.75,
        "distanceKm": 19.305702695438203,
        "gradePct": 4.534653967421905,
        "smoothedEle": 223.76590318472677,
        "gradeBand": "hard"
      },
      {
        "lat": 24.928733,
        "lng": 121.70827,
        "ele": 223.25,
        "distanceKm": 19.332395657312702,
        "gradePct": 4.198840214424209,
        "smoothedEle": 224.50652776696737,
        "gradeBand": "hard"
      },
      {
        "lat": 24.928259,
        "lng": 121.708453,
        "ele": 233.25,
        "distanceKm": 19.38823902216568,
        "gradePct": 4.005415769560869,
        "smoothedEle": 227.07232724774917,
        "gradeBand": "hard"
      },
      {
        "lat": 24.927747,
        "lng": 121.708326,
        "ele": 229.25,
        "distanceKm": 19.44659343008701,
        "gradePct": 4.258577971528795,
        "smoothedEle": 229.95133317223306,
        "gradeBand": "hard"
      },
      {
        "lat": 24.9273995,
        "lng": 121.7082605,
        "ele": 226.5,
        "distanceKm": 19.485794133138604,
        "gradePct": 4.180842391773809,
        "smoothedEle": 231.27221616480742,
        "gradeBand": "hard"
      },
      {
        "lat": 24.927052,
        "lng": 121.708195,
        "ele": 223.75,
        "distanceKm": 19.52499483932678,
        "gradePct": 4.170396336274195,
        "smoothedEle": 232.64197688285714,
        "gradeBand": "hard"
      },
      {
        "lat": 24.926755,
        "lng": 121.708313,
        "ele": 226.75,
        "distanceKm": 19.560097926955418,
        "gradePct": 4.2167560390712575,
        "smoothedEle": 234.212858366216,
        "gradeBand": "hard"
      },
      {
        "lat": 24.926416,
        "lng": 121.708651,
        "ele": 241.25,
        "distanceKm": 19.610916916760214,
        "gradePct": 4.487843265508902,
        "smoothedEle": 237.16686315481587,
        "gradeBand": "hard"
      },
      {
        "lat": 24.926098,
        "lng": 121.708654,
        "ele": 245.75,
        "distanceKm": 19.64627824627623,
        "gradePct": 4.265148085043507,
        "smoothedEle": 238.46607925637346,
        "gradeBand": "hard"
      },
      {
        "lat": 24.925732999999997,
        "lng": 121.70835,
        "ele": 243.12499999999991,
        "distanceKm": 19.697140287090736,
        "gradePct": 4.224475950699259,
        "smoothedEle": 240.11762816847985,
        "gradeBand": "hard"
      },
      {
        "lat": 24.925368,
        "lng": 121.708046,
        "ele": 240.5,
        "distanceKm": 19.74800238260291,
        "gradePct": 4.637362159857206,
        "smoothedEle": 242.9463007663593,
        "gradeBand": "hard"
      },
      {
        "lat": 24.92507,
        "lng": 121.707866,
        "ele": 242.5,
        "distanceKm": 19.785784094722786,
        "gradePct": 5.053070060654779,
        "smoothedEle": 245.81208331422204,
        "gradeBand": "hard"
      },
      {
        "lat": 24.924591,
        "lng": 121.70772,
        "ele": 252,
        "distanceKm": 19.841043824209958,
        "gradePct": 5.320525279753275,
        "smoothedEle": 248.91481110151247,
        "gradeBand": "hard"
      },
      {
        "lat": 24.924478,
        "lng": 121.70767,
        "ele": 253.75,
        "distanceKm": 19.85458271186263,
        "gradePct": 5.198478432784971,
        "smoothedEle": 249.1326916624056,
        "gradeBand": "hard"
      },
      {
        "lat": 24.924416,
        "lng": 121.707606,
        "ele": 253.25,
        "distanceKm": 19.86402615461533,
        "gradePct": 5.108901952425956,
        "smoothedEle": 249.26017813956702,
        "gradeBand": "hard"
      },
      {
        "lat": 24.924357,
        "lng": 121.707533,
        "ele": 252.5,
        "distanceKm": 19.873886587359454,
        "gradePct": 5.008424220322002,
        "smoothedEle": 249.37940225743378,
        "gradeBand": "hard"
      },
      {
        "lat": 24.924328,
        "lng": 121.707407,
        "ele": 250.25,
        "distanceKm": 19.88699511001723,
        "gradePct": 4.832683955814492,
        "smoothedEle": 249.4535705224522,
        "gradeBand": "hard"
      },
      {
        "lat": 24.924311,
        "lng": 121.707233,
        "ele": 247,
        "distanceKm": 19.90464262038006,
        "gradePct": 4.490866057693909,
        "smoothedEle": 249.51659918018072,
        "gradeBand": "hard"
      },
      {
        "lat": 24.924266,
        "lng": 121.707144,
        "ele": 246.5,
        "distanceKm": 19.914917954063664,
        "gradePct": 4.242996029863748,
        "smoothedEle": 249.5923171923054,
        "gradeBand": "hard"
      },
      {
        "lat": 24.924116,
        "lng": 121.706994,
        "ele": 247.75,
        "distanceKm": 19.937434378628843,
        "gradePct": 3.776365258066817,
        "smoothedEle": 249.91129648795294,
        "gradeBand": "hard"
      },
      {
        "lat": 24.923773,
        "lng": 121.706905,
        "ele": 256,
        "distanceKm": 19.976615982199778,
        "gradePct": 2.979333485938394,
        "smoothedEle": 251.07533932161124,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923529,
        "lng": 121.706863,
        "ele": 262.25,
        "distanceKm": 20.004076155426585,
        "gradePct": 2.638514908662524,
        "smoothedEle": 252.1161772442235,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923473,
        "lng": 121.706795,
        "ele": 262.75,
        "distanceKm": 20.01333867826959,
        "gradePct": 2.559097660997674,
        "smoothedEle": 252.47741563510073,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923442,
        "lng": 121.70674,
        "ele": 262.75,
        "distanceKm": 20.019868782479925,
        "gradePct": 2.497157194212784,
        "smoothedEle": 252.72018752403545,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923441,
        "lng": 121.706661,
        "ele": 261.5,
        "distanceKm": 20.02783589234276,
        "gradePct": 2.412912650413,
        "smoothedEle": 252.99903636923474,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923441,
        "lng": 121.706597,
        "ele": 261.5,
        "distanceKm": 20.03428963119436,
        "gradePct": 2.3480024060220983,
        "smoothedEle": 253.23158093458184,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923473,
        "lng": 121.706521,
        "ele": 260.25,
        "distanceKm": 20.042739195298985,
        "gradePct": 2.3052848785203475,
        "smoothedEle": 253.55266437055766,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923557,
        "lng": 121.706422,
        "ele": 257.5,
        "distanceKm": 20.056410535219523,
        "gradePct": 2.457404004907213,
        "smoothedEle": 254.07217528753807,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923753,
        "lng": 121.706249,
        "ele": 251.25,
        "distanceKm": 20.084326925563794,
        "gradePct": 2.649101982770484,
        "smoothedEle": 254.73667785072692,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923859,
        "lng": 121.706039,
        "ele": 248,
        "distanceKm": 20.10856243903522,
        "gradePct": 2.813082146357938,
        "smoothedEle": 255.1716482649235,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.92388,
        "lng": 121.705921,
        "ele": 247.25,
        "distanceKm": 20.120688436778455,
        "gradePct": 2.874975163167615,
        "smoothedEle": 255.42401515608552,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923859,
        "lng": 121.705749,
        "ele": 246.75,
        "distanceKm": 20.138189282488433,
        "gradePct": 2.959464137983499,
        "smoothedEle": 255.85265213666045,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923773,
        "lng": 121.705642,
        "ele": 248.25,
        "distanceKm": 20.15260686693643,
        "gradePct": 2.961997155978832,
        "smoothedEle": 256.28604892805197,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.923644,
        "lng": 121.705577,
        "ele": 251,
        "distanceKm": 20.1683776434794,
        "gradePct": 3.0472492708486634,
        "smoothedEle": 256.9250857787915,
        "gradeBand": "hard"
      },
      {
        "lat": 24.923246404993975,
        "lng": 121.70550109952191,
        "ele": 258.34128740852645,
        "distanceKm": 20.21324587548558,
        "gradePct": 3.270963551761253,
        "smoothedEle": 259.0157234300468,
        "gradeBand": "hard"
      },
      {
        "lat": 24.922852,
        "lng": 121.705406,
        "ele": 260,
        "distanceKm": 20.2581380179389,
        "gradePct": 3.1743050726371793,
        "smoothedEle": 260.46190524381717,
        "gradeBand": "hard"
      },
      {
        "lat": 24.922422,
        "lng": 121.705427,
        "ele": 261.5,
        "distanceKm": 20.305998774089012,
        "gradePct": 3.0404487874608144,
        "smoothedEle": 261.20653408916246,
        "gradeBand": "hard"
      },
      {
        "lat": 24.922272,
        "lng": 121.705492,
        "ele": 261.5,
        "distanceKm": 20.32391974069266,
        "gradePct": 3.057572062272495,
        "smoothedEle": 261.61830153329976,
        "gradeBand": "hard"
      },
      {
        "lat": 24.922143,
        "lng": 121.705577,
        "ele": 261.75,
        "distanceKm": 20.340629766604913,
        "gradePct": 3.0956050486417546,
        "smoothedEle": 262.11722389791333,
        "gradeBand": "hard"
      },
      {
        "lat": 24.921936,
        "lng": 121.705876,
        "ele": 263.75,
        "distanceKm": 20.378562694429885,
        "gradePct": 3.023646500085828,
        "smoothedEle": 263.44695176846955,
        "gradeBand": "hard"
      },
      {
        "lat": 24.921697,
        "lng": 121.70648,
        "ele": 271.5,
        "distanceKm": 20.44501601442665,
        "gradePct": 2.8766367794200494,
        "smoothedEle": 265.79245888325534,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.921591,
        "lng": 121.706575,
        "ele": 273.5,
        "distanceKm": 20.460204840309263,
        "gradePct": 2.7465395863277235,
        "smoothedEle": 265.9871405226225,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.921477,
        "lng": 121.706607,
        "ele": 275,
        "distanceKm": 20.473285361983816,
        "gradePct": 2.7286139815206623,
        "smoothedEle": 266.15479913054,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.921339,
        "lng": 121.70656,
        "ele": 274.5,
        "distanceKm": 20.489345557091134,
        "gradePct": 2.700544729511203,
        "smoothedEle": 266.34852890067197,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.920898,
        "lng": 121.706353,
        "ele": 267.75,
        "distanceKm": 20.542640611019443,
        "gradePct": 2.6869890287286564,
        "smoothedEle": 267.5616915277467,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.92028,
        "lng": 121.70647,
        "ele": 265.75,
        "distanceKm": 20.61236467694499,
        "gradePct": 3.201141778347204,
        "smoothedEle": 271.04229521271964,
        "gradeBand": "hard"
      },
      {
        "lat": 24.919844,
        "lng": 121.706695,
        "ele": 267.75,
        "distanceKm": 20.665892503847786,
        "gradePct": 3.80568737800668,
        "smoothedEle": 273.67141648050665,
        "gradeBand": "hard"
      },
      {
        "lat": 24.919436,
        "lng": 121.707047,
        "ele": 264.75,
        "distanceKm": 20.723496593873683,
        "gradePct": 3.7372328137629287,
        "smoothedEle": 274.600379265554,
        "gradeBand": "hard"
      },
      {
        "lat": 24.919166,
        "lng": 121.707591,
        "ele": 274.5,
        "distanceKm": 20.786033216906514,
        "gradePct": 3.926933315569513,
        "smoothedEle": 277.58170354851916,
        "gradeBand": "hard"
      },
      {
        "lat": 24.919169,
        "lng": 121.708085,
        "ele": 289.5,
        "distanceKm": 20.83585085694448,
        "gradePct": 4.7598970051669935,
        "smoothedEle": 281.7156577295402,
        "gradeBand": "hard"
      },
      {
        "lat": 24.919161,
        "lng": 121.708169,
        "ele": 291.75,
        "distanceKm": 20.84436826328624,
        "gradePct": 4.964966364994996,
        "smoothedEle": 282.5441450998928,
        "gradeBand": "hard"
      },
      {
        "lat": 24.919129,
        "lng": 121.708263,
        "ele": 293.5,
        "distanceKm": 20.85449335314475,
        "gradePct": 5.213511241744716,
        "smoothedEle": 283.5385479450223,
        "gradeBand": "hard"
      },
      {
        "lat": 24.919084,
        "lng": 121.708325,
        "ele": 294.25,
        "distanceKm": 20.862501398883975,
        "gradePct": 5.417248311895994,
        "smoothedEle": 284.3393525189447,
        "gradeBand": "hard"
      },
      {
        "lat": 24.919032,
        "lng": 121.708365,
        "ele": 294.25,
        "distanceKm": 20.869551517335143,
        "gradePct": 5.65697007010609,
        "smoothedEle": 285.04436436406155,
        "gradeBand": "hard"
      },
      {
        "lat": 24.918956,
        "lng": 121.708382,
        "ele": 292.75,
        "distanceKm": 20.87817447566493,
        "gradePct": 6.018588137397408,
        "smoothedEle": 285.90666019704037,
        "gradeBand": "steep"
      },
      {
        "lat": 24.918636,
        "lng": 121.708347,
        "ele": 281.5,
        "distanceKm": 20.91393152445395,
        "gradePct": 7.283826668554353,
        "smoothedEle": 289.0137797792376,
        "gradeBand": "steep"
      },
      {
        "lat": 24.918324,
        "lng": 121.708536,
        "ele": 280,
        "distanceKm": 20.95351508244925,
        "gradePct": 7.744001927234306,
        "smoothedEle": 291.5194621356143,
        "gradeBand": "steep"
      },
      {
        "lat": 24.918221934302114,
        "lng": 121.70895340481133,
        "ele": 293.2997924041308,
        "distanceKm": 20.997110977999178,
        "gradePct": 7.767106679244817,
        "smoothedEle": 294.03516873729365,
        "gradeBand": "steep"
      },
      {
        "lat": 24.918165,
        "lng": 121.709383,
        "ele": 305.5,
        "distanceKm": 21.04089318734166,
        "gradePct": 7.143643605184391,
        "smoothedEle": 296.49341197689034,
        "gradeBand": "steep"
      },
      {
        "lat": 24.91811,
        "lng": 121.709731,
        "ele": 311.75,
        "distanceKm": 21.076515805538392,
        "gradePct": 6.234855803475505,
        "smoothedEle": 298.2105047913375,
        "gradeBand": "steep"
      },
      {
        "lat": 24.918048,
        "lng": 121.709925,
        "ele": 314.75,
        "distanceKm": 21.097258725397193,
        "gradePct": 5.674857673042586,
        "smoothedEle": 298.91470720255666,
        "gradeBand": "hard"
      },
      {
        "lat": 24.917983,
        "lng": 121.710024,
        "ele": 315.75,
        "distanceKm": 21.109583941896975,
        "gradePct": 5.311813910446593,
        "smoothedEle": 299.25962309734086,
        "gradeBand": "hard"
      },
      {
        "lat": 24.917906,
        "lng": 121.710071,
        "ele": 315.75,
        "distanceKm": 21.119370296305455,
        "gradePct": 5.078004173873257,
        "smoothedEle": 299.51406831196124,
        "gradeBand": "hard"
      },
      {
        "lat": 24.917694,
        "lng": 121.710071,
        "ele": 312,
        "distanceKm": 21.142943653314703,
        "gradePct": 4.558988351708551,
        "smoothedEle": 299.96825585484214,
        "gradeBand": "hard"
      },
      {
        "lat": 24.9176,
        "lng": 121.709996,
        "ele": 307.75,
        "distanceKm": 21.155845410147215,
        "gradePct": 4.386666798264899,
        "smoothedEle": 300.4272675832185,
        "gradeBand": "hard"
      },
      {
        "lat": 24.917349,
        "lng": 121.709721,
        "ele": 295,
        "distanceKm": 21.19519059908239,
        "gradePct": 4.015595183166951,
        "smoothedEle": 301.9555433982097,
        "gradeBand": "hard"
      },
      {
        "lat": 24.917057,
        "lng": 121.709828,
        "ele": 293.25,
        "distanceKm": 21.229405597435246,
        "gradePct": 3.5636802077297727,
        "smoothedEle": 302.97577775524053,
        "gradeBand": "hard"
      },
      {
        "lat": 24.916697,
        "lng": 121.710319,
        "ele": 304.5,
        "distanceKm": 21.293077772347555,
        "gradePct": 2.268732455662339,
        "smoothedEle": 303.31023273221325,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.916296,
        "lng": 121.710539,
        "ele": 307.25,
        "distanceKm": 21.342881554718307,
        "gradePct": 1.87832238520108,
        "smoothedEle": 303.7237041724479,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.91577,
        "lng": 121.710615,
        "ele": 302,
        "distanceKm": 21.401870188138965,
        "gradePct": 1.4188758274045818,
        "smoothedEle": 304.9924692916403,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.915238,
        "lng": 121.710881,
        "ele": 296.5,
        "distanceKm": 21.46682395216338,
        "gradePct": 2.88674277070039,
        "smoothedEle": 308.9458131237234,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.915015,
        "lng": 121.711199,
        "ele": 298.5,
        "distanceKm": 21.507361572535263,
        "gradePct": 4.338081295847802,
        "smoothedEle": 312.10497955897097,
        "gradeBand": "hard"
      },
      {
        "lat": 24.914983,
        "lng": 121.711638,
        "ele": 309.25,
        "distanceKm": 21.551775980947795,
        "gradePct": 5.312484126673543,
        "smoothedEle": 314.5399794132739,
        "gradeBand": "hard"
      },
      {
        "lat": 24.914992,
        "lng": 121.712103,
        "ele": 323.5,
        "distanceKm": 21.598680318914386,
        "gradePct": 5.997288581254075,
        "smoothedEle": 316.91843671406394,
        "gradeBand": "hard"
      },
      {
        "lat": 24.914694,
        "lng": 121.712682,
        "ele": 327.5,
        "distanceKm": 21.665817666393547,
        "gradePct": 6.013594496515218,
        "smoothedEle": 320.91175557159613,
        "gradeBand": "steep"
      },
      {
        "lat": 24.914523,
        "lng": 121.713046,
        "ele": 332.75,
        "distanceKm": 21.707158237559145,
        "gradePct": 5.917057066363348,
        "smoothedEle": 323.92324744749857,
        "gradeBand": "hard"
      },
      {
        "lat": 24.914254074265756,
        "lng": 121.71333474374836,
        "ele": 332.0118536060206,
        "distanceKm": 21.74889690549404,
        "gradePct": 6.4269291200313825,
        "smoothedEle": 327.2359936436786,
        "gradeBand": "steep"
      },
      {
        "lat": 24.913947,
        "lng": 121.71358,
        "ele": 330.5,
        "distanceKm": 21.791058900123875,
        "gradePct": 7.206078960186314,
        "smoothedEle": 330.9441225094578,
        "gradeBand": "steep"
      },
      {
        "lat": 24.9136095,
        "lng": 121.71384275,
        "ele": 332.06249999999994,
        "distanceKm": 21.836999125784715,
        "gradePct": 7.219201809918642,
        "smoothedEle": 333.6360369333932,
        "gradeBand": "steep"
      },
      {
        "lat": 24.913272,
        "lng": 121.71410549999999,
        "ele": 333.625,
        "distanceKm": 21.88293939326011,
        "gradePct": 6.153148629029794,
        "smoothedEle": 334.4653007487406,
        "gradeBand": "steep"
      },
      {
        "lat": 24.912934500000002,
        "lng": 121.71436824999999,
        "ele": 335.18750000000006,
        "distanceKm": 21.92887970255094,
        "gradePct": 4.3734553323480885,
        "smoothedEle": 334.3941637905569,
        "gradeBand": "hard"
      },
      {
        "lat": 24.912597,
        "lng": 121.714631,
        "ele": 336.75,
        "distanceKm": 21.97482005365657,
        "gradePct": 2.2822741960834856,
        "smoothedEle": 334.0804715040146,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.912273,
        "lng": 121.714965,
        "ele": 345.25,
        "distanceKm": 22.024140787000608,
        "gradePct": 0.9619640501753999,
        "smoothedEle": 334.80651754534193,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.912194,
        "lng": 121.715003,
        "ele": 346.25,
        "distanceKm": 22.033724735356905,
        "gradePct": 0.8680604239278041,
        "smoothedEle": 335.1802915312376,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.912086,
        "lng": 121.715012,
        "ele": 345.75,
        "distanceKm": 22.045768054705107,
        "gradePct": 0.9278284354947492,
        "smoothedEle": 335.64998098581736,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.911984,
        "lng": 121.714965,
        "ele": 343.5,
        "distanceKm": 22.05806054562301,
        "gradePct": 1.1092034270510038,
        "smoothedEle": 336.23462166480283,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.911763,
        "lng": 121.71482,
        "ele": 337.75,
        "distanceKm": 22.086656397740377,
        "gradePct": 1.6600158171747297,
        "smoothedEle": 337.7795767319775,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.911359,
        "lng": 121.71471,
        "ele": 327.5,
        "distanceKm": 22.13292867142841,
        "gradePct": 2.9151173663833094,
        "smoothedEle": 340.1967511441733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.911112,
        "lng": 121.714925,
        "ele": 326.25,
        "distanceKm": 22.16792116712652,
        "gradePct": 3.9103286586603327,
        "smoothedEle": 341.9482361559142,
        "gradeBand": "hard"
      },
      {
        "lat": 24.911034,
        "lng": 121.715056,
        "ele": 326.25,
        "distanceKm": 22.18372508104442,
        "gradePct": 4.248618954429859,
        "smoothedEle": 342.7087995132133,
        "gradeBand": "hard"
      },
      {
        "lat": 24.910997,
        "lng": 121.715216,
        "ele": 327.75,
        "distanceKm": 22.20037730021844,
        "gradePct": 4.570411521801718,
        "smoothedEle": 343.59752045577795,
        "gradeBand": "hard"
      },
      {
        "lat": 24.911026,
        "lng": 121.715525,
        "ele": 333.75,
        "distanceKm": 22.23170629546325,
        "gradePct": 5.073425392151211,
        "smoothedEle": 345.2484231596875,
        "gradeBand": "hard"
      },
      {
        "lat": 24.911121,
        "lng": 121.716022,
        "ele": 350,
        "distanceKm": 22.282929701660905,
        "gradePct": 4.951568205905705,
        "smoothedEle": 347.481370027026,
        "gradeBand": "hard"
      },
      {
        "lat": 24.911046,
        "lng": 121.716392,
        "ele": 358.75,
        "distanceKm": 22.321164700078015,
        "gradePct": 4.510865334877893,
        "smoothedEle": 348.6039546194002,
        "gradeBand": "hard"
      },
      {
        "lat": 24.910929,
        "lng": 121.7168395,
        "ele": 359,
        "distanceKm": 22.36813277756584,
        "gradePct": 4.416619897651076,
        "smoothedEle": 350.7916597036087,
        "gradeBand": "hard"
      },
      {
        "lat": 24.910812,
        "lng": 121.717287,
        "ele": 359.25,
        "distanceKm": 22.415100896177186,
        "gradePct": 4.812079503952322,
        "smoothedEle": 353.9975493627848,
        "gradeBand": "hard"
      },
      {
        "lat": 24.910787,
        "lng": 121.717697,
        "ele": 362.25,
        "distanceKm": 22.456542739321385,
        "gradePct": 5.352942525314821,
        "smoothedEle": 357.03698629882325,
        "gradeBand": "hard"
      },
      {
        "lat": 24.910673,
        "lng": 121.717953,
        "ele": 364.5,
        "distanceKm": 22.485304455812813,
        "gradePct": 5.734696725556794,
        "smoothedEle": 359.0204865729996,
        "gradeBand": "hard"
      },
      {
        "lat": 24.910608,
        "lng": 121.717987,
        "ele": 364.75,
        "distanceKm": 22.493304252569352,
        "gradePct": 5.877252576626653,
        "smoothedEle": 359.5404733621747,
        "gradeBand": "hard"
      },
      {
        "lat": 24.910404,
        "lng": 121.717962,
        "ele": 364,
        "distanceKm": 22.51612773499814,
        "gradePct": 6.086705101818573,
        "smoothedEle": 360.6294788644894,
        "gradeBand": "steep"
      },
      {
        "lat": 24.910186,
        "lng": 121.717777,
        "ele": 359.75,
        "distanceKm": 22.546716933044443,
        "gradePct": 5.7753382661841135,
        "smoothedEle": 361.3448171879762,
        "gradeBand": "hard"
      },
      {
        "lat": 24.91008,
        "lng": 121.717768,
        "ele": 359,
        "distanceKm": 22.558538507714818,
        "gradePct": 5.581449090494393,
        "smoothedEle": 361.5076706783287,
        "gradeBand": "hard"
      },
      {
        "lat": 24.909922,
        "lng": 121.717816,
        "ele": 359,
        "distanceKm": 22.57676204142486,
        "gradePct": 5.04126575641995,
        "smoothedEle": 361.4631964521246,
        "gradeBand": "hard"
      },
      {
        "lat": 24.909642,
        "lng": 121.718014,
        "ele": 359.75,
        "distanceKm": 22.613749935975378,
        "gradePct": 3.706411615464659,
        "smoothedEle": 361.31816048326584,
        "gradeBand": "hard"
      },
      {
        "lat": 24.909352,
        "lng": 121.718417,
        "ele": 362.5,
        "distanceKm": 22.665631468562637,
        "gradePct": 1.6611319269013962,
        "smoothedEle": 360.986038089546,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.909243,
        "lng": 121.719009,
        "ele": 366.25,
        "distanceKm": 22.72655322230577,
        "gradePct": 0.2484148775869537,
        "smoothedEle": 361.37011202375663,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.909033665065806,
        "lng": 121.71950754963622,
        "ele": 361.6926622660073,
        "distanceKm": 22.781959346088676,
        "gradePct": 0.23731369607119832,
        "smoothedEle": 361.9174443085694,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.90881,
        "lng": 121.719999,
        "ele": 357.25,
        "distanceKm": 22.837412774013693,
        "gradePct": 0.7734244662405018,
        "smoothedEle": 362.7135304979205,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.908675,
        "lng": 121.720421,
        "ele": 354,
        "distanceKm": 22.882541963589222,
        "gradePct": 0.9418831072563058,
        "smoothedEle": 362.9764145041145,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.908815,
        "lng": 121.720751,
        "ele": 360.75,
        "distanceKm": 22.919283899758536,
        "gradePct": 0.8766634677043644,
        "smoothedEle": 363.0776103817161,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.909132,
        "lng": 121.721292,
        "ele": 370.25,
        "distanceKm": 22.984240396258887,
        "gradePct": 0.5585433383324434,
        "smoothedEle": 363.06727760894483,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.909144,
        "lng": 121.721459,
        "ele": 369.75,
        "distanceKm": 23.00113534869363,
        "gradePct": 0.4246006462428242,
        "smoothedEle": 363.0419351802927,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.909028,
        "lng": 121.721747,
        "ele": 367.25,
        "distanceKm": 23.032915823419906,
        "gradePct": 0.3053531738443393,
        "smoothedEle": 363.2596788841654,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.908729,
        "lng": 121.721943,
        "ele": 366,
        "distanceKm": 23.071595476627273,
        "gradePct": 0.38456439708602513,
        "smoothedEle": 363.68177844069936,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.908401,
        "lng": 121.721823,
        "ele": 362.25,
        "distanceKm": 23.110022934409916,
        "gradePct": 0.5138872760602755,
        "smoothedEle": 364.0798780712812,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.908088429542754,
        "lng": 121.72146646654905,
        "ele": 363.42129677680566,
        "distanceKm": 23.160032098286244,
        "gradePct": 0.6100856623122602,
        "smoothedEle": 364.2912998007744,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.907803,
        "lng": 121.72108,
        "ele": 365,
        "distanceKm": 23.210295966340162,
        "gradePct": 0.5235024837393515,
        "smoothedEle": 364.1517040565329,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.9075135,
        "lng": 121.7207595,
        "ele": 365.5,
        "distanceKm": 23.25591450855814,
        "gradePct": -0.05282072298732052,
        "smoothedEle": 363.405015251918,
        "gradeBand": "descent"
      },
      {
        "lat": 24.907224,
        "lng": 121.720439,
        "ele": 366,
        "distanceKm": 23.30153310451085,
        "gradePct": -0.40823634644161333,
        "smoothedEle": 363.17545269191953,
        "gradeBand": "descent"
      },
      {
        "lat": 24.907126,
        "lng": 121.720236,
        "ele": 365,
        "distanceKm": 23.32472571441646,
        "gradePct": -0.5280346553894352,
        "smoothedEle": 363.0859671118203,
        "gradeBand": "descent"
      },
      {
        "lat": 24.907086,
        "lng": 121.719829,
        "ele": 358.25,
        "distanceKm": 23.36601317047685,
        "gradePct": -0.642838900374843,
        "smoothedEle": 362.98901101770014,
        "gradeBand": "descent"
      },
      {
        "lat": 24.907063,
        "lng": 121.719746,
        "ele": 357.25,
        "distanceKm": 23.374765946325496,
        "gradePct": -0.6350609286559767,
        "smoothedEle": 362.98025824185146,
        "gradeBand": "descent"
      },
      {
        "lat": 24.90702,
        "lng": 121.719678,
        "ele": 356.75,
        "distanceKm": 23.383126207484235,
        "gradePct": -0.6276317569303864,
        "smoothedEle": 362.97189798069275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.90692,
        "lng": 121.719591,
        "ele": 357.25,
        "distanceKm": 23.397290615162696,
        "gradePct": -0.6040731178913483,
        "smoothedEle": 362.9796770401225,
        "gradeBand": "descent"
      },
      {
        "lat": 24.906446,
        "lng": 121.719446,
        "ele": 362.5,
        "distanceKm": 23.451988197435053,
        "gradePct": -0.19704049734815568,
        "smoothedEle": 363.07520050547294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.906164,
        "lng": 121.719189,
        "ele": 361.5,
        "distanceKm": 23.492670838818174,
        "gradePct": -0.13654081629292186,
        "smoothedEle": 362.9469678812505,
        "gradeBand": "descent"
      },
      {
        "lat": 24.906025,
        "lng": 121.719092,
        "ele": 363.25,
        "distanceKm": 23.510962781415333,
        "gradePct": -0.13079660693011919,
        "smoothedEle": 362.87747633224774,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905921,
        "lng": 121.719063,
        "ele": 365.25,
        "distanceKm": 23.52289119341002,
        "gradePct": -0.11634616620529001,
        "smoothedEle": 362.860353033092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905785,
        "lng": 121.719084,
        "ele": 366.5,
        "distanceKm": 23.538161314232706,
        "gradePct": -0.09029766924251735,
        "smoothedEle": 362.8738207066278,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905538,
        "lng": 121.719262,
        "ele": 363.75,
        "distanceKm": 23.570973086882773,
        "gradePct": -0.06662797186842818,
        "smoothedEle": 362.85079515755734,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905347,
        "lng": 121.719521,
        "ele": 362,
        "distanceKm": 23.60463887456513,
        "gradePct": -0.015636598391665812,
        "smoothedEle": 362.96123679085264,
        "gradeBand": "descent"
      },
      {
        "lat": 24.905292,
        "lng": 121.719677,
        "ele": 361.75,
        "distanceKm": 23.62151900678792,
        "gradePct": 0.1395545013042186,
        "smoothedEle": 363.30109833208195,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.905358,
        "lng": 121.720047,
        "ele": 365.5,
        "distanceKm": 23.659549977313834,
        "gradePct": 0.7419507397550857,
        "smoothedEle": 364.53526708034855,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.90526,
        "lng": 121.720485,
        "ele": 363.5,
        "distanceKm": 23.705048473366418,
        "gradePct": 1.6717682700701235,
        "smoothedEle": 366.24348147709827,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.905207247562743,
        "lng": 121.72089335128614,
        "ele": 363.6004874514121,
        "distanceKm": 23.74664819438698,
        "gradePct": 2.5432372263075624,
        "smoothedEle": 367.95433952016384,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.905194,
        "lng": 121.721308,
        "ele": 366.25,
        "distanceKm": 23.7884933530845,
        "gradePct": 3.3350130851193405,
        "smoothedEle": 369.57829709023304,
        "gradeBand": "hard"
      },
      {
        "lat": 24.905047,
        "lng": 121.721675,
        "ele": 364,
        "distanceKm": 23.828955580577176,
        "gradePct": 3.577827284170281,
        "smoothedEle": 370.6980821864744,
        "gradeBand": "hard"
      },
      {
        "lat": 24.904988,
        "lng": 121.722056,
        "ele": 368.25,
        "distanceKm": 23.867937256774137,
        "gradePct": 3.387211716782543,
        "smoothedEle": 371.624586010835,
        "gradeBand": "hard"
      },
      {
        "lat": 24.905063,
        "lng": 121.722509,
        "ele": 378.75,
        "distanceKm": 23.914379358588967,
        "gradePct": 2.6657997531606936,
        "smoothedEle": 371.9588292307704,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.904816,
        "lng": 121.723032,
        "ele": 382,
        "distanceKm": 23.973848581775282,
        "gradePct": 1.2263212737972582,
        "smoothedEle": 371.46259462564944,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.904659,
        "lng": 121.723178,
        "ele": 383.75,
        "distanceKm": 23.996686909431347,
        "gradePct": 0.7433691518906782,
        "smoothedEle": 371.2917906383734,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.904553,
        "lng": 121.723195,
        "ele": 384,
        "distanceKm": 24.008597636713983,
        "gradePct": 0.5743809402534643,
        "smoothedEle": 371.28344151747393,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.904486,
        "lng": 121.723183,
        "ele": 383.75,
        "distanceKm": 24.016145370274458,
        "gradePct": 0.4672944487209082,
        "smoothedEle": 371.27815074567485,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.90426,
        "lng": 121.722837,
        "ele": 378.75,
        "distanceKm": 24.059148236704743,
        "gradePct": -0.2510364117372328,
        "smoothedEle": 370.9136186117263,
        "gradeBand": "descent"
      },
      {
        "lat": 24.904134,
        "lng": 121.722483,
        "ele": 374.25,
        "distanceKm": 24.09750168724157,
        "gradePct": -0.693612276111909,
        "smoothedEle": 370.45013629111963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.903986,
        "lng": 121.72197299999999,
        "ele": 366.1249999999997,
        "distanceKm": 24.15150652822564,
        "gradePct": -1.4810606629101013,
        "smoothedEle": 368.68690418839265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.903838,
        "lng": 121.721463,
        "ele": 358,
        "distanceKm": 24.205511427959454,
        "gradePct": -2.6129468268724545,
        "smoothedEle": 366.05971121861086,
        "gradeBand": "descent"
      },
      {
        "lat": 24.903405,
        "lng": 121.721012,
        "ele": 363.25,
        "distanceKm": 24.271747029448413,
        "gradePct": -4.131646573071535,
        "smoothedEle": 362.498075339038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.90321747733704,
        "lng": 121.72068741176201,
        "ele": 360.0274830877566,
        "distanceKm": 24.310560447883592,
        "gradePct": -4.6576145833836495,
        "smoothedEle": 360.70854486559426,
        "gradeBand": "descent"
      },
      {
        "lat": 24.90304,
        "lng": 121.720356,
        "ele": 355.5,
        "distanceKm": 24.349376454626373,
        "gradePct": -4.600348827700985,
        "smoothedEle": 359.55575241226666,
        "gradeBand": "descent"
      },
      {
        "lat": 24.902876,
        "lng": 121.720101,
        "ele": 353,
        "distanceKm": 24.380904011035803,
        "gradePct": -4.0788707358771745,
        "smoothedEle": 359.09905432742147,
        "gradeBand": "descent"
      },
      {
        "lat": 24.902711,
        "lng": 121.719996,
        "ele": 353.25,
        "distanceKm": 24.402088111113017,
        "gradePct": -3.562442685208806,
        "smoothedEle": 359.10136099586737,
        "gradeBand": "descent"
      },
      {
        "lat": 24.90258,
        "lng": 121.719959,
        "ele": 354.75,
        "distanceKm": 24.417125068930808,
        "gradePct": -3.17787853034319,
        "smoothedEle": 359.07946280514426,
        "gradeBand": "descent"
      },
      {
        "lat": 24.90246,
        "lng": 121.719956,
        "ele": 355.75,
        "distanceKm": 24.430471908605284,
        "gradePct": -2.831447099737584,
        "smoothedEle": 359.0546363573598,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901896,
        "lng": 121.720146,
        "ele": 356,
        "distanceKm": 24.49604830220095,
        "gradePct": -0.8651867011138594,
        "smoothedEle": 359.6472680794637,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901637,
        "lng": 121.720363,
        "ele": 357.25,
        "distanceKm": 24.532220280500997,
        "gradePct": -0.2542168340432349,
        "smoothedEle": 359.5568381337136,
        "gradeBand": "descent"
      },
      {
        "lat": 24.901601,
        "lng": 121.720828,
        "ele": 361.25,
        "distanceKm": 24.579289550345997,
        "gradePct": 0.2420057351508271,
        "smoothedEle": 359.6064523582138,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.901656,
        "lng": 121.721178,
        "ele": 365,
        "distanceKm": 24.615115532562545,
        "gradePct": 0.4613281943821351,
        "smoothedEle": 360.0050456642219,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.901661,
        "lng": 121.721312,
        "ele": 366.25,
        "distanceKm": 24.62864186545421,
        "gradePct": 0.5850331180793112,
        "smoothedEle": 360.22810665559166,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.901628,
        "lng": 121.721447,
        "ele": 366.25,
        "distanceKm": 24.642743415638,
        "gradePct": 0.6736908874900133,
        "smoothedEle": 360.51291908231354,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.901608,
        "lng": 121.72151,
        "ele": 366,
        "distanceKm": 24.649475380294216,
        "gradePct": 0.7375190939888537,
        "smoothedEle": 360.7014140926875,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.901454,
        "lng": 121.721707,
        "ele": 364,
        "distanceKm": 24.67570528193312,
        "gradePct": 0.9601595047995521,
        "smoothedEle": 361.38374167651307,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.901126,
        "lng": 121.721898,
        "ele": 363,
        "distanceKm": 24.716952113892344,
        "gradePct": 1.3541845695265002,
        "smoothedEle": 362.3033776892882,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.900798,
        "lng": 121.722089,
        "ele": 362,
        "distanceKm": 24.7581989697605,
        "gradePct": 1.7938692814431143,
        "smoothedEle": 363.17196000901123,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.900316,
        "lng": 121.72243,
        "ele": 361,
        "distanceKm": 24.821880933842408,
        "gradePct": 1.6370091449975124,
        "smoothedEle": 363.3906313042583,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.899964,
        "lng": 121.722626,
        "ele": 361.25,
        "distanceKm": 24.865730425708513,
        "gradePct": 0.9698673696520393,
        "smoothedEle": 363.0639970002845,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.89963,
        "lng": 121.722882,
        "ele": 367.25,
        "distanceKm": 24.910962984572304,
        "gradePct": 0.741880202625171,
        "smoothedEle": 363.65360495402194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.899306999999997,
        "lng": 121.723044,
        "ele": 366.875,
        "distanceKm": 24.95042092843246,
        "gradePct": 1.025512031445178,
        "smoothedEle": 365.05919294073743,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898984,
        "lng": 121.723206,
        "ele": 366.5,
        "distanceKm": 24.989878889996813,
        "gradePct": 1.3798480760077942,
        "smoothedEle": 366.04043875420325,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898477,
        "lng": 121.723267,
        "ele": 359.25,
        "distanceKm": 25.046589518691576,
        "gradePct": 1.4706047904173598,
        "smoothedEle": 366.1477869526317,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898369,
        "lng": 121.723279,
        "ele": 357.5,
        "distanceKm": 25.05865942375377,
        "gradePct": 1.394860023998495,
        "smoothedEle": 365.9063888513878,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898292,
        "lng": 121.723315,
        "ele": 357.5,
        "distanceKm": 25.067959538184443,
        "gradePct": 1.313666502516161,
        "smoothedEle": 365.7203865627745,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898239,
        "lng": 121.723381,
        "ele": 357.75,
        "distanceKm": 25.076850214210545,
        "gradePct": 1.1668146090283966,
        "smoothedEle": 365.54257304225234,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898206,
        "lng": 121.723485,
        "ele": 358.75,
        "distanceKm": 25.087962988142785,
        "gradePct": 0.9865790726939031,
        "smoothedEle": 365.3269573583369,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898313,
        "lng": 121.723978,
        "ele": 370.75,
        "distanceKm": 25.139090730515097,
        "gradePct": 0.23406647475113204,
        "smoothedEle": 365.1237166668043,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.898383,
        "lng": 121.724141,
        "ele": 377,
        "distanceKm": 25.157280447043824,
        "gradePct": -0.13387789797619168,
        "smoothedEle": 364.96202056199513,
        "gradeBand": "descent"
      },
      {
        "lat": 24.898354,
        "lng": 121.72436,
        "ele": 383.25,
        "distanceKm": 25.179602964271574,
        "gradePct": -0.5354910147247002,
        "smoothedEle": 364.71391364301275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.898293,
        "lng": 121.72443,
        "ele": 383.25,
        "distanceKm": 25.18939348797901,
        "gradePct": -0.7885836614393639,
        "smoothedEle": 364.4512003896657,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89819,
        "lng": 121.724477,
        "ele": 381,
        "distanceKm": 25.201788851905,
        "gradePct": -0.9716794264151394,
        "smoothedEle": 364.1196244046455,
        "gradeBand": "descent"
      },
      {
        "lat": 24.897869,
        "lng": 121.724508,
        "ele": 370,
        "distanceKm": 25.237619155434835,
        "gradePct": -1.461889174212052,
        "smoothedEle": 363.20702850088264,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89752,
        "lng": 121.724606,
        "ele": 359.75,
        "distanceKm": 25.277665254730106,
        "gradePct": -1.301732261630865,
        "smoothedEle": 362.923294688878,
        "gradeBand": "descent"
      },
      {
        "lat": 24.897204,
        "lng": 121.724691,
        "ele": 351,
        "distanceKm": 25.31383366088376,
        "gradePct": -1.0378258610928166,
        "smoothedEle": 363.1484657067055,
        "gradeBand": "descent"
      },
      {
        "lat": 24.897134,
        "lng": 121.7248,
        "ele": 351,
        "distanceKm": 25.327304011964937,
        "gradePct": -0.9728497593428108,
        "smoothedEle": 363.2248711791766,
        "gradeBand": "descent"
      },
      {
        "lat": 24.897118,
        "lng": 121.724993,
        "ele": 354.75,
        "distanceKm": 25.346851352392818,
        "gradePct": -1.0515446430592057,
        "smoothedEle": 362.9516399213958,
        "gradeBand": "descent"
      },
      {
        "lat": 24.897144,
        "lng": 121.72519,
        "ele": 360.5,
        "distanceKm": 25.366930230754686,
        "gradePct": -1.1379756714565343,
        "smoothedEle": 362.5788152709309,
        "gradeBand": "descent"
      },
      {
        "lat": 24.897147,
        "lng": 121.725282,
        "ele": 362.75,
        "distanceKm": 25.376215452073417,
        "gradePct": -1.2651151990776033,
        "smoothedEle": 362.2213342501597,
        "gradeBand": "descent"
      },
      {
        "lat": 24.897114,
        "lng": 121.725386,
        "ele": 364,
        "distanceKm": 25.387328313590967,
        "gradePct": -1.4433356065918923,
        "smoothedEle": 361.619944872151,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896981,
        "lng": 121.725528,
        "ele": 361.75,
        "distanceKm": 25.407915714997788,
        "gradePct": -1.8348091095421133,
        "smoothedEle": 360.2939553121229,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896648,
        "lng": 121.725746,
        "ele": 353.5,
        "distanceKm": 25.45098000391178,
        "gradePct": -3.259765338942526,
        "smoothedEle": 356.59283380985545,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896277,
        "lng": 121.726295,
        "ele": 361.25,
        "distanceKm": 25.52003085134562,
        "gradePct": -5.020742148098282,
        "smoothedEle": 353.14213262983344,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896157,
        "lng": 121.726424,
        "ele": 363,
        "distanceKm": 25.538667846676514,
        "gradePct": -4.975018850863723,
        "smoothedEle": 353.1159906485276,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89603,
        "lng": 121.726475,
        "ele": 360.75,
        "distanceKm": 25.55369731413308,
        "gradePct": -4.809070440907322,
        "smoothedEle": 353.2063832093585,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895626,
        "lng": 121.726585,
        "ele": 351.5,
        "distanceKm": 25.599969926913243,
        "gradePct": -3.94649433150532,
        "smoothedEle": 352.9127375053803,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895134,
        "lng": 121.726756,
        "ele": 341.5,
        "distanceKm": 25.65733227931039,
        "gradePct": -2.9551116839277647,
        "smoothedEle": 350.36516605096904,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894849,
        "lng": 121.726956,
        "ele": 336.25,
        "distanceKm": 25.694898582977583,
        "gradePct": -2.6710064398403786,
        "smoothedEle": 349.05606303451725,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894775,
        "lng": 121.727372,
        "ele": 346.25,
        "distanceKm": 25.73765683339636,
        "gradePct": -2.4998337551406085,
        "smoothedEle": 348.11774127941135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894861,
        "lng": 121.727775,
        "ele": 359,
        "distanceKm": 25.77941436695185,
        "gradePct": -3.4858941923412043,
        "smoothedEle": 346.07139457239964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89482,
        "lng": 121.727877,
        "ele": 359.25,
        "distanceKm": 25.79066727963914,
        "gradePct": -3.745577694505655,
        "smoothedEle": 345.4806166563169,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894743,
        "lng": 121.727947,
        "ele": 357,
        "distanceKm": 25.801764923106948,
        "gradePct": -3.914526843475144,
        "smoothedEle": 345.00396461458354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894614,
        "lng": 121.727993,
        "ele": 352,
        "distanceKm": 25.81684079634369,
        "gradePct": -3.881270168872575,
        "smoothedEle": 344.40092968511385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894313,
        "lng": 121.72813,
        "ele": 340.5,
        "distanceKm": 25.853050835747734,
        "gradePct": -3.571653018638427,
        "smoothedEle": 343.4120070866081,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894152,
        "lng": 121.728498,
        "ele": 338.25,
        "distanceKm": 25.8942603748889,
        "gradePct": -3.175485204982448,
        "smoothedEle": 342.72733277203713,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894094,
        "lng": 121.729099,
        "ele": 343.25,
        "distanceKm": 25.95522152751023,
        "gradePct": -2.4118824375916943,
        "smoothedEle": 342.4332106716969,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89397,
        "lng": 121.729683,
        "ele": 336.75,
        "distanceKm": 26.015718165109853,
        "gradePct": -1.6938067654414288,
        "smoothedEle": 341.05822140358447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89414,
        "lng": 121.730162,
        "ele": 340.75,
        "distanceKm": 26.067598256562338,
        "gradePct": -2.0956437469838036,
        "smoothedEle": 338.97902202497556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894421,
        "lng": 121.730555,
        "ele": 339.5,
        "distanceKm": 26.118071811734257,
        "gradePct": -2.101607624358742,
        "smoothedEle": 338.4092333796326,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894646,
        "lng": 121.73096,
        "ele": 337.75,
        "distanceKm": 26.165974189057998,
        "gradePct": -1.7906013406799055,
        "smoothedEle": 338.6076176437252,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894722,
        "lng": 121.731325,
        "ele": 334.25,
        "distanceKm": 26.203746732383653,
        "gradePct": -1.2821039363070998,
        "smoothedEle": 338.7661045458692,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894961,
        "lng": 121.731555,
        "ele": 334.25,
        "distanceKm": 26.23902327183996,
        "gradePct": -0.5048204951562543,
        "smoothedEle": 339.11458122254123,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895284,
        "lng": 121.731438,
        "ele": 336.75,
        "distanceKm": 26.276828327737647,
        "gradePct": 0.6307634176137094,
        "smoothedEle": 340.1363519251251,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895611,
        "lng": 121.731362,
        "ele": 338.25,
        "distanceKm": 26.313988358094978,
        "gradePct": 0.9846719150210141,
        "smoothedEle": 340.4246747256812,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896075,
        "lng": 121.731411,
        "ele": 339.25,
        "distanceKm": 26.365819044325313,
        "gradePct": 0.4590171386900879,
        "smoothedEle": 339.5250094003091,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896393,
        "lng": 121.731499,
        "ele": 341.25,
        "distanceKm": 26.402276043503996,
        "gradePct": 0.09727843705812268,
        "smoothedEle": 338.95449066991057,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.896711,
        "lng": 121.731548,
        "ele": 345,
        "distanceKm": 26.437979792020094,
        "gradePct": -0.19761028917889759,
        "smoothedEle": 338.7090527062336,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896794,
        "lng": 121.731614,
        "ele": 343.5,
        "distanceKm": 26.449359235659838,
        "gradePct": -0.36804489298373383,
        "smoothedEle": 338.65784520985477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896837,
        "lng": 121.731769,
        "ele": 345.5,
        "distanceKm": 26.465707590119475,
        "gradePct": -0.6669731958926969,
        "smoothedEle": 338.5018413992693,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896818,
        "lng": 121.731905,
        "ele": 350,
        "distanceKm": 26.479586488987657,
        "gradePct": -0.9443468086674079,
        "smoothedEle": 338.2690587417604,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896735,
        "lng": 121.732014,
        "ele": 352.5,
        "distanceKm": 26.493940715221825,
        "gradePct": -1.1491042486480907,
        "smoothedEle": 337.9709175788777,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896414,
        "lng": 121.732131,
        "ele": 346.5,
        "distanceKm": 26.531534513887916,
        "gradePct": -1.5234042568734534,
        "smoothedEle": 337.07330400933614,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896019,
        "lng": 121.732232,
        "ele": 333.5,
        "distanceKm": 26.57662246281429,
        "gradePct": -1.6502935370997764,
        "smoothedEle": 336.0553586966516,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895831,
        "lng": 121.732538,
        "ele": 328.5,
        "distanceKm": 26.61389954574137,
        "gradePct": -1.9453487318421947,
        "smoothedEle": 334.9838898672631,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895735,
        "lng": 121.732976,
        "ele": 334.75,
        "distanceKm": 26.659348605161814,
        "gradePct": -2.505036174280102,
        "smoothedEle": 333.55244952392127,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895524,
        "lng": 121.733272,
        "ele": 332,
        "distanceKm": 26.697319781905538,
        "gradePct": -2.833375175969603,
        "smoothedEle": 332.223486470662,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895396,
        "lng": 121.733403,
        "ele": 327.25,
        "distanceKm": 26.71674040559298,
        "gradePct": -2.9553887440944315,
        "smoothedEle": 331.5157601082277,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895329,
        "lng": 121.733507,
        "ele": 324.25,
        "distanceKm": 26.72960654793088,
        "gradePct": -3.129027685864412,
        "smoothedEle": 330.8612819852884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895325,
        "lng": 121.733645,
        "ele": 323.5,
        "distanceKm": 26.743532698246852,
        "gradePct": -3.370462088474693,
        "smoothedEle": 330.0614982371994,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895539,
        "lng": 121.73426,
        "ele": 326.5,
        "distanceKm": 26.809970772103963,
        "gradePct": -4.112844777331291,
        "smoothedEle": 326.8711264902856,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895757,
        "lng": 121.734741,
        "ele": 323.75,
        "distanceKm": 26.864204431546163,
        "gradePct": -4.098855736081603,
        "smoothedEle": 325.18478772597814,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895941,
        "lng": 121.7350565,
        "ele": 325.24999999999994,
        "distanceKm": 26.9020362829904,
        "gradePct": -4.152006172088947,
        "smoothedEle": 323.74759539540264,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896125,
        "lng": 121.735372,
        "ele": 326.75,
        "distanceKm": 26.939868094541055,
        "gradePct": -4.134490867836021,
        "smoothedEle": 322.0029759910908,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896202,
        "lng": 121.73585,
        "ele": 322.5,
        "distanceKm": 26.988834481799785,
        "gradePct": -3.6196981602196967,
        "smoothedEle": 320.6466997423544,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896213,
        "lng": 121.736209,
        "ele": 324.5,
        "distanceKm": 27.0250645677899,
        "gradePct": -3.052511990030592,
        "smoothedEle": 320.2967767625702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896154,
        "lng": 121.736294,
        "ele": 323.25,
        "distanceKm": 27.035859991538988,
        "gradePct": -2.99026739126408,
        "smoothedEle": 320.0855935800269,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896071,
        "lng": 121.736345,
        "ele": 322,
        "distanceKm": 27.046425895573414,
        "gradePct": -2.9757203786302675,
        "smoothedEle": 319.7861519000432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.896014,
        "lng": 121.736365,
        "ele": 321.25,
        "distanceKm": 27.053077288075933,
        "gradePct": -3.020304824610218,
        "smoothedEle": 319.49016493368106,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8959,
        "lng": 121.736352,
        "ele": 321.25,
        "distanceKm": 27.06582116129765,
        "gradePct": -3.100153642108165,
        "smoothedEle": 318.9230625753147,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895805,
        "lng": 121.736314,
        "ele": 317.75,
        "distanceKm": 27.07705852327887,
        "gradePct": -3.136737152350332,
        "smoothedEle": 318.4229999671504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895709,
        "lng": 121.73631,
        "ele": 315,
        "distanceKm": 27.087740872401174,
        "gradePct": -3.1635957799270047,
        "smoothedEle": 317.9634714803227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895614,
        "lng": 121.736351,
        "ele": 313.25,
        "distanceKm": 27.09908500756679,
        "gradePct": -3.1438062170873424,
        "smoothedEle": 317.57209881710895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89527,
        "lng": 121.7365945,
        "ele": 311.75,
        "distanceKm": 27.14454204688656,
        "gradePct": -2.843622532149293,
        "smoothedEle": 316.18627129317787,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894926,
        "lng": 121.736838,
        "ele": 310.25,
        "distanceKm": 27.189999123180588,
        "gradePct": -2.582424177539091,
        "smoothedEle": 315.4706028690568,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894823,
        "lng": 121.736933,
        "ele": 311,
        "distanceKm": 27.20493189980173,
        "gradePct": -2.57377546010404,
        "smoothedEle": 315.3436742677771,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894733,
        "lng": 121.737213,
        "ele": 319.25,
        "distanceKm": 27.234894259339423,
        "gradePct": -2.2873033381143637,
        "smoothedEle": 315.5298788346875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894597,
        "lng": 121.737372,
        "ele": 320,
        "distanceKm": 27.256937041453554,
        "gradePct": -1.7635230706939415,
        "smoothedEle": 315.791359766989,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89448,
        "lng": 121.737404,
        "ele": 316.25,
        "distanceKm": 27.270341260804013,
        "gradePct": -1.4317436750874941,
        "smoothedEle": 315.85843079710645,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894081,
        "lng": 121.737493,
        "ele": 304.25,
        "distanceKm": 27.31560714306964,
        "gradePct": -0.4054149986125438,
        "smoothedEle": 316.2575661925987,
        "gradeBand": "descent"
      },
      {
        "lat": 24.893955,
        "lng": 121.737852,
        "ele": 306.5,
        "distanceKm": 27.354433241312172,
        "gradePct": 0.551705795712339,
        "smoothedEle": 317.1339576135476,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.893965,
        "lng": 121.738201,
        "ele": 311.25,
        "distanceKm": 27.389652253792928,
        "gradePct": 1.4104043825497337,
        "smoothedEle": 318.29687268639015,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894013,
        "lng": 121.738264,
        "ele": 313.25,
        "distanceKm": 27.39795081108882,
        "gradePct": 1.5900796956307546,
        "smoothedEle": 318.58317291309834,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894059,
        "lng": 121.738312,
        "ele": 315.25,
        "distanceKm": 27.404993727367223,
        "gradePct": 1.71889322156938,
        "smoothedEle": 318.78184494551,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.89419,
        "lng": 121.738342,
        "ele": 319,
        "distanceKm": 27.419871249491134,
        "gradePct": 1.8848504825059886,
        "smoothedEle": 319.2062175583522,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894366,
        "lng": 121.738312,
        "ele": 322.5,
        "distanceKm": 27.439674130088775,
        "gradePct": 2.1167635729943375,
        "smoothedEle": 319.8201068568791,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.894774,
        "lng": 121.738391,
        "ele": 328.5,
        "distanceKm": 27.485736160582707,
        "gradePct": 2.427987884864203,
        "smoothedEle": 320.8501522787084,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895055764346004,
        "lng": 121.73864356244783,
        "ele": 327,
        "distanceKm": 27.526116286945708,
        "gradePct": 2.4371176195202593,
        "smoothedEle": 321.3690161905617,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895307,
        "lng": 121.738938,
        "ele": 327,
        "distanceKm": 27.56688868032886,
        "gradePct": 2.6245459545071506,
        "smoothedEle": 322.79432220601063,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895562,
        "lng": 121.739411,
        "ele": 329,
        "distanceKm": 27.622386825172008,
        "gradePct": 2.8555123759928267,
        "smoothedEle": 324.9952251564449,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895717,
        "lng": 121.739893,
        "ele": 325.75,
        "distanceKm": 27.673967220579872,
        "gradePct": 2.468661101467129,
        "smoothedEle": 325.52429583667816,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895907,
        "lng": 121.740561,
        "ele": 324.25,
        "distanceKm": 27.744577958488787,
        "gradePct": 0.8754265690422218,
        "smoothedEle": 323.7652455090022,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.895989,
        "lng": 121.74091,
        "ele": 326.75,
        "distanceKm": 27.78094058163453,
        "gradePct": -0.5115973099431148,
        "smoothedEle": 322.32838713291227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895947,
        "lng": 121.741573,
        "ele": 325.75,
        "distanceKm": 27.847975052017222,
        "gradePct": -2.840389951898696,
        "smoothedEle": 319.5769089362993,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895723,
        "lng": 121.741962,
        "ele": 319.75,
        "distanceKm": 27.894448816323262,
        "gradePct": -3.7899098865864422,
        "smoothedEle": 317.43423981940583,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895444,
        "lng": 121.74233,
        "ele": 315,
        "distanceKm": 27.942823942182404,
        "gradePct": -4.2032513504436375,
        "smoothedEle": 315.402438753659,
        "gradeBand": "descent"
      },
      {
        "lat": 24.895219,
        "lng": 121.742577,
        "ele": 309.75,
        "distanceKm": 27.978131253713972,
        "gradePct": -4.0800390077951505,
        "smoothedEle": 314.2793188851722,
        "gradeBand": "descent"
      },
      {
        "lat": 24.89476188769247,
        "lng": 121.74284884712918,
        "ele": 306.651703509172,
        "distanceKm": 28.03588390248486,
        "gradePct": -3.5805475607284176,
        "smoothedEle": 312.9121037701499,
        "gradeBand": "descent"
      },
      {
        "lat": 24.894291,
        "lng": 121.743094,
        "ele": 306.5,
        "distanceKm": 28.093789272984203,
        "gradePct": -2.685669044294239,
        "smoothedEle": 312.0933099227285,
        "gradeBand": "descent"
      },
      {
        "lat": 24.893694,
        "lng": 121.74319,
        "ele": 305,
        "distanceKm": 28.160875210914586,
        "gradePct": -1.6415037240433379,
        "smoothedEle": 311.5452233671859,
        "gradeBand": "descent"
      },
      {
        "lat": 24.893029,
        "lng": 121.743271,
        "ele": 309.75,
        "distanceKm": 28.23526991387456,
        "gradePct": -0.7083537787841888,
        "smoothedEle": 311.5099315547055,
        "gradeBand": "descent"
      },
      {
        "lat": 24.892646,
        "lng": 121.743224,
        "ele": 317,
        "distanceKm": 28.278120668826272,
        "gradePct": -0.05610294116721113,
        "smoothedEle": 312.20266132552257,
        "gradeBand": "descent"
      },
      {
        "lat": 24.892335,
        "lng": 121.742914,
        "ele": 319.75,
        "distanceKm": 28.324742428391822,
        "gradePct": 0.745153619148911,
        "smoothedEle": 313.33073244548217,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.89225,
        "lng": 121.74289,
        "ele": 320.25,
        "distanceKm": 28.334499092414482,
        "gradePct": 0.8947716578190384,
        "smoothedEle": 313.550257385992,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.892165,
        "lng": 121.742893,
        "ele": 320.75,
        "distanceKm": 28.343955516844225,
        "gradePct": 1.0371648365822959,
        "smoothedEle": 313.7577855392906,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.89209,
        "lng": 121.742932,
        "ele": 320.75,
        "distanceKm": 28.353176351810358,
        "gradePct": 1.1555138714491346,
        "smoothedEle": 313.919150151198,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.892032,
        "lng": 121.742999,
        "ele": 319.75,
        "distanceKm": 28.362517866852613,
        "gradePct": 1.2500303120924956,
        "smoothedEle": 314.04450473823823,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.891857,
        "lng": 121.743548,
        "ele": 313.25,
        "distanceKm": 28.42121250974506,
        "gradePct": 1.7018772289936868,
        "smoothedEle": 314.92035464971616,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.891777,
        "lng": 121.744047,
        "ele": 313.75,
        "distanceKm": 28.47232445827237,
        "gradePct": 1.9232507323565713,
        "smoothedEle": 315.95546064629133,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.891378,
        "lng": 121.744582,
        "ele": 319,
        "distanceKm": 28.54218459340221,
        "gradePct": 1.8324342107913831,
        "smoothedEle": 317.38378975016826,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.891071,
        "lng": 121.744858,
        "ele": 317.75,
        "distanceKm": 28.58623386202347,
        "gradePct": 1.8970410969895466,
        "smoothedEle": 318.1924804265362,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.890955,
        "lng": 121.744892,
        "ele": 315.25,
        "distanceKm": 28.599580613116736,
        "gradePct": 1.8857106297294943,
        "smoothedEle": 318.3689816333545,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.890876,
        "lng": 121.744876,
        "ele": 313,
        "distanceKm": 28.608512042277724,
        "gradePct": 1.884581250915637,
        "smoothedEle": 318.4999989475202,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.890661,
        "lng": 121.744783,
        "ele": 312.25,
        "distanceKm": 28.634193495374113,
        "gradePct": 1.9023521671460129,
        "smoothedEle": 318.98794655635163,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.890549,
        "lng": 121.744758,
        "ele": 312.75,
        "distanceKm": 28.64690007387751,
        "gradePct": 1.9366447820119177,
        "smoothedEle": 319.31386213610506,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.890416,
        "lng": 121.744775,
        "ele": 313.5,
        "distanceKm": 28.661788096614515,
        "gradePct": 2.042708976271065,
        "smoothedEle": 319.82749892053175,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.889934999999998,
        "lng": 121.74495,
        "ele": 319.62500000000017,
        "distanceKm": 28.718110471775123,
        "gradePct": 2.4753590256314997,
        "smoothedEle": 321.84229906884957,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.889454,
        "lng": 121.745125,
        "ele": 325.75,
        "distanceKm": 28.77443286848336,
        "gradePct": 2.948478277120511,
        "smoothedEle": 323.87278517822807,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.889137,
        "lng": 121.74512,
        "ele": 328.75,
        "distanceKm": 28.809685316747817,
        "gradePct": 3.2662563834000027,
        "smoothedEle": 325.054803929252,
        "gradeBand": "hard"
      },
      {
        "lat": 24.888851,
        "lng": 121.744997,
        "ele": 327.25,
        "distanceKm": 28.84382153341109,
        "gradePct": 3.507110515477036,
        "smoothedEle": 326.24912058081776,
        "gradeBand": "hard"
      },
      {
        "lat": 24.888707,
        "lng": 121.744839,
        "ele": 329.25,
        "distanceKm": 28.86641311655415,
        "gradePct": 3.653125405021071,
        "smoothedEle": 327.2991989118944,
        "gradeBand": "hard"
      },
      {
        "lat": 24.888451,
        "lng": 121.744484,
        "ele": 330.5,
        "distanceKm": 28.912157370667952,
        "gradePct": 4.151444868510837,
        "smoothedEle": 329.9322306527487,
        "gradeBand": "hard"
      },
      {
        "lat": 24.888221,
        "lng": 121.743832,
        "ele": 332.75,
        "distanceKm": 28.98272126486307,
        "gradePct": 4.828666439460096,
        "smoothedEle": 333.80802896600886,
        "gradeBand": "hard"
      },
      {
        "lat": 24.888096,
        "lng": 121.743499,
        "ele": 334.25,
        "distanceKm": 29.019072717270806,
        "gradePct": 5.024134542872265,
        "smoothedEle": 335.43150802787784,
        "gradeBand": "hard"
      },
      {
        "lat": 24.887866,
        "lng": 121.743277,
        "ele": 336.5,
        "distanceKm": 29.053065557680302,
        "gradePct": 5.055906316445988,
        "smoothedEle": 336.7906042781755,
        "gradeBand": "hard"
      },
      {
        "lat": 24.887767,
        "lng": 121.743267,
        "ele": 336.75,
        "distanceKm": 29.06411998688443,
        "gradePct": 5.075356840297378,
        "smoothedEle": 337.34332573838196,
        "gradeBand": "hard"
      },
      {
        "lat": 24.887683,
        "lng": 121.743305,
        "ele": 335.25,
        "distanceKm": 29.074216265467605,
        "gradePct": 5.0498963939886785,
        "smoothedEle": 337.84813966754064,
        "gradeBand": "hard"
      },
      {
        "lat": 24.887616,
        "lng": 121.743366,
        "ele": 334.5,
        "distanceKm": 29.083878719053487,
        "gradePct": 5.024061055238253,
        "smoothedEle": 338.3526382287569,
        "gradeBand": "hard"
      },
      {
        "lat": 24.88735,
        "lng": 121.743635,
        "ele": 339.5,
        "distanceKm": 29.124017148012257,
        "gradePct": 5.141595034663812,
        "smoothedEle": 340.8668318375059,
        "gradeBand": "hard"
      },
      {
        "lat": 24.887084,
        "lng": 121.743904,
        "ele": 344.5,
        "distanceKm": 29.164155616476695,
        "gradePct": 5.1003843963821005,
        "smoothedEle": 342.98905941352916,
        "gradeBand": "hard"
      },
      {
        "lat": 24.886796,
        "lng": 121.744106,
        "ele": 344.75,
        "distanceKm": 29.2021123678535,
        "gradePct": 4.8721582269786445,
        "smoothedEle": 344.41836445376975,
        "gradeBand": "hard"
      },
      {
        "lat": 24.886171,
        "lng": 121.744328,
        "ele": 346,
        "distanceKm": 29.27512794199654,
        "gradePct": 4.306753016608398,
        "smoothedEle": 346.5092463948311,
        "gradeBand": "hard"
      },
      {
        "lat": 24.885832,
        "lng": 121.744648,
        "ele": 353.75,
        "distanceKm": 29.32475478573808,
        "gradePct": 3.4702804893228585,
        "smoothedEle": 347.8463936844644,
        "gradeBand": "hard"
      },
      {
        "lat": 24.885682,
        "lng": 121.744757,
        "ele": 359,
        "distanceKm": 29.344731902347966,
        "gradePct": 3.233601787260864,
        "smoothedEle": 348.42927956467236,
        "gradeBand": "hard"
      },
      {
        "lat": 24.885606,
        "lng": 121.744765,
        "ele": 360,
        "distanceKm": 29.35322116930075,
        "gradePct": 3.1324853065189133,
        "smoothedEle": 348.6758967241984,
        "gradeBand": "hard"
      },
      {
        "lat": 24.885509,
        "lng": 121.744742,
        "ele": 360,
        "distanceKm": 29.3642537865739,
        "gradePct": 2.9490414887768956,
        "smoothedEle": 348.8908390987739,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8852,
        "lng": 121.744486,
        "ele": 355,
        "distanceKm": 29.407234985904374,
        "gradePct": 2.5024213959545794,
        "smoothedEle": 349.5698990946336,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.885086,
        "lng": 121.744161,
        "ele": 347.5,
        "distanceKm": 29.442383476225704,
        "gradePct": 2.2057608027263678,
        "smoothedEle": 349.98309390878364,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.885051,
        "lng": 121.744066,
        "ele": 347.5,
        "distanceKm": 29.452726366472728,
        "gradePct": 2.130070968125928,
        "smoothedEle": 350.12789437224205,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.884972,
        "lng": 121.743974,
        "ele": 347.25,
        "distanceKm": 29.46550474124918,
        "gradePct": 2.0519903800284354,
        "smoothedEle": 350.33765612919905,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.884843,
        "lng": 121.743937,
        "ele": 347,
        "distanceKm": 29.480326503707033,
        "gradePct": 1.9849765027461572,
        "smoothedEle": 350.61926961589825,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.884546,
        "lng": 121.74404,
        "ele": 348.25,
        "distanceKm": 29.514947211920067,
        "gradePct": 1.938632658951924,
        "smoothedEle": 351.45940341486937,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.884347,
        "lng": 121.744151,
        "ele": 349.5,
        "distanceKm": 29.539746555891654,
        "gradePct": 1.9848590784528497,
        "smoothedEle": 352.2535368868602,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.883916,
        "lng": 121.744137,
        "ele": 349.25,
        "distanceKm": 29.587692437635006,
        "gradePct": 2.191961615483515,
        "smoothedEle": 353.64506959292675,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.883774,
        "lng": 121.74414,
        "ele": 349,
        "distanceKm": 29.603485038642493,
        "gradePct": 2.2403662172635075,
        "smoothedEle": 353.9913861099589,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.88366,
        "lng": 121.744193,
        "ele": 348.75,
        "distanceKm": 29.61724255076275,
        "gradePct": 2.3123947402726315,
        "smoothedEle": 354.31233442181264,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.883616,
        "lng": 121.744265,
        "ele": 348.75,
        "distanceKm": 29.625999582880745,
        "gradePct": 2.3747636731362234,
        "smoothedEle": 354.5400172568805,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.883696,
        "lng": 121.744775,
        "ele": 350.25,
        "distanceKm": 29.678207825698053,
        "gradePct": 2.7450134792773992,
        "smoothedEle": 356.0690416922824,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.883811,
        "lng": 121.744918,
        "ele": 351.75,
        "distanceKm": 29.697484515096598,
        "gradePct": 2.899031716409848,
        "smoothedEle": 356.8337030779734,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.88401,
        "lng": 121.745002,
        "ele": 354.25,
        "distanceKm": 29.72117916336709,
        "gradePct": 3.0409358414502883,
        "smoothedEle": 357.74083687833854,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884372,
        "lng": 121.745013,
        "ele": 359.5,
        "distanceKm": 29.761447072775685,
        "gradePct": 3.1299813140005712,
        "smoothedEle": 359.1433133358756,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884608,
        "lng": 121.745255,
        "ele": 365.5,
        "distanceKm": 29.797287508214623,
        "gradePct": 3.2570069839698137,
        "smoothedEle": 360.36949420964015,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884645,
        "lng": 121.745767,
        "ele": 370.25,
        "distanceKm": 29.849097273541535,
        "gradePct": 3.547377118911596,
        "smoothedEle": 362.3112342813423,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884632,
        "lng": 121.745986,
        "ele": 373,
        "distanceKm": 29.871235350388154,
        "gradePct": 3.6742117905073557,
        "smoothedEle": 363.21326217147316,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884597,
        "lng": 121.746077,
        "ele": 373,
        "distanceKm": 29.881205597347755,
        "gradePct": 3.749224665389291,
        "smoothedEle": 363.6864056445633,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884436,
        "lng": 121.74627,
        "ele": 368.5,
        "distanceKm": 29.907653789174464,
        "gradePct": 3.891181062940475,
        "smoothedEle": 365.0053890771569,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884254,
        "lng": 121.746766,
        "ele": 366.75,
        "distanceKm": 29.961624058705677,
        "gradePct": 4.509445093552374,
        "smoothedEle": 368.1682586046116,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884181,
        "lng": 121.746881,
        "ele": 364.5,
        "distanceKm": 29.97578228456102,
        "gradePct": 4.691999698028883,
        "smoothedEle": 369.01775215593227,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884036,
        "lng": 121.746962,
        "ele": 365,
        "distanceKm": 29.993857664278185,
        "gradePct": 4.911702785291413,
        "smoothedEle": 370.0755572037907,
        "gradeBand": "hard"
      },
      {
        "lat": 24.88396,
        "lng": 121.746962,
        "ele": 365,
        "distanceKm": 30.002308490375928,
        "gradePct": 4.96810059506787,
        "smoothedEle": 370.49387309562894,
        "gradeBand": "hard"
      },
      {
        "lat": 24.883838,
        "lng": 121.747014,
        "ele": 365.5,
        "distanceKm": 30.01685306149373,
        "gradePct": 5.066407237303442,
        "smoothedEle": 371.23559165874707,
        "gradeBand": "hard"
      },
      {
        "lat": 24.883781,
        "lng": 121.747088,
        "ele": 366,
        "distanceKm": 30.02664545657364,
        "gradePct": 5.132612326991808,
        "smoothedEle": 371.7350038078224,
        "gradeBand": "hard"
      },
      {
        "lat": 24.883764,
        "lng": 121.74719,
        "ele": 366.25,
        "distanceKm": 30.037106615612988,
        "gradePct": 5.156902890768055,
        "smoothedEle": 372.1756510174152,
        "gradeBand": "hard"
      },
      {
        "lat": 24.883782,
        "lng": 121.747307,
        "ele": 367,
        "distanceKm": 30.049077165280792,
        "gradePct": 5.166010897912703,
        "smoothedEle": 372.64250245445953,
        "gradeBand": "hard"
      },
      {
        "lat": 24.883989,
        "lng": 121.747765,
        "ele": 369.25,
        "distanceKm": 30.100692879949072,
        "gradePct": 4.77705205472198,
        "smoothedEle": 374.21234945729657,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884228,
        "lng": 121.748155,
        "ele": 374,
        "distanceKm": 30.148168136273497,
        "gradePct": 3.841075986545675,
        "smoothedEle": 375.0618407337091,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884304,
        "lng": 121.74849,
        "ele": 380.75,
        "distanceKm": 30.18300083204698,
        "gradePct": 3.3422387848956534,
        "smoothedEle": 376.124672633609,
        "gradeBand": "hard"
      },
      {
        "lat": 24.884232,
        "lng": 121.748878,
        "ele": 384.25,
        "distanceKm": 30.222949505177812,
        "gradePct": 2.912691922890058,
        "smoothedEle": 377.3718941324154,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.883896,
        "lng": 121.749328,
        "ele": 385,
        "distanceKm": 30.281740227427207,
        "gradePct": 2.7708199811494962,
        "smoothedEle": 379.1775610014583,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.88353898783449,
        "lng": 121.74950389132711,
        "ele": 383.28258616353247,
        "distanceKm": 30.325222734295586,
        "gradePct": 3.212966269919303,
        "smoothedEle": 381.07720321404526,
        "gradeBand": "hard"
      },
      {
        "lat": 24.883167,
        "lng": 121.749648,
        "ele": 380.5,
        "distanceKm": 30.369065957685706,
        "gradePct": 3.639236950027068,
        "smoothedEle": 382.97795897170784,
        "gradeBand": "hard"
      },
      {
        "lat": 24.882999,
        "lng": 121.749722,
        "ele": 381.75,
        "distanceKm": 30.389182895694734,
        "gradePct": 3.7076673340921635,
        "smoothedEle": 383.73301503106677,
        "gradeBand": "hard"
      },
      {
        "lat": 24.882902,
        "lng": 121.749822,
        "ele": 383,
        "distanceKm": 30.403950741340477,
        "gradePct": 3.735574140426691,
        "smoothedEle": 384.24988962866775,
        "gradeBand": "hard"
      },
      {
        "lat": 24.882783,
        "lng": 121.750015,
        "ele": 384.5,
        "distanceKm": 30.42749033386692,
        "gradePct": 3.79017320213181,
        "smoothedEle": 385.0917051257878,
        "gradeBand": "hard"
      },
      {
        "lat": 24.882724,
        "lng": 121.750054,
        "ele": 384.75,
        "distanceKm": 30.435139973670786,
        "gradePct": 3.7950939616705592,
        "smoothedEle": 385.3364935995116,
        "gradeBand": "hard"
      },
      {
        "lat": 24.882657,
        "lng": 121.750075,
        "ele": 384,
        "distanceKm": 30.442885351694642,
        "gradePct": 3.8000763064304257,
        "smoothedEle": 385.58434569627497,
        "gradeBand": "hard"
      },
      {
        "lat": 24.882604,
        "lng": 121.750064,
        "ele": 382.5,
        "distanceKm": 30.448882239791825,
        "gradePct": 3.803933905619842,
        "smoothedEle": 385.7762461153848,
        "gradeBand": "hard"
      },
      {
        "lat": 24.882339,
        "lng": 121.749964,
        "ele": 378.25,
        "distanceKm": 30.480027706756363,
        "gradePct": 3.848835552340986,
        "smoothedEle": 386.8226346601559,
        "gradeBand": "hard"
      },
      {
        "lat": 24.882194,
        "lng": 121.750025,
        "ele": 378.5,
        "distanceKm": 30.497285259671393,
        "gradePct": 3.8324182649413236,
        "smoothedEle": 387.52152119678345,
        "gradeBand": "hard"
      },
      {
        "lat": 24.882053,
        "lng": 121.750253,
        "ele": 384.5,
        "distanceKm": 30.525120060521107,
        "gradePct": 3.7653162205595967,
        "smoothedEle": 388.60335009418435,
        "gradeBand": "hard"
      },
      {
        "lat": 24.881866,
        "lng": 121.750559,
        "ele": 390.25,
        "distanceKm": 30.562337794871105,
        "gradePct": 3.5134072592869767,
        "smoothedEle": 389.713084302775,
        "gradeBand": "hard"
      },
      {
        "lat": 24.881367,
        "lng": 121.750913,
        "ele": 391.5,
        "distanceKm": 30.62832182027821,
        "gradePct": 3.5532238856273595,
        "smoothedEle": 392.2247604622038,
        "gradeBand": "hard"
      },
      {
        "lat": 24.880928,
        "lng": 121.751328,
        "ele": 396.75,
        "distanceKm": 30.69262861322044,
        "gradePct": 3.7950863645826436,
        "smoothedEle": 394.92311171348615,
        "gradeBand": "hard"
      },
      {
        "lat": 24.880699,
        "lng": 121.751642,
        "ele": 403.75,
        "distanceKm": 30.733269461876052,
        "gradePct": 3.7937137337333544,
        "smoothedEle": 396.4337711135441,
        "gradeBand": "hard"
      },
      {
        "lat": 24.880606,
        "lng": 121.751673,
        "ele": 405.25,
        "distanceKm": 30.74407307550585,
        "gradePct": 3.8394964097431474,
        "smoothedEle": 396.84747159363553,
        "gradeBand": "hard"
      },
      {
        "lat": 24.8805,
        "lng": 121.751632,
        "ele": 404.5,
        "distanceKm": 30.756564318680404,
        "gradePct": 3.8874793348888796,
        "smoothedEle": 397.31589321268143,
        "gradeBand": "hard"
      },
      {
        "lat": 24.880266,
        "lng": 121.751416,
        "ele": 399.5,
        "distanceKm": 30.790502221998363,
        "gradePct": 3.7375719433209573,
        "smoothedEle": 398.26030464615104,
        "gradeBand": "hard"
      },
      {
        "lat": 24.879794,
        "lng": 121.751182,
        "ele": 401,
        "distanceKm": 30.848050151920813,
        "gradePct": 3.288013644224504,
        "smoothedEle": 399.6286002715066,
        "gradeBand": "hard"
      },
      {
        "lat": 24.8794,
        "lng": 121.750876,
        "ele": 404,
        "distanceKm": 30.901643238937606,
        "gradePct": 2.9851560923567426,
        "smoothedEle": 401.22850619908957,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.879296,
        "lng": 121.750782,
        "ele": 405,
        "distanceKm": 30.916598073559584,
        "gradePct": 2.8442167045170765,
        "smoothedEle": 401.502512997785,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.879235,
        "lng": 121.75064,
        "ele": 404,
        "distanceKm": 30.9324472057872,
        "gradePct": 2.5417284005087684,
        "smoothedEle": 401.48666386555743,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.87919,
        "lng": 121.750334,
        "ele": 398.5,
        "distanceKm": 30.963718136568254,
        "gradePct": 2.0062078111600457,
        "smoothedEle": 401.52738263584735,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.879048,
        "lng": 121.749929,
        "ele": 397.25,
        "distanceKm": 31.00751795382795,
        "gradePct": 1.3389577033860907,
        "smoothedEle": 401.3427967502262,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.878747500000003,
        "lng": 121.749424,
        "ele": 401.875,
        "distanceKm": 31.06844112760196,
        "gradePct": 0.9093828939895193,
        "smoothedEle": 402.0560946227656,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.878447,
        "lng": 121.748919,
        "ele": 406.5,
        "distanceKm": 31.129364404979302,
        "gradePct": 0.5303709330899286,
        "smoothedEle": 402.55048853254516,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.878274,
        "lng": 121.748317,
        "ele": 396.25,
        "distanceKm": 31.193066059851457,
        "gradePct": 0.9098672673132487,
        "smoothedEle": 403.2234360058185,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.878224,
        "lng": 121.748208,
        "ele": 398.75,
        "distanceKm": 31.205387300281892,
        "gradePct": 1.1380212474010176,
        "smoothedEle": 403.62781847362686,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.878152,
        "lng": 121.748126,
        "ele": 400.75,
        "distanceKm": 31.216899070433023,
        "gradePct": 1.3264623155534756,
        "smoothedEle": 404.1055569348988,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.87811,
        "lng": 121.748098,
        "ele": 401.5,
        "distanceKm": 31.22235697976842,
        "gradePct": 1.4077629140165633,
        "smoothedEle": 404.3320601723177,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.878055,
        "lng": 121.748087,
        "ele": 402,
        "distanceKm": 31.22857256149605,
        "gradePct": 1.5003497422689005,
        "smoothedEle": 404.5900068140145,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.877955,
        "lng": 121.748093,
        "ele": 402.75,
        "distanceKm": 31.239708530214322,
        "gradePct": 1.671343383671973,
        "smoothedEle": 405.06237572836324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.877492,
        "lng": 121.748183,
        "ele": 407.5,
        "distanceKm": 31.29198624509397,
        "gradePct": 2.6445306863237,
        "smoothedEle": 407.5362252089255,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.877161,
        "lng": 121.748344,
        "ele": 405.75,
        "distanceKm": 31.332215940749123,
        "gradePct": 3.306952254290178,
        "smoothedEle": 409.1945168078487,
        "gradeBand": "hard"
      },
      {
        "lat": 24.876901,
        "lng": 121.748531,
        "ele": 404.75,
        "distanceKm": 31.366736723131947,
        "gradePct": 3.774825213321733,
        "smoothedEle": 410.4949420003602,
        "gradeBand": "hard"
      },
      {
        "lat": 24.876887,
        "lng": 121.748809,
        "ele": 407,
        "distanceKm": 31.39482389890653,
        "gradePct": 4.133541450026584,
        "smoothedEle": 411.54821109190715,
        "gradeBand": "hard"
      },
      {
        "lat": 24.876971,
        "lng": 121.749101,
        "ele": 412,
        "distanceKm": 31.42572560318244,
        "gradePct": 4.241380831684993,
        "smoothedEle": 412.95461970736955,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877174,
        "lng": 121.74945,
        "ele": 419.25,
        "distanceKm": 31.467546693826097,
        "gradePct": 4.331859527813451,
        "smoothedEle": 415.0434329030977,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877222609853195,
        "lng": 121.74999411138744,
        "ele": 421.497980425989,
        "distanceKm": 31.522700762581408,
        "gradePct": 4.1953533147426905,
        "smoothedEle": 417.1930022246002,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877232,
        "lng": 121.750545,
        "ele": 422.75,
        "distanceKm": 31.578282799255494,
        "gradePct": 4.192989978169451,
        "smoothedEle": 419.31389981133213,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877486,
        "lng": 121.75115,
        "ele": 425.25,
        "distanceKm": 31.645531995484085,
        "gradePct": 4.842435472107116,
        "smoothedEle": 423.62874877380636,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877552082579623,
        "lng": 121.75156451195332,
        "ele": 422.46900743106266,
        "distanceKm": 31.687987521251014,
        "gradePct": 5.361949652451206,
        "smoothedEle": 426.5639910317337,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877613,
        "lng": 121.75198,
        "ele": 423.25,
        "distanceKm": 31.730444599450685,
        "gradePct": 5.880738599117642,
        "smoothedEle": 429.2499685036764,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877571,
        "lng": 121.752406,
        "ele": 421.25,
        "distanceKm": 31.773671282003143,
        "gradePct": 6.4418205039395895,
        "smoothedEle": 432.02157469063934,
        "gradeBand": "steep"
      },
      {
        "lat": 24.877658,
        "lng": 121.752872,
        "ele": 430,
        "distanceKm": 31.821665104390604,
        "gradePct": 6.550890711005332,
        "smoothedEle": 435.1991805879773,
        "gradeBand": "steep"
      },
      {
        "lat": 24.877739272905558,
        "lng": 121.75326364158747,
        "ele": 438.40416570083215,
        "distanceKm": 31.862193171075813,
        "gradePct": 6.2340382682114575,
        "smoothedEle": 437.2487268773436,
        "gradeBand": "steep"
      },
      {
        "lat": 24.877795,
        "lng": 121.753661,
        "ele": 443.25,
        "distanceKm": 31.902753624498146,
        "gradePct": 5.757481123416333,
        "smoothedEle": 439.01310660121504,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877859332555797,
        "lng": 121.7540881962606,
        "ele": 448.26587059420666,
        "distanceKm": 31.946437564759066,
        "gradePct": 5.077446738749434,
        "smoothedEle": 440.430298100239,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877895,
        "lng": 121.75452,
        "ele": 452.25,
        "distanceKm": 31.990176769241998,
        "gradePct": 4.25854055313009,
        "smoothedEle": 441.6314617244042,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877899,
        "lng": 121.754977,
        "ele": 454.5,
        "distanceKm": 32.0362796512965,
        "gradePct": 3.507530357315245,
        "smoothedEle": 442.9533140694982,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877829,
        "lng": 121.755165,
        "ele": 455.75,
        "distanceKm": 32.05677968030006,
        "gradePct": 3.1503263411669415,
        "smoothedEle": 443.27561372677604,
        "gradeBand": "hard"
      },
      {
        "lat": 24.877591,
        "lng": 121.755328,
        "ele": 448,
        "distanceKm": 32.087936330430026,
        "gradePct": 2.5469996591520587,
        "smoothedEle": 443.46255362755596,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.877245,
        "lng": 121.755497,
        "ele": 447,
        "distanceKm": 32.130017836910966,
        "gradePct": 1.4637200065820988,
        "smoothedEle": 442.8250503891818,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876634,
        "lng": 121.755463,
        "ele": 437,
        "distanceKm": 32.19804455056714,
        "gradePct": -0.11419135629950046,
        "smoothedEle": 441.62866241856557,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876156,
        "lng": 121.755619,
        "ele": 436.25,
        "distanceKm": 32.253476562164515,
        "gradePct": -1.454151211139483,
        "smoothedEle": 440.3153799709925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.875656,
        "lng": 121.755877,
        "ele": 433,
        "distanceKm": 32.3148644540896,
        "gradePct": -2.338806113292572,
        "smoothedEle": 438.3770005387753,
        "gradeBand": "descent"
      },
      {
        "lat": 24.875298,
        "lng": 121.756138,
        "ele": 429.75,
        "distanceKm": 32.362591809087164,
        "gradePct": -2.273747558678078,
        "smoothedEle": 437.704675790042,
        "gradeBand": "descent"
      },
      {
        "lat": 24.875234,
        "lng": 121.756323,
        "ele": 431,
        "distanceKm": 32.38256523611476,
        "gradePct": -2.133064408669183,
        "smoothedEle": 437.63476879544544,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8753,
        "lng": 121.756585,
        "ele": 437.5,
        "distanceKm": 32.409995514802795,
        "gradePct": -1.9064237916982179,
        "smoothedEle": 437.53267534392614,
        "gradeBand": "descent"
      },
      {
        "lat": 24.875536,
        "lng": 121.757231,
        "ele": 439,
        "distanceKm": 32.48024851137696,
        "gradePct": -0.726985699863253,
        "smoothedEle": 438.0160595278895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.875756,
        "lng": 121.757553,
        "ele": 438,
        "distanceKm": 32.52091270076834,
        "gradePct": -0.13787034533791404,
        "smoothedEle": 438.01605952788964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876054,
        "lng": 121.757828,
        "ele": 440,
        "distanceKm": 32.56412842962703,
        "gradePct": 0.12015618594869977,
        "smoothedEle": 437.9396099900499,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876511,
        "lng": 121.758121,
        "ele": 445.25,
        "distanceKm": 32.62291546946849,
        "gradePct": -0.006783988255051458,
        "smoothedEle": 437.6080046678511,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876829,
        "lng": 121.758751,
        "ele": 441,
        "distanceKm": 32.69564321281683,
        "gradePct": -0.38788042731666805,
        "smoothedEle": 437.24029867325623,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876936,
        "lng": 121.759417,
        "ele": 436.25,
        "distanceKm": 32.76387314837467,
        "gradePct": -0.11710375380880411,
        "smoothedEle": 437.70585408036385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876826,
        "lng": 121.75983,
        "ele": 431.5,
        "distanceKm": 32.80729402086056,
        "gradePct": 0.1281495414184785,
        "smoothedEle": 437.95242105533237,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876666,
        "lng": 121.760061,
        "ele": 428.25,
        "distanceKm": 32.83661204764496,
        "gradePct": 0.22149164114560133,
        "smoothedEle": 437.98173908211675,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876663,
        "lng": 121.760185,
        "ele": 427.25,
        "distanceKm": 32.8491253533909,
        "gradePct": 0.22996358969563985,
        "smoothedEle": 437.9354166475098,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.876826,
        "lng": 121.760491,
        "ele": 428.5,
        "distanceKm": 32.884921717484445,
        "gradePct": 0.11244261222085879,
        "smoothedEle": 437.519390970862,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.877128,
        "lng": 121.76073,
        "ele": 435.75,
        "distanceKm": 32.92626126379334,
        "gradePct": -0.22912940500435428,
        "smoothedEle": 436.99095694737883,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877163,
        "lng": 121.760806,
        "ele": 436.75,
        "distanceKm": 32.934859197129406,
        "gradePct": -0.30145234249777814,
        "smoothedEle": 436.90497761401815,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877173,
        "lng": 121.760907,
        "ele": 439.25,
        "distanceKm": 32.94510832022763,
        "gradePct": -0.3887674598351738,
        "smoothedEle": 436.8002805345996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877155,
        "lng": 121.761005,
        "ele": 441.25,
        "distanceKm": 32.955194891164105,
        "gradePct": -0.4761339613101473,
        "smoothedEle": 436.69437153976656,
        "gradeBand": "descent"
      },
      {
        "lat": 24.877092,
        "lng": 121.761157,
        "ele": 443.25,
        "distanceKm": 32.97205272934921,
        "gradePct": -0.6174689420986025,
        "smoothedEle": 436.517364238823,
        "gradeBand": "descent"
      },
      {
        "lat": 24.876831,
        "lng": 121.761556,
        "ele": 441.75,
        "distanceKm": 33.021674788424995,
        "gradePct": -0.6545042144945135,
        "smoothedEle": 436.65779339390775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8764855,
        "lng": 121.7619495,
        "ele": 440.50000000000006,
        "distanceKm": 33.076916656476776,
        "gradePct": 0.02816031709957616,
        "smoothedEle": 437.6687464985945,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.87614,
        "lng": 121.762343,
        "ele": 439.25,
        "distanceKm": 33.13215860428481,
        "gradePct": 1.2754202307932692,
        "smoothedEle": 439.4828240040507,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.875849,
        "lng": 121.762441,
        "ele": 436,
        "distanceKm": 33.16599290474583,
        "gradePct": 1.9141018272180486,
        "smoothedEle": 440.4091960515947,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.875415,
        "lng": 121.762336,
        "ele": 435.75,
        "distanceKm": 33.215400341964184,
        "gradePct": 2.231089555692048,
        "smoothedEle": 441.1022159826581,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.874938,
        "lng": 121.762439,
        "ele": 440.25,
        "distanceKm": 33.26944856799633,
        "gradePct": 2.1040376675743726,
        "smoothedEle": 441.74015217535464,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.874489,
        "lng": 121.762341,
        "ele": 442.5,
        "distanceKm": 33.320344552444176,
        "gradePct": 1.8627792780498587,
        "smoothedEle": 442.8204236531462,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.874028,
        "lng": 121.762357,
        "ele": 445.25,
        "distanceKm": 33.371630889757704,
        "gradePct": 1.7011029422666624,
        "smoothedEle": 443.8904838760999,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.873647,
        "lng": 121.762464,
        "ele": 444,
        "distanceKm": 33.41534970905425,
        "gradePct": 1.8875932604154586,
        "smoothedEle": 444.8766922943033,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.873304777779158,
        "lng": 121.76265705951317,
        "ele": 446.4874078509476,
        "distanceKm": 33.45809752226542,
        "gradePct": 2.1644926997787457,
        "smoothedEle": 445.9351601360894,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.87297238888958,
        "lng": 121.7628710297566,
        "ele": 449.24370392547354,
        "distanceKm": 33.50089910346211,
        "gradePct": 2.14134839869615,
        "smoothedEle": 446.69038918821855,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.87264,
        "lng": 121.763085,
        "ele": 452,
        "distanceKm": 33.54370071393616,
        "gradePct": 1.9007063469088634,
        "smoothedEle": 447.1091493562878,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8721185,
        "lng": 121.763307,
        "ele": 450.375,
        "distanceKm": 33.60586341407171,
        "gradePct": 1.5961922597277067,
        "smoothedEle": 447.85508512505646,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.871597,
        "lng": 121.763529,
        "ele": 448.75,
        "distanceKm": 33.66802614825361,
        "gradePct": 1.313688642335289,
        "smoothedEle": 448.7377269017174,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.871249,
        "lng": 121.763623,
        "ele": 447.75,
        "distanceKm": 33.70786705172328,
        "gradePct": 1.3154787661470477,
        "smoothedEle": 449.3895193699206,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.871006,
        "lng": 121.763651,
        "ele": 444.5,
        "distanceKm": 33.73503470218655,
        "gradePct": 1.3261029481621545,
        "smoothedEle": 449.6765691780564,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.87084,
        "lng": 121.763832,
        "ele": 443.75,
        "distanceKm": 33.76099872079366,
        "gradePct": 1.2770894437680445,
        "smoothedEle": 449.8708996976905,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.870856,
        "lng": 121.764202,
        "ele": 448,
        "distanceKm": 33.79836767301964,
        "gradePct": 1.209228851181035,
        "smoothedEle": 450.1835959404272,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.870833,
        "lng": 121.764607,
        "ele": 449.5,
        "distanceKm": 33.839305108231486,
        "gradePct": 1.3905153276230438,
        "smoothedEle": 451.1109506912214,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.87093970856008,
        "lng": 121.76510203822696,
        "ele": 452.2249688543909,
        "distanceKm": 33.890636069237324,
        "gradePct": 1.9160663030228602,
        "smoothedEle": 452.939755140654,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.871101,
        "lng": 121.765584,
        "ele": 453.5,
        "distanceKm": 33.94245989202703,
        "gradePct": 2.9130736891266493,
        "smoothedEle": 455.558291196812,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.871247,
        "lng": 121.765977,
        "ele": 452,
        "distanceKm": 33.98530175218391,
        "gradePct": 3.945208924470933,
        "smoothedEle": 457.96468066360956,
        "gradeBand": "hard"
      },
      {
        "lat": 24.871307,
        "lng": 121.766063,
        "ele": 452.75,
        "distanceKm": 33.996246270656776,
        "gradePct": 4.200392364146123,
        "smoothedEle": 458.56662917961734,
        "gradeBand": "hard"
      },
      {
        "lat": 24.871364,
        "lng": 121.766093,
        "ele": 453.5,
        "distanceKm": 34.003269892492845,
        "gradePct": 4.33308117499774,
        "smoothedEle": 458.96080815210524,
        "gradeBand": "hard"
      },
      {
        "lat": 24.871431,
        "lng": 121.766092,
        "ele": 454,
        "distanceKm": 34.01072064586554,
        "gradePct": 4.4646088519199845,
        "smoothedEle": 459.3926452457292,
        "gradeBand": "hard"
      },
      {
        "lat": 24.871545,
        "lng": 121.766052,
        "ele": 455.5,
        "distanceKm": 34.02402367414263,
        "gradePct": 4.704421586149995,
        "smoothedEle": 460.1736238988446,
        "gradeBand": "hard"
      },
      {
        "lat": 24.871832,
        "lng": 121.765702,
        "ele": 462.75,
        "distanceKm": 34.07161718154308,
        "gradePct": 5.171208288948049,
        "smoothedEle": 462.60457235635363,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872158,
        "lng": 121.76561,
        "ele": 467.75,
        "distanceKm": 34.109036058443245,
        "gradePct": 5.154898005054815,
        "smoothedEle": 464.1792593925529,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872658,
        "lng": 121.765581,
        "ele": 473.5,
        "distanceKm": 34.16471051727422,
        "gradePct": 4.544403033051956,
        "smoothedEle": 465.8968952415386,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872976,
        "lng": 121.765639,
        "ele": 475.75,
        "distanceKm": 34.200551380561876,
        "gradePct": 4.040842246365599,
        "smoothedEle": 466.88992460164496,
        "gradeBand": "hard"
      },
      {
        "lat": 24.87334,
        "lng": 121.765884,
        "ele": 472,
        "distanceKm": 34.24797601954565,
        "gradePct": 3.7064345582892644,
        "smoothedEle": 468.80991445022676,
        "gradeBand": "hard"
      },
      {
        "lat": 24.87341,
        "lng": 121.765961,
        "ele": 472.75,
        "distanceKm": 34.25897256809634,
        "gradePct": 3.673367723556685,
        "smoothedEle": 469.3054549291342,
        "gradeBand": "hard"
      },
      {
        "lat": 24.873429,
        "lng": 121.766071,
        "ele": 473.25,
        "distanceKm": 34.27026875410104,
        "gradePct": 3.6290495123684874,
        "smoothedEle": 469.79379733105014,
        "gradeBand": "hard"
      },
      {
        "lat": 24.873412,
        "lng": 121.766125,
        "ele": 473.25,
        "distanceKm": 34.276034956277776,
        "gradePct": 3.6186838539950994,
        "smoothedEle": 470.0278519136527,
        "gradeBand": "hard"
      },
      {
        "lat": 24.873332,
        "lng": 121.766237,
        "ele": 473.25,
        "distanceKm": 34.29041517662854,
        "gradePct": 3.564163469886671,
        "smoothedEle": 470.52396951575406,
        "gradeBand": "hard"
      },
      {
        "lat": 24.87323,
        "lng": 121.766305,
        "ele": 473,
        "distanceKm": 34.303670238636535,
        "gradePct": 3.471497821574481,
        "smoothedEle": 470.8964468985215,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872583,
        "lng": 121.766278,
        "ele": 468.25,
        "distanceKm": 34.3756649986482,
        "gradePct": 2.6601940446166075,
        "smoothedEle": 471.52079503867316,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.872434,
        "lng": 121.766297,
        "ele": 467,
        "distanceKm": 34.39234357028059,
        "gradePct": 2.4477221704040564,
        "smoothedEle": 471.5579582206162,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.872313,
        "lng": 121.766374,
        "ele": 466.25,
        "distanceKm": 34.4078795334327,
        "gradePct": 2.1539121636264134,
        "smoothedEle": 471.49442971387214,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.872253,
        "lng": 121.766473,
        "ele": 466,
        "distanceKm": 34.41989024174054,
        "gradePct": 1.967835842310621,
        "smoothedEle": 471.6085314427966,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.872094,
        "lng": 121.76686,
        "ele": 471,
        "distanceKm": 34.46274809300432,
        "gradePct": 1.2112564792215719,
        "smoothedEle": 471.891186597086,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.871884,
        "lng": 121.767141,
        "ele": 476,
        "distanceKm": 34.49947496528359,
        "gradePct": 0.7434898413996401,
        "smoothedEle": 472.2655361906491,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.87143,
        "lng": 121.76728,
        "ele": 472.75,
        "distanceKm": 34.55186888368929,
        "gradePct": 0.7248015477755597,
        "smoothedEle": 472.7640350584251,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.871044,
        "lng": 121.767304,
        "ele": 468.5,
        "distanceKm": 34.59485841926302,
        "gradePct": 0.9155880942236804,
        "smoothedEle": 473.3788508753698,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.870915,
        "lng": 121.767344,
        "ele": 467.75,
        "distanceKm": 34.609759383527894,
        "gradePct": 1.1642462389022061,
        "smoothedEle": 473.8407807675809,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.870875,
        "lng": 121.767384,
        "ele": 468,
        "distanceKm": 34.615764933635255,
        "gradePct": 1.2288059025563423,
        "smoothedEle": 474.0269528209091,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.870813,
        "lng": 121.767525,
        "ele": 470.75,
        "distanceKm": 34.6315720079241,
        "gradePct": 1.4156986773418307,
        "smoothedEle": 474.51697212386324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.870658,
        "lng": 121.767987,
        "ele": 478.25,
        "distanceKm": 34.68126448686228,
        "gradePct": 2.329408003990319,
        "smoothedEle": 476.7387364689872,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.870375,
        "lng": 121.768246,
        "ele": 478.75,
        "distanceKm": 34.72216626780298,
        "gradePct": 3.136072709563519,
        "smoothedEle": 478.753576678488,
        "gradeBand": "hard"
      },
      {
        "lat": 24.870308,
        "lng": 121.76836,
        "ele": 478,
        "distanceKm": 34.735869147551284,
        "gradePct": 3.417074747361178,
        "smoothedEle": 479.445956000823,
        "gradeBand": "hard"
      },
      {
        "lat": 24.870291,
        "lng": 121.768453,
        "ele": 477.75,
        "distanceKm": 34.74543981130984,
        "gradePct": 3.588040063934477,
        "smoothedEle": 479.8789461537132,
        "gradeBand": "hard"
      },
      {
        "lat": 24.870303,
        "lng": 121.768538,
        "ele": 477.5,
        "distanceKm": 34.75411806942718,
        "gradePct": 3.7453112230082617,
        "smoothedEle": 480.2868242852279,
        "gradeBand": "hard"
      },
      {
        "lat": 24.87032,
        "lng": 121.768594,
        "ele": 477.5,
        "distanceKm": 34.76007538489031,
        "gradePct": 3.84270879536169,
        "smoothedEle": 480.56681811199496,
        "gradeBand": "hard"
      },
      {
        "lat": 24.87036,
        "lng": 121.76866,
        "ele": 477.5,
        "distanceKm": 34.768082610800434,
        "gradePct": 3.9776019306368084,
        "smoothedEle": 480.95111990530427,
        "gradeBand": "hard"
      },
      {
        "lat": 24.870804,
        "lng": 121.768847,
        "ele": 479.5,
        "distanceKm": 34.82093475801035,
        "gradePct": 4.860099426015398,
        "smoothedEle": 483.90741622856797,
        "gradeBand": "hard"
      },
      {
        "lat": 24.871198,
        "lng": 121.768995,
        "ele": 483.75,
        "distanceKm": 34.86721990437687,
        "gradePct": 5.39457083481768,
        "smoothedEle": 486.89994100859803,
        "gradeBand": "hard"
      },
      {
        "lat": 24.871704760350205,
        "lng": 121.76900499551664,
        "ele": 490.828231172564,
        "distanceKm": 34.92357818383109,
        "gradePct": 5.573544793640742,
        "smoothedEle": 489.9720075809303,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872212,
        "lng": 121.76899,
        "ele": 498,
        "distanceKm": 34.98000102080336,
        "gradePct": 5.549190687240361,
        "smoothedEle": 492.71616012962977,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872416,
        "lng": 121.769025,
        "ele": 499.5,
        "distanceKm": 35.00295797014063,
        "gradePct": 5.502151791341511,
        "smoothedEle": 493.9061842807402,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872531,
        "lng": 121.769089,
        "ele": 500,
        "distanceKm": 35.01728290039354,
        "gradePct": 5.477547169355439,
        "smoothedEle": 494.65824311901815,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872598,
        "lng": 121.769171,
        "ele": 500.5,
        "distanceKm": 35.02841545893054,
        "gradePct": 5.425814090030692,
        "smoothedEle": 495.2427024422106,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872657,
        "lng": 121.769572,
        "ele": 502.25,
        "distanceKm": 35.069397336556534,
        "gradePct": 5.261241217820338,
        "smoothedEle": 497.54111437443487,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872563,
        "lng": 121.77011,
        "ele": 499,
        "distanceKm": 35.12466873778956,
        "gradePct": 5.38698765964916,
        "smoothedEle": 500.7990225307263,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872432,
        "lng": 121.770774,
        "ele": 502.75,
        "distanceKm": 35.193219439333475,
        "gradePct": 5.485515547418551,
        "smoothedEle": 504.37239713136796,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872326,
        "lng": 121.771431,
        "ele": 503.75,
        "distanceKm": 35.260538391433556,
        "gradePct": 4.896690204155036,
        "smoothedEle": 506.8376530966857,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872374,
        "lng": 121.771897,
        "ele": 507.25,
        "distanceKm": 35.30785114868981,
        "gradePct": 4.183493779779579,
        "smoothedEle": 508.1747169536006,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872493,
        "lng": 121.772278,
        "ele": 511.75,
        "distanceKm": 35.34850089221717,
        "gradePct": 3.5490972758272004,
        "smoothedEle": 509.13952698428034,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872486,
        "lng": 121.772656,
        "ele": 514,
        "distanceKm": 35.38664196651783,
        "gradePct": 3.123327730987837,
        "smoothedEle": 510.27618558007475,
        "gradeBand": "hard"
      },
      {
        "lat": 24.872375,
        "lng": 121.77318,
        "ele": 515.75,
        "distanceKm": 35.440925608360324,
        "gradePct": 2.8264218848357983,
        "smoothedEle": 511.7722662795845,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.872208,
        "lng": 121.773545,
        "ele": 516,
        "distanceKm": 35.48216478009955,
        "gradePct": 2.7232621104496286,
        "smoothedEle": 512.8953415007309,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.871921,
        "lng": 121.773821,
        "ele": 515,
        "distanceKm": 35.524516758516164,
        "gradePct": 2.7523200770354954,
        "smoothedEle": 514.0749105880285,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.871495,
        "lng": 121.773999,
        "ele": 514,
        "distanceKm": 35.57517527543051,
        "gradePct": 2.716546828651009,
        "smoothedEle": 515.3675554336114,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.871034492851344,
        "lng": 121.77403641164541,
        "ele": 513.8942057897548,
        "distanceKm": 35.62652030501127,
        "gradePct": 2.5217015179031743,
        "smoothedEle": 516.418652910824,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.870573328567563,
        "lng": 121.77406360776361,
        "ele": 515.4294705265031,
        "distanceKm": 35.67787284866952,
        "gradePct": 2.2768685615133353,
        "smoothedEle": 517.3321955333209,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.870112164283782,
        "lng": 121.7740908038818,
        "ele": 516.9647352632516,
        "distanceKm": 35.7292253928747,
        "gradePct": 1.933982753958305,
        "smoothedEle": 518.0630255259726,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.869651,
        "lng": 121.774118,
        "ele": 518.5,
        "distanceKm": 35.780577937626795,
        "gradePct": 1.5705229106135112,
        "smoothedEle": 518.6192005601872,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.869232,
        "lng": 121.774142,
        "ele": 520.5,
        "distanceKm": 35.82723154613854,
        "gradePct": 1.241198961132664,
        "smoothedEle": 518.9137035478012,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.868983,
        "lng": 121.77388,
        "ele": 523.25,
        "distanceKm": 35.865509902160525,
        "gradePct": 1.0771143422599454,
        "smoothedEle": 519.2664920047303,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.868861,
        "lng": 121.773165,
        "ele": 523.5,
        "distanceKm": 35.93890667867556,
        "gradePct": 1.2737400881577332,
        "smoothedEle": 520.7153591129131,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.868924,
        "lng": 121.772819,
        "ele": 522.25,
        "distanceKm": 35.97450863250891,
        "gradePct": 1.5546851262308572,
        "smoothedEle": 521.6628370501276,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.869145,
        "lng": 121.772385,
        "ele": 520,
        "distanceKm": 36.024717198425876,
        "gradePct": 2.137299697600467,
        "smoothedEle": 523.1724310107572,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.869183,
        "lng": 121.772284,
        "ele": 518.75,
        "distanceKm": 36.035747867141886,
        "gradePct": 2.2679883744903253,
        "smoothedEle": 523.5281700768487,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.869198,
        "lng": 121.772207,
        "ele": 517.75,
        "distanceKm": 36.04369298192678,
        "gradePct": 2.359490691489976,
        "smoothedEle": 523.7844000286615,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.869185,
        "lng": 121.772118,
        "ele": 517.25,
        "distanceKm": 36.052787275927265,
        "gradePct": 2.4920717854610293,
        "smoothedEle": 524.1333788242302,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.869121,
        "lng": 121.772008,
        "ele": 517,
        "distanceKm": 36.065970339000046,
        "gradePct": 2.6651331533633615,
        "smoothedEle": 524.6058474271356,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.869031,
        "lng": 121.771953,
        "ele": 517.25,
        "distanceKm": 36.07741317246536,
        "gradePct": 2.755301532076846,
        "smoothedEle": 525.0120680151543,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.868922,
        "lng": 121.771947,
        "ele": 518,
        "distanceKm": 36.08954854173866,
        "gradePct": 2.850927023418438,
        "smoothedEle": 525.4428736243563,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.86883,
        "lng": 121.771969,
        "ele": 518.75,
        "distanceKm": 36.100016483139086,
        "gradePct": 2.9660479911594426,
        "smoothedEle": 525.8797548252883,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.868725,
        "lng": 121.772038,
        "ele": 520,
        "distanceKm": 36.11360959517426,
        "gradePct": 3.1085812792949366,
        "smoothedEle": 526.4331521629459,
        "gradeBand": "hard"
      },
      {
        "lat": 24.868347,
        "lng": 121.772446,
        "ele": 527.25,
        "distanceKm": 36.17243888884573,
        "gradePct": 3.7173686621388846,
        "smoothedEle": 529.0424921037601,
        "gradeBand": "hard"
      },
      {
        "lat": 24.867933,
        "lng": 121.772808,
        "ele": 531,
        "distanceKm": 36.231200550425434,
        "gradePct": 4.294264677131419,
        "smoothedEle": 531.970048467006,
        "gradeBand": "hard"
      },
      {
        "lat": 24.86769,
        "lng": 121.7731345,
        "ele": 534.625,
        "distanceKm": 36.273804298872456,
        "gradePct": 4.736865474611864,
        "smoothedEle": 534.3576839518299,
        "gradeBand": "hard"
      },
      {
        "lat": 24.867447,
        "lng": 121.773461,
        "ele": 538.25,
        "distanceKm": 36.316408097381235,
        "gradePct": 5.290706725713828,
        "smoothedEle": 537.1386915918822,
        "gradeBand": "hard"
      },
      {
        "lat": 24.867026304300154,
        "lng": 121.77366938588744,
        "ele": 543.6057999163694,
        "distanceKm": 36.36769429699515,
        "gradePct": 5.772698598822533,
        "smoothedEle": 540.3774456219735,
        "gradeBand": "hard"
      },
      {
        "lat": 24.866587,
        "lng": 121.773842,
        "ele": 547.5,
        "distanceKm": 36.41955403875375,
        "gradePct": 5.287155237459426,
        "smoothedEle": 541.9641197445052,
        "gradeBand": "hard"
      },
      {
        "lat": 24.866112,
        "lng": 121.774169,
        "ele": 548.25,
        "distanceKm": 36.48182790164744,
        "gradePct": 4.3961123208404675,
        "smoothedEle": 543.673657681597,
        "gradeBand": "hard"
      },
      {
        "lat": 24.865797980298584,
        "lng": 121.77448781861453,
        "ele": 549.9874320694446,
        "distanceKm": 36.52930195176511,
        "gradePct": 3.4995918913848594,
        "smoothedEle": 544.952129953146,
        "gradeBand": "hard"
      },
      {
        "lat": 24.865506,
        "lng": 121.774832,
        "ele": 552.25,
        "distanceKm": 36.57683935678847,
        "gradePct": 2.6889327505460487,
        "smoothedEle": 546.0351086930306,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.865281,
        "lng": 121.775114,
        "ele": 546.75,
        "distanceKm": 36.61472545705855,
        "gradePct": 2.389933028741803,
        "smoothedEle": 546.5962529871982,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.865194,
        "lng": 121.775245,
        "ele": 542.5,
        "distanceKm": 36.631103929294056,
        "gradePct": 2.2411647299956847,
        "smoothedEle": 546.7635160304555,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.865134,
        "lng": 121.775373,
        "ele": 538.25,
        "distanceKm": 36.64563912715922,
        "gradePct": 2.1100211720149376,
        "smoothedEle": 546.9002481983315,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.86512,
        "lng": 121.775653,
        "ele": 531,
        "distanceKm": 36.67393043560617,
        "gradePct": 1.687760087862704,
        "smoothedEle": 546.8323771454811,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 36.67393043560617,
      "elevationGainM": 518.6481031739318,
      "elevationLossM": 518.7120398395815,
      "minimumElevationM": 199.5,
      "maximumElevationM": 552.25,
      "maximumSustainedGradePct": 7.767106679244817
    },
    "climbs": [
      {
        "startIndex": 256,
        "endIndex": 389,
        "startDistanceKm": 9.411426408853874,
        "endDistanceKm": 14.10556097108087,
        "distanceKm": 4.694134562226996,
        "gainM": 68.89690296787438,
        "averageGradePct": 1.4677232204265624,
        "maximumGradePct": 5.131584139897929
      },
      {
        "startIndex": 496,
        "endIndex": 691,
        "startDistanceKm": 17.505779217624262,
        "endDistanceKm": 23.914379358588967,
        "distanceKm": 6.408600140964705,
        "gainM": 171.9872409904626,
        "averageGradePct": 2.6836943670599003,
        "maximumGradePct": 7.767106679244817
      },
      {
        "startIndex": 814,
        "endIndex": 1063,
        "startDistanceKm": 27.942823942182404,
        "endDistanceKm": 36.67393043560617,
        "distanceKm": 8.731106493423763,
        "gainM": 243.8242941497757,
        "averageGradePct": 2.7925932908208515,
        "maximumGradePct": 6.550890711005332
      }
    ]
  },
  "yilan-taipingshan": {
    "routeId": "yilan-taipingshan",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T16:52:11.977Z",
      "reviewStatus": "approved",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "宜專1線形成超過1500公尺的連續爬升，預設100公尺分析為爬升2587公尺、最大持續坡度32.4%，短距離尖峰明顯偏高。比較500/200、750/300、1000/500公尺後，爬升依序為1648、1604、1585公尺，最大持續坡度依序為12.0%、10.8%、9.5%；官方路線由土場通往約2000公尺的太平山，本軌跡最高1983公尺，500/200最能保留連續長坡且排除局部SRTM尖峰，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://tps.forest.gov.tw/TPSWeb/wSite/ct?ctNode=274&xItem=2960",
        "referenceLabel": "太平山國家森林遊樂區官方交通與道路資料"
      },
      "reviewedAt": "2026-07-29T17:12:00.000Z",
      "reviewerNote": "研究版太平山莊座標導入1644公尺service、618公尺track、6公尺footway與58公尺steps，已棄用。核准版由土場目前OSM way 496940072（tertiary、ref=宜專1、asphalt）起騎，在園區入口前way 1189812619（tertiary、ref=宜專1）折返，不進中央階梯、檜木原始林步道、蹦蹦車區或園內服務道路；raw全部特殊類別、私人與禁制道路為0。live OSM五點取樣5/5均在0.1公尺內貼合宜專1 tertiary，禁止道路為0。最終500/200公尺bundle為49.5公里、爬升1643公尺、最大12.0%、最高1983公尺。2026-07-13已復園，但宜專1線7K與16.8K仍單線雙向，10.5K曾落石搶通，出發前須查最新開放資訊。"
    },
    "waypoints": [
      {
        "name": "土場宜專1線0K主線",
        "lat": 24.5769248,
        "lng": 121.4919225,
        "role": "start"
      },
      {
        "name": "太平山莊入口宜專1線主線",
        "lat": 24.4976643,
        "lng": 121.5349113,
        "role": "via"
      },
      {
        "name": "土場宜專1線0K主線",
        "lat": 24.5769248,
        "lng": 121.4919225,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.576925,
        "lng": 121.491923,
        "ele": 409.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 405.3294341424127,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.576794,
        "lng": 121.492441,
        "ele": 410.5,
        "distanceKm": 0.05436850695711196,
        "gradePct": -1.6453209502346595,
        "smoothedEle": 404.43489770711756,
        "gradeBand": "descent"
      },
      {
        "lat": 24.576805,
        "lng": 121.493028,
        "ele": 405.25,
        "distanceKm": 0.1137393209571913,
        "gradePct": -2.8060884789880856,
        "smoothedEle": 402.1378081609537,
        "gradeBand": "descent"
      },
      {
        "lat": 24.576747,
        "lng": 121.493418,
        "ele": 404,
        "distanceKm": 0.15370050153945708,
        "gradePct": -2.5889732131204286,
        "smoothedEle": 401.3501693291244,
        "gradeBand": "descent"
      },
      {
        "lat": 24.576718,
        "lng": 121.493799,
        "ele": 398.75,
        "distanceKm": 0.19236245731317864,
        "gradePct": -2.2022130584663717,
        "smoothedEle": 401.0932029878751,
        "gradeBand": "descent"
      },
      {
        "lat": 24.57645,
        "lng": 121.494354,
        "ele": 404.75,
        "distanceKm": 0.2559060144341173,
        "gradePct": -2.4623137598442213,
        "smoothedEle": 399.45078317496245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.576446,
        "lng": 121.494939,
        "ele": 392,
        "distanceKm": 0.3150638230053474,
        "gradePct": -3.083556081912178,
        "smoothedEle": 395.94458993042247,
        "gradeBand": "descent"
      },
      {
        "lat": 24.576419,
        "lng": 121.495056,
        "ele": 390.25,
        "distanceKm": 0.3272700338095969,
        "gradePct": -3.3263980406784697,
        "smoothedEle": 395.21832038756963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.576355,
        "lng": 121.495164,
        "ele": 389,
        "distanceKm": 0.34030520241093104,
        "gradePct": -3.5529128093356803,
        "smoothedEle": 394.5083663845549,
        "gradeBand": "descent"
      },
      {
        "lat": 24.576293,
        "lng": 121.495199,
        "ele": 389.75,
        "distanceKm": 0.34805471230225,
        "gradePct": -3.6593327900667987,
        "smoothedEle": 394.1427828146929,
        "gradeBand": "descent"
      },
      {
        "lat": 24.575638,
        "lng": 121.495249,
        "ele": 399,
        "distanceKm": 0.42106277780435786,
        "gradePct": -4.559473052463119,
        "smoothedEle": 391.23243541201765,
        "gradeBand": "descent"
      },
      {
        "lat": 24.575447,
        "lng": 121.495317,
        "ele": 396.75,
        "distanceKm": 0.44338647504556256,
        "gradePct": -4.560352982862412,
        "smoothedEle": 390.653671613957,
        "gradeBand": "descent"
      },
      {
        "lat": 24.575294,
        "lng": 121.495462,
        "ele": 391.25,
        "distanceKm": 0.46584607102002895,
        "gradePct": -4.384734720272064,
        "smoothedEle": 390.09218171459537,
        "gradeBand": "descent"
      },
      {
        "lat": 24.575062,
        "lng": 121.495781,
        "ele": 380.25,
        "distanceKm": 0.5071508492840522,
        "gradePct": -3.7444302730122843,
        "smoothedEle": 388.9247192891274,
        "gradeBand": "descent"
      },
      {
        "lat": 24.574669,
        "lng": 121.496115,
        "ele": 380.75,
        "distanceKm": 0.5623814048654314,
        "gradePct": -2.7390338018439024,
        "smoothedEle": 388.0936049890944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.574082,
        "lng": 121.496288,
        "ele": 384.5,
        "distanceKm": 0.6299567091223766,
        "gradePct": -1.2942540811520757,
        "smoothedEle": 388.4133433364088,
        "gradeBand": "descent"
      },
      {
        "lat": 24.573477,
        "lng": 121.496298,
        "ele": 386.25,
        "distanceKm": 0.6972373326165338,
        "gradePct": -0.42181079129906607,
        "smoothedEle": 388.36129914326375,
        "gradeBand": "descent"
      },
      {
        "lat": 24.572987,
        "lng": 121.496303,
        "ele": 390.25,
        "distanceKm": 0.7517252679372036,
        "gradePct": 0.16331148523727274,
        "smoothedEle": 388.58058245339816,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5725075,
        "lng": 121.4963515,
        "ele": 391.5,
        "distanceKm": 0.8052684097042854,
        "gradePct": 0.5788479765272709,
        "smoothedEle": 389.45422448351104,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.572028,
        "lng": 121.4964,
        "ele": 392.75,
        "distanceKm": 0.8588115531904089,
        "gradePct": 0.9802543672923034,
        "smoothedEle": 390.35153172079663,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571563,
        "lng": 121.496256,
        "ele": 398.5,
        "distanceKm": 0.912528720107341,
        "gradePct": 1.3366469086316213,
        "smoothedEle": 391.0961321993658,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571481,
        "lng": 121.496235,
        "ele": 398.5,
        "distanceKm": 0.921890754938952,
        "gradePct": 1.473362784828367,
        "smoothedEle": 391.40724087923667,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571415,
        "lng": 121.496235,
        "ele": 398.25,
        "distanceKm": 0.9292296302344034,
        "gradePct": 1.5998687104500395,
        "smoothedEle": 391.6897875781115,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571368,
        "lng": 121.496251,
        "ele": 397.25,
        "distanceKm": 0.9347005350339606,
        "gradePct": 1.6941749696237314,
        "smoothedEle": 391.90041741289446,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571326,
        "lng": 121.496281,
        "ele": 396.25,
        "distanceKm": 0.9402695992124492,
        "gradePct": 1.7901732786811242,
        "smoothedEle": 392.1148263837663,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571291,
        "lng": 121.496347,
        "ele": 394.5,
        "distanceKm": 0.9479956976125098,
        "gradePct": 1.9583947129131043,
        "smoothedEle": 392.4823624551865,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571248125772332,
        "lng": 121.49683459713945,
        "ele": 387.7889176880804,
        "distanceKm": 0.9975342707471424,
        "gradePct": 2.9184315112667614,
        "smoothedEle": 395.16489265388054,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.57124108384822,
        "lng": 121.49732606475963,
        "ele": 389.10927845872027,
        "distanceKm": 1.047240495147872,
        "gradePct": 4.339511169275456,
        "smoothedEle": 398.83663951775344,
        "gradeBand": "hard"
      },
      {
        "lat": 24.57123404192411,
        "lng": 121.49781753237983,
        "ele": 390.42963922936013,
        "distanceKm": 1.096946722342616,
        "gradePct": 6.732823468134627,
        "smoothedEle": 404.34578928251005,
        "gradeBand": "steep"
      },
      {
        "lat": 24.571227,
        "lng": 121.498309,
        "ele": 391.75,
        "distanceKm": 1.1466529523284996,
        "gradePct": 8.990328775043768,
        "smoothedEle": 410.39914464399214,
        "gradeBand": "steep"
      },
      {
        "lat": 24.571178,
        "lng": 121.498657,
        "ele": 405.5,
        "distanceKm": 1.182264030708987,
        "gradePct": 9.944692436776482,
        "smoothedEle": 414.22738895451613,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.571082,
        "lng": 121.498841,
        "ele": 412.5,
        "distanceKm": 1.2037157526563438,
        "gradePct": 10.466947265834794,
        "smoothedEle": 416.555406795827,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.570794,
        "lng": 121.499023,
        "ele": 417.75,
        "distanceKm": 1.2406520511449775,
        "gradePct": 11.221461743328835,
        "smoothedEle": 420.7928815294634,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.570623,
        "lng": 121.499178,
        "ele": 423.75,
        "distanceKm": 1.2652942478937246,
        "gradePct": 11.469566095458081,
        "smoothedEle": 423.7767448926353,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.570474,
        "lng": 121.499436,
        "ele": 437.5,
        "distanceKm": 1.2962008867577717,
        "gradePct": 11.56380451986411,
        "smoothedEle": 427.3907342342822,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.570188,
        "lng": 121.499701,
        "ele": 453.75,
        "distanceKm": 1.3377883293072583,
        "gradePct": 11.268418693195489,
        "smoothedEle": 431.85642493445397,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.56981008278651,
        "lng": 121.49973568566291,
        "ele": 455.27854431952886,
        "distanceKm": 1.379957003082148,
        "gradePct": 10.776462267012962,
        "smoothedEle": 435.53230456018827,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.569429,
        "lng": 121.499729,
        "ele": 451.75,
        "distanceKm": 1.4223369274913167,
        "gradePct": 10.324113548886233,
        "smoothedEle": 439.3399269468437,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.569094,
        "lng": 121.499702,
        "ele": 448.75,
        "distanceKm": 1.4596872155311322,
        "gradePct": 9.579677234998176,
        "smoothedEle": 442.2571575209832,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.568762376759057,
        "lng": 121.4996348606514,
        "ele": 448.3326953714472,
        "distanceKm": 1.4971819557116233,
        "gradePct": 8.647988843452312,
        "smoothedEle": 444.7920598395694,
        "gradeBand": "steep"
      },
      {
        "lat": 24.568432,
        "lng": 121.49956,
        "ele": 447.25,
        "distanceKm": 1.5346901690715178,
        "gradePct": 7.504408816550809,
        "smoothedEle": 446.5325598031388,
        "gradeBand": "steep"
      },
      {
        "lat": 24.56812,
        "lng": 121.499433,
        "ele": 442.5,
        "distanceKm": 1.5716840165065578,
        "gradePct": 5.876884826707455,
        "smoothedEle": 446.5649108457551,
        "gradeBand": "hard"
      },
      {
        "lat": 24.5678,
        "lng": 121.499208,
        "ele": 432.75,
        "distanceKm": 1.6139196536903042,
        "gradePct": 3.324664986112169,
        "smoothedEle": 445.23300733613087,
        "gradeBand": "hard"
      },
      {
        "lat": 24.567604,
        "lng": 121.499185,
        "ele": 435.75,
        "distanceKm": 1.6358376553527367,
        "gradePct": 2.2367070855268603,
        "smoothedEle": 444.8678105251611,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.56719,
        "lng": 121.499295,
        "ele": 447.25,
        "distanceKm": 1.683197414595599,
        "gradePct": 0.6137484317009979,
        "smoothedEle": 445.0741055402555,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.566819,
        "lng": 121.499292,
        "ele": 450,
        "distanceKm": 1.724451904941794,
        "gradePct": 0.14264929283626773,
        "smoothedEle": 446.3427704880943,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.566486,
        "lng": 121.499154,
        "ele": 447.5,
        "distanceKm": 1.7640225545072472,
        "gradePct": 0.6017654652819432,
        "smoothedEle": 447.76174184374025,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5662,
        "lng": 121.498898,
        "ele": 440.75,
        "distanceKm": 1.805029939382494,
        "gradePct": 1.9284855158867635,
        "smoothedEle": 449.37031607500745,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.566119,
        "lng": 121.498821,
        "ele": 438.25,
        "distanceKm": 1.8169362352990688,
        "gradePct": 2.385489696591066,
        "smoothedEle": 449.95372457491965,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.566065,
        "lng": 121.49878,
        "ele": 437.25,
        "distanceKm": 1.8242332532378995,
        "gradePct": 2.6250579372769787,
        "smoothedEle": 450.3112784539223,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.565964,
        "lng": 121.498741,
        "ele": 436.75,
        "distanceKm": 1.836136378319939,
        "gradePct": 3.012709923186379,
        "smoothedEle": 450.89453158294225,
        "gradeBand": "hard"
      },
      {
        "lat": 24.565895,
        "lng": 121.498746,
        "ele": 438,
        "distanceKm": 1.8438254831476788,
        "gradePct": 3.2126197645413876,
        "smoothedEle": 451.3278443412477,
        "gradeBand": "hard"
      },
      {
        "lat": 24.565843,
        "lng": 121.498764,
        "ele": 439.5,
        "distanceKm": 1.849887400170365,
        "gradePct": 3.4661415204131756,
        "smoothedEle": 451.8612930392441,
        "gradeBand": "hard"
      },
      {
        "lat": 24.56559114425007,
        "lng": 121.49906225829486,
        "ele": 450.1200023845781,
        "distanceKm": 1.8910467206125239,
        "gradePct": 5.053650912867967,
        "smoothedEle": 455.4227905299808,
        "gradeBand": "hard"
      },
      {
        "lat": 24.565346,
        "lng": 121.499368,
        "ele": 461,
        "distanceKm": 1.9322665953159555,
        "gradePct": 6.158055462468669,
        "smoothedEle": 458.9391098630558,
        "gradeBand": "steep"
      },
      {
        "lat": 24.565248,
        "lng": 121.499466,
        "ele": 464.25,
        "distanceKm": 1.9469965345461313,
        "gradePct": 6.415068722323528,
        "smoothedEle": 459.9813400404652,
        "gradeBand": "steep"
      },
      {
        "lat": 24.565172,
        "lng": 121.49952,
        "ele": 466,
        "distanceKm": 1.957058323462671,
        "gradePct": 6.56284228649608,
        "smoothedEle": 460.63769474755657,
        "gradeBand": "steep"
      },
      {
        "lat": 24.565098,
        "lng": 121.499543,
        "ele": 466,
        "distanceKm": 1.9656091985987192,
        "gradePct": 6.669796652868742,
        "smoothedEle": 461.1635735684235,
        "gradeBand": "steep"
      },
      {
        "lat": 24.5646655,
        "lng": 121.4996165,
        "ele": 466.5,
        "distanceKm": 2.0142721156877594,
        "gradePct": 7.323525304119388,
        "smoothedEle": 464.47023332220425,
        "gradeBand": "steep"
      },
      {
        "lat": 24.564233,
        "lng": 121.49969,
        "ele": 467,
        "distanceKm": 2.06293503669432,
        "gradePct": 7.6111597359628735,
        "smoothedEle": 468.2126186327703,
        "gradeBand": "steep"
      },
      {
        "lat": 24.563778,
        "lng": 121.499971,
        "ele": 476.75,
        "distanceKm": 2.1209635721870996,
        "gradePct": 7.758939463487879,
        "smoothedEle": 473.4927685191999,
        "gradeBand": "steep"
      },
      {
        "lat": 24.563512,
        "lng": 121.500167,
        "ele": 484.75,
        "distanceKm": 2.156569157991368,
        "gradePct": 8.018812988405388,
        "smoothedEle": 476.6434112833823,
        "gradeBand": "steep"
      },
      {
        "lat": 24.562936,
        "lng": 121.500289,
        "ele": 480.75,
        "distanceKm": 2.221795094887439,
        "gradePct": 8.749196993258657,
        "smoothedEle": 482.5471763613931,
        "gradeBand": "steep"
      },
      {
        "lat": 24.562649,
        "lng": 121.500483,
        "ele": 485.25,
        "distanceKm": 2.2592567091572713,
        "gradePct": 9.011054935347538,
        "smoothedEle": 485.95184949297095,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.562333,
        "lng": 121.500475,
        "ele": 480.75,
        "distanceKm": 2.2944036678281146,
        "gradePct": 8.7192951558795,
        "smoothedEle": 488.5146120563978,
        "gradeBand": "steep"
      },
      {
        "lat": 24.561977,
        "lng": 121.500495,
        "ele": 481.25,
        "distanceKm": 2.334040757810851,
        "gradePct": 7.98181779401073,
        "smoothedEle": 490.6135691792366,
        "gradeBand": "steep"
      },
      {
        "lat": 24.561635,
        "lng": 121.500673,
        "ele": 491,
        "distanceKm": 2.3761150526089314,
        "gradePct": 6.8671824086325675,
        "smoothedEle": 492.14692462580416,
        "gradeBand": "steep"
      },
      {
        "lat": 24.561344,
        "lng": 121.500822,
        "ele": 500.5,
        "distanceKm": 2.411809554043912,
        "gradePct": 6.126682219995098,
        "smoothedEle": 493.89672415845797,
        "gradeBand": "steep"
      },
      {
        "lat": 24.561065,
        "lng": 121.500987,
        "ele": 510.5,
        "distanceKm": 2.447036136943824,
        "gradePct": 5.7218551983352715,
        "smoothedEle": 496.28490156168107,
        "gradeBand": "hard"
      },
      {
        "lat": 24.560942,
        "lng": 121.501017,
        "ele": 512.5,
        "distanceKm": 2.461045615075888,
        "gradePct": 5.647676082269977,
        "smoothedEle": 497.37764085598207,
        "gradeBand": "hard"
      },
      {
        "lat": 24.560879,
        "lng": 121.501015,
        "ele": 512.5,
        "distanceKm": 2.4680538246338326,
        "gradePct": 5.659085287606127,
        "smoothedEle": 497.91146726765817,
        "gradeBand": "hard"
      },
      {
        "lat": 24.560807,
        "lng": 121.500989,
        "ele": 512.25,
        "distanceKm": 2.4764806260107397,
        "gradePct": 5.6362670769042,
        "smoothedEle": 498.48027636059936,
        "gradeBand": "hard"
      },
      {
        "lat": 24.560727,
        "lng": 121.500933,
        "ele": 512.25,
        "distanceKm": 2.487026110936159,
        "gradePct": 5.607711865238509,
        "smoothedEle": 499.1920965930652,
        "gradeBand": "hard"
      },
      {
        "lat": 24.56056642842505,
        "lng": 121.50057950722265,
        "ele": 503.0403259940489,
        "distanceKm": 2.5269870176223876,
        "gradePct": 5.7205543706375535,
        "smoothedEle": 501.6811515537255,
        "gradeBand": "hard"
      },
      {
        "lat": 24.560452,
        "lng": 121.5002,
        "ele": 492.75,
        "distanceKm": 2.5674223746412967,
        "gradePct": 6.583068552097069,
        "smoothedEle": 504.99626580576717,
        "gradeBand": "steep"
      },
      {
        "lat": 24.560239,
        "lng": 121.499945,
        "ele": 491,
        "distanceKm": 2.6024373301811496,
        "gradePct": 7.302641826620084,
        "smoothedEle": 508.04256693773436,
        "gradeBand": "steep"
      },
      {
        "lat": 24.560133,
        "lng": 121.499933,
        "ele": 494.75,
        "distanceKm": 2.614286324045667,
        "gradePct": 7.384876614614762,
        "smoothedEle": 508.8343893923227,
        "gradeBand": "steep"
      },
      {
        "lat": 24.559979,
        "lng": 121.499946,
        "ele": 501.5,
        "distanceKm": 2.6314607643985366,
        "gradePct": 7.330822205004943,
        "smoothedEle": 509.8906174740242,
        "gradeBand": "steep"
      },
      {
        "lat": 24.559768,
        "lng": 121.50011,
        "ele": 512.5,
        "distanceKm": 2.660193549607731,
        "gradePct": 7.054500068676839,
        "smoothedEle": 511.4201798868195,
        "gradeBand": "steep"
      },
      {
        "lat": 24.559693,
        "lng": 121.500163,
        "ele": 516,
        "distanceKm": 2.670107214842687,
        "gradePct": 6.922982355670762,
        "smoothedEle": 511.89603581809735,
        "gradeBand": "steep"
      },
      {
        "lat": 24.559575,
        "lng": 121.500188,
        "ele": 519.5,
        "distanceKm": 2.683469619313975,
        "gradePct": 6.752231173874657,
        "smoothedEle": 512.456495756317,
        "gradeBand": "steep"
      },
      {
        "lat": 24.559525,
        "lng": 121.500172,
        "ele": 519.75,
        "distanceKm": 2.6892600699580274,
        "gradePct": 6.6764162736404495,
        "smoothedEle": 512.6840763030707,
        "gradeBand": "steep"
      },
      {
        "lat": 24.559117,
        "lng": 121.499862,
        "ele": 514.5,
        "distanceKm": 2.744406830006089,
        "gradePct": 5.91427258220781,
        "smoothedEle": 514.9378693017069,
        "gradeBand": "hard"
      },
      {
        "lat": 24.558695,
        "lng": 121.49985,
        "ele": 521,
        "distanceKm": 2.791346845612067,
        "gradePct": 5.293602538101733,
        "smoothedEle": 517.6648998564276,
        "gradeBand": "hard"
      },
      {
        "lat": 24.558381,
        "lng": 121.4998,
        "ele": 524.75,
        "distanceKm": 2.826626390646192,
        "gradePct": 5.162855021893246,
        "smoothedEle": 519.9190135320415,
        "gradeBand": "hard"
      },
      {
        "lat": 24.557942,
        "lng": 121.499539,
        "ele": 521.75,
        "distanceKm": 2.8821209760028106,
        "gradePct": 5.654025427729147,
        "smoothedEle": 523.7079804040633,
        "gradeBand": "hard"
      },
      {
        "lat": 24.557669,
        "lng": 121.499531,
        "ele": 524.5,
        "distanceKm": 2.9124880134763727,
        "gradePct": 5.831078267677863,
        "smoothedEle": 525.2955356882899,
        "gradeBand": "hard"
      },
      {
        "lat": 24.55729793637038,
        "lng": 121.49963834589582,
        "ele": 530.5158535580588,
        "distanceKm": 2.955152884102997,
        "gradePct": 5.744853968695049,
        "smoothedEle": 527.0518807781273,
        "gradeBand": "hard"
      },
      {
        "lat": 24.55693,
        "lng": 121.499758,
        "ele": 536,
        "distanceKm": 2.9978178115183747,
        "gradePct": 5.859797393964294,
        "smoothedEle": 529.7979436480134,
        "gradeBand": "hard"
      },
      {
        "lat": 24.556779,
        "lng": 121.49973,
        "ele": 536,
        "distanceKm": 3.0148454011980887,
        "gradePct": 5.984158949088959,
        "smoothedEle": 531.134609437871,
        "gradeBand": "hard"
      },
      {
        "lat": 24.55662,
        "lng": 121.499585,
        "ele": 531.5,
        "distanceKm": 3.0378158946352567,
        "gradePct": 6.051733599831886,
        "smoothedEle": 532.7864590488055,
        "gradeBand": "steep"
      },
      {
        "lat": 24.556557,
        "lng": 121.499539,
        "ele": 528.75,
        "distanceKm": 3.046225310189308,
        "gradePct": 6.149382326825725,
        "smoothedEle": 533.5559205720011,
        "gradeBand": "steep"
      },
      {
        "lat": 24.556502,
        "lng": 121.49952,
        "ele": 527,
        "distanceKm": 3.052635829156097,
        "gradePct": 6.223820200950678,
        "smoothedEle": 534.1424830574623,
        "gradeBand": "steep"
      },
      {
        "lat": 24.55646,
        "lng": 121.499517,
        "ele": 526,
        "distanceKm": 3.057315868219869,
        "gradePct": 6.2781640318532315,
        "smoothedEle": 534.5707066317974,
        "gradeBand": "steep"
      },
      {
        "lat": 24.556419,
        "lng": 121.499529,
        "ele": 525.5,
        "distanceKm": 3.0620336451173373,
        "gradePct": 6.321519716963615,
        "smoothedEle": 534.9795305155044,
        "gradeBand": "steep"
      },
      {
        "lat": 24.556333,
        "lng": 121.499572,
        "ele": 524.75,
        "distanceKm": 3.072538874894458,
        "gradePct": 6.404110076540229,
        "smoothedEle": 535.8619698167823,
        "gradeBand": "steep"
      },
      {
        "lat": 24.556282,
        "lng": 121.499613,
        "ele": 525,
        "distanceKm": 3.079564142545537,
        "gradePct": 6.459341555882981,
        "smoothedEle": 536.4520922994731,
        "gradeBand": "steep"
      },
      {
        "lat": 24.556066,
        "lng": 121.499953,
        "ele": 530.5,
        "distanceKm": 3.1215085131583695,
        "gradePct": 7.140774009029535,
        "smoothedEle": 539.9484222359557,
        "gradeBand": "steep"
      },
      {
        "lat": 24.556103,
        "lng": 121.50036,
        "ele": 535.25,
        "distanceKm": 3.1628767868109575,
        "gradePct": 7.670200942870502,
        "smoothedEle": 542.8894198611367,
        "gradeBand": "steep"
      },
      {
        "lat": 24.556172,
        "lng": 121.500554,
        "ele": 539.25,
        "distanceKm": 3.1839443271393426,
        "gradePct": 7.9928870266917835,
        "smoothedEle": 544.8907720751617,
        "gradeBand": "steep"
      },
      {
        "lat": 24.556188,
        "lng": 121.500648,
        "ele": 540.75,
        "distanceKm": 3.1936163334973617,
        "gradePct": 8.102204011349208,
        "smoothedEle": 545.7319299568808,
        "gradeBand": "steep"
      },
      {
        "lat": 24.556179,
        "lng": 121.50124149999999,
        "ele": 553.75,
        "distanceKm": 3.2536500493617706,
        "gradePct": 8.600757973648562,
        "smoothedEle": 551.4368001535786,
        "gradeBand": "steep"
      },
      {
        "lat": 24.55617,
        "lng": 121.501835,
        "ele": 566.75,
        "distanceKm": 3.3136837695351233,
        "gradePct": 9.92536579776378,
        "smoothedEle": 559.1469117075571,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.556049,
        "lng": 121.502146,
        "ele": 567.5,
        "distanceKm": 3.347894521622434,
        "gradePct": 11.20185195570547,
        "smoothedEle": 564.227988526409,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.555863,
        "lng": 121.502292,
        "ele": 558.75,
        "distanceKm": 3.3733070503665488,
        "gradePct": 11.584034707036938,
        "smoothedEle": 567.0483325694191,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.555827,
        "lng": 121.502335,
        "ele": 557.5,
        "distanceKm": 3.379217845832647,
        "gradePct": 11.620986173188317,
        "smoothedEle": 567.6837430820248,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.555799,
        "lng": 121.502433,
        "ele": 558.5,
        "distanceKm": 3.389606899728977,
        "gradePct": 11.708665014633416,
        "smoothedEle": 568.8005663758802,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.556011,
        "lng": 121.50289,
        "ele": 574,
        "distanceKm": 3.441491435858351,
        "gradePct": 11.476120072440542,
        "smoothedEle": 573.2336343601451,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.556127,
        "lng": 121.503328,
        "ele": 584,
        "distanceKm": 3.4876295813442315,
        "gradePct": 10.910885489688885,
        "smoothedEle": 577.6225515989386,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.556143,
        "lng": 121.503774,
        "ele": 596.75,
        "distanceKm": 3.5327721972381276,
        "gradePct": 10.682595001791006,
        "smoothedEle": 583.3471685130187,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.556052,
        "lng": 121.504149,
        "ele": 599.25,
        "distanceKm": 3.5720255805140417,
        "gradePct": 10.428036698536564,
        "smoothedEle": 587.7621853358258,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.555702,
        "lng": 121.504543,
        "ele": 584.25,
        "distanceKm": 3.6277259516970313,
        "gradePct": 11.041964704592536,
        "smoothedEle": 594.1414266834884,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.555562,
        "lng": 121.504726,
        "ele": 577.75,
        "distanceKm": 3.651910643708975,
        "gradePct": 11.385866712444843,
        "smoothedEle": 596.9965008370593,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.555532,
        "lng": 121.504795,
        "ele": 577.5,
        "distanceKm": 3.6596455081528854,
        "gradePct": 11.494155047823929,
        "smoothedEle": 597.9488608718888,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.555517,
        "lng": 121.504918,
        "ele": 580.75,
        "distanceKm": 3.6721968590019025,
        "gradePct": 11.584873755999798,
        "smoothedEle": 599.3242526514096,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.555543,
        "lng": 121.505306,
        "ele": 591.25,
        "distanceKm": 3.7115449420210966,
        "gradePct": 11.194407895095585,
        "smoothedEle": 603.0441176081001,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.555725,
        "lng": 121.505736,
        "ele": 615.25,
        "distanceKm": 3.7595125773249936,
        "gradePct": 9.31324180055298,
        "smoothedEle": 604.9812712816732,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.555745,
        "lng": 121.505808,
        "ele": 618.25,
        "distanceKm": 3.767126555155339,
        "gradePct": 8.948835875647196,
        "smoothedEle": 605.1088401410905,
        "gradeBand": "steep"
      },
      {
        "lat": 24.555731,
        "lng": 121.505934,
        "ele": 621.25,
        "distanceKm": 3.779964714939864,
        "gradePct": 8.305359154471368,
        "smoothedEle": 605.2821552981817,
        "gradeBand": "steep"
      },
      {
        "lat": 24.55561,
        "lng": 121.506241,
        "ele": 623.5,
        "distanceKm": 3.8138039890819817,
        "gradePct": 6.6076605955149095,
        "smoothedEle": 605.7622960303327,
        "gradeBand": "steep"
      },
      {
        "lat": 24.555414,
        "lng": 121.506567,
        "ele": 622.75,
        "distanceKm": 3.853327214583518,
        "gradePct": 5.181168826756784,
        "smoothedEle": 607.5332546677665,
        "gradeBand": "hard"
      },
      {
        "lat": 24.55521,
        "lng": 121.506744,
        "ele": 617.25,
        "distanceKm": 3.8822239240067375,
        "gradePct": 4.857208262215177,
        "smoothedEle": 609.9866017018476,
        "gradeBand": "hard"
      },
      {
        "lat": 24.554977,
        "lng": 121.507103,
        "ele": 621.5,
        "distanceKm": 3.9268286304943425,
        "gradePct": 5.520529432423184,
        "smoothedEle": 614.7024020894298,
        "gradeBand": "hard"
      },
      {
        "lat": 24.554414,
        "lng": 121.507376,
        "ele": 603.5,
        "distanceKm": 3.9952499796515797,
        "gradePct": 7.867867971501647,
        "smoothedEle": 621.2347717262386,
        "gradeBand": "steep"
      },
      {
        "lat": 24.554305,
        "lng": 121.507484,
        "ele": 604,
        "distanceKm": 4.011566044763613,
        "gradePct": 8.17633248046888,
        "smoothedEle": 622.0832071120642,
        "gradeBand": "steep"
      },
      {
        "lat": 24.554256,
        "lng": 121.507571,
        "ele": 603.5,
        "distanceKm": 4.021915517025736,
        "gradePct": 8.284894126354054,
        "smoothedEle": 622.6955460271795,
        "gradeBand": "steep"
      },
      {
        "lat": 24.554213,
        "lng": 121.507758,
        "ele": 604.75,
        "distanceKm": 4.041423635328616,
        "gradePct": 8.491614991341741,
        "smoothedEle": 623.9831084841494,
        "gradeBand": "steep"
      },
      {
        "lat": 24.554321,
        "lng": 121.508217,
        "ele": 621,
        "distanceKm": 4.089374812141338,
        "gradePct": 8.155540009092924,
        "smoothedEle": 627.0537042049269,
        "gradeBand": "steep"
      },
      {
        "lat": 24.55431774631084,
        "lng": 121.50873098053978,
        "ele": 630.771791791621,
        "distanceKm": 4.1413597826121835,
        "gradePct": 7.340200474310557,
        "smoothedEle": 630.7701310877259,
        "gradeBand": "steep"
      },
      {
        "lat": 24.554288,
        "lng": 121.509246,
        "ele": 638.5,
        "distanceKm": 4.193553488983086,
        "gradePct": 6.50043323717153,
        "smoothedEle": 634.0736696882898,
        "gradeBand": "steep"
      },
      {
        "lat": 24.554264,
        "lng": 121.509339,
        "ele": 640.75,
        "distanceKm": 4.203330716735159,
        "gradePct": 6.513195815871023,
        "smoothedEle": 634.6813616863267,
        "gradeBand": "steep"
      },
      {
        "lat": 24.554208,
        "lng": 121.509415,
        "ele": 640.5,
        "distanceKm": 4.213223060467312,
        "gradePct": 6.60592022484712,
        "smoothedEle": 635.393086879381,
        "gradeBand": "steep"
      },
      {
        "lat": 24.553996,
        "lng": 121.509607,
        "ele": 641.25,
        "distanceKm": 4.243764725478402,
        "gradePct": 7.15711556625734,
        "smoothedEle": 638.4472533804902,
        "gradeBand": "steep"
      },
      {
        "lat": 24.553755,
        "lng": 121.509982,
        "ele": 654,
        "distanceKm": 4.2902041860477125,
        "gradePct": 8.399692613258075,
        "smoothedEle": 643.9123817125318,
        "gradeBand": "steep"
      },
      {
        "lat": 24.553395,
        "lng": 121.510114,
        "ele": 656,
        "distanceKm": 4.332401990900831,
        "gradePct": 9.519060132985594,
        "smoothedEle": 649.1678551463883,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.553021,
        "lng": 121.510117,
        "ele": 656,
        "distanceKm": 4.373990057782584,
        "gradePct": 10.276923622854602,
        "smoothedEle": 653.389272811785,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.552641,
        "lng": 121.510055,
        "ele": 651.75,
        "distanceKm": 4.4167069570178805,
        "gradePct": 10.550356712072007,
        "smoothedEle": 656.8421899585819,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.552069,
        "lng": 121.509984,
        "ele": 653.5,
        "distanceKm": 4.480714637002998,
        "gradePct": 8.66943362669604,
        "smoothedEle": 660.1344917360425,
        "gradeBand": "steep"
      },
      {
        "lat": 24.551429,
        "lng": 121.510045,
        "ele": 671.5,
        "distanceKm": 4.552146425732755,
        "gradePct": 6.04425107961975,
        "smoothedEle": 663.260526103128,
        "gradeBand": "steep"
      },
      {
        "lat": 24.551255,
        "lng": 121.510029,
        "ele": 675.75,
        "distanceKm": 4.571561928102951,
        "gradePct": 5.4946075348726096,
        "smoothedEle": 664.1320193560125,
        "gradeBand": "hard"
      },
      {
        "lat": 24.550948,
        "lng": 121.509837,
        "ele": 673.25,
        "distanceKm": 4.610835779683895,
        "gradePct": 4.5215546833853715,
        "smoothedEle": 665.4107169176564,
        "gradeBand": "hard"
      },
      {
        "lat": 24.55059,
        "lng": 121.509729,
        "ele": 670.75,
        "distanceKm": 4.65211512128396,
        "gradePct": 3.9824141495807304,
        "smoothedEle": 666.628274116055,
        "gradeBand": "hard"
      },
      {
        "lat": 24.550166,
        "lng": 121.509589,
        "ele": 663.75,
        "distanceKm": 4.701342322648157,
        "gradePct": 4.332318309196008,
        "smoothedEle": 669.7018476533192,
        "gradeBand": "hard"
      },
      {
        "lat": 24.550077,
        "lng": 121.509584,
        "ele": 663.75,
        "distanceKm": 4.711251597620177,
        "gradePct": 4.556453673028325,
        "smoothedEle": 670.583773125829,
        "gradeBand": "hard"
      },
      {
        "lat": 24.550002,
        "lng": 121.509608,
        "ele": 665.25,
        "distanceKm": 4.719937325031851,
        "gradePct": 4.75291392658482,
        "smoothedEle": 671.3568028654679,
        "gradeBand": "hard"
      },
      {
        "lat": 24.549787,
        "lng": 121.509776,
        "ele": 665.75,
        "distanceKm": 4.749267700039356,
        "gradePct": 5.574983960516926,
        "smoothedEle": 674.2845137622784,
        "gradeBand": "hard"
      },
      {
        "lat": 24.549526,
        "lng": 121.510306,
        "ele": 677.5,
        "distanceKm": 4.8102255915038326,
        "gradePct": 7.114012864936166,
        "smoothedEle": 679.6188758377665,
        "gradeBand": "steep"
      },
      {
        "lat": 24.549128,
        "lng": 121.510618,
        "ele": 668.75,
        "distanceKm": 4.864579904282617,
        "gradePct": 8.019018966250592,
        "smoothedEle": 683.4445693150819,
        "gradeBand": "steep"
      },
      {
        "lat": 24.549075,
        "lng": 121.510678,
        "ele": 668,
        "distanceKm": 4.87303919462422,
        "gradePct": 8.057354408588246,
        "smoothedEle": 684.0494085745065,
        "gradeBand": "steep"
      },
      {
        "lat": 24.549029,
        "lng": 121.510832,
        "ele": 670.5,
        "distanceKm": 4.889433668877827,
        "gradePct": 8.15154571663168,
        "smoothedEle": 685.2614045756089,
        "gradeBand": "steep"
      },
      {
        "lat": 24.549043,
        "lng": 121.510942,
        "ele": 674.25,
        "distanceKm": 4.900667859112391,
        "gradePct": 8.21927677076814,
        "smoothedEle": 686.098290060809,
        "gradeBand": "steep"
      },
      {
        "lat": 24.549154,
        "lng": 121.511215,
        "ele": 686,
        "distanceKm": 4.930913120308742,
        "gradePct": 7.971315927588756,
        "smoothedEle": 688.3950209661364,
        "gradeBand": "steep"
      },
      {
        "lat": 24.549207,
        "lng": 121.511588,
        "ele": 698,
        "distanceKm": 4.969097213189745,
        "gradePct": 8.369401545444354,
        "smoothedEle": 692.7585770530129,
        "gradeBand": "steep"
      },
      {
        "lat": 24.549185,
        "lng": 121.511682,
        "ele": 700,
        "distanceKm": 4.978914384084951,
        "gradePct": 8.552082241893565,
        "smoothedEle": 693.9830289238438,
        "gradeBand": "steep"
      },
      {
        "lat": 24.549138,
        "lng": 121.511785,
        "ele": 706.5,
        "distanceKm": 4.990569564696917,
        "gradePct": 8.778231128940881,
        "smoothedEle": 695.4552595064029,
        "gradeBand": "steep"
      },
      {
        "lat": 24.549084,
        "lng": 121.511841,
        "ele": 709.5,
        "distanceKm": 4.998824008013468,
        "gradePct": 8.93502854566838,
        "smoothedEle": 696.4911921426301,
        "gradeBand": "steep"
      },
      {
        "lat": 24.548994,
        "lng": 121.511885,
        "ele": 710,
        "distanceKm": 5.009776477120237,
        "gradePct": 9.119741761696382,
        "smoothedEle": 697.8190578256591,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.54861,
        "lng": 121.512036,
        "ele": 710.5,
        "distanceKm": 5.055124611038682,
        "gradePct": 9.739012932653898,
        "smoothedEle": 702.2570904239108,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.548043,
        "lng": 121.512132,
        "ele": 709,
        "distanceKm": 5.118915538342905,
        "gradePct": 11.002860449414516,
        "smoothedEle": 709.4896828692686,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.547634,
        "lng": 121.512136,
        "ele": 707.75,
        "distanceKm": 5.1643961256865625,
        "gradePct": 11.654995372103077,
        "smoothedEle": 715.5313425434105,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.547212,
        "lng": 121.512463,
        "ele": 727.25,
        "distanceKm": 5.2218052663883405,
        "gradePct": 11.3495499381139,
        "smoothedEle": 721.6953651033061,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.547135,
        "lng": 121.512503,
        "ele": 728.75,
        "distanceKm": 5.231275048564663,
        "gradePct": 11.29776760728918,
        "smoothedEle": 722.5185684994657,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.547041,
        "lng": 121.512517,
        "ele": 728.5,
        "distanceKm": 5.241822868831707,
        "gradePct": 11.189162491723199,
        "smoothedEle": 723.3336294147017,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.546782,
        "lng": 121.512467,
        "ele": 721.5,
        "distanceKm": 5.271063058284412,
        "gradePct": 10.603794089820886,
        "smoothedEle": 725.2717740325065,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.546631,
        "lng": 121.512472,
        "ele": 719.75,
        "distanceKm": 5.287861129927071,
        "gradePct": 10.200538290708371,
        "smoothedEle": 726.3698217688694,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.546447,
        "lng": 121.512622,
        "ele": 727.25,
        "distanceKm": 5.313332537565357,
        "gradePct": 9.654806506954051,
        "smoothedEle": 728.1662972585674,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.545965,
        "lng": 121.512835,
        "ele": 733.5,
        "distanceKm": 5.371096561139021,
        "gradePct": 7.718508797795772,
        "smoothedEle": 731.6877862579998,
        "gradeBand": "steep"
      },
      {
        "lat": 24.545637,
        "lng": 121.512965,
        "ele": 741.75,
        "distanceKm": 5.409866427872126,
        "gradePct": 6.703856017504557,
        "smoothedEle": 733.8212033974213,
        "gradeBand": "steep"
      },
      {
        "lat": 24.545334,
        "lng": 121.51296,
        "ele": 745.25,
        "distanceKm": 5.443562332601825,
        "gradePct": 6.139975525431845,
        "smoothedEle": 735.7288783622967,
        "gradeBand": "steep"
      },
      {
        "lat": 24.545094,
        "lng": 121.512853,
        "ele": 743,
        "distanceKm": 5.472360202558017,
        "gradePct": 5.286949178764526,
        "smoothedEle": 735.93046345199,
        "gradeBand": "hard"
      },
      {
        "lat": 24.544706,
        "lng": 121.512523,
        "ele": 742.5,
        "distanceKm": 5.52690838411168,
        "gradePct": 4.039343409427939,
        "smoothedEle": 737.0726133060191,
        "gradeBand": "hard"
      },
      {
        "lat": 24.544572,
        "lng": 121.512413,
        "ele": 746,
        "distanceKm": 5.54550425704601,
        "gradePct": 4.072278316028356,
        "smoothedEle": 738.2721500267817,
        "gradeBand": "hard"
      },
      {
        "lat": 24.544503,
        "lng": 121.512234,
        "ele": 745.25,
        "distanceKm": 5.565168214591131,
        "gradePct": 4.125580847138902,
        "smoothedEle": 739.5775360238549,
        "gradeBand": "hard"
      },
      {
        "lat": 24.544484,
        "lng": 121.511798,
        "ele": 736.5,
        "distanceKm": 5.609319048783592,
        "gradePct": 4.28836911182486,
        "smoothedEle": 742.3678206011233,
        "gradeBand": "hard"
      },
      {
        "lat": 24.544407,
        "lng": 121.511606,
        "ele": 735.25,
        "distanceKm": 5.630543007192129,
        "gradePct": 4.301408529522231,
        "smoothedEle": 743.5946135313346,
        "gradeBand": "hard"
      },
      {
        "lat": 24.544205,
        "lng": 121.511375,
        "ele": 737.25,
        "distanceKm": 5.662953525407218,
        "gradePct": 4.4554807232808535,
        "smoothedEle": 744.7755781584962,
        "gradeBand": "hard"
      },
      {
        "lat": 24.543919,
        "lng": 121.510973,
        "ele": 730.75,
        "distanceKm": 5.7145742800785575,
        "gradePct": 4.744960329163173,
        "smoothedEle": 746.3042779653412,
        "gradeBand": "hard"
      },
      {
        "lat": 24.543818,
        "lng": 121.510924,
        "ele": 730.75,
        "distanceKm": 5.72684999058562,
        "gradePct": 4.873994893512243,
        "smoothedEle": 746.8193804279543,
        "gradeBand": "hard"
      },
      {
        "lat": 24.543734,
        "lng": 121.510921,
        "ele": 732.25,
        "distanceKm": 5.736195305060218,
        "gradePct": 4.823841823930248,
        "smoothedEle": 747.3193547523455,
        "gradeBand": "hard"
      },
      {
        "lat": 24.543642,
        "lng": 121.51093,
        "ele": 734.5,
        "distanceKm": 5.746465676437354,
        "gradePct": 4.7664230263615615,
        "smoothedEle": 747.8688196210221,
        "gradeBand": "hard"
      },
      {
        "lat": 24.543494,
        "lng": 121.51101,
        "ele": 741.75,
        "distanceKm": 5.764804342323644,
        "gradePct": 4.65586391188452,
        "smoothedEle": 748.8651082949275,
        "gradeBand": "hard"
      },
      {
        "lat": 24.543194,
        "lng": 121.511192,
        "ele": 758.5,
        "distanceKm": 5.802905288387402,
        "gradePct": 4.412938104462735,
        "smoothedEle": 750.78835414681,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542702,
        "lng": 121.511115,
        "ele": 762.75,
        "distanceKm": 5.8581648837369125,
        "gradePct": 4.660492917503855,
        "smoothedEle": 753.9220769215215,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542574,
        "lng": 121.511064,
        "ele": 762.25,
        "distanceKm": 5.873303857271366,
        "gradePct": 5.0521132685125805,
        "smoothedEle": 755.1863199803568,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542403,
        "lng": 121.51087,
        "ele": 756.25,
        "distanceKm": 5.900627916821607,
        "gradePct": 6.035349141738601,
        "smoothedEle": 757.9619678967935,
        "gradeBand": "steep"
      },
      {
        "lat": 24.542041,
        "lng": 121.510655,
        "ele": 759.5,
        "distanceKm": 5.946379515943737,
        "gradePct": 7.279622317882621,
        "smoothedEle": 762.4234546703789,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541607,
        "lng": 121.510518,
        "ele": 769.75,
        "distanceKm": 5.996588366117248,
        "gradePct": 8.598865818194263,
        "smoothedEle": 767.6672224528128,
        "gradeBand": "steep"
      },
      {
        "lat": 24.54129,
        "lng": 121.510333,
        "ele": 769.25,
        "distanceKm": 6.036496342793118,
        "gradePct": 9.30139589516255,
        "smoothedEle": 771.2960649209238,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.540865,
        "lng": 121.510157,
        "ele": 769.75,
        "distanceKm": 6.086996206558884,
        "gradePct": 9.000672974371746,
        "smoothedEle": 774.5785698210034,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.540782,
        "lng": 121.510172,
        "ele": 771,
        "distanceKm": 6.096349283140241,
        "gradePct": 8.855314192747803,
        "smoothedEle": 775.237961719989,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540716,
        "lng": 121.510205,
        "ele": 773,
        "distanceKm": 6.104411608366009,
        "gradePct": 8.737709725474922,
        "smoothedEle": 775.8063556484057,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540669,
        "lng": 121.51027,
        "ele": 776.5,
        "distanceKm": 6.112810450844817,
        "gradePct": 8.624260563018304,
        "smoothedEle": 776.3984740431616,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540644,
        "lng": 121.510337,
        "ele": 780,
        "distanceKm": 6.120135513997974,
        "gradePct": 8.531428964540616,
        "smoothedEle": 776.9271175152749,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540645,
        "lng": 121.510402,
        "ele": 783.25,
        "distanceKm": 6.126711235430604,
        "gradePct": 8.450825651623852,
        "smoothedEle": 777.4071451798569,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540676,
        "lng": 121.510472,
        "ele": 786.5,
        "distanceKm": 6.13458626431145,
        "gradePct": 8.354295799558876,
        "smoothedEle": 777.9820222881585,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540793,
        "lng": 121.510541,
        "ele": 788.75,
        "distanceKm": 6.149349978264479,
        "gradePct": 8.237347690329663,
        "smoothedEle": 779.2083825013456,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541089,
        "lng": 121.510562,
        "ele": 783.25,
        "distanceKm": 6.182332194113529,
        "gradePct": 7.864122740771727,
        "smoothedEle": 781.9065659739331,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541235,
        "lng": 121.510608,
        "ele": 782,
        "distanceKm": 6.199220293531664,
        "gradePct": 7.648405611278172,
        "smoothedEle": 783.2033555044859,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541287,
        "lng": 121.51064,
        "ele": 782,
        "distanceKm": 6.205846760312667,
        "gradePct": 7.63183747297068,
        "smoothedEle": 783.7727655374405,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541454,
        "lng": 121.510821,
        "ele": 785,
        "distanceKm": 6.231923894025146,
        "gradePct": 7.651774274397262,
        "smoothedEle": 786.1838395404297,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541788,
        "lng": 121.511031,
        "ele": 787,
        "distanceKm": 6.274708418703011,
        "gradePct": 8.248726312825447,
        "smoothedEle": 790.277312889038,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541947,
        "lng": 121.511139,
        "ele": 787.5,
        "distanceKm": 6.295491103334731,
        "gradePct": 8.588471111901349,
        "smoothedEle": 792.3544022675032,
        "gradeBand": "steep"
      },
      {
        "lat": 24.542192,
        "lng": 121.511482,
        "ele": 798,
        "distanceKm": 6.339602993031859,
        "gradePct": 9.153594881794042,
        "smoothedEle": 796.705930807111,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.542595,
        "lng": 121.511715,
        "ele": 798.75,
        "distanceKm": 6.3902341998682655,
        "gradePct": 9.158429977486996,
        "smoothedEle": 800.8301986674727,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.542996,
        "lng": 121.511821,
        "ele": 797.5,
        "distanceKm": 6.4360943728938205,
        "gradePct": 8.834319291526747,
        "smoothedEle": 804.2514949228608,
        "gradeBand": "steep"
      },
      {
        "lat": 24.543063,
        "lng": 121.511862,
        "ele": 798.25,
        "distanceKm": 6.444620914469903,
        "gradePct": 8.82558287277049,
        "smoothedEle": 805.0498116952666,
        "gradeBand": "steep"
      },
      {
        "lat": 24.543096,
        "lng": 121.511973,
        "ele": 803.5,
        "distanceKm": 6.456432823788432,
        "gradePct": 8.821587525741784,
        "smoothedEle": 806.171943080527,
        "gradeBand": "steep"
      },
      {
        "lat": 24.54309,
        "lng": 121.51203,
        "ele": 806.5,
        "distanceKm": 6.462236762246729,
        "gradePct": 8.762576553409978,
        "smoothedEle": 806.6092216230111,
        "gradeBand": "steep"
      },
      {
        "lat": 24.543058,
        "lng": 121.512075,
        "ele": 809.75,
        "distanceKm": 6.468014210878374,
        "gradePct": 8.698514773928698,
        "smoothedEle": 807.0338640974369,
        "gradeBand": "steep"
      },
      {
        "lat": 24.542956,
        "lng": 121.512121,
        "ele": 815.25,
        "distanceKm": 6.480273392057489,
        "gradePct": 8.516545511725035,
        "smoothedEle": 807.8665855247705,
        "gradeBand": "steep"
      },
      {
        "lat": 24.542599,
        "lng": 121.512024,
        "ele": 819.25,
        "distanceKm": 6.521164560679865,
        "gradePct": 7.825207166250713,
        "smoothedEle": 810.5374395076791,
        "gradeBand": "steep"
      },
      {
        "lat": 24.542235,
        "lng": 121.511855,
        "ele": 819,
        "distanceKm": 6.565101307161955,
        "gradePct": 7.491180033969265,
        "smoothedEle": 813.7653078776256,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541952,
        "lng": 121.511682,
        "ele": 818.25,
        "distanceKm": 6.601107656367858,
        "gradePct": 7.2686346877986185,
        "smoothedEle": 816.1786580921012,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541562,
        "lng": 121.511481,
        "ele": 820,
        "distanceKm": 6.649003055546673,
        "gradePct": 7.545211008034522,
        "smoothedEle": 820.5565371136288,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541202,
        "lng": 121.511482,
        "ele": 829.5,
        "distanceKm": 6.689033412225269,
        "gradePct": 7.956459020567358,
        "smoothedEle": 824.3516744170623,
        "gradeBand": "steep"
      },
      {
        "lat": 24.541004,
        "lng": 121.511203,
        "ele": 818.75,
        "distanceKm": 6.724826567053854,
        "gradePct": 7.993083279506203,
        "smoothedEle": 826.7926399731953,
        "gradeBand": "steep"
      },
      {
        "lat": 24.54083,
        "lng": 121.511121,
        "ele": 818.5,
        "distanceKm": 6.7458774269517585,
        "gradePct": 7.614816586840156,
        "smoothedEle": 827.5826345004914,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540267,
        "lng": 121.511044,
        "ele": 825,
        "distanceKm": 6.808962896953999,
        "gradePct": 6.973016566688324,
        "smoothedEle": 830.842699501027,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539726,
        "lng": 121.511149,
        "ele": 843,
        "distanceKm": 6.8700498160090095,
        "gradePct": 7.229964700806471,
        "smoothedEle": 837.0118358392866,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53949,
        "lng": 121.511128,
        "ele": 846.75,
        "distanceKm": 6.8963776859965575,
        "gradePct": 7.49697408674745,
        "smoothedEle": 839.8464758793042,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539208,
        "lng": 121.510967,
        "ele": 844.5,
        "distanceKm": 6.931711470755179,
        "gradePct": 7.659143409608696,
        "smoothedEle": 842.369302757641,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538852,
        "lng": 121.510865,
        "ele": 834.5,
        "distanceKm": 6.972619393789475,
        "gradePct": 7.786037384949332,
        "smoothedEle": 844.5366526898498,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538758,
        "lng": 121.510879,
        "ele": 833.5,
        "distanceKm": 6.983167226606143,
        "gradePct": 7.866849842892513,
        "smoothedEle": 845.2433574885665,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538677,
        "lng": 121.51092,
        "ele": 834.5,
        "distanceKm": 6.993082972562715,
        "gradePct": 7.944752297055565,
        "smoothedEle": 845.9115779554369,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53858,
        "lng": 121.511009,
        "ele": 837.75,
        "distanceKm": 7.007132236216335,
        "gradePct": 8.161138640485937,
        "smoothedEle": 847.070373809262,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538242,
        "lng": 121.511392,
        "ele": 856,
        "distanceKm": 7.0611085501877575,
        "gradePct": 7.494764888102844,
        "smoothedEle": 851.0983918079861,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53815,
        "lng": 121.511517,
        "ele": 862.75,
        "distanceKm": 7.0773727437974445,
        "gradePct": 7.234570501968783,
        "smoothedEle": 852.2694137478835,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538121,
        "lng": 121.511588,
        "ele": 867,
        "distanceKm": 7.085245295080303,
        "gradePct": 7.09417576801365,
        "smoothedEle": 852.8362374402493,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538141,
        "lng": 121.511683,
        "ele": 873.25,
        "distanceKm": 7.095108763009957,
        "gradePct": 6.817432808047153,
        "smoothedEle": 853.3447204961601,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538175,
        "lng": 121.511734,
        "ele": 876.75,
        "distanceKm": 7.10150455544751,
        "gradePct": 6.681217721291427,
        "smoothedEle": 853.574969023912,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538212,
        "lng": 121.511753,
        "ele": 878.25,
        "distanceKm": 7.106045532904486,
        "gradePct": 6.605704841717733,
        "smoothedEle": 853.7481683671883,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538258,
        "lng": 121.511755,
        "ele": 878.75,
        "distanceKm": 7.111164505760847,
        "gradePct": 6.522777869233034,
        "smoothedEle": 853.9478083085866,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538321,
        "lng": 121.511733,
        "ele": 878,
        "distanceKm": 7.118514763015951,
        "gradePct": 6.403704258519776,
        "smoothedEle": 854.2344683415355,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538412,
        "lng": 121.51163,
        "ele": 872.25,
        "distanceKm": 7.133038475349896,
        "gradePct": 6.227190091091865,
        "smoothedEle": 854.8939892058258,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538655,
        "lng": 121.511283,
        "ele": 854.75,
        "distanceKm": 7.177334058821932,
        "gradePct": 6.271382607406389,
        "smoothedEle": 857.3953004618372,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538829,
        "lng": 121.511164,
        "ele": 850.5,
        "distanceKm": 7.200120775616891,
        "gradePct": 6.306574922323642,
        "smoothedEle": 859.1052121016309,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538965,
        "lng": 121.511158,
        "ele": 852.25,
        "distanceKm": 7.2152554801910425,
        "gradePct": 6.401418801190737,
        "smoothedEle": 860.4794138462054,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539438,
        "lng": 121.511339,
        "ele": 859.75,
        "distanceKm": 7.270946251280825,
        "gradePct": 6.477295182963185,
        "smoothedEle": 864.7612966526133,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540045,
        "lng": 121.511522,
        "ele": 861,
        "distanceKm": 7.340933934586807,
        "gradePct": 6.026065925551842,
        "smoothedEle": 867.391966884271,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540239,
        "lng": 121.51162,
        "ele": 862.5,
        "distanceKm": 7.364674361338668,
        "gradePct": 5.2265305311141175,
        "smoothedEle": 867.1334856531431,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540355,
        "lng": 121.511778,
        "ele": 868.25,
        "distanceKm": 7.385211966184337,
        "gradePct": 4.415271597959528,
        "smoothedEle": 866.8170005856017,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540563,
        "lng": 121.512137,
        "ele": 881.25,
        "distanceKm": 7.4282650793587806,
        "gradePct": 2.8236846167631007,
        "smoothedEle": 867.1270489748615,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.54062,
        "lng": 121.51219,
        "ele": 882.5,
        "distanceKm": 7.436566395026341,
        "gradePct": 2.6317660597267127,
        "smoothedEle": 867.3814731046524,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540685,
        "lng": 121.512225,
        "ele": 882.25,
        "distanceKm": 7.444614553123918,
        "gradePct": 2.4817489182582317,
        "smoothedEle": 867.7002356009108,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540743,
        "lng": 121.512239,
        "ele": 881.25,
        "distanceKm": 7.45121750818416,
        "gradePct": 2.3732889151641507,
        "smoothedEle": 867.9909953985874,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541164,
        "lng": 121.51226,
        "ele": 872.5,
        "distanceKm": 7.498078804152742,
        "gradePct": 2.072476560095252,
        "smoothedEle": 869.9260977771587,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541579,
        "lng": 121.51247,
        "ele": 875,
        "distanceKm": 7.548878901058654,
        "gradePct": 2.0789676285432943,
        "smoothedEle": 871.4633988642103,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541789,
        "lng": 121.512732,
        "ele": 872.75,
        "distanceKm": 7.584200022041826,
        "gradePct": 3.057141845719113,
        "smoothedEle": 872.9468783647,
        "gradeBand": "hard"
      },
      {
        "lat": 24.541859,
        "lng": 121.512799,
        "ele": 871.75,
        "distanceKm": 7.594520548876735,
        "gradePct": 3.245571791464951,
        "smoothedEle": 873.3751802283487,
        "gradeBand": "hard"
      },
      {
        "lat": 24.541906,
        "lng": 121.512825,
        "ele": 871.25,
        "distanceKm": 7.600371116647597,
        "gradePct": 3.3459045460428993,
        "smoothedEle": 873.6179787908394,
        "gradeBand": "hard"
      },
      {
        "lat": 24.541961,
        "lng": 121.512842,
        "ele": 870.5,
        "distanceKm": 7.606723987320214,
        "gradePct": 3.4489716514863717,
        "smoothedEle": 873.8698634056806,
        "gradeBand": "hard"
      },
      {
        "lat": 24.54224,
        "lng": 121.51283,
        "ele": 866,
        "distanceKm": 7.637771150426659,
        "gradePct": 4.125632657146692,
        "smoothedEle": 875.6804550311358,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542308,
        "lng": 121.512855,
        "ele": 865.5,
        "distanceKm": 7.645744054947693,
        "gradePct": 4.184495896654138,
        "smoothedEle": 876.1189647797927,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542374,
        "lng": 121.512916,
        "ele": 865.5,
        "distanceKm": 7.655332025208195,
        "gradePct": 4.242700911956145,
        "smoothedEle": 876.6463031441205,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542408,
        "lng": 121.513001,
        "ele": 866.75,
        "distanceKm": 7.6647242098902,
        "gradePct": 4.203250416199065,
        "smoothedEle": 876.955245436546,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542416,
        "lng": 121.513061,
        "ele": 867.75,
        "distanceKm": 7.670858000826512,
        "gradePct": 4.209815893615765,
        "smoothedEle": 877.2216667280034,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542414,
        "lng": 121.513125,
        "ele": 869,
        "distanceKm": 7.677335359061443,
        "gradePct": 4.221817607502029,
        "smoothedEle": 877.5131478485754,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542389,
        "lng": 121.513202,
        "ele": 870.75,
        "distanceKm": 7.685605069125273,
        "gradePct": 4.2331536544862125,
        "smoothedEle": 877.8773114716159,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542352,
        "lng": 121.513256,
        "ele": 871.75,
        "distanceKm": 7.6924432551749256,
        "gradePct": 4.237739398738537,
        "smoothedEle": 878.1688607692761,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542298,
        "lng": 121.513299,
        "ele": 872.75,
        "distanceKm": 7.699857553576962,
        "gradePct": 4.255816377468133,
        "smoothedEle": 878.4915586464095,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542239,
        "lng": 121.513323,
        "ele": 873.25,
        "distanceKm": 7.7068527971856415,
        "gradePct": 4.351337839562457,
        "smoothedEle": 878.8942900566209,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542171,
        "lng": 121.513325,
        "ele": 873.5,
        "distanceKm": 7.714416768361741,
        "gradePct": 4.460025393492057,
        "smoothedEle": 879.3405643560108,
        "gradeBand": "hard"
      },
      {
        "lat": 24.542105,
        "lng": 121.513313,
        "ele": 873.5,
        "distanceKm": 7.721855342147153,
        "gradePct": 4.56691109818848,
        "smoothedEle": 879.77944020935,
        "gradeBand": "hard"
      },
      {
        "lat": 24.541686,
        "lng": 121.513119,
        "ele": 874.75,
        "distanceKm": 7.772409856853451,
        "gradePct": 5.158837390969377,
        "smoothedEle": 882.7693687391939,
        "gradeBand": "hard"
      },
      {
        "lat": 24.541291,
        "lng": 121.512862,
        "ele": 881.75,
        "distanceKm": 7.823448205281814,
        "gradePct": 4.859366048567377,
        "smoothedEle": 884.5639093786674,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540703,
        "lng": 121.512516,
        "ele": 895.75,
        "distanceKm": 7.897608546106766,
        "gradePct": 5.672842812245103,
        "smoothedEle": 889.7393590905447,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540387,
        "lng": 121.512471,
        "ele": 903.75,
        "distanceKm": 7.933039786258212,
        "gradePct": 6.5485227457333455,
        "smoothedEle": 893.5379634883571,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540074,
        "lng": 121.512429,
        "ele": 910.75,
        "distanceKm": 7.968102172710077,
        "gradePct": 6.829748071681927,
        "smoothedEle": 896.1740969791834,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539717,
        "lng": 121.512027,
        "ele": 894.75,
        "distanceKm": 8.024928941008367,
        "gradePct": 8.17724731746437,
        "smoothedEle": 901.0217405571464,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53941,
        "lng": 121.511878,
        "ele": 890.25,
        "distanceKm": 8.062244874532924,
        "gradePct": 8.358793955846686,
        "smoothedEle": 903.989011960114,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539252,
        "lng": 121.511886,
        "ele": 892.5,
        "distanceKm": 8.079832323319346,
        "gradePct": 8.249796930250277,
        "smoothedEle": 904.9983984163705,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539095,
        "lng": 121.511993,
        "ele": 899.25,
        "distanceKm": 8.100372796320228,
        "gradePct": 8.005998737614043,
        "smoothedEle": 906.0477134805358,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539024,
        "lng": 121.512071,
        "ele": 903.25,
        "distanceKm": 8.111534256668504,
        "gradePct": 7.681010596053675,
        "smoothedEle": 906.5943640211939,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538975,
        "lng": 121.512172,
        "ele": 909,
        "distanceKm": 8.123112695361675,
        "gradePct": 7.203605112823362,
        "smoothedEle": 906.8808843756717,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538964,
        "lng": 121.512247,
        "ele": 913.25,
        "distanceKm": 8.130797053352161,
        "gradePct": 6.943116120803489,
        "smoothedEle": 907.1837509969085,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538974,
        "lng": 121.512302,
        "ele": 916.5,
        "distanceKm": 8.136470439069171,
        "gradePct": 6.805732196058892,
        "smoothedEle": 907.4073583776698,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539013,
        "lng": 121.512359,
        "ele": 920,
        "distanceKm": 8.143684933312652,
        "gradePct": 6.676698465318105,
        "smoothedEle": 907.6917060744012,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539067,
        "lng": 121.512391,
        "ele": 922.25,
        "distanceKm": 8.150506346229177,
        "gradePct": 6.5546951303875804,
        "smoothedEle": 907.9605611023225,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539133,
        "lng": 121.512394,
        "ele": 922.75,
        "distanceKm": 8.157851492629767,
        "gradePct": 6.423324640521054,
        "smoothedEle": 908.250058243865,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539187,
        "lng": 121.512378,
        "ele": 921.5,
        "distanceKm": 8.164070313896687,
        "gradePct": 6.316932859494438,
        "smoothedEle": 908.5048310769732,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539433,
        "lng": 121.512246,
        "ele": 910.75,
        "distanceKm": 8.194509052407366,
        "gradePct": 5.543699542098176,
        "smoothedEle": 909.5141517151433,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539489,
        "lng": 121.512235,
        "ele": 909.25,
        "distanceKm": 8.200834604855379,
        "gradePct": 5.374841756332292,
        "smoothedEle": 909.7160414145064,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539638,
        "lng": 121.512282,
        "ele": 910,
        "distanceKm": 8.218071264566792,
        "gradePct": 4.929659043174371,
        "smoothedEle": 910.2960601972127,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539696,
        "lng": 121.512327,
        "ele": 911.75,
        "distanceKm": 8.225965098050342,
        "gradePct": 4.771601283217666,
        "smoothedEle": 910.6473357872306,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539776,
        "lng": 121.512456,
        "ele": 917.75,
        "distanceKm": 8.241757353532709,
        "gradePct": 4.495098279008134,
        "smoothedEle": 911.3500911561961,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540011,
        "lng": 121.512702,
        "ele": 920.75,
        "distanceKm": 8.277840493681868,
        "gradePct": 4.760993198426166,
        "smoothedEle": 914.4060688664556,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540276,
        "lng": 121.512858,
        "ele": 913.25,
        "distanceKm": 8.311266232346966,
        "gradePct": 5.507862672155019,
        "smoothedEle": 917.5969624416332,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540359,
        "lng": 121.512897,
        "ele": 910.25,
        "distanceKm": 8.321303166593957,
        "gradePct": 5.85658745617237,
        "smoothedEle": 918.5492806405922,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540423,
        "lng": 121.512957,
        "ele": 908,
        "distanceKm": 8.330656113735929,
        "gradePct": 6.108763134256172,
        "smoothedEle": 919.3957223569406,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540467,
        "lng": 121.513077,
        "ele": 906.75,
        "distanceKm": 8.343743141091762,
        "gradePct": 6.368972577889928,
        "smoothedEle": 920.4319453962532,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540465,
        "lng": 121.513157,
        "ele": 907.5,
        "distanceKm": 8.351838246369145,
        "gradePct": 6.395632216535454,
        "smoothedEle": 920.8043202390129,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540291033170735,
        "lng": 121.5135114182051,
        "ele": 915.4566964873167,
        "distanceKm": 8.392573948989611,
        "gradePct": 6.2209614871476555,
        "smoothedEle": 921.8919084357731,
        "gradeBand": "steep"
      },
      {
        "lat": 24.54011,
        "lng": 121.513863,
        "ele": 920,
        "distanceKm": 8.433438714724547,
        "gradePct": 5.985400849551887,
        "smoothedEle": 922.9507134283366,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539856,
        "lng": 121.514261,
        "ele": 933,
        "distanceKm": 8.482616077636335,
        "gradePct": 5.393840907094121,
        "smoothedEle": 925.6496382920055,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539684,
        "lng": 121.514616,
        "ele": 942,
        "distanceKm": 8.523300465805468,
        "gradePct": 3.9939936044325037,
        "smoothedEle": 926.718023428099,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539652,
        "lng": 121.51507,
        "ele": 937.75,
        "distanceKm": 8.569360787156503,
        "gradePct": 4.133347995883995,
        "smoothedEle": 929.5388443842593,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539716,
        "lng": 121.515483,
        "ele": 922.25,
        "distanceKm": 8.611738069916148,
        "gradePct": 5.417239572682908,
        "smoothedEle": 933.2229294442864,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539699,
        "lng": 121.515607,
        "ele": 920.75,
        "distanceKm": 8.624422467963022,
        "gradePct": 5.761680898080178,
        "smoothedEle": 934.2404645108761,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539642,
        "lng": 121.515696,
        "ele": 923.25,
        "distanceKm": 8.63543228598262,
        "gradePct": 5.959476170494348,
        "smoothedEle": 934.9790758457777,
        "gradeBand": "hard"
      },
      {
        "lat": 24.53958,
        "lng": 121.51576,
        "ele": 926.5,
        "distanceKm": 8.64488940661638,
        "gradePct": 6.073715285425315,
        "smoothedEle": 935.7265745457482,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539311,
        "lng": 121.515945,
        "ele": 940.25,
        "distanceKm": 8.68017217096848,
        "gradePct": 6.6358789408630185,
        "smoothedEle": 938.7872710381038,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539231,
        "lng": 121.516019,
        "ele": 942.25,
        "distanceKm": 8.691798016916236,
        "gradePct": 7.014576505706625,
        "smoothedEle": 939.9199119860348,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53919,
        "lng": 121.516108,
        "ele": 940.75,
        "distanceKm": 8.70188907199688,
        "gradePct": 7.389721286204887,
        "smoothedEle": 940.9351959033638,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539134,
        "lng": 121.516325,
        "ele": 933,
        "distanceKm": 8.724705147290946,
        "gradePct": 8.012382641388655,
        "smoothedEle": 942.8288140544853,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539102,
        "lng": 121.516425,
        "ele": 930,
        "distanceKm": 8.73542791632823,
        "gradePct": 8.077655868599237,
        "smoothedEle": 943.6160431094885,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53904,
        "lng": 121.516528,
        "ele": 928.5,
        "distanceKm": 8.747920970343124,
        "gradePct": 8.11050081877849,
        "smoothedEle": 944.4468312014787,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53899,
        "lng": 121.516556,
        "ele": 930.5,
        "distanceKm": 8.754160562156287,
        "gradePct": 8.116084446929193,
        "smoothedEle": 944.8401228292172,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538774,
        "lng": 121.516622,
        "ele": 941.25,
        "distanceKm": 8.779089265225542,
        "gradePct": 7.832285816811435,
        "smoothedEle": 946.049164928076,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538524,
        "lng": 121.516764,
        "ele": 952.25,
        "distanceKm": 8.810379591585624,
        "gradePct": 6.935139627985134,
        "smoothedEle": 946.9751088742191,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538424,
        "lng": 121.516943,
        "ele": 952.25,
        "distanceKm": 8.831627643631958,
        "gradePct": 6.428421529006437,
        "smoothedEle": 947.5806783575396,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538268,
        "lng": 121.517261,
        "ele": 949,
        "distanceKm": 8.868173213849369,
        "gradePct": 5.632162610245834,
        "smoothedEle": 949.0107150623294,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537969,
        "lng": 121.517496,
        "ele": 958,
        "distanceKm": 8.909044203336505,
        "gradePct": 4.582613721347075,
        "smoothedEle": 950.6942628387728,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537893,
        "lng": 121.517594,
        "ele": 964.5,
        "distanceKm": 8.922070456269473,
        "gradePct": 4.148616054515472,
        "smoothedEle": 950.9073802152077,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537875,
        "lng": 121.517663,
        "ele": 967.25,
        "distanceKm": 8.929331308840409,
        "gradePct": 3.902138431975018,
        "smoothedEle": 950.9727278883461,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537878,
        "lng": 121.517775,
        "ele": 969.75,
        "distanceKm": 8.940665322644797,
        "gradePct": 3.642061939449788,
        "smoothedEle": 951.2484545084397,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537908,
        "lng": 121.517904,
        "ele": 971,
        "distanceKm": 8.954133671905105,
        "gradePct": 3.384302864687653,
        "smoothedEle": 951.6070336222931,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538195,
        "lng": 121.518368,
        "ele": 966.25,
        "distanceKm": 9.010890288787012,
        "gradePct": 3.8371871501810366,
        "smoothedEle": 954.6640380448207,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538621,
        "lng": 121.518495,
        "ele": 952,
        "distanceKm": 9.059970432229116,
        "gradePct": 4.001862028276619,
        "smoothedEle": 956.6934623567593,
        "gradeBand": "hard"
      },
      {
        "lat": 24.53906,
        "lng": 121.518723,
        "ele": 944.5,
        "distanceKm": 9.113958898690957,
        "gradePct": 3.309488297421877,
        "smoothedEle": 957.3936468220887,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539411,
        "lng": 121.519002,
        "ele": 944.75,
        "distanceKm": 9.16212259452853,
        "gradePct": 3.0222472007846015,
        "smoothedEle": 958.0818244920583,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539596,
        "lng": 121.519316,
        "ele": 954.75,
        "distanceKm": 9.199963909694672,
        "gradePct": 1.7356997095169566,
        "smoothedEle": 957.5469247750699,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.539886,
        "lng": 121.519683,
        "ele": 962,
        "distanceKm": 9.249136269941832,
        "gradePct": 0.29186494737160834,
        "smoothedEle": 956.8292083866787,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540214,
        "lng": 121.52007,
        "ele": 965,
        "distanceKm": 9.302639258591384,
        "gradePct": 0.07936781953981181,
        "smoothedEle": 957.4055763621946,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540527,
        "lng": 121.520299,
        "ele": 955.5,
        "distanceKm": 9.344446803619538,
        "gradePct": 0.5188569559705362,
        "smoothedEle": 958.8669812779092,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540775,
        "lng": 121.520864,
        "ele": 962.25,
        "distanceKm": 9.407902152708349,
        "gradePct": 2.224773527531121,
        "smoothedEle": 961.8806057810486,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540786,
        "lng": 121.521056,
        "ele": 959.25,
        "distanceKm": 9.42736150321941,
        "gradePct": 3.091641969387592,
        "smoothedEle": 963.3303153229981,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540752,
        "lng": 121.521172,
        "ele": 959,
        "distanceKm": 9.439688988505356,
        "gradePct": 3.5701657163666156,
        "smoothedEle": 964.1074316895321,
        "gradeBand": "hard"
      },
      {
        "lat": 24.54069,
        "lng": 121.52128,
        "ele": 960,
        "distanceKm": 9.452606715813706,
        "gradePct": 4.032872461250193,
        "smoothedEle": 964.9323391433502,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540462,
        "lng": 121.521561,
        "ele": 963.75,
        "distanceKm": 9.490693881166923,
        "gradePct": 5.340198600194545,
        "smoothedEle": 967.957290414657,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539969,
        "lng": 121.521793,
        "ele": 969.25,
        "distanceKm": 9.550324759036021,
        "gradePct": 6.505028824477359,
        "smoothedEle": 972.1561950693458,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539516,
        "lng": 121.521995,
        "ele": 966.5,
        "distanceKm": 9.604682499057846,
        "gradePct": 7.2221217755472615,
        "smoothedEle": 976.1719413854987,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539204,
        "lng": 121.522054,
        "ele": 969.75,
        "distanceKm": 9.639884930580028,
        "gradePct": 7.653496233462731,
        "smoothedEle": 979.4269367350291,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53886542500409,
        "lng": 121.52192866606998,
        "ele": 983.2830451577246,
        "distanceKm": 9.679610083131358,
        "gradePct": 8.472672216394388,
        "smoothedEle": 984.0223396443857,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538532,
        "lng": 121.521785,
        "ele": 997.5,
        "distanceKm": 9.719431614707572,
        "gradePct": 9.679290587322988,
        "smoothedEle": 989.3394373565876,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538162,
        "lng": 121.521758,
        "ele": 999.5,
        "distanceKm": 9.760664343544935,
        "gradePct": 11.064868621806436,
        "smoothedEle": 995.0497821048292,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537775,
        "lng": 121.521735,
        "ele": 996,
        "distanceKm": 9.803759683990823,
        "gradePct": 11.967519068609406,
        "smoothedEle": 1000.0388054006071,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537346,
        "lng": 121.521781,
        "ele": 997,
        "distanceKm": 9.85168877042045,
        "gradePct": 11.443196382610592,
        "smoothedEle": 1003.6787968794924,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536932,
        "lng": 121.521863,
        "ele": 1014.5,
        "distanceKm": 9.898464825550672,
        "gradePct": 10.148648071493632,
        "smoothedEle": 1006.8371810402475,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53678,
        "lng": 121.521913,
        "ele": 1021.75,
        "distanceKm": 9.916106989261943,
        "gradePct": 9.638388643653718,
        "smoothedEle": 1008.172300066751,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536724,
        "lng": 121.52196,
        "ele": 1024,
        "distanceKm": 9.923941349268082,
        "gradePct": 9.348718328302288,
        "smoothedEle": 1008.6614297918104,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536677,
        "lng": 121.522023,
        "ele": 1025.75,
        "distanceKm": 9.93218294480837,
        "gradePct": 9.035304149217641,
        "smoothedEle": 1009.1759848234294,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536647,
        "lng": 121.522101,
        "ele": 1026.5,
        "distanceKm": 9.94074914695481,
        "gradePct": 8.709545720467164,
        "smoothedEle": 1009.7108063145797,
        "gradeBand": "steep"
      },
      {
        "lat": 24.536442,
        "lng": 121.522681,
        "ele": 1033.25,
        "distanceKm": 10.003691073352552,
        "gradePct": 5.762788016439081,
        "smoothedEle": 1011.5564385777351,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536508,
        "lng": 121.523051,
        "ele": 1023,
        "distanceKm": 10.041830731368838,
        "gradePct": 4.748174744632439,
        "smoothedEle": 1012.4264740943739,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536753,
        "lng": 121.523453,
        "ele": 999.75,
        "distanceKm": 10.09077676259662,
        "gradePct": 3.486368475215796,
        "smoothedEle": 1013.2908093101082,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536746,
        "lng": 121.52381,
        "ele": 1002.5,
        "distanceKm": 10.126896992376832,
        "gradePct": 2.3188736031368165,
        "smoothedEle": 1013.4837093529956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536602,
        "lng": 121.524269,
        "ele": 1014.5,
        "distanceKm": 10.176010017098537,
        "gradePct": 0.3702889798009905,
        "smoothedEle": 1011.4853310134815,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536617,
        "lng": 121.524697,
        "ele": 1009.75,
        "distanceKm": 10.219335931716763,
        "gradePct": -1.2030627469955604,
        "smoothedEle": 1009.5072009830491,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536481,
        "lng": 121.525064,
        "ele": 1011.25,
        "distanceKm": 10.259421347607626,
        "gradePct": -2.5607518216101064,
        "smoothedEle": 1007.6156021550992,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53642119859453,
        "lng": 121.52549875078553,
        "ele": 1006.6498243165022,
        "distanceKm": 10.303897963788668,
        "gradePct": -3.1283763071986748,
        "smoothedEle": 1007.1041304546012,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536379599297266,
        "lng": 121.52593637539276,
        "ele": 1001.449912158251,
        "distanceKm": 10.348406417190823,
        "gradePct": -1.5283198434999061,
        "smoothedEle": 1009.5518645877654,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536338,
        "lng": 121.526374,
        "ele": 996.25,
        "distanceKm": 10.392914885186718,
        "gradePct": 1.2439514617167946,
        "smoothedEle": 1013.2014088636214,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536312,
        "lng": 121.526438,
        "ele": 996,
        "distanceKm": 10.4000049541267,
        "gradePct": 1.6982723417399999,
        "smoothedEle": 1013.7863395511699,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.53627,
        "lng": 121.526476,
        "ele": 996.5,
        "distanceKm": 10.406053582163636,
        "gradePct": 2.03065833680882,
        "smoothedEle": 1014.1749495059943,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.53623,
        "lng": 121.526488,
        "ele": 997.5,
        "distanceKm": 10.410664046456885,
        "gradePct": 2.2685297759744083,
        "smoothedEle": 1014.4401925494559,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536196,
        "lng": 121.526484,
        "ele": 998.25,
        "distanceKm": 10.414466269240874,
        "gradePct": 2.458939334668864,
        "smoothedEle": 1014.6474136911834,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536159,
        "lng": 121.526465,
        "ele": 999.25,
        "distanceKm": 10.419007259763278,
        "gradePct": 2.686345262866221,
        "smoothedEle": 1014.8948976746542,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.53611,
        "lng": 121.526397,
        "ele": 1001.25,
        "distanceKm": 10.42778224006395,
        "gradePct": 3.1322538386083463,
        "smoothedEle": 1015.3731341010409,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536088,
        "lng": 121.526331,
        "ele": 1002.25,
        "distanceKm": 10.434892488717832,
        "gradePct": 3.493771597993044,
        "smoothedEle": 1015.7606426526776,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536101,
        "lng": 121.525894,
        "ele": 1006.75,
        "distanceKm": 10.479120480232856,
        "gradePct": 5.56432718967462,
        "smoothedEle": 1018.5177206662261,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536102,
        "lng": 121.525748,
        "ele": 1009.5,
        "distanceKm": 10.493889403538594,
        "gradePct": 6.137239725319852,
        "smoothedEle": 1019.4937062360814,
        "gradeBand": "steep"
      },
      {
        "lat": 24.536075,
        "lng": 121.52565,
        "ele": 1012.5,
        "distanceKm": 10.504247168598821,
        "gradePct": 6.516634145809997,
        "smoothedEle": 1020.156603199936,
        "gradeBand": "steep"
      },
      {
        "lat": 24.536043,
        "lng": 121.525579,
        "ele": 1015,
        "distanceKm": 10.51226224475108,
        "gradePct": 6.552722770067272,
        "smoothedEle": 1020.6695680736805,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535755,
        "lng": 121.525137,
        "ele": 1031.75,
        "distanceKm": 10.567258158597205,
        "gradePct": 7.251915988223372,
        "smoothedEle": 1025.6014757841558,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535669,
        "lng": 121.52471,
        "ele": 1041.5,
        "distanceKm": 10.61149703127673,
        "gradePct": 8.13364837297641,
        "smoothedEle": 1030.7528869680903,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535631,
        "lng": 121.524598,
        "ele": 1044,
        "distanceKm": 10.623588650647498,
        "gradePct": 8.450365329072698,
        "smoothedEle": 1032.0453141359897,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53553,
        "lng": 121.524528,
        "ele": 1043.75,
        "distanceKm": 10.636865197428046,
        "gradePct": 8.81105860223747,
        "smoothedEle": 1033.5057342818495,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535154,
        "lng": 121.524354,
        "ele": 1041.75,
        "distanceKm": 10.682228336639131,
        "gradePct": 9.860709479534115,
        "smoothedEle": 1038.4445183751811,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.534629,
        "lng": 121.524152,
        "ele": 1043.25,
        "distanceKm": 10.744078510066343,
        "gradePct": 10.631135461572834,
        "smoothedEle": 1044.7850488673978,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.534277,
        "lng": 121.523846,
        "ele": 1053.25,
        "distanceKm": 10.793979568662206,
        "gradePct": 10.44079455450939,
        "smoothedEle": 1049.594648944073,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.534207,
        "lng": 121.523771,
        "ele": 1055.75,
        "distanceKm": 10.804848924779417,
        "gradePct": 10.179912087025208,
        "smoothedEle": 1050.338570028502,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.534159,
        "lng": 121.523733,
        "ele": 1057.25,
        "distanceKm": 10.81142639725603,
        "gradePct": 10.027165568655313,
        "smoothedEle": 1050.798993101865,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.534065,
        "lng": 121.523723,
        "ele": 1060.25,
        "distanceKm": 10.821927569027201,
        "gradePct": 9.833153840679222,
        "smoothedEle": 1051.534075125847,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.534013,
        "lng": 121.523739,
        "ele": 1061,
        "distanceKm": 10.827931959951568,
        "gradePct": 9.71565216555772,
        "smoothedEle": 1051.9543824905527,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53391,
        "lng": 121.523807,
        "ele": 1060.75,
        "distanceKm": 10.841291917600097,
        "gradePct": 9.43228462688993,
        "smoothedEle": 1052.8522502340188,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.533689,
        "lng": 121.524197,
        "ele": 1051.25,
        "distanceKm": 10.887770468564213,
        "gradePct": 7.73295318266642,
        "smoothedEle": 1054.478572807297,
        "gradeBand": "steep"
      },
      {
        "lat": 24.533313,
        "lng": 121.524478,
        "ele": 1054,
        "distanceKm": 10.938327336121144,
        "gradePct": 6.402045714683958,
        "smoothedEle": 1056.999562422607,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532889,
        "lng": 121.524596,
        "ele": 1059,
        "distanceKm": 10.986961604448974,
        "gradePct": 5.697842280938536,
        "smoothedEle": 1060.3139229814474,
        "gradeBand": "hard"
      },
      {
        "lat": 24.532499,
        "lng": 121.524622,
        "ele": 1065.5,
        "distanceKm": 11.030407367447415,
        "gradePct": 5.71310907247416,
        "smoothedEle": 1063.5469625807202,
        "gradeBand": "hard"
      },
      {
        "lat": 24.532206,
        "lng": 121.524381,
        "ele": 1066.75,
        "distanceKm": 11.071098844897499,
        "gradePct": 5.793736034437664,
        "smoothedEle": 1065.4826911067464,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531748,
        "lng": 121.524311,
        "ele": 1059.25,
        "distanceKm": 11.122516113665773,
        "gradePct": 5.7615536359824295,
        "smoothedEle": 1067.7342520266761,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531682,
        "lng": 121.5243,
        "ele": 1058.25,
        "distanceKm": 11.129938867099911,
        "gradePct": 5.812160355973468,
        "smoothedEle": 1068.2055968697439,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531625,
        "lng": 121.524223,
        "ele": 1060.75,
        "distanceKm": 11.13998090565285,
        "gradePct": 5.931859736019895,
        "smoothedEle": 1068.9759704540847,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531628,
        "lng": 121.524161,
        "ele": 1063.5,
        "distanceKm": 11.146261551176229,
        "gradePct": 5.969076746681274,
        "smoothedEle": 1069.478422095955,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531656,
        "lng": 121.52412,
        "ele": 1065.75,
        "distanceKm": 11.151447602754814,
        "gradePct": 5.999807558692986,
        "smoothedEle": 1069.8933062222418,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531726,
        "lng": 121.524085,
        "ele": 1068.5,
        "distanceKm": 11.159998659536878,
        "gradePct": 6.050478269249673,
        "smoothedEle": 1070.577390764807,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532106,
        "lng": 121.524131,
        "ele": 1074.25,
        "distanceKm": 11.202508237736218,
        "gradePct": 6.28452514116068,
        "smoothedEle": 1074.0398842623129,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532519,
        "lng": 121.524062,
        "ele": 1084.25,
        "distanceKm": 11.248959205079672,
        "gradePct": 6.643690165756334,
        "smoothedEle": 1077.716869759753,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532892,
        "lng": 121.52397,
        "ele": 1079.25,
        "distanceKm": 11.291466248827879,
        "gradePct": 7.083958235503157,
        "smoothedEle": 1080.5424956890552,
        "gradeBand": "steep"
      },
      {
        "lat": 24.533164,
        "lng": 121.523823,
        "ele": 1079,
        "distanceKm": 11.325169087685671,
        "gradePct": 7.323256641230186,
        "smoothedEle": 1082.5492291594,
        "gradeBand": "steep"
      },
      {
        "lat": 24.533427,
        "lng": 121.523573,
        "ele": 1083,
        "distanceKm": 11.363831318058232,
        "gradePct": 6.998346699369133,
        "smoothedEle": 1084.8862621660207,
        "gradeBand": "steep"
      },
      {
        "lat": 24.533599,
        "lng": 121.523269,
        "ele": 1091.25,
        "distanceKm": 11.40004514340152,
        "gradePct": 6.727709366107912,
        "smoothedEle": 1087.294678841599,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534018,
        "lng": 121.522864,
        "ele": 1097.75,
        "distanceKm": 11.462086164959668,
        "gradePct": 6.385098269795231,
        "smoothedEle": 1091.3596717533842,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53423,
        "lng": 121.522779,
        "ele": 1097.25,
        "distanceKm": 11.48717865086791,
        "gradePct": 6.371932842327988,
        "smoothedEle": 1093.0013463055761,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534564,
        "lng": 121.522799,
        "ele": 1097.25,
        "distanceKm": 11.524372870082487,
        "gradePct": 6.236795242033531,
        "smoothedEle": 1094.97541127764,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535042,
        "lng": 121.522845,
        "ele": 1095.75,
        "distanceKm": 11.577727409727625,
        "gradePct": 6.474968344115519,
        "smoothedEle": 1098.760364655149,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535121,
        "lng": 121.522843,
        "ele": 1094,
        "distanceKm": 11.586514150412846,
        "gradePct": 6.523271483126701,
        "smoothedEle": 1099.4413370582538,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535228,
        "lng": 121.522801,
        "ele": 1092.75,
        "distanceKm": 11.599147803621957,
        "gradePct": 6.5766209819594454,
        "smoothedEle": 1100.388242821536,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535272,
        "lng": 121.522765,
        "ele": 1092.75,
        "distanceKm": 11.605246855466957,
        "gradePct": 6.592887510785113,
        "smoothedEle": 1100.8212755025313,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535306,
        "lng": 121.522717,
        "ele": 1093,
        "distanceKm": 11.611400584955973,
        "gradePct": 6.609745497080463,
        "smoothedEle": 1101.2581902962513,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535333,
        "lng": 121.522656,
        "ele": 1093.5,
        "distanceKm": 11.618262651076595,
        "gradePct": 6.628543953663121,
        "smoothedEle": 1101.7453969908156,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535493,
        "lng": 121.521984,
        "ele": 1103.75,
        "distanceKm": 11.688528274763893,
        "gradePct": 6.311964962470279,
        "smoothedEle": 1105.6969068579308,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535504,
        "lng": 121.521628,
        "ele": 1111.25,
        "distanceKm": 11.724560088863246,
        "gradePct": 5.985854036380964,
        "smoothedEle": 1106.9604005887236,
        "gradeBand": "hard"
      },
      {
        "lat": 24.535532,
        "lng": 121.521472,
        "ele": 1112.75,
        "distanceKm": 11.740644423418194,
        "gradePct": 5.680372351468824,
        "smoothedEle": 1107.4904545869365,
        "gradeBand": "hard"
      },
      {
        "lat": 24.53568,
        "lng": 121.521276,
        "ele": 1108.25,
        "distanceKm": 11.766410882423605,
        "gradePct": 5.334409311023725,
        "smoothedEle": 1108.6263925769879,
        "gradeBand": "hard"
      },
      {
        "lat": 24.535679,
        "lng": 121.520772,
        "ele": 1117.75,
        "distanceKm": 11.817392862573163,
        "gradePct": 5.057024445028237,
        "smoothedEle": 1111.7976908971284,
        "gradeBand": "hard"
      },
      {
        "lat": 24.535801,
        "lng": 121.520226,
        "ele": 1118.5,
        "distanceKm": 11.874264817235316,
        "gradePct": 5.509323011411331,
        "smoothedEle": 1115.913422476074,
        "gradeBand": "hard"
      },
      {
        "lat": 24.535849,
        "lng": 121.51985,
        "ele": 1118.25,
        "distanceKm": 11.912671531961884,
        "gradePct": 6.08401202566008,
        "smoothedEle": 1118.7115397984528,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535812,
        "lng": 121.519658,
        "ele": 1118.75,
        "distanceKm": 11.93252415847823,
        "gradePct": 6.400204491541922,
        "smoothedEle": 1120.0232628879237,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535857,
        "lng": 121.51934,
        "ele": 1114,
        "distanceKm": 11.965078101276728,
        "gradePct": 6.80580874698992,
        "smoothedEle": 1122.1792531910703,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535857,
        "lng": 121.519254,
        "ele": 1113.5,
        "distanceKm": 11.973777374419154,
        "gradePct": 6.840917041468085,
        "smoothedEle": 1122.766454128184,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535846,
        "lng": 121.519187,
        "ele": 1113.5,
        "distanceKm": 11.980664205105299,
        "gradePct": 6.859152340671495,
        "smoothedEle": 1123.231315199499,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535822,
        "lng": 121.519143,
        "ele": 1114,
        "distanceKm": 11.98585375327535,
        "gradePct": 6.868016243536,
        "smoothedEle": 1123.5718552095734,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535645,
        "lng": 121.51896,
        "ele": 1122,
        "distanceKm": 12.012872809900625,
        "gradePct": 7.017388866748686,
        "smoothedEle": 1125.5513019241675,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535381,
        "lng": 121.51857,
        "ele": 1132,
        "distanceKm": 12.062046701772385,
        "gradePct": 7.54337507893902,
        "smoothedEle": 1130.115967335493,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535299,
        "lng": 121.518126,
        "ele": 1129.25,
        "distanceKm": 12.107875617442888,
        "gradePct": 7.637373828373738,
        "smoothedEle": 1133.6368815872995,
        "gradeBand": "steep"
      },
      {
        "lat": 24.535113,
        "lng": 121.517783,
        "ele": 1132.75,
        "distanceKm": 12.148268407971516,
        "gradePct": 7.625895412435879,
        "smoothedEle": 1136.317767630675,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534896,
        "lng": 121.517493,
        "ele": 1138,
        "distanceKm": 12.186252146790101,
        "gradePct": 7.280573949821272,
        "smoothedEle": 1138.1621898696876,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534615,
        "lng": 121.517108,
        "ele": 1145,
        "distanceKm": 12.236182053849532,
        "gradePct": 6.898289631227182,
        "smoothedEle": 1141.511608635635,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534306,
        "lng": 121.516893,
        "ele": 1157,
        "distanceKm": 12.27684597016452,
        "gradePct": 6.841588195023202,
        "smoothedEle": 1144.93613233275,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53417,
        "lng": 121.516765,
        "ele": 1160.5,
        "distanceKm": 12.296754250731126,
        "gradePct": 6.8124285885983475,
        "smoothedEle": 1146.4073136055738,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534116,
        "lng": 121.516733,
        "ele": 1159.5,
        "distanceKm": 12.303575723576886,
        "gradePct": 6.766069588992334,
        "smoothedEle": 1146.8386713041948,
        "gradeBand": "steep"
      },
      {
        "lat": 24.5337745,
        "lng": 121.516652,
        "ele": 1155.375,
        "distanceKm": 12.342422774248842,
        "gradePct": 6.810727550515164,
        "smoothedEle": 1149.5512456284473,
        "gradeBand": "steep"
      },
      {
        "lat": 24.533433,
        "lng": 121.516571,
        "ele": 1151.25,
        "distanceKm": 12.381269829622095,
        "gradePct": 7.295345638423923,
        "smoothedEle": 1152.5109487598797,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53305,
        "lng": 121.516429,
        "ele": 1141.5,
        "distanceKm": 12.426214731620686,
        "gradePct": 7.327563161980405,
        "smoothedEle": 1155.4981029094738,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532978,
        "lng": 121.516414,
        "ele": 1140.25,
        "distanceKm": 12.43436329703625,
        "gradePct": 7.288972485286675,
        "smoothedEle": 1155.9675470061588,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532881,
        "lng": 121.516428,
        "ele": 1140.5,
        "distanceKm": 12.44524179578733,
        "gradePct": 7.167400479709525,
        "smoothedEle": 1156.6093784324728,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53285,
        "lng": 121.51646,
        "ele": 1142.25,
        "distanceKm": 12.44997047518816,
        "gradePct": 7.1077829573349876,
        "smoothedEle": 1156.8883705171218,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532825,
        "lng": 121.516515,
        "ele": 1145.25,
        "distanceKm": 12.456189929437016,
        "gradePct": 7.029370271379914,
        "smoothedEle": 1157.255318317804,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532815,
        "lng": 121.51658,
        "ele": 1149,
        "distanceKm": 12.462858480456402,
        "gradePct": 6.933805870754579,
        "smoothedEle": 1157.6257835060355,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532822,
        "lng": 121.516645,
        "ele": 1152.5,
        "distanceKm": 12.469479582485013,
        "gradePct": 6.803981637028553,
        "smoothedEle": 1157.9237330973233,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532841,
        "lng": 121.516703,
        "ele": 1156,
        "distanceKm": 12.475715471348668,
        "gradePct": 6.696637196233975,
        "smoothedEle": 1158.2342014342555,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532879,
        "lng": 121.516747,
        "ele": 1158.5,
        "distanceKm": 12.481852620614413,
        "gradePct": 6.626678385010133,
        "smoothedEle": 1158.55947034534,
        "gradeBand": "steep"
      },
      {
        "lat": 24.532925,
        "lng": 121.51677,
        "ele": 1160,
        "distanceKm": 12.487471877206984,
        "gradePct": 6.567962892055585,
        "smoothedEle": 1158.857290944746,
        "gradeBand": "steep"
      },
      {
        "lat": 24.533019,
        "lng": 121.51678,
        "ele": 1161.25,
        "distanceKm": 12.49797304986322,
        "gradePct": 6.464734196965788,
        "smoothedEle": 1159.4138530955265,
        "gradeBand": "steep"
      },
      {
        "lat": 24.533394204571273,
        "lng": 121.51679697036798,
        "ele": 1163.617636570178,
        "distanceKm": 12.539729254529318,
        "gradePct": 5.741633722128674,
        "smoothedEle": 1160.8464325799346,
        "gradeBand": "hard"
      },
      {
        "lat": 24.533762,
        "lng": 121.516883,
        "ele": 1167,
        "distanceKm": 12.581541935905172,
        "gradePct": 4.806508601262311,
        "smoothedEle": 1162.1420508480417,
        "gradeBand": "hard"
      },
      {
        "lat": 24.534298,
        "lng": 121.517179,
        "ele": 1168.5,
        "distanceKm": 12.648240943901632,
        "gradePct": 5.0849201610293635,
        "smoothedEle": 1166.9561684932753,
        "gradeBand": "hard"
      },
      {
        "lat": 24.534401,
        "lng": 121.517278,
        "ele": 1165.25,
        "distanceKm": 12.663454804328548,
        "gradePct": 5.434883056697705,
        "smoothedEle": 1168.5223841936775,
        "gradeBand": "hard"
      },
      {
        "lat": 24.534504,
        "lng": 121.517558,
        "ele": 1167.5,
        "distanceKm": 12.694006331283171,
        "gradePct": 6.409278446097141,
        "smoothedEle": 1172.0221739029782,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534645,
        "lng": 121.518089,
        "ele": 1171.5,
        "distanceKm": 12.749961276897197,
        "gradePct": 7.9366093606368215,
        "smoothedEle": 1177.0367033213918,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534766,
        "lng": 121.518563,
        "ele": 1172.75,
        "distanceKm": 12.799760859193123,
        "gradePct": 8.76610855252264,
        "smoothedEle": 1180.989250629926,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534777,
        "lng": 121.518633,
        "ele": 1173,
        "distanceKm": 12.806946590497171,
        "gradePct": 8.80591566174954,
        "smoothedEle": 1181.587507582415,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534776,
        "lng": 121.518701,
        "ele": 1174,
        "distanceKm": 12.813826043454123,
        "gradePct": 8.845303055557597,
        "smoothedEle": 1182.1628189282865,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534759,
        "lng": 121.518768,
        "ele": 1175.75,
        "distanceKm": 12.820862124776015,
        "gradePct": 8.872825566112656,
        "smoothedEle": 1182.7257054340378,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534734,
        "lng": 121.518814,
        "ele": 1177.75,
        "distanceKm": 12.826282404756657,
        "gradePct": 8.894027667986425,
        "smoothedEle": 1183.1593278324892,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534632,
        "lng": 121.518938,
        "ele": 1184.5,
        "distanceKm": 12.843193108730622,
        "gradePct": 8.960175997905058,
        "smoothedEle": 1184.5121841504058,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53445362681651,
        "lng": 121.51929388054982,
        "ele": 1194.2368977739743,
        "distanceKm": 12.88429470825743,
        "gradePct": 8.099885999678037,
        "smoothedEle": 1187.1094437882311,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53431,
        "lng": 121.519669,
        "ele": 1198.25,
        "distanceKm": 12.925464038448682,
        "gradePct": 7.400198045452297,
        "smoothedEle": 1189.6417238021165,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534168,
        "lng": 121.520272,
        "ele": 1197.25,
        "distanceKm": 12.988471424504732,
        "gradePct": 7.6125187402845125,
        "smoothedEle": 1195.318256002689,
        "gradeBand": "steep"
      },
      {
        "lat": 24.534133,
        "lng": 121.520352,
        "ele": 1197.5,
        "distanceKm": 12.99745107851049,
        "gradePct": 7.707392890493366,
        "smoothedEle": 1196.2207112302676,
        "gradeBand": "steep"
      },
      {
        "lat": 24.533833,
        "lng": 121.520561,
        "ele": 1205,
        "distanceKm": 13.036944840222688,
        "gradePct": 8.229478269362318,
        "smoothedEle": 1200.4712792084958,
        "gradeBand": "steep"
      },
      {
        "lat": 24.533586,
        "lng": 121.520824,
        "ele": 1207,
        "distanceKm": 13.0751824088603,
        "gradePct": 9.168246122789729,
        "smoothedEle": 1204.8701188465377,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.533372,
        "lng": 121.521235,
        "ele": 1198.25,
        "distanceKm": 13.123085817677815,
        "gradePct": 10.028225769802965,
        "smoothedEle": 1209.5518936096978,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.533323,
        "lng": 121.5213,
        "ele": 1197,
        "distanceKm": 13.131625113268369,
        "gradePct": 10.07260397194856,
        "smoothedEle": 1210.342002219386,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.533263,
        "lng": 121.521344,
        "ele": 1196,
        "distanceKm": 13.13964521265343,
        "gradePct": 10.082360748286114,
        "smoothedEle": 1211.084071574814,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.533217,
        "lng": 121.521356,
        "ele": 1196.25,
        "distanceKm": 13.14490225118636,
        "gradePct": 10.088756148978897,
        "smoothedEle": 1211.5704853969241,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.533159,
        "lng": 121.521352,
        "ele": 1197,
        "distanceKm": 13.151364246363261,
        "gradePct": 10.096617428323192,
        "smoothedEle": 1212.1683892838303,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.533093,
        "lng": 121.521318,
        "ele": 1199,
        "distanceKm": 13.159469061526215,
        "gradePct": 10.088058377017582,
        "smoothedEle": 1212.8814592929948,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.532774,
        "lng": 121.52106,
        "ele": 1212.5,
        "distanceKm": 13.203506955496717,
        "gradePct": 9.685055107755183,
        "smoothedEle": 1216.242593160646,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.532462,
        "lng": 121.520883,
        "ele": 1221.75,
        "distanceKm": 13.242547652601136,
        "gradePct": 9.024419247814794,
        "smoothedEle": 1219.1646637370702,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.532065,
        "lng": 121.520557,
        "ele": 1231,
        "distanceKm": 13.297649664968999,
        "gradePct": 8.091284574225853,
        "smoothedEle": 1223.2484948330343,
        "gradeBand": "steep"
      },
      {
        "lat": 24.531661,
        "lng": 121.520381,
        "ele": 1233.75,
        "distanceKm": 13.345971832562146,
        "gradePct": 7.585055615690775,
        "smoothedEle": 1226.8395609333597,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53123,
        "lng": 121.520186,
        "ele": 1240.5,
        "distanceKm": 13.397797694988625,
        "gradePct": 8.04694950560102,
        "smoothedEle": 1231.9007404334511,
        "gradeBand": "steep"
      },
      {
        "lat": 24.531134,
        "lng": 121.520177,
        "ele": 1240.5,
        "distanceKm": 13.408511176284408,
        "gradePct": 8.17421377899305,
        "smoothedEle": 1232.9655705449975,
        "gradeBand": "steep"
      },
      {
        "lat": 24.531033,
        "lng": 121.520201,
        "ele": 1239.25,
        "distanceKm": 13.420001297598658,
        "gradePct": 8.29861282524533,
        "smoothedEle": 1234.0743672518227,
        "gradeBand": "steep"
      },
      {
        "lat": 24.530838,
        "lng": 121.520326,
        "ele": 1233,
        "distanceKm": 13.445101993159817,
        "gradePct": 8.277690369130626,
        "smoothedEle": 1235.9093568970554,
        "gradeBand": "steep"
      },
      {
        "lat": 24.530367,
        "lng": 121.52051,
        "ele": 1236.5,
        "distanceKm": 13.500684087637277,
        "gradePct": 7.492172026347048,
        "smoothedEle": 1238.4583422710455,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529969,
        "lng": 121.520612,
        "ele": 1241.5,
        "distanceKm": 13.546126659129996,
        "gradePct": 6.941531931241822,
        "smoothedEle": 1240.7377447574722,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529503,
        "lng": 121.520851,
        "ele": 1246.75,
        "distanceKm": 13.603306396830826,
        "gradePct": 5.27008302593642,
        "smoothedEle": 1242.9884252082452,
        "gradeBand": "hard"
      },
      {
        "lat": 24.529095,
        "lng": 121.521167,
        "ele": 1247.25,
        "distanceKm": 13.658804791578731,
        "gradePct": 4.603392484183717,
        "smoothedEle": 1245.7445498640943,
        "gradeBand": "hard"
      },
      {
        "lat": 24.528803,
        "lng": 121.521536,
        "ele": 1237.75,
        "distanceKm": 13.708278153592106,
        "gradePct": 5.044709648781367,
        "smoothedEle": 1248.9286804350131,
        "gradeBand": "hard"
      },
      {
        "lat": 24.528648,
        "lng": 121.521592,
        "ele": 1239.25,
        "distanceKm": 13.726420513843236,
        "gradePct": 5.286357202440077,
        "smoothedEle": 1250.3219975703025,
        "gradeBand": "hard"
      },
      {
        "lat": 24.528573,
        "lng": 121.521601,
        "ele": 1241,
        "distanceKm": 13.734809694340715,
        "gradePct": 5.390550538039653,
        "smoothedEle": 1250.9511861076132,
        "gradeBand": "hard"
      },
      {
        "lat": 24.528502,
        "lng": 121.521598,
        "ele": 1243,
        "distanceKm": 13.74271037583454,
        "gradePct": 5.488676732678206,
        "smoothedEle": 1251.5437372196502,
        "gradeBand": "hard"
      },
      {
        "lat": 24.528442,
        "lng": 121.521532,
        "ele": 1248.5,
        "distanceKm": 13.75214903854966,
        "gradePct": 5.638421128333014,
        "smoothedEle": 1252.2516369232842,
        "gradeBand": "hard"
      },
      {
        "lat": 24.528474,
        "lng": 121.521427,
        "ele": 1253.75,
        "distanceKm": 13.763351020368551,
        "gradePct": 5.83348436235942,
        "smoothedEle": 1253.0826902389138,
        "gradeBand": "hard"
      },
      {
        "lat": 24.528522,
        "lng": 121.521394,
        "ele": 1254,
        "distanceKm": 13.769646385762636,
        "gradePct": 5.920481579282203,
        "smoothedEle": 1253.5044797203175,
        "gradeBand": "hard"
      },
      {
        "lat": 24.528777,
        "lng": 121.521314,
        "ele": 1250.25,
        "distanceKm": 13.799133420062914,
        "gradePct": 6.1993299917141025,
        "smoothedEle": 1255.2228305516433,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528851,
        "lng": 121.521283,
        "ele": 1249.5,
        "distanceKm": 13.807939179873488,
        "gradePct": 6.253131719185398,
        "smoothedEle": 1255.7247588608461,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528916,
        "lng": 121.521234,
        "ele": 1250,
        "distanceKm": 13.816703288711555,
        "gradePct": 6.2852901262876,
        "smoothedEle": 1256.224313064616,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528998,
        "lng": 121.521119,
        "ele": 1253,
        "distanceKm": 13.831484140740658,
        "gradePct": 6.331028474780533,
        "smoothedEle": 1257.049826680992,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529158,
        "lng": 121.520838,
        "ele": 1261,
        "distanceKm": 13.865018589948841,
        "gradePct": 6.324572486844454,
        "smoothedEle": 1258.7936180398176,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529440348834726,
        "lng": 121.5205645265502,
        "ele": 1266.0272575938423,
        "distanceKm": 13.906863772523744,
        "gradePct": 6.145779857766364,
        "smoothedEle": 1261.1292098705037,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529727,
        "lng": 121.520295,
        "ele": 1269.75,
        "distanceKm": 13.948808409570663,
        "gradePct": 5.7835908303717565,
        "smoothedEle": 1263.568271410603,
        "gradeBand": "hard"
      },
      {
        "lat": 24.529947,
        "lng": 121.520043,
        "ele": 1274,
        "distanceKm": 13.984139448481859,
        "gradePct": 5.684566040191405,
        "smoothedEle": 1265.7181920361497,
        "gradeBand": "hard"
      },
      {
        "lat": 24.530401,
        "lng": 121.5198,
        "ele": 1270,
        "distanceKm": 14.04028876205845,
        "gradePct": 5.270903547500571,
        "smoothedEle": 1268.0494740845184,
        "gradeBand": "hard"
      },
      {
        "lat": 24.530829,
        "lng": 121.519396,
        "ele": 1272.75,
        "distanceKm": 14.10301952498652,
        "gradePct": 5.023329962596012,
        "smoothedEle": 1270.9613028469912,
        "gradeBand": "hard"
      },
      {
        "lat": 24.53121,
        "lng": 121.519122,
        "ele": 1276,
        "distanceKm": 14.153646323103986,
        "gradePct": 4.598541842103162,
        "smoothedEle": 1273.0597458178233,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531606,
        "lng": 121.519051,
        "ele": 1270.25,
        "distanceKm": 14.198261471199377,
        "gradePct": 4.412942035526514,
        "smoothedEle": 1275.1304130711105,
        "gradeBand": "hard"
      },
      {
        "lat": 24.53168,
        "lng": 121.519036,
        "ele": 1269.5,
        "distanceKm": 14.206628642622148,
        "gradePct": 4.433779082801509,
        "smoothedEle": 1275.5194865422695,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531717,
        "lng": 121.519018,
        "ele": 1269.25,
        "distanceKm": 14.211127780544192,
        "gradePct": 4.444983436679552,
        "smoothedEle": 1275.7286964556447,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531746,
        "lng": 121.518983,
        "ele": 1269,
        "distanceKm": 14.215916693168829,
        "gradePct": 4.493557896340365,
        "smoothedEle": 1276.0246778329588,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531756,
        "lng": 121.518936,
        "ele": 1268.75,
        "distanceKm": 14.220799401815142,
        "gradePct": 4.545926713644706,
        "smoothedEle": 1276.3321422738184,
        "gradeBand": "hard"
      },
      {
        "lat": 24.53175,
        "lng": 121.518891,
        "ele": 1268.5,
        "distanceKm": 14.225400127507708,
        "gradePct": 4.593039679067959,
        "smoothedEle": 1276.6173872667575,
        "gradeBand": "hard"
      },
      {
        "lat": 24.53173,
        "lng": 121.518852,
        "ele": 1268.5,
        "distanceKm": 14.229928917176268,
        "gradePct": 4.63941599561487,
        "smoothedEle": 1276.8981722262083,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531693,
        "lng": 121.518817,
        "ele": 1268.5,
        "distanceKm": 14.235356813890412,
        "gradePct": 4.694999468158602,
        "smoothedEle": 1277.2347018224852,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531267,
        "lng": 121.518712,
        "ele": 1272.25,
        "distanceKm": 14.283902152555473,
        "gradePct": 5.257809406509428,
        "smoothedEle": 1280.5895338408716,
        "gradeBand": "hard"
      },
      {
        "lat": 24.530895,
        "lng": 121.518631,
        "ele": 1275,
        "distanceKm": 14.32607046071691,
        "gradePct": 5.999422510056341,
        "smoothedEle": 1283.9155919373038,
        "gradeBand": "hard"
      },
      {
        "lat": 24.530845,
        "lng": 121.518631,
        "ele": 1275.25,
        "distanceKm": 14.33163021472877,
        "gradePct": 6.096859275293603,
        "smoothedEle": 1284.3409131192113,
        "gradeBand": "steep"
      },
      {
        "lat": 24.530802,
        "lng": 121.518649,
        "ele": 1276.25,
        "distanceKm": 14.336746578112386,
        "gradePct": 6.186525454195384,
        "smoothedEle": 1284.732314918058,
        "gradeBand": "steep"
      },
      {
        "lat": 24.530763,
        "lng": 121.518691,
        "ele": 1277.75,
        "distanceKm": 14.342817593735901,
        "gradePct": 6.292922270097187,
        "smoothedEle": 1285.1967476132568,
        "gradeBand": "steep"
      },
      {
        "lat": 24.530754,
        "lng": 121.51875,
        "ele": 1278.75,
        "distanceKm": 14.348869262479823,
        "gradePct": 6.396581436218549,
        "smoothedEle": 1285.6549030951849,
        "gradeBand": "steep"
      },
      {
        "lat": 24.530752,
        "lng": 121.518942,
        "ele": 1281.5,
        "distanceKm": 14.368292958391828,
        "gradePct": 6.681223298518512,
        "smoothedEle": 1287.1019684406292,
        "gradeBand": "steep"
      },
      {
        "lat": 24.530568,
        "lng": 121.51924,
        "ele": 1288.25,
        "distanceKm": 14.40472567510561,
        "gradePct": 7.072349429751423,
        "smoothedEle": 1289.5756974122532,
        "gradeBand": "steep"
      },
      {
        "lat": 24.530265,
        "lng": 121.519381,
        "ele": 1293,
        "distanceKm": 14.441312588572497,
        "gradePct": 7.358000667377181,
        "smoothedEle": 1292.3622900190721,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529881,
        "lng": 121.519439,
        "ele": 1305,
        "distanceKm": 14.48441271940944,
        "gradePct": 8.13292185541664,
        "smoothedEle": 1296.8956489093298,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529549856964522,
        "lng": 121.5197102718547,
        "ele": 1308.2327185470547,
        "distanceKm": 14.530335113146558,
        "gradePct": 9.13061064786226,
        "smoothedEle": 1302.5030591438965,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.529222,
        "lng": 121.519987,
        "ele": 1311,
        "distanceKm": 14.576299152003932,
        "gradePct": 9.911742794978103,
        "smoothedEle": 1307.4690630413074,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528913,
        "lng": 121.520196,
        "ele": 1310,
        "distanceKm": 14.616642195973956,
        "gradePct": 10.495816882506384,
        "smoothedEle": 1311.4749368155713,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528634,
        "lng": 121.520391,
        "ele": 1308.25,
        "distanceKm": 14.653405987574352,
        "gradePct": 10.646190252467628,
        "smoothedEle": 1314.9266786783655,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528178,
        "lng": 121.520475,
        "ele": 1318.5,
        "distanceKm": 14.70481804451063,
        "gradePct": 9.92407843579796,
        "smoothedEle": 1319.235423039971,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528068,
        "lng": 121.520471,
        "ele": 1321.75,
        "distanceKm": 14.7170561947132,
        "gradePct": 9.493723279791686,
        "smoothedEle": 1319.8690670747917,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528023,
        "lng": 121.520461,
        "ele": 1323.5,
        "distanceKm": 14.722161206736338,
        "gradePct": 9.273936617711943,
        "smoothedEle": 1320.052847507625,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.527987,
        "lng": 121.520428,
        "ele": 1326.5,
        "distanceKm": 14.727373543287756,
        "gradePct": 9.048747704551406,
        "smoothedEle": 1320.2389284315107,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.527968,
        "lng": 121.520395,
        "ele": 1328.75,
        "distanceKm": 14.73132421333446,
        "gradePct": 8.87573830866646,
        "smoothedEle": 1320.3613992029582,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527965,
        "lng": 121.520351,
        "ele": 1331.25,
        "distanceKm": 14.735787766758333,
        "gradePct": 8.700294134254282,
        "smoothedEle": 1320.4927579379473,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527977,
        "lng": 121.520304,
        "ele": 1333.75,
        "distanceKm": 14.740726008966053,
        "gradePct": 8.495255678100337,
        "smoothedEle": 1320.6162139931403,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52838,
        "lng": 121.520228,
        "ele": 1327.5,
        "distanceKm": 14.786192364297195,
        "gradePct": 6.860970226050564,
        "smoothedEle": 1322.173352760317,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528871,
        "lng": 121.519909,
        "ele": 1327.75,
        "distanceKm": 14.849612926935547,
        "gradePct": 5.944519438903988,
        "smoothedEle": 1326.459588179275,
        "gradeBand": "hard"
      },
      {
        "lat": 24.529281,
        "lng": 121.519396,
        "ele": 1335,
        "distanceKm": 14.918689228088557,
        "gradePct": 5.953779457261156,
        "smoothedEle": 1331.835415190827,
        "gradeBand": "hard"
      },
      {
        "lat": 24.529627,
        "lng": 121.518995,
        "ele": 1323,
        "distanceKm": 14.974597419969696,
        "gradePct": 7.202449475618007,
        "smoothedEle": 1336.1811462654684,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529646,
        "lng": 121.518951,
        "ele": 1320.5,
        "distanceKm": 14.979524389819646,
        "gradePct": 7.290638571996082,
        "smoothedEle": 1336.5262640834308,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529635,
        "lng": 121.518851,
        "ele": 1317.5,
        "distanceKm": 14.989714003313335,
        "gradePct": 7.388285611499468,
        "smoothedEle": 1337.187931551458,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529614,
        "lng": 121.51882,
        "ele": 1317.25,
        "distanceKm": 14.99362383673994,
        "gradePct": 7.379618432451619,
        "smoothedEle": 1337.434840615656,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529577,
        "lng": 121.518807,
        "ele": 1318.5,
        "distanceKm": 14.997943119534005,
        "gradePct": 7.38591526184271,
        "smoothedEle": 1337.7393500526375,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529532,
        "lng": 121.518807,
        "ele": 1320.5,
        "distanceKm": 15.002946898144522,
        "gradePct": 7.399105712010991,
        "smoothedEle": 1338.103907913518,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529439,
        "lng": 121.518861,
        "ele": 1327,
        "distanceKm": 15.014642168655795,
        "gradePct": 7.4753404824874945,
        "smoothedEle": 1339.0467943258186,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529244,
        "lng": 121.519211,
        "ele": 1345.25,
        "distanceKm": 15.056159982954622,
        "gradePct": 7.8848857739060625,
        "smoothedEle": 1342.7388809377774,
        "gradeBand": "steep"
      },
      {
        "lat": 24.529011,
        "lng": 121.519485,
        "ele": 1342,
        "distanceKm": 15.094101029394759,
        "gradePct": 7.962840772671625,
        "smoothedEle": 1345.8475330320175,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52886,
        "lng": 121.519587,
        "ele": 1343,
        "distanceKm": 15.113808566060214,
        "gradePct": 7.999058524640561,
        "smoothedEle": 1347.4536972702522,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528783,
        "lng": 121.519606,
        "ele": 1345,
        "distanceKm": 15.12258366976351,
        "gradePct": 7.998405424899743,
        "smoothedEle": 1348.1349401087402,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528507,
        "lng": 121.519643,
        "ele": 1353.25,
        "distanceKm": 15.153500912567543,
        "gradePct": 7.717355957963291,
        "smoothedEle": 1349.9760314458274,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528209,
        "lng": 121.519812,
        "ele": 1354.75,
        "distanceKm": 15.190787373363898,
        "gradePct": 7.053146673566882,
        "smoothedEle": 1351.362009063748,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527862,
        "lng": 121.519839,
        "ele": 1361.5,
        "distanceKm": 15.229468618498794,
        "gradePct": 6.680351645612882,
        "smoothedEle": 1353.725980728275,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527796,
        "lng": 121.519821,
        "ele": 1364,
        "distanceKm": 15.23703001701546,
        "gradePct": 6.653830896174692,
        "smoothedEle": 1354.345357532302,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52771,
        "lng": 121.519765,
        "ele": 1369,
        "distanceKm": 15.248144828086755,
        "gradePct": 6.774910967934512,
        "smoothedEle": 1355.5759330306234,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527694,
        "lng": 121.51972,
        "ele": 1371.5,
        "distanceKm": 15.253032380666626,
        "gradePct": 6.833450923481362,
        "smoothedEle": 1356.1276520899996,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527694,
        "lng": 121.51968,
        "ele": 1373.5,
        "distanceKm": 15.257078817326928,
        "gradePct": 6.881321039329033,
        "smoothedEle": 1356.576806559293,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527769,
        "lng": 121.519615,
        "ele": 1375,
        "distanceKm": 15.26769889681057,
        "gradePct": 6.977785636534943,
        "smoothedEle": 1357.6398786576415,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528096,
        "lng": 121.519575,
        "ele": 1368.75,
        "distanceKm": 15.304284149669947,
        "gradePct": 7.132199937944758,
        "smoothedEle": 1360.9418572103348,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528458,
        "lng": 121.519353,
        "ele": 1368.5,
        "distanceKm": 15.350377728391466,
        "gradePct": 7.668868165087388,
        "smoothedEle": 1365.1277852365129,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528789,
        "lng": 121.519226,
        "ele": 1362.25,
        "distanceKm": 15.389361113002636,
        "gradePct": 8.903203598093828,
        "smoothedEle": 1369.1154006372185,
        "gradeBand": "steep"
      },
      {
        "lat": 24.528846,
        "lng": 121.519187,
        "ele": 1362,
        "distanceKm": 15.39682681336254,
        "gradePct": 9.02250538736897,
        "smoothedEle": 1369.77611511907,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.52891,
        "lng": 121.519096,
        "ele": 1358.25,
        "distanceKm": 15.408462389534266,
        "gradePct": 9.181830422045696,
        "smoothedEle": 1370.8058636102678,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528928,
        "lng": 121.519034,
        "ele": 1355.75,
        "distanceKm": 15.41504592762074,
        "gradePct": 9.278362917486254,
        "smoothedEle": 1371.401275977364,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528936,
        "lng": 121.518958,
        "ele": 1353,
        "distanceKm": 15.422785373836867,
        "gradePct": 9.41084281773036,
        "smoothedEle": 1372.1392255042754,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528929,
        "lng": 121.518876,
        "ele": 1350.75,
        "distanceKm": 15.431116925797566,
        "gradePct": 9.555738080061735,
        "smoothedEle": 1372.9724746770414,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528915,
        "lng": 121.5188,
        "ele": 1349,
        "distanceKm": 15.43896110394458,
        "gradePct": 9.635348610391622,
        "smoothedEle": 1373.8298549018111,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528891,
        "lng": 121.518762,
        "ele": 1349,
        "distanceKm": 15.443640719040417,
        "gradePct": 9.645739750535233,
        "smoothedEle": 1374.3687404266407,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528866,
        "lng": 121.51874,
        "ele": 1349.5,
        "distanceKm": 15.447201709314625,
        "gradePct": 9.654259549431037,
        "smoothedEle": 1374.7800348033118,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528724,
        "lng": 121.518756,
        "ele": 1356.75,
        "distanceKm": 15.463074151095423,
        "gradePct": 9.692997030588266,
        "smoothedEle": 1376.5629347399354,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528673,
        "lng": 121.518807,
        "ele": 1360.5,
        "distanceKm": 15.470740744335387,
        "gradePct": 9.661588144149766,
        "smoothedEle": 1377.2375949450525,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528441,
        "lng": 121.519068,
        "ele": 1376,
        "distanceKm": 15.507654255900379,
        "gradePct": 9.441650717919776,
        "smoothedEle": 1380.131210432832,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.528059,
        "lng": 121.519264,
        "ele": 1384.75,
        "distanceKm": 15.554530504178132,
        "gradePct": 8.769155385508187,
        "smoothedEle": 1383.0908839741915,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527571,
        "lng": 121.519322,
        "ele": 1395,
        "distanceKm": 15.60910999038344,
        "gradePct": 8.237856268461458,
        "smoothedEle": 1387.3401448908473,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527211,
        "lng": 121.519574,
        "ele": 1397.5,
        "distanceKm": 15.656568314363032,
        "gradePct": 8.241647180854244,
        "smoothedEle": 1392.3154495493827,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527156,
        "lng": 121.519602,
        "ele": 1398.75,
        "distanceKm": 15.663308143723661,
        "gradePct": 8.27423645358445,
        "smoothedEle": 1393.1319989983892,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527066,
        "lng": 121.519612,
        "ele": 1402.75,
        "distanceKm": 15.673366700485701,
        "gradePct": 8.485179093485074,
        "smoothedEle": 1394.4137993673069,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527031,
        "lng": 121.519594,
        "ele": 1405.25,
        "distanceKm": 15.677663445978425,
        "gradePct": 8.598735482263836,
        "smoothedEle": 1394.9777299868329,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527007,
        "lng": 121.519551,
        "ele": 1408.25,
        "distanceKm": 15.682766765046301,
        "gradePct": 8.743187326010146,
        "smoothedEle": 1395.6666780609962,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526998,
        "lng": 121.519509,
        "ele": 1410.5,
        "distanceKm": 15.687131814825422,
        "gradePct": 8.870404510620492,
        "smoothedEle": 1396.2632845810176,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527001,
        "lng": 121.519465,
        "ele": 1412.5,
        "distanceKm": 15.691595402433656,
        "gradePct": 9.048036560699106,
        "smoothedEle": 1396.9684451198136,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.527338,
        "lng": 121.51929,
        "ele": 1405.5,
        "distanceKm": 15.733039471993862,
        "gradePct": 10.71569640233717,
        "smoothedEle": 1403.1653755406223,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.527417,
        "lng": 121.519244,
        "ele": 1404.5,
        "distanceKm": 15.742980304120342,
        "gradePct": 11.118625613106174,
        "smoothedEle": 1404.598878428277,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.527478,
        "lng": 121.519186,
        "ele": 1404.75,
        "distanceKm": 15.751948774697418,
        "gradePct": 11.395526676122968,
        "smoothedEle": 1405.7189320366424,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.527515,
        "lng": 121.519129,
        "ele": 1404.25,
        "distanceKm": 15.7590322509894,
        "gradePct": 11.576839320800941,
        "smoothedEle": 1406.5950440532667,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.527538,
        "lng": 121.519018,
        "ele": 1403.5,
        "distanceKm": 15.770548691893337,
        "gradePct": 11.817566607915566,
        "smoothedEle": 1407.9731058628224,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.527473,
        "lng": 121.518598,
        "ele": 1404.75,
        "distanceKm": 15.813646715672553,
        "gradePct": 11.956516039568143,
        "smoothedEle": 1411.7287856424502,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.527112,
        "lng": 121.51814,
        "ele": 1415,
        "distanceKm": 15.874949032489704,
        "gradePct": 10.57846676196247,
        "smoothedEle": 1415.7784076229152,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.526866,
        "lng": 121.517816,
        "ele": 1418.25,
        "distanceKm": 15.917640108495318,
        "gradePct": 9.386760070018488,
        "smoothedEle": 1419.6363036539137,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.526532,
        "lng": 121.517669,
        "ele": 1429.25,
        "distanceKm": 15.957645818639667,
        "gradePct": 8.38976805312396,
        "smoothedEle": 1423.2031007909436,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526189,
        "lng": 121.517585,
        "ele": 1438.5,
        "distanceKm": 15.996720903484436,
        "gradePct": 8.296439728631555,
        "smoothedEle": 1426.8467034886116,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526157,
        "lng": 121.517532,
        "ele": 1438.25,
        "distanceKm": 16.00315579083465,
        "gradePct": 8.307427440111297,
        "smoothedEle": 1427.4294326117686,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52614,
        "lng": 121.517476,
        "ele": 1437.25,
        "distanceKm": 16.009127929416724,
        "gradePct": 8.319271166389202,
        "smoothedEle": 1427.9735485700194,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526144,
        "lng": 121.517394,
        "ele": 1435,
        "distanceKm": 16.017435142735792,
        "gradePct": 8.379288510915588,
        "smoothedEle": 1428.7376255956556,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526168,
        "lng": 121.517325,
        "ele": 1432.25,
        "distanceKm": 16.024908087132232,
        "gradePct": 8.479949624673539,
        "smoothedEle": 1429.4326094245246,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526245,
        "lng": 121.517202,
        "ele": 1426.5,
        "distanceKm": 16.040012224501552,
        "gradePct": 8.683403472218773,
        "smoothedEle": 1430.8372941998714,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526275,
        "lng": 121.517104,
        "ele": 1423,
        "distanceKm": 16.050472290851374,
        "gradePct": 8.818617305738288,
        "smoothedEle": 1431.7987123026178,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52628,
        "lng": 121.517037,
        "ele": 1421,
        "distanceKm": 16.057272913312648,
        "gradePct": 8.905121726455182,
        "smoothedEle": 1432.4209692578245,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526214,
        "lng": 121.516919,
        "ele": 1419.75,
        "distanceKm": 16.071285552630528,
        "gradePct": 9.083363535026283,
        "smoothedEle": 1433.7031257554106,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.526153,
        "lng": 121.516874,
        "ele": 1420.25,
        "distanceKm": 16.079454465034665,
        "gradePct": 9.144865994514621,
        "smoothedEle": 1434.4752853660325,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.525817573161202,
        "lng": 121.51683533761337,
        "ele": 1431.307671301047,
        "distanceKm": 16.116956788206473,
        "gradePct": 9.222441324223416,
        "smoothedEle": 1438.0194361925744,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.525478,
        "lng": 121.516831,
        "ele": 1445.25,
        "distanceKm": 16.154718202745016,
        "gradePct": 9.29593570299463,
        "smoothedEle": 1441.5339541584158,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.525391,
        "lng": 121.516818,
        "ele": 1449.25,
        "distanceKm": 16.16448115633806,
        "gradePct": 9.278752789058704,
        "smoothedEle": 1442.3979755514,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.525312,
        "lng": 121.516769,
        "ele": 1452,
        "distanceKm": 16.174567657579676,
        "gradePct": 9.261960703951251,
        "smoothedEle": 1443.3049191696718,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.525259,
        "lng": 121.516707,
        "ele": 1453.5,
        "distanceKm": 16.18317408830654,
        "gradePct": 9.254446482010769,
        "smoothedEle": 1444.0924075811802,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.525204,
        "lng": 121.516596,
        "ele": 1454.75,
        "distanceKm": 16.195960582248333,
        "gradePct": 9.151788866996787,
        "smoothedEle": 1445.0793841658756,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.525168,
        "lng": 121.515921,
        "ele": 1450,
        "distanceKm": 16.26436279727656,
        "gradePct": 8.658970054536129,
        "smoothedEle": 1450.387633749595,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525072,
        "lng": 121.515407,
        "ele": 1450.5,
        "distanceKm": 16.31744498465799,
        "gradePct": 9.513188934375568,
        "smoothedEle": 1457.0912513210437,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.525022,
        "lng": 121.515326,
        "ele": 1452.25,
        "distanceKm": 16.327347302186563,
        "gradePct": 9.67542136370347,
        "smoothedEle": 1458.337341422899,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.52498,
        "lng": 121.515284,
        "ele": 1453.75,
        "distanceKm": 16.333661051401037,
        "gradePct": 9.752098244042633,
        "smoothedEle": 1459.0783263758208,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.52493,
        "lng": 121.515274,
        "ele": 1455.5,
        "distanceKm": 16.339312092226617,
        "gradePct": 9.80827879381369,
        "smoothedEle": 1459.7166392901959,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524875,
        "lng": 121.515285,
        "ele": 1457.75,
        "distanceKm": 16.345528237218463,
        "gradePct": 9.86161968075752,
        "smoothedEle": 1460.4018680681904,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.52483,
        "lng": 121.515312,
        "ele": 1459.75,
        "distanceKm": 16.35122897244548,
        "gradePct": 9.875378938562482,
        "smoothedEle": 1460.9599635396346,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524803,
        "lng": 121.515359,
        "ele": 1461.5,
        "distanceKm": 16.356852184537964,
        "gradePct": 9.866372789412289,
        "smoothedEle": 1461.4555571259161,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524903,
        "lng": 121.515721,
        "ele": 1462.5,
        "distanceKm": 16.395124197554026,
        "gradePct": 10.038010343291639,
        "smoothedEle": 1465.090845160581,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524966,
        "lng": 121.516204,
        "ele": 1464,
        "distanceKm": 16.44448561201266,
        "gradePct": 10.276728997219301,
        "smoothedEle": 1469.3985530943849,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524864,
        "lng": 121.516579,
        "ele": 1473.5,
        "distanceKm": 16.48408097351279,
        "gradePct": 9.417374435522936,
        "smoothedEle": 1471.7125421113242,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524708,
        "lng": 121.516975,
        "ele": 1489,
        "distanceKm": 16.527735921124112,
        "gradePct": 8.147431807013533,
        "smoothedEle": 1474.6778135613324,
        "gradeBand": "steep"
      },
      {
        "lat": 24.524684,
        "lng": 121.517061,
        "ele": 1491.75,
        "distanceKm": 16.536836067978218,
        "gradePct": 7.927556663297223,
        "smoothedEle": 1475.2920734739844,
        "gradeBand": "steep"
      },
      {
        "lat": 24.524692,
        "lng": 121.517133,
        "ele": 1492.25,
        "distanceKm": 16.54417394798001,
        "gradePct": 7.765765293878898,
        "smoothedEle": 1475.7841103170929,
        "gradeBand": "steep"
      },
      {
        "lat": 24.524754,
        "lng": 121.517232,
        "ele": 1490.25,
        "distanceKm": 16.556332571639025,
        "gradePct": 7.59144849428324,
        "smoothedEle": 1476.5926587904173,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52484,
        "lng": 121.517259,
        "ele": 1485.75,
        "distanceKm": 16.566277786085166,
        "gradePct": 7.4470710529986075,
        "smoothedEle": 1477.2449951367744,
        "gradeBand": "steep"
      },
      {
        "lat": 24.524946,
        "lng": 121.517273,
        "ele": 1480,
        "distanceKm": 16.578149249842323,
        "gradePct": 7.259016958295119,
        "smoothedEle": 1477.9965044085193,
        "gradeBand": "steep"
      },
      {
        "lat": 24.524999,
        "lng": 121.517289,
        "ele": 1477.25,
        "distanceKm": 16.58426082452051,
        "gradePct": 7.151057280647617,
        "smoothedEle": 1478.3610963080478,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525051,
        "lng": 121.517323,
        "ele": 1475.5,
        "distanceKm": 16.59098865150915,
        "gradePct": 7.020444422242032,
        "smoothedEle": 1478.7389169079495,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525084,
        "lng": 121.517367,
        "ele": 1475,
        "distanceKm": 16.596757335719104,
        "gradePct": 6.901655108206593,
        "smoothedEle": 1479.0366772700127,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525105,
        "lng": 121.517422,
        "ele": 1475.25,
        "distanceKm": 16.602791437937952,
        "gradePct": 6.7918704933255425,
        "smoothedEle": 1479.3436964755008,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525112,
        "lng": 121.517488,
        "ele": 1476.25,
        "distanceKm": 16.60951341308024,
        "gradePct": 6.673838233486914,
        "smoothedEle": 1479.6942501872668,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52499,
        "lng": 121.517907,
        "ele": 1493.25,
        "distanceKm": 16.654018643051508,
        "gradePct": 6.245015560169031,
        "smoothedEle": 1482.4457032379187,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525005,
        "lng": 121.517979,
        "ele": 1494.5,
        "distanceKm": 16.661490917210024,
        "gradePct": 6.301827866483359,
        "smoothedEle": 1482.9960143632923,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525039,
        "lng": 121.518052,
        "ele": 1495.25,
        "distanceKm": 16.6697873014554,
        "gradePct": 6.361899372423431,
        "smoothedEle": 1483.6010056325636,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525133,
        "lng": 121.518122,
        "ele": 1493.25,
        "distanceKm": 16.68241258343505,
        "gradePct": 6.431898892630579,
        "smoothedEle": 1484.4788376597173,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525331,
        "lng": 121.518124,
        "ele": 1485.25,
        "distanceKm": 16.704430138956695,
        "gradePct": 6.449705193347677,
        "smoothedEle": 1485.994173818259,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525393,
        "lng": 121.518142,
        "ele": 1483,
        "distanceKm": 16.711560660166377,
        "gradePct": 6.45353710257225,
        "smoothedEle": 1486.4861797817268,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52548,
        "lng": 121.51823,
        "ele": 1482,
        "distanceKm": 16.724707410625673,
        "gradePct": 6.3615729859613115,
        "smoothedEle": 1487.1952473240221,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52551,
        "lng": 121.518325,
        "ele": 1483.25,
        "distanceKm": 16.7348803533457,
        "gradePct": 6.343293938550709,
        "smoothedEle": 1487.846650613391,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525541,
        "lng": 121.518479,
        "ele": 1484.25,
        "distanceKm": 16.75083619681136,
        "gradePct": 6.383075519276554,
        "smoothedEle": 1488.9933009029307,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525643,
        "lng": 121.518845,
        "ele": 1483.75,
        "distanceKm": 16.789559928965197,
        "gradePct": 6.085486410259159,
        "smoothedEle": 1490.8296556782223,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525697,
        "lng": 121.51925,
        "ele": 1483,
        "distanceKm": 16.830968424123718,
        "gradePct": 6.2891567938915145,
        "smoothedEle": 1493.598979920421,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525515,
        "lng": 121.519579,
        "ele": 1487.25,
        "distanceKm": 16.86992071625571,
        "gradePct": 6.639294595603043,
        "smoothedEle": 1496.888871114374,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525422,
        "lng": 121.519611,
        "ele": 1492.25,
        "distanceKm": 16.880756708810022,
        "gradePct": 6.666223680225494,
        "smoothedEle": 1497.6961525596703,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525369,
        "lng": 121.51958,
        "ele": 1496,
        "distanceKm": 16.887432503210995,
        "gradePct": 6.596171513801574,
        "smoothedEle": 1498.0166716271294,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525354,
        "lng": 121.519545,
        "ele": 1497.5,
        "distanceKm": 16.891346391183603,
        "gradePct": 6.555298639845114,
        "smoothedEle": 1498.204295290346,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525345,
        "lng": 121.519506,
        "ele": 1498.75,
        "distanceKm": 16.89541668526772,
        "gradePct": 6.51291874548374,
        "smoothedEle": 1498.3996694063835,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52535,
        "lng": 121.519452,
        "ele": 1499.5,
        "distanceKm": 16.900907696139846,
        "gradePct": 6.459325379800498,
        "smoothedEle": 1498.6703959866607,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525379,
        "lng": 121.519352,
        "ele": 1499.25,
        "distanceKm": 16.911525488853137,
        "gradePct": 6.436340838230898,
        "smoothedEle": 1499.3564346375751,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525419,
        "lng": 121.519262,
        "ele": 1498.5,
        "distanceKm": 16.921658483705986,
        "gradePct": 6.496558721139217,
        "smoothedEle": 1500.0239214596238,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525437,
        "lng": 121.519183,
        "ele": 1499,
        "distanceKm": 16.9298971620152,
        "gradePct": 6.5429851365753615,
        "smoothedEle": 1500.6135325643543,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52544,
        "lng": 121.519106,
        "ele": 1498.25,
        "distanceKm": 16.937693832091515,
        "gradePct": 6.572773056787265,
        "smoothedEle": 1501.1943844850396,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525397,
        "lng": 121.518984,
        "ele": 1498.5,
        "distanceKm": 16.95092950629679,
        "gradePct": 6.6624485675461305,
        "smoothedEle": 1502.3226229554991,
        "gradeBand": "steep"
      },
      {
        "lat": 24.525025253190464,
        "lng": 121.51862771734721,
        "ele": 1509.4319860466073,
        "distanceKm": 17.00577262597285,
        "gradePct": 8.022592854829014,
        "smoothedEle": 1507.9591168410893,
        "gradeBand": "steep"
      },
      {
        "lat": 24.524645,
        "lng": 121.518281,
        "ele": 1520.25,
        "distanceKm": 17.06070940958475,
        "gradePct": 9.104000334225395,
        "smoothedEle": 1514.3188894089274,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524564,
        "lng": 121.518195,
        "ele": 1522,
        "distanceKm": 17.07323192503022,
        "gradePct": 9.36493194918379,
        "smoothedEle": 1515.8654200664428,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524527,
        "lng": 121.518129,
        "ele": 1522,
        "distanceKm": 17.081074519376337,
        "gradePct": 9.56128457412641,
        "smoothedEle": 1516.8339804681882,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524504,
        "lng": 121.51806,
        "ele": 1521.5,
        "distanceKm": 17.088508565832964,
        "gradePct": 9.813636941906486,
        "smoothedEle": 1517.69552971887,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524525,
        "lng": 121.517814,
        "ele": 1514.75,
        "distanceKm": 17.113504093466815,
        "gradePct": 10.454875070705308,
        "smoothedEle": 1520.396520629823,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524513,
        "lng": 121.517736,
        "ele": 1513.5,
        "distanceKm": 17.121506869051395,
        "gradePct": 10.607437542033646,
        "smoothedEle": 1521.2288092906194,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524488,
        "lng": 121.51768,
        "ele": 1513.5,
        "distanceKm": 17.127817312919177,
        "gradePct": 10.696036723358512,
        "smoothedEle": 1521.8567590629136,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524443,
        "lng": 121.517638,
        "ele": 1514.75,
        "distanceKm": 17.13438166188641,
        "gradePct": 10.747243785826225,
        "smoothedEle": 1522.4421153764117,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.52439,
        "lng": 121.517619,
        "ele": 1517.25,
        "distanceKm": 17.140580528322975,
        "gradePct": 10.753198126505632,
        "smoothedEle": 1522.946849180833,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524214,
        "lng": 121.517587,
        "ele": 1526,
        "distanceKm": 17.160416800137863,
        "gradePct": 10.587471287314125,
        "smoothedEle": 1524.472620815856,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524155,
        "lng": 121.517557,
        "ele": 1528.5,
        "distanceKm": 17.167645284122475,
        "gradePct": 10.509561651332811,
        "smoothedEle": 1525.0597079653737,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.524085,
        "lng": 121.517477,
        "ele": 1530.5,
        "distanceKm": 17.178873980464143,
        "gradePct": 10.394183455628914,
        "smoothedEle": 1525.9829792559578,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.523959,
        "lng": 121.517198,
        "ele": 1532.25,
        "distanceKm": 17.210384791814413,
        "gradePct": 10.238466903930467,
        "smoothedEle": 1528.969979355165,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.523631,
        "lng": 121.516874,
        "ele": 1539,
        "distanceKm": 17.259420978976717,
        "gradePct": 9.677804876244101,
        "smoothedEle": 1533.5253436212147,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.52328,
        "lng": 121.516567,
        "ele": 1544.75,
        "distanceKm": 17.309299480874945,
        "gradePct": 9.050425047374151,
        "smoothedEle": 1538.0430246286985,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.523233,
        "lng": 121.516094,
        "ele": 1539.25,
        "distanceKm": 17.357434835025273,
        "gradePct": 8.755830535622666,
        "smoothedEle": 1541.7549143008998,
        "gradeBand": "steep"
      },
      {
        "lat": 24.523115,
        "lng": 121.515729,
        "ele": 1537,
        "distanceKm": 17.396621841438836,
        "gradePct": 8.471167252220342,
        "smoothedEle": 1544.6076843570436,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52296,
        "lng": 121.515607,
        "ele": 1539.75,
        "distanceKm": 17.417820440015866,
        "gradePct": 8.017288405700157,
        "smoothedEle": 1545.6953130967422,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522678,
        "lng": 121.515558,
        "ele": 1547,
        "distanceKm": 17.449566854877997,
        "gradePct": 7.400014626635793,
        "smoothedEle": 1547.4099443432274,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522232,
        "lng": 121.515472,
        "ele": 1553.75,
        "distanceKm": 17.499917224624248,
        "gradePct": 6.604517438575977,
        "smoothedEle": 1550.402273741282,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522151,
        "lng": 121.515473,
        "ele": 1554.75,
        "distanceKm": 17.50892459425498,
        "gradePct": 6.469960000139417,
        "smoothedEle": 1550.9489897566673,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522105,
        "lng": 121.515488,
        "ele": 1555.75,
        "distanceKm": 17.514259920342305,
        "gradePct": 6.436455860750039,
        "smoothedEle": 1551.2984536153872,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522055,
        "lng": 121.515529,
        "ele": 1557.5,
        "distanceKm": 17.521196415743727,
        "gradePct": 6.396177074992715,
        "smoothedEle": 1551.75279406418,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522019,
        "lng": 121.515577,
        "ele": 1559.25,
        "distanceKm": 17.527489616205816,
        "gradePct": 6.359633769120046,
        "smoothedEle": 1552.1649986944471,
        "gradeBand": "steep"
      },
      {
        "lat": 24.521999,
        "lng": 121.515635,
        "ele": 1560.75,
        "distanceKm": 17.533764522878805,
        "gradePct": 6.3231966914748,
        "smoothedEle": 1552.576005081528,
        "gradeBand": "steep"
      },
      {
        "lat": 24.521996,
        "lng": 121.515695,
        "ele": 1562.25,
        "distanceKm": 17.539843612715302,
        "gradePct": 6.25636723042262,
        "smoothedEle": 1552.9111265637396,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522013,
        "lng": 121.51575,
        "ele": 1563.5,
        "distanceKm": 17.54572005147059,
        "gradePct": 6.172579244906181,
        "smoothedEle": 1553.1967038458633,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522043,
        "lng": 121.515784,
        "ele": 1563.75,
        "distanceKm": 17.550511600353396,
        "gradePct": 6.088455017984096,
        "smoothedEle": 1553.3979488989412,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522092,
        "lng": 121.515802,
        "ele": 1563.5,
        "distanceKm": 17.55625640283959,
        "gradePct": 5.987594715858357,
        "smoothedEle": 1553.6392306033617,
        "gradeBand": "hard"
      },
      {
        "lat": 24.522161,
        "lng": 121.515808,
        "ele": 1562.5,
        "distanceKm": 17.563952836459404,
        "gradePct": 5.866531665214687,
        "smoothedEle": 1553.9624808153935,
        "gradeBand": "hard"
      },
      {
        "lat": 24.522577,
        "lng": 121.51578,
        "ele": 1554.5,
        "distanceKm": 17.610296638712796,
        "gradePct": 5.580896804353549,
        "smoothedEle": 1556.4710857852801,
        "gradeBand": "hard"
      },
      {
        "lat": 24.52265,
        "lng": 121.515783,
        "ele": 1552.25,
        "distanceKm": 17.618419551267014,
        "gradePct": 5.625548292616165,
        "smoothedEle": 1556.9787678199186,
        "gradeBand": "hard"
      },
      {
        "lat": 24.522746,
        "lng": 121.515824,
        "ele": 1550,
        "distanceKm": 17.629871788865167,
        "gradePct": 5.750731001659253,
        "smoothedEle": 1557.8476712528718,
        "gradeBand": "hard"
      },
      {
        "lat": 24.522815,
        "lng": 121.515916,
        "ele": 1549.75,
        "distanceKm": 17.641933713905072,
        "gradePct": 5.931598165673243,
        "smoothedEle": 1558.8608729562238,
        "gradeBand": "hard"
      },
      {
        "lat": 24.522843,
        "lng": 121.515992,
        "ele": 1550.5,
        "distanceKm": 17.65022871857005,
        "gradePct": 6.054187177309153,
        "smoothedEle": 1559.557653348082,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52288,
        "lng": 121.516438,
        "ele": 1558.75,
        "distanceKm": 17.69553541258285,
        "gradePct": 6.115422698568771,
        "smoothedEle": 1562.3727074462254,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522894,
        "lng": 121.516795,
        "ele": 1566,
        "distanceKm": 17.73168477720484,
        "gradePct": 5.888947565051487,
        "smoothedEle": 1564.2176768699862,
        "gradeBand": "hard"
      },
      {
        "lat": 24.523003,
        "lng": 121.517213,
        "ele": 1571.75,
        "distanceKm": 17.775674314726743,
        "gradePct": 5.9743881655065465,
        "smoothedEle": 1566.5457445472264,
        "gradeBand": "hard"
      },
      {
        "lat": 24.523268,
        "lng": 121.517396,
        "ele": 1565.75,
        "distanceKm": 17.810474053104173,
        "gradePct": 5.794792714903814,
        "smoothedEle": 1568.0717596145487,
        "gradeBand": "hard"
      },
      {
        "lat": 24.523362,
        "lng": 121.517815,
        "ele": 1570.5,
        "distanceKm": 17.854131648141603,
        "gradePct": 5.51609894275011,
        "smoothedEle": 1570.8323531005703,
        "gradeBand": "hard"
      },
      {
        "lat": 24.523323,
        "lng": 121.518158,
        "ele": 1579,
        "distanceKm": 17.889100981915856,
        "gradePct": 5.976775650968442,
        "smoothedEle": 1573.9264663816475,
        "gradeBand": "hard"
      },
      {
        "lat": 24.523574,
        "lng": 121.518365,
        "ele": 1571.5,
        "distanceKm": 17.923993565303824,
        "gradePct": 6.718539808581364,
        "smoothedEle": 1577.2622170625305,
        "gradeBand": "steep"
      },
      {
        "lat": 24.523618,
        "lng": 121.518418,
        "ele": 1570.5,
        "distanceKm": 17.931252025090874,
        "gradePct": 6.818207913337599,
        "smoothedEle": 1577.8320061558138,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52365,
        "lng": 121.518532,
        "ele": 1571.25,
        "distanceKm": 17.943321186594293,
        "gradePct": 6.957517403165323,
        "smoothedEle": 1578.7485478524811,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52367,
        "lng": 121.519102,
        "ele": 1581,
        "distanceKm": 18.00102762984414,
        "gradePct": 7.306327591284711,
        "smoothedEle": 1582.27017650398,
        "gradeBand": "steep"
      },
      {
        "lat": 24.5236,
        "lng": 121.51947,
        "ele": 1584,
        "distanceKm": 18.03906104402534,
        "gradePct": 7.016053982544375,
        "smoothedEle": 1583.911504048258,
        "gradeBand": "steep"
      },
      {
        "lat": 24.523374,
        "lng": 121.519795,
        "ele": 1591,
        "distanceKm": 18.080443533939068,
        "gradePct": 6.788177605190324,
        "smoothedEle": 1586.7368040024985,
        "gradeBand": "steep"
      },
      {
        "lat": 24.523086,
        "lng": 121.520317,
        "ele": 1597.5,
        "distanceKm": 18.142202905923316,
        "gradePct": 6.283467021295815,
        "smoothedEle": 1591.230558774006,
        "gradeBand": "steep"
      },
      {
        "lat": 24.523024,
        "lng": 121.520436,
        "ele": 1598.75,
        "distanceKm": 18.156075767403053,
        "gradePct": 6.313093685647482,
        "smoothedEle": 1592.1531040624084,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522995,
        "lng": 121.520535,
        "ele": 1599,
        "distanceKm": 18.166597399203788,
        "gradePct": 6.43344788976699,
        "smoothedEle": 1593.0359119992836,
        "gradeBand": "steep"
      },
      {
        "lat": 24.523002,
        "lng": 121.520634,
        "ele": 1598,
        "distanceKm": 18.176642905235042,
        "gradePct": 6.611621962464165,
        "smoothedEle": 1594.0053033312993,
        "gradeBand": "steep"
      },
      {
        "lat": 24.523026,
        "lng": 121.520787,
        "ele": 1596.25,
        "distanceKm": 18.1923494786101,
        "gradePct": 6.901134186652509,
        "smoothedEle": 1595.5428467196668,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522877,
        "lng": 121.521344,
        "ele": 1591.75,
        "distanceKm": 18.2510834843092,
        "gradePct": 7.911550652411194,
        "smoothedEle": 1600.5554114489596,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522824,
        "lng": 121.521435,
        "ele": 1591.5,
        "distanceKm": 18.262014259913304,
        "gradePct": 7.957532653859431,
        "smoothedEle": 1601.3936505039003,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52276,
        "lng": 121.521484,
        "ele": 1592.25,
        "distanceKm": 18.27068703265357,
        "gradePct": 8.01561231451629,
        "smoothedEle": 1602.101924617661,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522694,
        "lng": 121.521504,
        "ele": 1593.75,
        "distanceKm": 18.27829970805949,
        "gradePct": 8.046927678385856,
        "smoothedEle": 1602.684294286214,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522586,
        "lng": 121.521483,
        "ele": 1596.75,
        "distanceKm": 18.290495243335073,
        "gradePct": 8.078750236032334,
        "smoothedEle": 1603.6256901025067,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52252,
        "lng": 121.521397,
        "ele": 1600,
        "distanceKm": 18.30187735576539,
        "gradePct": 8.188232992677996,
        "smoothedEle": 1604.6728444460962,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522507,
        "lng": 121.521314,
        "ele": 1601.75,
        "distanceKm": 18.31039757797378,
        "gradePct": 8.265670652606246,
        "smoothedEle": 1605.4476708433863,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522516,
        "lng": 121.520886,
        "ele": 1608.5,
        "distanceKm": 18.353707800701972,
        "gradePct": 8.515640469856892,
        "smoothedEle": 1609.0269152165004,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522539,
        "lng": 121.520532,
        "ele": 1612.25,
        "distanceKm": 18.389611441731088,
        "gradePct": 8.360643799721318,
        "smoothedEle": 1611.9961031960945,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522491,
        "lng": 121.520044,
        "ele": 1619.75,
        "distanceKm": 18.43926768491425,
        "gradePct": 8.44761920771967,
        "smoothedEle": 1616.4422483669946,
        "gradeBand": "steep"
      },
      {
        "lat": 24.522579,
        "lng": 121.519619,
        "ele": 1618.25,
        "distanceKm": 18.483362275465275,
        "gradePct": 9.172622353802158,
        "smoothedEle": 1621.420327890559,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.522593,
        "lng": 121.519529,
        "ele": 1618,
        "distanceKm": 18.492599253148697,
        "gradePct": 9.398403439294304,
        "smoothedEle": 1622.6160658839487,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.522583,
        "lng": 121.51946,
        "ele": 1618.5,
        "distanceKm": 18.49966765028074,
        "gradePct": 9.534470084086172,
        "smoothedEle": 1623.5384917096803,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.522559,
        "lng": 121.519404,
        "ele": 1619.5,
        "distanceKm": 18.505929984913216,
        "gradePct": 9.657168540011673,
        "smoothedEle": 1624.3557263792186,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.522477,
        "lng": 121.519307,
        "ele": 1622.25,
        "distanceKm": 18.51932524873069,
        "gradePct": 9.978055372451003,
        "smoothedEle": 1626.1415823500674,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.522159,
        "lng": 121.519097,
        "ele": 1630,
        "distanceKm": 18.56057654533163,
        "gradePct": 10.975434101016997,
        "smoothedEle": 1631.5458203475118,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.521895,
        "lng": 121.518891,
        "ele": 1634,
        "distanceKm": 18.596577305993534,
        "gradePct": 11.345011139508001,
        "smoothedEle": 1635.3098384619625,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.521583,
        "lng": 121.518788,
        "ele": 1639,
        "distanceKm": 18.632801230570866,
        "gradePct": 11.237778171581265,
        "smoothedEle": 1638.3388081347289,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.521272,
        "lng": 121.518869,
        "ele": 1644,
        "distanceKm": 18.668340515803557,
        "gradePct": 10.638741138981157,
        "smoothedEle": 1641.0019215516768,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.520911,
        "lng": 121.519061,
        "ele": 1651.75,
        "distanceKm": 18.712934489334675,
        "gradePct": 9.373047184014387,
        "smoothedEle": 1644.0356609622927,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.520527,
        "lng": 121.519065,
        "ele": 1657,
        "distanceKm": 18.755635317652427,
        "gradePct": 8.113528459920786,
        "smoothedEle": 1647.1255383331059,
        "gradeBand": "steep"
      },
      {
        "lat": 24.520461,
        "lng": 121.519087,
        "ele": 1658.5,
        "distanceKm": 18.7633042607077,
        "gradePct": 7.915731893267348,
        "smoothedEle": 1647.6624772771306,
        "gradeBand": "steep"
      },
      {
        "lat": 24.520439,
        "lng": 121.519114,
        "ele": 1659.25,
        "distanceKm": 18.766971064249837,
        "gradePct": 7.843213795423281,
        "smoothedEle": 1647.9008195073695,
        "gradeBand": "steep"
      },
      {
        "lat": 24.520443,
        "lng": 121.519235,
        "ele": 1662,
        "distanceKm": 18.779220319928683,
        "gradePct": 7.606974083614573,
        "smoothedEle": 1648.709046919275,
        "gradeBand": "steep"
      },
      {
        "lat": 24.520486,
        "lng": 121.519298,
        "ele": 1663,
        "distanceKm": 18.787187956767728,
        "gradePct": 7.4611312795400675,
        "smoothedEle": 1649.2504084145794,
        "gradeBand": "steep"
      },
      {
        "lat": 24.520542,
        "lng": 121.519331,
        "ele": 1662.75,
        "distanceKm": 18.79425337807829,
        "gradePct": 7.298652877576868,
        "smoothedEle": 1649.6641686074672,
        "gradeBand": "steep"
      },
      {
        "lat": 24.521099,
        "lng": 121.519248,
        "ele": 1652.5,
        "distanceKm": 18.85675563766976,
        "gradePct": 6.527523517769647,
        "smoothedEle": 1653.188863216221,
        "gradeBand": "steep"
      },
      {
        "lat": 24.521192,
        "lng": 121.519243,
        "ele": 1651.25,
        "distanceKm": 18.867109143953687,
        "gradePct": 6.43897546230553,
        "smoothedEle": 1653.7876004209224,
        "gradeBand": "steep"
      },
      {
        "lat": 24.521301,
        "lng": 121.519289,
        "ele": 1650,
        "distanceKm": 18.88009210080141,
        "gradePct": 6.318763604244531,
        "smoothedEle": 1654.4389120894498,
        "gradeBand": "steep"
      },
      {
        "lat": 24.521323,
        "lng": 121.519318,
        "ele": 1650,
        "distanceKm": 18.883911998414863,
        "gradePct": 6.284645064174037,
        "smoothedEle": 1654.6305436197247,
        "gradeBand": "steep"
      },
      {
        "lat": 24.521347,
        "lng": 121.51938,
        "ele": 1650.25,
        "distanceKm": 18.890728415399302,
        "gradePct": 6.223762229199246,
        "smoothedEle": 1654.972500538444,
        "gradeBand": "steep"
      },
      {
        "lat": 24.521365,
        "lng": 121.519471,
        "ele": 1650.75,
        "distanceKm": 18.900149586918157,
        "gradePct": 6.172713478387004,
        "smoothedEle": 1655.5113277418354,
        "gradeBand": "steep"
      },
      {
        "lat": 24.521392,
        "lng": 121.519841,
        "ele": 1653.75,
        "distanceKm": 18.937701217000615,
        "gradePct": 5.754130673343773,
        "smoothedEle": 1657.3360690747204,
        "gradeBand": "hard"
      },
      {
        "lat": 24.52122,
        "lng": 121.520521,
        "ele": 1654.75,
        "distanceKm": 19.009103268675812,
        "gradePct": 4.765786290361251,
        "smoothedEle": 1660.0331721814334,
        "gradeBand": "hard"
      },
      {
        "lat": 24.521153,
        "lng": 121.520663,
        "ele": 1655.25,
        "distanceKm": 19.025285785621108,
        "gradePct": 4.62068755213001,
        "smoothedEle": 1660.6555565957053,
        "gradeBand": "hard"
      },
      {
        "lat": 24.521102,
        "lng": 121.520723,
        "ele": 1656.25,
        "distanceKm": 19.033592663986582,
        "gradePct": 4.54598122795632,
        "smoothedEle": 1660.974594361499,
        "gradeBand": "hard"
      },
      {
        "lat": 24.520818,
        "lng": 121.521015,
        "ele": 1660.1666666666665,
        "distanceKm": 19.076835051182314,
        "gradePct": 4.3151728805192,
        "smoothedEle": 1662.9058625279304,
        "gradeBand": "hard"
      },
      {
        "lat": 24.520534,
        "lng": 121.521307,
        "ele": 1664.0833333333335,
        "distanceKm": 19.12007748400638,
        "gradePct": 4.854042121432162,
        "smoothedEle": 1666.187765619802,
        "gradeBand": "hard"
      },
      {
        "lat": 24.52025,
        "lng": 121.521599,
        "ele": 1668,
        "distanceKm": 19.163319962460875,
        "gradePct": 5.50210014795052,
        "smoothedEle": 1669.307978229819,
        "gradeBand": "hard"
      },
      {
        "lat": 24.519972,
        "lng": 121.521903,
        "ele": 1671.5,
        "distanceKm": 19.206925264044216,
        "gradePct": 6.233936725095668,
        "smoothedEle": 1672.4187748435943,
        "gradeBand": "steep"
      },
      {
        "lat": 24.519842,
        "lng": 121.521985,
        "ele": 1671.25,
        "distanceKm": 19.223591884622934,
        "gradePct": 6.638991445405533,
        "smoothedEle": 1673.8683915503734,
        "gradeBand": "steep"
      },
      {
        "lat": 24.519743,
        "lng": 121.522007,
        "ele": 1672,
        "distanceKm": 19.234822940057434,
        "gradePct": 6.908977783590014,
        "smoothedEle": 1674.8474958547863,
        "gradeBand": "steep"
      },
      {
        "lat": 24.519687,
        "lng": 121.521993,
        "ele": 1672.75,
        "distanceKm": 19.24120891027397,
        "gradePct": 7.066515005568615,
        "smoothedEle": 1675.4477770551407,
        "gradeBand": "steep"
      },
      {
        "lat": 24.519637,
        "lng": 121.521971,
        "ele": 1674,
        "distanceKm": 19.247197610239656,
        "gradePct": 7.214251860559583,
        "smoothedEle": 1676.0107148519153,
        "gradeBand": "steep"
      },
      {
        "lat": 24.519343,
        "lng": 121.521824,
        "ele": 1681.25,
        "distanceKm": 19.283112646989714,
        "gradePct": 7.983381029533831,
        "smoothedEle": 1679.349065428651,
        "gradeBand": "steep"
      },
      {
        "lat": 24.518984,
        "lng": 121.521784,
        "ele": 1687.75,
        "distanceKm": 19.32323627013066,
        "gradePct": 8.171569455731202,
        "smoothedEle": 1682.7588305116797,
        "gradeBand": "steep"
      },
      {
        "lat": 24.518755,
        "lng": 121.521819,
        "ele": 1691,
        "distanceKm": 19.34894495541394,
        "gradePct": 8.258175660098487,
        "smoothedEle": 1684.7870837708656,
        "gradeBand": "steep"
      },
      {
        "lat": 24.518684,
        "lng": 121.521848,
        "ele": 1691.25,
        "distanceKm": 19.357367324273984,
        "gradePct": 8.250499262937327,
        "smoothedEle": 1685.3794570473551,
        "gradeBand": "steep"
      },
      {
        "lat": 24.518607,
        "lng": 121.521935,
        "ele": 1690,
        "distanceKm": 19.369646451487153,
        "gradePct": 8.241889925188419,
        "smoothedEle": 1686.2430889946813,
        "gradeBand": "steep"
      },
      {
        "lat": 24.518439,
        "lng": 121.522226,
        "ele": 1684.25,
        "distanceKm": 19.404513104748,
        "gradePct": 8.179940674758116,
        "smoothedEle": 1688.6065730587645,
        "gradeBand": "steep"
      },
      {
        "lat": 24.518309,
        "lng": 121.522277,
        "ele": 1685.25,
        "distanceKm": 19.41986168156126,
        "gradePct": 8.01862945694009,
        "smoothedEle": 1689.5812076864067,
        "gradeBand": "steep"
      },
      {
        "lat": 24.518218,
        "lng": 121.522287,
        "ele": 1687.5,
        "distanceKm": 19.430030882853824,
        "gradePct": 7.898609753783517,
        "smoothedEle": 1690.2269519684844,
        "gradeBand": "steep"
      },
      {
        "lat": 24.518159,
        "lng": 121.522282,
        "ele": 1689.25,
        "distanceKm": 19.4366108649946,
        "gradePct": 7.809459834532759,
        "smoothedEle": 1690.6344804679454,
        "gradeBand": "steep"
      },
      {
        "lat": 24.517914,
        "lng": 121.522233,
        "ele": 1697.25,
        "distanceKm": 19.46430101392528,
        "gradePct": 7.343335787824598,
        "smoothedEle": 1692.2871706161593,
        "gradeBand": "steep"
      },
      {
        "lat": 24.517615,
        "lng": 121.522359,
        "ele": 1701.75,
        "distanceKm": 19.499908290082814,
        "gradePct": 7.1153246227337625,
        "smoothedEle": 1695.0070333677643,
        "gradeBand": "steep"
      },
      {
        "lat": 24.517263999999997,
        "lng": 121.5227405,
        "ele": 1700.5,
        "distanceKm": 19.554798673051426,
        "gradePct": 6.751008625605347,
        "smoothedEle": 1698.7008124959127,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516913,
        "lng": 121.523122,
        "ele": 1699.25,
        "distanceKm": 19.60968913184702,
        "gradePct": 6.492781580815085,
        "smoothedEle": 1701.9208139411826,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516375,
        "lng": 121.523409,
        "ele": 1699.75,
        "distanceKm": 19.676186197783256,
        "gradePct": 6.668169737998052,
        "smoothedEle": 1706.5313601823525,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516197,
        "lng": 121.523457,
        "ele": 1700,
        "distanceKm": 19.6965659493414,
        "gradePct": 6.569738348001033,
        "smoothedEle": 1707.8912052759044,
        "gradeBand": "steep"
      },
      {
        "lat": 24.51601,
        "lng": 121.523411,
        "ele": 1705.25,
        "distanceKm": 19.717873857715823,
        "gradePct": 6.554684645391286,
        "smoothedEle": 1709.325372885373,
        "gradeBand": "steep"
      },
      {
        "lat": 24.515912,
        "lng": 121.523363,
        "ele": 1709,
        "distanceKm": 19.7298040563232,
        "gradePct": 6.573810308145335,
        "smoothedEle": 1710.1664518871937,
        "gradeBand": "steep"
      },
      {
        "lat": 24.515863,
        "lng": 121.523297,
        "ele": 1712.75,
        "distanceKm": 19.738422202128316,
        "gradePct": 6.559197343170149,
        "smoothedEle": 1710.7171732153356,
        "gradeBand": "steep"
      },
      {
        "lat": 24.515845,
        "lng": 121.523199,
        "ele": 1716.5,
        "distanceKm": 19.74853691477099,
        "gradePct": 6.5370315819259535,
        "smoothedEle": 1711.3534985297306,
        "gradeBand": "steep"
      },
      {
        "lat": 24.515868,
        "lng": 121.523166,
        "ele": 1717.5,
        "distanceKm": 19.752742524731318,
        "gradePct": 6.536413905211044,
        "smoothedEle": 1711.6352743970729,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516215,
        "lng": 121.52323,
        "ele": 1710,
        "distanceKm": 19.791866722399387,
        "gradePct": 6.779212956114772,
        "smoothedEle": 1714.4337360365598,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516263,
        "lng": 121.523221,
        "ele": 1709.75,
        "distanceKm": 19.797281195606168,
        "gradePct": 6.834271878370966,
        "smoothedEle": 1714.8614794198954,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516312,
        "lng": 121.523181,
        "ele": 1710.75,
        "distanceKm": 19.804068199246515,
        "gradePct": 6.9180481062226375,
        "smoothedEle": 1715.427173228586,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516341,
        "lng": 121.523137,
        "ele": 1712,
        "distanceKm": 19.809564936239546,
        "gradePct": 7.0082981621253815,
        "smoothedEle": 1715.9301246634484,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516427,
        "lng": 121.522959,
        "ele": 1718.25,
        "distanceKm": 19.82995474497055,
        "gradePct": 7.234935207662059,
        "smoothedEle": 1717.7957921623351,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516514,
        "lng": 121.522815,
        "ele": 1723.5,
        "distanceKm": 19.84744263112817,
        "gradePct": 7.480896374371722,
        "smoothedEle": 1719.500229764734,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516737,
        "lng": 121.52273,
        "ele": 1722.75,
        "distanceKm": 19.87368795167054,
        "gradePct": 7.876746912593859,
        "smoothedEle": 1722.1116391586995,
        "gradeBand": "steep"
      },
      {
        "lat": 24.516915,
        "lng": 121.522627,
        "ele": 1720,
        "distanceKm": 19.896056193798877,
        "gradePct": 8.27951107552704,
        "smoothedEle": 1724.4162138340334,
        "gradeBand": "steep"
      },
      {
        "lat": 24.517029,
        "lng": 121.522436,
        "ele": 1722,
        "distanceKm": 19.91916636973705,
        "gradePct": 8.75358647022759,
        "smoothedEle": 1726.9236679233247,
        "gradeBand": "steep"
      },
      {
        "lat": 24.51714,
        "lng": 121.521783,
        "ele": 1732.5,
        "distanceKm": 19.98637312635759,
        "gradePct": 9.984629012563836,
        "smoothedEle": 1734.010050085782,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.517114,
        "lng": 121.521596,
        "ele": 1735.25,
        "distanceKm": 20.005511435231554,
        "gradePct": 9.993581833231737,
        "smoothedEle": 1735.5463929876805,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.51701,
        "lng": 121.521477,
        "ele": 1736.5,
        "distanceKm": 20.02220497695588,
        "gradePct": 9.864206884868203,
        "smoothedEle": 1736.8151021587294,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.516944,
        "lng": 121.521454,
        "ele": 1737.75,
        "distanceKm": 20.029903908860277,
        "gradePct": 9.871622858268585,
        "smoothedEle": 1737.5343863747823,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.516854,
        "lng": 121.521457,
        "ele": 1740,
        "distanceKm": 20.039916067425985,
        "gradePct": 9.876961243560151,
        "smoothedEle": 1738.520583993505,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.516658,
        "lng": 121.521546,
        "ele": 1746.25,
        "distanceKm": 20.063497047690497,
        "gradePct": 9.862806665225925,
        "smoothedEle": 1740.823257543137,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.516267,
        "lng": 121.521495,
        "ele": 1749,
        "distanceKm": 20.1072794155553,
        "gradePct": 9.38372155400092,
        "smoothedEle": 1744.401376502607,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.515718,
        "lng": 121.521529,
        "ele": 1754,
        "distanceKm": 20.16842234953286,
        "gradePct": 9.009582297875259,
        "smoothedEle": 1750.136457597431,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.51553,
        "lng": 121.521529,
        "ele": 1754.5,
        "distanceKm": 20.189327024616922,
        "gradePct": 8.97419574262543,
        "smoothedEle": 1752.195568093211,
        "gradeBand": "steep"
      },
      {
        "lat": 24.515428,
        "lng": 121.521551,
        "ele": 1755.25,
        "distanceKm": 20.20088525315431,
        "gradePct": 9.101493291881443,
        "smoothedEle": 1753.3780091413773,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.515279,
        "lng": 121.521641,
        "ele": 1757.5,
        "distanceKm": 20.219790509942257,
        "gradePct": 9.286263817448717,
        "smoothedEle": 1755.2041303005915,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.515051,
        "lng": 121.521852,
        "ele": 1755.5,
        "distanceKm": 20.252933323583758,
        "gradePct": 9.256120351498144,
        "smoothedEle": 1758.303954696487,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.514957,
        "lng": 121.521877,
        "ele": 1755.5,
        "distanceKm": 20.263687327933148,
        "gradePct": 9.219681185750494,
        "smoothedEle": 1759.2781705889631,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.514752,
        "lng": 121.521733,
        "ele": 1759.25,
        "distanceKm": 20.290740193282048,
        "gradePct": 9.273271239970118,
        "smoothedEle": 1761.5962491739715,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.514514,
        "lng": 121.521631,
        "ele": 1760,
        "distanceKm": 20.31914543592384,
        "gradePct": 9.06814893360016,
        "smoothedEle": 1763.6506826057448,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.514297,
        "lng": 121.521631,
        "ele": 1760.75,
        "distanceKm": 20.34327476833443,
        "gradePct": 8.711877120235757,
        "smoothedEle": 1765.2014205904202,
        "gradeBand": "steep"
      },
      {
        "lat": 24.513956,
        "lng": 121.521696,
        "ele": 1768.25,
        "distanceKm": 20.38175832991927,
        "gradePct": 8.143485887904518,
        "smoothedEle": 1767.737023441301,
        "gradeBand": "steep"
      },
      {
        "lat": 24.513656,
        "lng": 121.521574,
        "ele": 1771.25,
        "distanceKm": 20.417327146188125,
        "gradePct": 7.574097283211499,
        "smoothedEle": 1770.1143804304634,
        "gradeBand": "steep"
      },
      {
        "lat": 24.513103,
        "lng": 121.5215,
        "ele": 1779.75,
        "distanceKm": 20.479272120445955,
        "gradePct": 7.037026993688439,
        "smoothedEle": 1774.6876385263897,
        "gradeBand": "steep"
      },
      {
        "lat": 24.512759206669404,
        "lng": 121.52140455416584,
        "ele": 1780.5454946280702,
        "distanceKm": 20.51870102009983,
        "gradePct": 7.1763835301495895,
        "smoothedEle": 1777.971306912047,
        "gradeBand": "steep"
      },
      {
        "lat": 24.512421,
        "lng": 121.521286,
        "ele": 1780,
        "distanceKm": 20.558174404285815,
        "gradePct": 7.425718386485326,
        "smoothedEle": 1781.034563781393,
        "gradeBand": "steep"
      },
      {
        "lat": 24.512101,
        "lng": 121.52129,
        "ele": 1779,
        "distanceKm": 20.593759131257116,
        "gradePct": 7.86496115177195,
        "smoothedEle": 1784.2690581547836,
        "gradeBand": "steep"
      },
      {
        "lat": 24.511946,
        "lng": 121.521399,
        "ele": 1782,
        "distanceKm": 20.614220517629935,
        "gradePct": 8.101745822132585,
        "smoothedEle": 1786.1102304973501,
        "gradeBand": "steep"
      },
      {
        "lat": 24.511861,
        "lng": 121.521491,
        "ele": 1784.75,
        "distanceKm": 20.627485915686343,
        "gradePct": 8.113745212261307,
        "smoothedEle": 1787.0918699535246,
        "gradeBand": "steep"
      },
      {
        "lat": 24.5115005,
        "lng": 121.521925,
        "ele": 1791.125,
        "distanceKm": 20.68694104141473,
        "gradePct": 8.032820096866686,
        "smoothedEle": 1791.3919522199756,
        "gradeBand": "steep"
      },
      {
        "lat": 24.51114,
        "lng": 121.522359,
        "ele": 1797.5,
        "distanceKm": 20.746396260177818,
        "gradePct": 7.278061960501899,
        "smoothedEle": 1794.676667240483,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510756,
        "lng": 121.522515,
        "ele": 1796.75,
        "distanceKm": 20.791918854642248,
        "gradePct": 6.422775372731872,
        "smoothedEle": 1796.9473358912096,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510671,
        "lng": 121.522557,
        "ele": 1798.25,
        "distanceKm": 20.802281732084023,
        "gradePct": 6.209585725811416,
        "smoothedEle": 1797.4551168858568,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510626,
        "lng": 121.522611,
        "ele": 1800.5,
        "distanceKm": 20.80969029987445,
        "gradePct": 6.0577738894297894,
        "smoothedEle": 1797.8181367075874,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510648,
        "lng": 121.52271,
        "ele": 1805.5,
        "distanceKm": 20.820000994511094,
        "gradePct": 5.886762707408273,
        "smoothedEle": 1798.3115112013727,
        "gradeBand": "hard"
      },
      {
        "lat": 24.510745,
        "lng": 121.522738,
        "ele": 1807.75,
        "distanceKm": 20.831152738330232,
        "gradePct": 5.715978695160763,
        "smoothedEle": 1798.7890296932153,
        "gradeBand": "hard"
      },
      {
        "lat": 24.511123,
        "lng": 121.522628,
        "ele": 1805.25,
        "distanceKm": 20.874632917356813,
        "gradePct": 4.745423594124435,
        "smoothedEle": 1799.9926163441685,
        "gradeBand": "hard"
      },
      {
        "lat": 24.511487,
        "lng": 121.522541,
        "ele": 1806.75,
        "distanceKm": 20.916053976994743,
        "gradePct": 3.963802334715879,
        "smoothedEle": 1800.9279555931744,
        "gradeBand": "hard"
      },
      {
        "lat": 24.511956,
        "lng": 121.522346,
        "ele": 1805.75,
        "distanceKm": 20.9718115134781,
        "gradePct": 3.0719712917060744,
        "smoothedEle": 1802.0883235734777,
        "gradeBand": "hard"
      },
      {
        "lat": 24.512081,
        "lng": 121.522309,
        "ele": 1805.25,
        "distanceKm": 20.98620616892022,
        "gradePct": 2.905017012978202,
        "smoothedEle": 1802.472420947691,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.512204,
        "lng": 121.522309,
        "ele": 1805.75,
        "distanceKm": 20.99988316378918,
        "gradePct": 2.7725718771752197,
        "smoothedEle": 1802.8827307937597,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.512718,
        "lng": 121.522431,
        "ele": 1804.5,
        "distanceKm": 21.05835506768554,
        "gradePct": 2.9799213409456904,
        "smoothedEle": 1805.5018674459611,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.51278,
        "lng": 121.52246,
        "ele": 1803.75,
        "distanceKm": 21.065847530122696,
        "gradePct": 3.0716348521264187,
        "smoothedEle": 1805.8926953570497,
        "gradeBand": "hard"
      },
      {
        "lat": 24.512853,
        "lng": 121.522557,
        "ele": 1800.25,
        "distanceKm": 21.078583294913738,
        "gradePct": 3.2300484040208746,
        "smoothedEle": 1806.541917610273,
        "gradeBand": "hard"
      },
      {
        "lat": 24.512849,
        "lng": 121.522625,
        "ele": 1797.25,
        "distanceKm": 21.08547741283769,
        "gradePct": 3.33489282737595,
        "smoothedEle": 1806.907284248375,
        "gradeBand": "hard"
      },
      {
        "lat": 24.512823,
        "lng": 121.522678,
        "ele": 1795,
        "distanceKm": 21.091569299900144,
        "gradePct": 3.442776343789445,
        "smoothedEle": 1807.2606136979975,
        "gradeBand": "hard"
      },
      {
        "lat": 24.512738,
        "lng": 121.522747,
        "ele": 1793.5,
        "distanceKm": 21.103319440798842,
        "gradePct": 3.6707097737662613,
        "smoothedEle": 1807.9818134118175,
        "gradeBand": "hard"
      },
      {
        "lat": 24.512233,
        "lng": 121.522866,
        "ele": 1798.25,
        "distanceKm": 21.160749132031583,
        "gradePct": 4.754417010353353,
        "smoothedEle": 1811.3669387928162,
        "gradeBand": "hard"
      },
      {
        "lat": 24.511895,
        "lng": 121.523,
        "ele": 1803.5,
        "distanceKm": 21.200703497856264,
        "gradePct": 4.845086713800942,
        "smoothedEle": 1812.6096495106199,
        "gradeBand": "hard"
      },
      {
        "lat": 24.51161,
        "lng": 121.52335,
        "ele": 1812.5,
        "distanceKm": 21.248224227883266,
        "gradePct": 5.223773382756026,
        "smoothedEle": 1815.4956226966501,
        "gradeBand": "hard"
      },
      {
        "lat": 24.511176,
        "lng": 121.523744,
        "ele": 1827.25,
        "distanceKm": 21.310817546434052,
        "gradePct": 6.033539063782335,
        "smoothedEle": 1820.4908585280657,
        "gradeBand": "steep"
      },
      {
        "lat": 24.511065,
        "lng": 121.523854,
        "ele": 1833,
        "distanceKm": 21.327436797648776,
        "gradePct": 6.0812005163197895,
        "smoothedEle": 1821.56578358479,
        "gradeBand": "steep"
      },
      {
        "lat": 24.511007,
        "lng": 121.523948,
        "ele": 1836.75,
        "distanceKm": 21.338927712575234,
        "gradePct": 6.135229141167336,
        "smoothedEle": 1822.3511592552095,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510946,
        "lng": 121.524151,
        "ele": 1842,
        "distanceKm": 21.360557173418837,
        "gradePct": 6.342779159336737,
        "smoothedEle": 1824.0411823375782,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510949,
        "lng": 121.524352,
        "ele": 1836.75,
        "distanceKm": 21.380895964461338,
        "gradePct": 6.880043091632185,
        "smoothedEle": 1825.7536569867127,
        "gradeBand": "steep"
      },
      {
        "lat": 24.511071,
        "lng": 121.524676,
        "ele": 1821.5,
        "distanceKm": 21.41637259746546,
        "gradePct": 7.529546564876141,
        "smoothedEle": 1828.6203400021063,
        "gradeBand": "steep"
      },
      {
        "lat": 24.511069,
        "lng": 121.524757,
        "ele": 1819.5,
        "distanceKm": 21.424570733142225,
        "gradePct": 7.672714906706032,
        "smoothedEle": 1829.404556236967,
        "gradeBand": "steep"
      },
      {
        "lat": 24.511044,
        "lng": 121.524803,
        "ele": 1819.5,
        "distanceKm": 21.429991766701782,
        "gradePct": 7.769667853068113,
        "smoothedEle": 1829.9276859754646,
        "gradeBand": "steep"
      },
      {
        "lat": 24.511003,
        "lng": 121.524818,
        "ele": 1821,
        "distanceKm": 21.434796724675035,
        "gradePct": 7.834232890915614,
        "smoothedEle": 1830.3486251177067,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510947,
        "lng": 121.524802,
        "ele": 1824,
        "distanceKm": 21.441230624741355,
        "gradePct": 7.915522561095628,
        "smoothedEle": 1830.90194052341,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510901,
        "lng": 121.524762,
        "ele": 1827.25,
        "distanceKm": 21.44775296926243,
        "gradePct": 7.997929690434631,
        "smoothedEle": 1831.4628621522227,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510865,
        "lng": 121.524707,
        "ele": 1830.5,
        "distanceKm": 21.454607815041285,
        "gradePct": 8.023658231257883,
        "smoothedEle": 1832.052378889204,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510787,
        "lng": 121.524123,
        "ele": 1849.5,
        "distanceKm": 21.514326901911605,
        "gradePct": 8.617063370868125,
        "smoothedEle": 1837.9519686691763,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510922,
        "lng": 121.523748,
        "ele": 1838.75,
        "distanceKm": 21.555129063652338,
        "gradePct": 8.868533076551476,
        "smoothedEle": 1841.354121839289,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510998,
        "lng": 121.523583,
        "ele": 1834,
        "distanceKm": 21.573839985220975,
        "gradePct": 8.72652345344628,
        "smoothedEle": 1842.6126083277138,
        "gradeBand": "steep"
      },
      {
        "lat": 24.511015,
        "lng": 121.523504,
        "ele": 1832.5,
        "distanceKm": 21.582053251008322,
        "gradePct": 8.623597256380238,
        "smoothedEle": 1843.094365832916,
        "gradeBand": "steep"
      },
      {
        "lat": 24.511004,
        "lng": 121.523379,
        "ele": 1832,
        "distanceKm": 21.59475905642109,
        "gradePct": 8.439475084966178,
        "smoothedEle": 1843.7528118349537,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510925,
        "lng": 121.523348,
        "ele": 1834.25,
        "distanceKm": 21.60408659231254,
        "gradePct": 8.293670398224807,
        "smoothedEle": 1844.2149123389668,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510564,
        "lng": 121.523415,
        "ele": 1838.5,
        "distanceKm": 21.6447963532759,
        "gradePct": 7.592881963935865,
        "smoothedEle": 1846.3943571052528,
        "gradeBand": "steep"
      },
      {
        "lat": 24.510212,
        "lng": 121.523614,
        "ele": 1846.5,
        "distanceKm": 21.68881182389837,
        "gradePct": 7.496165662466322,
        "smoothedEle": 1850.4236905646821,
        "gradeBand": "steep"
      },
      {
        "lat": 24.509957,
        "lng": 121.523829,
        "ele": 1856.75,
        "distanceKm": 21.72454932814434,
        "gradePct": 7.470095713885739,
        "smoothedEle": 1853.744523264246,
        "gradeBand": "steep"
      },
      {
        "lat": 24.509725,
        "lng": 121.524108,
        "ele": 1864,
        "distanceKm": 21.762789533454352,
        "gradePct": 7.557759208352449,
        "smoothedEle": 1856.9848793213419,
        "gradeBand": "steep"
      },
      {
        "lat": 24.50924855832874,
        "lng": 121.52433515049083,
        "ele": 1862.3280113949593,
        "distanceKm": 21.820537619271004,
        "gradePct": 9.278284202021755,
        "smoothedEle": 1863.6522057523496,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.50875927916437,
        "lng": 121.52453207524542,
        "ele": 1865.6640056974798,
        "distanceKm": 21.878476546956996,
        "gradePct": 9.994882614491225,
        "smoothedEle": 1869.4673276118365,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.50827,
        "lng": 121.524729,
        "ele": 1869,
        "distanceKm": 21.936415501317256,
        "gradePct": 9.962606502069129,
        "smoothedEle": 1874.675238874965,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.507861322638384,
        "lng": 121.52483831259698,
        "ele": 1884.3137807246717,
        "distanceKm": 21.983184929684988,
        "gradePct": 9.580948412976829,
        "smoothedEle": 1878.501534100505,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.507449,
        "lng": 121.524931,
        "ele": 1900.5,
        "distanceKm": 22.029982427237563,
        "gradePct": 8.773681885330834,
        "smoothedEle": 1882.1475109409582,
        "gradeBand": "steep"
      },
      {
        "lat": 24.507365,
        "lng": 121.524929,
        "ele": 1902,
        "distanceKm": 22.039325005671536,
        "gradePct": 8.68597911601208,
        "smoothedEle": 1882.9097864096361,
        "gradeBand": "steep"
      },
      {
        "lat": 24.507303,
        "lng": 121.524904,
        "ele": 1900.75,
        "distanceKm": 22.046668477327604,
        "gradePct": 8.625410952222328,
        "smoothedEle": 1883.5256879296185,
        "gradeBand": "steep"
      },
      {
        "lat": 24.507241,
        "lng": 121.524862,
        "ele": 1898.5,
        "distanceKm": 22.054767018213543,
        "gradePct": 8.56292716215424,
        "smoothedEle": 1884.2135417808868,
        "gradeBand": "steep"
      },
      {
        "lat": 24.506973,
        "lng": 121.524613,
        "ele": 1883.75,
        "distanceKm": 22.093789497988734,
        "gradePct": 8.422615373901209,
        "smoothedEle": 1887.6889810277812,
        "gradeBand": "steep"
      },
      {
        "lat": 24.506809,
        "lng": 121.524537,
        "ele": 1882,
        "distanceKm": 22.11358040250324,
        "gradePct": 8.421377611557688,
        "smoothedEle": 1889.4654343026668,
        "gradeBand": "steep"
      },
      {
        "lat": 24.506192,
        "lng": 121.524574,
        "ele": 1888.25,
        "distanceKm": 22.18228982613643,
        "gradePct": 8.971070921514102,
        "smoothedEle": 1896.3704458324598,
        "gradeBand": "steep"
      },
      {
        "lat": 24.505643,
        "lng": 121.52476,
        "ele": 1900.5,
        "distanceKm": 22.246170873483443,
        "gradePct": 9.006600913927318,
        "smoothedEle": 1901.4971554146007,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.505199772499147,
        "lng": 121.52480841852078,
        "ele": 1904.7957757093066,
        "distanceKm": 22.295698470840037,
        "gradePct": 7.895870565752744,
        "smoothedEle": 1903.6520736541554,
        "gradeBand": "steep"
      },
      {
        "lat": 24.504755,
        "lng": 121.52484,
        "ele": 1908.25,
        "distanceKm": 22.345258104230968,
        "gradePct": 6.861472398737216,
        "smoothedEle": 1906.3718564763312,
        "gradeBand": "steep"
      },
      {
        "lat": 24.504586,
        "lng": 121.524873,
        "ele": 1911.25,
        "distanceKm": 22.364344394679367,
        "gradePct": 6.589100156938253,
        "smoothedEle": 1907.745204863236,
        "gradeBand": "steep"
      },
      {
        "lat": 24.504506,
        "lng": 121.52492,
        "ele": 1914,
        "distanceKm": 22.37443131767857,
        "gradePct": 6.452947656265929,
        "smoothedEle": 1908.4865937036775,
        "gradeBand": "steep"
      },
      {
        "lat": 24.504479,
        "lng": 121.524971,
        "ele": 1916.75,
        "distanceKm": 22.380401313957247,
        "gradePct": 6.372365111677277,
        "smoothedEle": 1908.9253884301602,
        "gradeBand": "steep"
      },
      {
        "lat": 24.504474,
        "lng": 121.525016,
        "ele": 1919,
        "distanceKm": 22.384988215949093,
        "gradePct": 6.33776165886129,
        "smoothedEle": 1909.2625257265609,
        "gradeBand": "steep"
      },
      {
        "lat": 24.50486,
        "lng": 121.525035,
        "ele": 1917.75,
        "distanceKm": 22.427952546925116,
        "gradePct": 5.706456078248514,
        "smoothedEle": 1911.4479739891033,
        "gradeBand": "hard"
      },
      {
        "lat": 24.505259463820042,
        "lng": 121.52507634889788,
        "ele": 1917.8531332950881,
        "distanceKm": 22.472567546382685,
        "gradePct": 5.264266631824758,
        "smoothedEle": 1913.1741932480274,
        "gradeBand": "hard"
      },
      {
        "lat": 24.505658,
        "lng": 121.52514,
        "ele": 1919,
        "distanceKm": 22.517348322843198,
        "gradePct": 5.025684480291506,
        "smoothedEle": 1914.891564712341,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506057,
        "lng": 121.525215,
        "ele": 1920,
        "distanceKm": 22.562359430955695,
        "gradePct": 4.520659417390009,
        "smoothedEle": 1916.6436962200764,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506594,
        "lng": 121.525207,
        "ele": 1918.75,
        "distanceKm": 22.622076674884912,
        "gradePct": 4.087665407624641,
        "smoothedEle": 1919.3244193323933,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506945,
        "lng": 121.525385,
        "ele": 1910.5,
        "distanceKm": 22.665060939491177,
        "gradePct": 4.0326174243730435,
        "smoothedEle": 1920.9489865514897,
        "gradeBand": "hard"
      },
      {
        "lat": 24.50698,
        "lng": 121.525462,
        "ele": 1908.75,
        "distanceKm": 22.67376961094904,
        "gradePct": 4.0298114363428255,
        "smoothedEle": 1921.2799160668885,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506989,
        "lng": 121.525559,
        "ele": 1907.25,
        "distanceKm": 22.68363472915934,
        "gradePct": 4.047761984848435,
        "smoothedEle": 1921.694150766967,
        "gradeBand": "hard"
      },
      {
        "lat": 24.50696,
        "lng": 121.525631,
        "ele": 1907.5,
        "distanceKm": 22.69160131828098,
        "gradePct": 4.064290105534056,
        "smoothedEle": 1922.0327308046367,
        "gradeBand": "hard"
      },
      {
        "lat": 24.50689,
        "lng": 121.525703,
        "ele": 1909.25,
        "distanceKm": 22.70226215614171,
        "gradePct": 4.086201445221847,
        "smoothedEle": 1922.4854034454202,
        "gradeBand": "hard"
      },
      {
        "lat": 24.5068,
        "lng": 121.525752,
        "ele": 1912.5,
        "distanceKm": 22.713430417715117,
        "gradePct": 4.108220191115279,
        "smoothedEle": 1922.9577509230571,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506709,
        "lng": 121.52577,
        "ele": 1916.25,
        "distanceKm": 22.72371175603747,
        "gradePct": 4.126657638203043,
        "smoothedEle": 1923.392587105159,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506624,
        "lng": 121.52576,
        "ele": 1918.75,
        "distanceKm": 22.733217338326053,
        "gradePct": 4.142660697606986,
        "smoothedEle": 1923.7946136683775,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506581,
        "lng": 121.525729,
        "ele": 1919.75,
        "distanceKm": 22.73893567738963,
        "gradePct": 4.152287769042133,
        "smoothedEle": 1924.0364635762792,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506322,
        "lng": 121.525501,
        "ele": 1922.25,
        "distanceKm": 22.775835169285056,
        "gradePct": 4.441885204180396,
        "smoothedEle": 1926.1323961398841,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506025,
        "lng": 121.525509,
        "ele": 1926,
        "distanceKm": 22.808870025953386,
        "gradePct": 4.706929653962123,
        "smoothedEle": 1928.1454286241822,
        "gradeBand": "hard"
      },
      {
        "lat": 24.505903,
        "lng": 121.525546,
        "ele": 1928.25,
        "distanceKm": 22.82294288903546,
        "gradePct": 4.854687999350308,
        "smoothedEle": 1929.066533430177,
        "gradeBand": "hard"
      },
      {
        "lat": 24.505769,
        "lng": 121.525632,
        "ele": 1932,
        "distanceKm": 22.84019767771305,
        "gradePct": 5.08939995674611,
        "smoothedEle": 1930.1880928255873,
        "gradeBand": "hard"
      },
      {
        "lat": 24.505421,
        "lng": 121.525941,
        "ele": 1936.75,
        "distanceKm": 22.889945274060373,
        "gradePct": 5.780937185835248,
        "smoothedEle": 1933.5242232969313,
        "gradeBand": "hard"
      },
      {
        "lat": 24.50483,
        "lng": 121.526176,
        "ele": 1939,
        "distanceKm": 22.959830758441928,
        "gradePct": 7.088406365162111,
        "smoothedEle": 1939.4001403675177,
        "gradeBand": "steep"
      },
      {
        "lat": 24.504319,
        "lng": 121.526481,
        "ele": 1948,
        "distanceKm": 23.024490753995742,
        "gradePct": 8.36930373559838,
        "smoothedEle": 1945.9057519561638,
        "gradeBand": "steep"
      },
      {
        "lat": 24.504058766014534,
        "lng": 121.52675659541094,
        "ele": 1952.7262761182067,
        "distanceKm": 23.064676465460078,
        "gradePct": 9.320346958339346,
        "smoothedEle": 1950.4703621288286,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.503822,
        "lng": 121.527058,
        "ele": 1952,
        "distanceKm": 23.10496463047424,
        "gradePct": 9.365667422378499,
        "smoothedEle": 1953.5183739255729,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.503589,
        "lng": 121.527319,
        "ele": 1953,
        "distanceKm": 23.141959665381602,
        "gradePct": 8.535520688800178,
        "smoothedEle": 1954.9685941661312,
        "gradeBand": "steep"
      },
      {
        "lat": 24.503361,
        "lng": 121.527752,
        "ele": 1951,
        "distanceKm": 23.19257747391588,
        "gradePct": 6.683004360349765,
        "smoothedEle": 1956.0608819420129,
        "gradeBand": "steep"
      },
      {
        "lat": 24.502896,
        "lng": 121.528159,
        "ele": 1974.5,
        "distanceKm": 23.258678290210533,
        "gradePct": 4.001445143897641,
        "smoothedEle": 1957.791932346285,
        "gradeBand": "hard"
      },
      {
        "lat": 24.502781,
        "lng": 121.528316,
        "ele": 1978.25,
        "distanceKm": 23.279071048925815,
        "gradePct": 3.07390588817135,
        "smoothedEle": 1957.7071999304908,
        "gradeBand": "hard"
      },
      {
        "lat": 24.502764,
        "lng": 121.528481,
        "ele": 1982.5,
        "distanceKm": 23.295872588472978,
        "gradePct": 2.352444043223508,
        "smoothedEle": 1957.5354011658733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.503144,
        "lng": 121.528979,
        "ele": 1960.5,
        "distanceKm": 23.36163251483017,
        "gradePct": -0.10257711613860501,
        "smoothedEle": 1955.187962717271,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503389,
        "lng": 121.529215,
        "ele": 1944,
        "distanceKm": 23.397859000844583,
        "gradePct": -1.7137377639275035,
        "smoothedEle": 1952.7717192193184,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50348,
        "lng": 121.529676,
        "ele": 1954.5,
        "distanceKm": 23.445588126832387,
        "gradePct": -3.694346971641052,
        "smoothedEle": 1950.0604327634067,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503668,
        "lng": 121.530049,
        "ele": 1954.25,
        "distanceKm": 23.4887312975429,
        "gradePct": -5.0248627561694725,
        "smoothedEle": 1947.5586966380768,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503982,
        "lng": 121.5304,
        "ele": 1943.2500000000005,
        "distanceKm": 23.53853426396915,
        "gradePct": -6.303637845206844,
        "smoothedEle": 1943.4052275208976,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504296,
        "lng": 121.530751,
        "ele": 1932.25,
        "distanceKm": 23.588337167133858,
        "gradePct": -7.036782216321537,
        "smoothedEle": 1939.333244504816,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504483,
        "lng": 121.531094,
        "ele": 1919.25,
        "distanceKm": 23.62879430809928,
        "gradePct": -6.8808240567888355,
        "smoothedEle": 1937.2527692940428,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504475,
        "lng": 121.531453,
        "ele": 1922.25,
        "distanceKm": 23.665128679648348,
        "gradePct": -6.107323804040356,
        "smoothedEle": 1936.7126902509985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504353,
        "lng": 121.531823,
        "ele": 1927.5,
        "distanceKm": 23.70494727618714,
        "gradePct": -5.355588087508086,
        "smoothedEle": 1935.4951398452627,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504301,
        "lng": 121.531894,
        "ele": 1928.25,
        "distanceKm": 23.71416896880842,
        "gradePct": -5.12782137895444,
        "smoothedEle": 1935.1816022961393,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504245,
        "lng": 121.531942,
        "ele": 1929.5,
        "distanceKm": 23.72206589459741,
        "gradePct": -4.9337870349159125,
        "smoothedEle": 1934.9110829574608,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504105,
        "lng": 121.531993,
        "ele": 1932.25,
        "distanceKm": 23.738466155600406,
        "gradePct": -4.618918206058895,
        "smoothedEle": 1934.1730712123258,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503497,
        "lng": 121.53198,
        "ele": 1938.75,
        "distanceKm": 23.80608555870106,
        "gradePct": -2.7635057075402853,
        "smoothedEle": 1932.8935366459057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503177,
        "lng": 121.532091,
        "ele": 1933.75,
        "distanceKm": 23.843398361488667,
        "gradePct": -1.670745809694046,
        "smoothedEle": 1933.6942010377722,
        "gradeBand": "descent"
      },
      {
        "lat": 24.502774,
        "lng": 121.532056,
        "ele": 1937,
        "distanceKm": 23.88834969136332,
        "gradePct": -0.8674371315664788,
        "smoothedEle": 1934.2677770941639,
        "gradeBand": "descent"
      },
      {
        "lat": 24.502253,
        "lng": 121.532079,
        "ele": 1937.5,
        "distanceKm": 23.946329050752077,
        "gradePct": 0.5873405658170462,
        "smoothedEle": 1935.1989659649419,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501818,
        "lng": 121.532229,
        "ele": 1931.75,
        "distanceKm": 23.99702413791093,
        "gradePct": 1.006461193220165,
        "smoothedEle": 1935.0779246263944,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501734,
        "lng": 121.532245,
        "ele": 1931.5,
        "distanceKm": 24.006503783974225,
        "gradePct": 1.0118696476450886,
        "smoothedEle": 1934.9262502893816,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501635,
        "lng": 121.53222,
        "ele": 1934,
        "distanceKm": 24.017798984700644,
        "gradePct": 0.7201840325889205,
        "smoothedEle": 1934.5852533743832,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501418,
        "lng": 121.532089,
        "ele": 1946.25,
        "distanceKm": 24.045329249450347,
        "gradePct": -0.22818111194908478,
        "smoothedEle": 1933.2624768191451,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501357,
        "lng": 121.532066,
        "ele": 1948.75,
        "distanceKm": 24.05250027004324,
        "gradePct": -0.46442721927928854,
        "smoothedEle": 1932.881486362574,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501294,
        "lng": 121.532069,
        "ele": 1950.25,
        "distanceKm": 24.05951213350409,
        "gradePct": -0.6949770626904435,
        "smoothedEle": 1932.509857599149,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501261,
        "lng": 121.532095,
        "ele": 1949.5,
        "distanceKm": 24.064027169414338,
        "gradePct": -0.8434312971342055,
        "smoothedEle": 1932.2705606959057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501216,
        "lng": 121.532206,
        "ele": 1944.75,
        "distanceKm": 24.07632262575683,
        "gradePct": -1.2344342321107478,
        "smoothedEle": 1931.6454440521475,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501187,
        "lng": 121.532327,
        "ele": 1939.5,
        "distanceKm": 24.088983223762536,
        "gradePct": -1.5821265647922529,
        "smoothedEle": 1931.113698935908,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50116,
        "lng": 121.532515,
        "ele": 1930.75,
        "distanceKm": 24.108240956122295,
        "gradePct": -2.1127824883473143,
        "smoothedEle": 1930.3616796756578,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501141,
        "lng": 121.532589,
        "ele": 1928.75,
        "distanceKm": 24.116020803672733,
        "gradePct": -2.290487149344707,
        "smoothedEle": 1930.1312201208161,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501067,
        "lng": 121.532688,
        "ele": 1927,
        "distanceKm": 24.128984154247462,
        "gradePct": -2.6279276766500836,
        "smoothedEle": 1929.664539500126,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501018,
        "lng": 121.532716,
        "ele": 1927.25,
        "distanceKm": 24.135125268744634,
        "gradePct": -2.787783024403221,
        "smoothedEle": 1929.4434593782278,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500689,
        "lng": 121.532722,
        "ele": 1931.75,
        "distanceKm": 24.171713487144096,
        "gradePct": -3.378729461819501,
        "smoothedEle": 1928.3808982854773,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500537,
        "lng": 121.532694,
        "ele": 1932.75,
        "distanceKm": 24.188850943040965,
        "gradePct": -3.456810842845938,
        "smoothedEle": 1928.1838175426633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500484,
        "lng": 121.532695,
        "ele": 1932.75,
        "distanceKm": 24.194745150833814,
        "gradePct": -3.4737845306946276,
        "smoothedEle": 1928.1357969531516,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500325,
        "lng": 121.532791,
        "ele": 1930,
        "distanceKm": 24.21491781123984,
        "gradePct": -3.2823483834215614,
        "smoothedEle": 1928.1075379092015,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500257,
        "lng": 121.532851,
        "ele": 1928.25,
        "distanceKm": 24.224614693242057,
        "gradePct": -3.0606220383314278,
        "smoothedEle": 1928.1365275409016,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500222,
        "lng": 121.532919,
        "ele": 1926.75,
        "distanceKm": 24.232519556023263,
        "gradePct": -2.8382844475162403,
        "smoothedEle": 1928.2013891880665,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500213,
        "lng": 121.533008,
        "ele": 1924.25,
        "distanceKm": 24.241580282949705,
        "gradePct": -2.5843662420848066,
        "smoothedEle": 1928.2738750034782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500213,
        "lng": 121.533355,
        "ele": 1915,
        "distanceKm": 24.276690799600132,
        "gradePct": -1.893608380035523,
        "smoothedEle": 1927.8427639906577,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500177,
        "lng": 121.533416,
        "ele": 1913,
        "distanceKm": 24.28404741792747,
        "gradePct": -1.8394277047077658,
        "smoothedEle": 1927.642147371565,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500104,
        "lng": 121.533457,
        "ele": 1912,
        "distanceKm": 24.29316332224141,
        "gradePct": -1.8524297559946556,
        "smoothedEle": 1927.2456055339087,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500032,
        "lng": 121.533464,
        "ele": 1912.25,
        "distanceKm": 24.301200637250677,
        "gradePct": -1.8998387547357036,
        "smoothedEle": 1926.8369283771676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.49996,
        "lng": 121.533449,
        "ele": 1912.25,
        "distanceKm": 24.309349276944943,
        "gradePct": -1.9770993240231363,
        "smoothedEle": 1926.374649648622,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499861,
        "lng": 121.533391,
        "ele": 1912.75,
        "distanceKm": 24.321824203020405,
        "gradePct": -2.1233405210598524,
        "smoothedEle": 1925.6756167021802,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499437,
        "lng": 121.532967,
        "ele": 1919,
        "distanceKm": 24.38556882940658,
        "gradePct": -1.409606918957484,
        "smoothedEle": 1925.4023480115438,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499146,
        "lng": 121.532565,
        "ele": 1931.75,
        "distanceKm": 24.437545291099923,
        "gradePct": -1.14121417279603,
        "smoothedEle": 1925.959166723088,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499086,
        "lng": 121.532509,
        "ele": 1935.25,
        "distanceKm": 24.44629849625171,
        "gradePct": -1.1743417371939173,
        "smoothedEle": 1925.867258068994,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498976,
        "lng": 121.532509,
        "ele": 1937.75,
        "distanceKm": 24.45852995507733,
        "gradePct": -1.1532929706739918,
        "smoothedEle": 1925.7591693585478,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498877,
        "lng": 121.532575,
        "ele": 1937.25,
        "distanceKm": 24.471405537862243,
        "gradePct": -1.1644461531383326,
        "smoothedEle": 1925.5787677542262,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498835,
        "lng": 121.532633,
        "ele": 1935.75,
        "distanceKm": 24.478905678565468,
        "gradePct": -1.1564973567063856,
        "smoothedEle": 1925.4693690349116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498723,
        "lng": 121.532984,
        "ele": 1924.5,
        "distanceKm": 24.516541566053537,
        "gradePct": -0.3802432613526903,
        "smoothedEle": 1925.2111429383156,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498324,
        "lng": 121.533317,
        "ele": 1921,
        "distanceKm": 24.57225268949971,
        "gradePct": 0.23937230220269695,
        "smoothedEle": 1925.9381779629498,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.497944,
        "lng": 121.533473,
        "ele": 1937.5,
        "distanceKm": 24.617358919234967,
        "gradePct": 0.6206105113052467,
        "smoothedEle": 1926.9841331333912,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.497857,
        "lng": 121.533543,
        "ele": 1940.25,
        "distanceKm": 24.62934865740975,
        "gradePct": 0.7961828330960572,
        "smoothedEle": 1927.4637226603822,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.497807,
        "lng": 121.53362,
        "ele": 1941,
        "distanceKm": 24.63892019421689,
        "gradePct": 0.9509269461540305,
        "smoothedEle": 1927.8465841326679,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49779,
        "lng": 121.533725,
        "ele": 1939,
        "distanceKm": 24.64971147200391,
        "gradePct": 1.2236474759027984,
        "smoothedEle": 1928.2843927469435,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.497788,
        "lng": 121.534148,
        "ele": 1927.5,
        "distanceKm": 24.692513303008997,
        "gradePct": 1.8465318359378737,
        "smoothedEle": 1929.0690685275817,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.497756609456573,
        "lng": 121.534535517391,
        "ele": 1920.8891793512637,
        "distanceKm": 24.731879304488732,
        "gradePct": 1.3899188481497098,
        "smoothedEle": 1928.191139460201,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.497664,
        "lng": 121.534911,
        "ele": 1917.5,
        "distanceKm": 24.771243355107337,
        "gradePct": 0.8768319567763033,
        "smoothedEle": 1927.6786699745655,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49777,
        "lng": 121.534459,
        "ele": 1921.75,
        "distanceKm": 24.818473376827846,
        "gradePct": 0.7119494296964629,
        "smoothedEle": 1928.4526102964994,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49779,
        "lng": 121.533725,
        "ele": 1939,
        "distanceKm": 24.89277645741165,
        "gradePct": -0.3458491086406651,
        "smoothedEle": 1928.371501517672,
        "gradeBand": "descent"
      },
      {
        "lat": 24.497807,
        "lng": 121.53362,
        "ele": 1941,
        "distanceKm": 24.90356773519867,
        "gradePct": -0.44442145307880465,
        "smoothedEle": 1927.933692903396,
        "gradeBand": "descent"
      },
      {
        "lat": 24.497857,
        "lng": 121.533543,
        "ele": 1940.25,
        "distanceKm": 24.91313927200581,
        "gradePct": -0.5291213800635451,
        "smoothedEle": 1927.5508314311103,
        "gradeBand": "descent"
      },
      {
        "lat": 24.497944,
        "lng": 121.533473,
        "ele": 1937.5,
        "distanceKm": 24.925129010180594,
        "gradePct": -0.5890291633398894,
        "smoothedEle": 1927.163624225624,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498073,
        "lng": 121.53344,
        "ele": 1931.25,
        "distanceKm": 24.939856693703792,
        "gradePct": -0.5948805269699754,
        "smoothedEle": 1926.897523023405,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498380727685788,
        "lng": 121.53327252415167,
        "ele": 1921.3776251272848,
        "distanceKm": 24.97804078113902,
        "gradePct": -0.9054035575744624,
        "smoothedEle": 1925.9792496828743,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498662,
        "lng": 121.533052,
        "ele": 1923.25,
        "distanceKm": 25.016460714298127,
        "gradePct": -1.4941756093971943,
        "smoothedEle": 1925.4312783457585,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498835,
        "lng": 121.532633,
        "ele": 1935.75,
        "distanceKm": 25.063017017969138,
        "gradePct": -1.3678494855112198,
        "smoothedEle": 1925.6682877649314,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498877,
        "lng": 121.532575,
        "ele": 1937.25,
        "distanceKm": 25.070517158672363,
        "gradePct": -1.3150050175593198,
        "smoothedEle": 1925.7657895940733,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498976,
        "lng": 121.532509,
        "ele": 1937.75,
        "distanceKm": 25.083392741457274,
        "gradePct": -1.2035399351030989,
        "smoothedEle": 1925.974664853211,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499034,
        "lng": 121.532494,
        "ele": 1937.25,
        "distanceKm": 25.09001824186937,
        "gradePct": -1.1332906627232018,
        "smoothedEle": 1926.1079310430896,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499086,
        "lng": 121.532509,
        "ele": 1935.25,
        "distanceKm": 25.095996267079585,
        "gradePct": -1.0037011675732437,
        "smoothedEle": 1926.233469572504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499146,
        "lng": 121.532565,
        "ele": 1931.75,
        "distanceKm": 25.104749472231372,
        "gradePct": -0.7345682706982214,
        "smoothedEle": 1926.4172868806913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499437,
        "lng": 121.532967,
        "ele": 1919,
        "distanceKm": 25.156725933924715,
        "gradePct": -0.47947183509723057,
        "smoothedEle": 1925.5328979657436,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499861,
        "lng": 121.533391,
        "ele": 1912.75,
        "distanceKm": 25.22047056031089,
        "gradePct": 0.18852018069492327,
        "smoothedEle": 1925.8287320819122,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49996,
        "lng": 121.533449,
        "ele": 1912.25,
        "distanceKm": 25.232945486386352,
        "gradePct": 0.5087683902934277,
        "smoothedEle": 1926.53273601245,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500032,
        "lng": 121.533464,
        "ele": 1912.25,
        "distanceKm": 25.24109412608062,
        "gradePct": 0.7126894863517944,
        "smoothedEle": 1926.9820614025164,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500104,
        "lng": 121.533457,
        "ele": 1912,
        "distanceKm": 25.249131441089887,
        "gradePct": 0.8886170028027922,
        "smoothedEle": 1927.3748329002544,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500177,
        "lng": 121.533416,
        "ele": 1913,
        "distanceKm": 25.258247345403824,
        "gradePct": 1.0750791215728024,
        "smoothedEle": 1927.7941644986956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500213,
        "lng": 121.533008,
        "ele": 1924.25,
        "distanceKm": 25.299723658481714,
        "gradePct": 1.0234848349846326,
        "smoothedEle": 1928.3587144619178,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500222,
        "lng": 121.532919,
        "ele": 1926.75,
        "distanceKm": 25.308784385408156,
        "gradePct": 0.9687982723646689,
        "smoothedEle": 1928.286228646506,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500257,
        "lng": 121.532851,
        "ele": 1928.25,
        "distanceKm": 25.316689248189363,
        "gradePct": 1.017673262392581,
        "smoothedEle": 1928.249475953811,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500325,
        "lng": 121.532791,
        "ele": 1930,
        "distanceKm": 25.32638613019158,
        "gradePct": 1.097862904363073,
        "smoothedEle": 1928.244861033204,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500454,
        "lng": 121.532708,
        "ele": 1932.25,
        "distanceKm": 25.343007938845425,
        "gradePct": 1.2302450933767703,
        "smoothedEle": 1928.2268023247625,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500858,
        "lng": 121.532732,
        "ele": 1931,
        "distanceKm": 25.387996338757105,
        "gradePct": 1.5932258587435002,
        "smoothedEle": 1928.8644733289443,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500949,
        "lng": 121.53273,
        "ele": 1928.75,
        "distanceKm": 25.398117114404908,
        "gradePct": 1.7569753210425525,
        "smoothedEle": 1929.2389420279133,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501018,
        "lng": 121.532716,
        "ele": 1927.25,
        "distanceKm": 25.40591924717568,
        "gradePct": 1.860838265724403,
        "smoothedEle": 1929.4828770408271,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501067,
        "lng": 121.532688,
        "ele": 1927,
        "distanceKm": 25.412060361672854,
        "gradePct": 1.9417753103913427,
        "smoothedEle": 1929.6732515902397,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501141,
        "lng": 121.532589,
        "ele": 1928.75,
        "distanceKm": 25.425023712247583,
        "gradePct": 1.994716503514617,
        "smoothedEle": 1930.0751154580562,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501216,
        "lng": 121.532206,
        "ele": 1944.75,
        "distanceKm": 25.464663712557222,
        "gradePct": 1.8673430030623943,
        "smoothedEle": 1931.6161861325959,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501261,
        "lng": 121.532095,
        "ele": 1949.5,
        "distanceKm": 25.476959168899715,
        "gradePct": 2.103471360915826,
        "smoothedEle": 1932.255801007957,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501294,
        "lng": 121.532069,
        "ele": 1950.25,
        "distanceKm": 25.481474204809963,
        "gradePct": 2.192391872082575,
        "smoothedEle": 1932.4950979111998,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501418,
        "lng": 121.532089,
        "ele": 1946.25,
        "distanceKm": 25.495410104890208,
        "gradePct": 2.4669241210919015,
        "smoothedEle": 1933.2338492761055,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501635,
        "lng": 121.53222,
        "ele": 1934,
        "distanceKm": 25.52294036963991,
        "gradePct": 3.132953641306028,
        "smoothedEle": 1934.5124082152572,
        "gradeBand": "hard"
      },
      {
        "lat": 24.501734,
        "lng": 121.532245,
        "ele": 1931.5,
        "distanceKm": 25.53423557036633,
        "gradePct": 3.335089066309718,
        "smoothedEle": 1934.906511167788,
        "gradeBand": "hard"
      },
      {
        "lat": 24.501818,
        "lng": 121.532229,
        "ele": 1931.75,
        "distanceKm": 25.543715216429625,
        "gradePct": 3.410679071144967,
        "smoothedEle": 1935.0581855048008,
        "gradeBand": "hard"
      },
      {
        "lat": 24.502166,
        "lng": 121.532098,
        "ele": 1937,
        "distanceKm": 25.584618287652994,
        "gradePct": 3.2335982401616663,
        "smoothedEle": 1935.2837889056577,
        "gradeBand": "hard"
      },
      {
        "lat": 24.502553,
        "lng": 121.532055,
        "ele": 1937.5,
        "distanceKm": 25.627870167934,
        "gradePct": 2.318862258993826,
        "smoothedEle": 1934.823500655924,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.502922,
        "lng": 121.53209,
        "ele": 1934.5,
        "distanceKm": 25.669053693215886,
        "gradePct": 1.1110427696418168,
        "smoothedEle": 1934.066640335361,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.503069,
        "lng": 121.532109,
        "ele": 1933,
        "distanceKm": 25.685512031751994,
        "gradePct": 0.581141660691744,
        "smoothedEle": 1933.8714291338672,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.503423,
        "lng": 121.53199,
        "ele": 1938.75,
        "distanceKm": 25.726675411246195,
        "gradePct": -0.8379006675120337,
        "smoothedEle": 1932.9669269126534,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50376372837868,
        "lng": 121.53198570307389,
        "ele": 1935.8984630568723,
        "distanceKm": 25.764565225072,
        "gradePct": -1.210261842284926,
        "smoothedEle": 1932.752661323127,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504105,
        "lng": 121.531993,
        "ele": 1932.25,
        "distanceKm": 25.802520131847636,
        "gradePct": -0.4906506529321195,
        "smoothedEle": 1934.1119754537822,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504245,
        "lng": 121.531942,
        "ele": 1929.5,
        "distanceKm": 25.818920392850632,
        "gradePct": -0.0593352759709662,
        "smoothedEle": 1934.800073970419,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504301,
        "lng": 121.531894,
        "ele": 1928.25,
        "distanceKm": 25.826817318639623,
        "gradePct": 0.11954719615789643,
        "smoothedEle": 1935.0737995127806,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504353,
        "lng": 121.531823,
        "ele": 1927.5,
        "distanceKm": 25.8360390112609,
        "gradePct": 0.3615915085815699,
        "smoothedEle": 1935.3965587545254,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504418,
        "lng": 121.531703,
        "ele": 1926.75,
        "distanceKm": 25.850169011229486,
        "gradePct": 0.7387052752644676,
        "smoothedEle": 1935.8911087534261,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504487,
        "lng": 121.5312,
        "ele": 1919.5,
        "distanceKm": 25.901637450740914,
        "gradePct": 1.7206117402089438,
        "smoothedEle": 1936.958321228653,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504457,
        "lng": 121.531009,
        "ele": 1920.75,
        "distanceKm": 25.921248554662213,
        "gradePct": 2.3254247045946466,
        "smoothedEle": 1937.737023183853,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504394,
        "lng": 121.530879,
        "ele": 1925.75,
        "distanceKm": 25.93615106582494,
        "gradePct": 2.812607980651033,
        "smoothedEle": 1938.5385583743378,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504296,
        "lng": 121.530751,
        "ele": 1932.25,
        "distanceKm": 25.953076658410357,
        "gradePct": 3.3259185977159524,
        "smoothedEle": 1939.4694659665356,
        "gradeBand": "hard"
      },
      {
        "lat": 24.503982,
        "lng": 121.5304,
        "ele": 1943.2500000000005,
        "distanceKm": 26.002879561575064,
        "gradePct": 4.762714325360679,
        "smoothedEle": 1943.6524845390304,
        "gradeBand": "hard"
      },
      {
        "lat": 24.503668,
        "lng": 121.530049,
        "ele": 1954.25,
        "distanceKm": 26.052682528001316,
        "gradePct": 5.927305136138919,
        "smoothedEle": 1947.7978374983263,
        "gradeBand": "hard"
      },
      {
        "lat": 24.50348,
        "lng": 121.529676,
        "ele": 1954.5,
        "distanceKm": 26.095825698711828,
        "gradePct": 6.741225527551046,
        "smoothedEle": 1950.3202639814392,
        "gradeBand": "steep"
      },
      {
        "lat": 24.503412,
        "lng": 121.529262,
        "ele": 1944.25,
        "distanceKm": 26.138391368065452,
        "gradePct": 6.9799593104585504,
        "smoothedEle": 1952.621693618483,
        "gradeBand": "steep"
      },
      {
        "lat": 24.503144,
        "lng": 121.528979,
        "ele": 1960.5,
        "distanceKm": 26.179718945644545,
        "gradePct": 6.802284434356717,
        "smoothedEle": 1955.311759450334,
        "gradeBand": "steep"
      },
      {
        "lat": 24.502845,
        "lng": 121.528632,
        "ele": 1979.25,
        "distanceKm": 26.22807262921993,
        "gradePct": 5.845547065764229,
        "smoothedEle": 1957.4405251982328,
        "gradeBand": "hard"
      },
      {
        "lat": 24.502764,
        "lng": 121.528481,
        "ele": 1982.5,
        "distanceKm": 26.245808177808886,
        "gradePct": 5.280358928243932,
        "smoothedEle": 1957.7863683957175,
        "gradeBand": "hard"
      },
      {
        "lat": 24.502781,
        "lng": 121.528316,
        "ele": 1978.25,
        "distanceKm": 26.26260971735605,
        "gradePct": 4.8678768775910335,
        "smoothedEle": 1958.1139984168872,
        "gradeBand": "hard"
      },
      {
        "lat": 24.502896,
        "lng": 121.528159,
        "ele": 1974.5,
        "distanceKm": 26.28300247607133,
        "gradePct": 4.26970024215963,
        "smoothedEle": 1958.1099366211297,
        "gradeBand": "hard"
      },
      {
        "lat": 24.503361,
        "lng": 121.527752,
        "ele": 1951,
        "distanceKm": 26.349103292365985,
        "gradePct": 1.5452701576729224,
        "smoothedEle": 1956.4094870331448,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.503589,
        "lng": 121.527319,
        "ele": 1953,
        "distanceKm": 26.399721100900262,
        "gradePct": -0.42614116468507895,
        "smoothedEle": 1955.3400698668327,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503822,
        "lng": 121.527058,
        "ele": 1952,
        "distanceKm": 26.436716135807625,
        "gradePct": -1.8483657034339622,
        "smoothedEle": 1953.912342169825,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504148,
        "lng": 121.526643,
        "ele": 1953,
        "distanceKm": 26.492188367112497,
        "gradePct": -4.4037053905997405,
        "smoothedEle": 1949.0662179467479,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504475302760934,
        "lng": 121.52638770774543,
        "ele": 1945.2471137995565,
        "distanceKm": 26.536817576524143,
        "gradePct": -6.335741427610538,
        "smoothedEle": 1944.0540553496405,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50483,
        "lng": 121.526176,
        "ele": 1939,
        "distanceKm": 26.581699609112636,
        "gradePct": -8.033276372324309,
        "smoothedEle": 1939.6542624218782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.505346,
        "lng": 121.525971,
        "ele": 1936.75,
        "distanceKm": 26.642710265693303,
        "gradePct": -9.458879856415967,
        "smoothedEle": 1934.4709276958279,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50562,
        "lng": 121.525788,
        "ele": 1937.25,
        "distanceKm": 26.678362720795672,
        "gradePct": -9.150489166700854,
        "smoothedEle": 1931.9730655460626,
        "gradeBand": "descent"
      },
      {
        "lat": 24.505903,
        "lng": 121.525546,
        "ele": 1928.25,
        "distanceKm": 26.718234689723722,
        "gradePct": -8.389049598507002,
        "smoothedEle": 1929.3629402465695,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506322,
        "lng": 121.525501,
        "ele": 1922.25,
        "distanceKm": 26.765047369059115,
        "gradePct": -7.5164884589480865,
        "smoothedEle": 1926.2537072949165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506581,
        "lng": 121.525729,
        "ele": 1919.75,
        "distanceKm": 26.80194686095454,
        "gradePct": -6.817590698372693,
        "smoothedEle": 1924.2989178690377,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506624,
        "lng": 121.52576,
        "ele": 1918.75,
        "distanceKm": 26.807665200018118,
        "gradePct": -6.730490013200575,
        "smoothedEle": 1923.9873013986187,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506709,
        "lng": 121.52577,
        "ele": 1916.25,
        "distanceKm": 26.8171707823067,
        "gradePct": -6.536274390106906,
        "smoothedEle": 1923.5681587301967,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5068,
        "lng": 121.525752,
        "ele": 1912.5,
        "distanceKm": 26.827452120629054,
        "gradePct": -6.31544225191501,
        "smoothedEle": 1923.136342520658,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50689,
        "lng": 121.525703,
        "ele": 1909.25,
        "distanceKm": 26.83862038220246,
        "gradePct": -6.082076831250582,
        "smoothedEle": 1922.6542417760406,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50696,
        "lng": 121.525631,
        "ele": 1907.5,
        "distanceKm": 26.84928122006319,
        "gradePct": -5.912696148065287,
        "smoothedEle": 1922.1851649101686,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506989,
        "lng": 121.525559,
        "ele": 1907.25,
        "distanceKm": 26.85724780918483,
        "gradePct": -5.808885777567773,
        "smoothedEle": 1921.8346349888168,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50698,
        "lng": 121.525462,
        "ele": 1908.75,
        "distanceKm": 26.86711292739513,
        "gradePct": -5.669293233793858,
        "smoothedEle": 1921.4226557425281,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506945,
        "lng": 121.525385,
        "ele": 1910.5,
        "distanceKm": 26.875821598852994,
        "gradePct": -5.536218487397624,
        "smoothedEle": 1921.0786632199424,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506594,
        "lng": 121.525207,
        "ele": 1918.75,
        "distanceKm": 26.91880586345926,
        "gradePct": -4.934237740079897,
        "smoothedEle": 1919.4565282025371,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506057,
        "lng": 121.525215,
        "ele": 1920,
        "distanceKm": 26.978523107388476,
        "gradePct": -4.478104415785326,
        "smoothedEle": 1916.583607039941,
        "gradeBand": "descent"
      },
      {
        "lat": 24.505658,
        "lng": 121.52514,
        "ele": 1919,
        "distanceKm": 27.023534215500973,
        "gradePct": -4.241557047991152,
        "smoothedEle": 1914.817780440055,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5053105,
        "lng": 121.52508449999999,
        "ele": 1918,
        "distanceKm": 27.06258040637984,
        "gradePct": -4.150880140366682,
        "smoothedEle": 1913.310179011354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504963,
        "lng": 121.525029,
        "ele": 1917,
        "distanceKm": 27.1016265994912,
        "gradePct": -4.228747033646202,
        "smoothedEle": 1911.6473431364827,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504474,
        "lng": 121.525016,
        "ele": 1919,
        "distanceKm": 27.15601690053648,
        "gradePct": -4.246396498244182,
        "smoothedEle": 1909.1735592222406,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504479,
        "lng": 121.524971,
        "ele": 1916.75,
        "distanceKm": 27.160603802528325,
        "gradePct": -4.304630116425771,
        "smoothedEle": 1908.83642192584,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504506,
        "lng": 121.52492,
        "ele": 1914,
        "distanceKm": 27.166573798807,
        "gradePct": -4.3804229902338125,
        "smoothedEle": 1908.3976271993574,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504586,
        "lng": 121.524873,
        "ele": 1911.25,
        "distanceKm": 27.176660721806204,
        "gradePct": -4.508482849286468,
        "smoothedEle": 1907.6562383589157,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504755,
        "lng": 121.52484,
        "ele": 1908.25,
        "distanceKm": 27.195747012254603,
        "gradePct": -4.8272508088205255,
        "smoothedEle": 1906.2533960109586,
        "gradeBand": "descent"
      },
      {
        "lat": 24.505093,
        "lng": 121.524816,
        "ele": 1905.6250000000002,
        "distanceKm": 27.233409314100612,
        "gradePct": -5.07159644857747,
        "smoothedEle": 1904.293302904827,
        "gradeBand": "descent"
      },
      {
        "lat": 24.505431,
        "lng": 121.524792,
        "ele": 1903,
        "distanceKm": 27.271071615525997,
        "gradePct": -5.0396325565054845,
        "smoothedEle": 1902.869304069979,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506037,
        "lng": 121.524605,
        "ele": 1890.25,
        "distanceKm": 27.34106171765692,
        "gradePct": -5.835593615029118,
        "smoothedEle": 1898.1825647863204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506422170574226,
        "lng": 121.52456718573957,
        "ele": 1887.682144964899,
        "distanceKm": 27.384061340915267,
        "gradePct": -6.465661383614725,
        "smoothedEle": 1894.1809700871702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506809,
        "lng": 121.524537,
        "ele": 1882,
        "distanceKm": 27.427183161227376,
        "gradePct": -7.4025233726280515,
        "smoothedEle": 1889.812289442891,
        "gradeBand": "descent"
      },
      {
        "lat": 24.507241,
        "lng": 121.524862,
        "ele": 1898.5,
        "distanceKm": 27.485396185080376,
        "gradePct": -8.651492679746783,
        "smoothedEle": 1884.6071041814594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.507303,
        "lng": 121.524904,
        "ele": 1900.75,
        "distanceKm": 27.493494725966315,
        "gradePct": -8.743763863850209,
        "smoothedEle": 1883.8802601369462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.507365,
        "lng": 121.524929,
        "ele": 1902,
        "distanceKm": 27.500838197622382,
        "gradePct": -8.827432123932939,
        "smoothedEle": 1883.2211835558142,
        "gradeBand": "descent"
      },
      {
        "lat": 24.507449,
        "lng": 121.524931,
        "ele": 1900.5,
        "distanceKm": 27.510180776056355,
        "gradePct": -8.904587595035341,
        "smoothedEle": 1882.4412665918428,
        "gradeBand": "descent"
      },
      {
        "lat": 24.508054,
        "lng": 121.524795,
        "ele": 1876.75,
        "distanceKm": 27.578846627775786,
        "gradePct": -8.749589995899019,
        "smoothedEle": 1877.1670773345454,
        "gradeBand": "descent"
      },
      {
        "lat": 24.508532986614906,
        "lng": 121.5246231533211,
        "ele": 1867.2069094438234,
        "distanceKm": 27.634873692451734,
        "gradePct": -8.417754212489088,
        "smoothedEle": 1872.2891232201887,
        "gradeBand": "descent"
      },
      {
        "lat": 24.509006493307453,
        "lng": 121.52443257666056,
        "ele": 1863.9784547219117,
        "distanceKm": 27.690944905086965,
        "gradePct": -8.574818845585842,
        "smoothedEle": 1866.9594688696961,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50948,
        "lng": 121.524242,
        "ele": 1860.75,
        "distanceKm": 27.7470160927398,
        "gradePct": -9.642464461410247,
        "smoothedEle": 1860.3270356699038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50966,
        "lng": 121.524156,
        "ele": 1864.5,
        "distanceKm": 27.768840708319143,
        "gradePct": -10.020120297028178,
        "smoothedEle": 1857.8953863409986,
        "gradeBand": "descent"
      },
      {
        "lat": 24.509957,
        "lng": 121.523829,
        "ele": 1856.75,
        "distanceKm": 27.81558703947742,
        "gradePct": -10.108471082741438,
        "smoothedEle": 1853.7513589443981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510212,
        "lng": 121.523614,
        "ele": 1846.5,
        "distanceKm": 27.851324543723393,
        "gradePct": -10.198560206352148,
        "smoothedEle": 1850.3283242828252,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510564,
        "lng": 121.523415,
        "ele": 1838.5,
        "distanceKm": 27.895340014345862,
        "gradePct": -10.08640159942005,
        "smoothedEle": 1846.266786035955,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510925,
        "lng": 121.523348,
        "ele": 1834.25,
        "distanceKm": 27.936049775309222,
        "gradePct": -8.843890928170286,
        "smoothedEle": 1843.9364149911783,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511004,
        "lng": 121.523379,
        "ele": 1832,
        "distanceKm": 27.945377311200673,
        "gradePct": -8.546207136351798,
        "smoothedEle": 1843.4284662138036,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511015,
        "lng": 121.523504,
        "ele": 1832.5,
        "distanceKm": 27.95808311661344,
        "gradePct": -8.178712785056321,
        "smoothedEle": 1842.7365473190296,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510998,
        "lng": 121.523583,
        "ele": 1834,
        "distanceKm": 27.966296382400788,
        "gradePct": -7.944795567524834,
        "smoothedEle": 1842.28927824781,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510922,
        "lng": 121.523748,
        "ele": 1838.75,
        "distanceKm": 27.985007303969425,
        "gradePct": -7.619376304491906,
        "smoothedEle": 1841.2234770836847,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510787,
        "lng": 121.524123,
        "ele": 1849.5,
        "distanceKm": 28.025809465710157,
        "gradePct": -7.616323165995281,
        "smoothedEle": 1837.5395810233858,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510865,
        "lng": 121.524707,
        "ele": 1830.5,
        "distanceKm": 28.085528552580477,
        "gradePct": -7.769364032657136,
        "smoothedEle": 1831.6334129890981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510901,
        "lng": 121.524762,
        "ele": 1827.25,
        "distanceKm": 28.09238339835933,
        "gradePct": -7.7358601410941485,
        "smoothedEle": 1831.0678882123427,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510947,
        "lng": 121.524802,
        "ele": 1824,
        "distanceKm": 28.098905742880408,
        "gradePct": -7.784149499307006,
        "smoothedEle": 1830.494372094541,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511003,
        "lng": 121.524818,
        "ele": 1821,
        "distanceKm": 28.105339642946728,
        "gradePct": -7.897567752508763,
        "smoothedEle": 1829.8992363384064,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511044,
        "lng": 121.524803,
        "ele": 1819.5,
        "distanceKm": 28.11014460091998,
        "gradePct": -7.982270644132342,
        "smoothedEle": 1829.4547777258804,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511069,
        "lng": 121.524757,
        "ele": 1819.5,
        "distanceKm": 28.115565634479537,
        "gradePct": -8.077833856264334,
        "smoothedEle": 1828.953332121621,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511071,
        "lng": 121.524676,
        "ele": 1821.5,
        "distanceKm": 28.1237637701563,
        "gradePct": -8.21890052695565,
        "smoothedEle": 1828.2019084294677,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510949,
        "lng": 121.524352,
        "ele": 1836.75,
        "distanceKm": 28.159240403160425,
        "gradePct": -8.735486054086355,
        "smoothedEle": 1825.2025529621671,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511007,
        "lng": 121.523948,
        "ele": 1836.75,
        "distanceKm": 28.200620522391358,
        "gradePct": -8.943273744597295,
        "smoothedEle": 1821.9272622783653,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511423,
        "lng": 121.523554,
        "ele": 1817.25,
        "distanceKm": 28.26168404290276,
        "gradePct": -8.146970985227227,
        "smoothedEle": 1817.697673198754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511819,
        "lng": 121.523064,
        "ele": 1805.25,
        "distanceKm": 28.327991108532554,
        "gradePct": -7.528106099723828,
        "smoothedEle": 1812.7882978695422,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512095,
        "lng": 121.522903,
        "ele": 1800.25,
        "distanceKm": 28.362735838265653,
        "gradePct": -6.669702462949682,
        "smoothedEle": 1811.5864797653985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51248,
        "lng": 121.522834,
        "ele": 1794.5,
        "distanceKm": 28.4061113954491,
        "gradePct": -5.838067412972939,
        "smoothedEle": 1809.8707999421802,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512823,
        "lng": 121.522678,
        "ele": 1795,
        "distanceKm": 28.447387972284712,
        "gradePct": -5.67854786786281,
        "smoothedEle": 1807.3308004908042,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512849,
        "lng": 121.522625,
        "ele": 1797.25,
        "distanceKm": 28.453479859347166,
        "gradePct": -5.644234100296009,
        "smoothedEle": 1806.9774710411818,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512853,
        "lng": 121.522557,
        "ele": 1800.25,
        "distanceKm": 28.460373977271118,
        "gradePct": -5.605401607573205,
        "smoothedEle": 1806.5776122015925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51278,
        "lng": 121.52246,
        "ele": 1803.75,
        "distanceKm": 28.47310974206216,
        "gradePct": -5.535290396166962,
        "smoothedEle": 1805.7811336079214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512718,
        "lng": 121.522431,
        "ele": 1804.5,
        "distanceKm": 28.480602204499316,
        "gradePct": -5.520850659158574,
        "smoothedEle": 1805.255271141624,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512204,
        "lng": 121.522309,
        "ele": 1805.75,
        "distanceKm": 28.539074108395678,
        "gradePct": -4.738913283452706,
        "smoothedEle": 1802.9271110063835,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511685,
        "lng": 121.522476,
        "ele": 1808.25,
        "distanceKm": 28.599206853997444,
        "gradePct": -4.284815716413293,
        "smoothedEle": 1801.574271224947,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511123,
        "lng": 121.522628,
        "ele": 1805.25,
        "distanceKm": 28.663562904917864,
        "gradePct": -3.0444801299845605,
        "smoothedEle": 1800.289220447004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510745,
        "lng": 121.522738,
        "ele": 1807.75,
        "distanceKm": 28.707043083944445,
        "gradePct": -2.5847619534053003,
        "smoothedEle": 1799.032957820363,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510648,
        "lng": 121.52271,
        "ele": 1805.5,
        "distanceKm": 28.718194827763583,
        "gradePct": -2.6131727074873745,
        "smoothedEle": 1798.5321103156425,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510621,
        "lng": 121.522669,
        "ele": 1803.25,
        "distanceKm": 28.723315457314566,
        "gradePct": -2.641805393423747,
        "smoothedEle": 1798.2709582085427,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510626,
        "lng": 121.522611,
        "ele": 1800.5,
        "distanceKm": 28.729209866953955,
        "gradePct": -2.6765301946115967,
        "smoothedEle": 1797.9668124764237,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510671,
        "lng": 121.522557,
        "ele": 1798.25,
        "distanceKm": 28.736618434744383,
        "gradePct": -2.7235126194787065,
        "smoothedEle": 1797.5778626674264,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510756,
        "lng": 121.522515,
        "ele": 1796.75,
        "distanceKm": 28.746981312186158,
        "gradePct": -2.85770332426922,
        "smoothedEle": 1797.0338116017329,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511079,
        "lng": 121.522407,
        "ele": 1797.75,
        "distanceKm": 28.78452269780532,
        "gradePct": -3.367025907088999,
        "smoothedEle": 1795.170577029646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511346612051973,
        "lng": 121.52211026316073,
        "ele": 1793.846319469273,
        "distanceKm": 28.82679342826352,
        "gradePct": -4.070800719193144,
        "smoothedEle": 1792.8818257211715,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511603806025988,
        "lng": 121.52180063158036,
        "ele": 1789.2981597346363,
        "distanceKm": 28.869210942006408,
        "gradePct": -5.048693976876525,
        "smoothedEle": 1790.0286450808007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511861,
        "lng": 121.521491,
        "ele": 1784.75,
        "distanceKm": 28.911628408394932,
        "gradePct": -5.941975909862684,
        "smoothedEle": 1786.9430697500738,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512028,
        "lng": 121.521327,
        "ele": 1780,
        "distanceKm": 28.93653100511162,
        "gradePct": -6.313410639678886,
        "smoothedEle": 1784.955631443789,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512101,
        "lng": 121.52129,
        "ele": 1779,
        "distanceKm": 28.94546984116558,
        "gradePct": -6.4988914877982555,
        "smoothedEle": 1784.1153808547167,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512277,
        "lng": 121.521254,
        "ele": 1778.25,
        "distanceKm": 28.96537621975342,
        "gradePct": -6.932128069423495,
        "smoothedEle": 1782.256588955007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512886,
        "lng": 121.521449,
        "ele": 1780.75,
        "distanceKm": 29.035909365331882,
        "gradePct": -7.856719604652795,
        "smoothedEle": 1776.5552101875783,
        "gradeBand": "descent"
      },
      {
        "lat": 24.513269360368902,
        "lng": 121.52152226160452,
        "ele": 1777.1929238053174,
        "distanceKm": 29.079176755553373,
        "gradePct": -8.048834608341195,
        "smoothedEle": 1773.2060323196483,
        "gradeBand": "descent"
      },
      {
        "lat": 24.513656,
        "lng": 121.521574,
        "ele": 1771.25,
        "distanceKm": 29.122486668327152,
        "gradePct": -8.023914245644647,
        "smoothedEle": 1770.0286600755285,
        "gradeBand": "descent"
      },
      {
        "lat": 24.513956,
        "lng": 121.521696,
        "ele": 1768.25,
        "distanceKm": 29.15805548459601,
        "gradePct": -7.693309184202035,
        "smoothedEle": 1767.5535566618134,
        "gradeBand": "descent"
      },
      {
        "lat": 24.514297,
        "lng": 121.521631,
        "ele": 1760.75,
        "distanceKm": 29.196539046180845,
        "gradePct": -7.3265467062686,
        "smoothedEle": 1765.0845227181435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.514642,
        "lng": 121.52168,
        "ele": 1760.5,
        "distanceKm": 29.235220335579545,
        "gradePct": -6.96897473344475,
        "smoothedEle": 1762.672956799006,
        "gradeBand": "descent"
      },
      {
        "lat": 24.514957,
        "lng": 121.521877,
        "ele": 1755.5,
        "distanceKm": 29.27552029684725,
        "gradePct": -7.108807414402715,
        "smoothedEle": 1759.271451214644,
        "gradeBand": "descent"
      },
      {
        "lat": 24.515279,
        "lng": 121.521641,
        "ele": 1757.5,
        "distanceKm": 29.318555930118272,
        "gradePct": -7.51440207212684,
        "smoothedEle": 1755.2882291392523,
        "gradeBand": "descent"
      },
      {
        "lat": 24.515428,
        "lng": 121.521551,
        "ele": 1755.25,
        "distanceKm": 29.337461186906218,
        "gradePct": -7.780703399110307,
        "smoothedEle": 1753.4252314744558,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51553,
        "lng": 121.521529,
        "ele": 1754.5,
        "distanceKm": 29.349019415443607,
        "gradePct": -7.996261569142944,
        "smoothedEle": 1752.1898204203594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.515718,
        "lng": 121.521529,
        "ele": 1754,
        "distanceKm": 29.369924090527668,
        "gradePct": -8.30487665406591,
        "smoothedEle": 1750.1823356073892,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516081,
        "lng": 121.521478,
        "ele": 1750.5,
        "distanceKm": 29.41061634906032,
        "gradePct": -9.0268640982753,
        "smoothedEle": 1746.1531520131543,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516564,
        "lng": 121.52155,
        "ele": 1747.25,
        "distanceKm": 29.4648152984536,
        "gradePct": -9.222287111285855,
        "smoothedEle": 1741.7304290221773,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516944,
        "lng": 121.521454,
        "ele": 1737.75,
        "distanceKm": 29.50817126917151,
        "gradePct": -9.391512256521683,
        "smoothedEle": 1737.4663711662272,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51701,
        "lng": 121.521477,
        "ele": 1736.5,
        "distanceKm": 29.515870201075906,
        "gradePct": -9.359338815321086,
        "smoothedEle": 1736.8181328445162,
        "gradeBand": "descent"
      },
      {
        "lat": 24.517114,
        "lng": 121.521596,
        "ele": 1735.25,
        "distanceKm": 29.53256374280023,
        "gradePct": -9.187097006515192,
        "smoothedEle": 1735.533650685634,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51714,
        "lng": 121.521783,
        "ele": 1732.5,
        "distanceKm": 29.551702051674194,
        "gradePct": -8.965694739426713,
        "smoothedEle": 1734.0008162467082,
        "gradeBand": "descent"
      },
      {
        "lat": 24.517067,
        "lng": 121.522288,
        "ele": 1723.75,
        "distanceKm": 29.603433434994358,
        "gradePct": -9.137130821694688,
        "smoothedEle": 1728.590113598875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516915,
        "lng": 121.522627,
        "ele": 1720,
        "distanceKm": 29.6416684179995,
        "gradePct": -9.58577016171481,
        "smoothedEle": 1724.447712033881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516577,
        "lng": 121.522771,
        "ele": 1724.75,
        "distanceKm": 29.681977124588247,
        "gradePct": -9.822938569010752,
        "smoothedEle": 1720.3966870217123,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516341,
        "lng": 121.523137,
        "ele": 1712,
        "distanceKm": 29.727361403415397,
        "gradePct": -9.917112638471316,
        "smoothedEle": 1716.099718661892,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516312,
        "lng": 121.523181,
        "ele": 1710.75,
        "distanceKm": 29.73285814040843,
        "gradePct": -9.9629454772219,
        "smoothedEle": 1715.5841806994401,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516263,
        "lng": 121.523221,
        "ele": 1709.75,
        "distanceKm": 29.739645144048776,
        "gradePct": -9.97948477882111,
        "smoothedEle": 1715.0075142073874,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516215,
        "lng": 121.52323,
        "ele": 1710,
        "distanceKm": 29.745059617255556,
        "gradePct": -9.9651292440141,
        "smoothedEle": 1714.6025667414092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51616,
        "lng": 121.523224,
        "ele": 1711,
        "distanceKm": 29.751205397993314,
        "gradePct": -9.948834774371825,
        "smoothedEle": 1714.1429249182497,
        "gradeBand": "descent"
      },
      {
        "lat": 24.515967,
        "lng": 121.523145,
        "ele": 1716.75,
        "distanceKm": 29.774106027153238,
        "gradePct": -9.575646710321429,
        "smoothedEle": 1712.506240244654,
        "gradeBand": "descent"
      },
      {
        "lat": 24.515926,
        "lng": 121.523145,
        "ele": 1717.5,
        "distanceKm": 29.77866502544276,
        "gradePct": -9.490093851208178,
        "smoothedEle": 1712.2005099972944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.515868,
        "lng": 121.523166,
        "ele": 1717.5,
        "distanceKm": 29.785455275404612,
        "gradePct": -9.362463406995891,
        "smoothedEle": 1711.74556324985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.515845,
        "lng": 121.523199,
        "ele": 1716.5,
        "distanceKm": 29.78966088536494,
        "gradePct": -9.28341420108487,
        "smoothedEle": 1711.4637873825084,
        "gradeBand": "descent"
      },
      {
        "lat": 24.515839,
        "lng": 121.523244,
        "ele": 1715,
        "distanceKm": 29.794262181722065,
        "gradePct": -9.191072088535439,
        "smoothedEle": 1711.1672115912475,
        "gradeBand": "descent"
      },
      {
        "lat": 24.515912,
        "lng": 121.523363,
        "ele": 1709,
        "distanceKm": 29.808782302498294,
        "gradePct": -8.880234843100796,
        "smoothedEle": 1710.2501443189042,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51601,
        "lng": 121.523411,
        "ele": 1705.25,
        "distanceKm": 29.82071250110567,
        "gradePct": -8.654511818207796,
        "smoothedEle": 1709.409065317084,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516197,
        "lng": 121.523457,
        "ele": 1700,
        "distanceKm": 29.842020409480092,
        "gradePct": -8.126278727921118,
        "smoothedEle": 1708.1597794342395,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516375,
        "lng": 121.523409,
        "ele": 1699.75,
        "distanceKm": 29.862400161038238,
        "gradePct": -7.839254421195192,
        "smoothedEle": 1706.6856630160978,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516813,
        "lng": 121.523182,
        "ele": 1700.25,
        "distanceKm": 29.916246631726963,
        "gradePct": -7.131240569653554,
        "smoothedEle": 1702.8895803934217,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51722330954561,
        "lng": 121.52278472623462,
        "ele": 1700.3550909743924,
        "distanceKm": 29.977049448727637,
        "gradePct": -6.562600670263487,
        "smoothedEle": 1699.1836505857123,
        "gradeBand": "descent"
      },
      {
        "lat": 24.517615,
        "lng": 121.522359,
        "ele": 1701.75,
        "distanceKm": 30.03830312613007,
        "gradePct": -6.6176378301353465,
        "smoothedEle": 1695.1424486576293,
        "gradeBand": "descent"
      },
      {
        "lat": 24.517914,
        "lng": 121.522233,
        "ele": 1697.25,
        "distanceKm": 30.073910402287606,
        "gradePct": -6.727935605252607,
        "smoothedEle": 1692.4183397971199,
        "gradeBand": "descent"
      },
      {
        "lat": 24.518309,
        "lng": 121.522277,
        "ele": 1685.25,
        "distanceKm": 30.118057454325566,
        "gradePct": -6.525155289761779,
        "smoothedEle": 1689.728900232756,
        "gradeBand": "descent"
      },
      {
        "lat": 24.518391,
        "lng": 121.522258,
        "ele": 1684.25,
        "distanceKm": 30.127375861704675,
        "gradePct": -6.537036403880871,
        "smoothedEle": 1689.1371813641824,
        "gradeBand": "descent"
      },
      {
        "lat": 24.518439,
        "lng": 121.522226,
        "ele": 1684.25,
        "distanceKm": 30.13361830811758,
        "gradePct": -6.544995619999691,
        "smoothedEle": 1688.740786016963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51849,
        "lng": 121.522174,
        "ele": 1685,
        "distanceKm": 30.141353629628966,
        "gradePct": -6.555873391676097,
        "smoothedEle": 1688.2475628677435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51854,
        "lng": 121.522089,
        "ele": 1686.75,
        "distanceKm": 30.15159369480647,
        "gradePct": -6.592782008441782,
        "smoothedEle": 1687.5496139796908,
        "gradeBand": "descent"
      },
      {
        "lat": 24.518607,
        "lng": 121.521935,
        "ele": 1690,
        "distanceKm": 30.16886324092267,
        "gradePct": -6.691074776608072,
        "smoothedEle": 1686.3004501439525,
        "gradeBand": "descent"
      },
      {
        "lat": 24.518684,
        "lng": 121.521848,
        "ele": 1691.25,
        "distanceKm": 30.181142368135838,
        "gradePct": -6.750680458115904,
        "smoothedEle": 1685.4122599421999,
        "gradeBand": "descent"
      },
      {
        "lat": 24.518755,
        "lng": 121.521819,
        "ele": 1691,
        "distanceKm": 30.18956473699588,
        "gradePct": -6.777457221349007,
        "smoothedEle": 1684.8030419279903,
        "gradeBand": "descent"
      },
      {
        "lat": 24.518984,
        "lng": 121.521784,
        "ele": 1687.75,
        "distanceKm": 30.21527342227916,
        "gradePct": -6.9599270803112425,
        "smoothedEle": 1682.7419756599372,
        "gradeBand": "descent"
      },
      {
        "lat": 24.519343,
        "lng": 121.521824,
        "ele": 1681.25,
        "distanceKm": 30.255397045420107,
        "gradePct": -7.245425810925579,
        "smoothedEle": 1679.3438391271752,
        "gradeBand": "descent"
      },
      {
        "lat": 24.519637,
        "lng": 121.521971,
        "ele": 1674,
        "distanceKm": 30.291312082170165,
        "gradePct": -7.679761515180103,
        "smoothedEle": 1675.9987059733523,
        "gradeBand": "descent"
      },
      {
        "lat": 24.519687,
        "lng": 121.521993,
        "ele": 1672.75,
        "distanceKm": 30.297300782135853,
        "gradePct": -7.778814534326243,
        "smoothedEle": 1675.4357681765778,
        "gradeBand": "descent"
      },
      {
        "lat": 24.519743,
        "lng": 121.522007,
        "ele": 1672,
        "distanceKm": 30.303686752352387,
        "gradePct": -7.8844383982280135,
        "smoothedEle": 1674.8354869762236,
        "gradeBand": "descent"
      },
      {
        "lat": 24.519842,
        "lng": 121.521985,
        "ele": 1671.25,
        "distanceKm": 30.314917807786887,
        "gradePct": -8.029297993822667,
        "smoothedEle": 1673.861571594332,
        "gradeBand": "descent"
      },
      {
        "lat": 24.519972,
        "lng": 121.521903,
        "ele": 1671.5,
        "distanceKm": 30.331584428365606,
        "gradePct": -8.208347612891686,
        "smoothedEle": 1672.45324215543,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52025,
        "lng": 121.521599,
        "ele": 1668,
        "distanceKm": 30.375189729948946,
        "gradePct": -8.230525992498116,
        "smoothedEle": 1669.3817821193888,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520534,
        "lng": 121.521307,
        "ele": 1664.0833333333335,
        "distanceKm": 30.41843220840344,
        "gradePct": -8.095698136237075,
        "smoothedEle": 1666.283056524675,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520818,
        "lng": 121.521015,
        "ele": 1660.1666666666665,
        "distanceKm": 30.461674641227507,
        "gradePct": -7.865409762387826,
        "smoothedEle": 1663.0283231698781,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521102,
        "lng": 121.520723,
        "ele": 1656.25,
        "distanceKm": 30.50491702842324,
        "gradePct": -6.817172233096154,
        "smoothedEle": 1661.0944575420544,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521194,
        "lng": 121.520585,
        "ele": 1654.75,
        "distanceKm": 30.522224815872388,
        "gradePct": -6.42698563223123,
        "smoothedEle": 1660.3901581466446,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52122,
        "lng": 121.520521,
        "ele": 1654.75,
        "distanceKm": 30.529315596614047,
        "gradePct": -6.2447642237237,
        "smoothedEle": 1660.1554299909892,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521376,
        "lng": 121.519941,
        "ele": 1655,
        "distanceKm": 30.59050227196415,
        "gradePct": -5.144035042601009,
        "smoothedEle": 1657.9964260422985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521365,
        "lng": 121.519471,
        "ele": 1650.75,
        "distanceKm": 30.638066026631847,
        "gradePct": -4.579606634141799,
        "smoothedEle": 1655.6460623153882,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521347,
        "lng": 121.51938,
        "ele": 1650.25,
        "distanceKm": 30.647487198150703,
        "gradePct": -4.495619823875716,
        "smoothedEle": 1655.1049314942616,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521323,
        "lng": 121.519318,
        "ele": 1650,
        "distanceKm": 30.65430361513514,
        "gradePct": -4.410072247689315,
        "smoothedEle": 1654.762974575542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521301,
        "lng": 121.519289,
        "ele": 1650,
        "distanceKm": 30.658123512748595,
        "gradePct": -4.362131667930514,
        "smoothedEle": 1654.5713430452672,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521192,
        "lng": 121.519243,
        "ele": 1651.25,
        "distanceKm": 30.671106469596317,
        "gradePct": -4.343243008536903,
        "smoothedEle": 1653.9200313767399,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521099,
        "lng": 121.519248,
        "ele": 1652.5,
        "distanceKm": 30.681459975880244,
        "gradePct": -4.414131688676905,
        "smoothedEle": 1653.315229395749,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520586,
        "lng": 121.519335,
        "ele": 1662.25,
        "distanceKm": 30.73917807171064,
        "gradePct": -4.887591526860337,
        "smoothedEle": 1650.0322443279492,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520542,
        "lng": 121.519331,
        "ele": 1662.75,
        "distanceKm": 30.7440873617503,
        "gradePct": -4.929846952751308,
        "smoothedEle": 1649.7745066008674,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520486,
        "lng": 121.519298,
        "ele": 1663,
        "distanceKm": 30.751152783060864,
        "gradePct": -5.017743430144737,
        "smoothedEle": 1649.3494065474126,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520443,
        "lng": 121.519235,
        "ele": 1662,
        "distanceKm": 30.759120419899908,
        "gradePct": -5.1480719591489965,
        "smoothedEle": 1648.8076072423576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520439,
        "lng": 121.519114,
        "ele": 1659.25,
        "distanceKm": 30.771369675578754,
        "gradePct": -5.336737814745239,
        "smoothedEle": 1647.998054116489,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520461,
        "lng": 121.519087,
        "ele": 1658.5,
        "distanceKm": 30.775036479120892,
        "gradePct": -5.391367526317273,
        "smoothedEle": 1647.7594096061302,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520823,
        "lng": 121.519071,
        "ele": 1653.25,
        "distanceKm": 30.815321630456303,
        "gradePct": -5.965199441183493,
        "smoothedEle": 1644.8395781478068,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521272,
        "lng": 121.518869,
        "ele": 1644,
        "distanceKm": 30.8692686201175,
        "gradePct": -6.48323217804707,
        "smoothedEle": 1641.045765802833,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521583,
        "lng": 121.518788,
        "ele": 1639,
        "distanceKm": 30.90480790535019,
        "gradePct": -6.802732339304978,
        "smoothedEle": 1638.3817426694418,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521895,
        "lng": 121.518891,
        "ele": 1634,
        "distanceKm": 30.94103182992752,
        "gradePct": -7.289558318371545,
        "smoothedEle": 1635.35580538482,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522159,
        "lng": 121.519097,
        "ele": 1630,
        "distanceKm": 30.977032590589424,
        "gradePct": -8.021418648026525,
        "smoothedEle": 1631.5718959500057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522477,
        "lng": 121.519307,
        "ele": 1622.25,
        "distanceKm": 31.018283887190364,
        "gradePct": -9.227060562213897,
        "smoothedEle": 1626.17713685135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522559,
        "lng": 121.519404,
        "ele": 1619.5,
        "distanceKm": 31.03167915100784,
        "gradePct": -9.649747087079652,
        "smoothedEle": 1624.3897442829377,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522583,
        "lng": 121.51946,
        "ele": 1618.5,
        "distanceKm": 31.037941485640317,
        "gradePct": -9.847559145457389,
        "smoothedEle": 1623.553722609502,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522593,
        "lng": 121.519529,
        "ele": 1618,
        "distanceKm": 31.04500988277236,
        "gradePct": -10.070832775529688,
        "smoothedEle": 1622.6100915923744,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522579,
        "lng": 121.519619,
        "ele": 1618.25,
        "distanceKm": 31.05424686045578,
        "gradePct": -10.315000659037231,
        "smoothedEle": 1621.472167031143,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522491,
        "lng": 121.520044,
        "ele": 1619.75,
        "distanceKm": 31.098341451006807,
        "gradePct": -11.238891032615623,
        "smoothedEle": 1616.3886857147186,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522539,
        "lng": 121.520532,
        "ele": 1612.25,
        "distanceKm": 31.147997694189968,
        "gradePct": -11.332324713673684,
        "smoothedEle": 1611.9589992191236,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522516,
        "lng": 121.520886,
        "ele": 1608.5,
        "distanceKm": 31.183901335219083,
        "gradePct": -10.871428641430537,
        "smoothedEle": 1608.930758476205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522507,
        "lng": 121.521314,
        "ele": 1601.75,
        "distanceKm": 31.227211557947275,
        "gradePct": -9.853465069280935,
        "smoothedEle": 1605.278945937221,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52252,
        "lng": 121.521397,
        "ele": 1600,
        "distanceKm": 31.235731780155664,
        "gradePct": -9.659775954410213,
        "smoothedEle": 1604.5291663828827,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522586,
        "lng": 121.521483,
        "ele": 1596.75,
        "distanceKm": 31.247113892585983,
        "gradePct": -9.411676643571047,
        "smoothedEle": 1603.5275404890147,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522694,
        "lng": 121.521504,
        "ele": 1593.75,
        "distanceKm": 31.259309427861567,
        "gradePct": -9.162479327054971,
        "smoothedEle": 1602.5635661093795,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52276,
        "lng": 121.521484,
        "ele": 1592.25,
        "distanceKm": 31.266922103267486,
        "gradePct": -9.022460048664275,
        "smoothedEle": 1601.9659710900148,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522877,
        "lng": 121.521344,
        "ele": 1591.75,
        "distanceKm": 31.28615354403298,
        "gradePct": -8.66521651395627,
        "smoothedEle": 1600.4633456157462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523003,
        "lng": 121.521004,
        "ele": 1593.75,
        "distanceKm": 31.323293577883877,
        "gradePct": -8.31059948730072,
        "smoothedEle": 1597.5415813477975,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523002,
        "lng": 121.520634,
        "ele": 1598,
        "distanceKm": 31.360724680520292,
        "gradePct": -8.489173378107383,
        "smoothedEle": 1593.907213183901,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522995,
        "lng": 121.520535,
        "ele": 1599,
        "distanceKm": 31.370770186551546,
        "gradePct": -8.550232195941506,
        "smoothedEle": 1592.937821851885,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523024,
        "lng": 121.520436,
        "ele": 1598.75,
        "distanceKm": 31.38129181835228,
        "gradePct": -8.513310640529228,
        "smoothedEle": 1592.124233126057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523086,
        "lng": 121.520317,
        "ele": 1597.5,
        "distanceKm": 31.395164679832018,
        "gradePct": -8.407909192179234,
        "smoothedEle": 1591.1652422954037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523226,
        "lng": 121.520077,
        "ele": 1594.25,
        "distanceKm": 31.42400623266635,
        "gradePct": -8.163217654639908,
        "smoothedEle": 1589.222775852063,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523543,
        "lng": 121.519555,
        "ele": 1586,
        "distanceKm": 31.487497536124803,
        "gradePct": -7.90284687167528,
        "smoothedEle": 1584.5519215414527,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523635,
        "lng": 121.519387,
        "ele": 1583,
        "distanceKm": 31.507334418116756,
        "gradePct": -7.666166552475516,
        "smoothedEle": 1583.4647372103918,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52367,
        "lng": 121.519102,
        "ele": 1581,
        "distanceKm": 31.53642768858337,
        "gradePct": -7.010451888848049,
        "smoothedEle": 1582.2454227572525,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52365,
        "lng": 121.518532,
        "ele": 1571.25,
        "distanceKm": 31.594134131833215,
        "gradePct": -6.209191755916003,
        "smoothedEle": 1578.8180975891232,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523637,
        "lng": 121.518468,
        "ele": 1570.5,
        "distanceKm": 31.60076804634028,
        "gradePct": -6.245261309667762,
        "smoothedEle": 1578.2973353003183,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523574,
        "lng": 121.518365,
        "ele": 1571.5,
        "distanceKm": 31.613323869256952,
        "gradePct": -6.331253818112622,
        "smoothedEle": 1577.2797208950162,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523409,
        "lng": 121.518256,
        "ele": 1577,
        "distanceKm": 31.634729757150414,
        "gradePct": -6.583909544865629,
        "smoothedEle": 1575.266060994991,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523352,
        "lng": 121.518205,
        "ele": 1578.5,
        "distanceKm": 31.642902333401715,
        "gradePct": -6.671472996213902,
        "smoothedEle": 1574.4897035153042,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523323,
        "lng": 121.518158,
        "ele": 1579,
        "distanceKm": 31.64864740550261,
        "gradePct": -6.73447680042923,
        "smoothedEle": 1573.941049129669,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523309,
        "lng": 121.518103,
        "ele": 1578.5,
        "distanceKm": 31.654425121461518,
        "gradePct": -6.797423073746951,
        "smoothedEle": 1573.3901083004794,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523312,
        "lng": 121.518014,
        "ele": 1576.5,
        "distanceKm": 31.663434934871134,
        "gradePct": -6.881466672317085,
        "smoothedEle": 1572.5591976376081,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523362,
        "lng": 121.517815,
        "ele": 1570.5,
        "distanceKm": 31.684320265833833,
        "gradePct": -6.992858364416886,
        "smoothedEle": 1570.7999465351252,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523268,
        "lng": 121.517396,
        "ele": 1565.75,
        "distanceKm": 31.727977860871263,
        "gradePct": -7.237282042642644,
        "smoothedEle": 1568.124995449671,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523003,
        "lng": 121.517213,
        "ele": 1571.75,
        "distanceKm": 31.762777599248693,
        "gradePct": -7.058604910526835,
        "smoothedEle": 1566.5632280417008,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522894,
        "lng": 121.516795,
        "ele": 1566,
        "distanceKm": 31.806767136770596,
        "gradePct": -6.803074718159362,
        "smoothedEle": 1564.204976327507,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52288,
        "lng": 121.516438,
        "ele": 1558.75,
        "distanceKm": 31.842916501392587,
        "gradePct": -5.973348818378916,
        "smoothedEle": 1562.541652835418,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522867,
        "lng": 121.51608,
        "ele": 1551.75,
        "distanceKm": 31.879162336215067,
        "gradePct": -5.5147050107871305,
        "smoothedEle": 1560.2050086023364,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522815,
        "lng": 121.515916,
        "ele": 1549.75,
        "distanceKm": 31.896732069169136,
        "gradePct": -5.626181838530122,
        "smoothedEle": 1558.787097385245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522746,
        "lng": 121.515824,
        "ele": 1550,
        "distanceKm": 31.90879399420904,
        "gradePct": -5.7561199513388805,
        "smoothedEle": 1557.7881731325776,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52265,
        "lng": 121.515783,
        "ele": 1552.25,
        "distanceKm": 31.920246231807194,
        "gradePct": -5.8521833976233415,
        "smoothedEle": 1556.8943544640922,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522161,
        "lng": 121.515808,
        "ele": 1562.5,
        "distanceKm": 31.97467941326792,
        "gradePct": -6.033827718648148,
        "smoothedEle": 1553.8575237661123,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522092,
        "lng": 121.515802,
        "ele": 1563.5,
        "distanceKm": 31.982375846887734,
        "gradePct": -5.989152317776096,
        "smoothedEle": 1553.5342735540798,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522043,
        "lng": 121.515784,
        "ele": 1563.75,
        "distanceKm": 31.98812064937393,
        "gradePct": -5.955805527992105,
        "smoothedEle": 1553.2929918496604,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522013,
        "lng": 121.51575,
        "ele": 1563.5,
        "distanceKm": 31.992912198256736,
        "gradePct": -5.927992078580154,
        "smoothedEle": 1553.0917467965824,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521996,
        "lng": 121.515695,
        "ele": 1562.25,
        "distanceKm": 31.998788637012023,
        "gradePct": -5.914346622952073,
        "smoothedEle": 1552.8040054854353,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521999,
        "lng": 121.515635,
        "ele": 1560.75,
        "distanceKm": 32.004867726848516,
        "gradePct": -5.918367695289952,
        "smoothedEle": 1552.4700671200842,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522019,
        "lng": 121.515577,
        "ele": 1559.25,
        "distanceKm": 32.01114263352151,
        "gradePct": -5.972293973538193,
        "smoothedEle": 1552.059060733003,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522055,
        "lng": 121.515529,
        "ele": 1557.5,
        "distanceKm": 32.0174358339836,
        "gradePct": -6.033613271342254,
        "smoothedEle": 1551.6468561027361,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522105,
        "lng": 121.515488,
        "ele": 1555.75,
        "distanceKm": 32.02437232938502,
        "gradePct": -6.101200666626845,
        "smoothedEle": 1551.1925156539432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522151,
        "lng": 121.515473,
        "ele": 1554.75,
        "distanceKm": 32.029707655472336,
        "gradePct": -6.153186687285165,
        "smoothedEle": 1550.8430517952243,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522232,
        "lng": 121.515472,
        "ele": 1553.75,
        "distanceKm": 32.03871502510307,
        "gradePct": -6.218281860638535,
        "smoothedEle": 1550.298409640985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522378,
        "lng": 121.515496,
        "ele": 1552.25,
        "distanceKm": 32.055130061390656,
        "gradePct": -6.1799047535606855,
        "smoothedEle": 1549.3944771474746,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52296,
        "lng": 121.515607,
        "ele": 1539.75,
        "distanceKm": 32.12081261704109,
        "gradePct": -5.606636173093667,
        "smoothedEle": 1545.6494834492432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523115,
        "lng": 121.515729,
        "ele": 1537,
        "distanceKm": 32.14201121561812,
        "gradePct": -5.576336861177216,
        "smoothedEle": 1544.5274108937456,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523191,
        "lng": 121.515903,
        "ele": 1537.5,
        "distanceKm": 32.16153733288402,
        "gradePct": -5.699032937838317,
        "smoothedEle": 1543.1926554011109,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52328,
        "lng": 121.516567,
        "ele": 1544.75,
        "distanceKm": 32.22943564857935,
        "gradePct": -6.427419358461883,
        "smoothedEle": 1538.0060295297912,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523631,
        "lng": 121.516874,
        "ele": 1539,
        "distanceKm": 32.279314150477575,
        "gradePct": -7.3269383851454775,
        "smoothedEle": 1533.3617066917736,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523959,
        "lng": 121.517198,
        "ele": 1532.25,
        "distanceKm": 32.328350337639876,
        "gradePct": -8.299899464248593,
        "smoothedEle": 1528.6507020415895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524085,
        "lng": 121.517477,
        "ele": 1530.5,
        "distanceKm": 32.35986114899015,
        "gradePct": -8.74140072353713,
        "smoothedEle": 1525.82443360285,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524155,
        "lng": 121.517557,
        "ele": 1528.5,
        "distanceKm": 32.37108984533182,
        "gradePct": -8.781375739782437,
        "smoothedEle": 1524.9002052877809,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524214,
        "lng": 121.517587,
        "ele": 1526,
        "distanceKm": 32.37831832931643,
        "gradePct": -8.798116332125677,
        "smoothedEle": 1524.3145536749907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52439,
        "lng": 121.517619,
        "ele": 1517.25,
        "distanceKm": 32.39815460113132,
        "gradePct": -8.805074207229826,
        "smoothedEle": 1522.7853820670775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524443,
        "lng": 121.517638,
        "ele": 1514.75,
        "distanceKm": 32.40435346756788,
        "gradePct": -8.826407335048872,
        "smoothedEle": 1522.2691959501074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524488,
        "lng": 121.51768,
        "ele": 1513.5,
        "distanceKm": 32.41091781653512,
        "gradePct": -8.872724930257833,
        "smoothedEle": 1521.6751223685721,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524513,
        "lng": 121.517736,
        "ele": 1513.5,
        "distanceKm": 32.4172282604029,
        "gradePct": -8.94137873589044,
        "smoothedEle": 1521.0557717038234,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524527,
        "lng": 121.518129,
        "ele": 1522,
        "distanceKm": 32.45701597141825,
        "gradePct": -9.394644561491171,
        "smoothedEle": 1516.6486616080115,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524926019881583,
        "lng": 121.51853723576686,
        "ele": 1512.2551242792997,
        "distanceKm": 32.51763096023903,
        "gradePct": -10.142765583453492,
        "smoothedEle": 1509.3950029171965,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525348,
        "lng": 121.518922,
        "ele": 1500.25,
        "distanceKm": 32.5785961495349,
        "gradePct": -10.666450101066479,
        "smoothedEle": 1502.960236404461,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525397,
        "lng": 121.518984,
        "ele": 1498.5,
        "distanceKm": 32.586904334789985,
        "gradePct": -10.740216698538877,
        "smoothedEle": 1502.1722279667936,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525426,
        "lng": 121.519045,
        "ele": 1498,
        "distanceKm": 32.593867004405,
        "gradePct": -10.799087226051785,
        "smoothedEle": 1501.5177370229821,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525437,
        "lng": 121.519183,
        "ele": 1499,
        "distanceKm": 32.60788094295384,
        "gradePct": -10.745487494242031,
        "smoothedEle": 1500.4589844391937,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525419,
        "lng": 121.519262,
        "ele": 1498.5,
        "distanceKm": 32.61611962126305,
        "gradePct": -10.645754810013804,
        "smoothedEle": 1499.8730716069638,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525379,
        "lng": 121.519352,
        "ele": 1499.25,
        "distanceKm": 32.626252616115906,
        "gradePct": -10.427082297839968,
        "smoothedEle": 1499.202018839403,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52535,
        "lng": 121.519452,
        "ele": 1499.5,
        "distanceKm": 32.636870408829196,
        "gradePct": -10.181042497204173,
        "smoothedEle": 1498.5180121500125,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525345,
        "lng": 121.519506,
        "ele": 1498.75,
        "distanceKm": 32.642361419701324,
        "gradePct": -10.029751331052779,
        "smoothedEle": 1498.2123793115197,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525369,
        "lng": 121.51958,
        "ele": 1496,
        "distanceKm": 32.65030892025333,
        "gradePct": -9.804467016461645,
        "smoothedEle": 1497.7826381911486,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525422,
        "lng": 121.519611,
        "ele": 1492.25,
        "distanceKm": 32.65698471465431,
        "gradePct": -9.634041515769104,
        "smoothedEle": 1497.3840407510097,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525515,
        "lng": 121.519579,
        "ele": 1487.25,
        "distanceKm": 32.66782070720862,
        "gradePct": -9.316575463064831,
        "smoothedEle": 1496.722532374165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525555,
        "lng": 121.519538,
        "ele": 1485.5,
        "distanceKm": 32.6739023279298,
        "gradePct": -9.162504475905035,
        "smoothedEle": 1496.3029005444034,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525671,
        "lng": 121.519332,
        "ele": 1482.75,
        "distanceKm": 32.69841067660041,
        "gradePct": -8.71784847005539,
        "smoothedEle": 1494.2593538722924,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525684,
        "lng": 121.518983,
        "ele": 1483.25,
        "distanceKm": 32.733745983595846,
        "gradePct": -8.046328184130628,
        "smoothedEle": 1491.6014347032406,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52556,
        "lng": 121.518628,
        "ele": 1485.25,
        "distanceKm": 32.77221463955749,
        "gradePct": -6.8820957744175235,
        "smoothedEle": 1489.869601801444,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52548,
        "lng": 121.51823,
        "ele": 1482,
        "distanceKm": 32.81344836595736,
        "gradePct": -6.321219132793682,
        "smoothedEle": 1487.4206058955926,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525393,
        "lng": 121.518142,
        "ele": 1483,
        "distanceKm": 32.82659511641666,
        "gradePct": -6.326663916018357,
        "smoothedEle": 1486.5266268643602,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525331,
        "lng": 121.518124,
        "ele": 1485.25,
        "distanceKm": 32.833725637626344,
        "gradePct": -6.337717758552709,
        "smoothedEle": 1486.0451653062253,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525133,
        "lng": 121.518122,
        "ele": 1493.25,
        "distanceKm": 32.85574319314799,
        "gradePct": -6.422390656394918,
        "smoothedEle": 1484.613388038439,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525078,
        "lng": 121.518101,
        "ele": 1495,
        "distanceKm": 32.86221739730736,
        "gradePct": -6.463424158001679,
        "smoothedEle": 1484.1377511479238,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525039,
        "lng": 121.518052,
        "ele": 1495.25,
        "distanceKm": 32.86880358812327,
        "gradePct": -6.497230638641917,
        "smoothedEle": 1483.6602523137703,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525005,
        "lng": 121.517979,
        "ele": 1494.5,
        "distanceKm": 32.87709997236865,
        "gradePct": -6.493190991853361,
        "smoothedEle": 1483.049893675462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52499,
        "lng": 121.517907,
        "ele": 1493.25,
        "distanceKm": 32.88457224652716,
        "gradePct": -6.458892526464319,
        "smoothedEle": 1482.4954400207043,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524995,
        "lng": 121.517813,
        "ele": 1490.25,
        "distanceKm": 32.8940978163008,
        "gradePct": -6.413229687998205,
        "smoothedEle": 1481.7925079256217,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525036,
        "lng": 121.5177,
        "ele": 1485.25,
        "distanceKm": 32.90640480609335,
        "gradePct": -6.332878257502126,
        "smoothedEle": 1480.99227953028,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525098,
        "lng": 121.517566,
        "ele": 1479,
        "distanceKm": 32.92161301167864,
        "gradePct": -6.155152993217284,
        "smoothedEle": 1480.2037699637176,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525112,
        "lng": 121.517488,
        "ele": 1476.25,
        "distanceKm": 32.929655821010826,
        "gradePct": -6.036166339937978,
        "smoothedEle": 1479.8367637493734,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525105,
        "lng": 121.517422,
        "ele": 1475.25,
        "distanceKm": 32.93637779615311,
        "gradePct": -5.986697960953535,
        "smoothedEle": 1479.5095563580699,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525084,
        "lng": 121.517367,
        "ele": 1475,
        "distanceKm": 32.94241189837196,
        "gradePct": -5.993697938411088,
        "smoothedEle": 1479.2239051979286,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524754,
        "lng": 121.517232,
        "ele": 1490.25,
        "distanceKm": 32.981565335146314,
        "gradePct": -6.224648591918164,
        "smoothedEle": 1476.864938483783,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524716,
        "lng": 121.517195,
        "ele": 1491.75,
        "distanceKm": 32.98721019826937,
        "gradePct": -6.248941178654288,
        "smoothedEle": 1476.4810877914147,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524692,
        "lng": 121.517133,
        "ele": 1492.25,
        "distanceKm": 32.9940264604311,
        "gradePct": -6.2782748641962165,
        "smoothedEle": 1476.0175819644173,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524684,
        "lng": 121.517061,
        "ele": 1491.75,
        "distanceKm": 33.00136434043289,
        "gradePct": -6.309853324562279,
        "smoothedEle": 1475.5186061242953,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524708,
        "lng": 121.516975,
        "ele": 1489,
        "distanceKm": 33.010464487286995,
        "gradePct": -6.360773378208956,
        "smoothedEle": 1474.876280731432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524808,
        "lng": 121.516733,
        "ele": 1479,
        "distanceKm": 33.03735292337798,
        "gradePct": -6.414320470626898,
        "smoothedEle": 1472.9806459870174,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524944,
        "lng": 121.516328,
        "ele": 1466.25,
        "distanceKm": 33.08102581207416,
        "gradePct": -6.159723418352113,
        "smoothedEle": 1470.4391437994773,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524944,
        "lng": 121.515882,
        "ele": 1462.25,
        "distanceKm": 33.12614456890827,
        "gradePct": -6.526379670415756,
        "smoothedEle": 1466.9442284407849,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524824,
        "lng": 121.515526,
        "ele": 1463.25,
        "distanceKm": 33.164551097199,
        "gradePct": -7.158946664354188,
        "smoothedEle": 1463.572140888447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524798,
        "lng": 121.515437,
        "ele": 1463,
        "distanceKm": 33.17400740827692,
        "gradePct": -7.402755962030946,
        "smoothedEle": 1462.5147862773263,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524803,
        "lng": 121.515359,
        "ele": 1461.5,
        "distanceKm": 33.18191770414743,
        "gradePct": -7.590770658448951,
        "smoothedEle": 1461.659436074809,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52483,
        "lng": 121.515312,
        "ele": 1459.75,
        "distanceKm": 33.18754091623992,
        "gradePct": -7.6958991865944935,
        "smoothedEle": 1461.0668005962286,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524875,
        "lng": 121.515285,
        "ele": 1457.75,
        "distanceKm": 33.193241651466934,
        "gradePct": -7.800401087243247,
        "smoothedEle": 1460.4701467994942,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52493,
        "lng": 121.515274,
        "ele": 1455.5,
        "distanceKm": 33.19945779645878,
        "gradePct": -7.913845733344376,
        "smoothedEle": 1459.8205596478463,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52498,
        "lng": 121.515284,
        "ele": 1453.75,
        "distanceKm": 33.205108837284364,
        "gradePct": -8.018770001897337,
        "smoothedEle": 1459.2167642966117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525072,
        "lng": 121.515407,
        "ele": 1450.5,
        "distanceKm": 33.2212172665513,
        "gradePct": -8.477088352434059,
        "smoothedEle": 1457.1640330884304,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525126,
        "lng": 121.515559,
        "ele": 1449.25,
        "distanceKm": 33.23772483165544,
        "gradePct": -9.049080066652875,
        "smoothedEle": 1454.8608430055065,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525168,
        "lng": 121.515921,
        "ele": 1450,
        "distanceKm": 33.274642414842624,
        "gradePct": -10.236785406042,
        "smoothedEle": 1450.3370487132318,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525165,
        "lng": 121.51638,
        "ele": 1454.75,
        "distanceKm": 33.321077408359926,
        "gradePct": -10.3247613083582,
        "smoothedEle": 1446.687209928082,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525259,
        "lng": 121.516707,
        "ele": 1453.5,
        "distanceKm": 33.3557697109282,
        "gradePct": -10.156622635741511,
        "smoothedEle": 1444.0299000439168,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525312,
        "lng": 121.516769,
        "ele": 1452,
        "distanceKm": 33.364376141655065,
        "gradePct": -10.157483909798854,
        "smoothedEle": 1443.272534139953,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525391,
        "lng": 121.516818,
        "ele": 1449.25,
        "distanceKm": 33.37446264289668,
        "gradePct": -10.040319578441057,
        "smoothedEle": 1442.3849220306904,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525478,
        "lng": 121.516831,
        "ele": 1445.25,
        "distanceKm": 33.38422559648973,
        "gradePct": -9.945211535075572,
        "smoothedEle": 1441.5257821145024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526026,
        "lng": 121.516838,
        "ele": 1422.75,
        "distanceKm": 33.445164615025845,
        "gradePct": -9.120949322511008,
        "smoothedEle": 1435.7072907081815,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526153,
        "lng": 121.516874,
        "ele": 1420.25,
        "distanceKm": 33.45974842555836,
        "gradePct": -8.906103909766088,
        "smoothedEle": 1434.349915503046,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526214,
        "lng": 121.516919,
        "ele": 1419.75,
        "distanceKm": 33.4679173379625,
        "gradePct": -8.761838285189686,
        "smoothedEle": 1433.6374473335597,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526259,
        "lng": 121.51698,
        "ele": 1420,
        "distanceKm": 33.47586199990106,
        "gradePct": -8.637532329729416,
        "smoothedEle": 1432.9661233997508,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52628,
        "lng": 121.517037,
        "ele": 1421,
        "distanceKm": 33.48208310697349,
        "gradePct": -8.652616288125833,
        "smoothedEle": 1432.446969996806,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526275,
        "lng": 121.517104,
        "ele": 1423,
        "distanceKm": 33.48888372943476,
        "gradePct": -8.693514901359084,
        "smoothedEle": 1431.8306367719001,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52614,
        "lng": 121.517476,
        "ele": 1437.25,
        "distanceKm": 33.52939953734263,
        "gradePct": -8.982114569798554,
        "smoothedEle": 1428.0855346126507,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526189,
        "lng": 121.517585,
        "ele": 1438.5,
        "distanceKm": 33.541698900679435,
        "gradePct": -9.069494684023297,
        "smoothedEle": 1426.968685870488,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526276,
        "lng": 121.517619,
        "ele": 1436.5,
        "distanceKm": 33.551966128694986,
        "gradePct": -9.161094450783692,
        "smoothedEle": 1425.999052330893,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526532,
        "lng": 121.517669,
        "ele": 1429.25,
        "distanceKm": 33.580877962328366,
        "gradePct": -9.27823265849359,
        "smoothedEle": 1423.263908603715,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526866,
        "lng": 121.517816,
        "ele": 1418.25,
        "distanceKm": 33.620883672472715,
        "gradePct": -9.148098825524455,
        "smoothedEle": 1419.7294509660153,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527112,
        "lng": 121.51814,
        "ele": 1415,
        "distanceKm": 33.663574748478325,
        "gradePct": -9.225404833229714,
        "smoothedEle": 1415.5653853666167,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527386,
        "lng": 121.518448,
        "ele": 1408.25,
        "distanceKm": 33.7071530251573,
        "gradePct": -8.514521243243273,
        "smoothedEle": 1413.112861358897,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527536,
        "lng": 121.518932,
        "ele": 1403.25,
        "distanceKm": 33.75887799709588,
        "gradePct": -8.027520473546247,
        "smoothedEle": 1409.2901284879763,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527538,
        "lng": 121.519018,
        "ele": 1403.5,
        "distanceKm": 33.76758068875359,
        "gradePct": -8.145153522712233,
        "smoothedEle": 1408.2315623942518,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527515,
        "lng": 121.519129,
        "ele": 1404.25,
        "distanceKm": 33.77909712965753,
        "gradePct": -8.305791090606132,
        "smoothedEle": 1406.820798383519,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527478,
        "lng": 121.519186,
        "ele": 1404.75,
        "distanceKm": 33.78618060594951,
        "gradePct": -8.421966089843744,
        "smoothedEle": 1405.9514940704053,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527417,
        "lng": 121.519244,
        "ele": 1404.5,
        "distanceKm": 33.795149076526585,
        "gradePct": -8.586318564977653,
        "smoothedEle": 1404.8304352482714,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527338,
        "lng": 121.51929,
        "ele": 1405.5,
        "distanceKm": 33.805089908653066,
        "gradePct": -8.83963419336293,
        "smoothedEle": 1403.445543115547,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527037,
        "lng": 121.519422,
        "ele": 1412.75,
        "distanceKm": 33.841125066250555,
        "gradePct": -9.842438091464802,
        "smoothedEle": 1398.0702396432755,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527001,
        "lng": 121.519465,
        "ele": 1412.5,
        "distanceKm": 33.84703659689287,
        "gradePct": -10.02749173665913,
        "smoothedEle": 1397.1235246940819,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526998,
        "lng": 121.519509,
        "ele": 1410.5,
        "distanceKm": 33.851500184501106,
        "gradePct": -10.161193584175832,
        "smoothedEle": 1396.420744959173,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527007,
        "lng": 121.519551,
        "ele": 1408.25,
        "distanceKm": 33.85586523428022,
        "gradePct": -10.246614488837704,
        "smoothedEle": 1395.8241384391517,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527031,
        "lng": 121.519594,
        "ele": 1405.25,
        "distanceKm": 33.8609685533481,
        "gradePct": -10.34220096718806,
        "smoothedEle": 1395.1351903649884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527066,
        "lng": 121.519612,
        "ele": 1402.75,
        "distanceKm": 33.865265298840825,
        "gradePct": -10.449491914407497,
        "smoothedEle": 1394.5712597454624,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527156,
        "lng": 121.519602,
        "ele": 1398.75,
        "distanceKm": 33.875323855602865,
        "gradePct": -10.807351398064458,
        "smoothedEle": 1393.2894593765445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527211,
        "lng": 121.519574,
        "ele": 1397.5,
        "distanceKm": 33.88206368496349,
        "gradePct": -11.025972072722496,
        "smoothedEle": 1392.4729099275385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527571,
        "lng": 121.519322,
        "ele": 1395,
        "distanceKm": 33.92952200894308,
        "gradePct": -12.04793315659225,
        "smoothedEle": 1387.3638158094134,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528059,
        "lng": 121.519264,
        "ele": 1384.75,
        "distanceKm": 33.98410149514839,
        "gradePct": -11.6446354229218,
        "smoothedEle": 1382.9173776024911,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528441,
        "lng": 121.519068,
        "ele": 1376,
        "distanceKm": 34.03097774342614,
        "gradePct": -9.768996204575135,
        "smoothedEle": 1380.0459062063323,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528673,
        "lng": 121.518807,
        "ele": 1360.5,
        "distanceKm": 34.06789125499113,
        "gradePct": -8.550571436995135,
        "smoothedEle": 1377.1354812331938,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528724,
        "lng": 121.518756,
        "ele": 1356.75,
        "distanceKm": 34.0755578482311,
        "gradePct": -8.44857622745132,
        "smoothedEle": 1376.363958050857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528866,
        "lng": 121.51874,
        "ele": 1349.5,
        "distanceKm": 34.0914302900119,
        "gradePct": -8.43969686065065,
        "smoothedEle": 1374.5851606060646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528891,
        "lng": 121.518762,
        "ele": 1349,
        "distanceKm": 34.09499128028611,
        "gradePct": -8.454328671552611,
        "smoothedEle": 1374.172540958614,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528915,
        "lng": 121.5188,
        "ele": 1349,
        "distanceKm": 34.09967089538195,
        "gradePct": -8.471881017741332,
        "smoothedEle": 1373.633655433784,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528929,
        "lng": 121.518876,
        "ele": 1350.75,
        "distanceKm": 34.107515073528965,
        "gradePct": -8.478341254818353,
        "smoothedEle": 1372.7762752090143,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528936,
        "lng": 121.518958,
        "ele": 1353,
        "distanceKm": 34.11584662548967,
        "gradePct": -8.447970968760039,
        "smoothedEle": 1371.9400881286588,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528928,
        "lng": 121.519034,
        "ele": 1355.75,
        "distanceKm": 34.123586071705795,
        "gradePct": -8.393575679975578,
        "smoothedEle": 1371.2156938015655,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52891,
        "lng": 121.519096,
        "ele": 1358.25,
        "distanceKm": 34.13016960979227,
        "gradePct": -8.338804533724439,
        "smoothedEle": 1370.6334485106424,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528846,
        "lng": 121.519187,
        "ele": 1362,
        "distanceKm": 34.141805185963996,
        "gradePct": -8.368084266868431,
        "smoothedEle": 1369.6269711717875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528789,
        "lng": 121.519226,
        "ele": 1362.25,
        "distanceKm": 34.1492708863239,
        "gradePct": -8.407857880054955,
        "smoothedEle": 1368.9392142016138,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528282,
        "lng": 121.51949,
        "ele": 1368,
        "distanceKm": 34.21165252912937,
        "gradePct": -9.267131570330076,
        "smoothedEle": 1362.6954366096652,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52797,
        "lng": 121.519593,
        "ele": 1371,
        "distanceKm": 34.24787630126512,
        "gradePct": -9.635288272375965,
        "smoothedEle": 1359.4429724119047,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527823,
        "lng": 121.5196,
        "ele": 1374.5,
        "distanceKm": 34.264237309524425,
        "gradePct": -9.823371204614407,
        "smoothedEle": 1357.7768320907912,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527769,
        "lng": 121.519615,
        "ele": 1375,
        "distanceKm": 34.27043061020298,
        "gradePct": -9.837786594025804,
        "smoothedEle": 1357.204361500177,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527694,
        "lng": 121.51968,
        "ele": 1373.5,
        "distanceKm": 34.28105068968662,
        "gradePct": -9.808975727093044,
        "smoothedEle": 1356.1304332349496,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527694,
        "lng": 121.51972,
        "ele": 1371.5,
        "distanceKm": 34.285097126346926,
        "gradePct": -9.806814338556908,
        "smoothedEle": 1355.6812787656559,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52771,
        "lng": 121.519765,
        "ele": 1369,
        "distanceKm": 34.2899846789268,
        "gradePct": -9.810474212221013,
        "smoothedEle": 1355.1262193472403,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527796,
        "lng": 121.519821,
        "ele": 1364,
        "distanceKm": 34.301099489998094,
        "gradePct": -9.79955576521829,
        "smoothedEle": 1353.8783964076965,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527862,
        "lng": 121.519839,
        "ele": 1361.5,
        "distanceKm": 34.30866088851476,
        "gradePct": -9.698623300829784,
        "smoothedEle": 1353.2640301422289,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52802,
        "lng": 121.519847,
        "ele": 1357.5,
        "distanceKm": 34.32624834068015,
        "gradePct": -9.544640742892033,
        "smoothedEle": 1351.8909623870152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528209,
        "lng": 121.519812,
        "ele": 1354.75,
        "distanceKm": 34.347560374611376,
        "gradePct": -9.13378849507181,
        "smoothedEle": 1350.8292133659015,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52845,
        "lng": 121.519664,
        "ele": 1354.25,
        "distanceKm": 34.37825706118907,
        "gradePct": -8.14153477090417,
        "smoothedEle": 1349.7549188991466,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528783,
        "lng": 121.519606,
        "ele": 1345,
        "distanceKm": 34.41574699372439,
        "gradePct": -7.395034446010309,
        "smoothedEle": 1347.5377334620403,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529114,
        "lng": 121.519374,
        "ele": 1343.5,
        "distanceKm": 34.4593984388884,
        "gradePct": -7.01047210920423,
        "smoothedEle": 1344.248659304776,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529404,
        "lng": 121.518909,
        "ele": 1330.25,
        "distanceKm": 34.516429409184454,
        "gradePct": -6.723796354930318,
        "smoothedEle": 1339.2099422369893,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529439,
        "lng": 121.518861,
        "ele": 1327,
        "distanceKm": 34.52265224859789,
        "gradePct": -6.736419745130225,
        "smoothedEle": 1338.6988729472166,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529532,
        "lng": 121.518807,
        "ele": 1320.5,
        "distanceKm": 34.53434751910917,
        "gradePct": -6.8583458872725656,
        "smoothedEle": 1337.7707758171546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529577,
        "lng": 121.518807,
        "ele": 1318.5,
        "distanceKm": 34.53935129771968,
        "gradePct": -6.912313450339086,
        "smoothedEle": 1337.4135563168165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529614,
        "lng": 121.51882,
        "ele": 1317.25,
        "distanceKm": 34.54367058051375,
        "gradePct": -6.952317985833262,
        "smoothedEle": 1337.1183639229548,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529635,
        "lng": 121.518851,
        "ele": 1317.5,
        "distanceKm": 34.54758041394035,
        "gradePct": -6.980611157371769,
        "smoothedEle": 1336.8672897331123,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529646,
        "lng": 121.518951,
        "ele": 1320.5,
        "distanceKm": 34.55777002743404,
        "gradePct": -7.128384333912107,
        "smoothedEle": 1336.215136637902,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529281,
        "lng": 121.519396,
        "ele": 1335,
        "distanceKm": 34.618380899731186,
        "gradePct": -7.895601951639606,
        "smoothedEle": 1331.5480684964282,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528984,
        "lng": 121.51978,
        "ele": 1329.5,
        "distanceKm": 34.669367246521794,
        "gradePct": -8.003480475872607,
        "smoothedEle": 1327.3609488075274,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528607,
        "lng": 121.520119,
        "ele": 1325.75,
        "distanceKm": 34.72352774041199,
        "gradePct": -7.445050731167734,
        "smoothedEle": 1323.739295414253,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528445,
        "lng": 121.520212,
        "ele": 1326,
        "distanceKm": 34.743850105673275,
        "gradePct": -7.289764859032299,
        "smoothedEle": 1322.5273058022535,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52838,
        "lng": 121.520228,
        "ele": 1327.5,
        "distanceKm": 34.75125679962251,
        "gradePct": -7.214365836940158,
        "smoothedEle": 1322.2032629419746,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528105,
        "lng": 121.520241,
        "ele": 1334,
        "distanceKm": 34.781863712369464,
        "gradePct": -6.695441869110273,
        "smoothedEle": 1320.9690268468116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528052,
        "lng": 121.52025,
        "ele": 1335,
        "distanceKm": 34.787826963033524,
        "gradePct": -6.551858032870335,
        "smoothedEle": 1320.7970211706981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528005,
        "lng": 121.520274,
        "ele": 1334.75,
        "distanceKm": 34.79358954253249,
        "gradePct": -6.400871884047228,
        "smoothedEle": 1320.6552719020142,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527977,
        "lng": 121.520304,
        "ele": 1333.75,
        "distanceKm": 34.79793739044925,
        "gradePct": -6.284056852637629,
        "smoothedEle": 1320.5541154533175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527965,
        "lng": 121.520351,
        "ele": 1331.25,
        "distanceKm": 34.80287563265697,
        "gradePct": -6.152558847670346,
        "smoothedEle": 1320.4368642896172,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527968,
        "lng": 121.520395,
        "ele": 1328.75,
        "distanceKm": 34.807339186080846,
        "gradePct": -6.046548313325643,
        "smoothedEle": 1320.305189463613,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527987,
        "lng": 121.520428,
        "ele": 1326.5,
        "distanceKm": 34.81128985612755,
        "gradePct": -5.952718890240619,
        "smoothedEle": 1320.1886446972353,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528023,
        "lng": 121.520461,
        "ele": 1323.5,
        "distanceKm": 34.81650219267897,
        "gradePct": -5.8289245652876245,
        "smoothedEle": 1320.0348807689686,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528068,
        "lng": 121.520471,
        "ele": 1321.75,
        "distanceKm": 34.821607204702104,
        "gradePct": -5.69941688412283,
        "smoothedEle": 1319.884282914286,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528419,
        "lng": 121.520458,
        "ele": 1312.25,
        "distanceKm": 34.86065882729184,
        "gradePct": -5.469265913707126,
        "smoothedEle": 1317.137573015251,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528572,
        "lng": 121.520427,
        "ele": 1308.5,
        "distanceKm": 34.87795828595954,
        "gradePct": -5.608490579981924,
        "smoothedEle": 1315.5694941725887,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528913,
        "lng": 121.520196,
        "ele": 1310,
        "distanceKm": 34.922498165065846,
        "gradePct": -6.179990437821542,
        "smoothedEle": 1311.4481611236051,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529222,
        "lng": 121.519987,
        "ele": 1311,
        "distanceKm": 34.96284120903587,
        "gradePct": -7.157027400580445,
        "smoothedEle": 1307.4220621611676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529533,
        "lng": 121.5197245,
        "ele": 1308.375,
        "distanceKm": 35.00644198006595,
        "gradePct": -8.751782135475072,
        "smoothedEle": 1302.828092770102,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529844,
        "lng": 121.519462,
        "ele": 1305.75,
        "distanceKm": 35.05004271103504,
        "gradePct": -10.242527885866675,
        "smoothedEle": 1297.3992055928904,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530265,
        "lng": 121.519381,
        "ele": 1293,
        "distanceKm": 35.097567532954926,
        "gradePct": -10.732038811057539,
        "smoothedEle": 1292.2909473752231,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530568,
        "lng": 121.51924,
        "ele": 1288.25,
        "distanceKm": 35.13415444642181,
        "gradePct": -10.33988021376248,
        "smoothedEle": 1289.6051433497084,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530752,
        "lng": 121.518942,
        "ele": 1281.5,
        "distanceKm": 35.17058716313559,
        "gradePct": -9.747789359460146,
        "smoothedEle": 1287.1103355806838,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530754,
        "lng": 121.51875,
        "ele": 1278.75,
        "distanceKm": 35.1900108590476,
        "gradePct": -9.448038929923179,
        "smoothedEle": 1285.6632702352392,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530763,
        "lng": 121.518691,
        "ele": 1277.75,
        "distanceKm": 35.19606252779152,
        "gradePct": -9.358041186625409,
        "smoothedEle": 1285.205635232336,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530802,
        "lng": 121.518649,
        "ele": 1276.25,
        "distanceKm": 35.20213354341504,
        "gradePct": -9.270423053225823,
        "smoothedEle": 1284.7412025371368,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530845,
        "lng": 121.518631,
        "ele": 1275.25,
        "distanceKm": 35.20724990679865,
        "gradePct": -9.188847053230557,
        "smoothedEle": 1284.34980073829,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531267,
        "lng": 121.518712,
        "ele": 1272.25,
        "distanceKm": 35.25488425124588,
        "gradePct": -8.15458678420441,
        "smoothedEle": 1280.5696337027396,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531633,
        "lng": 121.518795,
        "ele": 1269,
        "distanceKm": 35.29643870819572,
        "gradePct": -7.360477570032012,
        "smoothedEle": 1277.6913252169477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531693,
        "lng": 121.518817,
        "ele": 1268.5,
        "distanceKm": 35.303471798625786,
        "gradePct": -7.305810425792184,
        "smoothedEle": 1277.245901044311,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53173,
        "lng": 121.518852,
        "ele": 1268.5,
        "distanceKm": 35.30889969533993,
        "gradePct": -7.278918260542934,
        "smoothedEle": 1276.901229602963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53175,
        "lng": 121.518891,
        "ele": 1268.5,
        "distanceKm": 35.313428485008494,
        "gradePct": -7.256480663337367,
        "smoothedEle": 1276.6136514590094,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531756,
        "lng": 121.518936,
        "ele": 1268.75,
        "distanceKm": 35.318029210701056,
        "gradePct": -7.234839521658966,
        "smoothedEle": 1276.3191996616665,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531746,
        "lng": 121.518983,
        "ele": 1269,
        "distanceKm": 35.32291191934737,
        "gradePct": -7.226517258736077,
        "smoothedEle": 1275.9774100564246,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531717,
        "lng": 121.519018,
        "ele": 1269.25,
        "distanceKm": 35.327700831972,
        "gradePct": -7.168684562893884,
        "smoothedEle": 1275.7415267771144,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53168,
        "lng": 121.519036,
        "ele": 1269.5,
        "distanceKm": 35.33219996989405,
        "gradePct": -7.103652063100312,
        "smoothedEle": 1275.5413151395833,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53121,
        "lng": 121.519122,
        "ele": 1276,
        "distanceKm": 35.385180784113736,
        "gradePct": -6.4566154842198324,
        "smoothedEle": 1273.1098798493722,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530829,
        "lng": 121.519396,
        "ele": 1272.75,
        "distanceKm": 35.435807582231206,
        "gradePct": -5.481929722454688,
        "smoothedEle": 1271.1196608494108,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530517,
        "lng": 121.519715,
        "ele": 1270,
        "distanceKm": 35.48318816706218,
        "gradePct": -4.895857404477668,
        "smoothedEle": 1268.8174215836275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530208,
        "lng": 121.519903,
        "ele": 1271.75,
        "distanceKm": 35.52245951353819,
        "gradePct": -4.395706480339237,
        "smoothedEle": 1267.2176655023889,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530038,
        "lng": 121.519966,
        "ele": 1274.25,
        "distanceKm": 35.542408070094716,
        "gradePct": -4.302605620922402,
        "smoothedEle": 1266.4676261017764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529947,
        "lng": 121.520043,
        "ele": 1274,
        "distanceKm": 35.555177624986605,
        "gradePct": -4.348357814975367,
        "smoothedEle": 1265.7900917165534,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529794,
        "lng": 121.520224,
        "ele": 1270.75,
        "distanceKm": 35.58017134538011,
        "gradePct": -4.5202111193964845,
        "smoothedEle": 1264.2993545327101,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52951610867719,
        "lng": 121.52049329262042,
        "ele": 1267.0111516517902,
        "distanceKm": 35.62136499098169,
        "gradePct": -4.987033733283554,
        "smoothedEle": 1261.7133543430919,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52923,
        "lng": 121.520752,
        "ele": 1263.5,
        "distanceKm": 35.66256001095384,
        "gradePct": -5.285048166694349,
        "smoothedEle": 1259.2496546039763,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528998,
        "lng": 121.521119,
        "ele": 1253,
        "distanceKm": 35.70776854372846,
        "gradePct": -5.461524816735768,
        "smoothedEle": 1256.8930666581398,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528916,
        "lng": 121.521234,
        "ele": 1250,
        "distanceKm": 35.72254939575757,
        "gradePct": -5.535156411318589,
        "smoothedEle": 1256.1439732269196,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528851,
        "lng": 121.521283,
        "ele": 1249.5,
        "distanceKm": 35.73131350459563,
        "gradePct": -5.614932616275075,
        "smoothedEle": 1255.6549018906032,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528777,
        "lng": 121.521314,
        "ele": 1250.25,
        "distanceKm": 35.74011926440621,
        "gradePct": -5.70035429687474,
        "smoothedEle": 1255.1529735814004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528522,
        "lng": 121.521394,
        "ele": 1254,
        "distanceKm": 35.769606298706485,
        "gradePct": -5.777362005161453,
        "smoothedEle": 1253.374777122311,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528474,
        "lng": 121.521427,
        "ele": 1253.75,
        "distanceKm": 35.775901664100566,
        "gradePct": -5.811531771925192,
        "smoothedEle": 1252.930953862028,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528442,
        "lng": 121.521532,
        "ele": 1248.5,
        "distanceKm": 35.78710364591946,
        "gradePct": -5.873151433360961,
        "smoothedEle": 1252.1178648732814,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528502,
        "lng": 121.521598,
        "ele": 1243,
        "distanceKm": 35.79654230863458,
        "gradePct": -5.933197009967587,
        "smoothedEle": 1251.4052458382896,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528573,
        "lng": 121.521601,
        "ele": 1241,
        "distanceKm": 35.8044429901284,
        "gradePct": -5.9820459351015245,
        "smoothedEle": 1250.8115694568,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528734,
        "lng": 121.521569,
        "ele": 1238,
        "distanceKm": 35.82263571353243,
        "gradePct": -6.101351011967977,
        "smoothedEle": 1249.4346557831946,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528803,
        "lng": 121.521536,
        "ele": 1237.75,
        "distanceKm": 35.83100295771589,
        "gradePct": -6.167009754591417,
        "smoothedEle": 1248.802928847343,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528939,
        "lng": 121.521394,
        "ele": 1241,
        "distanceKm": 35.851860474157256,
        "gradePct": -6.326597156421849,
        "smoothedEle": 1247.2363542888104,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529355,
        "lng": 121.520938,
        "ele": 1248.25,
        "distanceKm": 35.91718730245995,
        "gradePct": -6.3396157980256715,
        "smoothedEle": 1243.7364924649153,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529659953263963,
        "lng": 121.52077050251054,
        "ele": 1244.9817497085555,
        "distanceKm": 35.95509427294212,
        "gradePct": -6.175178892642775,
        "smoothedEle": 1241.8995576288464,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529969,
        "lng": 121.520612,
        "ele": 1241.5,
        "distanceKm": 35.99301532300494,
        "gradePct": -5.602925183437754,
        "smoothedEle": 1240.465682886452,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530367,
        "lng": 121.52051,
        "ele": 1236.5,
        "distanceKm": 36.03845789449766,
        "gradePct": -5.036837427384099,
        "smoothedEle": 1238.1693256650283,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530838,
        "lng": 121.520326,
        "ele": 1233,
        "distanceKm": 36.09403998897512,
        "gradePct": -4.6954333451706605,
        "smoothedEle": 1235.585734944055,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53118,
        "lng": 121.520177,
        "ele": 1240.75,
        "distanceKm": 36.1349467851754,
        "gradePct": -5.198761405934005,
        "smoothedEle": 1232.4783624334352,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531661,
        "lng": 121.520381,
        "ele": 1233.75,
        "distanceKm": 36.192274621095635,
        "gradePct": -6.869802373254418,
        "smoothedEle": 1226.7540856386183,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532065,
        "lng": 121.520557,
        "ele": 1231,
        "distanceKm": 36.240596788688784,
        "gradePct": -7.452502837962478,
        "smoothedEle": 1223.1648989932362,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532462,
        "lng": 121.520883,
        "ele": 1221.75,
        "distanceKm": 36.295698801056645,
        "gradePct": -8.193704212347821,
        "smoothedEle": 1219.0723194119541,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532774,
        "lng": 121.52106,
        "ele": 1212.5,
        "distanceKm": 36.33473949816106,
        "gradePct": -8.110907766827266,
        "smoothedEle": 1216.272292888956,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533093,
        "lng": 121.521318,
        "ele": 1199,
        "distanceKm": 36.37877739213157,
        "gradePct": -7.549048478219681,
        "smoothedEle": 1213.003708743701,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533159,
        "lng": 121.521352,
        "ele": 1197,
        "distanceKm": 36.38688220729452,
        "gradePct": -7.496054360894057,
        "smoothedEle": 1212.3004181242172,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533217,
        "lng": 121.521356,
        "ele": 1196.25,
        "distanceKm": 36.39334420247142,
        "gradePct": -7.474117582703692,
        "smoothedEle": 1211.726406040535,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533263,
        "lng": 121.521344,
        "ele": 1196,
        "distanceKm": 36.39860124100435,
        "gradePct": -7.527276249095856,
        "smoothedEle": 1211.229615899173,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533323,
        "lng": 121.5213,
        "ele": 1197,
        "distanceKm": 36.406621340389414,
        "gradePct": -7.60837472021638,
        "smoothedEle": 1210.4717165072846,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533372,
        "lng": 121.521235,
        "ele": 1198.25,
        "distanceKm": 36.415160635979966,
        "gradePct": -7.683873723358266,
        "smoothedEle": 1209.6864521337998,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533586,
        "lng": 121.520824,
        "ele": 1207,
        "distanceKm": 36.463064044797484,
        "gradePct": -8.25026598894112,
        "smoothedEle": 1204.9956614700093,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533833,
        "lng": 121.520561,
        "ele": 1205,
        "distanceKm": 36.501301613435096,
        "gradePct": -9.038148354133439,
        "smoothedEle": 1200.594185020792,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534133,
        "lng": 121.520352,
        "ele": 1197.5,
        "distanceKm": 36.5407953751473,
        "gradePct": -9.739927627674977,
        "smoothedEle": 1196.3429578397702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53422,
        "lng": 121.519952,
        "ele": 1200,
        "distanceKm": 36.582398038705385,
        "gradePct": -10.170511102863513,
        "smoothedEle": 1192.3485070384252,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53434175274475,
        "lng": 121.51958606930194,
        "ele": 1197.3627909555023,
        "distanceKm": 36.621812068493874,
        "gradePct": -9.941979360549084,
        "smoothedEle": 1189.151172800928,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53448,
        "lng": 121.519225,
        "ele": 1193.5,
        "distanceKm": 36.66143938822534,
        "gradePct": -9.176404592890417,
        "smoothedEle": 1186.8019416699028,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534734,
        "lng": 121.518814,
        "ele": 1177.75,
        "distanceKm": 36.71170036778359,
        "gradePct": -8.005556142117257,
        "smoothedEle": 1183.4637195724492,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534759,
        "lng": 121.518768,
        "ele": 1175.75,
        "distanceKm": 36.71712064776423,
        "gradePct": -7.9269032038851055,
        "smoothedEle": 1183.0375702250135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534776,
        "lng": 121.518701,
        "ele": 1174,
        "distanceKm": 36.724156729086125,
        "gradePct": -7.850762233021216,
        "smoothedEle": 1182.4324672313307,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534777,
        "lng": 121.518633,
        "ele": 1173,
        "distanceKm": 36.73103618204308,
        "gradePct": -7.776316216383523,
        "smoothedEle": 1181.8408342770329,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534766,
        "lng": 121.518563,
        "ele": 1172.75,
        "distanceKm": 36.738221913347125,
        "gradePct": -7.686477639417949,
        "smoothedEle": 1181.247017721808,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534645,
        "lng": 121.518089,
        "ele": 1171.5,
        "distanceKm": 36.78802149564305,
        "gradePct": -7.296360818849062,
        "smoothedEle": 1177.2996008518144,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534504,
        "lng": 121.517558,
        "ele": 1167.5,
        "distanceKm": 36.84397644125708,
        "gradePct": -7.855713129731841,
        "smoothedEle": 1172.1257733823454,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534401,
        "lng": 121.517278,
        "ele": 1165.25,
        "distanceKm": 36.8745279682117,
        "gradePct": -8.6476809586644,
        "smoothedEle": 1168.637265478981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534298,
        "lng": 121.517179,
        "ele": 1168.5,
        "distanceKm": 36.88974182863862,
        "gradePct": -8.938967722793892,
        "smoothedEle": 1167.0442212931443,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533915,
        "lng": 121.516945,
        "ele": 1169,
        "distanceKm": 36.93846557558364,
        "gradePct": -9.076996597533919,
        "smoothedEle": 1163.0737103803426,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533442,
        "lng": 121.516805,
        "ele": 1164,
        "distanceKm": 36.992934106163375,
        "gradePct": -7.875898972280426,
        "smoothedEle": 1161.0935624647343,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533019,
        "lng": 121.51678,
        "ele": 1161.25,
        "distanceKm": 37.0400375607571,
        "gradePct": -6.537488609270234,
        "smoothedEle": 1159.4150014705228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532925,
        "lng": 121.51677,
        "ele": 1160,
        "distanceKm": 37.05053873341333,
        "gradePct": -6.1881284057778005,
        "smoothedEle": 1159.0002051506017,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532879,
        "lng": 121.516747,
        "ele": 1158.5,
        "distanceKm": 37.05615799000591,
        "gradePct": -6.015556717287069,
        "smoothedEle": 1158.7037170613937,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532841,
        "lng": 121.516703,
        "ele": 1156,
        "distanceKm": 37.062295139271654,
        "gradePct": -5.852356403629104,
        "smoothedEle": 1158.3293509561831,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532822,
        "lng": 121.516645,
        "ele": 1152.5,
        "distanceKm": 37.06853102813531,
        "gradePct": -5.6764021478863125,
        "smoothedEle": 1157.9692182129818,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532815,
        "lng": 121.51658,
        "ele": 1149,
        "distanceKm": 37.07515213016392,
        "gradePct": -5.476804820097222,
        "smoothedEle": 1157.6182998054655,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532825,
        "lng": 121.516515,
        "ele": 1145.25,
        "distanceKm": 37.08182068118331,
        "gradePct": -5.3043892448959395,
        "smoothedEle": 1157.2648666014381,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53285,
        "lng": 121.51646,
        "ele": 1142.25,
        "distanceKm": 37.088040135432166,
        "gradePct": -5.1435850793978215,
        "smoothedEle": 1156.9352355262486,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532881,
        "lng": 121.516428,
        "ele": 1140.5,
        "distanceKm": 37.09276881483299,
        "gradePct": -5.056467938276724,
        "smoothedEle": 1156.6846155180049,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532978,
        "lng": 121.516414,
        "ele": 1140.25,
        "distanceKm": 37.10364731358408,
        "gradePct": -4.901502297520937,
        "smoothedEle": 1156.1080550841973,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53305,
        "lng": 121.516429,
        "ele": 1141.5,
        "distanceKm": 37.11179587899964,
        "gradePct": -4.8224705173144455,
        "smoothedEle": 1155.6020899125288,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533433,
        "lng": 121.516571,
        "ele": 1151.25,
        "distanceKm": 37.15674078099823,
        "gradePct": -4.944300433725673,
        "smoothedEle": 1152.5207330458957,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5337745,
        "lng": 121.516652,
        "ele": 1155.375,
        "distanceKm": 37.19558783637148,
        "gradePct": -5.770070010797813,
        "smoothedEle": 1149.4588551114025,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534116,
        "lng": 121.516733,
        "ele": 1159.5,
        "distanceKm": 37.234434887043435,
        "gradePct": -6.440795243804609,
        "smoothedEle": 1146.7330657564364,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534456,
        "lng": 121.517009,
        "ele": 1151.75,
        "distanceKm": 37.28143261019558,
        "gradePct": -7.052517750978055,
        "smoothedEle": 1143.1803988618317,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534755,
        "lng": 121.517271,
        "ele": 1141,
        "distanceKm": 37.323950583416114,
        "gradePct": -7.615312956661574,
        "smoothedEle": 1139.5381552088832,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535113,
        "lng": 121.517783,
        "ele": 1132.75,
        "distanceKm": 37.38927296381498,
        "gradePct": -6.869103914044914,
        "smoothedEle": 1136.218377902895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535299,
        "lng": 121.518126,
        "ele": 1129.25,
        "distanceKm": 37.42966575434361,
        "gradePct": -6.7631697179238195,
        "smoothedEle": 1133.5413630798985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535381,
        "lng": 121.51857,
        "ele": 1132,
        "distanceKm": 37.475494670014115,
        "gradePct": -6.756431287572032,
        "smoothedEle": 1130.1163989568333,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535645,
        "lng": 121.51896,
        "ele": 1122,
        "distanceKm": 37.524668561885875,
        "gradePct": -6.9926864345791415,
        "smoothedEle": 1125.5162936414326,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535822,
        "lng": 121.519143,
        "ele": 1114,
        "distanceKm": 37.551687618511146,
        "gradePct": -7.405479737399682,
        "smoothedEle": 1123.3175597244708,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535846,
        "lng": 121.519187,
        "ele": 1113.5,
        "distanceKm": 37.5568771666812,
        "gradePct": -7.431007089564226,
        "smoothedEle": 1123.002764719527,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535857,
        "lng": 121.519254,
        "ele": 1113.5,
        "distanceKm": 37.563763997367346,
        "gradePct": -7.450560737053487,
        "smoothedEle": 1122.6136587857595,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535857,
        "lng": 121.51934,
        "ele": 1114,
        "distanceKm": 37.57246327050977,
        "gradePct": -7.509936458640147,
        "smoothedEle": 1122.052797771862,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535812,
        "lng": 121.519658,
        "ele": 1118.75,
        "distanceKm": 37.605017213308265,
        "gradePct": -7.692317895269757,
        "smoothedEle": 1119.7902987473667,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535849,
        "lng": 121.51985,
        "ele": 1118.25,
        "distanceKm": 37.62486983982461,
        "gradePct": -7.690616096708486,
        "smoothedEle": 1118.4779780589388,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535801,
        "lng": 121.520226,
        "ele": 1118.5,
        "distanceKm": 37.66327655455118,
        "gradePct": -7.6234474585212455,
        "smoothedEle": 1115.7826089321884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535693,
        "lng": 121.52062,
        "ele": 1119,
        "distanceKm": 37.70490138314864,
        "gradePct": -7.29593771253145,
        "smoothedEle": 1112.773592656676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53571,
        "lng": 121.521077,
        "ele": 1110.5,
        "distanceKm": 37.75116760609446,
        "gradePct": -6.9400121733189195,
        "smoothedEle": 1109.4798525080594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535709,
        "lng": 121.521197,
        "ele": 1108,
        "distanceKm": 37.76330665031368,
        "gradePct": -6.88026453754175,
        "smoothedEle": 1108.8789698192081,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53568,
        "lng": 121.521276,
        "ele": 1108.25,
        "distanceKm": 37.77192394351545,
        "gradePct": -6.8175777738090515,
        "smoothedEle": 1108.4524138057202,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535532,
        "lng": 121.521472,
        "ele": 1112.75,
        "distanceKm": 37.797690402520864,
        "gradePct": -6.485170507490487,
        "smoothedEle": 1107.3291710821102,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535503,
        "lng": 121.521855,
        "ele": 1106.25,
        "distanceKm": 37.8365665875217,
        "gradePct": -5.815147949631213,
        "smoothedEle": 1106.0268087043294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53542791054937,
        "lng": 121.52225737569265,
        "ele": 1099.5802070689977,
        "distanceKm": 37.87811634592715,
        "gradePct": -5.2490943019843535,
        "smoothedEle": 1104.2116669913275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535333,
        "lng": 121.522656,
        "ele": 1093.5,
        "distanceKm": 37.91979728695393,
        "gradePct": -5.08540214581005,
        "smoothedEle": 1101.542333603688,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535306,
        "lng": 121.522717,
        "ele": 1093,
        "distanceKm": 37.92665935307455,
        "gradePct": -5.071022577176037,
        "smoothedEle": 1101.0825751736063,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535272,
        "lng": 121.522765,
        "ele": 1092.75,
        "distanceKm": 37.93281308256356,
        "gradePct": -5.067827448355202,
        "smoothedEle": 1100.6508750795583,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535228,
        "lng": 121.522801,
        "ele": 1092.75,
        "distanceKm": 37.93891213440856,
        "gradePct": -5.087953630268926,
        "smoothedEle": 1100.1764249219345,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535121,
        "lng": 121.522843,
        "ele": 1094,
        "distanceKm": 37.95154578761767,
        "gradePct": -5.135066275518097,
        "smoothedEle": 1099.1909999716245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535042,
        "lng": 121.522845,
        "ele": 1095.75,
        "distanceKm": 37.960332528302885,
        "gradePct": -5.260277330282445,
        "smoothedEle": 1098.5056341981776,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534564,
        "lng": 121.522799,
        "ele": 1097.25,
        "distanceKm": 38.01368706794802,
        "gradePct": -5.936349774832622,
        "smoothedEle": 1094.9205790516928,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53423,
        "lng": 121.522779,
        "ele": 1097.25,
        "distanceKm": 38.050881287162596,
        "gradePct": -6.221109566672592,
        "smoothedEle": 1092.9592379582566,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533811,
        "lng": 121.523027,
        "ele": 1096.5,
        "distanceKm": 38.10379665908757,
        "gradePct": -6.499343955134712,
        "smoothedEle": 1089.5683588869,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533485,
        "lng": 121.523483,
        "ele": 1085,
        "distanceKm": 38.16246309672536,
        "gradePct": -6.349994313016078,
        "smoothedEle": 1085.662486145811,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533258,
        "lng": 121.523748,
        "ele": 1080,
        "distanceKm": 38.19928302474495,
        "gradePct": -6.24055531426691,
        "smoothedEle": 1083.4073202603,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532892,
        "lng": 121.52397,
        "ele": 1079.25,
        "distanceKm": 38.2457651119059,
        "gradePct": -6.2993160292149035,
        "smoothedEle": 1080.6303941890847,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532519,
        "lng": 121.524062,
        "ele": 1084.25,
        "distanceKm": 38.288272155654106,
        "gradePct": -6.4349546291438395,
        "smoothedEle": 1077.6932780096804,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532106,
        "lng": 121.524131,
        "ele": 1074.25,
        "distanceKm": 38.33472312299756,
        "gradePct": -6.704336709650666,
        "smoothedEle": 1074.100674605032,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531777,
        "lng": 121.52408,
        "ele": 1069.75,
        "distanceKm": 38.37166828200868,
        "gradePct": -7.069173067422539,
        "smoothedEle": 1070.960336089087,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531726,
        "lng": 121.524085,
        "ele": 1068.5,
        "distanceKm": 38.37736174188353,
        "gradePct": -7.141274226604094,
        "smoothedEle": 1070.4674178125213,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531656,
        "lng": 121.52412,
        "ele": 1065.75,
        "distanceKm": 38.38591279866559,
        "gradePct": -7.234336195733943,
        "smoothedEle": 1069.7575543512046,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531628,
        "lng": 121.524161,
        "ele": 1063.5,
        "distanceKm": 38.39109885024418,
        "gradePct": -7.25054645953902,
        "smoothedEle": 1069.4074958696501,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531625,
        "lng": 121.524223,
        "ele": 1060.75,
        "distanceKm": 38.39737949576755,
        "gradePct": -7.270178142575001,
        "smoothedEle": 1068.9835522968224,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531682,
        "lng": 121.5243,
        "ele": 1058.25,
        "distanceKm": 38.40742153432049,
        "gradePct": -7.30769795691766,
        "smoothedEle": 1068.305714694499,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531999,
        "lng": 121.524312,
        "ele": 1064.75,
        "distanceKm": 38.4426912703993,
        "gradePct": -7.195137404313538,
        "smoothedEle": 1066.423756371389,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53215,
        "lng": 121.524342,
        "ele": 1067,
        "distanceKm": 38.45975377271885,
        "gradePct": -6.953641853426704,
        "smoothedEle": 1065.756533689799,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532206,
        "lng": 121.524381,
        "ele": 1066.75,
        "distanceKm": 38.46712525001639,
        "gradePct": -6.841473769061639,
        "smoothedEle": 1065.4715216816726,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532264,
        "lng": 121.524433,
        "ele": 1066.25,
        "distanceKm": 38.475447697118504,
        "gradePct": -6.726121369864149,
        "smoothedEle": 1065.1271689865223,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532346,
        "lng": 121.524547,
        "ele": 1064.25,
        "distanceKm": 38.49014882164234,
        "gradePct": -6.533906848370768,
        "smoothedEle": 1064.4803195074737,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532676,
        "lng": 121.524634,
        "ele": 1062,
        "distanceKm": 38.5278838043226,
        "gradePct": -6.195405822809019,
        "smoothedEle": 1062.2388284678277,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533313,
        "lng": 121.524478,
        "ele": 1054,
        "distanceKm": 38.600451637704545,
        "gradePct": -5.8917287878863664,
        "smoothedEle": 1056.9927251403028,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533689,
        "lng": 121.524197,
        "ele": 1051.25,
        "distanceKm": 38.65100850526147,
        "gradePct": -5.804052855366794,
        "smoothedEle": 1054.490408346004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53386,
        "lng": 121.523865,
        "ele": 1059.75,
        "distanceKm": 38.68960147488208,
        "gradePct": -5.702876285646571,
        "smoothedEle": 1053.098650193632,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534013,
        "lng": 121.523739,
        "ele": 1061,
        "distanceKm": 38.71085914067424,
        "gradePct": -5.7295071516133795,
        "smoothedEle": 1051.791094104601,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534065,
        "lng": 121.523723,
        "ele": 1060.25,
        "distanceKm": 38.716863531598605,
        "gradePct": -5.7439597124876265,
        "smoothedEle": 1051.4055229000946,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534159,
        "lng": 121.523733,
        "ele": 1057.25,
        "distanceKm": 38.72736470336977,
        "gradePct": -5.765068691394536,
        "smoothedEle": 1050.7395261365423,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534629,
        "lng": 121.524152,
        "ele": 1043.25,
        "distanceKm": 38.79465289839767,
        "gradePct": -6.376586528709163,
        "smoothedEle": 1044.6587569034712,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535154,
        "lng": 121.524354,
        "ele": 1041.75,
        "distanceKm": 38.85650307182488,
        "gradePct": -7.957572810115836,
        "smoothedEle": 1038.3771150350515,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53553,
        "lng": 121.524528,
        "ele": 1043.75,
        "distanceKm": 38.901866211035966,
        "gradePct": -9.452002576491033,
        "smoothedEle": 1033.4402428125234,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535631,
        "lng": 121.524598,
        "ele": 1044,
        "distanceKm": 38.91514275781651,
        "gradePct": -9.768099752207466,
        "smoothedEle": 1031.9798226666635,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535669,
        "lng": 121.52471,
        "ele": 1041.5,
        "distanceKm": 38.92723437718728,
        "gradePct": -10.079870797646407,
        "smoothedEle": 1030.588049982253,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53569,
        "lng": 121.52497,
        "ele": 1034.75,
        "distanceKm": 38.953638001394125,
        "gradePct": -10.404458889252362,
        "smoothedEle": 1027.5563157765298,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536043,
        "lng": 121.525579,
        "ele": 1015,
        "distanceKm": 39.02668344525573,
        "gradePct": -10.452307323836543,
        "smoothedEle": 1020.5010483182567,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536102,
        "lng": 121.525748,
        "ele": 1009.5,
        "distanceKm": 39.04499412947096,
        "gradePct": -10.143464389338389,
        "smoothedEle": 1019.2590601680497,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536084,
        "lng": 121.526169,
        "ele": 1004.25,
        "distanceKm": 39.08762703503271,
        "gradePct": -9.246745493795157,
        "smoothedEle": 1016.4964019087831,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536088,
        "lng": 121.526331,
        "ele": 1002.25,
        "distanceKm": 39.10402004310388,
        "gradePct": -8.82475867018103,
        "smoothedEle": 1015.5538039446908,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53611,
        "lng": 121.526397,
        "ele": 1001.25,
        "distanceKm": 39.11113029175776,
        "gradePct": -8.638114643016698,
        "smoothedEle": 1015.1449646470928,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536159,
        "lng": 121.526465,
        "ele": 999.25,
        "distanceKm": 39.11990527205843,
        "gradePct": -8.39406291314702,
        "smoothedEle": 1014.6435207005349,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536196,
        "lng": 121.526484,
        "ele": 998.25,
        "distanceKm": 39.12444626258084,
        "gradePct": -8.26214201320283,
        "smoothedEle": 1014.3846842407577,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53623,
        "lng": 121.526488,
        "ele": 997.5,
        "distanceKm": 39.12824848536483,
        "gradePct": -8.151824923914715,
        "smoothedEle": 1014.1679575420704,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53627,
        "lng": 121.526476,
        "ele": 996.5,
        "distanceKm": 39.13285894965808,
        "gradePct": -8.025878899646841,
        "smoothedEle": 1013.8904638444444,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536312,
        "lng": 121.526438,
        "ele": 996,
        "distanceKm": 39.138907577695015,
        "gradePct": -7.863102292749377,
        "smoothedEle": 1013.5214975341913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536338,
        "lng": 121.526374,
        "ele": 996.25,
        "distanceKm": 39.145997646634996,
        "gradePct": -7.672299129177196,
        "smoothedEle": 1013.0890033288526,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536388,
        "lng": 121.52584800000001,
        "ele": 1002.4999999999995,
        "distanceKm": 39.19949430336547,
        "gradePct": -7.194381796320568,
        "smoothedEle": 1008.7384124873986,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536438,
        "lng": 121.525322,
        "ele": 1008.75,
        "distanceKm": 39.252990939016364,
        "gradePct": -6.0310526241321725,
        "smoothedEle": 1006.6787530368197,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5366,
        "lng": 121.524804,
        "ele": 1009.5,
        "distanceKm": 39.308398572400456,
        "gradePct": -3.359037919453281,
        "smoothedEle": 1008.5839626712312,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5366,
        "lng": 121.524449,
        "ele": 1013,
        "distanceKm": 39.34430815012572,
        "gradePct": -1.4657864664272116,
        "smoothedEle": 1010.2604896830642,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536634,
        "lng": 121.524068,
        "ele": 1013.25,
        "distanceKm": 39.3830327110678,
        "gradePct": 1.0103079465337572,
        "smoothedEle": 1012.0977597529112,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536783,
        "lng": 121.523703,
        "ele": 998.5,
        "distanceKm": 39.42350081243133,
        "gradePct": 2.7184129175747285,
        "smoothedEle": 1013.2509702322038,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536753,
        "lng": 121.523453,
        "ele": 999.75,
        "distanceKm": 39.449008284766236,
        "gradePct": 3.069149954640251,
        "smoothedEle": 1012.9703880365198,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536654,
        "lng": 121.523251,
        "ele": 1008.25,
        "distanceKm": 39.472218024577906,
        "gradePct": 2.677197351464959,
        "smoothedEle": 1012.6942773786852,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536455,
        "lng": 121.522931,
        "ele": 1028.75,
        "distanceKm": 39.5114277953417,
        "gradePct": 1.5240207517370332,
        "smoothedEle": 1011.7734309028255,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536495,
        "lng": 121.522532,
        "ele": 1031.25,
        "distanceKm": 39.552032517082836,
        "gradePct": 0.1765539768153392,
        "smoothedEle": 1010.980076891038,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536647,
        "lng": 121.522101,
        "ele": 1026.5,
        "distanceKm": 39.59879134487559,
        "gradePct": -1.4230154475393217,
        "smoothedEle": 1009.7007991387244,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536677,
        "lng": 121.522023,
        "ele": 1025.75,
        "distanceKm": 39.60735754702203,
        "gradePct": -1.7725357844890686,
        "smoothedEle": 1009.2458676211768,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536724,
        "lng": 121.52196,
        "ele": 1024,
        "distanceKm": 39.61559914256232,
        "gradePct": -2.2139300445016628,
        "smoothedEle": 1008.5979380152817,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53678,
        "lng": 121.521913,
        "ele": 1021.75,
        "distanceKm": 39.62343350256845,
        "gradePct": -2.6350142716113587,
        "smoothedEle": 1007.9790235747969,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536932,
        "lng": 121.521863,
        "ele": 1014.5,
        "distanceKm": 39.641075666279725,
        "gradePct": -3.2361770991324867,
        "smoothedEle": 1006.5852926416064,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537346,
        "lng": 121.521781,
        "ele": 997,
        "distanceKm": 39.68785172140995,
        "gradePct": -4.481261613906605,
        "smoothedEle": 1003.3645947833977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537775,
        "lng": 121.521735,
        "ele": 996,
        "distanceKm": 39.735780807839575,
        "gradePct": -5.709604555063184,
        "smoothedEle": 999.8784012640552,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538162,
        "lng": 121.521758,
        "ele": 999.5,
        "distanceKm": 39.77887614828546,
        "gradePct": -7.662061427271969,
        "smoothedEle": 994.9215374180741,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538532,
        "lng": 121.521785,
        "ele": 997.5,
        "distanceKm": 39.82010887712283,
        "gradePct": -9.416638160449319,
        "smoothedEle": 989.4083926641026,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539089,
        "lng": 121.522025,
        "ele": 973.75,
        "distanceKm": 39.8866323537209,
        "gradePct": -11.311984061855707,
        "smoothedEle": 980.8245844644553,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539291,
        "lng": 121.522058,
        "ele": 967.25,
        "distanceKm": 39.90934043693101,
        "gradePct": -11.67499563559972,
        "smoothedEle": 978.4515897689982,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539516,
        "lng": 121.521995,
        "ele": 966.5,
        "distanceKm": 39.93515815017865,
        "gradePct": -11.868555421596001,
        "smoothedEle": 976.1865803536364,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539969,
        "lng": 121.521793,
        "ele": 969.25,
        "distanceKm": 39.98951589020047,
        "gradePct": -10.662881977322078,
        "smoothedEle": 972.1731550974781,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540267,
        "lng": 121.521677,
        "ele": 967.5,
        "distanceKm": 40.02466810931332,
        "gradePct": -9.50629505750269,
        "smoothedEle": 969.8075053544501,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540542,
        "lng": 121.521474,
        "ele": 962.5,
        "distanceKm": 40.06150127156405,
        "gradePct": -8.487151034141668,
        "smoothedEle": 967.0930532210848,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540752,
        "lng": 121.521172,
        "ele": 959,
        "distanceKm": 40.099951421282576,
        "gradePct": -7.786772505247032,
        "smoothedEle": 963.8591968937658,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540786,
        "lng": 121.521056,
        "ele": 959.25,
        "distanceKm": 40.11227890656852,
        "gradePct": -7.518448078342438,
        "smoothedEle": 963.1568992316929,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540789,
        "lng": 121.520947,
        "ele": 960.5,
        "distanceKm": 40.12330934168794,
        "gradePct": -7.354476081925905,
        "smoothedEle": 962.5171339947663,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540775,
        "lng": 121.520864,
        "ele": 962.25,
        "distanceKm": 40.13184793099223,
        "gradePct": -7.227546407833597,
        "smoothedEle": 962.0218958151175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540527,
        "lng": 121.520299,
        "ele": 955.5,
        "distanceKm": 40.19530328008104,
        "gradePct": -6.407145127864135,
        "smoothedEle": 958.9693890780769,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540214,
        "lng": 121.52007,
        "ele": 965,
        "distanceKm": 40.2371108251092,
        "gradePct": -5.6910231247689795,
        "smoothedEle": 957.5084822728098,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539886,
        "lng": 121.519683,
        "ele": 962,
        "distanceKm": 40.290613813758746,
        "gradePct": -3.9262725772434814,
        "smoothedEle": 956.7919927950098,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539596,
        "lng": 121.519316,
        "ele": 954.75,
        "distanceKm": 40.33978617400591,
        "gradePct": -2.0255521402130223,
        "smoothedEle": 957.588923959657,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539411,
        "lng": 121.519002,
        "ele": 944.75,
        "distanceKm": 40.37762748917205,
        "gradePct": -0.8192482129500602,
        "smoothedEle": 958.181182999752,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53906,
        "lng": 121.518723,
        "ele": 944.5,
        "distanceKm": 40.42579118500962,
        "gradePct": -0.2614217154585921,
        "smoothedEle": 957.3811880003881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538621,
        "lng": 121.518495,
        "ele": 952,
        "distanceKm": 40.47977965147146,
        "gradePct": -0.17735787521757834,
        "smoothedEle": 956.5823635804029,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538278,
        "lng": 121.518412,
        "ele": 964.25,
        "distanceKm": 40.518832687751924,
        "gradePct": -1.0981025194766247,
        "smoothedEle": 955.0531280180122,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537949,
        "lng": 121.518005,
        "ele": 971,
        "distanceKm": 40.57390738211124,
        "gradePct": -3.1900948328391907,
        "smoothedEle": 951.7427694846324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537875,
        "lng": 121.517663,
        "ele": 967.25,
        "distanceKm": 40.609466727442786,
        "gradePct": -3.45137539064718,
        "smoothedEle": 950.7495851074293,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538082,
        "lng": 121.517396,
        "ele": 954.25,
        "distanceKm": 40.64495219661015,
        "gradePct": -3.607690450701119,
        "smoothedEle": 949.8822968424213,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538268,
        "lng": 121.517261,
        "ele": 949,
        "distanceKm": 40.66973589834253,
        "gradePct": -3.9746080676347337,
        "smoothedEle": 948.7817568758784,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538336,
        "lng": 121.517183,
        "ele": 948.5,
        "distanceKm": 40.68066398217969,
        "gradePct": -4.126138943299109,
        "smoothedEle": 948.2954571451248,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538385,
        "lng": 121.517071,
        "ele": 950,
        "distanceKm": 40.6932351553266,
        "gradePct": -4.108993383979167,
        "smoothedEle": 947.8374873061489,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538524,
        "lng": 121.516764,
        "ele": 952.25,
        "distanceKm": 40.72792270718258,
        "gradePct": -3.8823781808577014,
        "smoothedEle": 946.7420005190457,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53899,
        "lng": 121.516556,
        "ele": 930.5,
        "distanceKm": 40.78384816960189,
        "gradePct": -3.3133052342298677,
        "smoothedEle": 944.8385095054531,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53904,
        "lng": 121.516528,
        "ele": 928.5,
        "distanceKm": 40.79008776141505,
        "gradePct": -3.407018100065452,
        "smoothedEle": 944.476809893001,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539102,
        "lng": 121.516425,
        "ele": 930,
        "distanceKm": 40.80258081542994,
        "gradePct": -3.6648812233240213,
        "smoothedEle": 943.6121484803425,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53919,
        "lng": 121.516108,
        "ele": 940.75,
        "distanceKm": 40.836105719277874,
        "gradePct": -4.591953416952483,
        "smoothedEle": 940.9146037477444,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539311,
        "lng": 121.515945,
        "ele": 940.25,
        "distanceKm": 40.85738648561585,
        "gradePct": -5.234215523642359,
        "smoothedEle": 938.8617113125623,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53958,
        "lng": 121.51576,
        "ele": 926.5,
        "distanceKm": 40.892669249967945,
        "gradePct": -6.019570038964758,
        "smoothedEle": 935.8189632505228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539642,
        "lng": 121.515696,
        "ele": 923.25,
        "distanceKm": 40.90212637060171,
        "gradePct": -6.254240496606908,
        "smoothedEle": 935.048207918871,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539699,
        "lng": 121.515607,
        "ele": 920.75,
        "distanceKm": 40.9131361886213,
        "gradePct": -6.498628259524216,
        "smoothedEle": 934.211725232296,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539716,
        "lng": 121.515483,
        "ele": 922.25,
        "distanceKm": 40.92582058666817,
        "gradePct": -6.753396491005521,
        "smoothedEle": 933.301595769274,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53969,
        "lng": 121.515279,
        "ele": 929.5,
        "distanceKm": 40.9466569838386,
        "gradePct": -7.274781895977764,
        "smoothedEle": 931.5547928754662,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539633,
        "lng": 121.514916,
        "ele": 942.25,
        "distanceKm": 40.98391791266718,
        "gradePct": -8.25992941205362,
        "smoothedEle": 928.3146077823161,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539639,
        "lng": 121.514767,
        "ele": 943.75,
        "distanceKm": 40.99900421489928,
        "gradePct": -8.24775958478227,
        "smoothedEle": 927.3641707416939,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539684,
        "lng": 121.514616,
        "ele": 942,
        "distanceKm": 41.01507680195457,
        "gradePct": -7.927625257676256,
        "smoothedEle": 926.7514220721722,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539856,
        "lng": 121.514261,
        "ele": 933,
        "distanceKm": 41.055761190123704,
        "gradePct": -6.599754684212221,
        "smoothedEle": 925.8189893815718,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54011,
        "lng": 121.513863,
        "ele": 920,
        "distanceKm": 41.104938553035495,
        "gradePct": -5.871947528459858,
        "smoothedEle": 923.0906542970987,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540369,
        "lng": 121.51336,
        "ele": 913.5,
        "distanceKm": 41.16340282117041,
        "gradePct": -4.1283536255245945,
        "smoothedEle": 921.8418789704053,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540465,
        "lng": 121.513157,
        "ele": 907.5,
        "distanceKm": 41.186545377482375,
        "gradePct": -3.466453009034929,
        "smoothedEle": 921.2161714808891,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540467,
        "lng": 121.513077,
        "ele": 906.75,
        "distanceKm": 41.19464048275976,
        "gradePct": -3.510976088060495,
        "smoothedEle": 920.6171336903628,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540451,
        "lng": 121.513,
        "ele": 907,
        "distanceKm": 41.20262969667475,
        "gradePct": -3.6000108045970536,
        "smoothedEle": 920.0259318606536,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540011,
        "lng": 121.512702,
        "ele": 920.75,
        "distanceKm": 41.26009563735752,
        "gradePct": -5.52025295253626,
        "smoothedEle": 914.538010548314,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539776,
        "lng": 121.512456,
        "ele": 917.75,
        "distanceKm": 41.29617877750668,
        "gradePct": -5.931919727935651,
        "smoothedEle": 911.7128027326529,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539696,
        "lng": 121.512327,
        "ele": 911.75,
        "distanceKm": 41.31197103298905,
        "gradePct": -5.977042061928074,
        "smoothedEle": 910.986358980464,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539638,
        "lng": 121.512282,
        "ele": 910,
        "distanceKm": 41.3198648664726,
        "gradePct": -6.07429553790277,
        "smoothedEle": 910.6232426402206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539489,
        "lng": 121.512235,
        "ele": 909.25,
        "distanceKm": 41.337101526184014,
        "gradePct": -6.218926625535939,
        "smoothedEle": 909.9658117347385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539187,
        "lng": 121.512378,
        "ele": 921.5,
        "distanceKm": 41.37366523028344,
        "gradePct": -6.39816080106359,
        "smoothedEle": 908.7680916399486,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539133,
        "lng": 121.512394,
        "ele": 922.75,
        "distanceKm": 41.37988405155036,
        "gradePct": -6.4462413228365785,
        "smoothedEle": 908.5037917361046,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539067,
        "lng": 121.512391,
        "ele": 922.25,
        "distanceKm": 41.38722919795095,
        "gradePct": -6.482630565122598,
        "smoothedEle": 908.2003076359692,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539013,
        "lng": 121.512359,
        "ele": 920,
        "distanceKm": 41.394050610867474,
        "gradePct": -6.3513183664796555,
        "smoothedEle": 907.9581474774326,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538974,
        "lng": 121.512302,
        "ele": 916.5,
        "distanceKm": 41.40126510511096,
        "gradePct": -6.212439352292589,
        "smoothedEle": 907.7020329317888,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538964,
        "lng": 121.512247,
        "ele": 913.25,
        "distanceKm": 41.40693849082797,
        "gradePct": -6.0569099901889265,
        "smoothedEle": 907.500627738835,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538975,
        "lng": 121.512172,
        "ele": 909,
        "distanceKm": 41.41462284881845,
        "gradePct": -5.870857383792414,
        "smoothedEle": 907.1388869293307,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539252,
        "lng": 121.511886,
        "ele": 892.5,
        "distanceKm": 41.45687936921588,
        "gradePct": -4.760784767470728,
        "smoothedEle": 905.3235903660325,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539633,
        "lng": 121.511955,
        "ele": 891.75,
        "distanceKm": 41.49981575859197,
        "gradePct": -4.5769290864314405,
        "smoothedEle": 902.3916434298667,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540005,
        "lng": 121.512377,
        "ele": 910,
        "distanceKm": 41.55925567571379,
        "gradePct": -6.035950167450125,
        "smoothedEle": 897.168206203159,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540247,
        "lng": 121.512483,
        "ele": 908.5,
        "distanceKm": 41.58822232433967,
        "gradePct": -6.5651229750920015,
        "smoothedEle": 895.0348056989857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540387,
        "lng": 121.512471,
        "ele": 903.75,
        "distanceKm": 41.60383688520858,
        "gradePct": -6.876237440546122,
        "smoothedEle": 893.8582598572309,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540574,
        "lng": 121.51248,
        "ele": 898.75,
        "distanceKm": 41.62465028372543,
        "gradePct": -7.514299387206513,
        "smoothedEle": 891.6795198863964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540703,
        "lng": 121.512516,
        "ele": 895.75,
        "distanceKm": 41.63944943913163,
        "gradePct": -8.034915813706277,
        "smoothedEle": 890.0025305703487,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54103,
        "lng": 121.512678,
        "ele": 887.25,
        "distanceKm": 41.679332011347384,
        "gradePct": -8.716868689476133,
        "smoothedEle": 886.3566557093664,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541454,
        "lng": 121.512963,
        "ele": 878.75,
        "distanceKm": 41.73459367789833,
        "gradePct": -7.6780511999844565,
        "smoothedEle": 883.9793409682462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54184,
        "lng": 121.513209,
        "ele": 874,
        "distanceKm": 41.784206103515686,
        "gradePct": -6.697271541939546,
        "smoothedEle": 881.9360582261702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542171,
        "lng": 121.513325,
        "ele": 873.5,
        "distanceKm": 41.822836675528826,
        "gradePct": -6.310696284144821,
        "smoothedEle": 879.2479752502537,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542239,
        "lng": 121.513323,
        "ele": 873.25,
        "distanceKm": 41.83040064670492,
        "gradePct": -6.0974383562962355,
        "smoothedEle": 878.8330318476627,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542298,
        "lng": 121.513299,
        "ele": 872.75,
        "distanceKm": 41.8373958903136,
        "gradePct": -5.891720289061455,
        "smoothedEle": 878.4517910709899,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542352,
        "lng": 121.513256,
        "ele": 871.75,
        "distanceKm": 41.84481018871564,
        "gradePct": -5.731100016666378,
        "smoothedEle": 878.0502763339261,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542389,
        "lng": 121.513202,
        "ele": 870.75,
        "distanceKm": 41.85164837476529,
        "gradePct": -5.569646491333663,
        "smoothedEle": 877.7480689742606,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542414,
        "lng": 121.513125,
        "ele": 869,
        "distanceKm": 41.85991808482912,
        "gradePct": -5.367389070259756,
        "smoothedEle": 877.3966062965478,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542408,
        "lng": 121.513001,
        "ele": 866.75,
        "distanceKm": 41.872478299625534,
        "gradePct": -5.066662400401454,
        "smoothedEle": 876.8498646019256,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542374,
        "lng": 121.512916,
        "ele": 865.5,
        "distanceKm": 41.88187048430754,
        "gradePct": -4.900725939191135,
        "smoothedEle": 876.4460006605992,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542308,
        "lng": 121.512855,
        "ele": 865.5,
        "distanceKm": 41.891458454568046,
        "gradePct": -4.872407936948024,
        "smoothedEle": 876.0901694982347,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54224,
        "lng": 121.51283,
        "ele": 866,
        "distanceKm": 41.89943135908908,
        "gradePct": -4.905807400007562,
        "smoothedEle": 875.680382301396,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541961,
        "lng": 121.512842,
        "ele": 870.5,
        "distanceKm": 41.93047852219552,
        "gradePct": -5.041140113230354,
        "smoothedEle": 874.0740916010571,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541859,
        "lng": 121.512799,
        "ele": 871.75,
        "distanceKm": 41.94262579216817,
        "gradePct": -5.103481460878454,
        "smoothedEle": 873.4415762309012,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541789,
        "lng": 121.512732,
        "ele": 872.75,
        "distanceKm": 41.95294631900308,
        "gradePct": -5.161870362229974,
        "smoothedEle": 872.8997485720685,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541579,
        "lng": 121.51247,
        "ele": 875,
        "distanceKm": 41.98826743998625,
        "gradePct": -5.046021475268262,
        "smoothedEle": 871.5614098453469,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541273,
        "lng": 121.512278,
        "ele": 871,
        "distanceKm": 42.02744542163199,
        "gradePct": -4.375535067738548,
        "smoothedEle": 870.2440790865962,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540743,
        "lng": 121.512239,
        "ele": 881.25,
        "distanceKm": 42.086510696146796,
        "gradePct": -4.161562281816996,
        "smoothedEle": 867.9506673888113,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54062,
        "lng": 121.51219,
        "ele": 882.5,
        "distanceKm": 42.10105806060636,
        "gradePct": -4.124997232925351,
        "smoothedEle": 867.3462269893358,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540471,
        "lng": 121.512009,
        "ele": 877.25,
        "distanceKm": 42.125750021052305,
        "gradePct": -3.824889681136144,
        "smoothedEle": 866.6689512541709,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540297,
        "lng": 121.511688,
        "ele": 865.25,
        "distanceKm": 42.163546886329144,
        "gradePct": -2.78033088039378,
        "smoothedEle": 866.9374248769259,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540239,
        "lng": 121.51162,
        "ele": 862.5,
        "distanceKm": 42.17297577957638,
        "gradePct": -2.524591381022297,
        "smoothedEle": 867.0916373837896,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540145,
        "lng": 121.511561,
        "ele": 861.25,
        "distanceKm": 42.18501185820441,
        "gradePct": -2.201766691136382,
        "smoothedEle": 867.2812324341014,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540045,
        "lng": 121.511522,
        "ele": 861,
        "distanceKm": 42.19681039982014,
        "gradePct": -1.9613497959333308,
        "smoothedEle": 867.3514595252087,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539438,
        "lng": 121.511339,
        "ele": 859.75,
        "distanceKm": 42.26679808312612,
        "gradePct": -1.9701522976021981,
        "smoothedEle": 864.7757725486093,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538965,
        "lng": 121.511158,
        "ele": 852.25,
        "distanceKm": 42.3224888542159,
        "gradePct": -3.125162474929324,
        "smoothedEle": 860.5080768431408,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538829,
        "lng": 121.511164,
        "ele": 850.5,
        "distanceKm": 42.33762355879005,
        "gradePct": -3.7885334669534276,
        "smoothedEle": 859.1762228406153,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538655,
        "lng": 121.511283,
        "ele": 854.75,
        "distanceKm": 42.36041027558501,
        "gradePct": -4.852459699053428,
        "smoothedEle": 857.2102259261766,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538412,
        "lng": 121.51163,
        "ele": 872.25,
        "distanceKm": 42.404705859057046,
        "gradePct": -6.187691803741612,
        "smoothedEle": 854.685507198057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538321,
        "lng": 121.511733,
        "ele": 878,
        "distanceKm": 42.41922957139099,
        "gradePct": -6.240930890291931,
        "smoothedEle": 854.0445273106066,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538258,
        "lng": 121.511755,
        "ele": 878.75,
        "distanceKm": 42.4265798286461,
        "gradePct": -6.249008809594809,
        "smoothedEle": 853.7578672776576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538212,
        "lng": 121.511753,
        "ele": 878.25,
        "distanceKm": 42.431698801502456,
        "gradePct": -6.2512533231524365,
        "smoothedEle": 853.5649897927898,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538175,
        "lng": 121.511734,
        "ele": 876.75,
        "distanceKm": 42.43623977895943,
        "gradePct": -6.250567627265323,
        "smoothedEle": 853.3992441156101,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538141,
        "lng": 121.511683,
        "ele": 873.25,
        "distanceKm": 42.442635571396984,
        "gradePct": -6.256864870030451,
        "smoothedEle": 853.1512716534378,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538121,
        "lng": 121.511588,
        "ele": 867,
        "distanceKm": 42.45249903932664,
        "gradePct": -6.3959298863615235,
        "smoothedEle": 852.5101462380102,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53815,
        "lng": 121.511517,
        "ele": 862.75,
        "distanceKm": 42.4603715906095,
        "gradePct": -6.506924972524494,
        "smoothedEle": 851.9984304046244,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538242,
        "lng": 121.511392,
        "ele": 856,
        "distanceKm": 42.476635784219184,
        "gradePct": -6.540315961943939,
        "smoothedEle": 850.9412578199948,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53858,
        "lng": 121.511009,
        "ele": 837.75,
        "distanceKm": 42.53061209819061,
        "gradePct": -6.427196255415844,
        "smoothedEle": 846.9388388625345,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538677,
        "lng": 121.51092,
        "ele": 834.5,
        "distanceKm": 42.54466136184423,
        "gradePct": -6.3944854253755015,
        "smoothedEle": 845.7800430087092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538758,
        "lng": 121.510879,
        "ele": 833.5,
        "distanceKm": 42.5545771078008,
        "gradePct": -6.307872389496505,
        "smoothedEle": 845.0977563653007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538852,
        "lng": 121.510865,
        "ele": 834.5,
        "distanceKm": 42.56512494061747,
        "gradePct": -6.280452090764893,
        "smoothedEle": 844.3805996244881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538982,
        "lng": 121.510871,
        "ele": 837.25,
        "distanceKm": 42.579593036083935,
        "gradePct": -6.3095006902064155,
        "smoothedEle": 843.497863291831,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539412,
        "lng": 121.5111,
        "ele": 846.75,
        "distanceKm": 42.63272236702936,
        "gradePct": -6.4364908875418445,
        "smoothedEle": 840.6546478759741,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539726,
        "lng": 121.511149,
        "ele": 843,
        "distanceKm": 42.66798766307091,
        "gradePct": -7.3087816356864534,
        "smoothedEle": 836.8858224232597,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540153,
        "lng": 121.511065,
        "ele": 828.5,
        "distanceKm": 42.716222220454505,
        "gradePct": -8.147878982063274,
        "smoothedEle": 831.7101104009599,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540491147423996,
        "lng": 121.511074656042,
        "ele": 822.412152298464,
        "distanceKm": 42.753835233966974,
        "gradePct": -8.120563965400718,
        "smoothedEle": 828.9076755882013,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54083,
        "lng": 121.511121,
        "ele": 818.5,
        "distanceKm": 42.7918044590606,
        "gradePct": -7.671579842829209,
        "smoothedEle": 827.50120947329,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540939,
        "lng": 121.511154,
        "ele": 817.5,
        "distanceKm": 42.80437596520133,
        "gradePct": -7.57244261642848,
        "smoothedEle": 827.0267199476295,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541004,
        "lng": 121.511203,
        "ele": 818.75,
        "distanceKm": 42.81313980407678,
        "gradePct": -7.501173097245335,
        "smoothedEle": 826.7002622689402,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5411,
        "lng": 121.511352,
        "ele": 824.75,
        "distanceKm": 42.83160859082509,
        "gradePct": -7.511804727022373,
        "smoothedEle": 825.6906421402039,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541137,
        "lng": 121.511435,
        "ele": 828.5,
        "distanceKm": 42.84095794946593,
        "gradePct": -7.370851029906826,
        "smoothedEle": 825.0328036880948,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54116,
        "lng": 121.511465,
        "ele": 829.75,
        "distanceKm": 42.84492644322062,
        "gradePct": -7.313564513536799,
        "smoothedEle": 824.7232611752289,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541202,
        "lng": 121.511482,
        "ele": 829.5,
        "distanceKm": 42.84990314505054,
        "gradePct": -7.241724181040081,
        "smoothedEle": 824.3350784324953,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541562,
        "lng": 121.511481,
        "ele": 820,
        "distanceKm": 42.88993350172914,
        "gradePct": -6.970720527230768,
        "smoothedEle": 820.5895273565693,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541952,
        "lng": 121.511682,
        "ele": 818.25,
        "distanceKm": 42.93782890090795,
        "gradePct": -6.90899699537694,
        "smoothedEle": 816.2822663121591,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542235,
        "lng": 121.511855,
        "ele": 819,
        "distanceKm": 42.97383525011386,
        "gradePct": -7.1568977262229065,
        "smoothedEle": 813.8530342286053,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542599,
        "lng": 121.512024,
        "ele": 819.25,
        "distanceKm": 43.01777199659595,
        "gradePct": -7.898549084739671,
        "smoothedEle": 810.649939300709,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542956,
        "lng": 121.512121,
        "ele": 815.25,
        "distanceKm": 43.05866316521832,
        "gradePct": -7.678874659475133,
        "smoothedEle": 808.1576735899133,
        "gradeBand": "descent"
      },
      {
        "lat": 24.543058,
        "lng": 121.512075,
        "ele": 809.75,
        "distanceKm": 43.07092234639744,
        "gradePct": -7.513836360714783,
        "smoothedEle": 807.3406859825336,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54309,
        "lng": 121.51203,
        "ele": 806.5,
        "distanceKm": 43.076699795029086,
        "gradePct": -7.481819700458864,
        "smoothedEle": 806.8641363371698,
        "gradeBand": "descent"
      },
      {
        "lat": 24.543096,
        "lng": 121.511973,
        "ele": 803.5,
        "distanceKm": 43.082503733487385,
        "gradePct": -7.4584072896528895,
        "smoothedEle": 806.3678995989852,
        "gradeBand": "descent"
      },
      {
        "lat": 24.543063,
        "lng": 121.511862,
        "ele": 798.25,
        "distanceKm": 43.09431564280592,
        "gradePct": -7.450566962601507,
        "smoothedEle": 805.294304941141,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542595,
        "lng": 121.511715,
        "ele": 798.75,
        "distanceKm": 43.148437464088154,
        "gradePct": -7.211694458924808,
        "smoothedEle": 801.1431519012754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542266,
        "lng": 121.51155,
        "ele": 799,
        "distanceKm": 43.188647806438794,
        "gradePct": -7.3744794705577394,
        "smoothedEle": 798.0242041583673,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541947,
        "lng": 121.511139,
        "ele": 787.5,
        "distanceKm": 43.2432964072135,
        "gradePct": -8.248425979658915,
        "smoothedEle": 792.5974063590777,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541563,
        "lng": 121.510932,
        "ele": 788.25,
        "distanceKm": 43.290852640511865,
        "gradePct": -8.821418578593057,
        "smoothedEle": 787.9662230587151,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541235,
        "lng": 121.510608,
        "ele": 782,
        "distanceKm": 43.33988575564214,
        "gradePct": -9.107968808380845,
        "smoothedEle": 783.5831317993101,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540793,
        "lng": 121.510541,
        "ele": 788.75,
        "distanceKm": 43.38949902643249,
        "gradePct": -9.244597282046794,
        "smoothedEle": 779.4504804622738,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540733,
        "lng": 121.510521,
        "ele": 788.25,
        "distanceKm": 43.39647069805849,
        "gradePct": -9.165107994961472,
        "smoothedEle": 778.9171475828849,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540676,
        "lng": 121.510472,
        "ele": 786.5,
        "distanceKm": 43.404516651999266,
        "gradePct": -9.073370004851638,
        "smoothedEle": 778.3016321064154,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540645,
        "lng": 121.510402,
        "ele": 783.25,
        "distanceKm": 43.41239168088011,
        "gradePct": -8.983580860282572,
        "smoothedEle": 777.6991923970305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540669,
        "lng": 121.51027,
        "ele": 776.5,
        "distanceKm": 43.42600763048636,
        "gradePct": -8.830201396832523,
        "smoothedEle": 776.6538397545412,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540716,
        "lng": 121.510205,
        "ele": 773,
        "distanceKm": 43.434406472965165,
        "gradePct": -8.73653956892922,
        "smoothedEle": 776.0071288836732,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540782,
        "lng": 121.510172,
        "ele": 771,
        "distanceKm": 43.44246879819093,
        "gradePct": -8.646630498756554,
        "smoothedEle": 775.3863298412894,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540865,
        "lng": 121.510157,
        "ele": 769.75,
        "distanceKm": 43.451821874772286,
        "gradePct": -8.550512591993304,
        "smoothedEle": 774.6661429445248,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541061,
        "lng": 121.510205,
        "ele": 768.25,
        "distanceKm": 43.4741503718572,
        "gradePct": -8.228898230852447,
        "smoothedEle": 773.1349487647009,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54142,
        "lng": 121.510426,
        "ele": 770.5,
        "distanceKm": 43.51990228198343,
        "gradePct": -7.72546243844295,
        "smoothedEle": 769.9185382312418,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541795,
        "lng": 121.510593,
        "ele": 766.25,
        "distanceKm": 43.56489201215413,
        "gradePct": -8.166271516102709,
        "smoothedEle": 765.1676351991925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542188,
        "lng": 121.510704,
        "ele": 756.25,
        "distanceKm": 43.610010960170925,
        "gradePct": -8.605687056755633,
        "smoothedEle": 760.6699434177721,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542501,
        "lng": 121.511009,
        "ele": 760.5,
        "distanceKm": 43.65651982626155,
        "gradePct": -9.200108336238582,
        "smoothedEle": 755.9437605682789,
        "gradeBand": "descent"
      },
      {
        "lat": 24.543106,
        "lng": 121.5112,
        "ele": 760.5,
        "distanceKm": 43.72651196348257,
        "gradePct": -9.005042541847601,
        "smoothedEle": 751.2104726138555,
        "gradeBand": "descent"
      },
      {
        "lat": 24.543494,
        "lng": 121.51101,
        "ele": 741.75,
        "distanceKm": 43.773742427179656,
        "gradePct": -7.728592847735971,
        "smoothedEle": 748.8281940285344,
        "gradeBand": "descent"
      },
      {
        "lat": 24.543642,
        "lng": 121.51093,
        "ele": 734.5,
        "distanceKm": 43.792081093065946,
        "gradePct": -7.326404418919433,
        "smoothedEle": 747.8044771369896,
        "gradeBand": "descent"
      },
      {
        "lat": 24.543734,
        "lng": 121.510921,
        "ele": 732.25,
        "distanceKm": 43.80235146444308,
        "gradePct": -7.054631722225067,
        "smoothedEle": 747.3242184089288,
        "gradeBand": "descent"
      },
      {
        "lat": 24.543818,
        "lng": 121.510924,
        "ele": 730.75,
        "distanceKm": 43.81169677891768,
        "gradePct": -6.804485487590359,
        "smoothedEle": 746.8896612858598,
        "gradeBand": "descent"
      },
      {
        "lat": 24.543919,
        "lng": 121.510973,
        "ele": 730.75,
        "distanceKm": 43.82397248942474,
        "gradePct": -6.466173256843,
        "smoothedEle": 746.3188407472815,
        "gradeBand": "descent"
      },
      {
        "lat": 24.544205,
        "lng": 121.511375,
        "ele": 737.25,
        "distanceKm": 43.87559324409608,
        "gradePct": -4.943483429771036,
        "smoothedEle": 744.7669348407218,
        "gradeBand": "descent"
      },
      {
        "lat": 24.544458,
        "lng": 121.511692,
        "ele": 735.5,
        "distanceKm": 43.91824900717825,
        "gradePct": -4.445976007834752,
        "smoothedEle": 742.8773112437651,
        "gradeBand": "descent"
      },
      {
        "lat": 24.544503,
        "lng": 121.512234,
        "ele": 745.25,
        "distanceKm": 43.97329877372234,
        "gradePct": -4.525950116531923,
        "smoothedEle": 739.7986714315964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.544572,
        "lng": 121.512413,
        "ele": 746,
        "distanceKm": 43.99296273126746,
        "gradePct": -4.725380948014038,
        "smoothedEle": 738.312488451226,
        "gradeBand": "descent"
      },
      {
        "lat": 24.544706,
        "lng": 121.512523,
        "ele": 742.5,
        "distanceKm": 44.01155860420179,
        "gradePct": -4.82129498050931,
        "smoothedEle": 737.2534964491301,
        "gradeBand": "descent"
      },
      {
        "lat": 24.545094,
        "lng": 121.512853,
        "ele": 743,
        "distanceKm": 44.06610678575545,
        "gradePct": -4.411253754315276,
        "smoothedEle": 736.2296244553197,
        "gradeBand": "descent"
      },
      {
        "lat": 24.545532,
        "lng": 121.512984,
        "ele": 744.25,
        "distanceKm": 44.116580480847404,
        "gradePct": -4.066473785632069,
        "smoothedEle": 734.8182783442613,
        "gradeBand": "descent"
      },
      {
        "lat": 24.545965,
        "lng": 121.512835,
        "ele": 733.5,
        "distanceKm": 44.167031527526994,
        "gradePct": -4.092886094523406,
        "smoothedEle": 731.9633928933121,
        "gradeBand": "descent"
      },
      {
        "lat": 24.546327,
        "lng": 121.51272,
        "ele": 732,
        "distanceKm": 44.20893107405918,
        "gradePct": -3.944099578085912,
        "smoothedEle": 729.5149290642721,
        "gradeBand": "descent"
      },
      {
        "lat": 24.546582,
        "lng": 121.512496,
        "ele": 720.5,
        "distanceKm": 44.24522591888457,
        "gradePct": -4.841779788615655,
        "smoothedEle": 726.9379997544975,
        "gradeBand": "descent"
      },
      {
        "lat": 24.546947,
        "lng": 121.512507,
        "ele": 726.5,
        "distanceKm": 44.28582737032764,
        "gradePct": -5.7151914919688,
        "smoothedEle": 724.2478142320438,
        "gradeBand": "descent"
      },
      {
        "lat": 24.547041,
        "lng": 121.512517,
        "ele": 728.5,
        "distanceKm": 44.29632853209716,
        "gradePct": -5.926897865506391,
        "smoothedEle": 723.5307678645648,
        "gradeBand": "descent"
      },
      {
        "lat": 24.547135,
        "lng": 121.512503,
        "ele": 728.75,
        "distanceKm": 44.3068763523642,
        "gradePct": -6.186125390968951,
        "smoothedEle": 722.7173745277283,
        "gradeBand": "descent"
      },
      {
        "lat": 24.547212,
        "lng": 121.512463,
        "ele": 727.25,
        "distanceKm": 44.316346134540524,
        "gradePct": -6.465073453046351,
        "smoothedEle": 721.8946842326143,
        "gradeBand": "descent"
      },
      {
        "lat": 24.547634,
        "lng": 121.512136,
        "ele": 707.75,
        "distanceKm": 44.3737552752423,
        "gradePct": -7.9024697267662996,
        "smoothedEle": 715.7655409994532,
        "gradeBand": "descent"
      },
      {
        "lat": 24.548043,
        "lng": 121.512132,
        "ele": 709,
        "distanceKm": 44.41923586258596,
        "gradePct": -9.52565244866171,
        "smoothedEle": 709.7319855082512,
        "gradeBand": "descent"
      },
      {
        "lat": 24.548495,
        "lng": 121.512073,
        "ele": 710,
        "distanceKm": 44.46984906799342,
        "gradePct": -10.789727302933574,
        "smoothedEle": 703.7270557093244,
        "gradeBand": "descent"
      },
      {
        "lat": 24.548994,
        "lng": 121.511885,
        "ele": 710,
        "distanceKm": 44.528503199070094,
        "gradePct": -11.435997050330124,
        "smoothedEle": 697.7247715620945,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549084,
        "lng": 121.511841,
        "ele": 709.5,
        "distanceKm": 44.53945566817686,
        "gradePct": -11.503012485082145,
        "smoothedEle": 696.421427738389,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549138,
        "lng": 121.511785,
        "ele": 706.5,
        "distanceKm": 44.547710111493416,
        "gradePct": -11.566783691543838,
        "smoothedEle": 695.4126203425952,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549185,
        "lng": 121.511682,
        "ele": 700,
        "distanceKm": 44.55936529210538,
        "gradePct": -11.680933763567912,
        "smoothedEle": 693.9399840091204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549207,
        "lng": 121.511588,
        "ele": 698,
        "distanceKm": 44.56918246300059,
        "gradePct": -11.76891444515326,
        "smoothedEle": 692.7159169640742,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549154,
        "lng": 121.511215,
        "ele": 686,
        "distanceKm": 44.60736655588159,
        "gradePct": -11.467887991270295,
        "smoothedEle": 688.37081805268,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549043,
        "lng": 121.510942,
        "ele": 674.25,
        "distanceKm": 44.63761181707794,
        "gradePct": -10.734663160544319,
        "smoothedEle": 686.0824709176335,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549029,
        "lng": 121.510832,
        "ele": 670.5,
        "distanceKm": 44.6488460073125,
        "gradePct": -10.48683420480014,
        "smoothedEle": 685.2452647442801,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549075,
        "lng": 121.510678,
        "ele": 668,
        "distanceKm": 44.66524048156611,
        "gradePct": -10.086975287618172,
        "smoothedEle": 684.0998841366332,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549458,
        "lng": 121.510384,
        "ele": 677.25,
        "distanceKm": 44.71718232384235,
        "gradePct": -9.172873160460808,
        "smoothedEle": 680.5375303398747,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549739,
        "lng": 121.509838,
        "ele": 667,
        "distanceKm": 44.78063321570998,
        "gradePct": -8.158515504418402,
        "smoothedEle": 675.0958655250469,
        "gradeBand": "descent"
      },
      {
        "lat": 24.550002,
        "lng": 121.509608,
        "ele": 665.25,
        "distanceKm": 44.8180015437776,
        "gradePct": -8.043976066725007,
        "smoothedEle": 671.4782260146482,
        "gradeBand": "descent"
      },
      {
        "lat": 24.550166,
        "lng": 121.509589,
        "ele": 663.75,
        "distanceKm": 44.83633851280782,
        "gradePct": -8.235050111407983,
        "smoothedEle": 669.7087085032316,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55059,
        "lng": 121.509729,
        "ele": 670.75,
        "distanceKm": 44.88556571417202,
        "gradePct": -8.049151737419265,
        "smoothedEle": 666.6076048925376,
        "gradeBand": "descent"
      },
      {
        "lat": 24.550837,
        "lng": 121.509795,
        "ele": 674.25,
        "distanceKm": 44.91383048531615,
        "gradePct": -7.501366719534311,
        "smoothedEle": 665.7646777478589,
        "gradeBand": "descent"
      },
      {
        "lat": 24.551193,
        "lng": 121.510002,
        "ele": 675.75,
        "distanceKm": 44.95861152333804,
        "gradePct": -6.241056259428856,
        "smoothedEle": 664.5023737176734,
        "gradeBand": "descent"
      },
      {
        "lat": 24.551429,
        "lng": 121.510045,
        "ele": 671.5,
        "distanceKm": 44.98521150991383,
        "gradePct": -5.669658639887961,
        "smoothedEle": 663.3133221535898,
        "gradeBand": "descent"
      },
      {
        "lat": 24.551867,
        "lng": 121.509991,
        "ele": 657.25,
        "distanceKm": 45.03422023521276,
        "gradePct": -4.249751498230122,
        "smoothedEle": 661.4136192946952,
        "gradeBand": "descent"
      },
      {
        "lat": 24.552404,
        "lng": 121.510005,
        "ele": 649.75,
        "distanceKm": 45.09394877985054,
        "gradePct": -3.9216700167526723,
        "smoothedEle": 658.5142605840986,
        "gradeBand": "descent"
      },
      {
        "lat": 24.552844,
        "lng": 121.510112,
        "ele": 656,
        "distanceKm": 45.144057207430954,
        "gradePct": -4.869723120656248,
        "smoothedEle": 655.1731897757102,
        "gradeBand": "descent"
      },
      {
        "lat": 24.553197,
        "lng": 121.51014,
        "ele": 657.5,
        "distanceKm": 45.183411097007514,
        "gradePct": -5.912947372914091,
        "smoothedEle": 651.5679080416954,
        "gradeBand": "descent"
      },
      {
        "lat": 24.553755,
        "lng": 121.509982,
        "ele": 654,
        "distanceKm": 45.24748275300871,
        "gradePct": -8.41179275094566,
        "smoothedEle": 643.9462411685346,
        "gradeBand": "descent"
      },
      {
        "lat": 24.553996,
        "lng": 121.509607,
        "ele": 641.25,
        "distanceKm": 45.29392221357802,
        "gradePct": -9.926921142106124,
        "smoothedEle": 638.6617078868686,
        "gradeBand": "descent"
      },
      {
        "lat": 24.554264,
        "lng": 121.509339,
        "ele": 640.75,
        "distanceKm": 45.33420571252745,
        "gradePct": -10.326000581654593,
        "smoothedEle": 635.1780550045515,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55431071387404,
        "lng": 121.50885273822003,
        "ele": 632.5988464500724,
        "distanceKm": 45.38365952582128,
        "gradePct": -9.726926221263486,
        "smoothedEle": 632.0845036603178,
        "gradeBand": "descent"
      },
      {
        "lat": 24.554339,
        "lng": 121.508363,
        "ele": 625.25,
        "distanceKm": 45.43329114242214,
        "gradePct": -8.691861359606367,
        "smoothedEle": 628.2506865884822,
        "gradeBand": "descent"
      },
      {
        "lat": 24.554238,
        "lng": 121.507907,
        "ele": 609.25,
        "distanceKm": 45.48075846215167,
        "gradePct": -7.434241962077643,
        "smoothedEle": 625.2911802626215,
        "gradeBand": "descent"
      },
      {
        "lat": 24.554213,
        "lng": 121.507758,
        "ele": 604.75,
        "distanceKm": 45.49608250494255,
        "gradePct": -7.093716933857662,
        "smoothedEle": 624.2874554598188,
        "gradeBand": "descent"
      },
      {
        "lat": 24.554305,
        "lng": 121.507484,
        "ele": 604,
        "distanceKm": 45.52562263319944,
        "gradePct": -6.755778734261828,
        "smoothedEle": 622.4087485772723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.554414,
        "lng": 121.507376,
        "ele": 603.5,
        "distanceKm": 45.541938698311476,
        "gradePct": -6.6181781895711165,
        "smoothedEle": 621.457966695073,
        "gradeBand": "descent"
      },
      {
        "lat": 24.554787,
        "lng": 121.507226,
        "ele": 617,
        "distanceKm": 45.58610197268346,
        "gradePct": -7.037112006946201,
        "smoothedEle": 617.8216117141963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.554921,
        "lng": 121.507151,
        "ele": 620.75,
        "distanceKm": 45.60282180801605,
        "gradePct": -7.340196973519264,
        "smoothedEle": 615.9239104039467,
        "gradeBand": "descent"
      },
      {
        "lat": 24.554977,
        "lng": 121.507103,
        "ele": 621.5,
        "distanceKm": 45.61071752863497,
        "gradePct": -7.473417314909178,
        "smoothedEle": 615.0475611472292,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55521,
        "lng": 121.506744,
        "ele": 617.25,
        "distanceKm": 45.655322235122576,
        "gradePct": -8.282479974499262,
        "smoothedEle": 610.3121256317992,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555526,
        "lng": 121.506435,
        "ele": 625.25,
        "distanceKm": 45.70234702655423,
        "gradePct": -8.52271531421109,
        "smoothedEle": 606.8436108581947,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555731,
        "lng": 121.505934,
        "ele": 621.25,
        "distanceKm": 45.75790865692134,
        "gradePct": -7.248834522649145,
        "smoothedEle": 605.6453489879924,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555747,
        "lng": 121.505869,
        "ele": 620.25,
        "distanceKm": 45.76471913552212,
        "gradePct": -7.020034803184629,
        "smoothedEle": 605.5421811800566,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555725,
        "lng": 121.505736,
        "ele": 615.25,
        "distanceKm": 45.77839116480279,
        "gradePct": -6.566886339684479,
        "smoothedEle": 605.322738395035,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555648,
        "lng": 121.505602,
        "ele": 606,
        "distanceKm": 45.79442174572576,
        "gradePct": -6.092580617904416,
        "smoothedEle": 604.6921562380867,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555513,
        "lng": 121.505042,
        "ele": 584,
        "distanceKm": 45.853014829310126,
        "gradePct": -4.93167720532226,
        "smoothedEle": 600.6937357617425,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555517,
        "lng": 121.504918,
        "ele": 580.75,
        "distanceKm": 45.86556388683906,
        "gradePct": -5.032787768834609,
        "smoothedEle": 599.4911332341451,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555532,
        "lng": 121.504795,
        "ele": 577.5,
        "distanceKm": 45.87811523768808,
        "gradePct": -5.32297951688751,
        "smoothedEle": 597.9849711322632,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555562,
        "lng": 121.504726,
        "ele": 577.75,
        "distanceKm": 45.88585010213199,
        "gradePct": -5.489880623400701,
        "smoothedEle": 597.0806508844141,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555702,
        "lng": 121.504543,
        "ele": 584.25,
        "distanceKm": 45.91003479414393,
        "gradePct": -6.206615996496648,
        "smoothedEle": 594.2645817366999,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556052,
        "lng": 121.504149,
        "ele": 599.25,
        "distanceKm": 45.96573516532692,
        "gradePct": -8.861447865522608,
        "smoothedEle": 587.8029776716174,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556143,
        "lng": 121.503774,
        "ele": 596.75,
        "distanceKm": 46.00498854860283,
        "gradePct": -10.283765082642983,
        "smoothedEle": 583.4035423132755,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556127,
        "lng": 121.503328,
        "ele": 584,
        "distanceKm": 46.050131164496726,
        "gradePct": -11.48196374030551,
        "smoothedEle": 577.9265909682929,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556011,
        "lng": 121.50289,
        "ele": 574,
        "distanceKm": 46.09626930998261,
        "gradePct": -11.294067655500907,
        "smoothedEle": 573.2793014560995,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555835,
        "lng": 121.502576,
        "ele": 561.5,
        "distanceKm": 46.13357251802578,
        "gradePct": -10.737035404901821,
        "smoothedEle": 570.0599824028029,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555816,
        "lng": 121.502539,
        "ele": 560.75,
        "distanceKm": 46.13786983726234,
        "gradePct": -10.681156328833046,
        "smoothedEle": 569.6732236715122,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555802,
        "lng": 121.502488,
        "ele": 560,
        "distanceKm": 46.14325768479527,
        "gradePct": -10.611096850919997,
        "smoothedEle": 569.1883173935486,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555799,
        "lng": 121.502433,
        "ele": 558.5,
        "distanceKm": 46.14883028255382,
        "gradePct": -10.544405945071182,
        "smoothedEle": 568.6752417478734,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555827,
        "lng": 121.502335,
        "ele": 557.5,
        "distanceKm": 46.15921933645015,
        "gradePct": -10.484945543609875,
        "smoothedEle": 567.5889649647984,
        "gradeBand": "descent"
      },
      {
        "lat": 24.555863,
        "lng": 121.502292,
        "ele": 558.75,
        "distanceKm": 46.16513013191625,
        "gradePct": -10.459805508216698,
        "smoothedEle": 566.9535544521925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556049,
        "lng": 121.502146,
        "ele": 567.5,
        "distanceKm": 46.19054266066036,
        "gradePct": -10.48638100522438,
        "smoothedEle": 564.0498445692117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55617,
        "lng": 121.501835,
        "ele": 566.75,
        "distanceKm": 46.224753412747674,
        "gradePct": -10.976214454079312,
        "smoothedEle": 559.053130986111,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556179,
        "lng": 121.50124149999999,
        "ele": 553.75,
        "distanceKm": 46.284787132921025,
        "gradePct": -11.532934887926222,
        "smoothedEle": 551.3699801386539,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556188,
        "lng": 121.500648,
        "ele": 540.75,
        "distanceKm": 46.34482084878543,
        "gradePct": -11.680253738900097,
        "smoothedEle": 545.6838875642172,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556062,
        "lng": 121.500181,
        "ele": 532.75,
        "distanceKm": 46.39408651406092,
        "gradePct": -10.945514980322926,
        "smoothedEle": 541.6412106582668,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556066,
        "lng": 121.499953,
        "ele": 530.5,
        "distanceKm": 46.41715027806035,
        "gradePct": -10.099606056796771,
        "smoothedEle": 539.9644085299607,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55615,
        "lng": 121.499773,
        "ele": 527,
        "distanceKm": 46.43761143890587,
        "gradePct": -9.549893861364616,
        "smoothedEle": 538.3077655066029,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556419,
        "lng": 121.499529,
        "ele": 525.5,
        "distanceKm": 46.47638878226673,
        "gradePct": -8.771987004102971,
        "smoothedEle": 534.9008319909886,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55646,
        "lng": 121.499517,
        "ele": 526,
        "distanceKm": 46.481106559164196,
        "gradePct": -8.672959478433247,
        "smoothedEle": 534.4951031778066,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556502,
        "lng": 121.49952,
        "ele": 527,
        "distanceKm": 46.48578659822797,
        "gradePct": -8.591347988748502,
        "smoothedEle": 534.0926198183224,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556557,
        "lng": 121.499539,
        "ele": 528.75,
        "distanceKm": 46.492197117194756,
        "gradePct": -8.563414196326837,
        "smoothedEle": 533.5413151871785,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55662,
        "lng": 121.499585,
        "ele": 531.5,
        "distanceKm": 46.500606532748805,
        "gradePct": -8.538283085990308,
        "smoothedEle": 532.7950797290268,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556779,
        "lng": 121.49973,
        "ele": 536,
        "distanceKm": 46.523577026185976,
        "gradePct": -8.365980225622701,
        "smoothedEle": 530.9640354790148,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556868,
        "lng": 121.499761,
        "ele": 536.5,
        "distanceKm": 46.5339581553126,
        "gradePct": -8.275284580732542,
        "smoothedEle": 530.162178265996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55693,
        "lng": 121.499758,
        "ele": 536,
        "distanceKm": 46.540858923707,
        "gradePct": -8.222787032511288,
        "smoothedEle": 529.613567178641,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55729793637038,
        "lng": 121.49963834589582,
        "ele": 530.5158535580588,
        "distanceKm": 46.58352385112238,
        "gradePct": -7.821707652105661,
        "smoothedEle": 526.8645538417001,
        "gradeBand": "descent"
      },
      {
        "lat": 24.557669,
        "lng": 121.499531,
        "ele": 524.5,
        "distanceKm": 46.626188721749,
        "gradePct": -7.085506101946648,
        "smoothedEle": 525.061596464277,
        "gradeBand": "descent"
      },
      {
        "lat": 24.557842,
        "lng": 121.499524,
        "ele": 522.5,
        "distanceKm": 46.64543849344366,
        "gradePct": -6.713324032127294,
        "smoothedEle": 524.193441286063,
        "gradeBand": "descent"
      },
      {
        "lat": 24.557942,
        "lng": 121.499539,
        "ele": 521.75,
        "distanceKm": 46.65666101076959,
        "gradePct": -6.540626684513676,
        "smoothedEle": 523.5528383060125,
        "gradeBand": "descent"
      },
      {
        "lat": 24.558139,
        "lng": 121.499632,
        "ele": 522.5,
        "distanceKm": 46.680500367018,
        "gradePct": -6.268180343434349,
        "smoothedEle": 522.010875015511,
        "gradeBand": "descent"
      },
      {
        "lat": 24.558525,
        "lng": 121.499841,
        "ele": 523.75,
        "distanceKm": 46.72834418270001,
        "gradePct": -5.9406636304400715,
        "smoothedEle": 518.7144844161045,
        "gradeBand": "descent"
      },
      {
        "lat": 24.558897,
        "lng": 121.499814,
        "ele": 516.25,
        "distanceKm": 46.76979878673046,
        "gradePct": -5.79112107951116,
        "smoothedEle": 516.1666536316612,
        "gradeBand": "descent"
      },
      {
        "lat": 24.559058,
        "lng": 121.49983,
        "ele": 514,
        "distanceKm": 46.78777417788483,
        "gradePct": -5.779002668127052,
        "smoothedEle": 515.1269356792434,
        "gradeBand": "descent"
      },
      {
        "lat": 24.559117,
        "lng": 121.499862,
        "ele": 514.5,
        "distanceKm": 46.795089516648076,
        "gradePct": -5.8182911858370145,
        "smoothedEle": 514.7392227247913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.559525,
        "lng": 121.500172,
        "ele": 519.75,
        "distanceKm": 46.85023627669614,
        "gradePct": -5.7264116943806345,
        "smoothedEle": 512.4667511560074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.559575,
        "lng": 121.500188,
        "ele": 519.5,
        "distanceKm": 46.856026727340186,
        "gradePct": -5.670006248101662,
        "smoothedEle": 512.2490319339141,
        "gradeBand": "descent"
      },
      {
        "lat": 24.559693,
        "lng": 121.500163,
        "ele": 516,
        "distanceKm": 46.869389131811474,
        "gradePct": -5.522670382684488,
        "smoothedEle": 511.6842246636776,
        "gradeBand": "descent"
      },
      {
        "lat": 24.559768,
        "lng": 121.50011,
        "ele": 512.5,
        "distanceKm": 46.87930279704643,
        "gradePct": -5.439983401608125,
        "smoothedEle": 511.2083687323997,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55992,
        "lng": 121.499973,
        "ele": 504,
        "distanceKm": 46.9011577869491,
        "gradePct": -5.238856372293792,
        "smoothedEle": 510.1098868925244,
        "gradeBand": "descent"
      },
      {
        "lat": 24.560239,
        "lng": 121.499945,
        "ele": 491,
        "distanceKm": 46.93674187254227,
        "gradePct": -5.176838928463934,
        "smoothedEle": 507.84467829794426,
        "gradeBand": "descent"
      },
      {
        "lat": 24.560452,
        "lng": 121.5002,
        "ele": 492.75,
        "distanceKm": 46.97175682808212,
        "gradePct": -5.570395056894717,
        "smoothedEle": 504.91260808284875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.560591,
        "lng": 121.500661,
        "ele": 505.25,
        "distanceKm": 47.02087499191943,
        "gradePct": -6.274953290489119,
        "smoothedEle": 501.12675581586876,
        "gradeBand": "descent"
      },
      {
        "lat": 24.560642,
        "lng": 121.500812,
        "ele": 509.5,
        "distanceKm": 47.03716523388875,
        "gradePct": -6.425456835745644,
        "smoothedEle": 500.15446519588573,
        "gradeBand": "descent"
      },
      {
        "lat": 24.560807,
        "lng": 121.500989,
        "ele": 512.25,
        "distanceKm": 47.06279835404258,
        "gradePct": -6.741438634320776,
        "smoothedEle": 498.47992893388886,
        "gradeBand": "descent"
      },
      {
        "lat": 24.560879,
        "lng": 121.501015,
        "ele": 512.5,
        "distanceKm": 47.071225155419484,
        "gradePct": -6.83406104339578,
        "smoothedEle": 497.9279734437015,
        "gradeBand": "descent"
      },
      {
        "lat": 24.560942,
        "lng": 121.501017,
        "ele": 512.5,
        "distanceKm": 47.07823336497743,
        "gradePct": -6.919447428372721,
        "smoothedEle": 497.4208066149662,
        "gradeBand": "descent"
      },
      {
        "lat": 24.561065,
        "lng": 121.500987,
        "ele": 510.5,
        "distanceKm": 47.092242843109496,
        "gradePct": -7.087932681994159,
        "smoothedEle": 496.38210702090754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.561344,
        "lng": 121.500822,
        "ele": 500.5,
        "distanceKm": 47.127469426009405,
        "gradePct": -7.233955988955596,
        "smoothedEle": 493.96703090682524,
        "gradeBand": "descent"
      },
      {
        "lat": 24.561635,
        "lng": 121.500673,
        "ele": 491,
        "distanceKm": 47.16316392744439,
        "gradePct": -6.723331109240793,
        "smoothedEle": 492.18549520072156,
        "gradeBand": "descent"
      },
      {
        "lat": 24.561977,
        "lng": 121.500495,
        "ele": 481.25,
        "distanceKm": 47.205238222242464,
        "gradePct": -5.819509674874726,
        "smoothedEle": 490.69296270637255,
        "gradeBand": "descent"
      },
      {
        "lat": 24.562333,
        "lng": 121.500475,
        "ele": 480.75,
        "distanceKm": 47.2448753122252,
        "gradePct": -5.499567954254708,
        "smoothedEle": 488.65165257226175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.562527,
        "lng": 121.500518,
        "ele": 484.25,
        "distanceKm": 47.26688112612398,
        "gradePct": -5.611868343192475,
        "smoothedEle": 486.9887706761723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.562572,
        "lng": 121.500516,
        "ele": 485.25,
        "distanceKm": 47.271888991115055,
        "gradePct": -5.639636076731653,
        "smoothedEle": 486.60066113936364,
        "gradeBand": "descent"
      },
      {
        "lat": 24.562805,
        "lng": 121.500355,
        "ele": 481.75,
        "distanceKm": 47.30248904657708,
        "gradePct": -5.833080181826236,
        "smoothedEle": 484.01348393684594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.56315304118966,
        "lng": 121.50024271159462,
        "ele": 482.67868355741643,
        "distanceKm": 47.34282123031773,
        "gradePct": -6.458741906714033,
        "smoothedEle": 480.2833285883364,
        "gradeBand": "descent"
      },
      {
        "lat": 24.563512,
        "lng": 121.500167,
        "ele": 484.75,
        "distanceKm": 47.383463467101336,
        "gradePct": -7.342115982737917,
        "smoothedEle": 476.78116269158284,
        "gradeBand": "descent"
      },
      {
        "lat": 24.563778,
        "lng": 121.499971,
        "ele": 476.75,
        "distanceKm": 47.419069052905606,
        "gradePct": -8.252370338354947,
        "smoothedEle": 473.47593425051076,
        "gradeBand": "descent"
      },
      {
        "lat": 24.564233,
        "lng": 121.49969,
        "ele": 467,
        "distanceKm": 47.47709758839839,
        "gradePct": -8.949396239816721,
        "smoothedEle": 468.2614915445562,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5646655,
        "lng": 121.4996165,
        "ele": 466.49999999999994,
        "distanceKm": 47.52576050940495,
        "gradePct": -8.692138014260923,
        "smoothedEle": 464.47692743441775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.565098,
        "lng": 121.499543,
        "ele": 466,
        "distanceKm": 47.574423426493986,
        "gradePct": -8.183159235046727,
        "smoothedEle": 461.1938299374798,
        "gradeBand": "descent"
      },
      {
        "lat": 24.565172,
        "lng": 121.49952,
        "ele": 466,
        "distanceKm": 47.58297430163003,
        "gradePct": -8.094173560648185,
        "smoothedEle": 460.63496725206016,
        "gradeBand": "descent"
      },
      {
        "lat": 24.565248,
        "lng": 121.499466,
        "ele": 464.25,
        "distanceKm": 47.59303609054657,
        "gradePct": -7.976427402491226,
        "smoothedEle": 459.9396914925103,
        "gradeBand": "descent"
      },
      {
        "lat": 24.565346,
        "lng": 121.499368,
        "ele": 461,
        "distanceKm": 47.60776602977675,
        "gradePct": -7.814607507617668,
        "smoothedEle": 458.8959667808984,
        "gradeBand": "descent"
      },
      {
        "lat": 24.565791,
        "lng": 121.498813,
        "ele": 441.25,
        "distanceKm": 47.68259069325318,
        "gradePct": -7.6769576194407465,
        "smoothedEle": 452.48037203892125,
        "gradeBand": "descent"
      },
      {
        "lat": 24.565843,
        "lng": 121.498764,
        "ele": 439.5,
        "distanceKm": 47.6902057422019,
        "gradePct": -7.715904780987505,
        "smoothedEle": 451.81024773143434,
        "gradeBand": "descent"
      },
      {
        "lat": 24.565895,
        "lng": 121.498746,
        "ele": 438,
        "distanceKm": 47.69626765922458,
        "gradePct": -7.746908450583763,
        "smoothedEle": 451.2767990334381,
        "gradeBand": "descent"
      },
      {
        "lat": 24.565964,
        "lng": 121.498741,
        "ele": 436.75,
        "distanceKm": 47.70395676405232,
        "gradePct": -7.6661569510569665,
        "smoothedEle": 450.84031264820806,
        "gradeBand": "descent"
      },
      {
        "lat": 24.566065,
        "lng": 121.49878,
        "ele": 437.25,
        "distanceKm": 47.715859889134364,
        "gradePct": -7.4949245353393295,
        "smoothedEle": 450.2570595191881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.566119,
        "lng": 121.498821,
        "ele": 438.25,
        "distanceKm": 47.7231569070732,
        "gradePct": -7.389953277741975,
        "smoothedEle": 449.89950564018534,
        "gradeBand": "descent"
      },
      {
        "lat": 24.566419,
        "lng": 121.499107,
        "ele": 446.5,
        "distanceKm": 47.76730821978488,
        "gradePct": -6.817597579379042,
        "smoothedEle": 448.03867006501827,
        "gradeBand": "descent"
      },
      {
        "lat": 24.566819,
        "lng": 121.499292,
        "ele": 450,
        "distanceKm": 47.81556089491896,
        "gradePct": -5.963767359367808,
        "smoothedEle": 446.3000869805101,
        "gradeBand": "descent"
      },
      {
        "lat": 24.56719,
        "lng": 121.499295,
        "ele": 447.25,
        "distanceKm": 47.85681538526516,
        "gradePct": -4.802268566558712,
        "smoothedEle": 445.0858539385376,
        "gradeBand": "descent"
      },
      {
        "lat": 24.567604,
        "lng": 121.499185,
        "ele": 435.75,
        "distanceKm": 47.90417514450802,
        "gradePct": -3.095760924699944,
        "smoothedEle": 444.63809015647917,
        "gradeBand": "descent"
      },
      {
        "lat": 24.567745,
        "lng": 121.499185,
        "ele": 432.5,
        "distanceKm": 47.91985365082086,
        "gradePct": -2.4725402987644363,
        "smoothedEle": 445.1162845990209,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5678,
        "lng": 121.499208,
        "ele": 432.75,
        "distanceKm": 47.92639675606021,
        "gradePct": -2.2235535676814178,
        "smoothedEle": 445.31584930882093,
        "gradeBand": "descent"
      },
      {
        "lat": 24.56812,
        "lng": 121.499433,
        "ele": 442.5,
        "distanceKm": 47.96863239324395,
        "gradePct": -0.6784865856582388,
        "smoothedEle": 446.63398584824176,
        "gradeBand": "descent"
      },
      {
        "lat": 24.568432,
        "lng": 121.49956,
        "ele": 447.25,
        "distanceKm": 48.00562624067899,
        "gradePct": 0.08451612033522217,
        "smoothedEle": 446.8270728841444,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.568966,
        "lng": 121.499681,
        "ele": 449,
        "distanceKm": 48.0662521313393,
        "gradePct": -0.6612180458034707,
        "smoothedEle": 443.67419794421085,
        "gradeBand": "descent"
      },
      {
        "lat": 24.569429,
        "lng": 121.499729,
        "ele": 451.75,
        "distanceKm": 48.11796378300681,
        "gradePct": -2.6156050415616416,
        "smoothedEle": 439.8274335475688,
        "gradeBand": "descent"
      },
      {
        "lat": 24.569942,
        "lng": 121.499738,
        "ele": 456.5,
        "distanceKm": 48.17501411954421,
        "gradePct": -5.647095210262056,
        "smoothedEle": 435.37310444261306,
        "gradeBand": "descent"
      },
      {
        "lat": 24.570114,
        "lng": 121.499723,
        "ele": 455.5,
        "distanceKm": 48.19419973392122,
        "gradePct": -6.471708156574856,
        "smoothedEle": 433.8240166450729,
        "gradeBand": "descent"
      },
      {
        "lat": 24.570188,
        "lng": 121.499701,
        "ele": 453.75,
        "distanceKm": 48.202723631813654,
        "gradePct": -6.895746828105461,
        "smoothedEle": 433.02042924540774,
        "gradeBand": "descent"
      },
      {
        "lat": 24.570377,
        "lng": 121.499571,
        "ele": 445.5,
        "distanceKm": 48.22751266320687,
        "gradePct": -7.62111454944,
        "smoothedEle": 430.44663117739356,
        "gradeBand": "descent"
      },
      {
        "lat": 24.570623,
        "lng": 121.499178,
        "ele": 423.75,
        "distanceKm": 48.27575912449589,
        "gradePct": -8.998201581108745,
        "smoothedEle": 424.9705815792697,
        "gradeBand": "descent"
      },
      {
        "lat": 24.571082,
        "lng": 121.498841,
        "ele": 412.5,
        "distanceKm": 48.33712968067354,
        "gradePct": -10.429266492551784,
        "smoothedEle": 417.47248141788094,
        "gradeBand": "descent"
      },
      {
        "lat": 24.571189,
        "lng": 121.498777,
        "ele": 410.75,
        "distanceKm": 48.35067393834411,
        "gradePct": -10.665933239232734,
        "smoothedEle": 415.94165054924105,
        "gradeBand": "descent"
      },
      {
        "lat": 24.571258,
        "lng": 121.498699,
        "ele": 408.25,
        "distanceKm": 48.361677767522714,
        "gradePct": -10.825064152515768,
        "smoothedEle": 414.7642408271303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.571298,
        "lng": 121.498571,
        "ele": 403.25,
        "distanceKm": 48.375364719424816,
        "gradePct": -11.022529640029788,
        "smoothedEle": 413.2997369736054,
        "gradeBand": "descent"
      },
      {
        "lat": 24.57132204179328,
        "lng": 121.49808732164009,
        "ele": 392.37892386191953,
        "distanceKm": 48.42435005679401,
        "gradePct": -11.623610088565647,
        "smoothedEle": 407.5277784199565,
        "gradeBand": "descent"
      },
      {
        "lat": 24.57133036119552,
        "lng": 121.49760221442672,
        "ele": 390.58594924127976,
        "distanceKm": 48.47341560150651,
        "gradePct": -11.845387998037923,
        "smoothedEle": 401.5457991458579,
        "gradeBand": "descent"
      },
      {
        "lat": 24.57133868059776,
        "lng": 121.49711710721337,
        "ele": 388.79297462063977,
        "distanceKm": 48.52248114296124,
        "gradePct": -11.069588860276367,
        "smoothedEle": 397.12302518309696,
        "gradeBand": "descent"
      },
      {
        "lat": 24.571347,
        "lng": 121.496632,
        "ele": 387,
        "distanceKm": 48.571546681161095,
        "gradePct": -9.805878706800772,
        "smoothedEle": 394.096509654222,
        "gradeBand": "descent"
      },
      {
        "lat": 24.571415,
        "lng": 121.496235,
        "ele": 398.25,
        "distanceKm": 48.61239941962034,
        "gradePct": -8.421467453007972,
        "smoothedEle": 392.09299105687285,
        "gradeBand": "descent"
      },
      {
        "lat": 24.571775,
        "lng": 121.496364,
        "ele": 395,
        "distanceKm": 48.65450163159257,
        "gradePct": -6.659445152519415,
        "smoothedEle": 390.53286461241214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.572177318136468,
        "lng": 121.49638489691424,
        "ele": 392.36074521254346,
        "distanceKm": 48.6992873124454,
        "gradePct": -4.749918954242606,
        "smoothedEle": 389.71388202006364,
        "gradeBand": "descent"
      },
      {
        "lat": 24.572582159068233,
        "lng": 121.49634394845712,
        "ele": 391.30537260627165,
        "distanceKm": 48.74449368561731,
        "gradePct": -3.4330416800501182,
        "smoothedEle": 388.8991394912004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.572987,
        "lng": 121.496303,
        "ele": 390.25,
        "distanceKm": 48.78970005756425,
        "gradePct": -2.5798378392707577,
        "smoothedEle": 388.04654782596066,
        "gradeBand": "descent"
      },
      {
        "lat": 24.573323,
        "lng": 121.49629,
        "ele": 387.25,
        "distanceKm": 48.827084725606866,
        "gradePct": -1.6109740124032952,
        "smoothedEle": 388.3268689105334,
        "gradeBand": "descent"
      },
      {
        "lat": 24.573848,
        "lng": 121.496331,
        "ele": 384.25,
        "distanceKm": 48.88560918897302,
        "gradePct": -0.7252184090439368,
        "smoothedEle": 388.51357302869525,
        "gradeBand": "descent"
      },
      {
        "lat": 24.574427,
        "lng": 121.496196,
        "ele": 382.75,
        "distanceKm": 48.95142258965111,
        "gradePct": -0.21562581624442295,
        "smoothedEle": 388.33720880675406,
        "gradeBand": "descent"
      },
      {
        "lat": 24.574864,
        "lng": 121.495976,
        "ele": 379.5,
        "distanceKm": 49.00486544689168,
        "gradePct": 0.1482450904561553,
        "smoothedEle": 388.4567524948386,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.575294,
        "lng": 121.495462,
        "ele": 391.25,
        "distanceKm": 49.07548968805005,
        "gradePct": 0.8579039795229327,
        "smoothedEle": 390.1970978639431,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.575447,
        "lng": 121.495317,
        "ele": 396.75,
        "distanceKm": 49.097949284024516,
        "gradePct": 1.0828926336144054,
        "smoothedEle": 390.6462897834325,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.575638,
        "lng": 121.495249,
        "ele": 399,
        "distanceKm": 49.12027298126572,
        "gradePct": 1.4259730315525385,
        "smoothedEle": 391.2726283933371,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.576293,
        "lng": 121.495199,
        "ele": 389.75,
        "distanceKm": 49.19328104676783,
        "gradePct": 2.9448279539238778,
        "smoothedEle": 394.3204958301453,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.576355,
        "lng": 121.495164,
        "ele": 389,
        "distanceKm": 49.20103055665915,
        "gradePct": 3.137647963115126,
        "smoothedEle": 394.72347034449393,
        "gradeBand": "hard"
      },
      {
        "lat": 24.576419,
        "lng": 121.495056,
        "ele": 390.25,
        "distanceKm": 49.21406572526048,
        "gradePct": 3.358915192389171,
        "smoothedEle": 395.4012991117633,
        "gradeBand": "hard"
      },
      {
        "lat": 24.576446,
        "lng": 121.494939,
        "ele": 392,
        "distanceKm": 49.226271936064734,
        "gradePct": 3.5258819780855,
        "smoothedEle": 396.0360220735844,
        "gradeBand": "hard"
      },
      {
        "lat": 24.576454,
        "lng": 121.494665,
        "ele": 397.75,
        "distanceKm": 49.2539935305265,
        "gradePct": 4.035906682372626,
        "smoothedEle": 397.7391959696493,
        "gradeBand": "hard"
      },
      {
        "lat": 24.576433,
        "lng": 121.494454,
        "ele": 403.5,
        "distanceKm": 49.27545758593108,
        "gradePct": 4.434844384204745,
        "smoothedEle": 399.06599556156493,
        "gradeBand": "hard"
      },
      {
        "lat": 24.57645,
        "lng": 121.494354,
        "ele": 404.75,
        "distanceKm": 49.28574491251099,
        "gradePct": 4.640516401598822,
        "smoothedEle": 399.68323515635973,
        "gradeBand": "hard"
      },
      {
        "lat": 24.576698,
        "lng": 121.493919,
        "ele": 397.25,
        "distanceKm": 49.337662037462614,
        "gradePct": 4.447337203574158,
        "smoothedEle": 400.8932436643453,
        "gradeBand": "hard"
      },
      {
        "lat": 24.576747,
        "lng": 121.493418,
        "ele": 404,
        "distanceKm": 49.38861599599832,
        "gradePct": 3.562956273436618,
        "smoothedEle": 401.25165652003324,
        "gradeBand": "hard"
      },
      {
        "lat": 24.576799,
        "lng": 121.493143,
        "ele": 404.5,
        "distanceKm": 49.417019138910476,
        "gradePct": 3.0597554317624107,
        "smoothedEle": 401.6743874850877,
        "gradeBand": "hard"
      },
      {
        "lat": 24.576777,
        "lng": 121.492739,
        "ele": 408.75,
        "distanceKm": 49.45794533161476,
        "gradePct": 2.586340822439317,
        "smoothedEle": 403.15615801598983,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.576817789070493,
        "lng": 121.49232407924929,
        "ele": 410.626537609002,
        "distanceKm": 49.500147096926874,
        "gradePct": 2.3121418132930627,
        "smoothedEle": 404.64318385864163,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.576925,
        "lng": 121.491923,
        "ele": 409.5,
        "distanceKm": 49.54242049417639,
        "gradePct": 2.0929912016378283,
        "smoothedEle": 405.11269730535133,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 49.54242049417639,
      "elevationGainM": 1643.2824582199864,
      "elevationLossM": 1643.499195057048,
      "minimumElevationM": 379.5,
      "maximumElevationM": 1982.5,
      "maximumSustainedGradePct": 11.967519068609406
    },
    "climbs": [
      {
        "startIndex": 7,
        "endIndex": 868,
        "startDistanceKm": 0.3272700338095969,
        "endDistanceKm": 23.258678290210533,
        "distanceKm": 22.931408256400935,
        "gainM": 1579.6546331733728,
        "averageGradePct": 6.888607169306479,
        "maximumGradePct": 11.967519068609406
      },
      {
        "startIndex": 877,
        "endIndex": 987,
        "startDistanceKm": 23.62879430809928,
        "endDistanceKm": 26.26260971735605,
        "distanceKm": 2.633815409256769,
        "gainM": 43.890599741819415,
        "averageGradePct": 1.666426568375375,
        "maximumGradePct": 6.9799593104585504
      }
    ]
  },
  "yilan-coast": {
    "routeId": "yilan-coast",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T16:58:28.707Z",
      "reviewStatus": "approved",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "宜蘭濱海與平原道路整體平緩，預設100公尺分析為爬升94公尺、最大持續坡度3.7%。比較500/200、750/300、1000/500公尺後，爬升依序為46、34、29公尺，最大持續坡度依序為1.6%、1.2%、1.1%；宜蘭縣官方資料記載濱海北線約14公里，本環線含台2海岸、縣道192、台9與台2庚共25.5公里，500/200可抑制橋梁短尖峰又保留平原緩坡，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://travel.yilan.gov.tw/zh-tw/attraction/341/",
        "referenceLabel": "宜蘭縣官方濱海自行車北線約14公里資料"
      },
      "reviewedAt": "2026-07-29T17:14:00.000Z",
      "reviewerNote": "研究景點版含2074公尺service與114公尺track，後續主線版仍在頭城分流與起終點導入3810公尺service，均已棄用。核准環線依序使用台2南向、竹安橋、縣道192、台9北向與台2庚返回頭城，所有控制點均落在目前primary或secondary主線；raw messages的motorway、trunk、tunnel、service、track、footway、pedestrian、path、steps、private、access禁制與bicycle=no全為0。live OSM五點取樣分別貼合台2、縣道192、台9與台2庚，5/5在0.1公尺內且禁止道路為0。最終500/200公尺bundle為25.5公里、爬升48公尺、最大1.6%；路線不進海灘、沙丘、防風林碎石路或交流道。"
    },
    "waypoints": [
      {
        "name": "頭城台2與台2庚路口",
        "lat": 24.8543418,
        "lng": 121.8225623,
        "role": "start"
      },
      {
        "name": "竹安溪台2合法道路橋",
        "lat": 24.8403276,
        "lng": 121.8239553,
        "role": "via"
      },
      {
        "name": "大福台2與縣道192路口",
        "lat": 24.8004232,
        "lng": 121.8167331,
        "role": "via"
      },
      {
        "name": "永美路口縣道192主線",
        "lat": 24.7780459,
        "lng": 121.7888989,
        "role": "via"
      },
      {
        "name": "美宜路縣道192主線",
        "lat": 24.7691222,
        "lng": 121.7690377,
        "role": "via"
      },
      {
        "name": "礁溪台9主線",
        "lat": 24.8278539,
        "lng": 121.7726094,
        "role": "via"
      },
      {
        "name": "二城台9與台2庚路口",
        "lat": 24.8383816,
        "lng": 121.790869,
        "role": "via"
      },
      {
        "name": "頭城台2與台2庚路口",
        "lat": 24.8543418,
        "lng": 121.8225623,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.854342,
        "lng": 121.822562,
        "ele": 10.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 9.235530179691299,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.854121,
        "lng": 121.822965,
        "ele": 10.5,
        "distanceKm": 0.04751018391692057,
        "gradePct": -0.9439147819561449,
        "smoothedEle": 8.787074530764935,
        "gradeBand": "descent"
      },
      {
        "lat": 24.853927,
        "lng": 121.823328,
        "ele": 10.25,
        "distanceKm": 0.09001621962836623,
        "gradePct": -0.8701686605881196,
        "smoothedEle": 8.452237247039085,
        "gradeBand": "descent"
      },
      {
        "lat": 24.853829,
        "lng": 121.823367,
        "ele": 10,
        "distanceKm": 0.10160203471423612,
        "gradePct": -0.850472960689163,
        "smoothedEle": 8.371432346936704,
        "gradeBand": "descent"
      },
      {
        "lat": 24.85342,
        "lng": 121.823268,
        "ele": 9.25,
        "distanceKm": 0.14816484948327507,
        "gradePct": -0.7564480954283432,
        "smoothedEle": 8.114739997680793,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8530755,
        "lng": 121.8231435,
        "ele": 8.125,
        "distanceKm": 0.18847861110263633,
        "gradePct": -0.6737104543667495,
        "smoothedEle": 7.965730072447589,
        "gradeBand": "descent"
      },
      {
        "lat": 24.852731,
        "lng": 121.823019,
        "ele": 7,
        "distanceKm": 0.2287923836230471,
        "gradePct": -0.5501938137043645,
        "smoothedEle": 7.863366987187108,
        "gradeBand": "descent"
      },
      {
        "lat": 24.852178,
        "lng": 121.822814,
        "ele": 6.25,
        "distanceKm": 0.2936688572729149,
        "gradePct": -0.4690676019099236,
        "smoothedEle": 7.48862683773819,
        "gradeBand": "descent"
      },
      {
        "lat": 24.851795,
        "lng": 121.822682,
        "ele": 6,
        "distanceKm": 0.338290567617412,
        "gradePct": -0.5284930260927387,
        "smoothedEle": 7.112189069787862,
        "gradeBand": "descent"
      },
      {
        "lat": 24.851316,
        "lng": 121.822592,
        "ele": 6.25,
        "distanceKm": 0.39232157532727374,
        "gradePct": -0.6869513842360582,
        "smoothedEle": 6.582069406116116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.850843,
        "lng": 121.82253,
        "ele": 6.75,
        "distanceKm": 0.4452875721106849,
        "gradePct": -0.8699911120579125,
        "smoothedEle": 6.028105086922331,
        "gradeBand": "descent"
      },
      {
        "lat": 24.850437499999998,
        "lng": 121.82253,
        "ele": 6.75,
        "distanceKm": 0.49037717714571,
        "gradePct": -0.9785917680455793,
        "smoothedEle": 5.550456738004008,
        "gradeBand": "descent"
      },
      {
        "lat": 24.850032,
        "lng": 121.82253,
        "ele": 6.75,
        "distanceKm": 0.53546678218034,
        "gradePct": -0.9757532780493325,
        "smoothedEle": 5.184504538414277,
        "gradeBand": "descent"
      },
      {
        "lat": 24.849703,
        "lng": 121.82258,
        "ele": 6,
        "distanceKm": 0.5723961886691699,
        "gradePct": -0.9129859272011108,
        "smoothedEle": 4.951593429385552,
        "gradeBand": "descent"
      },
      {
        "lat": 24.849259,
        "lng": 121.822632,
        "ele": 4.666666666666667,
        "distanceKm": 0.622044820441365,
        "gradePct": -0.7980206783229612,
        "smoothedEle": 4.675156580153967,
        "gradeBand": "descent"
      },
      {
        "lat": 24.848815000000002,
        "lng": 121.82268400000001,
        "ele": 3.3333333333333335,
        "distanceKm": 0.6716934542031997,
        "gradePct": -0.6888163455225826,
        "smoothedEle": 4.370746592703148,
        "gradeBand": "descent"
      },
      {
        "lat": 24.848371,
        "lng": 121.822736,
        "ele": 2,
        "distanceKm": 0.7213420899551303,
        "gradePct": -0.6622727397319068,
        "smoothedEle": 3.974596616417946,
        "gradeBand": "descent"
      },
      {
        "lat": 24.847921,
        "lng": 121.822804,
        "ele": 2.624999999999999,
        "distanceKm": 0.7718481013526981,
        "gradePct": -0.7301303342526606,
        "smoothedEle": 3.4947895081410523,
        "gradeBand": "descent"
      },
      {
        "lat": 24.847471,
        "lng": 121.822872,
        "ele": 3.25,
        "distanceKm": 0.8223541161403835,
        "gradePct": -0.8153219429719241,
        "smoothedEle": 3.0426163137314846,
        "gradeBand": "descent"
      },
      {
        "lat": 24.847079,
        "lng": 121.822927,
        "ele": 3.25,
        "distanceKm": 0.8662944499599614,
        "gradePct": -0.8309459679032574,
        "smoothedEle": 2.7419574975873773,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84672965359309,
        "lng": 121.82292705871303,
        "ele": 3.1995596522372014,
        "distanceKm": 0.9051400521573876,
        "gradePct": -0.7735185482696283,
        "smoothedEle": 2.5568367254280515,
        "gradeBand": "descent"
      },
      {
        "lat": 24.846376,
        "lng": 121.822987,
        "ele": 2.75,
        "distanceKm": 0.9449269900249928,
        "gradePct": -0.6499009206532407,
        "smoothedEle": 2.450738224447771,
        "gradeBand": "descent"
      },
      {
        "lat": 24.845935,
        "lng": 121.823094,
        "ele": 2,
        "distanceKm": 0.9951385113692862,
        "gradePct": -0.36694334101470927,
        "smoothedEle": 2.5523870851532515,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84559085430087,
        "lng": 121.82314125135176,
        "ele": 2,
        "distanceKm": 1.0337016920407427,
        "gradePct": -0.15554096317835958,
        "smoothedEle": 2.6538893528532643,
        "gradeBand": "descent"
      },
      {
        "lat": 24.845246,
        "lng": 121.823182,
        "ele": 2,
        "distanceKm": 1.0722676018085,
        "gradePct": 0.018354148650997496,
        "smoothedEle": 2.7502004237823274,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.844685,
        "lng": 121.823231,
        "ele": 2,
        "distanceKm": 1.1348436774294108,
        "gradePct": 0.19220593684183657,
        "smoothedEle": 2.8620389317196624,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84419,
        "lng": 121.823233,
        "ele": 2,
        "distanceKm": 1.1898856121058556,
        "gradePct": 0.19707308145711094,
        "smoothedEle": 2.9358992100771255,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.843787895997554,
        "lng": 121.82317113319048,
        "ele": 3.6201155582732403,
        "distanceKm": 1.2350312913236137,
        "gradePct": 0.19573930183803584,
        "smoothedEle": 3.0486883794523516,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84339194799878,
        "lng": 121.82306906659524,
        "ele": 4.0600577791366215,
        "distanceKm": 1.2802473042484,
        "gradePct": 0.22124117604639953,
        "smoothedEle": 3.206944424689104,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842996,
        "lng": 121.822967,
        "ele": 4.5,
        "distanceKm": 1.3254633246787915,
        "gradePct": 0.25996325625170097,
        "smoothedEle": 3.365200496195474,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842463,
        "lng": 121.82295,
        "ele": 3.75,
        "distanceKm": 1.3847551220267735,
        "gradePct": 0.3218535677237194,
        "smoothedEle": 3.572721786913412,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842099,
        "lng": 121.823006,
        "ele": 3.75,
        "distanceKm": 1.4256226782520713,
        "gradePct": 0.34528787526623417,
        "smoothedEle": 3.715758233701954,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.841729,
        "lng": 121.823142,
        "ele": 3.75,
        "distanceKm": 1.4689932502273757,
        "gradePct": 0.337307605265594,
        "smoothedEle": 3.842170446146707,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.841196,
        "lng": 121.823442,
        "ele": 3.75,
        "distanceKm": 1.5355437395331586,
        "gradePct": 0.21556610119753145,
        "smoothedEle": 3.8316141505808217,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840761999999998,
        "lng": 121.8236985,
        "ele": 3.75,
        "distanceKm": 1.59030513230188,
        "gradePct": 0.1269570036767958,
        "smoothedEle": 3.846060830229876,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840328,
        "lng": 121.823955,
        "ele": 3.75,
        "distanceKm": 1.6450665679664092,
        "gradePct": 0.10988314915651846,
        "smoothedEle": 3.9921976401935226,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839978,
        "lng": 121.824152,
        "ele": 3.75,
        "distanceKm": 1.6887678215304105,
        "gradePct": 0.17394913587410415,
        "smoothedEle": 4.186932058472257,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839624,
        "lng": 121.824338,
        "ele": 3.5,
        "distanceKm": 1.7323765509731743,
        "gradePct": 0.3028143614608541,
        "smoothedEle": 4.437745255662313,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839221,
        "lng": 121.824456,
        "ele": 4,
        "distanceKm": 1.7787431542228487,
        "gradePct": 0.4338629656504206,
        "smoothedEle": 4.710736579916042,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.838761,
        "lng": 121.824464,
        "ele": 4.75,
        "distanceKm": 1.829899261081315,
        "gradePct": 0.5201865626130872,
        "smoothedEle": 4.992095167637606,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.838277140655872,
        "lng": 121.82438946878743,
        "ele": 5.523859544394215,
        "distanceKm": 1.884225152549076,
        "gradePct": 0.5620989074518673,
        "smoothedEle": 5.290887570710292,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837797,
        "lng": 121.824285,
        "ele": 6.25,
        "distanceKm": 1.9386452442783184,
        "gradePct": 0.5519145620862751,
        "smoothedEle": 5.578482386175047,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837416,
        "lng": 121.824176,
        "ele": 7,
        "distanceKm": 1.9824151243663806,
        "gradePct": 0.5364534155095143,
        "smoothedEle": 5.803839246724496,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837112,
        "lng": 121.824057,
        "ele": 6.5,
        "distanceKm": 2.0182879903410065,
        "gradePct": 0.5200675435228026,
        "smoothedEle": 5.968368265611515,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.836594217545674,
        "lng": 121.82382143256648,
        "ele": 6.5,
        "distanceKm": 2.0805771103409567,
        "gradePct": 0.4088763643002116,
        "smoothedEle": 6.088576067166059,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.836079,
        "lng": 121.823579,
        "ele": 6.5,
        "distanceKm": 2.142871532566183,
        "gradePct": 0.21655431846932602,
        "smoothedEle": 6.0333508053752425,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835705,
        "lng": 121.823417,
        "ele": 6.25,
        "distanceKm": 2.1875561998061404,
        "gradePct": 0.044714221301480186,
        "smoothedEle": 5.9168469622722535,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835348012262905,
        "lng": 121.82325546690981,
        "ele": 6.155695753301678,
        "distanceKm": 2.230468002510964,
        "gradePct": -0.12756238453029922,
        "smoothedEle": 5.73674892552245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834991,
        "lng": 121.823094,
        "ele": 5.75,
        "distanceKm": 2.273379809544495,
        "gradePct": -0.2598606423903467,
        "smoothedEle": 5.554965170429535,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83466809940881,
        "lng": 121.82295880708088,
        "ele": 4.981162050987509,
        "distanceKm": 2.3117892643493265,
        "gradePct": -0.31598457374614436,
        "smoothedEle": 5.428936715591365,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834338,
        "lng": 121.822846,
        "ele": 4.75,
        "distanceKm": 2.350219401211347,
        "gradePct": -0.3395952104269672,
        "smoothedEle": 5.33500269601978,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833935242502175,
        "lng": 121.82275688662737,
        "ele": 4.75,
        "distanceKm": 2.3958979850919113,
        "gradePct": -0.31415564489683295,
        "smoothedEle": 5.2535257437815845,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833533,
        "lng": 121.822665,
        "ele": 4.5,
        "distanceKm": 2.44157641877808,
        "gradePct": -0.2422598793921502,
        "smoothedEle": 5.205171497491229,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833217,
        "lng": 121.822595,
        "ele": 4.5,
        "distanceKm": 2.4774170820964203,
        "gradePct": -0.16653765332777923,
        "smoothedEle": 5.2086428332169135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832768473334504,
        "lng": 121.8225688330466,
        "ele": 4.732173577758266,
        "distanceKm": 2.5273608955928446,
        "gradePct": -0.07608663448635239,
        "smoothedEle": 5.23870201792165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832319,
        "lng": 121.822564,
        "ele": 5.25,
        "distanceKm": 2.577342498740744,
        "gradePct": 0.01651413163918701,
        "smoothedEle": 5.319651453319317,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83197093504881,
        "lng": 121.82251407026311,
        "ele": 5.568455237470673,
        "distanceKm": 2.6163722108377763,
        "gradePct": 0.08218221953219544,
        "smoothedEle": 5.396216590421118,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.831626,
        "lng": 121.82244,
        "ele": 5.75,
        "distanceKm": 2.655448856965643,
        "gradePct": 0.12490601791524758,
        "smoothedEle": 5.456327143786048,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.831114,
        "lng": 121.822316,
        "ele": 6.25,
        "distanceKm": 2.7137397247046424,
        "gradePct": 0.1531361201562683,
        "smoothedEle": 5.536776220019653,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.830715328003215,
        "lng": 121.82221014912244,
        "ele": 6.25,
        "distanceKm": 2.759338908630904,
        "gradePct": 0.14160608061962676,
        "smoothedEle": 5.5737052770356605,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.830316166686796,
        "lng": 121.82210656213788,
        "ele": 6.001364412340492,
        "distanceKm": 2.804938082190384,
        "gradePct": 0.10783627003908638,
        "smoothedEle": 5.589458638945811,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829917,
        "lng": 121.822003,
        "ele": 5.75,
        "distanceKm": 2.8505372699790428,
        "gradePct": 0.08239049899004718,
        "smoothedEle": 5.613552779652965,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829428999999998,
        "lng": 121.82187866666666,
        "ele": 5.416666666666666,
        "distanceKm": 2.906232227279829,
        "gradePct": 0.07568981677535984,
        "smoothedEle": 5.677794518148901,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828941,
        "lng": 121.82175433333333,
        "ele": 5.083333333333334,
        "distanceKm": 2.9619271957198055,
        "gradePct": 0.08218555927005548,
        "smoothedEle": 5.738970583344014,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828453,
        "lng": 121.82163,
        "ele": 4.75,
        "distanceKm": 3.0176221752995787,
        "gradePct": 0.09614901700418024,
        "smoothedEle": 5.788458816982088,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828089,
        "lng": 121.821564,
        "ele": 5.25,
        "distanceKm": 3.0586415517346492,
        "gradePct": 0.10987833959585015,
        "smoothedEle": 5.842657399384943,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82766,
        "lng": 121.821475,
        "ele": 6,
        "distanceKm": 3.1071824319055397,
        "gradePct": 0.12565037626075515,
        "smoothedEle": 5.930138987576254,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.827207,
        "lng": 121.821396,
        "ele": 6.5,
        "distanceKm": 3.1581808261579445,
        "gradePct": 0.13930881453596808,
        "smoothedEle": 6.013473152205289,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82677724685365,
        "lng": 121.8213274271007,
        "ele": 6.5838827965756,
        "distanceKm": 3.206465746484938,
        "gradePct": 0.13350963504988245,
        "smoothedEle": 6.045564950208274,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.826348,
        "lng": 121.821255,
        "ele": 6.75,
        "distanceKm": 3.254752300336242,
        "gradePct": 0.10058370805689244,
        "smoothedEle": 6.038685977936542,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.825952,
        "lng": 121.82114949999999,
        "ele": 6.75,
        "distanceKm": 3.3000544537981096,
        "gradePct": 0.06184263369688109,
        "smoothedEle": 6.040978034562896,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.825556,
        "lng": 121.821044,
        "ele": 6.75,
        "distanceKm": 3.345356615260688,
        "gradePct": 0.01266330745542409,
        "smoothedEle": 6.017844305325316,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.825096615645613,
        "lng": 121.82089158236437,
        "ele": 6.217138119033424,
        "distanceKm": 3.3987036078526414,
        "gradePct": -0.03808270396693689,
        "smoothedEle": 5.964240561305354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824637,
        "lng": 121.82074,
        "ele": 5.25,
        "distanceKm": 3.452051010128943,
        "gradePct": -0.056488074799545936,
        "smoothedEle": 5.92609465804576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82429,
        "lng": 121.820657,
        "ele": 4.75,
        "distanceKm": 3.4915344569971425,
        "gradePct": -0.05733342830877803,
        "smoothedEle": 5.925880109803279,
        "gradeBand": "descent"
      },
      {
        "lat": 24.823751,
        "lng": 121.820603,
        "ele": 5,
        "distanceKm": 3.551715862969679,
        "gradePct": -0.008194958473019202,
        "smoothedEle": 5.995064534522667,
        "gradeBand": "descent"
      },
      {
        "lat": 24.823404,
        "lng": 121.8205635,
        "ele": 5.375,
        "distanceKm": 3.5905059364727623,
        "gradePct": 0.05008349731319579,
        "smoothedEle": 6.072644681528834,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.823057,
        "lng": 121.820524,
        "ele": 5.75,
        "distanceKm": 3.6292960111235106,
        "gradePct": 0.10771521986830147,
        "smoothedEle": 6.157795992965557,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822705406366982,
        "lng": 121.82044702702152,
        "ele": 6.072844772712293,
        "distanceKm": 3.6691557954879976,
        "gradePct": 0.17657198846028507,
        "smoothedEle": 6.279145689645496,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822354,
        "lng": 121.820369,
        "ele": 6.5,
        "distanceKm": 3.7090160393906606,
        "gradePct": 0.23427611713961416,
        "smoothedEle": 6.414529136464394,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821924,
        "lng": 121.820264,
        "ele": 7.125000000000003,
        "distanceKm": 3.7579901216624867,
        "gradePct": 0.29344910752512754,
        "smoothedEle": 6.594511266958538,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821494,
        "lng": 121.820159,
        "ele": 7.75,
        "distanceKm": 3.8069642118928937,
        "gradePct": 0.29922297890162913,
        "smoothedEle": 6.70721956531713,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821161,
        "lng": 121.820094,
        "ele": 7.75,
        "distanceKm": 3.844568779453564,
        "gradePct": 0.2884532303272304,
        "smoothedEle": 6.7811990876049775,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820685877691776,
        "lng": 121.82002523285861,
        "ele": 7.739345258568967,
        "distanceKm": 3.8978539451998566,
        "gradePct": 0.2783716662511304,
        "smoothedEle": 6.933360940152169,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820209,
        "lng": 121.819972,
        "ele": 7,
        "distanceKm": 3.9511518631275147,
        "gradePct": 0.2837400870589135,
        "smoothedEle": 7.13686050889957,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.819829723671912,
        "lng": 121.81995562921927,
        "ele": 6.613483269836413,
        "distanceKm": 3.993357876074649,
        "gradePct": 0.32276039534423856,
        "smoothedEle": 7.321426921702793,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.819451,
        "lng": 121.819927,
        "ele": 6,
        "distanceKm": 4.035569091517854,
        "gradePct": 0.37728565056587116,
        "smoothedEle": 7.518065289132814,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.818983,
        "lng": 121.819855,
        "ele": 6.25,
        "distanceKm": 4.088113279526219,
        "gradePct": 0.362396320648868,
        "smoothedEle": 7.630338002513723,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.818595295199483,
        "lng": 121.81977706922076,
        "ele": 7.404888193708056,
        "distanceKm": 4.131935736258174,
        "gradePct": 0.2991024989821051,
        "smoothedEle": 7.661695407562454,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81820886346632,
        "lng": 121.81969171281384,
        "ele": 8.103258795805367,
        "distanceKm": 4.175760081562717,
        "gradePct": 0.21414511975677078,
        "smoothedEle": 7.672762206708222,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817822431733163,
        "lng": 121.81960635640692,
        "ele": 8.80162939790269,
        "distanceKm": 4.219584432148301,
        "gradePct": 0.1430275261869117,
        "smoothedEle": 7.72965678272608,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817436,
        "lng": 121.819521,
        "ele": 9.5,
        "distanceKm": 4.263408788016205,
        "gradePct": 0.12474986228811191,
        "smoothedEle": 7.827050912797882,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.816959500000003,
        "lng": 121.819423,
        "ele": 8.75,
        "distanceKm": 4.317308511505076,
        "gradePct": 0.2053006022235236,
        "smoothedEle": 8.061830019181828,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.816483,
        "lng": 121.819325,
        "ele": 8,
        "distanceKm": 4.371208241974368,
        "gradePct": 0.2737518545203159,
        "smoothedEle": 8.219116456604217,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.816025052774922,
        "lng": 121.81924828081648,
        "ele": 7.763212396547082,
        "distanceKm": 4.42271505484074,
        "gradePct": 0.2234426330929778,
        "smoothedEle": 8.183499464889401,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.815567105549842,
        "lng": 121.81917156163297,
        "ele": 7.526424793094163,
        "distanceKm": 4.474221872008949,
        "gradePct": 0.06858277312431132,
        "smoothedEle": 8.011316630118717,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.815109,
        "lng": 121.819096,
        "ele": 8.25,
        "distanceKm": 4.5257286707319615,
        "gradePct": -0.17025255882767784,
        "smoothedEle": 7.745896023418826,
        "gradeBand": "descent"
      },
      {
        "lat": 24.814505,
        "lng": 121.818979,
        "ele": 8,
        "distanceKm": 4.593920712706989,
        "gradePct": -0.3472408980659171,
        "smoothedEle": 7.508928973459569,
        "gradeBand": "descent"
      },
      {
        "lat": 24.814107690119602,
        "lng": 121.81889053647194,
        "ele": 7.418003104886327,
        "distanceKm": 4.6389928093523825,
        "gradePct": -0.3328669793587366,
        "smoothedEle": 7.463350380765076,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81371041874875,
        "lng": 121.818801863625,
        "ele": 6.943512742681794,
        "distanceKm": 4.684064904627032,
        "gradePct": -0.23845875421596952,
        "smoothedEle": 7.483676814068556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.813313,
        "lng": 121.818714,
        "ele": 6.5,
        "distanceKm": 4.7291369263935525,
        "gradePct": -0.05992616114718081,
        "smoothedEle": 7.614200027489792,
        "gradeBand": "descent"
      },
      {
        "lat": 24.812948,
        "lng": 121.81864350000001,
        "ele": 6.875,
        "distanceKm": 4.770342155924948,
        "gradePct": 0.10715746399312955,
        "smoothedEle": 7.805179283949601,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.812583,
        "lng": 121.818573,
        "ele": 7.25,
        "distanceKm": 4.811547389075264,
        "gradePct": 0.25203216622298474,
        "smoothedEle": 7.995168550401751,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.812037,
        "lng": 121.818528,
        "ele": 7.5,
        "distanceKm": 4.872429552998896,
        "gradePct": 0.365700429403035,
        "smoothedEle": 8.209830408522022,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811593648057336,
        "lng": 121.81850816129439,
        "ele": 8.146914313229162,
        "distanceKm": 4.921768755036139,
        "gradePct": 0.35069537144812396,
        "smoothedEle": 8.294253422627605,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811150321612082,
        "lng": 121.818487644879,
        "ele": 9.391784276716027,
        "distanceKm": 4.971107947982637,
        "gradePct": 0.22338791077599865,
        "smoothedEle": 8.255486022818932,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810707,
        "lng": 121.818467,
        "ele": 10.75,
        "distanceKm": 5.020447150175673,
        "gradePct": 0.0708617150068535,
        "smoothedEle": 8.168271273323585,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810275,
        "lng": 121.818408,
        "ele": 10.25,
        "distanceKm": 5.068851132020211,
        "gradePct": -0.10323966774740513,
        "smoothedEle": 7.990734069180492,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809803,
        "lng": 121.818276,
        "ele": 9,
        "distanceKm": 5.122999836138736,
        "gradePct": -0.3400547430607627,
        "smoothedEle": 7.613176636263591,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809263,
        "lng": 121.81803,
        "ele": 6.5,
        "distanceKm": 5.187976321685141,
        "gradePct": -0.6488190858361204,
        "smoothedEle": 6.9280303648180315,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8087991280418,
        "lng": 121.81782893319084,
        "ele": 5.773558959743871,
        "distanceKm": 5.243405404235102,
        "gradePct": -0.9718306325761273,
        "smoothedEle": 6.1404032119038465,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808337,
        "lng": 121.817623,
        "ele": 5.25,
        "distanceKm": 5.298836416731842,
        "gradePct": -1.2581048198370335,
        "smoothedEle": 5.265448934435944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.807983,
        "lng": 121.8174825,
        "ele": 4.125000000000012,
        "distanceKm": 5.340676069619838,
        "gradePct": -1.3421648205401089,
        "smoothedEle": 4.742459483440698,
        "gradeBand": "descent"
      },
      {
        "lat": 24.807629,
        "lng": 121.817342,
        "ele": 3,
        "distanceKm": 5.382515736235004,
        "gradePct": -1.3039606504030787,
        "smoothedEle": 4.377688351805131,
        "gradeBand": "descent"
      },
      {
        "lat": 24.807211,
        "lng": 121.817239,
        "ele": 2.25,
        "distanceKm": 5.430143771360598,
        "gradePct": -1.078458192457874,
        "smoothedEle": 4.171929818706829,
        "gradeBand": "descent"
      },
      {
        "lat": 24.806685,
        "lng": 121.817197,
        "ele": 2,
        "distanceKm": 5.488785813211072,
        "gradePct": -0.6237389079893129,
        "smoothedEle": 4.176615497218194,
        "gradeBand": "descent"
      },
      {
        "lat": 24.806248248652153,
        "lng": 121.81717327611413,
        "ele": 3.181592391365268,
        "distanceKm": 5.5374094131199625,
        "gradePct": -0.24527727935310817,
        "smoothedEle": 4.292737646125204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.805811466985766,
        "lng": 121.81715025332599,
        "ele": 4.3642940341457885,
        "distanceKm": 5.586032947220586,
        "gradePct": 0.10499215036755406,
        "smoothedEle": 4.572477900728998,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805374733492883,
        "lng": 121.817126126663,
        "ele": 5.182147017072887,
        "distanceKm": 5.6346565841608385,
        "gradePct": 0.4476264581437475,
        "smoothedEle": 5.0675433225403355,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804938,
        "lng": 121.817102,
        "ele": 6,
        "distanceKm": 5.683280221530769,
        "gradePct": 0.7940903075824111,
        "smoothedEle": 5.764356198767892,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804301,
        "lng": 121.81702,
        "ele": 6.75,
        "distanceKm": 5.754593430235493,
        "gradePct": 1.2520050503512226,
        "smoothedEle": 6.895610600216025,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803753,
        "lng": 121.816936,
        "ele": 7.75,
        "distanceKm": 5.816115387041786,
        "gradePct": 1.2823002959808176,
        "smoothedEle": 7.443365243257986,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803339,
        "lng": 121.8168765,
        "ele": 8.74999999999999,
        "distanceKm": 5.862540260060572,
        "gradePct": 1.0956387383683341,
        "smoothedEle": 7.658414607030806,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802925,
        "lng": 121.816817,
        "ele": 9.75,
        "distanceKm": 5.908965135674335,
        "gradePct": 0.7812885762317572,
        "smoothedEle": 7.734377816337935,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802509,
        "lng": 121.816773,
        "ele": 10.75,
        "distanceKm": 5.955435009839925,
        "gradePct": 0.38488306675547224,
        "smoothedEle": 7.672869654299509,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802042,
        "lng": 121.816831,
        "ele": 8.5,
        "distanceKm": 6.0076920881835,
        "gradePct": 0.05297309660823885,
        "smoothedEle": 7.474315430188715,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801697,
        "lng": 121.816924,
        "ele": 7,
        "distanceKm": 6.047186238941504,
        "gradePct": -0.1767058507190205,
        "smoothedEle": 7.233879986814419,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801369,
        "lng": 121.816953,
        "ele": 6.75,
        "distanceKm": 6.083775506373942,
        "gradePct": -0.3772697803581135,
        "smoothedEle": 6.938621449811946,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800892820201742,
        "lng": 121.81686437513928,
        "ele": 6.000277473028376,
        "distanceKm": 6.137474735297539,
        "gradePct": -0.661708606514371,
        "smoothedEle": 6.373224906693659,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800423,
        "lng": 121.816733,
        "ele": 5.25,
        "distanceKm": 6.191373236998534,
        "gradePct": -0.9515891138264269,
        "smoothedEle": 5.633141756523881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800204358190967,
        "lng": 121.81631289961354,
        "ele": 4.509343465340612,
        "distanceKm": 6.2402532051936,
        "gradePct": -1.195092354817722,
        "smoothedEle": 4.885902718309188,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79998574534538,
        "lng": 121.81589278174926,
        "ele": 3.8971183069906004,
        "distanceKm": 6.289133167050914,
        "gradePct": -1.2799065403223155,
        "smoothedEle": 4.322397823118866,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799767196276303,
        "lng": 121.81547262539941,
        "ele": 3.567694645592481,
        "distanceKm": 6.338013037967463,
        "gradePct": -1.2281726366517103,
        "smoothedEle": 3.9094881712321254,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799548647207228,
        "lng": 121.81505246904956,
        "ele": 3.2382709841943624,
        "distanceKm": 6.386892973739457,
        "gradePct": -1.0409776376572981,
        "smoothedEle": 3.6127052107050033,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799330098138153,
        "lng": 121.8146323126997,
        "ele": 2.9088473227962437,
        "distanceKm": 6.435772974367828,
        "gradePct": -0.7724300168458933,
        "smoothedEle": 3.4095329782253962,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799111549069075,
        "lng": 121.81421215634985,
        "ele": 2.5794236613981187,
        "distanceKm": 6.4846530398497775,
        "gradePct": -0.5703828713404291,
        "smoothedEle": 3.2332805169954124,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798893,
        "lng": 121.813792,
        "ele": 2.25,
        "distanceKm": 6.53353317018565,
        "gradePct": -0.431488154207596,
        "smoothedEle": 3.0843552656656286,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7986485,
        "lng": 121.813314,
        "ele": 3.000000000000006,
        "distanceKm": 6.588915520195138,
        "gradePct": -0.34239838726872035,
        "smoothedEle": 2.9195016179717395,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798404,
        "lng": 121.812836,
        "ele": 3.75,
        "distanceKm": 6.644297953085585,
        "gradePct": -0.28347853700728676,
        "smoothedEle": 2.8118364101834947,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798155,
        "lng": 121.812394,
        "ele": 3.25,
        "distanceKm": 6.696807128140379,
        "gradePct": -0.21548147799711573,
        "smoothedEle": 2.7652871635590155,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797865,
        "lng": 121.81191150000001,
        "ele": 2.75,
        "distanceKm": 6.755219213467863,
        "gradePct": -0.11272197749280136,
        "smoothedEle": 2.7943596378364584,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797575,
        "lng": 121.811429,
        "ele": 2.25,
        "distanceKm": 6.813631393763669,
        "gradePct": 0.055010008305740946,
        "smoothedEle": 2.9814731917008417,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797316302562677,
        "lng": 121.8110126815527,
        "ele": 2.3943532489589736,
        "distanceKm": 6.864557913067403,
        "gradePct": 0.19678190883030472,
        "smoothedEle": 3.1874398262035992,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797057999271352,
        "lng": 121.81059606334088,
        "ele": 2.554591022733606,
        "distanceKm": 6.91548474633182,
        "gradePct": 0.3446480299909595,
        "smoothedEle": 3.46387932333587,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796799695980027,
        "lng": 121.81017944512907,
        "ele": 2.7148287965082356,
        "distanceKm": 6.966411651928453,
        "gradePct": 0.5638335535174072,
        "smoothedEle": 3.9578798310968493,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796540435713812,
        "lng": 121.8097635513709,
        "ele": 3.542392300167812,
        "distanceKm": 7.017338419326787,
        "gradePct": 0.8175395068205151,
        "smoothedEle": 4.631544857297868,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79628090632725,
        "lng": 121.8093478613435,
        "ele": 4.5576210527263274,
        "distanceKm": 7.068265258769787,
        "gradePct": 1.0909286918782801,
        "smoothedEle": 5.389421311852409,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796022203445773,
        "lng": 121.80893156531305,
        "ele": 5.693440806838795,
        "distanceKm": 7.119190614619615,
        "gradePct": 1.2996211334125605,
        "smoothedEle": 6.099069205560333,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795765055647962,
        "lng": 121.80851413087265,
        "ele": 7.503574316752031,
        "distanceKm": 7.170113614403795,
        "gradePct": 1.3445776019474545,
        "smoothedEle": 6.696005012379875,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795505530804913,
        "lng": 121.80809843977622,
        "ele": 9.083290752695957,
        "distanceKm": 7.221040472630779,
        "gradePct": 1.2422080919045626,
        "smoothedEle": 7.1710537793033575,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795247,
        "lng": 121.807682,
        "ele": 10,
        "distanceKm": 7.271967216145781,
        "gradePct": 1.0199714253545769,
        "smoothedEle": 7.480951161034733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79511,
        "lng": 121.80737,
        "ele": 9.75,
        "distanceKm": 7.306952611301872,
        "gradePct": 0.8273397274171497,
        "smoothedEle": 7.583211348819687,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79498235020576,
        "lng": 121.80687340200461,
        "ele": 9.120740584848287,
        "distanceKm": 7.359052196731468,
        "gradePct": 0.4774862634957176,
        "smoothedEle": 7.521312038305324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794864,
        "lng": 121.806374,
        "ele": 8,
        "distanceKm": 7.411153481566196,
        "gradePct": 0.0414039290453316,
        "smoothedEle": 7.1616351958397475,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79454394173639,
        "lng": 121.80591356586594,
        "ele": 6.857801619421973,
        "distanceKm": 7.4696924467446415,
        "gradePct": -0.5216863336437552,
        "smoothedEle": 6.423736158015539,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794206,
        "lng": 121.805467,
        "ele": 5.5,
        "distanceKm": 7.528379272336499,
        "gradePct": -1.0641868015341225,
        "smoothedEle": 5.429380814880836,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793933,
        "lng": 121.805059,
        "ele": 4.5,
        "distanceKm": 7.57954332189922,
        "gradePct": -1.3945456667206535,
        "smoothedEle": 4.590761943870247,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793757,
        "lng": 121.804658,
        "ele": 3,
        "distanceKm": 7.624505038188772,
        "gradePct": -1.4914129682168844,
        "smoothedEle": 4.010509379911664,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793605,
        "lng": 121.8041785,
        "ele": 2.125,
        "distanceKm": 7.675774457273934,
        "gradePct": -1.3881129248156991,
        "smoothedEle": 3.5444602693709135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793453,
        "lng": 121.803699,
        "ele": 1.25,
        "distanceKm": 7.7270439323606945,
        "gradePct": -1.1083813985149171,
        "smoothedEle": 3.235243239550284,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793341,
        "lng": 121.803357,
        "ele": 1,
        "distanceKm": 7.763744981978976,
        "gradePct": -0.8706305757957589,
        "smoothedEle": 3.1084479651665045,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793219,
        "lng": 121.803002,
        "ele": 1.5,
        "distanceKm": 7.802062524351463,
        "gradePct": -0.6178244121487377,
        "smoothedEle": 3.0644919858716864,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793121,
        "lng": 121.802794,
        "ele": 2,
        "distanceKm": 7.825718622853592,
        "gradePct": -0.4516495341768348,
        "smoothedEle": 3.0961785880920893,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792988,
        "lng": 121.802695,
        "ele": 2.5,
        "distanceKm": 7.8435676037456386,
        "gradePct": -0.3575536823464932,
        "smoothedEle": 3.1221195423346915,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792698,
        "lng": 121.802509,
        "ele": 3.5,
        "distanceKm": 7.880882205604377,
        "gradePct": -0.129505019814118,
        "smoothedEle": 3.254644321058455,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79233525,
        "lng": 121.80228875,
        "ele": 3.937499999999998,
        "distanceKm": 7.926940006045499,
        "gradePct": 0.1254803732279367,
        "smoothedEle": 3.4868307875571887,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7919725,
        "lng": 121.80206849999999,
        "ele": 4.375000000000004,
        "distanceKm": 7.97299783787413,
        "gradePct": 0.34077217039460733,
        "smoothedEle": 3.7793778897650467,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79160975,
        "lng": 121.80184824999999,
        "ele": 4.812500000000002,
        "distanceKm": 8.019055701088526,
        "gradePct": 0.503621439022043,
        "smoothedEle": 4.094496691343903,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.791247,
        "lng": 121.801628,
        "ele": 5.25,
        "distanceKm": 8.065113595689018,
        "gradePct": 0.5498008984895828,
        "smoothedEle": 4.298243067335772,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.790849262986477,
        "lng": 121.80138226781406,
        "ele": 5.115720116974303,
        "distanceKm": 8.11582174718587,
        "gradePct": 0.43675947620344885,
        "smoothedEle": 4.304300401665011,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.790451525972955,
        "lng": 121.80113653562812,
        "ele": 4.981440233948605,
        "distanceKm": 8.166529937591012,
        "gradePct": 0.21739828461670446,
        "smoothedEle": 4.173092076044867,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.790053788959433,
        "lng": 121.80089080344219,
        "ele": 4.847160350922907,
        "distanceKm": 8.21723816690255,
        "gradePct": -0.026258350533141163,
        "smoothedEle": 4.0295447804232944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78965620030925,
        "lng": 121.80064478125723,
        "ele": 4.316865125240201,
        "distanceKm": 8.267946379011628,
        "gradePct": -0.16683800102306404,
        "smoothedEle": 3.964905454979682,
        "gradeBand": "descent"
      },
      {
        "lat": 24.789259,
        "lng": 121.800398,
        "ele": 2.75,
        "distanceKm": 8.318654588908224,
        "gradePct": -0.16128538760483516,
        "smoothedEle": 3.9743995991724224,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78890669503793,
        "lng": 121.80019480520986,
        "ele": 2.118792185225516,
        "distanceKm": 8.362874548087628,
        "gradePct": -0.08285527493148977,
        "smoothedEle": 4.016839910170673,
        "gradeBand": "descent"
      },
      {
        "lat": 24.788557847518966,
        "lng": 121.79998440260492,
        "ele": 2.434396092612764,
        "distanceKm": 8.407099131295015,
        "gradePct": 0.009485470764340176,
        "smoothedEle": 4.077217791841473,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.788209,
        "lng": 121.799774,
        "ele": 2.75,
        "distanceKm": 8.451323743185851,
        "gradePct": 0.07893306803755334,
        "smoothedEle": 4.143960978772929,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787809525510113,
        "lng": 121.79952758975588,
        "ele": 4.199472024268312,
        "distanceKm": 8.502234192052438,
        "gradePct": 0.1310061053107712,
        "smoothedEle": 4.233337403977455,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787408847436453,
        "lng": 121.7992836034432,
        "ele": 5.357915110241168,
        "distanceKm": 8.553142652766118,
        "gradePct": 0.19040698518768084,
        "smoothedEle": 4.388313648856275,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787005,
        "lng": 121.799046,
        "ele": 5.75,
        "distanceKm": 8.604053120876724,
        "gradePct": 0.2994700853403136,
        "smoothedEle": 4.671999378240114,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786692,
        "lng": 121.79868,
        "ele": 5.75,
        "distanceKm": 8.654812205675908,
        "gradePct": 0.3999539862031495,
        "smoothedEle": 4.949993161705015,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786487666666666,
        "lng": 121.79826366666667,
        "ele": 5.666666666666667,
        "distanceKm": 8.702589892746087,
        "gradePct": 0.4562334389397081,
        "smoothedEle": 5.146887110860727,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786283333333333,
        "lng": 121.79784733333334,
        "ele": 5.583333333333333,
        "distanceKm": 8.750367640704312,
        "gradePct": 0.4342533707324218,
        "smoothedEle": 5.248372659967397,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786079,
        "lng": 121.797431,
        "ele": 5.5,
        "distanceKm": 8.798145449550136,
        "gradePct": 0.295306410822681,
        "smoothedEle": 5.229693193020285,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785809,
        "lng": 121.796923,
        "ele": 5.25,
        "distanceKm": 8.857570706437032,
        "gradePct": 0.045665060010606044,
        "smoothedEle": 5.05269118465148,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785623583008487,
        "lng": 121.7965513778905,
        "ele": 4.720405261911313,
        "distanceKm": 8.900378764409064,
        "gradePct": -0.13886001499265535,
        "smoothedEle": 4.860054923777338,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785443291504244,
        "lng": 121.79617668894524,
        "ele": 4.6102026309556585,
        "distanceKm": 8.943188621873665,
        "gradePct": -0.28164921001132603,
        "smoothedEle": 4.669825160630412,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785263,
        "lng": 121.795802,
        "ele": 4.5,
        "distanceKm": 8.985998527898863,
        "gradePct": -0.3742700117861011,
        "smoothedEle": 4.4859021947168305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785061,
        "lng": 121.79545,
        "ele": 4.5,
        "distanceKm": 9.028037438624912,
        "gradePct": -0.4070736122877451,
        "smoothedEle": 4.326510726906943,
        "gradeBand": "descent"
      },
      {
        "lat": 24.784755268714267,
        "lng": 121.79509961156391,
        "ele": 4.087143138318205,
        "distanceKm": 9.077098010374065,
        "gradePct": -0.39671840820199883,
        "smoothedEle": 4.171381500530833,
        "gradeBand": "descent"
      },
      {
        "lat": 24.784419999230895,
        "lng": 121.7947817287286,
        "ele": 3.5,
        "distanceKm": 9.12628812561746,
        "gradePct": -0.339404097387847,
        "smoothedEle": 4.06611596384932,
        "gradeBand": "descent"
      },
      {
        "lat": 24.784085499615447,
        "lng": 121.7944628643643,
        "ele": 3.5,
        "distanceKm": 9.175478237390974,
        "gradePct": -0.28778142229009396,
        "smoothedEle": 3.955537371158795,
        "gradeBand": "descent"
      },
      {
        "lat": 24.783751,
        "lng": 121.794144,
        "ele": 3.5,
        "distanceKm": 9.224668405950522,
        "gradePct": -0.2896734812231569,
        "smoothedEle": 3.7599375270009996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.783434666666665,
        "lng": 121.79384766666666,
        "ele": 3.749999999999997,
        "distanceKm": 9.270844426103164,
        "gradePct": -0.34716741466511014,
        "smoothedEle": 3.496820466234698,
        "gradeBand": "descent"
      },
      {
        "lat": 24.783118333333334,
        "lng": 121.79355133333334,
        "ele": 4.0000000000000036,
        "distanceKm": 9.317020495661254,
        "gradePct": -0.4057226687540084,
        "smoothedEle": 3.274503107649361,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782802,
        "lng": 121.793255,
        "ele": 4.25,
        "distanceKm": 9.363196614626736,
        "gradePct": -0.4208776988562723,
        "smoothedEle": 3.1413908670279227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782511,
        "lng": 121.792997,
        "ele": 3.5,
        "distanceKm": 9.404734945453484,
        "gradePct": -0.36786954602154354,
        "smoothedEle": 3.1034618707403356,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782159,
        "lng": 121.79266899999999,
        "ele": 2.4999999999999822,
        "distanceKm": 9.456003585614264,
        "gradePct": -0.21168816962863135,
        "smoothedEle": 3.1580091959425096,
        "gradeBand": "descent"
      },
      {
        "lat": 24.781807,
        "lng": 121.792341,
        "ele": 1.5,
        "distanceKm": 9.507272286436327,
        "gradePct": -0.00182980837101377,
        "smoothedEle": 3.317776808241679,
        "gradeBand": "descent"
      },
      {
        "lat": 24.781367,
        "lng": 121.791957,
        "ele": 2.25,
        "distanceKm": 9.569695095187111,
        "gradePct": 0.23769074580784738,
        "smoothedEle": 3.610838541849737,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.780992765684363,
        "lng": 121.79160815865019,
        "ele": 2.9593007217292193,
        "distanceKm": 9.624210386691473,
        "gradePct": 0.4119771166624343,
        "smoothedEle": 3.948137020854353,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.780612824263272,
        "lng": 121.79126661898765,
        "ele": 4.031975541296905,
        "distanceKm": 9.678742622694568,
        "gradePct": 0.5568126524793571,
        "smoothedEle": 4.342495700854605,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78023288284218,
        "lng": 121.7909250793251,
        "ele": 5.104650360864627,
        "distanceKm": 9.733274925440602,
        "gradePct": 0.7103598171037017,
        "smoothedEle": 4.860573270093937,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77985294142109,
        "lng": 121.79058353966255,
        "ele": 6.177325180432314,
        "distanceKm": 9.787807294929646,
        "gradePct": 0.8823963437941136,
        "smoothedEle": 5.487695519217941,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779473,
        "lng": 121.790242,
        "ele": 7.25,
        "distanceKm": 9.84233973115905,
        "gradePct": 0.9738327921395719,
        "smoothedEle": 6.026907890328439,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77911625,
        "lng": 121.78990625,
        "ele": 7.25,
        "distanceKm": 9.894518104914951,
        "gradePct": 0.9865922882967094,
        "smoothedEle": 6.4655533447999955,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7787595,
        "lng": 121.7895705,
        "ele": 7.25,
        "distanceKm": 9.946696541962721,
        "gradePct": 0.9301343838077416,
        "smoothedEle": 6.87519062771379,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778402749999998,
        "lng": 121.78923475,
        "ele": 7.25,
        "distanceKm": 9.998875042300378,
        "gradePct": 0.8151895265688152,
        "smoothedEle": 7.2275115738040165,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778046,
        "lng": 121.788899,
        "ele": 7.25,
        "distanceKm": 10.051053605928738,
        "gradePct": 0.6725554090682426,
        "smoothedEle": 7.445273225296728,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777781,
        "lng": 121.78845,
        "ele": 7,
        "distanceKm": 10.105119516362725,
        "gradePct": 0.4817678201215622,
        "smoothedEle": 7.512317491419071,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777614,
        "lng": 121.788132,
        "ele": 7.25,
        "distanceKm": 10.142207902327186,
        "gradePct": 0.33260852949972436,
        "smoothedEle": 7.505168721188148,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777399,
        "lng": 121.787696,
        "ele": 8.25,
        "distanceKm": 10.192299072410549,
        "gradePct": 0.1402955776212847,
        "smoothedEle": 7.463700304330419,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777214843249535,
        "lng": 121.78727843309657,
        "ele": 8.311910200112822,
        "distanceKm": 10.23916633080191,
        "gradePct": 0.005662861371432479,
        "smoothedEle": 7.406988677396587,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77704013243715,
        "lng": 121.78685582482244,
        "ele": 7.921432650084616,
        "distanceKm": 10.286047078656754,
        "gradePct": -0.07514698840433924,
        "smoothedEle": 7.338372796830987,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77686542162477,
        "lng": 121.78643321654829,
        "ele": 7.53095510005641,
        "distanceKm": 10.33292788116584,
        "gradePct": -0.10303825896995492,
        "smoothedEle": 7.300880923282702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776690710812385,
        "lng": 121.78601060827415,
        "ele": 7.140477550028205,
        "distanceKm": 10.379808738326536,
        "gradePct": -0.0866268533624169,
        "smoothedEle": 7.30078683081687,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776516,
        "lng": 121.785588,
        "ele": 6.75,
        "distanceKm": 10.426689650140942,
        "gradePct": -0.07208198547389724,
        "smoothedEle": 7.2779220875054955,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776349,
        "lng": 121.785169,
        "ele": 6.624999999999997,
        "distanceKm": 10.472888063123099,
        "gradePct": -0.11620740781461422,
        "smoothedEle": 7.125217858220227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776182,
        "lng": 121.78475,
        "ele": 6.5,
        "distanceKm": 10.519086528214064,
        "gradePct": -0.18609304959765471,
        "smoothedEle": 6.939764136616858,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7760006137848,
        "lng": 121.78431137066579,
        "ele": 6.884812846437128,
        "distanceKm": 10.567747261522792,
        "gradePct": -0.247318081951875,
        "smoothedEle": 6.806174874962266,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7758213068924,
        "lng": 121.7838716853329,
        "ele": 7.067406423218561,
        "distanceKm": 10.616409910043501,
        "gradePct": -0.2642871336468629,
        "smoothedEle": 6.754361451763268,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775642,
        "lng": 121.783432,
        "ele": 7.25,
        "distanceKm": 10.665072617054394,
        "gradePct": -0.21186660229498008,
        "smoothedEle": 6.727317828222284,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775389,
        "lng": 121.78295,
        "ele": 6.25,
        "distanceKm": 10.721282085597627,
        "gradePct": -0.09574601653672754,
        "smoothedEle": 6.742244596971941,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775192,
        "lng": 121.782657,
        "ele": 6.25,
        "distanceKm": 10.758091168718764,
        "gradePct": -0.029620390670897053,
        "smoothedEle": 6.773443153810217,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775074,
        "lng": 121.782373,
        "ele": 6.5,
        "distanceKm": 10.789623558079565,
        "gradePct": 0.026812892535822735,
        "smoothedEle": 6.83650793253182,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774746283367932,
        "lng": 121.78197004230445,
        "ele": 6.918005908249421,
        "distanceKm": 10.844240491439615,
        "gradePct": 0.06988433635624094,
        "smoothedEle": 6.878663665406081,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774427,
        "lng": 121.781559,
        "ele": 6.75,
        "distanceKm": 10.898853987126946,
        "gradePct": 0.02691704624575229,
        "smoothedEle": 6.790122770504545,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774219694821948,
        "lng": 121.78124205814396,
        "ele": 6.787047222536495,
        "distanceKm": 10.938291151595436,
        "gradePct": -0.0732683957171301,
        "smoothedEle": 6.610124310033386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774034,
        "lng": 121.780909,
        "ele": 7,
        "distanceKm": 10.977750805520609,
        "gradePct": -0.16539473930859497,
        "smoothedEle": 6.481972948796719,
        "gradeBand": "descent"
      },
      {
        "lat": 24.773799,
        "lng": 121.780379,
        "ele": 7.5,
        "distanceKm": 11.037299979447164,
        "gradePct": -0.2780307945373678,
        "smoothedEle": 6.317245086263165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.773535,
        "lng": 121.779866,
        "ele": 7,
        "distanceKm": 11.096834027537223,
        "gradePct": -0.30405504611092593,
        "smoothedEle": 6.185287492089943,
        "gradeBand": "descent"
      },
      {
        "lat": 24.773375,
        "lng": 121.779495,
        "ele": 5.75,
        "distanceKm": 11.138301441386306,
        "gradePct": -0.24161578981187,
        "smoothedEle": 6.12685931271396,
        "gradeBand": "descent"
      },
      {
        "lat": 24.773217,
        "lng": 121.779158,
        "ele": 4.75,
        "distanceKm": 11.176593894738879,
        "gradePct": -0.22041834137381133,
        "smoothedEle": 6.044893513687131,
        "gradeBand": "descent"
      },
      {
        "lat": 24.773041,
        "lng": 121.778815,
        "ele": 4.75,
        "distanceKm": 11.216371256658826,
        "gradePct": -0.22981697317406574,
        "smoothedEle": 5.91550520532612,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772814855914532,
        "lng": 121.7784281086829,
        "ele": 4.953006937217491,
        "distanceKm": 11.262826893766325,
        "gradePct": -0.28176043070790435,
        "smoothedEle": 5.6971436577888745,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772566927957268,
        "lng": 121.77805705434145,
        "ele": 5.476503468608736,
        "distanceKm": 11.309339928991667,
        "gradePct": -0.3915982699798302,
        "smoothedEle": 5.384469958062558,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772319,
        "lng": 121.777686,
        "ele": 6,
        "distanceKm": 11.355853024469488,
        "gradePct": -0.48640543449190415,
        "smoothedEle": 5.116478912252169,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772255,
        "lng": 121.777666,
        "ele": 6.25,
        "distanceKm": 11.36325044067736,
        "gradePct": -0.4915814573112662,
        "smoothedEle": 5.090292542167592,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77201525,
        "lng": 121.7772945,
        "ele": 5.687499999999995,
        "distanceKm": 11.409267141049051,
        "gradePct": -0.3730805221869282,
        "smoothedEle": 5.192452518489893,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7717755,
        "lng": 121.776923,
        "ele": 5.125000000000011,
        "distanceKm": 11.455283900455484,
        "gradePct": -0.08557088262008414,
        "smoothedEle": 5.561457217133038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77153575,
        "lng": 121.7765515,
        "ele": 4.562500000000005,
        "distanceKm": 11.501300718896392,
        "gradePct": 0.254668677839395,
        "smoothedEle": 5.94784914419143,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771296,
        "lng": 121.77618,
        "ele": 4,
        "distanceKm": 11.547317596371505,
        "gradePct": 0.5822788652466213,
        "smoothedEle": 6.330214584546945,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771115,
        "lng": 121.775817,
        "ele": 4.25,
        "distanceKm": 11.589130046339232,
        "gradePct": 0.7542696259377246,
        "smoothedEle": 6.656286150402621,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770939,
        "lng": 121.775444,
        "ele": 6.75,
        "distanceKm": 11.631571067392,
        "gradePct": 0.7922060923702713,
        "smoothedEle": 6.955718097621966,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770783,
        "lng": 121.775014,
        "ele": 8.75,
        "distanceKm": 11.678322782672595,
        "gradePct": 0.7276237157917808,
        "smoothedEle": 7.21015648651743,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7706255,
        "lng": 121.7745455,
        "ele": 9.000000000000005,
        "distanceKm": 11.728762524671643,
        "gradePct": 0.49605959287328266,
        "smoothedEle": 7.1681551612563625,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770468,
        "lng": 121.774077,
        "ele": 9.25,
        "distanceKm": 11.779202322938179,
        "gradePct": 0.3044565576801272,
        "smoothedEle": 7.187778585624261,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7703105,
        "lng": 121.7736085,
        "ele": 9.499999999999995,
        "distanceKm": 11.829642177473225,
        "gradePct": 0.15314046823351435,
        "smoothedEle": 7.248390236514771,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770153,
        "lng": 121.77314,
        "ele": 9.75,
        "distanceKm": 11.880082088273761,
        "gradePct": -0.011200311583246898,
        "smoothedEle": 7.186290884271749,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769998,
        "lng": 121.772443,
        "ele": 4.75,
        "distanceKm": 11.952534355300577,
        "gradePct": -0.24943373724466467,
        "smoothedEle": 6.678536033042497,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769902333333334,
        "lng": 121.771996,
        "ele": 4.708333333333334,
        "distanceKm": 11.998902367027105,
        "gradePct": -0.47465229691812183,
        "smoothedEle": 6.262146783984835,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769806666666668,
        "lng": 121.771549,
        "ele": 4.666666666666667,
        "distanceKm": 12.04527041259879,
        "gradePct": -0.6834132975219365,
        "smoothedEle": 5.862322860458481,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769711,
        "lng": 121.771102,
        "ele": 4.624999999999999,
        "distanceKm": 12.091638492012715,
        "gradePct": -0.8328480726964871,
        "smoothedEle": 5.439605967898764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769615333333334,
        "lng": 121.770655,
        "ele": 4.583333333333333,
        "distanceKm": 12.138006605270157,
        "gradePct": -0.8691572016158114,
        "smoothedEle": 5.0420339796254305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769519666666667,
        "lng": 121.770208,
        "ele": 4.541666666666666,
        "distanceKm": 12.184374752372392,
        "gradePct": -0.718616936296676,
        "smoothedEle": 4.955372302066931,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769424,
        "lng": 121.769761,
        "ele": 4.5,
        "distanceKm": 12.230742933316504,
        "gradePct": -0.3680245015307144,
        "smoothedEle": 5.251541888300168,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769301,
        "lng": 121.769256,
        "ele": 5,
        "distanceKm": 12.283532929849583,
        "gradePct": 0.018117147841663135,
        "smoothedEle": 5.549735022505817,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769278,
        "lng": 121.769176,
        "ele": 5,
        "distanceKm": 12.292005378310627,
        "gradePct": 0.07746551795444728,
        "smoothedEle": 5.591391227439281,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769217,
        "lng": 121.769069,
        "ele": 5,
        "distanceKm": 12.304761513876558,
        "gradePct": 0.16351152548066597,
        "smoothedEle": 5.654108893971777,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769122,
        "lng": 121.769038,
        "ele": 5,
        "distanceKm": 12.315778985501415,
        "gradePct": 0.2378294442149475,
        "smoothedEle": 5.708278129460659,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769133,
        "lng": 121.769136,
        "ele": 5,
        "distanceKm": 12.325748919467912,
        "gradePct": 0.30538517527182774,
        "smoothedEle": 5.757904843726115,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769174,
        "lng": 121.769244,
        "ele": 4.5,
        "distanceKm": 12.337567871281827,
        "gradePct": 0.38377471752672054,
        "smoothedEle": 5.81334523140612,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769278,
        "lng": 121.769176,
        "ele": 5,
        "distanceKm": 12.351016659364198,
        "gradePct": 0.4255515922352863,
        "smoothedEle": 5.8688214822459015,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7695935,
        "lng": 121.76885150000001,
        "ele": 6.499999999999972,
        "distanceKm": 12.399018524141265,
        "gradePct": 0.5055388964883312,
        "smoothedEle": 6.059984922965971,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769909,
        "lng": 121.768527,
        "ele": 8,
        "distanceKm": 12.447020332100983,
        "gradePct": 0.4296228471032715,
        "smoothedEle": 6.20273319491488,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770255,
        "lng": 121.768144,
        "ele": 7.5625,
        "distanceKm": 12.501568839104488,
        "gradePct": 0.34621811868164876,
        "smoothedEle": 6.33084781370573,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770601,
        "lng": 121.76776100000001,
        "ele": 7.125,
        "distanceKm": 12.556117269721392,
        "gradePct": 0.28473008187921395,
        "smoothedEle": 6.4585944032312,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770947,
        "lng": 121.767378,
        "ele": 6.6875,
        "distanceKm": 12.61066562395182,
        "gradePct": 0.27325881212245096,
        "smoothedEle": 6.6411388128400395,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771293,
        "lng": 121.766995,
        "ele": 6.25,
        "distanceKm": 12.665213901792841,
        "gradePct": 0.2463650266993733,
        "smoothedEle": 6.738193331565352,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771529,
        "lng": 121.766742,
        "ele": 5.5,
        "distanceKm": 12.701835350377847,
        "gradePct": 0.18588268157955068,
        "smoothedEle": 6.703237317758651,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771853689280572,
        "lng": 121.76638220280738,
        "ele": 5.91234124890984,
        "distanceKm": 12.753051482044869,
        "gradePct": 0.10017310128004987,
        "smoothedEle": 6.6517608589964645,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77217837856114,
        "lng": 121.76602240561475,
        "ele": 6.324682497819666,
        "distanceKm": 12.804267546333755,
        "gradePct": 0.01381116044101343,
        "smoothedEle": 6.647350161422382,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77250306784171,
        "lng": 121.76566260842213,
        "ele": 6.7370237467295055,
        "distanceKm": 12.855483543242283,
        "gradePct": -0.011639823895996534,
        "smoothedEle": 6.697601033337328,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77282775712228,
        "lng": 121.76530281122952,
        "ele": 7.1493649956393455,
        "distanceKm": 12.906699472770175,
        "gradePct": 0.05208242983161222,
        "smoothedEle": 6.802513331123002,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773151670828323,
        "lng": 121.7649421656231,
        "ele": 7.25,
        "distanceKm": 12.957915440319805,
        "gradePct": 0.16691627789586563,
        "smoothedEle": 6.985174533539477,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773475374361183,
        "lng": 121.76458128975229,
        "ele": 7.254748411812926,
        "distanceKm": 13.009131443803483,
        "gradePct": 0.27129104251052333,
        "smoothedEle": 7.194704487608533,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773800093164418,
        "lng": 121.76422151560627,
        "ele": 7.379352710828516,
        "distanceKm": 13.060347835502505,
        "gradePct": 0.3335985636885062,
        "smoothedEle": 7.374762327777695,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774124811967653,
        "lng": 121.76386174146025,
        "ele": 7.503957009844107,
        "distanceKm": 13.111564159821592,
        "gradePct": 0.352741446445377,
        "smoothedEle": 7.525346078535798,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774449530770887,
        "lng": 121.76350196731423,
        "ele": 7.628561308859697,
        "distanceKm": 13.162780416760008,
        "gradePct": 0.32068908168483623,
        "smoothedEle": 7.646455817432552,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774774249574122,
        "lng": 121.76314219316819,
        "ele": 7.7531656078752835,
        "distanceKm": 13.213996606318027,
        "gradePct": 0.2730192412017876,
        "smoothedEle": 7.757847077220378,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775098968377357,
        "lng": 121.76278241902217,
        "ele": 7.877769906890874,
        "distanceKm": 13.265212728492877,
        "gradePct": 0.24435238527912825,
        "smoothedEle": 7.877770620567711,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77542368718059,
        "lng": 121.76242264487615,
        "ele": 8.002374205906465,
        "distanceKm": 13.316428783284834,
        "gradePct": 0.23276279679806713,
        "smoothedEle": 8.002374919590503,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775748405983826,
        "lng": 121.76206287073012,
        "ele": 8.126978504922052,
        "distanceKm": 13.367644770694177,
        "gradePct": 0.23497190338626733,
        "smoothedEle": 8.126979218615702,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77607312478706,
        "lng": 121.7617030965841,
        "ele": 8.25158280393764,
        "distanceKm": 13.41886069071813,
        "gradePct": 0.24132984802336027,
        "smoothedEle": 8.251896121222991,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776397843590296,
        "lng": 121.76134332243808,
        "ele": 8.376187102953232,
        "distanceKm": 13.47007654335697,
        "gradePct": 0.24743706359800477,
        "smoothedEle": 8.384477995056564,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77672256239353,
        "lng": 121.76098354829206,
        "ele": 8.500791401968822,
        "distanceKm": 13.52129232860996,
        "gradePct": 0.18333927300835717,
        "smoothedEle": 8.380886072702555,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777047281196765,
        "lng": 121.76062377414603,
        "ele": 8.62539570098441,
        "distanceKm": 13.572508046477376,
        "gradePct": 0.12251730641028889,
        "smoothedEle": 8.383875482014423,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777372,
        "lng": 121.760264,
        "ele": 8.75,
        "distanceKm": 13.623723696956443,
        "gradePct": 0.04496292920910266,
        "smoothedEle": 8.354410786549996,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777872,
        "lng": 121.75985,
        "ele": 9,
        "distanceKm": 13.693279889721461,
        "gradePct": -0.008288362726768058,
        "smoothedEle": 8.36627394673601,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77833550296632,
        "lng": 121.75967555456114,
        "ele": 7.784848638650389,
        "distanceKm": 13.747745164635912,
        "gradePct": 0.014591890319838593,
        "smoothedEle": 8.411613878450813,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778815,
        "lng": 121.759555,
        "ele": 8,
        "distanceKm": 13.80243437528464,
        "gradePct": 0.0625042780596019,
        "smoothedEle": 8.491667227326259,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779201,
        "lng": 121.759587,
        "ele": 7.75,
        "distanceKm": 13.845477087859312,
        "gradePct": 0.11229041956905346,
        "smoothedEle": 8.582701776439762,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779614600000002,
        "lng": 121.7597084,
        "ele": 8.149999999999993,
        "distanceKm": 13.893072473232488,
        "gradePct": 0.1627342854869879,
        "smoothedEle": 8.691707141779588,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7800282,
        "lng": 121.75982979999999,
        "ele": 8.550000000000002,
        "distanceKm": 13.940667848088081,
        "gradePct": 0.19256023764941757,
        "smoothedEle": 8.790842800838059,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.780441800000002,
        "lng": 121.7599512,
        "ele": 8.949999999999998,
        "distanceKm": 13.988263212427093,
        "gradePct": 0.22212656371219178,
        "smoothedEle": 8.915176792524216,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7808554,
        "lng": 121.7600726,
        "ele": 9.350000000000007,
        "distanceKm": 14.035858566247889,
        "gradePct": 0.2608809126977532,
        "smoothedEle": 9.084120604713158,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.781269,
        "lng": 121.760194,
        "ele": 9.75,
        "distanceKm": 14.083453909551471,
        "gradePct": 0.2647632798771538,
        "smoothedEle": 9.19920477919462,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.781844,
        "lng": 121.760379,
        "ele": 10,
        "distanceKm": 14.150063089042241,
        "gradePct": 0.29828606454356715,
        "smoothedEle": 9.41195824053762,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78220800431992,
        "lng": 121.76048931598713,
        "ele": 9.903905934551135,
        "distanceKm": 14.192042809868731,
        "gradePct": 0.30582885631831863,
        "smoothedEle": 9.540250512167212,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78257200863984,
        "lng": 121.76059963197427,
        "ele": 9.807811869102265,
        "distanceKm": 14.234022522029486,
        "gradePct": 0.29486626632254803,
        "smoothedEle": 9.667335940096262,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.782936,
        "lng": 121.76071,
        "ele": 9.5,
        "distanceKm": 14.276002230171393,
        "gradePct": 0.30636623220232484,
        "smoothedEle": 9.793919296665115,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78330817783202,
        "lng": 121.76081171606445,
        "ele": 9.05093941065025,
        "distanceKm": 14.318641522147107,
        "gradePct": 0.30322660414658315,
        "smoothedEle": 9.91804919892968,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78368,
        "lng": 121.760915,
        "ele": 9.5,
        "distanceKm": 14.361280853178988,
        "gradePct": 0.3066453055657663,
        "smoothedEle": 10.059530938719147,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78411925,
        "lng": 121.76104749999999,
        "ele": 9.875,
        "distanceKm": 14.411921847011978,
        "gradePct": 0.33785556434325625,
        "smoothedEle": 10.276141566158902,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784558500000003,
        "lng": 121.76118,
        "ele": 10.25,
        "distanceKm": 14.462562828338918,
        "gradePct": 0.3666441755454736,
        "smoothedEle": 10.486683197503057,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784997750000002,
        "lng": 121.7613125,
        "ele": 10.625,
        "distanceKm": 14.513203797158496,
        "gradePct": 0.3197955526576097,
        "smoothedEle": 10.541810203882015,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785437,
        "lng": 121.761445,
        "ele": 11,
        "distanceKm": 14.563844753470551,
        "gradePct": 0.23387444286202802,
        "smoothedEle": 10.538246592841947,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7857835,
        "lng": 121.76150849999999,
        "ele": 11.625,
        "distanceKm": 14.602903493351802,
        "gradePct": 0.13277376948231237,
        "smoothedEle": 10.503114205680463,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78613,
        "lng": 121.761572,
        "ele": 12.25,
        "distanceKm": 14.641962230295238,
        "gradePct": 0.019734970737369364,
        "smoothedEle": 10.44050544011549,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786483,
        "lng": 121.761626,
        "ele": 12,
        "distanceKm": 14.68159083548082,
        "gradePct": -0.08010739296501808,
        "smoothedEle": 10.347182017484231,
        "gradeBand": "descent"
      },
      {
        "lat": 24.787064,
        "lng": 121.761699,
        "ele": 10.25,
        "distanceKm": 14.746614135276877,
        "gradePct": -0.20319185535772438,
        "smoothedEle": 10.133075403091622,
        "gradeBand": "descent"
      },
      {
        "lat": 24.787706,
        "lng": 121.761747,
        "ele": 8.75,
        "distanceKm": 14.818165643961235,
        "gradePct": -0.334643080386033,
        "smoothedEle": 9.80936375127527,
        "gradeBand": "descent"
      },
      {
        "lat": 24.788254,
        "lng": 121.761798,
        "ele": 8.75,
        "distanceKm": 14.879317660684626,
        "gradePct": -0.45710934005725684,
        "smoothedEle": 9.4383165525845,
        "gradeBand": "descent"
      },
      {
        "lat": 24.788742666666664,
        "lng": 121.76185466666666,
        "ele": 8.666666666666666,
        "distanceKm": 14.933955278712602,
        "gradePct": -0.5711201170365767,
        "smoothedEle": 9.032517841684413,
        "gradeBand": "descent"
      },
      {
        "lat": 24.789231333333333,
        "lng": 121.76191133333333,
        "ele": 8.583333333333334,
        "distanceKm": 14.988592894381899,
        "gradePct": -0.6432101588384104,
        "smoothedEle": 8.656735771329704,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78972,
        "lng": 121.761968,
        "ele": 8.5,
        "distanceKm": 15.043230507691696,
        "gradePct": -0.6467561643097955,
        "smoothedEle": 8.363767354605702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.790114465787813,
        "lng": 121.7620314978155,
        "ele": 8.391193590320164,
        "distanceKm": 15.08755906274779,
        "gradePct": -0.5795676613236423,
        "smoothedEle": 8.217971564253602,
        "gradeBand": "descent"
      },
      {
        "lat": 24.790507,
        "lng": 121.762109,
        "ele": 8.75,
        "distanceKm": 15.131902577539162,
        "gradePct": -0.47253086347304396,
        "smoothedEle": 8.102701718776531,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79095758994137,
        "lng": 121.76223511263665,
        "ele": 8.093163350772178,
        "distanceKm": 15.18359805778897,
        "gradePct": -0.3495859144464254,
        "smoothedEle": 7.991917016101978,
        "gradeBand": "descent"
      },
      {
        "lat": 24.791408,
        "lng": 121.762362,
        "ele": 7.5,
        "distanceKm": 15.235293463175058,
        "gradePct": -0.2762873193610603,
        "smoothedEle": 7.8537513714442255,
        "gradeBand": "descent"
      },
      {
        "lat": 24.791981,
        "lng": 121.762529,
        "ele": 7,
        "distanceKm": 15.301200756732259,
        "gradePct": -0.2657919372706932,
        "smoothedEle": 7.650926451128999,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792421991140472,
        "lng": 121.76265378750581,
        "ele": 7.42348701069728,
        "distanceKm": 15.35182896437796,
        "gradePct": -0.2890939059037542,
        "smoothedEle": 7.4818111633123845,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792862985921587,
        "lng": 121.76277855959938,
        "ele": 7.672950721068258,
        "distanceKm": 15.402457165894793,
        "gradePct": -0.36676054168937666,
        "smoothedEle": 7.2079914372047025,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793303992960794,
        "lng": 121.7629032797997,
        "ele": 7.336475360534129,
        "distanceKm": 15.453085373536547,
        "gradePct": -0.41542639098342854,
        "smoothedEle": 6.968145274532145,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793745,
        "lng": 121.763028,
        "ele": 7,
        "distanceKm": 15.503713570046529,
        "gradePct": -0.42391947893882137,
        "smoothedEle": 6.794693849339528,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794275,
        "lng": 121.763165,
        "ele": 7,
        "distanceKm": 15.564247856703338,
        "gradePct": -0.3814099235392892,
        "smoothedEle": 6.651824448890808,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794628495763188,
        "lng": 121.76326101887932,
        "ele": 6.274486998238581,
        "distanceKm": 15.604732251991326,
        "gradePct": -0.32512858969467584,
        "smoothedEle": 6.546956260816834,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794982,
        "lng": 121.763357,
        "ele": 5.75,
        "distanceKm": 15.645216643138955,
        "gradePct": -0.2978509448636501,
        "smoothedEle": 6.409720722456649,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795382,
        "lng": 121.7634675,
        "ele": 5.812500000000001,
        "distanceKm": 15.69107201122543,
        "gradePct": -0.2989123068241592,
        "smoothedEle": 6.240179022437092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795782000000003,
        "lng": 121.76357800000001,
        "ele": 5.875000000000001,
        "distanceKm": 15.73692737056154,
        "gradePct": -0.31506276767555863,
        "smoothedEle": 6.086179089826812,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796182,
        "lng": 121.7636885,
        "ele": 5.937499999999999,
        "distanceKm": 15.782782721146068,
        "gradePct": -0.32006284489097486,
        "smoothedEle": 5.963687231791255,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796582,
        "lng": 121.763799,
        "ele": 6,
        "distanceKm": 15.828638062979987,
        "gradePct": -0.29697143989081604,
        "smoothedEle": 5.871976548123417,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797069,
        "lng": 121.76391466666666,
        "ele": 5.833333333333333,
        "distanceKm": 15.884034474290898,
        "gradePct": -0.21392340593212453,
        "smoothedEle": 5.838352195268654,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797556,
        "lng": 121.76403033333334,
        "ele": 5.666666666666667,
        "distanceKm": 15.93943087593857,
        "gradePct": -0.11457610448785834,
        "smoothedEle": 5.850339351013785,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798043,
        "lng": 121.764146,
        "ele": 5.5,
        "distanceKm": 15.994827267922258,
        "gradePct": -0.04710676646808637,
        "smoothedEle": 5.845384605302702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798444,
        "lng": 121.764248,
        "ele": 6,
        "distanceKm": 16.040589786933822,
        "gradePct": -0.017170995271656834,
        "smoothedEle": 5.830380134884904,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79879,
        "lng": 121.764331,
        "ele": 6,
        "distanceKm": 16.079964948604168,
        "gradePct": -0.014119837230175895,
        "smoothedEle": 5.812582629690882,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799213036401753,
        "lng": 121.76443183024756,
        "ele": 5.929587815953026,
        "distanceKm": 16.128093017497633,
        "gradePct": -0.026057560808300552,
        "smoothedEle": 5.7957708448648795,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79963607280351,
        "lng": 121.7645326604951,
        "ele": 5.859175631906054,
        "distanceKm": 16.176221079048393,
        "gradePct": -0.02723490231169255,
        "smoothedEle": 5.7925789692509735,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80005910920526,
        "lng": 121.76463349074267,
        "ele": 5.788763447859079,
        "distanceKm": 16.224349133256187,
        "gradePct": -0.016349035234507762,
        "smoothedEle": 5.803006998727529,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80048224270738,
        "lng": 121.76473382430915,
        "ele": 5.75,
        "distanceKm": 16.272477158080928,
        "gradePct": -0.011829359904009394,
        "smoothedEle": 5.792308378290759,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800905495138252,
        "lng": 121.76483354953943,
        "ele": 5.75,
        "distanceKm": 16.320605223182035,
        "gradePct": -0.0756295154191478,
        "smoothedEle": 5.6471274017646635,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801328747569126,
        "lng": 121.76493327476972,
        "ele": 5.75,
        "distanceKm": 16.368733281096382,
        "gradePct": -0.19225886392472558,
        "smoothedEle": 5.408557835673447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801752,
        "lng": 121.765033,
        "ele": 5.75,
        "distanceKm": 16.416861331823878,
        "gradePct": -0.30188399703901475,
        "smoothedEle": 5.1976166034256,
        "gradeBand": "descent"
      },
      {
        "lat": 24.802303888688993,
        "lng": 121.76514566627144,
        "ele": 5.75,
        "distanceKm": 16.47927349137166,
        "gradePct": -0.403879757716319,
        "smoothedEle": 4.964047346707981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.802856,
        "lng": 121.765257,
        "ele": 4.5,
        "distanceKm": 16.541685623033192,
        "gradePct": -0.3820725560171905,
        "smoothedEle": 4.7784872807176555,
        "gradeBand": "descent"
      },
      {
        "lat": 24.803362,
        "lng": 121.76535,
        "ele": 3.5,
        "distanceKm": 16.598728042108103,
        "gradePct": -0.30563670119106656,
        "smoothedEle": 4.665819897471718,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8038305,
        "lng": 121.765439,
        "ele": 3.7499999999999916,
        "distanceKm": 16.651591831063605,
        "gradePct": -0.19495427821536707,
        "smoothedEle": 4.677733744685321,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804299,
        "lng": 121.76552799999999,
        "ele": 4,
        "distanceKm": 16.704455614249987,
        "gradePct": -0.043710831769268196,
        "smoothedEle": 4.801755681798237,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8047675,
        "lng": 121.76561699999999,
        "ele": 4.250000000000009,
        "distanceKm": 16.75731939166766,
        "gradePct": 0.12876289718182488,
        "smoothedEle": 5.005134023475781,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805236,
        "lng": 121.765706,
        "ele": 4.5,
        "distanceKm": 16.8101831633163,
        "gradePct": 0.3494392435524539,
        "smoothedEle": 5.3672800111793375,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80558770002441,
        "lng": 121.7658003976818,
        "ele": 5.312701317739611,
        "distanceKm": 16.850434461569478,
        "gradePct": 0.5160107236029314,
        "smoothedEle": 5.709494356949245,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805937,
        "lng": 121.765906,
        "ele": 6.25,
        "distanceKm": 16.89071094230217,
        "gradePct": 0.6507904556800105,
        "smoothedEle": 6.071090682305835,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806268,
        "lng": 121.766038,
        "ele": 7,
        "distanceKm": 16.929853822881583,
        "gradePct": 0.7642550305957619,
        "smoothedEle": 6.427978123856194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806599,
        "lng": 121.7661775,
        "ele": 7.5,
        "distanceKm": 16.969260792739654,
        "gradePct": 0.8499916641395403,
        "smoothedEle": 6.786922534225085,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80693,
        "lng": 121.766317,
        "ele": 8,
        "distanceKm": 17.008667749164296,
        "gradePct": 0.8958147744928464,
        "smoothedEle": 7.14852813754341,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80733652778404,
        "lng": 121.76649556107941,
        "ele": 8,
        "distanceKm": 17.057332107015476,
        "gradePct": 0.9110863763771715,
        "smoothedEle": 7.593593156903166,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.807749,
        "lng": 121.766657,
        "ele": 8,
        "distanceKm": 17.106005560733117,
        "gradePct": 0.9048523716373725,
        "smoothedEle": 8.020244979637676,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.808107333333336,
        "lng": 121.76678466666667,
        "ele": 8.249999999999993,
        "distanceKm": 17.147882317389183,
        "gradePct": 0.8847173781941399,
        "smoothedEle": 8.36162817906537,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.808465666666667,
        "lng": 121.76691233333332,
        "ele": 8.500000000000007,
        "distanceKm": 17.189759062581803,
        "gradePct": 0.8432147344265956,
        "smoothedEle": 8.661447961400428,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.808824,
        "lng": 121.76704,
        "ele": 8.75,
        "distanceKm": 17.231635796312492,
        "gradePct": 0.792675869101559,
        "smoothedEle": 8.943936574325155,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80920129031796,
        "lng": 121.76712854053994,
        "ele": 8.85113338665413,
        "distanceKm": 17.27452989524572,
        "gradePct": 0.7393571962766349,
        "smoothedEle": 9.22305641018042,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.809585,
        "lng": 121.767178,
        "ele": 9.25,
        "distanceKm": 17.317487572928435,
        "gradePct": 0.7156957930671107,
        "smoothedEle": 9.545238992800781,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810204,
        "lng": 121.767227,
        "ele": 10,
        "distanceKm": 17.38649478212298,
        "gradePct": 0.7473919126951891,
        "smoothedEle": 10.13286091944801,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810697666666666,
        "lng": 121.76728166666668,
        "ele": 10.583333333333346,
        "distanceKm": 17.44166469154013,
        "gradePct": 0.8074573223319279,
        "smoothedEle": 10.624111095274214,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811191333333333,
        "lng": 121.76733633333333,
        "ele": 11.166666666666654,
        "distanceKm": 17.496834598759147,
        "gradePct": 0.8523643865303668,
        "smoothedEle": 11.095070459591852,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811685,
        "lng": 121.767391,
        "ele": 11.75,
        "distanceKm": 17.55200450378029,
        "gradePct": 0.8583062485302162,
        "smoothedEle": 11.555775931174784,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.812142769339232,
        "lng": 121.7674265215257,
        "ele": 12.322927833830294,
        "distanceKm": 17.603032306456704,
        "gradePct": 0.8375578794241563,
        "smoothedEle": 11.955231981458859,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81260056165359,
        "lng": 121.76746167630378,
        "ele": 12.779918288909023,
        "distanceKm": 17.654060069369585,
        "gradePct": 0.7921518882800066,
        "smoothedEle": 12.314228340757827,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813058421240193,
        "lng": 121.76749575722785,
        "ele": 12.897438716681771,
        "distanceKm": 17.705087872875353,
        "gradePct": 0.7870261514352609,
        "smoothedEle": 12.73804310122955,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813516280826796,
        "lng": 121.7675298381519,
        "ele": 13.014959144454512,
        "distanceKm": 17.756115675524327,
        "gradePct": 0.8406437539810806,
        "smoothedEle": 13.269246530329939,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813974140413396,
        "lng": 121.76756391907595,
        "ele": 13.132479572227252,
        "distanceKm": 17.8071434773162,
        "gradePct": 0.9216287679904542,
        "smoothedEle": 13.827412897316998,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814432,
        "lng": 121.767598,
        "ele": 13.25,
        "distanceKm": 17.858171278251746,
        "gradePct": 1.0150718786886357,
        "smoothedEle": 14.378518012478542,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814928,
        "lng": 121.767645,
        "ele": 14,
        "distanceKm": 17.913527660000433,
        "gradePct": 1.0908702057655932,
        "smoothedEle": 15.007642358899194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.815289,
        "lng": 121.767719,
        "ele": 15.5,
        "distanceKm": 17.9543579805436,
        "gradePct": 1.1464790215649168,
        "smoothedEle": 15.543906830805694,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.815695,
        "lng": 121.76778,
        "ele": 16.75,
        "distanceKm": 17.999921046380294,
        "gradePct": 1.2447381379777251,
        "smoothedEle": 16.237886788400928,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.816235,
        "lng": 121.767906,
        "ele": 17.25,
        "distanceKm": 18.061298253521322,
        "gradePct": 1.4401174036058604,
        "smoothedEle": 17.29429084097346,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.816616,
        "lng": 121.76802,
        "ele": 17.75,
        "distanceKm": 18.10519815642148,
        "gradePct": 1.5620481127817742,
        "smoothedEle": 18.03707391654951,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81705951954634,
        "lng": 121.76817000034761,
        "ele": 18.675928071693132,
        "distanceKm": 18.156786680522178,
        "gradePct": 1.6036175247019266,
        "smoothedEle": 18.788133884087966,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817502771411103,
        "lng": 121.76832095853023,
        "ele": 20.0677102003955,
        "distanceKm": 18.208375202149217,
        "gradePct": 1.4941290543520562,
        "smoothedEle": 19.371655011223602,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817946,
        "lng": 121.768472,
        "ele": 21.5,
        "distanceKm": 18.259963718201224,
        "gradePct": 1.2527921593516913,
        "smoothedEle": 19.77690558210689,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.818414616363366,
        "lng": 121.76863851804757,
        "ele": 21.954967343075452,
        "distanceKm": 18.3147146607136,
        "gradePct": 0.9109429254144349,
        "smoothedEle": 19.997507351929727,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.818883827489586,
        "lng": 121.76880298962136,
        "ele": 20.942931276037804,
        "distanceKm": 18.369465557319494,
        "gradePct": 0.5099247592810912,
        "smoothedEle": 19.951395003646798,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8193530846592,
        "lng": 121.76896730376389,
        "ele": 20.376444729611453,
        "distanceKm": 18.42421649912766,
        "gradePct": 0.13050361069801444,
        "smoothedEle": 19.757102614614222,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81982216366034,
        "lng": 121.76913223286562,
        "ele": 20.296509686741388,
        "distanceKm": 18.478967378298663,
        "gradePct": -0.2144196909060846,
        "smoothedEle": 19.424635494963194,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820291,
        "lng": 121.769298,
        "ele": 19.25,
        "distanceKm": 18.533718317964468,
        "gradePct": -0.4837979268319933,
        "smoothedEle": 19.01390622134564,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820735,
        "lng": 121.769474,
        "ele": 17.25,
        "distanceKm": 18.586187037474602,
        "gradePct": -0.6260707727574997,
        "smoothedEle": 18.639914637278636,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82113722302457,
        "lng": 121.76962050956713,
        "ele": 16.741286225247595,
        "distanceKm": 18.63329306870752,
        "gradePct": -0.6472561582241264,
        "smoothedEle": 18.40747408834031,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82153922709087,
        "lng": 121.76976774493585,
        "ele": 16.632148270428605,
        "distanceKm": 18.68039902415876,
        "gradePct": -0.6058421346192593,
        "smoothedEle": 18.202211339472775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821941135944535,
        "lng": 121.76991529817532,
        "ele": 17.04089724233092,
        "distanceKm": 18.72750504951206,
        "gradePct": -0.5982693091804364,
        "smoothedEle": 17.86397814983245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822343,
        "lng": 121.770063,
        "ele": 18,
        "distanceKm": 18.774611076844746,
        "gradePct": -0.62387595545612,
        "smoothedEle": 17.474674971633235,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822706368153693,
        "lng": 121.77019448415435,
        "ele": 18.46807182230551,
        "distanceKm": 18.817139038361013,
        "gradePct": -0.6336420264974234,
        "smoothedEle": 17.219900670757358,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82306966095924,
        "lng": 121.7703263170672,
        "ele": 18.61524389000013,
        "distanceKm": 18.859670025259394,
        "gradePct": -0.5859848040914816,
        "smoothedEle": 17.120567705035537,
        "gradeBand": "descent"
      },
      {
        "lat": 24.823433,
        "lng": 121.770458,
        "ele": 18.5,
        "distanceKm": 18.90220115106264,
        "gradePct": -0.48397203372781833,
        "smoothedEle": 17.07772248038304,
        "gradeBand": "descent"
      },
      {
        "lat": 24.823847907405625,
        "lng": 121.77061279893583,
        "ele": 16.791899082266532,
        "distanceKm": 18.950910096400847,
        "gradePct": -0.2810779687909558,
        "smoothedEle": 17.108393480182873,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824263,
        "lng": 121.770767,
        "ele": 15.75,
        "distanceKm": 18.99961921875735,
        "gradePct": -0.11205568891622737,
        "smoothedEle": 17.100746117372918,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824649333333333,
        "lng": 121.77090633333334,
        "ele": 15.916666666666671,
        "distanceKm": 19.044820428959355,
        "gradePct": -0.08519100173189316,
        "smoothedEle": 16.984867578194528,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825035666666665,
        "lng": 121.77104566666667,
        "ele": 16.08333333333333,
        "distanceKm": 19.090021625516272,
        "gradePct": -0.1390650386400059,
        "smoothedEle": 16.811861876302707,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825422,
        "lng": 121.771185,
        "ele": 16.25,
        "distanceKm": 19.13522280842958,
        "gradePct": -0.22196225838286032,
        "smoothedEle": 16.654591007676462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825754578179595,
        "lng": 121.7713222702432,
        "ele": 17,
        "distanceKm": 19.17471345504839,
        "gradePct": -0.26855513041895224,
        "smoothedEle": 16.567546077083588,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826087,
        "lng": 121.77146,
        "ele": 17,
        "distanceKm": 19.214204105988838,
        "gradePct": -0.21970055952035217,
        "smoothedEle": 16.623954950169487,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8264745,
        "lng": 121.771626,
        "ele": 16.75000000000001,
        "distanceKm": 19.260434310330226,
        "gradePct": -0.11005638785903787,
        "smoothedEle": 16.70499332022406,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826862,
        "lng": 121.771792,
        "ele": 16.5,
        "distanceKm": 19.306664495678252,
        "gradePct": -0.017105036426235346,
        "smoothedEle": 16.719745384234873,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827233,
        "lng": 121.772056,
        "ele": 16.75,
        "distanceKm": 19.355773160109486,
        "gradePct": 0.0406488395492827,
        "smoothedEle": 16.690591785133904,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.827502,
        "lng": 121.772291,
        "ele": 17.249999999999975,
        "distanceKm": 19.393945576767,
        "gradePct": 0.029842469797962786,
        "smoothedEle": 16.654702387430874,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.827771,
        "lng": 121.772526,
        "ele": 17.75,
        "distanceKm": 19.432117961421476,
        "gradePct": -0.04893386422998898,
        "smoothedEle": 16.557488978771495,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828040075266973,
        "lng": 121.77283753539501,
        "ele": 17.125586352438344,
        "distanceKm": 19.475518820041668,
        "gradePct": -0.1571538871278394,
        "smoothedEle": 16.39549901688916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828301,
        "lng": 121.773158,
        "ele": 16.25,
        "distanceKm": 19.51896639582553,
        "gradePct": -0.2664661062339447,
        "smoothedEle": 16.179510088508103,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828469,
        "lng": 121.773456,
        "ele": 15.75,
        "distanceKm": 19.554369467403156,
        "gradePct": -0.3658124693646152,
        "smoothedEle": 15.959800155452994,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828691,
        "lng": 121.773988,
        "ele": 15.75,
        "distanceKm": 19.613460544560237,
        "gradePct": -0.4848947727672854,
        "smoothedEle": 15.635214177371395,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828826,
        "lng": 121.774605,
        "ele": 15.5,
        "distanceKm": 19.677510260358048,
        "gradePct": -0.5368565652765592,
        "smoothedEle": 15.31188593099654,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828881,
        "lng": 121.775133,
        "ele": 14.75,
        "distanceKm": 19.731144198362944,
        "gradePct": -0.5743319528571622,
        "smoothedEle": 14.955271266239231,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828906,
        "lng": 121.775594,
        "ele": 13.5,
        "distanceKm": 19.777749848338775,
        "gradePct": -0.5904828594348389,
        "smoothedEle": 14.650406521929893,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828974,
        "lng": 121.776121,
        "ele": 13.75,
        "distanceKm": 19.831467830366336,
        "gradePct": -0.6252991713528897,
        "smoothedEle": 14.293713571179605,
        "gradeBand": "descent"
      },
      {
        "lat": 24.829154,
        "lng": 121.776546,
        "ele": 14.75,
        "distanceKm": 19.878797768163903,
        "gradePct": -0.6121573994491993,
        "smoothedEle": 14.079010430019629,
        "gradeBand": "descent"
      },
      {
        "lat": 24.829324,
        "lng": 121.776835,
        "ele": 14.75,
        "distanceKm": 19.913552917565827,
        "gradePct": -0.5604247455335785,
        "smoothedEle": 13.951387057556204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.829700666666668,
        "lng": 121.777148,
        "ele": 13.916666666666666,
        "distanceKm": 19.96601197776893,
        "gradePct": -0.5335916759104987,
        "smoothedEle": 13.660004910345712,
        "gradeBand": "descent"
      },
      {
        "lat": 24.830077333333332,
        "lng": 121.777461,
        "ele": 13.083333333333334,
        "distanceKm": 20.01847098012054,
        "gradePct": -0.530269717375215,
        "smoothedEle": 13.31947456488261,
        "gradeBand": "descent"
      },
      {
        "lat": 24.830454,
        "lng": 121.777774,
        "ele": 12.25,
        "distanceKm": 20.070929924618856,
        "gradePct": -0.5060479323611515,
        "smoothedEle": 13.10260552120988,
        "gradeBand": "descent"
      },
      {
        "lat": 24.830878,
        "lng": 121.778099,
        "ele": 14.25,
        "distanceKm": 20.128362399997453,
        "gradePct": -0.4365166456010294,
        "smoothedEle": 12.996094976865802,
        "gradeBand": "descent"
      },
      {
        "lat": 24.831191666666665,
        "lng": 121.77834166666666,
        "ele": 13.083333333333366,
        "distanceKm": 20.170979136439062,
        "gradePct": -0.2949693867648355,
        "smoothedEle": 13.037822514518894,
        "gradeBand": "descent"
      },
      {
        "lat": 24.831505333333332,
        "lng": 121.77858433333334,
        "ele": 11.916666666666632,
        "distanceKm": 20.213595837234667,
        "gradePct": -0.09712567666558804,
        "smoothedEle": 13.156869526134027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.831819,
        "lng": 121.778827,
        "ele": 10.75,
        "distanceKm": 20.25621250238226,
        "gradePct": 0.09360730266219919,
        "smoothedEle": 13.350663006929636,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832176,
        "lng": 121.779122,
        "ele": 11.75,
        "distanceKm": 20.305831653154293,
        "gradePct": 0.31760624836214935,
        "smoothedEle": 13.67309153556765,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83255629780208,
        "lng": 121.77942530604466,
        "ele": 13.577261626657217,
        "distanceKm": 20.35803367003685,
        "gradePct": 0.5070711244918621,
        "smoothedEle": 14.039289404433877,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832937,
        "lng": 121.779728,
        "ele": 15.5,
        "distanceKm": 20.4102358972114,
        "gradePct": 0.4968193812580779,
        "smoothedEle": 14.141122512381521,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833265,
        "lng": 121.779989,
        "ele": 15.75,
        "distanceKm": 20.455223866019637,
        "gradePct": 0.4621132102999387,
        "smoothedEle": 14.27039373831285,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833593,
        "lng": 121.78025,
        "ele": 16,
        "distanceKm": 20.50021179397735,
        "gradePct": 0.37700184524244973,
        "smoothedEle": 14.39057700884445,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833969,
        "lng": 121.780581,
        "ele": 16.25,
        "distanceKm": 20.553725587690554,
        "gradePct": 0.18540778335760133,
        "smoothedEle": 14.379883714034381,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.834215,
        "lng": 121.78083,
        "ele": 16,
        "distanceKm": 20.590868811265363,
        "gradePct": 0.0683201423988902,
        "smoothedEle": 14.239982597741076,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83456,
        "lng": 121.781211,
        "ele": 14.75,
        "distanceKm": 20.645181659306274,
        "gradePct": -0.18444453453604015,
        "smoothedEle": 13.8726487682681,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834885,
        "lng": 121.781585,
        "ele": 14,
        "distanceKm": 20.697434666258427,
        "gradePct": -0.5148352016104543,
        "smoothedEle": 13.353487631087582,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835175,
        "lng": 121.782015,
        "ele": 12,
        "distanceKm": 20.75149681218647,
        "gradePct": -0.7763504377442559,
        "smoothedEle": 12.827628199486988,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835339,
        "lng": 121.78235,
        "ele": 10.5,
        "distanceKm": 20.78990719036229,
        "gradePct": -0.8760526409216749,
        "smoothedEle": 12.49149929118267,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835488,
        "lng": 121.782758,
        "ele": 10.25,
        "distanceKm": 20.83428766979668,
        "gradePct": -0.9032990355064654,
        "smoothedEle": 12.139729965221074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835635,
        "lng": 121.783212,
        "ele": 10.75,
        "distanceKm": 20.882930080159408,
        "gradePct": -0.8148289744907189,
        "smoothedEle": 11.867940382192645,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835790257974843,
        "lng": 121.78365329076841,
        "ele": 10.56039451433007,
        "distanceKm": 20.930690660001698,
        "gradePct": -0.6499372320231874,
        "smoothedEle": 11.730133999373207,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835936578437888,
        "lng": 121.78409836385754,
        "ele": 11.062854388046599,
        "distanceKm": 20.978459694270605,
        "gradePct": -0.46300824532249224,
        "smoothedEle": 11.665659746114809,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83608275405604,
        "lng": 121.7845434950321,
        "ele": 11.723286397764783,
        "distanceKm": 21.0262287070069,
        "gradePct": -0.20865222347237009,
        "smoothedEle": 11.786302608939605,
        "gradeBand": "descent"
      },
      {
        "lat": 24.836229625966787,
        "lng": 121.78498834787403,
        "ele": 12.367493419685218,
        "distanceKm": 21.07399767450379,
        "gradePct": 0.06978684541033545,
        "smoothedEle": 12.057423910755263,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.836377,
        "lng": 121.785433,
        "ele": 13,
        "distanceKm": 21.12176668346701,
        "gradePct": 0.30643865178883734,
        "smoothedEle": 12.368760172220723,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.836533299018093,
        "lng": 121.78590371448472,
        "ele": 13.227178805366444,
        "distanceKm": 21.172346474020483,
        "gradePct": 0.516289786890833,
        "smoothedEle": 12.706490382884514,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.836690078540947,
        "lng": 121.78637423562284,
        "ele": 13.119853744514986,
        "distanceKm": 21.2229262763716,
        "gradePct": 0.6339387420379539,
        "smoothedEle": 13.045839650889931,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.836846943575537,
        "lng": 121.78684472251949,
        "ele": 13.067629456675535,
        "distanceKm": 21.27350605692094,
        "gradePct": 0.611371497934345,
        "smoothedEle": 13.27737664327848,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837003962383694,
        "lng": 121.78731514834632,
        "ele": 13.461752971117013,
        "distanceKm": 21.324085896309363,
        "gradePct": 0.49407674221407566,
        "smoothedEle": 13.372399451138168,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837160981191847,
        "lng": 121.78778557417317,
        "ele": 13.855876485558493,
        "distanceKm": 21.37466567918658,
        "gradePct": 0.31493595942725183,
        "smoothedEle": 13.351922279020199,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837318,
        "lng": 121.788256,
        "ele": 14.25,
        "distanceKm": 21.425245405549713,
        "gradePct": 0.12738472596074815,
        "smoothedEle": 13.311225285583069,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83748384158755,
        "lng": 121.78874808385635,
        "ele": 13.885582516915505,
        "distanceKm": 21.47821515685159,
        "gradePct": 0.03916604585519337,
        "smoothedEle": 13.36455557798625,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837652420793777,
        "lng": 121.78923904192818,
        "ele": 13.192791258457753,
        "distanceKm": 21.531185322370188,
        "gradePct": 0.025488471426777886,
        "smoothedEle": 13.420502198787304,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837821,
        "lng": 121.78973,
        "ele": 12.5,
        "distanceKm": 21.584155424783265,
        "gradePct": -0.0024591454118754272,
        "smoothedEle": 13.339368436523124,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838001,
        "lng": 121.790169,
        "ele": 12.5,
        "distanceKm": 21.63276643611737,
        "gradePct": -0.08081120200874399,
        "smoothedEle": 13.157175104381215,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838249,
        "lng": 121.790772,
        "ele": 13.75,
        "distanceKm": 21.69957194224372,
        "gradePct": -0.2919091717005912,
        "smoothedEle": 12.803294082617636,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838303,
        "lng": 121.79099,
        "ele": 13.5,
        "distanceKm": 21.72237491501591,
        "gradePct": -0.3494624055524764,
        "smoothedEle": 12.712271913279416,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838405,
        "lng": 121.790958,
        "ele": 13.5,
        "distanceKm": 21.734167526844836,
        "gradePct": -0.3740671794527626,
        "smoothedEle": 12.667800027892625,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838382,
        "lng": 121.790869,
        "ele": 13.75,
        "distanceKm": 21.74350548714266,
        "gradePct": -0.3839044395842853,
        "smoothedEle": 12.633822649671561,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83828,
        "lng": 121.790894,
        "ele": 13.75,
        "distanceKm": 21.755124558384434,
        "gradePct": -0.39371601894245206,
        "smoothedEle": 12.596402678774098,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838388,
        "lng": 121.791305,
        "ele": 12.75,
        "distanceKm": 21.798301897963444,
        "gradePct": -0.402597092027564,
        "smoothedEle": 12.481153485855296,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838467,
        "lng": 121.791748,
        "ele": 12,
        "distanceKm": 21.843859548131487,
        "gradePct": -0.39781123822708736,
        "smoothedEle": 12.302790378500045,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83852,
        "lng": 121.792243,
        "ele": 11.5,
        "distanceKm": 21.894155979545282,
        "gradePct": -0.3910834282119376,
        "smoothedEle": 12.04981657419348,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838526,
        "lng": 121.792638,
        "ele": 11.5,
        "distanceKm": 21.934020620752705,
        "gradePct": -0.44121078319413765,
        "smoothedEle": 11.785932468622251,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83855876361489,
        "lng": 121.7930129745923,
        "ele": 12,
        "distanceKm": 21.97203390943809,
        "gradePct": -0.5319558730733177,
        "smoothedEle": 11.487356399543314,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838576,
        "lng": 121.793389,
        "ele": 12.25,
        "distanceKm": 22.010026620281653,
        "gradePct": -0.6372896646809038,
        "smoothedEle": 11.160670605765139,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838628,
        "lng": 121.793921,
        "ele": 10.75,
        "distanceKm": 22.064020671457442,
        "gradePct": -0.7536901164150267,
        "smoothedEle": 10.694006608212229,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838763,
        "lng": 121.794412,
        "ele": 10,
        "distanceKm": 22.115791043809278,
        "gradePct": -0.8349807705731344,
        "smoothedEle": 10.236641663771545,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838981,
        "lng": 121.794854,
        "ele": 9.75,
        "distanceKm": 22.16655432633092,
        "gradePct": -0.8515386006994928,
        "smoothedEle": 9.827318683569294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839168,
        "lng": 121.795157,
        "ele": 9.75,
        "distanceKm": 22.20353022869553,
        "gradePct": -0.8427611315069383,
        "smoothedEle": 9.531008501052282,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839429,
        "lng": 121.795569,
        "ele": 9.25,
        "distanceKm": 22.2542322002528,
        "gradePct": -0.8552586906966985,
        "smoothedEle": 9.068089789340386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839627,
        "lng": 121.795967,
        "ele": 8.5,
        "distanceKm": 22.300032577944993,
        "gradePct": -0.8519233540635924,
        "smoothedEle": 8.672012997490903,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839786,
        "lng": 121.7964,
        "ele": 7.5,
        "distanceKm": 22.347167249080762,
        "gradePct": -0.7964236956839399,
        "smoothedEle": 8.390796412312843,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839932,
        "lng": 121.796929,
        "ele": 7.5,
        "distanceKm": 22.40296163616107,
        "gradePct": -0.694974414796939,
        "smoothedEle": 8.145616145996943,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84004142455456,
        "lng": 121.79738330389138,
        "ele": 7.5,
        "distanceKm": 22.450391698904347,
        "gradePct": -0.5736292036164462,
        "smoothedEle": 7.955895895023833,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84015421227728,
        "lng": 121.79783665194569,
        "ele": 7.5,
        "distanceKm": 22.49782600636514,
        "gradePct": -0.452995868300653,
        "smoothedEle": 7.785103457071635,
        "gradeBand": "descent"
      },
      {
        "lat": 24.840267,
        "lng": 121.79829,
        "ele": 7.5,
        "distanceKm": 22.54526027362274,
        "gradePct": -0.3581925130523191,
        "smoothedEle": 7.685788852379089,
        "gradeBand": "descent"
      },
      {
        "lat": 24.840375507995965,
        "lng": 121.79873757094788,
        "ele": 7.75,
        "distanceKm": 22.592007464405427,
        "gradePct": -0.25894794341033034,
        "smoothedEle": 7.675856763381498,
        "gradeBand": "descent"
      },
      {
        "lat": 24.840484338663977,
        "lng": 121.79918504729858,
        "ele": 7.75,
        "distanceKm": 22.638754670087412,
        "gradePct": -0.14074313057072635,
        "smoothedEle": 7.720957749150121,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84059316933199,
        "lng": 121.7996325236493,
        "ele": 7.75,
        "distanceKm": 22.685501837420563,
        "gradePct": -0.034856625808885724,
        "smoothedEle": 7.759764730401209,
        "gradeBand": "descent"
      },
      {
        "lat": 24.840702,
        "lng": 121.80008,
        "ele": 7.75,
        "distanceKm": 22.732248966401958,
        "gradePct": 0.03505363140012742,
        "smoothedEle": 7.783138294891907,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840903,
        "lng": 121.800662,
        "ele": 8,
        "distanceKm": 22.795086099665586,
        "gradePct": 0.05203972698183286,
        "smoothedEle": 7.782906437340767,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.841124,
        "lng": 121.801142,
        "ele": 8,
        "distanceKm": 22.849398805824812,
        "gradePct": 0.00443550449325915,
        "smoothedEle": 7.738664946499703,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.841396558818612,
        "lng": 121.80159054118378,
        "ele": 7.932089177756205,
        "distanceKm": 22.90386962754061,
        "gradePct": -0.05445746646950475,
        "smoothedEle": 7.660033692522225,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841693,
        "lng": 121.802021,
        "ele": 7.75,
        "distanceKm": 22.95839707040083,
        "gradePct": -0.07664872125578476,
        "smoothedEle": 7.629744370649787,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841994,
        "lng": 121.802454,
        "ele": 7.499999999999995,
        "distanceKm": 23.013435696572135,
        "gradePct": -0.05974941211109396,
        "smoothedEle": 7.648460585417578,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842295,
        "lng": 121.802887,
        "ele": 7.250000000000005,
        "distanceKm": 23.06847423838543,
        "gradePct": -0.010995214678397187,
        "smoothedEle": 7.689138211738335,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842596,
        "lng": 121.80332,
        "ele": 7,
        "distanceKm": 23.12351269583984,
        "gradePct": 0.07297389112132428,
        "smoothedEle": 7.7950699926364555,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842895097731464,
        "lng": 121.80373759990285,
        "ele": 7.437277385182125,
        "distanceKm": 23.177194458564742,
        "gradePct": 0.18576243226230568,
        "smoothedEle": 8.007661399703618,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.843194195462928,
        "lng": 121.8041551998057,
        "ele": 7.87455477036425,
        "distanceKm": 23.230876141349633,
        "gradePct": 0.32204572888286204,
        "smoothedEle": 8.305441844986797,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.843493963004388,
        "lng": 121.8045722170917,
        "ele": 8.312202827416074,
        "distanceKm": 23.284557824393154,
        "gradePct": 0.481455150825035,
        "smoothedEle": 8.683004375667748,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.843794,
        "lng": 121.804989,
        "ele": 8.75,
        "distanceKm": 23.33823950719914,
        "gradePct": 0.6584663005900083,
        "smoothedEle": 9.170323956409028,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.844005890837252,
        "lng": 121.80530334898214,
        "ele": 9.50318156161429,
        "distanceKm": 23.377752072837016,
        "gradePct": 0.7900313383819003,
        "smoothedEle": 9.590817247502299,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.844215,
        "lng": 121.80562,
        "ele": 10.25,
        "distanceKm": 23.417268518948443,
        "gradePct": 0.894499600263687,
        "smoothedEle": 10.018957497911744,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.844461499999998,
        "lng": 121.8059745,
        "ele": 10.624999999999984,
        "distanceKm": 23.46233312377931,
        "gradePct": 0.9964818380227758,
        "smoothedEle": 10.519653761034546,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.844708,
        "lng": 121.806329,
        "ele": 11,
        "distanceKm": 23.507397672052015,
        "gradePct": 1.0681633542580597,
        "smoothedEle": 11.026670057247308,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.844891,
        "lng": 121.806667,
        "ele": 11.5,
        "distanceKm": 23.547112350995796,
        "gradePct": 1.0830981676355373,
        "smoothedEle": 11.430945222817344,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.845022,
        "lng": 121.807,
        "ele": 12.25,
        "distanceKm": 23.58373486549154,
        "gradePct": 1.037346446004407,
        "smoothedEle": 11.730330602819805,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.845212,
        "lng": 121.80745,
        "ele": 12.5,
        "distanceKm": 23.63381595277315,
        "gradePct": 0.8975818665639701,
        "smoothedEle": 11.997973687116884,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.845399,
        "lng": 121.807905,
        "ele": 13,
        "distanceKm": 23.68421631276719,
        "gradePct": 0.6640847398788831,
        "smoothedEle": 12.094028602994506,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84554872167649,
        "lng": 121.80829850403339,
        "ele": 13.5,
        "distanceKm": 23.72727119141323,
        "gradePct": 0.4309980559687474,
        "smoothedEle": 12.090968454986683,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.845707,
        "lng": 121.808688,
        "ele": 13.5,
        "distanceKm": 23.77033337430145,
        "gradePct": 0.2164135847270775,
        "smoothedEle": 12.053601926975286,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.845860333333334,
        "lng": 121.80908866666667,
        "ele": 12.666666666666643,
        "distanceKm": 23.814210058627808,
        "gradePct": 0.047825763979436775,
        "smoothedEle": 11.988847498291076,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.846013666666668,
        "lng": 121.80948933333333,
        "ele": 11.833333333333357,
        "distanceKm": 23.858086696793674,
        "gradePct": -0.07655483080571052,
        "smoothedEle": 11.891120129141516,
        "gradeBand": "descent"
      },
      {
        "lat": 24.846167,
        "lng": 121.80989,
        "ele": 11,
        "distanceKm": 23.90196328879879,
        "gradePct": -0.14242270548923802,
        "smoothedEle": 11.807921816416892,
        "gradeBand": "descent"
      },
      {
        "lat": 24.846428,
        "lng": 121.810538,
        "ele": 10.5,
        "distanceKm": 23.973499717147938,
        "gradePct": -0.18442304329969228,
        "smoothedEle": 11.68008286370981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.846602,
        "lng": 121.810992,
        "ele": 10.5,
        "distanceKm": 24.023227721261584,
        "gradePct": -0.2275089869940467,
        "smoothedEle": 11.513744292573382,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84678,
        "lng": 121.81144499999999,
        "ele": 10.999999999999991,
        "distanceKm": 24.073037790501935,
        "gradePct": -0.30814360725280143,
        "smoothedEle": 11.246482814660736,
        "gradeBand": "descent"
      },
      {
        "lat": 24.846958,
        "lng": 121.811898,
        "ele": 11.500000000000018,
        "distanceKm": 24.12284779940278,
        "gradePct": -0.42588305534612897,
        "smoothedEle": 10.918834105736677,
        "gradeBand": "descent"
      },
      {
        "lat": 24.847136000000003,
        "lng": 121.812351,
        "ele": 12.000000000000009,
        "distanceKm": 24.17265774796226,
        "gradePct": -0.5651309483685554,
        "smoothedEle": 10.551325605398086,
        "gradeBand": "descent"
      },
      {
        "lat": 24.847314,
        "lng": 121.812804,
        "ele": 12.5,
        "distanceKm": 24.2224676361785,
        "gradePct": -0.6162158251800024,
        "smoothedEle": 10.283855102320432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.847567,
        "lng": 121.813366,
        "ele": 10.75,
        "distanceKm": 24.285769198968016,
        "gradePct": -0.4880968383494268,
        "smoothedEle": 10.186542324043419,
        "gradeBand": "descent"
      },
      {
        "lat": 24.847794,
        "lng": 121.813733,
        "ele": 9.25,
        "distanceKm": 24.330584457267257,
        "gradePct": -0.3561284012329779,
        "smoothedEle": 10.149494579605358,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8480701234652,
        "lng": 121.81399657423293,
        "ele": 8.146608357722238,
        "distanceKm": 24.371204684635714,
        "gradePct": -0.24546825699772779,
        "smoothedEle": 10.071110104763997,
        "gradeBand": "descent"
      },
      {
        "lat": 24.848363,
        "lng": 121.814239,
        "ele": 7,
        "distanceKm": 24.411934455233514,
        "gradePct": -0.18370118107213848,
        "smoothedEle": 9.973014103938556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.848769,
        "lng": 121.814582,
        "ele": 8.5,
        "distanceKm": 24.468819170825395,
        "gradePct": -0.22996914522828765,
        "smoothedEle": 9.752661120611956,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84921,
        "lng": 121.814999,
        "ele": 10.75,
        "distanceKm": 24.533433239163507,
        "gradePct": -0.28974881151379,
        "smoothedEle": 9.564499688656316,
        "gradeBand": "descent"
      },
      {
        "lat": 24.849445,
        "lng": 121.815303,
        "ele": 10.25,
        "distanceKm": 24.57372833096664,
        "gradePct": -0.24708644975689342,
        "smoothedEle": 9.570859105400192,
        "gradeBand": "descent"
      },
      {
        "lat": 24.849834,
        "lng": 121.81587,
        "ele": 10.5,
        "distanceKm": 24.64545001472607,
        "gradePct": -0.010830143992815382,
        "smoothedEle": 9.82152538233588,
        "gradeBand": "descent"
      },
      {
        "lat": 24.850001,
        "lng": 121.816007,
        "ele": 10.25,
        "distanceKm": 24.668599783425574,
        "gradePct": 0.10924396123296136,
        "smoothedEle": 9.971998878882657,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8503355,
        "lng": 121.81649300000001,
        "ele": 10.25,
        "distanceKm": 24.730147269861824,
        "gradePct": 0.33933873560368377,
        "smoothedEle": 10.252746170221169,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.85067,
        "lng": 121.816979,
        "ele": 10.25,
        "distanceKm": 24.79169465065964,
        "gradePct": 0.3259764286241292,
        "smoothedEle": 10.285603997520166,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.851000499999998,
        "lng": 121.817444,
        "ele": 10.25,
        "distanceKm": 24.851292143895407,
        "gradePct": 0.20710932058907958,
        "smoothedEle": 10.273717863114733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.851331,
        "lng": 121.817909,
        "ele": 10.25,
        "distanceKm": 24.910889538455343,
        "gradePct": 0.04254874048089456,
        "smoothedEle": 10.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.851584,
        "lng": 121.818319,
        "ele": 10.25,
        "distanceKm": 24.960917244280544,
        "gradePct": -0.009586550024438124,
        "smoothedEle": 10.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.851808,
        "lng": 121.818804,
        "ele": 10.25,
        "distanceKm": 25.01582709892185,
        "gradePct": -0.015395508922984524,
        "smoothedEle": 10.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.851945,
        "lng": 121.819126,
        "ele": 10.25,
        "distanceKm": 25.051710439743307,
        "gradePct": -0.011775697351112988,
        "smoothedEle": 10.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.852139,
        "lng": 121.8195265,
        "ele": 10.25,
        "distanceKm": 25.097517466778573,
        "gradePct": -0.0026608291178824668,
        "smoothedEle": 10.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.852332999999998,
        "lng": 121.81992699999999,
        "ele": 10.25,
        "distanceKm": 25.143324437907882,
        "gradePct": 0,
        "smoothedEle": 10.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.852527,
        "lng": 121.8203275,
        "ele": 10.25,
        "distanceKm": 25.189131353132478,
        "gradePct": 0.0012902833977568352,
        "smoothedEle": 10.252580566795514,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.852721,
        "lng": 121.820728,
        "ele": 10.25,
        "distanceKm": 25.234938212449258,
        "gradePct": 0.0066418415415477015,
        "smoothedEle": 10.263283683083095,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.85296,
        "lng": 121.821259,
        "ele": 10.25,
        "distanceKm": 25.294743758890778,
        "gradePct": 0.01097443993784623,
        "smoothedEle": 10.271948879875692,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.853198,
        "lng": 121.821601,
        "ele": 10.25,
        "distanceKm": 25.338230385723424,
        "gradePct": 0.012138584745729418,
        "smoothedEle": 10.274277169491459,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.853577937632956,
        "lng": 121.82192341436517,
        "ele": 10.25,
        "distanceKm": 25.391550792904948,
        "gradePct": 0.012380504504562007,
        "smoothedEle": 10.277906896056273,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.853961552669695,
        "lng": 121.8222403148316,
        "ele": 10.311659737473564,
        "distanceKm": 25.444860181561438,
        "gradePct": 0.00904516854608598,
        "smoothedEle": 10.282811609496706,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.854342,
        "lng": 121.822562,
        "ele": 10.5,
        "distanceKm": 25.49818056635617,
        "gradePct": 0.008838416145812853,
        "smoothedEle": 10.289809720073102,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 25.49818056635617,
      "elevationGainM": 48.35713095881105,
      "elevationLossM": 48.028161449846024,
      "minimumElevationM": 1,
      "maximumElevationM": 21.954967343075452,
      "maximumSustainedGradePct": 1.6036175247019266
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 531,
        "startDistanceKm": 0,
        "endDistanceKm": 25.49818056635617,
        "distanceKm": 25.49818056635617,
        "gainM": 55.06945639684025,
        "averageGradePct": 0.21597406235918734,
        "maximumGradePct": 1.6036175247019266
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
