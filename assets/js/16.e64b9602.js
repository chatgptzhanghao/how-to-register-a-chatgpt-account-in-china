(window.webpackJsonp=window.webpackJsonp||[]).push([[16,19,37,40],{325:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));n(131);var s=n(0);function i(){const t=Object(s.d)();if(!t)throw new Error("must be called in setup");return(null==t?void 0:t.proxy)||{}}function o(){const t=Object(s.h)(!1);return Object(s.e)(()=>{t.value=!0}),Object(s.f)(()=>{t.value=!1,setTimeout(()=>{t.value=!0},100)}),{recoShowModule:t}}},327:function(t,e,n){},333:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(18),o=n(61),a=n(325),r=Object(s.c)({components:{RecoIcon:o.b},props:{item:{required:!0}},setup(t,e){const n=Object(a.a)(),{item:o}=Object(s.i)(t),r=Object(s.a)(()=>Object(i.d)(o.value.link)),l=Object(s.a)(()=>n.$site.locales?Object.keys(n.$site.locales).some(t=>t===r.value):"/"===r.value);return{link:r,exact:l,isExternal:i.f,isMailto:i.g,isTel:i.h}}}),l=n(2),c=Object(l.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[e("reco-icon",{attrs:{icon:""+t.item.icon}}),t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[e("reco-icon",{attrs:{icon:""+t.item.icon}}),t._v("\n  "+t._s(t.item.text)+"\n")],1)}),[],!1,null,null,null);e.default=c.exports},334:function(t,e,n){"use strict";n.r(e);var s=n(0),i=Object(s.c)({name:"DropdownTransition",setup:(t,e)=>({setHeight:t=>{t.style.height=t.scrollHeight+"px"},unsetHeight:t=>{t.style.height=""}})}),o=(n(335),n(2)),a=Object(o.a)(i,(function(){var t=this._self._c;this._self._setupProxy;return t("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=a.exports},335:function(t,e,n){"use strict";n(327)},336:function(t,e,n){},344:function(t,e,n){},350:function(t,e,n){"use strict";n(336)},358:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(61),o=n(333),a=n(334),r=Object(s.c)({components:{NavLink:o.default,DropdownTransition:a.default,RecoIcon:i.b},props:{item:{required:!0}},setup(t,e){const n=Object(s.h)(!1);return{open:n,toggle:()=>{n.value=!n.value}}}}),l=(n(350),n(2)),c=Object(l.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[e("span",{staticClass:"title"},[e("reco-icon",{attrs:{icon:""+t.item.icon}}),t._v("\n      "+t._s(t.item.text)+"\n    ")],1),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,s){return e("li",{key:n.link||s,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v(t._s(n.text))]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(t){return e("li",{key:t.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:t}})],1)})),0):e("NavLink",{attrs:{item:n}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=c.exports},363:function(t,e,n){"use strict";n(344)},377:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(61),o=n(358),a=n(18),r=n(333),l=n(325),c=Object(s.c)({components:{NavLink:r.default,DropdownLink:o.default,RecoIcon:i.b},setup(t,e){const n=Object(l.a)(),i=Object(s.a)(()=>n.$themeLocaleConfig.nav||n.$themeConfig.nav||[]),o=Object(s.a)(()=>{const t=n.$site.locales||{};if(t&&Object.keys(t).length>1){const e=n.$page.path,s=n.$router.options.routes,o=n.$themeConfig.locales||{},a={text:n.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(i=>{const a=t[i],r=o[i]&&o[i].label||a.lang;let l;return a.lang===n.$lang?l=e:(l=e.replace(n.$localeConfig.path,i),s.some(t=>t.path===l)||(l=i)),{text:r,link:l}})};return[...i.value,a]}const e=n.$themeConfig.blogConfig||{},s=i.value.some(t=>!e.category||t.text===(e.category.text||"分类")),o=i.value.some(t=>!e.tag||t.text===(e.tag.text||"标签"));if(!s&&Object.hasOwnProperty.call(e,"category")){const t=e.category,s=n.$categories;i.value.splice(parseInt(t.location||2)-1,0,{items:s.list.map(t=>(t.link=t.path,t.text=t.name,t)),text:t.text||n.$recoLocales.category,type:"links",icon:"reco-category"})}if(!o&&Object.hasOwnProperty.call(e,"tag")){const t=e.tag;i.value.splice(parseInt(t.location||3)-1,0,{link:"/tag/",text:t.text||n.$recoLocales.tag,type:"links",icon:"reco-tag"})}return i.value}),r=Object(s.a)(()=>(n.nav||[]).map(t=>Object.assign(Object(a.j)(t),{items:(t.items||[]).map(a.j)}))),c=Object(s.a)(()=>{const{repo:t}=n.$themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:""}),u=Object(s.a)(()=>{if(!n.repoLink)return"";if(n.$themeConfig.repoLabel)return n.$themeConfig.repoLabel;const t=n.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const s=e[n];if(new RegExp(s,"i").test(t))return s}return"Source"});return{userNav:i,nav:o,userLinks:r,repoLink:c,repoLabel:u}}}),u=(n(363),n(2)),p=Object(u.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e("reco-icon",{attrs:{icon:"reco-"+t.repoLabel.toLowerCase()}}),t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=p.exports}}]);