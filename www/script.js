let currentLang = 'en';
let currentAarti = null;
let isPlaying = false;
let audioPlayer = null;
let dayDeities = { ...DEFAULT_DAY_DEITIES };
let alarmEnabled = false;
let alarmTime = '05:30';
let userRashi = '';

// Get translation
function t(key) { return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.en[key]; }

// Load settings
function loadSettings() {
    const savedDeities = localStorage.getItem('dayDeities');
    if (savedDeities) { try { dayDeities = JSON.parse(savedDeities); } catch (e) { console.error("Error parsing dayDeities:", e); } }
    alarmEnabled = localStorage.getItem('alarmEnabled') === 'true';
    alarmTime = localStorage.getItem('alarmTime') || '05:30';
    userRashi = localStorage.getItem('userRashi') || '';
}

// Save settings
function saveSettings() {
    localStorage.setItem('dayDeities', JSON.stringify(dayDeities));
    localStorage.setItem('alarmEnabled', alarmEnabled);
    localStorage.setItem('alarmTime', alarmTime);
    localStorage.setItem('userRashi', userRashi);
}

function selectLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.getElementById('langScreen').classList.add('hidden');

    // Show horoscope selection screen
    document.getElementById('rashiScreen').classList.remove('hidden');
}

function selectRashi(rashi) {
    // Save rashi selection (or empty if skipped)
    userRashi = rashi;
    localStorage.setItem('userRashi', rashi);

    // Hide rashi screen and show main app
    document.getElementById('rashiScreen').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    document.getElementById('bottomNav').classList.remove('hidden');

    initApp();
    renderShubhDin();
}

function initApp() {
    loadSettings();
    audioPlayer = document.getElementById('audioPlayer');
    const now = new Date();

    // Language specific data
    const currentDays = DAYS_ALL[currentLang] || DAYS_ALL.en;
    const currentMonths = MONTHS_ALL[currentLang] || MONTHS_ALL.en;
    const currentTithis = TITHIS_ALL[currentLang] || TITHIS_ALL.en;
    const currentNakshatras = NAKSHATRAS_ALL[currentLang] || NAKSHATRAS_ALL.en;

    // Render Horoscope Tile
    renderHoroscope();

    // Date display
    document.getElementById('dateDisplay').textContent =
        `${currentDays[now.getDay()]}, ${now.getDate()} ${currentMonths[now.getMonth()]}`;

    // Panchang
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    const tithiIndex = dayOfYear % 16;
    const nakshatraIndex = dayOfYear % 27;

    // Update Panchang section
    document.getElementById('panchangTitle').textContent = '📅 ' + t('panchang');
    document.getElementById('tithiLabel').textContent = t('tithi');
    document.getElementById('vaarLabel').textContent = t('day');
    document.getElementById('nakshatraLabel').textContent = t('nakshatra');

    document.getElementById('tithiValue').textContent = currentTithis[tithiIndex];
    document.getElementById('vaarValue').textContent = currentDays[now.getDay()];
    document.getElementById('nakshatraValue').textContent = currentNakshatras[nakshatraIndex];

    // Hero deity
    const deityId = dayDeities[now.getDay()];
    const deity = AARTIS.find(a => a.id === deityId) || AARTIS[0];
    currentAarti = deity;

    // Get localized name & mantra
    const langKey = 'name' + (currentLang === 'en' ? '' : currentLang.charAt(0).toUpperCase() + currentLang.slice(1));
    const deityName = deity[langKey] || deity.name;

    let mantraText = '';
    if (currentLang === 'hi') mantraText = deity.mantra;
    else if (currentLang === 'en') mantraText = deity.mantraEn;
    else mantraText = deity['mantra' + currentLang.charAt(0).toUpperCase() + currentLang.slice(1)] || deity.mantraEn;

    document.getElementById('heroEmoji').textContent = deity.emoji;
    document.getElementById('heroName').textContent = deityName;
    document.getElementById('heroMantra').textContent = mantraText;

    // Good Morning card
    document.getElementById('gmEmoji').textContent = deity.emoji;
    document.getElementById('gmText').textContent = t('goodMorning');
    // Simple logic to remove 'Aarti' or 'Chalisa' for greeting
    const deityShortName = deityName
        .replace(' Aarti', '').replace(' Chalisa', '').replace(' Mantra', '')
        .replace(' आरती', '').replace(' चालीसा', '').replace(' मंत्र', '')
        .replace(' আরতি', '').replace(' ஆரத்தி', '').replace(' ఆరతి', '').replace(' આરતી', '').replace(' ಆರತಿ', '');
    document.getElementById('gmSubtext').textContent = t('jai') + ' ' + deityShortName + ' 🙏';

    // Alarm display
    document.getElementById('alarmTimeDisplay').textContent = formatAlarmTime(alarmTime);
    document.getElementById('alarmToggle').classList.toggle('active', alarmEnabled);

    // Update UI elements
    document.getElementById('appTitle').textContent = t('appTitle');
    document.getElementById('playText').textContent = t('playAarti');
    document.getElementById('collectionTitle').textContent = '🎵 ' + t('collection');
    document.getElementById('alarmTitle').textContent = t('alarm');
    document.getElementById('gmTitle').textContent = '🌅 ' + t('gmCard');
    document.getElementById('labelHome').textContent = t('home');
    document.getElementById('labelAarti').textContent = t('aarti');
    // document.getElementById('navAlarm').textContent = t('alarmNav'); // Removed
    document.getElementById('labelJapa').textContent = t('japa');
    document.getElementById('labelShare').textContent = t('share');
    document.getElementById('settingsTitle').textContent = t('settingsTitle');
    // document.getElementById('langSettingLabel').textContent = t('langLabel'); // Removed from HTML
    document.getElementById('alarmSettingLabel').textContent = t('alarmLabel');
    document.getElementById('daySettingLabel').textContent = t('dayLabel');
    document.querySelector('.settings-close').textContent = t('saveClose');

    renderAartiList();
    setupAudioEvents();
    renderAartiList();
    setupAudioEvents();
    checkAlarm();

    // Initialize Ads
    if (window.adService) {
        window.adService.initialize().then(() => {
            // Show banner ad after initialization
            window.adService.showBanner();
        }).catch(error => {
            console.log('[AdMob] Initialization or banner failed:', error);
        });
    }
}

function formatAlarmTime(time) {
    const [h, m] = time.split(':');
    const hour = parseInt(h);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${m} ${ampm}`;
}

function renderAartiList() {
    const langKey = 'name' + (currentLang === 'en' ? '' : currentLang.charAt(0).toUpperCase() + currentLang.slice(1));
    document.getElementById('aartiList').innerHTML = AARTIS.map(a => `
        <div class="aarti-item" id="item-${a.id}" onclick="playAarti('${a.id}')">
            <span class="aarti-emoji">${a.emoji}</span>
            <div class="aarti-info">
                <div class="aarti-name">${a[langKey] || a.name}</div>
                <div class="aarti-dur">🎵 ${t('aarti')}</div>
            </div>
            <button class="aarti-play" onclick="event.stopPropagation(); playAarti('${a.id}')">▶</button>
        </div>
    `).join('');
}

function setupAudioEvents() {
    audioPlayer.addEventListener('timeupdate', () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
    });
    audioPlayer.addEventListener('loadedmetadata', () => {
        document.getElementById('totalTime').textContent = formatTime(audioPlayer.duration);
    });
    audioPlayer.addEventListener('ended', nextAarti);
    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        document.getElementById('playPauseBtn').textContent = '⏸';
        document.getElementById('visualizer').classList.remove('paused');
    });
    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        document.getElementById('playPauseBtn').textContent = '▶';
        document.getElementById('visualizer').classList.add('paused');
    });
}

function formatTime(s) { const m = Math.floor(s / 60); const sec = Math.floor(s % 60); return `${m}:${sec.toString().padStart(2, '0')}`; }
function seekAudio(e) { const r = e.currentTarget.getBoundingClientRect(); audioPlayer.currentTime = ((e.clientX - r.left) / r.width) * audioPlayer.duration; }
function playHeroAarti() { if (currentAarti) playAarti(currentAarti.id); }

function playAarti(id) {
    const aarti = AARTIS.find(a => a.id === id);
    if (!aarti) return;

    const langKey = 'name' + (currentLang === 'en' ? '' : currentLang.charAt(0).toUpperCase() + currentLang.slice(1));
    const deityName = aarti[langKey] || aarti.name;

    let mantraText = '';
    if (currentLang === 'hi') mantraText = aarti.mantra;
    else if (currentLang === 'en') mantraText = aarti.mantraEn;
    else mantraText = aarti['mantra' + currentLang.charAt(0).toUpperCase() + currentLang.slice(1)] || aarti.mantraEn;

    currentAarti = aarti;
    document.getElementById('playerEmoji').textContent = aarti.emoji;
    document.getElementById('playerName').textContent = deityName;
    document.getElementById('playerMantra').textContent = mantraText;
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('currentTime').textContent = '0:00';
    document.getElementById('playerStatus').textContent = '🔔 ' + t('playing');
    document.getElementById('playerModal').classList.remove('hidden');
    document.querySelectorAll('.aarti-item').forEach(el => el.classList.remove('playing'));
    document.getElementById('item-' + id)?.classList.add('playing');
    audioPlayer.src = aarti.audio;
    audioPlayer.play().catch(e => console.error(e));
    showToast('🎵 ' + deityName);
}

function togglePlay() { isPlaying ? audioPlayer.pause() : audioPlayer.play(); }

function toggleRepeat() {
    const repeatBtn = document.getElementById('repeatBtn');
    audioPlayer.loop = !audioPlayer.loop;
    repeatBtn.style.opacity = audioPlayer.loop ? '1' : '0.5';
    repeatBtn.style.color = audioPlayer.loop ? '#FF6B35' : '#666';
    showToast(audioPlayer.loop ? '🔁 Repeat ON' : '🔁 Repeat OFF');
}

function nextAarti() { const idx = AARTIS.findIndex(a => a.id === currentAarti?.id); playAarti(AARTIS[(idx + 1) % AARTIS.length].id); }
function prevAarti() { const idx = AARTIS.findIndex(a => a.id === currentAarti?.id); playAarti(AARTIS[(idx - 1 + AARTIS.length) % AARTIS.length].id); }
function closePlayer() {
    document.getElementById('playerModal').classList.add('hidden');
    audioPlayer.pause();
    document.querySelectorAll('.aarti-item').forEach(el => el.classList.remove('playing'));

    // Show Interstitial on close
    if (window.adService) {
        window.adService.showInterstitial();
    }
}

// Alarm
function toggleAlarm() {
    alarmEnabled = !alarmEnabled;
    document.getElementById('alarmToggle').classList.toggle('active', alarmEnabled);
    saveSettings();
    showToast(alarmEnabled ? '⏰ Alarm ON' : '⏰ Alarm OFF');
}

function saveAlarmTime() {
    alarmTime = document.getElementById('alarmTimeInput').value;
    document.getElementById('alarmTimeDisplay').textContent = formatAlarmTime(alarmTime);
    saveSettings();
}

function checkAlarm() {
    setInterval(() => {
        if (!alarmEnabled) return;
        const now = new Date();
        const [h, m] = alarmTime.split(':');
        if (now.getHours() == h && now.getMinutes() == m && now.getSeconds() < 2) {
            playHeroAarti();
            showToast('🔔 ' + t('aartiTime'));
        }
    }, 1000);
}

// WhatsApp Share
async function shareWhatsApp() {
    const deity = currentAarti;
    const langKey = 'name' + (currentLang === 'en' ? '' : currentLang.charAt(0).toUpperCase() + currentLang.slice(1));
    const deityName = deity[langKey] || deity.name;

    let mantraText = '';
    if (currentLang === 'hi') mantraText = deity.mantra;
    else if (currentLang === 'en') mantraText = deity.mantraEn;
    else mantraText = deity['mantra' + currentLang.charAt(0).toUpperCase() + currentLang.slice(1)] || deity.mantraEn;

    const text = `🙏 ${t('goodMorning')} 🌅\n\n${deity.emoji} ${mantraText}\n\n${deityName}\n\n🕉️ ${t('jai')} Shri Ram 🙏`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Subah Ki Aarti',
                text: text
            });
            showToast('✅ Shared');
            return;
        } catch (err) {
            console.log('Share failed:', err);
        }
    }

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    showToast('📤 ' + t('openingWA'));
}

function downloadCard() {
    showToast('💾 ' + t('savingCard'));
    // In a real app, use html2canvas to capture the card
}

// Settings
function openSettings() {
    document.getElementById('settingsModal').classList.remove('hidden');
    // Update labels dynamically
    document.getElementById('settingsTitle').textContent = t('settingsTitle');

    // const langLbl = document.getElementById('langLabel');
    // if (langLbl) langLbl.textContent = t('langLabel');

    const alarmLbl = document.getElementById('alarmSettingLabel');
    if (alarmLbl) alarmLbl.textContent = t('alarmLabel');

    const dayLbl = document.getElementById('daySettingLabel');
    if (dayLbl) dayLbl.textContent = t('dayLabel');

    document.querySelector('.settings-close').textContent = t('saveClose');

    document.getElementById('alarmTimeInput').value = alarmTime;
    document.getElementById('langSelect').value = currentLang;

    renderDaySettings();
    renderRashiSettings();
}

function renderRashiSettings() {
    const select = document.getElementById('rashiSelect');
    if (!select) return; // Guard
    const currentRashis = RASHI_NAMES[currentLang] || RASHI_NAMES.en;
    select.innerHTML = `<option value="">${t('selectRashi')}</option>` +
        RASHI_NAMES.en.map((_, i) =>
            `<option value="${i}" ${userRashi === String(i) ? 'selected' : ''}>${RASHI_EMOJIS[i]} ${currentRashis[i]}</option>`
        ).join('');
    const label = document.getElementById('rashiLabel');
    if (label) label.textContent = t('rashi');
}

function saveRashi(val) {
    userRashi = val;
    localStorage.setItem('userRashi', val);
    renderHoroscope();
}

async function renderHoroscope() {
    const card = document.getElementById('horoscopeCard');
    if (!card) return;
    if (userRashi === '') {
        card.classList.add('hidden');
        return;
    }
    card.classList.remove('hidden');

    const rashiIndex = parseInt(userRashi);
    if (isNaN(rashiIndex)) return;

    // Show Localized Name & Emoji immediately
    document.getElementById('horoscopeEmoji').textContent = RASHI_EMOJIS[rashiIndex];
    document.getElementById('horoscopeTitle').textContent = t('horoscope');

    // Default to simulated prediction (Instant UI + Offline Fallback)
    const predictions = HOROSCOPE_PREDICTIONS[currentLang] || HOROSCOPE_PREDICTIONS.en;
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    const predIndex = (dayOfYear + rashiIndex) % predictions.length;

    const staticPrediction = predictions[predIndex];
    document.getElementById('horoscopeText').textContent = staticPrediction;

    // If English & Online, try to fetch real one
    if (currentLang === 'en' && navigator.onLine) {
        const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
        try {
            // Using a public proxy to access horoscope API to avoid CORS or simple failure
            const response = await fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${signs[rashiIndex]}&day=today`);
            const data = await response.json();
            if (data && data.data && data.data.horoscope_data) {
                document.getElementById('horoscopeText').textContent = data.data.horoscope_data;
            }
        } catch (e) {
            console.log("Horoscope fetch failed, keeping simulation");
        }
    }
}

function renderDaySettings() {
    const currentDays = DAYS_ALL[currentLang] || DAYS_ALL.en;
    const langKey = 'name' + (currentLang === 'en' ? '' : currentLang.charAt(0).toUpperCase() + currentLang.slice(1));

    document.getElementById('daySettingsList').innerHTML = DAYS.map((day, i) => `
        <div class="day-setting">
            <span class="day-label">${currentDays[i]}</span>
            <select class="day-select" onchange="updateDaySetting(${i}, this.value)">
                ${AARTIS.map(a => `<option value="${a.id}" ${dayDeities[i] === a.id ? 'selected' : ''}>${a.emoji} ${a[langKey] || a.name}</option>`).join('')}
            </select>
        </div>
    `).join('');
}

function updateDaySetting(dayIndex, aartiId) { dayDeities[dayIndex] = aartiId; saveSettings(); }
function closeSettings() { document.getElementById('settingsModal').classList.add('hidden'); initApp(); showToast('✅ ' + t('settingsSaved')); }

// Change Language from Settings
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    initApp();
    renderDaySettings();
    renderRashiSettings();
    renderShubhDin();
    showToast('🌐 ' + t('langChanged'));
}

// Bottom Nav
function showTab(tab, element) {
    // Handle view-based tabs
    if (tab === 'home' || tab === 'aarti' || tab === 'japa' || tab === 'share') {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        if (element) element.classList.add('active');
    }

    // Hide/show main sections
    const mainApp = document.getElementById('mainApp');
    const japaSection = document.getElementById('japaSection');

    if (tab === 'home') {
        mainApp.classList.remove('hidden');
        japaSection.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'aarti') {
        mainApp.classList.remove('hidden');
        japaSection.classList.add('hidden');
        document.getElementById('aartiList').scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'japa') {
        mainApp.classList.add('hidden');
        japaSection.classList.remove('hidden');
        renderJapa();
    } else if (tab === 'share') {
        shareWhatsApp();
    }
}

function showToast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2000); }

// ========== SHUBH DIN FUNCTIONS ==========
let shubhExpanded = false;

function renderShubhDin() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const guidance = SHUBH_GUIDANCE[dayOfWeek];

    // Level indicator
    const levelEmoji = guidance.level === 'excellent' ? '🟢' : (guidance.level === 'good' ? '🟡' : '🔴');
    document.getElementById('shubhIndicator').textContent = levelEmoji;

    // Title & Subtitle
    document.getElementById('shubhTitle').textContent = '✨ ' + t('shubhDin');
    document.getElementById('shubhSubtitle').textContent = t('shubhSubtitle');

    // Deity & Muhurat
    const deityName = currentLang === 'hi' ? guidance.deityHi : guidance.deity;
    document.getElementById('shubhDeity').textContent = '🙏 ' + t('worship') + ': ' + deityName;
    document.getElementById('shubhMuhurat').textContent = '⏰ ' + guidance.muhurat;

    // Expanded details
    // Update labels
    document.getElementById('donateLabel').textContent = '🎁 ' + t('donate') + ':';
    document.getElementById('fastLabel').textContent = '🍽️ ' + t('fastToday') + ':';
    document.getElementById('colorLabel').textContent = '🎨 ' + t('auspiciousColor') + ':';

    document.getElementById('shubhDonate').textContent = t(guidance.donate);
    document.getElementById('shubhFast').textContent = guidance.fast ? (t('yes') + ' ✓') : t('no');
    document.getElementById('shubhColor').textContent = t(guidance.color);

    // Upcoming Festival
    renderNextFestival();
}

function renderNextFestival() {
    const now = new Date();
    let nextFestival = null;
    let daysLeft = 0;

    for (const fest of FESTIVALS_2026) {
        const festDate = new Date(fest.date);
        if (festDate > now) {
            nextFestival = fest;
            daysLeft = Math.ceil((festDate - now) / (1000 * 60 * 60 * 24));
            break;
        }
    }

    if (nextFestival) {
        document.getElementById('shubhFestival').querySelector('.festival-emoji').textContent = nextFestival.emoji;
        document.getElementById('festivalName').textContent = currentLang === 'hi' ? nextFestival.nameHi : nextFestival.name;
        document.getElementById('festivalCountdown').textContent = daysLeft + ' ' + t('daysLeft');
    }
}

function toggleShubhExpand() {
    shubhExpanded = !shubhExpanded;
    const expandedSection = document.getElementById('shubhExpanded');
    const expandIcon = document.getElementById('shubhExpandIcon');

    if (shubhExpanded) {
        expandedSection.classList.remove('hidden');
        expandIcon.classList.add('rotated');
    } else {
        expandedSection.classList.add('hidden');
        expandIcon.classList.remove('rotated');
    }
}

// ========== JAPA COUNTER FUNCTIONS ==========
let japaCount = 0;
let japaRounds = 0;
let japaLastDate = '';

function loadJapaData() {
    japaCount = parseInt(localStorage.getItem('japaCount') || '0');
    japaRounds = parseInt(localStorage.getItem('japaRounds') || '0');
    japaLastDate = localStorage.getItem('japaLastDate') || '';

    // Reset if new day
    const today = new Date().toDateString();
    if (japaLastDate !== today) {
        japaCount = 0;
        japaRounds = 0;
        japaLastDate = today;
        saveJapaData();
    }
}

function saveJapaData() {
    localStorage.setItem('japaCount', japaCount.toString());
    localStorage.setItem('japaRounds', japaRounds.toString());
    localStorage.setItem('japaLastDate', japaLastDate);
}

function renderJapa() {
    loadJapaData();

    // Update count display
    document.getElementById('japaCount').textContent = japaCount;
    document.getElementById('japaRounds').textContent = t('totalRounds') + ': ' + japaRounds + ' ' + t('malaCount');
    document.getElementById('japaTitle').textContent = '📿 ' + t('japa');
    document.getElementById('tapInstruction').textContent = t('tapToCount');

    // Render mala beads
    renderMalaBeads();
}

function renderMalaBeads() {
    const beadsContainer = document.getElementById('malaBeads');
    beadsContainer.innerHTML = '';

    const totalBeads = 108;
    const radius = 120; // Distance from center

    for (let i = 0; i < totalBeads; i++) {
        const bead = document.createElement('div');
        bead.className = 'mala-bead' + (i < japaCount ? ' active' : '');

        // Position beads in a circle
        const angle = (i / totalBeads) * 2 * Math.PI - Math.PI / 2;
        const x = radius * Math.cos(angle) + radius;
        const y = radius * Math.sin(angle) + radius;

        bead.style.left = x + 'px';
        bead.style.top = y + 'px';

        beadsContainer.appendChild(bead);
    }
}

function incrementJapa() {
    japaCount++;

    // Haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }

    if (japaCount >= 108) {
        japaCount = 0;
        japaRounds++;
        showToast(t('malaComplete'));
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
        // Show Interstitial on Mala Complete
        if (window.adService) {
            window.adService.showInterstitial();
        }
    }

    japaLastDate = new Date().toDateString();
    saveJapaData();

    // Update display
    document.getElementById('japaCount').textContent = japaCount;
    document.getElementById('japaRounds').textContent = t('totalRounds') + ': ' + japaRounds + ' ' + t('malaCount');

    // Update beads
    renderMalaBeads();
}

function resetJapa() {
    japaCount = 0;
    saveJapaData();
    renderJapa();
    showToast('🔄 Reset');
}

// On Load
window.onload = function () {
    document.getElementById('bottomNav').classList.add('hidden');
    const saved = localStorage.getItem('lang');
    if (saved) {
        currentLang = saved;
        document.getElementById('langScreen').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        document.getElementById('bottomNav').classList.remove('hidden');
        initApp();
        renderShubhDin();
    }
};
