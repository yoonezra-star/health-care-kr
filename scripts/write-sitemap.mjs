import { mkdir, writeFile } from "node:fs/promises";
import posts from "../src/data/posts.json" with { type: "json" };

const siteUrl = "https://health-care-kr.pages.dev";
const guideSlugs = [
  "health-checkup-reading-order",
  "fasting-glucose-a1c-difference",
  "ldl-hdl-triglyceride-guide",
  "normal-bmi-abdominal-obesity",
  "home-blood-pressure-measurement",
  "bmr-tdee-calorie-plan",
  "protein-intake-checklist",
  "sodium-sugar-caffeine-label",
  "pack-year-smoking-risk",
  "sleep-exercise-record"
];
const staticPages = [
  "/",
  "/guides",
  "/about",
  "/contact",
  "/privacy",
  "/disclaimer",
  "/editorial-policy",
  "/advertising-policy",
  "/terms",
  "/cookie-policy",
  "/review-process",
  "/calculator-guide",
  "/health-checkup-guide",
  "/health-metric-glossary",
  "/standards-update-log",
  "/health-record-template",
  "/blood-pressure-note",
  "/health-resources",
  "/calculator-methodology",
  "/calculators/body",
  "/calculators/nutrition",
  "/calculators/vitals",
  "/calculators/lifestyle",
  "/calculators/health"
];
const latest = posts[0]?.modifiedAt ?? new Date().toISOString();

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function urlEntry({ loc, lastmod }) {
  return [
    "  <url>",
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
    "  </url>"
  ].join("\n");
}

const urls = [
  ...staticPages.map((path) => ({
    loc: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastmod: latest
  })),
  ...posts.map((post) => ({
    loc: `${siteUrl}/${post.slug}`,
    lastmod: post.modifiedAt
  })),
  ...guideSlugs.map((slug) => ({
    loc: `${siteUrl}/guides/${slug}`,
    lastmod: latest
  }))
];

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(urlEntry),
  "</urlset>",
  ""
].join("\n");

const sitemapIndex = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  "  <sitemap>",
  `    <loc>${siteUrl}/sitemap-0.xml</loc>`,
  `    <lastmod>${escapeXml(latest)}</lastmod>`,
  "  </sitemap>",
  "</sitemapindex>",
  ""
].join("\n");

await mkdir("dist", { recursive: true });
await writeFile("dist/sitemap.xml", sitemapIndex, "utf8");
await writeFile("dist/sitemap-0.xml", sitemap, "utf8");
await writeFile("dist/sitemap-index.xml", sitemapIndex, "utf8");
console.log(`canonical sitemap written (${urls.length} urls, plus sitemap.xml index alias)`);
