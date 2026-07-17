# AdSense 승인 준비 체크리스트

## 반영한 것

- Blogger 기본 테마, 공유 위젯, 기존 광고 코드를 제거했습니다.
- 홈에서 전체 계산기를 찾을 수 있고, 각 글에는 관련 계산기와 운영 정보 링크가 보입니다.
- 소개, 문의, 개인정보처리방침, 면책사항 페이지를 추가했습니다.
- 각 글은 기존 `.html` URL을 유지하고 canonical, Open Graph, Article JSON-LD를 포함합니다.
- sitemap은 기존 `.html` URL 기준으로 생성됩니다.
- 반복적으로 보이던 깨진 한글 오탈자 일부를 import 단계에서 보정했습니다.

## 신청 전 다시 볼 것

- 주요 페이지 5~10개는 사람이 직접 읽고 어색한 문장, 중복 문단, 과한 문구를 더 다듬는 편이 좋습니다.
- 건강 관련 콘텐츠는 진단처럼 보이는 표현을 피하고, 참고용/전문가 상담 안내를 유지합니다.
- 승인 전에는 광고 슬롯을 과하게 넣지 않습니다. 현재 프로젝트는 광고 스크립트를 기본으로 출력하지 않습니다.
- 저작권이 불분명한 외부 이미지나 원본 Blogger 테마 이미지는 사용하지 않습니다.

## 승인 후 추가할 것

1. `public/ads.txt` 추가

```txt
google.com, pub-xxxxxxxxxxxxxxxx, DIRECT, f08c47fec0942fa0
```

2. Cloudflare Pages 환경 변수 추가

```txt
PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
```

3. 본문 중간/하단 광고 슬롯은 콘텐츠를 가리지 않게 별도 컴포넌트로 추가합니다.
