import{z as J,$ as v,A as Q,B as X,c as ee,h as te,a as $,C as ne,x as M,i as K,f as C,S as re,I as oe,t as D,D as se,n as ie}from"./web.d5397485.js";var we=`.pane-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.splitter-wrapper {
  display: flex;
}
.splitter-wrapper .resize-bar {
  position: relative;
  z-index: 1000;
}
.splitter-wrapper .resize-bar-hover {
  background-color: #e6dfdf;
}
.splitter-wrapper .resize-bar-normal {
  background-color: whitesmoke;
}

.horizontal-splitter {
  flex-direction: column;
}
.horizontal-splitter .splitter-horizontal-resizing {
  cursor: row-resize;
}
.horizontal-splitter .horizontal-resize-bar::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.1490196078);
  transform: translate(-50%);
  width: 30px;
  height: 1px;
}
.horizontal-splitter .horizontal-bar-resizing {
  height: 10px;
  cursor: row-resize;
}

.vertical-splitter {
  flex-direction: row;
}
.vertical-splitter .splitter-vertical-resizing {
  cursor: col-resize;
}
.vertical-splitter .vertical-resize-bar::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.1490196078);
  transform: translate(-50%);
  width: 1px;
  height: 30px;
}
.vertical-splitter .vertical-bar-resizing {
  width: 10px;
  cursor: col-resize;
}

.splitter-horizontal-resizing {
  cursor: row-resize;
}

.splitter-vertical-resizing {
  cursor: col-resize;
}`;const Y=Symbol("store-raw"),L=Symbol("store-node"),ce=Symbol("store-name");function Z(e,t){let n=e[v];if(!n){Object.defineProperty(e,v,{value:n=new Proxy(e,fe)});const r=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let o=0,s=r.length;o<s;o++){const f=r[o];if(i[f].get){const l=i[f].get.bind(n);Object.defineProperty(e,f,{get:l})}}}return n}function T(e){return e!=null&&typeof e=="object"&&(e[v]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function O(e,t=new Set){let n,r,i,o;if(n=e!=null&&e[Y])return n;if(!T(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let s=0,f=e.length;s<f;s++)i=e[s],(r=O(i,t))!==i&&(e[s]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const s=Object.keys(e),f=Object.getOwnPropertyDescriptors(e);for(let l=0,d=s.length;l<d;l++)o=s[l],!f[o].get&&(i=e[o],(r=O(i,t))!==i&&(e[o]=r))}return e}function V(e){let t=e[L];return t||Object.defineProperty(e,L,{value:t={}}),t}function j(e,t,n){return e[t]||(e[t]=U(n,!0))}function le(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===v||t===L||t===ce||(delete n.value,delete n.writable,n.get=()=>e[v][t]),n}function q(e){if(X()){const t=V(e);(t._||(t._=U()))()}}function ae(e){return q(e),Reflect.ownKeys(e)}function U(e,t){const[n,r]=ee(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=r,n}const fe={get(e,t,n){if(t===Y)return e;if(t===v)return n;if(t===Q)return q(e);const r=V(e),i=r[t];let o=i?r[t]():e[t];if(t===L||t==="__proto__")return o;if(!i){const s=Object.getOwnPropertyDescriptor(e,t);X()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(s&&s.get)&&(o=j(r,t,o)())}return T(o)?Z(o):o},set(){return!0},deleteProperty(){return!0},ownKeys:ae,getOwnPropertyDescriptor:le};function P(e,t,n){if(e[t]===n)return;const r=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let o=V(e),s;(s=j(o,t,r))&&s.$(()=>n),Array.isArray(e)&&e.length!==i&&(s=j(o,"length",i))&&s.$(e.length),(s=o._)&&s.$()}function ue(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const i=n[r];P(e,i,t[i])}}function pe(e,t){if(typeof t=="function"&&(t=t(e)),t=O(t),e===t)return;let n=0,r=t.length;for(;n<r;n++){const i=t[n];e[n]!==i&&P(e,n,i)}P(e,"length",r)}function _(e,t,n=[]){let r,i=e;if(t.length>1){r=t.shift();const s=typeof r,f=Array.isArray(e);if(Array.isArray(r)){for(let l=0;l<r.length;l++)_(e,[r[l]].concat(t),n);return}else if(f&&s==="function"){for(let l=0;l<e.length;l++)r(e[l],l)&&_(e,[l].concat(t),n);return}else if(f&&s==="object"){const{from:l=0,to:d=e.length-1,by:w=1}=r;for(let h=l;h<=d;h+=w)_(e,[h].concat(t),n);return}else if(t.length>1){_(e[r],t,[r].concat(n));return}i=e[r],n=[r].concat(n)}let o=t[0];typeof o=="function"&&(o=o(i,n),o===i)||r===void 0&&o==null||(o=O(o),r===void 0||T(i)&&T(o)&&!Array.isArray(o)?ue(i,o):P(e,r,o))}function x(e,t){const n=O(e||{}),r=Array.isArray(n),i=Z(n);function o(...s){J(()=>{r&&s.length===1?pe(n,s[0]):_(n,s)})}return[i,o]}function B(e){return typeof e=="string"}function H(e,t,...n){const r=t&&B(t)?`[solid-gadget-component] ${t}:`:"[solid-gadget]";B(e)?console.warn(`${r} ${e}`,...n):console.warn(r,e,...n)}var m=(e=>(e.HORIZONTAL="horizontal",e.VERTICAL="vertical",e))(m||{});const W="ResizableSplitter";function G({event:e,paneSizes:t,lastPaneIdx:n,nextPaneIdx:r,containerRef:i,direction:o,paneInfo:s,setPaneSizes:f,isMovingToLast:l,pushOtherPane:d}){if(n<0||r>=t.length)return;const w=s.minSizes[n],h=s.maxSizes[n],S=s.minSizes[r],E=s.maxSizes[r],R=l===!1?n+1:r,b=t.slice(0,R).reduce((z,y)=>z+y,0),k=o===m.VERTICAL?e.pageX-i.offsetLeft:e.pageY-i.offsetTop,N=getComputedStyle(i),A=k/Number(o===m.VERTICAL?N.width.replace("px",""):N.height.replace("px",""))-b,c=A<0,p=t[n]+A,g=t[r]-A;if(!c&&p>h||c&&g>E)return;const a=c&&p<w,u=!c&&g<S;if(!a&&!u){f(n,p),f(r,g);return}!d||G({event:e,containerRef:i,lastPaneIdx:a?n-1:n,nextPaneIdx:u?r+1:r,direction:o,paneSizes:t,paneInfo:s,setPaneSizes:f,isMovingToLast:c,pushOtherPane:d})}function ge(e){const t=e.reduce((o,s)=>o+s,0),n=e.map(()=>1/e.length);if(t===0)return n;if(t>1)return H("The total size of all panes exceed 1.",W),n;const r=[];if(e.forEach((o,s)=>{o===0&&r.push(s)}),!r.length)return t<1?(H("The total size of all panes is less than 1.",W),n):e;const i=(1-t)/r.length;return r.forEach(o=>e[o]=i),e}const de=D("<main></main>"),he=D('<div class="item-wrapper"></div>'),ze=D("<div></div>"),$e=({horizontal:e,children:t=[],customClass:n="",resizeBarClass:r="",pushOtherPane:i=!1})=>{let o;const s=[],f=[],l=$(()=>{const c=typeof t=="function"?t():t;return Array.isArray(c)?c:[c]}),d=$(()=>{const c=l().reduce((p,g)=>{const a=typeof g=="function"?g():g;return p.doms.push(a),p.sizes.push(Number(a.getAttribute("size")??0)/100),p.minSizes.push(Number(a.getAttribute("minsize")??0)/100),p.maxSizes.push(Number(a.getAttribute("maxsize")??100)/100),p},{doms:[],sizes:[],minSizes:[],maxSizes:[]});return c.sizes=ge(c.sizes),c}),[w,h]=x([]),[S,E]=x([]);ne(()=>{E([...d().sizes]),h(l().map(()=>!1))});const R=$(()=>w.some(c=>c)),b=$(()=>e?m.HORIZONTAL:m.VERTICAL),k=$(()=>`${n} ${b()}-splitter ${R()?`splitter-${b()}-resizing`:""}`),N=$(()=>`${r} ${b()}-resize-bar ${b()}-bar-resizing`),F=c=>b()===m.VERTICAL?{width:`${(S[c]*100).toFixed(2)}%`}:{height:`${(S[c]*100).toFixed(2)}%`},A=(c,p)=>{p.preventDefault(),h(c,!0);const g=z=>{if(!o)return;const y=c,I=c+1;G({event:z,containerRef:o,lastPaneIdx:y,nextPaneIdx:I,direction:b(),paneSizes:S,paneInfo:d(),setPaneSizes:E,pushOtherPane:i})},a=()=>{h(c,!1),o?.removeEventListener("mousemove",g),o?.removeEventListener("mouseup",a)},u=()=>{a(),o?.removeEventListener("mouseup",u)};o?.addEventListener("mousemove",g),o?.addEventListener("mouseup",a),o?.addEventListener("mouseleave",u)};return(()=>{const c=de.cloneNode(!0),p=o;return typeof p=="function"?p(c):o=c,M(c,K(oe,{get each(){return l()},children:(g,a)=>[(()=>{const u=he.cloneNode(!0),z=s[a];return typeof z=="function"?z(u):s[a]=u,M(u,g),C(y=>se(u,F(a),y)),u})(),K(re,{get when(){return a<l().length-1},get children(){const u=ze.cloneNode(!0);u.$$mousedown=y=>{A(a,y)};const z=f[a];return typeof z=="function"?z(u):f[a]=u,C(()=>u.className=`resize-bar ${N()} ${w[a]?"resize-bar-hover":"resize-bar-normal"}`),u}})]})),C(()=>c.className=`splitter-wrapper ${k()}`),c})()};te(["mousedown"]);const be=D("<section></section>"),me=({customClass:e="",children:t,...n})=>(()=>{const r=be.cloneNode(!0);return r.className=`pane-wrapper ${e}`,ie(r,n,!1,!0),M(r,t),r})();export{me as P,$e as S,we as s};
