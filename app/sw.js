const CACHE_NAME = 'essential-pwa-1';

const { assets } = global.serviceWorkerOption;

let assetsToCache = [
	...assets, './'
];

assetsToCache = assetsToCache.map(function (path) {
	return new URL(path, global.location).toString();
});

self.addEventListener('install', function (e) {
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		global.caches
			.open(CACHE_NAME)
			.then(function (cache) {
				return cache.addAll(assetsToCache);
			})
	);
});

self.addEventListener('activate', function(e) {
  	console.log('[ServiceWorker] Activate');
  	e.waitUntil(
  		caches.keys().then(function (keyList) {
  			return Promise.all(keyList.map(function (key) {
  				if(key !== CACHE_NAME) {
  					console.log('[ServiceWorker] Removing old cache', key);
  					return caches.delete(key);
  				}
  			}));
  		})
  	);

  	return self.clients.claim();
});