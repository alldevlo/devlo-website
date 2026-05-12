import fs from "node:fs";
import path from "node:path";

const [, , baseUrl, outputPath, pagesFile] = process.argv;

if (!baseUrl || !outputPath || !pagesFile) {
  console.error("Usage: node scripts/responsive_smoke_check.mjs <baseUrl> <outputPath> <pagesFile>");
  process.exit(1);
}

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch (error) {
  console.error(`PLAYWRIGHT_IMPORT_ERROR: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(2);
}

const pages = fs
  .readFileSync(pagesFile, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const viewports = [
  { name: "iphone-15", width: 393, height: 852, isMobile: true },
  { name: "ipad-portrait", width: 820, height: 1180, isMobile: true },
  { name: "desktop", width: 1440, height: 900, isMobile: false },
];
const waitAfterLoadMs = Number.parseInt(process.env.RESPONSIVE_SMOKE_WAIT_MS || "700", 10);
const captureScreenshots = process.env.RESPONSIVE_SMOKE_SCREENSHOTS !== "0";

const outDir = path.dirname(outputPath);
fs.mkdirSync(outDir, { recursive: true });

const chromeCandidates = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
];
const executablePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));

function slugify(route) {
  return route === "/" ? "home" : route.replace(/^\//, "").replace(/[\/?:&=#]+/g, "_");
}

const browser = await chromium.launch({
  headless: true,
  ...(executablePath ? { executablePath } : {}),
});
const results = [];

for (const viewport of viewports) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    isMobile: viewport.isMobile,
    hasTouch: viewport.isMobile,
    deviceScaleFactor: viewport.isMobile ? 3 : 1,
  });

  for (const route of pages) {
    const url = new URL(route, baseUrl).toString();
    const screenshotPath = path.join(outDir, `${viewport.name}_${slugify(route)}.png`);
    const page = await context.newPage();
    let navigationError = null;

    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
      await page.waitForTimeout(Number.isFinite(waitAfterLoadMs) ? waitAfterLoadMs : 700);
    } catch (error) {
      navigationError = error instanceof Error ? error.message : String(error);
    }

    const metrics = navigationError
      ? null
      : await page.evaluate(() => {
          const doc = document.documentElement;
          const body = document.body;
          const viewportWidth = doc.clientWidth || window.innerWidth;
          const viewportHeight = doc.clientHeight || window.innerHeight;
          const scrollWidth = Math.max(doc.scrollWidth, body?.scrollWidth ?? 0);
          const offenders = [];

          for (const el of Array.from(document.querySelectorAll("body *"))) {
            const rect = el.getBoundingClientRect();
            if (!Number.isFinite(rect.width) || rect.width <= 0 || rect.height <= 0) continue;
            if (rect.bottom < 0 || rect.top > viewportHeight * 2.5) continue;

            const overflowRight = rect.right - viewportWidth;
            const overflowLeft = -rect.left;
            const style = window.getComputedStyle(el);
            const horizontallyScrollable = style.overflowX === "auto" || style.overflowX === "scroll";
            const tagName = el.tagName.toLowerCase();
            if (["svg", "path", "circle", "rect", "line", "polyline", "polygon"].includes(tagName)) continue;
            const insideIntentionalScroller = (() => {
              let parent = el.parentElement;
              while (parent && parent !== document.body) {
                const className = String(parent.className || "");
                if (className.includes("animate-logo-scroll") || className.includes("animate-testimonial-scroll")) {
                  return true;
                }
                parent = parent.parentElement;
              }
              return false;
            })();
            if (insideIntentionalScroller) continue;
            const clippedBySafeAncestor = (() => {
              let parent = el.parentElement;
              while (parent && parent !== document.body) {
                const parentStyle = window.getComputedStyle(parent);
                const parentOverflowX = parentStyle.overflowX;
                if (parentOverflowX === "hidden" || parentOverflowX === "clip" || parentOverflowX === "auto" || parentOverflowX === "scroll") {
                  const parentRect = parent.getBoundingClientRect();
                  return parentRect.left >= -1 && parentRect.right <= viewportWidth + 1;
                }
                parent = parent.parentElement;
              }
              return false;
            })();

            if (!horizontallyScrollable && !clippedBySafeAncestor && (overflowRight > 1 || overflowLeft > 1 || rect.width > viewportWidth + 1)) {
              offenders.push({
                tag: el.tagName.toLowerCase(),
                className: String(el.className || "").slice(0, 180),
                text: String(el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 120),
                width: Number(rect.width.toFixed(2)),
                left: Number(rect.left.toFixed(2)),
                right: Number(rect.right.toFixed(2)),
                overflowRight: Number(overflowRight.toFixed(2)),
              });
            }

            if (offenders.length >= 15) break;
          }

          return {
            viewportWidth,
            scrollWidth,
            hasHorizontalScroll: scrollWidth > viewportWidth + 1,
            htmlOverflowX: getComputedStyle(doc).overflowX,
            bodyOverflowX: body ? getComputedStyle(body).overflowX : "",
            offenders,
          };
        });

    if (!navigationError && captureScreenshots) {
      await page.screenshot({ path: screenshotPath, fullPage: true });
    }

    results.push({
      route,
      url,
      viewport: viewport.name,
      status: navigationError || metrics.hasHorizontalScroll || metrics.offenders.length > 0 ? "FAIL" : "PASS",
      error: navigationError,
      screenshot: navigationError || !captureScreenshots ? null : path.basename(screenshotPath),
      ...(metrics ?? {
        viewportWidth: null,
        scrollWidth: null,
        hasHorizontalScroll: null,
        htmlOverflowX: null,
        bodyOverflowX: null,
        offenders: [],
      }),
    });

    await page.close();
  }

  await context.close();
}

await browser.close();

const summary = results.reduce(
  (acc, result) => {
    acc.total += 1;
    acc[result.status.toLowerCase()] = (acc[result.status.toLowerCase()] ?? 0) + 1;
    return acc;
  },
  { total: 0 },
);

fs.writeFileSync(outputPath, JSON.stringify({ baseUrl, generatedAt: new Date().toISOString(), summary, results }, null, 2));
