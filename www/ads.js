
import { AdMob, BannerAdSize, BannerAdPosition, AdMobError } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class AdService {
    constructor() {
        this.initialized = false;
        // REAL ADMOB IDs - Your Production IDs
        this.bannerId = 'ca-app-pub-2741030797817344/6951856770'; // Your Banner ID
        this.interstitialId = 'ca-app-pub-2741030797817344/1041054547'; // Your Interstitial ID
        this.appId = 'ca-app-pub-2741030797817344~1056522529'; // Your App ID
    }

    async initialize() {
        if (!Capacitor.isNativePlatform()) {
            DebugLogger.log('AdMob not supported on web/browser');
            return;
        }

        DebugLogger.log('Starting AdMob initialization...');
        try {
            await AdMob.initialize({
                testingDevices: ['YOUR-DEVICE-ID'],
                initializeForTesting: true,
            });
            this.initialized = true;
            DebugLogger.log('✓ AdMob initialized successfully', 'success');
            this.showBanner();
        } catch (e) {
            DebugLogger.log('✗ AdMob initialization failed: ' + e.message, 'error');
            console.error('[AdMob] ✗ Initialization failed:', e);
        }
    }

    async showBanner() {
        if (!this.initialized) {
            DebugLogger.log('Cannot show banner: Not initialized', 'warning');
            return;
        }

        DebugLogger.log('Loading banner ad...');
        try {
            const options = {
                adId: this.bannerId,
                adSize: BannerAdSize.BANNER,
                position: BannerAdPosition.TOP_CENTER, // Changed to TOP to avoid bottom nav overlap
                margin: 0,
                isTesting: false // Using real ads now
            };
            await AdMob.showBanner(options);
            DebugLogger.log('✓ Banner ad showing at top', 'success');
        } catch (e) {
            DebugLogger.log('✗ Banner failed: ' + e.message, 'error');
            console.error('[AdMob] ✗ Failed to show banner:', e);
        }
    }

    async hideBanner() {
        try {
            await AdMob.hideBanner();
        } catch (e) {
            console.error('Failed to hide banner', e);
        }
    }

    async prepareInterstitial() {
        DebugLogger.log('Preparing interstitial ad...');
        try {
            await AdMob.prepareInterstitial({
                adId: this.interstitialId,
                isTesting: false // Using real ads
            });
            DebugLogger.log('✓ Interstitial loaded', 'success');
        } catch (e) {
            DebugLogger.log('✗ Interstitial prep failed: ' + e.message, 'error');
            console.error('[AdMob] ✗ Failed to prepare interstitial:', e);
        }
    }

    async showInterstitial() {
        if (!this.initialized) {
            DebugLogger.log('Cannot show interstitial: Not initialized', 'warning');
            return false;
        }

        DebugLogger.log('Attempting to show interstitial...');
        try {
            await AdMob.showInterstitial();
            DebugLogger.log('✓ Interstitial shown', 'success');
            // Prepare next interstitial for future use
            setTimeout(() => this.prepareInterstitial(), 1000);
            return true;
        } catch (e) {
            DebugLogger.log('✗ Interstitial show failed: ' + e.message, 'error');
            console.error('[AdMob] ✗ Failed to show interstitial:', e);
            return false;
        }
    }
}

// Debug Logger for on-screen debugging
class DebugLogger {
    static init() {
        if (document.getElementById('debug-panel')) return;

        const panel = document.createElement('div');
        panel.id = 'debug-panel';
        panel.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            width: 300px;
            max-height: 400px;
            background: rgba(0, 0, 0, 0.9);
            color: #0f0;
            font-family: monospace;
            font-size: 11px;
            padding: 10px;
            border-radius: 8px;
            overflow-y: auto;
            z-index: 99999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        `;

        const title = document.createElement('div');
        title.textContent = '🔍 AdMob Debug';
        title.style.cssText = 'font-weight: bold; margin-bottom: 8px; color: #fff; border-bottom: 1px solid #333; padding-bottom: 5px;';
        panel.appendChild(title);

        const logs = document.createElement('div');
        logs.id = 'debug-logs';
        panel.appendChild(logs);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕';
        closeBtn.style.cssText = `
            position: absolute;
            top: 5px;
            right: 5px;
            background: #f00;
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            cursor: pointer;
            font-size: 12px;
            line-height: 1;
        `;
        closeBtn.onclick = () => panel.style.display = 'none';
        panel.appendChild(closeBtn);

        document.body.appendChild(panel);
    }

    static log(message, type = 'info') {
        DebugLogger.init();
        const logs = document.getElementById('debug-logs');
        if (!logs) return;

        const entry = document.createElement('div');
        entry.style.cssText = 'margin: 3px 0; padding: 3px; border-left: 2px solid';

        const colors = {
            success: '#0f0',
            error: '#f00',
            warning: '#ff0',
            info: '#0ff'
        };

        entry.style.borderColor = colors[type] || colors.info;
        entry.style.color = colors[type] || colors.info;

        const time = new Date().toLocaleTimeString();
        entry.textContent = `[${time}] ${message}`;

        logs.appendChild(entry);
        logs.scrollTop = logs.scrollHeight;

        // Keep only last 20 messages
        while (logs.children.length > 20) {
            logs.removeChild(logs.firstChild);
        }
    }
}

// Initialize debug panel on load
if (Capacitor.isNativePlatform()) {
    document.addEventListener('DOMContentLoaded', () => {
        DebugLogger.init();
        DebugLogger.log('Debug panel ready', 'success');
    });
}

// Global instance
window.adService = new AdService();
DebugLogger.log('AdService created');
console.log('[AdMob] AdService global instance created');
