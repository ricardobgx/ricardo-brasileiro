(function(e){function t(t){for(var s,i,r=t[0],c=t[1],l=t[2],f=0,d=[];f<r.length;f++)i=r[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},o=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"06af":function(e){e.exports=JSON.parse('{"knowledges_typed":[{"section":0,"sectionName":"Linguagens de programação","knowledges":[{"name":"Linguagem C","icon":"fab fa-cuttlefish"},{"name":"JavaScript","icon":"fab fa-js-square"},{"name":"Java","icon":"fab fa-java"},{"name":"Python","icon":"fab fa-python"}]},{"section":1,"sectionName":"Linguagens web","knowledges":[{"name":"HTML","icon":"fab fa-html5"},{"name":"CSS","icon":"fab fa-css3-alt"}]},{"section":2,"sectionName":"Frameworks","knowledges":[{"name":"React JS","icon":"fab fa-react"},{"name":"React Native","icon":"fab fa-react"},{"name":"Vue JS","icon":"fab fa-vuejs"}]},{"section":3,"sectionName":"Bancos de dados","knowledges":[{"name":"PostgreSQL","icon":"fas fa-database"},{"name":"MongoDB","icon":"fas fa-database"}]}],"knowledges":[{"name":"Linguagem C","icon":"fab fa-cuttlefish"},{"name":"JavaScript","icon":"fab fa-js-square"},{"name":"Java","icon":"fab fa-java"},{"name":"Python","icon":"fab fa-python"},{"name":"HTML","icon":"fab fa-html5"},{"name":"CSS","icon":"fab fa-css3-alt"},{"name":"React JS","icon":"fab fa-react"},{"name":"React Native","icon":"fab fa-react"},{"name":"Vue JS","icon":"fab fa-vuejs"},{"name":"PostgreSQL","icon":"fas fa-database"},{"name":"MongoDB","icon":"fas fa-database"}]}')},"1f55":function(e,t,a){"use strict";a("9617")},3262:function(e,t,a){"use strict";a("87d2")},"3a19":function(e,t,a){e.exports=a.p+"img/profile.10294ee9.jpg"},"3a80":function(e,t,a){},"4e5e":function(e,t,a){"use strict";a("68a0")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("NavBar"),a("article",[a("router-view"),a("Theme")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav-bar"},[e._m(0),a("input",{staticClass:"toggle-actions",attrs:{type:"checkbox",name:"",id:"toggle-actions"}}),a("div",{staticClass:"nav-bar-actions",on:{click:function(t){return e.checkRoute()}}},[a("router-link",{class:this.page+"-home",attrs:{to:"/home"}},[e._v("Início")]),a("router-link",{class:this.page+"-knowledges",attrs:{to:"/knowledges"}},[e._v("Conhecimentos")]),a("router-link",{class:this.page+"-projects",attrs:{to:"/projects"}},[e._v("Projetos")])],1),e._m(1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"logo",attrs:{href:"/"}},[a("div",[a("p",{staticClass:"initial"},[e._v("R")]),a("p",{staticClass:"full-name"},[e._v("icardo")]),a("p",{staticClass:"initial"},[e._v(" B")]),a("p",{staticClass:"full-name"},[e._v("rasileiro")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"label-toggle-actions",attrs:{for:"toggle-actions"}},[a("div",[a("div",{staticClass:"toggle-bar"}),a("div",{staticClass:"toggle-bar"}),a("div",{staticClass:"toggle-bar"})])])}],c={name:"NavBar",data:function(){return{page:"home"}},beforeMount:function(){this.checkRoute()},methods:{checkRoute:function(){var e=window.location.hash,t=e.substr(2,e.length);this.page=t}}},l=c,u=(a("4e5e"),a("2877")),f=Object(u["a"])(l,i,r,!1,null,"0cff72da",null),d=f.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Theme"},[a("button",{on:{click:function(t){return e.verifyTheme()}}},[a("i",{class:"fas fa-"+e.icon})])])},m=[],v=(a("d81d"),{name:"Theme",data:function(){return{icon:"sun",theme:"dark",lightColors:[{property:"--base-color",value:"#ffffff"},{property:"--theme-color",value:"#0ead69"},{property:"--shadow-color",value:"#bbbbbb"},{property:"--text-color",value:"#585858"}],darkColors:[{property:"--base-color",value:"#1b1b1b"},{property:"--theme-color",value:"#0ead69"},{property:"--shadow-color",value:"#0c0c0c"},{property:"--text-color",value:"#d3d3d3"}]}},methods:{setTheme:function(e){e.map((function(e){document.documentElement.style.setProperty(e.property,e.value)}))},verifyTheme:function(){"light"==this.theme?(this.setTheme(this.darkColors),this.theme="dark",this.icon="sun"):(this.setTheme(this.lightColors),this.theme="light",this.icon="moon")}}}),b=v,h=(a("85b7"),Object(u["a"])(b,p,m,!1,null,"dba24778",null)),g=h.exports,_={name:"App",components:{NavBar:d,Theme:g}},C=_,w=(a("034f"),Object(u["a"])(C,n,o,!1,null,null,null)),k=w.exports,j=a("8c4f"),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home my-section",attrs:{id:"home"}},[a("Profile"),a("Presentation")],1)},P=[],x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"profile"},[s("div",{staticClass:"profile-img"},[s("img",{attrs:{src:a("3a19"),alt:""}})]),s("div",{staticClass:"profile-info"},[s("div",{staticClass:"hobbies"},[s("p",[e._v("Hobbies")]),s("div",[s("p",[e._v("Jogos")]),s("p",[e._v("Música")])])]),s("div",{staticClass:"interests"},[s("p",[e._v("Interesses")]),s("div",[s("p",[e._v("Lógica")]),s("p",[e._v("Design")])])])])])}],S={name:"Profile"},L=S,T=(a("1f55"),Object(u["a"])(L,x,O,!1,null,"9070c94a",null)),E=T.exports,J=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"presentation"},[a("div",{staticClass:"description"},[a("p",[e._v(' Olá, seja bem-vindo ao meu site, aqui você vai encontrar mais informações sobre mim. Você pode ir na aba de “Conhecimentos”, onde descrevo as linguagens e frameworks que utilizo em desenvolvimento de aplicações, já na área de "Projetos" você vai encontrar alguns projetos onde apliquei meus conhecimentos. Então fique à vontade para explorar mais :) ')]),a("p",[e._v(" Agora uma apresentação mais detalhada, meu nome é José Ricardo e sou aluno do curso superior em Análise e Desenvolvimento de Sistemas no Instituto Federal da Paraíba. Gosto de trabalhar com tecnologias web sejam front ou back-end, também trabalho com linguagens desktop e Bancos de Dados Relacionais e NoSQL. ")]),a("p",[e._v(" Além de ver alguns dos meus projetos mais populares, você também pode ver outros repositórios meus, além de postagens que faço no LinkedIn e no Twitter, basta clicar: ")])]),a("div",{staticClass:"social-medias"},[a("a",{attrs:{href:"https://github.com/RicardoBrasileiro"}},[a("i",{staticClass:"fab fa-github"}),e._v("GitHub")]),a("a",{attrs:{href:"https://www.linkedin.com/in/ricarbrg/"}},[a("i",{staticClass:"fab fa-linkedin"}),e._v("LinkedIn")]),a("a",{attrs:{href:"https://twitter.com/ricarbrg/"}},[a("i",{staticClass:"fab fa-twitter"}),e._v("Twitter ")]),a("a",{attrs:{href:"https://www.instagram.com/ricarbrg/"}},[a("i",{staticClass:"fab fa-instagram"}),e._v("Instagram")])])])}],$={name:"Presentation"},R=$,B=(a("dd0f"),Object(u["a"])(R,J,N,!1,null,"733b7a7d",null)),M=B.exports,q={name:"Home",components:{Profile:E,Presentation:M}},I=q,A=(a("8b71"),Object(u["a"])(I,y,P,!1,null,null,null)),D=A.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"knowledges my-section",attrs:{id:"knowledges"}},[a("div",{staticClass:"all-knowledges"},e._l(e.knowledges,(function(t){return a("div",{key:t.name},[a("div",{staticClass:"knowledge-section"},[a("p",{staticClass:"knowledge-section-name"},[e._v(" "+e._s(t.sectionName)+" ")]),e._l(t.knowledges,(function(t){return a("div",{key:t.name},[a("div",{staticClass:"knowledge"},[a("i",{class:"knowledge-icon "+t.icon,attrs:{title:t.name}}),a("p",{staticClass:"knowledge-name"},[e._v(e._s(t.name))])])])}))],2)])})),0)])},Q=[],V=a("06af"),F={name:"Knowledges",data:function(){return{knowledges:V.knowledges_typed}}},G=F,z=(a("e8a8"),Object(u["a"])(G,H,Q,!1,null,"794b2443",null)),K=z.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projects my-section",attrs:{id:"projects"}},[a("div",{staticClass:"section-cards-box"},[a("button",{staticClass:"btn-slide",on:{click:function(t){return e.slide("left")}}},[a("i",{staticClass:"fas fa-arrow-left"})]),a("div",{staticClass:"section-cards project-cards"},[a("div",e._l(e.projects,(function(t){return a("div",{key:t.name,staticClass:"cards"},[a("div",{staticClass:"project-card"},[a("div",{staticClass:"section-card-info"},[a("p",{staticClass:"section-card-title"},[e._v(e._s(t.name))]),a("p",{staticClass:"section-card-desc"},[e._v(e._s(t.description))])]),a("a",{staticClass:"section-card-link",attrs:{href:t.clone_url}},[e._v("Acessar repositório")])])])})),0)]),a("div",{staticClass:"slide-buttons"},[a("button",{staticClass:"btn-slide",on:{click:function(t){return e.slide("left")}}},[a("i",{staticClass:"fas fa-arrow-left"})]),a("button",{staticClass:"btn-slide",on:{click:function(t){return e.slide("right")}}},[a("i",{staticClass:"fas fa-arrow-right"})])]),a("button",{staticClass:"btn-slide",on:{click:function(t){return e.slide("right")}}},[a("i",{staticClass:"fas fa-arrow-right"})])])])},U=[],X=(a("a4d3"),a("e01a"),a("b0c0"),a("ac1f"),a("1276"),a("a15b"),a("bc3a")),Y=a.n(X),Z={name:"Projects",data:function(){return{projects:[]}},created:function(){var e=this;Y.a.get("https://api.github.com/users/RicardoBrasileiro/repos").then((function(t){var a=t.data;a.map((function(t){var a=t.description;if(a&&-1!=a.indexOf("(PP)")){a=a.substr(0,a.indexOf("(PP)"));var s=t.name,n=s.split("-");t.name=n.join(" "),t.description=a,e.projects.push(t)}}))}))},methods:{slide:function(e){var t=document.getElementsByClassName("project-cards")[0],a=window.innerWidth;a>700?"right"==e?t.scrollLeft+=382:"left"==e&&(t.scrollLeft-=382):"right"==e?t.scrollLeft+=332:"left"==e&&(t.scrollLeft-=332)}}},ee=Z,te=(a("3262"),Object(u["a"])(ee,W,U,!1,null,"16047898",null)),ae=te.exports;s["a"].use(j["a"]);var se=new j["a"]({routes:[{path:"/home",component:D},{path:"/knowledges",component:K},{path:"/projects",component:ae},{path:"/",redirect:"/home"}]});s["a"].config.productionTip=!1,new s["a"]({router:se,render:function(e){return e(k)}}).$mount("#app")},"68a0":function(e,t,a){},"77ad":function(e,t,a){},"85b7":function(e,t,a){"use strict";a("bbc3")},"85ec":function(e,t,a){},"87d2":function(e,t,a){},"88d7":function(e,t,a){},"8b71":function(e,t,a){"use strict";a("88d7")},9617:function(e,t,a){},bbc3:function(e,t,a){},dd0f:function(e,t,a){"use strict";a("77ad")},e8a8:function(e,t,a){"use strict";a("3a80")}});
//# sourceMappingURL=app.9f65af5e.js.map