import { mkdir, writeFile } from "node:fs/promises";
import posts from "../src/data/posts.json" with { type: "json" };

const siteUrl = "https://www.wellbeep.com";
const staticPages = [
  "/",
  "/about",
  "/contact",
  "/privacy",
  "/disclaimer",
  "/editorial-policy",
  "/advertising-policy",
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
await writeFile("dist/sitemap-0.xml", sitemap, "utf8");
await writeFile("dist/sitemap-index.xml", sitemapIndex, "utf8");
console.log(`canonical sitemap written (${urls.length} urls)`);
