(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5,6,7,8,9],{297:function(e,t,n){},298:function(e,t,n){e.exports=n.p+"img/default.84dfaca.webp"},299:function(e,t,n){"use strict";n.r(t),t.default={props:{title:{type:String},dateTitle:{type:Date},remainTime:{type:String,default:null},stepValue:{type:String,default:""},statusColor:{type:String,default:"default"},statusSize:{type:String,default:"is-small"},statusIcon:{type:String,default:"checkbox-blank-circle"},statusIconColor:{type:String,default:"is-white"},hideProgressLine:{type:Boolean,default:!1}}}},300:function(e,t,n){"use strict";n.r(t);n(26);var r={name:"LogoLinguagens",props:{images:{type:Array,default:function(){return[]}},name:{type:String,default:"Logo"},title:{type:String,default:""},titleColor:{type:String,default:""},barColor:{type:String,default:""},background:{type:String,default:"#120e0d"}},data:function(){return{width:500,height:500,paddingX:50,gap:10}},computed:{imageWidth:function(){var e=Math.floor((this.width-(this.images.length*this.gap+2*this.paddingX))/this.images.length);return e>this.width/2?this.width/2:e}},methods:{positionImage:function(e){return this.images.length<2?this.width/4:0===e?this.paddingX:this.paddingX+(this.gap+this.imageWidth)*e}}},o=n(46),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"500",height:"500",preserveAspectRatio:"xMidYMid meet"}},[t("g",[t("title",[e._v(e._s(e.name))]),e._v(" "),t("rect",{attrs:{fill:e.background,width:"500",height:"500"}}),e._v(" "),e._l(e.images,(function(image,n){return t("image",{key:"logo_".concat(n),attrs:{x:e.positionImage(n),y:"".concat(5*(e.images.length>1?10:1)),width:e.imageWidth,height:e.imageWidth,"xlink:href":image}})})),e._v(" "),t("rect",{attrs:{x:"40",y:"260",width:"420",height:"4",fill:e.barColor}}),e._v(" "),t("text",{staticStyle:{"text-anchor":"middle"},attrs:{x:"50%",y:"310","font-size":"3rem",fill:e.titleColor,"font-family":"Aboreto"}},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),t("rect",{attrs:{x:"40",y:"325",width:"420",height:"4",fill:e.barColor}})],2)])}),[],!1,null,null,null);t.default=component.exports},301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){"use strict";n(297)},305:function(e,t,n){"use strict";n.r(t);n(106),n(48),n(31),n(47),n(17),n(81),n(40),n(82);var r=n(32);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({name:"TimelineItem"},n(299).default),l=c,d=(n(304),n(46)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"timeline"},[t("div",{staticClass:"timeline-tag"},[t("div",{class:"timeline-badge ".concat(e.statusSize," ").concat("default"!==e.statusColor?e.statusColor:"")},[""!==e.stepValue&&"default"===e.statusColor?t("span",[e._v(e._s(e.stepValue))]):t("b-icon",{attrs:{type:e.statusIconColor,icon:e.statusIcon,size:"large"===e.statusSize?"":e.statusSize}})],1),e._v(" "),e.hideProgressLine?e._e():t("div",{staticClass:"progress-line",class:e.statusColor})]),e._v(" "),t("div",{staticClass:"timeline-panel"},[t("div",{staticClass:"timeline-heading"},[e._t("title"),e._v(" "),e.title?t("h4",{staticClass:"timeline-title is-size-5"},[e._v("\n        "+e._s(e.title)+"\n      ")]):e._e()],2),e._v(" "),t("div",{staticClass:"timeline-body"},[e._t("default")],2)])])}),[],!1,null,"1161f30a",null);t.default=component.exports},306:function(e,t,n){"use strict";n(301)},307:function(e,t,n){n(308)},308:function(e,t,n){"use strict";var r=n(2),o=n(8),c=n(3),l=n(25),d=n(6),f=n(41),m=n(133),h=n(13),v=n(49),_=n(134),y=n(203),j=n(7),w=n(20),x=j("replace"),O=TypeError,L=c("".indexOf),C=c("".replace),S=c("".slice),z=Math.max,A=function(e,t,n){return n>e.length?-1:""===t?n:L(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,c,j,P,k,M,E,R,I=l(this),T=0,D=0,V="";if(!f(e)){if((n=m(e))&&(r=h(l(_(e))),!~L(r,"g")))throw O("`.replaceAll` does not allow non-global regexes");if(c=v(e,x))return o(c,e,I,t);if(w&&n)return C(h(I),e,t)}for(j=h(I),P=h(e),(k=d(t))||(t=h(t)),M=P.length,E=z(1,M),T=A(j,P,0);-1!==T;)R=k?h(t(P,T,j)):y(P,j,T,[],void 0,t),V+=S(j,D,T)+R,D=T+M,T=A(j,P,T+E);return D<j.length&&(V+=S(j,D)),V}})},309:function(e,t,n){e.exports=n.p+"img/logoVue.ac7dc62.png"},310:function(e,t,n){"use strict";n(302)},311:function(e,t,n){e.exports=n.p+"img/css.b1ea069.png"},312:function(e,t,n){e.exports=n.p+"img/github.c9f36e3.png"},313:function(e,t,n){e.exports=n.p+"img/html.47f7fff.png"},314:function(e,t,n){e.exports=n.p+"img/javascript.2b08960.png"},315:function(e,t,n){e.exports=n.p+"img/mysql.bfce1c3.png"},316:function(e,t,n){e.exports=n.p+"img/react.f3e6489.png"},317:function(e,t,n){e.exports=n.p+"img/vuejs.1fbf3e2.png"},318:function(e,t,n){"use strict";n(303)},319:function(e,t,n){"use strict";n.r(t);var r=n(124);var o=n(135),c=n(101);function l(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(o.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(204);var d={name:"LanguagesKnow",data:function(){return{languagesList:[{path:n(311),alt:"Logo CSS"},{path:n(312),alt:"Logo Github"},{path:n(313),alt:"Logo HTML"},{path:n(314),alt:"Logo JS"},{path:n(315),alt:"Logo MySQL"},{path:n(316),alt:"Logo Reacjs"},{path:n(317),alt:"Logo Vuejs"}]}},computed:{groupLanguageList:function(){for(var e=l(this.languagesList),t=[];e.length;)t.push(e.splice(0,4));return t}}},f=(n(318),n(46)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("aside",[t("h1",{staticClass:"is-size-1 is-flex is-justify-content-center"},[e._v("\n    Conhecimentos\n  ")]),e._v(" "),e._l(e.languagesList,(function(e,n){return t("img",{key:"logo_".concat(n),staticClass:"pl-3 images",attrs:{src:e.path,alt:e.alt}})}))],2)}),[],!1,null,"35a35de3",null);t.default=component.exports},320:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e._self._c;return t("article",[t("h1",{staticClass:"is-size-1 is-flex is-justify-content-center"},[e._v("\n    Bem Vindo(a)!\n  ")]),e._v(" "),t("section",{staticClass:"is-flex pl-4"},[t("img",{attrs:{src:n(298),alt:"Mulher negra"}}),e._v(" "),t("h2",{staticClass:"is-size-1 is-flex is-justify-content-center"},[e._v("\n      RUTE ÁVILA\n    ")])])])}],o={name:"AboutMe"},c=(n(306),n(46)),component=Object(c.a)(o,(function(){this._self._c;return this._m(0)}),r,!1,null,"7ae2c885",null);t.default=component.exports},321:function(e,t,n){"use strict";n.r(t);n(31),n(50),n(106),n(27),n(68),n(307),n(26),n(48),n(47),n(17),n(81),n(40),n(82);var r=n(9),o=n(32),c=(n(51),n(45));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"RepositoriesProjects",components:{Logo:n(300).default},data:function(){return{isLoad:!1}},computed:d({},Object(c.d)({repoList:"getRepoList"})),beforeMount:function(){this.loadRepoList()},methods:d(d({},Object(c.c)({listRequest:"repoListRequestAction"})),{},{loadRepoList:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoad=!0,t.next=3,e.listRequest();case 3:e.isLoad=!1;case 4:case"end":return t.stop()}}),t)})))()},defaultLogo:function(e,t){e.target.src=n(298),t.status="error"}})},m=(n(310),n(46)),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("aside",[t("h1",{staticClass:"is-size-1 is-flex is-justify-content-center"},[e._v("\n    Conheça meus projetos\n  ")]),e._v(" "),t("section",{staticClass:"is-flex is-flex-wrap-wrap is-justify-content-center"},[e._l(e.repoList,(function(r,o){return t("nav",{key:"repo_".concat(o),staticClass:"card"},[t("a",{attrs:{href:r.html_url,role:"link",rel:"search external","aria-label":r.description,target:"_blank"}},["Vue"!==r.language?t("img",{attrs:{src:"https://raw.githubusercontent.com/".concat(r.full_name,"/").concat(r.default_branch,"/logo.webp"),width:"200px",alt:r.name.replaceAll("_"," "),title:r.name.replaceAll("_"," ")},on:{error:function(t){return e.defaultLogo(t,r)}}}):t("Logo",{staticClass:"logo",attrs:{name:r.name.replaceAll("_"," "),images:[n(309)],title:r.name.replaceAll("_"," "),"title-color":"rgb(72 199 142)","bar-color":"rgb(72 199 142)"}})],1)])})),e._v(" "),e._l(15,(function(n){return t("nav",{directives:[{name:"show",rawName:"v-show",value:e.isLoad,expression:"isLoad"}],key:"repo_load_".concat(n),staticClass:"card"},[t("b-skeleton",{attrs:{width:"200px",height:"200px"}})],1)}))],2)])}),[],!1,null,"4480e734",null);t.default=component.exports;installComponents(component,{Logo:n(300).default})},322:function(e,t,n){"use strict";n.r(t);var r={name:"TrajectoriesLife"},o=n(46),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("aside",[t("h1",{staticClass:"is-size-1 is-flex is-justify-content-center"},[e._v("\n    Quem sou eu?\n  ")]),e._v(" "),t("timeline-item",{attrs:{"status-icon":"school",title:"Ensino Médio | 2013 - 2015","status-size":"large","status-color":"has-background-primary"}},[t("p",{staticClass:"has-text-justified has-text-quinary"},[e._v('\n      Desde os meus 6 anos, quando eu aprendi a ler, eu gostava de aprender\n      sobre as coisas, e minha brincadeira favorita era ensinar um "público"\n      invisível que assistia eu ministrar aulas riscando em um portão de ferro\n      da minha casa. Mas até então, não tinha vontade de ser professora, mas\n      sempre tive paixão pelos estudos e até hoje me arrepio de orgulho quando\n      vejo pessoas que venceram e conquistaram coisas com a educação.\n      Passaram-se os anos e ganhei meu primeiro computador, nesse tempo a\n      primeira linguagem que eu tive contato foi o HTML. Mas no ensino médio\n      eu dei passos em direção a outros caminhos, eu pensei querer se\n      enfemeira, até caminhei uma parte boa dessa trilha, porém, oportunidades\n      de se tornar uma dev surgiram após essa época da minha vida.\n    ')])]),e._v(" "),t("timeline-item",{attrs:{"status-icon":"airplane",title:"Intercâmbio Linguístico | 2018","step-value":"1","status-size":"large","status-color":"has-background-primary"}},[t("p",{staticClass:"has-text-justified has-text-quinary"},[e._v("\n      Essa história é muito boa e tenho muito orgulho, eu consegui através dos\n      meus estudos! O que eu gosto de frizar é: ESTUDOS! Eram oito mil alunos\n      incritos no Academia Enem para 100 vagas de intercâmbio para a Espanha e\n      Inglaterra e eu consegui. Me orgulho muito disso. Nesse intercâmbio\n      aprendi um pouco de espanhol e de bônus conheci gente do mundo todo.\n      Apesar de curta foi uma experiência incrível. Mas tive contato com gente\n      de diversas áreas e pude ter muitas conversas legais sobre algumas\n      carreiras profissionais. Fui com uma bagagem de roupas e voltei com\n      muito mais que isso. Eu tinha que começar a traçar um plano de carreira!\n    ")])]),e._v(" "),t("timeline-item",{attrs:{"status-icon":"account-hard-hat",title:"Primeiro Emprego | 2020","step-value":"3","status-size":"large","status-color":"has-background-primary"}},[t("p",{staticClass:"has-text-justified has-text-justified has-text-quinary"},[e._v("\n      Meu primeiro emprego foi em uma fábrica de calçados. Eu fiz parte de uma\n      turma de aprendizes que trabalhava na produção e eu amava cada dia de\n      trabalho e nossas aulas durante a tarde. O projeto final foi desenhar e\n      confeccionar um modelo novo de sapato para o desfile final. Apesar de\n      ter sido uma experiência legal, foi durante esse período que decidi\n      começar na faculdade de Análise e Desenvolvimento de Sistemas, eu estava\n      o tempo todo pensando em construir uma carreira sólida que me abrisse\n      oportunidades não só no Brasil e que eu fizesse parte de um grupo de\n      profissionais que fazem trabalhos incríveis que facilitam e revolucionam\n      a vida das pessoas através da tecnologia.\n    ")])]),e._v(" "),t("timeline-item",{attrs:{"status-icon":"school",title:"Graduação | 2020 - Atualmente","step-value":"1","status-size":"large","status-color":"has-background-primary"}},[t("p",{staticClass:"has-text-justified has-text-quinary"},[e._v("\n      Durante a graduação eu comecei a fazer projetos, principalmente focados\n      em front-end, tive ajuda de profissionais incríveis que estão a muito\n      tempo na carreira, participei de bootcamps e cursos voltados para área\n      que me fizeram abrir muito mais a mente e saber das possíbilidades do\n      que nós da área tech podemos ser capazes de fazer e o quanto nosso\n      trabalho é importante para todas as áreas.\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TimelineItem:n(305).default})},323:function(e,t,n){"use strict";n.r(t);var r={name:"LibrasWidget",beforeMount:function(){new window.VLibras.Widget("https://vlibras.gov.br/app")}},o=n(46),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"enabled",attrs:{vw:""}},[e("div",{staticClass:"active",attrs:{"vw-access-button":""}}),this._v(" "),e("div",{attrs:{"vw-plugin-wrapper":""}},[e("div",{staticClass:"vw-plugin-top-wrapper"})])])}],!1,null,null,null);t.default=component.exports},324:function(e,t,n){},325:function(e,t,n){"use strict";n(324)},326:function(e,t,n){"use strict";n.r(t);var r=n(320),o=n(321),c=n(319),l=n(322),d=n(323),f={name:"IndexPage",components:{About:r.default,Repositories:o.default,Languages:c.default,Trajectories:l.default,Libras:d.default}},m=(n(325),n(46)),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("section",[t("About"),e._v(" "),t("Trajectories"),e._v(" "),t("Repositories"),e._v(" "),t("Languages"),e._v(" "),t("Libras")],1)}),[],!1,null,"634d8a91",null);t.default=component.exports;installComponents(component,{About:n(320).default,Trajectories:n(322).default,Repositories:n(321).default,Languages:n(319).default,Libras:n(323).default})}}]);