exports.ids = [8,6,7];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("446f7e24", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Script", function() { return Script; });
const Script = {
  props: {
    title: {
      type: String
    },
    dateTitle: {
      type: Date
    },
    remainTime: {
      type: String,
      default: null
    },
    stepValue: {
      type: String,
      default: ""
    },
    statusColor: {
      type: String,
      default: "default"
    },
    statusSize: {
      type: String,
      default: "is-small"
    },
    statusIcon: {
      type: String,
      default: "checkbox-blank-circle"
    },
    statusIconColor: {
      type: String,
      default: "is-white"
    },
    hideProgressLine: {
      type: Boolean,
      default: false
    }
  }
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineItem_vue_vue_type_style_index_0_id_7ce7e144_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineItem_vue_vue_type_style_index_0_id_7ce7e144_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineItem_vue_vue_type_style_index_0_id_7ce7e144_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineItem_vue_vue_type_style_index_0_id_7ce7e144_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineItem_vue_vue_type_style_index_0_id_7ce7e144_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".timeline[data-v-7ce7e144]{display:flex;flex-flow:row;grid-gap:10px;gap:10px}@media screen and (max-width:768px){.timeline[data-v-7ce7e144]{grid-gap:0;gap:0}}.timeline-tag[data-v-7ce7e144]{display:flex;flex-flow:column;align-items:center}.timeline-tag .timeline-badge[data-v-7ce7e144]{background-color:#fcfcfc;color:#000;border-radius:50%;font-weight:500;height:23px;width:23px;text-align:center;z-index:10;display:flex;align-items:center;justify-content:center}.timeline-tag .timeline-badge.large[data-v-7ce7e144]{height:30px;width:30px}.timeline-tag .timeline-badge.primary[data-v-7ce7e144]{color:#000!important;background-color:#000!important;border:2px solid #000!important}.timeline-tag .timeline-badge.success[data-v-7ce7e144]{color:#f595c0!important;background-color:#f595c0!important;border:2px solid #f595c0!important}.timeline-tag .timeline-badge.warning[data-v-7ce7e144]{color:#fff!important;background-color:#ffe08a!important;border:2px solid #ffe08a!important}.timeline-tag .timeline-badge.danger[data-v-7ce7e144]{color:#fff!important;background-color:#f14668!important;border:2px solid #f14668!important}.timeline-tag .timeline-badge.info[data-v-7ce7e144]{color:#fff!important;background-color:#3e8ed0!important;border:2px solid #3e8ed0!important}.timeline-tag .progress-line[data-v-7ce7e144]{width:3px;display:flex;flex:1}.timeline-panel[data-v-7ce7e144]{display:flex;flex-flow:column;flex:1;padding:0 20px 20px 30px;max-width:90vw}@media screen and (max-width:768px){.timeline-panel[data-v-7ce7e144]{padding:0}}.timeline-heading[data-v-7ce7e144]{display:flex;flex-direction:row;align-items:center}.timeline-title[data-v-7ce7e144]{font-weight:600;margin-top:4px;color:inherit}@media screen and (max-width:768px){.timeline-title[data-v-7ce7e144]{padding-left:10px}}.timeline-body[data-v-7ce7e144]{padding:10px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TimelineItem/TimelineItem.vue?vue&type=template&id=7ce7e144&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', {
    staticClass: "timeline"
  }, [_vm._ssrNode("<div class=\"timeline-tag\" data-v-7ce7e144>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, `timeline-badge ${_vm.statusSize} ${_vm.statusColor !== 'default' ? _vm.statusColor : ''}`) + " data-v-7ce7e144>", "</div>", [_vm.stepValue !== '' && _vm.statusColor === 'default' ? _vm._ssrNode("<span data-v-7ce7e144>", "</span>", [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.stepValue)))], 2) : _c('b-icon', {
    attrs: {
      "type": _vm.statusIconColor,
      "icon": _vm.statusIcon,
      "size": _vm.statusSize === 'large' ? '' : _vm.statusSize
    }
  })], 1), _vm._ssrNode(" " + (!_vm.hideProgressLine ? "<div" + _vm._ssrClass("progress-line", _vm.statusColor) + " data-v-7ce7e144></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"timeline-panel\" data-v-7ce7e144>", "</div>", [_vm._ssrNode("<div class=\"timeline-heading\" data-v-7ce7e144>", "</div>", [_vm._t("title"), _vm._ssrNode(" " + (_vm.title ? "<h4 class=\"timeline-title is-size-5\" data-v-7ce7e144>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h4>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"timeline-body\" data-v-7ce7e144>", "</div>", [_vm._t("default")], 2)], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TimelineItem/TimelineItem.vue?vue&type=template&id=7ce7e144&scoped=true&

// EXTERNAL MODULE: ./components/TimelineItem/TimelineItem.script.js
var TimelineItem_script = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TimelineItem/TimelineItem.vue?vue&type=script&lang=js&

/* harmony default export */ var TimelineItemvue_type_script_lang_js_ = ({
  name: "TimelineItem",
  ...TimelineItem_script["Script"]
});
// CONCATENATED MODULE: ./components/TimelineItem/TimelineItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var TimelineItem_TimelineItemvue_type_script_lang_js_ = (TimelineItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/TimelineItem/TimelineItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  TimelineItem_TimelineItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7ce7e144",
  "0b19d96b"
  
)

/* harmony default export */ var TimelineItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Trajectories.vue?vue&type=template&id=067e0980&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('aside', [_vm._ssrNode("<h1 class=\"is-size-1 is-flex is-justify-content-center\">Quem sou eu?</h1> "), _c('timeline-item', {
    attrs: {
      "statusIcon": "school",
      "title": "Ensino Médio | 2013 - 2015",
      "statusSize": "large",
      "statusColor": "has-background-primary"
    }
  }, [_c('p', {
    staticClass: "has-text-justified has-text-quinary"
  }, [_vm._v("\n      Desde os meus 6 anos, quando eu aprendi a ler, eu gostava de aprender\n      sobre as coisas, e minha brincadeira favorita era ensinar um \"público\"\n      invisível que assistia eu ministrar aulas riscando em um portão de ferro\n      da minha casa. Mas até então, não tinha vontade de ser professora, mas\n      sempre tive paixão pelos estudos e até hoje me arrepio de orgulho quando\n      vejo pessoas que venceram e conquistaram coisas com a educação.\n      Passaram-se os anos e ganhei meu primeiro computador, nesse tempo a\n      primeira linguagem que eu tive contato foi o HTML. Mas no ensino médio\n      eu dei passos em direção a outros caminhos, eu pensei querer se\n      enfemeira, até caminhei uma parte boa dessa trilha, porém, oportunidades\n      de se tornar uma dev surgiram após essa época da minha vida.\n    ")])]), _vm._ssrNode(" "), _c('timeline-item', {
    attrs: {
      "statusIcon": "airplane",
      "title": "Intercâmbio Linguístico | 2018",
      "stepValue": "1",
      "statusSize": "large",
      "statusColor": "has-background-primary"
    }
  }, [_c('p', {
    staticClass: "has-text-justified has-text-quinary"
  }, [_vm._v("\n      Essa história é muito boa e tenho muito orgulho, eu consegui através dos\n      meus estudos! O que eu gosto de frizar é: ESTUDOS! Eram oito mil alunos\n      incritos no Academia Enem para 100 vagas de intercâmbio para a Espanha e\n      Inglaterra e eu consegui. Me orgulho muito disso. Nesse intercâmbio\n      aprendi um pouco de espanhol e de bônus conheci gente do mundo todo.\n      Apesar de curta foi uma experiência incrível. Mas tive contato com gente\n      de diversas áreas e pude ter muitas conversas legais sobre algumas\n      carreiras profissionais. Fui com uma bagagem de roupas e voltei com\n      muito mais que isso. Eu tinha que começar a traçar um plano de carreira!\n    ")])]), _vm._ssrNode(" "), _c('timeline-item', {
    attrs: {
      "statusIcon": "account-hard-hat",
      "title": "Primeiro Emprego | 2020",
      "stepValue": "3",
      "statusSize": "large",
      "statusColor": "has-background-primary"
    }
  }, [_c('p', {
    staticClass: "has-text-justified has-text-justified has-text-quinary"
  }, [_vm._v("\n      Meu primeiro emprego foi em uma fábrica de calçados. Eu fiz parte de uma\n      turma de aprendizes que trabalhava na produção e eu amava cada dia de\n      trabalho e nossas aulas durante a tarde. O projeto final foi desenhar e\n      confeccionar um modelo novo de sapato para o desfile final. Apesar de\n      ter sido uma experiência legal, foi durante esse período que decidi\n      começar na faculdade de Análise e Desenvolvimento de Sistemas, eu estava\n      o tempo todo pensando em construir uma carreira sólida que me abrisse\n      oportunidades não só no Brasil e que eu fizesse parte de um grupo de\n      profissionais que fazem trabalhos incríveis que facilitam e revolucionam\n      a vida das pessoas através da tecnologia.\n    ")])]), _vm._ssrNode(" "), _c('timeline-item', {
    attrs: {
      "statusIcon": "school",
      "title": "Graduação | 2020 - Atualmente",
      "stepValue": "1",
      "statusSize": "large",
      "statusColor": "has-background-primary"
    }
  }, [_c('p', {
    staticClass: "has-text-justified has-text-quinary"
  }, [_vm._v("\n      Durante a graduação eu comecei a fazer projetos, principalmente focados\n      em front-end, tive ajuda de profissionais incríveis que estão a muito\n      tempo na carreira, participei de bootcamps e cursos voltados para área\n      que me fizeram abrir muito mais a mente e saber das possíbilidades do\n      que nós da área tech podemos ser capazes de fazer e o quanto nosso\n      trabalho é importante para todas as áreas. \n    ")])])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Trajectories.vue?vue&type=template&id=067e0980&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Trajectories.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5a2489f9"
  
)

/* harmony default export */ var Trajectories = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TimelineItem: __webpack_require__(41).default})


/***/ })

};;
//# sourceMappingURL=trajectories.js.map