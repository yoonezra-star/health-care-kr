# Health Care Android WebView App

This Android project wraps the Cloudflare Pages site in a native WebView and adds an AdMob banner area.

## Current Site

- WebView start URL: `https://health-care-kr.pages.dev`
- In-app host: `health-care-kr.pages.dev`
- External links open in the device browser.

## Development

1. Install Android Studio with Android SDK 35 or newer.
2. Open this `android/` folder in Android Studio.
3. Let Android Studio sync Gradle.
4. Run the `app` configuration on an emulator or Android device.

## AdMob

Development uses Google's official test IDs:

- App ID: `ca-app-pub-3940256099942544~3347511713`
- Banner unit: `ca-app-pub-3940256099942544/9214589741`

Before release, replace these with the real AdMob app ID and ad unit ID from your AdMob account.

## Release Notes

- Keep `android:usesCleartextTraffic="false"` because the site is HTTPS.
- Do not add JavaScript native bridges unless absolutely required.
- Use test ads only until the app is ready for production review.
