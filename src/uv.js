importScripts('/src/uv/uv.bundle.js');
importScripts('/src/uv/uv.config.js');
importScripts('/src/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));