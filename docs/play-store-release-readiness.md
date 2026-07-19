# 혈압노트 Play Store 출시 준비 체크리스트

최종 확인일: 2026-07-19

이 문서는 `혈압노트` Android WebView 앱을 Google Play Console에 등록하기 전에 확인할 항목을 정리합니다. 앱은 사용자가 직접 입력한 혈압, 맥박, 복약 여부, 메모를 로컬 WebView 저장소에 기록하고, 상담용 요약과 CSV 내보내기를 제공하는 형태입니다.

## 현재 완료된 항목

- 웹 앱 배포: `https://health-care-kr.pages.dev/blood-pressure-note`
- Android 앱 시작 URL: `https://health-care-kr.pages.dev/blood-pressure-note`
- Android 앱 표시 이름: `혈압노트`
- `compileSdk`: 36
- `targetSdk`: 36
- `minSdk`: 23
- Debug APK 빌드: `android/app/build/outputs/apk/debug/app-debug.apk`
- Release AAB 빌드: `android/app/build/outputs/bundle/release/app-release.aab`
- GitHub `main`과 Cloudflare Pages 자동 배포 연결 완료
- `app-ads.txt` 추가: `https://health-care-kr.pages.dev/app-ads.txt`
- Android 로컬 빌드용 SDK 경로 설정: `android/local.properties`는 개인 PC 경로라 Git 추적에서 제외

## 공식 기준 확인

- Google Play target API requirement: 2026-08-31부터 새 앱과 업데이트는 Android 16, API 36 이상을 타깃해야 합니다. 현재 앱은 `targetSdk 36`입니다.
  - https://developer.android.com/google/play/requirements/target-sdk
- Google Play Health Content and Services: 건강/의료 앱은 건강 앱 선언을 완료해야 하고, 개인 및 민감 데이터 처리에 대한 개인정보처리방침이 필요합니다.
  - https://support.google.com/googleplay/android-developer/answer/16679511
- Google Play health app categories: 건강 관리, 의료 관리, 건강/피트니스 등 건강 앱 범주와 선언 대상 확인이 필요합니다.
  - https://support.google.com/googleplay/android-developer/answer/13996367
- Google Play Data safety: Play에 게시되는 모든 앱은 Data safety form을 완료해야 합니다.
  - https://support.google.com/googleplay/android-developer/answer/10787469
- AdMob app-ads.txt verification: 신규 AdMob 앱은 승인 전 app-ads.txt 검증이 필요합니다.
  - https://support.google.com/admob/answer/14538460
- Play App Signing: Play Console 릴리스에는 AAB 업로드 및 앱 서명 설정이 필요합니다.
  - https://support.google.com/googleplay/android-developer/answer/9842756

## Play Console 입력 전 결정 필요

- 최종 패키지 ID: 현재 `com.healthcare.webview`
  - Play Console에 처음 올린 뒤에는 applicationId 변경이 사실상 새 앱이 됩니다.
  - 권장 후보: `com.yoonezra.bloodpressurenote` 또는 브랜드 도메인 보유 시 해당 도메인 기반 ID
- 실제 AdMob ID
  - 현재 테스트 App ID: `ca-app-pub-3940256099942544~3347511713`
  - 현재 테스트 Banner unit: `ca-app-pub-3940256099942544/9214589741`
  - 출시 전 실제 ID로 교체해야 합니다.
- 앱 서명 방식
  - Play App Signing 사용 권장
  - 업로드 키 생성 및 보관 필요
- 개인정보처리방침 URL
  - 현재 후보: `https://health-care-kr.pages.dev/privacy`
  - Android 앱의 WebView, 로컬 건강 기록, Google Mobile Ads SDK 처리 내용을 반영함

## Health Apps Declaration 초안

Play Console의 Health apps declaration에서 아래 취지로 입력합니다.

- 앱 유형: 건강 관리 또는 건강 기록 보조 앱
- 기능 설명: 사용자가 가정용 혈압계 등 외부 기기로 측정한 혈압과 맥박을 직접 입력하고, 최근 추세와 상담용 요약을 확인하는 기록 앱
- 의료 기능 여부: 혈압을 직접 측정하지 않으며, 진단, 치료, 처방, 응급 판단 기능을 제공하지 않음
- 규제 의료기기 여부: 의료기기 기능을 제공하지 않는 수동 기록 및 참고용 정보 앱으로 운영
- 필수 고지: 결과는 참고용이며, 증상이나 이상 수치가 있으면 의료 전문가와 상담해야 함

## Data Safety Form 초안

현재 구현 기준의 초안입니다. 실제 AdMob 설정, 분석 도구, 계정 기능 추가 여부에 따라 바뀔 수 있습니다.

### 사용자 입력 건강 데이터

- 데이터 유형: Health and fitness, 건강 정보
- 예시: 수축기 혈압, 이완기 혈압, 맥박, 복약 여부, 메모
- 수집 여부: 현재 서버로 전송하지 않음
- 저장 위치: 사용자의 기기 WebView localStorage
- 공유 여부: 앱 자체 서버 공유 없음
- 사용자 삭제: 앱 화면의 기록 삭제 또는 브라우저/WebView 앱 데이터 삭제로 가능

### 광고 관련 데이터

- 현재 앱에는 Google Mobile Ads SDK가 포함되어 있음
- 실제 출시 AdMob 설정에 따라 광고 ID, 기기 정보, 대략적 위치, 앱 상호작용 등이 Google에 의해 처리될 수 있음
- Play Console Data safety에서는 Google Mobile Ads SDK의 최신 데이터 공개 가이드를 기준으로 입력 필요

### 계정 및 연락처

- 앱 내 계정 생성 없음
- 앱 내 문의 양식 없음
- 웹사이트의 이메일 문의를 사용자가 직접 보내는 경우 이메일 주소와 문의 내용이 처리될 수 있음

## Store Listing 전 준비물

- 앱 이름: `혈압노트`
- 짧은 설명: 80자 이내
- 전체 설명: 주요 기능, 면책 고지, 데이터 처리 방침 포함
- 앱 아이콘: 현재 벡터 아이콘 사용 가능, Play Console용 512x512 PNG 별도 필요
- 기능 그래픽: 1024x500 PNG 필요
- 휴대전화 스크린샷: 최소 2장
  - 권장 화면: 대시보드, 기록 입력, 리포트/CSV 화면
- 개인정보처리방침 URL
- 앱 카테고리: Health & Fitness 후보
- 광고 포함 여부: 예, AdMob 사용 시
- 콘텐츠 등급 설문
- Data safety form
- Health apps declaration

## 릴리스 전 기술 체크

1. 실제 Android 기기 또는 에뮬레이터 연결
2. `adb install -r android/app/build/outputs/apk/debug/app-debug.apk`
3. 앱 실행 후 첫 화면이 혈압노트인지 확인
4. 혈압 기록 저장 후 앱 재실행 시 기록 유지 확인
5. 외부 링크가 브라우저로 열리는지 확인
6. 네트워크 차단 상태에서 오류 패널과 다시 시도 버튼 확인
7. AdMob 테스트 배너가 하단에서 콘텐츠를 과하게 가리지 않는지 확인
8. Play Console 업로드 전 실제 AdMob ID 교체
9. 릴리스 AAB를 업로드 키로 서명
10. 내부 테스트 트랙에 먼저 배포

## 현재 차단 항목

- ADB 연결 기기 없음
- 등록된 Android Emulator AVD 없음
- 실제 기기 화면 검증 미완료
- Play Console 최종 패키지 ID 결정 필요
- 실제 AdMob ID 필요
- Play Console용 이미지 자산 필요
