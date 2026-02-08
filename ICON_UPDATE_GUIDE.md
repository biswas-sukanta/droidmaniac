# Automated Icon Management System

## 🎯 Overview

The app uses a centralized icon management system. You just replace **one file** and run **one command**!

## 📂 Folder Structure

```
subah-ki-aarti/
├── app-icon/
│   ├── icon-512.png          ← YOUR MASTER ICON (replace this)
│   └── README.md
├── update-icon.js             ← Auto-resize script
└── android/app/src/main/res/
    ├── mipmap-mdpi/           ← Auto-generated
    ├── mipmap-hdpi/           ← Auto-generated
    ├── mipmap-xhdpi/          ← Auto-generated
    ├── mipmap-xxhdpi/         ← Auto-generated
    └── mipmap-xxxhdpi/        ← Auto-generated
```

---

## 🚀 How to Update App Icon

### **Step 1: Save Your Icon**
Save your new icon as:
```
app-icon/icon-512.png
```
**Requirements**: 512x512px PNG file

### **Step 2: Run Update Command**
```bash
npm run update-icon
```

### **Step 3: Build APK**
```bash
npm run build:android
```

That's it! Your new icon is now in the app! 🎉

---

## 🔧 Setup (First Time Only)

Install the required dependency:
```bash
npm install
```

This installs `sharp` (image processing library) automatically.

---

## 📝 What the Script Does

When you run `npm run update-icon`:

1. ✅ Reads `app-icon/icon-512.png`
2. ✅ Resizes to 5 different sizes (48px to 192px)
3. ✅ Saves to all `mipmap-*` folders
4. ✅ Updates both `ic_launcher.png` and `ic_launcher_round.png`

All automatically! No manual work needed.

---

## 🎨 Icon Design Tips

- **Size**: Must be exactly 512x512 pixels
- **Format**: PNG (transparency optional)
- **Style**: Should work at small sizes (48x48px)
- **Colors**: Vibrant colors stand out better
- **Simplicity**: Avoid fine details or text

---

## 🔍 Troubleshooting

### Script fails with "sharp not found"
```bash
npm install sharp
```

### "Source icon not found"
Make sure your icon is at:
```
app-icon/icon-512.png
```

### Icon doesn't update in APK
```bash
# Clean build
cd android
./gradlew clean
./gradlew assembleRelease
```

---

## 📱 Current Icon

**Design**: Namaste hands with Om symbol  
**Colors**: Sunrise gradient (saffron, golden, peachy)  
**Version**: 1.0 (Feb 2026)

---

## 💡 Future Updates

Want to change the icon?

1. Design new 512x512 icon
2. Save as `app-icon/icon-512.png` (overwrite old one)
3. Run `npm run update-icon`
4. Build APK

Done! Easy as that! 🚀
