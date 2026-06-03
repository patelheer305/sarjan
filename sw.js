self.addEventListener('install', () => {
  console.log('Vishwakarma Cut Optimizer PWA installed');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});