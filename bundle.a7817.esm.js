!function(e){function t(t){for(var n,r,o=t[0],u=t[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(_&&_(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1,3:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({2:"route-HomePage",3:"route-home",4:"route-profile"}[e]||e)+".chunk."+{2:"7d8ad",3:"df06b",4:"31d6c"}[e]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var _=(s=l[c]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(_===i||_===u))return t()}var a=document.getElementsByTagName("style");for(c=0;c<a.length;c++){var s;if((_=(s=a[c]).getAttribute("data-href"))===i||_===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css";f.onerror=f.onload=function(n){if(f.onerror=f.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,delete o[e],f.parentNode.removeChild(f),r(c)}},f.href=u,document.head.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(e){return n.p+""+({2:"route-HomePage",3:"route-home",4:"route-profile"}[e]||e)+".chunk."+{2:"1f024",3:"c9dc2",4:"e3b68"}[e]+".esm.js"}(e);var _=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(a);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;_.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",_.name="ChunkLoadError",_.type=r,_.request=o,n[1](_)}i[e]=void 0}};var a=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var _=l;n(n.s="Pq/i")}({"Pq/i":function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,l=e=>e&&e.default?e.default:e,c=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(c(n.p)+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=l(n("QfWi")),r={};const _=document.querySelector('[type="__PREACT_CLI_DATA__"]');_&&(r=JSON.parse(decodeURI(_.innerHTML)).preRenderData||r);const a={preRenderData:r},s=r.url?c(r.url):"";(u&&s===c(location.pathname)?u:i)(o(t,{CLI_DATA:a}),document.body,e)};0,t()}},QfWi:function(e,t,n){"use strict";function r(e,t){if(!e||"string"==typeof e.type)return null;const n=e.__;if(!n)return;let o=n.__k;if(o){Array.isArray(o)||(o=[o]);let t=o.indexOf(e);-1===t&&(t=o.length);for(let e=t;e--;){const t=o[e],n=t&&(t.__e||r(t,!0));if(n)return n}}return t?void 0:r(n)}function o(e){function t(){i.Component.call(this),n||(this.componentWillMount=()=>{e((e=>{n=e&&e.default||e,this.setState({})}))},this.shouldComponentUpdate=()=>null!=n),this.render=e=>{if(n)return Object(i.h)(n,e);const t=r(this.__v),o=t&&t.nextSibling||(this.__P||this._parentDom).firstChild;return o?3===o.nodeType?o.data:Object(i.h)(o.localName,{dangerouslySetInnerHTML:f}):void 0}}let n;return t.preload=e,(t.prototype=new i.Component).constructor=t,t}n.r(t);var i=n("hosL"),u=n("Y3FI"),l=n("ox/y"),c="header__OVZyn",_="logo__jPF5-",a="active__r+Z6z";var s=()=>Object(i.h)("header",{class:c},Object(i.h)("a",{href:"/",class:_},Object(i.h)("img",{src:"../../assets/preact-logo-inverse.svg",alt:"Preact Logo",height:"32",width:"32"}),Object(i.h)("h1",null,"Preact CLI")),Object(i.h)("nav",null,Object(i.h)(l.Link,{activeClassName:a,href:"/"},"Models"),Object(i.h)(l.Link,{activeClassName:a,href:"/home"},"Home"),Object(i.h)(l.Link,{activeClassName:a,href:"/profile"},"Me"),Object(i.h)(l.Link,{activeClassName:a,href:"/profile/john"},"John")));const f={};o((function(e){n.e(3).then(function(){var t=n("YD9F");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)})),o((function(e){n.e(4).then(function(){var t=n("VoOx");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)}));var p=o((function(e){n.e(2).then(function(){var t=n("KOsv");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)}));t.default=()=>Object(i.h)("div",{id:"app"},Object(i.h)(s,null),Object(i.h)("main",null,Object(i.h)(u.Router,null,Object(i.h)(p,{path:"/"}))))},Y3FI:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),_=0;_<c.length;_++){var a=c[_].split("=");u[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}e=l(e.replace(o,"")),t=l(t||"");for(var s=Math.max(e.length,t.length),f=0;f<s;f++)if(t[f]&&":"===t[f].charAt(0)){var p=t[f].replace(/(^:|[+*?]+$)/g,""),h=(t[f].match(/[+*?]+$/)||y)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),m=e[f]||"";if(!m&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[p]=decodeURIComponent(m),d||v){u[p]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function u(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,l(t).map(c).join(""));var t}(e),e.props}function l(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function c(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function _(){var e;return""+((e=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(e.search||"")}function a(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=g.length;t--;)if(g[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),m&&m[t]?m[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),s(e)}function s(e){for(var t=!1,n=0;n<g.length;n++)!0===g[n].routeTo(e)&&(t=!0);for(var r=b.length;r--;)b[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return a(t)}}function p(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return f(e.currentTarget||e.target||this),h(e)}function h(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function d(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(f(t))return h(e)}}while(t=t.parentNode)}}n.r(t),n.d(t,"subscribers",(function(){return b})),n.d(t,"getCurrentUrl",(function(){return _})),n.d(t,"route",(function(){return a})),n.d(t,"Router",(function(){return O})),n.d(t,"Route",(function(){return x})),n.d(t,"Link",(function(){return w})),n.d(t,"exec",(function(){return o}));var v=n("hosL"),y={},m=null,g=[],b=[],k={},C=!1,O=function(e){function t(t){e.call(this,t),t.history&&(m=t.history),this.state={url:t.url||_()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){s(_())})),addEventListener("click",d)),C=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){g.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;m&&(this.unlisten=m.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(u).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var u={url:t,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(e,u)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},t}(v.Component),w=function(e){return Object(v.createElement)("a",r({onClick:p},e))},x=function(e){return Object(v.createElement)(e.component,e)};O.subscribers=b,O.getCurrentUrl=_,O.route=a,O.Router=O,O.Route=x,O.Link=w,O.exec=o,t.default=O},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function i(e,t,n){var r,o,i,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?E.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return u(e,l,r,o,null)}function u(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++T:o,__i:-1,__u:0};return null==o&&null!=M.vnode&&M.vnode(i),i}function l(){return{current:null}}function c(e){return e.children}function _(e,t){this.props=e,this.context=t}function a(e,t){if(null==t)return e.__?a(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?a(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function f(e){(!e.__d&&(e.__d=!0)&&R.push(e)&&!p.__r++||N!==M.debounceRendering)&&((N=M.debounceRendering)||I)(p)}function p(){var e,t,n,o,i,u,l,c;for(R.sort(W);e=R.shift();)e.__d&&(t=R.length,o=void 0,u=(i=(n=e).__v).__e,l=[],c=[],n.__P&&((o=r({},i)).__v=i.__v+1,M.vnode&&M.vnode(o),C(n.__P,o,i,n.__n,n.__P.namespaceURI,32&i.__u?[u]:null,l,null==u?a(i):u,!!(32&i.__u),c),o.__v=i.__v,o.__.__k[o.__i]=o,O(l,o,c),o.__e!=u&&s(o)),R.length>t&&R.sort(W));p.__r=0}function h(e,t,n,r,o,i,u,l,c,_,a){var s,f,p,h,y,m,g=r&&r.__k||J,b=t.length;for(c=d(n,t,g,c),s=0;s<b;s++)null!=(p=n.__k[s])&&(f=-1===p.__i?q:g[p.__i]||q,p.__i=s,m=C(e,p,f,o,i,u,l,c,_,a),h=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&x(f.ref,null,p),a.push(p.ref,p.__c||h,p)),null==y&&null!=h&&(y=h),4&p.__u||f.__k===p.__k?c=v(p,c,e):"function"==typeof p.type&&void 0!==m?c=m:h&&(c=h.nextSibling),p.__u&=-7);return n.__e=y,c}function d(e,t,n,r){var o,i,l,_,s,f=t.length,p=n.length,h=p,d=0;for(e.__k=[],o=0;o<f;o++)null!=(i=t[o])&&"boolean"!=typeof i&&"function"!=typeof i?(_=o+d,(i=e.__k[o]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?u(null,i,null,null,null):Y(i)?u(c,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?u(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,l=null,-1!==(s=i.__i=m(i,n,_,h))&&(h--,(l=n[s])&&(l.__u|=2)),null==l||null===l.__v?(-1==s&&d--,"function"!=typeof i.type&&(i.__u|=4)):s!==_&&(s==_-1?d--:s==_+1?d++:(s>_?d--:d++,i.__u|=4))):i=e.__k[o]=null;if(h)for(o=0;o<p;o++)null!=(l=n[o])&&!(2&l.__u)&&(l.__e==r&&(r=a(l)),P(l,l));return r}function v(e,t,n){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=v(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=a(e)),n.insertBefore(e.__e,t||null),t=e.__e);do{t=t&&t.nextSibling}while(null!=t&&8===t.nodeType);return t}function y(e,t){return t=t||[],null==e||"boolean"==typeof e||(Y(e)?e.some((function(e){y(e,t)})):t.push(e)),t}function m(e,t,n,r){var o=e.key,i=e.type,u=n-1,l=n+1,_=t[n];if(null===_||_&&o==_.key&&i===_.type&&!(2&_.__u))return n;if(("function"!=typeof i||i===c||o)&&r>(null==_||2&_.__u?0:1))for(;u>=0||l<t.length;){if(u>=0){if((_=t[u])&&!(2&_.__u)&&o==_.key&&i===_.type)return u;u--}if(l<t.length){if((_=t[l])&&!(2&_.__u)&&o==_.key&&i===_.type)return l;l++}}return-1}function g(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||V.test(t)?n:n+"px"}function b(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||g(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||g(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(F,"$1")),t=t.toLowerCase()in e||"onFocusOut"===t||"onFocusIn"===t?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=H,e.addEventListener(t,i?K:$,i)):e.removeEventListener(t,i?K:$,i);else{if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==n?"":n))}}function k(e){return function(t){if(this.l){var n=this.l[t.type+e];if(null==t.t)t.t=H++;else if(t.t<n.u)return;return n(M.event?M.event(t):t)}}}function C(e,t,n,i,u,l,a,s,f,p){var d,v,y,m,g,b,k,C,O,x,P,L,S,U,A,E,T,D=t.type;if(void 0!==t.constructor)return null;128&n.__u&&(f=!!(32&n.__u),l=[s=t.__e=n.__e]),(d=M.__b)&&d(t);e:if("function"==typeof D)try{if(C=t.props,O="prototype"in D&&D.prototype.render,x=(d=D.contextType)&&i[d.__c],P=d?x?x.props.value:d.__:i,n.__c?k=(v=t.__c=n.__c).__=v.__E:(O?t.__c=v=new D(C,P):(t.__c=v=new _(C,P),v.constructor=D,v.render=j),x&&x.sub(v),v.props=C,v.state||(v.state={}),v.context=P,v.__n=i,y=v.__d=!0,v.__h=[],v._sb=[]),O&&null==v.__s&&(v.__s=v.state),O&&null!=D.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=r({},v.__s)),r(v.__s,D.getDerivedStateFromProps(C,v.__s))),m=v.props,g=v.state,v.__v=t,y)O&&null==D.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),O&&null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(O&&null==D.getDerivedStateFromProps&&C!==m&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(C,P),!v.__e&&(null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(C,v.__s,P)||t.__v===n.__v)){for(t.__v!==n.__v&&(v.props=C,v.state=v.__s,v.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some((function(e){e&&(e.__=t)})),L=0;L<v._sb.length;L++)v.__h.push(v._sb[L]);v._sb=[],v.__h.length&&a.push(v);break e}null!=v.componentWillUpdate&&v.componentWillUpdate(C,v.__s,P),O&&null!=v.componentDidUpdate&&v.__h.push((function(){v.componentDidUpdate(m,g,b)}))}if(v.context=P,v.props=C,v.__P=e,v.__e=!1,S=M.__r,U=0,O){for(v.state=v.__s,v.__d=!1,S&&S(t),d=v.render(v.props,v.state,v.context),A=0;A<v._sb.length;A++)v.__h.push(v._sb[A]);v._sb=[]}else do{v.__d=!1,S&&S(t),d=v.render(v.props,v.state,v.context),v.state=v.__s}while(v.__d&&++U<25);v.state=v.__s,null!=v.getChildContext&&(i=r(r({},i),v.getChildContext())),O&&!y&&null!=v.getSnapshotBeforeUpdate&&(b=v.getSnapshotBeforeUpdate(m,g)),s=h(e,Y(E=null!=d&&d.type===c&&null==d.key?d.props.children:d)?E:[E],t,n,i,u,l,a,s,f,p),v.base=t.__e,t.__u&=-161,v.__h.length&&a.push(v),k&&(v.__E=v.__=null)}catch(e){if(t.__v=null,f||null!=l)if(e.then){for(t.__u|=f?160:128;s&&8===s.nodeType&&s.nextSibling;)s=s.nextSibling;l[l.indexOf(s)]=null,t.__e=s}else for(T=l.length;T--;)o(l[T]);else t.__e=n.__e,t.__k=n.__k;M.__e(e,t,n)}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=w(n.__e,t,n,i,u,l,a,f,p);return(d=M.diffed)&&d(t),128&t.__u?void 0:s}function O(e,t,n){for(var r=0;r<n.length;r++)x(n[r],n[++r],n[++r]);M.__c&&M.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){M.__e(e,t.__v)}}))}function w(e,t,n,r,i,u,l,c,_){var s,f,p,d,v,y,m,g=n.props,k=t.props,C=t.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(s=0;s<u.length;s++)if((v=u[s])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){e=v,u[s]=null;break}if(null==e){if(null===C)return document.createTextNode(k);e=document.createElementNS(i,C,k.is&&k),c&&(M.__m&&M.__m(t,u),c=!1),u=null}if(null===C)g===k||c&&e.data===k||(e.data=k);else{if(u=u&&E.call(e.childNodes),g=n.props||q,!c&&null!=u)for(g={},s=0;s<e.attributes.length;s++)g[(v=e.attributes[s]).name]=v.value;for(s in g)if(v=g[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=v;else if(!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;b(e,s,null,v,i)}for(s in k)v=k[s],"children"==s?d=v:"dangerouslySetInnerHTML"==s?f=v:"value"==s?y=v:"checked"==s?m=v:c&&"function"!=typeof v||g[s]===v||b(e,s,v,g[s],i);if(f)c||p&&(f.__html===p.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(p&&(e.innerHTML=""),h(e,Y(d)?d:[d],t,n,r,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,u,l,u?u[0]:n.__k&&a(n,0),c,_),null!=u)for(s=u.length;s--;)o(u[s]);c||(s="value","progress"===C&&null==y?e.removeAttribute("value"):void 0!==y&&(y!==e[s]||"progress"===C&&!y||"option"===C&&y!==g[s])&&b(e,s,y,g[s],i),s="checked",void 0!==m&&m!==e[s]&&b(e,s,m,g[s],i))}return e}function x(e,t,n){try{if("function"==typeof e){var r="function"==typeof e.__u;r&&e.__u(),r&&null==t||(e.__u=e(t))}else e.current=t}catch(e){M.__e(e,n)}}function P(e,t,n){var r,i;if(M.unmount&&M.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||x(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){M.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&P(r[i],t,n||"function"!=typeof e.type);n||o(e.__e),e.__c=e.__=e.__e=void 0}function j(e,t,n){return this.constructor(e,n)}function L(e,t,n){var r,o,u,l;t===document&&(t=document.documentElement),M.__&&M.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,u=[],l=[],C(t,e=(!r&&n||t).__k=i(c,null,[e]),o||q,q,t.namespaceURI,!r&&n?[n]:o?null:t.firstChild?E.call(t.childNodes):null,u,!r&&n?n:o?o.__e:t.firstChild,r,l),O(u,e,l)}function S(e,t){L(e,t,S)}function U(e,t,n){var o,i,l,c,_=r({},e.props);for(l in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)"key"==l?o=t[l]:"ref"==l?i=t[l]:_[l]=void 0===t[l]&&void 0!==c?c[l]:t[l];return arguments.length>2&&(_.children=arguments.length>3?E.call(arguments,2):n),u(e.type,_,o||e.key,i||e.ref,null)}function A(e,t){var n={__c:t="__cC"+B++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.forEach((function(e){e.__e=!0,f(e)}))},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"Component",(function(){return _})),n.d(t,"Fragment",(function(){return c})),n.d(t,"cloneElement",(function(){return U})),n.d(t,"createContext",(function(){return A})),n.d(t,"createElement",(function(){return i})),n.d(t,"createRef",(function(){return l})),n.d(t,"h",(function(){return i})),n.d(t,"hydrate",(function(){return S})),n.d(t,"isValidElement",(function(){return D})),n.d(t,"options",(function(){return M})),n.d(t,"render",(function(){return L})),n.d(t,"toChildArray",(function(){return y}));var E,M,T,D,R,N,I,W,F,H,$,K,B,q={},J=[],V=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;E=J.slice,M={__e:function(e,t,n,r){for(var o,i,u;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(t){e=t}throw e}},T=0,D=function(e){return null!=e&&null==e.constructor},_.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),f(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},_.prototype.render=c,R=[],I="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=function(e,t){return e.__v.__b-t.__v.__b},p.__r=0,F=/(PointerCapture)$|Capture$/i,H=0,$=k(!1),K=k(!0),B=0},"ox/y":function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("hosL"),u=n("Y3FI"),l=t.Match=function(e){function t(){for(var t,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return t=n=r(this,e.call.apply(e,[this].concat(i))),n.update=function(e){n.nextUrl=e,n.setState({})},r(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){u.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,u.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children({url:t,path:n,matches:!1!==(0,u.exec)(n,e.path,{})})},t}(i.Component),c=function(e){var t=e.activeClassName,n=e.path,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(e){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,e.matches&&t].filter(Boolean).join(" ")}))}))};t.Link=c,t.default=l,l.Link=c}});
//# sourceMappingURL=bundle.a7817.esm.js.map