import{a5 as D,a6 as T,a as f,u as b,a7 as j,s as F,a8 as R,w as E}from"./@vue.d0b34203.js";var W=Object.defineProperty,I=Object.defineProperties,L=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&h(e,r,t[r]);if(g)for(var r of g(t))z.call(t,r)&&h(e,r,t[r]);return e},C=(e,t)=>I(e,L(t));function M(e,t){var r;const n=F();return R(()=>{n.value=e()},C(A({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),j(n)}function m(e){return D()?(T(e),!0):!1}var P;const p=typeof window!="undefined",Q=e=>typeof e=="number",N=e=>typeof e=="string",d=()=>{};p&&((P=window==null?void 0:window.navigator)==null?void 0:P.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function V(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}function K(e,t=!0,r=!0){let n=0,o,s=!0;const i=()=>{o&&(clearTimeout(o),o=void 0)};return a=>{const l=b(e),c=Date.now()-n;if(i(),l<=0)return n=Date.now(),a();c>l&&(r||!s)?(n=Date.now(),a()):t&&(o=setTimeout(()=>{n=Date.now(),s=!0,i(),a()},l)),!r&&!o&&(o=setTimeout(()=>s=!0,l)),s=!1}}function U(e,t=200,r=!0,n=!0){return V(K(t,r,n),e)}function X(e,t,r={}){const{immediate:n=!0}=r,o=f(!1);let s=null;function i(){s&&(clearTimeout(s),s=null)}function u(){o.value=!1,i()}function a(...l){i(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...l)},b(t))}return n&&(o.value=!0,p&&a()),m(u),{isPending:o,start:a,stop:u}}function S(e){var t;const r=b(e);return(t=r==null?void 0:r.$el)!=null?t:r}const y=p?window:void 0,q=p?window.document:void 0;function v(...e){let t,r,n,o;if(N(e[0])?([r,n,o]=e,t=y):[t,r,n,o]=e,!t)return d;let s=d;const i=E(()=>S(t),a=>{s(),a&&(a.addEventListener(r,n,o),s=()=>{a.removeEventListener(r,n,o),s=d})},{immediate:!0,flush:"post"}),u=()=>{i(),s()};return m(u),u}const w=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},_="__vueuse_ssr_handlers__";w[_]=w[_]||{};w[_];function Y({document:e=q}={}){if(!e)return f("visible");const t=f(e.visibilityState);return v(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var $=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,H=(e,t)=>{var r={};for(var n in e)B.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&$)for(var n of $(e))t.indexOf(n)<0&&G.call(e,n)&&(r[n]=e[n]);return r};function Z(e,t,r={}){const n=r,{window:o=y}=n,s=H(n,["window"]);let i;const u=o&&"ResizeObserver"in o,a=()=>{i&&(i.disconnect(),i=void 0)},l=E(()=>S(e),O=>{a(),u&&o&&O&&(i=new ResizeObserver(t),i.observe(O,s))},{immediate:!0,flush:"post"}),c=()=>{a(),l()};return m(c),{isSupported:u,stop:c}}function k({window:e=y}={}){if(!e)return f(!1);const t=f(e.document.hasFocus());return v(e,"blur",()=>{t.value=!1}),v(e,"focus",()=>{t.value=!0}),t}export{Q as a,U as b,Z as c,Y as d,k as e,M as f,X as g,p as i,v as u};