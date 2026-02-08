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

A beautiful Hindu prayer app featuring daily Aartis, Japa Counter, Panchang, Shubh Din guidance, Daily Horoscope, and spiritual content.

## ✨ Features

- 🎵 **10 Daily Aartis** with high-quality audio playback and repeat mode
- 📿 **Japa Counter** - Digital mala counter for mantra counting
- 📅 **Hindu Panchang** - Tithi, Day, Nakshatra with today's guidance
- ✨ **Shubh Din** - Auspicious days with deity worship recommendations
- 🔮 **Daily Horoscope** - Personalized daily horoscope based on your rashi
- 🕉️ **Worship Timing** - Surya worship times
- 🔔 **Morning Alarm** - Wake up to spiritual prayers
- 🌐 **Multi-language** - English and Hindi support
- 🌅 **Good Morning Cards** - Share spiritual greetings on WhatsApp
- 📱 **PWA Support** - Install like a native app
- 🎨 **Beautiful UI** - Modern dark theme with spiritual aesthetics

## 🚀 Quick Start

### Web Version
```bash
# Open directly
open www/index.html

# Or use local server
npm start
```

### Android Build
```bash
# Install dependencies
npm install

# Sync & build
npm run build:android
```

## 📦 Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Mobile**: Capacitor 6.0 for Android
- **Monetization**: AdMob (real production IDs configured)
- **Audio**: Native HTML5 Audio API with repeat functionality

## 🎨 App Icon

Beautiful namaste icon with Om symbol and sunrise gradient. To update:

1. Create new 512x512px icon
2. Upload to [appicon.co](https://appicon.co)
3. Download Android icons
4. Copy to `android/app/src/main/res/mipmap-*/`
5. Commit & push

See `app-icon/README.md` for details.

## 📱 Version Management

**Auto-incrementing version codes** using GitHub Actions run number:
- Each build gets unique version code
- No package conflicts when installing
- Format: versionCode = GitHub run number (e.g., 150, 151, 152...)

**Current version**: 1.2.0

## 🧹 Automated Cleanup

GitHub Actions workflow runs **twice daily** (6 AM & 6 PM IST):
- Deletes old workflow runs
- Keeps: Last 7 days OR minimum 3 runs
- Saves storage space

Manual trigger: Actions → Cleanup Old Workflow Runs

## 🎵 Included Aartis

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

## 💰 AdMob Integration

**Real production ads configured:**
- Banner: Top of screen
- Interstitial: On player close & app exit
- Auto-prepares ads for seamless experience

**Note**: Ads may take 1-2 hours to fill for new AdMob accounts.

## 🌍 Deployment

**GitHub Actions**:
- Automatic APK builds on push
- Download from Actions artifacts
- Ready for Play Store

**Netlify** (optional):
- Auto-deploy web version
- `netlify.toml` pre-configured

## 🔧 Development Commands

```bash
npm start              # Run local web server
npm run build:android  # Sync Capacitor & open Android Studio
```

## 📄 License

MIT License - Free to use and modify

## 🙏 Credits

Built with devotion for spiritual seekers worldwide.

---

**Repository**: https://github.com/biswas-sukanta/droidmaniac  
**Branch**: feature/Subah-Ki-Aarti
