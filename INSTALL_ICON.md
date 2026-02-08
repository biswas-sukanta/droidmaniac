# Icon Installation Quick Guide

Your beautiful namaste icon is ready! Now let's install it to the Android project.

## 📥 Step 1: Save Your Icon

Save the icon you generated to:
```
app-icon/icon-512.png
```

I can see you have the icon. Now we need to resize it.

## 🔧 Step 2: Resize Icon

Use **[AppIcon.co](https://appicon.co)**:

1. Go to https://appicon.co
2. Upload your `app-icon/icon-512.png`
3. Select **Android**
4. Download the zip file

## 📂 Step 3: Extract & Copy

Extract the downloaded zip. You'll get folders like:
- `mipmap-mdpi/`
- `mipmap-hdpi/`
- `mipmap-xhdpi/`
- `mipmap-xxhdpi/`
- `mipmap-xxxhdpi/`

Copy ALL these folders to:
```
android/app/src/main/res/
```

Overwrite existing files when asked.

## ✅ Step 4: Verify Files

Check that each mipmap folder has:
- `ic_launcher.png`
- `ic_launcher_round.png`

## 🚀 Step 5: Commit & Push

```bash
git add android/app/src/main/res/mipmap-*/
git commit -m "feat: Add namaste icon"
git push
```

GitHub Actions will build the APK with your new icon!

---

**Need help?** Share a screenshot if you're stuck at any step.
