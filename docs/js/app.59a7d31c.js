webpackJsonp([1],{0:function(t,e,s){t.exports=s("sR30")},FGdg:function(t,e,s){"use strict";var i=s("XB6d"),r=s("EFqf"),o=i["a"].extend({computed:{descMd:function(){return r(this.desc,{sanitize:!0})},titleMd:function(){return r(this.title,{sanitize:!0})}},props:["title","desc","pic"]}),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"project card",attrs:{href:"www.google.com"}},[s("div",{staticClass:"card-header",domProps:{innerHTML:t._s(t.titleMd)}}),s("img",{staticClass:"card-img-top",attrs:{src:"http://achopra.me/myApps/"+t.pic,alt:t.title}}),s("div",{staticClass:"card-body project-description",domProps:{innerHTML:t._s(t.descMd)}}),s("a",{staticClass:"projBtn btn btn-primary"},[t._v("Visit")])])},c=[],a=s("9flA");function p(t){s("P69B")}var l=!1,m=p,u=null,d=null,f=Object(a["a"])(o,n,c,l,m,u,d),h=f.exports,v=[{title:"_Proj#1_",desc:"_lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum_"},{title:"Proj#2",desc:"***lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum***"}],j=i["a"].extend({components:{project:h},data:function(){return{projAry:v,Header:"Apps.achopra.me"}},mounted:function(){var t=this;fetch("http://achopra.me/myApps/api.json").then(function(t){return t.json()}).then(function(e){console.log(e),t.projAry=v})}}),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page container"},[s("div",{staticClass:"title"},[t._v("Welcome to "+t._s(t.Header))]),s("div",{staticClass:"projectList"},t._l(t.projAry,function(t){return s("project",{key:t.title,attrs:{title:t.title,desc:t.desc,pic:t.pic}})})),s("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossorigin:"anonymous"}})])},y=[];function g(t){s("viZZ")}var A=!1,b=g,x=null,C=null,P=Object(a["a"])(j,_,y,A,b,x,C);e["a"]=P.exports},P69B:function(t,e){},viZZ:function(t,e){}},[0]);
//# sourceMappingURL=app.59a7d31c.js.map