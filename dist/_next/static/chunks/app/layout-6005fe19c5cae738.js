(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7841:function(e,t,n){Promise.resolve().then(n.t.bind(n,212,23)),Promise.resolve().then(n.bind(n,829)),Promise.resolve().then(n.bind(n,9112)),Promise.resolve().then(n.bind(n,4738)),Promise.resolve().then(n.bind(n,1944)),Promise.resolve().then(n.t.bind(n,4724,23)),Promise.resolve().then(n.t.bind(n,4244,23))},9112:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),a=n(504),o=n(2759),i=n(2265);function l(){let[e,t]=(0,i.useState)(!1),n=()=>{let e=document.body.scrollTop||document.documentElement.scrollTop;e>250?t(!0):t(!1)};return(0,i.useEffect)(()=>(window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)),[]),(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)("div",{className:"pe-5 mb-5 me-4 position-fixed bottom-0 end-0",children:(0,r.jsx)("button",{className:"btn btn-link p-0 z-5",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},children:(0,r.jsx)(a.G,{icon:o.M3_,size:"2x"})})})})}},829:function(e,t,n){"use strict";n.r(t);var r=n(7437),a=n(2265),o=n(4033),i=n(8475),l=n.n(i);t.default=(0,a.memo)(()=>{let e=(0,o.usePathname)(),t=(0,o.useSearchParams)();return(0,a.useEffect)(()=>{let n=e+t.toString();window.gtag("config","",{page_path:n})},[e,t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat("")}),(0,r.jsx)(l(),{strategy:"afterInteractive",id:"ga",children:"\n            window.dataLayer = window.dataLayer || [];\n\n            function gtag() {\n              dataLayer.push(arguments);\n            }\n\n            gtag('js', new Date());\n\n            gtag('config', '".concat("","', {\n              page_path: window.location.pathname,\n            });\n          ")})]})})},4738:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),a=n(1396),o=n.n(a);let i=()=>{setTimeout(()=>{document.getElementById("menu").classList.remove("show"),document.getElementsByClassName("navbar-toggler")[0].classList.add("collapsed")},500)};function l(){return(0,r.jsx)("nav",{className:"navbar navbar-expand-lg bg-white container-fluid py-3",children:(0,r.jsxs)("div",{className:"container-fluid px-2 px-sm-4 px-xl-5 px-md-5 px-lg-5",children:[(0,r.jsx)(o(),{href:"/",className:"navbar-brand logo-text",children:"Hiren Chhatbar"}),(0,r.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#menu","aria-controls":"menu","aria-expanded":"false","aria-label":"Toggle navigation",children:[(0,r.jsx)("span",{className:"toggler-icon top-bar"}),(0,r.jsx)("span",{className:"toggler-icon middle-bar"}),(0,r.jsx)("span",{className:"toggler-icon bottom-bar"})]}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"menu",children:(0,r.jsxs)("ul",{className:"navbar-nav ms-auto gap-3",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(o(),{href:"/",className:"nav-link",onClick:i,children:"Home"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(o(),{href:"/about",className:"nav-link",onClick:i,children:"About"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(o(),{href:"/experience",className:"nav-link",onClick:i,children:"Experience"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(o(),{href:"/portfolio",className:"nav-link",onClick:i,children:"Portfolio"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(o(),{href:"/contact",className:"nav-link",onClick:i,children:"Contact"})}),(0,r.jsx)("li",{className:"nav-item d-none",children:(0,r.jsx)("a",{href:"https://www.hirenchhatbar.com/blog/",className:"nav-link",children:"Blog"})})]})})]})})}},1944:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7437),a=n(504),o=n(2759),i=n(2265);/*! js-cookie v3.0.5 | MIT */function l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var s=function e(t,n){function r(e,r,a){if("undefined"!=typeof document){"number"==typeof(a=l({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var i in a)a[i]&&(o+="; "+i,!0!==a[i]&&(o+="="+a[i].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+o}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},a=0;a<n.length;a++){var o=n[a].split("="),i=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(r[l]=t.read(i,l),e===l)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){r(e,"",l({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,l({},this.attributes,t))},withConverter:function(t){return e(l({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});function c(){let[e,t]=(0,i.useState)("".concat("white"));return(0,i.useEffect)(()=>{var e;let n=null!==(e=s.get("theme"))&&void 0!==e?e:"".concat("white");document.querySelector("body").setAttribute("data-bs-theme",n),t(n)},[]),(0,r.jsx)("div",{className:"btn-group",children:(0,r.jsx)("button",{onClick:()=>{let e="".concat("white")===document.querySelector("body").getAttribute("data-bs-theme")?"dark":"".concat("white");document.querySelector("body").setAttribute("data-bs-theme",e),t(e),s.set("theme",e,{expires:365})},className:"btn btn-link",children:"".concat("white")===e?(0,r.jsx)(a.G,{icon:o.DBF,size:"lg"}):(0,r.jsx)(a.G,{icon:o.enB,size:"lg"})})})}},3443:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&l.push(n)}let c=t.map(a).filter(e=>{for(let t=0,n=l.length;t<n;t++){let n=l[t];if(o(n,e))return l.splice(t,1),!1}return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(i-l.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return g},default:function(){return v}});let r=n(1024),a=n(8533),o=r._(n(4887)),i=a._(n(2265)),l=n(3305),s=n(3443),c=n(4913),u=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:c,stylesheets:m}=e,h=n||t;if(h&&d.has(h))return;if(u.has(t)){d.add(h),u.get(t).then(r,c);return}let g=()=>{a&&a(),d.add(h)},b=document.createElement("script"),v=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(o?(b.innerHTML=o.__html||"",g()):i?(b.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",g()):t&&(b.src=t,u.set(t,v)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();b.setAttribute(e,r)}"worker"===l&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",l),m&&p(m),document.body.appendChild(b)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function g(e){e.forEach(h),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:s="afterInteractive",onError:u,stylesheets:f,...p}=e,{updateScripts:h,scripts:g,getIsSsr:b,appDir:v,nonce:y}=(0,i.useContext)(l.HeadManagerContext),x=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;x.current||(a&&e&&d.has(e)&&a(),x.current=!0)},[a,t,n]);let j=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!j.current&&("afterInteractive"===s?m(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),j.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(h?(g[s]=(g[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:u,...p}]),h(g)):b&&b()?d.add(t||n):b&&!b()&&m(e)),v){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),i.default.createElement("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===s&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},212:function(){},1396:function(e,t,n){e.exports=n(4724)},4033:function(e,t,n){e.exports=n(290)},8475:function(e,t,n){e.exports=n(4244)}},function(e){e.O(0,[676,616,504,971,864,744],function(){return e(e.s=7841)}),_N_E=e.O()}]);