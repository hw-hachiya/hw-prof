(function(){"use strict";var t={636:function(t,e,n){var o=n(144),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),e("router-link",{attrs:{to:"/works"}},[t._v("Works")]),e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e("router-view"),t._m(0)],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("p",[t._v("Copyright © H-Works All rights reserved.")])])}],a={methods:{setMeta(t){if(t.meta.title){let e=t.meta.title;document.title=e}if(t.meta.desc){let e=t.meta.desc;document.querySelector("meta[name='description']").setAttribute("content",e)}}},mounted(){let t=this.$route;this.setMeta(t)},watch:{$route(t){this.setMeta(t)}}},u=a,s=n(1),c=(0,s.Z)(u,r,i,!1,null,null,null),l=c.exports,f=n(345),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"content"},[e("svg",{attrs:{width:"240",height:"240",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("title",[t._v("alpha-h-box")]),e("path",{attrs:{d:"M9,7V17H11V13H13V17H15V7H13V11H11V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"}})]),e("HeaderComp",{attrs:{msg:"Welcome"}})],1),e("div",{staticClass:"content"},[e("LimitedComp")],1)])},m=[],p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),e("p",[t._v("This is HW Web.")])])},v=[],h={name:"HeaderComp",props:{msg:String}},b=h,g=(0,s.Z)(b,p,v,!1,null,null,null),w=g.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"limited"},[e("h2",[t._v("期間限定公開")]),e("div",{staticClass:"open-limited-page"},[e("router-link",{attrs:{to:"/limited/108"}},[t._v("限定ページを見る")])],1),e("p",[t._v("この機会をお見逃しなく！")])])},y=[],k={name:"LimitedComp"},C=k,H=(0,s.Z)(C,_,y,!1,null,null,null),O=H.exports,j={name:"HomeView",components:{HeaderComp:w,LimitedComp:O}},A=j,x=(0,s.Z)(A,d,m,!1,null,"07ccae96",null),P=x.exports;o.ZP.use(f.ZP);const T=[{path:"/",name:"home",component:P,meta:{title:"HW Home",desc:"This is HW Home"}},{path:"/works",name:"works",component:()=>n.e(574).then(n.bind(n,574)),meta:{title:"Works 実績",desc:"実績をご紹介します。"}},{path:"/about",name:"about",component:()=>n.e(844).then(n.bind(n,844)),meta:{title:"About このサイトについて",desc:"HWとは、連絡先など..."}},{path:"/limited/:aid",name:"limited",component:()=>n.e(892).then(n.bind(n,892)),meta:{title:"期間限定公開",desc:"この機会をお見逃しなく！"},props:!0}],Z=new f.ZP({mode:"history",base:"",routes:T});var V=Z;o.ZP.config.productionTip=!1,new o.ZP({router:V,render:t=>t(l)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(u=!1,i<a&&(a=i));if(u){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{574:"b31d7e8b",844:"23ea3897",892:"6e0263c5"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="hw-prof:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=o),t[o]=[r];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),u=new Error,s=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],u=o[1],s=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var l=s(n)}for(e&&e(o);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunkhw_prof"]=self["webpackChunkhw_prof"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(636)}));o=n.O(o)})();
//# sourceMappingURL=app.0fcaec46.js.map