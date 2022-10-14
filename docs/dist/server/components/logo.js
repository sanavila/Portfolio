exports.ids = [4];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=logo.js.map