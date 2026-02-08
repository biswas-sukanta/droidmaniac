# App Icon Source

This folder contains the **master source icon** for the Subah Ki Aarti app.

## 📁 Structure

```
app-icon/
├── icon-512.png          ← Master source icon (512x512px)
├── README.md             ← This file
└── (generated icons will be created here temporarily)
```

## 🎨 How to Update the App Icon

### **Step 1: Replace the Source Icon**
Simply replace `icon-512.png` with your new icon (must be 512x512px, PNG format)

### **Step 2: Run the Update Script**
```bash
npm run update-icon
```

That's it! The script will automatically:
- ✅ Resize icon to all Android mipmap sizes
- ✅ Copy to android/app/src/main/res/mipmap-* folders
- ✅ Update both `ic_launcher.png` and `ic_launcher_round.png`

### **Step 3: Build APK**
```bash
npm run build:android
# OR
cd android && ./gradlew assembleRelease
```

Your new icon will appear in the APK!

---

## 📐 Icon Requirements

- **Format**: PNG with transparency (optional)
- **Size**: Exactly 512x512 pixels
- **Design**: Should work at small sizes (48x48px)
- **Colors**: Vibrant, eye-catching
- **Style**: Flat or subtle gradients work best

---

## 🔧 Manual Process (Without Script)

If you need to manually update icons:

1. Use **[AppIcon.co](https://appicon.co)** or **[Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)**
2. Upload `icon-512.png`
3. Download all mipmap sizes
4. Extract and copy to `android/app/src/main/res/`

---

## 📱 Generated Sizes

The script creates these sizes:

| Density | Size | Folder |
|---------|------|--------|
| MDPI | 48x48 | mipmap-mdpi |
| HDPI | 72x72 | mipmap-hdpi |
| XHDPI | 96x96 | mipmap-xhdpi |
| XXHDPI | 144x144 | mipmap-xxhdpi |
| XXXHDPI | 192x192 | mipmap-xxxhdpi |

---

## 🎯 Current Icon

**Theme**: Namaste/Om with Sunrise Gradient  
**Colors**: Saffron Orange, Golden Yellow, Peachy Pink  
**Elements**: White namaste hands + Golden Om symbol (ॐ)  
**Style**: Spiritual, modern, peaceful

---

## 💡 Tips

- **Test at different sizes** - Icon should be recognizable even at 48x48px
- **Use vibrant colors** - Helps icon stand out on launcher
- **Avoid text** - Text becomes unreadable at small sizes
- **Keep it simple** - Complex designs don't scale well

---

## 🔄 Version History

Add notes here when you update the icon:

- **v1.0** (Feb 2026) - Initial namaste icon with Om symbol and sunrise gradient
