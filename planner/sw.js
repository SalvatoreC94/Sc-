const CACHE='salvatore-planner-v2';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json','./sw.js','./theme.css'])))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();c.text().then(t=>{const u=t.replace('</head>','<link rel="stylesheet" href="theme.css"></head>');caches.open(CACHE).then(x=>x.put(e.request,new Response(u,{headers:{'Content-Type':'text/html'}})))});return new Response(r.body,r)}).catch(()=>caches.match(e.request)));return}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))})
