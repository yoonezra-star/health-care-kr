# 혈압노트 Android WebView App

This Android project opens the Cloudflare Pages blood pressure note experience in a native WebView and adds an AdMob banner area.

## Current Site

- WebView start URL: `https://health-care-kr.pages.dev/blood-pressure-note`
- In-app host: `health-care-kr.pages.dev`
- External links open in the device browser.

## Development

1. Install Android Studio with Android SDK 36 or newer.
2. Open this `android/` folder in Android Studio.
3. Let Android Studio sync Gradle.
4. Run the `app` configuration on an emulator or Android device.

## Build

From this folder:

```powershell
$env:JAVA_HOME = "C:\Path\To\JDK17"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
.\gradlew.bat :app:assembleDebug
```

The debug APK is created at:

```text
app/build/outputs/apk/debug/app-debug.apk
```

To generate a release app bundle:

```powershell
$env:JAVA_HOME = "C:\Path\To\JDK17"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
.\gradlew.bat :app:bundleRelease
```

The release AAB is created at:

```text
app/build/outputs/bundle/release/app-release.aab
```

For Google Play, use Android Studio's signed app bundle flow or configure an upload key before release, then replace the AdMob test IDs with real production IDs.

## Run Test

For a real Android phone:

```powershell
.\gradlew.bat :app:installDebug
```

The phone must have Developer options and USB debugging enabled.

For an emulator, install these Android Studio SDK Tools first:

- Android Emulator
- Android Emulator hypervisor driver
- Android SDK Platform-Tools
- Android SDK Platform 36 or newer

Then create an API 36 virtual device in Android Studio Device Manager and run the `app` configuration.

## AdMob

Development uses Google's official test IDs:

- App ID: `ca-app-pub-3940256099942544~3347511713`
- Banner unit: `ca-app-pub-3940256099942544/9214589741`

Before release, replace these with the real AdMob app ID and ad unit ID from your AdMob account.

## Release Notes

- Keep `android:usesCleartextTraffic="false"` because the site is HTTPS.
- Do not add JavaScript native bridges unless absolutely required.
- Use test ads only until the app is ready for production review.
- Google Play requires new apps and updates to target Android 16/API 36 from August 31, 2026.
- `android.overridePathCheck=true` is enabled because this workspace path contains non-ASCII characters on Windows.
- CLI emulator testing may require a temporary drive-letter mapping if the emulator cannot read the non-ASCII workspace path.

## Play Store Preparation

- Release checklist: `../docs/play-store-release-readiness.md`
- Korean store listing draft: `../docs/play-store-listing-ko.md`
