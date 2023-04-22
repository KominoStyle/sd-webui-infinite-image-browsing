import{cr as en,cs as U,b9 as O,bY as d,ct as D,b8 as tn,cu as an,cv as on,cw as G,cx as sn,cy as fn,cz as cn,cA as I,cB as m,bs as B,cC as $,cD as A,bk as R,cE as N,cF as un,cG as K,cH as gn,cI as Y,bt as q,cJ as H,bv as J,cK as ln,br as bn}from"./index-ea5c2aef.js";import{g as W,b as pn}from"./styleChecker-64fe9b7f.js";function yn(n,r){for(var e=-1,t=n==null?0:n.length;++e<t&&r(n[e],e,n)!==!1;);return n}function h(n,r,e,t){var s=!e;e||(e={});for(var f=-1,i=r.length;++f<i;){var o=r[f],c=t?t(e[o],n[o],o,e,n):void 0;c===void 0&&(c=n[o]),s?en(e,o,c):U(e,o,c)}return e}function Tn(n,r){return n&&h(r,O(r),n)}function An(n){var r=[];if(n!=null)for(var e in Object(n))r.push(e);return r}var dn=Object.prototype,hn=dn.hasOwnProperty;function On(n){if(!d(n))return An(n);var r=D(n),e=[];for(var t in n)t=="constructor"&&(r||!hn.call(n,t))||e.push(t);return e}function w(n){return tn(n)?an(n,!0):On(n)}function $n(n,r){return n&&h(r,w(r),n)}var Q=typeof exports=="object"&&exports&&!exports.nodeType&&exports,C=Q&&typeof module=="object"&&module&&!module.nodeType&&module,wn=C&&C.exports===Q,L=wn?on.Buffer:void 0,j=L?L.allocUnsafe:void 0;function vn(n,r){if(r)return n.slice();var e=n.length,t=j?j(e):new n.constructor(e);return n.copy(t),t}function En(n,r){var e=-1,t=n.length;for(r||(r=Array(t));++e<t;)r[e]=n[e];return r}function Sn(n,r){return h(n,G(n),r)}var In=Object.getOwnPropertySymbols,mn=In?function(n){for(var r=[];n;)fn(r,G(n)),n=W(n);return r}:sn;const X=mn;function Cn(n,r){return h(n,X(n),r)}function Ln(n){return cn(n,w,X)}var jn=Object.prototype,Pn=jn.hasOwnProperty;function xn(n){var r=n.length,e=new n.constructor(r);return r&&typeof n[0]=="string"&&Pn.call(n,"index")&&(e.index=n.index,e.input=n.input),e}function v(n){var r=new n.constructor(n.byteLength);return new I(r).set(new I(n)),r}function Mn(n,r){var e=r?v(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.byteLength)}var Fn=/\w*$/;function _n(n){var r=new n.constructor(n.source,Fn.exec(n));return r.lastIndex=n.lastIndex,r}var P=m?m.prototype:void 0,x=P?P.valueOf:void 0;function Un(n){return x?Object(x.call(n)):{}}function Dn(n,r){var e=r?v(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}var Gn="[object Boolean]",Bn="[object Date]",Rn="[object Map]",Nn="[object Number]",Kn="[object RegExp]",Yn="[object Set]",qn="[object String]",Hn="[object Symbol]",Jn="[object ArrayBuffer]",Wn="[object DataView]",Qn="[object Float32Array]",Xn="[object Float64Array]",Zn="[object Int8Array]",zn="[object Int16Array]",Vn="[object Int32Array]",kn="[object Uint8Array]",nr="[object Uint8ClampedArray]",rr="[object Uint16Array]",er="[object Uint32Array]";function tr(n,r,e){var t=n.constructor;switch(r){case Jn:return v(n);case Gn:case Bn:return new t(+n);case Wn:return Mn(n,e);case Qn:case Xn:case Zn:case zn:case Vn:case kn:case nr:case rr:case er:return Dn(n,e);case Rn:return new t;case Nn:case qn:return new t(n);case Kn:return _n(n);case Yn:return new t;case Hn:return Un(n)}}var M=Object.create,ar=function(){function n(){}return function(r){if(!d(r))return{};if(M)return M(r);n.prototype=r;var e=new n;return n.prototype=void 0,e}}();const or=ar;function ir(n){return typeof n.constructor=="function"&&!D(n)?or(W(n)):{}}var sr="[object Map]";function fr(n){return B(n)&&$(n)==sr}var F=A&&A.isMap,cr=F?R(F):fr;const ur=cr;var gr="[object Set]";function lr(n){return B(n)&&$(n)==gr}var _=A&&A.isSet,br=_?R(_):lr;const pr=br;var yr=1,Tr=2,Ar=4,Z="[object Arguments]",dr="[object Array]",hr="[object Boolean]",Or="[object Date]",$r="[object Error]",z="[object Function]",wr="[object GeneratorFunction]",vr="[object Map]",Er="[object Number]",V="[object Object]",Sr="[object RegExp]",Ir="[object Set]",mr="[object String]",Cr="[object Symbol]",Lr="[object WeakMap]",jr="[object ArrayBuffer]",Pr="[object DataView]",xr="[object Float32Array]",Mr="[object Float64Array]",Fr="[object Int8Array]",_r="[object Int16Array]",Ur="[object Int32Array]",Dr="[object Uint8Array]",Gr="[object Uint8ClampedArray]",Br="[object Uint16Array]",Rr="[object Uint32Array]",a={};a[Z]=a[dr]=a[jr]=a[Pr]=a[hr]=a[Or]=a[xr]=a[Mr]=a[Fr]=a[_r]=a[Ur]=a[vr]=a[Er]=a[V]=a[Sr]=a[Ir]=a[mr]=a[Cr]=a[Dr]=a[Gr]=a[Br]=a[Rr]=!0;a[$r]=a[z]=a[Lr]=!1;function T(n,r,e,t,s,f){var i,o=r&yr,c=r&Tr,b=r&Ar;if(e&&(i=s?e(n,t,s,f):e(n)),i!==void 0)return i;if(!d(n))return n;var p=N(n);if(p){if(i=xn(n),!o)return En(n,i)}else{var u=$(n),y=u==z||u==wr;if(un(n))return vn(n,o);if(u==V||u==Z||y&&!s){if(i=c||y?{}:ir(n),!o)return c?Cn(n,$n(i,n)):Sn(n,Tn(i,n))}else{if(!a[u])return s?n:{};i=tr(n,u,o)}}f||(f=new K);var E=f.get(n);if(E)return E;f.set(n,i),pr(n)?n.forEach(function(g){i.add(T(g,r,e,g,n,f))}):ur(n)&&n.forEach(function(g,l){i.set(l,T(g,r,e,l,n,f))});var rn=b?c?Ln:gn:c?w:O,S=p?void 0:rn(n);return yn(S||n,function(g,l){S&&(l=g,g=n[l]),U(i,l,T(g,r,e,l,n,f))}),i}var Nr=1,Kr=4;function ee(n){return T(n,Nr|Kr)}var Yr=1,qr=2;function Hr(n,r,e,t){var s=e.length,f=s,i=!t;if(n==null)return!f;for(n=Object(n);s--;){var o=e[s];if(i&&o[2]?o[1]!==n[o[0]]:!(o[0]in n))return!1}for(;++s<f;){o=e[s];var c=o[0],b=n[c],p=o[1];if(i&&o[2]){if(b===void 0&&!(c in n))return!1}else{var u=new K;if(t)var y=t(b,p,c,n,r,u);if(!(y===void 0?Y(p,b,Yr|qr,t,u):y))return!1}}return!0}function k(n){return n===n&&!d(n)}function Jr(n){for(var r=O(n),e=r.length;e--;){var t=r[e],s=n[t];r[e]=[t,s,k(s)]}return r}function nn(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function Wr(n){var r=Jr(n);return r.length==1&&r[0][2]?nn(r[0][0],r[0][1]):function(e){return e===n||Hr(e,n,r)}}function Qr(n,r,e){var t=n==null?void 0:q(n,r);return t===void 0?e:t}var Xr=1,Zr=2;function zr(n,r){return H(n)&&k(r)?nn(J(n),r):function(e){var t=Qr(e,n);return t===void 0&&t===r?ln(e,n):Y(r,t,Xr|Zr)}}function Vr(n){return function(r){return q(r,n)}}function kr(n){return H(n)?pn(J(n)):Vr(n)}function te(n){return typeof n=="function"?n:n==null?bn:typeof n=="object"?N(n)?zr(n[0],n[1]):Wr(n):kr(n)}function ae(n){var r=n==null?0:n.length;return r?n[r-1]:void 0}export{h as a,te as b,ee as c,T as d,Ln as g,ae as l};
