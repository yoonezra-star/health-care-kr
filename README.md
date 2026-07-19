# Health Care Static Site

Health Care를 GitHub + Cloudflare Pages로 배포하기 위한 정적 Astro 프로젝트입니다.
기존 `wellbeep.com` 도메인은 사용하지 않고, Cloudflare Pages가 제공하는 `pages.dev` 주소를 기준으로 운영합니다.

## 현재 구성

- 건강 계산기 글 43개를 `src/data/posts.json`으로 관리합니다.
- 기존 글 URL인 `/2026/04/blog-post_08.html` 같은 `.html` 경로를 그대로 생성합니다.
- Blogger 테마, 공유 위젯, 기존 광고 스크립트는 제거했습니다.
- 소개, 문의, 개인정보처리방침, 면책사항 페이지를 추가했습니다.
- Cloudflare Pages용 `_headers`, `_redirects`, `wrangler.toml`, sitemap 생성을 포함합니다.

## 개발 명령

```bash
npm ci
npm run build
npm run dev
```

`npm run import:blogger`는 과거 콘텐츠 원본을 다시 가져와야 할 때만 실행하세요. 실수로 기존 도메인을 읽지 않도록 기본 실행은 막아두었고, 꼭 필요할 때만 `ALLOW_LEGACY_WELLBEEP_IMPORT=1` 환경 변수를 켠 뒤 사용합니다. 일반 배포와 개발은 가져온 `src/data/posts.json`을 기준으로 진행합니다.

## Cloudflare Pages 설정

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `.node-version`의 `24`
- Project name: `health-care-kr`
- Production URL: `https://health-care-kr.pages.dev`
- Custom domains: 사용하지 않음

GitHub 저장소를 Cloudflare Pages에 연결한 뒤, 위 빌드 설정으로 배포하면 됩니다.

## AdSense 준비

승인 전에는 광고 스크립트와 광고 슬롯을 넣지 않는 쪽으로 구성했습니다. 승인 후에는 실제 `ca-pub-...` 값과 광고 배치를 별도 커밋으로 넣는 편이 안전합니다.

자세한 체크리스트는 [docs/adsense-readiness.md](docs/adsense-readiness.md)를 보세요.
