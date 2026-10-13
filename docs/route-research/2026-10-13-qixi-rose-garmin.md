# 七夕告白玫瑰 Garmin 課程來源與驗證

- 授權後課程：[Garmin Connect 523728030](https://connect.garmin.com/app/course/523728030)
- 頁面名稱：信義慢跑團_七夕告白玫瑰🌹的副本
- 活動類型：跑步
- Garmin 頁面標示：8.36 km、總爬升 240 m、總下降 240 m
- 軌跡：1 段、5,384 點，含座標與海拔
- 來源快照 SHA-256：`b8ea0008080c841845985aabbfb4afcf97df73fb05b2bce3c3a93d882af0eb74`
- GPX SHA-256：`3e517e775df2d2e25d3d2a851500db2aecbba24196b1075b0c84396386a163d1`
- canonical geometry SHA-256：`cfa4792f9b48dc3ddb71b7b0f45e5bc1ab69b45b8d10ab70a8b24247ffd38bea`
- 範圍：緯度 25.02531437203288–25.03287727944553、經度 121.53394139371812–121.541927754879

2026-10-13，路線擁有者在專案對話中表示已調整此課程的分享授權，可供本站提供完整軌跡下載。Garmin 頁面會顯示「下載 GPX 檔案」，但未登入的直接下載端點仍會導向登入；本站不保存 Cookie、權杖或任何帳號資訊。

受版控來源鏈為 `assets/sources/garmin-523728030.json` → `assets/gpx/garmin-523728030.gpx` → `js/data/tracks/gps-art-qixi-confession-rose.js`。匯入器先驗證來源快照位元組雜湊，再驗證 GPX 位元組雜湊，最後逐點比較 5,384 個座標與海拔並核對 canonical geometry 雜湊；任一環節改變都會停止匯入。

大型軌跡不放入所有頁面 eager 載入的 `route-art-tracks.js`，只在玫瑰卡片需要地圖或下載時，經既有 `TrackLoader` 載入獨立 bundle。站內地圖及一鍵下載共用同一份延遲軌跡。這不是即時路況、安全認證或人行空間開放保證；使用者仍須依現場號誌、管制與開放時間通行。
