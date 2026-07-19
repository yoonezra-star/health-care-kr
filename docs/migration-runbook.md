# Health Care 배포 실행 순서

## 1. GitHub 저장소 연결

현재 폴더가 배포 대상 소스입니다. GitHub 저장소를 만든 뒤 이 폴더만 연결합니다.

```bash
git add .
git commit -m "Prepare Health Care for Cloudflare Pages"
git branch -M main
git remote add origin https://github.com/<owner>/<repo>.git
git push -u origin main
```

이미 원격 저장소가 연결되어 있다면 `git remote add origin` 단계는 생략합니다.

## 2. Cloudflare Pages 프로젝트

Cloudflare Dashboard에서 Workers & Pages로 이동한 뒤 GitHub 저장소를 연결합니다.

- Project name: `health-care-kr`
- Framework preset: Astro 또는 None
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=24`

첫 배포가 끝나면 `https://health-care-kr.pages.dev` 주소에서 홈, 계산기 상세, 정책 페이지가 열리는지 확인합니다.

## 3. 도메인 운영 기준

기존 `wellbeep.com` 도메인은 이 프로젝트에 연결하지 않습니다.

- Cloudflare DNS zone 추가 없음
- Gabia 네임서버 변경 없음
- Pages Custom domains 연결 없음
- `_redirects`에 기존 도메인 리다이렉트 규칙 추가 없음

Cloudflare Pages가 제공하는 `*.pages.dev` 주소만 사용합니다.

## 4. 검색/광고 후속 작업

- Search Console과 Naver Search Advisor에는 `https://health-care-kr.pages.dev/sitemap-index.xml` 기준으로 제출합니다.
- AdSense 또는 AdMob 준비 전 홈, 주요 계산기, 소개, 문의, 개인정보처리방침, 면책사항이 모두 정상 노출되는지 확인합니다.
- 광고 ID와 광고 슬롯은 승인/검토 단계에 맞춰 별도 커밋으로 관리합니다.

## 공식 참고 링크

- Cloudflare Pages Git integration: https://developers.cloudflare.com/pages/configuration/git-integration/
- Google AdSense eligibility: https://support.google.com/adsense/answer/9724
- Google AdSense program policies: https://support.google.com/adsense/answer/48182
