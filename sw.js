var cacheName = 'pwa2-v1';

var filesToCache = [
  '/pwa2/',
  '/pwa2/index.html',
  '/pwa2/manifest.json',
  '/pwa2/lib1.js',
  '/pwa2/lib2.js',
  '/pwa2/hola.jpg',
  '/pwa2/unicorn.jpg',
  '/pwa2/utp.png',
  '/pwa2/iconos/homescreen144.png',
  '/pwa2/iconos/homescreen192.png'
];

// Instalación
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        console.log('Service Worker: Archivos cacheados');
        return cache.addAll(filesToCache);
      })
  );
});

// Activación
self.addEventListener('activate', event => {
  console.log('Service Worker: Activado');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== cacheName) {
            console.log('Service Worker: Caché antiguo eliminado:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Interceptar peticiones
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
