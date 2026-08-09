# Changelog

## 2026-08-06 — 圖書館頁 API 改道 newdatacenter（Service Worker 方案）

### 背景
- `portfolio/event/library/index.html` 資料來源 `datacenter.taichung.gov.tw`（舊 OpenData API）已下線（網域不存在）。
- 新平台 `newdatacenter.taichung.gov.tw` 僅提供靜態檔案下載 Endpoint，且已開放 CORS（`Access-Control-Allow-Origin: *`）。
- 對應 Issue：https://github.com/realivy0730/portfolio/issues/2

### 新增
- `event/library/sw.js`：Service Worker
  - 攔截 `https://api.allorigins.win/get?url=<舊API>` 請求
  - 直連 `newdatacenter.taichung.gov.tw/api/v1/no-auth/resource.download?rid=<資源ID>`
  - 將回應改包成 allorigins 格式 `{"contents":"<JSON字串>"}`，維持既有解析邏輯
  - 採用 `skipWaiting()` + `clients.claim()` 讓新 SW 立即接管
  - 失敗時回傳 502（非 JSON body），觸發頁面既有錯誤 lightbox 機制

### 修改
- `event/library/index.html`
  - `<head>` 加入一行 SW 註冊 script（`navigator.serviceWorker.register("sw.js")`）
  - JS bundle（`assets/index-DVBVLkfF.js`）零變更

### 驗證
- `node --check sw.js` 語法通過
- 端到端模擬：`rid` 擷取成功 → 新 API 回傳 46 筆 → 包裝格式經 `JSON.parse(f.contents)` 解析正常、欄位完整
- 本地靜態伺服器確認 index.html / sw.js / bundle 皆 HTTP 200

### 待辦
- 部署後瀏覽器實測：首次載入若在 SW 接管前發送 fetch，可能需重試一次（lightbox 按鈕）或重新整理

## 2026-04-28 — Hero 多層視差 + Lottie 實作

### 新增
- `images/hero/` 目錄，包含 4 張切圖：
  - `hero-bg.png` — 米色背景 + 四角裝飾（speed 0.05）
  - `hero-deco.png` — 右側 wireframe（speed 0.15）
  - `hero-person.png` — 人物 + 技術圖示群（speed 0.30）
  - `hero-h1.png` — "Ivy thing" 手寫標題（speed 0.45）

### 修改
- `index.html`
  - `#Intro` 區塊重構為 4 層 `.layer` div 結構（`.hero-parallax`）
  - 移除舊的 `.Bg` / `.IntroArea` 結構
  - 加入 Lottie CDN（lottie-web 5.12.2）
  - 加入 `.lottie-badges`（JS/CSS/HTML/Vue 4 個動畫容器）
- `css/layout.css`
  - 移除舊 `#Intro .Bg`、`#Intro .IntroArea` 樣式
  - 新增 `.hero-parallax`、`.layer`、`.layer-bg/deco/person/h1` 視差樣式
  - 新增 `.lottie-badges`、`.lottie-item` 樣式
  - 新增 RWD `@media (max-width: 820px)` 降級樣式
- `js/main.js`
  - 新增 `initParallax()` — scroll 監聽，依 `data-speed` 移動各層
  - 新增 `initHeroLottie()` — 載入 4 個 Lottie 動畫（目前使用佔位 URL）

### 待辦
- 替換 `initHeroLottie()` 中的 Lottie JSON URL 為真實動畫
- 瀏覽器視覺微調（各層位置、尺寸比例）
