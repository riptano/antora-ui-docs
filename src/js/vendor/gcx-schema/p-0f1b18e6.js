let e,t,n,l=!1,o=!1,s=!1,r=!1;const c="undefined"!=typeof window?window:{},i=c.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},f=e=>Promise.resolve(e),a=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),$=new WeakMap,d=e=>"sc-"+e.o,h={},m=e=>"object"==(e=typeof e)||"function"===e,y=(e,t,...n)=>{let l=null,o=null,s=!1,r=!1;const c=[],i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!m(l))&&(l+=""),s&&r?c[c.length-1].i+=l:c.push(s?p(null,l):l),r=s)};if(i(n),t){t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const u=p(e,null);return u.u=t,c.length>0&&(u.$=c),u.h=o,u},p=(e,t)=>({t:0,m:e,i:t,p:null,$:null,u:null,h:null}),b={},w=(e,t,n,l,o,s)=>{if(n!==l){let r=X(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,o=g(n),s=g(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else{const c=m(l);if((r||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&s||o)&&!c&&e.setAttribute(t,l=!0===l?"":l)}}},S=/\s/,g=e=>e?e.split(S):[],j=(e,t,n,l)=>{const o=11===t.p.nodeType&&t.p.host?t.p.host:t.p,s=e&&e.u||h,r=t.u||h;for(l in s)l in r||w(o,l,s[l],void 0,n,t.t);for(l in r)w(o,l,s[l],r[l],n,t.t)},k=(o,r,c,u)=>{const f=r.$[c];let a,$,d,h=0;if(l||(s=!0,"slot"===f.m&&(e&&u.classList.add(e+"-s"),f.t|=f.$?2:1)),null!==f.i)a=f.p=i.createTextNode(f.i);else if(1&f.t)a=f.p=i.createTextNode("");else if(a=f.p=i.createElement(2&f.t?"slot-fb":f.m),j(null,f,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),f.$)for(h=0;h<f.$.length;++h)$=k(o,f,h,a),$&&a.appendChild($);return a["s-hn"]=n,3&f.t&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=f.h||"",d=o&&o.$&&o.$[c],d&&d.m===f.m&&o.p&&v(o.p,!1)),a},v=(e,t)=>{u.t|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(T(o).insertBefore(o,R(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&v(o,t)}u.t&=-2},M=(e,t,l,o,s,r)=>{let c,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=k(null,l,s,e),c&&(o[s].p=c,i.insertBefore(c,R(t))))},C=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(o=!0,(s=l.p)["s-ol"]?s["s-ol"].remove():v(s,!0),s.remove())},O=(e,t)=>e.m===t.m&&("slot"!==e.m||e.h===t.h),R=e=>e&&e["s-ol"]||e,T=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,x=(e,t)=>{const n=t.p=e.p,l=e.$,o=t.$,s=t.i;let r;null===s?("slot"===t.m||j(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,r=0,c=t.length-1,i=t[0],u=t[c],f=l.length-1,a=l[0],$=l[f];for(;s<=c&&r<=f;)null==i?i=t[++s]:null==u?u=t[--c]:null==a?a=l[++r]:null==$?$=l[--f]:O(i,a)?(x(i,a),i=t[++s],a=l[++r]):O(u,$)?(x(u,$),u=t[--c],$=l[--f]):O(i,$)?("slot"!==i.m&&"slot"!==$.m||v(i.p.parentNode,!1),x(i,$),e.insertBefore(i.p,u.p.nextSibling),i=t[++s],$=l[--f]):O(u,a)?("slot"!==i.m&&"slot"!==$.m||v(u.p.parentNode,!1),x(u,a),e.insertBefore(u.p,i.p),u=t[--c],a=l[++r]):(o=k(t&&t[r],n,r,e),a=l[++r],o&&T(i.p).insertBefore(o,R(i.p)));s>c?M(e,null==l[f+1]?null:l[f+1].p,n,l,r,f):r>f&&C(t,s,c)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),M(n,null,t,o,0,o.length-1)):null!==l&&C(l,0,l.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:e.i!==s&&(n.data=s)},N=e=>{const t=e.childNodes;let n,l,o,s,r,c;for(l=0,o=t.length;l<o;l++)if(n=t[l],1===n.nodeType){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<o;s++)if(c=t[s].nodeType,t[s]["s-hn"]!==n["s-hn"]||""!==r){if(1===c&&r===t[s].getAttribute("slot")){n.hidden=!0;break}}else if(1===c||3===c&&""!==t[s].textContent.trim()){n.hidden=!0;break}N(n)}},P=[],E=e=>{let t,n,l,s,r,c,i=0;const u=e.childNodes,f=u.length;for(;i<f;i++){if(t=u[i],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(L(n,s)?(r=P.find((e=>e.S===n)),o=!0,n["s-sn"]=n["s-sn"]||s,r?r.g=t:P.push({g:t,S:n}),n["s-sr"]&&P.map((e=>{L(e.S,n["s-sn"])&&(r=P.find((e=>e.S===n)),r&&!e.g&&(e.g=r.g))}))):P.some((e=>e.S===n))||P.push({S:n}));1===t.nodeType&&E(t)}},L=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,W=(e,t)=>{t&&!e.j&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.j=t)))},A=(e,t)=>{if(e.t|=16,!(4&e.t))return W(e,e.k),ie((()=>U(e,t)));e.t|=512},U=(e,t)=>{const n=e.v;let l;return t&&(l=_(n,"componentWillLoad")),z(l,(()=>q(e,n,t)))},q=async(e,t,n)=>{const l=e.M,o=l["s-rc"];n&&(e=>{const t=e.C,n=e.M,l=t.t,o=((e,t)=>{let n=d(t);const l=te.get(n);if(e=11===e.nodeType?e:i,l)if("string"==typeof l){let t,o=$.get(e=e.head||e);o||$.set(e,o=new Set),o.has(n)||(t=i.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);F(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>H(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},F=(r,c)=>{try{c=c.render(),r.t&=-17,r.t|=2,((r,c)=>{const f=r.M,a=r.C,$=r.O||p(null,null),d=(e=>e&&e.m===b)(c)?c:y(null,null,c);if(n=f.tagName,d.m=null,d.t|=4,r.O=d,d.p=$.p=f.shadowRoot||f,e=f["s-sc"],t=f["s-cr"],l=0!=(1&a.t),o=!1,x($,d),u.t|=1,s){let e,t,n,l,o,s;E(d.p);let r=0;for(;r<P.length;r++)e=P[r],t=e.S,t["s-ol"]||(n=i.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<P.length;r++)if(e=P[r],t=e.S,e.g){for(l=e.g.parentNode,o=e.g.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&N(d.p),u.t&=-2,P.length=0})(r,c)}catch(e){Y(e,r.M)}return null},H=e=>{const t=e.M,n=e.k;64&e.t||(e.t|=64,B(t),e.R(t),n||V()),e.j&&(e.j(),e.j=void 0),512&e.t&&ce((()=>A(e,!1))),e.t&=-517},V=()=>{B(i.documentElement),ce((()=>(e=>{const t=u.ce("appload",{detail:{namespace:"gcx-schema"}});return e.dispatchEvent(t),t})(c)))},_=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){Y(e)}},z=(e,t)=>e&&e.then?e.then(t):t(),B=e=>e.classList.add("hydrated"),D=(e,t,n)=>{if(t.T){const l=Object.entries(t.T),o=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>J(this).N.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=J(e),s=o.N.get(t),r=o.t,c=o.v;n=((e,t)=>null==e||m(e)?e:1&t?e+"":e)(n,l.T[t][0]),8&r&&void 0!==s||n===s||Number.isNaN(s)&&Number.isNaN(n)||(o.N.set(t,n),c&&2==(18&r)&&A(o,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){u.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(o.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},G=(e,t={})=>{const n=[],l=t.exclude||[],o=c.customElements,s=i.head,r=s.querySelector("meta[charset]"),f=i.createElement("style"),$=[];let h,m=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",i.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],o:t[1],T:t[2],P:t[3]};s.T=t[2];const r=s.o,c=class extends HTMLElement{constructor(e){super(e),Q(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),m?$.push(this):u.jmp((()=>(e=>{if(0==(1&u.t)){const t=J(e),n=t.C,l=()=>{};if(!(1&t.t)){t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=i.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){W(t,t.k=n);break}}n.T&&Object.entries(n.T).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=ee(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(D(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){Y(e)}t.t&=-9,e()}if(o.style){let e=o.style;const t=d(n);if(!te.has(t)){const l=()=>{};((e,t,n)=>{let l=te.get(e);a&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,te.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.k,r=()=>A(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){u.jmp((()=>{}))}componentOnReady(){return J(this).L}};s.W=e[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,D(c,s,1)))}))})),f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",f.setAttribute("data-styles",""),s.insertBefore(f,r?r.nextSibling:s.firstChild),m=!1,$.length?$.map((e=>e.connectedCallback())):u.jmp((()=>h=setTimeout(V,30)))},I=new WeakMap,J=e=>I.get(e),K=(e,t)=>I.set(t.v=e,t),Q=(e,t)=>{const n={t:0,M:e,C:t,N:new Map};return n.L=new Promise((e=>n.R=e)),e["s-p"]=[],e["s-rc"]=[],I.set(e,n)},X=(e,t)=>t in e,Y=(e,t)=>(0,console.error)(e,t),Z=new Map,ee=e=>{const t=e.o.replace(/-/g,"_"),n=e.W,l=Z.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(Z.set(n,e),e[t])),Y)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},te=new Map,ne=[],le=[],oe=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&u.t?ce(re):u.raf(re))},se=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Y(e)}e.length=0},re=()=>{se(ne),se(le),(r=ne.length>0)&&u.raf(re)},ce=e=>f().then(e),ie=oe(le,!0);export{G as b,y as h,f as p,K as r}