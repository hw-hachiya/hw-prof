"use strict";(self["webpackChunkhw_prof"]=self["webpackChunkhw_prof"]||[]).push([[230],{230:function(t,n,s){s.r(n),s.d(n,{default:function(){return p}});var e=function(){var t=this,n=t._self._c;return n("div",{staticClass:"works"},[n("h1",[t._v("Works")]),n("div",{staticClass:"content"},[n("h2",[t._v("Works")]),n("h3",[t._v("アコーディオンサンプル")]),n("p",[t._v("これが最初の仕事です。")]),n("AccComp",{attrs:{"acc-title":"表示する"},scopedSlots:t._u([{key:"inner-content",fn:function(){return[n("p",[t._v("これが最初のボタンで表示される文章です。")])]},proxy:!0}])}),n("AccComp",{scopedSlots:t._u([{key:"inner-content",fn:function(){return[n("p",[t._v("これが次のボタンで表示される文章です。")])]},proxy:!0}])})],1),t._m(0),n("div",{staticClass:"content"},[n("h2",[t._v("Works")]),n("h3",[t._v("フォームサンプル")]),n("router-link",{attrs:{to:"/form"}},[t._v("フォームはこちら")])],1),n("div",{staticClass:"content"},[n("h2",[t._v("Works")]),n("h3",[t._v("サンプル")]),n("p",[t._v("This is my second work.")]),n("button",{on:{click:function(n){return t.clickBtn("OK")}}},[t._v("クリック")])])])},c=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"content"},[n("h2",[t._v("Works")]),n("h3",[t._v("Display Grid の表示テスト")]),n("div",{staticClass:"flex-region"},[n("div",{staticClass:"flex-region__inner"},[n("h4",[t._v("タイトル")]),n("p",{staticClass:"sentence"},[t._v(" 恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。自分は停車場のブリッジを ")])]),n("div",{staticClass:"flex-region__inner"},[n("h4",[t._v("タイトル")]),n("p",{staticClass:"sentence"},[t._v("吾輩は猫である。名前はまだ無い。どこで生れたか")])])])])}],o=function(){var t=this,n=t._self._c;return n("div",{staticClass:"acc"},[n("button",{staticClass:"btn",on:{click:function(n){t.show=!t.show}}},[t._v(t._s(t.label))]),n("transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"inner-content"},[t._t("inner-content")],2)])],1)},i=[],r={name:"AccComp",props:{accTitle:{type:String,default:"詳細を見る"}},data:function(){return{show:!1}},computed:{label:function(){return this.show?"閉じる":this.accTitle}}},l=r,a=s(1),u=(0,a.Z)(l,o,i,!1,null,"22dbb565",null),v=u.exports,_={name:"WorksView",components:{AccComp:v},methods:{clickBtn:t=>{console.log(t)}},mounted:function(){let t=document.querySelectorAll(".sentence");t.forEach((function(t){let n=t.innerText.length;n>28&&t.classList.add("long-sentence")}))}},h=_,f=(0,a.Z)(h,e,c,!1,null,null,null),p=f.exports}}]);
//# sourceMappingURL=230.520f0bf7.js.map