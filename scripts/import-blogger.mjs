import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import * as cheerio from "cheerio";

const sources = [
  { url: "https://www.wellbeep.com/2026/04/blog-post_08.html", modifiedAt: "2026-06-12T00:17:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_26.html", modifiedAt: "2026-05-18T21:20:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post_03.html", modifiedAt: "2026-05-18T21:19:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post_05.html", modifiedAt: "2026-05-18T21:19:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post_08.html", modifiedAt: "2026-05-18T21:19:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/pack-year.html", modifiedAt: "2026-05-18T21:18:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post_12.html", modifiedAt: "2026-05-12T22:59:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post_11.html", modifiedAt: "2026-05-11T22:58:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post_09.html", modifiedAt: "2026-05-09T22:52:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post_07.html", modifiedAt: "2026-05-07T22:43:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post_06.html", modifiedAt: "2026-05-06T22:44:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post_04.html", modifiedAt: "2026-05-04T22:42:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post_02.html", modifiedAt: "2026-05-02T22:40:00+09:00" },
  { url: "https://www.wellbeep.com/2026/05/blog-post.html", modifiedAt: "2026-05-01T22:40:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/ldlhdl.html", modifiedAt: "2026-04-30T22:39:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_29.html", modifiedAt: "2026-04-29T19:04:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_25.html", modifiedAt: "2026-04-25T19:01:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/hdl.html", modifiedAt: "2026-04-24T22:40:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_14.html", modifiedAt: "2026-04-24T19:01:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_24.html", modifiedAt: "2026-04-24T19:00:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_23.html", modifiedAt: "2026-04-24T19:00:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_21.html", modifiedAt: "2026-04-24T18:55:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_17.html", modifiedAt: "2026-04-24T18:53:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_15.html", modifiedAt: "2026-04-15T22:51:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_13.html", modifiedAt: "2026-04-13T22:51:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_2.html", modifiedAt: "2026-04-06T22:47:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post_3.html", modifiedAt: "2026-04-06T22:46:00+09:00" },
  { url: "https://www.wellbeep.com/2026/04/blog-post.html", modifiedAt: "2026-04-06T22:45:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/blog-post_31.html", modifiedAt: "2026-03-31T00:06:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/blog-post_27.html", modifiedAt: "2026-03-29T00:05:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/whtr.html", modifiedAt: "2026-03-28T09:00:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/whr.html", modifiedAt: "2026-03-26T23:55:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/blog-post_26.html", modifiedAt: "2026-03-26T23:51:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/blog-post.html", modifiedAt: "2026-03-26T23:50:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/2-bmr-1.html", modifiedAt: "2026-03-26T23:50:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/4.html", modifiedAt: "2026-03-26T23:50:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/5.html", modifiedAt: "2026-03-26T23:50:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/6.html", modifiedAt: "2026-03-26T23:50:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/7.html", modifiedAt: "2026-03-26T23:49:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/8.html", modifiedAt: "2026-03-26T23:49:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/9.html", modifiedAt: "2026-03-26T23:49:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/10.html", modifiedAt: "2026-03-26T23:49:00+09:00" },
  { url: "https://www.wellbeep.com/2026/03/blog-post_24.html", modifiedAt: "2026-03-26T23:48:00+09:00" }
];

const userAgent =
  "Mozilla/5.0 (compatible; WELLBEEP-Migration/1.0; +https://www.wellbeep.com)";

function slugFromUrl(url) {
  return new URL(url).pathname.replace(/^\/+/, "");
}

function classify(title) {
  if (/BMI|체질량|비만|체중|적정|허리|WHR|WHtR|체지방|복부/.test(title)) {
    return "body";
  }
  if (/칼로리|BMR|기초대사량|TDEE|단백질|탄수화물|지방|물|수분|영양|pack|흡연|담배/i.test(title)) {
    return "nutrition";
  }
  if (/혈압|혈당|당뇨|콜레스테롤|LDL|HDL|중성지방|심박|맥박/.test(title)) {
    return "vitals";
  }
  if (/수면|기대수명|건강수명|스트레스|운동|활동|생활/.test(title)) {
    return "lifestyle";
  }
  return "health";
}

function excerptFrom($, html) {
  const text = cheerio
    .load(html)
    .root()
    .text()
    .replace(/\s+/g, " ")
    .trim();

  return text.length > 170 ? `${text.slice(0, 170)}...` : text;
}

function cleanPostBody(rawHtml) {
  const embedded = cheerio.load(rawHtml, { decodeEntities: false });
  let html = embedded("body").length
    ? embedded("body").html() ?? ""
    : embedded.root().html() ?? "";

  let $ = cheerio.load(html, { decodeEntities: false });

  $("meta, title, link, style, noscript").remove();
  $("script[src*='googlesyndication'], script[src*='doubleclick'], ins.adsbygoogle").remove();
  $("script").each((_, element) => {
    const code = $(element).html() ?? "";
    const src = $(element).attr("src") ?? "";
    if (
      src.includes("pagead2.googlesyndication.com") ||
      code.includes("adsbygoogle") ||
      code.includes("data-ad-client")
    ) {
      $(element).remove();
    }
  });
  $("center").each((_, element) => {
    const node = $(element);
    const nodeHtml = node.html() ?? "";
    if (nodeHtml.includes("adsbygoogle") || node.find("ins.adsbygoogle").length > 0) {
      node.remove();
    }
  });
  $("header.header, .header, .footer").remove();
  $("html, body, head").each((_, element) => {
    $(element).replaceWith($(element).contents());
  });
  $("center").each((_, element) => {
    const node = $(element);
    if (!node.text().trim() && node.children().length === 0) {
      node.remove();
    }
  });

  html = $.root().html() ?? "";
  html = html
    .replace(/<!--DOCTYPE html-->/gi, "")
    .replace(/\sdata-ad-[a-z-]+="[^"]*"/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return normalizeKoreanTypos(html);
}

function normalizeKoreanTypos(html) {
  const replacements = [
    ["섥취", "섭취"],
    ["캄로리", "칼로리"],
    ["꽬", "꼭"],
    ["씨앛", "씨앗"],
    ["빸르게", "빠르게"],
    ["샀러드", "샐러드"],
    ["본 딈", "본 뒤"],
    ["확인하기 십습니다", "확인하기 쉽습니다"],
    ["자주 뭫는 질문", "자주 묻는 질문"],
    ["것정", "걱정"],
    ["튼김", "튀김"]
  ];

  return replacements.reduce(
    (content, [from, to]) => content.replaceAll(from, to),
    html
  );
}

async function fetchPage(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": userAgent,
      accept: "text/html,application/xhtml+xml"
    }
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.text();
}

async function importOne(source) {
  const pageHtml = await fetchPage(source.url);
  const $ = cheerio.load(pageHtml, { decodeEntities: false });
  const postBody = $(".post-body.entry-content").first();
  const rawBody = postBody.html();

  if (!rawBody) {
    throw new Error(`본문을 찾지 못했습니다: ${source.url}`);
  }

  const embedded = cheerio.load(rawBody, { decodeEntities: false });
  const title =
    embedded("title").first().text().trim() ||
    $("meta[property='og:title']").attr("content")?.trim() ||
    $("title").first().text().trim();
  const description =
    embedded("meta[name='description']").attr("content")?.trim() ||
    $("meta[name='description']").attr("content")?.trim() ||
    `${title}를 통해 건강 지표를 간단히 확인하고 결과 해석 기준을 살펴보세요.`;
  const publishedAt =
    $("time.published").first().attr("datetime") ||
    source.modifiedAt.replace(/T\d\d:\d\d:\d\d\+09:00$/, "T09:00:00+09:00");
  const html = cleanPostBody(rawBody);

  return {
    title,
    description,
    url: source.url,
    slug: slugFromUrl(source.url),
    publishedAt,
    modifiedAt: source.modifiedAt,
    category: classify(title),
    html,
    excerpt: excerptFrom($, html)
  };
}

async function main() {
  const posts = [];

  for (const source of sources) {
    process.stdout.write(`import ${source.url} ... `);
    const post = await importOne(source);
    posts.push(post);
    process.stdout.write(`${post.title}\n`);
  }

  posts.sort((a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime());

  const output = "src/data/posts.json";
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
  console.log(`\n${posts.length}개 글을 ${output}에 저장했습니다.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
