# 一日雙塔西線與東雙塔路線校核

## 東線起點更正

舊 `challenge-twin-towers` 起點為 25.020043,121.958862；[新北市三貂角燈塔官方頁](https://newtaipei.travel/zh-tw/Attractions/Detail/110112) 的交通連結座標為 25.00755,122.00189，兩者直線距離約 4.553 km。舊資料所稱「燈塔外最近可騎道路接點」不成立。保留舊識別碼與幾何，但改稱鹽寮台2走廊既有起點，明示缺燈塔接段；此距離不是騎乘距離，不補畫連線，不稱完整東雙塔。

## 結論

- 新增 `challenge-west-twin-towers` 作為自行車新文化基金會定義的富貴角燈塔至鵝鑾鼻燈塔西線；正式軌跡沿北海岸、關渡及台灣西部走廊南下。
- 原 `challenge-twin-towers` 的鹽寮台2走廊、花東、南迴、鵝鑾鼻軌跡維持既有穩定識別碼，顯示名稱改為「東雙塔（南迴版本）」並明示缺燈塔接段。此版本走壽卡及南迴，並非走旭海的 MAD 路線版本；保留識別碼可避免既有收藏、完成狀態及本機覆寫失去關聯。
- 西線兩端採燈塔園區外道路。舊東線北端是鹽寮台2走廊既有起點，距官方三貂角燈塔約4.6公里直線距離，缺接段，不是燈塔外最近可騎道路。

## 來源與方法

| 用途 | 來源 | 校核結果 |
|---|---|---|
| 挑戰定義 | [自行車新文化基金會：一日雙塔](https://www.cycling-lifestyle.org.tw/challenge/itinerary_view/91) | 頁面明列「新北市富貴角燈塔－屏東鵝鑾鼻燈塔」。 |
| 西部走廊參考 | [CT Yeh：一日雙塔 520K](https://ctyeh.com/routes/twin-towers-520) 與其[公開 GPX](https://ctyeh.com/api/routes/route/gpx/twin-towers-520/) | GPX 40,752 bytes、600 點、SHA-256 `3a05860c05e5509bc53d8d2cce44eada175163117c19ebc0652bfe294b84c5a5`；頁面標示約 510.03 km。 |
| 道路重算 | [BRouter](https://brouter.de/brouter) `fastbike`／OpenStreetMap | 每 8 個公開 GPX 點取一個走廊控制點，再由道路路由完整重算，不直接發布簡化 GPX。 |
| 道路標籤 | [OpenStreetMap](https://www.openstreetmap.org/copyright) | 保留 BRouter 回傳的逐段 WayTags、距離與原始幾何供版本控制及重算。 |

公開 GPX 的最大相鄰點距離為 4.108 km，解析器雖可接受，但 600 點是經簡化的參考資料；因此只作走廊來源，不把點與點之間直接連線冒充道路。正式 BRouter 原始結果為 510,984 m、7,746 點；站內依既有幾何保真重採樣後為 511.887 km、10,396 點。

## 控制點修正與道路稽核

首次依每 8 點控制的道路結果出現下列非 `service` 問題：

- 關渡 `25.131146,121.452263` 附近各 3 m 的兩段 `footway`：原控制點造成折返，移除該點後消失。
- 高雄 `22.713107,120.291390` 的 16 m `bicycle=no` 與 `22.702006,120.294188` 一帶往返各 183 m 的 `pedestrian`：移除位於行人道路的控制點，並加入 `120.289,22.718` → `120.296,22.718` → `120.296,22.707` 三個一般道路繞行控制點。
- 小港南側 `22.518756,120.371112` 的 507 m 未標示鋪面 `track`：移除落在該道路上的控制點，由相鄰公開道路走廊重新路由。

最終結果沒有 `footway`、`pedestrian`、`path`、未鋪面 `track`、`steps`、`motorway`、`bicycle=no/private`、`access=no/private/destination`，也沒有未授權的單行道逆向。

`service` 共 75 組、21,836 m，路段集合 SHA-256 為 `45327de2eb2ac76530ab85f60e5cca48949fa9439444e6c4f917d597d064716a`：

- 8,734 m 具有 `bicycle=yes/designated`、`route_bicycle_ncn/rcn`、`cycleway`、`asphalt/concrete` 等可騎路線或鋪面標籤。
- 13,102 m 未明示自行車或鋪面標籤，只能以 CT Yeh 公開 GPX 走廊與 BRouter/OpenStreetMap 無權限禁制標籤交叉核對；沒有實地勘查，不代表即時開放或任何活動主辦單位的指定道路。
- seed 例外同時鎖定完整路段雜湊與 21,836 m 精確上限；道路集合或距離有任何變動都必須重新審查，且不放寬其他道路政策。

可用 `node scripts/research-challenge-refresh.mjs` 重現研究摘要；ignored 研究產物為 `tools/route-data/.staging/challenge-refresh/west-reference-v4.json` 與 `west-waypoints-v4.json`。`--publish` 只供本次將已校核結果重建為 challenge bundle 與道路稽核資料。

## 軌跡摘要

| 路線 | 距離 | 爬升／下降 | 最高點 | 最大持續坡度 | 地標 |
|---|---:|---:|---:|---:|---:|
| 一日雙塔西線 | 511.887 km | 889.5／908.8 m | 87.25 m | 5.355% | 76 |
| 東雙塔（南迴版本） | 470.831 km | 3,442.6／3,442.8 m | 489 m | 20.401% | 9 |

海拔來自 BRouter SRTM，並依路線 seed 的平滑視窗分析；不是測量級資料，也不應用於保證即時道路安全或通行狀態。
