<div align="center">

# 👨‍💻 Sukanta Biswas

**Senior Principal Development Engineer @ Calsoft**

---

### 🚀 Lightning-Fast App Development | Backend Architecture Expert

💼 **Core Expertise**: Spring Boot • Microservices • Backend Development • Cloud Architecture  
🏗️ **Specialties**: Distributed Systems • Data Pipelines • RESTful APIs • System Design  
🎯 **Passion Projects**: Building apps as a hobby - From concept to production in record time!

📧 **Email**: [biswas.sukanta@hotmail.com](mailto:biswas.sukanta@hotmail.com)  
💼 **LinkedIn**: [linkedin.com/in/sukanta-biswas](https://www.linkedin.com/in/sukanta-biswas)  
🏆 **Portfolio**: Smart Attendance System • COVID-19 Vaccine Checker • Data Pipeline Architecture  

💡 **Open for Projects** - Have an idea? Let's architect and build it together! ⚡

---

</div>

# Subah Ki Aarti 🙏

A beautiful Hindu prayer app featuring daily Aartis, Panchang, Shubh Din guidance, and spiritual content.

## ✨ Features

- 🎵 **10 Daily Aartis** with high-quality audio playback
- 📅 **Hindu Panchang** - Tithi, Day, Nakshatra
- ✨ **Shubh Din** - Auspicious days guidance with deity recommendations
- 🕉️ **Worship Timing** - Surya worship times and more
- 🔔 **Morning Alarm** - Wake up to spiritual prayers
- 🌐 **Multi-language** - English and Hindi support
- 📱 **PWA Support** - Install on your phone like a native app
- 🎨 **Beautiful Dark UI** - Modern, spiritual design
- 🌅 **Good Morning Cards** - Share spiritual greetings on WhatsApp

## 🚀 Quick Start

### Web Version (Local)
```bash
# Open directly
open www/index.html

# Or use a local server
npx http-server www
```

### Android APK Build

The project uses GitHub Actions to automatically build the APK:

1. Push changes to GitHub
2. GitHub Actions workflow builds the APK
3. Download from Actions artifacts

**Build Configuration:**
- Gradle 8.10.2
- Android Gradle Plugin 8.7.2
- Kotlin 1.8.22
- Min SDK: 23, Target SDK: 35
- AdMob integration included

### Deploy to Netlify

Simply connect this repository to Netlify - `netlify.toml` is pre-configured!

The web app will be deployed automatically.

## 📦 Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Mobile**: Capacitor for Android
- **Monetization**: AdMob (@capacitor-community/admob)
- **PWA**: Service Worker for offline support
- **Audio**: Native HTML5 Audio API

## 🔧 Development

```bash
# Install dependencies
npm install

# Sync Capacitor
npx cap sync

# Build Android (requires Android Studio)
cd android
./gradlew assembleDebug
```

## 📱 AdMob Integration

The app includes AdMob with an on-screen debug panel:
- Shows initialization status
- Displays ad load success/errors
- Color-coded messages (green=success, red=error)
- No USB debugging needed!

**Test Ads** are configured by default. Replace with production IDs before publishing.

## 🎵 Audio Files

The app includes 10 devotional aartis:
- Om Jai Jagdish Hare
- Jai Ganesh Deva
- Om Jai Shiv Omkara
- Om Jai Laxmi Mata
- Durga Devi Aarti
- Hanuman Chalisa
- Surya Bhagwan Aarti
- Gayatri Mantra
- Maha Mrityunjaya Mantra
- Hare Krishna Hare Rama

## 🌍 Deployment

**Web (Netlify):**
- Automatic deployment on push
- Custom domain support
- HTTPS included

**Android (GitHub Actions):**
- Builds APK automatically
- Download from Actions tab
- Ready for Google Play Store

## 📄 License

MIT License - Free to use and modify

## 🙏 Credits

Built with devotion for spiritual seekers worldwide.

---

**Repository**: https://github.com/biswas-sukanta/droidmaniac  
**Branch**: feature/Subah-Ki-Aarti
