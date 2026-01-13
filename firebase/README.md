# Firebase integration (placeholders & instructions)

I added placeholder config files and steps to integrate Firebase for Flutter Web and Android.

Notes:
- I cannot create or configure a Firebase project without your credentials. Follow the steps below to configure your project locally and generate platform-specific config files.

Flutter (recommended via FlutterFire CLI):

1. Install the FlutterFire CLI:

```bash
dart pub global activate flutterfire_cli
```

2. In the project root run:

```bash
flutterfire configure --project=YOUR_FIREBASE_PROJECT_ID
```

This will generate `lib/firebase_options.dart` and add platform config files. Place the generated `google-services.json` at `android/app/` and `FirebaseOptions` will be available in Dart.

Web manual config (if needed):
- Edit `firebase/web/firebase_config.js` and paste your Firebase web config.

Android manual config (if needed):
- Replace `firebase/android/google-services.json` with the file downloaded from the Firebase console.

After adding real config files, rebuild your Flutter app.
