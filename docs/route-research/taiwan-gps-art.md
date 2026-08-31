# 台灣 GPS Art 公開來源研究

現行查核日：2026-08-31

本文件是「路線美學」正式圖鑑與未上架候選的來源帳。正式 production catalog 精確為 25 件：5 件 `track-ready`、0 件 `source-download`、20 件 `source-only`。另有 19 件 ShapeMiles 候選因匿名 HTTPS 查核全部回傳 HTTP 401，且官方頁面顯示 GPX 下載需要訂閱，未加入 production catalog，也不列為公開下載。

本站未複製或 hotlink 外站作品圖片，不使用登入後資料、Cookie、權杖、私人活動或會員資料。`track-ready` 的站內地圖與 GPX 使用兩件已核准 KML、兩件匿名公開 GPX，以及一件依公開行程節點與參考圖經 BRouter `fastbike` 重建的道路軌跡；重建件不冒稱為原 Strava 座標。`source-only` 沒有匿名公開軌跡摘要，不補畫座標；未來若有 `source-download`，本站也只保存格式、雜湊、點數與 bounds 等摘要並連到來源平台，不鏡像第三方 GPX。第三方權利仍屬各來源及作者，本站 MIT 授權不改變其授權。

## 來源代號

- [M01：CS72 的台灣單車 GPS Art 整理頁](https://www.mobile01.com/topicdetail.php?f=377&t=5800991)
- [BIJI-TIGER：新莊足跡＿壬寅臥虎](https://running.biji.co/index.php?act=single&id=DD24D4B6-04C9-423B-9BA3-485C7C9B04E8&q=route)
- [THREADS-TRIO：河濱海馬、野雁西飛、汐鴿貼文](https://www.threads.com/@jjmm.jjmm/post/C_wh2RuSQNR?hl=zh-tw)
- [BIJI-SEAHORSE：河濱海馬公開 GPX 頁](https://hiking.biji.co/index.php?act=gpx_detail&id=1107811&q=trail)
- [ADDICYCLE-GOOSE：野雁西飛路線分享](https://addicycle.wordpress.com/2019/05/02/cycling%EF%BD%9C%E9%87%8E%E9%9B%81%E8%A5%BF%E9%A3%9B%E5%96%AE%E8%BB%8A%E8%B7%AF%E7%B7%9A%E5%88%86%E4%BA%AB/)
- [XIZHI-PIGEON：汐鴿官方自主認證頁](https://www.webpage.idv.tw/bikepigeon/order.htm)
- [BIJI-HEIGO：Heigo Chang GPS Art 專訪](https://running.biji.co/index.php?act=info&id=106950&q=news)
- [GPSART-CHERRY：Cherry Blossom in Taipei, Taiwan 16km](https://gpsart.info/en/asia-2/cherry-blossom-in-taipei-taiwan-16km/)
- [GPSART-CIRCLE：Taipei Circle Walk 40km](https://gpsart.info/en/asia-2/taipei-circle-walk-40km/)
- [REDDIT-BUDDHA：Waving hello from Taipei](https://www.reddit.com/r/Strava/comments/1d3qhxn/waving_hello_from_taipei/)

## Production catalog：25 件來源與存取矩陣

下列兩張表以 ID 一一對應，合併構成每件作品的完整矩陣。`作品查核日` 逐字對應 production catalog 的 `verifiedAt`；`原始路線連結查核日` 記錄 12 個後補 Strava 連結與野雁西飛參考活動的查核，其餘精確標示 `—`，不與作品日期混用。`原始路線／來源檔` 是作品頁之外的路線或核准來源檔；`來源端 GPX` 只記錄外站匿名端點。河濱海馬與汐鴿雖有公開 GPX，已匯入為 `track-ready`，因此介面的「僅來源端下載」數量不包含它們。`—` 表示沒有該欄可驗證值，不代表來源平台從未保存相關資料。

| ID | 作品名／圖形 | 活動／地區 | 狀態 | 作者／平台 | 作品頁 | 原始路線／來源檔 | 來源端 GPX | 需登入 | 作品查核日 | 原始路線連結查核日 |
|---|---|---|---|---|---|---|---|---|---|---|
| `gps-art-north-taoyuan-raptor` | 北桃迅猛龍／迅猛龍 | 單車／桃園市、新北市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava route 17223910](https://www.strava.com/routes/17223910) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-fenggui-rabbit` | 風櫃兔／兔 | 單車／台北市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava route 17581713](https://www.strava.com/routes/17581713) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-taoyuan-red-bull` | 桃園紅牛 RED BULL／紅牛 | 單車／桃園市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava activity 2263949784](https://www.strava.com/activities/2263949784) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-yilan-cherry-duck` | 宜蘭櫻桃鴨／櫻桃鴨 | 單車／宜蘭縣 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava route 17035427](https://www.strava.com/routes/17035427) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-tianmu-whale` | 台北天母鯨魚／鯨魚 | 單車／台北市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava route 16721519](https://www.strava.com/routes/16721519) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-qingpu-cat` | 桃園青埔小貓／小貓 | 單車／桃園市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava route 17110234](https://www.strava.com/routes/17110234) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-tainan-lion` | 台南林老獅卡好／獅 | 單車／台南市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava route 16676205](https://www.strava.com/routes/16676205) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-youth-park-shark` | 青年公園有鯊魚／鯊魚 | 單車／台北市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava activity 2241587445](https://www.strava.com/activities/2241587445) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-dadaocheng-lady` | 大稻埕碼頭姑娘／姑娘 | 單車／台北市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | — | — | 否／不適用 | 2026-08-14 | — |
| `gps-art-daan-wolf` | 大安森林大野狼／大野狼 | 單車／台北市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | — | — | 否／不適用 | 2026-08-14 | — |
| `gps-art-douliu-turtle` | 雲林斗六綠蠵龜／綠蠵龜 | 單車／雲林縣 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava route 16663550](https://www.strava.com/routes/16663550) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-taoyuan-horse` | 桃園藝文小馬／小馬 | 單車／桃園市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava route 16463220](https://www.strava.com/routes/16463220) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-pig-year` | 豬年騎小豬／小豬 | 單車／來源未明示 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava route 16488963](https://www.strava.com/routes/16488963) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-valentine-love` | 情人節 LOVE／LOVE | 單車／來源未明示 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | [Strava route 16780021](https://www.strava.com/routes/16780021) | — | 是 | 2026-08-14 | 2026-08-28 |
| `gps-art-taoyuan-dazhu-morning` | 桃園大竹早安／早安 | 單車／桃園市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | — | — | 否／不適用 | 2026-08-14 | — |
| `gps-art-zhongli-elephant` | 中壢小象／小象 | 單車／桃園市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | — | — | 否／不適用 | 2026-08-14 | — |
| `gps-art-yongan-sheep` | 桃園永安漁港喜羊羊／喜羊羊 | 單車／桃園市 | `source-only` | CS72／Mobile01 | [M01](https://www.mobile01.com/topicdetail.php?f=377&t=5800991) | — | — | 否／不適用 | 2026-08-14 | — |
| `gps-art-xinzhuang-tiger` | 新莊足跡＿壬寅臥虎／臥虎 | 跑步／新北市 | `source-only` | Heigo Chang／運動筆記 | [BIJI-TIGER](https://running.biji.co/index.php?act=single&id=DD24D4B6-04C9-423B-9BA3-485C7C9B04E8&q=route) | — | [GPX（TLS 失敗，未納入）](https://cdnrunningfiles.biji.co/running_a2be3611d8381712167a98e1075fa017.gpx) | 否 | 2026-08-14 | — |
| `gps-art-heigo-elephant` | Heigo Chang 大象作品示例／大象 | 跑步／來源未明示 | `source-only` | Heigo Chang／運動筆記 | [BIJI-HEIGO](https://running.biji.co/index.php?act=info&id=106950&q=news) | — | — | 否／不適用 | 2026-08-14 | — |
| `gps-art-taipei-cherry-blossom` | 台北櫻花 16K／櫻花 | 步行／台北市 | `track-ready` | 來源未明示／GPS ART Japan | [GPSART-CHERRY](https://gpsart.info/en/asia-2/cherry-blossom-in-taipei-taiwan-16km/) | [公開 KML](https://www.google.com/maps/d/kml?mid=1XFfh9ZGnEVTth4D4cyZ3oQuy3fLymWU&forcekml=1) | —（本站由核准 KML 建立） | 否 | 2026-08-14 | — |
| `gps-art-taipei-circle-walk` | 台北圓環 40K／圓環 | 步行／台北市 | `track-ready` | 來源未明示／GPS ART Japan | [GPSART-CIRCLE](https://gpsart.info/en/asia-2/taipei-circle-walk-40km/) | [公開 KML](https://www.google.com/maps/d/kml?mid=1thheW0QAsTO65i6iOZ90-yZWA4M7Pqej&forcekml=1) | —（本站由核准 KML 建立） | 否 | 2026-08-14 | — |
| `gps-art-yangmingshan-buddha-hand` | 陽明山佛手／佛手 | 單車／台北市、新北市 | `source-only` | 來源未明示／Reddit r/Strava | [REDDIT-BUDDHA](https://www.reddit.com/r/Strava/comments/1d3qhxn/waving_hello_from_taipei/) | — | — | 否／不適用 | 2026-08-14 | — |
| `gps-art-riverside-seahorse` | 河濱海馬／海馬 | 單車／台北市、新北市 | `track-ready` | 林宏勳／健行筆記 | [BIJI-SEAHORSE](https://hiking.biji.co/index.php?act=gpx_detail&id=1107811&q=trail) | [公開 GPX](https://cdntwrunning.biji.co/hiking_gpx/hiking_9ef6cbd10b3803c689787b0f7df752e9.gpx) | —（本站由核准 GPX 建立） | 否 | 2026-08-31 | — |
| `gps-art-wild-goose-west` | 野雁西飛／西飛野雁 | 單車／台北市 | `track-ready` | Holly's Cycling／AddiCycle | [ADDICYCLE-GOOSE](https://addicycle.wordpress.com/2019/05/02/cycling%EF%BD%9C%E9%87%8E%E9%9B%81%E8%A5%BF%E9%A3%9B%E5%96%AE%E8%BB%8A%E8%B7%AF%E7%B7%9A%E5%88%86%E4%BA%AB/) | [Strava activity 2285766025](https://www.strava.com/activities/2285766025)；本站依公開行程節點以 BRouter 重建 | —（非來源端 GPX） | 是（原 Strava）；本站重建不需登入 | 2026-08-31 | 2026-08-31 |
| `gps-art-xizhi-pigeon` | 汐鴿／展翅飛鴿 | 單車／台北市、新北市 | `track-ready` | 李文能（LEO）／汐鴿自主認證 | [XIZHI-PIGEON](https://www.webpage.idv.tw/bikepigeon/order.htm) | [官方公開 GPX](https://www.webpage.idv.tw/bikepigeon/download/order.gpx) | —（本站由核准 GPX 建立） | 否 | 2026-08-31 | — |

### Production 軌跡摘要矩陣

| ID | 格式 | 來源檔 SHA-256 | segments | points | bounds（minLat／maxLat／minLng／maxLng） |
|---|---|---|---:|---:|---|
| `gps-art-north-taoyuan-raptor` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-fenggui-rabbit` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-taoyuan-red-bull` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-yilan-cherry-duck` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-tianmu-whale` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-qingpu-cat` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-tainan-lion` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-youth-park-shark` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-dadaocheng-lady` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-daan-wolf` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-douliu-turtle` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-taoyuan-horse` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-pig-year` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-valentine-love` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-taoyuan-dazhu-morning` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-zhongli-elephant` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-yongan-sheep` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-xinzhuang-tiger` | — | — | — | — | —（TLS 失敗，無可驗證摘要） |
| `gps-art-heigo-elephant` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-taipei-cherry-blossom` | KML | `aa9ce71997e0e81f84783be37a2bc493238264df0749625ec1dd2d285c9186f0` | 6 | 1,036 | `25.030100／25.051700／121.500560／121.526470` |
| `gps-art-taipei-circle-walk` | KML | `60b4b710b9460719aff0dcffbdffdfbb1542b45e7f46acdc68629f7eefea696f` | 12 | 2,459 | `25.016910／25.073890／121.488408／121.550987` |
| `gps-art-yangmingshan-buddha-hand` | — | — | — | — | —（無匿名公開軌跡摘要） |
| `gps-art-riverside-seahorse` | GPX | `426a612745820dff0e0c3f26bfcdbb3df48e73e3e0df91bedf4b9600507c6738` | 1 | 4,221 | `25.005787／25.126977／121.451452／121.533446` |
| `gps-art-wild-goose-west` | GeoJSON（BRouter） | `0b2843a85422a1703abc27c896d7eb962fb29ef21053e3da9d078bc828249bef` | 1 | 2,436 | `25.056469／25.160671／121.466798／121.604320` |
| `gps-art-xizhi-pigeon` | GPX | `be80d4bd58d13ae6e2761f8b22cfd2afcc35551ced73be74949567422e5ce3e3` | 1 | 7,028 | `25.024066／25.074890／121.608833／121.665910` |

## 19 件 ShapeMiles 遭拒候選（未上架）

這 19 件只存在於受版控候選 registry，不是 production catalog，也不是 41 件正式圖鑑。2026-08-28 的匿名 `npm run art:verify-downloads` 對 19 個精確 allowlist 端點皆得到 HTTP 401；官方作品頁同日顯示 GPX 下載需要訂閱。驗證器依全成才規則未建立 `js/data/route-art-downloads.js`，因此沒有格式、SHA-256、segments、points、bounds 或座標摘要。本站沒有使用登入狀態或憑證繞過限制，也沒有保存縮圖、GPX 或幾何。

| 候選 ID | 作品／圖形 | 活動／地區 | 狀態 | 作者／平台 | 作品頁 | 嘗試的 GPX 端點 | 匿名結果／登入 | 查核日 | 格式 | SHA-256 | segments | points | bounds |
|---|---|---|---|---|---|---|---|---|---|---|---:|---:|---|
| `gps-art-shapemiles-airplane` | 台北 Airplane／飛機 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/airplane-19-6km) | [GPX](https://shapemiles.com/api/art-routes/taipei/airplane-19-6km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-bicycle` | 台北 Bicycle／自行車 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/bicycle-14-5km) | [GPX](https://shapemiles.com/api/art-routes/taipei/bicycle-14-5km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-bunny` | 台北 Bunny／兔子 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/bunny-13-6km) | [GPX](https://shapemiles.com/api/art-routes/taipei/bunny-13-6km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-butterfly` | 台北 Butterfly／蝴蝶 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/butterfly-14-1km) | [GPX](https://shapemiles.com/api/art-routes/taipei/butterfly-14-1km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-cactus` | 台北 Cactus／仙人掌 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/cactus-11-3km) | [GPX](https://shapemiles.com/api/art-routes/taipei/cactus-11-3km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-cat-silhouette` | 台北 Cat silhouette／貓咪剪影 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/cat-silhouette-10-0km) | [GPX](https://shapemiles.com/api/art-routes/taipei/cat-silhouette-10-0km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-dinosaur` | 台北 Dinosaur／恐龍 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/dinosaur-21-7km) | [GPX](https://shapemiles.com/api/art-routes/taipei/dinosaur-21-7km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-dolphin` | 台北 Dolphin／海豚 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/dolphin-11-8km) | [GPX](https://shapemiles.com/api/art-routes/taipei/dolphin-11-8km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-guitar` | 台北 Guitar／吉他 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/guitar-11-3km) | [GPX](https://shapemiles.com/api/art-routes/taipei/guitar-11-3km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-heart-with-arrow` | 台北 Heart with arrow／箭穿愛心 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/heart-with-arrow-11-6km) | [GPX](https://shapemiles.com/api/art-routes/taipei/heart-with-arrow-11-6km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-lightning-bolt` | 台北 Lightning bolt／閃電 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/lightning-bolt-12-1km) | [GPX](https://shapemiles.com/api/art-routes/taipei/lightning-bolt-12-1km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-rocket` | 台北 Rocket／火箭 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/rocket-9-9km) | [GPX](https://shapemiles.com/api/art-routes/taipei/rocket-9-9km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-running-shoe` | 台北 Running shoe／跑鞋 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/running-shoe-10-7km) | [GPX](https://shapemiles.com/api/art-routes/taipei/running-shoe-10-7km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-sailboat` | 台北 Sailboat／帆船 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/sailboat-8-7km) | [GPX](https://shapemiles.com/api/art-routes/taipei/sailboat-8-7km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-snowflake` | 台北 Snowflake／雪花 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/snowflake-14-7km) | [GPX](https://shapemiles.com/api/art-routes/taipei/snowflake-14-7km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-star` | 台北 Star／星星 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/star-12-6km) | [GPX](https://shapemiles.com/api/art-routes/taipei/star-12-6km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-top-hat` | 台北 Top hat／高帽 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/top-hat-6-6km) | [GPX](https://shapemiles.com/api/art-routes/taipei/top-hat-6-6km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-turtle` | 台北 Turtle／烏龜 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/turtle-16-1km) | [GPX](https://shapemiles.com/api/art-routes/taipei/turtle-16-1km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |
| `gps-art-shapemiles-unicorn-head` | 台北 Unicorn head／獨角獸頭 | 跑步／台北市 | 未上架候選 | 來源未明示／ShapeMiles | [作品頁](https://shapemiles.com/en/city/taipei/art-gps-routes/unicorn-head-12-5km) | [GPX](https://shapemiles.com/api/art-routes/taipei/unicorn-head-12-5km/gpx) | HTTP 401／需訂閱 | 2026-08-28 | — | — | — | — | —（無摘要／座標） |

## 站內軌跡稽核

五件 `track-ready` 作品共用同一個嚴格匯入與 provenance 契約。兩件 Google My Maps KML 的每個原始 `LineString` 保留為獨立 segment，維持文件順序與段內點序；河濱海馬與汐鴿各保存公開 GPX 的單一 segment。野雁西飛因原 Strava 活動需要登入，本站只依 AddiCycle 公開行程節點與參考圖，使用 BRouter `fastbike` 重建真實道路；沒有使用登入資料，也不宣稱復原原始座標。所有地圖與 GPX 使用同一份凍結 `segments`，GPX 每段輸出為獨立 `<trkseg>`。產物保存來源回應 SHA-256，並以 UTF-8 `JSON.stringify(segments)` 計算 canonical geometry SHA-256。

| ID | 各 segment 點數 | 總點數 | 來源檔 SHA-256 | canonical geometry SHA-256 |
|---|---|---:|---|---|
| `gps-art-taipei-cherry-blossom` | 202／266／63／134／87／284 | 1,036 | `aa9ce71997e0e81f84783be37a2bc493238264df0749625ec1dd2d285c9186f0` | `e2e3f0434e3f18e7a246105e1e48dbf227197b94d0be98f4cc61972d82e6f2bd` |
| `gps-art-taipei-circle-walk` | 165／454／139／63／130／547／562／249／83／30／16／21 | 2,459 | `60b4b710b9460719aff0dcffbdffdfbb1542b45e7f46acdc68629f7eefea696f` | `a788714f69fd805bfc3fecde54b0146f6526275d5f7574f5090b189679b93433` |
| `gps-art-riverside-seahorse` | 4,221 | 4,221 | `426a612745820dff0e0c3f26bfcdbb3df48e73e3e0df91bedf4b9600507c6738` | `79c66e55ffdbdc630cb1edf1526d0c3f9e63da64c53f284d88aa7395021f501e` |
| `gps-art-wild-goose-west` | 2,436 | 2,436 | `0b2843a85422a1703abc27c896d7eb962fb29ef21053e3da9d078bc828249bef` | `5bcacb276ac5a5627791a9fdc181bdb164bc0dbafcfa753bc68172bfe22399d9` |
| `gps-art-xizhi-pigeon` | 7,028 | 7,028 | `be80d4bd58d13ae6e2761f8b22cfd2afcc35551ced73be74949567422e5ce3e3` | `a6449c7d8f93b5492837b407581e4722b67527186205eb3b1e844fc1c2305c51` |

上述來源與幾何 provenance、逐段點數及總點數是人工核准常數；前兩件查核日為 2026-08-14，新增三件為 2026-08-31。來源重新下載後若任何值改變，測試與 CI 必須失敗；重新檢視公開來源、段界與點序並取得人工核准後，才能更新常數。野雁西飛匯入仍受同段相鄰點不得超過 500 公尺的閘門約束；為避免路由服務簡化一段約 713 公尺的道路，控制點加入既有可騎道路，不放寬閘門也不以直線補點。

## 限制與重新查核

- 20 件 `source-only` 只有來源卡，沒有站內地圖或 GPX 下載按鈕；其中 12 件另有精確 Strava route/activity 頁，但頁面可能要求登入，本站不以登入狀態取得 GPX。
- 目前 0 件 `source-download`。三狀態 schema、來源端安全連結與「可下載 GPX」篩選已由 synthetic fixture／自動測試覆蓋，不能把這項測試誤寫成 production 外站下載證據。
- 19 件 ShapeMiles 候選需要來源端恢復匿名公開存取，且 19/19 全數通過格式、大小、台灣 bounds、跳點與摘要驗證後，才可另行審查是否建立無座標摘要；目前不得上架或宣稱可公開下載。
- 作品頁、公開 KML／GPX 與道路狀態可能改變；查核日是最後證據日期，不是持續可用保證。
- 步行與跑步作品只標示原活動，不宣稱適合公路車導航。
- Google My Maps KML 的 LineString 段界是來源幾何的一部分，即使段尾與下一段首點相距較遠，也不得為了外觀自行接線。
- 瀏覽器若只缺少其中一件站內軌跡，該件會降級為 `source-only`，其他作品仍顯示；發布用匯入器仍要求五件必要來源與上述 provenance 全部通過。
