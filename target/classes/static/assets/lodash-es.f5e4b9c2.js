var q=typeof global=="object"&&global&&global.Object===Object&&global,V=q,Q=typeof self=="object"&&self&&self.Object===Object&&self,tt=V||Q||Function("return this")(),S=tt,et=S.Symbol,d=et,U=Object.prototype,rt=U.hasOwnProperty,nt=U.toString,m=d?d.toStringTag:void 0;function it(t){var e=rt.call(t,m),r=t[m];try{t[m]=void 0;var n=!0}catch{}var i=nt.call(t);return n&&(e?t[m]=r:delete t[m]),i}var at=Object.prototype,ot=at.toString;function st(t){return ot.call(t)}var ct="[object Null]",ut="[object Undefined]",R=d?d.toStringTag:void 0;function K(t){return t==null?t===void 0?ut:ct:R&&R in Object(t)?it(t):st(t)}function ft(t){return t!=null&&typeof t=="object"}var lt="[object Symbol]";function $(t){return typeof t=="symbol"||ft(t)&&K(t)==lt}function ht(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}var dt=Array.isArray,w=dt,pt=1/0,D=d?d.prototype:void 0,H=D?D.toString:void 0;function X(t){if(typeof t=="string")return t;if(w(t))return ht(t,X)+"";if($(t))return H?H.call(t):"";var e=t+"";return e=="0"&&1/t==-pt?"-0":e}var gt=/\s/;function _t(t){for(var e=t.length;e--&&gt.test(t.charAt(e)););return e}var yt=/^\s+/;function vt(t){return t&&t.slice(0,_t(t)+1).replace(yt,"")}function p(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var G=0/0,mt=/^[-+]0x[0-9a-f]+$/i,bt=/^0b[01]+$/i,Tt=/^0o[0-7]+$/i,St=parseInt;function W(t){if(typeof t=="number")return t;if($(t))return G;if(p(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=p(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=vt(t);var r=bt.test(t);return r||Tt.test(t)?St(t.slice(2),r?2:8):mt.test(t)?G:+t}var $t="[object AsyncFunction]",Ot="[object Function]",xt="[object GeneratorFunction]",Ct="[object Proxy]";function It(t){if(!p(t))return!1;var e=K(t);return e==Ot||e==xt||e==$t||e==Ct}var Pt=S["__core-js_shared__"],j=Pt,L=function(){var t=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function jt(t){return!!L&&L in t}var Et=Function.prototype,wt=Et.toString;function Nt(t){if(t!=null){try{return wt.call(t)}catch{}try{return t+""}catch{}}return""}var zt=/[\\^$.*+?()[\]{}|]/g,At=/^\[object .+?Constructor\]$/,Ft=Function.prototype,Mt=Object.prototype,Rt=Ft.toString,Dt=Mt.hasOwnProperty,Ht=RegExp("^"+Rt.call(Dt).replace(zt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Gt(t){if(!p(t)||jt(t))return!1;var e=It(t)?Ht:At;return e.test(Nt(t))}function Wt(t,e){return t==null?void 0:t[e]}function B(t,e){var r=Wt(t,e);return Gt(r)?r:void 0}function Lt(t,e){return t===e||t!==t&&e!==e}var Ut=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Kt=/^\w*$/;function Xt(t,e){if(w(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||$(t)?!0:Kt.test(t)||!Ut.test(t)||e!=null&&t in Object(e)}var Bt=B(Object,"create"),b=Bt;function Jt(){this.__data__=b?b(null):{},this.size=0}function Yt(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Zt="__lodash_hash_undefined__",kt=Object.prototype,qt=kt.hasOwnProperty;function Vt(t){var e=this.__data__;if(b){var r=e[t];return r===Zt?void 0:r}return qt.call(e,t)?e[t]:void 0}var Qt=Object.prototype,te=Qt.hasOwnProperty;function ee(t){var e=this.__data__;return b?e[t]!==void 0:te.call(e,t)}var re="__lodash_hash_undefined__";function ne(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=b&&e===void 0?re:e,this}function l(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=Jt;l.prototype.delete=Yt;l.prototype.get=Vt;l.prototype.has=ee;l.prototype.set=ne;function ie(){this.__data__=[],this.size=0}function O(t,e){for(var r=t.length;r--;)if(Lt(t[r][0],e))return r;return-1}var ae=Array.prototype,oe=ae.splice;function se(t){var e=this.__data__,r=O(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():oe.call(e,r,1),--this.size,!0}function ce(t){var e=this.__data__,r=O(e,t);return r<0?void 0:e[r][1]}function ue(t){return O(this.__data__,t)>-1}function fe(t,e){var r=this.__data__,n=O(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function g(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}g.prototype.clear=ie;g.prototype.delete=se;g.prototype.get=ce;g.prototype.has=ue;g.prototype.set=fe;var le=B(S,"Map"),he=le;function de(){this.size=0,this.__data__={hash:new l,map:new(he||g),string:new l}}function pe(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function x(t,e){var r=t.__data__;return pe(e)?r[typeof e=="string"?"string":"hash"]:r.map}function ge(t){var e=x(this,t).delete(t);return this.size-=e?1:0,e}function _e(t){return x(this,t).get(t)}function ye(t){return x(this,t).has(t)}function ve(t,e){var r=x(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function h(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}h.prototype.clear=de;h.prototype.delete=ge;h.prototype.get=_e;h.prototype.has=ye;h.prototype.set=ve;var me="Expected a function";function N(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(me);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var c=t.apply(this,n);return r.cache=o.set(i,c)||o,c};return r.cache=new(N.Cache||h),r}N.Cache=h;var be=500;function Te(t){var e=N(t,function(n){return r.size===be&&r.clear(),n}),r=e.cache;return e}var Se=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$e=/\\(\\)?/g,Oe=Te(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Se,function(r,n,i,o){e.push(i?o.replace($e,"$1"):n||r)}),e}),xe=Oe;function Ce(t){return t==null?"":X(t)}function Ie(t,e){return w(t)?t:Xt(t,e)?[t]:xe(Ce(t))}var Pe=1/0;function je(t){if(typeof t=="string"||$(t))return t;var e=t+"";return e=="0"&&1/t==-Pe?"-0":e}function Ee(t,e){e=Ie(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[je(e[r++])];return r&&r==n?t:void 0}function Re(t,e,r){var n=t==null?void 0:Ee(t,e);return n===void 0?r:n}var we=function(){return S.Date.now()},E=we,Ne="Expected a function",ze=Math.max,Ae=Math.min;function Fe(t,e,r){var n,i,o,c,s,f,_=0,z=!1,y=!1,C=!0;if(typeof t!="function")throw new TypeError(Ne);e=W(e)||0,p(r)&&(z=!!r.leading,y="maxWait"in r,o=y?ze(W(r.maxWait)||0,e):o,C="trailing"in r?!!r.trailing:C);function I(a){var u=n,v=i;return n=i=void 0,_=a,c=t.apply(v,u),c}function J(a){return _=a,s=setTimeout(T,e),z?I(a):c}function Y(a){var u=a-f,v=a-_,M=e-u;return y?Ae(M,o-v):M}function A(a){var u=a-f,v=a-_;return f===void 0||u>=e||u<0||y&&v>=o}function T(){var a=E();if(A(a))return F(a);s=setTimeout(T,Y(a))}function F(a){return s=void 0,C&&n?I(a):(n=i=void 0,c)}function Z(){s!==void 0&&clearTimeout(s),_=0,n=f=i=s=void 0}function k(){return s===void 0?c:F(E())}function P(){var a=E(),u=A(a);if(n=arguments,i=this,f=a,u){if(s===void 0)return J(f);if(y)return clearTimeout(s),s=setTimeout(T,e),I(f)}return s===void 0&&(s=setTimeout(T,e)),c}return P.cancel=Z,P.flush=k,P}function De(t){for(var e=-1,r=t==null?0:t.length,n={};++e<r;){var i=t[e];n[i[0]]=i[1]}return n}var Me="Expected a function";function He(t,e,r){var n=!0,i=!0;if(typeof t!="function")throw new TypeError(Me);return p(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Fe(t,e,{leading:n,maxWait:e,trailing:i})}export{De as f,Re as g,He as t};
