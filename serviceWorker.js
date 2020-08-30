const version = "1.0.0";
const cacheName = `mobile-ambiente-${version}`;
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache
        .addAll([
          "/inspiration.html",
          "https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js",
          "/semantic/dist/semantic.min.css",
          "/semantic/dist/semantic.min.js",
          "/style.css",
          "/script.js"
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
