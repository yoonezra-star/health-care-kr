# WELLBEEP Static Migration

WELLBEEP를 Blogger/Blogspot 기반 사이트에서 GitHub + Cloudflare Pages로 이전하기 위한 정적 Astro 프로젝트입니다.

## 현재 구성

- 기존 Blogger 글 43개를 `src/data/posts.json`으로 가져옵니다.
- 기존 글 URL인 `/2026/04/blog-post_08.html` 같은 `.html` 경로를 그대로 생성합니다.
- Blogger 테마, 공유 위젯, 기존 광고 스크립트는 제거했습니다.
- 소개, 문의, 개인정보처리방침, 면책사항 페이지를 추가했습니다.
- Cloudflare Pages용 `_headers`, `_redirects`, `wrangler.toml`, sitemap 생성을 포함합니다.

## 개발 명령

```bash
npm ci
npm run import:blogger
npm run build
npm run dev
```

`npm run import:blogger`는 기존 Blogger 원본이 살아 있을 때만 실행하세요. 도메인 전환 후에는 새 Cloudflare 사이트를 다시 긁게 될 수 있으므로, 가져온 `src/data/posts.json`을 기준으로 운영합니다.

## Cloudflare Pages 설정

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `.node-version`의 `24`
- Custom domains: `www.wellbeep.com`, `wellbeep.com`

자세한 이전 순서는 [docs/migration-runbook.md](docs/migration-runbook.md)를 보세요.

## AdSense 준비

승인 전에는 광고 스크립트와 광고 슬롯을 넣지 않는 쪽으로 구성했습니다. 승인 후에는 실제 `ca-pub-...` 값과 광고 배치를 별도 커밋으로 넣는 편이 안전합니다.

자세한 체크리스트는 [docs/adsense-readiness.md](docs/adsense-readiness.md)를 보세요.
