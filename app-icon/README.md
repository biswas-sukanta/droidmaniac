# App Icon Management - Simple Approach

## 📁 Icon Source Folder

This folder contains your **master app icon**.

```
app-icon/
└── icon-512.png    ← Your 512x512 master icon
```

---

## 🎨 How to Update App Icon

### **Step 1: Create/Save New Icon**
Save your new 512x512px icon as:
```
app-icon/icon-512.png
```

### **Step 2: Generate Android Sizes**

Use **[AppIcon.co](https://appicon.co)** (free online tool):

1. Go to https://appicon.co
2. Upload `app-icon/icon-512.png`
3. Select **"Android"**
4. Click **"Generate"**
5. Download the zip file

### **Step 3: Extract and Copy**

```bash
# Extract the downloaded zip
# You'll get folders: mipmap-mdpi, mipmap-hdpi, etc.

# Copy ALL mipmap-* folders to:
android/app/src/main/res/

# Overwrite existing files when prompted
```

### **Step 4: Build APK**

```bash
npm run build:android
# OR via GitHub Actions (commit and push)
```

Done! Your new icon will appear in the app.

---

## 📐 Icon Requirements

- **Size**: Exactly 512x512 pixels
- **Format**: PNG
- **Design**: Should work at small sizes (48x48px)
- **Style**: Vibrant colors, simple design

---

## 🎯 Current Icon

**Theme**: Namaste with Om Symbol  
**Colors**: Sunrise gradient (saffron, golden, peachy)  
**Date**: February 2026

---

## 💡 Alternative Tools

- **[Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)** - Official Google tool
- **[Canva](https://canva.com)** - Design your own icon
- **Gemini AI** - Use prompts from GEMINI_ICON_PROMPT.md

---

## ✅ Why This Approach?

- ✨ **No dependencies** - No npm packages to install
- ✨ **No build errors** - Works with any Node version
- ✨ **Simple** - 4 easy steps
- ✨ **Visual** - See exactly what you're uploading

---

**One source. Online tool. Copy files. Build. Done!** 🚀
