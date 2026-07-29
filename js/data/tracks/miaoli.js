"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("miaoli", {
  "miaoli-xianshan": {
    "routeId": "miaoli-xianshan",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T13:32:07.346Z",
      "reviewStatus": "approved",
      "reviewedAt": "2026-07-29T13:50:00.000Z",
      "reviewerNote": "2026-07-29 重新稽核：舊汶水 waypoint 使 BRouter 在24.452780,120.874988逆行34公尺 `highway=residential oneway=yes`；先移除會導入track捷徑，故改用OSM台3中豐公路節點24.450258,120.873799，並把獅潭點修正至台3／縣道124實際路口24.539619,120.919754。最終 raw messages 無未授權單行道逆向段，也無 motorway、trunk、footway、path、track、steps、private、access禁制或bicycle=no；Leaflet顯示公館台6、汶水台3、獅潭與縣道124至仙山靈洞宮往返連續，為59.8公里、爬升1424公尺；最大持續坡度28.6%與舊發布資料相同。"
    },
    "waypoints": [
      {
        "name": "公館台6中正路",
        "lat": 24.501672,
        "lng": 120.828592,
        "role": "start"
      },
      {
        "name": "汶水台3中豐公路",
        "lat": 24.450258,
        "lng": 120.873799,
        "role": "via"
      },
      {
        "name": "獅潭台3與縣道124路口",
        "lat": 24.539619,
        "lng": 120.919754,
        "role": "via"
      },
      {
        "name": "仙山靈洞宮",
        "lat": 24.54205,
        "lng": 120.94858,
        "role": "via"
      },
      {
        "name": "獅潭台3與縣道124路口",
        "lat": 24.539619,
        "lng": 120.919754,
        "role": "via"
      },
      {
        "name": "汶水台3中豐公路",
        "lat": 24.450258,
        "lng": 120.873799,
        "role": "via"
      },
      {
        "name": "公館台6中正路",
        "lat": 24.501672,
        "lng": 120.828592,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.501538,
        "lng": 120.828569,
        "ele": 109.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 109.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501608,
        "lng": 120.828082,
        "ele": 109.5,
        "distanceKm": 0.04988658162927005,
        "gradePct": 0.3109906143811277,
        "smoothedEle": 109.65514258670261,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5012675,
        "lng": 120.8280485,
        "ele": 110,
        "distanceKm": 0.08789993102588488,
        "gradePct": 0.5688286579044042,
        "smoothedEle": 109.99999999795344,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500927,
        "lng": 120.828015,
        "ele": 110.5,
        "distanceKm": 0.12591328124112597,
        "gradePct": 0.5581488623487019,
        "smoothedEle": 110.13873673488679,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5005235,
        "lng": 120.82798249999999,
        "ele": 109.75,
        "distanceKm": 0.1709008437341086,
        "gradePct": -0.09578413852301537,
        "smoothedEle": 109.75000000289265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50012,
        "lng": 120.82795,
        "ele": 109,
        "distanceKm": 0.2158884069984633,
        "gradePct": -0.960561327796384,
        "smoothedEle": 109.14158777846207,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499688,
        "lng": 120.827907,
        "ele": 108.75,
        "distanceKm": 0.264121319561181,
        "gradePct": -1.0961568463224864,
        "smoothedEle": 108.71242490506721,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499158,
        "lng": 120.827949,
        "ele": 108.25,
        "distanceKm": 0.32320773786942514,
        "gradePct": -0.4171403155535387,
        "smoothedEle": 108.65932211797264,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498629,
        "lng": 120.8280015,
        "ele": 109.75,
        "distanceKm": 0.3822693160369922,
        "gradePct": 1.0538852441989524,
        "smoothedEle": 109.74999998492314,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4981,
        "lng": 120.828054,
        "ele": 111.25,
        "distanceKm": 0.4413308962148068,
        "gradePct": 2.05991591281844,
        "smoothedEle": 111.05391462257577,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.497603,
        "lng": 120.828116,
        "ele": 111.75,
        "distanceKm": 0.4969497877179362,
        "gradePct": 1.6383267323724489,
        "smoothedEle": 111.7124305061681,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49717667644931,
        "lng": 120.82810260062176,
        "ele": 112.02915371312844,
        "distanceKm": 0.5443742539104993,
        "gradePct": 0.9392063804774725,
        "smoothedEle": 112.0291537129456,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.496750352898623,
        "lng": 120.82808920124354,
        "ele": 112.30830742625686,
        "distanceKm": 0.5917987202340482,
        "gradePct": 0.6568644668320901,
        "smoothedEle": 112.30830742607282,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49632402934793,
        "lng": 120.82807580186531,
        "ele": 112.5874611393853,
        "distanceKm": 0.6392231866894532,
        "gradePct": 0.5927087102254378,
        "smoothedEle": 112.58746113920188,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49589770579724,
        "lng": 120.82806240248708,
        "ele": 112.86661485251372,
        "distanceKm": 0.6866476532762766,
        "gradePct": 0.7757579608778828,
        "smoothedEle": 113.0537447617692,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49547136211108,
        "lng": 120.8280498251433,
        "ele": 113.85761898660564,
        "distanceKm": 0.7340720530030923,
        "gradePct": 1.471710969544859,
        "smoothedEle": 114.02885109086614,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.495045,
        "lng": 120.828038,
        "ele": 115.5,
        "distanceKm": 0.781496519450907,
        "gradePct": 2.122035629492573,
        "smoothedEle": 115.12513376277465,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494550122833026,
        "lng": 120.82802140709664,
        "ele": 115.75309677873328,
        "distanceKm": 0.8365500342089706,
        "gradePct": 1.6989333463284744,
        "smoothedEle": 115.78506642813295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494055099696716,
        "lng": 120.82800954551989,
        "ele": 116.14848267035474,
        "distanceKm": 0.8916072558079037,
        "gradePct": 0.9165880561429137,
        "smoothedEle": 116.16292035132972,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493560076193216,
        "lng": 120.82799770258724,
        "ele": 116.60811772989074,
        "distanceKm": 0.9466644772350504,
        "gradePct": 0.738411859688114,
        "smoothedEle": 116.5928930143068,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493065,
        "lng": 120.827989,
        "ele": 117,
        "distanceKm": 1.0017215570479527,
        "gradePct": 0.7048894666037884,
        "smoothedEle": 116.9467980582698,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.492646783171995,
        "lng": 120.82803983588009,
        "ele": 117.13102030952543,
        "distanceKm": 1.0485088508081635,
        "gradePct": 0.5598746432845162,
        "smoothedEle": 117.1646232284406,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.492228542339546,
        "lng": 120.82809042678106,
        "ele": 117.38833690810065,
        "distanceKm": 1.0952960806212644,
        "gradePct": 0.7403429831621937,
        "smoothedEle": 117.6458382966261,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491810242926807,
        "lng": 120.8281404244287,
        "ele": 118.61347030759073,
        "distanceKm": 1.142083257627883,
        "gradePct": 1.4551874398792095,
        "smoothedEle": 118.58989536834294,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491392,
        "lng": 120.828191,
        "ele": 119.75,
        "distanceKm": 1.1888705529491463,
        "gradePct": 2.195761056009614,
        "smoothedEle": 119.77551164560074,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490912654002507,
        "lng": 120.82825092318276,
        "ele": 121.16472863556216,
        "distanceKm": 1.2425152687254126,
        "gradePct": 2.4846176575388466,
        "smoothedEle": 121.0854604291388,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490433242864658,
        "lng": 120.82831021569126,
        "ele": 122.23745494075803,
        "distanceKm": 1.2961600087905965,
        "gradePct": 2.2839422672840595,
        "smoothedEle": 122.2374549270385,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489953831726808,
        "lng": 120.82836950819977,
        "ele": 123.31018124595391,
        "distanceKm": 1.3498047514136604,
        "gradePct": 1.8373857791079033,
        "smoothedEle": 123.07938427589683,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48947441632208,
        "lng": 120.82842875862382,
        "ele": 123.38713281523981,
        "distanceKm": 1.403449491942673,
        "gradePct": 0.9856531469601313,
        "smoothedEle": 123.33751313036855,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488995,
        "lng": 120.828488,
        "ele": 123.25,
        "distanceKm": 1.4570942340695876,
        "gradePct": 0.5101345427186312,
        "smoothedEle": 123.62459449964422,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488646,
        "lng": 120.8285315,
        "ele": 124.375,
        "distanceKm": 1.496150169255776,
        "gradePct": 1.0726098913789022,
        "smoothedEle": 124.37499999225737,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488297,
        "lng": 120.828575,
        "ele": 125.5,
        "distanceKm": 1.5352061058184305,
        "gradePct": 1.4095344182472889,
        "smoothedEle": 124.91699397455713,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.487832229415933,
        "lng": 120.82862829782849,
        "ele": 124.5,
        "distanceKm": 1.5871669720968702,
        "gradePct": 0.5377953198395171,
        "smoothedEle": 124.74019566860778,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.487368,
        "lng": 120.828687,
        "ele": 124.5,
        "distanceKm": 1.6391276677663147,
        "gradePct": -0.04751380864642836,
        "smoothedEle": 124.85613694131267,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486884299534502,
        "lng": 120.82874825510739,
        "ele": 126.05318649488261,
        "distanceKm": 1.693268790872126,
        "gradePct": 1.2814414622094137,
        "smoothedEle": 126.03525228022009,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48640060473267,
        "lng": 120.82880957009824,
        "ele": 127.52816047990673,
        "distanceKm": 1.747409985213985,
        "gradePct": 2.5019120079509043,
        "smoothedEle": 127.53842584179982,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.485916772312052,
        "lng": 120.82886942473623,
        "ele": 129.04785326571107,
        "distanceKm": 1.8015496518889385,
        "gradePct": 2.767191739048554,
        "smoothedEle": 129.03235345327545,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.485433,
        "lng": 120.82893,
        "ele": 130.5,
        "distanceKm": 1.8556908873102091,
        "gradePct": 2.6067568592583377,
        "smoothedEle": 130.37368555394326,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4849085,
        "lng": 120.828993,
        "ele": 131.5,
        "distanceKm": 1.9143601213000292,
        "gradePct": 2.15027117666048,
        "smoothedEle": 131.49999998555938,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484384,
        "lng": 120.829056,
        "ele": 132.5,
        "distanceKm": 1.9730293581779714,
        "gradePct": 1.6265450179847663,
        "smoothedEle": 132.33308935723116,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.483777,
        "lng": 120.829153,
        "ele": 132.75,
        "distanceKm": 2.041234819904813,
        "gradePct": 0.9935482241434094,
        "smoothedEle": 132.87516261217246,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48336540005245,
        "lng": 120.82924303748852,
        "ele": 133.36838934427826,
        "distanceKm": 2.087900852707696,
        "gradePct": 0.9171065100317997,
        "smoothedEle": 133.36838932628322,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.482953800104898,
        "lng": 120.82933307497706,
        "ele": 133.98677868855654,
        "distanceKm": 2.1345668913305538,
        "gradePct": 1.4699026211337685,
        "smoothedEle": 134.29207085933012,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.482542,
        "lng": 120.829422,
        "ele": 135.75,
        "distanceKm": 2.1812329241489157,
        "gradePct": 2.052875827629377,
        "smoothedEle": 135.35078990038366,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.482161,
        "lng": 120.829506,
        "ele": 136,
        "distanceKm": 2.2244426536080284,
        "gradePct": 1.8373348155590163,
        "smoothedEle": 135.9290121618239,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.481659,
        "lng": 120.829626,
        "ele": 136,
        "distanceKm": 2.2815682595469795,
        "gradePct": 0.644722721550408,
        "smoothedEle": 136,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.481289,
        "lng": 120.829694,
        "ele": 136,
        "distanceKm": 2.3232819696360827,
        "gradePct": 0.14445965367380598,
        "smoothedEle": 136.05793982028558,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48080247965821,
        "lng": 120.82974426410767,
        "ele": 136.25377296675518,
        "distanceKm": 2.377619249113557,
        "gradePct": 0.3140358431137426,
        "smoothedEle": 136.3091285566352,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.480316,
        "lng": 120.829795,
        "ele": 136.75,
        "distanceKm": 2.431956517107705,
        "gradePct": 0.8646011723674284,
        "smoothedEle": 136.96264142901558,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.479827403644464,
        "lng": 120.82982986257277,
        "ele": 138.1809264938455,
        "distanceKm": 2.486400460862602,
        "gradePct": 1.7600697902749387,
        "smoothedEle": 138.17480974632235,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47933880698502,
        "lng": 120.82986471997734,
        "ele": 139.58499929149994,
        "distanceKm": 2.5408444053372325,
        "gradePct": 2.3523390313517587,
        "smoothedEle": 139.51286503258163,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.478850206741576,
        "lng": 120.82989951643384,
        "ele": 140.672388557322,
        "distanceKm": 2.5952883490977965,
        "gradePct": 2.276916192573877,
        "smoothedEle": 140.67016135814336,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.478361606272443,
        "lng": 120.82993430903893,
        "ele": 141.75,
        "distanceKm": 2.6497322935772454,
        "gradePct": 1.802749527830768,
        "smoothedEle": 141.5045413664389,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.477873,
        "lng": 120.829969,
        "ele": 141.75,
        "distanceKm": 2.7041762186114924,
        "gradePct": 1.1291028644587575,
        "smoothedEle": 141.9354751586295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.477475666666667,
        "lng": 120.830008,
        "ele": 142.41666666666666,
        "distanceKm": 2.7485336710226402,
        "gradePct": 0.9304947718992188,
        "smoothedEle": 142.41666666297007,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47707833333333,
        "lng": 120.830047,
        "ele": 143.08333333333334,
        "distanceKm": 2.792891124542766,
        "gradePct": 1.2371817893779553,
        "smoothedEle": 143.08333332963855,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476681,
        "lng": 120.830086,
        "ele": 143.75,
        "distanceKm": 2.8372485791713253,
        "gradePct": 1.453014192651294,
        "smoothedEle": 143.7472597058623,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476242620132748,
        "lng": 120.83011413961695,
        "ele": 144.4642097722207,
        "distanceKm": 2.8860773787179235,
        "gradePct": 1.483091831379879,
        "smoothedEle": 144.46401853358404,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47580430042466,
        "lng": 120.83014339621897,
        "ele": 145.17767274922906,
        "distanceKm": 2.9349062249660665,
        "gradePct": 1.4933260937784485,
        "smoothedEle": 145.20552628704354,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.475366,
        "lng": 120.830173,
        "ele": 146,
        "distanceKm": 2.9837350747747036,
        "gradePct": 1.712186440562219,
        "smoothedEle": 146.14182225238986,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.474968670913448,
        "lng": 120.83020473114233,
        "ele": 147.26464697688112,
        "distanceKm": 3.028032666892191,
        "gradePct": 2.163501537845205,
        "smoothedEle": 147.26464697223187,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47457134182689,
        "lng": 120.83023646228466,
        "ele": 148.52929395376225,
        "distanceKm": 3.0723302597449407,
        "gradePct": 2.733177625844346,
        "smoothedEle": 148.65631190299544,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.474174,
        "lng": 120.830268,
        "ele": 150.25,
        "distanceKm": 3.11662785150387,
        "gradePct": 2.9084777735866085,
        "smoothedEle": 149.88404337522664,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.473548,
        "lng": 120.830318,
        "ele": 151,
        "distanceKm": 3.1864196572428773,
        "gradePct": 1.9471357962405573,
        "smoothedEle": 150.9939428942599,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47312640282078,
        "lng": 120.83034428981146,
        "ele": 151.40427399606799,
        "distanceKm": 3.233374631452698,
        "gradePct": 1.2383081363559245,
        "smoothedEle": 151.38867565685644,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.472706,
        "lng": 120.830392,
        "ele": 151.75,
        "distanceKm": 3.2803700657069896,
        "gradePct": 0.7015582022219455,
        "smoothedEle": 151.59929440480892,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.472251,
        "lng": 120.830539,
        "ele": 151.5,
        "distanceKm": 3.3331058163757654,
        "gradePct": 0.12711237344998938,
        "smoothedEle": 151.51352820331832,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.471694,
        "lng": 120.83068,
        "ele": 151.25,
        "distanceKm": 3.3966641296992006,
        "gradePct": 0.38498298833513867,
        "smoothedEle": 151.95777772341842,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.471629,
        "lng": 120.830851,
        "ele": 152.25,
        "distanceKm": 3.415418992673309,
        "gradePct": 1.2263479510886828,
        "smoothedEle": 152.76864092339494,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47159,
        "lng": 120.830954,
        "ele": 153.25,
        "distanceKm": 3.4267092807364397,
        "gradePct": 1.8092241886484415,
        "smoothedEle": 153.3331553265515,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4712675,
        "lng": 120.83122800000001,
        "ele": 156.25000000000003,
        "distanceKm": 3.4720408346875073,
        "gradePct": 4.464329511516947,
        "smoothedEle": 156.24999934817376,
        "gradeBand": "hard"
      },
      {
        "lat": 24.470945,
        "lng": 120.831502,
        "ele": 159.25,
        "distanceKm": 3.5173724320936586,
        "gradePct": 6.335326281895499,
        "smoothedEle": 159.2016391763079,
        "gradeBand": "steep"
      },
      {
        "lat": 24.470693,
        "lng": 120.8317595,
        "ele": 161.75,
        "distanceKm": 3.5556392148764067,
        "gradePct": 6.55535707337304,
        "smoothedEle": 161.74999955593898,
        "gradeBand": "steep"
      },
      {
        "lat": 24.470441,
        "lng": 120.832017,
        "ele": 164.25,
        "distanceKm": 3.5939060331840373,
        "gradePct": 6.945425820930859,
        "smoothedEle": 164.61911624608527,
        "gradeBand": "steep"
      },
      {
        "lat": 24.470068,
        "lng": 120.832472,
        "ele": 170.25,
        "distanceKm": 3.65587999927604,
        "gradePct": 8.030574921387903,
        "smoothedEle": 169.79862767773045,
        "gradeBand": "steep"
      },
      {
        "lat": 24.469983,
        "lng": 120.832843,
        "ele": 172.5,
        "distanceKm": 3.6945992263897827,
        "gradePct": 7.847047221252887,
        "smoothedEle": 172.5240975057724,
        "gradeBand": "steep"
      },
      {
        "lat": 24.469841,
        "lng": 120.833169,
        "ele": 174.75,
        "distanceKm": 3.7311764529904234,
        "gradePct": 6.907762112794864,
        "smoothedEle": 174.64177607516982,
        "gradeBand": "steep"
      },
      {
        "lat": 24.469475,
        "lng": 120.833385,
        "ele": 177,
        "distanceKm": 3.7773735840204155,
        "gradePct": 5.71116626817368,
        "smoothedEle": 177.02274038321735,
        "gradeBand": "hard"
      },
      {
        "lat": 24.469177,
        "lng": 120.833552,
        "ele": 179,
        "distanceKm": 3.8145713181074226,
        "gradePct": 5.035967855815552,
        "smoothedEle": 178.71637147189716,
        "gradeBand": "hard"
      },
      {
        "lat": 24.468729,
        "lng": 120.83376,
        "ele": 180.5,
        "distanceKm": 3.8686521006371453,
        "gradePct": 3.791923586866741,
        "smoothedEle": 180.36516547990047,
        "gradeBand": "hard"
      },
      {
        "lat": 24.468376,
        "lng": 120.833959,
        "ele": 181.25,
        "distanceKm": 3.9127695377231277,
        "gradePct": 2.439567719955475,
        "smoothedEle": 181.07390324668788,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.467784,
        "lng": 120.834276,
        "ele": 181.5,
        "distanceKm": 3.9859992516307856,
        "gradePct": 0.8226931655579498,
        "smoothedEle": 181.4665371423846,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.467397,
        "lng": 120.834516,
        "ele": 181.5,
        "distanceKm": 4.035413934630003,
        "gradePct": -0.35897243249144106,
        "smoothedEle": 180.83634270151393,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46705183653726,
        "lng": 120.83469710910849,
        "ele": 179.1903044771363,
        "distanceKm": 4.077946853630232,
        "gradePct": -2.487512635614363,
        "smoothedEle": 178.9358501690875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466695,
        "lng": 120.834846,
        "ele": 176,
        "distanceKm": 4.120390491025056,
        "gradePct": -4.296016926615054,
        "smoothedEle": 176.73192248397262,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466628,
        "lng": 120.835338,
        "ele": 175.25,
        "distanceKm": 4.170740058341797,
        "gradePct": -3.685759468664499,
        "smoothedEle": 175.57211093675627,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466623,
        "lng": 120.835542,
        "ele": 175.25,
        "distanceKm": 4.191394394690342,
        "gradePct": -2.097468165342527,
        "smoothedEle": 176.14010518634126,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466835,
        "lng": 120.835988,
        "ele": 178.75,
        "distanceKm": 4.242318761182161,
        "gradePct": 2.623158842422877,
        "smoothedEle": 178.84995958863163,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.467016,
        "lng": 120.836519,
        "ele": 183.25,
        "distanceKm": 4.299706175625501,
        "gradePct": 6.666836027233382,
        "smoothedEle": 183.2492386383572,
        "gradeBand": "steep"
      },
      {
        "lat": 24.467016,
        "lng": 120.836876,
        "ele": 186.25,
        "distanceKm": 4.335838054733364,
        "gradePct": 7.243222797941653,
        "smoothedEle": 185.74832250691148,
        "gradeBand": "steep"
      },
      {
        "lat": 24.466884,
        "lng": 120.83752,
        "ele": 189,
        "distanceKm": 4.402649376893834,
        "gradePct": 5.276375268698492,
        "smoothedEle": 188.7291822514986,
        "gradeBand": "hard"
      },
      {
        "lat": 24.466863,
        "lng": 120.838141,
        "ele": 190,
        "distanceKm": 4.465544062535404,
        "gradePct": 3.1715873710695743,
        "smoothedEle": 190.2452756987144,
        "gradeBand": "hard"
      },
      {
        "lat": 24.466881,
        "lng": 120.838845,
        "ele": 193,
        "distanceKm": 4.5368239111683,
        "gradePct": 2.926178066112424,
        "smoothedEle": 192.47914673051147,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46682188502572,
        "lng": 120.83940285751235,
        "ele": 192.58269110082446,
        "distanceKm": 4.593665953521148,
        "gradePct": 1.5822449847281972,
        "smoothedEle": 192.7088451929256,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466765,
        "lng": 120.839961,
        "ele": 192.75,
        "distanceKm": 4.650508544325294,
        "gradePct": 0.28522172214934577,
        "smoothedEle": 192.81966799969945,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46674912016657,
        "lng": 120.84052437373572,
        "ele": 193.2424895893881,
        "distanceKm": 4.707554908310368,
        "gradePct": 0.18766627842296724,
        "smoothedEle": 192.92358998643948,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466741,
        "lng": 120.841088,
        "ele": 192.25,
        "distanceKm": 4.764606647208421,
        "gradePct": -0.4576293856854095,
        "smoothedEle": 192.3877212826108,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466759,
        "lng": 120.84147949999999,
        "ele": 192,
        "distanceKm": 4.804280865193035,
        "gradePct": -0.9176256332648085,
        "smoothedEle": 191.99999999293053,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466777,
        "lng": 120.841871,
        "ele": 191.75,
        "distanceKm": 4.843955077522068,
        "gradePct": -2.603893665265256,
        "smoothedEle": 189.97780119455112,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466621,
        "lng": 120.842284,
        "ele": 185,
        "distanceKm": 4.889211194854286,
        "gradePct": -4.940850397463226,
        "smoothedEle": 187.20641984591214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466494,
        "lng": 120.842681,
        "ele": 186.25,
        "distanceKm": 4.93180098591437,
        "gradePct": -4.347296768182575,
        "smoothedEle": 186.24999976103697,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466367,
        "lng": 120.843078,
        "ele": 187.5,
        "distanceKm": 4.974390815208543,
        "gradePct": -0.608802169820111,
        "smoothedEle": 187.50518390472914,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466269,
        "lng": 120.84377,
        "ele": 190,
        "distanceKm": 5.0452710174772974,
        "gradePct": 3.0459438423600993,
        "smoothedEle": 189.69292500278326,
        "gradeBand": "hard"
      },
      {
        "lat": 24.46617,
        "lng": 120.844297,
        "ele": 190.25,
        "distanceKm": 5.099733037938217,
        "gradePct": 2.8752944390565562,
        "smoothedEle": 191.1626745058611,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466324,
        "lng": 120.844991,
        "ele": 197.25,
        "distanceKm": 5.172030267072932,
        "gradePct": 7.646955722208218,
        "smoothedEle": 198.06202421990903,
        "gradeBand": "steep"
      },
      {
        "lat": 24.466518,
        "lng": 120.845266,
        "ele": 202.75,
        "distanceKm": 5.207244041611332,
        "gradePct": 9.08892660184603,
        "smoothedEle": 200.968378799806,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.466631,
        "lng": 120.845797,
        "ele": 202.75,
        "distanceKm": 5.262435919965554,
        "gradePct": 5.711515156006491,
        "smoothedEle": 202.85794749550726,
        "gradeBand": "hard"
      },
      {
        "lat": 24.466619,
        "lng": 120.846216,
        "ele": 203.125,
        "distanceKm": 5.304863922361681,
        "gradePct": 2.35306336823198,
        "smoothedEle": 203.12499999242343,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466607,
        "lng": 120.846635,
        "ele": 203.5,
        "distanceKm": 5.347291928798637,
        "gradePct": 0.17017497090464023,
        "smoothedEle": 202.50964742098353,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466424,
        "lng": 120.84721200000001,
        "ele": 198.875,
        "distanceKm": 5.4091338708057375,
        "gradePct": -4.1880691451350325,
        "smoothedEle": 198.87500185331433,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466241,
        "lng": 120.847789,
        "ele": 194.25,
        "distanceKm": 5.47097589295616,
        "gradePct": -7.075342785960199,
        "smoothedEle": 194.04232352065128,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466063248214045,
        "lng": 120.84814315082262,
        "ele": 190.55906337950117,
        "distanceKm": 5.511907974473567,
        "gradePct": -7.986372130883296,
        "smoothedEle": 190.67184588804298,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465885,
        "lng": 120.848497,
        "ele": 187.25,
        "distanceKm": 5.55284006935984,
        "gradePct": -7.199429888524091,
        "smoothedEle": 188.26012739472552,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4656405,
        "lng": 120.8488815,
        "ele": 187.375,
        "distanceKm": 5.600311771524457,
        "gradePct": -4.251714118507338,
        "smoothedEle": 187.37499996128733,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465396,
        "lng": 120.849266,
        "ele": 187.5,
        "distanceKm": 5.647783535629364,
        "gradePct": 0.40248615718363256,
        "smoothedEle": 188.96054445292347,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465191,
        "lng": 120.849684,
        "ele": 193.25,
        "distanceKm": 5.695840071269089,
        "gradePct": 5.210074201686343,
        "smoothedEle": 192.66845066707316,
        "gradeBand": "hard"
      },
      {
        "lat": 24.465064,
        "lng": 120.850381,
        "ele": 199.75,
        "distanceKm": 5.767783909194285,
        "gradePct": 9.417212174979374,
        "smoothedEle": 199.92092881956165,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.464975,
        "lng": 120.850684,
        "ele": 202.75,
        "distanceKm": 5.800008205455567,
        "gradePct": 9.677582025345693,
        "smoothedEle": 202.76621186266976,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.464772,
        "lng": 120.850896,
        "ele": 205.75,
        "distanceKm": 5.831151710872201,
        "gradePct": 8.406693553227969,
        "smoothedEle": 204.63482218766782,
        "gradeBand": "steep"
      },
      {
        "lat": 24.464483,
        "lng": 120.851362,
        "ele": 205.75,
        "distanceKm": 5.888223467604972,
        "gradePct": 4.1160761020739045,
        "smoothedEle": 205.84174034496334,
        "gradeBand": "hard"
      },
      {
        "lat": 24.464191000000003,
        "lng": 120.85175149999999,
        "ele": 206.125,
        "distanceKm": 5.9392952836245225,
        "gradePct": 1.3179624481458962,
        "smoothedEle": 206.12499986770248,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463899,
        "lng": 120.852141,
        "ele": 206.5,
        "distanceKm": 5.990367170202752,
        "gradePct": -0.5120210717646518,
        "smoothedEle": 205.34160888712017,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463665595304278,
        "lng": 120.85252622099725,
        "ele": 202.4872202590735,
        "distanceKm": 6.0372044765549955,
        "gradePct": -3.6841808423134372,
        "smoothedEle": 202.42922278584226,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463443,
        "lng": 120.85292,
        "ele": 198.25,
        "distanceKm": 6.084120222979224,
        "gradePct": -5.126465160718216,
        "smoothedEle": 200.31096556575363,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463372,
        "lng": 120.853283,
        "ele": 201.25,
        "distanceKm": 6.121699076825334,
        "gradePct": -2.8644366903607295,
        "smoothedEle": 200.52892588455933,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463436,
        "lng": 120.853698,
        "ele": 202,
        "distanceKm": 6.164300922993951,
        "gradePct": 0.9904060195198134,
        "smoothedEle": 202.19621774015044,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463692,
        "lng": 120.854258,
        "ele": 204.25,
        "distanceKm": 6.227726628147897,
        "gradePct": 3.3766300481642144,
        "smoothedEle": 204.14145386046803,
        "gradeBand": "hard"
      },
      {
        "lat": 24.464093,
        "lng": 120.85483,
        "ele": 206.5,
        "distanceKm": 6.300800879038021,
        "gradePct": 3.2889004481396684,
        "smoothedEle": 206.60455442813318,
        "gradeBand": "hard"
      },
      {
        "lat": 24.464393,
        "lng": 120.855196,
        "ele": 208.125,
        "distanceKm": 6.350650835269494,
        "gradePct": 3.210844566105362,
        "smoothedEle": 208.12500053281028,
        "gradeBand": "hard"
      },
      {
        "lat": 24.464693,
        "lng": 120.855562,
        "ele": 209.75,
        "distanceKm": 6.400500725924316,
        "gradePct": 3.159787750503693,
        "smoothedEle": 209.75422497188146,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4649115,
        "lng": 120.85593750000001,
        "ele": 211.25,
        "distanceKm": 6.445608111216179,
        "gradePct": 3.2788052374699084,
        "smoothedEle": 211.2500004167063,
        "gradeBand": "hard"
      },
      {
        "lat": 24.46513,
        "lng": 120.856313,
        "ele": 212.75,
        "distanceKm": 6.490715440947201,
        "gradePct": 3.354501679756266,
        "smoothedEle": 212.78891801778568,
        "gradeBand": "hard"
      },
      {
        "lat": 24.465281471261438,
        "lng": 120.85671972430657,
        "ele": 214.3731713272594,
        "distanceKm": 6.535192892312256,
        "gradePct": 3.813661931487771,
        "smoothedEle": 214.7182903301052,
        "gradeBand": "hard"
      },
      {
        "lat": 24.465484,
        "lng": 120.857101,
        "ele": 217.25,
        "distanceKm": 6.579872806330856,
        "gradePct": 3.8224506853863285,
        "smoothedEle": 216.24145274156078,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4657005,
        "lng": 120.857456,
        "ele": 216.5,
        "distanceKm": 6.623122083453423,
        "gradePct": 2.305325010369139,
        "smoothedEle": 216.49999980755214,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465917,
        "lng": 120.857811,
        "ele": 215.75,
        "distanceKm": 6.666371309256558,
        "gradePct": -0.3489013399363342,
        "smoothedEle": 215.43227807089718,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466076,
        "lng": 120.858303,
        "ele": 213.5,
        "distanceKm": 6.719212435270689,
        "gradePct": -2.8815609662746726,
        "smoothedEle": 213.59506670343018,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46606,
        "lng": 120.858799,
        "ele": 211.75,
        "distanceKm": 6.769444363395163,
        "gradePct": -4.061720325917875,
        "smoothedEle": 211.26371199012584,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465823,
        "lng": 120.859432,
        "ele": 205.75,
        "distanceKm": 6.838719075435662,
        "gradePct": -5.948498890207951,
        "smoothedEle": 206.74122933255208,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465669,
        "lng": 120.859837,
        "ele": 206,
        "distanceKm": 6.883142520422021,
        "gradePct": -4.362015356821375,
        "smoothedEle": 206.00743557079045,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465601,
        "lng": 120.860517,
        "ele": 206.5,
        "distanceKm": 6.952380014599012,
        "gradePct": 0.13864245772248346,
        "smoothedEle": 206.6542181530803,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465594,
        "lng": 120.860896,
        "ele": 207.25,
        "distanceKm": 6.990746836562259,
        "gradePct": 1.4745567162641515,
        "smoothedEle": 207.55302806453608,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465655,
        "lng": 120.861275,
        "ele": 209,
        "distanceKm": 7.029700838599523,
        "gradePct": 2.2352156830880654,
        "smoothedEle": 208.67757613982167,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465626,
        "lng": 120.861704,
        "ele": 209.75,
        "distanceKm": 7.073239872734029,
        "gradePct": 2.3953745623735556,
        "smoothedEle": 209.53827137800442,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465536,
        "lng": 120.862346,
        "ele": 209.75,
        "distanceKm": 7.138983414821998,
        "gradePct": 0.8216992821735148,
        "smoothedEle": 209.6827767171335,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465428,
        "lng": 120.862787,
        "ele": 209.5,
        "distanceKm": 7.18520478852877,
        "gradePct": -0.06985028461716095,
        "smoothedEle": 209.49472016641647,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465251,
        "lng": 120.863461,
        "ele": 209,
        "distanceKm": 7.256203541948743,
        "gradePct": 0.12652419229763767,
        "smoothedEle": 209.73923899974173,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465223,
        "lng": 120.863921,
        "ele": 211.5,
        "distanceKm": 7.302864671285407,
        "gradePct": 2.211999333120425,
        "smoothedEle": 211.76753991849228,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465557758640834,
        "lng": 120.8643593232593,
        "ele": 215.93952106633316,
        "distanceKm": 7.360775635651858,
        "gradePct": 5.706440865023658,
        "smoothedEle": 215.6444230583073,
        "gradeBand": "hard"
      },
      {
        "lat": 24.465915,
        "lng": 120.86478,
        "ele": 219,
        "distanceKm": 7.419005846830456,
        "gradePct": 5.442502602710354,
        "smoothedEle": 218.29062289163844,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4663,
        "lng": 120.865351,
        "ele": 218.5,
        "distanceKm": 7.490926120989047,
        "gradePct": 1.3631197104641095,
        "smoothedEle": 218.37769423584092,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466759,
        "lng": 120.86569,
        "ele": 217.5,
        "distanceKm": 7.552425105236527,
        "gradePct": -1.542242511991992,
        "smoothedEle": 216.78883989938146,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466866,
        "lng": 120.865799,
        "ele": 216,
        "distanceKm": 7.568650448803818,
        "gradePct": -2.3325897837343432,
        "smoothedEle": 216.01813607993515,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466947,
        "lng": 120.865957,
        "ele": 215,
        "distanceKm": 7.587003635699585,
        "gradePct": -3.0733054927252224,
        "smoothedEle": 215.2996399282542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466969,
        "lng": 120.866026,
        "ele": 214.75,
        "distanceKm": 7.594403181331371,
        "gradePct": -3.3748863496435155,
        "smoothedEle": 214.9129764447414,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466988,
        "lng": 120.866183,
        "ele": 213.75,
        "distanceKm": 7.610432952244691,
        "gradePct": -4.08283386336096,
        "smoothedEle": 213.79089248080894,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466958,
        "lng": 120.866787,
        "ele": 210.5,
        "distanceKm": 7.671654609044462,
        "gradePct": -4.31643991554141,
        "smoothedEle": 211.58408838411043,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466741,
        "lng": 120.867271,
        "ele": 212.5,
        "distanceKm": 7.726260578333791,
        "gradePct": -0.6870331146112416,
        "smoothedEle": 212.53333462184662,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466646,
        "lng": 120.867601,
        "ele": 214,
        "distanceKm": 7.761290587806687,
        "gradePct": 1.8487820946775524,
        "smoothedEle": 213.80645338590523,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46666133574208,
        "lng": 120.86813912325368,
        "ele": 215.29083441424734,
        "distanceKm": 7.815780751437816,
        "gradePct": 2.9805240752860804,
        "smoothedEle": 215.3316819794112,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466699089871618,
        "lng": 120.86867656817999,
        "ele": 216.76332829873957,
        "distanceKm": 7.870337319238058,
        "gradePct": 2.706870232112048,
        "smoothedEle": 216.76654975164215,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466737,
        "lng": 120.869214,
        "ele": 218.25,
        "distanceKm": 7.924893885743147,
        "gradePct": 2.2001844227153606,
        "smoothedEle": 217.77154685208833,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466656,
        "lng": 120.869825,
        "ele": 217.5,
        "distanceKm": 7.987385668413375,
        "gradePct": 0.4616789130648459,
        "smoothedEle": 217.54227961377083,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466584,
        "lng": 120.870419,
        "ele": 217,
        "distanceKm": 8.04803518792704,
        "gradePct": 0.12466906702104595,
        "smoothedEle": 217.8113160776251,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466648,
        "lng": 120.870774,
        "ele": 219.25,
        "distanceKm": 8.08466275446844,
        "gradePct": 2.3509865380838817,
        "smoothedEle": 219.90325586464024,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466946,
        "lng": 120.87131,
        "ele": 226.75,
        "distanceKm": 8.148230868040454,
        "gradePct": 8.001357175676617,
        "smoothedEle": 225.8238492896435,
        "gradeBand": "steep"
      },
      {
        "lat": 24.467022,
        "lng": 120.871794,
        "ele": 228.5,
        "distanceKm": 8.197940007389825,
        "gradePct": 7.567640652189538,
        "smoothedEle": 228.707510472023,
        "gradeBand": "steep"
      },
      {
        "lat": 24.46707106410974,
        "lng": 120.87238712825808,
        "ele": 231.76041686767266,
        "distanceKm": 8.258217755359011,
        "gradePct": 5.153565028311864,
        "smoothedEle": 231.55676048387699,
        "gradeBand": "hard"
      },
      {
        "lat": 24.467151,
        "lng": 120.872977,
        "ele": 234,
        "distanceKm": 8.318576528158028,
        "gradePct": 4.606137360897309,
        "smoothedEle": 234.28910907731657,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4672425,
        "lng": 120.8734015,
        "ele": 236.62500000000003,
        "distanceKm": 8.362728284635212,
        "gradePct": 4.8640552081213455,
        "smoothedEle": 236.625000398744,
        "gradeBand": "hard"
      },
      {
        "lat": 24.467334,
        "lng": 120.873826,
        "ele": 239.24999999999994,
        "distanceKm": 8.406880010731902,
        "gradePct": 5.49037463353533,
        "smoothedEle": 239.250000398727,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4674255,
        "lng": 120.8742505,
        "ele": 241.87499999999997,
        "distanceKm": 8.45103170644939,
        "gradePct": 5.868818766354416,
        "smoothedEle": 241.8750003987651,
        "gradeBand": "hard"
      },
      {
        "lat": 24.467517,
        "lng": 120.874675,
        "ele": 244.5,
        "distanceKm": 8.495183371784773,
        "gradePct": 6.007614884769531,
        "smoothedEle": 244.56220244349169,
        "gradeBand": "steep"
      },
      {
        "lat": 24.46756,
        "lng": 120.875212,
        "ele": 248,
        "distanceKm": 8.549742695443927,
        "gradePct": 5.998612173282247,
        "smoothedEle": 247.79697556333446,
        "gradeBand": "hard"
      },
      {
        "lat": 24.467869,
        "lng": 120.875856,
        "ele": 252.5,
        "distanceKm": 8.62342325547507,
        "gradePct": 6.058335114738661,
        "smoothedEle": 252.29485480672747,
        "gradeBand": "steep"
      },
      {
        "lat": 24.468162,
        "lng": 120.876369,
        "ele": 254.5,
        "distanceKm": 8.684719034872394,
        "gradePct": 2.9769723772184413,
        "smoothedEle": 252.90910205798468,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.468303,
        "lng": 120.876881,
        "ele": 249.25,
        "distanceKm": 8.738857863977595,
        "gradePct": -3.756218690459476,
        "smoothedEle": 248.69330689360575,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468247,
        "lng": 120.877308,
        "ele": 243,
        "distanceKm": 8.78252030102135,
        "gradePct": -9.211516790361006,
        "smoothedEle": 243.6755516751394,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467960553742483,
        "lng": 120.87777990608387,
        "ele": 237.90520658686174,
        "distanceKm": 8.839927909956181,
        "gradePct": -9.507468677002839,
        "smoothedEle": 239.0628668673933,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467633,
        "lng": 120.878224,
        "ele": 238.25,
        "distanceKm": 8.897779127224512,
        "gradePct": -3.8904606865332454,
        "smoothedEle": 238.55904870749907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4673586013157,
        "lng": 120.87845069996187,
        "ele": 239.48483283542018,
        "distanceKm": 8.93595507949297,
        "gradePct": -0.5828630893930459,
        "smoothedEle": 238.79921955899897,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46706,
        "lng": 120.878639,
        "ele": 238.5,
        "distanceKm": 8.974238726279768,
        "gradePct": -1.6882754880554165,
        "smoothedEle": 237.07578327881964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466739,
        "lng": 120.878815,
        "ele": 232.75,
        "distanceKm": 9.0141302679558,
        "gradePct": -4.183798099378792,
        "smoothedEle": 234.47811817681412,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46645,
        "lng": 120.879033,
        "ele": 232.75,
        "distanceKm": 9.05311095200671,
        "gradePct": -6.092984187300169,
        "smoothedEle": 231.93391989002671,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466013,
        "lng": 120.879251,
        "ele": 229.25,
        "distanceKm": 9.10647780286538,
        "gradePct": -4.84209548886712,
        "smoothedEle": 230.13433738511108,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465617,
        "lng": 120.87935999999999,
        "ele": 229.5,
        "distanceKm": 9.15187198275516,
        "gradePct": -2.51478516817094,
        "smoothedEle": 229.49999998946004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465221,
        "lng": 120.879469,
        "ele": 229.75,
        "distanceKm": 9.197266171076938,
        "gradePct": -0.9556617931647258,
        "smoothedEle": 229.48930084229332,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464792,
        "lng": 120.879565,
        "ele": 229,
        "distanceKm": 9.245948332914564,
        "gradePct": -1.733329497840379,
        "smoothedEle": 227.84944746042396,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464424448763783,
        "lng": 120.8794389346486,
        "ele": 224.30296147362552,
        "distanceKm": 9.288763601508006,
        "gradePct": -5.071765327066732,
        "smoothedEle": 224.41953952160884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464063,
        "lng": 120.879288,
        "ele": 220,
        "distanceKm": 9.331760238023637,
        "gradePct": -7.462239435988718,
        "smoothedEle": 220.86513247378022,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4636735,
        "lng": 120.8790965,
        "ele": 218.625,
        "distanceKm": 9.379209850980535,
        "gradePct": -6.5598851249050325,
        "smoothedEle": 218.62500016834397,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463284,
        "lng": 120.878905,
        "ele": 217.25,
        "distanceKm": 9.42665948842383,
        "gradePct": -3.5406107140028507,
        "smoothedEle": 217.74618591297622,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462752,
        "lng": 120.878663,
        "ele": 218,
        "distanceKm": 9.490685576317475,
        "gradePct": -0.6474879577565128,
        "smoothedEle": 217.76497041764247,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46238,
        "lng": 120.878451,
        "ele": 217.625,
        "distanceKm": 9.53728428993951,
        "gradePct": -0.12430305064194203,
        "smoothedEle": 217.6250000547197,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462008,
        "lng": 120.878239,
        "ele": 217.25,
        "distanceKm": 9.583883032745394,
        "gradePct": 0.28574197422457914,
        "smoothedEle": 218.048716605217,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461661,
        "lng": 120.87802775,
        "ele": 219.74999999999997,
        "distanceKm": 9.627995892907151,
        "gradePct": 2.0970996700508597,
        "smoothedEle": 219.7499996430845,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461314,
        "lng": 120.8778165,
        "ele": 222.24999999999994,
        "distanceKm": 9.672108781622146,
        "gradePct": 4.3083448333242,
        "smoothedEle": 222.2499996430886,
        "gradeBand": "hard"
      },
      {
        "lat": 24.460967,
        "lng": 120.87760524999999,
        "ele": 224.75000000000003,
        "distanceKm": 9.716221698890052,
        "gradePct": 5.454090632376355,
        "smoothedEle": 224.74999964310558,
        "gradeBand": "hard"
      },
      {
        "lat": 24.46062,
        "lng": 120.877394,
        "ele": 227.25,
        "distanceKm": 9.760334644709507,
        "gradePct": 4.968685240637303,
        "smoothedEle": 226.55141182274315,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4603055,
        "lng": 120.877194,
        "ele": 227.25,
        "distanceKm": 9.800741818432165,
        "gradePct": 3.3772876355831,
        "smoothedEle": 227.24999999999997,
        "gradeBand": "hard"
      },
      {
        "lat": 24.459991,
        "lng": 120.876994,
        "ele": 227.25,
        "distanceKm": 9.841149017477802,
        "gradePct": 1.1154088260789234,
        "smoothedEle": 226.883349449446,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45964147348906,
        "lng": 120.87677555133122,
        "ele": 225.9236050005713,
        "distanceKm": 9.88586374412983,
        "gradePct": -1.0269367370037266,
        "smoothedEle": 225.96584045203457,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459292,
        "lng": 120.876557,
        "ele": 224.75,
        "distanceKm": 9.930578516317606,
        "gradePct": -1.2074091186257803,
        "smoothedEle": 225.7718559142201,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458969623790107,
        "lng": 120.8763791470014,
        "ele": 227.0791827928001,
        "distanceKm": 9.970691347540194,
        "gradePct": 0.9789811184707594,
        "smoothedEle": 227.2561465282003,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.458645,
        "lng": 120.876206,
        "ele": 230,
        "distanceKm": 10.010817381557382,
        "gradePct": 3.9440883813768006,
        "smoothedEle": 229.801673337826,
        "gradeBand": "hard"
      },
      {
        "lat": 24.458279,
        "lng": 120.875996,
        "ele": 232.5,
        "distanceKm": 10.056731150488945,
        "gradePct": 4.886475851350656,
        "smoothedEle": 231.62605476712037,
        "gradeBand": "hard"
      },
      {
        "lat": 24.457801,
        "lng": 120.875712,
        "ele": 231.5,
        "distanceKm": 10.117157681584112,
        "gradePct": 1.190601203557155,
        "smoothedEle": 231.24420606201616,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.457406,
        "lng": 120.875517,
        "ele": 229.75,
        "distanceKm": 10.165310677868913,
        "gradePct": -2.352085868439482,
        "smoothedEle": 229.2197529547723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.456986,
        "lng": 120.87543,
        "ele": 226,
        "distanceKm": 10.212835567056342,
        "gradePct": -3.985431177989412,
        "smoothedEle": 227.28608728812856,
        "gradeBand": "descent"
      },
      {
        "lat": 24.456550319390818,
        "lng": 120.8753578943514,
        "ele": 227.18483460151214,
        "distanceKm": 10.261827779132666,
        "gradePct": -2.181346754099942,
        "smoothedEle": 227.18483457923278,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45611463878163,
        "lng": 120.87528578870278,
        "ele": 228.36966920302427,
        "distanceKm": 10.31081999496974,
        "gradePct": 1.001573441701769,
        "smoothedEle": 228.3696691807524,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45567895817245,
        "lng": 120.87521368305418,
        "ele": 229.5545038045364,
        "distanceKm": 10.359812214566306,
        "gradePct": 2.3655036149926985,
        "smoothedEle": 229.5545037822577,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455243277563262,
        "lng": 120.87514157740557,
        "ele": 230.7393384060486,
        "distanceKm": 10.408804437923521,
        "gradePct": 2.418413716594964,
        "smoothedEle": 230.7393383837773,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45480759695408,
        "lng": 120.87506947175697,
        "ele": 231.92417300756074,
        "distanceKm": 10.457796665040126,
        "gradePct": 2.417471621159572,
        "smoothedEle": 231.92323107545397,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.454371896483906,
        "lng": 120.87499751266651,
        "ele": 233.10531385529575,
        "distanceKm": 10.506788872063956,
        "gradePct": 2.405422738346013,
        "smoothedEle": 233.0960164028922,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.453936,
        "lng": 120.874927,
        "ele": 234.25,
        "distanceKm": 10.555781093533245,
        "gradePct": 2.279705031379032,
        "smoothedEle": 234.15423000553923,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.453397,
        "lng": 120.874828,
        "ele": 235.25,
        "distanceKm": 10.616547195069153,
        "gradePct": 1.2208537536864172,
        "smoothedEle": 234.5276462723258,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.452977,
        "lng": 120.874749,
        "ele": 233.25,
        "distanceKm": 10.663928771533785,
        "gradePct": -0.6309885306913282,
        "smoothedEle": 233.57331010563118,
        "gradeBand": "descent"
      },
      {
        "lat": 24.452388,
        "lng": 120.874586,
        "ele": 232,
        "distanceKm": 10.731468910778185,
        "gradePct": -1.3792342565223001,
        "smoothedEle": 232.84786623339596,
        "gradeBand": "descent"
      },
      {
        "lat": 24.451986,
        "lng": 120.874303,
        "ele": 234.75,
        "distanceKm": 10.784560394147391,
        "gradePct": 1.4691507603243446,
        "smoothedEle": 234.82085806254477,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.451467,
        "lng": 120.874084,
        "ele": 238.5,
        "distanceKm": 10.846381718615756,
        "gradePct": 4.947155902249978,
        "smoothedEle": 238.34921362072055,
        "gradeBand": "hard"
      },
      {
        "lat": 24.451164,
        "lng": 120.873976,
        "ele": 240.25,
        "distanceKm": 10.881803000108473,
        "gradePct": 5.276343566501699,
        "smoothedEle": 239.99473103370264,
        "gradeBand": "hard"
      },
      {
        "lat": 24.450833,
        "lng": 120.873881,
        "ele": 241.25,
        "distanceKm": 10.919844035980194,
        "gradePct": 3.97236468941729,
        "smoothedEle": 240.80698151310216,
        "gradeBand": "hard"
      },
      {
        "lat": 24.450258,
        "lng": 120.873799,
        "ele": 240.5,
        "distanceKm": 10.984317724978473,
        "gradePct": 0.7180220069906821,
        "smoothedEle": 240.7664473325129,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.450833,
        "lng": 120.873881,
        "ele": 241.25,
        "distanceKm": 11.048791413976751,
        "gradePct": 0.018199024525017714,
        "smoothedEle": 240.80698151310216,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.451164,
        "lng": 120.873976,
        "ele": 240.25,
        "distanceKm": 11.086832449848472,
        "gradePct": -0.7732972896546954,
        "smoothedEle": 239.99473103370264,
        "gradeBand": "descent"
      },
      {
        "lat": 24.451467,
        "lng": 120.874084,
        "ele": 238.5,
        "distanceKm": 11.122253731341189,
        "gradePct": -2.5329188706849184,
        "smoothedEle": 238.25737857738108,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45189,
        "lng": 120.87426,
        "ele": 235.25,
        "distanceKm": 11.172550026137642,
        "gradePct": -4.7711326220040915,
        "smoothedEle": 235.52855607755257,
        "gradeBand": "descent"
      },
      {
        "lat": 24.452192,
        "lng": 120.874466,
        "ele": 233.5,
        "distanceKm": 11.212078125337065,
        "gradePct": -4.972650359181802,
        "smoothedEle": 233.783824053833,
        "gradeBand": "descent"
      },
      {
        "lat": 24.452501988842457,
        "lng": 120.87470289672109,
        "ele": 232.65427269268343,
        "distanceKm": 11.254067682479215,
        "gradePct": -3.171290889534828,
        "smoothedEle": 233.36002365022227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45278,
        "lng": 120.874988,
        "ele": 234.25,
        "distanceKm": 11.296357837287553,
        "gradePct": -0.5341570430402404,
        "smoothedEle": 233.94354530338921,
        "gradeBand": "descent"
      },
      {
        "lat": 24.453176,
        "lng": 120.875375,
        "ele": 235,
        "distanceKm": 11.35529352188597,
        "gradePct": 0.9096207821096162,
        "smoothedEle": 234.28655862525432,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.453547,
        "lng": 120.875738,
        "ele": 232.5,
        "distanceKm": 11.410537506526792,
        "gradePct": -0.43137256112530203,
        "smoothedEle": 233.5947002547861,
        "gradeBand": "descent"
      },
      {
        "lat": 24.453856833333333,
        "lng": 120.87604616666667,
        "ele": 234.5,
        "distanceKm": 11.457012500247158,
        "gradePct": 0.23496983648169673,
        "smoothedEle": 234.50000051483693,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.454166666666666,
        "lng": 120.87635433333334,
        "ele": 236.50000000000003,
        "distanceKm": 11.503487442483834,
        "gradePct": 2.8170074648924794,
        "smoothedEle": 236.50000051485202,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4544765,
        "lng": 120.8766625,
        "ele": 238.49999999999997,
        "distanceKm": 11.549962333235312,
        "gradePct": 4.137332305358613,
        "smoothedEle": 238.50000051483516,
        "gradeBand": "hard"
      },
      {
        "lat": 24.454786333333335,
        "lng": 120.87697066666667,
        "ele": 240.49999999999997,
        "distanceKm": 11.596437172503272,
        "gradePct": 4.303400914187464,
        "smoothedEle": 240.50000051485603,
        "gradeBand": "hard"
      },
      {
        "lat": 24.455096166666667,
        "lng": 120.87727883333334,
        "ele": 242.5,
        "distanceKm": 11.642911960285621,
        "gradePct": 4.30340568148408,
        "smoothedEle": 242.50000051485858,
        "gradeBand": "hard"
      },
      {
        "lat": 24.455406,
        "lng": 120.877587,
        "ele": 244.5,
        "distanceKm": 11.68938669658211,
        "gradePct": 5.436712182463585,
        "smoothedEle": 245.63330224847073,
        "gradeBand": "hard"
      },
      {
        "lat": 24.455754,
        "lng": 120.877935,
        "ele": 251.5,
        "distanceKm": 11.741713699853372,
        "gradePct": 8.139380527729061,
        "smoothedEle": 250.58781500046337,
        "gradeBand": "steep"
      },
      {
        "lat": 24.456008,
        "lng": 120.878281,
        "ele": 254.25,
        "distanceKm": 11.786704980873795,
        "gradePct": 8.482140021800832,
        "smoothedEle": 253.9346424390619,
        "gradeBand": "steep"
      },
      {
        "lat": 24.456255,
        "lng": 120.878762,
        "ele": 256.25,
        "distanceKm": 11.842603748370689,
        "gradePct": 4.488938794621918,
        "smoothedEle": 255.1429630412298,
        "gradeBand": "hard"
      },
      {
        "lat": 24.456398,
        "lng": 120.879196,
        "ele": 253.75,
        "distanceKm": 11.889321777671562,
        "gradePct": -0.9644112604907525,
        "smoothedEle": 253.02679645941754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.456508,
        "lng": 120.879618,
        "ele": 248.75,
        "distanceKm": 11.933752650698699,
        "gradePct": -5.893366397127004,
        "smoothedEle": 249.0582692830933,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4566315,
        "lng": 120.8799705,
        "ele": 245.24999999999991,
        "distanceKm": 11.971983571199937,
        "gradePct": -8.562158349914116,
        "smoothedEle": 245.24999942873887,
        "gradeBand": "descent"
      },
      {
        "lat": 24.456755,
        "lng": 120.880323,
        "ele": 241.75,
        "distanceKm": 12.010214459057684,
        "gradePct": -8.041542783238356,
        "smoothedEle": 243.11913743271782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.456981,
        "lng": 120.880794,
        "ele": 243,
        "distanceKm": 12.064105983821136,
        "gradePct": -4.067592800302364,
        "smoothedEle": 241.96711121170065,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457381,
        "lng": 120.881196,
        "ele": 239.25,
        "distanceKm": 12.124388073524024,
        "gradePct": -3.0625533420950255,
        "smoothedEle": 239.75359812792306,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457638,
        "lng": 120.881804,
        "ele": 237.75,
        "distanceKm": 12.192239714837651,
        "gradePct": -3.293438170271839,
        "smoothedEle": 237.64062355678973,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457746999999998,
        "lng": 120.882384,
        "ele": 236.00000000000003,
        "distanceKm": 12.252183813882443,
        "gradePct": -2.888008705315467,
        "smoothedEle": 235.99999956470435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457856,
        "lng": 120.882964,
        "ele": 234.25,
        "distanceKm": 12.31212786317916,
        "gradePct": -3.02206525851609,
        "smoothedEle": 234.07423493955818,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458022,
        "lng": 120.883313,
        "ele": 232.5,
        "distanceKm": 12.351984476996813,
        "gradePct": -3.121682055054418,
        "smoothedEle": 232.88377320724624,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458227,
        "lng": 120.88345,
        "ele": 232.25,
        "distanceKm": 12.37866588240029,
        "gradePct": -2.999201146242836,
        "smoothedEle": 232.15003455865067,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458518,
        "lng": 120.883518,
        "ele": 231.5,
        "distanceKm": 12.411747557299034,
        "gradePct": -2.4432492336574203,
        "smoothedEle": 231.6432034259126,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4588555,
        "lng": 120.88355999999999,
        "ele": 231.125,
        "distanceKm": 12.449515904383869,
        "gradePct": -1.8325060471295906,
        "smoothedEle": 231.12499999759723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459193,
        "lng": 120.883602,
        "ele": 230.75,
        "distanceKm": 12.487284250187225,
        "gradePct": -0.8312664884119016,
        "smoothedEle": 231.18672949839575,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459638,
        "lng": 120.883888,
        "ele": 232.25,
        "distanceKm": 12.544611563950289,
        "gradePct": 0.7376644862432071,
        "smoothedEle": 231.92995485322297,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459862,
        "lng": 120.884296,
        "ele": 232.25,
        "distanceKm": 12.59283759030773,
        "gradePct": 1.8743553811891966,
        "smoothedEle": 233.13308168024784,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459902,
        "lng": 120.884846,
        "ele": 236.25,
        "distanceKm": 12.648683506295336,
        "gradePct": 5.479903695610423,
        "smoothedEle": 237.51144400887344,
        "gradeBand": "hard"
      },
      {
        "lat": 24.459959,
        "lng": 120.8853,
        "ele": 244.25,
        "distanceKm": 12.695070364067302,
        "gradePct": 9.942702207202593,
        "smoothedEle": 243.25083504999967,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.460179,
        "lng": 120.885599,
        "ele": 248,
        "distanceKm": 12.733984457980842,
        "gradePct": 9.407322528713314,
        "smoothedEle": 245.7663499594235,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.460495,
        "lng": 120.885737,
        "ele": 244.5,
        "distanceKm": 12.771796497897679,
        "gradePct": 4.1484210823117715,
        "smoothedEle": 244.51960820179275,
        "gradeBand": "hard"
      },
      {
        "lat": 24.460923,
        "lng": 120.8858115,
        "ele": 240.375,
        "distanceKm": 12.819981656701914,
        "gradePct": -4.486170148458301,
        "smoothedEle": 240.37499991729732,
        "gradeBand": "descent"
      },
      {
        "lat": 24.461351,
        "lng": 120.885886,
        "ele": 236.25,
        "distanceKm": 12.868166811496321,
        "gradePct": -6.9373193153724015,
        "smoothedEle": 237.7019672114626,
        "gradeBand": "descent"
      },
      {
        "lat": 24.461774011980715,
        "lng": 120.88595991731843,
        "ele": 237.71370927583092,
        "distanceKm": 12.915794931994549,
        "gradePct": -2.413218613329613,
        "smoothedEle": 238.3218991148801,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462197,
        "lng": 120.886034,
        "ele": 241.5,
        "distanceKm": 12.963423049306433,
        "gradePct": 3.3499812667043445,
        "smoothedEle": 241.31510487013819,
        "gradeBand": "hard"
      },
      {
        "lat": 24.462516,
        "lng": 120.88603,
        "ele": 244,
        "distanceKm": 12.998896590243666,
        "gradePct": 6.669444298024582,
        "smoothedEle": 244.7713930756535,
        "gradeBand": "steep"
      },
      {
        "lat": 24.462982955167977,
        "lng": 120.88587500332264,
        "ele": 250.8969285242746,
        "distanceKm": 13.053137849714915,
        "gradePct": 10.10355366545523,
        "smoothedEle": 250.77228155600977,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.463448,
        "lng": 120.885713,
        "ele": 257.25,
        "distanceKm": 13.107385905911782,
        "gradePct": 11.114129743328203,
        "smoothedEle": 256.82472366157845,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.46379,
        "lng": 120.885555,
        "ele": 260.75,
        "distanceKm": 13.148640162640246,
        "gradePct": 8.566784877382647,
        "smoothedEle": 258.8414725571121,
        "gradeBand": "steep"
      },
      {
        "lat": 24.464118878573597,
        "lng": 120.88530470915376,
        "ele": 257.5778639149096,
        "distanceKm": 13.193126974553875,
        "gradePct": 1.6772978193415384,
        "smoothedEle": 256.91115606414235,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.464438,
        "lng": 120.885039,
        "ele": 252,
        "distanceKm": 13.237651085933951,
        "gradePct": -5.547644430367276,
        "smoothedEle": 252.75661790729464,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464675,
        "lng": 120.884564,
        "ele": 248.5,
        "distanceKm": 13.292475835699186,
        "gradePct": -8.51475288264527,
        "smoothedEle": 248.42465659000973,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464818,
        "lng": 120.884056,
        "ele": 244.75,
        "distanceKm": 13.346293953613923,
        "gradePct": -6.38930049544137,
        "smoothedEle": 245.6844037894405,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464972,
        "lng": 120.883723,
        "ele": 245,
        "distanceKm": 13.384098091851987,
        "gradePct": -4.374146787265532,
        "smoothedEle": 244.71247474426409,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465085,
        "lng": 120.88361,
        "ele": 244.75,
        "distanceKm": 13.401088753887372,
        "gradePct": -3.31611523509518,
        "smoothedEle": 244.66999808917564,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465235,
        "lng": 120.883545,
        "ele": 244.25,
        "distanceKm": 13.419018546857084,
        "gradePct": -2.360944638689696,
        "smoothedEle": 244.71223885260707,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465404,
        "lng": 120.883549,
        "ele": 244.5,
        "distanceKm": 13.437814875790046,
        "gradePct": -1.12194852946519,
        "smoothedEle": 244.99418378660147,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465858,
        "lng": 120.8837,
        "ele": 246.5,
        "distanceKm": 13.49056006230752,
        "gradePct": 1.508827259737222,
        "smoothedEle": 246.20514707786248,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466109,
        "lng": 120.883925,
        "ele": 247,
        "distanceKm": 13.526581547832345,
        "gradePct": 2.486145202912221,
        "smoothedEle": 247.3118290701482,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466176,
        "lng": 120.884162,
        "ele": 248.25,
        "distanceKm": 13.551698748542723,
        "gradePct": 2.501233002552633,
        "smoothedEle": 247.81417308435576,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46620366666667,
        "lng": 120.884623,
        "ele": 248.5,
        "distanceKm": 13.598458058501167,
        "gradePct": 2.052204136984791,
        "smoothedEle": 248.50000001278838,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466231333333333,
        "lng": 120.88508399999999,
        "ele": 248.75,
        "distanceKm": 13.645217358228916,
        "gradePct": 1.0654547347051315,
        "smoothedEle": 248.75000001278474,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466259,
        "lng": 120.885545,
        "ele": 249,
        "distanceKm": 13.69197664772888,
        "gradePct": 1.5211658437516233,
        "smoothedEle": 249.92610187792658,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466306,
        "lng": 120.885926,
        "ele": 252.25,
        "distanceKm": 13.73089032366417,
        "gradePct": 2.9682834169500545,
        "smoothedEle": 251.64168350924862,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466786,
        "lng": 120.886362,
        "ele": 254.75,
        "distanceKm": 13.800143421640158,
        "gradePct": 4.420853892923121,
        "smoothedEle": 254.707003157086,
        "gradeBand": "hard"
      },
      {
        "lat": 24.46717,
        "lng": 120.886514,
        "ele": 256,
        "distanceKm": 13.845529112458372,
        "gradePct": 2.8143656189096005,
        "smoothedEle": 255.10399944695797,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.467624,
        "lng": 120.886468,
        "ele": 253.75,
        "distanceKm": 13.896225901733406,
        "gradePct": -0.5560402699044593,
        "smoothedEle": 253.977563413484,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467888,
        "lng": 120.886496,
        "ele": 252.75,
        "distanceKm": 13.925717869973376,
        "gradePct": -1.675325529101321,
        "smoothedEle": 253.25538163955247,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46805,
        "lng": 120.886596,
        "ele": 253,
        "distanceKm": 13.946379972190819,
        "gradePct": -0.8482626313305306,
        "smoothedEle": 254.236831494881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468411,
        "lng": 120.886992,
        "ele": 258.5,
        "distanceKm": 14.003104163809603,
        "gradePct": 4.432063220493392,
        "smoothedEle": 258.24119584403024,
        "gradeBand": "hard"
      },
      {
        "lat": 24.468585,
        "lng": 120.887099,
        "ele": 260.75,
        "distanceKm": 14.025276601773237,
        "gradePct": 6.7194043708709,
        "smoothedEle": 259.9855915236045,
        "gradeBand": "steep"
      },
      {
        "lat": 24.468682,
        "lng": 120.887124,
        "ele": 261,
        "distanceKm": 14.036355324562312,
        "gradePct": 6.399044182829522,
        "smoothedEle": 260.15970491535643,
        "gradeBand": "steep"
      },
      {
        "lat": 24.468892,
        "lng": 120.887124,
        "ele": 261,
        "distanceKm": 14.05970629141126,
        "gradePct": 4.927208244162234,
        "smoothedEle": 260.1047924596875,
        "gradeBand": "hard"
      },
      {
        "lat": 24.469246467108935,
        "lng": 120.88689396902348,
        "ele": 258.2648386209267,
        "distanceKm": 14.105483435638204,
        "gradePct": -0.10284321051216275,
        "smoothedEle": 258.3255396043488,
        "gradeBand": "descent"
      },
      {
        "lat": 24.469591,
        "lng": 120.886645,
        "ele": 255.75,
        "distanceKm": 14.15133758979505,
        "gradePct": -3.558190382461488,
        "smoothedEle": 256.5662820313572,
        "gradeBand": "descent"
      },
      {
        "lat": 24.469998,
        "lng": 120.886574,
        "ele": 256.25,
        "distanceKm": 14.197160905830376,
        "gradePct": -1.764999886194011,
        "smoothedEle": 256.8840174093539,
        "gradeBand": "descent"
      },
      {
        "lat": 24.470395976765268,
        "lng": 120.88671916568445,
        "ele": 259.1333882513357,
        "distanceKm": 14.243789035503228,
        "gradePct": 2.404448440151961,
        "smoothedEle": 259.26034111960007,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.470788,
        "lng": 120.886886,
        "ele": 262.5,
        "distanceKm": 14.290535969545406,
        "gradePct": 4.942773167723789,
        "smoothedEle": 261.78085377422633,
        "gradeBand": "hard"
      },
      {
        "lat": 24.471328,
        "lng": 120.88712,
        "ele": 263.5,
        "distanceKm": 14.355082817194127,
        "gradePct": 3.5800243328159937,
        "smoothedEle": 263.4493063434874,
        "gradeBand": "hard"
      },
      {
        "lat": 24.471699,
        "lng": 120.887388,
        "ele": 264,
        "distanceKm": 14.40445397509659,
        "gradePct": 1.6866920458662722,
        "smoothedEle": 263.8273082711923,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.472088,
        "lng": 120.887842,
        "ele": 263.75,
        "distanceKm": 14.467558276245473,
        "gradePct": 0.5255611436534783,
        "smoothedEle": 264.0703837312551,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.472492,
        "lng": 120.888355,
        "ele": 265.5,
        "distanceKm": 14.536213806795049,
        "gradePct": 1.952077649659266,
        "smoothedEle": 265.901723630977,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47288364777426,
        "lng": 120.88866207333895,
        "ele": 268.40753124278837,
        "distanceKm": 14.589714719960133,
        "gradePct": 3.167964917512859,
        "smoothedEle": 267.8293568178957,
        "gradeBand": "hard"
      },
      {
        "lat": 24.47329182388713,
        "lng": 120.88894303666947,
        "ele": 268.8287656213942,
        "distanceKm": 14.643273442256584,
        "gradePct": 2.67268404992195,
        "smoothedEle": 268.82876572449373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4737,
        "lng": 120.889224,
        "ele": 269.25,
        "distanceKm": 14.696832115601879,
        "gradePct": 0.9745440895038691,
        "smoothedEle": 268.93671192848353,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.474047,
        "lng": 120.889401,
        "ele": 268.5,
        "distanceKm": 14.739372207697516,
        "gradePct": -0.8235910882755236,
        "smoothedEle": 267.9323773700049,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47443,
        "lng": 120.889463,
        "ele": 265.75,
        "distanceKm": 14.782419677905773,
        "gradePct": -3.27858288563898,
        "smoothedEle": 265.6290811250684,
        "gradeBand": "descent"
      },
      {
        "lat": 24.474809,
        "lng": 120.88946250000001,
        "ele": 262.625,
        "distanceKm": 14.824562643693415,
        "gradePct": -5.657018289728305,
        "smoothedEle": 262.6249999999972,
        "gradeBand": "descent"
      },
      {
        "lat": 24.475188,
        "lng": 120.889462,
        "ele": 259.5,
        "distanceKm": 14.866705609480876,
        "gradePct": -6.214980696579084,
        "smoothedEle": 260.25489675451354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47555,
        "lng": 120.88949,
        "ele": 259,
        "distanceKm": 14.907057847457912,
        "gradePct": -4.477755688228813,
        "smoothedEle": 259.3950404026812,
        "gradeBand": "descent"
      },
      {
        "lat": 24.475935,
        "lng": 120.889581,
        "ele": 259.875,
        "distanceKm": 14.950847333715334,
        "gradePct": -1.2717597039994688,
        "smoothedEle": 259.8750000259212,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47632,
        "lng": 120.889672,
        "ele": 260.75,
        "distanceKm": 14.994636814047913,
        "gradePct": 0.9818146688140281,
        "smoothedEle": 260.641531952118,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47694,
        "lng": 120.889894,
        "ele": 261.75,
        "distanceKm": 15.067146218915333,
        "gradePct": 1.616829913363182,
        "smoothedEle": 261.7771408352422,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.477207,
        "lng": 120.890061,
        "ele": 262.25,
        "distanceKm": 15.101308694553298,
        "gradePct": 3.055612659866437,
        "smoothedEle": 263.8016365297282,
        "gradeBand": "hard"
      },
      {
        "lat": 24.47747,
        "lng": 120.890427,
        "ele": 268.75,
        "distanceKm": 15.148501607149196,
        "gradePct": 7.308810723621745,
        "smoothedEle": 268.7939482417392,
        "gradeBand": "steep"
      },
      {
        "lat": 24.477633,
        "lng": 120.890794,
        "ele": 274.75,
        "distanceKm": 15.189828987736778,
        "gradePct": 10.862587295124836,
        "smoothedEle": 273.98392719558365,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.4778335,
        "lng": 120.8912715,
        "ele": 278.99999999999994,
        "distanceKm": 15.243047539362369,
        "gradePct": 10.7830128970409,
        "smoothedEle": 279.00000148546457,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.478034,
        "lng": 120.891749,
        "ele": 283.25,
        "distanceKm": 15.296266021083744,
        "gradePct": 6.525617366832387,
        "smoothedEle": 281.11626226683575,
        "gradeBand": "steep"
      },
      {
        "lat": 24.4782075,
        "lng": 120.8921085,
        "ele": 279.375,
        "distanceKm": 15.337446383935692,
        "gradePct": 0.9029303198865395,
        "smoothedEle": 279.37499914143643,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.478381,
        "lng": 120.892468,
        "ele": 275.5,
        "distanceKm": 15.37862670247468,
        "gradePct": -3.2281617170253982,
        "smoothedEle": 277.18666381251467,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478602,
        "lng": 120.892844,
        "ele": 277.5,
        "distanceKm": 15.423923454053927,
        "gradePct": -2.8777413240291128,
        "smoothedEle": 277.06905897504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478788,
        "lng": 120.89316,
        "ele": 277.875,
        "distanceKm": 15.462008009121915,
        "gradePct": -0.19478643055856606,
        "smoothedEle": 277.87500007441275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478974,
        "lng": 120.893476,
        "ele": 278.25,
        "distanceKm": 15.50009252450309,
        "gradePct": 0.5394226198008046,
        "smoothedEle": 277.6703543009176,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.479251,
        "lng": 120.89391,
        "ele": 276.25,
        "distanceKm": 15.553737107960881,
        "gradePct": -1.5371783082123385,
        "smoothedEle": 276.1627938798925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479485,
        "lng": 120.8943105,
        "ele": 274.125,
        "distanceKm": 15.601900845793386,
        "gradePct": -3.494536170137577,
        "smoothedEle": 274.12499932615845,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479719,
        "lng": 120.894711,
        "ele": 272,
        "distanceKm": 15.650064520205511,
        "gradePct": -3.715242743132662,
        "smoothedEle": 272.5507609593712,
        "gradeBand": "descent"
      },
      {
        "lat": 24.480007,
        "lng": 120.895174,
        "ele": 272,
        "distanceKm": 15.706818112537285,
        "gradePct": -1.6679688062335516,
        "smoothedEle": 272.29630877137777,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48041,
        "lng": 120.895446,
        "ele": 273.25,
        "distanceKm": 15.759408709116842,
        "gradePct": 0.4786242348866966,
        "smoothedEle": 272.9874909420031,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.480763,
        "lng": 120.8956815,
        "ele": 273.375,
        "distanceKm": 15.805329167707526,
        "gradePct": 1.0720156328855563,
        "smoothedEle": 273.37500002168537,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.481116,
        "lng": 120.895917,
        "ele": 273.5,
        "distanceKm": 15.851249591601698,
        "gradePct": 0.6634281031229557,
        "smoothedEle": 273.543686252169,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.481435,
        "lng": 120.896052,
        "ele": 273.75,
        "distanceKm": 15.88926080181359,
        "gradePct": -0.008149511899716829,
        "smoothedEle": 273.23125435350465,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481892024160423,
        "lng": 120.8960410513373,
        "ele": 271.9551337297697,
        "distanceKm": 15.940091717010011,
        "gradePct": -1.5254033843448893,
        "smoothedEle": 271.9772950100156,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482349,
        "lng": 120.896024,
        "ele": 270.25,
        "distanceKm": 15.990934472425925,
        "gradePct": -2.520867815617928,
        "smoothedEle": 270.6690983790143,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482664,
        "lng": 120.896098,
        "ele": 270.25,
        "distanceKm": 16.026752503378898,
        "gradePct": -1.5055537079782706,
        "smoothedEle": 270.8008093800543,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482885,
        "lng": 120.896372,
        "ele": 272,
        "distanceKm": 16.063802859944122,
        "gradePct": 0.4069737740894666,
        "smoothedEle": 271.7741752309558,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4830695,
        "lng": 120.896894,
        "ele": 273.5,
        "distanceKm": 16.120471578476113,
        "gradePct": 2.7222875429560145,
        "smoothedEle": 273.50000054154015,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.483254,
        "lng": 120.897416,
        "ele": 275,
        "distanceKm": 16.177140224802752,
        "gradePct": 3.4634900130674926,
        "smoothedEle": 275.64384986308306,
        "gradeBand": "hard"
      },
      {
        "lat": 24.483445,
        "lng": 120.897696,
        "ele": 278,
        "distanceKm": 16.212551223760535,
        "gradePct": 4.740267245081601,
        "smoothedEle": 277.99905625068004,
        "gradeBand": "hard"
      },
      {
        "lat": 24.483725,
        "lng": 120.897864,
        "ele": 281,
        "distanceKm": 16.248025139339656,
        "gradePct": 5.813578580139537,
        "smoothedEle": 280.35596651916427,
        "gradeBand": "hard"
      },
      {
        "lat": 24.484212,
        "lng": 120.898034,
        "ele": 282.5,
        "distanceKm": 16.304844101276007,
        "gradePct": 4.3818248161573425,
        "smoothedEle": 281.86827581310837,
        "gradeBand": "hard"
      },
      {
        "lat": 24.484538,
        "lng": 120.89816,
        "ele": 281.5,
        "distanceKm": 16.343270820993155,
        "gradePct": 1.6776607330849957,
        "smoothedEle": 281.7177472162402,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484737,
        "lng": 120.898328,
        "ele": 281.25,
        "distanceKm": 16.37117547285386,
        "gradePct": 0.5859464888637179,
        "smoothedEle": 281.5580887236395,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48494,
        "lng": 120.898764,
        "ele": 282,
        "distanceKm": 16.42073556467835,
        "gradePct": -0.40013717228401335,
        "smoothedEle": 281.4058871734666,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485195,
        "lng": 120.899122,
        "ele": 280.5,
        "distanceKm": 16.466740475228324,
        "gradePct": -1.3124809171583065,
        "smoothedEle": 280.2709829675517,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485398,
        "lng": 120.899278,
        "ele": 278.75,
        "distanceKm": 16.494285594848495,
        "gradePct": -3.024327916295831,
        "smoothedEle": 278.4627884531211,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485937,
        "lng": 120.899401,
        "ele": 274,
        "distanceKm": 16.555498573787347,
        "gradePct": -5.4736166283478065,
        "smoothedEle": 275.0746950216276,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486262,
        "lng": 120.899535,
        "ele": 274.5,
        "distanceKm": 16.594097265217197,
        "gradePct": -3.4960562243744637,
        "smoothedEle": 274.97909509414404,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486542,
        "lng": 120.899839,
        "ele": 276.75,
        "distanceKm": 16.6378662993888,
        "gradePct": 1.0227466903711924,
        "smoothedEle": 277.07337515140364,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48688,
        "lng": 120.900197,
        "ele": 280.75,
        "distanceKm": 16.69006762354015,
        "gradePct": 5.947298013055872,
        "smoothedEle": 280.93637358679246,
        "gradeBand": "hard"
      },
      {
        "lat": 24.487245,
        "lng": 120.900416,
        "ele": 285,
        "distanceKm": 16.736310112774717,
        "gradePct": 7.558803181940455,
        "smoothedEle": 284.5577172296681,
        "gradeBand": "steep"
      },
      {
        "lat": 24.48764,
        "lng": 120.900391,
        "ele": 287.5,
        "distanceKm": 16.78030496610004,
        "gradePct": 6.819182366981027,
        "smoothedEle": 287.033100517451,
        "gradeBand": "steep"
      },
      {
        "lat": 24.487922,
        "lng": 120.900182,
        "ele": 288.25,
        "distanceKm": 16.81812767253084,
        "gradePct": 3.862604086854562,
        "smoothedEle": 286.99641733818936,
        "gradeBand": "hard"
      },
      {
        "lat": 24.488067056235575,
        "lng": 120.89983337158479,
        "ele": 284.9157860494626,
        "distanceKm": 16.856918774357904,
        "gradePct": -0.9122428927188236,
        "smoothedEle": 284.80502670752685,
        "gradeBand": "descent"
      },
      {
        "lat": 24.488169,
        "lng": 120.899464,
        "ele": 281.25,
        "distanceKm": 16.895977602146893,
        "gradePct": -5.753063381367188,
        "smoothedEle": 281.2648366871507,
        "gradeBand": "descent"
      },
      {
        "lat": 24.488258,
        "lng": 120.899287,
        "ele": 279.25,
        "distanceKm": 16.91644088074725,
        "gradePct": -7.199571386158038,
        "smoothedEle": 279.7984819239437,
        "gradeBand": "descent"
      },
      {
        "lat": 24.488323,
        "lng": 120.899185,
        "ele": 278,
        "distanceKm": 16.929041507774787,
        "gradePct": -7.389258419309906,
        "smoothedEle": 278.9906134955294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.488493,
        "lng": 120.899099,
        "ele": 277.75,
        "distanceKm": 16.949851700579394,
        "gradePct": -6.942003767269128,
        "smoothedEle": 278.26225674736816,
        "gradeBand": "descent"
      },
      {
        "lat": 24.488831257554622,
        "lng": 120.89904644189947,
        "ele": 277.75,
        "distanceKm": 16.987838435986703,
        "gradePct": -4.248529005268832,
        "smoothedEle": 277.75402042047597,
        "gradeBand": "descent"
      },
      {
        "lat": 24.489172,
        "lng": 120.899015,
        "ele": 277.75,
        "distanceKm": 17.02586067324036,
        "gradePct": -1.4445474577646926,
        "smoothedEle": 277.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.489512,
        "lng": 120.899054,
        "ele": 277.75,
        "distanceKm": 17.063872422555402,
        "gradePct": -0.32466915498741394,
        "smoothedEle": 277.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.489884,
        "lng": 120.899587,
        "ele": 277.75,
        "distanceKm": 17.13184314937216,
        "gradePct": 0,
        "smoothedEle": 277.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490227,
        "lng": 120.899904,
        "ele": 277.75,
        "distanceKm": 17.181679144292165,
        "gradePct": 0.5850509058376391,
        "smoothedEle": 278.33505090583765,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490637215447936,
        "lng": 120.90001340881682,
        "ele": 279.9551714379678,
        "distanceKm": 17.22861742802245,
        "gradePct": 1.9629147863887801,
        "smoothedEle": 279.7129147863888,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491056,
        "lng": 120.90008,
        "ele": 281.25,
        "distanceKm": 17.275669220929984,
        "gradePct": 2.4281748873304645,
        "smoothedEle": 280.6926721479023,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491564,
        "lng": 120.900162,
        "ele": 280.25,
        "distanceKm": 17.33276250136216,
        "gradePct": 1.8680959175124787,
        "smoothedEle": 281.66732337909684,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.492044,
        "lng": 120.900254,
        "ele": 285.5,
        "distanceKm": 17.38694193826663,
        "gradePct": 4.367606611187222,
        "smoothedEle": 285.2527176546636,
        "gradeBand": "hard"
      },
      {
        "lat": 24.492392002852878,
        "lng": 120.90036666714097,
        "ele": 288.70321426297954,
        "distanceKm": 17.42728264872335,
        "gradePct": 6.709333150579841,
        "smoothedEle": 288.28310882877827,
        "gradeBand": "steep"
      },
      {
        "lat": 24.492729,
        "lng": 120.900516,
        "ele": 290.5,
        "distanceKm": 17.467687117582514,
        "gradePct": 5.736378194600864,
        "smoothedEle": 289.7148831995534,
        "gradeBand": "hard"
      },
      {
        "lat": 24.493033944375117,
        "lng": 120.90068562067287,
        "ele": 289.69440554103704,
        "distanceKm": 17.50569195464458,
        "gradePct": 2.680184144622861,
        "smoothedEle": 289.3414016373644,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493339,
        "lng": 120.900855,
        "ele": 287.75,
        "distanceKm": 17.54369679060306,
        "gradePct": 0.6242169986866113,
        "smoothedEle": 289.48897801409686,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493843,
        "lng": 120.900941,
        "ele": 293,
        "distanceKm": 17.600410721586,
        "gradePct": 4.280138132803639,
        "smoothedEle": 293.67343956307553,
        "gradeBand": "hard"
      },
      {
        "lat": 24.494237,
        "lng": 120.900875,
        "ele": 299.5,
        "distanceKm": 17.64472767928528,
        "gradePct": 11.065462808791168,
        "smoothedEle": 300.6305017479069,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.49459,
        "lng": 120.900933,
        "ele": 309.25,
        "distanceKm": 17.68441587164055,
        "gradePct": 12.613204153168727,
        "smoothedEle": 305.106513307041,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.494899,
        "lng": 120.901317,
        "ele": 304.25,
        "distanceKm": 17.73628442882941,
        "gradePct": 3.8239368620646723,
        "smoothedEle": 303.1289816852842,
        "gradeBand": "hard"
      },
      {
        "lat": 24.495159,
        "lng": 120.901561,
        "ele": 296.75,
        "distanceKm": 17.7743029785629,
        "gradePct": -4.812891136586347,
        "smoothedEle": 299.1530958923451,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495491,
        "lng": 120.90158,
        "ele": 297,
        "distanceKm": 17.81126977268205,
        "gradePct": -6.182405162218029,
        "smoothedEle": 297.9002809679124,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495879,
        "lng": 120.901492,
        "ele": 300.5,
        "distanceKm": 17.855322774095566,
        "gradePct": -2.141237833874212,
        "smoothedEle": 298.99676084455183,
        "gradeBand": "descent"
      },
      {
        "lat": 24.496394,
        "lng": 120.901587,
        "ele": 298,
        "distanceKm": 17.91338943968079,
        "gradePct": 1.728082092335374,
        "smoothedEle": 299.6811216041544,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.496782,
        "lng": 120.901774,
        "ele": 302.37499999999983,
        "distanceKm": 17.960500071727893,
        "gradePct": 3.317221194151169,
        "smoothedEle": 302.37500051297974,
        "gradeBand": "hard"
      },
      {
        "lat": 24.49717,
        "lng": 120.901961,
        "ele": 306.75,
        "distanceKm": 18.007610680324497,
        "gradePct": 6.362183581024023,
        "smoothedEle": 305.9751980172746,
        "gradeBand": "steep"
      },
      {
        "lat": 24.497543,
        "lng": 120.902118,
        "ele": 308.12499999999994,
        "distanceKm": 18.052024723346474,
        "gradePct": 6.234636748652203,
        "smoothedEle": 308.1250001158848,
        "gradeBand": "steep"
      },
      {
        "lat": 24.497916,
        "lng": 120.902275,
        "ele": 309.5,
        "distanceKm": 18.096438749512476,
        "gradePct": 4.277801322112051,
        "smoothedEle": 309.3992392495521,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4984009674707,
        "lng": 120.90236343535034,
        "ele": 310.74134895471786,
        "distanceKm": 18.151102131055374,
        "gradePct": 2.8327265348275033,
        "smoothedEle": 310.9130698100237,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.498894,
        "lng": 120.902389,
        "ele": 312.75,
        "distanceKm": 18.205985914773706,
        "gradePct": 2.2058971591684693,
        "smoothedEle": 311.8695326119994,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.499345,
        "lng": 120.902489,
        "ele": 311,
        "distanceKm": 18.25714549042698,
        "gradePct": 0.5179089737771319,
        "smoothedEle": 311.5362967492599,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.499838,
        "lng": 120.902621,
        "ele": 311.5,
        "distanceKm": 18.31356827593655,
        "gradePct": 0.1282076850521871,
        "smoothedEle": 311.94835140686945,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500142,
        "lng": 120.902752,
        "ele": 313.25,
        "distanceKm": 18.349877482439915,
        "gradePct": 2.457767460373383,
        "smoothedEle": 314.041405511453,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500357,
        "lng": 120.903025,
        "ele": 317.5,
        "distanceKm": 18.386409249284686,
        "gradePct": 4.563539464314764,
        "smoothedEle": 316.31354895440415,
        "gradeBand": "hard"
      },
      {
        "lat": 24.50039,
        "lng": 120.90337,
        "ele": 318,
        "distanceKm": 18.42150968570354,
        "gradePct": 5.899317659992649,
        "smoothedEle": 318.305453797229,
        "gradeBand": "hard"
      },
      {
        "lat": 24.500561,
        "lng": 120.903916,
        "ele": 320.25,
        "distanceKm": 18.47993611182071,
        "gradePct": 4.635318190353351,
        "smoothedEle": 320.54626146443024,
        "gradeBand": "hard"
      },
      {
        "lat": 24.500885,
        "lng": 120.9043,
        "ele": 323.5,
        "distanceKm": 18.532922932090734,
        "gradePct": 5.0620517168644446,
        "smoothedEle": 323.80523364007524,
        "gradeBand": "hard"
      },
      {
        "lat": 24.50138,
        "lng": 120.9047,
        "ele": 330.25,
        "distanceKm": 18.601242996959257,
        "gradePct": 7.399024603710425,
        "smoothedEle": 329.2557731942284,
        "gradeBand": "steep"
      },
      {
        "lat": 24.501705,
        "lng": 120.90487,
        "ele": 330.5,
        "distanceKm": 18.641266193026613,
        "gradePct": 6.177700707123532,
        "smoothedEle": 330.6485554034601,
        "gradeBand": "steep"
      },
      {
        "lat": 24.502053,
        "lng": 120.90498450000001,
        "ele": 331.25000000000006,
        "distanceKm": 18.681659150793042,
        "gradePct": 3.556615991343342,
        "smoothedEle": 331.25000003449543,
        "gradeBand": "hard"
      },
      {
        "lat": 24.502401,
        "lng": 120.905099,
        "ele": 332,
        "distanceKm": 18.722052099360706,
        "gradePct": 2.825024341352065,
        "smoothedEle": 332.80494129376615,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.502831666666665,
        "lng": 120.90522766666668,
        "ele": 336.0833333333334,
        "distanceKm": 18.771678169402957,
        "gradePct": 4.981948741997925,
        "smoothedEle": 336.08333357222335,
        "gradeBand": "hard"
      },
      {
        "lat": 24.503262333333332,
        "lng": 120.90535633333333,
        "ele": 340.1666666666666,
        "distanceKm": 18.821304227744474,
        "gradePct": 7.390515201891228,
        "smoothedEle": 340.16666690554445,
        "gradeBand": "steep"
      },
      {
        "lat": 24.503693,
        "lng": 120.905485,
        "ele": 344.25,
        "distanceKm": 18.870930274385852,
        "gradePct": 7.028956388263636,
        "smoothedEle": 343.06288259764153,
        "gradeBand": "steep"
      },
      {
        "lat": 24.504006,
        "lng": 120.905595,
        "ele": 343.75,
        "distanceKm": 18.90747059920456,
        "gradePct": 5.315601816928942,
        "smoothedEle": 344.3440095411966,
        "gradeBand": "hard"
      },
      {
        "lat": 24.504456,
        "lng": 120.906055,
        "ele": 346.5,
        "distanceKm": 18.975808028059582,
        "gradePct": 3.7867086171072546,
        "smoothedEle": 347.02060834955654,
        "gradeBand": "hard"
      },
      {
        "lat": 24.50468,
        "lng": 120.906379,
        "ele": 349.75,
        "distanceKm": 19.016979184810342,
        "gradePct": 4.26537555480439,
        "smoothedEle": 348.9818115880134,
        "gradeBand": "hard"
      },
      {
        "lat": 24.504858,
        "lng": 120.906832,
        "ele": 350.5,
        "distanceKm": 19.066904440593383,
        "gradePct": 3.0451873514612795,
        "smoothedEle": 349.71706540780303,
        "gradeBand": "hard"
      },
      {
        "lat": 24.504995,
        "lng": 120.90744,
        "ele": 347.25,
        "distanceKm": 19.130279560508257,
        "gradePct": -0.7364433880969623,
        "smoothedEle": 348.44124405239126,
        "gradeBand": "descent"
      },
      {
        "lat": 24.505153,
        "lng": 120.907871,
        "ele": 349.5,
        "distanceKm": 19.17729380486311,
        "gradePct": -0.6040041099093315,
        "smoothedEle": 348.903910248992,
        "gradeBand": "descent"
      },
      {
        "lat": 24.505462,
        "lng": 120.908235,
        "ele": 349.5,
        "distanceKm": 19.227661903438115,
        "gradePct": -0.02454369893530349,
        "smoothedEle": 348.46939710252275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.505739,
        "lng": 120.90843,
        "ele": 346.25,
        "distanceKm": 19.264240186670285,
        "gradePct": -3.7006854819222257,
        "smoothedEle": 345.0747643831153,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506051,
        "lng": 120.908863,
        "ele": 336.25,
        "distanceKm": 19.32012341638305,
        "gradePct": -12.07437744823693,
        "smoothedEle": 336.4600523202505,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506111,
        "lng": 120.909214,
        "ele": 330,
        "distanceKm": 19.356258258171493,
        "gradePct": -14.083320299107838,
        "smoothedEle": 331.7322037165464,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506113,
        "lng": 120.909855,
        "ele": 328.5,
        "distanceKm": 19.421113927829513,
        "gradePct": -8.524897197101659,
        "smoothedEle": 327.8055575401147,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506141,
        "lng": 120.910369,
        "ele": 324.5,
        "distanceKm": 19.47321268095701,
        "gradePct": -6.4004665193428085,
        "smoothedEle": 324.305242216034,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506184,
        "lng": 120.910785,
        "ele": 320.5,
        "distanceKm": 19.515573544886205,
        "gradePct": -5.48505178943342,
        "smoothedEle": 322.6559447896276,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506295,
        "lng": 120.911143,
        "ele": 323.75,
        "distanceKm": 19.553840494534732,
        "gradePct": -2.9565574889517316,
        "smoothedEle": 322.650227603337,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506364,
        "lng": 120.91124,
        "ele": 323.75,
        "distanceKm": 19.566297889925327,
        "gradePct": -1.777014517399923,
        "smoothedEle": 322.9928059765783,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506525,
        "lng": 120.911282,
        "ele": 323.5,
        "distanceKm": 19.584697734108904,
        "gradePct": -0.5383631168159505,
        "smoothedEle": 323.3197147392744,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506684,
        "lng": 120.911285,
        "ele": 323.25,
        "distanceKm": 19.602380357234473,
        "gradePct": -0.6011094080296203,
        "smoothedEle": 322.5685050384886,
        "gradeBand": "descent"
      },
      {
        "lat": 24.507111,
        "lng": 120.911009,
        "ele": 319.5,
        "distanceKm": 19.657463806857887,
        "gradePct": -3.862032242557577,
        "smoothedEle": 318.88783644966605,
        "gradeBand": "descent"
      },
      {
        "lat": 24.507548,
        "lng": 120.910621,
        "ele": 311.75,
        "distanceKm": 19.71993222311866,
        "gradePct": -9.364951441218219,
        "smoothedEle": 312.03074031348325,
        "gradeBand": "descent"
      },
      {
        "lat": 24.507873,
        "lng": 120.910423,
        "ele": 307.75,
        "distanceKm": 19.76125179529807,
        "gradePct": -10.23207151901212,
        "smoothedEle": 308.2399611941122,
        "gradeBand": "descent"
      },
      {
        "lat": 24.508444,
        "lng": 120.910399,
        "ele": 304,
        "distanceKm": 19.824790602642096,
        "gradePct": -8.112458504413892,
        "smoothedEle": 303.47255977759596,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50903,
        "lng": 120.910454,
        "ele": 297,
        "distanceKm": 19.890188100221998,
        "gradePct": -8.156047324879692,
        "smoothedEle": 297.91278433675393,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5095,
        "lng": 120.910444,
        "ele": 295.75,
        "distanceKm": 19.942459580550064,
        "gradePct": -7.127802204386866,
        "smoothedEle": 294.84262747537963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.509864,
        "lng": 120.910293,
        "ele": 291.5,
        "distanceKm": 19.985721897135008,
        "gradePct": -7.253500599120411,
        "smoothedEle": 291.03897848369814,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51033,
        "lng": 120.910142,
        "ele": 284.25,
        "distanceKm": 20.03974404089027,
        "gradePct": -10.505407425333281,
        "smoothedEle": 284.4967168285291,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510823,
        "lng": 120.909957,
        "ele": 277.5,
        "distanceKm": 20.097670545769006,
        "gradePct": -11.50675036104355,
        "smoothedEle": 278.08520695031024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511289,
        "lng": 120.909887,
        "ele": 274,
        "distanceKm": 20.14996920233858,
        "gradePct": -9.287561775553325,
        "smoothedEle": 274.07739811771006,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511643,
        "lng": 120.909868,
        "ele": 271.5,
        "distanceKm": 20.189379170952783,
        "gradePct": -7.159009031894426,
        "smoothedEle": 271.84391652839435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511939,
        "lng": 120.909946,
        "ele": 270.25,
        "distanceKm": 20.2232257527243,
        "gradePct": -4.612402037433403,
        "smoothedEle": 271.5144298632596,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512279,
        "lng": 120.910154,
        "ele": 273.25,
        "distanceKm": 20.266494352768866,
        "gradePct": 0.10913233171498705,
        "smoothedEle": 273.25000041541193,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.512619,
        "lng": 120.910362,
        "ele": 276.25,
        "distanceKm": 20.309762925119312,
        "gradePct": 2.917126569612337,
        "smoothedEle": 274.56261315820973,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.513049,
        "lng": 120.910444,
        "ele": 273,
        "distanceKm": 20.35829120653181,
        "gradePct": -0.6454400904216777,
        "smoothedEle": 272.275519426293,
        "gradeBand": "descent"
      },
      {
        "lat": 24.513452440285455,
        "lng": 120.91039338654946,
        "ele": 267.3082967059311,
        "distanceKm": 20.403443090946432,
        "gradePct": -6.612905126437019,
        "smoothedEle": 267.75798701078526,
        "gradeBand": "descent"
      },
      {
        "lat": 24.513859,
        "lng": 120.910377,
        "ele": 263.25,
        "distanceKm": 20.448680919699775,
        "gradePct": -8.986640323002732,
        "smoothedEle": 263.7418031742796,
        "gradeBand": "descent"
      },
      {
        "lat": 24.514192,
        "lng": 120.910464,
        "ele": 261.25,
        "distanceKm": 20.486740667537763,
        "gradePct": -7.485392639755624,
        "smoothedEle": 261.94370378638246,
        "gradeBand": "descent"
      },
      {
        "lat": 24.514517,
        "lng": 120.910646,
        "ele": 261.5,
        "distanceKm": 20.527299655727933,
        "gradePct": -4.149079842680348,
        "smoothedEle": 261.490937484095,
        "gradeBand": "descent"
      },
      {
        "lat": 24.514866,
        "lng": 120.910922,
        "ele": 261.75,
        "distanceKm": 20.575108656642097,
        "gradePct": -0.587955951630923,
        "smoothedEle": 261.9052919820366,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51511,
        "lng": 120.911142,
        "ele": 262.25,
        "distanceKm": 20.61020177304956,
        "gradePct": 0.793620280826633,
        "smoothedEle": 262.4754240922801,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.515223,
        "lng": 120.911209,
        "ele": 263,
        "distanceKm": 20.62447860105795,
        "gradePct": 1.1671471556465296,
        "smoothedEle": 262.6895765124059,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.515389,
        "lng": 120.911213,
        "ele": 263.25,
        "distanceKm": 20.642941420006906,
        "gradePct": 0.9177557365411969,
        "smoothedEle": 262.544258391646,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.516006,
        "lng": 120.91111,
        "ele": 260.5,
        "distanceKm": 20.71233564697499,
        "gradePct": -2.927302235018275,
        "smoothedEle": 259.58012996614315,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516485,
        "lng": 120.911077,
        "ele": 254.75,
        "distanceKm": 20.765702623912528,
        "gradePct": -6.36538228874323,
        "smoothedEle": 255.2066463592621,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516806,
        "lng": 120.911086,
        "ele": 252,
        "distanceKm": 20.80140785636462,
        "gradePct": -7.462725746610836,
        "smoothedEle": 252.58417755488534,
        "gradeBand": "descent"
      },
      {
        "lat": 24.51725,
        "lng": 120.911248,
        "ele": 250.75,
        "distanceKm": 20.853427776540872,
        "gradePct": -4.477688771202047,
        "smoothedEle": 251.73489509543913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.517641,
        "lng": 120.911705,
        "ele": 254.5,
        "distanceKm": 20.9168933980587,
        "gradePct": 2.167432559568195,
        "smoothedEle": 254.49879160009897,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.517797,
        "lng": 120.911834,
        "ele": 256.75,
        "distanceKm": 20.9386010456525,
        "gradePct": 3.4239298743938855,
        "smoothedEle": 255.4008876725777,
        "gradeBand": "hard"
      },
      {
        "lat": 24.518021,
        "lng": 120.911862,
        "ele": 255.5,
        "distanceKm": 20.963669307596096,
        "gradePct": 2.085826624056351,
        "smoothedEle": 254.26673534402042,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.518465,
        "lng": 120.911706,
        "ele": 249.75,
        "distanceKm": 21.015501135491988,
        "gradePct": -4.548484659152641,
        "smoothedEle": 249.8896745930754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.518792,
        "lng": 120.911606,
        "ele": 245.75,
        "distanceKm": 21.053243117746103,
        "gradePct": -9.034886060935165,
        "smoothedEle": 245.70355679607337,
        "gradeBand": "descent"
      },
      {
        "lat": 24.519131,
        "lng": 120.911713,
        "ele": 241.5,
        "distanceKm": 21.09246177380048,
        "gradePct": -8.890061389193407,
        "smoothedEle": 242.9452263508711,
        "gradeBand": "descent"
      },
      {
        "lat": 24.519431,
        "lng": 120.911904,
        "ele": 242,
        "distanceKm": 21.13101265698987,
        "gradePct": -6.456987279222538,
        "smoothedEle": 241.7122409482202,
        "gradeBand": "descent"
      },
      {
        "lat": 24.519809,
        "lng": 120.912097,
        "ele": 241.5,
        "distanceKm": 21.177358153088562,
        "gradePct": -2.3057874511162266,
        "smoothedEle": 241.70170826423055,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520222,
        "lng": 120.912084,
        "ele": 241.75,
        "distanceKm": 21.22330054950673,
        "gradePct": -0.4473256784748053,
        "smoothedEle": 241.51157410512593,
        "gradeBand": "descent"
      },
      {
        "lat": 24.520652000000002,
        "lng": 120.91199033333334,
        "ele": 241.08333333333334,
        "distanceKm": 21.272044382387687,
        "gradePct": -0.6195825831304288,
        "smoothedEle": 241.08333331231128,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521082,
        "lng": 120.91189666666666,
        "ele": 240.41666666666666,
        "distanceKm": 21.320788208962025,
        "gradePct": -1.1053048656697924,
        "smoothedEle": 240.41666664564505,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521512,
        "lng": 120.911803,
        "ele": 239.75,
        "distanceKm": 21.369532029229873,
        "gradePct": -1.5031231689560585,
        "smoothedEle": 239.6022825173263,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521838,
        "lng": 120.911787,
        "ele": 238.75,
        "distanceKm": 21.405817746207035,
        "gradePct": -1.4338941788155433,
        "smoothedEle": 239.18752267223448,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52225645367788,
        "lng": 120.91190767983906,
        "ele": 239.20843048160685,
        "distanceKm": 21.45392274275816,
        "gradePct": -0.8005584071765555,
        "smoothedEle": 239.06251522350715,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522663726838942,
        "lng": 120.91207233991953,
        "ele": 239.10421524080343,
        "distanceKm": 21.502175990994225,
        "gradePct": -0.12493411835791159,
        "smoothedEle": 239.1042152310862,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523071,
        "lng": 120.912237,
        "ele": 239,
        "distanceKm": 21.550429220581897,
        "gradePct": -0.29304609606827664,
        "smoothedEle": 238.77854752522782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523537656691406,
        "lng": 120.91241467660637,
        "ele": 237.89801002603687,
        "distanceKm": 21.605344148786664,
        "gradePct": -1.2514001083431587,
        "smoothedEle": 237.83143278856815,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523999,
        "lng": 120.912609,
        "ele": 236.5,
        "distanceKm": 21.660280992289792,
        "gradePct": -1.6041148110490213,
        "smoothedEle": 237.00451975113236,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524421,
        "lng": 120.913011,
        "ele": 237.5,
        "distanceKm": 21.722375786650826,
        "gradePct": -0.7990368034968356,
        "smoothedEle": 236.77603463446044,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524761,
        "lng": 120.913371,
        "ele": 235.25,
        "distanceKm": 21.774870067775737,
        "gradePct": -1.2643160488532421,
        "smoothedEle": 235.68652147901318,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525003,
        "lng": 120.913609,
        "ele": 235,
        "distanceKm": 21.810978233679762,
        "gradePct": -2.176838379413849,
        "smoothedEle": 234.6411348949465,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52521,
        "lng": 120.913682,
        "ele": 234,
        "distanceKm": 21.835151288729378,
        "gradePct": -2.2927740321087486,
        "smoothedEle": 234.2181064315782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525458,
        "lng": 120.913646,
        "ele": 233.5,
        "distanceKm": 21.862967109461525,
        "gradePct": -2.1521291322586347,
        "smoothedEle": 233.78143696560008,
        "gradeBand": "descent"
      },
      {
        "lat": 24.525745,
        "lng": 120.913494,
        "ele": 233.5,
        "distanceKm": 21.898391425766164,
        "gradePct": -2.0975445208988774,
        "smoothedEle": 232.90799769853135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526055,
        "lng": 120.913811,
        "ele": 231.25,
        "distanceKm": 21.9454722108226,
        "gradePct": -2.394488630854704,
        "smoothedEle": 231.66159376475318,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52611389752976,
        "lng": 120.91418075903825,
        "ele": 230.65750882228758,
        "distanceKm": 21.983446847315456,
        "gradePct": -2.4839119707545976,
        "smoothedEle": 230.79256656270337,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526158,
        "lng": 120.914555,
        "ele": 230.5,
        "distanceKm": 22.02162216697186,
        "gradePct": -1.812021443301151,
        "smoothedEle": 230.4809719134663,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526273,
        "lng": 120.91499,
        "ele": 230.25,
        "distanceKm": 22.067447967388,
        "gradePct": -1.1299548294201553,
        "smoothedEle": 230.02873668254784,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526475,
        "lng": 120.914944,
        "ele": 229.5,
        "distanceKm": 22.090386349539475,
        "gradePct": -0.08309907545233723,
        "smoothedEle": 230.65282587217524,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526413,
        "lng": 120.915648,
        "ele": 235.5,
        "distanceKm": 22.16193724916807,
        "gradePct": 3.9213576002595416,
        "smoothedEle": 234.00447720474412,
        "gradeBand": "hard"
      },
      {
        "lat": 24.526862,
        "lng": 120.916174,
        "ele": 230.75,
        "distanceKm": 22.234903574047504,
        "gradePct": -1.9579438844471049,
        "smoothedEle": 230.78019769471567,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526923,
        "lng": 120.916239,
        "ele": 230.25,
        "distanceKm": 22.244350528663873,
        "gradePct": -3.1798403506061677,
        "smoothedEle": 230.00082393886527,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52707,
        "lng": 120.916309,
        "ele": 229.25,
        "distanceKm": 22.262164175369488,
        "gradePct": -4.810422789993583,
        "smoothedEle": 229.18402686433282,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527161,
        "lng": 120.916677,
        "ele": 227.25,
        "distanceKm": 22.300742247162482,
        "gradePct": -5.361195344991083,
        "smoothedEle": 226.92854344957794,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527629,
        "lng": 120.916914,
        "ele": 222.75,
        "distanceKm": 22.35803883022763,
        "gradePct": -6.603117749117238,
        "smoothedEle": 222.77006577128884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527962,
        "lng": 120.916957,
        "ele": 219.75,
        "distanceKm": 22.39532142291127,
        "gradePct": -7.464809987348993,
        "smoothedEle": 219.7806642631906,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528315,
        "lng": 120.916933,
        "ele": 216.75,
        "distanceKm": 22.434648299807616,
        "gradePct": -6.560313684367734,
        "smoothedEle": 217.90739256444095,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528852,
        "lng": 120.916841,
        "ele": 218,
        "distanceKm": 22.495080984945833,
        "gradePct": -2.116236544442073,
        "smoothedEle": 217.68370657155208,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52912,
        "lng": 120.916994,
        "ele": 217.75,
        "distanceKm": 22.528660868437473,
        "gradePct": -0.2615918119429315,
        "smoothedEle": 217.93100228943825,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529314,
        "lng": 120.917008,
        "ele": 218,
        "distanceKm": 22.550279153395245,
        "gradePct": 0.5465470071896938,
        "smoothedEle": 218.39608341322148,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.529835,
        "lng": 120.916917,
        "ele": 220.25,
        "distanceKm": 22.608938609058963,
        "gradePct": 1.6154932895670469,
        "smoothedEle": 219.40125295800098,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.530201,
        "lng": 120.917184,
        "ele": 218.75,
        "distanceKm": 22.657783153296844,
        "gradePct": 0.9130026853281533,
        "smoothedEle": 219.43767222468685,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.530519657117082,
        "lng": 120.91731146075416,
        "ele": 219.7260396470644,
        "distanceKm": 22.695489309520045,
        "gradePct": 0.8006788570551635,
        "smoothedEle": 219.97146894863204,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.530856,
        "lng": 120.917381,
        "ele": 221.5,
        "distanceKm": 22.733544790057774,
        "gradePct": 1.3988674256328664,
        "smoothedEle": 220.81846714235377,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.531279,
        "lng": 120.917415,
        "ele": 220.99999999999997,
        "distanceKm": 22.78070589021473,
        "gradePct": 1.2378162584696322,
        "smoothedEle": 220.99999999788616,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.531702,
        "lng": 120.917449,
        "ele": 220.5,
        "distanceKm": 22.827866989526157,
        "gradePct": -0.5348392477274824,
        "smoothedEle": 220.15725748157038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5321105,
        "lng": 120.9175015,
        "ele": 218.74999999999994,
        "distanceKm": 22.873599587223186,
        "gradePct": -2.2226463814152138,
        "smoothedEle": 218.74999998243692,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532519,
        "lng": 120.917554,
        "ele": 217,
        "distanceKm": 22.919332182913013,
        "gradePct": -3.5343141375833573,
        "smoothedEle": 216.7754555734822,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532944,
        "lng": 120.917687,
        "ele": 214.25,
        "distanceKm": 22.96846787642343,
        "gradePct": -4.525904891248864,
        "smoothedEle": 214.38200517874057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533348333333333,
        "lng": 120.91784233333334,
        "ele": 212.0833333333334,
        "distanceKm": 23.016094426993465,
        "gradePct": -4.8319153357468165,
        "smoothedEle": 212.0833331524403,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53375266666667,
        "lng": 120.91799766666666,
        "ele": 209.9166666666666,
        "distanceKm": 23.063720960865684,
        "gradePct": -4.696565853993765,
        "smoothedEle": 209.91666648577345,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534157,
        "lng": 120.918153,
        "ele": 207.75,
        "distanceKm": 23.111347478040074,
        "gradePct": -4.826389286425058,
        "smoothedEle": 207.4860530212834,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534489,
        "lng": 120.918293,
        "ele": 205,
        "distanceKm": 23.150887377967784,
        "gradePct": -4.744391580932433,
        "smoothedEle": 205.75611114103214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534831,
        "lng": 120.91841,
        "ele": 204.75,
        "distanceKm": 23.190715189998308,
        "gradePct": -3.871711990608221,
        "smoothedEle": 204.66730732115423,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535162,
        "lng": 120.918425,
        "ele": 204.25,
        "distanceKm": 23.22755202447526,
        "gradePct": -2.8197655402823214,
        "smoothedEle": 203.95730937078955,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535518,
        "lng": 120.918374,
        "ele": 202.75,
        "distanceKm": 23.267472218739517,
        "gradePct": -2.552718486530629,
        "smoothedEle": 202.74999998581836,
        "gradeBand": "descent"
      },
      {
        "lat": 24.535874,
        "lng": 120.918323,
        "ele": 201.25,
        "distanceKm": 23.307392411112897,
        "gradePct": -3.0799805551225026,
        "smoothedEle": 201.26588783195214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536326,
        "lng": 120.918347,
        "ele": 199.5,
        "distanceKm": 23.357711185370327,
        "gradePct": -3.5217311986605817,
        "smoothedEle": 199.52347244061772,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536729,
        "lng": 120.918403,
        "ele": 198,
        "distanceKm": 23.402879414086364,
        "gradePct": -3.0224291430416623,
        "smoothedEle": 198.41123828462972,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537186,
        "lng": 120.91843449999999,
        "ele": 198,
        "distanceKm": 23.453795364365806,
        "gradePct": -1.6590676908732906,
        "smoothedEle": 198,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537643,
        "lng": 120.918466,
        "ele": 198,
        "distanceKm": 23.504711313919675,
        "gradePct": -0.675029841996879,
        "smoothedEle": 197.72141254191942,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53805907095737,
        "lng": 120.91870610635705,
        "ele": 196.8330783442144,
        "distanceKm": 23.55696389973821,
        "gradePct": -1.3267917564701104,
        "smoothedEle": 196.65587154995995,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538460535478684,
        "lng": 120.91897805317853,
        "ele": 194.91653917210715,
        "distanceKm": 23.609399596438955,
        "gradePct": -2.7092697932042324,
        "smoothedEle": 194.91653872973842,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538862,
        "lng": 120.91925,
        "ele": 193,
        "distanceKm": 23.66183524697641,
        "gradePct": -2.5863129195607746,
        "smoothedEle": 193.90797225578783,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539174,
        "lng": 120.919441,
        "ele": 194.5,
        "distanceKm": 23.701544905498544,
        "gradePct": -0.7682705545197626,
        "smoothedEle": 194.40881437952154,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539619,
        "lng": 120.919754,
        "ele": 196.25,
        "distanceKm": 23.760288683715054,
        "gradePct": 2.5816226165348644,
        "smoothedEle": 196.51934203554586,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.539819,
        "lng": 120.920129,
        "ele": 198.5,
        "distanceKm": 23.804258996946036,
        "gradePct": 3.9771199304352085,
        "smoothedEle": 198.48344531852348,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539848,
        "lng": 120.92032,
        "ele": 200,
        "distanceKm": 23.82384612689345,
        "gradePct": 5.379016266157189,
        "smoothedEle": 200.58906178787046,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539718,
        "lng": 120.920901,
        "ele": 207,
        "distanceKm": 23.884366645019178,
        "gradePct": 9.078305156118418,
        "smoothedEle": 206.67318200981333,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539678,
        "lng": 120.921245,
        "ele": 210.25,
        "distanceKm": 23.919445791147616,
        "gradePct": 8.44373501017133,
        "smoothedEle": 208.55976070536465,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539918,
        "lng": 120.921585,
        "ele": 208,
        "distanceKm": 23.962976864994513,
        "gradePct": 5.329358934575008,
        "smoothedEle": 209.8522289969489,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540228,
        "lng": 120.922212,
        "ele": 216.75,
        "distanceKm": 24.035160783217904,
        "gradePct": 6.903095324775095,
        "smoothedEle": 215.92944523087445,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540467,
        "lng": 120.922597,
        "ele": 218.25,
        "distanceKm": 24.082307608737732,
        "gradePct": 6.7711526564478,
        "smoothedEle": 218.25085093715856,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540621,
        "lng": 120.922915,
        "ele": 219.5,
        "distanceKm": 24.11874764941615,
        "gradePct": 5.618837173988032,
        "smoothedEle": 220.16644881028085,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540732,
        "lng": 120.923325,
        "ele": 223.25,
        "distanceKm": 24.162017059760643,
        "gradePct": 4.740266271215308,
        "smoothedEle": 221.99205532754283,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540969,
        "lng": 120.923724,
        "ele": 222.5,
        "distanceKm": 24.21021809538294,
        "gradePct": 3.062806965398564,
        "smoothedEle": 222.780870009349,
        "gradeBand": "hard"
      },
      {
        "lat": 24.541091,
        "lng": 120.924356,
        "ele": 223,
        "distanceKm": 24.275568538209917,
        "gradePct": 0.724012872544098,
        "smoothedEle": 222.9378394758066,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541089,
        "lng": 120.924506,
        "ele": 222,
        "distanceKm": 24.2907426861251,
        "gradePct": 1.310264586986686,
        "smoothedEle": 223.77241761114166,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541025,
        "lng": 120.924649,
        "ele": 223,
        "distanceKm": 24.306863023765167,
        "gradePct": 1.8632237136806702,
        "smoothedEle": 224.58918764650164,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.54081,
        "lng": 120.924831,
        "ele": 228,
        "distanceKm": 24.337036620794052,
        "gradePct": 6.03298585984254,
        "smoothedEle": 228.87827302449855,
        "gradeBand": "steep"
      },
      {
        "lat": 24.540417,
        "lng": 120.92505,
        "ele": 238.75,
        "distanceKm": 24.386030193998007,
        "gradePct": 14.262993016158898,
        "smoothedEle": 237.77622356031057,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.540059,
        "lng": 120.92527,
        "ele": 245.25,
        "distanceKm": 24.43163576321037,
        "gradePct": 17.20773980028154,
        "smoothedEle": 245.3182972863032,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539616,
        "lng": 120.925402,
        "ele": 252.75,
        "distanceKm": 24.482672662226335,
        "gradePct": 14.741696126355567,
        "smoothedEle": 251.9081427368938,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539419,
        "lng": 120.92551,
        "ele": 255.5,
        "distanceKm": 24.50715100614733,
        "gradePct": 12.7466910735203,
        "smoothedEle": 254.01579335750745,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539346,
        "lng": 120.925643,
        "ele": 255.25,
        "distanceKm": 24.522863320472208,
        "gradePct": 10.109208636497554,
        "smoothedEle": 253.97675306452194,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53933,
        "lng": 120.926076,
        "ele": 252.5,
        "distanceKm": 24.566698053896225,
        "gradePct": 3.997258299950659,
        "smoothedEle": 253.84277180076532,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539265,
        "lng": 120.92665,
        "ele": 255.25,
        "distanceKm": 24.62520718950746,
        "gradePct": 2.1819961830448706,
        "smoothedEle": 256.1515851904164,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.539223,
        "lng": 120.927023,
        "ele": 260,
        "distanceKm": 24.663224681054327,
        "gradePct": 4.208209002508878,
        "smoothedEle": 258.0615971991436,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539315,
        "lng": 120.927383,
        "ele": 258.5,
        "distanceKm": 24.7010489177084,
        "gradePct": 4.883862933683888,
        "smoothedEle": 260.08214500625706,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539166,
        "lng": 120.927823,
        "ele": 262.75,
        "distanceKm": 24.748539422124278,
        "gradePct": 5.033540495151712,
        "smoothedEle": 262.35734517389494,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539058,
        "lng": 120.928016,
        "ele": 263.75,
        "distanceKm": 24.7714596574855,
        "gradePct": 5.5175575864583735,
        "smoothedEle": 264.0190622375835,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538901,
        "lng": 120.92812,
        "ele": 265.75,
        "distanceKm": 24.791841873576704,
        "gradePct": 7.615536535963094,
        "smoothedEle": 267.2058468225818,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538359,
        "lng": 120.92812,
        "ele": 278,
        "distanceKm": 24.85210960706321,
        "gradePct": 14.340071743932151,
        "smoothedEle": 276.9562553258997,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538012,
        "lng": 120.928175,
        "ele": 282.75,
        "distanceKm": 24.891093318777166,
        "gradePct": 14.254596654503954,
        "smoothedEle": 281.34340601239006,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537951,
        "lng": 120.92825,
        "ele": 281.75,
        "distanceKm": 24.901269855960827,
        "gradePct": 13.614651786519834,
        "smoothedEle": 282.3458036818046,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537931,
        "lng": 120.928333,
        "ele": 280,
        "distanceKm": 24.90995507473671,
        "gradePct": 13.132701533449376,
        "smoothedEle": 283.26899057437646,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537953,
        "lng": 120.928564,
        "ele": 285.5,
        "distanceKm": 24.93344904506621,
        "gradePct": 11.19548345562971,
        "smoothedEle": 285.1327418515559,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537991,
        "lng": 120.928661,
        "ele": 287.5,
        "distanceKm": 24.944132005478256,
        "gradePct": 9.940444206602509,
        "smoothedEle": 285.606044154738,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538025,
        "lng": 120.928721,
        "ele": 288.5,
        "distanceKm": 24.951282379050046,
        "gradePct": 8.530738860187107,
        "smoothedEle": 285.3531611947475,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538088,
        "lng": 120.928766,
        "ele": 288.75,
        "distanceKm": 24.959636633540136,
        "gradePct": 7.34873870010558,
        "smoothedEle": 285.1520708671685,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538157,
        "lng": 120.928788,
        "ele": 288.25,
        "distanceKm": 24.96762530406996,
        "gradePct": 6.329879281993181,
        "smoothedEle": 285.03224080922115,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538611,
        "lng": 120.928831,
        "ele": 278.5,
        "distanceKm": 25.01829490135875,
        "gradePct": -4.84801940473959,
        "smoothedEle": 279.08256060302267,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538959,
        "lng": 120.929077,
        "ele": 271.75,
        "distanceKm": 25.064300930124713,
        "gradePct": -12.41338103744294,
        "smoothedEle": 272.66872538095674,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539099,
        "lng": 120.929379,
        "ele": 269,
        "distanceKm": 25.098586664801665,
        "gradePct": -8.993509787230991,
        "smoothedEle": 272.40321376984986,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538963,
        "lng": 120.929808,
        "ele": 278.25,
        "distanceKm": 25.144540337846898,
        "gradePct": 0.7207285075129345,
        "smoothedEle": 276.144335936757,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538948,
        "lng": 120.930277,
        "ele": 279.75,
        "distanceKm": 25.192009863391565,
        "gradePct": 7.90826682718165,
        "smoothedEle": 280.36241189994166,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538734,
        "lng": 120.930858,
        "ele": 285.25,
        "distanceKm": 25.25541384672405,
        "gradePct": 9.215155050327253,
        "smoothedEle": 286.3256958501818,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538699,
        "lng": 120.930933,
        "ele": 286,
        "distanceKm": 25.263940266114105,
        "gradePct": 9.843052442831352,
        "smoothedEle": 287.71123900106574,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538643,
        "lng": 120.93097,
        "ele": 287.75,
        "distanceKm": 25.271205377448105,
        "gradePct": 10.378065354369676,
        "smoothedEle": 288.89181959284076,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538283,
        "lng": 120.9311055,
        "ele": 296.00000000000034,
        "distanceKm": 25.313517044612126,
        "gradePct": 13.56970525216159,
        "smoothedEle": 295.9549148037103,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537923,
        "lng": 120.931241,
        "ele": 304.25,
        "distanceKm": 25.355828724511856,
        "gradePct": 14.022098643522012,
        "smoothedEle": 300.4152121342222,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537884,
        "lng": 120.931266,
        "ele": 304.75,
        "distanceKm": 25.36084879290637,
        "gradePct": 13.259591796036585,
        "smoothedEle": 300.46846640084544,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537859,
        "lng": 120.931295,
        "ele": 304.75,
        "distanceKm": 25.36489016895522,
        "gradePct": 12.65338538870906,
        "smoothedEle": 300.51898360145606,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537841,
        "lng": 120.931423,
        "ele": 302.5,
        "distanceKm": 25.377991508324254,
        "gradePct": 10.740387712867307,
        "smoothedEle": 300.7650175139622,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537854,
        "lng": 120.931657,
        "ele": 296.75,
        "distanceKm": 25.401705347359187,
        "gradePct": 6.360693283646607,
        "smoothedEle": 300.3438790610323,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53785,
        "lng": 120.931776,
        "ele": 297.25,
        "distanceKm": 25.413750736987804,
        "gradePct": 4.104413482867811,
        "smoothedEle": 300.0839630323945,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537828,
        "lng": 120.931836,
        "ele": 298,
        "distanceKm": 25.420294367555815,
        "gradePct": 3.59456471413194,
        "smoothedEle": 300.26391287301476,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537721,
        "lng": 120.931963,
        "ele": 300.25,
        "distanceKm": 25.437804065194555,
        "gradePct": 2.598464422236438,
        "smoothedEle": 301.1136021555635,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.537357,
        "lng": 120.932158,
        "ele": 307.5,
        "distanceKm": 25.482829561942424,
        "gradePct": 6.549234901233568,
        "smoothedEle": 307.2283325262675,
        "gradeBand": "steep"
      },
      {
        "lat": 24.536917,
        "lng": 120.932547,
        "ele": 316.75,
        "distanceKm": 25.545615329095778,
        "gradePct": 14.646658962389173,
        "smoothedEle": 316.82107723460445,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536655,
        "lng": 120.932809,
        "ele": 322.5,
        "distanceKm": 25.58499942380277,
        "gradePct": 13.101273271646036,
        "smoothedEle": 320.66112887746465,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536629,
        "lng": 120.932883,
        "ele": 323.25,
        "distanceKm": 25.593023707298613,
        "gradePct": 12.276494573643728,
        "smoothedEle": 321.0623430522567,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536653,
        "lng": 120.933022,
        "ele": 322.25,
        "distanceKm": 25.60733509209927,
        "gradePct": 10.789751623087643,
        "smoothedEle": 321.7621698776205,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536693,
        "lng": 120.933099,
        "ele": 322,
        "distanceKm": 25.616304422062537,
        "gradePct": 9.631119281691474,
        "smoothedEle": 321.97391965375607,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536763,
        "lng": 120.933152,
        "ele": 321.75,
        "distanceKm": 25.625755726015868,
        "gradePct": 7.927187746063454,
        "smoothedEle": 321.7140087950395,
        "gradeBand": "steep"
      },
      {
        "lat": 24.537302,
        "lng": 120.933012,
        "ele": 319.75,
        "distanceKm": 25.687340216715768,
        "gradePct": -1.2880902276777235,
        "smoothedEle": 319.49007829543666,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537621,
        "lng": 120.932983,
        "ele": 317.75,
        "distanceKm": 25.72293253695933,
        "gradePct": -3.575748386052175,
        "smoothedEle": 318.2158981080421,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538092,
        "lng": 120.933017,
        "ele": 317,
        "distanceKm": 25.775418219753384,
        "gradePct": -0.6502373784910468,
        "smoothedEle": 319.27036640087016,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538181,
        "lng": 120.933046,
        "ele": 317.5,
        "distanceKm": 25.78574018427001,
        "gradePct": 0.8063142321774307,
        "smoothedEle": 320.3541726751161,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538207,
        "lng": 120.933071,
        "ele": 318.25,
        "distanceKm": 25.789581171749894,
        "gradePct": 1.3476226889687077,
        "smoothedEle": 320.7574763605038,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538264,
        "lng": 120.933205,
        "ele": 322.25,
        "distanceKm": 25.80454426582519,
        "gradePct": 3.4946825323012334,
        "smoothedEle": 322.368867894426,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538327,
        "lng": 120.93346,
        "ele": 328.25,
        "distanceKm": 25.831272472983912,
        "gradePct": 9.204462235573867,
        "smoothedEle": 327.5879145723882,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538331,
        "lng": 120.933975,
        "ele": 337.5,
        "distanceKm": 25.88336783022787,
        "gradePct": 15.976210123464455,
        "smoothedEle": 336.0812856241556,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538421,
        "lng": 120.934469,
        "ele": 340.75,
        "distanceKm": 25.934329347051087,
        "gradePct": 12.159330643990412,
        "smoothedEle": 340.24562294300506,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538568,
        "lng": 120.93505,
        "ele": 342.25,
        "distanceKm": 25.995329574434038,
        "gradePct": 8.266518152382044,
        "smoothedEle": 345.32526168794715,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538577,
        "lng": 120.935259,
        "ele": 346.5,
        "distanceKm": 26.016494047305287,
        "gradePct": 10.636261075543151,
        "smoothedEle": 349.42446656015613,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538489,
        "lng": 120.935438,
        "ele": 355,
        "distanceKm": 26.037075238797676,
        "gradePct": 12.963518808779199,
        "smoothedEle": 353.43779890117213,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538466,
        "lng": 120.935527,
        "ele": 358.25,
        "distanceKm": 26.04643401077368,
        "gradePct": 13.717703904144148,
        "smoothedEle": 354.9713119232339,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538459,
        "lng": 120.935651,
        "ele": 361.25,
        "distanceKm": 26.059001016472997,
        "gradePct": 14.582065664187061,
        "smoothedEle": 356.88215911123115,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538496,
        "lng": 120.935764,
        "ele": 361.75,
        "distanceKm": 26.07114911504839,
        "gradePct": 15.02823549028507,
        "smoothedEle": 358.33993094027807,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538671,
        "lng": 120.936023,
        "ele": 358.5,
        "distanceKm": 26.103783674913803,
        "gradePct": 15.18344425744915,
        "smoothedEle": 362.14612399438886,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538692,
        "lng": 120.936508,
        "ele": 368.75,
        "distanceKm": 26.152897966690656,
        "gradePct": 10.04108378027442,
        "smoothedEle": 365.99525767419726,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538838,
        "lng": 120.936883,
        "ele": 368.25,
        "distanceKm": 26.194158054944108,
        "gradePct": 5.490641996127046,
        "smoothedEle": 366.5141227552077,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539074,
        "lng": 120.937259,
        "ele": 361.25,
        "distanceKm": 26.240365854253863,
        "gradePct": -1.0965047597040738,
        "smoothedEle": 363.9165993637757,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539094,
        "lng": 120.937627,
        "ele": 363.75,
        "distanceKm": 26.277656067084493,
        "gradePct": 2.4695043610127176,
        "smoothedEle": 368.7761068313627,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538787,
        "lng": 120.937723,
        "ele": 380.5,
        "distanceKm": 26.31314722877233,
        "gradePct": 14.427750742343983,
        "smoothedEle": 379.87441683569875,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538625,
        "lng": 120.937802,
        "ele": 389.25,
        "distanceKm": 26.33285372911469,
        "gradePct": 21.743078776157777,
        "smoothedEle": 386.08196444354166,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538535,
        "lng": 120.937896,
        "ele": 394,
        "distanceKm": 26.346658040038793,
        "gradePct": 25.850697688465036,
        "smoothedEle": 390.5872688756304,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538507,
        "lng": 120.937974,
        "ele": 395.25,
        "distanceKm": 26.355140003901056,
        "gradePct": 26.335731198791475,
        "smoothedEle": 392.17763709980466,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538448,
        "lng": 120.93861,
        "ele": 399.25,
        "distanceKm": 26.419806467702298,
        "gradePct": 17.088600951772705,
        "smoothedEle": 399.06067805041107,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538459,
        "lng": 120.939087,
        "ele": 401.25,
        "distanceKm": 26.468071590263662,
        "gradePct": 8.617033510729632,
        "smoothedEle": 402.17109717320665,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538563,
        "lng": 120.939519,
        "ele": 406.5,
        "distanceKm": 26.513273649402972,
        "gradePct": 5.4701934800441245,
        "smoothedEle": 403.8355241551087,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538861,
        "lng": 120.939779,
        "ele": 402.25,
        "distanceKm": 26.555578124824237,
        "gradePct": 3.3211055600346624,
        "smoothedEle": 404.6870682644876,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539022,
        "lng": 120.940257,
        "ele": 407.25,
        "distanceKm": 26.60713659013666,
        "gradePct": 2.2193096495309104,
        "smoothedEle": 405.8288554481912,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.539212,
        "lng": 120.940629,
        "ele": 406.5,
        "distanceKm": 26.65029040956318,
        "gradePct": 3.8854656137432944,
        "smoothedEle": 408.4660977922663,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539245,
        "lng": 120.940751,
        "ele": 407.25,
        "distanceKm": 26.66316490603512,
        "gradePct": 5.220328642637565,
        "smoothedEle": 410.0754098512588,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539242,
        "lng": 120.940805,
        "ele": 408.25,
        "distanceKm": 26.668637269780934,
        "gradePct": 5.827519244447362,
        "smoothedEle": 410.80378859844245,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539186,
        "lng": 120.940889,
        "ele": 410.75,
        "distanceKm": 26.679171458481935,
        "gradePct": 7.158132563140225,
        "smoothedEle": 412.3676866275439,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538913,
        "lng": 120.941013,
        "ele": 419.75,
        "distanceKm": 26.712016924543526,
        "gradePct": 12.025033051457854,
        "smoothedEle": 418.15213845115005,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538866,
        "lng": 120.941045,
        "ele": 421,
        "distanceKm": 26.71816429038522,
        "gradePct": 12.576731227629459,
        "smoothedEle": 419.0795181711035,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538784,
        "lng": 120.941123,
        "ele": 423.25,
        "distanceKm": 26.73022196942544,
        "gradePct": 13.400134175620545,
        "smoothedEle": 420.6397973019844,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538753,
        "lng": 120.941166,
        "ele": 424,
        "distanceKm": 26.735771797974135,
        "gradePct": 13.713074547191784,
        "smoothedEle": 421.29190215645605,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538731,
        "lng": 120.941212,
        "ele": 424.25,
        "distanceKm": 26.741028668127882,
        "gradePct": 14.009495758186205,
        "smoothedEle": 421.9095843995214,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538716,
        "lng": 120.941262,
        "ele": 424.5,
        "distanceKm": 26.746354201908563,
        "gradePct": 14.241387796572976,
        "smoothedEle": 422.46693368312674,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538692,
        "lng": 120.941583,
        "ele": 422.5,
        "distanceKm": 26.778933492565177,
        "gradePct": 12.755872920296884,
        "smoothedEle": 425.0882313000966,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538512,
        "lng": 120.941978,
        "ele": 429.75,
        "distanceKm": 26.823621455392225,
        "gradePct": 10.010170050535322,
        "smoothedEle": 429.79585237195323,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538362,
        "lng": 120.942337,
        "ele": 436.25,
        "distanceKm": 26.86358243347638,
        "gradePct": 13.560754379393336,
        "smoothedEle": 437.41385459479113,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538318,
        "lng": 120.942408,
        "ele": 438,
        "distanceKm": 26.87227241934144,
        "gradePct": 14.295414349038618,
        "smoothedEle": 438.8477022625257,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538276,
        "lng": 120.942454,
        "ele": 440,
        "distanceKm": 26.878864930248575,
        "gradePct": 14.79906146043557,
        "smoothedEle": 439.88177630411167,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538227,
        "lng": 120.942488,
        "ele": 442,
        "distanceKm": 26.885308125622004,
        "gradePct": 14.612281183398371,
        "smoothedEle": 440.372043585054,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53819,
        "lng": 120.942497,
        "ele": 443.5,
        "distanceKm": 26.889521861097755,
        "gradePct": 14.489014376838973,
        "smoothedEle": 440.6926696897389,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538151,
        "lng": 120.942494,
        "ele": 445,
        "distanceKm": 26.89386907359249,
        "gradePct": 14.344479495652049,
        "smoothedEle": 441.00608875966986,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538126,
        "lng": 120.94247,
        "ele": 446,
        "distanceKm": 26.897559771257512,
        "gradePct": 13.996618064181659,
        "smoothedEle": 441.0470212001634,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53811,
        "lng": 120.942364,
        "ele": 446.25,
        "distanceKm": 26.90842853993847,
        "gradePct": 12.972197812284195,
        "smoothedEle": 441.1675635115771,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53829548019382,
        "lng": 120.94202904679372,
        "ele": 437.35907053919436,
        "distanceKm": 26.94809356700877,
        "gradePct": 3.0306626323030197,
        "smoothedEle": 437.49178121219916,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538463,
        "lng": 120.941687,
        "ele": 429,
        "distanceKm": 26.987388066670817,
        "gradePct": -7.128959835082766,
        "smoothedEle": 433.40134793154886,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538382,
        "lng": 120.941351,
        "ele": 434.75,
        "distanceKm": 27.022548409824253,
        "gradePct": -6.108529088361961,
        "smoothedEle": 433.750537451722,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538394,
        "lng": 120.94104,
        "ele": 437.5,
        "distanceKm": 27.054035060867037,
        "gradePct": -1.8127845710434682,
        "smoothedEle": 435.0605059001193,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538497,
        "lng": 120.940746,
        "ele": 434.5,
        "distanceKm": 27.085903027974737,
        "gradePct": 0.5723867102404857,
        "smoothedEle": 434.1283224787067,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.53852,
        "lng": 120.940674,
        "ele": 432.25,
        "distanceKm": 27.09362198023599,
        "gradePct": 0.6952203915506531,
        "smoothedEle": 434.15847947331565,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538532,
        "lng": 120.940602,
        "ele": 430.75,
        "distanceKm": 27.10102616392233,
        "gradePct": 0.7575461507462825,
        "smoothedEle": 434.2943387397761,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538499,
        "lng": 120.940481,
        "ele": 429.75,
        "distanceKm": 27.113803803393317,
        "gradePct": 1.109808477041936,
        "smoothedEle": 434.77350021993806,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538458,
        "lng": 120.940451,
        "ele": 430.5,
        "distanceKm": 27.119280395487785,
        "gradePct": 1.5841010984640094,
        "smoothedEle": 435.302182770301,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538407,
        "lng": 120.940444,
        "ele": 432.25,
        "distanceKm": 27.124995377625826,
        "gradePct": 2.2864296924164154,
        "smoothedEle": 436.1387706230142,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538297,
        "lng": 120.940466,
        "ele": 436.25,
        "distanceKm": 27.13742762493036,
        "gradePct": 3.6340364326202397,
        "smoothedEle": 438.00360771869424,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538243,
        "lng": 120.940501,
        "ele": 438.5,
        "distanceKm": 27.144398162637206,
        "gradePct": 4.493917637819088,
        "smoothedEle": 439.1534906916874,
        "gradeBand": "hard"
      },
      {
        "lat": 24.53818,
        "lng": 120.940553,
        "ele": 441.25,
        "distanceKm": 27.153158352145862,
        "gradePct": 6.319365506309192,
        "smoothedEle": 441.3433968775365,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538027,
        "lng": 120.940726,
        "ele": 449.5,
        "distanceKm": 27.17756461224012,
        "gradePct": 13.706745130053639,
        "smoothedEle": 448.0789781438251,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537825,
        "lng": 120.941025,
        "ele": 458.25,
        "distanceKm": 27.215237593889196,
        "gradePct": 23.17279770057196,
        "smoothedEle": 458.08470881600357,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537582,
        "lng": 120.941466,
        "ele": 469,
        "distanceKm": 27.267391330560454,
        "gradePct": 23.258392438106068,
        "smoothedEle": 468.5297726446153,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537475,
        "lng": 120.94182,
        "ele": 475.75,
        "distanceKm": 27.305124388381635,
        "gradePct": 17.52582068971916,
        "smoothedEle": 472.92451937029927,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537487,
        "lng": 120.942368,
        "ele": 472.5,
        "distanceKm": 27.360572306463744,
        "gradePct": 6.996823333468413,
        "smoothedEle": 474.1609192982337,
        "gradeBand": "steep"
      },
      {
        "lat": 24.537533,
        "lng": 120.94286,
        "ele": 476.25,
        "distanceKm": 27.410601748220127,
        "gradePct": 4.800030999576609,
        "smoothedEle": 477.84668673754896,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537478,
        "lng": 120.943419,
        "ele": 488,
        "distanceKm": 27.46747605112027,
        "gradePct": 12.097796627458022,
        "smoothedEle": 486.76732838209836,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53744,
        "lng": 120.943762,
        "ele": 492,
        "distanceKm": 27.50242789678451,
        "gradePct": 17.372507513364308,
        "smoothedEle": 494.61701052833865,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537202,
        "lng": 120.944039,
        "ele": 504.75,
        "distanceKm": 27.54096948713661,
        "gradePct": 20.874555060351373,
        "smoothedEle": 503.4843721153801,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53698,
        "lng": 120.944401,
        "ele": 514.25,
        "distanceKm": 27.5851306296538,
        "gradePct": 21.520681040116564,
        "smoothedEle": 512.2529739979152,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536896,
        "lng": 120.944729,
        "ele": 516.25,
        "distanceKm": 27.61959865681893,
        "gradePct": 17.166031049847657,
        "smoothedEle": 515.733561952632,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536964,
        "lng": 120.945162,
        "ele": 516.75,
        "distanceKm": 27.66404598442663,
        "gradePct": 9.918173590432247,
        "smoothedEle": 517.9845969401254,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.536983,
        "lng": 120.945511,
        "ele": 521,
        "distanceKm": 27.699411696374575,
        "gradePct": 5.82897765035719,
        "smoothedEle": 519.5240564885263,
        "gradeBand": "hard"
      },
      {
        "lat": 24.53719,
        "lng": 120.945797,
        "ele": 521,
        "distanceKm": 27.73638109605067,
        "gradePct": 2.6095906838005103,
        "smoothedEle": 519.1930993018331,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.537357,
        "lng": 120.945809,
        "ele": 518.25,
        "distanceKm": 27.754990304671743,
        "gradePct": 0.5505747620919613,
        "smoothedEle": 518.0765467845687,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.537429,
        "lng": 120.945783,
        "ele": 516.75,
        "distanceKm": 27.763417259463488,
        "gradePct": -0.7166285505559142,
        "smoothedEle": 517.2361266126682,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537477,
        "lng": 120.945732,
        "ele": 515.5,
        "distanceKm": 27.770840245988467,
        "gradePct": -1.7865212852134136,
        "smoothedEle": 516.4938279601702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537529,
        "lng": 120.945592,
        "ele": 515,
        "distanceKm": 27.786136619951996,
        "gradePct": -4.030606537727464,
        "smoothedEle": 514.9155895875019,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53748,
        "lng": 120.945222,
        "ele": 511,
        "distanceKm": 27.823957754755185,
        "gradePct": -5.804741320009984,
        "smoothedEle": 513.4995741259992,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537487,
        "lng": 120.945174,
        "ele": 510.5,
        "distanceKm": 27.82887509462268,
        "gradePct": -5.574386793078509,
        "smoothedEle": 513.6859076792925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537882,
        "lng": 120.944822,
        "ele": 519.25,
        "distanceKm": 27.88541641302897,
        "gradePct": 6.156251718420689,
        "smoothedEle": 521.14615030261,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538075,
        "lng": 120.944777,
        "ele": 525.25,
        "distanceKm": 27.907354485513416,
        "gradePct": 12.429389756711254,
        "smoothedEle": 526.5505868477586,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538114,
        "lng": 120.944798,
        "ele": 527.5,
        "distanceKm": 27.9121833994185,
        "gradePct": 13.5276769361382,
        "smoothedEle": 527.4680804897245,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538136,
        "lng": 120.944811,
        "ele": 528.5,
        "distanceKm": 27.91496072236529,
        "gradePct": 14.15935069250352,
        "smoothedEle": 527.9957718496147,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538189,
        "lng": 120.944889,
        "ele": 532.75,
        "distanceKm": 27.924808659559492,
        "gradePct": 16.33506231742194,
        "smoothedEle": 529.8668799165131,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538164,
        "lng": 120.945337,
        "ele": 538.25,
        "distanceKm": 27.970210150011933,
        "gradePct": 15.756501276577643,
        "smoothedEle": 534.8962885388723,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538112,
        "lng": 120.945466,
        "ele": 537.5,
        "distanceKm": 27.984482537582462,
        "gradePct": 13.52680365452685,
        "smoothedEle": 534.5497354400013,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538069,
        "lng": 120.945515,
        "ele": 536.25,
        "distanceKm": 27.991369359346095,
        "gradePct": 11.83377655108285,
        "smoothedEle": 534.4464331135468,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537887,
        "lng": 120.945623,
        "ele": 529.75,
        "distanceKm": 28.014367205828126,
        "gradePct": 5.91892537421498,
        "smoothedEle": 533.8019290817683,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537833,
        "lng": 120.945907,
        "ele": 531.25,
        "distanceKm": 28.043715398904144,
        "gradePct": 2.423307655295582,
        "smoothedEle": 534.3846059914042,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.537877,
        "lng": 120.946145,
        "ele": 538.75,
        "distanceKm": 28.068281873477854,
        "gradePct": 2.1163804668161377,
        "smoothedEle": 536.799061687291,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.537777,
        "lng": 120.946484,
        "ele": 542,
        "distanceKm": 28.10433046891779,
        "gradePct": 9.706810447928751,
        "smoothedEle": 543.7900144486191,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537845273684464,
        "lng": 120.94689112885241,
        "ele": 552.1656550384121,
        "distanceKm": 28.146206574155524,
        "gradePct": 17.27088180064764,
        "smoothedEle": 551.9003268411838,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53794,
        "lng": 120.947297,
        "ele": 561.5,
        "distanceKm": 28.18859119499291,
        "gradePct": 17.53830753639111,
        "smoothedEle": 558.2759833525721,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537794,
        "lng": 120.947646,
        "ele": 559.75,
        "distanceKm": 28.2274474776849,
        "gradePct": 11.670839984270009,
        "smoothedEle": 559.9380177607236,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537562,
        "lng": 120.948112,
        "ele": 558.25,
        "distanceKm": 28.281182175588704,
        "gradePct": 4.3219999415044255,
        "smoothedEle": 561.483490304068,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537473,
        "lng": 120.948562,
        "ele": 569,
        "distanceKm": 28.32776440089197,
        "gradePct": 8.926526854749897,
        "smoothedEle": 568.8736596963055,
        "gradeBand": "steep"
      },
      {
        "lat": 24.537482,
        "lng": 120.948598,
        "ele": 570,
        "distanceKm": 28.33154092060598,
        "gradePct": 9.478800695923475,
        "smoothedEle": 569.5345506462577,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537528,
        "lng": 120.948637,
        "ele": 572,
        "distanceKm": 28.338000465773852,
        "gradePct": 9.966703910571342,
        "smoothedEle": 570.2082379089952,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537585,
        "lng": 120.948664,
        "ele": 575,
        "distanceKm": 28.344901975153412,
        "gradePct": 10.475613168017581,
        "smoothedEle": 570.9156426204,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537687,
        "lng": 120.948629,
        "ele": 577,
        "distanceKm": 28.356783588866012,
        "gradePct": 11.103392197054815,
        "smoothedEle": 571.8851507086816,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537712,
        "lng": 120.948575,
        "ele": 575.75,
        "distanceKm": 28.362912531364188,
        "gradePct": 10.896471954595954,
        "smoothedEle": 571.8545059961908,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537835,
        "lng": 120.948229,
        "ele": 568.5,
        "distanceKm": 28.40048886524173,
        "gradePct": 8.298548833280957,
        "smoothedEle": 572.845003734045,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538108,
        "lng": 120.947982,
        "ele": 575,
        "distanceKm": 28.43980473488639,
        "gradePct": 5.810481455164594,
        "smoothedEle": 576.2036569481949,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538487,
        "lng": 120.947826,
        "ele": 586.5,
        "distanceKm": 28.484805047628175,
        "gradePct": 12.044149016038602,
        "smoothedEle": 584.4757333378077,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538562,
        "lng": 120.947798,
        "ele": 588.75,
        "distanceKm": 28.493612496153858,
        "gradePct": 13.067049468429259,
        "smoothedEle": 585.7307947527177,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538637,
        "lng": 120.947743,
        "ele": 588.75,
        "distanceKm": 28.503637489853347,
        "gradePct": 13.574695252949063,
        "smoothedEle": 586.688677856533,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538684,
        "lng": 120.947696,
        "ele": 589,
        "distanceKm": 28.51070252776398,
        "gradePct": 13.412712178464439,
        "smoothedEle": 587.1302427259474,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538704,
        "lng": 120.947563,
        "ele": 589.25,
        "distanceKm": 28.524338324276172,
        "gradePct": 11.716233780449958,
        "smoothedEle": 586.5986352107874,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538457,
        "lng": 120.947188,
        "ele": 581.25,
        "distanceKm": 28.57116969297148,
        "gradePct": 0.01652257710134085,
        "smoothedEle": 581.9857689940989,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538397,
        "lng": 120.94708,
        "ele": 579,
        "distanceKm": 28.583970284421575,
        "gradePct": -3.6993461347753436,
        "smoothedEle": 580.622938824754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538374,
        "lng": 120.946964,
        "ele": 577.75,
        "distanceKm": 28.59597943419825,
        "gradePct": -6.564953519266529,
        "smoothedEle": 579.3920009726451,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538383,
        "lng": 120.946889,
        "ele": 577.5,
        "distanceKm": 28.603631579384448,
        "gradePct": -7.489391546981672,
        "smoothedEle": 579.1987215672217,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538417,
        "lng": 120.946815,
        "ele": 577.75,
        "distanceKm": 28.612017427104444,
        "gradePct": -7.880258266202647,
        "smoothedEle": 579.1987215672217,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538571,
        "lng": 120.946616,
        "ele": 579,
        "distanceKm": 28.63844508615215,
        "gradePct": -4.847940385198444,
        "smoothedEle": 580.3611858896462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538736,
        "lng": 120.946547,
        "ele": 581.25,
        "distanceKm": 28.658074977922304,
        "gradePct": -0.57973790489381,
        "smoothedEle": 582.6958539227104,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539082099579133,
        "lng": 120.94660020528117,
        "ele": 589.6387191724187,
        "distanceKm": 28.696934032054127,
        "gradePct": 10.15067296273193,
        "smoothedEle": 589.5185625128266,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539425,
        "lng": 120.946681,
        "ele": 597.75,
        "distanceKm": 28.735928883379316,
        "gradePct": 16.627768404268856,
        "smoothedEle": 596.8782749504999,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53994,
        "lng": 120.946675,
        "ele": 605.25,
        "distanceKm": 28.793197565655348,
        "gradePct": 17.150448088423996,
        "smoothedEle": 606.0129776131816,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539998,
        "lng": 120.946679,
        "ele": 606.25,
        "distanceKm": 28.79965955946349,
        "gradePct": 16.57774577192719,
        "smoothedEle": 606.6107120404348,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.540056,
        "lng": 120.946733,
        "ele": 609.75,
        "distanceKm": 28.80811111392465,
        "gradePct": 15.764406272934938,
        "smoothedEle": 607.3924808280921,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.540067,
        "lng": 120.946779,
        "ele": 611.5,
        "distanceKm": 28.812922139907016,
        "gradePct": 15.301414822058188,
        "smoothedEle": 607.837500731461,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.540052,
        "lng": 120.946822,
        "ele": 612,
        "distanceKm": 28.817580471059692,
        "gradePct": 14.626824542516168,
        "smoothedEle": 608.0421028724066,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.540024,
        "lng": 120.946852,
        "ele": 611.75,
        "distanceKm": 28.821928115693403,
        "gradePct": 13.882353476032138,
        "smoothedEle": 608.1181866534965,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539998,
        "lng": 120.94687,
        "ele": 611.5,
        "distanceKm": 28.82534473847638,
        "gradePct": 13.29730639391918,
        "smoothedEle": 608.1779775521987,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539712,
        "lng": 120.946909,
        "ele": 607,
        "distanceKm": 28.857390272014236,
        "gradePct": 6.800310332835596,
        "smoothedEle": 607.1018071232116,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539317,
        "lng": 120.947061,
        "ele": 601.75,
        "distanceKm": 28.903925613861784,
        "gradePct": -2.0010221134075152,
        "smoothedEle": 605.0042999588693,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539277,
        "lng": 120.9471,
        "ele": 601.5,
        "distanceKm": 28.90987080325196,
        "gradePct": -2.015885086883003,
        "smoothedEle": 605.539367003985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539264,
        "lng": 120.947148,
        "ele": 602,
        "distanceKm": 28.91493669720324,
        "gradePct": -1.9306861903899926,
        "smoothedEle": 605.9952974596002,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539279,
        "lng": 120.947206,
        "ele": 603,
        "distanceKm": 28.921035978035366,
        "gradePct": -1.5583415099892826,
        "smoothedEle": 606.5442327344916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53933,
        "lng": 120.947263,
        "ele": 605.25,
        "distanceKm": 28.929123144163288,
        "gradePct": -0.7790114040575307,
        "smoothedEle": 607.2720776860046,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539587,
        "lng": 120.947473,
        "ele": 616,
        "distanceKm": 28.964730261646256,
        "gradePct": 8.780971819653233,
        "smoothedEle": 615.5519404827158,
        "gradeBand": "steep"
      },
      {
        "lat": 24.539831,
        "lng": 120.947925,
        "ele": 630,
        "distanceKm": 29.017894862854384,
        "gradePct": 22.061201553949473,
        "smoothedEle": 628.3227339221529,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539846,
        "lng": 120.948046,
        "ele": 632.25,
        "distanceKm": 29.030247276270536,
        "gradePct": 23.399466605917276,
        "smoothedEle": 630.9329431433691,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539835,
        "lng": 120.948145,
        "ele": 633.25,
        "distanceKm": 29.040335661412563,
        "gradePct": 23.80186318819301,
        "smoothedEle": 633.6812315225957,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539807,
        "lng": 120.948232,
        "ele": 633.75,
        "distanceKm": 29.049670342922894,
        "gradePct": 23.182587044573108,
        "smoothedEle": 635.2325855119404,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539686,
        "lng": 120.948438,
        "ele": 636.75,
        "distanceKm": 29.07447383312225,
        "gradePct": 21.60965877167772,
        "smoothedEle": 639.5021253912341,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53968,
        "lng": 120.948458,
        "ele": 637.75,
        "distanceKm": 29.076604031945887,
        "gradePct": 21.417488543997514,
        "smoothedEle": 639.8216552147795,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539724,
        "lng": 120.94854,
        "ele": 643.75,
        "distanceKm": 29.086233905917624,
        "gradePct": 20.53933067608778,
        "smoothedEle": 641.2567119397792,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539752,
        "lng": 120.948538,
        "ele": 644.5,
        "distanceKm": 29.089353933710854,
        "gradePct": 20.226665379613163,
        "smoothedEle": 641.6935158308314,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.539893,
        "lng": 120.948498,
        "ele": 647.25,
        "distanceKm": 29.10554609373055,
        "gradePct": 18.428730195538684,
        "smoothedEle": 643.7851373489754,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.540062,
        "lng": 120.948385,
        "ele": 647.25,
        "distanceKm": 29.12754119474557,
        "gradePct": 15.139435114412562,
        "smoothedEle": 645.5005516266725,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.540223,
        "lng": 120.947934,
        "ele": 643.75,
        "distanceKm": 29.176547254041278,
        "gradePct": 5.366620696964256,
        "smoothedEle": 645.1797592260523,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540253,
        "lng": 120.947836,
        "ele": 643,
        "distanceKm": 29.18700627417855,
        "gradePct": 4.154833884204946,
        "smoothedEle": 645.5196773805137,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540296,
        "lng": 120.947775,
        "ele": 643.25,
        "distanceKm": 29.194812234243646,
        "gradePct": 3.3747795341050253,
        "smoothedEle": 645.7733710826292,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540375,
        "lng": 120.947711,
        "ele": 644.75,
        "distanceKm": 29.205724336874667,
        "gradePct": 2.4577796907029428,
        "smoothedEle": 646.2568183549807,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540612,
        "lng": 120.947615,
        "ele": 650.5,
        "distanceKm": 29.23380966994163,
        "gradePct": 3.124352534994115,
        "smoothedEle": 648.5838708846542,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540928,
        "lng": 120.94723,
        "ele": 652.25,
        "distanceKm": 29.286261583779837,
        "gradePct": 4.413379989789229,
        "smoothedEle": 649.9088549323448,
        "gradeBand": "hard"
      },
      {
        "lat": 24.541018,
        "lng": 120.946837,
        "ele": 645.75,
        "distanceKm": 29.327253966752043,
        "gradePct": 1.5159401952042584,
        "smoothedEle": 649.5566284280899,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541095,
        "lng": 120.946752,
        "ele": 645.5,
        "distanceKm": 29.339387792538638,
        "gradePct": 1.104860067277157,
        "smoothedEle": 649.8296395082882,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541149,
        "lng": 120.946746,
        "ele": 647,
        "distanceKm": 29.34542291978325,
        "gradePct": 1.0881975121746863,
        "smoothedEle": 649.965429871292,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541225,
        "lng": 120.94677,
        "ele": 649.5,
        "distanceKm": 29.35421551374044,
        "gradePct": 2.1243546513415748,
        "smoothedEle": 651.223696098166,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.54134,
        "lng": 120.946837,
        "ele": 654.5,
        "distanceKm": 29.368687792410373,
        "gradePct": 5.718123875702337,
        "smoothedEle": 655.1830485199397,
        "gradeBand": "hard"
      },
      {
        "lat": 24.541865,
        "lng": 120.946987,
        "ele": 674.25,
        "distanceKm": 29.429004674434182,
        "gradePct": 23.115610726279225,
        "smoothedEle": 672.7116300772176,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.541951,
        "lng": 120.947005,
        "ele": 677.5,
        "distanceKm": 29.43873923221842,
        "gradePct": 25.7035287097377,
        "smoothedEle": 675.5185756108214,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.542076,
        "lng": 120.946982,
        "ele": 680.25,
        "distanceKm": 29.452831968187393,
        "gradePct": 28.60291525763744,
        "smoothedEle": 679.6286187439288,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.542604,
        "lng": 120.946703,
        "ele": 689.25,
        "distanceKm": 29.517973231712503,
        "gradePct": 20.565411227268378,
        "smoothedEle": 690.0712134010298,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.542688,
        "lng": 120.946674,
        "ele": 690.75,
        "distanceKm": 29.527763388701768,
        "gradePct": 19.45806402324815,
        "smoothedEle": 691.8089662666243,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.542794,
        "lng": 120.946656,
        "ele": 693.25,
        "distanceKm": 29.539689857557963,
        "gradePct": 17.994176434811806,
        "smoothedEle": 693.7899949569845,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.542882,
        "lng": 120.94667,
        "ele": 695.5,
        "distanceKm": 29.549576959385075,
        "gradePct": 16.22297462370295,
        "smoothedEle": 694.9022939125344,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.542929,
        "lng": 120.946757,
        "ele": 698,
        "distanceKm": 29.55981178545341,
        "gradePct": 15.306180164310614,
        "smoothedEle": 696.053711845222,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.542768,
        "lng": 120.947108,
        "ele": 700.5,
        "distanceKm": 29.599573237413995,
        "gradePct": 11.878041885919005,
        "smoothedEle": 698.9996090603566,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.542377,
        "lng": 120.947361,
        "ele": 698,
        "distanceKm": 29.650022780292428,
        "gradePct": 2.2348562151537092,
        "smoothedEle": 697.1873049797653,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541915,
        "lng": 120.947531,
        "ele": 691.75,
        "distanceKm": 29.704196356796295,
        "gradePct": -6.559555020777701,
        "smoothedEle": 692.2739772499083,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541662,
        "lng": 120.947719,
        "ele": 689,
        "distanceKm": 29.738152830662067,
        "gradePct": -6.181257419080706,
        "smoothedEle": 691.4324529733829,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541528,
        "lng": 120.948041,
        "ele": 693.75,
        "distanceKm": 29.77396948375525,
        "gradePct": -0.5461256674960773,
        "smoothedEle": 694.4693086373816,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541718,
        "lng": 120.948742,
        "ele": 711,
        "distanceKm": 29.847955998231555,
        "gradePct": 14.299868757949548,
        "smoothedEle": 706.5635218125092,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.541815,
        "lng": 120.948608,
        "ele": 709.5,
        "distanceKm": 29.86527789813438,
        "gradePct": 12.757463018745103,
        "smoothedEle": 706.4898214181134,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.54171,
        "lng": 120.948424,
        "ele": 702.25,
        "distanceKm": 29.88724846218133,
        "gradePct": 5.947903335317876,
        "smoothedEle": 702.5878615426877,
        "gradeBand": "hard"
      },
      {
        "lat": 24.541628,
        "lng": 120.948062,
        "ele": 693.5,
        "distanceKm": 29.924982824845884,
        "gradePct": -7.649983437594761,
        "smoothedEle": 695.1582262318552,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541649,
        "lng": 120.947866,
        "ele": 691,
        "distanceKm": 29.944945206140016,
        "gradePct": -13.501259564580929,
        "smoothedEle": 692.5701028099708,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541803,
        "lng": 120.947567,
        "ele": 689.75,
        "distanceKm": 29.979700295093288,
        "gradePct": -11.805108404671106,
        "smoothedEle": 692.1233033873234,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542122,
        "lng": 120.947495,
        "ele": 695.5,
        "distanceKm": 30.01591143654408,
        "gradePct": -2.2262199798567193,
        "smoothedEle": 694.7180999365402,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542557,
        "lng": 120.947275,
        "ele": 700,
        "distanceKm": 30.06915456455165,
        "gradePct": 6.8261661915302225,
        "smoothedEle": 699.0850418492552,
        "gradeBand": "steep"
      },
      {
        "lat": 24.542869,
        "lng": 120.946989,
        "ele": 700.5,
        "distanceKm": 30.11432597691772,
        "gradePct": 4.155820339344527,
        "smoothedEle": 698.7603103480399,
        "gradeBand": "hard"
      },
      {
        "lat": 24.54291,
        "lng": 120.946898,
        "ele": 700,
        "distanceKm": 30.124597676869048,
        "gradePct": 2.3997317605485136,
        "smoothedEle": 697.8302674302713,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.542924,
        "lng": 120.946825,
        "ele": 699,
        "distanceKm": 30.132143846247484,
        "gradePct": 0.9904429565266215,
        "smoothedEle": 697.0399070132979,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.542929,
        "lng": 120.946757,
        "ele": 698,
        "distanceKm": 30.139044387703347,
        "gradePct": -0.31733995566730305,
        "smoothedEle": 696.2980988067928,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542882,
        "lng": 120.94667,
        "ele": 695.5,
        "distanceKm": 30.14927921377168,
        "gradePct": -2.294727480041014,
        "smoothedEle": 695.1601602892619,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542794,
        "lng": 120.946656,
        "ele": 693.25,
        "distanceKm": 30.159166315598792,
        "gradePct": -4.217955488406173,
        "smoothedEle": 694.0478613337118,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542688,
        "lng": 120.946674,
        "ele": 690.75,
        "distanceKm": 30.171092784454988,
        "gradePct": -7.044348871615412,
        "smoothedEle": 692.0267593628614,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542604,
        "lng": 120.946703,
        "ele": 689.25,
        "distanceKm": 30.180882941444253,
        "gradePct": -8.882402892754145,
        "smoothedEle": 690.1183251563415,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542076,
        "lng": 120.946982,
        "ele": 680.25,
        "distanceKm": 30.246024204969363,
        "gradePct": -17.487634492238136,
        "smoothedEle": 678.0344273932335,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541627,
        "lng": 120.946916,
        "ele": 665,
        "distanceKm": 30.296395145977414,
        "gradePct": -22.558103281319312,
        "smoothedEle": 664.6826618843891,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541225,
        "lng": 120.94677,
        "ele": 649.5,
        "distanceKm": 30.34347187031617,
        "gradePct": -26.309558475508165,
        "smoothedEle": 652.1983345727865,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541149,
        "lng": 120.946746,
        "ele": 647,
        "distanceKm": 30.352264464273357,
        "gradePct": -25.76466161041262,
        "smoothedEle": 650.6156676604927,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541095,
        "lng": 120.946752,
        "ele": 645.5,
        "distanceKm": 30.35829959151797,
        "gradePct": -25.033662767881864,
        "smoothedEle": 649.7469424920462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541018,
        "lng": 120.946837,
        "ele": 645.75,
        "distanceKm": 30.370433417304564,
        "gradePct": -23.195937152571457,
        "smoothedEle": 648.3683693171098,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540996,
        "lng": 120.946914,
        "ele": 647,
        "distanceKm": 30.378597122348438,
        "gradePct": -20.746263875860837,
        "smoothedEle": 648.6540989936453,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540842,
        "lng": 120.947401,
        "ele": 653,
        "distanceKm": 30.430748802834717,
        "gradePct": -4.868320824557303,
        "smoothedEle": 650.7040577386964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540653,
        "lng": 120.947593,
        "ele": 651.5,
        "distanceKm": 30.45936413497679,
        "gradePct": -0.023485462826442594,
        "smoothedEle": 649.6025099279761,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540375,
        "lng": 120.947711,
        "ele": 644.75,
        "distanceKm": 30.492500650930943,
        "gradePct": -2.4594453260267177,
        "smoothedEle": 646.7411683674137,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540296,
        "lng": 120.947775,
        "ele": 643.25,
        "distanceKm": 30.503412753561964,
        "gradePct": -3.4928241546491066,
        "smoothedEle": 646.1367183864675,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540253,
        "lng": 120.947836,
        "ele": 643,
        "distanceKm": 30.51121871362706,
        "gradePct": -4.197369509147106,
        "smoothedEle": 645.7390067897651,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540223,
        "lng": 120.947934,
        "ele": 643.75,
        "distanceKm": 30.52167773376433,
        "gradePct": -5.11799709132235,
        "smoothedEle": 645.2294984581134,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540193,
        "lng": 120.948117,
        "ele": 646,
        "distanceKm": 30.540486516489704,
        "gradePct": -4.9166757164454555,
        "smoothedEle": 645.4125285309542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540159,
        "lng": 120.948232,
        "ele": 646.5,
        "distanceKm": 30.552717817281405,
        "gradePct": -4.095525889699784,
        "smoothedEle": 645.7628341772981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540108,
        "lng": 120.948326,
        "ele": 646.25,
        "distanceKm": 30.56378873521466,
        "gradePct": -3.3209878849770105,
        "smoothedEle": 645.8994573574116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540062,
        "lng": 120.948385,
        "ele": 647.25,
        "distanceKm": 30.571648687202984,
        "gradePct": -2.8550005099927653,
        "smoothedEle": 645.6867370698483,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539893,
        "lng": 120.948498,
        "ele": 647.25,
        "distanceKm": 30.593643788218007,
        "gradePct": -2.9891616226831985,
        "smoothedEle": 643.6886853726038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539752,
        "lng": 120.948538,
        "ele": 644.5,
        "distanceKm": 30.609835948237702,
        "gradePct": -4.176465165271051,
        "smoothedEle": 641.6329931546428,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539724,
        "lng": 120.94854,
        "ele": 643.75,
        "distanceKm": 30.612955976030932,
        "gradePct": -4.458187258958042,
        "smoothedEle": 641.1961892635907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53968,
        "lng": 120.948458,
        "ele": 637.75,
        "distanceKm": 30.622585850002668,
        "gradePct": -5.438999904919037,
        "smoothedEle": 639.7993355196093,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539686,
        "lng": 120.948438,
        "ele": 636.75,
        "distanceKm": 30.624716048826304,
        "gradePct": -5.779258897999089,
        "smoothedEle": 639.4798056960639,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539807,
        "lng": 120.948232,
        "ele": 633.75,
        "distanceKm": 30.64951953902566,
        "gradePct": -10.850114204249126,
        "smoothedEle": 634.8211209722028,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539846,
        "lng": 120.948046,
        "ele": 632.25,
        "distanceKm": 30.668826972281526,
        "gradePct": -14.648894874602794,
        "smoothedEle": 631.1142085662367,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539831,
        "lng": 120.947925,
        "ele": 630,
        "distanceKm": 30.68117938569768,
        "gradePct": -15.206400954686172,
        "smoothedEle": 629.6145602185093,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539763,
        "lng": 120.947729,
        "ele": 625,
        "distanceKm": 30.702397968627803,
        "gradePct": -18.21875631378256,
        "smoothedEle": 624.3585331412193,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53933,
        "lng": 120.947263,
        "ele": 605.25,
        "distanceKm": 30.769777727371554,
        "gradePct": -23.750597416676673,
        "smoothedEle": 607.2481844510014,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539279,
        "lng": 120.947206,
        "ele": 603,
        "distanceKm": 30.777864893499476,
        "gradePct": -24.325552137613155,
        "smoothedEle": 605.6914049713764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539264,
        "lng": 120.947148,
        "ele": 602,
        "distanceKm": 30.783964174331604,
        "gradePct": -24.40745050277689,
        "smoothedEle": 604.5172934111919,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539277,
        "lng": 120.9471,
        "ele": 601.5,
        "distanceKm": 30.789030068282884,
        "gradePct": -23.546680700691134,
        "smoothedEle": 604.1231973315038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539317,
        "lng": 120.947061,
        "ele": 601.75,
        "distanceKm": 30.79497525767306,
        "gradePct": -22.044279763271703,
        "smoothedEle": 604.1529232784546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539608,
        "lng": 120.946935,
        "ele": 605.75,
        "distanceKm": 30.829752581474768,
        "gradePct": -11.32544451997735,
        "smoothedEle": 606.086685534857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539998,
        "lng": 120.94687,
        "ele": 611.5,
        "distanceKm": 30.873614242801025,
        "gradePct": 1.5833205798984185,
        "smoothedEle": 608.0929758107269,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540024,
        "lng": 120.946852,
        "ele": 611.75,
        "distanceKm": 30.877030865584004,
        "gradePct": 2.0989470778887083,
        "smoothedEle": 607.9509024229939,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540052,
        "lng": 120.946822,
        "ele": 612,
        "distanceKm": 30.881378510217715,
        "gradePct": 2.7184864381924467,
        "smoothedEle": 607.7335201913083,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540067,
        "lng": 120.946779,
        "ele": 611.5,
        "distanceKm": 30.88603684137039,
        "gradePct": 3.14455125167508,
        "smoothedEle": 607.5006036336746,
        "gradeBand": "hard"
      },
      {
        "lat": 24.540056,
        "lng": 120.946733,
        "ele": 609.75,
        "distanceKm": 30.890847867352758,
        "gradePct": 3.127766007702986,
        "smoothedEle": 607.2600523345561,
        "gradeBand": "hard"
      },
      {
        "lat": 24.539998,
        "lng": 120.946679,
        "ele": 606.25,
        "distanceKm": 30.899299421813918,
        "gradePct": 2.4441100197971872,
        "smoothedEle": 606.8374746114982,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.53994,
        "lng": 120.946675,
        "ele": 605.25,
        "distanceKm": 30.90576141562206,
        "gradePct": 1.5272116925557169,
        "smoothedEle": 606.2798897207517,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.539608,
        "lng": 120.946697,
        "ele": 600.75,
        "distanceKm": 30.942745192265146,
        "gradePct": -6.481601358163425,
        "smoothedEle": 600.1993833413558,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539245250461114,
        "lng": 120.94663864714019,
        "ele": 593.4980396645766,
        "distanceKm": 30.983510732050345,
        "gradePct": -14.494156815476025,
        "smoothedEle": 593.1327522842007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538886,
        "lng": 120.946554,
        "ele": 585,
        "distanceKm": 31.02436492291294,
        "gradePct": -17.640664128520005,
        "smoothedEle": 585.5806211167343,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538571,
        "lng": 120.946616,
        "ele": 579,
        "distanceKm": 31.059948388130227,
        "gradePct": -16.65061816959052,
        "smoothedEle": 580.5666229304735,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538374,
        "lng": 120.946964,
        "ele": 577.75,
        "distanceKm": 31.10140869004895,
        "gradePct": -9.499355887299522,
        "smoothedEle": 580.3248563528733,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538665,
        "lng": 120.947482,
        "ele": 589.25,
        "distanceKm": 31.162991590225204,
        "gradePct": 6.287021863514634,
        "smoothedEle": 586.8358990342759,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538704,
        "lng": 120.947563,
        "ele": 589,
        "distanceKm": 31.17226179040099,
        "gradePct": 7.360801004156438,
        "smoothedEle": 587.8556210536126,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538706,
        "lng": 120.947643,
        "ele": 588.75,
        "distanceKm": 31.180357009186682,
        "gradePct": 8.282664370565836,
        "smoothedEle": 588.7302789427301,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538684,
        "lng": 120.947696,
        "ele": 588.75,
        "distanceKm": 31.186249826351638,
        "gradePct": 7.689260643374158,
        "smoothedEle": 588.1025125560193,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538637,
        "lng": 120.947743,
        "ele": 588.75,
        "distanceKm": 31.19331486426227,
        "gradePct": 6.723690946554502,
        "smoothedEle": 587.0957446537543,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538562,
        "lng": 120.947798,
        "ele": 588.75,
        "distanceKm": 31.20333985796176,
        "gradePct": 5.138147995374352,
        "smoothedEle": 585.6671830515771,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538108,
        "lng": 120.947982,
        "ele": 575,
        "distanceKm": 31.25714410692348,
        "gradePct": -10.013932120591761,
        "smoothedEle": 576.2037236473333,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537835,
        "lng": 120.948229,
        "ele": 568.5,
        "distanceKm": 31.29645997656814,
        "gradePct": -13.802562416122813,
        "smoothedEle": 572.8450037340449,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537712,
        "lng": 120.948575,
        "ele": 575.75,
        "distanceKm": 31.334036310445683,
        "gradePct": -8.389344658886438,
        "smoothedEle": 571.8787363228415,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537687,
        "lng": 120.948629,
        "ele": 577,
        "distanceKm": 31.34016525294386,
        "gradePct": -7.280699609215969,
        "smoothedEle": 571.9093810353324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537585,
        "lng": 120.948664,
        "ele": 575,
        "distanceKm": 31.35204686665646,
        "gradePct": -6.17159201604218,
        "smoothedEle": 570.928669121759,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537482,
        "lng": 120.948598,
        "ele": 570,
        "distanceKm": 31.365303699573268,
        "gradePct": -5.9408409429788955,
        "smoothedEle": 569.5658159329754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537473,
        "lng": 120.948562,
        "ele": 569,
        "distanceKm": 31.36908021928728,
        "gradePct": -6.279107159432352,
        "smoothedEle": 568.9049249830232,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537562,
        "lng": 120.948112,
        "ele": 558.25,
        "distanceKm": 31.415662444590545,
        "gradePct": -10.86772606037353,
        "smoothedEle": 561.483490304068,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537794,
        "lng": 120.947646,
        "ele": 559.75,
        "distanceKm": 31.469397142494348,
        "gradePct": -8.916415326213029,
        "smoothedEle": 559.9380177607236,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53794,
        "lng": 120.947297,
        "ele": 561.5,
        "distanceKm": 31.50825342518634,
        "gradePct": -4.311166358012481,
        "smoothedEle": 558.3527216875859,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537803,
        "lng": 120.94671,
        "ele": 548,
        "distanceKm": 31.569553117246056,
        "gradePct": -11.903785508865043,
        "smoothedEle": 548.027868643601,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537768,
        "lng": 120.946548,
        "ele": 543,
        "distanceKm": 31.5863956804575,
        "gradePct": -15.048309511758603,
        "smoothedEle": 544.1961855129975,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537877,
        "lng": 120.946145,
        "ele": 538.75,
        "distanceKm": 31.628923908262628,
        "gradePct": -17.42581078354599,
        "smoothedEle": 537.4453322379848,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53786,
        "lng": 120.945669,
        "ele": 529,
        "distanceKm": 31.67710969449532,
        "gradePct": -12.009231310693679,
        "smoothedEle": 534.2995160086995,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538112,
        "lng": 120.945466,
        "ele": 537.5,
        "distanceKm": 31.711849151259013,
        "gradePct": -5.354167015404224,
        "smoothedEle": 534.8015809908107,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538207,
        "lng": 120.945125,
        "ele": 538,
        "distanceKm": 31.747923450244222,
        "gradePct": -1.3857170835907284,
        "smoothedEle": 534.819227227007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538217,
        "lng": 120.944984,
        "ele": 536.75,
        "distanceKm": 31.76222922440448,
        "gradePct": -2.9050111115988826,
        "smoothedEle": 532.3659786027514,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538189,
        "lng": 120.944889,
        "ele": 532.75,
        "distanceKm": 31.77233050167327,
        "gradePct": -4.08903082253397,
        "smoothedEle": 530.5224955011968,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538114,
        "lng": 120.944798,
        "ele": 527.5,
        "distanceKm": 31.7847514194301,
        "gradePct": -6.178604077641038,
        "smoothedEle": 528.2313524171827,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538075,
        "lng": 120.944777,
        "ele": 525.25,
        "distanceKm": 31.789580333335184,
        "gradePct": -7.373537171118196,
        "smoothedEle": 527.1062082265621,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537882,
        "lng": 120.944822,
        "ele": 519.25,
        "distanceKm": 31.81151840581963,
        "gradePct": -13.58819162841079,
        "smoothedEle": 521.2086093307419,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537518,
        "lng": 120.945128,
        "ele": 510.75,
        "distanceKm": 31.862472311829148,
        "gradePct": -18.56052203190435,
        "smoothedEle": 513.7610931158449,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537487,
        "lng": 120.945174,
        "ele": 510.5,
        "distanceKm": 31.868263072094035,
        "gradePct": -17.749815594820095,
        "smoothedEle": 513.5149858045872,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53748,
        "lng": 120.945222,
        "ele": 511,
        "distanceKm": 31.87318041196153,
        "gradePct": -17.037430003840413,
        "smoothedEle": 513.3282923734131,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537527,
        "lng": 120.945511,
        "ele": 514.25,
        "distanceKm": 31.90287711240507,
        "gradePct": -9.421821650139671,
        "smoothedEle": 514.1098214173315,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537529,
        "lng": 120.945592,
        "ele": 515,
        "distanceKm": 31.911073522340867,
        "gradePct": -6.378253654319247,
        "smoothedEle": 514.949953435751,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537477,
        "lng": 120.945732,
        "ele": 515.5,
        "distanceKm": 31.926369896304397,
        "gradePct": -2.491537462194252,
        "smoothedEle": 516.546350821568,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537429,
        "lng": 120.945783,
        "ele": 516.75,
        "distanceKm": 31.933792882829376,
        "gradePct": -0.6271665727692746,
        "smoothedEle": 517.325764406691,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537357,
        "lng": 120.945809,
        "ele": 518.25,
        "distanceKm": 31.94221983762112,
        "gradePct": 1.3531528733869698,
        "smoothedEle": 518.0743847080948,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.53719,
        "lng": 120.945797,
        "ele": 521,
        "distanceKm": 31.960829046242193,
        "gradePct": 5.051836022917242,
        "smoothedEle": 519.0531118462852,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537072,
        "lng": 120.945656,
        "ele": 521.5,
        "distanceKm": 31.980209020334033,
        "gradePct": 6.256014378805413,
        "smoothedEle": 519.7692788703124,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53697,
        "lng": 120.94534,
        "ele": 519,
        "distanceKm": 32.014126070524895,
        "gradePct": 4.007855252588058,
        "smoothedEle": 519.276386146806,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536896,
        "lng": 120.944729,
        "ele": 516.25,
        "distanceKm": 32.076476186016365,
        "gradePct": -3.5189696310276943,
        "smoothedEle": 516.1123661836436,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53698,
        "lng": 120.944401,
        "ele": 514.25,
        "distanceKm": 32.1109442131815,
        "gradePct": -7.069651852018081,
        "smoothedEle": 512.2529739979157,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537202,
        "lng": 120.944039,
        "ele": 504.75,
        "distanceKm": 32.15510535569869,
        "gradePct": -13.712478567153344,
        "smoothedEle": 503.48437211538,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53744,
        "lng": 120.943762,
        "ele": 492,
        "distanceKm": 32.19364694605079,
        "gradePct": -19.57274207541088,
        "smoothedEle": 494.6170105283376,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537478,
        "lng": 120.943419,
        "ele": 488,
        "distanceKm": 32.22859879171503,
        "gradePct": -22.112143462056704,
        "smoothedEle": 486.6353512447775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537541,
        "lng": 120.943022,
        "ele": 479,
        "distanceKm": 32.2693629730053,
        "gradePct": -20.414431636680312,
        "smoothedEle": 479.78965425095424,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537502,
        "lng": 120.942585,
        "ele": 472.25,
        "distanceKm": 32.31377904438357,
        "gradePct": -15.30124055563665,
        "smoothedEle": 474.71837185246955,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537474,
        "lng": 120.942118,
        "ele": 474.5,
        "distanceKm": 32.36111999891811,
        "gradePct": -7.590517882706087,
        "smoothedEle": 473.5834129842069,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537512,
        "lng": 120.941644,
        "ele": 473.25,
        "distanceKm": 32.409252358229026,
        "gradePct": -3.7883031573101134,
        "smoothedEle": 471.44691098009537,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537825,
        "lng": 120.941025,
        "ele": 458.25,
        "distanceKm": 32.4808888679062,
        "gradePct": -15.055456540166018,
        "smoothedEle": 457.6504547213588,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538027,
        "lng": 120.940726,
        "ele": 449.5,
        "distanceKm": 32.518561849555276,
        "gradePct": -21.561737722827022,
        "smoothedEle": 448.0922608100749,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538297,
        "lng": 120.940466,
        "ele": 436.25,
        "distanceKm": 32.558474656351656,
        "gradePct": -24.11180666486126,
        "smoothedEle": 437.8553950711121,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538358,
        "lng": 120.940448,
        "ele": 434,
        "distanceKm": 32.5654976780197,
        "gradePct": -24.076061360996448,
        "smoothedEle": 436.53857850835317,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538407,
        "lng": 120.940444,
        "ele": 432.25,
        "distanceKm": 32.57096123940825,
        "gradePct": -24.048253293294465,
        "smoothedEle": 435.5141607480009,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538458,
        "lng": 120.940451,
        "ele": 430.5,
        "distanceKm": 32.576676221546286,
        "gradePct": -23.97869053717602,
        "smoothedEle": 434.4830766210954,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538499,
        "lng": 120.940481,
        "ele": 429.75,
        "distanceKm": 32.582152813640754,
        "gradePct": -23.558653302868613,
        "smoothedEle": 433.7711196488146,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538532,
        "lng": 120.940602,
        "ele": 430.75,
        "distanceKm": 32.594930453111736,
        "gradePct": -21.128253362716052,
        "smoothedEle": 432.959643038558,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538375,
        "lng": 120.941191,
        "ele": 436.5,
        "distanceKm": 32.657014163059905,
        "gradePct": -4.77101284764608,
        "smoothedEle": 433.45897060600186,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538455,
        "lng": 120.941639,
        "ele": 429.25,
        "distanceKm": 32.703195237404515,
        "gradePct": -0.8893396467271245,
        "smoothedEle": 432.13677549280237,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53846,
        "lng": 120.941734,
        "ele": 429.5,
        "distanceKm": 32.71282077060706,
        "gradePct": -0.0763941732483875,
        "smoothedEle": 433.0271373140379,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538119,
        "lng": 120.942323,
        "ele": 445.75,
        "distanceKm": 32.78344205676445,
        "gradePct": 8.983943722317562,
        "smoothedEle": 441.686266017205,
        "gradeBand": "steep"
      },
      {
        "lat": 24.53811,
        "lng": 120.942364,
        "ele": 446.25,
        "distanceKm": 32.7877083457755,
        "gradePct": 9.468725002294072,
        "smoothedEle": 442.04890058314425,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538126,
        "lng": 120.94247,
        "ele": 446,
        "distanceKm": 32.79857711445646,
        "gradePct": 10.560993362454802,
        "smoothedEle": 442.829988810742,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.53819,
        "lng": 120.942497,
        "ele": 443.5,
        "distanceKm": 32.806199670535456,
        "gradePct": 9.195694280687674,
        "smoothedEle": 441.6103798381021,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538227,
        "lng": 120.942488,
        "ele": 442,
        "distanceKm": 32.81041340601121,
        "gradePct": 8.131726073060348,
        "smoothedEle": 440.93618216198183,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538276,
        "lng": 120.942454,
        "ele": 440,
        "distanceKm": 32.816856601384636,
        "gradePct": 6.383285929242414,
        "smoothedEle": 439.9052709022332,
        "gradeBand": "steep"
      },
      {
        "lat": 24.538318,
        "lng": 120.942408,
        "ele": 438,
        "distanceKm": 32.82344911229177,
        "gradePct": 4.520152822156312,
        "smoothedEle": 438.8504691570919,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538512,
        "lng": 120.941978,
        "ele": 429.75,
        "distanceKm": 32.87200012910491,
        "gradePct": -10.825788316284347,
        "smoothedEle": 429.4575419912044,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538675,
        "lng": 120.941675,
        "ele": 422.25,
        "distanceKm": 32.90760736736481,
        "gradePct": -16.08170316279171,
        "smoothedEle": 425.3034451826136,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538716,
        "lng": 120.941262,
        "ele": 424.5,
        "distanceKm": 32.9496311902721,
        "gradePct": -11.297956939832385,
        "smoothedEle": 422.48719396723544,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538753,
        "lng": 120.941166,
        "ele": 424,
        "distanceKm": 32.96017739448434,
        "gradePct": -10.405305045167006,
        "smoothedEle": 421.3395234434561,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538784,
        "lng": 120.941123,
        "ele": 423.25,
        "distanceKm": 32.965727223033035,
        "gradePct": -9.969837211053829,
        "smoothedEle": 420.70129316035616,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538866,
        "lng": 120.941045,
        "ele": 421,
        "distanceKm": 32.97778490207325,
        "gradePct": -9.599376363618182,
        "smoothedEle": 419.1832886053693,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538913,
        "lng": 120.941013,
        "ele": 419.75,
        "distanceKm": 32.98393226791495,
        "gradePct": -9.899792296379333,
        "smoothedEle": 418.16569397321433,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539186,
        "lng": 120.940889,
        "ele": 410.75,
        "distanceKm": 33.01677773397655,
        "gradePct": -12.306584833728888,
        "smoothedEle": 412.38230283533477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539219,
        "lng": 120.940854,
        "ele": 409.75,
        "distanceKm": 33.02187661128047,
        "gradePct": -12.78248863896248,
        "smoothedEle": 411.56469476783275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539242,
        "lng": 120.940805,
        "ele": 408.25,
        "distanceKm": 33.02745397007745,
        "gradePct": -13.175605492523953,
        "smoothedEle": 410.79780793324744,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539245,
        "lng": 120.940751,
        "ele": 407.25,
        "distanceKm": 33.03292633382327,
        "gradePct": -13.535474971309474,
        "smoothedEle": 410.0712047785622,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539212,
        "lng": 120.940629,
        "ele": 406.5,
        "distanceKm": 33.04580083029521,
        "gradePct": -14.281995074975237,
        "smoothedEle": 408.4618927195699,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539022,
        "lng": 120.940257,
        "ele": 407.25,
        "distanceKm": 33.08895464972173,
        "gradePct": -11.59928294264717,
        "smoothedEle": 405.68207593305675,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538946,
        "lng": 120.93991,
        "ele": 403,
        "distanceKm": 33.125057337612354,
        "gradePct": -5.776621983815492,
        "smoothedEle": 405.3507229133831,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538645,
        "lng": 120.939639,
        "ele": 406.5,
        "distanceKm": 33.168319907266124,
        "gradePct": -2.5661842625277904,
        "smoothedEle": 404.445108973325,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538459,
        "lng": 120.939087,
        "ele": 401.25,
        "distanceKm": 33.227863297909316,
        "gradePct": -3.4973486180375697,
        "smoothedEle": 401.79463722123006,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538448,
        "lng": 120.93861,
        "ele": 399.25,
        "distanceKm": 33.276128420470684,
        "gradePct": -5.85187330083639,
        "smoothedEle": 398.2456531204877,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538514,
        "lng": 120.93823,
        "ele": 394.25,
        "distanceKm": 33.31526059431473,
        "gradePct": -6.8753050871015535,
        "smoothedEle": 395.4803198359818,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538507,
        "lng": 120.937974,
        "ele": 395.25,
        "distanceKm": 33.341167253224526,
        "gradePct": -9.453131675871568,
        "smoothedEle": 391.36325202842943,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538535,
        "lng": 120.937896,
        "ele": 394,
        "distanceKm": 33.349649217086785,
        "gradePct": -11.049068365749191,
        "smoothedEle": 389.1436278123893,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538625,
        "lng": 120.937802,
        "ele": 389.25,
        "distanceKm": 33.363453528010886,
        "gradePct": -13.559964068246963,
        "smoothedEle": 385.61768693044445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538964,
        "lng": 120.937706,
        "ele": 370.75,
        "distanceKm": 33.40237933609684,
        "gradePct": -23.27452248760353,
        "smoothedEle": 373.1160706247413,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53902,
        "lng": 120.93769,
        "ele": 367.75,
        "distanceKm": 33.408813145315065,
        "gradePct": -24.83559062276355,
        "smoothedEle": 371.1003477891239,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539062,
        "lng": 120.937668,
        "ele": 365.5,
        "distanceKm": 33.41398642665043,
        "gradePct": -25.93146497776948,
        "smoothedEle": 369.63889581188266,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539094,
        "lng": 120.937627,
        "ele": 363.75,
        "distanceKm": 33.41945090613025,
        "gradePct": -26.719218103830105,
        "smoothedEle": 368.0951803588336,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539114,
        "lng": 120.937569,
        "ele": 362.75,
        "distanceKm": 33.425725065762634,
        "gradePct": -27.494583213764322,
        "smoothedEle": 366.32273026268524,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539118,
        "lng": 120.937482,
        "ele": 362.25,
        "distanceKm": 33.43453649761899,
        "gradePct": -27.75037820855511,
        "smoothedEle": 364.6666287845086,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539097,
        "lng": 120.937325,
        "ele": 361,
        "distanceKm": 33.450588074401125,
        "gradePct": -24.638482534256344,
        "smoothedEle": 364.26533936495525,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538838,
        "lng": 120.936883,
        "ele": 368.25,
        "distanceKm": 33.503769999686654,
        "gradePct": -5.980678901502387,
        "smoothedEle": 366.69969457096687,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538692,
        "lng": 120.936508,
        "ele": 368.75,
        "distanceKm": 33.545030087940106,
        "gradePct": 2.0928549723173817,
        "smoothedEle": 366.4971439987982,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538629,
        "lng": 120.93594,
        "ele": 358.75,
        "distanceKm": 33.60290996350339,
        "gradePct": -5.008119581543369,
        "smoothedEle": 361.6522076000549,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538496,
        "lng": 120.935764,
        "ele": 361.75,
        "distanceKm": 33.626054117954865,
        "gradePct": -8.380845025017658,
        "smoothedEle": 358.20945421752,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538459,
        "lng": 120.935651,
        "ele": 361.25,
        "distanceKm": 33.63820221653025,
        "gradePct": -9.809350671659192,
        "smoothedEle": 356.7213121420349,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538466,
        "lng": 120.935527,
        "ele": 358.25,
        "distanceKm": 33.65076922222957,
        "gradePct": -11.24422026344855,
        "smoothedEle": 354.7725194437768,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538577,
        "lng": 120.935259,
        "ele": 346.5,
        "distanceKm": 33.68055558579179,
        "gradePct": -14.1478568506877,
        "smoothedEle": 349.37556310413095,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538568,
        "lng": 120.93505,
        "ele": 342.25,
        "distanceKm": 33.701720058663035,
        "gradePct": -16.18833013978553,
        "smoothedEle": 345.5634805298333,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538436,
        "lng": 120.93462,
        "ele": 342.25,
        "distanceKm": 33.74762529204743,
        "gradePct": -14.274445199455013,
        "smoothedEle": 340.98561028348496,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538384,
        "lng": 120.934089,
        "ele": 336.75,
        "distanceKm": 33.801647484174154,
        "gradePct": -8.337716944447546,
        "smoothedEle": 337.23883548876313,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538302,
        "lng": 120.933845,
        "ele": 336,
        "distanceKm": 33.827959040661185,
        "gradePct": -8.971324888818444,
        "smoothedEle": 333.9754898247677,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538302,
        "lng": 120.933786,
        "ele": 335,
        "distanceKm": 33.83392703039348,
        "gradePct": -9.24152941402313,
        "smoothedEle": 333.1101313135844,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538325,
        "lng": 120.933547,
        "ele": 329.75,
        "distanceKm": 33.85823734450302,
        "gradePct": -10.955088605056474,
        "smoothedEle": 329.2945098822468,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538264,
        "lng": 120.933205,
        "ele": 322.25,
        "distanceKm": 33.893490150328994,
        "gradePct": -15.069781452724795,
        "smoothedEle": 322.73481583947415,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538207,
        "lng": 120.933071,
        "ele": 318.25,
        "distanceKm": 33.908453244404285,
        "gradePct": -15.631840937678595,
        "smoothedEle": 320.76289594566225,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538181,
        "lng": 120.933046,
        "ele": 317.5,
        "distanceKm": 33.91229423188417,
        "gradePct": -15.616372952993407,
        "smoothedEle": 320.30197744807623,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538092,
        "lng": 120.933017,
        "ele": 317,
        "distanceKm": 33.922616196400796,
        "gradePct": -15.574805520165006,
        "smoothedEle": 319.06334170608085,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537621,
        "lng": 120.932983,
        "ele": 317.75,
        "distanceKm": 33.975101879194845,
        "gradePct": -7.940529991488973,
        "smoothedEle": 318.21589810804204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537302,
        "lng": 120.933012,
        "ele": 319.75,
        "distanceKm": 34.01069419943841,
        "gradePct": -0.6549790816332481,
        "smoothedEle": 319.8390022599339,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53695,
        "lng": 120.933138,
        "ele": 322.25,
        "distanceKm": 34.05185771528838,
        "gradePct": 2.9995556596861235,
        "smoothedEle": 321.5907583621563,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.53681,
        "lng": 120.933163,
        "ele": 322,
        "distanceKm": 34.06762908808665,
        "gradePct": 3.785013632999781,
        "smoothedEle": 322.1215688164004,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536693,
        "lng": 120.933099,
        "ele": 322.25,
        "distanceKm": 34.08216064084337,
        "gradePct": 3.8522864338237373,
        "smoothedEle": 322.3900827845353,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536653,
        "lng": 120.933022,
        "ele": 323,
        "distanceKm": 34.091129970806634,
        "gradePct": 3.2678122381747237,
        "smoothedEle": 322.214633811278,
        "gradeBand": "hard"
      },
      {
        "lat": 24.536632,
        "lng": 120.932927,
        "ele": 323,
        "distanceKm": 34.10101921385743,
        "gradePct": 2.27292817267536,
        "smoothedEle": 321.6707254434844,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536629,
        "lng": 120.932883,
        "ele": 323.25,
        "distanceKm": 34.10548246095838,
        "gradePct": 1.8239136830611382,
        "smoothedEle": 321.42524685293205,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536635,
        "lng": 120.932848,
        "ele": 323.25,
        "distanceKm": 34.10908515536566,
        "gradePct": 1.4614730755988963,
        "smoothedEle": 321.2270986605314,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.53671,
        "lng": 120.932728,
        "ele": 321.75,
        "distanceKm": 34.12381238235476,
        "gradePct": 0.05501349073136829,
        "smoothedEle": 320.4522736277993,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536917,
        "lng": 120.932547,
        "ele": 316.75,
        "distanceKm": 34.15322346632087,
        "gradePct": -4.644849127589272,
        "smoothedEle": 316.991875742062,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537357,
        "lng": 120.932158,
        "ele": 307.5,
        "distanceKm": 34.21600923347422,
        "gradePct": -13.63447833921092,
        "smoothedEle": 307.2283325262674,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537721,
        "lng": 120.931963,
        "ele": 300.25,
        "distanceKm": 34.261034730222086,
        "gradePct": -14.78112855893808,
        "smoothedEle": 300.99605130335146,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537828,
        "lng": 120.931836,
        "ele": 298,
        "distanceKm": 34.27854442786083,
        "gradePct": -13.015330976238076,
        "smoothedEle": 300.0389915038391,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53785,
        "lng": 120.931776,
        "ele": 297.25,
        "distanceKm": 34.28508805842884,
        "gradePct": -12.17770911652502,
        "smoothedEle": 299.8590416632188,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537854,
        "lng": 120.931657,
        "ele": 296.75,
        "distanceKm": 34.29713344805746,
        "gradePct": -10.01149956438789,
        "smoothedEle": 300.15212474860675,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537884,
        "lng": 120.931266,
        "ele": 304.75,
        "distanceKm": 34.33682459024787,
        "gradePct": -4.270690944737677,
        "smoothedEle": 300.0764483346195,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538261643900476,
        "lng": 120.93111353819857,
        "ele": 296.489410614113,
        "distanceKm": 34.38155908650856,
        "gradePct": -3.5951786519258975,
        "smoothedEle": 296.36090973910063,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538643,
        "lng": 120.93097,
        "ele": 287.75,
        "distanceKm": 34.426380787892136,
        "gradePct": -11.279645167989836,
        "smoothedEle": 288.816715657605,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538844,
        "lng": 120.93057,
        "ele": 282.75,
        "distanceKm": 34.47260425247693,
        "gradePct": -14.101135299988727,
        "smoothedEle": 283.0035412017262,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538924,
        "lng": 120.930436,
        "ele": 280.25,
        "distanceKm": 34.488816974007854,
        "gradePct": -13.108515731979578,
        "smoothedEle": 282.0307779098705,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538948,
        "lng": 120.930277,
        "ele": 279.75,
        "distanceKm": 34.505120023613806,
        "gradePct": -11.061265043979246,
        "smoothedEle": 281.333970104977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538927,
        "lng": 120.930016,
        "ele": 281.75,
        "distanceKm": 34.53162372478609,
        "gradePct": -9.517746010862005,
        "smoothedEle": 278.639605250338,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539094,
        "lng": 120.929461,
        "ele": 269.75,
        "distanceKm": 34.59075446426094,
        "gradePct": -9.505486646347869,
        "smoothedEle": 272.44248109224253,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53905,
        "lng": 120.929193,
        "ele": 269.5,
        "distanceKm": 34.618301102447376,
        "gradePct": -8.67627844348282,
        "smoothedEle": 271.31770388678524,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538959,
        "lng": 120.929077,
        "ele": 271.75,
        "distanceKm": 34.63379518936332,
        "gradePct": -5.738591093904834,
        "smoothedEle": 272.6734364919304,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538611,
        "lng": 120.928831,
        "ele": 278.5,
        "distanceKm": 34.67980121812928,
        "gradePct": 5.492138070930345,
        "smoothedEle": 279.08256060302193,
        "gradeBand": "hard"
      },
      {
        "lat": 24.538157,
        "lng": 120.928788,
        "ele": 288.25,
        "distanceKm": 34.73047081541807,
        "gradePct": 12.631855447198282,
        "smoothedEle": 285.0144092189197,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538088,
        "lng": 120.928766,
        "ele": 288.75,
        "distanceKm": 34.7384594859479,
        "gradePct": 11.874738294358965,
        "smoothedEle": 285.19796040142234,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.538025,
        "lng": 120.928721,
        "ele": 288.5,
        "distanceKm": 34.746813740437986,
        "gradePct": 10.909921769836687,
        "smoothedEle": 285.39697947233896,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537991,
        "lng": 120.928661,
        "ele": 287.5,
        "distanceKm": 34.753964114009776,
        "gradePct": 10.165498844287383,
        "smoothedEle": 285.64867885709384,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.537953,
        "lng": 120.928564,
        "ele": 285.5,
        "distanceKm": 34.764647074421816,
        "gradePct": 8.188412255379204,
        "smoothedEle": 285.15984111276555,
        "gradeBand": "steep"
      },
      {
        "lat": 24.537931,
        "lng": 120.928445,
        "ele": 283,
        "distanceKm": 34.77693030353161,
        "gradePct": 5.740235388637846,
        "smoothedEle": 284.422847366178,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537931,
        "lng": 120.928333,
        "ele": 280,
        "distanceKm": 34.78825940227488,
        "gradePct": 3.651376829883366,
        "smoothedEle": 283.7241301836221,
        "gradeBand": "hard"
      },
      {
        "lat": 24.537951,
        "lng": 120.92825,
        "ele": 281.75,
        "distanceKm": 34.79694462105077,
        "gradePct": 2.0808361185405877,
        "smoothedEle": 283.17036098283387,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.538012,
        "lng": 120.928175,
        "ele": 282.75,
        "distanceKm": 34.80712115823443,
        "gradePct": -0.42595084129538313,
        "smoothedEle": 281.85493296874733,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538084,
        "lng": 120.928138,
        "ele": 282.25,
        "distanceKm": 34.81595881415068,
        "gradePct": -2.918281710336275,
        "smoothedEle": 280.3972193025196,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538719,
        "lng": 120.928144,
        "ele": 269.5,
        "distanceKm": 34.886570298393266,
        "gradePct": -14.183905934406507,
        "smoothedEle": 269.64439898826146,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539058,
        "lng": 120.928016,
        "ele": 263.75,
        "distanceKm": 34.92642703260986,
        "gradePct": -13.999236611642885,
        "smoothedEle": 264.8038670408614,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539288,
        "lng": 120.927464,
        "ele": 260.25,
        "distanceKm": 34.98784121258635,
        "gradePct": -9.229496554105463,
        "smoothedEle": 260.2605520872207,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539315,
        "lng": 120.927383,
        "ele": 258.5,
        "distanceKm": 34.996567230536705,
        "gradePct": -8.496962327380167,
        "smoothedEle": 259.93332641408244,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539316,
        "lng": 120.92731,
        "ele": 257.75,
        "distanceKm": 35.003952130977055,
        "gradePct": -7.885272725236236,
        "smoothedEle": 259.64813253561744,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539223,
        "lng": 120.927023,
        "ele": 260,
        "distanceKm": 35.034769488109895,
        "gradePct": -6.1908116206951975,
        "smoothedEle": 257.99589497223866,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539265,
        "lng": 120.92665,
        "ele": 255.25,
        "distanceKm": 35.07278697965676,
        "gradePct": -5.222653045683711,
        "smoothedEle": 256.1515851904163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53933,
        "lng": 120.926076,
        "ele": 252.5,
        "distanceKm": 35.131296115268,
        "gradePct": -4.3393441071710255,
        "smoothedEle": 253.84277180076504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539346,
        "lng": 120.925643,
        "ele": 255.25,
        "distanceKm": 35.17513084869202,
        "gradePct": -2.0823413352568125,
        "smoothedEle": 253.9767530645221,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539419,
        "lng": 120.92551,
        "ele": 255.5,
        "distanceKm": 35.1908431630169,
        "gradePct": -1.6112613653921866,
        "smoothedEle": 253.8278135909834,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539616,
        "lng": 120.925402,
        "ele": 252.75,
        "distanceKm": 35.2153215069379,
        "gradePct": -2.508195148347418,
        "smoothedEle": 251.96494640957897,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54001,
        "lng": 120.92529,
        "ele": 246.25,
        "distanceKm": 35.26057342650048,
        "gradePct": -7.727082188949855,
        "smoothedEle": 246.20517598145696,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540417,
        "lng": 120.92505,
        "ele": 238.75,
        "distanceKm": 35.31192978296023,
        "gradePct": -14.280500054248076,
        "smoothedEle": 237.9425655854052,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540727,
        "lng": 120.92489,
        "ele": 230.25,
        "distanceKm": 35.35001046419896,
        "gradePct": -16.809895890188432,
        "smoothedEle": 230.7397587009221,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541025,
        "lng": 120.924649,
        "ele": 223,
        "distanceKm": 35.391147458044756,
        "gradePct": -16.29762067383427,
        "smoothedEle": 224.9885671180116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541089,
        "lng": 120.924506,
        "ele": 222,
        "distanceKm": 35.407267795684824,
        "gradePct": -14.75187721676598,
        "smoothedEle": 223.94074517140717,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541091,
        "lng": 120.924356,
        "ele": 223,
        "distanceKm": 35.422441943600006,
        "gradePct": -12.91598378834739,
        "smoothedEle": 223.03824911591934,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541056,
        "lng": 120.924018,
        "ele": 223.75,
        "distanceKm": 35.45685148643669,
        "gradePct": -6.801454815204511,
        "smoothedEle": 222.9818890912963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.541001,
        "lng": 120.923785,
        "ele": 222.25,
        "distanceKm": 35.48120004467439,
        "gradePct": -3.195607789596136,
        "smoothedEle": 223.183665714542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540837,
        "lng": 120.923534,
        "ele": 223.5,
        "distanceKm": 35.51245925604969,
        "gradePct": -0.8840579774922774,
        "smoothedEle": 222.74792043299368,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540672,
        "lng": 120.92314,
        "ele": 222,
        "distanceKm": 35.55633295195773,
        "gradePct": -1.7014492790588678,
        "smoothedEle": 221.28128912942074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540579,
        "lng": 120.922766,
        "ele": 218.25,
        "distanceKm": 35.59555118389005,
        "gradePct": -3.593956412814128,
        "smoothedEle": 219.3896581512689,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540352,
        "lng": 120.92243,
        "ele": 218.25,
        "distanceKm": 35.637885709118905,
        "gradePct": -4.765299966815679,
        "smoothedEle": 217.1326525927555,
        "gradeBand": "descent"
      },
      {
        "lat": 24.540043,
        "lng": 120.921849,
        "ele": 211.25,
        "distanceKm": 35.70596149748335,
        "gradePct": -7.068723081646808,
        "smoothedEle": 211.7659238696871,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539833,
        "lng": 120.921451,
        "ele": 209,
        "distanceKm": 35.75250162747829,
        "gradePct": -6.001458517544933,
        "smoothedEle": 209.9789537448688,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539701,
        "lng": 120.921317,
        "ele": 210.5,
        "distanceKm": 35.77248047386539,
        "gradePct": -5.275534779985389,
        "smoothedEle": 209.1298527734168,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53968,
        "lng": 120.921281,
        "ele": 210.5,
        "distanceKm": 35.77680630303571,
        "gradePct": -5.118357432579087,
        "smoothedEle": 208.9460050336782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539718,
        "lng": 120.920901,
        "ele": 207,
        "distanceKm": 35.81547532650458,
        "gradePct": -4.7091175405571635,
        "smoothedEle": 206.69151022369533,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539848,
        "lng": 120.92032,
        "ele": 200,
        "distanceKm": 35.87599584463031,
        "gradePct": -8.36236769468382,
        "smoothedEle": 200.61808182122394,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539735,
        "lng": 120.919956,
        "ele": 197.5,
        "distanceKm": 35.91489984108027,
        "gradePct": -8.935341852964557,
        "smoothedEle": 197.78972052141737,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539619,
        "lng": 120.919754,
        "ele": 196.25,
        "distanceKm": 35.93906311740697,
        "gradePct": -7.801793917606547,
        "smoothedEle": 196.5226057185607,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539174,
        "lng": 120.919441,
        "ele": 194.5,
        "distanceKm": 35.99780689562348,
        "gradePct": -4.6235811840828855,
        "smoothedEle": 194.4088143795216,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538862,
        "lng": 120.91925,
        "ele": 193,
        "distanceKm": 36.03751655414561,
        "gradePct": -2.7028071352898064,
        "smoothedEle": 193.9008998865678,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538530333333334,
        "lng": 120.91902533333334,
        "ele": 194.58333333333326,
        "distanceKm": 36.08083583934766,
        "gradePct": -0.43615484878761723,
        "smoothedEle": 194.58333308390516,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538198666666666,
        "lng": 120.91880066666667,
        "ele": 196.16666666666674,
        "distanceKm": 36.12415515605642,
        "gradePct": 2.0948648410543727,
        "smoothedEle": 196.16666641724123,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.537867,
        "lng": 120.918576,
        "ele": 197.75,
        "distanceKm": 36.16747450427155,
        "gradePct": 2.889318168878491,
        "smoothedEle": 197.26216258534254,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.537501982647992,
        "lng": 120.91845627998558,
        "ele": 197.61428514221123,
        "distanceKm": 36.20983072279522,
        "gradePct": 1.7093296960137578,
        "smoothedEle": 197.35243400778393,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.537115491323995,
        "lng": 120.9184296399928,
        "ele": 196.55714257110563,
        "distanceKm": 36.2528910571946,
        "gradePct": -0.3362215173157731,
        "smoothedEle": 196.5571425738489,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536729,
        "lng": 120.918403,
        "ele": 195.5,
        "distanceKm": 36.29595139211298,
        "gradePct": -0.5063656990357898,
        "smoothedEle": 196.81648807314423,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536712,
        "lng": 120.918173,
        "ele": 198,
        "distanceKm": 36.31929339808152,
        "gradePct": 0.4132769177536145,
        "smoothedEle": 197.59094255222433,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536293,
        "lng": 120.91824799999999,
        "ele": 199.87499999999986,
        "distanceKm": 36.36649776715354,
        "gradePct": 3.23590635359194,
        "smoothedEle": 199.87499996183845,
        "gradeBand": "hard"
      },
      {
        "lat": 24.535874,
        "lng": 120.918323,
        "ele": 201.75,
        "distanceKm": 36.413702140296124,
        "gradePct": 4.225107205455143,
        "smoothedEle": 201.6305397958781,
        "gradeBand": "hard"
      },
      {
        "lat": 24.535518,
        "lng": 120.918374,
        "ele": 203,
        "distanceKm": 36.453622332669504,
        "gradePct": 3.7479981113384078,
        "smoothedEle": 202.99999998818188,
        "gradeBand": "hard"
      },
      {
        "lat": 24.535162,
        "lng": 120.918425,
        "ele": 204.25,
        "distanceKm": 36.493542526933766,
        "gradePct": 3.15160928074131,
        "smoothedEle": 204.0324091279592,
        "gradeBand": "hard"
      },
      {
        "lat": 24.534831,
        "lng": 120.91841,
        "ele": 204.75,
        "distanceKm": 36.530379361410716,
        "gradePct": 2.46465629341963,
        "smoothedEle": 204.6673073211542,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.534489,
        "lng": 120.918293,
        "ele": 205,
        "distanceKm": 36.57020717344124,
        "gradePct": 2.3271968775052256,
        "smoothedEle": 205.75611114103222,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.534157,
        "lng": 120.918153,
        "ele": 207.75,
        "distanceKm": 36.60974707336895,
        "gradePct": 3.174351782606135,
        "smoothedEle": 207.4860530212835,
        "gradeBand": "hard"
      },
      {
        "lat": 24.53375266666667,
        "lng": 120.91799766666666,
        "ele": 209.91666666666654,
        "distanceKm": 36.657373590543344,
        "gradePct": 4.51139696444266,
        "smoothedEle": 209.91666648577353,
        "gradeBand": "hard"
      },
      {
        "lat": 24.533348333333333,
        "lng": 120.91784233333334,
        "ele": 212.08333333333346,
        "distanceKm": 36.70500012441556,
        "gradePct": 4.8049677027716085,
        "smoothedEle": 212.08333315244025,
        "gradeBand": "hard"
      },
      {
        "lat": 24.532944,
        "lng": 120.917687,
        "ele": 214.25,
        "distanceKm": 36.7526266749856,
        "gradePct": 4.707596946435235,
        "smoothedEle": 214.38200517874037,
        "gradeBand": "hard"
      },
      {
        "lat": 24.532519,
        "lng": 120.917554,
        "ele": 217,
        "distanceKm": 36.801762368496014,
        "gradePct": 4.839417158978209,
        "smoothedEle": 216.7754555734787,
        "gradeBand": "hard"
      },
      {
        "lat": 24.532110499999998,
        "lng": 120.9175015,
        "ele": 218.75000000000014,
        "distanceKm": 36.84749496418623,
        "gradePct": 4.615674300126747,
        "smoothedEle": 218.7499999824438,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531702,
        "lng": 120.917449,
        "ele": 220.5,
        "distanceKm": 36.89322756188287,
        "gradePct": 3.7975411558292675,
        "smoothedEle": 220.15725748156694,
        "gradeBand": "hard"
      },
      {
        "lat": 24.531279,
        "lng": 120.917415,
        "ele": 220.99999999999997,
        "distanceKm": 36.9403886611943,
        "gradePct": 2.5568207989418203,
        "smoothedEle": 220.99999999788614,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.530856,
        "lng": 120.917381,
        "ele": 221.5,
        "distanceKm": 36.987549761351254,
        "gradePct": 0.8057428410575539,
        "smoothedEle": 220.78828627227375,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.530382,
        "lng": 120.917283,
        "ele": 219,
        "distanceKm": 37.04118044310175,
        "gradePct": -1.236867430464269,
        "smoothedEle": 219.75957813173352,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529835,
        "lng": 120.916917,
        "ele": 220.25,
        "distanceKm": 37.11238657852339,
        "gradePct": -0.7069257078504918,
        "smoothedEle": 219.60495722260205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529314,
        "lng": 120.917008,
        "ele": 218,
        "distanceKm": 37.17104603418711,
        "gradePct": -1.2669998285623298,
        "smoothedEle": 218.42772652013278,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52912,
        "lng": 120.916994,
        "ele": 217.75,
        "distanceKm": 37.19266431914488,
        "gradePct": -1.68513782231543,
        "smoothedEle": 217.96264539634964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529052,
        "lng": 120.916961,
        "ele": 218,
        "distanceKm": 37.2009297171074,
        "gradePct": -1.7260721034822137,
        "smoothedEle": 217.90376317657152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.52891,
        "lng": 120.916852,
        "ele": 218,
        "distanceKm": 37.22018839721953,
        "gradePct": -1.7372069342119725,
        "smoothedEle": 217.71117637545018,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528466,
        "lng": 120.916909,
        "ele": 217,
        "distanceKm": 37.26989459303963,
        "gradePct": -0.5978345709426861,
        "smoothedEle": 217.85300010550623,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527962,
        "lng": 120.916957,
        "ele": 219.75,
        "distanceKm": 37.326146877795495,
        "gradePct": 2.3610526717054032,
        "smoothedEle": 220.08923002513848,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.527629,
        "lng": 120.916914,
        "ele": 222.75,
        "distanceKm": 37.36342947047913,
        "gradePct": 5.061993629673892,
        "smoothedEle": 222.89654718577782,
        "gradeBand": "hard"
      },
      {
        "lat": 24.527241,
        "lng": 120.916767,
        "ele": 226.75,
        "distanceKm": 37.40906405570297,
        "gradePct": 6.830384845227728,
        "smoothedEle": 226.24051146966258,
        "gradeBand": "steep"
      },
      {
        "lat": 24.527161,
        "lng": 120.916677,
        "ele": 227.25,
        "distanceKm": 37.42179292312005,
        "gradePct": 7.200113086302633,
        "smoothedEle": 227.11625780910714,
        "gradeBand": "steep"
      },
      {
        "lat": 24.52707,
        "lng": 120.916309,
        "ele": 229.25,
        "distanceKm": 37.46037099491304,
        "gradePct": 6.508381403579584,
        "smoothedEle": 229.17463047101188,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526984,
        "lng": 120.916282,
        "ele": 230,
        "distanceKm": 37.47031619603793,
        "gradePct": 6.339743429412545,
        "smoothedEle": 229.74092902021954,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526923,
        "lng": 120.916239,
        "ele": 230.25,
        "distanceKm": 37.47837409607471,
        "gradePct": 6.232758905614528,
        "smoothedEle": 230.22440302242643,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526862,
        "lng": 120.916174,
        "ele": 230.75,
        "distanceKm": 37.48782105069108,
        "gradePct": 6.107331941224343,
        "smoothedEle": 230.79122029940885,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526583,
        "lng": 120.915792,
        "ele": 233.25,
        "distanceKm": 37.53737701839723,
        "gradePct": 6.034330674189647,
        "smoothedEle": 233.98209390044653,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526517,
        "lng": 120.915724,
        "ele": 234.25,
        "distanceKm": 37.54743583543947,
        "gradePct": 6.252043433003304,
        "smoothedEle": 234.73650517861478,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526413,
        "lng": 120.915648,
        "ele": 235.5,
        "distanceKm": 37.561322620422175,
        "gradePct": 6.048936759140559,
        "smoothedEle": 235.27775458528419,
        "gradeBand": "steep"
      },
      {
        "lat": 24.526276,
        "lng": 120.915686,
        "ele": 238.25,
        "distanceKm": 37.577033888481324,
        "gradePct": 5.31558979943254,
        "smoothedEle": 235.45958036625584,
        "gradeBand": "hard"
      },
      {
        "lat": 24.526175,
        "lng": 120.915287,
        "ele": 234.5,
        "distanceKm": 37.61893084745458,
        "gradePct": 1.3352300567617685,
        "smoothedEle": 234.12958809762108,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.526224,
        "lng": 120.915204,
        "ele": 233,
        "distanceKm": 37.628940206465785,
        "gradePct": -0.07818709935642576,
        "smoothedEle": 233.36066646667462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526273,
        "lng": 120.91499,
        "ele": 230.25,
        "distanceKm": 37.65126401374209,
        "gradePct": -3.1270699434563607,
        "smoothedEle": 231.75864178206598,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526276,
        "lng": 120.914978,
        "ele": 230.25,
        "distanceKm": 37.652522958100555,
        "gradePct": -3.225540556570291,
        "smoothedEle": 231.70923960976796,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526207,
        "lng": 120.914784,
        "ele": 230.5,
        "distanceKm": 37.673594852528375,
        "gradePct": -4.537422102145506,
        "smoothedEle": 230.88235845956356,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526136746592766,
        "lng": 120.91437464965863,
        "ele": 230.5759050258307,
        "distanceKm": 37.71573599144911,
        "gradePct": -3.619215841775775,
        "smoothedEle": 230.611790924188,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526088,
        "lng": 120.913961,
        "ele": 230.75,
        "distanceKm": 37.757931294672574,
        "gradePct": -0.35021606471334576,
        "smoothedEle": 231.1467952814459,
        "gradeBand": "descent"
      },
      {
        "lat": 24.526077,
        "lng": 120.913867,
        "ele": 231,
        "distanceKm": 37.767518884929466,
        "gradePct": 0.3063603275470498,
        "smoothedEle": 231.42714552629164,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.526055,
        "lng": 120.913811,
        "ele": 231.25,
        "distanceKm": 37.77368958414904,
        "gradePct": 0.7258323976425526,
        "smoothedEle": 231.60758263204227,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.525745,
        "lng": 120.913494,
        "ele": 233.5,
        "distanceKm": 37.820770369205476,
        "gradePct": 2.2425271858589295,
        "smoothedEle": 232.9181501915816,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.525458,
        "lng": 120.913646,
        "ele": 233.5,
        "distanceKm": 37.85619468551011,
        "gradePct": 2.6641446317372206,
        "smoothedEle": 233.78892102961566,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.525296,
        "lng": 120.913681,
        "ele": 233.75,
        "distanceKm": 37.87455296514351,
        "gradePct": 2.4326790267564258,
        "smoothedEle": 234.06429522411662,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.525003,
        "lng": 120.913609,
        "ele": 235,
        "distanceKm": 37.90793738521152,
        "gradePct": 2.0840023808862598,
        "smoothedEle": 234.64492631775676,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.524761,
        "lng": 120.913371,
        "ele": 235.25,
        "distanceKm": 37.94404555111554,
        "gradePct": 2.214293349034787,
        "smoothedEle": 235.70457454472478,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.524421,
        "lng": 120.913011,
        "ele": 237.5,
        "distanceKm": 37.99653983224046,
        "gradePct": 2.131757403943565,
        "smoothedEle": 236.57845431909496,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.524178,
        "lng": 120.912746,
        "ele": 236.25,
        "distanceKm": 38.03460281727078,
        "gradePct": 1.4400611595176338,
        "smoothedEle": 236.8675245321344,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.523770838388387,
        "lng": 120.9125128955636,
        "ele": 237.19139882306732,
        "distanceKm": 38.085650517155685,
        "gradePct": 0.881639251083941,
        "smoothedEle": 237.27881759105492,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.523339,
        "lng": 120.912331,
        "ele": 238.5,
        "distanceKm": 38.137073920685474,
        "gradePct": 1.4319916586969805,
        "smoothedEle": 238.31942595531893,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.522921346638224,
        "lng": 120.91217649531433,
        "ele": 239.03829410485557,
        "distanceKm": 38.18607469530209,
        "gradePct": 1.6406163015849466,
        "smoothedEle": 238.92801759766107,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.52250767331911,
        "lng": 120.91200924765717,
        "ele": 239.14414705242777,
        "distanceKm": 38.23508621495302,
        "gradePct": 0.864944469061742,
        "smoothedEle": 239.14414704224518,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.522094,
        "lng": 120.911842,
        "ele": 239.25,
        "distanceKm": 38.28409775384308,
        "gradePct": 0.4074604647267334,
        "smoothedEle": 239.31092436790505,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.521512,
        "lng": 120.911803,
        "ele": 239.75,
        "distanceKm": 38.34893344887973,
        "gradePct": 0.6416765168874485,
        "smoothedEle": 239.83294317003208,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.521082,
        "lng": 120.91189666666666,
        "ele": 240.41666666666669,
        "distanceKm": 38.39767726914758,
        "gradePct": 0.996408024305751,
        "smoothedEle": 240.41666664564502,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.520652000000002,
        "lng": 120.91199033333334,
        "ele": 241.08333333333331,
        "distanceKm": 38.44642109572192,
        "gradePct": 1.270618129119139,
        "smoothedEle": 241.08333331231128,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.520222,
        "lng": 120.912084,
        "ele": 241.75,
        "distanceKm": 38.495164928602875,
        "gradePct": 1.1249935739179318,
        "smoothedEle": 241.5115741051259,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.519809,
        "lng": 120.912097,
        "ele": 241.5,
        "distanceKm": 38.541107325021045,
        "gradePct": 0.6910511049737709,
        "smoothedEle": 241.70170826423055,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.519431,
        "lng": 120.911904,
        "ele": 242,
        "distanceKm": 38.58745282111974,
        "gradePct": 0.797302319745046,
        "smoothedEle": 242.2411214120283,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.518934,
        "lng": 120.911616,
        "ele": 244,
        "distanceKm": 38.64992705394158,
        "gradePct": 3.1733746225412007,
        "smoothedEle": 244.97773531559935,
        "gradeBand": "hard"
      },
      {
        "lat": 24.518465,
        "lng": 120.911706,
        "ele": 249.75,
        "distanceKm": 38.70286642829355,
        "gradePct": 6.865544723435351,
        "smoothedEle": 249.7818419606124,
        "gradeBand": "steep"
      },
      {
        "lat": 24.518021,
        "lng": 120.911862,
        "ele": 255.5,
        "distanceKm": 38.754698256189435,
        "gradePct": 8.856026184204483,
        "smoothedEle": 254.26673534402084,
        "gradeBand": "steep"
      },
      {
        "lat": 24.517797,
        "lng": 120.911834,
        "ele": 256.75,
        "distanceKm": 38.77976651813303,
        "gradePct": 7.715300782218666,
        "smoothedEle": 255.4008876725778,
        "gradeBand": "steep"
      },
      {
        "lat": 24.517641,
        "lng": 120.911705,
        "ele": 254.5,
        "distanceKm": 38.80147416572683,
        "gradePct": 4.843293744044745,
        "smoothedEle": 254.498791600099,
        "gradeBand": "hard"
      },
      {
        "lat": 24.51725,
        "lng": 120.911248,
        "ele": 250.75,
        "distanceKm": 38.86493978724466,
        "gradePct": -2.9951933250896587,
        "smoothedEle": 251.73489509543893,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516806,
        "lng": 120.911086,
        "ele": 252,
        "distanceKm": 38.916959707420915,
        "gradePct": -1.2402263446373745,
        "smoothedEle": 252.58417755488546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516485,
        "lng": 120.911077,
        "ele": 254.75,
        "distanceKm": 38.952664939873,
        "gradePct": 2.9371877169075598,
        "smoothedEle": 255.2066463592619,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.516006,
        "lng": 120.91111,
        "ele": 260.5,
        "distanceKm": 39.00603191681054,
        "gradePct": 7.174360622082345,
        "smoothedEle": 259.5801299661431,
        "gradeBand": "steep"
      },
      {
        "lat": 24.515389,
        "lng": 120.911213,
        "ele": 263.25,
        "distanceKm": 39.07542614377863,
        "gradePct": 5.56847250856348,
        "smoothedEle": 262.6404250527839,
        "gradeBand": "hard"
      },
      {
        "lat": 24.515223,
        "lng": 120.911209,
        "ele": 263,
        "distanceKm": 39.09388896272758,
        "gradePct": 4.199310886057727,
        "smoothedEle": 262.78431214773826,
        "gradeBand": "hard"
      },
      {
        "lat": 24.514866,
        "lng": 120.910922,
        "ele": 261.75,
        "distanceKm": 39.1430714701555,
        "gradePct": 0.779709302762956,
        "smoothedEle": 261.99328873675677,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.51457,
        "lng": 120.910688,
        "ele": 261.5,
        "distanceKm": 39.18361499670051,
        "gradePct": -1.1952330041392942,
        "smoothedEle": 261.5090105945121,
        "gradeBand": "descent"
      },
      {
        "lat": 24.514192,
        "lng": 120.910464,
        "ele": 261.25,
        "distanceKm": 39.2313669988552,
        "gradePct": -0.24682426161387744,
        "smoothedEle": 261.93471251892686,
        "gradeBand": "descent"
      },
      {
        "lat": 24.513859,
        "lng": 120.910377,
        "ele": 263.25,
        "distanceKm": 39.269426746693185,
        "gradePct": 2.022329087619283,
        "smoothedEle": 263.70081333035057,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.51331,
        "lng": 120.910398,
        "ele": 268.75,
        "distanceKm": 39.330509806621514,
        "gradePct": 7.3656635199157074,
        "smoothedEle": 269.2927342988735,
        "gradeBand": "steep"
      },
      {
        "lat": 24.512826,
        "lng": 120.91043,
        "ele": 275.75,
        "distanceKm": 39.38442551659739,
        "gradePct": 8.687704955681957,
        "smoothedEle": 273.76159841705055,
        "gradeBand": "steep"
      },
      {
        "lat": 24.512373387267246,
        "lng": 120.9102117427988,
        "ele": 274.0828288286274,
        "distanceKm": 39.43938497864275,
        "gradePct": 3.572904017386697,
        "smoothedEle": 273.6012669077429,
        "gradeBand": "hard"
      },
      {
        "lat": 24.511939,
        "lng": 120.909946,
        "ele": 270.25,
        "distanceKm": 39.494665352940245,
        "gradePct": -2.211253847769424,
        "smoothedEle": 271.5204722169179,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511643,
        "lng": 120.909868,
        "ele": 271.5,
        "distanceKm": 39.528511934711766,
        "gradePct": -1.789069968284511,
        "smoothedEle": 271.8439165283944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511289,
        "lng": 120.909887,
        "ele": 274,
        "distanceKm": 39.56792190332597,
        "gradePct": 1.5502824277888643,
        "smoothedEle": 274.07739811770983,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.510823,
        "lng": 120.909957,
        "ele": 277.5,
        "distanceKm": 39.62022055989554,
        "gradePct": 6.320524361600658,
        "smoothedEle": 278.0852069503102,
        "gradeBand": "steep"
      },
      {
        "lat": 24.51033,
        "lng": 120.910142,
        "ele": 284.25,
        "distanceKm": 39.67814706477428,
        "gradePct": 9.635732763199462,
        "smoothedEle": 284.4967168285291,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.509864,
        "lng": 120.910293,
        "ele": 291.5,
        "distanceKm": 39.73216920852954,
        "gradePct": 11.631252957330053,
        "smoothedEle": 291.03897848369826,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.5095,
        "lng": 120.910444,
        "ele": 295.75,
        "distanceKm": 39.775431525114485,
        "gradePct": 10.64647615464215,
        "smoothedEle": 294.84262747537963,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.50903,
        "lng": 120.910454,
        "ele": 297,
        "distanceKm": 39.82770300544255,
        "gradePct": 7.414677931968194,
        "smoothedEle": 297.912784336754,
        "gradeBand": "steep"
      },
      {
        "lat": 24.508444,
        "lng": 120.910399,
        "ele": 304,
        "distanceKm": 39.89310050302245,
        "gradePct": 7.535206280897462,
        "smoothedEle": 303.415618288438,
        "gradeBand": "steep"
      },
      {
        "lat": 24.508109,
        "lng": 120.910375,
        "ele": 306,
        "distanceKm": 39.930429915708345,
        "gradePct": 7.978641699319837,
        "smoothedEle": 306.1208802957796,
        "gradeBand": "steep"
      },
      {
        "lat": 24.507873,
        "lng": 120.910423,
        "ele": 307.75,
        "distanceKm": 39.957117554426105,
        "gradePct": 7.801318043981328,
        "smoothedEle": 308.1891722964062,
        "gradeBand": "steep"
      },
      {
        "lat": 24.507548,
        "lng": 120.910621,
        "ele": 311.75,
        "distanceKm": 39.998437126605516,
        "gradePct": 8.228376989749616,
        "smoothedEle": 312.03074031348257,
        "gradeBand": "steep"
      },
      {
        "lat": 24.507111,
        "lng": 120.911009,
        "ele": 319.5,
        "distanceKm": 40.060905542866294,
        "gradePct": 10.346486856318984,
        "smoothedEle": 318.8878364496657,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.506684,
        "lng": 120.911285,
        "ele": 323.25,
        "distanceKm": 40.11598899248971,
        "gradePct": 8.610742103496468,
        "smoothedEle": 322.56813333822043,
        "gradeBand": "steep"
      },
      {
        "lat": 24.506364,
        "lng": 120.91124,
        "ele": 323.75,
        "distanceKm": 40.151861529377136,
        "gradePct": 4.793923610191302,
        "smoothedEle": 322.6890076632985,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506198,
        "lng": 120.910839,
        "ele": 320.5,
        "distanceKm": 40.196435456828205,
        "gradePct": 1.1794869619391026,
        "smoothedEle": 322.4411876611859,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.506141,
        "lng": 120.910369,
        "ele": 324.5,
        "distanceKm": 40.24440975771491,
        "gradePct": 1.75361241291424,
        "smoothedEle": 324.41751095518424,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.506113,
        "lng": 120.909855,
        "ele": 328.5,
        "distanceKm": 40.29650851084241,
        "gradePct": 5.361360385359982,
        "smoothedEle": 327.80555754011476,
        "gradeBand": "hard"
      },
      {
        "lat": 24.506111,
        "lng": 120.909214,
        "ele": 330,
        "distanceKm": 40.36136418050043,
        "gradePct": 6.21212560246303,
        "smoothedEle": 331.7322037165459,
        "gradeBand": "steep"
      },
      {
        "lat": 24.506051,
        "lng": 120.908863,
        "ele": 336.25,
        "distanceKm": 40.397499022288876,
        "gradePct": 8.59452488074992,
        "smoothedEle": 336.4600523202505,
        "gradeBand": "steep"
      },
      {
        "lat": 24.505739,
        "lng": 120.90843,
        "ele": 346.25,
        "distanceKm": 40.453382252001646,
        "gradePct": 13.825821562426741,
        "smoothedEle": 345.07476438311636,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.505462,
        "lng": 120.908235,
        "ele": 349.5,
        "distanceKm": 40.48996053523381,
        "gradePct": 13.156148500840214,
        "smoothedEle": 348.6298722879263,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.505227,
        "lng": 120.907993,
        "ele": 350,
        "distanceKm": 40.52577046107247,
        "gradePct": 8.493447440347431,
        "smoothedEle": 349.311699993036,
        "gradeBand": "steep"
      },
      {
        "lat": 24.504995,
        "lng": 120.90744,
        "ele": 347.25,
        "distanceKm": 40.587383201322595,
        "gradePct": -0.006397533381516405,
        "smoothedEle": 348.37297912294406,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504858,
        "lng": 120.906832,
        "ele": 350.5,
        "distanceKm": 40.65075832123747,
        "gradePct": 0.786076055790534,
        "smoothedEle": 349.7170654078033,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.50468,
        "lng": 120.906379,
        "ele": 349.75,
        "distanceKm": 40.70068357702051,
        "gradePct": 0.32675248505420984,
        "smoothedEle": 348.98181158801344,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504456,
        "lng": 120.906055,
        "ele": 346.5,
        "distanceKm": 40.74185473377128,
        "gradePct": -3.1905622349149896,
        "smoothedEle": 346.3376721329561,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504173,
        "lng": 120.905705,
        "ele": 342.25,
        "distanceKm": 40.789229012837446,
        "gradePct": -5.3605010958795365,
        "smoothedEle": 343.7900029091788,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503693,
        "lng": 120.905485,
        "ele": 344.25,
        "distanceKm": 40.847058378903924,
        "gradePct": -3.2580077779631544,
        "smoothedEle": 342.79982544625966,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503262333333332,
        "lng": 120.90535633333333,
        "ele": 340.16666666666686,
        "distanceKm": 40.8966844255453,
        "gradePct": -3.4956814547050006,
        "smoothedEle": 340.1666669055445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.502831666666665,
        "lng": 120.90522766666668,
        "ele": 336.08333333333314,
        "distanceKm": 40.94631048388682,
        "gradePct": -6.729297630712172,
        "smoothedEle": 336.0833335722233,
        "gradeBand": "descent"
      },
      {
        "lat": 24.502401,
        "lng": 120.905099,
        "ele": 332,
        "distanceKm": 40.99593655392907,
        "gradePct": -7.401407687360015,
        "smoothedEle": 332.8049412937661,
        "gradeBand": "descent"
      },
      {
        "lat": 24.502053,
        "lng": 120.90498450000001,
        "ele": 331.25000000000006,
        "distanceKm": 41.036329502496734,
        "gradePct": -5.654589050888409,
        "smoothedEle": 331.2500000344954,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501705,
        "lng": 120.90487,
        "ele": 330.5,
        "distanceKm": 41.07672246026316,
        "gradePct": -3.4257053479668196,
        "smoothedEle": 330.6485554034601,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50138,
        "lng": 120.9047,
        "ele": 330.25,
        "distanceKm": 41.116745656330515,
        "gradePct": -2.7481141275007026,
        "smoothedEle": 329.2557731942288,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500885,
        "lng": 120.9043,
        "ele": 323.5,
        "distanceKm": 41.18506572119904,
        "gradePct": -6.552981497232359,
        "smoothedEle": 323.80523364007536,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500561,
        "lng": 120.903916,
        "ele": 320.25,
        "distanceKm": 41.23805254146906,
        "gradePct": -7.009659417788399,
        "smoothedEle": 320.5462614644303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50039,
        "lng": 120.90337,
        "ele": 318,
        "distanceKm": 41.296478967586225,
        "gradePct": -4.79780429081153,
        "smoothedEle": 318.30545379722895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500357,
        "lng": 120.903025,
        "ele": 317.5,
        "distanceKm": 41.331579404005076,
        "gradePct": -4.6308450036679485,
        "smoothedEle": 316.31354895440404,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500142,
        "lng": 120.902752,
        "ele": 313.25,
        "distanceKm": 41.36811117084984,
        "gradePct": -5.3520281718128135,
        "smoothedEle": 314.0414055114529,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499838,
        "lng": 120.902621,
        "ele": 311.5,
        "distanceKm": 41.404420377353205,
        "gradePct": -5.90643755004399,
        "smoothedEle": 311.9483514068695,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499345,
        "lng": 120.902489,
        "ele": 311,
        "distanceKm": 41.46084316286277,
        "gradePct": -2.957152507060656,
        "smoothedEle": 311.5362967492599,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498894,
        "lng": 120.902389,
        "ele": 312.75,
        "distanceKm": 41.512002738516045,
        "gradePct": 0.00046311213480975565,
        "smoothedEle": 311.8934406624212,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4985565,
        "lng": 120.9023715,
        "ele": 311.3750000000001,
        "distanceKm": 41.54957282949131,
        "gradePct": -0.24360380357637376,
        "smoothedEle": 311.3750000015402,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498219,
        "lng": 120.902354,
        "ele": 310,
        "distanceKm": 41.587142920690596,
        "gradePct": -1.5478179839211983,
        "smoothedEle": 310.1720768172358,
        "gradeBand": "descent"
      },
      {
        "lat": 24.497688404655158,
        "lng": 120.9021792024956,
        "ele": 308.6610091175332,
        "distanceKm": 41.64873656421183,
        "gradePct": -2.834095189104874,
        "smoothedEle": 308.5524446813286,
        "gradeBand": "descent"
      },
      {
        "lat": 24.49717,
        "lng": 120.901961,
        "ele": 306.75,
        "distanceKm": 41.710464298672264,
        "gradePct": -3.600093049261778,
        "smoothedEle": 305.9587378050245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.496782,
        "lng": 120.901774,
        "ele": 302.37500000000034,
        "distanceKm": 41.75757490726887,
        "gradePct": -5.806070241174015,
        "smoothedEle": 302.3750005129798,
        "gradeBand": "descent"
      },
      {
        "lat": 24.496394,
        "lng": 120.901587,
        "ele": 298,
        "distanceKm": 41.80468553931597,
        "gradePct": -6.520431007049658,
        "smoothedEle": 299.6811216041546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495879,
        "lng": 120.901492,
        "ele": 300.5,
        "distanceKm": 41.86275220490119,
        "gradePct": -3.082191572904903,
        "smoothedEle": 298.996760844552,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495491,
        "lng": 120.90158,
        "ele": 297,
        "distanceKm": 41.90680520631471,
        "gradePct": -1.7558587141232103,
        "smoothedEle": 297.90028096791235,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495159,
        "lng": 120.901561,
        "ele": 296.75,
        "distanceKm": 41.94377200043385,
        "gradePct": -0.06736140551237117,
        "smoothedEle": 299.153095892345,
        "gradeBand": "descent"
      },
      {
        "lat": 24.494899,
        "lng": 120.901317,
        "ele": 304.25,
        "distanceKm": 41.98179055016734,
        "gradePct": 4.60608554458951,
        "smoothedEle": 303.12898168528415,
        "gradeBand": "hard"
      },
      {
        "lat": 24.49459,
        "lng": 120.900933,
        "ele": 309.25,
        "distanceKm": 42.0336591073562,
        "gradePct": 6.2961461711051605,
        "smoothedEle": 305.1065133070414,
        "gradeBand": "steep"
      },
      {
        "lat": 24.494237,
        "lng": 120.900875,
        "ele": 299.5,
        "distanceKm": 42.07334729971147,
        "gradePct": -1.61550571113637,
        "smoothedEle": 300.6305017479071,
        "gradeBand": "descent"
      },
      {
        "lat": 24.493843,
        "lng": 120.900941,
        "ele": 293,
        "distanceKm": 42.11766425741075,
        "gradePct": -10.823256867101025,
        "smoothedEle": 293.6734395630755,
        "gradeBand": "descent"
      },
      {
        "lat": 24.493339,
        "lng": 120.900855,
        "ele": 287.75,
        "distanceKm": 42.17437818839369,
        "gradePct": -10.97969049795286,
        "smoothedEle": 289.48897801409703,
        "gradeBand": "descent"
      },
      {
        "lat": 24.493033944375117,
        "lng": 120.90068562067287,
        "ele": 289.6944055410372,
        "distanceKm": 42.21238302435217,
        "gradePct": -5.161108076474915,
        "smoothedEle": 289.3414016373645,
        "gradeBand": "descent"
      },
      {
        "lat": 24.492729,
        "lng": 120.900516,
        "ele": 290.5,
        "distanceKm": 42.25038786141424,
        "gradePct": -1.5645404047609537,
        "smoothedEle": 289.6944895005219,
        "gradeBand": "descent"
      },
      {
        "lat": 24.492307,
        "lng": 120.900329,
        "ele": 288.25,
        "distanceKm": 42.300983799125206,
        "gradePct": -1.816001023572002,
        "smoothedEle": 287.5696648847498,
        "gradeBand": "descent"
      },
      {
        "lat": 24.491937713851563,
        "lng": 120.9002343980464,
        "ele": 283.975403608491,
        "distanceKm": 42.343147657287005,
        "gradePct": -5.492406047717715,
        "smoothedEle": 284.1348175887265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.491564,
        "lng": 120.900162,
        "ele": 280.25,
        "distanceKm": 42.385343620521034,
        "gradePct": -6.685238654760174,
        "smoothedEle": 281.5412504336057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.491056,
        "lng": 120.90008,
        "ele": 281.25,
        "distanceKm": 42.44243690095321,
        "gradePct": -3.4758230931422607,
        "smoothedEle": 280.716895730853,
        "gradeBand": "descent"
      },
      {
        "lat": 24.49049,
        "lng": 120.89999,
        "ele": 279.5,
        "distanceKm": 42.5060288242323,
        "gradePct": -1.98945038637973,
        "smoothedEle": 279.2531318882464,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48998,
        "lng": 120.899735,
        "ele": 276.5,
        "distanceKm": 42.56833290536153,
        "gradePct": -2.593460910154383,
        "smoothedEle": 277.52735857443514,
        "gradeBand": "descent"
      },
      {
        "lat": 24.489747,
        "lng": 120.899345,
        "ele": 278.25,
        "distanceKm": 42.615542072061686,
        "gradePct": -1.353119377152533,
        "smoothedEle": 277.6365031400533,
        "gradeBand": "descent"
      },
      {
        "lat": 24.489512,
        "lng": 120.899054,
        "ele": 277.75,
        "distanceKm": 42.65491124463244,
        "gradePct": 0.0024492056180633534,
        "smoothedEle": 277.9015770685731,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489172,
        "lng": 120.899015,
        "ele": 277.75,
        "distanceKm": 42.69292299394748,
        "gradePct": 0.1657907178565073,
        "smoothedEle": 277.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488706,
        "lng": 120.899058,
        "ele": 277.75,
        "distanceKm": 42.74492227628605,
        "gradePct": -0.014926675604158177,
        "smoothedEle": 277.81939434188786,
        "gradeBand": "descent"
      },
      {
        "lat": 24.488323,
        "lng": 120.899185,
        "ele": 278,
        "distanceKm": 42.789406802775744,
        "gradePct": 1.2550091314719047,
        "smoothedEle": 279.0190304264651,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488169,
        "lng": 120.899464,
        "ele": 281.25,
        "distanceKm": 42.822426817030944,
        "gradePct": 3.528813827245819,
        "smoothedEle": 281.31818741653353,
        "gradeBand": "hard"
      },
      {
        "lat": 24.488023,
        "lng": 120.899993,
        "ele": 286.5,
        "distanceKm": 42.87836540046384,
        "gradePct": 7.236227603574445,
        "smoothedEle": 285.9574991083894,
        "gradeBand": "steep"
      },
      {
        "lat": 24.487922,
        "lng": 120.900182,
        "ele": 288.25,
        "distanceKm": 42.90054448513572,
        "gradePct": 7.541363863860005,
        "smoothedEle": 287.33590213999435,
        "gradeBand": "steep"
      },
      {
        "lat": 24.48764,
        "lng": 120.900391,
        "ele": 287.5,
        "distanceKm": 42.93836719156651,
        "gradePct": 4.382408112777734,
        "smoothedEle": 287.0226233930332,
        "gradeBand": "hard"
      },
      {
        "lat": 24.487361,
        "lng": 120.900436,
        "ele": 285.75,
        "distanceKm": 42.96972303960145,
        "gradePct": 0.2369228361762305,
        "smoothedEle": 285.47766075160035,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.487245,
        "lng": 120.900416,
        "ele": 285,
        "distanceKm": 42.98277948177829,
        "gradePct": -1.4722724405967615,
        "smoothedEle": 284.75955643187416,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486939,
        "lng": 120.900262,
        "ele": 282,
        "distanceKm": 43.02020411500747,
        "gradePct": -5.199972329960343,
        "smoothedEle": 281.9730925941617,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486542,
        "lng": 120.899839,
        "ele": 276.75,
        "distanceKm": 43.08169396262582,
        "gradePct": -7.690966850810928,
        "smoothedEle": 277.1282931344489,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486262,
        "lng": 120.899535,
        "ele": 274.5,
        "distanceKm": 43.125462996797424,
        "gradePct": -6.579648975155769,
        "smoothedEle": 274.97909509414404,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485937,
        "lng": 120.899401,
        "ele": 274,
        "distanceKm": 43.16406168822727,
        "gradePct": -3.442849132108571,
        "smoothedEle": 275.0746950216275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485398,
        "lng": 120.899278,
        "ele": 278.75,
        "distanceKm": 43.22527466716612,
        "gradePct": 3.4744457783026594,
        "smoothedEle": 278.462788453121,
        "gradeBand": "hard"
      },
      {
        "lat": 24.485195,
        "lng": 120.899122,
        "ele": 280.5,
        "distanceKm": 43.25281978678629,
        "gradePct": 5.224131505452174,
        "smoothedEle": 280.2709829675517,
        "gradeBand": "hard"
      },
      {
        "lat": 24.48494,
        "lng": 120.898764,
        "ele": 282,
        "distanceKm": 43.298824697336265,
        "gradePct": 4.407085126451698,
        "smoothedEle": 281.4058871734666,
        "gradeBand": "hard"
      },
      {
        "lat": 24.484737,
        "lng": 120.898328,
        "ele": 281.25,
        "distanceKm": 43.348384789160754,
        "gradePct": 1.578240392226269,
        "smoothedEle": 281.55808872363946,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484538,
        "lng": 120.89816,
        "ele": 281.5,
        "distanceKm": 43.376289441021456,
        "gradePct": 0.8677867224975435,
        "smoothedEle": 281.7177472162401,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484212,
        "lng": 120.898034,
        "ele": 282.5,
        "distanceKm": 43.41471616073861,
        "gradePct": 0.41358515128438833,
        "smoothedEle": 281.8682758131085,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.483725,
        "lng": 120.897864,
        "ele": 281,
        "distanceKm": 43.47153512267496,
        "gradePct": -1.3345785193051634,
        "smoothedEle": 280.3559665191642,
        "gradeBand": "descent"
      },
      {
        "lat": 24.483445,
        "lng": 120.897696,
        "ele": 278,
        "distanceKm": 43.507009038254076,
        "gradePct": -3.8390285301982225,
        "smoothedEle": 277.9990562506798,
        "gradeBand": "descent"
      },
      {
        "lat": 24.483254,
        "lng": 120.897416,
        "ele": 275,
        "distanceKm": 43.542420037211855,
        "gradePct": -5.487051868539858,
        "smoothedEle": 275.64384986308306,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4830695,
        "lng": 120.896894,
        "ele": 273.5000000000001,
        "distanceKm": 43.59908868353849,
        "gradePct": -5.025289282582192,
        "smoothedEle": 273.5000005415403,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482885,
        "lng": 120.896372,
        "ele": 272,
        "distanceKm": 43.655757402070485,
        "gradePct": -3.365104601664095,
        "smoothedEle": 271.77417523095573,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482664,
        "lng": 120.896098,
        "ele": 270.25,
        "distanceKm": 43.69280775863571,
        "gradePct": -2.8920039932672963,
        "smoothedEle": 270.84561218697866,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482389,
        "lng": 120.896029,
        "ele": 270.5,
        "distanceKm": 43.724173512665004,
        "gradePct": -2.0919334475102844,
        "smoothedEle": 270.64411770290724,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482349,
        "lng": 120.896024,
        "ele": 270.25,
        "distanceKm": 43.72865000417528,
        "gradePct": -1.8903648308024417,
        "smoothedEle": 270.70935639101987,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481946999999998,
        "lng": 120.896039,
        "ele": 271.75,
        "distanceKm": 43.77337619296256,
        "gradePct": 0.4249791512286773,
        "smoothedEle": 271.75758891241253,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.481545,
        "lng": 120.896054,
        "ele": 273.25,
        "distanceKm": 43.81810238191403,
        "gradePct": 2.2152318891915823,
        "smoothedEle": 272.89835070641146,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.481116,
        "lng": 120.895917,
        "ele": 273.5,
        "distanceKm": 43.86777895049368,
        "gradePct": 1.77688773714377,
        "smoothedEle": 273.4032959756584,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.480763,
        "lng": 120.8956815,
        "ele": 273.375,
        "distanceKm": 43.91369937438785,
        "gradePct": 0.5889500250437921,
        "smoothedEle": 273.3750000216853,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48041,
        "lng": 120.895446,
        "ele": 273.25,
        "distanceKm": 43.95961983297854,
        "gradePct": -0.3328704045475727,
        "smoothedEle": 272.98749094200303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.480007,
        "lng": 120.895174,
        "ele": 272,
        "distanceKm": 44.012210429558095,
        "gradePct": -1.0796087312626657,
        "smoothedEle": 272.2963087713777,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479719,
        "lng": 120.894711,
        "ele": 272,
        "distanceKm": 44.06896402188987,
        "gradePct": -0.3139221577634954,
        "smoothedEle": 272.5507609593712,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479485,
        "lng": 120.8943105,
        "ele": 274.12500000000017,
        "distanceKm": 44.11712769630199,
        "gradePct": 1.806644209685632,
        "smoothedEle": 274.12499932615845,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.479251,
        "lng": 120.89391,
        "ele": 276.25,
        "distanceKm": 44.165291434134495,
        "gradePct": 3.628498803147414,
        "smoothedEle": 276.1627938798924,
        "gradeBand": "hard"
      },
      {
        "lat": 24.478974,
        "lng": 120.893476,
        "ele": 278.25,
        "distanceKm": 44.218936017592284,
        "gradePct": 3.4688453963378345,
        "smoothedEle": 277.67035430091755,
        "gradeBand": "hard"
      },
      {
        "lat": 24.478788,
        "lng": 120.89316,
        "ele": 277.875,
        "distanceKm": 44.257020532973456,
        "gradePct": 2.0621457569159523,
        "smoothedEle": 277.8750000744128,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.478602,
        "lng": 120.892844,
        "ele": 277.5,
        "distanceKm": 44.295105088041446,
        "gradePct": 0.06841937542782164,
        "smoothedEle": 277.06905897504,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.478381,
        "lng": 120.892468,
        "ele": 275.5,
        "distanceKm": 44.34040183962069,
        "gradePct": -0.5990363109440211,
        "smoothedEle": 277.18666381251444,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4782075,
        "lng": 120.8921085,
        "ele": 279.37499999999966,
        "distanceKm": 44.38158215815968,
        "gradePct": 2.019769435080349,
        "smoothedEle": 279.3749991414364,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.478034,
        "lng": 120.891749,
        "ele": 283.25,
        "distanceKm": 44.42276252101163,
        "gradePct": 3.975395760438062,
        "smoothedEle": 281.1162622668356,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4778335,
        "lng": 120.8912715,
        "ele": 278.9999999999997,
        "distanceKm": 44.475981002733,
        "gradePct": -0.07735046095598254,
        "smoothedEle": 279.0000014854645,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477633,
        "lng": 120.890794,
        "ele": 274.75,
        "distanceKm": 44.52919955435859,
        "gradePct": -6.876363070925224,
        "smoothedEle": 273.9839271955838,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47747,
        "lng": 120.890427,
        "ele": 268.75,
        "distanceKm": 44.57052693494617,
        "gradePct": -10.422937104046662,
        "smoothedEle": 268.79394824173966,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477207,
        "lng": 120.890061,
        "ele": 262.25,
        "distanceKm": 44.61771984754207,
        "gradePct": -11.27902547742833,
        "smoothedEle": 263.78691279246726,
        "gradeBand": "descent"
      },
      {
        "lat": 24.476776055087157,
        "lng": 120.88983529714412,
        "ele": 261.4855727212244,
        "distanceKm": 44.6708043192387,
        "gradePct": -7.271252312949354,
        "smoothedEle": 261.49326623459797,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47632,
        "lng": 120.889672,
        "ele": 260.75,
        "distanceKm": 44.7241402628264,
        "gradePct": -2.833799778890312,
        "smoothedEle": 260.67570301124783,
        "gradeBand": "descent"
      },
      {
        "lat": 24.475935,
        "lng": 120.889581,
        "ele": 259.87500000000006,
        "distanceKm": 44.76792974315898,
        "gradePct": -1.7424694138675003,
        "smoothedEle": 259.8750000259212,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47555,
        "lng": 120.88949,
        "ele": 259,
        "distanceKm": 44.811719229416404,
        "gradePct": -1.4710591672273172,
        "smoothedEle": 259.39504040268116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.475188,
        "lng": 120.889462,
        "ele": 259.5,
        "distanceKm": 44.85207146739344,
        "gradePct": 0.0899236882372621,
        "smoothedEle": 260.25489675451337,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.474809,
        "lng": 120.8894625,
        "ele": 262.6249999999997,
        "distanceKm": 44.8942144331809,
        "gradePct": 3.038096295775588,
        "smoothedEle": 262.62499999999676,
        "gradeBand": "hard"
      },
      {
        "lat": 24.47443,
        "lng": 120.889463,
        "ele": 265.75,
        "distanceKm": 44.93635739896854,
        "gradePct": 5.709031760084177,
        "smoothedEle": 265.62908112506824,
        "gradeBand": "hard"
      },
      {
        "lat": 24.474047,
        "lng": 120.889401,
        "ele": 268.5,
        "distanceKm": 44.9794048691768,
        "gradePct": 6.140261222733356,
        "smoothedEle": 267.93237737000504,
        "gradeBand": "steep"
      },
      {
        "lat": 24.4737,
        "lng": 120.889224,
        "ele": 269.25,
        "distanceKm": 45.02194496127243,
        "gradePct": 4.336777947072671,
        "smoothedEle": 268.9384958754614,
        "gradeBand": "hard"
      },
      {
        "lat": 24.473377,
        "lng": 120.88900166666667,
        "ele": 268.9166666666667,
        "distanceKm": 45.06432727933409,
        "gradePct": 1.7910302758332677,
        "smoothedEle": 268.91666671775585,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.473054,
        "lng": 120.88877933333333,
        "ele": 268.5833333333333,
        "distanceKm": 45.10670962804924,
        "gradePct": 0.005169373267108239,
        "smoothedEle": 268.5833333844206,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.472731,
        "lng": 120.888557,
        "ele": 268.25,
        "distanceKm": 45.14909200741671,
        "gradePct": -1.4103872173708765,
        "smoothedEle": 267.51412647923325,
        "gradeBand": "descent"
      },
      {
        "lat": 24.472389112986473,
        "lng": 120.88822332155881,
        "ele": 264.8648949782251,
        "distanceKm": 45.19994121988507,
        "gradePct": -3.2124047318197992,
        "smoothedEle": 265.42416156967903,
        "gradeBand": "descent"
      },
      {
        "lat": 24.472088,
        "lng": 120.887842,
        "ele": 263.75,
        "distanceKm": 45.251033241580615,
        "gradePct": -3.365583456990473,
        "smoothedEle": 264.0687559205977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.471699,
        "lng": 120.887388,
        "ele": 264,
        "distanceKm": 45.3141375427295,
        "gradePct": -1.2202431049387141,
        "smoothedEle": 263.8273082711923,
        "gradeBand": "descent"
      },
      {
        "lat": 24.471328,
        "lng": 120.88712,
        "ele": 263.5,
        "distanceKm": 45.36350870063196,
        "gradePct": -0.5079819351794795,
        "smoothedEle": 263.51304078485407,
        "gradeBand": "descent"
      },
      {
        "lat": 24.470871,
        "lng": 120.886923,
        "ele": 263,
        "distanceKm": 45.41809617247603,
        "gradePct": -1.3774936130426259,
        "smoothedEle": 262.4246163708775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.470264,
        "lng": 120.886663,
        "ele": 258,
        "distanceKm": 45.49053957449552,
        "gradePct": -4.847764095069111,
        "smoothedEle": 258.1263057125566,
        "gradeBand": "descent"
      },
      {
        "lat": 24.469823,
        "lng": 120.886567,
        "ele": 255.75,
        "distanceKm": 45.54052986454386,
        "gradePct": -4.780940742330291,
        "smoothedEle": 256.3126092369561,
        "gradeBand": "descent"
      },
      {
        "lat": 24.469591,
        "lng": 120.886645,
        "ele": 255.75,
        "distanceKm": 45.5675079447234,
        "gradePct": -3.201525157445542,
        "smoothedEle": 256.2913246014738,
        "gradeBand": "descent"
      },
      {
        "lat": 24.469043,
        "lng": 120.887041,
        "ele": 259.75,
        "distanceKm": 45.64044171464971,
        "gradePct": 3.2615495068012694,
        "smoothedEle": 259.57735690788485,
        "gradeBand": "hard"
      },
      {
        "lat": 24.468682,
        "lng": 120.887124,
        "ele": 261,
        "distanceKm": 45.681452673152336,
        "gradePct": 2.8523997672082424,
        "smoothedEle": 259.77200435705913,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.468411,
        "lng": 120.886992,
        "ele": 258.5,
        "distanceKm": 45.714415179222904,
        "gradePct": -0.4066079176424693,
        "smoothedEle": 257.99812297183064,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468211,
        "lng": 120.886751,
        "ele": 254.5,
        "distanceKm": 45.74742289410855,
        "gradePct": -4.24588350964191,
        "smoothedEle": 255.36460768291963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467888,
        "lng": 120.886496,
        "ele": 252.75,
        "distanceKm": 45.79164988595498,
        "gradePct": -5.448590694546007,
        "smoothedEle": 253.77464938066205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46734,
        "lng": 120.886517,
        "ele": 255.5,
        "distanceKm": 45.85262184527728,
        "gradePct": -0.06332097583165729,
        "smoothedEle": 255.11438465409634,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466986,
        "lng": 120.886475,
        "ele": 256,
        "distanceKm": 45.89221375991135,
        "gradePct": 1.212064909120511,
        "smoothedEle": 254.9991042775329,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466621047746095,
        "lng": 120.88623433147471,
        "ele": 252.77283257306522,
        "distanceKm": 45.93954369997216,
        "gradePct": -2.205707012871042,
        "smoothedEle": 252.62131189521494,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466306,
        "lng": 120.885926,
        "ele": 249,
        "distanceKm": 45.98645911869223,
        "gradePct": -5.014463966492215,
        "smoothedEle": 250.0013961869021,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466259,
        "lng": 120.885545,
        "ele": 249,
        "distanceKm": 46.02537279462752,
        "gradePct": -4.399789963804205,
        "smoothedEle": 248.93344911187498,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466231333333333,
        "lng": 120.88508399999999,
        "ele": 248.75,
        "distanceKm": 46.07213208412749,
        "gradePct": -2.05146625627259,
        "smoothedEle": 248.75000001278474,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46620366666667,
        "lng": 120.884623,
        "ele": 248.5,
        "distanceKm": 46.118891383855235,
        "gradePct": -0.6113249617479737,
        "smoothedEle": 248.50000001278835,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466176,
        "lng": 120.884162,
        "ele": 248.25,
        "distanceKm": 46.16565069381368,
        "gradePct": -0.9647727167197933,
        "smoothedEle": 247.8106555099372,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466109,
        "lng": 120.883925,
        "ele": 247,
        "distanceKm": 46.19076789452406,
        "gradePct": -1.3954965378700395,
        "smoothedEle": 247.2548665550677,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465989,
        "lng": 120.883785,
        "ele": 246.75,
        "distanceKm": 46.21023120745964,
        "gradePct": -1.927750882034048,
        "smoothedEle": 246.61855102388512,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465598,
        "lng": 120.883589,
        "ele": 245,
        "distanceKm": 46.258020245309844,
        "gradePct": -2.6868861229620125,
        "smoothedEle": 245.23626051943808,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465235,
        "lng": 120.883545,
        "ele": 244.25,
        "distanceKm": 46.29862897886855,
        "gradePct": -2.275215705893085,
        "smoothedEle": 244.7226478365379,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465085,
        "lng": 120.88361,
        "ele": 244.75,
        "distanceKm": 46.31655877183826,
        "gradePct": -1.757703851960887,
        "smoothedEle": 244.67782335411363,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464972,
        "lng": 120.883723,
        "ele": 245,
        "distanceKm": 46.33354943387364,
        "gradePct": -1.269542080714057,
        "smoothedEle": 244.6745328624085,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46488,
        "lng": 120.883879,
        "ele": 244.75,
        "distanceKm": 46.35236282768414,
        "gradePct": -0.1246971170639295,
        "smoothedEle": 245.2752033293427,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464675,
        "lng": 120.884564,
        "ele": 248.5,
        "distanceKm": 46.42534397446378,
        "gradePct": 4.028109449312922,
        "smoothedEle": 248.704231419672,
        "gradeBand": "hard"
      },
      {
        "lat": 24.46453,
        "lng": 120.884891,
        "ele": 250.75,
        "distanceKm": 46.462158648459,
        "gradePct": 5.544396071222571,
        "smoothedEle": 251.27985723545873,
        "gradeBand": "hard"
      },
      {
        "lat": 24.46426700549167,
        "lng": 120.88518137466478,
        "ele": 254.98878113075466,
        "distanceKm": 46.503618605237115,
        "gradePct": 7.590470137748843,
        "smoothedEle": 255.27393243226663,
        "gradeBand": "steep"
      },
      {
        "lat": 24.463966,
        "lng": 120.885432,
        "ele": 260.25,
        "distanceKm": 46.54561518464406,
        "gradePct": 8.065282359962223,
        "smoothedEle": 258.18772686130797,
        "gradeBand": "steep"
      },
      {
        "lat": 24.463448,
        "lng": 120.885713,
        "ele": 257.25,
        "distanceKm": 46.60985320569958,
        "gradePct": 0.6472888256077646,
        "smoothedEle": 256.3537884895718,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463082,
        "lng": 120.8858405,
        "ele": 252.24999999999957,
        "distanceKm": 46.65254755791576,
        "gradePct": -5.739813486244774,
        "smoothedEle": 252.25000028338846,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462716,
        "lng": 120.885968,
        "ele": 247.25,
        "distanceKm": 46.695241921467485,
        "gradePct": -9.380377027670855,
        "smoothedEle": 247.39055063233735,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46237,
        "lng": 120.886042,
        "ele": 243,
        "distanceKm": 46.73443767305011,
        "gradePct": -10.901525338672927,
        "smoothedEle": 243.08920007741418,
        "gradeBand": "descent"
      },
      {
        "lat": 24.461929,
        "lng": 120.885987,
        "ele": 238.25,
        "distanceKm": 46.78378966456779,
        "gradePct": -9.590363584582127,
        "smoothedEle": 239.10367680999374,
        "gradeBand": "descent"
      },
      {
        "lat": 24.461351,
        "lng": 120.885886,
        "ele": 236.25,
        "distanceKm": 46.84886832542166,
        "gradePct": -4.25592799759033,
        "smoothedEle": 237.66789457382652,
        "gradeBand": "descent"
      },
      {
        "lat": 24.460923,
        "lng": 120.8858115,
        "ele": 240.375,
        "distanceKm": 46.89705348021607,
        "gradePct": 1.563952836337939,
        "smoothedEle": 240.3749999172972,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460495,
        "lng": 120.885737,
        "ele": 244.5,
        "distanceKm": 46.94523863902031,
        "gradePct": 6.771634548440761,
        "smoothedEle": 244.51960820179275,
        "gradeBand": "steep"
      },
      {
        "lat": 24.460179,
        "lng": 120.885599,
        "ele": 248,
        "distanceKm": 46.98305067893715,
        "gradePct": 6.178045826906723,
        "smoothedEle": 245.76634995942385,
        "gradeBand": "steep"
      },
      {
        "lat": 24.459959,
        "lng": 120.8853,
        "ele": 244.25,
        "distanceKm": 47.02196477285069,
        "gradePct": 0.7331100199687806,
        "smoothedEle": 243.25083504999986,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459902,
        "lng": 120.884846,
        "ele": 236.25,
        "distanceKm": 47.06835163062265,
        "gradePct": -7.770247694306281,
        "smoothedEle": 237.5114440088735,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459862,
        "lng": 120.884296,
        "ele": 232.25,
        "distanceKm": 47.124197546610255,
        "gradePct": -9.841494913628084,
        "smoothedEle": 233.13308168024787,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459638,
        "lng": 120.883888,
        "ele": 232.25,
        "distanceKm": 47.172423572967695,
        "gradePct": -5.163755417580729,
        "smoothedEle": 232.0284452114934,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459336,
        "lng": 120.883657,
        "ele": 231.5,
        "distanceKm": 47.21334229603261,
        "gradePct": -2.3865935321380167,
        "smoothedEle": 231.59754805744174,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458930773814295,
        "lng": 120.883569367408,
        "ele": 231.04136242856157,
        "distanceKm": 47.25926616324833,
        "gradePct": -1.0410598399543711,
        "smoothedEle": 231.28876111630046,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458518,
        "lng": 120.883518,
        "ele": 231.5,
        "distanceKm": 47.30545811769851,
        "gradePct": -0.07808278385647216,
        "smoothedEle": 231.6024901030945,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458171,
        "lng": 120.883423,
        "ele": 232.25,
        "distanceKm": 47.3452229017602,
        "gradePct": 0.956926272801568,
        "smoothedEle": 232.34011270694813,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.457924,
        "lng": 120.883181,
        "ele": 233.25,
        "distanceKm": 47.382023948416844,
        "gradePct": 1.9398252091150152,
        "smoothedEle": 233.38315386791461,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.457811498062068,
        "lng": 120.88272720069725,
        "ele": 234.96448065487445,
        "distanceKm": 47.42962923245964,
        "gradePct": 2.8286325474988585,
        "smoothedEle": 234.87948823408277,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.457724749031033,
        "lng": 120.88226560034862,
        "ele": 236.35724032743732,
        "distanceKm": 47.47733647571008,
        "gradePct": 3.1069418900957673,
        "smoothedEle": 236.35724010801553,
        "gradeBand": "hard"
      },
      {
        "lat": 24.457638,
        "lng": 120.881804,
        "ele": 237.75,
        "distanceKm": 47.52504375046944,
        "gradePct": 2.8915998207040885,
        "smoothedEle": 237.62695669573,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.457381,
        "lng": 120.881196,
        "ele": 239.25,
        "distanceKm": 47.592895391783074,
        "gradePct": 2.982261555073038,
        "smoothedEle": 239.75359812792297,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.456981,
        "lng": 120.880794,
        "ele": 243,
        "distanceKm": 47.65317748148596,
        "gradePct": 3.458372485888994,
        "smoothedEle": 241.96711121170057,
        "gradeBand": "hard"
      },
      {
        "lat": 24.456755,
        "lng": 120.880323,
        "ele": 241.75,
        "distanceKm": 47.70706900624941,
        "gradePct": 2.8450948208647895,
        "smoothedEle": 243.11913743271805,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4566315,
        "lng": 120.8799705,
        "ele": 245.25000000000034,
        "distanceKm": 47.745299894107156,
        "gradePct": 3.5721473123605336,
        "smoothedEle": 245.2499994287389,
        "gradeBand": "hard"
      },
      {
        "lat": 24.456508,
        "lng": 120.879618,
        "ele": 248.75,
        "distanceKm": 47.7835308146084,
        "gradePct": 6.44230213707251,
        "smoothedEle": 249.05826928309327,
        "gradeBand": "steep"
      },
      {
        "lat": 24.456398,
        "lng": 120.879196,
        "ele": 253.75,
        "distanceKm": 47.827961687635536,
        "gradePct": 8.792726141543158,
        "smoothedEle": 253.07635185207263,
        "gradeBand": "steep"
      },
      {
        "lat": 24.456297,
        "lng": 120.878854,
        "ele": 256,
        "distanceKm": 47.86435457417828,
        "gradePct": 8.064707373644154,
        "smoothedEle": 255.21278727619395,
        "gradeBand": "steep"
      },
      {
        "lat": 24.456123,
        "lng": 120.878478,
        "ele": 255.75,
        "distanceKm": 47.90704841624872,
        "gradePct": 3.96905949248108,
        "smoothedEle": 255.15413067652867,
        "gradeBand": "hard"
      },
      {
        "lat": 24.455754,
        "lng": 120.877935,
        "ele": 251.5,
        "distanceKm": 47.975636556442446,
        "gradePct": -4.698339949570898,
        "smoothedEle": 250.49894713537742,
        "gradeBand": "descent"
      },
      {
        "lat": 24.455406,
        "lng": 120.877587,
        "ele": 244.5,
        "distanceKm": 48.02796355971371,
        "gradePct": -8.101285175477981,
        "smoothedEle": 245.63330224847022,
        "gradeBand": "descent"
      },
      {
        "lat": 24.455096166666667,
        "lng": 120.87727883333334,
        "ele": 242.4999999999999,
        "distanceKm": 48.0744382960102,
        "gradePct": -8.080274416059579,
        "smoothedEle": 242.50000051485867,
        "gradeBand": "descent"
      },
      {
        "lat": 24.454786333333335,
        "lng": 120.87697066666667,
        "ele": 240.5000000000001,
        "distanceKm": 48.12091308379255,
        "gradePct": -5.78889272816659,
        "smoothedEle": 240.5000005148465,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4544765,
        "lng": 120.87666250000001,
        "ele": 238.5,
        "distanceKm": 48.16738792305954,
        "gradePct": -4.475332353650565,
        "smoothedEle": 238.50000051485443,
        "gradeBand": "descent"
      },
      {
        "lat": 24.454166666666666,
        "lng": 120.87635433333334,
        "ele": 236.4999999999999,
        "distanceKm": 48.213862813811986,
        "gradePct": -4.303401922510171,
        "smoothedEle": 236.50000051484218,
        "gradeBand": "descent"
      },
      {
        "lat": 24.453856833333333,
        "lng": 120.87604616666667,
        "ele": 234.5000000000001,
        "distanceKm": 48.26033775604866,
        "gradePct": -4.303397155211594,
        "smoothedEle": 234.50000051483684,
        "gradeBand": "descent"
      },
      {
        "lat": 24.453547,
        "lng": 120.875738,
        "ele": 232.5,
        "distanceKm": 48.30681274976903,
        "gradePct": -3.208692648025544,
        "smoothedEle": 233.594700254786,
        "gradeBand": "descent"
      },
      {
        "lat": 24.453176,
        "lng": 120.875375,
        "ele": 235,
        "distanceKm": 48.362056734409855,
        "gradePct": -0.1799573975398775,
        "smoothedEle": 234.28655862525443,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45278,
        "lng": 120.874988,
        "ele": 234.25,
        "distanceKm": 48.42099241900827,
        "gradePct": 0.17754421472230067,
        "smoothedEle": 233.94982620836052,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.452388,
        "lng": 120.874586,
        "ele": 232,
        "distanceKm": 48.48062219906202,
        "gradePct": -1.0813266992278574,
        "smoothedEle": 233.0991570780685,
        "gradeBand": "descent"
      },
      {
        "lat": 24.451986,
        "lng": 120.874303,
        "ele": 234.75,
        "distanceKm": 48.53371368243123,
        "gradePct": 1.0525114115874736,
        "smoothedEle": 234.82085806254454,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.451467,
        "lng": 120.874084,
        "ele": 238.5,
        "distanceKm": 48.595535006899595,
        "gradePct": 4.76644986403095,
        "smoothedEle": 238.34921362072072,
        "gradeBand": "hard"
      },
      {
        "lat": 24.451164,
        "lng": 120.873976,
        "ele": 240.25,
        "distanceKm": 48.63095628839231,
        "gradePct": 5.263292360674381,
        "smoothedEle": 239.9947310337027,
        "gradeBand": "hard"
      },
      {
        "lat": 24.450833,
        "lng": 120.873881,
        "ele": 241.25,
        "distanceKm": 48.66899732426403,
        "gradePct": 3.972364689417305,
        "smoothedEle": 240.80698151310222,
        "gradeBand": "hard"
      },
      {
        "lat": 24.450258,
        "lng": 120.873799,
        "ele": 240.5,
        "distanceKm": 48.73347101326231,
        "gradePct": 0.7180220069906977,
        "smoothedEle": 240.7664473325129,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.450833,
        "lng": 120.873881,
        "ele": 241.25,
        "distanceKm": 48.79794470226059,
        "gradePct": 0.01819902452504581,
        "smoothedEle": 240.80698151310222,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.451164,
        "lng": 120.873976,
        "ele": 240.25,
        "distanceKm": 48.83598573813231,
        "gradePct": -0.7732972896546247,
        "smoothedEle": 239.9947310337027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.451467,
        "lng": 120.874084,
        "ele": 238.5,
        "distanceKm": 48.871407019625025,
        "gradePct": -2.532918870684845,
        "smoothedEle": 238.25737857738113,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45189,
        "lng": 120.87426,
        "ele": 235.25,
        "distanceKm": 48.92170331442148,
        "gradePct": -4.7711326220040355,
        "smoothedEle": 235.52855607755262,
        "gradeBand": "descent"
      },
      {
        "lat": 24.452192,
        "lng": 120.874466,
        "ele": 233.5,
        "distanceKm": 48.9612314136209,
        "gradePct": -5.119545278692113,
        "smoothedEle": 233.63692913432274,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45251731913266,
        "lng": 120.8746224049659,
        "ele": 232.20375913759304,
        "distanceKm": 49.00071796908189,
        "gradePct": -3.9067230411651805,
        "smoothedEle": 232.76039170678433,
        "gradeBand": "descent"
      },
      {
        "lat": 24.452864,
        "lng": 120.87472,
        "ele": 232.75,
        "distanceKm": 49.04051281680365,
        "gradePct": -1.5461895422210212,
        "smoothedEle": 233.08223315640663,
        "gradeBand": "descent"
      },
      {
        "lat": 24.453397,
        "lng": 120.874828,
        "ele": 235.25,
        "distanceKm": 49.10077955857038,
        "gradePct": 1.7990171957737036,
        "smoothedEle": 234.55990700850373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.453826,
        "lng": 120.87491,
        "ele": 234.5,
        "distanceKm": 49.14919895494894,
        "gradePct": 1.1162770027663793,
        "smoothedEle": 234.41148465948172,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.454297565004172,
        "lng": 120.87498548845656,
        "ele": 233.30051206887725,
        "distanceKm": 49.2021884604232,
        "gradePct": -1.2718772786304091,
        "smoothedEle": 233.28371095396577,
        "gradeBand": "descent"
      },
      {
        "lat": 24.454768851288048,
        "lng": 120.87506305930408,
        "ele": 232.02954195170014,
        "distanceKm": 49.25517811533756,
        "gradePct": -2.2571655833697792,
        "smoothedEle": 232.027064824407,
        "gradeBand": "descent"
      },
      {
        "lat": 24.455240080898783,
        "lng": 120.87514104835388,
        "ele": 230.74803174379738,
        "distanceKm": 49.30816782319228,
        "gradePct": -2.3938790493712876,
        "smoothedEle": 230.7480317156117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.455711310509518,
        "lng": 120.87521903740367,
        "ele": 229.46652153589477,
        "distanceKm": 49.36115752664817,
        "gradePct": -2.416215949233782,
        "smoothedEle": 229.46652150770882,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45618254012025,
        "lng": 120.87529702645347,
        "ele": 228.18501132799202,
        "distanceKm": 49.414147225705214,
        "gradePct": -2.418413730773602,
        "smoothedEle": 228.1850112998079,
        "gradeBand": "descent"
      },
      {
        "lat": 24.456653769730984,
        "lng": 120.87537501550325,
        "ele": 226.90350112008926,
        "distanceKm": 49.46713692036369,
        "gradePct": -2.0945107631131052,
        "smoothedEle": 227.2274042603194,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457125,
        "lng": 120.875453,
        "ele": 227,
        "distanceKm": 49.52012661435355,
        "gradePct": -0.21215141898369136,
        "smoothedEle": 227.8648029331783,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457606,
        "lng": 120.875604,
        "ele": 231,
        "distanceKm": 49.57575235722607,
        "gradePct": 3.0118026838235177,
        "smoothedEle": 230.34283970003753,
        "gradeBand": "hard"
      },
      {
        "lat": 24.457943891384044,
        "lng": 120.87579689780976,
        "ele": 231.7989359498795,
        "distanceKm": 49.618094457960986,
        "gradePct": 3.9302890556600127,
        "smoothedEle": 231.7706477301508,
        "gradeBand": "hard"
      },
      {
        "lat": 24.458279,
        "lng": 120.875996,
        "ele": 232.5,
        "distanceKm": 49.66045732114769,
        "gradePct": 1.9604148778687152,
        "smoothedEle": 231.62188548878623,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.458645,
        "lng": 120.876206,
        "ele": 230,
        "distanceKm": 49.70637109007925,
        "gradePct": -1.3440549693373307,
        "smoothedEle": 230.03127182701502,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459245,
        "lng": 120.876527,
        "ele": 225,
        "distanceKm": 49.780578847625634,
        "gradePct": -5.064707586438103,
        "smoothedEle": 225.86009779639522,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45960338019581,
        "lng": 120.87675172880903,
        "ele": 225.79567976204078,
        "distanceKm": 49.8264636758377,
        "gradePct": -2.9956325590750197,
        "smoothedEle": 225.9062469416558,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459962,
        "lng": 120.876976,
        "ele": 227,
        "distanceKm": 49.87234868143682,
        "gradePct": 0.423606927394297,
        "smoothedEle": 226.74631748301513,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46029108641786,
        "lng": 120.87718483397002,
        "ele": 227.25,
        "distanceKm": 49.91460756328858,
        "gradePct": 1.283501069697262,
        "smoothedEle": 227.17782360231473,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46062,
        "lng": 120.877394,
        "ele": 227.25,
        "distanceKm": 49.9568666044466,
        "gradePct": 0.0885428569227132,
        "smoothedEle": 226.55141182274318,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460967,
        "lng": 120.87760524999999,
        "ele": 224.7500000000001,
        "distanceKm": 50.00097955026606,
        "gradePct": -2.2886681000043967,
        "smoothedEle": 224.7499996431056,
        "gradeBand": "descent"
      },
      {
        "lat": 24.461314,
        "lng": 120.8778165,
        "ele": 222.2499999999998,
        "distanceKm": 50.04509246753397,
        "gradePct": -4.475941886298607,
        "smoothedEle": 222.24999964308842,
        "gradeBand": "descent"
      },
      {
        "lat": 24.461661,
        "lng": 120.87802775,
        "ele": 219.7499999999999,
        "distanceKm": 50.08920535624896,
        "gradePct": -5.480815237222096,
        "smoothedEle": 219.7499996430845,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462008,
        "lng": 120.878239,
        "ele": 217.25,
        "distanceKm": 50.13331821641072,
        "gradePct": -4.868562139581188,
        "smoothedEle": 218.04871660521687,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46238,
        "lng": 120.878451,
        "ele": 217.62499999999997,
        "distanceKm": 50.179916959216605,
        "gradePct": -2.6513988620771634,
        "smoothedEle": 217.62500005471972,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462752,
        "lng": 120.878663,
        "ele": 218,
        "distanceKm": 50.22651567283864,
        "gradePct": -0.5460971652961668,
        "smoothedEle": 217.76497041764253,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463284,
        "lng": 120.878905,
        "ele": 217.25,
        "distanceKm": 50.29054176073228,
        "gradePct": 0.08927172997826333,
        "smoothedEle": 217.74618591297616,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4636735,
        "lng": 120.8790965,
        "ele": 218.6249999999999,
        "distanceKm": 50.337991398175575,
        "gradePct": 0.8633965941746046,
        "smoothedEle": 218.62500016834392,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.464063,
        "lng": 120.879288,
        "ele": 220,
        "distanceKm": 50.38544101113247,
        "gradePct": 3.030152907013601,
        "smoothedEle": 220.77783532021044,
        "gradeBand": "hard"
      },
      {
        "lat": 24.464609,
        "lng": 120.879516,
        "ele": 226.5,
        "distanceKm": 50.450391188636104,
        "gradePct": 7.187619113599919,
        "smoothedEle": 226.37520985151198,
        "gradeBand": "steep"
      },
      {
        "lat": 24.464946,
        "lng": 120.879544,
        "ele": 229.75,
        "distanceKm": 50.48797093739649,
        "gradePct": 7.708098791473366,
        "smoothedEle": 228.7039619197756,
        "gradeBand": "steep"
      },
      {
        "lat": 24.46547948348909,
        "lng": 120.8793978517669,
        "ele": 229.58681597910987,
        "distanceKm": 50.54910806662288,
        "gradePct": 3.2884808246813675,
        "smoothedEle": 229.55311184864536,
        "gradeBand": "hard"
      },
      {
        "lat": 24.466013,
        "lng": 120.879251,
        "ele": 229.25,
        "distanceKm": 50.61026600917757,
        "gradePct": 1.1178691071348918,
        "smoothedEle": 230.1314932380187,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46645,
        "lng": 120.879033,
        "ele": 232.75,
        "distanceKm": 50.663632860036245,
        "gradePct": 2.2434445225341015,
        "smoothedEle": 231.93391989002694,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466739,
        "lng": 120.878815,
        "ele": 232.75,
        "distanceKm": 50.70261354408716,
        "gradePct": 4.418995643338655,
        "smoothedEle": 234.47811817681372,
        "gradeBand": "hard"
      },
      {
        "lat": 24.46706,
        "lng": 120.878639,
        "ele": 238.5,
        "distanceKm": 50.74250508576319,
        "gradePct": 5.872839981710657,
        "smoothedEle": 237.09318463102852,
        "gradeBand": "hard"
      },
      {
        "lat": 24.467439,
        "lng": 120.8784,
        "ele": 239.75,
        "distanceKm": 50.79109663650836,
        "gradePct": 5.332741198493361,
        "smoothedEle": 239.05917178324748,
        "gradeBand": "hard"
      },
      {
        "lat": 24.467791300624864,
        "lng": 120.87800937767913,
        "ele": 238.08336776329952,
        "distanceKm": 50.84675267138245,
        "gradePct": 1.1144028701684603,
        "smoothedEle": 238.3794424559647,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.468108,
        "lng": 120.87758,
        "ele": 237.75,
        "distanceKm": 50.90268679319578,
        "gradePct": 0.9659843442026248,
        "smoothedEle": 239.8836050912316,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.468303,
        "lng": 120.87704,
        "ele": 247.75,
        "distanceKm": 50.961483705696025,
        "gradePct": 7.5094944048092955,
        "smoothedEle": 246.2850791559417,
        "gradeBand": "steep"
      },
      {
        "lat": 24.468259,
        "lng": 120.876643,
        "ele": 249.75,
        "distanceKm": 51.00196035260307,
        "gradePct": 10.101081676970493,
        "smoothedEle": 249.96515155855082,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.46808563037406,
        "lng": 120.87623768819712,
        "ele": 252.71437924962373,
        "distanceKm": 51.04728549346801,
        "gradePct": 5.812567064468399,
        "smoothedEle": 250.5518254710211,
        "gradeBand": "hard"
      },
      {
        "lat": 24.467869,
        "lng": 120.875856,
        "ele": 247.75,
        "distanceKm": 51.092810659007085,
        "gradePct": -1.2892350564786839,
        "smoothedEle": 247.84404090298293,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467704,
        "lng": 120.875496,
        "ele": 243.5,
        "distanceKm": 51.133604645541695,
        "gradePct": -7.000313751864283,
        "smoothedEle": 243.3744312639021,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467519,
        "lng": 120.875004,
        "ele": 237.5,
        "distanceKm": 51.187481428133786,
        "gradePct": -10.444595131130875,
        "smoothedEle": 237.71642230444354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467517,
        "lng": 120.874675,
        "ele": 234,
        "distanceKm": 51.220780044259875,
        "gradePct": -9.61228967412382,
        "smoothedEle": 235.16727421779342,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4674255,
        "lng": 120.8742505,
        "ele": 234,
        "distanceKm": 51.26493170959526,
        "gradePct": -6.084539021624493,
        "smoothedEle": 234,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467334,
        "lng": 120.87382600000001,
        "ele": 234,
        "distanceKm": 51.30908340531135,
        "gradePct": -2.0627007629379355,
        "smoothedEle": 234,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4672425,
        "lng": 120.8734015,
        "ele": 234,
        "distanceKm": 51.353235131409434,
        "gradePct": -0.3092321444504718,
        "smoothedEle": 234,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467151,
        "lng": 120.872977,
        "ele": 234,
        "distanceKm": 51.39738688788662,
        "gradePct": -0.45666397734620345,
        "smoothedEle": 233.5433360226538,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467093,
        "lng": 120.872549,
        "ele": 232.37499999999986,
        "distanceKm": 51.441182090674786,
        "gradePct": -1.6249998396477334,
        "smoothedEle": 232.37500016035224,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467035,
        "lng": 120.872121,
        "ele": 230.75,
        "distanceKm": 51.48497731319863,
        "gradePct": -3.0225475429090376,
        "smoothedEle": 230.64914137408815,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466988,
        "lng": 120.871474,
        "ele": 227.5,
        "distanceKm": 51.55066823978905,
        "gradePct": -4.987887763727386,
        "smoothedEle": 227.01328728846957,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466837416375128,
        "lng": 120.87111469522506,
        "ele": 224.01719064916426,
        "distanceKm": 51.59070313408004,
        "gradePct": -6.691294675906296,
        "smoothedEle": 223.64093460201067,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466648,
        "lng": 120.870774,
        "ele": 219.25,
        "distanceKm": 51.631108655649086,
        "gradePct": -8.138317646932022,
        "smoothedEle": 219.95755132517976,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466584,
        "lng": 120.870419,
        "ele": 217,
        "distanceKm": 51.667736222190484,
        "gradePct": -7.764244015024903,
        "smoothedEle": 217.81131607762507,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466656,
        "lng": 120.869825,
        "ele": 217.5,
        "distanceKm": 51.72838574170415,
        "gradePct": -2.5937019462560813,
        "smoothedEle": 217.61207128770133,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466719,
        "lng": 120.869397,
        "ele": 218.25,
        "distanceKm": 51.77226641132624,
        "gradePct": 0.02315826933772736,
        "smoothedEle": 217.8195918451737,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46671353516054,
        "lng": 120.86888135139354,
        "ele": 217.3298102172611,
        "distanceKm": 51.82445873729307,
        "gradePct": -0.4138377180064138,
        "smoothedEle": 217.21113449908708,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466677181049068,
        "lng": 120.86836518296673,
        "ele": 215.9070407971423,
        "distanceKm": 51.87685631074459,
        "gradePct": -1.8552984590245125,
        "smoothedEle": 215.91078440820732,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466641,
        "lng": 120.867849,
        "ele": 214.5,
        "distanceKm": 51.92925388532833,
        "gradePct": -2.556056509989239,
        "smoothedEle": 214.53607684510024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466673,
        "lng": 120.867453,
        "ele": 213.5,
        "distanceKm": 51.969490699744775,
        "gradePct": -2.710588380348828,
        "smoothedEle": 213.38298832723586,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466889,
        "lng": 120.866992,
        "ele": 211.75,
        "distanceKm": 52.02196754538112,
        "gradePct": -2.8207969864403872,
        "smoothedEle": 211.906444940486,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466975,
        "lng": 120.866526,
        "ele": 210.75,
        "distanceKm": 52.070091013341944,
        "gradePct": -1.3689003790934553,
        "smoothedEle": 211.99719689722028,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466969,
        "lng": 120.866026,
        "ele": 214.75,
        "distanceKm": 52.12070030149073,
        "gradePct": 2.627872115922335,
        "smoothedEle": 214.5699735552523,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466759,
        "lng": 120.86569,
        "ele": 217.5,
        "distanceKm": 52.16195209841608,
        "gradePct": 4.7802959878720115,
        "smoothedEle": 216.76214439741028,
        "gradeBand": "hard"
      },
      {
        "lat": 24.466414,
        "lng": 120.865476,
        "ele": 217.75,
        "distanceKm": 52.206006346666776,
        "gradePct": 4.183342699761565,
        "smoothedEle": 218.00633352974603,
        "gradeBand": "hard"
      },
      {
        "lat": 24.466099,
        "lng": 120.865038,
        "ele": 219.25,
        "distanceKm": 52.26250425074241,
        "gradePct": 1.8968950355981933,
        "smoothedEle": 218.67463343247712,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465836677902793,
        "lng": 120.86468777024066,
        "ele": 218.32901630119804,
        "distanceKm": 52.30840973236729,
        "gradePct": -0.10929117105879825,
        "smoothedEle": 217.92547142090035,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465554838951398,
        "lng": 120.86435588512033,
        "ele": 215.914508150599,
        "distanceKm": 52.35434938651789,
        "gradePct": -2.663662721867515,
        "smoothedEle": 215.91450881424015,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465273,
        "lng": 120.864024,
        "ele": 213.5,
        "distanceKm": 52.40028909563962,
        "gradePct": -5.231172601107784,
        "smoothedEle": 212.82682487835555,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465223,
        "lng": 120.863921,
        "ele": 211.5,
        "distanceKm": 52.412103759419004,
        "gradePct": -5.75387007742825,
        "smoothedEle": 212.00989898836423,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465211,
        "lng": 120.863843,
        "ele": 210.75,
        "distanceKm": 52.42011020485939,
        "gradePct": -5.957002224875539,
        "smoothedEle": 211.45629266581537,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465251,
        "lng": 120.863461,
        "ele": 209,
        "distanceKm": 52.45902787522767,
        "gradePct": -5.939993036931242,
        "smoothedEle": 209.66006680256407,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465428,
        "lng": 120.862787,
        "ele": 209.5,
        "distanceKm": 52.53002662864764,
        "gradePct": -1.5038848549213313,
        "smoothedEle": 209.49472016641647,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465536,
        "lng": 120.862346,
        "ele": 209.75,
        "distanceKm": 52.57624800235441,
        "gradePct": 0.06281329606957707,
        "smoothedEle": 209.68277671713344,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46562,
        "lng": 120.86177,
        "ele": 209.75,
        "distanceKm": 52.635288995685684,
        "gradePct": 0.153714236855135,
        "smoothedEle": 209.66984490050302,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465658,
        "lng": 120.861418,
        "ele": 209.5,
        "distanceKm": 52.6711649160881,
        "gradePct": -0.621737815295651,
        "smoothedEle": 209.04035782740016,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465605,
        "lng": 120.861044,
        "ele": 207.75,
        "distanceKm": 52.70947379927704,
        "gradePct": -1.6773270305327845,
        "smoothedEle": 207.9981722021113,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465601,
        "lng": 120.860517,
        "ele": 206.5,
        "distanceKm": 52.76281378807937,
        "gradePct": -2.468437231600881,
        "smoothedEle": 206.71845139050384,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465622,
        "lng": 120.860108,
        "ele": 206.25,
        "distanceKm": 52.80427484449409,
        "gradePct": -1.8864937227053549,
        "smoothedEle": 206.2531150207585,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465823,
        "lng": 120.859432,
        "ele": 205.75,
        "distanceKm": 52.87625138100484,
        "gradePct": 0.23694796366086399,
        "smoothedEle": 206.80458311235196,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466052,
        "lng": 120.858833,
        "ele": 211.5,
        "distanceKm": 52.942007052182966,
        "gradePct": 4.436185672801792,
        "smoothedEle": 210.9783964124504,
        "gradeBand": "hard"
      },
      {
        "lat": 24.466076,
        "lng": 120.858303,
        "ele": 213.5,
        "distanceKm": 52.99571496557503,
        "gradePct": 5.5275905899449995,
        "smoothedEle": 213.56761646626163,
        "gradeBand": "hard"
      },
      {
        "lat": 24.465917,
        "lng": 120.857811,
        "ele": 215.75,
        "distanceKm": 53.04855609158916,
        "gradePct": 4.1381571572929925,
        "smoothedEle": 215.43227807089724,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4657005,
        "lng": 120.857456,
        "ele": 216.5,
        "distanceKm": 53.0918053173923,
        "gradePct": 3.120864681166479,
        "smoothedEle": 216.49999980755211,
        "gradeBand": "hard"
      },
      {
        "lat": 24.465484,
        "lng": 120.857101,
        "ele": 217.25,
        "distanceKm": 53.13505459451487,
        "gradePct": 1.298369452836549,
        "smoothedEle": 216.25420568574563,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46522,
        "lng": 120.856604,
        "ele": 213.5,
        "distanceKm": 53.19329570899679,
        "gradePct": -2.6391364341908936,
        "smoothedEle": 213.85239318565064,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46513,
        "lng": 120.856313,
        "ele": 212.25,
        "distanceKm": 53.2244019621467,
        "gradePct": -4.045855793367906,
        "smoothedEle": 212.26889089079577,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4649115,
        "lng": 120.85593750000001,
        "ele": 210.7500000000001,
        "distanceKm": 53.269509291877725,
        "gradePct": -4.083323756911311,
        "smoothedEle": 210.7500004167063,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464693,
        "lng": 120.855562,
        "ele": 209.25,
        "distanceKm": 53.31461667716959,
        "gradePct": -3.5441417733571323,
        "smoothedEle": 209.22288115354058,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464393,
        "lng": 120.855196,
        "ele": 207.5,
        "distanceKm": 53.36446656782441,
        "gradePct": -3.419802524065099,
        "smoothedEle": 207.50000057379563,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464093,
        "lng": 120.85483,
        "ele": 205.75,
        "distanceKm": 53.414316524055884,
        "gradePct": -3.3808018762225145,
        "smoothedEle": 205.85224101910097,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463692,
        "lng": 120.854258,
        "ele": 203.25,
        "distanceKm": 53.48739077494601,
        "gradePct": -3.521426132127693,
        "smoothedEle": 203.22082891541282,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463436,
        "lng": 120.853698,
        "ele": 201.25,
        "distanceKm": 53.550816480099954,
        "gradePct": -3.014957439876966,
        "smoothedEle": 201.5229160017463,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463369,
        "lng": 120.853413,
        "ele": 201.25,
        "distanceKm": 53.5806086348648,
        "gradePct": -2.950993720352259,
        "smoothedEle": 200.51406083242532,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463396,
        "lng": 120.85312,
        "ele": 199.5,
        "distanceKm": 53.6104155314249,
        "gradePct": -2.6721061636147474,
        "smoothedEle": 199.93234755715662,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463443,
        "lng": 120.85292,
        "ele": 198.25,
        "distanceKm": 53.631321816308606,
        "gradePct": -1.9556455436297717,
        "smoothedEle": 200.08914469378448,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46364,
        "lng": 120.8525715,
        "ele": 202,
        "distanceKm": 53.67284292005935,
        "gradePct": 1.2229687512533016,
        "smoothedEle": 202.0000008788666,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463837,
        "lng": 120.852223,
        "ele": 205.75,
        "distanceKm": 53.71436397693721,
        "gradePct": 4.781806287604371,
        "smoothedEle": 204.74376718610338,
        "gradeBand": "hard"
      },
      {
        "lat": 24.464160156477867,
        "lng": 120.85179264230094,
        "ele": 206.16461068767484,
        "distanceKm": 53.770830429768075,
        "gradePct": 4.07673255185395,
        "smoothedEle": 205.98411596217755,
        "gradeBand": "hard"
      },
      {
        "lat": 24.464483,
        "lng": 120.851362,
        "ele": 205.75,
        "distanceKm": 53.827296889250924,
        "gradePct": -0.4754530085580132,
        "smoothedEle": 204.5524000578368,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464772,
        "lng": 120.850896,
        "ele": 199.75,
        "distanceKm": 53.88436864598369,
        "gradePct": -5.811114373056287,
        "smoothedEle": 199.82973800132376,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464975,
        "lng": 120.850684,
        "ele": 196.5,
        "distanceKm": 53.91551215140033,
        "gradePct": -8.33364107644328,
        "smoothedEle": 196.5175628512254,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465064,
        "lng": 120.850381,
        "ele": 193.25,
        "distanceKm": 53.94773644766161,
        "gradePct": -8.438052249768042,
        "smoothedEle": 194.42298359424186,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465191,
        "lng": 120.849684,
        "ele": 193.25,
        "distanceKm": 54.01968028558681,
        "gradePct": -4.490008729461856,
        "smoothedEle": 191.75662539964233,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465396,
        "lng": 120.849266,
        "ele": 187.5,
        "distanceKm": 54.06773682122653,
        "gradePct": -4.721192059040267,
        "smoothedEle": 188.96054445292435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4656405,
        "lng": 120.84888149999999,
        "ele": 187.375,
        "distanceKm": 54.11520858533262,
        "gradePct": -4.547354081148022,
        "smoothedEle": 187.37499996128582,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465885,
        "lng": 120.848497,
        "ele": 187.25,
        "distanceKm": 54.16268028749605,
        "gradePct": -0.9946221529272492,
        "smoothedEle": 188.26012739472617,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466063248214045,
        "lng": 120.84814315082262,
        "ele": 190.55906337950103,
        "distanceKm": 54.203612382382325,
        "gradePct": 2.9095357844445444,
        "smoothedEle": 190.67184588804307,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466241,
        "lng": 120.847789,
        "ele": 194.25,
        "distanceKm": 54.24454446389973,
        "gradePct": 6.12034526028472,
        "smoothedEle": 194.0423235206514,
        "gradeBand": "steep"
      },
      {
        "lat": 24.466424,
        "lng": 120.84721200000001,
        "ele": 198.87499999999972,
        "distanceKm": 54.30638648605015,
        "gradePct": 7.974727455986624,
        "smoothedEle": 198.87500185331453,
        "gradeBand": "steep"
      },
      {
        "lat": 24.466607,
        "lng": 120.846635,
        "ele": 203.5,
        "distanceKm": 54.36822842805725,
        "gradePct": 6.616527687083865,
        "smoothedEle": 202.50964742098364,
        "gradeBand": "steep"
      },
      {
        "lat": 24.466619,
        "lng": 120.846216,
        "ele": 203.125,
        "distanceKm": 54.41065643449421,
        "gradePct": 3.999039830190014,
        "smoothedEle": 203.12499999242345,
        "gradeBand": "hard"
      },
      {
        "lat": 24.466631,
        "lng": 120.845797,
        "ele": 202.75,
        "distanceKm": 54.453084436890336,
        "gradePct": 1.2383600982746652,
        "smoothedEle": 202.85794749550726,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466518,
        "lng": 120.845266,
        "ele": 202.75,
        "distanceKm": 54.50827631524456,
        "gradePct": -2.1221012463933544,
        "smoothedEle": 200.9683787998058,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466324,
        "lng": 120.844991,
        "ele": 197.25,
        "distanceKm": 54.543490089782956,
        "gradePct": -4.856312504564913,
        "smoothedEle": 198.06202421990915,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46617,
        "lng": 120.844297,
        "ele": 190.25,
        "distanceKm": 54.615787318917675,
        "gradePct": -9.128864181859695,
        "smoothedEle": 191.21959698028468,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466246,
        "lng": 120.843894,
        "ele": 190.25,
        "distanceKm": 54.65744137278103,
        "gradePct": -6.86218399889613,
        "smoothedEle": 189.87944883179614,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466309145723265,
        "lng": 120.84348652203573,
        "ele": 188.97587440651452,
        "distanceKm": 54.699275808868265,
        "gradePct": -3.865024376186911,
        "smoothedEle": 188.9172715827668,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466367,
        "lng": 120.843078,
        "ele": 187.5,
        "distanceKm": 54.74111991293874,
        "gradePct": -2.834223543457471,
        "smoothedEle": 187.57034042503162,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466494,
        "lng": 120.84268100000001,
        "ele": 186.2500000000001,
        "distanceKm": 54.78370974223156,
        "gradePct": -3.0252858545417918,
        "smoothedEle": 186.2499997610539,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466621,
        "lng": 120.842284,
        "ele": 185,
        "distanceKm": 54.826299533292996,
        "gradePct": -0.8409777788877643,
        "smoothedEle": 187.2064198459037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466777,
        "lng": 120.841871,
        "ele": 191.75,
        "distanceKm": 54.87155565062521,
        "gradePct": 3.3510086252619633,
        "smoothedEle": 189.97780119455285,
        "gradeBand": "hard"
      },
      {
        "lat": 24.466759,
        "lng": 120.8414795,
        "ele": 191.99999999999997,
        "distanceKm": 54.91122986295281,
        "gradePct": 5.131993063034612,
        "smoothedEle": 191.9999999929269,
        "gradeBand": "hard"
      },
      {
        "lat": 24.466741,
        "lng": 120.841088,
        "ele": 192.25,
        "distanceKm": 54.950904080938855,
        "gradePct": 3.7907424278745085,
        "smoothedEle": 192.50388862277373,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4667468928186,
        "lng": 120.84067499814236,
        "ele": 193.3816988376746,
        "distanceKm": 54.992709119641944,
        "gradePct": 1.8853424990298053,
        "smoothedEle": 192.94133824660526,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466753,
        "lng": 120.840262,
        "ele": 193,
        "distanceKm": 55.034514160781264,
        "gradePct": 0.7369471561713008,
        "smoothedEle": 193.03267302664042,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466782579236124,
        "lng": 120.83978851667142,
        "ele": 192.6982963643343,
        "distanceKm": 55.0825481220129,
        "gradePct": -0.0950618162795238,
        "smoothedEle": 192.73995133822027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466830674643784,
        "lng": 120.83931661584806,
        "ele": 192.55683928299163,
        "distanceKm": 55.13060764663601,
        "gradePct": -0.3154712643094752,
        "smoothedEle": 192.7086668918838,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466881,
        "lng": 120.838845,
        "ele": 193,
        "distanceKm": 55.17866673029428,
        "gradePct": -0.30949789899133423,
        "smoothedEle": 192.4541068608532,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466863,
        "lng": 120.838141,
        "ele": 190,
        "distanceKm": 55.24994657892718,
        "gradePct": -2.499310682894979,
        "smoothedEle": 190.10692148012163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466867,
        "lng": 120.837793,
        "ele": 189,
        "distanceKm": 55.285170420850214,
        "gradePct": -3.3161340161898734,
        "smoothedEle": 188.92381179232572,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466919,
        "lng": 120.837203,
        "ele": 187,
        "distanceKm": 55.345163521044306,
        "gradePct": -3.427108389185926,
        "smoothedEle": 186.83731515853538,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467046,
        "lng": 120.836678,
        "ele": 184.5,
        "distanceKm": 55.400143213882416,
        "gradePct": -4.289804177012026,
        "smoothedEle": 184.1132696944685,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466941,
        "lng": 120.836241,
        "ele": 181,
        "distanceKm": 55.44588697702213,
        "gradePct": -5.768253467315136,
        "smoothedEle": 181.0332170570816,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46678767510656,
        "lng": 120.83588843913927,
        "ele": 177.96869279698078,
        "distanceKm": 55.485433382146574,
        "gradePct": -6.7787655351705665,
        "smoothedEle": 178.06332326229278,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466623,
        "lng": 120.835542,
        "ele": 175.25,
        "distanceKm": 55.52498987609295,
        "gradePct": -6.259498184128855,
        "smoothedEle": 176.18077781198366,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466695,
        "lng": 120.834846,
        "ele": 176,
        "distanceKm": 55.595885558940296,
        "gradePct": -1.89915864103523,
        "smoothedEle": 175.66673181299305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466677296232284,
        "lng": 120.83445634712236,
        "ele": 175.2592572588843,
        "distanceKm": 55.635371432984236,
        "gradePct": -0.8518012532658923,
        "smoothedEle": 175.25370261298613,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466653,
        "lng": 120.834067,
        "ele": 174.5,
        "distanceKm": 55.67486976746963,
        "gradePct": -1.5673498550005212,
        "smoothedEle": 174.25176194908983,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466621,
        "lng": 120.83362,
        "ele": 172.75,
        "distanceKm": 55.72025037381328,
        "gradePct": -2.7713808374100957,
        "smoothedEle": 172.64049071887172,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466611,
        "lng": 120.833148,
        "ele": 170.5,
        "distanceKm": 55.768034464869146,
        "gradePct": -3.7345432016163937,
        "smoothedEle": 170.69060751727062,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466745763358148,
        "lng": 120.83278930423491,
        "ele": 169.1930603804894,
        "distanceKm": 55.80730917160738,
        "gradePct": -3.8723217522355657,
        "smoothedEle": 169.22765570510984,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466877,
        "lng": 120.832429,
        "ele": 168,
        "distanceKm": 55.84658699196682,
        "gradePct": -3.150409754232994,
        "smoothedEle": 168.41538584771112,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467293,
        "lng": 120.832092,
        "ele": 168.25,
        "distanceKm": 55.90405922078232,
        "gradePct": -1.3216079686653,
        "smoothedEle": 168.02710583830742,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467873,
        "lng": 120.831951,
        "ele": 167.25,
        "distanceKm": 55.970112331239925,
        "gradePct": -1.4530229704423412,
        "smoothedEle": 166.8034266546366,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468339693586323,
        "lng": 120.83179194061772,
        "ele": 164.55082437021244,
        "distanceKm": 56.02444595916143,
        "gradePct": -3.1785776446683776,
        "smoothedEle": 164.4708498798604,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468804,
        "lng": 120.831624,
        "ele": 161.5,
        "distanceKm": 56.07880044182352,
        "gradePct": -4.659958009000254,
        "smoothedEle": 161.7704826010959,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46914501942971,
        "lng": 120.83153244583798,
        "ele": 160.10312505899995,
        "distanceKm": 56.11783583148747,
        "gradePct": -4.637759721964916,
        "smoothedEle": 160.11686709090037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.469483,
        "lng": 120.831426,
        "ele": 158.75,
        "distanceKm": 56.156931239160215,
        "gradePct": -4.011728684304443,
        "smoothedEle": 158.84523062289477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.469904,
        "lng": 120.831273,
        "ele": 157.5,
        "distanceKm": 56.20623891475444,
        "gradePct": -3.015066085814069,
        "smoothedEle": 157.5930690965612,
        "gradeBand": "descent"
      },
      {
        "lat": 24.470251,
        "lng": 120.831157,
        "ele": 156.75,
        "distanceKm": 56.24657013316113,
        "gradePct": -2.5561676073421533,
        "smoothedEle": 156.62607344776498,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47072348553075,
        "lng": 120.83100994398467,
        "ele": 155.218166506933,
        "distanceKm": 56.3011755801913,
        "gradePct": -2.6025210546743467,
        "smoothedEle": 155.11913071504088,
        "gradeBand": "descent"
      },
      {
        "lat": 24.471196,
        "lng": 120.830863,
        "ele": 153.25,
        "distanceKm": 56.35578101895591,
        "gradePct": -3.0937675232898827,
        "smoothedEle": 153.27811374832228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.471641,
        "lng": 120.8307,
        "ele": 151.5,
        "distanceKm": 56.40794027303823,
        "gradePct": -2.9724532380483457,
        "smoothedEle": 151.91860652677963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.472251,
        "lng": 120.830539,
        "ele": 151.5,
        "distanceKm": 56.47769894132531,
        "gradePct": -1.1477527642893626,
        "smoothedEle": 151.55908031166402,
        "gradeBand": "descent"
      },
      {
        "lat": 24.472706,
        "lng": 120.830392,
        "ele": 151.75,
        "distanceKm": 56.53043469199408,
        "gradePct": -0.19183806784425608,
        "smoothedEle": 151.61083543574262,
        "gradeBand": "descent"
      },
      {
        "lat": 24.473314,
        "lng": 120.830323,
        "ele": 151.25,
        "distanceKm": 56.59840099095674,
        "gradePct": -0.37571992279765176,
        "smoothedEle": 151.20367748180178,
        "gradeBand": "descent"
      },
      {
        "lat": 24.473744285867873,
        "lng": 120.83030232221503,
        "ele": 150.76483322539482,
        "distanceKm": 56.646292405864756,
        "gradePct": -0.7586914223601474,
        "smoothedEle": 150.75714701586594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.474174,
        "lng": 120.830268,
        "ele": 150.25,
        "distanceKm": 56.69420059294121,
        "gradePct": -1.323984699964664,
        "smoothedEle": 149.9048556270684,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47457134182689,
        "lng": 120.83023646228466,
        "ele": 148.5292939537622,
        "distanceKm": 56.738498184700134,
        "gradePct": -2.173506952174532,
        "smoothedEle": 148.65631190299558,
        "gradeBand": "descent"
      },
      {
        "lat": 24.474968670913448,
        "lng": 120.83020473114233,
        "ele": 147.2646469768812,
        "distanceKm": 56.782795777552884,
        "gradePct": -2.8431014491469733,
        "smoothedEle": 147.26464697223196,
        "gradeBand": "descent"
      },
      {
        "lat": 24.475366,
        "lng": 120.830173,
        "ele": 146,
        "distanceKm": 56.82709336967037,
        "gradePct": -2.835938507399436,
        "smoothedEle": 146.14182225238983,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47580430042466,
        "lng": 120.83014339621897,
        "ele": 145.17767274922912,
        "distanceKm": 56.87592221947901,
        "gradePct": -2.2750622094328565,
        "smoothedEle": 145.2055262870435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.476242620132748,
        "lng": 120.83011413961695,
        "ele": 144.46420977222067,
        "distanceKm": 56.92475106572715,
        "gradePct": -1.737174818748603,
        "smoothedEle": 144.46401853358404,
        "gradeBand": "descent"
      },
      {
        "lat": 24.476681,
        "lng": 120.830086,
        "ele": 143.75,
        "distanceKm": 56.97357986527375,
        "gradePct": -1.5031813559586524,
        "smoothedEle": 143.74725970586232,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47707833333333,
        "lng": 120.830047,
        "ele": 143.08333333333337,
        "distanceKm": 57.01793731990231,
        "gradePct": -1.4841577564924722,
        "smoothedEle": 143.0833333296386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477475666666667,
        "lng": 120.830008,
        "ele": 142.41666666666663,
        "distanceKm": 57.06229477342244,
        "gradePct": -1.496247109369115,
        "smoothedEle": 142.41666666297007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477873,
        "lng": 120.829969,
        "ele": 141.75,
        "distanceKm": 57.106652225833585,
        "gradePct": -1.316769387243947,
        "smoothedEle": 141.9354751586295,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478361606272443,
        "lng": 120.82993430903893,
        "ele": 141.75,
        "distanceKm": 57.161096150867834,
        "gradePct": -0.93013989474757,
        "smoothedEle": 141.50454136643899,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478850206741576,
        "lng": 120.82989951643384,
        "ele": 140.672388557322,
        "distanceKm": 57.215540095347286,
        "gradePct": -1.1949646603087958,
        "smoothedEle": 140.67016135814345,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47933880698502,
        "lng": 120.82986471997734,
        "ele": 139.58499929150005,
        "distanceKm": 57.269984039107854,
        "gradePct": -1.8554651108398466,
        "smoothedEle": 139.51286503258174,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479827403644464,
        "lng": 120.82982986257277,
        "ele": 138.1809264938456,
        "distanceKm": 57.32442798358248,
        "gradePct": -2.306424805896877,
        "smoothedEle": 138.1748097463225,
        "gradeBand": "descent"
      },
      {
        "lat": 24.480316,
        "lng": 120.829795,
        "ele": 136.75,
        "distanceKm": 57.37887192733738,
        "gradePct": -2.3317881844582997,
        "smoothedEle": 136.96264142901563,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48080247965821,
        "lng": 120.82974426410767,
        "ele": 136.25377296675512,
        "distanceKm": 57.43320919533153,
        "gradePct": -1.6701717181898963,
        "smoothedEle": 136.30912855663513,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481289,
        "lng": 120.829694,
        "ele": 136,
        "distanceKm": 57.487546474809,
        "gradePct": -0.8003730577365105,
        "smoothedEle": 136.05793982028553,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481659,
        "lng": 120.829626,
        "ele": 136,
        "distanceKm": 57.529260184898106,
        "gradePct": -0.3566231997534664,
        "smoothedEle": 136,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482161,
        "lng": 120.829506,
        "ele": 136,
        "distanceKm": 57.586385790837056,
        "gradePct": -0.13429323331223295,
        "smoothedEle": 135.9290121618239,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482542,
        "lng": 120.829422,
        "ele": 135.75,
        "distanceKm": 57.62959552029617,
        "gradePct": -0.6487933909515867,
        "smoothedEle": 135.3507899003837,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482953800104898,
        "lng": 120.82933307497706,
        "ele": 133.9867786885565,
        "distanceKm": 57.676261553114536,
        "gradePct": -1.6495223112601758,
        "smoothedEle": 134.29207085933007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48336540005245,
        "lng": 120.82924303748852,
        "ele": 133.36838934427826,
        "distanceKm": 57.722927591737395,
        "gradePct": -2.071629198732892,
        "smoothedEle": 133.36838932628322,
        "gradeBand": "descent"
      },
      {
        "lat": 24.483777,
        "lng": 120.829153,
        "ele": 132.75,
        "distanceKm": 57.76959362454028,
        "gradePct": -1.5801940885848527,
        "smoothedEle": 132.86315303143422,
        "gradeBand": "descent"
      },
      {
        "lat": 24.484298,
        "lng": 120.829066,
        "ele": 132.5,
        "distanceKm": 57.8281914216765,
        "gradePct": -0.9204053113427488,
        "smoothedEle": 132.39099442796655,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48467635460631,
        "lng": 120.82902088400343,
        "ele": 131.94260322914946,
        "distanceKm": 57.8705095928536,
        "gradePct": -0.9604407802350614,
        "smoothedEle": 131.8953317293916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485054677303154,
        "lng": 120.82897544200172,
        "ele": 131.22130161457474,
        "distanceKm": 57.912827807268314,
        "gradePct": -1.2934869386855996,
        "smoothedEle": 131.2213016091575,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485433,
        "lng": 120.82893,
        "ele": 130.5,
        "distanceKm": 57.95514602018095,
        "gradePct": -1.7002200562596146,
        "smoothedEle": 130.37506155468074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485916772312052,
        "lng": 120.82886942473623,
        "ele": 129.04785326571115,
        "distanceKm": 58.00928725560222,
        "gradePct": -2.245340858130927,
        "smoothedEle": 129.03235345327548,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48640060473267,
        "lng": 120.82880957009824,
        "ele": 127.52816047990659,
        "distanceKm": 58.06342692227717,
        "gradePct": -2.6312685053351483,
        "smoothedEle": 127.53842584179978,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486884299534502,
        "lng": 120.82874825510739,
        "ele": 126.05318649488252,
        "distanceKm": 58.11756811661903,
        "gradePct": -2.768599453713623,
        "smoothedEle": 126.03525228022015,
        "gradeBand": "descent"
      },
      {
        "lat": 24.487368,
        "lng": 120.828687,
        "ele": 124.5,
        "distanceKm": 58.17170923972485,
        "gradePct": -2.413787657354456,
        "smoothedEle": 124.89468831416092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.487986,
        "lng": 120.82861,
        "ele": 124.75,
        "distanceKm": 58.240868141446256,
        "gradePct": -0.8055815877806395,
        "smoothedEle": 124.73882072107345,
        "gradeBand": "descent"
      },
      {
        "lat": 24.488490682573705,
        "lng": 120.82855085904883,
        "ele": 124.87566505610498,
        "distanceKm": 58.29730456893039,
        "gradePct": -0.34280208010916136,
        "smoothedEle": 124.49420049500372,
        "gradeBand": "descent"
      },
      {
        "lat": 24.488995,
        "lng": 120.828488,
        "ele": 123.25,
        "distanceKm": 58.353741786320306,
        "gradePct": -1.047144096398312,
        "smoothedEle": 123.63587660224606,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48947441632208,
        "lng": 120.82842875862382,
        "ele": 123.38713281523982,
        "distanceKm": 58.40738652844722,
        "gradePct": -1.0033561562709676,
        "smoothedEle": 123.33751313036858,
        "gradeBand": "descent"
      },
      {
        "lat": 24.489953831726808,
        "lng": 120.82836950819977,
        "ele": 123.31018124595396,
        "distanceKm": 58.461031268976235,
        "gradePct": -0.5159493902256924,
        "smoothedEle": 123.07938427589686,
        "gradeBand": "descent"
      },
      {
        "lat": 24.490433242864658,
        "lng": 120.82831021569126,
        "ele": 122.23745494075798,
        "distanceKm": 58.5146760115993,
        "gradePct": -1.0649825199139533,
        "smoothedEle": 122.23745492703847,
        "gradeBand": "descent"
      },
      {
        "lat": 24.490912654002507,
        "lng": 120.82825092318276,
        "ele": 121.16472863556217,
        "distanceKm": 58.56832075166448,
        "gradePct": -1.879518797667787,
        "smoothedEle": 121.08546042913876,
        "gradeBand": "descent"
      },
      {
        "lat": 24.491392,
        "lng": 120.828191,
        "ele": 119.75,
        "distanceKm": 58.621965467440745,
        "gradePct": -2.3054057903095027,
        "smoothedEle": 119.77551164560074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.491810242926807,
        "lng": 120.8281404244287,
        "ele": 118.61347030759082,
        "distanceKm": 58.66875276276201,
        "gradePct": -2.4850157941346045,
        "smoothedEle": 118.589895368343,
        "gradeBand": "descent"
      },
      {
        "lat": 24.492228542339546,
        "lng": 120.82809042678106,
        "ele": 117.38833690810063,
        "distanceKm": 58.71553993976863,
        "gradePct": -2.286578125817552,
        "smoothedEle": 117.64583829662607,
        "gradeBand": "descent"
      },
      {
        "lat": 24.492646783171995,
        "lng": 120.82803983588009,
        "ele": 117.13102030952541,
        "distanceKm": 58.76232716958173,
        "gradePct": -1.5881002711988743,
        "smoothedEle": 117.16462322844059,
        "gradeBand": "descent"
      },
      {
        "lat": 24.493065,
        "lng": 120.827989,
        "ele": 117,
        "distanceKm": 58.80911446334194,
        "gradePct": -0.8165248827870526,
        "smoothedEle": 116.95896467403173,
        "gradeBand": "descent"
      },
      {
        "lat": 24.49351553940313,
        "lng": 120.82799665053709,
        "ele": 116.69578857650974,
        "distanceKm": 58.85921820940867,
        "gradePct": -0.5437090111064217,
        "smoothedEle": 116.65289043152004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.493966026712048,
        "lng": 120.8280074111832,
        "ele": 116.21962722679879,
        "distanceKm": 58.909322014666614,
        "gradePct": -0.7090430085376381,
        "smoothedEle": 116.24865377397963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.494416513356022,
        "lng": 120.8280182055916,
        "ele": 115.8598136133994,
        "distanceKm": 58.95942582027855,
        "gradePct": -0.7914018172694768,
        "smoothedEle": 115.8598136132466,
        "gradeBand": "descent"
      },
      {
        "lat": 24.494867,
        "lng": 120.828029,
        "ele": 115.5,
        "distanceKm": 59.00952962580555,
        "gradePct": -0.9210413659215544,
        "smoothedEle": 115.32600120212976,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495322919119094,
        "lng": 120.82804570808035,
        "ele": 114.42943328547335,
        "distanceKm": 59.0602537713572,
        "gradePct": -1.5236642697640046,
        "smoothedEle": 114.32732824582472,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495778962143856,
        "lng": 120.82805867036598,
        "ele": 112.94436737568444,
        "distanceKm": 59.11098047173484,
        "gradePct": -2.0607615889640973,
        "smoothedEle": 113.23667490147675,
        "gradeBand": "descent"
      },
      {
        "lat": 24.49623497160789,
        "lng": 120.82807300277447,
        "ele": 112.64577553176332,
        "distanceKm": 59.16170721570644,
        "gradePct": -1.6503028216543123,
        "smoothedEle": 112.6457755315395,
        "gradeBand": "descent"
      },
      {
        "lat": 24.49669098107193,
        "lng": 120.82808733518299,
        "ele": 112.34718368784225,
        "distanceKm": 59.21243395952813,
        "gradePct": -0.87256000649211,
        "smoothedEle": 112.34718368761709,
        "gradeBand": "descent"
      },
      {
        "lat": 24.497146990535963,
        "lng": 120.82810166759148,
        "ele": 112.04859184392112,
        "distanceKm": 59.26316070319901,
        "gradePct": -0.5886280527308744,
        "smoothedEle": 112.04859184369728,
        "gradeBand": "descent"
      },
      {
        "lat": 24.497603,
        "lng": 120.828116,
        "ele": 111.75,
        "distanceKm": 59.313887446719974,
        "gradePct": -0.626017862952315,
        "smoothedEle": 111.71261019129821,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4981,
        "lng": 120.828054,
        "ele": 111.25,
        "distanceKm": 59.369506338223104,
        "gradePct": -0.9630671173015064,
        "smoothedEle": 111.04349528013269,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498545622158975,
        "lng": 120.82800977473848,
        "ele": 109.98642109931336,
        "distanceKm": 59.41925898272564,
        "gradePct": -1.6615676254472949,
        "smoothedEle": 109.98642109030335,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498991244317953,
        "lng": 120.82796554947696,
        "ele": 108.72284219862652,
        "distanceKm": 59.46901162580207,
        "gradePct": -2.0651334981310887,
        "smoothedEle": 108.984313347175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499437,
        "lng": 120.827923,
        "ele": 108.5,
        "distanceKm": 59.518764094664704,
        "gradePct": -1.3471797292940502,
        "smoothedEle": 108.64975604623456,
        "gradeBand": "descent"
      },
      {
        "lat": 24.499778801548338,
        "lng": 120.82791603811708,
        "ele": 108.80254719232612,
        "distanceKm": 59.55677727274605,
        "gradePct": -0.4608410482255826,
        "smoothedEle": 108.76989418071301,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50012,
        "lng": 120.82795,
        "ele": 109,
        "distanceKm": 59.594872168665326,
        "gradePct": 0.3347641772211413,
        "smoothedEle": 109.14517995470824,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5005235,
        "lng": 120.82798249999999,
        "ele": 109.75,
        "distanceKm": 59.63985973192968,
        "gradePct": 1.0335725907116564,
        "smoothedEle": 109.75000000289268,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500927,
        "lng": 120.828015,
        "ele": 110.5,
        "distanceKm": 59.68484729442267,
        "gradePct": 1.0923152253343873,
        "smoothedEle": 110.1387367348868,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5012675,
        "lng": 120.8280485,
        "ele": 109.99999999999996,
        "distanceKm": 59.722860644637905,
        "gradePct": 0.478538463225583,
        "smoothedEle": 109.99999999795341,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501608,
        "lng": 120.828082,
        "ele": 109.5,
        "distanceKm": 59.76087399403452,
        "gradePct": -0.2764412834461996,
        "smoothedEle": 109.65514258670257,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501538,
        "lng": 120.828569,
        "ele": 109.5,
        "distanceKm": 59.81076057566379,
        "gradePct": -0.5441614327291469,
        "smoothedEle": 109.5,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 59.81076057566379,
      "elevationGainM": 1424.024906173394,
      "elevationLossM": 1424.8751501271586,
      "minimumElevationM": 108.25,
      "maximumElevationM": 711,
      "maximumSustainedGradePct": 28.60291525763744
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 107,
        "startDistanceKm": 0,
        "endDistanceKm": 5.304863922361681,
        "distanceKm": 5.304863922361681,
        "gainM": 107.93499554780836,
        "averageGradePct": 2.0346421157539627,
        "maximumGradePct": 9.08892660184603
      },
      {
        "startIndex": 111,
        "endIndex": 134,
        "startDistanceKm": 5.511907974473567,
        "endDistanceKm": 6.623122083453423,
        "distanceKm": 1.1112141089798566,
        "gainM": 34.939034148213665,
        "averageGradePct": 3.144221610027004,
        "maximumGradePct": 9.677582025345693
      },
      {
        "startIndex": 139,
        "endIndex": 175,
        "startDistanceKm": 6.883142520422021,
        "endDistanceKm": 8.684719034872394,
        "distanceKm": 1.8015765144503728,
        "gainM": 54.11259612795925,
        "averageGradePct": 3.0036246417470642,
        "maximumGradePct": 8.001357175676617
      },
      {
        "startIndex": 191,
        "endIndex": 241,
        "startDistanceKm": 9.42665948842383,
        "endDistanceKm": 11.842603748370689,
        "distanceKm": 2.4159442599468584,
        "gainM": 53.31524221771099,
        "averageGradePct": 2.20680762804038,
        "maximumGradePct": 8.482140021800832
      },
      {
        "startIndex": 251,
        "endIndex": 269,
        "startDistanceKm": 12.351984476996813,
        "endDistanceKm": 13.148640162640246,
        "distanceKm": 0.796655685643433,
        "gainM": 35.780855307475804,
        "averageGradePct": 4.491382657813679,
        "maximumGradePct": 11.114129743328203
      },
      {
        "startIndex": 272,
        "endIndex": 404,
        "startDistanceKm": 13.292475835699186,
        "endDistanceKm": 19.17729380486311,
        "distanceKm": 5.884817969163922,
        "gainM": 157.07915920089295,
        "averageGradePct": 2.669227154076437,
        "maximumGradePct": 12.613204153168727
      },
      {
        "startIndex": 500,
        "endIndex": 540,
        "startDistanceKm": 23.357711185370327,
        "endDistanceKm": 24.944132005478256,
        "distanceKm": 1.5864208201079286,
        "gainM": 91.87109345569232,
        "averageGradePct": 5.791092268282388,
        "maximumGradePct": 17.20773980028154
      },
      {
        "startIndex": 545,
        "endIndex": 736,
        "startDistanceKm": 25.064300930124713,
        "endDistanceKm": 29.847955998231555,
        "distanceKm": 4.783655068106842,
        "gainM": 476.3901667388399,
        "averageGradePct": 9.9587064693478,
        "maximumGradePct": 28.60291525763744
      },
      {
        "startIndex": 971,
        "endIndex": 1086,
        "startDistanceKm": 35.87599584463031,
        "endDistanceKm": 40.65075832123747,
        "distanceKm": 4.774762476607158,
        "gainM": 173.11703122237657,
        "averageGradePct": 3.6256679168968784,
        "maximumGradePct": 13.825821562426741
      },
      {
        "startIndex": 1250,
        "endIndex": 1310,
        "startDistanceKm": 48.0744382960102,
        "endDistanceKm": 51.04728549346801,
        "distanceKm": 2.97284719745781,
        "gainM": 49.72604081181231,
        "averageGradePct": 1.67267395560508,
        "maximumGradePct": 10.101081676970493
      }
    ]
  },
  "miaoli-jiangmayuan": {
    "routeId": "miaoli-jiangmayuan",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-28T04:13:51.679Z",
      "reviewStatus": "approved",
      "reviewedAt": "2026-07-28T04:38:44.415Z",
      "reviewerNote": "以 OpenStreetMap 疊圖逐段檢查三義、勝興周邊公路與縣道130越過關刀山至薑麻園、大湖台3路口後原路折返；地標停在遊客服務中心外道路，不進私人停車場或登山步道。苗130連續彎坡且可能起霧，須開啟車燈並控制下坡速度。"
    },
    "waypoints": [
      {
        "name": "三義火車站前道路",
        "lat": 24.420437,
        "lng": 120.773936,
        "role": "start"
      },
      {
        "name": "勝興車站苗49",
        "lat": 24.388141,
        "lng": 120.782214,
        "role": "via"
      },
      {
        "name": "苗130雙潭段",
        "lat": 24.390478,
        "lng": 120.804502,
        "role": "via"
      },
      {
        "name": "薑麻園遊客服務中心",
        "lat": 24.38656,
        "lng": 120.8243,
        "role": "via"
      },
      {
        "name": "大湖台3與苗130路口",
        "lat": 24.389736,
        "lng": 120.851858,
        "role": "via"
      },
      {
        "name": "薑麻園遊客服務中心",
        "lat": 24.38656,
        "lng": 120.8243,
        "role": "via"
      },
      {
        "name": "三義火車站前道路",
        "lat": 24.420437,
        "lng": 120.773936,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.420437,
        "lng": 120.773842,
        "ele": 265.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 265.207055618565,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.420633,
        "lng": 120.773842,
        "ele": 265.25,
        "distanceKm": 0.021794235725658452,
        "gradePct": -0.9848361939066643,
        "smoothedEle": 264.9924180969534,
        "gradeBand": "descent"
      },
      {
        "lat": 24.420641,
        "lng": 120.773485,
        "ele": 264.5,
        "distanceKm": 0.05795035626589536,
        "gradePct": 0.39663618598437655,
        "smoothedEle": 265.4369077014224,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.420252015752574,
        "lng": 120.77347280412425,
        "ele": 266.90708073902283,
        "distanceKm": 0.10122111288033228,
        "gradePct": 1.4102076495315146,
        "smoothedEle": 266.60523730648254,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.419863,
        "lng": 120.773462,
        "ele": 268.25,
        "distanceKm": 0.14449157984107225,
        "gradePct": 2.542930534471111,
        "smoothedEle": 267.81438115365347,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.419362,
        "lng": 120.773538,
        "ele": 268,
        "distanceKm": 0.20072923310252969,
        "gradePct": 1.5286025272171742,
        "smoothedEle": 268.1205588617108,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.418942,
        "lng": 120.773613,
        "ele": 268.25,
        "distanceKm": 0.24804449047247257,
        "gradePct": 0.4625661521752136,
        "smoothedEle": 268.2962906100202,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.418314,
        "lng": 120.773673,
        "ele": 269,
        "distanceKm": 0.31813874692372013,
        "gradePct": 0.7590978629989422,
        "smoothedEle": 268.9443167196263,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.417831,
        "lng": 120.773782,
        "ele": 269.25,
        "distanceKm": 0.3729681405764171,
        "gradePct": 0.7407450233140478,
        "smoothedEle": 269.2674564528386,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.417466,
        "lng": 120.773829,
        "ele": 269.5,
        "distanceKm": 0.41383237195821987,
        "gradePct": 0.6847498431820898,
        "smoothedEle": 269.58925383696345,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.416978,
        "lng": 120.773674,
        "ele": 270.25,
        "distanceKm": 0.47031942589522685,
        "gradePct": 1.1842004873664675,
        "smoothedEle": 270.43604660971596,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41662,
        "lng": 120.773486,
        "ele": 271.5,
        "distanceKm": 0.5144442007028733,
        "gradePct": 2.363217401062287,
        "smoothedEle": 271.9616431123407,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.416283,
        "lng": 120.773321,
        "ele": 274.25,
        "distanceKm": 0.5554723265361164,
        "gradePct": 3.536554291707661,
        "smoothedEle": 273.7500292578811,
        "gradeBand": "hard"
      },
      {
        "lat": 24.415972500000002,
        "lng": 120.7731685,
        "ele": 275.25,
        "distanceKm": 0.5932938210013026,
        "gradePct": 4.019622758614788,
        "smoothedEle": 275.24999992245915,
        "gradeBand": "hard"
      },
      {
        "lat": 24.415662,
        "lng": 120.773016,
        "ele": 276.25,
        "distanceKm": 0.6311153309746526,
        "gradePct": 3.4821323025874458,
        "smoothedEle": 276.1704578505268,
        "gradeBand": "hard"
      },
      {
        "lat": 24.415174,
        "lng": 120.7727905,
        "ele": 277.375,
        "distanceKm": 0.6899863886350853,
        "gradePct": 2.256170046123487,
        "smoothedEle": 277.37499980742024,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.414686,
        "lng": 120.772565,
        "ele": 278.5,
        "distanceKm": 0.7488574805319212,
        "gradePct": 1.9681517044505774,
        "smoothedEle": 278.50162602514985,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.414372999999998,
        "lng": 120.7724175,
        "ele": 279.25,
        "distanceKm": 0.7867305116705474,
        "gradePct": 1.9416175992000153,
        "smoothedEle": 279.2499999452373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41406,
        "lng": 120.77227,
        "ele": 280,
        "distanceKm": 0.8246035574125741,
        "gradePct": 1.7295493973764458,
        "smoothedEle": 279.7670239215326,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.413688,
        "lng": 120.7720905,
        "ele": 280,
        "distanceKm": 0.8697848733896381,
        "gradePct": 1.084847131096524,
        "smoothedEle": 280,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.413316,
        "lng": 120.771911,
        "ele": 280,
        "distanceKm": 0.9149662109132468,
        "gradePct": 0.7308073053031878,
        "smoothedEle": 280.3662669676009,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412976999999998,
        "lng": 120.771742,
        "ele": 281.25,
        "distanceKm": 0.9563634960971058,
        "gradePct": 1.3264508204414942,
        "smoothedEle": 281.25724389758795,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412638,
        "lng": 120.771573,
        "ele": 282.5,
        "distanceKm": 0.9977608002760382,
        "gradePct": 2.1459581304831095,
        "smoothedEle": 282.3727477402673,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412518,
        "lng": 120.771522,
        "ele": 283,
        "distanceKm": 1.0120685853953206,
        "gradePct": 2.3161263620245345,
        "smoothedEle": 282.65890344265296,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412424,
        "lng": 120.771414,
        "ele": 283,
        "distanceKm": 1.0271958439542255,
        "gradePct": 2.4193593142179006,
        "smoothedEle": 283.04883969915585,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412338,
        "lng": 120.771226,
        "ele": 283.25,
        "distanceKm": 1.0484985150400872,
        "gradePct": 2.3163676894749874,
        "smoothedEle": 283.40433679898285,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412209513972844,
        "lng": 120.77087815705174,
        "ele": 284.1687911970954,
        "distanceKm": 1.0865063344437038,
        "gradePct": 2.2237856289127658,
        "smoothedEle": 284.2932672475745,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412084,
        "lng": 120.770529,
        "ele": 285.5,
        "distanceKm": 1.1245149306435,
        "gradePct": 2.2910979987114484,
        "smoothedEle": 285.2708316337168,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411685,
        "lng": 120.770279,
        "ele": 286.25,
        "distanceKm": 1.1755951583946898,
        "gradePct": 1.7041648743027609,
        "smoothedEle": 285.7422405120426,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41131,
        "lng": 120.770042,
        "ele": 285,
        "distanceKm": 1.2237055036707891,
        "gradePct": 0.33448977412831454,
        "smoothedEle": 285.58450330192125,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41091974550481,
        "lng": 120.76978496360907,
        "ele": 286.05342783169874,
        "distanceKm": 1.2743062088985504,
        "gradePct": 0.3230825505413006,
        "smoothedEle": 286.05342761373913,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41052949100962,
        "lng": 120.76952792721814,
        "ele": 287.1068556633974,
        "distanceKm": 1.3249069555073296,
        "gradePct": 1.5112181094578987,
        "smoothedEle": 287.1068554454424,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.410139236514432,
        "lng": 120.7692708908272,
        "ele": 288.16028349509617,
        "distanceKm": 1.375507743496261,
        "gradePct": 2.155259666256823,
        "smoothedEle": 288.23370133751115,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.409749570657578,
        "lng": 120.76901278149712,
        "ele": 289.5109528623482,
        "distanceKm": 1.4261084790299392,
        "gradePct": 2.382204016467197,
        "smoothedEle": 289.51581659158063,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.40935980187567,
        "lng": 120.76875486051046,
        "ele": 290.88131363879967,
        "distanceKm": 1.476709211122388,
        "gradePct": 2.6167558578996455,
        "smoothedEle": 290.8808998353148,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.40897,
        "lng": 120.768497,
        "ele": 292.25,
        "distanceKm": 1.5273099766844438,
        "gradePct": 2.9304476459756734,
        "smoothedEle": 292.4786776878707,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.408566,
        "lng": 120.768233,
        "ele": 294.625,
        "distanceKm": 1.5795846731041976,
        "gradePct": 3.6533035986146807,
        "smoothedEle": 294.62499948057757,
        "gradeBand": "hard"
      },
      {
        "lat": 24.408162,
        "lng": 120.767969,
        "ele": 297,
        "distanceKm": 1.631859413264787,
        "gradePct": 4.479836300509131,
        "smoothedEle": 297.1453071320171,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4078485,
        "lng": 120.7677745,
        "ele": 299.375,
        "distanceKm": 1.671897763360779,
        "gradePct": 5.065613389488187,
        "smoothedEle": 299.37499971435483,
        "gradeBand": "hard"
      },
      {
        "lat": 24.407535,
        "lng": 120.76758,
        "ele": 301.75,
        "distanceKm": 1.7119361375111015,
        "gradePct": 5.062034578727316,
        "smoothedEle": 301.2467863034961,
        "gradeBand": "hard"
      },
      {
        "lat": 24.407042083655746,
        "lng": 120.76760956593522,
        "ele": 302.67590509620305,
        "distanceKm": 1.7668277108878072,
        "gradePct": 3.616361322661871,
        "smoothedEle": 302.7090152769156,
        "gradeBand": "hard"
      },
      {
        "lat": 24.406548,
        "lng": 120.76762,
        "ele": 303.75,
        "distanceKm": 1.8217775406806314,
        "gradePct": 2.38127057434974,
        "smoothedEle": 303.8902170596069,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.406199,
        "lng": 120.767639,
        "ele": 305,
        "distanceKm": 1.860632284555759,
        "gradePct": 2.2367546062044976,
        "smoothedEle": 304.7807330417959,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.405818066992104,
        "lng": 120.76765232376378,
        "ele": 305.56539074803646,
        "distanceKm": 1.9030116414369798,
        "gradePct": 1.942266697214505,
        "smoothedEle": 305.42909190421733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.405437033496053,
        "lng": 120.76766266188189,
        "ele": 305.6576953740182,
        "distanceKm": 1.9453936218103451,
        "gradePct": 1.2262188545194013,
        "smoothedEle": 305.657695373982,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.405056,
        "lng": 120.767673,
        "ele": 305.75,
        "distanceKm": 1.9877756022621622,
        "gradePct": 0.970543133400212,
        "smoothedEle": 306.1665399235298,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.404593090109294,
        "lng": 120.76765023633698,
        "ele": 307.5782865310413,
        "distanceKm": 2.039300490213024,
        "gradePct": 1.9154631623500205,
        "smoothedEle": 307.5402928936082,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.40413,
        "lng": 120.767631,
        "ele": 309.25,
        "distanceKm": 2.0908306606231424,
        "gradePct": 2.977653520984174,
        "smoothedEle": 309.2256471975267,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.403772,
        "lng": 120.767581,
        "ele": 310.5,
        "distanceKm": 2.1309591814359945,
        "gradePct": 3.308384667541188,
        "smoothedEle": 310.6262821681169,
        "gradeBand": "hard"
      },
      {
        "lat": 24.403645,
        "lng": 120.767471,
        "ele": 311.25,
        "distanceKm": 2.1489451298303583,
        "gradePct": 3.4477182282590744,
        "smoothedEle": 311.3034503055426,
        "gradeBand": "hard"
      },
      {
        "lat": 24.403544,
        "lng": 120.767415,
        "ele": 312,
        "distanceKm": 2.161526241170848,
        "gradePct": 3.6888551567623122,
        "smoothedEle": 311.9560671491522,
        "gradeBand": "hard"
      },
      {
        "lat": 24.403008,
        "lng": 120.767329,
        "ele": 314.5,
        "distanceKm": 2.2217596539634172,
        "gradePct": 4.121671896003246,
        "smoothedEle": 314.426856260613,
        "gradeBand": "hard"
      },
      {
        "lat": 24.402518,
        "lng": 120.767273,
        "ele": 316.375,
        "distanceKm": 2.2765395365547896,
        "gradePct": 3.8030838340302435,
        "smoothedEle": 316.37499997864836,
        "gradeBand": "hard"
      },
      {
        "lat": 24.402028,
        "lng": 120.767217,
        "ele": 318.25,
        "distanceKm": 2.3313194214236725,
        "gradePct": 3.302005448759414,
        "smoothedEle": 318.0688368981201,
        "gradeBand": "hard"
      },
      {
        "lat": 24.401713,
        "lng": 120.767177,
        "ele": 319,
        "distanceKm": 2.3665792940971846,
        "gradePct": 2.6214582576342855,
        "smoothedEle": 318.6422409058324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4013675,
        "lng": 120.767133,
        "ele": 318.625,
        "distanceKm": 2.405254698527439,
        "gradePct": 1.36210473880186,
        "smoothedEle": 318.625000002632,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.401022,
        "lng": 120.767089,
        "ele": 318.25,
        "distanceKm": 2.4439301043614474,
        "gradePct": 0.9247015773546527,
        "smoothedEle": 319.1986162476909,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.400555333333333,
        "lng": 120.76701966666667,
        "ele": 321.75,
        "distanceKm": 2.496293953868326,
        "gradePct": 3.1210053737185577,
        "smoothedEle": 321.7499999391366,
        "gradeBand": "hard"
      },
      {
        "lat": 24.40008866666667,
        "lng": 120.76695033333333,
        "ele": 325.25,
        "distanceKm": 2.548657806853111,
        "gradePct": 5.821030439170608,
        "smoothedEle": 325.2499999391306,
        "gradeBand": "hard"
      },
      {
        "lat": 24.399622,
        "lng": 120.766881,
        "ele": 328.75,
        "distanceKm": 2.601021663316149,
        "gradePct": 6.668279504706612,
        "smoothedEle": 328.7342795493389,
        "gradeBand": "steep"
      },
      {
        "lat": 24.399222845992252,
        "lng": 120.7668863584058,
        "ele": 331.6914567071217,
        "distanceKm": 2.645408941955644,
        "gradePct": 6.688852587532488,
        "smoothedEle": 331.72169839279104,
        "gradeBand": "steep"
      },
      {
        "lat": 24.398826,
        "lng": 120.766946,
        "ele": 334.75,
        "distanceKm": 2.6899476542975647,
        "gradePct": 6.016519276101116,
        "smoothedEle": 334.0139366759925,
        "gradeBand": "steep"
      },
      {
        "lat": 24.398366,
        "lng": 120.76715,
        "ele": 335.25,
        "distanceKm": 2.7451114851385485,
        "gradePct": 2.259408934804922,
        "smoothedEle": 333.96108744514896,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.397970773447867,
        "lng": 120.76740182739724,
        "ele": 330.4651775375215,
        "distanceKm": 2.795921692155343,
        "gradePct": -3.645687240836193,
        "smoothedEle": 330.3625260598758,
        "gradeBand": "descent"
      },
      {
        "lat": 24.397596,
        "lng": 120.767691,
        "ele": 325.25,
        "distanceKm": 2.8468543842681675,
        "gradePct": -7.0142996107502364,
        "smoothedEle": 326.8233494570625,
        "gradeBand": "descent"
      },
      {
        "lat": 24.397155606818586,
        "lng": 120.76798431113859,
        "ele": 326.62561188638375,
        "distanceKm": 2.9041278201301215,
        "gradePct": -3.0602213959878073,
        "smoothedEle": 326.7320827705765,
        "gradeBand": "descent"
      },
      {
        "lat": 24.396717,
        "lng": 120.768281,
        "ele": 328.5,
        "distanceKm": 2.9614102283200125,
        "gradePct": 1.7489060434523351,
        "smoothedEle": 328.5490603903276,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.396335,
        "lng": 120.768515,
        "ele": 330.25,
        "distanceKm": 3.0100494143790377,
        "gradePct": 3.1015030687163945,
        "smoothedEle": 330.0214167033142,
        "gradeBand": "hard"
      },
      {
        "lat": 24.396092,
        "lng": 120.768821,
        "ele": 331,
        "distanceKm": 3.0511630609663296,
        "gradePct": 2.33226211351541,
        "smoothedEle": 330.5562859989921,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.395691,
        "lng": 120.769279,
        "ele": 329.75,
        "distanceKm": 3.115500632852704,
        "gradePct": 0.6587499567626759,
        "smoothedEle": 330.75108446055475,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.395419,
        "lng": 120.769829,
        "ele": 334,
        "distanceKm": 3.1788797253306056,
        "gradePct": 3.039672701273557,
        "smoothedEle": 333.6798779937594,
        "gradeBand": "hard"
      },
      {
        "lat": 24.395288,
        "lng": 120.770277,
        "ele": 335.75,
        "distanceKm": 3.2265286077758577,
        "gradePct": 4.38834852955824,
        "smoothedEle": 335.6490436578665,
        "gradeBand": "hard"
      },
      {
        "lat": 24.395222,
        "lng": 120.770694,
        "ele": 337,
        "distanceKm": 3.2693900579405635,
        "gradePct": 3.8494253233889677,
        "smoothedEle": 337.09077894897587,
        "gradeBand": "hard"
      },
      {
        "lat": 24.395225,
        "lng": 120.771176,
        "ele": 338.75,
        "distanceKm": 3.3182020710323963,
        "gradePct": 3.46816548301052,
        "smoothedEle": 338.7731017995351,
        "gradeBand": "hard"
      },
      {
        "lat": 24.395251,
        "lng": 120.77172499999999,
        "ele": 340.875,
        "distanceKm": 3.373872971269428,
        "gradePct": 3.6297160198376415,
        "smoothedEle": 340.8750001213881,
        "gradeBand": "hard"
      },
      {
        "lat": 24.395277,
        "lng": 120.772274,
        "ele": 343,
        "distanceKm": 3.429543860081694,
        "gradePct": 3.9536542558856205,
        "smoothedEle": 343.1549741598169,
        "gradeBand": "hard"
      },
      {
        "lat": 24.395398387887983,
        "lng": 120.77276664571254,
        "ele": 345.5910784466016,
        "distanceKm": 3.481226452555294,
        "gradePct": 4.1895475616590225,
        "smoothedEle": 345.365705914603,
        "gradeBand": "hard"
      },
      {
        "lat": 24.395537,
        "lng": 120.773254,
        "ele": 347.25,
        "distanceKm": 3.5329302045057918,
        "gradePct": 3.1159919568658525,
        "smoothedEle": 346.41581758006123,
        "gradeBand": "hard"
      },
      {
        "lat": 24.3955965,
        "lng": 120.7738095,
        "ele": 345.25,
        "distanceKm": 3.5895718059307105,
        "gradePct": -0.2852016708295648,
        "smoothedEle": 345.249999736872,
        "gradeBand": "descent"
      },
      {
        "lat": 24.395656,
        "lng": 120.774365,
        "ele": 343.25,
        "distanceKm": 3.646213381042825,
        "gradePct": -2.6200807335771947,
        "smoothedEle": 343.52233772231494,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3957245,
        "lng": 120.77483699999999,
        "ele": 342.625,
        "distanceKm": 3.6946144925423905,
        "gradePct": -2.47118950890683,
        "smoothedEle": 342.62499992002313,
        "gradeBand": "descent"
      },
      {
        "lat": 24.395793,
        "lng": 120.775309,
        "ele": 342,
        "distanceKm": 3.7430155784493566,
        "gradePct": -1.2081030882779362,
        "smoothedEle": 342.4117729185895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.395817,
        "lng": 120.775801,
        "ele": 343,
        "distanceKm": 3.792910316039587,
        "gradePct": 0.42116680894622466,
        "smoothedEle": 343.0777614992208,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.395719,
        "lng": 120.776492,
        "ele": 345.25,
        "distanceKm": 3.8637291772600655,
        "gradePct": 2.9405736805242078,
        "smoothedEle": 345.6288290687682,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.395622,
        "lng": 120.776843,
        "ele": 347.5,
        "distanceKm": 3.900874343478933,
        "gradePct": 4.251558320054922,
        "smoothedEle": 347.6162034513105,
        "gradeBand": "hard"
      },
      {
        "lat": 24.395435103516245,
        "lng": 120.77719601383717,
        "ele": 350.30759294108856,
        "distanceKm": 3.942224792164057,
        "gradePct": 5.198849315180321,
        "smoothedEle": 350.05303814720855,
        "gradeBand": "hard"
      },
      {
        "lat": 24.395216,
        "lng": 120.777527,
        "ele": 352.25,
        "distanceKm": 3.9836618318557218,
        "gradePct": 6.55610502126404,
        "smoothedEle": 353.2513890598676,
        "gradeBand": "steep"
      },
      {
        "lat": 24.394753,
        "lng": 120.777867,
        "ele": 360.5,
        "distanceKm": 4.04559747798091,
        "gradePct": 9.770578296884471,
        "smoothedEle": 360.0839398851668,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.394428,
        "lng": 120.778084,
        "ele": 364.5,
        "distanceKm": 4.08789275385577,
        "gradePct": 9.20580234168181,
        "smoothedEle": 362.9239337609457,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.394121,
        "lng": 120.778354,
        "ele": 363,
        "distanceKm": 4.13162985298224,
        "gradePct": 7.19214220996653,
        "smoothedEle": 365.7352164760158,
        "gradeBand": "steep"
      },
      {
        "lat": 24.393972,
        "lng": 120.778445,
        "ele": 366.75,
        "distanceKm": 4.1505883536433075,
        "gradePct": 6.406268878342951,
        "smoothedEle": 366.82533026402723,
        "gradeBand": "steep"
      },
      {
        "lat": 24.393909,
        "lng": 120.778595,
        "ele": 370.25,
        "distanceKm": 4.16731611764349,
        "gradePct": 7.0950077556140885,
        "smoothedEle": 368.6372855368257,
        "gradeBand": "steep"
      },
      {
        "lat": 24.393445,
        "lng": 120.779021,
        "ele": 374.75,
        "distanceKm": 4.234570045224797,
        "gradePct": 10.290335931186952,
        "smoothedEle": 376.1946134611498,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.393214,
        "lng": 120.779604,
        "ele": 387,
        "distanceKm": 4.298955349868544,
        "gradePct": 13.386391745685547,
        "smoothedEle": 385.5789797280005,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.392985,
        "lng": 120.779802,
        "ele": 389.25,
        "distanceKm": 4.331366032662234,
        "gradePct": 13.6071226866457,
        "smoothedEle": 389.44170106167104,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.392759,
        "lng": 120.780256,
        "ele": 393.25,
        "distanceKm": 4.383761988650131,
        "gradePct": 10.87310553067844,
        "smoothedEle": 394.2376037510264,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.392728,
        "lng": 120.780748,
        "ele": 401,
        "distanceKm": 4.433705611069008,
        "gradePct": 10.866890209927117,
        "smoothedEle": 400.52273738576764,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.392695,
        "lng": 120.780944,
        "ele": 404.75,
        "distanceKm": 4.453890744573634,
        "gradePct": 11.11740352812414,
        "smoothedEle": 402.62083482061286,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.392485,
        "lng": 120.781165,
        "ele": 404.5,
        "distanceKm": 4.486235093762767,
        "gradePct": 8.730914341612934,
        "smoothedEle": 403.27974493948904,
        "gradeBand": "steep"
      },
      {
        "lat": 24.392271,
        "lng": 120.781164,
        "ele": 401.5,
        "distanceKm": 4.5100310564228145,
        "gradePct": 5.484528170426946,
        "smoothedEle": 403.0279514318337,
        "gradeBand": "hard"
      },
      {
        "lat": 24.392054,
        "lng": 120.781305,
        "ele": 402.5,
        "distanceKm": 4.538068813448624,
        "gradePct": 1.5890611798179806,
        "smoothedEle": 402.56532163583364,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.391674,
        "lng": 120.781582,
        "ele": 403,
        "distanceKm": 4.5887868128967755,
        "gradePct": -0.5838144002578949,
        "smoothedEle": 402.66892989544624,
        "gradeBand": "descent"
      },
      {
        "lat": 24.391294,
        "lng": 120.781722,
        "ele": 402.25,
        "distanceKm": 4.633356118716998,
        "gradePct": -2.375192741098837,
        "smoothedEle": 400.26788950162984,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390999,
        "lng": 120.781544,
        "ele": 395.25,
        "distanceKm": 4.670785387244304,
        "gradePct": -5.869611883657477,
        "smoothedEle": 396.7625441562998,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390642,
        "lng": 120.78157,
        "ele": 393,
        "distanceKm": 4.710569258778126,
        "gradePct": -8.481115662432531,
        "smoothedEle": 393.0143489641535,
        "gradeBand": "descent"
      },
      {
        "lat": 24.39034,
        "lng": 120.78147,
        "ele": 391,
        "distanceKm": 4.745643983138584,
        "gradePct": -7.414523763855553,
        "smoothedEle": 391.7025762607416,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390125,
        "lng": 120.781514,
        "ele": 390.5,
        "distanceKm": 4.769962644539434,
        "gradePct": -4.954629863245788,
        "smoothedEle": 391.88496622124796,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389873,
        "lng": 120.781744,
        "ele": 393.75,
        "distanceKm": 4.806400592455024,
        "gradePct": -1.5981662265671788,
        "smoothedEle": 391.8089292066329,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389444,
        "lng": 120.781743,
        "ele": 390.25,
        "distanceKm": 4.85410338937415,
        "gradePct": -2.46150356438279,
        "smoothedEle": 389.30451824312553,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389171,
        "lng": 120.781645,
        "ele": 384.75,
        "distanceKm": 4.886040849361645,
        "gradePct": -5.138814431517194,
        "smoothedEle": 386.7126005398667,
        "gradeBand": "descent"
      },
      {
        "lat": 24.388933,
        "lng": 120.781711,
        "ele": 385,
        "distanceKm": 4.913336297743424,
        "gradePct": -5.722891586077615,
        "smoothedEle": 385.7219110391858,
        "gradeBand": "descent"
      },
      {
        "lat": 24.388451,
        "lng": 120.781992,
        "ele": 387.25,
        "distanceKm": 4.974018827577869,
        "gradePct": -0.6811492266148231,
        "smoothedEle": 387.00711096503795,
        "gradeBand": "descent"
      },
      {
        "lat": 24.388155,
        "lng": 120.782228,
        "ele": 388,
        "distanceKm": 5.014694914717163,
        "gradePct": 1.4690387287659001,
        "smoothedEle": 387.21972402042064,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.388213,
        "lng": 120.78216,
        "ele": 387.5,
        "distanceKm": 5.024129872907696,
        "gradePct": 1.1276906570612408,
        "smoothedEle": 387.07819964756266,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.388343,
        "lng": 120.782044,
        "ele": 386.5,
        "distanceKm": 5.042756868925888,
        "gradePct": 0.45378314798080216,
        "smoothedEle": 386.79879470728974,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.387998,
        "lng": 120.782104,
        "ele": 385.75,
        "distanceKm": 5.081597423488614,
        "gradePct": -1.3197273525231072,
        "smoothedEle": 385.7269967745817,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387427,
        "lng": 120.782372,
        "ele": 384,
        "distanceKm": 5.150647638335486,
        "gradePct": -0.1380808367055129,
        "smoothedEle": 386.44296954546076,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387049,
        "lng": 120.782391,
        "ele": 391.5,
        "distanceKm": 5.1927234003255975,
        "gradePct": 5.54511309431418,
        "smoothedEle": 391.3874736875658,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386667,
        "lng": 120.782341,
        "ele": 398.5,
        "distanceKm": 5.2355006828806445,
        "gradePct": 11.475668916656373,
        "smoothedEle": 397.7615816348294,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386578,
        "lng": 120.782339,
        "ele": 401,
        "distanceKm": 5.245399117581494,
        "gradePct": 11.892701145848648,
        "smoothedEle": 398.28124945662404,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386495,
        "lng": 120.782297,
        "ele": 402.5,
        "distanceKm": 5.255561323458412,
        "gradePct": 11.578855965135672,
        "smoothedEle": 398.5992538278547,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386448,
        "lng": 120.782241,
        "ele": 402.75,
        "distanceKm": 5.263273471535227,
        "gradePct": 10.865371906437513,
        "smoothedEle": 398.79205752977504,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386427,
        "lng": 120.782106,
        "ele": 400.25,
        "distanceKm": 5.277143493614464,
        "gradePct": 8.771243943030218,
        "smoothedEle": 398.3278556420498,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386482,
        "lng": 120.781996,
        "ele": 396.75,
        "distanceKm": 5.289851988600452,
        "gradePct": 7.309585159836073,
        "smoothedEle": 398.3596268795148,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386471,
        "lng": 120.781841,
        "ele": 394,
        "distanceKm": 5.305597099239458,
        "gradePct": 4.637813543056966,
        "smoothedEle": 397.94355650011,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386124,
        "lng": 120.781798,
        "ele": 398.75,
        "distanceKm": 5.344426763733139,
        "gradePct": 2.2903977915854705,
        "smoothedEle": 400.5205986711709,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.385818,
        "lng": 120.78195,
        "ele": 408.75,
        "distanceKm": 5.38177266004697,
        "gradePct": 7.946498137759505,
        "smoothedEle": 406.28592669589057,
        "gradeBand": "steep"
      },
      {
        "lat": 24.385356,
        "lng": 120.781951,
        "ele": 411.5,
        "distanceKm": 5.433144886941583,
        "gradePct": 12.32003842569752,
        "smoothedEle": 412.0918829513031,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.3849,
        "lng": 120.782064,
        "ele": 416.75,
        "distanceKm": 5.485125274312931,
        "gradePct": 10.908333371258134,
        "smoothedEle": 417.57316386295594,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.384667,
        "lng": 120.782342,
        "ele": 423.5,
        "distanceKm": 5.523386646328989,
        "gradePct": 12.858591461304275,
        "smoothedEle": 423.8476232895144,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.384811,
        "lng": 120.782824,
        "ele": 433.5,
        "distanceKm": 5.574760606649541,
        "gradePct": 15.550485803308217,
        "smoothedEle": 432.0307056177117,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.384819,
        "lng": 120.782964,
        "ele": 435.25,
        "distanceKm": 5.588967084473609,
        "gradePct": 15.541920075082317,
        "smoothedEle": 433.74510007984304,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.384781,
        "lng": 120.783039,
        "ele": 435.75,
        "distanceKm": 5.597658946239144,
        "gradePct": 15.159570294207409,
        "smoothedEle": 434.7881234917072,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.384718,
        "lng": 120.783122,
        "ele": 436,
        "distanceKm": 5.608601206116875,
        "gradePct": 13.72546888865093,
        "smoothedEle": 435.148436714274,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.384459,
        "lng": 120.783338,
        "ele": 435.5,
        "distanceKm": 5.64476685647949,
        "gradePct": 9.718746458626503,
        "smoothedEle": 436.9719086391288,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.384253,
        "lng": 120.783857,
        "ele": 441.75,
        "distanceKm": 5.702103470422479,
        "gradePct": 6.513382406181359,
        "smoothedEle": 441.44785782602474,
        "gradeBand": "steep"
      },
      {
        "lat": 24.383957,
        "lng": 120.784208,
        "ele": 445.75,
        "distanceKm": 5.7505490384071605,
        "gradePct": 6.761305580030945,
        "smoothedEle": 444.1845968648698,
        "gradeBand": "steep"
      },
      {
        "lat": 24.383722,
        "lng": 120.784357,
        "ele": 444.5,
        "distanceKm": 5.780724112034015,
        "gradePct": 4.566597102666224,
        "smoothedEle": 444.3454878374297,
        "gradeBand": "hard"
      },
      {
        "lat": 24.383597,
        "lng": 120.78455,
        "ele": 443.25,
        "distanceKm": 5.804708571981642,
        "gradePct": 1.4912810473570683,
        "smoothedEle": 443.08630369017936,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.383469,
        "lng": 120.784957,
        "ele": 440.5,
        "distanceKm": 5.848316319208196,
        "gradePct": -3.255380128612569,
        "smoothedEle": 440.80308817488884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383499,
        "lng": 120.785477,
        "ele": 438.5,
        "distanceKm": 5.901085789133586,
        "gradePct": -4.61408435328339,
        "smoothedEle": 438.6624154364189,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383562,
        "lng": 120.785846,
        "ele": 437.5,
        "distanceKm": 5.939107816268152,
        "gradePct": -3.650077871785028,
        "smoothedEle": 437.63514932936624,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383701,
        "lng": 120.786189,
        "ele": 437,
        "distanceKm": 5.977129032311407,
        "gradePct": -2.9849304304237414,
        "smoothedEle": 436.64932679830235,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383811,
        "lng": 120.786355,
        "ele": 435.75,
        "distanceKm": 5.9979196282138405,
        "gradePct": -3.4409409511740257,
        "smoothedEle": 435.3499145544002,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384257,
        "lng": 120.786651,
        "ele": 431.25,
        "distanceKm": 6.05586904147654,
        "gradePct": -4.765212977303139,
        "smoothedEle": 432.43534758352223,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384562336001494,
        "lng": 120.78689202366023,
        "ele": 432.0722506190691,
        "distanceKm": 6.0976849850865795,
        "gradePct": -3.9888467145389224,
        "smoothedEle": 431.3757330353151,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384876,
        "lng": 120.78712,
        "ele": 430.5,
        "distanceKm": 6.139512554269943,
        "gradePct": -3.171299204177512,
        "smoothedEle": 430.08669825080807,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385418,
        "lng": 120.787365,
        "ele": 425.5,
        "distanceKm": 6.2046881562294205,
        "gradePct": -6.2837887804467645,
        "smoothedEle": 424.87612173921116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385771315549167,
        "lng": 120.78762663587474,
        "ele": 419.818895911176,
        "distanceKm": 6.252075558803441,
        "gradePct": -8.640251132210071,
        "smoothedEle": 420.44207593721586,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386106,
        "lng": 120.787918,
        "ele": 416.5,
        "distanceKm": 6.299569652677973,
        "gradePct": -8.889373072094973,
        "smoothedEle": 416.3959563089003,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386407451723695,
        "lng": 120.78812209078062,
        "ele": 413.2820664375524,
        "distanceKm": 6.3389498879790445,
        "gradePct": -8.93800660859026,
        "smoothedEle": 412.732240160027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386705,
        "lng": 120.788333,
        "ele": 408.25,
        "distanceKm": 6.37833152479507,
        "gradePct": -8.010428844591871,
        "smoothedEle": 410.1948472993747,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387215,
        "lng": 120.788597,
        "ele": 410.5,
        "distanceKm": 6.441027600796174,
        "gradePct": -3.837386356795675,
        "smoothedEle": 408.7609849726061,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387529,
        "lng": 120.788911,
        "ele": 405.5,
        "distanceKm": 6.4882537654999215,
        "gradePct": -3.92366797767211,
        "smoothedEle": 406.0442571911443,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387737,
        "lng": 120.78933,
        "ele": 402.5,
        "distanceKm": 6.53658118608246,
        "gradePct": -5.839569407528778,
        "smoothedEle": 403.02310528720716,
        "gradeBand": "descent"
      },
      {
        "lat": 24.388024,
        "lng": 120.789405,
        "ele": 401.75,
        "distanceKm": 6.569385611667867,
        "gradePct": -4.762277889849446,
        "smoothedEle": 402.36738689308197,
        "gradeBand": "descent"
      },
      {
        "lat": 24.388347,
        "lng": 120.789611,
        "ele": 403,
        "distanceKm": 6.610921053423512,
        "gradePct": -1.595878231854107,
        "smoothedEle": 403.0313507123452,
        "gradeBand": "descent"
      },
      {
        "lat": 24.388671,
        "lng": 120.789552,
        "ele": 404.25,
        "distanceKm": 6.647440381203923,
        "gradePct": 2.1001129821821185,
        "smoothedEle": 404.9061568863756,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.389168,
        "lng": 120.789722,
        "ele": 409.25,
        "distanceKm": 6.705323937694003,
        "gradePct": 5.1936428295773185,
        "smoothedEle": 408.1355209811517,
        "gradeBand": "hard"
      },
      {
        "lat": 24.389361,
        "lng": 120.789629,
        "ele": 409,
        "distanceKm": 6.728760321325446,
        "gradePct": 5.125792775067414,
        "smoothedEle": 409.0729645508186,
        "gradeBand": "hard"
      },
      {
        "lat": 24.389584,
        "lng": 120.7897,
        "ele": 409.25,
        "distanceKm": 6.754578282574261,
        "gradePct": 2.9928690913774965,
        "smoothedEle": 408.29725448676624,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.389897,
        "lng": 120.789894,
        "ele": 406.5,
        "distanceKm": 6.794544722398002,
        "gradePct": -0.33832314972261324,
        "smoothedEle": 407.19581787211837,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389972,
        "lng": 120.78994,
        "ele": 405.25,
        "distanceKm": 6.804097261996931,
        "gradePct": -1.0623168060533923,
        "smoothedEle": 407.0047670801397,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390053,
        "lng": 120.790044,
        "ele": 405.75,
        "distanceKm": 6.817955493282277,
        "gradePct": -2.033852585016128,
        "smoothedEle": 406.6069242729523,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390083,
        "lng": 120.790213,
        "ele": 407.25,
        "distanceKm": 6.835392441725793,
        "gradePct": -2.6171314591341095,
        "smoothedEle": 406.2565686148741,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38995410289133,
        "lng": 120.79069704917183,
        "ele": 405.53256922781685,
        "distanceKm": 6.886465206161587,
        "gradePct": -1.5955099826535444,
        "smoothedEle": 405.82297158056855,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389778,
        "lng": 120.791165,
        "ele": 405,
        "distanceKm": 6.937741644885152,
        "gradePct": -2.911389481088928,
        "smoothedEle": 403.3252348927766,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389288,
        "lng": 120.791477,
        "ele": 395.25,
        "distanceKm": 7.000726086849239,
        "gradePct": -9.431170515073324,
        "smoothedEle": 395.69713650257967,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389251,
        "lng": 120.791711,
        "ele": 391,
        "distanceKm": 7.024778257337765,
        "gradePct": -10.330898094676606,
        "smoothedEle": 393.62579891756843,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389311,
        "lng": 120.791924,
        "ele": 392.75,
        "distanceKm": 7.047357410595252,
        "gradePct": -7.970383724583684,
        "smoothedEle": 394.1902777490056,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38963,
        "lng": 120.792136,
        "ele": 397.75,
        "distanceKm": 7.088820098822173,
        "gradePct": -0.9547700870329014,
        "smoothedEle": 396.1843105730381,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38991,
        "lng": 120.792632,
        "ele": 397.25,
        "distanceKm": 7.147917445768212,
        "gradePct": 2.24600390648778,
        "smoothedEle": 396.46321499159023,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.390134325487605,
        "lng": 120.79298181025187,
        "ele": 394.11258365628464,
        "distanceKm": 7.191243957544339,
        "gradePct": -2.97646400311255,
        "smoothedEle": 393.2192857451592,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390321162743803,
        "lng": 120.79335890512594,
        "ele": 387.8062918281424,
        "distanceKm": 7.234718201973804,
        "gradePct": -8.594632127080645,
        "smoothedEle": 387.80629026414687,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390508,
        "lng": 120.793736,
        "ele": 381.5,
        "distanceKm": 7.278192396802155,
        "gradePct": -13.860349689705565,
        "smoothedEle": 380.3361284918517,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390832,
        "lng": 120.794091,
        "ele": 369.5,
        "distanceKm": 7.3290888530635865,
        "gradePct": -16.30035562027399,
        "smoothedEle": 372.2068471177282,
        "gradeBand": "descent"
      },
      {
        "lat": 24.391197,
        "lng": 120.794414,
        "ele": 368.5,
        "distanceKm": 7.381215751746393,
        "gradePct": -10.317671965644175,
        "smoothedEle": 369.5355603711331,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390792315535005,
        "lng": 120.79469614777192,
        "ele": 371.9101346690141,
        "distanceKm": 7.434519949860228,
        "gradePct": 0.604826775079632,
        "smoothedEle": 372.5333527714876,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.3904,
        "lng": 120.795,
        "ele": 378,
        "distanceKm": 7.4879043716864855,
        "gradePct": 8.66721435383218,
        "smoothedEle": 378.57893823055724,
        "gradeBand": "steep"
      },
      {
        "lat": 24.390271,
        "lng": 120.795064,
        "ele": 382,
        "distanceKm": 7.50364486531978,
        "gradePct": 9.488227846692018,
        "smoothedEle": 380.28518654283874,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.390142,
        "lng": 120.795064,
        "ele": 383.5,
        "distanceKm": 7.517989030669639,
        "gradePct": 9.85215635586301,
        "smoothedEle": 381.45582130399026,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.390013,
        "lng": 120.795021,
        "ele": 382.75,
        "distanceKm": 7.532979636667907,
        "gradePct": 10.545631829605137,
        "smoothedEle": 382.9923584188126,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.389477,
        "lng": 120.794678,
        "ele": 388.25,
        "distanceKm": 7.601963922681826,
        "gradePct": 8.099013288312875,
        "smoothedEle": 388.2019879129063,
        "gradeBand": "steep"
      },
      {
        "lat": 24.389348,
        "lng": 120.794635,
        "ele": 389.75,
        "distanceKm": 7.616954535337518,
        "gradePct": 8.19881282476021,
        "smoothedEle": 389.5702084290675,
        "gradeBand": "steep"
      },
      {
        "lat": 24.389219,
        "lng": 120.794656,
        "ele": 390.5,
        "distanceKm": 7.631455500662633,
        "gradePct": 7.619420575906842,
        "smoothedEle": 390.4555550541789,
        "gradeBand": "steep"
      },
      {
        "lat": 24.389155,
        "lng": 120.794699,
        "ele": 390.25,
        "distanceKm": 7.639798630563446,
        "gradePct": 7.441248863643379,
        "smoothedEle": 390.9485713963279,
        "gradeBand": "steep"
      },
      {
        "lat": 24.388975418482893,
        "lng": 120.79506196998094,
        "ele": 394.1592492626895,
        "distanceKm": 7.681631084071934,
        "gradePct": 8.413640461691587,
        "smoothedEle": 395.0801112033487,
        "gradeBand": "steep"
      },
      {
        "lat": 24.388833,
        "lng": 120.79545,
        "ele": 401.25,
        "distanceKm": 7.72399876672138,
        "gradePct": 10.083153612359958,
        "smoothedEle": 400.0834428217328,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388726,
        "lng": 120.795536,
        "ele": 403,
        "distanceKm": 7.738743722080008,
        "gradePct": 10.353323793182236,
        "smoothedEle": 401.23955801773053,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388597,
        "lng": 120.7956,
        "ele": 403.5,
        "distanceKm": 7.7544842510664935,
        "gradePct": 9.956384139982028,
        "smoothedEle": 402.35536593805296,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388254,
        "lng": 120.795622,
        "ele": 402,
        "distanceKm": 7.792689184257854,
        "gradePct": 5.8626794387650065,
        "smoothedEle": 402.24867613878473,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387589,
        "lng": 120.7956,
        "ele": 400.5,
        "distanceKm": 7.8666674708307704,
        "gradePct": -1.584770908244542,
        "smoothedEle": 400.7365725839483,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387257634152274,
        "lng": 120.79576348730718,
        "ele": 400.63894784113035,
        "distanceKm": 7.907062754545388,
        "gradePct": -1.0285962147584693,
        "smoothedEle": 400.9262865998723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386944,
        "lng": 120.795973,
        "ele": 401.75,
        "distanceKm": 7.947884886186522,
        "gradePct": 0.6907629005301057,
        "smoothedEle": 401.81124830978547,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386916,
        "lng": 120.796343,
        "ele": 403,
        "distanceKm": 7.985485397902916,
        "gradePct": 3.1760231850625016,
        "smoothedEle": 404.0009730296198,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386818,
        "lng": 120.796978,
        "ele": 411,
        "distanceKm": 8.050711152118108,
        "gradePct": 8.842504491424197,
        "smoothedEle": 410.8183448264964,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386603,
        "lng": 120.797332,
        "ele": 415.25,
        "distanceKm": 8.093802227040989,
        "gradePct": 10.403795094677188,
        "smoothedEle": 415.27404004131125,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386311,
        "lng": 120.797682,
        "ele": 420,
        "distanceKm": 8.141871502864145,
        "gradePct": 9.590108074382306,
        "smoothedEle": 419.48453601799486,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385948499999998,
        "lng": 120.7979355,
        "ele": 422.75,
        "distanceKm": 8.189661268886333,
        "gradePct": 7.904141990126419,
        "smoothedEle": 422.7499994561023,
        "gradeBand": "steep"
      },
      {
        "lat": 24.385586,
        "lng": 120.798189,
        "ele": 425.5,
        "distanceKm": 8.237451074464717,
        "gradePct": 7.480482366781499,
        "smoothedEle": 426.57782311977,
        "gradeBand": "steep"
      },
      {
        "lat": 24.385305,
        "lng": 120.79872,
        "ele": 435,
        "distanceKm": 8.299646584084353,
        "gradePct": 11.651550468302375,
        "smoothedEle": 435.20134446932013,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.38518,
        "lng": 120.799195,
        "ele": 443,
        "distanceKm": 8.349720140024665,
        "gradePct": 12.384562748259881,
        "smoothedEle": 440.66351428457136,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385041,
        "lng": 120.799476,
        "ele": 441.75,
        "distanceKm": 8.382104898226734,
        "gradePct": 11.232703694727473,
        "smoothedEle": 444.0018612839111,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385009,
        "lng": 120.7996,
        "ele": 442.5,
        "distanceKm": 8.395157432970311,
        "gradePct": 10.303991935769128,
        "smoothedEle": 444.88290737910256,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385056,
        "lng": 120.799916,
        "ele": 449.75,
        "distanceKm": 8.427584417884196,
        "gradePct": 9.012801091000629,
        "smoothedEle": 447.261686115797,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.384943,
        "lng": 120.800278,
        "ele": 449.75,
        "distanceKm": 8.46633960579454,
        "gradePct": 9.278058740580866,
        "smoothedEle": 451.654772281954,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.384939,
        "lng": 120.800442,
        "ele": 451.25,
        "distanceKm": 8.482954760570378,
        "gradePct": 9.476382529229943,
        "smoothedEle": 453.535609521337,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385051,
        "lng": 120.800646,
        "ele": 457.25,
        "distanceKm": 8.507078252926275,
        "gradePct": 12.783839304068511,
        "smoothedEle": 458.5412341851857,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385298,
        "lng": 120.800962,
        "ele": 470.5,
        "distanceKm": 8.549250881328517,
        "gradePct": 17.884999196660836,
        "smoothedEle": 467.60268271458597,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385317,
        "lng": 120.801488,
        "ele": 474.5,
        "distanceKm": 8.60256357718164,
        "gradePct": 17.46351651760199,
        "smoothedEle": 475.06795548577577,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385441,
        "lng": 120.801888,
        "ele": 479.75,
        "distanceKm": 8.645355898373513,
        "gradePct": 11.257021881475664,
        "smoothedEle": 478.02280661491085,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385512574790752,
        "lng": 120.80231217881868,
        "ele": 478.94910833212936,
        "distanceKm": 8.689045706765345,
        "gradePct": 5.03505221851437,
        "smoothedEle": 478.21012668733215,
        "gradeBand": "hard"
      },
      {
        "lat": 24.385544,
        "lng": 120.802746,
        "ele": 475.5,
        "distanceKm": 8.733119747456453,
        "gradePct": -2.174269958524015,
        "smoothedEle": 475.003618611595,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385561,
        "lng": 120.803156,
        "ele": 470.5,
        "distanceKm": 8.774685553473327,
        "gradePct": -5.691893613686736,
        "smoothedEle": 472.45666391018017,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38595,
        "lng": 120.803693,
        "ele": 473.75,
        "distanceKm": 8.844174226667057,
        "gradePct": -1.558710161788673,
        "smoothedEle": 472.76754259322433,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386139,
        "lng": 120.804079,
        "ele": 472,
        "distanceKm": 8.888557272818622,
        "gradePct": 2.5425828715639316,
        "smoothedEle": 475.0613061310369,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386495,
        "lng": 120.80419,
        "ele": 480.75,
        "distanceKm": 8.92970795202175,
        "gradePct": 6.127822438014583,
        "smoothedEle": 478.83064575824676,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386587,
        "lng": 120.804505,
        "ele": 482.25,
        "distanceKm": 8.963209474990514,
        "gradePct": 9.669192381547509,
        "smoothedEle": 483.4204970714168,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.3867,
        "lng": 120.804623,
        "ele": 484.25,
        "distanceKm": 8.980549932515425,
        "gradePct": 11.54749209929268,
        "smoothedEle": 486.1949702754026,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387144,
        "lng": 120.804779,
        "ele": 496.75,
        "distanceKm": 9.032386773875201,
        "gradePct": 14.954744233683353,
        "smoothedEle": 494.15239999363274,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387147,
        "lng": 120.805049,
        "ele": 495.75,
        "distanceKm": 9.059732746994854,
        "gradePct": 16.496649184653904,
        "smoothedEle": 499.4408197149969,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387304,
        "lng": 120.805266,
        "ele": 504.75,
        "distanceKm": 9.087799299798915,
        "gradePct": 14.059824114066139,
        "smoothedEle": 501.36763863589255,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387226,
        "lng": 120.80538,
        "ele": 505.5,
        "distanceKm": 9.102239400104356,
        "gradePct": 12.121534418440078,
        "smoothedEle": 501.64603653716745,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387148,
        "lng": 120.805423,
        "ele": 504.75,
        "distanceKm": 9.111944488273043,
        "gradePct": 10.839763380219704,
        "smoothedEle": 501.8540853835259,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387087,
        "lng": 120.805435,
        "ele": 504,
        "distanceKm": 9.118835399102213,
        "gradePct": 9.935962672453947,
        "smoothedEle": 502.0081025747548,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386793,
        "lng": 120.80544,
        "ele": 498.25,
        "distanceKm": 9.151530674144503,
        "gradePct": 3.830346582044469,
        "smoothedEle": 501.6849728334529,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386734,
        "lng": 120.805464,
        "ele": 497.75,
        "distanceKm": 9.15852695925808,
        "gradePct": 2.523083652877924,
        "smoothedEle": 501.73071687204106,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386675,
        "lng": 120.805503,
        "ele": 498,
        "distanceKm": 9.166184659229897,
        "gradePct": 2.0655074698441993,
        "smoothedEle": 501.94926247002655,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386645,
        "lng": 120.805592,
        "ele": 500.75,
        "distanceKm": 9.175795560092592,
        "gradePct": 1.9433051432449202,
        "smoothedEle": 502.4868656335555,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386734,
        "lng": 120.805637,
        "ele": 503.25,
        "distanceKm": 9.186690849304583,
        "gradePct": 2.0703968647327504,
        "smoothedEle": 503.36193839670716,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386908,
        "lng": 120.805629,
        "ele": 506,
        "distanceKm": 9.206055749199628,
        "gradePct": 4.334412264969118,
        "smoothedEle": 506.0622602203094,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387003,
        "lng": 120.80568,
        "ele": 508.75,
        "distanceKm": 9.217814370585925,
        "gradePct": 5.7977286743873355,
        "smoothedEle": 507.7830104714334,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386992,
        "lng": 120.805745,
        "ele": 510.5,
        "distanceKm": 9.224509849879146,
        "gradePct": 6.705040541015104,
        "smoothedEle": 508.65706211295804,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386945,
        "lng": 120.805809,
        "ele": 511.5,
        "distanceKm": 9.232835901689677,
        "gradePct": 7.980437823258654,
        "smoothedEle": 509.8501724297571,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386879,
        "lng": 120.805844,
        "ele": 511.75,
        "distanceKm": 9.240985945680755,
        "gradePct": 9.548368319208725,
        "smoothedEle": 511.33755545812875,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.38682,
        "lng": 120.805896,
        "ele": 512.5,
        "distanceKm": 9.249398656390195,
        "gradePct": 11.083634123923371,
        "smoothedEle": 512.789677841304,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387362,
        "lng": 120.806002,
        "ele": 521.5,
        "distanceKm": 9.310614999126075,
        "gradePct": 14.301176771774799,
        "smoothedEle": 521.0306351438177,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387711,
        "lng": 120.805908,
        "ele": 525.75,
        "distanceKm": 9.350572659328279,
        "gradePct": 13.34341275723391,
        "smoothedEle": 526.291135128044,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388068,
        "lng": 120.805777,
        "ele": 532,
        "distanceKm": 9.392427544168369,
        "gradePct": 13.41456549456989,
        "smoothedEle": 531.996801517347,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388275,
        "lng": 120.805619,
        "ele": 536.25,
        "distanceKm": 9.420460315443503,
        "gradePct": 14.154542201473127,
        "smoothedEle": 536.4813314761994,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388444,
        "lng": 120.80535,
        "ele": 541.5,
        "distanceKm": 9.4535554298193,
        "gradePct": 13.327214828108527,
        "smoothedEle": 540.0249618343752,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388483,
        "lng": 120.805205,
        "ele": 542.25,
        "distanceKm": 9.468866938929308,
        "gradePct": 12.625907552164154,
        "smoothedEle": 541.4109225853829,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388377,
        "lng": 120.804607,
        "ele": 544.5,
        "distanceKm": 9.530564410433287,
        "gradePct": 9.254060750523795,
        "smoothedEle": 546.8172793397612,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388425,
        "lng": 120.804575,
        "ele": 546.75,
        "distanceKm": 9.536808590882597,
        "gradePct": 9.209888647953028,
        "smoothedEle": 547.4416973846921,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388494,
        "lng": 120.804583,
        "ele": 549,
        "distanceKm": 9.544523708905455,
        "gradePct": 9.155310951581473,
        "smoothedEle": 548.2132091869779,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388602,
        "lng": 120.804661,
        "ele": 551.5,
        "distanceKm": 9.558897860474607,
        "gradePct": 8.935479434854788,
        "smoothedEle": 549.4440251635436,
        "gradeBand": "steep"
      },
      {
        "lat": 24.388701,
        "lng": 120.804866,
        "ele": 552.25,
        "distanceKm": 9.58239674447695,
        "gradePct": 10.012755154228365,
        "smoothedEle": 552.6092523478544,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388851,
        "lng": 120.805511,
        "ele": 560.5,
        "distanceKm": 9.649813382679882,
        "gradePct": 11.315123661577143,
        "smoothedEle": 559.9812719288941,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388796,
        "lng": 120.805951,
        "ele": 563.5,
        "distanceKm": 9.694791009145005,
        "gradePct": 9.134133526450373,
        "smoothedEle": 563.0987005897975,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.38852,
        "lng": 120.806563,
        "ele": 566.25,
        "distanceKm": 9.763952013303506,
        "gradePct": 6.934967869568734,
        "smoothedEle": 567.8961975195798,
        "gradeBand": "steep"
      },
      {
        "lat": 24.38851,
        "lng": 120.807131,
        "ele": 576,
        "distanceKm": 9.821485680741446,
        "gradePct": 8.70867126473141,
        "smoothedEle": 573.6591032830081,
        "gradeBand": "steep"
      },
      {
        "lat": 24.388395,
        "lng": 120.807375,
        "ele": 575.25,
        "distanceKm": 9.849308879517046,
        "gradePct": 9.727526111149736,
        "smoothedEle": 576.6079721933743,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388047,
        "lng": 120.80775,
        "ele": 580,
        "distanceKm": 9.903527439989352,
        "gradePct": 8.410992721001124,
        "smoothedEle": 580.2712944719688,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387754,
        "lng": 120.808024,
        "ele": 584.75,
        "distanceKm": 9.946323075326127,
        "gradePct": 9.498153406257336,
        "smoothedEle": 585.7896722248038,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387633,
        "lng": 120.808277,
        "ele": 591.5,
        "distanceKm": 9.975263049087449,
        "gradePct": 9.564503456136583,
        "smoothedEle": 587.9260907728456,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386998,
        "lng": 120.808279,
        "ele": 583.5,
        "distanceKm": 10.045872215547472,
        "gradePct": 0.8465302594718225,
        "smoothedEle": 586.5780653739699,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386895,
        "lng": 120.808344,
        "ele": 584.75,
        "distanceKm": 10.059082315373052,
        "gradePct": 0.11067732225535604,
        "smoothedEle": 586.8422673704816,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386846,
        "lng": 120.80844,
        "ele": 586.75,
        "distanceKm": 10.070227274465699,
        "gradePct": 0.2682284946736227,
        "smoothedEle": 587.8225662592272,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386822,
        "lng": 120.808612,
        "ele": 591,
        "distanceKm": 10.087849659541284,
        "gradePct": 1.5676562645336445,
        "smoothedEle": 589.2534514578084,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386771,
        "lng": 120.808743,
        "ele": 593.5,
        "distanceKm": 10.102277777105694,
        "gradePct": 2.961287840517467,
        "smoothedEle": 590.3716305690502,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386707,
        "lng": 120.808789,
        "ele": 593.5,
        "distanceKm": 10.110783482570765,
        "gradePct": 3.7962436876668018,
        "smoothedEle": 591.0442008850127,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386558,
        "lng": 120.808832,
        "ele": 591.75,
        "distanceKm": 10.127914304650202,
        "gradePct": 5.828148816445739,
        "smoothedEle": 592.7490552295316,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386468,
        "lng": 120.808869,
        "ele": 591.25,
        "distanceKm": 10.138600386370573,
        "gradePct": 6.640956897809384,
        "smoothedEle": 593.3578514198658,
        "gradeBand": "steep"
      },
      {
        "lat": 24.38628,
        "lng": 120.809202,
        "ele": 596.25,
        "distanceKm": 10.178278344518924,
        "gradePct": 8.706565792489672,
        "smoothedEle": 597.1828549684781,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386192,
        "lng": 120.809561,
        "ele": 604,
        "distanceKm": 10.21592967329797,
        "gradePct": 10.027640726706672,
        "smoothedEle": 601.583988990188,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385921,
        "lng": 120.809792,
        "ele": 604,
        "distanceKm": 10.254078732035241,
        "gradePct": 5.530692023116691,
        "smoothedEle": 600.3806748392767,
        "gradeBand": "hard"
      },
      {
        "lat": 24.385539,
        "lng": 120.809807,
        "ele": 591.25,
        "distanceKm": 10.296582408891588,
        "gradePct": -0.46022535858901553,
        "smoothedEle": 598.8622258222526,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385587,
        "lng": 120.809919,
        "ele": 595,
        "distanceKm": 10.309118231729046,
        "gradePct": -1.4868072637318672,
        "smoothedEle": 599.3009796215637,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385889,
        "lng": 120.810095,
        "ele": 607.5,
        "distanceKm": 10.347136475653379,
        "gradePct": 5.2327995807807115,
        "smoothedEle": 605.832450080796,
        "gradeBand": "hard"
      },
      {
        "lat": 24.38616,
        "lng": 120.810416,
        "ele": 616,
        "distanceKm": 10.391463640533063,
        "gradePct": 17.01293614160392,
        "smoothedEle": 616.05803058505,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386206,
        "lng": 120.810418,
        "ele": 617.75,
        "distanceKm": 10.396582623054067,
        "gradePct": 18.014834470471506,
        "smoothedEle": 616.8770677884108,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.38644,
        "lng": 120.810197,
        "ele": 623.5,
        "distanceKm": 10.430904060630414,
        "gradePct": 20.072748784686453,
        "smoothedEle": 623.1164972248831,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386934,
        "lng": 120.80995,
        "ele": 632.25,
        "distanceKm": 10.491262011717996,
        "gradePct": 16.54424850676918,
        "smoothedEle": 632.5557664920163,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387186,
        "lng": 120.809897,
        "ele": 638,
        "distanceKm": 10.519792620960065,
        "gradePct": 14.334825697114233,
        "smoothedEle": 635.4313305016174,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387453,
        "lng": 120.809614,
        "ele": 636.25,
        "distanceKm": 10.561058390778118,
        "gradePct": 11.08767926954776,
        "smoothedEle": 638.919956879706,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387814,
        "lng": 120.809618,
        "ele": 643.75,
        "distanceKm": 10.601201858725814,
        "gradePct": 6.565343726347374,
        "smoothedEle": 640.1229348227425,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387841,
        "lng": 120.809473,
        "ele": 640,
        "distanceKm": 10.616190251558553,
        "gradePct": 5.841573199233401,
        "smoothedEle": 640.9098254464615,
        "gradeBand": "hard"
      },
      {
        "lat": 24.388168,
        "lng": 120.809269,
        "ele": 641.5,
        "distanceKm": 10.658010478014376,
        "gradePct": 3.978344495896422,
        "smoothedEle": 642.6406294864655,
        "gradeBand": "hard"
      },
      {
        "lat": 24.388801,
        "lng": 120.809239,
        "ele": 652,
        "distanceKm": 10.728462503809537,
        "gradePct": 8.23001974629213,
        "smoothedEle": 649.6477540582971,
        "gradeBand": "steep"
      },
      {
        "lat": 24.388862,
        "lng": 120.8091,
        "ele": 648.5,
        "distanceKm": 10.744088321895557,
        "gradePct": 9.679566576791819,
        "smoothedEle": 651.744003007931,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388923,
        "lng": 120.809052,
        "ele": 647.75,
        "distanceKm": 10.75243324876857,
        "gradePct": 9.855754947904565,
        "smoothedEle": 652.2655609374943,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388996,
        "lng": 120.80906,
        "ele": 649.25,
        "distanceKm": 10.760590821285502,
        "gradePct": 9.878140033700369,
        "smoothedEle": 652.7754092198027,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.389038,
        "lng": 120.809178,
        "ele": 654.25,
        "distanceKm": 10.773421116557993,
        "gradePct": 9.430081284212212,
        "smoothedEle": 653.6034454619491,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388884,
        "lng": 120.809441,
        "ele": 658.25,
        "distanceKm": 10.805085557385908,
        "gradePct": 9.365125153063138,
        "smoothedEle": 656.6878193731143,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.388652,
        "lng": 120.809636,
        "ele": 659.5,
        "distanceKm": 10.837573829711534,
        "gradePct": 8.308235482929293,
        "smoothedEle": 659.1783004145958,
        "gradeBand": "steep"
      },
      {
        "lat": 24.388345,
        "lng": 120.809835,
        "ele": 660,
        "distanceKm": 10.877215750847052,
        "gradePct": 8.220489648380779,
        "smoothedEle": 662.193563333585,
        "gradeBand": "steep"
      },
      {
        "lat": 24.388348,
        "lng": 120.810033,
        "ele": 665,
        "distanceKm": 10.897270556343374,
        "gradePct": 7.67768679798533,
        "smoothedEle": 663.6042615477595,
        "gradeBand": "steep"
      },
      {
        "lat": 24.388223,
        "lng": 120.81018,
        "ele": 666.75,
        "distanceKm": 10.917637668990242,
        "gradePct": 7.27779002140235,
        "smoothedEle": 664.9278272578683,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387881,
        "lng": 120.810355,
        "ele": 666.25,
        "distanceKm": 10.959593369972977,
        "gradePct": 6.146257013203262,
        "smoothedEle": 666.9994183160125,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387594,
        "lng": 120.810586,
        "ele": 668.25,
        "distanceKm": 10.999162613126062,
        "gradePct": 3.6795544784374803,
        "smoothedEle": 667.4067721625215,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387361,
        "lng": 120.810786,
        "ele": 667.75,
        "distanceKm": 11.032048803113007,
        "gradePct": 3.015324354015899,
        "smoothedEle": 668.6547110874063,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387297,
        "lng": 120.81089,
        "ele": 667,
        "distanceKm": 11.044760104105956,
        "gradePct": 3.118595093842498,
        "smoothedEle": 669.3856108945009,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387306,
        "lng": 120.810951,
        "ele": 667.75,
        "distanceKm": 11.051018334840085,
        "gradePct": 3.169438993949609,
        "smoothedEle": 669.7454591617133,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387412,
        "lng": 120.811289,
        "ele": 674,
        "distanceKm": 11.08722127758272,
        "gradePct": 5.612735867680519,
        "smoothedEle": 672.8965754548375,
        "gradeBand": "hard"
      },
      {
        "lat": 24.38749,
        "lng": 120.811848,
        "ele": 678.5,
        "distanceKm": 11.144493755889087,
        "gradePct": 7.576995085463209,
        "smoothedEle": 676.9472909574941,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387556,
        "lng": 120.812099,
        "ele": 678.5,
        "distanceKm": 11.170951612457653,
        "gradePct": 4.840730462424534,
        "smoothedEle": 676.3211888014869,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387551,
        "lng": 120.812182,
        "ele": 677.25,
        "distanceKm": 11.179375681307798,
        "gradePct": 3.55697038811992,
        "smoothedEle": 675.7706625086679,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387453,
        "lng": 120.812291,
        "ele": 672.5,
        "distanceKm": 11.194887053972703,
        "gradePct": 1.284891372416273,
        "smoothedEle": 674.7236448537868,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.387417,
        "lng": 120.812852,
        "ele": 671.75,
        "distanceKm": 11.251842398826843,
        "gradePct": -2.9458277198475673,
        "smoothedEle": 673.8275639962196,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387503,
        "lng": 120.813003,
        "ele": 675.5,
        "distanceKm": 11.269878516174014,
        "gradePct": -2.064071946026964,
        "smoothedEle": 674.2825107453637,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387524,
        "lng": 120.813131,
        "ele": 677.5,
        "distanceKm": 11.283050168394047,
        "gradePct": -1.2662704616756217,
        "smoothedEle": 674.2563641686705,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387481,
        "lng": 120.813239,
        "ele": 676.5,
        "distanceKm": 11.294987151024795,
        "gradePct": -0.43622725577211147,
        "smoothedEle": 674.2858427668464,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387245,
        "lng": 120.813518,
        "ele": 671.75,
        "distanceKm": 11.333548915228805,
        "gradePct": 0.4847002742263857,
        "smoothedEle": 674.6000764242026,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.387224,
        "lng": 120.813625,
        "ele": 672.25,
        "distanceKm": 11.344633947550484,
        "gradePct": 1.6574821839049094,
        "smoothedEle": 675.5984570499559,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.387248,
        "lng": 120.813744,
        "ele": 674.25,
        "distanceKm": 11.356977464892262,
        "gradePct": 2.81399923417474,
        "smoothedEle": 676.7710911974249,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.387438,
        "lng": 120.81414,
        "ele": 686,
        "distanceKm": 11.402306420375611,
        "gradePct": 10.690001701134443,
        "smoothedEle": 685.035488024876,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.38746,
        "lng": 120.814741,
        "ele": 697.5,
        "distanceKm": 11.463220996197709,
        "gradePct": 15.984923882530722,
        "smoothedEle": 693.8943386914887,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.3872455,
        "lng": 120.8150735,
        "ele": 692.8749999999999,
        "distanceKm": 11.504485886217958,
        "gradePct": 7.522551765288339,
        "smoothedEle": 692.8750010784893,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387031,
        "lng": 120.815406,
        "ele": 688.25,
        "distanceKm": 11.545750822875583,
        "gradePct": -1.3556892825782874,
        "smoothedEle": 689.9979495108671,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386988,
        "lng": 120.815878,
        "ele": 689.75,
        "distanceKm": 11.593790666732291,
        "gradePct": -1.6508176058906716,
        "smoothedEle": 691.48837997223,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387204459205414,
        "lng": 120.81629065640311,
        "ele": 697.9708095472547,
        "distanceKm": 11.64201763559534,
        "gradePct": 8.046912880792235,
        "smoothedEle": 698.3051456535957,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387438,
        "lng": 120.816693,
        "ele": 707.5,
        "distanceKm": 11.690336073308245,
        "gradePct": 13.928585196271506,
        "smoothedEle": 705.3097868170026,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387527976768816,
        "lng": 120.81711468433829,
        "ele": 708.4697641580198,
        "distanceKm": 11.734197874263158,
        "gradePct": 10.588638068205265,
        "smoothedEle": 707.7884793258919,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387546,
        "lng": 120.817552,
        "ele": 707,
        "distanceKm": 11.778531696360101,
        "gradePct": 4.051104220502353,
        "smoothedEle": 707.6496307279181,
        "gradeBand": "hard"
      },
      {
        "lat": 24.38746,
        "lng": 120.818152,
        "ele": 708.25,
        "distanceKm": 11.840043702369904,
        "gradePct": 1.935076378854326,
        "smoothedEle": 709.7052472215561,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.38746,
        "lng": 120.818324,
        "ele": 709.5,
        "distanceKm": 11.857462760517178,
        "gradePct": 4.224552507591299,
        "smoothedEle": 711.9401687983195,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387631,
        "lng": 120.818689,
        "ele": 719.5,
        "distanceKm": 11.899031318274329,
        "gradePct": 9.313817106832095,
        "smoothedEle": 717.6485069582245,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387653,
        "lng": 120.818796,
        "ele": 721.5,
        "distanceKm": 11.910140271924618,
        "gradePct": 9.803520506869098,
        "smoothedEle": 718.509450866122,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387653,
        "lng": 120.818861,
        "ele": 722.5,
        "distanceKm": 11.916723045472994,
        "gradePct": 10.093701444677698,
        "smoothedEle": 719.0196158161211,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.38761,
        "lng": 120.818925,
        "ele": 722,
        "distanceKm": 11.924777332125064,
        "gradePct": 10.448749425122552,
        "smoothedEle": 719.6438230316566,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387245,
        "lng": 120.819161,
        "ele": 717.25,
        "distanceKm": 11.971878047939008,
        "gradePct": 5.8030132799412035,
        "smoothedEle": 719.7227392174996,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387159,
        "lng": 120.819268,
        "ele": 718,
        "distanceKm": 11.986330453533844,
        "gradePct": 4.721634294449944,
        "smoothedEle": 720.6260145671768,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387116,
        "lng": 120.819397,
        "ele": 720.25,
        "distanceKm": 12.000242258380784,
        "gradePct": 3.844089550201161,
        "smoothedEle": 721.586444366676,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387116,
        "lng": 120.819762,
        "ele": 728.25,
        "distanceKm": 12.037207220760406,
        "gradePct": 6.977076070543628,
        "smoothedEle": 726.6417250999499,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386752,
        "lng": 120.820105,
        "ele": 732.75,
        "distanceKm": 12.090544680907282,
        "gradePct": 9.95305841189569,
        "smoothedEle": 730.8700107542818,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386323,
        "lng": 120.820212,
        "ele": 729.5,
        "distanceKm": 12.139462705582787,
        "gradePct": 5.150632278706117,
        "smoothedEle": 731.9711591830871,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386237,
        "lng": 120.82032,
        "ele": 730.25,
        "distanceKm": 12.15399126006024,
        "gradePct": 4.891447837295704,
        "smoothedEle": 732.8637145940437,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386237,
        "lng": 120.820684,
        "ele": 738,
        "distanceKm": 12.19085520495425,
        "gradePct": 5.692119632418346,
        "smoothedEle": 736.5691203064423,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386215,
        "lng": 120.820813,
        "ele": 740,
        "distanceKm": 12.204146685077195,
        "gradePct": 6.76611375762982,
        "smoothedEle": 737.9423066527412,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386151,
        "lng": 120.820921,
        "ele": 740.75,
        "distanceKm": 12.217195697969634,
        "gradePct": 7.777280781451309,
        "smoothedEle": 739.247207941985,
        "gradeBand": "steep"
      },
      {
        "lat": 24.385936,
        "lng": 120.821157,
        "ele": 740.25,
        "distanceKm": 12.251000902459687,
        "gradePct": 8.977879808476846,
        "smoothedEle": 741.6578830869033,
        "gradeBand": "steep"
      },
      {
        "lat": 24.385734696358575,
        "lng": 120.82171546639432,
        "ele": 746.9634113450368,
        "distanceKm": 12.311827874068435,
        "gradePct": 7.973518344143287,
        "smoothedEle": 746.6839438960084,
        "gradeBand": "steep"
      },
      {
        "lat": 24.385529,
        "lng": 120.822272,
        "ele": 752.25,
        "distanceKm": 12.372654944806918,
        "gradePct": 7.767413156795924,
        "smoothedEle": 751.214544182922,
        "gradeBand": "steep"
      },
      {
        "lat": 24.385443,
        "lng": 120.822659,
        "ele": 752.25,
        "distanceKm": 12.41299817960158,
        "gradePct": 7.143459160721729,
        "smoothedEle": 753.9145712619367,
        "gradeBand": "steep"
      },
      {
        "lat": 24.385788,
        "lng": 120.822986,
        "ele": 759,
        "distanceKm": 12.463677549618273,
        "gradePct": 8.299095357086602,
        "smoothedEle": 758.8449736199897,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386022,
        "lng": 120.823281,
        "ele": 764,
        "distanceKm": 12.503295754341218,
        "gradePct": 8.607474071574332,
        "smoothedEle": 761.8726970333951,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386364,
        "lng": 120.823891,
        "ele": 759.5,
        "distanceKm": 12.575839839466617,
        "gradePct": -1.916575846093117,
        "smoothedEle": 757.8578707268476,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386459,
        "lng": 120.824128,
        "ele": 754,
        "distanceKm": 12.60206361088576,
        "gradePct": -6.026555002802773,
        "smoothedEle": 755.7519785111989,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386501,
        "lng": 120.824183,
        "ele": 753,
        "distanceKm": 12.609332491008578,
        "gradePct": -6.077381028360058,
        "smoothedEle": 755.4612233062861,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386576,
        "lng": 120.824224,
        "ele": 752.75,
        "distanceKm": 12.61864863859436,
        "gradePct": -5.934440935518545,
        "smoothedEle": 755.0885774028549,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386978,
        "lng": 120.824344,
        "ele": 755.5,
        "distanceKm": 12.664971642099205,
        "gradePct": -3.8740920342794563,
        "smoothedEle": 754.5852601864765,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387196,
        "lng": 120.824507,
        "ele": 755,
        "distanceKm": 12.69429919741318,
        "gradePct": -2.1210130491229013,
        "smoothedEle": 754.2544843918913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387514,
        "lng": 120.825044,
        "ele": 749.75,
        "distanceKm": 12.759167893800852,
        "gradePct": -4.029615789828668,
        "smoothedEle": 750.6187043499556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38762350622454,
        "lng": 120.82539760840599,
        "ele": 749.5779304830928,
        "distanceKm": 12.79699259299271,
        "gradePct": -4.9602417060224475,
        "smoothedEle": 749.1432824471341,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387674,
        "lng": 120.82577,
        "ele": 748,
        "distanceKm": 12.835121628326375,
        "gradePct": -3.111984450467969,
        "smoothedEle": 748.8544721584925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387739,
        "lng": 120.826156,
        "ele": 749.25,
        "distanceKm": 12.874875711844163,
        "gradePct": -1.82255098484871,
        "smoothedEle": 748.1834410559069,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387674,
        "lng": 120.826328,
        "ele": 748,
        "distanceKm": 12.893734708752877,
        "gradePct": -3.868623197084744,
        "smoothedEle": 745.4017390118718,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387267,
        "lng": 120.826714,
        "ele": 733.25,
        "distanceKm": 12.953536841081096,
        "gradePct": -13.963124286439943,
        "smoothedEle": 734.5805073388123,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387181,
        "lng": 120.826886,
        "ele": 729.5,
        "distanceKm": 12.973408213000981,
        "gradePct": -17.70133568306341,
        "smoothedEle": 730.506876095236,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387142,
        "lng": 120.827349,
        "ele": 727.5,
        "distanceKm": 13.020498106613275,
        "gradePct": -13.36631557288074,
        "smoothedEle": 727.1925705618376,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3871185,
        "lng": 120.82776100000001,
        "ele": 724.625,
        "distanceKm": 13.06230468038444,
        "gradePct": -8.1581001703386,
        "smoothedEle": 724.6250001112883,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387095,
        "lng": 120.828173,
        "ele": 721.75,
        "distanceKm": 13.104111261897405,
        "gradePct": -6.3074097368264805,
        "smoothedEle": 722.038508304704,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387037,
        "lng": 120.828903,
        "ele": 717.5,
        "distanceKm": 13.178321987259894,
        "gradePct": -8.23255440034373,
        "smoothedEle": 715.4014861180378,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386816,
        "lng": 120.829418,
        "ele": 705,
        "distanceKm": 13.235977411771744,
        "gradePct": -14.331780393957096,
        "smoothedEle": 704.856784823861,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386709,
        "lng": 120.829504,
        "ele": 700,
        "distanceKm": 13.250722449235443,
        "gradePct": -15.973702598095372,
        "smoothedEle": 701.8961429830156,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386623,
        "lng": 120.829482,
        "ele": 698.25,
        "distanceKm": 13.260541351076746,
        "gradePct": -16.684469401405128,
        "smoothedEle": 700.3072245506643,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38658,
        "lng": 120.829461,
        "ele": 697.5,
        "distanceKm": 13.265774398302051,
        "gradePct": -16.63509659060657,
        "smoothedEle": 699.8885807726399,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386552,
        "lng": 120.829418,
        "ele": 697.75,
        "distanceKm": 13.271127704720959,
        "gradePct": -16.584589157062226,
        "smoothedEle": 699.4603162591272,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386365,
        "lng": 120.82901,
        "ele": 697,
        "distanceKm": 13.317384675945924,
        "gradePct": -12.257094864241864,
        "smoothedEle": 696.000147890243,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386108,
        "lng": 120.828645,
        "ele": 692.5,
        "distanceKm": 13.364108119112618,
        "gradePct": -6.979440762036372,
        "smoothedEle": 693.0424423457581,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38593643111775,
        "lng": 120.82828079547157,
        "ele": 690.2552958405704,
        "distanceKm": 13.405634473021275,
        "gradePct": -7.062294060386559,
        "smoothedEle": 689.8168063295805,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385808,
        "lng": 120.827894,
        "ele": 686.5,
        "distanceKm": 13.447329096270188,
        "gradePct": -7.961729975385225,
        "smoothedEle": 686.142864590513,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3857,
        "lng": 120.827529,
        "ele": 681.75,
        "distanceKm": 13.48619624980837,
        "gradePct": -7.274852692830135,
        "smoothedEle": 684.051853422895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385811,
        "lng": 120.827036,
        "ele": 685.25,
        "distanceKm": 13.537627774412554,
        "gradePct": -2.6789631787535297,
        "smoothedEle": 684.3187380434304,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385829,
        "lng": 120.826907,
        "ele": 685.75,
        "distanceKm": 13.550844666825773,
        "gradePct": -1.6376113636728238,
        "smoothedEle": 684.3161193020968,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385786,
        "lng": 120.826778,
        "ele": 684.75,
        "distanceKm": 13.564756600777356,
        "gradePct": -1.1626240181241243,
        "smoothedEle": 684.0426595243606,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385378,
        "lng": 120.8265,
        "ele": 680.5,
        "distanceKm": 13.618150355757479,
        "gradePct": -4.882593924518136,
        "smoothedEle": 679.3350733548862,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384949,
        "lng": 120.826521,
        "ele": 672.25,
        "distanceKm": 13.665900432077812,
        "gradePct": -11.611347097449807,
        "smoothedEle": 672.3304638461686,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384542,
        "lng": 120.826757,
        "ele": 663.75,
        "distanceKm": 13.717080537827988,
        "gradePct": -14.522245797950228,
        "smoothedEle": 664.9071505744986,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38442,
        "lng": 120.826773,
        "ele": 662.25,
        "distanceKm": 13.730742773037813,
        "gradePct": -14.1518583669204,
        "smoothedEle": 663.3359935253687,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384327,
        "lng": 120.826757,
        "ele": 661.5,
        "distanceKm": 13.741210102157654,
        "gradePct": -13.82011564722159,
        "smoothedEle": 662.1322506765871,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384005,
        "lng": 120.826542,
        "ele": 660.75,
        "distanceKm": 13.783116055240765,
        "gradePct": -9.238148343384555,
        "smoothedEle": 660.5953108164431,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383769,
        "lng": 120.826285,
        "ele": 659.5,
        "distanceKm": 13.820076898893165,
        "gradePct": -4.920888119717706,
        "smoothedEle": 659.6416809322856,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383555,
        "lng": 120.825856,
        "ele": 658.5,
        "distanceKm": 13.869614139915761,
        "gradePct": -1.9006469268448494,
        "smoothedEle": 659.1898592097031,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383426,
        "lng": 120.825319,
        "ele": 660.5,
        "distanceKm": 13.925859598434158,
        "gradePct": 1.491167129115416,
        "smoothedEle": 661.0801049288838,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.383361,
        "lng": 120.824912,
        "ele": 664,
        "distanceKm": 13.967708150222734,
        "gradePct": 6.470073962627362,
        "smoothedEle": 665.6773174175679,
        "gradeBand": "steep"
      },
      {
        "lat": 24.383297,
        "lng": 120.824654,
        "ele": 670,
        "distanceKm": 13.994789362505694,
        "gradePct": 9.416822580571225,
        "smoothedEle": 669.4527475524455,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.383276,
        "lng": 120.82459,
        "ele": 671.5,
        "distanceKm": 14.001678877940366,
        "gradePct": 9.94404552980965,
        "smoothedEle": 670.2115070097091,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.383168,
        "lng": 120.824504,
        "ele": 674,
        "distanceKm": 14.016513928124212,
        "gradePct": 10.175438107320282,
        "smoothedEle": 670.9414623306396,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.383104,
        "lng": 120.824482,
        "ele": 674.75,
        "distanceKm": 14.023971056880812,
        "gradePct": 10.129896812822757,
        "smoothedEle": 671.1465333714461,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.383018,
        "lng": 120.824482,
        "ele": 674.75,
        "distanceKm": 14.03353383378085,
        "gradePct": 9.349258071990027,
        "smoothedEle": 671.2724050911988,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382975,
        "lng": 120.824504,
        "ele": 674,
        "distanceKm": 14.038808878338273,
        "gradePct": 8.598336688250727,
        "smoothedEle": 671.1009661430827,
        "gradeBand": "steep"
      },
      {
        "lat": 24.382718,
        "lng": 120.824697,
        "ele": 666.75,
        "distanceKm": 14.073431400049351,
        "gradePct": -1.1777156493219578,
        "smoothedEle": 665.2974881272123,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382439,
        "lng": 120.825019,
        "ele": 652.5,
        "distanceKm": 14.118441994704263,
        "gradePct": -16.205601704843335,
        "smoothedEle": 654.7888824567477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38201,
        "lng": 120.825319,
        "ele": 645,
        "distanceKm": 14.17499899006187,
        "gradePct": -19.16384945338684,
        "smoothedEle": 645.7676540557414,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381794,
        "lng": 120.825378,
        "ele": 642.75,
        "distanceKm": 14.199749270528795,
        "gradePct": -16.716105751752995,
        "smoothedEle": 642.4369595995506,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381387,
        "lng": 120.82558449999999,
        "ele": 638.125,
        "distanceKm": 14.249604416682459,
        "gradePct": -11.693261910886276,
        "smoothedEle": 638.125000653197,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38098,
        "lng": 120.825791,
        "ele": 633.5,
        "distanceKm": 14.29945959108248,
        "gradePct": -8.977692511407586,
        "smoothedEle": 633.4982498272358,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380937,
        "lng": 120.825834,
        "ele": 632.5,
        "distanceKm": 14.305927017204104,
        "gradePct": -8.967572068383593,
        "smoothedEle": 632.9350757880462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380915,
        "lng": 120.825877,
        "ele": 632,
        "distanceKm": 14.31092204255712,
        "gradePct": -9.19115067004444,
        "smoothedEle": 632.2794787104629,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380915,
        "lng": 120.82592,
        "ele": 631.5,
        "distanceKm": 14.315277032587684,
        "gradePct": -9.386081128343823,
        "smoothedEle": 631.7078862689514,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380937,
        "lng": 120.825985,
        "ele": 630.5,
        "distanceKm": 14.322299985214835,
        "gradePct": -9.700430269126661,
        "smoothedEle": 630.7861237366377,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381516,
        "lng": 120.826049,
        "ele": 625,
        "distanceKm": 14.38700740201462,
        "gradePct": -6.513101248501721,
        "smoothedEle": 628.1407593402666,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381774,
        "lng": 120.825791,
        "ele": 631.75,
        "distanceKm": 14.425811863192692,
        "gradePct": -0.43007607128868286,
        "smoothedEle": 630.2124752987412,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381859,
        "lng": 120.825748,
        "ele": 633.5,
        "distanceKm": 14.436218498891344,
        "gradePct": 0.46366593754135177,
        "smoothedEle": 630.6807739051804,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.381902,
        "lng": 120.825748,
        "ele": 633.75,
        "distanceKm": 14.440999887341562,
        "gradePct": 0.8743008288011,
        "smoothedEle": 630.8959363854403,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.382246,
        "lng": 120.826113,
        "ele": 629.5,
        "distanceKm": 14.49419448003929,
        "gradePct": 1.0569597173990852,
        "smoothedEle": 629.5814271104637,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.382289,
        "lng": 120.826263,
        "ele": 628,
        "distanceKm": 14.510120820013473,
        "gradePct": -2.0230129153690157,
        "smoothedEle": 627.3517395140782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382224,
        "lng": 120.826864,
        "ele": 619.75,
        "distanceKm": 14.57141637413745,
        "gradePct": -8.86834984384851,
        "smoothedEle": 621.2759546185391,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382246,
        "lng": 120.827293,
        "ele": 619.5,
        "distanceKm": 14.614933355059927,
        "gradePct": -10.115009443081853,
        "smoothedEle": 616.7596982835789,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3821705,
        "lng": 120.8276795,
        "ele": 610.125,
        "distanceKm": 14.654967371267544,
        "gradePct": -12.781424216747428,
        "smoothedEle": 610.1250010715161,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382095,
        "lng": 120.828066,
        "ele": 600.75,
        "distanceKm": 14.69500141033417,
        "gradePct": -17.812190710956493,
        "smoothedEle": 601.0160741350901,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382095,
        "lng": 120.828495,
        "ele": 591.75,
        "distanceKm": 14.738449626252798,
        "gradePct": -21.98924276983856,
        "smoothedEle": 590.873186298673,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381988,
        "lng": 120.828753,
        "ele": 583.5,
        "distanceKm": 14.767160617211205,
        "gradePct": -22.826527582822532,
        "smoothedEle": 584.5241497130224,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381945,
        "lng": 120.828817,
        "ele": 581.5,
        "distanceKm": 14.775215137639375,
        "gradePct": -22.027061939090764,
        "smoothedEle": 583.490973939633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381945,
        "lng": 120.828989,
        "ele": 578.5,
        "distanceKm": 14.792634955834696,
        "gradePct": -19.147131096968064,
        "smoothedEle": 582.4073813680194,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382006,
        "lng": 120.829052,
        "ele": 578.5,
        "distanceKm": 14.801947242368493,
        "gradePct": -17.566470897113113,
        "smoothedEle": 581.8281144434386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382415587129312,
        "lng": 120.82906629332815,
        "ele": 585.5295414426041,
        "distanceKm": 14.847514315857484,
        "gradePct": -3.221239212881312,
        "smoothedEle": 585.6474169732262,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382825,
        "lng": 120.829096,
        "ele": 593,
        "distanceKm": 14.893138320628431,
        "gradePct": 8.067641126854056,
        "smoothedEle": 590.4437108964867,
        "gradeBand": "steep"
      },
      {
        "lat": 24.382868,
        "lng": 120.829139,
        "ele": 593,
        "distanceKm": 14.899605702951781,
        "gradePct": 8.791400522156923,
        "smoothedEle": 590.7651694546171,
        "gradeBand": "steep"
      },
      {
        "lat": 24.382975,
        "lng": 120.829568,
        "ele": 590.5,
        "distanceKm": 14.94465325757434,
        "gradePct": 3.464028030651446,
        "smoothedEle": 588.8716392340091,
        "gradeBand": "hard"
      },
      {
        "lat": 24.382943,
        "lng": 120.82972,
        "ele": 588,
        "distanceKm": 14.960453272314767,
        "gradePct": 0.08649283333193156,
        "smoothedEle": 587.0941375757109,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.382932,
        "lng": 120.829761,
        "ele": 587.25,
        "distanceKm": 14.96478203987636,
        "gradePct": -1.037402173215586,
        "smoothedEle": 586.4253109406294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382782,
        "lng": 120.829911,
        "ele": 581.75,
        "distanceKm": 14.987342675040557,
        "gradePct": -6.525692348731151,
        "smoothedEle": 583.3087423596163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382396,
        "lng": 120.83008299999999,
        "ele": 577.5000000000001,
        "distanceKm": 15.033664214857929,
        "gradePct": -11.833552549936185,
        "smoothedEle": 577.5000004250833,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38201,
        "lng": 120.830255,
        "ele": 573.25,
        "distanceKm": 15.079985774679216,
        "gradePct": -11.332509639955601,
        "smoothedEle": 572.9925287748438,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381881,
        "lng": 120.830276,
        "ele": 572.5,
        "distanceKm": 15.094486758114119,
        "gradePct": -11.087955448026985,
        "smoothedEle": 571.3249156798298,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381816,
        "lng": 120.830255,
        "ele": 571.5,
        "distanceKm": 15.10202086783044,
        "gradePct": -11.00959731715788,
        "smoothedEle": 570.4584930624528,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381602,
        "lng": 120.830104,
        "ele": 566,
        "distanceKm": 15.130307148809248,
        "gradePct": -11.35474748807489,
        "smoothedEle": 566.5662305299566,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381194,
        "lng": 120.830126,
        "ele": 560,
        "distanceKm": 15.175729423253845,
        "gradePct": -11.193189651322921,
        "smoothedEle": 562.2135173907756,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380808,
        "lng": 120.830448,
        "ele": 562.5,
        "distanceKm": 15.229634573324768,
        "gradePct": -4.744560473237601,
        "smoothedEle": 561.9142181142199,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380415578071375,
        "lng": 120.8306611555475,
        "ele": 562.4625995969383,
        "distanceKm": 15.278318219055722,
        "gradePct": -0.22958147945337343,
        "smoothedEle": 561.9695620581814,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380014,
        "lng": 120.830855,
        "ele": 560.5,
        "distanceKm": 15.327096991739912,
        "gradePct": -1.6133499237678337,
        "smoothedEle": 560.3149576852694,
        "gradeBand": "descent"
      },
      {
        "lat": 24.379735,
        "lng": 120.831242,
        "ele": 557.75,
        "distanceKm": 15.377084183365074,
        "gradePct": -6.5665389250418915,
        "smoothedEle": 555.4016202718483,
        "gradeBand": "descent"
      },
      {
        "lat": 24.37952,
        "lng": 120.831585,
        "ele": 547.25,
        "distanceKm": 15.419254548254488,
        "gradePct": -12.748231727891085,
        "smoothedEle": 547.832746206992,
        "gradeBand": "descent"
      },
      {
        "lat": 24.379337999999997,
        "lng": 120.8320465,
        "ele": 537.2499999999998,
        "distanceKm": 15.470188355528212,
        "gradePct": -18.829421394103587,
        "smoothedEle": 537.2500030872998,
        "gradeBand": "descent"
      },
      {
        "lat": 24.379156,
        "lng": 120.832508,
        "ele": 527.25,
        "distanceKm": 15.52112222454793,
        "gradePct": -16.69191221944624,
        "smoothedEle": 530.7527785975761,
        "gradeBand": "descent"
      },
      {
        "lat": 24.37922,
        "lng": 120.832937,
        "ele": 531,
        "distanceKm": 15.56515038195795,
        "gradePct": -9.210253544649309,
        "smoothedEle": 529.0865116637568,
        "gradeBand": "descent"
      },
      {
        "lat": 24.379177,
        "lng": 120.833302,
        "ele": 528.5,
        "distanceKm": 15.602425592224703,
        "gradePct": -5.689235384623223,
        "smoothedEle": 527.4485223976051,
        "gradeBand": "descent"
      },
      {
        "lat": 24.379113,
        "lng": 120.83343,
        "ele": 527,
        "distanceKm": 15.617214316222455,
        "gradePct": -5.984093460240636,
        "smoothedEle": 525.2671856079368,
        "gradeBand": "descent"
      },
      {
        "lat": 24.379005,
        "lng": 120.833495,
        "ele": 524.5,
        "distanceKm": 15.630909444202775,
        "gradePct": -7.1352223003266575,
        "smoothedEle": 523.2471542308396,
        "gradeBand": "descent"
      },
      {
        "lat": 24.378727,
        "lng": 120.833538,
        "ele": 516.25,
        "distanceKm": 15.662126949852901,
        "gradePct": -13.005781886286218,
        "smoothedEle": 516.1951530293087,
        "gradeBand": "descent"
      },
      {
        "lat": 24.378362,
        "lng": 120.833559,
        "ele": 505.5,
        "distanceKm": 15.70276884526469,
        "gradePct": -21.1018817382509,
        "smoothedEle": 506.2960108359562,
        "gradeBand": "descent"
      },
      {
        "lat": 24.377933,
        "lng": 120.833817,
        "ele": 495,
        "distanceKm": 15.757159563633067,
        "gradePct": -21.789712331824568,
        "smoothedEle": 495.52756794183676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.377503,
        "lng": 120.834267,
        "ele": 484,
        "distanceKm": 15.823215575563552,
        "gradePct": -18.797364305584335,
        "smoothedEle": 483.4505395334477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.377224,
        "lng": 120.834675,
        "ele": 474,
        "distanceKm": 15.87488797935604,
        "gradePct": -16.59638091410142,
        "smoothedEle": 475.68989870189176,
        "gradeBand": "descent"
      },
      {
        "lat": 24.376946,
        "lng": 120.834954,
        "ele": 471.5,
        "distanceKm": 15.916769490677323,
        "gradePct": -13.911051494622702,
        "smoothedEle": 470.7180264945797,
        "gradeBand": "descent"
      },
      {
        "lat": 24.376559,
        "lng": 120.835297,
        "ele": 464.75,
        "distanceKm": 15.972074539154233,
        "gradePct": -11.187696272271562,
        "smoothedEle": 464.92475097206767,
        "gradeBand": "descent"
      },
      {
        "lat": 24.376259,
        "lng": 120.835619,
        "ele": 459.75,
        "distanceKm": 16.01872639348076,
        "gradePct": -9.943361825034835,
        "smoothedEle": 460.5696765640588,
        "gradeBand": "descent"
      },
      {
        "lat": 24.375851,
        "lng": 120.835791,
        "ele": 457.75,
        "distanceKm": 16.067323685702956,
        "gradePct": -9.280933849154028,
        "smoothedEle": 456.1414751806915,
        "gradeBand": "descent"
      },
      {
        "lat": 24.375379,
        "lng": 120.836048,
        "ele": 447.5,
        "distanceKm": 16.12590803893054,
        "gradePct": -10.826290386969633,
        "smoothedEle": 449.0889922620916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.374971,
        "lng": 120.836155,
        "ele": 445.5,
        "distanceKm": 16.172552075431078,
        "gradePct": -9.27109026289359,
        "smoothedEle": 446.2409825736921,
        "gradeBand": "descent"
      },
      {
        "lat": 24.374778,
        "lng": 120.836542,
        "ele": 446.25,
        "distanceKm": 16.21723929177842,
        "gradePct": -4.697567785043181,
        "smoothedEle": 445.4349828309061,
        "gradeBand": "descent"
      },
      {
        "lat": 24.374456,
        "lng": 120.836906,
        "ele": 443.75,
        "distanceKm": 16.26863175334671,
        "gradePct": -2.49523259847782,
        "smoothedEle": 443.98511852295564,
        "gradeBand": "descent"
      },
      {
        "lat": 24.374156134333614,
        "lng": 120.83711514136932,
        "ele": 442.51861051527794,
        "distanceKm": 16.308134938640713,
        "gradePct": -5.13210921837536,
        "smoothedEle": 440.46708402631407,
        "gradeBand": "descent"
      },
      {
        "lat": 24.373877,
        "lng": 120.837357,
        "ele": 434.5,
        "distanceKm": 16.347675531321055,
        "gradePct": -9.848258621424835,
        "smoothedEle": 434.72806875624,
        "gradeBand": "descent"
      },
      {
        "lat": 24.373577,
        "lng": 120.837936,
        "ele": 421,
        "distanceKm": 16.415143184059367,
        "gradePct": -17.55944043952386,
        "smoothedEle": 421.8904502483079,
        "gradeBand": "descent"
      },
      {
        "lat": 24.373233,
        "lng": 120.838258,
        "ele": 415.75,
        "distanceKm": 16.465410491036284,
        "gradePct": -16.55102938338245,
        "smoothedEle": 414.80246447900834,
        "gradeBand": "descent"
      },
      {
        "lat": 24.373148,
        "lng": 120.838344,
        "ele": 413.25,
        "distanceKm": 16.478263717143673,
        "gradePct": -16.001192461403775,
        "smoothedEle": 412.9066136281686,
        "gradeBand": "descent"
      },
      {
        "lat": 24.373104,
        "lng": 120.838451,
        "ele": 410.5,
        "distanceKm": 16.490154421500286,
        "gradePct": -15.492530415861843,
        "smoothedEle": 411.1527347355681,
        "gradeBand": "descent"
      },
      {
        "lat": 24.373025,
        "lng": 120.838797,
        "ele": 406.25,
        "distanceKm": 16.526283269181857,
        "gradePct": -13.014246150172978,
        "smoothedEle": 407.30538661126917,
        "gradeBand": "descent"
      },
      {
        "lat": 24.372962,
        "lng": 120.839266,
        "ele": 404.25,
        "distanceKm": 16.57429978124679,
        "gradePct": -9.399679415382858,
        "smoothedEle": 404.091614757576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.372954,
        "lng": 120.839658,
        "ele": 402,
        "distanceKm": 16.614013548200155,
        "gradePct": -6.489716281118056,
        "smoothedEle": 402.122268548303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.372954,
        "lng": 120.840018,
        "ele": 400.25,
        "distanceKm": 16.65047622551769,
        "gradePct": -4.951298635189844,
        "smoothedEle": 400.7348399552197,
        "gradeBand": "descent"
      },
      {
        "lat": 24.373089,
        "lng": 120.840417,
        "ele": 400,
        "distanceKm": 16.69358693091619,
        "gradePct": -1.9730844095662126,
        "smoothedEle": 401.1621094893762,
        "gradeBand": "descent"
      },
      {
        "lat": 24.372933,
        "lng": 120.840747,
        "ele": 403.5,
        "distanceKm": 16.731244195423372,
        "gradePct": 0.48382485642297746,
        "smoothedEle": 401.95045606831667,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.373162,
        "lng": 120.841144,
        "ele": 401.75,
        "distanceKm": 16.77883893135949,
        "gradePct": 0.5238408468329038,
        "smoothedEle": 401.5397831407971,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.37325519964344,
        "lng": 120.84159909566223,
        "ele": 399.2146464664619,
        "distanceKm": 16.826083928089513,
        "gradePct": -2.7409321852995454,
        "smoothedEle": 399.10149481738245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.373341,
        "lng": 120.842056,
        "ele": 396.25,
        "distanceKm": 16.873334665896753,
        "gradePct": -5.325200512479436,
        "smoothedEle": 396.26207638507384,
        "gradeBand": "descent"
      },
      {
        "lat": 24.37338,
        "lng": 120.842208,
        "ele": 395.5,
        "distanceKm": 16.889329087719485,
        "gradePct": -5.783198788974037,
        "smoothedEle": 395.2151931456911,
        "gradeBand": "descent"
      },
      {
        "lat": 24.37346,
        "lng": 120.842364,
        "ele": 394,
        "distanceKm": 16.907461532912766,
        "gradePct": -5.88042757023314,
        "smoothedEle": 394.1821588305174,
        "gradeBand": "descent"
      },
      {
        "lat": 24.373516,
        "lng": 120.842444,
        "ele": 393.25,
        "distanceKm": 16.917680617042546,
        "gradePct": -5.761789618158478,
        "smoothedEle": 393.7733954653262,
        "gradeBand": "descent"
      },
      {
        "lat": 24.373687,
        "lng": 120.8426,
        "ele": 392.25,
        "distanceKm": 16.94240305373601,
        "gradePct": -5.941993378885486,
        "smoothedEle": 392.17884318192415,
        "gradeBand": "descent"
      },
      {
        "lat": 24.374292,
        "lng": 120.842768,
        "ele": 387.75,
        "distanceKm": 17.01179466961945,
        "gradePct": -5.975801853294599,
        "smoothedEle": 388.03303150895533,
        "gradeBand": "descent"
      },
      {
        "lat": 24.374821,
        "lng": 120.842852,
        "ele": 385.75,
        "distanceKm": 17.071228956252718,
        "gradePct": -5.161368173194529,
        "smoothedEle": 385.2952674824146,
        "gradeBand": "descent"
      },
      {
        "lat": 24.37518,
        "lng": 120.843,
        "ele": 382.75,
        "distanceKm": 17.113869646169196,
        "gradePct": -4.938435581302586,
        "smoothedEle": 382.99901479972806,
        "gradeBand": "descent"
      },
      {
        "lat": 24.375532,
        "lng": 120.843389,
        "ele": 380,
        "distanceKm": 17.16940602060376,
        "gradePct": -5.498393400752242,
        "smoothedEle": 379.8808452694249,
        "gradeBand": "descent"
      },
      {
        "lat": 24.375815,
        "lng": 120.843657,
        "ele": 377.5,
        "distanceKm": 17.210963654035776,
        "gradePct": -6.261527428110892,
        "smoothedEle": 376.8939785598531,
        "gradeBand": "descent"
      },
      {
        "lat": 24.376195,
        "lng": 120.843768,
        "ele": 372.75,
        "distanceKm": 17.254687821520122,
        "gradePct": -7.594726929470659,
        "smoothedEle": 373.11249277276147,
        "gradeBand": "descent"
      },
      {
        "lat": 24.376637,
        "lng": 120.84378533333333,
        "ele": 368.9166666666667,
        "distanceKm": 17.303867391112195,
        "gradePct": -8.487340735364562,
        "smoothedEle": 368.91666666247534,
        "gradeBand": "descent"
      },
      {
        "lat": 24.377079000000002,
        "lng": 120.84380266666666,
        "ele": 365.0833333333333,
        "distanceKm": 17.3530469604856,
        "gradePct": -8.171069353819913,
        "smoothedEle": 365.0833333291271,
        "gradeBand": "descent"
      },
      {
        "lat": 24.377521,
        "lng": 120.84382,
        "ele": 361.25,
        "distanceKm": 17.402226529639545,
        "gradePct": -8.133119203486784,
        "smoothedEle": 360.9235399287766,
        "gradeBand": "descent"
      },
      {
        "lat": 24.378009,
        "lng": 120.843893,
        "ele": 355.5,
        "distanceKm": 17.456991109496723,
        "gradePct": -8.517665989583968,
        "smoothedEle": 356.2320563439869,
        "gradeBand": "descent"
      },
      {
        "lat": 24.378337,
        "lng": 120.844223,
        "ele": 353.25,
        "distanceKm": 17.506461155263903,
        "gradePct": -6.742312874406213,
        "smoothedEle": 353.8184619851192,
        "gradeBand": "descent"
      },
      {
        "lat": 24.378547,
        "lng": 120.844778,
        "ele": 353.25,
        "distanceKm": 17.567329273555377,
        "gradePct": -3.988729520941888,
        "smoothedEle": 351.7389380749439,
        "gradeBand": "descent"
      },
      {
        "lat": 24.37874,
        "lng": 120.845068,
        "ele": 348.5,
        "distanceKm": 17.60370561355301,
        "gradePct": -5.944915315656403,
        "smoothedEle": 348.00798681047934,
        "gradeBand": "descent"
      },
      {
        "lat": 24.379243,
        "lng": 120.845449,
        "ele": 336,
        "distanceKm": 17.67165641171978,
        "gradePct": -13.858265418162349,
        "smoothedEle": 337.4368583091301,
        "gradeBand": "descent"
      },
      {
        "lat": 24.379465,
        "lng": 120.845698,
        "ele": 334.25,
        "distanceKm": 17.70694591966872,
        "gradePct": -13.010809348536597,
        "smoothedEle": 334.4930819508232,
        "gradeBand": "descent"
      },
      {
        "lat": 24.379832,
        "lng": 120.846275,
        "ele": 332,
        "distanceKm": 17.778222821479954,
        "gradePct": -4.789135719395165,
        "smoothedEle": 332.09996653037246,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380152,
        "lng": 120.846873,
        "ele": 330.5,
        "distanceKm": 17.84846704491314,
        "gradePct": -2.375845666659325,
        "smoothedEle": 330.72316832425116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380245,
        "lng": 120.847329,
        "ele": 330.5,
        "distanceKm": 17.895794064227665,
        "gradePct": -0.9903568153815032,
        "smoothedEle": 330.76521049877095,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380152,
        "lng": 120.847959,
        "ele": 332,
        "distanceKm": 17.960432664391536,
        "gradePct": 1.0570159556394705,
        "smoothedEle": 331.79081373996723,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.380336,
        "lng": 120.848465,
        "ele": 332.25,
        "distanceKm": 18.01561327340099,
        "gradePct": 1.0104494717009942,
        "smoothedEle": 332.09012601884825,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.380577,
        "lng": 120.848978,
        "ele": 331.75,
        "distanceKm": 18.074073376435578,
        "gradePct": 0.45273812969338034,
        "smoothedEle": 332.31754222027024,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.380601,
        "lng": 120.849354,
        "ele": 333.25,
        "distanceKm": 18.11224771272135,
        "gradePct": 0.4067858529057786,
        "smoothedEle": 332.4786562987399,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.38077,
        "lng": 120.849906,
        "ele": 331.75,
        "distanceKm": 18.171227549600893,
        "gradePct": -0.8764790811548995,
        "smoothedEle": 331.4299925611475,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380981164609544,
        "lng": 120.85026653173614,
        "ele": 329.5316451858232,
        "distanceKm": 18.214639788414562,
        "gradePct": -2.7101820364748233,
        "smoothedEle": 329.72594306567714,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381191,
        "lng": 120.850628,
        "ele": 328,
        "distanceKm": 18.258052167937816,
        "gradePct": -4.186235263898365,
        "smoothedEle": 327.4780160831326,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381383,
        "lng": 120.850918,
        "ele": 325,
        "distanceKm": 18.294362521319854,
        "gradePct": -5.494980907716844,
        "smoothedEle": 325.0269005317116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38183,
        "lng": 120.851298,
        "ele": 320,
        "distanceKm": 18.35722475461754,
        "gradePct": -7.096380684091527,
        "smoothedEle": 320.4244795082281,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382307,
        "lng": 120.85164,
        "ele": 317.25,
        "distanceKm": 18.420572779393563,
        "gradePct": -5.08068056621225,
        "smoothedEle": 318.0272515092227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382637,
        "lng": 120.851903,
        "ele": 318.25,
        "distanceKm": 18.465915409414947,
        "gradePct": -2.358626238046123,
        "smoothedEle": 317.7369798588374,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383108,
        "lng": 120.852224,
        "ele": 317,
        "distanceKm": 18.52755808281183,
        "gradePct": -1.6941004445978693,
        "smoothedEle": 316.28843298032524,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383375,
        "lng": 120.852435,
        "ele": 314,
        "distanceKm": 18.564138062082215,
        "gradePct": -3.0219729966580218,
        "smoothedEle": 314.72638497463856,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383677,
        "lng": 120.85265,
        "ele": 313.25,
        "distanceKm": 18.604160639067363,
        "gradePct": -3.7693809262723366,
        "smoothedEle": 313.0688707467465,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384131,
        "lng": 120.852959,
        "ele": 311.25,
        "distanceKm": 18.66355618011144,
        "gradePct": -3.519738444470086,
        "smoothedEle": 311.23149420887484,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384549,
        "lng": 120.853294,
        "ele": 309.25,
        "distanceKm": 18.721101142042993,
        "gradePct": -2.870272901218316,
        "smoothedEle": 309.6745503806845,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38494,
        "lng": 120.853643,
        "ele": 309.25,
        "distanceKm": 18.77713291704284,
        "gradePct": -1.7737949368902013,
        "smoothedEle": 309.0903653462545,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385423,
        "lng": 120.854056,
        "ele": 308.25,
        "distanceKm": 18.84520598629375,
        "gradePct": -2.028325918771514,
        "smoothedEle": 307.39490832444284,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385793,
        "lng": 120.854374,
        "ele": 304,
        "distanceKm": 18.897454159032453,
        "gradePct": -3.1272128871133993,
        "smoothedEle": 305.45702290155896,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386166,
        "lng": 120.854904,
        "ele": 306.75,
        "distanceKm": 18.96528713559562,
        "gradePct": -0.6852952085466102,
        "smoothedEle": 305.964803020786,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386531,
        "lng": 120.855498,
        "ele": 304.25,
        "distanceKm": 19.037855103039014,
        "gradePct": -1.9587606288846764,
        "smoothedEle": 303.80069329080055,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386747,
        "lng": 120.855771,
        "ele": 301.75,
        "distanceKm": 19.074478533746454,
        "gradePct": -2.8466098748827613,
        "smoothedEle": 302.8440888148717,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387129,
        "lng": 120.856062,
        "ele": 303,
        "distanceKm": 19.1261774619521,
        "gradePct": -1.2937132914476976,
        "smoothedEle": 302.85522864940884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387463,
        "lng": 120.856073,
        "ele": 303.5,
        "distanceKm": 19.16333332270267,
        "gradePct": 0.2601441893354453,
        "smoothedEle": 303.39534605843807,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.387984,
        "lng": 120.856039,
        "ele": 303.75,
        "distanceKm": 19.22136819745334,
        "gradePct": 0.6045124309791191,
        "smoothedEle": 303.4587048033776,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.388269,
        "lng": 120.856214,
        "ele": 303,
        "distanceKm": 19.25767785343714,
        "gradePct": -0.7981532579491841,
        "smoothedEle": 302.5149818828883,
        "gradeBand": "descent"
      },
      {
        "lat": 24.388588000000002,
        "lng": 120.856485,
        "ele": 300.3749999999999,
        "distanceKm": 19.30252685098591,
        "gradePct": -3.0631355891288896,
        "smoothedEle": 300.3749994435672,
        "gradeBand": "descent"
      },
      {
        "lat": 24.388907,
        "lng": 120.856756,
        "ele": 297.75,
        "distanceKm": 19.347375806139805,
        "gradePct": -4.541256611043585,
        "smoothedEle": 298.2414854006324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389212,
        "lng": 120.856926,
        "ele": 297,
        "distanceKm": 19.385409922680427,
        "gradePct": -3.6840881696723544,
        "smoothedEle": 297.5076502868242,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389441,
        "lng": 120.857418,
        "ele": 298.25,
        "distanceKm": 19.441365406864183,
        "gradePct": -1.1419589251254203,
        "smoothedEle": 297.38544776874977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389548,
        "lng": 120.857332,
        "ele": 297,
        "distanceKm": 19.456110333115884,
        "gradePct": -0.8349618126955983,
        "smoothedEle": 297.2379985062327,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389729,
        "lng": 120.856782,
        "ele": 296,
        "distanceKm": 19.51533452131811,
        "gradePct": -0.0646850244430643,
        "smoothedEle": 297.3776122168444,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389695,
        "lng": 120.856548,
        "ele": 298.25,
        "distanceKm": 19.539331799634315,
        "gradePct": 1.5528211504879783,
        "smoothedEle": 298.94271016262775,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.389856,
        "lng": 120.856457,
        "ele": 300.25,
        "distanceKm": 19.55946698911063,
        "gradePct": 3.810993649384218,
        "smoothedEle": 301.0569050576406,
        "gradeBand": "hard"
      },
      {
        "lat": 24.389861,
        "lng": 120.856283,
        "ele": 303.5,
        "distanceKm": 19.577097028715684,
        "gradePct": 6.0968889093257115,
        "smoothedEle": 303.38436095897225,
        "gradeBand": "steep"
      },
      {
        "lat": 24.389775,
        "lng": 120.856108,
        "ele": 306.5,
        "distanceKm": 19.597234938693216,
        "gradePct": 9.125760509392746,
        "smoothedEle": 306.46070519515763,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.389961,
        "lng": 120.855701,
        "ele": 313.5,
        "distanceKm": 19.64335049751527,
        "gradePct": 13.713703083495066,
        "smoothedEle": 313.07837652362326,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.390039,
        "lng": 120.855301,
        "ele": 318.5,
        "distanceKm": 19.684777218921212,
        "gradePct": 12.652315588279,
        "smoothedEle": 317.20993181048084,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.389964,
        "lng": 120.854663,
        "ele": 319.5,
        "distanceKm": 19.749924463854754,
        "gradePct": 4.969521783288756,
        "smoothedEle": 318.7035308180963,
        "gradeBand": "hard"
      },
      {
        "lat": 24.39,
        "lng": 120.854604,
        "ele": 318.5,
        "distanceKm": 19.757116479543637,
        "gradePct": 4.234270151381278,
        "smoothedEle": 318.6855507788741,
        "gradeBand": "hard"
      },
      {
        "lat": 24.390005,
        "lng": 120.854488,
        "ele": 318,
        "distanceKm": 19.768877129082753,
        "gradePct": 3.0166966650041473,
        "smoothedEle": 318.64088627807854,
        "gradeBand": "hard"
      },
      {
        "lat": 24.389815,
        "lng": 120.854142,
        "ele": 318.25,
        "distanceKm": 19.809793548473216,
        "gradePct": 0.8174494644286366,
        "smoothedEle": 318.6009184218935,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.389685,
        "lng": 120.853716,
        "ele": 319.75,
        "distanceKm": 19.85529266601248,
        "gradePct": 0.7255493370615693,
        "smoothedEle": 319.41565964976354,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.389646,
        "lng": 120.853297,
        "ele": 320,
        "distanceKm": 19.897946584619746,
        "gradePct": 2.115866270006306,
        "smoothedEle": 320.72835700821145,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.389617,
        "lng": 120.853161,
        "ele": 321,
        "distanceKm": 19.912092014109582,
        "gradePct": 2.644799816307644,
        "smoothedEle": 321.28687628292965,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.389553,
        "lng": 120.853086,
        "ele": 322,
        "distanceKm": 19.922500392350983,
        "gradePct": 2.869384853905972,
        "smoothedEle": 321.69784152584117,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.38968337369049,
        "lng": 120.85268285173983,
        "ele": 323.6984080361043,
        "distanceKm": 19.965825344076034,
        "gradePct": 4.167062157605355,
        "smoothedEle": 323.90687065752996,
        "gradeBand": "hard"
      },
      {
        "lat": 24.389794031268988,
        "lng": 120.85227175883571,
        "ele": 326.18820355227024,
        "distanceKm": 20.009237725086592,
        "gradePct": 4.911792154302973,
        "smoothedEle": 326.08596946007526,
        "gradeBand": "hard"
      },
      {
        "lat": 24.389934,
        "lng": 120.851891,
        "ele": 328.25,
        "distanceKm": 20.050820328100553,
        "gradePct": 3.903749139824926,
        "smoothedEle": 327.0455521840855,
        "gradeBand": "hard"
      },
      {
        "lat": 24.389794031268988,
        "lng": 120.85227175883571,
        "ele": 326.18820355227024,
        "distanceKm": 20.092402931114513,
        "gradePct": 0.845028043422348,
        "smoothedEle": 326.08596946007526,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.38968337369049,
        "lng": 120.85268285173983,
        "ele": 323.6984080361043,
        "distanceKm": 20.13581531212507,
        "gradePct": -2.7924176310813382,
        "smoothedEle": 323.90687065752996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389553,
        "lng": 120.853086,
        "ele": 322,
        "distanceKm": 20.179140263850122,
        "gradePct": -4.694184444860231,
        "smoothedEle": 321.69784152584117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389617,
        "lng": 120.853161,
        "ele": 321,
        "distanceKm": 20.189548642091523,
        "gradePct": -4.864960300347876,
        "smoothedEle": 321.28687628292965,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389646,
        "lng": 120.853297,
        "ele": 320,
        "distanceKm": 20.20369407158136,
        "gradePct": -4.79084992702808,
        "smoothedEle": 320.72835700821145,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389685,
        "lng": 120.853716,
        "ele": 319.75,
        "distanceKm": 20.246347990188625,
        "gradePct": -3.9541765333890457,
        "smoothedEle": 319.41565964976354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389815,
        "lng": 120.854142,
        "ele": 318.25,
        "distanceKm": 20.29184710772789,
        "gradePct": -2.6112213383426788,
        "smoothedEle": 318.58490214269364,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390005,
        "lng": 120.854488,
        "ele": 318,
        "distanceKm": 20.332763527118352,
        "gradePct": -1.1214899770775286,
        "smoothedEle": 318.71223885297564,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389964,
        "lng": 120.854663,
        "ele": 319.5,
        "distanceKm": 20.351063044979423,
        "gradePct": -0.2970881762922162,
        "smoothedEle": 319.03248041554434,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390056,
        "lng": 120.855178,
        "ele": 320,
        "distanceKm": 20.404211704788597,
        "gradePct": -0.23524526095911488,
        "smoothedEle": 318.38813696227743,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389961,
        "lng": 120.855701,
        "ele": 313.5,
        "distanceKm": 20.45821986825797,
        "gradePct": -5.836936004755815,
        "smoothedEle": 313.1087792460171,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389775,
        "lng": 120.856108,
        "ele": 306.5,
        "distanceKm": 20.504335427080026,
        "gradePct": -11.915337776286435,
        "smoothedEle": 306.4607051951576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389861,
        "lng": 120.856283,
        "ele": 303.5,
        "distanceKm": 20.524473337057557,
        "gradePct": -13.02317903811074,
        "smoothedEle": 303.38436095897225,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389856,
        "lng": 120.856457,
        "ele": 300.25,
        "distanceKm": 20.542103376662613,
        "gradePct": -13.627279067885842,
        "smoothedEle": 301.0569050576406,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389695,
        "lng": 120.856548,
        "ele": 298.25,
        "distanceKm": 20.562238566138927,
        "gradePct": -13.58672879600997,
        "smoothedEle": 298.94271016262775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389729,
        "lng": 120.856782,
        "ele": 296,
        "distanceKm": 20.586235844455132,
        "gradePct": -11.692350431838753,
        "smoothedEle": 297.3776122168444,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389548,
        "lng": 120.857332,
        "ele": 297,
        "distanceKm": 20.645460032657358,
        "gradePct": -3.466457671959866,
        "smoothedEle": 297.2379985062327,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389441,
        "lng": 120.857418,
        "ele": 298.25,
        "distanceKm": 20.66020495890906,
        "gradePct": -1.7707911530141902,
        "smoothedEle": 297.38544776874977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389212,
        "lng": 120.856926,
        "ele": 297,
        "distanceKm": 20.716160443092814,
        "gradePct": 0.2005816161421279,
        "smoothedEle": 297.5076502868242,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.388907,
        "lng": 120.856756,
        "ele": 297.75,
        "distanceKm": 20.754194559633437,
        "gradePct": 0.9161416246388837,
        "smoothedEle": 298.2414854006324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.388588000000002,
        "lng": 120.856485,
        "ele": 300.3749999999999,
        "distanceKm": 20.799043514787332,
        "gradePct": 2.90473122520588,
        "smoothedEle": 300.3749994435672,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.388269,
        "lng": 120.856214,
        "ele": 303,
        "distanceKm": 20.8438925123361,
        "gradePct": 4.4722655017182475,
        "smoothedEle": 302.5149818828883,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387984,
        "lng": 120.856039,
        "ele": 303.75,
        "distanceKm": 20.8802021683199,
        "gradePct": 4.032465306513075,
        "smoothedEle": 303.51116120993925,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387657,
        "lng": 120.856056,
        "ele": 303.75,
        "distanceKm": 20.916603695827813,
        "gradePct": 2.4008762433941455,
        "smoothedEle": 303.6137646278918,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.387249,
        "lng": 120.856091,
        "ele": 303.25,
        "distanceKm": 20.962109546984518,
        "gradePct": 0.19668492860654116,
        "smoothedEle": 303.2114631556139,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386969,
        "lng": 120.856,
        "ele": 302.75,
        "distanceKm": 20.99457950149869,
        "gradePct": -0.9635075140165418,
        "smoothedEle": 302.588178465793,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386747,
        "lng": 120.855771,
        "ele": 301.75,
        "distanceKm": 21.028450171914386,
        "gradePct": -0.6361802709379755,
        "smoothedEle": 302.87285376407857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386531,
        "lng": 120.855498,
        "ele": 304.25,
        "distanceKm": 21.065073602621826,
        "gradePct": 0.7820803348823689,
        "smoothedEle": 303.9366462596208,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386229,
        "lng": 120.854987,
        "ele": 306.75,
        "distanceKm": 21.126765332559614,
        "gradePct": 3.0439365221925097,
        "smoothedEle": 305.90262959384916,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386010331856358,
        "lng": 120.85468092199059,
        "ele": 305.53384262779525,
        "distanceKm": 21.166161822060776,
        "gradePct": 1.466068524056404,
        "smoothedEle": 305.43739400702066,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.385793,
        "lng": 120.854374,
        "ele": 304,
        "distanceKm": 21.205534265788437,
        "gradePct": 0.25365102307040027,
        "smoothedEle": 305.47969198045047,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.385423,
        "lng": 120.854056,
        "ele": 308.25,
        "distanceKm": 21.25778243852714,
        "gradePct": 1.858561657809931,
        "smoothedEle": 307.394908324443,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.38494,
        "lng": 120.853643,
        "ele": 309.25,
        "distanceKm": 21.325855507778048,
        "gradePct": 2.8657750708269583,
        "smoothedEle": 309.09036534625454,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.384549,
        "lng": 120.853294,
        "ele": 309.25,
        "distanceKm": 21.381887282777896,
        "gradePct": 1.6792764800401063,
        "smoothedEle": 309.6745503806845,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.384131,
        "lng": 120.852959,
        "ele": 311.25,
        "distanceKm": 21.43943224470945,
        "gradePct": 1.9995783489744383,
        "smoothedEle": 311.23149420887484,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.383677,
        "lng": 120.85265,
        "ele": 313.25,
        "distanceKm": 21.498827785753527,
        "gradePct": 2.935975957289558,
        "smoothedEle": 313.0688707467464,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.383375,
        "lng": 120.852435,
        "ele": 314,
        "distanceKm": 21.538850362738675,
        "gradePct": 3.5106342385669294,
        "smoothedEle": 314.7263849746385,
        "gradeBand": "hard"
      },
      {
        "lat": 24.383108,
        "lng": 120.852224,
        "ele": 317,
        "distanceKm": 21.57543034200906,
        "gradePct": 3.9433524950455885,
        "smoothedEle": 316.28843298032524,
        "gradeBand": "hard"
      },
      {
        "lat": 24.382637,
        "lng": 120.851903,
        "ele": 318.25,
        "distanceKm": 21.637073015405942,
        "gradePct": 3.0842028003759325,
        "smoothedEle": 317.73697985883746,
        "gradeBand": "hard"
      },
      {
        "lat": 24.382307,
        "lng": 120.85164,
        "ele": 317.25,
        "distanceKm": 21.682415645427326,
        "gradePct": 1.6499985574540452,
        "smoothedEle": 318.1025798283124,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.381871,
        "lng": 120.851328,
        "ele": 320,
        "distanceKm": 21.740285246996834,
        "gradePct": 2.1969366028249313,
        "smoothedEle": 319.9598168510095,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.381583,
        "lng": 120.851119,
        "ele": 321.75,
        "distanceKm": 21.778672695062113,
        "gradePct": 4.197016179280351,
        "smoothedEle": 322.2694164053372,
        "gradeBand": "hard"
      },
      {
        "lat": 24.381191,
        "lng": 120.850628,
        "ele": 328,
        "distanceKm": 21.844799855549603,
        "gradePct": 7.143394068931583,
        "smoothedEle": 327.374834547636,
        "gradeBand": "steep"
      },
      {
        "lat": 24.380981164609544,
        "lng": 120.85026653173614,
        "ele": 329.5316451858232,
        "distanceKm": 21.888212235072857,
        "gradePct": 6.720016272157597,
        "smoothedEle": 329.7259430656771,
        "gradeBand": "steep"
      },
      {
        "lat": 24.38077,
        "lng": 120.849906,
        "ele": 331.75,
        "distanceKm": 21.931624473886526,
        "gradePct": 5.072377444657476,
        "smoothedEle": 331.42999256114746,
        "gradeBand": "hard"
      },
      {
        "lat": 24.380601,
        "lng": 120.849354,
        "ele": 333.25,
        "distanceKm": 21.99060431076607,
        "gradePct": 2.6588176983117555,
        "smoothedEle": 332.4786562987398,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.380577,
        "lng": 120.848978,
        "ele": 331.75,
        "distanceKm": 22.02877864705184,
        "gradePct": 0.9992561712577839,
        "smoothedEle": 332.3175422202703,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.380336,
        "lng": 120.848465,
        "ele": 332.25,
        "distanceKm": 22.087238750086428,
        "gradePct": -0.2726662445696736,
        "smoothedEle": 332.14615025758644,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380152,
        "lng": 120.848008,
        "ele": 332.25,
        "distanceKm": 22.137843872324243,
        "gradePct": -0.30747335973648676,
        "smoothedEle": 331.9834916451175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380245,
        "lng": 120.847329,
        "ele": 330.5,
        "distanceKm": 22.207385774623386,
        "gradePct": -1.3148838918219594,
        "smoothedEle": 330.7665083548825,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380202,
        "lng": 120.846984,
        "ele": 330.5,
        "distanceKm": 22.242652790734308,
        "gradePct": -1.3343727913611851,
        "smoothedEle": 330.5649627815802,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380019046222998,
        "lng": 120.84662836505032,
        "ele": 330.7215896283397,
        "distanceKm": 22.284019377187857,
        "gradePct": -0.14417694136898057,
        "smoothedEle": 331.03124336863533,
        "gradeBand": "descent"
      },
      {
        "lat": 24.379832,
        "lng": 120.846275,
        "ele": 332,
        "distanceKm": 22.325412762257265,
        "gradePct": 1.2264348857679974,
        "smoothedEle": 331.88992177872257,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.3796,
        "lng": 120.845886,
        "ele": 333,
        "distanceKm": 22.372505102137595,
        "gradePct": 2.5095948472264453,
        "smoothedEle": 333.41105030271166,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.37937,
        "lng": 120.845583,
        "ele": 335.25,
        "distanceKm": 22.41245278184337,
        "gradePct": 4.351111540465178,
        "smoothedEle": 335.97218709272175,
        "gradeBand": "hard"
      },
      {
        "lat": 24.378901,
        "lng": 120.845199,
        "ele": 343.25,
        "distanceKm": 22.477508389442573,
        "gradePct": 10.753314329160634,
        "smoothedEle": 344.48513678390094,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.37863,
        "lng": 120.844942,
        "ele": 352,
        "distanceKm": 22.517327532758387,
        "gradePct": 13.167659055074507,
        "smoothedEle": 349.777739034021,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.378475672686697,
        "lng": 120.84458671311432,
        "ele": 353.3657910930214,
        "distanceKm": 22.55719366366924,
        "gradePct": 11.093541499103834,
        "smoothedEle": 352.92036419017603,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.378337,
        "lng": 120.844223,
        "ele": 353.25,
        "distanceKm": 22.59712792288785,
        "gradePct": 6.760350191382504,
        "smoothedEle": 353.85323737401035,
        "gradeBand": "steep"
      },
      {
        "lat": 24.378009,
        "lng": 120.843893,
        "ele": 355.5,
        "distanceKm": 22.64659796865503,
        "gradePct": 4.146944959583832,
        "smoothedEle": 356.2320563439869,
        "gradeBand": "hard"
      },
      {
        "lat": 24.377521,
        "lng": 120.84382,
        "ele": 361.25,
        "distanceKm": 22.701362548512208,
        "gradePct": 6.866676145900799,
        "smoothedEle": 360.92353992877645,
        "gradeBand": "steep"
      },
      {
        "lat": 24.377079000000002,
        "lng": 120.84380266666666,
        "ele": 365.0833333333333,
        "distanceKm": 22.750542117666154,
        "gradePct": 8.513395997284356,
        "smoothedEle": 365.0833333291271,
        "gradeBand": "steep"
      },
      {
        "lat": 24.376637,
        "lng": 120.84378533333333,
        "ele": 368.9166666666667,
        "distanceKm": 22.799721687039558,
        "gradePct": 8.133693404418237,
        "smoothedEle": 368.9166666624756,
        "gradeBand": "steep"
      },
      {
        "lat": 24.376195,
        "lng": 120.843768,
        "ele": 372.75,
        "distanceKm": 22.84890125663163,
        "gradePct": 8.167949657126085,
        "smoothedEle": 373.1124927727616,
        "gradeBand": "steep"
      },
      {
        "lat": 24.375815,
        "lng": 120.843657,
        "ele": 377.5,
        "distanceKm": 22.892625424115977,
        "gradePct": 8.53043469925921,
        "smoothedEle": 376.8939785598528,
        "gradeBand": "steep"
      },
      {
        "lat": 24.375532,
        "lng": 120.843389,
        "ele": 380,
        "distanceKm": 22.934183057547994,
        "gradePct": 7.929213618938265,
        "smoothedEle": 379.7860019493115,
        "gradeBand": "steep"
      },
      {
        "lat": 24.375278,
        "lng": 120.843096,
        "ele": 381.75,
        "distanceKm": 22.975150882529547,
        "gradePct": 6.902664997613855,
        "smoothedEle": 382.2853573638833,
        "gradeBand": "steep"
      },
      {
        "lat": 24.375014,
        "lng": 120.842903,
        "ele": 385,
        "distanceKm": 23.01041925820372,
        "gradePct": 6.224531434509655,
        "smoothedEle": 384.3567947598816,
        "gradeBand": "steep"
      },
      {
        "lat": 24.37465473382767,
        "lng": 120.84282559856621,
        "ele": 386.3786055664783,
        "distanceKm": 23.051129833423527,
        "gradePct": 5.556283736054502,
        "smoothedEle": 386.3761705953684,
        "gradeBand": "hard"
      },
      {
        "lat": 24.374292,
        "lng": 120.842768,
        "ele": 387.75,
        "distanceKm": 23.091883758897293,
        "gradePct": 4.896119832846965,
        "smoothedEle": 388.16425865995905,
        "gradeBand": "hard"
      },
      {
        "lat": 24.373797,
        "lng": 120.842654,
        "ele": 391.5,
        "distanceKm": 23.148123367215938,
        "gradePct": 4.99671816159757,
        "smoothedEle": 391.2237583362575,
        "gradeBand": "hard"
      },
      {
        "lat": 24.373516,
        "lng": 120.842444,
        "ele": 393.25,
        "distanceKm": 23.185921575183603,
        "gradePct": 5.645282136273442,
        "smoothedEle": 393.54794858361953,
        "gradeBand": "hard"
      },
      {
        "lat": 24.373341,
        "lng": 120.842056,
        "ele": 396.25,
        "distanceKm": 23.22977395759011,
        "gradePct": 5.867849491295972,
        "smoothedEle": 396.0933787415255,
        "gradeBand": "hard"
      },
      {
        "lat": 24.373218,
        "lng": 120.841401,
        "ele": 400.5,
        "distanceKm": 23.29751075733468,
        "gradePct": 6.170712857270726,
        "smoothedEle": 400.39136043998604,
        "gradeBand": "steep"
      },
      {
        "lat": 24.373162,
        "lng": 120.841144,
        "ele": 401.75,
        "distanceKm": 23.324275446537023,
        "gradePct": 6.033558834862361,
        "smoothedEle": 401.8077741674683,
        "gradeBand": "steep"
      },
      {
        "lat": 24.373052,
        "lng": 120.840902,
        "ele": 403,
        "distanceKm": 23.351668827663776,
        "gradePct": 4.746437522622433,
        "smoothedEle": 402.2290721962505,
        "gradeBand": "hard"
      },
      {
        "lat": 24.372933,
        "lng": 120.840747,
        "ele": 403.5,
        "distanceKm": 23.372200668611878,
        "gradePct": 3.1990158275629144,
        "smoothedEle": 401.9844205901738,
        "gradeBand": "hard"
      },
      {
        "lat": 24.37306,
        "lng": 120.840521,
        "ele": 401,
        "distanceKm": 23.399096714314037,
        "gradePct": 0.826861366348896,
        "smoothedEle": 401.3021522125419,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.373089,
        "lng": 120.840417,
        "ele": 400,
        "distanceKm": 23.41011289539584,
        "gradePct": 0.05109103882432391,
        "smoothedEle": 401.1093690436103,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.373083,
        "lng": 120.840297,
        "ele": 399.5,
        "distanceKm": 23.42228540590889,
        "gradePct": -0.8578624355927664,
        "smoothedEle": 400.84459682077664,
        "gradeBand": "descent"
      },
      {
        "lat": 24.372933,
        "lng": 120.839868,
        "ele": 401.25,
        "distanceKm": 23.46882803805208,
        "gradePct": -0.7213728628342335,
        "smoothedEle": 401.30323503861104,
        "gradeBand": "descent"
      },
      {
        "lat": 24.372964,
        "lng": 120.83947,
        "ele": 403,
        "distanceKm": 23.509286665782575,
        "gradePct": 1.953873638685281,
        "smoothedEle": 403.07770170052777,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.372976,
        "lng": 120.839074,
        "ele": 405,
        "distanceKm": 23.549417794993982,
        "gradePct": 4.260484807658255,
        "smoothedEle": 405.37244834154416,
        "gradeBand": "hard"
      },
      {
        "lat": 24.373104,
        "lng": 120.838451,
        "ele": 410.5,
        "distanceKm": 23.614103720469256,
        "gradePct": 8.348466786911553,
        "smoothedEle": 411.7016135167487,
        "gradeBand": "steep"
      },
      {
        "lat": 24.373148,
        "lng": 120.838344,
        "ele": 413.25,
        "distanceKm": 23.62599442482587,
        "gradePct": 9.36296726107535,
        "smoothedEle": 413.3960388875661,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.373469,
        "lng": 120.838087,
        "ele": 419.25,
        "distanceKm": 23.670171424409904,
        "gradePct": 11.908717907555173,
        "smoothedEle": 419.31179574992586,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.373813,
        "lng": 120.837464,
        "ele": 432.5,
        "distanceKm": 23.74396031856228,
        "gradePct": 17.320900878099433,
        "smoothedEle": 433.12275863431523,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.374199,
        "lng": 120.837078,
        "ele": 443.75,
        "distanceKm": 23.802018195953917,
        "gradePct": 16.206609784766155,
        "smoothedEle": 441.47912069155166,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.374487984125754,
        "lng": 120.83687160846694,
        "ele": 444.0365961089201,
        "distanceKm": 23.840352956600263,
        "gradePct": 12.18186957025898,
        "smoothedEle": 444.6294433716765,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.374735,
        "lng": 120.836606,
        "ele": 446.25,
        "distanceKm": 23.878799585905142,
        "gradePct": 7.271155403696309,
        "smoothedEle": 445.4083848524017,
        "gradeBand": "steep"
      },
      {
        "lat": 24.374907,
        "lng": 120.836263,
        "ele": 445.75,
        "distanceKm": 23.91845656950669,
        "gradePct": 3.1509167553496815,
        "smoothedEle": 445.98093100028535,
        "gradeBand": "hard"
      },
      {
        "lat": 24.374971,
        "lng": 120.836155,
        "ele": 445.5,
        "distanceKm": 23.931506397844494,
        "gradePct": 2.2416142313735143,
        "smoothedEle": 446.14405385450783,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.375079,
        "lng": 120.836091,
        "ele": 445.75,
        "distanceKm": 23.94515322779064,
        "gradePct": 1.5879407683111482,
        "smoothedEle": 446.31463922883466,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.375379,
        "lng": 120.836048,
        "ele": 447.5,
        "distanceKm": 23.978794850406278,
        "gradePct": 3.609789779323427,
        "smoothedEle": 449.01807868894514,
        "gradeBand": "hard"
      },
      {
        "lat": 24.375851,
        "lng": 120.835791,
        "ele": 457.75,
        "distanceKm": 24.03737920363386,
        "gradePct": 9.80099395310626,
        "smoothedEle": 456.0184578799813,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.376173,
        "lng": 120.835683,
        "ele": 459,
        "distanceKm": 24.074817639303046,
        "gradePct": 11.116370211337268,
        "smoothedEle": 459.81484037365124,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.376559,
        "lng": 120.835297,
        "ele": 464.75,
        "distanceKm": 24.132875025365,
        "gradePct": 9.572361210300393,
        "smoothedEle": 465.05260446318545,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.376946,
        "lng": 120.834954,
        "ele": 471.5,
        "distanceKm": 24.18818007384191,
        "gradePct": 9.69766715902185,
        "smoothedEle": 470.71802649457965,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.377224,
        "lng": 120.834675,
        "ele": 474,
        "distanceKm": 24.230061585163195,
        "gradePct": 10.891114416578846,
        "smoothedEle": 475.68989870189176,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.377503,
        "lng": 120.834267,
        "ele": 484,
        "distanceKm": 24.281733988955683,
        "gradePct": 13.392846811939629,
        "smoothedEle": 483.4505395334477,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.377933,
        "lng": 120.833817,
        "ele": 495,
        "distanceKm": 24.347790000886167,
        "gradePct": 16.88628036994628,
        "smoothedEle": 495.238796965347,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.378233,
        "lng": 120.833602,
        "ele": 502,
        "distanceKm": 24.38762667776701,
        "gradePct": 18.576199695598707,
        "smoothedEle": 503.0783396911981,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.378727,
        "lng": 120.833538,
        "ele": 516.25,
        "distanceKm": 24.442938172498675,
        "gradePct": 21.68723963805744,
        "smoothedEle": 516.0601865410763,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.379113,
        "lng": 120.83343,
        "ele": 527,
        "distanceKm": 24.48723133451829,
        "gradePct": 21.97863552838905,
        "smoothedEle": 524.9791747971531,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.37922,
        "lng": 120.832937,
        "ele": 531,
        "distanceKm": 24.53856046758835,
        "gradePct": 13.944390333079726,
        "smoothedEle": 528.977110612839,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.379156,
        "lng": 120.832508,
        "ele": 527.25,
        "distanceKm": 24.582588624998372,
        "gradePct": 6.708472068942929,
        "smoothedEle": 530.7527785975763,
        "gradeBand": "steep"
      },
      {
        "lat": 24.379337999999997,
        "lng": 120.8320465,
        "ele": 537.2499999999997,
        "distanceKm": 24.63352249401809,
        "gradePct": 8.665291367064572,
        "smoothedEle": 537.2500030872995,
        "gradeBand": "steep"
      },
      {
        "lat": 24.37952,
        "lng": 120.831585,
        "ele": 547.25,
        "distanceKm": 24.684456301291817,
        "gradePct": 16.84172314878059,
        "smoothedEle": 547.8327462069917,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.379735,
        "lng": 120.831242,
        "ele": 557.75,
        "distanceKm": 24.72662666618123,
        "gradePct": 19.03126254353795,
        "smoothedEle": 555.401620271848,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.380014,
        "lng": 120.830855,
        "ele": 560.5,
        "distanceKm": 24.77661385780639,
        "gradePct": 14.093384304558782,
        "smoothedEle": 560.2966712333352,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.380346499999998,
        "lng": 120.8306945,
        "ele": 562.1249999999999,
        "distanceKm": 24.81700187645386,
        "gradePct": 8.450868390714158,
        "smoothedEle": 562.1250001397989,
        "gradeBand": "steep"
      },
      {
        "lat": 24.380679,
        "lng": 120.830534,
        "ele": 563.75,
        "distanceKm": 24.857389877895308,
        "gradePct": 4.084089457742436,
        "smoothedEle": 562.4982312212687,
        "gradeBand": "hard"
      },
      {
        "lat": 24.381108,
        "lng": 120.83019,
        "ele": 560,
        "distanceKm": 24.91646074240501,
        "gradePct": -0.6611235739774107,
        "smoothedEle": 561.4393799191199,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381194,
        "lng": 120.830126,
        "ele": 560,
        "distanceKm": 24.92801326887832,
        "gradePct": -0.5274461683441056,
        "smoothedEle": 561.6993117647694,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381281,
        "lng": 120.830092,
        "ele": 560.5,
        "distanceKm": 24.9382818243402,
        "gradePct": -0.3404275230036498,
        "smoothedEle": 561.9812235447881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381328,
        "lng": 120.830081,
        "ele": 561,
        "distanceKm": 24.94362541659025,
        "gradePct": 0.038307845261896914,
        "smoothedEle": 562.4093397846799,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.381602,
        "lng": 120.830104,
        "ele": 566,
        "distanceKm": 24.97418178661981,
        "gradePct": 4.031651502461216,
        "smoothedEle": 566.2288860383745,
        "gradeBand": "hard"
      },
      {
        "lat": 24.381881,
        "lng": 120.830276,
        "ele": 572.5,
        "distanceKm": 25.009761332564118,
        "gradePct": 9.85963764805169,
        "smoothedEle": 571.4191051753783,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382335581257237,
        "lng": 120.83010992234134,
        "ele": 576.8347677286408,
        "distanceKm": 25.06303357248154,
        "gradePct": 12.12765976379677,
        "smoothedEle": 576.9630190348878,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382782,
        "lng": 120.829911,
        "ele": 581.75,
        "distanceKm": 25.11660560426186,
        "gradePct": 11.177016333293704,
        "smoothedEle": 583.308388400062,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382932,
        "lng": 120.829761,
        "ele": 587.25,
        "distanceKm": 25.139166239426057,
        "gradePct": 12.095834509096617,
        "smoothedEle": 586.575037606811,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382943,
        "lng": 120.82972,
        "ele": 588,
        "distanceKm": 25.14349500698765,
        "gradePct": 12.164450050900824,
        "smoothedEle": 587.0941375757109,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382975,
        "lng": 120.829568,
        "ele": 590.5,
        "distanceKm": 25.159295021728077,
        "gradePct": 12.297682182787351,
        "smoothedEle": 588.8716392340092,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382868,
        "lng": 120.829139,
        "ele": 593,
        "distanceKm": 25.204342576350637,
        "gradePct": 9.644829792694713,
        "smoothedEle": 591.5007169706407,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382825,
        "lng": 120.829096,
        "ele": 593,
        "distanceKm": 25.210809958673988,
        "gradePct": 8.28056419944357,
        "smoothedEle": 590.9024841057307,
        "gradeBand": "steep"
      },
      {
        "lat": 24.382168,
        "lng": 120.829045,
        "ele": 581.25,
        "distanceKm": 25.28404749254403,
        "gradePct": -8.202568366926808,
        "smoothedEle": 582.11368135691,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382006,
        "lng": 120.829052,
        "ele": 578.5,
        "distanceKm": 25.302075040807498,
        "gradePct": -10.274216957577519,
        "smoothedEle": 581.0941614818499,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381945,
        "lng": 120.828989,
        "ele": 578.5,
        "distanceKm": 25.311387327341293,
        "gradePct": -8.76124594307463,
        "smoothedEle": 582.0719515678984,
        "gradeBand": "descent"
      },
      {
        "lat": 24.381945,
        "lng": 120.828817,
        "ele": 581.5,
        "distanceKm": 25.328807145536615,
        "gradePct": -4.841715805934699,
        "smoothedEle": 583.9010324784073,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382095,
        "lng": 120.828495,
        "ele": 591.75,
        "distanceKm": 25.36543647482148,
        "gradePct": 6.560181176112358,
        "smoothedEle": 590.9072605609866,
        "gradeBand": "steep"
      },
      {
        "lat": 24.382095,
        "lng": 120.828066,
        "ele": 600.75,
        "distanceKm": 25.40888469074011,
        "gradePct": 19.206899410319874,
        "smoothedEle": 601.0160741350941,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382170499999997,
        "lng": 120.8276795,
        "ele": 610.1249999999995,
        "distanceKm": 25.448918729806653,
        "gradePct": 22.3771510496488,
        "smoothedEle": 610.1250010715083,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382246,
        "lng": 120.827293,
        "ele": 619.5,
        "distanceKm": 25.488952746014352,
        "gradePct": 20.381059981974712,
        "smoothedEle": 616.7596982835827,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382224,
        "lng": 120.826864,
        "ele": 619.75,
        "distanceKm": 25.53246972693683,
        "gradePct": 14.893587785585524,
        "smoothedEle": 621.2759546185392,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382289,
        "lng": 120.826263,
        "ele": 628,
        "distanceKm": 25.593765281060808,
        "gradePct": 10.179734953821223,
        "smoothedEle": 627.4388852083363,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382246,
        "lng": 120.826113,
        "ele": 629.5,
        "distanceKm": 25.60969162103499,
        "gradePct": 10.642892229256594,
        "smoothedEle": 629.5549014890689,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.381967,
        "lng": 120.825791,
        "ele": 633,
        "distanceKm": 25.654702303913574,
        "gradePct": 7.603600208687005,
        "smoothedEle": 631.1149180717259,
        "gradeBand": "steep"
      },
      {
        "lat": 24.381902,
        "lng": 120.825748,
        "ele": 633.75,
        "distanceKm": 25.66314060904881,
        "gradePct": 6.396547104436899,
        "smoothedEle": 630.7562901034784,
        "gradeBand": "steep"
      },
      {
        "lat": 24.381859,
        "lng": 120.825748,
        "ele": 633.5,
        "distanceKm": 25.667921997499025,
        "gradePct": 5.712595803913391,
        "smoothedEle": 630.5530810943442,
        "gradeBand": "hard"
      },
      {
        "lat": 24.381774,
        "lng": 120.825791,
        "ele": 631.75,
        "distanceKm": 25.678328633197676,
        "gradePct": 4.223983846471524,
        "smoothedEle": 630.1107990771516,
        "gradeBand": "hard"
      },
      {
        "lat": 24.381559,
        "lng": 120.826027,
        "ele": 625.25,
        "distanceKm": 25.712134422847885,
        "gradePct": -1.2313895199983842,
        "smoothedEle": 628.4081765662849,
        "gradeBand": "descent"
      },
      {
        "lat": 24.380937,
        "lng": 120.825985,
        "ele": 630.5,
        "distanceKm": 25.78142844532052,
        "gradePct": 0.9959602670290764,
        "smoothedEle": 630.9506378645639,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.380915,
        "lng": 120.82592,
        "ele": 631.5,
        "distanceKm": 25.78845139794767,
        "gradePct": 2.2538751627468763,
        "smoothedEle": 631.8548430153099,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.380915,
        "lng": 120.825877,
        "ele": 632,
        "distanceKm": 25.792806387978235,
        "gradePct": 3.0339184181955967,
        "smoothedEle": 632.4155479817449,
        "gradeBand": "hard"
      },
      {
        "lat": 24.380937,
        "lng": 120.825834,
        "ele": 632.5,
        "distanceKm": 25.797801413331253,
        "gradePct": 3.8750525747528304,
        "smoothedEle": 633.0051085854759,
        "gradeBand": "hard"
      },
      {
        "lat": 24.38098,
        "lng": 120.825791,
        "ele": 633.5,
        "distanceKm": 25.804268839452877,
        "gradePct": 4.693924569039088,
        "smoothedEle": 633.4982498272497,
        "gradeBand": "hard"
      },
      {
        "lat": 24.381387,
        "lng": 120.8255845,
        "ele": 638.1249999999999,
        "distanceKm": 25.854124013852292,
        "gradePct": 8.176187445369463,
        "smoothedEle": 638.1250006531689,
        "gradeBand": "steep"
      },
      {
        "lat": 24.381794,
        "lng": 120.825378,
        "ele": 642.75,
        "distanceKm": 25.90397916000656,
        "gradePct": 8.960797830096439,
        "smoothedEle": 642.4369595995645,
        "gradeBand": "steep"
      },
      {
        "lat": 24.38201,
        "lng": 120.825319,
        "ele": 645,
        "distanceKm": 25.928729440473486,
        "gradePct": 9.999366918679101,
        "smoothedEle": 645.7676540557553,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382439,
        "lng": 120.825019,
        "ele": 652.5,
        "distanceKm": 25.985286435831092,
        "gradePct": 13.968651830186701,
        "smoothedEle": 654.7888824567481,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.382718,
        "lng": 120.824697,
        "ele": 666.75,
        "distanceKm": 26.030297030486004,
        "gradePct": 18.88916154742238,
        "smoothedEle": 664.906856954431,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.383104,
        "lng": 120.824482,
        "ele": 674.75,
        "distanceKm": 26.07842572835429,
        "gradePct": 16.954817983712005,
        "smoothedEle": 670.6493705746443,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.383168,
        "lng": 120.824504,
        "ele": 674,
        "distanceKm": 26.08588285711089,
        "gradePct": 15.52134696881604,
        "smoothedEle": 670.4442995338378,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.383276,
        "lng": 120.82459,
        "ele": 671.5,
        "distanceKm": 26.100717907294737,
        "gradePct": 11.778598010206737,
        "smoothedEle": 670.036335653782,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.383297,
        "lng": 120.824654,
        "ele": 670,
        "distanceKm": 26.10760742272941,
        "gradePct": 9.710944212339404,
        "smoothedEle": 669.5173826007913,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.383361,
        "lng": 120.824912,
        "ele": 664,
        "distanceKm": 26.134688635012367,
        "gradePct": 0.24647269857643656,
        "smoothedEle": 665.6773174175681,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.383426,
        "lng": 120.825319,
        "ele": 660.5,
        "distanceKm": 26.176537186800942,
        "gradePct": -9.343932817888666,
        "smoothedEle": 661.0801049288838,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383555,
        "lng": 120.825856,
        "ele": 658.5,
        "distanceKm": 26.23278264531934,
        "gradePct": -6.757723976742244,
        "smoothedEle": 659.1898592097031,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383769,
        "lng": 120.826285,
        "ele": 659.5,
        "distanceKm": 26.282319886341938,
        "gradePct": -1.2440843407289146,
        "smoothedEle": 659.6416809322856,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384005,
        "lng": 120.826542,
        "ele": 660.75,
        "distanceKm": 26.319280729994336,
        "gradePct": 0.9516916354264006,
        "smoothedEle": 660.5953108164431,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.384327,
        "lng": 120.826757,
        "ele": 661.5,
        "distanceKm": 26.36118668307745,
        "gradePct": 2.6833225118261526,
        "smoothedEle": 662.132250676587,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.38442,
        "lng": 120.826773,
        "ele": 662.25,
        "distanceKm": 26.37165401219729,
        "gradePct": 3.7915944264958084,
        "smoothedEle": 663.3359935253687,
        "gradeBand": "hard"
      },
      {
        "lat": 24.384542,
        "lng": 120.826757,
        "ele": 663.75,
        "distanceKm": 26.385316247407115,
        "gradePct": 5.188160274430328,
        "smoothedEle": 664.9071505744986,
        "gradeBand": "hard"
      },
      {
        "lat": 24.384949,
        "lng": 120.826521,
        "ele": 672.25,
        "distanceKm": 26.436496353157292,
        "gradePct": 11.16772578356115,
        "smoothedEle": 672.3944356139795,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385314,
        "lng": 120.826478,
        "ele": 679.75,
        "distanceKm": 26.477315523301375,
        "gradePct": 14.527555233148767,
        "smoothedEle": 678.5146225354873,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385786,
        "lng": 120.826778,
        "ele": 684.75,
        "distanceKm": 26.537959377098,
        "gradePct": 11.208418404172061,
        "smoothedEle": 683.8222112455566,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385829,
        "lng": 120.826907,
        "ele": 685.75,
        "distanceKm": 26.551871311049585,
        "gradePct": 9.609462324764285,
        "smoothedEle": 684.3091289338619,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.385811,
        "lng": 120.827036,
        "ele": 685.25,
        "distanceKm": 26.565088203462803,
        "gradePct": 7.733100044002416,
        "smoothedEle": 684.4144299697434,
        "gradeBand": "steep"
      },
      {
        "lat": 24.385743,
        "lng": 120.827251,
        "ele": 683.25,
        "distanceKm": 26.588137817693983,
        "gradePct": 4.7221371936771455,
        "smoothedEle": 684.1839338274314,
        "gradeBand": "hard"
      },
      {
        "lat": 24.385743,
        "lng": 120.827723,
        "ele": 683.75,
        "distanceKm": 26.635939603401823,
        "gradePct": 0.9712782235049962,
        "smoothedEle": 684.6167175887208,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.385979,
        "lng": 120.828409,
        "ele": 691.5,
        "distanceKm": 26.710205071157922,
        "gradePct": 6.820928187096017,
        "smoothedEle": 691.2046526460705,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386365,
        "lng": 120.82901,
        "ele": 697,
        "distanceKm": 26.784682679502584,
        "gradePct": 7.4786370141092755,
        "smoothedEle": 696.4192514225723,
        "gradeBand": "steep"
      },
      {
        "lat": 24.38658,
        "lng": 120.829461,
        "ele": 697.5,
        "distanceKm": 26.83623580226491,
        "gradePct": 7.010300822362993,
        "smoothedEle": 700.0375122427939,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386623,
        "lng": 120.829482,
        "ele": 698.25,
        "distanceKm": 26.841468849490216,
        "gradePct": 7.585854076548691,
        "smoothedEle": 700.9794607433491,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386709,
        "lng": 120.829504,
        "ele": 700,
        "distanceKm": 26.85128775133152,
        "gradePct": 8.665779531828651,
        "smoothedEle": 702.7468630747837,
        "gradeBand": "steep"
      },
      {
        "lat": 24.386752,
        "lng": 120.829482,
        "ele": 701.75,
        "distanceKm": 26.856562768087354,
        "gradePct": 9.245948777201175,
        "smoothedEle": 703.6963660908341,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386816,
        "lng": 120.829418,
        "ele": 705,
        "distanceKm": 26.866188503490925,
        "gradePct": 10.275982635951632,
        "smoothedEle": 705.4003521504408,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.386974,
        "lng": 120.829114,
        "ele": 715,
        "distanceKm": 26.90163595753182,
        "gradePct": 14.43416899341755,
        "smoothedEle": 712.0432878455598,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387069,
        "lng": 120.828395,
        "ele": 719.75,
        "distanceKm": 26.975214169111354,
        "gradePct": 12.990849545241915,
        "smoothedEle": 720.0826325175685,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.38711212903798,
        "lng": 120.82787269516393,
        "ele": 723.8455737954155,
        "distanceKm": 27.028326966462014,
        "gradePct": 8.782029916864179,
        "smoothedEle": 723.7416460589,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387142,
        "lng": 120.827349,
        "ele": 727.5,
        "distanceKm": 27.081467503000127,
        "gradePct": 6.533254364637421,
        "smoothedEle": 727.0466876405698,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387159,
        "lng": 120.826993,
        "ele": 728.5,
        "distanceKm": 27.117570512183736,
        "gradePct": 6.710175461067043,
        "smoothedEle": 729.7107946145098,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387181,
        "lng": 120.826886,
        "ele": 729.5,
        "distanceKm": 27.12867950531104,
        "gradePct": 6.619555115470822,
        "smoothedEle": 730.3831271019412,
        "gradeBand": "steep"
      },
      {
        "lat": 24.387267,
        "lng": 120.826714,
        "ele": 733.25,
        "distanceKm": 27.148550877230925,
        "gradePct": 9.457299129475224,
        "smoothedEle": 734.4567583455173,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387674,
        "lng": 120.826328,
        "ele": 748,
        "distanceKm": 27.208353009559143,
        "gradePct": 16.460296603654562,
        "smoothedEle": 745.4909148677777,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387717,
        "lng": 120.826242,
        "ele": 749,
        "distanceKm": 27.21828866703629,
        "gradePct": 17.202165950690286,
        "smoothedEle": 746.9564243456568,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387739,
        "lng": 120.826156,
        "ele": 749.25,
        "distanceKm": 27.227335208826208,
        "gradePct": 17.989020944175962,
        "smoothedEle": 748.2907892596697,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387739,
        "lng": 120.82607,
        "ele": 749.25,
        "distanceKm": 27.23604471867183,
        "gradePct": 16.562511767668177,
        "smoothedEle": 748.4555076085713,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.387674,
        "lng": 120.82577,
        "ele": 748,
        "distanceKm": 27.26727461514844,
        "gradePct": 11.02119518209993,
        "smoothedEle": 748.9326907889869,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.38761,
        "lng": 120.825298,
        "ele": 750,
        "distanceKm": 27.31560252025617,
        "gradePct": 3.2583173156192053,
        "smoothedEle": 749.8185350112083,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387423459784227,
        "lng": 120.82489110661676,
        "ele": 751.2447677132358,
        "distanceKm": 27.36173609095115,
        "gradePct": 3.067860584852908,
        "smoothedEle": 751.9159244333295,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387196,
        "lng": 120.824507,
        "ele": 755,
        "distanceKm": 27.408135535599524,
        "gradePct": 4.24802917744233,
        "smoothedEle": 753.9296953299496,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386808,
        "lng": 120.82428,
        "ele": 754.75,
        "distanceKm": 27.457021943738955,
        "gradePct": 2.5481084657021347,
        "smoothedEle": 754.2497116932755,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386501,
        "lng": 120.824183,
        "ele": 753,
        "distanceKm": 27.49254419556179,
        "gradePct": 2.134231891818869,
        "smoothedEle": 755.3872513036571,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.38627224597364,
        "lng": 120.82372734515766,
        "ele": 760.7072898205531,
        "distanceKm": 27.545236489492524,
        "gradePct": 5.48410139215904,
        "smoothedEle": 759.656664070982,
        "gradeBand": "hard"
      },
      {
        "lat": 24.386022,
        "lng": 120.823281,
        "ele": 764,
        "distanceKm": 27.598317980699527,
        "gradePct": 5.862935462762866,
        "smoothedEle": 761.7180098605377,
        "gradeBand": "hard"
      },
      {
        "lat": 24.385788,
        "lng": 120.822986,
        "ele": 759,
        "distanceKm": 27.637936185422472,
        "gradePct": -0.3346801230601339,
        "smoothedEle": 758.7304740879979,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385486,
        "lng": 120.822744,
        "ele": 753,
        "distanceKm": 27.67950958403259,
        "gradePct": -6.273552732059012,
        "smoothedEle": 754.7140592365563,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385443,
        "lng": 120.822659,
        "ele": 752.25,
        "distanceKm": 27.6893567195505,
        "gradePct": -7.246780657816554,
        "smoothedEle": 754.1232311054818,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385443,
        "lng": 120.822551,
        "ele": 753.25,
        "distanceKm": 27.70029444224128,
        "gradePct": -8.390584617442864,
        "smoothedEle": 753.1783839223099,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385502,
        "lng": 120.82236,
        "ele": 753,
        "distanceKm": 27.72072025006444,
        "gradePct": -8.117798188885216,
        "smoothedEle": 751.9108978427756,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38564492945113,
        "lng": 120.82195834041026,
        "ele": 749.2705047606707,
        "distanceKm": 27.764392876804504,
        "gradePct": -7.023775581590272,
        "smoothedEle": 749.1507119443435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385791555941566,
        "lng": 120.82155815033845,
        "ele": 745.1146962685796,
        "distanceKm": 27.808078627933877,
        "gradePct": -7.780247129914532,
        "smoothedEle": 744.9151034117184,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385936,
        "lng": 120.821157,
        "ele": 740.25,
        "distanceKm": 27.85176477195403,
        "gradePct": -8.395769239047235,
        "smoothedEle": 741.5530608752807,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386215,
        "lng": 120.820813,
        "ele": 740,
        "distanceKm": 27.898414251960705,
        "gradePct": -8.22350953693751,
        "smoothedEle": 737.6286159535186,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386237,
        "lng": 120.82032,
        "ele": 730.25,
        "distanceKm": 27.948402514597163,
        "gradePct": -8.936055501369978,
        "smoothedEle": 732.8757613823839,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386323,
        "lng": 120.820212,
        "ele": 729.5,
        "distanceKm": 27.962931069074614,
        "gradePct": -8.863883976146882,
        "smoothedEle": 731.7497984103813,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386623,
        "lng": 120.820148,
        "ele": 732.25,
        "distanceKm": 27.99691344327456,
        "gradePct": -6.864034819794272,
        "smoothedEle": 730.8908385116423,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387074,
        "lng": 120.819848,
        "ele": 729.75,
        "distanceKm": 28.055547903449213,
        "gradePct": -4.624072948795677,
        "smoothedEle": 727.6979207975543,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387116,
        "lng": 120.819397,
        "ele": 720.25,
        "distanceKm": 28.101460567654208,
        "gradePct": -9.009035233164909,
        "smoothedEle": 721.6341913121237,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387159,
        "lng": 120.819268,
        "ele": 718,
        "distanceKm": 28.115372372501145,
        "gradePct": -9.420579948260505,
        "smoothedEle": 720.4650844399208,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387245,
        "lng": 120.819161,
        "ele": 717.25,
        "distanceKm": 28.12982477809598,
        "gradePct": -9.62818947044932,
        "smoothedEle": 719.4704745480266,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38761,
        "lng": 120.818925,
        "ele": 722,
        "distanceKm": 28.176925493909923,
        "gradePct": -5.468562389628269,
        "smoothedEle": 719.4059995841973,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387653,
        "lng": 120.818861,
        "ele": 722.5,
        "distanceKm": 28.184979780561996,
        "gradePct": -4.908217961842682,
        "smoothedEle": 718.9026066684426,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387653,
        "lng": 120.818796,
        "ele": 721.5,
        "distanceKm": 28.19156255411037,
        "gradePct": -4.450248108453074,
        "smoothedEle": 718.4911833216693,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387631,
        "lng": 120.818689,
        "ele": 719.5,
        "distanceKm": 28.20267150776066,
        "gradePct": -3.735553773888061,
        "smoothedEle": 717.7968737185262,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387481,
        "lng": 120.818388,
        "ele": 711,
        "distanceKm": 28.23741961712911,
        "gradePct": -6.387155047729289,
        "smoothedEle": 713.0729231196161,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387486007220023,
        "lng": 120.8179705542789,
        "ele": 707.8719880810514,
        "distanceKm": 28.27969950391886,
        "gradePct": -10.706798060242665,
        "smoothedEle": 708.525825898396,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387546,
        "lng": 120.817552,
        "ele": 707,
        "distanceKm": 28.32260968847577,
        "gradePct": -7.381790133904141,
        "smoothedEle": 707.7045194002053,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387524,
        "lng": 120.817015,
        "ele": 709,
        "distanceKm": 28.377048567763143,
        "gradePct": -0.7616639682491843,
        "smoothedEle": 708.0492635551166,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387438,
        "lng": 120.816693,
        "ele": 707.5,
        "distanceKm": 28.411031869395515,
        "gradePct": -2.2962221214328014,
        "smoothedEle": 705.6298982376982,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387245,
        "lng": 120.8163605,
        "ele": 699.625,
        "distanceKm": 28.450962612251164,
        "gradePct": -8.292698163204587,
        "smoothedEle": 699.5913713099294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387052,
        "lng": 120.816028,
        "ele": 691.75,
        "distanceKm": 28.490893398471833,
        "gradePct": -14.243620908266418,
        "smoothedEle": 692.8199908227723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386988,
        "lng": 120.815878,
        "ele": 689.75,
        "distanceKm": 28.50766878627368,
        "gradePct": -15.125288852696157,
        "smoothedEle": 690.7440365822938,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386966,
        "lng": 120.815706,
        "ele": 688,
        "distanceKm": 28.52525884736788,
        "gradePct": -14.311686731063697,
        "smoothedEle": 689.1667366418301,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386988,
        "lng": 120.815492,
        "ele": 687.25,
        "distanceKm": 28.547069104532042,
        "gradePct": -10.8895045248225,
        "smoothedEle": 689.2906625230271,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387219676518917,
        "lng": 120.81511352940541,
        "ele": 692.3181999999553,
        "distanceKm": 28.59325103241423,
        "gradePct": -0.18078144389346304,
        "smoothedEle": 692.3474521785074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38746,
        "lng": 120.814741,
        "ele": 697.5,
        "distanceKm": 28.639483772231845,
        "gradePct": 4.611969500792319,
        "smoothedEle": 693.8595321656932,
        "gradeBand": "hard"
      },
      {
        "lat": 24.387438,
        "lng": 120.81414,
        "ele": 686,
        "distanceKm": 28.70039834805394,
        "gradePct": -7.545723021990063,
        "smoothedEle": 685.0354880248763,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387248,
        "lng": 120.813744,
        "ele": 674.25,
        "distanceKm": 28.74572730353729,
        "gradePct": -16.184007257776667,
        "smoothedEle": 676.7710911974245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387224,
        "lng": 120.813625,
        "ele": 672.25,
        "distanceKm": 28.758070820879066,
        "gradePct": -15.568567854591839,
        "smoothedEle": 675.5984570499559,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387245,
        "lng": 120.813518,
        "ele": 671.75,
        "distanceKm": 28.769155853200747,
        "gradePct": -14.961178216187607,
        "smoothedEle": 674.6000764242025,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387481,
        "lng": 120.813239,
        "ele": 676.5,
        "distanceKm": 28.80771761740476,
        "gradePct": -9.383371066201088,
        "smoothedEle": 674.3176642725907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387524,
        "lng": 120.813131,
        "ele": 677.5,
        "distanceKm": 28.81965460003551,
        "gradePct": -7.236493286186044,
        "smoothedEle": 674.2881856744149,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387524,
        "lng": 120.813088,
        "ele": 677.25,
        "distanceKm": 28.824009362367416,
        "gradePct": -6.719011610419234,
        "smoothedEle": 674.0117050005895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387503,
        "lng": 120.813003,
        "ele": 675.5,
        "distanceKm": 28.832928705178787,
        "gradePct": -5.672590049034658,
        "smoothedEle": 673.4319477178503,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387417,
        "lng": 120.812852,
        "ele": 671.75,
        "distanceKm": 28.85096482252596,
        "gradePct": -4.609010946319065,
        "smoothedEle": 671.6645159471819,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387288,
        "lng": 120.812509,
        "ele": 665.25,
        "distanceKm": 28.888546804552707,
        "gradePct": -7.426650710435874,
        "smoothedEle": 667.0314135313328,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387159,
        "lng": 120.811908,
        "ele": 663.25,
        "distanceKm": 28.95107975189915,
        "gradePct": -11.479531912185799,
        "smoothedEle": 660.1708155551058,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387116,
        "lng": 120.811822,
        "ele": 661.5,
        "distanceKm": 28.961015443083973,
        "gradePct": -11.984496872020884,
        "smoothedEle": 658.4409797303236,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387074,
        "lng": 120.811801,
        "ele": 659.75,
        "distanceKm": 28.9661470879021,
        "gradePct": -12.352539029400925,
        "smoothedEle": 657.4403089907887,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386988,
        "lng": 120.811822,
        "ele": 655.75,
        "distanceKm": 28.97594350454536,
        "gradePct": -12.932534632944042,
        "smoothedEle": 655.6526122717419,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38688,
        "lng": 120.81193,
        "ele": 651,
        "distanceKm": 28.992186924298295,
        "gradePct": -13.893254570048072,
        "smoothedEle": 652.73879511839,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38673,
        "lng": 120.812123,
        "ele": 645.75,
        "distanceKm": 29.01788206354793,
        "gradePct": -15.136662879674317,
        "smoothedEle": 648.6763285712195,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386687,
        "lng": 120.812316,
        "ele": 645.25,
        "distanceKm": 29.038004306413455,
        "gradePct": -13.623023302980561,
        "smoothedEle": 647.9823220263328,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386795,
        "lng": 120.81281,
        "ele": 652,
        "distanceKm": 29.089454890435988,
        "gradePct": -3.854853159350514,
        "smoothedEle": 649.3740263903117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386773,
        "lng": 120.812938,
        "ele": 652.25,
        "distanceKm": 29.10264678298337,
        "gradePct": -1.6780588657534043,
        "smoothedEle": 649.4070061216801,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386709,
        "lng": 120.813024,
        "ele": 651,
        "distanceKm": 29.113894054672514,
        "gradePct": 0.1171806365060758,
        "smoothedEle": 649.424023504177,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.386494,
        "lng": 120.81311,
        "ele": 645.5,
        "distanceKm": 29.139338087666225,
        "gradePct": -1.7213964203290042,
        "smoothedEle": 646.2970035092061,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386129,
        "lng": 120.813496,
        "ele": 638.75,
        "distanceKm": 29.195688966173492,
        "gradePct": -10.445829756717636,
        "smoothedEle": 638.9437818229376,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385593,
        "lng": 120.813839,
        "ele": 630.5,
        "distanceKm": 29.264673789750653,
        "gradePct": -12.024777646779228,
        "smoothedEle": 630.9661720982424,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385378,
        "lng": 120.814462,
        "ele": 625.5,
        "distanceKm": 29.332145632582666,
        "gradePct": -11.95934435437306,
        "smoothedEle": 622.7684803725739,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385314,
        "lng": 120.814548,
        "ele": 622.5,
        "distanceKm": 29.343392978712714,
        "gradePct": -12.542598345932838,
        "smoothedEle": 620.8845498957909,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38525,
        "lng": 120.814591,
        "ele": 619.75,
        "distanceKm": 29.351736178845286,
        "gradePct": -12.808928560765183,
        "smoothedEle": 619.6533872575163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385142,
        "lng": 120.814612,
        "ele": 615.75,
        "distanceKm": 29.363932118274313,
        "gradePct": -12.831576814218737,
        "smoothedEle": 618.2203643746057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385078,
        "lng": 120.814591,
        "ele": 613.75,
        "distanceKm": 29.371359606084912,
        "gradePct": -12.806224449843103,
        "smoothedEle": 617.3476345568604,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384906,
        "lng": 120.814269,
        "ele": 613.75,
        "distanceKm": 29.4091649864041,
        "gradePct": -12.108720543712762,
        "smoothedEle": 613.4518616171223,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384874,
        "lng": 120.81377549999999,
        "ele": 611.8749999999999,
        "distanceKm": 29.459271023909384,
        "gradePct": -6.89304284417223,
        "smoothedEle": 611.8750001183126,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384842,
        "lng": 120.813282,
        "ele": 610,
        "distanceKm": 29.50937707403468,
        "gradePct": -3.887065412875644,
        "smoothedEle": 609.5581217028155,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385014,
        "lng": 120.81281,
        "ele": 606.25,
        "distanceKm": 29.560863256580824,
        "gradePct": -6.828472847716414,
        "smoothedEle": 604.9729032371774,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385014,
        "lng": 120.812767,
        "ele": 605.75,
        "distanceKm": 29.565218105396667,
        "gradePct": -7.275369666572952,
        "smoothedEle": 604.324640411642,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384992,
        "lng": 120.812681,
        "ele": 603.75,
        "distanceKm": 29.574264827975313,
        "gradePct": -8.553314273622156,
        "smoothedEle": 602.6283799281459,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384971,
        "lng": 120.812659,
        "ele": 603,
        "distanceKm": 29.577492356469357,
        "gradePct": -9.009236581088075,
        "smoothedEle": 602.0232183355128,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384863,
        "lng": 120.812595,
        "ele": 599.75,
        "distanceKm": 29.591138945520804,
        "gradePct": -10.736663986538321,
        "smoothedEle": 599.6647795544025,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384477,
        "lng": 120.812531,
        "ele": 591.25,
        "distanceKm": 29.63454689299226,
        "gradePct": -14.75179150791168,
        "smoothedEle": 592.5647750250747,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384391,
        "lng": 120.812552,
        "ele": 589.75,
        "distanceKm": 29.64434331912222,
        "gradePct": -14.935181438771238,
        "smoothedEle": 591.5089422024142,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384348,
        "lng": 120.812573,
        "ele": 589.25,
        "distanceKm": 29.649576381611258,
        "gradePct": -14.979362812550804,
        "smoothedEle": 590.9987186097331,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384284,
        "lng": 120.812638,
        "ele": 588.5,
        "distanceKm": 29.659270686977163,
        "gradePct": -15.0612092895998,
        "smoothedEle": 590.0535238365575,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384263,
        "lng": 120.812681,
        "ele": 588.5,
        "distanceKm": 29.664212104479713,
        "gradePct": -14.786277341227805,
        "smoothedEle": 589.688116374029,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384134,
        "lng": 120.813196,
        "ele": 590,
        "distanceKm": 29.718305851503413,
        "gradePct": -6.316593803063962,
        "smoothedEle": 588.9046410375239,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384134,
        "lng": 120.813689,
        "ele": 587,
        "distanceKm": 29.76823504715983,
        "gradePct": -1.7939638173098473,
        "smoothedEle": 587.8358856304391,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38427293691075,
        "lng": 120.81412282074321,
        "ele": 587.3175292828394,
        "distanceKm": 29.814807807613978,
        "gradePct": -1.5405042981911727,
        "smoothedEle": 587.4148012109987,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384434,
        "lng": 120.814548,
        "ele": 588,
        "distanceKm": 29.861444201274256,
        "gradePct": -0.31218666419089924,
        "smoothedEle": 587.6690598751006,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384584,
        "lng": 120.814912,
        "ele": 587.5,
        "distanceKm": 29.901906348692396,
        "gradePct": 1.7814677440603393,
        "smoothedEle": 589.3129166110484,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.384971,
        "lng": 120.81532,
        "ele": 595.75,
        "distanceKm": 29.961565209793154,
        "gradePct": 5.226336286336545,
        "smoothedEle": 592.9003123777428,
        "gradeBand": "hard"
      },
      {
        "lat": 24.385035,
        "lng": 120.815492,
        "ele": 595,
        "distanceKm": 29.980382216589657,
        "gradePct": 4.890860064767184,
        "smoothedEle": 593.3293151901987,
        "gradeBand": "hard"
      },
      {
        "lat": 24.385014,
        "lng": 120.815642,
        "ele": 591.25,
        "distanceKm": 29.995751967361972,
        "gradePct": 3.302219157455464,
        "smoothedEle": 592.3651015550189,
        "gradeBand": "hard"
      },
      {
        "lat": 24.384906,
        "lng": 120.816092,
        "ele": 588.75,
        "distanceKm": 30.042881670424304,
        "gradePct": -2.163158854957684,
        "smoothedEle": 589.6136783373389,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384863,
        "lng": 120.816157,
        "ele": 589.25,
        "distanceKm": 30.051017792445943,
        "gradePct": -3.0388031242254807,
        "smoothedEle": 589.2272738751877,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384821,
        "lng": 120.8162,
        "ele": 589.75,
        "distanceKm": 30.057403359446823,
        "gradePct": -4.173082998364121,
        "smoothedEle": 588.4769697525844,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384713,
        "lng": 120.816221,
        "ele": 589.5,
        "distanceKm": 30.069599300134264,
        "gradePct": -6.032470235255146,
        "smoothedEle": 587.0510087528382,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384649,
        "lng": 120.8162,
        "ele": 588.75,
        "distanceKm": 30.077026790012187,
        "gradePct": -6.888849972820042,
        "smoothedEle": 586.3639659391304,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3843165,
        "lng": 120.815964,
        "ele": 579.5,
        "distanceKm": 30.121052007601644,
        "gradePct": -11.371130595388374,
        "smoothedEle": 579.5169593597142,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383984,
        "lng": 120.815728,
        "ele": 570.25,
        "distanceKm": 30.165077259324665,
        "gradePct": -16.414057073777137,
        "smoothedEle": 571.1656729969984,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383512,
        "lng": 120.815513,
        "ele": 562.5,
        "distanceKm": 30.221898959690808,
        "gradePct": -19.226853360030486,
        "smoothedEle": 560.1294450345492,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383147,
        "lng": 120.815234,
        "ele": 546.5,
        "distanceKm": 30.27135253373752,
        "gradePct": -20.501868637224156,
        "smoothedEle": 549.4449855194205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383082,
        "lng": 120.815213,
        "ele": 544.5,
        "distanceKm": 30.278886637440944,
        "gradePct": -20.33818583104067,
        "smoothedEle": 548.14535263058,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382954,
        "lng": 120.815234,
        "ele": 543,
        "distanceKm": 30.293277634867547,
        "gradePct": -19.727659280240292,
        "smoothedEle": 545.960779295534,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382868,
        "lng": 120.81532,
        "ele": 544,
        "distanceKm": 30.306212396523215,
        "gradePct": -16.716314601091074,
        "smoothedEle": 546.4598623325281,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382825,
        "lng": 120.815384,
        "ele": 545.25,
        "distanceKm": 30.314266880639718,
        "gradePct": -14.507568986885893,
        "smoothedEle": 547.1042210618484,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382653,
        "lng": 120.815857,
        "ele": 554.5,
        "distanceKm": 30.36584787620796,
        "gradePct": 2.0069815443391406,
        "smoothedEle": 552.6412499751156,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.38231,
        "lng": 120.815942,
        "ele": 555.75,
        "distanceKm": 30.404947247394492,
        "gradePct": 8.509427544657335,
        "smoothedEle": 554.920474561819,
        "gradeBand": "steep"
      },
      {
        "lat": 24.382074,
        "lng": 120.815642,
        "ele": 554.25,
        "distanceKm": 30.445094379648257,
        "gradePct": 1.6376158374579057,
        "smoothedEle": 552.0510547896077,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.382095,
        "lng": 120.815427,
        "ele": 550,
        "distanceKm": 30.466993976861247,
        "gradePct": -4.179407611839506,
        "smoothedEle": 548.5286521535239,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382138,
        "lng": 120.815342,
        "ele": 547.25,
        "distanceKm": 30.476841311707773,
        "gradePct": -6.9417824144151306,
        "smoothedEle": 546.3403092858515,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382203,
        "lng": 120.815299,
        "ele": 544.75,
        "distanceKm": 30.485279612647794,
        "gradePct": -9.205720555110343,
        "smoothedEle": 544.568266088447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382567,
        "lng": 120.815127,
        "ele": 533.25,
        "distanceKm": 30.529344046419826,
        "gradePct": -15.98556959116718,
        "smoothedEle": 537.1912024053111,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383082,
        "lng": 120.814805,
        "ele": 537.25,
        "distanceKm": 30.595244198757136,
        "gradePct": -5.419023549218119,
        "smoothedEle": 537.4810176237562,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383211,
        "lng": 120.814505,
        "ele": 540,
        "distanceKm": 30.628843138610947,
        "gradePct": 1.0008890297535658,
        "smoothedEle": 538.2759511034905,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.38303283062889,
        "lng": 120.81397348545252,
        "ele": 536.1958815565109,
        "distanceKm": 30.68620333485365,
        "gradePct": -1.4308893565553058,
        "smoothedEle": 536.0103684206119,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382825,
        "lng": 120.813453,
        "ele": 531.5,
        "distanceKm": 30.743759868449917,
        "gradePct": -7.047186144487809,
        "smoothedEle": 530.639591856014,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382653,
        "lng": 120.812917,
        "ele": 522.75,
        "distanceKm": 30.801315169035416,
        "gradePct": -10.86110855014927,
        "smoothedEle": 523.739128304152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382632,
        "lng": 120.812616,
        "ele": 520.25,
        "distanceKm": 30.83188898541682,
        "gradePct": -11.977422959580565,
        "smoothedEle": 519.7698773773238,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3827065,
        "lng": 120.812088,
        "ele": 514.3749999999998,
        "distanceKm": 30.886001328636954,
        "gradePct": -11.200147733958783,
        "smoothedEle": 514.3749990851454,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382781,
        "lng": 120.81156,
        "ele": 508.5,
        "distanceKm": 30.940113640713104,
        "gradePct": -10.54166076112076,
        "smoothedEle": 508.40823707589635,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382817499999998,
        "lng": 120.8111895,
        "ele": 503.8750000000002,
        "distanceKm": 30.977855748524274,
        "gradePct": -11.369071485608012,
        "smoothedEle": 503.81802352279715,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382854,
        "lng": 120.810819,
        "ele": 499.25,
        "distanceKm": 31.01559784556362,
        "gradePct": -11.189228574938808,
        "smoothedEle": 499.92227342370984,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382885,
        "lng": 120.810694,
        "ele": 498.25,
        "distanceKm": 31.02871840586401,
        "gradePct": -10.803939715527594,
        "smoothedEle": 498.86080723354456,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382936,
        "lng": 120.810588,
        "ele": 497.5,
        "distanceKm": 31.04085958395035,
        "gradePct": -10.746708033828288,
        "smoothedEle": 497.5708070618707,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382989,
        "lng": 120.810525,
        "ele": 497,
        "distanceKm": 31.049545305643253,
        "gradePct": -10.482848233980711,
        "smoothedEle": 496.77830515471766,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383324,
        "lng": 120.810198,
        "ele": 493.25,
        "distanceKm": 31.09938869704404,
        "gradePct": -7.706361216321402,
        "smoothedEle": 493.88902517420206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383423,
        "lng": 120.810018,
        "ele": 493.25,
        "distanceKm": 31.120684468571255,
        "gradePct": -7.0221529182749265,
        "smoothedEle": 492.48860771778646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383426,
        "lng": 120.809848,
        "ele": 491.75,
        "distanceKm": 31.13790476057906,
        "gradePct": -6.35595817661922,
        "smoothedEle": 491.52879886845096,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383147,
        "lng": 120.809484,
        "ele": 488.5,
        "distanceKm": 31.186086364179648,
        "gradePct": -4.3608292347592466,
        "smoothedEle": 490.2992944333274,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382986,
        "lng": 120.809291,
        "ele": 490.75,
        "distanceKm": 31.21259223539278,
        "gradePct": -2.7020695231814402,
        "smoothedEle": 490.3186863062638,
        "gradeBand": "descent"
      },
      {
        "lat": 24.382933,
        "lng": 120.809093,
        "ele": 491.75,
        "distanceKm": 31.233493184369568,
        "gradePct": 0.4329211783133867,
        "smoothedEle": 492.2076084372442,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.382889,
        "lng": 120.808475,
        "ele": 498.25,
        "distanceKm": 31.296273452393113,
        "gradePct": 5.742821854055226,
        "smoothedEle": 496.0495692293607,
        "gradeBand": "hard"
      },
      {
        "lat": 24.383018,
        "lng": 120.807896,
        "ele": 493.25,
        "distanceKm": 31.356641873136937,
        "gradePct": -0.25771134267852946,
        "smoothedEle": 493.3665261952853,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38304,
        "lng": 120.80742577876434,
        "ele": 489.90766658638955,
        "distanceKm": 31.40432732650559,
        "gradePct": -5.451299172872248,
        "smoothedEle": 490.2403198141506,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38304,
        "lng": 120.80695288938217,
        "ele": 487.82883329319486,
        "distanceKm": 31.452220208524448,
        "gradePct": -5.734211483999193,
        "smoothedEle": 487.82883329320987,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38304,
        "lng": 120.80648,
        "ele": 485.75,
        "distanceKm": 31.500113090544744,
        "gradePct": -7.035287098601387,
        "smoothedEle": 483.48131343475626,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383104,
        "lng": 120.806265,
        "ele": 481.5,
        "distanceKm": 31.523021094265008,
        "gradePct": -9.388351855908562,
        "smoothedEle": 479.9107055602163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383147,
        "lng": 120.806201,
        "ele": 479,
        "distanceKm": 31.531075566869056,
        "gradePct": -10.43758309546623,
        "smoothedEle": 478.45591818581795,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383233,
        "lng": 120.806136,
        "ele": 474.5,
        "distanceKm": 31.54268516074488,
        "gradePct": -11.855675616301655,
        "smoothedEle": 476.4532632422382,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3835655,
        "lng": 120.805911,
        "ele": 468.5000000000002,
        "distanceKm": 31.586115752856237,
        "gradePct": -16.242546130245383,
        "smoothedEle": 468.50938834461596,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383898,
        "lng": 120.805686,
        "ele": 462.5,
        "distanceKm": 31.629546313517732,
        "gradePct": -15.443757244419382,
        "smoothedEle": 463.28837250448026,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383941,
        "lng": 120.805643,
        "ele": 461.75,
        "distanceKm": 31.636013670949122,
        "gradePct": -14.86544810919459,
        "smoothedEle": 462.73864712281204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383984,
        "lng": 120.805514,
        "ele": 460.5,
        "distanceKm": 31.649925783986316,
        "gradePct": -13.651639386969554,
        "smoothedEle": 461.47724390983086,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383984,
        "lng": 120.805327,
        "ele": 460,
        "distanceKm": 31.66886446688218,
        "gradePct": -11.324740164462535,
        "smoothedEle": 460.3400750564355,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383962,
        "lng": 120.80487,
        "ele": 459,
        "distanceKm": 31.71521238012649,
        "gradePct": -5.652689474036355,
        "smoothedEle": 459.3588404603104,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383791,
        "lng": 120.804269,
        "ele": 459.5,
        "distanceKm": 31.778980369513746,
        "gradePct": -1.435625041882056,
        "smoothedEle": 458.69028560156676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38365483745663,
        "lng": 120.80382572631866,
        "ele": 456.7668102608155,
        "distanceKm": 31.826358016839766,
        "gradePct": -2.678516879595539,
        "smoothedEle": 456.56347075769105,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383518917976218,
        "lng": 120.80338236343533,
        "ele": 453.26079643371895,
        "distanceKm": 31.87373564165708,
        "gradePct": -5.485733384483787,
        "smoothedEle": 453.2595388698699,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383383,
        "lng": 120.802939,
        "ele": 449.75,
        "distanceKm": 31.92111331186302,
        "gradePct": -6.694887165474162,
        "smoothedEle": 450.1040219692965,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383276,
        "lng": 120.802338,
        "ele": 446.75,
        "distanceKm": 31.98313268055781,
        "gradePct": -5.699984432227642,
        "smoothedEle": 446.9336791057043,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38340274735287,
        "lng": 120.80192290933601,
        "ele": 445.36293168954006,
        "distanceKm": 32.02747134636643,
        "gradePct": -4.543751066697829,
        "smoothedEle": 445.23525712482933,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383576,
        "lng": 120.801523,
        "ele": 443.5,
        "distanceKm": 32.07232118369874,
        "gradePct": -3.7254365953960513,
        "smoothedEle": 443.7609110174738,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383688108008887,
        "lng": 120.80111652375271,
        "ele": 442.61280782930635,
        "distanceKm": 32.1153337756802,
        "gradePct": -3.222827950511896,
        "smoothedEle": 442.4773668640734,
        "gradeBand": "descent"
      },
      {
        "lat": 24.383791,
        "lng": 120.800707,
        "ele": 441.25,
        "distanceKm": 32.15835804249244,
        "gradePct": -4.083342271470598,
        "smoothedEle": 440.13657827889034,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3839945,
        "lng": 120.8001385,
        "ele": 433.3750000000002,
        "distanceKm": 32.22022073208092,
        "gradePct": -8.836489338245018,
        "smoothedEle": 433.3749966031153,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384198,
        "lng": 120.79957,
        "ele": 425.5,
        "distanceKm": 32.282083335399314,
        "gradePct": -10.850964764553867,
        "smoothedEle": 426.6924429483836,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3844985,
        "lng": 120.79905500000001,
        "ele": 423.87500000000006,
        "distanceKm": 32.34402585282033,
        "gradePct": -6.928508570181025,
        "smoothedEle": 423.8749991516834,
        "gradeBand": "descent"
      },
      {
        "lat": 24.384799,
        "lng": 120.79854,
        "ele": 422.25,
        "distanceKm": 32.405968265833145,
        "gradePct": -4.74258792923688,
        "smoothedEle": 420.86345343446425,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3849695,
        "lng": 120.798211,
        "ele": 416.7499999999997,
        "distanceKm": 32.44430410365837,
        "gradePct": -7.111472094328816,
        "smoothedEle": 416.74999892567797,
        "gradeBand": "descent"
      },
      {
        "lat": 24.38514,
        "lng": 120.797882,
        "ele": 411.25,
        "distanceKm": 32.48263990241735,
        "gradePct": -10.268710781209645,
        "smoothedEle": 411.72893212888965,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385474027398487,
        "lng": 120.79745579253374,
        "ele": 405.59757791223427,
        "distanceKm": 32.539584610850504,
        "gradePct": -11.108536949891187,
        "smoothedEle": 406.1478659067038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.385816,
        "lng": 120.797037,
        "ele": 402.5,
        "distanceKm": 32.59654805586115,
        "gradePct": -7.093477704688168,
        "smoothedEle": 403.2723369803868,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386215,
        "lng": 120.796673,
        "ele": 403,
        "distanceKm": 32.65423142801381,
        "gradePct": -2.916691073510792,
        "smoothedEle": 402.4917998458887,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386669,
        "lng": 120.796226,
        "ele": 400.5,
        "distanceKm": 32.72203874125437,
        "gradePct": -1.6493432204986553,
        "smoothedEle": 401.27806894376323,
        "gradeBand": "descent"
      },
      {
        "lat": 24.386944,
        "lng": 120.795973,
        "ele": 401.75,
        "distanceKm": 32.76193308377111,
        "gradePct": -1.2919930956663666,
        "smoothedEle": 401.0619493843508,
        "gradeBand": "descent"
      },
      {
        "lat": 24.387438,
        "lng": 120.795643,
        "ele": 400,
        "distanceKm": 32.826231340184954,
        "gradePct": -0.6488091798184336,
        "smoothedEle": 400.6065472043058,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3878435373664,
        "lng": 120.79560842078504,
        "ele": 401.07414443548834,
        "distanceKm": 32.871460875765386,
        "gradePct": 0.037065194808973884,
        "smoothedEle": 401.0315325432974,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.388254,
        "lng": 120.795622,
        "ele": 402,
        "distanceKm": 32.91712301457456,
        "gradePct": 1.5212356280432355,
        "smoothedEle": 402.19229393375184,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.388597,
        "lng": 120.7956,
        "ele": 403.5,
        "distanceKm": 32.955327947765916,
        "gradePct": 1.4754214618624604,
        "smoothedEle": 402.3553659380529,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.388726,
        "lng": 120.795536,
        "ele": 403,
        "distanceKm": 32.9710684767524,
        "gradePct": 1.1916581282502934,
        "smoothedEle": 402.2195036156137,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.388833,
        "lng": 120.79545,
        "ele": 401.25,
        "distanceKm": 32.98581343211103,
        "gradePct": -1.01999970346786,
        "smoothedEle": 400.3763841957848,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389069,
        "lng": 120.794807,
        "ele": 389.5,
        "distanceKm": 33.0560204004569,
        "gradePct": -10.849364869005415,
        "smoothedEle": 391.5000242539824,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389155,
        "lng": 120.794699,
        "ele": 390.25,
        "distanceKm": 33.07054877041959,
        "gradePct": -12.394727684751382,
        "smoothedEle": 389.82926170827295,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389219,
        "lng": 120.794656,
        "ele": 390.5,
        "distanceKm": 33.07889190032041,
        "gradePct": -11.734586211337959,
        "smoothedEle": 389.50698945827475,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389348,
        "lng": 120.794635,
        "ele": 389.75,
        "distanceKm": 33.09339286564552,
        "gradePct": -10.817427255574176,
        "smoothedEle": 388.6006791254551,
        "gradeBand": "descent"
      },
      {
        "lat": 24.389842,
        "lng": 120.794914,
        "ele": 383.25,
        "distanceKm": 33.1551640754357,
        "gradePct": -7.129274792076513,
        "smoothedEle": 384.4790157678646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390142,
        "lng": 120.795064,
        "ele": 383.5,
        "distanceKm": 33.19181853695727,
        "gradePct": -7.032098864784429,
        "smoothedEle": 381.66697580368617,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390271,
        "lng": 120.795064,
        "ele": 382,
        "distanceKm": 33.20616270230713,
        "gradePct": -7.295547015544523,
        "smoothedEle": 380.45306902049776,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3904,
        "lng": 120.795,
        "ele": 378,
        "distanceKm": 33.22190319594043,
        "gradePct": -8.030218611577936,
        "smoothedEle": 378.66811824004964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.390792315535005,
        "lng": 120.79469614777192,
        "ele": 371.91013466901416,
        "distanceKm": 33.275287617766686,
        "gradePct": -10.460204169442612,
        "smoothedEle": 372.4749830191297,
        "gradeBand": "descent"
      },
      {
        "lat": 24.391197,
        "lng": 120.794414,
        "ele": 368.25,
        "distanceKm": 33.32859181588052,
        "gradePct": -8.31217435832553,
        "smoothedEle": 369.5799960244043,
        "gradeBand": "descent"
      },
      {
        "lat": 24.391494,
        "lng": 120.79457,
        "ele": 369.75,
        "distanceKm": 33.36520096154725,
        "gradePct": -4.751058675681225,
        "smoothedEle": 368.89407892706834,
        "gradeBand": "descent"
      },
      {
        "lat": 24.391837,
        "lng": 120.794656,
        "ele": 368.5,
        "distanceKm": 33.40432261507811,
        "gradePct": -2.6471585177026404,
        "smoothedEle": 368.250914190743,
        "gradeBand": "descent"
      },
      {
        "lat": 24.392509,
        "lng": 120.794693,
        "ele": 363.5,
        "distanceKm": 33.47913959609054,
        "gradePct": -3.1782782529551357,
        "smoothedEle": 365.4866478290347,
        "gradeBand": "descent"
      },
      {
        "lat": 24.39286,
        "lng": 120.794974,
        "ele": 368.75,
        "distanceKm": 33.52744160163928,
        "gradePct": -0.7209059635321649,
        "smoothedEle": 366.6758299911602,
        "gradeBand": "descent"
      },
      {
        "lat": 24.393099499999998,
        "lng": 120.795459,
        "ele": 365.5,
        "distanceKm": 33.583312515208846,
        "gradePct": -0.08938528604283974,
        "smoothedEle": 365.4999986700554,
        "gradeBand": "descent"
      },
      {
        "lat": 24.393339,
        "lng": 120.795944,
        "ele": 362.25,
        "distanceKm": 33.639183346935674,
        "gradePct": -2.573047430401252,
        "smoothedEle": 363.85567165811113,
        "gradeBand": "descent"
      },
      {
        "lat": 24.39361978644923,
        "lng": 120.79614212200578,
        "ele": 365.0759282606144,
        "distanceKm": 33.676296210977085,
        "gradePct": -0.9405680923450612,
        "smoothedEle": 364.7070922096225,
        "gradeBand": "descent"
      },
      {
        "lat": 24.393936,
        "lng": 120.796282,
        "ele": 366.75,
        "distanceKm": 33.71420369600861,
        "gradePct": 2.3449440169553335,
        "smoothedEle": 366.93578845661983,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.394398556257052,
        "lng": 120.79605686396722,
        "ele": 369.976038667257,
        "distanceKm": 33.77046428975405,
        "gradePct": 5.15936929918733,
        "smoothedEle": 369.7326691510294,
        "gradeBand": "hard"
      },
      {
        "lat": 24.394845278128525,
        "lng": 120.79578593198362,
        "ele": 372.1130193336285,
        "distanceKm": 33.82721115505374,
        "gradePct": 4.530592075876136,
        "smoothedEle": 372.11301983479785,
        "gradeBand": "hard"
      },
      {
        "lat": 24.395292,
        "lng": 120.795515,
        "ele": 374.25,
        "distanceKm": 33.88395797344899,
        "gradePct": 1.3244905406049081,
        "smoothedEle": 371.6231768458891,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.395399,
        "lng": 120.795493,
        "ele": 372.75,
        "distanceKm": 33.896062635578275,
        "gradePct": -1.073164811160139,
        "smoothedEle": 369.73327360737386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.395528,
        "lng": 120.795515,
        "ele": 369,
        "distanceKm": 33.91057878244072,
        "gradePct": -4.0552053396471015,
        "smoothedEle": 367.3601393140988,
        "gradeBand": "descent"
      },
      {
        "lat": 24.395871,
        "lng": 120.795665,
        "ele": 356.5,
        "distanceKm": 33.951632290227536,
        "gradePct": -13.160153368683195,
        "smoothedEle": 358.74206131114073,
        "gradeBand": "descent"
      },
      {
        "lat": 24.396107,
        "lng": 120.795622,
        "ele": 352.5,
        "distanceKm": 33.97823315528311,
        "gradePct": -17.515995378112713,
        "smoothedEle": 354.15659854737,
        "gradeBand": "descent"
      },
      {
        "lat": 24.396356,
        "lng": 120.795467,
        "ele": 352,
        "distanceKm": 34.01006044212465,
        "gradePct": -14.012796082055305,
        "smoothedEle": 353.43208274255704,
        "gradeBand": "descent"
      },
      {
        "lat": 24.396660999999998,
        "lng": 120.795276,
        "ele": 355.49999999999966,
        "distanceKm": 34.04910274301413,
        "gradePct": -3.7730711992599058,
        "smoothedEle": 355.5000004048502,
        "gradeBand": "descent"
      },
      {
        "lat": 24.396966,
        "lng": 120.795085,
        "ele": 359,
        "distanceKm": 34.08814502076931,
        "gradePct": 3.707308549549684,
        "smoothedEle": 357.63827356316335,
        "gradeBand": "hard"
      },
      {
        "lat": 24.39733,
        "lng": 120.79515,
        "ele": 358,
        "distanceKm": 34.12915176125888,
        "gradePct": 2.3095781368312727,
        "smoothedEle": 356.75285323062576,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.397738,
        "lng": 120.795322,
        "ele": 352,
        "distanceKm": 34.17774799236133,
        "gradePct": -3.314376317135223,
        "smoothedEle": 353.7544712788648,
        "gradeBand": "descent"
      },
      {
        "lat": 24.398103,
        "lng": 120.795171,
        "ele": 352.75,
        "distanceKm": 34.22111913584442,
        "gradePct": -4.760049261019947,
        "smoothedEle": 352.16624496444496,
        "gradeBand": "descent"
      },
      {
        "lat": 24.39845,
        "lng": 120.795047,
        "ele": 351.5,
        "distanceKm": 34.261695644065746,
        "gradePct": -3.5200582458541088,
        "smoothedEle": 351.22484110368555,
        "gradeBand": "descent"
      },
      {
        "lat": 24.398627,
        "lng": 120.79496,
        "ele": 350.5,
        "distanceKm": 34.2832590209582,
        "gradePct": -3.6216220930856533,
        "smoothedEle": 349.9310384901383,
        "gradeBand": "descent"
      },
      {
        "lat": 24.398737,
        "lng": 120.794935,
        "ele": 349.75,
        "distanceKm": 34.29574972387819,
        "gradePct": -3.999286289838608,
        "smoothedEle": 349.09597194080806,
        "gradeBand": "descent"
      },
      {
        "lat": 24.398971,
        "lng": 120.794942,
        "ele": 346.75,
        "distanceKm": 34.321779026450834,
        "gradePct": -5.202380554301766,
        "smoothedEle": 346.94855447856474,
        "gradeBand": "descent"
      },
      {
        "lat": 24.3993225,
        "lng": 120.7950235,
        "ele": 343.25000000000034,
        "distanceKm": 34.36172593283871,
        "gradePct": -7.987332201531274,
        "smoothedEle": 343.23569157577646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.399674,
        "lng": 120.795105,
        "ele": 339.75,
        "distanceKm": 34.401672834482014,
        "gradePct": -8.274687401148352,
        "smoothedEle": 340.33262791484407,
        "gradeBand": "descent"
      },
      {
        "lat": 24.399819,
        "lng": 120.795128,
        "ele": 339,
        "distanceKm": 34.41796347354379,
        "gradePct": -7.745241631640741,
        "smoothedEle": 339.5180959617549,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400034,
        "lng": 120.795021,
        "ele": 338.25,
        "distanceKm": 34.44421120798558,
        "gradePct": -3.739972707271481,
        "smoothedEle": 341.12362395653105,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400399,
        "lng": 120.79457,
        "ele": 351,
        "distanceKm": 34.50530923362507,
        "gradePct": 7.897384642053624,
        "smoothedEle": 348.048192599745,
        "gradeBand": "steep"
      },
      {
        "lat": 24.400694,
        "lng": 120.794399,
        "ele": 349.5,
        "distanceKm": 34.54240169565533,
        "gradePct": 6.678268441702036,
        "smoothedEle": 347.69120769477587,
        "gradeBand": "steep"
      },
      {
        "lat": 24.401171,
        "lng": 120.794442,
        "ele": 339.75,
        "distanceKm": 34.595620180988725,
        "gradePct": -7.321280484042414,
        "smoothedEle": 339.62879954388256,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401729,
        "lng": 120.794613,
        "ele": 326.25,
        "distanceKm": 34.66003796919444,
        "gradePct": -18.578451627061916,
        "smoothedEle": 326.44092437911274,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401922,
        "lng": 120.794613,
        "ele": 321.25,
        "distanceKm": 34.68149861967945,
        "gradePct": -19.123982233365506,
        "smoothedEle": 322.64418280147305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.402008,
        "lng": 120.794549,
        "ele": 320.25,
        "distanceKm": 34.69305054717098,
        "gradePct": -18.29352882891825,
        "smoothedEle": 321.72456094949905,
        "gradeBand": "descent"
      },
      {
        "lat": 24.402137,
        "lng": 120.794334,
        "ele": 319.75,
        "distanceKm": 34.71912246264423,
        "gradePct": -15.658715895320373,
        "smoothedEle": 319.1585996595397,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40232075801606,
        "lng": 120.79402045037331,
        "ele": 316.4081404995285,
        "distanceKm": 34.7568796694283,
        "gradePct": -9.921476323956854,
        "smoothedEle": 317.1660282034183,
        "gradeBand": "descent"
      },
      {
        "lat": 24.402437,
        "lng": 120.793669,
        "ele": 315.5,
        "distanceKm": 34.79474266629294,
        "gradePct": -5.661095473622913,
        "smoothedEle": 315.8969294893119,
        "gradeBand": "descent"
      },
      {
        "lat": 24.402566,
        "lng": 120.793154,
        "ele": 316,
        "distanceKm": 34.84882912870128,
        "gradePct": -1.3586732380470983,
        "smoothedEle": 316.232208364902,
        "gradeBand": "descent"
      },
      {
        "lat": 24.402652,
        "lng": 120.792725,
        "ele": 317.25,
        "distanceKm": 34.89331037528029,
        "gradePct": 0.11011772468361714,
        "smoothedEle": 316.05505500082984,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.403017,
        "lng": 120.79221,
        "ele": 312.25,
        "distanceKm": 34.959392263668725,
        "gradePct": -3.8492156986079085,
        "smoothedEle": 312.3409233665655,
        "gradeBand": "descent"
      },
      {
        "lat": 24.403231,
        "lng": 120.791781,
        "ele": 309.25,
        "distanceKm": 35.0089236354205,
        "gradePct": -5.907994445754725,
        "smoothedEle": 309.26951748215475,
        "gradeBand": "descent"
      },
      {
        "lat": 24.403661,
        "lng": 120.791374,
        "ele": 305.25,
        "distanceKm": 35.07204803834207,
        "gradePct": -6.067286584544973,
        "smoothedEle": 305.48886100398875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.403982,
        "lng": 120.791137,
        "ele": 303.5,
        "distanceKm": 35.11505935976149,
        "gradePct": -4.97305585047603,
        "smoothedEle": 303.92897988287206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.404304,
        "lng": 120.79088,
        "ele": 303.25,
        "distanceKm": 35.15932251599503,
        "gradePct": -0.821734571869217,
        "smoothedEle": 305.4292853797322,
        "gradeBand": "descent"
      },
      {
        "lat": 24.404647,
        "lng": 120.790451,
        "ele": 313.25,
        "distanceKm": 35.21713022949454,
        "gradePct": 7.1311572319139716,
        "smoothedEle": 311.13032951650706,
        "gradeBand": "steep"
      },
      {
        "lat": 24.404798,
        "lng": 120.790343,
        "ele": 314.5,
        "distanceKm": 35.23716811162253,
        "gradePct": 7.759502416048806,
        "smoothedEle": 312.43786134841366,
        "gradeBand": "steep"
      },
      {
        "lat": 24.40497,
        "lng": 120.790336,
        "ele": 312,
        "distanceKm": 35.25630679575305,
        "gradePct": 5.685525584342746,
        "smoothedEle": 311.01259273019747,
        "gradeBand": "hard"
      },
      {
        "lat": 24.405398,
        "lng": 120.790429,
        "ele": 305.25,
        "distanceKm": 35.304821046624085,
        "gradePct": -2.7423289664224235,
        "smoothedEle": 307.1740588356676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.405785,
        "lng": 120.790172,
        "ele": 306,
        "distanceKm": 35.3551104326067,
        "gradePct": -4.9871817348685425,
        "smoothedEle": 306.11450483463636,
        "gradeBand": "descent"
      },
      {
        "lat": 24.406107,
        "lng": 120.79,
        "ele": 307,
        "distanceKm": 35.39492650516641,
        "gradePct": -1.5864809588187885,
        "smoothedEle": 306.3704516113538,
        "gradeBand": "descent"
      },
      {
        "lat": 24.406171,
        "lng": 120.789979,
        "ele": 307,
        "distanceKm": 35.402353891624514,
        "gradePct": -1.163706515156645,
        "smoothedEle": 306.20555801613403,
        "gradeBand": "descent"
      },
      {
        "lat": 24.406321,
        "lng": 120.789979,
        "ele": 306.5,
        "distanceKm": 35.419033153659306,
        "gradePct": -1.669819700665163,
        "smoothedEle": 305.20480229404643,
        "gradeBand": "descent"
      },
      {
        "lat": 24.406407,
        "lng": 120.79,
        "ele": 305.75,
        "distanceKm": 35.42882949965424,
        "gradePct": -2.1242679568179295,
        "smoothedEle": 304.54395347460166,
        "gradeBand": "descent"
      },
      {
        "lat": 24.406686,
        "lng": 120.790279,
        "ele": 300,
        "distanceKm": 35.47078871388784,
        "gradePct": -5.71796560184217,
        "smoothedEle": 300.4973227933113,
        "gradeBand": "descent"
      },
      {
        "lat": 24.406793,
        "lng": 120.7903,
        "ele": 298.25,
        "distanceKm": 35.48287511375529,
        "gradePct": -7.02832312417361,
        "smoothedEle": 299.26465940024264,
        "gradeBand": "descent"
      },
      {
        "lat": 24.406922,
        "lng": 120.790258,
        "ele": 297,
        "distanceKm": 35.49783645425133,
        "gradePct": -8.686936595776434,
        "smoothedEle": 297.61891194567846,
        "gradeBand": "descent"
      },
      {
        "lat": 24.406986,
        "lng": 120.790193,
        "ele": 296.75,
        "distanceKm": 35.50752995870578,
        "gradePct": -8.898418549321763,
        "smoothedEle": 296.9965754419362,
        "gradeBand": "descent"
      },
      {
        "lat": 24.407222,
        "lng": 120.789914,
        "ele": 294.75,
        "distanceKm": 35.546088487881676,
        "gradePct": -8.491956566789206,
        "smoothedEle": 294.3875055067024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40754359732059,
        "lng": 120.78968830855788,
        "ele": 291.29839222793515,
        "distanceKm": 35.588527138873786,
        "gradePct": -6.86873468209008,
        "smoothedEle": 291.7742019551181,
        "gradeBand": "descent"
      },
      {
        "lat": 24.407866,
        "lng": 120.789464,
        "ele": 289.5,
        "distanceKm": 35.63096613935344,
        "gradePct": -5.773425811700495,
        "smoothedEle": 289.63733617647097,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408145,
        "lng": 120.789228,
        "ele": 288.25,
        "distanceKm": 35.670126124253144,
        "gradePct": -4.922935123932164,
        "smoothedEle": 287.98437157737163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40836,
        "lng": 120.78897,
        "ele": 286.25,
        "distanceKm": 35.705538272552616,
        "gradePct": -4.1863797021323395,
        "smoothedEle": 286.731286778459,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408488,
        "lng": 120.788434,
        "ele": 285.5,
        "distanceKm": 35.761647142273596,
        "gradePct": -2.2748781125485737,
        "smoothedEle": 286.0673959789454,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408381,
        "lng": 120.787811,
        "ele": 287.75,
        "distanceKm": 35.82584232090479,
        "gradePct": 1.5236972383412772,
        "smoothedEle": 288.0147426617183,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.40836,
        "lng": 120.78764,
        "ele": 289,
        "distanceKm": 35.84331398552282,
        "gradePct": 2.5166501991285126,
        "smoothedEle": 288.80096756952963,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.408467,
        "lng": 120.787318,
        "ele": 290,
        "distanceKm": 35.878021695090766,
        "gradePct": 2.8716438895170473,
        "smoothedEle": 289.4357583415677,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.408596,
        "lng": 120.786974,
        "ele": 289.5,
        "distanceKm": 35.91569190319712,
        "gradePct": 1.689308716218112,
        "smoothedEle": 289.39614068007313,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.408639,
        "lng": 120.786674,
        "ele": 288.75,
        "distanceKm": 35.9464428899542,
        "gradePct": 0.14459050616994568,
        "smoothedEle": 289.00278454452604,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.408592,
        "lng": 120.786455,
        "ele": 288.75,
        "distanceKm": 35.969225612900495,
        "gradePct": -0.5589503909892448,
        "smoothedEle": 288.71593096174854,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408488,
        "lng": 120.785966,
        "ele": 288.25,
        "distanceKm": 36.02007264657445,
        "gradePct": -1.2538416173109503,
        "smoothedEle": 288.0862620874501,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408445,
        "lng": 120.785751,
        "ele": 287.75,
        "distanceKm": 36.04236173300953,
        "gradePct": -1.3587862375237398,
        "smoothedEle": 287.6962030748362,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408445,
        "lng": 120.785666,
        "ele": 287.5,
        "distanceKm": 36.050968558553244,
        "gradePct": -1.3711997326620156,
        "smoothedEle": 287.5746028499115,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408513,
        "lng": 120.785434,
        "ele": 287,
        "distanceKm": 36.07564701760762,
        "gradePct": -1.433240347703511,
        "smoothedEle": 287.2031705637845,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408672961816233,
        "lng": 120.78498709965801,
        "ele": 286.7449129712332,
        "distanceKm": 36.12426888971723,
        "gradePct": -1.4261081047386392,
        "smoothedEle": 286.5867197277128,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408816480908115,
        "lng": 120.78453254982901,
        "ele": 285.87245648561657,
        "distanceKm": 36.17298318844856,
        "gradePct": -1.370807240939863,
        "smoothedEle": 285.8724562699862,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40896,
        "lng": 120.784078,
        "ele": 285,
        "distanceKm": 36.221697437749256,
        "gradePct": -1.7630207866915022,
        "smoothedEle": 284.8563010117931,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408982,
        "lng": 120.78354355269404,
        "ele": 283.3965371408652,
        "distanceKm": 36.275868884228316,
        "gradePct": -2.3496558339050133,
        "smoothedEle": 283.46260624275504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408982,
        "lng": 120.78300577634703,
        "ele": 282.07326857043256,
        "distanceKm": 36.3303221491003,
        "gradePct": -2.5611403584240042,
        "smoothedEle": 282.07326857044205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.408982,
        "lng": 120.782468,
        "ele": 280.75,
        "distanceKm": 36.38477541397372,
        "gradePct": -2.616086092900863,
        "smoothedEle": 280.619276157525,
        "gradeBand": "descent"
      },
      {
        "lat": 24.409132,
        "lng": 120.781996,
        "ele": 279,
        "distanceKm": 36.43539522450298,
        "gradePct": -2.469425930717272,
        "smoothedEle": 279.46838311929366,
        "gradeBand": "descent"
      },
      {
        "lat": 24.409518,
        "lng": 120.781438,
        "ele": 279.25,
        "distanceKm": 36.50635005536314,
        "gradePct": -0.41967549452066893,
        "smoothedEle": 279.7090791790674,
        "gradeBand": "descent"
      },
      {
        "lat": 24.410033,
        "lng": 120.781095,
        "ele": 282.25,
        "distanceKm": 36.573324345997,
        "gradePct": 2.662073160703945,
        "smoothedEle": 282.2591210937054,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.410222,
        "lng": 120.781019,
        "ele": 283.25,
        "distanceKm": 36.595704832260616,
        "gradePct": 3.426596978123038,
        "smoothedEle": 283.0995649689158,
        "gradeBand": "hard"
      },
      {
        "lat": 24.410294,
        "lng": 120.780986,
        "ele": 283.75,
        "distanceKm": 36.60438019352721,
        "gradePct": 3.5689794666552705,
        "smoothedEle": 283.27137639482504,
        "gradeBand": "hard"
      },
      {
        "lat": 24.410334,
        "lng": 120.78088,
        "ele": 283.75,
        "distanceKm": 36.61599834766726,
        "gradePct": 3.4250311381555405,
        "smoothedEle": 283.50146844147207,
        "gradeBand": "hard"
      },
      {
        "lat": 24.410643864219526,
        "lng": 120.78045004112211,
        "ele": 284.2304526938917,
        "distanceKm": 36.671518762651175,
        "gradePct": 1.9931669856923406,
        "smoothedEle": 284.18354060676825,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.410956,
        "lng": 120.780022,
        "ele": 284.5,
        "distanceKm": 36.727044495063225,
        "gradePct": 1.3499262493249184,
        "smoothedEle": 284.98709738096477,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411117067313636,
        "lng": 120.77968953947948,
        "ele": 286.2683722982338,
        "distanceKm": 36.76517551231468,
        "gradePct": 1.9967197972056567,
        "smoothedEle": 286.1023331317573,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411278,
        "lng": 120.779357,
        "ele": 287.5,
        "distanceKm": 36.80330652235296,
        "gradePct": 2.596649932778425,
        "smoothedEle": 287.24021634263465,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411602764257477,
        "lng": 120.77902107432506,
        "ele": 287.98109305291564,
        "distanceKm": 36.85291537598918,
        "gradePct": 1.9933316467927114,
        "smoothedEle": 287.7370868195718,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41195988212874,
        "lng": 120.77872203716252,
        "ele": 287.49054652645776,
        "distanceKm": 36.9028519978994,
        "gradePct": 0.2638937082771767,
        "smoothedEle": 287.4905463990671,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412317,
        "lng": 120.778423,
        "ele": 287,
        "distanceKm": 36.952788567871345,
        "gradePct": -1.1315884049461555,
        "smoothedEle": 286.60422833468283,
        "gradeBand": "descent"
      },
      {
        "lat": 24.412558,
        "lng": 120.77812,
        "ele": 285.25,
        "distanceKm": 36.99352412514776,
        "gradePct": -2.3467381065160233,
        "smoothedEle": 285.1898606201342,
        "gradeBand": "descent"
      },
      {
        "lat": 24.412842,
        "lng": 120.777691,
        "ele": 282.75,
        "distanceKm": 37.04722786485198,
        "gradePct": -4.126316452279523,
        "smoothedEle": 282.57660811923944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.413037,
        "lng": 120.777361,
        "ele": 280.25,
        "distanceKm": 37.08706025409537,
        "gradePct": -5.214399714957989,
        "smoothedEle": 280.19989113612814,
        "gradeBand": "descent"
      },
      {
        "lat": 24.41322,
        "lng": 120.777002,
        "ele": 277.5,
        "distanceKm": 37.12871814512595,
        "gradePct": -6.081189847157844,
        "smoothedEle": 277.3961110661275,
        "gradeBand": "descent"
      },
      {
        "lat": 24.413215,
        "lng": 120.776611,
        "ele": 274.5,
        "distanceKm": 37.16831194964582,
        "gradePct": -5.387373983964304,
        "smoothedEle": 275.9311900321038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.413166,
        "lng": 120.775902,
        "ele": 278.25,
        "distanceKm": 37.24030677098438,
        "gradePct": 1.2162202215001627,
        "smoothedEle": 278.1835666871729,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.413121404190957,
        "lng": 120.77548607582177,
        "ele": 279.84270746589084,
        "distanceKm": 37.28271128695516,
        "gradePct": 3.407635269986722,
        "smoothedEle": 279.7893123038085,
        "gradeBand": "hard"
      },
      {
        "lat": 24.413078,
        "lng": 120.77507,
        "ele": 281.25,
        "distanceKm": 37.325115781376944,
        "gradePct": 2.9543424145944788,
        "smoothedEle": 280.66265505261447,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.413027,
        "lng": 120.774565,
        "ele": 280.5,
        "distanceKm": 37.37656209540543,
        "gradePct": 0.8871812829049632,
        "smoothedEle": 280.44364014762135,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412964,
        "lng": 120.774053,
        "ele": 279.5,
        "distanceKm": 37.42887486045107,
        "gradePct": -1.166077205258529,
        "smoothedEle": 279.4805748671264,
        "gradeBand": "descent"
      },
      {
        "lat": 24.412949,
        "lng": 120.773575,
        "ele": 278.5,
        "distanceKm": 37.477302598921995,
        "gradePct": -1.7490533056721098,
        "smoothedEle": 278.68095435232146,
        "gradeBand": "descent"
      },
      {
        "lat": 24.413042,
        "lng": 120.773209,
        "ele": 278.25,
        "distanceKm": 37.51577703466292,
        "gradePct": -1.0606675011600109,
        "smoothedEle": 278.66103515295174,
        "gradeBand": "descent"
      },
      {
        "lat": 24.413166,
        "lng": 120.77277,
        "ele": 279.5,
        "distanceKm": 37.562316523042455,
        "gradePct": 0.4246976040220655,
        "smoothedEle": 279.3530963774143,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.413187,
        "lng": 120.772276,
        "ele": 280.25,
        "distanceKm": 37.61238996969787,
        "gradePct": 1.324540936084001,
        "smoothedEle": 279.9873296591926,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.413316,
        "lng": 120.771911,
        "ele": 280,
        "distanceKm": 37.65203335708569,
        "gradePct": 0.8752642714143111,
        "smoothedEle": 280.0754457657652,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.413688,
        "lng": 120.7720905,
        "ele": 280,
        "distanceKm": 37.6972146946093,
        "gradePct": 0.20488128621218202,
        "smoothedEle": 280,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41406,
        "lng": 120.77227,
        "ele": 280,
        "distanceKm": 37.74239601058636,
        "gradePct": -0.28700073198234166,
        "smoothedEle": 279.76702392153265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.414372999999998,
        "lng": 120.7724175,
        "ele": 279.25,
        "distanceKm": 37.780269056328386,
        "gradePct": -0.7782966198171725,
        "smoothedEle": 279.2499999452373,
        "gradeBand": "descent"
      },
      {
        "lat": 24.414686,
        "lng": 120.772565,
        "ele": 278.5,
        "distanceKm": 37.81814208746701,
        "gradePct": -1.3904625115582492,
        "smoothedEle": 278.5016260251499,
        "gradeBand": "descent"
      },
      {
        "lat": 24.415174,
        "lng": 120.7727905,
        "ele": 277.375,
        "distanceKm": 37.87701317936384,
        "gradePct": -1.9194477501374378,
        "smoothedEle": 277.3749998074203,
        "gradeBand": "descent"
      },
      {
        "lat": 24.415662,
        "lng": 120.773016,
        "ele": 276.25,
        "distanceKm": 37.935884237024275,
        "gradePct": -1.9916336050074221,
        "smoothedEle": 276.1704578505251,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4159725,
        "lng": 120.7731685,
        "ele": 275.2500000000001,
        "distanceKm": 37.97370574699727,
        "gradePct": -2.188294787387318,
        "smoothedEle": 275.24999992246285,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416283,
        "lng": 120.773321,
        "ele": 274.25,
        "distanceKm": 38.011527241462815,
        "gradePct": -2.9187893196929773,
        "smoothedEle": 273.7500292578793,
        "gradeBand": "descent"
      },
      {
        "lat": 24.41662,
        "lng": 120.773486,
        "ele": 271.5,
        "distanceKm": 38.05255536729606,
        "gradePct": -3.8030912744894207,
        "smoothedEle": 271.9616431123406,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416978,
        "lng": 120.773674,
        "ele": 270.25,
        "distanceKm": 38.09668014210371,
        "gradePct": -3.965269626340842,
        "smoothedEle": 270.37358389159266,
        "gradeBand": "descent"
      },
      {
        "lat": 24.417308,
        "lng": 120.773827,
        "ele": 269.5,
        "distanceKm": 38.13651047120783,
        "gradePct": -2.9964223849381284,
        "smoothedEle": 269.66460607070155,
        "gradeBand": "descent"
      },
      {
        "lat": 24.417767,
        "lng": 120.77379,
        "ele": 269.25,
        "distanceKm": 38.18768631508143,
        "gradePct": -1.4337850780878307,
        "smoothedEle": 269.2634883959402,
        "gradeBand": "descent"
      },
      {
        "lat": 24.418314,
        "lng": 120.773673,
        "ele": 269,
        "distanceKm": 38.24965287570719,
        "gradePct": -0.6262002811019922,
        "smoothedEle": 268.93539526090996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.418942,
        "lng": 120.773613,
        "ele": 268.25,
        "distanceKm": 38.31974713215844,
        "gradePct": -0.7974460056016597,
        "smoothedEle": 268.2962906100202,
        "gradeBand": "descent"
      },
      {
        "lat": 24.419362,
        "lng": 120.773538,
        "ele": 268,
        "distanceKm": 38.367062389528385,
        "gradePct": -0.6561001229881547,
        "smoothedEle": 268.1205588617107,
        "gradeBand": "descent"
      },
      {
        "lat": 24.419863,
        "lng": 120.773462,
        "ele": 268.25,
        "distanceKm": 38.42330004278984,
        "gradePct": -0.4687137298388894,
        "smoothedEle": 267.8143811536536,
        "gradeBand": "descent"
      },
      {
        "lat": 24.420252015752574,
        "lng": 120.77347280412425,
        "ele": 266.9070807390227,
        "distanceKm": 38.46657050975058,
        "gradePct": -1.5171484266880737,
        "smoothedEle": 266.60523730648265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.420641,
        "lng": 120.773485,
        "ele": 264.5,
        "distanceKm": 38.50984126636502,
        "gradePct": -2.4360139912368703,
        "smoothedEle": 265.45164150940707,
        "gradeBand": "descent"
      },
      {
        "lat": 24.420633,
        "lng": 120.773842,
        "ele": 265.25,
        "distanceKm": 38.545997386905256,
        "gradePct": -2.111820348185942,
        "smoothedEle": 265.0683094115741,
        "gradeBand": "descent"
      },
      {
        "lat": 24.420437,
        "lng": 120.773842,
        "ele": 266.25,
        "distanceKm": 38.567791622630914,
        "gradePct": -1.2566557125462445,
        "smoothedEle": 265.3160267971933,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 38.567791622630914,
      "elevationGainM": 1239.1771162458554,
      "elevationLossM": 1239.3158624528464,
      "minimumElevationM": 264.5,
      "maximumElevationM": 764,
      "maximumSustainedGradePct": 22.3771510496488
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 101,
        "startDistanceKm": 0,
        "endDistanceKm": 4.5887868128967755,
        "distanceKm": 4.5887868128967755,
        "gainM": 149.85181178235774,
        "averageGradePct": 3.2656084907060743,
        "maximumGradePct": 13.6071226866457
      },
      {
        "startIndex": 105,
        "endIndex": 137,
        "startDistanceKm": 4.745643983138584,
        "endDistanceKm": 5.780724112034015,
        "distanceKm": 1.035080128895431,
        "gainM": 61.17896627171922,
        "averageGradePct": 5.910553643514088,
        "maximumGradePct": 15.550485803308217
      },
      {
        "startIndex": 176,
        "endIndex": 335,
        "startDistanceKm": 7.381215751746393,
        "endDistanceKm": 12.503295754341218,
        "distanceKm": 5.122080002594825,
        "gainM": 411.2834224181945,
        "averageGradePct": 8.029617308004559,
        "maximumGradePct": 20.072748784686453
      },
      {
        "startIndex": 496,
        "endIndex": 538,
        "startDistanceKm": 18.721101142042993,
        "endDistanceKm": 20.351063044979423,
        "distanceKm": 1.6299619029364294,
        "gainM": 31.48014045463924,
        "averageGradePct": 1.9313421005685314,
        "maximumGradePct": 13.713703083495066
      },
      {
        "startIndex": 541,
        "endIndex": 653,
        "startDistanceKm": 20.504335427080026,
        "endDistanceKm": 25.204342576350637,
        "distanceKm": 4.700007149270611,
        "gainM": 300.1105604081175,
        "averageGradePct": 6.38532135966413,
        "maximumGradePct": 21.97863552838905
      },
      {
        "startIndex": 656,
        "endIndex": 681,
        "startDistanceKm": 25.302075040807498,
        "endDistanceKm": 26.07842572835429,
        "distanceKm": 0.7763506875467918,
        "gainM": 92.26195059823544,
        "averageGradePct": 11.88405601723315,
        "maximumGradePct": 22.3771510496488
      },
      {
        "startIndex": 687,
        "endIndex": 725,
        "startDistanceKm": 26.23278264531934,
        "endDistanceKm": 27.598317980699527,
        "distanceKm": 1.3655353353801871,
        "gainM": 102.75864679314668,
        "averageGradePct": 7.525154723626176,
        "maximumGradePct": 17.989020944175962
      }
    ]
  },
  "miaoli-coast": {
    "routeId": "miaoli-coast",
    "direction": "point-to-point",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-28T04:15:37.849Z",
      "reviewStatus": "approved",
      "reviewedAt": "2026-07-28T04:38:44.415Z",
      "reviewerNote": "以 OpenStreetMap 疊圖逐段檢查苑港漁港、通霄漁港、白沙屯、苗33好望角至後龍車站的綠光海風自行車道與濱海道路；本線為官方68.5公里海線路網的中南段，部分自行車專用或防風林路段須留意海砂、強側風與臨時施工。"
    },
    "waypoints": [
      {
        "name": "苑港漁港聯外道路",
        "lat": 24.460632,
        "lng": 120.650049,
        "role": "start"
      },
      {
        "name": "通霄漁港聯外濱海道路",
        "lat": 24.494859,
        "lng": 120.669969,
        "role": "via"
      },
      {
        "name": "白沙屯拱天宮",
        "lat": 24.570793,
        "lng": 120.708644,
        "role": "via"
      },
      {
        "name": "後龍好望角聯外道路",
        "lat": 24.610939,
        "lng": 120.762945,
        "role": "via"
      },
      {
        "name": "後龍火車站前道路",
        "lat": 24.615882,
        "lng": 120.787243,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.460343,
        "lng": 120.650177,
        "ele": 3.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 3.6973747450512096,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46022859751815,
        "lng": 120.64970592544348,
        "ele": 3.8896658700381974,
        "distanceKm": 0.04934769497983963,
        "gradePct": 0.5101250908996195,
        "smoothedEle": 3.9491097189239834,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460087,
        "lng": 120.649246,
        "ele": 4.5,
        "distanceKm": 0.0984897637091324,
        "gradePct": 0.6018808806605794,
        "smoothedEle": 4.2901658022242595,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460188,
        "lng": 120.649791,
        "ele": 4.25,
        "distanceKm": 0.15478373042359714,
        "gradePct": 0.4182129016158899,
        "smoothedEle": 4.405049826680552,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460176,
        "lng": 120.650382,
        "ele": 4.75,
        "distanceKm": 0.21461681639414432,
        "gradePct": 0.9435500881854252,
        "smoothedEle": 5.26662777818747,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460104,
        "lng": 120.650502,
        "ele": 5.5,
        "distanceKm": 0.2291639129458738,
        "gradePct": 1.1321162449799305,
        "smoothedEle": 5.484881468008272,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460017,
        "lng": 120.650565,
        "ele": 6.5,
        "distanceKm": 0.2407503847763974,
        "gradePct": 1.252017238542309,
        "smoothedEle": 5.6284279886284905,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460213666666668,
        "lng": 120.65098433333333,
        "ele": 5.75,
        "distanceKm": 0.28849584575718695,
        "gradePct": 0.8595059075486889,
        "smoothedEle": 5.74999977909059,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460410333333332,
        "lng": 120.65140366666667,
        "ele": 5,
        "distanceKm": 0.3362412478288005,
        "gradePct": -0.572563842094433,
        "smoothedEle": 4.999999779080763,
        "gradeBand": "descent"
      },
      {
        "lat": 24.460607,
        "lng": 120.651823,
        "ele": 4.25,
        "distanceKm": 0.3839865909886175,
        "gradePct": -1.5508125160664927,
        "smoothedEle": 4.187705581528021,
        "gradeBand": "descent"
      },
      {
        "lat": 24.460809,
        "lng": 120.652036,
        "ele": 3.5,
        "distanceKm": 0.4151200892225736,
        "gradePct": -1.5735282916125546,
        "smoothedEle": 3.7582493816226643,
        "gradeBand": "descent"
      },
      {
        "lat": 24.460859,
        "lng": 120.652112,
        "ele": 3.5,
        "distanceKm": 0.42461127591032877,
        "gradePct": -1.495621604885876,
        "smoothedEle": 3.6870654814645007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.461022,
        "lng": 120.652743,
        "ele": 3.5,
        "distanceKm": 0.49099974809873637,
        "gradePct": -0.5909659289769944,
        "smoothedEle": 3.5000000000000004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.461229675224807,
        "lng": 120.65312996796617,
        "ele": 3.5,
        "distanceKm": 0.5364672864474,
        "gradePct": -0.15365832136189675,
        "smoothedEle": 3.4999999999999996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.461465,
        "lng": 120.653499,
        "ele": 3.5,
        "distanceKm": 0.5820724475329991,
        "gradePct": -0.06615022100413094,
        "smoothedEle": 3.4590045946356778,
        "gradeBand": "descent"
      },
      {
        "lat": 24.461852,
        "lng": 120.654009,
        "ele": 3.25,
        "distanceKm": 0.6492761232415412,
        "gradePct": -0.19749047114347734,
        "smoothedEle": 3.2909954053643222,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46222155891504,
        "lng": 120.65441887809574,
        "ele": 3.25,
        "distanceKm": 0.7076685503683044,
        "gradePct": -0.14501433754741425,
        "smoothedEle": 3.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462604,
        "lng": 120.654815,
        "ele": 3.25,
        "distanceKm": 0.7661139222210448,
        "gradePct": -0.009490880397695193,
        "smoothedEle": 3.2696832592893292,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462937126263625,
        "lng": 120.65509285767483,
        "ele": 3.3235934399722464,
        "distanceKm": 0.8126220368118227,
        "gradePct": 0.0993725442233653,
        "smoothedEle": 3.35104078167251,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463285,
        "lng": 120.655349,
        "ele": 3.5,
        "distanceKm": 0.8591879683937571,
        "gradePct": 0.2436233584177013,
        "smoothedEle": 3.5109740917826184,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463702,
        "lng": 120.655613,
        "ele": 3.75,
        "distanceKm": 0.9127042141759881,
        "gradePct": 0.46283970488663784,
        "smoothedEle": 3.8141627293366596,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.464081994266987,
        "lng": 120.65580631364185,
        "ele": 4.207619021170833,
        "distanceKm": 0.9592678767632443,
        "gradePct": 0.7188183456309278,
        "smoothedEle": 4.230245146853827,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.464466,
        "lng": 120.65599,
        "ele": 4.75,
        "distanceKm": 1.0058391786902974,
        "gradePct": 0.9845818883112053,
        "smoothedEle": 4.759851740816848,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.464751,
        "lng": 120.656199,
        "ele": 5.25,
        "distanceKm": 1.0439410632468125,
        "gradePct": 0.9747941031147723,
        "smoothedEle": 5.068082291121098,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465175428660526,
        "lng": 120.65645009447137,
        "ele": 5.132872752236202,
        "distanceKm": 1.0975429436137334,
        "gradePct": 0.4369423064463548,
        "smoothedEle": 5.102449663065017,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465598155914464,
        "lng": 120.656704657712,
        "ele": 4.884599110534423,
        "distanceKm": 1.151146146074865,
        "gradePct": -0.18810284179930276,
        "smoothedEle": 4.884599058927716,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4660208831684,
        "lng": 120.65695922095263,
        "ele": 4.636325468832646,
        "distanceKm": 1.2047493069635546,
        "gradePct": -0.35287017876966126,
        "smoothedEle": 4.720291857114315,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466443,
        "lng": 120.657215,
        "ele": 4.75,
        "distanceKm": 1.258352234615373,
        "gradePct": -0.12183956966147214,
        "smoothedEle": 4.740671011189939,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46690650970985,
        "lng": 120.65748627338246,
        "ele": 4.83192551909129,
        "distanceKm": 1.3167489866590547,
        "gradePct": 0.12497313428982515,
        "smoothedEle": 4.849827117617864,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.467363,
        "lng": 120.657772,
        "ele": 5,
        "distanceKm": 1.3751680913783733,
        "gradePct": 0.06807383549468853,
        "smoothedEle": 4.840177304591289,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46776,
        "lng": 120.658005,
        "ele": 4.5,
        "distanceKm": 1.4252163879949291,
        "gradePct": -0.3201831689687384,
        "smoothedEle": 4.5282452822350345,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468233,
        "lng": 120.658317,
        "ele": 4,
        "distanceKm": 1.486562797505499,
        "gradePct": -0.615243470214787,
        "smoothedEle": 4.153914959276291,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468652185271043,
        "lng": 120.6585608583692,
        "ele": 4.242419537358383,
        "distanceKm": 1.5393050692902739,
        "gradePct": -0.16809200529136778,
        "smoothedEle": 4.2741853994195464,
        "gradeBand": "descent"
      },
      {
        "lat": 24.469069138953284,
        "lng": 120.6588093937769,
        "ele": 4.619314653018788,
        "distanceKm": 1.5920522175477676,
        "gradePct": 0.4528820111711852,
        "smoothedEle": 4.619314727879484,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.469486092635524,
        "lng": 120.6590579291846,
        "ele": 4.996209768679192,
        "distanceKm": 1.644799326080312,
        "gradePct": 0.6860750284832292,
        "smoothedEle": 4.996209843538964,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46990304631776,
        "lng": 120.6593064645923,
        "ele": 5.373104884339597,
        "distanceKm": 1.6975463948883978,
        "gradePct": 0.7145325608666789,
        "smoothedEle": 5.373104959201651,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47032,
        "lng": 120.659555,
        "ele": 5.75,
        "distanceKm": 1.7502934239708143,
        "gradePct": 0.6462329303505928,
        "smoothedEle": 5.681699906213574,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.470686902688954,
        "lng": 120.65974662491924,
        "ele": 5.825681247721654,
        "distanceKm": 1.7954661674586587,
        "gradePct": 0.4674402053175429,
        "smoothedEle": 5.82568125690399,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47105380537791,
        "lng": 120.65993824983846,
        "ele": 5.901362495443309,
        "distanceKm": 1.840638886680689,
        "gradePct": 0.27614618574001226,
        "smoothedEle": 5.901362504625555,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.471420708066862,
        "lng": 120.6601298747577,
        "ele": 5.9770437431649635,
        "distanceKm": 1.8858115816371428,
        "gradePct": 0.0832586256884759,
        "smoothedEle": 5.878167337034934,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.471787810540658,
        "lng": 120.66032103790558,
        "ele": 5.692041885242045,
        "distanceKm": 1.9309842816153968,
        "gradePct": -0.23619592236174006,
        "smoothedEle": 5.648991497606881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.472155,
        "lng": 120.660512,
        "ele": 5.25,
        "distanceKm": 1.976156988756357,
        "gradePct": -0.6452711820992908,
        "smoothedEle": 5.237853572245036,
        "gradeBand": "descent"
      },
      {
        "lat": 24.472586382606906,
        "lng": 120.66071101238886,
        "ele": 4.69418927922461,
        "distanceKm": 2.0281815819273548,
        "gradePct": -0.9267187573824742,
        "smoothedEle": 4.736491749802779,
        "gradeBand": "descent"
      },
      {
        "lat": 24.473018591253144,
        "lng": 120.66090786486838,
        "ele": 4.3147246606903265,
        "distanceKm": 2.0802067499026875,
        "gradePct": -0.8782108465614896,
        "smoothedEle": 4.320615113836464,
        "gradeBand": "descent"
      },
      {
        "lat": 24.473450727502094,
        "lng": 120.66110490991225,
        "ele": 3.9598164404602176,
        "distanceKm": 2.132231922232537,
        "gradePct": -0.7442979131014543,
        "smoothedEle": 3.9598163938944775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.473882863751047,
        "lng": 120.66130195495613,
        "ele": 3.604908220230109,
        "distanceKm": 2.184257068321382,
        "gradePct": -0.6876176588624542,
        "smoothedEle": 3.6049081736630857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.474315,
        "lng": 120.661499,
        "ele": 3.25,
        "distanceKm": 2.2362821881685,
        "gradePct": -0.6537476436009241,
        "smoothedEle": 3.278438406452872,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47477,
        "lng": 120.661703,
        "ele": 3.000000000000001,
        "distanceKm": 2.29092619600755,
        "gradePct": -0.5630578764232133,
        "smoothedEle": 2.9999999647544,
        "gradeBand": "descent"
      },
      {
        "lat": 24.475225,
        "lng": 120.661907,
        "ele": 2.75,
        "distanceKm": 2.3455701756501197,
        "gradePct": -0.3218402787006404,
        "smoothedEle": 2.9092712045786175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.475643666666667,
        "lng": 120.662107,
        "ele": 3.166666666666668,
        "distanceKm": 2.3963336096668413,
        "gradePct": 0.17564501931150142,
        "smoothedEle": 3.16666672259457,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47606233333333,
        "lng": 120.662307,
        "ele": 3.583333333333332,
        "distanceKm": 2.44709701683817,
        "gradePct": 0.6663203506972118,
        "smoothedEle": 3.5833333892580774,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476481,
        "lng": 120.662507,
        "ele": 4,
        "distanceKm": 2.497860397165621,
        "gradePct": 0.9268850434176678,
        "smoothedEle": 4.106083656467758,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476899500000002,
        "lng": 120.662743,
        "ele": 4.8750000000000036,
        "distanceKm": 2.550166694890824,
        "gradePct": 1.2600558913949682,
        "smoothedEle": 4.875000158650563,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.477318,
        "lng": 120.662979,
        "ele": 5.75,
        "distanceKm": 2.6024729563530413,
        "gradePct": 1.6085724080474466,
        "smoothedEle": 5.782461912582205,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.477615,
        "lng": 120.663113,
        "ele": 6.5,
        "distanceKm": 2.6381737513703745,
        "gradePct": 1.7740014669437258,
        "smoothedEle": 6.472702162935576,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47813,
        "lng": 120.663433,
        "ele": 7.75,
        "distanceKm": 2.7039618823110825,
        "gradePct": 1.7249269663036642,
        "smoothedEle": 7.536175818379429,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.478649,
        "lng": 120.663863,
        "ele": 7.75,
        "distanceKm": 2.7762400763616055,
        "gradePct": 0.7255114907980043,
        "smoothedEle": 7.81356072635711,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.478993,
        "lng": 120.664168,
        "ele": 8,
        "distanceKm": 2.8253914952759165,
        "gradePct": 0.5030934233434556,
        "smoothedEle": 8.121510522074919,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47933389283039,
        "lng": 120.66455124186268,
        "ele": 8.808724893545596,
        "distanceKm": 2.8796228414582634,
        "gradePct": 0.8107713661640912,
        "smoothedEle": 8.645526227776854,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.479665946415196,
        "lng": 120.66494412093134,
        "ele": 8.904362446772799,
        "distanceKm": 2.933882267959212,
        "gradePct": 0.700809036972751,
        "smoothedEle": 8.904362483533287,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.479998,
        "lng": 120.665337,
        "ele": 9,
        "distanceKm": 2.9881416175855713,
        "gradePct": -0.27616030079393794,
        "smoothedEle": 8.410003439367626,
        "gradeBand": "descent"
      },
      {
        "lat": 24.480280333333333,
        "lng": 120.66569,
        "ele": 6.833333333333334,
        "distanceKm": 3.0356994076278547,
        "gradePct": -2.054473772242231,
        "smoothedEle": 6.8333326811157615,
        "gradeBand": "descent"
      },
      {
        "lat": 24.480562666666664,
        "lng": 120.666043,
        "ele": 4.666666666666667,
        "distanceKm": 3.0832571374654396,
        "gradePct": -3.787840113212894,
        "smoothedEle": 4.666666014448315,
        "gradeBand": "descent"
      },
      {
        "lat": 24.480845,
        "lng": 120.666396,
        "ele": 2.5,
        "distanceKm": 3.1308148070982544,
        "gradePct": -3.658055530277096,
        "smoothedEle": 3.3372150124153923,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481158333333333,
        "lng": 120.666802,
        "ele": 3.6666666666666665,
        "distanceKm": 3.184685132794673,
        "gradePct": -0.9600799933846941,
        "smoothedEle": 3.666667121840735,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481471666666664,
        "lng": 120.667208,
        "ele": 4.833333333333333,
        "distanceKm": 3.2385553804612512,
        "gradePct": 1.4487801311232789,
        "smoothedEle": 4.833333788509412,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.481785,
        "lng": 120.667614,
        "ele": 6,
        "distanceKm": 3.2924255500976445,
        "gradePct": 2.0220976298174707,
        "smoothedEle": 5.8563987842577045,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48218815033792,
        "lng": 120.66804215033793,
        "ele": 6.666519564243792,
        "distanceKm": 3.3547704029389505,
        "gradePct": 1.4624914493957202,
        "smoothedEle": 6.603769727669625,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.482603,
        "lng": 120.668457,
        "ele": 7,
        "distanceKm": 3.417143233199708,
        "gradePct": 0.3258990163928865,
        "smoothedEle": 6.478605792361923,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.482934,
        "lng": 120.668755,
        "ele": 5.25,
        "distanceKm": 3.464725566590165,
        "gradePct": -1.0237731134075183,
        "smoothedEle": 5.5600195272194135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.483203652002665,
        "lng": 120.66899050718844,
        "ele": 4.7681864358373085,
        "distanceKm": 3.503027405031604,
        "gradePct": -1.7497473592814778,
        "smoothedEle": 4.757184750745697,
        "gradeBand": "descent"
      },
      {
        "lat": 24.483489,
        "lng": 120.669204,
        "ele": 4.25,
        "distanceKm": 3.541413773463753,
        "gradePct": -1.80089039637421,
        "smoothedEle": 4.209167862784741,
        "gradeBand": "descent"
      },
      {
        "lat": 24.483661,
        "lng": 120.669765,
        "ele": 3.25,
        "distanceKm": 3.601319997879563,
        "gradePct": -1.4580016518604717,
        "smoothedEle": 3.3349716117879233,
        "gradeBand": "descent"
      },
      {
        "lat": 24.483853,
        "lng": 120.670253,
        "ele": 2.75,
        "distanceKm": 3.6551210914263526,
        "gradePct": -0.9353216062972171,
        "smoothedEle": 3.073818862156137,
        "gradeBand": "descent"
      },
      {
        "lat": 24.484106,
        "lng": 120.670758,
        "ele": 3.75,
        "distanceKm": 3.7134567722217304,
        "gradePct": 0.46578503791012205,
        "smoothedEle": 3.741844241377553,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484449,
        "lng": 120.671314,
        "ele": 5,
        "distanceKm": 3.781430238237624,
        "gradePct": 1.823949342909523,
        "smoothedEle": 5.199044842896279,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48428,
        "lng": 120.671554,
        "ele": 6,
        "distanceKm": 3.8121384784871557,
        "gradePct": 2.1597471317814967,
        "smoothedEle": 5.886495060577158,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484252,
        "lng": 120.671724,
        "ele": 6.5,
        "distanceKm": 3.8296212453702516,
        "gradePct": 2.1040687274425824,
        "smoothedEle": 6.192443481031337,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484193,
        "lng": 120.672151,
        "ele": 6.75,
        "distanceKm": 3.873327090374266,
        "gradePct": 1.6993724327187734,
        "smoothedEle": 6.724703727773903,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484325,
        "lng": 120.672766,
        "ele": 7,
        "distanceKm": 3.9372699531591575,
        "gradePct": 0.8196698191427052,
        "smoothedEle": 7.105261095271263,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48435,
        "lng": 120.673159,
        "ele": 7.5,
        "distanceKm": 3.9771369464430983,
        "gradePct": 0.7084447829890925,
        "smoothedEle": 7.455822953741505,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484586,
        "lng": 120.673665,
        "ele": 8,
        "distanceKm": 4.034674758230439,
        "gradePct": 1.0122847725592141,
        "smoothedEle": 8.102100507594763,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484629,
        "lng": 120.673772,
        "ele": 8.25,
        "distanceKm": 4.046511384783372,
        "gradePct": 1.093126262874386,
        "smoothedEle": 8.279649905888755,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484625,
        "lng": 120.673851,
        "ele": 8.25,
        "distanceKm": 4.0545181993761705,
        "gradePct": 1.1428222742029588,
        "smoothedEle": 8.399752124780735,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484556,
        "lng": 120.67418,
        "ele": 9,
        "distanceKm": 4.088684180733353,
        "gradePct": 1.2839458749900963,
        "smoothedEle": 8.869469943512584,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48439469752791,
        "lng": 120.67468116106278,
        "ele": 9.524254909533235,
        "distanceKm": 4.142477750176558,
        "gradePct": 1.293562588575923,
        "smoothedEle": 9.512707975362465,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48421,
        "lng": 120.675174,
        "ele": 10,
        "distanceKm": 4.196414087773333,
        "gradePct": 1.01644203900376,
        "smoothedEle": 9.97834255074679,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484104,
        "lng": 120.675804,
        "ele": 10.5,
        "distanceKm": 4.261247945000112,
        "gradePct": 0.7741267535614194,
        "smoothedEle": 10.448878577022857,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484676,
        "lng": 120.676106,
        "ele": 10.75,
        "distanceKm": 4.331812797835384,
        "gradePct": -0.04423528681208759,
        "smoothedEle": 10.191015754040954,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485077,
        "lng": 120.676476,
        "ele": 8.25,
        "distanceKm": 4.390037572875133,
        "gradePct": -2.1502740674679193,
        "smoothedEle": 8.193399518427398,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485365307146125,
        "lng": 120.6768610814803,
        "ele": 5.913312191492486,
        "distanceKm": 4.440498152891988,
        "gradePct": -3.452038047150981,
        "smoothedEle": 6.4409944813421545,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48563065357306,
        "lng": 120.67726654074015,
        "ele": 5.706656095746244,
        "distanceKm": 4.491035780595138,
        "gradePct": -2.452077539476436,
        "smoothedEle": 5.706656023149213,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485896,
        "lng": 120.677672,
        "ele": 5.5,
        "distanceKm": 4.541573338039503,
        "gradePct": 0.01798655042768711,
        "smoothedEle": 6.443358022946871,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.486272,
        "lng": 120.678102,
        "ele": 10,
        "distanceKm": 4.601917807078447,
        "gradePct": 3.932692693300177,
        "smoothedEle": 9.797979467073416,
        "gradeBand": "hard"
      },
      {
        "lat": 24.486588,
        "lng": 120.678261,
        "ele": 12.25,
        "distanceKm": 4.640564125860922,
        "gradePct": 5.4133142455508025,
        "smoothedEle": 11.841960662559858,
        "gradeBand": "hard"
      },
      {
        "lat": 24.48696,
        "lng": 120.678396,
        "ele": 13.25,
        "distanceKm": 4.684126210609518,
        "gradePct": 4.27332048500888,
        "smoothedEle": 13.082243755376082,
        "gradeBand": "hard"
      },
      {
        "lat": 24.487441377950304,
        "lng": 120.67835389254368,
        "ele": 13.744271777715241,
        "distanceKm": 4.737822400927297,
        "gradePct": 1.846907720844958,
        "smoothedEle": 13.543860155349044,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48792068897515,
        "lng": 120.67828194627185,
        "ele": 13.372135888857624,
        "distanceKm": 4.79161439288108,
        "gradePct": 0.22551758293738447,
        "smoothedEle": 13.372135881872008,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4884,
        "lng": 120.67821,
        "ele": 13,
        "distanceKm": 4.845406381080528,
        "gradePct": -0.35307972024162865,
        "smoothedEle": 13.166569517560493,
        "gradeBand": "descent"
      },
      {
        "lat": 24.488718,
        "lng": 120.678176,
        "ele": 13.25,
        "distanceKm": 4.8809334052071005,
        "gradePct": -0.10106538126819267,
        "smoothedEle": 13.305168231171352,
        "gradeBand": "descent"
      },
      {
        "lat": 24.489127,
        "lng": 120.67822,
        "ele": 13.75,
        "distanceKm": 4.926629624801845,
        "gradePct": 0.2537187965097081,
        "smoothedEle": 13.492043786417879,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489365,
        "lng": 120.677678,
        "ele": 13.125000000000005,
        "distanceKm": 4.987526660779771,
        "gradePct": -0.20713176674336506,
        "smoothedEle": 13.124999707929359,
        "gradeBand": "descent"
      },
      {
        "lat": 24.489603,
        "lng": 120.677136,
        "ele": 12.5,
        "distanceKm": 5.048423603295092,
        "gradePct": -0.8597649488884147,
        "smoothedEle": 12.500920215156581,
        "gradeBand": "descent"
      },
      {
        "lat": 24.489799,
        "lng": 120.676675,
        "ele": 12,
        "distanceKm": 5.099912867501874,
        "gradePct": -1.1201868291820678,
        "smoothedEle": 11.87787748118503,
        "gradeBand": "descent"
      },
      {
        "lat": 24.489927,
        "lng": 120.676358,
        "ele": 11.25,
        "distanceKm": 5.135006371955735,
        "gradePct": -1.4004909420660332,
        "smoothedEle": 11.23793074004144,
        "gradeBand": "descent"
      },
      {
        "lat": 24.490137657095698,
        "lng": 120.67588670506456,
        "ele": 10.159815985652479,
        "distanceKm": 5.1881393082500775,
        "gradePct": -1.8605271294737584,
        "smoothedEle": 10.15981559486091,
        "gradeBand": "descent"
      },
      {
        "lat": 24.49034831419139,
        "lng": 120.67541541012913,
        "ele": 9.06963197130494,
        "distanceKm": 5.241272172851651,
        "gradePct": -2.0363650653159855,
        "smoothedEle": 9.074426929651215,
        "gradeBand": "descent"
      },
      {
        "lat": 24.49055967327742,
        "lng": 120.67494453757872,
        "ele": 8,
        "distanceKm": 5.294401088698091,
        "gradePct": -1.7224997751063897,
        "smoothedEle": 8.3094012875103,
        "gradeBand": "descent"
      },
      {
        "lat": 24.490792,
        "lng": 120.674487,
        "ele": 8.25,
        "distanceKm": 5.3474192992513405,
        "gradePct": -0.7321180290513665,
        "smoothedEle": 8.253793837826189,
        "gradeBand": "descent"
      },
      {
        "lat": 24.490384499999998,
        "lng": 120.6742785,
        "ele": 8.5,
        "distanceKm": 5.3974024395436375,
        "gradePct": 0.19374660360591703,
        "smoothedEle": 8.499999963934469,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489977,
        "lng": 120.67407,
        "ele": 8.75,
        "distanceKm": 5.447385608688358,
        "gradePct": 0.3884851879137226,
        "smoothedEle": 8.642314361641787,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4896296,
        "lng": 120.6737821,
        "ele": 8.575000000000001,
        "distanceKm": 5.495768923215085,
        "gradePct": 0.08304642618327691,
        "smoothedEle": 8.575000042392581,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489282199999998,
        "lng": 120.6734942,
        "ele": 8.4,
        "distanceKm": 5.544152286190475,
        "gradePct": -0.23310825345419145,
        "smoothedEle": 8.400000042390781,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4889348,
        "lng": 120.6732063,
        "ele": 8.225000000000001,
        "distanceKm": 5.592535697612473,
        "gradePct": -0.35449829414482836,
        "smoothedEle": 8.225000042392084,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4885874,
        "lng": 120.6729184,
        "ele": 8.05,
        "distanceKm": 5.640919157482567,
        "gradePct": -0.36169405120051173,
        "smoothedEle": 8.050000042390836,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48824,
        "lng": 120.6726305,
        "ele": 7.875000000000002,
        "distanceKm": 5.68930266579933,
        "gradePct": -0.3616936890297348,
        "smoothedEle": 7.875000042390623,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4878926,
        "lng": 120.6723426,
        "ele": 7.699999999999998,
        "distanceKm": 5.737686222562518,
        "gradePct": -0.3616933268640259,
        "smoothedEle": 7.700000042389579,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4875452,
        "lng": 120.67205469999999,
        "ele": 7.524999999999999,
        "distanceKm": 5.786069827770941,
        "gradePct": -0.3616929647052935,
        "smoothedEle": 7.5250000423886085,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4871978,
        "lng": 120.6717668,
        "ele": 7.35,
        "distanceKm": 5.834453481423489,
        "gradePct": -0.3616926025526869,
        "smoothedEle": 7.35000004238991,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486850399999998,
        "lng": 120.6714789,
        "ele": 7.175,
        "distanceKm": 5.88283718352165,
        "gradePct": -0.3616922404028426,
        "smoothedEle": 7.175000042388112,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486503,
        "lng": 120.671191,
        "ele": 7,
        "distanceKm": 5.931220934063366,
        "gradePct": -0.2532364755896426,
        "smoothedEle": 7.108455445054847,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486751166628125,
        "lng": 120.67078648598903,
        "ele": 7.25,
        "distanceKm": 5.980587952640288,
        "gradePct": 0.003573441734169526,
        "smoothedEle": 7.186708773221154,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.487021571395534,
        "lng": 120.67039555941916,
        "ele": 7.25,
        "distanceKm": 6.030277047610379,
        "gradePct": 0.14024638059448563,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.487291976162947,
        "lng": 120.6700046328493,
        "ele": 7.25,
        "distanceKm": 6.079966074883431,
        "gradePct": 0.06427698621073952,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.487562380930356,
        "lng": 120.66961370627943,
        "ele": 7.25,
        "distanceKm": 6.1296550344583185,
        "gradePct": 0.0007922860235254376,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48783278569777,
        "lng": 120.66922277970957,
        "ele": 7.25,
        "distanceKm": 6.179343926334871,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48810319046518,
        "lng": 120.66883185313972,
        "ele": 7.25,
        "distanceKm": 6.229032750510819,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48837359523259,
        "lng": 120.66844092656986,
        "ele": 7.25,
        "distanceKm": 6.278721506988281,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488644,
        "lng": 120.66805,
        "ele": 7.25,
        "distanceKm": 6.328410195764985,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48892825,
        "lng": 120.667639,
        "ele": 7.25,
        "distanceKm": 6.380647578547607,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4892125,
        "lng": 120.667228,
        "ele": 7.25,
        "distanceKm": 6.432884886503727,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48949675,
        "lng": 120.666817,
        "ele": 7.25,
        "distanceKm": 6.485122119632593,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489781,
        "lng": 120.666406,
        "ele": 7.25,
        "distanceKm": 6.537359277933453,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489849,
        "lng": 120.66637,
        "ele": 7.25,
        "distanceKm": 6.545752333924139,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489929,
        "lng": 120.666352,
        "ele": 7.25,
        "distanceKm": 6.554832503143163,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490025,
        "lng": 120.666401,
        "ele": 7.25,
        "distanceKm": 6.566602603919245,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490382923076922,
        "lng": 120.66670015384615,
        "ele": 7.25,
        "distanceKm": 6.616606196968265,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490740846153845,
        "lng": 120.66699930769231,
        "ele": 7.25,
        "distanceKm": 6.666609737867862,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491098769230767,
        "lng": 120.66729846153845,
        "ele": 7.25,
        "distanceKm": 6.716613226616547,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491456692307693,
        "lng": 120.66759761538461,
        "ele": 7.25,
        "distanceKm": 6.766616663215752,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491814615384616,
        "lng": 120.66789676923077,
        "ele": 7.25,
        "distanceKm": 6.816620047663357,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49217253846154,
        "lng": 120.66819592307692,
        "ele": 7.25,
        "distanceKm": 6.866623379959056,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49253046153846,
        "lng": 120.66849507692307,
        "ele": 7.25,
        "distanceKm": 6.916626660101357,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.492888384615384,
        "lng": 120.66879423076922,
        "ele": 7.25,
        "distanceKm": 6.966629888091379,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493246307692306,
        "lng": 120.66909338461538,
        "ele": 7.25,
        "distanceKm": 7.016633063927633,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493604230769233,
        "lng": 120.66939253846154,
        "ele": 7.25,
        "distanceKm": 7.066636187609809,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493962153846155,
        "lng": 120.66969169230768,
        "ele": 7.25,
        "distanceKm": 7.116639259135789,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494320076923078,
        "lng": 120.66999084615384,
        "ele": 7.25,
        "distanceKm": 7.166642278507006,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494678,
        "lng": 120.67029,
        "ele": 7.25,
        "distanceKm": 7.21664524572197,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494859,
        "lng": 120.669969,
        "ele": 7.25,
        "distanceKm": 7.254856426576584,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494678,
        "lng": 120.67029,
        "ele": 7.25,
        "distanceKm": 7.293067607431198,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494320076923078,
        "lng": 120.66999084615384,
        "ele": 7.25,
        "distanceKm": 7.343070574646162,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493962153846155,
        "lng": 120.66969169230768,
        "ele": 7.25,
        "distanceKm": 7.393073594017379,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493604230769233,
        "lng": 120.66939253846154,
        "ele": 7.25,
        "distanceKm": 7.443076665543359,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493246307692306,
        "lng": 120.66909338461538,
        "ele": 7.25,
        "distanceKm": 7.493079789225535,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.492888384615384,
        "lng": 120.66879423076922,
        "ele": 7.25,
        "distanceKm": 7.543082965061789,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49253046153846,
        "lng": 120.66849507692307,
        "ele": 7.25,
        "distanceKm": 7.593086193051811,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49217253846154,
        "lng": 120.66819592307692,
        "ele": 7.25,
        "distanceKm": 7.643089473194112,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491814615384616,
        "lng": 120.66789676923077,
        "ele": 7.25,
        "distanceKm": 7.693092805489811,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491456692307693,
        "lng": 120.66759761538461,
        "ele": 7.25,
        "distanceKm": 7.743096189937416,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491098769230767,
        "lng": 120.66729846153845,
        "ele": 7.25,
        "distanceKm": 7.7930996265366215,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490740846153845,
        "lng": 120.66699930769231,
        "ele": 7.25,
        "distanceKm": 7.843103115285306,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490382923076922,
        "lng": 120.66670015384615,
        "ele": 7.25,
        "distanceKm": 7.893106656184903,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490025,
        "lng": 120.666401,
        "ele": 7.25,
        "distanceKm": 7.943110249233923,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489929,
        "lng": 120.666352,
        "ele": 7.25,
        "distanceKm": 7.954880350010005,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489849,
        "lng": 120.66637,
        "ele": 7.25,
        "distanceKm": 7.963960519229029,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489781,
        "lng": 120.666406,
        "ele": 7.25,
        "distanceKm": 7.972353575219715,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48949675,
        "lng": 120.666817,
        "ele": 7.25,
        "distanceKm": 8.024590733520576,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4892125,
        "lng": 120.667228,
        "ele": 7.25,
        "distanceKm": 8.076827966649443,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48892825,
        "lng": 120.667639,
        "ele": 7.25,
        "distanceKm": 8.129065274605564,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488644,
        "lng": 120.66805,
        "ele": 7.25,
        "distanceKm": 8.181302657388185,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48837359523259,
        "lng": 120.66844092656986,
        "ele": 7.25,
        "distanceKm": 8.23099134616489,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48810319046518,
        "lng": 120.66883185313972,
        "ele": 7.25,
        "distanceKm": 8.280680102642352,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48783278569777,
        "lng": 120.66922277970957,
        "ele": 7.25,
        "distanceKm": 8.330368926818299,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.487562380930356,
        "lng": 120.66961370627943,
        "ele": 7.25,
        "distanceKm": 8.380057818694851,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.487291976162947,
        "lng": 120.6700046328493,
        "ele": 7.25,
        "distanceKm": 8.429746778269738,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.487021571395534,
        "lng": 120.67039555941916,
        "ele": 7.25,
        "distanceKm": 8.47943580554279,
        "gradePct": 0,
        "smoothedEle": 7.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.486751166628125,
        "lng": 120.67078648598903,
        "ele": 7.25,
        "distanceKm": 8.52912490051288,
        "gradePct": -0.06329122677884702,
        "smoothedEle": 7.186708773221153,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486503,
        "lng": 120.671191,
        "ele": 7,
        "distanceKm": 8.578491919089803,
        "gradePct": -0.1415445549451549,
        "smoothedEle": 7.108455445054846,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486850399999998,
        "lng": 120.6714789,
        "ele": 7.175,
        "distanceKm": 8.62687566963152,
        "gradePct": -0.014573676992269798,
        "smoothedEle": 7.1750000423881115,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4871978,
        "lng": 120.6717668,
        "ele": 7.35,
        "distanceKm": 8.67525937172968,
        "gradePct": 0.23642057735823127,
        "smoothedEle": 7.350000042389908,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4875452,
        "lng": 120.67205469999999,
        "ele": 7.525,
        "distanceKm": 8.723643025382229,
        "gradePct": 0.35444601767135303,
        "smoothedEle": 7.525000042388608,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4878926,
        "lng": 120.6723426,
        "ele": 7.7,
        "distanceKm": 8.772026630590652,
        "gradePct": 0.36169256743077627,
        "smoothedEle": 7.700000042389857,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488239999999998,
        "lng": 120.6726305,
        "ele": 7.875,
        "distanceKm": 8.820410187353525,
        "gradePct": 0.36169292958222105,
        "smoothedEle": 7.875000042390074,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4885874,
        "lng": 120.6729184,
        "ele": 8.05,
        "distanceKm": 8.868793695670604,
        "gradePct": 0.3616932917387205,
        "smoothedEle": 8.050000042391112,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4889348,
        "lng": 120.6732063,
        "ele": 8.225,
        "distanceKm": 8.917177155540697,
        "gradePct": 0.36169365390220637,
        "smoothedEle": 8.225000042392082,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489282199999998,
        "lng": 120.6734942,
        "ele": 8.4,
        "distanceKm": 8.965560566962695,
        "gradePct": 0.3616940160718296,
        "smoothedEle": 8.400000042390783,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4896296,
        "lng": 120.6737821,
        "ele": 8.575,
        "distanceKm": 9.013943929938087,
        "gradePct": 0.3616943782442088,
        "smoothedEle": 8.575000042392587,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489977,
        "lng": 120.67407,
        "ele": 8.75,
        "distanceKm": 9.062327244464813,
        "gradePct": 0.25400905966916465,
        "smoothedEle": 8.642314361641787,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490384499999998,
        "lng": 120.6742785,
        "ele": 8.500000000000005,
        "distanceKm": 9.112310413609533,
        "gradePct": -0.06909173848503361,
        "smoothedEle": 8.499999963934469,
        "gradeBand": "descent"
      },
      {
        "lat": 24.490792,
        "lng": 120.674487,
        "ele": 8.25,
        "distanceKm": 9.16229355390183,
        "gradePct": -0.3971280324361764,
        "smoothedEle": 8.245139456490618,
        "gradeBand": "descent"
      },
      {
        "lat": 24.490592,
        "lng": 120.674886,
        "ele": 8,
        "distanceKm": 9.20838825938662,
        "gradePct": -0.48603871080697475,
        "smoothedEle": 8.025128592563956,
        "gradeBand": "descent"
      },
      {
        "lat": 24.490979333333332,
        "lng": 120.675123,
        "ele": 7.833333333333336,
        "distanceKm": 9.25768462869055,
        "gradePct": -0.43530673772000816,
        "smoothedEle": 7.8333333033927115,
        "gradeBand": "descent"
      },
      {
        "lat": 24.491366666666668,
        "lng": 120.67536,
        "ele": 7.666666666666664,
        "distanceKm": 9.306980962065731,
        "gradePct": -0.3651790114337312,
        "smoothedEle": 7.6666666367250915,
        "gradeBand": "descent"
      },
      {
        "lat": 24.491754,
        "lng": 120.675597,
        "ele": 7.5,
        "distanceKm": 9.356277259511025,
        "gradePct": -0.16411048684122656,
        "smoothedEle": 7.674698408011243,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4922405,
        "lng": 120.675793,
        "ele": 8.125,
        "distanceKm": 9.413894756295347,
        "gradePct": 0.4572069917499978,
        "smoothedEle": 8.125000082526396,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.492727,
        "lng": 120.675989,
        "ele": 8.75,
        "distanceKm": 9.471512226671221,
        "gradePct": 0.9846980757415693,
        "smoothedEle": 8.778463288218473,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493315,
        "lng": 120.676167,
        "ele": 9.75,
        "distanceKm": 9.539330488012448,
        "gradePct": 0.8362169879513685,
        "smoothedEle": 9.249694066752495,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493829,
        "lng": 120.67627700000001,
        "ele": 8.124999999999975,
        "distanceKm": 9.597558520018156,
        "gradePct": -0.8344443343450412,
        "smoothedEle": 8.124999929337347,
        "gradeBand": "descent"
      },
      {
        "lat": 24.494343,
        "lng": 120.676387,
        "ele": 6.5,
        "distanceKm": 9.655786543326922,
        "gradePct": -2.0604384777729243,
        "smoothedEle": 6.871401313304339,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495,
        "lng": 120.676526,
        "ele": 6.75,
        "distanceKm": 9.730183341176485,
        "gradePct": -0.9729975667592541,
        "smoothedEle": 6.449618384411203,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495437388780392,
        "lng": 120.6766082223095,
        "ele": 5.690434156026736,
        "distanceKm": 9.77952530714731,
        "gradePct": -1.0162086843307812,
        "smoothedEle": 5.720608807869969,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495875,
        "lng": 120.676689,
        "ele": 4.75,
        "distanceKm": 9.828867223424808,
        "gradePct": -2.044619056773055,
        "smoothedEle": 4.412460885341119,
        "gradeBand": "descent"
      },
      {
        "lat": 24.496311,
        "lng": 120.676632,
        "ele": 2.5,
        "distanceKm": 9.877690150027794,
        "gradePct": -3.066013306927394,
        "smoothedEle": 2.6817092790067916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.496802,
        "lng": 120.676569,
        "ele": 0.75,
        "distanceKm": 9.932657830403837,
        "gradePct": -3.2758042537792367,
        "smoothedEle": 1.0022812555979357,
        "gradeBand": "descent"
      },
      {
        "lat": 24.497356,
        "lng": 120.676654,
        "ele": 0,
        "distanceKm": 9.994857419440722,
        "gradePct": -1.5438163962398581,
        "smoothedEle": 0.613381148958232,
        "gradeBand": "descent"
      },
      {
        "lat": 24.497233,
        "lng": 120.676995,
        "ele": 1.5,
        "distanceKm": 10.03197347172785,
        "gradePct": 0.560644057249231,
        "smoothedEle": 1.5838345295114251,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.497058,
        "lng": 120.67739,
        "ele": 3.5,
        "distanceKm": 10.076427057992055,
        "gradePct": 2.5299994299287794,
        "smoothedEle": 3.258615577120583,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.496877,
        "lng": 120.677699,
        "ele": 4.5,
        "distanceKm": 10.113611115096345,
        "gradePct": 3.1619542092949287,
        "smoothedEle": 4.265678113621491,
        "gradeBand": "hard"
      },
      {
        "lat": 24.496689,
        "lng": 120.677991,
        "ele": 4.75,
        "distanceKm": 10.149804852616317,
        "gradePct": 2.2675536649491628,
        "smoothedEle": 4.5231823346951465,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.497022,
        "lng": 120.678169,
        "ele": 4.25,
        "distanceKm": 10.190980917734388,
        "gradePct": 0.7105170563114077,
        "smoothedEle": 4.363297446241012,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.497616,
        "lng": 120.678476,
        "ele": 4,
        "distanceKm": 10.263971004963338,
        "gradePct": -0.43441338394149004,
        "smoothedEle": 4.033762390963811,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498027500000003,
        "lng": 120.67872050000001,
        "ele": 4,
        "distanceKm": 10.31598769940903,
        "gradePct": -0.2503970306597889,
        "smoothedEle": 4,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498439,
        "lng": 120.678965,
        "ele": 4,
        "distanceKm": 10.368004355345123,
        "gradePct": 0.20088862999843274,
        "smoothedEle": 4.232033100813048,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.498729,
        "lng": 120.679166,
        "ele": 4.75,
        "distanceKm": 10.406128861794977,
        "gradePct": 0.4625633454313379,
        "smoothedEle": 4.468962405070196,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.499223,
        "lng": 120.6794235,
        "ele": 4.5,
        "distanceKm": 10.466925266501574,
        "gradePct": 0.2727803858152874,
        "smoothedEle": 4.499999945159446,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.499717,
        "lng": 120.679681,
        "ele": 4.25,
        "distanceKm": 10.527721627335728,
        "gradePct": -0.047552806191091423,
        "smoothedEle": 4.4324330521465,
        "gradeBand": "descent"
      },
      {
        "lat": 24.500205,
        "lng": 120.67986300000001,
        "ele": 4.875,
        "distanceKm": 10.585024506315186,
        "gradePct": 0.3951149720458758,
        "smoothedEle": 4.875000071788208,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500693,
        "lng": 120.680045,
        "ele": 5.5,
        "distanceKm": 10.642327362322415,
        "gradePct": 0.5063533382735832,
        "smoothedEle": 5.05159078555444,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501109,
        "lng": 120.680222,
        "ele": 4.25,
        "distanceKm": 10.691930460007512,
        "gradePct": -0.38684898435923515,
        "smoothedEle": 4.509433225471285,
        "gradeBand": "descent"
      },
      {
        "lat": 24.501587,
        "lng": 120.68038200000001,
        "ele": 4,
        "distanceKm": 10.747492528810023,
        "gradePct": -0.9951359857748424,
        "smoothedEle": 3.9999999775803428,
        "gradeBand": "descent"
      },
      {
        "lat": 24.502065,
        "lng": 120.680542,
        "ele": 3.75,
        "distanceKm": 10.803054579676807,
        "gradePct": -0.458514245996401,
        "smoothedEle": 3.948925001655243,
        "gradeBand": "descent"
      },
      {
        "lat": 24.502434,
        "lng": 120.680657,
        "ele": 4.25,
        "distanceKm": 10.845703553581318,
        "gradePct": 0.09021983789771447,
        "smoothedEle": 4.10662243476127,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.502864,
        "lng": 120.681007,
        "ele": 4.25,
        "distanceKm": 10.905203763695955,
        "gradePct": 0.3304691040952242,
        "smoothedEle": 4.287340857385122,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.503193,
        "lng": 120.681173,
        "ele": 4.375000000000003,
        "distanceKm": 10.945458391879761,
        "gradePct": 0.26928407848896724,
        "smoothedEle": 4.3750000114638645,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.503522,
        "lng": 120.681339,
        "ele": 4.5,
        "distanceKm": 10.985713001721386,
        "gradePct": 0.2345170522743167,
        "smoothedEle": 4.462659131151017,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504089,
        "lng": 120.681441,
        "ele": 4.5,
        "distanceKm": 11.049599708811263,
        "gradePct": 0.23426654826952825,
        "smoothedEle": 4.618284761573857,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504499,
        "lng": 120.681702,
        "ele": 5,
        "distanceKm": 11.10228580418172,
        "gradePct": 0.42964383151482516,
        "smoothedEle": 4.932673689977461,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504939,
        "lng": 120.682032,
        "ele": 5.25,
        "distanceKm": 11.161519042940665,
        "gradePct": 0.4287384836265235,
        "smoothedEle": 5.118148399909195,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.505208,
        "lng": 120.682217,
        "ele": 5,
        "distanceKm": 11.19680452410908,
        "gradePct": 0.00707712869705637,
        "smoothedEle": 4.9070428763569005,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.505658,
        "lng": 120.682408,
        "ele": 4.25,
        "distanceKm": 11.25044445152706,
        "gradePct": -0.7305827312371447,
        "smoothedEle": 4.352888236320092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506025,
        "lng": 120.682549,
        "ele": 4,
        "distanceKm": 11.29367482283707,
        "gradePct": -0.8548051770688939,
        "smoothedEle": 4.070962035862484,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506404896252555,
        "lng": 120.6827085490566,
        "ele": 4,
        "distanceKm": 11.33889682660164,
        "gradePct": -0.4721868678033329,
        "smoothedEle": 4,
        "gradeBand": "descent"
      },
      {
        "lat": 24.506784792505112,
        "lng": 120.6828680981132,
        "ele": 4,
        "distanceKm": 11.38411881294905,
        "gradePct": -0.14851355053348766,
        "smoothedEle": 3.984767856586425,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50716478107471,
        "lng": 120.68302738106183,
        "ele": 3.94438595362493,
        "distanceKm": 11.429340768888574,
        "gradePct": -0.10861758055647101,
        "smoothedEle": 3.906377714956504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.507545,
        "lng": 120.683186,
        "ele": 3.75,
        "distanceKm": 11.474562755262417,
        "gradePct": -0.14785815804465105,
        "smoothedEle": 3.8401284700489113,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5078985,
        "lng": 120.6833005,
        "ele": 3.875,
        "distanceKm": 11.515541814515359,
        "gradePct": -0.05529755001959045,
        "smoothedEle": 3.8750000057573257,
        "gradeBand": "descent"
      },
      {
        "lat": 24.508252,
        "lng": 120.683415,
        "ele": 4,
        "distanceKm": 11.556520864556578,
        "gradePct": 0.19690320740329328,
        "smoothedEle": 4.0634626622852466,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5086445,
        "lng": 120.683573,
        "ele": 4.375,
        "distanceKm": 11.60300046135152,
        "gradePct": 0.5106722149336571,
        "smoothedEle": 4.375000032196239,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.509037,
        "lng": 120.683731,
        "ele": 4.75,
        "distanceKm": 11.649480040975137,
        "gradePct": 0.6185672980858875,
        "smoothedEle": 4.649649211794283,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.509489000000002,
        "lng": 120.68389149999999,
        "ele": 4.75,
        "distanceKm": 11.702298418510082,
        "gradePct": 0.37970552885566233,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.509941,
        "lng": 120.684052,
        "ele": 4.75,
        "distanceKm": 11.755116778088379,
        "gradePct": -0.013782009394620202,
        "smoothedEle": 4.646576562259269,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510315000000002,
        "lng": 120.68421774999999,
        "ele": 4.375,
        "distanceKm": 11.79995761129332,
        "gradePct": -0.3705526842797311,
        "smoothedEle": 4.3749999650025355,
        "gradeBand": "descent"
      },
      {
        "lat": 24.510689,
        "lng": 120.6843835,
        "ele": 4,
        "distanceKm": 11.844798425832947,
        "gradePct": -0.6667809252707004,
        "smoothedEle": 3.999999965002482,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511063,
        "lng": 120.68454925,
        "ele": 3.625,
        "distanceKm": 11.889639221707231,
        "gradePct": -0.8124928872362667,
        "smoothedEle": 3.62499996500037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511437,
        "lng": 120.684715,
        "ele": 3.25,
        "distanceKm": 11.93447999891505,
        "gradePct": -0.8040181837509437,
        "smoothedEle": 3.2822739267876644,
        "gradeBand": "descent"
      },
      {
        "lat": 24.511793,
        "lng": 120.684883,
        "ele": 3,
        "distanceKm": 11.977560306156912,
        "gradePct": -0.6548653565493155,
        "smoothedEle": 3.0711496159476734,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512107,
        "lng": 120.685029,
        "ele": 3,
        "distanceKm": 12.015471619544442,
        "gradePct": -0.3950238632181243,
        "smoothedEle": 3.0325344890454766,
        "gradeBand": "descent"
      },
      {
        "lat": 24.512772,
        "lng": 120.685049,
        "ele": 3.25,
        "distanceKm": 12.089444028308062,
        "gradePct": 0.30963898539953383,
        "smoothedEle": 3.36868426103469,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.513391,
        "lng": 120.685161,
        "ele": 4.25,
        "distanceKm": 12.159200278292031,
        "gradePct": 1.0491140995416426,
        "smoothedEle": 4.280362932395609,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.513827,
        "lng": 120.685335,
        "ele": 5,
        "distanceKm": 12.210778496298497,
        "gradePct": 1.1709034221566925,
        "smoothedEle": 4.818418317524243,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.51431505526163,
        "lng": 120.68554017406949,
        "ele": 5,
        "distanceKm": 12.268882282382311,
        "gradePct": 0.6186360124892372,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.514803052885775,
        "lng": 120.68574551425003,
        "ele": 5,
        "distanceKm": 12.326986060281792,
        "gradePct": 0.13093099453822843,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.515291,
        "lng": 120.685951,
        "ele": 5,
        "distanceKm": 12.385089831939938,
        "gradePct": 0.03917287659957505,
        "smoothedEle": 5.039172876599575,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.515861,
        "lng": 120.686212,
        "ele": 5.25,
        "distanceKm": 12.453751530660279,
        "gradePct": 0.11770582768491653,
        "smoothedEle": 5.135750791692327,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.516202,
        "lng": 120.686336,
        "ele": 5,
        "distanceKm": 12.4936904652938,
        "gradePct": -0.10999269624326176,
        "smoothedEle": 4.941277627015425,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516583,
        "lng": 120.68652499999999,
        "ele": 4.50000000000001,
        "distanceKm": 12.540170983416733,
        "gradePct": -0.6166487760388937,
        "smoothedEle": 4.4999999403619055,
        "gradeBand": "descent"
      },
      {
        "lat": 24.516964,
        "lng": 120.686714,
        "ele": 4,
        "distanceKm": 12.586651477684427,
        "gradePct": -0.8151727545397469,
        "smoothedEle": 4.1603795522856775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.517424000000002,
        "lng": 120.686973,
        "ele": 4.125000000000002,
        "distanceKm": 12.644122216956573,
        "gradePct": -0.34612931925151746,
        "smoothedEle": 4.1250000273414855,
        "gradeBand": "descent"
      },
      {
        "lat": 24.517884,
        "lng": 120.687232,
        "ele": 4.25,
        "distanceKm": 12.701592912482342,
        "gradePct": 0.006032736926103532,
        "smoothedEle": 4.157214202118597,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.518268,
        "lng": 120.687427,
        "ele": 4,
        "distanceKm": 12.748628926414336,
        "gradePct": -0.03795060469553593,
        "smoothedEle": 4.089575578364336,
        "gradeBand": "descent"
      },
      {
        "lat": 24.518618,
        "lng": 120.687628,
        "ele": 4.083333333333332,
        "distanceKm": 12.79253949654395,
        "gradePct": -0.06880612679667777,
        "smoothedEle": 4.08333334426636,
        "gradeBand": "descent"
      },
      {
        "lat": 24.518967999999997,
        "lng": 120.687829,
        "ele": 4.166666666666668,
        "distanceKm": 12.836450040434304,
        "gradePct": 0.05957764480500248,
        "smoothedEle": 4.166666677598967,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.519318,
        "lng": 120.68803,
        "ele": 4.25,
        "distanceKm": 12.880360558087135,
        "gradePct": 0.26482523155150434,
        "smoothedEle": 4.349889908038963,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.519693,
        "lng": 120.688315,
        "ele": 4.75,
        "distanceKm": 12.931056347813689,
        "gradePct": 0.6627783707083733,
        "smoothedEle": 4.819208910349911,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.520027,
        "lng": 120.688626,
        "ele": 5.5,
        "distanceKm": 12.979731164871417,
        "gradePct": 1.029601077994914,
        "smoothedEle": 5.376864748303939,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.520407,
        "lng": 120.688765,
        "ele": 5.75,
        "distanceKm": 13.024263817401454,
        "gradePct": 0.8693206547546857,
        "smoothedEle": 5.62564734917638,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.520808720186,
        "lng": 120.68892518487584,
        "ele": 5.540333932150249,
        "distanceKm": 13.07178182348569,
        "gradePct": 0.24035638690302094,
        "smoothedEle": 5.526147415784807,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.521210815425245,
        "lng": 120.68908422837283,
        "ele": 5.276605622251331,
        "distanceKm": 13.11929979538781,
        "gradePct": -0.3246892155715549,
        "smoothedEle": 5.273226520121679,
        "gradeBand": "descent"
      },
      {
        "lat": 24.521613,
        "lng": 120.689243,
        "ele": 5,
        "distanceKm": 13.16681779275136,
        "gradePct": -0.5124955330752236,
        "smoothedEle": 5.024046273554689,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522143,
        "lng": 120.689405,
        "ele": 4.75,
        "distanceKm": 13.227987543610107,
        "gradePct": -0.5388050950666684,
        "smoothedEle": 4.68886362876193,
        "gradeBand": "descent"
      },
      {
        "lat": 24.522753,
        "lng": 120.689604,
        "ele": 4,
        "distanceKm": 13.298741094899537,
        "gradePct": -0.7985216780005572,
        "smoothedEle": 4.050599298420701,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523202,
        "lng": 120.689772,
        "ele": 3.75,
        "distanceKm": 13.351481187504382,
        "gradePct": -0.7048953294200103,
        "smoothedEle": 3.772033285280022,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5235425,
        "lng": 120.6899205,
        "ele": 3.6250000000000027,
        "distanceKm": 13.392214629162106,
        "gradePct": -0.48447423645232707,
        "smoothedEle": 3.624999990611258,
        "gradeBand": "descent"
      },
      {
        "lat": 24.523883,
        "lng": 120.690069,
        "ele": 3.5,
        "distanceKm": 13.432948055797844,
        "gradePct": -0.20746354565249298,
        "smoothedEle": 3.662459226648014,
        "gradeBand": "descent"
      },
      {
        "lat": 24.524418,
        "lng": 120.690364,
        "ele": 4.25,
        "distanceKm": 13.499503357585752,
        "gradePct": 0.49287953741818624,
        "smoothedEle": 4.12458238170465,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.524793964839475,
        "lng": 120.69055158499391,
        "ele": 4.25,
        "distanceKm": 13.545414264624995,
        "gradePct": 0.43337094798610276,
        "smoothedEle": 4.182388624525249,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.52517,
        "lng": 120.690739,
        "ele": 4,
        "distanceKm": 13.591325164245195,
        "gradePct": 0.1605793448146834,
        "smoothedEle": 4.228376881320299,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.525651500000002,
        "lng": 120.690936,
        "ele": 4.750000000000012,
        "distanceKm": 13.648454362686383,
        "gradePct": 0.5645662549904469,
        "smoothedEle": 4.750000099964124,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.526133,
        "lng": 120.691133,
        "ele": 5.5,
        "distanceKm": 13.705583534470474,
        "gradePct": 0.9130489063809911,
        "smoothedEle": 5.271613102987745,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.526544,
        "lng": 120.6911755,
        "ele": 5.25,
        "distanceKm": 13.751486501508401,
        "gradePct": 0.4723152149394866,
        "smoothedEle": 5.249999998352456,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.526955,
        "lng": 120.691218,
        "ele": 5,
        "distanceKm": 13.797389467228294,
        "gradePct": -0.42795712091291604,
        "smoothedEle": 4.768840753922671,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527421,
        "lng": 120.69128,
        "ele": 3.75,
        "distanceKm": 13.8495845809999,
        "gradePct": -1.4714897535277394,
        "smoothedEle": 3.7794057513597186,
        "gradeBand": "descent"
      },
      {
        "lat": 24.527833,
        "lng": 120.691227,
        "ele": 2.75,
        "distanceKm": 13.895709623486352,
        "gradePct": -1.891842514755588,
        "smoothedEle": 2.894606520744468,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528429,
        "lng": 120.691304,
        "ele": 2,
        "distanceKm": 13.962438085666811,
        "gradePct": -1.1833375653636253,
        "smoothedEle": 2.3495042713214898,
        "gradeBand": "descent"
      },
      {
        "lat": 24.528773,
        "lng": 120.691422,
        "ele": 2.75,
        "distanceKm": 14.002508484467294,
        "gradePct": -0.14944245211147286,
        "smoothedEle": 2.689624433923556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.529257,
        "lng": 120.691581,
        "ele": 3.5,
        "distanceKm": 14.058679034221495,
        "gradePct": 0.8837079822006344,
        "smoothedEle": 3.263919800670399,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.529628,
        "lng": 120.691687,
        "ele": 3.25,
        "distanceKm": 14.101303225495217,
        "gradePct": 0.6083977303605521,
        "smoothedEle": 3.2877918473960377,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.530282,
        "lng": 120.691731,
        "ele": 3,
        "distanceKm": 14.174160894685768,
        "gradePct": -0.23866263692201567,
        "smoothedEle": 3.0339279135118127,
        "gradeBand": "descent"
      },
      {
        "lat": 24.530677,
        "lng": 120.691775,
        "ele": 3,
        "distanceKm": 14.218307902524186,
        "gradePct": -0.09092650594480112,
        "smoothedEle": 3.1376145549113232,
        "gradeBand": "descent"
      },
      {
        "lat": 24.531045,
        "lng": 120.691959,
        "ele": 3.5,
        "distanceKm": 14.26326208055966,
        "gradePct": 0.43534104192878886,
        "smoothedEle": 3.507244584629209,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.531413,
        "lng": 120.692055,
        "ele": 4,
        "distanceKm": 14.30531842474345,
        "gradePct": 0.6777311739736718,
        "smoothedEle": 3.7848377649127225,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.531806333333332,
        "lng": 120.69206833333332,
        "ele": 3.75,
        "distanceKm": 14.349075948306048,
        "gradePct": 0.35939908918130475,
        "smoothedEle": 3.74999999983773,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.532199666666667,
        "lng": 120.69208166666667,
        "ele": 3.5,
        "distanceKm": 14.392833471738827,
        "gradePct": -0.2024307494996121,
        "smoothedEle": 3.4999999998366285,
        "gradeBand": "descent"
      },
      {
        "lat": 24.532593,
        "lng": 120.692095,
        "ele": 3.25,
        "distanceKm": 14.436590995040907,
        "gradePct": -0.5906163770396774,
        "smoothedEle": 3.1693235790252623,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53322,
        "lng": 120.692129,
        "ele": 2.25,
        "distanceKm": 14.506395091671479,
        "gradePct": -0.9450366417385515,
        "smoothedEle": 2.4524779429895824,
        "gradeBand": "descent"
      },
      {
        "lat": 24.533742,
        "lng": 120.692222,
        "ele": 2.5,
        "distanceKm": 14.565196350757537,
        "gradePct": -0.3832288714455037,
        "smoothedEle": 2.4923350945696843,
        "gradeBand": "descent"
      },
      {
        "lat": 24.534317,
        "lng": 120.692334,
        "ele": 2.75,
        "distanceKm": 14.630129534187848,
        "gradePct": 0.3419658997353542,
        "smoothedEle": 2.8105317171641486,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.534692000000003,
        "lng": 120.69248300000001,
        "ele": 3.1250000000000075,
        "distanceKm": 14.674468073987178,
        "gradePct": 0.5872300599819205,
        "smoothedEle": 3.125000028701411,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.535067,
        "lng": 120.692632,
        "ele": 3.5,
        "distanceKm": 14.718806598479091,
        "gradePct": 0.9093367730445026,
        "smoothedEle": 3.664381916009688,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5354715,
        "lng": 120.6927385,
        "ele": 4.5,
        "distanceKm": 14.765057161961623,
        "gradePct": 1.4417463147920053,
        "smoothedEle": 4.500000040433008,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.535876,
        "lng": 120.692845,
        "ele": 5.5,
        "distanceKm": 14.811307717357556,
        "gradePct": 1.4656324694325449,
        "smoothedEle": 5.038789864590804,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.536498,
        "lng": 120.692821,
        "ele": 4.25,
        "distanceKm": 14.88051365137534,
        "gradePct": -0.4139229048150478,
        "smoothedEle": 4.266135496907301,
        "gradeBand": "descent"
      },
      {
        "lat": 24.536817,
        "lng": 120.692868,
        "ele": 3.75,
        "distanceKm": 14.916302069082283,
        "gradePct": -1.356816473184451,
        "smoothedEle": 3.626213611141465,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537018,
        "lng": 120.692776,
        "ele": 3,
        "distanceKm": 14.940512311068687,
        "gradePct": -1.4077605323199147,
        "smoothedEle": 3.3049726550858205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53746119434619,
        "lng": 120.69291721965243,
        "ele": 2.923119598573002,
        "distanceKm": 14.99182192205305,
        "gradePct": -1.1626668483468559,
        "smoothedEle": 2.901268876665324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.537903779153226,
        "lng": 120.69306074866114,
        "ele": 2.7564837525504204,
        "distanceKm": 15.043132031922237,
        "gradePct": -0.5278769632244883,
        "smoothedEle": 2.7564837404803826,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53834636396026,
        "lng": 120.69320427766985,
        "ele": 2.589847906527833,
        "distanceKm": 15.0944421273047,
        "gradePct": -0.30402737546737696,
        "smoothedEle": 2.5898478944572947,
        "gradeBand": "descent"
      },
      {
        "lat": 24.538788948767298,
        "lng": 120.69334780667855,
        "ele": 2.4232120605052514,
        "distanceKm": 15.145752208199832,
        "gradePct": -0.32476234729551284,
        "smoothedEle": 2.423212048435222,
        "gradeBand": "descent"
      },
      {
        "lat": 24.539231533574334,
        "lng": 120.69349133568726,
        "ele": 2.256576214482664,
        "distanceKm": 15.197062274608252,
        "gradePct": -0.16731645483110538,
        "smoothedEle": 2.414022186570785,
        "gradeBand": "descent"
      },
      {
        "lat": 24.53967402494225,
        "lng": 120.69363521421786,
        "ele": 2.7366697812032874,
        "distanceKm": 15.248372377968979,
        "gradePct": 0.32039587529171226,
        "smoothedEle": 2.743138639628796,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540116512471126,
        "lng": 120.69377910710892,
        "ele": 3.2433348906016346,
        "distanceKm": 15.299682469450898,
        "gradePct": 0.8125061243492194,
        "smoothedEle": 3.243334927481858,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.540559,
        "lng": 120.693923,
        "ele": 3.75,
        "distanceKm": 15.350992546374794,
        "gradePct": 0.8081379272676161,
        "smoothedEle": 3.5768192715045415,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541070499999996,
        "lng": 120.69411600000001,
        "ele": 3.5,
        "distanceKm": 15.411125904386235,
        "gradePct": 0.18228966171250446,
        "smoothedEle": 3.499999967707973,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.541582,
        "lng": 120.694309,
        "ele": 3.25,
        "distanceKm": 15.471259236564055,
        "gradePct": -0.2510955976191349,
        "smoothedEle": 3.299833334777726,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54194211154726,
        "lng": 120.69441956245879,
        "ele": 3.25,
        "distanceKm": 15.512834224731186,
        "gradePct": -0.24431345876142216,
        "smoothedEle": 3.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.542302,
        "lng": 120.694531,
        "ele": 3.25,
        "distanceKm": 15.554409222702091,
        "gradePct": -0.05006258920187063,
        "smoothedEle": 3.305859613719792,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54279,
        "lng": 120.694637,
        "ele": 3.5,
        "distanceKm": 15.609721531726258,
        "gradePct": 0.19040939610045696,
        "smoothedEle": 3.444140386280208,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.543286,
        "lng": 120.694773,
        "ele": 3.5,
        "distanceKm": 15.666563945747015,
        "gradePct": 0.2010232260386793,
        "smoothedEle": 3.5372696473707808,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.543887,
        "lng": 120.694985,
        "ele": 3.75,
        "distanceKm": 15.736748227850391,
        "gradePct": 0.16134657556071966,
        "smoothedEle": 3.64976685887065,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.54432,
        "lng": 120.695104,
        "ele": 3.5,
        "distanceKm": 15.786377432843539,
        "gradePct": -0.006064860571197282,
        "smoothedEle": 3.5629634937585646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.544692,
        "lng": 120.69519000000001,
        "ele": 3.5,
        "distanceKm": 15.828646742762356,
        "gradePct": -0.13678112397249592,
        "smoothedEle": 3.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.545064,
        "lng": 120.695276,
        "ele": 3.5,
        "distanceKm": 15.870916047372855,
        "gradePct": -0.09000604437640623,
        "smoothedEle": 3.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.545648,
        "lng": 120.695453,
        "ele": 3.5,
        "distanceKm": 15.93827664727585,
        "gradePct": -0.05860769530164609,
        "smoothedEle": 3.441392304698354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.546114178071132,
        "lng": 120.6955674619309,
        "ele": 3.25,
        "distanceKm": 15.991390491034537,
        "gradePct": -0.17357833099084202,
        "smoothedEle": 3.3086076953016414,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54658007962363,
        "lng": 120.69568327630328,
        "ele": 3.25,
        "distanceKm": 16.044504319588604,
        "gradePct": -0.17582312391647,
        "smoothedEle": 3.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.547046,
        "lng": 120.695799,
        "ele": 3.25,
        "distanceKm": 16.097618158228073,
        "gradePct": -0.051735864909161225,
        "smoothedEle": 3.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.547643,
        "lng": 120.695953,
        "ele": 3.25,
        "distanceKm": 16.165804568762866,
        "gradePct": -0.03894021251497948,
        "smoothedEle": 3.21105978748502,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54802952074871,
        "lng": 120.69606241148554,
        "ele": 3.109975031428768,
        "distanceKm": 16.210185613211845,
        "gradePct": -0.12449116200172661,
        "smoothedEle": 3.118331757345364,
        "gradeBand": "descent"
      },
      {
        "lat": 24.548416,
        "lng": 120.696172,
        "ele": 3,
        "distanceKm": 16.25456664915963,
        "gradePct": -0.18689410428974185,
        "smoothedEle": 3.0305834865983887,
        "gradeBand": "descent"
      },
      {
        "lat": 24.548842,
        "lng": 120.696367,
        "ele": 3,
        "distanceKm": 16.305877780977465,
        "gradePct": -0.1273323746635406,
        "smoothedEle": 3,
        "gradeBand": "descent"
      },
      {
        "lat": 24.54917,
        "lng": 120.696482,
        "ele": 3,
        "distanceKm": 16.344159607952232,
        "gradePct": -0.05115983976455334,
        "smoothedEle": 3,
        "gradeBand": "descent"
      },
      {
        "lat": 24.549704,
        "lng": 120.69681,
        "ele": 3,
        "distanceKm": 16.412176886581722,
        "gradePct": 0,
        "smoothedEle": 3,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.550017,
        "lng": 120.697016,
        "ele": 3,
        "distanceKm": 16.452740901944058,
        "gradePct": 0.022209614025314867,
        "smoothedEle": 3.022209614025315,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.550412059373382,
        "lng": 120.69725234387374,
        "ele": 3.08885890691463,
        "distanceKm": 16.502752409408014,
        "gradePct": 0.09760146482206927,
        "smoothedEle": 3.0976014648220707,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.550809383356615,
        "lng": 120.6974841987667,
        "ele": 3.2127130164009285,
        "distanceKm": 16.552770746205827,
        "gradePct": 0.19045843401468196,
        "smoothedEle": 3.2127130379682067,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.551206707339848,
        "lng": 120.69771605365966,
        "ele": 3.3365671258872176,
        "distanceKm": 16.602789048176728,
        "gradePct": 0.2388813626300014,
        "smoothedEle": 3.336567147454991,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.551604031323077,
        "lng": 120.69794790855262,
        "ele": 3.4604212353735067,
        "distanceKm": 16.652807315319926,
        "gradePct": 0.24803925111385763,
        "smoothedEle": 3.4608428406378553,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.55200138100329,
        "lng": 120.69817971270052,
        "ele": 3.5859625911265485,
        "distanceKm": 16.70282566561739,
        "gradePct": 0.24950247592906163,
        "smoothedEle": 3.5861606033016047,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.552398742751738,
        "lng": 120.69841149301669,
        "ele": 3.712296339043275,
        "distanceKm": 16.75284403675284,
        "gradePct": 0.2513615172024726,
        "smoothedEle": 3.7122963610309028,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.552796104500185,
        "lng": 120.69864327333288,
        "ele": 3.838630086960011,
        "distanceKm": 16.802862373079495,
        "gradePct": 0.25237693718797294,
        "smoothedEle": 3.838630108948765,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.553193466248633,
        "lng": 120.69887505364905,
        "ele": 3.9649638348767375,
        "distanceKm": 16.852880674595568,
        "gradePct": 0.25257495785062817,
        "smoothedEle": 3.964963856865144,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.553590827997077,
        "lng": 120.69910683396523,
        "ele": 4.091297582793464,
        "distanceKm": 16.90289894130161,
        "gradePct": 0.2525751336296453,
        "smoothedEle": 4.091297604782134,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.553988189745525,
        "lng": 120.69933861428142,
        "ele": 4.2176313307102005,
        "distanceKm": 16.952917173197207,
        "gradePct": 0.22909257315724116,
        "smoothedEle": 4.1941486164463155,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.554385588499084,
        "lng": 120.69957031999081,
        "ele": 4.25,
        "distanceKm": 17.00293546944308,
        "gradePct": 0.15053807728357657,
        "smoothedEle": 4.24191079380321,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.554783,
        "lng": 120.699802,
        "ele": 4.25,
        "distanceKm": 17.052953765405533,
        "gradePct": 0.19150385715891266,
        "smoothedEle": 4.385687415290075,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.555143,
        "lng": 120.7000205,
        "ele": 4.7499999999999805,
        "distanceKm": 17.0986787992895,
        "gradePct": 0.5121539521782894,
        "smoothedEle": 4.750000076648794,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.555503,
        "lng": 120.700239,
        "ele": 5.25,
        "distanceKm": 17.144403802513953,
        "gradePct": 0.9924181215803136,
        "smoothedEle": 5.353528834391124,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.555643,
        "lng": 120.70035,
        "ele": 5.75,
        "distanceKm": 17.163596835113967,
        "gradePct": 1.026990865575938,
        "smoothedEle": 5.497476578891236,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.555783,
        "lng": 120.700359,
        "ele": 6,
        "distanceKm": 17.1791907353618,
        "gradePct": 0.9628968389918079,
        "smoothedEle": 5.557626425251333,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.555982,
        "lng": 120.700332,
        "ele": 5.5,
        "distanceKm": 17.201486415522048,
        "gradePct": 0.6776696819777693,
        "smoothedEle": 5.464727757916966,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5564005,
        "lng": 120.7005085,
        "ele": 4.833333333333325,
        "distanceKm": 17.25132788524207,
        "gradePct": -0.572126192639203,
        "smoothedEle": 4.833333262212781,
        "gradeBand": "descent"
      },
      {
        "lat": 24.556819,
        "lng": 120.70068500000001,
        "ele": 4.16666666666665,
        "distanceKm": 17.30116933362593,
        "gradePct": -1.2993823369448327,
        "smoothedEle": 4.166666595539286,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5572375,
        "lng": 120.7008615,
        "ele": 3.4999999999999756,
        "distanceKm": 17.35101076067158,
        "gradePct": -1.3373506849408328,
        "smoothedEle": 3.499999928874612,
        "gradeBand": "descent"
      },
      {
        "lat": 24.557655999999998,
        "lng": 120.701038,
        "ele": 2.8333333333333495,
        "distanceKm": 17.40085216637963,
        "gradePct": -1.3375756825732368,
        "smoothedEle": 2.833333262209999,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5580745,
        "lng": 120.7012145,
        "ele": 2.166666666666675,
        "distanceKm": 17.450693550750678,
        "gradePct": -1.3375762552032304,
        "smoothedEle": 2.1666665955365154,
        "gradeBand": "descent"
      },
      {
        "lat": 24.558493,
        "lng": 120.701391,
        "ele": 1.5,
        "distanceKm": 17.50053491378268,
        "gradePct": -1.359748754149001,
        "smoothedEle": 1.4778280025671027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.558762,
        "lng": 120.701781,
        "ele": 0.75,
        "distanceKm": 17.550036926051245,
        "gradePct": -1.1685953417784047,
        "smoothedEle": 1.0068541117214416,
        "gradeBand": "descent"
      },
      {
        "lat": 24.559077,
        "lng": 120.702076,
        "ele": 1,
        "distanceKm": 17.596047599868392,
        "gradePct": -0.6073321256074801,
        "smoothedEle": 0.9325133422714372,
        "gradeBand": "descent"
      },
      {
        "lat": 24.55947733333333,
        "lng": 120.70226966666667,
        "ele": 1,
        "distanceKm": 17.644681204133477,
        "gradePct": -0.057809720883640406,
        "smoothedEle": 1,
        "gradeBand": "descent"
      },
      {
        "lat": 24.559877666666665,
        "lng": 120.70246333333334,
        "ele": 1,
        "distanceKm": 17.693314783212543,
        "gradePct": 0.0630711672323979,
        "smoothedEle": 1,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.560277999999997,
        "lng": 120.702657,
        "ele": 1,
        "distanceKm": 17.741948337103395,
        "gradePct": 0.003792276239112881,
        "smoothedEle": 1,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.560678333333332,
        "lng": 120.70285066666666,
        "ele": 1,
        "distanceKm": 17.790581865807017,
        "gradePct": 0,
        "smoothedEle": 1,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.561078666666667,
        "lng": 120.70304433333334,
        "ele": 1,
        "distanceKm": 17.839215369323306,
        "gradePct": 0,
        "smoothedEle": 1,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.561479,
        "lng": 120.703238,
        "ele": 1,
        "distanceKm": 17.887848847650424,
        "gradePct": 0,
        "smoothedEle": 1,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.561839,
        "lng": 120.70339799999999,
        "ele": 1,
        "distanceKm": 17.931025876437698,
        "gradePct": 0,
        "smoothedEle": 1,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.562199,
        "lng": 120.703558,
        "ele": 1,
        "distanceKm": 17.974202887811398,
        "gradePct": 0.03013584245476066,
        "smoothedEle": 1.030135842454761,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.562624333333332,
        "lng": 120.7037665,
        "ele": 1.125,
        "distanceKm": 18.02598553988378,
        "gradePct": 0.12500001820764695,
        "smoothedEle": 1.1250000182076487,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.563049666666668,
        "lng": 120.703975,
        "ele": 1.25,
        "distanceKm": 18.07776816282393,
        "gradePct": 0.2133327050416672,
        "smoothedEle": 1.250000018208346,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.563475,
        "lng": 120.7041835,
        "ele": 1.375,
        "distanceKm": 18.129550756630728,
        "gradePct": 0.24139379065736102,
        "smoothedEle": 1.3750000182083637,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.563900333333333,
        "lng": 120.704392,
        "ele": 1.5,
        "distanceKm": 18.181333321304148,
        "gradePct": 0.2413939264671049,
        "smoothedEle": 1.500000018208386,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.56432566666667,
        "lng": 120.7046005,
        "ele": 1.625,
        "distanceKm": 18.233115856844158,
        "gradePct": 0.24139406227844554,
        "smoothedEle": 1.6250000182090787,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.564751,
        "lng": 120.704809,
        "ele": 1.75,
        "distanceKm": 18.28489836324965,
        "gradePct": 0.25385726302421635,
        "smoothedEle": 1.7624630831413517,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5653,
        "lng": 120.705055,
        "ele": 2,
        "distanceKm": 18.350819149939312,
        "gradePct": 0.12444064537954615,
        "smoothedEle": 1.7964362437020676,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.565765,
        "lng": 120.705294,
        "ele": 1.25,
        "distanceKm": 18.407895219363308,
        "gradePct": -0.31814207385160426,
        "smoothedEle": 1.4561727471765948,
        "gradeBand": "descent"
      },
      {
        "lat": 24.566134255414333,
        "lng": 120.7054812683895,
        "ele": 1.4150426464547667,
        "distanceKm": 18.45311179400306,
        "gradePct": -0.3677257992731585,
        "smoothedEle": 1.4150426657382615,
        "gradeBand": "descent"
      },
      {
        "lat": 24.56650351082867,
        "lng": 120.70566853677902,
        "ele": 1.5800852929095466,
        "distanceKm": 18.498328345274924,
        "gradePct": 0.06687888941533042,
        "smoothedEle": 1.5800853121933565,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.566872766243005,
        "lng": 120.70585580516854,
        "ele": 1.745127939364313,
        "distanceKm": 18.543544873178508,
        "gradePct": 0.3213829921336261,
        "smoothedEle": 1.7451279586490511,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.56724202165734,
        "lng": 120.70604307355805,
        "ele": 1.9101705858190932,
        "distanceKm": 18.588761377712697,
        "gradePct": 0.4128824435173576,
        "smoothedEle": 1.9580478513702304,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.567611,
        "lng": 120.706231,
        "ele": 2.25,
        "distanceKm": 18.633977814527555,
        "gradePct": 0.5074876065295401,
        "smoothedEle": 2.217695310312561,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.568051,
        "lng": 120.706386,
        "ele": 2.5,
        "distanceKm": 18.685353301541703,
        "gradePct": 0.5034408211388736,
        "smoothedEle": 2.4454403905777817,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.568434377360884,
        "lng": 120.70650821575691,
        "ele": 2.5223718555339962,
        "distanceKm": 18.72973849748002,
        "gradePct": 0.39024385967691066,
        "smoothedEle": 2.583595635279956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.56881791824059,
        "lng": 120.70662981050461,
        "ele": 2.7649145703559976,
        "distanceKm": 18.774123706818873,
        "gradePct": 0.36925444950836145,
        "smoothedEle": 2.76491458299987,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.569201459120293,
        "lng": 120.7067514052523,
        "ele": 3.007457285177999,
        "distanceKm": 18.818508905731623,
        "gradePct": 0.45881536643063836,
        "smoothedEle": 3.007457297821095,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.569585,
        "lng": 120.706873,
        "ele": 3.25,
        "distanceKm": 18.86289409421891,
        "gradePct": 0.5058524431150037,
        "smoothedEle": 3.224892700629933,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.57016,
        "lng": 120.70704,
        "ele": 3.5,
        "distanceKm": 18.929024064240526,
        "gradePct": 0.4583048214832962,
        "smoothedEle": 3.517274071915273,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.570619622533403,
        "lng": 120.70717800381377,
        "ele": 3.7535528612676936,
        "distanceKm": 18.982003013805347,
        "gradePct": 0.4425027403376531,
        "smoothedEle": 3.7518819772632725,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571079,
        "lng": 120.707317,
        "ele": 4,
        "distanceKm": 19.034982199782604,
        "gradePct": 0.48018364829805094,
        "smoothedEle": 4.0238422693746125,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.57166,
        "lng": 120.707503,
        "ele": 4.5,
        "distanceKm": 19.102269001879225,
        "gradePct": 0.5623027757865873,
        "smoothedEle": 4.4182170052415595,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.57145102775002,
        "lng": 120.70793722622675,
        "ele": 4.5,
        "distanceKm": 19.151949497310095,
        "gradePct": 0.3767106879323583,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571243,
        "lng": 120.708372,
        "ele": 4.5,
        "distanceKm": 19.201630018387473,
        "gradePct": 0.40871605138082184,
        "smoothedEle": 4.823187909908147,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571025,
        "lng": 120.708785,
        "ele": 5.75,
        "distanceKm": 19.24991995280217,
        "gradePct": 0.6069651739965469,
        "smoothedEle": 5.103624180183706,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.571243,
        "lng": 120.708372,
        "ele": 4.5,
        "distanceKm": 19.298209887216867,
        "gradePct": 0.022249063026504996,
        "smoothedEle": 4.823187909908147,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.57145102775002,
        "lng": 120.70793722622675,
        "ele": 4.5,
        "distanceKm": 19.347890408294244,
        "gradePct": -0.7176366780909507,
        "smoothedEle": 4.374201238577173,
        "gradeBand": "descent"
      },
      {
        "lat": 24.57166,
        "lng": 120.707503,
        "ele": 4,
        "distanceKm": 19.397570903725114,
        "gradePct": -0.855540904154046,
        "smoothedEle": 3.971357802825303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.571991,
        "lng": 120.707605,
        "ele": 3.5,
        "distanceKm": 19.435794520286105,
        "gradePct": -0.9905500315881676,
        "smoothedEle": 3.492967542160045,
        "gradeBand": "descent"
      },
      {
        "lat": 24.572458,
        "lng": 120.707836,
        "ele": 2.75,
        "distanceKm": 19.492734942569445,
        "gradePct": -1.2359482991259394,
        "smoothedEle": 2.774622784287977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.572788,
        "lng": 120.708098,
        "ele": 2.25,
        "distanceKm": 19.53799468970965,
        "gradePct": -1.2193143084611018,
        "smoothedEle": 2.2458964994062427,
        "gradeBand": "descent"
      },
      {
        "lat": 24.573049,
        "lng": 120.70842,
        "ele": 1.75,
        "distanceKm": 19.581613036612353,
        "gradePct": -1.0838049040004036,
        "smoothedEle": 1.8311287968815477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.573203,
        "lng": 120.708907,
        "ele": 1.5,
        "distanceKm": 19.633752767922996,
        "gradePct": -0.6268753621537992,
        "smoothedEle": 1.6685754474006782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.573263,
        "lng": 120.709606,
        "ele": 2.25,
        "distanceKm": 19.704752738179273,
        "gradePct": 0.626521009483161,
        "smoothedEle": 2.3855083529828396,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.573293,
        "lng": 120.7101645,
        "ele": 3.3750000000000364,
        "distanceKm": 19.76132901115318,
        "gradePct": 1.427969354364172,
        "smoothedEle": 3.3750000759388357,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.573323,
        "lng": 120.710723,
        "ele": 4.5,
        "distanceKm": 19.817905270626852,
        "gradePct": 1.7144277459507307,
        "smoothedEle": 4.32996754690102,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.57329548366094,
        "lng": 120.71112353474415,
        "ele": 4.75,
        "distanceKm": 19.85852440073756,
        "gradePct": 1.4991624931862546,
        "smoothedEle": 4.825111285848609,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.573329,
        "lng": 120.71152,
        "ele": 5.25,
        "distanceKm": 19.898789451453467,
        "gradePct": 1.3175211288136142,
        "smoothedEle": 5.324827091841757,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.573957,
        "lng": 120.711458,
        "ele": 6.75,
        "distanceKm": 19.9689008561132,
        "gradePct": 1.6775760744458905,
        "smoothedEle": 6.631466007513284,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5744745,
        "lng": 120.71141,
        "ele": 7.25,
        "distanceKm": 20.026648667087088,
        "gradePct": 1.405971571538449,
        "smoothedEle": 7.250000004212541,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.574992,
        "lng": 120.711362,
        "ele": 7.75,
        "distanceKm": 20.08439647637596,
        "gradePct": 0.6574890202510181,
        "smoothedEle": 7.454927863285158,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.575437,
        "lng": 120.711364,
        "ele": 7,
        "distanceKm": 20.13387870039275,
        "gradePct": -0.2696221855910845,
        "smoothedEle": 7.0060348134858135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.575896,
        "lng": 120.711387,
        "ele": 6.25,
        "distanceKm": 20.18497020800575,
        "gradePct": -1.1636482930985201,
        "smoothedEle": 6.286074789153034,
        "gradeBand": "descent"
      },
      {
        "lat": 24.576313019118498,
        "lng": 120.71145213575488,
        "ele": 5.695745698822793,
        "distanceKm": 20.23180614342915,
        "gradePct": -1.233782982668368,
        "smoothedEle": 5.79105366187413,
        "gradeBand": "descent"
      },
      {
        "lat": 24.576728,
        "lng": 120.711532,
        "ele": 5.5,
        "distanceKm": 20.2786513670435,
        "gradePct": -0.765863630591564,
        "smoothedEle": 5.609253606229995,
        "gradeBand": "descent"
      },
      {
        "lat": 24.577203,
        "lng": 120.711653,
        "ele": 5.75,
        "distanceKm": 20.33286775745702,
        "gradePct": -0.025119654912322355,
        "smoothedEle": 5.761814024721399,
        "gradeBand": "descent"
      },
      {
        "lat": 24.577584,
        "lng": 120.711796,
        "ele": 6,
        "distanceKm": 20.37763292809342,
        "gradePct": 0.4607068350596274,
        "smoothedEle": 6.0739128668201285,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.577946333333333,
        "lng": 120.71193933333333,
        "ele": 6.500000000000014,
        "distanceKm": 20.420450366683568,
        "gradePct": 0.7731275167908637,
        "smoothedEle": 6.5000000354747005,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.57830866666667,
        "lng": 120.71208266666667,
        "ele": 6.999999999999986,
        "distanceKm": 20.46326779108384,
        "gradePct": 1.0262396435307255,
        "smoothedEle": 7.000000035479386,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.578671,
        "lng": 120.712226,
        "ele": 7.5,
        "distanceKm": 20.50608520129236,
        "gradePct": 1.053124491690273,
        "smoothedEle": 7.410173130483293,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.579160666666667,
        "lng": 120.71240866666666,
        "ele": 7.749999999999995,
        "distanceKm": 20.563581517322763,
        "gradePct": 0.7469946257975001,
        "smoothedEle": 7.750000028994742,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.579650333333333,
        "lng": 120.71259133333334,
        "ele": 8.000000000000005,
        "distanceKm": 20.62107781015737,
        "gradePct": 0.5012144077841212,
        "smoothedEle": 8.000000028996336,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.58014,
        "lng": 120.712774,
        "ele": 8.25,
        "distanceKm": 20.67857407979491,
        "gradePct": 0.38854790848453535,
        "smoothedEle": 8.20373719461699,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.580569,
        "lng": 120.71293966666666,
        "ele": 8.277777777777779,
        "distanceKm": 20.729132705290443,
        "gradePct": 0.24923535181683398,
        "smoothedEle": 8.277777780418035,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.580998,
        "lng": 120.71310533333333,
        "ele": 8.305555555555555,
        "distanceKm": 20.77969131177613,
        "gradePct": 0.1001822330561687,
        "smoothedEle": 8.30555555819598,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.581427,
        "lng": 120.71327099999999,
        "ele": 8.333333333333334,
        "distanceKm": 20.830249899250763,
        "gradePct": 0.05494174976227584,
        "smoothedEle": 8.333333335973661,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.581856000000002,
        "lng": 120.71343666666667,
        "ele": 8.361111111111112,
        "distanceKm": 20.880808467715042,
        "gradePct": 0.054941770421161995,
        "smoothedEle": 8.36111111375166,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.582285,
        "lng": 120.71360233333333,
        "ele": 8.388888888888888,
        "distanceKm": 20.93136701716739,
        "gradePct": 0.0549417910803821,
        "smoothedEle": 8.388888891529234,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.582714,
        "lng": 120.713768,
        "ele": 8.416666666666666,
        "distanceKm": 20.98192554760925,
        "gradePct": 0.05494181173979228,
        "smoothedEle": 8.416666669307231,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.583143,
        "lng": 120.71393366666666,
        "ele": 8.444444444444445,
        "distanceKm": 21.032484059039046,
        "gradePct": 0.05494183239939964,
        "smoothedEle": 8.444444447084912,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.583572,
        "lng": 120.71409933333334,
        "ele": 8.472222222222221,
        "distanceKm": 21.083042551457474,
        "gradePct": 0.054941853059344514,
        "smoothedEle": 8.472222224862858,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.584001,
        "lng": 120.714265,
        "ele": 8.5,
        "distanceKm": 21.13360102486333,
        "gradePct": 0.15537506522769953,
        "smoothedEle": 8.600433194148609,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.584432154897527,
        "lng": 120.71442581382267,
        "ele": 8.934631953153469,
        "distanceKm": 21.184225882486558,
        "gradePct": 0.45940896437615086,
        "smoothedEle": 8.934631992230171,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.584863309795058,
        "lng": 120.71458662764533,
        "ele": 9.369263906306939,
        "distanceKm": 21.23485072212827,
        "gradePct": 0.7605809043513093,
        "smoothedEle": 9.369263945383778,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.585294464692584,
        "lng": 120.714747441468,
        "ele": 9.803895859460408,
        "distanceKm": 21.28547554378841,
        "gradePct": 0.9230881878804517,
        "smoothedEle": 9.868448959426253,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.585726,
        "lng": 120.714907,
        "ele": 10.5,
        "distanceKm": 21.336099813648836,
        "gradePct": 1.3114351641570883,
        "smoothedEle": 10.693015750820505,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.586155,
        "lng": 120.715095,
        "ele": 12,
        "distanceKm": 21.387450613411218,
        "gradePct": 2.086562434174914,
        "smoothedEle": 11.987181276271047,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.586543489277787,
        "lng": 120.71524653310261,
        "ele": 13.299916321469459,
        "distanceKm": 21.433285545669747,
        "gradePct": 2.4225830940034543,
        "smoothedEle": 13.06976012114383,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.586932,
        "lng": 120.715398,
        "ele": 13.75,
        "distanceKm": 21.47912047213252,
        "gradePct": 1.7986518599272767,
        "smoothedEle": 13.5758932381849,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.58738686149949,
        "lng": 120.71557242951127,
        "ele": 13.52511369150166,
        "distanceKm": 21.532685734120964,
        "gradePct": 0.4578689787112046,
        "smoothedEle": 13.51346210403704,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.587843,
        "lng": 120.715743,
        "ele": 13.25,
        "distanceKm": 21.586258185420238,
        "gradePct": -0.1528332111603628,
        "smoothedEle": 13.414740912747254,
        "gradeBand": "descent"
      },
      {
        "lat": 24.588280666666666,
        "lng": 120.715912,
        "ele": 13.666666666666666,
        "distanceKm": 21.637837397646592,
        "gradePct": 0.1626978853459912,
        "smoothedEle": 13.666666707891528,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.588718333333333,
        "lng": 120.716081,
        "ele": 14.083333333333334,
        "distanceKm": 21.689416590085013,
        "gradePct": 0.653166022123553,
        "smoothedEle": 14.083333374558741,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.589156,
        "lng": 120.71625,
        "ele": 14.5,
        "distanceKm": 21.740995762735235,
        "gradePct": 0.5261296128581114,
        "smoothedEle": 14.218310203216367,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.589593,
        "lng": 120.716427,
        "ele": 13.75,
        "distanceKm": 21.792778943231696,
        "gradePct": -0.39295667520928895,
        "smoothedEle": 13.69917559512941,
        "gradeBand": "descent"
      },
      {
        "lat": 24.589907,
        "lng": 120.716581,
        "ele": 13,
        "distanceKm": 21.831008949095995,
        "gradePct": -0.8258215468102221,
        "smoothedEle": 13.366354300925856,
        "gradeBand": "descent"
      },
      {
        "lat": 24.59031226839657,
        "lng": 120.71687842722568,
        "ele": 13.587986719543215,
        "distanceKm": 21.88518586553328,
        "gradePct": -0.4048830057174828,
        "smoothedEle": 13.370414399183932,
        "gradeBand": "descent"
      },
      {
        "lat": 24.590738178931048,
        "lng": 120.71714128481712,
        "ele": 13.225324479695484,
        "distanceKm": 21.939492937878562,
        "gradePct": -0.14166570413425436,
        "smoothedEle": 13.225324399460758,
        "gradeBand": "descent"
      },
      {
        "lat": 24.591164089465522,
        "lng": 120.71740414240857,
        "ele": 12.86266223984773,
        "distanceKm": 21.993799965976212,
        "gradePct": -0.48473829724671824,
        "smoothedEle": 12.86266215961062,
        "gradeBand": "descent"
      },
      {
        "lat": 24.59159,
        "lng": 120.717667,
        "ele": 12.5,
        "distanceKm": 22.04810694982491,
        "gradePct": -0.4888546211425455,
        "smoothedEle": 12.678945421416547,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5920215,
        "lng": 120.717954,
        "ele": 12.937500000000014,
        "distanceKm": 22.10418020079524,
        "gradePct": 0.10995356393847742,
        "smoothedEle": 12.937500113226246,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.592453,
        "lng": 120.718241,
        "ele": 13.375,
        "distanceKm": 22.160253400005008,
        "gradePct": 0.6400472082315962,
        "smoothedEle": 13.375000113226347,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5928845,
        "lng": 120.718528,
        "ele": 13.812499999999986,
        "distanceKm": 22.216326547454162,
        "gradePct": 0.7802305426115317,
        "smoothedEle": 13.812500113228639,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.593316,
        "lng": 120.718815,
        "ele": 14.25,
        "distanceKm": 22.272399643141647,
        "gradePct": 0.7049109305839536,
        "smoothedEle": 14.174679780969667,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5936965,
        "lng": 120.71908133333334,
        "ele": 14.333333333333336,
        "distanceKm": 22.322551921173712,
        "gradePct": 0.48062315624305035,
        "smoothedEle": 14.333333351645079,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.594077000000002,
        "lng": 120.71934766666666,
        "ele": 14.416666666666666,
        "distanceKm": 22.372704155257587,
        "gradePct": 0.24102359912254212,
        "smoothedEle": 14.416666684978917,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5944575,
        "lng": 120.71961399999999,
        "ele": 14.499999999999996,
        "distanceKm": 22.422856345392063,
        "gradePct": 0.16616083307195892,
        "smoothedEle": 14.500000018312013,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.594838,
        "lng": 120.71988033333334,
        "ele": 14.583333333333334,
        "distanceKm": 22.4730084915777,
        "gradePct": 0.16616097868142296,
        "smoothedEle": 14.583333351646079,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5952185,
        "lng": 120.72014666666666,
        "ele": 14.66666666666667,
        "distanceKm": 22.52316059381275,
        "gradePct": 0.1661611242933135,
        "smoothedEle": 14.6666666849796,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.595599,
        "lng": 120.720413,
        "ele": 14.75,
        "distanceKm": 22.57331265209677,
        "gradePct": 0.3469835537144203,
        "smoothedEle": 14.93082230211942,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.595943,
        "lng": 120.72067,
        "ele": 15.5,
        "distanceKm": 22.619554711340925,
        "gradePct": 0.7646770186669565,
        "smoothedEle": 15.425352126173344,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.596329,
        "lng": 120.721008,
        "ele": 16.06250000000001,
        "distanceKm": 22.67441892324927,
        "gradePct": 1.119847006299903,
        "smoothedEle": 16.062500184624746,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.596715,
        "lng": 120.721346,
        "ele": 16.625000000000018,
        "distanceKm": 22.72928306951326,
        "gradePct": 1.0866708679342616,
        "smoothedEle": 16.625000184626245,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.597101,
        "lng": 120.721684,
        "ele": 17.18749999999999,
        "distanceKm": 22.784147150132366,
        "gradePct": 1.0252604069466285,
        "smoothedEle": 17.18750018462775,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.597487,
        "lng": 120.722022,
        "ele": 17.75,
        "distanceKm": 22.83901116510605,
        "gradePct": 0.8316310156798277,
        "smoothedEle": 17.55636956663264,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.597787500000003,
        "lng": 120.72234399999999,
        "ele": 17.5,
        "distanceKm": 22.885662784721365,
        "gradePct": 0.30230962175891846,
        "smoothedEle": 17.499999931816923,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.598088,
        "lng": 120.722666,
        "ele": 17.25,
        "distanceKm": 22.932314349790214,
        "gradePct": 0.43791540077958485,
        "smoothedEle": 17.949260006549654,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.598389,
        "lng": 120.722945,
        "ele": 19.5,
        "distanceKm": 22.97608550864482,
        "gradePct": 1.3558532834913228,
        "smoothedEle": 18.867425537114364,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.598796,
        "lng": 120.723159,
        "ele": 19.5,
        "distanceKm": 23.026247909920748,
        "gradePct": 1.60916052500369,
        "smoothedEle": 19.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.599101,
        "lng": 120.723467,
        "ele": 19.5,
        "distanceKm": 23.07229010756201,
        "gradePct": 0.6739639996011608,
        "smoothedEle": 19.4617753217828,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.599322,
        "lng": 120.7237645,
        "ele": 19.375,
        "distanceKm": 23.11113062241449,
        "gradePct": 0.0656369809211474,
        "smoothedEle": 19.374999974292244,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.599543,
        "lng": 120.724062,
        "ele": 19.25,
        "distanceKm": 23.149971096134557,
        "gradePct": -0.3511797930569237,
        "smoothedEle": 19.129124988083735,
        "gradeBand": "descent"
      },
      {
        "lat": 24.599767,
        "lng": 120.724324,
        "ele": 18.75,
        "distanceKm": 23.18633120979807,
        "gradePct": -0.6803873612875836,
        "smoothedEle": 18.750018100175073,
        "gradeBand": "descent"
      },
      {
        "lat": 24.600089,
        "lng": 120.72477,
        "ele": 18,
        "distanceKm": 23.24390944562043,
        "gradePct": -0.9273405229893197,
        "smoothedEle": 18.240157020674012,
        "gradeBand": "descent"
      },
      {
        "lat": 24.600432666666666,
        "lng": 120.72510933333334,
        "ele": 18.333333333333325,
        "distanceKm": 23.29526420261571,
        "gradePct": -0.3375821104984121,
        "smoothedEle": 18.333333438232955,
        "gradeBand": "descent"
      },
      {
        "lat": 24.600776333333336,
        "lng": 120.72544866666667,
        "ele": 18.666666666666675,
        "distanceKm": 23.346618896671202,
        "gradePct": 0.42159381014754627,
        "smoothedEle": 18.666666771568497,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.60112,
        "lng": 120.725788,
        "ele": 19,
        "distanceKm": 23.3979735277856,
        "gradePct": 0.3661330935270276,
        "smoothedEle": 18.717052234616926,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.601589,
        "lng": 120.726215,
        "ele": 17.75,
        "distanceKm": 23.465673983693804,
        "gradePct": -0.6042961742322838,
        "smoothedEle": 18.081066075469874,
        "gradeBand": "descent"
      },
      {
        "lat": 24.60189653214448,
        "lng": 120.72648064731456,
        "ele": 18.207177835477868,
        "distanceKm": 23.50915596603394,
        "gradePct": -0.28078342457627015,
        "smoothedEle": 18.33121965112355,
        "gradeBand": "descent"
      },
      {
        "lat": 24.60220776607224,
        "lng": 120.72674132365728,
        "ele": 19.103588917738897,
        "distanceKm": 23.55265605309151,
        "gradePct": 0.9002310272124112,
        "smoothedEle": 19.103589095738037,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.602519,
        "lng": 120.727002,
        "ele": 20,
        "distanceKm": 23.596156100435348,
        "gradePct": 1.5272647585668397,
        "smoothedEle": 19.78369566530734,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.602848769293715,
        "lng": 120.72736759301429,
        "ele": 20.15408999378915,
        "distanceKm": 23.64822101660511,
        "gradePct": 1.0554164538720654,
        "smoothedEle": 20.08025888725714,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.603189,
        "lng": 120.727722,
        "ele": 20,
        "distanceKm": 23.700327546333344,
        "gradePct": 0.11667422225773029,
        "smoothedEle": 19.92413056033107,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.603546,
        "lng": 120.728097,
        "ele": 19.5,
        "distanceKm": 23.75521996139234,
        "gradePct": -0.5962629821646375,
        "smoothedEle": 19.46302476106166,
        "gradeBand": "descent"
      },
      {
        "lat": 24.603771,
        "lng": 120.728407,
        "ele": 19,
        "distanceKm": 23.795322280875993,
        "gradePct": -0.7151283755701567,
        "smoothedEle": 19.223999608802632,
        "gradeBand": "descent"
      },
      {
        "lat": 24.603979,
        "lng": 120.728737,
        "ele": 19.25,
        "distanceKm": 23.835917954866588,
        "gradePct": -0.4106267617592975,
        "smoothedEle": 19.214538199127688,
        "gradeBand": "descent"
      },
      {
        "lat": 24.604262,
        "lng": 120.729344,
        "ele": 19.5,
        "distanceKm": 23.904883069555034,
        "gradePct": 0.1940574256994844,
        "smoothedEle": 19.415828754254107,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.604632,
        "lng": 120.729825,
        "ele": 19.25,
        "distanceKm": 23.96858095826988,
        "gradePct": -0.4243369993368067,
        "smoothedEle": 18.88553569052356,
        "gradeBand": "descent"
      },
      {
        "lat": 24.604916,
        "lng": 120.730248,
        "ele": 17.5,
        "distanceKm": 24.021741878431836,
        "gradePct": -1.259660713020615,
        "smoothedEle": 18.015816302887036,
        "gradeBand": "descent"
      },
      {
        "lat": 24.60499,
        "lng": 120.730812,
        "ele": 18,
        "distanceKm": 24.07935213671017,
        "gradePct": -0.8152922011810544,
        "smoothedEle": 17.894025645695823,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605191,
        "lng": 120.731211,
        "ele": 18,
        "distanceKm": 24.1254683975369,
        "gradePct": -0.007938275181476826,
        "smoothedEle": 18,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605336,
        "lng": 120.731635,
        "ele": 18,
        "distanceKm": 24.1712660818965,
        "gradePct": 0.25402366171914176,
        "smoothedEle": 18.165143588178008,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.605426,
        "lng": 120.73229,
        "ele": 19,
        "distanceKm": 24.2382373642609,
        "gradePct": 0.5356616004070632,
        "smoothedEle": 18.58170569655764,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.60558,
        "lng": 120.732923,
        "ele": 17.5,
        "distanceKm": 24.304483935558988,
        "gradePct": -0.6847983649051992,
        "smoothedEle": 17.686960636162766,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605655,
        "lng": 120.733381,
        "ele": 17.25,
        "distanceKm": 24.35153187227772,
        "gradePct": -1.0859562056201415,
        "smoothedEle": 17.316190079101585,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605716,
        "lng": 120.733883,
        "ele": 17.25,
        "distanceKm": 24.40273432372285,
        "gradePct": -0.4042386625091594,
        "smoothedEle": 17.306352729439435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605749,
        "lng": 120.734425,
        "ele": 17.5,
        "distanceKm": 24.4576521401713,
        "gradePct": 0.3093956112561634,
        "smoothedEle": 17.62440982448423,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.605732,
        "lng": 120.734937,
        "ele": 18.25,
        "distanceKm": 24.509448792458326,
        "gradePct": 0.6697436859321269,
        "smoothedEle": 18.01498332965336,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.6057062,
        "lng": 120.73538860000001,
        "ele": 18.049999999999994,
        "distanceKm": 24.555194676035352,
        "gradePct": 0.4398226135614793,
        "smoothedEle": 18.05000000939497,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.6056804,
        "lng": 120.7358402,
        "ele": 17.85,
        "distanceKm": 24.60094056900735,
        "gradePct": -0.10082692193083388,
        "smoothedEle": 17.85000000939786,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605654599999998,
        "lng": 120.7362918,
        "ele": 17.65,
        "distanceKm": 24.6466864713772,
        "gradePct": -0.3934873030228496,
        "smoothedEle": 17.650000009394933,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605628799999998,
        "lng": 120.7367434,
        "ele": 17.450000000000006,
        "distanceKm": 24.69243238314198,
        "gradePct": -0.43719759441776856,
        "smoothedEle": 17.45000000939782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605603,
        "lng": 120.737195,
        "ele": 17.25,
        "distanceKm": 24.738178304304572,
        "gradePct": -0.4768410651380182,
        "smoothedEle": 17.210356448872588,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605641,
        "lng": 120.737364,
        "ele": 17,
        "distanceKm": 24.75577861036595,
        "gradePct": -0.39109279967617083,
        "smoothedEle": 17.219156601903272,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605655,
        "lng": 120.737498,
        "ele": 17,
        "distanceKm": 24.769414895234625,
        "gradePct": -0.3164380524909189,
        "smoothedEle": 17.23419384736031,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605556,
        "lng": 120.737815,
        "ele": 17.5,
        "distanceKm": 24.803300918391134,
        "gradePct": -0.34165459006230364,
        "smoothedEle": 17.051409753409285,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605517770597633,
        "lng": 120.73830109960018,
        "ele": 16.3818236376601,
        "distanceKm": 24.852628177663696,
        "gradePct": -1.0549849803984115,
        "smoothedEle": 16.162596405153717,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605494214765475,
        "lng": 120.73878892444982,
        "ele": 14.396012205950798,
        "distanceKm": 24.902015865843552,
        "gradePct": -2.6623291382433485,
        "smoothedEle": 14.396012298016512,
        "gradeBand": "descent"
      },
      {
        "lat": 24.60547065893332,
        "lng": 120.73927674929946,
        "ele": 12.410200774241641,
        "distanceKm": 24.95140356329576,
        "gradePct": -3.7581577098313765,
        "smoothedEle": 12.426504660728451,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605438,
        "lng": 120.739761,
        "ele": 10.5,
        "distanceKm": 25.000494929502665,
        "gradePct": -3.9644198779080715,
        "smoothedEle": 10.48599589730692,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605429192070115,
        "lng": 120.74022539891254,
        "ele": 8.613749441447874,
        "distanceKm": 25.047455034154634,
        "gradePct": -3.8922587375764603,
        "smoothedEle": 8.691707370044233,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605391,
        "lng": 120.740695,
        "ele": 7,
        "distanceKm": 25.095120424866884,
        "gradePct": -3.470977531563415,
        "smoothedEle": 7.227464548251963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605376,
        "lng": 120.74117,
        "ele": 6.25,
        "distanceKm": 25.143171042392083,
        "gradePct": -2.6531599957073575,
        "smoothedEle": 6.202233493169046,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605389,
        "lng": 120.741519,
        "ele": 5.5,
        "distanceKm": 25.178483924762357,
        "gradePct": -1.995947884002696,
        "smoothedEle": 5.742576691111488,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605454499999997,
        "lng": 120.74189249999999,
        "ele": 5.5,
        "distanceKm": 25.216940097179126,
        "gradePct": -1.2619095394217206,
        "smoothedEle": 5.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.60552,
        "lng": 120.742266,
        "ele": 5.5,
        "distanceKm": 25.255396250186756,
        "gradePct": -0.5431017672321591,
        "smoothedEle": 5.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605645,
        "lng": 120.742631,
        "ele": 5.5,
        "distanceKm": 25.294827984355596,
        "gradePct": -0.04837734603050523,
        "smoothedEle": 5.591103076100047,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605903,
        "lng": 120.743192,
        "ele": 6,
        "distanceKm": 25.358386753915582,
        "gradePct": 0.5818029075174775,
        "smoothedEle": 6.088712167141169,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.606268,
        "lng": 120.743771,
        "ele": 7.25,
        "distanceKm": 25.429616314996988,
        "gradePct": 1.1324128194948233,
        "smoothedEle": 6.995877832572953,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.606562333333333,
        "lng": 120.74421333333333,
        "ele": 6.916666666666659,
        "distanceKm": 25.48503216048551,
        "gradePct": 0.48860370620729937,
        "smoothedEle": 6.916666525166792,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.60685666666667,
        "lng": 120.74465566666666,
        "ele": 6.583333333333341,
        "distanceKm": 25.540447921074108,
        "gradePct": -0.3970619629746179,
        "smoothedEle": 6.583333191835075,
        "gradeBand": "descent"
      },
      {
        "lat": 24.607151,
        "lng": 120.745098,
        "ele": 6.25,
        "distanceKm": 25.59586359676375,
        "gradePct": -0.5959361285785234,
        "smoothedEle": 6.255577834915435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.607414673971487,
        "lng": 120.74548575584042,
        "ele": 5.9807251108188915,
        "distanceKm": 25.644815857052482,
        "gradePct": -0.5767740645346693,
        "smoothedEle": 5.980725021737714,
        "gradeBand": "descent"
      },
      {
        "lat": 24.607678347942972,
        "lng": 120.74587351168084,
        "ele": 5.711450221637803,
        "distanceKm": 25.69376805117747,
        "gradePct": -0.5565217818872191,
        "smoothedEle": 5.711450132555793,
        "gradeBand": "descent"
      },
      {
        "lat": 24.607942021914457,
        "lng": 120.74626126752126,
        "ele": 5.442175332456695,
        "distanceKm": 25.742720179138104,
        "gradePct": -0.5503164050095537,
        "smoothedEle": 5.442175243373873,
        "gradeBand": "descent"
      },
      {
        "lat": 24.608205695885943,
        "lng": 120.74664902336168,
        "ele": 5.172900443275607,
        "distanceKm": 25.791672240933764,
        "gradePct": -0.5255938539833181,
        "smoothedEle": 5.19738485417993,
        "gradeBand": "descent"
      },
      {
        "lat": 24.608449,
        "lng": 120.747051,
        "ele": 5,
        "distanceKm": 25.84049223494658,
        "gradePct": -0.4101854457382016,
        "smoothedEle": 5.044245228610162,
        "gradeBand": "descent"
      },
      {
        "lat": 24.608389,
        "lng": 120.7471,
        "ele": 5,
        "distanceKm": 25.848801911316343,
        "gradePct": -0.37029734796239483,
        "smoothedEle": 5.041465497398521,
        "gradeBand": "descent"
      },
      {
        "lat": 24.608188,
        "lng": 120.746983,
        "ele": 5,
        "distanceKm": 25.874089036322278,
        "gradePct": -0.18173465734681934,
        "smoothedEle": 5.1035770244729655,
        "gradeBand": "descent"
      },
      {
        "lat": 24.608098,
        "lng": 120.746974,
        "ele": 5,
        "distanceKm": 25.88413786979051,
        "gradePct": -0.08124014782595763,
        "smoothedEle": 5.153821191814128,
        "gradeBand": "descent"
      },
      {
        "lat": 24.607931,
        "lng": 120.747049,
        "ele": 5.25,
        "distanceKm": 25.90419576398902,
        "gradePct": 0.24193861963011468,
        "smoothedEle": 5.400039412632317,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.607815,
        "lng": 120.747155,
        "ele": 5.5,
        "distanceKm": 25.920965127942193,
        "gradePct": 0.8814688658111781,
        "smoothedEle": 5.986967150993378,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.608197,
        "lng": 120.747527,
        "ele": 8.5,
        "distanceKm": 25.977697816714137,
        "gradePct": 3.037843447652054,
        "smoothedEle": 8.15946437408435,
        "gradeBand": "hard"
      },
      {
        "lat": 24.608421,
        "lng": 120.74787433333334,
        "ele": 9.583333333333334,
        "distanceKm": 26.02074876271318,
        "gradePct": 3.603939243149061,
        "smoothedEle": 9.583333611126964,
        "gradeBand": "hard"
      },
      {
        "lat": 24.608645,
        "lng": 120.74822166666667,
        "ele": 10.666666666666666,
        "distanceKm": 26.063799657427246,
        "gradePct": 3.039412714295343,
        "smoothedEle": 10.666666944449789,
        "gradeBand": "hard"
      },
      {
        "lat": 24.608869,
        "lng": 120.748569,
        "ele": 11.75,
        "distanceKm": 26.106850500858275,
        "gradePct": 2.3719699340457137,
        "smoothedEle": 11.495631706509688,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.609168,
        "lng": 120.7490235,
        "ele": 12.000000000000007,
        "distanceKm": 26.16356545718497,
        "gradePct": 1.3392265850347003,
        "smoothedEle": 12.000000111221826,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.609467,
        "lng": 120.749478,
        "ele": 12.25,
        "distanceKm": 26.2202803245342,
        "gradePct": 0.48749161805008806,
        "smoothedEle": 12.102555290688322,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.609774168960442,
        "lng": 120.74998064011709,
        "ele": 11.768543949150885,
        "distanceKm": 26.28150698547923,
        "gradePct": -0.27108929679878424,
        "smoothedEle": 11.761353747645305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.610079,
        "lng": 120.750485,
        "ele": 11.25,
        "distanceKm": 26.342733610466986,
        "gradePct": -0.743628231394677,
        "smoothedEle": 11.233800265044144,
        "gradeBand": "descent"
      },
      {
        "lat": 24.610315,
        "lng": 120.750944,
        "ele": 10.75,
        "distanceKm": 26.396042318483126,
        "gradePct": -0.8929546248711426,
        "smoothedEle": 10.743156786641695,
        "gradeBand": "descent"
      },
      {
        "lat": 24.610504,
        "lng": 120.751399,
        "ele": 10.25,
        "distanceKm": 26.44661374115594,
        "gradePct": -0.8931815776480929,
        "smoothedEle": 10.304906682946276,
        "gradeBand": "descent"
      },
      {
        "lat": 24.610661,
        "lng": 120.75181,
        "ele": 10,
        "distanceKm": 26.49168193285858,
        "gradePct": -0.7911706859115485,
        "smoothedEle": 9.992118282687281,
        "gradeBand": "descent"
      },
      {
        "lat": 24.610781,
        "lng": 120.75217,
        "ele": 9.75,
        "distanceKm": 26.530444750711048,
        "gradePct": -0.7270042467704115,
        "smoothedEle": 9.718022317417278,
        "gradeBand": "descent"
      },
      {
        "lat": 24.610905499999998,
        "lng": 120.7525635,
        "ele": 9.375000000000016,
        "distanceKm": 26.57256519856858,
        "gradePct": -0.7497949149361585,
        "smoothedEle": 9.374999929886078,
        "gradeBand": "descent"
      },
      {
        "lat": 24.61103,
        "lng": 120.752957,
        "ele": 9,
        "distanceKm": 26.61468560903202,
        "gradePct": -0.8670574275352881,
        "smoothedEle": 8.96239943952645,
        "gradeBand": "descent"
      },
      {
        "lat": 24.611221,
        "lng": 120.753523,
        "ele": 8.25,
        "distanceKm": 26.67571899813746,
        "gradePct": -0.8877479269355282,
        "smoothedEle": 8.456358209791885,
        "gradeBand": "descent"
      },
      {
        "lat": 24.6113435,
        "lng": 120.7540175,
        "ele": 8.499999999999991,
        "distanceKm": 26.72753226298763,
        "gradePct": -0.3558849518862746,
        "smoothedEle": 8.500000059046993,
        "gradeBand": "descent"
      },
      {
        "lat": 24.611466,
        "lng": 120.754512,
        "ele": 8.75,
        "distanceKm": 26.7793454806002,
        "gradePct": 0.29157916991551625,
        "smoothedEle": 8.75099193342879,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.611602,
        "lng": 120.754994,
        "ele": 9,
        "distanceKm": 26.83036515146974,
        "gradePct": 0.39510373445722435,
        "smoothedEle": 8.908826778155657,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.6116715,
        "lng": 120.75550349999999,
        "ele": 8.875000000000004,
        "distanceKm": 26.882448654779708,
        "gradePct": 0.1144080454635416,
        "smoothedEle": 8.874999982311316,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.611741,
        "lng": 120.756013,
        "ele": 8.75,
        "distanceKm": 26.93453212978778,
        "gradePct": -0.050834580956015056,
        "smoothedEle": 8.855285859954751,
        "gradeBand": "descent"
      },
      {
        "lat": 24.611777,
        "lng": 120.756404,
        "ele": 9,
        "distanceKm": 26.97426170431995,
        "gradePct": 0.278289753960054,
        "smoothedEle": 9.158606934312793,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.61177,
        "lng": 120.756776,
        "ele": 9.75,
        "distanceKm": 27.01187638001393,
        "gradePct": 0.9702383108962391,
        "smoothedEle": 9.834099601408434,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.611667,
        "lng": 120.757441,
        "ele": 11.75,
        "distanceKm": 27.08007192325833,
        "gradePct": 2.2435294951522913,
        "smoothedEle": 11.50647762647624,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.611589,
        "lng": 120.75813,
        "ele": 12.25,
        "distanceKm": 27.15026304564543,
        "gradePct": 1.567704617163648,
        "smoothedEle": 12.343170956097387,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.611531756964336,
        "lng": 120.75851887961133,
        "ele": 12.807352055224063,
        "distanceKm": 27.1900880992869,
        "gradePct": 1.1469340330269302,
        "smoothedEle": 12.772806639757187,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.611481,
        "lng": 120.758909,
        "ele": 13.25,
        "distanceKm": 27.229928445894565,
        "gradePct": 0.902017758466625,
        "smoothedEle": 13.00279589630652,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.611522,
        "lng": 120.759445,
        "ele": 12.75,
        "distanceKm": 27.284305898282273,
        "gradePct": 0.15362855000400047,
        "smoothedEle": 12.86405636903074,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.61143,
        "lng": 120.7599,
        "ele": 12.75,
        "distanceKm": 27.331427207004403,
        "gradePct": -0.4771865803499192,
        "smoothedEle": 12.521785352185812,
        "gradeBand": "descent"
      },
      {
        "lat": 24.611333,
        "lng": 120.760427,
        "ele": 11.75,
        "distanceKm": 27.38578427744157,
        "gradePct": -1.1942886329696742,
        "smoothedEle": 11.659029359902652,
        "gradeBand": "descent"
      },
      {
        "lat": 24.611336,
        "lng": 120.760911,
        "ele": 10.5,
        "distanceKm": 27.434714631375734,
        "gradePct": -1.6978009590989052,
        "smoothedEle": 10.771806358974086,
        "gradeBand": "descent"
      },
      {
        "lat": 24.61132,
        "lng": 120.761525,
        "ele": 10.25,
        "distanceKm": 27.49681148822584,
        "gradePct": -1.0202752796493806,
        "smoothedEle": 10.438804677535753,
        "gradeBand": "descent"
      },
      {
        "lat": 24.611263,
        "lng": 120.76195,
        "ele": 10.75,
        "distanceKm": 27.540241188786485,
        "gradePct": 0.05516920899803878,
        "smoothedEle": 10.797338755358766,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.611114999999998,
        "lng": 120.76241350000001,
        "ele": 11.5,
        "distanceKm": 27.589903987731244,
        "gradePct": 1.024152844363074,
        "smoothedEle": 11.49999980384219,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.610967,
        "lng": 120.762877,
        "ele": 12.25,
        "distanceKm": 27.639566838984756,
        "gradePct": 1.4031004007824825,
        "smoothedEle": 12.194872058482925,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.610695,
        "lng": 120.763439,
        "ele": 13,
        "distanceKm": 27.703930474642824,
        "gradePct": 1.3661047470261656,
        "smoothedEle": 13.06236022968924,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.61046681565457,
        "lng": 120.76382656034325,
        "ele": 13.735147532059024,
        "distanceKm": 27.750608770515615,
        "gradePct": 1.3325629562003525,
        "smoothedEle": 13.676257325485885,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.610219,
        "lng": 120.7642,
        "ele": 14.25,
        "distanceKm": 27.797348313225122,
        "gradePct": 1.3548569027406718,
        "smoothedEle": 14.328503262984102,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.609981,
        "lng": 120.764529,
        "ele": 15,
        "distanceKm": 27.839852405923125,
        "gradePct": 1.3991362452365654,
        "smoothedEle": 14.93392951636504,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.60960873733907,
        "lng": 120.76494607785212,
        "ele": 15.731011027251274,
        "distanceKm": 27.89893943384121,
        "gradePct": 1.438606246008029,
        "smoothedEle": 15.789773354568606,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.609215,
        "lng": 120.765339,
        "ele": 16.75,
        "distanceKm": 27.958055478933844,
        "gradePct": 1.5005797854917802,
        "smoothedEle": 16.698171029676182,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.6088785,
        "lng": 120.765666,
        "ele": 17.37500000000002,
        "distanceKm": 28.00798427069673,
        "gradePct": 1.4462403577748304,
        "smoothedEle": 17.374999816004593,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.608542,
        "lng": 120.765993,
        "ele": 18,
        "distanceKm": 28.05791312133815,
        "gradePct": 1.080505669053333,
        "smoothedEle": 17.77648918248481,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.608233,
        "lng": 120.766301,
        "ele": 17.75,
        "distanceKm": 28.104282340722463,
        "gradePct": 0.4251831727368273,
        "smoothedEle": 17.75000006455899,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.607924,
        "lng": 120.766609,
        "ele": 17.5,
        "distanceKm": 28.15065161175397,
        "gradePct": -0.19441765455121365,
        "smoothedEle": 17.52368005997088,
        "gradeBand": "descent"
      },
      {
        "lat": 24.607537,
        "lng": 120.767095,
        "ele": 17.25,
        "distanceKm": 28.21596493076217,
        "gradePct": -0.5801395318393741,
        "smoothedEle": 17.112839928932445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.607318666666668,
        "lng": 120.76747966666666,
        "ele": 16.583333333333314,
        "distanceKm": 28.26180940406998,
        "gradePct": -0.8701607146398249,
        "smoothedEle": 16.58333352524382,
        "gradeBand": "descent"
      },
      {
        "lat": 24.60710033333333,
        "lng": 120.76786433333334,
        "ele": 15.916666666666684,
        "distanceKm": 28.307653934950938,
        "gradePct": -1.248451696839382,
        "smoothedEle": 15.91666685856612,
        "gradeBand": "descent"
      },
      {
        "lat": 24.606882,
        "lng": 120.768249,
        "ele": 15.25,
        "distanceKm": 28.353498523401736,
        "gradePct": -1.3766413945989324,
        "smoothedEle": 15.302683298535054,
        "gradeBand": "descent"
      },
      {
        "lat": 24.606671,
        "lng": 120.768673,
        "ele": 14.75,
        "distanceKm": 28.402364627416816,
        "gradePct": -1.1860470302123653,
        "smoothedEle": 14.807536419167237,
        "gradeBand": "descent"
      },
      {
        "lat": 24.606537,
        "lng": 120.76908,
        "ele": 14.5,
        "distanceKm": 28.446125970780752,
        "gradePct": -0.9081337966813634,
        "smoothedEle": 14.493288006390745,
        "gradeBand": "descent"
      },
      {
        "lat": 24.60643784347614,
        "lng": 120.76957944283592,
        "ele": 14.181234613537908,
        "distanceKm": 28.497808105871353,
        "gradePct": -0.6392113979203378,
        "smoothedEle": 14.214495009001846,
        "gradeBand": "descent"
      },
      {
        "lat": 24.606361,
        "lng": 120.770084,
        "ele": 14,
        "distanceKm": 28.54952823472935,
        "gradePct": -0.6958274048322196,
        "smoothedEle": 13.779107502127255,
        "gradeBand": "descent"
      },
      {
        "lat": 24.606253,
        "lng": 120.770713,
        "ele": 12.5,
        "distanceKm": 28.61424257915426,
        "gradePct": -1.4563416385383945,
        "smoothedEle": 12.619805603212358,
        "gradeBand": "descent"
      },
      {
        "lat": 24.606087,
        "lng": 120.771292,
        "ele": 11.75,
        "distanceKm": 28.675619428860703,
        "gradePct": -1.4518210696759393,
        "smoothedEle": 11.859885098632198,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605926074568227,
        "lng": 120.77164605390313,
        "ele": 11.633459982268318,
        "distanceKm": 28.71563708863295,
        "gradePct": -0.8242156235066201,
        "smoothedEle": 11.778324245935524,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605756,
        "lng": 120.771995,
        "ele": 12,
        "distanceKm": 28.755664074292664,
        "gradePct": 0.13321129695356848,
        "smoothedEle": 12.240168103973396,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.605587,
        "lng": 120.77231900000001,
        "ele": 13.125,
        "distanceKm": 28.793427513817655,
        "gradePct": 1.3014097262906834,
        "smoothedEle": 13.12499978412716,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.605418,
        "lng": 120.772643,
        "ele": 14.25,
        "distanceKm": 28.831190991720042,
        "gradePct": 2.3710080794140644,
        "smoothedEle": 14.328798115513269,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.605172,
        "lng": 120.773192,
        "ele": 16.5,
        "distanceKm": 28.893068453736724,
        "gradePct": 2.89257570839265,
        "smoothedEle": 16.00916238876968,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.60502,
        "lng": 120.773662,
        "ele": 16.25,
        "distanceKm": 28.943501206602345,
        "gradePct": 1.4901316391714765,
        "smoothedEle": 16.153229911965816,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.604926,
        "lng": 120.774008,
        "ele": 15.75,
        "distanceKm": 28.98000954782149,
        "gradePct": 0.3288744056151518,
        "smoothedEle": 15.983404942453591,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.604837,
        "lng": 120.774394,
        "ele": 16,
        "distanceKm": 29.02026891142032,
        "gradePct": 0.030110260804888895,
        "smoothedEle": 16.116974189657427,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.604707,
        "lng": 120.774856,
        "ele": 16.75,
        "distanceKm": 29.069162248711283,
        "gradePct": 0.27739337590653396,
        "smoothedEle": 16.3112564377697,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.60456761589556,
        "lng": 120.77521945619749,
        "ele": 15.927999752514934,
        "distanceKm": 29.109042175067167,
        "gradePct": -0.033149997083497834,
        "smoothedEle": 16.046577038391632,
        "gradeBand": "descent"
      },
      {
        "lat": 24.604387,
        "lng": 120.775561,
        "ele": 15.5,
        "distanceKm": 29.14898779866177,
        "gradePct": -0.8587248194139151,
        "smoothedEle": 15.372366554418265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.604093,
        "lng": 120.776047,
        "ele": 14.25,
        "distanceKm": 29.208003840777536,
        "gradePct": -2.1089785263811955,
        "smoothedEle": 13.944489841088622,
        "gradeBand": "descent"
      },
      {
        "lat": 24.603848,
        "lng": 120.7764275,
        "ele": 12.125000000000082,
        "distanceKm": 29.255141732948093,
        "gradePct": -3.0984731740199565,
        "smoothedEle": 12.125000653136727,
        "gradeBand": "descent"
      },
      {
        "lat": 24.603603,
        "lng": 120.776808,
        "ele": 10,
        "distanceKm": 29.302279686590342,
        "gradePct": -3.4499292911310855,
        "smoothedEle": 10.633054867339391,
        "gradeBand": "descent"
      },
      {
        "lat": 24.603405,
        "lng": 120.777172,
        "ele": 10.25,
        "distanceKm": 29.345163186759738,
        "gradePct": -1.5216384512659642,
        "smoothedEle": 10.988527003799126,
        "gradeBand": "descent"
      },
      {
        "lat": 24.603093,
        "lng": 120.777704,
        "ele": 14.75,
        "distanceKm": 29.409166625489192,
        "gradePct": 3.2916500758314724,
        "smoothedEle": 13.981792514716396,
        "gradeBand": "hard"
      },
      {
        "lat": 24.602860064546377,
        "lng": 120.77809859011269,
        "ele": 14.909108916409904,
        "distanceKm": 29.45673066621693,
        "gradePct": 3.3796025345278675,
        "smoothedEle": 14.909108866856801,
        "gradeBand": "hard"
      },
      {
        "lat": 24.602627129092753,
        "lng": 120.7784931802254,
        "ele": 15.068217832819807,
        "distanceKm": 29.504294769232953,
        "gradePct": 1.3142686406498987,
        "smoothedEle": 15.068217783268858,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.602394193639125,
        "lng": 120.77888777033809,
        "ele": 15.227326749229698,
        "distanceKm": 29.55185893453454,
        "gradePct": 0.30686986010568434,
        "smoothedEle": 15.120998645724598,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.602160775383016,
        "lng": 120.7792820136007,
        "ele": 14.980880891154143,
        "distanceKm": 29.599423028481922,
        "gradePct": -0.13250428538772308,
        "smoothedEle": 14.919416808933251,
        "gradeBand": "descent"
      },
      {
        "lat": 24.601927,
        "lng": 120.779676,
        "ele": 14.5,
        "distanceKm": 29.6469871160364,
        "gradePct": -0.6073149940774416,
        "smoothedEle": 14.50827750648662,
        "gradeBand": "descent"
      },
      {
        "lat": 24.602268552474435,
        "lng": 120.77995197314802,
        "ele": 14.05441248796162,
        "distanceKm": 29.694113266632083,
        "gradePct": -0.909075419534385,
        "smoothedEle": 14.03284474135589,
        "gradeBand": "descent"
      },
      {
        "lat": 24.602608776237215,
        "lng": 120.78022998657401,
        "ele": 13.52720624398081,
        "distanceKm": 29.741243110697198,
        "gradePct": -1.0307220007910582,
        "smoothedEle": 13.527206123836907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.602949,
        "lng": 120.780508,
        "ele": 13,
        "distanceKm": 29.788372909184737,
        "gradePct": -1.2029716676865518,
        "smoothedEle": 12.887784742234102,
        "gradeBand": "descent"
      },
      {
        "lat": 24.603313,
        "lng": 120.780793,
        "ele": 12,
        "distanceKm": 29.83805635727366,
        "gradePct": -1.561395862479789,
        "smoothedEle": 11.999999756939246,
        "gradeBand": "descent"
      },
      {
        "lat": 24.603676999999998,
        "lng": 120.781078,
        "ele": 11,
        "distanceKm": 29.887739756750435,
        "gradePct": -1.8963751175867443,
        "smoothedEle": 10.999999756947915,
        "gradeBand": "descent"
      },
      {
        "lat": 24.604041,
        "lng": 120.781363,
        "ele": 10,
        "distanceKm": 29.93742310761679,
        "gradePct": -1.893625291570474,
        "smoothedEle": 10.117689894529532,
        "gradeBand": "descent"
      },
      {
        "lat": 24.604508,
        "lng": 120.781738,
        "ele": 9.25,
        "distanceKm": 30.001718213979807,
        "gradePct": -1.084250688128743,
        "smoothedEle": 9.667510363904853,
        "gradeBand": "descent"
      },
      {
        "lat": 24.605054,
        "lng": 120.78217,
        "ele": 11.5,
        "distanceKm": 30.076507812845037,
        "gradePct": 1.7891615032153818,
        "smoothedEle": 11.633189291100127,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.605426666666666,
        "lng": 120.78248666666666,
        "ele": 13.25,
        "distanceKm": 30.12887280668889,
        "gradePct": 2.8687918315425467,
        "smoothedEle": 13.250000510115452,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.605799333333334,
        "lng": 120.78280333333333,
        "ele": 15,
        "distanceKm": 30.18123774223383,
        "gradePct": 3.220770852379918,
        "smoothedEle": 15.000000510137088,
        "gradeBand": "hard"
      },
      {
        "lat": 24.606172,
        "lng": 120.78312,
        "ele": 16.75,
        "distanceKm": 30.233602619477384,
        "gradePct": 3.1919994710431796,
        "smoothedEle": 16.60006705970712,
        "gradeBand": "hard"
      },
      {
        "lat": 24.606537,
        "lng": 120.783347,
        "ele": 17.75,
        "distanceKm": 30.280227742712185,
        "gradePct": 1.607873334275077,
        "smoothedEle": 16.57412035757012,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.607035,
        "lng": 120.783565,
        "ele": 13.25,
        "distanceKm": 30.339827508996457,
        "gradePct": -2.6307009371937085,
        "smoothedEle": 13.965901995386593,
        "gradeBand": "descent"
      },
      {
        "lat": 24.60740686850925,
        "lng": 120.78369803393733,
        "ele": 12.566663883305589,
        "distanceKm": 30.383309710946666,
        "gradePct": -3.839488841799309,
        "smoothedEle": 12.59975772947948,
        "gradeBand": "descent"
      },
      {
        "lat": 24.607782,
        "lng": 120.783821,
        "ele": 12,
        "distanceKm": 30.42683552165829,
        "gradePct": -2.536368473168268,
        "smoothedEle": 11.998091790971236,
        "gradeBand": "descent"
      },
      {
        "lat": 24.6081882,
        "lng": 120.7839086,
        "ele": 11.40000000000001,
        "distanceKm": 30.472862979634225,
        "gradePct": -1.5279780624342754,
        "smoothedEle": 11.399999983401448,
        "gradeBand": "descent"
      },
      {
        "lat": 24.6085944,
        "lng": 120.7839962,
        "ele": 10.800000000000018,
        "distanceKm": 30.5188904320773,
        "gradePct": -1.307918361083309,
        "smoothedEle": 10.79999998340006,
        "gradeBand": "descent"
      },
      {
        "lat": 24.609000599999998,
        "lng": 120.7840838,
        "ele": 10.199999999999982,
        "distanceKm": 30.564917878987053,
        "gradePct": -1.3032405398065228,
        "smoothedEle": 10.199999983402176,
        "gradeBand": "descent"
      },
      {
        "lat": 24.6094068,
        "lng": 120.7841714,
        "ele": 9.59999999999999,
        "distanceKm": 30.6109453203642,
        "gradePct": -1.3035700820881582,
        "smoothedEle": 9.599999983400789,
        "gradeBand": "descent"
      },
      {
        "lat": 24.609813,
        "lng": 120.784259,
        "ele": 9,
        "distanceKm": 30.656972756208276,
        "gradePct": -1.290108495373658,
        "smoothedEle": 9.01346172681661,
        "gradeBand": "descent"
      },
      {
        "lat": 24.610169,
        "lng": 120.784349,
        "ele": 8.5,
        "distanceKm": 30.697590369947818,
        "gradePct": -1.2652895076038229,
        "smoothedEle": 8.508801626860286,
        "gradeBand": "descent"
      },
      {
        "lat": 24.610637,
        "lng": 120.784696,
        "ele": 7.75,
        "distanceKm": 30.760349212936923,
        "gradePct": -1.0818560562438386,
        "smoothedEle": 7.88965433879086,
        "gradeBand": "descent"
      },
      {
        "lat": 24.610829,
        "lng": 120.785003,
        "ele": 7.75,
        "distanceKm": 30.79801912134521,
        "gradePct": -0.5698697699240166,
        "smoothedEle": 7.934702010554358,
        "gradeBand": "descent"
      },
      {
        "lat": 24.611254,
        "lng": 120.78459,
        "ele": 8.75,
        "distanceKm": 30.86107871923434,
        "gradePct": 0.674771268384043,
        "smoothedEle": 8.565297989445641,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.611465,
        "lng": 120.784535,
        "ele": 8.75,
        "distanceKm": 30.88519071143001,
        "gradePct": 0.9892062321010731,
        "smoothedEle": 8.908567350587322,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.61212,
        "lng": 120.784696,
        "ele": 10,
        "distanceKm": 30.95981993533604,
        "gradePct": 1.361105586741392,
        "smoothedEle": 9.913815737204043,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.612483151825987,
        "lng": 120.78481357016669,
        "ele": 10.25,
        "distanceKm": 31.001913465102948,
        "gradePct": 1.0437956963167896,
        "smoothedEle": 10.177616912208636,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.612845,
        "lng": 120.784936,
        "ele": 10.25,
        "distanceKm": 31.044009755838633,
        "gradePct": 0.5491458427247651,
        "smoothedEle": 10.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.613195,
        "lng": 120.785116,
        "ele": 10.25,
        "distanceKm": 31.086971920159897,
        "gradePct": 0.16602211341329584,
        "smoothedEle": 10.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.613696,
        "lng": 120.785489,
        "ele": 10.25,
        "distanceKm": 31.154242247152272,
        "gradePct": -0.04600431200490297,
        "smoothedEle": 10.203995687995096,
        "gradeBand": "descent"
      },
      {
        "lat": 24.61416,
        "lng": 120.78585,
        "ele": 10,
        "distanceKm": 31.217438797548347,
        "gradePct": -0.0018976222491797487,
        "smoothedEle": 10.22726692479766,
        "gradeBand": "descent"
      },
      {
        "lat": 24.614514,
        "lng": 120.786181,
        "ele": 10.75,
        "distanceKm": 31.26910210080361,
        "gradePct": 0.4320928659081416,
        "smoothedEle": 10.641560485060948,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.614763,
        "lng": 120.78649,
        "ele": 11,
        "distanceKm": 31.310843622520633,
        "gradePct": 0.7556903502008508,
        "smoothedEle": 10.980528694975366,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.615087,
        "lng": 120.786931,
        "ele": 11.25,
        "distanceKm": 31.36816218825736,
        "gradePct": 0.7081074510772705,
        "smoothedEle": 11.342130676795781,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.615316,
        "lng": 120.787259,
        "ele": 11.75,
        "distanceKm": 31.40996920040741,
        "gradePct": 0.8498535853814552,
        "smoothedEle": 11.823281406065798,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.615591,
        "lng": 120.787726,
        "ele": 12.75,
        "distanceKm": 31.466216425269277,
        "gradePct": 0.5859406793038554,
        "smoothedEle": 11.915796245171775,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.615818,
        "lng": 120.787439,
        "ele": 10.75,
        "distanceKm": 31.50467243735552,
        "gradePct": -0.23364605965655394,
        "smoothedEle": 11.528675682608318,
        "gradeBand": "descent"
      },
      {
        "lat": 24.615937,
        "lng": 120.78729,
        "ele": 10.75,
        "distanceKm": 31.52472154155816,
        "gradePct": -0.7429190502192126,
        "smoothedEle": 11.104626850163402,
        "gradeBand": "descent"
      },
      {
        "lat": 24.615882,
        "lng": 120.787243,
        "ele": 10.5,
        "distanceKm": 31.532465972461143,
        "gradePct": -1.0105065814306913,
        "smoothedEle": 10.849777276792794,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 31.532465972461143,
      "elevationGainM": 105.75748677959453,
      "elevationLossM": 97.53906527947399,
      "minimumElevationM": 0,
      "maximumElevationM": 20.15408999378915,
      "maximumSustainedGradePct": 5.4133142455508025
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 501,
        "startDistanceKm": 0,
        "endDistanceKm": 24.769414895234625,
        "distanceKm": 24.769414895234625,
        "gainM": 85.17959751982083,
        "averageGradePct": 0.34389022865537483,
        "maximumGradePct": 5.4133142455508025
      },
      {
        "startIndex": 508,
        "endIndex": 642,
        "startDistanceKm": 25.095120424866884,
        "endDistanceKm": 31.532465972461143,
        "distanceKm": 6.4373455475942585,
        "gainM": 40.69003458944705,
        "averageGradePct": 0.6320933727824132,
        "maximumGradePct": 3.603939243149061
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
