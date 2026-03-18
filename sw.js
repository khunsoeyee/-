const cacheName = 'pyo-prayer-v2';
const assets = [
  './',
  './index.html',
  './logo.png',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
