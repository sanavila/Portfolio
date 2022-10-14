exports.ids = [9,1,2,3,4,5,6,7,8];
exports.modules = Array(32).concat([
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.84dfaca.webp";

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=1dc61c78&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "version": "1.0",
      "width": "500",
      "height": "500",
      "preserveAspectRatio": "xMidYMid meet"
    }
  }, [_vm._ssrNode("<g><title>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</title> <rect" + _vm._ssrAttr("fill", _vm.background) + " width=\"500\" height=\"500\"></rect> " + _vm._ssrList(_vm.images, function (image, index) {
    return "<image" + _vm._ssrAttr("x", _vm.positionImage(index)) + _vm._ssrAttr("y", `${5 * (_vm.images.length > 1 ? 10 : 1)}`) + _vm._ssrAttr("width", _vm.imageWidth) + _vm._ssrAttr("height", _vm.imageWidth) + _vm._ssrAttr("xlink:href", image) + "></image>";
  }) + " <rect x=\"40\" y=\"260\" width=\"420\" height=\"4\"" + _vm._ssrAttr("fill", _vm.barColor) + "></rect> <text x=\"50%\" y=\"310\" font-size=\"3rem\"" + _vm._ssrAttr("fill", _vm.titleColor) + " font-family=\"Aboreto\" style=\"text-anchor: middle\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.title) + "\n    ") + "</text> <rect x=\"40\" y=\"325\" width=\"420\" height=\"4\"" + _vm._ssrAttr("fill", _vm.barColor) + "></rect></g>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=1dc61c78&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=script&lang=js&
/* harmony default export */ var Logovue_type_script_lang_js_ = ({
  name: "Logo",
  props: {
    images: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: "Logo"
    },
    title: {
      type: String,
      default: ""
    },
    titleColor: {
      type: String,
      default: ""
    },
    barColor: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: "#120e0d"
    }
  },

  data() {
    return {
      width: 500,
      height: 500,
      paddingX: 50,
      gap: 10
    };
  },

  computed: {
    imageWidth() {
      const value = Math.floor((this.width - (this.images.length * this.gap + 2 * this.paddingX)) / this.images.length);
      return value > this.width / 2 ? this.width / 2 : value;
    }

  },
  methods: {
    positionImage(index) {
      return this.images.length < 2 ? this.width / 4 : index === 0 ? this.paddingX : this.paddingX + (this.gap + this.imageWidth) * index;
    }

  }
});
// CONCATENATED MODULE: ./components/Logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Logovue_type_script_lang_js_ = (Logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Logo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "795cbc3f"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e7687062", content, true, context)
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d1c8bdc4", content, true, context)
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0524760b", content, true, context)
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineItem_vue_vue_type_style_index_0_id_7ce7e144_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineItem_vue_vue_type_style_index_0_id_7ce7e144_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineItem_vue_vue_type_style_index_0_id_7ce7e144_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineItem_vue_vue_type_style_index_0_id_7ce7e144_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineItem_vue_vue_type_style_index_0_id_7ce7e144_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".timeline[data-v-7ce7e144]{display:flex;flex-flow:row;grid-gap:10px;gap:10px}@media screen and (max-width:768px){.timeline[data-v-7ce7e144]{grid-gap:0;gap:0}}.timeline-tag[data-v-7ce7e144]{display:flex;flex-flow:column;align-items:center}.timeline-tag .timeline-badge[data-v-7ce7e144]{background-color:#fcfcfc;color:#000;border-radius:50%;font-weight:500;height:23px;width:23px;text-align:center;z-index:10;display:flex;align-items:center;justify-content:center}.timeline-tag .timeline-badge.large[data-v-7ce7e144]{height:30px;width:30px}.timeline-tag .timeline-badge.primary[data-v-7ce7e144]{color:#000!important;background-color:#000!important;border:2px solid #000!important}.timeline-tag .timeline-badge.success[data-v-7ce7e144]{color:#f595c0!important;background-color:#f595c0!important;border:2px solid #f595c0!important}.timeline-tag .timeline-badge.warning[data-v-7ce7e144]{color:#fff!important;background-color:#ffe08a!important;border:2px solid #ffe08a!important}.timeline-tag .timeline-badge.danger[data-v-7ce7e144]{color:#fff!important;background-color:#f14668!important;border:2px solid #f14668!important}.timeline-tag .timeline-badge.info[data-v-7ce7e144]{color:#fff!important;background-color:#3e8ed0!important;border:2px solid #3e8ed0!important}.timeline-tag .progress-line[data-v-7ce7e144]{width:3px;display:flex;flex:1}.timeline-panel[data-v-7ce7e144]{display:flex;flex-flow:column;flex:1;padding:0 20px 20px 30px;max-width:90vw}@media screen and (max-width:768px){.timeline-panel[data-v-7ce7e144]{padding:0}}.timeline-heading[data-v-7ce7e144]{display:flex;flex-direction:row;align-items:center}.timeline-title[data-v-7ce7e144]{font-weight:600;margin-top:4px;color:inherit}@media screen and (max-width:768px){.timeline-title[data-v-7ce7e144]{padding-left:10px}}.timeline-body[data-v-7ce7e144]{padding:10px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_199380f9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_199380f9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_199380f9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_199380f9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_199380f9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img[data-v-199380f9]{width:300px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logoVue.ac7dc62.png";

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Repositories_vue_vue_type_style_index_0_id_62b3b65a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Repositories_vue_vue_type_style_index_0_id_62b3b65a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Repositories_vue_vue_type_style_index_0_id_62b3b65a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Repositories_vue_vue_type_style_index_0_id_62b3b65a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Repositories_vue_vue_type_style_index_0_id_62b3b65a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "section[data-v-62b3b65a]{grid-gap:1rem;gap:1rem}nav.card[data-v-62b3b65a]{max-height:200px}.logo[data-v-62b3b65a]{zoom:.4}nav[data-v-62b3b65a]:hover{transform:scale(1.1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/css.b1ea069.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/github.c9f36e3.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/html.47f7fff.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/javascript.2b08960.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mysql.bfce1c3.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/react.f3e6489.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vuejs.1fbf3e2.png";

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Languages_vue_vue_type_style_index_0_id_a6df89ee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Languages_vue_vue_type_style_index_0_id_a6df89ee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Languages_vue_vue_type_style_index_0_id_a6df89ee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Languages_vue_vue_type_style_index_0_id_a6df89ee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Languages_vue_vue_type_style_index_0_id_a6df89ee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "aside[data-v-a6df89ee]{padding:30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About.vue?vue&type=template&id=199380f9&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('article', [_vm._ssrNode("<h1 class=\"is-size-1 is-flex is-justify-content-center has-text-primary\" data-v-199380f9>Bem Vindo(a)!</h1> <section class=\"is-flex pl-4\" data-v-199380f9><img" + _vm._ssrAttr("src", __webpack_require__(33)) + " alt=\"Mulher negra\" data-v-199380f9> <h2 class=\"is-size-1 is-flex is-justify-content-center\" data-v-199380f9>RUTE ÁVILA</h2></section>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/About.vue?vue&type=template&id=199380f9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About.vue?vue&type=script&lang=js&
/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  name: "About"
});
// CONCATENATED MODULE: ./components/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/About.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "199380f9",
  "7bf934ae"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Repositories.vue?vue&type=template&id=62b3b65a&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('aside', [_vm._ssrNode("<h1 class=\"is-size-1 is-flex is-justify-content-center\" data-v-62b3b65a>Conheça meus projetos</h1> "), _vm._ssrNode("<section class=\"is-flex is-flex-wrap-wrap is-justify-content-center\" data-v-62b3b65a>", "</section>", [_vm._l(_vm.repoList, function (repo, index) {
    return _vm._ssrNode("<nav class=\"card\" data-v-62b3b65a>", "</nav>", [_vm._ssrNode("<a" + _vm._ssrAttr("href", repo.html_url) + " role=\"link\" rel=\"search external\"" + _vm._ssrAttr("aria-label", repo.description) + " target=\"_blank\" data-v-62b3b65a>", "</a>", [repo.language !== 'Vue' ? _vm._ssrNode("<img" + _vm._ssrAttr("src", `https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/logo.webp`) + " width=\"200px\"" + _vm._ssrAttr("alt", repo.name.replaceAll('_', ' ')) + _vm._ssrAttr("title", repo.name.replaceAll('_', ' ')) + " data-v-62b3b65a>", "</img>") : _c('Logo', {
      staticClass: "logo",
      attrs: {
        "name": repo.name.replaceAll('_', ' '),
        "images": [__webpack_require__(44)],
        "title": repo.name.replaceAll('_', ' '),
        "titleColor": "rgb(72 199 142)",
        "barColor": "rgb(72 199 142)"
      }
    })], 1)]);
  }), _vm._ssrNode(" "), _vm.isLoad ? _vm._l(15, function (index) {
    return _vm._ssrNode("<nav class=\"card\" data-v-62b3b65a>", "</nav>", [_c('b-skeleton', {
      attrs: {
        "width": "200px",
        "height": "200px"
      }
    })], 1);
  }) : _vm._e()], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Repositories.vue?vue&type=template&id=62b3b65a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Logo.vue + 4 modules
var Logo = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Repositories.vue?vue&type=script&lang=js&


/* harmony default export */ var Repositoriesvue_type_script_lang_js_ = ({
  name: "Repositories",

  data() {
    return {
      isLoad: false
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      repoList: "getRepoList"
    })
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      listRequest: "repoListRequestAction"
    }),

    async loadRepoList() {
      this.isLoad = true;
      await this.listRequest();
      this.isLoad = false;
    },

    defaultLogo(event, repo) {
      event.target.src = __webpack_require__(33);
      repo.status = "error";
    }

  },

  beforeMount() {
    this.loadRepoList();
  },

  components: {
    Logo: Logo["default"]
  }
});
// CONCATENATED MODULE: ./components/Repositories.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Repositoriesvue_type_script_lang_js_ = (Repositoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Repositories.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Repositoriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "62b3b65a",
  "5704d508"
  
)

/* harmony default export */ var Repositories = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(35).default})


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Libras.vue?vue&type=template&id=bcf3d466&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "enabled",
    attrs: {
      "vw": ""
    }
  }, [_vm._ssrNode("<div vw-access-button class=\"active\"></div> <div vw-plugin-wrapper><div class=\"vw-plugin-top-wrapper\"></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Libras.vue?vue&type=template&id=bcf3d466&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Libras.vue?vue&type=script&lang=js&
/* harmony default export */ var Librasvue_type_script_lang_js_ = ({
  name: "Libras",

  beforeMount() {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  }

});
// CONCATENATED MODULE: ./components/Libras.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Librasvue_type_script_lang_js_ = (Librasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Libras.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Librasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "098dc913"
  
)

/* harmony default export */ var Libras = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 59 */
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


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("22dd8125", content, true, context)
};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Languages.vue?vue&type=template&id=a6df89ee&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('aside', [_vm._ssrNode("<h1 class=\"is-size-1 is-flex is-justify-content-center\" data-v-a6df89ee>Conhecimentos</h1> " + _vm._ssrList(_vm.languagesList, function (logo, index) {
    return "<img" + _vm._ssrAttr("src", logo.path) + _vm._ssrAttr("alt", logo.alt) + " class=\"pl-3 images\" data-v-a6df89ee>";
  }))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Languages.vue?vue&type=template&id=a6df89ee&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Languages.vue?vue&type=script&lang=js&
/* harmony default export */ var Languagesvue_type_script_lang_js_ = ({
  name: "Languages",

  data() {
    return {
      languagesList: [{
        path: __webpack_require__(47),
        alt: "Logo CSS"
      }, {
        path: __webpack_require__(48),
        alt: "Logo Github"
      }, {
        path: __webpack_require__(49),
        alt: "Logo HTML"
      }, {
        path: __webpack_require__(50),
        alt: "Logo JS"
      }, {
        path: __webpack_require__(51),
        alt: "Logo MySQL"
      }, {
        path: __webpack_require__(52),
        alt: "Logo Reacjs"
      }, {
        path: __webpack_require__(53),
        alt: "Logo Vuejs"
      }]
    };
  },

  computed: {
    groupLanguageList() {
      let supList = [...this.languagesList];
      const list = [];

      while (supList.length) {
        list.push(supList.splice(0, 4));
      }

      return list;
    }

  }
});
// CONCATENATED MODULE: ./components/Languages.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Languagesvue_type_script_lang_js_ = (Languagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Languages.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Languagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a6df89ee",
  "0b62fd92"
  
)

/* harmony default export */ var Languages = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b3e68aca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b3e68aca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b3e68aca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b3e68aca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b3e68aca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=b3e68aca&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_c('About'), _vm._ssrNode(" "), _c('Trajectories'), _vm._ssrNode(" "), _c('Repositories'), _vm._ssrNode(" "), _c('Libras')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=b3e68aca&scoped=true&

// EXTERNAL MODULE: ./components/About.vue + 4 modules
var About = __webpack_require__(56);

// EXTERNAL MODULE: ./components/Repositories.vue + 4 modules
var Repositories = __webpack_require__(57);

// EXTERNAL MODULE: ./components/Languages.vue + 4 modules
var Languages = __webpack_require__(61);

// EXTERNAL MODULE: ./components/Trajectories.vue + 2 modules
var Trajectories = __webpack_require__(59);

// EXTERNAL MODULE: ./components/Libras.vue + 4 modules
var Libras = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&





/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",
  components: {
    About: About["default"],
    Repositories: Repositories["default"],
    Languages: Languages["default"],
    Trajectories: Trajectories["default"],
    Libras: Libras["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b3e68aca",
  "0a3361e2"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {About: __webpack_require__(56).default,Trajectories: __webpack_require__(59).default,Repositories: __webpack_require__(57).default,Libras: __webpack_require__(58).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map