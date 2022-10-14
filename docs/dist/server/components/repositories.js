exports.ids = [5,4];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.84dfaca.webp";

/***/ }),

/***/ 35:
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

/***/ 37:
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logoVue.ac7dc62.png";

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Repositories_vue_vue_type_style_index_0_id_62b3b65a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Repositories_vue_vue_type_style_index_0_id_62b3b65a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Repositories_vue_vue_type_style_index_0_id_62b3b65a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Repositories_vue_vue_type_style_index_0_id_62b3b65a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Repositories_vue_vue_type_style_index_0_id_62b3b65a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "section[data-v-62b3b65a]{grid-gap:1rem;gap:1rem}nav.card[data-v-62b3b65a]{max-height:200px}.logo[data-v-62b3b65a]{zoom:.4}nav[data-v-62b3b65a]:hover{transform:scale(1.1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
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


/***/ })

};;
//# sourceMappingURL=repositories.js.map