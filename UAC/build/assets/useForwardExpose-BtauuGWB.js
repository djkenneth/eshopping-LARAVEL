import{c as y,k as A,L as J,M as U,K as h,a7 as V,a8 as d,H as P,S as _,u as I,a1 as g,a9 as K,_ as F,aa as R,ab as H,R as B,ac as Q,O as k,A as D,s as X,n as Y}from"./app-Cj3TV9Si.js";function pe(e,t){var o;const n=h();return B(()=>{n.value=e()},{...t,flush:(o=void 0)!=null?o:"sync"}),V(n)}function w(e){return J()?(U(e),!0):!1}function ve(){const e=new Set,t=i=>{e.delete(i)};return{on:i=>{e.add(i);const u=()=>t(i);return w(u),{off:u}},off:t,trigger:(...i)=>Promise.all(Array.from(e).map(u=>u(...i))),clear:()=>{e.clear()}}}function he(e){let t=!1,o;const n=R(!0);return(...r)=>(t||(o=n.run(()=>e(...r)),t=!0),o)}const M=new WeakMap,Z=(...e)=>{var t;const o=e[0],n=(t=g())==null?void 0:t.proxy;if(n==null&&!K())throw new Error("injectLocal must be called in setup");return n&&M.has(n)&&o in M.get(n)?M.get(n)[o]:F(...e)};function ye(e){let t=0,o,n;const r=()=>{t-=1,n&&t<=0&&(n.stop(),o=void 0,n=void 0)};return(...i)=>(t+=1,n||(n=R(!0),o=n.run(()=>e(...i))),w(r),o)}function q(e){if(!P(e))return _(e);const t=new Proxy({},{get(o,n,r){return I(Reflect.get(e.value,n,r))},set(o,n,r){return P(e.value[n])&&!P(r)?e.value[n].value=r:e.value[n]=r,!0},deleteProperty(o,n){return Reflect.deleteProperty(e.value,n)},has(o,n){return Reflect.has(e.value,n)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return _(t)}function ee(e){return q(y(e))}function be(e,...t){const o=t.flat(),n=o[0];return ee(()=>Object.fromEntries(typeof n=="function"?Object.entries(k(e)).filter(([r,i])=>!n(d(i),r)):Object.entries(k(e)).filter(r=>!o.includes(r[0]))))}const W=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const te=e=>typeof e<"u",ne=Object.prototype.toString,oe=e=>ne.call(e)==="[object Object]",ge=re();function re(){var e,t;return W&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function L(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function ue(e){return g()}function j(e){return Array.isArray(e)?e:[e]}function we(e,t=1e4){return Q((o,n)=>{let r=d(e),i;const u=()=>setTimeout(()=>{r=d(e),n()},d(t));return w(()=>{clearTimeout(i)}),{get(){return o(),r},set(s){r=s,n(),clearTimeout(i),i=u()}}})}const Se=d;function Oe(e,t){ue()&&H(e,t)}function xe(e,t,o={}){const{immediate:n=!0,immediateCallback:r=!1}=o,i=h(!1);let u=null;function s(){u&&(clearTimeout(u),u=null)}function a(){i.value=!1,s()}function l(...c){r&&e(),s(),i.value=!0,u=setTimeout(()=>{i.value=!1,u=null,e(...c)},d(t))}return n&&(i.value=!0,W&&l()),w(a),{isPending:V(i),start:l,stop:a}}function se(e,t,o){return A(e,t,{...o,immediate:!0})}const T=W?window:void 0;function z(e){var t;const o=d(e);return(t=o==null?void 0:o.$el)!=null?t:o}function G(...e){const t=[],o=()=>{t.forEach(s=>s()),t.length=0},n=(s,a,l,c)=>(s.addEventListener(a,l,c),()=>s.removeEventListener(a,l,c)),r=y(()=>{const s=j(d(e[0])).filter(a=>a!=null);return s.every(a=>typeof a!="string")?s:void 0}),i=se(()=>{var s,a;return[(a=(s=r.value)==null?void 0:s.map(l=>z(l)))!=null?a:[T].filter(l=>l!=null),j(d(r.value?e[1]:e[0])),j(I(r.value?e[2]:e[1])),d(r.value?e[3]:e[2])]},([s,a,l,c])=>{if(o(),!(s!=null&&s.length)||!(a!=null&&a.length)||!(l!=null&&l.length))return;const b=oe(c)?{...c}:c;t.push(...s.flatMap(v=>a.flatMap(f=>l.map(m=>n(v,f,m,b)))))},{flush:"post"}),u=()=>{i(),o()};return w(o),u}function ie(){const e=h(!1),t=g();return t&&Y(()=>{e.value=!0},t),e}function ae(e){const t=ie();return y(()=>(t.value,!!e()))}function le(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function Ee(...e){let t,o,n={};e.length===3?(t=e[0],o=e[1],n=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,o=e[0],n=e[1]):(t=e[0],o=e[1]):(t=!0,o=e[0]);const{target:r=T,eventName:i="keydown",passive:u=!1,dedupe:s=!1}=n,a=le(t);return G(r,i,c=>{c.repeat&&d(s)||a(c)&&o(c)},u)}const ce=Symbol("vueuse-ssr-width");function fe(){const e=K()?Z(ce,null):null;return typeof e=="number"?e:void 0}function Pe(e,t={}){const{window:o=T,ssrWidth:n=fe()}=t,r=ae(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function"),i=h(typeof n=="number"),u=h(),s=h(!1),a=l=>{s.value=l.matches};return B(()=>{if(i.value){i.value=!r.value;const l=d(e).split(",");s.value=l.some(c=>{const b=c.includes("not all"),v=c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),f=c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let m=!!(v||f);return v&&m&&(m=n>=L(v[1])),f&&m&&(m=n<=L(f[1])),b?!m:m});return}r.value&&(u.value=o.matchMedia(d(e)),s.value=u.value.matches)}),G(u,"change",a,{passive:!0}),y(()=>s.value)}function de(e){return JSON.parse(JSON.stringify(e))}function Me(e,t,o,n={}){var r,i,u;const{clone:s=!1,passive:a=!1,eventName:l,deep:c=!1,defaultValue:b,shouldEmit:v}=n,f=g(),m=o||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f))||((u=(i=f==null?void 0:f.proxy)==null?void 0:i.$emit)==null?void 0:u.bind(f==null?void 0:f.proxy));let S=l;t||(t="modelValue"),S=S||`update:${t.toString()}`;const $=p=>s?typeof s=="function"?s(p):de(p):p,C=()=>te(e[t])?$(e[t]):b,N=p=>{v?v(p)&&m(S,p):m(S,p)};if(a){const p=C(),E=D(p);let O=!1;return A(()=>e[t],x=>{O||(O=!0,E.value=$(x),X(()=>O=!1))}),A(E,x=>{!O&&(x!==e[t]||c)&&N(x)},{deep:c}),E}else return y({get(){return C()},set(p){N(p)}})}function je(){const e=g(),t=D(),o=y(()=>{var u,s;return["#text","#comment"].includes((u=t.value)==null?void 0:u.$el.nodeName)?(s=t.value)==null?void 0:s.$el.nextElementSibling:z(t)}),n=Object.assign({},e.exposed),r={};for(const u in e.props)Object.defineProperty(r,u,{enumerable:!0,configurable:!0,get:()=>e.props[u]});if(Object.keys(n).length>0)for(const u in n)Object.defineProperty(r,u,{enumerable:!0,configurable:!0,get:()=>n[u]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=r;function i(u){t.value=u,u&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>u instanceof Element?u:u.$el}),e.exposed=r)}return{forwardRef:i,currentRef:t,currentElement:o}}export{je as a,Me as b,ie as c,he as d,ye as e,Oe as f,ge as g,G as h,W as i,we as j,pe as k,ve as l,xe as m,Pe as n,Ee as o,T as p,be as r,Se as t,z as u};
