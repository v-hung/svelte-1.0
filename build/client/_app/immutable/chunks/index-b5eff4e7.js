function g(){}const lt=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function x(t){t.forEach(Q)}function O(t){return typeof t=="function"}function Tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function zt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function at(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Lt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)u[c]=e.dirty[c]|r[c];return u}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,u){if(r){const s=U(e,n,i,u);t.p(s,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Wt(t){return t&&O(t.destroy)?t.destroy:g}const V=typeof window<"u";let dt=V?()=>window.performance.now():()=>Date.now(),I=V?t=>requestAnimationFrame(t):g;const b=new Set;function X(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&I(X)}function _t(t){let e;return b.size===0&&I(X),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let q=!1;function ht(){q=!0}function mt(){q=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,d=(r>0&&e[n[r]].claim_order<=l?r+1:pt(1,r,h=>e[n[h]].claim_order,l))-1;i[o]=n[d]+1;const a=d+1;n[a]=o,r=Math.max(a,r)}const u=[],s=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);c>=o;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);u.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<u.length&&s[o].claim_order>=u[l].claim_order;)l++;const d=l<u.length?u[l]:null;t.insertBefore(s[o],d)}}function gt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=tt("style");return bt(Y(t),e),e.sheet}function bt(t,e){return gt(t.head||t,e),e.sheet}function xt(t,e){if(q){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){q&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function Kt(){return W(" ")}function Qt(){return W("")}function Ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Vt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Yt(t,e,n){const i=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&i.add(t[r].__value);return n||i.delete(e),Array.from(i)}function wt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){Et(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function nt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||u.push(c.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Zt(t,e,n){return nt(t,e,n,tt)}function te(t,e,n){return nt(t,e,n,vt)}function Nt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function ee(t){return Nt(t," ")}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ie(t,e){t.value=e??""}function re(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function se(t,e){return new t(e)}const D=new Map;let M=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:$t(e),rules:{}};return D.set(t,n),n}function J(t,e,n,i,r,u,s,c=0){const o=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=o){const $=e+(n-e)*u(y);l+=y*100+`%{${s($,1-$)}}
`}const d=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${At(d)}_${c}`,h=Y(t),{stylesheet:f,rules:_}=D.get(h)||St(h,t);_[a]||(_[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function kt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Ct())}function Ct(){I(()=>{M||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),D.clear())})}let N;function E(t){N=t}function R(){if(!N)throw new Error("Function called outside component initialization");return N}function ce(t){R().$$.on_mount.push(t)}function oe(t){R().$$.after_update.push(t)}function le(t){R().$$.on_destroy.push(t)}function ue(){const t=R();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=it(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}const w=[],K=[],C=[],F=[],rt=Promise.resolve();let H=!1;function st(){H||(H=!0,rt.then(ct))}function ae(){return st(),rt}function P(t){C.push(t)}function fe(t){F.push(t)}const B=new Set;let k=0;function ct(){const t=N;do{for(;k<w.length;){const e=w[k];k++,E(e),jt(e.$$)}for(E(null),w.length=0,k=0;K.length;)K.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];B.has(n)||(B.add(n),n())}C.length=0}while(w.length);for(;F.length;)F.pop()();H=!1,B.clear(),E(t)}function jt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let v;function Dt(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function L(t,e,n){t.dispatchEvent(it(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function de(){p={r:0,c:[],p}}function _e(){p.r||x(p.c),p=p.p}function Mt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function he(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Pt={duration:0};function me(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),s=i?0:1,c=null,o=null,l=null;function d(){l&&kt(t,l)}function a(f,_){const m=f.b-s;return _*=Math.abs(m),{a:s,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:y=lt,tick:$=g,css:T}=u||Pt,z={start:dt()+_,b:f};f||(z.group=p,p.r+=1),c||o?o=z:(T&&(d(),l=J(t,s,f,m,_,y,T)),f&&$(0,1),c=a(z,m),P(()=>L(t,f,"start")),_t(A=>{if(o&&A>o.start&&(c=a(o,m),o=null,L(t,c.b,"start"),T&&(d(),l=J(t,s,c.b,c.duration,0,y,u.css))),c){if(A>=c.end)$(s=c.b,1-s),L(t,c.b,"end"),o||(c.b?d():--c.group.r||x(c.group.c)),c=null;else if(A>=c.start){const ot=A-c.start;s=c.a+c.d*y(ot/c.duration),$(s,1-s)}}return!!(c||o)}))}return{run(f){O(u)?Dt().then(()=>{u=u(r),h(f)}):h(f)},end(){d(),c=o=null}}}function pe(t,e,n,i){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,i===void 0&&n(t.$$.ctx[r]))}function ye(t){t&&t.c()}function ge(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||P(()=>{const s=t.$$.on_mount.map(Q).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):x(s),t.$$.on_mount=[]}),u.forEach(P)}function qt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(w.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,i,r,u,s,c=[-1]){const o=N;E(t);const l=t.$$={fragment:null,ctx:[],props:u,update:g,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:G(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(a,h,...f)=>{const _=f.length?f[0]:h;return l.ctx&&r(l.ctx[a],l.ctx[a]=_)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](_),d&&Rt(t,a)),h}):[],l.update(),d=!0,x(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){ht();const a=wt(e.target);l.fragment&&l.fragment.l(a),a.forEach(Z)}else l.fragment&&l.fragment.c();e.intro&&Mt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),mt(),ct()}E(o)}class be{$destroy(){qt(this,1),this.$destroy=g}$on(e,n){if(!O(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ae as A,g as B,Lt as C,xt as D,Ht as E,It as F,Ft as G,Bt as H,K as I,vt as J,te as K,zt as L,Ut as M,Vt as N,Wt as O,x as P,P as Q,me as R,be as S,O as T,Yt as U,Jt as V,ie as W,ue as X,le as Y,pe as Z,fe as _,Kt as a,Gt as b,ee as c,_e as d,Qt as e,Mt as f,de as g,Z as h,$e as i,oe as j,tt as k,Zt as l,wt as m,Xt as n,ce as o,re as p,W as q,Nt as r,Tt as s,he as t,ne as u,se as v,ye as w,ge as x,Ot as y,qt as z};