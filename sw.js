if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const c=e=>r(e,o),f={module:{uri:o},exports:s,require:c};i[o]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(t(...e),s)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"067cf8fd.js",revision:"fa01883ecd8d3c57e8f6d238851851b4"},{url:"93f4a05a.js",revision:"2016ebc5543165de9a57cb2eb797ccc6"},{url:"eeca795f.js",revision:"8889e5db04add9a97662e4ffcb00550e"},{url:"index.html",revision:"1fdbaf743ee85700024fbe2271244ea6"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map