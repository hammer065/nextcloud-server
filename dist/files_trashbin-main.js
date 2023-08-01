/*! For license information please see files_trashbin-main.js.LICENSE.txt */
(()=>{var e,t={90362:(e,t,n)=>{"use strict";var i,r,s,o=n(31352),a=n(80351),l=n.n(a),d=n(77958),c=n(17499),u=n(62520);null===(i=(0,d.ts)())?(0,c.IY)().setApp("files").build():(0,c.IY)().setApp("files").setUid(i.uid).build(),function(e){e.Folder="folder",e.File="file"}(r||(r={})),function(e){e[e.NONE=0]="NONE",e[e.CREATE=4]="CREATE",e[e.READ=1]="READ",e[e.UPDATE=2]="UPDATE",e[e.DELETE=8]="DELETE",e[e.SHARE=16]="SHARE",e[e.ALL=31]="ALL"}(s||(s={}));const h=function(e,t){return null!==e.match(t)},m=(e,t)=>{if("id"in e&&("number"!=typeof e.id||e.id<0))throw new Error("Invalid id type of value");if(!e.source)throw new Error("Missing mandatory source");try{new URL(e.source)}catch(e){throw new Error("Invalid source format, source must be a valid URL")}if(!e.source.startsWith("http"))throw new Error("Invalid source format, only http(s) is supported");if("mtime"in e&&!(e.mtime instanceof Date))throw new Error("Invalid mtime type");if("crtime"in e&&!(e.crtime instanceof Date))throw new Error("Invalid crtime type");if(!e.mime||"string"!=typeof e.mime||!e.mime.match(/^[-\w.]+\/[-+\w.]+$/gi))throw new Error("Missing or invalid mandatory mime");if("size"in e&&"number"!=typeof e.size)throw new Error("Invalid size type");if("permissions"in e&&!("number"==typeof e.permissions&&e.permissions>=s.NONE&&e.permissions<=s.ALL))throw new Error("Invalid permissions");if("owner"in e&&null!==e.owner&&"string"!=typeof e.owner)throw new Error("Invalid owner type");if("attributes"in e&&"object"!=typeof e.attributes)throw new Error("Invalid attributes format");if("root"in e&&"string"!=typeof e.root)throw new Error("Invalid root format");if(e.root&&!e.root.startsWith("/"))throw new Error("Root must start with a leading slash");if(e.root&&!e.source.includes(e.root))throw new Error("Root must be part of the source");if(e.root&&h(e.source,t)){const n=e.source.match(t)[0];if(!e.source.includes((0,u.join)(n,e.root)))throw new Error("The root must be relative to the service. e.g /files/emma")}};class f{_data;_attributes;_knownDavService=/(remote|public)\.php\/(web)?dav/i;constructor(e,t){m(e,t||this._knownDavService),this._data=e;const n={set:(e,t,n)=>(this._data.mtime=new Date,Reflect.set(e,t,n)),deleteProperty:(e,t)=>(this._data.mtime=new Date,Reflect.deleteProperty(e,t))};this._attributes=new Proxy(e.attributes||{},n),delete this._data.attributes,t&&(this._knownDavService=t)}get source(){return this._data.source.replace(/\/$/i,"")}get basename(){return(0,u.basename)(this.source)}get extension(){return(0,u.extname)(this.source)}get dirname(){if(this.root){const e=this.source.indexOf(this.root);return(0,u.dirname)(this.source.slice(e+this.root.length)||"/")}const e=new URL(this.source);return(0,u.dirname)(e.pathname)}get mime(){return this._data.mime}get mtime(){return this._data.mtime}get crtime(){return this._data.crtime}get size(){return this._data.size}get attributes(){return this._attributes}get permissions(){return null!==this.owner||this.isDavRessource?void 0!==this._data.permissions?this._data.permissions:s.NONE:s.READ}get owner(){return this.isDavRessource?this._data.owner:null}get isDavRessource(){return h(this.source,this._knownDavService)}get root(){return this._data.root?this._data.root.replace(/^(.+)\/$/,"$1"):this.isDavRessource&&(0,u.dirname)(this.source).split(this._knownDavService).pop()||null}get path(){if(this.root){const e=this.source.indexOf(this.root);return this.source.slice(e+this.root.length)||"/"}return(this.dirname+"/"+this.basename).replace(/\/\//g,"/")}get fileid(){return this._data?.id||this.attributes?.fileid}move(e){m({...this._data,source:e},this._knownDavService),this._data.source=e,this._data.mtime=new Date}rename(e){if(e.includes("/"))throw new Error("Invalid basename");this.move((0,u.dirname)(this.source)+"/"+e)}}class p extends f{get type(){return r.File}}class v extends f{constructor(e){super({...e,mime:"httpd/unix-directory"})}get type(){return r.Folder}get extension(){return null}get mime(){return"httpd/unix-directory"}}var j=n(79753);const w=(0,c.IY)().setApp("files").detectUser().build(),b=["d:getcontentlength","d:getcontenttype","d:getetag","d:getlastmodified","d:quota-available-bytes","d:resourcetype","nc:has-preview","nc:is-encrypted","nc:mount-type","nc:share-attributes","oc:comments-unread","oc:favorite","oc:fileid","oc:owner-display-name","oc:owner-id","oc:permissions","oc:share-types","oc:size","ocs:share-permissions"],g={d:"DAV:",nc:"http://nextcloud.org/ns",oc:"http://owncloud.org/ns",ocs:"http://open-collaboration-services.org/ns"};var y,_=n(14596);const E="/trashbin/".concat(null===(y=(0,d.ts)())||void 0===y?void 0:y.uid,"/trash"),x=(0,j.generateRemoteUrl)("dav"+E),I=(0,_.eI)(x,{headers:{requesttoken:(0,d.IH)()}}),k='<?xml version="1.0"?>\n<d:propfind '.concat((void 0===window._nc_dav_namespaces&&(window._nc_dav_namespaces=g),Object.keys(window._nc_dav_namespaces).map((e=>"xmlns:".concat(e,'="').concat(window._nc_dav_namespaces[e],'"'))).join(" ")),">\n\t<d:prop>\n\t\t<nc:trashbin-filename />\n\t\t<nc:trashbin-deletion-time />\n\t\t<nc:trashbin-original-location />\n\t\t<nc:trashbin-title />\n\t\t").concat((void 0===window._nc_dav_properties&&(window._nc_dav_properties=b),window._nc_dav_properties.map((e=>"<".concat(e," />"))).join(" ")),"\n\t</d:prop>\n</d:propfind>"),D=function(e){var t,n,i,r,o;const a=function(e=""){let t=s.NONE;return e?((e.includes("C")||e.includes("K"))&&(t|=s.CREATE),e.includes("G")&&(t|=s.READ),(e.includes("W")||e.includes("N")||e.includes("V"))&&(t|=s.UPDATE),e.includes("D")&&(t|=s.DELETE),e.includes("R")&&(t|=s.SHARE),t):t}(null===(t=e.props)||void 0===t?void 0:t.permissions),l=null===(n=(0,d.ts)())||void 0===n?void 0:n.uid,c=(0,j.generateUrl)("/apps/files_trashbin/preview?fileId={fileid}&x=32&y=32",e.props),u={id:(null===(i=e.props)||void 0===i?void 0:i.fileid)||0,source:(0,j.generateRemoteUrl)("dav"+E+e.filename),mime:e.mime,size:(null===(r=e.props)||void 0===r?void 0:r.size)||0,permissions:a,owner:l,root:E,attributes:{...e,...e.props,displayName:null===(o=e.props)||void 0===o?void 0:o["trashbin-filename"],previewUrl:c}};return delete u.attributes.props,"file"===e.type?new p(u):new v(u)};var A,z,O=n(69183),R=n(26937);!function(e){e.DEFAULT="default",e.HIDDEN="hidden"}(A||(A={})),z=new class{constructor(e){var t,n,i;t=this,i=void 0,(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(n="_action"))in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,this.validateAction(e),this._action=e}get id(){return this._action.id}get displayName(){return this._action.displayName}get iconSvgInline(){return this._action.iconSvgInline}get enabled(){return this._action.enabled}get exec(){return this._action.exec}get execBatch(){return this._action.execBatch}get order(){return this._action.order}get default(){return this._action.default}get inline(){return this._action.inline}get renderInline(){return this._action.renderInline}validateAction(e){if(!e.id||"string"!=typeof e.id)throw new Error("Invalid id");if(!e.displayName||"function"!=typeof e.displayName)throw new Error("Invalid displayName function");if(!e.iconSvgInline||"function"!=typeof e.iconSvgInline)throw new Error("Invalid iconSvgInline function");if(!e.exec||"function"!=typeof e.exec)throw new Error("Invalid exec function");if("enabled"in e&&"function"!=typeof e.enabled)throw new Error("Invalid enabled function");if("execBatch"in e&&"function"!=typeof e.execBatch)throw new Error("Invalid execBatch function");if("order"in e&&"number"!=typeof e.order)throw new Error("Invalid order");if(e.default&&!Object.values(A).includes(e.default))throw new Error("Invalid default");if("inline"in e&&"function"!=typeof e.inline)throw new Error("Invalid inline function");if("renderInline"in e&&"function"!=typeof e.renderInline)throw new Error("Invalid renderInline function")}}({id:"restore",displayName:()=>(0,o.Iu)("files_trashbin","Restore"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-history" viewBox="0 0 24 24"><path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" /></svg>',enabled:(e,t)=>"trashbin"===t.id&&e.length>0&&e.map((e=>e.permissions)).every((e=>0!=(e&s.READ))),async exec(e){try{var t;const n=(0,j.generateRemoteUrl)("dav/trashbin/".concat(null===(t=(0,d.ts)())||void 0===t?void 0:t.uid,"/restore/").concat(e.basename));return await(0,R.Z)({method:"MOVE",url:e.source,headers:{destination:n}}),(0,O.j8)("files:node:deleted",e),!0}catch(e){return w.error(e),!1}},async execBatch(e,t,n){return Promise.all(e.map((e=>this.exec(e,t,n))))},order:1,inline:()=>!0}),void 0===window._nc_fileactions&&(window._nc_fileactions=[],w.debug("FileActions initialized")),window._nc_fileactions.find((e=>e.id===z.id))?w.error("FileAction ".concat(z.id," already registered"),{action:z}):window._nc_fileactions.push(z),window.OCP.Files.Navigation.register({id:"trashbin",name:(0,o.Iu)("files_trashbin","Deleted files"),caption:(0,o.Iu)("files_trashbin","List of files that have been deleted."),emptyTitle:(0,o.Iu)("files_trashbin","No deleted files"),emptyCaption:(0,o.Iu)("files_trashbin","Files and folders you have deleted will show up here"),icon:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-delete" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',order:50,sticky:!0,defaultSortKey:"deleted",columns:[{id:"deleted",title:(0,o.Iu)("files_trashbin","Deleted"),render(e){var t;const n=null===(t=e.attributes)||void 0===t?void 0:t["trashbin-deletion-time"],i=document.createElement("span");return n?(i.title=l().unix(n).format("LLL"),i.textContent=l().unix(n).fromNow(),i):(i.textContent=(0,o.Iu)("files_trashbin","A long time ago"),i)},sort(e,t){var n,i;const r=(null===(n=e.attributes)||void 0===n?void 0:n["trashbin-deletion-time"])||(null==e?void 0:e.mtime)||0;return((null===(i=t.attributes)||void 0===i?void 0:i["trashbin-deletion-time"])||(null==t?void 0:t.mtime)||0)-r}}],getContents:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";const t=await I.stat(e,{details:!0,data:k}),n=await I.getDirectoryContents(e,{details:!0,data:k});return{folder:D(t.data),contents:n.data.map(D)}}})},46700:(e,t,n)=>{var i={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=46700}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=t,e=[],i.O=(t,n,r,s)=>{if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],s=e[c][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(a=!1,s<o&&(o=s));if(a){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,r,s]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=5992,(()=>{i.b=document.baseURI||self.location.href;var e={5992:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,s,o=n[0],a=n[1],l=n[2],d=0;if(o.some((t=>0!==e[t]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(l)var c=l(i)}for(t&&t(n);d<o.length;d++)s=o[d],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),i.nc=void 0;var r=i.O(void 0,[7874],(()=>i(90362)));r=i.O(r)})();
//# sourceMappingURL=files_trashbin-main.js.map?v=8ab8344b88696aee0060