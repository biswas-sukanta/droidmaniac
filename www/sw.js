// Service Worker for Subah Ki Aarti
const CACHE_NAME = 'subah-ki-aarti-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch from cache, fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Handle alarm notifications
self.addEventListener('push', (event) => {
    const options = {
        body: event.data?.text() || 'आरती का समय हो गया! 🙏',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        vibrate: [200, 100, 200, 100, 200],
        tag: 'aarti-alarm',
        requireInteraction: true,
        actions: [
            { action: 'play', title: '🎵 आरती सुनें' },
            { action: 'dismiss', title: '❌ बंद करें' }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('🕉️ सुबह की आरती', options)
    );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'play') {
        event.waitUntil(
            clients.openWindow('/?action=play')
        );
    } else {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});
