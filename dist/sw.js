var serviceWorkerOption = {"assets":["/fonts/MaterialIcons-Regular.eot","/fonts/MaterialIcons-Regular.woff2","/fonts/MaterialIcons-Regular.woff","/fonts/MaterialIcons-Regular.ttf","/bundle.b647a320d31e5f3f512d.js","/vendor.6e14cf377aa76a04d067.js","/vendors.1b5e1fa0aac2942cc69a.js","/manifest.c4dff51b53d1866d94fe.js","/index.html"]};
        
        !function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n){var t=[resolve("./index.js")];self.addEventListener("install",function(e){console.log("[ServiceWorker] Install"),e.waitUntil(caches.open("essential-pwa-1").then(function(e){return fetch("assets-manifest.json").then(function(e){console.log(e.json())}),console.log("[ServiceWorker] Caching app shell"),e.addAll(t)}))}),self.addEventListener("activate",function(e){return console.log("[ServiceWorker] Activate"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if("essential-pwa-1"!==e)return console.log("[ServiceWorker] Removing old cache",e),caches.delete(e)}))})),self.clients.claim()})}]);
//# sourceMappingURL=sw.js.map