"use strict";

(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { BikeParts: api });
})(typeof window !== "undefined" ? window : globalThis, function () {
  function deepFreeze(value) {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
    Object.freeze(value);
    Object.values(value).forEach(deepFreeze);
    return value;
  }

  const categories = [
    { id: "frame-fork", name: "車架與前叉" },
    { id: "controls-contact", name: "操控與接觸點" },
    { id: "drivetrain", name: "傳動系統" },
    { id: "wheels-brakes", name: "輪組與煞車" }
  ];

  const PART_LAYOUT = [
    ["top-tube", "上管", "frame-fork", 1, 525, 195, 360, 72],
    ["down-tube", "下管", "frame-fork", 2, 545, 286, 795, 155],
    ["head-tube", "頭管", "frame-fork", 3, 620, 230, 805, 212],
    ["seat-tube", "車架座管", "frame-fork", 4, 453, 273, 305, 228],
    ["seat-stay", "上叉", "frame-fork", 5, 342, 268, 135, 225],
    ["chain-stay", "下叉", "frame-fork", 6, 355, 350, 135, 390],
    ["fork", "前叉", "frame-fork", 7, 670, 305, 815, 320],
    ["derailleur-hanger", "後變速器吊耳", "frame-fork", 8, 278, 376, 115, 455],
    ["drop-handlebar", "彎把", "controls-contact", 9, 680, 132, 820, 78],
    ["stem", "龍頭", "controls-contact", 10, 636, 166, 800, 118],
    ["headset", "碗組", "controls-contact", 11, 610, 190, 790, 178],
    ["bar-tape", "手把帶", "controls-contact", 12, 691, 148, 852, 148],
    ["shift-brake-lever", "變速煞車把", "controls-contact", 13, 706, 156, 874, 192],
    ["saddle", "座墊", "controls-contact", 14, 418, 145, 255, 105],
    ["seatpost", "座桿", "controls-contact", 15, 433, 173, 270, 150],
    ["pedal", "踏板", "controls-contact", 16, 497, 370, 650, 450],
    ["crank-arm", "曲柄", "drivetrain", 17, 485, 365, 640, 410],
    ["chainring", "齒盤", "drivetrain", 18, 468, 350, 610, 378],
    ["bottom-bracket", "中軸", "drivetrain", 19, 449, 338, 590, 338],
    ["front-derailleur", "前變速器", "drivetrain", 20, 435, 303, 286, 303],
    ["rear-derailleur", "後變速器", "drivetrain", 21, 279, 401, 105, 490],
    ["chain", "鏈條", "drivetrain", 22, 365, 378, 228, 430],
    ["cassette", "飛輪", "drivetrain", 23, 252, 362, 92, 358],
    ["jockey-wheel", "導輪", "drivetrain", 24, 282, 414, 128, 512],
    ["rim", "輪圈", "wheels-brakes", 25, 715, 210, 865, 260],
    ["tire", "輪胎", "wheels-brakes", 26, 245, 202, 78, 175],
    ["valve", "氣嘴", "wheels-brakes", 27, 660, 470, 805, 500],
    ["hub", "花鼓", "wheels-brakes", 28, 715, 350, 860, 365],
    ["spoke", "輻條", "wheels-brakes", 29, 752, 315, 890, 300],
    ["axle", "貫通軸／快拆", "wheels-brakes", 30, 222, 350, 72, 325],
    ["disc-rotor", "碟盤", "wheels-brakes", 31, 690, 350, 845, 405],
    ["brake-caliper", "煞車卡鉗", "wheels-brakes", 32, 655, 315, 815, 445]
  ];

  const CONTENT_BY_ID = {
    "top-tube": {
      purpose: "連接頭管與車架座管上端，形成車架主三角並承受騎乘與操控負荷。",
      materials: "常見為鋁合金、鋼、鈦合金或碳纖維，管形與疊層依車架設計而異。",
      adjustment: "上管本身不可調整；跨高與有效上管長應在選車架尺寸時一併確認。",
      maintenance: "定期清潔後以側光檢查表面、接合處與走線孔，避免硬物夾壓管壁。",
      warningSigns: "裂痕、異常鼓起、撞擊凹痕或接合處異音可能影響結構，應停止騎乘。",
      relatedParts: ["head-tube", "seat-tube", "down-tube"],
      workshopAdvice: "撞車或倒車後交由熟悉車架材質的技師檢查；碳纖維判讀不可只看表漆。"
    },
    "down-tube": {
      purpose: "由頭管延伸至中軸區域，是主三角承受踩踏與前端負荷的重要結構。",
      materials: "依車架可用抽管鋼材、成形鋁管、鈦管或定向碳纖維疊層製成。",
      adjustment: "下管沒有日常調整項目，水壺架與配件只能使用原設計的固定位置。",
      maintenance: "清除前輪濺起的砂石與鹽分，檢查下側撞痕、螺孔與內走線出口。",
      warningSigns: "石擊後出現裂紋、軟點、明顯凹陷或騎乘時反覆異音，應停止騎乘。",
      relatedParts: ["head-tube", "bottom-bracket", "top-tube"],
      workshopAdvice: "安裝水壺架依原廠螺栓規格作業，勿以過長螺栓頂傷管內或電池模組。"
    },
    "head-tube": {
      purpose: "容納碗組並定位前叉轉向軸，使車架前端能平順且準確地轉向。",
      materials: "通常與車架同材質，軸承座可能採加工鋁件、金屬襯套或碳纖維座面。",
      adjustment: "轉向預壓由碗組與龍頭系統調整，頭管本體不可加工改變其規格。",
      maintenance: "定期確認軸承座周圍清潔、排水正常，並檢查頭管兩端與焊接接合。",
      warningSigns: "轉向卡滯、煞前輪時有敲擊感、裂痕或軸承明顯間隙，應停止騎乘。",
      relatedParts: ["headset", "fork", "stem"],
      workshopAdvice: "更換碗組先核對頭管與前叉舵管標準，壓入式軸承座應使用專用工具。"
    },
    "seat-tube": {
      purpose: "支撐座桿並連接上管、中軸與後三角，傳遞騎士重量及踩踏負荷。",
      materials: "可由鋼、鋁、鈦或碳纖維構成，內壁尺寸與夾持區設計各有差異。",
      adjustment: "只在標示範圍內夾持相符直徑座桿，夾環鎖付依車架製造商規定。",
      maintenance: "定期取出座桿清潔接觸面，依材質使用合適裝配膏並保持排水孔暢通。",
      warningSigns: "夾口裂痕、座桿持續下滑、管內腐蝕或中軸接合異音，應停止騎乘並檢查。",
      relatedParts: ["seatpost", "top-tube", "bottom-bracket"],
      workshopAdvice: "碳纖維夾持扭力以製造商標示為準，勿靠加長工具或過度鎖緊止滑。"
    },
    "seat-stay": {
      purpose: "連接後輪軸區與車架座管附近，穩定後輪並傳遞路面和煞車負荷。",
      materials: "可能使用細徑鋼管、成形鋁材、鈦合金或具彈性設計的碳纖維。",
      adjustment: "上叉屬固定結構不可校正騎姿，後輪偏移應先查軸、輪組與安裝面。",
      maintenance: "清潔輪胎附近泥沙，檢查橋接處、卡鉗座及兩側是否有摩擦痕跡。",
      warningSigns: "單側裂痕、撞凹、輪胎持續磨擦或煞車座位移，均應停止騎乘檢查。",
      relatedParts: ["chain-stay", "rim", "brake-caliper"],
      workshopAdvice: "不要用強拉方式矯正碳纖維或鋁合金後三角，幾何異常交由技師量測。"
    },
    "chain-stay": {
      purpose: "從中軸區連接後輪軸，抵抗踩踏鏈條張力並維持後輪與傳動定位。",
      materials: "常見鋼、鋁、鈦與碳纖維結構，驅動側可能採不對稱或下沉造型。",
      adjustment: "下叉本體不可調整；鏈線或輪胎間隙異常應從輪軸、墊片與規格查起。",
      maintenance: "保持護鏈貼完整並清除油泥，仔細查看驅動側鏈條撞擊及輪胎磨痕。",
      warningSigns: "裂痕、壓傷、漆下隆起或踩踏時後輪位置改變，應立即停止騎乘。",
      relatedParts: ["chain", "derailleur-hanger", "axle"],
      workshopAdvice: "掉鏈後需檢查鏈條是否夾傷下叉；結構損傷不得以護貼遮蓋後繼續使用。"
    },
    "fork": {
      purpose: "連接前輪與車把轉向系統，承受路面衝擊、轉向及前煞車產生的負荷。",
      materials: "可為碳纖維、鋁合金、鋼或混合結構，舵管與叉腳材質未必相同。",
      adjustment: "前叉無一般調整；墊圈高度、舵管夾持與前輪軸須符合原廠限制。",
      maintenance: "清潔叉冠、叉腳內側、卡鉗座及舵管夾持區，撞擊後做完整檢查。",
      warningSigns: "叉腳或舵管裂痕、煞車時異常彎動、轉向卡滯，必須停止騎乘。",
      relatedParts: ["headset", "axle", "brake-caliper"],
      workshopAdvice: "碳纖維舵管鎖付扭力以製造商標示為準，切割與壓入塞交由合格技師。"
    },
    "derailleur-hanger": {
      purpose: "將後變速器精確定位於飛輪旁，並在部分撞擊下作為可更換的連接件。",
      materials: "多為加工或鍛造鋁合金，也有鋼製或特定通用規格的可更換設計。",
      adjustment: "使用吊耳校正工具檢查平行度，不能靠扳動後變速器目測猜測位置。",
      maintenance: "拆裝後清潔接觸面並確認固定螺栓，運送或倒車後複查變速表現。",
      warningSigns: "變速跨多片飛輪齒片不準、後變速器傾斜、裂紋或螺牙受損，應停止騎乘並處理。",
      relatedParts: ["rear-derailleur", "cassette", "chain-stay"],
      workshopAdvice: "先確認車架專用型號再備料；嚴重彎曲或裂開的吊耳應更換而非反覆校正。"
    },
    "drop-handlebar": {
      purpose: "提供上把、煞把與下把等握位，將騎士操控輸入傳至龍頭與前輪。",
      materials: "常用鋁合金或碳纖維，具有不同寬度、外撇、前伸量與下沉量。",
      adjustment: "旋轉角度與煞把位置需兼顧手腕中立及可觸及性，夾持區不得超界。",
      maintenance: "定期拆看手把帶覆蓋處與龍頭夾持區，清除汗液造成的鹽分與腐蝕。",
      warningSigns: "摔車後裂痕、彎曲、按壓異音或夾持區滑動，應停止騎乘並檢查。",
      relatedParts: ["stem", "bar-tape", "shift-brake-lever"],
      workshopAdvice: "碳纖維手把鎖付扭力以製造商標示為準，禁止在非設計區域安裝延伸配件。"
    },
    "stem": {
      purpose: "夾持前叉舵管與彎把，決定兩者相對位置並傳遞轉向操控力量。",
      materials: "常見鍛造或加工鋁合金，也有碳纖維本體搭配金屬螺栓與夾片。",
      adjustment: "先設定碗組預壓再鎖舵管螺栓，面板螺栓應依規定順序均勻鎖付。",
      maintenance: "檢查面板間隙、螺栓鏽蝕與夾持面，定期確認車把和前輪仍對正。",
      warningSigns: "手把滑動、轉向敲擊、螺栓變形或本體裂痕，應停止騎乘查明原因。",
      relatedParts: ["drop-handlebar", "headset", "fork"],
      workshopAdvice: "碳纖維接觸件的鎖付扭力以製造商標示為準，勿用單一螺栓硬拉面板。"
    },
    "headset": {
      purpose: "以軸承支撐前叉舵管在頭管中旋轉，同時承受轉向與路面軸向負荷。",
      materials: "由鋼或陶瓷滾動體、鋁或鋼軸承座、密封件及壓環共同構成。",
      adjustment: "鬆開龍頭舵管螺栓後微調頂蓋預壓，以無間隙且能自由轉向為準。",
      maintenance: "防止清洗水柱直沖軸承，依使用環境拆檢潤滑並查看座面磨耗。",
      warningSigns: "轉向卡滯、固定角度有凹點、煞前輪時敲擊或明顯間隙，應停止騎乘。",
      relatedParts: ["head-tube", "fork", "stem"],
      workshopAdvice: "預壓不是固定龍頭的力量；調整後仍有間隙，應檢查零件堆疊與軸承規格。"
    },
    "bar-tape": {
      purpose: "提供手部抓握、防滑與緩衝，並包覆固定於彎把上的煞車管線或線材。",
      materials: "常見聚氨酯、EVA 泡棉、軟木複材或合成皮，背面可能帶黏著層。",
      adjustment: "纏繞重疊量與張力需均勻，煞把夾環附近不可留下裸露或厚硬凸點。",
      maintenance: "以溫和清潔方式去除汗鹽並保持乾燥，必要時拆除檢查手把表面。",
      warningSigns: "表面滑黏、破裂鬆脫、局部鼓包或下方出現腐蝕痕跡即需處理。",
      relatedParts: ["drop-handlebar", "shift-brake-lever"],
      workshopAdvice: "更換時由下把端依固定方向重纏，收尾膠帶不可取代鬆動的正常纏繞。"
    },
    "shift-brake-lever": {
      purpose: "讓雙手維持在彎把時控制煞車與變速，部分系統也整合電子按鍵。",
      materials: "本體常由工程塑膠、鋁合金與複合材料組成，內含棘輪或電子模組。",
      adjustment: "可依型號調整把手行程與在彎把的位置，左右角度應配合騎士手型。",
      maintenance: "檢查固定夾環、護套下方與管線入口，液壓系統依原廠程序保養。",
      warningSigns: "拉桿觸底、回彈遲滯、漏油、變速失靈或煞車失效，應停止騎乘。",
      relatedParts: ["drop-handlebar", "brake-caliper", "front-derailleur"],
      workshopAdvice: "先辨識拉線或液壓規格再施工；液壓油品不可混用，排氣需依原廠流程。"
    },
    "saddle": {
      purpose: "支撐坐骨並提供騎乘姿勢的接觸平台，其形狀需配合柔軟度與騎姿。",
      materials: "由鋼、鉻鉬、鈦或碳纖維座弓，搭配尼龍底殼、泡棉與表皮構成。",
      adjustment: "高度由座桿決定，座墊可調前後與傾角；座弓夾持不得超過刻線。",
      maintenance: "保持表面乾燥，檢查座弓夾持點、底殼裂紋及固定件是否鬆動。",
      warningSigns: "座弓彎曲或裂開、底殼斷裂、騎乘中突然移位，應立即停止使用。",
      relatedParts: ["seatpost", "seat-tube"],
      workshopAdvice: "先以小幅度改變前後與傾角並實騎評估；持續麻木疼痛宜做專業設定。"
    },
    "seatpost": {
      purpose: "連接座墊與車架座管，設定座高並承受騎士重量與路面反覆衝擊。",
      materials: "常見鋁合金、碳纖維、鋼或鈦合金，座弓夾頭可能使用不同金屬零件。",
      adjustment: "座高不得超過最小插入線，座弓前後與傾角依夾頭結構均勻調整。",
      maintenance: "定期取出清潔座桿與車架座管內壁，按材質選用潤滑脂或碳纖維裝配膏。",
      warningSigns: "持續下滑、深刮痕、夾頭鬆動、裂痕或異常彎曲，應停止騎乘檢查。",
      relatedParts: ["saddle", "seat-tube"],
      workshopAdvice: "碳纖維座桿與車架的鎖付扭力以製造商標示為準，不可用過鎖補償尺寸錯誤。"
    },
    "pedal": {
      purpose: "承接足部踩踏並繞軸旋轉，卡踏系統同時負責鞋底扣片的固定與釋放。",
      materials: "本體可用工程塑膠、鋁或碳纖維，軸心多為鉻鉬鋼或鈦合金。",
      adjustment: "依型號調整卡入釋放張力，扣片角度與前後位置需配合膝踝軌跡。",
      maintenance: "清除卡扣泥沙，檢查軸承轉動與鎖片磨耗，安裝螺紋使用合適潤滑。",
      warningSigns: "軸心明顯間隙、卡扣無法可靠固定、裂痕或踩踏異音，應停止騎乘並檢查。",
      relatedParts: ["crank-arm", "bottom-bracket"],
      workshopAdvice: "左右踏板螺紋方向不同；初次使用卡踏應在安全環境練習脫卡。"
    },
    "crank-arm": {
      purpose: "把踏板力量轉成中軸旋轉扭矩，並維持左右腳踏位置與齒盤相對關係。",
      materials: "可採鍛造鋁合金、碳纖維或中空金屬結構，軸心介面依系統設計。",
      adjustment: "曲柄固定、預壓與左右墊片須依型號程序設定，不能混用不同介面。",
      maintenance: "定期確認踏板螺紋、固定螺栓與曲柄端面，清除鞋跟摩擦處砂粒。",
      warningSigns: "裂痕、固定處鬆動、踏板孔螺牙損傷或踩踏時偏擺，應停止騎乘。",
      relatedParts: ["pedal", "chainring", "bottom-bracket"],
      workshopAdvice: "碳纖維曲柄鎖付扭力以製造商標示為準，拆裝應使用該系統指定工具。"
    },
    "chainring": {
      purpose: "由曲柄帶動鏈條，將踩踏扭矩傳向後輪；不同齒數改變可用齒比。",
      materials: "常見加工鋁合金或鋼齒片，部分一體式系統結合碳纖維曲柄蜘蛛。",
      adjustment: "多片齒盤需保持方向、定位記號與間距正確，前變速器高度配合大盤。",
      maintenance: "去除齒根油泥並查看固定螺栓，潤滑鏈條後擦掉外側多餘油膜。",
      warningSigns: "齒形異常尖薄、受力跳鏈、齒片彎曲或固定處鬆動需檢修。",
      relatedParts: ["crank-arm", "chain", "front-derailleur"],
      workshopAdvice: "更換需核對速別、孔距或直裝介面及齒數相容範圍，勿只比外觀選購。"
    },
    "bottom-bracket": {
      purpose: "以軸承支撐曲柄軸在車架中軸殼旋轉，承受踩踏的徑向與側向負荷。",
      materials: "包含鋼或陶瓷軸承、鋼製內圈，以及鋁或工程塑膠軸承杯與密封件。",
      adjustment: "依螺紋式或壓入式規格安裝，曲柄側向預壓須按系統程序設定。",
      maintenance: "避免高壓水柱直沖，定期確認排水、軸承轉感與中軸殼接合狀況。",
      warningSigns: "軸承明顯間隙、轉動粗澀、曲柄側向晃動或持續異音，應停止騎乘。",
      relatedParts: ["crank-arm", "seat-tube", "down-tube"],
      workshopAdvice: "先以負載與拆卸檢查定位異音來源；壓入式安裝需量測座孔並使用壓床。"
    },
    "front-derailleur": {
      purpose: "橫向引導鏈條在不同齒盤間移動，使騎士切換前方齒比範圍。",
      materials: "導鏈板多為成形鋼材，本體可用鋁合金、工程塑膠與碳纖維複材。",
      adjustment: "設定安裝高度、與齒盤平行度及內外限位，再調整拉線張力或電子位置。",
      maintenance: "清除導鏈板油泥，檢查固定座、拉線與電池狀態，保持轉軸活動順暢。",
      warningSigns: "頻繁掉鏈、導鏈板磨齒盤、無法跨盤或本體鬆動，應在騎乘前修正。",
      relatedParts: ["chainring", "chain", "shift-brake-lever"],
      workshopAdvice: "先確認車架固定方式、齒盤齒差與鏈線相容性，再依變速系統手冊設定。"
    },
    "rear-derailleur": {
      purpose: "移動鏈條至不同飛輪齒片，並由導輪臂吸收各齒比所需的鏈條長度。",
      materials: "由鋁合金、鋼、工程塑膠或碳纖維導板組成，內含彈簧與多個轉軸。",
      adjustment: "先確認吊耳平直，再設定限位、導輪距離及拉線張力或電子微調。",
      maintenance: "清潔各轉軸與導輪油泥，檢查固定螺栓、拉線外管及離合機構。",
      warningSigns: "變速器碰輻條、導板裂開、異常鬆晃或鏈條反覆跳齒應停止使用。",
      relatedParts: ["derailleur-hanger", "cassette", "jockey-wheel"],
      workshopAdvice: "變速不準先查吊耳與鏈條狀況；不可用限位螺栓掩蓋彎曲的吊耳。"
    },
    "chain": {
      purpose: "以鏈節嚙合齒盤和飛輪，把曲柄輸出的扭矩傳送到後輪。",
      materials: "以淬硬鋼片、銷與滾子為主，表面可有鍍鎳或低摩擦防鏽處理。",
      adjustment: "鏈條長度需配合最大齒比與後變速器容量，接合方式依型號規定。",
      maintenance: "按騎乘環境清潔並在滾子處適量上油，靜置滲入後擦淨外表多餘油。",
      warningSigns: "量測超出原廠磨耗規格、僵節、鏽蝕或受力跳鏈時應更換或檢修。",
      relatedParts: ["chainring", "cassette", "rear-derailleur"],
      workshopAdvice: "用相容量規依鏈條原廠規格量測，不硬套通用報廢數值；接頭不可隨意重複使用。"
    },
    "cassette": {
      purpose: "提供後輪多片不同齒數的齒輪，配合鏈條與後變速器改變傳動比。",
      materials: "齒片多為鋼或鋁，部分採鈦合金；齒片座可能使用鋁或碳纖維複材。",
      adjustment: "依塔基規格、速別與墊片配置安裝，鎖環使用指定工具與規定扭力。",
      maintenance: "拆輪後清除齒片間油泥，檢查鎖環、塔基咬痕及各片是否鬆動。",
      warningSigns: "搭配正常鏈條仍跳齒、齒形受損或量測超出原廠磨耗規格需處理。",
      relatedParts: ["chain", "rear-derailleur", "hub"],
      workshopAdvice: "磨耗依原廠規格與實際嚙合量測，不硬寫通用報廢數值；更換前確認塔基相容。"
    },
    "jockey-wheel": {
      purpose: "上導輪引導鏈條對準飛輪，下張力輪配合導板維持鏈條路徑與張力。",
      materials: "常用工程塑膠或鋁合金齒輪，中心配置襯套、滾珠或密封軸承。",
      adjustment: "上下導輪若有方向或位置標示必須照裝，導板螺栓依原廠程序固定。",
      maintenance: "定期清除齒槽黏附油泥，拆檢時勿遺失防塵蓋並按規格潤滑。",
      warningSigns: "齒尖磨損、轉動卡澀、側向明顯晃動或導輪裂開，應停止騎乘並處理。",
      relatedParts: ["rear-derailleur", "chain", "cassette"],
      workshopAdvice: "替換前核對齒數、上下位置、旋轉方向與變速器型號，軸承規格不可猜配。"
    },
    "rim": {
      purpose: "支撐輪胎並由輻條連接花鼓，輪圈煞車系統也以側壁作為摩擦面。",
      materials: "常見鋁合金或碳纖維結構，胎床可分有內胎、無內胎及管胎設計。",
      adjustment: "輪圈偏擺與圓度透過輻條張力校正，無內胎系統須配合相容胎與胎帶。",
      maintenance: "清潔胎床與排水孔；輪圈煞車面不得沾油，並依原廠方式檢查磨耗。",
      warningSigns: "裂痕、煞車面鼓起、胎唇受損或無法校正的偏擺，應停止騎乘。",
      relatedParts: ["tire", "spoke", "brake-caliper"],
      workshopAdvice: "碳纖維輪圈需使用相容煞車皮；煞車面磨耗與胎壓上限依輪圈原廠規格。"
    },
    "tire": {
      purpose: "形成車輪與路面的接觸面，提供抓地、緩衝、滾動效率及防刺保護。",
      materials: "由橡膠胎面、尼龍或棉質簾布與胎唇構成，可能加入防刺層或氣密層。",
      adjustment: "壓力依系統總重量、胎寬、輪圈規格與路況調整，並遵守各零件上下限。",
      maintenance: "騎乘前量胎壓並檢查割傷、嵌入物與胎面，無內胎補充液按狀況維護。",
      warningSigns: "露出簾布、胎唇損傷、側壁鼓包、反覆漏氣或深裂紋應停止使用。",
      relatedParts: ["rim", "valve"],
      workshopAdvice: "不要把單一壓力當通用答案；確認實際胎寬、輪圈相容性與系統重量後設定。"
    },
    "valve": {
      purpose: "提供輪胎充放氣與壓力量測通道，無內胎系統還要維持胎床氣密。",
      materials: "閥桿多為黃銅或鋁合金，搭配橡膠底座、密封圈與可拆式氣門芯。",
      adjustment: "氣門芯應適度固定，無內胎閥底座與螺帽只需壓緊至可靠密封。",
      maintenance: "保持閥口清潔並蓋回防塵帽，補胎液堵塞時拆芯清理或更換。",
      warningSigns: "閥根裂開、持續漏氣、閥桿彎曲或氣門芯無法密封，應停止騎乘並處理。",
      relatedParts: ["tire", "rim"],
      workshopAdvice: "打氣筒接頭應直進直出，勿以外側螺帽過度鎖緊來補救錯位的胎帶。"
    },
    "hub": {
      purpose: "讓輪組繞固定軸旋轉，並透過花鼓耳把輻條張力傳至車輪中心。",
      materials: "殼體多為鋁合金，軸心可為鋁或鋼，內部使用鋼或陶瓷軸承。",
      adjustment: "可調式珠碗需消除間隙且保持順暢；密封軸承系統依設計設定端蓋。",
      maintenance: "檢查軸承轉感、端蓋與塔基咬合，避免高壓水柱把污染物推入密封。",
      warningSigns: "軸承明顯間隙、粗澀卡住、花鼓耳裂痕或軸心異常移位應停止騎乘。",
      relatedParts: ["spoke", "axle", "cassette"],
      workshopAdvice: "先辨識珠碗或卡式軸承結構再拆卸；預壓過緊同樣會縮短軸承壽命。"
    },
    "spoke": {
      purpose: "以張力把花鼓連接輪圈，多支輻條共同維持輪組圓度、側向剛性與承載。",
      materials: "通常為不鏽鋼，也有鋁、鈦或碳纖維；輻帽多採黃銅或鋁合金。",
      adjustment: "使用輻條張力計及校輪台平衡左右張力，同時控制偏擺與圓度。",
      maintenance: "定期查看交叉接觸處、輻帽與花鼓耳，發現鬆動應檢查整輪張力。",
      warningSigns: "輻條斷裂、張力顯著不均、輻帽裂開或輪圈持續偏擺，應停止騎乘並檢修。",
      relatedParts: ["rim", "hub"],
      workshopAdvice: "不要只緊故障附近一支輻條；編法、長度與目標張力需依輪組規格決定。"
    },
    "axle": {
      purpose: "將花鼓可靠固定於前叉或車架勾爪，維持車輪、碟盤與傳動的定位。",
      materials: "貫通軸常用鋁合金或鋼，快拆包含鋼軸桿、凸輪與調整螺帽。",
      adjustment: "貫通軸按原廠扭力鎖付；快拆凸輪需以正確預緊力完全關閉。",
      maintenance: "清潔螺紋、軸桿與勾爪接觸面，依製造商指示薄塗合適潤滑劑。",
      warningSigns: "螺紋損壞、桿身彎曲、凸輪無法夾緊或車輪有明顯間隙應停止騎乘。",
      relatedParts: ["hub", "fork", "disc-rotor"],
      workshopAdvice: "先確認直徑、長度與牙距；快拆把手不是旋緊螺帽，關閉後不得碰到碟盤。"
    },
    "disc-rotor": {
      purpose: "隨花鼓旋轉並由卡鉗來令片夾持，把車輪動能轉為熱能以減速。",
      materials: "常見不鏽鋼摩擦面，部分為鋼鋁複合浮動結構並採六孔或中央鎖入。",
      adjustment: "安裝方向、固定介面與卡鉗置中依規格操作，輕微偏擺才可專業校正。",
      maintenance: "碟盤煞車面不得沾油，以相容清潔劑處理並按原廠規格量測磨耗。",
      warningSigns: "煞車失效、裂痕、嚴重偏擺、固定鬆動或低於原廠規格應停止騎乘。",
      relatedParts: ["brake-caliper", "hub", "axle"],
      workshopAdvice: "碟盤磨耗不硬套通用報廢數值，依原廠規格與指定位置量測；煞後避免徒手碰觸。"
    },
    "brake-caliper": {
      purpose: "把拉線或液壓輸入轉成來令片夾持力，作用於碟盤或輪圈使車輪減速。",
      materials: "卡鉗本體多為鍛造鋁合金，搭配鋼製固定件、活塞、密封與摩擦來令片。",
      adjustment: "設定卡鉗置中、來令片間隙及拉線張力；液壓型依原廠程序排氣。",
      maintenance: "煞車面與來令片不得沾油，檢查固定、活塞回位、拉線或油管有無損傷。",
      warningSigns: "煞車失效、漏油、拉桿觸底、卡鉗鬆動或摩擦片受污染應停止騎乘。",
      relatedParts: ["disc-rotor", "shift-brake-lever", "rim"],
      workshopAdvice: "來令片磨耗依原廠規格量測，不硬寫通用報廢數值；受油污染通常需更換並排除來源。"
    }
  };

  function createPart(layout, content) {
    const [id, name, categoryId, number, hotspotX, hotspotY, anchorX, anchorY] = layout;
    return Object.assign({
      id, name, categoryId, number,
      hotspot: { x: hotspotX, y: hotspotY },
      labelAnchor: { x: anchorX, y: anchorY }
    }, content);
  }

  const parts = PART_LAYOUT.map(layout => createPart(layout, CONTENT_BY_ID[layout[0]]));

  return deepFreeze({ categories, parts, defaultPartId: "top-tube" });
});
