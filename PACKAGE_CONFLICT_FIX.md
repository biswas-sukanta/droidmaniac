# Package Conflict Solution Guide

## 🔴 Problem: "App not installed - Package conflicts with existing package"

This error happens when trying to install a new APK over an old one.

### Common Causes
1. **Version code not incremented** ✅ FIXED
2. **Different signing key** (debug vs release)
3. **Old app still installed**

---

## ✅ Solution 1: Auto-Increment Version (DONE)

We've **automated** version code increment in `build.gradle`:

```gradle
versionCode new Date().format('yyMMddHHmm').toInteger()
// Example: 2602090245 (Feb 9, 2026, 02:45)
```

**What this means:**
- Every build has a **unique, increasing** version code
- No more package conflicts!
- Safe to install over previous builds

---

## 🔧 Solution 2: Uninstall Old App First

If you still get the error:

### On Android Device

**Method 1: Via Settings**
1. Settings → Apps
2. Find "Subah Ki Aarti"
3. Tap → Uninstall
4. Install new APK

**Method 2: Via ADB** (if device connected)
```bash
adb uninstall com.subahkiaarti.app
adb install path/to/new.apk
```

**Method 3: Long Press**
1. Long-press app icon on home screen
2. Tap "Uninstall" or drag to uninstall
3. Install new APK

---

## 📱 Current App Version

After this fix:
- **versionName**: 1.2.0 (human-readable)
- **versionCode**: Auto-generated timestamp (e.g., 2602090245)

Each new build will have a higher versionCode automatically!

---

## 🔄 Workflow Cleanup

We also created a **cleanup workflow** that runs **twice daily**:

**What it does:**
- Deletes old GitHub Actions runs
- Keeps last 7 days
- Always keeps minimum 3 runs
- Saves storage space

**Schedule:** 6 AM & 6 PM IST (daily)

**Manual trigger:**
Go to Actions → Cleanup Old Workflow Runs → Run workflow

---

## 💡 Tips

### For Development
- Each CI build has unique version
- Just download and install
- No need to uninstall

### For Production (Play Store)
- Manually set `versionCode` before release
- Use semantic versioning for `versionName`

### Checking Version
```bash
# Check installed app version
adb shell dumpsys package com.subahkiaarti.app | grep versionCode
```

---

## 🚀 Next Steps

1. **Commit these changes**
2. **Build new APK** via GitHub Actions
3. **Install normally** - no conflicts!
4. **Old runs auto-delete** twice daily

✅ Problem solved!
