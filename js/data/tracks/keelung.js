"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("keelung", {
  "keelung-harbor-coast": {
    "routeId": "keelung-harbor-coast",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-26T08:23:43.955Z",
      "reviewStatus": "approved",
      "reviewedAt": "2026-07-28T04:38:44.415Z",
      "reviewerNote": "以稽核頁疊加 OpenStreetMap 目視確認忠一路、正濱路、和一路與北寧路連續；BRouter WayTags 未命中高速公路、樓梯、私人或未鋪裝路段。"
    },
    "waypoints": [
      {
        "name": "基隆車站忠一路口",
        "lat": 25.131422,
        "lng": 121.739869,
        "role": "start"
      },
      {
        "name": "和平島公園聯外道路",
        "lat": 25.15875,
        "lng": 121.7703,
        "role": "via"
      },
      {
        "name": "碧砂漁港",
        "lat": 25.14673,
        "lng": 121.786432,
        "role": "via"
      },
      {
        "name": "潮境公園聯外道路",
        "lat": 25.1427,
        "lng": 121.8028,
        "role": "via"
      },
      {
        "name": "基隆車站忠一路口",
        "lat": 25.131422,
        "lng": 121.739869,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 25.131422,
        "lng": 121.739869,
        "ele": 11.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 11.71345567439431,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13120639039722,
        "lng": 121.74025440540305,
        "ele": 11.892440408719585,
        "distanceKm": 0.04560813064822957,
        "gradePct": 0.41020661950342585,
        "smoothedEle": 11.90054324534512,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.130994,
        "lng": 121.740642,
        "ele": 12.25,
        "distanceKm": 0.09121756741843229,
        "gradePct": 0.3008630679638107,
        "smoothedEle": 11.987895646251364,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.130724,
        "lng": 121.741112,
        "ele": 11.5,
        "distanceKm": 0.14725356316273996,
        "gradePct": -0.41361608545292405,
        "smoothedEle": 11.490078535810207,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13049882684541,
        "lng": 121.74151046302089,
        "ele": 10.836849310213838,
        "distanceKm": 0.1945396075442971,
        "gradePct": -0.6402349283120738,
        "smoothedEle": 11.318148109226602,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130278,
        "lng": 121.741912,
        "ele": 12,
        "distanceKm": 0.24183580543926164,
        "gradePct": 0.45515827057627334,
        "smoothedEle": 11.993367520566682,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.130163,
        "lng": 121.742121,
        "ele": 13,
        "distanceKm": 0.26645694424328364,
        "gradePct": 0.8594927619167444,
        "smoothedEle": 12.279748466398875,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.130212,
        "lng": 121.742468,
        "ele": 12,
        "distanceKm": 0.30181177332542397,
        "gradePct": -0.061977312490752105,
        "smoothedEle": 11.359991139944087,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130458,
        "lng": 121.742919,
        "ele": 8,
        "distanceKm": 0.35481733835108786,
        "gradePct": -3.035647577368459,
        "smoothedEle": 9.10871473280695,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130857351130704,
        "lng": 121.74317414100017,
        "ele": 8.693317935250167,
        "distanceKm": 0.4061164394599289,
        "gradePct": -2.513694923302533,
        "smoothedEle": 8.663466483489552,
        "gradeBand": "descent"
      },
      {
        "lat": 25.131259,
        "lng": 121.743399,
        "ele": 9.25,
        "distanceKm": 0.4561868331874269,
        "gradePct": 0.29332718794263896,
        "smoothedEle": 9.390155451685825,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.131732591688355,
        "lng": 121.7437256170702,
        "ele": 10.722319491413648,
        "distanceKm": 0.5182697866668473,
        "gradePct": 2.035022601088344,
        "smoothedEle": 10.874874822425136,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.132207,
        "lng": 121.744051,
        "ele": 13,
        "distanceKm": 0.5803640871949886,
        "gradePct": 2.166331362269797,
        "smoothedEle": 12.134688000344259,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1326785,
        "lng": 121.7443695,
        "ele": 10.75,
        "distanceKm": 0.6418194973817603,
        "gradePct": -0.6026687705901941,
        "smoothedEle": 10.749999273475064,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13315,
        "lng": 121.744688,
        "ele": 8.5,
        "distanceKm": 0.7032748429885374,
        "gradePct": -2.5111593252480597,
        "smoothedEle": 9.107312687358657,
        "gradeBand": "descent"
      },
      {
        "lat": 25.133562,
        "lng": 121.744966,
        "ele": 9.25,
        "distanceKm": 0.7569587562058979,
        "gradePct": -1.0953303469389122,
        "smoothedEle": 9.250000184564048,
        "gradeBand": "descent"
      },
      {
        "lat": 25.133974,
        "lng": 121.745244,
        "ele": 10,
        "distanceKm": 0.8106426202061792,
        "gradePct": 0.40109313112318123,
        "smoothedEle": 9.527988774122491,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.134322365845318,
        "lng": 121.74546732834925,
        "ele": 8.919348036251336,
        "distanceKm": 0.8554304472057799,
        "gradePct": -0.39270955277876507,
        "smoothedEle": 8.85322851013442,
        "gradeBand": "descent"
      },
      {
        "lat": 25.134669771817478,
        "lng": 121.7456925198426,
        "ele": 7.59912990100903,
        "distanceKm": 0.9002205947932329,
        "gradePct": -1.8237592567771743,
        "smoothedEle": 7.650261640799173,
        "gradeBand": "descent"
      },
      {
        "lat": 25.135017094053612,
        "lng": 121.74591786871643,
        "ele": 6.4641394730775525,
        "distanceKm": 0.9450107014769783,
        "gradePct": -2.291869414296649,
        "smoothedEle": 6.718339928569785,
        "gradeBand": "descent"
      },
      {
        "lat": 25.135364,
        "lng": 121.746144,
        "ele": 6.25,
        "distanceKm": 0.9898008460836255,
        "gradePct": -1.5009922626161152,
        "smoothedEle": 6.4291213804561576,
        "gradeBand": "descent"
      },
      {
        "lat": 25.135918,
        "lng": 121.74643,
        "ele": 7,
        "distanceKm": 1.0577986237521437,
        "gradePct": 0.46643594718811354,
        "smoothedEle": 7.1022018107198415,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.136235,
        "lng": 121.746633,
        "ele": 7.75,
        "distanceKm": 1.0985425852287038,
        "gradePct": 1.0742886196803751,
        "smoothedEle": 7.589940674325703,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.136507,
        "lng": 121.747032,
        "ele": 8,
        "distanceKm": 1.1488219301978206,
        "gradePct": 0.9923771647493647,
        "smoothedEle": 8.005722589759907,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.136708,
        "lng": 121.747428,
        "ele": 8.25,
        "distanceKm": 1.1945232033590114,
        "gradePct": 0.7081747172425471,
        "smoothedEle": 8.250000071543475,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.136909,
        "lng": 121.747824,
        "ele": 8.5,
        "distanceKm": 1.2402244192854226,
        "gradePct": 1.702486657593875,
        "smoothedEle": 9.637112665699448,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.137052,
        "lng": 121.748379,
        "ele": 14.25,
        "distanceKm": 1.2983118576926769,
        "gradePct": 4.4888690728510685,
        "smoothedEle": 12.853861492729283,
        "gradeBand": "hard"
      },
      {
        "lat": 25.137251846609498,
        "lng": 121.74872959869165,
        "ele": 13.594177986888957,
        "distanceKm": 1.3400178822975861,
        "gradePct": 3.995029683335259,
        "smoothedEle": 13.625873586788899,
        "gradeBand": "hard"
      },
      {
        "lat": 25.13744792330475,
        "lng": 121.74908279934583,
        "ele": 13.047088993444477,
        "distanceKm": 1.3817250767430862,
        "gradePct": 1.1117651724248807,
        "smoothedEle": 13.047088860306953,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.137644,
        "lng": 121.749436,
        "ele": 12.5,
        "distanceKm": 1.423432222517337,
        "gradePct": -0.829069130092326,
        "smoothedEle": 12.489790540611093,
        "gradeBand": "descent"
      },
      {
        "lat": 25.137899,
        "lng": 121.74990133333334,
        "ele": 11.749999999999998,
        "distanceKm": 1.4781878614224677,
        "gradePct": -1.346176297572321,
        "smoothedEle": 11.749999686169108,
        "gradeBand": "descent"
      },
      {
        "lat": 25.138154,
        "lng": 121.75036666666666,
        "ele": 11.000000000000002,
        "distanceKm": 1.532943416639361,
        "gradePct": -1.3612872963183011,
        "smoothedEle": 10.999999686175487,
        "gradeBand": "descent"
      },
      {
        "lat": 25.138409,
        "lng": 121.750832,
        "ele": 10.25,
        "distanceKm": 1.5876988881697176,
        "gradePct": -1.3691891542373598,
        "smoothedEle": 10.25053571265321,
        "gradeBand": "descent"
      },
      {
        "lat": 25.138607666666665,
        "lng": 121.751187,
        "ele": 9.666666666666668,
        "distanceKm": 1.6297110244755624,
        "gradePct": -1.3776080161146484,
        "smoothedEle": 9.666666522415552,
        "gradeBand": "descent"
      },
      {
        "lat": 25.138806333333335,
        "lng": 121.751542,
        "ele": 9.083333333333332,
        "distanceKm": 1.6717231113238817,
        "gradePct": -1.3858705189414386,
        "smoothedEle": 9.083333189080003,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139005,
        "lng": 121.751897,
        "ele": 8.5,
        "distanceKm": 1.7137351487139167,
        "gradePct": -1.320923115199183,
        "smoothedEle": 8.567770241947736,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139348,
        "lng": 121.752515,
        "ele": 7.75,
        "distanceKm": 1.786705464536674,
        "gradePct": -1.231768114726768,
        "smoothedEle": 7.667704765326757,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139234,
        "lng": 121.753006,
        "ele": 7,
        "distanceKm": 1.8377303844465662,
        "gradePct": -1.2333173230096532,
        "smoothedEle": 7.038479370751734,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139185,
        "lng": 121.753419,
        "ele": 6.5,
        "distanceKm": 1.8796595126120978,
        "gradePct": -1.0861325988908677,
        "smoothedEle": 6.6684817269295875,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139362032074054,
        "lng": 121.75398620588697,
        "ele": 6.6176833416881315,
        "distanceKm": 1.9400539966416646,
        "gradePct": -0.05158934967085033,
        "smoothedEle": 6.966385634871167,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139564,
        "lng": 121.754544,
        "ele": 8.5,
        "distanceKm": 2.0005275079519156,
        "gradePct": 1.8485456411022911,
        "smoothedEle": 8.61996155916753,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.139824,
        "lng": 121.754959,
        "ele": 10.5,
        "distanceKm": 2.0513306679825174,
        "gradePct": 3.8577184363334953,
        "smoothedEle": 11.132451177754703,
        "gradeBand": "hard"
      },
      {
        "lat": 25.14019,
        "lng": 121.755248,
        "ele": 15,
        "distanceKm": 2.1013564645403537,
        "gradePct": 5.507625521948613,
        "smoothedEle": 14.168583444756827,
        "gradeBand": "hard"
      },
      {
        "lat": 25.140454,
        "lng": 121.755538,
        "ele": 16,
        "distanceKm": 2.1427558600992525,
        "gradePct": 4.639369722303263,
        "smoothedEle": 15.347750512013102,
        "gradeBand": "hard"
      },
      {
        "lat": 25.140679,
        "lng": 121.755992,
        "ele": 14.5,
        "distanceKm": 2.1948563313284,
        "gradePct": 0.596683046492362,
        "smoothedEle": 14.370764743299834,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140911,
        "lng": 121.756579,
        "ele": 11.75,
        "distanceKm": 2.2593303878751954,
        "gradePct": -2.798463966116052,
        "smoothedEle": 12.23848172248156,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140917,
        "lng": 121.756848,
        "ele": 11.75,
        "distanceKm": 2.286416438247081,
        "gradePct": -1.776986823474701,
        "smoothedEle": 12.752042427523046,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14075,
        "lng": 121.7573395,
        "ele": 16,
        "distanceKm": 2.3392615004812902,
        "gradePct": 3.0977996139800075,
        "smoothedEle": 15.999998653607252,
        "gradeBand": "hard"
      },
      {
        "lat": 25.140583,
        "lng": 121.757831,
        "ele": 20.25,
        "distanceKm": 2.392106626075159,
        "gradePct": 5.483522388716288,
        "smoothedEle": 18.585294387980298,
        "gradeBand": "hard"
      },
      {
        "lat": 25.14056,
        "lng": 121.758033,
        "ele": 19.5,
        "distanceKm": 2.412600427350621,
        "gradePct": 3.455417537274964,
        "smoothedEle": 17.816776840150467,
        "gradeBand": "hard"
      },
      {
        "lat": 25.140568,
        "lng": 121.75818,
        "ele": 18,
        "distanceKm": 2.427424364190773,
        "gradePct": 1.489450271436953,
        "smoothedEle": 16.761916419861443,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140713,
        "lng": 121.75841,
        "ele": 12.25,
        "distanceKm": 2.455637485138485,
        "gradePct": -3.265510059114624,
        "smoothedEle": 13.535636530174992,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140976531599676,
        "lng": 121.7588236272177,
        "ele": 8.200514233042941,
        "distanceKm": 2.506551751331435,
        "gradePct": -9.15288907711561,
        "smoothedEle": 8.890713113754334,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141237360375634,
        "lng": 121.75923936947919,
        "ele": 6.963186073845433,
        "distanceKm": 2.5574684068536024,
        "gradePct": -5.970006360279358,
        "smoothedEle": 7.398594645589866,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141497,
        "lng": 121.759656,
        "ele": 7.5,
        "distanceKm": 2.608383409622577,
        "gradePct": -1.087240075696699,
        "smoothedEle": 7.749796080379415,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14168286478455,
        "lng": 121.76004059321836,
        "ele": 8.859853860243039,
        "distanceKm": 2.652268022237408,
        "gradePct": 1.1778208418129292,
        "smoothedEle": 8.728813358940208,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.141873,
        "lng": 121.760423,
        "ele": 9.75,
        "distanceKm": 2.6961851672501074,
        "gradePct": 1.987128161514054,
        "smoothedEle": 9.652783222741203,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.141931,
        "lng": 121.760517,
        "ele": 10,
        "distanceKm": 2.7076361211419346,
        "gradePct": 2.0959541660190837,
        "smoothedEle": 9.840595600963358,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.142427,
        "lng": 121.760762,
        "ele": 10.5,
        "distanceKm": 2.768051573568895,
        "gradePct": 1.8128989670760751,
        "smoothedEle": 10.873781402224054,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.142861,
        "lng": 121.760973,
        "ele": 12.5,
        "distanceKm": 2.820777296453229,
        "gradePct": 2.730220578002109,
        "smoothedEle": 12.795548018223338,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.143199202767363,
        "lng": 121.76115523677908,
        "ele": 15.142076261774726,
        "distanceKm": 2.8626191879613927,
        "gradePct": 4.351343710512777,
        "smoothedEle": 15.132223984777399,
        "gradeBand": "hard"
      },
      {
        "lat": 25.143533,
        "lng": 121.761347,
        "ele": 17.75,
        "distanceKm": 2.9044550245492524,
        "gradePct": 5.384877182491606,
        "smoothedEle": 17.58550500756487,
        "gradeBand": "hard"
      },
      {
        "lat": 25.143865,
        "lng": 121.761515,
        "ele": 19.75,
        "distanceKm": 2.9450606725544985,
        "gradePct": 5.461168749543456,
        "smoothedEle": 19.612830922203592,
        "gradeBand": "hard"
      },
      {
        "lat": 25.144203,
        "lng": 121.761622,
        "ele": 21.25,
        "distanceKm": 2.9841574136010145,
        "gradePct": 4.785455868511689,
        "smoothedEle": 21.18069559614941,
        "gradeBand": "hard"
      },
      {
        "lat": 25.144628272726454,
        "lng": 121.76165133184303,
        "ele": 22.722718991719965,
        "distanceKm": 3.0315377298081114,
        "gradePct": 3.6018089989889543,
        "smoothedEle": 22.539477385468835,
        "gradeBand": "hard"
      },
      {
        "lat": 25.145055,
        "lng": 121.761649,
        "ele": 23.5,
        "distanceKm": 3.078988283758652,
        "gradePct": 2.1067607841173466,
        "smoothedEle": 23.08016298808256,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.14551109464768,
        "lng": 121.7615836567682,
        "ele": 22.61743966529772,
        "distanceKm": 3.1301284899541257,
        "gradePct": 0.18316809990140456,
        "smoothedEle": 22.682231034736155,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.145968,
        "lng": 121.761525,
        "ele": 22,
        "distanceKm": 3.181276037186331,
        "gradePct": -0.4395619753231084,
        "smoothedEle": 22.6227995555895,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14649,
        "lng": 121.76152,
        "ele": 24.25,
        "distanceKm": 3.2393220509498954,
        "gradePct": 1.4893034593777856,
        "smoothedEle": 24.16085193046875,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.146925,
        "lng": 121.761595,
        "ele": 25.75,
        "distanceKm": 3.2882774808660757,
        "gradePct": 2.297584467303844,
        "smoothedEle": 25.105902138281557,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.147349,
        "lng": 121.76167,
        "ele": 24.75,
        "distanceKm": 3.3360247636481164,
        "gradePct": 0.7579077104352223,
        "smoothedEle": 24.831391013218052,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1477095,
        "lng": 121.7618085,
        "ele": 24.124999999999996,
        "distanceKm": 3.3784655403291577,
        "gradePct": -0.7914895564693751,
        "smoothedEle": 24.124999957730687,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14807,
        "lng": 121.761947,
        "ele": 23.5,
        "distanceKm": 3.420906303484019,
        "gradePct": -1.643029878244365,
        "smoothedEle": 23.275280960921044,
        "gradeBand": "descent"
      },
      {
        "lat": 25.148341,
        "lng": 121.762129,
        "ele": 22.25,
        "distanceKm": 3.4561716388088164,
        "gradePct": -2.038373032039276,
        "smoothedEle": 22.45769017800272,
        "gradeBand": "descent"
      },
      {
        "lat": 25.148576,
        "lng": 121.762523,
        "ele": 21.5,
        "distanceKm": 3.5036645784842038,
        "gradePct": -2.105145687555682,
        "smoothedEle": 21.515336918695166,
        "gradeBand": "descent"
      },
      {
        "lat": 25.148624,
        "lng": 121.762717,
        "ele": 21.5,
        "distanceKm": 3.5239078987098837,
        "gradePct": -2.1488034370649043,
        "smoothedEle": 21.05688860408219,
        "gradeBand": "descent"
      },
      {
        "lat": 25.148666,
        "lng": 121.762817,
        "ele": 20.75,
        "distanceKm": 3.5350040429192884,
        "gradePct": -2.1585501248062378,
        "smoothedEle": 20.7898891453694,
        "gradeBand": "descent"
      },
      {
        "lat": 25.148948,
        "lng": 121.763242,
        "ele": 19.5,
        "distanceKm": 3.588043992704035,
        "gradePct": -2.2973077414413847,
        "smoothedEle": 19.527972297701723,
        "gradeBand": "descent"
      },
      {
        "lat": 25.149186758068954,
        "lng": 121.76360099286713,
        "ele": 18.537265850992497,
        "distanceKm": 3.6328827591657107,
        "gradePct": -2.303666670001261,
        "smoothedEle": 18.537265576763797,
        "gradeBand": "descent"
      },
      {
        "lat": 25.149425516137907,
        "lng": 121.76395998573425,
        "ele": 17.574531701984995,
        "distanceKm": 3.6777214686586577,
        "gradePct": -2.1879343134455578,
        "smoothedEle": 17.58562960069209,
        "gradeBand": "descent"
      },
      {
        "lat": 25.149664261340327,
        "lng": 121.76431898997525,
        "ele": 16.65203523805523,
        "distanceKm": 3.7225601966942383,
        "gradePct": -2.1076627631410307,
        "smoothedEle": 16.657678490649477,
        "gradeBand": "descent"
      },
      {
        "lat": 25.149903,
        "lng": 121.764678,
        "ele": 15.75,
        "distanceKm": 3.7673989061869277,
        "gradePct": -1.8059237403740431,
        "smoothedEle": 15.998787139070977,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150166311692747,
        "lng": 121.76506182425432,
        "ele": 15.75,
        "distanceKm": 3.8158735190117694,
        "gradePct": -1.0460613183920584,
        "smoothedEle": 15.75,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150428,
        "lng": 121.765447,
        "ele": 15.75,
        "distanceKm": 3.864347976535647,
        "gradePct": -0.8512967363502189,
        "smoothedEle": 15.192322896435394,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150631,
        "lng": 121.765729,
        "ele": 14,
        "distanceKm": 3.9006134504139776,
        "gradePct": -1.7047823987621027,
        "smoothedEle": 14.12353712948642,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150858,
        "lng": 121.766327,
        "ele": 11.5,
        "distanceKm": 3.965882252487723,
        "gradePct": -3.139621198534969,
        "smoothedEle": 12.00748479805645,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15097951270964,
        "lng": 121.76671499498521,
        "ele": 11.75,
        "distanceKm": 4.007206393305103,
        "gradePct": -2.379824594815925,
        "smoothedEle": 11.529965511092705,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151101,
        "lng": 121.767103,
        "ele": 11.25,
        "distanceKm": 4.048530527333495,
        "gradePct": -1.1733481033114268,
        "smoothedEle": 11.39668966492902,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151137,
        "lng": 121.76722,
        "ele": 11.25,
        "distanceKm": 4.060968650466873,
        "gradePct": -0.6897617240105246,
        "smoothedEle": 11.477024894848311,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151203,
        "lng": 121.767365,
        "ele": 11.25,
        "distanceKm": 4.077304572596651,
        "gradePct": -0.07175134427862588,
        "smoothedEle": 11.803743337443866,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151624,
        "lng": 121.767669,
        "ele": 13.75,
        "distanceKm": 4.133230660690201,
        "gradePct": 1.860107300916677,
        "smoothedEle": 13.306141077247407,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.152083,
        "lng": 121.767925,
        "ele": 14.25,
        "distanceKm": 4.190404670258998,
        "gradePct": 1.3960140453052055,
        "smoothedEle": 13.55167824455141,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.152425,
        "lng": 121.768102,
        "ele": 12.25,
        "distanceKm": 4.232399554465671,
        "gradePct": -0.5156080850911097,
        "smoothedEle": 12.768206164805488,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152477,
        "lng": 121.768142,
        "ele": 12,
        "distanceKm": 4.2394452889024725,
        "gradePct": -0.7055386897795292,
        "smoothedEle": 12.627291476069452,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152528,
        "lng": 121.76823,
        "ele": 12,
        "distanceKm": 4.249962514811523,
        "gradePct": -0.9422047917219841,
        "smoothedEle": 12.435792223139,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152549,
        "lng": 121.7683,
        "ele": 12,
        "distanceKm": 4.257384995988116,
        "gradePct": -1.0827869978892368,
        "smoothedEle": 12.327086301602002,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152552,
        "lng": 121.768365,
        "ele": 12.25,
        "distanceKm": 4.263935841882249,
        "gradePct": -1.1561857929463408,
        "smoothedEle": 12.281820501876545,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152541,
        "lng": 121.768449,
        "ele": 12.25,
        "distanceKm": 4.272478585522771,
        "gradePct": -1.1471309596554513,
        "smoothedEle": 12.327562653239365,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152376763968203,
        "lng": 121.76888926375226,
        "ele": 12.785450357492241,
        "distanceKm": 4.320407410514109,
        "gradePct": -0.22961248151366834,
        "smoothedEle": 12.762323552770757,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152212108863587,
        "lng": 121.76932933652735,
        "ele": 13.232073606907168,
        "distanceKm": 4.368336300558241,
        "gradePct": 0.9266907099692288,
        "smoothedEle": 13.232073483557667,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.152047453758968,
        "lng": 121.76976940930244,
        "ele": 13.678696856322095,
        "distanceKm": 4.4162652458388605,
        "gradePct": 1.1167516519712568,
        "smoothedEle": 13.84150175618483,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.151874,
        "lng": 121.770205,
        "ele": 14.75,
        "distanceKm": 4.464163164405446,
        "gradePct": 0.7848797713458238,
        "smoothedEle": 13.97605244503423,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.152428,
        "lng": 121.770467,
        "ele": 11.75,
        "distanceKm": 4.5311723686183205,
        "gradePct": -2.237141290387428,
        "smoothedEle": 11.646236265388797,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152708,
        "lng": 121.77012,
        "ele": 9.5,
        "distanceKm": 4.577961197825601,
        "gradePct": -3.5123477398364673,
        "smoothedEle": 9.983966408240185,
        "gradeBand": "descent"
      },
      {
        "lat": 25.153015500000002,
        "lng": 121.76970299999999,
        "ele": 8.999999999999996,
        "distanceKm": 4.632097492554436,
        "gradePct": -2.613369530597686,
        "smoothedEle": 8.999999794985472,
        "gradeBand": "descent"
      },
      {
        "lat": 25.153323,
        "lng": 121.769286,
        "ele": 8.5,
        "distanceKm": 4.686233705277461,
        "gradePct": -1.5260704251124884,
        "smoothedEle": 8.307537130877044,
        "gradeBand": "descent"
      },
      {
        "lat": 25.153462,
        "lng": 121.769146,
        "ele": 7.75,
        "distanceKm": 4.7071490333473776,
        "gradePct": -1.484536467662572,
        "smoothedEle": 7.968919756782183,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15387697436296,
        "lng": 121.76889828191237,
        "ele": 7.381008545680383,
        "distanceKm": 4.759597476382324,
        "gradePct": -1.2105213736922023,
        "smoothedEle": 7.437722893771876,
        "gradeBand": "descent"
      },
      {
        "lat": 25.154303,
        "lng": 121.76867,
        "ele": 7.25,
        "distanceKm": 4.81224752291797,
        "gradePct": -0.3251581537673281,
        "smoothedEle": 7.592124194747363,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15466740186879,
        "lng": 121.76902370028316,
        "ele": 8.600792816136659,
        "distanceKm": 4.866184507431974,
        "gradePct": 1.1126637422820633,
        "smoothedEle": 8.569703735098537,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.155028267912524,
        "lng": 121.7693821335221,
        "ele": 9.817195210757765,
        "distanceKm": 4.920144007636759,
        "gradePct": 2.0819518081193635,
        "smoothedEle": 9.817195644636456,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.155389133956263,
        "lng": 121.76974056676106,
        "ele": 11.033597605378873,
        "distanceKm": 4.974103436503524,
        "gradePct": 2.2808162565405037,
        "smoothedEle": 11.033598039276097,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.15575,
        "lng": 121.770099,
        "ele": 12.25,
        "distanceKm": 5.028062794029223,
        "gradePct": 2.312008356877402,
        "smoothedEle": 12.307716467874776,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.156134,
        "lng": 121.76993,
        "ele": 13.5,
        "distanceKm": 5.07402500096475,
        "gradePct": 2.447729530208278,
        "smoothedEle": 13.479559404416767,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.156461,
        "lng": 121.769894,
        "ele": 14.5,
        "distanceKm": 5.110565878750805,
        "gradePct": 2.216485842949088,
        "smoothedEle": 14.111055393919875,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.156796,
        "lng": 121.770101,
        "ele": 14.25,
        "distanceKm": 5.15324668274248,
        "gradePct": 2.5834134234999273,
        "smoothedEle": 15.53321311737572,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.157231,
        "lng": 121.770178,
        "ele": 19,
        "distanceKm": 5.202233456537625,
        "gradePct": 4.5128326092268125,
        "smoothedEle": 18.479887871533045,
        "gradeBand": "hard"
      },
      {
        "lat": 25.157446,
        "lng": 121.770077,
        "ele": 20.25,
        "distanceKm": 5.22821185675495,
        "gradePct": 5.9651335779783565,
        "smoothedEle": 20.664166740813293,
        "gradeBand": "hard"
      },
      {
        "lat": 25.157639,
        "lng": 121.77012,
        "ele": 22,
        "distanceKm": 5.250104542576689,
        "gradePct": 6.166091335251993,
        "smoothedEle": 21.59460588823721,
        "gradeBand": "steep"
      },
      {
        "lat": 25.157865,
        "lng": 121.770093,
        "ele": 23.25,
        "distanceKm": 5.27538113246997,
        "gradePct": 5.913318596443296,
        "smoothedEle": 22.777973226622315,
        "gradeBand": "hard"
      },
      {
        "lat": 25.158005,
        "lng": 121.770024,
        "ele": 23.25,
        "distanceKm": 5.2924272256305995,
        "gradePct": 5.88673320626323,
        "smoothedEle": 23.776752204863207,
        "gradeBand": "hard"
      },
      {
        "lat": 25.158143,
        "lng": 121.769918,
        "ele": 24.25,
        "distanceKm": 5.311116396166009,
        "gradePct": 5.554784070318929,
        "smoothedEle": 24.781554627662285,
        "gradeBand": "hard"
      },
      {
        "lat": 25.158345,
        "lng": 121.77019,
        "ele": 27,
        "distanceKm": 5.346527640098872,
        "gradePct": 4.867385994349351,
        "smoothedEle": 26.309973527279332,
        "gradeBand": "hard"
      },
      {
        "lat": 25.158401,
        "lng": 121.770273,
        "ele": 27.75,
        "distanceKm": 5.356946779958847,
        "gradePct": 4.6089177721370955,
        "smoothedEle": 26.523854855116493,
        "gradeBand": "hard"
      },
      {
        "lat": 25.158538,
        "lng": 121.770398,
        "ele": 27.75,
        "distanceKm": 5.376703894865445,
        "gradePct": 4.219944845350079,
        "smoothedEle": 27.075422474967148,
        "gradeBand": "hard"
      },
      {
        "lat": 25.158675,
        "lng": 121.77047,
        "ele": 27,
        "distanceKm": 5.393573360178081,
        "gradePct": 3.42181900333267,
        "smoothedEle": 27.260191854654284,
        "gradeBand": "hard"
      },
      {
        "lat": 25.158765,
        "lng": 121.770459,
        "ele": 25.5,
        "distanceKm": 5.403641969565418,
        "gradePct": 2.9417203160226246,
        "smoothedEle": 27.321420728535113,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.158675,
        "lng": 121.77047,
        "ele": 27,
        "distanceKm": 5.413710578952754,
        "gradePct": 2.4278960721486,
        "smoothedEle": 27.321420728535116,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.158538,
        "lng": 121.770398,
        "ele": 27.75,
        "distanceKm": 5.43058004426539,
        "gradePct": 1.4431549286123102,
        "smoothedEle": 27.064798869911584,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.158401,
        "lng": 121.770273,
        "ele": 27.75,
        "distanceKm": 5.450337159171989,
        "gradePct": 0.12505692993983475,
        "smoothedEle": 26.513231250060937,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.158143,
        "lng": 121.769918,
        "ele": 24.25,
        "distanceKm": 5.496158823151733,
        "gradePct": -2.399903764959516,
        "smoothedEle": 24.87601071635029,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157865,
        "lng": 121.770093,
        "ele": 23.25,
        "distanceKm": 5.531736790350896,
        "gradePct": -4.261116936960655,
        "smoothedEle": 22.7713885698678,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157446,
        "lng": 121.770077,
        "ele": 20.25,
        "distanceKm": 5.578355350741805,
        "gradePct": -5.067731955243969,
        "smoothedEle": 20.444401679160343,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157293,
        "lng": 121.770159,
        "ele": 19.5,
        "distanceKm": 5.597264358386655,
        "gradePct": -5.926203998115277,
        "smoothedEle": 18.884408548460218,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157231,
        "lng": 121.770178,
        "ele": 19,
        "distanceKm": 5.604418759403975,
        "gradePct": -6.0932219823240885,
        "smoothedEle": 18.29417046453127,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156876,
        "lng": 121.770142,
        "ele": 15,
        "distanceKm": 5.644058955359046,
        "gradePct": -5.988843494132041,
        "smoothedEle": 16.167478540032715,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156567,
        "lng": 121.769918,
        "ele": 14.75,
        "distanceKm": 5.685154508521285,
        "gradePct": -5.458028386653412,
        "smoothedEle": 14.425442775699764,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156241,
        "lng": 121.769901,
        "ele": 13.5,
        "distanceKm": 5.721444463265696,
        "gradePct": -3.5872552771111383,
        "smoothedEle": 13.793488146023439,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15575,
        "lng": 121.770099,
        "ele": 13,
        "distanceKm": 5.7795646085361,
        "gradePct": -1.6136085109598588,
        "smoothedEle": 13.048789481154508,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156136,
        "lng": 121.770445,
        "ele": 12.75,
        "distanceKm": 5.834836484000515,
        "gradePct": -0.9283108504870581,
        "smoothedEle": 12.693584125651522,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156469,
        "lng": 121.77085,
        "ele": 12.25,
        "distanceKm": 5.889906071993332,
        "gradePct": -0.7010792755030433,
        "smoothedEle": 12.281250669533279,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156626,
        "lng": 121.771153,
        "ele": 12,
        "distanceKm": 5.925045783605589,
        "gradePct": -0.7348476839593188,
        "smoothedEle": 12.021656492535095,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15681,
        "lng": 121.771633,
        "ele": 11.75,
        "distanceKm": 5.977510689245924,
        "gradePct": -0.6330604765055097,
        "smoothedEle": 11.741000602446737,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157015826610635,
        "lng": 121.7721565714408,
        "ele": 11.428395920881588,
        "distanceKm": 6.034962556342638,
        "gradePct": -0.5629327177761836,
        "smoothedEle": 11.405674967268432,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157224,
        "lng": 121.772679,
        "ele": 11,
        "distanceKm": 6.092413496151564,
        "gradePct": -0.6191400275214858,
        "smoothedEle": 11.034878315790646,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156754,
        "lng": 121.772849,
        "ele": 10.75,
        "distanceKm": 6.147404773491274,
        "gradePct": -0.6023852589881485,
        "smoothedEle": 10.722985844304906,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156351,
        "lng": 121.77297974999999,
        "ele": 10.437499999999998,
        "distanceKm": 6.194108735718181,
        "gradePct": -0.5877634543747664,
        "smoothedEle": 10.437500019139595,
        "gradeBand": "descent"
      },
      {
        "lat": 25.155948,
        "lng": 121.7731105,
        "ele": 10.124999999999996,
        "distanceKm": 6.240812710194431,
        "gradePct": -0.6353738440194392,
        "smoothedEle": 10.125000019136921,
        "gradeBand": "descent"
      },
      {
        "lat": 25.155545,
        "lng": 121.77324125,
        "ele": 9.812500000000002,
        "distanceKm": 6.2875166969183125,
        "gradePct": -0.6652949460098802,
        "smoothedEle": 9.812500019137916,
        "gradeBand": "descent"
      },
      {
        "lat": 25.155142,
        "lng": 121.773372,
        "ele": 9.5,
        "distanceKm": 6.334220695890461,
        "gradePct": -0.6532532866859141,
        "smoothedEle": 9.515854423351188,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15475,
        "lng": 121.77352,
        "ele": 9.25,
        "distanceKm": 6.380284233286597,
        "gradePct": -0.6181716732578839,
        "smoothedEle": 9.242721321371958,
        "gradeBand": "descent"
      },
      {
        "lat": 25.154361943205654,
        "lng": 121.77368490822288,
        "ele": 8.972141300943505,
        "distanceKm": 6.426516431784235,
        "gradePct": -0.547803758672645,
        "smoothedEle": 9.016985147082341,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15397897160283,
        "lng": 121.77386395411145,
        "ele": 8.861070650471754,
        "distanceKm": 6.47275711621846,
        "gradePct": -0.4262825942408896,
        "smoothedEle": 8.861070662713884,
        "gradeBand": "descent"
      },
      {
        "lat": 25.153596,
        "lng": 121.774043,
        "ele": 8.75,
        "distanceKm": 6.5189978226965435,
        "gradePct": -0.27384057148281926,
        "smoothedEle": 8.779855398501907,
        "gradeBand": "descent"
      },
      {
        "lat": 25.153202,
        "lng": 121.774247,
        "ele": 8.75,
        "distanceKm": 6.567381558411506,
        "gradePct": -0.12919598533656942,
        "smoothedEle": 8.75,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152808,
        "lng": 121.774451,
        "ele": 8.75,
        "distanceKm": 6.615765322262819,
        "gradePct": -0.03553282855835972,
        "smoothedEle": 8.75,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15238375,
        "lng": 121.77465475,
        "ele": 8.75,
        "distanceKm": 6.667204624294908,
        "gradePct": -0.0001091779806063901,
        "smoothedEle": 8.75,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1519595,
        "lng": 121.7748585,
        "ele": 8.75,
        "distanceKm": 6.718643954753066,
        "gradePct": 0,
        "smoothedEle": 8.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.151535250000002,
        "lng": 121.77506225,
        "ele": 8.75,
        "distanceKm": 6.770083313637861,
        "gradePct": 0,
        "smoothedEle": 8.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.151111,
        "lng": 121.775266,
        "ele": 8.75,
        "distanceKm": 6.821522700948149,
        "gradePct": 0.09566988262482069,
        "smoothedEle": 8.84566988262482,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.150883,
        "lng": 121.775282,
        "ele": 9,
        "distanceKm": 6.846926277204641,
        "gradePct": 0.28619670454851337,
        "smoothedEle": 9.036196704548512,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.150892,
        "lng": 121.775761,
        "ele": 9.5,
        "distanceKm": 6.895149383513482,
        "gradePct": -0.17390258634895933,
        "smoothedEle": 8.622716708480525,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151034,
        "lng": 121.776128,
        "ele": 7,
        "distanceKm": 6.935322098930157,
        "gradePct": -2.1870604116452306,
        "smoothedEle": 6.762104955844658,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15123,
        "lng": 121.776504,
        "ele": 3.5,
        "distanceKm": 6.97899432170462,
        "gradePct": -4.591783391245796,
        "smoothedEle": 4.169451869947338,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151307,
        "lng": 121.776859,
        "ele": 2.5,
        "distanceKm": 7.015737475404715,
        "gradePct": -4.363956404395342,
        "smoothedEle": 3.3052164537415356,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151238,
        "lng": 121.777361,
        "ele": 4.5,
        "distanceKm": 7.066844253180514,
        "gradePct": -0.7174266958959342,
        "smoothedEle": 4.173328342327696,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1511024,
        "lng": 121.7778354,
        "ele": 5.150000000000002,
        "distanceKm": 7.116917925620602,
        "gradePct": 1.8247319735535321,
        "smoothedEle": 5.1499998355601555,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1509668,
        "lng": 121.7783098,
        "ele": 5.800000000000004,
        "distanceKm": 7.166991648657567,
        "gradePct": 1.6237965900469695,
        "smoothedEle": 5.799999835565396,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1508312,
        "lng": 121.77878419999999,
        "ele": 6.449999999999996,
        "distanceKm": 7.217065422289795,
        "gradePct": 1.298085366349807,
        "smoothedEle": 6.449999835557339,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1506956,
        "lng": 121.77925859999999,
        "ele": 7.099999999999998,
        "distanceKm": 7.267139246519764,
        "gradePct": 1.2980840547135097,
        "smoothedEle": 7.099999835562587,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.15056,
        "lng": 121.779733,
        "ele": 7.75,
        "distanceKm": 7.317213121345859,
        "gradePct": 1.1358230006989456,
        "smoothedEle": 7.587740093184809,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.150421,
        "lng": 121.780167,
        "ele": 7.75,
        "distanceKm": 7.3635503453833735,
        "gradePct": 1.1144101433090792,
        "smoothedEle": 8.167823048982727,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.150247333333333,
        "lng": 121.780563,
        "ele": 9.24999999999999,
        "distanceKm": 7.40784060551901,
        "gradePct": 1.7535517057508676,
        "smoothedEle": 9.249999617137643,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.150073666666668,
        "lng": 121.78095900000001,
        "ele": 10.75000000000001,
        "distanceKm": 7.452130916702961,
        "gradePct": 2.725133253216126,
        "smoothedEle": 10.749999617156725,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1499,
        "lng": 121.781355,
        "ele": 12.25,
        "distanceKm": 7.49642127893268,
        "gradePct": 4.970634198472583,
        "smoothedEle": 13.941616992995272,
        "gradeBand": "hard"
      },
      {
        "lat": 25.149714893104946,
        "lng": 121.78168616797794,
        "ele": 19.186219831856597,
        "distanceKm": 7.535597391356794,
        "gradePct": 8.045578122431596,
        "smoothedEle": 18.235629359082175,
        "gradeBand": "steep"
      },
      {
        "lat": 25.149512,
        "lng": 121.782005,
        "ele": 23,
        "distanceKm": 7.5748257289952425,
        "gradePct": 8.59368610496429,
        "smoothedEle": 20.979101501241384,
        "gradeBand": "steep"
      },
      {
        "lat": 25.149272,
        "lng": 121.782334,
        "ele": 20,
        "distanceKm": 7.617355749311199,
        "gradePct": 4.742206314291194,
        "smoothedEle": 20.978407152402955,
        "gradeBand": "hard"
      },
      {
        "lat": 25.148889,
        "lng": 121.782655,
        "ele": 20.5,
        "distanceKm": 7.670812766454279,
        "gradePct": -0.5491102507052777,
        "smoothedEle": 20.149340792183025,
        "gradeBand": "descent"
      },
      {
        "lat": 25.148418,
        "lng": 121.7829105,
        "ele": 19.375,
        "distanceKm": 7.729159121889891,
        "gradePct": -1.4203480739248329,
        "smoothedEle": 19.375000246071814,
        "gradeBand": "descent"
      },
      {
        "lat": 25.147947,
        "lng": 121.783166,
        "ele": 18.25,
        "distanceKm": 7.787505521071604,
        "gradePct": -3.2782214636231664,
        "smoothedEle": 16.64958232543473,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14758,
        "lng": 121.783317,
        "ele": 11.75,
        "distanceKm": 7.831052623251046,
        "gradePct": -5.642938455193444,
        "smoothedEle": 13.643614472537955,
        "gradeBand": "descent"
      },
      {
        "lat": 25.147114000000002,
        "lng": 121.783422,
        "ele": 11.999999999999998,
        "distanceKm": 7.883936388555185,
        "gradePct": -4.816300039740574,
        "smoothedEle": 11.999999989919274,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146648,
        "lng": 121.78352699999999,
        "ele": 12.250000000000002,
        "distanceKm": 7.936820161923903,
        "gradePct": -1.2143607922417994,
        "smoothedEle": 12.249999989919667,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146182,
        "lng": 121.783632,
        "ele": 12.5,
        "distanceKm": 7.989703943356886,
        "gradePct": 0.9331555486843983,
        "smoothedEle": 12.960420777231302,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.145792,
        "lng": 121.783838,
        "ele": 14.5,
        "distanceKm": 8.03777233831288,
        "gradePct": 3.227021880327489,
        "smoothedEle": 15.489813048971277,
        "gradeBand": "hard"
      },
      {
        "lat": 25.145471,
        "lng": 121.784278,
        "ele": 21.5,
        "distanceKm": 8.094654364043986,
        "gradePct": 5.821736369966002,
        "smoothedEle": 19.042651716222867,
        "gradeBand": "hard"
      },
      {
        "lat": 25.145267,
        "lng": 121.78459699999999,
        "ele": 18.375,
        "distanceKm": 8.133968336244573,
        "gradePct": 3.0853568623097303,
        "smoothedEle": 18.37500068486794,
        "gradeBand": "hard"
      },
      {
        "lat": 25.145063,
        "lng": 121.784916,
        "ele": 15.25,
        "distanceKm": 8.173282352276708,
        "gradePct": -0.8594796625772746,
        "smoothedEle": 16.848280955310134,
        "gradeBand": "descent"
      },
      {
        "lat": 25.144807333333333,
        "lng": 121.78532066666666,
        "ele": 17.8333333333333,
        "distanceKm": 8.222954936342855,
        "gradePct": -0.7287037388051151,
        "smoothedEle": 17.833332429671273,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14455166666667,
        "lng": 121.78572533333333,
        "ele": 20.4166666666667,
        "distanceKm": 8.272627590369936,
        "gradePct": 3.5429577966171077,
        "smoothedEle": 20.41666576300678,
        "gradeBand": "hard"
      },
      {
        "lat": 25.144296,
        "lng": 121.78613,
        "ele": 23,
        "distanceKm": 8.322300314357785,
        "gradePct": 1.7917003570299663,
        "smoothedEle": 19.612051051128866,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.14458473084993,
        "lng": 121.78636088534391,
        "ele": 13.92898786091561,
        "distanceKm": 8.36193465155409,
        "gradePct": -5.058647280565933,
        "smoothedEle": 14.801909174103319,
        "gradeBand": "descent"
      },
      {
        "lat": 25.144872,
        "lng": 121.786594,
        "ele": 7.75,
        "distanceKm": 8.401569846535136,
        "gradePct": -10.457021724421631,
        "smoothedEle": 9.49082809220874,
        "gradeBand": "descent"
      },
      {
        "lat": 25.145161249999997,
        "lng": 121.78614025,
        "ele": 7.187500000000004,
        "distanceKm": 8.457431572762843,
        "gradePct": -8.160916552949754,
        "smoothedEle": 7.187499751121233,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1454505,
        "lng": 121.7856865,
        "ele": 6.624999999999991,
        "distanceKm": 8.513293210500322,
        "gradePct": -2.3824426976960074,
        "smoothedEle": 6.624999751114822,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14573975,
        "lng": 121.78523274999999,
        "ele": 6.062499999999996,
        "distanceKm": 8.569154759745294,
        "gradePct": -1.0069531087151988,
        "smoothedEle": 6.062499751108408,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146029,
        "lng": 121.784779,
        "ele": 5.5,
        "distanceKm": 8.625016220495478,
        "gradePct": -1.4402071457835148,
        "smoothedEle": 5.066747309211202,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146442,
        "lng": 121.785087,
        "ele": 3,
        "distanceKm": 8.680424833901167,
        "gradePct": -1.9796619066495182,
        "smoothedEle": 3.88194435348378,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146146,
        "lng": 121.785546,
        "ele": 4.5,
        "distanceKm": 8.737151231093852,
        "gradePct": -0.5852525874356468,
        "smoothedEle": 4.222011664160161,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146146,
        "lng": 121.78568,
        "ele": 4.75,
        "distanceKm": 8.750639238649653,
        "gradePct": -0.2085235647434905,
        "smoothedEle": 4.310326481248948,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14613,
        "lng": 121.785585,
        "ele": 4.75,
        "distanceKm": 8.76036573094542,
        "gradePct": -0.02420735571755914,
        "smoothedEle": 4.286661004530293,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146146,
        "lng": 121.785546,
        "ele": 4.5,
        "distanceKm": 8.764675686970097,
        "gradePct": 0.003303138335581058,
        "smoothedEle": 4.222011664160134,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.146442,
        "lng": 121.785087,
        "ele": 3,
        "distanceKm": 8.821402084162782,
        "gradePct": -0.24565324055480708,
        "smoothedEle": 3.881944353483753,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146029,
        "lng": 121.784779,
        "ele": 5.5,
        "distanceKm": 8.876810697568471,
        "gradePct": 0.9174834419048304,
        "smoothedEle": 5.066747309211212,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.14573975,
        "lng": 121.78523274999999,
        "ele": 6.062499999999996,
        "distanceKm": 8.932672158318656,
        "gradePct": 1.939567284939348,
        "smoothedEle": 6.062499751108408,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1454505,
        "lng": 121.7856865,
        "ele": 6.624999999999991,
        "distanceKm": 8.988533707563628,
        "gradePct": 1.349285191991083,
        "smoothedEle": 6.624999751114813,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.145161249999997,
        "lng": 121.78614025,
        "ele": 7.187500000000004,
        "distanceKm": 9.044395345301107,
        "gradePct": 1.0069529217124122,
        "smoothedEle": 7.187499751121233,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.144872,
        "lng": 121.786594,
        "ele": 7.75,
        "distanceKm": 9.100257071528814,
        "gradePct": 2.7477796676647213,
        "smoothedEle": 9.49082809220874,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.14458473084993,
        "lng": 121.78636088534391,
        "ele": 13.92898786091561,
        "distanceKm": 9.13989226650986,
        "gradePct": 7.659753274732399,
        "smoothedEle": 14.801909174103159,
        "gradeBand": "steep"
      },
      {
        "lat": 25.144296,
        "lng": 121.78613,
        "ele": 23,
        "distanceKm": 9.179526603706165,
        "gradePct": 10.116396112934536,
        "smoothedEle": 18.75245158559921,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.144114,
        "lng": 121.786431,
        "ele": 18.25,
        "distanceKm": 9.215961967326388,
        "gradePct": 6.55949990877526,
        "smoothedEle": 18.15477015154005,
        "gradeBand": "steep"
      },
      {
        "lat": 25.143970768735993,
        "lng": 121.78684746599498,
        "ele": 12.43050740322188,
        "distanceKm": 9.260806300890172,
        "gradePct": -3.382925845512813,
        "smoothedEle": 13.503584350317908,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143831,
        "lng": 121.787266,
        "ele": 10.5,
        "distanceKm": 9.305710628685441,
        "gradePct": -7.472613192502313,
        "smoothedEle": 10.850318716494368,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143711500000002,
        "lng": 121.787661,
        "ele": 9.875000000000014,
        "distanceKm": 9.347632453040884,
        "gradePct": -4.9949556177950605,
        "smoothedEle": 9.87500011536247,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143592,
        "lng": 121.788056,
        "ele": 9.25,
        "distanceKm": 9.389554314312313,
        "gradePct": -2.2758533439831092,
        "smoothedEle": 9.529094821389998,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143508,
        "lng": 121.788253,
        "ele": 9.5,
        "distanceKm": 9.411473804021746,
        "gradePct": -0.730715030761309,
        "smoothedEle": 9.985522400066078,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143149481952896,
        "lng": 121.7887129524214,
        "ele": 12.269041827236011,
        "distanceKm": 9.47257040720133,
        "gradePct": 2.2033750170494604,
        "smoothedEle": 11.87260730380599,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.142789,
        "lng": 121.789171,
        "ele": 13,
        "distanceKm": 9.533664995933044,
        "gradePct": 2.5608957047394463,
        "smoothedEle": 13.231835314150482,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.142393,
        "lng": 121.789613,
        "ele": 15,
        "distanceKm": 9.596262350352347,
        "gradePct": 1.8253503852564217,
        "smoothedEle": 14.225054334098603,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.142171,
        "lng": 121.790005,
        "ele": 13.5,
        "distanceKm": 9.642806455673092,
        "gradePct": 0.7109837333805044,
        "smoothedEle": 14.087864661169668,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.141915,
        "lng": 121.790559,
        "ele": 14.5,
        "distanceKm": 9.705417365458045,
        "gradePct": 0.029528051336141663,
        "smoothedEle": 14.2275977969599,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.14173675,
        "lng": 121.79096375,
        "ele": 14.187500000000004,
        "distanceKm": 9.750725044200529,
        "gradePct": 0.08196295590908272,
        "smoothedEle": 14.187500083582938,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1415585,
        "lng": 121.7913685,
        "ele": 13.874999999999993,
        "distanceKm": 9.796032776436093,
        "gradePct": -0.33165347128571315,
        "smoothedEle": 13.875000083582131,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14138025,
        "lng": 121.79177325,
        "ele": 13.562499999999996,
        "distanceKm": 9.841340562164223,
        "gradePct": -0.633305353118129,
        "smoothedEle": 13.562500083582144,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141202,
        "lng": 121.792178,
        "ele": 13.25,
        "distanceKm": 9.886648401384928,
        "gradePct": -0.6779917354156778,
        "smoothedEle": 13.261734986618567,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141045,
        "lng": 121.792307,
        "ele": 13,
        "distanceKm": 9.908405829661152,
        "gradePct": -0.5959167800483932,
        "smoothedEle": 13.193743023255367,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140726,
        "lng": 121.792419,
        "ele": 13.25,
        "distanceKm": 9.945625613064195,
        "gradePct": 0.016052715932756867,
        "smoothedEle": 13.550107528859952,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1403795,
        "lng": 121.7925325,
        "ele": 14.5,
        "distanceKm": 9.985812966110752,
        "gradePct": 1.23271912140789,
        "smoothedEle": 14.499999942380203,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140033,
        "lng": 121.792646,
        "ele": 15.75,
        "distanceKm": 10.026000328376478,
        "gradePct": 3.792196978507472,
        "smoothedEle": 17.15440027376793,
        "gradeBand": "hard"
      },
      {
        "lat": 25.139701,
        "lng": 121.792969,
        "ele": 22.75,
        "distanceKm": 10.07519377810199,
        "gradePct": 7.122902401333457,
        "smoothedEle": 21.37190083795183,
        "gradeBand": "steep"
      },
      {
        "lat": 25.139633,
        "lng": 121.793115,
        "ele": 23.75,
        "distanceKm": 10.091721476356478,
        "gradePct": 7.679898233788989,
        "smoothedEle": 22.570158961402125,
        "gradeBand": "steep"
      },
      {
        "lat": 25.139594,
        "lng": 121.793291,
        "ele": 23.75,
        "distanceKm": 10.109961047646985,
        "gradePct": 7.142052489097119,
        "smoothedEle": 23.237048271421337,
        "gradeBand": "steep"
      },
      {
        "lat": 25.139595,
        "lng": 121.793548,
        "ele": 23,
        "distanceKm": 10.13583146557867,
        "gradePct": 4.186329101141471,
        "smoothedEle": 22.183581968662622,
        "gradeBand": "hard"
      },
      {
        "lat": 25.139668,
        "lng": 121.794023,
        "ele": 18.75,
        "distanceKm": 10.184330102562503,
        "gradePct": -3.3450285290145922,
        "smoothedEle": 18.68925583232446,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13972,
        "lng": 121.79453,
        "ele": 14,
        "distanceKm": 10.235692286488016,
        "gradePct": -7.636479927749476,
        "smoothedEle": 14.55276953660033,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139718,
        "lng": 121.794925,
        "ele": 12,
        "distanceKm": 10.275454426971141,
        "gradePct": -6.891572374740443,
        "smoothedEle": 12.437175763458411,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139649397798053,
        "lng": 121.79529536643147,
        "ele": 11.466620792744997,
        "distanceKm": 10.313508693255526,
        "gradePct": -5.08425448336508,
        "smoothedEle": 11.25508490644063,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139591,
        "lng": 121.795668,
        "ele": 10.25,
        "distanceKm": 10.351576705858752,
        "gradePct": -3.08061011188936,
        "smoothedEle": 10.627009281826497,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139582,
        "lng": 121.796093,
        "ele": 10.25,
        "distanceKm": 10.394369836401951,
        "gradePct": -1.3081025940733622,
        "smoothedEle": 10.541498247356294,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139579,
        "lng": 121.796234,
        "ele": 10.5,
        "distanceKm": 10.408567124266103,
        "gradePct": -0.6896219705341486,
        "smoothedEle": 10.718964345658184,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139707,
        "lng": 121.796549,
        "ele": 11.5,
        "distanceKm": 10.443323577100506,
        "gradePct": 0.21645671489508167,
        "smoothedEle": 10.979632521984767,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140033,
        "lng": 121.796942,
        "ele": 10.75,
        "distanceKm": 10.496980248006254,
        "gradePct": -0.16422843686654845,
        "smoothedEle": 10.409899955543537,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140098,
        "lng": 121.797124,
        "ele": 9.75,
        "distanceKm": 10.51667486839758,
        "gradePct": -0.8382004023330539,
        "smoothedEle": 9.94157080664183,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140102,
        "lng": 121.797181,
        "ele": 9.5,
        "distanceKm": 10.52242980217769,
        "gradePct": -1.0081507136940377,
        "smoothedEle": 9.814781634321388,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140082,
        "lng": 121.797319,
        "ele": 9.25,
        "distanceKm": 10.53649801485884,
        "gradePct": -1.3598539178746534,
        "smoothedEle": 9.568587912401282,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139953,
        "lng": 121.797692,
        "ele": 9,
        "distanceKm": 10.576691569858808,
        "gradePct": -1.5436385190814017,
        "smoothedEle": 9.081688902898684,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139946,
        "lng": 121.798336,
        "ele": 9,
        "distanceKm": 10.641522494768985,
        "gradePct": -0.6698502587178942,
        "smoothedEle": 8.837871818563364,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139950499999998,
        "lng": 121.798814,
        "ele": 8.375,
        "distanceKm": 10.68964147670926,
        "gradePct": -0.6579867106026308,
        "smoothedEle": 8.374999994462751,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139955,
        "lng": 121.799292,
        "ele": 7.75,
        "distanceKm": 10.737760456877615,
        "gradePct": 0.022888533723460194,
        "smoothedEle": 8.874908679047605,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140067369521258,
        "lng": 121.79965803107689,
        "ele": 10.901818435437907,
        "distanceKm": 10.776666804956008,
        "gradePct": 2.3070351059851317,
        "smoothedEle": 10.806842603420163,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140203,
        "lng": 121.800016,
        "ele": 13.75,
        "distanceKm": 10.815729351329209,
        "gradePct": 5.101247351356898,
        "smoothedEle": 13.747274600330107,
        "gradeBand": "hard"
      },
      {
        "lat": 25.140252,
        "lng": 121.800433,
        "ele": 16.75,
        "distanceKm": 10.858057400636795,
        "gradePct": 6.088836578473048,
        "smoothedEle": 15.971610455519523,
        "gradeBand": "steep"
      },
      {
        "lat": 25.14013097586977,
        "lng": 121.80090362067713,
        "ele": 17.09161942893048,
        "distanceKm": 10.907305184243743,
        "gradePct": 3.6785011942492742,
        "smoothedEle": 16.79164687198532,
        "gradeBand": "hard"
      },
      {
        "lat": 25.139998,
        "lng": 121.801371,
        "ele": 16.25,
        "distanceKm": 10.9566212685194,
        "gradePct": -0.5879635346790659,
        "smoothedEle": 15.308178284468955,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140163,
        "lng": 121.801711,
        "ele": 12.5,
        "distanceKm": 10.99545386003189,
        "gradePct": -3.087331051913472,
        "smoothedEle": 13.50697663594479,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140279,
        "lng": 121.801801,
        "ele": 12.25,
        "distanceKm": 11.011216159063174,
        "gradePct": -3.8405543677471856,
        "smoothedEle": 12.833447148236958,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140336,
        "lng": 121.801824,
        "ele": 12.25,
        "distanceKm": 11.017963898476104,
        "gradePct": -3.941225061035441,
        "smoothedEle": 12.52979887465512,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140578,
        "lng": 121.801869,
        "ele": 12,
        "distanceKm": 11.045251703999538,
        "gradePct": -3.6278063193669543,
        "smoothedEle": 12.022377865746508,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140839,
        "lng": 121.801872,
        "ele": 11.75,
        "distanceKm": 11.074275191024189,
        "gradePct": -2.7703314592249315,
        "smoothedEle": 11.718991500888071,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141227,
        "lng": 121.801753,
        "ele": 11.25,
        "distanceKm": 11.119050924678112,
        "gradePct": -1.266580610470183,
        "smoothedEle": 11.243004842051777,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141738,
        "lng": 121.801982,
        "ele": 10.5,
        "distanceKm": 11.180369371661204,
        "gradePct": -0.9345652429480713,
        "smoothedEle": 10.719642312641014,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142082,
        "lng": 121.802109,
        "ele": 10.75,
        "distanceKm": 11.220700180599115,
        "gradePct": -0.8540690360125195,
        "smoothedEle": 10.374859148965733,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14244,
        "lng": 121.80244,
        "ele": 9.5,
        "distanceKm": 11.272611482646052,
        "gradePct": -1.5989743533699277,
        "smoothedEle": 9.186882754616072,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142573,
        "lng": 121.802562,
        "ele": 10.25,
        "distanceKm": 11.291834474302847,
        "gradePct": -2.012690462420128,
        "smoothedEle": 8.608938086928088,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142637,
        "lng": 121.802817,
        "ele": 5,
        "distanceKm": 11.318470952365352,
        "gradePct": -1.7486120390012756,
        "smoothedEle": 8.64530451008193,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142573,
        "lng": 121.802562,
        "ele": 10.25,
        "distanceKm": 11.345107430427857,
        "gradePct": -0.9741052236423184,
        "smoothedEle": 8.842200479267989,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14244,
        "lng": 121.80244,
        "ele": 9.5,
        "distanceKm": 11.364330422084652,
        "gradePct": 0.23598243188284665,
        "smoothedEle": 9.612375063523919,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.142219,
        "lng": 121.802186,
        "ele": 11.75,
        "distanceKm": 11.39979294020781,
        "gradePct": 2.2809371739880033,
        "smoothedEle": 10.900740846752024,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.141738,
        "lng": 121.801982,
        "ele": 11,
        "distanceKm": 11.457084306208657,
        "gradePct": 1.959419270628871,
        "smoothedEle": 11.281476657180152,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.141321,
        "lng": 121.80176,
        "ele": 11.5,
        "distanceKm": 11.508556594335328,
        "gradePct": 0.5327777097400032,
        "smoothedEle": 11.491758343557029,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140839,
        "lng": 121.801872,
        "ele": 12,
        "distanceKm": 11.563325545039188,
        "gradePct": 0.6429730152976175,
        "smoothedEle": 11.949947241638384,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140394,
        "lng": 121.801841,
        "ele": 12.25,
        "distanceKm": 11.6129056531362,
        "gradePct": 0.7763120652792043,
        "smoothedEle": 12.30445398810978,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140163,
        "lng": 121.801711,
        "ele": 12.5,
        "distanceKm": 11.64173302732645,
        "gradePct": 1.4699359117877648,
        "smoothedEle": 13.239243360798095,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140072,
        "lng": 121.801545,
        "ele": 12.75,
        "distanceKm": 11.661267822364895,
        "gradePct": 2.152961759727319,
        "smoothedEle": 14.085694399432036,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.139998,
        "lng": 121.801371,
        "ele": 16.25,
        "distanceKm": 11.680619510181819,
        "gradePct": 2.923046923390922,
        "smoothedEle": 14.996649145859667,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140116499999998,
        "lng": 121.8009545,
        "ele": 16.999999999999986,
        "distanceKm": 11.724567004655656,
        "gradePct": 4.317401849225672,
        "smoothedEle": 17.000000145576198,
        "gradeBand": "hard"
      },
      {
        "lat": 25.140235,
        "lng": 121.800538,
        "ele": 17.75,
        "distanceKm": 11.768514460309172,
        "gradePct": 2.1400827635710784,
        "smoothedEle": 16.56690292388939,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140225,
        "lng": 121.800097,
        "ele": 14.25,
        "distanceKm": 11.812920172605672,
        "gradePct": -1.9759023449976618,
        "smoothedEle": 14.493175778510706,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139976,
        "lng": 121.799421,
        "ele": 8.75,
        "distanceKm": 11.886384745103836,
        "gradePct": -6.357276019146097,
        "smoothedEle": 9.37509250009501,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13995111692384,
        "lng": 121.79887953102109,
        "ele": 8.289316133518323,
        "distanceKm": 11.940960208314825,
        "gradePct": -3.984838751180529,
        "smoothedEle": 8.554861589999017,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139946,
        "lng": 121.798336,
        "ele": 9,
        "distanceKm": 11.995676022795937,
        "gradePct": -0.39636481743068297,
        "smoothedEle": 8.839086299724817,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139938,
        "lng": 121.797779,
        "ele": 9,
        "distanceKm": 12.051751750905662,
        "gradePct": 0.4528375936656451,
        "smoothedEle": 9.063756524480326,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140082,
        "lng": 121.797319,
        "ele": 9.25,
        "distanceKm": 12.100746531321402,
        "gradePct": 0.731999991301282,
        "smoothedEle": 9.591401538432459,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140098,
        "lng": 121.797124,
        "ele": 9.75,
        "distanceKm": 12.120456038131849,
        "gradePct": 1.1173163925808187,
        "smoothedEle": 10.055685069951634,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140033,
        "lng": 121.796942,
        "ele": 10.75,
        "distanceKm": 12.140150658523174,
        "gradePct": 1.5452571727653732,
        "smoothedEle": 10.562533337188968,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.139803,
        "lng": 121.79668,
        "ele": 11.75,
        "distanceKm": 12.176887985273252,
        "gradePct": 1.7697821609271118,
        "smoothedEle": 11.104241168836266,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.139608,
        "lng": 121.796335,
        "ele": 10.75,
        "distanceKm": 12.21782961839895,
        "gradePct": 0.9693962410235828,
        "smoothedEle": 10.963212516359032,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.139591,
        "lng": 121.795668,
        "ele": 10.25,
        "distanceKm": 12.284997891193958,
        "gradePct": -0.34835367212314716,
        "smoothedEle": 10.727951896288904,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139675,
        "lng": 121.795132,
        "ele": 12,
        "distanceKm": 12.33975531081951,
        "gradePct": 1.109662719272038,
        "smoothedEle": 11.996079275579053,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13972,
        "lng": 121.79453,
        "ele": 14,
        "distanceKm": 12.400560125433966,
        "gradePct": 3.674838514116152,
        "smoothedEle": 14.76319627791366,
        "gradeBand": "hard"
      },
      {
        "lat": 25.139668,
        "lng": 121.794023,
        "ele": 18.75,
        "distanceKm": 12.451922309359478,
        "gradePct": 6.139478486275177,
        "smoothedEle": 18.68925583232446,
        "gradeBand": "steep"
      },
      {
        "lat": 25.139595,
        "lng": 121.793548,
        "ele": 23,
        "distanceKm": 12.500420946343311,
        "gradePct": 7.359517119067391,
        "smoothedEle": 22.116379608603236,
        "gradeBand": "steep"
      },
      {
        "lat": 25.139633,
        "lng": 121.793115,
        "ele": 23.75,
        "distanceKm": 12.544211993624167,
        "gradePct": 4.43797200416048,
        "smoothedEle": 22.537861177075683,
        "gradeBand": "hard"
      },
      {
        "lat": 25.139792,
        "lng": 121.792831,
        "ele": 21,
        "distanceKm": 12.5778253613581,
        "gradePct": -0.4601023626532149,
        "smoothedEle": 20.05957533105788,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140007,
        "lng": 121.792661,
        "ele": 15.75,
        "distanceKm": 12.607225709449507,
        "gradePct": -4.823541969330008,
        "smoothedEle": 17.358332355777474,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14036543896055,
        "lng": 121.79253710585274,
        "ele": 14.550725250537198,
        "distanceKm": 12.648987990674174,
        "gradePct": -7.664183395462194,
        "smoothedEle": 14.521547463004964,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140726,
        "lng": 121.792419,
        "ele": 13.25,
        "distanceKm": 12.690806154757045,
        "gradePct": -5.3170093246774,
        "smoothedEle": 13.549917644753927,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141045,
        "lng": 121.792307,
        "ele": 13,
        "distanceKm": 12.728025938160087,
        "gradePct": -2.762602188409237,
        "smoothedEle": 13.182833820663502,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141109,
        "lng": 121.792274,
        "ele": 13,
        "distanceKm": 12.735879522812732,
        "gradePct": -2.204589589543183,
        "smoothedEle": 13.207376272703016,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141202,
        "lng": 121.792178,
        "ele": 13.25,
        "distanceKm": 12.750033017127983,
        "gradePct": -1.2456607113622082,
        "smoothedEle": 13.251605942438173,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14138025,
        "lng": 121.79177325,
        "ele": 13.562499999999996,
        "distanceKm": 12.795340856348687,
        "gradePct": 0.05730638532042518,
        "smoothedEle": 13.562500083582144,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1415585,
        "lng": 121.7913685,
        "ele": 13.874999999999993,
        "distanceKm": 12.840648642076818,
        "gradePct": 0.6527203131788492,
        "smoothedEle": 13.875000083582131,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.14173675,
        "lng": 121.79096375,
        "ele": 14.187500000000004,
        "distanceKm": 12.885956374312382,
        "gradePct": 0.6893946066061989,
        "smoothedEle": 14.18750008358294,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.141915,
        "lng": 121.790559,
        "ele": 14.5,
        "distanceKm": 12.931264053054866,
        "gradePct": 0.4173257512244529,
        "smoothedEle": 14.2275977969599,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.142171,
        "lng": 121.790005,
        "ele": 13.5,
        "distanceKm": 12.993874962839818,
        "gradePct": -0.10664344626123638,
        "smoothedEle": 14.087864661169668,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142393,
        "lng": 121.789613,
        "ele": 15,
        "distanceKm": 13.040419068160563,
        "gradePct": 0.017888423104262037,
        "smoothedEle": 14.225054334098603,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.142789,
        "lng": 121.789171,
        "ele": 13,
        "distanceKm": 13.103016422579866,
        "gradePct": -0.8829739807851184,
        "smoothedEle": 13.231835314150482,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143149481952896,
        "lng": 121.7887129524214,
        "ele": 12.269041827236011,
        "distanceKm": 13.164111011311581,
        "gradePct": -1.9765319652644973,
        "smoothedEle": 11.87260730380599,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143508,
        "lng": 121.788253,
        "ele": 9.5,
        "distanceKm": 13.225207614491165,
        "gradePct": -2.6495553094118756,
        "smoothedEle": 10.088571965206311,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143680258780098,
        "lng": 121.78776426595701,
        "ele": 9.711604498406942,
        "distanceKm": 13.278000394894343,
        "gradePct": -1.6196360132823515,
        "smoothedEle": 9.84739798769729,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143831,
        "lng": 121.787266,
        "ele": 10.5,
        "distanceKm": 13.330881965366297,
        "gradePct": 0.7747238222517999,
        "smoothedEle": 10.83737357309686,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.144012,
        "lng": 121.786724,
        "ele": 13,
        "distanceKm": 13.389032896365734,
        "gradePct": 4.04203854199814,
        "smoothedEle": 14.0959717555801,
        "gradeBand": "hard"
      },
      {
        "lat": 25.144296,
        "lng": 121.78613,
        "ele": 23,
        "distanceKm": 13.456651194003992,
        "gradePct": 8.449452849255886,
        "smoothedEle": 20.730854233422562,
        "gradeBand": "steep"
      },
      {
        "lat": 25.14455166666667,
        "lng": 121.78572533333333,
        "ele": 20.4166666666667,
        "distanceKm": 13.50632391799184,
        "gradePct": 4.624054186282386,
        "smoothedEle": 20.416665763006733,
        "gradeBand": "hard"
      },
      {
        "lat": 25.144807333333333,
        "lng": 121.78532066666666,
        "ele": 17.8333333333333,
        "distanceKm": 13.555996572018921,
        "gradePct": -2.8332885992777035,
        "smoothedEle": 17.833332429671273,
        "gradeBand": "descent"
      },
      {
        "lat": 25.145063,
        "lng": 121.784916,
        "ele": 15.25,
        "distanceKm": 13.605669156085069,
        "gradePct": -3.5377708772567,
        "smoothedEle": 16.883036366737183,
        "gradeBand": "descent"
      },
      {
        "lat": 25.145349283577836,
        "lng": 121.78446833107192,
        "ele": 19.63547147418177,
        "distanceKm": 13.660840502349117,
        "gradePct": 0.8814702662752009,
        "smoothedEle": 18.62213250355659,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.145636,
        "lng": 121.784021,
        "ele": 19.5,
        "distanceKm": 13.716011788579548,
        "gradePct": 0.8333769050914335,
        "smoothedEle": 18.042430913841695,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.145733,
        "lng": 121.783893,
        "ele": 17,
        "distanceKm": 13.73281466231866,
        "gradePct": -0.853235778474818,
        "smoothedEle": 16.88547383569241,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146087,
        "lng": 121.78367,
        "ele": 12.75,
        "distanceKm": 13.778127970482911,
        "gradePct": -4.629369027604127,
        "smoothedEle": 13.811118757403602,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14658200154496,
        "lng": 121.78354187089651,
        "ele": 12.285406896480131,
        "distanceKm": 13.834660496109699,
        "gradePct": -4.431913166432774,
        "smoothedEle": 12.328327074118272,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14708100077248,
        "lng": 121.78342943544826,
        "ele": 12.017703448240065,
        "distanceKm": 13.891289170973902,
        "gradePct": -1.448210177887354,
        "smoothedEle": 12.017703435862714,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14758,
        "lng": 121.783317,
        "ele": 11.75,
        "distanceKm": 13.947917836591046,
        "gradePct": 1.387165491575352,
        "smoothedEle": 13.642772458013473,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.147947,
        "lng": 121.783166,
        "ele": 18.25,
        "distanceKm": 13.991464938770488,
        "gradePct": 4.626834892892749,
        "smoothedEle": 16.6495823254347,
        "gradeBand": "hard"
      },
      {
        "lat": 25.148418,
        "lng": 121.7829105,
        "ele": 19.375,
        "distanceKm": 14.049811337952201,
        "gradePct": 5.601486629823775,
        "smoothedEle": 19.375000246071803,
        "gradeBand": "hard"
      },
      {
        "lat": 25.148889,
        "lng": 121.782655,
        "ele": 20.5,
        "distanceKm": 14.108157693387813,
        "gradePct": 2.720023415110094,
        "smoothedEle": 20.149340792183004,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.149272,
        "lng": 121.782334,
        "ele": 20,
        "distanceKm": 14.161614710530893,
        "gradePct": 1.4467590763116485,
        "smoothedEle": 20.978407152403,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.149512,
        "lng": 121.782005,
        "ele": 23,
        "distanceKm": 14.20414473084685,
        "gradePct": 0.8276103838559722,
        "smoothedEle": 20.923693357580667,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.149778,
        "lng": 121.781587,
        "ele": 18,
        "distanceKm": 14.255574452960504,
        "gradePct": -3.2228203250033975,
        "smoothedEle": 17.661908305358814,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15000301647429,
        "lng": 121.78112009871121,
        "ele": 11.360222390960292,
        "distanceKm": 14.308815397666653,
        "gradePct": -8.136398150474918,
        "smoothedEle": 12.491071339065478,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150212008237148,
        "lng": 121.78064354935562,
        "ele": 9.555111195480146,
        "distanceKm": 14.362114707454312,
        "gradePct": -7.471598873461578,
        "smoothedEle": 9.55511052826764,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150421,
        "lng": 121.780167,
        "ele": 7.75,
        "distanceKm": 14.41541394331716,
        "gradePct": -3.956094011658415,
        "smoothedEle": 8.171500360907258,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15056,
        "lng": 121.779733,
        "ele": 7.75,
        "distanceKm": 14.461751167354675,
        "gradePct": -1.987395825466657,
        "smoothedEle": 7.587740093184801,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1506956,
        "lng": 121.77925859999999,
        "ele": 7.1,
        "distanceKm": 14.51182504218077,
        "gradePct": -1.1646658404110535,
        "smoothedEle": 7.099999835562584,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1508312,
        "lng": 121.77878419999999,
        "ele": 6.45,
        "distanceKm": 14.56189886641074,
        "gradePct": -1.136301607714595,
        "smoothedEle": 6.449999835557342,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1509668,
        "lng": 121.7783098,
        "ele": 5.8,
        "distanceKm": 14.611972640042968,
        "gradePct": -1.2980840566494545,
        "smoothedEle": 5.799999835565401,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1511024,
        "lng": 121.7778354,
        "ele": 5.15,
        "distanceKm": 14.662046363079932,
        "gradePct": -1.2980853682844196,
        "smoothedEle": 5.149999835560158,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151238,
        "lng": 121.777361,
        "ele": 4.5,
        "distanceKm": 14.712120035520021,
        "gradePct": -1.6715953170356652,
        "smoothedEle": 4.126491198443375,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151305,
        "lng": 121.776983,
        "ele": 2.75,
        "distanceKm": 14.750889250819867,
        "gradePct": -1.8175413867480739,
        "smoothedEle": 3.4772873636452712,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15123,
        "lng": 121.776504,
        "ele": 3.5,
        "distanceKm": 14.79981778481483,
        "gradePct": -0.08373178007125077,
        "smoothedEle": 4.294218103927992,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151034,
        "lng": 121.776128,
        "ele": 7,
        "distanceKm": 14.843490007589294,
        "gradePct": 3.160914721255534,
        "smoothedEle": 6.762104955844663,
        "gradeBand": "hard"
      },
      {
        "lat": 25.150892,
        "lng": 121.775761,
        "ele": 9.5,
        "distanceKm": 14.883662723005969,
        "gradePct": 4.5982300991479725,
        "smoothedEle": 8.622716708480509,
        "gradeBand": "hard"
      },
      {
        "lat": 25.150883,
        "lng": 121.775282,
        "ele": 9,
        "distanceKm": 14.93188582931481,
        "gradePct": 3.251417556405149,
        "smoothedEle": 9.357778490728661,
        "gradeBand": "hard"
      },
      {
        "lat": 25.150926,
        "lng": 121.7748495,
        "ele": 9.812499999999991,
        "distanceKm": 14.975679981560775,
        "gradePct": 1.5595064950814648,
        "smoothedEle": 9.812500061943942,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.150969,
        "lng": 121.774417,
        "ele": 10.625000000000018,
        "distanceKm": 15.019474118559,
        "gradePct": 1.4564124991181424,
        "smoothedEle": 10.625000061944222,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.151012,
        "lng": 121.7739845,
        "ele": 11.437500000000009,
        "distanceKm": 15.063268240309416,
        "gradePct": 1.7538730616741356,
        "smoothedEle": 11.437500061944512,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.151055,
        "lng": 121.773552,
        "ele": 12.25,
        "distanceKm": 15.107062346811956,
        "gradePct": 2.4011328099233373,
        "smoothedEle": 12.795860848357075,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.151064,
        "lng": 121.773118,
        "ele": 15,
        "distanceKm": 15.150757089307195,
        "gradePct": 3.680520363709152,
        "smoothedEle": 14.885904566652297,
        "gradeBand": "hard"
      },
      {
        "lat": 25.150963,
        "lng": 121.772484,
        "ele": 18.75,
        "distanceKm": 15.215551656915581,
        "gradePct": 6.098644116706129,
        "smoothedEle": 19.300572794772346,
        "gradeBand": "steep"
      },
      {
        "lat": 25.15095,
        "lng": 121.77226,
        "ele": 21,
        "distanceKm": 15.23814417757624,
        "gradePct": 6.638263628765856,
        "smoothedEle": 20.920856780193148,
        "gradeBand": "steep"
      },
      {
        "lat": 25.15097,
        "lng": 121.772177,
        "ele": 22,
        "distanceKm": 15.246789297898633,
        "gradePct": 6.592160567166795,
        "smoothedEle": 21.288274393894863,
        "gradeBand": "steep"
      },
      {
        "lat": 25.151029,
        "lng": 121.772035,
        "ele": 23,
        "distanceKm": 15.262515752379306,
        "gradePct": 6.269587530540304,
        "smoothedEle": 21.95664870932344,
        "gradeBand": "steep"
      },
      {
        "lat": 25.15125,
        "lng": 121.771784,
        "ele": 23,
        "distanceKm": 15.297759864353473,
        "gradePct": 4.491786808054554,
        "smoothedEle": 22.580145921273242,
        "gradeBand": "hard"
      },
      {
        "lat": 25.151507,
        "lng": 121.771205,
        "ele": 21,
        "distanceKm": 15.362667117266295,
        "gradePct": -1.5511673931848708,
        "smoothedEle": 20.408159084983872,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151723,
        "lng": 121.770634,
        "ele": 16,
        "distanceKm": 15.424956381830777,
        "gradePct": -5.0627438079399525,
        "smoothedEle": 16.607326962980594,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151874,
        "lng": 121.770205,
        "ele": 14.75,
        "distanceKm": 15.471285754165592,
        "gradePct": -5.041149216094576,
        "smoothedEle": 14.841108781378106,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152082532436232,
        "lng": 121.76967565471836,
        "ele": 13.583546737158013,
        "distanceKm": 15.529392495462025,
        "gradePct": -2.723722812058221,
        "smoothedEle": 13.714485853904621,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152282266218116,
        "lng": 121.76914182735918,
        "ele": 13.041773368579015,
        "distanceKm": 15.587532363030594,
        "gradePct": -1.4843325604789737,
        "smoothedEle": 13.041773148404886,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152482,
        "lng": 121.768608,
        "ele": 12.5,
        "distanceKm": 15.645672149320113,
        "gradePct": -1.0683210606821378,
        "smoothedEle": 12.457799555228817,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152541,
        "lng": 121.768449,
        "ele": 12.25,
        "distanceKm": 15.662968254334253,
        "gradePct": -1.0483810965816895,
        "smoothedEle": 12.277613339390053,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152552,
        "lng": 121.768365,
        "ele": 12.25,
        "distanceKm": 15.671510997974774,
        "gradePct": -0.9895964788963951,
        "smoothedEle": 12.237553353068837,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152549,
        "lng": 121.7683,
        "ele": 12,
        "distanceKm": 15.678061843868909,
        "gradePct": -0.7991595085202523,
        "smoothedEle": 12.352193156216183,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1525,
        "lng": 121.76817,
        "ele": 12,
        "distanceKm": 15.692235625249246,
        "gradePct": -0.3942978301867313,
        "smoothedEle": 12.60023433037209,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152477,
        "lng": 121.768142,
        "ele": 12,
        "distanceKm": 15.69604130961877,
        "gradePct": -0.2894729091905834,
        "smoothedEle": 12.666833806838767,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152083,
        "lng": 121.767925,
        "ele": 14.25,
        "distanceKm": 15.744994749791212,
        "gradePct": 1.1040576649400902,
        "smoothedEle": 13.568661225861971,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.151624,
        "lng": 121.767669,
        "ele": 13.75,
        "distanceKm": 15.80216875936001,
        "gradePct": 0.4613754967263189,
        "smoothedEle": 13.241090076925868,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.15124,
        "lng": 121.767397,
        "ele": 11.25,
        "distanceKm": 15.852890767427839,
        "gradePct": -1.604364967506884,
        "smoothedEle": 11.919057038843345,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15102952760923,
        "lng": 121.76687481595691,
        "ele": 11.5,
        "distanceKm": 15.910425055674878,
        "gradePct": -1.5789777297217766,
        "smoothedEle": 11.4469178603088,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150858,
        "lng": 121.766327,
        "ele": 11.5,
        "distanceKm": 15.968769839200252,
        "gradePct": 0.02821586301520017,
        "smoothedEle": 11.816965703647844,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.150746,
        "lng": 121.765985,
        "ele": 12.5,
        "distanceKm": 16.005376698470684,
        "gradePct": 1.2981196518309934,
        "smoothedEle": 12.786465455301311,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.150456,
        "lng": 121.765485,
        "ele": 15.5,
        "distanceKm": 16.06514795454074,
        "gradePct": 3.196427926907755,
        "smoothedEle": 14.990422072070125,
        "gradeBand": "hard"
      },
      {
        "lat": 25.150179706414118,
        "lng": 121.76508134947512,
        "ele": 15.882581773927807,
        "distanceKm": 16.116084858797453,
        "gradePct": 2.820194519385576,
        "smoothedEle": 16.00150395751941,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.149903,
        "lng": 121.764678,
        "ele": 16.75,
        "distanceKm": 16.167025383629543,
        "gradePct": 1.799787785500084,
        "smoothedEle": 16.827476247638522,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.149664261340327,
        "lng": 121.76431898997525,
        "ele": 17.80237444439776,
        "distanceKm": 16.211864093122234,
        "gradePct": 1.8763171976988353,
        "smoothedEle": 17.794040254529165,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.149425516137907,
        "lng": 121.76395998573425,
        "ele": 18.824531701985023,
        "distanceKm": 16.256702821157813,
        "gradePct": 2.1480408840596765,
        "smoothedEle": 18.808142519976464,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.149186758068954,
        "lng": 121.76360099286713,
        "ele": 19.78726585099251,
        "distanceKm": 16.30154153065076,
        "gradePct": 2.215743263912547,
        "smoothedEle": 19.7872655767638,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.148948,
        "lng": 121.763242,
        "ele": 20.75,
        "distanceKm": 16.346380297112436,
        "gradePct": 1.9097904802415837,
        "smoothedEle": 20.484471983856373,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.148666,
        "lng": 121.762817,
        "ele": 20.75,
        "distanceKm": 16.399420246897183,
        "gradePct": 1.3295388325001116,
        "smoothedEle": 21.070482874665725,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.148514,
        "lng": 121.762363,
        "ele": 22,
        "distanceKm": 16.448142986950664,
        "gradePct": 1.3851801273651017,
        "smoothedEle": 21.889127156852417,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.148245,
        "lng": 121.762041,
        "ele": 22.75,
        "distanceKm": 16.49224697854581,
        "gradePct": 1.8338800880672204,
        "smoothedEle": 22.82510924183651,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.147801622003843,
        "lng": 121.76184389222617,
        "ele": 23.965287788068334,
        "distanceKm": 16.545390706944946,
        "gradePct": 2.0209703905558705,
        "smoothedEle": 23.863853467391767,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.147349,
        "lng": 121.76167,
        "ele": 24.75,
        "distanceKm": 16.598676777967857,
        "gradePct": 1.8771929058952759,
        "smoothedEle": 24.827978633411643,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.146925,
        "lng": 121.761595,
        "ele": 25.75,
        "distanceKm": 16.646424060749897,
        "gradePct": 1.2233518071573184,
        "smoothedEle": 25.105902138281575,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.14649,
        "lng": 121.76152,
        "ele": 24.25,
        "distanceKm": 16.695379490666078,
        "gradePct": -0.6074676287004037,
        "smoothedEle": 24.16085193046878,
        "gradeBand": "descent"
      },
      {
        "lat": 25.145968,
        "lng": 121.761525,
        "ele": 22,
        "distanceKm": 16.753425504429643,
        "gradePct": -2.352309499849474,
        "smoothedEle": 22.618434683209106,
        "gradeBand": "descent"
      },
      {
        "lat": 25.145598,
        "lng": 121.7615725,
        "ele": 22.49999999999998,
        "distanceKm": 16.79484456920996,
        "gradePct": -1.6711782178467633,
        "smoothedEle": 22.49999999581742,
        "gradeBand": "descent"
      },
      {
        "lat": 25.145228,
        "lng": 121.76162,
        "ele": 23,
        "distanceKm": 16.836263635663308,
        "gradePct": -0.1732252071767608,
        "smoothedEle": 22.90124014315492,
        "gradeBand": "descent"
      },
      {
        "lat": 25.144867989152964,
        "lng": 121.7616500219172,
        "ele": 23.15936093435993,
        "distanceKm": 16.876408970260997,
        "gradePct": 0.3619754612384034,
        "smoothedEle": 22.914690659824885,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.144506,
        "lng": 121.761652,
        "ele": 22.5,
        "distanceKm": 16.916660875629127,
        "gradePct": -0.48728380107856867,
        "smoothedEle": 22.224057945085764,
        "gradeBand": "descent"
      },
      {
        "lat": 25.144036,
        "lng": 121.761584,
        "ele": 20.5,
        "distanceKm": 16.96936889038636,
        "gradePct": -2.478325551580476,
        "smoothedEle": 20.434006360642424,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143533,
        "lng": 121.761347,
        "ele": 17.75,
        "distanceKm": 17.030175181892886,
        "gradePct": -4.281640169993999,
        "smoothedEle": 17.483449524219132,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143131,
        "lng": 121.761115,
        "ele": 14.5,
        "distanceKm": 17.080608168504195,
        "gradePct": -5.186708689557389,
        "smoothedEle": 14.701924354189305,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142578,
        "lng": 121.760831,
        "ele": 10.75,
        "distanceKm": 17.148419389124086,
        "gradePct": -5.240475892252981,
        "smoothedEle": 11.236752802493335,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142011,
        "lng": 121.760556,
        "ele": 10,
        "distanceKm": 17.217276239555076,
        "gradePct": -2.858894781000041,
        "smoothedEle": 9.969281312952134,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141931,
        "lng": 121.760517,
        "ele": 10,
        "distanceKm": 17.226999578184387,
        "gradePct": -2.5458148802835643,
        "smoothedEle": 9.78549600319473,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141873,
        "lng": 121.760423,
        "ele": 9.75,
        "distanceKm": 17.238450532076214,
        "gradePct": -2.135087446703638,
        "smoothedEle": 9.611076623267747,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14168286478455,
        "lng": 121.76004059321836,
        "ele": 8.859853860243062,
        "distanceKm": 17.282367677088914,
        "gradePct": -1.883041748627642,
        "smoothedEle": 8.728813358940226,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141497,
        "lng": 121.759656,
        "ele": 7.5,
        "distanceKm": 17.326252289703746,
        "gradePct": -2.1061464638595075,
        "smoothedEle": 7.693474383704905,
        "gradeBand": "descent"
      },
      {
        "lat": 25.141268126101064,
        "lng": 121.75928840782711,
        "ele": 6.81723860976528,
        "distanceKm": 17.37116152160855,
        "gradePct": -1.6480126983687373,
        "smoothedEle": 7.305924113195959,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14103806305053,
        "lng": 121.75892170391356,
        "ele": 7.9086193048825955,
        "distanceKm": 17.41607235653412,
        "gradePct": -0.025023434858515083,
        "smoothedEle": 7.908618992901181,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140808,
        "lng": 121.758555,
        "ele": 9,
        "distanceKm": 17.460983248631567,
        "gradePct": 3.7253319967181544,
        "smoothedEle": 11.119090888605221,
        "gradeBand": "hard"
      },
      {
        "lat": 25.140568,
        "lng": 121.75818,
        "ele": 18,
        "distanceKm": 17.507211985676335,
        "gradePct": 8.519911792386505,
        "smoothedEle": 16.309626290256112,
        "gradeBand": "steep"
      },
      {
        "lat": 25.140583,
        "lng": 121.757831,
        "ele": 20.25,
        "distanceKm": 17.542382374721537,
        "gradePct": 8.729225325866372,
        "smoothedEle": 18.518625795628218,
        "gradeBand": "steep"
      },
      {
        "lat": 25.14075,
        "lng": 121.7573395,
        "ele": 16.000000000000146,
        "distanceKm": 17.595227500315406,
        "gradePct": 1.0359833298854906,
        "smoothedEle": 15.999998653607213,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140917,
        "lng": 121.756848,
        "ele": 11.75,
        "distanceKm": 17.648072562549615,
        "gradePct": -5.427562584812457,
        "smoothedEle": 12.819865794858497,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14092,
        "lng": 121.756682,
        "ele": 12.25,
        "distanceKm": 17.664785631819946,
        "gradePct": -5.100692727045118,
        "smoothedEle": 12.350181771493302,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140911,
        "lng": 121.756579,
        "ele": 11.75,
        "distanceKm": 17.675201909483793,
        "gradePct": -4.661618060692113,
        "smoothedEle": 12.292811035395891,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140703,
        "lng": 121.756053,
        "ele": 14,
        "distanceKm": 17.732980783433977,
        "gradePct": -0.34794094268267134,
        "smoothedEle": 13.38012441961913,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140607,
        "lng": 121.755649,
        "ele": 13.5,
        "distanceKm": 17.7750256185058,
        "gradePct": 0.5287382468997772,
        "smoothedEle": 12.822520257100804,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140527,
        "lng": 121.755209,
        "ele": 10.5,
        "distanceKm": 17.82020110815782,
        "gradePct": -2.455451722938531,
        "smoothedEle": 10.68417801369708,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140312084331693,
        "lng": 121.7549216265,
        "ele": 8.457078279754102,
        "distanceKm": 17.857722978408844,
        "gradePct": -4.40857698838935,
        "smoothedEle": 8.643413169690634,
        "gradeBand": "descent"
      },
      {
        "lat": 25.140066,
        "lng": 121.75466,
        "ele": 7,
        "distanceKm": 17.89570095009856,
        "gradePct": -4.979328996579695,
        "smoothedEle": 6.864542544553016,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139781,
        "lng": 121.754144,
        "ele": 4,
        "distanceKm": 17.95654680296303,
        "gradePct": -4.007839378411839,
        "smoothedEle": 4.699544416520736,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139661999999998,
        "lng": 121.7537675,
        "ele": 4.375000000000017,
        "distanceKm": 17.996689624569576,
        "gradePct": -2.4543639037825176,
        "smoothedEle": 4.374999934610393,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139543,
        "lng": 121.753391,
        "ele": 4.75,
        "distanceKm": 18.036832481050585,
        "gradePct": -0.6520577988196474,
        "smoothedEle": 4.748955461123199,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139541,
        "lng": 121.753274,
        "ele": 4.75,
        "distanceKm": 18.04861206005532,
        "gradePct": -0.1298491823893783,
        "smoothedEle": 4.852026777414623,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139595,
        "lng": 121.753169,
        "ele": 5,
        "distanceKm": 18.06076810427303,
        "gradePct": 0.2929758930515541,
        "smoothedEle": 4.958392164319593,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.139736,
        "lng": 121.752945,
        "ele": 5.25,
        "distanceKm": 18.08823157142391,
        "gradePct": 0.8151310007322098,
        "smoothedEle": 5.258512139410312,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.139494695031576,
        "lng": 121.75252073899124,
        "ele": 5.81626000094919,
        "distanceKm": 18.13866809101309,
        "gradePct": 1.0429123613324534,
        "smoothedEle": 5.807929409627587,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13925669593072,
        "lng": 121.75209417301102,
        "ele": 6.348934801432749,
        "distanceKm": 18.189107461945994,
        "gradePct": 1.0808811838343961,
        "smoothedEle": 6.348934611651834,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13901869682986,
        "lng": 121.75166760703078,
        "ele": 6.881609601916308,
        "distanceKm": 18.239546904134723,
        "gradePct": 1.0642539834837148,
        "smoothedEle": 6.881609412143985,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.138780697729008,
        "lng": 121.75124104105056,
        "ele": 7.4142844023998675,
        "distanceKm": 18.289986417576046,
        "gradePct": 1.0560672319631872,
        "smoothedEle": 7.414284212621546,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13854269862815,
        "lng": 121.75081447507033,
        "ele": 7.946959202883427,
        "distanceKm": 18.340426002272217,
        "gradePct": 1.0568933034019032,
        "smoothedEle": 7.947786576412912,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.138304009013908,
        "lng": 121.75038838322122,
        "ele": 8.482970764645565,
        "distanceKm": 18.390865394003967,
        "gradePct": 1.0594808678006737,
        "smoothedEle": 8.483062064226461,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.138065243038564,
        "lng": 121.74996234380437,
        "ele": 9.019351325429419,
        "distanceKm": 18.44130483775063,
        "gradePct": 1.062238135055642,
        "smoothedEle": 9.01935113419618,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.137826477063225,
        "lng": 121.74953630438752,
        "ele": 9.555731886213273,
        "distanceKm": 18.491744352802346,
        "gradePct": 1.0684252339027163,
        "smoothedEle": 9.560832682643962,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.137587425975823,
        "lng": 121.74911046176047,
        "ele": 10.112695778546644,
        "distanceKm": 18.54218379712651,
        "gradePct": 1.0868051472907099,
        "smoothedEle": 10.115592143100272,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.137348212987913,
        "lng": 121.74868473088023,
        "ele": 10.681347889273322,
        "distanceKm": 18.592623244418576,
        "gradePct": 1.1108484929022142,
        "smoothedEle": 10.681347686455487,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.137109,
        "lng": 121.748259,
        "ele": 11.25,
        "distanceKm": 18.64306276304347,
        "gradePct": 0.05857628287754496,
        "smoothedEle": 10.184027373024986,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.136961,
        "lng": 121.747783,
        "ele": 7.5,
        "distanceKm": 18.693726268896157,
        "gradePct": -2.177265210251293,
        "smoothedEle": 8.493206946582422,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13676,
        "lng": 121.7473895,
        "ele": 7.75000000000001,
        "distanceKm": 18.739208123839994,
        "gradePct": -2.472033167082843,
        "smoothedEle": 7.749999929015941,
        "gradeBand": "descent"
      },
      {
        "lat": 25.136559,
        "lng": 121.746996,
        "ele": 8,
        "distanceKm": 18.78469003557108,
        "gradePct": -1.0933767872166391,
        "smoothedEle": 7.70140123359356,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13637,
        "lng": 121.746675,
        "ele": 7.25,
        "distanceKm": 18.82323639395233,
        "gradePct": -0.775979505497547,
        "smoothedEle": 7.235010256713309,
        "gradeBand": "descent"
      },
      {
        "lat": 25.135993,
        "lng": 121.746388,
        "ele": 6.25,
        "distanceKm": 18.874148214080932,
        "gradePct": -1.3139880397594137,
        "smoothedEle": 6.398677425092172,
        "gradeBand": "descent"
      },
      {
        "lat": 25.135395,
        "lng": 121.746061,
        "ele": 5.5,
        "distanceKm": 18.94834462094365,
        "gradePct": -1.1036765611588089,
        "smoothedEle": 5.7188786993749545,
        "gradeBand": "descent"
      },
      {
        "lat": 25.134995,
        "lng": 121.74581,
        "ele": 6,
        "distanceKm": 18.99949853089959,
        "gradePct": 0.02435683528696285,
        "smoothedEle": 6.190770815307789,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.134669,
        "lng": 121.74559466666668,
        "ele": 7.083333333333364,
        "distanceKm": 19.041734954207048,
        "gradePct": 1.3038957046148045,
        "smoothedEle": 7.083333172465897,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.134343,
        "lng": 121.74537933333333,
        "ele": 8.166666666666636,
        "distanceKm": 19.08397140721311,
        "gradePct": 2.119132585918929,
        "smoothedEle": 8.166666505805148,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.134017,
        "lng": 121.745164,
        "ele": 9.25,
        "distanceKm": 19.12620788991668,
        "gradePct": 2.0077146412960563,
        "smoothedEle": 8.762921707962944,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1336045,
        "lng": 121.7448895,
        "ele": 8.5,
        "distanceKm": 19.179756537023867,
        "gradePct": 0.441441933121104,
        "smoothedEle": 8.500000180615576,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.133192,
        "lng": 121.744615,
        "ele": 7.75,
        "distanceKm": 19.233305232295205,
        "gradePct": -0.28668479217092313,
        "smoothedEle": 8.441389273525107,
        "gradeBand": "descent"
      },
      {
        "lat": 25.132689,
        "lng": 121.744276,
        "ele": 10.75,
        "distanceKm": 19.298825440242364,
        "gradePct": 1.9064678531691093,
        "smoothedEle": 10.385596456817371,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.132299500000002,
        "lng": 121.7440065,
        "ele": 11.374999999999977,
        "distanceKm": 19.349931572207165,
        "gradePct": 2.4402505875832405,
        "smoothedEle": 11.374999856466735,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13191,
        "lng": 121.743737,
        "ele": 12,
        "distanceKm": 19.401037750102606,
        "gradePct": 0.9904941154784144,
        "smoothedEle": 11.418920401372034,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.131526,
        "lng": 121.743459,
        "ele": 10.25,
        "distanceKm": 19.452090732439615,
        "gradePct": -1.1050347962612241,
        "smoothedEle": 10.271820638099443,
        "gradeBand": "descent"
      },
      {
        "lat": 25.131039,
        "lng": 121.743059,
        "ele": 7.75,
        "distanceKm": 19.51957347112348,
        "gradePct": -3.2143183214321502,
        "smoothedEle": 7.788126484943789,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130728,
        "lng": 121.742839,
        "ele": 6.5,
        "distanceKm": 19.560639186082213,
        "gradePct": -2.4804139049236302,
        "smoothedEle": 7.4767819158561455,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130459,
        "lng": 121.742588,
        "ele": 8.5,
        "distanceKm": 19.599794922647394,
        "gradePct": -0.0246957056444451,
        "smoothedEle": 8.491377898311384,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130328,
        "lng": 121.742047,
        "ele": 11.25,
        "distanceKm": 19.65617161118125,
        "gradePct": 2.7754934122562687,
        "smoothedEle": 10.286146774982555,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.130538849851664,
        "lng": 121.74170378868368,
        "ele": 10,
        "distanceKm": 19.69792638040397,
        "gradePct": 1.9210721044979284,
        "smoothedEle": 10.364032692358002,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13074033346704,
        "lng": 121.74135367980881,
        "ele": 10,
        "distanceKm": 19.739689643751728,
        "gradePct": 0.3113577292832952,
        "smoothedEle": 10.072796101943629,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.130941,
        "lng": 121.741003,
        "ele": 10.25,
        "distanceKm": 19.781452762196828,
        "gradePct": -0.105203300131205,
        "smoothedEle": 10.22810085772784,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13115021458879,
        "lng": 121.74062605848586,
        "ele": 10.433445018313169,
        "distanceKm": 19.825962610281582,
        "gradePct": 0.2702607290888409,
        "smoothedEle": 10.438782454556199,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.131358177492462,
        "lng": 121.74024823894158,
        "ele": 10.636137906883667,
        "distanceKm": 19.870475319818564,
        "gradePct": 0.4242141427675687,
        "smoothedEle": 10.611493120540905,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.131567,
        "lng": 121.739871,
        "ele": 10.75,
        "distanceKm": 19.914987828403035,
        "gradePct": 0.40683652481061067,
        "smoothedEle": 10.793671271825492,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.131422,
        "lng": 121.739869,
        "ele": 11.5,
        "distanceKm": 19.93111237207869,
        "gradePct": 0.3857106574350356,
        "smoothedEle": 10.844474344293037,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 19.93111237207869,
      "elevationGainM": 232.7113004308017,
      "elevationLossM": 233.580281760903,
      "minimumElevationM": 2.5,
      "maximumElevationM": 27.75,
      "maximumSustainedGradePct": 10.116396112934536
    },
    "climbs": [
      {
        "startIndex": 193,
        "endIndex": 232,
        "startDistanceKm": 8.401569846535136,
        "endDistanceKm": 10.109961047646985,
        "distanceKm": 1.7083912011118496,
        "gainM": 30.17788725654543,
        "averageGradePct": 1.766450637120184,
        "maximumGradePct": 10.116396112934536
      },
      {
        "startIndex": 236,
        "endIndex": 327,
        "startDistanceKm": 10.275454426971141,
        "endDistanceKm": 14.161614710530893,
        "distanceKm": 3.886160283559752,
        "gainM": 54.370341818733465,
        "averageGradePct": 1.3990761536199383,
        "maximumGradePct": 8.449452849255886
      }
    ]
  },
  "keelung-nuannuan-hills": {
    "routeId": "keelung-nuannuan-hills",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-26T08:28:25.626Z",
      "reviewStatus": "approved",
      "reviewedAt": "2026-07-28T04:38:44.415Z",
      "reviewerNote": "完整騎乘改為基隆車站、暖暖、東勢街暖東峽谷、七堵再回基隆的 23.8 公里環線；以稽核頁疊加 OpenStreetMap 目視確認道路連續，WayTags 未命中高速公路、樓梯、私人或未鋪裝路段。"
    },
    "waypoints": [
      {
        "name": "基隆車站忠一路口",
        "lat": 25.131422,
        "lng": 121.739869,
        "role": "start"
      },
      {
        "name": "暖暖車站",
        "lat": 25.1014,
        "lng": 121.7377,
        "role": "via"
      },
      {
        "name": "東勢街暖暖壺穴入口",
        "lat": 25.0947,
        "lng": 121.7425,
        "role": "via"
      },
      {
        "name": "暖東峽谷聯外道路",
        "lat": 25.0772,
        "lng": 121.7551,
        "role": "via"
      },
      {
        "name": "七堵車站前站道路",
        "lat": 25.0934,
        "lng": 121.7134,
        "role": "via"
      },
      {
        "name": "基隆車站忠一路口",
        "lat": 25.131422,
        "lng": 121.739869,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 25.131422,
        "lng": 121.739869,
        "ele": 11.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 11.71345567439431,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13120639039722,
        "lng": 121.74025440540305,
        "ele": 11.892440408719585,
        "distanceKm": 0.04560813064822957,
        "gradePct": 0.41020661950342585,
        "smoothedEle": 11.90054324534512,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.130994,
        "lng": 121.740642,
        "ele": 12.25,
        "distanceKm": 0.09121756741843229,
        "gradePct": 0.3008630679638107,
        "smoothedEle": 11.987895646251364,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.130724,
        "lng": 121.741112,
        "ele": 11.5,
        "distanceKm": 0.14725356316273996,
        "gradePct": -0.41361608545292405,
        "smoothedEle": 11.490078535810207,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13049882684541,
        "lng": 121.74151046302089,
        "ele": 10.836849310213838,
        "distanceKm": 0.1945396075442971,
        "gradePct": -0.6402349283120738,
        "smoothedEle": 11.318148109226602,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130278,
        "lng": 121.741912,
        "ele": 12,
        "distanceKm": 0.24183580543926164,
        "gradePct": 0.8459901290116836,
        "smoothedEle": 12.384199379002093,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.129861,
        "lng": 121.741638,
        "ele": 15,
        "distanceKm": 0.29578835891484695,
        "gradePct": 2.86015795542734,
        "smoothedEle": 14.20645278771961,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.129411,
        "lng": 121.74133,
        "ele": 14.5,
        "distanceKm": 0.35465415314917914,
        "gradePct": 1.909801091290229,
        "smoothedEle": 14.726941569532299,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1289455,
        "lng": 121.74102300000001,
        "ele": 15.125,
        "distanceKm": 0.4149402155113781,
        "gradePct": 0.7492071439742707,
        "smoothedEle": 15.12499981131392,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.12848,
        "lng": 121.740716,
        "ele": 15.75,
        "distanceKm": 0.47522633825312216,
        "gradePct": 0.6215431031759733,
        "smoothedEle": 15.484319184222434,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.127927,
        "lng": 121.74035,
        "ele": 14.75,
        "distanceKm": 0.546911348384019,
        "gradePct": -0.4239802815661148,
        "smoothedEle": 14.891574949345516,
        "gradeBand": "descent"
      },
      {
        "lat": 25.127808,
        "lng": 121.740332,
        "ele": 14.75,
        "distanceKm": 0.5602670656392505,
        "gradePct": -0.6096465738784361,
        "smoothedEle": 14.785511851444141,
        "gradeBand": "descent"
      },
      {
        "lat": 25.127704,
        "lng": 121.74036,
        "ele": 14.75,
        "distanceKm": 0.5721699425190939,
        "gradePct": -0.48030793169993496,
        "smoothedEle": 14.985794420048203,
        "gradeBand": "descent"
      },
      {
        "lat": 25.127344,
        "lng": 121.740967,
        "ele": 16.5,
        "distanceKm": 0.6452220087992997,
        "gradePct": 1.1414423452522553,
        "smoothedEle": 16.04698599318292,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.127160585271877,
        "lng": 121.74134434319213,
        "ele": 15.736264111858157,
        "distanceKm": 0.6883385782465268,
        "gradePct": 0.5233867642884517,
        "smoothedEle": 15.744055033314774,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.126968,
        "lng": 121.741716,
        "ele": 15,
        "distanceKm": 0.7314490295263757,
        "gradePct": -0.9489845314396173,
        "smoothedEle": 14.897928140267023,
        "gradeBand": "descent"
      },
      {
        "lat": 25.126678,
        "lng": 121.741522,
        "ele": 14,
        "distanceKm": 0.7691489245173271,
        "gradePct": -1.4041613227901757,
        "smoothedEle": 14.47471752184008,
        "gradeBand": "descent"
      },
      {
        "lat": 25.12624,
        "lng": 121.741238,
        "ele": 14.75,
        "distanceKm": 0.8256243920387041,
        "gradePct": -0.4254650357003752,
        "smoothedEle": 14.586783003205165,
        "gradeBand": "descent"
      },
      {
        "lat": 25.125912,
        "lng": 121.741013,
        "ele": 14.75,
        "distanceKm": 0.8685580161441456,
        "gradePct": 0.21316018839693746,
        "smoothedEle": 14.694511115929734,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.125600130375442,
        "lng": 121.7413523987246,
        "ele": 14.53373899773913,
        "distanceKm": 0.9172414278640912,
        "gradePct": -0.3059762171413692,
        "smoothedEle": 14.264172290472615,
        "gradeBand": "descent"
      },
      {
        "lat": 25.125289065187722,
        "lng": 121.7416926993623,
        "ele": 13.266869498869566,
        "distanceKm": 0.9659250781332261,
        "gradePct": -1.421034717630976,
        "smoothedEle": 13.266869887696705,
        "gradeBand": "descent"
      },
      {
        "lat": 25.124978,
        "lng": 121.742033,
        "ele": 12,
        "distanceKm": 1.0146087897862899,
        "gradePct": -1.9623883899984953,
        "smoothedEle": 12.325055202509647,
        "gradeBand": "descent"
      },
      {
        "lat": 25.12481,
        "lng": 121.74215,
        "ele": 12,
        "distanceKm": 1.0366930284548994,
        "gradePct": -1.303642106747724,
        "smoothedEle": 12.562057022821646,
        "gradeBand": "descent"
      },
      {
        "lat": 25.124229,
        "lng": 121.741933,
        "ele": 15.25,
        "distanceKm": 1.1048911635895349,
        "gradePct": 2.145393820822015,
        "smoothedEle": 14.658442147653902,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.123804733828077,
        "lng": 121.74203908125665,
        "ele": 14.960332714901075,
        "distanceKm": 1.1532612059583989,
        "gradePct": 2.1027797894087428,
        "smoothedEle": 15.174136381717837,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.123373,
        "lng": 121.742106,
        "ele": 15.5,
        "distanceKm": 1.2017383056931517,
        "gradePct": 0.7809416854623852,
        "smoothedEle": 15.34246616254305,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.122937460668524,
        "lng": 121.74215035727721,
        "ele": 15.427936058254422,
        "distanceKm": 1.2503735913136675,
        "gradePct": 0.22746329441910776,
        "smoothedEle": 15.370813550064723,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.122502095501392,
        "lng": 121.7421967679579,
        "ele": 15.133452043690816,
        "distanceKm": 1.299009019130773,
        "gradePct": -0.1995370600856779,
        "smoothedEle": 15.133452046045825,
        "gradeBand": "descent"
      },
      {
        "lat": 25.12206673033426,
        "lng": 121.7422431786386,
        "ele": 14.838968029127212,
        "distanceKm": 1.3476444485472923,
        "gradePct": -0.5302548202534232,
        "smoothedEle": 14.838968031481611,
        "gradeBand": "descent"
      },
      {
        "lat": 25.121631365167133,
        "lng": 121.7422895893193,
        "ele": 14.544484014563606,
        "distanceKm": 1.3962798795628117,
        "gradePct": -0.6022873870845314,
        "smoothedEle": 14.544484016919135,
        "gradeBand": "descent"
      },
      {
        "lat": 25.121196,
        "lng": 121.742336,
        "ele": 14.25,
        "distanceKm": 1.4449153121780978,
        "gradePct": -0.8456797984256951,
        "smoothedEle": 14.00981295677966,
        "gradeBand": "descent"
      },
      {
        "lat": 25.120586,
        "lng": 121.742425,
        "ele": 12.25,
        "distanceKm": 1.5133335858511776,
        "gradePct": -1.6166719310587256,
        "smoothedEle": 12.740333066343227,
        "gradeBand": "descent"
      },
      {
        "lat": 25.12017825586679,
        "lng": 121.74248230458088,
        "ele": 12.892839849653273,
        "distanceKm": 1.5590383198784294,
        "gradePct": -0.854925078564521,
        "smoothedEle": 12.892839841842303,
        "gradeBand": "descent"
      },
      {
        "lat": 25.11977051173358,
        "lng": 121.74253960916177,
        "ele": 13.535679699306545,
        "distanceKm": 1.6047430563358263,
        "gradePct": 0.6600185795691397,
        "smoothedEle": 13.559746262035665,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.11936272010346,
        "lng": 121.7425964958349,
        "ele": 14.26716956730865,
        "distanceKm": 1.6504477429818465,
        "gradePct": 1.674835590555706,
        "smoothedEle": 14.539010542205375,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.118955,
        "lng": 121.742654,
        "ele": 16,
        "distanceKm": 1.6961523746625975,
        "gradePct": 2.8124610324363806,
        "smoothedEle": 16.246855280528063,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.118574,
        "lng": 121.7427,
        "ele": 18.5,
        "distanceKm": 1.7387700855892405,
        "gradePct": 4.341231735071053,
        "smoothedEle": 18.63003789781736,
        "gradeBand": "hard"
      },
      {
        "lat": 25.118187,
        "lng": 121.742764,
        "ele": 21.5,
        "distanceKm": 1.7822823181736194,
        "gradePct": 5.672614479677214,
        "smoothedEle": 21.401187430300492,
        "gradeBand": "hard"
      },
      {
        "lat": 25.117537,
        "lng": 121.742849,
        "ele": 27,
        "distanceKm": 1.8550639930268995,
        "gradePct": 6.379443287567872,
        "smoothedEle": 26.047186016794004,
        "gradeBand": "steep"
      },
      {
        "lat": 25.117006,
        "lng": 121.742882,
        "ele": 26,
        "distanceKm": 1.9142019846926586,
        "gradePct": 2.612022053975211,
        "smoothedEle": 26.050792788421344,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.116659,
        "lng": 121.742874,
        "ele": 25.5,
        "distanceKm": 1.952795083392716,
        "gradePct": -1.014966247134221,
        "smoothedEle": 24.887384535041328,
        "gradeBand": "descent"
      },
      {
        "lat": 25.116134,
        "lng": 121.74278,
        "ele": 21.75,
        "distanceKm": 2.0119346717549274,
        "gradePct": -4.225902449256267,
        "smoothedEle": 21.824752057837895,
        "gradeBand": "descent"
      },
      {
        "lat": 25.115571,
        "lng": 121.742591,
        "ele": 17.75,
        "distanceKm": 2.077365638736395,
        "gradePct": -5.518315753895318,
        "smoothedEle": 18.09664564019364,
        "gradeBand": "descent"
      },
      {
        "lat": 25.115083,
        "lng": 121.742323,
        "ele": 16,
        "distanceKm": 2.137967350716165,
        "gradePct": -2.791804375246323,
        "smoothedEle": 17.54966534731213,
        "gradeBand": "descent"
      },
      {
        "lat": 25.11467,
        "lng": 121.742039,
        "ele": 21.25,
        "distanceKm": 2.192065243015779,
        "gradePct": 2.9074344861813315,
        "smoothedEle": 20.871404107970346,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1145,
        "lng": 121.741978,
        "ele": 23.25,
        "distanceKm": 2.211941094162412,
        "gradePct": 4.62003011882771,
        "smoothedEle": 22.404603836997968,
        "gradeBand": "hard"
      },
      {
        "lat": 25.114249,
        "lng": 121.741691,
        "ele": 23.5,
        "distanceKm": 2.2521150346116854,
        "gradePct": 6.745403294901633,
        "smoothedEle": 25.163769953329815,
        "gradeBand": "steep"
      },
      {
        "lat": 25.114147,
        "lng": 121.741631,
        "ele": 24.75,
        "distanceKm": 2.264965410828317,
        "gradePct": 7.05437773126347,
        "smoothedEle": 26.26178793562902,
        "gradeBand": "steep"
      },
      {
        "lat": 25.114081,
        "lng": 121.741691,
        "ele": 27.25,
        "distanceKm": 2.274470812200763,
        "gradePct": 7.282925594916173,
        "smoothedEle": 27.073989964578917,
        "gradeBand": "steep"
      },
      {
        "lat": 25.11388391341495,
        "lng": 121.74137791475928,
        "ele": 31.79463685567513,
        "distanceKm": 2.312862668191133,
        "gradePct": 7.895686263070645,
        "smoothedEle": 30.363584260544336,
        "gradeBand": "steep"
      },
      {
        "lat": 25.113679,
        "lng": 121.741071,
        "ele": 32.25,
        "distanceKm": 2.3512561464152593,
        "gradePct": 6.119620295047445,
        "smoothedEle": 31.224401381893312,
        "gradeBand": "steep"
      },
      {
        "lat": 25.113435,
        "lng": 121.740708,
        "ele": 29,
        "distanceKm": 2.396774182060011,
        "gradePct": 0.9541261043829072,
        "smoothedEle": 29.93917341112813,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.113163,
        "lng": 121.740229,
        "ele": 29.25,
        "distanceKm": 2.4537009897757325,
        "gradePct": -0.8066788727706744,
        "smoothedEle": 30.34869094775336,
        "gradeBand": "descent"
      },
      {
        "lat": 25.112805,
        "lng": 121.739708,
        "ele": 36,
        "distanceKm": 2.5195518804984376,
        "gradePct": 5.9125965131418905,
        "smoothedEle": 36.01562711789799,
        "gradeBand": "hard"
      },
      {
        "lat": 25.112524,
        "lng": 121.73931,
        "ele": 40.75,
        "distanceKm": 2.5703662149823665,
        "gradePct": 10.797020142321083,
        "smoothedEle": 42.57987191114467,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.112262,
        "lng": 121.738963,
        "ele": 51.75,
        "distanceKm": 2.6158565519432506,
        "gradePct": 12.628162161268182,
        "smoothedEle": 48.325780049220604,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.11195225,
        "lng": 121.7385855,
        "ele": 50.00000000000001,
        "distanceKm": 2.667149296671475,
        "gradePct": 7.835693326842816,
        "smoothedEle": 50.000000624438385,
        "gradeBand": "steep"
      },
      {
        "lat": 25.1116425,
        "lng": 121.738208,
        "ele": 48.24999999999999,
        "distanceKm": 2.718442112764086,
        "gradePct": -0.1601734097059547,
        "smoothedEle": 48.25000062442725,
        "gradeBand": "descent"
      },
      {
        "lat": 25.11133275,
        "lng": 121.7378305,
        "ele": 46.5,
        "distanceKm": 2.7697350002198116,
        "gradePct": -3.4117813847330507,
        "smoothedEle": 46.50000062442308,
        "gradeBand": "descent"
      },
      {
        "lat": 25.111023,
        "lng": 121.737453,
        "ele": 44.75,
        "distanceKm": 2.821027959038175,
        "gradePct": -5.301191727696387,
        "smoothedEle": 42.86058553469899,
        "gradeBand": "descent"
      },
      {
        "lat": 25.11093,
        "lng": 121.737329,
        "ele": 41.25,
        "distanceKm": 2.8372395381731863,
        "gradePct": -6.409775324750585,
        "smoothedEle": 41.19889867336033,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110861,
        "lng": 121.737199,
        "ele": 38.25,
        "distanceKm": 2.8524116403265127,
        "gradePct": -7.331935222900982,
        "smoothedEle": 39.75910016905225,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110781,
        "lng": 121.736905,
        "ele": 36.25,
        "distanceKm": 2.8833210160645115,
        "gradePct": -8.489487938762878,
        "smoothedEle": 37.04653727434644,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110748,
        "lng": 121.736548,
        "ele": 35.5,
        "distanceKm": 2.919452705708858,
        "gradePct": -7.000225671708785,
        "smoothedEle": 35.97212960427488,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110767000000003,
        "lng": 121.7361715,
        "ele": 36.25,
        "distanceKm": 2.957419788257877,
        "gradePct": -3.0695922007646788,
        "smoothedEle": 36.25000002205897,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110786,
        "lng": 121.735795,
        "ele": 37,
        "distanceKm": 2.995386864924504,
        "gradePct": -0.368061455426712,
        "smoothedEle": 36.319687157534,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110835,
        "lng": 121.735313,
        "ele": 35.25,
        "distanceKm": 3.044222364356978,
        "gradePct": -0.4557224017856991,
        "smoothedEle": 35.697689379965844,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1108,
        "lng": 121.73489,
        "ele": 35.25,
        "distanceKm": 3.086989940253125,
        "gradePct": -1.4063306115128558,
        "smoothedEle": 34.89794430787897,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110761,
        "lng": 121.734557,
        "ele": 34.25,
        "distanceKm": 3.120797639122265,
        "gradePct": -1.6986333837908616,
        "smoothedEle": 34.29740713838625,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110677,
        "lng": 121.734338,
        "ele": 33.75,
        "distanceKm": 3.144744566797297,
        "gradePct": -2.2876360074196835,
        "smoothedEle": 33.40028829188574,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110461357166344,
        "lng": 121.73397410271821,
        "ele": 31.503720482749518,
        "distanceKm": 3.188532807487534,
        "gradePct": -3.368908903676094,
        "smoothedEle": 31.501628950855032,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110246,
        "lng": 121.73361,
        "ele": 29.25,
        "distanceKm": 3.2323210319303106,
        "gradePct": -3.7188949764137296,
        "smoothedEle": 30.146813657512386,
        "gradeBand": "descent"
      },
      {
        "lat": 25.109747,
        "lng": 121.733944,
        "ele": 30.75,
        "distanceKm": 3.297202964225347,
        "gradePct": -1.000453982426822,
        "smoothedEle": 30.232918808386433,
        "gradeBand": "descent"
      },
      {
        "lat": 25.109338,
        "lng": 121.734132,
        "ele": 29.75,
        "distanceKm": 3.346463827460079,
        "gradePct": 0.6099777353926217,
        "smoothedEle": 30.775560370643433,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.109026,
        "lng": 121.734292,
        "ele": 32.25,
        "distanceKm": 3.3847146525147114,
        "gradePct": 2.335098334885961,
        "smoothedEle": 32.55144383964271,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.108733,
        "lng": 121.734567,
        "ele": 36,
        "distanceKm": 3.4274715311035218,
        "gradePct": 4.050302648370735,
        "smoothedEle": 34.6166500923819,
        "gradeBand": "hard"
      },
      {
        "lat": 25.108482,
        "lng": 121.734823,
        "ele": 35,
        "distanceKm": 3.4654632548718625,
        "gradePct": 3.9554027585305995,
        "smoothedEle": 35.613055711826746,
        "gradeBand": "hard"
      },
      {
        "lat": 25.108254,
        "lng": 121.7351225,
        "ele": 36,
        "distanceKm": 3.5048603887381726,
        "gradePct": 2.4754937902793634,
        "smoothedEle": 35.99999978478234,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.108026,
        "lng": 121.735422,
        "ele": 37,
        "distanceKm": 3.544257565648014,
        "gradePct": 1.5762352742991215,
        "smoothedEle": 36.63313122786686,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.107731552061004,
        "lng": 121.73569775925735,
        "ele": 36.77622636697562,
        "distanceKm": 3.587186805505876,
        "gradePct": 0.7211311592320364,
        "smoothedEle": 36.54754754825694,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.107423,
        "lng": 121.735955,
        "ele": 35.75,
        "distanceKm": 3.6301753147052347,
        "gradePct": 0.3035875661323499,
        "smoothedEle": 36.71041029779188,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.107110056088356,
        "lng": 121.73617922691632,
        "ele": 38.03257116561195,
        "distanceKm": 3.671655621435404,
        "gradePct": 1.0690961712017701,
        "smoothedEle": 37.647606668857556,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.106785,
        "lng": 121.736382,
        "ele": 39,
        "distanceKm": 3.713168151229822,
        "gradePct": 1.7303611592477408,
        "smoothedEle": 38.37633950866591,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1064165,
        "lng": 121.736578,
        "ele": 37.75000000000001,
        "distanceKm": 3.7586484447182,
        "gradePct": 0.3962746080430787,
        "smoothedEle": 37.7500001613035,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.106048,
        "lng": 121.736774,
        "ele": 36.5,
        "distanceKm": 3.804128764015137,
        "gradePct": -1.512061612596908,
        "smoothedEle": 36.705595725945734,
        "gradeBand": "descent"
      },
      {
        "lat": 25.105703,
        "lng": 121.737025,
        "ele": 36,
        "distanceKm": 3.850067852635773,
        "gradePct": -1.4313132389821692,
        "smoothedEle": 36.43685595846143,
        "gradeBand": "descent"
      },
      {
        "lat": 25.105454,
        "lng": 121.737307,
        "ele": 37,
        "distanceKm": 3.8897271166331686,
        "gradePct": -0.48576522082708307,
        "smoothedEle": 36.55054815694479,
        "gradeBand": "descent"
      },
      {
        "lat": 25.10515039437765,
        "lng": 121.73766338926983,
        "ele": 36.41752331950267,
        "distanceKm": 3.9389961026753095,
        "gradePct": -0.16908669661975737,
        "smoothedEle": 36.332538058945815,
        "gradeBand": "descent"
      },
      {
        "lat": 25.104847,
        "lng": 121.73802,
        "ele": 35.5,
        "distanceKm": 3.9882653106284778,
        "gradePct": -0.6075254429746616,
        "smoothedEle": 35.9388321183393,
        "gradeBand": "descent"
      },
      {
        "lat": 25.104587,
        "lng": 121.738363,
        "ele": 36.25,
        "distanceKm": 4.033305658697743,
        "gradePct": 0.3061793195063555,
        "smoothedEle": 36.663896996480965,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1044425,
        "lng": 121.738705,
        "ele": 38.249999999999986,
        "distanceKm": 4.0713060895756215,
        "gradePct": 2.1756478576435523,
        "smoothedEle": 38.24999963123924,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.104298,
        "lng": 121.739047,
        "ele": 40.25,
        "distanceKm": 4.109306557329576,
        "gradePct": 3.8985415807328385,
        "smoothedEle": 40.17609819009558,
        "gradeBand": "hard"
      },
      {
        "lat": 25.10405,
        "lng": 121.739715,
        "ele": 44.25,
        "distanceKm": 4.182001881701775,
        "gradePct": 4.7953310200871,
        "smoothedEle": 43.58745949914474,
        "gradeBand": "hard"
      },
      {
        "lat": 25.103868,
        "lng": 121.740206,
        "ele": 43.75,
        "distanceKm": 4.235423086382073,
        "gradePct": 1.2173393546959133,
        "smoothedEle": 42.61900352865301,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.103778,
        "lng": 121.740358,
        "ele": 42.25,
        "distanceKm": 4.25370964482932,
        "gradePct": -1.0592581452543366,
        "smoothedEle": 41.20053629363165,
        "gradeBand": "descent"
      },
      {
        "lat": 25.103724,
        "lng": 121.740424,
        "ele": 41.25,
        "distanceKm": 4.26266615820691,
        "gradePct": -2.310659348194663,
        "smoothedEle": 40.369435893585546,
        "gradeBand": "descent"
      },
      {
        "lat": 25.103672,
        "lng": 121.740474,
        "ele": 40.25,
        "distanceKm": 4.270332986942426,
        "gradePct": -3.3604539221319647,
        "smoothedEle": 39.67942130738909,
        "gradeBand": "descent"
      },
      {
        "lat": 25.103609,
        "lng": 121.740501,
        "ele": 39,
        "distanceKm": 4.277847326686114,
        "gradePct": -4.389368661429828,
        "smoothedEle": 39.00313073045717,
        "gradeBand": "descent"
      },
      {
        "lat": 25.103512,
        "lng": 121.740521,
        "ele": 37.5,
        "distanceKm": 4.28881964051944,
        "gradePct": -5.448240039941124,
        "smoothedEle": 38.01562248545782,
        "gradeBand": "descent"
      },
      {
        "lat": 25.103423,
        "lng": 121.740507,
        "ele": 35.75,
        "distanceKm": 4.298815899896255,
        "gradePct": -6.142376214164351,
        "smoothedEle": 37.140267315257326,
        "gradeBand": "descent"
      },
      {
        "lat": 25.103357,
        "lng": 121.740488,
        "ele": 34.75,
        "distanceKm": 4.306400042971106,
        "gradePct": -6.630577508483607,
        "smoothedEle": 36.51457551158211,
        "gradeBand": "descent"
      },
      {
        "lat": 25.10271,
        "lng": 121.740303,
        "ele": 34,
        "distanceKm": 4.380715799315918,
        "gradePct": -4.386079806010814,
        "smoothedEle": 34.35888838776401,
        "gradeBand": "descent"
      },
      {
        "lat": 25.102659,
        "lng": 121.740259,
        "ele": 34,
        "distanceKm": 4.3879122401873705,
        "gradePct": -3.7024179232228094,
        "smoothedEle": 34.39487059212127,
        "gradeBand": "descent"
      },
      {
        "lat": 25.102729,
        "lng": 121.739833,
        "ele": 35.25,
        "distanceKm": 4.431507762595337,
        "gradePct": -0.35764040329051155,
        "smoothedEle": 35.42863211355031,
        "gradeBand": "descent"
      },
      {
        "lat": 25.102493,
        "lng": 121.739815,
        "ele": 35.75,
        "distanceKm": 4.457812318215259,
        "gradePct": 1.6883115434679172,
        "smoothedEle": 36.71156428312278,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.102413,
        "lng": 121.739725,
        "ele": 37.75,
        "distanceKm": 4.470511058220384,
        "gradePct": 2.5883362399586667,
        "smoothedEle": 37.243234923028965,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.102337,
        "lng": 121.739387,
        "ele": 39.25,
        "distanceKm": 4.505578733700081,
        "gradePct": 3.5691464388888776,
        "smoothedEle": 38.382934851081465,
        "gradeBand": "hard"
      },
      {
        "lat": 25.10235455754396,
        "lng": 121.73897972379463,
        "ele": 38.54283891081413,
        "distanceKm": 4.546634985847268,
        "gradePct": 2.129595349661202,
        "smoothedEle": 38.296016066319815,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.102414,
        "lng": 121.738578,
        "ele": 37,
        "distanceKm": 4.587622153598233,
        "gradePct": -0.10472010532779345,
        "smoothedEle": 37.69462564923676,
        "gradeBand": "descent"
      },
      {
        "lat": 25.102113,
        "lng": 121.738442,
        "ele": 37.75,
        "distanceKm": 4.623785038909975,
        "gradePct": -0.5571539405253267,
        "smoothedEle": 37.7872369655762,
        "gradeBand": "descent"
      },
      {
        "lat": 25.101621,
        "lng": 121.737972,
        "ele": 39.75,
        "distanceKm": 4.696122424344258,
        "gradePct": 2.5580955752141055,
        "smoothedEle": 40.274489986988605,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.101353,
        "lng": 121.737773,
        "ele": 42.25,
        "distanceKm": 4.732033133732597,
        "gradePct": 3.378043912185587,
        "smoothedEle": 41.448883867354226,
        "gradeBand": "hard"
      },
      {
        "lat": 25.101024,
        "lng": 121.737528,
        "ele": 42.25,
        "distanceKm": 4.776157246492449,
        "gradePct": 2.928111545838423,
        "smoothedEle": 42.5161176540302,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.10071274868299,
        "lng": 121.7371816393903,
        "ele": 43.2963569104363,
        "distanceKm": 4.825291685922064,
        "gradePct": 1.9803191346250983,
        "smoothedEle": 43.20873631701696,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.100375,
        "lng": 121.736865,
        "ele": 44,
        "distanceKm": 4.874556572266211,
        "gradePct": 1.1385990864773246,
        "smoothedEle": 43.61600109255785,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.09997,
        "lng": 121.736488,
        "ele": 43,
        "distanceKm": 4.9334562028999525,
        "gradePct": 0.22883906235023313,
        "smoothedEle": 43.505070108801284,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.099875,
        "lng": 121.736318,
        "ele": 43.75,
        "distanceKm": 4.953571333041288,
        "gradePct": 0.5791576238880033,
        "smoothedEle": 44.021677168494904,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.099439,
        "lng": 121.736842,
        "ele": 47.75,
        "distanceKm": 5.02522658878894,
        "gradePct": 4.656098074125768,
        "smoothedEle": 48.17666775702366,
        "gradeBand": "hard"
      },
      {
        "lat": 25.099179616508167,
        "lng": 121.73717201314439,
        "ele": 51.29855056263533,
        "distanceKm": 5.06922836503345,
        "gradePct": 6.76163910526299,
        "smoothedEle": 51.69120251173088,
        "gradeBand": "steep"
      },
      {
        "lat": 25.098913,
        "lng": 121.737495,
        "ele": 56.25,
        "distanceKm": 5.113236090096521,
        "gradePct": 7.443009918310173,
        "smoothedEle": 54.924398470773866,
        "gradeBand": "steep"
      },
      {
        "lat": 25.098663499999997,
        "lng": 121.737926,
        "ele": 56.5,
        "distanceKm": 5.164745640544538,
        "gradePct": 5.166844100346051,
        "smoothedEle": 56.49999990676866,
        "gradeBand": "hard"
      },
      {
        "lat": 25.098414,
        "lng": 121.738357,
        "ele": 56.75,
        "distanceKm": 5.216255265577628,
        "gradePct": 2.2632588696819704,
        "smoothedEle": 57.280009480635215,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.098271,
        "lng": 121.738497,
        "ele": 58.25,
        "distanceKm": 5.237505605665113,
        "gradePct": 2.3322276579563463,
        "smoothedEle": 57.998994937003204,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.09773,
        "lng": 121.738749,
        "ele": 60.25,
        "distanceKm": 5.302795155181413,
        "gradePct": 2.5974064660727145,
        "smoothedEle": 59.67358967215043,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.097589,
        "lng": 121.738803,
        "ele": 59.75,
        "distanceKm": 5.319389832158345,
        "gradePct": 2.411985129287993,
        "smoothedEle": 59.79804974947743,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.09704,
        "lng": 121.7388545,
        "ele": 59,
        "distanceKm": 5.3806558074165105,
        "gradePct": -0.10574327155956137,
        "smoothedEle": 59.00000000738757,
        "gradeBand": "descent"
      },
      {
        "lat": 25.096491,
        "lng": 121.738906,
        "ele": 58.25,
        "distanceKm": 5.441921784644693,
        "gradePct": -1.399631619415897,
        "smoothedEle": 58.104917230178046,
        "gradeBand": "descent"
      },
      {
        "lat": 25.096074333333334,
        "lng": 121.738931,
        "ele": 57.166666666666664,
        "distanceKm": 5.488321411373996,
        "gradePct": -1.7213405097225865,
        "smoothedEle": 57.16666666918696,
        "gradeBand": "descent"
      },
      {
        "lat": 25.095657666666668,
        "lng": 121.738956,
        "ele": 56.083333333333336,
        "distanceKm": 5.534721038568582,
        "gradePct": -2.12678524893326,
        "smoothedEle": 56.08333333585276,
        "gradeBand": "descent"
      },
      {
        "lat": 25.095241,
        "lng": 121.738981,
        "ele": 55,
        "distanceKm": 5.581120666228291,
        "gradePct": -1.7572861005231306,
        "smoothedEle": 55.55498741183796,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094581,
        "lng": 121.739027,
        "ele": 57,
        "distanceKm": 5.654655460062152,
        "gradePct": 1.5595960152063368,
        "smoothedEle": 57.415938944563514,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.094555,
        "lng": 121.73964649999999,
        "ele": 60.625,
        "distanceKm": 5.717105611442846,
        "gradePct": 4.159338156190992,
        "smoothedEle": 60.624999759941005,
        "gradeBand": "hard"
      },
      {
        "lat": 25.094529,
        "lng": 121.740266,
        "ele": 64.25,
        "distanceKm": 5.7795557760681735,
        "gradePct": 5.284994765454013,
        "smoothedEle": 63.98046028631568,
        "gradeBand": "hard"
      },
      {
        "lat": 25.094522750000003,
        "lng": 121.7407925,
        "ele": 65.99999999999999,
        "distanceKm": 5.832578512927418,
        "gradePct": 4.543637953792485,
        "smoothedEle": 65.99999997629043,
        "gradeBand": "hard"
      },
      {
        "lat": 25.0945165,
        "lng": 121.741319,
        "ele": 67.75000000000001,
        "distanceKm": 5.885601252496327,
        "gradePct": 3.539278479143489,
        "smoothedEle": 67.749999976303,
        "gradeBand": "hard"
      },
      {
        "lat": 25.09451025,
        "lng": 121.74184550000001,
        "ele": 69.50000000000001,
        "distanceKm": 5.938623994773466,
        "gradePct": 3.300470641175051,
        "smoothedEle": 69.49999997631558,
        "gradeBand": "hard"
      },
      {
        "lat": 25.094504,
        "lng": 121.742372,
        "ele": 71.25,
        "distanceKm": 5.991646739757397,
        "gradePct": 3.0688081444656885,
        "smoothedEle": 71.01833764814867,
        "gradeBand": "hard"
      },
      {
        "lat": 25.094546,
        "lng": 121.742544,
        "ele": 72.25,
        "distanceKm": 6.009585602711323,
        "gradePct": 2.6935504755138546,
        "smoothedEle": 71.23514687014547,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.094504,
        "lng": 121.742372,
        "ele": 71.25,
        "distanceKm": 6.027524465665249,
        "gradePct": 1.8846743625684108,
        "smoothedEle": 71.01833764814867,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.09451025,
        "lng": 121.74184550000001,
        "ele": 69.50000000000001,
        "distanceKm": 6.08054721064918,
        "gradePct": -1.2004960891364547,
        "smoothedEle": 69.49999997631558,
        "gradeBand": "descent"
      },
      {
        "lat": 25.0945165,
        "lng": 121.741319,
        "ele": 67.75000000000001,
        "distanceKm": 6.133569952926319,
        "gradePct": -3.0952215675049612,
        "smoothedEle": 67.749999976303,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094522750000003,
        "lng": 121.7407925,
        "ele": 65.99999999999999,
        "distanceKm": 6.186592692495228,
        "gradePct": -3.3004706513663655,
        "smoothedEle": 65.99999997629043,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094529,
        "lng": 121.740266,
        "ele": 64.25,
        "distanceKm": 6.2396154293544726,
        "gradePct": -3.5700105099532404,
        "smoothedEle": 63.98046028631568,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094555,
        "lng": 121.73964649999999,
        "ele": 60.625,
        "distanceKm": 6.3020655939798,
        "gradePct": -4.785665517348238,
        "smoothedEle": 60.624999759941005,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094581,
        "lng": 121.739027,
        "ele": 57,
        "distanceKm": 6.364515745360494,
        "gradePct": -4.347837793198709,
        "smoothedEle": 58.29472325852352,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094084,
        "lng": 121.739055,
        "ele": 59.75,
        "distanceKm": 6.419851581556959,
        "gradePct": -1.0181018013547851,
        "smoothedEle": 58.94322832786105,
        "gradeBand": "descent"
      },
      {
        "lat": 25.0936545,
        "lng": 121.738964,
        "ele": 59.00000000000001,
        "distanceKm": 6.468481069599536,
        "gradePct": 0.6588053806107675,
        "smoothedEle": 59.00000002273199,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.093225,
        "lng": 121.738873,
        "ele": 58.25,
        "distanceKm": 6.517110563703976,
        "gradePct": -0.10745391176391232,
        "smoothedEle": 58.80365121899765,
        "gradeBand": "descent"
      },
      {
        "lat": 25.092875,
        "lng": 121.739036,
        "ele": 59.5,
        "distanceKm": 6.559348672201686,
        "gradePct": 0.6162782135930578,
        "smoothedEle": 59.60561676939665,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.092582,
        "lng": 121.739226,
        "ele": 61,
        "distanceKm": 6.597131526696891,
        "gradePct": 3.129765283375225,
        "smoothedEle": 62.014084831096994,
        "gradeBand": "hard"
      },
      {
        "lat": 25.092279,
        "lng": 121.739454,
        "ele": 66,
        "distanceKm": 6.637902989801572,
        "gradePct": 4.783285393179656,
        "smoothedEle": 63.98171777148023,
        "gradeBand": "hard"
      },
      {
        "lat": 25.091942,
        "lng": 121.739617,
        "ele": 64.25,
        "distanceKm": 6.678813086038574,
        "gradePct": 3.4490637454341146,
        "smoothedEle": 64.29543957584384,
        "gradeBand": "hard"
      },
      {
        "lat": 25.091824,
        "lng": 121.739687,
        "ele": 63,
        "distanceKm": 6.6937077498508755,
        "gradePct": 2.2761834427840464,
        "smoothedEle": 64.07201961865933,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.091436,
        "lng": 121.7401315,
        "ele": 64.49999999999999,
        "distanceKm": 6.7558769196808415,
        "gradePct": 0.38044718073970923,
        "smoothedEle": 64.49999923353188,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.091048,
        "lng": 121.740576,
        "ele": 66,
        "distanceKm": 6.818046191706556,
        "gradePct": 1.420058340495293,
        "smoothedEle": 65.65962655278199,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.09065,
        "lng": 121.740895,
        "ele": 65.75,
        "distanceKm": 6.872731801777849,
        "gradePct": 1.9100075356172037,
        "smoothedEle": 66.72439651677787,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.090298,
        "lng": 121.741084,
        "ele": 69,
        "distanceKm": 6.91625466150911,
        "gradePct": 2.386184518282158,
        "smoothedEle": 68.01239412258579,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.089929,
        "lng": 121.741245,
        "ele": 68.75,
        "distanceKm": 6.960372783071356,
        "gradePct": 2.6931075083315177,
        "smoothedEle": 69.17686463412551,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.08959172464269,
        "lng": 121.74156911979969,
        "ele": 70.1700361852734,
        "distanceKm": 7.010090643815928,
        "gradePct": 2.364225714942131,
        "smoothedEle": 70.19420443376083,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.08926529348202,
        "lng": 121.74190833984977,
        "ele": 71.69002713895505,
        "distanceKm": 7.059935011817924,
        "gradePct": 2.5247167314751753,
        "smoothedEle": 71.6900266643267,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.088938862321346,
        "lng": 121.74224755989985,
        "ele": 73.21001809263672,
        "distanceKm": 7.109779442271391,
        "gradePct": 3.022181071217073,
        "smoothedEle": 73.2100176180209,
        "gradeBand": "hard"
      },
      {
        "lat": 25.088612431160673,
        "lng": 121.74258677994992,
        "ele": 74.73000904631836,
        "distanceKm": 7.159623935174676,
        "gradePct": 3.0493172721631616,
        "smoothedEle": 74.73000857169275,
        "gradeBand": "hard"
      },
      {
        "lat": 25.088286,
        "lng": 121.742926,
        "ele": 76.25,
        "distanceKm": 7.20946849052907,
        "gradePct": 2.9115253695037597,
        "smoothedEle": 76.11206060742596,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.088192,
        "lng": 121.743016,
        "ele": 77,
        "distanceKm": 7.223303107624444,
        "gradePct": 2.717221587864425,
        "smoothedEle": 76.33963880712135,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.087807,
        "lng": 121.743203,
        "ele": 76.375,
        "distanceKm": 7.270072123747176,
        "gradePct": 1.3552920525610734,
        "smoothedEle": 76.37500007454845,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.087422,
        "lng": 121.74339,
        "ele": 75.75,
        "distanceKm": 7.316841163725414,
        "gradePct": 0.05608942652543211,
        "smoothedEle": 76.28942984107576,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.087118,
        "lng": 121.743608,
        "ele": 77,
        "distanceKm": 7.357147869164172,
        "gradePct": 0.13306866681458066,
        "smoothedEle": 76.49829692958478,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.086813,
        "lng": 121.743953,
        "ele": 76.5,
        "distanceKm": 7.405699877401192,
        "gradePct": 0.5428280657587853,
        "smoothedEle": 76.8526423849507,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.086452,
        "lng": 121.744575,
        "ele": 78.25,
        "distanceKm": 7.4800973167676785,
        "gradePct": 1.0322264090077944,
        "smoothedEle": 77.69801450439074,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.086019,
        "lng": 121.744971,
        "ele": 76.5,
        "distanceKm": 7.542615820760132,
        "gradePct": -0.5140565227376205,
        "smoothedEle": 76.75805875730488,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085821,
        "lng": 121.745317,
        "ele": 76.25,
        "distanceKm": 7.583833106396182,
        "gradePct": -0.43594188514002646,
        "smoothedEle": 77.20590561737173,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085768,
        "lng": 121.745477,
        "ele": 78,
        "distanceKm": 7.6009900711019345,
        "gradePct": 0.16188700200969267,
        "smoothedEle": 77.54578227361604,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.085763,
        "lng": 121.745712,
        "ele": 78.75,
        "distanceKm": 7.624662630865859,
        "gradePct": 1.7285636466715948,
        "smoothedEle": 78.75654575373677,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.085787,
        "lng": 121.745795,
        "ele": 78.75,
        "distanceKm": 7.633436952581848,
        "gradePct": 2.606301521606634,
        "smoothedEle": 79.50236309959581,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.085834,
        "lng": 121.745873,
        "ele": 78,
        "distanceKm": 7.6428717559076365,
        "gradePct": 3.682339862974969,
        "smoothedEle": 80.44317948637574,
        "gradeBand": "hard"
      },
      {
        "lat": 25.085891,
        "lng": 121.745944,
        "ele": 79.5,
        "distanceKm": 7.652426676057058,
        "gradePct": 4.510125489967196,
        "smoothedEle": 81.3747842009443,
        "gradeBand": "hard"
      },
      {
        "lat": 25.086017,
        "lng": 121.746023,
        "ele": 82.75,
        "distanceKm": 7.668538508416543,
        "gradePct": 6.193295693755723,
        "smoothedEle": 83.2330176923989,
        "gradeBand": "steep"
      },
      {
        "lat": 25.086098,
        "lng": 121.746088,
        "ele": 84.75,
        "distanceKm": 7.679672751961242,
        "gradePct": 7.6311105471117875,
        "smoothedEle": 84.79181178865667,
        "gradeBand": "steep"
      },
      {
        "lat": 25.086185,
        "lng": 121.746222,
        "ele": 87.75,
        "distanceKm": 7.696276691229832,
        "gradePct": 9.981918144151969,
        "smoothedEle": 87.43432913572516,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.086313,
        "lng": 121.746499,
        "ele": 92.75,
        "distanceKm": 7.727593484917271,
        "gradePct": 13.087643744939118,
        "smoothedEle": 92.09331209304592,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.086386,
        "lng": 121.746683,
        "ele": 95.75,
        "distanceKm": 7.747823342737211,
        "gradePct": 13.42551743635608,
        "smoothedEle": 94.35147663861537,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.086415,
        "lng": 121.746806,
        "ele": 96.5,
        "distanceKm": 7.760623035495468,
        "gradePct": 13.327346775728591,
        "smoothedEle": 95.64744553038885,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.0864025,
        "lng": 121.74728950000001,
        "ele": 97.87500000000001,
        "distanceKm": 7.809334212018699,
        "gradePct": 8.498110316815174,
        "smoothedEle": 97.87499996583438,
        "gradeBand": "steep"
      },
      {
        "lat": 25.08639,
        "lng": 121.747773,
        "ele": 99.25,
        "distanceKm": 7.858045393511476,
        "gradePct": 4.221808628042852,
        "smoothedEle": 99.60826790755252,
        "gradeBand": "hard"
      },
      {
        "lat": 25.086295,
        "lng": 121.748241,
        "ele": 102,
        "distanceKm": 7.906345136435863,
        "gradePct": 0.9007795179372554,
        "smoothedEle": 98.63908952783814,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.085836,
        "lng": 121.748568,
        "ele": 88.5,
        "distanceKm": 7.967085404030349,
        "gradePct": -7.26573668821487,
        "smoothedEle": 92.16113516592598,
        "gradeBand": "descent"
      },
      {
        "lat": 25.08556,
        "lng": 121.74857,
        "ele": 91.5,
        "distanceKm": 7.997775907090708,
        "gradePct": -8.64441327263785,
        "smoothedEle": 90.16662565512028,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085323,
        "lng": 121.748503,
        "ele": 91,
        "distanceKm": 8.024979210753674,
        "gradePct": -6.417130107964221,
        "smoothedEle": 90.23463391427767,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085017,
        "lng": 121.748397,
        "ele": 88.75,
        "distanceKm": 8.060640145655071,
        "gradePct": -1.1704459041786677,
        "smoothedEle": 91.67807657924354,
        "gradeBand": "descent"
      },
      {
        "lat": 25.084663,
        "lng": 121.74822,
        "ele": 96.5,
        "distanceKm": 8.103851112608655,
        "gradePct": 5.637820126726601,
        "smoothedEle": 95.81963379564172,
        "gradeBand": "hard"
      },
      {
        "lat": 25.084396,
        "lng": 121.748007,
        "ele": 101,
        "distanceKm": 8.140478623158991,
        "gradePct": 9.786255654135365,
        "smoothedEle": 100.64825711246635,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.084283,
        "lng": 121.747942,
        "ele": 102.5,
        "distanceKm": 8.1546465602486,
        "gradePct": 10.239957488857721,
        "smoothedEle": 101.67543255146293,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.084175,
        "lng": 121.747913,
        "ele": 104.25,
        "distanceKm": 8.167005654036203,
        "gradePct": 10.035290329291833,
        "smoothedEle": 102.32346936702086,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.084073,
        "lng": 121.747934,
        "ele": 103.75,
        "distanceKm": 8.178543041468007,
        "gradePct": 9.219340433498221,
        "smoothedEle": 102.61332092732285,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.083654,
        "lng": 121.748222,
        "ele": 101.5,
        "distanceKm": 8.23342404580055,
        "gradePct": 1.8418947994492847,
        "smoothedEle": 101.56014339614453,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.08356,
        "lng": 121.748316,
        "ele": 100,
        "distanceKm": 8.247526083849921,
        "gradePct": 0.96502690556051,
        "smoothedEle": 102.12422491811934,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.083383,
        "lng": 121.748949,
        "ele": 107.75,
        "distanceKm": 8.314243571376593,
        "gradePct": 5.932983942128551,
        "smoothedEle": 107.86120450716469,
        "gradeBand": "hard"
      },
      {
        "lat": 25.083357,
        "lng": 121.749108,
        "ele": 109.75,
        "distanceKm": 8.330515117485211,
        "gradePct": 9.174116490076631,
        "smoothedEle": 110.7900828067158,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.08307,
        "lng": 121.749538,
        "ele": 118,
        "distanceKm": 8.384308574926344,
        "gradePct": 9.82614140980194,
        "smoothedEle": 115.11326122043828,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.08272420313313,
        "lng": 121.74972899333359,
        "ele": 114.55926918562449,
        "distanceKm": 8.427302145076567,
        "gradePct": 4.2435293477271765,
        "smoothedEle": 114.45527712088709,
        "gradeBand": "hard"
      },
      {
        "lat": 25.082387,
        "lng": 121.749939,
        "ele": 110.75,
        "distanceKm": 8.470351012936094,
        "gradePct": -1.411139993714121,
        "smoothedEle": 112.58040431959894,
        "gradeBand": "descent"
      },
      {
        "lat": 25.081995,
        "lng": 121.750188,
        "ele": 113.75,
        "distanceKm": 8.520638122545874,
        "gradePct": -0.27960817231769497,
        "smoothedEle": 114.27765677718948,
        "gradeBand": "descent"
      },
      {
        "lat": 25.081953,
        "lng": 121.750569,
        "ele": 117.75,
        "distanceKm": 8.559291659671096,
        "gradePct": 3.6427213050274347,
        "smoothedEle": 116.70478476381768,
        "gradeBand": "hard"
      },
      {
        "lat": 25.081941,
        "lng": 121.75072,
        "ele": 119,
        "distanceKm": 8.57455724533309,
        "gradePct": 4.294695534753246,
        "smoothedEle": 117.01706542621335,
        "gradeBand": "hard"
      },
      {
        "lat": 25.081885,
        "lng": 121.750856,
        "ele": 118.5,
        "distanceKm": 8.589602814576518,
        "gradePct": 3.862116716948279,
        "smoothedEle": 117.0922932724305,
        "gradeBand": "hard"
      },
      {
        "lat": 25.081809,
        "lng": 121.750928,
        "ele": 117,
        "distanceKm": 8.600738115469973,
        "gradePct": 3.111034000316675,
        "smoothedEle": 116.71704080243832,
        "gradeBand": "hard"
      },
      {
        "lat": 25.081515,
        "lng": 121.75103,
        "ele": 114.25,
        "distanceKm": 8.635005402714816,
        "gradePct": 0.6038172498056887,
        "smoothedEle": 115.7836224559164,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.080893,
        "lng": 121.751172,
        "ele": 117.5,
        "distanceKm": 8.70563175835134,
        "gradePct": 1.720389311310348,
        "smoothedEle": 118.30413050312711,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.080689,
        "lng": 121.75127,
        "ele": 120.25,
        "distanceKm": 8.73036967245904,
        "gradePct": 4.046606447749596,
        "smoothedEle": 119.95650314414937,
        "gradeBand": "hard"
      },
      {
        "lat": 25.08051,
        "lng": 121.751434,
        "ele": 122.25,
        "distanceKm": 8.756233989942189,
        "gradePct": 4.584767161617423,
        "smoothedEle": 121.125993835609,
        "gradeBand": "hard"
      },
      {
        "lat": 25.080112,
        "lng": 121.751719,
        "ele": 122,
        "distanceKm": 8.808982478750245,
        "gradePct": 4.8919828060379045,
        "smoothedEle": 123.41992517506296,
        "gradeBand": "hard"
      },
      {
        "lat": 25.079727,
        "lng": 121.751938,
        "ele": 127.25,
        "distanceKm": 8.85714016309032,
        "gradePct": 5.897643973874899,
        "smoothedEle": 127.06304555424474,
        "gradeBand": "hard"
      },
      {
        "lat": 25.079705,
        "lng": 121.752162,
        "ele": 130,
        "distanceKm": 8.879831784135686,
        "gradePct": 6.625433400987555,
        "smoothedEle": 128.777650373328,
        "gradeBand": "steep"
      },
      {
        "lat": 25.079647,
        "lng": 121.752301,
        "ele": 130.75,
        "distanceKm": 8.895244859731447,
        "gradePct": 6.3944275956024175,
        "smoothedEle": 129.2169298774452,
        "gradeBand": "steep"
      },
      {
        "lat": 25.079541,
        "lng": 121.752379,
        "ele": 130,
        "distanceKm": 8.90940941872012,
        "gradePct": 6.239655174674561,
        "smoothedEle": 129.69187828362394,
        "gradeBand": "steep"
      },
      {
        "lat": 25.07943,
        "lng": 121.752544,
        "ele": 129,
        "distanceKm": 8.930109176642048,
        "gradePct": 5.596069508179488,
        "smoothedEle": 130.61422567564085,
        "gradeBand": "hard"
      },
      {
        "lat": 25.07932,
        "lng": 121.753004,
        "ele": 133.25,
        "distanceKm": 8.9780240784981,
        "gradePct": 4.207069141896924,
        "smoothedEle": 132.8481272113304,
        "gradeBand": "hard"
      },
      {
        "lat": 25.079082,
        "lng": 121.753501,
        "ele": 136.5,
        "distanceKm": 9.034643429458754,
        "gradePct": 6.256337463830981,
        "smoothedEle": 137.08196030273584,
        "gradeBand": "steep"
      },
      {
        "lat": 25.07875,
        "lng": 121.753909,
        "ele": 142.25,
        "distanceKm": 9.089881834689182,
        "gradePct": 5.971658768259708,
        "smoothedEle": 139.70647506556193,
        "gradeBand": "hard"
      },
      {
        "lat": 25.078332,
        "lng": 121.753984,
        "ele": 137.5,
        "distanceKm": 9.136971136381272,
        "gradePct": 1.952610166612352,
        "smoothedEle": 139.14516564595036,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.078001,
        "lng": 121.753897,
        "ele": 138.75,
        "distanceKm": 9.174805286599279,
        "gradePct": 0.3131157122256536,
        "smoothedEle": 139.30326627730017,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.077526,
        "lng": 121.753928,
        "ele": 142.75,
        "distanceKm": 9.2277151446774,
        "gradePct": 3.194179672770883,
        "smoothedEle": 142.44967771152673,
        "gradeBand": "hard"
      },
      {
        "lat": 25.077429,
        "lng": 121.753971,
        "ele": 144,
        "distanceKm": 9.239338004061112,
        "gradePct": 3.9338787097860997,
        "smoothedEle": 143.08893497763088,
        "gradeBand": "hard"
      },
      {
        "lat": 25.077387,
        "lng": 121.753999,
        "ele": 144.25,
        "distanceKm": 9.2447935484037,
        "gradePct": 4.211136123113776,
        "smoothedEle": 143.38898991647324,
        "gradeBand": "hard"
      },
      {
        "lat": 25.077259,
        "lng": 121.754177,
        "ele": 144.25,
        "distanceKm": 9.267683603017097,
        "gradePct": 5.513127124365289,
        "smoothedEle": 144.78663344500913,
        "gradeBand": "hard"
      },
      {
        "lat": 25.076997,
        "lng": 121.754789,
        "ele": 149.25,
        "distanceKm": 9.335858562219121,
        "gradePct": 6.925686790402263,
        "smoothedEle": 149.82325246672363,
        "gradeBand": "steep"
      },
      {
        "lat": 25.077009,
        "lng": 121.754939,
        "ele": 150.5,
        "distanceKm": 9.351024433933901,
        "gradePct": 8.037604291934628,
        "smoothedEle": 151.80704576195004,
        "gradeBand": "steep"
      },
      {
        "lat": 25.076944,
        "lng": 121.755176,
        "ele": 154.25,
        "distanceKm": 9.375963880643514,
        "gradePct": 9.797656513416293,
        "smoothedEle": 155.19601901974693,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.07689,
        "lng": 121.755553,
        "ele": 162.25,
        "distanceKm": 9.414404834130579,
        "gradePct": 11.611440099599307,
        "smoothedEle": 159.84973738274527,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.076985,
        "lng": 121.755544,
        "ele": 164,
        "distanceKm": 9.425007184146535,
        "gradePct": 10.669126085569285,
        "smoothedEle": 159.69070213250592,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.07706,
        "lng": 121.755506,
        "ele": 164.25,
        "distanceKm": 9.434183038253853,
        "gradePct": 9.853595952815006,
        "smoothedEle": 159.55306432089614,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.077088,
        "lng": 121.75545,
        "ele": 163.5,
        "distanceKm": 9.440625309017951,
        "gradePct": 9.009656737185683,
        "smoothedEle": 159.45643025943468,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.077118,
        "lng": 121.755091,
        "ele": 152.75,
        "distanceKm": 9.47693506533226,
        "gradePct": 4.426845524970632,
        "smoothedEle": 159.7404375914267,
        "gradeBand": "hard"
      },
      {
        "lat": 25.077088,
        "lng": 121.75545,
        "ele": 163.5,
        "distanceKm": 9.513244821646568,
        "gradePct": -0.2528743060038048,
        "smoothedEle": 159.45643025943468,
        "gradeBand": "descent"
      },
      {
        "lat": 25.07706,
        "lng": 121.755506,
        "ele": 164.25,
        "distanceKm": 9.519687092410667,
        "gradePct": -0.2174391876477849,
        "smoothedEle": 159.55306432089617,
        "gradeBand": "descent"
      },
      {
        "lat": 25.076985,
        "lng": 121.755544,
        "ele": 164,
        "distanceKm": 9.528862946517984,
        "gradePct": 0.05783643557174421,
        "smoothedEle": 159.69070213250592,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.07689,
        "lng": 121.755553,
        "ele": 162.25,
        "distanceKm": 9.53946529653394,
        "gradePct": 0.37590693605042835,
        "smoothedEle": 159.84973738274527,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.076944,
        "lng": 121.755176,
        "ele": 154.25,
        "distanceKm": 9.577906250021005,
        "gradePct": -4.536822167839022,
        "smoothedEle": 155.19601901974696,
        "gradeBand": "descent"
      },
      {
        "lat": 25.077009,
        "lng": 121.754939,
        "ele": 150.5,
        "distanceKm": 9.602845696730618,
        "gradePct": -7.730724281119278,
        "smoothedEle": 151.80704576195004,
        "gradeBand": "descent"
      },
      {
        "lat": 25.076997,
        "lng": 121.754789,
        "ele": 149.25,
        "distanceKm": 9.618011568445398,
        "gradePct": -9.704678994693529,
        "smoothedEle": 149.82325246672366,
        "gradeBand": "descent"
      },
      {
        "lat": 25.077259,
        "lng": 121.754177,
        "ele": 144.25,
        "distanceKm": 9.686186527647422,
        "gradePct": -9.28419463647038,
        "smoothedEle": 144.78663344500913,
        "gradeBand": "descent"
      },
      {
        "lat": 25.077387,
        "lng": 121.753999,
        "ele": 144.25,
        "distanceKm": 9.709076582260819,
        "gradePct": -7.603016052802841,
        "smoothedEle": 143.3889899164732,
        "gradeBand": "descent"
      },
      {
        "lat": 25.077429,
        "lng": 121.753971,
        "ele": 144,
        "distanceKm": 9.714532126603407,
        "gradePct": -7.18945079940195,
        "smoothedEle": 143.08893497763088,
        "gradeBand": "descent"
      },
      {
        "lat": 25.077526,
        "lng": 121.753928,
        "ele": 142.75,
        "distanceKm": 9.726154985987119,
        "gradePct": -6.771956621904731,
        "smoothedEle": 142.44967771152673,
        "gradeBand": "descent"
      },
      {
        "lat": 25.078001,
        "lng": 121.753897,
        "ele": 138.75,
        "distanceKm": 9.77906484406524,
        "gradePct": -6.0095017986128525,
        "smoothedEle": 139.30326627730017,
        "gradeBand": "descent"
      },
      {
        "lat": 25.078332,
        "lng": 121.753984,
        "ele": 137.5,
        "distanceKm": 9.816898994283248,
        "gradePct": -3.8135916092892748,
        "smoothedEle": 139.14516564595036,
        "gradeBand": "descent"
      },
      {
        "lat": 25.07875,
        "lng": 121.753909,
        "ele": 142.25,
        "distanceKm": 9.863988295975338,
        "gradePct": -0.493354253519529,
        "smoothedEle": 139.70647506556193,
        "gradeBand": "descent"
      },
      {
        "lat": 25.079082,
        "lng": 121.753501,
        "ele": 136.5,
        "distanceKm": 9.919226701205766,
        "gradePct": -2.0589728975585686,
        "smoothedEle": 137.11393925927123,
        "gradeBand": "descent"
      },
      {
        "lat": 25.079274,
        "lng": 121.753163,
        "ele": 134.25,
        "distanceKm": 9.959408337618738,
        "gradePct": -5.655314860365045,
        "smoothedEle": 133.99656662078155,
        "gradeBand": "descent"
      },
      {
        "lat": 25.07943,
        "lng": 121.752544,
        "ele": 129,
        "distanceKm": 10.02411729115883,
        "gradePct": -6.293288201734719,
        "smoothedEle": 130.44122919554295,
        "gradeBand": "descent"
      },
      {
        "lat": 25.079647,
        "lng": 121.752301,
        "ele": 130.75,
        "distanceKm": 10.058485137169868,
        "gradePct": -4.903276697853659,
        "smoothedEle": 129.1649136813426,
        "gradeBand": "descent"
      },
      {
        "lat": 25.079705,
        "lng": 121.752162,
        "ele": 130,
        "distanceKm": 10.073898212765629,
        "gradePct": -4.690583965049046,
        "smoothedEle": 128.50985796852277,
        "gradeBand": "descent"
      },
      {
        "lat": 25.079727,
        "lng": 121.751938,
        "ele": 127.25,
        "distanceKm": 10.096589833810995,
        "gradePct": -4.661571782031191,
        "smoothedEle": 127.29211270719505,
        "gradeBand": "descent"
      },
      {
        "lat": 25.079868,
        "lng": 121.751824,
        "ele": 124.75,
        "distanceKm": 10.116022570689122,
        "gradePct": -5.294233368960183,
        "smoothedEle": 125.591748230359,
        "gradeBand": "descent"
      },
      {
        "lat": 25.080272,
        "lng": 121.751619,
        "ele": 122,
        "distanceKm": 10.165462513435898,
        "gradePct": -6.539061839046406,
        "smoothedEle": 122.3293133509899,
        "gradeBand": "descent"
      },
      {
        "lat": 25.080689,
        "lng": 121.75127,
        "ele": 120.25,
        "distanceKm": 10.223646806436822,
        "gradePct": -5.279370826567562,
        "smoothedEle": 119.80927057862321,
        "gradeBand": "descent"
      },
      {
        "lat": 25.081268,
        "lng": 121.751061,
        "ele": 115.25,
        "distanceKm": 10.291382132132076,
        "gradePct": -4.814341573531865,
        "smoothedEle": 116.39235698936106,
        "gradeBand": "descent"
      },
      {
        "lat": 25.081809,
        "lng": 121.750928,
        "ele": 117,
        "distanceKm": 10.353011831361512,
        "gradePct": -1.0428242209267788,
        "smoothedEle": 117.2851254710793,
        "gradeBand": "descent"
      },
      {
        "lat": 25.081885,
        "lng": 121.750856,
        "ele": 118.5,
        "distanceKm": 10.364147132254967,
        "gradePct": -0.21720367042526412,
        "smoothedEle": 117.54902493213699,
        "gradeBand": "descent"
      },
      {
        "lat": 25.081941,
        "lng": 121.75072,
        "ele": 119,
        "distanceKm": 10.379192701498395,
        "gradePct": 0.19366256515353156,
        "smoothedEle": 117.20091629783255,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.081953,
        "lng": 121.750569,
        "ele": 117.75,
        "distanceKm": 10.394458287160388,
        "gradePct": 0.2678665598395336,
        "smoothedEle": 116.70478476381778,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.081995,
        "lng": 121.750188,
        "ele": 113.75,
        "distanceKm": 10.43311182428561,
        "gradePct": -2.719196978702665,
        "smoothedEle": 114.27765677718955,
        "gradeBand": "descent"
      },
      {
        "lat": 25.082387,
        "lng": 121.749939,
        "ele": 110.75,
        "distanceKm": 10.48339893389539,
        "gradePct": -4.5617303831359255,
        "smoothedEle": 112.50248336179428,
        "gradeBand": "descent"
      },
      {
        "lat": 25.082896,
        "lng": 121.749622,
        "ele": 116.5,
        "distanceKm": 10.548380151080053,
        "gradePct": 1.8243645298136848,
        "smoothedEle": 115.56303769801507,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.08307,
        "lng": 121.749538,
        "ele": 118,
        "distanceKm": 10.569496655031356,
        "gradePct": 2.4151755521845444,
        "smoothedEle": 115.4084199866344,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.08331,
        "lng": 121.749205,
        "ele": 111,
        "distanceKm": 10.612355118088491,
        "gradePct": -2.3414639624588545,
        "smoothedEle": 111.52482849575105,
        "gradeBand": "descent"
      },
      {
        "lat": 25.083435220010465,
        "lng": 121.74876224708122,
        "ele": 105.46353061522018,
        "distanceKm": 10.659067537331543,
        "gradePct": -9.993036092093881,
        "smoothedEle": 105.49174721273864,
        "gradeBand": "descent"
      },
      {
        "lat": 25.08356,
        "lng": 121.748316,
        "ele": 100,
        "distanceKm": 10.706101468258924,
        "gradePct": -9.820797269589256,
        "smoothedEle": 102.27070159958829,
        "gradeBand": "descent"
      },
      {
        "lat": 25.083941,
        "lng": 121.748001,
        "ele": 103.5,
        "distanceKm": 10.75902758826706,
        "gradePct": -2.8577599467253196,
        "smoothedEle": 102.63914683507682,
        "gradeBand": "descent"
      },
      {
        "lat": 25.084073,
        "lng": 121.747934,
        "ele": 103.75,
        "distanceKm": 10.77518197518402,
        "gradePct": -1.3907533101473795,
        "smoothedEle": 102.99742168717835,
        "gradeBand": "descent"
      },
      {
        "lat": 25.084175,
        "lng": 121.747913,
        "ele": 104.25,
        "distanceKm": 10.786719362615825,
        "gradePct": -1.1498610371015487,
        "smoothedEle": 102.44819392471602,
        "gradeBand": "descent"
      },
      {
        "lat": 25.084283,
        "lng": 121.747942,
        "ele": 102.5,
        "distanceKm": 10.799078456403429,
        "gradePct": -1.1686042848532066,
        "smoothedEle": 101.58305735958379,
        "gradeBand": "descent"
      },
      {
        "lat": 25.084663,
        "lng": 121.74822,
        "ele": 96.5,
        "distanceKm": 10.8497659999372,
        "gradePct": -6.795873615546706,
        "smoothedEle": 95.7787986634382,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085017,
        "lng": 121.748397,
        "ele": 88.75,
        "distanceKm": 10.892976966890783,
        "gradePct": -10.332085046225425,
        "smoothedEle": 91.67807657924354,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085323,
        "lng": 121.748503,
        "ele": 91,
        "distanceKm": 10.92863790179218,
        "gradePct": -7.963554974878149,
        "smoothedEle": 90.23463391427768,
        "gradeBand": "descent"
      },
      {
        "lat": 25.08556,
        "lng": 121.74857,
        "ele": 91.5,
        "distanceKm": 10.955841205455148,
        "gradePct": -5.035635819038379,
        "smoothedEle": 90.16662565512024,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085836,
        "lng": 121.748568,
        "ele": 88.5,
        "distanceKm": 10.986531708515507,
        "gradePct": -0.1285966300643087,
        "smoothedEle": 92.16113516592607,
        "gradeBand": "descent"
      },
      {
        "lat": 25.086295,
        "lng": 121.748241,
        "ele": 102,
        "distanceKm": 11.047271976109993,
        "gradePct": 8.45104079935493,
        "smoothedEle": 98.63908952783804,
        "gradeBand": "steep"
      },
      {
        "lat": 25.08639,
        "lng": 121.747773,
        "ele": 99.25,
        "distanceKm": 11.09557171903438,
        "gradePct": 6.483014901994447,
        "smoothedEle": 99.6082679075624,
        "gradeBand": "steep"
      },
      {
        "lat": 25.086402500000002,
        "lng": 121.7472895,
        "ele": 97.87499999999997,
        "distanceKm": 11.144282900528598,
        "gradePct": -0.44530441392613956,
        "smoothedEle": 97.87499996581455,
        "gradeBand": "descent"
      },
      {
        "lat": 25.086415,
        "lng": 121.746806,
        "ele": 96.5,
        "distanceKm": 11.192994077050388,
        "gradePct": -4.273141620114374,
        "smoothedEle": 95.28340355083915,
        "gradeBand": "descent"
      },
      {
        "lat": 25.086185,
        "lng": 121.746222,
        "ele": 87.75,
        "distanceKm": 11.257126485951567,
        "gradePct": -10.18378782731363,
        "smoothedEle": 87.00789072616129,
        "gradeBand": "descent"
      },
      {
        "lat": 25.086098,
        "lng": 121.746088,
        "ele": 84.75,
        "distanceKm": 11.273730425220156,
        "gradePct": -12.308210044496292,
        "smoothedEle": 84.0000837797328,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085891,
        "lng": 121.745944,
        "ele": 79.5,
        "distanceKm": 11.300935194306424,
        "gradePct": -12.90140370046986,
        "smoothedEle": 81.35729457544564,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085834,
        "lng": 121.745873,
        "ele": 78,
        "distanceKm": 11.310490114455845,
        "gradePct": -12.600061367046653,
        "smoothedEle": 80.42568986087709,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085787,
        "lng": 121.745795,
        "ele": 78.75,
        "distanceKm": 11.319924917781634,
        "gradePct": -12.167613402853378,
        "smoothedEle": 79.64069040248582,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085763,
        "lng": 121.745712,
        "ele": 78.75,
        "distanceKm": 11.328699239497622,
        "gradePct": -11.716703496264442,
        "smoothedEle": 78.95938006142438,
        "gradeBand": "descent"
      },
      {
        "lat": 25.085768,
        "lng": 121.745477,
        "ele": 78,
        "distanceKm": 11.352371799261546,
        "gradePct": -9.884666189753851,
        "smoothedEle": 77.73675943014928,
        "gradeBand": "descent"
      },
      {
        "lat": 25.08593,
        "lng": 121.745095,
        "ele": 76.25,
        "distanceKm": 11.394850265421441,
        "gradePct": -4.711750657793064,
        "smoothedEle": 77.23666028828205,
        "gradeBand": "descent"
      },
      {
        "lat": 25.08618095345706,
        "lng": 121.74482243112617,
        "ele": 77.83845832281023,
        "distanceKm": 11.433992909551252,
        "gradePct": -1.205562928419799,
        "smoothedEle": 77.48041407531773,
        "gradeBand": "descent"
      },
      {
        "lat": 25.086452,
        "lng": 121.744575,
        "ele": 78.25,
        "distanceKm": 11.473098654299022,
        "gradePct": 0.4079328869313358,
        "smoothedEle": 77.90067497476812,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.086813,
        "lng": 121.743953,
        "ele": 76.5,
        "distanceKm": 11.547496093665508,
        "gradePct": -0.7728874614104796,
        "smoothedEle": 76.85264238495071,
        "gradeBand": "descent"
      },
      {
        "lat": 25.087118,
        "lng": 121.743608,
        "ele": 77,
        "distanceKm": 11.596048101902527,
        "gradePct": -1.0790904534115422,
        "smoothedEle": 76.49829692958477,
        "gradeBand": "descent"
      },
      {
        "lat": 25.087422,
        "lng": 121.74339,
        "ele": 75.75,
        "distanceKm": 11.636354807341284,
        "gradePct": -0.7201592245620415,
        "smoothedEle": 76.2894298410769,
        "gradeBand": "descent"
      },
      {
        "lat": 25.087806999999998,
        "lng": 121.743203,
        "ele": 76.375,
        "distanceKm": 11.68312384731916,
        "gradePct": -0.21762149869184177,
        "smoothedEle": 76.37500007454621,
        "gradeBand": "descent"
      },
      {
        "lat": 25.088192,
        "lng": 121.743016,
        "ele": 77,
        "distanceKm": 11.729892863442254,
        "gradePct": 0.04798214287335174,
        "smoothedEle": 76.3708974150615,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.088524917687756,
        "lng": 121.74267772201748,
        "ele": 75.13750594975546,
        "distanceKm": 11.780200810975037,
        "gradePct": -1.1505581746529185,
        "smoothedEle": 75.2190938127287,
        "gradeBand": "descent"
      },
      {
        "lat": 25.088854438265816,
        "lng": 121.7423352915131,
        "ele": 73.60312946231659,
        "distanceKm": 11.830517059891735,
        "gradePct": -2.7534774242633473,
        "smoothedEle": 73.60312897408343,
        "gradeBand": "descent"
      },
      {
        "lat": 25.089183958843876,
        "lng": 121.74199286100874,
        "ele": 72.06875297487775,
        "distanceKm": 11.88083324516914,
        "gradePct": -3.130029966572433,
        "smoothedEle": 72.06875248665652,
        "gradeBand": "descent"
      },
      {
        "lat": 25.08951347942194,
        "lng": 121.74165043050436,
        "ele": 70.53437648743888,
        "distanceKm": 11.931149366808809,
        "gradePct": -3.0494709712758628,
        "smoothedEle": 70.53437599919289,
        "gradeBand": "descent"
      },
      {
        "lat": 25.089843,
        "lng": 121.741308,
        "ele": 69,
        "distanceKm": 11.981465424807515,
        "gradePct": -2.6683049779333694,
        "smoothedEle": 69.38116936205031,
        "gradeBand": "descent"
      },
      {
        "lat": 25.090298,
        "lng": 121.741084,
        "ele": 69,
        "distanceKm": 12.036860080916346,
        "gradePct": -2.321244207380667,
        "smoothedEle": 68.08224647063294,
        "gradeBand": "descent"
      },
      {
        "lat": 25.09065,
        "lng": 121.740895,
        "ele": 65.75,
        "distanceKm": 12.080382940647606,
        "gradePct": -2.681582577343273,
        "smoothedEle": 66.72439651677789,
        "gradeBand": "descent"
      },
      {
        "lat": 25.091048,
        "lng": 121.740576,
        "ele": 66,
        "distanceKm": 12.135068550718898,
        "gradePct": -2.464628655653394,
        "smoothedEle": 65.65962655278196,
        "gradeBand": "descent"
      },
      {
        "lat": 25.091436,
        "lng": 121.7401315,
        "ele": 64.49999999999997,
        "distanceKm": 12.197237822744613,
        "gradePct": -1.8962200501459487,
        "smoothedEle": 64.49999923353187,
        "gradeBand": "descent"
      },
      {
        "lat": 25.091824,
        "lng": 121.739687,
        "ele": 63,
        "distanceKm": 12.25940699257458,
        "gradePct": -1.258462306648366,
        "smoothedEle": 63.947185597772496,
        "gradeBand": "descent"
      },
      {
        "lat": 25.092279,
        "lng": 121.739454,
        "ele": 66,
        "distanceKm": 12.315176701141432,
        "gradePct": -0.48465296899506594,
        "smoothedEle": 63.85583220611984,
        "gradeBand": "descent"
      },
      {
        "lat": 25.092582,
        "lng": 121.739226,
        "ele": 61,
        "distanceKm": 12.355948164246113,
        "gradePct": -1.9638569673607262,
        "smoothedEle": 62.01408483109704,
        "gradeBand": "descent"
      },
      {
        "lat": 25.092875,
        "lng": 121.739036,
        "ele": 59.5,
        "distanceKm": 12.393731018741317,
        "gradePct": -4.285344467767126,
        "smoothedEle": 59.60561676939667,
        "gradeBand": "descent"
      },
      {
        "lat": 25.093225,
        "lng": 121.738873,
        "ele": 58.25,
        "distanceKm": 12.435969127239028,
        "gradePct": -4.112935905647376,
        "smoothedEle": 58.80365121899766,
        "gradeBand": "descent"
      },
      {
        "lat": 25.0936545,
        "lng": 121.738964,
        "ele": 59,
        "distanceKm": 12.48459862134347,
        "gradePct": -1.1877614192505888,
        "smoothedEle": 59.000000022731975,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094084,
        "lng": 121.739055,
        "ele": 59.75,
        "distanceKm": 12.533228109386046,
        "gradePct": 0.08753401391185664,
        "smoothedEle": 58.94322832786106,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.094581,
        "lng": 121.739027,
        "ele": 57,
        "distanceKm": 12.58856394558251,
        "gradePct": -1.6458905796221106,
        "smoothedEle": 57.34948019063725,
        "gradeBand": "descent"
      },
      {
        "lat": 25.095241,
        "lng": 121.738981,
        "ele": 55,
        "distanceKm": 12.662098739416372,
        "gradePct": -2.556727090733697,
        "smoothedEle": 55.55498741183797,
        "gradeBand": "descent"
      },
      {
        "lat": 25.095657666666668,
        "lng": 121.738956,
        "ele": 56.083333333333336,
        "distanceKm": 12.70849836707608,
        "gradePct": -0.7796808765079845,
        "smoothedEle": 56.083333335852736,
        "gradeBand": "descent"
      },
      {
        "lat": 25.096074333333334,
        "lng": 121.738931,
        "ele": 57.166666666666664,
        "distanceKm": 12.754897994270667,
        "gradePct": 1.435957201268513,
        "smoothedEle": 57.16666666918696,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.096491,
        "lng": 121.738906,
        "ele": 58.25,
        "distanceKm": 12.801297620999971,
        "gradePct": 2.103577760032153,
        "smoothedEle": 58.104917230178046,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.09704,
        "lng": 121.7388545,
        "ele": 59.000000000000014,
        "distanceKm": 12.862563598228155,
        "gradePct": 1.6783265478355236,
        "smoothedEle": 59.000000007387584,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.097589,
        "lng": 121.738803,
        "ele": 59.75,
        "distanceKm": 12.92382957348632,
        "gradePct": 1.0980264482934428,
        "smoothedEle": 59.53213066805167,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.09793174688169,
        "lng": 121.73865502548209,
        "ele": 59.50417049282577,
        "distanceKm": 12.96475062889487,
        "gradePct": 0.18744826344248433,
        "smoothedEle": 59.20644390533467,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.098271,
        "lng": 121.738497,
        "ele": 58.25,
        "distanceKm": 13.00569273704109,
        "gradePct": -1.3523679264703978,
        "smoothedEle": 58.02223375882554,
        "gradeBand": "descent"
      },
      {
        "lat": 25.098414,
        "lng": 121.738357,
        "ele": 56.75,
        "distanceKm": 13.026943077128575,
        "gradePct": -2.123513278319408,
        "smoothedEle": 57.38383731229219,
        "gradeBand": "descent"
      },
      {
        "lat": 25.0986635,
        "lng": 121.73792599999999,
        "ele": 56.5,
        "distanceKm": 13.078452702163082,
        "gradePct": -2.3101250270481737,
        "smoothedEle": 56.499999906765105,
        "gradeBand": "descent"
      },
      {
        "lat": 25.098913,
        "lng": 121.737495,
        "ele": 56.25,
        "distanceKm": 13.129962252609682,
        "gradePct": -2.3938618400511387,
        "smoothedEle": 54.93817039266098,
        "gradeBand": "descent"
      },
      {
        "lat": 25.099263,
        "lng": 121.737071,
        "ele": 49.75,
        "distanceKm": 13.187733247401043,
        "gradePct": -5.8681525831921695,
        "smoothedEle": 50.35045039166508,
        "gradeBand": "descent"
      },
      {
        "lat": 25.099524822028997,
        "lng": 121.73673288342027,
        "ele": 46.953081159335355,
        "distanceKm": 13.2325301956434,
        "gradePct": -7.686251226171057,
        "smoothedEle": 47.04799324034379,
        "gradeBand": "descent"
      },
      {
        "lat": 25.099789,
        "lng": 121.736397,
        "ele": 44.5,
        "distanceKm": 13.277327766320541,
        "gradePct": -6.582067565453594,
        "smoothedEle": 44.59470464818127,
        "gradeBand": "descent"
      },
      {
        "lat": 25.100019,
        "lng": 121.736183,
        "ele": 42.75,
        "distanceKm": 13.310770560786146,
        "gradePct": -5.786503936007626,
        "smoothedEle": 42.86562227687051,
        "gradeBand": "descent"
      },
      {
        "lat": 25.100477,
        "lng": 121.736026,
        "ele": 40.75,
        "distanceKm": 13.364095233630604,
        "gradePct": -4.346312983558763,
        "smoothedEle": 40.973056440032,
        "gradeBand": "descent"
      },
      {
        "lat": 25.100789,
        "lng": 121.735979,
        "ele": 40,
        "distanceKm": 13.399109411891024,
        "gradePct": -3.2927259847909673,
        "smoothedEle": 40.175809036244004,
        "gradeBand": "descent"
      },
      {
        "lat": 25.101442,
        "lng": 121.735921,
        "ele": 39.5,
        "distanceKm": 13.471954293779255,
        "gradePct": -1.3231439520988222,
        "smoothedEle": 39.47096739737228,
        "gradeBand": "descent"
      },
      {
        "lat": 25.101818333333334,
        "lng": 121.73591766666667,
        "ele": 39.16666666666667,
        "distanceKm": 13.513802055034967,
        "gradePct": -0.866977451419213,
        "smoothedEle": 39.166666666652176,
        "gradeBand": "descent"
      },
      {
        "lat": 25.102194666666666,
        "lng": 121.73591433333334,
        "ele": 38.83333333333333,
        "distanceKm": 13.555649816281987,
        "gradePct": -0.7953949710949886,
        "smoothedEle": 38.83333333332021,
        "gradeBand": "descent"
      },
      {
        "lat": 25.102571,
        "lng": 121.735911,
        "ele": 38.5,
        "distanceKm": 13.59749757752113,
        "gradePct": 0.1277825293153687,
        "smoothedEle": 39.41300904893441,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.102788,
        "lng": 121.735859,
        "ele": 40.25,
        "distanceKm": 13.622188477300137,
        "gradePct": 2.3295669069921714,
        "smoothedEle": 41.42943253088658,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.10316,
        "lng": 121.73566,
        "ele": 47,
        "distanceKm": 13.668150854806838,
        "gradePct": 6.844445242550076,
        "smoothedEle": 45.85094311892438,
        "gradeBand": "steep"
      },
      {
        "lat": 25.103554,
        "lng": 121.73552,
        "ele": 49.5,
        "distanceKm": 13.714173824560978,
        "gradePct": 8.028219865254478,
        "smoothedEle": 48.80312242244313,
        "gradeBand": "steep"
      },
      {
        "lat": 25.103904607832387,
        "lng": 121.73539161401489,
        "ele": 49.424771970230566,
        "distanceKm": 13.755247119843188,
        "gradePct": 4.932034777941158,
        "smoothedEle": 49.5416582815195,
        "gradeBand": "hard"
      },
      {
        "lat": 25.10425,
        "lng": 121.735229,
        "ele": 49.75,
        "distanceKm": 13.7969977666909,
        "gradePct": 1.139563953921812,
        "smoothedEle": 48.84091474296178,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.104853,
        "lng": 121.734946,
        "ele": 43.75,
        "distanceKm": 13.869852311849803,
        "gradePct": -5.2664600925689244,
        "smoothedEle": 44.03006440778162,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1053255,
        "lng": 121.73472,
        "ele": 41.24999999999996,
        "distanceKm": 13.927108372853693,
        "gradePct": -5.602602447420173,
        "smoothedEle": 41.24999956316776,
        "gradeBand": "descent"
      },
      {
        "lat": 25.105798,
        "lng": 121.734494,
        "ele": 38.75,
        "distanceKm": 13.984364398911007,
        "gradePct": -4.374003527969196,
        "smoothedEle": 38.95142730297438,
        "gradeBand": "descent"
      },
      {
        "lat": 25.106216343519094,
        "lng": 121.73428312115045,
        "ele": 37.387592503007035,
        "distanceKm": 14.03549908188304,
        "gradePct": -3.531711034490981,
        "smoothedEle": 37.38143925103209,
        "gradeBand": "descent"
      },
      {
        "lat": 25.106635,
        "lng": 121.734073,
        "ele": 36,
        "distanceKm": 14.086633781364416,
        "gradePct": -2.9484892343835547,
        "smoothedEle": 35.933261224420534,
        "gradeBand": "descent"
      },
      {
        "lat": 25.107015,
        "lng": 121.733895,
        "ele": 34.5,
        "distanceKm": 14.132531861515933,
        "gradePct": -2.2143930225539643,
        "smoothedEle": 35.258148788483965,
        "gradeBand": "descent"
      },
      {
        "lat": 25.107175,
        "lng": 121.733777,
        "ele": 34.75,
        "distanceKm": 14.153925609693891,
        "gradePct": -1.4459817842497438,
        "smoothedEle": 35.41360258246568,
        "gradeBand": "descent"
      },
      {
        "lat": 25.10725,
        "lng": 121.733635,
        "ele": 36,
        "distanceKm": 14.17047786136313,
        "gradePct": -0.48764402659799266,
        "smoothedEle": 35.90316654460373,
        "gradeBand": "descent"
      },
      {
        "lat": 25.10757183414777,
        "lng": 121.73327250258747,
        "ele": 37.97035647965545,
        "distanceKm": 14.221594102282168,
        "gradePct": 2.4435638771228287,
        "smoothedEle": 37.8625955882828,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.10789,
        "lng": 121.732906,
        "ele": 39.5,
        "distanceKm": 14.272715881843121,
        "gradePct": 3.566060498066305,
        "smoothedEle": 39.55501665180402,
        "gradeBand": "hard"
      },
      {
        "lat": 25.108147645267643,
        "lng": 121.73259814842953,
        "ele": 40.98412605647318,
        "distanceKm": 14.31492457552701,
        "gradePct": 3.241887659880558,
        "smoothedEle": 40.84882156027928,
        "gradeBand": "hard"
      },
      {
        "lat": 25.108405,
        "lng": 121.73229,
        "ele": 42,
        "distanceKm": 14.35713326718932,
        "gradePct": 2.0127354413091396,
        "smoothedEle": 41.051879103336226,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.108650227693982,
        "lng": 121.73189344070428,
        "ele": 39.465269931846116,
        "distanceKm": 14.405484574227899,
        "gradePct": -1.0113366054984603,
        "smoothedEle": 39.54812466070792,
        "gradeBand": "descent"
      },
      {
        "lat": 25.108888,
        "lng": 121.731491,
        "ele": 37.25,
        "distanceKm": 14.453868043161409,
        "gradePct": -4.111253720680644,
        "smoothedEle": 36.92491704528417,
        "gradeBand": "descent"
      },
      {
        "lat": 25.109103,
        "lng": 121.731069,
        "ele": 33.75,
        "distanceKm": 14.50262200310399,
        "gradePct": -4.696500865973998,
        "smoothedEle": 34.940651461379666,
        "gradeBand": "descent"
      },
      {
        "lat": 25.108948,
        "lng": 121.730697,
        "ele": 34.75,
        "distanceKm": 14.54385285102903,
        "gradePct": -2.974387258931788,
        "smoothedEle": 34.49352368180232,
        "gradeBand": "descent"
      },
      {
        "lat": 25.108704,
        "lng": 121.730055,
        "ele": 35,
        "distanceKm": 14.613957297287328,
        "gradePct": -0.018754522700348344,
        "smoothedEle": 34.79897138235153,
        "gradeBand": "descent"
      },
      {
        "lat": 25.108478,
        "lng": 121.729554,
        "ele": 34.25,
        "distanceKm": 14.670314850494972,
        "gradePct": -0.8689741510715224,
        "smoothedEle": 33.73984545445903,
        "gradeBand": "descent"
      },
      {
        "lat": 25.10827,
        "lng": 121.729158,
        "ele": 31.75,
        "distanceKm": 14.716409752813988,
        "gradePct": -2.1530705248223545,
        "smoothedEle": 32.59981192911672,
        "gradeBand": "descent"
      },
      {
        "lat": 25.107989,
        "lng": 121.728732,
        "ele": 32.5,
        "distanceKm": 14.769476897319477,
        "gradePct": -1.938809276418528,
        "smoothedEle": 31.81678380873087,
        "gradeBand": "descent"
      },
      {
        "lat": 25.107667,
        "lng": 121.728261,
        "ele": 30,
        "distanceKm": 14.828899458666301,
        "gradePct": -1.536780044449481,
        "smoothedEle": 30.878741002072307,
        "gradeBand": "descent"
      },
      {
        "lat": 25.107366,
        "lng": 121.727762,
        "ele": 31.87499999999997,
        "distanceKm": 14.88927033664949,
        "gradePct": 0.3706738776552796,
        "smoothedEle": 31.874999034962762,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.107065,
        "lng": 121.727263,
        "ele": 33.75,
        "distanceKm": 14.94964131756998,
        "gradePct": 2.3164396506673035,
        "smoothedEle": 33.53746892549962,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.106859,
        "lng": 121.726982,
        "ele": 34.25,
        "distanceKm": 14.986044925821963,
        "gradePct": 1.4908847203017768,
        "smoothedEle": 33.31265707455947,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.106505,
        "lng": 121.726643,
        "ele": 31,
        "distanceKm": 15.038146344525318,
        "gradePct": -2.4234366364451687,
        "smoothedEle": 30.797488706559875,
        "gradeBand": "descent"
      },
      {
        "lat": 25.106115,
        "lng": 121.726446,
        "ele": 27.25,
        "distanceKm": 15.085833638418086,
        "gradePct": -5.520877305112068,
        "smoothedEle": 27.79308458275101,
        "gradeBand": "descent"
      },
      {
        "lat": 25.105749,
        "lng": 121.726359,
        "ele": 25.75,
        "distanceKm": 15.127463150850138,
        "gradePct": -4.768869287345711,
        "smoothedEle": 26.54434493052917,
        "gradeBand": "descent"
      },
      {
        "lat": 25.10531725,
        "lng": 121.72632425,
        "ele": 27.125000000000014,
        "distanceKm": 15.175598965574569,
        "gradePct": -1.3128914292104252,
        "smoothedEle": 27.1249999938289,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1048855,
        "lng": 121.72628950000001,
        "ele": 28.499999999999975,
        "distanceKm": 15.223734781196615,
        "gradePct": 1.8438170245442715,
        "smoothedEle": 28.49999999382283,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.10445375,
        "lng": 121.72625475,
        "ele": 29.874999999999986,
        "distanceKm": 15.271870597717157,
        "gradePct": 2.7949747383845844,
        "smoothedEle": 29.874999993827032,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.104022,
        "lng": 121.72622,
        "ele": 31.25,
        "distanceKm": 15.320006415135582,
        "gradePct": 2.145663360154338,
        "smoothedEle": 30.539162544389768,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.103644,
        "lng": 121.726116,
        "ele": 30,
        "distanceKm": 15.363323023077683,
        "gradePct": 0.40653795634485024,
        "smoothedEle": 30.037376409372072,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.103093,
        "lng": 121.725816,
        "ele": 28,
        "distanceKm": 15.431633543978704,
        "gradePct": -2.2180291216328145,
        "smoothedEle": 28.186443004445785,
        "gradeBand": "descent"
      },
      {
        "lat": 25.102749,
        "lng": 121.725531,
        "ele": 27.5,
        "distanceKm": 15.479452829361088,
        "gradePct": -2.2110408630439027,
        "smoothedEle": 27.389284315110007,
        "gradeBand": "descent"
      },
      {
        "lat": 25.102490167708694,
        "lng": 121.72519821119005,
        "ele": 26.636024866761897,
        "distanceKm": 15.52362541902113,
        "gradePct": -1.627174436243417,
        "smoothedEle": 26.776255729173872,
        "gradeBand": "descent"
      },
      {
        "lat": 25.102251362401574,
        "lng": 121.72484679002716,
        "ele": 26.27397977192447,
        "distanceKm": 15.567866282680747,
        "gradePct": -1.283902421724421,
        "smoothedEle": 26.29853234077875,
        "gradeBand": "descent"
      },
      {
        "lat": 25.102013,
        "lng": 121.724495,
        "ele": 26,
        "distanceKm": 15.612107392430405,
        "gradePct": -1.0986256268079448,
        "smoothedEle": 25.837477636957598,
        "gradeBand": "descent"
      },
      {
        "lat": 25.101763,
        "lng": 121.724056,
        "ele": 25,
        "distanceKm": 15.664326111788375,
        "gradePct": -1.4185359123109058,
        "smoothedEle": 24.91822403738646,
        "gradeBand": "descent"
      },
      {
        "lat": 25.101513,
        "lng": 121.723659,
        "ele": 23.75,
        "distanceKm": 15.713016933256585,
        "gradePct": -1.619733828253816,
        "smoothedEle": 24.201732334491034,
        "gradeBand": "descent"
      },
      {
        "lat": 25.101248,
        "lng": 121.723288,
        "ele": 24.25,
        "distanceKm": 15.760596945789647,
        "gradePct": -0.6922343283543941,
        "smoothedEle": 24.291637609054828,
        "gradeBand": "descent"
      },
      {
        "lat": 25.100858,
        "lng": 121.722801,
        "ele": 25.25,
        "distanceKm": 15.826059430245214,
        "gradePct": 0.983580576209448,
        "smoothedEle": 25.209957487495103,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.100592,
        "lng": 121.722439,
        "ele": 25.75,
        "distanceKm": 15.873001404158313,
        "gradePct": 1.5326751563598595,
        "smoothedEle": 25.99832480904499,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.100394,
        "lng": 121.722002,
        "ele": 27.25,
        "distanceKm": 15.922205420923348,
        "gradePct": 1.634357166476113,
        "smoothedEle": 26.790249896096547,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.10032,
        "lng": 121.721644,
        "ele": 27,
        "distanceKm": 15.959181237210379,
        "gradePct": 1.278545873451038,
        "smoothedEle": 27.04476778839351,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.100268,
        "lng": 121.721195,
        "ele": 26.875,
        "distanceKm": 16.00476133121405,
        "gradePct": 0.3655079313351001,
        "smoothedEle": 26.87500001191549,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.100216,
        "lng": 121.720746,
        "ele": 26.75,
        "distanceKm": 16.0503414442825,
        "gradePct": -0.23409312389939615,
        "smoothedEle": 26.749827178481084,
        "gradeBand": "descent"
      },
      {
        "lat": 25.100122,
        "lng": 121.720032,
        "ele": 26.5,
        "distanceKm": 16.122993243601588,
        "gradePct": -0.29074599249747674,
        "smoothedEle": 26.534185250851138,
        "gradeBand": "descent"
      },
      {
        "lat": 25.100052396665397,
        "lng": 121.71958711270668,
        "ele": 26.5,
        "distanceKm": 16.16845469717353,
        "gradePct": -0.2642376972176235,
        "smoothedEle": 26.431826507659522,
        "gradeBand": "descent"
      },
      {
        "lat": 25.099984,
        "lng": 121.719142,
        "ele": 26.25,
        "distanceKm": 16.21391590330115,
        "gradePct": 0.06110725538026698,
        "smoothedEle": 26.622235475001425,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.099847,
        "lng": 121.718655,
        "ele": 27.5,
        "distanceKm": 16.265265986075402,
        "gradePct": 1.1986251182614545,
        "smoothedEle": 27.63763116891315,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.099649,
        "lng": 121.718258,
        "ele": 29.124999999999968,
        "distanceKm": 16.310903752035514,
        "gradePct": 2.5225707812182345,
        "smoothedEle": 29.132190211446105,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.099451,
        "lng": 121.717861,
        "ele": 30.75,
        "distanceKm": 16.35654157468045,
        "gradePct": 3.5387499094456447,
        "smoothedEle": 31.00386471063854,
        "gradeBand": "hard"
      },
      {
        "lat": 25.099401,
        "lng": 121.7179,
        "ele": 31.5,
        "distanceKm": 16.363348416854496,
        "gradePct": 3.6508995528335553,
        "smoothedEle": 31.25061273944774,
        "gradeBand": "hard"
      },
      {
        "lat": 25.099176,
        "lng": 121.717718,
        "ele": 32.75,
        "distanceKm": 16.394361442938223,
        "gradePct": 3.411395117852064,
        "smoothedEle": 32.00185290384727,
        "gradeBand": "hard"
      },
      {
        "lat": 25.098866,
        "lng": 121.717406,
        "ele": 32,
        "distanceKm": 16.441000946149785,
        "gradePct": 2.1342073574813103,
        "smoothedEle": 32.50072794352025,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.098542,
        "lng": 121.717035,
        "ele": 33.25,
        "distanceKm": 16.49290077325961,
        "gradePct": 1.3390827041501532,
        "smoothedEle": 33.3055532584475,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.098291,
        "lng": 121.71671,
        "ele": 34.5,
        "distanceKm": 16.535912079017837,
        "gradePct": 1.1491562884395186,
        "smoothedEle": 33.59545164547134,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.09792779802248,
        "lng": 121.7163322362362,
        "ele": 32.03651781020457,
        "distanceKm": 16.591392251126315,
        "gradePct": -0.9836508603662326,
        "smoothedEle": 32.298509318207685,
        "gradeBand": "descent"
      },
      {
        "lat": 25.097565,
        "lng": 121.715954,
        "ele": 30.75,
        "distanceKm": 16.646872462089117,
        "gradePct": -2.233280989539907,
        "smoothedEle": 31.105953268927426,
        "gradeBand": "descent"
      },
      {
        "lat": 25.097258,
        "lng": 121.715673,
        "ele": 31,
        "distanceKm": 16.691211852958784,
        "gradePct": -1.8471021063225082,
        "smoothedEle": 30.455624322437313,
        "gradeBand": "descent"
      },
      {
        "lat": 25.096842,
        "lng": 121.71592,
        "ele": 29,
        "distanceKm": 16.74373186134381,
        "gradePct": -1.8601116213215454,
        "smoothedEle": 29.313349365262194,
        "gradeBand": "descent"
      },
      {
        "lat": 25.096455340915387,
        "lng": 121.71611824085235,
        "ele": 28.386086243849896,
        "distanceKm": 16.791134717438787,
        "gradePct": -1.9521537482355749,
        "smoothedEle": 28.504601926267522,
        "gradeBand": "descent"
      },
      {
        "lat": 25.0960674170939,
        "lng": 121.71631350890391,
        "ele": 28.222818642212548,
        "distanceKm": 16.838540243043003,
        "gradePct": -1.2034449179576192,
        "smoothedEle": 28.222818663325846,
        "gradeBand": "descent"
      },
      {
        "lat": 25.095679493272407,
        "lng": 121.71650877695548,
        "ele": 28.059551040575187,
        "distanceKm": 16.885945794510647,
        "gradePct": -0.5335798789690567,
        "smoothedEle": 28.059551061686683,
        "gradeBand": "descent"
      },
      {
        "lat": 25.095291569450918,
        "lng": 121.71670404500703,
        "ele": 27.89628343893784,
        "distanceKm": 16.933351371839507,
        "gradePct": -0.3529514210440737,
        "smoothedEle": 27.900710420161765,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094907,
        "lng": 121.716906,
        "ele": 27.75,
        "distanceKm": 16.980703108576396,
        "gradePct": -0.4644220321445657,
        "smoothedEle": 27.613185158669033,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094633708008892,
        "lng": 121.71652343358168,
        "ele": 27.061554258167714,
        "distanceKm": 17.029770209816505,
        "gradePct": -0.8185904169485657,
        "smoothedEle": 27.09411931015533,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094349,
        "lng": 121.71615,
        "ele": 26.5,
        "distanceKm": 17.078926455259186,
        "gradePct": -1.1612265128515005,
        "smoothedEle": 26.462746691722813,
        "gradeBand": "descent"
      },
      {
        "lat": 25.0940945,
        "lng": 121.71583650000001,
        "ele": 25.87500000000003,
        "distanceKm": 17.121322953613852,
        "gradePct": -1.3084800956833424,
        "smoothedEle": 25.87500015281204,
        "gradeBand": "descent"
      },
      {
        "lat": 25.09384,
        "lng": 121.715523,
        "ele": 25.25,
        "distanceKm": 17.163719500868368,
        "gradePct": -1.2117036247502289,
        "smoothedEle": 25.446364221500353,
        "gradeBand": "descent"
      },
      {
        "lat": 25.093554,
        "lng": 121.715356,
        "ele": 25.25,
        "distanceKm": 17.19969396498126,
        "gradePct": -0.5351091122934045,
        "smoothedEle": 25.63973569048481,
        "gradeBand": "descent"
      },
      {
        "lat": 25.093452,
        "lng": 121.715259,
        "ele": 25.5,
        "distanceKm": 17.214662291418925,
        "gradePct": -0.0656561195889464,
        "smoothedEle": 25.90168140314393,
        "gradeBand": "descent"
      },
      {
        "lat": 25.093343,
        "lng": 121.714962,
        "ele": 27,
        "distanceKm": 17.24693282540601,
        "gradePct": 1.1511815936933745,
        "smoothedEle": 26.767261811811114,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.093068,
        "lng": 121.714546,
        "ele": 28.25,
        "distanceKm": 17.298797455183095,
        "gradePct": 2.533139700216164,
        "smoothedEle": 28.168056433118025,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.092839,
        "lng": 121.714219,
        "ele": 29,
        "distanceKm": 17.340423455980094,
        "gradePct": 2.780132723439173,
        "smoothedEle": 29.37279616479554,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.092743,
        "lng": 121.713945,
        "ele": 31,
        "distanceKm": 17.370008389070435,
        "gradePct": 2.2011965877267636,
        "smoothedEle": 29.59169866180681,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.092839,
        "lng": 121.714219,
        "ele": 29,
        "distanceKm": 17.399593322160776,
        "gradePct": 1.1817057492919192,
        "smoothedEle": 29.37279616479554,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.093068,
        "lng": 121.714546,
        "ele": 28.25,
        "distanceKm": 17.441219322957775,
        "gradePct": -1.2106284476725875,
        "smoothedEle": 28.168056433118025,
        "gradeBand": "descent"
      },
      {
        "lat": 25.093343,
        "lng": 121.714962,
        "ele": 27,
        "distanceKm": 17.49308395273486,
        "gradePct": -2.6536979644061502,
        "smoothedEle": 26.767261811811114,
        "gradeBand": "descent"
      },
      {
        "lat": 25.093452,
        "lng": 121.715259,
        "ele": 25.5,
        "distanceKm": 17.525354486721945,
        "gradePct": -2.725535126642321,
        "smoothedEle": 25.90168140314393,
        "gradeBand": "descent"
      },
      {
        "lat": 25.093554,
        "lng": 121.715356,
        "ele": 25.25,
        "distanceKm": 17.54032281315961,
        "gradePct": -2.5542675295694854,
        "smoothedEle": 25.63973569048481,
        "gradeBand": "descent"
      },
      {
        "lat": 25.09384,
        "lng": 121.715523,
        "ele": 25.25,
        "distanceKm": 17.576297277272502,
        "gradePct": -1.774283352406488,
        "smoothedEle": 25.446364221500353,
        "gradeBand": "descent"
      },
      {
        "lat": 25.0940945,
        "lng": 121.71583650000001,
        "ele": 25.87500000000003,
        "distanceKm": 17.618693824527018,
        "gradePct": -0.2053376898871668,
        "smoothedEle": 25.87500015281204,
        "gradeBand": "descent"
      },
      {
        "lat": 25.094349,
        "lng": 121.71615,
        "ele": 26.5,
        "distanceKm": 17.661090322881684,
        "gradePct": 0.9346414024443571,
        "smoothedEle": 26.462746691722813,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.094633708008892,
        "lng": 121.71652343358168,
        "ele": 27.061554258167714,
        "distanceKm": 17.710246568324365,
        "gradePct": 1.3045222800956209,
        "smoothedEle": 27.09411931015533,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.094907,
        "lng": 121.716906,
        "ele": 27.75,
        "distanceKm": 17.759313669564474,
        "gradePct": 1.1753404757867447,
        "smoothedEle": 27.613457259886072,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.09535923422207,
        "lng": 121.71666998479394,
        "ele": 27.924761877975374,
        "distanceKm": 17.814933342816484,
        "gradePct": 0.7847529419050611,
        "smoothedEle": 27.92847819563706,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.095814822814713,
        "lng": 121.7164406565293,
        "ele": 28.116507918650246,
        "distanceKm": 17.870607771607492,
        "gradePct": 0.4390827049104873,
        "smoothedEle": 28.11650795284888,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.096270411407357,
        "lng": 121.71621132826465,
        "ele": 28.308253959325118,
        "distanceKm": 17.92628216472774,
        "gradePct": 0.3414473179203151,
        "smoothedEle": 28.308253993524797,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.096726,
        "lng": 121.715982,
        "ele": 28.5,
        "distanceKm": 17.981956522176144,
        "gradePct": 0.7164106028407109,
        "smoothedEle": 28.872004351981218,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.097258,
        "lng": 121.715673,
        "ele": 31,
        "distanceKm": 18.048796467433792,
        "gradePct": 1.979693041562218,
        "smoothedEle": 30.51592355430767,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.097565,
        "lng": 121.715954,
        "ele": 30.75,
        "distanceKm": 18.09313585830346,
        "gradePct": 1.9589946922215773,
        "smoothedEle": 31.105953268927426,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.09792779802248,
        "lng": 121.7163322362362,
        "ele": 32.03651781020457,
        "distanceKm": 18.14861606926626,
        "gradePct": 1.7870226318616382,
        "smoothedEle": 32.298509318207685,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.098291,
        "lng": 121.71671,
        "ele": 34.5,
        "distanceKm": 18.20409624137474,
        "gradePct": 2.2539031812976766,
        "smoothedEle": 33.59545164547134,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.098542,
        "lng": 121.717035,
        "ele": 33.25,
        "distanceKm": 18.247107547132966,
        "gradePct": 1.039469865886367,
        "smoothedEle": 33.3055532584475,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.098866,
        "lng": 121.717406,
        "ele": 32,
        "distanceKm": 18.29900737424279,
        "gradePct": -0.9757628744983226,
        "smoothedEle": 32.50072794352025,
        "gradeBand": "descent"
      },
      {
        "lat": 25.099176,
        "lng": 121.717718,
        "ele": 32.75,
        "distanceKm": 18.345646877454353,
        "gradePct": -1.1966686962588156,
        "smoothedEle": 32.11872955006663,
        "gradeBand": "descent"
      },
      {
        "lat": 25.099401,
        "lng": 121.7179,
        "ele": 31.5,
        "distanceKm": 18.37665990353808,
        "gradePct": -1.4052136057788522,
        "smoothedEle": 31.442062893860612,
        "gradeBand": "descent"
      },
      {
        "lat": 25.099649,
        "lng": 121.71839,
        "ele": 29.25,
        "distanceKm": 18.43318384192776,
        "gradePct": -2.7156841709976374,
        "smoothedEle": 29.505123214828018,
        "gradeBand": "descent"
      },
      {
        "lat": 25.099847,
        "lng": 121.718871,
        "ele": 28.25,
        "distanceKm": 18.486387346270142,
        "gradePct": -2.761180771767851,
        "smoothedEle": 28.347546011056888,
        "gradeBand": "descent"
      },
      {
        "lat": 25.09993329001653,
        "lng": 121.71931194087985,
        "ele": 27.75,
        "distanceKm": 18.531812759377654,
        "gradePct": -1.5086029357291186,
        "smoothedEle": 28.043503986713596,
        "gradeBand": "descent"
      },
      {
        "lat": 25.099998995916273,
        "lng": 121.71975760264768,
        "ele": 28.326042568178643,
        "distanceKm": 18.57727945640353,
        "gradePct": -0.1826034833909676,
        "smoothedEle": 28.36310777663525,
        "gradeBand": "descent"
      },
      {
        "lat": 25.100064497958137,
        "lng": 121.72020330132383,
        "ele": 29.038021284089293,
        "distanceKm": 18.62274616106739,
        "gradePct": 0.9338326964175865,
        "smoothedEle": 29.038021368543664,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.10013,
        "lng": 121.720649,
        "ele": 29.75,
        "distanceKm": 18.668212842007406,
        "gradePct": 1.0868940756220646,
        "smoothedEle": 29.386268955163203,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.100177333333335,
        "lng": 121.72106133333332,
        "ele": 29.16666666666665,
        "distanceKm": 18.71006487659824,
        "gradePct": 0.3168878637700194,
        "smoothedEle": 29.166666620178844,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.100224666666666,
        "lng": 121.72147366666667,
        "ele": 28.58333333333335,
        "distanceKm": 18.75191689525039,
        "gradePct": -0.6781184612527557,
        "smoothedEle": 28.58333328683743,
        "gradeBand": "descent"
      },
      {
        "lat": 25.100272,
        "lng": 121.721886,
        "ele": 28,
        "distanceKm": 18.793768897961087,
        "gradePct": -1.3103064361572576,
        "smoothedEle": 27.94186701766922,
        "gradeBand": "descent"
      },
      {
        "lat": 25.100394,
        "lng": 121.722252,
        "ele": 27.25,
        "distanceKm": 18.83304054922564,
        "gradePct": -1.555488230414496,
        "smoothedEle": 27.290943521026076,
        "gradeBand": "descent"
      },
      {
        "lat": 25.10076,
        "lng": 121.722819,
        "ele": 26,
        "distanceKm": 18.903154503348542,
        "gradePct": -1.7846704333570211,
        "smoothedEle": 26.001631160394577,
        "gradeBand": "descent"
      },
      {
        "lat": 25.101056,
        "lng": 121.723201,
        "ele": 25.25000000000003,
        "distanceKm": 18.95377940299193,
        "gradePct": -1.65958089152288,
        "smoothedEle": 25.249999734759918,
        "gradeBand": "descent"
      },
      {
        "lat": 25.101352,
        "lng": 121.723583,
        "ele": 24.5,
        "distanceKm": 19.004404231904623,
        "gradePct": -1.1719546125186764,
        "smoothedEle": 24.811121740599646,
        "gradeBand": "descent"
      },
      {
        "lat": 25.10161,
        "lng": 121.723985,
        "ele": 25,
        "distanceKm": 19.054018292295737,
        "gradePct": -0.08701218501747353,
        "smoothedEle": 25.160916564798253,
        "gradeBand": "descent"
      },
      {
        "lat": 25.101873,
        "lng": 121.724437,
        "ele": 26.25,
        "distanceKm": 19.108117266084463,
        "gradePct": 1.2293294009419038,
        "smoothedEle": 26.066629207354797,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.102213748915705,
        "lng": 121.72492244059966,
        "ele": 26.792593814816566,
        "distanceKm": 19.169963266407837,
        "gradePct": 1.3484803940216692,
        "smoothedEle": 26.776344067557414,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.102552,
        "lng": 121.72541,
        "ele": 27.25,
        "distanceKm": 19.23180861229834,
        "gradePct": 1.0228096650810696,
        "smoothedEle": 27.36130933096638,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.102862,
        "lng": 121.725728,
        "ele": 28,
        "distanceKm": 19.278856557663012,
        "gradePct": 1.203075174563225,
        "smoothedEle": 28.063536589784388,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.103396,
        "lng": 121.726097,
        "ele": 29.75,
        "distanceKm": 19.34890149541537,
        "gradePct": 2.230076654470612,
        "smoothedEle": 29.84651058999796,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.104012,
        "lng": 121.726294,
        "ele": 32.25,
        "distanceKm": 19.420212104642186,
        "gradePct": 2.5929339206286017,
        "smoothedEle": 31.709164215262444,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.104444374531123,
        "lng": 121.72632682669976,
        "ele": 31.546570719431134,
        "distanceKm": 19.468403513471387,
        "gradePct": 0.9279506975046037,
        "smoothedEle": 31.283859608816478,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.104876590514674,
        "lng": 121.72636210206115,
        "ele": 29.828982490501925,
        "distanceKm": 19.516594878177603,
        "gradePct": -1.8043243199419472,
        "smoothedEle": 29.81035689958235,
        "gradeBand": "descent"
      },
      {
        "lat": 25.105308795257336,
        "lng": 121.72639755103057,
        "ele": 28.039491245250964,
        "distanceKm": 19.564786287011014,
        "gradePct": -3.2762915531222383,
        "smoothedEle": 28.039491236890406,
        "gradeBand": "descent"
      },
      {
        "lat": 25.105741,
        "lng": 121.726433,
        "ele": 26.25,
        "distanceKm": 19.612977694910022,
        "gradePct": -2.7593622043919943,
        "smoothedEle": 27.161593956636253,
        "gradeBand": "descent"
      },
      {
        "lat": 25.106095,
        "lng": 121.726517,
        "ele": 27.75,
        "distanceKm": 19.653239182020855,
        "gradePct": -0.14168350070781144,
        "smoothedEle": 28.322123443599672,
        "gradeBand": "descent"
      },
      {
        "lat": 25.106468,
        "lng": 121.726705,
        "ele": 31.5,
        "distanceKm": 19.698830526539872,
        "gradePct": 3.978543042021148,
        "smoothedEle": 31.397854321659942,
        "gradeBand": "hard"
      },
      {
        "lat": 25.106821,
        "lng": 121.727029,
        "ele": 35.25,
        "distanceKm": 19.74986964057036,
        "gradePct": 5.886200261246925,
        "smoothedEle": 34.11119733194144,
        "gradeBand": "hard"
      },
      {
        "lat": 25.1070945885756,
        "lng": 121.72744623155889,
        "ele": 34.33256522573953,
        "distanceKm": 19.801738468235374,
        "gradePct": 2.509854904436665,
        "smoothedEle": 34.0623013153927,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1073532942878,
        "lng": 121.72787511577944,
        "ele": 32.291282612869836,
        "distanceKm": 19.8536265641432,
        "gradePct": -1.816373896012986,
        "smoothedEle": 32.291281836754905,
        "gradeBand": "descent"
      },
      {
        "lat": 25.107612,
        "lng": 121.728304,
        "ele": 30.25,
        "distanceKm": 19.905514584009143,
        "gradePct": -2.525800192461293,
        "smoothedEle": 31.407616559489046,
        "gradeBand": "descent"
      },
      {
        "lat": 25.107931,
        "lng": 121.728772,
        "ele": 33.5,
        "distanceKm": 19.96449514912317,
        "gradePct": 0.7272469247232006,
        "smoothedEle": 32.83343418310292,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.10813,
        "lng": 121.729063,
        "ele": 33.5,
        "distanceKm": 20.00121225375618,
        "gradePct": 2.3283479500762203,
        "smoothedEle": 33.80923421354896,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.108439,
        "lng": 121.729607,
        "ele": 35.25,
        "distanceKm": 20.06587120077916,
        "gradePct": 2.4415641436742,
        "smoothedEle": 35.31156851010805,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.108615,
        "lng": 121.73007,
        "ele": 36.75,
        "distanceKm": 20.116430837624897,
        "gradePct": 3.058086299994641,
        "smoothedEle": 37.22092046441985,
        "gradeBand": "hard"
      },
      {
        "lat": 25.108626,
        "lng": 121.730198,
        "ele": 37.5,
        "distanceKm": 20.129376774467715,
        "gradePct": 3.6311414654206238,
        "smoothedEle": 38.094771201310095,
        "gradeBand": "hard"
      },
      {
        "lat": 25.108606,
        "lng": 121.730335,
        "ele": 38.5,
        "distanceKm": 20.143349108086383,
        "gradePct": 4.216659010206233,
        "smoothedEle": 39.00493238730486,
        "gradeBand": "hard"
      },
      {
        "lat": 25.108514,
        "lng": 121.730656,
        "ele": 42,
        "distanceKm": 20.177250196434326,
        "gradePct": 4.93387407433837,
        "smoothedEle": 40.67516298885887,
        "gradeBand": "hard"
      },
      {
        "lat": 25.108561,
        "lng": 121.731034,
        "ele": 41.75,
        "distanceKm": 20.215667309392078,
        "gradePct": 3.704439564953373,
        "smoothedEle": 40.89652587995176,
        "gradeBand": "hard"
      },
      {
        "lat": 25.108888,
        "lng": 121.731491,
        "ele": 37.25,
        "distanceKm": 20.274313854776477,
        "gradePct": -3.137369472156278,
        "smoothedEle": 37.39312654780692,
        "gradeBand": "descent"
      },
      {
        "lat": 25.109243,
        "lng": 121.731978,
        "ele": 33,
        "distanceKm": 20.337263210962632,
        "gradePct": -6.658834086702305,
        "smoothedEle": 32.94760613443632,
        "gradeBand": "descent"
      },
      {
        "lat": 25.109479,
        "lng": 121.732329,
        "ele": 30,
        "distanceKm": 20.381281874522102,
        "gradePct": -6.693506499112524,
        "smoothedEle": 30.20753441197488,
        "gradeBand": "descent"
      },
      {
        "lat": 25.109659,
        "lng": 121.732716,
        "ele": 27.75,
        "distanceKm": 20.42508759588805,
        "gradePct": -5.3004209623427405,
        "smoothedEle": 28.507034241865295,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1098985,
        "lng": 121.733137,
        "ele": 28.250000000000018,
        "distanceKm": 20.475148152995164,
        "gradePct": -2.3393458485927874,
        "smoothedEle": 28.250000175784017,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110138,
        "lng": 121.733558,
        "ele": 28.75,
        "distanceKm": 20.525208639788673,
        "gradePct": 0.8740112391394224,
        "smoothedEle": 29.380423985604985,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.110374330362063,
        "lng": 121.73396412000335,
        "ele": 31.68919669911424,
        "distanceKm": 20.57381549765233,
        "gradePct": 3.399361058418703,
        "smoothedEle": 31.65620370342901,
        "gradeBand": "hard"
      },
      {
        "lat": 25.110611,
        "lng": 121.73437,
        "ele": 34.5,
        "distanceKm": 20.622422376496644,
        "gradePct": 5.008919488848047,
        "smoothedEle": 34.326426420155705,
        "gradeBand": "hard"
      },
      {
        "lat": 25.11068,
        "lng": 121.734538,
        "ele": 35.25,
        "distanceKm": 20.64099634844048,
        "gradePct": 5.239681806120129,
        "smoothedEle": 35.35928846511419,
        "gradeBand": "hard"
      },
      {
        "lat": 25.110727,
        "lng": 121.734917,
        "ele": 37.25,
        "distanceKm": 20.679512545764677,
        "gradePct": 4.809609152752567,
        "smoothedEle": 36.77878064283166,
        "gradeBand": "hard"
      },
      {
        "lat": 25.110737,
        "lng": 121.735274,
        "ele": 37.75,
        "distanceKm": 20.71547462781712,
        "gradePct": 3.760041634905459,
        "smoothedEle": 37.70479293427021,
        "gradeBand": "hard"
      },
      {
        "lat": 25.110705,
        "lng": 121.735962,
        "ele": 38.5,
        "distanceKm": 20.784837900046696,
        "gradePct": 1.0978934634180306,
        "smoothedEle": 38.01380030250893,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.110679,
        "lng": 121.736533,
        "ele": 36.75,
        "distanceKm": 20.842402246520756,
        "gradePct": -0.3353652095986158,
        "smoothedEle": 37.489387933022286,
        "gradeBand": "descent"
      },
      {
        "lat": 25.110708,
        "lng": 121.737233,
        "ele": 39.25,
        "distanceKm": 20.91295616934713,
        "gradePct": 1.7295009197645155,
        "smoothedEle": 39.4871432159223,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.110726,
        "lng": 121.737397,
        "ele": 40,
        "distanceKm": 20.9295895297335,
        "gradePct": 2.7534716968914417,
        "smoothedEle": 40.35958374095694,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.110806,
        "lng": 121.737574,
        "ele": 41.25,
        "distanceKm": 20.949507723834106,
        "gradePct": 4.259525272570432,
        "smoothedEle": 41.95010690640516,
        "gradeBand": "hard"
      },
      {
        "lat": 25.111110007184575,
        "lng": 121.73799765111066,
        "ele": 47.23527796955227,
        "distanceKm": 21.00393401303868,
        "gradePct": 6.735605673148901,
        "smoothedEle": 45.96728385316235,
        "gradeBand": "steep"
      },
      {
        "lat": 25.11143433812305,
        "lng": 121.7384037674071,
        "ele": 47.656851979701514,
        "distanceKm": 21.058455630892066,
        "gradePct": 5.04630473928723,
        "smoothedEle": 47.65685215119611,
        "gradeBand": "hard"
      },
      {
        "lat": 25.111758669061523,
        "lng": 121.73880988370355,
        "ele": 48.07842598985076,
        "distanceKm": 21.112977167386266,
        "gradePct": 1.830904349343437,
        "smoothedEle": 48.078426161346115,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.112083,
        "lng": 121.739216,
        "ele": 48.5,
        "distanceKm": 21.167498622520913,
        "gradePct": -1.166629340145126,
        "smoothedEle": 46.56014545978503,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1123295,
        "lng": 121.739485,
        "ele": 42.5,
        "distanceKm": 21.206032233269518,
        "gradePct": -5.524727364007887,
        "smoothedEle": 42.499998848398945,
        "gradeBand": "descent"
      },
      {
        "lat": 25.112576,
        "lng": 121.739754,
        "ele": 36.5,
        "distanceKm": 21.244565805631414,
        "gradePct": -10.309180452727293,
        "smoothedEle": 36.88958430343871,
        "gradeBand": "descent"
      },
      {
        "lat": 25.112809,
        "lng": 121.739993,
        "ele": 32,
        "distanceKm": 21.279925426711213,
        "gradePct": -12.187154071663233,
        "smoothedEle": 33.06362416445901,
        "gradeBand": "descent"
      },
      {
        "lat": 25.11303,
        "lng": 121.740274,
        "ele": 30.75,
        "distanceKm": 21.317399928911932,
        "gradePct": -10.167408589225529,
        "smoothedEle": 30.677475483520098,
        "gradeBand": "descent"
      },
      {
        "lat": 25.113243,
        "lng": 121.740572,
        "ele": 29.25,
        "distanceKm": 21.355625411881878,
        "gradePct": -5.43401228979407,
        "smoothedEle": 30.258907248159993,
        "gradeBand": "descent"
      },
      {
        "lat": 25.113477,
        "lng": 121.740942,
        "ele": 31.25,
        "distanceKm": 21.401065574838423,
        "gradePct": -0.46433898112419014,
        "smoothedEle": 31.253208955332923,
        "gradeBand": "descent"
      },
      {
        "lat": 25.113819,
        "lng": 121.741446,
        "ele": 34.25,
        "distanceKm": 21.464478419787262,
        "gradePct": 2.061611291960829,
        "smoothedEle": 32.51423617450425,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.114009,
        "lng": 121.741744,
        "ele": 30.5,
        "distanceKm": 21.50117407313508,
        "gradePct": -0.27908806001062514,
        "smoothedEle": 30.97627849139649,
        "gradeBand": "descent"
      },
      {
        "lat": 25.11433,
        "lng": 121.742176,
        "ele": 27.25,
        "distanceKm": 21.557440041853113,
        "gradePct": -5.241329789432495,
        "smoothedEle": 27.132941269787224,
        "gradeBand": "descent"
      },
      {
        "lat": 25.114637,
        "lng": 121.742526,
        "ele": 24,
        "distanceKm": 21.606502396404213,
        "gradePct": -5.202774937086809,
        "smoothedEle": 25.40954388889179,
        "gradeBand": "descent"
      },
      {
        "lat": 25.114908,
        "lng": 121.742814,
        "ele": 26,
        "distanceKm": 21.64832168136949,
        "gradePct": -1.6257964332955215,
        "smoothedEle": 26.129989071563475,
        "gradeBand": "descent"
      },
      {
        "lat": 25.115226,
        "lng": 121.743058,
        "ele": 28.5,
        "distanceKm": 21.691377983616633,
        "gradePct": 1.5484076873934634,
        "smoothedEle": 27.48922190817593,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.115649,
        "lng": 121.743282,
        "ele": 27.25,
        "distanceKm": 21.74354088443051,
        "gradePct": 1.6923257887993097,
        "smoothedEle": 27.739953286584527,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.116035456002106,
        "lng": 121.74340823491185,
        "ele": 27.94207736766433,
        "distanceKm": 21.78835300353917,
        "gradePct": 0.5113317886921711,
        "smoothedEle": 27.905058913600726,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1164218391965,
        "lng": 121.74353474023025,
        "ele": 28.5,
        "distanceKm": 21.833165078301885,
        "gradePct": 0.6559671307797657,
        "smoothedEle": 28.346047037392335,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.11680791959825,
        "lng": 121.74366237011513,
        "ele": 28.5,
        "distanceKm": 21.87797719750856,
        "gradePct": 0.6331696726513182,
        "smoothedEle": 28.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.117194,
        "lng": 121.74379,
        "ele": 28.5,
        "distanceKm": 21.92278930507519,
        "gradePct": -0.6526415198690018,
        "smoothedEle": 27.59129927066116,
        "gradeBand": "descent"
      },
      {
        "lat": 25.117496,
        "lng": 121.743837,
        "ele": 25.75,
        "distanceKm": 21.956701979305095,
        "gradePct": -2.1856302899065563,
        "smoothedEle": 26.241278257813683,
        "gradeBand": "descent"
      },
      {
        "lat": 25.117793,
        "lng": 121.743802,
        "ele": 24.5,
        "distanceKm": 21.98991438386107,
        "gradePct": -3.7360625332289463,
        "smoothedEle": 24.52187498558444,
        "gradeBand": "descent"
      },
      {
        "lat": 25.118236544893712,
        "lng": 121.74371250809746,
        "ele": 22.91348659588702,
        "distanceKm": 22.040050640521084,
        "gradePct": -3.9203467034677084,
        "smoothedEle": 22.983800459878484,
        "gradeBand": "descent"
      },
      {
        "lat": 25.118680363262474,
        "lng": 121.74362467206497,
        "ele": 21.60899106392468,
        "distanceKm": 22.09018713175767,
        "gradePct": -2.9045166288604825,
        "smoothedEle": 21.608991026978035,
        "gradeBand": "descent"
      },
      {
        "lat": 25.11912418163124,
        "lng": 121.74353683603249,
        "ele": 20.30449553196234,
        "distanceKm": 22.14032361732975,
        "gradePct": -2.671819576832136,
        "smoothedEle": 20.304495495013427,
        "gradeBand": "descent"
      },
      {
        "lat": 25.119568,
        "lng": 121.743449,
        "ele": 19,
        "distanceKm": 22.190460097236972,
        "gradePct": -2.700293421002006,
        "smoothedEle": 18.90159534812793,
        "gradeBand": "descent"
      },
      {
        "lat": 25.120117539055318,
        "lng": 121.74334725118447,
        "ele": 16.772742655487033,
        "distanceKm": 22.252418840014457,
        "gradePct": -2.9166517596784636,
        "smoothedEle": 17.04939975776834,
        "gradeBand": "descent"
      },
      {
        "lat": 25.120667,
        "lng": 121.743245,
        "ele": 16,
        "distanceKm": 22.314377392608442,
        "gradePct": -1.4392888763627,
        "smoothedEle": 16.747322483477117,
        "gradeBand": "descent"
      },
      {
        "lat": 25.121024,
        "lng": 121.743199,
        "ele": 18,
        "distanceKm": 22.354343268804282,
        "gradePct": 1.3604417974081164,
        "smoothedEle": 18.400459053825823,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.121364967167583,
        "lng": 121.74315419431954,
        "ele": 21.237855029036233,
        "distanceKm": 22.39252454728078,
        "gradePct": 4.236950261896471,
        "smoothedEle": 21.090815711206737,
        "gradeBand": "hard"
      },
      {
        "lat": 25.121706,
        "lng": 121.74311,
        "ele": 24,
        "distanceKm": 22.430705853257646,
        "gradePct": 5.690493518834246,
        "smoothedEle": 23.11322157341476,
        "gradeBand": "hard"
      },
      {
        "lat": 25.1220843343855,
        "lng": 121.74307801520895,
        "ele": 23.885768603411933,
        "distanceKm": 22.472897836313546,
        "gradePct": 4.177904291516978,
        "smoothedEle": 23.885768602977087,
        "gradeBand": "hard"
      },
      {
        "lat": 25.122462668771,
        "lng": 121.7430460304179,
        "ele": 23.771537206823876,
        "distanceKm": 22.51508981860811,
        "gradePct": 0.9341854624290004,
        "smoothedEle": 23.220249367669705,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.122841,
        "lng": 121.743014,
        "ele": 21.75,
        "distanceKm": 22.557281801010003,
        "gradePct": -1.8734202416258352,
        "smoothedEle": 21.726414380212912,
        "gradeBand": "descent"
      },
      {
        "lat": 25.123508,
        "lng": 121.742955,
        "ele": 17,
        "distanceKm": 22.63168639419217,
        "gradePct": -5.882800037915247,
        "smoothedEle": 16.749836615962494,
        "gradeBand": "descent"
      },
      {
        "lat": 25.123869000000003,
        "lng": 121.74291849999999,
        "ele": 14.12499999999987,
        "distanceKm": 22.671995660560096,
        "gradePct": -6.617272648198444,
        "smoothedEle": 14.124999985764726,
        "gradeBand": "descent"
      },
      {
        "lat": 25.12423,
        "lng": 121.742882,
        "ele": 11.25,
        "distanceKm": 22.712304925937744,
        "gradePct": -5.7362055235747444,
        "smoothedEle": 12.309967512336305,
        "gradeBand": "descent"
      },
      {
        "lat": 25.124643,
        "lng": 121.742836,
        "ele": 12,
        "distanceKm": 22.75846140536709,
        "gradePct": -2.890380998171697,
        "smoothedEle": 12.115935171043,
        "gradeBand": "descent"
      },
      {
        "lat": 25.124969,
        "lng": 121.742872,
        "ele": 13,
        "distanceKm": 22.7948917307305,
        "gradePct": 0.10222733176420672,
        "smoothedEle": 13.196270526730574,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.125457,
        "lng": 121.742892,
        "ele": 15.25,
        "distanceKm": 22.849192272960412,
        "gradePct": 2.5809804038374193,
        "smoothedEle": 14.735881100086482,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.125979,
        "lng": 121.742729,
        "ele": 15.25,
        "distanceKm": 22.90951115821676,
        "gradePct": 1.639217495857668,
        "smoothedEle": 15.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.126359,
        "lng": 121.742551,
        "ele": 15.25,
        "distanceKm": 22.95540813086433,
        "gradePct": 0.6464285449351547,
        "smoothedEle": 15.435289570197645,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.126706,
        "lng": 121.742226,
        "ele": 16,
        "distanceKm": 23.005997578811623,
        "gradePct": 0.42901430081553926,
        "smoothedEle": 15.649066837913157,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.126837,
        "lng": 121.742043,
        "ele": 15.75,
        "distanceKm": 23.029483651379735,
        "gradePct": 0.2703193167479509,
        "smoothedEle": 15.600949791057435,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.12695,
        "lng": 121.741828,
        "ele": 15.25,
        "distanceKm": 23.054511033203788,
        "gradePct": 0.15243404642118247,
        "smoothedEle": 15.584101965116366,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.126968,
        "lng": 121.741716,
        "ele": 15,
        "distanceKm": 23.065962632071106,
        "gradePct": 0.21872792793096574,
        "smoothedEle": 15.69861795378954,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.127393,
        "lng": 121.741989,
        "ele": 17,
        "distanceKm": 23.120631237700213,
        "gradePct": 0.9275998994122246,
        "smoothedEle": 16.5466860562911,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.127685,
        "lng": 121.742175,
        "ele": 17,
        "distanceKm": 23.1581126956792,
        "gradePct": 0.9509783490002474,
        "smoothedEle": 16.57109693887074,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.127976,
        "lng": 121.74236549999999,
        "ele": 15.625000000000068,
        "distanceKm": 23.195726795878578,
        "gradePct": -0.5353463331142349,
        "smoothedEle": 15.62499983986565,
        "gradeBand": "descent"
      },
      {
        "lat": 25.128267,
        "lng": 121.742556,
        "ele": 14.25,
        "distanceKm": 23.233340872785686,
        "gradePct": -1.806174260594367,
        "smoothedEle": 14.748789312805979,
        "gradeBand": "descent"
      },
      {
        "lat": 25.128605,
        "lng": 121.742785,
        "ele": 14.5,
        "distanceKm": 23.27743199955181,
        "gradePct": -1.0258370261832268,
        "smoothedEle": 15.059326785169178,
        "gradeBand": "descent"
      },
      {
        "lat": 25.128984,
        "lng": 121.743046,
        "ele": 17,
        "distanceKm": 23.327094969414887,
        "gradePct": 1.0885742834029242,
        "smoothedEle": 15.982860355254957,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.129515,
        "lng": 121.7434,
        "ele": 14.5,
        "distanceKm": 23.396060827972207,
        "gradePct": -0.8596667376153404,
        "smoothedEle": 14.546082109404681,
        "gradeBand": "descent"
      },
      {
        "lat": 25.129743221200265,
        "lng": 121.74302126875014,
        "ele": 13.238574050213737,
        "distanceKm": 23.441861109203654,
        "gradePct": -2.107428817908462,
        "smoothedEle": 13.567805867667474,
        "gradeBand": "descent"
      },
      {
        "lat": 25.12995747111356,
        "lng": 121.74263086820422,
        "ele": 13.191895686614131,
        "distanceKm": 23.487819621017252,
        "gradePct": -1.6326668887065878,
        "smoothedEle": 13.085105780637809,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130174,
        "lng": 121.742242,
        "ele": 12.75,
        "distanceKm": 23.53377847476106,
        "gradePct": -1.493827672063718,
        "smoothedEle": 12.246620132142933,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130476,
        "lng": 121.741813,
        "ele": 10,
        "distanceKm": 23.588485193669527,
        "gradePct": -2.450180279732254,
        "smoothedEle": 10.622782615008646,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130708908541205,
        "lng": 121.74140828546697,
        "ele": 10,
        "distanceKm": 23.636762188290785,
        "gradePct": -2.09340178265029,
        "smoothedEle": 10.064653981776617,
        "gradeBand": "descent"
      },
      {
        "lat": 25.130941,
        "lng": 121.741003,
        "ele": 10.25,
        "distanceKm": 23.68503900286949,
        "gradePct": -0.4888315314909094,
        "smoothedEle": 10.23624297789485,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13115021458879,
        "lng": 121.74062605848586,
        "ele": 10.433445018313169,
        "distanceKm": 23.729548850954245,
        "gradePct": 0.29073533407512053,
        "smoothedEle": 10.438782454556206,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.131358177492462,
        "lng": 121.74024823894158,
        "ele": 10.636137906883667,
        "distanceKm": 23.774061560491226,
        "gradePct": 0.41426697368740345,
        "smoothedEle": 10.611493120540901,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.131567,
        "lng": 121.739871,
        "ele": 10.75,
        "distanceKm": 23.818574069075698,
        "gradePct": 0.4048289243198062,
        "smoothedEle": 10.793671271825525,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.131422,
        "lng": 121.739869,
        "ele": 11.5,
        "distanceKm": 23.834698612751353,
        "gradePct": 0.38571065743507466,
        "smoothedEle": 10.844474344293083,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 23.834698612751353,
      "elevationGainM": 345.09452689626806,
      "elevationLossM": 346.7433285888858,
      "minimumElevationM": 10,
      "maximumElevationM": 164.25,
      "maximumSustainedGradePct": 13.42551743635608
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 56,
        "startDistanceKm": 0,
        "endDistanceKm": 2.667149296671475,
        "distanceKm": 2.667149296671475,
        "gainM": 56.013660100205946,
        "averageGradePct": 2.100132158710027,
        "maximumGradePct": 12.628162161268182
      },
      {
        "startIndex": 61,
        "endIndex": 137,
        "startDistanceKm": 2.8524116403265127,
        "endDistanceKm": 6.009585602711323,
        "distanceKm": 3.1571739623848103,
        "gainM": 58.34354766893356,
        "averageGradePct": 1.8479674659695675,
        "maximumGradePct": 7.443009918310173
      },
      {
        "startIndex": 143,
        "endIndex": 236,
        "startDistanceKm": 6.3020655939798,
        "endDistanceKm": 9.53946529653394,
        "distanceKm": 3.23739970255414,
        "gainM": 118.57528024157735,
        "averageGradePct": 3.6626703878432934,
        "maximumGradePct": 13.42551743635608
      },
      {
        "startIndex": 341,
        "endIndex": 474,
        "startDistanceKm": 13.984364398911007,
        "endDistanceKm": 20.215667309392078,
        "distanceKm": 6.231302910481071,
        "gainM": 59.73312614756143,
        "averageGradePct": 0.9585976962713547,
        "maximumGradePct": 5.886200261246925
      }
    ]
  },
  "keelung-waimushan-wanli": {
    "routeId": "keelung-waimushan-wanli",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-26T08:28:26.847Z",
      "reviewStatus": "approved",
      "reviewedAt": "2026-07-28T04:38:44.415Z",
      "reviewerNote": "完整騎乘改為基隆車站經外木山、萬里、野柳港東路後沿海線返回的 29.2 公里往返；以稽核頁疊加 OpenStreetMap 目視確認，WayTags 未命中高速公路、樓梯、私人或未鋪裝路段。"
    },
    "waypoints": [
      {
        "name": "基隆車站忠一路口",
        "lat": 25.131422,
        "lng": 121.739869,
        "role": "start"
      },
      {
        "name": "外木山漁港",
        "lat": 25.159349,
        "lng": 121.734383,
        "role": "via"
      },
      {
        "name": "瑪鋉萬里漁港",
        "lat": 25.180466,
        "lng": 121.696007,
        "role": "via"
      },
      {
        "name": "野柳港東路入口",
        "lat": 25.20526,
        "lng": 121.690269,
        "role": "via"
      },
      {
        "name": "基隆車站忠一路口",
        "lat": 25.131422,
        "lng": 121.739869,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 25.131422,
        "lng": 121.739869,
        "ele": 11.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 10.79422734186371,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.131567,
        "lng": 121.739871,
        "ele": 10.75,
        "distanceKm": 0.016124543675653517,
        "gradePct": -1.2011082386586458,
        "smoothedEle": 10.600554119329324,
        "gradeBand": "descent"
      },
      {
        "lat": 25.131827,
        "lng": 121.739377,
        "ele": 10,
        "distanceKm": 0.0736478915638546,
        "gradePct": -0.6424313939708823,
        "smoothedEle": 10.321090165459875,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13206530641863,
        "lng": 121.73893337307945,
        "ele": 10.673181973539272,
        "distanceKm": 0.1255768717206026,
        "gradePct": 0.5160103620618113,
        "smoothedEle": 11.070642519862634,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.132304,
        "lng": 121.73849,
        "ele": 13,
        "distanceKm": 0.17750579267582878,
        "gradePct": 1.923412234212103,
        "smoothedEle": 12.300188046738503,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.132637153520715,
        "lng": 121.73872139661022,
        "ele": 12.500180582228673,
        "distanceKm": 0.22126600610482894,
        "gradePct": 1.3862362137039064,
        "smoothedEle": 12.39465491437996,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13297007676036,
        "lng": 121.73895319830511,
        "ele": 11.625090291114336,
        "distanceKm": 0.26502624267816166,
        "gradePct": -0.3796137192184368,
        "smoothedEle": 11.625090142699717,
        "gradeBand": "descent"
      },
      {
        "lat": 25.133303,
        "lng": 121.739185,
        "ele": 10.75,
        "distanceKm": 0.3087864453316528,
        "gradePct": -1.1901537361486465,
        "smoothedEle": 11.177561067034281,
        "gradeBand": "descent"
      },
      {
        "lat": 25.133622000000003,
        "lng": 121.739407,
        "ele": 11.375,
        "distanceKm": 0.3507107448921513,
        "gradePct": -0.5018414903284024,
        "smoothedEle": 11.375000097241099,
        "gradeBand": "descent"
      },
      {
        "lat": 25.133941,
        "lng": 121.739629,
        "ele": 12,
        "distanceKm": 0.392635013335498,
        "gradePct": 0.3450900578549644,
        "smoothedEle": 11.687829414604858,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13441494809718,
        "lng": 121.7399415957835,
        "ele": 11.323218745852659,
        "distanceKm": 0.45401576273428423,
        "gradePct": -0.056445206494771596,
        "smoothedEle": 11.343216179155608,
        "gradeBand": "descent"
      },
      {
        "lat": 25.134889,
        "lng": 121.740254,
        "ele": 10.75,
        "distanceKm": 0.5153964775910513,
        "gradePct": -0.7237636118961659,
        "smoothedEle": 10.836274892407037,
        "gradeBand": "descent"
      },
      {
        "lat": 25.135272723757442,
        "lng": 121.74050452398694,
        "ele": 10.653197841210625,
        "distanceKm": 0.5649604152637049,
        "gradePct": -0.5996268354784677,
        "smoothedEle": 10.653197821694583,
        "gradeBand": "descent"
      },
      {
        "lat": 25.135656447514883,
        "lng": 121.74075504797389,
        "ele": 10.556395682421249,
        "distanceKm": 0.6145243126148576,
        "gradePct": -0.339939155590102,
        "smoothedEle": 10.503538918407772,
        "gradeBand": "descent"
      },
      {
        "lat": 25.136041,
        "lng": 121.741004,
        "ele": 10.25,
        "distanceKm": 0.6640873211471392,
        "gradePct": -0.5959910288659548,
        "smoothedEle": 10.060431789082413,
        "gradeBand": "descent"
      },
      {
        "lat": 25.136584,
        "lng": 121.741346,
        "ele": 8.5,
        "distanceKm": 0.733591710516543,
        "gradePct": -1.642213112769462,
        "smoothedEle": 8.690857946682225,
        "gradeBand": "descent"
      },
      {
        "lat": 25.136934,
        "lng": 121.741394,
        "ele": 8.25,
        "distanceKm": 0.7728087934481493,
        "gradePct": -1.4112350185596605,
        "smoothedEle": 8.47734143247788,
        "gradeBand": "descent"
      },
      {
        "lat": 25.137317433719016,
        "lng": 121.7412126306614,
        "ele": 8.814581749522365,
        "distanceKm": 0.8191893534749508,
        "gradePct": -0.18616278063880115,
        "smoothedEle": 8.788491508289342,
        "gradeBand": "descent"
      },
      {
        "lat": 25.137695716859508,
        "lng": 121.7410173153307,
        "ele": 9.282290874761182,
        "distanceKm": 0.8656207835457669,
        "gradePct": 0.7658145465123349,
        "smoothedEle": 9.282290935078091,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.138074,
        "lng": 121.740822,
        "ele": 9.75,
        "distanceKm": 0.9120521878240953,
        "gradePct": 1.6809781962550139,
        "smoothedEle": 10.4215890918036,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13844974267814,
        "lng": 121.7405895336724,
        "ele": 12.80824598393249,
        "distanceKm": 0.9599398527656039,
        "gradePct": 3.099249360175972,
        "smoothedEle": 12.32112345350285,
        "gradeBand": "hard"
      },
      {
        "lat": 25.138842,
        "lng": 121.74039,
        "ele": 14,
        "distanceKm": 1.0079594671450371,
        "gradePct": 3.369095779983893,
        "smoothedEle": 13.690260833399758,
        "gradeBand": "hard"
      },
      {
        "lat": 25.1392135,
        "lng": 121.74020525,
        "ele": 14,
        "distanceKm": 1.0532617335435728,
        "gradePct": 1.943773925587707,
        "smoothedEle": 14,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.139585,
        "lng": 121.7400205,
        "ele": 14,
        "distanceKm": 1.0985639767124658,
        "gradePct": 0.5776238074899605,
        "smoothedEle": 14,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1399565,
        "lng": 121.73983575,
        "ele": 14,
        "distanceKm": 1.1438661966514536,
        "gradePct": 0.06423885597964046,
        "smoothedEle": 14,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140328,
        "lng": 121.739651,
        "ele": 14,
        "distanceKm": 1.1891683933602741,
        "gradePct": 0,
        "smoothedEle": 14,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.14072566666667,
        "lng": 121.73946099999999,
        "ele": 14,
        "distanceKm": 1.2373459160144762,
        "gradePct": 0,
        "smoothedEle": 14,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.141123333333333,
        "lng": 121.739271,
        "ele": 14,
        "distanceKm": 1.2855234139370868,
        "gradePct": 0,
        "smoothedEle": 14,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.141521,
        "lng": 121.739081,
        "ele": 14,
        "distanceKm": 1.3337008871296692,
        "gradePct": -0.10614840859951959,
        "smoothedEle": 13.89385159140048,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14193343104533,
        "lng": 121.73887863674476,
        "ele": 13.573866283113162,
        "distanceKm": 1.3838815912640443,
        "gradePct": -0.6715220841688557,
        "smoothedEle": 13.328477915831144,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142345715522666,
        "lng": 121.73867531837239,
        "ele": 12.161933141556585,
        "distanceKm": 1.4340864889982263,
        "gradePct": -1.727574167153554,
        "smoothedEle": 12.161932942648008,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142758,
        "lng": 121.738472,
        "ele": 10.75,
        "distanceKm": 1.4842913585570554,
        "gradePct": -2.482555824437451,
        "smoothedEle": 10.836400869413163,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142993,
        "lng": 121.738399,
        "ele": 10.25,
        "distanceKm": 1.5114357167364871,
        "gradePct": -2.8141232188791774,
        "smoothedEle": 9.874115835585838,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143318,
        "lng": 121.738424,
        "ele": 8.5,
        "distanceKm": 1.5476616288547065,
        "gradePct": -2.3026915516891395,
        "smoothedEle": 9.500824300414937,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143729999999998,
        "lng": 121.7386105,
        "ele": 10.25,
        "distanceKm": 1.5971711731416738,
        "gradePct": -0.12980291129302823,
        "smoothedEle": 10.250000210207991,
        "gradeBand": "descent"
      },
      {
        "lat": 25.144142,
        "lng": 121.738797,
        "ele": 12,
        "distanceKm": 1.6466806934048706,
        "gradePct": 1.4856705382383706,
        "smoothedEle": 10.99660293196447,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.144518,
        "lng": 121.738928,
        "ele": 10,
        "distanceKm": 1.6905201563710202,
        "gradePct": 0.5260005132946648,
        "smoothedEle": 10.675357875503044,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.145005,
        "lng": 121.738867,
        "ele": 10.5,
        "distanceKm": 1.7450191543052047,
        "gradePct": 0.3600418999989931,
        "smoothedEle": 11.331588850658843,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.145322,
        "lng": 121.738756,
        "ele": 13.5,
        "distanceKm": 1.7819963972503126,
        "gradePct": 2.4595333937897994,
        "smoothedEle": 13.19735132912774,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.14564,
        "lng": 121.738705,
        "ele": 15.5,
        "distanceKm": 1.8177271287552006,
        "gradePct": 4.407286431119344,
        "smoothedEle": 15.410247724950723,
        "gradeBand": "hard"
      },
      {
        "lat": 25.145971,
        "lng": 121.738702,
        "ele": 17.25,
        "distanceKm": 1.8545339390521332,
        "gradePct": 5.583443273260482,
        "smoothedEle": 17.39512006335495,
        "gradeBand": "hard"
      },
      {
        "lat": 25.146313600853123,
        "lng": 121.7385813427113,
        "ele": 19.576271897247867,
        "distanceKm": 1.8945185578679609,
        "gradePct": 5.631721252531547,
        "smoothedEle": 19.604602298841808,
        "gradeBand": "hard"
      },
      {
        "lat": 25.146654,
        "lng": 121.738451,
        "ele": 22,
        "distanceKm": 1.9345785939730076,
        "gradePct": 5.0300987583783145,
        "smoothedEle": 21.34909154715201,
        "gradeBand": "hard"
      },
      {
        "lat": 25.147138930794444,
        "lng": 121.73826627874232,
        "ele": 22.35138811104308,
        "distanceKm": 1.9916161717221952,
        "gradePct": 2.8636079418442235,
        "smoothedEle": 22.307829303727992,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.147624,
        "lng": 121.738082,
        "ele": 22.5,
        "distanceKm": 2.048653774956072,
        "gradePct": 1.2689071302396673,
        "smoothedEle": 22.854586694828942,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.147954,
        "lng": 121.737978,
        "ele": 23.75,
        "distanceKm": 2.086812125433417,
        "gradePct": 1.7076861945265827,
        "smoothedEle": 23.93476486431911,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.148363,
        "lng": 121.737791,
        "ele": 26,
        "distanceKm": 2.1360321099813544,
        "gradePct": 3.8432887895220174,
        "smoothedEle": 26.576885326601346,
        "gradeBand": "hard"
      },
      {
        "lat": 25.148709,
        "lng": 121.73749,
        "ele": 30.5,
        "distanceKm": 2.1850027544063746,
        "gradePct": 6.156017096456727,
        "smoothedEle": 30.03956268479902,
        "gradeBand": "steep"
      },
      {
        "lat": 25.149248,
        "lng": 121.737287,
        "ele": 34.25,
        "distanceKm": 2.2483241845271182,
        "gradePct": 6.116228161548355,
        "smoothedEle": 33.562276814763955,
        "gradeBand": "steep"
      },
      {
        "lat": 25.149621,
        "lng": 121.737149,
        "ele": 34.25,
        "distanceKm": 2.2920640794705256,
        "gradePct": 2.971830412491511,
        "smoothedEle": 33.40423055425143,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.149993,
        "lng": 121.736908,
        "ele": 31,
        "distanceKm": 2.3400167289629206,
        "gradePct": -2.0891591422258546,
        "smoothedEle": 31.010955162243366,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150249,
        "lng": 121.736639,
        "ele": 28.25,
        "distanceKm": 2.379302962889813,
        "gradePct": -4.546018431238006,
        "smoothedEle": 28.90432212757917,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150611,
        "lng": 121.736314,
        "ele": 27.5,
        "distanceKm": 2.431171721309529,
        "gradePct": -5.146292096686323,
        "smoothedEle": 26.30610977148603,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150748,
        "lng": 121.736286,
        "ele": 25.25,
        "distanceKm": 2.4466639496074536,
        "gradePct": -5.006823327467891,
        "smoothedEle": 25.647690068824232,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150816,
        "lng": 121.736291,
        "ele": 24,
        "distanceKm": 2.4542419447708337,
        "gradePct": -4.922535734522888,
        "smoothedEle": 25.325625274380577,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150849,
        "lng": 121.736301,
        "ele": 23.75,
        "distanceKm": 2.458046924854185,
        "gradePct": -4.859142299186977,
        "smoothedEle": 25.184985491496995,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151082,
        "lng": 121.736405,
        "ele": 24,
        "distanceKm": 2.4859901658003265,
        "gradePct": -4.116574084209997,
        "smoothedEle": 24.45277235165888,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151506,
        "lng": 121.736594,
        "ele": 25,
        "distanceKm": 2.5368301071449606,
        "gradePct": -1.0549458924679298,
        "smoothedEle": 25.01068248101226,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151944,
        "lng": 121.736594,
        "ele": 26,
        "distanceKm": 2.5855335522871425,
        "gradePct": 1.2089206447761132,
        "smoothedEle": 25.673657908265564,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.152266,
        "lng": 121.736338,
        "ele": 25.75,
        "distanceKm": 2.629646098330867,
        "gradePct": 0.9551013889064803,
        "smoothedEle": 25.886947601017937,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.152596,
        "lng": 121.736057,
        "ele": 26,
        "distanceKm": 2.675975471472794,
        "gradePct": 0.46378985054757355,
        "smoothedEle": 26.007338426852836,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.152833,
        "lng": 121.735752,
        "ele": 26.25,
        "distanceKm": 2.716434103132452,
        "gradePct": 0.033705950456099004,
        "smoothedEle": 25.856771897630647,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.15305,
        "lng": 121.73539450000001,
        "ele": 25.125,
        "distanceKm": 2.759758300120198,
        "gradePct": -0.8401970234811734,
        "smoothedEle": 25.12499970104679,
        "gradeBand": "descent"
      },
      {
        "lat": 25.153267,
        "lng": 121.735037,
        "ele": 24,
        "distanceKm": 2.803082443960707,
        "gradePct": -1.173086379746869,
        "smoothedEle": 24.733373628884618,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1534525,
        "lng": 121.7347,
        "ele": 25.375000000000007,
        "distanceKm": 2.8427810711625283,
        "gradePct": -0.03675518335609592,
        "smoothedEle": 25.37500030291102,
        "gradeBand": "descent"
      },
      {
        "lat": 25.153638,
        "lng": 121.734363,
        "ele": 26.75,
        "distanceKm": 2.8824796543045657,
        "gradePct": 1.4019416159464047,
        "smoothedEle": 26.321552960648823,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.153936763727142,
        "lng": 121.73388634835742,
        "ele": 26.683366954803798,
        "distanceKm": 2.9408342562537015,
        "gradePct": 1.4195843864882878,
        "smoothedEle": 26.7631194105486,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.154223,
        "lng": 121.7334,
        "ele": 27,
        "distanceKm": 2.9992228968004904,
        "gradePct": 0.9628877469125491,
        "smoothedEle": 27.41113601353194,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.154847,
        "lng": 121.733617,
        "ele": 30.5,
        "distanceKm": 3.071964972753401,
        "gradePct": 3.466392076290334,
        "smoothedEle": 30.575010559358137,
        "gradeBand": "hard"
      },
      {
        "lat": 25.155156,
        "lng": 121.733751,
        "ele": 32.25,
        "distanceKm": 3.1088764893040066,
        "gradePct": 4.033223629980466,
        "smoothedEle": 31.864237069301375,
        "gradeBand": "hard"
      },
      {
        "lat": 25.155530379293474,
        "lng": 121.73384459482337,
        "ele": 32.83013320269653,
        "distanceKm": 3.1515581704383493,
        "gradePct": 3.096773866762697,
        "smoothedEle": 32.78420235535213,
        "gradeBand": "hard"
      },
      {
        "lat": 25.155905,
        "lng": 121.733937,
        "ele": 33.25,
        "distanceKm": 3.194239776646805,
        "gradePct": 1.830345987966796,
        "smoothedEle": 33.18335946800667,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.156399,
        "lng": 121.73409,
        "ele": 33.5,
        "distanceKm": 3.2512878405301273,
        "gradePct": 0.23131384232731714,
        "smoothedEle": 33.009689479407434,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.156752208043066,
        "lng": 121.73419162038967,
        "ele": 32.03027018292111,
        "distanceKm": 3.2918727568361037,
        "gradePct": -1.4460102534080004,
        "smoothedEle": 31.715212915682894,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157105,
        "lng": 121.734295,
        "ele": 29.5,
        "distanceKm": 3.3324579265338983,
        "gradePct": -4.000096938689367,
        "smoothedEle": 29.066915975142376,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157522,
        "lng": 121.73439,
        "ele": 25,
        "distanceKm": 3.3798018424208953,
        "gradePct": -6.761377658800383,
        "smoothedEle": 25.338843216376834,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157754853702688,
        "lng": 121.73467038494518,
        "ele": 22.258030087841583,
        "distanceKm": 3.4181003137195938,
        "gradePct": -8.630502151304935,
        "smoothedEle": 21.373288607723193,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157992,
        "lng": 121.734938,
        "ele": 17.25,
        "distanceKm": 3.45579417989701,
        "gradePct": -9.114376331220484,
        "smoothedEle": 18.11493815226829,
        "gradeBand": "descent"
      },
      {
        "lat": 25.158042,
        "lng": 121.734862,
        "ele": 15,
        "distanceKm": 3.465250430468291,
        "gradePct": -8.677836142004134,
        "smoothedEle": 17.80685066347427,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15774,
        "lng": 121.73431,
        "ele": 19,
        "distanceKm": 3.530167910868805,
        "gradePct": -2.207336535713706,
        "smoothedEle": 18.12279930857828,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157686,
        "lng": 121.733598,
        "ele": 17.75,
        "distanceKm": 3.6020798629596857,
        "gradePct": -1.053576833308429,
        "smoothedEle": 16.932519993507594,
        "gradeBand": "descent"
      },
      {
        "lat": 25.157965,
        "lng": 121.733204,
        "ele": 13.75,
        "distanceKm": 3.6524283476634656,
        "gradePct": -4.9897472969134276,
        "smoothedEle": 12.764599526497463,
        "gradeBand": "descent"
      },
      {
        "lat": 25.158335,
        "lng": 121.733248,
        "ele": 7,
        "distanceKm": 3.693808176421186,
        "gradePct": -7.189005183818893,
        "smoothedEle": 9.880426923756776,
        "gradeBand": "descent"
      },
      {
        "lat": 25.158567,
        "lng": 121.732946,
        "ele": 10,
        "distanceKm": 3.7336751001325297,
        "gradePct": -5.826082499994982,
        "smoothedEle": 8.490938011303781,
        "gradeBand": "descent"
      },
      {
        "lat": 25.158751,
        "lng": 121.733022,
        "ele": 8.5,
        "distanceKm": 3.7555180964489834,
        "gradePct": -3.839876170818704,
        "smoothedEle": 8.709367974468318,
        "gradeBand": "descent"
      },
      {
        "lat": 25.159181,
        "lng": 121.732985,
        "ele": 8,
        "distanceKm": 3.8034767771201623,
        "gradePct": -1.335029412345096,
        "smoothedEle": 8.208416068663935,
        "gradeBand": "descent"
      },
      {
        "lat": 25.159674,
        "lng": 121.732574,
        "ele": 8.5,
        "distanceKm": 3.872151668983409,
        "gradePct": -0.3615640425907195,
        "smoothedEle": 8.174058121007882,
        "gradeBand": "descent"
      },
      {
        "lat": 25.160177,
        "lng": 121.732348,
        "ele": 7.25,
        "distanceKm": 3.9325310115993712,
        "gradePct": -0.11164312725942861,
        "smoothedEle": 8.082237150515876,
        "gradeBand": "descent"
      },
      {
        "lat": 25.160307,
        "lng": 121.732105,
        "ele": 9.25,
        "distanceKm": 3.960940359679825,
        "gradePct": -0.7001759317459898,
        "smoothedEle": 7.479491190859964,
        "gradeBand": "descent"
      },
      {
        "lat": 25.160579,
        "lng": 121.732282,
        "ele": 6,
        "distanceKm": 3.9960417572216973,
        "gradePct": -1.663576555885013,
        "smoothedEle": 6.474151075386806,
        "gradeBand": "descent"
      },
      {
        "lat": 25.160896,
        "lng": 121.732282,
        "ele": 4.25,
        "distanceKm": 4.031290597656012,
        "gradePct": -3.3510088620603797,
        "smoothedEle": 4.733114629166678,
        "gradeBand": "descent"
      },
      {
        "lat": 25.161210279776896,
        "lng": 121.7319588078384,
        "ele": 3.930593116584329,
        "distanceKm": 4.0790324771417765,
        "gradePct": -2.966014555994695,
        "smoothedEle": 3.995299789152643,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16152489981408,
        "lng": 121.731636006532,
        "ele": 3.8588275971536077,
        "distanceKm": 4.126775224317599,
        "gradePct": -1.0973136670703103,
        "smoothedEle": 3.858827576691466,
        "gradeBand": "descent"
      },
      {
        "lat": 25.161839519851263,
        "lng": 121.7313132052256,
        "ele": 3.787062077722885,
        "distanceKm": 4.174517914468428,
        "gradePct": -0.27800690253287474,
        "smoothedEle": 3.787062057260883,
        "gradeBand": "descent"
      },
      {
        "lat": 25.162154139888447,
        "lng": 121.7309904039192,
        "ele": 3.7152965582921644,
        "distanceKm": 4.22226054759465,
        "gradePct": -0.1564362015805162,
        "smoothedEle": 3.7152965378293565,
        "gradeBand": "descent"
      },
      {
        "lat": 25.162468759925634,
        "lng": 121.7306676026128,
        "ele": 3.6435310388614432,
        "distanceKm": 4.27000312369402,
        "gradePct": -0.15031755013811984,
        "smoothedEle": 3.6435310183985656,
        "gradeBand": "descent"
      },
      {
        "lat": 25.162783379962818,
        "lng": 121.7303448013064,
        "ele": 3.571765519430721,
        "distanceKm": 4.317745642766345,
        "gradePct": -0.15031772968637033,
        "smoothedEle": 3.571765498967737,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163098,
        "lng": 121.730022,
        "ele": 3.5,
        "distanceKm": 4.365488104811328,
        "gradePct": -0.13156644199602943,
        "smoothedEle": 3.518751446777563,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163144,
        "lng": 121.729954,
        "ele": 3.5,
        "distanceKm": 4.374032067571422,
        "gradePct": -0.12485496980200939,
        "smoothedEle": 3.5126198275228133,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163153,
        "lng": 121.729678,
        "ele": 3.5,
        "distanceKm": 4.401827487348825,
        "gradePct": 0.8444325427362535,
        "smoothedEle": 4.440125867761687,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.162758,
        "lng": 121.729191,
        "ele": 9,
        "distanceKm": 4.467641092157491,
        "gradePct": 6.258667098004371,
        "smoothedEle": 9.77587344222966,
        "gradeBand": "steep"
      },
      {
        "lat": 25.162701,
        "lng": 121.729089,
        "ele": 11,
        "distanceKm": 4.47970567709863,
        "gradePct": 7.491519530647654,
        "smoothedEle": 11.193462172813463,
        "gradeBand": "steep"
      },
      {
        "lat": 25.162699,
        "lng": 121.72891,
        "ele": 13.75,
        "distanceKm": 4.497722167662598,
        "gradePct": 8.29293117400136,
        "smoothedEle": 12.596066529060545,
        "gradeBand": "steep"
      },
      {
        "lat": 25.162804,
        "lng": 121.728589,
        "ele": 15.25,
        "distanceKm": 4.532073617913902,
        "gradePct": 7.841120010110117,
        "smoothedEle": 14.733409351804468,
        "gradeBand": "steep"
      },
      {
        "lat": 25.162942033710557,
        "lng": 121.72808490222359,
        "ele": 15.924034336046374,
        "distanceKm": 4.585078431086104,
        "gradePct": 4.5803406123072685,
        "smoothedEle": 16.192077816049707,
        "gradeBand": "hard"
      },
      {
        "lat": 25.163033,
        "lng": 121.727565,
        "ele": 17.75,
        "distanceKm": 4.638371602346042,
        "gradePct": 4.079789928295533,
        "smoothedEle": 18.986516960696743,
        "gradeBand": "hard"
      },
      {
        "lat": 25.162924,
        "lng": 121.727116,
        "ele": 24,
        "distanceKm": 4.685157449115504,
        "gradePct": 5.5716899878910295,
        "smoothedEle": 21.76791113167426,
        "gradeBand": "hard"
      },
      {
        "lat": 25.163019,
        "lng": 121.726432,
        "ele": 20.25,
        "distanceKm": 4.754802964855691,
        "gradePct": -1.4890380414498008,
        "smoothedEle": 18.474314844238446,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163202,
        "lng": 121.726074,
        "ele": 12.25,
        "distanceKm": 4.796182171464865,
        "gradePct": -7.853736150388088,
        "smoothedEle": 13.392806387573343,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163459,
        "lng": 121.725749,
        "ele": 8,
        "distanceKm": 4.8396162727326475,
        "gradePct": -8.94832687873841,
        "smoothedEle": 10.244179686291993,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163831,
        "lng": 121.725267,
        "ele": 13.75,
        "distanceKm": 4.903367426185433,
        "gradePct": -0.489935367278612,
        "smoothedEle": 12.381997231996282,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16427,
        "lng": 121.724805,
        "ele": 11.75,
        "distanceKm": 4.970782583208304,
        "gradePct": 2.114251226989968,
        "smoothedEle": 13.403555303369593,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.164318,
        "lng": 121.724236,
        "ele": 18,
        "distanceKm": 5.028295963253158,
        "gradePct": 4.305314563738885,
        "smoothedEle": 17.065059907193593,
        "gradeBand": "hard"
      },
      {
        "lat": 25.164257,
        "lng": 121.723873,
        "ele": 19.25,
        "distanceKm": 5.065453278326456,
        "gradePct": 5.890496041021223,
        "smoothedEle": 19.213295107110007,
        "gradeBand": "hard"
      },
      {
        "lat": 25.16416290757397,
        "lng": 121.72339647033809,
        "ele": 20.648702336282376,
        "distanceKm": 5.114540102782862,
        "gradePct": 4.8756163734042905,
        "smoothedEle": 21.064929690808377,
        "gradeBand": "hard"
      },
      {
        "lat": 25.16406727171598,
        "lng": 121.72292031355872,
        "ele": 23.68246822418825,
        "distanceKm": 5.163627193154164,
        "gradePct": 4.5747469391051165,
        "smoothedEle": 23.682467667726666,
        "gradeBand": "hard"
      },
      {
        "lat": 25.16397163585799,
        "lng": 121.72244415677936,
        "ele": 26.716234112094124,
        "distanceKm": 5.212714320210009,
        "gradePct": 5.720175342875094,
        "smoothedEle": 26.716233555610742,
        "gradeBand": "hard"
      },
      {
        "lat": 25.163876,
        "lng": 121.721968,
        "ele": 29.75,
        "distanceKm": 5.261801483951835,
        "gradePct": 4.869922336313415,
        "smoothedEle": 28.455035218173652,
        "gradeBand": "hard"
      },
      {
        "lat": 25.163855499999997,
        "lng": 121.72143650000001,
        "ele": 27.5,
        "distanceKm": 5.315341337076863,
        "gradePct": 0.6907104194343165,
        "smoothedEle": 27.500000101076147,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.163835,
        "lng": 121.720905,
        "ele": 25.25,
        "distanceKm": 5.368881199186439,
        "gradePct": -1.4248214417029048,
        "smoothedEle": 26.903926977507975,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163762,
        "lng": 121.720481,
        "ele": 29.25,
        "distanceKm": 5.412318677874404,
        "gradePct": -1.4825383451685195,
        "smoothedEle": 26.071379454908886,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163908,
        "lng": 121.720041,
        "ele": 21.5,
        "distanceKm": 5.4594833199685855,
        "gradePct": -4.496221064063695,
        "smoothedEle": 22.5123349318911,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164098,
        "lng": 121.71961,
        "ele": 17.5,
        "distanceKm": 5.507731560620616,
        "gradePct": -6.023221201453694,
        "smoothedEle": 20.136077562330065,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164119,
        "lng": 121.719126,
        "ele": 23.75,
        "distanceKm": 5.556498204608753,
        "gradePct": -0.2551968635291333,
        "smoothedEle": 22.482394913325834,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164085,
        "lng": 121.718664,
        "ele": 25,
        "distanceKm": 5.603148238417302,
        "gradePct": 2.9250041780930505,
        "smoothedEle": 23.28681335292366,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.164364,
        "lng": 121.718147,
        "ele": 18,
        "distanceKm": 5.66372682817788,
        "gradePct": -3.6705734237384413,
        "smoothedEle": 18.93646958986062,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164512,
        "lng": 121.717775,
        "ele": 16.5,
        "distanceKm": 5.704622859041992,
        "gradePct": -5.849949365341707,
        "smoothedEle": 17.330966728123478,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164568,
        "lng": 121.717299,
        "ele": 18,
        "distanceKm": 5.752931264428083,
        "gradePct": -2.955711801948972,
        "smoothedEle": 16.756022012669785,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16475,
        "lng": 121.716798,
        "ele": 14.25,
        "distanceKm": 5.807262409616035,
        "gradePct": -3.4495529465958388,
        "smoothedEle": 13.849999048592665,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164893,
        "lng": 121.716464,
        "ele": 10.25,
        "distanceKm": 5.844447810659373,
        "gradePct": -5.55551815459113,
        "smoothedEle": 11.301470074498637,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164959086936065,
        "lng": 121.71609441371405,
        "ele": 9.59019306766763,
        "distanceKm": 5.882362405187634,
        "gradePct": -4.717323947076237,
        "smoothedEle": 10.464507596933823,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164996,
        "lng": 121.715719,
        "ele": 11.75,
        "distanceKm": 5.920366805987607,
        "gradePct": -1.1219750726180622,
        "smoothedEle": 11.829904474667046,
        "gradeBand": "descent"
      },
      {
        "lat": 25.165061,
        "lng": 121.715227,
        "ele": 14.75,
        "distanceKm": 5.970406999367699,
        "gradePct": 4.000568062625868,
        "smoothedEle": 14.72899055037795,
        "gradeBand": "hard"
      },
      {
        "lat": 25.16519,
        "lng": 121.714782,
        "ele": 17.5,
        "distanceKm": 6.017433352118497,
        "gradePct": 5.8397245558841275,
        "smoothedEle": 17.564237847700035,
        "gradeBand": "hard"
      },
      {
        "lat": 25.16521,
        "lng": 121.714718,
        "ele": 18,
        "distanceKm": 6.024247497189282,
        "gradePct": 5.9183536530281415,
        "smoothedEle": 17.973086551947137,
        "gradeBand": "hard"
      },
      {
        "lat": 25.165059,
        "lng": 121.714296,
        "ele": 20.75,
        "distanceKm": 6.069916599043819,
        "gradePct": 6.025078582423308,
        "smoothedEle": 20.72565771680839,
        "gradeBand": "steep"
      },
      {
        "lat": 25.1649415,
        "lng": 121.71393350000001,
        "ele": 23.12499999999997,
        "distanceKm": 6.108668035308336,
        "gradePct": 6.089228020090442,
        "smoothedEle": 23.124999607013756,
        "gradeBand": "steep"
      },
      {
        "lat": 25.164824,
        "lng": 121.713571,
        "ele": 25.5,
        "distanceKm": 6.14741950466643,
        "gradePct": 4.819370252221144,
        "smoothedEle": 24.189081590368456,
        "gradeBand": "hard"
      },
      {
        "lat": 25.164701,
        "lng": 121.713059,
        "ele": 23,
        "distanceKm": 6.200732136005717,
        "gradePct": 0.14820557596879932,
        "smoothedEle": 22.781844411132713,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.164542,
        "lng": 121.712749,
        "ele": 20.5,
        "distanceKm": 6.236592320235623,
        "gradePct": -3.0376753215835066,
        "smoothedEle": 20.85410110657765,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164215,
        "lng": 121.712425,
        "ele": 18.75,
        "distanceKm": 6.285432709887219,
        "gradePct": -4.385372536417149,
        "smoothedEle": 18.80031465482338,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164069,
        "lng": 121.712252,
        "ele": 18,
        "distanceKm": 6.309238238167145,
        "gradePct": -4.865737761047381,
        "smoothedEle": 17.458842365428385,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16404,
        "lng": 121.712182,
        "ele": 17.5,
        "distanceKm": 6.316986114897345,
        "gradePct": -4.828937855467227,
        "smoothedEle": 17.079138066919572,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163905,
        "lng": 121.711751,
        "ele": 14.25,
        "distanceKm": 6.362886888144808,
        "gradePct": -3.5821534152515775,
        "smoothedEle": 16.166235232603874,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163853479585576,
        "lng": 121.71137596648305,
        "ele": 17.601462532869782,
        "distanceKm": 6.401063350165354,
        "gradePct": 0.08232228030455631,
        "smoothedEle": 18.00183015142379,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.163834,
        "lng": 121.710997,
        "ele": 22.25,
        "distanceKm": 6.439264817416141,
        "gradePct": 4.944869850942801,
        "smoothedEle": 21.58091536766421,
        "gradeBand": "hard"
      },
      {
        "lat": 25.163851,
        "lng": 121.710512,
        "ele": 25.25,
        "distanceKm": 6.488112861272397,
        "gradePct": 7.617550610149339,
        "smoothedEle": 24.996697297732155,
        "gradeBand": "steep"
      },
      {
        "lat": 25.163878,
        "lng": 121.71003,
        "ele": 27.25,
        "distanceKm": 6.536715197283566,
        "gradePct": 4.956697371126438,
        "smoothedEle": 26.29873951270175,
        "gradeBand": "hard"
      },
      {
        "lat": 25.163942,
        "lng": 121.709538,
        "ele": 25.5,
        "distanceKm": 6.586739900436715,
        "gradePct": 0.28905198104706387,
        "smoothedEle": 25.189742674563682,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.164062,
        "lng": 121.709037,
        "ele": 22.37499999999997,
        "distanceKm": 6.638897265374554,
        "gradePct": -3.8753660297458796,
        "smoothedEle": 22.37499925060713,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164182,
        "lng": 121.708536,
        "ele": 19.25,
        "distanceKm": 6.691054582351252,
        "gradePct": -5.640672634926341,
        "smoothedEle": 19.316222338073413,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164316,
        "lng": 121.707921,
        "ele": 15.5,
        "distanceKm": 6.754717537862416,
        "gradePct": -5.909180194059271,
        "smoothedEle": 15.538035822270608,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164328,
        "lng": 121.70772,
        "ele": 14.5,
        "distanceKm": 6.774990495353961,
        "gradePct": -5.965364479503382,
        "smoothedEle": 14.29293964644648,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164514,
        "lng": 121.707484,
        "ele": 12.75,
        "distanceKm": 6.806484746159124,
        "gradePct": -5.28858774735125,
        "smoothedEle": 13.111905241252872,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164661,
        "lng": 121.707168,
        "ele": 11.75,
        "distanceKm": 6.842242192420604,
        "gradePct": -4.861784213127749,
        "smoothedEle": 11.416622230484377,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164959,
        "lng": 121.706828,
        "ele": 9.25,
        "distanceKm": 6.889874949363946,
        "gradePct": -3.661521717031193,
        "smoothedEle": 10.073250904040842,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16529046526364,
        "lng": 121.7066277648496,
        "ele": 9.831654281702889,
        "distanceKm": 6.931881611693034,
        "gradePct": -2.0514488887272773,
        "smoothedEle": 9.8563749885611,
        "gradeBand": "descent"
      },
      {
        "lat": 25.165636,
        "lng": 121.706456,
        "ele": 10.5,
        "distanceKm": 6.974013036374391,
        "gradePct": 0.13532899138643245,
        "smoothedEle": 10.655928326635154,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.16603,
        "lng": 121.706405,
        "ele": 11.75,
        "distanceKm": 7.018123532482233,
        "gradePct": 1.284155910540492,
        "smoothedEle": 11.211562394075163,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.166562,
        "lng": 121.706772,
        "ele": 10.5,
        "distanceKm": 7.087863019426416,
        "gradePct": -0.19393322882374056,
        "smoothedEle": 10.636455217197916,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16699,
        "lng": 121.707099,
        "ele": 10.25,
        "distanceKm": 7.145724627905663,
        "gradePct": -1.2460061999841914,
        "smoothedEle": 9.737943563668367,
        "gradeBand": "descent"
      },
      {
        "lat": 25.167481,
        "lng": 121.707454,
        "ele": 7,
        "distanceKm": 7.210972047860582,
        "gradePct": -2.211565618695936,
        "smoothedEle": 8.066037988676939,
        "gradeBand": "descent"
      },
      {
        "lat": 25.167929,
        "lng": 121.707431,
        "ele": 9,
        "distanceKm": 7.260841191566143,
        "gradePct": 0.4609862308003974,
        "smoothedEle": 9.81158164988111,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.168405,
        "lng": 121.707309,
        "ele": 14.75,
        "distanceKm": 7.315175445033081,
        "gradePct": 5.094242037635306,
        "smoothedEle": 13.307409348068774,
        "gradeBand": "hard"
      },
      {
        "lat": 25.16866,
        "lng": 121.70733,
        "ele": 15,
        "distanceKm": 7.343608842088941,
        "gradePct": 4.596890782385665,
        "smoothedEle": 13.805297479530823,
        "gradeBand": "hard"
      },
      {
        "lat": 25.168823,
        "lng": 121.707481,
        "ele": 12.75,
        "distanceKm": 7.367261275285143,
        "gradePct": 2.2206372445037386,
        "smoothedEle": 12.445282570749214,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.169089,
        "lng": 121.707742,
        "ele": 9,
        "distanceKm": 7.406818588079604,
        "gradePct": -2.8635239443472105,
        "smoothedEle": 9.906211098036469,
        "gradeBand": "descent"
      },
      {
        "lat": 25.169376,
        "lng": 121.708182,
        "ele": 8,
        "distanceKm": 7.461400730666126,
        "gradePct": -4.064262383044564,
        "smoothedEle": 8.718001503298128,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16965,
        "lng": 121.708496,
        "ele": 9.75,
        "distanceKm": 7.505296477382613,
        "gradePct": -0.3448140678107906,
        "smoothedEle": 9.659096989500496,
        "gradeBand": "descent"
      },
      {
        "lat": 25.169969,
        "lng": 121.708557,
        "ele": 11,
        "distanceKm": 7.541295004465614,
        "gradePct": 1.5912351904758215,
        "smoothedEle": 10.74692227459848,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.170514,
        "lng": 121.708506,
        "ele": 11.75,
        "distanceKm": 7.602113276377687,
        "gradePct": 2.2144284745050724,
        "smoothedEle": 11.805279760913669,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.170926,
        "lng": 121.708555,
        "ele": 12.5,
        "distanceKm": 7.648190278712782,
        "gradePct": 1.5100822204111868,
        "smoothedEle": 12.376995821468876,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.17125,
        "lng": 121.708489,
        "ele": 12.75,
        "distanceKm": 7.68482462854297,
        "gradePct": 1.3076035436957796,
        "smoothedEle": 12.812026846691792,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.171592,
        "lng": 121.708279,
        "ele": 13.25,
        "distanceKm": 7.728331064781348,
        "gradePct": 0.7170749090463929,
        "smoothedEle": 12.847660786742631,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.172019,
        "lng": 121.708226,
        "ele": 12.25,
        "distanceKm": 7.776110004010685,
        "gradePct": -0.10159596644389915,
        "smoothedEle": 12.606945160908372,
        "gradeBand": "descent"
      },
      {
        "lat": 25.17227,
        "lng": 121.708222,
        "ele": 11.25,
        "distanceKm": 7.804022871895254,
        "gradePct": 0.3668483262439461,
        "smoothedEle": 13.194599491262991,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.172063,
        "lng": 121.708126,
        "ele": 16,
        "distanceKm": 7.828985535383707,
        "gradePct": 0.35023600042475017,
        "smoothedEle": 13.194599491262991,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.172415,
        "lng": 121.70818,
        "ele": 12.25,
        "distanceKm": 7.868501653128753,
        "gradePct": 0.3409009722912527,
        "smoothedEle": 12.986177853695132,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.172823,
        "lng": 121.7083,
        "ele": 10.75,
        "distanceKm": 7.915448994650721,
        "gradePct": -2.38641002295388,
        "smoothedEle": 10.80818946830912,
        "gradeBand": "descent"
      },
      {
        "lat": 25.173223,
        "lng": 121.708402,
        "ele": 9.5,
        "distanceKm": 7.961096119406545,
        "gradePct": -3.4815903590695267,
        "smoothedEle": 9.543646834295696,
        "gradeBand": "descent"
      },
      {
        "lat": 25.173695,
        "lng": 121.708441,
        "ele": 8.25,
        "distanceKm": 8.013726737649682,
        "gradePct": -2.6426333008690883,
        "smoothedEle": 8.245455382673724,
        "gradeBand": "descent"
      },
      {
        "lat": 25.174272,
        "lng": 121.708303,
        "ele": 6.5,
        "distanceKm": 8.079372080128921,
        "gradePct": -2.38180226836845,
        "smoothedEle": 6.7110481137487215,
        "gradeBand": "descent"
      },
      {
        "lat": 25.174506,
        "lng": 121.708191,
        "ele": 6.25,
        "distanceKm": 8.107727968482571,
        "gradePct": -1.8501626918049339,
        "smoothedEle": 6.543258857958456,
        "gradeBand": "descent"
      },
      {
        "lat": 25.174762,
        "lng": 121.707836,
        "ele": 7,
        "distanceKm": 8.1534069769091,
        "gradePct": -0.5803407589345213,
        "smoothedEle": 6.737620832818855,
        "gradeBand": "descent"
      },
      {
        "lat": 25.174893,
        "lng": 121.707329,
        "ele": 6.75,
        "distanceKm": 8.206466617884601,
        "gradePct": 1.6542120455497709,
        "smoothedEle": 8.204934647034236,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.17481,
        "lng": 121.7067,
        "ele": 14.5,
        "distanceKm": 8.270434122445801,
        "gradePct": 5.411537264889884,
        "smoothedEle": 12.62002758350478,
        "gradeBand": "hard"
      },
      {
        "lat": 25.174908,
        "lng": 121.706144,
        "ele": 12.25,
        "distanceKm": 8.327437391935423,
        "gradePct": 1.8761120085389211,
        "smoothedEle": 11.528467764450726,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.175097,
        "lng": 121.705768,
        "ele": 8,
        "distanceKm": 8.370719958815844,
        "gradePct": 1.0664217008942176,
        "smoothedEle": 13.680975782630462,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.175,
        "lng": 121.705614,
        "ele": 12.25,
        "distanceKm": 8.38960137086177,
        "gradePct": 3.6257468274916946,
        "smoothedEle": 15.878739354936924,
        "gradeBand": "hard"
      },
      {
        "lat": 25.174841,
        "lng": 121.705543,
        "ele": 25,
        "distanceKm": 8.40867054151791,
        "gradePct": 5.590381262337404,
        "smoothedEle": 17.478216831992395,
        "gradeBand": "hard"
      },
      {
        "lat": 25.175143,
        "lng": 121.705105,
        "ele": 18.5,
        "distanceKm": 8.46408246286566,
        "gradePct": 6.143516661619127,
        "smoothedEle": 19.49439965440007,
        "gradeBand": "steep"
      },
      {
        "lat": 25.175488,
        "lng": 121.70456,
        "ele": 15.75,
        "distanceKm": 8.531012433643985,
        "gradePct": -1.66137798671994,
        "smoothedEle": 16.629756680082522,
        "gradeBand": "descent"
      },
      {
        "lat": 25.17567716814873,
        "lng": 121.70418584112804,
        "ele": 17.24478160295924,
        "distanceKm": 8.574142081822286,
        "gradePct": -1.8164023820933926,
        "smoothedEle": 17.247439535118133,
        "gradeBand": "descent"
      },
      {
        "lat": 25.175845,
        "lng": 121.703799,
        "ele": 18.75,
        "distanceKm": 8.617312891947352,
        "gradePct": 1.4948534478745383,
        "smoothedEle": 18.71095874601651,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.176092,
        "lng": 121.703171,
        "ele": 21.25,
        "distanceKm": 8.686220055430562,
        "gradePct": 3.0619399335210393,
        "smoothedEle": 20.718830816742837,
        "gradeBand": "hard"
      },
      {
        "lat": 25.17629,
        "lng": 121.702804,
        "ele": 20.75,
        "distanceKm": 8.72921656471165,
        "gradePct": 0.6234825404833146,
        "smoothedEle": 19.681300029108293,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.176514,
        "lng": 121.702554,
        "ele": 17,
        "distanceKm": 8.76461876750157,
        "gradePct": -1.878186505514026,
        "smoothedEle": 18.211208697689052,
        "gradeBand": "descent"
      },
      {
        "lat": 25.176893,
        "lng": 121.702269,
        "ele": 17,
        "distanceKm": 8.8155949293225,
        "gradePct": -3.39877476115887,
        "smoothedEle": 16.611223256006603,
        "gradeBand": "descent"
      },
      {
        "lat": 25.177218,
        "lng": 121.702159,
        "ele": 15.75,
        "distanceKm": 8.853390650283558,
        "gradePct": -3.469240328238195,
        "smoothedEle": 15.208220650087455,
        "gradeBand": "descent"
      },
      {
        "lat": 25.177722,
        "lng": 121.702116,
        "ele": 11.5,
        "distanceKm": 8.909599775276222,
        "gradePct": -4.137997475637454,
        "smoothedEle": 12.661395286507828,
        "gradeBand": "descent"
      },
      {
        "lat": 25.178188,
        "lng": 121.701971,
        "ele": 12.5,
        "distanceKm": 8.96343193675583,
        "gradePct": -2.3775994249160184,
        "smoothedEle": 12.37565233757729,
        "gradeBand": "descent"
      },
      {
        "lat": 25.178611,
        "lng": 121.701644,
        "ele": 13,
        "distanceKm": 9.02083532468413,
        "gradePct": 0.8402976845872748,
        "smoothedEle": 13.442054291680625,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.178929,
        "lng": 121.701161,
        "ele": 15.75,
        "distanceKm": 9.080941083094324,
        "gradePct": 1.9099780236883652,
        "smoothedEle": 14.610903634219033,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179104,
        "lng": 121.700803,
        "ele": 13.75,
        "distanceKm": 9.12188602870221,
        "gradePct": 1.4821100054917264,
        "smoothedEle": 14.94459686026147,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.17925169580177,
        "lng": 121.70043491805751,
        "ele": 15.781006576871118,
        "distanceKm": 9.162403570770351,
        "gradePct": 1.8836317094022745,
        "smoothedEle": 16.1340447739108,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179385,
        "lng": 121.70006,
        "ele": 19,
        "distanceKm": 9.202938738906873,
        "gradePct": 3.2049527986898405,
        "smoothedEle": 17.99513298644877,
        "gradeBand": "hard"
      },
      {
        "lat": 25.179567,
        "lng": 121.69948,
        "ele": 18.75,
        "distanceKm": 9.2647127387699,
        "gradePct": 2.3981171667755716,
        "smoothedEle": 18.638182602306813,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179661,
        "lng": 121.699136,
        "ele": 18.25,
        "distanceKm": 9.30087277962414,
        "gradePct": -0.2276582866674958,
        "smoothedEle": 17.67262046220346,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179758248281377,
        "lng": 121.69866886937245,
        "ele": 15.402613822877647,
        "distanceKm": 9.349107448909095,
        "gradePct": -2.957291371115921,
        "smoothedEle": 15.518444640835824,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179827,
        "lng": 121.698195,
        "ele": 13,
        "distanceKm": 9.397401376814765,
        "gradePct": -4.606970373450632,
        "smoothedEle": 13.158345092591247,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179856,
        "lng": 121.69757,
        "ele": 10.5,
        "distanceKm": 9.460377094805848,
        "gradePct": -4.484761541039344,
        "smoothedEle": 10.482941270683826,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179811,
        "lng": 121.697124,
        "ele": 8.75,
        "distanceKm": 9.505535694299834,
        "gradePct": -3.881777051862185,
        "smoothedEle": 8.930997005060306,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179713519353527,
        "lng": 121.69675312129817,
        "ele": 7.77230386701979,
        "distanceKm": 9.544399061089207,
        "gradePct": -3.326339747919207,
        "smoothedEle": 7.835397951542444,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179583,
        "lng": 121.696394,
        "ele": 7,
        "distanceKm": 9.583342480923568,
        "gradePct": -2.687937745476733,
        "smoothedEle": 7.005762944396521,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179365,
        "lng": 121.695814,
        "ele": 5.75,
        "distanceKm": 9.64654116565187,
        "gradePct": -2.133834026532378,
        "smoothedEle": 5.655929387989147,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179306,
        "lng": 121.69534,
        "ele": 4.5,
        "distanceKm": 9.694688552458434,
        "gradePct": -2.101513448259412,
        "smoothedEle": 4.66191362859488,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179315,
        "lng": 121.694991,
        "ele": 4,
        "distanceKm": 9.72982247091279,
        "gradePct": -1.6864673880561702,
        "smoothedEle": 4.326549418368365,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179482,
        "lng": 121.69435,
        "ele": 5,
        "distanceKm": 9.79694562801194,
        "gradePct": 0.19524664706090247,
        "smoothedEle": 4.835615785495746,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179997270523298,
        "lng": 121.6944370142372,
        "ele": 5,
        "distanceKm": 9.854906391188269,
        "gradePct": 0.48321250702663837,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180516,
        "lng": 121.694498,
        "ele": 5,
        "distanceKm": 9.91291210841816,
        "gradePct": 0.11910121276065454,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180878,
        "lng": 121.694551,
        "ele": 5,
        "distanceKm": 9.95351650973075,
        "gradePct": 0.0039418834247069295,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180941,
        "lng": 121.694608,
        "ele": 5,
        "distanceKm": 9.962570431571644,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180981,
        "lng": 121.694693,
        "ele": 5,
        "distanceKm": 9.972211143471931,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.18101,
        "lng": 121.695235,
        "ele": 5,
        "distanceKm": 10.026846772065541,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.181003,
        "lng": 121.6959,
        "ele": 5,
        "distanceKm": 10.093768922657683,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.18101,
        "lng": 121.695235,
        "ele": 5,
        "distanceKm": 10.160691073249824,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180981,
        "lng": 121.694693,
        "ele": 5,
        "distanceKm": 10.215326701843434,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180941,
        "lng": 121.694608,
        "ele": 5,
        "distanceKm": 10.224967413743721,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180878,
        "lng": 121.694551,
        "ele": 5,
        "distanceKm": 10.234021335584615,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180516,
        "lng": 121.694498,
        "ele": 5,
        "distanceKm": 10.274625736897205,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179997270523298,
        "lng": 121.6944370142372,
        "ele": 5,
        "distanceKm": 10.332631454127096,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179482,
        "lng": 121.69435,
        "ele": 5,
        "distanceKm": 10.390592217303425,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.17965,
        "lng": 121.693907,
        "ele": 5,
        "distanceKm": 10.438926829947608,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179741,
        "lng": 121.69354,
        "ele": 5,
        "distanceKm": 10.47721884880355,
        "gradePct": 0.0864426355632529,
        "smoothedEle": 5.086442635563253,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179805684510644,
        "lng": 121.69305931263825,
        "ele": 5.338346757864542,
        "distanceKm": 10.526121781340084,
        "gradePct": 0.28690567330042976,
        "smoothedEle": 5.286905673300429,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179851789673762,
        "lng": 121.69257520842551,
        "ele": 5.47556450524303,
        "distanceKm": 10.575105711381454,
        "gradePct": 0.3938922018535976,
        "smoothedEle": 5.4755645178168155,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.17989789483688,
        "lng": 121.69209110421275,
        "ele": 5.612782252621518,
        "distanceKm": 10.62408962309606,
        "gradePct": 0.33420682065062157,
        "smoothedEle": 5.612782265197276,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179944,
        "lng": 121.691607,
        "ele": 5.75,
        "distanceKm": 10.673073516481024,
        "gradePct": 0.6624195544542394,
        "smoothedEle": 6.130157188200636,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179999,
        "lng": 121.691029,
        "ele": 7.75,
        "distanceKm": 10.731557640046095,
        "gradePct": 1.8814867709376712,
        "smoothedEle": 7.573147304633262,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180149,
        "lng": 121.690536,
        "ele": 8.75,
        "distanceKm": 10.783896426249585,
        "gradePct": 2.2358520846009196,
        "smoothedEle": 8.633045023276644,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180428,
        "lng": 121.690128,
        "ele": 9.25,
        "distanceKm": 10.835355989345903,
        "gradePct": 1.6192854312414702,
        "smoothedEle": 9.269352016001424,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180937,
        "lng": 121.689688,
        "ele": 10.25,
        "distanceKm": 10.907215367693777,
        "gradePct": 1.0456418749528054,
        "smoothedEle": 9.967029911871172,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.181247,
        "lng": 121.689431,
        "ele": 9.75,
        "distanceKm": 10.950308575746503,
        "gradePct": 0.4229506213150775,
        "smoothedEle": 9.837476298119398,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.181626,
        "lng": 121.689062,
        "ele": 9.5,
        "distanceKm": 11.006476030347477,
        "gradePct": -0.5070230289371906,
        "smoothedEle": 9.452828706111925,
        "gradeBand": "descent"
      },
      {
        "lat": 25.181999,
        "lng": 121.688642,
        "ele": 9,
        "distanceKm": 11.065691240092733,
        "gradePct": -0.39638117605170603,
        "smoothedEle": 9.33575111384315,
        "gradeBand": "descent"
      },
      {
        "lat": 25.182245057502854,
        "lng": 121.68833534892347,
        "ele": 9.795747786966196,
        "distanceKm": 11.106931632580004,
        "gradePct": 1.5654774188453724,
        "smoothedEle": 11.017405329154219,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.182482,
        "lng": 121.68802,
        "ele": 14.75,
        "distanceKm": 11.148176178969255,
        "gradePct": 3.592271318781249,
        "smoothedEle": 12.962652406808367,
        "gradeBand": "hard"
      },
      {
        "lat": 25.182864000000002,
        "lng": 121.6878225,
        "ele": 13.5,
        "distanceKm": 11.195072032921683,
        "gradePct": 2.966191885834545,
        "smoothedEle": 13.499999834981468,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.183246,
        "lng": 121.687625,
        "ele": 12.25,
        "distanceKm": 11.241967860471146,
        "gradePct": 0.12353797234574992,
        "smoothedEle": 12.793382857364044,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.183598,
        "lng": 121.687434,
        "ele": 13,
        "distanceKm": 11.285572719258298,
        "gradePct": 0.17674844835623976,
        "smoothedEle": 13.56790216291931,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.18409,
        "lng": 121.687019,
        "ele": 18,
        "distanceKm": 11.3543973615596,
        "gradePct": 4.807605044672127,
        "smoothedEle": 17.82176349492181,
        "gradeBand": "hard"
      },
      {
        "lat": 25.184484,
        "lng": 121.686569,
        "ele": 21.25,
        "distanceKm": 11.41740367310488,
        "gradePct": 5.439407573698075,
        "smoothedEle": 20.97469320860053,
        "gradeBand": "hard"
      },
      {
        "lat": 25.184797,
        "lng": 121.686126,
        "ele": 22.75,
        "distanceKm": 11.473958253639582,
        "gradePct": 2.995043054244473,
        "smoothedEle": 21.795662735989946,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.184989,
        "lng": 121.685589,
        "ele": 19.75,
        "distanceKm": 11.532058479104895,
        "gradePct": -0.9423437110627153,
        "smoothedEle": 20.245084682593856,
        "gradeBand": "descent"
      },
      {
        "lat": 25.185141,
        "lng": 121.68488,
        "ele": 18.75,
        "distanceKm": 11.605376092019608,
        "gradePct": -1.5692580819120876,
        "smoothedEle": 19.38792579643044,
        "gradeBand": "descent"
      },
      {
        "lat": 25.185264,
        "lng": 121.684349,
        "ele": 21,
        "distanceKm": 11.660530415485917,
        "gradePct": 0.1139770058075808,
        "smoothedEle": 20.026195241922032,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.185443,
        "lng": 121.684034,
        "ele": 19.5,
        "distanceKm": 11.697958295876061,
        "gradePct": -0.687244649059912,
        "smoothedEle": 18.7874028725798,
        "gradeBand": "descent"
      },
      {
        "lat": 25.185857,
        "lng": 121.683669,
        "ele": 13.75,
        "distanceKm": 11.756849147198006,
        "gradePct": -5.045777694992664,
        "smoothedEle": 14.937816334165602,
        "gradeBand": "descent"
      },
      {
        "lat": 25.186249717331833,
        "lng": 121.68352569749017,
        "ele": 13.771951580773486,
        "distanceKm": 11.802836547990214,
        "gradePct": -4.506157116767339,
        "smoothedEle": 13.962363395512188,
        "gradeBand": "descent"
      },
      {
        "lat": 25.186651,
        "lng": 121.683412,
        "ele": 14.5,
        "distanceKm": 11.848900540651918,
        "gradePct": -0.2724162700902958,
        "smoothedEle": 15.184985841358262,
        "gradeBand": "descent"
      },
      {
        "lat": 25.187078,
        "lng": 121.68335950000001,
        "ele": 17.874999999999936,
        "distanceKm": 11.896673816754527,
        "gradePct": 3.781917046478163,
        "smoothedEle": 17.87500003454014,
        "gradeBand": "hard"
      },
      {
        "lat": 25.187505,
        "lng": 121.683307,
        "ele": 21.25,
        "distanceKm": 11.944447090810309,
        "gradePct": 5.184714874026749,
        "smoothedEle": 20.251498027706823,
        "gradeBand": "hard"
      },
      {
        "lat": 25.1879795,
        "lng": 121.683245,
        "ele": 20.75,
        "distanceKm": 11.997576702016522,
        "gradePct": 2.8300856195967046,
        "smoothedEle": 20.74999999286702,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.188454,
        "lng": 121.683183,
        "ele": 20.25,
        "distanceKm": 12.050706310369543,
        "gradePct": -1.3310967149914863,
        "smoothedEle": 18.979130017477306,
        "gradeBand": "descent"
      },
      {
        "lat": 25.188850399837843,
        "lng": 121.68317447438992,
        "ele": 15.285063035522315,
        "distanceKm": 12.094792369404288,
        "gradePct": -5.1785612866853885,
        "smoothedEle": 15.545314003829313,
        "gradeBand": "descent"
      },
      {
        "lat": 25.189247,
        "lng": 121.683176,
        "ele": 11.25,
        "distanceKm": 12.13889262343231,
        "gradePct": -6.78461851179238,
        "smoothedEle": 12.588275061342873,
        "gradeBand": "descent"
      },
      {
        "lat": 25.189644026318657,
        "lng": 121.68318446398901,
        "ele": 12.003808869654836,
        "distanceKm": 12.183048210748197,
        "gradePct": -4.458386883564565,
        "smoothedEle": 12.001667084395502,
        "gradeBand": "descent"
      },
      {
        "lat": 25.190041,
        "lng": 121.683197,
        "ele": 12.75,
        "distanceKm": 12.227207749965972,
        "gradePct": -0.0252205520470171,
        "smoothedEle": 13.34655625184893,
        "gradeBand": "descent"
      },
      {
        "lat": 25.19039937217573,
        "lng": 121.68325927346528,
        "ele": 15.44822012288092,
        "distanceKm": 12.267546603140044,
        "gradePct": 3.1959681635387165,
        "smoothedEle": 15.403574455885332,
        "gradeBand": "hard"
      },
      {
        "lat": 25.190749,
        "lng": 121.683369,
        "ele": 18,
        "distanceKm": 12.30796083130912,
        "gradePct": 4.1101355163099855,
        "smoothedEle": 16.870522327377305,
        "gradeBand": "hard"
      },
      {
        "lat": 25.191329,
        "lng": 121.683712,
        "ele": 15.25,
        "distanceKm": 12.38110782730775,
        "gradePct": -0.3407734389600806,
        "smoothedEle": 15.555043720272572,
        "gradeBand": "descent"
      },
      {
        "lat": 25.191371,
        "lng": 121.683841,
        "ele": 15.25,
        "distanceKm": 12.394902347570584,
        "gradePct": -1.2688790138728612,
        "smoothedEle": 15.127648985442137,
        "gradeBand": "descent"
      },
      {
        "lat": 25.191515,
        "lng": 121.683977,
        "ele": 15,
        "distanceKm": 12.4159652392479,
        "gradePct": -1.7042361962640666,
        "smoothedEle": 15.02233452705556,
        "gradeBand": "descent"
      },
      {
        "lat": 25.191822,
        "lng": 121.684163,
        "ele": 14.75,
        "distanceKm": 12.454895752569666,
        "gradePct": -1.5701307023394586,
        "smoothedEle": 14.456312056198824,
        "gradeBand": "descent"
      },
      {
        "lat": 25.191994,
        "lng": 121.684334,
        "ele": 13.75,
        "distanceKm": 12.480621771720083,
        "gradePct": -1.5468053528909742,
        "smoothedEle": 14.016979611211369,
        "gradeBand": "descent"
      },
      {
        "lat": 25.192216,
        "lng": 121.684805,
        "ele": 13.25,
        "distanceKm": 12.53405693031676,
        "gradePct": -2.0587518238477096,
        "smoothedEle": 12.700542152056224,
        "gradeBand": "descent"
      },
      {
        "lat": 25.192433,
        "lng": 121.685258,
        "ele": 10.5,
        "distanceKm": 12.58563002475661,
        "gradePct": -2.874320224702815,
        "smoothedEle": 11.01927523129392,
        "gradeBand": "descent"
      },
      {
        "lat": 25.192735,
        "lng": 121.685498,
        "ele": 10,
        "distanceKm": 12.626992136693344,
        "gradePct": -1.9464889956019158,
        "smoothedEle": 10.928102587789642,
        "gradeBand": "descent"
      },
      {
        "lat": 25.193091911030717,
        "lng": 121.68557969457228,
        "ele": 12.62820147527318,
        "distanceKm": 12.667521211424935,
        "gradePct": 1.2381235389882095,
        "smoothedEle": 12.847740481584946,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.193453,
        "lng": 121.685641,
        "ele": 16,
        "distanceKm": 12.708143590454874,
        "gradePct": 5.32458608357707,
        "smoothedEle": 16.294235674319598,
        "gradeBand": "hard"
      },
      {
        "lat": 25.193811,
        "lng": 121.685787,
        "ele": 20.5,
        "distanceKm": 12.750575477198753,
        "gradePct": 5.95451600652512,
        "smoothedEle": 17.999630872445373,
        "gradeBand": "hard"
      },
      {
        "lat": 25.194016,
        "lng": 121.686221,
        "ele": 15.75,
        "distanceKm": 12.79983498964962,
        "gradePct": 0.05459753677884491,
        "smoothedEle": 15.643912588095183,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.194259,
        "lng": 121.686537,
        "ele": 11.25,
        "distanceKm": 12.841560590040876,
        "gradePct": -5.6472983191794235,
        "smoothedEle": 11.990011986106504,
        "gradeBand": "descent"
      },
      {
        "lat": 25.194606,
        "lng": 121.686723,
        "ele": 9.25,
        "distanceKm": 12.88444438953185,
        "gradePct": -6.866940932276775,
        "smoothedEle": 9.512990270308642,
        "gradeBand": "descent"
      },
      {
        "lat": 25.195089,
        "lng": 121.687083,
        "ele": 7.5,
        "distanceKm": 12.949224762699663,
        "gradePct": -4.209998290882288,
        "smoothedEle": 7.337321528606975,
        "gradeBand": "descent"
      },
      {
        "lat": 25.195411,
        "lng": 121.687373,
        "ele": 5.75,
        "distanceKm": 12.995413310565414,
        "gradePct": -2.9642221660728074,
        "smoothedEle": 6.180373520260566,
        "gradeBand": "descent"
      },
      {
        "lat": 25.195885,
        "lng": 121.687794,
        "ele": 5.5,
        "distanceKm": 13.063031961834136,
        "gradePct": 0.045776069609966885,
        "smoothedEle": 7.037249714323696,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.196324,
        "lng": 121.688091,
        "ele": 12.5,
        "distanceKm": 13.120267018165292,
        "gradePct": 4.580108036035735,
        "smoothedEle": 11.075432386828334,
        "gradeBand": "hard"
      },
      {
        "lat": 25.19651,
        "lng": 121.688457,
        "ele": 12.75,
        "distanceKm": 13.162502685974948,
        "gradePct": 4.85207312541696,
        "smoothedEle": 11.882615757074522,
        "gradeBand": "hard"
      },
      {
        "lat": 25.196631,
        "lng": 121.688793,
        "ele": 10.25,
        "distanceKm": 13.198888379759945,
        "gradePct": 1.1129311337460703,
        "smoothedEle": 10.680007406260241,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.196801,
        "lng": 121.689161,
        "ele": 9,
        "distanceKm": 13.240460952331576,
        "gradePct": -2.012011488150959,
        "smoothedEle": 9.449355552589605,
        "gradeBand": "descent"
      },
      {
        "lat": 25.19712806469229,
        "lng": 121.68946724673576,
        "ele": 9.321720073441618,
        "distanceKm": 13.288127176411574,
        "gradePct": -1.6767147814774814,
        "smoothedEle": 9.358968487060713,
        "gradeBand": "descent"
      },
      {
        "lat": 25.197458532346143,
        "lng": 121.68976912336788,
        "ele": 9.785860036720809,
        "distanceKm": 13.335801346106651,
        "gradePct": 0.1985686380430412,
        "smoothedEle": 9.785860158588399,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.197789,
        "lng": 121.690071,
        "ele": 10.25,
        "distanceKm": 13.383475463288432,
        "gradePct": 0.8322100614320285,
        "smoothedEle": 10.199999358342861,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.19809,
        "lng": 121.690337,
        "ele": 10.5,
        "distanceKm": 13.426329843294948,
        "gradePct": 0.8502663545588843,
        "smoothedEle": 10.551315268546105,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.198507499999998,
        "lng": 121.690726,
        "ele": 11.125,
        "distanceKm": 13.487050709362801,
        "gradePct": 0.8956914031364317,
        "smoothedEle": 11.125000270300248,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.198925,
        "lng": 121.691115,
        "ele": 11.75,
        "distanceKm": 13.547771488934576,
        "gradePct": 0.9889191899857153,
        "smoothedEle": 11.742813099334406,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.199311,
        "lng": 121.691437,
        "ele": 12.25,
        "distanceKm": 13.601547223665532,
        "gradePct": 0.861942071665314,
        "smoothedEle": 12.134439336827395,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.199729,
        "lng": 121.69173333333333,
        "ele": 12.25,
        "distanceKm": 13.656767476038768,
        "gradePct": 0.44167288026631174,
        "smoothedEle": 12.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.200147,
        "lng": 121.69202966666666,
        "ele": 12.25,
        "distanceKm": 13.711987673148245,
        "gradePct": 0.09371169989935557,
        "smoothedEle": 12.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.200565,
        "lng": 121.692326,
        "ele": 12.25,
        "distanceKm": 13.767207814994785,
        "gradePct": -0.8899318644309715,
        "smoothedEle": 11.360068135569032,
        "gradeBand": "descent"
      },
      {
        "lat": 25.200861,
        "lng": 121.692733,
        "ele": 8.5,
        "distanceKm": 13.819744782225133,
        "gradePct": -3.4695502978174786,
        "smoothedEle": 8.655435562186772,
        "gradeBand": "descent"
      },
      {
        "lat": 25.201022,
        "lng": 121.693208,
        "ele": 5.5,
        "distanceKm": 13.870778362075514,
        "gradePct": -4.278318939298443,
        "smoothedEle": 6.897935427634252,
        "gradeBand": "descent"
      },
      {
        "lat": 25.20107,
        "lng": 121.693302,
        "ele": 6,
        "distanceKm": 13.881637980624815,
        "gradePct": -3.8182154633212533,
        "smoothedEle": 6.798979642840509,
        "gradeBand": "descent"
      },
      {
        "lat": 25.201122,
        "lng": 121.693366,
        "ele": 6.75,
        "distanceKm": 13.890292204467533,
        "gradePct": -3.134700004735506,
        "smoothedEle": 7.036970798515265,
        "gradeBand": "descent"
      },
      {
        "lat": 25.201222,
        "lng": 121.693435,
        "ele": 7.5,
        "distanceKm": 13.903400879605327,
        "gradePct": -1.8551902579676267,
        "smoothedEle": 7.641638588454634,
        "gradeBand": "descent"
      },
      {
        "lat": 25.2017,
        "lng": 121.693609,
        "ele": 11.25,
        "distanceKm": 13.959360926940345,
        "gradePct": 3.018930148354885,
        "smoothedEle": 10.310060485010455,
        "gradeBand": "hard"
      },
      {
        "lat": 25.201899,
        "lng": 121.693721,
        "ele": 11,
        "distanceKm": 13.984192712832296,
        "gradePct": 4.080336424742957,
        "smoothedEle": 10.94957120328921,
        "gradeBand": "hard"
      },
      {
        "lat": 25.202172,
        "lng": 121.694013,
        "ele": 10.5,
        "distanceKm": 14.026437087093957,
        "gradePct": 1.7598933113049613,
        "smoothedEle": 10.499999885468336,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.202445,
        "lng": 121.694305,
        "ele": 10,
        "distanceKm": 14.068681415542951,
        "gradePct": -0.5248360221608125,
        "smoothedEle": 10.025261663029177,
        "gradeBand": "descent"
      },
      {
        "lat": 25.202529,
        "lng": 121.694371,
        "ele": 10,
        "distanceKm": 14.080141612162718,
        "gradePct": -0.9345806173990531,
        "smoothedEle": 9.910659696831507,
        "gradeBand": "descent"
      },
      {
        "lat": 25.20259,
        "lng": 121.694397,
        "ele": 9.75,
        "distanceKm": 14.087411445856898,
        "gradePct": -1.0773555770533927,
        "smoothedEle": 9.837961359889713,
        "gradeBand": "descent"
      },
      {
        "lat": 25.202705,
        "lng": 121.694363,
        "ele": 9.75,
        "distanceKm": 14.100648513743788,
        "gradePct": -1.1111345621440827,
        "smoothedEle": 9.663311403030482,
        "gradeBand": "descent"
      },
      {
        "lat": 25.202779,
        "lng": 121.694297,
        "ele": 9.5,
        "distanceKm": 14.11122207772973,
        "gradePct": -1.1043446603590719,
        "smoothedEle": 9.55757576317107,
        "gradeBand": "descent"
      },
      {
        "lat": 25.202945,
        "lng": 121.693774,
        "ele": 9,
        "distanceKm": 14.166984713711049,
        "gradePct": -0.6677099000443849,
        "smoothedEle": 9.376619155964159,
        "gradeBand": "descent"
      },
      {
        "lat": 25.203013,
        "lng": 121.693315,
        "ele": 10,
        "distanceKm": 14.21377956452756,
        "gradePct": 1.9427973998959565,
        "smoothedEle": 11.492073804082864,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.202847,
        "lng": 121.692789,
        "ele": 18,
        "distanceKm": 14.269827075777554,
        "gradePct": 6.314571821011941,
        "smoothedEle": 15.819685628424024,
        "gradeBand": "steep"
      },
      {
        "lat": 25.202832,
        "lng": 121.692673,
        "ele": 19,
        "distanceKm": 14.281616415718174,
        "gradePct": 6.253184771461502,
        "smoothedEle": 16.291259226048815,
        "gradeBand": "steep"
      },
      {
        "lat": 25.202855,
        "lng": 121.692577,
        "ele": 18.75,
        "distanceKm": 14.291607834982727,
        "gradePct": 6.098329543691385,
        "smoothedEle": 16.588086052088006,
        "gradeBand": "steep"
      },
      {
        "lat": 25.202911,
        "lng": 121.692511,
        "ele": 17,
        "distanceKm": 14.300710998384702,
        "gradePct": 4.814883251276549,
        "smoothedEle": 15.716166433981876,
        "gradeBand": "hard"
      },
      {
        "lat": 25.203005,
        "lng": 121.692421,
        "ele": 14,
        "distanceKm": 14.31454003905956,
        "gradePct": 2.81704243594633,
        "smoothedEle": 14.367834968183196,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.203223,
        "lng": 121.69198,
        "ele": 8.25,
        "distanceKm": 14.365098937182664,
        "gradePct": -6.636991725500807,
        "smoothedEle": 8.81761884367388,
        "gradeBand": "descent"
      },
      {
        "lat": 25.20341,
        "lng": 121.691665,
        "ele": 5.5,
        "distanceKm": 14.403003458252709,
        "gradePct": -9.259592956973101,
        "smoothedEle": 6.233058639878086,
        "gradeBand": "descent"
      },
      {
        "lat": 25.203757,
        "lng": 121.691323,
        "ele": 5,
        "distanceKm": 14.454701780089199,
        "gradePct": -5.444136127653259,
        "smoothedEle": 4.514853890857109,
        "gradeBand": "descent"
      },
      {
        "lat": 25.204153,
        "lng": 121.691057,
        "ele": 2.5,
        "distanceKm": 14.506229755725066,
        "gradePct": -2.798215132212402,
        "smoothedEle": 3.327616823281396,
        "gradeBand": "descent"
      },
      {
        "lat": 25.204197,
        "lng": 121.691023,
        "ele": 2.5,
        "distanceKm": 14.512199560755057,
        "gradePct": -2.5614500531763436,
        "smoothedEle": 3.365974159302075,
        "gradeBand": "descent"
      },
      {
        "lat": 25.204214,
        "lng": 121.690925,
        "ele": 2.75,
        "distanceKm": 14.522238799695803,
        "gradePct": -2.127401417070959,
        "smoothedEle": 3.466366548709527,
        "gradeBand": "descent"
      },
      {
        "lat": 25.204163,
        "lng": 121.690752,
        "ele": 3.25,
        "distanceKm": 14.540544679762073,
        "gradePct": -1.0839699929697006,
        "smoothedEle": 3.9013981457457247,
        "gradeBand": "descent"
      },
      {
        "lat": 25.204063,
        "lng": 121.690444,
        "ele": 6,
        "distanceKm": 14.573466883635641,
        "gradePct": 0.9917671978325336,
        "smoothedEle": 5.074261264102903,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.204632,
        "lng": 121.690123,
        "ele": 6.25,
        "distanceKm": 14.64450269058937,
        "gradePct": 2.585253547937799,
        "smoothedEle": 6.627656984192706,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.205172,
        "lng": 121.68983,
        "ele": 8.75,
        "distanceKm": 14.711393712549327,
        "gradePct": 2.2271428405975837,
        "smoothedEle": 8.130779827136845,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.20526,
        "lng": 121.690269,
        "ele": 8,
        "distanceKm": 14.75663159325263,
        "gradePct": 1.5105076754220115,
        "smoothedEle": 8.41071589472525,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.205172,
        "lng": 121.68983,
        "ele": 8.75,
        "distanceKm": 14.801869473955932,
        "gradePct": 0.21402125684298387,
        "smoothedEle": 8.130779827136845,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.204632,
        "lng": 121.690123,
        "ele": 6.25,
        "distanceKm": 14.86876049591589,
        "gradePct": -1.7080041718284054,
        "smoothedEle": 6.627656984192706,
        "gradeBand": "descent"
      },
      {
        "lat": 25.204063,
        "lng": 121.690444,
        "ele": 6,
        "distanceKm": 14.939796302869619,
        "gradePct": -2.0349396090319294,
        "smoothedEle": 5.243578117299773,
        "gradeBand": "descent"
      },
      {
        "lat": 25.204214,
        "lng": 121.690925,
        "ele": 2.75,
        "distanceKm": 14.991019249084506,
        "gradePct": -2.4628138689256667,
        "smoothedEle": 3.731148177668389,
        "gradeBand": "descent"
      },
      {
        "lat": 25.204197,
        "lng": 121.691023,
        "ele": 2.5,
        "distanceKm": 15.00105848802525,
        "gradePct": -2.442893587457672,
        "smoothedEle": 3.555461496205348,
        "gradeBand": "descent"
      },
      {
        "lat": 25.204153,
        "lng": 121.691057,
        "ele": 2.5,
        "distanceKm": 15.007028293055242,
        "gradePct": -2.431048048447357,
        "smoothedEle": 3.4509899081804996,
        "gradeBand": "descent"
      },
      {
        "lat": 25.203892,
        "lng": 121.691225,
        "ele": 4.25,
        "distanceKm": 15.040613404544132,
        "gradePct": -1.1726286659828833,
        "smoothedEle": 4.046823368621979,
        "gradeBand": "descent"
      },
      {
        "lat": 25.203585,
        "lng": 121.691463,
        "ele": 5.5,
        "distanceKm": 15.082311007253361,
        "gradePct": 1.444371402071346,
        "smoothedEle": 5.432642737234812,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.20328,
        "lng": 121.691861,
        "ele": 6.75,
        "distanceKm": 15.13478577200502,
        "gradePct": 3.572955867965413,
        "smoothedEle": 7.516391208141844,
        "gradeBand": "hard"
      },
      {
        "lat": 25.203134,
        "lng": 121.692216,
        "ele": 10.25,
        "distanceKm": 15.174018690379649,
        "gradePct": 6.217777198826639,
        "smoothedEle": 11.374824875731456,
        "gradeBand": "steep"
      },
      {
        "lat": 25.202911,
        "lng": 121.692511,
        "ele": 17,
        "distanceKm": 15.212693783375887,
        "gradePct": 8.926148424769485,
        "smoothedEle": 15.56527705263842,
        "gradeBand": "steep"
      },
      {
        "lat": 25.202855,
        "lng": 121.692577,
        "ele": 18.75,
        "distanceKm": 15.22179694677786,
        "gradePct": 9.254522395466708,
        "smoothedEle": 16.255133402705066,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.202832,
        "lng": 121.692673,
        "ele": 19,
        "distanceKm": 15.231788366042414,
        "gradePct": 8.832789241291671,
        "smoothedEle": 16.230154854543684,
        "gradeBand": "steep"
      },
      {
        "lat": 25.202847,
        "lng": 121.692789,
        "ele": 18,
        "distanceKm": 15.243577705983034,
        "gradePct": 7.804682180498436,
        "smoothedEle": 16.18573234008677,
        "gradeBand": "steep"
      },
      {
        "lat": 25.203013,
        "lng": 121.693315,
        "ele": 10,
        "distanceKm": 15.299625217233029,
        "gradePct": -2.5907156934860716,
        "smoothedEle": 11.558580240562227,
        "gradeBand": "descent"
      },
      {
        "lat": 25.202945,
        "lng": 121.693774,
        "ele": 9.25,
        "distanceKm": 15.34642006804954,
        "gradePct": -6.364574839931084,
        "smoothedEle": 9.58649870246212,
        "gradeBand": "descent"
      },
      {
        "lat": 25.202827,
        "lng": 121.694204,
        "ele": 9.75,
        "distanceKm": 15.391628310839927,
        "gradePct": -2.520912555061411,
        "smoothedEle": 9.697873667555802,
        "gradeBand": "descent"
      },
      {
        "lat": 25.202779,
        "lng": 121.694297,
        "ele": 9.75,
        "distanceKm": 15.402400304615023,
        "gradePct": -1.6629657480234712,
        "smoothedEle": 9.778663620869022,
        "gradeBand": "descent"
      },
      {
        "lat": 25.202705,
        "lng": 121.694363,
        "ele": 10,
        "distanceKm": 15.412973868600965,
        "gradePct": -1.1001619900979454,
        "smoothedEle": 9.895864284335314,
        "gradeBand": "descent"
      },
      {
        "lat": 25.20259,
        "lng": 121.694397,
        "ele": 10,
        "distanceKm": 15.426210936487855,
        "gradePct": -0.38866571431378066,
        "smoothedEle": 10.04950907127351,
        "gradeBand": "descent"
      },
      {
        "lat": 25.202529,
        "lng": 121.694371,
        "ele": 10,
        "distanceKm": 15.433480770182035,
        "gradePct": -0.01452428740228134,
        "smoothedEle": 10.117276942907193,
        "gradeBand": "descent"
      },
      {
        "lat": 25.2022090302014,
        "lng": 121.6940526073949,
        "ele": 10.682179118319329,
        "distanceKm": 15.481355828448226,
        "gradePct": 0.9795258958281464,
        "smoothedEle": 10.652092289816471,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.201899,
        "lng": 121.693721,
        "ele": 11.25,
        "distanceKm": 15.529330300597955,
        "gradePct": 0.4345765413427356,
        "smoothedEle": 10.513163673474946,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.201567151374345,
        "lng": 121.69356064087685,
        "ele": 9.277259017178713,
        "distanceKm": 15.569603207564858,
        "gradePct": -1.4302322774907095,
        "smoothedEle": 9.090570730548118,
        "gradeBand": "descent"
      },
      {
        "lat": 25.201222,
        "lng": 121.693435,
        "ele": 6.75,
        "distanceKm": 15.61001050521646,
        "gradePct": -3.554744165212876,
        "smoothedEle": 7.014367438902685,
        "gradeBand": "descent"
      },
      {
        "lat": 25.201122,
        "lng": 121.693366,
        "ele": 6,
        "distanceKm": 15.623119180354253,
        "gradePct": -3.6197004704410887,
        "smoothedEle": 6.911449901015562,
        "gradeBand": "descent"
      },
      {
        "lat": 25.20107,
        "lng": 121.693302,
        "ele": 5.5,
        "distanceKm": 15.631773404196972,
        "gradePct": -3.5826797542721693,
        "smoothedEle": 6.844184165831203,
        "gradeBand": "descent"
      },
      {
        "lat": 25.201022,
        "lng": 121.693208,
        "ele": 5.5,
        "distanceKm": 15.642633022746272,
        "gradePct": -3.2120593566053532,
        "smoothedEle": 6.831201345488243,
        "gradeBand": "descent"
      },
      {
        "lat": 25.200922,
        "lng": 121.69288,
        "ele": 8.5,
        "distanceKm": 15.677456599576379,
        "gradePct": -0.40524819433088377,
        "smoothedEle": 8.281800417873953,
        "gradeBand": "descent"
      },
      {
        "lat": 25.200761,
        "lng": 121.692563,
        "ele": 10.75,
        "distanceKm": 15.71403140023942,
        "gradePct": 3.6168847460273033,
        "smoothedEle": 10.599683730336675,
        "gradeBand": "hard"
      },
      {
        "lat": 25.200651,
        "lng": 121.692412,
        "ele": 12,
        "distanceKm": 15.733535675252286,
        "gradePct": 4.449459894333485,
        "smoothedEle": 11.291537241365939,
        "gradeBand": "hard"
      },
      {
        "lat": 25.200565,
        "lng": 121.692326,
        "ele": 12.25,
        "distanceKm": 15.746431971860254,
        "gradePct": 4.716485348339353,
        "smoothedEle": 11.705934426036933,
        "gradeBand": "hard"
      },
      {
        "lat": 25.200147,
        "lng": 121.69202966666666,
        "ele": 11.833333333333329,
        "distanceKm": 15.801652113706794,
        "gradePct": 2.0181718796706516,
        "smoothedEle": 11.833333448464453,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.199729,
        "lng": 121.69173333333333,
        "ele": 11.416666666666671,
        "distanceKm": 15.856872310816271,
        "gradePct": -0.31335466995542594,
        "smoothedEle": 11.416666781799497,
        "gradeBand": "descent"
      },
      {
        "lat": 25.199311,
        "lng": 121.691437,
        "ele": 11,
        "distanceKm": 15.912092563189507,
        "gradePct": -0.7190437228926542,
        "smoothedEle": 11.035510809302787,
        "gradeBand": "descent"
      },
      {
        "lat": 25.198925,
        "lng": 121.691115,
        "ele": 10.75,
        "distanceKm": 15.965868297920464,
        "gradePct": -0.6204404839475726,
        "smoothedEle": 10.734131793283376,
        "gradeBand": "descent"
      },
      {
        "lat": 25.198507499999998,
        "lng": 121.690726,
        "ele": 10.375,
        "distanceKm": 16.026589077492236,
        "gradePct": -0.5792668437952478,
        "smoothedEle": 10.375000162180148,
        "gradeBand": "descent"
      },
      {
        "lat": 25.19809,
        "lng": 121.690337,
        "ele": 10,
        "distanceKm": 16.08730994356009,
        "gradePct": -0.6050993303304079,
        "smoothedEle": 10.002216351130912,
        "gradeBand": "descent"
      },
      {
        "lat": 25.197789,
        "lng": 121.690071,
        "ele": 9.75,
        "distanceKm": 16.130164323566603,
        "gradePct": -0.6031212459718741,
        "smoothedEle": 9.749929396325733,
        "gradeBand": "descent"
      },
      {
        "lat": 25.197492333333333,
        "lng": 121.6898,
        "ele": 9.5,
        "distanceKm": 16.17296222063371,
        "gradePct": -0.5903013203760534,
        "smoothedEle": 9.500000052901896,
        "gradeBand": "descent"
      },
      {
        "lat": 25.197195666666666,
        "lng": 121.689529,
        "ele": 9.25,
        "distanceKm": 16.215760160022334,
        "gradePct": -0.5847277364157831,
        "smoothedEle": 9.250000052899116,
        "gradeBand": "descent"
      },
      {
        "lat": 25.196899,
        "lng": 121.689258,
        "ele": 9,
        "distanceKm": 16.258558141730248,
        "gradePct": -0.23430490158904171,
        "smoothedEle": 9.349811480143755,
        "gradeBand": "descent"
      },
      {
        "lat": 25.196631,
        "lng": 121.688793,
        "ele": 10.25,
        "distanceKm": 16.314028708565665,
        "gradePct": 1.5067557122431532,
        "smoothedEle": 10.766869870408946,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.19651,
        "lng": 121.688457,
        "ele": 12.75,
        "distanceKm": 16.350414402350662,
        "gradePct": 2.55179672045609,
        "smoothedEle": 11.882615757074566,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.196324,
        "lng": 121.688091,
        "ele": 12.5,
        "distanceKm": 16.392650070160318,
        "gradePct": 2.6095975740913357,
        "smoothedEle": 12.830325938237545,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.19621,
        "lng": 121.687627,
        "ele": 13.5,
        "distanceKm": 16.4410259655604,
        "gradePct": 1.3377425604742528,
        "smoothedEle": 12.932467428540244,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.196077814841143,
        "lng": 121.68722233882973,
        "ele": 12.408848924525557,
        "distanceKm": 16.48431300336575,
        "gradePct": -0.13193583397874412,
        "smoothedEle": 12.511317814604032,
        "gradeBand": "descent"
      },
      {
        "lat": 25.19594493601298,
        "lng": 121.68681795674503,
        "ele": 11.679058840886785,
        "distanceKm": 16.52759993942554,
        "gradePct": -1.0688923119890879,
        "smoothedEle": 11.835227231578338,
        "gradeBand": "descent"
      },
      {
        "lat": 25.195811,
        "lng": 121.686414,
        "ele": 11.5,
        "distanceKm": 16.570886998094455,
        "gradePct": 0.34592779240912147,
        "smoothedEle": 12.987870321093567,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.195569,
        "lng": 121.685995,
        "ele": 17.25,
        "distanceKm": 16.620901065802162,
        "gradePct": 4.228945398612425,
        "smoothedEle": 16.168801088240834,
        "gradeBand": "hard"
      },
      {
        "lat": 25.19547,
        "lng": 121.686089,
        "ele": 17.5,
        "distanceKm": 16.635414333358806,
        "gradePct": 5.213988091797265,
        "smoothedEle": 17.257296154989145,
        "gradeBand": "hard"
      },
      {
        "lat": 25.195369,
        "lng": 121.686159,
        "ele": 17.5,
        "distanceKm": 16.64867081597904,
        "gradePct": 5.81120355107783,
        "smoothedEle": 18.207503791455125,
        "gradeBand": "hard"
      },
      {
        "lat": 25.195271,
        "lng": 121.686131,
        "ele": 19,
        "distanceKm": 16.659926218813272,
        "gradePct": 5.8210194867001475,
        "smoothedEle": 18.51702736939645,
        "gradeBand": "hard"
      },
      {
        "lat": 25.194786,
        "lng": 121.686199,
        "ele": 20,
        "distanceKm": 16.714288108801725,
        "gradePct": 3.5142771583438406,
        "smoothedEle": 19.262489413309815,
        "gradeBand": "hard"
      },
      {
        "lat": 25.194413,
        "lng": 121.68625,
        "ele": 18.25,
        "distanceKm": 16.756080104615158,
        "gradePct": -0.9713265574133172,
        "smoothedEle": 17.439932671534955,
        "gradeBand": "descent"
      },
      {
        "lat": 25.194132,
        "lng": 121.686384,
        "ele": 14.25,
        "distanceKm": 16.790110736360287,
        "gradePct": -2.117076564261956,
        "smoothedEle": 16.813869676423067,
        "gradeBand": "descent"
      },
      {
        "lat": 25.19392,
        "lng": 121.685973,
        "ele": 19,
        "distanceKm": 16.837711481146577,
        "gradePct": -0.09525883936848209,
        "smoothedEle": 18.14573293183808,
        "gradeBand": "descent"
      },
      {
        "lat": 25.193811,
        "lng": 121.685787,
        "ele": 20.5,
        "distanceKm": 16.860008247537465,
        "gradePct": 1.667302036210431,
        "smoothedEle": 19.03496849354214,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.193613,
        "lng": 121.685678,
        "ele": 19.25,
        "distanceKm": 16.884605273330934,
        "gradePct": 1.076421202305865,
        "smoothedEle": 17.991575118746884,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.19323928491393,
        "lng": 121.68560471560508,
        "ele": 14.00435827944715,
        "distanceKm": 16.92680969042109,
        "gradePct": -3.332888500931816,
        "smoothedEle": 14.507813605218745,
        "gradeBand": "descent"
      },
      {
        "lat": 25.192864,
        "lng": 121.685541,
        "ele": 10.5,
        "distanceKm": 16.96902910987692,
        "gradePct": -7.365922573864187,
        "smoothedEle": 11.286385508660752,
        "gradeBand": "descent"
      },
      {
        "lat": 25.192542,
        "lng": 121.68537,
        "ele": 9.75,
        "distanceKm": 17.008753437758166,
        "gradePct": -5.45213998125539,
        "smoothedEle": 10.546126103647284,
        "gradeBand": "descent"
      },
      {
        "lat": 25.192216,
        "lng": 121.684805,
        "ele": 13.25,
        "distanceKm": 17.07617673300377,
        "gradePct": 1.6431295987437546,
        "smoothedEle": 12.796319770306358,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.191994,
        "lng": 121.684334,
        "ele": 13.75,
        "distanceKm": 17.129611891600447,
        "gradePct": 2.614808143530434,
        "smoothedEle": 13.857066949698831,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.191515,
        "lng": 121.683977,
        "ele": 15,
        "distanceKm": 17.193855243087306,
        "gradePct": 1.701281557691344,
        "smoothedEle": 14.848539365788762,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.191371,
        "lng": 121.683841,
        "ele": 15.25,
        "distanceKm": 17.21491813476462,
        "gradePct": 1.5066388438200384,
        "smoothedEle": 15.072018418995901,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.191329,
        "lng": 121.683712,
        "ele": 15.25,
        "distanceKm": 17.228712655027454,
        "gradePct": 1.4266130031615163,
        "smoothedEle": 15.265829109268601,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.19135,
        "lng": 121.683626,
        "ele": 15,
        "distanceKm": 17.237675458021197,
        "gradePct": 1.5980146447426766,
        "smoothedEle": 15.5795272140496,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.190792,
        "lng": 121.683283,
        "ele": 18.5,
        "distanceKm": 17.3086749554467,
        "gradePct": 2.25605849145421,
        "smoothedEle": 17.261836252503166,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.190492,
        "lng": 121.683176,
        "ele": 16.25,
        "distanceKm": 17.343727848562864,
        "gradePct": 0.45968228300249747,
        "smoothedEle": 16.182618840522142,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.190041,
        "lng": 121.68309,
        "ele": 13,
        "distanceKm": 17.394617933983106,
        "gradePct": -3.3238628102689334,
        "smoothedEle": 13.604897080859136,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1896975,
        "lng": 121.68309,
        "ele": 12.37500000000003,
        "distanceKm": 17.43281344404328,
        "gradePct": -4.1436543101167285,
        "smoothedEle": 12.37500000000001,
        "gradeBand": "descent"
      },
      {
        "lat": 25.189354,
        "lng": 121.68309,
        "ele": 11.75,
        "distanceKm": 17.471008954103453,
        "gradePct": -2.0955188071549764,
        "smoothedEle": 12.705237558605697,
        "gradeBand": "descent"
      },
      {
        "lat": 25.188974508967892,
        "lng": 121.68307816202847,
        "ele": 14.38767372251815,
        "distanceKm": 17.51322329842985,
        "gradePct": 1.8079363478552193,
        "smoothedEle": 14.813739886428426,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.188595,
        "lng": 121.683067,
        "ele": 18.5,
        "distanceKm": 17.55543777212275,
        "gradePct": 5.276189251864799,
        "smoothedEle": 17.846798705915575,
        "gradeBand": "hard"
      },
      {
        "lat": 25.1881025,
        "lng": 121.683112,
        "ele": 20.875,
        "distanceKm": 17.610388222870576,
        "gradePct": 6.202865123800344,
        "smoothedEle": 20.87499998208804,
        "gradeBand": "steep"
      },
      {
        "lat": 25.18761,
        "lng": 121.683157,
        "ele": 23.25,
        "distanceKm": 17.665338675126776,
        "gradePct": 3.773429579186632,
        "smoothedEle": 22.16584577693386,
        "gradeBand": "hard"
      },
      {
        "lat": 25.187277,
        "lng": 121.683196,
        "ele": 21.5,
        "distanceKm": 17.702574007285804,
        "gradePct": 0.4935736540757213,
        "smoothedEle": 20.937949004626365,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.18680279656724,
        "lng": 121.6832811510808,
        "ele": 16.728603230730524,
        "distanceKm": 17.755994697590197,
        "gradePct": -4.741988271618769,
        "smoothedEle": 17.204357326244736,
        "gradeBand": "descent"
      },
      {
        "lat": 25.186329,
        "lng": 121.683369,
        "ele": 14,
        "distanceKm": 17.809414987040064,
        "gradePct": -5.743462825592282,
        "smoothedEle": 14.716367589833052,
        "gradeBand": "descent"
      },
      {
        "lat": 25.185758,
        "lng": 121.683601,
        "ele": 14.5,
        "distanceKm": 17.87706304849402,
        "gradePct": -0.44237193423133275,
        "smoothedEle": 15.780750708494534,
        "gradeBand": "descent"
      },
      {
        "lat": 25.185457,
        "lng": 121.683864,
        "ele": 19.25,
        "distanceKm": 17.919731235657824,
        "gradePct": 3.7781350011439208,
        "smoothedEle": 18.656819745979778,
        "gradeBand": "hard"
      },
      {
        "lat": 25.18525,
        "lng": 121.684171,
        "ele": 21.75,
        "distanceKm": 17.95825521159067,
        "gradePct": 5.127665709810428,
        "smoothedEle": 20.612491543767586,
        "gradeBand": "hard"
      },
      {
        "lat": 25.185063,
        "lng": 121.684806,
        "ele": 19.5,
        "distanceKm": 18.025450042222406,
        "gradePct": 1.4868951835059223,
        "smoothedEle": 20.4340304653185,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1849835,
        "lng": 121.68519099999999,
        "ele": 21.374999999999915,
        "distanceKm": 18.065186329163684,
        "gradePct": 0.7809164078536557,
        "smoothedEle": 21.374999768948452,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.184904,
        "lng": 121.685576,
        "ele": 23.25,
        "distanceKm": 18.104922640750452,
        "gradePct": 2.838921906164901,
        "smoothedEle": 23.32747058620326,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.184716,
        "lng": 121.686063,
        "ele": 26,
        "distanceKm": 18.158199537835735,
        "gradePct": 3.7137707006692193,
        "smoothedEle": 24.923320784291445,
        "gradeBand": "hard"
      },
      {
        "lat": 25.184379075022406,
        "lng": 121.68651692826614,
        "ele": 23.877858285472065,
        "distanceKm": 18.217275169056926,
        "gradePct": -0.022190362052554886,
        "smoothedEle": 23.675286471196557,
        "gradeBand": "descent"
      },
      {
        "lat": 25.184009,
        "lng": 121.686941,
        "ele": 20.75,
        "distanceKm": 18.276556676926734,
        "gradePct": -3.9333874837962286,
        "smoothedEle": 20.602119594535075,
        "gradeBand": "descent"
      },
      {
        "lat": 25.18368,
        "lng": 121.687245,
        "ele": 17.75,
        "distanceKm": 18.324244092235286,
        "gradePct": -5.7975286818932465,
        "smoothedEle": 17.51648722370348,
        "gradeBand": "descent"
      },
      {
        "lat": 25.183249,
        "lng": 121.687508,
        "ele": 13.25,
        "distanceKm": 18.378990690161142,
        "gradePct": -5.50537340877888,
        "smoothedEle": 14.93925243235132,
        "gradeBand": "descent"
      },
      {
        "lat": 25.182810896184115,
        "lng": 121.68771831393637,
        "ele": 16.112438962091318,
        "distanceKm": 18.432104038982192,
        "gradePct": -1.321135383981917,
        "smoothedEle": 15.825339291330277,
        "gradeBand": "descent"
      },
      {
        "lat": 25.182375,
        "lng": 121.687934,
        "ele": 17.75,
        "distanceKm": 18.485210982047672,
        "gradePct": 0.6053555097527339,
        "smoothedEle": 15.648380703980482,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.182354,
        "lng": 121.688063,
        "ele": 15,
        "distanceKm": 18.498400205416523,
        "gradePct": -0.48680886896559294,
        "smoothedEle": 14.776251359141334,
        "gradeBand": "descent"
      },
      {
        "lat": 25.182036,
        "lng": 121.688476,
        "ele": 9.5,
        "distanceKm": 18.552966489499948,
        "gradePct": -4.960879756479584,
        "smoothedEle": 10.794943393284635,
        "gradeBand": "descent"
      },
      {
        "lat": 25.181675437126643,
        "lng": 121.68888704738251,
        "ele": 9.714722727761611,
        "distanceKm": 18.61057115850413,
        "gradePct": -4.1585874013364155,
        "smoothedEle": 9.729637344050747,
        "gradeBand": "descent"
      },
      {
        "lat": 25.181308,
        "lng": 121.689291,
        "ele": 10,
        "distanceKm": 18.668204781825143,
        "gradePct": -0.5735664159819851,
        "smoothedEle": 9.939569178131977,
        "gradeBand": "descent"
      },
      {
        "lat": 25.180879,
        "lng": 121.689645,
        "ele": 10,
        "distanceKm": 18.727740435225613,
        "gradePct": 0.2078231600040989,
        "smoothedEle": 10,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.18045,
        "lng": 121.689999,
        "ele": 10,
        "distanceKm": 18.787276163657832,
        "gradePct": -0.12212262501648934,
        "smoothedEle": 9.836804689164753,
        "gradeBand": "descent"
      },
      {
        "lat": 25.180063,
        "lng": 121.690514,
        "ele": 9,
        "distanceKm": 18.85463710149078,
        "gradePct": -1.012336901400646,
        "smoothedEle": 8.913935776751368,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179921,
        "lng": 121.690987,
        "ele": 8,
        "distanceKm": 18.904785194673998,
        "gradePct": -1.543940926005939,
        "smoothedEle": 8.05298378329016,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179861,
        "lng": 121.691587,
        "ele": 7,
        "distanceKm": 18.965530044515248,
        "gradePct": -1.6693849652438042,
        "smoothedEle": 7.057538695666779,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179820499999998,
        "lng": 121.692027,
        "ele": 6.49999999999998,
        "distanceKm": 19.01003522246446,
        "gradePct": -1.466949879007275,
        "smoothedEle": 6.500000036596015,
        "gradeBand": "descent"
      },
      {
        "lat": 25.17978,
        "lng": 121.692467,
        "ele": 6,
        "distanceKm": 19.05454041505208,
        "gradePct": -1.2376291966599462,
        "smoothedEle": 6.000000036599737,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1797395,
        "lng": 121.692907,
        "ele": 5.50000000000002,
        "distanceKm": 19.099045622279597,
        "gradePct": -1.1376722267674644,
        "smoothedEle": 5.500000036592462,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179699,
        "lng": 121.693347,
        "ele": 5,
        "distanceKm": 19.143550844144094,
        "gradePct": -1.0951273717015089,
        "smoothedEle": 5.028336583027203,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179559359025085,
        "lng": 121.69388002229007,
        "ele": 4.5,
        "distanceKm": 19.199390699219467,
        "gradePct": -0.8859425712627161,
        "smoothedEle": 4.610400362311578,
        "gradeBand": "descent"
      },
      {
        "lat": 25.17939918730649,
        "lng": 121.69440659990089,
        "ele": 4.5,
        "distanceKm": 19.255292879545593,
        "gradePct": -0.44045272493718984,
        "smoothedEle": 4.5,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179251,
        "lng": 121.694937,
        "ele": 4.5,
        "distanceKm": 19.31115235900355,
        "gradePct": -0.2759356590723728,
        "smoothedEle": 4.31123678092968,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179323,
        "lng": 121.69495,
        "ele": 4,
        "distanceKm": 19.31926457883064,
        "gradePct": -0.28019550957546135,
        "smoothedEle": 4.290956231361954,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179408,
        "lng": 121.694966,
        "ele": 4,
        "distanceKm": 19.328852317018857,
        "gradePct": -0.28523017730082983,
        "smoothedEle": 4.266986885891415,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179399,
        "lng": 121.695047,
        "ele": 4,
        "distanceKm": 19.33706449801253,
        "gradePct": -0.24184246777561227,
        "smoothedEle": 4.294156484570496,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179393,
        "lng": 121.6952,
        "ele": 4.25,
        "distanceKm": 19.352475234905004,
        "gradePct": -0.13435435434299936,
        "smoothedEle": 4.371210169032862,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179461,
        "lng": 121.695756,
        "ele": 5,
        "distanceKm": 19.408933747476524,
        "gradePct": 0.6786635056717901,
        "smoothedEle": 4.99739753250803,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.17957,
        "lng": 121.69609,
        "ele": 5.5,
        "distanceKm": 19.444662503330598,
        "gradePct": 1.1954288205049328,
        "smoothedEle": 5.5275753316657745,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179744,
        "lng": 121.696546,
        "ele": 6.25,
        "distanceKm": 19.494461585455774,
        "gradePct": 1.2961803531373646,
        "smoothedEle": 6.133065598537597,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179863,
        "lng": 121.696952,
        "ele": 6.5,
        "distanceKm": 19.537406353001224,
        "gradePct": 1.2347277560700232,
        "smoothedEle": 6.654629318525979,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179925,
        "lng": 121.697341,
        "ele": 7.25,
        "distanceKm": 19.57715345724278,
        "gradePct": 1.458589404365268,
        "smoothedEle": 7.381211301462848,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.17993105315382,
        "lng": 121.69771455889331,
        "ele": 8.394684617995834,
        "distanceKm": 19.614750301833507,
        "gradePct": 1.9380745860941433,
        "smoothedEle": 8.317546417394807,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179902,
        "lng": 121.698087,
        "ele": 10,
        "distanceKm": 19.652367619880106,
        "gradePct": 0.9520139966579861,
        "smoothedEle": 7.880137124696268,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180011,
        "lng": 121.698096,
        "ele": 6.5,
        "distanceKm": 19.664521673238546,
        "gradePct": 0.560325684946851,
        "smoothedEle": 7.7106264120431005,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180043,
        "lng": 121.698146,
        "ele": 6.25,
        "distanceKm": 19.670684179708953,
        "gradePct": 0.36172677443389323,
        "smoothedEle": 7.624678882217341,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.180056,
        "lng": 121.698226,
        "ele": 6.25,
        "distanceKm": 19.678863236127157,
        "gradePct": 0.08681414612979364,
        "smoothedEle": 7.510606840455456,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179997,
        "lng": 121.698675,
        "ele": 7,
        "distanceKm": 19.724519385235222,
        "gradePct": -0.4661287778332963,
        "smoothedEle": 7.737824005486807,
        "gradeBand": "descent"
      },
      {
        "lat": 25.179978,
        "lng": 121.699369,
        "ele": 13.25,
        "distanceKm": 19.794387754952616,
        "gradePct": 4.720518769727784,
        "smoothedEle": 12.308386553668646,
        "gradeBand": "hard"
      },
      {
        "lat": 25.179714,
        "lng": 121.699567,
        "ele": 13.25,
        "distanceKm": 19.829866375842006,
        "gradePct": 6.22586891513153,
        "smoothedEle": 14.313475735240946,
        "gradeBand": "steep"
      },
      {
        "lat": 25.179542,
        "lng": 121.699853,
        "ele": 16.5,
        "distanceKm": 19.864421715211794,
        "gradePct": 4.388401473749624,
        "smoothedEle": 14.736506722577166,
        "gradeBand": "hard"
      },
      {
        "lat": 25.179407,
        "lng": 121.700264,
        "ele": 14,
        "distanceKm": 19.908420311837244,
        "gradePct": 0.9790619192949034,
        "smoothedEle": 14.080504327273168,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.179217,
        "lng": 121.700936,
        "ele": 9.75,
        "distanceKm": 19.979266748782717,
        "gradePct": -4.3610587596878165,
        "smoothedEle": 10.154114140272322,
        "gradeBand": "descent"
      },
      {
        "lat": 25.17904,
        "lng": 121.701311,
        "ele": 9,
        "distanceKm": 20.021826995546345,
        "gradePct": -4.413621106071736,
        "smoothedEle": 8.923869547893453,
        "gradeBand": "descent"
      },
      {
        "lat": 25.178831,
        "lng": 121.701655,
        "ele": 8,
        "distanceKm": 20.063521090197753,
        "gradePct": -2.3673871378190974,
        "smoothedEle": 8.659369326067223,
        "gradeBand": "descent"
      },
      {
        "lat": 25.178485,
        "lng": 121.701987,
        "ele": 9.5,
        "distanceKm": 20.114475783621184,
        "gradePct": -0.489153824475091,
        "smoothedEle": 8.647209527051329,
        "gradeBand": "descent"
      },
      {
        "lat": 25.178133,
        "lng": 121.702199,
        "ele": 7.75,
        "distanceKm": 20.15905284949268,
        "gradePct": -0.45276440901924064,
        "smoothedEle": 8.234950673624438,
        "gradeBand": "descent"
      },
      {
        "lat": 25.177657,
        "lng": 121.702272,
        "ele": 7.75,
        "distanceKm": 20.212489056461024,
        "gradePct": -0.2822621332340538,
        "smoothedEle": 8.365421505255176,
        "gradeBand": "descent"
      },
      {
        "lat": 25.177132,
        "lng": 121.702355,
        "ele": 10.75,
        "distanceKm": 20.27146095611068,
        "gradePct": 2.0665088521942794,
        "smoothedEle": 10.331755388516711,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.176915,
        "lng": 121.702432,
        "ele": 11.25,
        "distanceKm": 20.296803916366382,
        "gradePct": 3.063554321258912,
        "smoothedEle": 11.39067869824668,
        "gradeBand": "hard"
      },
      {
        "lat": 25.176569,
        "lng": 121.702711,
        "ele": 12.5,
        "distanceKm": 20.344432508749197,
        "gradePct": 3.5491212752196217,
        "smoothedEle": 12.979651636654392,
        "gradeBand": "hard"
      },
      {
        "lat": 25.176371,
        "lng": 121.702987,
        "ele": 15,
        "distanceKm": 20.379874674008253,
        "gradePct": 2.934076555085272,
        "smoothedEle": 13.617388427664537,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.17618567555461,
        "lng": 121.70339337355234,
        "ele": 12.876151747112857,
        "distanceKm": 20.425667539643435,
        "gradePct": 0.3703236338431744,
        "smoothedEle": 12.723943162316395,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.176009337777305,
        "lng": 121.70380518677617,
        "ele": 10.188075873556322,
        "distanceKm": 20.471513768908746,
        "gradePct": -3.278867947671326,
        "smoothedEle": 10.18807660194206,
        "gradeBand": "descent"
      },
      {
        "lat": 25.175833,
        "lng": 121.704217,
        "ele": 7.5,
        "distanceKm": 20.517360052367895,
        "gradePct": -3.689529183876151,
        "smoothedEle": 9.196497854832712,
        "gradeBand": "descent"
      },
      {
        "lat": 25.175512535514518,
        "lng": 121.70468907690669,
        "ele": 12.26997025661267,
        "distanceKm": 20.576745486312454,
        "gradePct": 2.1349761178103157,
        "smoothedEle": 12.209899386548857,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.175184,
        "lng": 121.705155,
        "ele": 16.75,
        "distanceKm": 20.636184126574793,
        "gradePct": 4.317107175655793,
        "smoothedEle": 14.468797074738989,
        "gradeBand": "hard"
      },
      {
        "lat": 25.175221,
        "lng": 121.705232,
        "ele": 14.75,
        "distanceKm": 20.644957354908904,
        "gradePct": 3.870174260160212,
        "smoothedEle": 14.467045038527452,
        "gradeBand": "hard"
      },
      {
        "lat": 25.175,
        "lng": 121.705614,
        "ele": 12.25,
        "distanceKm": 20.690582520775298,
        "gradePct": -1.1270592151612568,
        "smoothedEle": 11.608700874485217,
        "gradeBand": "descent"
      },
      {
        "lat": 25.175097,
        "lng": 121.705768,
        "ele": 8,
        "distanceKm": 20.709463932821222,
        "gradePct": -2.31666103250251,
        "smoothedEle": 11.136665573337103,
        "gradeBand": "descent"
      },
      {
        "lat": 25.174908,
        "lng": 121.706144,
        "ele": 12.25,
        "distanceKm": 20.752746499701644,
        "gradePct": -2.0709236343314474,
        "smoothedEle": 11.908143856313718,
        "gradeBand": "descent"
      },
      {
        "lat": 25.174796,
        "lng": 121.706632,
        "ele": 15.75,
        "distanceKm": 20.803409967695657,
        "gradePct": 1.5812918253857766,
        "smoothedEle": 12.869306526862067,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.174887,
        "lng": 121.70708,
        "ele": 8.25,
        "distanceKm": 20.849615190014774,
        "gradePct": -1.955957198361722,
        "smoothedEle": 9.89637348431627,
        "gradeBand": "descent"
      },
      {
        "lat": 25.174855,
        "lng": 121.707581,
        "ele": 6.75,
        "distanceKm": 20.900157766185853,
        "gradePct": -5.724793045593557,
        "smoothedEle": 7.082814296192985,
        "gradeBand": "descent"
      },
      {
        "lat": 25.17453,
        "lng": 121.708171,
        "ele": 6.5,
        "distanceKm": 20.969664660166693,
        "gradePct": -2.056210562914349,
        "smoothedEle": 6.724066844858607,
        "gradeBand": "descent"
      },
      {
        "lat": 25.174112,
        "lng": 121.708365,
        "ele": 7.25,
        "distanceKm": 21.020077870210784,
        "gradePct": 0.5478441507797218,
        "smoothedEle": 7.527844378612398,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.173695,
        "lng": 121.708441,
        "ele": 9,
        "distanceKm": 21.067072745531117,
        "gradePct": 2.213242698898568,
        "smoothedEle": 8.95068724942545,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.173223,
        "lng": 121.708402,
        "ele": 10.75,
        "distanceKm": 21.119703363774253,
        "gradePct": 3.221291146578075,
        "smoothedEle": 10.743164473958753,
        "gradeBand": "hard"
      },
      {
        "lat": 25.172823,
        "lng": 121.7083,
        "ele": 12.25,
        "distanceKm": 21.165350488530077,
        "gradePct": 2.943810192987253,
        "smoothedEle": 11.842353435668675,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.172415,
        "lng": 121.70818,
        "ele": 12.25,
        "distanceKm": 21.212297830052044,
        "gradePct": 2.8931236822233966,
        "smoothedEle": 13.38407279228029,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.172063,
        "lng": 121.708126,
        "ele": 16,
        "distanceKm": 21.251813947797093,
        "gradePct": 1.7852238661265836,
        "smoothedEle": 13.301615563065264,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.172274,
        "lng": 121.7082,
        "ele": 12.25,
        "distanceKm": 21.27642961426962,
        "gradePct": 1.0954310338085933,
        "smoothedEle": 13.301615563065264,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.17227,
        "lng": 121.708222,
        "ele": 11.25,
        "distanceKm": 21.27868782458789,
        "gradePct": 1.0212729143898647,
        "smoothedEle": 13.301615563065264,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.172019,
        "lng": 121.708226,
        "ele": 12.25,
        "distanceKm": 21.306600692472458,
        "gradePct": -0.6199681892929352,
        "smoothedEle": 12.57701440790951,
        "gradeBand": "descent"
      },
      {
        "lat": 25.171592,
        "lng": 121.708279,
        "ele": 13,
        "distanceKm": 21.354379631701796,
        "gradePct": -0.5680614956572708,
        "smoothedEle": 12.733554067407985,
        "gradeBand": "descent"
      },
      {
        "lat": 25.17125,
        "lng": 121.708489,
        "ele": 12.75,
        "distanceKm": 21.397886067940174,
        "gradePct": -0.1410379566937896,
        "smoothedEle": 12.662202829277492,
        "gradeBand": "descent"
      },
      {
        "lat": 25.170926,
        "lng": 121.708555,
        "ele": 12.25,
        "distanceKm": 21.43452041777036,
        "gradePct": -0.37403141563870795,
        "smoothedEle": 12.294457277006295,
        "gradeBand": "descent"
      },
      {
        "lat": 25.17053527135227,
        "lng": 121.70850562015443,
        "ele": 11.844961394068111,
        "distanceKm": 21.478250794702678,
        "gradePct": -1.0433463607872728,
        "smoothedEle": 11.651058624714853,
        "gradeBand": "descent"
      },
      {
        "lat": 25.170144,
        "lng": 121.708553,
        "ele": 10.75,
        "distanceKm": 21.52201874498123,
        "gradePct": -1.5978082255378845,
        "smoothedEle": 10.822144237965858,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16981,
        "lng": 121.708548,
        "ele": 10,
        "distanceKm": 21.559161310366385,
        "gradePct": -1.9319231725469246,
        "smoothedEle": 9.99999624863257,
        "gradeBand": "descent"
      },
      {
        "lat": 25.169509,
        "lng": 121.708388,
        "ele": 9.25,
        "distanceKm": 21.59630287538689,
        "gradePct": -1.461595145255377,
        "smoothedEle": 9.847577937763711,
        "gradeBand": "descent"
      },
      {
        "lat": 25.169218,
        "lng": 121.707902,
        "ele": 11,
        "distanceKm": 21.654947583205107,
        "gradePct": 1.3243431014377467,
        "smoothedEle": 11.417609894991532,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.168823,
        "lng": 121.707481,
        "ele": 15,
        "distanceKm": 21.715974148126005,
        "gradePct": 3.8863506062700797,
        "smoothedEle": 14.260566462249528,
        "gradeBand": "hard"
      },
      {
        "lat": 25.16866,
        "lng": 121.70733,
        "ele": 15,
        "distanceKm": 21.739626581322206,
        "gradePct": 3.7731861827885793,
        "smoothedEle": 14.780623302301986,
        "gradeBand": "hard"
      },
      {
        "lat": 25.168476,
        "lng": 121.707301,
        "ele": 15.25,
        "distanceKm": 21.760293583864584,
        "gradePct": 2.0806168574882085,
        "smoothedEle": 13.747273175183086,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.16807,
        "lng": 121.707413,
        "ele": 10,
        "distanceKm": 21.806824609464783,
        "gradePct": -3.1536346058318845,
        "smoothedEle": 10.680695494301835,
        "gradeBand": "descent"
      },
      {
        "lat": 25.167574,
        "lng": 121.707476,
        "ele": 6.75,
        "distanceKm": 21.862340604314458,
        "gradePct": -5.635033364034241,
        "smoothedEle": 7.977333108730011,
        "gradeBand": "descent"
      },
      {
        "lat": 25.167275291402184,
        "lng": 121.70730526975107,
        "ele": 8.36161495498042,
        "distanceKm": 21.89973656561672,
        "gradePct": -2.704443303570529,
        "smoothedEle": 8.443382170894193,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16699,
        "lng": 121.707099,
        "ele": 10.25,
        "distanceKm": 21.93764803737963,
        "gradePct": 0.5893681823374722,
        "smoothedEle": 9.769110737850914,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.166562,
        "lng": 121.706772,
        "ele": 10.75,
        "distanceKm": 21.995509645858878,
        "gradePct": 2.4795281532014215,
        "smoothedEle": 10.870232122482811,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.166277,
        "lng": 121.706532,
        "ele": 11.5,
        "distanceKm": 22.035355485516295,
        "gradePct": 1.5300459089026464,
        "smoothedEle": 11.218988260902885,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.165958,
        "lng": 121.706387,
        "ele": 11.5,
        "distanceKm": 22.073711179590337,
        "gradePct": 0.4883321591217398,
        "smoothedEle": 10.943733826812096,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.165849,
        "lng": 121.706401,
        "ele": 10.5,
        "distanceKm": 22.085913063879765,
        "gradePct": 0.04499674501454656,
        "smoothedEle": 10.732603428725369,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.165477239786668,
        "lng": 121.7065349194871,
        "ele": 9.769690212767802,
        "distanceKm": 22.129392624626252,
        "gradePct": -1.332868444495223,
        "smoothedEle": 9.833929064353539,
        "gradeBand": "descent"
      },
      {
        "lat": 25.165119,
        "lng": 121.706713,
        "ele": 9.25,
        "distanceKm": 22.17307319980953,
        "gradePct": -1.6220828839158268,
        "smoothedEle": 9.326229318226618,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164806,
        "lng": 121.706979,
        "ele": 9,
        "distanceKm": 22.216982038926965,
        "gradePct": 0.05719286408717847,
        "smoothedEle": 10.147634989366521,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.164574,
        "lng": 121.707315,
        "ele": 12.75,
        "distanceKm": 22.25951425021959,
        "gradePct": 2.8886971189881474,
        "smoothedEle": 12.372522238911047,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.164328,
        "lng": 121.70772,
        "ele": 15.5,
        "distanceKm": 22.30860201187964,
        "gradePct": 5.544511031635533,
        "smoothedEle": 15.53538027908465,
        "gradeBand": "hard"
      },
      {
        "lat": 25.16427033561254,
        "lng": 121.7081305790917,
        "ele": 18.027921290859794,
        "distanceKm": 22.350417956947393,
        "gradePct": 6.113107234519802,
        "smoothedEle": 18.00979653871261,
        "gradeBand": "steep"
      },
      {
        "lat": 25.164182,
        "lng": 121.708536,
        "ele": 20.5,
        "distanceKm": 22.39238592087511,
        "gradePct": 6.06961137957735,
        "smoothedEle": 20.560144795016928,
        "gradeBand": "steep"
      },
      {
        "lat": 25.164062,
        "lng": 121.709037,
        "ele": 23.749999999999886,
        "distanceKm": 22.444543237851807,
        "gradePct": 6.087833243115314,
        "smoothedEle": 23.74999922063146,
        "gradeBand": "steep"
      },
      {
        "lat": 25.163942,
        "lng": 121.709538,
        "ele": 27,
        "distanceKm": 22.496700602789645,
        "gradePct": 5.461002764084238,
        "smoothedEle": 26.285026301298444,
        "gradeBand": "hard"
      },
      {
        "lat": 25.163878,
        "lng": 121.71003,
        "ele": 27.25,
        "distanceKm": 22.546725305942793,
        "gradePct": 2.817499014459435,
        "smoothedEle": 26.673554239053143,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.163851,
        "lng": 121.710512,
        "ele": 25.25,
        "distanceKm": 22.59532764195396,
        "gradePct": -1.2215983912489219,
        "smoothedEle": 24.996697297732258,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163834,
        "lng": 121.710997,
        "ele": 22.25,
        "distanceKm": 22.644175685810218,
        "gradePct": -5.12893592814771,
        "smoothedEle": 21.52481612139241,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163856,
        "lng": 121.711425,
        "ele": 17,
        "distanceKm": 22.687319944066836,
        "gradePct": -7.476950015359038,
        "smoothedEle": 17.796025438693498,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16392359100709,
        "lng": 121.71181035351152,
        "ele": 14.697561281794895,
        "distanceKm": 22.72682428122346,
        "gradePct": -6.5174497959912925,
        "smoothedEle": 16.240619700809365,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16404,
        "lng": 121.712182,
        "ele": 17.5,
        "distanceKm": 22.766404002882005,
        "gradePct": -2.3009709420579396,
        "smoothedEle": 17.302738062453155,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164381,
        "lng": 121.712601,
        "ele": 20.5,
        "distanceKm": 22.823113422922184,
        "gradePct": 3.7590438291362034,
        "smoothedEle": 20.145771292022477,
        "gradeBand": "hard"
      },
      {
        "lat": 25.164634,
        "lng": 121.712897,
        "ele": 21.5,
        "distanceKm": 22.864087424638218,
        "gradePct": 5.201406190998839,
        "smoothedEle": 22.441979079322252,
        "gradeBand": "hard"
      },
      {
        "lat": 25.164744,
        "lng": 121.713256,
        "ele": 25.5,
        "distanceKm": 22.902231971101116,
        "gradePct": 4.353663764877626,
        "smoothedEle": 23.45257791452614,
        "gradeBand": "hard"
      },
      {
        "lat": 25.164891581123534,
        "lng": 121.71377949495559,
        "ele": 21.88399856684077,
        "distanceKm": 22.957413791146802,
        "gradePct": -0.1314406018044724,
        "smoothedEle": 21.9365440285797,
        "gradeBand": "descent"
      },
      {
        "lat": 25.165059,
        "lng": 121.714296,
        "ele": 18.5,
        "distanceKm": 23.012628455808994,
        "gradePct": -4.73322816532841,
        "smoothedEle": 18.43372265138149,
        "gradeBand": "descent"
      },
      {
        "lat": 25.165205,
        "lng": 121.71466,
        "ele": 15.75,
        "distanceKm": 23.052697917509963,
        "gradePct": -6.209061058614135,
        "smoothedEle": 15.857044195553401,
        "gradeBand": "descent"
      },
      {
        "lat": 25.165105,
        "lng": 121.715003,
        "ele": 13.5,
        "distanceKm": 23.0889645214159,
        "gradePct": -6.323859408106458,
        "smoothedEle": 13.611104548784676,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164996,
        "lng": 121.715719,
        "ele": 9,
        "distanceKm": 23.162035803314854,
        "gradePct": -5.672865936084727,
        "smoothedEle": 9.605896157273547,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164949,
        "lng": 121.716197,
        "ele": 9,
        "distanceKm": 23.21042536300606,
        "gradePct": -2.5004423530808264,
        "smoothedEle": 9.934343119426263,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16475,
        "lng": 121.716798,
        "ele": 14.25,
        "distanceKm": 23.27483133940887,
        "gradePct": 4.4792013025819335,
        "smoothedEle": 14.171947908299657,
        "gradeBand": "hard"
      },
      {
        "lat": 25.164568,
        "lng": 121.717299,
        "ele": 18,
        "distanceKm": 23.32916248459682,
        "gradePct": 5.588866029944554,
        "smoothedEle": 16.75602201266979,
        "gradeBand": "hard"
      },
      {
        "lat": 25.164512,
        "lng": 121.717775,
        "ele": 16.5,
        "distanceKm": 23.377470889982913,
        "gradePct": 3.0334776728084,
        "smoothedEle": 17.330966728123517,
        "gradeBand": "hard"
      },
      {
        "lat": 25.164364,
        "lng": 121.718147,
        "ele": 18,
        "distanceKm": 23.418366920847024,
        "gradePct": 2.676755667019877,
        "smoothedEle": 18.919323810248386,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.164153,
        "lng": 121.718462,
        "ele": 22.5,
        "distanceKm": 23.457806761790692,
        "gradePct": 4.989241595373652,
        "smoothedEle": 22.086174794595504,
        "gradeBand": "hard"
      },
      {
        "lat": 25.164072,
        "lng": 121.718816,
        "ele": 25.5,
        "distanceKm": 23.494554870233166,
        "gradePct": 5.4684039323833815,
        "smoothedEle": 23.462893756709992,
        "gradeBand": "hard"
      },
      {
        "lat": 25.164117,
        "lng": 121.719352,
        "ele": 20.75,
        "distanceKm": 23.548730538867815,
        "gradePct": -0.3660189766280749,
        "smoothedEle": 20.991373834832,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164027,
        "lng": 121.719855,
        "ele": 17.25,
        "distanceKm": 23.600333165433806,
        "gradePct": -2.530609968751523,
        "smoothedEle": 20.668675196448845,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163817,
        "lng": 121.720212,
        "ele": 26.25,
        "distanceKm": 23.64318380629262,
        "gradePct": 3.2942373026081557,
        "smoothedEle": 24.53865573119281,
        "gradeBand": "hard"
      },
      {
        "lat": 25.163757,
        "lng": 121.720402,
        "ele": 29.5,
        "distanceKm": 23.663436296593122,
        "gradePct": 5.360706487556259,
        "smoothedEle": 26.26011740673558,
        "gradeBand": "hard"
      },
      {
        "lat": 25.163818,
        "lng": 121.720756,
        "ele": 25.75,
        "distanceKm": 23.699703575188348,
        "gradePct": 6.4340701032829255,
        "smoothedEle": 27.1066824620135,
        "gradeBand": "steep"
      },
      {
        "lat": 25.163852606413766,
        "lng": 121.72136147848379,
        "ele": 27.18241126718752,
        "distanceKm": 23.760761628788607,
        "gradePct": 1.370170302782631,
        "smoothedEle": 27.40294094613434,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.163876,
        "lng": 121.721968,
        "ele": 29.75,
        "distanceKm": 23.821858662241805,
        "gradePct": 1.264097088612054,
        "smoothedEle": 28.478277777624314,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.16397163585799,
        "lng": 121.72244415677936,
        "ele": 26.716234112094156,
        "distanceKm": 23.870945825983632,
        "gradePct": -0.8659541022540492,
        "smoothedEle": 26.716233555610643,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16406727171598,
        "lng": 121.72292031355872,
        "ele": 23.682468224188316,
        "distanceKm": 23.920032953039478,
        "gradePct": -4.763676760078624,
        "smoothedEle": 23.682467667726623,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16416290757397,
        "lng": 121.72339647033809,
        "ele": 20.64870233628225,
        "distanceKm": 23.96912004341078,
        "gradePct": -5.716842579772057,
        "smoothedEle": 21.064929690808313,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164257,
        "lng": 121.723873,
        "ele": 19.25,
        "distanceKm": 24.018206867867185,
        "gradePct": -4.582031373840105,
        "smoothedEle": 19.213295107109975,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164318,
        "lng": 121.724236,
        "ele": 18,
        "distanceKm": 24.055364182940483,
        "gradePct": -4.825353405153705,
        "smoothedEle": 16.973098825162072,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164295,
        "lng": 121.724716,
        "ele": 12.5,
        "distanceKm": 24.103739893644857,
        "gradePct": -5.804687393531739,
        "smoothedEle": 13.954325430871691,
        "gradeBand": "descent"
      },
      {
        "lat": 25.164081036130007,
        "lng": 121.72500386402719,
        "ele": 12.610883234589604,
        "distanceKm": 24.141228233752685,
        "gradePct": -4.898256778919671,
        "smoothedEle": 12.927091482183702,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163831,
        "lng": 121.725267,
        "ele": 13.75,
        "distanceKm": 24.179625115707147,
        "gradePct": -2.8249078845631557,
        "smoothedEle": 12.63424401785019,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163602,
        "lng": 121.725558,
        "ele": 11.25,
        "distanceKm": 24.21843389496205,
        "gradePct": -2.3347561669017596,
        "smoothedEle": 11.216932685458545,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1633,
        "lng": 121.725938,
        "ele": 8,
        "distanceKm": 24.269328813494035,
        "gradePct": -1.1810706591119908,
        "smoothedEle": 11.531701766297365,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163088,
        "lng": 121.72627,
        "ele": 17.25,
        "distanceKm": 24.310220830954748,
        "gradePct": 4.241839936140037,
        "smoothedEle": 15.758716833055358,
        "gradeBand": "hard"
      },
      {
        "lat": 25.16298378954909,
        "lng": 121.72668551524653,
        "ele": 21.639886220045984,
        "distanceKm": 24.353615216903805,
        "gradePct": 9.625717146061676,
        "smoothedEle": 21.06023525438219,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.162924,
        "lng": 121.727116,
        "ele": 24,
        "distanceKm": 24.39744758079547,
        "gradePct": 7.235903943475316,
        "smoothedEle": 21.67424765171191,
        "gradeBand": "steep"
      },
      {
        "lat": 25.163033,
        "lng": 121.727565,
        "ele": 17.75,
        "distanceKm": 24.44423342756493,
        "gradePct": -0.9127124146935242,
        "smoothedEle": 19.00134395232195,
        "gradeBand": "descent"
      },
      {
        "lat": 25.162964499999998,
        "lng": 121.7279565,
        "ele": 16.374999999999936,
        "distanceKm": 24.48436457867297,
        "gradePct": -5.115978228589131,
        "smoothedEle": 16.375000149365068,
        "gradeBand": "descent"
      },
      {
        "lat": 25.162896,
        "lng": 121.728348,
        "ele": 15,
        "distanceKm": 24.524495751506837,
        "gradePct": -4.963276896152693,
        "smoothedEle": 15.165692417167868,
        "gradeBand": "descent"
      },
      {
        "lat": 25.162699,
        "lng": 121.72891,
        "ele": 13.75,
        "distanceKm": 24.585150828370953,
        "gradePct": -3.4826748846594584,
        "smoothedEle": 12.868632514853905,
        "gradeBand": "descent"
      },
      {
        "lat": 25.162701,
        "lng": 121.729089,
        "ele": 11,
        "distanceKm": 24.603167318934922,
        "gradePct": -4.742722662103395,
        "smoothedEle": 11.0656780689141,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16312,
        "lng": 121.72961,
        "ele": 3.75,
        "distanceKm": 24.67331091001407,
        "gradePct": -8.566320813134768,
        "smoothedEle": 4.750699587949846,
        "gradeBand": "descent"
      },
      {
        "lat": 25.163144,
        "lng": 121.729954,
        "ele": 3.5,
        "distanceKm": 24.708034721669318,
        "gradePct": -7.022592948144905,
        "smoothedEle": 3.604876254456522,
        "gradeBand": "descent"
      },
      {
        "lat": 25.16283311772719,
        "lng": 121.73029377017863,
        "ele": 3.5906303396936834,
        "distanceKm": 24.756658948160656,
        "gradePct": -2.654348085500257,
        "smoothedEle": 3.595515989929292,
        "gradeBand": "descent"
      },
      {
        "lat": 25.162511931439326,
        "lng": 121.7306233084822,
        "ele": 3.700525283078075,
        "distanceKm": 24.805397864813695,
        "gradePct": 0.008637462143400098,
        "smoothedEle": 3.7005252504215216,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.16219074515146,
        "lng": 121.73095284678575,
        "ele": 3.8104202264624583,
        "distanceKm": 24.85413684089905,
        "gradePct": 0.21441869299435998,
        "smoothedEle": 3.8104201938065665,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.161869558863597,
        "lng": 121.73128238508932,
        "ele": 3.920315169846842,
        "distanceKm": 24.90287587641551,
        "gradePct": 0.22522357620798897,
        "smoothedEle": 3.9203151371909737,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.16154837257573,
        "lng": 121.73161192339288,
        "ele": 4.030210113231226,
        "distanceKm": 24.951614971363036,
        "gradePct": 0.22547611024282413,
        "smoothedEle": 4.030210080576019,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.161227186287867,
        "lng": 121.73194146169644,
        "ele": 4.140105056615616,
        "distanceKm": 25.00035412574042,
        "gradePct": 0.22547583530603257,
        "smoothedEle": 4.140105023960433,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.160906,
        "lng": 121.732271,
        "ele": 4.25,
        "distanceKm": 25.049093339547614,
        "gradePct": 0.754004724994016,
        "smoothedEle": 4.778529131966706,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.160579,
        "lng": 121.732282,
        "ele": 6,
        "distanceKm": 25.08547098092485,
        "gradePct": 2.52041800733735,
        "smoothedEle": 6.626965158212354,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.160307,
        "lng": 121.732105,
        "ele": 9.25,
        "distanceKm": 25.120572378466722,
        "gradePct": 4.952320711530654,
        "smoothedEle": 9.35726012558403,
        "gradeBand": "hard"
      },
      {
        "lat": 25.160191,
        "lng": 121.732028,
        "ele": 11,
        "distanceKm": 25.135620039815326,
        "gradePct": 5.982163480247808,
        "smoothedEle": 10.584208859367964,
        "gradeBand": "hard"
      },
      {
        "lat": 25.160093,
        "lng": 121.732002,
        "ele": 12.25,
        "distanceKm": 25.146826943667286,
        "gradePct": 6.801962199569223,
        "smoothedEle": 11.5508043165995,
        "gradeBand": "steep"
      },
      {
        "lat": 25.160038,
        "lng": 121.732009,
        "ele": 12.5,
        "distanceKm": 25.152983118657197,
        "gradePct": 7.105596184056264,
        "smoothedEle": 12.081774409479339,
        "gradeBand": "steep"
      },
      {
        "lat": 25.1596945,
        "lng": 121.732179,
        "ele": 14.625,
        "distanceKm": 25.194835714279364,
        "gradePct": 7.256943495454375,
        "smoothedEle": 14.612326498514847,
        "gradeBand": "steep"
      },
      {
        "lat": 25.159351,
        "lng": 121.732349,
        "ele": 16.75,
        "distanceKm": 25.23668832959828,
        "gradePct": 5.843650694820465,
        "smoothedEle": 16.51999954796823,
        "gradeBand": "hard"
      },
      {
        "lat": 25.158918,
        "lng": 121.732386,
        "ele": 18.25,
        "distanceKm": 25.28497959490431,
        "gradePct": 5.397344392611526,
        "smoothedEle": 19.413735965142596,
        "gradeBand": "hard"
      },
      {
        "lat": 25.158428,
        "lng": 121.732171,
        "ele": 25.75,
        "distanceKm": 25.34360488889505,
        "gradePct": 9.31595737225344,
        "smoothedEle": 26.2504148846543,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.158,
        "lng": 121.731753,
        "ele": 37,
        "distanceKm": 25.407125486939474,
        "gradePct": 13.364613308161436,
        "smoothedEle": 35.36092656928315,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.157581500000003,
        "lng": 121.731359,
        "ele": 39.124999999999936,
        "distanceKm": 25.468264975948024,
        "gradePct": 9.337684051658513,
        "smoothedEle": 39.12499906251994,
        "gradeBand": "extreme"
      },
      {
        "lat": 25.157163,
        "lng": 121.730965,
        "ele": 41.25,
        "distanceKm": 25.52940455318999,
        "gradePct": 3.3408167179874817,
        "smoothedEle": 40.07336123515438,
        "gradeBand": "hard"
      },
      {
        "lat": 25.156691,
        "lng": 121.730761,
        "ele": 37.75,
        "distanceKm": 25.58576188044476,
        "gradePct": -0.22395640489950744,
        "smoothedEle": 39.17244463832485,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156592,
        "lng": 121.73072,
        "ele": 38,
        "distanceKm": 25.597518221563284,
        "gradePct": -0.43757475098301146,
        "smoothedEle": 39.141183935331846,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156516,
        "lng": 121.730629,
        "ele": 39,
        "distanceKm": 25.609980302848804,
        "gradePct": -0.36005020173524316,
        "smoothedEle": 39.41201316571454,
        "gradeBand": "descent"
      },
      {
        "lat": 25.156458,
        "lng": 121.730494,
        "ele": 40.25,
        "distanceKm": 25.625020720553646,
        "gradePct": 0.20198253302255575,
        "smoothedEle": 40.20734426227559,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.156248,
        "lng": 121.730195,
        "ele": 42.75,
        "distanceKm": 25.66311150591755,
        "gradePct": 2.7046744216280527,
        "smoothedEle": 42.23920327029392,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.15621,
        "lng": 121.730146,
        "ele": 43.25,
        "distanceKm": 25.669605850662165,
        "gradePct": 2.9517262970091456,
        "smoothedEle": 42.38243789154036,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.156041,
        "lng": 121.730088,
        "ele": 43.5,
        "distanceKm": 25.689283651250864,
        "gradePct": 3.465330326476895,
        "smoothedEle": 42.6284103988991,
        "gradeBand": "hard"
      },
      {
        "lat": 25.155788,
        "lng": 121.730479,
        "ele": 41.5,
        "distanceKm": 25.737658634548513,
        "gradePct": 0.5536138023356251,
        "smoothedEle": 41.4350964197989,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.15569,
        "lng": 121.731156,
        "ele": 37.75,
        "distanceKm": 25.806663768029868,
        "gradePct": -4.434009470613966,
        "smoothedEle": 37.76566824670118,
        "gradeBand": "descent"
      },
      {
        "lat": 25.155427,
        "lng": 121.731616,
        "ele": 35.25,
        "distanceKm": 25.861424927987994,
        "gradePct": -4.509882119691504,
        "smoothedEle": 35.66141402442935,
        "gradeBand": "descent"
      },
      {
        "lat": 25.155188,
        "lng": 121.731891,
        "ele": 34.75,
        "distanceKm": 25.899796337550356,
        "gradePct": -3.5398761898943003,
        "smoothedEle": 34.59097565412752,
        "gradeBand": "descent"
      },
      {
        "lat": 25.154824775259215,
        "lng": 121.73215879303946,
        "ele": 33.53275891158272,
        "distanceKm": 25.948352819097707,
        "gradePct": -2.5835124959073767,
        "smoothedEle": 33.58021083583792,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15446,
        "lng": 121.732424,
        "ele": 32.5,
        "distanceKm": 25.99690927409759,
        "gradePct": -2.4976518696120635,
        "smoothedEle": 32.173863528366006,
        "gradeBand": "descent"
      },
      {
        "lat": 25.154386,
        "lng": 121.732984,
        "ele": 29.75,
        "distanceKm": 26.053870701781563,
        "gradePct": -3.826271579073142,
        "smoothedEle": 29.594124059065404,
        "gradeBand": "descent"
      },
      {
        "lat": 25.154223,
        "lng": 121.7334,
        "ele": 27,
        "distanceKm": 26.099495697397565,
        "gradePct": -4.376443608781885,
        "smoothedEle": 27.680282787623824,
        "gradeBand": "descent"
      },
      {
        "lat": 25.153997,
        "lng": 121.733784,
        "ele": 26.75000000000001,
        "distanceKm": 26.14559687927264,
        "gradePct": -3.2188390738172292,
        "smoothedEle": 26.75000007502212,
        "gradeBand": "descent"
      },
      {
        "lat": 25.153771,
        "lng": 121.734168,
        "ele": 26.5,
        "distanceKm": 26.191698121165413,
        "gradePct": -1.6081273087496284,
        "smoothedEle": 26.399242046419474,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15350991569958,
        "lng": 121.73459569223311,
        "ele": 25.800588069647787,
        "distanceKm": 26.24362018771355,
        "gradePct": -1.253435004663153,
        "smoothedEle": 25.536453027907484,
        "gradeBand": "descent"
      },
      {
        "lat": 25.153267,
        "lng": 121.735037,
        "ele": 24,
        "distanceKm": 26.295606269345267,
        "gradePct": -1.5832322113512611,
        "smoothedEle": 24.751068133852023,
        "gradeBand": "descent"
      },
      {
        "lat": 25.15305,
        "lng": 121.73539450000001,
        "ele": 25.125000000000046,
        "distanceKm": 26.338930413185775,
        "gradePct": -0.48938331368258414,
        "smoothedEle": 25.1249997010468,
        "gradeBand": "descent"
      },
      {
        "lat": 25.152833,
        "lng": 121.735752,
        "ele": 26.25,
        "distanceKm": 26.382254610173522,
        "gradePct": 0.903992246100605,
        "smoothedEle": 25.856771897630654,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.152596,
        "lng": 121.736057,
        "ele": 26,
        "distanceKm": 26.42271324183318,
        "gradePct": 1.02230946179257,
        "smoothedEle": 26.007338426852836,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.152266,
        "lng": 121.736338,
        "ele": 25.75,
        "distanceKm": 26.469042614975105,
        "gradePct": 0.2533343865207698,
        "smoothedEle": 25.886947601017937,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.151944,
        "lng": 121.736594,
        "ele": 26,
        "distanceKm": 26.51315516101883,
        "gradePct": -0.2981101842678193,
        "smoothedEle": 25.67365790826555,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151506,
        "lng": 121.736594,
        "ele": 25,
        "distanceKm": 26.56185860616101,
        "gradePct": -0.8949333793685612,
        "smoothedEle": 25.010682481012267,
        "gradeBand": "descent"
      },
      {
        "lat": 25.151082,
        "lng": 121.736405,
        "ele": 24,
        "distanceKm": 26.612698547505644,
        "gradePct": -1.0489581432885295,
        "smoothedEle": 24.626907548582096,
        "gradeBand": "descent"
      },
      {
        "lat": 25.150748,
        "lng": 121.736286,
        "ele": 25.25,
        "distanceKm": 26.6517213866568,
        "gradePct": 0.921499497250971,
        "smoothedEle": 26.07017483302631,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.150446,
        "lng": 121.736413,
        "ele": 29,
        "distanceKm": 26.68765300861245,
        "gradePct": 3.274254469776494,
        "smoothedEle": 28.09022301532668,
        "gradeBand": "hard"
      },
      {
        "lat": 25.149993,
        "lng": 121.736908,
        "ele": 31,
        "distanceKm": 26.75850249824664,
        "gradePct": 5.102860624992731,
        "smoothedEle": 31.55426434209051,
        "gradeBand": "hard"
      },
      {
        "lat": 25.149621,
        "lng": 121.737149,
        "ele": 34.25,
        "distanceKm": 26.806455147739033,
        "gradePct": 4.394715285694199,
        "smoothedEle": 33.4042305542514,
        "gradeBand": "hard"
      },
      {
        "lat": 25.149248,
        "lng": 121.737287,
        "ele": 34.25,
        "distanceKm": 26.85019504268244,
        "gradePct": 2.6970904979078094,
        "smoothedEle": 33.84517873988491,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.14894,
        "lng": 121.737369,
        "ele": 33,
        "distanceKm": 26.885423641064023,
        "gradePct": -0.21361535810436702,
        "smoothedEle": 32.3792402846152,
        "gradeBand": "descent"
      },
      {
        "lat": 25.148452,
        "lng": 121.737739,
        "ele": 27,
        "distanceKm": 26.951237608547363,
        "gradePct": -6.420122625174458,
        "smoothedEle": 27.381672685798854,
        "gradeBand": "descent"
      },
      {
        "lat": 25.147954,
        "lng": 121.737978,
        "ele": 23.75,
        "distanceKm": 27.01161248302731,
        "gradePct": -6.383198965471346,
        "smoothedEle": 24.007397980184276,
        "gradeBand": "descent"
      },
      {
        "lat": 25.147624,
        "lng": 121.738082,
        "ele": 22.5,
        "distanceKm": 27.049770833504656,
        "gradePct": -4.638465196759951,
        "smoothedEle": 22.85458669482894,
        "gradeBand": "descent"
      },
      {
        "lat": 25.147138930794444,
        "lng": 121.73826627874232,
        "ele": 22.351388111043082,
        "distanceKm": 27.106808436738532,
        "gradePct": -1.9680606943106904,
        "smoothedEle": 22.30782930372798,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146654,
        "lng": 121.738451,
        "ele": 22,
        "distanceKm": 27.16384601448772,
        "gradePct": -1.2206931369364509,
        "smoothedEle": 21.498970124977205,
        "gradeBand": "descent"
      },
      {
        "lat": 25.146022,
        "lng": 121.738693,
        "ele": 17.5,
        "distanceKm": 27.238223245731035,
        "gradePct": -4.360881572488962,
        "smoothedEle": 17.50144920894856,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14564,
        "lng": 121.738705,
        "ele": 15.5,
        "distanceKm": 27.280716936923355,
        "gradePct": -5.1598455420876235,
        "smoothedEle": 15.432370403125647,
        "gradeBand": "descent"
      },
      {
        "lat": 25.145322,
        "lng": 121.738756,
        "ele": 13.5,
        "distanceKm": 27.316447668428243,
        "gradePct": -5.474460425876754,
        "smoothedEle": 13.197351329127674,
        "gradeBand": "descent"
      },
      {
        "lat": 25.145005,
        "lng": 121.738867,
        "ele": 10.5,
        "distanceKm": 27.35342491137335,
        "gradePct": -5.37270348693119,
        "smoothedEle": 11.38855480635028,
        "gradeBand": "descent"
      },
      {
        "lat": 25.144701,
        "lng": 121.738878,
        "ele": 10.5,
        "distanceKm": 27.387246344811597,
        "gradePct": -4.0350435445664985,
        "smoothedEle": 10.988901098506151,
        "gradeBand": "descent"
      },
      {
        "lat": 25.14463,
        "lng": 121.738933,
        "ele": 10,
        "distanceKm": 27.39688885814585,
        "gradePct": -3.0702934027925477,
        "smoothedEle": 11.350495348540626,
        "gradeBand": "descent"
      },
      {
        "lat": 25.144447,
        "lng": 121.738726,
        "ele": 12.75,
        "distanceKm": 27.426013038962136,
        "gradePct": -0.35142458512147845,
        "smoothedEle": 12.378022498509413,
        "gradeBand": "descent"
      },
      {
        "lat": 25.144265,
        "lng": 121.738647,
        "ele": 14.25,
        "distanceKm": 27.447756794916213,
        "gradePct": 1.2570635644116663,
        "smoothedEle": 12.922882669606185,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.143871500000003,
        "lng": 121.7384735,
        "ele": 12.875,
        "distanceKm": 27.49486860946015,
        "gradePct": 1.600264120651856,
        "smoothedEle": 12.875000143478642,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.143478,
        "lng": 121.7383,
        "ele": 11.5,
        "distanceKm": 27.54198044487371,
        "gradePct": -0.539403941937619,
        "smoothedEle": 12.238733584321663,
        "gradeBand": "descent"
      },
      {
        "lat": 25.143131,
        "lng": 121.738196,
        "ele": 12.75,
        "distanceKm": 27.581960052427327,
        "gradePct": -0.47380317687951423,
        "smoothedEle": 12.414316697294627,
        "gradeBand": "descent"
      },
      {
        "lat": 25.142921,
        "lng": 121.738224,
        "ele": 13,
        "distanceKm": 27.60548049840539,
        "gradePct": 0.2823709949517172,
        "smoothedEle": 13.014052798016033,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.142853,
        "lng": 121.738251,
        "ele": 12.75,
        "distanceKm": 27.613515372494938,
        "gradePct": 0.6527921339821154,
        "smoothedEle": 13.27595934309489,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.142385,
        "lng": 121.738476,
        "ele": 14.999999999999927,
        "distanceKm": 27.670269577560678,
        "gradePct": 2.6370253370742986,
        "smoothedEle": 14.99999961019769,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.141917,
        "lng": 121.738701,
        "ele": 17.25,
        "distanceKm": 27.72702381727551,
        "gradePct": 3.1452110414268346,
        "smoothedEle": 16.83152064351421,
        "gradeBand": "hard"
      },
      {
        "lat": 25.141548,
        "lng": 121.738898,
        "ele": 17.5,
        "distanceKm": 27.772595459897627,
        "gradePct": 2.4128554949810144,
        "smoothedEle": 17.487913857485932,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.141205592153373,
        "lng": 121.73905672362008,
        "ele": 17.690597153613286,
        "distanceKm": 27.81388597431757,
        "gradePct": 1.3912657509867026,
        "smoothedEle": 17.798813915426635,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140861,
        "lng": 121.73921,
        "ele": 18.25,
        "distanceKm": 27.855192649075473,
        "gradePct": 0.5273012625686985,
        "smoothedEle": 17.76455294791358,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.140275,
        "lng": 121.739501,
        "ele": 16,
        "distanceKm": 27.92663433920305,
        "gradePct": -1.5287280163914612,
        "smoothedEle": 16.25951203130685,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139894665372115,
        "lng": 121.73968666359312,
        "ele": 15.7702183253486,
        "distanceKm": 27.972871170445917,
        "gradePct": -1.621906424244715,
        "smoothedEle": 15.770218352385267,
        "gradeBand": "descent"
      },
      {
        "lat": 25.139514330744234,
        "lng": 121.73987232718623,
        "ele": 15.5404366506972,
        "distanceKm": 28.019108025221264,
        "gradePct": -0.8776299800593835,
        "smoothedEle": 15.540436677735055,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13913399611635,
        "lng": 121.74005799077936,
        "ele": 15.3106549760458,
        "distanceKm": 28.06534490353012,
        "gradePct": -0.5392088338406887,
        "smoothedEle": 15.31065500308119,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13875366148847,
        "lng": 121.74024365437248,
        "ele": 15.080873301394401,
        "distanceKm": 28.111581805370342,
        "gradePct": -0.4969661399898602,
        "smoothedEle": 15.080873328430963,
        "gradeBand": "descent"
      },
      {
        "lat": 25.138373326860584,
        "lng": 121.74042931796559,
        "ele": 14.851091626743,
        "distanceKm": 28.157818730742953,
        "gradePct": -1.0000029656627998,
        "smoothedEle": 14.348054575176617,
        "gradeBand": "descent"
      },
      {
        "lat": 25.137993,
        "lng": 121.740615,
        "ele": 12.75,
        "distanceKm": 28.20405564007248,
        "gradePct": -2.076556358461773,
        "smoothedEle": 13.041719451472222,
        "gradeBand": "descent"
      },
      {
        "lat": 25.137619333333333,
        "lng": 121.74079633333334,
        "ele": 11.750000000000027,
        "distanceKm": 28.249438350731367,
        "gradePct": -2.730876867927091,
        "smoothedEle": 11.750000112338018,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13724566666667,
        "lng": 121.74097766666667,
        "ele": 10.749999999999973,
        "distanceKm": 28.294821083857855,
        "gradePct": -2.552623999713995,
        "smoothedEle": 10.750000112340354,
        "gradeBand": "descent"
      },
      {
        "lat": 25.136872,
        "lng": 121.741159,
        "ele": 9.75,
        "distanceKm": 28.34020383945241,
        "gradePct": -1.8171905075790855,
        "smoothedEle": 10.195649717949609,
        "gradeBand": "descent"
      },
      {
        "lat": 25.136811,
        "lng": 121.741172,
        "ele": 9.75,
        "distanceKm": 28.347111824963008,
        "gradePct": -1.6280248235879053,
        "smoothedEle": 10.18819474290684,
        "gradeBand": "descent"
      },
      {
        "lat": 25.136724,
        "lng": 121.741157,
        "ele": 10,
        "distanceKm": 28.356902929904916,
        "gradePct": -1.2749359576739516,
        "smoothedEle": 10.310583554680683,
        "gradeBand": "descent"
      },
      {
        "lat": 25.136683,
        "lng": 121.741138,
        "ele": 10.25,
        "distanceKm": 28.361846876298898,
        "gradePct": -1.1041976976016257,
        "smoothedEle": 10.372382884605466,
        "gradeBand": "descent"
      },
      {
        "lat": 25.136161,
        "lng": 121.740797,
        "ele": 12,
        "distanceKm": 28.429281350483095,
        "gradePct": 1.4631635026711742,
        "smoothedEle": 11.792231431757282,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.135758826944546,
        "lng": 121.74053528716757,
        "ele": 12.320934221736275,
        "distanceKm": 28.481184402623793,
        "gradePct": 1.3907816392758308,
        "smoothedEle": 12.170320640838836,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.135357772436265,
        "lng": 121.74027144623219,
        "ele": 12.015562768730632,
        "distanceKm": 28.53308966585054,
        "gradePct": 0.23982897799929162,
        "smoothedEle": 12.0598021876641,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.1349566414176,
        "lng": 121.74000774779962,
        "ele": 11.894159092512698,
        "distanceKm": 28.58499494544687,
        "gradePct": 0.027071954336175322,
        "smoothedEle": 12.189279057695728,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.134555,
        "lng": 121.739745,
        "ele": 13,
        "distanceKm": 28.636900217884502,
        "gradePct": 1.0211991279696746,
        "smoothedEle": 13.090506675286738,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.134055,
        "lng": 121.739423,
        "ele": 15,
        "distanceKm": 28.701256991769366,
        "gradePct": 1.9136511821224462,
        "smoothedEle": 14.385287013534915,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.13368,
        "lng": 121.73918,
        "ele": 14,
        "distanceKm": 28.749600846706628,
        "gradePct": 1.0359978994897834,
        "smoothedEle": 14.382025843006883,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.133261775537783,
        "lng": 121.73890842045435,
        "ele": 14.537383553494351,
        "distanceKm": 28.803546174252098,
        "gradePct": 0.25017074486671476,
        "smoothedEle": 14.635303335167167,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.132844,
        "lng": 121.738636,
        "ele": 15.5,
        "distanceKm": 28.85749150727219,
        "gradePct": 0.6818073493452498,
        "smoothedEle": 15.100880455024685,
        "gradeBand": "moderate"
      },
      {
        "lat": 25.132287,
        "lng": 121.738279,
        "ele": 14.25,
        "distanceKm": 28.929098763974704,
        "gradePct": -1.4014707501197365,
        "smoothedEle": 13.454365121634403,
        "gradeBand": "descent"
      },
      {
        "lat": 25.132074,
        "lng": 121.738652,
        "ele": 10.75,
        "distanceKm": 28.973493648318996,
        "gradePct": -3.0503190299470626,
        "smoothedEle": 11.682613093945475,
        "gradeBand": "descent"
      },
      {
        "lat": 25.13186013030067,
        "lng": 121.73906001654454,
        "ele": 10.595915202212202,
        "distanceKm": 29.02095578525848,
        "gradePct": -2.9930329172861896,
        "smoothedEle": 10.648569363445564,
        "gradeBand": "descent"
      },
      {
        "lat": 25.1316459525761,
        "lng": 121.7394678348315,
        "ele": 10.642273097792453,
        "distanceKm": 29.06841789046613,
        "gradePct": -1.0465947895611614,
        "smoothedEle": 10.838586334478364,
        "gradeBand": "descent"
      },
      {
        "lat": 25.131422,
        "lng": 121.739869,
        "ele": 11.5,
        "distanceKm": 29.115863277615354,
        "gradePct": 0.2897066054922467,
        "smoothedEle": 11.049224947227868,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 29.115863277615354,
      "elevationGainM": 402.4464140861738,
      "elevationLossM": 402.592072064592,
      "minimumElevationM": 2.5,
      "maximumElevationM": 43.5,
      "maximumSustainedGradePct": 13.364613308161436
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 71,
        "startDistanceKm": 0,
        "endDistanceKm": 3.194239776646805,
        "distanceKm": 3.194239776646805,
        "gainM": 42.49374114913923,
        "averageGradePct": 1.3303240871212114,
        "maximumGradePct": 6.156017096456727
      },
      {
        "startIndex": 151,
        "endIndex": 206,
        "startDistanceKm": 6.754717537862416,
        "endDistanceKm": 9.2647127387699,
        "distanceKm": 2.5099952009074835,
        "gainM": 36.20606552705259,
        "averageGradePct": 1.4424754881587964,
        "maximumGradePct": 6.143516661619127
      },
      {
        "startIndex": 212,
        "endIndex": 280,
        "startDistanceKm": 9.544399061089207,
        "endDistanceKm": 12.750575477198753,
        "distanceKm": 3.206176416109546,
        "gainM": 38.173298663750984,
        "averageGradePct": 1.190617536575589,
        "maximumGradePct": 5.95451600652512
      },
      {
        "startIndex": 322,
        "endIndex": 520,
        "startDistanceKm": 14.403003458252709,
        "endDistanceKm": 22.546725305942793,
        "distanceKm": 8.143721847690085,
        "gainM": 121.33662472997034,
        "averageGradePct": 1.4899406806776772,
        "maximumGradePct": 9.254522395466708
      },
      {
        "startIndex": 565,
        "endIndex": 593,
        "startDistanceKm": 24.603167318934922,
        "endDistanceKm": 25.689283651250864,
        "distanceKm": 1.0861163323159424,
        "gainM": 39.965071708792344,
        "averageGradePct": 3.679630857182141,
        "maximumGradePct": 13.364613308161436
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
