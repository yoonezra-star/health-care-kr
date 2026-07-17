# WELLBEEP 이전 실행 순서

## 1. GitHub 저장소 연결

현재 폴더가 이전 대상 소스입니다. GitHub에서 새 저장소를 만든 뒤 아래 순서로 연결합니다.

```bash
git init
git add .
git commit -m "Migrate WELLBEEP to Astro static site"
git branch -M main
git remote add origin https://github.com/<owner>/<repo>.git
git push -u origin main
```

이 환경에는 `gh` CLI와 새 GitHub 저장소 생성 권한이 없어서 원격 저장소 생성은 GitHub 화면에서 먼저 해야 합니다.

## 2. Cloudflare Pages 프로젝트

Cloudflare Dashboard에서 Workers & Pages로 이동한 뒤 GitHub 저장소를 연결합니다.

- Framework preset: Astro 또는 None
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=24`

첫 배포가 끝나면 `*.pages.dev` 주소에서 홈, 글 상세, 정책 페이지가 열리는지 확인합니다.

## 3. Cloudflare DNS와 Gabia 네임서버

Cloudflare에 `wellbeep.com` zone을 추가하면 Cloudflare가 두 개의 네임서버를 배정합니다. Gabia 도메인 관리 화면에서 기존 Blogger 연결값을 제거하고, 네임서버를 Cloudflare가 배정한 값으로 교체합니다.

주의할 점:

- DNSSEC가 Gabia에서 켜져 있다면 네임서버 변경 전에 끕니다.
- 기존 Blogger용 `ghs.google.com`, Google/Blogger A record는 새 Pages 배포 확인 후 제거합니다.
- MX 레코드처럼 메일에 필요한 값이 있다면 삭제하지 말고 Cloudflare DNS에 옮깁니다.
- 전파에는 보통 수십 분에서 48시간까지 걸릴 수 있습니다.

## 4. Custom domain 연결

Cloudflare Pages 프로젝트의 Custom domains에서 아래 두 호스트를 연결합니다.

- `www.wellbeep.com`
- `wellbeep.com`

이 프로젝트에는 `wellbeep.com`에서 `www.wellbeep.com`으로 보내는 `_redirects` 규칙이 들어 있습니다.

## 5. 검색/광고 후속 작업

- Search Console과 Naver Search Advisor에서 새 sitemap `https://www.wellbeep.com/sitemap-index.xml`을 제출합니다.
- AdSense 신청 전 홈, 주요 계산기, 소개, 문의, 개인정보처리방침, 면책사항이 모두 정상 노출되는지 확인합니다.
- AdSense 승인 후 `ads.txt`와 광고 슬롯을 별도 커밋으로 추가합니다.

## 공식 참고 링크

- Cloudflare Pages Git integration: https://developers.cloudflare.com/pages/configuration/git-integration/
- Cloudflare Pages custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Cloudflare full DNS setup: https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
- Google AdSense eligibility: https://support.google.com/adsense/answer/9724
- Google AdSense program policies: https://support.google.com/adsense/answer/48182
