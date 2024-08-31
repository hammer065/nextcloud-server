(()=>{var t,e,s,a={12158:(t,e,s)=>{"use strict";var a=s(21777),r=s(85471),i=s(84237),n=s(88837),l=s(53334),o=s(85168),d=s(18740),c=s(67607),g=s(5212),u=s(82182),m=s(71654);const p={userVisible:!0,userAssignable:!0,canAssign:!0};s(65043);var h=s(60669);const y=(0,s(63814).dC)("dav"),b=(0,h.UU)(y),v=t=>{b.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:t??""})};(0,a.zo)(v),v((0,a.do)());const f=(0,s(35947).YK)().setApp("systemtags").detectUser().build();var A;!function(t){t.Public="Public",t.Restricted="Restricted",t.Invisible="Invisible"}(A||(A={}));const T=[{id:A.Public,label:(0,l.Tl)("systemtags","Public")},{id:A.Restricted,label:(0,l.Tl)("systemtags","Restricted")},{id:A.Invisible,label:(0,l.Tl)("systemtags","Invisible")}],_=(t,e)=>({[[!0,!0].join(",")]:A.Public,[[!0,!1].join(",")]:A.Restricted,[[!1,!1].join(",")]:A.Invisible}[[t,e].join(",")]),C=r.Ay.extend({name:"SystemTagForm",components:{NcButton:d.A,NcLoadingIcon:i.A,NcSelect:c.A,NcSelectTags:g.A,NcTextField:u.A},props:{tags:{type:Array,required:!0}},data:()=>({loading:!1,tagLevelOptions:T,selectedTag:null,errorMessage:"",tagName:"",tagLevel:A.Public}),watch:{selectedTag(t){this.tagName=t?t.displayName:"",this.tagLevel=t?_(t.userVisible,t.userAssignable):A.Public}},computed:{isCreating(){return null===this.selectedTag},isCreateDisabled(){return""===this.tagName},isUpdateDisabled(){return""===this.tagName||this.selectedTag?.displayName===this.tagName&&_(this.selectedTag?.userVisible,this.selectedTag?.userAssignable)===this.tagLevel},isResetDisabled(){return this.isCreating?""===this.tagName&&this.tagLevel===A.Public:null===this.selectedTag},userVisible(){return{[A.Public]:!0,[A.Restricted]:!0,[A.Invisible]:!1}[this.tagLevel]},userAssignable(){return{[A.Public]:!0,[A.Restricted]:!1,[A.Invisible]:!1}[this.tagLevel]},tagProperties(){return{displayName:this.tagName,userVisible:this.userVisible,userAssignable:this.userAssignable}}},methods:{t:l.Tl,async handleSubmit(){this.isCreating?await this.create():await this.update()},async create(){const t={...p,...this.tagProperties};this.loading=!0;try{const e=await(async t=>{const e=(t=>{if("name"in t&&!("displayName"in t))return{...t};const e={...t};return e.name=e.displayName,delete e.displayName,e})(t);try{const{headers:t}=await b.customRequest("/systemtags",{method:"POST",data:e}),s=t.get("content-location");if(s)return(t=>{const e=t.indexOf("?");e>0&&(t=t.substring(0,e));const s=t.split("/");let a;do{a=s[s.length-1],s.pop()}while(!a&&s.length>0);return Number(a)})(s);throw f.error((0,l.Tl)("systemtags",'Missing "Content-Location" header')),new Error((0,l.Tl)("systemtags",'Missing "Content-Location" header'))}catch(t){throw f.error((0,l.Tl)("systemtags","Failed to create tag"),{error:t}),new Error((0,l.Tl)("systemtags","Failed to create tag"))}})(t),s={...t,id:e};this.$emit("tag:created",s),(0,o.Te)((0,l.Tl)("systemtags","Created tag")),this.reset()}catch(t){this.errorMessage=(0,l.Tl)("systemtags","Failed to create tag")}this.loading=!1},async update(){if(null===this.selectedTag)return;const t={...this.selectedTag,...this.tagProperties};this.loading=!0;try{await(async t=>{const e="/systemtags/"+t.id,s=`<?xml version="1.0"?>\n\t<d:propertyupdate  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t\t<d:set>\n\t\t\t<d:prop>\n\t\t\t\t<oc:display-name>${t.displayName}</oc:display-name>\n\t\t\t\t<oc:user-visible>${t.userVisible}</oc:user-visible>\n\t\t\t\t<oc:user-assignable>${t.userAssignable}</oc:user-assignable>\n\t\t\t</d:prop>\n\t\t</d:set>\n\t</d:propertyupdate>`;try{await b.customRequest(e,{method:"PROPPATCH",data:s})}catch(t){throw f.error((0,l.Tl)("systemtags","Failed to update tag"),{error:t}),new Error((0,l.Tl)("systemtags","Failed to update tag"))}})(t),this.selectedTag=t,this.$emit("tag:updated",t),(0,o.Te)((0,l.Tl)("systemtags","Updated tag")),this.$refs.tagNameInput?.focus()}catch(t){this.errorMessage=(0,l.Tl)("systemtags","Failed to update tag")}this.loading=!1},async handleDelete(){if(null!==this.selectedTag){this.loading=!0;try{await(async()=>{const t="/systemtags/"+this.selectedTag.id;try{await b.deleteFile(t)}catch(t){throw f.error((0,l.Tl)("systemtags","Failed to delete tag"),{error:t}),new Error((0,l.Tl)("systemtags","Failed to delete tag"))}})(),this.$emit("tag:deleted",this.selectedTag),(0,o.Te)((0,l.Tl)("systemtags","Deleted tag")),this.reset()}catch(t){this.errorMessage=(0,l.Tl)("systemtags","Failed to delete tag")}this.loading=!1}},reset(){this.selectedTag=null,this.errorMessage="",this.tagName="",this.tagLevel=A.Public,this.$refs.tagNameInput?.focus()}}});var x=s(85072),w=s.n(x),N=s(97825),S=s.n(N),P=s(77659),L=s.n(P),O=s(55056),F=s.n(O),I=s(10540),k=s.n(I),R=s(41113),j=s.n(R),D=s(2450),E={};E.styleTagTransform=j(),E.setAttributes=F(),E.insert=L().bind(null,"head"),E.domAPI=S(),E.insertStyleElement=k(),w()(D.A,E),D.A&&D.A.locals&&D.A.locals;var M=s(14486);const $=(0,M.A)(C,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("form",{staticClass:"system-tag-form",attrs:{disabled:t.loading,"aria-labelledby":"system-tag-form-heading"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)},reset:t.reset}},[e("h3",{attrs:{id:"system-tag-form-heading"}},[t._v("\n\t\t"+t._s(t.t("systemtags","Create or edit tags"))+"\n\t")]),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tags-input"}},[t._v(t._s(t.t("systemtags","Search for a tag to edit")))]),t._v(" "),e("NcSelectTags",{attrs:{"input-id":"system-tags-input",placeholder:t.t("systemtags","Collaborative tags …"),"fetch-tags":!1,options:t.tags,multiple:!1,passthru:""},scopedSlots:t._u([{key:"no-options",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","No tags to select"))+"\n\t\t\t")]},proxy:!0}]),model:{value:t.selectedTag,callback:function(e){t.selectedTag=e},expression:"selectedTag"}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tag-name"}},[t._v(t._s(t.t("systemtags","Tag name")))]),t._v(" "),e("NcTextField",{ref:"tagNameInput",attrs:{id:"system-tag-name",value:t.tagName,error:Boolean(t.errorMessage),"helper-text":t.errorMessage,"label-outside":""},on:{"update:value":function(e){t.tagName=e}}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tag-level"}},[t._v(t._s(t.t("systemtags","Tag level")))]),t._v(" "),e("NcSelect",{attrs:{"input-id":"system-tag-level",options:t.tagLevelOptions,reduce:t=>t.id,clearable:!1,disabled:t.loading},model:{value:t.tagLevel,callback:function(e){t.tagLevel=e},expression:"tagLevel"}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__row"},[t.isCreating?e("NcButton",{attrs:{"native-type":"submit",disabled:t.isCreateDisabled||t.loading}},[t._v("\n\t\t\t"+t._s(t.t("systemtags","Create"))+"\n\t\t")]):[e("NcButton",{attrs:{"native-type":"submit",disabled:t.isUpdateDisabled||t.loading}},[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","Update"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{attrs:{disabled:t.loading},on:{click:t.handleDelete}},[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","Delete"))+"\n\t\t\t")])],t._v(" "),e("NcButton",{attrs:{"native-type":"reset",disabled:t.isResetDisabled||t.loading}},[t._v("\n\t\t\t"+t._s(t.t("systemtags","Reset"))+"\n\t\t")]),t._v(" "),t.loading?e("NcLoadingIcon",{attrs:{name:t.t("systemtags","Loading …"),size:32}}):t._e()],2)])}),[],!1,null,"36ae2802",null).exports,U=r.Ay.extend({name:"SystemTagsSection",components:{NcLoadingIcon:i.A,NcSettingsSection:n.A,SystemTagForm:$},data:()=>({loadingTags:!1,tags:[]}),async created(){this.loadingTags=!0;try{this.tags=await(async()=>{try{const{data:t}=await b.getDirectoryContents("/systemtags",{data:'<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t<d:prop>\n\t\t<oc:id />\n\t\t<oc:display-name />\n\t\t<oc:user-visible />\n\t\t<oc:user-assignable />\n\t\t<oc:can-assign />\n\t</d:prop>\n</d:propfind>',details:!0,glob:"/systemtags/*"});return(t=>t.map((t=>{let{props:e}=t;return Object.fromEntries(Object.entries(e).map((t=>{let[e,s]=t;return[(0,m.A)(e),"displayName"===(0,m.A)(e)?String(s):s]})))})))(t)}catch(t){throw f.error((0,l.Tl)("systemtags","Failed to load tags"),{error:t}),new Error((0,l.Tl)("systemtags","Failed to load tags"))}})()}catch(t){(0,o.Qg)((0,l.Tl)("systemtags","Failed to load tags"))}this.loadingTags=!1},methods:{t:l.Tl,handleCreate(t){this.tags.unshift(t)},handleUpdate(t){const e=this.tags.findIndex((e=>e.id===t.id));this.tags.splice(e,1),this.tags.unshift(t)},handleDelete(t){const e=this.tags.findIndex((e=>e.id===t.id));this.tags.splice(e,1)}}}),B=(0,M.A)(U,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("NcSettingsSection",{attrs:{name:t.t("systemtags","Collaborative tags"),description:t.t("systemtags","Collaborative tags are available for all users. Restricted tags are visible to users but cannot be assigned by them. Invisible tags are for internal use, since users cannot see or assign them.")}},[t.loadingTags?e("NcLoadingIcon",{attrs:{name:t.t("systemtags","Loading collaborative tags …"),size:32}}):e("SystemTagForm",{attrs:{tags:t.tags},on:{"tag:created":t.handleCreate,"tag:updated":t.handleUpdate,"tag:deleted":t.handleDelete}})],1)}),[],!1,null,null,null).exports;s.nc=(0,a.aV)(),(new(r.Ay.extend(B))).$mount("#vue-admin-systemtags")},2450:(t,e,s)=>{"use strict";s.d(e,{A:()=>l});var a=s(71354),r=s.n(a),i=s(76314),n=s.n(i)()(r());n.push([t.id,".system-tag-form[data-v-36ae2802]{display:flex;flex-direction:column;max-width:400px;gap:8px 0}.system-tag-form__group[data-v-36ae2802]{display:flex;flex-direction:column}.system-tag-form__row[data-v-36ae2802]{margin-top:8px;display:flex;gap:0 4px}","",{version:3,sources:["webpack://./apps/systemtags/src/components/SystemTagForm.vue"],names:[],mappings:"AACA,kCACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,SAAA,CAEA,yCACC,YAAA,CACA,qBAAA,CAGD,uCACC,cAAA,CACA,YAAA,CACA,SAAA",sourcesContent:["\n.system-tag-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 400px;\n\tgap: 8px 0;\n\n\t&__group {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t&__row {\n\t\tmargin-top: 8px;\n\t\tdisplay: flex;\n\t\tgap: 0 4px;\n\t}\n}\n"],sourceRoot:""}]);const l=n},42634:()=>{},63779:()=>{},77199:()=>{},59169:()=>{},86833:()=>{}},r={};function i(t){var e=r[t];if(void 0!==e)return e.exports;var s=r[t]={id:t,loaded:!1,exports:{}};return a[t].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=a,t=[],i.O=(e,s,a,r)=>{if(!s){var n=1/0;for(c=0;c<t.length;c++){s=t[c][0],a=t[c][1],r=t[c][2];for(var l=!0,o=0;o<s.length;o++)(!1&r||n>=r)&&Object.keys(i.O).every((t=>i.O[t](s[o])))?s.splice(o--,1):(l=!1,r<n&&(n=r));if(l){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,a,r]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,s)=>(i.f[s](t,e),e)),[])),i.u=t=>t+"-"+t+".js?v="+{802:"afe827b06485c6e27e09",9291:"077955af818a227340aa"}[t],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},s="nextcloud:",i.l=(t,a,r,n)=>{if(e[t])e[t].push(a);else{var l,o;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var g=d[c];if(g.getAttribute("src")==t||g.getAttribute("data-webpack")==s+r){l=g;break}}l||(o=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",s+r),l.src=t),e[t]=[a];var u=(s,a)=>{l.onerror=l.onload=null,clearTimeout(m);var r=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((t=>t(a))),s)return s(a)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),o&&document.head.appendChild(l)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),i.j=6349,(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");if(s.length)for(var a=s.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=s[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{i.b=document.baseURI||self.location.href;var t={6349:0};i.f.j=(e,s)=>{var a=i.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else{var r=new Promise(((s,r)=>a=t[e]=[s,r]));s.push(a[2]=r);var n=i.p+i.u(e),l=new Error;i.l(n,(s=>{if(i.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var r=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}}),"chunk-"+e,e)}},i.O.j=e=>0===t[e];var e=(e,s)=>{var a,r,n=s[0],l=s[1],o=s[2],d=0;if(n.some((e=>0!==t[e]))){for(a in l)i.o(l,a)&&(i.m[a]=l[a]);if(o)var c=o(i)}for(e&&e(s);d<n.length;d++)r=n[d],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(c)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),i.nc=void 0;var n=i.O(void 0,[4208],(()=>i(12158)));n=i.O(n)})();
//# sourceMappingURL=systemtags-admin.js.map?v=af2dd826b8b4439ca981