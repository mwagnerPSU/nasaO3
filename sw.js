if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const d=e=>i(e,r),f={module:{uri:r},exports:s,require:d};t[r]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(o(...e),s)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"5357705b.js",revision:"f0127e26896150b2b827597f1eafe73f"},{url:"index.html",revision:"9d1579a014bd62d7b80e99dbf7b4b0ea"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
