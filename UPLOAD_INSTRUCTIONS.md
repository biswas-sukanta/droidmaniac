# Files to Upload to GitHub 📤

## 🎯 For AdMob Grey Box Fix & App Icon

Upload **ONLY these 3 files** to fix the issues:

### 1. `.github/workflows/build-apk.yml`
**Location**: `GITHUB_UPLOAD/.github/workflows/build-apk.yml`
**Why**: Contains the R8 fix (Kotlin 1.8.22 + disabled R8 full mode) to prevent build crashes

### 2. `www/styles.css`
**Location**: `GITHUB_UPLOAD/www/styles.css`
**Why**: Fixes the AdMob grey box issue - changed background from grey gradient to transparent

### 3. `www/ads.js`
**Location**: `GITHUB_UPLOAD/www/ads.js`
**Why**: Includes the on-screen debug panel so you can see AdMob status without USB debugging

---

## 📋 Upload Instructions

### Option 1: GitHub Web Interface (Easiest)
1. Go to your GitHub repository
2. Navigate to each folder and click "Add file" → "Upload files"
3. Upload the 3 files listed above to their respective paths:
   - `.github/workflows/build-apk.yml` → Upload to `.github/workflows/` folder
   - `www/styles.css` → Upload to `www/` folder  
   - `www/ads.js` → Upload to `www/` folder
4. Click "Commit changes"

### Option 2: Git Command Line
```bash
cd /path/to/your/repo
cp /path/to/GITHUB_UPLOAD/.github/workflows/build-apk.yml .github/workflows/
cp /path/to/GITHUB_UPLOAD/www/styles.css www/
cp /path/to/GITHUB_UPLOAD/www/ads.js www/
git add .github/workflows/build-apk.yml www/styles.css www/ads.js
git commit -m "Fix AdMob grey box and R8 build crash"
git push
```

---

## 🔍 What About the App Icon?

The app icon SVG I created is at:
- `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.svg`

**Note**: This won't work directly because Android needs PNG files, not SVG, in multiple sizes.

### To Use the Icon:
1. I can convert the SVG to PNG in different sizes (ldpi, mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi)
2. OR you can use an online tool like https://icon.kitchen to generate all sizes from the SVG
3. Then upload all the PNG files to the respective `mipmap-*` folders

**For now**, focus on uploading the 3 files above to fix the immediate issues. We can add the icon later if needed.

---

## ✅ After Upload

1. **GitHub Actions** will automatically start building the APK
2. Go to your repo → **Actions** tab to monitor the build
3. The build should complete successfully without R8 errors
4. Download the APK and test:
   - AdMob should show real ads (not grey box)
   - Debug panel shows status in top-right corner

---

**Just upload those 3 files and you're done!** 🚀
