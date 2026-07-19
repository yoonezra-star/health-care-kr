# AdMob 승인 준비도 점검

점검일: 2026-07-19

대상 앱: `혈압노트` Android WebView 앱  
대상 URL: `https://health-care-kr.pages.dev/blood-pressure-note`

## 현재 점수

- 사전 준비도: 92/100
- 실제 심사 제출 가능도: 62/100

실제 심사 제출 가능도가 낮은 이유는 앱이 아직 Google Play에 게시되지 않았고, AdMob 앱 생성 및 스토어 연결이 완료되지 않았기 때문입니다. Google AdMob의 app readiness review는 앱이 지원 스토어에 게시되고 AdMob에서 연결된 뒤 진행됩니다.

## 이번에 보강한 항목

- `public/app-ads.txt` 추가
- 개인정보처리방침에 Android WebView, 로컬 혈압 기록, Google Mobile Ads SDK 처리 문구 추가
- 광고 정책에 AdMob 배너 배치 원칙과 `app-ads.txt` 고지 추가
- 쿠키 정책에 Google AdMob/Google Mobile Ads SDK 문구 추가
- 데이터 삭제 안내 페이지 추가 및 앱 푸터/정책 문서에 연결
- 혈압노트 앱 안에 전체 기록 삭제 버튼 추가
- 개인정보, 광고정책, 쿠키정책, 이용약관, 면책 페이지에서는 광고 스크립트를 로드하지 않도록 변경
- Android 로컬 빌드용 `local.properties` 생성 및 Git 추적 제외

## 현재 좋은 신호

- `compileSdk 36`, `targetSdk 36`, `minSdk 23`
- Android 권한은 `INTERNET`, `ACCESS_NETWORK_STATE`만 사용
- Google Mobile Ads SDK 포함
- 출시 전 테스트 AdMob App ID와 배너 단위 사용
- WebView에 `MobileAds.registerWebView(webView)` 호출 존재
- 공개 정책 페이지 존재: 개인정보처리방침, 데이터 삭제 안내, 광고 정책, 쿠키 정책, 이용약관, 면책사항
- `ads.txt`와 `app-ads.txt` 제공
- 건강 기능 표현은 직접 측정, 진단, 치료, 처방을 피하고 기록/참고용으로 정리

## 남은 필수 항목

- Play Console에 앱 등록 및 내부 테스트 트랙 업로드
- 최종 패키지 ID 확정
- 실제 AdMob App ID와 Banner unit ID 발급 후 테스트 ID 교체
- AdMob 앱을 Google Play 스토어 등록 정보와 연결
- AdMob에서 `app-ads.txt` 검증 요청
- Play Console Data safety form 작성
- Play Console Health apps declaration 작성
- 실제 Android 기기 또는 에뮬레이터에서 광고 위치와 오동작 여부 확인
- Play Console용 512x512 아이콘, 1024x500 기능 그래픽, 스크린샷 준비

## 주의

`app-ads.txt`의 게시자 ID는 현재 `ads.txt`와 같은 `pub-1441018945572157`을 사용했습니다. 실제 AdMob 계정의 Publisher ID가 다르면 Play/AdMob 등록 전에 이 값을 반드시 교체해야 합니다.
