webpackJsonp([1],{0:function(t,e,a){t.exports=a("sR30")},FGdg:function(t,e,a){"use strict";var i=a("7+uW"),s=a("iPd/"),n=a.n(s),r=a("EFqf"),o=i["default"].extend({computed:{descMd:function(){return r(this.desc,{sanitize:!0,gfm:!0,smartypants:!0,breaks:!0})},titleMd:function(){return r(this.title,{sanitize:!0})}},props:["title","desc","pic","link","repoLink"]}),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project card",attrs:{href:"www.google.com"}},[a("div",{staticClass:"card-header",domProps:{innerHTML:t._s(t.titleMd)}}),a("img",{staticClass:"card-img-top",attrs:{src:"http://achopra.me/myApps/"+t.pic,alt:t.title}}),void 0!==typeof t.repoLink?a("a",{attrs:{target:"_blank",href:t.repoLink}},[a("img",{staticClass:"github-ribbon",attrs:{src:"//not/asd"}})]):t._e(),a("div",{staticClass:"card-body project-description",domProps:{innerHTML:t._s(t.descMd)}}),a("a",{staticClass:"projBtn btn btn-primary",attrs:{href:t.link}},[t._v("Visit")])])},d=[],l=a("9flA");function p(t){a("P69B")}var u=!1,m=p,f=null,h=null,v=Object(l["a"])(o,c,d,u,m,f,h),g=v.exports,b=i["default"].extend({}),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"load-overlay"},[a("img",{staticClass:"banner loader",attrs:{src:"//not/asd"}})])])},_=[];function j(t){a("iGp5")}var k=!1,L=j,x=null,A=null,C=Object(l["a"])(b,y,_,k,L,x,A),P=C.exports,w=i["default"].extend({directives:{imagesLoaded:n.a},components:{project:g,loader:P},data:function(){return{loading:!0,projAry:[],Header:"Apps.achopra.me"}},mounted:function(){var t=this;fetch("http://achopra.me/myApps/api.json").then(function(t){return t.json()}).then(function(e){t.projAry=e})},methods:{imagesLoaded:function(){this.loading=!1}}}),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page container",attrs:{id:"container"}},[t.loading?a("loader"):t._e(),a("div",{staticClass:"title"},[t._v("Welcome to "+t._s(t.Header))]),a("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded",value:t.imagesLoaded,expression:"imagesLoaded"}],staticClass:"projectList"},t._l(t.projAry,function(t){return a("project",{key:t.title,attrs:{title:t.title,desc:t.desc,pic:t.pic,link:t.link,repoLink:t.repoLink}})})),a("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossorigin:"anonymous"}})],1)},E=[];function G(t){a("viZZ")}var W=!1,F=G,H=null,X=null,Z=Object(l["a"])(w,M,E,W,F,H,X);e["a"]=Z.exports},P69B:function(t,e){},iGp5:function(t,e){},viZZ:function(t,e){}},[0]);
//# sourceMappingURL=app.47692d07.js.map