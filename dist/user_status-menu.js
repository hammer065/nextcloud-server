(()=>{"use strict";var e,s,a,r={20051:(e,s,a)=>{var r=a(21777),n=a(61338),u=a(85471),o=a(54914),i=a(18740),c=a(1522),d=a(53611),l=a(17334),m=a.n(l),p=a(65043),g=a(63814),f=a(33114),h=a(96763);const v={name:"UserStatus",components:{Fragment:o.F,NcButton:i.A,NcListItem:c.A,NcUserStatusIcon:d.A,SetStatusModal:()=>Promise.all([a.e(4208),a.e(5133)]).then(a.bind(a,11249))},mixins:[f.A],props:{inline:{type:Boolean,default:!1}},data:()=>({heartbeatInterval:null,isAway:!1,isModalOpen:!1,mouseMoveListener:null,setAwayTimeout:null}),mounted(){this.$store.dispatch("loadStatusFromInitialState"),OC.config.session_keepalive&&(this.heartbeatInterval=setInterval(this._backgroundHeartbeat.bind(this),3e5),this.setAwayTimeout=()=>{this.isAway=!0},this.mouseMoveListener=m()((()=>{const e=this.isAway;this.isAway=!1,clearTimeout(this.setAwayTimeout),setTimeout(this.setAwayTimeout,12e4),e&&this._backgroundHeartbeat()}),2e3,!0),window.addEventListener("mousemove",this.mouseMoveListener,{capture:!0,passive:!0}),this._backgroundHeartbeat()),(0,n.B1)("user_status:status.updated",this.handleUserStatusUpdated)},beforeDestroy(){window.removeEventListener("mouseMove",this.mouseMoveListener),clearInterval(this.heartbeatInterval),(0,n.al)("user_status:status.updated",this.handleUserStatusUpdated)},methods:{openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},async _backgroundHeartbeat(){try{const e=await(async e=>{const t=(0,g.KT)("apps/user_status/api/v1/heartbeat?format=json");return(await p.Ay.put(t,{status:e?"away":"online"})).data.ocs.data})(this.isAway);e?.userId?this.$store.dispatch("setStatusFromHeartbeat",e):await this.$store.dispatch("reFetchStatusFromServer")}catch(e){h.debug("Failed sending heartbeat, got: "+e.response?.status)}},handleUserStatusUpdated(e){OC.getCurrentUser().uid===e.userId&&this.$store.dispatch("setStatusFromObject",{status:e.status,icon:e.icon,message:e.message})}}};var A=a(85072),y=a.n(A),S=a(97825),b=a.n(S),I=a(77659),w=a.n(I),_=a(55056),M=a.n(_),T=a(10540),C=a.n(T),k=a(41113),O=a.n(k),F=a(73111),P={};P.styleTagTransform=O(),P.setAttributes=M(),P.insert=w().bind(null,"head"),P.domAPI=b(),P.insertStyleElement=C(),y()(F.A,P),F.A&&F.A.locals&&F.A.locals;const U=(0,a(14486).A)(v,(function(){var e=this,t=e._self._c;return t("Fragment",[e.inline?t("div",[t("NcButton",{on:{click:function(t){return t.stopPropagation(),e.openModal.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("NcUserStatusIcon",{staticClass:"user-status-icon",attrs:{status:e.statusType,"aria-hidden":"true"}})]},proxy:!0}])},[e._v("\n\t\t\t"+e._s(e.visibleMessage)+"\n\t\t")])],1):t("NcListItem",{staticClass:"user-status-menu-item",attrs:{compact:"",name:e.visibleMessage},on:{click:function(t){return t.stopPropagation(),e.openModal.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("NcUserStatusIcon",{staticClass:"user-status-icon",attrs:{status:e.statusType,"aria-hidden":"true"}})]},proxy:!0}],null,!1,2300440294)}),e._v(" "),e.isModalOpen?t("SetStatusModal",{attrs:{inline:e.inline},on:{close:e.closeModal}}):e._e()],1)}),[],!1,null,"4864e961",null).exports;var x=a(95353);const j={state:{predefinedStatuses:[]},mutations:{addPredefinedStatus(e,t){e.predefinedStatuses=[...e.predefinedStatuses,t]}},getters:{statusesHaveLoaded:e=>e.predefinedStatuses.length>0},actions:{async loadAllPredefinedStatuses(e){let{state:t,commit:s}=e;if(t.predefinedStatuses.length>0)return;const a=await(async()=>{const e=(0,g.KT)("apps/user_status/api/v1/predefined_statuses?format=json");return(await p.Ay.get(e)).data.ocs.data})();for(const e of a)s("addPredefinedStatus",e)}}};var $=a(32981),D=a(61913),B=a(19231);const E=e=>{if(null===e)return null;const t=(0,D.R)();if("period"===e.type)return t.setSeconds(t.getSeconds()+e.time),Math.floor(t.getTime()/1e3);if("end-of"===e.type)switch(e.time){case"day":case"week":return Number((0,B.A)(t).endOf(e.time).format("X"))}return"_time"===e.type?e.time:null},H={state:{status:null,statusIsUserDefined:null,message:null,icon:null,clearAt:null,messageIsPredefined:null,messageId:null},mutations:{setStatus(e,t){let{statusType:s}=t;e.status=s,e.statusIsUserDefined=!0},setPredefinedMessage(e,t){let{messageId:s,clearAt:a,message:r,icon:n}=t;e.messageId=s,e.messageIsPredefined=!0,e.message=r,e.icon=n,e.clearAt=a},setCustomMessage(e,t){let{message:s,icon:a,clearAt:r}=t;e.messageId=null,e.messageIsPredefined=!1,e.message=s,e.icon=a,e.clearAt=r},clearMessage(e){e.messageId=null,e.messageIsPredefined=!1,e.message=null,e.icon=null,e.clearAt=null},loadStatusFromServer(e,t){let{status:s,statusIsUserDefined:a,message:r,icon:n,clearAt:u,messageIsPredefined:o,messageId:i}=t;e.status=s,e.message=r,e.icon=n,void 0!==a&&(e.statusIsUserDefined=a),void 0!==u&&(e.clearAt=u),void 0!==o&&(e.messageIsPredefined=o),void 0!==i&&(e.messageId=i)}},getters:{},actions:{async setStatus(e,t){let{commit:s,state:a}=e,{statusType:u}=t;await(async e=>{const t=(0,g.KT)("apps/user_status/api/v1/user_status/status");await p.Ay.put(t,{statusType:e})})(u),s("setStatus",{statusType:u}),(0,n.Ic)("user_status:status.updated",{status:a.status,message:a.message,icon:a.icon,clearAt:a.clearAt,userId:(0,r.HW)()?.uid})},async setStatusFromObject(e,t){let{commit:s,state:a}=e;s("loadStatusFromServer",t)},async setPredefinedMessage(e,t){let{commit:s,rootState:a,state:u}=e,{messageId:o,clearAt:i}=t;const c=E(i);await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const s=(0,g.KT)("apps/user_status/api/v1/user_status/message/predefined?format=json");await p.Ay.put(s,{messageId:e,clearAt:t})}(o,c);const d=a.predefinedStatuses.predefinedStatuses.find((e=>e.id===o)),{message:l,icon:m}=d;s("setPredefinedMessage",{messageId:o,clearAt:c,message:l,icon:m}),(0,n.Ic)("user_status:status.updated",{status:u.status,message:u.message,icon:u.icon,clearAt:u.clearAt,userId:(0,r.HW)()?.uid})},async setCustomMessage(e,t){let{commit:s,state:a}=e,{message:u,icon:o,clearAt:i}=t;const c=E(i);await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const a=(0,g.KT)("apps/user_status/api/v1/user_status/message/custom?format=json");await p.Ay.put(a,{message:e,statusIcon:t,clearAt:s})}(u,o,c),s("setCustomMessage",{message:u,icon:o,clearAt:c}),(0,n.Ic)("user_status:status.updated",{status:a.status,message:a.message,icon:a.icon,clearAt:a.clearAt,userId:(0,r.HW)()?.uid})},async clearMessage(e){let{commit:t,state:s}=e;await(async()=>{const e=(0,g.KT)("apps/user_status/api/v1/user_status/message?format=json");await p.Ay.delete(e)})(),t("clearMessage"),(0,n.Ic)("user_status:status.updated",{status:s.status,message:s.message,icon:s.icon,clearAt:s.clearAt,userId:(0,r.HW)()?.uid})},async reFetchStatusFromServer(e){let{commit:t}=e;t("loadStatusFromServer",await(async()=>{const e=(0,g.KT)("apps/user_status/api/v1/user_status");return(await p.Ay.get(e)).data.ocs.data})())},async setStatusFromHeartbeat(e,t){let{commit:s}=e;s("loadStatusFromServer",t)},loadStatusFromInitialState(e){let{commit:t}=e;t("loadStatusFromServer",(0,$.C)("user_status","status"))}}},L={state:{status:null,statusIsUserDefined:null,message:null,icon:null,clearAt:null,messageIsPredefined:null,messageId:null},mutations:{loadBackupStatusFromServer(e,t){let{status:s,statusIsUserDefined:a,message:r,icon:n,clearAt:u,messageIsPredefined:o,messageId:i}=t;e.status=s,e.message=r,e.icon=n,void 0!==a&&(e.statusIsUserDefined=a),void 0!==u&&(e.clearAt=u),void 0!==o&&(e.messageIsPredefined=o),void 0!==i&&(e.messageId=i)}},getters:{},actions:{async fetchBackupFromServer(e){let{commit:t}=e;try{t("loadBackupStatusFromServer",await(async e=>{const t=(0,g.KT)("apps/user_status/api/v1/statuses/{userId}",{userId:"_"+e});return(await p.Ay.get(t)).data.ocs.data})((0,r.HW)()?.uid))}catch(e){}},async revertBackupFromServer(e,t){let{commit:s}=e,{messageId:a}=t;const u=await(async e=>{const t=(0,g.KT)("apps/user_status/api/v1/user_status/revert/{messageId}",{messageId:e});return(await p.Ay.delete(t)).data.ocs.data})(a);u&&(s("loadBackupStatusFromServer",{}),s("loadStatusFromServer",u),(0,n.Ic)("user_status:status.updated",{status:u.status,message:u.message,icon:u.icon,clearAt:u.clearAt,userId:(0,r.HW)()?.uid}))}}};u.Ay.use(x.Ay);const N=new x.il({modules:{predefinedStatuses:j,userStatus:H,userBackupStatus:L},strict:!0});a.nc=(0,r.aV)(),u.Ay.prototype.t=t,u.Ay.prototype.$t=t;const K=()=>{const e=document.getElementById("user_status-menu-entry");new u.Ay({el:e,render:e=>e(U),store:N})};document.getElementById("user_status-menu-entry")?K():(0,n.B1)("core:user-menu:mounted",K),document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard&&OCA.Dashboard.registerStatus("status",(e=>new(u.Ay.extend(U))({propsData:{inline:!0},store:N}).$mount(e)))}))},33114:(e,t,s)=>{s.d(t,{A:()=>u});var a=s(95353),r=s(85168),n=s(96763);const u={computed:{...(0,a.aH)({statusType:e=>e.userStatus.status,statusIsUserDefined:e=>e.userStatus.statusIsUserDefined,customIcon:e=>e.userStatus.icon,customMessage:e=>e.userStatus.message}),visibleMessage(){if(this.customIcon&&this.customMessage)return`${this.customIcon} ${this.customMessage}`;if(this.customMessage)return this.customMessage;if(this.statusIsUserDefined)switch(this.statusType){case"online":return this.$t("user_status","Online");case"away":case"busy":return this.$t("user_status","Away");case"dnd":return this.$t("user_status","Do not disturb");case"invisible":return this.$t("user_status","Invisible");case"offline":return this.$t("user_status","Offline")}return this.$t("user_status","Set status")}},methods:{async changeStatus(e){try{await this.$store.dispatch("setStatus",{statusType:e})}catch(e){(0,r.Qg)(this.$t("user_status","There was an error saving the new status")),n.debug(e)}}}}},61913:(e,t,s)=>{s.d(t,{R:()=>a});const a=()=>new Date},73111:(e,t,s)=>{s.d(t,{A:()=>o});var a=s(71354),r=s.n(a),n=s(76314),u=s.n(n)()(r());u.push([e.id,".user-status-icon[data-v-4864e961]{width:20px;height:20px;margin:calc((var(--default-clickable-area) - 20px)/2);opacity:1 !important;background-size:20px;vertical-align:middle !important}","",{version:3,sources:["webpack://./apps/user_status/src/UserStatus.vue"],names:[],mappings:"AACA,mCACC,UAAA,CACA,WAAA,CACA,qDAAA,CACA,oBAAA,CACA,oBAAA,CACA,gCAAA",sourcesContent:["\n.user-status-icon {\n\twidth: 20px;\n\theight: 20px;\n\tmargin: calc((var(--default-clickable-area) - 20px) / 2); // 20px icon size\n\topacity: 1 !important;\n\tbackground-size: 20px;\n\tvertical-align: middle !important;\n}\n"],sourceRoot:""}]);const o=u},53611:(e,t,s)=>{s.d(t,{A:()=>a.N});var a=s(49453)}},n={};function u(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(s.exports,s,s.exports,u),s.loaded=!0,s.exports}u.m=r,e=[],u.O=(t,s,a,r)=>{if(!s){var n=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],r=e[d][2];for(var o=!0,i=0;i<s.length;i++)(!1&r||n>=r)&&Object.keys(u.O).every((e=>u.O[e](s[i])))?s.splice(i--,1):(o=!1,r<n&&(n=r));if(o){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,a,r]},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},u.d=(e,t)=>{for(var s in t)u.o(t,s)&&!u.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,s)=>(u.f[s](e,t),t)),[])),u.u=e=>(5133===e?"user-status-modal":e)+"-"+e+".js?v="+{4254:"bb7d4cb28aff89542bc8",4696:"cc68d867bbf949927642",5133:"6af1f1e0581f6637e856"}[e],u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s={},a="nextcloud:",u.l=(e,t,r,n)=>{if(s[e])s[e].push(t);else{var o,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+r){o=l;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.setAttribute("data-webpack",a+r),o.src=e),s[e]=[t];var m=(t,a)=>{o.onerror=o.onload=null,clearTimeout(p);var r=s[e];if(delete s[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(a))),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),i&&document.head.appendChild(o)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),u.j=9953,(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");if(s.length)for(var a=s.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=s[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),(()=>{u.b=document.baseURI||self.location.href;var e={9953:0};u.f.j=(t,s)=>{var a=u.o(e,t)?e[t]:void 0;if(0!==a)if(a)s.push(a[2]);else{var r=new Promise(((s,r)=>a=e[t]=[s,r]));s.push(a[2]=r);var n=u.p+u.u(t),o=new Error;u.l(n,(s=>{if(u.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",o.name="ChunkLoadError",o.type=r,o.request=n,a[1](o)}}),"chunk-"+t,t)}},u.O.j=t=>0===e[t];var t=(t,s)=>{var a,r,n=s[0],o=s[1],i=s[2],c=0;if(n.some((t=>0!==e[t]))){for(a in o)u.o(o,a)&&(u.m[a]=o[a]);if(i)var d=i(u)}for(t&&t(s);c<n.length;c++)r=n[c],u.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return u.O(d)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),u.nc=void 0;var o=u.O(void 0,[4208],(()=>u(20051)));o=u.O(o)})();
//# sourceMappingURL=user_status-menu.js.map?v=472c1349e3f51989c15f