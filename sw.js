self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tic-tac-toe-v2").then(cache => {
      return cache.addAll([
        "./",
        "./tic-tac-toe.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
