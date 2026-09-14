# Janice 台灣 GPS Art 來源與驗證

原作者：[Janice's Sport Blog](https://janice880624.github.io/janice_sport_blog/map/map.html)。頁面公開邀請下載運動路線；GPS Art與GPX的著作權仍歸原作者，未套用程式碼MIT授權。

| 作品 | 點數 | 站內計算距離 | 原始檔案SHA-256 |
|---|---:|---:|---|
| 芝山的大恐龍 | 310 | 5.515km | fcda5909efded763a4ca853b90c669ac7f7c3a17a07f750d8bbba4558db0cd14 |
| 芝山的小恐龍 | 165 | 4.727km | 324186debf4f9daa032e794d396c17f7f1548384cd20e71dd31206def765b1cc |
| 芝山2024 | 117 | 3.231km | e5fcd3ca2b5960ebe85c97f39ec5a43f2303b2d4680b90113dedaaf2cd9c357f |
| 高雄的小恐龍 | 205 | 7.390km | 3ce1f56a0d228699f041b806447b32adc5f2d8f9bc30403ebb58b11b968a6cf6 |

四份來源位於作者網站 `map/gpx/`，檔名分別為 `ZhishanBigDinosaur.gpx`、`ZhishanLittleDinosaur.gpx`、`Zhishan2024.gpx`、`KaohsiungLittleDinosaur.gpx`。芝山2024的頁面連結多了一個r而404；以作者公開GitHub目錄確認正確檔名，未猜造內容。

均為一段，通過台灣座標範圍、500m相鄰點間距、大小及安全XML解析檢查；未增加點、改造圖形或橋接空白段。下載GPX重新解析後與站內點序一致。使用Chrome檢視新作品輪廓：長頸恐龍、小型直立恐龍、旋轉排列的2024數字及高雄恐龍造型；不保證公路車能走跑步軌跡。

本輪只增量下載四份新來源，既有五份軌跡資料的來源與幾何雜湊保持不變。全圖鑑29件，9件站內GPX、20件僅來源。瀏覽器實際按鈕下載四份成功，沒有頁面JavaScript錯誤。
