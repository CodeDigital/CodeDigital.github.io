(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Code_Projects_web_projects_CodeDigital_github_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/index.scss */ "./src/assets/css/index.scss");
/* harmony import */ var _assets_css_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/themes/prism-tomorrow.css */ "./node_modules/prismjs/themes/prism-tomorrow.css");
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar.css */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.css");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers */ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers.css */ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_plugins_match_braces_prism_match_braces__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/plugins/match-braces/prism-match-braces */ "./node_modules/prismjs/plugins/match-braces/prism-match-braces.js");
/* harmony import */ var prismjs_plugins_match_braces_prism_match_braces__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_match_braces_prism_match_braces__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_plugins_match_braces_prism_match_braces_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/plugins/match-braces/prism-match-braces.css */ "./node_modules/prismjs/plugins/match-braces/prism-match-braces.css");
/* harmony import */ var prismjs_plugins_match_braces_prism_match_braces_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_match_braces_prism_match_braces_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_plugins_normalize_whitespace_prism_normalize_whitespace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/plugins/normalize-whitespace/prism-normalize-whitespace */ "./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");
/* harmony import */ var prismjs_plugins_normalize_whitespace_prism_normalize_whitespace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_normalize_whitespace_prism_normalize_whitespace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_plugins_show_language_prism_show_language__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/plugins/show-language/prism-show-language */ "./node_modules/prismjs/plugins/show-language/prism-show-language.js");
/* harmony import */ var prismjs_plugins_show_language_prism_show_language__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_show_language_prism_show_language__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_plugins_download_button_prism_download_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/plugins/download-button/prism-download-button */ "./node_modules/prismjs/plugins/download-button/prism-download-button.js");
/* harmony import */ var prismjs_plugins_download_button_prism_download_button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_download_button_prism_download_button__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Code\\Projects\\web-projects\\CodeDigital.github.io\\src\\pages\\_app.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);


 // import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/themes/prism-funky.css'



 // class="line-numbers"


 // class="match-braces"





 // Prism.highlightAll();
// import App from 'next/app'

var MyApp = function MyApp(props) {
  _s();

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
    prismjs__WEBPACK_IMPORTED_MODULE_3___default().highlightAll();
  }, []);
  var Component = props.Component,
      pageProps = props.pageProps;
  return __jsx(Component, (0,C_Code_Projects_web_projects_CodeDigital_github_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }));
};

_s(MyApp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./src/pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!**************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-line-numbers.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-line-numbers.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css",
      function () {
        content = __webpack_require__(/*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-line-numbers.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/prismjs/plugins/match-braces/prism-match-braces.css":
/*!**************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/match-braces/prism-match-braces.css ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-match-braces.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/match-braces/prism-match-braces.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-match-braces.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/match-braces/prism-match-braces.css",
      function () {
        content = __webpack_require__(/*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-match-braces.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/match-braces/prism-match-braces.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.css":
/*!****************************************************************!*\
  !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.css ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-toolbar.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-toolbar.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css",
      function () {
        content = __webpack_require__(/*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-toolbar.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/prismjs/themes/prism-tomorrow.css":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/themes/prism-tomorrow.css ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-tomorrow.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/themes/prism-tomorrow.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-tomorrow.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/themes/prism-tomorrow.css",
      function () {
        content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./prism-tomorrow.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/themes/prism-tomorrow.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/css/index.scss":
/*!***********************************!*\
  !*** ./src/assets/css/index.scss ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./index.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./src/assets/css/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./index.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./src/assets/css/index.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./index.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./src/assets/css/index.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n", "",{"version":3,"sources":["webpack://node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;CACpB,MAAM;CACN,eAAe;CACf,YAAY;CACZ,UAAU,EAAE,4CAA4C;CACxD,oBAAoB;CACpB,4BAA4B;;CAE5B,yBAAyB;CACzB,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;;AAElB;;CAEC;EACC,cAAc;EACd,6BAA6B;CAC9B;;EAEC;GACC,4BAA4B;GAC5B,WAAW;GACX,cAAc;GACd,oBAAoB;GACpB,iBAAiB;EAClB","sourcesContent":["pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/match-braces/prism-match-braces.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/match-braces/prism-match-braces.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".token.punctuation.brace-hover,\n.token.punctuation.brace-selected {\n\toutline: solid 1px;\n}\n\n.rainbow-braces .token.punctuation.brace-level-1,\n.rainbow-braces .token.punctuation.brace-level-5,\n.rainbow-braces .token.punctuation.brace-level-9 {\n\tcolor: #E50;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-2,\n.rainbow-braces .token.punctuation.brace-level-6,\n.rainbow-braces .token.punctuation.brace-level-10 {\n\tcolor: #0B3;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-3,\n.rainbow-braces .token.punctuation.brace-level-7,\n.rainbow-braces .token.punctuation.brace-level-11 {\n\tcolor: #26F;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-4,\n.rainbow-braces .token.punctuation.brace-level-8,\n.rainbow-braces .token.punctuation.brace-level-12 {\n\tcolor: #E0E;\n\topacity: 1;\n}\n", "",{"version":3,"sources":["webpack://node_modules/prismjs/plugins/match-braces/prism-match-braces.css"],"names":[],"mappings":"AAAA;;CAEC,kBAAkB;AACnB;;AAEA;;;CAGC,WAAW;CACX,UAAU;AACX;AACA;;;CAGC,WAAW;CACX,UAAU;AACX;AACA;;;CAGC,WAAW;CACX,UAAU;AACX;AACA;;;CAGC,WAAW;CACX,UAAU;AACX","sourcesContent":[".token.punctuation.brace-hover,\n.token.punctuation.brace-selected {\n\toutline: solid 1px;\n}\n\n.rainbow-braces .token.punctuation.brace-level-1,\n.rainbow-braces .token.punctuation.brace-level-5,\n.rainbow-braces .token.punctuation.brace-level-9 {\n\tcolor: #E50;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-2,\n.rainbow-braces .token.punctuation.brace-level-6,\n.rainbow-braces .token.punctuation.brace-level-10 {\n\tcolor: #0B3;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-3,\n.rainbow-braces .token.punctuation.brace-level-7,\n.rainbow-braces .token.punctuation.brace-level-11 {\n\tcolor: #26F;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-4,\n.rainbow-braces .token.punctuation.brace-level-8,\n.rainbow-braces .token.punctuation.brace-level-12 {\n\tcolor: #E0E;\n\topacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.code-toolbar {\n\tposition: relative;\n}\n\ndiv.code-toolbar > .toolbar {\n\tposition: absolute;\n\ttop: .3em;\n\tright: .2em;\n\t-webkit-transition: opacity 0.3s ease-in-out;\n\ttransition: opacity 0.3s ease-in-out;\n\topacity: 0;\n}\n\ndiv.code-toolbar:hover > .toolbar {\n\topacity: 1;\n}\n\n/* Separate line b/c rules are thrown out if selector is invalid.\n   IE11 and old Edge versions don't support :focus-within. */\ndiv.code-toolbar:focus-within > .toolbar {\n\topacity: 1;\n}\n\ndiv.code-toolbar > .toolbar > .toolbar-item {\n\tdisplay: inline-block;\n}\n\ndiv.code-toolbar > .toolbar > .toolbar-item > a {\n\tcursor: pointer;\n}\n\ndiv.code-toolbar > .toolbar > .toolbar-item > button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n}\n\ndiv.code-toolbar > .toolbar > .toolbar-item > a,\ndiv.code-toolbar > .toolbar > .toolbar-item > button,\ndiv.code-toolbar > .toolbar > .toolbar-item > span {\n\tcolor: #bbb;\n\tfont-size: .8em;\n\tpadding: 0 .5em;\n\tbackground: #f5f2f0;\n\tbackground: rgba(224, 224, 224, 0.2);\n\t-webkit-box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n\t        box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n\tborder-radius: .5em;\n}\n\ndiv.code-toolbar > .toolbar > .toolbar-item > a:hover,\ndiv.code-toolbar > .toolbar > .toolbar-item > a:focus,\ndiv.code-toolbar > .toolbar > .toolbar-item > button:hover,\ndiv.code-toolbar > .toolbar > .toolbar-item > button:focus,\ndiv.code-toolbar > .toolbar > .toolbar-item > span:hover,\ndiv.code-toolbar > .toolbar > .toolbar-item > span:focus {\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n", "",{"version":3,"sources":["webpack://node_modules/prismjs/plugins/toolbar/prism-toolbar.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,4CAAoC;CAApC,oCAAoC;CACpC,UAAU;AACX;;AAEA;CACC,UAAU;AACX;;AAEA;4DAC4D;AAC5D;CACC,UAAU;AACX;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,SAAS;CACT,cAAc;CACd,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,UAAU;CACV,yBAAyB,EAAE,eAAe;CAC1C,sBAAsB;CACtB,qBAAqB;AACtB;;AAEA;;;CAGC,WAAW;CACX,eAAe;CACf,eAAe;CACf,mBAAmB;CACnB,oCAAoC;CACpC,6CAAqC;SAArC,qCAAqC;CACrC,mBAAmB;AACpB;;AAEA;;;;;;CAMC,cAAc;CACd,qBAAqB;AACtB","sourcesContent":["div.code-toolbar {\n\tposition: relative;\n}\n\ndiv.code-toolbar > .toolbar {\n\tposition: absolute;\n\ttop: .3em;\n\tright: .2em;\n\ttransition: opacity 0.3s ease-in-out;\n\topacity: 0;\n}\n\ndiv.code-toolbar:hover > .toolbar {\n\topacity: 1;\n}\n\n/* Separate line b/c rules are thrown out if selector is invalid.\n   IE11 and old Edge versions don't support :focus-within. */\ndiv.code-toolbar:focus-within > .toolbar {\n\topacity: 1;\n}\n\ndiv.code-toolbar > .toolbar > .toolbar-item {\n\tdisplay: inline-block;\n}\n\ndiv.code-toolbar > .toolbar > .toolbar-item > a {\n\tcursor: pointer;\n}\n\ndiv.code-toolbar > .toolbar > .toolbar-item > button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n}\n\ndiv.code-toolbar > .toolbar > .toolbar-item > a,\ndiv.code-toolbar > .toolbar > .toolbar-item > button,\ndiv.code-toolbar > .toolbar > .toolbar-item > span {\n\tcolor: #bbb;\n\tfont-size: .8em;\n\tpadding: 0 .5em;\n\tbackground: #f5f2f0;\n\tbackground: rgba(224, 224, 224, 0.2);\n\tbox-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n\tborder-radius: .5em;\n}\n\ndiv.code-toolbar > .toolbar > .toolbar-item > a:hover,\ndiv.code-toolbar > .toolbar > .toolbar-item > a:focus,\ndiv.code-toolbar > .toolbar > .toolbar-item > button:hover,\ndiv.code-toolbar > .toolbar > .toolbar-item > button:focus,\ndiv.code-toolbar > .toolbar > .toolbar-item > span:hover,\ndiv.code-toolbar > .toolbar > .toolbar-item > span:focus {\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/themes/prism-tomorrow.css":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/prismjs/themes/prism-tomorrow.css ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML\n * Based on https://github.com/chriskempson/tomorrow-theme\n * @author Rose Pritchard\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #ccc;\n\tbackground: none;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #2d2d2d;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #999;\n}\n\n.token.punctuation {\n\tcolor: #ccc;\n}\n\n.token.tag,\n.token.attr-name,\n.token.namespace,\n.token.deleted {\n\tcolor: #e2777a;\n}\n\n.token.function-name {\n\tcolor: #6196cc;\n}\n\n.token.boolean,\n.token.number,\n.token.function {\n\tcolor: #f08d49;\n}\n\n.token.property,\n.token.class-name,\n.token.constant,\n.token.symbol {\n\tcolor: #f8c555;\n}\n\n.token.selector,\n.token.important,\n.token.atrule,\n.token.keyword,\n.token.builtin {\n\tcolor: #cc99cd;\n}\n\n.token.string,\n.token.char,\n.token.attr-value,\n.token.regex,\n.token.variable {\n\tcolor: #7ec699;\n}\n\n.token.operator,\n.token.entity,\n.token.url {\n\tcolor: #67cdcc;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\n.token.inserted {\n\tcolor: green;\n}\n", "",{"version":3,"sources":["webpack://node_modules/prismjs/themes/prism-tomorrow.css"],"names":[],"mappings":"AAAA;;;;EAIE;;AAEF;;CAEC,WAAW;CACX,gBAAgB;CAChB,sEAAsE;CACtE,cAAc;CACd,gBAAgB;CAChB,gBAAgB;CAChB,oBAAoB;CACpB,kBAAkB;CAClB,iBAAiB;CACjB,gBAAgB;;CAEhB,gBAAgB;CAEhB,WAAW;;CAEX,qBAAqB;CACrB,kBAAkB;CAClB,iBAAiB;CACjB,aAAa;;AAEd;;AAEA,gBAAgB;AAChB;CACC,YAAY;CACZ,cAAc;CACd,cAAc;AACf;;AAEA;;CAEC,mBAAmB;AACpB;;AAEA,gBAAgB;AAChB;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;AACpB;;AAEA;;;;;CAKC,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ;;AAEA;;;;CAIC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;;;CAGC,cAAc;AACf;;AAEA;;;;CAIC,cAAc;AACf;;AAEA;;;;;CAKC,cAAc;AACf;;AAEA;;;;;CAKC,cAAc;AACf;;AAEA;;;CAGC,cAAc;AACf;;AAEA;;CAEC,iBAAiB;AAClB;AACA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb","sourcesContent":["/**\n * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML\n * Based on https://github.com/chriskempson/tomorrow-theme\n * @author Rose Pritchard\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #ccc;\n\tbackground: none;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #2d2d2d;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #999;\n}\n\n.token.punctuation {\n\tcolor: #ccc;\n}\n\n.token.tag,\n.token.attr-name,\n.token.namespace,\n.token.deleted {\n\tcolor: #e2777a;\n}\n\n.token.function-name {\n\tcolor: #6196cc;\n}\n\n.token.boolean,\n.token.number,\n.token.function {\n\tcolor: #f08d49;\n}\n\n.token.property,\n.token.class-name,\n.token.constant,\n.token.symbol {\n\tcolor: #f8c555;\n}\n\n.token.selector,\n.token.important,\n.token.atrule,\n.token.keyword,\n.token.builtin {\n\tcolor: #cc99cd;\n}\n\n.token.string,\n.token.char,\n.token.attr-value,\n.token.regex,\n.token.variable {\n\tcolor: #7ec699;\n}\n\n.token.operator,\n.token.entity,\n.token.url {\n\tcolor: #67cdcc;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\n.token.inserted {\n\tcolor: green;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./src/assets/css/index.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./src/assets/css/index.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_img_music_banner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/assets/img/music-banner.jpg */ "./public/assets/img/music-banner.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_assets_img_music_banner_jpg__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  font-family: Monaco, monospace;\n}\n\nbody {\n  background-color: #222222;\n  font-size: 14px;\n}\n\ninput[type=search]::-webkit-search-cancel-button {\n  display: none;\n}\n\ninput[type=search]::-ms-clear {\n  display: none;\n}\n\n.button-regular {\n  cursor: pointer;\n  padding: 5px;\n  font-size: 11px;\n  background-color: #FF2277;\n  color: #FDFFFC;\n  margin: 10px;\n  position: absolute;\n  color: #FDFFFC;\n  border: none;\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n  font-family: Monaco, monospace;\n}\n\n.page-404 {\n  text-align: center;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.page-404 * {\n  margin: 0px;\n  padding: 0px;\n}\n\n.page-404 h1 {\n  text-shadow: greenyellow -1px 0px 0px, cyan 0.5px -1px 0px, red 1.5px 1px 0px;\n  font-size: 42px;\n  margin: 0;\n}\n\n.page-404 h2 {\n  font-size: 28px;\n  margin: 0;\n}\n\n.page-404 img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 40vw;\n}\n\n.page-404 img:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n          filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n}\n\n.page-404 h2:hover {\n  -webkit-filter: drop-shadow(greenyellow -1px 0px 0px) drop-shadow(cyan 0.5px -1px 0px) drop-shadow(red 1.5px 1px 0px);\n          filter: drop-shadow(greenyellow -1px 0px 0px) drop-shadow(cyan 0.5px -1px 0px) drop-shadow(red 1.5px 1px 0px);\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.shadowed:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: #222222 1px 1px 10px;\n          box-shadow: #222222 1px 1px 10px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #222222;\n  color: #FDFFFC;\n  font-family: Monaco, monospace;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n}\n\na {\n  color: white;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  cursor: pointer;\n}\n\na:hover {\n  text-shadow: 0 0 5px #FDFFFC;\n}\n\ncode {\n  background-color: #393E41;\n  padding: 3px;\n  border-radius: 5px;\n}\n\n.header {\n  font-family: Monaco, monospace;\n  background-color: #393E41;\n  width: 100%;\n  height: 75px;\n}\n\n.header ::slotted {\n  float: left;\n}\n\n.header img {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  height: 65px;\n  margin: 5px;\n}\n\n.header img:hover {\n  -webkit-transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n          transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n  -webkit-filter: drop-shadow(greenyellow -2px 0px 0px) drop-shadow(cyan 1.5px -2px 0px) drop-shadow(red 2.5px 1.5px 0px);\n          filter: drop-shadow(greenyellow -2px 0px 0px) drop-shadow(cyan 1.5px -2px 0px) drop-shadow(red 2.5px 1.5px 0px);\n}\n\n.header h1 {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n\n.header h1:hover {\n  -webkit-filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n          filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n  -webkit-transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n          transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n}\n\n.anniversary {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #FF2277), color-stop(100%, aqua));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #FF2277 0%, aqua 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #FF2277 0%, aqua 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffff\", endColorstr=\"#ff00ff\",GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.phoenix {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #C52437), color-stop(100%, #F7E27C));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.vhs-color {\n  text-shadow: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3.5px 0px;\n}\n\n.tertiary-text-color {\n  color: #FF2277;\n}\n\n.main-gradient-text {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #C52437), color-stop(100%, #F7E27C));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.main-body {\n  top: 75px;\n  height: -webkit-calc(100% - 75px);\n  height: calc(100% - 75px);\n}\n\n.popup {\n  display: block;\n  position: absolute;\n  z-index: 101;\n  border: none;\n  top: 75px;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  text-align: center;\n}\n\n.popup-button {\n  display: block;\n  position: absolute;\n  z-index: 101;\n  border: none;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  background: black;\n  background: transparent\\9 ;\n  background: rgba(0, 0, 0, 0.8);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#22000000,endColorstr=#22000000);\n  zoom: 1;\n  width: 100vw;\n}\n\n.popup-container {\n  z-index: 110;\n  display: block;\n  position: absolute;\n  width: 100vw;\n  text-align: center;\n  padding: 50px 0px;\n  pointer-events: none;\n}\n\n.popup-div {\n  display: block;\n  font-size: larger;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 500px;\n  -webkit-box-shadow: 10px 10px 0px #FF2277;\n          box-shadow: 10px 10px 0px #FF2277;\n  color: #FDFFFC;\n  background-color: #222222;\n  padding: 20px 50px;\n  pointer-events: all;\n}\n\n.popup h1 {\n  text-align: center;\n}\n\n.popup code {\n  border-radius: 0;\n  background-color: #FF2277;\n  -webkit-box-shadow: inset 0 0 10px #393E41;\n  box-shadow: inset 0 0 10px #393E41;\n}\n\n.popup > div small {\n  text-align: center;\n  display: block;\n  color: #FF2277;\n  margin-top: 20px;\n}\n\n.share-button-div {\n  text-align: center;\n}\n\n.share-button-div > * {\n  margin: 5px;\n  -webkit-transition: ease-in 0.3s;\n  transition: ease-in 0.3s;\n}\n\n.share-button-div > *:hover .share-button-icon {\n  -webkit-box-shadow: #FF2277 3px 2px;\n          box-shadow: #FF2277 3px 2px;\n}\n\n.share-button-icon {\n  border-radius: 1000px;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.share-count-wrapper > * {\n  margin-left: -20px;\n  margin-top: -5px;\n  padding: 3px 6px;\n  background-color: #393E41;\n  color: #FDFFFC;\n  border-radius: 8px;\n}\n\n.share-link-copy {\n  padding: 7.5px 10px;\n  padding-top: 7;\n  padding-bottom: 8;\n  background-color: #FF2277;\n  color: #FDFFFC;\n  border: none;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.share-link {\n  text-align: center;\n  width: 320px;\n  padding: 7.5px;\n  text-overflow: ellipsis;\n  border: none;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.navigator {\n  background-color: #FF2277;\n  height: 35px;\n  top: 75px;\n  width: 100%;\n  margin: 0;\n}\n\n.navigator img {\n  display: block;\n  height: 25px;\n  margin: 5px;\n  right: 5px;\n  pointer-events: none;\n  position: absolute;\n}\n\n.navigator input {\n  -webkit-box-shadow: inset 0 0 10px #393E41;\n  box-shadow: inset 0 0 10px #393E41;\n  font-size: 15px;\n  background: #FF2277;\n  border: none;\n  color: #FDFFFC;\n  width: -webkit-calc(100% - 45px);\n  width: calc(100% - 45px);\n  height: 100%;\n  padding: 0 10px;\n  padding-right: 35px;\n}\n\n.navigator input::-webkit-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input::-moz-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input:-ms-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input::placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator button {\n  -webkit-transition: ease-in 0.3s;\n  transition: ease-in 0.3s;\n  color: #FDFFFC;\n  display: block;\n  position: absolute;\n  height: 30px;\n  background-color: #222222;\n  margin: 1.25px;\n  right: 45px;\n  border: none;\n  padding: 8px 8px;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.navigator button:hover {\n  -webkit-box-shadow: #393E41 7.5px 2.5px;\n          box-shadow: #393E41 7.5px 2.5px;\n}\n\n.navigator button input {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  border: none;\n  color: #FDFFFC;\n  width: 15px;\n  height: 15px;\n  float: left;\n}\n\n.navigator button label {\n  margin-top: 0px;\n  margin-left: 8px;\n  float: right;\n}\n\n.project-list {\n  margin: 0;\n  height: -webkit-calc(100vh - 35px - 75px - 70px);\n  height: calc(100vh - 35px - 75px - 70px);\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.link-disabled {\n  display: none;\n}\n\n.project-thumbnail {\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n          box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n  height: 250px;\n  width: 250px;\n  display: inline-table;\n  text-align: right;\n  position: relative;\n  padding: 0;\n  margin: 30px;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.project-thumbnail:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n          box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n  text-shadow: none;\n}\n\n.project-thumbnail:last-of-type {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  margin-bottom: 50px;\n}\n\n.project-thumbnail div {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  text-align: center;\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.project-thumbnail div * {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  padding: 0px 20px;\n}\n\n.project-thumbnail div p {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.project-thumbnail small {\n  text-align: right;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  display: block;\n  position: absolute;\n  margin: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  right: 0;\n  bottom: 0;\n}\n\n.post-thumbnail {\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n          box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n  height: 250px;\n  width: 250px;\n  display: inline-table;\n  text-align: right;\n  position: relative;\n  padding: 0;\n  margin: 30px;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.post-thumbnail:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n          box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n  text-shadow: none;\n}\n\n.post-thumbnail:last-of-type {\n  margin-bottom: 50px;\n}\n\n.post-thumbnail div {\n  text-align: center;\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.post-thumbnail div * {\n  padding: 0px 20px;\n}\n\n.post-thumbnail div p {\n  margin-top: 10px;\n}\n\n.post-thumbnail small {\n  text-align: right;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  display: block;\n  position: absolute;\n  margin: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  right: 0;\n  bottom: 0;\n}\n\n.project-page {\n  margin: 0;\n  padding: 0;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  width: 100%;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.close-icon {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  margin: 5px;\n  position: absolute;\n  float: right;\n  z-index: 100;\n  right: 35px;\n  margin-top: 15px;\n  -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n  filter: drop-shadow(6px 5px 5px #FF2277);\n  cursor: pointer;\n}\n\n.close-icon:hover {\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.share-icon {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  margin: 5px;\n  position: absolute;\n  float: right;\n  right: 90px;\n  z-index: 100;\n  margin-top: 15px;\n  -webkit-filter: drop-shadow(6px 5px 2px #FF2277);\n  filter: drop-shadow(6px 5px 2px #FF2277);\n  cursor: pointer;\n}\n\n.share-icon:hover {\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n}\n\n.about-h1 {\n  margin: 10px;\n  margin-bottom: 20px;\n}\n\n.about-h2 {\n  margin: 10px;\n  margin-bottom: -5px;\n  text-align: left;\n}\n\n.about-p {\n  text-align: left;\n  margin-bottom: -7.5px;\n  padding-bottom: 7.5px;\n  text-align: justify;\n}\n\n.about-me {\n  margin-top: 10px;\n  background-color: #FF2277;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n  padding: 15px;\n  margin-bottom: 40px;\n}\n\n.about-me img {\n  -webkit-box-shadow: #222222 1px 1px 10px;\n          box-shadow: #222222 1px 1px 10px;\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n}\n\n.about-me img:hover {\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n}\n\n.contact-container {\n  width: -webkit-calc(100vw - 100px);\n  width: calc(100vw - 100px);\n  padding: 0 50px;\n  padding-top: 50px;\n}\n\n.contact-left {\n  float: left;\n  width: 40%;\n  text-align: center;\n}\n\n.contact-right h1 {\n  margin-bottom: 20px;\n}\n\n.contact-p {\n  background-color: #FF2277;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n  padding: 20px;\n  text-align: justify;\n}\n\n.contact-thumbnail {\n  display: block;\n  background-color: #393E41;\n  width: 100%;\n  height: 40px;\n  margin-bottom: 20px;\n  padding: 10px;\n  text-decoration: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #FF2277;\n          box-shadow: 10px 7.5px 1px 0px #FF2277;\n}\n\n.contact-thumbnail:hover {\n  -webkit-box-shadow: 5px 5px 1px 0px #FF2277;\n          box-shadow: 5px 5px 1px 0px #FF2277;\n}\n\n.contact-thumbnail div {\n  float: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 40px;\n  display: block;\n  padding: 0 20px;\n  text-decoration: none;\n  margin-top: -5px;\n  width: -webkit-calc(100% - 80px);\n  width: calc(100% - 80px);\n  text-align: right;\n}\n\n.contact-thumbnail img {\n  width: 40px;\n  float: left;\n}\n\n.p5-info {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  z-index: 1;\n  border-bottom: 2px solid #393E41;\n}\n\n.p5-info h1 {\n  font-size: 42px;\n  text-align: left;\n  margin-left: 100px;\n  padding-top: 10px;\n}\n\n.p5-info p {\n  display: none;\n  visibility: hidden;\n  opacity: 1;\n}\n\n.p5-info input {\n  background-color: #FF2277;\n}\n\n.p5-info button {\n  background-color: #FF2277;\n  color: #FDFFFC;\n  margin: 10px;\n  position: absolute;\n  color: #FDFFFC;\n  border: none;\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n}\n\n.p5-info-slide {\n  background: none;\n  border: none;\n  height: 75px;\n  position: fixed;\n  z-index: 100;\n  left: 25px;\n  margin: 5px;\n  margin-top: 15px;\n}\n\n.p5-info-slide img {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n  filter: drop-shadow(6px 5px 5px #FF2277);\n}\n\n.p5-info-slide img:hover {\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.p5-info-show {\n  z-index: 5;\n  border-bottom: 2px solid #FF2277;\n  -webkit-box-shadow: 0px 10px 10px black;\n          box-shadow: 0px 10px 10px black;\n}\n\n.p5-info-show p {\n  opacity: 1;\n  display: block;\n  visibility: visible;\n}\n\n.p5-info-show::after {\n  z-index: 20;\n  content: \"Hide this information panel with the ^ button above\";\n  font-style: italic;\n  font-size: 10.5px;\n  text-shadow: #222222 1px 1px 2px;\n  display: inline;\n  position: absolute;\n  left: 10px;\n}\n\n.p5-canvas {\n  width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: absolute;\n  z-index: 0;\n  top: 150px;\n  height: -webkit-calc(100vh - 75px - 70px - 75px);\n  height: calc(100vh - 75px - 70px - 75px);\n  text-align: center;\n  cursor: crosshair;\n}\n\n.weblog-signature {\n  margin-top: 15px;\n  text-shadow: black 1px 1px 5px;\n  padding-left: 30px;\n  color: #FF2277;\n  font-weight: normal;\n  margin-bottom: 50px;\n}\n\n.music-release-banner {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 0% 20%;\n  background-size: cover;\n  background-blend-mode: darken;\n  border-bottom: 1px solid white;\n  text-align: center;\n  padding: 15px;\n  padding-top: 0px;\n}\n\n.music-release-banner p, .music-release-banner h1, .music-release-banner h2, .music-release-banner h3 {\n  display: block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  margin: 0 auto;\n  padding: 0;\n  text-shadow: 1px 1px 5px black;\n}\n\n.submergence-hover {\n  -webkit-transition: ease-out 0.2s;\n  transition: ease-out 0.2s;\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.submergence-hover img {\n  -webkit-transition: ease-out 0.2s;\n  transition: ease-out 0.2s;\n}\n\n.submergence-hover:hover {\n  -webkit-filter: drop-shadow(6px 5px 0px #FF2277);\n  filter: drop-shadow(6px 5px 0px #FF2277);\n}\n\n.footer {\n  height: 70px;\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  margin: 0;\n}\n\n.footer hr {\n  border-color: #FF2277;\n}\n\n.footer button, .footer a {\n  font-size: 14px;\n  padding: 0;\n  color: #FDFFFC;\n  text-decoration: underline;\n  background: none;\n  border: none;\n}\n\n.footer a {\n  text-shadow: 2px 2px 4px #222222;\n}\n\n.footer button:hover, .footer a:hover {\n  text-shadow: 0 0 5px #FDFFFC;\n}\n\n.copyright {\n  margin-top: 0px;\n  color: #FF2277;\n  font-size: 14px;\n  text-shadow: #222222 2px 2px 1px;\n}\n\n@media only screen and (min-width: 769px) {\n  body {\n    overflow: hidden;\n  }\n\n  .header {\n    height: 75px;\n  }\n\n  .header h1, .header img {\n    float: left;\n    font-size: 55px;\n  }\n\n  .header h1 {\n    margin-top: 3px;\n    padding: 0;\n  }\n\n  .button-regular {\n    padding: 7.5px 12px;\n  }\n\n  .hide-on-web {\n    visibility: hidden;\n  }\n\n  .hide-on-mobile {\n    visibility: visible;\n  }\n\n  .popup {\n    height: -webkit-calc(100% - 75px - 70px);\n    height: calc(100% - 75px - 70px);\n  }\n\n  .navigator img {\n    display: block;\n  }\n\n  .navigator button {\n    right: 45px;\n  }\n\n  .project-list {\n    margin: 0;\n    height: -webkit-calc(100vh - 35px - 75px - 70px);\n    height: calc(100vh - 35px - 75px - 70px);\n    padding: 0px 50px;\n  }\n\n  .project-thumbnail {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    height: 250px;\n    width: 250px;\n  }\n\n  .post-thumbnail {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    height: 250px;\n    width: 250px;\n  }\n\n  .project-thumbnail:first-of-type, .post-thumbnail:first-of-type {\n    margin-top: 50px;\n  }\n\n  .project-thumbnail:last-of-type, .post-thumbnail:last-of-type {\n    margin-bottom: 200px;\n  }\n\n  .project-thumbnail p {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: none;\n  }\n\n  .project-thumbnail:hover p {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: block;\n  }\n\n  .project-thumbnail:hover small {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: none;\n  }\n\n  .project-thumbnail:hover div {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n  }\n\n  .close-icon {\n    height: 40px;\n  }\n\n  .project-page {\n    height: -webkit-calc(100vh - 75px - 70px);\n    height: calc(100vh - 75px - 70px);\n  }\n\n  .contact-left {\n    float: left;\n    width: 40%;\n    text-align: center;\n  }\n\n  .contact-right {\n    float: right;\n    left: 40vw;\n    text-align: center;\n    position: fixed;\n    width: -webkit-calc(60vw - 100px);\n    width: calc(60vw - 100px);\n    margin-left: 10px;\n    padding: 0px 50px;\n  }\n\n  .contact-right h1 {\n    margin-bottom: 20px;\n  }\n\n  .about {\n    margin: 0 20%;\n    margin-bottom: 40px;\n  }\n\n  .about-me {\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n  }\n\n  .about-me img {\n    width: -webkit-calc(50% - 42.5px);\n    width: calc(50% - 42.5px);\n    display: inline-block;\n    right: 0;\n    -webkit-align-self: center;\n            align-self: center;\n  }\n\n  .about-me div {\n    width: 50%;\n    padding-right: 30px;\n    -webkit-align-self: center;\n            align-self: center;\n  }\n\n  .about-me div p {\n    width: 100%;\n  }\n\n  .about-me:last-child {\n    padding-bottom: 20px;\n  }\n\n  .p5-info {\n    height: 75px;\n    background-color: #222222;\n  }\n\n  .p5-info h1 {\n    font-size: 42px;\n    margin-left: 100px;\n    padding-top: 10px;\n  }\n\n  .p5-info p {\n    max-width: 750px;\n    margin: 10px auto;\n  }\n\n  .p5-info input {\n    position: static;\n    display: block;\n    margin-left: 5px;\n    margin-bottom: -5px;\n  }\n\n  .p5-info button {\n    padding: 7.5px 12px;\n    margin: 10px;\n    position: absolute;\n    float: right;\n    top: 10px;\n    right: 145px;\n  }\n\n  .p5-info-slide {\n    background: none;\n    border: none;\n    height: 75px;\n    position: fixed;\n    left: 25px;\n    margin: 5px;\n    margin-top: 15px;\n  }\n\n  .p5-info-slide img {\n    -webkit-transition: ease-in 0.2s;\n    transition: ease-in 0.2s;\n    height: 40px;\n    -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n    filter: drop-shadow(6px 5px 5px #FF2277);\n  }\n\n  .p5-info-show {\n    height: auto;\n    padding-bottom: 10px;\n  }\n\n  .p5-info-show::after {\n    margin-top: 20px;\n  }\n\n  .submergence-hover br {\n    display: none;\n  }\n\n  .weblog-post {\n    padding: 10px 30px;\n  }\n\n  .weblog-post * {\n    max-width: 750px;\n    margin: 2px auto;\n    text-align: center;\n  }\n\n  .weblog-post small {\n    display: block;\n  }\n\n  .weblog-post p {\n    text-align: justify;\n    line-height: 25px;\n  }\n\n  .weblog-post h1 {\n    max-width: -webkit-calc(100vw - 250px);\n    max-width: calc(100vw - 250px);\n    display: block;\n  }\n\n  .footer {\n    position: fixed;\n    background-color: #393E41;\n    height: 70px;\n  }\n\n  .footer button, .footer a {\n    display: inline-block;\n    margin: 5px 15px;\n    margin-top: 15px;\n  }\n}\n@media only screen and (max-width: 769px) {\n  body {\n    font-size: 11px;\n    height: 100%;\n    width: 100vw;\n  }\n\n  html {\n    height: 100%;\n  }\n\n  code {\n    padding: 0px 4px;\n  }\n\n  .main-body {\n    height: 100%;\n    width: 100vw;\n  }\n\n  .header {\n    text-align: center;\n    height: 40px;\n    width: 100vw;\n  }\n\n  .header h1 {\n    font-size: 28px;\n    margin: 0px;\n    margin-top: 2px;\n    margin-left: 8px;\n    float: left;\n  }\n\n  .header img {\n    height: 30px;\n    float: right;\n  }\n\n  .hide-on-web {\n    visibility: visible;\n  }\n\n  .hide-on-mobile {\n    visibility: hidden;\n  }\n\n  .popup {\n    display: none;\n    top: 40px;\n    height: -webkit-calc(100% - 40px - 70px);\n    height: calc(100% - 40px - 70px);\n  }\n\n  .navigator img {\n    display: none;\n  }\n\n  .navigator button {\n    right: 5px;\n    font-size: 11px;\n  }\n\n  .navigator input {\n    font-size: 11px;\n    width: -webkit-calc(100% - 45px);\n    width: calc(100% - 45px);\n  }\n\n  .project-thumbnail {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    -webkit-box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n            box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n  }\n\n  .project-thumbnail:first-of-type {\n    margin-top: 20px;\n  }\n\n  .project-thumbnail:last-of-type {\n    margin-bottom: 100px;\n  }\n\n  .post-thumbnail {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    -webkit-box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n            box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n  }\n\n  .post-thumbnail:last-of-type {\n    margin-bottom: 100px;\n  }\n\n  .post-thumbnail:first-of-type {\n    margin-top: 20px;\n  }\n\n  .project-thumbnail p {\n    display: none;\n  }\n\n  .project-thumbnail h2 {\n    padding: 0px 40px;\n  }\n\n  .project-list {\n    margin-top: 2px;\n    height: -webkit-calc(100% - (35px + 40px + 70px));\n    height: calc(100% - (35px + 40px + 70px));\n    overflow-y: auto;\n    margin-left: -10px;\n    position: absolute;\n    text-align: center;\n  }\n\n  .close-icon {\n    position: fixed;\n    right: 0px;\n    margin-top: 2px;\n    height: 30px;\n  }\n\n  .project-page {\n    height: -webkit-calc(100% - (40px + 70px));\n    height: calc(100% - (40px + 70px));\n    position: absolute;\n  }\n\n  .share-icon {\n    display: none;\n  }\n\n  .contact-container {\n    width: -webkit-calc(100vw - 100px);\n    width: calc(100vw - 100px);\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .contact-left {\n    width: -webkit-calc(100% - 60px);\n    width: calc(100% - 60px);\n    text-align: center;\n    float: none;\n    padding: 0 30px;\n    margin-left: -25px;\n  }\n\n  .contact-right {\n    float: none;\n    left: 0px;\n    text-align: center;\n    position: relative;\n    width: 100%;\n    padding: 0;\n  }\n\n  .contact-right h1 {\n    margin-bottom: 20px;\n  }\n\n  .contact-thumbnail div {\n    font-size: 20px;\n    margin-top: 10px;\n  }\n\n  .about {\n    margin: 0 20px;\n  }\n\n  .about-me {\n    padding: 15px;\n  }\n\n  .about-me img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    width: 50%;\n  }\n\n  .about-me p {\n    display: block;\n  }\n\n  .p5-info h1 {\n    font-size: 22px;\n    margin-left: 37.5px;\n    padding: 5px;\n    max-width: 45%;\n    max-width: -webkit-calc(100% - 200px);\n    max-width: calc(100% - 200px);\n    max-height: 26px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  .p5-info p {\n    text-align: justify;\n    padding: 5px;\n  }\n\n  .p5-info button, .p5-info input {\n    font-size: 11px;\n    margin-top: 5px;\n    position: static;\n    display: block;\n    float: right;\n    margin-right: 5px;\n    color: #FDFFFC;\n  }\n\n  .p5-info button {\n    padding: 5px;\n    margin: 7.5px;\n    position: absolute;\n    top: -2px;\n    right: 35px;\n  }\n\n  .p5-info input {\n    width: 165px;\n    position: absolute;\n    margin: 0;\n    margin-top: -2px;\n    margin-left: 5px;\n  }\n\n  .p5-info-slide {\n    background: none;\n    border: none;\n    height: 40px;\n    position: fixed;\n    left: 0px;\n    margin: 5px;\n    margin-top: 3px;\n  }\n\n  .p5-info-slide img {\n    -webkit-transition: ease-in 0.2s;\n    transition: ease-in 0.2s;\n    height: 30px;\n    -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n    filter: drop-shadow(6px 5px 5px #FF2277);\n  }\n\n  .p5-info-show {\n    height: auto;\n    padding-bottom: 5px;\n    background-color: #222222;\n  }\n\n  .p5-info-show::after {\n    margin-top: 20px;\n  }\n\n  .p5-info-show h1 {\n    max-height: inherit !important;\n    white-space: normal;\n    text-overflow: ellipsis;\n  }\n\n  .p5-canvas {\n    top: 40px;\n    height: -webkit-calc(100% - 40px);\n    height: calc(100% - 40px);\n    padding: 0;\n  }\n\n  .submergence-hover br {\n    display: block;\n  }\n\n  .weblog-post {\n    padding: 0 10px;\n    text-align: center;\n    margin-top: 10px;\n  }\n\n  .weblog-post p {\n    text-align: left;\n    line-height: 20px;\n  }\n\n  .footer {\n    width: 100%;\n    height: 70px;\n    background-color: #393E41;\n    position: fixed;\n  }\n\n  .footer button, .footer a {\n    display: inline-block;\n    margin: 7.5px 20px;\n    margin-top: 15px;\n  }\n}", "",{"version":3,"sources":["webpack://index.scss","webpack://navigation.scss","webpack://thumbnail.scss","webpack://project.scss","webpack://web-view.scss","webpack://mobile-view.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-color: #222222;\r\n$secondary-color: #393E41;\r\n$tertiary-color: #FF2277;\r\n// $tertiary-color: #CC0044;\r\n$primary-text-color: #FDFFFC;\r\n$secondary-text-color: #393E41;\r\n$tertiary-text-color: #FF2277;\r\n// $tertiary-text-color: #EE1166;\r\n$phoenix-primary-color: #C52437;\r\n$phoenix-secondary-color: #F08843;\r\n$phoenix-tertiary-color: #F7E27C;\r\n\r\n// $tertiary-color: $phoenix-primary-color;\r\n// $tertiary-text-color: $phoenix-secondary-color;\r\n\r\n$title-font: Monaco, monospace;\r\n// $body-font: Arial, Helvetica, sans-serif;\r\n// $body-font: Monospace;\r\n$body-font: Monaco, monospace;\r\n$header-height: 75px;\r\n$search-height: 35px;\r\n$thumbnail-size: 250px;\r\n$bottom-height: 70px;\r\n$regular-font-size: 14px;\r\n$p5-info-height: 75px;\r\n$thumbnail-transition: ease-in 0.25s;\r\n$vhs-shadows-l: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3px 0px;\r\n$vhs-shadows-m: greenyellow -2px 0px 0px, cyan 1.5px -2px 0px, red 2.5px 1.5px 0px;\r\n$vhs-shadows-s: greenyellow -1px 0px 0px, cyan 0.5px -1px 0px, red 1.5px 1px 0px;\r\n$vhs-shadows-drop-l: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\r\n$vhs-shadows-drop-m: drop-shadow(greenyellow -2px 0px 0px) drop-shadow(cyan 1.5px -2px 0px) drop-shadow(red 2.5px 1.5px 0px);\r\n$vhs-shadows-drop-s: drop-shadow(greenyellow -1px 0px 0px) drop-shadow(cyan 0.5px -1px 0px) drop-shadow(red 1.5px 1px 0px);\r\n$grey-shadow: $primary-color 1px 1px 10px;\r\n$grey-shadow-drop: drop-shadow($primary-color 1px 1px 10px);\r\n\r\n* {\r\n  margin: 0;\r\n  font-family: $body-font;\r\n}\r\n\r\nbody {\r\n    background-color: $primary-color;\r\n    font-size:$regular-font-size;\r\n}\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button{\r\n    //-webkit-appearance: none;\r\n    display: none;\r\n}\r\n\r\ninput[type=\"search\"]::-ms-clear{\r\n    display: none;\r\n}\r\n\r\n.button-regular{\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    font-size: 11px;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    margin: 10px;\r\n    position: absolute;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    font-family: $body-font;\r\n}\r\n\r\n.page-404{\r\n    text-align: center;\r\n    // padding: 10%;\r\n    // padding: 10px;\r\n    // display: block;\r\n\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -ms-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-404 *{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.page-404 h1{\r\n    text-shadow: $vhs-shadows-s;\r\n    font-size: 3 * $regular-font-size;\r\n    margin: 0;\r\n}\r\n\r\n.page-404 h2{\r\n    font-size: 2 * $regular-font-size;\r\n    margin: 0;\r\n}\r\n\r\n.page-404 img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    // width: 100%;\r\n    width: 40vw;\r\n    // filter:/*drop-shadow($tertiary-color 0px 0px 50px) */\r\n    //     // drop-shadow($tertiary-color 40px 0px 0px)\r\n    //     // drop-shadow($tertiary-color -40px 0px 0px)\r\n    //     drop-shadow($tertiary-color 0px 40px 0px);\r\n    //     // drop-shadow($tertiary-color 0px -40px 0px);\r\n}\r\n\r\n.page-404 img:hover{\r\n    transition: $thumbnail-transition;\r\n    filter: $vhs-shadows-drop-l;\r\n}\r\n\r\n.page-404 h2:hover{\r\n    filter:$vhs-shadows-drop-s;\r\n    transition: $thumbnail-transition;\r\n\r\n}\r\n\r\n.shadowed:hover{\r\n    transition: $thumbnail-transition;\r\n\r\n    box-shadow: $grey-shadow;\r\n    // box-shadow: $vhs-shadows-l;\r\n    // text-shadow: $vhs-shadows-l;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color:$primary-color;\r\n    color:$primary-text-color;\r\n    font-family: $body-font;\r\n    height: 100vh;\r\n    width: 100vw;;\r\n    overflow: hidden;\r\n}\r\n\r\na {\r\n    color:white;\r\n    transition: $thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    cursor: pointer;\r\n}\r\n\r\na:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    text-shadow: 0 0 5px $primary-text-color;\r\n}\r\n\r\ncode {\r\n    background-color: $secondary-color;\r\n    padding: 3px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.header {\r\n    font-family: $title-font;\r\n    background-color: $secondary-color;\r\n    width: 100%;\r\n    height: $header-height;\r\n}\r\n\r\n.header ::slotted {\r\n    float:left;\r\n}\r\n\r\n.header img {\r\n    transition: $thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    height: ($header-height - 10);\r\n    margin: 5px;\r\n    // box-shadow: greenyellow -1.5px 1.5px 0px, cyan 0.5px -1.5px 0px, red 1.5px 1.5px 0px;\r\n\r\n}\r\n\r\n.header img:hover {\r\n        // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n        transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n        filter: $vhs-shadows-drop-m;\r\n        // filter: $grey-shadow-drop;\r\n}\r\n\r\n.header h1 {\r\n    transition: $thumbnail-transition;\r\n    // // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n}\r\n\r\n.header h1:hover{\r\n    filter: $vhs-shadows-drop-l;\r\n    transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.anniversary {\r\n    background: -moz-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $tertiary-color), color-stop(100%, rgba(0,255,255,1))); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffff', endColorstr='#ff00ff',GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.phoenix {\r\n    background: -moz-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $phoenix-primary-color), color-stop(100%, $phoenix-tertiary-color)); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.vhs-color {\r\n    // mix-blend-mode: difference; \r\n    // color: #00f;\r\n    // opacity: 0.5;\r\n    // text-shadow: #0f0 5px 5px 1px, #f00 10px 10px 1px; //, #00f -5px -5px 0px;\r\n    text-shadow: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3.5px 0px;\r\n}\r\n\r\n.tertiary-text-color{\r\n    color: $tertiary-text-color;\r\n}\r\n\r\n.main-gradient-text {\r\n    background: -moz-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $phoenix-primary-color), color-stop(100%, $phoenix-tertiary-color)); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n// .header h1:hover {\r\n//     // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n//     // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n// }\r\n\r\n.main-body{\r\n    top: $header-height;\r\n    height: calc(100% - #{$header-height});\r\n}\r\n\r\n.popup{\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 101;\r\n    border:none;\r\n    top: $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    text-align: center;\r\n}\r\n\r\n.popup-button{\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 101;\r\n    border:none;\r\n    // top: $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    background:rgb(0,0,0);\r\n    background: transparent\\9;\r\n    background:rgba(0,0,0,0.8);\r\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#22000000,endColorstr=#22000000);\r\n    zoom: 1;\r\n    width:100vw;\r\n}\r\n\r\n.popup-container{\r\n    z-index: 110;\r\n    display: block;\r\n    position: absolute;\r\n    width: 100vw;\r\n    text-align: center;\r\n    // padding:100px 0px;\r\n    padding: 50px 0px;\r\n    pointer-events: none;\r\n}\r\n\r\n.popup-div {\r\n    display: block;\r\n    font-size: larger;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n    // margin-top:50px;\r\n    width: 500px;\r\n    // box-shadow: 10px 10px 10px black;\r\n    box-shadow: 10px 10px 0px $tertiary-color;\r\n    // border-radius: 100px;\r\n    color:$primary-text-color;\r\n    background-color: $primary-color;\r\n    padding: 20px 50px;\r\n    pointer-events: all;\r\n}\r\n\r\n.popup h1 {\r\n    text-align: center;\r\n}\r\n\r\n.popup code {\r\n    border-radius: 0;\r\n    background-color: $tertiary-color;\r\n    -moz-box-shadow:    inset 0 0 10px $secondary-color;\r\n    -webkit-box-shadow: inset 0 0 10px $secondary-color;\r\n    box-shadow:         inset 0 0 10px $secondary-color;\r\n}\r\n\r\n.popup > div small {\r\n    text-align: center;\r\n    display: block;\r\n    color: $tertiary-text-color;\r\n    margin-top:20px;\r\n}\r\n\r\n.share-button-div{\r\n    text-align: center;\r\n}\r\n\r\n.share-button-div > *{\r\n    margin: 5px;\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    transition: ease-in 0.3s;\r\n}\r\n\r\n.share-button-div > *:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n\r\n    .share-button-icon{\r\n        box-shadow:$tertiary-color 3px 2px;\r\n    }\r\n}\r\n\r\n.share-button-icon{\r\n    border-radius: 1000px;\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.share-count-wrapper > *{\r\n    margin-left: -20px;\r\n    margin-top: -5px;\r\n    padding: 3px 6px;\r\n    background-color: $secondary-color;\r\n    color: $primary-text-color;\r\n    border-radius: 8px;\r\n}\r\n\r\n.share-link-container{\r\n    // background-color: white;\r\n}\r\n\r\n.share-link-copy{\r\n    padding: 7.5px 10px;\r\n    padding-top: 7;\r\n    padding-bottom: 8;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    // border-radius: 20px;\r\n    // border-top-right-radius: 20px;\r\n    // border-bottom-right-radius: 20px;\r\n\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.share-link{\r\n\r\n    // -moz-user-select: all;\r\n    // -webkit-user-select: all;\r\n    // -ms-user-select: all;\r\n    // user-select: all;\r\n\r\n    text-align: center;\r\n    width: 320px;\r\n    padding: 7.5px;\r\n    text-overflow: ellipsis;\r\n    border: none;\r\n    // border-top-left-radius: 20px;\r\n    // border-bottom-left-radius: 20px;\r\n\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n@import './navigation.scss';\r\n\r\n.project-list {\r\n    margin:0;\r\n    height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n    text-align: center;\r\n    overflow-x:hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.link-disabled {\r\n    display: none;\r\n}\r\n\r\n@import './thumbnail.scss';\r\n@import './project.scss';\r\n\r\n.footer{\r\n    height: $bottom-height;\r\n    width: 100vw;\r\n    position: fixed;\r\n    bottom: 0;\r\n    text-align: center;\r\n    margin:0;\r\n}\r\n\r\n.footer hr{\r\n    border-color:$tertiary-color\r\n}\r\n\r\n.footer button, .footer a{\r\n    font-size:$regular-font-size;\r\n    padding: 0;\r\n    color: $primary-text-color;    \r\n    // text-shadow: $primary-color 2px 2px 1px;\r\n    text-decoration: underline;\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.footer a{\r\n    text-shadow: 2px 2px 4px $primary-color;\r\n}\r\n\r\n.footer button:hover, .footer a:hover {\r\n    text-shadow: 0 0 5px $primary-text-color;\r\n}\r\n\r\n.copyright {\r\n    margin-top: 0px;\r\n    color:$tertiary-text-color;\r\n    font-size: $regular-font-size;\r\n    text-shadow: $primary-color 2px 2px 1px;\r\n}\r\n\r\n@import 'web-view.scss';\r\n@import 'mobile-view.scss';",".navigator {\r\n    background-color: $tertiary-color;\r\n    height: $search-height;\r\n    top: $header-height;\r\n    width: 100%;\r\n    margin:0;\r\n}\r\n\r\n.navigator img {\r\n    display: block;\r\n    height: $search-height - 10;\r\n    margin: 5px;\r\n    right: 5px;\r\n    pointer-events:none;\r\n    position: absolute;\r\n}\r\n\r\n.navigator input {\r\n    -moz-box-shadow:    inset 0 0 10px $secondary-color;\r\n    -webkit-box-shadow: inset 0 0 10px $secondary-color;\r\n    box-shadow:         inset 0 0 10px $secondary-color;\r\n    font-size: $search-height - 20;\r\n    background:$tertiary-color;\r\n    border:none;\r\n    color:$primary-text-color;\r\n    width: calc(100% - 45px);\r\n    height:100%;\r\n    padding: 0 10px;\r\n    padding-right:$search-height;\r\n}\r\n\r\n.navigator input::placeholder {\r\n    color:$primary-text-color;\r\n    text-shadow: 1px 1px 4px $secondary-text-color;\r\n    // text-shadow: -1px -1px 2.5px $secondary-text-color, 1px -1px 2.5px $secondary-text-color, -1px 1px 2.5px $secondary-text-color, 1px 1px 2.5px $secondary-text-color;\r\n}\r\n\r\n.navigator button {\r\n    transition: ease-in 0.3s;\r\n    color: $primary-text-color;\r\n    display: block;\r\n    position: absolute;\r\n    height: $search-height - 5px;\r\n    background-color: $primary-color;\r\n    margin: 1.25px;\r\n    right: $search-height+10px;\r\n    border:none;\r\n    padding: 8px 8px;\r\n    // border-radius: 5px;\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    // box-shadow: $secondary-color 7.5px 2.5px;\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.navigator button:hover{\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    box-shadow: $secondary-color 7.5px 2.5px;\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    // box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.navigator button input{\r\n    -moz-box-shadow:    none;\r\n    -webkit-box-shadow: none;\r\n    box-shadow:         none;\r\n    background:none;\r\n    border:none;\r\n    color:$primary-text-color;\r\n    width: $search-height - 20;\r\n    height: $search-height - 20;\r\n    float:left;\r\n}\r\n\r\n.navigator button label{\r\n    margin-top:0px;\r\n    margin-left: 8px;\r\n    float:right;\r\n}\r\n\r\n// input[type=\"checkbox\"]::before {\r\n//     content: \"\";\r\n//     display: inline-block;\r\n//     margin-left: -3px;\r\n//     margin-top: -1.5px;\r\n//     height: 16px;\r\n//     width: 16px;\r\n//     background-color: white;\r\n//     border: 1px solid rgb(166, 166, 166);\r\n//     border-radius: 4px;\r\n//     // box-shadow: inset 0 2px 5px rgba(0,0,0,0.25);\r\n//  }\r\n\r\n//  input[type=\"checkbox\"]:checked::before {\r\n//     background-color: $tertiary-color;\r\n//     border: 1px solid $tertiary-color;\r\n\r\n//  }\r\n\r\n// input[type=\"checkbox\"]:checked::after {\r\n//     content: '';\r\n//     position: absolute;\r\n//     width: 11px;\r\n//     height: 4px;\r\n//     background-color: $tertiary-color;\r\n//     top: 11px;\r\n//     left: 10.9px;\r\n//     border: 3px solid white;\r\n//     border-top: none;\r\n//     border-right: none;\r\n//     -webkit-transform: rotate(-45deg);\r\n//     -moz-transform: rotate(-45deg);\r\n//     -o-transform: rotate(-45deg);\r\n//     -ms-transform: rotate(-45deg);\r\n//     transform: rotate(-45deg);\r\n//  }",".project-thumbnail {\r\n    text-decoration:none;\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    // box-shadow:inset 0 0 $thumbnail-size 75px #101010, 5px 5px 1px 0px $secondary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 75px #101010,10px 7.5px 1px 0px $tertiary-color;\r\n    // box-shadow: inset 0 0 $thumbnail-size 75px #101010, $vhs-shadows-l;\r\n    // border-radius: 0px;\r\n    height: $thumbnail-size;\r\n    width: $thumbnail-size;\r\n    display: inline-table;\r\n    text-align: right;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 30px;\r\n    transition:$thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.project-thumbnail:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transition:$thumbnail-transition;\r\n    // box-shadow:inset 0 0 $thumbnail-size 200px black,10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 200px black, 5px 5px 1px 0px $secondary-color;\r\n    text-shadow: none;\r\n}\r\n\r\n.project-thumbnail:last-of-type {\r\n    transition:$thumbnail-transition;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.project-thumbnail div {\r\n    transition:$thumbnail-transition;\r\n    // display:table;\r\n    text-align: center;\r\n    width:$thumbnail-size;\r\n    //height: 100%;\r\n    // margin-top: 10%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.project-thumbnail div *{\r\n    transition:$thumbnail-transition;\r\n    padding: 0px 20px;\r\n}\r\n\r\n.project-thumbnail div p {\r\n    transition:$thumbnail-transition;\r\n    margin-top: 10px;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.project-thumbnail small {\r\n    text-align: right;\r\n    transition:$thumbnail-transition;\r\n    display: block;\r\n    position: absolute;\r\n    margin: 10px;\r\n    max-width: $thumbnail-size - 20px;\r\n    // white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.post-thumbnail {\r\n    text-decoration:none;\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    // box-shadow:inset 0 0 $thumbnail-size 75px #101010, 5px 5px 1px 0px $secondary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 75px #101010,10px 7.5px 1px 0px $tertiary-color;\r\n    // border-radius: 5px;\r\n    height: $thumbnail-size;\r\n    width: $thumbnail-size;\r\n    display: inline-table;\r\n    text-align: right;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 30px;\r\n    transition:$thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.post-thumbnail:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transition:$thumbnail-transition;\r\n    // box-shadow:inset 0 0 $thumbnail-size 200px black,10px 7.5px 1px 0px $tertiary-color;\r\n        box-shadow:inset 0 0 $thumbnail-size 200px black, 5px 5px 1px 0px $secondary-color;\r\n    text-shadow: none;\r\n}\r\n\r\n.post-thumbnail:last-of-type {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.post-thumbnail div {\r\n    // display:table;\r\n    text-align: center;\r\n    width:$thumbnail-size;\r\n    //height: 100%;\r\n    // margin-top: 10%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.post-thumbnail div *{\r\n    padding: 0px 20px;\r\n}\r\n\r\n.post-thumbnail div p {\r\n    margin-top: 10px;\r\n}\r\n\r\n.post-thumbnail small {\r\n    text-align: right;\r\n    transition:$thumbnail-transition;\r\n    display: block;\r\n    position: absolute;\r\n    margin: 10px;\r\n    max-width: $thumbnail-size - 20px;\r\n    // white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    right: 0;\r\n    bottom: 0;\r\n}",".project-page {\r\n    margin:0;\r\n    padding:0;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    width:100%;\r\n    text-align: center;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n// .project-page h1:first-of-type{\r\n//     padding-top: 10px;\r\n// }\r\n\r\n// .project-page p:first-of-type{\r\n//     padding: 10px;\r\n//     padding-top: 0px;\r\n// }\r\n\r\n.close-icon {\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    margin: 5px;\r\n    // position:sticky;\r\n    position: absolute;\r\n    float: right;\r\n    z-index: 100;\r\n    right: 35px;\r\n    margin-top: 15px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-icon:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-m;\r\n    // filter: $vhs-shadows-drop-m;\r\n}\r\n\r\n.share-icon {\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    margin: 5px;\r\n    // position:sticky;\r\n    position: absolute;\r\n    float: right;\r\n    right: 90px;\r\n    z-index: 100;\r\n    margin-top: 15px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 2px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 2px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n    cursor: pointer;\r\n}\r\n\r\n.share-icon:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    // -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    // filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-s;\r\n    // filter: $vhs-shadows-drop-s;\r\n}\r\n\r\n.about-h1{\r\n    margin: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.about-h2{\r\n    margin: 10px;\r\n    // margin-top:30px;\r\n    margin-bottom: -5px;\r\n    text-align: left;\r\n    // padding: 10px;\r\n    // background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    // box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n}\r\n\r\n.about-p{\r\n    text-align: left;\r\n    // text-align: justify;\r\n    margin-bottom: -7.5px;\r\n    padding-bottom: 7.5px;\r\n    text-align: justify;\r\n}\r\n\r\n.about-me{\r\n    margin-top: 10px;\r\n    // border-radius: 10px;\r\n    background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    padding: 15px;\r\n    // padding-bottom: 10px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.about-me img{\r\n    // border-radius: 10px;\r\n    // background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    box-shadow: $primary-color 1px 1px 10px;\r\n    // box-shadow: 10px 7.5px 1px 0px $primary-color;\r\n    // height: 20px;\r\n    // width: 10px;\r\n    transition: ease-in 0.2s;\r\n\r\n}\r\n\r\n.about-me img:hover{\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n}\r\n\r\n.contact-container {\r\n    width: calc(100vw - 100px);\r\n    padding: 0 50px;\r\n    padding-top: 50px;\r\n}\r\n\r\n$contact-left: 40%;\r\n\r\n.contact-left {\r\n    float: left;\r\n    width: $contact-left;\r\n    text-align: center;\r\n}\r\n\r\n.contact-right h1{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contact-p{\r\n    background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    padding: 20px;\r\n    text-align: justify;\r\n}\r\n\r\n.contact-thumbnail {\r\n    display: block;\r\n    background-color: $secondary-color;\r\n    width: 100%;\r\n    height: 40px;\r\n    // border-radius: 100px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n}\r\n\r\n.contact-thumbnail:hover{\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    box-shadow:5px 5px 1px 0px $tertiary-color;\r\n}\r\n\r\n.contact-thumbnail div{\r\n    float: right;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    font-size: 40px;\r\n    display: block;\r\n    padding: 0 20px;\r\n    text-decoration: none;\r\n    margin-top: -5px;\r\n    width: calc(100% - 80px);\r\n    text-align: right;\r\n}\r\n\r\n.contact-thumbnail img{\r\n    width: 40px;\r\n    float: left;\r\n}\r\n\r\n.p5-info {\r\n    position: absolute;\r\n    width: 100%;\r\n    // transition: ease-in 0.2s;\r\n    text-align: center;\r\n    z-index: 1;\r\n    border-bottom: 2px solid $secondary-color;\r\n}\r\n\r\n.p5-info h1{\r\n    // transition: ease-in 0.2s;\r\n    font-size: 3 * $regular-font-size;\r\n    text-align: left;\r\n    margin-left: $p5-info-height + 25px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.p5-info p{\r\n    // transition: all ease-in 0.2s;\r\n    // margin-top: 5px;\r\n    display: none;\r\n    visibility: hidden;\r\n    opacity: 1;\r\n\r\n}\r\n\r\n.p5-info input {\r\n    // z-index: 20;\r\n    // transition: ease-in 0.2s;\r\n    background-color: $tertiary-color;\r\n    // padding: 5px;\r\n    // margin: 10px;\r\n    // position: absolute;\r\n    // top:$header-height+12px;\r\n    // right: 145px;\r\n    // width: 80px;\r\n    // left: 0;\r\n}\r\n\r\n.p5-info button {\r\n    // transition: ease-in 0.2s;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    margin: 10px;\r\n    position: absolute;\r\n    // top:$header-height+ 12px;\r\n    // right: 145px;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n}\r\n\r\n.p5-info-slide {\r\n    background: none;\r\n    border: none;\r\n    height: $p5-info-height;\r\n    // margin: 5px;\r\n    position:fixed;\r\n    z-index: 100;\r\n    left: 25px;\r\n    // margin-top: 10px;\r\n    margin: 5px;\r\n    // right: 35px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.p5-info-slide img{\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n}\r\n\r\n.p5-info-slide img:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-m;\r\n    // filter: $vhs-shadows-drop-m;\r\n}\r\n\r\n.p5-info-show{\r\n    z-index: 5;\r\n    // transition: ease-in 0.2s;\r\n    border-bottom: 2px solid $tertiary-color;\r\n    box-shadow: 0px 10px 10px black;\r\n}\r\n\r\n.p5-info-show p{\r\n    // transition: all ease-in 0.2s;\r\n    opacity: 1;\r\n    display: block;\r\n    visibility: visible;\r\n}\r\n\r\n.p5-info-show::after{\r\n    z-index: 20;\r\n    content: \"Hide this information panel with the ^ button above\";\r\n    font-style: italic;\r\n    font-size: 0.75 * $regular-font-size;\r\n    // text-shadow: $primary-color 1px 1px 0, $primary-color -1px 1px 0,\r\n    //     $primary-color 1px -1px 0, $primary-color -1px -1px 0;\r\n    text-shadow: $primary-color 1px 1px 2px;\r\n    // text-shadow: $grey-shadow;\r\n    // float: left;\r\n    display: inline;\r\n    position: absolute;\r\n    left: 10px;\r\n    // bottom: px;\r\n}\r\n\r\n.p5-canvas{\r\n    // margin-left: 5px;\r\n    width: 100vw;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    // border: white 2px solid;\r\n    position: absolute;\r\n    z-index: 0;\r\n    top: $p5-info-height + $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height});\r\n    // max-height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height} - 10px);\r\n    text-align: center;\r\n    cursor: crosshair;\r\n}\r\n\r\n.weblog-signature{\r\n    margin-top:15px;\r\n    text-shadow: black 1px 1px 5px;\r\n    padding-left: 30px;\r\n    color:$tertiary-text-color;\r\n    font-weight: normal;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.music-release-banner{\r\n    background: url('../../../public/assets/img/music-banner.jpg');\r\n    background-position:0% 20%;\r\n    background-size: cover;\r\n    background-blend-mode: darken;\r\n    border-bottom:1px solid white;\r\n    text-align: center;\r\n    padding: 15px;\r\n    padding-top: 0px;\r\n}\r\n\r\n\r\n.music-release-banner p,.music-release-banner h1,.music-release-banner h2,.music-release-banner h3 {\r\n    display: block;\r\n    width: max-content;\r\n    height: max-content;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    text-shadow: 1px 1px 5px black;\r\n}\r\n\r\n.submergence-hover{\r\n    transition: ease-out 0.2s;\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n}\r\n\r\n.submergence-hover img{\r\n    transition: ease-out 0.2s;\r\n}\r\n\r\n.submergence-hover:hover{\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 0px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 0px $tertiary-color);\r\n}\r\n\r\n// .submergence-hover:hover img {\r\n//     // transform: translateX(1px) translateY(20px);\r\n// }\r\n","@media only screen and (min-width: 769px){\r\n    $header-height:75px;\r\n    $thumbnail-size: 250px;\r\n    $bottom-height: 70px;\r\n\r\n    body{\r\n        overflow: hidden;\r\n    }\r\n\r\n    h1 {\r\n        // text-shadow: $vhs-shadows-l;\r\n    }\r\n    \r\n    h2 {\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .header {\r\n        height:$header-height;\r\n    }\r\n\r\n    .header h1, .header img {\r\n        float: left;\r\n        font-size: $header-height - 20;\r\n    }\r\n\r\n    .header h1 {\r\n        margin-top: 3px;\r\n        // margin-right: 10px;\r\n        // float: right;\r\n        padding: 0;\r\n        // bottom: 3px;\r\n    }\r\n\r\n    .header img {\r\n        // greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3px 0px;\r\n        // -webkit-filter: $vhs-shadows-drop-s;\r\n        // filter: $vhs-shadows-drop-s;\r\n    }\r\n\r\n    .button-regular {\r\n        padding: 7.5px 12px;\r\n    }\r\n\r\n    .hide-on-web {\r\n        visibility: hidden;\r\n    }\r\n\r\n    .hide-on-mobile {\r\n        visibility: visible;\r\n    }\r\n\r\n    .popup{\r\n        height: calc(100% - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .navigator img {\r\n        display: block;\r\n    }\r\n\r\n    .navigator button{\r\n        right:$search-height+10px;\r\n    }\r\n\r\n    .project-list {\r\n        margin:0;\r\n        height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n        padding: 0px 50px;\r\n    }\r\n\r\n    .project-thumbnail {\r\n        transition:$thumbnail-transition;\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n    }\r\n\r\n    .post-thumbnail {\r\n        transition:$thumbnail-transition;\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n    }\r\n\r\n    .project-thumbnail:first-of-type, .post-thumbnail:first-of-type{\r\n        margin-top: 50px;\r\n    }\r\n\r\n    .project-thumbnail:last-of-type, .post-thumbnail:last-of-type{\r\n        margin-bottom: 200px;\r\n    }\r\n    \r\n    .project-thumbnail p {\r\n        transition:$thumbnail-transition;\r\n        display: none;\r\n    }\r\n\r\n    .project-thumbnail:hover p {\r\n        transition:$thumbnail-transition;\r\n        display: block;\r\n    }\r\n\r\n    .project-thumbnail:hover small{\r\n        transition:$thumbnail-transition;\r\n        display: none;\r\n    }\r\n\r\n    .project-thumbnail:hover div{\r\n        transition:$thumbnail-transition;\r\n    }\r\n\r\n\r\n    .close-icon{\r\n        height: 40px;\r\n    }\r\n\r\n    .project-page{\r\n        height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .contact-left {\r\n        float: left;\r\n        width: $contact-left;\r\n        text-align: center;\r\n    \r\n    }\r\n    \r\n    .contact-right {\r\n        float: right;\r\n        left: calc(0.4 * (100vw));\r\n        text-align: center;\r\n        position: fixed;\r\n        width: calc(0.6 * (100vw) - 100px);\r\n        margin-left: 10px;\r\n        padding: 0px 50px;\r\n    }\r\n    \r\n    .contact-right h1{\r\n        margin-bottom: 20px;\r\n    }\r\n    \r\n\r\n    .about{\r\n        margin: 0 20%;\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .about-me{\r\n        display: flex;\r\n    }\r\n\r\n    .about-me img{\r\n        width: calc(50% - 42.5px);\r\n        // margin-right: 5px;\r\n        // height: auto;\r\n        display: inline-block;\r\n        right: 0;\r\n        align-self: center;\r\n    }\r\n    \r\n    .about-me div {\r\n        width: 50%;\r\n        // margin-right: 20px;\r\n        // margin-left: 0px;\r\n        // padding: 0;\r\n        // padding: 0 10px;\r\n        padding-right: 30px;\r\n        align-self: center;\r\n    }\r\n\r\n    .about-me div p {\r\n        width: 100%;\r\n    }\r\n\r\n    .about-me:last-child{\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    .p5-info{\r\n        // padding-top: 10px;\r\n        height: $p5-info-height;\r\n        // margin-top: -5px;\r\n        background-color: $primary-color;\r\n        // background-color: white;\r\n    }\r\n    \r\n    .p5-info h1{\r\n        font-size: 3 * $regular-font-size;\r\n        margin-left: $p5-info-height + 25px;\r\n        padding-top: 10px;\r\n    }   \r\n\r\n    .p5-info p{\r\n        max-width: 750px;\r\n        margin: 10px auto;\r\n    }\r\n\r\n    .p5-info input {\r\n        position: static;\r\n        display: block;\r\n        // top: 0;\r\n        margin-left: 5px;\r\n        margin-bottom: -5px;\r\n        // bottom: $bottom-height;\r\n        // top:$header-height + $p5-info-height;\r\n    }\r\n\r\n    .p5-info button {\r\n        // padding: 5px;\r\n        // display: block;\r\n        padding: 7.5px 12px;\r\n        margin: 10px;\r\n        position: absolute;\r\n        float: right;\r\n        // top:$header-height+ 12px;\r\n        top: 10px;\r\n        right: 145px;\r\n    }\r\n\r\n    .p5-info-slide {\r\n        background: none;\r\n        border: none;\r\n        height: $p5-info-height;\r\n        // margin: 5px;\r\n        position:fixed;\r\n        left: 25px;\r\n        // margin-top: 10px;\r\n        margin: 5px;\r\n        // right: 35px;\r\n        margin-top: 15px;\r\n    }\r\n    \r\n    .p5-info-slide img{\r\n        transition: ease-in 0.2s;\r\n        height: 40px;\r\n        // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n        -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        // -webkit-filter: $vhs-shadows-drop-l;\r\n        // filter: $vhs-shadows-drop-l;\r\n    }\r\n\r\n    .p5-info-show{\r\n        height: auto;\r\n        padding-bottom: 10px;\r\n    }\r\n\r\n    .p5-info-show::after{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    // .p5-canvas {\r\n    //     // margin-top: $p5-info-height;\r\n    //     // background-color: blue;\r\n    //     // height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height});\r\n    // }\r\n\r\n    .submergence-hover br{\r\n        display: none;\r\n    }\r\n\r\n    .weblog-post{\r\n        padding: 10px 30px;\r\n        // text-align: center;\r\n    }\r\n\r\n    .weblog-post * {\r\n        max-width: 750px;\r\n        margin: 2px auto;\r\n        text-align: center;\r\n    }\r\n\r\n    .weblog-post small{\r\n        // margin: 0px;\r\n        display: block;\r\n    }\r\n\r\n    .weblog-post p {\r\n        // text-align: left;\r\n        text-align: justify;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .weblog-post h1 {\r\n        max-width: calc(100vw - 250px);\r\n        display: block;\r\n    }\r\n\r\n    .footer {\r\n        position: fixed;\r\n        background-color: $secondary-color;\r\n        height: $bottom-height;\r\n    }\r\n\r\n    .footer button, .footer a {\r\n        display: inline-block;\r\n        margin: 5px 15px;\r\n        margin-top: 15px;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n}\r\n","@media only screen and (max-width: 769px){\r\n    $header-height:40px;\r\n    $thumbnail-size: 200px;\r\n    $bottom-height: 70px;\r\n    $regular-font-size: 11px;\r\n    $p5-info-height: 40px;\r\n    $p5-info-closed: 26px;\r\n\r\n    body {\r\n        font-size:$regular-font-size;\r\n        height: 100%;\r\n        width: 100vw;\r\n    }\r\n\r\n    html{\r\n        height: 100%;\r\n    }\r\n\r\n    code{\r\n        padding: 0px 4px;\r\n    }\r\n\r\n    h1 {\r\n        // text-shadow: greenyellow -1px 1px 0px, cyan 0px -1px 0px, red 1px 1px 0px;\r\n        // text-shadow: $vhs-shadows-m;\r\n    }\r\n    \r\n    h2 {\r\n        // text-shadow: greenyellow -1px 1px 0px, cyan 0px -1px 0px, red 1px 1px 0px;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .main-body{\r\n        height: 100%;\r\n        width: 100vw;\r\n    }\r\n\r\n    .header {\r\n        text-align: center;\r\n        height:$header-height;\r\n        width: 100vw;\r\n    }\r\n\r\n    .header h1{\r\n        font-size: 28px;\r\n        margin: 0px;\r\n        margin-top: 2px;\r\n        margin-left:8px;\r\n        float: left;\r\n    }\r\n\r\n    .header img {\r\n        height: 30px;\r\n        float: right;\r\n    }\r\n\r\n    .hide-on-web {\r\n        visibility: visible;\r\n    }\r\n\r\n    .hide-on-mobile {\r\n        visibility: hidden;\r\n    }\r\n\r\n\r\n    .popup{\r\n        display:none;\r\n        top: $header-height;\r\n        height: calc(100% - #{$header-height} - #{$bottom-height});\r\n    }\r\n    .navigator img {\r\n        display: none;\r\n    }\r\n\r\n    .navigator button{\r\n        right:5px;\r\n        font-size: $regular-font-size;\r\n    }\r\n\r\n    .navigator input{\r\n        font-size: $regular-font-size;\r\n        width: calc(100% - 45px);\r\n    }\r\n\r\n    .project-thumbnail{\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n        // margin: 10px;\r\n        margin: 10px;\r\n        box-shadow:inset 0 0 $thumbnail-size 50px black, 10px 10px 1px 0px $tertiary-color;\r\n    }\r\n\r\n    .project-thumbnail:first-of-type{\r\n        margin-top: 20px;\r\n    }\r\n    .project-thumbnail:last-of-type{\r\n        margin-bottom: 100px;\r\n    }\r\n    \r\n    .post-thumbnail {\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n        margin: 10px;\r\n        box-shadow:inset 0 0 $thumbnail-size 50px black, 10px 10px 1px 0px $tertiary-color;\r\n    }\r\n\r\n    .post-thumbnail:last-of-type{\r\n        margin-bottom: 100px;\r\n    }\r\n\r\n    .post-thumbnail:first-of-type{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .project-thumbnail p {\r\n        display:none;\r\n    }\r\n\r\n    .project-thumbnail h2 {\r\n        padding: 0px 40px;\r\n    }\r\n\r\n    .project-list {\r\n        margin-top:2px;\r\n        // width: calc(100% - 20px);\r\n        height: calc(100% - (#{$search-height} + #{$header-height} + #{$bottom-height}));\r\n        // height: 100%;\r\n        // max-height: 10px;\r\n        overflow-y: auto;\r\n        // padding: 0px;\r\n        // margin: 0px;\r\n        // padding: 0px 10px;\r\n        // padding-right: 20px;\r\n        margin-left: -10px;\r\n        position: absolute;\r\n        text-align: center;\r\n    }\r\n\r\n    .close-icon {\r\n        // position: sticky;\r\n        position: fixed;\r\n        right: 0px;\r\n        margin-top: 2px;\r\n        height: 30px;\r\n\r\n    }\r\n\r\n    .project-page{\r\n        height: calc(100% - (#{$header-height} + #{$bottom-height}));\r\n        position: absolute;\r\n    }\r\n\r\n    .share-icon {\r\n        display: none;\r\n    }\r\n\r\n    .contact-container {\r\n        width: calc(100vw - 100px);\r\n        text-align: center;\r\n        padding: 30px 50px;\r\n    }\r\n\r\n    .contact-left {\r\n        width: calc(100% - 60px);\r\n        text-align: center;\r\n        float: none;\r\n        padding: 0 30px;\r\n        margin-left: -25px;\r\n    }\r\n    \r\n    .contact-right {\r\n        float: none;\r\n        left: 0px;\r\n        text-align: center;\r\n        position: relative;\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    \r\n    .contact-right h1{\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .contact-thumbnail div{\r\n        font-size: 20px;\r\n        margin-top: 10px;\r\n        // float: right;\r\n    }\r\n\r\n    .about{\r\n        margin: 0 20px;\r\n    }\r\n\r\n    .about-me {\r\n        padding: 15px;\r\n    }\r\n\r\n    .about-me img{\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-top: 10px;\r\n        width: 50%;\r\n    }\r\n    \r\n    .about-me p {\r\n        display: block;\r\n    }\r\n\r\n    // .about-me div{\r\n    //     // margin-top: 20px;\r\n    // }\r\n\r\n    .p5-info h1{\r\n        font-size: 2 * $regular-font-size;\r\n        margin-left: $p5-info-height - 2.5px;\r\n        padding: 5px;\r\n        max-width: 45%;\r\n        max-width: calc(100% - 200px);\r\n        max-height: $p5-info-closed;\r\n        overflow: hidden;\r\n        white-space: nowrap;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .p5-info p{\r\n        text-align: justify;\r\n        padding: 5px;\r\n    }\r\n\r\n    .p5-info button, .p5-info input {\r\n        font-size: $regular-font-size;\r\n        margin-top: 5px;\r\n        position: static;\r\n        display: block;\r\n        float: right;\r\n        margin-right: 5px;\r\n        color: $primary-text-color;\r\n    }\r\n\r\n    .p5-info button{\r\n        padding: 5px;\r\n        margin: 7.5px;\r\n        position: absolute;\r\n        top:-2px;\r\n        right: 35px;\r\n        // top: 10px;\r\n        // right: 10px;\r\n    }\r\n\r\n    .p5-info input{\r\n        width: 165px;\r\n        position: absolute;\r\n        margin: 0;\r\n        margin-top: -2px;\r\n        margin-left: 5px;\r\n        // display: inline/;\r\n        // margin: 0 auto;\r\n        // margin-left: auto;\r\n        // margin-right: auto;\r\n        // padding: 0;\r\n        // margin-top: 12px;\r\n    }\r\n\r\n    .p5-info-slide {\r\n        background: none;\r\n        border: none;\r\n        height: $p5-info-height;\r\n        position:fixed;\r\n        left: 0px;\r\n        margin: 5px;\r\n        margin-top: 3px;\r\n    }\r\n    \r\n    .p5-info-slide img{\r\n        transition: ease-in 0.2s;\r\n        height: 30px;\r\n        // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n        -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        // -webkit-filter: $vhs-shadows-drop-l;\r\n        // filter: $vhs-shadows-drop-l;\r\n    }\r\n\r\n    .p5-info-show{\r\n        height: auto;\r\n        padding-bottom: 5px;\r\n        background-color: $primary-color;\r\n    }\r\n\r\n    .p5-info-show::after{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .p5-info-show h1{\r\n        // overflow: none;\r\n        max-height: inherit !important;\r\n        white-space:normal;\r\n        // text-overflow:inherit;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .p5-canvas{\r\n        top: $p5-info-height;\r\n        height: calc(100% - #{$p5-info-height});\r\n        // margin-bottom: -20px;\r\n        padding: 0;\r\n        // margin: 0;\r\n    }\r\n\r\n    .submergence-hover br{\r\n        display: block;\r\n    }\r\n\r\n    .weblog-post{\r\n        padding: 0 10px;\r\n        text-align: center;\r\n        // margin:5px;\r\n        margin-top:10px;\r\n    }\r\n\r\n    .weblog-post p {\r\n        text-align: left;\r\n        line-height: 20px;\r\n    }\r\n\r\n    .footer {\r\n        width: 100%;\r\n        height:$bottom-height;\r\n        // background-color: none;\r\n        background-color: $secondary-color;\r\n        // position: relative;\r\n        position: fixed;\r\n        //position: fixed;\r\n        // background-color: blue;\r\n    }\r\n\r\n    .footer button, .footer a {\r\n        // display: block;\r\n        display: inline-block;\r\n        // margin: 15px auto;\r\n        margin: 7.5px 20px;\r\n        margin-top:15px;\r\n        // text-shadow: $vhs-shadows-s;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .copyright{\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/getUrl.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/getUrl.js ***!
  \**************************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var e={91:function(e){e.exports=function(e,r){if(!r){r={}}e=e&&e.__esModule?e.default:e;if(typeof e!=="string"){return e}if(/^['"].*['"]$/.test(e)){e=e.slice(1,-1)}if(r.hash){e+=r.hash}if(/["'() \t\n]/.test(e)||r.needQuotes){return'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"')}return e}}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var n=true;try{e[t](_,_.exports,__nccwpck_require__);n=false}finally{if(n)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(91)}();

/***/ }),

/***/ "./public/assets/img/music-banner.jpg":
/*!********************************************!*\
  !*** ./public/assets/img/music-banner.jpg ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/music-banner.d532f2f726b2a0030e7f7e57d5f8f9a4.jpg");

/***/ }),

/***/ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js ***!
  \***********************************************************************************/
/***/ (function() {

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	if (!Prism.plugins.toolbar) {
		console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');

		return;
	}

	/**
	 * When the given elements is clicked by the user, the given text will be copied to clipboard.
	 *
	 * @param {HTMLElement} element
	 * @param {CopyInfo} copyInfo
	 *
	 * @typedef CopyInfo
	 * @property {() => string} getText
	 * @property {() => void} success
	 * @property {(reason: unknown) => void} error
	 */
	function registerClipboard(element, copyInfo) {
		element.addEventListener('click', function () {
			copyTextToClipboard(copyInfo);
		});
	}

	// https://stackoverflow.com/a/30810322/7595472

	/** @param {CopyInfo} copyInfo */
	function fallbackCopyTextToClipboard(copyInfo) {
		var textArea = document.createElement('textarea');
		textArea.value = copyInfo.getText();

		// Avoid scrolling to bottom
		textArea.style.top = '0';
		textArea.style.left = '0';
		textArea.style.position = 'fixed';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			var successful = document.execCommand('copy');
			setTimeout(function () {
				if (successful) {
					copyInfo.success();
				} else {
					copyInfo.error();
				}
			}, 1);
		} catch (err) {
			setTimeout(function () {
				copyInfo.error(err);
			}, 1);
		}

		document.body.removeChild(textArea);
	}
	/** @param {CopyInfo} copyInfo */
	function copyTextToClipboard(copyInfo) {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(copyInfo.getText()).then(copyInfo.success, function () {
				// try the fallback in case `writeText` didn't work
				fallbackCopyTextToClipboard(copyInfo);
			});
		} else {
			fallbackCopyTextToClipboard(copyInfo);
		}
	}

	/**
	 * Selects the text content of the given element.
	 *
	 * @param {Element} element
	 */
	function selectElementText(element) {
		// https://stackoverflow.com/a/20079910/7595472
		window.getSelection().selectAllChildren(element);
	}

	/**
	 * Traverses up the DOM tree to find data attributes that override the default plugin settings.
	 *
	 * @param {Element} startElement An element to start from.
	 * @returns {Settings} The plugin settings.
	 * @typedef {Record<"copy" | "copy-error" | "copy-success" | "copy-timeout", string | number>} Settings
	 */
	function getSettings(startElement) {
		/** @type {Settings} */
		var settings = {
			'copy': 'Copy',
			'copy-error': 'Press Ctrl+C to copy',
			'copy-success': 'Copied!',
			'copy-timeout': 5000
		};

		var prefix = 'data-prismjs-';
		for (var key in settings) {
			var attr = prefix + key;
			var element = startElement;
			while (element && !element.hasAttribute(attr)) {
				element = element.parentElement;
			}
			if (element) {
				settings[key] = element.getAttribute(attr);
			}
		}
		return settings;
	}

	Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
		var element = env.element;

		var settings = getSettings(element);

		var linkCopy = document.createElement('button');
		linkCopy.className = 'copy-to-clipboard-button';
		linkCopy.setAttribute('type', 'button');
		var linkSpan = document.createElement('span');
		linkCopy.appendChild(linkSpan);

		setState('copy');

		registerClipboard(linkCopy, {
			getText: function () {
				return element.textContent;
			},
			success: function () {
				setState('copy-success');

				resetText();
			},
			error: function () {
				setState('copy-error');

				setTimeout(function () {
					selectElementText(element);
				}, 1);

				resetText();
			}
		});

		return linkCopy;

		function resetText() {
			setTimeout(function () { setState('copy'); }, settings['copy-timeout']);
		}

		/** @param {"copy" | "copy-error" | "copy-success"} state */
		function setState(state) {
			linkSpan.textContent = settings[state];
			linkCopy.setAttribute('data-copy-state', state);
		}
	});
}());


/***/ }),

/***/ "./node_modules/prismjs/plugins/download-button/prism-download-button.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/download-button/prism-download-button.js ***!
  \*******************************************************************************/
/***/ (function() {

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined' || !document.querySelector) {
		return;
	}

	Prism.plugins.toolbar.registerButton('download-file', function (env) {
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
			return;
		}
		var src = pre.getAttribute('data-src');
		var a = document.createElement('a');
		a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
		a.setAttribute('download', '');
		a.href = src;
		return a;
	});

}());


/***/ }),

/***/ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js ***!
  \*************************************************************************/
/***/ (function() {

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	/**
	 * Plugin name which is used as a class name for <pre> which is activating the plugin
	 *
	 * @type {string}
	 */
	var PLUGIN_NAME = 'line-numbers';

	/**
	 * Regular expression used for determining line breaks
	 *
	 * @type {RegExp}
	 */
	var NEW_LINE_EXP = /\n(?!$)/g;


	/**
	 * Global exports
	 */
	var config = Prism.plugins.lineNumbers = {
		/**
		 * Get node for provided line number
		 *
		 * @param {Element} element pre element
		 * @param {number} number line number
		 * @returns {Element|undefined}
		 */
		getLine: function (element, number) {
			if (element.tagName !== 'PRE' || !element.classList.contains(PLUGIN_NAME)) {
				return;
			}

			var lineNumberRows = element.querySelector('.line-numbers-rows');
			if (!lineNumberRows) {
				return;
			}
			var lineNumberStart = parseInt(element.getAttribute('data-start'), 10) || 1;
			var lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1);

			if (number < lineNumberStart) {
				number = lineNumberStart;
			}
			if (number > lineNumberEnd) {
				number = lineNumberEnd;
			}

			var lineIndex = number - lineNumberStart;

			return lineNumberRows.children[lineIndex];
		},

		/**
		 * Resizes the line numbers of the given element.
		 *
		 * This function will not add line numbers. It will only resize existing ones.
		 *
		 * @param {HTMLElement} element A `<pre>` element with line numbers.
		 * @returns {void}
		 */
		resize: function (element) {
			resizeElements([element]);
		},

		/**
		 * Whether the plugin can assume that the units font sizes and margins are not depended on the size of
		 * the current viewport.
		 *
		 * Setting this to `true` will allow the plugin to do certain optimizations for better performance.
		 *
		 * Set this to `false` if you use any of the following CSS units: `vh`, `vw`, `vmin`, `vmax`.
		 *
		 * @type {boolean}
		 */
		assumeViewportIndependence: true
	};

	/**
	 * Resizes the given elements.
	 *
	 * @param {HTMLElement[]} elements
	 */
	function resizeElements(elements) {
		elements = elements.filter(function (e) {
			var codeStyles = getStyles(e);
			var whiteSpace = codeStyles['white-space'];
			return whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line';
		});

		if (elements.length == 0) {
			return;
		}

		var infos = elements.map(function (element) {
			var codeElement = element.querySelector('code');
			var lineNumbersWrapper = element.querySelector('.line-numbers-rows');
			if (!codeElement || !lineNumbersWrapper) {
				return undefined;
			}

			/** @type {HTMLElement} */
			var lineNumberSizer = element.querySelector('.line-numbers-sizer');
			var codeLines = codeElement.textContent.split(NEW_LINE_EXP);

			if (!lineNumberSizer) {
				lineNumberSizer = document.createElement('span');
				lineNumberSizer.className = 'line-numbers-sizer';

				codeElement.appendChild(lineNumberSizer);
			}

			lineNumberSizer.innerHTML = '0';
			lineNumberSizer.style.display = 'block';

			var oneLinerHeight = lineNumberSizer.getBoundingClientRect().height;
			lineNumberSizer.innerHTML = '';

			return {
				element: element,
				lines: codeLines,
				lineHeights: [],
				oneLinerHeight: oneLinerHeight,
				sizer: lineNumberSizer,
			};
		}).filter(Boolean);

		infos.forEach(function (info) {
			var lineNumberSizer = info.sizer;
			var lines = info.lines;
			var lineHeights = info.lineHeights;
			var oneLinerHeight = info.oneLinerHeight;

			lineHeights[lines.length - 1] = undefined;
			lines.forEach(function (line, index) {
				if (line && line.length > 1) {
					var e = lineNumberSizer.appendChild(document.createElement('span'));
					e.style.display = 'block';
					e.textContent = line;
				} else {
					lineHeights[index] = oneLinerHeight;
				}
			});
		});

		infos.forEach(function (info) {
			var lineNumberSizer = info.sizer;
			var lineHeights = info.lineHeights;

			var childIndex = 0;
			for (var i = 0; i < lineHeights.length; i++) {
				if (lineHeights[i] === undefined) {
					lineHeights[i] = lineNumberSizer.children[childIndex++].getBoundingClientRect().height;
				}
			}
		});

		infos.forEach(function (info) {
			var lineNumberSizer = info.sizer;
			var wrapper = info.element.querySelector('.line-numbers-rows');

			lineNumberSizer.style.display = 'none';
			lineNumberSizer.innerHTML = '';

			info.lineHeights.forEach(function (height, lineNumber) {
				wrapper.children[lineNumber].style.height = height + 'px';
			});
		});
	}

	/**
	 * Returns style declarations for the element
	 *
	 * @param {Element} element
	 */
	function getStyles(element) {
		if (!element) {
			return null;
		}

		return window.getComputedStyle ? getComputedStyle(element) : (element.currentStyle || null);
	}

	var lastWidth = undefined;
	window.addEventListener('resize', function () {
		if (config.assumeViewportIndependence && lastWidth === window.innerWidth) {
			return;
		}
		lastWidth = window.innerWidth;

		resizeElements(Array.prototype.slice.call(document.querySelectorAll('pre.' + PLUGIN_NAME)));
	});

	Prism.hooks.add('complete', function (env) {
		if (!env.code) {
			return;
		}

		var code = /** @type {Element} */ (env.element);
		var pre = /** @type {HTMLElement} */ (code.parentNode);

		// works only for <code> wrapped inside <pre> (not inline)
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		// Abort if line numbers already exists
		if (code.querySelector('.line-numbers-rows')) {
			return;
		}

		// only add line numbers if <code> or one of its ancestors has the `line-numbers` class
		if (!Prism.util.isActive(code, PLUGIN_NAME)) {
			return;
		}

		// Remove the class 'line-numbers' from the <code>
		code.classList.remove(PLUGIN_NAME);
		// Add the class 'line-numbers' to the <pre>
		pre.classList.add(PLUGIN_NAME);

		var match = env.code.match(NEW_LINE_EXP);
		var linesNum = match ? match.length + 1 : 1;
		var lineNumbersWrapper;

		var lines = new Array(linesNum + 1).join('<span></span>');

		lineNumbersWrapper = document.createElement('span');
		lineNumbersWrapper.setAttribute('aria-hidden', 'true');
		lineNumbersWrapper.className = 'line-numbers-rows';
		lineNumbersWrapper.innerHTML = lines;

		if (pre.hasAttribute('data-start')) {
			pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
		}

		env.element.appendChild(lineNumbersWrapper);

		resizeElements([pre]);

		Prism.hooks.run('line-numbers', env);
	});

	Prism.hooks.add('line-numbers', function (env) {
		env.plugins = env.plugins || {};
		env.plugins.lineNumbers = true;
	});

}());


/***/ }),

/***/ "./node_modules/prismjs/plugins/match-braces/prism-match-braces.js":
/*!*************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/match-braces/prism-match-braces.js ***!
  \*************************************************************************/
/***/ (function() {

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	function mapClassName(name) {
		var customClass = Prism.plugins.customClass;
		if (customClass) {
			return customClass.apply(name, 'none');
		} else {
			return name;
		}
	}

	var PARTNER = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	// The names for brace types.
	// These names have two purposes: 1) they can be used for styling and 2) they are used to pair braces. Only braces
	// of the same type are paired.
	var NAMES = {
		'(': 'brace-round',
		'[': 'brace-square',
		'{': 'brace-curly',
	};

	// A map for brace aliases.
	// This is useful for when some braces have a prefix/suffix as part of the punctuation token.
	var BRACE_ALIAS_MAP = {
		'${': '{', // JS template punctuation (e.g. `foo ${bar + 1}`)
	};

	var LEVEL_WARP = 12;

	var pairIdCounter = 0;

	var BRACE_ID_PATTERN = /^(pair-\d+-)(open|close)$/;

	/**
	 * Returns the brace partner given one brace of a brace pair.
	 *
	 * @param {HTMLElement} brace
	 * @returns {HTMLElement}
	 */
	function getPartnerBrace(brace) {
		var match = BRACE_ID_PATTERN.exec(brace.id);
		return document.querySelector('#' + match[1] + (match[2] == 'open' ? 'close' : 'open'));
	}

	/**
	 * @this {HTMLElement}
	 */
	function hoverBrace() {
		if (!Prism.util.isActive(this, 'brace-hover', true)) {
			return;
		}

		[this, getPartnerBrace(this)].forEach(function (e) {
			e.classList.add(mapClassName('brace-hover'));
		});
	}
	/**
	 * @this {HTMLElement}
	 */
	function leaveBrace() {
		[this, getPartnerBrace(this)].forEach(function (e) {
			e.classList.remove(mapClassName('brace-hover'));
		});
	}
	/**
	 * @this {HTMLElement}
	 */
	function clickBrace() {
		if (!Prism.util.isActive(this, 'brace-select', true)) {
			return;
		}

		[this, getPartnerBrace(this)].forEach(function (e) {
			e.classList.add(mapClassName('brace-selected'));
		});
	}

	Prism.hooks.add('complete', function (env) {

		/** @type {HTMLElement} */
		var code = env.element;
		var pre = code.parentElement;

		if (!pre || pre.tagName != 'PRE') {
			return;
		}

		// find the braces to match
		/** @type {string[]} */
		var toMatch = [];
		if (Prism.util.isActive(code, 'match-braces')) {
			toMatch.push('(', '[', '{');
		}

		if (toMatch.length == 0) {
			// nothing to match
			return;
		}

		if (!pre.__listenerAdded) {
			// code blocks might be highlighted more than once
			pre.addEventListener('mousedown', function removeBraceSelected() {
				// the code element might have been replaced
				var code = pre.querySelector('code');
				var className = mapClassName('brace-selected');
				Array.prototype.slice.call(code.querySelectorAll('.' + className)).forEach(function (e) {
					e.classList.remove(className);
				});
			});
			Object.defineProperty(pre, '__listenerAdded', { value: true });
		}

		/** @type {HTMLSpanElement[]} */
		var punctuation = Array.prototype.slice.call(
			code.querySelectorAll('span.' + mapClassName('token') + '.' + mapClassName('punctuation'))
		);

		/** @type {{ index: number, open: boolean, element: HTMLElement }[]} */
		var allBraces = [];

		toMatch.forEach(function (open) {
			var close = PARTNER[open];
			var name = mapClassName(NAMES[open]);

			/** @type {[number, number][]} */
			var pairs = [];
			/** @type {number[]} */
			var openStack = [];

			for (var i = 0; i < punctuation.length; i++) {
				var element = punctuation[i];
				if (element.childElementCount == 0) {
					var text = element.textContent;
					text = BRACE_ALIAS_MAP[text] || text;
					if (text === open) {
						allBraces.push({ index: i, open: true, element: element });
						element.classList.add(name);
						element.classList.add(mapClassName('brace-open'));
						openStack.push(i);
					} else if (text === close) {
						allBraces.push({ index: i, open: false, element: element });
						element.classList.add(name);
						element.classList.add(mapClassName('brace-close'));
						if (openStack.length) {
							pairs.push([i, openStack.pop()]);
						}
					}
				}
			}

			pairs.forEach(function (pair) {
				var pairId = 'pair-' + (pairIdCounter++) + '-';

				var opening = punctuation[pair[0]];
				var closing = punctuation[pair[1]];

				opening.id = pairId + 'open';
				closing.id = pairId + 'close';

				[opening, closing].forEach(function (e) {
					e.addEventListener('mouseenter', hoverBrace);
					e.addEventListener('mouseleave', leaveBrace);
					e.addEventListener('click', clickBrace);
				});
			});
		});

		var level = 0;
		allBraces.sort(function (a, b) { return a.index - b.index; });
		allBraces.forEach(function (brace) {
			if (brace.open) {
				brace.element.classList.add(mapClassName('brace-level-' + (level % LEVEL_WARP + 1)));
				level++;
			} else {
				level = Math.max(0, level - 1);
				brace.element.classList.add(mapClassName('brace-level-' + (level % LEVEL_WARP + 1)));
			}
		});
	});

}());


/***/ }),

/***/ "./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js ***!
  \*****************************************************************************************/
/***/ (function(module) {

(function () {

	if (typeof Prism === 'undefined') {
		return;
	}

	var assign = Object.assign || function (obj1, obj2) {
		for (var name in obj2) {
			if (obj2.hasOwnProperty(name)) {
				obj1[name] = obj2[name];
			}
		}
		return obj1;
	};

	function NormalizeWhitespace(defaults) {
		this.defaults = assign({}, defaults);
	}

	function toCamelCase(value) {
		return value.replace(/-(\w)/g, function (match, firstChar) {
			return firstChar.toUpperCase();
		});
	}

	function tabLen(str) {
		var res = 0;
		for (var i = 0; i < str.length; ++i) {
			if (str.charCodeAt(i) == '\t'.charCodeAt(0)) {
				res += 3;
			}
		}
		return str.length + res;
	}

	NormalizeWhitespace.prototype = {
		setDefaults: function (defaults) {
			this.defaults = assign(this.defaults, defaults);
		},
		normalize: function (input, settings) {
			settings = assign(this.defaults, settings);

			for (var name in settings) {
				var methodName = toCamelCase(name);
				if (name !== 'normalize' && methodName !== 'setDefaults' &&
					settings[name] && this[methodName]) {
					input = this[methodName].call(this, input, settings[name]);
				}
			}

			return input;
		},

		/*
		 * Normalization methods
		 */
		leftTrim: function (input) {
			return input.replace(/^\s+/, '');
		},
		rightTrim: function (input) {
			return input.replace(/\s+$/, '');
		},
		tabsToSpaces: function (input, spaces) {
			spaces = spaces|0 || 4;
			return input.replace(/\t/g, new Array(++spaces).join(' '));
		},
		spacesToTabs: function (input, spaces) {
			spaces = spaces|0 || 4;
			return input.replace(RegExp(' {' + spaces + '}', 'g'), '\t');
		},
		removeTrailing: function (input) {
			return input.replace(/\s*?$/gm, '');
		},
		// Support for deprecated plugin remove-initial-line-feed
		removeInitialLineFeed: function (input) {
			return input.replace(/^(?:\r?\n|\r)/, '');
		},
		removeIndent: function (input) {
			var indents = input.match(/^[^\S\n\r]*(?=\S)/gm);

			if (!indents || !indents[0].length) {
				return input;
			}

			indents.sort(function (a, b) { return a.length - b.length; });

			if (!indents[0].length) {
				return input;
			}

			return input.replace(RegExp('^' + indents[0], 'gm'), '');
		},
		indent: function (input, tabs) {
			return input.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++tabs).join('\t') + '$&');
		},
		breakLines: function (input, characters) {
			characters = (characters === true) ? 80 : characters|0 || 80;

			var lines = input.split('\n');
			for (var i = 0; i < lines.length; ++i) {
				if (tabLen(lines[i]) <= characters) {
					continue;
				}

				var line = lines[i].split(/(\s+)/g);
				var len = 0;

				for (var j = 0; j < line.length; ++j) {
					var tl = tabLen(line[j]);
					len += tl;
					if (len > characters) {
						line[j] = '\n' + line[j];
						len = tl;
					}
				}
				lines[i] = line.join('');
			}
			return lines.join('\n');
		}
	};

	// Support node modules
	if ( true && module.exports) {
		module.exports = NormalizeWhitespace;
	}

	Prism.plugins.NormalizeWhitespace = new NormalizeWhitespace({
		'remove-trailing': true,
		'remove-indent': true,
		'left-trim': true,
		'right-trim': true,
		/*'break-lines': 80,
		'indent': 2,
		'remove-initial-line-feed': false,
		'tabs-to-spaces': 4,
		'spaces-to-tabs': 4*/
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var Normalizer = Prism.plugins.NormalizeWhitespace;

		// Check settings
		if (env.settings && env.settings['whitespace-normalization'] === false) {
			return;
		}

		// Check classes
		if (!Prism.util.isActive(env.element, 'whitespace-normalization', true)) {
			return;
		}

		// Simple mode if there is no env.element
		if ((!env.element || !env.element.parentNode) && env.code) {
			env.code = Normalizer.normalize(env.code, env.settings);
			return;
		}

		// Normal mode
		var pre = env.element.parentNode;
		if (!env.code || !pre || pre.nodeName.toLowerCase() !== 'pre') {
			return;
		}

		var children = pre.childNodes;
		var before = '';
		var after = '';
		var codeFound = false;

		// Move surrounding whitespace from the <pre> tag into the <code> tag
		for (var i = 0; i < children.length; ++i) {
			var node = children[i];

			if (node == env.element) {
				codeFound = true;
			} else if (node.nodeName === '#text') {
				if (codeFound) {
					after += node.nodeValue;
				} else {
					before += node.nodeValue;
				}

				pre.removeChild(node);
				--i;
			}
		}

		if (!env.element.children.length || !Prism.plugins.KeepMarkup) {
			env.code = before + env.code + after;
			env.code = Normalizer.normalize(env.code, env.settings);
		} else {
			// Preserve markup for keep-markup plugin
			var html = before + env.element.innerHTML + after;
			env.element.innerHTML = Normalizer.normalize(html, env.settings);
			env.code = env.element.textContent;
		}
	});

}());


/***/ }),

/***/ "./node_modules/prismjs/plugins/show-language/prism-show-language.js":
/*!***************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/show-language/prism-show-language.js ***!
  \***************************************************************************/
/***/ (function() {

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	if (!Prism.plugins.toolbar) {
		console.warn('Show Languages plugin loaded before Toolbar plugin.');

		return;
	}

	/* eslint-disable */

	// The languages map is built automatically with gulp
	var Languages = /*languages_placeholder[*/{
		"none": "Plain text",
		"plain": "Plain text",
		"plaintext": "Plain text",
		"text": "Plain text",
		"txt": "Plain text",
		"html": "HTML",
		"xml": "XML",
		"svg": "SVG",
		"mathml": "MathML",
		"ssml": "SSML",
		"rss": "RSS",
		"css": "CSS",
		"clike": "C-like",
		"js": "JavaScript",
		"abap": "ABAP",
		"abnf": "ABNF",
		"al": "AL",
		"antlr4": "ANTLR4",
		"g4": "ANTLR4",
		"apacheconf": "Apache Configuration",
		"apl": "APL",
		"aql": "AQL",
		"arff": "ARFF",
		"asciidoc": "AsciiDoc",
		"adoc": "AsciiDoc",
		"aspnet": "ASP.NET (C#)",
		"asm6502": "6502 Assembly",
		"autohotkey": "AutoHotkey",
		"autoit": "AutoIt",
		"avisynth": "AviSynth",
		"avs": "AviSynth",
		"avro-idl": "Avro IDL",
		"avdl": "Avro IDL",
		"basic": "BASIC",
		"bbcode": "BBcode",
		"bnf": "BNF",
		"rbnf": "RBNF",
		"bsl": "BSL (1C:Enterprise)",
		"oscript": "OneScript",
		"csharp": "C#",
		"cs": "C#",
		"dotnet": "C#",
		"cpp": "C++",
		"cfscript": "CFScript",
		"cfc": "CFScript",
		"cil": "CIL",
		"cmake": "CMake",
		"cobol": "COBOL",
		"coffee": "CoffeeScript",
		"conc": "Concurnas",
		"csp": "Content-Security-Policy",
		"css-extras": "CSS Extras",
		"csv": "CSV",
		"dataweave": "DataWeave",
		"dax": "DAX",
		"django": "Django/Jinja2",
		"jinja2": "Django/Jinja2",
		"dns-zone-file": "DNS zone file",
		"dns-zone": "DNS zone file",
		"dockerfile": "Docker",
		"dot": "DOT (Graphviz)",
		"gv": "DOT (Graphviz)",
		"ebnf": "EBNF",
		"editorconfig": "EditorConfig",
		"ejs": "EJS",
		"etlua": "Embedded Lua templating",
		"erb": "ERB",
		"excel-formula": "Excel Formula",
		"xlsx": "Excel Formula",
		"xls": "Excel Formula",
		"fsharp": "F#",
		"firestore-security-rules": "Firestore security rules",
		"ftl": "FreeMarker Template Language",
		"gml": "GameMaker Language",
		"gamemakerlanguage": "GameMaker Language",
		"gap": "GAP (CAS)",
		"gcode": "G-code",
		"gdscript": "GDScript",
		"gedcom": "GEDCOM",
		"glsl": "GLSL",
		"gn": "GN",
		"gni": "GN",
		"graphql": "GraphQL",
		"hbs": "Handlebars",
		"hs": "Haskell",
		"hcl": "HCL",
		"hlsl": "HLSL",
		"http": "HTTP",
		"hpkp": "HTTP Public-Key-Pins",
		"hsts": "HTTP Strict-Transport-Security",
		"ichigojam": "IchigoJam",
		"icu-message-format": "ICU Message Format",
		"idr": "Idris",
		"ignore": ".ignore",
		"gitignore": ".gitignore",
		"hgignore": ".hgignore",
		"npmignore": ".npmignore",
		"inform7": "Inform 7",
		"javadoc": "JavaDoc",
		"javadoclike": "JavaDoc-like",
		"javastacktrace": "Java stack trace",
		"jq": "JQ",
		"jsdoc": "JSDoc",
		"js-extras": "JS Extras",
		"json": "JSON",
		"webmanifest": "Web App Manifest",
		"json5": "JSON5",
		"jsonp": "JSONP",
		"jsstacktrace": "JS stack trace",
		"js-templates": "JS Templates",
		"kts": "Kotlin Script",
		"kt": "Kotlin",
		"kumir": "KuMir (КуМир)",
		"kum": "KuMir (КуМир)",
		"latex": "LaTeX",
		"tex": "TeX",
		"context": "ConTeXt",
		"lilypond": "LilyPond",
		"ly": "LilyPond",
		"emacs": "Lisp",
		"elisp": "Lisp",
		"emacs-lisp": "Lisp",
		"llvm": "LLVM IR",
		"log": "Log file",
		"lolcode": "LOLCODE",
		"magma": "Magma (CAS)",
		"md": "Markdown",
		"markup-templating": "Markup templating",
		"matlab": "MATLAB",
		"maxscript": "MAXScript",
		"mel": "MEL",
		"mongodb": "MongoDB",
		"moon": "MoonScript",
		"n1ql": "N1QL",
		"n4js": "N4JS",
		"n4jsd": "N4JS",
		"nand2tetris-hdl": "Nand To Tetris HDL",
		"naniscript": "Naninovel Script",
		"nani": "Naninovel Script",
		"nasm": "NASM",
		"neon": "NEON",
		"nginx": "nginx",
		"nsis": "NSIS",
		"objectivec": "Objective-C",
		"objc": "Objective-C",
		"ocaml": "OCaml",
		"opencl": "OpenCL",
		"openqasm": "OpenQasm",
		"qasm": "OpenQasm",
		"parigp": "PARI/GP",
		"objectpascal": "Object Pascal",
		"psl": "PATROL Scripting Language",
		"pcaxis": "PC-Axis",
		"px": "PC-Axis",
		"peoplecode": "PeopleCode",
		"pcode": "PeopleCode",
		"php": "PHP",
		"phpdoc": "PHPDoc",
		"php-extras": "PHP Extras",
		"plsql": "PL/SQL",
		"powerquery": "PowerQuery",
		"pq": "PowerQuery",
		"mscript": "PowerQuery",
		"powershell": "PowerShell",
		"promql": "PromQL",
		"properties": ".properties",
		"protobuf": "Protocol Buffers",
		"purebasic": "PureBasic",
		"pbfasm": "PureBasic",
		"purs": "PureScript",
		"py": "Python",
		"qsharp": "Q#",
		"qs": "Q#",
		"q": "Q (kdb+ database)",
		"qml": "QML",
		"rkt": "Racket",
		"cshtml": "Razor C#",
		"razor": "Razor C#",
		"jsx": "React JSX",
		"tsx": "React TSX",
		"renpy": "Ren'py",
		"rpy": "Ren'py",
		"rest": "reST (reStructuredText)",
		"robotframework": "Robot Framework",
		"robot": "Robot Framework",
		"rb": "Ruby",
		"sas": "SAS",
		"sass": "Sass (Sass)",
		"scss": "Sass (Scss)",
		"shell-session": "Shell session",
		"sh-session": "Shell session",
		"shellsession": "Shell session",
		"sml": "SML",
		"smlnj": "SML/NJ",
		"solidity": "Solidity (Ethereum)",
		"sol": "Solidity (Ethereum)",
		"solution-file": "Solution file",
		"sln": "Solution file",
		"soy": "Soy (Closure Template)",
		"sparql": "SPARQL",
		"rq": "SPARQL",
		"splunk-spl": "Splunk SPL",
		"sqf": "SQF: Status Quo Function (Arma 3)",
		"sql": "SQL",
		"iecst": "Structured Text (IEC 61131-3)",
		"systemd": "Systemd configuration file",
		"t4-templating": "T4 templating",
		"t4-cs": "T4 Text Templates (C#)",
		"t4": "T4 Text Templates (C#)",
		"t4-vb": "T4 Text Templates (VB)",
		"tap": "TAP",
		"tt2": "Template Toolkit 2",
		"toml": "TOML",
		"trig": "TriG",
		"ts": "TypeScript",
		"tsconfig": "TSConfig",
		"uscript": "UnrealScript",
		"uc": "UnrealScript",
		"uri": "URI",
		"url": "URL",
		"vbnet": "VB.Net",
		"vhdl": "VHDL",
		"vim": "vim",
		"visual-basic": "Visual Basic",
		"vba": "VBA",
		"vb": "Visual Basic",
		"wasm": "WebAssembly",
		"wiki": "Wiki markup",
		"wolfram": "Wolfram language",
		"nb": "Mathematica Notebook",
		"wl": "Wolfram language",
		"xeoracube": "XeoraCube",
		"xml-doc": "XML doc (.net)",
		"xojo": "Xojo (REALbasic)",
		"xquery": "XQuery",
		"yaml": "YAML",
		"yml": "YAML",
		"yang": "YANG"
	}/*]*/;

	/* eslint-enable */

	Prism.plugins.toolbar.registerButton('show-language', function (env) {
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		/**
		 * Tries to guess the name of a language given its id.
		 *
		 * @param {string} id The language id.
		 * @returns {string}
		 */
		function guessTitle(id) {
			if (!id) {
				return id;
			}
			return (id.substring(0, 1).toUpperCase() + id.substring(1)).replace(/s(?=cript)/, 'S');
		}

		var language = pre.getAttribute('data-language') || Languages[env.language] || guessTitle(env.language);

		if (!language) {
			return;
		}
		var element = document.createElement('span');
		element.textContent = language;

		return element;
	});

}());


/***/ }),

/***/ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.js ***!
  \***************************************************************/
/***/ (function() {

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	var callbacks = [];
	var map = {};
	var noop = function () {};

	Prism.plugins.toolbar = {};

	/**
	 * @typedef ButtonOptions
	 * @property {string} text The text displayed.
	 * @property {string} [url] The URL of the link which will be created.
	 * @property {Function} [onClick] The event listener for the `click` event of the created button.
	 * @property {string} [className] The class attribute to include with element.
	 */

	/**
	 * Register a button callback with the toolbar.
	 *
	 * @param {string} key
	 * @param {ButtonOptions|Function} opts
	 */
	var registerButton = Prism.plugins.toolbar.registerButton = function (key, opts) {
		var callback;

		if (typeof opts === 'function') {
			callback = opts;
		} else {
			callback = function (env) {
				var element;

				if (typeof opts.onClick === 'function') {
					element = document.createElement('button');
					element.type = 'button';
					element.addEventListener('click', function () {
						opts.onClick.call(this, env);
					});
				} else if (typeof opts.url === 'string') {
					element = document.createElement('a');
					element.href = opts.url;
				} else {
					element = document.createElement('span');
				}

				if (opts.className) {
					element.classList.add(opts.className);
				}

				element.textContent = opts.text;

				return element;
			};
		}

		if (key in map) {
			console.warn('There is a button with the key "' + key + '" registered already.');
			return;
		}

		callbacks.push(map[key] = callback);
	};

	/**
	 * Returns the callback order of the given element.
	 *
	 * @param {HTMLElement} element
	 * @returns {string[] | undefined}
	 */
	function getOrder(element) {
		while (element) {
			var order = element.getAttribute('data-toolbar-order');
			if (order != null) {
				order = order.trim();
				if (order.length) {
					return order.split(/\s*,\s*/g);
				} else {
					return [];
				}
			}
			element = element.parentElement;
		}
	}

	/**
	 * Post-highlight Prism hook callback.
	 *
	 * @param env
	 */
	var hook = Prism.plugins.toolbar.hook = function (env) {
		// Check if inline or actual code block (credit to line-numbers plugin)
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		// Autoloader rehighlights, so only do this once.
		if (pre.parentNode.classList.contains('code-toolbar')) {
			return;
		}

		// Create wrapper for <pre> to prevent scrolling toolbar with content
		var wrapper = document.createElement('div');
		wrapper.classList.add('code-toolbar');
		pre.parentNode.insertBefore(wrapper, pre);
		wrapper.appendChild(pre);

		// Setup the toolbar
		var toolbar = document.createElement('div');
		toolbar.classList.add('toolbar');

		// order callbacks
		var elementCallbacks = callbacks;
		var order = getOrder(env.element);
		if (order) {
			elementCallbacks = order.map(function (key) {
				return map[key] || noop;
			});
		}

		elementCallbacks.forEach(function (callback) {
			var element = callback(env);

			if (!element) {
				return;
			}

			var item = document.createElement('div');
			item.classList.add('toolbar-item');

			item.appendChild(element);
			toolbar.appendChild(item);
		});

		// Add our toolbar to the currently created wrapper of <pre> tag
		wrapper.appendChild(toolbar);
	};

	registerButton('label', function (env) {
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		if (!pre.hasAttribute('data-label')) {
			return;
		}

		var element; var template;
		var text = pre.getAttribute('data-label');
		try {
			// Any normal text will blow up this selector.
			template = document.querySelector('template#' + text);
		} catch (e) { /* noop */ }

		if (template) {
			element = template.content;
		} else {
			if (pre.hasAttribute('data-url')) {
				element = document.createElement('a');
				element.href = pre.getAttribute('data-url');
			} else {
				element = document.createElement('span');
			}

			element.textContent = text;
		}

		return element;
	});

	/**
	 * Register the toolbar with Prism.
	 */
	Prism.hooks.add('complete', hook);
}());


/***/ }),

/***/ "./node_modules/prismjs/prism.js":
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /\blang(?:uage)?-([\w-]+)\b/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element && !lang.test(element.className)) {
					element = element.parentElement;
				}
				if (element) {
					return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
				}
				return 'none';
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		// eslint-disable-next-line regexp/no-dupe-characters-character-class
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	var lang = /\blang(?:uage)?-([\w-]+)\b/i;

	/**
	 * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
	 *
	 * @param {HTMLElement} element
	 * @param {string} language
	 * @returns {void}
	 */
	function setLanguageClass(element, language) {
		var className = element.className;
		className = className.replace(lang, ' ') + ' language-' + language;
		element.className = className.replace(/\s+/g, ' ').trim();
	}


	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			setLanguageClass(code, language);
			setLanguageClass(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			var xhr = new XMLHttpRequest();
			xhr.open('GET', src, true);
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status < 400 && xhr.responseText) {
						// mark as loaded
						pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

						// highlight code
						code.textContent = xhr.responseText;
						Prism.highlightElement(code);

					} else {
						// mark as failed
						pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

						if (xhr.status >= 400) {
							code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
						} else {
							code.textContent = FAILURE_EMPTY_MESSAGE;
						}
					}
				}
			};
			xhr.send(null);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; (element = elements[i++]);) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	};

}());


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzPzE4MWIiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbWF0Y2gtYnJhY2VzL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3M/M2ZhNyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzPzg3MTgiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdy5jc3M/OTcyZCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXguc2Nzcz8wN2RhIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20tdG9tb3Jyb3cuY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvYXNzZXRzL2ltZy9tdXNpYy1iYW5uZXIuanBnIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2NvcHktdG8tY2xpcGJvYXJkL3ByaXNtLWNvcHktdG8tY2xpcGJvYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2Rvd25sb2FkLWJ1dHRvbi9wcmlzbS1kb3dubG9hZC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL25vcm1hbGl6ZS13aGl0ZXNwYWNlL3ByaXNtLW5vcm1hbGl6ZS13aGl0ZXNwYWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL3Nob3ctbGFuZ3VhZ2UvcHJpc20tc2hvdy1sYW5ndWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3ByaXNtLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwicHJvcHMiLCJSZWFjdCIsIlByaXNtIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0NBRUE7QUFDQTs7QUFDQTtBQUNBO0NBQzBEOztBQUMxRDtDQUMwRDs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV2QkMsd0RBQUEsQ0FBZ0IsWUFBSTtBQUNsQkMsK0RBQUE7QUFDRCxHQUZELEVBRUUsRUFGRjtBQUZ1QixNQU1iQyxTQU5hLEdBTVlILEtBTlosQ0FNYkcsU0FOYTtBQUFBLE1BTUZDLFNBTkUsR0FNWUosS0FOWixDQU1GSSxTQU5FO0FBT3JCLFNBQ0ksTUFBQyxTQUFELGlKQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESjtBQUdILENBVkQ7O0dBQU1MLEs7O0tBQUFBLEs7QUFZTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHVEQUE0QjtBQUNuRDtBQUNBOzs7Ozs7Ozs7OztBQ05BLFVBQVUsbUJBQU8sQ0FBQyw2TUFBaUc7QUFDbkgsMEJBQTBCLG1CQUFPLENBQUMsc2NBQXNNOztBQUV4Tzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNB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WSxhQUFhLGNBQWMsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsYUFBYSxlQUFlLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxhQUFhLGVBQWUsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksYUFBYSxRQUFRLE1BQU0sYUFBYSxlQUFlLGFBQWEsV0FBVyxPQUFPLE1BQU0sYUFBYSxlQUFlLGFBQWEsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxRQUFRLE1BQU0sV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLGNBQWMsWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLE1BQU0sWUFBWSxhQUFhLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsZUFBZSxhQUFhLE9BQU8sTUFBTSxhQUFhLGVBQWUsYUFBYSxXQUFXLE9BQU8sTUFBTSxXQUFXLGFBQWEsZUFBZSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLGFBQWEsZUFBZSxRQUFRLE1BQU0sYUFBYSxlQUFlLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLGFBQWEsZUFBZSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxTQUFTLE1BQU0sWUFBWSxhQUFhLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksU0FBUyxNQUFNLFlBQVksWUFBWSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sT0FBTyxLQUFLLFdBQVcsUUFBUSxPQUFPLFdBQVcsU0FBUyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFlBQVksYUFBYSxZQUFZLFlBQVksU0FBUyxPQUFPLFlBQVksYUFBYSxZQUFZLFlBQVksU0FBUyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFlBQVksYUFBYSxXQUFXLFFBQVEsT0FBTyxZQUFZLGFBQWEsV0FBVyxRQUFRLE9BQU8sWUFBWSxhQUFhLFdBQVcsUUFBUSxPQUFPLFlBQVksYUFBYSxTQUFTLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsWUFBWSxRQUFRLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxhQUFhLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFlBQVksWUFBWSxTQUFTLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxZQUFZLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsWUFBWSxTQUFTLE9BQU8sWUFBWSxhQUFhLFdBQVcsUUFBUSxPQUFPLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssS0FBNkI7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDOzs7Ozs7Ozs7OztBQ3JNRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FB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QSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCLFlBQVksT0FBTztBQUNuQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0EsaUJBQWlCOztBQUVqQixpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgJy4uL2Fzc2V0cy9jc3MvaW5kZXguc2Nzcyc7XHJcblxyXG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcyc7XHJcbmltcG9ydCAncHJpc21qcy90aGVtZXMvcHJpc20tdG9tb3Jyb3cuY3NzJztcclxuLy8gaW1wb3J0ICdwcmlzbWpzL3RoZW1lcy9wcmlzbS1va2FpZGlhLmNzcyc7XHJcbi8vIGltcG9ydCAncHJpc21qcy90aGVtZXMvcHJpc20tZnVua3kuY3NzJ1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXInO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzJztcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycyc7IC8vIGNsYXNzPVwibGluZS1udW1iZXJzXCJcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5jc3MnO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzJzsgLy8gY2xhc3M9XCJtYXRjaC1icmFjZXNcIlxyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmNzcyc7XHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL2NvcHktdG8tY2xpcGJvYXJkL3ByaXNtLWNvcHktdG8tY2xpcGJvYXJkJztcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvbm9ybWFsaXplLXdoaXRlc3BhY2UvcHJpc20tbm9ybWFsaXplLXdoaXRlc3BhY2UnO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9zaG93LWxhbmd1YWdlL3ByaXNtLXNob3ctbGFuZ3VhZ2UnO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9kb3dubG9hZC1idXR0b24vcHJpc20tZG93bmxvYWQtYnV0dG9uJztcclxuXHJcbi8vIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xyXG5cclxuLy8gaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuXHJcbmNvbnN0IE15QXBwID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XHJcbiAgfSxbXSk7XHJcblxyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tbGluZS1udW1iZXJzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tbGluZS1udW1iZXJzLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS1tYXRjaC1icmFjZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS10b29sYmFyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tdG9vbGJhci5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS10b29sYmFyLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tdG9tb3Jyb3cuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS10b21vcnJvdy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS10b21vcnJvdy5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL2luZGV4LnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLmxpbmUtbnVtYmVycyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmctbGVmdDogMy44ZW07XFxuXFx0Y291bnRlci1yZXNldDogbGluZW51bWJlcjtcXG59XFxuXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzID4gY29kZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdoaXRlLXNwYWNlOiBpbmhlcml0O1xcbn1cXG5cXG4ubGluZS1udW1iZXJzIC5saW5lLW51bWJlcnMtcm93cyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdHRvcDogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0bGVmdDogLTMuOGVtO1xcblxcdHdpZHRoOiAzZW07IC8qIHdvcmtzIGZvciBsaW5lLW51bWJlcnMgYmVsb3cgMTAwMCBsaW5lcyAqL1xcblxcdGxldHRlci1zcGFjaW5nOiAtMXB4O1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5OTk7XFxuXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG59XFxuXFxuXFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbiB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGxpbmVudW1iZXI7XFxuXFx0fVxcblxcblxcdFxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW46YmVmb3JlIHtcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGxpbmVudW1iZXIpO1xcblxcdFxcdFxcdGNvbG9yOiAjOTk5O1xcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdFxcdHBhZGRpbmctcmlnaHQ6IDAuOGVtO1xcblxcdFxcdFxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdFxcdH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsTUFBTTtDQUNOLGVBQWU7Q0FDZixZQUFZO0NBQ1osVUFBVSxFQUFFLDRDQUE0QztDQUN4RCxvQkFBb0I7Q0FDcEIsNEJBQTRCOztDQUU1Qix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixpQkFBaUI7O0FBRWxCOztDQUVDO0VBQ0MsY0FBYztFQUNkLDZCQUE2QjtDQUM5Qjs7RUFFQztHQUNDLDRCQUE0QjtHQUM1QixXQUFXO0dBQ1gsY0FBYztHQUNkLG9CQUFvQjtHQUNwQixpQkFBaUI7RUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wicHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAzLjhlbTtcXG5cXHRjb3VudGVyLXJlc2V0OiBsaW5lbnVtYmVyO1xcbn1cXG5cXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXS5saW5lLW51bWJlcnMgPiBjb2RlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2hpdGUtc3BhY2U6IGluaGVyaXQ7XFxufVxcblxcbi5saW5lLW51bWJlcnMgLmxpbmUtbnVtYmVycy1yb3dzIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0dG9wOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRsZWZ0OiAtMy44ZW07XFxuXFx0d2lkdGg6IDNlbTsgLyogd29ya3MgZm9yIGxpbmUtbnVtYmVycyBiZWxvdyAxMDAwIGxpbmVzICovXFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTtcXG5cXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcbn1cXG5cXG5cXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRjb3VudGVyLWluY3JlbWVudDogbGluZW51bWJlcjtcXG5cXHR9XFxuXFxuXFx0XFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbjpiZWZvcmUge1xcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIobGluZW51bWJlcik7XFxuXFx0XFx0XFx0Y29sb3I6ICM5OTk7XFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0XFx0cGFkZGluZy1yaWdodDogMC44ZW07XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0XFx0fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1ob3ZlcixcXG4udG9rZW4ucHVuY3R1YXRpb24uYnJhY2Utc2VsZWN0ZWQge1xcblxcdG91dGxpbmU6IHNvbGlkIDFweDtcXG59XFxuXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xLFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtNSxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTkge1xcblxcdGNvbG9yOiAjRTUwO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMixcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTYsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xMCB7XFxuXFx0Y29sb3I6ICMwQjM7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0zLFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtNyxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTExIHtcXG5cXHRjb2xvcjogIzI2RjtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTQsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC04LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMTIge1xcblxcdGNvbG9yOiAjRTBFO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL21hdGNoLWJyYWNlcy9wcmlzbS1tYXRjaC1icmFjZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTs7O0NBR0MsV0FBVztDQUNYLFVBQVU7QUFDWDtBQUNBOzs7Q0FHQyxXQUFXO0NBQ1gsVUFBVTtBQUNYO0FBQ0E7OztDQUdDLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7QUFDQTs7O0NBR0MsV0FBVztDQUNYLFVBQVU7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtaG92ZXIsXFxuLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLXNlbGVjdGVkIHtcXG5cXHRvdXRsaW5lOiBzb2xpZCAxcHg7XFxufVxcblxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMSxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTUsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC05IHtcXG5cXHRjb2xvcjogI0U1MDtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTIsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC02LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMTAge1xcblxcdGNvbG9yOiAjMEIzO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMyxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTcsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xMSB7XFxuXFx0Y29sb3I6ICMyNkY7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC00LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtOCxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTEyIHtcXG5cXHRjb2xvcjogI0UwRTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY29kZS10b29sYmFyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogLjNlbTtcXG5cXHRyaWdodDogLjJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhcjpob3ZlciA+IC50b29sYmFyIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBTZXBhcmF0ZSBsaW5lIGIvYyBydWxlcyBhcmUgdGhyb3duIG91dCBpZiBzZWxlY3RvciBpcyBpbnZhbGlkLlxcbiAgIElFMTEgYW5kIG9sZCBFZGdlIHZlcnNpb25zIGRvbid0IHN1cHBvcnQgOmZvY3VzLXdpdGhpbi4gKi9cXG5kaXYuY29kZS10b29sYmFyOmZvY3VzLXdpdGhpbiA+IC50b29sYmFyIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXHRvdmVyZmxvdzogdmlzaWJsZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIGZvciBidXR0b24gKi9cXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGEsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3BhbiB7XFxuXFx0Y29sb3I6ICNiYmI7XFxuXFx0Zm9udC1zaXplOiAuOGVtO1xcblxcdHBhZGRpbmc6IDAgLjVlbTtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmMmYwO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMC4yKTtcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDAgMCByZ2JhKDAsMCwwLDAuMik7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDJweCAwIDAgcmdiYSgwLDAsMCwwLjIpO1xcblxcdGJvcmRlci1yYWRpdXM6IC41ZW07XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhOmhvdmVyLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhOmZvY3VzLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b246aG92ZXIsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbjpmb2N1cyxcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3Bhbjpob3ZlcixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3Bhbjpmb2N1cyB7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsNENBQW9DO0NBQXBDLG9DQUFvQztDQUNwQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7NERBQzREO0FBQzVEO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsY0FBYztDQUNkLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVix5QkFBeUIsRUFBRSxlQUFlO0NBQzFDLHNCQUFzQjtDQUN0QixxQkFBcUI7QUFDdEI7O0FBRUE7OztDQUdDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixvQ0FBb0M7Q0FDcEMsNkNBQXFDO1NBQXJDLHFDQUFxQztDQUNyQyxtQkFBbUI7QUFDcEI7O0FBRUE7Ozs7OztDQU1DLGNBQWM7Q0FDZCxxQkFBcUI7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGl2LmNvZGUtdG9vbGJhciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IC4zZW07XFxuXFx0cmlnaHQ6IC4yZW07XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdG9wYWNpdHk6IDA7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXI6aG92ZXIgPiAudG9vbGJhciB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLyogU2VwYXJhdGUgbGluZSBiL2MgcnVsZXMgYXJlIHRocm93biBvdXQgaWYgc2VsZWN0b3IgaXMgaW52YWxpZC5cXG4gICBJRTExIGFuZCBvbGQgRWRnZSB2ZXJzaW9ucyBkb24ndCBzdXBwb3J0IDpmb2N1cy13aXRoaW4uICovXFxuZGl2LmNvZGUtdG9vbGJhcjpmb2N1cy13aXRoaW4gPiAudG9vbGJhciB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGJvcmRlcjogMDtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0b3ZlcmZsb3c6IHZpc2libGU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBmb3IgYnV0dG9uICovXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b24sXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IHNwYW4ge1xcblxcdGNvbG9yOiAjYmJiO1xcblxcdGZvbnQtc2l6ZTogLjhlbTtcXG5cXHRwYWRkaW5nOiAwIC41ZW07XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjJmMDtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuMik7XFxuXFx0Ym94LXNoYWRvdzogMCAycHggMCAwIHJnYmEoMCwwLDAsMC4yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAuNWVtO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYTpob3ZlcixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYTpmb2N1cyxcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uOmhvdmVyLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b246Zm9jdXMsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IHNwYW46aG92ZXIsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IHNwYW46Zm9jdXMge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogcHJpc20uanMgdG9tb3Jyb3cgbmlnaHQgZWlnaHRpZXMgZm9yIEphdmFTY3JpcHQsIENvZmZlZVNjcmlwdCwgQ1NTIGFuZCBIVE1MXFxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi90b21vcnJvdy10aGVtZVxcbiAqIEBhdXRob3IgUm9zZSBQcml0Y2hhcmRcXG4gKi9cXG5cXG5jb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0sXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdGNvbG9yOiAjY2NjO1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHdoaXRlLXNwYWNlOiBwcmU7XFxuXFx0d29yZC1zcGFjaW5nOiBub3JtYWw7XFxuXFx0d29yZC1icmVhazogbm9ybWFsO1xcblxcdHdvcmQtd3JhcDogbm9ybWFsO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG5cXG5cXHQtd2Via2l0LWh5cGhlbnM6IG5vbmU7XFxuXFx0LW1vei1oeXBoZW5zOiBub25lO1xcblxcdC1tcy1oeXBoZW5zOiBub25lO1xcblxcdGh5cGhlbnM6IG5vbmU7XFxuXFxufVxcblxcbi8qIENvZGUgYmxvY2tzICovXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHRtYXJnaW46IC41ZW0gMDtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLFxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kOiAjMmQyZDJkO1xcbn1cXG5cXG4vKiBJbmxpbmUgY29kZSAqL1xcbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0cGFkZGluZzogLjFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuM2VtO1xcblxcdHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblxcbi50b2tlbi5jb21tZW50LFxcbi50b2tlbi5ibG9jay1jb21tZW50LFxcbi50b2tlbi5wcm9sb2csXFxuLnRva2VuLmRvY3R5cGUsXFxuLnRva2VuLmNkYXRhIHtcXG5cXHRjb2xvcjogIzk5OTtcXG59XFxuXFxuLnRva2VuLnB1bmN0dWF0aW9uIHtcXG5cXHRjb2xvcjogI2NjYztcXG59XFxuXFxuLnRva2VuLnRhZyxcXG4udG9rZW4uYXR0ci1uYW1lLFxcbi50b2tlbi5uYW1lc3BhY2UsXFxuLnRva2VuLmRlbGV0ZWQge1xcblxcdGNvbG9yOiAjZTI3NzdhO1xcbn1cXG5cXG4udG9rZW4uZnVuY3Rpb24tbmFtZSB7XFxuXFx0Y29sb3I6ICM2MTk2Y2M7XFxufVxcblxcbi50b2tlbi5ib29sZWFuLFxcbi50b2tlbi5udW1iZXIsXFxuLnRva2VuLmZ1bmN0aW9uIHtcXG5cXHRjb2xvcjogI2YwOGQ0OTtcXG59XFxuXFxuLnRva2VuLnByb3BlcnR5LFxcbi50b2tlbi5jbGFzcy1uYW1lLFxcbi50b2tlbi5jb25zdGFudCxcXG4udG9rZW4uc3ltYm9sIHtcXG5cXHRjb2xvcjogI2Y4YzU1NTtcXG59XFxuXFxuLnRva2VuLnNlbGVjdG9yLFxcbi50b2tlbi5pbXBvcnRhbnQsXFxuLnRva2VuLmF0cnVsZSxcXG4udG9rZW4ua2V5d29yZCxcXG4udG9rZW4uYnVpbHRpbiB7XFxuXFx0Y29sb3I6ICNjYzk5Y2Q7XFxufVxcblxcbi50b2tlbi5zdHJpbmcsXFxuLnRva2VuLmNoYXIsXFxuLnRva2VuLmF0dHItdmFsdWUsXFxuLnRva2VuLnJlZ2V4LFxcbi50b2tlbi52YXJpYWJsZSB7XFxuXFx0Y29sb3I6ICM3ZWM2OTk7XFxufVxcblxcbi50b2tlbi5vcGVyYXRvcixcXG4udG9rZW4uZW50aXR5LFxcbi50b2tlbi51cmwge1xcblxcdGNvbG9yOiAjNjdjZGNjO1xcbn1cXG5cXG4udG9rZW4uaW1wb3J0YW50LFxcbi50b2tlbi5ib2xkIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRva2VuLml0YWxpYyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udG9rZW4uZW50aXR5IHtcXG5cXHRjdXJzb3I6IGhlbHA7XFxufVxcblxcbi50b2tlbi5pbnNlcnRlZCB7XFxuXFx0Y29sb3I6IGdyZWVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3ByaXNtanMvdGhlbWVzL3ByaXNtLXRvbW9ycm93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7OztFQUlFOztBQUVGOztDQUVDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsc0VBQXNFO0NBQ3RFLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjs7Q0FFaEIsZ0JBQWdCO0NBRWhCLFdBQVc7O0NBRVgscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsYUFBYTs7QUFFZDs7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7O0FBRUE7Ozs7O0NBS0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBOzs7O0NBSUMsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBOzs7Q0FHQyxjQUFjO0FBQ2Y7O0FBRUE7Ozs7Q0FJQyxjQUFjO0FBQ2Y7O0FBRUE7Ozs7O0NBS0MsY0FBYztBQUNmOztBQUVBOzs7OztDQUtDLGNBQWM7QUFDZjs7QUFFQTs7O0NBR0MsY0FBYztBQUNmOztBQUVBOztDQUVDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIHByaXNtLmpzIHRvbW9ycm93IG5pZ2h0IGVpZ2h0aWVzIGZvciBKYXZhU2NyaXB0LCBDb2ZmZWVTY3JpcHQsIENTUyBhbmQgSFRNTFxcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2tlbXBzb24vdG9tb3Jyb3ctdGhlbWVcXG4gKiBAYXV0aG9yIFJvc2UgUHJpdGNoYXJkXFxuICovXFxuXFxuY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLFxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRjb2xvcjogI2NjYztcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHR3aGl0ZS1zcGFjZTogcHJlO1xcblxcdHdvcmQtc3BhY2luZzogbm9ybWFsO1xcblxcdHdvcmQtYnJlYWs6IG5vcm1hbDtcXG5cXHR3b3JkLXdyYXA6IG5vcm1hbDtcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcblxcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0LW8tdGFiLXNpemU6IDQ7XFxuXFx0dGFiLXNpemU6IDQ7XFxuXFxuXFx0LXdlYmtpdC1oeXBoZW5zOiBub25lO1xcblxcdC1tb3otaHlwaGVuczogbm9uZTtcXG5cXHQtbXMtaHlwaGVuczogbm9uZTtcXG5cXHRoeXBoZW5zOiBub25lO1xcblxcbn1cXG5cXG4vKiBDb2RlIGJsb2NrcyAqL1xcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0bWFyZ2luOiAuNWVtIDA7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSxcXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogIzJkMmQyZDtcXG59XFxuXFxuLyogSW5saW5lIGNvZGUgKi9cXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdHBhZGRpbmc6IC4xZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogLjNlbTtcXG5cXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5cXG4udG9rZW4uY29tbWVudCxcXG4udG9rZW4uYmxvY2stY29tbWVudCxcXG4udG9rZW4ucHJvbG9nLFxcbi50b2tlbi5kb2N0eXBlLFxcbi50b2tlbi5jZGF0YSB7XFxuXFx0Y29sb3I6ICM5OTk7XFxufVxcblxcbi50b2tlbi5wdW5jdHVhdGlvbiB7XFxuXFx0Y29sb3I6ICNjY2M7XFxufVxcblxcbi50b2tlbi50YWcsXFxuLnRva2VuLmF0dHItbmFtZSxcXG4udG9rZW4ubmFtZXNwYWNlLFxcbi50b2tlbi5kZWxldGVkIHtcXG5cXHRjb2xvcjogI2UyNzc3YTtcXG59XFxuXFxuLnRva2VuLmZ1bmN0aW9uLW5hbWUge1xcblxcdGNvbG9yOiAjNjE5NmNjO1xcbn1cXG5cXG4udG9rZW4uYm9vbGVhbixcXG4udG9rZW4ubnVtYmVyLFxcbi50b2tlbi5mdW5jdGlvbiB7XFxuXFx0Y29sb3I6ICNmMDhkNDk7XFxufVxcblxcbi50b2tlbi5wcm9wZXJ0eSxcXG4udG9rZW4uY2xhc3MtbmFtZSxcXG4udG9rZW4uY29uc3RhbnQsXFxuLnRva2VuLnN5bWJvbCB7XFxuXFx0Y29sb3I6ICNmOGM1NTU7XFxufVxcblxcbi50b2tlbi5zZWxlY3RvcixcXG4udG9rZW4uaW1wb3J0YW50LFxcbi50b2tlbi5hdHJ1bGUsXFxuLnRva2VuLmtleXdvcmQsXFxuLnRva2VuLmJ1aWx0aW4ge1xcblxcdGNvbG9yOiAjY2M5OWNkO1xcbn1cXG5cXG4udG9rZW4uc3RyaW5nLFxcbi50b2tlbi5jaGFyLFxcbi50b2tlbi5hdHRyLXZhbHVlLFxcbi50b2tlbi5yZWdleCxcXG4udG9rZW4udmFyaWFibGUge1xcblxcdGNvbG9yOiAjN2VjNjk5O1xcbn1cXG5cXG4udG9rZW4ub3BlcmF0b3IsXFxuLnRva2VuLmVudGl0eSxcXG4udG9rZW4udXJsIHtcXG5cXHRjb2xvcjogIzY3Y2RjYztcXG59XFxuXFxuLnRva2VuLmltcG9ydGFudCxcXG4udG9rZW4uYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50b2tlbi5pdGFsaWMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRva2VuLmVudGl0eSB7XFxuXFx0Y3Vyc29yOiBoZWxwO1xcbn1cXG5cXG4udG9rZW4uaW5zZXJ0ZWQge1xcblxcdGNvbG9yOiBncmVlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1nL211c2ljLWJhbm5lci5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotbXMtY2xlYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbi1yZWd1bGFyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjIyNzc7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggIzM5M0U0MSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggIzM5M0U0MSk7XFxuICBmb250LWZhbWlseTogTW9uYWNvLCBtb25vc3BhY2U7XFxufVxcblxcbi5wYWdlLTQwNCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4ucGFnZS00MDQgKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnBhZ2UtNDA0IGgxIHtcXG4gIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtMXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTFweCAwcHgsIHJlZCAxLjVweCAxcHggMHB4O1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGFnZS00MDQgaDIge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGFnZS00MDQgaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNDB2dztcXG59XFxuXFxuLnBhZ2UtNDA0IGltZzpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbn1cXG5cXG4ucGFnZS00MDQgaDI6aG92ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC0xcHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtMXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDEuNXB4IDFweCAwcHgpO1xcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC0xcHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtMXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDEuNXB4IDFweCAwcHgpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG59XFxuXFxuLnNoYWRvd2VkOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICMyMjIyMjIgMXB4IDFweCAxMHB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMjIyMjIyIDFweCAxcHggMTBweDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgbW9ub3NwYWNlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjRkRGRkZDO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4uaGVhZGVyIDo6c2xvdHRlZCB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXG4gIGhlaWdodDogNjVweDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZzpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coZ3JlZW55ZWxsb3cgLTJweCAwcHggMHB4KSBkcm9wLXNoYWRvdyhjeWFuIDEuNXB4IC0ycHggMHB4KSBkcm9wLXNoYWRvdyhyZWQgMi41cHggMS41cHggMHB4KTtcXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyhncmVlbnllbGxvdyAtMnB4IDBweCAwcHgpIGRyb3Atc2hhZG93KGN5YW4gMS41cHggLTJweCAwcHgpIGRyb3Atc2hhZG93KHJlZCAyLjVweCAxLjVweCAwcHgpO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxufVxcblxcbi5oZWFkZXIgaDE6aG92ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcbn1cXG5cXG4uYW5uaXZlcnNhcnkge1xcbiAgLyogZmYzLjYrICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgI0ZGMjI3NyksIGNvbG9yLXN0b3AoMTAwJSwgYXF1YSkpO1xcbiAgLyogc2FmYXJpNCssY2hyb21lICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZGMjI3NyAwJSwgYXF1YSAxMDAlKTtcXG4gIC8qIHNhZmFyaTUuMSssY2hyb21lMTArICovXFxuICAvKiBvcGVyYSAxMS4xMCsgKi9cXG4gIC8qIGllMTArICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRjIyNzcgMCUsIGFxdWEgMTAwJSk7XFxuICAvKiB3M2MgKi9cXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVxcXCIjMDBmZmZmXFxcIiwgZW5kQ29sb3JzdHI9XFxcIiNmZjAwZmZcXFwiLEdyYWRpZW50VHlwZT0xICk7XFxuICAvKiBpZTYtOSAqL1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5waG9lbml4IHtcXG4gIC8qIGZmMy42KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNDNTI0MzcpLCBjb2xvci1zdG9wKDEwMCUsICNGN0UyN0MpKTtcXG4gIC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNDNTI0MzcgMCUsICNGN0UyN0MgMTAwJSk7XFxuICAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcbiAgLyogb3BlcmEgMTEuMTArICovXFxuICAvKiBpZTEwKyAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjQzUyNDM3IDAlLCAjRjdFMjdDIDEwMCUpO1xcbiAgLyogdzNjICovXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0kcGhvZW5peC1wcmltYXJ5LWNvbG9yLCBlbmRDb2xvcnN0cj0kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcixHcmFkaWVudFR5cGU9MSApO1xcbiAgLyogaWU2LTkgKi9cXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udmhzLWNvbG9yIHtcXG4gIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtNXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTVweCAwcHgsIHJlZCAzLjVweCAzLjVweCAwcHg7XFxufVxcblxcbi50ZXJ0aWFyeS10ZXh0LWNvbG9yIHtcXG4gIGNvbG9yOiAjRkYyMjc3O1xcbn1cXG5cXG4ubWFpbi1ncmFkaWVudC10ZXh0IHtcXG4gIC8qIGZmMy42KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNDNTI0MzcpLCBjb2xvci1zdG9wKDEwMCUsICNGN0UyN0MpKTtcXG4gIC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNDNTI0MzcgMCUsICNGN0UyN0MgMTAwJSk7XFxuICAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcbiAgLyogb3BlcmEgMTEuMTArICovXFxuICAvKiBpZTEwKyAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjQzUyNDM3IDAlLCAjRjdFMjdDIDEwMCUpO1xcbiAgLyogdzNjICovXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0kcGhvZW5peC1wcmltYXJ5LWNvbG9yLCBlbmRDb2xvcnN0cj0kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcixHcmFkaWVudFR5cGU9MSApO1xcbiAgLyogaWU2LTkgKi9cXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubWFpbi1ib2R5IHtcXG4gIHRvcDogNzVweDtcXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA3NXB4KTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzVweCk7XFxufVxcblxcbi5wb3B1cCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRvcDogNzVweDtcXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMHZoIC0gNzVweCAtIDcwcHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCAtIDcwcHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XFxcXDkgO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0jMjIwMDAwMDAsZW5kQ29sb3JzdHI9IzIyMDAwMDAwKTtcXG4gIHpvb206IDE7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIge1xcbiAgei1pbmRleDogMTEwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4IDBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucG9wdXAtZGl2IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiA1MDBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMHB4ICNGRjIyNzc7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ucG9wdXAgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAgY29kZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzM5M0U0MTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMzOTNFNDE7XFxufVxcblxcbi5wb3B1cCA+IGRpdiBzbWFsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjRkYyMjc3O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNoYXJlLWJ1dHRvbi1kaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hhcmUtYnV0dG9uLWRpdiA+ICoge1xcbiAgbWFyZ2luOiA1cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG59XFxuXFxuLnNoYXJlLWJ1dHRvbi1kaXYgPiAqOmhvdmVyIC5zaGFyZS1idXR0b24taWNvbiB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICNGRjIyNzcgM3B4IDJweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogI0ZGMjI3NyAzcHggMnB4O1xcbn1cXG5cXG4uc2hhcmUtYnV0dG9uLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxufVxcblxcbi5zaGFyZS1jb3VudC13cmFwcGVyID4gKiB7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnNoYXJlLWxpbmstY29weSB7XFxuICBwYWRkaW5nOiA3LjVweCAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDc7XFxuICBwYWRkaW5nLWJvdHRvbTogODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjIyNzc7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxuICAgICAgICAgIGJveC1zaGFkb3c6ICMzOTNFNDEgNXB4IDIuNXB4O1xcbn1cXG5cXG4uc2hhcmUtbGluayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMzIwcHg7XFxuICBwYWRkaW5nOiA3LjVweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxufVxcblxcbi5uYXZpZ2F0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIGhlaWdodDogMzVweDtcXG4gIHRvcDogNzVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzM5M0U0MTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMzOTNFNDE7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkYyMjc3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA0NXB4KTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxufVxcblxcbi5uYXZpZ2F0b3IgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggIzM5M0U0MTtcXG59XFxuXFxuLm5hdmlnYXRvciBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGJ1dHRvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgbWFyZ2luOiAxLjI1cHg7XFxuICByaWdodDogNDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweCA4cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICMzOTNFNDEgNXB4IDIuNXB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG59XFxuXFxuLm5hdmlnYXRvciBidXR0b246aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDcuNXB4IDIuNXB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMzkzRTQxIDcuNXB4IDIuNXB4O1xcbn1cXG5cXG4ubmF2aWdhdG9yIGJ1dHRvbiBpbnB1dCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLm5hdmlnYXRvciBidXR0b24gbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDM1cHggLSA3NXB4IC0gNzBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNXB4IC0gNzVweCAtIDcwcHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmxpbmstZGlzYWJsZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMjUwcHggNzVweCAjMTAxMDEwLCAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDc1cHggIzEwMTAxMCwgMTBweCA3LjVweCAxcHggMHB4ICNGRjIyNzc7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICMzOTNFNDE7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICMzOTNFNDE7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiAqIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiBwIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIHNtYWxsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAyMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCA3NXB4ICMxMDEwMTAsIDEwcHggNy41cHggMXB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjUwcHggNzVweCAjMTAxMDEwLCAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDMwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWw6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wb3N0LXRodW1ibmFpbCBkaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnBvc3QtdGh1bWJuYWlsIGRpdiAqIHtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWwgZGl2IHAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnBvc3QtdGh1bWJuYWlsIHNtYWxsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAyMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1wYWdlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNsb3NlLWljb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZS1pY29uOmhvdmVyIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxufVxcblxcbi5zaGFyZS1pY29uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICByaWdodDogOTBweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAycHggI0ZGMjI3Nyk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMnB4ICNGRjIyNzcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hhcmUtaWNvbjpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG59XFxuXFxuLmFib3V0LWgxIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hYm91dC1oMiB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmFib3V0LXAge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IC03LjVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3LjVweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5hYm91dC1tZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICMzOTNFNDE7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggNy41cHggMXB4IDBweCAjMzkzRTQxO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5hYm91dC1tZSBpbWcge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMjIyMjIyIDFweCAxcHggMTBweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzIyMjIyMiAxcHggMXB4IDEwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG59XFxuXFxuLmFib3V0LW1lIGltZzpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggNy41cHggMXB4IDBweCAjMzkzRTQxO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggIzM5M0U0MTtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwdncgLSAxMDBweCk7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4uY29udGFjdC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtcmlnaHQgaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNvbnRhY3QtcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYyMjc3O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICMzOTNFNDE7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICNGRjIyNzc7XFxufVxcblxcbi5jb250YWN0LXRodW1ibmFpbDpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMXB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDFweCAwcHggI0ZGMjI3NztcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIGRpdiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gODBweCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4ucDUtaW5mbyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM5M0U0MTtcXG59XFxuXFxuLnA1LWluZm8gaDEge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ucDUtaW5mbyBwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucDUtaW5mbyBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYyMjc3O1xcbn1cXG5cXG4ucDUtaW5mbyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICBib3JkZXI6IG5vbmU7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG59XFxuXFxuLnA1LWluZm8tc2xpZGUge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNzVweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGxlZnQ6IDI1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5wNS1pbmZvLXNsaWRlIGltZyB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIGhlaWdodDogNDBweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxufVxcblxcbi5wNS1pbmZvLXNsaWRlIGltZzpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICMzOTNFNDEpO1xcbn1cXG5cXG4ucDUtaW5mby1zaG93IHtcXG4gIHotaW5kZXg6IDU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXG59XFxuXFxuLnA1LWluZm8tc2hvdyBwIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5wNS1pbmZvLXNob3c6OmFmdGVyIHtcXG4gIHotaW5kZXg6IDIwO1xcbiAgY29udGVudDogXFxcIkhpZGUgdGhpcyBpbmZvcm1hdGlvbiBwYW5lbCB3aXRoIHRoZSBeIGJ1dHRvbiBhYm92ZVxcXCI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDEwLjVweDtcXG4gIHRleHQtc2hhZG93OiAjMjIyMjIyIDFweCAxcHggMnB4O1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTBweDtcXG59XFxuXFxuLnA1LWNhbnZhcyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMDtcXG4gIHRvcDogMTUwcHg7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4IC0gNzVweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCAtIDc1cHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi53ZWJsb2ctc2lnbmF0dXJlIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBjb2xvcjogI0ZGMjI3NztcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ubXVzaWMtcmVsZWFzZS1iYW5uZXIge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDIwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMHB4O1xcbn1cXG5cXG4ubXVzaWMtcmVsZWFzZS1iYW5uZXIgcCwgLm11c2ljLXJlbGVhc2UtYmFubmVyIGgxLCAubXVzaWMtcmVsZWFzZS1iYW5uZXIgaDIsIC5tdXNpYy1yZWxlYXNlLWJhbm5lciBoMyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IC1tb3otbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4IGJsYWNrO1xcbn1cXG5cXG4uc3VibWVyZ2VuY2UtaG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLW91dCAwLjJzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxufVxcblxcbi5zdWJtZXJnZW5jZS1ob3ZlciBpbWcge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLW91dCAwLjJzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXG59XFxuXFxuLnN1Ym1lcmdlbmNlLWhvdmVyOmhvdmVyIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDBweCAjRkYyMjc3KTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAwcHggI0ZGMjI3Nyk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZm9vdGVyIGhyIHtcXG4gIGJvcmRlci1jb2xvcjogI0ZGMjI3NztcXG59XFxuXFxuLmZvb3RlciBidXR0b24sIC5mb290ZXIgYSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggIzIyMjIyMjtcXG59XFxuXFxuLmZvb3RlciBidXR0b246aG92ZXIsIC5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjRkRGRkZDO1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGNvbG9yOiAjRkYyMjc3O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdGV4dC1zaGFkb3c6ICMyMjIyMjIgMnB4IDJweCAxcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gIGJvZHkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGhlaWdodDogNzVweDtcXG4gIH1cXG5cXG4gIC5oZWFkZXIgaDEsIC5oZWFkZXIgaW1nIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogNTVweDtcXG4gIH1cXG5cXG4gIC5oZWFkZXIgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAuYnV0dG9uLXJlZ3VsYXIge1xcbiAgICBwYWRkaW5nOiA3LjVweCAxMnB4O1xcbiAgfVxcblxcbiAgLmhpZGUtb24td2ViIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcblxcbiAgLmhpZGUtb24tbW9iaWxlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG5cXG4gIC5wb3B1cCB7XFxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA3NXB4IC0gNzBweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNzVweCAtIDcwcHgpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRvciBpbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0b3IgYnV0dG9uIHtcXG4gICAgcmlnaHQ6IDQ1cHg7XFxuICB9XFxuXFxuICAucHJvamVjdC1saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDM1cHggLSA3NXB4IC0gNzBweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM1cHggLSA3NXB4IC0gNzBweCk7XFxuICAgIHBhZGRpbmc6IDBweCA1MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICB9XFxuXFxuICAucG9zdC10aHVtYm5haWwge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBlLCAucG9zdC10aHVtYm5haWw6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6bGFzdC1vZi10eXBlLCAucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWwgcCB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbDpob3ZlciBwIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbDpob3ZlciBzbWFsbCB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbDpob3ZlciBkaXYge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB9XFxuXFxuICAuY2xvc2UtaWNvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXBhZ2Uge1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCAtIDcwcHgpO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtbGVmdCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY29udGFjdC1yaWdodCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbGVmdDogNDB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoNjB2dyAtIDEwMHB4KTtcXG4gICAgd2lkdGg6IGNhbGMoNjB2dyAtIDEwMHB4KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDBweCA1MHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtcmlnaHQgaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmFib3V0IHtcXG4gICAgbWFyZ2luOiAwIDIwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUgaW1nIHtcXG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYyg1MCUgLSA0Mi41cHgpO1xcbiAgICB3aWR0aDogY2FsYyg1MCUgLSA0Mi41cHgpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUgZGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lIGRpdiBwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYWJvdXQtbWU6bGFzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8ge1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICB9XFxuXFxuICAucDUtaW5mbyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIHAge1xcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIGlucHV0IHtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XFxuICB9XFxuXFxuICAucDUtaW5mbyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA3LjVweCAxMnB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHJpZ2h0OiAxNDVweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNsaWRlIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMjVweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICB9XFxuXFxuICAucDUtaW5mby1zbGlkZSBpbWcge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNob3cge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8tc2hvdzo6YWZ0ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcblxcbiAgLnN1Ym1lcmdlbmNlLWhvdmVyIGJyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC53ZWJsb2ctcG9zdCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIH1cXG5cXG4gIC53ZWJsb2ctcG9zdCAqIHtcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXG4gICAgbWFyZ2luOiAycHggYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLndlYmxvZy1wb3N0IHNtYWxsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAud2VibG9nLXBvc3QgcCB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgfVxcblxcbiAgLndlYmxvZy1wb3N0IGgxIHtcXG4gICAgbWF4LXdpZHRoOiAtd2Via2l0LWNhbGMoMTAwdncgLSAyNTBweCk7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDI1MHB4KTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIGJ1dHRvbiwgLmZvb3RlciBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDVweCAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG5cXG4gIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICBjb2RlIHtcXG4gICAgcGFkZGluZzogMHB4IDRweDtcXG4gIH1cXG5cXG4gIC5tYWluLWJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcblxcbiAgLmhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuXFxuICAuaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgfVxcblxcbiAgLmhpZGUtb24td2ViIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG5cXG4gIC5oaWRlLW9uLW1vYmlsZSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogNDBweDtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDQwcHggLSA3MHB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4IC0gNzBweCk7XFxuICB9XFxuXFxuICAubmF2aWdhdG9yIGltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubmF2aWdhdG9yIGJ1dHRvbiB7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0b3IgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDQ1cHgpO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWwge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwcHggNTBweCBibGFjaywgMTBweCAxMHB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwcHggNTBweCBibGFjaywgMTBweCAxMHB4IDFweCAwcHggI0ZGMjI3NztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbDpsYXN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5wb3N0LXRodW1ibmFpbCB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyMDBweCA1MHB4IGJsYWNrLCAxMHB4IDEwcHggMXB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMDBweCA1MHB4IGJsYWNrLCAxMHB4IDEwcHggMXB4IDBweCAjRkYyMjc3O1xcbiAgfVxcblxcbiAgLnBvc3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcblxcbiAgLnBvc3QtdGh1bWJuYWlsOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsIHAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsIGgyIHtcXG4gICAgcGFkZGluZzogMHB4IDQwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC1saXN0IHtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDAlIC0gKDM1cHggKyA0MHB4ICsgNzBweCkpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICgzNXB4ICsgNDBweCArIDcwcHgpKTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jbG9zZS1pY29uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXBhZ2Uge1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDAlIC0gKDQwcHggKyA3MHB4KSk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gKDQwcHggKyA3MHB4KSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIH1cXG5cXG4gIC5zaGFyZS1pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwdncgLSAxMDBweCk7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTAwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWxlZnQge1xcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA2MHB4KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LXJpZ2h0IHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtcmlnaHQgaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtdGh1bWJuYWlsIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG5cXG4gIC5hYm91dCB7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgfVxcblxcbiAgLmFib3V0LW1lIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSBpbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSBwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAucDUtaW5mbyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM3LjVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXgtd2lkdGg6IDQ1JTtcXG4gICAgbWF4LXdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDIwMHB4KTtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XFxuICAgIG1heC1oZWlnaHQ6IDI2cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgfVxcblxcbiAgLnA1LWluZm8gcCB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIGJ1dHRvbiwgLnA1LWluZm8gaW5wdXQge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGNvbG9yOiAjRkRGRkZDO1xcbiAgfVxcblxcbiAgLnA1LWluZm8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDcuNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTJweDtcXG4gICAgcmlnaHQ6IDM1cHg7XFxuICB9XFxuXFxuICAucDUtaW5mbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxNjVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB9XFxuXFxuICAucDUtaW5mby1zbGlkZSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNsaWRlIGltZyB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICNGRjIyNzcpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICNGRjIyNzcpO1xcbiAgfVxcblxcbiAgLnA1LWluZm8tc2hvdyB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNob3c6OmFmdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNob3cgaDEge1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgfVxcblxcbiAgLnA1LWNhbnZhcyB7XFxuICAgIHRvcDogNDBweDtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnN1Ym1lcmdlbmNlLWhvdmVyIGJyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAud2VibG9nLXBvc3Qge1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG5cXG4gIC53ZWJsb2ctcG9zdCBwIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgfVxcblxcbiAgLmZvb3RlciBidXR0b24sIC5mb290ZXIgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiA3LjVweCAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vaW5kZXguc2Nzc1wiLFwid2VicGFjazovL25hdmlnYXRpb24uc2Nzc1wiLFwid2VicGFjazovL3RodW1ibmFpbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vcHJvamVjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vd2ViLXZpZXcuc2Nzc1wiLFwid2VicGFjazovL21vYmlsZS12aWV3LnNjc3NcIl0sXCJuYW1l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QSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VMNmhDTjs7RUtwaENFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUF0UWE7SUF1UWIsZUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFTHVoQ047O0VLcGhDRTtJQUNJLGdDQUFBO0lBQUEsd0JBQUE7SUFDQSxZQUFBO0lBRUEsZ0RBQUE7SUFDQSx3Q0FBQTtFTHNoQ047O0VLamhDRTtJQUNJLFlBQUE7SUFDQSxtQkFBQTtJQUNBLHlCTC9SUTtFQW16Q2Q7O0VLamhDRTtJQUNJLGdCQUFBO0VMb2hDTjs7RUtqaENFO0lBRUksOEJBQUE7SUFDQSxtQkFBQTtJQUVBLHVCQUFBO0VMa2hDTjs7RUsvZ0NFO0lBQ0ksU0ExU2E7SUEyU2IsaUNBQUE7SUFBQSx5QkFBQTtJQUVBLFVBQUE7RUxpaENOOztFSzdnQ0U7SUFDSSxjQUFBO0VMZ2hDTjs7RUs3Z0NFO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBRUEsZ0JBQUE7RUwrZ0NOOztFSzVnQ0U7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VMK2dDTjs7RUs1Z0NFO0lBQ0ksV0FBQTtJQUNBLFlBclVZO0lBdVVaLHlCTHpVVTtJSzJVVixlQUFBO0VMNmdDTjs7RUt4Z0NFO0lBRUkscUJBQUE7SUFFQSxrQkFBQTtJQUNBLGdCQUFBO0VMeWdDTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRwcmltYXJ5LWNvbG9yOiAjMjIyMjIyO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICMzOTNFNDE7XFxyXFxuJHRlcnRpYXJ5LWNvbG9yOiAjRkYyMjc3O1xcclxcbi8vICR0ZXJ0aWFyeS1jb2xvcjogI0NDMDA0NDtcXHJcXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjRkRGRkZDO1xcclxcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzM5M0U0MTtcXHJcXG4kdGVydGlhcnktdGV4dC1jb2xvcjogI0ZGMjI3NztcXHJcXG4vLyAkdGVydGlhcnktdGV4dC1jb2xvcjogI0VFMTE2NjtcXHJcXG4kcGhvZW5peC1wcmltYXJ5LWNvbG9yOiAjQzUyNDM3O1xcclxcbiRwaG9lbml4LXNlY29uZGFyeS1jb2xvcjogI0YwODg0MztcXHJcXG4kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcjogI0Y3RTI3QztcXHJcXG5cXHJcXG4vLyAkdGVydGlhcnktY29sb3I6ICRwaG9lbml4LXByaW1hcnktY29sb3I7XFxyXFxuLy8gJHRlcnRpYXJ5LXRleHQtY29sb3I6ICRwaG9lbml4LXNlY29uZGFyeS1jb2xvcjtcXHJcXG5cXHJcXG4kdGl0bGUtZm9udDogTW9uYWNvLCBtb25vc3BhY2U7XFxyXFxuLy8gJGJvZHktZm9udDogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4vLyAkYm9keS1mb250OiBNb25vc3BhY2U7XFxyXFxuJGJvZHktZm9udDogTW9uYWNvLCBtb25vc3BhY2U7XFxyXFxuJGhlYWRlci1oZWlnaHQ6IDc1cHg7XFxyXFxuJHNlYXJjaC1oZWlnaHQ6IDM1cHg7XFxyXFxuJHRodW1ibmFpbC1zaXplOiAyNTBweDtcXHJcXG4kYm90dG9tLWhlaWdodDogNzBweDtcXHJcXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XFxyXFxuJHA1LWluZm8taGVpZ2h0OiA3NXB4O1xcclxcbiR0aHVtYm5haWwtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXHJcXG4kdmhzLXNoYWRvd3MtbDogZ3JlZW55ZWxsb3cgLTVweCAwcHggMHB4LCBjeWFuIDAuNXB4IC01cHggMHB4LCByZWQgMy41cHggM3B4IDBweDtcXHJcXG4kdmhzLXNoYWRvd3MtbTogZ3JlZW55ZWxsb3cgLTJweCAwcHggMHB4LCBjeWFuIDEuNXB4IC0ycHggMHB4LCByZWQgMi41cHggMS41cHggMHB4O1xcclxcbiR2aHMtc2hhZG93cy1zOiBncmVlbnllbGxvdyAtMXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTFweCAwcHgsIHJlZCAxLjVweCAxcHggMHB4O1xcclxcbiR2aHMtc2hhZG93cy1kcm9wLWw6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcclxcbiR2aHMtc2hhZG93cy1kcm9wLW06IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC0ycHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAxLjVweCAtMnB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDIuNXB4IDEuNXB4IDBweCk7XFxyXFxuJHZocy1zaGFkb3dzLWRyb3AtczogZHJvcC1zaGFkb3coZ3JlZW55ZWxsb3cgLTFweCAwcHggMHB4KSBkcm9wLXNoYWRvdyhjeWFuIDAuNXB4IC0xcHggMHB4KSBkcm9wLXNoYWRvdyhyZWQgMS41cHggMXB4IDBweCk7XFxyXFxuJGdyZXktc2hhZG93OiAkcHJpbWFyeS1jb2xvciAxcHggMXB4IDEwcHg7XFxyXFxuJGdyZXktc2hhZG93LWRyb3A6IGRyb3Atc2hhZG93KCRwcmltYXJ5LWNvbG9yIDFweCAxcHggMTBweCk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogJGJvZHktZm9udDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICBmb250LXNpemU6JHJlZ3VsYXItZm9udC1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbntcXHJcXG4gICAgLy8td2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotbXMtY2xlYXJ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tcmVndWxhcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggMi41cHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkYm9keS1mb250O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS00MDR7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLy8gcGFkZGluZzogMTAlO1xcclxcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLTQwNCAqe1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS00MDQgaDF7XFxyXFxuICAgIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgZm9udC1zaXplOiAzICogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLTQwNCBoMntcXHJcXG4gICAgZm9udC1zaXplOiAyICogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLTQwNCBpbWd7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAvLyB3aWR0aDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDQwdnc7XFxyXFxuICAgIC8vIGZpbHRlcjovKmRyb3Atc2hhZG93KCR0ZXJ0aWFyeS1jb2xvciAwcHggMHB4IDUwcHgpICovXFxyXFxuICAgIC8vICAgICAvLyBkcm9wLXNoYWRvdygkdGVydGlhcnktY29sb3IgNDBweCAwcHggMHB4KVxcclxcbiAgICAvLyAgICAgLy8gZHJvcC1zaGFkb3coJHRlcnRpYXJ5LWNvbG9yIC00MHB4IDBweCAwcHgpXFxyXFxuICAgIC8vICAgICBkcm9wLXNoYWRvdygkdGVydGlhcnktY29sb3IgMHB4IDQwcHggMHB4KTtcXHJcXG4gICAgLy8gICAgIC8vIGRyb3Atc2hhZG93KCR0ZXJ0aWFyeS1jb2xvciAwcHggLTQwcHggMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtNDA0IGltZzpob3ZlcntcXHJcXG4gICAgdHJhbnNpdGlvbjogJHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLTQwNCBoMjpob3ZlcntcXHJcXG4gICAgZmlsdGVyOiR2aHMtc2hhZG93cy1kcm9wLXM7XFxyXFxuICAgIHRyYW5zaXRpb246ICR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvd2VkOmhvdmVye1xcclxcbiAgICB0cmFuc2l0aW9uOiAkdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6ICRncmV5LXNoYWRvdztcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogJHZocy1zaGFkb3dzLWw7XFxyXFxuICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtbDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjokcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgY29sb3I6JHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRib2R5LWZvbnQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dzs7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogJHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG5jb2RlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJHRpdGxlLWZvbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIDo6c2xvdHRlZCB7XFxyXFxuICAgIGZsb2F0OmxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaW1nIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogJHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICBoZWlnaHQ6ICgkaGVhZGVyLWhlaWdodCAtIDEwKTtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IGdyZWVueWVsbG93IC0xLjVweCAxLjVweCAwcHgsIGN5YW4gMC41cHggLTEuNXB4IDBweCwgcmVkIDEuNXB4IDEuNXB4IDBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBpbWc6aG92ZXIge1xcclxcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgICAgICBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLW07XFxyXFxuICAgICAgICAvLyBmaWx0ZXI6ICRncmV5LXNoYWRvdy1kcm9wO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGgxIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogJHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGgxOmhvdmVye1xcclxcbiAgICBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5hbm5pdmVyc2FyeSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkdGVydGlhcnktY29sb3IgMCUsIHJnYmEoMCwyNTUsMjU1LDEpIDEwMCUpOyAvKiBmZjMuNisgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICR0ZXJ0aWFyeS1jb2xvciksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgwLDI1NSwyNTUsMSkpKTsgLyogc2FmYXJpNCssY2hyb21lICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkdGVydGlhcnktY29sb3IgMCUsIHJnYmEoMCwyNTUsMjU1LDEpIDEwMCUpOyAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICR0ZXJ0aWFyeS1jb2xvciAwJSwgcmdiYSgwLDI1NSwyNTUsMSkgMTAwJSk7IC8qIG9wZXJhIDExLjEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkdGVydGlhcnktY29sb3IgMCUsIHJnYmEoMCwyNTUsMjU1LDEpIDEwMCUpOyAvKiBpZTEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICR0ZXJ0aWFyeS1jb2xvciAwJSwgcmdiYSgwLDI1NSwyNTUsMSkgMTAwJSk7IC8qIHczYyAqL1xcclxcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwZmZmZicsIGVuZENvbG9yc3RyPScjZmYwMGZmJyxHcmFkaWVudFR5cGU9MSApOyAvKiBpZTYtOSAqL1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvZW5peCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogZmYzLjYrICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yKSwgY29sb3Itc3RvcCgxMDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvcikpOyAvKiBzYWZhcmk0KyxjaHJvbWUgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiBvcGVyYSAxMS4xMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIGllMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIHczYyAqL1xcclxcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0kcGhvZW5peC1wcmltYXJ5LWNvbG9yLCBlbmRDb2xvcnN0cj0kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcixHcmFkaWVudFR5cGU9MSApOyAvKiBpZTYtOSAqL1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4udmhzLWNvbG9yIHtcXHJcXG4gICAgLy8gbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7IFxcclxcbiAgICAvLyBjb2xvcjogIzAwZjtcXHJcXG4gICAgLy8gb3BhY2l0eTogMC41O1xcclxcbiAgICAvLyB0ZXh0LXNoYWRvdzogIzBmMCA1cHggNXB4IDFweCwgI2YwMCAxMHB4IDEwcHggMXB4OyAvLywgIzAwZiAtNXB4IC01cHggMHB4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogZ3JlZW55ZWxsb3cgLTVweCAwcHggMHB4LCBjeWFuIDAuNXB4IC01cHggMHB4LCByZWQgMy41cHggMy41cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVydGlhcnktdGV4dC1jb2xvcntcXHJcXG4gICAgY29sb3I6ICR0ZXJ0aWFyeS10ZXh0LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1ncmFkaWVudC10ZXh0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiBmZjMuNisgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICRwaG9lbml4LXByaW1hcnktY29sb3IpLCBjb2xvci1zdG9wKDEwMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yKSk7IC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIHNhZmFyaTUuMSssY2hyb21lMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIG9wZXJhIDExLjEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogaWUxMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogdzNjICovXFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPSRwaG9lbml4LXByaW1hcnktY29sb3IsIGVuZENvbG9yc3RyPSRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yLEdyYWRpZW50VHlwZT0xICk7IC8qIGllNi05ICovXFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8vIC5oZWFkZXIgaDE6aG92ZXIge1xcclxcbi8vICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbi8vICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbi8vIH1cXHJcXG5cXHJcXG4ubWFpbi1ib2R5e1xcclxcbiAgICB0b3A6ICRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlYWRlci1oZWlnaHR9KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwe1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICB0b3A6ICRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtYnV0dG9ue1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICAvLyB0b3A6ICRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2IoMCwwLDApO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxcXFw5O1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC44KTtcXHJcXG4gICAgZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPSMyMjAwMDAwMCxlbmRDb2xvcnN0cj0jMjIwMDAwMDApO1xcclxcbiAgICB6b29tOiAxO1xcclxcbiAgICB3aWR0aDoxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lcntcXHJcXG4gICAgei1pbmRleDogMTEwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLy8gcGFkZGluZzoxMDBweCAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XFxyXFxuICAgIC8vIG1hcmdpbi10b3A6NTBweDtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICAvLyBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCBibGFjaztcXHJcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBjb2xvcjokcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCBjb2RlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIGluc2V0IDAgMCAxMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgPiBkaXYgc21hbGwge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogJHRlcnRpYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIG1hcmdpbi10b3A6MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWJ1dHRvbi1kaXZ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWJ1dHRvbi1kaXYgPiAqe1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDZkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1idXR0b24tZGl2ID4gKjpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuXFxyXFxuICAgIC5zaGFyZS1idXR0b24taWNvbntcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6JHRlcnRpYXJ5LWNvbG9yIDNweCAycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWJ1dHRvbi1pY29ue1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6ICRzZWNvbmRhcnktY29sb3IgNXB4IDIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtY291bnQtd3JhcHBlciA+ICp7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTVweDtcXHJcXG4gICAgcGFkZGluZzogM3B4IDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWxpbmstY29udGFpbmVye1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWxpbmstY29weXtcXHJcXG4gICAgcGFkZGluZzogNy41cHggMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDc7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbiAgICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogJHNlY29uZGFyeS1jb2xvciA1cHggMi41cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1saW5re1xcclxcblxcclxcbiAgICAvLyAtbW96LXVzZXItc2VsZWN0OiBhbGw7XFxyXFxuICAgIC8vIC13ZWJraXQtdXNlci1zZWxlY3Q6IGFsbDtcXHJcXG4gICAgLy8gLW1zLXVzZXItc2VsZWN0OiBhbGw7XFxyXFxuICAgIC8vIHVzZXItc2VsZWN0OiBhbGw7XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICBwYWRkaW5nOiA3LjVweDtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gICAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogJHNlY29uZGFyeS1jb2xvciA1cHggMi41cHg7XFxyXFxufVxcclxcblxcclxcbkBpbXBvcnQgJy4vbmF2aWdhdGlvbi5zY3NzJztcXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JHNlYXJjaC1oZWlnaHR9IC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5saW5rLWRpc2FibGVkIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQGltcG9ydCAnLi90aHVtYm5haWwuc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi9wcm9qZWN0LnNjc3MnO1xcclxcblxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGhlaWdodDogJGJvdHRvbS1oZWlnaHQ7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgaHJ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjokdGVydGlhcnktY29sb3JcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBidXR0b24sIC5mb290ZXIgYXtcXHJcXG4gICAgZm9udC1zaXplOiRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7ICAgIFxcclxcbiAgICAvLyB0ZXh0LXNoYWRvdzogJHByaW1hcnktY29sb3IgMnB4IDJweCAxcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYXtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICRwcmltYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGJ1dHRvbjpob3ZlciwgLmZvb3RlciBhOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgY29sb3I6JHRlcnRpYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogJHByaW1hcnktY29sb3IgMnB4IDJweCAxcHg7XFxyXFxufVxcclxcblxcclxcbkBpbXBvcnQgJ3dlYi12aWV3LnNjc3MnO1xcclxcbkBpbXBvcnQgJ21vYmlsZS12aWV3LnNjc3MnO1wiLFwiLm5hdmlnYXRvciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgaGVpZ2h0OiAkc2VhcmNoLWhlaWdodDtcXHJcXG4gICAgdG9wOiAkaGVhZGVyLWhlaWdodDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdG9yIGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6ICRzZWFyY2gtaGVpZ2h0IC0gMTA7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICByaWdodDogNXB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0b3IgaW5wdXQge1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIGluc2V0IDAgMCAxMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBmb250LXNpemU6ICRzZWFyY2gtaGVpZ2h0IC0gMjA7XFxyXFxuICAgIGJhY2tncm91bmQ6JHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgY29sb3I6JHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ1cHgpO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiRzZWFyY2gtaGVpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdG9yIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIC8vIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMi41cHggJHNlY29uZGFyeS10ZXh0LWNvbG9yLCAxcHggLTFweCAyLjVweCAkc2Vjb25kYXJ5LXRleHQtY29sb3IsIC0xcHggMXB4IDIuNXB4ICRzZWNvbmRhcnktdGV4dC1jb2xvciwgMXB4IDFweCAyLjVweCAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0b3IgYnV0dG9uIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjNzO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAkc2VhcmNoLWhlaWdodCAtIDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgIG1hcmdpbjogMS4yNXB4O1xcclxcbiAgICByaWdodDogJHNlYXJjaC1oZWlnaHQrMTBweDtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDhweCA4cHg7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDZkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAvLyBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDcuNXB4IDIuNXB4O1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDVweCAyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRvciBidXR0b246aG92ZXJ7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCg2ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgYm94LXNoYWRvdzogJHNlY29uZGFyeS1jb2xvciA3LjVweCAyLjVweDtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogJHNlY29uZGFyeS1jb2xvciA1cHggMi41cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0b3IgYnV0dG9uIGlucHV0e1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogICAgICAgICBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBjb2xvcjokcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICB3aWR0aDogJHNlYXJjaC1oZWlnaHQgLSAyMDtcXHJcXG4gICAgaGVpZ2h0OiAkc2VhcmNoLWhlaWdodCAtIDIwO1xcclxcbiAgICBmbG9hdDpsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdG9yIGJ1dHRvbiBsYWJlbHtcXHJcXG4gICAgbWFyZ2luLXRvcDowcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcbi8vICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbi8vICAgICBtYXJnaW4tbGVmdDogLTNweDtcXHJcXG4vLyAgICAgbWFyZ2luLXRvcDogLTEuNXB4O1xcclxcbi8vICAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuLy8gICAgIHdpZHRoOiAxNnB4O1xcclxcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2NiwgMTY2LCAxNjYpO1xcclxcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuLy8gICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMjUpO1xcclxcbi8vICB9XFxyXFxuXFxyXFxuLy8gIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGVydGlhcnktY29sb3I7XFxyXFxuXFxyXFxuLy8gIH1cXHJcXG5cXHJcXG4vLyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4vLyAgICAgY29udGVudDogJyc7XFxyXFxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4vLyAgICAgd2lkdGg6IDExcHg7XFxyXFxuLy8gICAgIGhlaWdodDogNHB4O1xcclxcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuLy8gICAgIHRvcDogMTFweDtcXHJcXG4vLyAgICAgbGVmdDogMTAuOXB4O1xcclxcbi8vICAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXHJcXG4vLyAgICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuLy8gICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4vLyAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4vLyAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuLy8gIH1cIixcIi5wcm9qZWN0LXRodW1ibmFpbCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSA3NXB4ICMxMDEwMTAsIDVweCA1cHggMXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgNzVweCAjMTAxMDEwLDEwcHggNy41cHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgNzVweCAjMTAxMDEwLCAkdmhzLXNoYWRvd3MtbDtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgICBoZWlnaHQ6ICR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgd2lkdGg6ICR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aHVtYm5haWw6aG92ZXIge1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDIwMHB4IGJsYWNrLDEwcHggNy41cHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRodW1ibmFpbCBkaXYge1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgLy8gZGlzcGxheTp0YWJsZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDokdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgIC8vaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvLyBtYXJnaW4tdG9wOiAxMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiAqe1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRodW1ibmFpbCBkaXYgcCB7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aHVtYm5haWwgc21hbGwge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAkdGh1bWJuYWlsLXNpemUgLSAyMHB4O1xcclxcbiAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtdGh1bWJuYWlsIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDc1cHggIzEwMTAxMCwgNXB4IDVweCAxcHggMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSA3NXB4ICMxMDEwMTAsMTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBoZWlnaHQ6ICR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgd2lkdGg6ICR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC10aHVtYm5haWw6aG92ZXIge1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDIwMHB4IGJsYWNrLDEwcHggNy41cHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgICAgICBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgMjAwcHggYmxhY2ssIDVweCA1cHggMXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbCBkaXYge1xcclxcbiAgICAvLyBkaXNwbGF5OnRhYmxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgLy9oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC10aHVtYm5haWwgZGl2ICp7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC10aHVtYm5haWwgZGl2IHAge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC10aHVtYm5haWwgc21hbGwge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAkdGh1bWJuYWlsLXNpemUgLSAyMHB4O1xcclxcbiAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XCIsXCIucHJvamVjdC1wYWdlIHtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSk7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vLyAucHJvamVjdC1wYWdlIGgxOmZpcnN0LW9mLXR5cGV7XFxyXFxuLy8gICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbi8vIH1cXHJcXG5cXHJcXG4vLyAucHJvamVjdC1wYWdlIHA6Zmlyc3Qtb2YtdHlwZXtcXHJcXG4vLyAgICAgcGFkZGluZzogMTBweDtcXHJcXG4vLyAgICAgcGFkZGluZy10b3A6IDBweDtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuLmNsb3NlLWljb24ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIC8vIHBvc2l0aW9uOnN0aWNreTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgcmlnaHQ6IDM1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxNWRlZykgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgIC8vIC13ZWJraXQtZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbiAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246aG92ZXIge1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIC8vdGV4dC1zaGFkb3c6IDEwcHggMTBweCAwcHggI0ZGMjI3NztcXHJcXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLW07XFxyXFxuICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWljb24ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIC8vIHBvc2l0aW9uOnN0aWNreTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHJpZ2h0OiA5MHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxNWRlZykgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDJweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMnB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgIC8vIC13ZWJraXQtZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbiAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWljb246aG92ZXIge1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggMi41cHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIC8vIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIC8vdGV4dC1zaGFkb3c6IDEwcHggMTBweCAwcHggI0ZGMjI3NztcXHJcXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLXM7XFxyXFxuICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtcztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWgxe1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1oMntcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICAvLyBtYXJnaW4tdG9wOjMwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogYmxhY2sgMXB4IDFweCAxMHB4O1xcclxcbiAgICAvLyBib3gtc2hhZG93OjEwcHggNy41cHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6MTBweCA3LjVweCAxcHggMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1we1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAvLyB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtNy41cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA3LjVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LW1le1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMTBweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OjEwcHggNy41cHggMXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LW1lIGltZ3tcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAkcHJpbWFyeS1jb2xvciAxcHggMXB4IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IDEwcHggNy41cHggMXB4IDBweCAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAvLyB3aWR0aDogMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtbWUgaW1nOmhvdmVye1xcclxcbiAgICBib3gtc2hhZG93OjEwcHggNy41cHggMXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXHJcXG4gICAgcGFkZGluZzogMCA1MHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuJGNvbnRhY3QtbGVmdDogNDAlO1xcclxcblxcclxcbi5jb250YWN0LWxlZnQge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgd2lkdGg6ICRjb250YWN0LWxlZnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcmlnaHQgaDF7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogYmxhY2sgMXB4IDFweCAxMHB4O1xcclxcbiAgICAvLyBib3gtc2hhZG93OjEwcHggNy41cHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6MTBweCA3LjVweCAxcHggMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXRodW1ibmFpbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC10aHVtYm5haWw6aG92ZXJ7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIGJveC1zaGFkb3c6NXB4IDVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdGh1bWJuYWlsIGRpdntcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXRodW1ibmFpbCBpbWd7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvIGgxe1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMyAqICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6ICRwNS1pbmZvLWhlaWdodCArIDI1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mbyBwe1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjJzO1xcclxcbiAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8gaW5wdXQge1xcclxcbiAgICAvLyB6LWluZGV4OiAyMDtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgLy8gbWFyZ2luOiAxMHB4O1xcclxcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIC8vIHRvcDokaGVhZGVyLWhlaWdodCsxMnB4O1xcclxcbiAgICAvLyByaWdodDogMTQ1cHg7XFxyXFxuICAgIC8vIHdpZHRoOiA4MHB4O1xcclxcbiAgICAvLyBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mbyBidXR0b24ge1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAvLyB0b3A6JGhlYWRlci1oZWlnaHQrIDEycHg7XFxyXFxuICAgIC8vIHJpZ2h0OiAxNDVweDtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8tc2xpZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogJHA1LWluZm8taGVpZ2h0O1xcclxcbiAgICAvLyBtYXJnaW46IDVweDtcXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgbGVmdDogMjVweDtcXHJcXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIC8vIHJpZ2h0OiAzNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mby1zbGlkZSBpbWd7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTVkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgLy8gZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mby1zbGlkZSBpbWc6aG92ZXIge1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIC8vdGV4dC1zaGFkb3c6IDEwcHggMTBweCAwcHggI0ZGMjI3NztcXHJcXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLW07XFxyXFxuICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbTtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8tc2hvd3tcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mby1zaG93IHB7XFxyXFxuICAgIC8vIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuMnM7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mby1zaG93OjphZnRlcntcXHJcXG4gICAgei1pbmRleDogMjA7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJIaWRlIHRoaXMgaW5mb3JtYXRpb24gcGFuZWwgd2l0aCB0aGUgXiBidXR0b24gYWJvdmVcXFwiO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43NSAqICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgLy8gdGV4dC1zaGFkb3c6ICRwcmltYXJ5LWNvbG9yIDFweCAxcHggMCwgJHByaW1hcnktY29sb3IgLTFweCAxcHggMCxcXHJcXG4gICAgLy8gICAgICRwcmltYXJ5LWNvbG9yIDFweCAtMXB4IDAsICRwcmltYXJ5LWNvbG9yIC0xcHggLTFweCAwO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogJHByaW1hcnktY29sb3IgMXB4IDFweCAycHg7XFxyXFxuICAgIC8vIHRleHQtc2hhZG93OiAkZ3JleS1zaGFkb3c7XFxyXFxuICAgIC8vIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgLy8gYm90dG9tOiBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWNhbnZhc3tcXHJcXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICAgIC8vIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIHRvcDogJHA1LWluZm8taGVpZ2h0ICsgJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0gLSAjeyRwNS1pbmZvLWhlaWdodH0pO1xcclxcbiAgICAvLyBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSAtICN7JHA1LWluZm8taGVpZ2h0fSAtIDEwcHgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VibG9nLXNpZ25hdHVyZXtcXHJcXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gICAgY29sb3I6JHRlcnRpYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tdXNpYy1yZWxlYXNlLWJhbm5lcntcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9tdXNpYy1iYW5uZXIuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246MCUgMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm11c2ljLXJlbGVhc2UtYmFubmVyIHAsLm11c2ljLXJlbGVhc2UtYmFubmVyIGgxLC5tdXNpYy1yZWxlYXNlLWJhbm5lciBoMiwubXVzaWMtcmVsZWFzZS1iYW5uZXIgaDMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWVyZ2VuY2UtaG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1lcmdlbmNlLWhvdmVyIGltZ3tcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1lcmdlbmNlLWhvdmVyOmhvdmVye1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTVkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAwcHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDBweCAkdGVydGlhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyAuc3VibWVyZ2VuY2UtaG92ZXI6aG92ZXIgaW1nIHtcXHJcXG4vLyAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG4vLyB9XFxyXFxuXCIsXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KXtcXHJcXG4gICAgJGhlYWRlci1oZWlnaHQ6NzVweDtcXHJcXG4gICAgJHRodW1ibmFpbC1zaXplOiAyNTBweDtcXHJcXG4gICAgJGJvdHRvbS1oZWlnaHQ6IDcwcHg7XFxyXFxuXFxyXFxuICAgIGJvZHl7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtbDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6ICR2aHMtc2hhZG93cy1zO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaDEsIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkaGVhZGVyLWhlaWdodCAtIDIwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaDEge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgLy8gZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIC8vIGJvdHRvbTogM3B4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgICAgIC8vIGdyZWVueWVsbG93IC01cHggMHB4IDBweCwgY3lhbiAwLjVweCAtNXB4IDBweCwgcmVkIDMuNXB4IDNweCAwcHg7XFxyXFxuICAgICAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtcztcXHJcXG4gICAgICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9uLXJlZ3VsYXIge1xcclxcbiAgICAgICAgcGFkZGluZzogNy41cHggMTJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGlkZS1vbi13ZWIge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oaWRlLW9uLW1vYmlsZSB7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wb3B1cHtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmlnYXRvciBpbWcge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmlnYXRvciBidXR0b257XFxyXFxuICAgICAgICByaWdodDokc2VhcmNoLWhlaWdodCsxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICAgICAgbWFyZ2luOjA7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRzZWFyY2gtaGVpZ2h0fSAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAgICAgaGVpZ2h0OiR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBvc3QtdGh1bWJuYWlsIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAgICAgaGVpZ2h0OiR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsOmZpcnN0LW9mLXR5cGUsIC5wb3N0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6bGFzdC1vZi10eXBlLCAucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbCBwIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgcCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbDpob3ZlciBzbWFsbHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgZGl2e1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmNsb3NlLWljb257XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtcGFnZXtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0LWxlZnQge1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICB3aWR0aDogJGNvbnRhY3QtbGVmdDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jb250YWN0LXJpZ2h0IHtcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoMC40ICogKDEwMHZ3KSk7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygwLjYgKiAoMTAwdncpIC0gMTAwcHgpO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHggNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNvbnRhY3QtcmlnaHQgaDF7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAuYWJvdXR7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMjAlO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC1tZSBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA0Mi41cHgpO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgICAgICAvLyBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmFib3V0LW1lIGRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gICAgICAgIC8vIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC1tZSBkaXYgcCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWU6bGFzdC1jaGlsZHtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZve1xcclxcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6ICRwNS1pbmZvLWhlaWdodDtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IC01cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucDUtaW5mbyBoMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMyAqICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkcDUtaW5mby1oZWlnaHQgKyAyNXB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIH0gICBcXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gcHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNzUwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mbyBpbnB1dCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAvLyB0b3A6IDA7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcXHJcXG4gICAgICAgIC8vIGJvdHRvbTogJGJvdHRvbS1oZWlnaHQ7XFxyXFxuICAgICAgICAvLyB0b3A6JGhlYWRlci1oZWlnaHQgKyAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gYnV0dG9uIHtcXHJcXG4gICAgICAgIC8vIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcGFkZGluZzogNy41cHggMTJweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgIC8vIHRvcDokaGVhZGVyLWhlaWdodCsgMTJweDtcXHJcXG4gICAgICAgIHRvcDogMTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxNDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zbGlkZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICAgICAgbGVmdDogMjVweDtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgICAgIC8vIHJpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnA1LWluZm8tc2xpZGUgaW1ne1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDE1ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICAgICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgICAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8tc2hvd3tcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvLXNob3c6OmFmdGVye1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAucDUtY2FudmFzIHtcXHJcXG4gICAgLy8gICAgIC8vIG1hcmdpbi10b3A6ICRwNS1pbmZvLWhlaWdodDtcXHJcXG4gICAgLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIC8vICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9IC0gI3skcDUtaW5mby1oZWlnaHR9KTtcXHJcXG4gICAgLy8gfVxcclxcblxcclxcbiAgICAuc3VibWVyZ2VuY2UtaG92ZXIgYnJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53ZWJsb2ctcG9zdHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3QgKiB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAycHggYXV0bztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3Qgc21hbGx7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53ZWJsb2ctcG9zdCBwIHtcXHJcXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0IGgxIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDI1MHB4KTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICAgIGhlaWdodDogJGJvdHRvbS1oZWlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciBidXR0b24sIC5mb290ZXIgYSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpe1xcclxcbiAgICAkaGVhZGVyLWhlaWdodDo0MHB4O1xcclxcbiAgICAkdGh1bWJuYWlsLXNpemU6IDIwMHB4O1xcclxcbiAgICAkYm90dG9tLWhlaWdodDogNzBweDtcXHJcXG4gICAgJHJlZ3VsYXItZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICAkcDUtaW5mby1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgICRwNS1pbmZvLWNsb3NlZDogMjZweDtcXHJcXG5cXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBmb250LXNpemU6JHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGh0bWx7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgY29kZXtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDBweCA0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6IGdyZWVueWVsbG93IC0xcHggMXB4IDBweCwgY3lhbiAwcHggLTFweCAwcHgsIHJlZCAxcHggMXB4IDBweDtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6IGdyZWVueWVsbG93IC0xcHggMXB4IDBweCwgY3lhbiAwcHggLTFweCAwcHgsIHJlZCAxcHggMXB4IDBweDtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbi1ib2R5e1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjhweDtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGlkZS1vbi13ZWIge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGlkZS1vbi1tb2JpbGUge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5wb3B1cHtcXHJcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgICAgIHRvcDogJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZpZ2F0b3IgaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmlnYXRvciBidXR0b257XFxyXFxuICAgICAgICByaWdodDo1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2aWdhdG9yIGlucHV0e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlse1xcclxcbiAgICAgICAgaGVpZ2h0OiR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgNTBweCBibGFjaywgMTBweCAxMHB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6bGFzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5wb3N0LXRodW1ibmFpbCB7XFxyXFxuICAgICAgICBoZWlnaHQ6JHRodW1ibmFpbC1zaXplO1xcclxcbiAgICAgICAgd2lkdGg6ICR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSA1MHB4IGJsYWNrLCAxMHB4IDEwcHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBvc3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZXtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wb3N0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWwgcCB7XFxyXFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsIGgyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDBweCA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDoycHg7XFxyXFxuICAgICAgICAvLyB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICgjeyRzZWFyY2gtaGVpZ2h0fSArICN7JGhlYWRlci1oZWlnaHR9ICsgI3skYm90dG9tLWhlaWdodH0pKTtcXHJcXG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICAgICAgLy8gcGFkZGluZzogMHB4O1xcclxcbiAgICAgICAgLy8gbWFyZ2luOiAwcHg7XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNsb3NlLWljb24ge1xcclxcbiAgICAgICAgLy8gcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtcGFnZXtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gKCN7JGhlYWRlci1oZWlnaHR9ICsgI3skYm90dG9tLWhlaWdodH0pKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2hhcmUtaWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdC1sZWZ0IHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY29udGFjdC1yaWdodCB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNvbnRhY3QtcmlnaHQgaDF7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0LXRodW1ibmFpbCBkaXZ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgICAgLy8gZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC1tZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC1tZSBpbWd7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5hYm91dC1tZSBwIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5hYm91dC1tZSBkaXZ7XFxyXFxuICAgIC8vICAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAvLyB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvIGgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyICogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRwNS1pbmZvLWhlaWdodCAtIDIuNXB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6ICRwNS1pbmZvLWNsb3NlZDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gcHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gYnV0dG9uLCAucDUtaW5mbyBpbnB1dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gYnV0dG9ue1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA3LjVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDotMnB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDM1cHg7XFxyXFxuICAgICAgICAvLyB0b3A6IDEwcHg7XFxyXFxuICAgICAgICAvLyByaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mbyBpbnB1dHtcXHJcXG4gICAgICAgIHdpZHRoOiAxNjVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLztcXHJcXG4gICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zbGlkZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucDUtaW5mby1zbGlkZSBpbWd7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTVkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgICAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zaG93e1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvLXNob3c6OmFmdGVye1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zaG93IGgxe1xcclxcbiAgICAgICAgLy8gb3ZlcmZsb3c6IG5vbmU7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTpub3JtYWw7XFxyXFxuICAgICAgICAvLyB0ZXh0LW92ZXJmbG93OmluaGVyaXQ7XFxyXFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtY2FudmFze1xcclxcbiAgICAgICAgdG9wOiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHA1LWluZm8taGVpZ2h0fSk7XFxyXFxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAtMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1Ym1lcmdlbmNlLWhvdmVyIGJye1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0e1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgLy8gbWFyZ2luOjVweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3QgcCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDokYm90dG9tLWhlaWdodDtcXHJcXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgLy9wb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXIgYnV0dG9uLCAuZm9vdGVyIGEge1xcclxcbiAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDE1cHggYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbjogNy41cHggMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29weXJpZ2h0e1xcclxcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6ICR2aHMtc2hhZG93cy1zO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXs5MTpmdW5jdGlvbihlKXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxyKXtpZighcil7cj17fX1lPWUmJmUuX19lc01vZHVsZT9lLmRlZmF1bHQ6ZTtpZih0eXBlb2YgZSE9PVwic3RyaW5nXCIpe3JldHVybiBlfWlmKC9eWydcIl0uKlsnXCJdJC8udGVzdChlKSl7ZT1lLnNsaWNlKDEsLTEpfWlmKHIuaGFzaCl7ZSs9ci5oYXNofWlmKC9bXCInKCkgXFx0XFxuXS8udGVzdChlKXx8ci5uZWVkUXVvdGVzKXtyZXR1cm4nXCInLmNvbmNhdChlLnJlcGxhY2UoL1wiL2csJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLFwiXFxcXG5cIiksJ1wiJyl9cmV0dXJuIGV9fX07dmFyIHI9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyh0KXtpZihyW3RdKXtyZXR1cm4gclt0XS5leHBvcnRzfXZhciBfPXJbdF09e2V4cG9ydHM6e319O3ZhciBuPXRydWU7dHJ5e2VbdF0oXyxfLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7bj1mYWxzZX1maW5hbGx5e2lmKG4pZGVsZXRlIHJbdF19cmV0dXJuIF8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MSl9KCk7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9tdXNpYy1iYW5uZXIuZDUzMmYyZjcyNmIyYTAwMzBlN2Y3ZTU3ZDVmOGY5YTQuanBnXCI7IiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFQcmlzbS5wbHVnaW5zLnRvb2xiYXIpIHtcblx0XHRjb25zb2xlLndhcm4oJ0NvcHkgdG8gQ2xpcGJvYXJkIHBsdWdpbiBsb2FkZWQgYmVmb3JlIFRvb2xiYXIgcGx1Z2luLicpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZW4gdGhlIGdpdmVuIGVsZW1lbnRzIGlzIGNsaWNrZWQgYnkgdGhlIHVzZXIsIHRoZSBnaXZlbiB0ZXh0IHdpbGwgYmUgY29waWVkIHRvIGNsaXBib2FyZC5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge0NvcHlJbmZvfSBjb3B5SW5mb1xuXHQgKlxuXHQgKiBAdHlwZWRlZiBDb3B5SW5mb1xuXHQgKiBAcHJvcGVydHkgeygpID0+IHN0cmluZ30gZ2V0VGV4dFxuXHQgKiBAcHJvcGVydHkgeygpID0+IHZvaWR9IHN1Y2Nlc3Ncblx0ICogQHByb3BlcnR5IHsocmVhc29uOiB1bmtub3duKSA9PiB2b2lkfSBlcnJvclxuXHQgKi9cblx0ZnVuY3Rpb24gcmVnaXN0ZXJDbGlwYm9hcmQoZWxlbWVudCwgY29weUluZm8pIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29weVRleHRUb0NsaXBib2FyZChjb3B5SW5mbyk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzA4MTAzMjIvNzU5NTQ3MlxuXG5cdC8qKiBAcGFyYW0ge0NvcHlJbmZvfSBjb3B5SW5mbyAqL1xuXHRmdW5jdGlvbiBmYWxsYmFja0NvcHlUZXh0VG9DbGlwYm9hcmQoY29weUluZm8pIHtcblx0XHR2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXHRcdHRleHRBcmVhLnZhbHVlID0gY29weUluZm8uZ2V0VGV4dCgpO1xuXG5cdFx0Ly8gQXZvaWQgc2Nyb2xsaW5nIHRvIGJvdHRvbVxuXHRcdHRleHRBcmVhLnN0eWxlLnRvcCA9ICcwJztcblx0XHR0ZXh0QXJlYS5zdHlsZS5sZWZ0ID0gJzAnO1xuXHRcdHRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuXHRcdHRleHRBcmVhLmZvY3VzKCk7XG5cdFx0dGV4dEFyZWEuc2VsZWN0KCk7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChzdWNjZXNzZnVsKSB7XG5cdFx0XHRcdFx0Y29weUluZm8uc3VjY2VzcygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvcHlJbmZvLmVycm9yKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNvcHlJbmZvLmVycm9yKGVycik7XG5cdFx0XHR9LCAxKTtcblx0XHR9XG5cblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcblx0fVxuXHQvKiogQHBhcmFtIHtDb3B5SW5mb30gY29weUluZm8gKi9cblx0ZnVuY3Rpb24gY29weVRleHRUb0NsaXBib2FyZChjb3B5SW5mbykge1xuXHRcdGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG5cdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5SW5mby5nZXRUZXh0KCkpLnRoZW4oY29weUluZm8uc3VjY2VzcywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQvLyB0cnkgdGhlIGZhbGxiYWNrIGluIGNhc2UgYHdyaXRlVGV4dGAgZGlkbid0IHdvcmtcblx0XHRcdFx0ZmFsbGJhY2tDb3B5VGV4dFRvQ2xpcGJvYXJkKGNvcHlJbmZvKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmYWxsYmFja0NvcHlUZXh0VG9DbGlwYm9hcmQoY29weUluZm8pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZWxlY3RzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHQgKi9cblx0ZnVuY3Rpb24gc2VsZWN0RWxlbWVudFRleHQoZWxlbWVudCkge1xuXHRcdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMDA3OTkxMC83NTk1NDcyXG5cdFx0d2luZG93LmdldFNlbGVjdGlvbigpLnNlbGVjdEFsbENoaWxkcmVuKGVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyYXZlcnNlcyB1cCB0aGUgRE9NIHRyZWUgdG8gZmluZCBkYXRhIGF0dHJpYnV0ZXMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gc3RhcnRFbGVtZW50IEFuIGVsZW1lbnQgdG8gc3RhcnQgZnJvbS5cblx0ICogQHJldHVybnMge1NldHRpbmdzfSBUaGUgcGx1Z2luIHNldHRpbmdzLlxuXHQgKiBAdHlwZWRlZiB7UmVjb3JkPFwiY29weVwiIHwgXCJjb3B5LWVycm9yXCIgfCBcImNvcHktc3VjY2Vzc1wiIHwgXCJjb3B5LXRpbWVvdXRcIiwgc3RyaW5nIHwgbnVtYmVyPn0gU2V0dGluZ3Ncblx0ICovXG5cdGZ1bmN0aW9uIGdldFNldHRpbmdzKHN0YXJ0RWxlbWVudCkge1xuXHRcdC8qKiBAdHlwZSB7U2V0dGluZ3N9ICovXG5cdFx0dmFyIHNldHRpbmdzID0ge1xuXHRcdFx0J2NvcHknOiAnQ29weScsXG5cdFx0XHQnY29weS1lcnJvcic6ICdQcmVzcyBDdHJsK0MgdG8gY29weScsXG5cdFx0XHQnY29weS1zdWNjZXNzJzogJ0NvcGllZCEnLFxuXHRcdFx0J2NvcHktdGltZW91dCc6IDUwMDBcblx0XHR9O1xuXG5cdFx0dmFyIHByZWZpeCA9ICdkYXRhLXByaXNtanMtJztcblx0XHRmb3IgKHZhciBrZXkgaW4gc2V0dGluZ3MpIHtcblx0XHRcdHZhciBhdHRyID0gcHJlZml4ICsga2V5O1xuXHRcdFx0dmFyIGVsZW1lbnQgPSBzdGFydEVsZW1lbnQ7XG5cdFx0XHR3aGlsZSAoZWxlbWVudCAmJiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcblx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRcdHNldHRpbmdzW2tleV0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG5cblx0UHJpc20ucGx1Z2lucy50b29sYmFyLnJlZ2lzdGVyQnV0dG9uKCdjb3B5LXRvLWNsaXBib2FyZCcsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgZWxlbWVudCA9IGVudi5lbGVtZW50O1xuXG5cdFx0dmFyIHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoZWxlbWVudCk7XG5cblx0XHR2YXIgbGlua0NvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRsaW5rQ29weS5jbGFzc05hbWUgPSAnY29weS10by1jbGlwYm9hcmQtYnV0dG9uJztcblx0XHRsaW5rQ29weS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cdFx0dmFyIGxpbmtTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGxpbmtDb3B5LmFwcGVuZENoaWxkKGxpbmtTcGFuKTtcblxuXHRcdHNldFN0YXRlKCdjb3B5Jyk7XG5cblx0XHRyZWdpc3RlckNsaXBib2FyZChsaW5rQ29weSwge1xuXHRcdFx0Z2V0VGV4dDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudC50ZXh0Q29udGVudDtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNldFN0YXRlKCdjb3B5LXN1Y2Nlc3MnKTtcblxuXHRcdFx0XHRyZXNldFRleHQoKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZXRTdGF0ZSgnY29weS1lcnJvcicpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGVjdEVsZW1lbnRUZXh0KGVsZW1lbnQpO1xuXHRcdFx0XHR9LCAxKTtcblxuXHRcdFx0XHRyZXNldFRleHQoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBsaW5rQ29weTtcblxuXHRcdGZ1bmN0aW9uIHJlc2V0VGV4dCgpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZXRTdGF0ZSgnY29weScpOyB9LCBzZXR0aW5nc1snY29weS10aW1lb3V0J10pO1xuXHRcdH1cblxuXHRcdC8qKiBAcGFyYW0ge1wiY29weVwiIHwgXCJjb3B5LWVycm9yXCIgfCBcImNvcHktc3VjY2Vzc1wifSBzdGF0ZSAqL1xuXHRcdGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG5cdFx0XHRsaW5rU3Bhbi50ZXh0Q29udGVudCA9IHNldHRpbmdzW3N0YXRlXTtcblx0XHRcdGxpbmtDb3B5LnNldEF0dHJpYnV0ZSgnZGF0YS1jb3B5LXN0YXRlJywgc3RhdGUpO1xuXHRcdH1cblx0fSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0UHJpc20ucGx1Z2lucy50b29sYmFyLnJlZ2lzdGVyQnV0dG9uKCdkb3dubG9hZC1maWxlJywgZnVuY3Rpb24gKGVudikge1xuXHRcdHZhciBwcmUgPSBlbnYuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpIHx8ICFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXNyYycpIHx8ICFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLWRvd25sb2FkLWxpbmsnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgc3JjID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcblx0XHR2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRhLnRleHRDb250ZW50ID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1kb3dubG9hZC1saW5rLWxhYmVsJykgfHwgJ0Rvd25sb2FkJztcblx0XHRhLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnJyk7XG5cdFx0YS5ocmVmID0gc3JjO1xuXHRcdHJldHVybiBhO1xuXHR9KTtcblxufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG5cblx0aWYgKHR5cGVvZiBQcmlzbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbHVnaW4gbmFtZSB3aGljaCBpcyB1c2VkIGFzIGEgY2xhc3MgbmFtZSBmb3IgPHByZT4gd2hpY2ggaXMgYWN0aXZhdGluZyB0aGUgcGx1Z2luXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHR2YXIgUExVR0lOX05BTUUgPSAnbGluZS1udW1iZXJzJztcblxuXHQvKipcblx0ICogUmVndWxhciBleHByZXNzaW9uIHVzZWQgZm9yIGRldGVybWluaW5nIGxpbmUgYnJlYWtzXG5cdCAqXG5cdCAqIEB0eXBlIHtSZWdFeHB9XG5cdCAqL1xuXHR2YXIgTkVXX0xJTkVfRVhQID0gL1xcbig/ISQpL2c7XG5cblxuXHQvKipcblx0ICogR2xvYmFsIGV4cG9ydHNcblx0ICovXG5cdHZhciBjb25maWcgPSBQcmlzbS5wbHVnaW5zLmxpbmVOdW1iZXJzID0ge1xuXHRcdC8qKlxuXHRcdCAqIEdldCBub2RlIGZvciBwcm92aWRlZCBsaW5lIG51bWJlclxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHByZSBlbGVtZW50XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciBsaW5lIG51bWJlclxuXHRcdCAqIEByZXR1cm5zIHtFbGVtZW50fHVuZGVmaW5lZH1cblx0XHQgKi9cblx0XHRnZXRMaW5lOiBmdW5jdGlvbiAoZWxlbWVudCwgbnVtYmVyKSB7XG5cdFx0XHRpZiAoZWxlbWVudC50YWdOYW1lICE9PSAnUFJFJyB8fCAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxpbmVOdW1iZXJSb3dzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKTtcblx0XHRcdGlmICghbGluZU51bWJlclJvd3MpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGxpbmVOdW1iZXJTdGFydCA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXJ0JyksIDEwKSB8fCAxO1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJFbmQgPSBsaW5lTnVtYmVyU3RhcnQgKyAobGluZU51bWJlclJvd3MuY2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG5cblx0XHRcdGlmIChudW1iZXIgPCBsaW5lTnVtYmVyU3RhcnQpIHtcblx0XHRcdFx0bnVtYmVyID0gbGluZU51bWJlclN0YXJ0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG51bWJlciA+IGxpbmVOdW1iZXJFbmQpIHtcblx0XHRcdFx0bnVtYmVyID0gbGluZU51bWJlckVuZDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxpbmVJbmRleCA9IG51bWJlciAtIGxpbmVOdW1iZXJTdGFydDtcblxuXHRcdFx0cmV0dXJuIGxpbmVOdW1iZXJSb3dzLmNoaWxkcmVuW2xpbmVJbmRleF07XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlc2l6ZXMgdGhlIGxpbmUgbnVtYmVycyBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIFRoaXMgZnVuY3Rpb24gd2lsbCBub3QgYWRkIGxpbmUgbnVtYmVycy4gSXQgd2lsbCBvbmx5IHJlc2l6ZSBleGlzdGluZyBvbmVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBBIGA8cHJlPmAgZWxlbWVudCB3aXRoIGxpbmUgbnVtYmVycy5cblx0XHQgKiBAcmV0dXJucyB7dm9pZH1cblx0XHQgKi9cblx0XHRyZXNpemU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRyZXNpemVFbGVtZW50cyhbZWxlbWVudF0pO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIHRoZSBwbHVnaW4gY2FuIGFzc3VtZSB0aGF0IHRoZSB1bml0cyBmb250IHNpemVzIGFuZCBtYXJnaW5zIGFyZSBub3QgZGVwZW5kZWQgb24gdGhlIHNpemUgb2Zcblx0XHQgKiB0aGUgY3VycmVudCB2aWV3cG9ydC5cblx0XHQgKlxuXHRcdCAqIFNldHRpbmcgdGhpcyB0byBgdHJ1ZWAgd2lsbCBhbGxvdyB0aGUgcGx1Z2luIHRvIGRvIGNlcnRhaW4gb3B0aW1pemF0aW9ucyBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuXHRcdCAqXG5cdFx0ICogU2V0IHRoaXMgdG8gYGZhbHNlYCBpZiB5b3UgdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIENTUyB1bml0czogYHZoYCwgYHZ3YCwgYHZtaW5gLCBgdm1heGAuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRhc3N1bWVWaWV3cG9ydEluZGVwZW5kZW5jZTogdHJ1ZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXNpemVzIHRoZSBnaXZlbiBlbGVtZW50cy5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBlbGVtZW50c1xuXHQgKi9cblx0ZnVuY3Rpb24gcmVzaXplRWxlbWVudHMoZWxlbWVudHMpIHtcblx0XHRlbGVtZW50cyA9IGVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuXHRcdFx0dmFyIGNvZGVTdHlsZXMgPSBnZXRTdHlsZXMoZSk7XG5cdFx0XHR2YXIgd2hpdGVTcGFjZSA9IGNvZGVTdHlsZXNbJ3doaXRlLXNwYWNlJ107XG5cdFx0XHRyZXR1cm4gd2hpdGVTcGFjZSA9PT0gJ3ByZS13cmFwJyB8fCB3aGl0ZVNwYWNlID09PSAncHJlLWxpbmUnO1xuXHRcdH0pO1xuXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGluZm9zID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHR2YXIgY29kZUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcblx0XHRcdHZhciBsaW5lTnVtYmVyc1dyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcnMtcm93cycpO1xuXHRcdFx0aWYgKCFjb2RlRWxlbWVudCB8fCAhbGluZU51bWJlcnNXcmFwcGVyKSB7XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG5cdFx0XHR2YXIgbGluZU51bWJlclNpemVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXNpemVyJyk7XG5cdFx0XHR2YXIgY29kZUxpbmVzID0gY29kZUVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoTkVXX0xJTkVfRVhQKTtcblxuXHRcdFx0aWYgKCFsaW5lTnVtYmVyU2l6ZXIpIHtcblx0XHRcdFx0bGluZU51bWJlclNpemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRsaW5lTnVtYmVyU2l6ZXIuY2xhc3NOYW1lID0gJ2xpbmUtbnVtYmVycy1zaXplcic7XG5cblx0XHRcdFx0Y29kZUVsZW1lbnQuYXBwZW5kQ2hpbGQobGluZU51bWJlclNpemVyKTtcblx0XHRcdH1cblxuXHRcdFx0bGluZU51bWJlclNpemVyLmlubmVySFRNTCA9ICcwJztcblx0XHRcdGxpbmVOdW1iZXJTaXplci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0dmFyIG9uZUxpbmVySGVpZ2h0ID0gbGluZU51bWJlclNpemVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRcdGxpbmVOdW1iZXJTaXplci5pbm5lckhUTUwgPSAnJztcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0bGluZXM6IGNvZGVMaW5lcyxcblx0XHRcdFx0bGluZUhlaWdodHM6IFtdLFxuXHRcdFx0XHRvbmVMaW5lckhlaWdodDogb25lTGluZXJIZWlnaHQsXG5cdFx0XHRcdHNpemVyOiBsaW5lTnVtYmVyU2l6ZXIsXG5cdFx0XHR9O1xuXHRcdH0pLmZpbHRlcihCb29sZWFuKTtcblxuXHRcdGluZm9zLmZvckVhY2goZnVuY3Rpb24gKGluZm8pIHtcblx0XHRcdHZhciBsaW5lTnVtYmVyU2l6ZXIgPSBpbmZvLnNpemVyO1xuXHRcdFx0dmFyIGxpbmVzID0gaW5mby5saW5lcztcblx0XHRcdHZhciBsaW5lSGVpZ2h0cyA9IGluZm8ubGluZUhlaWdodHM7XG5cdFx0XHR2YXIgb25lTGluZXJIZWlnaHQgPSBpbmZvLm9uZUxpbmVySGVpZ2h0O1xuXG5cdFx0XHRsaW5lSGVpZ2h0c1tsaW5lcy5sZW5ndGggLSAxXSA9IHVuZGVmaW5lZDtcblx0XHRcdGxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUsIGluZGV4KSB7XG5cdFx0XHRcdGlmIChsaW5lICYmIGxpbmUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHZhciBlID0gbGluZU51bWJlclNpemVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0XHRcdFx0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0XHRlLnRleHRDb250ZW50ID0gbGluZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaW5lSGVpZ2h0c1tpbmRleF0gPSBvbmVMaW5lckhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRpbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvKSB7XG5cdFx0XHR2YXIgbGluZU51bWJlclNpemVyID0gaW5mby5zaXplcjtcblx0XHRcdHZhciBsaW5lSGVpZ2h0cyA9IGluZm8ubGluZUhlaWdodHM7XG5cblx0XHRcdHZhciBjaGlsZEluZGV4ID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGluZUhlaWdodHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGxpbmVIZWlnaHRzW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRsaW5lSGVpZ2h0c1tpXSA9IGxpbmVOdW1iZXJTaXplci5jaGlsZHJlbltjaGlsZEluZGV4KytdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoaW5mbykge1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJTaXplciA9IGluZm8uc2l6ZXI7XG5cdFx0XHR2YXIgd3JhcHBlciA9IGluZm8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKTtcblxuXHRcdFx0bGluZU51bWJlclNpemVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRsaW5lTnVtYmVyU2l6ZXIuaW5uZXJIVE1MID0gJyc7XG5cblx0XHRcdGluZm8ubGluZUhlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAoaGVpZ2h0LCBsaW5lTnVtYmVyKSB7XG5cdFx0XHRcdHdyYXBwZXIuY2hpbGRyZW5bbGluZU51bWJlcl0uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4Jztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgc3R5bGUgZGVjbGFyYXRpb25zIGZvciB0aGUgZWxlbWVudFxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0ICovXG5cdGZ1bmN0aW9uIGdldFN0eWxlcyhlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIDogKGVsZW1lbnQuY3VycmVudFN0eWxlIHx8IG51bGwpO1xuXHR9XG5cblx0dmFyIGxhc3RXaWR0aCA9IHVuZGVmaW5lZDtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoY29uZmlnLmFzc3VtZVZpZXdwb3J0SW5kZXBlbmRlbmNlICYmIGxhc3RXaWR0aCA9PT0gd2luZG93LmlubmVyV2lkdGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGFzdFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0XHRyZXNpemVFbGVtZW50cyhBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUuJyArIFBMVUdJTl9OQU1FKSkpO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2NvbXBsZXRlJywgZnVuY3Rpb24gKGVudikge1xuXHRcdGlmICghZW52LmNvZGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY29kZSA9IC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKGVudi5lbGVtZW50KTtcblx0XHR2YXIgcHJlID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKGNvZGUucGFyZW50Tm9kZSk7XG5cblx0XHQvLyB3b3JrcyBvbmx5IGZvciA8Y29kZT4gd3JhcHBlZCBpbnNpZGUgPHByZT4gKG5vdCBpbmxpbmUpXG5cdFx0aWYgKCFwcmUgfHwgIS9wcmUvaS50ZXN0KHByZS5ub2RlTmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBYm9ydCBpZiBsaW5lIG51bWJlcnMgYWxyZWFkeSBleGlzdHNcblx0XHRpZiAoY29kZS5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIG9ubHkgYWRkIGxpbmUgbnVtYmVycyBpZiA8Y29kZT4gb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBgbGluZS1udW1iZXJzYCBjbGFzc1xuXHRcdGlmICghUHJpc20udXRpbC5pc0FjdGl2ZShjb2RlLCBQTFVHSU5fTkFNRSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIGNsYXNzICdsaW5lLW51bWJlcnMnIGZyb20gdGhlIDxjb2RlPlxuXHRcdGNvZGUuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSk7XG5cdFx0Ly8gQWRkIHRoZSBjbGFzcyAnbGluZS1udW1iZXJzJyB0byB0aGUgPHByZT5cblx0XHRwcmUuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSk7XG5cblx0XHR2YXIgbWF0Y2ggPSBlbnYuY29kZS5tYXRjaChORVdfTElORV9FWFApO1xuXHRcdHZhciBsaW5lc051bSA9IG1hdGNoID8gbWF0Y2gubGVuZ3RoICsgMSA6IDE7XG5cdFx0dmFyIGxpbmVOdW1iZXJzV3JhcHBlcjtcblxuXHRcdHZhciBsaW5lcyA9IG5ldyBBcnJheShsaW5lc051bSArIDEpLmpvaW4oJzxzcGFuPjwvc3Bhbj4nKTtcblxuXHRcdGxpbmVOdW1iZXJzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5lTnVtYmVyc1dyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLmNsYXNzTmFtZSA9ICdsaW5lLW51bWJlcnMtcm93cyc7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLmlubmVySFRNTCA9IGxpbmVzO1xuXG5cdFx0aWYgKHByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3RhcnQnKSkge1xuXHRcdFx0cHJlLnN0eWxlLmNvdW50ZXJSZXNldCA9ICdsaW5lbnVtYmVyICcgKyAocGFyc2VJbnQocHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpLCAxMCkgLSAxKTtcblx0XHR9XG5cblx0XHRlbnYuZWxlbWVudC5hcHBlbmRDaGlsZChsaW5lTnVtYmVyc1dyYXBwZXIpO1xuXG5cdFx0cmVzaXplRWxlbWVudHMoW3ByZV0pO1xuXG5cdFx0UHJpc20uaG9va3MucnVuKCdsaW5lLW51bWJlcnMnLCBlbnYpO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2xpbmUtbnVtYmVycycsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRlbnYucGx1Z2lucyA9IGVudi5wbHVnaW5zIHx8IHt9O1xuXHRcdGVudi5wbHVnaW5zLmxpbmVOdW1iZXJzID0gdHJ1ZTtcblx0fSk7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmdW5jdGlvbiBtYXBDbGFzc05hbWUobmFtZSkge1xuXHRcdHZhciBjdXN0b21DbGFzcyA9IFByaXNtLnBsdWdpbnMuY3VzdG9tQ2xhc3M7XG5cdFx0aWYgKGN1c3RvbUNsYXNzKSB7XG5cdFx0XHRyZXR1cm4gY3VzdG9tQ2xhc3MuYXBwbHkobmFtZSwgJ25vbmUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXHR9XG5cblx0dmFyIFBBUlRORVIgPSB7XG5cdFx0JygnOiAnKScsXG5cdFx0J1snOiAnXScsXG5cdFx0J3snOiAnfScsXG5cdH07XG5cblx0Ly8gVGhlIG5hbWVzIGZvciBicmFjZSB0eXBlcy5cblx0Ly8gVGhlc2UgbmFtZXMgaGF2ZSB0d28gcHVycG9zZXM6IDEpIHRoZXkgY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcgYW5kIDIpIHRoZXkgYXJlIHVzZWQgdG8gcGFpciBicmFjZXMuIE9ubHkgYnJhY2VzXG5cdC8vIG9mIHRoZSBzYW1lIHR5cGUgYXJlIHBhaXJlZC5cblx0dmFyIE5BTUVTID0ge1xuXHRcdCcoJzogJ2JyYWNlLXJvdW5kJyxcblx0XHQnWyc6ICdicmFjZS1zcXVhcmUnLFxuXHRcdCd7JzogJ2JyYWNlLWN1cmx5Jyxcblx0fTtcblxuXHQvLyBBIG1hcCBmb3IgYnJhY2UgYWxpYXNlcy5cblx0Ly8gVGhpcyBpcyB1c2VmdWwgZm9yIHdoZW4gc29tZSBicmFjZXMgaGF2ZSBhIHByZWZpeC9zdWZmaXggYXMgcGFydCBvZiB0aGUgcHVuY3R1YXRpb24gdG9rZW4uXG5cdHZhciBCUkFDRV9BTElBU19NQVAgPSB7XG5cdFx0JyR7JzogJ3snLCAvLyBKUyB0ZW1wbGF0ZSBwdW5jdHVhdGlvbiAoZS5nLiBgZm9vICR7YmFyICsgMX1gKVxuXHR9O1xuXG5cdHZhciBMRVZFTF9XQVJQID0gMTI7XG5cblx0dmFyIHBhaXJJZENvdW50ZXIgPSAwO1xuXG5cdHZhciBCUkFDRV9JRF9QQVRURVJOID0gL14ocGFpci1cXGQrLSkob3BlbnxjbG9zZSkkLztcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYnJhY2UgcGFydG5lciBnaXZlbiBvbmUgYnJhY2Ugb2YgYSBicmFjZSBwYWlyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBicmFjZVxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRQYXJ0bmVyQnJhY2UoYnJhY2UpIHtcblx0XHR2YXIgbWF0Y2ggPSBCUkFDRV9JRF9QQVRURVJOLmV4ZWMoYnJhY2UuaWQpO1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG1hdGNoWzFdICsgKG1hdGNoWzJdID09ICdvcGVuJyA/ICdjbG9zZScgOiAnb3BlbicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdGhpcyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBob3ZlckJyYWNlKCkge1xuXHRcdGlmICghUHJpc20udXRpbC5pc0FjdGl2ZSh0aGlzLCAnYnJhY2UtaG92ZXInLCB0cnVlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdFt0aGlzLCBnZXRQYXJ0bmVyQnJhY2UodGhpcyldLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdGUuY2xhc3NMaXN0LmFkZChtYXBDbGFzc05hbWUoJ2JyYWNlLWhvdmVyJykpO1xuXHRcdH0pO1xuXHR9XG5cdC8qKlxuXHQgKiBAdGhpcyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBsZWF2ZUJyYWNlKCkge1xuXHRcdFt0aGlzLCBnZXRQYXJ0bmVyQnJhY2UodGhpcyldLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdGUuY2xhc3NMaXN0LnJlbW92ZShtYXBDbGFzc05hbWUoJ2JyYWNlLWhvdmVyJykpO1xuXHRcdH0pO1xuXHR9XG5cdC8qKlxuXHQgKiBAdGhpcyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBjbGlja0JyYWNlKCkge1xuXHRcdGlmICghUHJpc20udXRpbC5pc0FjdGl2ZSh0aGlzLCAnYnJhY2Utc2VsZWN0JywgdHJ1ZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRbdGhpcywgZ2V0UGFydG5lckJyYWNlKHRoaXMpXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRlLmNsYXNzTGlzdC5hZGQobWFwQ2xhc3NOYW1lKCdicmFjZS1zZWxlY3RlZCcpKTtcblx0XHR9KTtcblx0fVxuXG5cdFByaXNtLmhvb2tzLmFkZCgnY29tcGxldGUnLCBmdW5jdGlvbiAoZW52KSB7XG5cblx0XHQvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuXHRcdHZhciBjb2RlID0gZW52LmVsZW1lbnQ7XG5cdFx0dmFyIHByZSA9IGNvZGUucGFyZW50RWxlbWVudDtcblxuXHRcdGlmICghcHJlIHx8IHByZS50YWdOYW1lICE9ICdQUkUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gZmluZCB0aGUgYnJhY2VzIHRvIG1hdGNoXG5cdFx0LyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9cblx0XHR2YXIgdG9NYXRjaCA9IFtdO1xuXHRcdGlmIChQcmlzbS51dGlsLmlzQWN0aXZlKGNvZGUsICdtYXRjaC1icmFjZXMnKSkge1xuXHRcdFx0dG9NYXRjaC5wdXNoKCcoJywgJ1snLCAneycpO1xuXHRcdH1cblxuXHRcdGlmICh0b01hdGNoLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHQvLyBub3RoaW5nIHRvIG1hdGNoXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFwcmUuX19saXN0ZW5lckFkZGVkKSB7XG5cdFx0XHQvLyBjb2RlIGJsb2NrcyBtaWdodCBiZSBoaWdobGlnaHRlZCBtb3JlIHRoYW4gb25jZVxuXHRcdFx0cHJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIHJlbW92ZUJyYWNlU2VsZWN0ZWQoKSB7XG5cdFx0XHRcdC8vIHRoZSBjb2RlIGVsZW1lbnQgbWlnaHQgaGF2ZSBiZWVuIHJlcGxhY2VkXG5cdFx0XHRcdHZhciBjb2RlID0gcHJlLnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcblx0XHRcdFx0dmFyIGNsYXNzTmFtZSA9IG1hcENsYXNzTmFtZSgnYnJhY2Utc2VsZWN0ZWQnKTtcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29kZS5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNsYXNzTmFtZSkpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcmUsICdfX2xpc3RlbmVyQWRkZWQnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXHRcdH1cblxuXHRcdC8qKiBAdHlwZSB7SFRNTFNwYW5FbGVtZW50W119ICovXG5cdFx0dmFyIHB1bmN0dWF0aW9uID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG5cdFx0XHRjb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4uJyArIG1hcENsYXNzTmFtZSgndG9rZW4nKSArICcuJyArIG1hcENsYXNzTmFtZSgncHVuY3R1YXRpb24nKSlcblx0XHQpO1xuXG5cdFx0LyoqIEB0eXBlIHt7IGluZGV4OiBudW1iZXIsIG9wZW46IGJvb2xlYW4sIGVsZW1lbnQ6IEhUTUxFbGVtZW50IH1bXX0gKi9cblx0XHR2YXIgYWxsQnJhY2VzID0gW107XG5cblx0XHR0b01hdGNoLmZvckVhY2goZnVuY3Rpb24gKG9wZW4pIHtcblx0XHRcdHZhciBjbG9zZSA9IFBBUlRORVJbb3Blbl07XG5cdFx0XHR2YXIgbmFtZSA9IG1hcENsYXNzTmFtZShOQU1FU1tvcGVuXSk7XG5cblx0XHRcdC8qKiBAdHlwZSB7W251bWJlciwgbnVtYmVyXVtdfSAqL1xuXHRcdFx0dmFyIHBhaXJzID0gW107XG5cdFx0XHQvKiogQHR5cGUge251bWJlcltdfSAqL1xuXHRcdFx0dmFyIG9wZW5TdGFjayA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB1bmN0dWF0aW9uLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gcHVuY3R1YXRpb25baV07XG5cdFx0XHRcdGlmIChlbGVtZW50LmNoaWxkRWxlbWVudENvdW50ID09IDApIHtcblx0XHRcdFx0XHR2YXIgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cdFx0XHRcdFx0dGV4dCA9IEJSQUNFX0FMSUFTX01BUFt0ZXh0XSB8fCB0ZXh0O1xuXHRcdFx0XHRcdGlmICh0ZXh0ID09PSBvcGVuKSB7XG5cdFx0XHRcdFx0XHRhbGxCcmFjZXMucHVzaCh7IGluZGV4OiBpLCBvcGVuOiB0cnVlLCBlbGVtZW50OiBlbGVtZW50IH0pO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG1hcENsYXNzTmFtZSgnYnJhY2Utb3BlbicpKTtcblx0XHRcdFx0XHRcdG9wZW5TdGFjay5wdXNoKGkpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGV4dCA9PT0gY2xvc2UpIHtcblx0XHRcdFx0XHRcdGFsbEJyYWNlcy5wdXNoKHsgaW5kZXg6IGksIG9wZW46IGZhbHNlLCBlbGVtZW50OiBlbGVtZW50IH0pO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG1hcENsYXNzTmFtZSgnYnJhY2UtY2xvc2UnKSk7XG5cdFx0XHRcdFx0XHRpZiAob3BlblN0YWNrLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRwYWlycy5wdXNoKFtpLCBvcGVuU3RhY2sucG9wKCldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cGFpcnMuZm9yRWFjaChmdW5jdGlvbiAocGFpcikge1xuXHRcdFx0XHR2YXIgcGFpcklkID0gJ3BhaXItJyArIChwYWlySWRDb3VudGVyKyspICsgJy0nO1xuXG5cdFx0XHRcdHZhciBvcGVuaW5nID0gcHVuY3R1YXRpb25bcGFpclswXV07XG5cdFx0XHRcdHZhciBjbG9zaW5nID0gcHVuY3R1YXRpb25bcGFpclsxXV07XG5cblx0XHRcdFx0b3BlbmluZy5pZCA9IHBhaXJJZCArICdvcGVuJztcblx0XHRcdFx0Y2xvc2luZy5pZCA9IHBhaXJJZCArICdjbG9zZSc7XG5cblx0XHRcdFx0W29wZW5pbmcsIGNsb3NpbmddLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlckJyYWNlKTtcblx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBsZWF2ZUJyYWNlKTtcblx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tCcmFjZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHR2YXIgbGV2ZWwgPSAwO1xuXHRcdGFsbEJyYWNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmluZGV4IC0gYi5pbmRleDsgfSk7XG5cdFx0YWxsQnJhY2VzLmZvckVhY2goZnVuY3Rpb24gKGJyYWNlKSB7XG5cdFx0XHRpZiAoYnJhY2Uub3Blbikge1xuXHRcdFx0XHRicmFjZS5lbGVtZW50LmNsYXNzTGlzdC5hZGQobWFwQ2xhc3NOYW1lKCdicmFjZS1sZXZlbC0nICsgKGxldmVsICUgTEVWRUxfV0FSUCArIDEpKSk7XG5cdFx0XHRcdGxldmVsKys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXZlbCA9IE1hdGgubWF4KDAsIGxldmVsIC0gMSk7XG5cdFx0XHRcdGJyYWNlLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChtYXBDbGFzc05hbWUoJ2JyYWNlLWxldmVsLScgKyAobGV2ZWwgJSBMRVZFTF9XQVJQICsgMSkpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKG9iajEsIG9iajIpIHtcblx0XHRmb3IgKHZhciBuYW1lIGluIG9iajIpIHtcblx0XHRcdGlmIChvYmoyLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0XHRcdG9iajFbbmFtZV0gPSBvYmoyW25hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb2JqMTtcblx0fTtcblxuXHRmdW5jdGlvbiBOb3JtYWxpemVXaGl0ZXNwYWNlKGRlZmF1bHRzKSB7XG5cdFx0dGhpcy5kZWZhdWx0cyA9IGFzc2lnbih7fSwgZGVmYXVsdHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9DYW1lbENhc2UodmFsdWUpIHtcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvLShcXHcpL2csIGZ1bmN0aW9uIChtYXRjaCwgZmlyc3RDaGFyKSB7XG5cdFx0XHRyZXR1cm4gZmlyc3RDaGFyLnRvVXBwZXJDYXNlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB0YWJMZW4oc3RyKSB7XG5cdFx0dmFyIHJlcyA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChzdHIuY2hhckNvZGVBdChpKSA9PSAnXFx0Jy5jaGFyQ29kZUF0KDApKSB7XG5cdFx0XHRcdHJlcyArPSAzO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RyLmxlbmd0aCArIHJlcztcblx0fVxuXG5cdE5vcm1hbGl6ZVdoaXRlc3BhY2UucHJvdG90eXBlID0ge1xuXHRcdHNldERlZmF1bHRzOiBmdW5jdGlvbiAoZGVmYXVsdHMpIHtcblx0XHRcdHRoaXMuZGVmYXVsdHMgPSBhc3NpZ24odGhpcy5kZWZhdWx0cywgZGVmYXVsdHMpO1xuXHRcdH0sXG5cdFx0bm9ybWFsaXplOiBmdW5jdGlvbiAoaW5wdXQsIHNldHRpbmdzKSB7XG5cdFx0XHRzZXR0aW5ncyA9IGFzc2lnbih0aGlzLmRlZmF1bHRzLCBzZXR0aW5ncyk7XG5cblx0XHRcdGZvciAodmFyIG5hbWUgaW4gc2V0dGluZ3MpIHtcblx0XHRcdFx0dmFyIG1ldGhvZE5hbWUgPSB0b0NhbWVsQ2FzZShuYW1lKTtcblx0XHRcdFx0aWYgKG5hbWUgIT09ICdub3JtYWxpemUnICYmIG1ldGhvZE5hbWUgIT09ICdzZXREZWZhdWx0cycgJiZcblx0XHRcdFx0XHRzZXR0aW5nc1tuYW1lXSAmJiB0aGlzW21ldGhvZE5hbWVdKSB7XG5cdFx0XHRcdFx0aW5wdXQgPSB0aGlzW21ldGhvZE5hbWVdLmNhbGwodGhpcywgaW5wdXQsIHNldHRpbmdzW25hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaW5wdXQ7XG5cdFx0fSxcblxuXHRcdC8qXG5cdFx0ICogTm9ybWFsaXphdGlvbiBtZXRob2RzXG5cdFx0ICovXG5cdFx0bGVmdFRyaW06IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXHMrLywgJycpO1xuXHRcdH0sXG5cdFx0cmlnaHRUcmltOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXHMrJC8sICcnKTtcblx0XHR9LFxuXHRcdHRhYnNUb1NwYWNlczogZnVuY3Rpb24gKGlucHV0LCBzcGFjZXMpIHtcblx0XHRcdHNwYWNlcyA9IHNwYWNlc3wwIHx8IDQ7XG5cdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZSgvXFx0L2csIG5ldyBBcnJheSgrK3NwYWNlcykuam9pbignICcpKTtcblx0XHR9LFxuXHRcdHNwYWNlc1RvVGFiczogZnVuY3Rpb24gKGlucHV0LCBzcGFjZXMpIHtcblx0XHRcdHNwYWNlcyA9IHNwYWNlc3wwIHx8IDQ7XG5cdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZShSZWdFeHAoJyB7JyArIHNwYWNlcyArICd9JywgJ2cnKSwgJ1xcdCcpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlVHJhaWxpbmc6IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL1xccyo/JC9nbSwgJycpO1xuXHRcdH0sXG5cdFx0Ly8gU3VwcG9ydCBmb3IgZGVwcmVjYXRlZCBwbHVnaW4gcmVtb3ZlLWluaXRpYWwtbGluZS1mZWVkXG5cdFx0cmVtb3ZlSW5pdGlhbExpbmVGZWVkOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKC9eKD86XFxyP1xcbnxcXHIpLywgJycpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlSW5kZW50OiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHZhciBpbmRlbnRzID0gaW5wdXQubWF0Y2goL15bXlxcU1xcblxccl0qKD89XFxTKS9nbSk7XG5cblx0XHRcdGlmICghaW5kZW50cyB8fCAhaW5kZW50c1swXS5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGlucHV0O1xuXHRcdFx0fVxuXG5cdFx0XHRpbmRlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7IH0pO1xuXG5cdFx0XHRpZiAoIWluZGVudHNbMF0ubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBpbnB1dDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoUmVnRXhwKCdeJyArIGluZGVudHNbMF0sICdnbScpLCAnJyk7XG5cdFx0fSxcblx0XHRpbmRlbnQ6IGZ1bmN0aW9uIChpbnB1dCwgdGFicykge1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL15bXlxcU1xcblxccl0qKD89XFxTKS9nbSwgbmV3IEFycmF5KCsrdGFicykuam9pbignXFx0JykgKyAnJCYnKTtcblx0XHR9LFxuXHRcdGJyZWFrTGluZXM6IGZ1bmN0aW9uIChpbnB1dCwgY2hhcmFjdGVycykge1xuXHRcdFx0Y2hhcmFjdGVycyA9IChjaGFyYWN0ZXJzID09PSB0cnVlKSA/IDgwIDogY2hhcmFjdGVyc3wwIHx8IDgwO1xuXG5cdFx0XHR2YXIgbGluZXMgPSBpbnB1dC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmICh0YWJMZW4obGluZXNbaV0pIDw9IGNoYXJhY3RlcnMpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBsaW5lID0gbGluZXNbaV0uc3BsaXQoLyhcXHMrKS9nKTtcblx0XHRcdFx0dmFyIGxlbiA9IDA7XG5cblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0dmFyIHRsID0gdGFiTGVuKGxpbmVbal0pO1xuXHRcdFx0XHRcdGxlbiArPSB0bDtcblx0XHRcdFx0XHRpZiAobGVuID4gY2hhcmFjdGVycykge1xuXHRcdFx0XHRcdFx0bGluZVtqXSA9ICdcXG4nICsgbGluZVtqXTtcblx0XHRcdFx0XHRcdGxlbiA9IHRsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5lc1tpXSA9IGxpbmUuam9pbignJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFN1cHBvcnQgbm9kZSBtb2R1bGVzXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gTm9ybWFsaXplV2hpdGVzcGFjZTtcblx0fVxuXG5cdFByaXNtLnBsdWdpbnMuTm9ybWFsaXplV2hpdGVzcGFjZSA9IG5ldyBOb3JtYWxpemVXaGl0ZXNwYWNlKHtcblx0XHQncmVtb3ZlLXRyYWlsaW5nJzogdHJ1ZSxcblx0XHQncmVtb3ZlLWluZGVudCc6IHRydWUsXG5cdFx0J2xlZnQtdHJpbSc6IHRydWUsXG5cdFx0J3JpZ2h0LXRyaW0nOiB0cnVlLFxuXHRcdC8qJ2JyZWFrLWxpbmVzJzogODAsXG5cdFx0J2luZGVudCc6IDIsXG5cdFx0J3JlbW92ZS1pbml0aWFsLWxpbmUtZmVlZCc6IGZhbHNlLFxuXHRcdCd0YWJzLXRvLXNwYWNlcyc6IDQsXG5cdFx0J3NwYWNlcy10by10YWJzJzogNCovXG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXNhbml0eS1jaGVjaycsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgTm9ybWFsaXplciA9IFByaXNtLnBsdWdpbnMuTm9ybWFsaXplV2hpdGVzcGFjZTtcblxuXHRcdC8vIENoZWNrIHNldHRpbmdzXG5cdFx0aWYgKGVudi5zZXR0aW5ncyAmJiBlbnYuc2V0dGluZ3NbJ3doaXRlc3BhY2Utbm9ybWFsaXphdGlvbiddID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGNsYXNzZXNcblx0XHRpZiAoIVByaXNtLnV0aWwuaXNBY3RpdmUoZW52LmVsZW1lbnQsICd3aGl0ZXNwYWNlLW5vcm1hbGl6YXRpb24nLCB0cnVlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFNpbXBsZSBtb2RlIGlmIHRoZXJlIGlzIG5vIGVudi5lbGVtZW50XG5cdFx0aWYgKCghZW52LmVsZW1lbnQgfHwgIWVudi5lbGVtZW50LnBhcmVudE5vZGUpICYmIGVudi5jb2RlKSB7XG5cdFx0XHRlbnYuY29kZSA9IE5vcm1hbGl6ZXIubm9ybWFsaXplKGVudi5jb2RlLCBlbnYuc2V0dGluZ3MpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE5vcm1hbCBtb2RlXG5cdFx0dmFyIHByZSA9IGVudi5lbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0aWYgKCFlbnYuY29kZSB8fCAhcHJlIHx8IHByZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAncHJlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBjaGlsZHJlbiA9IHByZS5jaGlsZE5vZGVzO1xuXHRcdHZhciBiZWZvcmUgPSAnJztcblx0XHR2YXIgYWZ0ZXIgPSAnJztcblx0XHR2YXIgY29kZUZvdW5kID0gZmFsc2U7XG5cblx0XHQvLyBNb3ZlIHN1cnJvdW5kaW5nIHdoaXRlc3BhY2UgZnJvbSB0aGUgPHByZT4gdGFnIGludG8gdGhlIDxjb2RlPiB0YWdcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG5cdFx0XHR2YXIgbm9kZSA9IGNoaWxkcmVuW2ldO1xuXG5cdFx0XHRpZiAobm9kZSA9PSBlbnYuZWxlbWVudCkge1xuXHRcdFx0XHRjb2RlRm91bmQgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChub2RlLm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG5cdFx0XHRcdGlmIChjb2RlRm91bmQpIHtcblx0XHRcdFx0XHRhZnRlciArPSBub2RlLm5vZGVWYWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRiZWZvcmUgKz0gbm9kZS5ub2RlVmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwcmUucmVtb3ZlQ2hpbGQobm9kZSk7XG5cdFx0XHRcdC0taTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIWVudi5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aCB8fCAhUHJpc20ucGx1Z2lucy5LZWVwTWFya3VwKSB7XG5cdFx0XHRlbnYuY29kZSA9IGJlZm9yZSArIGVudi5jb2RlICsgYWZ0ZXI7XG5cdFx0XHRlbnYuY29kZSA9IE5vcm1hbGl6ZXIubm9ybWFsaXplKGVudi5jb2RlLCBlbnYuc2V0dGluZ3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBQcmVzZXJ2ZSBtYXJrdXAgZm9yIGtlZXAtbWFya3VwIHBsdWdpblxuXHRcdFx0dmFyIGh0bWwgPSBiZWZvcmUgKyBlbnYuZWxlbWVudC5pbm5lckhUTUwgKyBhZnRlcjtcblx0XHRcdGVudi5lbGVtZW50LmlubmVySFRNTCA9IE5vcm1hbGl6ZXIubm9ybWFsaXplKGh0bWwsIGVudi5zZXR0aW5ncyk7XG5cdFx0XHRlbnYuY29kZSA9IGVudi5lbGVtZW50LnRleHRDb250ZW50O1xuXHRcdH1cblx0fSk7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIVByaXNtLnBsdWdpbnMudG9vbGJhcikge1xuXHRcdGNvbnNvbGUud2FybignU2hvdyBMYW5ndWFnZXMgcGx1Z2luIGxvYWRlZCBiZWZvcmUgVG9vbGJhciBwbHVnaW4uJyk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5cdC8vIFRoZSBsYW5ndWFnZXMgbWFwIGlzIGJ1aWx0IGF1dG9tYXRpY2FsbHkgd2l0aCBndWxwXG5cdHZhciBMYW5ndWFnZXMgPSAvKmxhbmd1YWdlc19wbGFjZWhvbGRlclsqL3tcblx0XHRcIm5vbmVcIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJwbGFpblwiOiBcIlBsYWluIHRleHRcIixcblx0XHRcInBsYWludGV4dFwiOiBcIlBsYWluIHRleHRcIixcblx0XHRcInRleHRcIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJ0eHRcIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJodG1sXCI6IFwiSFRNTFwiLFxuXHRcdFwieG1sXCI6IFwiWE1MXCIsXG5cdFx0XCJzdmdcIjogXCJTVkdcIixcblx0XHRcIm1hdGhtbFwiOiBcIk1hdGhNTFwiLFxuXHRcdFwic3NtbFwiOiBcIlNTTUxcIixcblx0XHRcInJzc1wiOiBcIlJTU1wiLFxuXHRcdFwiY3NzXCI6IFwiQ1NTXCIsXG5cdFx0XCJjbGlrZVwiOiBcIkMtbGlrZVwiLFxuXHRcdFwianNcIjogXCJKYXZhU2NyaXB0XCIsXG5cdFx0XCJhYmFwXCI6IFwiQUJBUFwiLFxuXHRcdFwiYWJuZlwiOiBcIkFCTkZcIixcblx0XHRcImFsXCI6IFwiQUxcIixcblx0XHRcImFudGxyNFwiOiBcIkFOVExSNFwiLFxuXHRcdFwiZzRcIjogXCJBTlRMUjRcIixcblx0XHRcImFwYWNoZWNvbmZcIjogXCJBcGFjaGUgQ29uZmlndXJhdGlvblwiLFxuXHRcdFwiYXBsXCI6IFwiQVBMXCIsXG5cdFx0XCJhcWxcIjogXCJBUUxcIixcblx0XHRcImFyZmZcIjogXCJBUkZGXCIsXG5cdFx0XCJhc2NpaWRvY1wiOiBcIkFzY2lpRG9jXCIsXG5cdFx0XCJhZG9jXCI6IFwiQXNjaWlEb2NcIixcblx0XHRcImFzcG5ldFwiOiBcIkFTUC5ORVQgKEMjKVwiLFxuXHRcdFwiYXNtNjUwMlwiOiBcIjY1MDIgQXNzZW1ibHlcIixcblx0XHRcImF1dG9ob3RrZXlcIjogXCJBdXRvSG90a2V5XCIsXG5cdFx0XCJhdXRvaXRcIjogXCJBdXRvSXRcIixcblx0XHRcImF2aXN5bnRoXCI6IFwiQXZpU3ludGhcIixcblx0XHRcImF2c1wiOiBcIkF2aVN5bnRoXCIsXG5cdFx0XCJhdnJvLWlkbFwiOiBcIkF2cm8gSURMXCIsXG5cdFx0XCJhdmRsXCI6IFwiQXZybyBJRExcIixcblx0XHRcImJhc2ljXCI6IFwiQkFTSUNcIixcblx0XHRcImJiY29kZVwiOiBcIkJCY29kZVwiLFxuXHRcdFwiYm5mXCI6IFwiQk5GXCIsXG5cdFx0XCJyYm5mXCI6IFwiUkJORlwiLFxuXHRcdFwiYnNsXCI6IFwiQlNMICgxQzpFbnRlcnByaXNlKVwiLFxuXHRcdFwib3NjcmlwdFwiOiBcIk9uZVNjcmlwdFwiLFxuXHRcdFwiY3NoYXJwXCI6IFwiQyNcIixcblx0XHRcImNzXCI6IFwiQyNcIixcblx0XHRcImRvdG5ldFwiOiBcIkMjXCIsXG5cdFx0XCJjcHBcIjogXCJDKytcIixcblx0XHRcImNmc2NyaXB0XCI6IFwiQ0ZTY3JpcHRcIixcblx0XHRcImNmY1wiOiBcIkNGU2NyaXB0XCIsXG5cdFx0XCJjaWxcIjogXCJDSUxcIixcblx0XHRcImNtYWtlXCI6IFwiQ01ha2VcIixcblx0XHRcImNvYm9sXCI6IFwiQ09CT0xcIixcblx0XHRcImNvZmZlZVwiOiBcIkNvZmZlZVNjcmlwdFwiLFxuXHRcdFwiY29uY1wiOiBcIkNvbmN1cm5hc1wiLFxuXHRcdFwiY3NwXCI6IFwiQ29udGVudC1TZWN1cml0eS1Qb2xpY3lcIixcblx0XHRcImNzcy1leHRyYXNcIjogXCJDU1MgRXh0cmFzXCIsXG5cdFx0XCJjc3ZcIjogXCJDU1ZcIixcblx0XHRcImRhdGF3ZWF2ZVwiOiBcIkRhdGFXZWF2ZVwiLFxuXHRcdFwiZGF4XCI6IFwiREFYXCIsXG5cdFx0XCJkamFuZ29cIjogXCJEamFuZ28vSmluamEyXCIsXG5cdFx0XCJqaW5qYTJcIjogXCJEamFuZ28vSmluamEyXCIsXG5cdFx0XCJkbnMtem9uZS1maWxlXCI6IFwiRE5TIHpvbmUgZmlsZVwiLFxuXHRcdFwiZG5zLXpvbmVcIjogXCJETlMgem9uZSBmaWxlXCIsXG5cdFx0XCJkb2NrZXJmaWxlXCI6IFwiRG9ja2VyXCIsXG5cdFx0XCJkb3RcIjogXCJET1QgKEdyYXBodml6KVwiLFxuXHRcdFwiZ3ZcIjogXCJET1QgKEdyYXBodml6KVwiLFxuXHRcdFwiZWJuZlwiOiBcIkVCTkZcIixcblx0XHRcImVkaXRvcmNvbmZpZ1wiOiBcIkVkaXRvckNvbmZpZ1wiLFxuXHRcdFwiZWpzXCI6IFwiRUpTXCIsXG5cdFx0XCJldGx1YVwiOiBcIkVtYmVkZGVkIEx1YSB0ZW1wbGF0aW5nXCIsXG5cdFx0XCJlcmJcIjogXCJFUkJcIixcblx0XHRcImV4Y2VsLWZvcm11bGFcIjogXCJFeGNlbCBGb3JtdWxhXCIsXG5cdFx0XCJ4bHN4XCI6IFwiRXhjZWwgRm9ybXVsYVwiLFxuXHRcdFwieGxzXCI6IFwiRXhjZWwgRm9ybXVsYVwiLFxuXHRcdFwiZnNoYXJwXCI6IFwiRiNcIixcblx0XHRcImZpcmVzdG9yZS1zZWN1cml0eS1ydWxlc1wiOiBcIkZpcmVzdG9yZSBzZWN1cml0eSBydWxlc1wiLFxuXHRcdFwiZnRsXCI6IFwiRnJlZU1hcmtlciBUZW1wbGF0ZSBMYW5ndWFnZVwiLFxuXHRcdFwiZ21sXCI6IFwiR2FtZU1ha2VyIExhbmd1YWdlXCIsXG5cdFx0XCJnYW1lbWFrZXJsYW5ndWFnZVwiOiBcIkdhbWVNYWtlciBMYW5ndWFnZVwiLFxuXHRcdFwiZ2FwXCI6IFwiR0FQIChDQVMpXCIsXG5cdFx0XCJnY29kZVwiOiBcIkctY29kZVwiLFxuXHRcdFwiZ2RzY3JpcHRcIjogXCJHRFNjcmlwdFwiLFxuXHRcdFwiZ2VkY29tXCI6IFwiR0VEQ09NXCIsXG5cdFx0XCJnbHNsXCI6IFwiR0xTTFwiLFxuXHRcdFwiZ25cIjogXCJHTlwiLFxuXHRcdFwiZ25pXCI6IFwiR05cIixcblx0XHRcImdyYXBocWxcIjogXCJHcmFwaFFMXCIsXG5cdFx0XCJoYnNcIjogXCJIYW5kbGViYXJzXCIsXG5cdFx0XCJoc1wiOiBcIkhhc2tlbGxcIixcblx0XHRcImhjbFwiOiBcIkhDTFwiLFxuXHRcdFwiaGxzbFwiOiBcIkhMU0xcIixcblx0XHRcImh0dHBcIjogXCJIVFRQXCIsXG5cdFx0XCJocGtwXCI6IFwiSFRUUCBQdWJsaWMtS2V5LVBpbnNcIixcblx0XHRcImhzdHNcIjogXCJIVFRQIFN0cmljdC1UcmFuc3BvcnQtU2VjdXJpdHlcIixcblx0XHRcImljaGlnb2phbVwiOiBcIkljaGlnb0phbVwiLFxuXHRcdFwiaWN1LW1lc3NhZ2UtZm9ybWF0XCI6IFwiSUNVIE1lc3NhZ2UgRm9ybWF0XCIsXG5cdFx0XCJpZHJcIjogXCJJZHJpc1wiLFxuXHRcdFwiaWdub3JlXCI6IFwiLmlnbm9yZVwiLFxuXHRcdFwiZ2l0aWdub3JlXCI6IFwiLmdpdGlnbm9yZVwiLFxuXHRcdFwiaGdpZ25vcmVcIjogXCIuaGdpZ25vcmVcIixcblx0XHRcIm5wbWlnbm9yZVwiOiBcIi5ucG1pZ25vcmVcIixcblx0XHRcImluZm9ybTdcIjogXCJJbmZvcm0gN1wiLFxuXHRcdFwiamF2YWRvY1wiOiBcIkphdmFEb2NcIixcblx0XHRcImphdmFkb2NsaWtlXCI6IFwiSmF2YURvYy1saWtlXCIsXG5cdFx0XCJqYXZhc3RhY2t0cmFjZVwiOiBcIkphdmEgc3RhY2sgdHJhY2VcIixcblx0XHRcImpxXCI6IFwiSlFcIixcblx0XHRcImpzZG9jXCI6IFwiSlNEb2NcIixcblx0XHRcImpzLWV4dHJhc1wiOiBcIkpTIEV4dHJhc1wiLFxuXHRcdFwianNvblwiOiBcIkpTT05cIixcblx0XHRcIndlYm1hbmlmZXN0XCI6IFwiV2ViIEFwcCBNYW5pZmVzdFwiLFxuXHRcdFwianNvbjVcIjogXCJKU09ONVwiLFxuXHRcdFwianNvbnBcIjogXCJKU09OUFwiLFxuXHRcdFwianNzdGFja3RyYWNlXCI6IFwiSlMgc3RhY2sgdHJhY2VcIixcblx0XHRcImpzLXRlbXBsYXRlc1wiOiBcIkpTIFRlbXBsYXRlc1wiLFxuXHRcdFwia3RzXCI6IFwiS290bGluIFNjcmlwdFwiLFxuXHRcdFwia3RcIjogXCJLb3RsaW5cIixcblx0XHRcImt1bWlyXCI6IFwiS3VNaXIgKNCa0YPQnNC40YApXCIsXG5cdFx0XCJrdW1cIjogXCJLdU1pciAo0JrRg9Cc0LjRgClcIixcblx0XHRcImxhdGV4XCI6IFwiTGFUZVhcIixcblx0XHRcInRleFwiOiBcIlRlWFwiLFxuXHRcdFwiY29udGV4dFwiOiBcIkNvblRlWHRcIixcblx0XHRcImxpbHlwb25kXCI6IFwiTGlseVBvbmRcIixcblx0XHRcImx5XCI6IFwiTGlseVBvbmRcIixcblx0XHRcImVtYWNzXCI6IFwiTGlzcFwiLFxuXHRcdFwiZWxpc3BcIjogXCJMaXNwXCIsXG5cdFx0XCJlbWFjcy1saXNwXCI6IFwiTGlzcFwiLFxuXHRcdFwibGx2bVwiOiBcIkxMVk0gSVJcIixcblx0XHRcImxvZ1wiOiBcIkxvZyBmaWxlXCIsXG5cdFx0XCJsb2xjb2RlXCI6IFwiTE9MQ09ERVwiLFxuXHRcdFwibWFnbWFcIjogXCJNYWdtYSAoQ0FTKVwiLFxuXHRcdFwibWRcIjogXCJNYXJrZG93blwiLFxuXHRcdFwibWFya3VwLXRlbXBsYXRpbmdcIjogXCJNYXJrdXAgdGVtcGxhdGluZ1wiLFxuXHRcdFwibWF0bGFiXCI6IFwiTUFUTEFCXCIsXG5cdFx0XCJtYXhzY3JpcHRcIjogXCJNQVhTY3JpcHRcIixcblx0XHRcIm1lbFwiOiBcIk1FTFwiLFxuXHRcdFwibW9uZ29kYlwiOiBcIk1vbmdvREJcIixcblx0XHRcIm1vb25cIjogXCJNb29uU2NyaXB0XCIsXG5cdFx0XCJuMXFsXCI6IFwiTjFRTFwiLFxuXHRcdFwibjRqc1wiOiBcIk40SlNcIixcblx0XHRcIm40anNkXCI6IFwiTjRKU1wiLFxuXHRcdFwibmFuZDJ0ZXRyaXMtaGRsXCI6IFwiTmFuZCBUbyBUZXRyaXMgSERMXCIsXG5cdFx0XCJuYW5pc2NyaXB0XCI6IFwiTmFuaW5vdmVsIFNjcmlwdFwiLFxuXHRcdFwibmFuaVwiOiBcIk5hbmlub3ZlbCBTY3JpcHRcIixcblx0XHRcIm5hc21cIjogXCJOQVNNXCIsXG5cdFx0XCJuZW9uXCI6IFwiTkVPTlwiLFxuXHRcdFwibmdpbnhcIjogXCJuZ2lueFwiLFxuXHRcdFwibnNpc1wiOiBcIk5TSVNcIixcblx0XHRcIm9iamVjdGl2ZWNcIjogXCJPYmplY3RpdmUtQ1wiLFxuXHRcdFwib2JqY1wiOiBcIk9iamVjdGl2ZS1DXCIsXG5cdFx0XCJvY2FtbFwiOiBcIk9DYW1sXCIsXG5cdFx0XCJvcGVuY2xcIjogXCJPcGVuQ0xcIixcblx0XHRcIm9wZW5xYXNtXCI6IFwiT3BlblFhc21cIixcblx0XHRcInFhc21cIjogXCJPcGVuUWFzbVwiLFxuXHRcdFwicGFyaWdwXCI6IFwiUEFSSS9HUFwiLFxuXHRcdFwib2JqZWN0cGFzY2FsXCI6IFwiT2JqZWN0IFBhc2NhbFwiLFxuXHRcdFwicHNsXCI6IFwiUEFUUk9MIFNjcmlwdGluZyBMYW5ndWFnZVwiLFxuXHRcdFwicGNheGlzXCI6IFwiUEMtQXhpc1wiLFxuXHRcdFwicHhcIjogXCJQQy1BeGlzXCIsXG5cdFx0XCJwZW9wbGVjb2RlXCI6IFwiUGVvcGxlQ29kZVwiLFxuXHRcdFwicGNvZGVcIjogXCJQZW9wbGVDb2RlXCIsXG5cdFx0XCJwaHBcIjogXCJQSFBcIixcblx0XHRcInBocGRvY1wiOiBcIlBIUERvY1wiLFxuXHRcdFwicGhwLWV4dHJhc1wiOiBcIlBIUCBFeHRyYXNcIixcblx0XHRcInBsc3FsXCI6IFwiUEwvU1FMXCIsXG5cdFx0XCJwb3dlcnF1ZXJ5XCI6IFwiUG93ZXJRdWVyeVwiLFxuXHRcdFwicHFcIjogXCJQb3dlclF1ZXJ5XCIsXG5cdFx0XCJtc2NyaXB0XCI6IFwiUG93ZXJRdWVyeVwiLFxuXHRcdFwicG93ZXJzaGVsbFwiOiBcIlBvd2VyU2hlbGxcIixcblx0XHRcInByb21xbFwiOiBcIlByb21RTFwiLFxuXHRcdFwicHJvcGVydGllc1wiOiBcIi5wcm9wZXJ0aWVzXCIsXG5cdFx0XCJwcm90b2J1ZlwiOiBcIlByb3RvY29sIEJ1ZmZlcnNcIixcblx0XHRcInB1cmViYXNpY1wiOiBcIlB1cmVCYXNpY1wiLFxuXHRcdFwicGJmYXNtXCI6IFwiUHVyZUJhc2ljXCIsXG5cdFx0XCJwdXJzXCI6IFwiUHVyZVNjcmlwdFwiLFxuXHRcdFwicHlcIjogXCJQeXRob25cIixcblx0XHRcInFzaGFycFwiOiBcIlEjXCIsXG5cdFx0XCJxc1wiOiBcIlEjXCIsXG5cdFx0XCJxXCI6IFwiUSAoa2RiKyBkYXRhYmFzZSlcIixcblx0XHRcInFtbFwiOiBcIlFNTFwiLFxuXHRcdFwicmt0XCI6IFwiUmFja2V0XCIsXG5cdFx0XCJjc2h0bWxcIjogXCJSYXpvciBDI1wiLFxuXHRcdFwicmF6b3JcIjogXCJSYXpvciBDI1wiLFxuXHRcdFwianN4XCI6IFwiUmVhY3QgSlNYXCIsXG5cdFx0XCJ0c3hcIjogXCJSZWFjdCBUU1hcIixcblx0XHRcInJlbnB5XCI6IFwiUmVuJ3B5XCIsXG5cdFx0XCJycHlcIjogXCJSZW4ncHlcIixcblx0XHRcInJlc3RcIjogXCJyZVNUIChyZVN0cnVjdHVyZWRUZXh0KVwiLFxuXHRcdFwicm9ib3RmcmFtZXdvcmtcIjogXCJSb2JvdCBGcmFtZXdvcmtcIixcblx0XHRcInJvYm90XCI6IFwiUm9ib3QgRnJhbWV3b3JrXCIsXG5cdFx0XCJyYlwiOiBcIlJ1YnlcIixcblx0XHRcInNhc1wiOiBcIlNBU1wiLFxuXHRcdFwic2Fzc1wiOiBcIlNhc3MgKFNhc3MpXCIsXG5cdFx0XCJzY3NzXCI6IFwiU2FzcyAoU2NzcylcIixcblx0XHRcInNoZWxsLXNlc3Npb25cIjogXCJTaGVsbCBzZXNzaW9uXCIsXG5cdFx0XCJzaC1zZXNzaW9uXCI6IFwiU2hlbGwgc2Vzc2lvblwiLFxuXHRcdFwic2hlbGxzZXNzaW9uXCI6IFwiU2hlbGwgc2Vzc2lvblwiLFxuXHRcdFwic21sXCI6IFwiU01MXCIsXG5cdFx0XCJzbWxualwiOiBcIlNNTC9OSlwiLFxuXHRcdFwic29saWRpdHlcIjogXCJTb2xpZGl0eSAoRXRoZXJldW0pXCIsXG5cdFx0XCJzb2xcIjogXCJTb2xpZGl0eSAoRXRoZXJldW0pXCIsXG5cdFx0XCJzb2x1dGlvbi1maWxlXCI6IFwiU29sdXRpb24gZmlsZVwiLFxuXHRcdFwic2xuXCI6IFwiU29sdXRpb24gZmlsZVwiLFxuXHRcdFwic295XCI6IFwiU295IChDbG9zdXJlIFRlbXBsYXRlKVwiLFxuXHRcdFwic3BhcnFsXCI6IFwiU1BBUlFMXCIsXG5cdFx0XCJycVwiOiBcIlNQQVJRTFwiLFxuXHRcdFwic3BsdW5rLXNwbFwiOiBcIlNwbHVuayBTUExcIixcblx0XHRcInNxZlwiOiBcIlNRRjogU3RhdHVzIFF1byBGdW5jdGlvbiAoQXJtYSAzKVwiLFxuXHRcdFwic3FsXCI6IFwiU1FMXCIsXG5cdFx0XCJpZWNzdFwiOiBcIlN0cnVjdHVyZWQgVGV4dCAoSUVDIDYxMTMxLTMpXCIsXG5cdFx0XCJzeXN0ZW1kXCI6IFwiU3lzdGVtZCBjb25maWd1cmF0aW9uIGZpbGVcIixcblx0XHRcInQ0LXRlbXBsYXRpbmdcIjogXCJUNCB0ZW1wbGF0aW5nXCIsXG5cdFx0XCJ0NC1jc1wiOiBcIlQ0IFRleHQgVGVtcGxhdGVzIChDIylcIixcblx0XHRcInQ0XCI6IFwiVDQgVGV4dCBUZW1wbGF0ZXMgKEMjKVwiLFxuXHRcdFwidDQtdmJcIjogXCJUNCBUZXh0IFRlbXBsYXRlcyAoVkIpXCIsXG5cdFx0XCJ0YXBcIjogXCJUQVBcIixcblx0XHRcInR0MlwiOiBcIlRlbXBsYXRlIFRvb2xraXQgMlwiLFxuXHRcdFwidG9tbFwiOiBcIlRPTUxcIixcblx0XHRcInRyaWdcIjogXCJUcmlHXCIsXG5cdFx0XCJ0c1wiOiBcIlR5cGVTY3JpcHRcIixcblx0XHRcInRzY29uZmlnXCI6IFwiVFNDb25maWdcIixcblx0XHRcInVzY3JpcHRcIjogXCJVbnJlYWxTY3JpcHRcIixcblx0XHRcInVjXCI6IFwiVW5yZWFsU2NyaXB0XCIsXG5cdFx0XCJ1cmlcIjogXCJVUklcIixcblx0XHRcInVybFwiOiBcIlVSTFwiLFxuXHRcdFwidmJuZXRcIjogXCJWQi5OZXRcIixcblx0XHRcInZoZGxcIjogXCJWSERMXCIsXG5cdFx0XCJ2aW1cIjogXCJ2aW1cIixcblx0XHRcInZpc3VhbC1iYXNpY1wiOiBcIlZpc3VhbCBCYXNpY1wiLFxuXHRcdFwidmJhXCI6IFwiVkJBXCIsXG5cdFx0XCJ2YlwiOiBcIlZpc3VhbCBCYXNpY1wiLFxuXHRcdFwid2FzbVwiOiBcIldlYkFzc2VtYmx5XCIsXG5cdFx0XCJ3aWtpXCI6IFwiV2lraSBtYXJrdXBcIixcblx0XHRcIndvbGZyYW1cIjogXCJXb2xmcmFtIGxhbmd1YWdlXCIsXG5cdFx0XCJuYlwiOiBcIk1hdGhlbWF0aWNhIE5vdGVib29rXCIsXG5cdFx0XCJ3bFwiOiBcIldvbGZyYW0gbGFuZ3VhZ2VcIixcblx0XHRcInhlb3JhY3ViZVwiOiBcIlhlb3JhQ3ViZVwiLFxuXHRcdFwieG1sLWRvY1wiOiBcIlhNTCBkb2MgKC5uZXQpXCIsXG5cdFx0XCJ4b2pvXCI6IFwiWG9qbyAoUkVBTGJhc2ljKVwiLFxuXHRcdFwieHF1ZXJ5XCI6IFwiWFF1ZXJ5XCIsXG5cdFx0XCJ5YW1sXCI6IFwiWUFNTFwiLFxuXHRcdFwieW1sXCI6IFwiWUFNTFwiLFxuXHRcdFwieWFuZ1wiOiBcIllBTkdcIlxuXHR9LypdKi87XG5cblx0LyogZXNsaW50LWVuYWJsZSAqL1xuXG5cdFByaXNtLnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbignc2hvdy1sYW5ndWFnZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgcHJlID0gZW52LmVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHRpZiAoIXByZSB8fCAhL3ByZS9pLnRlc3QocHJlLm5vZGVOYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFRyaWVzIHRvIGd1ZXNzIHRoZSBuYW1lIG9mIGEgbGFuZ3VhZ2UgZ2l2ZW4gaXRzIGlkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBsYW5ndWFnZSBpZC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGd1ZXNzVGl0bGUoaWQpIHtcblx0XHRcdGlmICghaWQpIHtcblx0XHRcdFx0cmV0dXJuIGlkO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChpZC5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIGlkLnN1YnN0cmluZygxKSkucmVwbGFjZSgvcyg/PWNyaXB0KS8sICdTJyk7XG5cdFx0fVxuXG5cdFx0dmFyIGxhbmd1YWdlID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1sYW5ndWFnZScpIHx8IExhbmd1YWdlc1tlbnYubGFuZ3VhZ2VdIHx8IGd1ZXNzVGl0bGUoZW52Lmxhbmd1YWdlKTtcblxuXHRcdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IGxhbmd1YWdlO1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH0pO1xuXG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHR2YXIgbWFwID0ge307XG5cdHZhciBub29wID0gZnVuY3Rpb24gKCkge307XG5cblx0UHJpc20ucGx1Z2lucy50b29sYmFyID0ge307XG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIEJ1dHRvbk9wdGlvbnNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHRleHQgVGhlIHRleHQgZGlzcGxheWVkLlxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gW3VybF0gVGhlIFVSTCBvZiB0aGUgbGluayB3aGljaCB3aWxsIGJlIGNyZWF0ZWQuXG5cdCAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IFtvbkNsaWNrXSBUaGUgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBgY2xpY2tgIGV2ZW50IG9mIHRoZSBjcmVhdGVkIGJ1dHRvbi5cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFtjbGFzc05hbWVdIFRoZSBjbGFzcyBhdHRyaWJ1dGUgdG8gaW5jbHVkZSB3aXRoIGVsZW1lbnQuXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGJ1dHRvbiBjYWxsYmFjayB3aXRoIHRoZSB0b29sYmFyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCAqIEBwYXJhbSB7QnV0dG9uT3B0aW9uc3xGdW5jdGlvbn0gb3B0c1xuXHQgKi9cblx0dmFyIHJlZ2lzdGVyQnV0dG9uID0gUHJpc20ucGx1Z2lucy50b29sYmFyLnJlZ2lzdGVyQnV0dG9uID0gZnVuY3Rpb24gKGtleSwgb3B0cykge1xuXHRcdHZhciBjYWxsYmFjaztcblxuXHRcdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y2FsbGJhY2sgPSBvcHRzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uIChlbnYpIHtcblx0XHRcdFx0dmFyIGVsZW1lbnQ7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBvcHRzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRcdFx0ZWxlbWVudC50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdG9wdHMub25DbGljay5jYWxsKHRoaXMsIGVudik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9wdHMudXJsID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdFx0ZWxlbWVudC5ocmVmID0gb3B0cy51cmw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChvcHRzLmNsYXNzTmFtZSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcHRzLmNsYXNzTmFtZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gb3B0cy50ZXh0O1xuXG5cdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAoa2V5IGluIG1hcCkge1xuXHRcdFx0Y29uc29sZS53YXJuKCdUaGVyZSBpcyBhIGJ1dHRvbiB3aXRoIHRoZSBrZXkgXCInICsga2V5ICsgJ1wiIHJlZ2lzdGVyZWQgYWxyZWFkeS4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjYWxsYmFja3MucHVzaChtYXBba2V5XSA9IGNhbGxiYWNrKTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgY2FsbGJhY2sgb3JkZXIgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZ1tdIHwgdW5kZWZpbmVkfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0T3JkZXIoZWxlbWVudCkge1xuXHRcdHdoaWxlIChlbGVtZW50KSB7XG5cdFx0XHR2YXIgb3JkZXIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10b29sYmFyLW9yZGVyJyk7XG5cdFx0XHRpZiAob3JkZXIgIT0gbnVsbCkge1xuXHRcdFx0XHRvcmRlciA9IG9yZGVyLnRyaW0oKTtcblx0XHRcdFx0aWYgKG9yZGVyLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBvcmRlci5zcGxpdCgvXFxzKixcXHMqL2cpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUG9zdC1oaWdobGlnaHQgUHJpc20gaG9vayBjYWxsYmFjay5cblx0ICpcblx0ICogQHBhcmFtIGVudlxuXHQgKi9cblx0dmFyIGhvb2sgPSBQcmlzbS5wbHVnaW5zLnRvb2xiYXIuaG9vayA9IGZ1bmN0aW9uIChlbnYpIHtcblx0XHQvLyBDaGVjayBpZiBpbmxpbmUgb3IgYWN0dWFsIGNvZGUgYmxvY2sgKGNyZWRpdCB0byBsaW5lLW51bWJlcnMgcGx1Z2luKVxuXHRcdHZhciBwcmUgPSBlbnYuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQXV0b2xvYWRlciByZWhpZ2hsaWdodHMsIHNvIG9ubHkgZG8gdGhpcyBvbmNlLlxuXHRcdGlmIChwcmUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvZGUtdG9vbGJhcicpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIHdyYXBwZXIgZm9yIDxwcmU+IHRvIHByZXZlbnQgc2Nyb2xsaW5nIHRvb2xiYXIgd2l0aCBjb250ZW50XG5cdFx0dmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvZGUtdG9vbGJhcicpO1xuXHRcdHByZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBwcmUpO1xuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJlKTtcblxuXHRcdC8vIFNldHVwIHRoZSB0b29sYmFyXG5cdFx0dmFyIHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0b29sYmFyLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXInKTtcblxuXHRcdC8vIG9yZGVyIGNhbGxiYWNrc1xuXHRcdHZhciBlbGVtZW50Q2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuXHRcdHZhciBvcmRlciA9IGdldE9yZGVyKGVudi5lbGVtZW50KTtcblx0XHRpZiAob3JkZXIpIHtcblx0XHRcdGVsZW1lbnRDYWxsYmFja3MgPSBvcmRlci5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRyZXR1cm4gbWFwW2tleV0gfHwgbm9vcDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGVsZW1lbnRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBlbGVtZW50ID0gY2FsbGJhY2soZW52KTtcblxuXHRcdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgndG9vbGJhci1pdGVtJyk7XG5cblx0XHRcdGl0ZW0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHR0b29sYmFyLmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQWRkIG91ciB0b29sYmFyIHRvIHRoZSBjdXJyZW50bHkgY3JlYXRlZCB3cmFwcGVyIG9mIDxwcmU+IHRhZ1xuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQodG9vbGJhcik7XG5cdH07XG5cblx0cmVnaXN0ZXJCdXR0b24oJ2xhYmVsJywgZnVuY3Rpb24gKGVudikge1xuXHRcdHZhciBwcmUgPSBlbnYuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLWxhYmVsJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZWxlbWVudDsgdmFyIHRlbXBsYXRlO1xuXHRcdHZhciB0ZXh0ID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbCcpO1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBBbnkgbm9ybWFsIHRleHQgd2lsbCBibG93IHVwIHRoaXMgc2VsZWN0b3IuXG5cdFx0XHR0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlIycgKyB0ZXh0KTtcblx0XHR9IGNhdGNoIChlKSB7IC8qIG5vb3AgKi8gfVxuXG5cdFx0aWYgKHRlbXBsYXRlKSB7XG5cdFx0XHRlbGVtZW50ID0gdGVtcGxhdGUuY29udGVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdXJsJykpIHtcblx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0ZWxlbWVudC5ocmVmID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9KTtcblxuXHQvKipcblx0ICogUmVnaXN0ZXIgdGhlIHRvb2xiYXIgd2l0aCBQcmlzbS5cblx0ICovXG5cdFByaXNtLmhvb2tzLmFkZCgnY29tcGxldGUnLCBob29rKTtcbn0oKSk7XG4iLCJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY29yZS5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBsaWI9XCJXZWJXb3JrZXJcIi8+XG5cbnZhciBfc2VsZiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0PyB3aW5kb3cgICAvLyBpZiBpbiBicm93c2VyXG5cdDogKFxuXHRcdCh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSlcblx0XHRcdD8gc2VsZiAvLyBpZiBpbiB3b3JrZXJcblx0XHRcdDoge30gICAvLyBpZiBpbiBub2RlIGpzXG5cdCk7XG5cbi8qKlxuICogUHJpc206IExpZ2h0d2VpZ2h0LCByb2J1c3QsIGVsZWdhbnQgc3ludGF4IGhpZ2hsaWdodGluZ1xuICpcbiAqIEBsaWNlbnNlIE1JVCA8aHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQ+XG4gKiBAYXV0aG9yIExlYSBWZXJvdSA8aHR0cHM6Ly9sZWEudmVyb3UubWU+XG4gKiBAbmFtZXNwYWNlXG4gKiBAcHVibGljXG4gKi9cbnZhciBQcmlzbSA9IChmdW5jdGlvbiAoX3NlbGYpIHtcblxuXHQvLyBQcml2YXRlIGhlbHBlciB2YXJzXG5cdHZhciBsYW5nID0gL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2k7XG5cdHZhciB1bmlxdWVJZCA9IDA7XG5cblx0Ly8gVGhlIGdyYW1tYXIgb2JqZWN0IGZvciBwbGFpbnRleHRcblx0dmFyIHBsYWluVGV4dEdyYW1tYXIgPSB7fTtcblxuXG5cdHZhciBfID0ge1xuXHRcdC8qKlxuXHRcdCAqIEJ5IGRlZmF1bHQsIFByaXNtIHdpbGwgYXR0ZW1wdCB0byBoaWdobGlnaHQgYWxsIGNvZGUgZWxlbWVudHMgKGJ5IGNhbGxpbmcge0BsaW5rIFByaXNtLmhpZ2hsaWdodEFsbH0pIG9uIHRoZVxuXHRcdCAqIGN1cnJlbnQgcGFnZSBhZnRlciB0aGUgcGFnZSBmaW5pc2hlZCBsb2FkaW5nLiBUaGlzIG1pZ2h0IGJlIGEgcHJvYmxlbSBpZiBlLmcuIHlvdSB3YW50ZWQgdG8gYXN5bmNocm9ub3VzbHkgbG9hZFxuXHRcdCAqIGFkZGl0aW9uYWwgbGFuZ3VhZ2VzIG9yIHBsdWdpbnMgeW91cnNlbGYuXG5cdFx0ICpcblx0XHQgKiBCeSBzZXR0aW5nIHRoaXMgdmFsdWUgdG8gYHRydWVgLCBQcmlzbSB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IGhpZ2hsaWdodCBhbGwgY29kZSBlbGVtZW50cyBvbiB0aGUgcGFnZS5cblx0XHQgKlxuXHRcdCAqIFlvdSBvYnZpb3VzbHkgaGF2ZSB0byBjaGFuZ2UgdGhpcyB2YWx1ZSBiZWZvcmUgdGhlIGF1dG9tYXRpYyBoaWdobGlnaHRpbmcgc3RhcnRlZC4gVG8gZG8gdGhpcywgeW91IGNhbiBhZGQgYW5cblx0XHQgKiBlbXB0eSBQcmlzbSBvYmplY3QgaW50byB0aGUgZ2xvYmFsIHNjb3BlIGJlZm9yZSBsb2FkaW5nIHRoZSBQcmlzbSBzY3JpcHQgbGlrZSB0aGlzOlxuXHRcdCAqXG5cdFx0ICogYGBganNcblx0XHQgKiB3aW5kb3cuUHJpc20gPSB3aW5kb3cuUHJpc20gfHwge307XG5cdFx0ICogUHJpc20ubWFudWFsID0gdHJ1ZTtcblx0XHQgKiAvLyBhZGQgYSBuZXcgPHNjcmlwdD4gdG8gbG9hZCBQcmlzbSdzIHNjcmlwdFxuXHRcdCAqIGBgYFxuXHRcdCAqXG5cdFx0ICogQGRlZmF1bHQgZmFsc2Vcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0bWFudWFsOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5tYW51YWwsXG5cdFx0ZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIsXG5cblx0XHQvKipcblx0XHQgKiBBIG5hbWVzcGFjZSBmb3IgdXRpbGl0eSBtZXRob2RzLlxuXHRcdCAqXG5cdFx0ICogQWxsIGZ1bmN0aW9uIGluIHRoaXMgbmFtZXNwYWNlIHRoYXQgYXJlIG5vdCBleHBsaWNpdGx5IG1hcmtlZCBhcyBfcHVibGljXyBhcmUgZm9yIF9faW50ZXJuYWwgdXNlIG9ubHlfXyBhbmQgbWF5XG5cdFx0ICogY2hhbmdlIG9yIGRpc2FwcGVhciBhdCBhbnkgdGltZS5cblx0XHQgKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKi9cblx0XHR1dGlsOiB7XG5cdFx0XHRlbmNvZGU6IGZ1bmN0aW9uIGVuY29kZSh0b2tlbnMpIHtcblx0XHRcdFx0aWYgKHRva2VucyBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBUb2tlbih0b2tlbnMudHlwZSwgZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRva2VucykpIHtcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW5zLm1hcChlbmNvZGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0b2tlbnMucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvXFx1MDBhMC9nLCAnICcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHR5cGUgb2YgdGhlIGdpdmVuIHZhbHVlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7YW55fSBvXG5cdFx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIHR5cGUobnVsbCkgICAgICA9PT0gJ051bGwnXG5cdFx0XHQgKiB0eXBlKHVuZGVmaW5lZCkgPT09ICdVbmRlZmluZWQnXG5cdFx0XHQgKiB0eXBlKDEyMykgICAgICAgPT09ICdOdW1iZXInXG5cdFx0XHQgKiB0eXBlKCdmb28nKSAgICAgPT09ICdTdHJpbmcnXG5cdFx0XHQgKiB0eXBlKHRydWUpICAgICAgPT09ICdCb29sZWFuJ1xuXHRcdFx0ICogdHlwZShbMSwgMl0pICAgID09PSAnQXJyYXknXG5cdFx0XHQgKiB0eXBlKHt9KSAgICAgICAgPT09ICdPYmplY3QnXG5cdFx0XHQgKiB0eXBlKFN0cmluZykgICAgPT09ICdGdW5jdGlvbidcblx0XHRcdCAqIHR5cGUoL2FiYysvKSAgICA9PT0gJ1JlZ0V4cCdcblx0XHRcdCAqL1xuXHRcdFx0dHlwZTogZnVuY3Rpb24gKG8pIHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgYSB1bmlxdWUgbnVtYmVyIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LiBMYXRlciBjYWxscyB3aWxsIHN0aWxsIHJldHVybiB0aGUgc2FtZSBudW1iZXIuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IG9ialxuXHRcdFx0ICogQHJldHVybnMge251bWJlcn1cblx0XHRcdCAqL1xuXHRcdFx0b2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdFx0aWYgKCFvYmpbJ19faWQnXSkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdfX2lkJywgeyB2YWx1ZTogKyt1bmlxdWVJZCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb2JqWydfX2lkJ107XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgYSBkZWVwIGNsb25lIG9mIHRoZSBnaXZlbiBvYmplY3QuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIG1haW4gaW50ZW5kZWQgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gY2xvbmUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtUfSBvXG5cdFx0XHQgKiBAcGFyYW0ge1JlY29yZDxudW1iZXIsIGFueT59IFt2aXNpdGVkXVxuXHRcdFx0ICogQHJldHVybnMge1R9XG5cdFx0XHQgKiBAdGVtcGxhdGUgVFxuXHRcdFx0ICovXG5cdFx0XHRjbG9uZTogZnVuY3Rpb24gZGVlcENsb25lKG8sIHZpc2l0ZWQpIHtcblx0XHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdFx0dmFyIGNsb25lOyB2YXIgaWQ7XG5cdFx0XHRcdHN3aXRjaCAoXy51dGlsLnR5cGUobykpIHtcblx0XHRcdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0XHRpZiAodmlzaXRlZFtpZF0pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2xvbmUgPSAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIGFueT59ICovICh7fSk7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xvbmVba2V5XSA9IGRlZXBDbG9uZShvW2tleV0sIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKGNsb25lKTtcblxuXHRcdFx0XHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2aXNpdGVkW2lkXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0XHQoLyoqIEB0eXBlIHtBcnJheX0gKi8oLyoqIEB0eXBlIHthbnl9ICovKG8pKSkuZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuXHRcdFx0XHRcdFx0XHRjbG9uZVtpXSA9IGRlZXBDbG9uZSh2LCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovIChjbG9uZSk7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB0aGUgUHJpc20gbGFuZ3VhZ2Ugb2YgdGhlIGdpdmVuIGVsZW1lbnQgc2V0IGJ5IGEgYGxhbmd1YWdlLXh4eHhgIG9yIGBsYW5nLXh4eHhgIGNsYXNzLlxuXHRcdFx0ICpcblx0XHRcdCAqIElmIG5vIGxhbmd1YWdlIGlzIHNldCBmb3IgdGhlIGVsZW1lbnQgb3IgdGhlIGVsZW1lbnQgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCBgbm9uZWAgd2lsbCBiZSByZXR1cm5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0XHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0XHQgKi9cblx0XHRcdGdldExhbmd1YWdlOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0XHR3aGlsZSAoZWxlbWVudCAmJiAhbGFuZy50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGVsZW1lbnQuY2xhc3NOYW1lLm1hdGNoKGxhbmcpIHx8IFssICdub25lJ10pWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICdub25lJztcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB0aGUgc2NyaXB0IGVsZW1lbnQgdGhhdCBpcyBjdXJyZW50bHkgZXhlY3V0aW5nLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgZG9lcyBfX25vdF9fIHdvcmsgZm9yIGxpbmUgc2NyaXB0IGVsZW1lbnQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHJldHVybnMge0hUTUxTY3JpcHRFbGVtZW50IHwgbnVsbH1cblx0XHRcdCAqL1xuXHRcdFx0Y3VycmVudFNjcmlwdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgnY3VycmVudFNjcmlwdCcgaW4gZG9jdW1lbnQgJiYgMSA8IDIgLyogaGFjayB0byB0cmlwIFRTJyBmbG93IGFuYWx5c2lzICovKSB7XG5cdFx0XHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJRTExIHdvcmthcm91bmRcblx0XHRcdFx0Ly8gd2UnbGwgZ2V0IHRoZSBzcmMgb2YgdGhlIGN1cnJlbnQgc2NyaXB0IGJ5IHBhcnNpbmcgSUUxMSdzIGVycm9yIHN0YWNrIHRyYWNlXG5cdFx0XHRcdC8vIHRoaXMgd2lsbCBub3Qgd29yayBmb3IgaW5saW5lIHNjcmlwdHNcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHQvLyBHZXQgZmlsZSBzcmMgdXJsIGZyb20gc3RhY2suIFNwZWNpZmljYWxseSB3b3JrcyB3aXRoIHRoZSBmb3JtYXQgb2Ygc3RhY2sgdHJhY2VzIGluIElFLlxuXHRcdFx0XHRcdC8vIEEgc3RhY2sgd2lsbCBsb29rIGxpa2UgdGhpczpcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIEVycm9yXG5cdFx0XHRcdFx0Ly8gICAgYXQgXy51dGlsLmN1cnJlbnRTY3JpcHQgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjExOTo1KVxuXHRcdFx0XHRcdC8vICAgIGF0IEdsb2JhbCBjb2RlIChodHRwOi8vbG9jYWxob3N0L2NvbXBvbmVudHMvcHJpc20tY29yZS5qczo2MDY6MSlcblxuXHRcdFx0XHRcdHZhciBzcmMgPSAoL2F0IFteKFxcclxcbl0qXFwoKC4qKTpbXjpdKzpbXjpdK1xcKSQvaS5leGVjKGVyci5zdGFjaykgfHwgW10pWzFdO1xuXHRcdFx0XHRcdGlmIChzcmMpIHtcblx0XHRcdFx0XHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiBzY3JpcHRzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChzY3JpcHRzW2ldLnNyYyA9PSBzcmMpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2NyaXB0c1tpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHdoZXRoZXIgYSBnaXZlbiBjbGFzcyBpcyBhY3RpdmUgZm9yIGBlbGVtZW50YC5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGUgY2xhc3MgY2FuIGJlIGFjdGl2YXRlZCBpZiBgZWxlbWVudGAgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBnaXZlbiBjbGFzcyBhbmQgaXQgY2FuIGJlIGRlYWN0aXZhdGVkXG5cdFx0XHQgKiBpZiBgZWxlbWVudGAgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIGdpdmVuIGNsYXNzLiBUaGUgX25lZ2F0ZWQgdmVyc2lvbl8gb2YgdGhlXG5cdFx0XHQgKiBnaXZlbiBjbGFzcyBpcyBqdXN0IHRoZSBnaXZlbiBjbGFzcyB3aXRoIGEgYG5vLWAgcHJlZml4LlxuXHRcdFx0ICpcblx0XHRcdCAqIFdoZXRoZXIgdGhlIGNsYXNzIGlzIGFjdGl2ZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBjbG9zZXN0IGFuY2VzdG9yIG9mIGBlbGVtZW50YCAod2hlcmUgYGVsZW1lbnRgIGl0c2VsZiBpc1xuXHRcdFx0ICogY2xvc2VzdCBhbmNlc3RvcikgdGhhdCBoYXMgdGhlIGdpdmVuIGNsYXNzIG9yIHRoZSBuZWdhdGVkIHZlcnNpb24gb2YgaXQuIElmIG5laXRoZXIgYGVsZW1lbnRgIG5vciBhbnkgb2YgaXRzXG5cdFx0XHQgKiBhbmNlc3RvcnMgaGF2ZSB0aGUgZ2l2ZW4gY2xhc3Mgb3IgdGhlIG5lZ2F0ZWQgdmVyc2lvbiBvZiBpdCwgdGhlbiB0aGUgZGVmYXVsdCBhY3RpdmF0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogSW4gdGhlIHBhcmFkb3hpY2FsIHNpdHVhdGlvbiB3aGVyZSB0aGUgY2xvc2VzdCBhbmNlc3RvciBjb250YWlucyBfX2JvdGhfXyB0aGUgZ2l2ZW4gY2xhc3MgYW5kIHRoZSBuZWdhdGVkXG5cdFx0XHQgKiB2ZXJzaW9uIG9mIGl0LCB0aGUgY2xhc3MgaXMgY29uc2lkZXJlZCBhY3RpdmUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWZhdWx0QWN0aXZhdGlvbj1mYWxzZV1cblx0XHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdFx0ICovXG5cdFx0XHRpc0FjdGl2ZTogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSwgZGVmYXVsdEFjdGl2YXRpb24pIHtcblx0XHRcdFx0dmFyIG5vID0gJ25vLScgKyBjbGFzc05hbWU7XG5cblx0XHRcdFx0d2hpbGUgKGVsZW1lbnQpIHtcblx0XHRcdFx0XHR2YXIgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG5cdFx0XHRcdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucyhubykpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gISFkZWZhdWx0QWN0aXZhdGlvbjtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVGhpcyBuYW1lc3BhY2UgY29udGFpbnMgYWxsIGN1cnJlbnRseSBsb2FkZWQgbGFuZ3VhZ2VzIGFuZCB0aGUgc29tZSBoZWxwZXIgZnVuY3Rpb25zIHRvIGNyZWF0ZSBhbmQgbW9kaWZ5IGxhbmd1YWdlcy5cblx0XHQgKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0bGFuZ3VhZ2VzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBncmFtbWFyIGZvciBwbGFpbiwgdW5mb3JtYXR0ZWQgdGV4dC5cblx0XHRcdCAqL1xuXHRcdFx0cGxhaW46IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHRwbGFpbnRleHQ6IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHR0ZXh0OiBwbGFpblRleHRHcmFtbWFyLFxuXHRcdFx0dHh0OiBwbGFpblRleHRHcmFtbWFyLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIGxhbmd1YWdlIHdpdGggdGhlIGdpdmVuIGlkIGFuZCBhcHBlbmRzIHRoZSBnaXZlbiB0b2tlbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgYSB0b2tlbiBpbiBgcmVkZWZgIGFsc28gYXBwZWFycyBpbiB0aGUgY29waWVkIGxhbmd1YWdlLCB0aGVuIHRoZSBleGlzdGluZyB0b2tlbiBpbiB0aGUgY29waWVkIGxhbmd1YWdlXG5cdFx0XHQgKiB3aWxsIGJlIG92ZXJ3cml0dGVuIGF0IGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBCZXN0IHByYWN0aWNlc1xuXHRcdFx0ICpcblx0XHRcdCAqIFNpbmNlIHRoZSBwb3NpdGlvbiBvZiBvdmVyd3JpdGluZyB0b2tlbnMgKHRva2VuIGluIGByZWRlZmAgdGhhdCBvdmVyd3JpdGUgdG9rZW5zIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2UpXG5cdFx0XHQgKiBkb2Vzbid0IG1hdHRlciwgdGhleSBjYW4gdGVjaG5pY2FsbHkgYmUgaW4gYW55IG9yZGVyLiBIb3dldmVyLCB0aGlzIGNhbiBiZSBjb25mdXNpbmcgdG8gb3RoZXJzIHRoYXQgdHJ5aW5nIHRvXG5cdFx0XHQgKiB1bmRlcnN0YW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9uIGJlY2F1c2UsIG5vcm1hbGx5LCB0aGUgb3JkZXIgb2YgdG9rZW5zIG1hdHRlcnMgaW4gUHJpc20gZ3JhbW1hcnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlcmVmb3JlLCBpdCBpcyBlbmNvdXJhZ2VkIHRvIG9yZGVyIG92ZXJ3cml0aW5nIHRva2VucyBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9ucyBvZiB0aGUgb3ZlcndyaXR0ZW4gdG9rZW5zLlxuXHRcdFx0ICogRnVydGhlcm1vcmUsIGFsbCBub24tb3ZlcndyaXRpbmcgdG9rZW5zIHNob3VsZCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIG92ZXJ3cml0aW5nIG9uZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgbGFuZ3VhZ2UgdG8gZXh0ZW5kLiBUaGlzIGhhcyB0byBiZSBhIGtleSBpbiBgUHJpc20ubGFuZ3VhZ2VzYC5cblx0XHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gcmVkZWYgVGhlIG5ldyB0b2tlbnMgdG8gYXBwZW5kLlxuXHRcdFx0ICogQHJldHVybnMge0dyYW1tYXJ9IFRoZSBuZXcgbGFuZ3VhZ2UgY3JlYXRlZC5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqIEBleGFtcGxlXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXNbJ2Nzcy13aXRoLWNvbG9ycyddID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY3NzJywge1xuXHRcdFx0ICogICAgIC8vIFByaXNtLmxhbmd1YWdlcy5jc3MgYWxyZWFkeSBoYXMgYSAnY29tbWVudCcgdG9rZW4sIHNvIHRoaXMgdG9rZW4gd2lsbCBvdmVyd3JpdGUgQ1NTJyAnY29tbWVudCcgdG9rZW5cblx0XHRcdCAqICAgICAvLyBhdCBpdHMgb3JpZ2luYWwgcG9zaXRpb25cblx0XHRcdCAqICAgICAnY29tbWVudCc6IHsgLi4uIH0sXG5cdFx0XHQgKiAgICAgLy8gQ1NTIGRvZXNuJ3QgaGF2ZSBhICdjb2xvcicgdG9rZW4sIHNvIHRoaXMgdG9rZW4gd2lsbCBiZSBhcHBlbmRlZFxuXHRcdFx0ICogICAgICdjb2xvcic6IC9cXGIoPzpyZWR8Z3JlZW58Ymx1ZSlcXGIvXG5cdFx0XHQgKiB9KTtcblx0XHRcdCAqL1xuXHRcdFx0ZXh0ZW5kOiBmdW5jdGlvbiAoaWQsIHJlZGVmKSB7XG5cdFx0XHRcdHZhciBsYW5nID0gXy51dGlsLmNsb25lKF8ubGFuZ3VhZ2VzW2lkXSk7XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHJlZGVmKSB7XG5cdFx0XHRcdFx0bGFuZ1trZXldID0gcmVkZWZba2V5XTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBsYW5nO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbnNlcnRzIHRva2VucyBfYmVmb3JlXyBhbm90aGVyIHRva2VuIGluIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBvciBhbnkgb3RoZXIgZ3JhbW1hci5cblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBVc2FnZVxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgaGVscGVyIG1ldGhvZCBtYWtlcyBpdCBlYXN5IHRvIG1vZGlmeSBleGlzdGluZyBsYW5ndWFnZXMuIEZvciBleGFtcGxlLCB0aGUgQ1NTIGxhbmd1YWdlIGRlZmluaXRpb25cblx0XHRcdCAqIG5vdCBvbmx5IGRlZmluZXMgQ1NTIGhpZ2hsaWdodGluZyBmb3IgQ1NTIGRvY3VtZW50cywgYnV0IGFsc28gbmVlZHMgdG8gZGVmaW5lIGhpZ2hsaWdodGluZyBmb3IgQ1NTIGVtYmVkZGVkXG5cdFx0XHQgKiBpbiBIVE1MIHRocm91Z2ggYDxzdHlsZT5gIGVsZW1lbnRzLiBUbyBkbyB0aGlzLCBpdCBuZWVkcyB0byBtb2RpZnkgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgIGFuZCBhZGQgdGhlXG5cdFx0XHQgKiBhcHByb3ByaWF0ZSB0b2tlbnMuIEhvd2V2ZXIsIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYCBpcyBhIHJlZ3VsYXIgSmF2YVNjcmlwdCBvYmplY3QgbGl0ZXJhbCwgc28gaWYgeW91IGRvXG5cdFx0XHQgKiB0aGlzOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMubWFya3VwLnN0eWxlID0ge1xuXHRcdFx0ICogICAgIC8vIHRva2VuXG5cdFx0XHQgKiB9O1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogdGhlbiB0aGUgYHN0eWxlYCB0b2tlbiB3aWxsIGJlIGFkZGVkIChhbmQgcHJvY2Vzc2VkKSBhdCB0aGUgZW5kLiBgaW5zZXJ0QmVmb3JlYCBhbGxvd3MgeW91IHRvIGluc2VydCB0b2tlbnNcblx0XHRcdCAqIGJlZm9yZSBleGlzdGluZyB0b2tlbnMuIEZvciB0aGUgQ1NTIGV4YW1wbGUgYWJvdmUsIHlvdSB3b3VsZCB1c2UgaXQgbGlrZSB0aGlzOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCB7XG5cdFx0XHQgKiAgICAgJ3N0eWxlJzoge1xuXHRcdFx0ICogICAgICAgICAvLyB0b2tlblxuXHRcdFx0ICogICAgIH1cblx0XHRcdCAqIH0pO1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogIyMgU3BlY2lhbCBjYXNlc1xuXHRcdFx0ICpcblx0XHRcdCAqIElmIHRoZSBncmFtbWFycyBvZiBgaW5zaWRlYCBhbmQgYGluc2VydGAgaGF2ZSB0b2tlbnMgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGUgdG9rZW5zIGluIGBpbnNpZGVgJ3MgZ3JhbW1hclxuXHRcdFx0ICogd2lsbCBiZSBpZ25vcmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIHVzZWQgdG8gaW5zZXJ0IHRva2VucyBhZnRlciBgYmVmb3JlYDpcblx0XHRcdCAqXG5cdFx0XHQgKiBgYGBqc1xuXHRcdFx0ICogUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NvbW1lbnQnLCB7XG5cdFx0XHQgKiAgICAgJ2NvbW1lbnQnOiBQcmlzbS5sYW5ndWFnZXMubWFya3VwLmNvbW1lbnQsXG5cdFx0XHQgKiAgICAgLy8gdG9rZW5zIGFmdGVyICdjb21tZW50J1xuXHRcdFx0ICogfSk7XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBMaW1pdGF0aW9uc1xuXHRcdFx0ICpcblx0XHRcdCAqIFRoZSBtYWluIHByb2JsZW0gYGluc2VydEJlZm9yZWAgaGFzIHRvIHNvbHZlIGlzIGl0ZXJhdGlvbiBvcmRlci4gU2luY2UgRVMyMDE1LCB0aGUgaXRlcmF0aW9uIG9yZGVyIGZvciBvYmplY3Rcblx0XHRcdCAqIHByb3BlcnRpZXMgaXMgZ3VhcmFudGVlZCB0byBiZSB0aGUgaW5zZXJ0aW9uIG9yZGVyIChleGNlcHQgZm9yIGludGVnZXIga2V5cykgYnV0IHNvbWUgYnJvd3NlcnMgYmVoYXZlXG5cdFx0XHQgKiBkaWZmZXJlbnRseSB3aGVuIGtleXMgYXJlIGRlbGV0ZWQgYW5kIHJlLWluc2VydGVkLiBTbyBgaW5zZXJ0QmVmb3JlYCBjYW4ndCBiZSBpbXBsZW1lbnRlZCBieSB0ZW1wb3JhcmlseVxuXHRcdFx0ICogZGVsZXRpbmcgcHJvcGVydGllcyB3aGljaCBpcyBuZWNlc3NhcnkgdG8gaW5zZXJ0IGF0IGFyYml0cmFyeSBwb3NpdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogVG8gc29sdmUgdGhpcyBwcm9ibGVtLCBgaW5zZXJ0QmVmb3JlYCBkb2Vzbid0IGFjdHVhbGx5IGluc2VydCB0aGUgZ2l2ZW4gdG9rZW5zIGludG8gdGhlIHRhcmdldCBvYmplY3QuXG5cdFx0XHQgKiBJbnN0ZWFkLCBpdCB3aWxsIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIHJlcGxhY2UgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCB0aGUgbmV3IG9uZS4gVGhpc1xuXHRcdFx0ICogY2FuIGJlIGRvbmUgd2l0aG91dCB0ZW1wb3JhcmlseSBkZWxldGluZyBwcm9wZXJ0aWVzLCBzbyB0aGUgaXRlcmF0aW9uIG9yZGVyIGlzIHdlbGwtZGVmaW5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBIb3dldmVyLCBvbmx5IHJlZmVyZW5jZXMgdGhhdCBjYW4gYmUgcmVhY2hlZCBmcm9tIGBQcmlzbS5sYW5ndWFnZXNgIG9yIGBpbnNlcnRgIHdpbGwgYmUgcmVwbGFjZWQuIEkuZS4gaWZcblx0XHRcdCAqIHlvdSBob2xkIHRoZSB0YXJnZXQgb2JqZWN0IGluIGEgdmFyaWFibGUsIHRoZW4gdGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZSB3aWxsIG5vdCBjaGFuZ2UuXG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIHZhciBvbGRNYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRcdFx0ICogdmFyIG5ld01hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjb21tZW50JywgeyAuLi4gfSk7XG5cdFx0XHQgKlxuXHRcdFx0ICogYXNzZXJ0KG9sZE1hcmt1cCAhPT0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCk7XG5cdFx0XHQgKiBhc3NlcnQobmV3TWFya3VwID09PSBQcmlzbS5sYW5ndWFnZXMubWFya3VwKTtcblx0XHRcdCAqIGBgYFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbnNpZGUgVGhlIHByb3BlcnR5IG9mIGByb290YCAoZS5nLiBhIGxhbmd1YWdlIGlkIGluIGBQcmlzbS5sYW5ndWFnZXNgKSB0aGF0IGNvbnRhaW5zIHRoZVxuXHRcdFx0ICogb2JqZWN0IHRvIGJlIG1vZGlmaWVkLlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGJlZm9yZSBUaGUga2V5IHRvIGluc2VydCBiZWZvcmUuXG5cdFx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGluc2VydCBBbiBvYmplY3QgY29udGFpbmluZyB0aGUga2V5LXZhbHVlIHBhaXJzIHRvIGJlIGluc2VydGVkLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBbcm9vdF0gVGhlIG9iamVjdCBjb250YWluaW5nIGBpbnNpZGVgLCBpLmUuIHRoZSBvYmplY3QgdGhhdCBjb250YWlucyB0aGVcblx0XHRcdCAqIG9iamVjdCB0byBiZSBtb2RpZmllZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBEZWZhdWx0cyB0byBgUHJpc20ubGFuZ3VhZ2VzYC5cblx0XHRcdCAqIEByZXR1cm5zIHtHcmFtbWFyfSBUaGUgbmV3IGdyYW1tYXIgb2JqZWN0LlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICovXG5cdFx0XHRpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChpbnNpZGUsIGJlZm9yZSwgaW5zZXJ0LCByb290KSB7XG5cdFx0XHRcdHJvb3QgPSByb290IHx8IC8qKiBAdHlwZSB7YW55fSAqLyAoXy5sYW5ndWFnZXMpO1xuXHRcdFx0XHR2YXIgZ3JhbW1hciA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdFx0LyoqIEB0eXBlIHtHcmFtbWFyfSAqL1xuXHRcdFx0XHR2YXIgcmV0ID0ge307XG5cblx0XHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0XHRcdGlmIChncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXG5cdFx0XHRcdFx0XHRpZiAodG9rZW4gPT0gYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIG5ld1Rva2VuIGluIGluc2VydCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChpbnNlcnQuaGFzT3duUHJvcGVydHkobmV3VG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXRbbmV3VG9rZW5dID0gaW5zZXJ0W25ld1Rva2VuXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gRG8gbm90IGluc2VydCB0b2tlbiB3aGljaCBhbHNvIG9jY3VyIGluIGluc2VydC4gU2VlICMxNTI1XG5cdFx0XHRcdFx0XHRpZiAoIWluc2VydC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblx0XHRcdFx0XHRcdFx0cmV0W3Rva2VuXSA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBvbGQgPSByb290W2luc2lkZV07XG5cdFx0XHRcdHJvb3RbaW5zaWRlXSA9IHJldDtcblxuXHRcdFx0XHQvLyBVcGRhdGUgcmVmZXJlbmNlcyBpbiBvdGhlciBsYW5ndWFnZSBkZWZpbml0aW9uc1xuXHRcdFx0XHRfLmxhbmd1YWdlcy5ERlMoXy5sYW5ndWFnZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBvbGQgJiYga2V5ICE9IGluc2lkZSkge1xuXHRcdFx0XHRcdFx0dGhpc1trZXldID0gcmV0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFRyYXZlcnNlIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiB3aXRoIERlcHRoIEZpcnN0IFNlYXJjaFxuXHRcdFx0REZTOiBmdW5jdGlvbiBERlMobywgY2FsbGJhY2ssIHR5cGUsIHZpc2l0ZWQpIHtcblx0XHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdFx0dmFyIG9iaklkID0gXy51dGlsLm9iaklkO1xuXG5cdFx0XHRcdGZvciAodmFyIGkgaW4gbykge1xuXHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG8sIGksIG9baV0sIHR5cGUgfHwgaSk7XG5cblx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eSA9IG9baV07XG5cdFx0XHRcdFx0XHR2YXIgcHJvcGVydHlUeXBlID0gXy51dGlsLnR5cGUocHJvcGVydHkpO1xuXG5cdFx0XHRcdFx0XHRpZiAocHJvcGVydHlUeXBlID09PSAnT2JqZWN0JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIG51bGwsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9wZXJ0eVR5cGUgPT09ICdBcnJheScgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRERlMocHJvcGVydHksIGNhbGxiYWNrLCBpLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cGx1Z2luczoge30sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGlzIHRoZSBtb3N0IGhpZ2gtbGV2ZWwgZnVuY3Rpb24gaW4gUHJpc23igJlzIEFQSS5cblx0XHQgKiBJdCBmZXRjaGVzIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBoYXZlIGEgYC5sYW5ndWFnZS14eHh4YCBjbGFzcyBhbmQgdGhlbiBjYWxscyB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0RWxlbWVudH0gb25cblx0XHQgKiBlYWNoIG9uZSBvZiB0aGVtLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIGBQcmlzbS5oaWdobGlnaHRBbGxVbmRlcihkb2N1bWVudCwgYXN5bmMsIGNhbGxiYWNrKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gU2FtZSBhcyBpbiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXJ9LlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gU2FtZSBhcyBpbiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXJ9LlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRoaWdobGlnaHRBbGw6IGZ1bmN0aW9uIChhc3luYywgY2FsbGJhY2spIHtcblx0XHRcdF8uaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGFzeW5jLCBjYWxsYmFjayk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEZldGNoZXMgYWxsIHRoZSBkZXNjZW5kYW50cyBvZiBgY29udGFpbmVyYCB0aGF0IGhhdmUgYSBgLmxhbmd1YWdlLXh4eHhgIGNsYXNzIGFuZCB0aGVuIGNhbGxzXG5cdFx0ICoge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IG9uIGVhY2ggb25lIG9mIHRoZW0uXG5cdFx0ICpcblx0XHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHRcdCAqIDEuIGBiZWZvcmUtaGlnaGxpZ2h0YWxsYFxuXHRcdCAqIDIuIGBiZWZvcmUtYWxsLWVsZW1lbnRzLWhpZ2hsaWdodGBcblx0XHQgKiAzLiBBbGwgaG9va3Mgb2Yge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IGZvciBlYWNoIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGNvbnRhaW5lciBUaGUgcm9vdCBlbGVtZW50LCB3aG9zZSBkZXNjZW5kYW50cyB0aGF0IGhhdmUgYSBgLmxhbmd1YWdlLXh4eHhgIGNsYXNzIHdpbGwgYmUgaGlnaGxpZ2h0ZWQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbYXN5bmM9ZmFsc2VdIFdoZXRoZXIgZWFjaCBlbGVtZW50IGlzIHRvIGJlIGhpZ2hsaWdodGVkIGFzeW5jaHJvbm91c2x5IHVzaW5nIFdlYiBXb3JrZXJzLlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBlYWNoIGVsZW1lbnQgYWZ0ZXIgaXRzIGhpZ2hsaWdodGluZyBpcyBkb25lLlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRoaWdobGlnaHRBbGxVbmRlcjogZnVuY3Rpb24gKGNvbnRhaW5lciwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLFxuXHRcdFx0XHRzZWxlY3RvcjogJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ1xuXHRcdFx0fTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHRhbGwnLCBlbnYpO1xuXG5cdFx0XHRlbnYuZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZW52LmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGVudi5zZWxlY3RvcikpO1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWFsbC1lbGVtZW50cy1oaWdobGlnaHQnLCBlbnYpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgKGVsZW1lbnQgPSBlbnYuZWxlbWVudHNbaSsrXSk7KSB7XG5cdFx0XHRcdF8uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50LCBhc3luYyA9PT0gdHJ1ZSwgZW52LmNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSGlnaGxpZ2h0cyB0aGUgY29kZSBpbnNpZGUgYSBzaW5nbGUgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIFRoZSBmb2xsb3dpbmcgaG9va3Mgd2lsbCBiZSBydW46XG5cdFx0ICogMS4gYGJlZm9yZS1zYW5pdHktY2hlY2tgXG5cdFx0ICogMi4gYGJlZm9yZS1oaWdobGlnaHRgXG5cdFx0ICogMy4gQWxsIGhvb2tzIG9mIHtAbGluayBQcmlzbS5oaWdobGlnaHR9LiBUaGVzZSBob29rcyB3aWxsIGJlIHJ1biBieSBhbiBhc3luY2hyb25vdXMgd29ya2VyIGlmIGBhc3luY2AgaXMgYHRydWVgLlxuXHRcdCAqIDQuIGBiZWZvcmUtaW5zZXJ0YFxuXHRcdCAqIDUuIGBhZnRlci1oaWdobGlnaHRgXG5cdFx0ICogNi4gYGNvbXBsZXRlYFxuXHRcdCAqXG5cdFx0ICogU29tZSB0aGUgYWJvdmUgaG9va3Mgd2lsbCBiZSBza2lwcGVkIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgY29udGFpbiBhbnkgdGV4dCBvciB0aGVyZSBpcyBubyBncmFtbWFyIGxvYWRlZCBmb3Jcblx0XHQgKiB0aGUgZWxlbWVudCdzIGxhbmd1YWdlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGNvZGUuXG5cdFx0ICogSXQgbXVzdCBoYXZlIGEgY2xhc3Mgb2YgYGxhbmd1YWdlLXh4eHhgIHRvIGJlIHByb2Nlc3NlZCwgd2hlcmUgYHh4eHhgIGlzIGEgdmFsaWQgbGFuZ3VhZ2UgaWRlbnRpZmllci5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gV2hldGhlciB0aGUgZWxlbWVudCBpcyB0byBiZSBoaWdobGlnaHRlZCBhc3luY2hyb25vdXNseSB1c2luZyBXZWIgV29ya2Vyc1xuXHRcdCAqIHRvIGltcHJvdmUgcGVyZm9ybWFuY2UgYW5kIGF2b2lkIGJsb2NraW5nIHRoZSBVSSB3aGVuIGhpZ2hsaWdodGluZyB2ZXJ5IGxhcmdlIGNodW5rcyBvZiBjb2RlLiBUaGlzIG9wdGlvbiBpc1xuXHRcdCAqIFtkaXNhYmxlZCBieSBkZWZhdWx0XShodHRwczovL3ByaXNtanMuY29tL2ZhcS5odG1sI3doeS1pcy1hc3luY2hyb25vdXMtaGlnaGxpZ2h0aW5nLWRpc2FibGVkLWJ5LWRlZmF1bHQpLlxuXHRcdCAqXG5cdFx0ICogTm90ZTogQWxsIGxhbmd1YWdlIGRlZmluaXRpb25zIHJlcXVpcmVkIHRvIGhpZ2hsaWdodCB0aGUgY29kZSBtdXN0IGJlIGluY2x1ZGVkIGluIHRoZSBtYWluIGBwcmlzbS5qc2AgZmlsZSBmb3Jcblx0XHQgKiBhc3luY2hyb25vdXMgaGlnaGxpZ2h0aW5nIHRvIHdvcmsuIFlvdSBjYW4gYnVpbGQgeW91ciBvd24gYnVuZGxlIG9uIHRoZVxuXHRcdCAqIFtEb3dubG9hZCBwYWdlXShodHRwczovL3ByaXNtanMuY29tL2Rvd25sb2FkLmh0bWwpLlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIGRvbmUuXG5cdFx0ICogTW9zdGx5IHVzZWZ1bCB3aGVuIGBhc3luY2AgaXMgYHRydWVgLCBzaW5jZSBpbiB0aGF0IGNhc2UsIHRoZSBoaWdobGlnaHRpbmcgaXMgZG9uZSBhc3luY2hyb25vdXNseS5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0RWxlbWVudDogZnVuY3Rpb24gKGVsZW1lbnQsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdFx0Ly8gRmluZCBsYW5ndWFnZVxuXHRcdFx0dmFyIGxhbmd1YWdlID0gXy51dGlsLmdldExhbmd1YWdlKGVsZW1lbnQpO1xuXHRcdFx0dmFyIGdyYW1tYXIgPSBfLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cblx0XHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgZWxlbWVudCwgaWYgbm90IHByZXNlbnRcblx0XHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShsYW5nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cblx0XHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgcGFyZW50LCBmb3Igc3R5bGluZ1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnKSB7XG5cdFx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY29kZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cblx0XHRcdHZhciBlbnYgPSB7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZSxcblx0XHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdFx0Y29kZTogY29kZVxuXHRcdFx0fTtcblxuXHRcdFx0ZnVuY3Rpb24gaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGhpZ2hsaWdodGVkQ29kZSkge1xuXHRcdFx0XHRlbnYuaGlnaGxpZ2h0ZWRDb2RlID0gaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0XHRlbnYuZWxlbWVudC5pbm5lckhUTUwgPSBlbnYuaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRcdF8uaG9va3MucnVuKCdhZnRlci1oaWdobGlnaHQnLCBlbnYpO1xuXHRcdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0XHQvLyBwbHVnaW5zIG1heSBjaGFuZ2UvYWRkIHRoZSBwYXJlbnQvZWxlbWVudFxuXHRcdFx0cGFyZW50ID0gZW52LmVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnICYmICFwYXJlbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG5cdFx0XHRcdHBhcmVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8udXRpbC5lbmNvZGUoZW52LmNvZGUpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYXN5bmMgJiYgX3NlbGYuV29ya2VyKSB7XG5cdFx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKF8uZmlsZW5hbWUpO1xuXG5cdFx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGV2dC5kYXRhKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdGxhbmd1YWdlOiBlbnYubGFuZ3VhZ2UsXG5cdFx0XHRcdFx0Y29kZTogZW52LmNvZGUsXG5cdFx0XHRcdFx0aW1tZWRpYXRlQ2xvc2U6IHRydWVcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8uaGlnaGxpZ2h0KGVudi5jb2RlLCBlbnYuZ3JhbW1hciwgZW52Lmxhbmd1YWdlKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIExvdy1sZXZlbCBmdW5jdGlvbiwgb25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3XigJlyZSBkb2luZy4gSXQgYWNjZXB0cyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0XG5cdFx0ICogYW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9ucyB0byB1c2UsIGFuZCByZXR1cm5zIGEgc3RyaW5nIHdpdGggdGhlIEhUTUwgcHJvZHVjZWQuXG5cdFx0ICpcblx0XHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHRcdCAqIDEuIGBiZWZvcmUtdG9rZW5pemVgXG5cdFx0ICogMi4gYGFmdGVyLXRva2VuaXplYFxuXHRcdCAqIDMuIGB3cmFwYDogT24gZWFjaCB7QGxpbmsgVG9rZW59LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgQSBzdHJpbmcgd2l0aCB0aGUgY29kZSB0byBiZSBoaWdobGlnaHRlZC5cblx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGdyYW1tYXIgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRva2VucyB0byB1c2UuXG5cdFx0ICpcblx0XHQgKiBVc3VhbGx5IGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBsaWtlIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIG5hbWUgb2YgdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gcGFzc2VkIHRvIGBncmFtbWFyYC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgaGlnaGxpZ2h0ZWQgSFRNTC5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBQcmlzbS5oaWdobGlnaHQoJ3ZhciBmb28gPSB0cnVlOycsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0LCAnamF2YXNjcmlwdCcpO1xuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodDogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIsIGxhbmd1YWdlKSB7XG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRjb2RlOiB0ZXh0LFxuXHRcdFx0XHRncmFtbWFyOiBncmFtbWFyLFxuXHRcdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHRcdH07XG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXRva2VuaXplJywgZW52KTtcblx0XHRcdGVudi50b2tlbnMgPSBfLnRva2VuaXplKGVudi5jb2RlLCBlbnYuZ3JhbW1hcik7XG5cdFx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItdG9rZW5pemUnLCBlbnYpO1xuXHRcdFx0cmV0dXJuIFRva2VuLnN0cmluZ2lmeShfLnV0aWwuZW5jb2RlKGVudi50b2tlbnMpLCBlbnYubGFuZ3VhZ2UpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGlzIHRoZSBoZWFydCBvZiBQcmlzbSwgYW5kIHRoZSBtb3N0IGxvdy1sZXZlbCBmdW5jdGlvbiB5b3UgY2FuIHVzZS4gSXQgYWNjZXB0cyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0XG5cdFx0ICogYW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9ucyB0byB1c2UsIGFuZCByZXR1cm5zIGFuIGFycmF5IHdpdGggdGhlIHRva2VuaXplZCBjb2RlLlxuXHRcdCAqXG5cdFx0ICogV2hlbiB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBpbmNsdWRlcyBuZXN0ZWQgdG9rZW5zLCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHJlY3Vyc2l2ZWx5IG9uIGVhY2ggb2YgdGhlc2UgdG9rZW5zLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBtZXRob2QgY291bGQgYmUgdXNlZnVsIGluIG90aGVyIGNvbnRleHRzIGFzIHdlbGwsIGFzIGEgdmVyeSBjcnVkZSBwYXJzZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBBIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvIGJlIGhpZ2hsaWdodGVkLlxuXHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gZ3JhbW1hciBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdG9rZW5zIHRvIHVzZS5cblx0XHQgKlxuXHRcdCAqIFVzdWFsbHkgYSBsYW5ndWFnZSBkZWZpbml0aW9uIGxpa2UgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgLlxuXHRcdCAqIEByZXR1cm5zIHtUb2tlblN0cmVhbX0gQW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQgdG9rZW5zLCBhIHRva2VuIHN0cmVhbS5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBsZXQgY29kZSA9IGB2YXIgZm9vID0gMDtgO1xuXHRcdCAqIGxldCB0b2tlbnMgPSBQcmlzbS50b2tlbml6ZShjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG5cdFx0ICogdG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuXHRcdCAqICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBQcmlzbS5Ub2tlbiAmJiB0b2tlbi50eXBlID09PSAnbnVtYmVyJykge1xuXHRcdCAqICAgICAgICAgY29uc29sZS5sb2coYEZvdW5kIG51bWVyaWMgbGl0ZXJhbDogJHt0b2tlbi5jb250ZW50fWApO1xuXHRcdCAqICAgICB9XG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0dG9rZW5pemU6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyKSB7XG5cdFx0XHR2YXIgcmVzdCA9IGdyYW1tYXIucmVzdDtcblx0XHRcdGlmIChyZXN0KSB7XG5cdFx0XHRcdGZvciAodmFyIHRva2VuIGluIHJlc3QpIHtcblx0XHRcdFx0XHRncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGdyYW1tYXIucmVzdDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHRva2VuTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG5cdFx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIHRva2VuTGlzdC5oZWFkLCB0ZXh0KTtcblxuXHRcdFx0bWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgdG9rZW5MaXN0LmhlYWQsIDApO1xuXG5cdFx0XHRyZXR1cm4gdG9BcnJheSh0b2tlbkxpc3QpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBAbmFtZXNwYWNlXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGhvb2tzOiB7XG5cdFx0XHRhbGw6IHt9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEFkZHMgdGhlIGdpdmVuIGNhbGxiYWNrIHRvIHRoZSBsaXN0IG9mIGNhbGxiYWNrcyBmb3IgdGhlIGdpdmVuIGhvb2suXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBob29rIGl0IGlzIHJlZ2lzdGVyZWQgZm9yIGlzIHJ1bi5cblx0XHRcdCAqIEhvb2tzIGFyZSB1c3VhbGx5IGRpcmVjdGx5IHJ1biBieSBhIGhpZ2hsaWdodCBmdW5jdGlvbiBidXQgeW91IGNhbiBhbHNvIHJ1biBob29rcyB5b3Vyc2VsZi5cblx0XHRcdCAqXG5cdFx0XHQgKiBPbmUgY2FsbGJhY2sgZnVuY3Rpb24gY2FuIGJlIHJlZ2lzdGVyZWQgdG8gbXVsdGlwbGUgaG9va3MgYW5kIHRoZSBzYW1lIGhvb2sgbXVsdGlwbGUgdGltZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2suXG5cdFx0XHQgKiBAcGFyYW0ge0hvb2tDYWxsYmFja30gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGdpdmVuIGVudmlyb25tZW50IHZhcmlhYmxlcy5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqL1xuXHRcdFx0YWRkOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcblx0XHRcdFx0dmFyIGhvb2tzID0gXy5ob29rcy5hbGw7XG5cblx0XHRcdFx0aG9va3NbbmFtZV0gPSBob29rc1tuYW1lXSB8fCBbXTtcblxuXHRcdFx0XHRob29rc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUnVucyBhIGhvb2sgaW52b2tpbmcgYWxsIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGVudmlyb25tZW50IHZhcmlhYmxlcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBDYWxsYmFja3Mgd2lsbCBiZSBpbnZva2VkIHN5bmNocm9ub3VzbHkgYW5kIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gZW52IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgb2YgdGhlIGhvb2sgcGFzc2VkIHRvIGFsbCBjYWxsYmFja3MgcmVnaXN0ZXJlZC5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqL1xuXHRcdFx0cnVuOiBmdW5jdGlvbiAobmFtZSwgZW52KSB7XG5cdFx0XHRcdHZhciBjYWxsYmFja3MgPSBfLmhvb2tzLmFsbFtuYW1lXTtcblxuXHRcdFx0XHRpZiAoIWNhbGxiYWNrcyB8fCAhY2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBjYWxsYmFjazsgKGNhbGxiYWNrID0gY2FsbGJhY2tzW2krK10pOykge1xuXHRcdFx0XHRcdGNhbGxiYWNrKGVudik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VG9rZW46IFRva2VuXG5cdH07XG5cdF9zZWxmLlByaXNtID0gXztcblxuXG5cdC8vIFR5cGVzY3JpcHQgbm90ZTpcblx0Ly8gVGhlIGZvbGxvd2luZyBjYW4gYmUgdXNlZCB0byBpbXBvcnQgdGhlIFRva2VuIHR5cGUgaW4gSlNEb2M6XG5cdC8vXG5cdC8vICAgQHR5cGVkZWYge0luc3RhbmNlVHlwZTxpbXBvcnQoXCIuL3ByaXNtLWNvcmVcIilbXCJUb2tlblwiXT59IFRva2VuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgdG9rZW4uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFNlZSB7QGxpbmsgVG9rZW4jdHlwZSB0eXBlfVxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IFRva2VuU3RyZWFtfSBjb250ZW50IFNlZSB7QGxpbmsgVG9rZW4jY29udGVudCBjb250ZW50fVxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW2FsaWFzXSBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFttYXRjaGVkU3RyPVwiXCJdIEEgY29weSBvZiB0aGUgZnVsbCBzdHJpbmcgdGhpcyB0b2tlbiB3YXMgY3JlYXRlZCBmcm9tLlxuXHQgKiBAY2xhc3Ncblx0ICogQGdsb2JhbFxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRmdW5jdGlvbiBUb2tlbih0eXBlLCBjb250ZW50LCBhbGlhcywgbWF0Y2hlZFN0cikge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB0eXBlIG9mIHRoZSB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIFRoaXMgaXMgdXN1YWxseSB0aGUga2V5IG9mIGEgcGF0dGVybiBpbiBhIHtAbGluayBHcmFtbWFyfS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHQvKipcblx0XHQgKiBUaGUgc3RyaW5ncyBvciB0b2tlbnMgY29udGFpbmVkIGJ5IHRoaXMgdG9rZW4uXG5cdFx0ICpcblx0XHQgKiBUaGlzIHdpbGwgYmUgYSB0b2tlbiBzdHJlYW0gaWYgdGhlIHBhdHRlcm4gbWF0Y2hlZCBhbHNvIGRlZmluZWQgYW4gYGluc2lkZWAgZ3JhbW1hci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmcgfCBUb2tlblN0cmVhbX1cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHQvKipcblx0XHQgKiBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd8c3RyaW5nW119XG5cdFx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5hbGlhcyA9IGFsaWFzO1xuXHRcdC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXHRcdHRoaXMubGVuZ3RoID0gKG1hdGNoZWRTdHIgfHwgJycpLmxlbmd0aCB8IDA7XG5cdH1cblxuXHQvKipcblx0ICogQSB0b2tlbiBzdHJlYW0gaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQge0BsaW5rIFRva2VuIFRva2VufSBvYmplY3RzLlxuXHQgKlxuXHQgKiBUb2tlbiBzdHJlYW1zIGhhdmUgdG8gZnVsZmlsbCBhIGZldyBwcm9wZXJ0aWVzIHRoYXQgYXJlIGFzc3VtZWQgYnkgbW9zdCBmdW5jdGlvbnMgKG1vc3RseSBpbnRlcm5hbCBvbmVzKSB0aGF0IHByb2Nlc3Ncblx0ICogdGhlbS5cblx0ICpcblx0ICogMS4gTm8gYWRqYWNlbnQgc3RyaW5ncy5cblx0ICogMi4gTm8gZW1wdHkgc3RyaW5ncy5cblx0ICpcblx0ICogICAgVGhlIG9ubHkgZXhjZXB0aW9uIGhlcmUgaXMgdGhlIHRva2VuIHN0cmVhbSB0aGF0IG9ubHkgY29udGFpbnMgdGhlIGVtcHR5IHN0cmluZyBhbmQgbm90aGluZyBlbHNlLlxuXHQgKlxuXHQgKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nIHwgVG9rZW4+fSBUb2tlblN0cmVhbVxuXHQgKiBAZ2xvYmFsXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIHRoZSBnaXZlbiB0b2tlbiBvciB0b2tlbiBzdHJlYW0gdG8gYW4gSFRNTCByZXByZXNlbnRhdGlvbi5cblx0ICpcblx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0ICogMS4gYHdyYXBgOiBPbiBlYWNoIHtAbGluayBUb2tlbn0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgVG9rZW4gfCBUb2tlblN0cmVhbX0gbyBUaGUgdG9rZW4gb3IgdG9rZW4gc3RyZWFtIHRvIGJlIGNvbnZlcnRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSBuYW1lIG9mIGN1cnJlbnQgbGFuZ3VhZ2UuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBIVE1MIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0b2tlbiBvciB0b2tlbiBzdHJlYW0uXG5cdCAqIEBtZW1iZXJvZiBUb2tlblxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRUb2tlbi5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkobywgbGFuZ3VhZ2UpIHtcblx0XHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBvO1xuXHRcdH1cblx0XHRpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuXHRcdFx0dmFyIHMgPSAnJztcblx0XHRcdG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRzICs9IHN0cmluZ2lmeShlLCBsYW5ndWFnZSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBzO1xuXHRcdH1cblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHR0eXBlOiBvLnR5cGUsXG5cdFx0XHRjb250ZW50OiBzdHJpbmdpZnkoby5jb250ZW50LCBsYW5ndWFnZSksXG5cdFx0XHR0YWc6ICdzcGFuJyxcblx0XHRcdGNsYXNzZXM6IFsndG9rZW4nLCBvLnR5cGVdLFxuXHRcdFx0YXR0cmlidXRlczoge30sXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHR9O1xuXG5cdFx0dmFyIGFsaWFzZXMgPSBvLmFsaWFzO1xuXHRcdGlmIChhbGlhc2VzKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhbGlhc2VzKSkge1xuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnYuY2xhc3Nlcy5wdXNoKGFsaWFzZXMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF8uaG9va3MucnVuKCd3cmFwJywgZW52KTtcblxuXHRcdHZhciBhdHRyaWJ1dGVzID0gJyc7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBlbnYuYXR0cmlidXRlcykge1xuXHRcdFx0YXR0cmlidXRlcyArPSAnICcgKyBuYW1lICsgJz1cIicgKyAoZW52LmF0dHJpYnV0ZXNbbmFtZV0gfHwgJycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKSArICdcIic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICc8JyArIGVudi50YWcgKyAnIGNsYXNzPVwiJyArIGVudi5jbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyBhdHRyaWJ1dGVzICsgJz4nICsgZW52LmNvbnRlbnQgKyAnPC8nICsgZW52LnRhZyArICc+Jztcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtSZWdFeHB9IHBhdHRlcm5cblx0ICogQHBhcmFtIHtudW1iZXJ9IHBvc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb2tiZWhpbmRcblx0ICogQHJldHVybnMge1JlZ0V4cEV4ZWNBcnJheSB8IG51bGx9XG5cdCAqL1xuXHRmdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKSB7XG5cdFx0cGF0dGVybi5sYXN0SW5kZXggPSBwb3M7XG5cdFx0dmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xuXHRcdGlmIChtYXRjaCAmJiBsb29rYmVoaW5kICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQvLyBjaGFuZ2UgdGhlIG1hdGNoIHRvIHJlbW92ZSB0aGUgdGV4dCBtYXRjaGVkIGJ5IHRoZSBQcmlzbSBsb29rYmVoaW5kIGdyb3VwXG5cdFx0XHR2YXIgbG9va2JlaGluZExlbmd0aCA9IG1hdGNoWzFdLmxlbmd0aDtcblx0XHRcdG1hdGNoLmluZGV4ICs9IGxvb2tiZWhpbmRMZW5ndGg7XG5cdFx0XHRtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGxvb2tiZWhpbmRMZW5ndGgpO1xuXHRcdH1cblx0XHRyZXR1cm4gbWF0Y2g7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PHN0cmluZyB8IFRva2VuPn0gdG9rZW5MaXN0XG5cdCAqIEBwYXJhbSB7YW55fSBncmFtbWFyXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdE5vZGU8c3RyaW5nIHwgVG9rZW4+fSBzdGFydE5vZGVcblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0UG9zXG5cdCAqIEBwYXJhbSB7UmVtYXRjaE9wdGlvbnN9IFtyZW1hdGNoXVxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICogQHByaXZhdGVcblx0ICpcblx0ICogQHR5cGVkZWYgUmVtYXRjaE9wdGlvbnNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGNhdXNlXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByZWFjaFxuXHQgKi9cblx0ZnVuY3Rpb24gbWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgc3RhcnROb2RlLCBzdGFydFBvcywgcmVtYXRjaCkge1xuXHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdGlmICghZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikgfHwgIWdyYW1tYXJbdG9rZW5dKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybnMgPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdHBhdHRlcm5zID0gQXJyYXkuaXNBcnJheShwYXR0ZXJucykgPyBwYXR0ZXJucyA6IFtwYXR0ZXJuc107XG5cblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcGF0dGVybnMubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0aWYgKHJlbWF0Y2ggJiYgcmVtYXRjaC5jYXVzZSA9PSB0b2tlbiArICcsJyArIGopIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcGF0dGVybk9iaiA9IHBhdHRlcm5zW2pdO1xuXHRcdFx0XHR2YXIgaW5zaWRlID0gcGF0dGVybk9iai5pbnNpZGU7XG5cdFx0XHRcdHZhciBsb29rYmVoaW5kID0gISFwYXR0ZXJuT2JqLmxvb2tiZWhpbmQ7XG5cdFx0XHRcdHZhciBncmVlZHkgPSAhIXBhdHRlcm5PYmouZ3JlZWR5O1xuXHRcdFx0XHR2YXIgYWxpYXMgPSBwYXR0ZXJuT2JqLmFsaWFzO1xuXG5cdFx0XHRcdGlmIChncmVlZHkgJiYgIXBhdHRlcm5PYmoucGF0dGVybi5nbG9iYWwpIHtcblx0XHRcdFx0XHQvLyBXaXRob3V0IHRoZSBnbG9iYWwgZmxhZywgbGFzdEluZGV4IHdvbid0IHdvcmtcblx0XHRcdFx0XHR2YXIgZmxhZ3MgPSBwYXR0ZXJuT2JqLnBhdHRlcm4udG9TdHJpbmcoKS5tYXRjaCgvW2ltc3V5XSokLylbMF07XG5cdFx0XHRcdFx0cGF0dGVybk9iai5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm5PYmoucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qKiBAdHlwZSB7UmVnRXhwfSAqL1xuXHRcdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5PYmoucGF0dGVybiB8fCBwYXR0ZXJuT2JqO1xuXG5cdFx0XHRcdGZvciAoIC8vIGl0ZXJhdGUgdGhlIHRva2VuIGxpc3QgYW5kIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgdG9rZW4vc3RyaW5nIHBvc2l0aW9uXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnROb2RlID0gc3RhcnROb2RlLm5leHQsIHBvcyA9IHN0YXJ0UG9zO1xuXHRcdFx0XHRcdGN1cnJlbnROb2RlICE9PSB0b2tlbkxpc3QudGFpbDtcblx0XHRcdFx0XHRwb3MgKz0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoLCBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcblx0XHRcdFx0KSB7XG5cblx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiBwb3MgPj0gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHN0ciA9IGN1cnJlbnROb2RlLnZhbHVlO1xuXG5cdFx0XHRcdFx0aWYgKHRva2VuTGlzdC5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIEFCT1JULCBBQk9SVCFcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc3RyIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciByZW1vdmVDb3VudCA9IDE7IC8vIHRoaXMgaXMgdGhlIHRvIHBhcmFtZXRlciBvZiByZW1vdmVCZXR3ZWVuXG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xuXG5cdFx0XHRcdFx0aWYgKGdyZWVkeSkge1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0XHR2YXIgdG8gPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0XHRcdHZhciBwID0gcG9zO1xuXG5cdFx0XHRcdFx0XHQvLyBmaW5kIHRoZSBub2RlIHRoYXQgY29udGFpbnMgdGhlIG1hdGNoXG5cdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlIChmcm9tID49IHApIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuXHRcdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIGFkanVzdCBwb3MgKGFuZCBwKVxuXHRcdFx0XHRcdFx0cCAtPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRwb3MgPSBwO1xuXG5cdFx0XHRcdFx0XHQvLyB0aGUgY3VycmVudCBub2RlIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnROb2RlLnZhbHVlIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIGZpbmQgdGhlIGxhc3Qgbm9kZSB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIG1hdGNoXG5cdFx0XHRcdFx0XHRmb3IgKFxuXHRcdFx0XHRcdFx0XHR2YXIgayA9IGN1cnJlbnROb2RlO1xuXHRcdFx0XHRcdFx0XHRrICE9PSB0b2tlbkxpc3QudGFpbCAmJiAocCA8IHRvIHx8IHR5cGVvZiBrLnZhbHVlID09PSAnc3RyaW5nJyk7XG5cdFx0XHRcdFx0XHRcdGsgPSBrLm5leHRcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRyZW1vdmVDb3VudCsrO1xuXHRcdFx0XHRcdFx0XHRwICs9IGsudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmVtb3ZlQ291bnQtLTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRcdHN0ciA9IHRleHQuc2xpY2UocG9zLCBwKTtcblx0XHRcdFx0XHRcdG1hdGNoLmluZGV4IC09IHBvcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgMCwgc3RyLCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0dmFyIG1hdGNoU3RyID0gbWF0Y2hbMF07XG5cdFx0XHRcdFx0dmFyIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKTtcblx0XHRcdFx0XHR2YXIgYWZ0ZXIgPSBzdHIuc2xpY2UoZnJvbSArIG1hdGNoU3RyLmxlbmd0aCk7XG5cblx0XHRcdFx0XHR2YXIgcmVhY2ggPSBwb3MgKyBzdHIubGVuZ3RoO1xuXHRcdFx0XHRcdGlmIChyZW1hdGNoICYmIHJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0cmVtYXRjaC5yZWFjaCA9IHJlYWNoO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciByZW1vdmVGcm9tID0gY3VycmVudE5vZGUucHJldjtcblxuXHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdHJlbW92ZUZyb20gPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIGJlZm9yZSk7XG5cdFx0XHRcdFx0XHRwb3MgKz0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZW1vdmVSYW5nZSh0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHJlbW92ZUNvdW50KTtcblxuXHRcdFx0XHRcdHZhciB3cmFwcGVkID0gbmV3IFRva2VuKHRva2VuLCBpbnNpZGUgPyBfLnRva2VuaXplKG1hdGNoU3RyLCBpbnNpZGUpIDogbWF0Y2hTdHIsIGFsaWFzLCBtYXRjaFN0cik7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHdyYXBwZWQpO1xuXG5cdFx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIGN1cnJlbnROb2RlLCBhZnRlcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlbW92ZUNvdW50ID4gMSkge1xuXHRcdFx0XHRcdFx0Ly8gYXQgbGVhc3Qgb25lIFRva2VuIG9iamVjdCB3YXMgcmVtb3ZlZCwgc28gd2UgaGF2ZSB0byBkbyBzb21lIHJlbWF0Y2hpbmdcblx0XHRcdFx0XHRcdC8vIHRoaXMgY2FuIG9ubHkgaGFwcGVuIGlmIHRoZSBjdXJyZW50IHBhdHRlcm4gaXMgZ3JlZWR5XG5cblx0XHRcdFx0XHRcdC8qKiBAdHlwZSB7UmVtYXRjaE9wdGlvbnN9ICovXG5cdFx0XHRcdFx0XHR2YXIgbmVzdGVkUmVtYXRjaCA9IHtcblx0XHRcdFx0XHRcdFx0Y2F1c2U6IHRva2VuICsgJywnICsgaixcblx0XHRcdFx0XHRcdFx0cmVhY2g6IHJlYWNoXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0bWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgY3VycmVudE5vZGUucHJldiwgcG9zLCBuZXN0ZWRSZW1hdGNoKTtcblxuXHRcdFx0XHRcdFx0Ly8gdGhlIHJlYWNoIG1pZ2h0IGhhdmUgYmVlbiBleHRlbmRlZCBiZWNhdXNlIG9mIHRoZSByZW1hdGNoaW5nXG5cdFx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiBuZXN0ZWRSZW1hdGNoLnJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0XHRyZW1hdGNoLnJlYWNoID0gbmVzdGVkUmVtYXRjaC5yZWFjaDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGVkZWYgTGlua2VkTGlzdE5vZGVcblx0ICogQHByb3BlcnR5IHtUfSB2YWx1ZVxuXHQgKiBAcHJvcGVydHkge0xpbmtlZExpc3ROb2RlPFQ+IHwgbnVsbH0gcHJldiBUaGUgcHJldmlvdXMgbm9kZS5cblx0ICogQHByb3BlcnR5IHtMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGx9IG5leHQgVGhlIG5leHQgbm9kZS5cblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHByaXZhdGVcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBMaW5rZWRMaXN0KCkge1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dmFyIGhlYWQgPSB7IHZhbHVlOiBudWxsLCBwcmV2OiBudWxsLCBuZXh0OiBudWxsIH07XG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR2YXIgdGFpbCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IGhlYWQsIG5leHQ6IG51bGwgfTtcblx0XHRoZWFkLm5leHQgPSB0YWlsO1xuXG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR0aGlzLmhlYWQgPSBoZWFkO1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dGhpcy50YWlsID0gdGFpbDtcblx0XHR0aGlzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIG5ldyBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBsaXN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3Q8VD59IGxpc3Rcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxUPn0gbm9kZVxuXHQgKiBAcGFyYW0ge1R9IHZhbHVlXG5cdCAqIEByZXR1cm5zIHtMaW5rZWRMaXN0Tm9kZTxUPn0gVGhlIGFkZGVkIG5vZGUuXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiBhZGRBZnRlcihsaXN0LCBub2RlLCB2YWx1ZSkge1xuXHRcdC8vIGFzc3VtZXMgdGhhdCBub2RlICE9IGxpc3QudGFpbCAmJiB2YWx1ZXMubGVuZ3RoID49IDBcblx0XHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblxuXHRcdHZhciBuZXdOb2RlID0geyB2YWx1ZTogdmFsdWUsIHByZXY6IG5vZGUsIG5leHQ6IG5leHQgfTtcblx0XHRub2RlLm5leHQgPSBuZXdOb2RlO1xuXHRcdG5leHQucHJldiA9IG5ld05vZGU7XG5cdFx0bGlzdC5sZW5ndGgrKztcblxuXHRcdHJldHVybiBuZXdOb2RlO1xuXHR9XG5cdC8qKlxuXHQgKiBSZW1vdmVzIGBjb3VudGAgbm9kZXMgYWZ0ZXIgdGhlIGdpdmVuIG5vZGUuIFRoZSBnaXZlbiBub2RlIHdpbGwgbm90IGJlIHJlbW92ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPFQ+fSBub2RlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKi9cblx0ZnVuY3Rpb24gcmVtb3ZlUmFuZ2UobGlzdCwgbm9kZSwgY291bnQpIHtcblx0XHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50ICYmIG5leHQgIT09IGxpc3QudGFpbDsgaSsrKSB7XG5cdFx0XHRuZXh0ID0gbmV4dC5uZXh0O1xuXHRcdH1cblx0XHRub2RlLm5leHQgPSBuZXh0O1xuXHRcdG5leHQucHJldiA9IG5vZGU7XG5cdFx0bGlzdC5sZW5ndGggLT0gaTtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG5cdCAqIEByZXR1cm5zIHtUW119XG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FycmF5KGxpc3QpIHtcblx0XHR2YXIgYXJyYXkgPSBbXTtcblx0XHR2YXIgbm9kZSA9IGxpc3QuaGVhZC5uZXh0O1xuXHRcdHdoaWxlIChub2RlICE9PSBsaXN0LnRhaWwpIHtcblx0XHRcdGFycmF5LnB1c2gobm9kZS52YWx1ZSk7XG5cdFx0XHRub2RlID0gbm9kZS5uZXh0O1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxuXG5cdGlmICghX3NlbGYuZG9jdW1lbnQpIHtcblx0XHRpZiAoIV9zZWxmLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdC8vIGluIE5vZGUuanNcblx0XHRcdHJldHVybiBfO1xuXHRcdH1cblxuXHRcdGlmICghXy5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIpIHtcblx0XHRcdC8vIEluIHdvcmtlclxuXHRcdFx0X3NlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0dmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2dC5kYXRhKTtcblx0XHRcdFx0dmFyIGxhbmcgPSBtZXNzYWdlLmxhbmd1YWdlO1xuXHRcdFx0XHR2YXIgY29kZSA9IG1lc3NhZ2UuY29kZTtcblx0XHRcdFx0dmFyIGltbWVkaWF0ZUNsb3NlID0gbWVzc2FnZS5pbW1lZGlhdGVDbG9zZTtcblxuXHRcdFx0XHRfc2VsZi5wb3N0TWVzc2FnZShfLmhpZ2hsaWdodChjb2RlLCBfLmxhbmd1YWdlc1tsYW5nXSwgbGFuZykpO1xuXHRcdFx0XHRpZiAoaW1tZWRpYXRlQ2xvc2UpIHtcblx0XHRcdFx0XHRfc2VsZi5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHQvLyBHZXQgY3VycmVudCBzY3JpcHQgYW5kIGhpZ2hsaWdodFxuXHR2YXIgc2NyaXB0ID0gXy51dGlsLmN1cnJlbnRTY3JpcHQoKTtcblxuXHRpZiAoc2NyaXB0KSB7XG5cdFx0Xy5maWxlbmFtZSA9IHNjcmlwdC5zcmM7XG5cblx0XHRpZiAoc2NyaXB0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tYW51YWwnKSkge1xuXHRcdFx0Xy5tYW51YWwgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjaygpIHtcblx0XHRpZiAoIV8ubWFudWFsKSB7XG5cdFx0XHRfLmhpZ2hsaWdodEFsbCgpO1xuXHRcdH1cblx0fVxuXG5cdGlmICghXy5tYW51YWwpIHtcblx0XHQvLyBJZiB0aGUgZG9jdW1lbnQgc3RhdGUgaXMgXCJsb2FkaW5nXCIsIHRoZW4gd2UnbGwgdXNlIERPTUNvbnRlbnRMb2FkZWQuXG5cdFx0Ly8gSWYgdGhlIGRvY3VtZW50IHN0YXRlIGlzIFwiaW50ZXJhY3RpdmVcIiBhbmQgdGhlIHByaXNtLmpzIHNjcmlwdCBpcyBkZWZlcnJlZCwgdGhlbiB3ZSdsbCBhbHNvIHVzZSB0aGVcblx0XHQvLyBET01Db250ZW50TG9hZGVkIGV2ZW50IGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgc29tZSBwbHVnaW5zIG9yIGxhbmd1YWdlcyB3aGljaCBoYXZlIGFsc28gYmVlbiBkZWZlcnJlZCBhbmQgdGhleVxuXHRcdC8vIG1pZ2h0IHRha2UgbG9uZ2VyIG9uZSBhbmltYXRpb24gZnJhbWUgdG8gZXhlY3V0ZSB3aGljaCBjYW4gY3JlYXRlIGEgcmFjZSBjb25kaXRpb24gd2hlcmUgb25seSBzb21lIHBsdWdpbnMgaGF2ZVxuXHRcdC8vIGJlZW4gbG9hZGVkIHdoZW4gUHJpc20uaGlnaGxpZ2h0QWxsKCkgaXMgZXhlY3V0ZWQsIGRlcGVuZGluZyBvbiBob3cgZmFzdCByZXNvdXJjZXMgYXJlIGxvYWRlZC5cblx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1ByaXNtSlMvcHJpc20vaXNzdWVzLzIxMDJcblx0XHR2YXIgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG5cdFx0aWYgKHJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJyB8fCByZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnICYmIHNjcmlwdCAmJiBzY3JpcHQuZGVmZXIpIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2ssIDE2KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gXztcblxufShfc2VsZikpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmlzbTtcbn1cblxuLy8gaGFjayBmb3IgY29tcG9uZW50cyB0byB3b3JrIGNvcnJlY3RseSBpbiBub2RlLmpzXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Z2xvYmFsLlByaXNtID0gUHJpc207XG59XG5cbi8vIHNvbWUgYWRkaXRpb25hbCBkb2N1bWVudGF0aW9uL3R5cGVzXG5cbi8qKlxuICogVGhlIGV4cGFuc2lvbiBvZiBhIHNpbXBsZSBgUmVnRXhwYCBsaXRlcmFsIHRvIHN1cHBvcnQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLlxuICpcbiAqIEB0eXBlZGVmIEdyYW1tYXJUb2tlblxuICogQHByb3BlcnR5IHtSZWdFeHB9IHBhdHRlcm4gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBvZiB0aGUgdG9rZW4uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtsb29rYmVoaW5kPWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIGZpcnN0IGNhcHR1cmluZyBncm91cCBvZiBgcGF0dGVybmAgd2lsbCAoZWZmZWN0aXZlbHkpXG4gKiBiZWhhdmUgYXMgYSBsb29rYmVoaW5kIGdyb3VwIG1lYW5pbmcgdGhhdCB0aGUgY2FwdHVyZWQgdGV4dCB3aWxsIG5vdCBiZSBwYXJ0IG9mIHRoZSBtYXRjaGVkIHRleHQgb2YgdGhlIG5ldyB0b2tlbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2dyZWVkeT1mYWxzZV0gV2hldGhlciB0aGUgdG9rZW4gaXMgZ3JlZWR5LlxuICogQHByb3BlcnR5IHtzdHJpbmd8c3RyaW5nW119IFthbGlhc10gQW4gb3B0aW9uYWwgYWxpYXMgb3IgbGlzdCBvZiBhbGlhc2VzLlxuICogQHByb3BlcnR5IHtHcmFtbWFyfSBbaW5zaWRlXSBUaGUgbmVzdGVkIGdyYW1tYXIgb2YgdGhpcyB0b2tlbi5cbiAqXG4gKiBUaGUgYGluc2lkZWAgZ3JhbW1hciB3aWxsIGJlIHVzZWQgdG8gdG9rZW5pemUgdGhlIHRleHQgdmFsdWUgb2YgZWFjaCB0b2tlbiBvZiB0aGlzIGtpbmQuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBtYWtlIG5lc3RlZCBhbmQgZXZlbiByZWN1cnNpdmUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMuXG4gKlxuICogTm90ZTogVGhpcyBjYW4gY2F1c2UgaW5maW5pdGUgcmVjdXJzaW9uLiBCZSBjYXJlZnVsIHdoZW4geW91IGVtYmVkIGRpZmZlcmVudCBsYW5ndWFnZXMgb3IgZXZlbiB0aGUgc2FtZSBsYW5ndWFnZSBpbnRvXG4gKiBlYWNoIGFub3RoZXIuXG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBHcmFtbWFyXG4gKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgUmVnRXhwIHwgR3JhbW1hclRva2VuIHwgQXJyYXk8UmVnRXhwIHwgR3JhbW1hclRva2VuPj59XG4gKiBAcHJvcGVydHkge0dyYW1tYXJ9IFtyZXN0XSBBbiBvcHRpb25hbCBncmFtbWFyIG9iamVjdCB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhpcyBncmFtbWFyLlxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB3aGljaCB3aWxsIGludm9rZWQgYWZ0ZXIgYW4gZWxlbWVudCB3YXMgc3VjY2Vzc2Z1bGx5IGhpZ2hsaWdodGVkLlxuICpcbiAqIEBjYWxsYmFjayBIaWdobGlnaHRDYWxsYmFja1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHN1Y2Nlc3NmdWxseSBoaWdobGlnaHRlZC5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEhvb2tDYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBlbnYgVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBvZiB0aGUgaG9vay5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1tYXJrdXAuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCA9IHtcblx0J2NvbW1lbnQnOiB7XG5cdFx0cGF0dGVybjogLzwhLS0oPzooPyE8IS0tKVtcXHNcXFNdKSo/LS0+Lyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3Byb2xvZyc6IHtcblx0XHRwYXR0ZXJuOiAvPFxcP1tcXHNcXFNdKz9cXD8+Lyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2RvY3R5cGUnOiB7XG5cdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtZG9jdHlwZWRlY2xcblx0XHRwYXR0ZXJuOiAvPCFET0NUWVBFKD86W14+XCInW1xcXV18XCJbXlwiXSpcInwnW14nXSonKSsoPzpcXFsoPzpbXjxcIidcXF1dfFwiW15cIl0qXCJ8J1teJ10qJ3w8KD8hIS0tKXw8IS0tKD86W14tXXwtKD8hLT4pKSotLT4pKlxcXVxccyopPz4vaSxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnaW50ZXJuYWwtc3Vic2V0Jzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKF5bXlxcW10qXFxbKVtcXHNcXFNdKyg/PVxcXT4kKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiBudWxsIC8vIHNlZSBiZWxvd1xuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9cIlteXCJdKlwifCdbXiddKicvLFxuXHRcdFx0XHRncmVlZHk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXjwhfD4kfFtbXFxdXS8sXG5cdFx0XHQnZG9jdHlwZS10YWcnOiAvXkRPQ1RZUEUvaSxcblx0XHRcdCduYW1lJzogL1teXFxzPD4nXCJdKy9cblx0XHR9XG5cdH0sXG5cdCdjZGF0YSc6IHtcblx0XHRwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCd0YWcnOiB7XG5cdFx0cGF0dGVybjogLzxcXC8/KD8hXFxkKVteXFxzPlxcLz0kPCVdKyg/Olxccyg/OlxccypbXlxccz5cXC89XSsoPzpcXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSl8KD89W1xccy8+XSkpKSspP1xccypcXC8/Pi8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RhZyc6IHtcblx0XHRcdFx0cGF0dGVybjogL148XFwvP1teXFxzPlxcL10rLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL148XFwvPy8sXG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzcGVjaWFsLWF0dHInOiBbXSxcblx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKS8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL149Lyxcblx0XHRcdFx0XHRcdFx0YWxpYXM6ICdhdHRyLWVxdWFscydcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQvXCJ8Jy9cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXFwvPz4vLFxuXHRcdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL1teXFxzPlxcL10rLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9LFxuXHQnZW50aXR5JzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8mW1xcZGEtel17MSw4fTsvaSxcblx0XHRcdGFsaWFzOiAnbmFtZWQtZW50aXR5J1xuXHRcdH0sXG5cdFx0LyYjeD9bXFxkYS1mXXsxLDh9Oy9pXG5cdF1cbn07XG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddLmluc2lkZVsnZW50aXR5J10gPVxuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwWydlbnRpdHknXTtcblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ2RvY3R5cGUnXS5pbnNpZGVbJ2ludGVybmFsLXN1YnNldCddLmluc2lkZSA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cbi8vIFBsdWdpbiB0byBtYWtlIGVudGl0eSB0aXRsZSBzaG93IHRoZSByZWFsIGVudGl0eSwgaWRlYSBieSBSb21hbiBLb21hcm92XG5QcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbiAoZW52KSB7XG5cblx0aWYgKGVudi50eXBlID09PSAnZW50aXR5Jykge1xuXHRcdGVudi5hdHRyaWJ1dGVzWyd0aXRsZSddID0gZW52LmNvbnRlbnQucmVwbGFjZSgvJmFtcDsvLCAnJicpO1xuXHR9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLCAnYWRkSW5saW5lZCcsIHtcblx0LyoqXG5cdCAqIEFkZHMgYW4gaW5saW5lZCBsYW5ndWFnZSB0byBtYXJrdXAuXG5cdCAqXG5cdCAqIEFuIGV4YW1wbGUgb2YgYW4gaW5saW5lZCBsYW5ndWFnZSBpcyBDU1Mgd2l0aCBgPHN0eWxlPmAgdGFncy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgVGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBpbmxpbmVkIGxhbmd1YWdlLiBUaGlzIG5hbWUgd2lsbCBiZSB0cmVhdGVkIGFzXG5cdCAqIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG5cdCAqIEBleGFtcGxlXG5cdCAqIGFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXHQgKi9cblx0dmFsdWU6IGZ1bmN0aW9uIGFkZElubGluZWQodGFnTmFtZSwgbGFuZykge1xuXHRcdHZhciBpbmNsdWRlZENkYXRhSW5zaWRlID0ge307XG5cdFx0aW5jbHVkZWRDZGF0YUluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuXHRcdFx0cGF0dGVybjogLyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHR9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2NkYXRhJ10gPSAvXjwhXFxbQ0RBVEFcXFt8XFxdXFxdPiQvaTtcblxuXHRcdHZhciBpbnNpZGUgPSB7XG5cdFx0XHQnaW5jbHVkZWQtY2RhdGEnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT4vaSxcblx0XHRcdFx0aW5zaWRlOiBpbmNsdWRlZENkYXRhSW5zaWRlXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRpbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHR9O1xuXG5cdFx0dmFyIGRlZiA9IHt9O1xuXHRcdGRlZlt0YWdOYW1lXSA9IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKDxfX1tePl0qPikoPzo8IVxcW0NEQVRBXFxbKD86W15cXF1dfFxcXSg/IVxcXT4pKSpcXF1cXF0+fCg/ITwhXFxbQ0RBVEFcXFspW1xcc1xcU10pKj8oPz08XFwvX18+KS8uc291cmNlLnJlcGxhY2UoL19fL2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRhZ05hbWU7IH0pLCAnaScpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZTogaW5zaWRlXG5cdFx0fTtcblxuXHRcdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjZGF0YScsIGRlZik7XG5cdH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLCAnYWRkQXR0cmlidXRlJywge1xuXHQvKipcblx0ICogQWRkcyBhbiBwYXR0ZXJuIHRvIGhpZ2hsaWdodCBsYW5ndWFnZXMgZW1iZWRkZWQgaW4gSFRNTCBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYHN0eWxlYCBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXR0ck5hbWUgVGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBpbmxpbmVkIGxhbmd1YWdlLiBUaGlzIG5hbWUgd2lsbCBiZSB0cmVhdGVkIGFzXG5cdCAqIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG5cdCAqIEBleGFtcGxlXG5cdCAqIGFkZEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3NzJyk7XG5cdCAqL1xuXHR2YWx1ZTogZnVuY3Rpb24gKGF0dHJOYW1lLCBsYW5nKSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuaW5zaWRlWydzcGVjaWFsLWF0dHInXS5wdXNoKHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cChcblx0XHRcdFx0LyhefFtcIidcXHNdKS8uc291cmNlICsgJyg/OicgKyBhdHRyTmFtZSArICcpJyArIC9cXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSkvLnNvdXJjZSxcblx0XHRcdFx0J2knXG5cdFx0XHQpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnYXR0ci1uYW1lJzogL15bXlxccz1dKy8sXG5cdFx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC89W1xcc1xcU10rLyxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCd2YWx1ZSc6IHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogLyhePVxccyooW1wiJ118KD8hW1wiJ10pKSlcXFNbXFxzXFxTXSooPz1cXDIkKS8sXG5cdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGFsaWFzOiBbbGFuZywgJ2xhbmd1YWdlLScgKyBsYW5nXSxcblx0XHRcdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXj0vLFxuXHRcdFx0XHRcdFx0XHRcdGFsaWFzOiAnYXR0ci1lcXVhbHMnXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdC9cInwnL1xuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmh0bWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLm1hdGhtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMuc3ZnID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblxuUHJpc20ubGFuZ3VhZ2VzLnhtbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KTtcblByaXNtLmxhbmd1YWdlcy5zc21sID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcblByaXNtLmxhbmd1YWdlcy5hdG9tID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcblByaXNtLmxhbmd1YWdlcy5yc3MgPSBQcmlzbS5sYW5ndWFnZXMueG1sO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY3NzLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgc3RyaW5nID0gLyg/OlwiKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cIlxcXFxcXHJcXG5dKSpcInwnKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W14nXFxcXFxcclxcbl0pKicpLztcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzID0ge1xuXHRcdCdjb21tZW50JzogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuXHRcdCdhdHJ1bGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvQFtcXHctXSg/OlteO3tcXHNdfFxccysoPyFbXFxze10pKSooPzo7fCg/PVxccypcXHspKS8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3J1bGUnOiAvXkBbXFx3LV0rLyxcblx0XHRcdFx0J3NlbGVjdG9yLWZ1bmN0aW9uLWFyZ3VtZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXFxic2VsZWN0b3JcXHMqXFwoXFxzKig/IVtcXHMpXSkpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCkpKyg/PVxccypcXCkpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGFsaWFzOiAnc2VsZWN0b3InXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdrZXl3b3JkJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXnxbXlxcdy1dKSg/OmFuZHxub3R8b25seXxvcikoPyFbXFx3LV0pLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU2VlIHJlc3QgYmVsb3dcblx0XHRcdH1cblx0XHR9LFxuXHRcdCd1cmwnOiB7XG5cdFx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ1xcXFxidXJsXFxcXCgoPzonICsgc3RyaW5nLnNvdXJjZSArICd8JyArIC8oPzpbXlxcXFxcXHJcXG4oKVwiJ118XFxcXFtcXHNcXFNdKSovLnNvdXJjZSArICcpXFxcXCknLCAnaScpLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdmdW5jdGlvbic6IC9edXJsL2ksXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFwofFxcKSQvLFxuXHRcdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnXicgKyBzdHJpbmcuc291cmNlICsgJyQnKSxcblx0XHRcdFx0XHRhbGlhczogJ3VybCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3NlbGVjdG9yJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCcoXnxbe31cXFxcc10pW157fVxcXFxzXSg/Oltee307XCJcXCdcXFxcc118XFxcXHMrKD8hW1xcXFxze10pfCcgKyBzdHJpbmcuc291cmNlICsgJykqKD89XFxcXHMqXFxcXHspJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogc3RyaW5nLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQncHJvcGVydHknOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14tXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVstX2EtelxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVstXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxccyo6KS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J2ltcG9ydGFudCc6IC8haW1wb3J0YW50XFxiL2ksXG5cdFx0J2Z1bmN0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLWEtejAtOV0pWy1hLXowLTldKyg/PVxcKCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bKCl7fTs6LF0vXG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuY3NzO1xuXG5cdHZhciBtYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRpZiAobWFya3VwKSB7XG5cdFx0bWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblx0XHRtYXJrdXAudGFnLmFkZEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3NzJyk7XG5cdH1cblxufShQcmlzbSkpO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY2xpa2UuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmNsaWtlID0ge1xuXHQnY29tbWVudCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3x0cmFpdHxpbnN0YW5jZW9mfG5ldylcXHMrfFxcYmNhdGNoXFxzK1xcKClbXFx3LlxcXFxdKy9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWy5cXFxcXS9cblx0XHR9XG5cdH0sXG5cdCdrZXl3b3JkJzogL1xcYig/OmlmfGVsc2V8d2hpbGV8ZG98Zm9yfHJldHVybnxpbnxpbnN0YW5jZW9mfGZ1bmN0aW9ufG5ld3x0cnl8dGhyb3d8Y2F0Y2h8ZmluYWxseXxudWxsfGJyZWFrfGNvbnRpbnVlKVxcYi8sXG5cdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0J2Z1bmN0aW9uJzogL1xcYlxcdysoPz1cXCgpLyxcblx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdvcGVyYXRvcic6IC9bPD5dPT98WyE9XT0/PT98LS0/fFxcK1xcKz98JiY/fFxcfFxcfD98Wz8qL35eJV0vLFxuXHQncHVuY3R1YXRpb24nOiAvW3t9W1xcXTsoKSwuOl0vXG59O1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tamF2YXNjcmlwdC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQnY2xhc3MtbmFtZSc6IFtcblx0XHRQcmlzbS5sYW5ndWFnZXMuY2xpa2VbJ2NsYXNzLW5hbWUnXSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVtfJEEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxcLig/OnByb3RvdHlwZXxjb25zdHJ1Y3RvcikpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdrZXl3b3JkJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86XnxcXH0pXFxzKiljYXRjaFxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14uXXxcXC5cXC5cXC5cXHMqKVxcYig/OmFzfGFzc2VydCg/PVxccypcXHspfGFzeW5jKD89XFxzKig/OmZ1bmN0aW9uXFxifFxcKHxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5KD89XFxzKig/Olxce3wkKSl8Zm9yfGZyb20oPz1cXHMqKD86WydcIl18JCkpfGZ1bmN0aW9ufCg/OmdldHxzZXQpKD89XFxzKig/OlsjXFxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XSxcblx0Ly8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG5cdCdmdW5jdGlvbic6IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcblx0J251bWJlcic6IC9cXGIoPzooPzowW3hYXSg/OltcXGRBLUZhLWZdKD86X1tcXGRBLUZhLWZdKT8pK3wwW2JCXSg/OlswMV0oPzpfWzAxXSk/KSt8MFtvT10oPzpbMC03XSg/Ol9bMC03XSk/KSspbj98KD86XFxkKD86X1xcZCk/KStufE5hTnxJbmZpbml0eSlcXGJ8KD86XFxiKD86XFxkKD86X1xcZCk/KStcXC4/KD86XFxkKD86X1xcZCk/KSp8XFxCXFwuKD86XFxkKD86X1xcZCk/KSspKD86W0VlXVsrLV0/KD86XFxkKD86X1xcZCk/KSspPy8sXG5cdCdvcGVyYXRvcic6IC8tLXxcXCtcXCt8XFwqXFwqPT98PT58JiY9P3xcXHxcXHw9P3xbIT1dPT18PDw9P3w+Pj4/PT98Wy0rKi8lJnxeIT08Pl09P3xcXC57M318XFw/XFw/PT98XFw/XFwuP3xbfjpdL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydjbGFzcy1uYW1lJ11bMF0ucGF0dGVybiA9IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfG5ldylcXHMrKVtcXHcuXFxcXF0rLztcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdrZXl3b3JkJywge1xuXHQncmVnZXgnOiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1kdXBlLWNoYXJhY3RlcnMtY2hhcmFjdGVyLWNsYXNzXG5cdFx0cGF0dGVybjogLygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc118XFxiKD86cmV0dXJufHlpZWxkKSlcXHMqKVxcLyg/OlxcWyg/OlteXFxdXFxcXFxcclxcbl18XFxcXC4pKlxcXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2RnaW15dXNdezAsN30oPz0oPzpcXHN8XFwvXFwqKD86W14qXXxcXCooPyFcXC8pKSpcXCpcXC8pKig/OiR8W1xcclxcbiwuOzp9KVxcXV18XFwvXFwvKSkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3JlZ2V4LXNvdXJjZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL14oXFwvKVtcXHNcXFNdKyg/PVxcL1thLXpdKiQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1yZWdleCcsXG5cdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnJlZ2V4XG5cdFx0XHR9LFxuXHRcdFx0J3JlZ2V4LWRlbGltaXRlcic6IC9eXFwvfFxcLyQvLFxuXHRcdFx0J3JlZ2V4LWZsYWdzJzogL15bYS16XSskLyxcblx0XHR9XG5cdH0sXG5cdC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcblx0J2Z1bmN0aW9uLXZhcmlhYmxlJzoge1xuXHRcdHBhdHRlcm46IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfCg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSopXFxzKj0+KSkvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdwYXJhbWV0ZXInOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhmdW5jdGlvbig/OlxccysoPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKT9cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoW14oKV0qXFwpKSsoPz1cXHMqXFwpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKSg/IVxccylbXyRhLXpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqPT4pL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqPT4pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/OlxcYnxcXHN8XikoPyEoPzphc3xhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZCkoPyFbJFxcd1xceEEwLVxcdUZGRkZdKSkoPzooPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqXFxzKilcXChcXHMqfFxcXVxccypcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqXFx7KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH1cblx0XSxcblx0J2NvbnN0YW50JzogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdzdHJpbmcnLCB7XG5cdCdoYXNoYmFuZyc6IHtcblx0XHRwYXR0ZXJuOiAvXiMhLiovLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRhbGlhczogJ2NvbW1lbnQnXG5cdH0sXG5cdCd0ZW1wbGF0ZS1zdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118XFwkXFx7KD86W157fV18XFx7KD86W157fV18XFx7W159XSpcXH0pKlxcfSkrXFx9fCg/IVxcJFxceylbXlxcXFxgXSkqYC8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RlbXBsYXRlLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXmB8YCQvLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKVxcJFxceyg/Oltee31dfFxceyg/Oltee31dfFxce1tefV0qXFx9KSpcXH0pK1xcfS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXCRcXHt8XFx9JC8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH1cblx0fVxufSk7XG5cbmlmIChQcmlzbS5sYW5ndWFnZXMubWFya3VwKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmFkZElubGluZWQoJ3NjcmlwdCcsICdqYXZhc2NyaXB0Jyk7XG5cblx0Ly8gYWRkIGF0dHJpYnV0ZSBzdXBwb3J0IGZvciBhbGwgRE9NIGV2ZW50cy5cblx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzI1N0YW5kYXJkX2V2ZW50c1xuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRBdHRyaWJ1dGUoXG5cdFx0L29uKD86YWJvcnR8Ymx1cnxjaGFuZ2V8Y2xpY2t8Y29tcG9zaXRpb24oPzplbmR8c3RhcnR8dXBkYXRlKXxkYmxjbGlja3xlcnJvcnxmb2N1cyg/OmlufG91dCk/fGtleSg/OmRvd258dXApfGxvYWR8bW91c2UoPzpkb3dufGVudGVyfGxlYXZlfG1vdmV8b3V0fG92ZXJ8dXApfHJlc2V0fHJlc2l6ZXxzY3JvbGx8c2VsZWN0fHNsb3RjaGFuZ2V8c3VibWl0fHVubG9hZHx3aGVlbCkvLnNvdXJjZSxcblx0XHQnamF2YXNjcmlwdCdcblx0KTtcbn1cblxuUHJpc20ubGFuZ3VhZ2VzLmpzID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1maWxlLWhpZ2hsaWdodC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9tYXRjaGVzI1BvbHlmaWxsXG5cdGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuXHRcdEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cdH1cblxuXHR2YXIgTE9BRElOR19NRVNTQUdFID0gJ0xvYWRpbmfigKYnO1xuXHR2YXIgRkFJTFVSRV9NRVNTQUdFID0gZnVuY3Rpb24gKHN0YXR1cywgbWVzc2FnZSkge1xuXHRcdHJldHVybiAn4pyWIEVycm9yICcgKyBzdGF0dXMgKyAnIHdoaWxlIGZldGNoaW5nIGZpbGU6ICcgKyBtZXNzYWdlO1xuXHR9O1xuXHR2YXIgRkFJTFVSRV9FTVBUWV9NRVNTQUdFID0gJ+KcliBFcnJvcjogRmlsZSBkb2VzIG5vdCBleGlzdCBvciBpcyBlbXB0eSc7XG5cblx0dmFyIEVYVEVOU0lPTlMgPSB7XG5cdFx0J2pzJzogJ2phdmFzY3JpcHQnLFxuXHRcdCdweSc6ICdweXRob24nLFxuXHRcdCdyYic6ICdydWJ5Jyxcblx0XHQncHMxJzogJ3Bvd2Vyc2hlbGwnLFxuXHRcdCdwc20xJzogJ3Bvd2Vyc2hlbGwnLFxuXHRcdCdzaCc6ICdiYXNoJyxcblx0XHQnYmF0JzogJ2JhdGNoJyxcblx0XHQnaCc6ICdjJyxcblx0XHQndGV4JzogJ2xhdGV4J1xuXHR9O1xuXG5cdHZhciBTVEFUVVNfQVRUUiA9ICdkYXRhLXNyYy1zdGF0dXMnO1xuXHR2YXIgU1RBVFVTX0xPQURJTkcgPSAnbG9hZGluZyc7XG5cdHZhciBTVEFUVVNfTE9BREVEID0gJ2xvYWRlZCc7XG5cdHZhciBTVEFUVVNfRkFJTEVEID0gJ2ZhaWxlZCc7XG5cblx0dmFyIFNFTEVDVE9SID0gJ3ByZVtkYXRhLXNyY106bm90KFsnICsgU1RBVFVTX0FUVFIgKyAnPVwiJyArIFNUQVRVU19MT0FERUQgKyAnXCJdKSdcblx0XHQrICc6bm90KFsnICsgU1RBVFVTX0FUVFIgKyAnPVwiJyArIFNUQVRVU19MT0FESU5HICsgJ1wiXSknO1xuXG5cdHZhciBsYW5nID0gL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2k7XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIFByaXNtIGBsYW5ndWFnZS14eHh4YCBvciBgbGFuZy14eHh4YCBjbGFzcyB0byB0aGUgZ2l2ZW4gbGFuZ3VhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0TGFuZ3VhZ2VDbGFzcyhlbGVtZW50LCBsYW5ndWFnZSkge1xuXHRcdHZhciBjbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZTtcblx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShsYW5nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblx0fVxuXG5cblx0UHJpc20uaG9va3MuYWRkKCdiZWZvcmUtaGlnaGxpZ2h0YWxsJywgZnVuY3Rpb24gKGVudikge1xuXHRcdGVudi5zZWxlY3RvciArPSAnLCAnICsgU0VMRUNUT1I7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXNhbml0eS1jaGVjaycsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgcHJlID0gLyoqIEB0eXBlIHtIVE1MUHJlRWxlbWVudH0gKi8gKGVudi5lbGVtZW50KTtcblx0XHRpZiAocHJlLm1hdGNoZXMoU0VMRUNUT1IpKSB7XG5cdFx0XHRlbnYuY29kZSA9ICcnOyAvLyBmYXN0LXBhdGggdGhlIHdob2xlIHRoaW5nIGFuZCBnbyB0byBjb21wbGV0ZVxuXG5cdFx0XHRwcmUuc2V0QXR0cmlidXRlKFNUQVRVU19BVFRSLCBTVEFUVVNfTE9BRElORyk7IC8vIG1hcmsgYXMgbG9hZGluZ1xuXG5cdFx0XHQvLyBhZGQgY29kZSBlbGVtZW50IHdpdGggbG9hZGluZyBtZXNzYWdlXG5cdFx0XHR2YXIgY29kZSA9IHByZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdDT0RFJykpO1xuXHRcdFx0Y29kZS50ZXh0Q29udGVudCA9IExPQURJTkdfTUVTU0FHRTtcblxuXHRcdFx0dmFyIHNyYyA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG5cblx0XHRcdHZhciBsYW5ndWFnZSA9IGVudi5sYW5ndWFnZTtcblx0XHRcdGlmIChsYW5ndWFnZSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdC8vIHRoZSBsYW5ndWFnZSBtaWdodCBiZSAnbm9uZScgYmVjYXVzZSB0aGVyZSBpcyBubyBsYW5ndWFnZSBzZXQ7XG5cdFx0XHRcdC8vIGluIHRoaXMgY2FzZSwgd2Ugd2FudCB0byB1c2UgdGhlIGV4dGVuc2lvbiBhcyB0aGUgbGFuZ3VhZ2Vcblx0XHRcdFx0dmFyIGV4dGVuc2lvbiA9ICgvXFwuKFxcdyspJC8uZXhlYyhzcmMpIHx8IFssICdub25lJ10pWzFdO1xuXHRcdFx0XHRsYW5ndWFnZSA9IEVYVEVOU0lPTlNbZXh0ZW5zaW9uXSB8fCBleHRlbnNpb247XG5cdFx0XHR9XG5cblx0XHRcdC8vIHNldCBsYW5ndWFnZSBjbGFzc2VzXG5cdFx0XHRzZXRMYW5ndWFnZUNsYXNzKGNvZGUsIGxhbmd1YWdlKTtcblx0XHRcdHNldExhbmd1YWdlQ2xhc3MocHJlLCBsYW5ndWFnZSk7XG5cblx0XHRcdC8vIHByZWxvYWQgdGhlIGxhbmd1YWdlXG5cdFx0XHR2YXIgYXV0b2xvYWRlciA9IFByaXNtLnBsdWdpbnMuYXV0b2xvYWRlcjtcblx0XHRcdGlmIChhdXRvbG9hZGVyKSB7XG5cdFx0XHRcdGF1dG9sb2FkZXIubG9hZExhbmd1YWdlcyhsYW5ndWFnZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGxvYWQgZmlsZVxuXHRcdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdFx0eGhyLm9wZW4oJ0dFVCcsIHNyYywgdHJ1ZSk7XG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuXHRcdFx0XHRcdGlmICh4aHIuc3RhdHVzIDwgNDAwICYmIHhoci5yZXNwb25zZVRleHQpIHtcblx0XHRcdFx0XHRcdC8vIG1hcmsgYXMgbG9hZGVkXG5cdFx0XHRcdFx0XHRwcmUuc2V0QXR0cmlidXRlKFNUQVRVU19BVFRSLCBTVEFUVVNfTE9BREVEKTtcblxuXHRcdFx0XHRcdFx0Ly8gaGlnaGxpZ2h0IGNvZGVcblx0XHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHRcdFx0UHJpc20uaGlnaGxpZ2h0RWxlbWVudChjb2RlKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBtYXJrIGFzIGZhaWxlZFxuXHRcdFx0XHRcdFx0cHJlLnNldEF0dHJpYnV0ZShTVEFUVVNfQVRUUiwgU1RBVFVTX0ZBSUxFRCk7XG5cblx0XHRcdFx0XHRcdGlmICh4aHIuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0gRkFJTFVSRV9NRVNTQUdFKHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSBGQUlMVVJFX0VNUFRZX01FU1NBR0U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0eGhyLnNlbmQobnVsbCk7XG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQgPSB7XG5cdFx0LyoqXG5cdFx0ICogRXhlY3V0ZXMgdGhlIEZpbGUgSGlnaGxpZ2h0IHBsdWdpbiBmb3IgYWxsIG1hdGNoaW5nIGBwcmVgIGVsZW1lbnRzIHVuZGVyIHRoZSBnaXZlbiBjb250YWluZXIuXG5cdFx0ICpcblx0XHQgKiBOb3RlOiBFbGVtZW50cyB3aGljaCBhcmUgYWxyZWFkeSBsb2FkZWQgb3IgY3VycmVudGx5IGxvYWRpbmcgd2lsbCBub3QgYmUgdG91Y2hlZCBieSB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gW2NvbnRhaW5lcj1kb2N1bWVudF1cblx0XHQgKi9cblx0XHRoaWdobGlnaHQ6IGZ1bmN0aW9uIGhpZ2hsaWdodChjb250YWluZXIpIHtcblx0XHRcdHZhciBlbGVtZW50cyA9IChjb250YWluZXIgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1IpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgKGVsZW1lbnQgPSBlbGVtZW50c1tpKytdKTspIHtcblx0XHRcdFx0UHJpc20uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0dmFyIGxvZ2dlZCA9IGZhbHNlO1xuXHQvKiogQGRlcHJlY2F0ZWQgVXNlIGBQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQuaGlnaGxpZ2h0YCBpbnN0ZWFkLiAqL1xuXHRQcmlzbS5maWxlSGlnaGxpZ2h0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICghbG9nZ2VkKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1ByaXNtLmZpbGVIaWdobGlnaHQgaXMgZGVwcmVjYXRlZC4gVXNlIGBQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQuaGlnaGxpZ2h0YCBpbnN0ZWFkLicpO1xuXHRcdFx0bG9nZ2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0UHJpc20ucGx1Z2lucy5maWxlSGlnaGxpZ2h0LmhpZ2hsaWdodC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHR9O1xuXG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==