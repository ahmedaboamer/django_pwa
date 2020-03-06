/*
service worker is caching base.html file at the time of install event
When the user requests for homepage i.e. when the user hits homepage of website '/'
service worker gets match that requested url is '/' and responds to that request
by serving cached base.html file to the user.
Even if the user is offline, he will be served by cached response from service worker.
*/

var staticCacheName = 'django_pwa-v1';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll([
                '/base_layout'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    var requestUrl = new URL(event.request.url);
    if (requestUrl.origin === location.origin) {
        if ((requestUrl.pathname === '/')) {
            event.respondWith(caches.match('/base_layout'));
            return;
        }
    }
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});