if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise(async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()})),i.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},i=(i,r)=>{Promise.all(i.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(i)};self.define=(i,s,n)=>{r[i]||(r[i]=Promise.resolve().then(()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map(i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}})).then(e=>{const i=n(...e);return r.default||(r.default=i),r})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"icons/android-chrome-192x192.png",revision:"a951ebf95fa97457ead5e239ce742552"},{url:"icons/android-chrome-512x512.png",revision:"907ec276a625a9f313d4c78105d2a66d"},{url:"icons/apple-touch-icon.png",revision:"0c73afcb751ad3c5e50d9f463c1cfd23"},{url:"icons/browserconfig.xml",revision:"623f9c26c95e0c8d13c035da46e7aa81"},{url:"icons/favicon-16x16.png",revision:"78c7f63e0fe6e30bb4350d0d4907aece"},{url:"icons/favicon-32x32.png",revision:"32b2bd1ea2e0e3c9ad0773b63d312e35"},{url:"icons/favicon.ico",revision:"c0f5006f0fbaa3c08bc5ceed00ec02fb"},{url:"icons/mstile-144x144.png",revision:"3362308adfd5934eb68cdf5795839d64"},{url:"icons/mstile-150x150.png",revision:"148dd477675faf59c2e7ccbb69c3fdf4"},{url:"icons/mstile-310x150.png",revision:"a33b6c80d9f7df79b9b1b3e7f0604b02"},{url:"icons/mstile-310x310.png",revision:"91fb5c7084f5fe51e97823db4af8d88e"},{url:"icons/safari-pinned-tab.svg",revision:"0d80ba0e181b91fef152112676f70d02"},{url:"icons/site.webmanifest",revision:"80ea42adfa02b3e8a3162fb2740df023"},{url:"index.html",revision:"1a104a15b8c609dd29cf3f4376d89677"},{url:"inspiration.html",revision:"6b5f39284e13ee62c997d85a17d11519"},{url:"robots.txt",revision:"3232b487bd3e2451b8ca71e4e7d1af2f"},{url:"script.js",revision:"3bee8af7379d50dc83e11585ce214c5d"},{url:"sitemap.xml",revision:"864355b3f58174b6b818f51810d42eda"},{url:"style.css",revision:"c1a023f1eb648075ea1b61f635d5328d"},"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css","/docs/index.html","https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js",{url:"icons/mstile-70x70.png",revision:"47b328d5d73dd9d5b71db36469c07486"}],{})}));
