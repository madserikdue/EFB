self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('efb-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
        // Weitere Dateien wie Icons hier ergänzen
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
