// 開發用：npm install --prefix tools/route-data/.staging/browser-check --no-package-lock --no-save playwright
import { createServer } from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { chromium } from "../tools/route-data/.staging/browser-check/node_modules/playwright/index.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "tools/route-data/.staging/browser-check/out");
await fs.mkdir(output, { recursive: true });
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2" };
const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, "") || "index.html";
    const target = path.resolve(root, relative);
    if (!target.startsWith(root + path.sep) || !/^(index\.html|(?:js|css|assets)\/[^\\]+)$/.test(relative)) {
      response.writeHead(404).end(); return;
    }
    response.writeHead(200, { "Content-Type": types[path.extname(target)] || "application/octet-stream" });
    response.end(await fs.readFile(target));
  } catch { response.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}/`;
let browser;
try {
  browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(base + "#/home");
  await page.locator("main h1").waitFor();
  await page.evaluate(() => window.scrollTo({ top: 900, behavior: "instant" }));
  await page.locator('nav a[href="#/challenges"]').first().click();
  await page.waitForFunction(() => window.scrollY === 0 && document.querySelectorAll(".challenge-card").length === 16);
  await page.screenshot({ path: path.join(output, "challenges.png"), fullPage: true });
  await page.locator('nav a[href="#/route-art"]').first().click();
  await page.locator(".art-card__map svg, .art-card__map canvas, .art-card__map .leaflet-container").first().waitFor();
  assert.equal(await page.locator(".art-card").count(), 12);
  const downloadNames = [];
  for (const name of ["芝山的大恐龍", "芝山的小恐龍", "芝山 2024", "高雄的小恐龍"]) {
    const card = page.locator(".art-card").filter({ has: page.getByRole("heading", { name, exact: true }) });
    const downloadEvent = page.waitForEvent("download");
    await card.getByRole("button", { name: /GPX/ }).click();
    const download = await downloadEvent;
    assert.match(download.suggestedFilename(), /\.gpx$/);
    downloadNames.push(download.suggestedFilename());
    await card.locator(".art-card__map").screenshot({ path: path.join(output, `${name}.png`) });
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({ path: path.join(output, "route-art.png"), fullPage: true });
  await page.locator('nav a[href="#/bike-parts"]').first().click();
  await page.locator("[data-bike-svg]").first().waitFor();
  const parts = await page.evaluate(() => window.CrownRideAtlas.BikeParts.parts.map(({ id, name }) => ({ id, name })));
  for (const part of parts) {
    await page.locator(`button[data-bike-part-id="${part.id}"]`).click();
    assert.equal(await page.locator("[data-bike-part-detail] h2").textContent(), part.name);
  }
  await page.getByRole("button", { name: "重設圖解", exact: true }).click();
  await page.locator(".bike-parts-anatomy").screenshot({ path: path.join(output, "bike-desktop.png") });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator(".bike-parts-anatomy").screenshot({ path: path.join(output, "bike-mobile.png") });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth));
  await page.setViewportSize({ width: 1440, height: 1000 });
  const routeDownloads = [];
  for (const id of ["challenge-west-twin-towers", "challenge-twin-towers"]) {
    await page.goto(base + "#/route/" + id);
    const button = page.getByRole("button", { name: "下載 GPX 路線", exact: true });
    await button.waitFor();
    await page.waitForFunction(() => [...document.querySelectorAll("button")].some(button => button.textContent === "下載 GPX 路線" && !button.disabled));
    if (id === "challenge-west-twin-towers") {
      const warning = page.locator(".route-verification-warning");
      assert.match(await warning.textContent(), /13\.1/);
      assert.ok(await warning.evaluate((element) => !!(element.compareDocumentPosition([...document.querySelectorAll("button")].find(button => button.textContent === "下載 GPX 路線")) & Node.DOCUMENT_POSITION_FOLLOWING)));
    }
    const event = page.waitForEvent("download");
    await button.click();
    const download = await event;
    routeDownloads.push(download.suggestedFilename());
    await page.locator(".leaflet-container").first().screenshot({ path: path.join(output, `${id}.png`) });
  }
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ navigationScrollTop: true, artDownloads: downloadNames, bikePartsSelected: parts.length, routeDownloads, pageErrors: errors, screenshots: output }, null, 2));
} finally {
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
}
