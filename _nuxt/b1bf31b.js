(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{566:function(t,n,e){"use strict";e.r(n);var r=e(250),o=e(21),l=e(518),c=e(242),d=e(525),m=e(517),f={props:{placeName:{type:String,default:"No Name"},snsHome:{type:String,default:""},snsTwitter:{type:String,default:""},snsInstagram:{type:String,default:""}},computed:{hasSnsLinks:function(){return this.snsHome||this.snsInstagram||this.snsTwitter}},methods:{externalLink:function(t){var n=t;window.open(n)}}},k=e(32),component=Object(k.a)(f,(function(){var t=this,n=t._self._c;return t.hasSnsLinks?n(d.a,{attrs:{"min-height":"100",transition:"slide-x-reverse-transition"}},[n(r.a,{staticClass:"mx-auto",staticStyle:{"background-color":"rgba(255, 255, 255, 0.8)"},attrs:{outlined:"","max-width":"600"}},[n(o.d,[n(m.a,[n(l.a,[n(c.a,{attrs:{large:"",left:"",color:"orange"}},[t._v(" mdi-link ")]),t._v(" "),n("span",{staticClass:"text-subtitle-2 font-weight-bold"},[t._v(t._s(t.placeName)+" の公式リンク")])],1)],1)],1),t._v(" "),n(o.c,[n(m.a,[t.snsHome?n(l.a,{attrs:{cols:"4"}},[n(r.a,{attrs:{outlined:"",color:"#272727",dark:""},on:{click:function(n){return t.externalLink(t.snsHome)}}},[n(o.d,[n(m.a,{attrs:{"align-content":"center"}},[n(l.a,{attrs:{align:"center"}},[n(c.a,{attrs:{large:"",center:""}},[t._v(" mdi-home ")])],1)],1)],1)],1)],1):t._e(),t._v(" "),t.snsInstagram?n(l.a,{attrs:{cols:"4"}},[n(r.a,{attrs:{outlined:"",color:"#be38f3",dark:""},on:{click:function(n){return t.externalLink(t.snsInstagram)}}},[n(o.d,[n(m.a,{attrs:{"align-content":"center"}},[n(l.a,{attrs:{align:"center"}},[n(c.a,{attrs:{large:"",center:""}},[t._v(" mdi-instagram ")])],1)],1)],1)],1)],1):t._e(),t._v(" "),t.snsTwitter?n(l.a,{attrs:{cols:"4"}},[n(r.a,{attrs:{outlined:"",color:"#26c6da",dark:""},on:{click:function(n){return t.externalLink(t.snsTwitter)}}},[n(o.d,[n(m.a,{attrs:{"align-content":"center"}},[n(l.a,{attrs:{align:"center"}},[n(c.a,{attrs:{large:"",center:""}},[t._v(" mdi-twitter ")])],1)],1)],1)],1)],1):t._e()],1)],1)],1)],1):t._e()}),[],!1,null,"155535df",null);n.default=component.exports}}]);