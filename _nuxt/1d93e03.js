(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{541:function(t,e,l){"use strict";l.r(e);var c=l(246),r=l(250),n=l(21),o=l(521),d=l(518),h=l(257),f=l(522),_=l(242),v=l(193),m=l(517),y=l(65),k=(l(22),{props:{src:{type:String,default:"/images/img01.jpg"},lsrc:{type:String,default:""},publisher:{type:String,default:"Yuuki"},penguin:{type:Object,default:null},place:{type:Object,default:null},aspect:{type:Number,default:1}},data:function(){return{dialog:!1}},methods:{handleActorClick:function(t){this.$emit("notice-clicked"),this.$router.push({path:"/penguin/"+t})},handlePlaceClick:function(t){this.$router.push({path:"/place/"+t})}}}),x=l(32),component=Object(x.a)(k,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,{attrs:{shaped:!1,elevation:8,color:"black"},on:{click:function(e){t.dialog=!0}}},[e(v.a,{attrs:{src:t.src,"aspect-ratio":t.aspect,cover:"","lazy-src":t.lsrc},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("div",{staticClass:"d-flex align-center justify-center fill-height"},[e(y.a,{attrs:{color:"#000000",width:"100%",height:"100%"}},[e(m.a,{staticStyle:{height:"100%"},attrs:{align:"center"}},[e(d.a,{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[e(_.a,{attrs:{color:"#FFFFFF30"}},[t._v("mdi-penguin")])],1)],1)],1)],1)]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"text-center"},[e(h.a,{attrs:{width:"90%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.a,{attrs:{dark:""}},[e(n.d,{staticClass:"text-h10"},[e(_.a,[t._v("mdi-image-multiple")]),t._v(" Labo Album\n        ")],1),t._v(" "),e(n.c,[e(v.a,{staticStyle:{"max-height":"50vmax"},attrs:{src:t.src,"aspect-ratio":16/14,cover:"","lazy-src":t.lsrc},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("div",{staticClass:"d-flex align-center justify-center fill-height"},[e(y.a,{attrs:{color:"#000000",width:"100%",height:"100%"}},[e(m.a,{staticStyle:{height:"100%"},attrs:{align:"center"}},[e(d.a,{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[e(_.a,{attrs:{color:"#FFFFFF30"}},[t._v("mdi-penguin")])],1)],1)],1)],1)]},proxy:!0}])}),t._v(" "),e(f.a),t._v(" "),e(m.a,{staticClass:"pt-2",attrs:{align:"left"}},[e(d.a,{attrs:{cols:"auto"}},[t.place?e(o.a,{staticClass:"ma-1",attrs:{color:"gray","text-color":"white",Outlined:""},on:{click:function(e){return t.handlePlaceClick(t.place.place_id)}}},[e(c.a,{attrs:{left:""}},[e(_.a,{attrs:{color:"white","text-color":"white"}},[t._v("mdi-store-marker-outline")])],1),t._v("\n                "+t._s(t.place.name_jp)+"\n              ")],1):t._e(),t._v(" "),t.penguin?e(o.a,{staticClass:"ma-1",attrs:{color:"gray","text-color":"white",Outlined:""},on:{click:function(e){return t.handleActorClick(t.penguin.penguin_code)}}},[e(c.a,{attrs:{left:""}},[t.penguin.thumb_src?e(v.a,{attrs:{src:t.penguin.thumb_src}}):t._e()],1),t._v("\n                "+t._s(t.penguin.name_jp)+"\n              ")],1):t._e(),t._v(" "),e(o.a,{staticClass:"ma-1",attrs:{"text-color":"white",outlined:""}},[e(c.a,{attrs:{left:""}},[e(_.a,[t._v("mdi-camera-outline")])],1),t._v("\n                "+t._s(t.publisher)+"\n              ")],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);