(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6441)}])},6441:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),o=n(7294),a=n(4596);var c=e=>{const t=t=>{const n=e=>e instanceof HTMLAnchorElement&&e.href?e:e instanceof HTMLElement&&e.parentElement?n(e.parentElement):null,r=n(t.target);if(!(r instanceof HTMLAnchorElement))return;const{href:o}=r;o.match(new RegExp(`^(http://www.|https://www.|http://|https://)+(${window.location.hostname})`))||e.trackLink({href:o})};(0,o.useEffect)((()=>(window.document.addEventListener("click",t,{capture:!0}),()=>window.document.removeEventListener("click",t,{capture:!0}))),[])};var i=function(){const e=(0,o.useContext)(a.Z),t=(0,o.useCallback)((t=>null===e||void 0===e?void 0:e.trackPageView(t)),[e]);return{trackEvent:(0,o.useCallback)((t=>null===e||void 0===e?void 0:e.trackEvent(t)),[e]),trackEvents:(0,o.useCallback)((()=>null===e||void 0===e?void 0:e.trackEvents()),[e]),trackPageView:t,trackSiteSearch:(0,o.useCallback)((t=>null===e||void 0===e?void 0:e.trackSiteSearch(t)),[e]),trackLink:(0,o.useCallback)((t=>null===e||void 0===e?void 0:e.trackLink(t)),[e]),enableLinkTracking:(0,o.useCallback)((()=>{e&&c(e)}),[e]),pushInstruction:(0,o.useCallback)(((t,...n)=>{null===e||void 0===e||e.pushInstruction(t,...n)}),[e])}},l=n(9008),s=n.n(l),u=n(6309),f=function(){var e=(0,o.useState)(""),t=e[0],n=e[1],a=(0,u.F)().theme;return(0,o.useEffect)((function(){n(window.location.hostname)}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{style:{color:a.yellow},children:"guest"}),(0,r.jsx)("span",{style:{color:a.white},children:"@"}),(0,r.jsx)("span",{style:{color:a.green},children:t}),(0,r.jsx)("span",{style:{color:a.white},children:":$ ~"})]})},d=function(e){var t=e.history;return(0,r.jsx)(r.Fragment,{children:t.map((function(e,t){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,r.jsx)("div",{className:"flex-shrink",children:(0,r.jsx)(f,{})}),(0,r.jsx)("div",{className:"flex-grow",children:e.command})]}),(0,r.jsx)("p",{className:"whitespace-pre-wrap mb-2",style:{lineHeight:"normal"},dangerouslySetInnerHTML:{__html:e.output}})]},e.command+t)}))})},h=n(4051),p=n.n(h),m=n(10);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=n(939),y=function(e,t){var n=Object.keys(m).filter((function(t){return t.startsWith(e)}));1===n.length&&t(n[0])};function x(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(s){return void n(s)}i.done?t(l):Promise.resolve(l).then(r,o)}var b=function(e){var t=e.inputRef,n=e.containerRef,a=i().trackEvent,c=(0,u.F)().theme,l=(0,o.useState)(""),s=l[0],d=l[1],h=(0,w.S)(),v=h.setCommand,b=h.history,g=h.lastCommandIndex,j=h.setHistory,E=h.setLastCommandIndex,C=h.clearHistory;(0,o.useEffect)((function(){n.current.scrollTo(0,n.current.scrollHeight)}),[b]);var S,N=function(){var e,t=(e=p().mark((function e(t){var n,r,o;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=b.map((function(e){return e.command})).filter((function(e){return e})),"c"===t.key&&t.ctrlKey&&(t.preventDefault(),d(""),j(""),E(0)),"l"===t.key&&t.ctrlKey&&(t.preventDefault(),C()),"Tab"===t.key&&(t.preventDefault(),y(s,d)),"Enter"!==t.key&&"13"!==t.code||(t.preventDefault(),E(0),v(s),d(""),a({category:"Command Executed",action:s||"no command"})),"ArrowUp"!==t.key){e.next=11;break}if(t.preventDefault(),n.length){e.next=9;break}return e.abrupt("return");case 9:(r=g+1)<=n.length&&(E(r),d(n[n.length-r]));case 11:if("ArrowDown"!==t.key){e.next=17;break}if(t.preventDefault(),n.length){e.next=15;break}return e.abrupt("return");case 15:(o=g-1)>0?(E(o),d(n[n.length-o])):(E(0),d(""));case 17:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){x(a,r,o,c,i,"next",e)}function i(e){x(a,r,o,c,i,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,r.jsx)("label",{htmlFor:"prompt",className:"flex-shrink",children:(0,r.jsx)(f,{})}),(0,r.jsx)("input",{ref:t,id:"prompt",type:"text",className:"focus:outline-none flex-grow","aria-label":"prompt",style:{backgroundColor:c.background,color:(S=s,-1!==["clear"].concat(k(Object.keys(m))).indexOf(S.split(" ")[0])||""===s?c.green:c.red)},value:s,onChange:function(e){return d(e.target.value)},autoFocus:!0,onKeyDown:N,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off"})]})},g=n(1181),j=function(e){var t=e.inputRef,n=i().trackPageView,a=(0,w.S)().history,c=(0,u.F)().theme,l=o.useRef(null);return o.useEffect((function(){n({})}),[]),o.useEffect((function(){t.current&&t.current.focus()}),[a]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"Selim Ge\xe7in Persoal Portfolio"})}),(0,r.jsx)("div",{className:"overflow-hidden h-full rounded",style:{borderColor:c.yellow,padding:g.Cg?16:8,borderWidth:g.Cg?2:0},children:(0,r.jsxs)("div",{ref:l,className:"overflow-y-auto h-full",children:[(0,r.jsx)(d,{history:a}),(0,r.jsx)(b,{inputRef:t,containerRef:l})]})})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);