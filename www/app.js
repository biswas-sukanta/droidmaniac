/* ========================================
   SUBAH KI AARTI - MAIN APP
   With Offline Audio (Web Audio API)
   ======================================== */

// ========== AARTI DATA ==========
const AARTIS = [
    {
        id: 'ganesh',
        emoji: '🙏',
        nameKey: 'ganesh',
        duration: '2:00',
        mantra: 'Om Gan Ganapataye Namah',
        notes: [261.63, 293.66, 329.63, 349.23, 392.00], // C4 to G4
        tempo: 0.8
    },
    {
        id: 'lakshmi',
        emoji: '🪷',
        nameKey: 'lakshmi',
        duration: '2:00',
        mantra: 'Om Shreem Mahalakshmiyei Namah',
        notes: [293.66, 329.63, 349.23, 392.00, 440.00], // D4 to A4
        tempo: 0.7
    },
    {
        id: 'hanuman',
        emoji: '🐒',
        nameKey: 'hanuman',
        duration: '2:00',
        mantra: 'Om Hanumate Namah',
        notes: [329.63, 392.00, 440.00, 493.88, 523.25], // E4 to C5
        tempo: 0.9
    },
    {
        id: 'shiva',
        emoji: '🔱',
        nameKey: 'shiva',
        duration: '2:00',
        mantra: 'Om Namah Shivaya',
        notes: [196.00, 220.00, 246.94, 261.63, 293.66], // G3 to D4
        tempo: 0.6
    },
    {
        id: 'durga',
        emoji: '🦁',
        nameKey: 'durga',
        duration: '2:00',
        mantra: 'Om Dum Durgayei Namah',
        notes: [349.23, 392.00, 440.00, 493.88, 523.25], // F4 to C5
        tempo: 0.85
    },
    {
        id: 'vishnu',
        emoji: '🧘',
        nameKey: 'vishnu',
        duration: '2:00',
        mantra: 'Om Namo Bhagavate Vasudevaya',
        notes: [261.63, 329.63, 392.00, 440.00, 523.25], // C4 to C5
        tempo: 0.75
    }
];

// Day-based deities
const DAY_DEITIES = {
    0: 'vishnu',   // Sunday
    1: 'shiva',    // Monday
    2: 'hanuman',  // Tuesday
    3: 'ganesh',   // Wednesday
    4: 'vishnu',   // Thursday
    5: 'lakshmi',  // Friday
    6: 'shiva'     // Saturday
};

// Tithi names
const TITHIS = [
    'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
    'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
    'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima'
];

// ========== APP STATE ==========
let currentLang = 'en';
let currentAarti = null;
let isPlaying = false;
let audioContext = null;
let gainNode = null;
let playbackInterval = null;
let noteIndex = 0;
let startTime = 0;
let alarms = [];

// ========== DOM READY ==========
document.addEventListener('DOMContentLoaded', init);

function init() {
    // Check if first time (show language selection)
    const savedLang = localStorage.getItem('appLanguage');
    if (!savedLang) {
        showLanguageOverlay();
    } else {
        currentLang = savedLang;
        hideLanguageOverlay();
        startApp();
    }

    setupEventListeners();
}

// ========== AUDIO CONTEXT INIT ==========
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
        gainNode.gain.value = 0.5;
    }
    // Resume if suspended
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

// ========== LANGUAGE SELECTION ==========
function showLanguageOverlay() {
    document.getElementById('languageOverlay').classList.remove('hidden');
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('app').classList.add('hidden');
}

function hideLanguageOverlay() {
    document.getElementById('languageOverlay').classList.add('hidden');
}

function selectLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLanguage', lang);
    hideLanguageOverlay();

    // Show splash then app
    document.getElementById('splash').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('splash').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        startApp();
    }, 2000);
}

// ========== START APP ==========
function startApp() {
    applyTranslations();
    updateDate();
    updatePanchang();
    setTodaysDeity();
    renderAartiList();
    renderGoodMorningCard();
    loadAlarms();
    updateCurrentLangDisplay();
}

// ========== DATE & PANCHANG ==========
function updateDate() {
    const today = new Date();
    const months = ['january', 'february', 'march', 'april', 'may', 'june',
        'july', 'august', 'september', 'october', 'november', 'december'];
    const monthName = t(months[today.getMonth()]);
    document.getElementById('currentDate').textContent =
        `${today.getDate()} ${monthName}, ${today.getFullYear()}`;
}

function updatePanchang() {
    const today = new Date();
    const dayOfMonth = today.getDate();
    const tithiIndex = dayOfMonth % 15;

    document.getElementById('tithiValue').textContent = TITHIS[tithiIndex];
    document.getElementById('pakshaValue').textContent = dayOfMonth <= 15 ? t('shukla') : t('krishna');

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    document.getElementById('dayValue').textContent = t(days[today.getDay()]);
}

function setTodaysDeity() {
    const today = new Date();
    const deityId = DAY_DEITIES[today.getDay()];
    const aarti = AARTIS.find(a => a.id === deityId) || AARTIS[0];

    document.getElementById('deityCircle').querySelector('.deity-icon').textContent = aarti.emoji;
    document.getElementById('deityName').textContent = t(aarti.nameKey);
    document.getElementById('deityMantra').textContent = aarti.mantra;

    currentAarti = aarti;
}

// ========== AARTI LIST ==========
function renderAartiList() {
    const list = document.getElementById('aartiList');
    list.innerHTML = AARTIS.map(aarti => `
        <div class="aarti-item" data-id="${aarti.id}">
            <div class="aarti-thumb">${aarti.emoji}</div>
            <div class="aarti-info">
                <div class="aarti-name">${t(aarti.nameKey)}</div>
                <div class="aarti-duration">${aarti.duration}</div>
            </div>
            <button class="aarti-play" onclick="playAarti('${aarti.id}')">▶</button>
        </div>
    `).join('');
}

// ========== OFFLINE AUDIO PLAYER (Web Audio API) ==========
function playAarti(aartiId) {
    const aarti = AARTIS.find(a => a.id === aartiId);
    if (!aarti) return;

    currentAarti = aarti;

    // Update player modal
    document.getElementById('playerArtwork').textContent = aarti.emoji;
    document.getElementById('playerTitle').textContent = t(aarti.nameKey);
    document.getElementById('playerSubtitle').textContent = aarti.mantra;
    document.getElementById('totalTime').textContent = aarti.duration;
    document.getElementById('currentTime').textContent = '0:00';
    document.getElementById('progressSlider').value = 0;

    // Show modal
    openModal('playerModal');

    // Initialize audio context (must be after user gesture)
    initAudioContext();

    // Start playing
    startPlayback(aarti);

    showToast(`🎵 ${t(aarti.nameKey)}`);

    // Highlight playing item
    document.querySelectorAll('.aarti-item').forEach(el => el.classList.remove('playing'));
    document.querySelector(`.aarti-item[data-id="${aartiId}"]`)?.classList.add('playing');
}

function startPlayback(aarti) {
    stopPlayback(); // Stop any existing playback

    isPlaying = true;
    noteIndex = 0;
    startTime = Date.now();
    updatePlayPauseBtn();

    // Play notes in sequence
    playNextNote(aarti);

    // Update progress
    playbackInterval = setInterval(() => {
        if (!isPlaying) return;

        const elapsed = (Date.now() - startTime) / 1000;
        const duration = 120; // 2 minutes
        const progress = Math.min((elapsed / duration) * 100, 100);

        document.getElementById('progressSlider').value = progress;
        document.getElementById('currentTime').textContent = formatTime(elapsed);

        if (elapsed >= duration) {
            stopPlayback();
        }
    }, 500);
}

function playNextNote(aarti) {
    if (!isPlaying || !audioContext) return;

    const notes = aarti.notes;
    const note = notes[noteIndex % notes.length];

    // Play temple bell sound
    playBellNote(note, 0.5);

    // Also play harmonic
    setTimeout(() => {
        if (isPlaying) playBellNote(note * 2, 0.3);
    }, 100);

    noteIndex++;

    // Schedule next note
    const interval = aarti.tempo * 1000;
    if (isPlaying) {
        setTimeout(() => playNextNote(aarti), interval);
    }
}

function playBellNote(frequency, volume) {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const noteGain = audioContext.createGain();

    // Temple bell uses sine wave with harmonics
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;

    noteGain.gain.setValueAtTime(volume, audioContext.currentTime);
    noteGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 2);

    oscillator.connect(noteGain);
    noteGain.connect(gainNode);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 2);
}

function stopPlayback() {
    isPlaying = false;
    if (playbackInterval) {
        clearInterval(playbackInterval);
        playbackInterval = null;
    }
    updatePlayPauseBtn();
}

function togglePlayPause() {
    if (isPlaying) {
        stopPlayback();
    } else if (currentAarti) {
        initAudioContext();
        startPlayback(currentAarti);
    }
}

function updatePlayPauseBtn() {
    const btn = document.getElementById('playPauseBtn');
    if (btn) btn.textContent = isPlaying ? '⏸' : '▶';
}

function playNextAarti() {
    if (!currentAarti) return;
    const currentIndex = AARTIS.findIndex(a => a.id === currentAarti.id);
    const nextIndex = (currentIndex + 1) % AARTIS.length;
    playAarti(AARTIS[nextIndex].id);
}

function playPrevAarti() {
    if (!currentAarti) return;
    const currentIndex = AARTIS.findIndex(a => a.id === currentAarti.id);
    const prevIndex = (currentIndex - 1 + AARTIS.length) % AARTIS.length;
    playAarti(AARTIS[prevIndex].id);
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ========== GOOD MORNING CARD ==========
function renderGoodMorningCard() {
    const canvas = document.getElementById('gmCanvas');
    const ctx = canvas.getContext('2d');
    const aarti = currentAarti || AARTIS[0];

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#FF6B35');
    gradient.addColorStop(0.5, '#FF9933');
    gradient.addColorStop(1, '#FFD700');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Decorative pattern
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    for (let i = 0; i < canvas.width; i += 30) {
        for (let j = 0; j < canvas.height; j += 30) {
            ctx.beginPath();
            ctx.arc(i, j, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Deity emoji - larger and centered
    ctx.font = '100px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(aarti.emoji, canvas.width / 2, 130);

    // Good morning text with shadow
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'white';
    ctx.font = 'bold 42px Arial';
    ctx.fillText(t('shubhPrabhat'), canvas.width / 2, 200);
    ctx.shadowBlur = 0;

    // Mantra
    ctx.font = '22px Arial';
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.fillText(aarti.mantra, canvas.width / 2, 250);

    // Decorative line
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 280);
    ctx.lineTo(300, 280);
    ctx.stroke();

    // Date
    const today = new Date();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const months = ['january', 'february', 'march', 'april', 'may', 'june',
        'july', 'august', 'september', 'october', 'november', 'december'];
    const dateStr = `${t(days[today.getDay()])}, ${today.getDate()} ${t(months[today.getMonth()])}`;
    ctx.font = '18px Arial';
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fillText(dateStr, canvas.width / 2, 320);

    // App watermark
    ctx.font = '14px Arial';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText('🕉️ ' + t('appName'), canvas.width / 2, 375);
}

function downloadCard() {
    const canvas = document.getElementById('gmCanvas');
    const link = document.createElement('a');
    link.download = `shubh-prabhat-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast(t('cardDownloaded'));
}

function shareCardWhatsApp() {
    showToast(t('sharingCard'));

    const aarti = currentAarti || AARTIS[0];
    const text = encodeURIComponent(
        `🙏 ${t('shubhPrabhat')} 🙏\n\n` +
        `${aarti.mantra}\n\n` +
        `📲 ${t('appName')}`
    );

    window.open(`https://wa.me/?text=${text}`, '_blank');
}

// ========== ALARM FUNCTIONS ==========
function loadAlarms() {
    alarms = JSON.parse(localStorage.getItem('alarms') || '[]');
}

function saveAlarm() {
    const hour = parseInt(document.getElementById('hourInput').value) || 5;
    const minute = parseInt(document.getElementById('minuteInput').value) || 30;
    const ampm = document.getElementById('ampmSelect').value;
    const aartiId = document.getElementById('alarmAartiSelect').value;

    const selectedDays = [];
    document.querySelectorAll('.day-chip.active').forEach(chip => {
        selectedDays.push(parseInt(chip.dataset.day));
    });

    if (selectedDays.length === 0) {
        showToast('Select at least one day');
        return;
    }

    const alarm = {
        id: Date.now(),
        hour, minute, ampm, aartiId, days: selectedDays, enabled: true
    };

    alarms.push(alarm);
    localStorage.setItem('alarms', JSON.stringify(alarms));

    closeModal('alarmModal');
    showToast(t('alarmSet'));

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// ========== MODALS ==========
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');

    // Stop audio if closing player
    if (modalId === 'playerModal') {
        stopPlayback();
        document.querySelectorAll('.aarti-item').forEach(el => el.classList.remove('playing'));
    }
}

// ========== TOAST ==========
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========== SETTINGS ==========
function updateCurrentLangDisplay() {
    document.getElementById('currentLangName').textContent = LANGUAGE_NAMES[currentLang] || 'English';
}

function openLanguageChangeModal() {
    closeModal('settingsModal');
    showLanguageOverlay();

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.onclick = () => {
            selectLanguage(btn.dataset.lang);
        };
    });
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Language selection buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => selectLanguage(btn.dataset.lang));
    });

    // Hero play button
    document.getElementById('heroPlayBtn').addEventListener('click', () => {
        if (currentAarti) playAarti(currentAarti.id);
    });

    // Alarm button
    document.getElementById('alarmBtn').addEventListener('click', () => openModal('alarmModal'));

    // Share card button
    document.getElementById('shareCardBtn').addEventListener('click', () => {
        document.getElementById('gmSection').scrollIntoView({ behavior: 'smooth' });
    });

    // Download button
    document.getElementById('downloadBtn').addEventListener('click', downloadCard);

    // WhatsApp button
    document.getElementById('whatsappBtn').addEventListener('click', shareCardWhatsApp);

    // Refresh card button
    document.getElementById('refreshCardBtn').addEventListener('click', () => {
        currentAarti = AARTIS[Math.floor(Math.random() * AARTIS.length)];
        renderGoodMorningCard();
        showToast('Card updated!');
    });

    // Settings button
    document.getElementById('settingsBtn').addEventListener('click', () => openModal('settingsModal'));

    // Close settings
    document.getElementById('closeSettingsBtn').addEventListener('click', () => closeModal('settingsModal'));

    // Language setting
    document.getElementById('languageSetting').addEventListener('click', openLanguageChangeModal);

    // Player controls
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
    document.getElementById('prevBtn').addEventListener('click', playPrevAarti);
    document.getElementById('nextBtn').addEventListener('click', playNextAarti);
    document.getElementById('closePlayerBtn').addEventListener('click', () => closeModal('playerModal'));

    // Alarm modal
    document.getElementById('cancelAlarmBtn').addEventListener('click', () => closeModal('alarmModal'));
    document.getElementById('saveAlarmBtn').addEventListener('click', saveAlarm);

    // Day chips toggle
    document.querySelectorAll('.day-chip').forEach(chip => {
        chip.addEventListener('click', () => chip.classList.toggle('active'));
    });

    // Modal backdrop clicks
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', () => {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModal(modal.id);
            });
        });
    });

    // Bottom navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const page = btn.dataset.page;
            switch (page) {
                case 'home':
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                case 'alarm':
                    openModal('alarmModal');
                    break;
                case 'aarti':
                    document.querySelector('.aarti-section').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'settings':
                    openModal('settingsModal');
                    break;
            }
        });
    });

    // Input validation
    document.getElementById('hourInput').addEventListener('change', (e) => {
        let val = parseInt(e.target.value) || 5;
        val = Math.min(12, Math.max(1, val));
        e.target.value = val;
    });

    document.getElementById('minuteInput').addEventListener('change', (e) => {
        let val = parseInt(e.target.value) || 0;
        val = Math.min(59, Math.max(0, val));
        e.target.value = val.toString().padStart(2, '0');
    });

    // Progress slider seek
    document.getElementById('progressSlider').addEventListener('input', (e) => {
        // For synthesized audio, we can restart from position
        // but for simplicity, we'll just update display
    });
}

// Make functions global for onclick handlers
window.playAarti = playAarti;
