webpackJsonp([0],{"46SH":function(t,r,s){t.exports=s.p+"static/img/start.f447249.jpg"},"4RKK":function(t,r,s){t.exports=s.p+"static/img/end.ec9826a.jpg"},"7xbr":function(t,r,s){t.exports=s.p+"static/img/plane.400e080.jpg"},Iisg:function(t,r,s){t.exports=s.p+"static/img/race.39409c2.jpg"},NHnr:function(t,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=s("7+uW"),e={render:function(){var t=this.$createElement,r=this._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},e,!1,function(t){s("gsu9")},null,null).exports,a=s("/ocq"),o=s("jIvI"),c={render:function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{attrs:{id:"window"}},[n("div",{attrs:{id:"list"},on:{click:t.move}},[n("img",{attrs:{src:s("4RKK"),id:"end"}}),t._v(" "),n("img",{attrs:{src:s("Iisg"),id:"race"}}),t._v(" "),n("img",{attrs:{src:s("46SH"),id:"start"}})]),t._v(" "),n("img",{attrs:{src:s("7xbr"),id:"plane"}})]),t._v(" "),n("button",{on:{click:t.start}},[t._v(t._s(t.startOrStop))])])},staticRenderFns:[]};var p=function(t){s("p86o")},u=s("VU/8")(o.a,c,!1,p,"data-v-76a0e072",null).exports;n.a.use(a.a);var l=new a.a({routes:[{path:"/",name:"plane",component:u}]});s("7t+N");n.a.config.productionTip=!1,new n.a({el:"#app",router:l,components:{App:i},template:"<App/>"})},gsu9:function(t,r){},jIvI:function(t,r,s){"use strict";(function(t){r.a={name:"Plane",data:function(){return{startOrStop:"START",direction:0,counter:0,ready:0,timer:0}},methods:{move:function(){var r=parseInt(t("#list").css("top"));r<400?t("#list").animate({top:r+10},10,function(){}):(clearInterval(this.timer),alert("起飞任务完成"),this.startOrStop="START",t("#list").css("top","-100px"))},start:function(){"START"==this.startOrStop?(this.startOrStop="STOP",this.timer=setInterval(function(){var r=parseInt(t("#list").css("top"));r>-100?(r-=1,t("#list").css("top",r.toString()+"px")):t("#list").css("top","-100px")},30)):(this.startOrStop="START",clearInterval(this.timer),t("#list").css("top","-100px"))}}}}).call(r,s("7t+N"))},p86o:function(t,r){}},["NHnr"]);
//# sourceMappingURL=app.c38af6a5dd14f613c972.js.map