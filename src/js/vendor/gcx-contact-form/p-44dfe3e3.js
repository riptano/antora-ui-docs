let t,e,n=!1,l=!1;const s="undefined"!=typeof window?window:{},o=s.document||{head:{}},c={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},r=t=>Promise.resolve(t),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(t){}return!1})(),u=(t,e,n)=>{n&&n.map((([n,l,s])=>{const o=t,r=a(e,s),i=f(n);c.ael(o,l,r,i),(e.o=e.o||[]).push((()=>c.rel(o,l,r,i)))}))},a=(t,e)=>n=>{try{256&t.t?t.i[e](n):(t.u=t.u||[]).push([e,n])}catch(t){I(t)}},f=t=>0!=(2&t),h=new WeakMap,d=t=>"sc-"+t.h,$={},m=t=>"object"==(t=typeof t)||"function"===t,p=(t,e,...n)=>{let l=null,s=!1,o=!1;const c=[],r=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!m(l))&&(l+=""),s&&o?c[c.length-1].$+=l:c.push(s?y(null,l):l),o=s)};if(r(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}const i=y(t,null);return i.m=e,c.length>0&&(i.p=c),i},y=(t,e)=>({t:0,g:t,$:e,v:null,p:null,m:null}),b={},w=(t,e,n,l,o,r)=>{if(n!==l){let i=G(t,e),u=e.toLowerCase();if("class"===e){const e=t.classList,s=v(n),o=v(l);e.remove(...s.filter((t=>t&&!o.includes(t)))),e.add(...o.filter((t=>t&&!s.includes(t))))}else if(i||"o"!==e[0]||"n"!==e[1]){const s=m(l);if((i||s&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{const s=null==l?"":l;"list"===e?i=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(t){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!i||4&r||o)&&!s&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):G(s,u)?u.slice(2):u[2]+e.slice(3),n&&c.rel(t,e,n,!1),l&&c.ael(t,e,l,!1)}},g=/\s/,v=t=>t?t.split(g):[],S=(t,e,n,l)=>{const s=11===e.v.nodeType&&e.v.host?e.v.host:e.v,o=t&&t.m||$,c=e.m||$;for(l in o)l in c||w(s,l,o[l],void 0,n,e.t);for(l in c)w(s,l,o[l],c[l],n,e.t)},j=(e,l,s)=>{const c=l.p[s];let r,i,u=0;if(null!==c.$)r=c.v=o.createTextNode(c.$);else{if(n||(n="svg"===c.g),r=c.v=o.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",c.g),n&&"foreignObject"===c.g&&(n=!1),S(null,c,n),null!=t&&r["s-si"]!==t&&r.classList.add(r["s-si"]=t),c.p)for(u=0;u<c.p.length;++u)i=j(e,c,u),i&&r.appendChild(i);"svg"===c.g?n=!1:"foreignObject"===r.tagName&&(n=!0)}return r},O=(t,n,l,s,o,c)=>{let r,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=j(null,l,o),r&&(s[o].v=r,i.insertBefore(r,n)))},M=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.v.remove()},k=(t,e)=>t.g===e.g,C=(t,e)=>{const l=e.v=t.v,s=t.p,o=e.p,c=e.g,r=e.$;null===r?(n="svg"===c||"foreignObject"!==c&&n,S(t,e,n),null!==s&&null!==o?((t,e,n,l)=>{let s,o=0,c=0,r=e.length-1,i=e[0],u=e[r],a=l.length-1,f=l[0],h=l[a];for(;o<=r&&c<=a;)null==i?i=e[++o]:null==u?u=e[--r]:null==f?f=l[++c]:null==h?h=l[--a]:k(i,f)?(C(i,f),i=e[++o],f=l[++c]):k(u,h)?(C(u,h),u=e[--r],h=l[--a]):k(i,h)?(C(i,h),t.insertBefore(i.v,u.v.nextSibling),i=e[++o],h=l[--a]):k(u,f)?(C(u,f),t.insertBefore(u.v,i.v),u=e[--r],f=l[++c]):(s=j(e&&e[c],n,c),f=l[++c],s&&i.v.parentNode.insertBefore(s,i.v));o>r?O(t,null==l[a+1]?null:l[a+1].v,n,l,c,a):c>a&&M(e,o,r)})(l,s,e,o):null!==o?(null!==t.$&&(l.textContent=""),O(l,null,e,o,0,o.length-1)):null!==s&&M(s,0,s.length-1),n&&"svg"===c&&(n=!1)):t.$!==r&&(l.data=r)},x=(t,e,n)=>{const l=(t=>_(t).S)(t);return{emit:t=>P(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},P=(t,e,n)=>{const l=c.ce(e,n);return t.dispatchEvent(l),l},E=(t,e)=>{e&&!t.j&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.j=e)))},L=(t,e)=>{if(t.t|=16,!(4&t.t))return E(t,t.O),lt((()=>N(t,e)));t.t|=512},N=(t,e)=>{const n=t.i;return e&&(t.t|=256,t.u&&(t.u.map((([t,e])=>U(n,t,e))),t.u=null)),W(void 0,(()=>T(t,n,e)))},T=async(t,e,n)=>{const l=t.S,s=l["s-rc"];n&&(t=>{const e=t.M,n=t.S,l=e.t,s=((t,e)=>{let n=d(e);const l=Q.get(n);if(t=11===t.nodeType?t:o,l)if("string"==typeof l){let e,s=h.get(t=t.head||t);s||h.set(t,s=new Set),s.has(n)||(e=o.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(t);A(t,e),s&&(s.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>F(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},A=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.S,o=n.k||y(null,null),c=(t=>t&&t.g===b)(l)?l:p(null,null,l);e=s.tagName,c.g=null,c.t|=4,n.k=c,c.v=o.v=s.shadowRoot||s,t=s["s-sc"],C(o,c)})(n,l)}catch(t){I(t,n.S)}return null},F=t=>{const e=t.S,n=t.i,l=t.O;64&t.t||(t.t|=64,q(e),U(n,"componentDidLoad"),t.C(e),l||R()),t.j&&(t.j(),t.j=void 0),512&t.t&&nt((()=>L(t,!1))),t.t&=-517},R=()=>{q(o.documentElement),nt((()=>P(s,"appload",{detail:{namespace:"gcx-contact-form"}})))},U=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){I(t)}},W=(t,e)=>t&&t.then?t.then(e):e(),q=t=>t.classList.add("hydrated"),D=(t,e,n)=>{if(e.P){const l=Object.entries(e.P),s=t.prototype;if(l.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return((t,e)=>_(this).L.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=_(t),o=s.L.get(e),c=s.t,r=s.i;n=((t,e)=>null==t||m(t)?t:2&e?parseFloat(t):1&e?t+"":t)(n,l.P[e][0]),8&c&&void 0!==o||n===o||Number.isNaN(o)&&Number.isNaN(n)||(s.L.set(e,n),r&&2==(18&c)&&L(s,!1))})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const e=new Map;s.attributeChangedCallback=function(t,n,l){c.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,n])=>{const l=n[1]||t;return e.set(l,t),l}))}}return t},H=(t,e={})=>{const n=[],l=e.exclude||[],r=s.customElements,a=o.head,f=a.querySelector("meta[charset]"),h=o.createElement("style"),$=[];let m,p=!0;Object.assign(c,e),c.l=new URL(e.resourcesUrl||"./",o.baseURI).href,t.map((t=>{t[1].map((e=>{const s={t:e[0],h:e[1],P:e[2],N:e[3]};s.P=e[2],s.N=e[3];const o=s.h,a=class extends HTMLElement{constructor(t){super(t),B(t=this,s),1&s.t&&t.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),p?$.push(this):c.jmp((()=>(t=>{if(0==(1&c.t)){const e=_(t),n=e.M,l=()=>{};if(1&e.t)u(t,e,n.N);else{e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){E(e,e.O=n);break}}n.P&&Object.entries(n.P).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,s)=>{if(0==(32&e.t)){{if(e.t|=32,(s=K(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(D(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(t){I(t)}e.t&=-9,t()}if(s.style){let t=s.style;const e=d(n);if(!Q.has(e)){const l=()=>{};((t,e,n)=>{let l=Q.get(t);i&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,Q.set(t,l)})(e,t,!!(1&n.t)),l()}}}const o=e.O,c=()=>L(e,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,e,n)}l()}})(this)))}disconnectedCallback(){c.jmp((()=>(()=>{if(0==(1&c.t)){const t=_(this);t.o&&(t.o.map((t=>t())),t.o=void 0)}})()))}componentOnReady(){return _(this).T}};s.A=t[0],l.includes(o)||r.get(o)||(n.push(o),r.define(o,D(a,s,1)))}))})),h.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),a.insertBefore(h,f?f.nextSibling:a.firstChild),p=!1,$.length?$.map((t=>t.connectedCallback())):c.jmp((()=>m=setTimeout(R,30)))},V=new WeakMap,_=t=>V.get(t),z=(t,e)=>V.set(e.i=t,e),B=(t,e)=>{const n={t:0,S:t,M:e,L:new Map};return n.T=new Promise((t=>n.C=t)),t["s-p"]=[],t["s-rc"]=[],u(t,n,e.N),V.set(t,n)},G=(t,e)=>e in t,I=(t,e)=>(0,console.error)(t,e),J=new Map,K=t=>{const e=t.h.replace(/-/g,"_"),n=t.A,l=J.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(J.set(n,t),t[e])),I)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},Q=new Map,X=[],Y=[],Z=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&c.t?nt(et):c.raf(et))},tt=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){I(t)}t.length=0},et=()=>{tt(X),tt(Y),(l=X.length>0)&&c.raf(et)},nt=t=>r().then(t),lt=Z(Y,!0);export{H as b,x as c,p as h,r as p,z as r}