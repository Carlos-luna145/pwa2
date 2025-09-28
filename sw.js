// Nombre del caché
var cacheName = 'pwa2-v1';

// Archivos a cachear (ajústalos a lo que tengas en tu proyecto)
var filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/lib1.js',
  '/lib2.js',
  '/hola.jpg',
  '/unicorn.jpg',
  '/utp.jpg',
  '/iconos/homescreen144.png',
  '/iconos/homescreen192.png'
];

// Evento INSTALL → se cachean los archivos
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

// Evento ACTIVATE → limpia cachés viejos
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

// Evento FETCH → responde desde caché si existe, si no, va a la red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
