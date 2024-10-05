(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ac(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},ns=[],on=()=>{},cy=()=>!1,pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bc=t=>t.startsWith("onUpdate:"),lt=Object.assign,Rc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uy=Object.prototype.hasOwnProperty,Pe=(t,e)=>uy.call(t,e),ae=Array.isArray,rs=t=>Ni(t)==="[object Map]",Ss=t=>Ni(t)==="[object Set]",xh=t=>Ni(t)==="[object Date]",de=t=>typeof t=="function",Qe=t=>typeof t=="string",pn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Gf=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),Qf=Object.prototype.toString,Ni=t=>Qf.call(t),hy=t=>Ni(t).slice(8,-1),Yf=t=>Ni(t)==="[object Object]",Sc=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=Ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dy=/-(\w)/g,Qt=ma(t=>t.replace(dy,(e,n)=>n?n.toUpperCase():"")),fy=/\B([A-Z])/g,Fr=ma(t=>t.replace(fy,"-$1").toLowerCase()),ga=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),ul=ma(t=>t?`on${ga(t)}`:""),ir=(t,e)=>!Object.is(t,e),Vo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Jf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Wo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vh;const Xf=()=>Vh||(Vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?_y(r):Pc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Le(t))return t}const py=/;(?![^(]*\))/g,my=/:([^]+)/,gy=/\/\*[^]*?\*\//g;function _y(t){const e={};return t.replace(gy,"").split(py).forEach(n=>{if(n){const r=n.split(my);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rr(t){let e="";if(Qe(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Rr(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vy=Ac(yy);function Zf(t){return!!t||t===""}function Ey(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Cr(t[r],e[r]);return n}function Cr(t,e){if(t===e)return!0;let n=xh(t),r=xh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=pn(t),r=pn(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?Ey(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Cr(t[o],e[o]))return!1}}return String(t)===String(e)}function Cc(t,e){return t.findIndex(n=>Cr(n,e))}const ep=t=>!!(t&&t.__v_isRef===!0),Bt=t=>Qe(t)?t:t==null?"":ae(t)||Le(t)&&(t.toString===Qf||!de(t.toString))?ep(t)?Bt(t.value):JSON.stringify(t,tp,2):String(t),tp=(t,e)=>ep(e)?tp(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[hl(r,i)+" =>"]=s,n),{})}:Ss(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hl(n))}:pn(e)?hl(e):Le(e)&&!ae(e)&&!Yf(e)?String(e):e,hl=(t,e="")=>{var n;return pn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class wy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ty(){return Ot}let De;const dl=new WeakSet;class np{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dl.has(this)&&(dl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nh(this),ip(this);const e=De,n=Wt;De=this,Wt=!0;try{return this.fn()}finally{op(this),De=e,Wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vc(e);this.deps=this.depsTail=void 0,Nh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ml(this)&&this.run()}get dirty(){return Ml(this)}}let rp=0,ii;function sp(t){t.flags|=8,t.next=ii,ii=t}function kc(){rp++}function xc(){if(--rp>0)return;let t;for(;ii;){let e=ii;for(ii=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ip(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function op(t,e=!1){let n,r=t.depsTail,s=r;for(;s;){const i=s.prevDep;s.version===-1?(s===r&&(r=i),Vc(s,e),Iy(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=n,t.depsTail=r}function Ml(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ap(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ap(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===mi))return;t.globalVersion=mi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ml(t)){t.flags&=-3;return}const n=De,r=Wt;De=t,Wt=!0;try{ip(t);const s=t.fn(t._value);(e.version===0||ir(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Wt=r,op(t,!0),t.flags&=-3}}function Vc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs)if(n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vc(i,!0)}else n.map&&!e&&(n.map.delete(n.key),n.map.size||Ko.delete(n.target))}function Iy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Wt=!0;const lp=[];function dr(){lp.push(Wt),Wt=!1}function fr(){const t=lp.pop();Wt=t===void 0?!0:t}function Nh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let mi=0;class Ay{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0}track(e){if(!De||!Wt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new Ay(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,De.flags&4&&cp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,mi++,this.notify(e)}notify(e){kc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xc()}}}function cp(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)cp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Ko=new WeakMap,Sr=Symbol(""),Ll=Symbol(""),gi=Symbol("");function Tt(t,e,n){if(Wt&&De){let r=Ko.get(t);r||Ko.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Nc),s.target=t,s.map=r,s.key=n),s.track()}}function Cn(t,e,n,r,s,i){const o=Ko.get(t);if(!o){mi++;return}const l=c=>{c&&c.trigger()};if(kc(),e==="clear")o.forEach(l);else{const c=ae(t),h=c&&Sc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===gi||!pn(g)&&g>=d)&&l(p)})}else switch(n!==void 0&&l(o.get(n)),h&&l(o.get(gi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Sr)),rs(t)&&l(o.get(Ll)));break;case"delete":c||(l(o.get(Sr)),rs(t)&&l(o.get(Ll)));break;case"set":rs(t)&&l(o.get(Sr));break}}xc()}function Qr(t){const e=Ce(t);return e===t?e:(Tt(e,"iterate",gi),jt(t)?e:e.map(gt))}function _a(t){return Tt(t=Ce(t),"iterate",gi),t}const by={__proto__:null,[Symbol.iterator](){return fl(this,Symbol.iterator,gt)},concat(...t){return Qr(this).concat(...t.map(e=>ae(e)?Qr(e):e))},entries(){return fl(this,"entries",t=>(t[1]=gt(t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(gt),arguments)},find(t,e){return vn(this,"find",t,e,gt,arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,gt,arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return pl(this,"includes",t)},indexOf(...t){return pl(this,"indexOf",t)},join(t){return Qr(this).join(t)},lastIndexOf(...t){return pl(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return Ks(this,"pop")},push(...t){return Ks(this,"push",t)},reduce(t,...e){return Oh(this,"reduce",t,e)},reduceRight(t,...e){return Oh(this,"reduceRight",t,e)},shift(){return Ks(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return Ks(this,"splice",t)},toReversed(){return Qr(this).toReversed()},toSorted(t){return Qr(this).toSorted(t)},toSpliced(...t){return Qr(this).toSpliced(...t)},unshift(...t){return Ks(this,"unshift",t)},values(){return fl(this,"values",gt)}};function fl(t,e,n){const r=_a(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ry=Array.prototype;function vn(t,e,n,r,s,i){const o=_a(t),l=o!==t&&!jt(t),c=o[e];if(c!==Ry[e]){const p=c.apply(t,i);return l?gt(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,gt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function Oh(t,e,n,r){const s=_a(t);let i=n;return s!==t&&(jt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,gt(l),c,t)}),s[e](i,...r)}function pl(t,e,n){const r=Ce(t);Tt(r,"iterate",gi);const s=r[e](...n);return(s===-1||s===!1)&&Lc(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function Ks(t,e,n=[]){dr(),kc();const r=Ce(t)[e].apply(t,n);return xc(),fr(),r}const Sy=Ac("__proto__,__v_isRef,__isVue"),up=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pn));function Py(t){pn(t)||(t=String(t));const e=Ce(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class hp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?jy:mp:i?pp:fp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let c;if(o&&(c=by[n]))return c;if(n==="hasOwnProperty")return Py}const l=Reflect.get(e,n,Et(e)?e:r);return(pn(n)?up.has(n):Sy(n))||(s||Tt(e,"get",n),i)?l:Et(l)?o&&Sc(n)?l:l.value:Le(l)?s?_p(l):va(l):l}}class dp extends hp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=kr(i);if(!jt(r)&&!kr(r)&&(i=Ce(i),r=Ce(r)),!ae(e)&&Et(i)&&!Et(r))return c?!1:(i.value=r,!0)}const o=ae(e)&&Sc(n)?Number(n)<e.length:Pe(e,n),l=Reflect.set(e,n,r,Et(e)?e:s);return e===Ce(s)&&(o?ir(r,i)&&Cn(e,"set",n,r):Cn(e,"add",n,r)),l}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!pn(n)||!up.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",ae(e)?"length":Sr),Reflect.ownKeys(e)}}class Cy extends hp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ky=new dp,xy=new Cy,Vy=new dp(!0);const Oc=t=>t,ya=t=>Reflect.getPrototypeOf(t);function _o(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ce(t),i=Ce(e);n||(ir(e,i)&&Tt(s,"get",e),Tt(s,"get",i));const{has:o}=ya(s),l=r?Oc:n?Fc:gt;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function yo(t,e=!1){const n=this.__v_raw,r=Ce(n),s=Ce(t);return e||(ir(t,s)&&Tt(r,"has",t),Tt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function vo(t,e=!1){return t=t.__v_raw,!e&&Tt(Ce(t),"iterate",Sr),Reflect.get(t,"size",t)}function Dh(t,e=!1){!e&&!jt(t)&&!kr(t)&&(t=Ce(t));const n=Ce(this);return ya(n).has.call(n,t)||(n.add(t),Cn(n,"add",t,t)),this}function Mh(t,e,n=!1){!n&&!jt(e)&&!kr(e)&&(e=Ce(e));const r=Ce(this),{has:s,get:i}=ya(r);let o=s.call(r,t);o||(t=Ce(t),o=s.call(r,t));const l=i.call(r,t);return r.set(t,e),o?ir(e,l)&&Cn(r,"set",t,e):Cn(r,"add",t,e),this}function Lh(t){const e=Ce(this),{has:n,get:r}=ya(e);let s=n.call(e,t);s||(t=Ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Cn(e,"delete",t,void 0),i}function Fh(){const t=Ce(this),e=t.size!==0,n=t.clear();return e&&Cn(t,"clear",void 0,void 0),n}function Eo(t,e){return function(r,s){const i=this,o=i.__v_raw,l=Ce(o),c=e?Oc:t?Fc:gt;return!t&&Tt(l,"iterate",Sr),o.forEach((h,d)=>r.call(s,c(h),c(d),i))}}function wo(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=rs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?Oc:e?Fc:gt;return!e&&Tt(i,"iterate",c?Ll:Sr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function qn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ny(){const t={get(i){return _o(this,i)},get size(){return vo(this)},has:yo,add:Dh,set:Mh,delete:Lh,clear:Fh,forEach:Eo(!1,!1)},e={get(i){return _o(this,i,!1,!0)},get size(){return vo(this)},has:yo,add(i){return Dh.call(this,i,!0)},set(i,o){return Mh.call(this,i,o,!0)},delete:Lh,clear:Fh,forEach:Eo(!1,!0)},n={get(i){return _o(this,i,!0)},get size(){return vo(this,!0)},has(i){return yo.call(this,i,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:Eo(!0,!1)},r={get(i){return _o(this,i,!0,!0)},get size(){return vo(this,!0)},has(i){return yo.call(this,i,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:Eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=wo(i,!1,!1),n[i]=wo(i,!0,!1),e[i]=wo(i,!1,!0),r[i]=wo(i,!0,!0)}),[t,n,e,r]}const[Oy,Dy,My,Ly]=Ny();function Dc(t,e){const n=e?t?Ly:My:t?Dy:Oy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const Fy={get:Dc(!1,!1)},Uy={get:Dc(!1,!0)},By={get:Dc(!0,!1)};const fp=new WeakMap,pp=new WeakMap,mp=new WeakMap,jy=new WeakMap;function $y(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qy(t){return t.__v_skip||!Object.isExtensible(t)?0:$y(hy(t))}function va(t){return kr(t)?t:Mc(t,!1,ky,Fy,fp)}function gp(t){return Mc(t,!1,Vy,Uy,pp)}function _p(t){return Mc(t,!0,xy,By,mp)}function Mc(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=qy(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function ss(t){return kr(t)?ss(t.__v_raw):!!(t&&t.__v_isReactive)}function kr(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function Lc(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Hy(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&Jf(t,"__v_skip",!0),t}const gt=t=>Le(t)?va(t):t,Fc=t=>Le(t)?_p(t):t;function Et(t){return t?t.__v_isRef===!0:!1}function tt(t){return yp(t,!1)}function zy(t){return yp(t,!0)}function yp(t,e){return Et(t)?t:new Wy(t,e)}class Wy{constructor(e,n){this.dep=new Nc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||kr(e);e=r?e:Ce(e),ir(e,n)&&(this._rawValue=e,this._value=r?e:gt(e),this.dep.trigger())}}function Ve(t){return Et(t)?t.value:t}const Ky={get:(t,e,n)=>e==="__v_raw"?t:Ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Et(s)&&!Et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function vp(t){return ss(t)?t:new Proxy(t,Ky)}class Gy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Nc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mi-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return sp(this),!0}get value(){const e=this.dep.track();return ap(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qy(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new Gy(r,s,n)}const To={},Go=new WeakMap;let Ir;function Yy(t,e=!1,n=Ir){if(n){let r=Go.get(n);r||Go.set(n,r=[]),r.push(t)}}function Jy(t,e,n=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=K=>s?K:jt(K)||s===!1||s===0?Tn(K,1):Tn(K);let d,p,g,_,P=!1,x=!1;if(Et(t)?(p=()=>t.value,P=jt(t)):ss(t)?(p=()=>h(t),P=!0):ae(t)?(x=!0,P=t.some(K=>ss(K)||jt(K)),p=()=>t.map(K=>{if(Et(K))return K.value;if(ss(K))return h(K);if(de(K))return c?c(K,2):K()})):de(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){dr();try{g()}finally{fr()}}const K=Ir;Ir=d;try{return c?c(t,3,[_]):t(_)}finally{Ir=K}}:p=on,e&&s){const K=p,pe=s===!0?1/0:s;p=()=>Tn(K(),pe)}const N=Ty(),$=()=>{d.stop(),N&&Rc(N.effects,d)};if(i&&e){const K=e;e=(...pe)=>{K(...pe),$()}}let j=x?new Array(t.length).fill(To):To;const z=K=>{if(!(!(d.flags&1)||!d.dirty&&!K))if(e){const pe=d.run();if(s||P||(x?pe.some((ge,I)=>ir(ge,j[I])):ir(pe,j))){g&&g();const ge=Ir;Ir=d;try{const I=[pe,j===To?void 0:x&&j[0]===To?[]:j,_];c?c(e,3,I):e(...I),j=pe}finally{Ir=ge}}}else d.run()};return l&&l(z),d=new np(p),d.scheduler=o?()=>o(z,!1):z,_=K=>Yy(K,!1,d),g=d.onStop=()=>{const K=Go.get(d);if(K){if(c)c(K,4);else for(const pe of K)pe();Go.delete(d)}},e?r?z(!0):j=d.run():o?o(z.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function Tn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Et(t))Tn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)Tn(t[r],e,n);else if(Ss(t)||rs(t))t.forEach(r=>{Tn(r,e,n)});else if(Yf(t)){for(const r in t)Tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ea(s,e,n)}}function mn(t,e,n,r){if(de(t)){const s=Oi(t,e,n,r);return s&&Gf(s)&&s.catch(i=>{Ea(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(mn(t[i],e,n,r));return s}}function Ea(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){dr(),Oi(i,null,10,[t,c,h]),fr();return}}Xy(t,n,s,r,o)}function Xy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let _i=!1,Fl=!1;const Pt=[];let tn=0;const is=[];let Wn=null,Yr=0;const Ep=Promise.resolve();let Uc=null;function Bc(t){const e=Uc||Ep;return t?e.then(this?t.bind(this):t):e}function Zy(t){let e=_i?tn+1:0,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=yi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function jc(t){if(!(t.flags&1)){const e=yi(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=yi(n)?Pt.push(t):Pt.splice(Zy(e),0,t),t.flags|=1,wp()}}function wp(){!_i&&!Fl&&(Fl=!0,Uc=Ep.then(Ip))}function ev(t){ae(t)?is.push(...t):Wn&&t.id===-1?Wn.splice(Yr+1,0,t):t.flags&1||(is.push(t),t.flags|=1),wp()}function Uh(t,e,n=_i?tn+1:0){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Tp(t){if(is.length){const e=[...new Set(is)].sort((n,r)=>yi(n)-yi(r));if(is.length=0,Wn){Wn.push(...e);return}for(Wn=e,Yr=0;Yr<Wn.length;Yr++){const n=Wn[Yr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wn=null,Yr=0}}const yi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ip(t){Fl=!1,_i=!0;try{for(tn=0;tn<Pt.length;tn++){const e=Pt[tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Oi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;tn<Pt.length;tn++){const e=Pt[tn];e&&(e.flags&=-2)}tn=0,Pt.length=0,Tp(),_i=!1,Uc=null,(Pt.length||is.length)&&Ip()}}let ot=null,Ap=null;function Qo(t){const e=ot;return ot=t,Ap=t&&t.type.__scopeId||null,e}function fe(t,e=ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Gh(-1);const i=Qo(e);let o;try{o=t(...s)}finally{Qo(i),r._d&&Gh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function an(t,e){if(ot===null)return t;const n=ba(ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Me]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(dr(),mn(c,n,8,[t.el,l,t,e]),fr())}}const tv=Symbol("_vte"),nv=t=>t.__isTeleport;function $c(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$c(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function bp(t,e){return de(t)?lt({name:t.name},e,{setup:t}):t}function Rp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ul(t,e,n,r,s=!1){if(ae(t)){t.forEach((P,x)=>Ul(P,e&&(ae(e)?e[x]:e),n,r,s));return}if(os(r)&&!s)return;const i=r.shapeFlag&4?ba(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Me?l.refs={}:l.refs,p=l.setupState,g=Ce(p),_=p===Me?()=>!1:P=>Pe(g,P);if(h!=null&&h!==c&&(Qe(h)?(d[h]=null,_(h)&&(p[h]=null)):Et(h)&&(h.value=null)),de(c))Oi(c,l,12,[o,d]);else{const P=Qe(c),x=Et(c);if(P||x){const N=()=>{if(t.f){const $=P?_(c)?p[c]:d[c]:c.value;s?ae($)&&Rc($,i):ae($)?$.includes(i)||$.push(i):P?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=o,_(c)&&(p[c]=o)):x&&(c.value=o,t.k&&(d[t.k]=o))};o?(N.id=-1,Nt(N,n)):N()}}}const os=t=>!!t.type.__asyncLoader,Sp=t=>t.type.__isKeepAlive;function rv(t,e){Pp(t,"a",e)}function sv(t,e){Pp(t,"da",e)}function Pp(t,e,n=vt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Sp(s.parent.vnode)&&iv(r,e,n,s),s=s.parent}}function iv(t,e,n,r){const s=wa(e,t,r,!0);Cp(()=>{Rc(r[e],s)},n)}function wa(t,e,n=vt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{dr();const l=Di(n),c=mn(e,n,t,o);return l(),fr(),c});return r?s.unshift(i):s.push(i),i}}const Dn=t=>(e,n=vt)=>{(!Aa||t==="sp")&&wa(t,(...r)=>e(...r),n)},ov=Dn("bm"),ds=Dn("m"),av=Dn("bu"),lv=Dn("u"),cv=Dn("bum"),Cp=Dn("um"),uv=Dn("sp"),hv=Dn("rtg"),dv=Dn("rtc");function fv(t,e=vt){wa("ec",t,e)}const pv="components";function mv(t,e){return _v(pv,t,!0,e)||t}const gv=Symbol.for("v-ndc");function _v(t,e,n=!0,r=!1){const s=ot||vt;if(s){const i=s.type;{const l=rE(i,!1);if(l&&(l===e||l===Qt(e)||l===ga(Qt(e))))return i}const o=Bh(s[t]||i[t],e)||Bh(s.appContext[t],e);return!o&&r?i:o}}function Bh(t,e){return t&&(t[e]||t[Qt(e)]||t[ga(Qt(e))])}function Bl(t,e,n,r){let s;const i=n,o=ae(t);if(o||Qe(t)){const l=o&&ss(t);let c=!1;l&&(c=!jt(t),t=_a(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?gt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Ps(t,e,n={},r,s){if(ot.ce||ot.parent&&os(ot.parent)&&ot.parent.ce)return ye(),yt(et,null,[re("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),ye();const o=i&&kp(i(n)),l=yt(et,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function kp(t){return t.some(e=>Jo(e)?!(e.type===or||e.type===et&&!kp(e.children)):!0)?t:null}const jl=t=>t?Yp(t)?ba(t):jl(t.parent):null,oi=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jl(t.parent),$root:t=>jl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qc(t),$forceUpdate:t=>t.f||(t.f=()=>{jc(t.update)}),$nextTick:t=>t.n||(t.n=Bc.bind(t.proxy)),$watch:t=>Fv.bind(t)}),ml=(t,e)=>t!==Me&&!t.__isScriptSetup&&Pe(t,e),yv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ml(r,e))return o[e]=1,r[e];if(s!==Me&&Pe(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Pe(h,e))return o[e]=3,i[e];if(n!==Me&&Pe(n,e))return o[e]=4,n[e];$l&&(o[e]=0)}}const d=oi[e];let p,g;if(d)return e==="$attrs"&&Tt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Me&&Pe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Pe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ml(s,e)?(s[e]=n,!0):r!==Me&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Me&&Pe(t,o)||ml(e,o)||(l=i[0])&&Pe(l,o)||Pe(r,o)||Pe(oi,o)||Pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jh(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $l=!0;function vv(t){const e=qc(t),n=t.proxy,r=t.ctx;$l=!1,e.beforeCreate&&$h(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:_,updated:P,activated:x,deactivated:N,beforeDestroy:$,beforeUnmount:j,destroyed:z,unmounted:K,render:pe,renderTracked:ge,renderTriggered:I,errorCaptured:v,serverPrefetch:T,expose:A,inheritAttrs:b,components:R,directives:w,filters:At}=e;if(h&&Ev(h,r,null),o)for(const we in o){const _e=o[we];de(_e)&&(r[we]=_e.bind(n))}if(s){const we=s.call(n,n);Le(we)&&(t.data=va(we))}if($l=!0,i)for(const we in i){const _e=i[we],xt=de(_e)?_e.bind(n,n):de(_e.get)?_e.get.bind(n,n):on,qt=!de(_e)&&de(_e.set)?_e.set.bind(n):on,Ft=zt({get:xt,set:qt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:Be=>Ft.value=Be})}if(l)for(const we in l)xp(l[we],r,n,we);if(c){const we=de(c)?c.call(n):c;Reflect.ownKeys(we).forEach(_e=>{No(_e,we[_e])})}d&&$h(d,t,"c");function ze(we,_e){ae(_e)?_e.forEach(xt=>we(xt.bind(n))):_e&&we(_e.bind(n))}if(ze(ov,p),ze(ds,g),ze(av,_),ze(lv,P),ze(rv,x),ze(sv,N),ze(fv,v),ze(dv,ge),ze(hv,I),ze(cv,j),ze(Cp,K),ze(uv,T),ae(A))if(A.length){const we=t.exposed||(t.exposed={});A.forEach(_e=>{Object.defineProperty(we,_e,{get:()=>n[_e],set:xt=>n[_e]=xt})})}else t.exposed||(t.exposed={});pe&&t.render===on&&(t.render=pe),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),w&&(t.directives=w),T&&Rp(t)}function Ev(t,e,n=on){ae(t)&&(t=ql(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=ln(s.from||r,s.default,!0):i=ln(s.from||r):i=ln(s),Et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function $h(t,e,n){mn(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xp(t,e,n,r){let s=r.includes(".")?zp(n,r):()=>n[r];if(Qe(t)){const i=e[t];de(i)&&Oo(s,i)}else if(de(t))Oo(s,t.bind(n));else if(Le(t))if(ae(t))t.forEach(i=>xp(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Oo(s,i,t)}}function qc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Yo(c,h,o,!0)),Yo(c,e,o)),Le(e)&&i.set(e,c),c}function Yo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yo(t,i,n,!0),s&&s.forEach(o=>Yo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=wv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const wv={data:qh,props:Hh,emits:Hh,methods:Js,computed:Js,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Js,directives:Js,watch:Iv,provide:qh,inject:Tv};function qh(t,e){return e?t?function(){return lt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function Tv(t,e){return Js(ql(t),ql(e))}function ql(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?lt(Object.create(null),t,e):e}function Hh(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:lt(Object.create(null),jh(t),jh(e??{})):e}function Iv(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function Vp(){return{app:null,config:{isNativeTag:cy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Av=0;function bv(t,e){return function(r,s=null){de(r)||(r=lt({},r)),s!=null&&!Le(s)&&(s=null);const i=Vp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Av++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:iE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&de(d.install)?(o.add(d),d.install(h,...p)):de(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!c){const _=h._ceVNode||re(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(_,d):t(_,d,g),c=!0,h._container=d,d.__vue_app__=h,ba(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(mn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=as;as=h;try{return d()}finally{as=p}}};return h}}let as=null;function No(t,e){if(vt){let n=vt.provides;const r=vt.parent&&vt.parent.provides;r===n&&(n=vt.provides=Object.create(r)),n[t]=e}}function ln(t,e,n=!1){const r=vt||ot;if(r||as){const s=as?as._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}const Np={},Op=()=>Object.create(Np),Dp=t=>Object.getPrototypeOf(t)===Np;function Rv(t,e,n,r=!1){const s={},i=Op();t.propsDefaults=Object.create(null),Mp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:gp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Sv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ce(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Ta(t.emitsOptions,g))continue;const _=e[g];if(c)if(Pe(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const P=Qt(g);s[P]=Hl(c,l,P,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Mp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Pe(e,p)&&((d=Fr(p))===p||!Pe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Hl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],h=!0)}h&&Cn(t.attrs,"set","")}function Mp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(si(c))continue;const h=e[c];let d;s&&Pe(s,d=Qt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Ta(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ce(n),h=l||Me;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Hl(s,c,p,h[p],t,!Pe(h,p))}}return o}function Hl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Pe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Di(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}const Pv=new WeakMap;function Lp(t,e,n=!1){const r=n?Pv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!de(t)){const d=p=>{c=!0;const[g,_]=Lp(p,e,!0);lt(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Le(t)&&r.set(t,ns),ns;if(ae(i))for(let d=0;d<i.length;d++){const p=Qt(i[d]);zh(p)&&(o[p]=Me)}else if(i)for(const d in i){const p=Qt(d);if(zh(p)){const g=i[d],_=o[p]=ae(g)||de(g)?{type:g}:lt({},g),P=_.type;let x=!1,N=!0;if(ae(P))for(let $=0;$<P.length;++$){const j=P[$],z=de(j)&&j.name;if(z==="Boolean"){x=!0;break}else z==="String"&&(N=!1)}else x=de(P)&&P.name==="Boolean";_[0]=x,_[1]=N,(x||Pe(_,"default"))&&l.push(p)}}const h=[o,l];return Le(t)&&r.set(t,h),h}function zh(t){return t[0]!=="$"&&!si(t)}const Fp=t=>t[0]==="_"||t==="$stable",Hc=t=>ae(t)?t.map(nn):[nn(t)],Cv=(t,e,n)=>{if(e._n)return e;const r=fe((...s)=>Hc(e(...s)),n);return r._c=!1,r},Up=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fp(s))continue;const i=t[s];if(de(i))e[s]=Cv(s,i,r);else if(i!=null){const o=Hc(i);e[s]=()=>o}}},Bp=(t,e)=>{const n=Hc(e);t.slots.default=()=>n},jp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},kv=(t,e,n)=>{const r=t.slots=Op();if(t.vnode.shapeFlag&32){const s=e._;s?(jp(r,e,n),n&&Jf(r,"_",s,!0)):Up(e,r)}else e&&Bp(t,e)},xv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:jp(s,e,n):(i=!e.$stable,Up(e,s)),o=e}else e&&(Bp(t,e),o={default:1});if(i)for(const l in s)!Fp(l)&&o[l]==null&&delete s[l]},Nt=zv;function Vv(t){return Nv(t)}function Nv(t,e){const n=Xf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:_=on,insertStaticContent:P}=t,x=(y,E,C,M=null,V=null,F=null,G=void 0,H=null,q=!!E.dynamicChildren)=>{if(y===E)return;y&&!Gs(y,E)&&(M=O(y),Be(y,V,F,!0),y=null),E.patchFlag===-2&&(q=!1,E.dynamicChildren=null);const{type:U,ref:ie,shapeFlag:Y}=E;switch(U){case Ia:N(y,E,C,M);break;case or:$(y,E,C,M);break;case yl:y==null&&j(E,C,M,G);break;case et:R(y,E,C,M,V,F,G,H,q);break;default:Y&1?pe(y,E,C,M,V,F,G,H,q):Y&6?w(y,E,C,M,V,F,G,H,q):(Y&64||Y&128)&&U.process(y,E,C,M,V,F,G,H,q,Z)}ie!=null&&V&&Ul(ie,y&&y.ref,F,E||y,!E)},N=(y,E,C,M)=>{if(y==null)r(E.el=l(E.children),C,M);else{const V=E.el=y.el;E.children!==y.children&&h(V,E.children)}},$=(y,E,C,M)=>{y==null?r(E.el=c(E.children||""),C,M):E.el=y.el},j=(y,E,C,M)=>{[y.el,y.anchor]=P(y.children,E,C,M,y.el,y.anchor)},z=({el:y,anchor:E},C,M)=>{let V;for(;y&&y!==E;)V=g(y),r(y,C,M),y=V;r(E,C,M)},K=({el:y,anchor:E})=>{let C;for(;y&&y!==E;)C=g(y),s(y),y=C;s(E)},pe=(y,E,C,M,V,F,G,H,q)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),y==null?ge(E,C,M,V,F,G,H,q):T(y,E,V,F,G,H,q)},ge=(y,E,C,M,V,F,G,H)=>{let q,U;const{props:ie,shapeFlag:Y,transition:ne,dirs:ee}=y;if(q=y.el=o(y.type,F,ie&&ie.is,ie),Y&8?d(q,y.children):Y&16&&v(y.children,q,null,M,V,gl(y,F),G,H),ee&&wr(y,null,M,"created"),I(q,y,y.scopeId,G,M),ie){for(const Se in ie)Se!=="value"&&!si(Se)&&i(q,Se,null,ie[Se],F,M);"value"in ie&&i(q,"value",null,ie.value,F),(U=ie.onVnodeBeforeMount)&&en(U,M,y)}ee&&wr(y,null,M,"beforeMount");const oe=Ov(V,ne);oe&&ne.beforeEnter(q),r(q,E,C),((U=ie&&ie.onVnodeMounted)||oe||ee)&&Nt(()=>{U&&en(U,M,y),oe&&ne.enter(q),ee&&wr(y,null,M,"mounted")},V)},I=(y,E,C,M,V)=>{if(C&&_(y,C),M)for(let F=0;F<M.length;F++)_(y,M[F]);if(V){let F=V.subTree;if(E===F||Kp(F.type)&&(F.ssContent===E||F.ssFallback===E)){const G=V.vnode;I(y,G,G.scopeId,G.slotScopeIds,V.parent)}}},v=(y,E,C,M,V,F,G,H,q=0)=>{for(let U=q;U<y.length;U++){const ie=y[U]=H?Kn(y[U]):nn(y[U]);x(null,ie,E,C,M,V,F,G,H)}},T=(y,E,C,M,V,F,G)=>{const H=E.el=y.el;let{patchFlag:q,dynamicChildren:U,dirs:ie}=E;q|=y.patchFlag&16;const Y=y.props||Me,ne=E.props||Me;let ee;if(C&&Tr(C,!1),(ee=ne.onVnodeBeforeUpdate)&&en(ee,C,E,y),ie&&wr(E,y,C,"beforeUpdate"),C&&Tr(C,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&d(H,""),U?A(y.dynamicChildren,U,H,C,M,gl(E,V),F):G||_e(y,E,H,null,C,M,gl(E,V),F,!1),q>0){if(q&16)b(H,Y,ne,C,V);else if(q&2&&Y.class!==ne.class&&i(H,"class",null,ne.class,V),q&4&&i(H,"style",Y.style,ne.style,V),q&8){const oe=E.dynamicProps;for(let Se=0;Se<oe.length;Se++){const Ae=oe[Se],ut=Y[Ae],Xe=ne[Ae];(Xe!==ut||Ae==="value")&&i(H,Ae,ut,Xe,V,C)}}q&1&&y.children!==E.children&&d(H,E.children)}else!G&&U==null&&b(H,Y,ne,C,V);((ee=ne.onVnodeUpdated)||ie)&&Nt(()=>{ee&&en(ee,C,E,y),ie&&wr(E,y,C,"updated")},M)},A=(y,E,C,M,V,F,G)=>{for(let H=0;H<E.length;H++){const q=y[H],U=E[H],ie=q.el&&(q.type===et||!Gs(q,U)||q.shapeFlag&70)?p(q.el):C;x(q,U,ie,null,M,V,F,G,!0)}},b=(y,E,C,M,V)=>{if(E!==C){if(E!==Me)for(const F in E)!si(F)&&!(F in C)&&i(y,F,E[F],null,V,M);for(const F in C){if(si(F))continue;const G=C[F],H=E[F];G!==H&&F!=="value"&&i(y,F,H,G,V,M)}"value"in C&&i(y,"value",E.value,C.value,V)}},R=(y,E,C,M,V,F,G,H,q)=>{const U=E.el=y?y.el:l(""),ie=E.anchor=y?y.anchor:l("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:ee}=E;ee&&(H=H?H.concat(ee):ee),y==null?(r(U,C,M),r(ie,C,M),v(E.children||[],C,ie,V,F,G,H,q)):Y>0&&Y&64&&ne&&y.dynamicChildren?(A(y.dynamicChildren,ne,C,V,F,G,H),(E.key!=null||V&&E===V.subTree)&&$p(y,E,!0)):_e(y,E,C,ie,V,F,G,H,q)},w=(y,E,C,M,V,F,G,H,q)=>{E.slotScopeIds=H,y==null?E.shapeFlag&512?V.ctx.activate(E,C,M,G,q):At(E,C,M,V,F,G,q):Lt(y,E,q)},At=(y,E,C,M,V,F,G)=>{const H=y.component=Xv(y,M,V);if(Sp(y)&&(H.ctx.renderer=Z),Zv(H,!1,G),H.asyncDep){if(V&&V.registerDep(H,ze,G),!y.el){const q=H.subTree=re(or);$(null,q,E,C)}}else ze(H,y,E,C,V,F,G)},Lt=(y,E,C)=>{const M=E.component=y.component;if(qv(y,E,C))if(M.asyncDep&&!M.asyncResolved){we(M,E,C);return}else M.next=E,M.update();else E.el=y.el,M.vnode=E},ze=(y,E,C,M,V,F,G)=>{const H=()=>{if(y.isMounted){let{next:Y,bu:ne,u:ee,parent:oe,vnode:Se}=y;{const ht=qp(y);if(ht){Y&&(Y.el=Se.el,we(y,Y,G)),ht.asyncDep.then(()=>{y.isUnmounted||H()});return}}let Ae=Y,ut;Tr(y,!1),Y?(Y.el=Se.el,we(y,Y,G)):Y=Se,ne&&Vo(ne),(ut=Y.props&&Y.props.onVnodeBeforeUpdate)&&en(ut,oe,Y,Se),Tr(y,!0);const Xe=_l(y),nt=y.subTree;y.subTree=Xe,x(nt,Xe,p(nt.el),O(nt),y,V,F),Y.el=Xe.el,Ae===null&&Hv(y,Xe.el),ee&&Nt(ee,V),(ut=Y.props&&Y.props.onVnodeUpdated)&&Nt(()=>en(ut,oe,Y,Se),V)}else{let Y;const{el:ne,props:ee}=E,{bm:oe,m:Se,parent:Ae,root:ut,type:Xe}=y,nt=os(E);if(Tr(y,!1),oe&&Vo(oe),!nt&&(Y=ee&&ee.onVnodeBeforeMount)&&en(Y,Ae,E),Tr(y,!0),ne&&Ne){const ht=()=>{y.subTree=_l(y),Ne(ne,y.subTree,y,V,null)};nt&&Xe.__asyncHydrate?Xe.__asyncHydrate(ne,y,ht):ht()}else{ut.ce&&ut.ce._injectChildStyle(Xe);const ht=y.subTree=_l(y);x(null,ht,C,M,y,V,F),E.el=ht.el}if(Se&&Nt(Se,V),!nt&&(Y=ee&&ee.onVnodeMounted)){const ht=E;Nt(()=>en(Y,Ae,ht),V)}(E.shapeFlag&256||Ae&&os(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&y.a&&Nt(y.a,V),y.isMounted=!0,E=C=M=null}};y.scope.on();const q=y.effect=new np(H);y.scope.off();const U=y.update=q.run.bind(q),ie=y.job=q.runIfDirty.bind(q);ie.i=y,ie.id=y.uid,q.scheduler=()=>jc(ie),Tr(y,!0),U()},we=(y,E,C)=>{E.component=y;const M=y.vnode.props;y.vnode=E,y.next=null,Sv(y,E.props,M,C),xv(y,E.children,C),dr(),Uh(y),fr()},_e=(y,E,C,M,V,F,G,H,q=!1)=>{const U=y&&y.children,ie=y?y.shapeFlag:0,Y=E.children,{patchFlag:ne,shapeFlag:ee}=E;if(ne>0){if(ne&128){qt(U,Y,C,M,V,F,G,H,q);return}else if(ne&256){xt(U,Y,C,M,V,F,G,H,q);return}}ee&8?(ie&16&&Ct(U,V,F),Y!==U&&d(C,Y)):ie&16?ee&16?qt(U,Y,C,M,V,F,G,H,q):Ct(U,V,F,!0):(ie&8&&d(C,""),ee&16&&v(Y,C,M,V,F,G,H,q))},xt=(y,E,C,M,V,F,G,H,q)=>{y=y||ns,E=E||ns;const U=y.length,ie=E.length,Y=Math.min(U,ie);let ne;for(ne=0;ne<Y;ne++){const ee=E[ne]=q?Kn(E[ne]):nn(E[ne]);x(y[ne],ee,C,null,V,F,G,H,q)}U>ie?Ct(y,V,F,!0,!1,Y):v(E,C,M,V,F,G,H,q,Y)},qt=(y,E,C,M,V,F,G,H,q)=>{let U=0;const ie=E.length;let Y=y.length-1,ne=ie-1;for(;U<=Y&&U<=ne;){const ee=y[U],oe=E[U]=q?Kn(E[U]):nn(E[U]);if(Gs(ee,oe))x(ee,oe,C,null,V,F,G,H,q);else break;U++}for(;U<=Y&&U<=ne;){const ee=y[Y],oe=E[ne]=q?Kn(E[ne]):nn(E[ne]);if(Gs(ee,oe))x(ee,oe,C,null,V,F,G,H,q);else break;Y--,ne--}if(U>Y){if(U<=ne){const ee=ne+1,oe=ee<ie?E[ee].el:M;for(;U<=ne;)x(null,E[U]=q?Kn(E[U]):nn(E[U]),C,oe,V,F,G,H,q),U++}}else if(U>ne)for(;U<=Y;)Be(y[U],V,F,!0),U++;else{const ee=U,oe=U,Se=new Map;for(U=oe;U<=ne;U++){const bt=E[U]=q?Kn(E[U]):nn(E[U]);bt.key!=null&&Se.set(bt.key,U)}let Ae,ut=0;const Xe=ne-oe+1;let nt=!1,ht=0;const Un=new Array(Xe);for(U=0;U<Xe;U++)Un[U]=0;for(U=ee;U<=Y;U++){const bt=y[U];if(ut>=Xe){Be(bt,V,F,!0);continue}let Ut;if(bt.key!=null)Ut=Se.get(bt.key);else for(Ae=oe;Ae<=ne;Ae++)if(Un[Ae-oe]===0&&Gs(bt,E[Ae])){Ut=Ae;break}Ut===void 0?Be(bt,V,F,!0):(Un[Ut-oe]=U+1,Ut>=ht?ht=Ut:nt=!0,x(bt,E[Ut],C,null,V,F,G,H,q),ut++)}const qr=nt?Dv(Un):ns;for(Ae=qr.length-1,U=Xe-1;U>=0;U--){const bt=oe+U,Ut=E[bt],Hr=bt+1<ie?E[bt+1].el:M;Un[U]===0?x(null,Ut,C,Hr,V,F,G,H,q):nt&&(Ae<0||U!==qr[Ae]?Ft(Ut,C,Hr,2):Ae--)}}},Ft=(y,E,C,M,V=null)=>{const{el:F,type:G,transition:H,children:q,shapeFlag:U}=y;if(U&6){Ft(y.component.subTree,E,C,M);return}if(U&128){y.suspense.move(E,C,M);return}if(U&64){G.move(y,E,C,Z);return}if(G===et){r(F,E,C);for(let Y=0;Y<q.length;Y++)Ft(q[Y],E,C,M);r(y.anchor,E,C);return}if(G===yl){z(y,E,C);return}if(M!==2&&U&1&&H)if(M===0)H.beforeEnter(F),r(F,E,C),Nt(()=>H.enter(F),V);else{const{leave:Y,delayLeave:ne,afterLeave:ee}=H,oe=()=>r(F,E,C),Se=()=>{Y(F,()=>{oe(),ee&&ee()})};ne?ne(F,oe,Se):Se()}else r(F,E,C)},Be=(y,E,C,M=!1,V=!1)=>{const{type:F,props:G,ref:H,children:q,dynamicChildren:U,shapeFlag:ie,patchFlag:Y,dirs:ne,cacheIndex:ee}=y;if(Y===-2&&(V=!1),H!=null&&Ul(H,null,C,y,!0),ee!=null&&(E.renderCache[ee]=void 0),ie&256){E.ctx.deactivate(y);return}const oe=ie&1&&ne,Se=!os(y);let Ae;if(Se&&(Ae=G&&G.onVnodeBeforeUnmount)&&en(Ae,E,y),ie&6)Zt(y.component,C,M);else{if(ie&128){y.suspense.unmount(C,M);return}oe&&wr(y,null,E,"beforeUnmount"),ie&64?y.type.remove(y,E,C,Z,M):U&&!U.hasOnce&&(F!==et||Y>0&&Y&64)?Ct(U,E,C,!1,!0):(F===et&&Y&384||!V&&ie&16)&&Ct(q,E,C),M&&je(y)}(Se&&(Ae=G&&G.onVnodeUnmounted)||oe)&&Nt(()=>{Ae&&en(Ae,E,y),oe&&wr(y,null,E,"unmounted")},C)},je=y=>{const{type:E,el:C,anchor:M,transition:V}=y;if(E===et){Fn(C,M);return}if(E===yl){K(y);return}const F=()=>{s(C),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(y.shapeFlag&1&&V&&!V.persisted){const{leave:G,delayLeave:H}=V,q=()=>G(C,F);H?H(y.el,F,q):q()}else F()},Fn=(y,E)=>{let C;for(;y!==E;)C=g(y),s(y),y=C;s(E)},Zt=(y,E,C)=>{const{bum:M,scope:V,job:F,subTree:G,um:H,m:q,a:U}=y;Wh(q),Wh(U),M&&Vo(M),V.stop(),F&&(F.flags|=8,Be(G,y,E,C)),H&&Nt(H,E),Nt(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Ct=(y,E,C,M=!1,V=!1,F=0)=>{for(let G=F;G<y.length;G++)Be(y[G],E,C,M,V)},O=y=>{if(y.shapeFlag&6)return O(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=g(y.anchor||y.el),C=E&&E[tv];return C?g(C):E};let J=!1;const Q=(y,E,C)=>{y==null?E._vnode&&Be(E._vnode,null,null,!0):x(E._vnode||null,y,E,null,null,null,C),E._vnode=y,J||(J=!0,Uh(),Tp(),J=!1)},Z={p:x,um:Be,m:Ft,r:je,mt:At,mc:v,pc:_e,pbc:A,n:O,o:t};let Te,Ne;return{render:Q,hydrate:Te,createApp:bv(Q,Te)}}function gl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Tr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ov(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $p(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Kn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&$p(o,l)),l.type===Ia&&(l.el=o.el)}}function Dv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function qp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qp(e)}function Wh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Mv=Symbol.for("v-scx"),Lv=()=>ln(Mv);function Oo(t,e,n){return Hp(t,e,n)}function Hp(t,e,n=Me){const{immediate:r,deep:s,flush:i,once:o}=n,l=lt({},n);let c;if(Aa)if(i==="sync"){const g=Lv();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!e||r)l.once=!0;else{const g=()=>{};return g.stop=on,g.resume=on,g.pause=on,g}const h=vt;l.call=(g,_,P)=>mn(g,h,_,P);let d=!1;i==="post"?l.scheduler=g=>{Nt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(g,_)=>{_?g():jc(g)}),l.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=Jy(t,e,l);return c&&c.push(p),p}function Fv(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?zp(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Di(this),l=Hp(s,i.bind(r),n);return o(),l}function zp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Uv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qt(e)}Modifiers`]||t[`${Fr(e)}Modifiers`];function Bv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&Uv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Qe(d)?d.trim():d)),o.number&&(s=n.map(Wo)));let l,c=r[l=ul(e)]||r[l=ul(Qt(e))];!c&&i&&(c=r[l=ul(Fr(e))]),c&&mn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,mn(h,t,6,s)}}function Wp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!de(t)){const c=h=>{const d=Wp(h,e,!0);d&&(l=!0,lt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Le(t)&&r.set(t,null),null):(ae(i)?i.forEach(c=>o[c]=null):lt(o,i),Le(t)&&r.set(t,o),o)}function Ta(t,e){return!t||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Fr(e))||Pe(t,e))}function _l(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:_,ctx:P,inheritAttrs:x}=t,N=Qo(t);let $,j;try{if(n.shapeFlag&4){const K=s||r,pe=K;$=nn(h.call(pe,K,d,p,_,g,P)),j=l}else{const K=e;$=nn(K.length>1?K(p,{attrs:l,slots:o,emit:c}):K(p,null)),j=e.props?l:jv(l)}}catch(K){ai.length=0,Ea(K,t,1),$=re(or)}let z=$;if(j&&x!==!1){const K=Object.keys(j),{shapeFlag:pe}=z;K.length&&pe&7&&(i&&K.some(bc)&&(j=$v(j,i)),z=fs(z,j,!1,!0))}return n.dirs&&(z=fs(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&$c(z,n.transition),$=z,Qo(N),$}const jv=t=>{let e;for(const n in t)(n==="class"||n==="style"||pa(n))&&((e||(e={}))[n]=t[n]);return e},$v=(t,e)=>{const n={};for(const r in t)(!bc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function qv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Kh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!Ta(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Kh(r,o,h):!0:!!o;return!1}function Kh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function Hv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Kp=t=>t.__isSuspense;function zv(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):ev(t)}const et=Symbol.for("v-fgt"),Ia=Symbol.for("v-txt"),or=Symbol.for("v-cmt"),yl=Symbol.for("v-stc"),ai=[];let Dt=null;function ye(t=!1){ai.push(Dt=t?null:[])}function Wv(){ai.pop(),Dt=ai[ai.length-1]||null}let vi=1;function Gh(t){vi+=t,t<0&&Dt&&(Dt.hasOnce=!0)}function Gp(t){return t.dynamicChildren=vi>0?Dt||ns:null,Wv(),vi>0&&Dt&&Dt.push(t),t}function Ge(t,e,n,r,s,i){return Gp(B(t,e,n,r,s,i,!0))}function yt(t,e,n,r,s){return Gp(re(t,e,n,r,s,!0))}function Jo(t){return t?t.__v_isVNode===!0:!1}function Gs(t,e){return t.type===e.type&&t.key===e.key}const Qp=({key:t})=>t??null,Do=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||Et(t)||de(t)?{i:ot,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,r=0,s=null,i=t===et?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qp(e),ref:e&&Do(e),scopeId:Ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ot};return l?(zc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),vi>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const re=Kv;function Kv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===gv)&&(t=or),Jo(t)){const l=fs(t,e,!0);return n&&zc(l,n),vi>0&&!i&&Dt&&(l.shapeFlag&6?Dt[Dt.indexOf(t)]=l:Dt.push(l)),l.patchFlag=-2,l}if(sE(t)&&(t=t.__vccOpts),e){e=Gv(e);let{class:l,style:c}=e;l&&!Qe(l)&&(e.class=Rr(l)),Le(c)&&(Lc(c)&&!ae(c)&&(c=lt({},c)),e.style=Pc(c))}const o=Qe(t)?1:Kp(t)?128:nv(t)?64:Le(t)?4:de(t)?2:0;return B(t,e,n,r,s,o,i,!0)}function Gv(t){return t?Lc(t)||Dp(t)?lt({},t):t:null}function fs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Qv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Qp(h),ref:e&&e.ref?n&&i?ae(i)?i.concat(Do(e)):[i,Do(e)]:Do(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fs(t.ssContent),ssFallback:t.ssFallback&&fs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&$c(d,c.clone(d)),d}function me(t=" ",e=0){return re(Ia,null,t,e)}function cn(t="",e=!1){return e?(ye(),yt(or,null,t)):re(or,null,t)}function nn(t){return t==null||typeof t=="boolean"?re(or):ae(t)?re(et,null,t.slice()):typeof t=="object"?Kn(t):re(Ia,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fs(t)}function zc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Dp(e)?e._ctx=ot:s===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),r&64?(n=16,e=[me(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Rr([e.class,r.class]));else if(s==="style")e.style=Pc([e.style,r.style]);else if(pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){mn(t,e,7,[n,r])}const Yv=Vp();let Jv=0;function Xv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Yv,i={uid:Jv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lp(r,s),emitsOptions:Wp(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Bv.bind(null,i),t.ce&&t.ce(i),i}let vt=null,Xo,zl;{const t=Xf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Xo=e("__VUE_INSTANCE_SETTERS__",n=>vt=n),zl=e("__VUE_SSR_SETTERS__",n=>Aa=n)}const Di=t=>{const e=vt;return Xo(t),t.scope.on(),()=>{t.scope.off(),Xo(e)}},Qh=()=>{vt&&vt.scope.off(),Xo(null)};function Yp(t){return t.vnode.shapeFlag&4}let Aa=!1;function Zv(t,e=!1,n=!1){e&&zl(e);const{props:r,children:s}=t.vnode,i=Yp(t);Rv(t,r,i,e),kv(t,s,n);const o=i?eE(t,e):void 0;return e&&zl(!1),o}function eE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yv);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?nE(t):null,i=Di(t);dr();const o=Oi(r,t,0,[t.props,s]);if(fr(),i(),Gf(o)){if(os(t)||Rp(t),o.then(Qh,Qh),e)return o.then(l=>{Yh(t,l,e)}).catch(l=>{Ea(l,t,0)});t.asyncDep=o}else Yh(t,o,e)}else Jp(t,e)}function Yh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=vp(e)),Jp(t,n)}let Jh;function Jp(t,e,n){const r=t.type;if(!t.render){if(!e&&Jh&&!r.render){const s=r.template||qc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=lt(lt({isCustomElement:i,delimiters:l},o),c);r.render=Jh(s,h)}}t.render=r.render||on}{const s=Di(t);dr();try{vv(t)}finally{fr(),s()}}}const tE={get(t,e){return Tt(t,"get",""),t[e]}};function nE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tE),slots:t.slots,emit:t.emit,expose:e}}function ba(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vp(Hy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oi)return oi[n](t)},has(e,n){return n in e||n in oi}})):t.proxy}function rE(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function sE(t){return de(t)&&"__vccOpts"in t}const zt=(t,e)=>Qy(t,e,Aa);function Ei(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ae(e)?Jo(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jo(n)&&(n=[n]),re(t,e,n))}const iE="3.5.8";/**
* @vue/runtime-dom v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wl;const Xh=typeof window<"u"&&window.trustedTypes;if(Xh)try{Wl=Xh.createPolicy("vue",{createHTML:t=>t})}catch{}const Xp=Wl?t=>Wl.createHTML(t):t=>t,oE="http://www.w3.org/2000/svg",aE="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,Zh=wn&&wn.createElement("template"),lE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?wn.createElementNS(oE,t):e==="mathml"?wn.createElementNS(aE,t):n?wn.createElement(t,{is:n}):wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zh.innerHTML=Xp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Zh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cE=Symbol("_vtc");function uE(t,e,n){const r=t[cE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ed=Symbol("_vod"),hE=Symbol("_vsh"),dE=Symbol(""),fE=/(^|;)\s*display\s*:/;function pE(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Mo(r,l,"")}else for(const o in e)n[o]==null&&Mo(r,o,"");for(const o in n)o==="display"&&(i=!0),Mo(r,o,n[o])}else if(s){if(e!==n){const o=r[dE];o&&(n+=";"+o),r.cssText=n,i=fE.test(n)}}else e&&t.removeAttribute("style");ed in t&&(t[ed]=i?r.display:"",t[hE]&&(r.display="none"))}const td=/\s*!important$/;function Mo(t,e,n){if(ae(n))n.forEach(r=>Mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mE(t,e);td.test(n)?t.setProperty(Fr(r),n.replace(td,""),"important"):t[r]=n}}const nd=["Webkit","Moz","ms"],vl={};function mE(t,e){const n=vl[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return vl[e]=r;r=ga(r);for(let s=0;s<nd.length;s++){const i=nd[s]+r;if(i in t)return vl[e]=i}return e}const rd="http://www.w3.org/1999/xlink";function sd(t,e,n,r,s,i=vy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rd,e.slice(6,e.length)):t.setAttributeNS(rd,e,n):n==null||i&&!Zf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":pn(n)?String(n):n)}function gE(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Zf(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function In(t,e,n,r){t.addEventListener(e,n,r)}function _E(t,e,n,r){t.removeEventListener(e,n,r)}const id=Symbol("_vei");function yE(t,e,n,r,s=null){const i=t[id]||(t[id]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=vE(e);if(r){const h=i[e]=TE(r,s);In(t,l,h,c)}else o&&(_E(t,l,o,c),i[e]=void 0)}}const od=/(?:Once|Passive|Capture)$/;function vE(t){let e;if(od.test(t)){e={};let r;for(;r=t.match(od);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let El=0;const EE=Promise.resolve(),wE=()=>El||(EE.then(()=>El=0),El=Date.now());function TE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;mn(IE(r,n.value),e,5,[r])};return n.value=t,n.attached=wE(),n}function IE(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,AE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?uE(t,r,o):e==="style"?pE(t,n,r):pa(e)?bc(e)||yE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bE(t,e,r,o))?(gE(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sd(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sd(t,e,r,o))};function bE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ad(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ad(e)&&Qe(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Qe(n)))}const ar=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>Vo(e,n):e};function RE(t){t.target.composing=!0}function ld(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $t=Symbol("_assign"),lr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[$t]=ar(s);const i=r||s.props&&s.props.type==="number";In(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Wo(l)),t[$t](l)}),n&&In(t,"change",()=>{t.value=t.value.trim()}),e||(In(t,"compositionstart",RE),In(t,"compositionend",ld),In(t,"change",ld))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[$t]=ar(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Wo(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Zp={deep:!0,created(t,e,n){t[$t]=ar(n),In(t,"change",()=>{const r=t._modelValue,s=ps(t),i=t.checked,o=t[$t];if(ae(r)){const l=Cc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(Ss(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(tm(t,i))})},mounted:cd,beforeUpdate(t,e,n){t[$t]=ar(n),cd(t,e,n)}};function cd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;ae(e)?s=Cc(e,r.props.value)>-1:Ss(e)?s=e.has(r.props.value):s=Cr(e,tm(t,!0)),t.checked!==s&&(t.checked=s)}const SE={created(t,{value:e},n){t.checked=Cr(e,n.props.value),t[$t]=ar(n),In(t,"change",()=>{t[$t](ps(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[$t]=ar(r),e!==n&&(t.checked=Cr(e,r.props.value))}},em={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ss(e);In(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Wo(ps(o)):ps(o));t[$t](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Bc(()=>{t._assigning=!1})}),t[$t]=ar(r)},mounted(t,{value:e,modifiers:{number:n}}){ud(t,e)},beforeUpdate(t,e,n){t[$t]=ar(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||ud(t,e)}};function ud(t,e,n){const r=t.multiple,s=ae(e);if(!(r&&!s&&!Ss(e))){for(let i=0,o=t.options.length;i<o;i++){const l=t.options[i],c=ps(l);if(r)if(s){const h=typeof c;h==="string"||h==="number"?l.selected=e.some(d=>String(d)===String(c)):l.selected=Cc(e,c)>-1}else l.selected=e.has(c);else if(Cr(ps(l),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ps(t){return"_value"in t?t._value:t.value}function tm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nm={created(t,e,n){Io(t,e,n,null,"created")},mounted(t,e,n){Io(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Io(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Io(t,e,n,r,"updated")}};function PE(t,e){switch(t){case"SELECT":return em;case"TEXTAREA":return lr;default:switch(e){case"checkbox":return Zp;case"radio":return SE;default:return lr}}}function Io(t,e,n,r,s){const o=PE(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const CE=["ctrl","shift","alt","meta"],kE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CE.some(n=>t[`${n}Key`]&&!e.includes(n))},Mi=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=kE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},xE=lt({patchProp:AE},lE);let hd;function VE(){return hd||(hd=Vv(xE))}const NE=(...t)=>{const e=VE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=DE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,OE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function OE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function DE(t){return Qe(t)?document.querySelector(t):t}const ME="/icon/vacacionando-icon.png",Li=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},LE={},FE={href:"#",class:"hover:underline hover:border-b-white"};function UE(t,e){return ye(),Ge("li",null,[B("a",FE,[Ps(t.$slots,"default")])])}const wl=Li(LE,[["render",UE]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ao={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:i,class:o,...l},{slots:c})=>Ei("svg",{...Ao,width:t||Ao.width,height:t||Ao.height,stroke:r||Ao.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${BE(i??"icon")}`],...l},[...s.map(h=>Ei(...h)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=(t,e)=>(n,{slots:r})=>Ei(jE,{...n,iconNode:e,name:t},r);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=pr("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=pr("LogInIcon",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=pr("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=pr("PencilIcon",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=pr("SquarePenIcon",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=pr("UserRoundIcon",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=pr("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=pr("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var dd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;c||(_=64,o||(g=64)),r.push(n[d],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new YE;const g=i<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JE=function(t){const e=rm(t);return sm.encodeByteArray(e,!0)},Zo=function(t){return JE(t).replace(/\./g,"")},im=function(t){try{return sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=()=>XE().__FIREBASE_DEFAULTS__,ew=()=>{if(typeof process>"u"||typeof dd>"u")return;const t=dd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&im(t[1]);return e&&JSON.parse(e)},Ra=()=>{try{return ZE()||ew()||tw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},om=t=>{var e,n;return(n=(e=Ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nw=t=>{const e=om(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},am=()=>{var t;return(t=Ra())===null||t===void 0?void 0:t.config},lm=t=>{var e;return(e=Ra())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Zo(JSON.stringify(n)),Zo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function ow(){var t;const e=(t=Ra())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uw(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hw(){return!ow()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dw(){try{return typeof indexedDB=="object"}catch{return!1}}function fw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pw,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,l,r)}}function mw(t,e){return t.replace(gw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gw=/\{\$([^}]+)}/g;function _w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ea(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fd(i)&&fd(o)){if(!ea(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yw(t,e){const n=new vw(t,e);return n.subscribe.bind(n)}class vw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ew(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Tl),s.error===void 0&&(s.error=Tl),s.complete===void 0&&(s.complete=Tl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ew(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Iw(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tw(t){return t===Ar?void 0:t}function Iw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ww(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const bw={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Rw=Ee.INFO,Sw={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Pw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wc{constructor(e){this.name=e,this._logLevel=Rw,this._logHandler=Pw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Cw=(t,e)=>e.some(n=>t instanceof n);let pd,md;function kw(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xw(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cm=new WeakMap,Gl=new WeakMap,um=new WeakMap,Il=new WeakMap,Kc=new WeakMap;function Vw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cm.set(n,t)}).catch(()=>{}),Kc.set(e,t),e}function Nw(t){if(Gl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Gl.set(t,e)}let Ql={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||um.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ow(t){Ql=t(Ql)}function Dw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Al(this),e,...n);return um.set(r,e.sort?e.sort():[e]),er(r)}:xw().includes(t)?function(...e){return t.apply(Al(this),e),er(cm.get(this))}:function(...e){return er(t.apply(Al(this),e))}}function Mw(t){return typeof t=="function"?Dw(t):(t instanceof IDBTransaction&&Nw(t),Cw(t,kw())?new Proxy(t,Ql):t)}function er(t){if(t instanceof IDBRequest)return Vw(t);if(Il.has(t))return Il.get(t);const e=Mw(t);return e!==t&&(Il.set(t,e),Kc.set(e,t)),e}const Al=t=>Kc.get(t);function Lw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",c=>{r(er(o.result),c.oldVersion,c.newVersion,er(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Fw=["get","getKey","getAll","getAllKeys","count"],Uw=["put","add","delete","clear"],bl=new Map;function gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bl.get(e))return bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Uw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return bl.set(e,i),i}Ow(t=>({...t,get:(e,n,r)=>gd(e,n)||t.get(e,n,r),has:(e,n)=>!!gd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yl="@firebase/app",_d="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Wc("@firebase/app"),$w="@firebase/app-compat",qw="@firebase/analytics-compat",Hw="@firebase/analytics",zw="@firebase/app-check-compat",Ww="@firebase/app-check",Kw="@firebase/auth",Gw="@firebase/auth-compat",Qw="@firebase/database",Yw="@firebase/data-connect",Jw="@firebase/database-compat",Xw="@firebase/functions",Zw="@firebase/functions-compat",eT="@firebase/installations",tT="@firebase/installations-compat",nT="@firebase/messaging",rT="@firebase/messaging-compat",sT="@firebase/performance",iT="@firebase/performance-compat",oT="@firebase/remote-config",aT="@firebase/remote-config-compat",lT="@firebase/storage",cT="@firebase/storage-compat",uT="@firebase/firestore",hT="@firebase/vertexai-preview",dT="@firebase/firestore-compat",fT="firebase",pT="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="[DEFAULT]",mT={[Yl]:"fire-core",[$w]:"fire-core-compat",[Hw]:"fire-analytics",[qw]:"fire-analytics-compat",[Ww]:"fire-app-check",[zw]:"fire-app-check-compat",[Kw]:"fire-auth",[Gw]:"fire-auth-compat",[Qw]:"fire-rtdb",[Yw]:"fire-data-connect",[Jw]:"fire-rtdb-compat",[Xw]:"fire-fn",[Zw]:"fire-fn-compat",[eT]:"fire-iid",[tT]:"fire-iid-compat",[nT]:"fire-fcm",[rT]:"fire-fcm-compat",[sT]:"fire-perf",[iT]:"fire-perf-compat",[oT]:"fire-rc",[aT]:"fire-rc-compat",[lT]:"fire-gcs",[cT]:"fire-gcs-compat",[uT]:"fire-fst",[dT]:"fire-fst-compat",[hT]:"fire-vertex","fire-js":"fire-js",[fT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Map,gT=new Map,Xl=new Map;function yd(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(Xl.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Xl.set(e,t);for(const n of ta.values())yd(n,t);for(const n of gT.values())yd(n,t);return!0}function Gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Fi("app","Firebase",_T);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=pT;function hm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw tr.create("bad-app-name",{appName:String(s)});if(n||(n=am()),!n)throw tr.create("no-options");const i=ta.get(s);if(i){if(ea(n,i.options)&&ea(r,i.config))return i;throw tr.create("duplicate-app",{appName:s})}const o=new Aw(s);for(const c of Xl.values())o.addComponent(c);const l=new yT(n,r,o);return ta.set(s,l),l}function dm(t=Jl){const e=ta.get(t);if(!e&&t===Jl&&am())return hm();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){var r;let s=(r=mT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}ms(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="firebase-heartbeat-database",ET=1,wi="firebase-heartbeat-store";let Rl=null;function fm(){return Rl||(Rl=Lw(vT,ET,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),Rl}async function wT(t){try{const n=(await fm()).transaction(wi),r=await n.objectStore(wi).get(pm(t));return await n.done,r}catch(e){if(e instanceof Mn)xn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function vd(t,e){try{const r=(await fm()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,pm(t)),await r.done}catch(n){if(n instanceof Mn)xn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function pm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=1024,IT=30*24*60*60*1e3;class AT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ed();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=IT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ed(),{heartbeatsToSend:r,unsentEntries:s}=bT(this._heartbeatsCache.heartbeats),i=Zo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function Ed(){return new Date().toISOString().substring(0,10)}function bT(t,e=TT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dw()?fw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wd(t){return Zo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){ms(new xr("platform-logger",e=>new Bw(e),"PRIVATE")),ms(new xr("heartbeat",e=>new AT(e),"PRIVATE")),nr(Yl,_d,t),nr(Yl,_d,"esm2017"),nr("fire-js","")}ST("");function Qc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function mm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PT=mm,gm=new Fi("auth","Firebase",mm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Wc("@firebase/auth");function CT(t,...e){na.logLevel<=Ee.WARN&&na.warn(`Auth (${Cs}): ${t}`,...e)}function Lo(t,...e){na.logLevel<=Ee.ERROR&&na.error(`Auth (${Cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw Yc(t,...e)}function un(t,...e){return Yc(t,...e)}function _m(t,e,n){const r=Object.assign(Object.assign({},PT()),{[e]:n});return new Fi("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return _m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gm.create(t,...e)}function le(t,e,...n){if(!t)throw Yc(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lo(e),new Error(e)}function Vn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kT(){return Td()==="http:"||Td()==="https:"}function Td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kT()||lw()||"connection"in navigator)?navigator.onLine:!0}function VT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=iw()||cw()}get(){return xT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new Bi(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,r,s={}){return vm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ui(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return aw()||(h.referrerPolicy="no-referrer"),ym.fetch()(Em(t,t.config.apiHost,n,l),h)})}async function vm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NT),e);try{const s=new MT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw bo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw _m(t,d,h);Yt(t,d)}}catch(s){if(s instanceof Mn)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function ji(t,e,n,r,s={}){const i=await Ln(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Em(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Jc(t.config,s):`${t.config.apiScheme}://${s}`}function DT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),OT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}function Id(t){return t!==void 0&&t.enterprise!==void 0}class LT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function FT(t,e){return Ln(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function wm(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BT(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Xc(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:li(Sl(s.auth_time)),issuedAtTime:li(Sl(s.iat)),expirationTime:li(Sl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sl(t){return Number(t)*1e3}function Xc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=im(n);return s?JSON.parse(s):(Lo("Failed to decode base64 JWT payload"),null)}catch(s){return Lo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ad(t){const e=Xc(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&jT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gs(t,wm(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Tm(i.providerUserInfo):[],l=HT(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ec(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function qT(t){const e=Ye(t);await ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tm(t){return t.map(e=>{var{providerId:n}=e,r=Qc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(t,e){const n=await vm(t,{},async()=>{const r=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Em(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ym.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WT(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ad(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Ad(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ls;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $T(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ec(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BT(this,e)}reload(){return qT(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await gs(this,UT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:z,emailVerified:K,isAnonymous:pe,providerData:ge,stsTokenManager:I}=n;le(z&&I,e,"internal-error");const v=ls.fromJSON(this.name,I);le(typeof z=="string",e,"internal-error"),Hn(p,e.name),Hn(g,e.name),le(typeof K=="boolean",e,"internal-error"),le(typeof pe=="boolean",e,"internal-error"),Hn(_,e.name),Hn(P,e.name),Hn(x,e.name),Hn(N,e.name),Hn($,e.name),Hn(j,e.name);const T=new Rn({uid:z,auth:e,email:g,emailVerified:K,displayName:p,isAnonymous:pe,photoURL:P,phoneNumber:_,tenantId:x,stsTokenManager:v,createdAt:$,lastLoginAt:j});return ge&&Array.isArray(ge)&&(T.providerData=ge.map(A=>Object.assign({},A))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new ls;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ra(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ls;l.updateFromIdToken(r);const c=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ec(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=new Map;function Sn(t){Vn(t instanceof Function,"Expected a class definition");let e=bd.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Im.type="NONE";const Rd=Im;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(Sn(Rd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Sn(Rd);const o=Fo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=Rn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new cs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Am(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cm(e))return"Blackberry";if(km(e))return"Webos";if(bm(e))return"Safari";if((e.includes("chrome/")||Rm(e))&&!e.includes("edge/"))return"Chrome";if(Pm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Am(t=It()){return/firefox\//i.test(t)}function bm(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rm(t=It()){return/crios\//i.test(t)}function Sm(t=It()){return/iemobile/i.test(t)}function Pm(t=It()){return/android/i.test(t)}function Cm(t=It()){return/blackberry/i.test(t)}function km(t=It()){return/webos/i.test(t)}function Zc(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KT(t=It()){var e;return Zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GT(){return uw()&&document.documentMode===10}function xm(t=It()){return Zc(t)||Pm(t)||km(t)||Cm(t)||/windows phone/i.test(t)||Sm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e=[]){let n;switch(t){case"Browser":n=Sd(It());break;case"Worker":n=`${Sd(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=6;class XT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:JT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pd(this),this.idTokenSubscription=new Pd(this),this.beforeStateQueue=new QT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wm(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ra(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(kn(this));const n=e?Ye(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YT(this),n=new XT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await WT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ur(t){return Ye(t)}class Pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=yw(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eI(t){Sa=t}function Nm(t){return Sa.loadJS(t)}function tI(){return Sa.recaptchaEnterpriseScript}function nI(){return Sa.gapiScript}function rI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sI="recaptcha-enterprise",iI="NO_RECAPTCHA";class oI{constructor(e){this.type=sI,this.auth=Ur(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{FT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new LT(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Id(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(iI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Id(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=tI();c.length!==0&&(c+=l),Nm(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Cd(t,e,n,r=!1){const s=new oI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function tc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Cd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Cd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t,e){const n=Gc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ea(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function lI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cI(t,e,n){const r=Ur(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Om(e),{host:o,port:l}=uI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),hI()}function Om(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uI(t){const e=Om(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:kd(o)}}}function kd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function dI(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(t,e){return ji(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e){return ji(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function mI(t,e){return ji(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends eu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ti(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ti(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tc(e,n,"signInWithPassword",fI);case"emailLink":return pI(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tc(e,r,"signUpPassword",dI);case"emailLink":return mI(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e){return ji(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="http://localhost";class Vr extends eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Qc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:gI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yI(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,r=Xs(Zs(t)).deep_link_id;return(r?Xs(Zs(r)).link:null)||r||n||e||t}class tu{constructor(e){var n,r,s,i,o,l;const c=Xs(Zs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=_I((s=c.mode)!==null&&s!==void 0?s:null);le(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=yI(e);try{return new tu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return Ti._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tu.parseLink(n);return le(r,"argument-error"),Ti._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Dm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends $i{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends $i{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends $i{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(t,e){return ji(t,"POST","/v1/accounts:signUp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=xd(r);return new Nr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=xd(r);return new Nr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function xd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends Mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,sa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new sa(e,n,r,s)}}function Mm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?sa._fromErrorAndOperation(t,i,e,r):i})}async function EI(t,e,n=!1){const r=await gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e,n=!1){const{auth:r}=t;if(rn(r.app))return Promise.reject(kn(r));const s="reauthenticate";try{const i=await gs(t,Mm(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=Xc(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),Nr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lm(t,e,n=!1){if(rn(t.app))return Promise.reject(kn(t));const r="signIn",s=await Mm(t,r,e),i=await Nr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function TI(t,e){return Lm(Ur(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(t){const e=Ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function II(t,e,n){if(rn(t.app))return Promise.reject(kn(t));const r=Ur(t),o=await tc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Fm(t),c}),l=await Nr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function AI(t,e,n){return rn(t.app)?Promise.reject(kn(t)):TI(Ye(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fm(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e){return Ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gs(r,bI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function SI(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function PI(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function CI(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function kI(t){return Ye(t).signOut()}const ia="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ia,"1"),this.storage.removeItem(ia),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=1e3,VI=10;class Bm extends Um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);GT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bm.type="LOCAL";const NI=Bm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm extends Um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jm.type="SESSION";const $m=jm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await OI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=nu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function MI(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function LI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UI(){return qm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="firebaseLocalStorageDb",BI=1,oa="firebaseLocalStorage",zm="fbase_key";class qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([oa],e?"readwrite":"readonly").objectStore(oa)}function jI(){const t=indexedDB.deleteDatabase(Hm);return new qi(t).toPromise()}function nc(){const t=indexedDB.open(Hm,BI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(oa,{keyPath:zm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(oa)?e(r):(r.close(),await jI(),e(await nc()))})})}async function Vd(t,e,n){const r=Ca(t,!0).put({[zm]:e,value:n});return new qi(r).toPromise()}async function $I(t,e){const n=Ca(t,!1).get(e),r=await new qi(n).toPromise();return r===void 0?null:r.value}function Nd(t,e){const n=Ca(t,!0).delete(e);return new qi(n).toPromise()}const qI=800,HI=3;class Wm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(UI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LI(),!this.activeServiceWorker)return;this.sender=new DI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nc();return await Vd(e,ia,"1"),await Nd(e,ia),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$I(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wm.type="LOCAL";const zI=Wm;new Bi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t,e){return e?Sn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends eu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KI(t){return Lm(t.auth,new ru(t),t.bypassAuthState)}function GI(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),wI(n,new ru(t),t.bypassAuthState)}async function QI(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),EI(n,new ru(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KI;case"linkViaPopup":case"linkViaRedirect":return QI;case"reauthViaPopup":case"reauthViaRedirect":return GI;default:Yt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new Bi(2e3,1e4);class ts extends Km{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YI.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="pendingRedirect",Uo=new Map;class XI extends Km{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const r=await ZI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZI(t,e){const n=n0(e),r=t0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function e0(t,e){Uo.set(t._key(),e)}function t0(t){return Sn(t._redirectPersistence)}function n0(t){return Fo(JI,t.config.apiKey,t.name)}async function r0(t,e,n=!1){if(rn(t.app))return Promise.reject(kn(t));const r=Ur(t),s=WI(r,e),o=await new XI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=10*60*1e3;class i0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!o0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=s0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Od(e))}saveEventToCache(e){this.cachedEventUids.add(Od(e)),this.lastProcessedEventTime=Date.now()}}function Od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function o0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,c0=/^https?/;async function u0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await a0(t);for(const n of e)try{if(h0(n))return}catch{}Yt(t,"unauthorized-domain")}function h0(t){const e=Zl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!c0.test(n))return!1;if(l0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new Bi(3e4,6e4);function Dd(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function f0(t){return new Promise((e,n)=>{var r,s,i;function o(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(un(t,"network-request-failed"))},timeout:d0.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)o();else{const l=rI("iframefcb");return hn()[l]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},Nm(`${nI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Bo=null,e})}let Bo=null;function p0(t){return Bo=Bo||f0(t),Bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=new Bi(5e3,15e3),g0="__/auth/iframe",_0="emulator/auth/iframe",y0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},v0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function E0(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jc(e,_0):`https://${t.config.authDomain}/${g0}`,r={apiKey:e.apiKey,appName:t.name,v:Cs},s=v0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ui(r).slice(1)}`}async function w0(t){const e=await p0(t),n=hn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:E0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:y0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=hn().setTimeout(()=>{i(o)},m0.get());function c(){hn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},I0=500,A0=600,b0="_blank",R0="http://localhost";class Md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function S0(t,e,n,r=I0,s=A0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},T0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=It().toLowerCase();n&&(l=Rm(h)?b0:n),Am(h)&&(e=e||R0,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[_,P])=>`${g}${_}=${P},`,"");if(KT(h)&&l!=="_self")return P0(e||"",l),new Md(null);const p=window.open(e||"",l,d);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Md(p)}function P0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="__/auth/handler",k0="emulator/auth/handler",x0=encodeURIComponent("fac");async function Ld(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cs,eventId:s};if(e instanceof Dm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_w(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof $i){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${x0}=${encodeURIComponent(c)}`:"";return`${V0(t)}?${Ui(l).slice(1)}${h}`}function V0({config:t}){return t.emulator?Jc(t,k0):`https://${t.authDomain}/${C0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="webStorageSupport";class N0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$m,this._completeRedirectFn=r0,this._overrideRedirectResult=e0}async _openPopup(e,n,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ld(e,n,r,Zl(),s);return S0(e,o,nu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ld(e,n,r,Zl(),s);return MI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await w0(e),r=new i0(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pl,{type:Pl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pl];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=u0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xm()||bm()||Zc()}}const O0=N0;var Fd="@firebase/auth",Ud="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function L0(t){ms(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vm(t)},h=new ZT(r,s,i,c);return lI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ms(new xr("auth-internal",e=>{const n=Ur(e.getProvider("auth").getImmediate());return(r=>new D0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(Fd,Ud,M0(t)),nr(Fd,Ud,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=5*60,U0=lm("authIdTokenMaxAge")||F0;let Bd=null;const B0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>U0)return;const s=n==null?void 0:n.token;Bd!==s&&(Bd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function j0(t=dm()){const e=Gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aI(t,{popupRedirectResolver:O0,persistence:[zI,NI,$m]}),r=lm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=B0(i.toString());PI(n,o,()=>o(n.currentUser)),SI(n,l=>o(l))}}const s=om("auth");return s&&cI(n,`http://${s}`),n}function $0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});L0("Browser");var jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,Qm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function T(){}T.prototype=v.prototype,I.D=v.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,b,R){for(var w=Array(arguments.length-2),At=2;At<arguments.length;At++)w[At-2]=arguments[At];return v.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,T){T||(T=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(b=0;16>b;++b)A[b]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=I.g[0],T=I.g[1],b=I.g[2];var R=I.g[3],w=v+(R^T&(b^R))+A[0]+3614090360&4294967295;v=T+(w<<7&4294967295|w>>>25),w=R+(b^v&(T^b))+A[1]+3905402710&4294967295,R=v+(w<<12&4294967295|w>>>20),w=b+(T^R&(v^T))+A[2]+606105819&4294967295,b=R+(w<<17&4294967295|w>>>15),w=T+(v^b&(R^v))+A[3]+3250441966&4294967295,T=b+(w<<22&4294967295|w>>>10),w=v+(R^T&(b^R))+A[4]+4118548399&4294967295,v=T+(w<<7&4294967295|w>>>25),w=R+(b^v&(T^b))+A[5]+1200080426&4294967295,R=v+(w<<12&4294967295|w>>>20),w=b+(T^R&(v^T))+A[6]+2821735955&4294967295,b=R+(w<<17&4294967295|w>>>15),w=T+(v^b&(R^v))+A[7]+4249261313&4294967295,T=b+(w<<22&4294967295|w>>>10),w=v+(R^T&(b^R))+A[8]+1770035416&4294967295,v=T+(w<<7&4294967295|w>>>25),w=R+(b^v&(T^b))+A[9]+2336552879&4294967295,R=v+(w<<12&4294967295|w>>>20),w=b+(T^R&(v^T))+A[10]+4294925233&4294967295,b=R+(w<<17&4294967295|w>>>15),w=T+(v^b&(R^v))+A[11]+2304563134&4294967295,T=b+(w<<22&4294967295|w>>>10),w=v+(R^T&(b^R))+A[12]+1804603682&4294967295,v=T+(w<<7&4294967295|w>>>25),w=R+(b^v&(T^b))+A[13]+4254626195&4294967295,R=v+(w<<12&4294967295|w>>>20),w=b+(T^R&(v^T))+A[14]+2792965006&4294967295,b=R+(w<<17&4294967295|w>>>15),w=T+(v^b&(R^v))+A[15]+1236535329&4294967295,T=b+(w<<22&4294967295|w>>>10),w=v+(b^R&(T^b))+A[1]+4129170786&4294967295,v=T+(w<<5&4294967295|w>>>27),w=R+(T^b&(v^T))+A[6]+3225465664&4294967295,R=v+(w<<9&4294967295|w>>>23),w=b+(v^T&(R^v))+A[11]+643717713&4294967295,b=R+(w<<14&4294967295|w>>>18),w=T+(R^v&(b^R))+A[0]+3921069994&4294967295,T=b+(w<<20&4294967295|w>>>12),w=v+(b^R&(T^b))+A[5]+3593408605&4294967295,v=T+(w<<5&4294967295|w>>>27),w=R+(T^b&(v^T))+A[10]+38016083&4294967295,R=v+(w<<9&4294967295|w>>>23),w=b+(v^T&(R^v))+A[15]+3634488961&4294967295,b=R+(w<<14&4294967295|w>>>18),w=T+(R^v&(b^R))+A[4]+3889429448&4294967295,T=b+(w<<20&4294967295|w>>>12),w=v+(b^R&(T^b))+A[9]+568446438&4294967295,v=T+(w<<5&4294967295|w>>>27),w=R+(T^b&(v^T))+A[14]+3275163606&4294967295,R=v+(w<<9&4294967295|w>>>23),w=b+(v^T&(R^v))+A[3]+4107603335&4294967295,b=R+(w<<14&4294967295|w>>>18),w=T+(R^v&(b^R))+A[8]+1163531501&4294967295,T=b+(w<<20&4294967295|w>>>12),w=v+(b^R&(T^b))+A[13]+2850285829&4294967295,v=T+(w<<5&4294967295|w>>>27),w=R+(T^b&(v^T))+A[2]+4243563512&4294967295,R=v+(w<<9&4294967295|w>>>23),w=b+(v^T&(R^v))+A[7]+1735328473&4294967295,b=R+(w<<14&4294967295|w>>>18),w=T+(R^v&(b^R))+A[12]+2368359562&4294967295,T=b+(w<<20&4294967295|w>>>12),w=v+(T^b^R)+A[5]+4294588738&4294967295,v=T+(w<<4&4294967295|w>>>28),w=R+(v^T^b)+A[8]+2272392833&4294967295,R=v+(w<<11&4294967295|w>>>21),w=b+(R^v^T)+A[11]+1839030562&4294967295,b=R+(w<<16&4294967295|w>>>16),w=T+(b^R^v)+A[14]+4259657740&4294967295,T=b+(w<<23&4294967295|w>>>9),w=v+(T^b^R)+A[1]+2763975236&4294967295,v=T+(w<<4&4294967295|w>>>28),w=R+(v^T^b)+A[4]+1272893353&4294967295,R=v+(w<<11&4294967295|w>>>21),w=b+(R^v^T)+A[7]+4139469664&4294967295,b=R+(w<<16&4294967295|w>>>16),w=T+(b^R^v)+A[10]+3200236656&4294967295,T=b+(w<<23&4294967295|w>>>9),w=v+(T^b^R)+A[13]+681279174&4294967295,v=T+(w<<4&4294967295|w>>>28),w=R+(v^T^b)+A[0]+3936430074&4294967295,R=v+(w<<11&4294967295|w>>>21),w=b+(R^v^T)+A[3]+3572445317&4294967295,b=R+(w<<16&4294967295|w>>>16),w=T+(b^R^v)+A[6]+76029189&4294967295,T=b+(w<<23&4294967295|w>>>9),w=v+(T^b^R)+A[9]+3654602809&4294967295,v=T+(w<<4&4294967295|w>>>28),w=R+(v^T^b)+A[12]+3873151461&4294967295,R=v+(w<<11&4294967295|w>>>21),w=b+(R^v^T)+A[15]+530742520&4294967295,b=R+(w<<16&4294967295|w>>>16),w=T+(b^R^v)+A[2]+3299628645&4294967295,T=b+(w<<23&4294967295|w>>>9),w=v+(b^(T|~R))+A[0]+4096336452&4294967295,v=T+(w<<6&4294967295|w>>>26),w=R+(T^(v|~b))+A[7]+1126891415&4294967295,R=v+(w<<10&4294967295|w>>>22),w=b+(v^(R|~T))+A[14]+2878612391&4294967295,b=R+(w<<15&4294967295|w>>>17),w=T+(R^(b|~v))+A[5]+4237533241&4294967295,T=b+(w<<21&4294967295|w>>>11),w=v+(b^(T|~R))+A[12]+1700485571&4294967295,v=T+(w<<6&4294967295|w>>>26),w=R+(T^(v|~b))+A[3]+2399980690&4294967295,R=v+(w<<10&4294967295|w>>>22),w=b+(v^(R|~T))+A[10]+4293915773&4294967295,b=R+(w<<15&4294967295|w>>>17),w=T+(R^(b|~v))+A[1]+2240044497&4294967295,T=b+(w<<21&4294967295|w>>>11),w=v+(b^(T|~R))+A[8]+1873313359&4294967295,v=T+(w<<6&4294967295|w>>>26),w=R+(T^(v|~b))+A[15]+4264355552&4294967295,R=v+(w<<10&4294967295|w>>>22),w=b+(v^(R|~T))+A[6]+2734768916&4294967295,b=R+(w<<15&4294967295|w>>>17),w=T+(R^(b|~v))+A[13]+1309151649&4294967295,T=b+(w<<21&4294967295|w>>>11),w=v+(b^(T|~R))+A[4]+4149444226&4294967295,v=T+(w<<6&4294967295|w>>>26),w=R+(T^(v|~b))+A[11]+3174756917&4294967295,R=v+(w<<10&4294967295|w>>>22),w=b+(v^(R|~T))+A[2]+718787259&4294967295,b=R+(w<<15&4294967295|w>>>17),w=T+(R^(b|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var T=v-this.blockSize,A=this.B,b=this.h,R=0;R<v;){if(b==0)for(;R<=T;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<v;)if(A[b++]=I.charCodeAt(R++),b==this.blockSize){s(this,A),b=0;break}}else for(;R<v;)if(A[b++]=I[R++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var T=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=T&255,T/=256;for(this.u(I),I=Array(16),v=T=0;4>v;++v)for(var A=0;32>A;A+=8)I[T++]=this.g[v]>>>A&255;return I};function i(I,v){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=v(I)}function o(I,v){this.h=v;for(var T=[],A=!0,b=I.length-1;0<=b;b--){var R=I[b]|0;A&&R==v||(T[b]=R,A=!1)}this.g=T}var l={};function c(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return N(h(-I));for(var v=[],T=1,A=0;I>=T;A++)v[A]=I/T|0,T*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return N(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(v,8)),A=p,b=0;b<I.length;b+=8){var R=Math.min(8,I.length-b),w=parseInt(I.substring(b,b+R),v);8>R?(R=h(Math.pow(v,R)),A=A.j(R).add(h(w))):(A=A.j(T),A=A.add(h(w)))}return A}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-N(this).m();for(var I=0,v=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(x(this))return"-"+N(this).toString(I);for(var v=h(Math.pow(I,6)),T=this,A="";;){var b=K(T,v).g;T=$(T,b.j(v));var R=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=b,P(T))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=$(this,I),x(I)?-1:P(I)?0:1};function N(I){for(var v=I.g.length,T=[],A=0;A<v;A++)T[A]=~I.g[A];return new o(T,~I.h).add(g)}t.abs=function(){return x(this)?N(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0,b=0;b<=v;b++){var R=A+(this.i(b)&65535)+(I.i(b)&65535),w=(R>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=w>>>16,R&=65535,w&=65535,T[b]=w<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function $(I,v){return I.add(N(v))}t.j=function(I){if(P(this)||P(I))return p;if(x(this))return x(I)?N(this).j(N(I)):N(N(this).j(I));if(x(I))return N(this.j(N(I)));if(0>this.l(_)&&0>I.l(_))return h(this.m()*I.m());for(var v=this.g.length+I.g.length,T=[],A=0;A<2*v;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var R=this.i(A)>>>16,w=this.i(A)&65535,At=I.i(b)>>>16,Lt=I.i(b)&65535;T[2*A+2*b]+=w*Lt,j(T,2*A+2*b),T[2*A+2*b+1]+=R*Lt,j(T,2*A+2*b+1),T[2*A+2*b+1]+=w*At,j(T,2*A+2*b+1),T[2*A+2*b+2]+=R*At,j(T,2*A+2*b+2)}for(A=0;A<v;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=v;A<2*v;A++)T[A]=0;return new o(T,0)};function j(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function z(I,v){this.g=I,this.h=v}function K(I,v){if(P(v))throw Error("division by zero");if(P(I))return new z(p,p);if(x(I))return v=K(N(I),v),new z(N(v.g),N(v.h));if(x(v))return v=K(I,N(v)),new z(N(v.g),v.h);if(30<I.g.length){if(x(I)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=v;0>=A.l(I);)T=pe(T),A=pe(A);var b=ge(T,1),R=ge(A,1);for(A=ge(A,2),T=ge(T,2);!P(A);){var w=R.add(A);0>=w.l(I)&&(b=b.add(T),R=w),A=ge(A,1),T=ge(T,1)}return v=$(I,b.j(v)),new z(b,v)}for(b=p;0<=I.l(v);){for(T=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=h(T),w=R.j(v);x(w)||0<w.l(I);)T-=A,R=h(T),w=R.j(v);P(R)&&(R=g),b=b.add(R),I=$(I,w)}return new z(b,I)}t.A=function(I){return K(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function pe(I){for(var v=I.g.length+1,T=[],A=0;A<v;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function ge(I,v){var T=v>>5;v%=32;for(var A=I.g.length-T,b=[],R=0;R<A;R++)b[R]=0<v?I.i(R+T)>>>v|I.i(R+T+1)<<32-v:I.i(R+T);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Qm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Pr=o}).apply(typeof jd<"u"?jd:typeof self<"u"?self:typeof window<"u"?window:{});var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ym,ei,Jm,jo,rc,Xm,Zm,eg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ro=="object"&&Ro];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in f))break e;f=f[S]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,S={next:function(){if(!m&&f<a.length){var k=f++;return{value:u(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,S,k){for(var W=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)W[Oe-2]=arguments[Oe];return u.prototype[S].apply(m,W)}}function x(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function N(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const S=a.length||0,k=m.length||0;a.length=S+k;for(let W=0;W<k;W++)a[S+W]=m[W]}else a.push(m)}}class ${constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function z(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function K(a){return K[" "](a),a}K[" "]=function(){};var pe=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ge(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function v(a){const u={};for(const f in a)u[f]=a[f];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let f,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(f in m)a[f]=m[f];for(let k=0;k<T.length;k++)f=T[k],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function w(){var a=xt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class At{constructor(){this.h=this.g=null}add(u,f){const m=Lt.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Lt=new $(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,_e=!1,xt=new At,qt=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(Ft)}};var Ft=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){R(f)}var u=Lt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}_e=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Fn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function Zt(a,u){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(pe){e:{try{K(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zt.aa.h.call(this)}}P(Zt,je);var Ct={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,u,f,m,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=S,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,u,f,m,S){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var W=y(a,u,m,S);return-1<W?(u=a[W],f||(u.fa=!1)):(u=new Q(u,this.src,k,!!m,S),u.fa=f,a.push(u)),u};function Ne(a,u){var f=u.type;if(f in a.g){var m=a.g[f],S=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=S)&&Array.prototype.splice.call(m,S,1),k&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function y(a,u,f,m){for(var S=0;S<a.length;++S){var k=a[S];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==m)return S}return-1}var E="closure_lm_"+(1e6*Math.random()|0),C={};function M(a,u,f,m,S){if(Array.isArray(u)){for(var k=0;k<u.length;k++)M(a,u[k],f,m,S);return null}return f=ne(f),a&&a[O]?a.K(u,f,h(m)?!!m.capture:!!m,S):V(a,u,f,!1,m,S)}function V(a,u,f,m,S,k){if(!u)throw Error("Invalid event type");var W=h(S)?!!S.capture:!!S,Oe=ie(a);if(Oe||(a[E]=Oe=new Te(a)),f=Oe.add(u,f,m,W,k),f.proxy)return f;if(m=F(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Fn||(S=W),S===void 0&&(S=!1),a.addEventListener(u.toString(),m,S);else if(a.attachEvent)a.attachEvent(q(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function F(){function a(f){return u.call(a.src,a.listener,f)}const u=U;return a}function G(a,u,f,m,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)G(a,u[k],f,m,S);else m=h(m)?!!m.capture:!!m,f=ne(f),a&&a[O]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],f=y(k,f,m,S),-1<f&&(Z(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=ie(a))&&(u=a.g[u.toString()],a=-1,u&&(a=y(u,f,m,S)),(f=-1<a?u[a]:null)&&H(f))}function H(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[O])Ne(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(q(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=ie(u))?(Ne(f,a),f.h==0&&(f.src=null,u[E]=null)):Z(a)}}}function q(a){return a in C?C[a]:C[a]="on"+a}function U(a,u){if(a.da)a=!0;else{u=new Zt(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&H(a),a=f.call(m,u)}return a}function ie(a){return a=a[E],a instanceof Te?a:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(a){return typeof a=="function"?a:(a[Y]||(a[Y]=function(u){return a.handleEvent(u)}),a[Y])}function ee(){Be.call(this),this.i=new Te(this),this.M=this,this.F=null}P(ee,Be),ee.prototype[O]=!0,ee.prototype.removeEventListener=function(a,u,f,m){G(this,a,u,f,m)};function oe(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new je(u,a);else if(u instanceof je)u.target=u.target||a;else{var S=u;u=new je(m,a),A(u,S)}if(S=!0,f)for(var k=f.length-1;0<=k;k--){var W=u.g=f[k];S=Se(W,m,!0,u)&&S}if(W=u.g=a,S=Se(W,m,!0,u)&&S,S=Se(W,m,!1,u)&&S,f)for(k=0;k<f.length;k++)W=u.g=f[k],S=Se(W,m,!1,u)&&S}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)Z(f[m]);delete a.g[u],a.h--}}this.F=null},ee.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},ee.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Se(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,k=0;k<u.length;++k){var W=u[k];if(W&&!W.da&&W.capture==f){var Oe=W.listener,rt=W.ha||W.src;W.fa&&Ne(a.i,W),S=Oe.call(rt,m)!==!1&&S}}return S&&!m.defaultPrevented}function Ae(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function ut(a){a.g=Ae(()=>{a.g=null,a.i&&(a.i=!1,ut(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Xe extends Be{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ut(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(a){Be.call(this),this.h=a,this.g={}}P(nt,Be);var ht=[];function Un(a){ge(a.g,function(u,f){this.g.hasOwnProperty(f)&&H(u)},a),a.g={}}nt.prototype.N=function(){nt.aa.N.call(this),Un(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=l.JSON.stringify,bt=l.JSON.parse,Ut=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Hr(){}Hr.prototype.h=null;function Bu(a){return a.h||(a.h=a.i())}function ju(){}var Ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ya(){je.call(this,"d")}P(Ya,je);function Ja(){je.call(this,"c")}P(Ja,je);var _r={},$u=null;function to(){return $u=$u||new ee}_r.La="serverreachability";function qu(a){je.call(this,_r.La,a)}P(qu,je);function Ms(a){const u=to();oe(u,new qu(u))}_r.STAT_EVENT="statevent";function Hu(a,u){je.call(this,_r.STAT_EVENT,a),this.stat=u}P(Hu,je);function Rt(a){const u=to();oe(u,new Hu(u,a))}_r.Ma="timingevent";function zu(a,u){je.call(this,_r.Ma,a),this.size=u}P(zu,je);function Ls(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function B_(a,u,f,m,S,k){a.info(function(){if(a.g)if(k)for(var W="",Oe=k.split("&"),rt=0;rt<Oe.length;rt++){var be=Oe[rt].split("=");if(1<be.length){var dt=be[0];be=be[1];var ft=dt.split("_");W=2<=ft.length&&ft[1]=="type"?W+(dt+"="+be+"&"):W+(dt+"=redacted&")}}else W=null;else W=k;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+f+`
`+W})}function j_(a,u,f,m,S,k,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+f+`
`+k+" "+W})}function zr(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+q_(a,f)+(m?" "+m:"")})}function $_(a,u){a.info(function(){return"TIMEOUT: "+u})}Fs.prototype.info=function(){};function q_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var k=S[0];if(k!="noop"&&k!="stop"&&k!="close")for(var W=1;W<S.length;W++)S[W]=""}}}}return qr(f)}catch{return u}}var no={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xa;function ro(){}P(ro,Hr),ro.prototype.g=function(){return new XMLHttpRequest},ro.prototype.i=function(){return{}},Xa=new ro;function Bn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ku}function Ku(){this.i=null,this.g="",this.h=!1}var Gu={},Za={};function el(a,u,f){a.L=1,a.v=ao(_n(u)),a.m=f,a.P=!0,Qu(a,null)}function Qu(a,u){a.F=Date.now(),so(a),a.A=_n(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),ch(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Ku,a.g=Sh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Xe(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(ht[0]=S.toString()),S=ht);for(var k=0;k<S.length;k++){var W=M(f,S[k],m||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ms(),B_(a.i,a.u,a.A,a.l,a.R,a.m)}Bn.prototype.ca=function(a){a=a.target;const u=this.M;u&&yn(a)==3?u.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const ft=yn(this.g);var u=this.g.Ba();const Gr=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||gh(this.g)))){this.J||ft!=4||u==7||(u==8||0>=Gr?Ms(3):Ms(2)),tl(this);var f=this.g.Z();this.X=f;t:if(Yu(this)){var m=gh(this.g);a="";var S=m.length,k=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),Us(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(k&&u==S-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,j_(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,rt=this.g;if((Oe=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Oe)){var be=Oe;break t}}be=null}if(f=be)zr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nl(this,f);else{this.o=!1,this.s=3,Rt(12),yr(this),Us(this);break e}}if(this.P){f=!0;let Ht;for(;!this.J&&this.C<W.length;)if(Ht=H_(this,W),Ht==Za){ft==4&&(this.s=4,Rt(14),f=!1),zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==Gu){this.s=4,Rt(15),zr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else zr(this.i,this.l,Ht,null),nl(this,Ht);if(Yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||W.length!=0||this.h.h||(this.s=1,Rt(16),f=!1),this.o=this.o&&f,!f)zr(this.i,this.l,W,"[Invalid Chunked Response]"),yr(this),Us(this);else if(0<W.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ll(dt),dt.M=!0,Rt(11))}}else zr(this.i,this.l,W,null),nl(this,W);ft==4&&yr(this),this.o&&!this.J&&(ft==4?Ih(this.j,this):(this.o=!1,so(this)))}else ay(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),yr(this),Us(this)}}}catch{}finally{}};function Yu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function H_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Za:(f=Number(u.substring(f,m)),isNaN(f)?Gu:(m+=1,m+f>u.length?Za:(u=u.slice(m,m+f),a.C=m+f,u)))}Bn.prototype.cancel=function(){this.J=!0,yr(this)};function so(a){a.S=Date.now()+a.I,Ju(a,a.I)}function Ju(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ls(g(a.ba,a),u)}function tl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($_(this.i,this.A),this.L!=2&&(Ms(),Rt(17)),yr(this),this.s=2,Us(this)):Ju(this,this.S-a)};function Us(a){a.j.G==0||a.J||Ih(a.j,a)}function yr(a){tl(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Un(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function nl(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||rl(f.h,a))){if(!a.K&&rl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)po(f),ho(f);else break e;al(f),Rt(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ls(g(f.Za,f),6e3));if(1>=eh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Er(f,11)}else if((a.K||f.g==a)&&po(f),!j(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let be=S[u];if(f.T=be[0],be=be[1],f.G==2)if(be[0]=="c"){f.K=be[1],f.ia=be[2];const dt=be[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const ft=be[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const Gr=be[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(m=1.5*Gr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Ht=a.g;if(Ht){const go=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(go){var k=m.h;k.g||go.indexOf("spdy")==-1&&go.indexOf("quic")==-1&&go.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(sl(k,k.h),k.h=null))}if(m.D){const cl=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;cl&&(m.ya=cl,Fe(m.I,m.D,cl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var W=a;if(m.qa=Rh(m,m.J?m.ia:null,m.W),W.K){th(m.h,W);var Oe=W,rt=m.L;rt&&(Oe.I=rt),Oe.B&&(tl(Oe),so(Oe)),m.g=W}else wh(m);0<f.i.length&&fo(f)}else be[0]!="stop"&&be[0]!="close"||Er(f,7);else f.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Er(f,7):ol(f):be[0]!="noop"&&f.l&&f.l.ta(be),f.v=0)}}Ms(4)}catch{}}var z_=class{constructor(a,u){this.g=a,this.map=u}};function Xu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function eh(a){return a.h?1:a.g?a.g.size:0}function rl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function sl(a,u){a.g?a.g.add(u):a.h=u}function th(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Xu.prototype.cancel=function(){if(this.i=nh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return x(a.i)}function W_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function K_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function rh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=K_(a),m=W_(a),S=m.length,k=0;k<S;k++)u.call(void 0,m[k],f&&f[k],a)}var sh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function G_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),S=null;if(0<=m){var k=a[f].substring(0,m);S=a[f].substring(m+1)}else k=a[f];u(k,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof vr){this.h=a.h,io(this,a.j),this.o=a.o,this.g=a.g,oo(this,a.s),this.l=a.l;var u=a.i,f=new $s;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),ih(this,f),this.m=a.m}else a&&(u=String(a).match(sh))?(this.h=!1,io(this,u[1]||"",!0),this.o=Bs(u[2]||""),this.g=Bs(u[3]||"",!0),oo(this,u[4]),this.l=Bs(u[5]||"",!0),ih(this,u[6]||"",!0),this.m=Bs(u[7]||"")):(this.h=!1,this.i=new $s(null,this.h))}vr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(js(u,oh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(js(u,oh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(js(f,f.charAt(0)=="/"?J_:Y_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",js(f,Z_)),a.join("")};function _n(a){return new vr(a)}function io(a,u,f){a.j=f?Bs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function oo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ih(a,u,f){u instanceof $s?(a.i=u,ey(a.i,a.h)):(f||(u=js(u,X_)),a.i=new $s(u,a.h))}function Fe(a,u,f){a.i.set(u,f)}function ao(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function js(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,Q_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Q_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var oh=/[#\/\?@]/g,Y_=/[#\?:]/g,J_=/[#\?]/g,X_=/[#\?@]/g,Z_=/#/g;function $s(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&G_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=$s.prototype,t.add=function(a,u){jn(this),this.i=null,a=Wr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function ah(a,u){jn(a),u=Wr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function lh(a,u){return jn(a),u=Wr(a,u),a.g.has(u)}t.forEach=function(a,u){jn(this),this.g.forEach(function(f,m){f.forEach(function(S){a.call(u,S,m,this)},this)},this)},t.na=function(){jn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const S=a[m];for(let k=0;k<S.length;k++)f.push(u[m])}return f},t.V=function(a){jn(this);let u=[];if(typeof a=="string")lh(this,a)&&(u=u.concat(this.g.get(Wr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return jn(this),this.i=null,a=Wr(this,a),lh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function ch(a,u,f){ah(a,u),0<f.length&&(a.i=null,a.g.set(Wr(a,u),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const k=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var S=k;W[m]!==""&&(S+="="+encodeURIComponent(String(W[m]))),a.push(S)}}return this.i=a.join("&")};function Wr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ey(a,u){u&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(f,m){var S=m.toLowerCase();m!=S&&(ah(this,m),ch(this,S,f))},a)),a.j=u}function ty(a,u){const f=new Fs;if(l.Image){const m=new Image;m.onload=_($n,f,"TestLoadImage: loaded",!0,u,m),m.onerror=_($n,f,"TestLoadImage: error",!1,u,m),m.onabort=_($n,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=_($n,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function ny(a,u){const f=new Fs,m=new AbortController,S=setTimeout(()=>{m.abort(),$n(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(S),k.ok?$n(f,"TestPingServer: ok",!0,u):$n(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),$n(f,"TestPingServer: error",!1,u)})}function $n(a,u,f,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(f)}catch{}}function ry(){this.g=new Ut}function sy(a,u,f){const m=f||"";try{rh(a,function(S,k){let W=S;h(S)&&(W=qr(S)),u.push(m+k+"="+encodeURIComponent(W))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function lo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(lo,Hr),lo.prototype.g=function(){return new co(this.l,this.j)},lo.prototype.i=function(a){return function(){return a}}({});function co(a,u){ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(co,ee),t=co.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function uh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?qs(this):Hs(this),this.readyState==3&&uh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Qa=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Hs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hh(a){let u="";return ge(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function il(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=hh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Fe(a,u,f))}function qe(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(qe,ee);var iy=/^https?$/i,oy=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xa.g(),this.v=this.o?Bu(this.o):Bu(Xa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){dh(this,k);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)f.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())f.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(oy,u,void 0))||m||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of f)this.g.setRequestHeader(k,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mh(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){dh(this,k)}};function dh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,fh(a),uo(a)}function fh(a){a.A||(a.A=!0,oe(a,"complete"),oe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,oe(this,"complete"),oe(this,"abort"),uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),uo(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ph(this):this.bb())},t.bb=function(){ph(this)};function ph(a){if(a.h&&typeof o<"u"&&(!a.v[1]||yn(a)!=4||a.Z()!=2)){if(a.u&&yn(a)==4)Ae(a.Ea,0,a);else if(oe(a,"readystatechange"),yn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=W===0){var S=String(a.D).match(sh)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),m=!iy.test(S?S.toLowerCase():"")}f=m}if(f)oe(a,"complete"),oe(a,"success");else{a.m=6;try{var k=2<yn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",fh(a)}}finally{uo(a)}}}}function uo(a,u){if(a.g){mh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||oe(a,"ready");try{f.onreadystatechange=m}catch{}}}function mh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function yn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),bt(u)}};function gh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ay(a){const u={};a=(a.g&&2<=yn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(j(a[m]))continue;var f=b(a[m]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[S]||[];u[S]=k,k.push(f)}I(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function _h(a){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zs("baseRetryDelayMs",5e3,a),this.cb=zs("retryDelaySeedMs",1e4,a),this.Wa=zs("forwardChannelMaxRetries",2,a),this.wa=zs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xu(a&&a.concurrentRequestLimit),this.Da=new ry,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_h.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){Rt(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Rh(this,null,this.W),fo(this)};function ol(a){if(yh(a),a.G==3){var u=a.U++,f=_n(a.I);if(Fe(f,"SID",a.K),Fe(f,"RID",u),Fe(f,"TYPE","terminate"),Ws(a,f),u=new Bn(a,a.j,u),u.L=2,u.v=ao(_n(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Sh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),so(u)}bh(a)}function ho(a){a.g&&(ll(a),a.g.cancel(),a.g=null)}function yh(a){ho(a),a.u&&(l.clearTimeout(a.u),a.u=null),po(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fo(a){if(!Zu(a.h)&&!a.s){a.s=!0;var u=a.Ga;we||qt(),_e||(we(),_e=!0),xt.add(u,a),a.B=0}}function ly(a,u){return eh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ls(g(a.Ga,a,u),Ah(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Bn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=v(k),A(k,this.S)):k=this.S),this.m!==null||this.O||(S.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Eh(this,S,u),f=_n(this.I),Fe(f,"RID",a),Fe(f,"CVER",22),this.D&&Fe(f,"X-HTTP-Session-Id",this.D),Ws(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(hh(k)))+"&"+u:this.m&&il(f,this.m,k)),sl(this.h,S),this.Ua&&Fe(f,"TYPE","init"),this.P?(Fe(f,"$req",u),Fe(f,"SID","null"),S.T=!0,el(S,f,null)):el(S,f,u),this.G=2}}else this.G==3&&(a?vh(this,a):this.i.length==0||Zu(this.h)||vh(this))};function vh(a,u){var f;u?f=u.l:f=a.U++;const m=_n(a.I);Fe(m,"SID",a.K),Fe(m,"RID",f),Fe(m,"AID",a.T),Ws(a,m),a.m&&a.o&&il(m,a.m,a.o),f=new Bn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Eh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),sl(a.h,f),el(f,m,u)}function Ws(a,u){a.H&&ge(a.H,function(f,m){Fe(u,m,f)}),a.l&&rh({},function(f,m){Fe(u,m,f)})}function Eh(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var S=a.i;let k=-1;for(;;){const W=["count="+f];k==-1?0<f?(k=S[0].g,W.push("ofs="+k)):k=0:W.push("ofs="+k);let Oe=!0;for(let rt=0;rt<f;rt++){let be=S[rt].g;const dt=S[rt].map;if(be-=k,0>be)k=Math.max(0,S[rt].g-100),Oe=!1;else try{sy(dt,W,"req"+be+"_")}catch{m&&m(dt)}}if(Oe){m=W.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function wh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;we||qt(),_e||(we(),_e=!0),xt.add(u,a),a.v=0}}function al(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ls(g(a.Fa,a),Ah(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Th(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ls(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),ho(this),Th(this))};function ll(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Th(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=_n(a.qa);Fe(u,"RID","rpc"),Fe(u,"SID",a.K),Fe(u,"AID",a.T),Fe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(u,"TO",a.ja),Fe(u,"TYPE","xmlhttp"),Ws(a,u),a.m&&a.o&&il(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ao(_n(u)),f.m=null,f.P=!0,Qu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ho(this),al(this),Rt(19))};function po(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ih(a,u){var f=null;if(a.g==u){po(a),ll(a),a.g=null;var m=2}else if(rl(a.h,u))f=u.D,th(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;m=to(),oe(m,new zu(m,f)),fo(a)}else wh(a);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&ly(a,u)||m==2&&al(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function Ah(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function Er(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const S=!m;m=new vr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||io(m,"https"),ao(m),S?ty(m.toString(),f):ny(m.toString(),f)}else Rt(2);a.G=0,a.l&&a.l.sa(u),bh(a),yh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function bh(a){if(a.G=0,a.ka=[],a.l){const u=nh(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ka,u),N(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Rh(a,u,f){var m=f instanceof vr?_n(f):new vr(f);if(m.g!="")u&&(m.g=u+"."+m.g),oo(m,m.s);else{var S=l.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var k=new vr(null);m&&io(k,m),u&&(k.g=u),S&&oo(k,S),f&&(k.l=f),m=k}return f=a.D,u=a.ya,f&&u&&Fe(m,f,u),Fe(m,"VER",a.la),Ws(a,m),m}function Sh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new qe(new lo({eb:f})):new qe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ph(){}t=Ph.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function mo(){}mo.prototype.g=function(a,u){return new Vt(a,u)};function Vt(a,u){ee.call(this),this.g=new _h(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Kr(this)}P(Vt,ee),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){ol(this.g)},Vt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=qr(a),a=f);u.i.push(new z_(u.Ya++,a)),u.G==3&&fo(u)},Vt.prototype.N=function(){this.g.l=null,delete this.j,ol(this.g),delete this.g,Vt.aa.N.call(this)};function Ch(a){Ya.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}P(Ch,Ya);function kh(){Ja.call(this),this.status=1}P(kh,Ja);function Kr(a){this.g=a}P(Kr,Ph),Kr.prototype.ua=function(){oe(this.g,"a")},Kr.prototype.ta=function(a){oe(this.g,new Ch(a))},Kr.prototype.sa=function(a){oe(this.g,new kh)},Kr.prototype.ra=function(){oe(this.g,"b")},mo.prototype.createWebChannel=mo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,eg=function(){return new mo},Zm=function(){return to()},Xm=_r,rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},no.NO_ERROR=0,no.TIMEOUT=8,no.HTTP_ERROR=6,jo=no,Wu.COMPLETE="complete",Jm=Wu,ju.EventType=Ds,Ds.OPEN="a",Ds.CLOSE="b",Ds.ERROR="c",Ds.MESSAGE="d",ee.prototype.listen=ee.prototype.K,ei=ju,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,Ym=qe}).apply(typeof Ro<"u"?Ro:typeof self<"u"?self:typeof window<"u"?window:{});const $d="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Wc("@firebase/firestore");function Qs(){return Or.logLevel}function te(t,...e){if(Or.logLevel<=Ee.DEBUG){const n=e.map(su);Or.debug(`Firestore (${xs}): ${t}`,...n)}}function Nn(t,...e){if(Or.logLevel<=Ee.ERROR){const n=e.map(su);Or.error(`Firestore (${xs}): ${t}`,...n)}}function _s(t,...e){if(Or.logLevel<=Ee.WARN){const n=e.map(su);Or.warn(`Firestore (${xs}): ${t}`,...n)}}function su(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function xe(t,e){t||ce()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class H0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class z0{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new tg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new mt(e)}}class W0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class K0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new W0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class G0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Q0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new G0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Y0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function ys(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Je(0,0))}static max(){return new ue(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(),r===void 0?r=e.length-n:r>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends Ii{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const J0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ii{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return J0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new X(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ue.fromString(e))}static fromName(e){return new se(Ue.fromString(e).popFirst(5))}static empty(){return new se(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ue(e.slice()))}}function X0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new cr(s,se.empty(),e)}function Z0(t){return new cr(t.readTime,t.key,-1)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(ue.min(),se.empty(),-1)}static max(){return new cr(ue.max(),se.empty(),-1)}}function eA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==tA)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function rA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}iu.oe=-1;function ka(t){return t==null}function aa(t){return t===0&&1/t==-1/0}function sA(t){return typeof t=="number"&&Number.isInteger(t)&&!aa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new So(this.root,e,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new So(this.root,e,this.comparator,!0)}}class So{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hd(this.data.getIterator())}getIteratorFrom(e){return new Hd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Hd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new at(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sg("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const iA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(xe(!!t),typeof t=="string"){let e=0;const n=iA.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function au(t){const e=t.mapValue.fields.__previous_value__;return ou(e)?au(e):e}function Ai(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ou(t)?4:lA(t)?9007199254740991:aA(t)?10:11:ce()}function gn(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ai(t).isEqual(Ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ur(s.timestampValue),l=ur(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dr(s.bytesValue).isEqual(Dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),l=He(i.doubleValue);return o===l?aa(o)===aa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ys(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(qd(o)!==qd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!gn(o[c],l[c])))return!1;return!0}(t,e);default:return ce()}}function Ri(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=He(i.integerValue||i.doubleValue),c=He(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return zd(t.timestampValue,e.timestampValue);case 4:return zd(Ai(t),Ai(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Dr(i),c=Dr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Re(l[h],c[h]);if(d!==0)return d}return Re(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Re(He(i.latitude),He(o.latitude));return l!==0?l:Re(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},g=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(c=g.value)===null||c===void 0?void 0:c.arrayValue,x=Re(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Wd(_,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Po.mapValue&&o===Po.mapValue)return 0;if(i===Po.mapValue)return 1;if(o===Po.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Re(c[p],d[p]);if(g!==0)return g;const _=vs(l[c[p]],h[d[p]]);if(_!==0)return _}return Re(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ce()}}function zd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=ur(t),r=ur(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function Wd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=vs(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function Es(t){return sc(t)}function sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=sc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${sc(n.fields[o])}`;return s+"}"}(t.mapValue):ce()}function Kd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ic(t){return!!t&&"integerValue"in t}function lu(t){return!!t&&"arrayValue"in t}function Gd(t){return!!t&&"nullValue"in t}function Qd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $o(t){return!!t&&"mapValue"in t}function aA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ci(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(ci(this.value))}}function ig(t){const e=[];return Br(t.fields,(n,r)=>{const s=new it([n]);if($o(r)){const i=ig(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,ue.min(),ue.min(),ue.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,ue.min(),ue.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ue.min(),ue.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.position=e,this.inclusive=n}}function Yd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n="asc"){this.field=e,this.dir=n}}function cA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{}class Ke extends og{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hA(e,n,r):n==="array-contains"?new pA(e,r):n==="in"?new mA(e,r):n==="not-in"?new gA(e,r):n==="array-contains-any"?new _A(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dA(e,r):new fA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends og{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Jt(e,n)}matches(e){return ag(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ag(t){return t.op==="and"}function lg(t){return uA(t)&&ag(t)}function uA(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function oc(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Es(t.value);if(lg(t))return t.filters.map(e=>oc(e)).join(",");{const e=t.filters.map(n=>oc(n)).join(",");return`${t.op}(${e})`}}function cg(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&gn(r.value,s.value)}(t,e):t instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&cg(o,s.filters[l]),!0):!1}(t,e):void ce()}function ug(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Es(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(ug).join(" ,")+"}"}(t):"Filter"}class hA extends Ke{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class dA extends Ke{constructor(e,n){super(e,"in",n),this.keys=hg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fA extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=hg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class pA extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lu(n)&&Ri(n.arrayValue,this.value)}}class mA extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ri(this.value.arrayValue,n)}}class gA extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ri(this.value.arrayValue,n)}}class _A extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ri(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Xd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new yA(t,e,n,r,s,i,o)}function cu(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>oc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Es(r)).join(",")),e.ue=n}return e.ue}function uu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jd(t.startAt,e.startAt)&&Jd(t.endAt,e.endAt)}function ac(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vA(t,e,n,r,s,i,o,l){return new Vs(t,e,n,r,s,i,o,l)}function xa(t){return new Vs(t)}function Zd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dg(t){return t.collectionGroup!==null}function ui(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(it.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Si(i,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new Si(it.keyField(),r))}return e.ce}function dn(t){const e=he(t);return e.le||(e.le=EA(e,ui(t))),e.le}function EA(t,e){if(t.limitType==="F")return Xd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Si(s.field,i)});const n=t.endAt?new la(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new la(t.startAt.position,t.startAt.inclusive):null;return Xd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lc(t,e){const n=t.filters.concat([e]);return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cc(t,e,n){return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Va(t,e){return uu(dn(t),dn(e))&&t.limitType===e.limitType}function fg(t){return`${cu(dn(t))}|lt:${t.limitType}`}function Jr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ug(s)).join(", ")}]`),ka(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Es(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Es(s)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function Na(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ui(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Yd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,ui(r),s)||r.endAt&&!function(o,l,c){const h=Yd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,ui(r),s))}(t,e)}function wA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pg(t){return(e,n)=>{let r=!1;for(const s of ui(t)){const i=TA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function TA(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?vs(c,h):ce()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return rg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=new $e(se.comparator);function On(){return IA}const mg=new $e(se.comparator);function ti(...t){let e=mg;for(const n of t)e=e.insert(n.key,n);return e}function gg(t){let e=mg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function br(){return hi()}function _g(){return hi()}function hi(){return new Ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const AA=new $e(se.comparator),bA=new at(se.comparator);function ve(...t){let e=bA;for(const n of t)e=e.add(n);return e}const RA=new at(Re);function SA(){return RA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:aa(e)?"-0":e}}function yg(t){return{integerValue:""+t}}function PA(t,e){return sA(e)?yg(e):hu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this._=void 0}}function CA(t,e,n){return t instanceof Pi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ou(i)&&(i=au(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ci?Eg(t,e):t instanceof ki?wg(t,e):function(s,i){const o=vg(s,i),l=ef(o)+ef(s.Pe);return ic(o)&&ic(s.Pe)?yg(l):hu(s.serializer,l)}(t,e)}function kA(t,e,n){return t instanceof Ci?Eg(t,e):t instanceof ki?wg(t,e):n}function vg(t,e){return t instanceof ca?function(r){return ic(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Pi extends Oa{}class Ci extends Oa{constructor(e){super(),this.elements=e}}function Eg(t,e){const n=Tg(e);for(const r of t.elements)n.some(s=>gn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ki extends Oa{constructor(e){super(),this.elements=e}}function wg(t,e){let n=Tg(e);for(const r of t.elements)n=n.filter(s=>!gn(s,r));return{arrayValue:{values:n}}}class ca extends Oa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ef(t){return He(t.integerValue||t.doubleValue)}function Tg(t){return lu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n){this.field=e,this.transform=n}}function VA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ci&&s instanceof Ci||r instanceof ki&&s instanceof ki?ys(r.elements,s.elements,gn):r instanceof ca&&s instanceof ca?gn(r.Pe,s.Pe):r instanceof Pi&&s instanceof Pi}(t.transform,e.transform)}class NA{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Da{}function Ig(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bg(t.key,Kt.none()):new Wi(t.key,t.data,Kt.none());{const n=t.data,r=kt.empty();let s=new at(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gr(t.key,r,new Mt(s.toArray()),Kt.none())}}function OA(t,e,n){t instanceof Wi?function(s,i,o){const l=s.value.clone(),c=nf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(s,i,o){if(!qo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=nf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ag(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function di(t,e,n,r){return t instanceof Wi?function(i,o,l,c){if(!qo(i.precondition,o))return l;const h=i.value.clone(),d=rf(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(i,o,l,c){if(!qo(i.precondition,o))return l;const h=rf(i.fieldTransforms,c,o),d=o.data;return d.setAll(Ag(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function DA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=vg(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function tf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ys(r,s,(i,o)=>VA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wi extends Da{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gr extends Da{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ag(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nf(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,kA(o,l,n[s]))}return r}function rf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,CA(i,o,e))}return r}class bg extends Da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MA extends Da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_g();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Ig(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,(n,r)=>tf(n,r))&&ys(this.baseMutations,e.baseMutations,(n,r)=>tf(n,r))}}class du{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return AA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new du(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,Ie;function BA(t){switch(t){default:return ce();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Rg(t){if(t===void 0)return Nn("GRPC error has no .code"),D.UNKNOWN;switch(t){case We.OK:return D.OK;case We.CANCELLED:return D.CANCELLED;case We.UNKNOWN:return D.UNKNOWN;case We.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case We.INTERNAL:return D.INTERNAL;case We.UNAVAILABLE:return D.UNAVAILABLE;case We.UNAUTHENTICATED:return D.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case We.NOT_FOUND:return D.NOT_FOUND;case We.ALREADY_EXISTS:return D.ALREADY_EXISTS;case We.PERMISSION_DENIED:return D.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case We.ABORTED:return D.ABORTED;case We.OUT_OF_RANGE:return D.OUT_OF_RANGE;case We.UNIMPLEMENTED:return D.UNIMPLEMENTED;case We.DATA_LOSS:return D.DATA_LOSS;default:return ce()}}(Ie=We||(We={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=new Pr([4294967295,4294967295],0);function sf(t){const e=jA().encode(t),n=new Qm;return n.update(e),new Uint8Array(n.digest())}function of(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([s,i],0)]}class fu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ni(`Invalid padding: ${n}`);if(r<0)throw new ni(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ni(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ni(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Pr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Pr.fromNumber(r)));return s.compare($A)===1&&(s=new Pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=sf(e),[r,s]=of(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=sf(e),[r,s]=of(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ki.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ma(ue.min(),s,new $e(Re),On(),ve())}}class Ki{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ki(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Sg{constructor(e,n){this.targetId=e,this.me=n}}class Pg{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class af{constructor(){this.fe=0,this.ge=cf(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new Ki(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=cf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qA{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=lf(),this.Qe=new $e(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(ac(i))if(r===0){const o=new se(i.path);this.Ue(n,o,_t.newNoDocument(o,ue.min()))}else xe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Dr(r).toUint8Array()}catch(c){if(c instanceof sg)return _s("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new fu(o,s,i)}catch(c){return _s(c instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&ac(l.target)){const c=new se(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,_t.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ve();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ma(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=lf(),this.Qe=new $e(Re),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new af,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new af),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function lf(){return new $e(se.comparator)}function cf(){return new $e(se.comparator)}const HA={asc:"ASCENDING",desc:"DESCENDING"},zA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WA={and:"AND",or:"OR"};class KA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uc(t,e){return t.useProto3Json||ka(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GA(t,e){return ua(t,e.toTimestamp())}function fn(t){return xe(!!t),ue.fromTimestamp(function(n){const r=ur(n);return new Je(r.seconds,r.nanos)}(t))}function pu(t,e){return hc(t,e).canonicalString()}function hc(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kg(t){const e=Ue.fromString(t);return xe(Dg(e)),e}function dc(t,e){return pu(t.databaseId,e.path)}function Cl(t,e){const n=kg(e);if(n.get(1)!==t.databaseId.projectId)throw new X(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Vg(n))}function xg(t,e){return pu(t.databaseId,e)}function QA(t){const e=kg(t);return e.length===4?Ue.emptyPath():Vg(e)}function fc(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vg(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uf(t,e,n){return{name:dc(t,e),fields:n.value.mapValue.fields}}function YA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(xe(d===void 0||typeof d=="string"),ct.fromBase64String(d||"")):(xe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ct.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?D.UNKNOWN:Rg(h.code);return new X(d,h.message||"")}(o);n=new Pg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cl(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):ue.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=_t.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Ho(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Cl(t,r.document),i=r.readTime?fn(r.readTime):ue.min(),o=_t.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ho([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Cl(t,r.document),i=r.removedTargetIds||[];n=new Ho([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new UA(s,i),l=r.targetId;n=new Sg(l,o)}}return n}function JA(t,e){let n;if(e instanceof Wi)n={update:uf(t,e.key,e.value)};else if(e instanceof bg)n={delete:dc(t,e.key)};else if(e instanceof gr)n={update:uf(t,e.key,e.data),updateMask:ob(e.fieldMask)};else{if(!(e instanceof MA))return ce();n={verify:dc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Pi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ci)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ce()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:GA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(t,e.precondition)),n}function XA(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(ue.min())&&(o=fn(i)),new NA(o,s.transformResults||[])}(n,e))):[]}function ZA(t,e){return{documents:[xg(t,e.path)]}}function eb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xg(t,s);const i=function(h){if(h.length!==0)return Og(Jt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:Xr(g.field),direction:rb(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=uc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function tb(t){let e=QA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=Ng(p);return g instanceof Jt&&lg(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new Si(Zr(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,ka(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new la(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new la(_,g)}(n.endAt)),vA(e,s,o,i,l,"F",c,h)}function nb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ng(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zr(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zr(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Zr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>Ng(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(n.compositeFilter.op))}(t):ce()}function rb(t){return HA[t]}function sb(t){return zA[t]}function ib(t){return WA[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return it.fromServerFormat(t.fieldPath)}function Og(t){return t instanceof Ke?function(n){if(n.op==="=="){if(Qd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(Gd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(Gd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:sb(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(s=>Og(s));return r.length===1?r[0]:{compositeFilter:{op:ib(n.op),filters:r}}}(t):ce()}function ob(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),l=ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.ct=e}}function lb(t){const e=tb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.un=new ub}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(cr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class ub{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ws(0)}static kn(){return new ws(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this.changes=new Ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&di(r.mutation,s,Mt.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ti();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=On();const o=hi(),l=function(){return hi()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof gr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),di(d.mutation,h,d.mutation.getFieldMask(),Je.now())):o.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new db(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=hi();let s=new $e((o,l)=>o-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Mt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||ve()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=_g();d.forEach(g=>{if(!i.has(g)){const _=Ig(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(br());let l=-1,c=i;return o.next(h=>L.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ve())).next(d=>({batchId:l,changes:gg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=ti();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ti();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(p,g){return new Vs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,_t.newInvalidDocument(d)))});let l=ti();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&di(d.mutation,h,Mt.empty(),Je.now()),Na(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:lb(s.bundledQuery),readTime:fn(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.overlays=new $e(se.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=br(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=br(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=br(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return L.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new FA(n,r));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.Tr=new at(Ze.Er),this.dr=new at(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Ue([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Ue([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ve();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Re(e.wr,n.wr)}static Ar(e,n){return Re(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Ze.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Re);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new se(i),0);let l=new at(Re);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),s=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.Mr=e,this.docs=function(){return new $e(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=On();const o=n.path,l=new se(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||eA(Z0(d),r)<=0||(s.has(d.key)||Na(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vb(this)}getSize(e){return L.resolve(this.size)}}class vb extends hb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.persistence=e,this.Nr=new Ns(n=>cu(n),uu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new mu,this.targetCount=0,this.kr=ws.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new iu(0),this.Kr=!1,this.Kr=!0,this.$r=new gb,this.referenceDelegate=e(this),this.Ur=new Eb(this),this.indexManager=new cb,this.remoteDocumentCache=function(s){return new yb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ab(n),this.Gr=new pb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new _b(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new Tb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Tb extends nA{constructor(e){super(),this.currentSequenceNumber=e}}class gu{constructor(e){this.persistence=e,this.Jr=new mu,this.Yr=null}static Zr(e){return new gu(e)}get Xr(){if(this.Yr)return this.Yr;throw ce()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _u(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hw()?8:rA(It())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ib;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Qs()<=Ee.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Qs()<=Ee.DEBUG&&te("QueryEngine","Query:",Jr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Qs()<=Ee.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(n))):L.resolve())}Yi(e,n){if(Zd(n))return L.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=cc(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,cc(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return Zd(n)||s.isEqual(ue.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?L.resolve(null):(Qs()<=Ee.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jr(n)),this.rs(e,o,n,X0(s,-1)).next(l=>l))})}ts(e,n){let r=new at(pg(e));return n.forEach((s,i)=>{Na(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Qs()<=Ee.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Jr(n)),this.Ji.getDocumentsMatchingQuery(e,n,cr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new $e(Re),this._s=new Ns(i=>cu(i),uu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Rb(t,e,n,r){return new bb(t,e,n,r)}async function Mg(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ve();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Sb(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let _=L.resolve();return g.forEach(P=>{_=_.next(()=>d.getEntry(c,P)).next(x=>{const N=h.docVersions.get(P);xe(N!==null),x.version.compareTo(N)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),d.addEntry(x)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ve();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Lg(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Pb(t,e){const n=he(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ct.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(x,N,$){return x.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,_,d)&&l.push(n.Ur.updateTargetData(i,_))});let c=On(),h=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Cb(i,o,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(ue.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function Cb(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=On();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function kb(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xb(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function pc(t,e,n){const r=he(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zi(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function hf(t,e,n){const r=he(t);let s=ue.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=he(c),g=p._s.get(d);return g!==void 0?L.resolve(p.os.get(g)):p.Ur.getTargetData(h,d)}(r,o,dn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:ve())).next(l=>(Vb(r,wA(e),l),{documents:l,Ts:i})))}function Vb(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class df{constructor(){this.activeTargetIds=SA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nb{constructor(){this.so=new df,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new df,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co=null;function kl(){return Co===null?Co=function(){return 268435456+Math.round(2147483648*Math.random())}():Co++,"0x"+Co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Lb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=kl(),c=this.xo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw _s("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Db[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=kl();return new Promise((o,l)=>{const c=new Ym;c.setWithCredentials(!0),c.listenOnce(Jm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case jo.NO_ERROR:const d=c.getResponseJson();te(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case jo.TIMEOUT:te(pt,`RPC '${e}' ${i} timed out`),l(new X(D.DEADLINE_EXCEEDED,"Request time out"));break;case jo.HTTP_ERROR:const p=c.getStatus();if(te(pt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const P=function(N){const $=N.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf($)>=0?$:D.UNKNOWN}(_.status);l(new X(P,_.message))}else l(new X(D.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new X(D.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{te(pt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);te(pt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=kl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eg(),l=Zm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(pt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,_=!1;const P=new Mb({Io:N=>{_?te(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(te(pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),te(pt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},To:()=>p.close()}),x=(N,$,j)=>{N.listen($,z=>{try{j(z)}catch(K){setTimeout(()=>{throw K},0)}})};return x(p,ei.EventType.OPEN,()=>{_||(te(pt,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),x(p,ei.EventType.CLOSE,()=>{_||(_=!0,te(pt,`RPC '${e}' stream ${s} transport closed`),P.So())}),x(p,ei.EventType.ERROR,N=>{_||(_=!0,_s(pt,`RPC '${e}' stream ${s} transport errored:`,N),P.So(new X(D.UNAVAILABLE,"The operation could not be completed")))}),x(p,ei.EventType.MESSAGE,N=>{var $;if(!_){const j=N.data[0];xe(!!j);const z=j,K=z.error||(($=z[0])===null||$===void 0?void 0:$.error);if(K){te(pt,`RPC '${e}' stream ${s} received error:`,K);const pe=K.status;let ge=function(T){const A=We[T];if(A!==void 0)return Rg(A)}(pe),I=K.message;ge===void 0&&(ge=D.INTERNAL,I="Unknown error status: "+pe+" with message "+K.message),_=!0,P.So(new X(ge,I)),p.close()}else te(pt,`RPC '${e}' stream ${s} received:`,j),P.bo(j)}}),x(l,Xm.STAT_EVENT,N=>{N.stat===rc.PROXY?te(pt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===rc.NOPROXY&&te(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function xl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){return new KA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new X(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fb extends Ug{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=YA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?fn(o.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=fc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=ac(c)?{documents:ZA(i,c)}:{query:eb(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Cg(i,o.resumeToken);const h=uc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=ua(i,o.snapshotVersion.toTimestamp());const h=uc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=nb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=fc(this.serializer),n.removeTarget=e,this.a_(n)}}class Ub extends Ug{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=XA(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=fc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new X(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,hc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(D.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,hc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(D.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class jb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nn(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{jr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=he(c);h.L_.add(4),await Gi(h),h.q_.set("Unknown"),h.L_.delete(4),await Fa(h)}(this))})}),this.q_=new jb(r,s)}}async function Fa(t){if(jr(t))for(const e of t.B_)await e(!0)}async function Gi(t){for(const e of t.B_)await e(!1)}function Bg(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),wu(n)?Eu(n):Os(n).r_()&&vu(n,e))}function yu(t,e){const n=he(t),r=Os(n);n.N_.delete(e),r.r_()&&jg(n,e),n.N_.size===0&&(r.r_()?r.o_():jr(n)&&n.q_.set("Unknown"))}function vu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Os(t).A_(e)}function jg(t,e){t.Q_.xe(e),Os(t).R_(e)}function Eu(t){t.Q_=new qA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Os(t).start(),t.q_.v_()}function wu(t){return jr(t)&&!Os(t).n_()&&t.N_.size>0}function jr(t){return he(t).L_.size===0}function $g(t){t.Q_=void 0}async function qb(t){t.q_.set("Online")}async function Hb(t){t.N_.forEach((e,n)=>{vu(t,e)})}async function zb(t,e){$g(t),wu(t)?(t.q_.M_(e),Eu(t)):t.q_.set("Unknown")}async function Wb(t,e,n){if(t.q_.set("Online"),e instanceof Pg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ha(t,r)}else if(e instanceof Ho?t.Q_.Ke(e):e instanceof Sg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await Lg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(ct.EMPTY_BYTE_STRING,d.snapshotVersion)),jg(i,c);const p=new Zn(d.target,c,h,d.sequenceNumber);vu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await ha(t,r)}}async function ha(t,e,n){if(!zi(e))throw e;t.L_.add(1),await Gi(t),t.q_.set("Offline"),n||(n=()=>Lg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Fa(t)})}function qg(t,e){return e().catch(n=>ha(t,n,e))}async function Ua(t){const e=he(t),n=hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Kb(e);)try{const s=await kb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Gb(e,s)}catch(s){await ha(e,s)}Hg(e)&&zg(e)}function Kb(t){return jr(t)&&t.O_.length<10}function Gb(t,e){t.O_.push(e);const n=hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Hg(t){return jr(t)&&!hr(t).n_()&&t.O_.length>0}function zg(t){hr(t).start()}async function Qb(t){hr(t).p_()}async function Yb(t){const e=hr(t);for(const n of t.O_)e.m_(n.mutations)}async function Jb(t,e,n){const r=t.O_.shift(),s=du.from(r,e,n);await qg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ua(t)}async function Xb(t,e){e&&hr(t).V_&&await async function(r,s){if(function(o){return BA(o)&&o!==D.ABORTED}(s.code)){const i=r.O_.shift();hr(r).s_(),await qg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ua(r)}}(t,e),Hg(t)&&zg(t)}async function pf(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.L_.add(3),await Gi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Fa(n)}async function Zb(t,e){const n=he(t);e?(n.L_.delete(2),await Fa(n)):e||(n.L_.add(2),await Gi(n),n.q_.set("Unknown"))}function Os(t){return t.K_||(t.K_=function(n,r,s){const i=he(n);return i.w_(),new Fb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:qb.bind(null,t),Ro:Hb.bind(null,t),mo:zb.bind(null,t),d_:Wb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),wu(t)?Eu(t):t.q_.set("Unknown")):(await t.K_.stop(),$g(t))})),t.K_}function hr(t){return t.U_||(t.U_=function(n,r,s){const i=he(n);return i.w_(),new Ub(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Qb.bind(null,t),mo:Xb.bind(null,t),f_:Yb.bind(null,t),g_:Jb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ua(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Tu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iu(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),zi(t))return new X(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=ti(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.W_=new $e(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ce():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ts{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ts(e,n,hs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class tR{constructor(){this.queries=gf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=gf(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new X(D.ABORTED,"Firestore shutting down"))}}function gf(){return new Ns(t=>fg(t),Va)}async function Wg(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new eR,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Iu(o,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Au(n)}async function Kg(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function nR(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Au(n)}function rR(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Au(t){t.Y_.forEach(e=>{e.next()})}var mc,_f;(_f=mc||(mc={})).ea="default",_f.Cache="cache";class Gg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==mc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.key=e}}class Yg{constructor(e){this.key=e}}class sR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=pg(e),this.Ra=new hs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new mf,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),_=Na(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),x=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;g&&_?g.data.isEqual(_.data)?P!==x&&(r.track({type:3,doc:_}),N=!0):this.ga(g,_)||(r.track({type:2,doc:_}),N=!0,(c&&this.Aa(_,c)>0||h&&this.Aa(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),N=!0):g&&!_&&(r.track({type:1,doc:g}),N=!0,(c||h)&&(l=!0)),N&&(_?(o=o.add(_),i=x?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,P){const x=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return x(_)-x(P)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new Ts(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new mf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Yg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Qg(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ts.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class iR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oR{constructor(e){this.key=e,this.va=!1}}class aR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ns(l=>fg(l),Va),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(se.comparator),this.Na=new Map,this.La=new mu,this.Ba={},this.ka=new Map,this.qa=ws.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function lR(t,e,n=!0){const r=n_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Jg(r,e,n,!0),s}async function cR(t,e){const n=n_(t);await Jg(n,e,!0,!1)}async function Jg(t,e,n,r){const s=await xb(t.localStore,dn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await uR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Bg(t.remoteStore,s),l}async function uR(t,e,n,r,s){t.Ka=(p,g,_)=>async function(x,N,$,j){let z=N.view.ma($);z.ns&&(z=await hf(x.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,z)));const K=j&&j.targetChanges.get(N.targetId),pe=j&&j.targetMismatches.get(N.targetId)!=null,ge=N.view.applyChanges(z,x.isPrimaryClient,K,pe);return vf(x,N.targetId,ge.wa),ge.snapshot}(t,p,g,_);const i=await hf(t.localStore,e,!0),o=new sR(e,i.Ts),l=o.ma(i.documents),c=Ki.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);vf(t,n,h.wa);const d=new iR(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function hR(t,e,n){const r=he(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Va(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&yu(r.remoteStore,s.targetId),gc(r,s.targetId)}).catch(Hi)):(gc(r,s.targetId),await pc(r.localStore,s.targetId,!0))}async function dR(t,e){const n=he(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yu(n.remoteStore,r.targetId))}async function fR(t,e,n){const r=ER(t);try{const s=await function(o,l){const c=he(o),h=Je.now(),d=l.reduce((_,P)=>_.add(P.key),ve());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let P=On(),x=ve();return c.cs.getEntries(_,d).next(N=>{P=N,P.forEach(($,j)=>{j.isValidDocument()||(x=x.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,P)).next(N=>{p=N;const $=[];for(const j of l){const z=DA(j,p.get(j.key).overlayedDocument);z!=null&&$.push(new gr(j.key,z,ig(z.value.mapValue),Kt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,$,l)}).next(N=>{g=N;const $=N.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(_,N.batchId,$)})}).then(()=>({batchId:g.batchId,changes:gg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new $e(Re)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Qi(r,s.changes),await Ua(r.remoteStore)}catch(s){const i=Iu(s,"Failed to persist write");n.reject(i)}}async function Xg(t,e){const n=he(t);try{const r=await Pb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?xe(o.va):s.removedDocuments.size>0&&(xe(o.va),o.va=!1))}),await Qi(n,r,e)}catch(r){await Hi(r)}}function yf(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=he(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&Au(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pR(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new $e(se.comparator);o=o.insert(i,_t.newNoDocument(i,ue.min()));const l=ve().add(i),c=new Ma(ue.min(),new Map,new $e(Re),o,l);await Xg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),bu(r)}else await pc(r.localStore,e,!1).then(()=>gc(r,e,n)).catch(Hi)}async function mR(t,e){const n=he(t),r=e.batch.batchId;try{const s=await Sb(n.localStore,e);e_(n,r,null),Zg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qi(n,s)}catch(s){await Hi(s)}}async function gR(t,e,n){const r=he(t);try{const s=await function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(xe(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);e_(r,e,n),Zg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qi(r,s)}catch(s){await Hi(s)}}function Zg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function e_(t,e,n){const r=he(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||t_(t,r)})}function t_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(yu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),bu(t))}function vf(t,e,n){for(const r of n)r instanceof Qg?(t.La.addReference(r.key,e),_R(t,r)):r instanceof Yg?(te("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||t_(t,r.key)):ce()}function _R(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(r),bu(t))}function bu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Ue.fromString(e)),r=t.qa.next();t.Na.set(r,new oR(n)),t.Oa=t.Oa.insert(n,r),Bg(t.remoteStore,new Zn(dn(xa(n.path)),r,"TargetPurposeLimboResolution",iu.oe))}}async function Qi(t,e,n){const r=he(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=_u.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const d=he(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.$i,_=>d.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>L.forEach(g.Ui,_=>d.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!zi(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=d.os.get(g),P=_.snapshotVersion,x=_.withLastLimboFreeSnapshotVersion(P);d.os=d.os.insert(g,x)}}}(r.localStore,i))}async function yR(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await Mg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new X(D.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qi(n,r.hs)}}function vR(t,e){const n=he(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let s=ve();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function n_(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pR.bind(null,e),e.Ca.d_=nR.bind(null,e.eventManager),e.Ca.$a=rR.bind(null,e.eventManager),e}function ER(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gR.bind(null,e),e}class da{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=La(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Rb(this.persistence,new Ab,e.initialUser,this.serializer)}Ga(e){return new wb(gu.Zr,this.serializer)}Wa(e){return new Nb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}da.provider={build:()=>new da};class _c{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yR.bind(null,this.syncEngine),await Zb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tR}()}createDatastore(e){const n=La(e.databaseInfo.databaseId),r=function(i){return new Lb(i)}(e.databaseInfo);return function(i,o,l,c){return new Bb(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new $b(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>yf(this.syncEngine,n,0),function(){return ff.D()?new ff:new Ob}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new aR(s,i,o,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Gi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}_c.provider={build:()=>new _c};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=ng.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Iu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vl(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Mg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ef(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TR(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>pf(e.remoteStore,s)),t._onlineComponents=e}async function TR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;_s("Error using user provided cache. Falling back to memory cache: "+n),await Vl(t,new da)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Vl(t,new da);return t._offlineComponents}async function s_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Ef(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Ef(t,new _c))),t._onlineComponents}function IR(t){return s_(t).then(e=>e.syncEngine)}async function yc(t){const e=await s_(t),n=e.eventManager;return n.onListen=lR.bind(null,e.syncEngine),n.onUnlisten=hR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=cR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dR.bind(null,e.syncEngine),n}function AR(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new r_({next:g=>{d.Za(),o.enqueueAndForget(()=>Kg(i,p));const _=g.docs.has(l);!_&&g.fromCache?h.reject(new X(D.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?h.reject(new X(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Gg(xa(l.path),d,{includeMetadataChanges:!0,_a:!0});return Wg(i,p)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t,e,n){if(!n)throw new X(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bR(t,e,n,r){if(e===!0&&r===!0)throw new X(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tf(t){if(!se.isDocumentKey(t))throw new X(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function If(t){if(se.isDocumentKey(t))throw new X(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ba(t);throw new X(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=i_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ja{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new q0;switch(r.type){case"firstParty":return new K0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wf.get(n);r&&(te("ComponentProvider","Removing Datastore"),wf.delete(n),r.terminate())}(this),Promise.resolve()}}function RR(t,e,n,r={}){var s;const i=(t=Gt(t,ja))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=mt.MOCK_USER;else{l=sw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new mt(h)}t._authCredentials=new H0(new tg(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $r(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class sr extends $r{constructor(e,n,r){super(e,n,xa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new se(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function a_(t,e,...n){if(t=Ye(t),o_("collection","path",e),t instanceof ja){const r=Ue.fromString(e,...n);return If(r),new sr(t,null,r)}{if(!(t instanceof wt||t instanceof sr))throw new X(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return If(r),new sr(t.firestore,null,r)}}function $a(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=ng.newId()),o_("doc","path",e),t instanceof ja){const r=Ue.fromString(e,...n);return Tf(r),new wt(t,null,new se(r))}{if(!(t instanceof wt||t instanceof sr))throw new X(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Tf(r),new wt(t.firestore,t instanceof sr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Fg(this,"async_queue_retry"),this.Vu=()=>{const r=xl();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=xl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new rr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!zi(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Tu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ce()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Rf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Lr extends ja{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new bf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bf(e),this._firestoreClient=void 0,await e}}}function SR(t,e){const n=typeof t=="object"?t:dm(),r=typeof t=="string"?t:"(default)",s=Gc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nw("firestore");i&&RR(s,...i)}return s}function Ru(t){if(t._terminated)throw new X(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PR(t),t._firestoreClient}function PR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new oA(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,i_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new wR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Is(ct.fromBase64String(e))}catch(n){throw new X(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Is(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=/^__.*__$/;class kR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wi(e,this.data,n,this.fieldTransforms)}}class l_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function c_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class Cu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Cu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return fa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(c_(this.Cu)&&CR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class xR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||La(e)}Qu(e,n,r,s=!1){return new Cu({Cu:e,methodName:n,qu:r,path:it.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function za(t){const e=t._freezeSettings(),n=La(t._databaseId);return new xR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function u_(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);xu("Data must be an object, but it was:",o,r);const l=h_(r,o);let c,h;if(i.merge)c=new Mt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=vc(e,p,n);if(!o.contains(g))throw new X(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);f_(d,g)||d.push(g)}c=new Mt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new kR(new kt(l),c,h)}class Wa extends Ha{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wa}}class ku extends Ha{_toFieldTransform(e){return new xA(e.path,new Pi)}isEqual(e){return e instanceof ku}}function VR(t,e,n,r){const s=t.Qu(1,e,n);xu("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();Br(r,(c,h)=>{const d=Vu(e,c,n);h=Ye(h);const p=s.Nu(d);if(h instanceof Wa)i.push(d);else{const g=Yi(h,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Mt(i);return new l_(o,l,s.fieldTransforms)}function NR(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[vc(e,r,n)],c=[s];if(i.length%2!=0)throw new X(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(vc(e,i[g])),c.push(i[g+1]);const h=[],d=kt.empty();for(let g=l.length-1;g>=0;--g)if(!f_(h,l[g])){const _=l[g];let P=c[g];P=Ye(P);const x=o.Nu(_);if(P instanceof Wa)h.push(_);else{const N=Yi(P,x);N!=null&&(h.push(_),d.set(_,N))}}const p=new Mt(h);return new l_(d,p,o.fieldTransforms)}function OR(t,e,n,r=!1){return Yi(n,t.Qu(r?4:3,e))}function Yi(t,e){if(d_(t=Ye(t)))return xu("Unsupported field value:",e,t),h_(t,e);if(t instanceof Ha)return function(r,s){if(!c_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Yi(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:ua(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(s.serializer,i)}}if(r instanceof Su)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Is)return{bytesValue:Cg(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return hu(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ba(r)}`)}(t,e)}function h_(t,e){const n={};return rg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=Yi(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function d_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Su||t instanceof Is||t instanceof wt||t instanceof Ha||t instanceof Pu)}function xu(t,e,n){if(!d_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ba(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function vc(t,e,n){if((e=Ye(e))instanceof qa)return e._internalPath;if(typeof e=="string")return Vu(t,e);throw fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const DR=new RegExp("[~\\*/\\[\\]]");function Vu(t,e,n){if(e.search(DR)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qa(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(D.INVALID_ARGUMENT,l+t+c)}function f_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MR extends p_{data(){return super.data()}}function Nu(t,e){return typeof e=="string"?Vu(t,e):e instanceof qa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ou{}class m_ extends Ou{}function FR(t,e,...n){let r=[];e instanceof Ou&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Mu).length,l=i.filter(c=>c instanceof Du).length;if(o>1||o>0&&l>0)throw new X(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Du extends m_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Du(e,n,r)}_apply(e){const n=this._parse(e);return g_(e._query,n),new $r(e.firestore,e.converter,lc(e._query,n))}_parse(e){const n=za(e.firestore);return function(i,o,l,c,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Pf(p,d);const _=[];for(const P of p)_.push(Sf(c,i,P));g={arrayValue:{values:_}}}else g=Sf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Pf(p,d),g=OR(l,o,p,d==="in"||d==="not-in");return Ke.create(h,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Mu extends Ou{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)g_(o,c),o=lc(o,c)}(e._query,n),new $r(e.firestore,e.converter,lc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lu extends m_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Lu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new X(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Si(i,o)}(e._query,this._field,this._direction);return new $r(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Vs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function UR(t,e="asc"){const n=e,r=Nu("orderBy",t);return Lu._create(r,n)}function Sf(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new X(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dg(e)&&n.indexOf("/")!==-1)throw new X(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!se.isDocumentKey(r))throw new X(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kd(t,new se(r))}if(n instanceof wt)return Kd(t,n._key);throw new X(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ba(n)}.`)}function Pf(t,e){if(!Array.isArray(t)||t.length===0)throw new X(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function g_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class BR{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>He(o.doubleValue));return new Pu(i)}convertGeoPoint(e){return new Su(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=au(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ai(e));default:return null}}convertTimestamp(e){const n=ur(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);xe(Dg(r));const s=new bi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class y_ extends p_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zo extends y_{data(e={}){return super.data(e)}}class jR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zo(this._firestore,this._userDataWriter,r.key,r,new ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new zo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new zo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:$R(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $R(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){t=Gt(t,wt);const e=Gt(t.firestore,Lr);return AR(Ru(e),t._key).then(n=>E_(e,t,n))}class v_ extends BR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function HR(t,e,n){t=Gt(t,wt);const r=Gt(t.firestore,Lr),s=__(t.converter,e);return Fu(r,[u_(za(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kt.none())])}function zR(t,e,n,...r){t=Gt(t,wt);const s=Gt(t.firestore,Lr),i=za(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof qa?NR(i,"updateDoc",t._key,e,n,r):VR(i,"updateDoc",t._key,e),Fu(s,[o.toMutation(t._key,Kt.exists(!0))])}function WR(t,e){const n=Gt(t.firestore,Lr),r=$a(t),s=__(t.converter,e);return Fu(n,[u_(za(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function KR(t,...e){var n,r,s;t=Ye(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Rf(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Rf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(t instanceof wt)h=Gt(t.firestore,Lr),d=xa(t._key.path),c={next:p=>{e[o]&&e[o](E_(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Gt(t,$r);h=Gt(p.firestore,Lr),d=p._query;const g=new v_(h);c={next:_=>{e[o]&&e[o](new jR(h,g,p,_))},error:e[o+1],complete:e[o+2]},LR(t._query)}return function(g,_,P,x){const N=new r_(x),$=new Gg(_,N,P);return g.asyncQueue.enqueueAndForget(async()=>Wg(await yc(g),$)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>Kg(await yc(g),$))}}(Ru(h),d,l,c)}function Fu(t,e){return function(r,s){const i=new rr;return r.asyncQueue.enqueueAndForget(async()=>fR(await IR(r),s,i)),i.promise}(Ru(t),e)}function E_(t,e,n){const r=n.docs.get(e._key),s=new v_(t);return new y_(t,s,e._key,r,new ri(n.hasPendingWrites,n.fromCache),e.converter)}function GR(){return new ku("serverTimestamp")}(function(e,n=!0){(function(s){xs=s})(Cs),ms(new xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Lr(new z0(r.getProvider("auth-internal")),new Q0(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),nr($d,"4.7.3",e),nr($d,"4.7.3","esm2017")})();var QR="firebase",YR="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(QR,YR,"app");const JR={apiKey:"AIzaSyA4tggQdofhk33tLj4tkAQG-bnLuSg9MS8",authDomain:"testing-6df50.firebaseapp.com",projectId:"testing-6df50",storageBucket:"testing-6df50.appspot.com",messagingSenderId:"91185489018",appId:"1:91185489018:web:7303efff2ff2030f66c7c3"},w_=hm(JR),Ji=SR(w_),Xi=j0(w_);async function XR(t){try{const e=$a(Ji,`/users/${t}`),n=await qR(e);if(!n.exists())throw new Error(`No se encontró el perfil de usuario con ID: ${t}`);return{id:n.id,email:n.data().email,displayName:n.data().displayName,bio:n.data().bio,traveledTo:n.data().traveledTo}}catch(e){throw console.error("Error al obtener el perfil del usuario:",e),e}}async function ZR(t,{displayName:e,bio:n,traveledTo:r}){const s=$a(Ji,`/users/${t}`);await zR(s,{displayName:e,bio:n,traveledTo:r})}let Pn={id:null,email:null,displayName:null,bio:null,traveledTo:null,fullyLoaded:!1},T_=[];CI(Xi,async t=>{t?(Pn={id:t.uid,email:t.email,displayName:t.displayName},XR(t.uid).then(e=>{Pn={...Pn,bio:e.bio,traveledTo:e.traveledTo,fullyLoaded:!0},Ec()})):Pn={id:null,email:null,displayName:null,bio:null,traveledTo:null,fullyLoaded:!1},Ec()});async function eS({email:t,password:e}){try{const n=await II(Xi,t,e),r=$a(Ji,"users",n.user.uid);await HR(r,{id:n.user.uid,email:t}),console.log("Se creó la cuenta con éxito: ",n)}catch(n){Pn={id:null,email:null,displayName:null,bio:null,traveledTo:null,fullyLoaded:!1},console.error("[auth.js newUser] Error al tratar de crear la cuenta: ",n)}}async function tS({email:t,password:e}){try{const n=await AI(Xi,t,e);console.log("Se inició la sesión con éxito: ",n)}catch(n){throw console.error("[auth.js login] Error al tratar de iniciar sesión: ",n),n}}async function nS({displayName:t,bio:e,traveledTo:n}){try{await RI(Xi.currentUser,{displayName:t}),await ZR(Pn.id,{displayName:t,bio:e,traveledTo:n}),Pn={...Pn,displayName:t,bio:e,traveledTo:n},Ec()}catch(r){throw console.error("[auth.js editMyProfile] Error al tratar de editar el perfil: ",r),r}}async function rS(){await kI(Xi)}function Zi(t){T_.push(t),I_(t)}function I_(t){t({...Pn})}function Ec(){T_.forEach(t=>I_(t))}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof document<"u";function A_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function sS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&A_(t.default)}const ke=Object.assign;function Nl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xt(s)?s.map(t):t(s)}return n}const fi=()=>{},Xt=Array.isArray,b_=/#/g,iS=/&/g,oS=/\//g,aS=/=/g,lS=/\?/g,R_=/\+/g,cS=/%5B/g,uS=/%5D/g,S_=/%5E/g,hS=/%60/g,P_=/%7B/g,dS=/%7C/g,C_=/%7D/g,fS=/%20/g;function Uu(t){return encodeURI(""+t).replace(dS,"|").replace(cS,"[").replace(uS,"]")}function pS(t){return Uu(t).replace(P_,"{").replace(C_,"}").replace(S_,"^")}function wc(t){return Uu(t).replace(R_,"%2B").replace(fS,"+").replace(b_,"%23").replace(iS,"%26").replace(hS,"`").replace(P_,"{").replace(C_,"}").replace(S_,"^")}function mS(t){return wc(t).replace(aS,"%3D")}function gS(t){return Uu(t).replace(b_,"%23").replace(lS,"%3F")}function _S(t){return t==null?"":gS(t).replace(oS,"%2F")}function xi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yS=/\/$/,vS=t=>t.replace(yS,"");function Ol(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=IS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:xi(o)}}function ES(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&As(e.matched[r],n.matched[s])&&k_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function k_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TS(t[n],e[n]))return!1;return!0}function TS(t,e){return Xt(t)?kf(t,e):Xt(e)?kf(e,t):t===e}function kf(t,e){return Xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function IS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vi;(function(t){t.pop="pop",t.push="push"})(Vi||(Vi={}));var pi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pi||(pi={}));function AS(t){if(!t)if(es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vS(t)}const bS=/^[^#]+#/;function RS(t,e){return t.replace(bS,"#")+e}function SS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ka=()=>({left:window.scrollX,top:window.scrollY});function PS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=SS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xf(t,e){return(history.state?history.state.position-e:-1)+t}const Tc=new Map;function CS(t,e){Tc.set(t,e)}function kS(t){const e=Tc.get(t);return Tc.delete(t),e}let xS=()=>location.protocol+"//"+location.host;function x_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Cf(c,"")}return Cf(n,t)+r+s}function VS(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=x_(t,location),P=n.value,x=e.value;let N=0;if(g){if(n.value=_,e.value=g,o&&o===P){o=null;return}N=x?g.position-x.position:0}else r(_);s.forEach($=>{$(n.value,P,{delta:N,type:Vi.pop,direction:N?N>0?pi.forward:pi.back:pi.unknown})})};function c(){o=n.value}function h(g){s.push(g);const _=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:Ka()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Vf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ka():null}}function NS(t){const{history:e,location:n}=window,r={value:x_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:xS()+t+c;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](g)}}function o(c,h){const d=ke({},e.state,Vf(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=ke({},s.value,e.state,{forward:c,scroll:Ka()});i(d.current,d,!0);const p=ke({},Vf(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function OS(t){t=AS(t);const e=NS(t),n=VS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:RS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function DS(t){return typeof t=="string"||t&&typeof t=="object"}function V_(t){return typeof t=="string"||typeof t=="symbol"}const N_=Symbol("");var Nf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nf||(Nf={}));function bs(t,e){return ke(new Error,{type:t,[N_]:!0},e)}function En(t,e){return t instanceof Error&&N_ in t&&(e==null||!!(t.type&e))}const Of="[^/]+?",MS={sensitive:!1,strict:!1,start:!0,end:!0},LS=/[.+*?^${}()[\]/\\]/g;function FS(t,e){const n=ke({},MS,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(LS,"\\$&"),_+=40;else if(g.type===1){const{value:P,repeatable:x,optional:N,regexp:$}=g;i.push({name:P,repeatable:x,optional:N});const j=$||Of;if(j!==Of){_+=10;try{new RegExp(`(${j})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${P}" (${j}): `+K.message)}}let z=x?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(z=N&&h.length<2?`(?:/${z})`:"/"+z),N&&(z+="?"),s+=z,_+=20,N&&(_+=-8),x&&(_+=-20),j===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",P=i[g-1];p[P.name]=_&&P.repeatable?_.split("/"):_}return p}function c(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:P,repeatable:x,optional:N}=_,$=P in h?h[P]:"";if(Xt($)&&!x)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const j=Xt($)?$.join("/"):$;if(!j)if(N)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=j}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function US(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function O_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=US(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Df(r))return 1;if(Df(s))return-1}return s.length-r.length}function Df(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const BS={type:0,value:""},jS=/[a-zA-Z0-9_]/;function $S(t){if(!t)return[[]];if(t==="/")return[[BS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:jS.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function qS(t,e,n){const r=FS($S(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function HS(t,e){const n=[],r=new Map;e=Uf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const P=!_,x=Lf(p);x.aliasOf=_&&_.record;const N=Uf(e,p),$=[x];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const pe of K)$.push(Lf(ke({},x,{components:_?_.record.components:x.components,path:pe,aliasOf:_?_.record:x})))}let j,z;for(const K of $){const{path:pe}=K;if(g&&pe[0]!=="/"){const ge=g.record.path,I=ge[ge.length-1]==="/"?"":"/";K.path=g.record.path+(pe&&I+pe)}if(j=qS(K,g,N),_?_.alias.push(j):(z=z||j,z!==j&&z.alias.push(j),P&&p.name&&!Ff(j)&&o(p.name)),D_(j)&&c(j),x.children){const ge=x.children;for(let I=0;I<ge.length;I++)i(ge[I],j,_&&_.children[I])}_=_||j}return z?()=>{o(z)}:fi}function o(p){if(V_(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=KS(p,n);n.splice(g,0,p),p.record.name&&!Ff(p)&&r.set(p.record.name,p)}function h(p,g){let _,P={},x,N;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw bs(1,{location:p});N=_.record.name,P=ke(Mf(g.params,_.keys.filter(z=>!z.optional).concat(_.parent?_.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),p.params&&Mf(p.params,_.keys.map(z=>z.name))),x=_.stringify(P)}else if(p.path!=null)x=p.path,_=n.find(z=>z.re.test(x)),_&&(P=_.parse(x),N=_.record.name);else{if(_=g.name?r.get(g.name):n.find(z=>z.re.test(g.path)),!_)throw bs(1,{location:p,currentLocation:g});N=_.record.name,P=ke({},g.params,p.params),x=_.stringify(P)}const $=[];let j=_;for(;j;)$.unshift(j.record),j=j.parent;return{name:N,path:x,params:P,matched:$,meta:WS($)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Mf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Lf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:zS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function zS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function WS(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Uf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function KS(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;O_(t,e[i])<0?r=i:n=i+1}const s=GS(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function GS(t){let e=t;for(;e=e.parent;)if(D_(e)&&O_(t,e)===0)return e}function D_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function QS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(R_," "),o=i.indexOf("="),l=xi(o<0?i:i.slice(0,o)),c=o<0?null:xi(i.slice(o+1));if(l in e){let h=e[l];Xt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Bf(t){let e="";for(let n in t){const r=t[n];if(n=mS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xt(r)?r.map(i=>i&&wc(i)):[r&&wc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const JS=Symbol(""),jf=Symbol(""),Ga=Symbol(""),M_=Symbol(""),Ic=Symbol("");function Ys(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(bs(4,{from:n,to:e})):g instanceof Error?c(g):DS(g)?c(bs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function Dl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(A_(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Gn(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=sS(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Gn(_,n,r,o,l,s)()}))}}return i}function $f(t){const e=ln(Ga),n=ln(M_),r=zt(()=>{const c=Ve(t.to);return e.resolve(c)}),s=zt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(As.bind(null,d));if(g>-1)return g;const _=qf(c[h-2]);return h>1&&qf(d)===_&&p[p.length-1].path!==_?p.findIndex(As.bind(null,c[h-2])):g}),i=zt(()=>s.value>-1&&eP(n.params,r.value.params)),o=zt(()=>s.value>-1&&s.value===n.matched.length-1&&k_(n.params,r.value.params));function l(c={}){return ZS(c)?e[Ve(t.replace)?"replace":"push"](Ve(t.to)).catch(fi):Promise.resolve()}return{route:r,href:zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const XS=bp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$f,setup(t,{slots:e}){const n=va($f(t)),{options:r}=ln(Ga),s=zt(()=>({[Hf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ei("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),An=XS;function ZS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function eP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hf=(t,e,n)=>t??e??n,tP=bp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ln(Ic),s=zt(()=>t.route||r.value),i=ln(jf,0),o=zt(()=>{let h=Ve(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=zt(()=>s.value.matched[o.value]);No(jf,zt(()=>o.value+1)),No(JS,l),No(Ic,s);const c=tt();return Oo(()=>[c.value,l.value,t.name],([h,d,p],[g,_,P])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!As(d,_)||!g)&&(d.enterCallbacks[p]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return zf(n.default,{Component:g,route:h});const _=p.props[d],P=_?_===!0?h.params:typeof _=="function"?_(h):_:null,N=Ei(g,ke({},P,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return zf(n.default,{Component:N,route:h})||N}}});function zf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nP=tP;function rP(t){const e=HS(t.routes,t),n=t.parseQuery||QS,r=t.stringifyQuery||Bf,s=t.history,i=Ys(),o=Ys(),l=Ys(),c=zy(zn);let h=zn;es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Nl.bind(null,O=>""+O),p=Nl.bind(null,_S),g=Nl.bind(null,xi);function _(O,J){let Q,Z;return V_(O)?(Q=e.getRecordMatcher(O),Z=J):Z=O,e.addRoute(Z,Q)}function P(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function x(){return e.getRoutes().map(O=>O.record)}function N(O){return!!e.getRecordMatcher(O)}function $(O,J){if(J=ke({},J||c.value),typeof O=="string"){const E=Ol(n,O,J.path),C=e.resolve({path:E.path},J),M=s.createHref(E.fullPath);return ke(E,C,{params:g(C.params),hash:xi(E.hash),redirectedFrom:void 0,href:M})}let Q;if(O.path!=null)Q=ke({},O,{path:Ol(n,O.path,J.path).path});else{const E=ke({},O.params);for(const C in E)E[C]==null&&delete E[C];Q=ke({},O,{params:p(E)}),J.params=p(J.params)}const Z=e.resolve(Q,J),Te=O.hash||"";Z.params=d(g(Z.params));const Ne=ES(r,ke({},O,{hash:pS(Te),path:Z.path})),y=s.createHref(Ne);return ke({fullPath:Ne,hash:Te,query:r===Bf?YS(O.query):O.query||{}},Z,{redirectedFrom:void 0,href:y})}function j(O){return typeof O=="string"?Ol(n,O,c.value.path):ke({},O)}function z(O,J){if(h!==O)return bs(8,{from:J,to:O})}function K(O){return I(O)}function pe(O){return K(ke(j(O),{replace:!0}))}function ge(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let Z=typeof Q=="function"?Q(O):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=j(Z):{path:Z},Z.params={}),ke({query:O.query,hash:O.hash,params:Z.path!=null?{}:O.params},Z)}}function I(O,J){const Q=h=$(O),Z=c.value,Te=O.state,Ne=O.force,y=O.replace===!0,E=ge(Q);if(E)return I(ke(j(E),{state:typeof E=="object"?ke({},Te,E.state):Te,force:Ne,replace:y}),J||Q);const C=Q;C.redirectedFrom=J;let M;return!Ne&&wS(r,Z,Q)&&(M=bs(16,{to:C,from:Z}),Ft(Z,Z,!0,!1)),(M?Promise.resolve(M):A(C,Z)).catch(V=>En(V)?En(V,2)?V:qt(V):_e(V,C,Z)).then(V=>{if(V){if(En(V,2))return I(ke({replace:y},j(V.to),{state:typeof V.to=="object"?ke({},Te,V.to.state):Te,force:Ne}),J||C)}else V=R(C,Z,!0,y,Te);return b(C,Z,V),V})}function v(O,J){const Q=z(O,J);return Q?Promise.reject(Q):Promise.resolve()}function T(O){const J=Fn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function A(O,J){let Q;const[Z,Te,Ne]=sP(O,J);Q=Dl(Z.reverse(),"beforeRouteLeave",O,J);for(const E of Z)E.leaveGuards.forEach(C=>{Q.push(Gn(C,O,J))});const y=v.bind(null,O,J);return Q.push(y),Ct(Q).then(()=>{Q=[];for(const E of i.list())Q.push(Gn(E,O,J));return Q.push(y),Ct(Q)}).then(()=>{Q=Dl(Te,"beforeRouteUpdate",O,J);for(const E of Te)E.updateGuards.forEach(C=>{Q.push(Gn(C,O,J))});return Q.push(y),Ct(Q)}).then(()=>{Q=[];for(const E of Ne)if(E.beforeEnter)if(Xt(E.beforeEnter))for(const C of E.beforeEnter)Q.push(Gn(C,O,J));else Q.push(Gn(E.beforeEnter,O,J));return Q.push(y),Ct(Q)}).then(()=>(O.matched.forEach(E=>E.enterCallbacks={}),Q=Dl(Ne,"beforeRouteEnter",O,J,T),Q.push(y),Ct(Q))).then(()=>{Q=[];for(const E of o.list())Q.push(Gn(E,O,J));return Q.push(y),Ct(Q)}).catch(E=>En(E,8)?E:Promise.reject(E))}function b(O,J,Q){l.list().forEach(Z=>T(()=>Z(O,J,Q)))}function R(O,J,Q,Z,Te){const Ne=z(O,J);if(Ne)return Ne;const y=J===zn,E=es?history.state:{};Q&&(Z||y?s.replace(O.fullPath,ke({scroll:y&&E&&E.scroll},Te)):s.push(O.fullPath,Te)),c.value=O,Ft(O,J,Q,y),qt()}let w;function At(){w||(w=s.listen((O,J,Q)=>{if(!Zt.listening)return;const Z=$(O),Te=ge(Z);if(Te){I(ke(Te,{replace:!0}),Z).catch(fi);return}h=Z;const Ne=c.value;es&&CS(xf(Ne.fullPath,Q.delta),Ka()),A(Z,Ne).catch(y=>En(y,12)?y:En(y,2)?(I(y.to,Z).then(E=>{En(E,20)&&!Q.delta&&Q.type===Vi.pop&&s.go(-1,!1)}).catch(fi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),_e(y,Z,Ne))).then(y=>{y=y||R(Z,Ne,!1),y&&(Q.delta&&!En(y,8)?s.go(-Q.delta,!1):Q.type===Vi.pop&&En(y,20)&&s.go(-1,!1)),b(Z,Ne,y)}).catch(fi)}))}let Lt=Ys(),ze=Ys(),we;function _e(O,J,Q){qt(O);const Z=ze.list();return Z.length?Z.forEach(Te=>Te(O,J,Q)):console.error(O),Promise.reject(O)}function xt(){return we&&c.value!==zn?Promise.resolve():new Promise((O,J)=>{Lt.add([O,J])})}function qt(O){return we||(we=!O,At(),Lt.list().forEach(([J,Q])=>O?Q(O):J()),Lt.reset()),O}function Ft(O,J,Q,Z){const{scrollBehavior:Te}=t;if(!es||!Te)return Promise.resolve();const Ne=!Q&&kS(xf(O.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return Bc().then(()=>Te(O,J,Ne)).then(y=>y&&PS(y)).catch(y=>_e(y,O,J))}const Be=O=>s.go(O);let je;const Fn=new Set,Zt={currentRoute:c,listening:!0,addRoute:_,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:x,resolve:$,options:t,push:K,replace:pe,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ze.add,isReady:xt,install(O){const J=this;O.component("RouterLink",An),O.component("RouterView",nP),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(c)}),es&&!je&&c.value===zn&&(je=!0,K(s.location).catch(Te=>{}));const Q={};for(const Te in zn)Object.defineProperty(Q,Te,{get:()=>c.value[Te],enumerable:!0});O.provide(Ga,J),O.provide(M_,gp(Q)),O.provide(Ic,c);const Z=O.unmount;Fn.add(O),O.unmount=function(){Fn.delete(O),Fn.size<1&&(h=zn,w&&w(),w=null,c.value=zn,je=!1,we=!1),Z()}}};function Ct(O){return O.reduce((J,Q)=>J.then(()=>T(Q)),Promise.resolve())}return Zt}function sP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>As(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>As(h,c))||s.push(c))}return[n,r,s]}function Qa(){return ln(Ga)}const iP={class:"pr-6 py-5 h-screen flex flex-col items-center justify-between min-w-44 fixed left-0 border-r border-slate-500"},oP={class:"flex flex-col"},aP={class:"my-2"},lP={class:"my-2"},cP={class:"my-2"},uP={type:"submit",class:"px-2 flex justify-left items-center h-14 w-40 gap-3 bg-red-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-red-700 focus:bg-red-900"},hP={class:"absolute left-[11.6rem] right-[11.1rem] z-20"},dP={class:"px-3 py-5 h-screen flex flex-col items-center justify-end min-w-44 fixed right-0 border-l border-slate-500"},fP={class:"text-xs text-center"},pP={__name:"App",setup(t){const e=Qa(),n=tt({id:null,email:null});ds(()=>{Zi(s=>n.value=s)});const r=()=>{rS(),e.push("/")};return(s,i)=>{const o=mv("RouterView");return ye(),Ge(et,null,[B("nav",iP,[re(Ve(An),{to:"/"},{default:fe(()=>i[0]||(i[0]=[B("img",{src:ME,alt:'ícono de "Vacacionando".',width:"80rem"},null,-1)])),_:1}),B("ul",oP,[B("li",aP,[re(Ve(An),{to:"/",class:"px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900"},{default:fe(()=>[re(Ve($E)),i[1]||(i[1]=me()),i[2]||(i[2]=B("span",null,"Home",-1))]),_:1})]),n.value.id!==null?(ye(),yt(Ve(An),{key:0,to:"/profile",class:"px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900"},{default:fe(()=>[re(Ve(Kl)),i[3]||(i[3]=me()),i[4]||(i[4]=B("span",null,"Perfil",-1))]),_:1})):(ye(),Ge(et,{key:1},[B("li",lP,[re(Ve(An),{to:"/sign-in",class:"px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900"},{default:fe(()=>[re(Ve(Kl)),i[5]||(i[5]=me()),i[6]||(i[6]=B("span",null,"Iniciar Sesión",-1))]),_:1})]),B("li",cP,[re(Ve(An),{to:"/log-in",class:"px-2 flex justify-left items-center h-14 w-40 gap-3 bg-slate-800 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full transition-colors hover:bg-slate-700 focus:bg-slate-900"},{default:fe(()=>[re(Ve(qE)),i[7]||(i[7]=me()),i[8]||(i[8]=B("span",null,"Crear Cuenta",-1))]),_:1})])],64))]),n.value.id!==null?(ye(),Ge("form",{key:0,action:"#",onSubmit:Mi(r,["prevent"])},[B("button",uP,[re(Ve(HE)),i[9]||(i[9]=B("span",null,"Cerrar Sesión",-1))])],32)):cn("",!0)]),B("main",hP,[re(o)]),B("footer",dP,[B("div",null,[B("ul",fP,[re(wl,null,{default:fe(()=>i[10]||(i[10]=[me("Condiciones de Servicio")])),_:1}),re(wl,null,{default:fe(()=>i[11]||(i[11]=[me("Política de Privacidad")])),_:1}),re(wl,null,{default:fe(()=>i[12]||(i[12]=[me("Política de Cookies")])),_:1}),i[13]||(i[13]=B("li",null,[B("span",null,[B("p",{class:"mt-3"},"© 2024 - Vacacionando")])],-1))])])])],64)}}},mP={},gP={class:"text-2xl text-center uppercase font-semibold"};function _P(t,e){return ye(),Ge("h1",gP,[Ps(t.$slots,"default")])}const eo=Li(mP,[["render",_P]]),yP={},vP={class:"mt-1 text-red-400 font-semibold"};function EP(t,e){return ye(),Ge("small",vP,[Ps(t.$slots,"default")])}const sn=Li(yP,[["render",EP]]),Rs={__name:"SubmitButton",props:{color:{type:String,default:"slate"}},setup(t){return(e,n)=>(ye(),Ge("button",{type:"submit",class:Rr(["px-6 py-2 w-full rounded-lg transition-all text-black font-semibold disabled:opacity-35",{"bg-slate-300":t.color=="slate","hover:bg-slate-200":t.color=="slate","focus:bg-slate-400":t.color=="slate","bg-red-600":t.color=="red","hover:bg-red-500":t.color=="red","focus:bg-red-700":t.color=="red","text-white":t.color=="red"}])},[Ps(e.$slots,"default")],2))}},wP={type:"button",class:"p-5 h-14 flex justify-center items-center gap-2 bg-slate-200 rounded-full fixed bottom-5 right-[12.3rem] text-slate-800 transition-all"},Wf={__name:"PostingButton",setup(t){return(e,n)=>(ye(),Ge("button",wP,[re(Ve(WE)),n[0]||(n[0]=me()),n[1]||(n[1]=B("span",{class:"text-sm font-bold uppercase"},"Postear",-1))]))}},TP={type:"button",class:"size-12 flex justify-center items-center rounded-full hover:bg-slate-50 hover:bg-opacity-15"},Kf={__name:"CloseButton",setup(t){return(e,n)=>(ye(),Ge("button",TP,[re(Ve(GE),{class:"text-white"})]))}};async function IP({title:t,description:e,location:n}){const r=a_(Ji,"posted-by-users");await WR(r,{title:t,description:e,location:n,created_at:GR()})}function AP(t){const e=a_(Ji,"posted-by-users"),n=FR(e,UR("created_at","desc"));KR(n,r=>{const s=r.docs.map(i=>({id:i.id,title:i.data().title,description:i.data().description,location:i.data().location}));t(s)})}const bP={class:"absolute top-4 right-4"},RP={class:"flex flex-col justify-center gap-1 mb-3 w-2/3"},SP={class:"flex flex-col justify-center gap-1 mb-3 w-2/3"},PP={class:"flex flex-col justify-center gap-1 mb-3 w-2/3"},CP=["value"],kP={class:"flex flex-col w-2/3 mt-8"},xP={class:"flex flex-col p-10 bg-slate-700"},VP={class:"absolute top-4 right-4"},NP={class:"flex flex-col items-center text-center mt-8 gap-4"},OP={class:"flex flex-col mt-8"},DP={class:"p-4 rounded-2xl transition-all hover:bg-slate-800"},MP={class:"flex flex-row items-center gap-3"},LP={class:"flex flex-col justify-center items-center rounded-full bg-white size-10"},FP={class:"p-4 mt-3 ml-[3.250rem] flex flex-col border border-slate-500 rounded-2xl"},UP={class:"text-lg font-medium"},BP={class:"text-base font-normal"},jP={class:"mt-4 text-sm font-semibold"},$P={class:"p-4 mt-3 ml-[3.250rem] flex flex-col items-end gap-2"},qP={__name:"Home",setup(t){const e=tt([]),n=tt({title:"",description:"",location:""}),r=[{province:"Buenos Aires"},{province:"Buenos Aires Capital Federal"},{province:"Catamarca"},{province:"Chaco"},{province:"Chubut"},{province:"Córdoba"},{province:"Corrientes"},{province:"Entre Ríos"},{province:"Formosa"},{province:"Jujuy"},{province:"La Pampa"},{province:"La Rioja"},{province:"Mendoza"},{province:"Misiones"},{province:"Neuquen"},{province:"Río Negro"},{province:"Salta"},{province:"San Juan"},{province:"San Luís"},{province:"Santa Cruz"},{province:"Sante Fe"},{province:"Santiago del Estero"},{province:"Tierra del Fuego"},{province:"Tucumán"}];ds(async()=>{AP(g=>e.value=g)});const s=tt({id:null,email:null});ds(()=>{Zi(g=>s.value=g)});let i=tt(!1),o=tt(!1);function l(){IP({...n.value}),i.value=!1}function c(){i.value=!0}function h(){i.value=!1}function d(){o.value=!0}function p(){o.value=!1}return(g,_)=>(ye(),Ge(et,null,[B("div",{class:Rr(Ve(i)?"flex relative z-10 min-h-screen":"hidden")},[B("form",{action:"#",onSubmit:Mi(l,["prevent"]),class:"w-screen p-3 flex flex-col justify-center items-center bg-slate-700"},[B("div",bP,[re(Kf,{onClick:h})]),B("div",RP,[_[4]||(_[4]=B("label",{for:"title",class:"w-max"},"Título",-1)),an(B("input",{type:"text",id:"title","onUpdate:modelValue":_[0]||(_[0]=P=>n.value.title=P),class:"px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"},null,512),[[lr,n.value.title]]),n.value.title.length<5||n.value.title.length>50?(ye(),yt(sn,{key:0},{default:fe(()=>_[3]||(_[3]=[me(" El campo debe tener entre 5 y 50 carácteres. ")])),_:1})):cn("",!0)]),B("div",SP,[_[6]||(_[6]=B("label",{for:"description",class:"w-max"},"Descripción",-1)),an(B("textarea",{id:"description",rows:"10","onUpdate:modelValue":_[1]||(_[1]=P=>n.value.description=P),class:"px-3 py-2 w-full resize-none border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"},null,512),[[lr,n.value.description]]),n.value.description.length<10||n.value.description.length>550?(ye(),yt(sn,{key:0},{default:fe(()=>_[5]||(_[5]=[me(" El campo debe tener entre 10 y 550 carácteres. ")])),_:1})):cn("",!0)]),B("div",PP,[_[8]||(_[8]=B("label",{for:"location",class:"w-max"},"Provincia",-1)),an(B("select",{id:"location","onUpdate:modelValue":_[2]||(_[2]=P=>n.value.location=P),class:"px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"},[(ye(),Ge(et,null,Bl(r,P=>B("option",{value:P.province},Bt(P.province),9,CP)),64))],512),[[em,n.value.location]]),n.value.location?cn("",!0):(ye(),yt(sn,{key:0},{default:fe(()=>_[7]||(_[7]=[me(" Debe seleccionar una provincia. ")])),_:1}))]),B("div",kP,[re(Rs,{disabled:n.value.title.length<5||n.value.title.length>50||n.value.description.length<10||n.value.description.length>550||!n.value.location,color:"slate"},{default:fe(()=>_[9]||(_[9]=[me(" Postear ")])),_:1},8,["disabled"])])],32)],2),B("section",{class:Rr(Ve(i)?"hidden":"py-5")},[re(eo,null,{default:fe(()=>_[10]||(_[10]=[me("Bienvenido a la Home")])),_:1}),B("div",{class:Rr(Ve(o)?"h-full block fixed z-20 top-0 bottom-0 left-0 right-0 bg-slate-900 bg-opacity-90":"hidden")},[B("div",xP,[B("div",VP,[re(Kf,{onClick:p})]),_[13]||(_[13]=B("div",{class:"flex- flex-col text-center"},[B("p",{class:"text-2xl font-semibold"},"¡No tenés una cuenta!"),B("p",{class:"text-lg mt-4"},"Para poder postear tenés que iniciar sesión o crear una cuenta")],-1)),B("div",NP,[re(Ve(An),{to:"/sign-in",class:"p-2 w-2/3 bg-transparente border-2 border-slate-200 rounded-full text-white font-semibold"},{default:fe(()=>_[11]||(_[11]=[me("Iniciar Sesión")])),_:1}),re(Ve(An),{to:"/log-in",class:"p-2 w-2/3 bg-slate-200 border-2 border-slate-200 rounded-full text-black font-semibold"},{default:fe(()=>_[12]||(_[12]=[me("Crear Cuenta")])),_:1})])])],2),B("section",OP,[(ye(!0),Ge(et,null,Bl(e.value,P=>(ye(),Ge("article",DP,[B("div",MP,[B("span",LP,[re(Ve(KE),{class:"text-black"})]),_[14]||(_[14]=B("p",{class:"text-xl font-bold"},"Usuario",-1))]),B("div",FP,[B("p",UP,Bt(P.title),1),B("p",BP,Bt(P.description),1),B("p",jP,Bt(P.location),1)]),B("div",$P,[_[16]||(_[16]=B("textarea",{id:"comment",rows:"1",class:"py-2 w-full h-full transition-colors bg-transparent border-b-2 border-slate-400 outline-none resize-none text-slate-400 placeholder:text-slate-400 focus:border-white focus:text-white focus:placeholder:text-white",placeholder:"Comentar"},"                    ",-1)),re(Rs,{class:"w-max"},{default:fe(()=>_[15]||(_[15]=[me(" Enviar ")])),_:1})])]))),256))]),s.value.id!==null?(ye(),yt(Wf,{key:0,onClick:c})):(ye(),yt(Wf,{key:1,onClick:d}))],2)],64))}},HP={class:"p-5"},zP={class:"flex flex-col justify-center gap-1 mb-3 w-2/3"},WP={class:"flex flex-col justify-center gap-1 mb-3 w-2/3"},KP={class:"flex flex-row gap-4"},GP=["type"],QP={class:"flex flex-col w-2/3 mt-8"},YP={__name:"SignIn",setup(t){const e=Qa(),n=tt({email:"",password:""}),r=tt(!1),s=tt(!1),i=tt(!1);function o(){i.value=!i.value}async function l(){r.value=!0;try{await tS({...n.value}),e.push("/")}catch(c){console.error("[SignIn handleSubmit] Error al iniciar sesión: ",c),s.value=!0}r.value=!1}return(c,h)=>(ye(),Ge("section",HP,[re(eo,null,{default:fe(()=>h[2]||(h[2]=[me("Iniciar Sesión")])),_:1}),B("form",{action:"#",onSubmit:Mi(l,["prevent"]),class:"flex flex-col items-center"},[B("div",zP,[h[4]||(h[4]=B("label",{for:"email",class:"w-max"},"Email",-1)),an(B("input",{type:"email",id:"email","onUpdate:modelValue":h[0]||(h[0]=d=>n.value.email=d),class:"px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"},null,512),[[lr,n.value.email]]),n.value.email.includes("@")?cn("",!0):(ye(),yt(sn,{key:0},{default:fe(()=>h[3]||(h[3]=[me(" Esta no es una dirección de correo valida. ")])),_:1}))]),B("div",WP,[h[6]||(h[6]=B("label",{for:"password",class:"w-max"},"Contraseña",-1)),B("div",KP,[an(B("input",{type:i.value?"text":"password",id:"password","onUpdate:modelValue":h[1]||(h[1]=d=>n.value.password=d),class:"px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"},null,8,GP),[[nm,n.value.password]]),B("button",{type:"button",onClick:o,class:"w-24 bg-slate-800 font-semibold border-2 border-slate-600 rounded-lg transition-colors hover:bg-slate-600"},Bt(i.value?"Ocultar":"Mostrar"),1)]),n.value.password?cn("",!0):(ye(),yt(sn,{key:0},{default:fe(()=>h[5]||(h[5]=[me(" Complete este campo. ")])),_:1}))]),B("div",QP,[re(Rs,{disabled:!n.value.email||!n.value.password,color:"slate"},{default:fe(()=>h[7]||(h[7]=[me(" Iniciar Sesión ")])),_:1},8,["disabled"]),s.value?(ye(),yt(sn,{key:0},{default:fe(()=>h[8]||(h[8]=[me(" Error en las credenciales. Revise los datos enviados. ")])),_:1})):cn("",!0)])],32)]))}},JP={class:"p-5"},XP={class:"flex flex-col justify-center gap-1 mb-3 w-2/3"},ZP={class:"flex flex-col justify-center gap-1 mb-3 w-2/3"},eC={class:"flex flex-row gap-4"},tC=["type"],nC={class:"flex flex-col w-2/3 mt-8"},rC={__name:"LogIn",setup(t){const e=Qa(),n=tt({email:"",password:""}),r=tt(!1),s=tt(!1),i=tt(!1);function o(){i.value=!i.value}async function l(){r.value=!0;try{await eS({...n.value}),e.push("/profile")}catch(c){console.error("[LogIn handleSubmit] Error al crear cuenta: ",c),s.value=!0}r.value=!1}return(c,h)=>(ye(),Ge("section",JP,[re(eo,null,{default:fe(()=>h[2]||(h[2]=[me("Crear Cuenta")])),_:1}),B("form",{action:"#",onSubmit:Mi(l,["prevent"]),class:"flex flex-col items-center"},[B("div",XP,[h[4]||(h[4]=B("label",{for:"email",class:"w-max"},"Email",-1)),an(B("input",{type:"email",id:"email","onUpdate:modelValue":h[0]||(h[0]=d=>n.value.email=d),class:"px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"},null,512),[[lr,n.value.email]]),n.value.email.includes("@")?cn("",!0):(ye(),yt(sn,{key:0},{default:fe(()=>h[3]||(h[3]=[me(" Esta no es una dirección de correo valida. ")])),_:1}))]),B("div",ZP,[h[7]||(h[7]=B("label",{for:"password",class:"w-max"},"Contraseña",-1)),B("div",eC,[an(B("input",{type:i.value?"text":"password",id:"password","onUpdate:modelValue":h[1]||(h[1]=d=>n.value.password=d),class:"px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"},null,8,tC),[[nm,n.value.password]]),B("button",{type:"button",onClick:o,class:"w-24 bg-slate-800 font-semibold border-2 border-slate-600 rounded-lg transition-colors hover:bg-slate-600"},Bt(i.value?"Ocultar":"Mostrar"),1)]),n.value.password?n.value.password.length<6?(ye(),yt(sn,{key:1},{default:fe(()=>h[6]||(h[6]=[me(" La contraseña debe tener al menos 6 carácteres. ")])),_:1})):cn("",!0):(ye(),yt(sn,{key:0},{default:fe(()=>h[5]||(h[5]=[me(" Complete este campo. ")])),_:1}))]),B("div",nC,[re(Rs,{disabled:!n.value.email||!n.value.password||n.value.password.length<6,color:"slate"},{default:fe(()=>h[8]||(h[8]=[me(" Crear Cuenta ")])),_:1},8,["disabled"]),s.value?(ye(),yt(sn,{key:0},{default:fe(()=>h[9]||(h[9]=[me(" Error al crear la cuenta. ")])),_:1})):cn("",!0)])],32)]))}},sC={},iC={class:"font-bold text-lg"};function oC(t,e){return ye(),Ge("li",iC,[Ps(t.$slots,"default")])}const ko=Li(sC,[["render",oC]]),aC={},lC={class:"mb-4"};function cC(t,e){return ye(),Ge("li",lC,[Ps(t.$slots,"default")])}const xo=Li(aC,[["render",cC]]),uC={class:"p-5 flex flex-col items-center"},hC={class:"flex flex-row justify-center gap-2"},dC={class:"max-w-full flex flex-row mt-8 bg-slate-100 border-8 border-slate-100 rounded-xl"},fC={class:"p-10 flex flex-col items-center justify-center bg-slate-500 rounded-s-md"},pC={class:"flex flex-col bg-slate-100 text-black"},mC={class:"px-8"},gC={__name:"MyProfile",setup(t){const e=tt({id:null,email:null,displayName:null,bio:null,traveledTo:null});return ds(()=>{Zi(n=>e.value=n)}),(n,r)=>(ye(),Ge("section",uC,[B("div",hC,[re(eo,null,{default:fe(()=>r[0]||(r[0]=[me("Mi Perfil")])),_:1}),re(Ve(An),{to:"/profile/edit",class:"p-2 flex justify-center items-center rounded-full transition-colors hover:bg-slate-600"},{default:fe(()=>[re(Ve(zE),{class:"text-white size-5"})]),_:1})]),B("div",dC,[B("div",fC,[re(Ve(Kl),{class:"text-white size-24"})]),B("div",pC,[B("ul",mC,[re(ko,null,{default:fe(()=>r[1]||(r[1]=[me("Nombre:")])),_:1}),re(xo,null,{default:fe(()=>[me(Bt(e.value.displayName||"No definido todavía..."),1)]),_:1}),re(ko,null,{default:fe(()=>r[2]||(r[2]=[me("Correo Electrónico:")])),_:1}),re(xo,null,{default:fe(()=>[me(Bt(e.value.email||"No definido todavía..."),1)]),_:1}),re(ko,null,{default:fe(()=>r[3]||(r[3]=[me("Biografía:")])),_:1}),re(xo,null,{default:fe(()=>[me(Bt(e.value.bio||"No definido todavía..."),1)]),_:1}),re(ko,null,{default:fe(()=>r[4]||(r[4]=[me("Viajé a:")])),_:1}),re(xo,null,{default:fe(()=>[me(Bt(e.value.traveledTo?e.value.traveledTo.join(", "):"No definido todavía..."),1)]),_:1})])])])]))}},_C={class:"p-5"},yC={class:"flex flex-col justify-center gap-1 mb-5 w-2/3"},vC={class:"flex flex-col justify-center gap-1 mb-5 w-2/3"},EC={class:"flex flex-col justify-center gap-1 mb-5 w-2/3"},wC={class:"flex flex-row gap-2 my-1"},TC=["value","id"],IC=["for"],AC={class:"flex flex-col w-2/3 mt-8"},bC={class:"flex flex-col w-2/3 mt-4"},RC={__name:"MyProfileEdit",setup(t){const e=Qa(),n=[{province:"Buenos Aires",id:"buenos-aires"},{province:"Buenos Aires Capital Federal",id:"capital-federal"},{province:"Catamarca",id:"catamarca"},{province:"Chaco",id:"chaco"},{province:"Chubut",id:"chubut"},{province:"Córdoba",id:"cordoba"},{province:"Corrientes",id:"corrientes"},{province:"Entre Ríos",id:"entre-rios"},{province:"Formosa",id:"formosa"},{province:"Jujuy",id:"jujuy"},{province:"La Pampa",id:"la-pampa"},{province:"La Rioja",id:"la-rioja"},{province:"Mendoza",id:"mendoza"},{province:"Misiones",id:"misiones"},{province:"Neuquen",id:"neuquen"},{province:"Río Negro",id:"rio-negro"},{province:"Salta",id:"salta"},{province:"San Juan",id:"san-juan"},{province:"San Luís",id:"san-luis"},{province:"Santa Cruz",id:"santa-cruz"},{province:"Sante Fe",id:"santa-fe"},{province:"Santiago del Estero",id:"santiago-del-estero"},{province:"Tierra del Fuego",id:"tierra-del-fuego"},{province:"Tucumán",id:"tucuman"}],r=tt(!1),s=tt({displayName:"",bio:"",traveledTo:[]});ds(()=>{Zi(o=>s.value={displayName:o.displayName,bio:o.bio,traveledTo:o.traveledTo||[]})});const i=async()=>{r.value=!0;try{await nS({...s.value}),e.push("/profile")}catch(o){console.error("[MyProfileEdit handleSubmit] Error al actualizar el perfil: ",o)}r.value=!1};return(o,l)=>(ye(),Ge("section",_C,[re(eo,null,{default:fe(()=>l[4]||(l[4]=[me("Editar Mi Perfil")])),_:1}),B("form",{action:"#",onSubmit:Mi(i,["prevent"]),class:"flex flex-col items-center"},[B("div",yC,[l[5]||(l[5]=B("label",{for:"displayName",class:"w-max font-bold"},"Nombre",-1)),an(B("input",{type:"text",id:"displayName","onUpdate:modelValue":l[0]||(l[0]=c=>s.value.displayName=c),class:"px-3 py-2 w-full border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"},null,512),[[lr,s.value.displayName]])]),B("div",vC,[l[6]||(l[6]=B("label",{for:"bio",class:"w-max font-bold"},"Biografía",-1)),an(B("textarea",{id:"bio",rows:"10","onUpdate:modelValue":l[1]||(l[1]=c=>s.value.bio=c),class:"px-3 py-2 w-full resize-none border-2 rounded-lg border-slate-500 bg-slate-500 transition-colors outline-none focus:bg-slate-800 focus:text-white"},null,512),[[lr,s.value.bio]])]),B("div",EC,[l[7]||(l[7]=B("p",{class:"font-bold"},"Viajé a...",-1)),(ye(),Ge(et,null,Bl(n,c=>B("div",wC,[an(B("input",{type:"checkbox","onUpdate:modelValue":l[2]||(l[2]=h=>s.value.traveledTo=h),value:c.province,id:c.id},null,8,TC),[[Zp,s.value.traveledTo]]),B("label",{for:c.id},Bt(c.province),9,IC)])),64))]),B("div",AC,[re(Rs,{color:"red",onClick:l[3]||(l[3]=c=>Ve(e).push("/profile"))},{default:fe(()=>l[8]||(l[8]=[me(" Cancelar Cambios ")])),_:1})]),B("div",bC,[re(Rs,{disabled:!s.value.displayName||!s.value.bio||!s.value.traveledTo},{default:fe(()=>l[9]||(l[9]=[me(" Actualizar Perfil ")])),_:1},8,["disabled"])])],32)]))}},SC=[{path:"/",component:qP},{path:"/log-in",component:rC},{path:"/sign-in",component:YP},{path:"/profile",component:gC,meta:{requiresAuth:!0}},{path:"/profile/edit",component:RC,meta:{requiresAuth:!0}}],L_=rP({routes:SC,history:OS()});let F_={id:null,email:null,displayName:null,bio:null,traveledTo:null};Zi(t=>F_=t);L_.beforeEach((t,e)=>{if(t.meta.requiresAuth&&F_.id==null)return{path:"/"}});const U_=NE(pP);U_.use(L_);U_.mount("#app");
