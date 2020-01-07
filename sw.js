var staticCacheName = "portfolio-cache-v1";

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        "/",
        "css/main.css",
        "js/scripts.js",
        "img/logo.svg"
      ]);
    })
  );
});

// // activate event
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(cacheName) {
            return (
              cacheName.startsWith("portfolio-") && cacheName != staticCacheName
            );
          })
          .filter(function(cacheName) {
            return cache.delete(cacheName);
          })
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
