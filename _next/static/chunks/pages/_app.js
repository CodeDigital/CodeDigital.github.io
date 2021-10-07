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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  font-family: Monaco, monospace;\n}\n\nbody {\n  background-color: #222222;\n  font-size: 14px;\n}\n\ninput[type=search]::-webkit-search-cancel-button {\n  display: none;\n}\n\ninput[type=search]::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #222222;\n  color: #FDFFFC;\n  font-family: Monaco, monospace;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n}\n\na {\n  color: white;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  cursor: pointer;\n}\n\na:hover {\n  text-shadow: 0 0 5px #FDFFFC;\n}\n\ncode {\n  background-color: #393E41;\n  padding: 3px;\n  border-radius: 5px;\n}\n\n.header {\n  font-family: Monaco, monospace;\n  background-color: #393E41;\n  width: 100%;\n  height: 75px;\n}\n\n.header ::slotted {\n  float: left;\n}\n\n.header img {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  height: 65px;\n  margin: 5px;\n}\n\n.header h1 {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.anniversary {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #FF2277), color-stop(100%, aqua));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #FF2277 0%, aqua 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #FF2277 0%, aqua 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffff\", endColorstr=\"#ff00ff\",GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.phoenix {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #C52437), color-stop(100%, #F7E27C));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.vhs-color {\n  text-shadow: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3.5px 0px;\n}\n\n.tertiary-text-color {\n  color: #FF2277;\n}\n\n.main-gradient-text {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #C52437), color-stop(100%, #F7E27C));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.main-body {\n  top: 75px;\n  height: -webkit-calc(100% - 75px);\n  height: calc(100% - 75px);\n}\n\n.popup {\n  display: block;\n  position: absolute;\n  z-index: 101;\n  border: none;\n  top: 75px;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  text-align: center;\n}\n\n.popup-button {\n  display: block;\n  position: absolute;\n  z-index: 101;\n  border: none;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  background: black;\n  background: transparent\\9 ;\n  background: rgba(0, 0, 0, 0.8);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#22000000,endColorstr=#22000000);\n  zoom: 1;\n  width: 100vw;\n}\n\n.popup-container {\n  z-index: 110;\n  display: block;\n  position: absolute;\n  width: 100vw;\n  text-align: center;\n  padding: 50px 0px;\n  pointer-events: none;\n}\n\n.popup-div {\n  display: block;\n  font-size: larger;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 500px;\n  -webkit-box-shadow: 10px 10px 0px #FF2277;\n          box-shadow: 10px 10px 0px #FF2277;\n  color: #FDFFFC;\n  background-color: #222222;\n  padding: 20px 50px;\n  pointer-events: all;\n}\n\n.popup h1 {\n  text-align: center;\n}\n\n.popup code {\n  border-radius: 0;\n  background-color: #FF2277;\n  -webkit-box-shadow: inset 0 0 10px #393E41;\n  box-shadow: inset 0 0 10px #393E41;\n}\n\n.popup > div small {\n  text-align: center;\n  display: block;\n  color: #FF2277;\n  margin-top: 20px;\n}\n\n.share-button-div {\n  text-align: center;\n}\n\n.share-button-div > * {\n  margin: 5px;\n  -webkit-transition: ease-in 0.3s;\n  transition: ease-in 0.3s;\n}\n\n.share-button-div > *:hover .share-button-icon {\n  -webkit-box-shadow: #FF2277 3px 2px;\n          box-shadow: #FF2277 3px 2px;\n}\n\n.share-button-icon {\n  border-radius: 1000px;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.share-count-wrapper > * {\n  margin-left: -20px;\n  margin-top: -5px;\n  padding: 3px 6px;\n  background-color: #393E41;\n  color: #FDFFFC;\n  border-radius: 8px;\n}\n\n.share-link-copy {\n  padding: 7.5px 10px;\n  padding-top: 7;\n  padding-bottom: 8;\n  background-color: #FF2277;\n  color: #FDFFFC;\n  border: none;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.share-link {\n  text-align: center;\n  width: 320px;\n  padding: 7.5px;\n  text-overflow: ellipsis;\n  border: none;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.navigator {\n  background-color: #FF2277;\n  height: 35px;\n  top: 75px;\n  width: 100%;\n  margin: 0;\n}\n\n.navigator img {\n  display: block;\n  height: 25px;\n  margin: 5px;\n  right: 5px;\n  pointer-events: none;\n  position: absolute;\n}\n\n.navigator input {\n  -webkit-box-shadow: inset 0 0 10px #393E41;\n  box-shadow: inset 0 0 10px #393E41;\n  font-size: 15px;\n  background: #FF2277;\n  border: none;\n  color: #FDFFFC;\n  width: -webkit-calc(100% - 45px);\n  width: calc(100% - 45px);\n  height: 100%;\n  padding: 0 10px;\n  padding-right: 35px;\n}\n\n.navigator input::-webkit-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input::-moz-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input:-ms-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input::placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator button {\n  -webkit-transition: ease-in 0.3s;\n  transition: ease-in 0.3s;\n  color: #FDFFFC;\n  display: block;\n  position: absolute;\n  height: 30px;\n  background-color: #222222;\n  margin: 1.25px;\n  right: 45px;\n  border: none;\n  padding: 8px 8px;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.navigator button:hover {\n  -webkit-box-shadow: #393E41 7.5px 2.5px;\n          box-shadow: #393E41 7.5px 2.5px;\n}\n\n.navigator button input {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  border: none;\n  color: #FDFFFC;\n  width: 15px;\n  height: 15px;\n  float: left;\n}\n\n.navigator button label {\n  margin-top: 0px;\n  margin-left: 8px;\n  float: right;\n}\n\n.project-list {\n  margin: 0;\n  height: -webkit-calc(100vh - 35px - 75px - 70px);\n  height: calc(100vh - 35px - 75px - 70px);\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.link-disabled {\n  display: none;\n}\n\n.project-thumbnail {\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n          box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n  height: 250px;\n  width: 250px;\n  display: inline-table;\n  text-align: right;\n  position: relative;\n  padding: 0;\n  margin: 30px;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.project-thumbnail:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n          box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n  text-shadow: none;\n}\n\n.project-thumbnail:last-of-type {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  margin-bottom: 50px;\n}\n\n.project-thumbnail div {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  text-align: center;\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.project-thumbnail div * {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  padding: 0px 20px;\n}\n\n.project-thumbnail div p {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.project-thumbnail small {\n  text-align: right;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  display: block;\n  position: absolute;\n  margin: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  right: 0;\n  bottom: 0;\n}\n\n.post-thumbnail {\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n          box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n  height: 250px;\n  width: 250px;\n  display: inline-table;\n  text-align: right;\n  position: relative;\n  padding: 0;\n  margin: 30px;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.post-thumbnail:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n          box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n  text-shadow: none;\n}\n\n.post-thumbnail:last-of-type {\n  margin-bottom: 50px;\n}\n\n.post-thumbnail div {\n  text-align: center;\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.post-thumbnail div * {\n  padding: 0px 20px;\n}\n\n.post-thumbnail div p {\n  margin-top: 10px;\n}\n\n.post-thumbnail small {\n  text-align: right;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  display: block;\n  position: absolute;\n  margin: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  right: 0;\n  bottom: 0;\n}\n\n.project-page {\n  margin: 0;\n  padding: 0;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  width: 100%;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.close-icon {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  margin: 5px;\n  position: absolute;\n  float: right;\n  z-index: 100;\n  right: 35px;\n  margin-top: 15px;\n  -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n  filter: drop-shadow(6px 5px 5px #FF2277);\n  cursor: pointer;\n}\n\n.close-icon:hover {\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.share-icon {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  margin: 5px;\n  position: absolute;\n  float: right;\n  right: 90px;\n  z-index: 100;\n  margin-top: 15px;\n  -webkit-filter: drop-shadow(6px 5px 2px #FF2277);\n  filter: drop-shadow(6px 5px 2px #FF2277);\n  cursor: pointer;\n}\n\n.share-icon:hover {\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n}\n\n.about-h1 {\n  margin: 10px;\n  margin-bottom: 20px;\n}\n\n.about-h2 {\n  margin: 10px;\n  margin-bottom: -5px;\n  text-align: left;\n}\n\n.about-p {\n  text-align: left;\n  margin-bottom: -7.5px;\n}\n\n.about-me {\n  margin-top: 10px;\n  background-color: #FF2277;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n  padding: 15px;\n  margin-bottom: 40px;\n}\n\n.about-me img {\n  -webkit-box-shadow: #222222 1px 1px 10px;\n          box-shadow: #222222 1px 1px 10px;\n}\n\n.contact-container {\n  width: -webkit-calc(100vw - 100px);\n  width: calc(100vw - 100px);\n  padding: 0 50px;\n  padding-top: 50px;\n}\n\n.contact-left {\n  float: left;\n  width: 40%;\n  text-align: center;\n}\n\n.contact-right h1 {\n  margin-bottom: 20px;\n}\n\n.contact-p {\n  background-color: #FF2277;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n  padding: 20px;\n  text-align: justify;\n}\n\n.contact-thumbnail {\n  display: block;\n  background-color: #393E41;\n  width: 100%;\n  height: 40px;\n  margin-bottom: 20px;\n  padding: 10px;\n  text-decoration: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #FF2277;\n          box-shadow: 10px 7.5px 1px 0px #FF2277;\n}\n\n.contact-thumbnail:hover {\n  -webkit-box-shadow: 5px 5px 1px 0px #FF2277;\n          box-shadow: 5px 5px 1px 0px #FF2277;\n}\n\n.contact-thumbnail div {\n  float: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 40px;\n  display: block;\n  padding: 0 20px;\n  text-decoration: none;\n  margin-top: -5px;\n  width: -webkit-calc(100% - 80px);\n  width: calc(100% - 80px);\n  text-align: right;\n}\n\n.contact-thumbnail img {\n  width: 40px;\n  float: left;\n}\n\n.p5-info {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  z-index: 1;\n  border-bottom: 2px solid #393E41;\n}\n\n.p5-info h1 {\n  font-size: 42px;\n  text-align: left;\n  margin-left: 100px;\n  padding-top: 10px;\n}\n\n.p5-info p {\n  display: none;\n  visibility: hidden;\n  opacity: 1;\n}\n\n.p5-info input {\n  background-color: #FF2277;\n}\n\n.p5-info button {\n  background-color: #FF2277;\n  color: #FDFFFC;\n  margin: 10px;\n  position: absolute;\n  color: #FDFFFC;\n  border: none;\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n}\n\n.p5-info-slide {\n  background: none;\n  border: none;\n  height: 75px;\n  position: fixed;\n  z-index: 100;\n  left: 25px;\n  margin: 5px;\n  margin-top: 15px;\n}\n\n.p5-info-slide img {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n  filter: drop-shadow(6px 5px 5px #FF2277);\n}\n\n.p5-info-slide img:hover {\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.p5-info-show {\n  z-index: 5;\n  border-bottom: 2px solid #FF2277;\n  -webkit-box-shadow: 0px 10px 10px black;\n          box-shadow: 0px 10px 10px black;\n}\n\n.p5-info-show p {\n  opacity: 1;\n  display: block;\n  visibility: visible;\n}\n\n.p5-info-show::after {\n  z-index: 20;\n  content: \"Hide this information panel with the ^ button above\";\n  font-style: italic;\n  font-size: 10.5px;\n  display: inline;\n  position: absolute;\n  left: 10px;\n}\n\n.p5-canvas {\n  width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: absolute;\n  z-index: 0;\n  top: 150px;\n  height: -webkit-calc(100vh - 75px - 70px - 75px);\n  height: calc(100vh - 75px - 70px - 75px);\n  text-align: center;\n  cursor: crosshair;\n}\n\n.weblog-signature {\n  margin-top: 15px;\n  text-shadow: black 1px 1px 5px;\n  padding-left: 30px;\n  color: #FF2277;\n  font-weight: normal;\n  margin-bottom: 50px;\n}\n\n.music-release-banner {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 0% 20%;\n  background-size: cover;\n  background-blend-mode: darken;\n  border-bottom: 1px solid white;\n  text-align: center;\n  padding: 15px;\n  padding-top: 0px;\n}\n\n.music-release-banner p, .music-release-banner h1, .music-release-banner h2, .music-release-banner h3 {\n  display: block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  margin: 0 auto;\n  padding: 0;\n  text-shadow: 1px 1px 5px black;\n}\n\n.submergence-hover {\n  -webkit-transition: ease-out 0.2s;\n  transition: ease-out 0.2s;\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.submergence-hover img {\n  -webkit-transition: ease-out 0.2s;\n  transition: ease-out 0.2s;\n}\n\n.submergence-hover:hover {\n  -webkit-filter: drop-shadow(6px 5px 0px #FF2277);\n  filter: drop-shadow(6px 5px 0px #FF2277);\n}\n\n.footer {\n  height: 70px;\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  margin: 0;\n}\n\n.footer hr {\n  border-color: #FF2277;\n}\n\n.footer button, .footer a {\n  font-size: 14px;\n  padding: 0;\n  color: #FDFFFC;\n  text-decoration: underline;\n  background: none;\n  border: none;\n}\n\n.footer a {\n  text-shadow: 2px 2px 4px #222222;\n}\n\n.footer button:hover, .footer a:hover {\n  text-shadow: 0 0 5px #FDFFFC;\n}\n\n.copyright {\n  margin-top: 0px;\n  color: #FF2277;\n  font-size: 14px;\n  text-shadow: #222222 2px 2px 1px;\n}\n\n@media only screen and (min-width: 769px) {\n  body {\n    overflow: hidden;\n  }\n\n  .header {\n    height: 75px;\n  }\n\n  .header h1, .header img {\n    float: left;\n    font-size: 55px;\n  }\n\n  .header h1 {\n    margin-top: 3px;\n    padding: 0;\n  }\n\n  .popup {\n    height: -webkit-calc(100% - 75px - 70px);\n    height: calc(100% - 75px - 70px);\n  }\n\n  .navigator img {\n    display: block;\n  }\n\n  .navigator button {\n    right: 45px;\n  }\n\n  .project-list {\n    margin: 0;\n    height: -webkit-calc(100vh - 35px - 75px - 70px);\n    height: calc(100vh - 35px - 75px - 70px);\n    padding: 0px 50px;\n  }\n\n  .project-thumbnail {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    height: 250px;\n    width: 250px;\n  }\n\n  .post-thumbnail {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    height: 250px;\n    width: 250px;\n  }\n\n  .project-thumbnail:first-of-type, .post-thumbnail:first-of-type {\n    margin-top: 50px;\n  }\n\n  .project-thumbnail:last-of-type, .post-thumbnail:last-of-type {\n    margin-bottom: 200px;\n  }\n\n  .project-thumbnail p {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: none;\n  }\n\n  .project-thumbnail:hover p {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: block;\n  }\n\n  .project-thumbnail:hover small {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: none;\n  }\n\n  .project-thumbnail:hover div {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n  }\n\n  .close-icon {\n    height: 40px;\n  }\n\n  .project-page {\n    height: -webkit-calc(100vh - 75px - 70px);\n    height: calc(100vh - 75px - 70px);\n  }\n\n  .contact-left {\n    float: left;\n    width: 40%;\n    text-align: center;\n  }\n\n  .contact-right {\n    float: right;\n    left: 40vw;\n    text-align: center;\n    position: fixed;\n    width: -webkit-calc(60vw - 100px);\n    width: calc(60vw - 100px);\n    margin-left: 10px;\n    padding: 0px 50px;\n  }\n\n  .contact-right h1 {\n    margin-bottom: 20px;\n  }\n\n  .about {\n    margin: 0 20%;\n    margin-bottom: 40px;\n  }\n\n  .about-me {\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n  }\n\n  .about-me img {\n    width: -webkit-calc(50% - 42.5px);\n    width: calc(50% - 42.5px);\n    display: inline-block;\n    right: 0;\n    -webkit-align-self: center;\n            align-self: center;\n  }\n\n  .about-me div {\n    width: 50%;\n    padding-right: 37.5px;\n    -webkit-align-self: center;\n            align-self: center;\n  }\n\n  .about-me div p {\n    width: 100%;\n  }\n\n  .about-me:last-child {\n    padding-bottom: 20px;\n  }\n\n  .p5-info {\n    height: 75px;\n    background-color: #222222;\n  }\n\n  .p5-info h1 {\n    font-size: 42px;\n    margin-left: 100px;\n    padding-top: 10px;\n  }\n\n  .p5-info p {\n    max-width: 750px;\n    margin: 10px auto;\n  }\n\n  .p5-info input {\n    position: static;\n    display: block;\n    margin-left: 5px;\n    margin-bottom: -5px;\n  }\n\n  .p5-info button {\n    padding: 7.5px 12px;\n    margin: 10px;\n    position: absolute;\n    float: right;\n    top: 10px;\n    right: 145px;\n  }\n\n  .p5-info-slide {\n    background: none;\n    border: none;\n    height: 75px;\n    position: fixed;\n    left: 25px;\n    margin: 5px;\n    margin-top: 15px;\n  }\n\n  .p5-info-slide img {\n    -webkit-transition: ease-in 0.2s;\n    transition: ease-in 0.2s;\n    height: 40px;\n    -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n    filter: drop-shadow(6px 5px 5px #FF2277);\n  }\n\n  .p5-info-show {\n    height: auto;\n    padding-bottom: 10px;\n  }\n\n  .p5-info-show::after {\n    margin-top: 20px;\n  }\n\n  .submergence-hover br {\n    display: none;\n  }\n\n  .weblog-post {\n    padding: 10px 30px;\n    text-align: center;\n  }\n\n  .weblog-post * {\n    max-width: 750px;\n    margin: 2px auto;\n    text-align: center;\n  }\n\n  .weblog-post small {\n    display: block;\n  }\n\n  .weblog-post p {\n    text-align: left;\n    line-height: 25px;\n  }\n\n  .weblog-post h1 {\n    max-width: -webkit-calc(100vw - 250px);\n    max-width: calc(100vw - 250px);\n    display: block;\n  }\n\n  .footer {\n    position: fixed;\n    background-color: #393E41;\n    height: 70px;\n  }\n\n  .footer button, .footer a {\n    display: inline-block;\n    margin: 5px 15px;\n    margin-top: 15px;\n  }\n}\n@media only screen and (max-width: 769px) {\n  body {\n    font-size: 11px;\n    height: 100%;\n    width: 100vw;\n  }\n\n  html {\n    height: 100%;\n  }\n\n  code {\n    padding: 0px 4px;\n  }\n\n  .main-body {\n    height: 100%;\n    width: 100vw;\n  }\n\n  .header {\n    text-align: center;\n    height: 40px;\n    width: 100vw;\n  }\n\n  .header h1 {\n    font-size: 28px;\n    margin: 0px;\n    margin-top: 2px;\n    margin-left: 8px;\n    float: left;\n  }\n\n  .header img {\n    height: 30px;\n    float: right;\n  }\n\n  .popup {\n    display: none;\n    top: 40px;\n    height: -webkit-calc(100% - 40px - 70px);\n    height: calc(100% - 40px - 70px);\n  }\n\n  .navigator img {\n    display: none;\n  }\n\n  .navigator button {\n    right: 5px;\n    font-size: 11px;\n  }\n\n  .navigator input {\n    font-size: 11px;\n    width: -webkit-calc(100% - 45px);\n    width: calc(100% - 45px);\n  }\n\n  .project-thumbnail {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    -webkit-box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n            box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n  }\n\n  .project-thumbnail:first-of-type {\n    margin-top: 20px;\n  }\n\n  .project-thumbnail:last-of-type {\n    margin-bottom: 100px;\n  }\n\n  .post-thumbnail {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    -webkit-box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n            box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n  }\n\n  .post-thumbnail:last-of-type {\n    margin-bottom: 100px;\n  }\n\n  .post-thumbnail:first-of-type {\n    margin-top: 20px;\n  }\n\n  .project-thumbnail p {\n    display: none;\n  }\n\n  .project-thumbnail h2 {\n    padding: 0px 40px;\n  }\n\n  .project-list {\n    margin-top: 2px;\n    height: -webkit-calc(100% - (35px + 40px + 70px));\n    height: calc(100% - (35px + 40px + 70px));\n    overflow-y: auto;\n    margin-left: -10px;\n    position: absolute;\n    text-align: center;\n  }\n\n  .close-icon {\n    position: fixed;\n    right: 0px;\n    margin-top: 2px;\n    height: 30px;\n  }\n\n  .project-page {\n    height: -webkit-calc(100% - (40px + 70px));\n    height: calc(100% - (40px + 70px));\n    position: absolute;\n  }\n\n  .share-icon {\n    display: none;\n  }\n\n  .contact-container {\n    width: -webkit-calc(100vw - 100px);\n    width: calc(100vw - 100px);\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .contact-left {\n    width: -webkit-calc(100% - 60px);\n    width: calc(100% - 60px);\n    text-align: center;\n    float: none;\n    padding: 0 30px;\n    margin-left: -25px;\n  }\n\n  .contact-right {\n    float: none;\n    left: 0px;\n    text-align: center;\n    position: relative;\n    width: 100%;\n    padding: 0;\n  }\n\n  .contact-right h1 {\n    margin-bottom: 20px;\n  }\n\n  .contact-thumbnail div {\n    font-size: 20px;\n    margin-top: 10px;\n  }\n\n  .about {\n    margin: 0 20px;\n  }\n\n  .about-me {\n    padding: 10px;\n  }\n\n  .about-me img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    width: 50%;\n  }\n\n  .about-me p {\n    display: block;\n  }\n\n  .about-me div {\n    margin-top: 20px;\n  }\n\n  .p5-info h1 {\n    font-size: 22px;\n    margin-left: 37.5px;\n    padding: 5px;\n  }\n\n  .p5-info p {\n    text-align: left;\n    padding: 5px;\n  }\n\n  .p5-info button, .p5-info input {\n    font-size: 11px;\n    margin-top: 5px;\n    position: static;\n    display: block;\n    float: right;\n    margin-right: 5px;\n    color: #FDFFFC;\n  }\n\n  .p5-info button {\n    padding: 5px;\n    margin: 7.5px;\n    position: absolute;\n    top: -2px;\n    right: 35px;\n  }\n\n  .p5-info input {\n    width: 165px;\n    position: absolute;\n    margin: 0;\n    margin-top: -2px;\n    margin-left: 5px;\n  }\n\n  .p5-info-slide {\n    background: none;\n    border: none;\n    height: 40px;\n    position: fixed;\n    left: 0px;\n    margin: 5px;\n    margin-top: 3px;\n  }\n\n  .p5-info-slide img {\n    -webkit-transition: ease-in 0.2s;\n    transition: ease-in 0.2s;\n    height: 30px;\n    -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n    filter: drop-shadow(6px 5px 5px #FF2277);\n  }\n\n  .p5-info-show {\n    height: auto;\n    padding-bottom: 5px;\n    background-color: #222222;\n  }\n\n  .p5-info-show::after {\n    margin-top: 20px;\n  }\n\n  .p5-canvas {\n    top: 40px;\n    height: -webkit-calc(100% - 40px);\n    height: calc(100% - 40px);\n    padding: 0;\n  }\n\n  .submergence-hover br {\n    display: block;\n  }\n\n  .weblog-post {\n    padding: 0 10px;\n    text-align: center;\n    margin-top: 10px;\n  }\n\n  .weblog-post p {\n    text-align: left;\n    line-height: 20px;\n  }\n\n  .footer {\n    width: 100%;\n    height: 70px;\n    background-color: #393E41;\n    position: fixed;\n  }\n\n  .footer button, .footer a {\n    display: inline-block;\n    margin: 7.5px 20px;\n    margin-top: 15px;\n  }\n}", "",{"version":3,"sources":["webpack://index.scss","webpack://navigation.scss","webpack://thumbnail.scss","webpack://project.scss","webpack://web-view.scss","webpack://mobile-view.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-color: #222222;\r\n$secondary-color: #393E41;\r\n$tertiary-color: #FF2277;\r\n// $tertiary-color: #CC0044;\r\n$primary-text-color: #FDFFFC;\r\n$secondary-text-color: #393E41;\r\n$tertiary-text-color: #FF2277;\r\n// $tertiary-text-color: #EE1166;\r\n$phoenix-primary-color: #C52437;\r\n$phoenix-secondary-color: #F08843;\r\n$phoenix-tertiary-color: #F7E27C;\r\n\r\n// $tertiary-color: $phoenix-primary-color;\r\n// $tertiary-text-color: $phoenix-secondary-color;\r\n\r\n$title-font: Monaco, monospace;\r\n// $body-font: Arial, Helvetica, sans-serif;\r\n// $body-font: Monospace;\r\n$body-font: Monaco, monospace;\r\n$header-height: 75px;\r\n$search-height: 35px;\r\n$thumbnail-size: 250px;\r\n$bottom-height: 70px;\r\n$regular-font-size: 14px;\r\n$p5-info-height: 75px;\r\n$thumbnail-transition: ease-in 0.25s;\r\n$vhs-shadows-l: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3px 0px;\r\n$vhs-shadows-m: greenyellow -2px 0px 0px, cyan 1.5px -2px 0px, red 2.5px 1.5px 0px;\r\n$vhs-shadows-s: greenyellow -1px 0px 0px, cyan 0.5px -1px 0px, red 1.5px 1px 0px;\r\n$vhs-shadows-drop-l: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\r\n$vhs-shadows-drop-m: drop-shadow(greenyellow -2px 0px 0px) drop-shadow(cyan 1.5px -2px 0px) drop-shadow(red 2.5px 1.5px 0px);\r\n$vhs-shadows-drop-s: drop-shadow(greenyellow -1px 0px 0px) drop-shadow(cyan 0.5px -1px 0px) drop-shadow(red 1.5px 1px 0px);\r\n\r\n\r\n* {\r\n  margin: 0;\r\n  font-family: $body-font;\r\n}\r\n\r\nbody {\r\n    background-color: $primary-color;\r\n    font-size:$regular-font-size;\r\n}\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button{\r\n    //-webkit-appearance: none;\r\n    display: none;\r\n}\r\n\r\ninput[type=\"search\"]::-ms-clear{\r\n    display: none;\r\n}\r\n\r\nbutton{\r\n    cursor: pointer;\r\n}\r\n\r\n// a{\r\n//     cursor: pointer;\r\n// }\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color:$primary-color;\r\n    color:$primary-text-color;\r\n    font-family: $body-font;\r\n    height: 100vh;\r\n    width: 100vw;;\r\n    overflow: hidden;\r\n}\r\n\r\na {\r\n    color:white;\r\n    transition: $thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    cursor: pointer;\r\n}\r\n\r\na:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    text-shadow: 0 0 5px $primary-text-color;\r\n}\r\n\r\ncode {\r\n    background-color: $secondary-color;\r\n    padding: 3px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.header {\r\n    font-family: $title-font;\r\n    background-color: $secondary-color;\r\n    width: 100%;\r\n    height: $header-height;\r\n}\r\n\r\n.header ::slotted {\r\n    float:left;\r\n}\r\n\r\n.header img {\r\n    transition: $thumbnail-transition;\r\n        // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n        // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    height: ($header-height - 10);\r\n    margin: 5px;\r\n    // box-shadow: greenyellow -1.5px 1.5px 0px, cyan 0.5px -1.5px 0px, red 1.5px 1.5px 0px;\r\n\r\n}\r\n\r\n.header img:hover {\r\n        // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n        // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.header h1 {\r\n    transition: $thumbnail-transition;\r\n    // // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n}\r\n\r\n.anniversary {\r\n    background: -moz-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $tertiary-color), color-stop(100%, rgba(0,255,255,1))); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffff', endColorstr='#ff00ff',GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.phoenix {\r\n    background: -moz-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $phoenix-primary-color), color-stop(100%, $phoenix-tertiary-color)); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.vhs-color {\r\n    // mix-blend-mode: difference; \r\n    // color: #00f;\r\n    // opacity: 0.5;\r\n    // text-shadow: #0f0 5px 5px 1px, #f00 10px 10px 1px; //, #00f -5px -5px 0px;\r\n    text-shadow: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3.5px 0px;\r\n}\r\n\r\n.tertiary-text-color{\r\n    color: $tertiary-text-color;\r\n}\r\n\r\n.main-gradient-text {\r\n    background: -moz-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $phoenix-primary-color), color-stop(100%, $phoenix-tertiary-color)); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n// .header h1:hover {\r\n//     // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n//     // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n// }\r\n\r\n.main-body{\r\n    top: $header-height;\r\n    height: calc(100% - #{$header-height});\r\n}\r\n\r\n.popup{\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 101;\r\n    border:none;\r\n    top: $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    text-align: center;\r\n}\r\n\r\n.popup-button{\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 101;\r\n    border:none;\r\n    // top: $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    background:rgb(0,0,0);\r\n    background: transparent\\9;\r\n    background:rgba(0,0,0,0.8);\r\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#22000000,endColorstr=#22000000);\r\n    zoom: 1;\r\n    width:100vw;\r\n}\r\n\r\n.popup-container{\r\n    z-index: 110;\r\n    display: block;\r\n    position: absolute;\r\n    width: 100vw;\r\n    text-align: center;\r\n    // padding:100px 0px;\r\n    padding: 50px 0px;\r\n    pointer-events: none;\r\n}\r\n\r\n.popup-div {\r\n    display: block;\r\n    font-size: larger;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n    // margin-top:50px;\r\n    width: 500px;\r\n    // box-shadow: 10px 10px 10px black;\r\n    box-shadow: 10px 10px 0px $tertiary-color;\r\n    // border-radius: 100px;\r\n    color:$primary-text-color;\r\n    background-color: $primary-color;\r\n    padding: 20px 50px;\r\n    pointer-events: all;\r\n}\r\n\r\n.popup h1 {\r\n    text-align: center;\r\n}\r\n\r\n.popup code {\r\n    border-radius: 0;\r\n    background-color: $tertiary-color;\r\n    -moz-box-shadow:    inset 0 0 10px $secondary-color;\r\n    -webkit-box-shadow: inset 0 0 10px $secondary-color;\r\n    box-shadow:         inset 0 0 10px $secondary-color;\r\n}\r\n\r\n.popup > div small {\r\n    text-align: center;\r\n    display: block;\r\n    color: $tertiary-text-color;\r\n    margin-top:20px;\r\n}\r\n\r\n.share-button-div{\r\n    text-align: center;\r\n}\r\n\r\n.share-button-div > *{\r\n    margin: 5px;\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    transition: ease-in 0.3s;\r\n}\r\n\r\n.share-button-div > *:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n\r\n    .share-button-icon{\r\n        box-shadow:$tertiary-color 3px 2px;\r\n    }\r\n}\r\n\r\n.share-button-icon{\r\n    border-radius: 1000px;\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.share-count-wrapper > *{\r\n    margin-left: -20px;\r\n    margin-top: -5px;\r\n    padding: 3px 6px;\r\n    background-color: $secondary-color;\r\n    color: $primary-text-color;\r\n    border-radius: 8px;\r\n}\r\n\r\n.share-link-container{\r\n    // background-color: white;\r\n}\r\n\r\n.share-link-copy{\r\n    padding: 7.5px 10px;\r\n    padding-top: 7;\r\n    padding-bottom: 8;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    // border-radius: 20px;\r\n    // border-top-right-radius: 20px;\r\n    // border-bottom-right-radius: 20px;\r\n\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.share-link{\r\n\r\n    // -moz-user-select: all;\r\n    // -webkit-user-select: all;\r\n    // -ms-user-select: all;\r\n    // user-select: all;\r\n\r\n    text-align: center;\r\n    width: 320px;\r\n    padding: 7.5px;\r\n    text-overflow: ellipsis;\r\n    border: none;\r\n    // border-top-left-radius: 20px;\r\n    // border-bottom-left-radius: 20px;\r\n\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n@import './navigation.scss';\r\n\r\n.project-list {\r\n    margin:0;\r\n    height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n    text-align: center;\r\n    overflow-x:hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.link-disabled {\r\n    display: none;\r\n}\r\n\r\n@import './thumbnail.scss';\r\n@import './project.scss';\r\n\r\n.footer{\r\n    height: $bottom-height;\r\n    width: 100vw;\r\n    position: fixed;\r\n    bottom: 0;\r\n    text-align: center;\r\n    margin:0;\r\n}\r\n\r\n.footer hr{\r\n    border-color:$tertiary-color\r\n}\r\n\r\n.footer button, .footer a{\r\n    font-size:$regular-font-size;\r\n    padding: 0;\r\n    color: $primary-text-color;    \r\n    // text-shadow: $primary-color 2px 2px 1px;\r\n    text-decoration: underline;\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.footer a{\r\n    text-shadow: 2px 2px 4px $primary-color;\r\n}\r\n\r\n.footer button:hover, .footer a:hover {\r\n    text-shadow: 0 0 5px $primary-text-color;\r\n}\r\n\r\n.copyright {\r\n    margin-top: 0px;\r\n    color:$tertiary-text-color;\r\n    font-size: $regular-font-size;\r\n    text-shadow: $primary-color 2px 2px 1px;\r\n}\r\n\r\n@import 'web-view.scss';\r\n@import 'mobile-view.scss';",".navigator {\r\n    background-color: $tertiary-color;\r\n    height: $search-height;\r\n    top: $header-height;\r\n    width: 100%;\r\n    margin:0;\r\n}\r\n\r\n.navigator img {\r\n    display: block;\r\n    height: $search-height - 10;\r\n    margin: 5px;\r\n    right: 5px;\r\n    pointer-events:none;\r\n    position: absolute;\r\n}\r\n\r\n.navigator input {\r\n    -moz-box-shadow:    inset 0 0 10px $secondary-color;\r\n    -webkit-box-shadow: inset 0 0 10px $secondary-color;\r\n    box-shadow:         inset 0 0 10px $secondary-color;\r\n    font-size: $search-height - 20;\r\n    background:$tertiary-color;\r\n    border:none;\r\n    color:$primary-text-color;\r\n    width: calc(100% - 45px);\r\n    height:100%;\r\n    padding: 0 10px;\r\n    padding-right:$search-height;\r\n}\r\n\r\n.navigator input::placeholder {\r\n    color:$primary-text-color;\r\n    text-shadow: 1px 1px 4px $secondary-text-color;\r\n    // text-shadow: -1px -1px 2.5px $secondary-text-color, 1px -1px 2.5px $secondary-text-color, -1px 1px 2.5px $secondary-text-color, 1px 1px 2.5px $secondary-text-color;\r\n}\r\n\r\n.navigator button {\r\n    transition: ease-in 0.3s;\r\n    color: $primary-text-color;\r\n    display: block;\r\n    position: absolute;\r\n    height: $search-height - 5px;\r\n    background-color: $primary-color;\r\n    margin: 1.25px;\r\n    right: $search-height+10px;\r\n    border:none;\r\n    padding: 8px 8px;\r\n    // border-radius: 5px;\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    // box-shadow: $secondary-color 7.5px 2.5px;\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.navigator button:hover{\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    box-shadow: $secondary-color 7.5px 2.5px;\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    // box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.navigator button input{\r\n    -moz-box-shadow:    none;\r\n    -webkit-box-shadow: none;\r\n    box-shadow:         none;\r\n    background:none;\r\n    border:none;\r\n    color:$primary-text-color;\r\n    width: $search-height - 20;\r\n    height: $search-height - 20;\r\n    float:left;\r\n}\r\n\r\n.navigator button label{\r\n    margin-top:0px;\r\n    margin-left: 8px;\r\n    float:right;\r\n}\r\n\r\n// input[type=\"checkbox\"]::before {\r\n//     content: \"\";\r\n//     display: inline-block;\r\n//     margin-left: -3px;\r\n//     margin-top: -1.5px;\r\n//     height: 16px;\r\n//     width: 16px;\r\n//     background-color: white;\r\n//     border: 1px solid rgb(166, 166, 166);\r\n//     border-radius: 4px;\r\n//     // box-shadow: inset 0 2px 5px rgba(0,0,0,0.25);\r\n//  }\r\n\r\n//  input[type=\"checkbox\"]:checked::before {\r\n//     background-color: $tertiary-color;\r\n//     border: 1px solid $tertiary-color;\r\n\r\n//  }\r\n\r\n// input[type=\"checkbox\"]:checked::after {\r\n//     content: '';\r\n//     position: absolute;\r\n//     width: 11px;\r\n//     height: 4px;\r\n//     background-color: $tertiary-color;\r\n//     top: 11px;\r\n//     left: 10.9px;\r\n//     border: 3px solid white;\r\n//     border-top: none;\r\n//     border-right: none;\r\n//     -webkit-transform: rotate(-45deg);\r\n//     -moz-transform: rotate(-45deg);\r\n//     -o-transform: rotate(-45deg);\r\n//     -ms-transform: rotate(-45deg);\r\n//     transform: rotate(-45deg);\r\n//  }",".project-thumbnail {\r\n    text-decoration:none;\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    // box-shadow:inset 0 0 $thumbnail-size 75px #101010, 5px 5px 1px 0px $secondary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 75px #101010,10px 7.5px 1px 0px $tertiary-color;\r\n    // box-shadow: inset 0 0 $thumbnail-size 75px #101010, $vhs-shadows-l;\r\n    // border-radius: 0px;\r\n    height: $thumbnail-size;\r\n    width: $thumbnail-size;\r\n    display: inline-table;\r\n    text-align: right;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 30px;\r\n    transition:$thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.project-thumbnail:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transition:$thumbnail-transition;\r\n    // box-shadow:inset 0 0 $thumbnail-size 200px black,10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 200px black, 5px 5px 1px 0px $secondary-color;\r\n    text-shadow: none;\r\n}\r\n\r\n.project-thumbnail:last-of-type {\r\n    transition:$thumbnail-transition;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.project-thumbnail div {\r\n    transition:$thumbnail-transition;\r\n    // display:table;\r\n    text-align: center;\r\n    width:$thumbnail-size;\r\n    //height: 100%;\r\n    // margin-top: 10%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.project-thumbnail div *{\r\n    transition:$thumbnail-transition;\r\n    padding: 0px 20px;\r\n}\r\n\r\n.project-thumbnail div p {\r\n    transition:$thumbnail-transition;\r\n    margin-top: 10px;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.project-thumbnail small {\r\n    text-align: right;\r\n    transition:$thumbnail-transition;\r\n    display: block;\r\n    position: absolute;\r\n    margin: 10px;\r\n    max-width: $thumbnail-size - 20px;\r\n    // white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.post-thumbnail {\r\n    text-decoration:none;\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    // box-shadow:inset 0 0 $thumbnail-size 75px #101010, 5px 5px 1px 0px $secondary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 75px #101010,10px 7.5px 1px 0px $tertiary-color;\r\n    // border-radius: 5px;\r\n    height: $thumbnail-size;\r\n    width: $thumbnail-size;\r\n    display: inline-table;\r\n    text-align: right;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 30px;\r\n    transition:$thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.post-thumbnail:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transition:$thumbnail-transition;\r\n    // box-shadow:inset 0 0 $thumbnail-size 200px black,10px 7.5px 1px 0px $tertiary-color;\r\n        box-shadow:inset 0 0 $thumbnail-size 200px black, 5px 5px 1px 0px $secondary-color;\r\n    text-shadow: none;\r\n}\r\n\r\n.post-thumbnail:last-of-type {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.post-thumbnail div {\r\n    // display:table;\r\n    text-align: center;\r\n    width:$thumbnail-size;\r\n    //height: 100%;\r\n    // margin-top: 10%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.post-thumbnail div *{\r\n    padding: 0px 20px;\r\n}\r\n\r\n.post-thumbnail div p {\r\n    margin-top: 10px;\r\n}\r\n\r\n.post-thumbnail small {\r\n    text-align: right;\r\n    transition:$thumbnail-transition;\r\n    display: block;\r\n    position: absolute;\r\n    margin: 10px;\r\n    max-width: $thumbnail-size - 20px;\r\n    // white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    right: 0;\r\n    bottom: 0;\r\n}",".project-page {\r\n    margin:0;\r\n    padding:0;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    width:100%;\r\n    text-align: center;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n// .project-page h1:first-of-type{\r\n//     padding-top: 10px;\r\n// }\r\n\r\n// .project-page p:first-of-type{\r\n//     padding: 10px;\r\n//     padding-top: 0px;\r\n// }\r\n\r\n.close-icon {\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    margin: 5px;\r\n    // position:sticky;\r\n    position: absolute;\r\n    float: right;\r\n    z-index: 100;\r\n    right: 35px;\r\n    margin-top: 15px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-icon:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-m;\r\n    // filter: $vhs-shadows-drop-m;\r\n}\r\n\r\n.share-icon {\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    margin: 5px;\r\n    // position:sticky;\r\n    position: absolute;\r\n    float: right;\r\n    right: 90px;\r\n    z-index: 100;\r\n    margin-top: 15px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 2px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 2px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n    cursor: pointer;\r\n}\r\n\r\n.share-icon:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    // -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    // filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-s;\r\n    // filter: $vhs-shadows-drop-s;\r\n}\r\n\r\n.about-h1{\r\n    margin: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.about-h2{\r\n    margin: 10px;\r\n    // margin-top:30px;\r\n    margin-bottom: -5px;\r\n    text-align: left;\r\n    // padding: 10px;\r\n    // background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    // box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n}\r\n\r\n.about-p{\r\n    text-align: left;\r\n    // text-align: justify;\r\n    margin-bottom: -7.5px;\r\n}\r\n\r\n.about-me{\r\n    margin-top: 10px;\r\n    // border-radius: 10px;\r\n    background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    padding: 15px;\r\n    // padding-bottom: 10px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.about-me img{\r\n    // border-radius: 10px;\r\n    // background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    box-shadow: $primary-color 1px 1px 10px;\r\n    // box-shadow: 10px 7.5px 1px 0px $primary-color;\r\n    // box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    // height: 20px;\r\n    // width: 10px;\r\n}\r\n\r\n.contact-container {\r\n    width: calc(100vw - 100px);\r\n    padding: 0 50px;\r\n    padding-top: 50px;\r\n}\r\n\r\n$contact-left: 40%;\r\n\r\n.contact-left {\r\n    float: left;\r\n    width: $contact-left;\r\n    text-align: center;\r\n}\r\n\r\n.contact-right h1{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contact-p{\r\n    background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    padding: 20px;\r\n    text-align: justify;\r\n}\r\n\r\n.contact-thumbnail {\r\n    display: block;\r\n    background-color: $secondary-color;\r\n    width: 100%;\r\n    height: 40px;\r\n    // border-radius: 100px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n}\r\n\r\n.contact-thumbnail:hover{\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    box-shadow:5px 5px 1px 0px $tertiary-color;\r\n}\r\n\r\n.contact-thumbnail div{\r\n    float: right;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    font-size: 40px;\r\n    display: block;\r\n    padding: 0 20px;\r\n    text-decoration: none;\r\n    margin-top: -5px;\r\n    width: calc(100% - 80px);\r\n    text-align: right;\r\n}\r\n\r\n.contact-thumbnail img{\r\n    width: 40px;\r\n    float: left;\r\n}\r\n\r\n.p5-info {\r\n    position: absolute;\r\n    width: 100%;\r\n    // transition: ease-in 0.2s;\r\n    text-align: center;\r\n    z-index: 1;\r\n    border-bottom: 2px solid $secondary-color;\r\n}\r\n\r\n.p5-info h1{\r\n    // transition: ease-in 0.2s;\r\n    font-size: 3 * $regular-font-size;\r\n    text-align: left;\r\n    margin-left: $p5-info-height + 25px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.p5-info p{\r\n    // transition: all ease-in 0.2s;\r\n    // margin-top: 5px;\r\n    display: none;\r\n    visibility: hidden;\r\n    opacity: 1;\r\n\r\n}\r\n\r\n.p5-info input {\r\n    // z-index: 20;\r\n    // transition: ease-in 0.2s;\r\n    background-color: $tertiary-color;\r\n    // padding: 5px;\r\n    // margin: 10px;\r\n    // position: absolute;\r\n    // top:$header-height+12px;\r\n    // right: 145px;\r\n    // width: 80px;\r\n    // left: 0;\r\n}\r\n\r\n.p5-info button {\r\n    // transition: ease-in 0.2s;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    margin: 10px;\r\n    position: absolute;\r\n    // top:$header-height+ 12px;\r\n    // right: 145px;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n}\r\n\r\n.p5-info-slide {\r\n    background: none;\r\n    border: none;\r\n    height: $p5-info-height;\r\n    // margin: 5px;\r\n    position:fixed;\r\n    z-index: 100;\r\n    left: 25px;\r\n    // margin-top: 10px;\r\n    margin: 5px;\r\n    // right: 35px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.p5-info-slide img{\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n}\r\n\r\n.p5-info-slide img:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-m;\r\n    // filter: $vhs-shadows-drop-m;\r\n}\r\n\r\n.p5-info-show{\r\n    z-index: 5;\r\n    // transition: ease-in 0.2s;\r\n    border-bottom: 2px solid $tertiary-color;\r\n    box-shadow: 0px 10px 10px black;\r\n}\r\n\r\n.p5-info-show p{\r\n    // transition: all ease-in 0.2s;\r\n    opacity: 1;\r\n    display: block;\r\n    visibility: visible;\r\n}\r\n\r\n.p5-info-show::after{\r\n    z-index: 20;\r\n    content: \"Hide this information panel with the ^ button above\";\r\n    font-style: italic;\r\n    font-size: 0.75 * $regular-font-size;\r\n    // float: left;\r\n    display: inline;\r\n    position: absolute;\r\n    left: 10px;\r\n    // bottom: px;\r\n}\r\n\r\n.p5-canvas{\r\n    // margin-left: 5px;\r\n    width: 100vw;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    // border: white 2px solid;\r\n    position: absolute;\r\n    z-index: 0;\r\n    top: $p5-info-height + $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height});\r\n    // max-height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height} - 10px);\r\n    text-align: center;\r\n    cursor: crosshair;\r\n}\r\n\r\n.weblog-signature{\r\n    margin-top:15px;\r\n    text-shadow: black 1px 1px 5px;\r\n    padding-left: 30px;\r\n    color:$tertiary-text-color;\r\n    font-weight: normal;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.music-release-banner{\r\n    background: url('../../../public/assets/img/music-banner.jpg');\r\n    background-position:0% 20%;\r\n    background-size: cover;\r\n    background-blend-mode: darken;\r\n    border-bottom:1px solid white;\r\n    text-align: center;\r\n    padding: 15px;\r\n    padding-top: 0px;\r\n}\r\n\r\n\r\n.music-release-banner p,.music-release-banner h1,.music-release-banner h2,.music-release-banner h3 {\r\n    display: block;\r\n    width: max-content;\r\n    height: max-content;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    text-shadow: 1px 1px 5px black;\r\n}\r\n\r\n.submergence-hover{\r\n    transition: ease-out 0.2s;\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n}\r\n\r\n.submergence-hover img{\r\n    transition: ease-out 0.2s;\r\n}\r\n\r\n.submergence-hover:hover{\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 0px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 0px $tertiary-color);\r\n}\r\n\r\n.submergence-hover:hover img {\r\n    // transform: translateX(1px) translateY(20px);\r\n}\r\n","@media only screen and (min-width: 769px){\r\n    $header-height:75px;\r\n    $thumbnail-size: 250px;\r\n    $bottom-height: 70px;\r\n\r\n    body{\r\n        overflow: hidden;\r\n    }\r\n\r\n    h1 {\r\n        // text-shadow: $vhs-shadows-l;\r\n    }\r\n    \r\n    h2 {\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .header {\r\n        height:$header-height;\r\n    }\r\n\r\n    .header h1, .header img {\r\n        float: left;\r\n        font-size: $header-height - 20;\r\n    }\r\n\r\n    .header h1 {\r\n        margin-top: 3px;\r\n        // margin-right: 10px;\r\n        // float: right;\r\n        padding: 0;\r\n        // bottom: 3px;\r\n    }\r\n\r\n    .header img {\r\n        // greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3px 0px;\r\n        // -webkit-filter: $vhs-shadows-drop-s;\r\n        // filter: $vhs-shadows-drop-s;\r\n    }\r\n\r\n    .popup{\r\n        height: calc(100% - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .navigator img {\r\n        display: block;\r\n    }\r\n\r\n    .navigator button{\r\n        right:$search-height+10px;\r\n    }\r\n\r\n    .project-list {\r\n        margin:0;\r\n        height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n        padding: 0px 50px;\r\n    }\r\n\r\n    .project-thumbnail {\r\n        transition:$thumbnail-transition;\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n    }\r\n\r\n    .post-thumbnail {\r\n        transition:$thumbnail-transition;\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n    }\r\n\r\n    .project-thumbnail:first-of-type, .post-thumbnail:first-of-type{\r\n        margin-top: 50px;\r\n    }\r\n\r\n    .project-thumbnail:last-of-type, .post-thumbnail:last-of-type{\r\n        margin-bottom: 200px;\r\n    }\r\n    \r\n    .project-thumbnail p {\r\n        transition:$thumbnail-transition;\r\n        display: none;\r\n    }\r\n\r\n    .project-thumbnail:hover p {\r\n        transition:$thumbnail-transition;\r\n        display: block;\r\n    }\r\n\r\n    .project-thumbnail:hover small{\r\n        transition:$thumbnail-transition;\r\n        display: none;\r\n    }\r\n\r\n    .project-thumbnail:hover div{\r\n        transition:$thumbnail-transition;\r\n    }\r\n\r\n\r\n    .close-icon{\r\n        height: 40px;\r\n    }\r\n\r\n    .project-page{\r\n        height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .contact-left {\r\n        float: left;\r\n        width: $contact-left;\r\n        text-align: center;\r\n    \r\n    }\r\n    \r\n    .contact-right {\r\n        float: right;\r\n        left: calc(0.4 * (100vw));\r\n        text-align: center;\r\n        position: fixed;\r\n        width: calc(0.6 * (100vw) - 100px);\r\n        margin-left: 10px;\r\n        padding: 0px 50px;\r\n    }\r\n    \r\n    .contact-right h1{\r\n        margin-bottom: 20px;\r\n    }\r\n    \r\n\r\n    .about{\r\n        margin: 0 20%;\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .about-me{\r\n        display: flex;\r\n    }\r\n\r\n    .about-me img{\r\n        width: calc(50% - 42.5px);\r\n        // margin-right: 5px;\r\n        // height: auto;\r\n        display: inline-block;\r\n        right: 0;\r\n        align-self: center;\r\n    }\r\n    \r\n    .about-me div {\r\n        width: 50%;\r\n        // margin-right: 20px;\r\n        // margin-left: 0px;\r\n        // padding: 0;\r\n        // padding: 0 10px;\r\n        padding-right: 37.5px;\r\n        align-self: center;\r\n    }\r\n\r\n    .about-me div p {\r\n        width: 100%;\r\n    }\r\n\r\n    .about-me:last-child{\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    .p5-info{\r\n        // padding-top: 10px;\r\n        height: $p5-info-height;\r\n        // margin-top: -5px;\r\n        background-color: $primary-color;\r\n        // background-color: white;\r\n    }\r\n    \r\n    .p5-info h1{\r\n        font-size: 3 * $regular-font-size;\r\n        margin-left: $p5-info-height + 25px;\r\n        padding-top: 10px;\r\n    }   \r\n\r\n    .p5-info p{\r\n        max-width: 750px;\r\n        margin: 10px auto;\r\n    }\r\n\r\n    .p5-info input {\r\n        position: static;\r\n        display: block;\r\n        // top: 0;\r\n        margin-left: 5px;\r\n        margin-bottom: -5px;\r\n        // bottom: $bottom-height;\r\n        // top:$header-height + $p5-info-height;\r\n    }\r\n\r\n    .p5-info button {\r\n        // padding: 5px;\r\n        padding: 7.5px 12px;\r\n        margin: 10px;\r\n        position: absolute;\r\n        float: right;\r\n        // top:$header-height+ 12px;\r\n        top: 10px;\r\n        right: 145px;\r\n    }\r\n\r\n    .p5-info-slide {\r\n        background: none;\r\n        border: none;\r\n        height: $p5-info-height;\r\n        // margin: 5px;\r\n        position:fixed;\r\n        left: 25px;\r\n        // margin-top: 10px;\r\n        margin: 5px;\r\n        // right: 35px;\r\n        margin-top: 15px;\r\n    }\r\n    \r\n    .p5-info-slide img{\r\n        transition: ease-in 0.2s;\r\n        height: 40px;\r\n        // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n        -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        // -webkit-filter: $vhs-shadows-drop-l;\r\n        // filter: $vhs-shadows-drop-l;\r\n    }\r\n\r\n    .p5-info-show{\r\n        height: auto;\r\n        padding-bottom: 10px;\r\n    }\r\n\r\n    .p5-info-show::after{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    // .p5-canvas {\r\n    //     // margin-top: $p5-info-height;\r\n    //     // background-color: blue;\r\n    //     // height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height});\r\n    // }\r\n\r\n    .submergence-hover br{\r\n        display: none;\r\n    }\r\n\r\n    .weblog-post{\r\n        padding: 10px 30px;\r\n        text-align: center;\r\n    }\r\n\r\n    .weblog-post * {\r\n        max-width: 750px;\r\n        margin: 2px auto;\r\n        text-align: center;\r\n    }\r\n\r\n    .weblog-post small{\r\n        // margin: 0px;\r\n        display: block;\r\n    }\r\n\r\n    .weblog-post p {\r\n        text-align: left;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .weblog-post h1 {\r\n        max-width: calc(100vw - 250px);\r\n        display: block;\r\n    }\r\n\r\n    .footer {\r\n        position: fixed;\r\n        background-color: $secondary-color;\r\n        height: $bottom-height;\r\n    }\r\n\r\n    .footer button, .footer a {\r\n        display: inline-block;\r\n        margin: 5px 15px;\r\n        margin-top: 15px;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n}\r\n","@media only screen and (max-width: 769px){\r\n    $header-height:40px;\r\n    $thumbnail-size: 200px;\r\n    $bottom-height: 70px;\r\n    $regular-font-size: 11px;\r\n    $p5-info-height: 40px;\r\n\r\n    body {\r\n        font-size:$regular-font-size;\r\n        height: 100%;\r\n        width: 100vw;\r\n    }\r\n\r\n    html{\r\n        height: 100%;\r\n    }\r\n\r\n    code{\r\n        padding: 0px 4px;\r\n    }\r\n\r\n    h1 {\r\n        // text-shadow: greenyellow -1px 1px 0px, cyan 0px -1px 0px, red 1px 1px 0px;\r\n        // text-shadow: $vhs-shadows-m;\r\n    }\r\n    \r\n    h2 {\r\n        // text-shadow: greenyellow -1px 1px 0px, cyan 0px -1px 0px, red 1px 1px 0px;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .main-body{\r\n        height: 100%;\r\n        width: 100vw;\r\n    }\r\n\r\n    .header {\r\n        text-align: center;\r\n        height:$header-height;\r\n        width: 100vw;\r\n    }\r\n\r\n    .header h1{\r\n        font-size: 28px;\r\n        margin: 0px;\r\n        margin-top: 2px;\r\n        margin-left:8px;\r\n        float: left;\r\n    }\r\n\r\n    .header img {\r\n        height: 30px;\r\n        float: right;\r\n    }\r\n\r\n    .popup{\r\n        display:none;\r\n        top: $header-height;\r\n        height: calc(100% - #{$header-height} - #{$bottom-height});\r\n    }\r\n    .navigator img {\r\n        display: none;\r\n    }\r\n\r\n    .navigator button{\r\n        right:5px;\r\n        font-size: $regular-font-size;\r\n    }\r\n\r\n    .navigator input{\r\n        font-size: $regular-font-size;\r\n        width: calc(100% - 45px);\r\n    }\r\n\r\n    .project-thumbnail{\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n        // margin: 10px;\r\n        margin: 10px;\r\n        box-shadow:inset 0 0 $thumbnail-size 50px black, 10px 10px 1px 0px $tertiary-color;\r\n    }\r\n\r\n    .project-thumbnail:first-of-type{\r\n        margin-top: 20px;\r\n    }\r\n    .project-thumbnail:last-of-type{\r\n        margin-bottom: 100px;\r\n    }\r\n    \r\n    .post-thumbnail {\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n        margin: 10px;\r\n        box-shadow:inset 0 0 $thumbnail-size 50px black, 10px 10px 1px 0px $tertiary-color;\r\n    }\r\n\r\n    .post-thumbnail:last-of-type{\r\n        margin-bottom: 100px;\r\n    }\r\n\r\n    .post-thumbnail:first-of-type{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .project-thumbnail p {\r\n        display:none;\r\n    }\r\n\r\n    .project-thumbnail h2 {\r\n        padding: 0px 40px;\r\n    }\r\n\r\n    .project-list {\r\n        margin-top:2px;\r\n        // width: calc(100% - 20px);\r\n        height: calc(100% - (#{$search-height} + #{$header-height} + #{$bottom-height}));\r\n        // height: 100%;\r\n        // max-height: 10px;\r\n        overflow-y: auto;\r\n        // padding: 0px;\r\n        // margin: 0px;\r\n        // padding: 0px 10px;\r\n        // padding-right: 20px;\r\n        margin-left: -10px;\r\n        position: absolute;\r\n        text-align: center;\r\n    }\r\n\r\n    // .project-list *{\r\n\r\n    // }\r\n\r\n    .close-icon {\r\n        // position: sticky;\r\n        position: fixed;\r\n        right: 0px;\r\n        margin-top: 2px;\r\n        height: 30px;\r\n\r\n    }\r\n\r\n    .project-page{\r\n        height: calc(100% - (#{$header-height} + #{$bottom-height}));\r\n        position: absolute;\r\n    }\r\n\r\n    .share-icon {\r\n        display: none;\r\n    }\r\n\r\n    .contact-container {\r\n        width: calc(100vw - 100px);\r\n        text-align: center;\r\n        padding: 30px 50px;\r\n    }\r\n\r\n    .contact-left {\r\n        width: calc(100% - 60px);\r\n        text-align: center;\r\n        float: none;\r\n        padding: 0 30px;\r\n        margin-left: -25px;\r\n    }\r\n    \r\n    .contact-right {\r\n        float: none;\r\n        left: 0px;\r\n        text-align: center;\r\n        position: relative;\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    \r\n    .contact-right h1{\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .contact-thumbnail div{\r\n        font-size: 20px;\r\n        margin-top: 10px;\r\n        // float: right;\r\n    }\r\n    \r\n\r\n    .about{\r\n        margin: 0 20px;\r\n    }\r\n\r\n    .about-me {\r\n        padding: 10px;\r\n    }\r\n\r\n    .about-me img{\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-top: 10px;\r\n        width: 50%;\r\n    }\r\n    \r\n    .about-me p {\r\n        display: block;\r\n    }\r\n\r\n    .about-me div{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .p5-info h1{\r\n        font-size: 2 * $regular-font-size;\r\n        margin-left: $p5-info-height - 2.5px;\r\n        padding: 5px;\r\n    }\r\n\r\n    .p5-info p{\r\n        text-align: left;\r\n        padding: 5px;\r\n    }\r\n\r\n    // .p5-info button, .p5-info input {\r\n    //     font-size: $regular-font-size;\r\n    //     display: block;\r\n    //     float: right;\r\n    //     color: $primary-text-color;\r\n    //     padding: 5px;\r\n    //     margin: 7.5px;\r\n    //     position: absolute;\r\n    //     top:0px;\r\n    //     right: 37.5px;\r\n    // }\r\n\r\n\r\n    .p5-info button, .p5-info input {\r\n        font-size: $regular-font-size;\r\n        margin-top: 5px;\r\n        position: static;\r\n        display: block;\r\n        float: right;\r\n        margin-right: 5px;\r\n        color: $primary-text-color;\r\n    }\r\n\r\n    .p5-info button{\r\n        padding: 5px;\r\n        margin: 7.5px;\r\n        position: absolute;\r\n        top:-2px;\r\n        right: 35px;\r\n    }\r\n\r\n    .p5-info input{\r\n        width: 165px;\r\n        position: absolute;\r\n        margin: 0;\r\n        margin-top: -2px;\r\n        margin-left: 5px;\r\n        // display: inline/;\r\n        // margin: 0 auto;\r\n        // margin-left: auto;\r\n        // margin-right: auto;\r\n        // padding: 0;\r\n        // margin-top: 12px;\r\n    }\r\n\r\n    .p5-info-slide {\r\n        background: none;\r\n        border: none;\r\n        height: $p5-info-height;\r\n        position:fixed;\r\n        left: 0px;\r\n        margin: 5px;\r\n        margin-top: 3px;\r\n    }\r\n    \r\n    .p5-info-slide img{\r\n        transition: ease-in 0.2s;\r\n        height: 30px;\r\n        // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n        -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        // -webkit-filter: $vhs-shadows-drop-l;\r\n        // filter: $vhs-shadows-drop-l;\r\n    }\r\n\r\n    .p5-info-show{\r\n        height: auto;\r\n        padding-bottom: 5px;\r\n        background-color: $primary-color;\r\n    }\r\n\r\n    .p5-info-show::after{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .p5-canvas{\r\n        top: $p5-info-height;\r\n        height: calc(100% - #{$p5-info-height});\r\n        // margin-bottom: -20px;\r\n        padding: 0;\r\n        // margin: 0;\r\n    }\r\n\r\n    .submergence-hover br{\r\n        display: block;\r\n    }\r\n\r\n    .weblog-post{\r\n        padding: 0 10px;\r\n        text-align: center;\r\n        // margin:5px;\r\n        margin-top:10px;\r\n    }\r\n\r\n    .weblog-post p {\r\n        text-align: left;\r\n        line-height: 20px;\r\n    }\r\n\r\n    .footer {\r\n        width: 100%;\r\n        height:$bottom-height;\r\n        // background-color: none;\r\n        background-color: $secondary-color;\r\n        // position: relative;\r\n        position: fixed;\r\n        //position: fixed;\r\n        // background-color: blue;\r\n    }\r\n\r\n    .footer button, .footer a {\r\n        // display: block;\r\n        display: inline-block;\r\n        // margin: 15px auto;\r\n        margin: 7.5px 20px;\r\n        margin-top:15px;\r\n        // text-shadow: $vhs-shadows-s;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .copyright{\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzPzE4MWIiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbWF0Y2gtYnJhY2VzL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3M/M2ZhNyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzPzg3MTgiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdy5jc3M/OTcyZCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXguc2Nzcz8wN2RhIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20tdG9tb3Jyb3cuY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvYXNzZXRzL2ltZy9tdXNpYy1iYW5uZXIuanBnIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2NvcHktdG8tY2xpcGJvYXJkL3ByaXNtLWNvcHktdG8tY2xpcGJvYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2Rvd25sb2FkLWJ1dHRvbi9wcmlzbS1kb3dubG9hZC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL25vcm1hbGl6ZS13aGl0ZXNwYWNlL3ByaXNtLW5vcm1hbGl6ZS13aGl0ZXNwYWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL3Nob3ctbGFuZ3VhZ2UvcHJpc20tc2hvdy1sYW5ndWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3ByaXNtLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwicHJvcHMiLCJSZWFjdCIsIlByaXNtIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0NBRUE7QUFDQTs7QUFDQTtBQUNBO0NBQzBEOztBQUMxRDtDQUMwRDs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV2QkMsd0RBQUEsQ0FBZ0IsWUFBSTtBQUNsQkMsK0RBQUE7QUFDRCxHQUZELEVBRUUsRUFGRjtBQUZ1QixNQU1iQyxTQU5hLEdBTVlILEtBTlosQ0FNYkcsU0FOYTtBQUFBLE1BTUZDLFNBTkUsR0FNWUosS0FOWixDQU1GSSxTQU5FO0FBT3JCLFNBQ0ksTUFBQyxTQUFELGlKQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESjtBQUdILENBVkQ7O0dBQU1MLEs7O0tBQUFBLEs7QUFZTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHVEQUE0QjtBQUNuRDtBQUNBOzs7Ozs7Ozs7OztBQ05BLFVBQVUsbUJBQU8sQ0FBQyw2TUFBaUc7QUFDbkgsMEJBQTBCLG1CQUFPLENBQUMsc2NBQXNNOztBQUV4Tzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNB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QUFNLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxhQUFhLGVBQWUsWUFBWSxVQUFVLE9BQU8sTUFBTSxhQUFhLGVBQWUsUUFBUSxNQUFNLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxjQUFjLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsV0FBVyxRQUFRLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxZQUFZLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxNQUFNLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxhQUFhLGVBQWUsYUFBYSxPQUFPLE1BQU0sYUFBYSxlQUFlLGFBQWEsV0FBVyxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxhQUFhLGVBQWUsUUFBUSxNQUFNLGFBQWEsZUFBZSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxTQUFTLE1BQU0sWUFBWSxhQUFhLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFNBQVMsTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLE9BQU8sS0FBSyxXQUFXLFFBQVEsT0FBTyxXQUFXLFNBQVMsT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxZQUFZLGFBQWEsWUFBWSxZQUFZLFNBQVMsT0FBTyxZQUFZLGFBQWEsWUFBWSxZQUFZLFNBQVMsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxZQUFZLGFBQWEsV0FBVyxRQUFRLE9BQU8sWUFBWSxhQUFhLFdBQVcsUUFBUSxPQUFPLFlBQVksYUFBYSxXQUFXLFFBQVEsT0FBTyxZQUFZLGFBQWEsU0FBUyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFlBQVksUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsYUFBYSxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFlBQVksWUFBWSxTQUFTLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxZQUFZLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsWUFBWSxTQUFTLE9BQU8sWUFBWSxhQUFhLFdBQVcsUUFBUSxPQUFPLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsVUFBVSxRQUFRLE9BQU8sWUFBWSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxTQUFTLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsUUFBUSxP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O0FBRUE7QUFDQSxLQUFLLEtBQTZCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsQ0FBQzs7Ozs7Ozs7Ozs7QUNyTUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksWUFBWTtBQUN4QixZQUFZLE9BQU87QUFDbkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBLGlCQUFpQjs7QUFFakIsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsMkJBQTJCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0ICcuLi9hc3NldHMvY3NzL2luZGV4LnNjc3MnO1xyXG5cclxuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xyXG5pbXBvcnQgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLXRvbW9ycm93LmNzcyc7XHJcbi8vIGltcG9ydCAncHJpc21qcy90aGVtZXMvcHJpc20tb2thaWRpYS5jc3MnO1xyXG4vLyBpbXBvcnQgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLWZ1bmt5LmNzcydcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvdG9vbGJhci9wcmlzbS10b29sYmFyJztcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvdG9vbGJhci9wcmlzbS10b29sYmFyLmNzcyc7XHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMnOyAvLyBjbGFzcz1cImxpbmUtbnVtYmVyc1wiXHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzJztcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvbWF0Y2gtYnJhY2VzL3ByaXNtLW1hdGNoLWJyYWNlcyc7IC8vIGNsYXNzPVwibWF0Y2gtYnJhY2VzXCJcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvbWF0Y2gtYnJhY2VzL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3MnO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9jb3B5LXRvLWNsaXBib2FyZC9wcmlzbS1jb3B5LXRvLWNsaXBib2FyZCc7XHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL25vcm1hbGl6ZS13aGl0ZXNwYWNlL3ByaXNtLW5vcm1hbGl6ZS13aGl0ZXNwYWNlJztcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvc2hvdy1sYW5ndWFnZS9wcmlzbS1zaG93LWxhbmd1YWdlJztcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvZG93bmxvYWQtYnV0dG9uL3ByaXNtLWRvd25sb2FkLWJ1dHRvbic7XHJcblxyXG4vLyBQcmlzbS5oaWdobGlnaHRBbGwoKTtcclxuXHJcbi8vIGltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXHJcblxyXG5jb25zdCBNeUFwcCA9IChwcm9wcykgPT4ge1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xyXG4gIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS1tYXRjaC1icmFjZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS1tYXRjaC1icmFjZXMuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tbWF0Y2gtYnJhY2VzLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tdG9vbGJhci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLXRvb2xiYXIuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tdG9vbGJhci5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLXRvbW9ycm93LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tdG9tb3Jyb3cuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tdG9tb3Jyb3cuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbNF0hLi9pbmRleC5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJwcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXS5saW5lLW51bWJlcnMge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDMuOGVtO1xcblxcdGNvdW50ZXItcmVzZXQ6IGxpbmVudW1iZXI7XFxufVxcblxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLmxpbmUtbnVtYmVycyA+IGNvZGUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aGl0ZS1zcGFjZTogaW5oZXJpdDtcXG59XFxuXFxuLmxpbmUtbnVtYmVycyAubGluZS1udW1iZXJzLXJvd3Mge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHR0b3A6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGxlZnQ6IC0zLjhlbTtcXG5cXHR3aWR0aDogM2VtOyAvKiB3b3JrcyBmb3IgbGluZS1udW1iZXJzIGJlbG93IDEwMDAgbGluZXMgKi9cXG5cXHRsZXR0ZXItc3BhY2luZzogLTFweDtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5O1xcblxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxufVxcblxcblxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW4ge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBsaW5lbnVtYmVyO1xcblxcdH1cXG5cXG5cXHRcXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuOmJlZm9yZSB7XFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihsaW5lbnVtYmVyKTtcXG5cXHRcXHRcXHRjb2xvcjogIzk5OTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRcXHRwYWRkaW5nLXJpZ2h0OiAwLjhlbTtcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHRcXHR9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLE1BQU07Q0FDTixlQUFlO0NBQ2YsWUFBWTtDQUNaLFVBQVUsRUFBRSw0Q0FBNEM7Q0FDeEQsb0JBQW9CO0NBQ3BCLDRCQUE0Qjs7Q0FFNUIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsaUJBQWlCOztBQUVsQjs7Q0FFQztFQUNDLGNBQWM7RUFDZCw2QkFBNkI7Q0FDOUI7O0VBRUM7R0FDQyw0QkFBNEI7R0FDNUIsV0FBVztHQUNYLGNBQWM7R0FDZCxvQkFBb0I7R0FDcEIsaUJBQWlCO0VBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLmxpbmUtbnVtYmVycyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmctbGVmdDogMy44ZW07XFxuXFx0Y291bnRlci1yZXNldDogbGluZW51bWJlcjtcXG59XFxuXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzID4gY29kZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdoaXRlLXNwYWNlOiBpbmhlcml0O1xcbn1cXG5cXG4ubGluZS1udW1iZXJzIC5saW5lLW51bWJlcnMtcm93cyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdHRvcDogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0bGVmdDogLTMuOGVtO1xcblxcdHdpZHRoOiAzZW07IC8qIHdvcmtzIGZvciBsaW5lLW51bWJlcnMgYmVsb3cgMTAwMCBsaW5lcyAqL1xcblxcdGxldHRlci1zcGFjaW5nOiAtMXB4O1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5OTk7XFxuXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG59XFxuXFxuXFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbiB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGxpbmVudW1iZXI7XFxuXFx0fVxcblxcblxcdFxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW46YmVmb3JlIHtcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGxpbmVudW1iZXIpO1xcblxcdFxcdFxcdGNvbG9yOiAjOTk5O1xcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdFxcdHBhZGRpbmctcmlnaHQ6IDAuOGVtO1xcblxcdFxcdFxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdFxcdH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtaG92ZXIsXFxuLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLXNlbGVjdGVkIHtcXG5cXHRvdXRsaW5lOiBzb2xpZCAxcHg7XFxufVxcblxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMSxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTUsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC05IHtcXG5cXHRjb2xvcjogI0U1MDtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTIsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC02LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMTAge1xcblxcdGNvbG9yOiAjMEIzO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMyxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTcsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xMSB7XFxuXFx0Y29sb3I6ICMyNkY7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC00LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtOCxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTEyIHtcXG5cXHRjb2xvcjogI0UwRTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FFQyxrQkFBa0I7QUFDbkI7O0FBRUE7OztDQUdDLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7QUFDQTs7O0NBR0MsV0FBVztDQUNYLFVBQVU7QUFDWDtBQUNBOzs7Q0FHQyxXQUFXO0NBQ1gsVUFBVTtBQUNYO0FBQ0E7OztDQUdDLFdBQVc7Q0FDWCxVQUFVO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWhvdmVyLFxcbi50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1zZWxlY3RlZCB7XFxuXFx0b3V0bGluZTogc29saWQgMXB4O1xcbn1cXG5cXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTEsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC01LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtOSB7XFxuXFx0Y29sb3I6ICNFNTA7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0yLFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtNixcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTEwIHtcXG5cXHRjb2xvcjogIzBCMztcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTMsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC03LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMTEge1xcblxcdGNvbG9yOiAjMjZGO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtNCxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTgsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xMiB7XFxuXFx0Y29sb3I6ICNFMEU7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNvZGUtdG9vbGJhciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IC4zZW07XFxuXFx0cmlnaHQ6IC4yZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdG9wYWNpdHk6IDA7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXI6aG92ZXIgPiAudG9vbGJhciB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLyogU2VwYXJhdGUgbGluZSBiL2MgcnVsZXMgYXJlIHRocm93biBvdXQgaWYgc2VsZWN0b3IgaXMgaW52YWxpZC5cXG4gICBJRTExIGFuZCBvbGQgRWRnZSB2ZXJzaW9ucyBkb24ndCBzdXBwb3J0IDpmb2N1cy13aXRoaW4uICovXFxuZGl2LmNvZGUtdG9vbGJhcjpmb2N1cy13aXRoaW4gPiAudG9vbGJhciB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGJvcmRlcjogMDtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0b3ZlcmZsb3c6IHZpc2libGU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBmb3IgYnV0dG9uICovXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b24sXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IHNwYW4ge1xcblxcdGNvbG9yOiAjYmJiO1xcblxcdGZvbnQtc2l6ZTogLjhlbTtcXG5cXHRwYWRkaW5nOiAwIC41ZW07XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjJmMDtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuMik7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAwIDAgcmdiYSgwLDAsMCwwLjIpO1xcblxcdCAgICAgICAgYm94LXNoYWRvdzogMCAycHggMCAwIHJnYmEoMCwwLDAsMC4yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAuNWVtO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYTpob3ZlcixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYTpmb2N1cyxcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uOmhvdmVyLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b246Zm9jdXMsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IHNwYW46aG92ZXIsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IHNwYW46Zm9jdXMge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvdG9vbGJhci9wcmlzbS10b29sYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztDQUNYLDRDQUFvQztDQUFwQyxvQ0FBb0M7Q0FDcEMsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBOzREQUM0RDtBQUM1RDtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULGNBQWM7Q0FDZCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YseUJBQXlCLEVBQUUsZUFBZTtDQUMxQyxzQkFBc0I7Q0FDdEIscUJBQXFCO0FBQ3RCOztBQUVBOzs7Q0FHQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsb0NBQW9DO0NBQ3BDLDZDQUFxQztTQUFyQyxxQ0FBcUM7Q0FDckMsbUJBQW1CO0FBQ3BCOztBQUVBOzs7Ozs7Q0FNQyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5jb2RlLXRvb2xiYXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAuM2VtO1xcblxcdHJpZ2h0OiAuMmVtO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRvcGFjaXR5OiAwO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyOmhvdmVyID4gLnRvb2xiYXIge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIFNlcGFyYXRlIGxpbmUgYi9jIHJ1bGVzIGFyZSB0aHJvd24gb3V0IGlmIHNlbGVjdG9yIGlzIGludmFsaWQuXFxuICAgSUUxMSBhbmQgb2xkIEVkZ2UgdmVyc2lvbnMgZG9uJ3Qgc3VwcG9ydCA6Zm9jdXMtd2l0aGluLiAqL1xcbmRpdi5jb2RlLXRvb2xiYXI6Zm9jdXMtd2l0aGluID4gLnRvb2xiYXIge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0ge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGEge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcdG92ZXJmbG93OiB2aXNpYmxlO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogZm9yIGJ1dHRvbiAqL1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYSxcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBzcGFuIHtcXG5cXHRjb2xvcjogI2JiYjtcXG5cXHRmb250LXNpemU6IC44ZW07XFxuXFx0cGFkZGluZzogMCAuNWVtO1xcblxcdGJhY2tncm91bmQ6ICNmNWYyZjA7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjIpO1xcblxcdGJveC1zaGFkb3c6IDAgMnB4IDAgMCByZ2JhKDAsMCwwLDAuMik7XFxuXFx0Ym9yZGVyLXJhZGl1czogLjVlbTtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGE6aG92ZXIsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGE6Zm9jdXMsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbjpob3ZlcixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uOmZvY3VzLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBzcGFuOmhvdmVyLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBzcGFuOmZvY3VzIHtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIHByaXNtLmpzIHRvbW9ycm93IG5pZ2h0IGVpZ2h0aWVzIGZvciBKYXZhU2NyaXB0LCBDb2ZmZWVTY3JpcHQsIENTUyBhbmQgSFRNTFxcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2tlbXBzb24vdG9tb3Jyb3ctdGhlbWVcXG4gKiBAYXV0aG9yIFJvc2UgUHJpdGNoYXJkXFxuICovXFxuXFxuY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLFxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRjb2xvcjogI2NjYztcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHR3aGl0ZS1zcGFjZTogcHJlO1xcblxcdHdvcmQtc3BhY2luZzogbm9ybWFsO1xcblxcdHdvcmQtYnJlYWs6IG5vcm1hbDtcXG5cXHR3b3JkLXdyYXA6IG5vcm1hbDtcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcblxcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0dGFiLXNpemU6IDQ7XFxuXFxuXFx0LXdlYmtpdC1oeXBoZW5zOiBub25lO1xcblxcdC1tb3otaHlwaGVuczogbm9uZTtcXG5cXHQtbXMtaHlwaGVuczogbm9uZTtcXG5cXHRoeXBoZW5zOiBub25lO1xcblxcbn1cXG5cXG4vKiBDb2RlIGJsb2NrcyAqL1xcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0bWFyZ2luOiAuNWVtIDA7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSxcXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogIzJkMmQyZDtcXG59XFxuXFxuLyogSW5saW5lIGNvZGUgKi9cXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdHBhZGRpbmc6IC4xZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogLjNlbTtcXG5cXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5cXG4udG9rZW4uY29tbWVudCxcXG4udG9rZW4uYmxvY2stY29tbWVudCxcXG4udG9rZW4ucHJvbG9nLFxcbi50b2tlbi5kb2N0eXBlLFxcbi50b2tlbi5jZGF0YSB7XFxuXFx0Y29sb3I6ICM5OTk7XFxufVxcblxcbi50b2tlbi5wdW5jdHVhdGlvbiB7XFxuXFx0Y29sb3I6ICNjY2M7XFxufVxcblxcbi50b2tlbi50YWcsXFxuLnRva2VuLmF0dHItbmFtZSxcXG4udG9rZW4ubmFtZXNwYWNlLFxcbi50b2tlbi5kZWxldGVkIHtcXG5cXHRjb2xvcjogI2UyNzc3YTtcXG59XFxuXFxuLnRva2VuLmZ1bmN0aW9uLW5hbWUge1xcblxcdGNvbG9yOiAjNjE5NmNjO1xcbn1cXG5cXG4udG9rZW4uYm9vbGVhbixcXG4udG9rZW4ubnVtYmVyLFxcbi50b2tlbi5mdW5jdGlvbiB7XFxuXFx0Y29sb3I6ICNmMDhkNDk7XFxufVxcblxcbi50b2tlbi5wcm9wZXJ0eSxcXG4udG9rZW4uY2xhc3MtbmFtZSxcXG4udG9rZW4uY29uc3RhbnQsXFxuLnRva2VuLnN5bWJvbCB7XFxuXFx0Y29sb3I6ICNmOGM1NTU7XFxufVxcblxcbi50b2tlbi5zZWxlY3RvcixcXG4udG9rZW4uaW1wb3J0YW50LFxcbi50b2tlbi5hdHJ1bGUsXFxuLnRva2VuLmtleXdvcmQsXFxuLnRva2VuLmJ1aWx0aW4ge1xcblxcdGNvbG9yOiAjY2M5OWNkO1xcbn1cXG5cXG4udG9rZW4uc3RyaW5nLFxcbi50b2tlbi5jaGFyLFxcbi50b2tlbi5hdHRyLXZhbHVlLFxcbi50b2tlbi5yZWdleCxcXG4udG9rZW4udmFyaWFibGUge1xcblxcdGNvbG9yOiAjN2VjNjk5O1xcbn1cXG5cXG4udG9rZW4ub3BlcmF0b3IsXFxuLnRva2VuLmVudGl0eSxcXG4udG9rZW4udXJsIHtcXG5cXHRjb2xvcjogIzY3Y2RjYztcXG59XFxuXFxuLnRva2VuLmltcG9ydGFudCxcXG4udG9rZW4uYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50b2tlbi5pdGFsaWMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRva2VuLmVudGl0eSB7XFxuXFx0Y3Vyc29yOiBoZWxwO1xcbn1cXG5cXG4udG9rZW4uaW5zZXJ0ZWQge1xcblxcdGNvbG9yOiBncmVlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9wcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7RUFJRTs7QUFFRjs7Q0FFQyxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLHNFQUFzRTtDQUN0RSxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixnQkFBZ0I7O0NBRWhCLGdCQUFnQjtDQUVoQixXQUFXOztDQUVYLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGFBQWE7O0FBRWQ7O0FBRUEsZ0JBQWdCO0FBQ2hCO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBLGdCQUFnQjtBQUNoQjtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCOztBQUVBOzs7OztDQUtDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTs7OztDQUlDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTs7O0NBR0MsY0FBYztBQUNmOztBQUVBOzs7O0NBSUMsY0FBYztBQUNmOztBQUVBOzs7OztDQUtDLGNBQWM7QUFDZjs7QUFFQTs7Ozs7Q0FLQyxjQUFjO0FBQ2Y7O0FBRUE7OztDQUdDLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBwcmlzbS5qcyB0b21vcnJvdyBuaWdodCBlaWdodGllcyBmb3IgSmF2YVNjcmlwdCwgQ29mZmVlU2NyaXB0LCBDU1MgYW5kIEhUTUxcXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNrZW1wc29uL3RvbW9ycm93LXRoZW1lXFxuICogQGF1dGhvciBSb3NlIFByaXRjaGFyZFxcbiAqL1xcblxcbmNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSxcXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0Y29sb3I6ICNjY2M7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgJ1VidW50dSBNb25vJywgbW9ub3NwYWNlO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0d2hpdGUtc3BhY2U6IHByZTtcXG5cXHR3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG5cXHR3b3JkLWJyZWFrOiBub3JtYWw7XFxuXFx0d29yZC13cmFwOiBub3JtYWw7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG5cXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdC1vLXRhYi1zaXplOiA0O1xcblxcdHRhYi1zaXplOiA0O1xcblxcblxcdC13ZWJraXQtaHlwaGVuczogbm9uZTtcXG5cXHQtbW96LWh5cGhlbnM6IG5vbmU7XFxuXFx0LW1zLWh5cGhlbnM6IG5vbmU7XFxuXFx0aHlwaGVuczogbm9uZTtcXG5cXG59XFxuXFxuLyogQ29kZSBibG9ja3MgKi9cXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdG1hcmdpbjogLjVlbSAwO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0sXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdGJhY2tncm91bmQ6ICMyZDJkMmQ7XFxufVxcblxcbi8qIElubGluZSBjb2RlICovXFxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRwYWRkaW5nOiAuMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IC4zZW07XFxuXFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXFxuLnRva2VuLmNvbW1lbnQsXFxuLnRva2VuLmJsb2NrLWNvbW1lbnQsXFxuLnRva2VuLnByb2xvZyxcXG4udG9rZW4uZG9jdHlwZSxcXG4udG9rZW4uY2RhdGEge1xcblxcdGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4udG9rZW4ucHVuY3R1YXRpb24ge1xcblxcdGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4udG9rZW4udGFnLFxcbi50b2tlbi5hdHRyLW5hbWUsXFxuLnRva2VuLm5hbWVzcGFjZSxcXG4udG9rZW4uZGVsZXRlZCB7XFxuXFx0Y29sb3I6ICNlMjc3N2E7XFxufVxcblxcbi50b2tlbi5mdW5jdGlvbi1uYW1lIHtcXG5cXHRjb2xvcjogIzYxOTZjYztcXG59XFxuXFxuLnRva2VuLmJvb2xlYW4sXFxuLnRva2VuLm51bWJlcixcXG4udG9rZW4uZnVuY3Rpb24ge1xcblxcdGNvbG9yOiAjZjA4ZDQ5O1xcbn1cXG5cXG4udG9rZW4ucHJvcGVydHksXFxuLnRva2VuLmNsYXNzLW5hbWUsXFxuLnRva2VuLmNvbnN0YW50LFxcbi50b2tlbi5zeW1ib2wge1xcblxcdGNvbG9yOiAjZjhjNTU1O1xcbn1cXG5cXG4udG9rZW4uc2VsZWN0b3IsXFxuLnRva2VuLmltcG9ydGFudCxcXG4udG9rZW4uYXRydWxlLFxcbi50b2tlbi5rZXl3b3JkLFxcbi50b2tlbi5idWlsdGluIHtcXG5cXHRjb2xvcjogI2NjOTljZDtcXG59XFxuXFxuLnRva2VuLnN0cmluZyxcXG4udG9rZW4uY2hhcixcXG4udG9rZW4uYXR0ci12YWx1ZSxcXG4udG9rZW4ucmVnZXgsXFxuLnRva2VuLnZhcmlhYmxlIHtcXG5cXHRjb2xvcjogIzdlYzY5OTtcXG59XFxuXFxuLnRva2VuLm9wZXJhdG9yLFxcbi50b2tlbi5lbnRpdHksXFxuLnRva2VuLnVybCB7XFxuXFx0Y29sb3I6ICM2N2NkY2M7XFxufVxcblxcbi50b2tlbi5pbXBvcnRhbnQsXFxuLnRva2VuLmJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udG9rZW4uaXRhbGljIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50b2tlbi5lbnRpdHkge1xcblxcdGN1cnNvcjogaGVscDtcXG59XFxuXFxuLnRva2VuLmluc2VydGVkIHtcXG5cXHRjb2xvcjogZ3JlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9tdXNpYy1iYW5uZXIuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogTW9uYWNvLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LW1zLWNsZWFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIG1vbm9zcGFjZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI0ZERkZGQztcXG59XFxuXFxuY29kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIG1vbm9zcGFjZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG59XFxuXFxuLmhlYWRlciA6OnNsb3R0ZWQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICBoZWlnaHQ6IDY1cHg7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbn1cXG5cXG4uYW5uaXZlcnNhcnkge1xcbiAgLyogZmYzLjYrICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgI0ZGMjI3NyksIGNvbG9yLXN0b3AoMTAwJSwgYXF1YSkpO1xcbiAgLyogc2FmYXJpNCssY2hyb21lICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZGMjI3NyAwJSwgYXF1YSAxMDAlKTtcXG4gIC8qIHNhZmFyaTUuMSssY2hyb21lMTArICovXFxuICAvKiBvcGVyYSAxMS4xMCsgKi9cXG4gIC8qIGllMTArICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRjIyNzcgMCUsIGFxdWEgMTAwJSk7XFxuICAvKiB3M2MgKi9cXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVxcXCIjMDBmZmZmXFxcIiwgZW5kQ29sb3JzdHI9XFxcIiNmZjAwZmZcXFwiLEdyYWRpZW50VHlwZT0xICk7XFxuICAvKiBpZTYtOSAqL1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5waG9lbml4IHtcXG4gIC8qIGZmMy42KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNDNTI0MzcpLCBjb2xvci1zdG9wKDEwMCUsICNGN0UyN0MpKTtcXG4gIC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNDNTI0MzcgMCUsICNGN0UyN0MgMTAwJSk7XFxuICAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcbiAgLyogb3BlcmEgMTEuMTArICovXFxuICAvKiBpZTEwKyAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjQzUyNDM3IDAlLCAjRjdFMjdDIDEwMCUpO1xcbiAgLyogdzNjICovXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0kcGhvZW5peC1wcmltYXJ5LWNvbG9yLCBlbmRDb2xvcnN0cj0kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcixHcmFkaWVudFR5cGU9MSApO1xcbiAgLyogaWU2LTkgKi9cXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udmhzLWNvbG9yIHtcXG4gIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtNXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTVweCAwcHgsIHJlZCAzLjVweCAzLjVweCAwcHg7XFxufVxcblxcbi50ZXJ0aWFyeS10ZXh0LWNvbG9yIHtcXG4gIGNvbG9yOiAjRkYyMjc3O1xcbn1cXG5cXG4ubWFpbi1ncmFkaWVudC10ZXh0IHtcXG4gIC8qIGZmMy42KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNDNTI0MzcpLCBjb2xvci1zdG9wKDEwMCUsICNGN0UyN0MpKTtcXG4gIC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNDNTI0MzcgMCUsICNGN0UyN0MgMTAwJSk7XFxuICAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcbiAgLyogb3BlcmEgMTEuMTArICovXFxuICAvKiBpZTEwKyAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjQzUyNDM3IDAlLCAjRjdFMjdDIDEwMCUpO1xcbiAgLyogdzNjICovXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0kcGhvZW5peC1wcmltYXJ5LWNvbG9yLCBlbmRDb2xvcnN0cj0kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcixHcmFkaWVudFR5cGU9MSApO1xcbiAgLyogaWU2LTkgKi9cXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubWFpbi1ib2R5IHtcXG4gIHRvcDogNzVweDtcXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA3NXB4KTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzVweCk7XFxufVxcblxcbi5wb3B1cCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRvcDogNzVweDtcXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMHZoIC0gNzVweCAtIDcwcHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCAtIDcwcHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XFxcXDkgO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0jMjIwMDAwMDAsZW5kQ29sb3JzdHI9IzIyMDAwMDAwKTtcXG4gIHpvb206IDE7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIge1xcbiAgei1pbmRleDogMTEwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4IDBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucG9wdXAtZGl2IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiA1MDBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMHB4ICNGRjIyNzc7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ucG9wdXAgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAgY29kZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzM5M0U0MTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMzOTNFNDE7XFxufVxcblxcbi5wb3B1cCA+IGRpdiBzbWFsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjRkYyMjc3O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNoYXJlLWJ1dHRvbi1kaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hhcmUtYnV0dG9uLWRpdiA+ICoge1xcbiAgbWFyZ2luOiA1cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG59XFxuXFxuLnNoYXJlLWJ1dHRvbi1kaXYgPiAqOmhvdmVyIC5zaGFyZS1idXR0b24taWNvbiB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICNGRjIyNzcgM3B4IDJweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogI0ZGMjI3NyAzcHggMnB4O1xcbn1cXG5cXG4uc2hhcmUtYnV0dG9uLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxufVxcblxcbi5zaGFyZS1jb3VudC13cmFwcGVyID4gKiB7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnNoYXJlLWxpbmstY29weSB7XFxuICBwYWRkaW5nOiA3LjVweCAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDc7XFxuICBwYWRkaW5nLWJvdHRvbTogODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjIyNzc7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxuICAgICAgICAgIGJveC1zaGFkb3c6ICMzOTNFNDEgNXB4IDIuNXB4O1xcbn1cXG5cXG4uc2hhcmUtbGluayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMzIwcHg7XFxuICBwYWRkaW5nOiA3LjVweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxufVxcblxcbi5uYXZpZ2F0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIGhlaWdodDogMzVweDtcXG4gIHRvcDogNzVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzM5M0U0MTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMzOTNFNDE7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkYyMjc3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA0NXB4KTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxufVxcblxcbi5uYXZpZ2F0b3IgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggIzM5M0U0MTtcXG59XFxuXFxuLm5hdmlnYXRvciBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGJ1dHRvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgbWFyZ2luOiAxLjI1cHg7XFxuICByaWdodDogNDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweCA4cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICMzOTNFNDEgNXB4IDIuNXB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG59XFxuXFxuLm5hdmlnYXRvciBidXR0b246aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDcuNXB4IDIuNXB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMzkzRTQxIDcuNXB4IDIuNXB4O1xcbn1cXG5cXG4ubmF2aWdhdG9yIGJ1dHRvbiBpbnB1dCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLm5hdmlnYXRvciBidXR0b24gbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDM1cHggLSA3NXB4IC0gNzBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNXB4IC0gNzVweCAtIDcwcHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmxpbmstZGlzYWJsZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMjUwcHggNzVweCAjMTAxMDEwLCAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDc1cHggIzEwMTAxMCwgMTBweCA3LjVweCAxcHggMHB4ICNGRjIyNzc7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICMzOTNFNDE7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICMzOTNFNDE7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiAqIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiBwIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIHNtYWxsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAyMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCA3NXB4ICMxMDEwMTAsIDEwcHggNy41cHggMXB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjUwcHggNzVweCAjMTAxMDEwLCAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDMwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWw6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wb3N0LXRodW1ibmFpbCBkaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnBvc3QtdGh1bWJuYWlsIGRpdiAqIHtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWwgZGl2IHAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnBvc3QtdGh1bWJuYWlsIHNtYWxsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAyMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1wYWdlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNsb3NlLWljb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZS1pY29uOmhvdmVyIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxufVxcblxcbi5zaGFyZS1pY29uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICByaWdodDogOTBweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAycHggI0ZGMjI3Nyk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMnB4ICNGRjIyNzcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hhcmUtaWNvbjpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG59XFxuXFxuLmFib3V0LWgxIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hYm91dC1oMiB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmFib3V0LXAge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IC03LjVweDtcXG59XFxuXFxuLmFib3V0LW1lIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYyMjc3O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICMzOTNFNDE7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLmFib3V0LW1lIGltZyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICMyMjIyMjIgMXB4IDFweCAxMHB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMjIyMjIyIDFweCAxcHggMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwdncgLSAxMDBweCk7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4uY29udGFjdC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtcmlnaHQgaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNvbnRhY3QtcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYyMjc3O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICMzOTNFNDE7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICNGRjIyNzc7XFxufVxcblxcbi5jb250YWN0LXRodW1ibmFpbDpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMXB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDFweCAwcHggI0ZGMjI3NztcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIGRpdiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gODBweCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4ucDUtaW5mbyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM5M0U0MTtcXG59XFxuXFxuLnA1LWluZm8gaDEge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ucDUtaW5mbyBwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucDUtaW5mbyBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYyMjc3O1xcbn1cXG5cXG4ucDUtaW5mbyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICBib3JkZXI6IG5vbmU7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG59XFxuXFxuLnA1LWluZm8tc2xpZGUge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNzVweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGxlZnQ6IDI1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5wNS1pbmZvLXNsaWRlIGltZyB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIGhlaWdodDogNDBweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxufVxcblxcbi5wNS1pbmZvLXNsaWRlIGltZzpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICMzOTNFNDEpO1xcbn1cXG5cXG4ucDUtaW5mby1zaG93IHtcXG4gIHotaW5kZXg6IDU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXG59XFxuXFxuLnA1LWluZm8tc2hvdyBwIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5wNS1pbmZvLXNob3c6OmFmdGVyIHtcXG4gIHotaW5kZXg6IDIwO1xcbiAgY29udGVudDogXFxcIkhpZGUgdGhpcyBpbmZvcm1hdGlvbiBwYW5lbCB3aXRoIHRoZSBeIGJ1dHRvbiBhYm92ZVxcXCI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDEwLjVweDtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5wNS1jYW52YXMge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDA7XFxuICB0b3A6IDE1MHB4O1xcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCAtIDc1cHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCAtIDcwcHggLSA3NXB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4ud2VibG9nLXNpZ25hdHVyZSB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgY29sb3I6ICNGRjIyNzc7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLm11c2ljLXJlbGVhc2UtYmFubmVyIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDBweDtcXG59XFxuXFxuLm11c2ljLXJlbGVhc2UtYmFubmVyIHAsIC5tdXNpYy1yZWxlYXNlLWJhbm5lciBoMSwgLm11c2ljLXJlbGVhc2UtYmFubmVyIGgyLCAubXVzaWMtcmVsZWFzZS1iYW5uZXIgaDMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiAtbW96LW1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCBibGFjaztcXG59XFxuXFxuLnN1Ym1lcmdlbmNlLWhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICMzOTNFNDEpO1xcbn1cXG5cXG4uc3VibWVyZ2VuY2UtaG92ZXIgaW1nIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxufVxcblxcbi5zdWJtZXJnZW5jZS1ob3Zlcjpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAwcHggI0ZGMjI3Nyk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMHB4ICNGRjIyNzcpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZvb3RlciBociB7XFxuICBib3JkZXItY29sb3I6ICNGRjIyNzc7XFxufVxcblxcbi5mb290ZXIgYnV0dG9uLCAuZm9vdGVyIGEge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMyMjIyMjI7XFxufVxcblxcbi5mb290ZXIgYnV0dG9uOmhvdmVyLCAuZm9vdGVyIGE6aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI0ZERkZGQztcXG59XFxuXFxuLmNvcHlyaWdodCB7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBjb2xvcjogI0ZGMjI3NztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtc2hhZG93OiAjMjIyMjIyIDJweCAycHggMXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIGgxLCAuaGVhZGVyIGltZyB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDU1cHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnBvcHVwIHtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDc1cHggLSA3MHB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3NXB4IC0gNzBweCk7XFxuICB9XFxuXFxuICAubmF2aWdhdG9yIGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRvciBidXR0b24ge1xcbiAgICByaWdodDogNDVweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMHZoIC0gMzVweCAtIDc1cHggLSA3MHB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzVweCAtIDc1cHggLSA3MHB4KTtcXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWwge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG5cXG4gIC5wb3N0LXRodW1ibmFpbCB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsOmZpcnN0LW9mLXR5cGUsIC5wb3N0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbDpsYXN0LW9mLXR5cGUsIC5wb3N0LXRodW1ibmFpbDpsYXN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbCBwIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIHAge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIHNtYWxsIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIGRpdiB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIH1cXG5cXG4gIC5jbG9zZS1pY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtcGFnZSB7XFxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMHZoIC0gNzVweCAtIDcwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICB9XFxuXFxuICAuY29udGFjdC1sZWZ0IHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250YWN0LXJpZ2h0IHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBsZWZ0OiA0MHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYyg2MHZ3IC0gMTAwcHgpO1xcbiAgICB3aWR0aDogY2FsYyg2MHZ3IC0gMTAwcHgpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1yaWdodCBoMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAuYWJvdXQge1xcbiAgICBtYXJnaW46IDAgMjAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgfVxcblxcbiAgLmFib3V0LW1lIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSBpbWcge1xcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDUwJSAtIDQyLjVweCk7XFxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDQyLjVweCk7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcmlnaHQ6IDA7XFxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSBkaXYge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNy41cHg7XFxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSBkaXYgcCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIHtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgfVxcblxcbiAgLnA1LWluZm8gaDEge1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAucDUtaW5mbyBwIHtcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB9XFxuXFxuICAucDUtaW5mbyBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNy41cHggMTJweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTQ1cHg7XFxuICB9XFxuXFxuICAucDUtaW5mby1zbGlkZSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8tc2xpZGUgaW1nIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxuICB9XFxuXFxuICAucDUtaW5mby1zaG93IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNob3c6OmFmdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIC5zdWJtZXJnZW5jZS1ob3ZlciBiciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAud2VibG9nLXBvc3Qge1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC53ZWJsb2ctcG9zdCAqIHtcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXG4gICAgbWFyZ2luOiAycHggYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLndlYmxvZy1wb3N0IHNtYWxsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAud2VibG9nLXBvc3QgcCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgfVxcblxcbiAgLndlYmxvZy1wb3N0IGgxIHtcXG4gICAgbWF4LXdpZHRoOiAtd2Via2l0LWNhbGMoMTAwdncgLSAyNTBweCk7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDI1MHB4KTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICB9XFxuXFxuICAuZm9vdGVyIGJ1dHRvbiwgLmZvb3RlciBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDVweCAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG5cXG4gIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICBjb2RlIHtcXG4gICAgcGFkZGluZzogMHB4IDRweDtcXG4gIH1cXG5cXG4gIC5tYWluLWJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcblxcbiAgLmhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuXFxuICAuaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgfVxcblxcbiAgLnBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDAlIC0gNDBweCAtIDcwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHggLSA3MHB4KTtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0b3IgaW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0b3IgYnV0dG9uIHtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgfVxcblxcbiAgLm5hdmlnYXRvciBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gNDVweCk7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyMDBweCA1MHB4IGJsYWNrLCAxMHB4IDEwcHggMXB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMDBweCA1MHB4IGJsYWNrLCAxMHB4IDEwcHggMXB4IDBweCAjRkYyMjc3O1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcblxcbiAgLnBvc3QtdGh1bWJuYWlsIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwMHB4IDUwcHggYmxhY2ssIDEwcHggMTBweCAxcHggMHB4ICNGRjIyNzc7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwMHB4IDUwcHggYmxhY2ssIDEwcHggMTBweCAxcHggMHB4ICNGRjIyNzc7XFxuICB9XFxuXFxuICAucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICB9XFxuXFxuICAucG9zdC10aHVtYm5haWw6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWwgcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWwgaDIge1xcbiAgICBwYWRkaW5nOiAwcHggNDBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWxpc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSAoMzVweCArIDQwcHggKyA3MHB4KSk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gKDM1cHggKyA0MHB4ICsgNzBweCkpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNsb3NlLWljb24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtcGFnZSB7XFxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSAoNDBweCArIDcwcHgpKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAoNDBweCArIDcwcHgpKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcblxcbiAgLnNoYXJlLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDB2dyAtIDEwMHB4KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMDBweCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtbGVmdCB7XFxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtcmlnaHQge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAuY29udGFjdC1yaWdodCBoMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdC10aHVtYm5haWwgZGl2IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcblxcbiAgLmFib3V0IHtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcblxcbiAgLmFib3V0LW1lIGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lIHAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSBkaXYge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8gaDEge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNy41cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIHAge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuXFxuICAucDUtaW5mbyBidXR0b24sIC5wNS1pbmZvIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBjb2xvcjogI0ZERkZGQztcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA3LjVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0ycHg7XFxuICAgIHJpZ2h0OiAzNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8gaW5wdXQge1xcbiAgICB3aWR0aDogMTY1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8tc2xpZGUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICB9XFxuXFxuICAucDUtaW5mby1zbGlkZSBpbWcge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNob3cge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICB9XFxuXFxuICAucDUtaW5mby1zaG93OjphZnRlciB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuXFxuICAucDUtY2FudmFzIHtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDAlIC0gNDBweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAuc3VibWVyZ2VuY2UtaG92ZXIgYnIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC53ZWJsb2ctcG9zdCB7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcblxcbiAgLndlYmxvZy1wb3N0IHAge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICB9XFxuXFxuICAuZm9vdGVyIGJ1dHRvbiwgLmZvb3RlciBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDcuNXB4IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vbmF2aWdhdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vdGh1bWJuYWlsLnNjc3NcIixcIndlYnBhY2s6Ly9wcm9qZWN0LnNjc3NcIixcIndlYnBhY2s6Ly93ZWItdmlldy5zY3NzXCIsXCJ3ZWJwYWNrOi8vbW9iaWxlLXZpZXcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrQ0E7RUFDRSxTQUFBO0VBQ0EsOEJBbEJVO0FBZlo7O0FBb0NBO0VBQ0kseUJBeENZO0VBeUNaLGVBbEJnQjtBQWZwQjs7QUFvQ0E7RUFFSSxhQUFBO0FBbENKOztBQXFDQTtFQUNJLGFBQUE7QUFsQ0o7O0FBcUNBO0VBQ0ksZUFBQTtBQWxDSjs7QUF5Q0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQWhFWTtFQWlFWixjQTdEaUI7RUE4RGpCLDhCQWhEUTtFQWlEUixhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBdENKOztBQXlDQTtFQUNJLFlBQUE7RUFDQSxpQ0FqRG1CO0VBaURuQix5QkFqRG1CO0VBb0RuQixlQUFBO0FBeENKOztBQTJDQTtFQUdJLDRCQUFBO0FBMUNKOztBQTZDQTtFQUNJLHlCQXRGYztFQXVGZCxZQUFBO0VBQ0Esa0JBQUE7QUExQ0o7O0FBNkNBO0VBQ0ksOEJBOUVTO0VBK0VULHlCQTdGYztFQThGZCxXQUFBO0VBQ0EsWUE3RVk7QUFtQ2hCOztBQTZDQTtFQUNJLFdBQUE7QUExQ0o7O0FBNkNBO0VBQ0ksaUNBL0VtQjtFQStFbkIseUJBL0VtQjtFQWtGbkIsWUFBQTtFQUNBLFdBQUE7QUE1Q0o7O0FBc0RBO0VBQ0ksaUNBOUZtQjtFQThGbkIseUJBOUZtQjtBQTJDdkI7O0FBd0RBO0VBQ3lGLFdBQUE7RUFDckYsNkdBQUE7RUFBb0ksb0JBQUE7RUFDcEksaUVBQUE7RUFBd0YseUJBQUE7RUFDTCxpQkFBQTtFQUNDLFVBQUE7RUFDcEYseURBQUE7RUFBZ0YsUUFBQTtFQUNoRixtSEFBQTtFQUFxSCxVQUFBO0VBQ3JILDZCQUFBO0VBQ0Esb0NBQUE7QUE5Q0o7O0FBaURBO0VBQ3NHLFdBQUE7RUFDbEcsZ0hBQUE7RUFBaUosb0JBQUE7RUFDakosb0VBQUE7RUFBcUcseUJBQUE7RUFDTCxpQkFBQTtFQUNDLFVBQUE7RUFDakcsNERBQUE7RUFBNkYsUUFBQTtFQUM3Riw4SUFBQTtFQUFnSixVQUFBO0VBQ2hKLDZCQUFBO0VBQ0Esb0NBQUE7QUF2Q0o7O0FBMENBO0VBS0ksK0VBQUE7QUEzQ0o7O0FBOENBO0VBQ0ksY0F2SmtCO0FBNEd0Qjs7QUE4Q0E7RUFDc0csV0FBQTtFQUNsRyxnSEFBQTtFQUFpSixvQkFBQTtFQUNqSixvRUFBQTtFQUFxRyx5QkFBQTtFQUNMLGlCQUFBO0VBQ0MsVUFBQTtFQUNqRyw0REFBQTtFQUE2RixRQUFBO0VBQzdGLDhJQUFBO0VBQWdKLFVBQUE7RUFDaEosNkJBQUE7RUFDQSxvQ0FBQTtBQXBDSjs7QUE0Q0E7RUFDSSxTQS9KWTtFQWdLWixpQ0FBQTtFQUFBLHlCQUFBO0FBekNKOztBQTRDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0F4S1k7RUF5S1oseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLGtCQUFBO0FBekNKOztBQTRDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGlHQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUExQ0o7O0FBNkNBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0Esb0JBQUE7QUEzQ0o7O0FBOENBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUVBLHlDQUFBO1VBQUEsaUNBQUE7RUFFQSxjQWpPaUI7RUFrT2pCLHlCQXRPWTtFQXVPWixrQkFBQTtFQUNBLG1CQUFBO0FBOUNKOztBQWlEQTtFQUNJLGtCQUFBO0FBOUNKOztBQWlEQTtFQUNJLGdCQUFBO0VBQ0EseUJBL09hO0VBaVBiLDBDQUFBO0VBQ0Esa0NBQUE7QUE5Q0o7O0FBaURBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FwUGtCO0VBcVBsQixnQkFBQTtBQTlDSjs7QUFpREE7RUFDSSxrQkFBQTtBQTlDSjs7QUFpREE7RUFDSSxXQUFBO0VBRUEsZ0NBQUE7RUFBQSx3QkFBQTtBQS9DSjs7QUFxREk7RUFDSSxtQ0FBQTtVQUFBLDJCQUFBO0FBbERSOztBQXNEQTtFQUNJLHFCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQW5ESjs7QUFzREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkF4UmM7RUF5UmQsY0F0UmlCO0VBdVJqQixrQkFBQTtBQW5ESjs7QUEwREE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQXBTYTtFQXFTYixjQW5TaUI7RUFvU2pCLFlBQUE7RUFLQSxxQ0FBQTtVQUFBLDZCQUFBO0FBM0RKOztBQThEQTtFQU9JLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFJQSxxQ0FBQTtVQUFBLDZCQUFBO0FBcEVKOztBQzNQQTtFQUNJLHlCRENhO0VDQWIsWURrQlk7RUNqQlosU0RnQlk7RUNmWixXQUFBO0VBQ0EsU0FBQTtBRDhQSjs7QUMzUEE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRDhQSjs7QUMzUEE7RUFFSSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CRHBCYTtFQ3FCYixZQUFBO0VBQ0EsY0RwQmlCO0VDcUJqQixnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkRSWTtBQXNRaEI7O0FDM1BBO0VBQ0ksY0Q1QmlCO0VDNkJqQixnQ0FBQTtBRDhQSjs7QUNoUUE7RUFDSSxjRDVCaUI7RUM2QmpCLGdDQUFBO0FEOFBKOztBQ2hRQTtFQUNJLGNENUJpQjtFQzZCakIsZ0NBQUE7QUQ4UEo7O0FDaFFBO0VBQ0ksY0Q1QmlCO0VDNkJqQixnQ0FBQTtBRDhQSjs7QUMxUEE7RUFDSSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsY0RuQ2lCO0VDb0NqQixjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJEM0NZO0VDNENaLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBS0EscUNBQUE7VUFBQSw2QkFBQTtBRHlQSjs7QUN0UEE7RUFFSSx1Q0FBQTtVQUFBLCtCQUFBO0FEd1BKOztBQ25QQTtFQUVJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjRGhFaUI7RUNpRWpCLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRHNQSjs7QUNuUEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FEc1BKOztBQUNBO0VBQ0ksU0FBQTtFQUNBLGdEQUFBO0VBQUEsd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUUvVUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSw0RUFBQTtVQUFBLG9FQUFBO0VBR0EsYUZhYTtFRVpiLFlGWWE7RUVYYixxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlDRlVtQjtFRVZuQix5QkZVbUI7QUFxVXZCOztBRTNVQTtFQUVJLGlDRkltQjtFRUpuQix5QkZJbUI7RUVGbkIsd0VBQUE7VUFBQSxnRUFBQTtFQUNBLGlCQUFBO0FGNFVKOztBRXpVQTtFQUNJLGlDRkhtQjtFRUduQix5QkZIbUI7RUVJbkIsbUJBQUE7QUY0VUo7O0FFelVBO0VBQ0ksaUNGUm1CO0VFUW5CLHlCRlJtQjtFRVVuQixrQkFBQTtFQUNBLFlGZmE7RUVrQmIsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUZ5VUo7O0FFdFVBO0VBQ0ksaUNGckJtQjtFRXFCbkIseUJGckJtQjtFRXNCbkIsaUJBQUE7QUZ5VUo7O0FFdFVBO0VBQ0ksaUNGMUJtQjtFRTBCbkIseUJGMUJtQjtFRTJCbkIsZ0JBQUE7RUFDQSxnQkFBQTtBRnlVSjs7QUVyVUE7RUFDSSxpQkFBQTtFQUNBLGlDRmxDbUI7RUVrQ25CLHlCRmxDbUI7RUVtQ25CLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBRnVVSjs7QUVwVUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSw0RUFBQTtVQUFBLG9FQUFBO0VBRUEsYUZ6RGE7RUUwRGIsWUYxRGE7RUUyRGIscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0Y1RG1CO0VFNERuQix5QkY1RG1CO0FBaVl2Qjs7QUVqVUE7RUFFSSxpQ0ZsRW1CO0VFa0VuQix5QkZsRW1CO0VFb0VmLHdFQUFBO1VBQUEsZ0VBQUE7RUFDSixpQkFBQTtBRmtVSjs7QUUvVEE7RUFDSSxtQkFBQTtBRmtVSjs7QUUvVEE7RUFFSSxrQkFBQTtFQUNBLFlGbkZhO0VFc0ZiLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FGK1RKOztBRTVUQTtFQUNJLGlCQUFBO0FGK1RKOztBRTVUQTtFQUNJLGdCQUFBO0FGK1RKOztBRTVUQTtFQUNJLGlCQUFBO0VBQ0EsaUNGbEdtQjtFRWtHbkIseUJGbEdtQjtFRW1HbkIsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FGOFRKOztBR2xjQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUhxY0o7O0FHemJBO0VBQ0ksZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGdEQUFBO0VBQ0Esd0NBQUE7RUFHQSxlQUFBO0FId2JKOztBR3JiQTtFQUVJLGdEQUFBO0VBQ0Esd0NBQUE7QUh1Yko7O0FHamJBO0VBQ0ksZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGdEQUFBO0VBQ0Esd0NBQUE7RUFHQSxlQUFBO0FIZ2JKOztBRzdhQTtFQUVJLGtEQUFBO0VBQ0EsMENBQUE7QUgrYUo7O0FHdmFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIMGFKOztBR3ZhQTtFQUNJLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0FIeWFKOztBRy9aQTtFQUNJLGdCQUFBO0VBRUEscUJBQUE7QUhpYUo7O0FHOVpBO0VBQ0ksZ0JBQUE7RUFFQSx5QkhyR2E7RUcwR2IsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtBSDJaSjs7QUd4WkE7RUFLSSx3Q0FBQTtVQUFBLGdDQUFBO0FIdVpKOztBR2haQTtFQUNJLGtDQUFBO0VBQUEsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUhtWko7O0FHOVlBO0VBQ0ksV0FBQTtFQUNBLFVBSlc7RUFLWCxrQkFBQTtBSGlaSjs7QUc5WUE7RUFDSSxtQkFBQTtBSGlaSjs7QUc5WUE7RUFDSSx5QkgvSWE7RUdvSmIsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBSDZZSjs7QUcxWUE7RUFDSSxjQUFBO0VBQ0EseUJINUpjO0VHNkpkLFdBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFFQSw4Q0FBQTtVQUFBLHNDQUFBO0FIMllKOztBR3hZQTtFQUVJLDJDQUFBO1VBQUEsbUNBQUE7QUgwWUo7O0FHdllBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsaUJBQUE7QUgwWUo7O0FHdllBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUgwWUo7O0FHdllBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUh5WUo7O0FHdFlBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBSHdZSjs7QUdyWUE7RUFHSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FIc1lKOztBR2xZQTtFQUdJLHlCSDlOYTtBQWltQmpCOztBR3pYQTtFQUVJLHlCSDFPYTtFRzJPYixjSHpPaUI7RUcwT2pCLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGNIOU9pQjtFRytPakIsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7QUh5WEo7O0FHdFhBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUhuT2E7RUdxT2IsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBRUEsV0FBQTtFQUVBLGdCQUFBO0FIc1hKOztBR25YQTtFQUNJLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxZQUFBO0VBRUEsZ0RBQUE7RUFDQSx3Q0FBQTtBSHFYSjs7QUdoWEE7RUFFSSxnREFBQTtFQUNBLHdDQUFBO0FIa1hKOztBRzVXQTtFQUNJLFVBQUE7RUFFQSxnQ0FBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7QUg4V0o7O0FHM1dBO0VBRUksVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBSDZXSjs7QUcxV0E7RUFDSSxXQUFBO0VBQ0EsOERBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSDRXSjs7QUd4V0E7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtFQUFBLHdDQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBSHdXSjs7QUdyV0E7RUFDSSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjSGhVa0I7RUdpVWxCLG1CQUFBO0VBQ0EsbUJBQUE7QUh3V0o7O0FHcldBO0VBQ0ksbURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FId1dKOztBR3BXQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FIdVdKOztBR3BXQTtFQUNJLGlDQUFBO0VBQUEseUJBQUE7RUFDQSxnREFBQTtFQUNBLHdDQUFBO0FIdVdKOztBR3BXQTtFQUNJLGlDQUFBO0VBQUEseUJBQUE7QUh1V0o7O0FHcFdBO0VBRUksZ0RBQUE7RUFDQSx3Q0FBQTtBSHNXSjs7QUFoWUE7RUFDSSxZQTlUWTtFQStUWixZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFtWUo7O0FBaFlBO0VBQ0kscUJBM1ZhO0FBOHRCakI7O0FBaFlBO0VBQ0ksZUExVWdCO0VBMlVoQixVQUFBO0VBQ0EsY0EvVmlCO0VBaVdqQiwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWtZSjs7QUEvWEE7RUFDSSxnQ0FBQTtBQWtZSjs7QUEvWEE7RUFDSSw0QkFBQTtBQWtZSjs7QUEvWEE7RUFDSSxlQUFBO0VBQ0EsY0E5V2tCO0VBK1dsQixlQTlWZ0I7RUErVmhCLGdDQUFBO0FBa1lKOztBSXh2QkE7RUFLSTtJQUNJLGdCQUFBO0VKdXZCTjs7RUk1dUJFO0lBQ0ksWUFqQlc7RUpnd0JqQjs7RUk1dUJFO0lBQ0ksV0FBQTtJQUNBLGVBQUE7RUordUJOOztFSTV1QkU7SUFDSSxlQUFBO0lBR0EsVUFBQTtFSjZ1Qk47O0VJbnVCRTtJQUNJLHdDQUFBO0lBQUEsZ0NBQUE7RUpzdUJOOztFSW51QkU7SUFDSSxjQUFBO0VKc3VCTjs7RUludUJFO0lBQ0ksV0FBQTtFSnN1Qk47O0VJbnVCRTtJQUNJLFNBQUE7SUFDQSxnREFBQTtJQUFBLHdDQUFBO0lBQ0EsaUJBQUE7RUpzdUJOOztFSW51QkU7SUFDSSxpQ0psQ2U7SUlrQ2YseUJKbENlO0lJbUNmLGFBMURhO0lBMkRiLFlBM0RhO0VKaXlCbkI7O0VJbnVCRTtJQUNJLGlDSnhDZTtJSXdDZix5Qkp4Q2U7SUl5Q2YsYUFoRWE7SUFpRWIsWUFqRWE7RUp1eUJuQjs7RUludUJFO0lBQ0ksZ0JBQUE7RUpzdUJOOztFSW51QkU7SUFDSSxvQkFBQTtFSnN1Qk47O0VJbnVCRTtJQUNJLGlDSnREZTtJSXNEZix5Qkp0RGU7SUl1RGYsYUFBQTtFSnN1Qk47O0VJbnVCRTtJQUNJLGlDSjNEZTtJSTJEZix5QkozRGU7SUk0RGYsY0FBQTtFSnN1Qk47O0VJbnVCRTtJQUNJLGlDSmhFZTtJSWdFZix5QkpoRWU7SUlpRWYsYUFBQTtFSnN1Qk47O0VJbnVCRTtJQUNJLGlDSnJFZTtJSXFFZix5QkpyRWU7RUEyeUJyQjs7RUlsdUJFO0lBQ0ksWUFBQTtFSnF1Qk47O0VJbHVCRTtJQUNJLHlDQUFBO0lBQUEsaUNBQUE7RUpxdUJOOztFSWx1QkU7SUFDSSxXQUFBO0lBQ0EsVUR3Qk87SUN2QlAsa0JBQUE7RUpxdUJOOztFSWp1QkU7SUFDSSxZQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGlDQUFBO0lBQUEseUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VKb3VCTjs7RUlqdUJFO0lBQ0ksbUJBQUE7RUpvdUJOOztFSWh1QkU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7RUptdUJOOztFSWh1QkU7SUFDSSxxQkFBQTtJQUFBLGlCQUFBO0lBQUEsYUFBQTtFSm11Qk47O0VJaHVCRTtJQUNJLGlDQUFBO0lBQUEseUJBQUE7SUFHQSxxQkFBQTtJQUNBLFFBQUE7SUFDQSwwQkFBQTtZQUFBLGtCQUFBO0VKaXVCTjs7RUk5dEJFO0lBQ0ksVUFBQTtJQUtBLHFCQUFBO0lBQ0EsMEJBQUE7WUFBQSxrQkFBQTtFSjZ0Qk47O0VJMXRCRTtJQUNJLFdBQUE7RUo2dEJOOztFSTF0QkU7SUFDSSxvQkFBQTtFSjZ0Qk47O0VJMXRCRTtJQUVJLFlKOUlTO0lJZ0pULHlCSnhLUTtFQW00QmQ7O0VJdnRCRTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VKMHRCTjs7RUl2dEJFO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFSjB0Qk47O0VJdnRCRTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtJQUVBLGdCQUFBO0lBQ0EsbUJBQUE7RUp5dEJOOztFSXB0QkU7SUFFSSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFFQSxTQUFBO0lBQ0EsWUFBQTtFSnF0Qk47O0VJbHRCRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFlKdkxTO0lJeUxULGVBQUE7SUFDQSxVQUFBO0lBRUEsV0FBQTtJQUVBLGdCQUFBO0VKa3RCTjs7RUkvc0JFO0lBQ0ksZ0NBQUE7SUFBQSx3QkFBQTtJQUNBLFlBQUE7SUFFQSxnREFBQTtJQUNBLHdDQUFBO0VKaXRCTjs7RUk1c0JFO0lBQ0ksWUFBQTtJQUNBLG9CQUFBO0VKK3NCTjs7RUk1c0JFO0lBQ0ksZ0JBQUE7RUorc0JOOztFSXRzQkU7SUFDSSxhQUFBO0VKeXNCTjs7RUl0c0JFO0lBQ0ksa0JBQUE7SUFDQSxrQkFBQTtFSnlzQk47O0VJdHNCRTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFSnlzQk47O0VJdHNCRTtJQUVJLGNBQUE7RUp3c0JOOztFSXJzQkU7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VKd3NCTjs7RUlyc0JFO0lBQ0ksc0NBQUE7SUFBQSw4QkFBQTtJQUNBLGNBQUE7RUp3c0JOOztFSXJzQkU7SUFDSSxlQUFBO0lBQ0EseUJKalJVO0lJa1JWLFlBaFJZO0VKdzlCbEI7O0VJcnNCRTtJQUNJLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFSndzQk47QUFDRjtBS2wrQkE7RUFPSTtJQUNJLGVBSmdCO0lBS2hCLFlBQUE7SUFDQSxZQUFBO0VMODlCTjs7RUszOUJFO0lBQ0ksWUFBQTtFTDg5Qk47O0VLMzlCRTtJQUNJLGdCQUFBO0VMODlCTjs7RUtqOUJFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUxvOUJOOztFS2o5QkU7SUFDSSxrQkFBQTtJQUNBLFlBckNXO0lBc0NYLFlBQUE7RUxvOUJOOztFS2o5QkU7SUFDSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUxvOUJOOztFS2o5QkU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFTG85Qk47O0VLajlCRTtJQUNJLGFBQUE7SUFDQSxTQXhEVztJQXlEWCx3Q0FBQTtJQUFBLGdDQUFBO0VMbzlCTjs7RUtsOUJFO0lBQ0ksYUFBQTtFTHE5Qk47O0VLbDlCRTtJQUNJLFVBQUE7SUFDQSxlQTlEZ0I7RUxtaEN0Qjs7RUtsOUJFO0lBQ0ksZUFsRWdCO0lBbUVoQixnQ0FBQTtJQUFBLHdCQUFBO0VMcTlCTjs7RUtsOUJFO0lBQ0ksYUF6RWE7SUEwRWIsWUExRWE7SUE0RWIsWUFBQTtJQUNBLHlFQUFBO1lBQUEsaUVBQUE7RUxvOUJOOztFS2o5QkU7SUFDSSxnQkFBQTtFTG85Qk47O0VLbDlCRTtJQUNJLG9CQUFBO0VMcTlCTjs7RUtsOUJFO0lBQ0ksYUF4RmE7SUF5RmIsWUF6RmE7SUEwRmIsWUFBQTtJQUNBLHlFQUFBO1lBQUEsaUVBQUE7RUxxOUJOOztFS2w5QkU7SUFDSSxvQkFBQTtFTHE5Qk47O0VLbDlCRTtJQUNJLGdCQUFBO0VMcTlCTjs7RUtsOUJFO0lBQ0ksYUFBQTtFTHE5Qk47O0VLbDlCRTtJQUNJLGlCQUFBO0VMcTlCTjs7RUtsOUJFO0lBQ0ksZUFBQTtJQUVBLGlEQUFBO0lBQUEseUNBQUE7SUFHQSxnQkFBQTtJQUtBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFTDg4Qk47O0VLdjhCRTtJQUVJLGVBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUx5OEJOOztFS3I4QkU7SUFDSSwwQ0FBQTtJQUFBLGtDQUFBO0lBQ0Esa0JBQUE7RUx3OEJOOztFS3I4QkU7SUFDSSxhQUFBO0VMdzhCTjs7RUtyOEJFO0lBQ0ksa0NBQUE7SUFBQSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUx3OEJOOztFS3I4QkU7SUFDSSxnQ0FBQTtJQUFBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VMdzhCTjs7RUtyOEJFO0lBQ0ksV0FBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUx3OEJOOztFS3I4QkU7SUFDSSxtQkFBQTtFTHc4Qk47O0VLcjhCRTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFTHc4Qk47O0VLbjhCRTtJQUNJLGNBQUE7RUxzOEJOOztFS244QkU7SUFDSSxhQUFBO0VMczhCTjs7RUtuOEJFO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUxzOEJOOztFS244QkU7SUFDSSxjQUFBO0VMczhCTjs7RUtuOEJFO0lBQ0ksZ0JBQUE7RUxzOEJOOztFS244QkU7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VMczhCTjs7RUtuOEJFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0VMczhCTjs7RUt0N0JFO0lBQ0ksZUFyT2dCO0lBc09oQixlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0wzT2E7RUFvcUNuQjs7RUt0N0JFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VMeTdCTjs7RUt0N0JFO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUx5N0JOOztFS2g3QkU7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQXRRYTtJQXVRYixlQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VMbTdCTjs7RUtoN0JFO0lBQ0ksZ0NBQUE7SUFBQSx3QkFBQTtJQUNBLFlBQUE7SUFFQSxnREFBQTtJQUNBLHdDQUFBO0VMazdCTjs7RUs3NkJFO0lBQ0ksWUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJML1JRO0VBK3NDZDs7RUs3NkJFO0lBQ0ksZ0JBQUE7RUxnN0JOOztFSzc2QkU7SUFDSSxTQWxTYTtJQW1TYixpQ0FBQTtJQUFBLHlCQUFBO0lBRUEsVUFBQTtFTCs2Qk47O0VLMzZCRTtJQUNJLGNBQUE7RUw4NkJOOztFSzM2QkU7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFFQSxnQkFBQTtFTDY2Qk47O0VLMTZCRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUw2NkJOOztFSzE2QkU7SUFDSSxXQUFBO0lBQ0EsWUE3VFk7SUErVFoseUJMalVVO0lLbVVWLGVBQUE7RUwyNkJOOztFS3Q2QkU7SUFFSSxxQkFBQTtJQUVBLGtCQUFBO0lBQ0EsZ0JBQUE7RUx1NkJOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHByaW1hcnktY29sb3I6ICMyMjIyMjI7XFxyXFxuJHNlY29uZGFyeS1jb2xvcjogIzM5M0U0MTtcXHJcXG4kdGVydGlhcnktY29sb3I6ICNGRjIyNzc7XFxyXFxuLy8gJHRlcnRpYXJ5LWNvbG9yOiAjQ0MwMDQ0O1xcclxcbiRwcmltYXJ5LXRleHQtY29sb3I6ICNGREZGRkM7XFxyXFxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjMzkzRTQxO1xcclxcbiR0ZXJ0aWFyeS10ZXh0LWNvbG9yOiAjRkYyMjc3O1xcclxcbi8vICR0ZXJ0aWFyeS10ZXh0LWNvbG9yOiAjRUUxMTY2O1xcclxcbiRwaG9lbml4LXByaW1hcnktY29sb3I6ICNDNTI0Mzc7XFxyXFxuJHBob2VuaXgtc2Vjb25kYXJ5LWNvbG9yOiAjRjA4ODQzO1xcclxcbiRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yOiAjRjdFMjdDO1xcclxcblxcclxcbi8vICR0ZXJ0aWFyeS1jb2xvcjogJHBob2VuaXgtcHJpbWFyeS1jb2xvcjtcXHJcXG4vLyAkdGVydGlhcnktdGV4dC1jb2xvcjogJHBob2VuaXgtc2Vjb25kYXJ5LWNvbG9yO1xcclxcblxcclxcbiR0aXRsZS1mb250OiBNb25hY28sIG1vbm9zcGFjZTtcXHJcXG4vLyAkYm9keS1mb250OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbi8vICRib2R5LWZvbnQ6IE1vbm9zcGFjZTtcXHJcXG4kYm9keS1mb250OiBNb25hY28sIG1vbm9zcGFjZTtcXHJcXG4kaGVhZGVyLWhlaWdodDogNzVweDtcXHJcXG4kc2VhcmNoLWhlaWdodDogMzVweDtcXHJcXG4kdGh1bWJuYWlsLXNpemU6IDI1MHB4O1xcclxcbiRib3R0b20taGVpZ2h0OiA3MHB4O1xcclxcbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcXHJcXG4kcDUtaW5mby1oZWlnaHQ6IDc1cHg7XFxyXFxuJHRodW1ibmFpbC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcclxcbiR2aHMtc2hhZG93cy1sOiBncmVlbnllbGxvdyAtNXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTVweCAwcHgsIHJlZCAzLjVweCAzcHggMHB4O1xcclxcbiR2aHMtc2hhZG93cy1tOiBncmVlbnllbGxvdyAtMnB4IDBweCAwcHgsIGN5YW4gMS41cHggLTJweCAwcHgsIHJlZCAyLjVweCAxLjVweCAwcHg7XFxyXFxuJHZocy1zaGFkb3dzLXM6IGdyZWVueWVsbG93IC0xcHggMHB4IDBweCwgY3lhbiAwLjVweCAtMXB4IDBweCwgcmVkIDEuNXB4IDFweCAwcHg7XFxyXFxuJHZocy1zaGFkb3dzLWRyb3AtbDogZHJvcC1zaGFkb3coZ3JlZW55ZWxsb3cgLTVweCAwcHggMHB4KSBkcm9wLXNoYWRvdyhjeWFuIDAuNXB4IC01cHggMHB4KSBkcm9wLXNoYWRvdyhyZWQgMy41cHggM3B4IDBweCk7XFxyXFxuJHZocy1zaGFkb3dzLWRyb3AtbTogZHJvcC1zaGFkb3coZ3JlZW55ZWxsb3cgLTJweCAwcHggMHB4KSBkcm9wLXNoYWRvdyhjeWFuIDEuNXB4IC0ycHggMHB4KSBkcm9wLXNoYWRvdyhyZWQgMi41cHggMS41cHggMHB4KTtcXHJcXG4kdmhzLXNoYWRvd3MtZHJvcC1zOiBkcm9wLXNoYWRvdyhncmVlbnllbGxvdyAtMXB4IDBweCAwcHgpIGRyb3Atc2hhZG93KGN5YW4gMC41cHggLTFweCAwcHgpIGRyb3Atc2hhZG93KHJlZCAxLjVweCAxcHggMHB4KTtcXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkYm9keS1mb250O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTokcmVndWxhci1mb250LXNpemU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9ue1xcclxcbiAgICAvLy13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi1tcy1jbGVhcntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9ue1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8vIGF7XFxyXFxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjokcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgY29sb3I6JHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRib2R5LWZvbnQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dzs7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogJHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG5jb2RlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJHRpdGxlLWZvbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIDo6c2xvdHRlZCB7XFxyXFxuICAgIGZsb2F0OmxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaW1nIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogJHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIGhlaWdodDogKCRoZWFkZXItaGVpZ2h0IC0gMTApO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogZ3JlZW55ZWxsb3cgLTEuNXB4IDEuNXB4IDBweCwgY3lhbiAwLjVweCAtMS41cHggMHB4LCByZWQgMS41cHggMS41cHggMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGltZzpob3ZlciB7XFxyXFxuICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBoMSB7XFxyXFxuICAgIHRyYW5zaXRpb246ICR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgLy8gLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubml2ZXJzYXJ5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsICR0ZXJ0aWFyeS1jb2xvciAwJSwgcmdiYSgwLDI1NSwyNTUsMSkgMTAwJSk7IC8qIGZmMy42KyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgJHRlcnRpYXJ5LWNvbG9yKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDAsMjU1LDI1NSwxKSkpOyAvKiBzYWZhcmk0KyxjaHJvbWUgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICR0ZXJ0aWFyeS1jb2xvciAwJSwgcmdiYSgwLDI1NSwyNTUsMSkgMTAwJSk7IC8qIHNhZmFyaTUuMSssY2hyb21lMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHRlcnRpYXJ5LWNvbG9yIDAlLCByZ2JhKDAsMjU1LDI1NSwxKSAxMDAlKTsgLyogb3BlcmEgMTEuMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsICR0ZXJ0aWFyeS1jb2xvciAwJSwgcmdiYSgwLDI1NSwyNTUsMSkgMTAwJSk7IC8qIGllMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHRlcnRpYXJ5LWNvbG9yIDAlLCByZ2JhKDAsMjU1LDI1NSwxKSAxMDAlKTsgLyogdzNjICovXFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDBmZmZmJywgZW5kQ29sb3JzdHI9JyNmZjAwZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIGllNi05ICovXFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5waG9lbml4IHtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiBmZjMuNisgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICRwaG9lbml4LXByaW1hcnktY29sb3IpLCBjb2xvci1zdG9wKDEwMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yKSk7IC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIHNhZmFyaTUuMSssY2hyb21lMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIG9wZXJhIDExLjEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogaWUxMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogdzNjICovXFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPSRwaG9lbml4LXByaW1hcnktY29sb3IsIGVuZENvbG9yc3RyPSRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yLEdyYWRpZW50VHlwZT0xICk7IC8qIGllNi05ICovXFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi52aHMtY29sb3Ige1xcclxcbiAgICAvLyBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgXFxyXFxuICAgIC8vIGNvbG9yOiAjMDBmO1xcclxcbiAgICAvLyBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIC8vIHRleHQtc2hhZG93OiAjMGYwIDVweCA1cHggMXB4LCAjZjAwIDEwcHggMTBweCAxcHg7IC8vLCAjMDBmIC01cHggLTVweCAwcHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtNXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTVweCAwcHgsIHJlZCAzLjVweCAzLjVweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXJ0aWFyeS10ZXh0LWNvbG9ye1xcclxcbiAgICBjb2xvcjogJHRlcnRpYXJ5LXRleHQtY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWdyYWRpZW50LXRleHQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIGZmMy42KyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgJHBob2VuaXgtcHJpbWFyeS1jb2xvciksIGNvbG9yLXN0b3AoMTAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IpKTsgLyogc2FmYXJpNCssY2hyb21lICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogc2FmYXJpNS4xKyxjaHJvbWUxMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogb3BlcmEgMTEuMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiBpZTEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiB3M2MgKi9cXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JHBob2VuaXgtcHJpbWFyeS1jb2xvciwgZW5kQ29sb3JzdHI9JHBob2VuaXgtdGVydGlhcnktY29sb3IsR3JhZGllbnRUeXBlPTEgKTsgLyogaWU2LTkgKi9cXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gLmhlYWRlciBoMTpob3ZlciB7XFxyXFxuLy8gICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuLy8gICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuLy8gfVxcclxcblxcclxcbi5tYWluLWJvZHl7XFxyXFxuICAgIHRvcDogJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVhZGVyLWhlaWdodH0pO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIHRvcDogJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idXR0b257XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIC8vIHRvcDogJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYigwLDAsMCk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XFxcXDk7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjgpO1xcclxcbiAgICBmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9IzIyMDAwMDAwLGVuZENvbG9yc3RyPSMyMjAwMDAwMCk7XFxyXFxuICAgIHpvb206IDE7XFxyXFxuICAgIHdpZHRoOjEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVye1xcclxcbiAgICB6LWluZGV4OiAxMTA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAvLyBwYWRkaW5nOjEwMHB4IDBweDtcXHJcXG4gICAgcGFkZGluZzogNTBweCAwcHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZGl2IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcXHJcXG4gICAgLy8gbWFyZ2luLXRvcDo1MHB4O1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGJsYWNrO1xcclxcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICAgIGNvbG9yOiRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIGNvZGUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDEwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDAgMCAxMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCA+IGRpdiBzbWFsbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAkdGVydGlhcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtYnV0dG9uLWRpdntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtYnV0dG9uLWRpdiA+ICp7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoNmRlZykgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWJ1dHRvbi1kaXYgPiAqOmhvdmVyIHtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG5cXHJcXG4gICAgLnNoYXJlLWJ1dHRvbi1pY29ue1xcclxcbiAgICAgICAgYm94LXNoYWRvdzokdGVydGlhcnktY29sb3IgM3B4IDJweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtYnV0dG9uLWljb257XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogJHNlY29uZGFyeS1jb2xvciA1cHggMi41cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1jb3VudC13cmFwcGVyID4gKntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcclxcbiAgICBwYWRkaW5nOiAzcHggNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtbGluay1jb250YWluZXJ7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtbGluay1jb3B5e1xcclxcbiAgICBwYWRkaW5nOiA3LjVweCAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcblxcclxcbiAgICBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDVweCAyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWxpbmt7XFxyXFxuXFxyXFxuICAgIC8vIC1tb3otdXNlci1zZWxlY3Q6IGFsbDtcXHJcXG4gICAgLy8gLXdlYmtpdC11c2VyLXNlbGVjdDogYWxsO1xcclxcbiAgICAvLyAtbXMtdXNlci1zZWxlY3Q6IGFsbDtcXHJcXG4gICAgLy8gdXNlci1zZWxlY3Q6IGFsbDtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDcuNXB4O1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcblxcclxcbiAgICBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDVweCAyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuQGltcG9ydCAnLi9uYXZpZ2F0aW9uLnNjc3MnO1xcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skc2VhcmNoLWhlaWdodH0gLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstZGlzYWJsZWQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AaW1wb3J0ICcuL3RodW1ibmFpbC5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3Byb2plY3Quc2Nzcyc7XFxyXFxuXFxyXFxuLmZvb3RlcntcXHJcXG4gICAgaGVpZ2h0OiAkYm90dG9tLWhlaWdodDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBocntcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiR0ZXJ0aWFyeS1jb2xvclxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGJ1dHRvbiwgLmZvb3RlciBhe1xcclxcbiAgICBmb250LXNpemU6JHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjsgICAgXFxyXFxuICAgIC8vIHRleHQtc2hhZG93OiAkcHJpbWFyeS1jb2xvciAycHggMnB4IDFweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhe1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggJHByaW1hcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYnV0dG9uOmhvdmVyLCAuZm9vdGVyIGE6aG92ZXIge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uY29weXJpZ2h0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgICBjb2xvcjokdGVydGlhcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgIHRleHQtc2hhZG93OiAkcHJpbWFyeS1jb2xvciAycHggMnB4IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuQGltcG9ydCAnd2ViLXZpZXcuc2Nzcyc7XFxyXFxuQGltcG9ydCAnbW9iaWxlLXZpZXcuc2Nzcyc7XCIsXCIubmF2aWdhdG9yIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBoZWlnaHQ6ICRzZWFyY2gtaGVpZ2h0O1xcclxcbiAgICB0b3A6ICRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0b3IgaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogJHNlYXJjaC1oZWlnaHQgLSAxMDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRvciBpbnB1dCB7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDEwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDAgMCAxMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogJHNlYXJjaC1oZWlnaHQgLSAyMDtcXHJcXG4gICAgYmFja2dyb3VuZDokdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBjb2xvcjokcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6JHNlYXJjaC1oZWlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0b3IgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6JHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgLy8gdGV4dC1zaGFkb3c6IC0xcHggLTFweCAyLjVweCAkc2Vjb25kYXJ5LXRleHQtY29sb3IsIDFweCAtMXB4IDIuNXB4ICRzZWNvbmRhcnktdGV4dC1jb2xvciwgLTFweCAxcHggMi41cHggJHNlY29uZGFyeS10ZXh0LWNvbG9yLCAxcHggMXB4IDIuNXB4ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRvciBidXR0b24ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuM3M7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6ICRzZWFyY2gtaGVpZ2h0IC0gNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgbWFyZ2luOiAxLjI1cHg7XFxyXFxuICAgIHJpZ2h0OiAkc2VhcmNoLWhlaWdodCsxMHB4O1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoNmRlZykgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6ICRzZWNvbmRhcnktY29sb3IgNy41cHggMi41cHg7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIGJveC1zaGFkb3c6ICRzZWNvbmRhcnktY29sb3IgNXB4IDIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdG9yIGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDZkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDcuNXB4IDIuNXB4O1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICAvLyBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDVweCAyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRvciBidXR0b24gaW5wdXR7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogICAgbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiAgICAgICAgIG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIGNvbG9yOiRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIHdpZHRoOiAkc2VhcmNoLWhlaWdodCAtIDIwO1xcclxcbiAgICBoZWlnaHQ6ICRzZWFyY2gtaGVpZ2h0IC0gMjA7XFxyXFxuICAgIGZsb2F0OmxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0b3IgYnV0dG9uIGxhYmVse1xcclxcbiAgICBtYXJnaW4tdG9wOjBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgZmxvYXQ6cmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi8vIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuLy8gICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuLy8gICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xcclxcbi8vICAgICBtYXJnaW4tdG9wOiAtMS41cHg7XFxyXFxuLy8gICAgIGhlaWdodDogMTZweDtcXHJcXG4vLyAgICAgd2lkdGg6IDE2cHg7XFxyXFxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY2LCAxNjYsIDE2Nik7XFxyXFxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4vLyAgICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAycHggNXB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxuLy8gIH1cXHJcXG5cXHJcXG4vLyAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG5cXHJcXG4vLyAgfVxcclxcblxcclxcbi8vIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbi8vICAgICBjb250ZW50OiAnJztcXHJcXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbi8vICAgICB3aWR0aDogMTFweDtcXHJcXG4vLyAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4vLyAgICAgdG9wOiAxMXB4O1xcclxcbi8vICAgICBsZWZ0OiAxMC45cHg7XFxyXFxuLy8gICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcclxcbi8vICAgICBib3JkZXItdG9wOiBub25lO1xcclxcbi8vICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4vLyAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbi8vICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbi8vICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4vLyAgfVwiLFwiLnByb2plY3QtdGh1bWJuYWlsIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDc1cHggIzEwMTAxMCwgNXB4IDVweCAxcHggMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSA3NXB4ICMxMDEwMTAsMTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSA3NXB4ICMxMDEwMTAsICR2aHMtc2hhZG93cy1sO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgIGhlaWdodDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRodW1ibmFpbDpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgMjAwcHggYmxhY2ssMTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRodW1ibmFpbDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiB7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyBkaXNwbGF5OnRhYmxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgLy9oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aHVtYm5haWwgZGl2ICp7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiBwIHtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRodW1ibmFpbCBzbWFsbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6ICR0aHVtYm5haWwtc2l6ZSAtIDIwcHg7XFxyXFxuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC10aHVtYm5haWwge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcclxcbiAgICAvLyBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgNzVweCAjMTAxMDEwLCA1cHggNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDc1cHggIzEwMTAxMCwxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGhlaWdodDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbDpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgMjAwcHggYmxhY2ssMTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtdGh1bWJuYWlsIGRpdiB7XFxyXFxuICAgIC8vIGRpc3BsYXk6dGFibGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6JHRodW1ibmFpbC1zaXplO1xcclxcbiAgICAvL2hlaWdodDogMTAwJTtcXHJcXG4gICAgLy8gbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbCBkaXYgKntcXHJcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbCBkaXYgcCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbCBzbWFsbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6ICR0aHVtYm5haWwtc2l6ZSAtIDIwcHg7XFxyXFxuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cIixcIi5wcm9qZWN0LXBhZ2Uge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8vIC5wcm9qZWN0LXBhZ2UgaDE6Zmlyc3Qtb2YtdHlwZXtcXHJcXG4vLyAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuLy8gfVxcclxcblxcclxcbi8vIC5wcm9qZWN0LXBhZ2UgcDpmaXJzdC1vZi10eXBle1xcclxcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbi8vICAgICBwYWRkaW5nLXRvcDogMHB4O1xcclxcbi8vIH1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgLy8gcG9zaXRpb246c3RpY2t5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICByaWdodDogMzVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDE1ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy90ZXh0LXNoYWRvdzogMTBweCAxMHB4IDBweCAjRkYyMjc3O1xcclxcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbTtcXHJcXG4gICAgLy8gZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1tO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtaWNvbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgLy8gcG9zaXRpb246c3RpY2t5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcmlnaHQ6IDkwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDE1ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMnB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAycHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtaWNvbjpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggMi41cHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIC8vIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy8gZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy90ZXh0LXNoYWRvdzogMTBweCAxMHB4IDBweCAjRkYyMjc3O1xcclxcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtcztcXHJcXG4gICAgLy8gZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaDF7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWgye1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIC8vIG1hcmdpbi10b3A6MzBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgLy8gcGFkZGluZzogMTBweDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAvLyBib3gtc2hhZG93OiBibGFjayAxcHggMXB4IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6MTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIC8vIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC03LjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LW1le1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMTBweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OjEwcHggNy41cHggMXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LW1lIGltZ3tcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAkcHJpbWFyeS1jb2xvciAxcHggMXB4IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IDEwcHggNy41cHggMXB4IDBweCAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgLy8gaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAvLyB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMDBweCk7XFxyXFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiRjb250YWN0LWxlZnQ6IDQwJTtcXHJcXG5cXHJcXG4uY29udGFjdC1sZWZ0IHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHdpZHRoOiAkY29udGFjdC1sZWZ0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXJpZ2h0IGgxe1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1we1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMTBweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OjEwcHggNy41cHggMXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC10aHVtYm5haWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIGJveC1zaGFkb3c6MTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdGh1bWJuYWlsOmhvdmVye1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICBib3gtc2hhZG93OjVweCA1cHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXRodW1ibmFpbCBkaXZ7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC10aHVtYm5haWwgaW1ne1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mbyBoMXtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICBmb250LXNpemU6IDMgKiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAkcDUtaW5mby1oZWlnaHQgKyAyNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8gcHtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4ycztcXHJcXG4gICAgLy8gbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvIGlucHV0IHtcXHJcXG4gICAgLy8gei1pbmRleDogMjA7XFxyXFxuICAgIC8vIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIC8vIG1hcmdpbjogMTBweDtcXHJcXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAvLyB0b3A6JGhlYWRlci1oZWlnaHQrMTJweDtcXHJcXG4gICAgLy8gcmlnaHQ6IDE0NXB4O1xcclxcbiAgICAvLyB3aWR0aDogODBweDtcXHJcXG4gICAgLy8gbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8gYnV0dG9uIHtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgLy8gdG9wOiRoZWFkZXItaGVpZ2h0KyAxMnB4O1xcclxcbiAgICAvLyByaWdodDogMTQ1cHg7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggMi41cHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvLXNsaWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBoZWlnaHQ6ICRwNS1pbmZvLWhlaWdodDtcXHJcXG4gICAgLy8gbWFyZ2luOiA1cHg7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIGxlZnQ6IDI1cHg7XFxyXFxuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAvLyByaWdodDogMzVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8tc2xpZGUgaW1ne1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDE1ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8tc2xpZGUgaW1nOmhvdmVyIHtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICAvL3RleHQtc2hhZG93OiAxMHB4IDEwcHggMHB4ICNGRjIyNzc7XFxyXFxuICAgIC8vIC13ZWJraXQtZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1tO1xcclxcbiAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLW07XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvLXNob3d7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIC8vIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8tc2hvdyBwe1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjJzO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8tc2hvdzo6YWZ0ZXJ7XFxyXFxuICAgIHotaW5kZXg6IDIwO1xcclxcbiAgICBjb250ZW50OiBcXFwiSGlkZSB0aGlzIGluZm9ybWF0aW9uIHBhbmVsIHdpdGggdGhlIF4gYnV0dG9uIGFib3ZlXFxcIjtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXNpemU6IDAuNzUgKiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgIC8vIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgLy8gYm90dG9tOiBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWNhbnZhc3tcXHJcXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICAgIC8vIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIHRvcDogJHA1LWluZm8taGVpZ2h0ICsgJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0gLSAjeyRwNS1pbmZvLWhlaWdodH0pO1xcclxcbiAgICAvLyBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSAtICN7JHA1LWluZm8taGVpZ2h0fSAtIDEwcHgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VibG9nLXNpZ25hdHVyZXtcXHJcXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gICAgY29sb3I6JHRlcnRpYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tdXNpYy1yZWxlYXNlLWJhbm5lcntcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9tdXNpYy1iYW5uZXIuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246MCUgMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm11c2ljLXJlbGVhc2UtYmFubmVyIHAsLm11c2ljLXJlbGVhc2UtYmFubmVyIGgxLC5tdXNpYy1yZWxlYXNlLWJhbm5lciBoMiwubXVzaWMtcmVsZWFzZS1iYW5uZXIgaDMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWVyZ2VuY2UtaG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1lcmdlbmNlLWhvdmVyIGltZ3tcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1lcmdlbmNlLWhvdmVyOmhvdmVye1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTVkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAwcHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDBweCAkdGVydGlhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWVyZ2VuY2UtaG92ZXI6aG92ZXIgaW1nIHtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG59XFxyXFxuXCIsXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KXtcXHJcXG4gICAgJGhlYWRlci1oZWlnaHQ6NzVweDtcXHJcXG4gICAgJHRodW1ibmFpbC1zaXplOiAyNTBweDtcXHJcXG4gICAgJGJvdHRvbS1oZWlnaHQ6IDcwcHg7XFxyXFxuXFxyXFxuICAgIGJvZHl7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtbDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6ICR2aHMtc2hhZG93cy1zO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaDEsIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkaGVhZGVyLWhlaWdodCAtIDIwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaDEge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgLy8gZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIC8vIGJvdHRvbTogM3B4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgICAgIC8vIGdyZWVueWVsbG93IC01cHggMHB4IDBweCwgY3lhbiAwLjVweCAtNXB4IDBweCwgcmVkIDMuNXB4IDNweCAwcHg7XFxyXFxuICAgICAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtcztcXHJcXG4gICAgICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucG9wdXB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZpZ2F0b3IgaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZpZ2F0b3IgYnV0dG9ue1xcclxcbiAgICAgICAgcmlnaHQ6JHNlYXJjaC1oZWlnaHQrMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC1saXN0IHtcXHJcXG4gICAgICAgIG1hcmdpbjowO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skc2VhcmNoLWhlaWdodH0gLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDBweCA1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIGhlaWdodDokdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgICAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wb3N0LXRodW1ibmFpbCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIGhlaWdodDokdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgICAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBlLCAucG9zdC10aHVtYm5haWw6Zmlyc3Qtb2YtdHlwZXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSwgLnBvc3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZXtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWwgcCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIHAge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgc21hbGx7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIGRpdntcXHJcXG4gICAgICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5jbG9zZS1pY29ue1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXBhZ2V7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdC1sZWZ0IHtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgd2lkdGg6ICRjb250YWN0LWxlZnQ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY29udGFjdC1yaWdodCB7XFxyXFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKDAuNCAqICgxMDB2dykpO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMC42ICogKDEwMHZ3KSAtIDEwMHB4KTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4IDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jb250YWN0LXJpZ2h0IGgxe1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgLmFib3V0e1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDIwJTtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LW1le1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWUgaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNDIuNXB4KTtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICAgICAgLy8gaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5hYm91dC1tZSBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgLy8gcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzcuNXB4O1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC1tZSBkaXYgcCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWU6bGFzdC1jaGlsZHtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZve1xcclxcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6ICRwNS1pbmZvLWhlaWdodDtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IC01cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucDUtaW5mbyBoMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMyAqICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkcDUtaW5mby1oZWlnaHQgKyAyNXB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIH0gICBcXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gcHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNzUwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mbyBpbnB1dCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAvLyB0b3A6IDA7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcXHJcXG4gICAgICAgIC8vIGJvdHRvbTogJGJvdHRvbS1oZWlnaHQ7XFxyXFxuICAgICAgICAvLyB0b3A6JGhlYWRlci1oZWlnaHQgKyAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gYnV0dG9uIHtcXHJcXG4gICAgICAgIC8vIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDcuNXB4IDEycHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgICAgICAvLyB0b3A6JGhlYWRlci1oZWlnaHQrIDEycHg7XFxyXFxuICAgICAgICB0b3A6IDEwcHg7XFxyXFxuICAgICAgICByaWdodDogMTQ1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8tc2xpZGUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGhlaWdodDogJHA1LWluZm8taGVpZ2h0O1xcclxcbiAgICAgICAgLy8gbWFyZ2luOiA1cHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgICAgIGxlZnQ6IDI1cHg7XFxyXFxuICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgICAgICAvLyByaWdodDogMzVweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5wNS1pbmZvLXNsaWRlIGltZ3tcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxNWRlZykgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgICAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgICAgIC8vIC13ZWJraXQtZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbiAgICAgICAgLy8gZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvLXNob3d7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zaG93OjphZnRlcntcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnA1LWNhbnZhcyB7XFxyXFxuICAgIC8vICAgICAvLyBtYXJnaW4tdG9wOiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgIC8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICAvLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSAtICN7JHA1LWluZm8taGVpZ2h0fSk7XFxyXFxuICAgIC8vIH1cXHJcXG5cXHJcXG4gICAgLnN1Ym1lcmdlbmNlLWhvdmVyIGJye1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3R7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0ICoge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMnB4IGF1dG87XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0IHNtYWxse1xcclxcbiAgICAgICAgLy8gbWFyZ2luOiAwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3QgcCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0IGgxIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDI1MHB4KTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICAgIGhlaWdodDogJGJvdHRvbS1oZWlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciBidXR0b24sIC5mb290ZXIgYSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpe1xcclxcbiAgICAkaGVhZGVyLWhlaWdodDo0MHB4O1xcclxcbiAgICAkdGh1bWJuYWlsLXNpemU6IDIwMHB4O1xcclxcbiAgICAkYm90dG9tLWhlaWdodDogNzBweDtcXHJcXG4gICAgJHJlZ3VsYXItZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICAkcDUtaW5mby1oZWlnaHQ6IDQwcHg7XFxyXFxuXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBodG1se1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGNvZGV7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHggNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtMXB4IDFweCAwcHgsIGN5YW4gMHB4IC0xcHggMHB4LCByZWQgMXB4IDFweCAwcHg7XFxyXFxuICAgICAgICAvLyB0ZXh0LXNoYWRvdzogJHZocy1zaGFkb3dzLW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtMXB4IDFweCAwcHgsIGN5YW4gMHB4IC0xcHggMHB4LCByZWQgMXB4IDFweCAwcHg7XFxyXFxuICAgICAgICAvLyB0ZXh0LXNoYWRvdzogJHZocy1zaGFkb3dzLXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW4tYm9keXtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDokaGVhZGVyLWhlaWdodDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIGgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDo4cHg7XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIGltZyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBvcHVwe1xcclxcbiAgICAgICAgZGlzcGxheTpub25lO1xcclxcbiAgICAgICAgdG9wOiAkaGVhZGVyLWhlaWdodDtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmlnYXRvciBpbWcge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2aWdhdG9yIGJ1dHRvbntcXHJcXG4gICAgICAgIHJpZ2h0OjVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZpZ2F0b3IgaW5wdXR7XFxyXFxuICAgICAgICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWx7XFxyXFxuICAgICAgICBoZWlnaHQ6JHRodW1ibmFpbC1zaXplO1xcclxcbiAgICAgICAgd2lkdGg6ICR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgICAgIC8vIG1hcmdpbjogMTBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSA1MHB4IGJsYWNrLCAxMHB4IDEwcHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsOmZpcnN0LW9mLXR5cGV7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbDpsYXN0LW9mLXR5cGV7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnBvc3QtdGh1bWJuYWlsIHtcXHJcXG4gICAgICAgIGhlaWdodDokdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgICAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDUwcHggYmxhY2ssIDEwcHggMTBweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBvc3QtdGh1bWJuYWlsOmZpcnN0LW9mLXR5cGV7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbCBwIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWwgaDIge1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtbGlzdCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjJweDtcXHJcXG4gICAgICAgIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gKCN7JHNlYXJjaC1oZWlnaHR9ICsgI3skaGVhZGVyLWhlaWdodH0gKyAjeyRib3R0b20taGVpZ2h0fSkpO1xcclxcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgLy8gbWF4LWhlaWdodDogMTBweDtcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAwcHg7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDBweDtcXHJcXG4gICAgICAgIC8vIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAucHJvamVjdC1saXN0ICp7XFxyXFxuXFxyXFxuICAgIC8vIH1cXHJcXG5cXHJcXG4gICAgLmNsb3NlLWljb24ge1xcclxcbiAgICAgICAgLy8gcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtcGFnZXtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gKCN7JGhlYWRlci1oZWlnaHR9ICsgI3skYm90dG9tLWhlaWdodH0pKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2hhcmUtaWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdC1sZWZ0IHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY29udGFjdC1yaWdodCB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNvbnRhY3QtcmlnaHQgaDF7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0LXRodW1ibmFpbCBkaXZ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgICAgLy8gZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAuYWJvdXR7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWUge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWUgaW1ne1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuYWJvdXQtbWUgcCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWUgZGl2e1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mbyBoMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMiAqICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkcDUtaW5mby1oZWlnaHQgLSAyLjVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mbyBwe1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAucDUtaW5mbyBidXR0b24sIC5wNS1pbmZvIGlucHV0IHtcXHJcXG4gICAgLy8gICAgIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICAvLyAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIC8vICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIC8vICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgLy8gICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgLy8gICAgIG1hcmdpbjogNy41cHg7XFxyXFxuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIC8vICAgICB0b3A6MHB4O1xcclxcbiAgICAvLyAgICAgcmlnaHQ6IDM3LjVweDtcXHJcXG4gICAgLy8gfVxcclxcblxcclxcblxcclxcbiAgICAucDUtaW5mbyBidXR0b24sIC5wNS1pbmZvIGlucHV0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mbyBidXR0b257XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDcuNXB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOi0ycHg7XFxyXFxuICAgICAgICByaWdodDogMzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mbyBpbnB1dHtcXHJcXG4gICAgICAgIHdpZHRoOiAxNjVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLztcXHJcXG4gICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zbGlkZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucDUtaW5mby1zbGlkZSBpbWd7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTVkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgICAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zaG93e1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvLXNob3c6OmFmdGVye1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtY2FudmFze1xcclxcbiAgICAgICAgdG9wOiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHA1LWluZm8taGVpZ2h0fSk7XFxyXFxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAtMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1Ym1lcmdlbmNlLWhvdmVyIGJye1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0e1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgLy8gbWFyZ2luOjVweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3QgcCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDokYm90dG9tLWhlaWdodDtcXHJcXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgLy9wb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXIgYnV0dG9uLCAuZm9vdGVyIGEge1xcclxcbiAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDE1cHggYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbjogNy41cHggMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29weXJpZ2h0e1xcclxcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6ICR2aHMtc2hhZG93cy1zO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXs5MTpmdW5jdGlvbihlKXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxyKXtpZighcil7cj17fX1lPWUmJmUuX19lc01vZHVsZT9lLmRlZmF1bHQ6ZTtpZih0eXBlb2YgZSE9PVwic3RyaW5nXCIpe3JldHVybiBlfWlmKC9eWydcIl0uKlsnXCJdJC8udGVzdChlKSl7ZT1lLnNsaWNlKDEsLTEpfWlmKHIuaGFzaCl7ZSs9ci5oYXNofWlmKC9bXCInKCkgXFx0XFxuXS8udGVzdChlKXx8ci5uZWVkUXVvdGVzKXtyZXR1cm4nXCInLmNvbmNhdChlLnJlcGxhY2UoL1wiL2csJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLFwiXFxcXG5cIiksJ1wiJyl9cmV0dXJuIGV9fX07dmFyIHI9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyh0KXtpZihyW3RdKXtyZXR1cm4gclt0XS5leHBvcnRzfXZhciBfPXJbdF09e2V4cG9ydHM6e319O3ZhciBuPXRydWU7dHJ5e2VbdF0oXyxfLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7bj1mYWxzZX1maW5hbGx5e2lmKG4pZGVsZXRlIHJbdF19cmV0dXJuIF8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MSl9KCk7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9tdXNpYy1iYW5uZXIuZDUzMmYyZjcyNmIyYTAwMzBlN2Y3ZTU3ZDVmOGY5YTQuanBnXCI7IiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFQcmlzbS5wbHVnaW5zLnRvb2xiYXIpIHtcblx0XHRjb25zb2xlLndhcm4oJ0NvcHkgdG8gQ2xpcGJvYXJkIHBsdWdpbiBsb2FkZWQgYmVmb3JlIFRvb2xiYXIgcGx1Z2luLicpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZW4gdGhlIGdpdmVuIGVsZW1lbnRzIGlzIGNsaWNrZWQgYnkgdGhlIHVzZXIsIHRoZSBnaXZlbiB0ZXh0IHdpbGwgYmUgY29waWVkIHRvIGNsaXBib2FyZC5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge0NvcHlJbmZvfSBjb3B5SW5mb1xuXHQgKlxuXHQgKiBAdHlwZWRlZiBDb3B5SW5mb1xuXHQgKiBAcHJvcGVydHkgeygpID0+IHN0cmluZ30gZ2V0VGV4dFxuXHQgKiBAcHJvcGVydHkgeygpID0+IHZvaWR9IHN1Y2Nlc3Ncblx0ICogQHByb3BlcnR5IHsocmVhc29uOiB1bmtub3duKSA9PiB2b2lkfSBlcnJvclxuXHQgKi9cblx0ZnVuY3Rpb24gcmVnaXN0ZXJDbGlwYm9hcmQoZWxlbWVudCwgY29weUluZm8pIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29weVRleHRUb0NsaXBib2FyZChjb3B5SW5mbyk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzA4MTAzMjIvNzU5NTQ3MlxuXG5cdC8qKiBAcGFyYW0ge0NvcHlJbmZvfSBjb3B5SW5mbyAqL1xuXHRmdW5jdGlvbiBmYWxsYmFja0NvcHlUZXh0VG9DbGlwYm9hcmQoY29weUluZm8pIHtcblx0XHR2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXHRcdHRleHRBcmVhLnZhbHVlID0gY29weUluZm8uZ2V0VGV4dCgpO1xuXG5cdFx0Ly8gQXZvaWQgc2Nyb2xsaW5nIHRvIGJvdHRvbVxuXHRcdHRleHRBcmVhLnN0eWxlLnRvcCA9ICcwJztcblx0XHR0ZXh0QXJlYS5zdHlsZS5sZWZ0ID0gJzAnO1xuXHRcdHRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuXHRcdHRleHRBcmVhLmZvY3VzKCk7XG5cdFx0dGV4dEFyZWEuc2VsZWN0KCk7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChzdWNjZXNzZnVsKSB7XG5cdFx0XHRcdFx0Y29weUluZm8uc3VjY2VzcygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvcHlJbmZvLmVycm9yKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNvcHlJbmZvLmVycm9yKGVycik7XG5cdFx0XHR9LCAxKTtcblx0XHR9XG5cblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcblx0fVxuXHQvKiogQHBhcmFtIHtDb3B5SW5mb30gY29weUluZm8gKi9cblx0ZnVuY3Rpb24gY29weVRleHRUb0NsaXBib2FyZChjb3B5SW5mbykge1xuXHRcdGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG5cdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5SW5mby5nZXRUZXh0KCkpLnRoZW4oY29weUluZm8uc3VjY2VzcywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQvLyB0cnkgdGhlIGZhbGxiYWNrIGluIGNhc2UgYHdyaXRlVGV4dGAgZGlkbid0IHdvcmtcblx0XHRcdFx0ZmFsbGJhY2tDb3B5VGV4dFRvQ2xpcGJvYXJkKGNvcHlJbmZvKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmYWxsYmFja0NvcHlUZXh0VG9DbGlwYm9hcmQoY29weUluZm8pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZWxlY3RzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHQgKi9cblx0ZnVuY3Rpb24gc2VsZWN0RWxlbWVudFRleHQoZWxlbWVudCkge1xuXHRcdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMDA3OTkxMC83NTk1NDcyXG5cdFx0d2luZG93LmdldFNlbGVjdGlvbigpLnNlbGVjdEFsbENoaWxkcmVuKGVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyYXZlcnNlcyB1cCB0aGUgRE9NIHRyZWUgdG8gZmluZCBkYXRhIGF0dHJpYnV0ZXMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gc3RhcnRFbGVtZW50IEFuIGVsZW1lbnQgdG8gc3RhcnQgZnJvbS5cblx0ICogQHJldHVybnMge1NldHRpbmdzfSBUaGUgcGx1Z2luIHNldHRpbmdzLlxuXHQgKiBAdHlwZWRlZiB7UmVjb3JkPFwiY29weVwiIHwgXCJjb3B5LWVycm9yXCIgfCBcImNvcHktc3VjY2Vzc1wiIHwgXCJjb3B5LXRpbWVvdXRcIiwgc3RyaW5nIHwgbnVtYmVyPn0gU2V0dGluZ3Ncblx0ICovXG5cdGZ1bmN0aW9uIGdldFNldHRpbmdzKHN0YXJ0RWxlbWVudCkge1xuXHRcdC8qKiBAdHlwZSB7U2V0dGluZ3N9ICovXG5cdFx0dmFyIHNldHRpbmdzID0ge1xuXHRcdFx0J2NvcHknOiAnQ29weScsXG5cdFx0XHQnY29weS1lcnJvcic6ICdQcmVzcyBDdHJsK0MgdG8gY29weScsXG5cdFx0XHQnY29weS1zdWNjZXNzJzogJ0NvcGllZCEnLFxuXHRcdFx0J2NvcHktdGltZW91dCc6IDUwMDBcblx0XHR9O1xuXG5cdFx0dmFyIHByZWZpeCA9ICdkYXRhLXByaXNtanMtJztcblx0XHRmb3IgKHZhciBrZXkgaW4gc2V0dGluZ3MpIHtcblx0XHRcdHZhciBhdHRyID0gcHJlZml4ICsga2V5O1xuXHRcdFx0dmFyIGVsZW1lbnQgPSBzdGFydEVsZW1lbnQ7XG5cdFx0XHR3aGlsZSAoZWxlbWVudCAmJiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcblx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRcdHNldHRpbmdzW2tleV0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG5cblx0UHJpc20ucGx1Z2lucy50b29sYmFyLnJlZ2lzdGVyQnV0dG9uKCdjb3B5LXRvLWNsaXBib2FyZCcsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgZWxlbWVudCA9IGVudi5lbGVtZW50O1xuXG5cdFx0dmFyIHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoZWxlbWVudCk7XG5cblx0XHR2YXIgbGlua0NvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRsaW5rQ29weS5jbGFzc05hbWUgPSAnY29weS10by1jbGlwYm9hcmQtYnV0dG9uJztcblx0XHRsaW5rQ29weS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cdFx0dmFyIGxpbmtTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGxpbmtDb3B5LmFwcGVuZENoaWxkKGxpbmtTcGFuKTtcblxuXHRcdHNldFN0YXRlKCdjb3B5Jyk7XG5cblx0XHRyZWdpc3RlckNsaXBib2FyZChsaW5rQ29weSwge1xuXHRcdFx0Z2V0VGV4dDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudC50ZXh0Q29udGVudDtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNldFN0YXRlKCdjb3B5LXN1Y2Nlc3MnKTtcblxuXHRcdFx0XHRyZXNldFRleHQoKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZXRTdGF0ZSgnY29weS1lcnJvcicpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGVjdEVsZW1lbnRUZXh0KGVsZW1lbnQpO1xuXHRcdFx0XHR9LCAxKTtcblxuXHRcdFx0XHRyZXNldFRleHQoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBsaW5rQ29weTtcblxuXHRcdGZ1bmN0aW9uIHJlc2V0VGV4dCgpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZXRTdGF0ZSgnY29weScpOyB9LCBzZXR0aW5nc1snY29weS10aW1lb3V0J10pO1xuXHRcdH1cblxuXHRcdC8qKiBAcGFyYW0ge1wiY29weVwiIHwgXCJjb3B5LWVycm9yXCIgfCBcImNvcHktc3VjY2Vzc1wifSBzdGF0ZSAqL1xuXHRcdGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG5cdFx0XHRsaW5rU3Bhbi50ZXh0Q29udGVudCA9IHNldHRpbmdzW3N0YXRlXTtcblx0XHRcdGxpbmtDb3B5LnNldEF0dHJpYnV0ZSgnZGF0YS1jb3B5LXN0YXRlJywgc3RhdGUpO1xuXHRcdH1cblx0fSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0UHJpc20ucGx1Z2lucy50b29sYmFyLnJlZ2lzdGVyQnV0dG9uKCdkb3dubG9hZC1maWxlJywgZnVuY3Rpb24gKGVudikge1xuXHRcdHZhciBwcmUgPSBlbnYuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpIHx8ICFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXNyYycpIHx8ICFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLWRvd25sb2FkLWxpbmsnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgc3JjID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcblx0XHR2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRhLnRleHRDb250ZW50ID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1kb3dubG9hZC1saW5rLWxhYmVsJykgfHwgJ0Rvd25sb2FkJztcblx0XHRhLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnJyk7XG5cdFx0YS5ocmVmID0gc3JjO1xuXHRcdHJldHVybiBhO1xuXHR9KTtcblxufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG5cblx0aWYgKHR5cGVvZiBQcmlzbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbHVnaW4gbmFtZSB3aGljaCBpcyB1c2VkIGFzIGEgY2xhc3MgbmFtZSBmb3IgPHByZT4gd2hpY2ggaXMgYWN0aXZhdGluZyB0aGUgcGx1Z2luXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHR2YXIgUExVR0lOX05BTUUgPSAnbGluZS1udW1iZXJzJztcblxuXHQvKipcblx0ICogUmVndWxhciBleHByZXNzaW9uIHVzZWQgZm9yIGRldGVybWluaW5nIGxpbmUgYnJlYWtzXG5cdCAqXG5cdCAqIEB0eXBlIHtSZWdFeHB9XG5cdCAqL1xuXHR2YXIgTkVXX0xJTkVfRVhQID0gL1xcbig/ISQpL2c7XG5cblxuXHQvKipcblx0ICogR2xvYmFsIGV4cG9ydHNcblx0ICovXG5cdHZhciBjb25maWcgPSBQcmlzbS5wbHVnaW5zLmxpbmVOdW1iZXJzID0ge1xuXHRcdC8qKlxuXHRcdCAqIEdldCBub2RlIGZvciBwcm92aWRlZCBsaW5lIG51bWJlclxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHByZSBlbGVtZW50XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciBsaW5lIG51bWJlclxuXHRcdCAqIEByZXR1cm5zIHtFbGVtZW50fHVuZGVmaW5lZH1cblx0XHQgKi9cblx0XHRnZXRMaW5lOiBmdW5jdGlvbiAoZWxlbWVudCwgbnVtYmVyKSB7XG5cdFx0XHRpZiAoZWxlbWVudC50YWdOYW1lICE9PSAnUFJFJyB8fCAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxpbmVOdW1iZXJSb3dzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKTtcblx0XHRcdGlmICghbGluZU51bWJlclJvd3MpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGxpbmVOdW1iZXJTdGFydCA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXJ0JyksIDEwKSB8fCAxO1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJFbmQgPSBsaW5lTnVtYmVyU3RhcnQgKyAobGluZU51bWJlclJvd3MuY2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG5cblx0XHRcdGlmIChudW1iZXIgPCBsaW5lTnVtYmVyU3RhcnQpIHtcblx0XHRcdFx0bnVtYmVyID0gbGluZU51bWJlclN0YXJ0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG51bWJlciA+IGxpbmVOdW1iZXJFbmQpIHtcblx0XHRcdFx0bnVtYmVyID0gbGluZU51bWJlckVuZDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxpbmVJbmRleCA9IG51bWJlciAtIGxpbmVOdW1iZXJTdGFydDtcblxuXHRcdFx0cmV0dXJuIGxpbmVOdW1iZXJSb3dzLmNoaWxkcmVuW2xpbmVJbmRleF07XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlc2l6ZXMgdGhlIGxpbmUgbnVtYmVycyBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIFRoaXMgZnVuY3Rpb24gd2lsbCBub3QgYWRkIGxpbmUgbnVtYmVycy4gSXQgd2lsbCBvbmx5IHJlc2l6ZSBleGlzdGluZyBvbmVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBBIGA8cHJlPmAgZWxlbWVudCB3aXRoIGxpbmUgbnVtYmVycy5cblx0XHQgKiBAcmV0dXJucyB7dm9pZH1cblx0XHQgKi9cblx0XHRyZXNpemU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRyZXNpemVFbGVtZW50cyhbZWxlbWVudF0pO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIHRoZSBwbHVnaW4gY2FuIGFzc3VtZSB0aGF0IHRoZSB1bml0cyBmb250IHNpemVzIGFuZCBtYXJnaW5zIGFyZSBub3QgZGVwZW5kZWQgb24gdGhlIHNpemUgb2Zcblx0XHQgKiB0aGUgY3VycmVudCB2aWV3cG9ydC5cblx0XHQgKlxuXHRcdCAqIFNldHRpbmcgdGhpcyB0byBgdHJ1ZWAgd2lsbCBhbGxvdyB0aGUgcGx1Z2luIHRvIGRvIGNlcnRhaW4gb3B0aW1pemF0aW9ucyBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuXHRcdCAqXG5cdFx0ICogU2V0IHRoaXMgdG8gYGZhbHNlYCBpZiB5b3UgdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIENTUyB1bml0czogYHZoYCwgYHZ3YCwgYHZtaW5gLCBgdm1heGAuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRhc3N1bWVWaWV3cG9ydEluZGVwZW5kZW5jZTogdHJ1ZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXNpemVzIHRoZSBnaXZlbiBlbGVtZW50cy5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBlbGVtZW50c1xuXHQgKi9cblx0ZnVuY3Rpb24gcmVzaXplRWxlbWVudHMoZWxlbWVudHMpIHtcblx0XHRlbGVtZW50cyA9IGVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuXHRcdFx0dmFyIGNvZGVTdHlsZXMgPSBnZXRTdHlsZXMoZSk7XG5cdFx0XHR2YXIgd2hpdGVTcGFjZSA9IGNvZGVTdHlsZXNbJ3doaXRlLXNwYWNlJ107XG5cdFx0XHRyZXR1cm4gd2hpdGVTcGFjZSA9PT0gJ3ByZS13cmFwJyB8fCB3aGl0ZVNwYWNlID09PSAncHJlLWxpbmUnO1xuXHRcdH0pO1xuXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGluZm9zID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHR2YXIgY29kZUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcblx0XHRcdHZhciBsaW5lTnVtYmVyc1dyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcnMtcm93cycpO1xuXHRcdFx0aWYgKCFjb2RlRWxlbWVudCB8fCAhbGluZU51bWJlcnNXcmFwcGVyKSB7XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG5cdFx0XHR2YXIgbGluZU51bWJlclNpemVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXNpemVyJyk7XG5cdFx0XHR2YXIgY29kZUxpbmVzID0gY29kZUVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoTkVXX0xJTkVfRVhQKTtcblxuXHRcdFx0aWYgKCFsaW5lTnVtYmVyU2l6ZXIpIHtcblx0XHRcdFx0bGluZU51bWJlclNpemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRsaW5lTnVtYmVyU2l6ZXIuY2xhc3NOYW1lID0gJ2xpbmUtbnVtYmVycy1zaXplcic7XG5cblx0XHRcdFx0Y29kZUVsZW1lbnQuYXBwZW5kQ2hpbGQobGluZU51bWJlclNpemVyKTtcblx0XHRcdH1cblxuXHRcdFx0bGluZU51bWJlclNpemVyLmlubmVySFRNTCA9ICcwJztcblx0XHRcdGxpbmVOdW1iZXJTaXplci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0dmFyIG9uZUxpbmVySGVpZ2h0ID0gbGluZU51bWJlclNpemVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRcdGxpbmVOdW1iZXJTaXplci5pbm5lckhUTUwgPSAnJztcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0bGluZXM6IGNvZGVMaW5lcyxcblx0XHRcdFx0bGluZUhlaWdodHM6IFtdLFxuXHRcdFx0XHRvbmVMaW5lckhlaWdodDogb25lTGluZXJIZWlnaHQsXG5cdFx0XHRcdHNpemVyOiBsaW5lTnVtYmVyU2l6ZXIsXG5cdFx0XHR9O1xuXHRcdH0pLmZpbHRlcihCb29sZWFuKTtcblxuXHRcdGluZm9zLmZvckVhY2goZnVuY3Rpb24gKGluZm8pIHtcblx0XHRcdHZhciBsaW5lTnVtYmVyU2l6ZXIgPSBpbmZvLnNpemVyO1xuXHRcdFx0dmFyIGxpbmVzID0gaW5mby5saW5lcztcblx0XHRcdHZhciBsaW5lSGVpZ2h0cyA9IGluZm8ubGluZUhlaWdodHM7XG5cdFx0XHR2YXIgb25lTGluZXJIZWlnaHQgPSBpbmZvLm9uZUxpbmVySGVpZ2h0O1xuXG5cdFx0XHRsaW5lSGVpZ2h0c1tsaW5lcy5sZW5ndGggLSAxXSA9IHVuZGVmaW5lZDtcblx0XHRcdGxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUsIGluZGV4KSB7XG5cdFx0XHRcdGlmIChsaW5lICYmIGxpbmUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHZhciBlID0gbGluZU51bWJlclNpemVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0XHRcdFx0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0XHRlLnRleHRDb250ZW50ID0gbGluZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaW5lSGVpZ2h0c1tpbmRleF0gPSBvbmVMaW5lckhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRpbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvKSB7XG5cdFx0XHR2YXIgbGluZU51bWJlclNpemVyID0gaW5mby5zaXplcjtcblx0XHRcdHZhciBsaW5lSGVpZ2h0cyA9IGluZm8ubGluZUhlaWdodHM7XG5cblx0XHRcdHZhciBjaGlsZEluZGV4ID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGluZUhlaWdodHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGxpbmVIZWlnaHRzW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRsaW5lSGVpZ2h0c1tpXSA9IGxpbmVOdW1iZXJTaXplci5jaGlsZHJlbltjaGlsZEluZGV4KytdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoaW5mbykge1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJTaXplciA9IGluZm8uc2l6ZXI7XG5cdFx0XHR2YXIgd3JhcHBlciA9IGluZm8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKTtcblxuXHRcdFx0bGluZU51bWJlclNpemVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRsaW5lTnVtYmVyU2l6ZXIuaW5uZXJIVE1MID0gJyc7XG5cblx0XHRcdGluZm8ubGluZUhlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAoaGVpZ2h0LCBsaW5lTnVtYmVyKSB7XG5cdFx0XHRcdHdyYXBwZXIuY2hpbGRyZW5bbGluZU51bWJlcl0uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4Jztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgc3R5bGUgZGVjbGFyYXRpb25zIGZvciB0aGUgZWxlbWVudFxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0ICovXG5cdGZ1bmN0aW9uIGdldFN0eWxlcyhlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIDogKGVsZW1lbnQuY3VycmVudFN0eWxlIHx8IG51bGwpO1xuXHR9XG5cblx0dmFyIGxhc3RXaWR0aCA9IHVuZGVmaW5lZDtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoY29uZmlnLmFzc3VtZVZpZXdwb3J0SW5kZXBlbmRlbmNlICYmIGxhc3RXaWR0aCA9PT0gd2luZG93LmlubmVyV2lkdGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGFzdFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0XHRyZXNpemVFbGVtZW50cyhBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUuJyArIFBMVUdJTl9OQU1FKSkpO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2NvbXBsZXRlJywgZnVuY3Rpb24gKGVudikge1xuXHRcdGlmICghZW52LmNvZGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY29kZSA9IC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKGVudi5lbGVtZW50KTtcblx0XHR2YXIgcHJlID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKGNvZGUucGFyZW50Tm9kZSk7XG5cblx0XHQvLyB3b3JrcyBvbmx5IGZvciA8Y29kZT4gd3JhcHBlZCBpbnNpZGUgPHByZT4gKG5vdCBpbmxpbmUpXG5cdFx0aWYgKCFwcmUgfHwgIS9wcmUvaS50ZXN0KHByZS5ub2RlTmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBYm9ydCBpZiBsaW5lIG51bWJlcnMgYWxyZWFkeSBleGlzdHNcblx0XHRpZiAoY29kZS5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIG9ubHkgYWRkIGxpbmUgbnVtYmVycyBpZiA8Y29kZT4gb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBgbGluZS1udW1iZXJzYCBjbGFzc1xuXHRcdGlmICghUHJpc20udXRpbC5pc0FjdGl2ZShjb2RlLCBQTFVHSU5fTkFNRSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIGNsYXNzICdsaW5lLW51bWJlcnMnIGZyb20gdGhlIDxjb2RlPlxuXHRcdGNvZGUuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSk7XG5cdFx0Ly8gQWRkIHRoZSBjbGFzcyAnbGluZS1udW1iZXJzJyB0byB0aGUgPHByZT5cblx0XHRwcmUuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSk7XG5cblx0XHR2YXIgbWF0Y2ggPSBlbnYuY29kZS5tYXRjaChORVdfTElORV9FWFApO1xuXHRcdHZhciBsaW5lc051bSA9IG1hdGNoID8gbWF0Y2gubGVuZ3RoICsgMSA6IDE7XG5cdFx0dmFyIGxpbmVOdW1iZXJzV3JhcHBlcjtcblxuXHRcdHZhciBsaW5lcyA9IG5ldyBBcnJheShsaW5lc051bSArIDEpLmpvaW4oJzxzcGFuPjwvc3Bhbj4nKTtcblxuXHRcdGxpbmVOdW1iZXJzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5lTnVtYmVyc1dyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLmNsYXNzTmFtZSA9ICdsaW5lLW51bWJlcnMtcm93cyc7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLmlubmVySFRNTCA9IGxpbmVzO1xuXG5cdFx0aWYgKHByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3RhcnQnKSkge1xuXHRcdFx0cHJlLnN0eWxlLmNvdW50ZXJSZXNldCA9ICdsaW5lbnVtYmVyICcgKyAocGFyc2VJbnQocHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpLCAxMCkgLSAxKTtcblx0XHR9XG5cblx0XHRlbnYuZWxlbWVudC5hcHBlbmRDaGlsZChsaW5lTnVtYmVyc1dyYXBwZXIpO1xuXG5cdFx0cmVzaXplRWxlbWVudHMoW3ByZV0pO1xuXG5cdFx0UHJpc20uaG9va3MucnVuKCdsaW5lLW51bWJlcnMnLCBlbnYpO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2xpbmUtbnVtYmVycycsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRlbnYucGx1Z2lucyA9IGVudi5wbHVnaW5zIHx8IHt9O1xuXHRcdGVudi5wbHVnaW5zLmxpbmVOdW1iZXJzID0gdHJ1ZTtcblx0fSk7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmdW5jdGlvbiBtYXBDbGFzc05hbWUobmFtZSkge1xuXHRcdHZhciBjdXN0b21DbGFzcyA9IFByaXNtLnBsdWdpbnMuY3VzdG9tQ2xhc3M7XG5cdFx0aWYgKGN1c3RvbUNsYXNzKSB7XG5cdFx0XHRyZXR1cm4gY3VzdG9tQ2xhc3MuYXBwbHkobmFtZSwgJ25vbmUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXHR9XG5cblx0dmFyIFBBUlRORVIgPSB7XG5cdFx0JygnOiAnKScsXG5cdFx0J1snOiAnXScsXG5cdFx0J3snOiAnfScsXG5cdH07XG5cblx0Ly8gVGhlIG5hbWVzIGZvciBicmFjZSB0eXBlcy5cblx0Ly8gVGhlc2UgbmFtZXMgaGF2ZSB0d28gcHVycG9zZXM6IDEpIHRoZXkgY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcgYW5kIDIpIHRoZXkgYXJlIHVzZWQgdG8gcGFpciBicmFjZXMuIE9ubHkgYnJhY2VzXG5cdC8vIG9mIHRoZSBzYW1lIHR5cGUgYXJlIHBhaXJlZC5cblx0dmFyIE5BTUVTID0ge1xuXHRcdCcoJzogJ2JyYWNlLXJvdW5kJyxcblx0XHQnWyc6ICdicmFjZS1zcXVhcmUnLFxuXHRcdCd7JzogJ2JyYWNlLWN1cmx5Jyxcblx0fTtcblxuXHQvLyBBIG1hcCBmb3IgYnJhY2UgYWxpYXNlcy5cblx0Ly8gVGhpcyBpcyB1c2VmdWwgZm9yIHdoZW4gc29tZSBicmFjZXMgaGF2ZSBhIHByZWZpeC9zdWZmaXggYXMgcGFydCBvZiB0aGUgcHVuY3R1YXRpb24gdG9rZW4uXG5cdHZhciBCUkFDRV9BTElBU19NQVAgPSB7XG5cdFx0JyR7JzogJ3snLCAvLyBKUyB0ZW1wbGF0ZSBwdW5jdHVhdGlvbiAoZS5nLiBgZm9vICR7YmFyICsgMX1gKVxuXHR9O1xuXG5cdHZhciBMRVZFTF9XQVJQID0gMTI7XG5cblx0dmFyIHBhaXJJZENvdW50ZXIgPSAwO1xuXG5cdHZhciBCUkFDRV9JRF9QQVRURVJOID0gL14ocGFpci1cXGQrLSkob3BlbnxjbG9zZSkkLztcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYnJhY2UgcGFydG5lciBnaXZlbiBvbmUgYnJhY2Ugb2YgYSBicmFjZSBwYWlyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBicmFjZVxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRQYXJ0bmVyQnJhY2UoYnJhY2UpIHtcblx0XHR2YXIgbWF0Y2ggPSBCUkFDRV9JRF9QQVRURVJOLmV4ZWMoYnJhY2UuaWQpO1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG1hdGNoWzFdICsgKG1hdGNoWzJdID09ICdvcGVuJyA/ICdjbG9zZScgOiAnb3BlbicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdGhpcyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBob3ZlckJyYWNlKCkge1xuXHRcdGlmICghUHJpc20udXRpbC5pc0FjdGl2ZSh0aGlzLCAnYnJhY2UtaG92ZXInLCB0cnVlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdFt0aGlzLCBnZXRQYXJ0bmVyQnJhY2UodGhpcyldLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdGUuY2xhc3NMaXN0LmFkZChtYXBDbGFzc05hbWUoJ2JyYWNlLWhvdmVyJykpO1xuXHRcdH0pO1xuXHR9XG5cdC8qKlxuXHQgKiBAdGhpcyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBsZWF2ZUJyYWNlKCkge1xuXHRcdFt0aGlzLCBnZXRQYXJ0bmVyQnJhY2UodGhpcyldLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdGUuY2xhc3NMaXN0LnJlbW92ZShtYXBDbGFzc05hbWUoJ2JyYWNlLWhvdmVyJykpO1xuXHRcdH0pO1xuXHR9XG5cdC8qKlxuXHQgKiBAdGhpcyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBjbGlja0JyYWNlKCkge1xuXHRcdGlmICghUHJpc20udXRpbC5pc0FjdGl2ZSh0aGlzLCAnYnJhY2Utc2VsZWN0JywgdHJ1ZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRbdGhpcywgZ2V0UGFydG5lckJyYWNlKHRoaXMpXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRlLmNsYXNzTGlzdC5hZGQobWFwQ2xhc3NOYW1lKCdicmFjZS1zZWxlY3RlZCcpKTtcblx0XHR9KTtcblx0fVxuXG5cdFByaXNtLmhvb2tzLmFkZCgnY29tcGxldGUnLCBmdW5jdGlvbiAoZW52KSB7XG5cblx0XHQvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuXHRcdHZhciBjb2RlID0gZW52LmVsZW1lbnQ7XG5cdFx0dmFyIHByZSA9IGNvZGUucGFyZW50RWxlbWVudDtcblxuXHRcdGlmICghcHJlIHx8IHByZS50YWdOYW1lICE9ICdQUkUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gZmluZCB0aGUgYnJhY2VzIHRvIG1hdGNoXG5cdFx0LyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9cblx0XHR2YXIgdG9NYXRjaCA9IFtdO1xuXHRcdGlmIChQcmlzbS51dGlsLmlzQWN0aXZlKGNvZGUsICdtYXRjaC1icmFjZXMnKSkge1xuXHRcdFx0dG9NYXRjaC5wdXNoKCcoJywgJ1snLCAneycpO1xuXHRcdH1cblxuXHRcdGlmICh0b01hdGNoLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHQvLyBub3RoaW5nIHRvIG1hdGNoXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFwcmUuX19saXN0ZW5lckFkZGVkKSB7XG5cdFx0XHQvLyBjb2RlIGJsb2NrcyBtaWdodCBiZSBoaWdobGlnaHRlZCBtb3JlIHRoYW4gb25jZVxuXHRcdFx0cHJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIHJlbW92ZUJyYWNlU2VsZWN0ZWQoKSB7XG5cdFx0XHRcdC8vIHRoZSBjb2RlIGVsZW1lbnQgbWlnaHQgaGF2ZSBiZWVuIHJlcGxhY2VkXG5cdFx0XHRcdHZhciBjb2RlID0gcHJlLnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcblx0XHRcdFx0dmFyIGNsYXNzTmFtZSA9IG1hcENsYXNzTmFtZSgnYnJhY2Utc2VsZWN0ZWQnKTtcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29kZS5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNsYXNzTmFtZSkpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcmUsICdfX2xpc3RlbmVyQWRkZWQnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXHRcdH1cblxuXHRcdC8qKiBAdHlwZSB7SFRNTFNwYW5FbGVtZW50W119ICovXG5cdFx0dmFyIHB1bmN0dWF0aW9uID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG5cdFx0XHRjb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4uJyArIG1hcENsYXNzTmFtZSgndG9rZW4nKSArICcuJyArIG1hcENsYXNzTmFtZSgncHVuY3R1YXRpb24nKSlcblx0XHQpO1xuXG5cdFx0LyoqIEB0eXBlIHt7IGluZGV4OiBudW1iZXIsIG9wZW46IGJvb2xlYW4sIGVsZW1lbnQ6IEhUTUxFbGVtZW50IH1bXX0gKi9cblx0XHR2YXIgYWxsQnJhY2VzID0gW107XG5cblx0XHR0b01hdGNoLmZvckVhY2goZnVuY3Rpb24gKG9wZW4pIHtcblx0XHRcdHZhciBjbG9zZSA9IFBBUlRORVJbb3Blbl07XG5cdFx0XHR2YXIgbmFtZSA9IG1hcENsYXNzTmFtZShOQU1FU1tvcGVuXSk7XG5cblx0XHRcdC8qKiBAdHlwZSB7W251bWJlciwgbnVtYmVyXVtdfSAqL1xuXHRcdFx0dmFyIHBhaXJzID0gW107XG5cdFx0XHQvKiogQHR5cGUge251bWJlcltdfSAqL1xuXHRcdFx0dmFyIG9wZW5TdGFjayA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB1bmN0dWF0aW9uLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gcHVuY3R1YXRpb25baV07XG5cdFx0XHRcdGlmIChlbGVtZW50LmNoaWxkRWxlbWVudENvdW50ID09IDApIHtcblx0XHRcdFx0XHR2YXIgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cdFx0XHRcdFx0dGV4dCA9IEJSQUNFX0FMSUFTX01BUFt0ZXh0XSB8fCB0ZXh0O1xuXHRcdFx0XHRcdGlmICh0ZXh0ID09PSBvcGVuKSB7XG5cdFx0XHRcdFx0XHRhbGxCcmFjZXMucHVzaCh7IGluZGV4OiBpLCBvcGVuOiB0cnVlLCBlbGVtZW50OiBlbGVtZW50IH0pO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG1hcENsYXNzTmFtZSgnYnJhY2Utb3BlbicpKTtcblx0XHRcdFx0XHRcdG9wZW5TdGFjay5wdXNoKGkpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGV4dCA9PT0gY2xvc2UpIHtcblx0XHRcdFx0XHRcdGFsbEJyYWNlcy5wdXNoKHsgaW5kZXg6IGksIG9wZW46IGZhbHNlLCBlbGVtZW50OiBlbGVtZW50IH0pO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG1hcENsYXNzTmFtZSgnYnJhY2UtY2xvc2UnKSk7XG5cdFx0XHRcdFx0XHRpZiAob3BlblN0YWNrLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRwYWlycy5wdXNoKFtpLCBvcGVuU3RhY2sucG9wKCldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cGFpcnMuZm9yRWFjaChmdW5jdGlvbiAocGFpcikge1xuXHRcdFx0XHR2YXIgcGFpcklkID0gJ3BhaXItJyArIChwYWlySWRDb3VudGVyKyspICsgJy0nO1xuXG5cdFx0XHRcdHZhciBvcGVuaW5nID0gcHVuY3R1YXRpb25bcGFpclswXV07XG5cdFx0XHRcdHZhciBjbG9zaW5nID0gcHVuY3R1YXRpb25bcGFpclsxXV07XG5cblx0XHRcdFx0b3BlbmluZy5pZCA9IHBhaXJJZCArICdvcGVuJztcblx0XHRcdFx0Y2xvc2luZy5pZCA9IHBhaXJJZCArICdjbG9zZSc7XG5cblx0XHRcdFx0W29wZW5pbmcsIGNsb3NpbmddLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlckJyYWNlKTtcblx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBsZWF2ZUJyYWNlKTtcblx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tCcmFjZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHR2YXIgbGV2ZWwgPSAwO1xuXHRcdGFsbEJyYWNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmluZGV4IC0gYi5pbmRleDsgfSk7XG5cdFx0YWxsQnJhY2VzLmZvckVhY2goZnVuY3Rpb24gKGJyYWNlKSB7XG5cdFx0XHRpZiAoYnJhY2Uub3Blbikge1xuXHRcdFx0XHRicmFjZS5lbGVtZW50LmNsYXNzTGlzdC5hZGQobWFwQ2xhc3NOYW1lKCdicmFjZS1sZXZlbC0nICsgKGxldmVsICUgTEVWRUxfV0FSUCArIDEpKSk7XG5cdFx0XHRcdGxldmVsKys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXZlbCA9IE1hdGgubWF4KDAsIGxldmVsIC0gMSk7XG5cdFx0XHRcdGJyYWNlLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChtYXBDbGFzc05hbWUoJ2JyYWNlLWxldmVsLScgKyAobGV2ZWwgJSBMRVZFTF9XQVJQICsgMSkpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKG9iajEsIG9iajIpIHtcblx0XHRmb3IgKHZhciBuYW1lIGluIG9iajIpIHtcblx0XHRcdGlmIChvYmoyLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0XHRcdG9iajFbbmFtZV0gPSBvYmoyW25hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb2JqMTtcblx0fTtcblxuXHRmdW5jdGlvbiBOb3JtYWxpemVXaGl0ZXNwYWNlKGRlZmF1bHRzKSB7XG5cdFx0dGhpcy5kZWZhdWx0cyA9IGFzc2lnbih7fSwgZGVmYXVsdHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9DYW1lbENhc2UodmFsdWUpIHtcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvLShcXHcpL2csIGZ1bmN0aW9uIChtYXRjaCwgZmlyc3RDaGFyKSB7XG5cdFx0XHRyZXR1cm4gZmlyc3RDaGFyLnRvVXBwZXJDYXNlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB0YWJMZW4oc3RyKSB7XG5cdFx0dmFyIHJlcyA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChzdHIuY2hhckNvZGVBdChpKSA9PSAnXFx0Jy5jaGFyQ29kZUF0KDApKSB7XG5cdFx0XHRcdHJlcyArPSAzO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RyLmxlbmd0aCArIHJlcztcblx0fVxuXG5cdE5vcm1hbGl6ZVdoaXRlc3BhY2UucHJvdG90eXBlID0ge1xuXHRcdHNldERlZmF1bHRzOiBmdW5jdGlvbiAoZGVmYXVsdHMpIHtcblx0XHRcdHRoaXMuZGVmYXVsdHMgPSBhc3NpZ24odGhpcy5kZWZhdWx0cywgZGVmYXVsdHMpO1xuXHRcdH0sXG5cdFx0bm9ybWFsaXplOiBmdW5jdGlvbiAoaW5wdXQsIHNldHRpbmdzKSB7XG5cdFx0XHRzZXR0aW5ncyA9IGFzc2lnbih0aGlzLmRlZmF1bHRzLCBzZXR0aW5ncyk7XG5cblx0XHRcdGZvciAodmFyIG5hbWUgaW4gc2V0dGluZ3MpIHtcblx0XHRcdFx0dmFyIG1ldGhvZE5hbWUgPSB0b0NhbWVsQ2FzZShuYW1lKTtcblx0XHRcdFx0aWYgKG5hbWUgIT09ICdub3JtYWxpemUnICYmIG1ldGhvZE5hbWUgIT09ICdzZXREZWZhdWx0cycgJiZcblx0XHRcdFx0XHRzZXR0aW5nc1tuYW1lXSAmJiB0aGlzW21ldGhvZE5hbWVdKSB7XG5cdFx0XHRcdFx0aW5wdXQgPSB0aGlzW21ldGhvZE5hbWVdLmNhbGwodGhpcywgaW5wdXQsIHNldHRpbmdzW25hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaW5wdXQ7XG5cdFx0fSxcblxuXHRcdC8qXG5cdFx0ICogTm9ybWFsaXphdGlvbiBtZXRob2RzXG5cdFx0ICovXG5cdFx0bGVmdFRyaW06IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXHMrLywgJycpO1xuXHRcdH0sXG5cdFx0cmlnaHRUcmltOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXHMrJC8sICcnKTtcblx0XHR9LFxuXHRcdHRhYnNUb1NwYWNlczogZnVuY3Rpb24gKGlucHV0LCBzcGFjZXMpIHtcblx0XHRcdHNwYWNlcyA9IHNwYWNlc3wwIHx8IDQ7XG5cdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZSgvXFx0L2csIG5ldyBBcnJheSgrK3NwYWNlcykuam9pbignICcpKTtcblx0XHR9LFxuXHRcdHNwYWNlc1RvVGFiczogZnVuY3Rpb24gKGlucHV0LCBzcGFjZXMpIHtcblx0XHRcdHNwYWNlcyA9IHNwYWNlc3wwIHx8IDQ7XG5cdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZShSZWdFeHAoJyB7JyArIHNwYWNlcyArICd9JywgJ2cnKSwgJ1xcdCcpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlVHJhaWxpbmc6IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL1xccyo/JC9nbSwgJycpO1xuXHRcdH0sXG5cdFx0Ly8gU3VwcG9ydCBmb3IgZGVwcmVjYXRlZCBwbHVnaW4gcmVtb3ZlLWluaXRpYWwtbGluZS1mZWVkXG5cdFx0cmVtb3ZlSW5pdGlhbExpbmVGZWVkOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKC9eKD86XFxyP1xcbnxcXHIpLywgJycpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlSW5kZW50OiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHZhciBpbmRlbnRzID0gaW5wdXQubWF0Y2goL15bXlxcU1xcblxccl0qKD89XFxTKS9nbSk7XG5cblx0XHRcdGlmICghaW5kZW50cyB8fCAhaW5kZW50c1swXS5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGlucHV0O1xuXHRcdFx0fVxuXG5cdFx0XHRpbmRlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7IH0pO1xuXG5cdFx0XHRpZiAoIWluZGVudHNbMF0ubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBpbnB1dDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoUmVnRXhwKCdeJyArIGluZGVudHNbMF0sICdnbScpLCAnJyk7XG5cdFx0fSxcblx0XHRpbmRlbnQ6IGZ1bmN0aW9uIChpbnB1dCwgdGFicykge1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL15bXlxcU1xcblxccl0qKD89XFxTKS9nbSwgbmV3IEFycmF5KCsrdGFicykuam9pbignXFx0JykgKyAnJCYnKTtcblx0XHR9LFxuXHRcdGJyZWFrTGluZXM6IGZ1bmN0aW9uIChpbnB1dCwgY2hhcmFjdGVycykge1xuXHRcdFx0Y2hhcmFjdGVycyA9IChjaGFyYWN0ZXJzID09PSB0cnVlKSA/IDgwIDogY2hhcmFjdGVyc3wwIHx8IDgwO1xuXG5cdFx0XHR2YXIgbGluZXMgPSBpbnB1dC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmICh0YWJMZW4obGluZXNbaV0pIDw9IGNoYXJhY3RlcnMpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBsaW5lID0gbGluZXNbaV0uc3BsaXQoLyhcXHMrKS9nKTtcblx0XHRcdFx0dmFyIGxlbiA9IDA7XG5cblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0dmFyIHRsID0gdGFiTGVuKGxpbmVbal0pO1xuXHRcdFx0XHRcdGxlbiArPSB0bDtcblx0XHRcdFx0XHRpZiAobGVuID4gY2hhcmFjdGVycykge1xuXHRcdFx0XHRcdFx0bGluZVtqXSA9ICdcXG4nICsgbGluZVtqXTtcblx0XHRcdFx0XHRcdGxlbiA9IHRsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5lc1tpXSA9IGxpbmUuam9pbignJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFN1cHBvcnQgbm9kZSBtb2R1bGVzXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gTm9ybWFsaXplV2hpdGVzcGFjZTtcblx0fVxuXG5cdFByaXNtLnBsdWdpbnMuTm9ybWFsaXplV2hpdGVzcGFjZSA9IG5ldyBOb3JtYWxpemVXaGl0ZXNwYWNlKHtcblx0XHQncmVtb3ZlLXRyYWlsaW5nJzogdHJ1ZSxcblx0XHQncmVtb3ZlLWluZGVudCc6IHRydWUsXG5cdFx0J2xlZnQtdHJpbSc6IHRydWUsXG5cdFx0J3JpZ2h0LXRyaW0nOiB0cnVlLFxuXHRcdC8qJ2JyZWFrLWxpbmVzJzogODAsXG5cdFx0J2luZGVudCc6IDIsXG5cdFx0J3JlbW92ZS1pbml0aWFsLWxpbmUtZmVlZCc6IGZhbHNlLFxuXHRcdCd0YWJzLXRvLXNwYWNlcyc6IDQsXG5cdFx0J3NwYWNlcy10by10YWJzJzogNCovXG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXNhbml0eS1jaGVjaycsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgTm9ybWFsaXplciA9IFByaXNtLnBsdWdpbnMuTm9ybWFsaXplV2hpdGVzcGFjZTtcblxuXHRcdC8vIENoZWNrIHNldHRpbmdzXG5cdFx0aWYgKGVudi5zZXR0aW5ncyAmJiBlbnYuc2V0dGluZ3NbJ3doaXRlc3BhY2Utbm9ybWFsaXphdGlvbiddID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGNsYXNzZXNcblx0XHRpZiAoIVByaXNtLnV0aWwuaXNBY3RpdmUoZW52LmVsZW1lbnQsICd3aGl0ZXNwYWNlLW5vcm1hbGl6YXRpb24nLCB0cnVlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFNpbXBsZSBtb2RlIGlmIHRoZXJlIGlzIG5vIGVudi5lbGVtZW50XG5cdFx0aWYgKCghZW52LmVsZW1lbnQgfHwgIWVudi5lbGVtZW50LnBhcmVudE5vZGUpICYmIGVudi5jb2RlKSB7XG5cdFx0XHRlbnYuY29kZSA9IE5vcm1hbGl6ZXIubm9ybWFsaXplKGVudi5jb2RlLCBlbnYuc2V0dGluZ3MpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE5vcm1hbCBtb2RlXG5cdFx0dmFyIHByZSA9IGVudi5lbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0aWYgKCFlbnYuY29kZSB8fCAhcHJlIHx8IHByZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAncHJlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBjaGlsZHJlbiA9IHByZS5jaGlsZE5vZGVzO1xuXHRcdHZhciBiZWZvcmUgPSAnJztcblx0XHR2YXIgYWZ0ZXIgPSAnJztcblx0XHR2YXIgY29kZUZvdW5kID0gZmFsc2U7XG5cblx0XHQvLyBNb3ZlIHN1cnJvdW5kaW5nIHdoaXRlc3BhY2UgZnJvbSB0aGUgPHByZT4gdGFnIGludG8gdGhlIDxjb2RlPiB0YWdcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG5cdFx0XHR2YXIgbm9kZSA9IGNoaWxkcmVuW2ldO1xuXG5cdFx0XHRpZiAobm9kZSA9PSBlbnYuZWxlbWVudCkge1xuXHRcdFx0XHRjb2RlRm91bmQgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChub2RlLm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG5cdFx0XHRcdGlmIChjb2RlRm91bmQpIHtcblx0XHRcdFx0XHRhZnRlciArPSBub2RlLm5vZGVWYWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRiZWZvcmUgKz0gbm9kZS5ub2RlVmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwcmUucmVtb3ZlQ2hpbGQobm9kZSk7XG5cdFx0XHRcdC0taTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIWVudi5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aCB8fCAhUHJpc20ucGx1Z2lucy5LZWVwTWFya3VwKSB7XG5cdFx0XHRlbnYuY29kZSA9IGJlZm9yZSArIGVudi5jb2RlICsgYWZ0ZXI7XG5cdFx0XHRlbnYuY29kZSA9IE5vcm1hbGl6ZXIubm9ybWFsaXplKGVudi5jb2RlLCBlbnYuc2V0dGluZ3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBQcmVzZXJ2ZSBtYXJrdXAgZm9yIGtlZXAtbWFya3VwIHBsdWdpblxuXHRcdFx0dmFyIGh0bWwgPSBiZWZvcmUgKyBlbnYuZWxlbWVudC5pbm5lckhUTUwgKyBhZnRlcjtcblx0XHRcdGVudi5lbGVtZW50LmlubmVySFRNTCA9IE5vcm1hbGl6ZXIubm9ybWFsaXplKGh0bWwsIGVudi5zZXR0aW5ncyk7XG5cdFx0XHRlbnYuY29kZSA9IGVudi5lbGVtZW50LnRleHRDb250ZW50O1xuXHRcdH1cblx0fSk7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIVByaXNtLnBsdWdpbnMudG9vbGJhcikge1xuXHRcdGNvbnNvbGUud2FybignU2hvdyBMYW5ndWFnZXMgcGx1Z2luIGxvYWRlZCBiZWZvcmUgVG9vbGJhciBwbHVnaW4uJyk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5cdC8vIFRoZSBsYW5ndWFnZXMgbWFwIGlzIGJ1aWx0IGF1dG9tYXRpY2FsbHkgd2l0aCBndWxwXG5cdHZhciBMYW5ndWFnZXMgPSAvKmxhbmd1YWdlc19wbGFjZWhvbGRlclsqL3tcblx0XHRcIm5vbmVcIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJwbGFpblwiOiBcIlBsYWluIHRleHRcIixcblx0XHRcInBsYWludGV4dFwiOiBcIlBsYWluIHRleHRcIixcblx0XHRcInRleHRcIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJ0eHRcIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJodG1sXCI6IFwiSFRNTFwiLFxuXHRcdFwieG1sXCI6IFwiWE1MXCIsXG5cdFx0XCJzdmdcIjogXCJTVkdcIixcblx0XHRcIm1hdGhtbFwiOiBcIk1hdGhNTFwiLFxuXHRcdFwic3NtbFwiOiBcIlNTTUxcIixcblx0XHRcInJzc1wiOiBcIlJTU1wiLFxuXHRcdFwiY3NzXCI6IFwiQ1NTXCIsXG5cdFx0XCJjbGlrZVwiOiBcIkMtbGlrZVwiLFxuXHRcdFwianNcIjogXCJKYXZhU2NyaXB0XCIsXG5cdFx0XCJhYmFwXCI6IFwiQUJBUFwiLFxuXHRcdFwiYWJuZlwiOiBcIkFCTkZcIixcblx0XHRcImFsXCI6IFwiQUxcIixcblx0XHRcImFudGxyNFwiOiBcIkFOVExSNFwiLFxuXHRcdFwiZzRcIjogXCJBTlRMUjRcIixcblx0XHRcImFwYWNoZWNvbmZcIjogXCJBcGFjaGUgQ29uZmlndXJhdGlvblwiLFxuXHRcdFwiYXBsXCI6IFwiQVBMXCIsXG5cdFx0XCJhcWxcIjogXCJBUUxcIixcblx0XHRcImFyZmZcIjogXCJBUkZGXCIsXG5cdFx0XCJhc2NpaWRvY1wiOiBcIkFzY2lpRG9jXCIsXG5cdFx0XCJhZG9jXCI6IFwiQXNjaWlEb2NcIixcblx0XHRcImFzcG5ldFwiOiBcIkFTUC5ORVQgKEMjKVwiLFxuXHRcdFwiYXNtNjUwMlwiOiBcIjY1MDIgQXNzZW1ibHlcIixcblx0XHRcImF1dG9ob3RrZXlcIjogXCJBdXRvSG90a2V5XCIsXG5cdFx0XCJhdXRvaXRcIjogXCJBdXRvSXRcIixcblx0XHRcImF2aXN5bnRoXCI6IFwiQXZpU3ludGhcIixcblx0XHRcImF2c1wiOiBcIkF2aVN5bnRoXCIsXG5cdFx0XCJhdnJvLWlkbFwiOiBcIkF2cm8gSURMXCIsXG5cdFx0XCJhdmRsXCI6IFwiQXZybyBJRExcIixcblx0XHRcImJhc2ljXCI6IFwiQkFTSUNcIixcblx0XHRcImJiY29kZVwiOiBcIkJCY29kZVwiLFxuXHRcdFwiYm5mXCI6IFwiQk5GXCIsXG5cdFx0XCJyYm5mXCI6IFwiUkJORlwiLFxuXHRcdFwiYnNsXCI6IFwiQlNMICgxQzpFbnRlcnByaXNlKVwiLFxuXHRcdFwib3NjcmlwdFwiOiBcIk9uZVNjcmlwdFwiLFxuXHRcdFwiY3NoYXJwXCI6IFwiQyNcIixcblx0XHRcImNzXCI6IFwiQyNcIixcblx0XHRcImRvdG5ldFwiOiBcIkMjXCIsXG5cdFx0XCJjcHBcIjogXCJDKytcIixcblx0XHRcImNmc2NyaXB0XCI6IFwiQ0ZTY3JpcHRcIixcblx0XHRcImNmY1wiOiBcIkNGU2NyaXB0XCIsXG5cdFx0XCJjaWxcIjogXCJDSUxcIixcblx0XHRcImNtYWtlXCI6IFwiQ01ha2VcIixcblx0XHRcImNvYm9sXCI6IFwiQ09CT0xcIixcblx0XHRcImNvZmZlZVwiOiBcIkNvZmZlZVNjcmlwdFwiLFxuXHRcdFwiY29uY1wiOiBcIkNvbmN1cm5hc1wiLFxuXHRcdFwiY3NwXCI6IFwiQ29udGVudC1TZWN1cml0eS1Qb2xpY3lcIixcblx0XHRcImNzcy1leHRyYXNcIjogXCJDU1MgRXh0cmFzXCIsXG5cdFx0XCJjc3ZcIjogXCJDU1ZcIixcblx0XHRcImRhdGF3ZWF2ZVwiOiBcIkRhdGFXZWF2ZVwiLFxuXHRcdFwiZGF4XCI6IFwiREFYXCIsXG5cdFx0XCJkamFuZ29cIjogXCJEamFuZ28vSmluamEyXCIsXG5cdFx0XCJqaW5qYTJcIjogXCJEamFuZ28vSmluamEyXCIsXG5cdFx0XCJkbnMtem9uZS1maWxlXCI6IFwiRE5TIHpvbmUgZmlsZVwiLFxuXHRcdFwiZG5zLXpvbmVcIjogXCJETlMgem9uZSBmaWxlXCIsXG5cdFx0XCJkb2NrZXJmaWxlXCI6IFwiRG9ja2VyXCIsXG5cdFx0XCJkb3RcIjogXCJET1QgKEdyYXBodml6KVwiLFxuXHRcdFwiZ3ZcIjogXCJET1QgKEdyYXBodml6KVwiLFxuXHRcdFwiZWJuZlwiOiBcIkVCTkZcIixcblx0XHRcImVkaXRvcmNvbmZpZ1wiOiBcIkVkaXRvckNvbmZpZ1wiLFxuXHRcdFwiZWpzXCI6IFwiRUpTXCIsXG5cdFx0XCJldGx1YVwiOiBcIkVtYmVkZGVkIEx1YSB0ZW1wbGF0aW5nXCIsXG5cdFx0XCJlcmJcIjogXCJFUkJcIixcblx0XHRcImV4Y2VsLWZvcm11bGFcIjogXCJFeGNlbCBGb3JtdWxhXCIsXG5cdFx0XCJ4bHN4XCI6IFwiRXhjZWwgRm9ybXVsYVwiLFxuXHRcdFwieGxzXCI6IFwiRXhjZWwgRm9ybXVsYVwiLFxuXHRcdFwiZnNoYXJwXCI6IFwiRiNcIixcblx0XHRcImZpcmVzdG9yZS1zZWN1cml0eS1ydWxlc1wiOiBcIkZpcmVzdG9yZSBzZWN1cml0eSBydWxlc1wiLFxuXHRcdFwiZnRsXCI6IFwiRnJlZU1hcmtlciBUZW1wbGF0ZSBMYW5ndWFnZVwiLFxuXHRcdFwiZ21sXCI6IFwiR2FtZU1ha2VyIExhbmd1YWdlXCIsXG5cdFx0XCJnYW1lbWFrZXJsYW5ndWFnZVwiOiBcIkdhbWVNYWtlciBMYW5ndWFnZVwiLFxuXHRcdFwiZ2FwXCI6IFwiR0FQIChDQVMpXCIsXG5cdFx0XCJnY29kZVwiOiBcIkctY29kZVwiLFxuXHRcdFwiZ2RzY3JpcHRcIjogXCJHRFNjcmlwdFwiLFxuXHRcdFwiZ2VkY29tXCI6IFwiR0VEQ09NXCIsXG5cdFx0XCJnbHNsXCI6IFwiR0xTTFwiLFxuXHRcdFwiZ25cIjogXCJHTlwiLFxuXHRcdFwiZ25pXCI6IFwiR05cIixcblx0XHRcImdyYXBocWxcIjogXCJHcmFwaFFMXCIsXG5cdFx0XCJoYnNcIjogXCJIYW5kbGViYXJzXCIsXG5cdFx0XCJoc1wiOiBcIkhhc2tlbGxcIixcblx0XHRcImhjbFwiOiBcIkhDTFwiLFxuXHRcdFwiaGxzbFwiOiBcIkhMU0xcIixcblx0XHRcImh0dHBcIjogXCJIVFRQXCIsXG5cdFx0XCJocGtwXCI6IFwiSFRUUCBQdWJsaWMtS2V5LVBpbnNcIixcblx0XHRcImhzdHNcIjogXCJIVFRQIFN0cmljdC1UcmFuc3BvcnQtU2VjdXJpdHlcIixcblx0XHRcImljaGlnb2phbVwiOiBcIkljaGlnb0phbVwiLFxuXHRcdFwiaWN1LW1lc3NhZ2UtZm9ybWF0XCI6IFwiSUNVIE1lc3NhZ2UgRm9ybWF0XCIsXG5cdFx0XCJpZHJcIjogXCJJZHJpc1wiLFxuXHRcdFwiaWdub3JlXCI6IFwiLmlnbm9yZVwiLFxuXHRcdFwiZ2l0aWdub3JlXCI6IFwiLmdpdGlnbm9yZVwiLFxuXHRcdFwiaGdpZ25vcmVcIjogXCIuaGdpZ25vcmVcIixcblx0XHRcIm5wbWlnbm9yZVwiOiBcIi5ucG1pZ25vcmVcIixcblx0XHRcImluZm9ybTdcIjogXCJJbmZvcm0gN1wiLFxuXHRcdFwiamF2YWRvY1wiOiBcIkphdmFEb2NcIixcblx0XHRcImphdmFkb2NsaWtlXCI6IFwiSmF2YURvYy1saWtlXCIsXG5cdFx0XCJqYXZhc3RhY2t0cmFjZVwiOiBcIkphdmEgc3RhY2sgdHJhY2VcIixcblx0XHRcImpxXCI6IFwiSlFcIixcblx0XHRcImpzZG9jXCI6IFwiSlNEb2NcIixcblx0XHRcImpzLWV4dHJhc1wiOiBcIkpTIEV4dHJhc1wiLFxuXHRcdFwianNvblwiOiBcIkpTT05cIixcblx0XHRcIndlYm1hbmlmZXN0XCI6IFwiV2ViIEFwcCBNYW5pZmVzdFwiLFxuXHRcdFwianNvbjVcIjogXCJKU09ONVwiLFxuXHRcdFwianNvbnBcIjogXCJKU09OUFwiLFxuXHRcdFwianNzdGFja3RyYWNlXCI6IFwiSlMgc3RhY2sgdHJhY2VcIixcblx0XHRcImpzLXRlbXBsYXRlc1wiOiBcIkpTIFRlbXBsYXRlc1wiLFxuXHRcdFwia3RzXCI6IFwiS290bGluIFNjcmlwdFwiLFxuXHRcdFwia3RcIjogXCJLb3RsaW5cIixcblx0XHRcImt1bWlyXCI6IFwiS3VNaXIgKNCa0YPQnNC40YApXCIsXG5cdFx0XCJrdW1cIjogXCJLdU1pciAo0JrRg9Cc0LjRgClcIixcblx0XHRcImxhdGV4XCI6IFwiTGFUZVhcIixcblx0XHRcInRleFwiOiBcIlRlWFwiLFxuXHRcdFwiY29udGV4dFwiOiBcIkNvblRlWHRcIixcblx0XHRcImxpbHlwb25kXCI6IFwiTGlseVBvbmRcIixcblx0XHRcImx5XCI6IFwiTGlseVBvbmRcIixcblx0XHRcImVtYWNzXCI6IFwiTGlzcFwiLFxuXHRcdFwiZWxpc3BcIjogXCJMaXNwXCIsXG5cdFx0XCJlbWFjcy1saXNwXCI6IFwiTGlzcFwiLFxuXHRcdFwibGx2bVwiOiBcIkxMVk0gSVJcIixcblx0XHRcImxvZ1wiOiBcIkxvZyBmaWxlXCIsXG5cdFx0XCJsb2xjb2RlXCI6IFwiTE9MQ09ERVwiLFxuXHRcdFwibWFnbWFcIjogXCJNYWdtYSAoQ0FTKVwiLFxuXHRcdFwibWRcIjogXCJNYXJrZG93blwiLFxuXHRcdFwibWFya3VwLXRlbXBsYXRpbmdcIjogXCJNYXJrdXAgdGVtcGxhdGluZ1wiLFxuXHRcdFwibWF0bGFiXCI6IFwiTUFUTEFCXCIsXG5cdFx0XCJtYXhzY3JpcHRcIjogXCJNQVhTY3JpcHRcIixcblx0XHRcIm1lbFwiOiBcIk1FTFwiLFxuXHRcdFwibW9uZ29kYlwiOiBcIk1vbmdvREJcIixcblx0XHRcIm1vb25cIjogXCJNb29uU2NyaXB0XCIsXG5cdFx0XCJuMXFsXCI6IFwiTjFRTFwiLFxuXHRcdFwibjRqc1wiOiBcIk40SlNcIixcblx0XHRcIm40anNkXCI6IFwiTjRKU1wiLFxuXHRcdFwibmFuZDJ0ZXRyaXMtaGRsXCI6IFwiTmFuZCBUbyBUZXRyaXMgSERMXCIsXG5cdFx0XCJuYW5pc2NyaXB0XCI6IFwiTmFuaW5vdmVsIFNjcmlwdFwiLFxuXHRcdFwibmFuaVwiOiBcIk5hbmlub3ZlbCBTY3JpcHRcIixcblx0XHRcIm5hc21cIjogXCJOQVNNXCIsXG5cdFx0XCJuZW9uXCI6IFwiTkVPTlwiLFxuXHRcdFwibmdpbnhcIjogXCJuZ2lueFwiLFxuXHRcdFwibnNpc1wiOiBcIk5TSVNcIixcblx0XHRcIm9iamVjdGl2ZWNcIjogXCJPYmplY3RpdmUtQ1wiLFxuXHRcdFwib2JqY1wiOiBcIk9iamVjdGl2ZS1DXCIsXG5cdFx0XCJvY2FtbFwiOiBcIk9DYW1sXCIsXG5cdFx0XCJvcGVuY2xcIjogXCJPcGVuQ0xcIixcblx0XHRcIm9wZW5xYXNtXCI6IFwiT3BlblFhc21cIixcblx0XHRcInFhc21cIjogXCJPcGVuUWFzbVwiLFxuXHRcdFwicGFyaWdwXCI6IFwiUEFSSS9HUFwiLFxuXHRcdFwib2JqZWN0cGFzY2FsXCI6IFwiT2JqZWN0IFBhc2NhbFwiLFxuXHRcdFwicHNsXCI6IFwiUEFUUk9MIFNjcmlwdGluZyBMYW5ndWFnZVwiLFxuXHRcdFwicGNheGlzXCI6IFwiUEMtQXhpc1wiLFxuXHRcdFwicHhcIjogXCJQQy1BeGlzXCIsXG5cdFx0XCJwZW9wbGVjb2RlXCI6IFwiUGVvcGxlQ29kZVwiLFxuXHRcdFwicGNvZGVcIjogXCJQZW9wbGVDb2RlXCIsXG5cdFx0XCJwaHBcIjogXCJQSFBcIixcblx0XHRcInBocGRvY1wiOiBcIlBIUERvY1wiLFxuXHRcdFwicGhwLWV4dHJhc1wiOiBcIlBIUCBFeHRyYXNcIixcblx0XHRcInBsc3FsXCI6IFwiUEwvU1FMXCIsXG5cdFx0XCJwb3dlcnF1ZXJ5XCI6IFwiUG93ZXJRdWVyeVwiLFxuXHRcdFwicHFcIjogXCJQb3dlclF1ZXJ5XCIsXG5cdFx0XCJtc2NyaXB0XCI6IFwiUG93ZXJRdWVyeVwiLFxuXHRcdFwicG93ZXJzaGVsbFwiOiBcIlBvd2VyU2hlbGxcIixcblx0XHRcInByb21xbFwiOiBcIlByb21RTFwiLFxuXHRcdFwicHJvcGVydGllc1wiOiBcIi5wcm9wZXJ0aWVzXCIsXG5cdFx0XCJwcm90b2J1ZlwiOiBcIlByb3RvY29sIEJ1ZmZlcnNcIixcblx0XHRcInB1cmViYXNpY1wiOiBcIlB1cmVCYXNpY1wiLFxuXHRcdFwicGJmYXNtXCI6IFwiUHVyZUJhc2ljXCIsXG5cdFx0XCJwdXJzXCI6IFwiUHVyZVNjcmlwdFwiLFxuXHRcdFwicHlcIjogXCJQeXRob25cIixcblx0XHRcInFzaGFycFwiOiBcIlEjXCIsXG5cdFx0XCJxc1wiOiBcIlEjXCIsXG5cdFx0XCJxXCI6IFwiUSAoa2RiKyBkYXRhYmFzZSlcIixcblx0XHRcInFtbFwiOiBcIlFNTFwiLFxuXHRcdFwicmt0XCI6IFwiUmFja2V0XCIsXG5cdFx0XCJjc2h0bWxcIjogXCJSYXpvciBDI1wiLFxuXHRcdFwicmF6b3JcIjogXCJSYXpvciBDI1wiLFxuXHRcdFwianN4XCI6IFwiUmVhY3QgSlNYXCIsXG5cdFx0XCJ0c3hcIjogXCJSZWFjdCBUU1hcIixcblx0XHRcInJlbnB5XCI6IFwiUmVuJ3B5XCIsXG5cdFx0XCJycHlcIjogXCJSZW4ncHlcIixcblx0XHRcInJlc3RcIjogXCJyZVNUIChyZVN0cnVjdHVyZWRUZXh0KVwiLFxuXHRcdFwicm9ib3RmcmFtZXdvcmtcIjogXCJSb2JvdCBGcmFtZXdvcmtcIixcblx0XHRcInJvYm90XCI6IFwiUm9ib3QgRnJhbWV3b3JrXCIsXG5cdFx0XCJyYlwiOiBcIlJ1YnlcIixcblx0XHRcInNhc1wiOiBcIlNBU1wiLFxuXHRcdFwic2Fzc1wiOiBcIlNhc3MgKFNhc3MpXCIsXG5cdFx0XCJzY3NzXCI6IFwiU2FzcyAoU2NzcylcIixcblx0XHRcInNoZWxsLXNlc3Npb25cIjogXCJTaGVsbCBzZXNzaW9uXCIsXG5cdFx0XCJzaC1zZXNzaW9uXCI6IFwiU2hlbGwgc2Vzc2lvblwiLFxuXHRcdFwic2hlbGxzZXNzaW9uXCI6IFwiU2hlbGwgc2Vzc2lvblwiLFxuXHRcdFwic21sXCI6IFwiU01MXCIsXG5cdFx0XCJzbWxualwiOiBcIlNNTC9OSlwiLFxuXHRcdFwic29saWRpdHlcIjogXCJTb2xpZGl0eSAoRXRoZXJldW0pXCIsXG5cdFx0XCJzb2xcIjogXCJTb2xpZGl0eSAoRXRoZXJldW0pXCIsXG5cdFx0XCJzb2x1dGlvbi1maWxlXCI6IFwiU29sdXRpb24gZmlsZVwiLFxuXHRcdFwic2xuXCI6IFwiU29sdXRpb24gZmlsZVwiLFxuXHRcdFwic295XCI6IFwiU295IChDbG9zdXJlIFRlbXBsYXRlKVwiLFxuXHRcdFwic3BhcnFsXCI6IFwiU1BBUlFMXCIsXG5cdFx0XCJycVwiOiBcIlNQQVJRTFwiLFxuXHRcdFwic3BsdW5rLXNwbFwiOiBcIlNwbHVuayBTUExcIixcblx0XHRcInNxZlwiOiBcIlNRRjogU3RhdHVzIFF1byBGdW5jdGlvbiAoQXJtYSAzKVwiLFxuXHRcdFwic3FsXCI6IFwiU1FMXCIsXG5cdFx0XCJpZWNzdFwiOiBcIlN0cnVjdHVyZWQgVGV4dCAoSUVDIDYxMTMxLTMpXCIsXG5cdFx0XCJzeXN0ZW1kXCI6IFwiU3lzdGVtZCBjb25maWd1cmF0aW9uIGZpbGVcIixcblx0XHRcInQ0LXRlbXBsYXRpbmdcIjogXCJUNCB0ZW1wbGF0aW5nXCIsXG5cdFx0XCJ0NC1jc1wiOiBcIlQ0IFRleHQgVGVtcGxhdGVzIChDIylcIixcblx0XHRcInQ0XCI6IFwiVDQgVGV4dCBUZW1wbGF0ZXMgKEMjKVwiLFxuXHRcdFwidDQtdmJcIjogXCJUNCBUZXh0IFRlbXBsYXRlcyAoVkIpXCIsXG5cdFx0XCJ0YXBcIjogXCJUQVBcIixcblx0XHRcInR0MlwiOiBcIlRlbXBsYXRlIFRvb2xraXQgMlwiLFxuXHRcdFwidG9tbFwiOiBcIlRPTUxcIixcblx0XHRcInRyaWdcIjogXCJUcmlHXCIsXG5cdFx0XCJ0c1wiOiBcIlR5cGVTY3JpcHRcIixcblx0XHRcInRzY29uZmlnXCI6IFwiVFNDb25maWdcIixcblx0XHRcInVzY3JpcHRcIjogXCJVbnJlYWxTY3JpcHRcIixcblx0XHRcInVjXCI6IFwiVW5yZWFsU2NyaXB0XCIsXG5cdFx0XCJ1cmlcIjogXCJVUklcIixcblx0XHRcInVybFwiOiBcIlVSTFwiLFxuXHRcdFwidmJuZXRcIjogXCJWQi5OZXRcIixcblx0XHRcInZoZGxcIjogXCJWSERMXCIsXG5cdFx0XCJ2aW1cIjogXCJ2aW1cIixcblx0XHRcInZpc3VhbC1iYXNpY1wiOiBcIlZpc3VhbCBCYXNpY1wiLFxuXHRcdFwidmJhXCI6IFwiVkJBXCIsXG5cdFx0XCJ2YlwiOiBcIlZpc3VhbCBCYXNpY1wiLFxuXHRcdFwid2FzbVwiOiBcIldlYkFzc2VtYmx5XCIsXG5cdFx0XCJ3aWtpXCI6IFwiV2lraSBtYXJrdXBcIixcblx0XHRcIndvbGZyYW1cIjogXCJXb2xmcmFtIGxhbmd1YWdlXCIsXG5cdFx0XCJuYlwiOiBcIk1hdGhlbWF0aWNhIE5vdGVib29rXCIsXG5cdFx0XCJ3bFwiOiBcIldvbGZyYW0gbGFuZ3VhZ2VcIixcblx0XHRcInhlb3JhY3ViZVwiOiBcIlhlb3JhQ3ViZVwiLFxuXHRcdFwieG1sLWRvY1wiOiBcIlhNTCBkb2MgKC5uZXQpXCIsXG5cdFx0XCJ4b2pvXCI6IFwiWG9qbyAoUkVBTGJhc2ljKVwiLFxuXHRcdFwieHF1ZXJ5XCI6IFwiWFF1ZXJ5XCIsXG5cdFx0XCJ5YW1sXCI6IFwiWUFNTFwiLFxuXHRcdFwieW1sXCI6IFwiWUFNTFwiLFxuXHRcdFwieWFuZ1wiOiBcIllBTkdcIlxuXHR9LypdKi87XG5cblx0LyogZXNsaW50LWVuYWJsZSAqL1xuXG5cdFByaXNtLnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbignc2hvdy1sYW5ndWFnZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgcHJlID0gZW52LmVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHRpZiAoIXByZSB8fCAhL3ByZS9pLnRlc3QocHJlLm5vZGVOYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFRyaWVzIHRvIGd1ZXNzIHRoZSBuYW1lIG9mIGEgbGFuZ3VhZ2UgZ2l2ZW4gaXRzIGlkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBsYW5ndWFnZSBpZC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGd1ZXNzVGl0bGUoaWQpIHtcblx0XHRcdGlmICghaWQpIHtcblx0XHRcdFx0cmV0dXJuIGlkO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChpZC5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIGlkLnN1YnN0cmluZygxKSkucmVwbGFjZSgvcyg/PWNyaXB0KS8sICdTJyk7XG5cdFx0fVxuXG5cdFx0dmFyIGxhbmd1YWdlID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1sYW5ndWFnZScpIHx8IExhbmd1YWdlc1tlbnYubGFuZ3VhZ2VdIHx8IGd1ZXNzVGl0bGUoZW52Lmxhbmd1YWdlKTtcblxuXHRcdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IGxhbmd1YWdlO1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH0pO1xuXG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHR2YXIgbWFwID0ge307XG5cdHZhciBub29wID0gZnVuY3Rpb24gKCkge307XG5cblx0UHJpc20ucGx1Z2lucy50b29sYmFyID0ge307XG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIEJ1dHRvbk9wdGlvbnNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHRleHQgVGhlIHRleHQgZGlzcGxheWVkLlxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gW3VybF0gVGhlIFVSTCBvZiB0aGUgbGluayB3aGljaCB3aWxsIGJlIGNyZWF0ZWQuXG5cdCAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IFtvbkNsaWNrXSBUaGUgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBgY2xpY2tgIGV2ZW50IG9mIHRoZSBjcmVhdGVkIGJ1dHRvbi5cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFtjbGFzc05hbWVdIFRoZSBjbGFzcyBhdHRyaWJ1dGUgdG8gaW5jbHVkZSB3aXRoIGVsZW1lbnQuXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGJ1dHRvbiBjYWxsYmFjayB3aXRoIHRoZSB0b29sYmFyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCAqIEBwYXJhbSB7QnV0dG9uT3B0aW9uc3xGdW5jdGlvbn0gb3B0c1xuXHQgKi9cblx0dmFyIHJlZ2lzdGVyQnV0dG9uID0gUHJpc20ucGx1Z2lucy50b29sYmFyLnJlZ2lzdGVyQnV0dG9uID0gZnVuY3Rpb24gKGtleSwgb3B0cykge1xuXHRcdHZhciBjYWxsYmFjaztcblxuXHRcdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y2FsbGJhY2sgPSBvcHRzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uIChlbnYpIHtcblx0XHRcdFx0dmFyIGVsZW1lbnQ7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBvcHRzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRcdFx0ZWxlbWVudC50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdG9wdHMub25DbGljay5jYWxsKHRoaXMsIGVudik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9wdHMudXJsID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdFx0ZWxlbWVudC5ocmVmID0gb3B0cy51cmw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChvcHRzLmNsYXNzTmFtZSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcHRzLmNsYXNzTmFtZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gb3B0cy50ZXh0O1xuXG5cdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAoa2V5IGluIG1hcCkge1xuXHRcdFx0Y29uc29sZS53YXJuKCdUaGVyZSBpcyBhIGJ1dHRvbiB3aXRoIHRoZSBrZXkgXCInICsga2V5ICsgJ1wiIHJlZ2lzdGVyZWQgYWxyZWFkeS4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjYWxsYmFja3MucHVzaChtYXBba2V5XSA9IGNhbGxiYWNrKTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgY2FsbGJhY2sgb3JkZXIgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZ1tdIHwgdW5kZWZpbmVkfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0T3JkZXIoZWxlbWVudCkge1xuXHRcdHdoaWxlIChlbGVtZW50KSB7XG5cdFx0XHR2YXIgb3JkZXIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10b29sYmFyLW9yZGVyJyk7XG5cdFx0XHRpZiAob3JkZXIgIT0gbnVsbCkge1xuXHRcdFx0XHRvcmRlciA9IG9yZGVyLnRyaW0oKTtcblx0XHRcdFx0aWYgKG9yZGVyLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBvcmRlci5zcGxpdCgvXFxzKixcXHMqL2cpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUG9zdC1oaWdobGlnaHQgUHJpc20gaG9vayBjYWxsYmFjay5cblx0ICpcblx0ICogQHBhcmFtIGVudlxuXHQgKi9cblx0dmFyIGhvb2sgPSBQcmlzbS5wbHVnaW5zLnRvb2xiYXIuaG9vayA9IGZ1bmN0aW9uIChlbnYpIHtcblx0XHQvLyBDaGVjayBpZiBpbmxpbmUgb3IgYWN0dWFsIGNvZGUgYmxvY2sgKGNyZWRpdCB0byBsaW5lLW51bWJlcnMgcGx1Z2luKVxuXHRcdHZhciBwcmUgPSBlbnYuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQXV0b2xvYWRlciByZWhpZ2hsaWdodHMsIHNvIG9ubHkgZG8gdGhpcyBvbmNlLlxuXHRcdGlmIChwcmUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvZGUtdG9vbGJhcicpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIHdyYXBwZXIgZm9yIDxwcmU+IHRvIHByZXZlbnQgc2Nyb2xsaW5nIHRvb2xiYXIgd2l0aCBjb250ZW50XG5cdFx0dmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvZGUtdG9vbGJhcicpO1xuXHRcdHByZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBwcmUpO1xuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJlKTtcblxuXHRcdC8vIFNldHVwIHRoZSB0b29sYmFyXG5cdFx0dmFyIHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0b29sYmFyLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXInKTtcblxuXHRcdC8vIG9yZGVyIGNhbGxiYWNrc1xuXHRcdHZhciBlbGVtZW50Q2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuXHRcdHZhciBvcmRlciA9IGdldE9yZGVyKGVudi5lbGVtZW50KTtcblx0XHRpZiAob3JkZXIpIHtcblx0XHRcdGVsZW1lbnRDYWxsYmFja3MgPSBvcmRlci5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRyZXR1cm4gbWFwW2tleV0gfHwgbm9vcDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGVsZW1lbnRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBlbGVtZW50ID0gY2FsbGJhY2soZW52KTtcblxuXHRcdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgndG9vbGJhci1pdGVtJyk7XG5cblx0XHRcdGl0ZW0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHR0b29sYmFyLmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQWRkIG91ciB0b29sYmFyIHRvIHRoZSBjdXJyZW50bHkgY3JlYXRlZCB3cmFwcGVyIG9mIDxwcmU+IHRhZ1xuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQodG9vbGJhcik7XG5cdH07XG5cblx0cmVnaXN0ZXJCdXR0b24oJ2xhYmVsJywgZnVuY3Rpb24gKGVudikge1xuXHRcdHZhciBwcmUgPSBlbnYuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLWxhYmVsJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZWxlbWVudDsgdmFyIHRlbXBsYXRlO1xuXHRcdHZhciB0ZXh0ID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbCcpO1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBBbnkgbm9ybWFsIHRleHQgd2lsbCBibG93IHVwIHRoaXMgc2VsZWN0b3IuXG5cdFx0XHR0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlIycgKyB0ZXh0KTtcblx0XHR9IGNhdGNoIChlKSB7IC8qIG5vb3AgKi8gfVxuXG5cdFx0aWYgKHRlbXBsYXRlKSB7XG5cdFx0XHRlbGVtZW50ID0gdGVtcGxhdGUuY29udGVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdXJsJykpIHtcblx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0ZWxlbWVudC5ocmVmID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9KTtcblxuXHQvKipcblx0ICogUmVnaXN0ZXIgdGhlIHRvb2xiYXIgd2l0aCBQcmlzbS5cblx0ICovXG5cdFByaXNtLmhvb2tzLmFkZCgnY29tcGxldGUnLCBob29rKTtcbn0oKSk7XG4iLCJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY29yZS5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBsaWI9XCJXZWJXb3JrZXJcIi8+XG5cbnZhciBfc2VsZiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0PyB3aW5kb3cgICAvLyBpZiBpbiBicm93c2VyXG5cdDogKFxuXHRcdCh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSlcblx0XHRcdD8gc2VsZiAvLyBpZiBpbiB3b3JrZXJcblx0XHRcdDoge30gICAvLyBpZiBpbiBub2RlIGpzXG5cdCk7XG5cbi8qKlxuICogUHJpc206IExpZ2h0d2VpZ2h0LCByb2J1c3QsIGVsZWdhbnQgc3ludGF4IGhpZ2hsaWdodGluZ1xuICpcbiAqIEBsaWNlbnNlIE1JVCA8aHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQ+XG4gKiBAYXV0aG9yIExlYSBWZXJvdSA8aHR0cHM6Ly9sZWEudmVyb3UubWU+XG4gKiBAbmFtZXNwYWNlXG4gKiBAcHVibGljXG4gKi9cbnZhciBQcmlzbSA9IChmdW5jdGlvbiAoX3NlbGYpIHtcblxuXHQvLyBQcml2YXRlIGhlbHBlciB2YXJzXG5cdHZhciBsYW5nID0gL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2k7XG5cdHZhciB1bmlxdWVJZCA9IDA7XG5cblx0Ly8gVGhlIGdyYW1tYXIgb2JqZWN0IGZvciBwbGFpbnRleHRcblx0dmFyIHBsYWluVGV4dEdyYW1tYXIgPSB7fTtcblxuXG5cdHZhciBfID0ge1xuXHRcdC8qKlxuXHRcdCAqIEJ5IGRlZmF1bHQsIFByaXNtIHdpbGwgYXR0ZW1wdCB0byBoaWdobGlnaHQgYWxsIGNvZGUgZWxlbWVudHMgKGJ5IGNhbGxpbmcge0BsaW5rIFByaXNtLmhpZ2hsaWdodEFsbH0pIG9uIHRoZVxuXHRcdCAqIGN1cnJlbnQgcGFnZSBhZnRlciB0aGUgcGFnZSBmaW5pc2hlZCBsb2FkaW5nLiBUaGlzIG1pZ2h0IGJlIGEgcHJvYmxlbSBpZiBlLmcuIHlvdSB3YW50ZWQgdG8gYXN5bmNocm9ub3VzbHkgbG9hZFxuXHRcdCAqIGFkZGl0aW9uYWwgbGFuZ3VhZ2VzIG9yIHBsdWdpbnMgeW91cnNlbGYuXG5cdFx0ICpcblx0XHQgKiBCeSBzZXR0aW5nIHRoaXMgdmFsdWUgdG8gYHRydWVgLCBQcmlzbSB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IGhpZ2hsaWdodCBhbGwgY29kZSBlbGVtZW50cyBvbiB0aGUgcGFnZS5cblx0XHQgKlxuXHRcdCAqIFlvdSBvYnZpb3VzbHkgaGF2ZSB0byBjaGFuZ2UgdGhpcyB2YWx1ZSBiZWZvcmUgdGhlIGF1dG9tYXRpYyBoaWdobGlnaHRpbmcgc3RhcnRlZC4gVG8gZG8gdGhpcywgeW91IGNhbiBhZGQgYW5cblx0XHQgKiBlbXB0eSBQcmlzbSBvYmplY3QgaW50byB0aGUgZ2xvYmFsIHNjb3BlIGJlZm9yZSBsb2FkaW5nIHRoZSBQcmlzbSBzY3JpcHQgbGlrZSB0aGlzOlxuXHRcdCAqXG5cdFx0ICogYGBganNcblx0XHQgKiB3aW5kb3cuUHJpc20gPSB3aW5kb3cuUHJpc20gfHwge307XG5cdFx0ICogUHJpc20ubWFudWFsID0gdHJ1ZTtcblx0XHQgKiAvLyBhZGQgYSBuZXcgPHNjcmlwdD4gdG8gbG9hZCBQcmlzbSdzIHNjcmlwdFxuXHRcdCAqIGBgYFxuXHRcdCAqXG5cdFx0ICogQGRlZmF1bHQgZmFsc2Vcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0bWFudWFsOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5tYW51YWwsXG5cdFx0ZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIsXG5cblx0XHQvKipcblx0XHQgKiBBIG5hbWVzcGFjZSBmb3IgdXRpbGl0eSBtZXRob2RzLlxuXHRcdCAqXG5cdFx0ICogQWxsIGZ1bmN0aW9uIGluIHRoaXMgbmFtZXNwYWNlIHRoYXQgYXJlIG5vdCBleHBsaWNpdGx5IG1hcmtlZCBhcyBfcHVibGljXyBhcmUgZm9yIF9faW50ZXJuYWwgdXNlIG9ubHlfXyBhbmQgbWF5XG5cdFx0ICogY2hhbmdlIG9yIGRpc2FwcGVhciBhdCBhbnkgdGltZS5cblx0XHQgKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKi9cblx0XHR1dGlsOiB7XG5cdFx0XHRlbmNvZGU6IGZ1bmN0aW9uIGVuY29kZSh0b2tlbnMpIHtcblx0XHRcdFx0aWYgKHRva2VucyBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBUb2tlbih0b2tlbnMudHlwZSwgZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRva2VucykpIHtcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW5zLm1hcChlbmNvZGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0b2tlbnMucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvXFx1MDBhMC9nLCAnICcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHR5cGUgb2YgdGhlIGdpdmVuIHZhbHVlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7YW55fSBvXG5cdFx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIHR5cGUobnVsbCkgICAgICA9PT0gJ051bGwnXG5cdFx0XHQgKiB0eXBlKHVuZGVmaW5lZCkgPT09ICdVbmRlZmluZWQnXG5cdFx0XHQgKiB0eXBlKDEyMykgICAgICAgPT09ICdOdW1iZXInXG5cdFx0XHQgKiB0eXBlKCdmb28nKSAgICAgPT09ICdTdHJpbmcnXG5cdFx0XHQgKiB0eXBlKHRydWUpICAgICAgPT09ICdCb29sZWFuJ1xuXHRcdFx0ICogdHlwZShbMSwgMl0pICAgID09PSAnQXJyYXknXG5cdFx0XHQgKiB0eXBlKHt9KSAgICAgICAgPT09ICdPYmplY3QnXG5cdFx0XHQgKiB0eXBlKFN0cmluZykgICAgPT09ICdGdW5jdGlvbidcblx0XHRcdCAqIHR5cGUoL2FiYysvKSAgICA9PT0gJ1JlZ0V4cCdcblx0XHRcdCAqL1xuXHRcdFx0dHlwZTogZnVuY3Rpb24gKG8pIHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgYSB1bmlxdWUgbnVtYmVyIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LiBMYXRlciBjYWxscyB3aWxsIHN0aWxsIHJldHVybiB0aGUgc2FtZSBudW1iZXIuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IG9ialxuXHRcdFx0ICogQHJldHVybnMge251bWJlcn1cblx0XHRcdCAqL1xuXHRcdFx0b2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdFx0aWYgKCFvYmpbJ19faWQnXSkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdfX2lkJywgeyB2YWx1ZTogKyt1bmlxdWVJZCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb2JqWydfX2lkJ107XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgYSBkZWVwIGNsb25lIG9mIHRoZSBnaXZlbiBvYmplY3QuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIG1haW4gaW50ZW5kZWQgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gY2xvbmUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtUfSBvXG5cdFx0XHQgKiBAcGFyYW0ge1JlY29yZDxudW1iZXIsIGFueT59IFt2aXNpdGVkXVxuXHRcdFx0ICogQHJldHVybnMge1R9XG5cdFx0XHQgKiBAdGVtcGxhdGUgVFxuXHRcdFx0ICovXG5cdFx0XHRjbG9uZTogZnVuY3Rpb24gZGVlcENsb25lKG8sIHZpc2l0ZWQpIHtcblx0XHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdFx0dmFyIGNsb25lOyB2YXIgaWQ7XG5cdFx0XHRcdHN3aXRjaCAoXy51dGlsLnR5cGUobykpIHtcblx0XHRcdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0XHRpZiAodmlzaXRlZFtpZF0pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2xvbmUgPSAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIGFueT59ICovICh7fSk7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xvbmVba2V5XSA9IGRlZXBDbG9uZShvW2tleV0sIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKGNsb25lKTtcblxuXHRcdFx0XHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2aXNpdGVkW2lkXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0XHQoLyoqIEB0eXBlIHtBcnJheX0gKi8oLyoqIEB0eXBlIHthbnl9ICovKG8pKSkuZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuXHRcdFx0XHRcdFx0XHRjbG9uZVtpXSA9IGRlZXBDbG9uZSh2LCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovIChjbG9uZSk7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB0aGUgUHJpc20gbGFuZ3VhZ2Ugb2YgdGhlIGdpdmVuIGVsZW1lbnQgc2V0IGJ5IGEgYGxhbmd1YWdlLXh4eHhgIG9yIGBsYW5nLXh4eHhgIGNsYXNzLlxuXHRcdFx0ICpcblx0XHRcdCAqIElmIG5vIGxhbmd1YWdlIGlzIHNldCBmb3IgdGhlIGVsZW1lbnQgb3IgdGhlIGVsZW1lbnQgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCBgbm9uZWAgd2lsbCBiZSByZXR1cm5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0XHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0XHQgKi9cblx0XHRcdGdldExhbmd1YWdlOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0XHR3aGlsZSAoZWxlbWVudCAmJiAhbGFuZy50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGVsZW1lbnQuY2xhc3NOYW1lLm1hdGNoKGxhbmcpIHx8IFssICdub25lJ10pWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICdub25lJztcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB0aGUgc2NyaXB0IGVsZW1lbnQgdGhhdCBpcyBjdXJyZW50bHkgZXhlY3V0aW5nLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgZG9lcyBfX25vdF9fIHdvcmsgZm9yIGxpbmUgc2NyaXB0IGVsZW1lbnQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHJldHVybnMge0hUTUxTY3JpcHRFbGVtZW50IHwgbnVsbH1cblx0XHRcdCAqL1xuXHRcdFx0Y3VycmVudFNjcmlwdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgnY3VycmVudFNjcmlwdCcgaW4gZG9jdW1lbnQgJiYgMSA8IDIgLyogaGFjayB0byB0cmlwIFRTJyBmbG93IGFuYWx5c2lzICovKSB7XG5cdFx0XHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJRTExIHdvcmthcm91bmRcblx0XHRcdFx0Ly8gd2UnbGwgZ2V0IHRoZSBzcmMgb2YgdGhlIGN1cnJlbnQgc2NyaXB0IGJ5IHBhcnNpbmcgSUUxMSdzIGVycm9yIHN0YWNrIHRyYWNlXG5cdFx0XHRcdC8vIHRoaXMgd2lsbCBub3Qgd29yayBmb3IgaW5saW5lIHNjcmlwdHNcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHQvLyBHZXQgZmlsZSBzcmMgdXJsIGZyb20gc3RhY2suIFNwZWNpZmljYWxseSB3b3JrcyB3aXRoIHRoZSBmb3JtYXQgb2Ygc3RhY2sgdHJhY2VzIGluIElFLlxuXHRcdFx0XHRcdC8vIEEgc3RhY2sgd2lsbCBsb29rIGxpa2UgdGhpczpcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIEVycm9yXG5cdFx0XHRcdFx0Ly8gICAgYXQgXy51dGlsLmN1cnJlbnRTY3JpcHQgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjExOTo1KVxuXHRcdFx0XHRcdC8vICAgIGF0IEdsb2JhbCBjb2RlIChodHRwOi8vbG9jYWxob3N0L2NvbXBvbmVudHMvcHJpc20tY29yZS5qczo2MDY6MSlcblxuXHRcdFx0XHRcdHZhciBzcmMgPSAoL2F0IFteKFxcclxcbl0qXFwoKC4qKTpbXjpdKzpbXjpdK1xcKSQvaS5leGVjKGVyci5zdGFjaykgfHwgW10pWzFdO1xuXHRcdFx0XHRcdGlmIChzcmMpIHtcblx0XHRcdFx0XHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiBzY3JpcHRzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChzY3JpcHRzW2ldLnNyYyA9PSBzcmMpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2NyaXB0c1tpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHdoZXRoZXIgYSBnaXZlbiBjbGFzcyBpcyBhY3RpdmUgZm9yIGBlbGVtZW50YC5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGUgY2xhc3MgY2FuIGJlIGFjdGl2YXRlZCBpZiBgZWxlbWVudGAgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBnaXZlbiBjbGFzcyBhbmQgaXQgY2FuIGJlIGRlYWN0aXZhdGVkXG5cdFx0XHQgKiBpZiBgZWxlbWVudGAgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIGdpdmVuIGNsYXNzLiBUaGUgX25lZ2F0ZWQgdmVyc2lvbl8gb2YgdGhlXG5cdFx0XHQgKiBnaXZlbiBjbGFzcyBpcyBqdXN0IHRoZSBnaXZlbiBjbGFzcyB3aXRoIGEgYG5vLWAgcHJlZml4LlxuXHRcdFx0ICpcblx0XHRcdCAqIFdoZXRoZXIgdGhlIGNsYXNzIGlzIGFjdGl2ZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBjbG9zZXN0IGFuY2VzdG9yIG9mIGBlbGVtZW50YCAod2hlcmUgYGVsZW1lbnRgIGl0c2VsZiBpc1xuXHRcdFx0ICogY2xvc2VzdCBhbmNlc3RvcikgdGhhdCBoYXMgdGhlIGdpdmVuIGNsYXNzIG9yIHRoZSBuZWdhdGVkIHZlcnNpb24gb2YgaXQuIElmIG5laXRoZXIgYGVsZW1lbnRgIG5vciBhbnkgb2YgaXRzXG5cdFx0XHQgKiBhbmNlc3RvcnMgaGF2ZSB0aGUgZ2l2ZW4gY2xhc3Mgb3IgdGhlIG5lZ2F0ZWQgdmVyc2lvbiBvZiBpdCwgdGhlbiB0aGUgZGVmYXVsdCBhY3RpdmF0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogSW4gdGhlIHBhcmFkb3hpY2FsIHNpdHVhdGlvbiB3aGVyZSB0aGUgY2xvc2VzdCBhbmNlc3RvciBjb250YWlucyBfX2JvdGhfXyB0aGUgZ2l2ZW4gY2xhc3MgYW5kIHRoZSBuZWdhdGVkXG5cdFx0XHQgKiB2ZXJzaW9uIG9mIGl0LCB0aGUgY2xhc3MgaXMgY29uc2lkZXJlZCBhY3RpdmUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWZhdWx0QWN0aXZhdGlvbj1mYWxzZV1cblx0XHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdFx0ICovXG5cdFx0XHRpc0FjdGl2ZTogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSwgZGVmYXVsdEFjdGl2YXRpb24pIHtcblx0XHRcdFx0dmFyIG5vID0gJ25vLScgKyBjbGFzc05hbWU7XG5cblx0XHRcdFx0d2hpbGUgKGVsZW1lbnQpIHtcblx0XHRcdFx0XHR2YXIgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG5cdFx0XHRcdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucyhubykpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gISFkZWZhdWx0QWN0aXZhdGlvbjtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVGhpcyBuYW1lc3BhY2UgY29udGFpbnMgYWxsIGN1cnJlbnRseSBsb2FkZWQgbGFuZ3VhZ2VzIGFuZCB0aGUgc29tZSBoZWxwZXIgZnVuY3Rpb25zIHRvIGNyZWF0ZSBhbmQgbW9kaWZ5IGxhbmd1YWdlcy5cblx0XHQgKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0bGFuZ3VhZ2VzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBncmFtbWFyIGZvciBwbGFpbiwgdW5mb3JtYXR0ZWQgdGV4dC5cblx0XHRcdCAqL1xuXHRcdFx0cGxhaW46IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHRwbGFpbnRleHQ6IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHR0ZXh0OiBwbGFpblRleHRHcmFtbWFyLFxuXHRcdFx0dHh0OiBwbGFpblRleHRHcmFtbWFyLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIGxhbmd1YWdlIHdpdGggdGhlIGdpdmVuIGlkIGFuZCBhcHBlbmRzIHRoZSBnaXZlbiB0b2tlbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgYSB0b2tlbiBpbiBgcmVkZWZgIGFsc28gYXBwZWFycyBpbiB0aGUgY29waWVkIGxhbmd1YWdlLCB0aGVuIHRoZSBleGlzdGluZyB0b2tlbiBpbiB0aGUgY29waWVkIGxhbmd1YWdlXG5cdFx0XHQgKiB3aWxsIGJlIG92ZXJ3cml0dGVuIGF0IGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBCZXN0IHByYWN0aWNlc1xuXHRcdFx0ICpcblx0XHRcdCAqIFNpbmNlIHRoZSBwb3NpdGlvbiBvZiBvdmVyd3JpdGluZyB0b2tlbnMgKHRva2VuIGluIGByZWRlZmAgdGhhdCBvdmVyd3JpdGUgdG9rZW5zIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2UpXG5cdFx0XHQgKiBkb2Vzbid0IG1hdHRlciwgdGhleSBjYW4gdGVjaG5pY2FsbHkgYmUgaW4gYW55IG9yZGVyLiBIb3dldmVyLCB0aGlzIGNhbiBiZSBjb25mdXNpbmcgdG8gb3RoZXJzIHRoYXQgdHJ5aW5nIHRvXG5cdFx0XHQgKiB1bmRlcnN0YW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9uIGJlY2F1c2UsIG5vcm1hbGx5LCB0aGUgb3JkZXIgb2YgdG9rZW5zIG1hdHRlcnMgaW4gUHJpc20gZ3JhbW1hcnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlcmVmb3JlLCBpdCBpcyBlbmNvdXJhZ2VkIHRvIG9yZGVyIG92ZXJ3cml0aW5nIHRva2VucyBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9ucyBvZiB0aGUgb3ZlcndyaXR0ZW4gdG9rZW5zLlxuXHRcdFx0ICogRnVydGhlcm1vcmUsIGFsbCBub24tb3ZlcndyaXRpbmcgdG9rZW5zIHNob3VsZCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIG92ZXJ3cml0aW5nIG9uZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgbGFuZ3VhZ2UgdG8gZXh0ZW5kLiBUaGlzIGhhcyB0byBiZSBhIGtleSBpbiBgUHJpc20ubGFuZ3VhZ2VzYC5cblx0XHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gcmVkZWYgVGhlIG5ldyB0b2tlbnMgdG8gYXBwZW5kLlxuXHRcdFx0ICogQHJldHVybnMge0dyYW1tYXJ9IFRoZSBuZXcgbGFuZ3VhZ2UgY3JlYXRlZC5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqIEBleGFtcGxlXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXNbJ2Nzcy13aXRoLWNvbG9ycyddID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY3NzJywge1xuXHRcdFx0ICogICAgIC8vIFByaXNtLmxhbmd1YWdlcy5jc3MgYWxyZWFkeSBoYXMgYSAnY29tbWVudCcgdG9rZW4sIHNvIHRoaXMgdG9rZW4gd2lsbCBvdmVyd3JpdGUgQ1NTJyAnY29tbWVudCcgdG9rZW5cblx0XHRcdCAqICAgICAvLyBhdCBpdHMgb3JpZ2luYWwgcG9zaXRpb25cblx0XHRcdCAqICAgICAnY29tbWVudCc6IHsgLi4uIH0sXG5cdFx0XHQgKiAgICAgLy8gQ1NTIGRvZXNuJ3QgaGF2ZSBhICdjb2xvcicgdG9rZW4sIHNvIHRoaXMgdG9rZW4gd2lsbCBiZSBhcHBlbmRlZFxuXHRcdFx0ICogICAgICdjb2xvcic6IC9cXGIoPzpyZWR8Z3JlZW58Ymx1ZSlcXGIvXG5cdFx0XHQgKiB9KTtcblx0XHRcdCAqL1xuXHRcdFx0ZXh0ZW5kOiBmdW5jdGlvbiAoaWQsIHJlZGVmKSB7XG5cdFx0XHRcdHZhciBsYW5nID0gXy51dGlsLmNsb25lKF8ubGFuZ3VhZ2VzW2lkXSk7XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHJlZGVmKSB7XG5cdFx0XHRcdFx0bGFuZ1trZXldID0gcmVkZWZba2V5XTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBsYW5nO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbnNlcnRzIHRva2VucyBfYmVmb3JlXyBhbm90aGVyIHRva2VuIGluIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBvciBhbnkgb3RoZXIgZ3JhbW1hci5cblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBVc2FnZVxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgaGVscGVyIG1ldGhvZCBtYWtlcyBpdCBlYXN5IHRvIG1vZGlmeSBleGlzdGluZyBsYW5ndWFnZXMuIEZvciBleGFtcGxlLCB0aGUgQ1NTIGxhbmd1YWdlIGRlZmluaXRpb25cblx0XHRcdCAqIG5vdCBvbmx5IGRlZmluZXMgQ1NTIGhpZ2hsaWdodGluZyBmb3IgQ1NTIGRvY3VtZW50cywgYnV0IGFsc28gbmVlZHMgdG8gZGVmaW5lIGhpZ2hsaWdodGluZyBmb3IgQ1NTIGVtYmVkZGVkXG5cdFx0XHQgKiBpbiBIVE1MIHRocm91Z2ggYDxzdHlsZT5gIGVsZW1lbnRzLiBUbyBkbyB0aGlzLCBpdCBuZWVkcyB0byBtb2RpZnkgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgIGFuZCBhZGQgdGhlXG5cdFx0XHQgKiBhcHByb3ByaWF0ZSB0b2tlbnMuIEhvd2V2ZXIsIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYCBpcyBhIHJlZ3VsYXIgSmF2YVNjcmlwdCBvYmplY3QgbGl0ZXJhbCwgc28gaWYgeW91IGRvXG5cdFx0XHQgKiB0aGlzOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMubWFya3VwLnN0eWxlID0ge1xuXHRcdFx0ICogICAgIC8vIHRva2VuXG5cdFx0XHQgKiB9O1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogdGhlbiB0aGUgYHN0eWxlYCB0b2tlbiB3aWxsIGJlIGFkZGVkIChhbmQgcHJvY2Vzc2VkKSBhdCB0aGUgZW5kLiBgaW5zZXJ0QmVmb3JlYCBhbGxvd3MgeW91IHRvIGluc2VydCB0b2tlbnNcblx0XHRcdCAqIGJlZm9yZSBleGlzdGluZyB0b2tlbnMuIEZvciB0aGUgQ1NTIGV4YW1wbGUgYWJvdmUsIHlvdSB3b3VsZCB1c2UgaXQgbGlrZSB0aGlzOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCB7XG5cdFx0XHQgKiAgICAgJ3N0eWxlJzoge1xuXHRcdFx0ICogICAgICAgICAvLyB0b2tlblxuXHRcdFx0ICogICAgIH1cblx0XHRcdCAqIH0pO1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogIyMgU3BlY2lhbCBjYXNlc1xuXHRcdFx0ICpcblx0XHRcdCAqIElmIHRoZSBncmFtbWFycyBvZiBgaW5zaWRlYCBhbmQgYGluc2VydGAgaGF2ZSB0b2tlbnMgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGUgdG9rZW5zIGluIGBpbnNpZGVgJ3MgZ3JhbW1hclxuXHRcdFx0ICogd2lsbCBiZSBpZ25vcmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIHVzZWQgdG8gaW5zZXJ0IHRva2VucyBhZnRlciBgYmVmb3JlYDpcblx0XHRcdCAqXG5cdFx0XHQgKiBgYGBqc1xuXHRcdFx0ICogUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NvbW1lbnQnLCB7XG5cdFx0XHQgKiAgICAgJ2NvbW1lbnQnOiBQcmlzbS5sYW5ndWFnZXMubWFya3VwLmNvbW1lbnQsXG5cdFx0XHQgKiAgICAgLy8gdG9rZW5zIGFmdGVyICdjb21tZW50J1xuXHRcdFx0ICogfSk7XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBMaW1pdGF0aW9uc1xuXHRcdFx0ICpcblx0XHRcdCAqIFRoZSBtYWluIHByb2JsZW0gYGluc2VydEJlZm9yZWAgaGFzIHRvIHNvbHZlIGlzIGl0ZXJhdGlvbiBvcmRlci4gU2luY2UgRVMyMDE1LCB0aGUgaXRlcmF0aW9uIG9yZGVyIGZvciBvYmplY3Rcblx0XHRcdCAqIHByb3BlcnRpZXMgaXMgZ3VhcmFudGVlZCB0byBiZSB0aGUgaW5zZXJ0aW9uIG9yZGVyIChleGNlcHQgZm9yIGludGVnZXIga2V5cykgYnV0IHNvbWUgYnJvd3NlcnMgYmVoYXZlXG5cdFx0XHQgKiBkaWZmZXJlbnRseSB3aGVuIGtleXMgYXJlIGRlbGV0ZWQgYW5kIHJlLWluc2VydGVkLiBTbyBgaW5zZXJ0QmVmb3JlYCBjYW4ndCBiZSBpbXBsZW1lbnRlZCBieSB0ZW1wb3JhcmlseVxuXHRcdFx0ICogZGVsZXRpbmcgcHJvcGVydGllcyB3aGljaCBpcyBuZWNlc3NhcnkgdG8gaW5zZXJ0IGF0IGFyYml0cmFyeSBwb3NpdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogVG8gc29sdmUgdGhpcyBwcm9ibGVtLCBgaW5zZXJ0QmVmb3JlYCBkb2Vzbid0IGFjdHVhbGx5IGluc2VydCB0aGUgZ2l2ZW4gdG9rZW5zIGludG8gdGhlIHRhcmdldCBvYmplY3QuXG5cdFx0XHQgKiBJbnN0ZWFkLCBpdCB3aWxsIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIHJlcGxhY2UgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCB0aGUgbmV3IG9uZS4gVGhpc1xuXHRcdFx0ICogY2FuIGJlIGRvbmUgd2l0aG91dCB0ZW1wb3JhcmlseSBkZWxldGluZyBwcm9wZXJ0aWVzLCBzbyB0aGUgaXRlcmF0aW9uIG9yZGVyIGlzIHdlbGwtZGVmaW5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBIb3dldmVyLCBvbmx5IHJlZmVyZW5jZXMgdGhhdCBjYW4gYmUgcmVhY2hlZCBmcm9tIGBQcmlzbS5sYW5ndWFnZXNgIG9yIGBpbnNlcnRgIHdpbGwgYmUgcmVwbGFjZWQuIEkuZS4gaWZcblx0XHRcdCAqIHlvdSBob2xkIHRoZSB0YXJnZXQgb2JqZWN0IGluIGEgdmFyaWFibGUsIHRoZW4gdGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZSB3aWxsIG5vdCBjaGFuZ2UuXG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIHZhciBvbGRNYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRcdFx0ICogdmFyIG5ld01hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjb21tZW50JywgeyAuLi4gfSk7XG5cdFx0XHQgKlxuXHRcdFx0ICogYXNzZXJ0KG9sZE1hcmt1cCAhPT0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCk7XG5cdFx0XHQgKiBhc3NlcnQobmV3TWFya3VwID09PSBQcmlzbS5sYW5ndWFnZXMubWFya3VwKTtcblx0XHRcdCAqIGBgYFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbnNpZGUgVGhlIHByb3BlcnR5IG9mIGByb290YCAoZS5nLiBhIGxhbmd1YWdlIGlkIGluIGBQcmlzbS5sYW5ndWFnZXNgKSB0aGF0IGNvbnRhaW5zIHRoZVxuXHRcdFx0ICogb2JqZWN0IHRvIGJlIG1vZGlmaWVkLlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGJlZm9yZSBUaGUga2V5IHRvIGluc2VydCBiZWZvcmUuXG5cdFx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGluc2VydCBBbiBvYmplY3QgY29udGFpbmluZyB0aGUga2V5LXZhbHVlIHBhaXJzIHRvIGJlIGluc2VydGVkLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBbcm9vdF0gVGhlIG9iamVjdCBjb250YWluaW5nIGBpbnNpZGVgLCBpLmUuIHRoZSBvYmplY3QgdGhhdCBjb250YWlucyB0aGVcblx0XHRcdCAqIG9iamVjdCB0byBiZSBtb2RpZmllZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBEZWZhdWx0cyB0byBgUHJpc20ubGFuZ3VhZ2VzYC5cblx0XHRcdCAqIEByZXR1cm5zIHtHcmFtbWFyfSBUaGUgbmV3IGdyYW1tYXIgb2JqZWN0LlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICovXG5cdFx0XHRpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChpbnNpZGUsIGJlZm9yZSwgaW5zZXJ0LCByb290KSB7XG5cdFx0XHRcdHJvb3QgPSByb290IHx8IC8qKiBAdHlwZSB7YW55fSAqLyAoXy5sYW5ndWFnZXMpO1xuXHRcdFx0XHR2YXIgZ3JhbW1hciA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdFx0LyoqIEB0eXBlIHtHcmFtbWFyfSAqL1xuXHRcdFx0XHR2YXIgcmV0ID0ge307XG5cblx0XHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0XHRcdGlmIChncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXG5cdFx0XHRcdFx0XHRpZiAodG9rZW4gPT0gYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIG5ld1Rva2VuIGluIGluc2VydCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChpbnNlcnQuaGFzT3duUHJvcGVydHkobmV3VG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXRbbmV3VG9rZW5dID0gaW5zZXJ0W25ld1Rva2VuXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gRG8gbm90IGluc2VydCB0b2tlbiB3aGljaCBhbHNvIG9jY3VyIGluIGluc2VydC4gU2VlICMxNTI1XG5cdFx0XHRcdFx0XHRpZiAoIWluc2VydC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblx0XHRcdFx0XHRcdFx0cmV0W3Rva2VuXSA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBvbGQgPSByb290W2luc2lkZV07XG5cdFx0XHRcdHJvb3RbaW5zaWRlXSA9IHJldDtcblxuXHRcdFx0XHQvLyBVcGRhdGUgcmVmZXJlbmNlcyBpbiBvdGhlciBsYW5ndWFnZSBkZWZpbml0aW9uc1xuXHRcdFx0XHRfLmxhbmd1YWdlcy5ERlMoXy5sYW5ndWFnZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBvbGQgJiYga2V5ICE9IGluc2lkZSkge1xuXHRcdFx0XHRcdFx0dGhpc1trZXldID0gcmV0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFRyYXZlcnNlIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiB3aXRoIERlcHRoIEZpcnN0IFNlYXJjaFxuXHRcdFx0REZTOiBmdW5jdGlvbiBERlMobywgY2FsbGJhY2ssIHR5cGUsIHZpc2l0ZWQpIHtcblx0XHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdFx0dmFyIG9iaklkID0gXy51dGlsLm9iaklkO1xuXG5cdFx0XHRcdGZvciAodmFyIGkgaW4gbykge1xuXHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG8sIGksIG9baV0sIHR5cGUgfHwgaSk7XG5cblx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eSA9IG9baV07XG5cdFx0XHRcdFx0XHR2YXIgcHJvcGVydHlUeXBlID0gXy51dGlsLnR5cGUocHJvcGVydHkpO1xuXG5cdFx0XHRcdFx0XHRpZiAocHJvcGVydHlUeXBlID09PSAnT2JqZWN0JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIG51bGwsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9wZXJ0eVR5cGUgPT09ICdBcnJheScgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRERlMocHJvcGVydHksIGNhbGxiYWNrLCBpLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cGx1Z2luczoge30sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGlzIHRoZSBtb3N0IGhpZ2gtbGV2ZWwgZnVuY3Rpb24gaW4gUHJpc23igJlzIEFQSS5cblx0XHQgKiBJdCBmZXRjaGVzIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBoYXZlIGEgYC5sYW5ndWFnZS14eHh4YCBjbGFzcyBhbmQgdGhlbiBjYWxscyB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0RWxlbWVudH0gb25cblx0XHQgKiBlYWNoIG9uZSBvZiB0aGVtLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIGBQcmlzbS5oaWdobGlnaHRBbGxVbmRlcihkb2N1bWVudCwgYXN5bmMsIGNhbGxiYWNrKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gU2FtZSBhcyBpbiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXJ9LlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gU2FtZSBhcyBpbiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXJ9LlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRoaWdobGlnaHRBbGw6IGZ1bmN0aW9uIChhc3luYywgY2FsbGJhY2spIHtcblx0XHRcdF8uaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGFzeW5jLCBjYWxsYmFjayk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEZldGNoZXMgYWxsIHRoZSBkZXNjZW5kYW50cyBvZiBgY29udGFpbmVyYCB0aGF0IGhhdmUgYSBgLmxhbmd1YWdlLXh4eHhgIGNsYXNzIGFuZCB0aGVuIGNhbGxzXG5cdFx0ICoge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IG9uIGVhY2ggb25lIG9mIHRoZW0uXG5cdFx0ICpcblx0XHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHRcdCAqIDEuIGBiZWZvcmUtaGlnaGxpZ2h0YWxsYFxuXHRcdCAqIDIuIGBiZWZvcmUtYWxsLWVsZW1lbnRzLWhpZ2hsaWdodGBcblx0XHQgKiAzLiBBbGwgaG9va3Mgb2Yge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IGZvciBlYWNoIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGNvbnRhaW5lciBUaGUgcm9vdCBlbGVtZW50LCB3aG9zZSBkZXNjZW5kYW50cyB0aGF0IGhhdmUgYSBgLmxhbmd1YWdlLXh4eHhgIGNsYXNzIHdpbGwgYmUgaGlnaGxpZ2h0ZWQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbYXN5bmM9ZmFsc2VdIFdoZXRoZXIgZWFjaCBlbGVtZW50IGlzIHRvIGJlIGhpZ2hsaWdodGVkIGFzeW5jaHJvbm91c2x5IHVzaW5nIFdlYiBXb3JrZXJzLlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBlYWNoIGVsZW1lbnQgYWZ0ZXIgaXRzIGhpZ2hsaWdodGluZyBpcyBkb25lLlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRoaWdobGlnaHRBbGxVbmRlcjogZnVuY3Rpb24gKGNvbnRhaW5lciwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLFxuXHRcdFx0XHRzZWxlY3RvcjogJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ1xuXHRcdFx0fTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHRhbGwnLCBlbnYpO1xuXG5cdFx0XHRlbnYuZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZW52LmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGVudi5zZWxlY3RvcikpO1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWFsbC1lbGVtZW50cy1oaWdobGlnaHQnLCBlbnYpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgKGVsZW1lbnQgPSBlbnYuZWxlbWVudHNbaSsrXSk7KSB7XG5cdFx0XHRcdF8uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50LCBhc3luYyA9PT0gdHJ1ZSwgZW52LmNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSGlnaGxpZ2h0cyB0aGUgY29kZSBpbnNpZGUgYSBzaW5nbGUgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIFRoZSBmb2xsb3dpbmcgaG9va3Mgd2lsbCBiZSBydW46XG5cdFx0ICogMS4gYGJlZm9yZS1zYW5pdHktY2hlY2tgXG5cdFx0ICogMi4gYGJlZm9yZS1oaWdobGlnaHRgXG5cdFx0ICogMy4gQWxsIGhvb2tzIG9mIHtAbGluayBQcmlzbS5oaWdobGlnaHR9LiBUaGVzZSBob29rcyB3aWxsIGJlIHJ1biBieSBhbiBhc3luY2hyb25vdXMgd29ya2VyIGlmIGBhc3luY2AgaXMgYHRydWVgLlxuXHRcdCAqIDQuIGBiZWZvcmUtaW5zZXJ0YFxuXHRcdCAqIDUuIGBhZnRlci1oaWdobGlnaHRgXG5cdFx0ICogNi4gYGNvbXBsZXRlYFxuXHRcdCAqXG5cdFx0ICogU29tZSB0aGUgYWJvdmUgaG9va3Mgd2lsbCBiZSBza2lwcGVkIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgY29udGFpbiBhbnkgdGV4dCBvciB0aGVyZSBpcyBubyBncmFtbWFyIGxvYWRlZCBmb3Jcblx0XHQgKiB0aGUgZWxlbWVudCdzIGxhbmd1YWdlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGNvZGUuXG5cdFx0ICogSXQgbXVzdCBoYXZlIGEgY2xhc3Mgb2YgYGxhbmd1YWdlLXh4eHhgIHRvIGJlIHByb2Nlc3NlZCwgd2hlcmUgYHh4eHhgIGlzIGEgdmFsaWQgbGFuZ3VhZ2UgaWRlbnRpZmllci5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gV2hldGhlciB0aGUgZWxlbWVudCBpcyB0byBiZSBoaWdobGlnaHRlZCBhc3luY2hyb25vdXNseSB1c2luZyBXZWIgV29ya2Vyc1xuXHRcdCAqIHRvIGltcHJvdmUgcGVyZm9ybWFuY2UgYW5kIGF2b2lkIGJsb2NraW5nIHRoZSBVSSB3aGVuIGhpZ2hsaWdodGluZyB2ZXJ5IGxhcmdlIGNodW5rcyBvZiBjb2RlLiBUaGlzIG9wdGlvbiBpc1xuXHRcdCAqIFtkaXNhYmxlZCBieSBkZWZhdWx0XShodHRwczovL3ByaXNtanMuY29tL2ZhcS5odG1sI3doeS1pcy1hc3luY2hyb25vdXMtaGlnaGxpZ2h0aW5nLWRpc2FibGVkLWJ5LWRlZmF1bHQpLlxuXHRcdCAqXG5cdFx0ICogTm90ZTogQWxsIGxhbmd1YWdlIGRlZmluaXRpb25zIHJlcXVpcmVkIHRvIGhpZ2hsaWdodCB0aGUgY29kZSBtdXN0IGJlIGluY2x1ZGVkIGluIHRoZSBtYWluIGBwcmlzbS5qc2AgZmlsZSBmb3Jcblx0XHQgKiBhc3luY2hyb25vdXMgaGlnaGxpZ2h0aW5nIHRvIHdvcmsuIFlvdSBjYW4gYnVpbGQgeW91ciBvd24gYnVuZGxlIG9uIHRoZVxuXHRcdCAqIFtEb3dubG9hZCBwYWdlXShodHRwczovL3ByaXNtanMuY29tL2Rvd25sb2FkLmh0bWwpLlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIGRvbmUuXG5cdFx0ICogTW9zdGx5IHVzZWZ1bCB3aGVuIGBhc3luY2AgaXMgYHRydWVgLCBzaW5jZSBpbiB0aGF0IGNhc2UsIHRoZSBoaWdobGlnaHRpbmcgaXMgZG9uZSBhc3luY2hyb25vdXNseS5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0RWxlbWVudDogZnVuY3Rpb24gKGVsZW1lbnQsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdFx0Ly8gRmluZCBsYW5ndWFnZVxuXHRcdFx0dmFyIGxhbmd1YWdlID0gXy51dGlsLmdldExhbmd1YWdlKGVsZW1lbnQpO1xuXHRcdFx0dmFyIGdyYW1tYXIgPSBfLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cblx0XHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgZWxlbWVudCwgaWYgbm90IHByZXNlbnRcblx0XHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShsYW5nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cblx0XHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgcGFyZW50LCBmb3Igc3R5bGluZ1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnKSB7XG5cdFx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY29kZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cblx0XHRcdHZhciBlbnYgPSB7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZSxcblx0XHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdFx0Y29kZTogY29kZVxuXHRcdFx0fTtcblxuXHRcdFx0ZnVuY3Rpb24gaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGhpZ2hsaWdodGVkQ29kZSkge1xuXHRcdFx0XHRlbnYuaGlnaGxpZ2h0ZWRDb2RlID0gaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0XHRlbnYuZWxlbWVudC5pbm5lckhUTUwgPSBlbnYuaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRcdF8uaG9va3MucnVuKCdhZnRlci1oaWdobGlnaHQnLCBlbnYpO1xuXHRcdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0XHQvLyBwbHVnaW5zIG1heSBjaGFuZ2UvYWRkIHRoZSBwYXJlbnQvZWxlbWVudFxuXHRcdFx0cGFyZW50ID0gZW52LmVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnICYmICFwYXJlbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG5cdFx0XHRcdHBhcmVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8udXRpbC5lbmNvZGUoZW52LmNvZGUpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYXN5bmMgJiYgX3NlbGYuV29ya2VyKSB7XG5cdFx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKF8uZmlsZW5hbWUpO1xuXG5cdFx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGV2dC5kYXRhKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdGxhbmd1YWdlOiBlbnYubGFuZ3VhZ2UsXG5cdFx0XHRcdFx0Y29kZTogZW52LmNvZGUsXG5cdFx0XHRcdFx0aW1tZWRpYXRlQ2xvc2U6IHRydWVcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8uaGlnaGxpZ2h0KGVudi5jb2RlLCBlbnYuZ3JhbW1hciwgZW52Lmxhbmd1YWdlKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIExvdy1sZXZlbCBmdW5jdGlvbiwgb25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3XigJlyZSBkb2luZy4gSXQgYWNjZXB0cyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0XG5cdFx0ICogYW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9ucyB0byB1c2UsIGFuZCByZXR1cm5zIGEgc3RyaW5nIHdpdGggdGhlIEhUTUwgcHJvZHVjZWQuXG5cdFx0ICpcblx0XHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHRcdCAqIDEuIGBiZWZvcmUtdG9rZW5pemVgXG5cdFx0ICogMi4gYGFmdGVyLXRva2VuaXplYFxuXHRcdCAqIDMuIGB3cmFwYDogT24gZWFjaCB7QGxpbmsgVG9rZW59LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgQSBzdHJpbmcgd2l0aCB0aGUgY29kZSB0byBiZSBoaWdobGlnaHRlZC5cblx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGdyYW1tYXIgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRva2VucyB0byB1c2UuXG5cdFx0ICpcblx0XHQgKiBVc3VhbGx5IGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBsaWtlIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIG5hbWUgb2YgdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gcGFzc2VkIHRvIGBncmFtbWFyYC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgaGlnaGxpZ2h0ZWQgSFRNTC5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBQcmlzbS5oaWdobGlnaHQoJ3ZhciBmb28gPSB0cnVlOycsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0LCAnamF2YXNjcmlwdCcpO1xuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodDogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIsIGxhbmd1YWdlKSB7XG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRjb2RlOiB0ZXh0LFxuXHRcdFx0XHRncmFtbWFyOiBncmFtbWFyLFxuXHRcdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHRcdH07XG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXRva2VuaXplJywgZW52KTtcblx0XHRcdGVudi50b2tlbnMgPSBfLnRva2VuaXplKGVudi5jb2RlLCBlbnYuZ3JhbW1hcik7XG5cdFx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItdG9rZW5pemUnLCBlbnYpO1xuXHRcdFx0cmV0dXJuIFRva2VuLnN0cmluZ2lmeShfLnV0aWwuZW5jb2RlKGVudi50b2tlbnMpLCBlbnYubGFuZ3VhZ2UpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGlzIHRoZSBoZWFydCBvZiBQcmlzbSwgYW5kIHRoZSBtb3N0IGxvdy1sZXZlbCBmdW5jdGlvbiB5b3UgY2FuIHVzZS4gSXQgYWNjZXB0cyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0XG5cdFx0ICogYW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9ucyB0byB1c2UsIGFuZCByZXR1cm5zIGFuIGFycmF5IHdpdGggdGhlIHRva2VuaXplZCBjb2RlLlxuXHRcdCAqXG5cdFx0ICogV2hlbiB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBpbmNsdWRlcyBuZXN0ZWQgdG9rZW5zLCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHJlY3Vyc2l2ZWx5IG9uIGVhY2ggb2YgdGhlc2UgdG9rZW5zLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBtZXRob2QgY291bGQgYmUgdXNlZnVsIGluIG90aGVyIGNvbnRleHRzIGFzIHdlbGwsIGFzIGEgdmVyeSBjcnVkZSBwYXJzZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBBIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvIGJlIGhpZ2hsaWdodGVkLlxuXHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gZ3JhbW1hciBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdG9rZW5zIHRvIHVzZS5cblx0XHQgKlxuXHRcdCAqIFVzdWFsbHkgYSBsYW5ndWFnZSBkZWZpbml0aW9uIGxpa2UgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgLlxuXHRcdCAqIEByZXR1cm5zIHtUb2tlblN0cmVhbX0gQW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQgdG9rZW5zLCBhIHRva2VuIHN0cmVhbS5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBsZXQgY29kZSA9IGB2YXIgZm9vID0gMDtgO1xuXHRcdCAqIGxldCB0b2tlbnMgPSBQcmlzbS50b2tlbml6ZShjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG5cdFx0ICogdG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuXHRcdCAqICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBQcmlzbS5Ub2tlbiAmJiB0b2tlbi50eXBlID09PSAnbnVtYmVyJykge1xuXHRcdCAqICAgICAgICAgY29uc29sZS5sb2coYEZvdW5kIG51bWVyaWMgbGl0ZXJhbDogJHt0b2tlbi5jb250ZW50fWApO1xuXHRcdCAqICAgICB9XG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0dG9rZW5pemU6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyKSB7XG5cdFx0XHR2YXIgcmVzdCA9IGdyYW1tYXIucmVzdDtcblx0XHRcdGlmIChyZXN0KSB7XG5cdFx0XHRcdGZvciAodmFyIHRva2VuIGluIHJlc3QpIHtcblx0XHRcdFx0XHRncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGdyYW1tYXIucmVzdDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHRva2VuTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG5cdFx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIHRva2VuTGlzdC5oZWFkLCB0ZXh0KTtcblxuXHRcdFx0bWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgdG9rZW5MaXN0LmhlYWQsIDApO1xuXG5cdFx0XHRyZXR1cm4gdG9BcnJheSh0b2tlbkxpc3QpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBAbmFtZXNwYWNlXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGhvb2tzOiB7XG5cdFx0XHRhbGw6IHt9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEFkZHMgdGhlIGdpdmVuIGNhbGxiYWNrIHRvIHRoZSBsaXN0IG9mIGNhbGxiYWNrcyBmb3IgdGhlIGdpdmVuIGhvb2suXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBob29rIGl0IGlzIHJlZ2lzdGVyZWQgZm9yIGlzIHJ1bi5cblx0XHRcdCAqIEhvb2tzIGFyZSB1c3VhbGx5IGRpcmVjdGx5IHJ1biBieSBhIGhpZ2hsaWdodCBmdW5jdGlvbiBidXQgeW91IGNhbiBhbHNvIHJ1biBob29rcyB5b3Vyc2VsZi5cblx0XHRcdCAqXG5cdFx0XHQgKiBPbmUgY2FsbGJhY2sgZnVuY3Rpb24gY2FuIGJlIHJlZ2lzdGVyZWQgdG8gbXVsdGlwbGUgaG9va3MgYW5kIHRoZSBzYW1lIGhvb2sgbXVsdGlwbGUgdGltZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2suXG5cdFx0XHQgKiBAcGFyYW0ge0hvb2tDYWxsYmFja30gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGdpdmVuIGVudmlyb25tZW50IHZhcmlhYmxlcy5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqL1xuXHRcdFx0YWRkOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcblx0XHRcdFx0dmFyIGhvb2tzID0gXy5ob29rcy5hbGw7XG5cblx0XHRcdFx0aG9va3NbbmFtZV0gPSBob29rc1tuYW1lXSB8fCBbXTtcblxuXHRcdFx0XHRob29rc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUnVucyBhIGhvb2sgaW52b2tpbmcgYWxsIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGVudmlyb25tZW50IHZhcmlhYmxlcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBDYWxsYmFja3Mgd2lsbCBiZSBpbnZva2VkIHN5bmNocm9ub3VzbHkgYW5kIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gZW52IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgb2YgdGhlIGhvb2sgcGFzc2VkIHRvIGFsbCBjYWxsYmFja3MgcmVnaXN0ZXJlZC5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqL1xuXHRcdFx0cnVuOiBmdW5jdGlvbiAobmFtZSwgZW52KSB7XG5cdFx0XHRcdHZhciBjYWxsYmFja3MgPSBfLmhvb2tzLmFsbFtuYW1lXTtcblxuXHRcdFx0XHRpZiAoIWNhbGxiYWNrcyB8fCAhY2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBjYWxsYmFjazsgKGNhbGxiYWNrID0gY2FsbGJhY2tzW2krK10pOykge1xuXHRcdFx0XHRcdGNhbGxiYWNrKGVudik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VG9rZW46IFRva2VuXG5cdH07XG5cdF9zZWxmLlByaXNtID0gXztcblxuXG5cdC8vIFR5cGVzY3JpcHQgbm90ZTpcblx0Ly8gVGhlIGZvbGxvd2luZyBjYW4gYmUgdXNlZCB0byBpbXBvcnQgdGhlIFRva2VuIHR5cGUgaW4gSlNEb2M6XG5cdC8vXG5cdC8vICAgQHR5cGVkZWYge0luc3RhbmNlVHlwZTxpbXBvcnQoXCIuL3ByaXNtLWNvcmVcIilbXCJUb2tlblwiXT59IFRva2VuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgdG9rZW4uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFNlZSB7QGxpbmsgVG9rZW4jdHlwZSB0eXBlfVxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IFRva2VuU3RyZWFtfSBjb250ZW50IFNlZSB7QGxpbmsgVG9rZW4jY29udGVudCBjb250ZW50fVxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW2FsaWFzXSBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFttYXRjaGVkU3RyPVwiXCJdIEEgY29weSBvZiB0aGUgZnVsbCBzdHJpbmcgdGhpcyB0b2tlbiB3YXMgY3JlYXRlZCBmcm9tLlxuXHQgKiBAY2xhc3Ncblx0ICogQGdsb2JhbFxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRmdW5jdGlvbiBUb2tlbih0eXBlLCBjb250ZW50LCBhbGlhcywgbWF0Y2hlZFN0cikge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB0eXBlIG9mIHRoZSB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIFRoaXMgaXMgdXN1YWxseSB0aGUga2V5IG9mIGEgcGF0dGVybiBpbiBhIHtAbGluayBHcmFtbWFyfS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHQvKipcblx0XHQgKiBUaGUgc3RyaW5ncyBvciB0b2tlbnMgY29udGFpbmVkIGJ5IHRoaXMgdG9rZW4uXG5cdFx0ICpcblx0XHQgKiBUaGlzIHdpbGwgYmUgYSB0b2tlbiBzdHJlYW0gaWYgdGhlIHBhdHRlcm4gbWF0Y2hlZCBhbHNvIGRlZmluZWQgYW4gYGluc2lkZWAgZ3JhbW1hci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmcgfCBUb2tlblN0cmVhbX1cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHQvKipcblx0XHQgKiBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd8c3RyaW5nW119XG5cdFx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5hbGlhcyA9IGFsaWFzO1xuXHRcdC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXHRcdHRoaXMubGVuZ3RoID0gKG1hdGNoZWRTdHIgfHwgJycpLmxlbmd0aCB8IDA7XG5cdH1cblxuXHQvKipcblx0ICogQSB0b2tlbiBzdHJlYW0gaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQge0BsaW5rIFRva2VuIFRva2VufSBvYmplY3RzLlxuXHQgKlxuXHQgKiBUb2tlbiBzdHJlYW1zIGhhdmUgdG8gZnVsZmlsbCBhIGZldyBwcm9wZXJ0aWVzIHRoYXQgYXJlIGFzc3VtZWQgYnkgbW9zdCBmdW5jdGlvbnMgKG1vc3RseSBpbnRlcm5hbCBvbmVzKSB0aGF0IHByb2Nlc3Ncblx0ICogdGhlbS5cblx0ICpcblx0ICogMS4gTm8gYWRqYWNlbnQgc3RyaW5ncy5cblx0ICogMi4gTm8gZW1wdHkgc3RyaW5ncy5cblx0ICpcblx0ICogICAgVGhlIG9ubHkgZXhjZXB0aW9uIGhlcmUgaXMgdGhlIHRva2VuIHN0cmVhbSB0aGF0IG9ubHkgY29udGFpbnMgdGhlIGVtcHR5IHN0cmluZyBhbmQgbm90aGluZyBlbHNlLlxuXHQgKlxuXHQgKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nIHwgVG9rZW4+fSBUb2tlblN0cmVhbVxuXHQgKiBAZ2xvYmFsXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIHRoZSBnaXZlbiB0b2tlbiBvciB0b2tlbiBzdHJlYW0gdG8gYW4gSFRNTCByZXByZXNlbnRhdGlvbi5cblx0ICpcblx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0ICogMS4gYHdyYXBgOiBPbiBlYWNoIHtAbGluayBUb2tlbn0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgVG9rZW4gfCBUb2tlblN0cmVhbX0gbyBUaGUgdG9rZW4gb3IgdG9rZW4gc3RyZWFtIHRvIGJlIGNvbnZlcnRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSBuYW1lIG9mIGN1cnJlbnQgbGFuZ3VhZ2UuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBIVE1MIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0b2tlbiBvciB0b2tlbiBzdHJlYW0uXG5cdCAqIEBtZW1iZXJvZiBUb2tlblxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRUb2tlbi5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkobywgbGFuZ3VhZ2UpIHtcblx0XHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBvO1xuXHRcdH1cblx0XHRpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuXHRcdFx0dmFyIHMgPSAnJztcblx0XHRcdG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRzICs9IHN0cmluZ2lmeShlLCBsYW5ndWFnZSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBzO1xuXHRcdH1cblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHR0eXBlOiBvLnR5cGUsXG5cdFx0XHRjb250ZW50OiBzdHJpbmdpZnkoby5jb250ZW50LCBsYW5ndWFnZSksXG5cdFx0XHR0YWc6ICdzcGFuJyxcblx0XHRcdGNsYXNzZXM6IFsndG9rZW4nLCBvLnR5cGVdLFxuXHRcdFx0YXR0cmlidXRlczoge30sXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHR9O1xuXG5cdFx0dmFyIGFsaWFzZXMgPSBvLmFsaWFzO1xuXHRcdGlmIChhbGlhc2VzKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhbGlhc2VzKSkge1xuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnYuY2xhc3Nlcy5wdXNoKGFsaWFzZXMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF8uaG9va3MucnVuKCd3cmFwJywgZW52KTtcblxuXHRcdHZhciBhdHRyaWJ1dGVzID0gJyc7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBlbnYuYXR0cmlidXRlcykge1xuXHRcdFx0YXR0cmlidXRlcyArPSAnICcgKyBuYW1lICsgJz1cIicgKyAoZW52LmF0dHJpYnV0ZXNbbmFtZV0gfHwgJycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKSArICdcIic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICc8JyArIGVudi50YWcgKyAnIGNsYXNzPVwiJyArIGVudi5jbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyBhdHRyaWJ1dGVzICsgJz4nICsgZW52LmNvbnRlbnQgKyAnPC8nICsgZW52LnRhZyArICc+Jztcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtSZWdFeHB9IHBhdHRlcm5cblx0ICogQHBhcmFtIHtudW1iZXJ9IHBvc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb2tiZWhpbmRcblx0ICogQHJldHVybnMge1JlZ0V4cEV4ZWNBcnJheSB8IG51bGx9XG5cdCAqL1xuXHRmdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKSB7XG5cdFx0cGF0dGVybi5sYXN0SW5kZXggPSBwb3M7XG5cdFx0dmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xuXHRcdGlmIChtYXRjaCAmJiBsb29rYmVoaW5kICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQvLyBjaGFuZ2UgdGhlIG1hdGNoIHRvIHJlbW92ZSB0aGUgdGV4dCBtYXRjaGVkIGJ5IHRoZSBQcmlzbSBsb29rYmVoaW5kIGdyb3VwXG5cdFx0XHR2YXIgbG9va2JlaGluZExlbmd0aCA9IG1hdGNoWzFdLmxlbmd0aDtcblx0XHRcdG1hdGNoLmluZGV4ICs9IGxvb2tiZWhpbmRMZW5ndGg7XG5cdFx0XHRtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGxvb2tiZWhpbmRMZW5ndGgpO1xuXHRcdH1cblx0XHRyZXR1cm4gbWF0Y2g7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PHN0cmluZyB8IFRva2VuPn0gdG9rZW5MaXN0XG5cdCAqIEBwYXJhbSB7YW55fSBncmFtbWFyXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdE5vZGU8c3RyaW5nIHwgVG9rZW4+fSBzdGFydE5vZGVcblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0UG9zXG5cdCAqIEBwYXJhbSB7UmVtYXRjaE9wdGlvbnN9IFtyZW1hdGNoXVxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICogQHByaXZhdGVcblx0ICpcblx0ICogQHR5cGVkZWYgUmVtYXRjaE9wdGlvbnNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGNhdXNlXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByZWFjaFxuXHQgKi9cblx0ZnVuY3Rpb24gbWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgc3RhcnROb2RlLCBzdGFydFBvcywgcmVtYXRjaCkge1xuXHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdGlmICghZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikgfHwgIWdyYW1tYXJbdG9rZW5dKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybnMgPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdHBhdHRlcm5zID0gQXJyYXkuaXNBcnJheShwYXR0ZXJucykgPyBwYXR0ZXJucyA6IFtwYXR0ZXJuc107XG5cblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcGF0dGVybnMubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0aWYgKHJlbWF0Y2ggJiYgcmVtYXRjaC5jYXVzZSA9PSB0b2tlbiArICcsJyArIGopIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcGF0dGVybk9iaiA9IHBhdHRlcm5zW2pdO1xuXHRcdFx0XHR2YXIgaW5zaWRlID0gcGF0dGVybk9iai5pbnNpZGU7XG5cdFx0XHRcdHZhciBsb29rYmVoaW5kID0gISFwYXR0ZXJuT2JqLmxvb2tiZWhpbmQ7XG5cdFx0XHRcdHZhciBncmVlZHkgPSAhIXBhdHRlcm5PYmouZ3JlZWR5O1xuXHRcdFx0XHR2YXIgYWxpYXMgPSBwYXR0ZXJuT2JqLmFsaWFzO1xuXG5cdFx0XHRcdGlmIChncmVlZHkgJiYgIXBhdHRlcm5PYmoucGF0dGVybi5nbG9iYWwpIHtcblx0XHRcdFx0XHQvLyBXaXRob3V0IHRoZSBnbG9iYWwgZmxhZywgbGFzdEluZGV4IHdvbid0IHdvcmtcblx0XHRcdFx0XHR2YXIgZmxhZ3MgPSBwYXR0ZXJuT2JqLnBhdHRlcm4udG9TdHJpbmcoKS5tYXRjaCgvW2ltc3V5XSokLylbMF07XG5cdFx0XHRcdFx0cGF0dGVybk9iai5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm5PYmoucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qKiBAdHlwZSB7UmVnRXhwfSAqL1xuXHRcdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5PYmoucGF0dGVybiB8fCBwYXR0ZXJuT2JqO1xuXG5cdFx0XHRcdGZvciAoIC8vIGl0ZXJhdGUgdGhlIHRva2VuIGxpc3QgYW5kIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgdG9rZW4vc3RyaW5nIHBvc2l0aW9uXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnROb2RlID0gc3RhcnROb2RlLm5leHQsIHBvcyA9IHN0YXJ0UG9zO1xuXHRcdFx0XHRcdGN1cnJlbnROb2RlICE9PSB0b2tlbkxpc3QudGFpbDtcblx0XHRcdFx0XHRwb3MgKz0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoLCBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcblx0XHRcdFx0KSB7XG5cblx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiBwb3MgPj0gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHN0ciA9IGN1cnJlbnROb2RlLnZhbHVlO1xuXG5cdFx0XHRcdFx0aWYgKHRva2VuTGlzdC5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIEFCT1JULCBBQk9SVCFcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc3RyIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciByZW1vdmVDb3VudCA9IDE7IC8vIHRoaXMgaXMgdGhlIHRvIHBhcmFtZXRlciBvZiByZW1vdmVCZXR3ZWVuXG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xuXG5cdFx0XHRcdFx0aWYgKGdyZWVkeSkge1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0XHR2YXIgdG8gPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0XHRcdHZhciBwID0gcG9zO1xuXG5cdFx0XHRcdFx0XHQvLyBmaW5kIHRoZSBub2RlIHRoYXQgY29udGFpbnMgdGhlIG1hdGNoXG5cdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlIChmcm9tID49IHApIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuXHRcdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIGFkanVzdCBwb3MgKGFuZCBwKVxuXHRcdFx0XHRcdFx0cCAtPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRwb3MgPSBwO1xuXG5cdFx0XHRcdFx0XHQvLyB0aGUgY3VycmVudCBub2RlIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnROb2RlLnZhbHVlIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIGZpbmQgdGhlIGxhc3Qgbm9kZSB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIG1hdGNoXG5cdFx0XHRcdFx0XHRmb3IgKFxuXHRcdFx0XHRcdFx0XHR2YXIgayA9IGN1cnJlbnROb2RlO1xuXHRcdFx0XHRcdFx0XHRrICE9PSB0b2tlbkxpc3QudGFpbCAmJiAocCA8IHRvIHx8IHR5cGVvZiBrLnZhbHVlID09PSAnc3RyaW5nJyk7XG5cdFx0XHRcdFx0XHRcdGsgPSBrLm5leHRcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRyZW1vdmVDb3VudCsrO1xuXHRcdFx0XHRcdFx0XHRwICs9IGsudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmVtb3ZlQ291bnQtLTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRcdHN0ciA9IHRleHQuc2xpY2UocG9zLCBwKTtcblx0XHRcdFx0XHRcdG1hdGNoLmluZGV4IC09IHBvcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgMCwgc3RyLCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0dmFyIG1hdGNoU3RyID0gbWF0Y2hbMF07XG5cdFx0XHRcdFx0dmFyIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKTtcblx0XHRcdFx0XHR2YXIgYWZ0ZXIgPSBzdHIuc2xpY2UoZnJvbSArIG1hdGNoU3RyLmxlbmd0aCk7XG5cblx0XHRcdFx0XHR2YXIgcmVhY2ggPSBwb3MgKyBzdHIubGVuZ3RoO1xuXHRcdFx0XHRcdGlmIChyZW1hdGNoICYmIHJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0cmVtYXRjaC5yZWFjaCA9IHJlYWNoO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciByZW1vdmVGcm9tID0gY3VycmVudE5vZGUucHJldjtcblxuXHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdHJlbW92ZUZyb20gPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIGJlZm9yZSk7XG5cdFx0XHRcdFx0XHRwb3MgKz0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZW1vdmVSYW5nZSh0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHJlbW92ZUNvdW50KTtcblxuXHRcdFx0XHRcdHZhciB3cmFwcGVkID0gbmV3IFRva2VuKHRva2VuLCBpbnNpZGUgPyBfLnRva2VuaXplKG1hdGNoU3RyLCBpbnNpZGUpIDogbWF0Y2hTdHIsIGFsaWFzLCBtYXRjaFN0cik7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHdyYXBwZWQpO1xuXG5cdFx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIGN1cnJlbnROb2RlLCBhZnRlcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlbW92ZUNvdW50ID4gMSkge1xuXHRcdFx0XHRcdFx0Ly8gYXQgbGVhc3Qgb25lIFRva2VuIG9iamVjdCB3YXMgcmVtb3ZlZCwgc28gd2UgaGF2ZSB0byBkbyBzb21lIHJlbWF0Y2hpbmdcblx0XHRcdFx0XHRcdC8vIHRoaXMgY2FuIG9ubHkgaGFwcGVuIGlmIHRoZSBjdXJyZW50IHBhdHRlcm4gaXMgZ3JlZWR5XG5cblx0XHRcdFx0XHRcdC8qKiBAdHlwZSB7UmVtYXRjaE9wdGlvbnN9ICovXG5cdFx0XHRcdFx0XHR2YXIgbmVzdGVkUmVtYXRjaCA9IHtcblx0XHRcdFx0XHRcdFx0Y2F1c2U6IHRva2VuICsgJywnICsgaixcblx0XHRcdFx0XHRcdFx0cmVhY2g6IHJlYWNoXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0bWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgY3VycmVudE5vZGUucHJldiwgcG9zLCBuZXN0ZWRSZW1hdGNoKTtcblxuXHRcdFx0XHRcdFx0Ly8gdGhlIHJlYWNoIG1pZ2h0IGhhdmUgYmVlbiBleHRlbmRlZCBiZWNhdXNlIG9mIHRoZSByZW1hdGNoaW5nXG5cdFx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiBuZXN0ZWRSZW1hdGNoLnJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0XHRyZW1hdGNoLnJlYWNoID0gbmVzdGVkUmVtYXRjaC5yZWFjaDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGVkZWYgTGlua2VkTGlzdE5vZGVcblx0ICogQHByb3BlcnR5IHtUfSB2YWx1ZVxuXHQgKiBAcHJvcGVydHkge0xpbmtlZExpc3ROb2RlPFQ+IHwgbnVsbH0gcHJldiBUaGUgcHJldmlvdXMgbm9kZS5cblx0ICogQHByb3BlcnR5IHtMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGx9IG5leHQgVGhlIG5leHQgbm9kZS5cblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHByaXZhdGVcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBMaW5rZWRMaXN0KCkge1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dmFyIGhlYWQgPSB7IHZhbHVlOiBudWxsLCBwcmV2OiBudWxsLCBuZXh0OiBudWxsIH07XG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR2YXIgdGFpbCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IGhlYWQsIG5leHQ6IG51bGwgfTtcblx0XHRoZWFkLm5leHQgPSB0YWlsO1xuXG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR0aGlzLmhlYWQgPSBoZWFkO1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dGhpcy50YWlsID0gdGFpbDtcblx0XHR0aGlzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIG5ldyBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBsaXN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3Q8VD59IGxpc3Rcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxUPn0gbm9kZVxuXHQgKiBAcGFyYW0ge1R9IHZhbHVlXG5cdCAqIEByZXR1cm5zIHtMaW5rZWRMaXN0Tm9kZTxUPn0gVGhlIGFkZGVkIG5vZGUuXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiBhZGRBZnRlcihsaXN0LCBub2RlLCB2YWx1ZSkge1xuXHRcdC8vIGFzc3VtZXMgdGhhdCBub2RlICE9IGxpc3QudGFpbCAmJiB2YWx1ZXMubGVuZ3RoID49IDBcblx0XHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblxuXHRcdHZhciBuZXdOb2RlID0geyB2YWx1ZTogdmFsdWUsIHByZXY6IG5vZGUsIG5leHQ6IG5leHQgfTtcblx0XHRub2RlLm5leHQgPSBuZXdOb2RlO1xuXHRcdG5leHQucHJldiA9IG5ld05vZGU7XG5cdFx0bGlzdC5sZW5ndGgrKztcblxuXHRcdHJldHVybiBuZXdOb2RlO1xuXHR9XG5cdC8qKlxuXHQgKiBSZW1vdmVzIGBjb3VudGAgbm9kZXMgYWZ0ZXIgdGhlIGdpdmVuIG5vZGUuIFRoZSBnaXZlbiBub2RlIHdpbGwgbm90IGJlIHJlbW92ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPFQ+fSBub2RlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKi9cblx0ZnVuY3Rpb24gcmVtb3ZlUmFuZ2UobGlzdCwgbm9kZSwgY291bnQpIHtcblx0XHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50ICYmIG5leHQgIT09IGxpc3QudGFpbDsgaSsrKSB7XG5cdFx0XHRuZXh0ID0gbmV4dC5uZXh0O1xuXHRcdH1cblx0XHRub2RlLm5leHQgPSBuZXh0O1xuXHRcdG5leHQucHJldiA9IG5vZGU7XG5cdFx0bGlzdC5sZW5ndGggLT0gaTtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG5cdCAqIEByZXR1cm5zIHtUW119XG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FycmF5KGxpc3QpIHtcblx0XHR2YXIgYXJyYXkgPSBbXTtcblx0XHR2YXIgbm9kZSA9IGxpc3QuaGVhZC5uZXh0O1xuXHRcdHdoaWxlIChub2RlICE9PSBsaXN0LnRhaWwpIHtcblx0XHRcdGFycmF5LnB1c2gobm9kZS52YWx1ZSk7XG5cdFx0XHRub2RlID0gbm9kZS5uZXh0O1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxuXG5cdGlmICghX3NlbGYuZG9jdW1lbnQpIHtcblx0XHRpZiAoIV9zZWxmLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdC8vIGluIE5vZGUuanNcblx0XHRcdHJldHVybiBfO1xuXHRcdH1cblxuXHRcdGlmICghXy5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIpIHtcblx0XHRcdC8vIEluIHdvcmtlclxuXHRcdFx0X3NlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0dmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2dC5kYXRhKTtcblx0XHRcdFx0dmFyIGxhbmcgPSBtZXNzYWdlLmxhbmd1YWdlO1xuXHRcdFx0XHR2YXIgY29kZSA9IG1lc3NhZ2UuY29kZTtcblx0XHRcdFx0dmFyIGltbWVkaWF0ZUNsb3NlID0gbWVzc2FnZS5pbW1lZGlhdGVDbG9zZTtcblxuXHRcdFx0XHRfc2VsZi5wb3N0TWVzc2FnZShfLmhpZ2hsaWdodChjb2RlLCBfLmxhbmd1YWdlc1tsYW5nXSwgbGFuZykpO1xuXHRcdFx0XHRpZiAoaW1tZWRpYXRlQ2xvc2UpIHtcblx0XHRcdFx0XHRfc2VsZi5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHQvLyBHZXQgY3VycmVudCBzY3JpcHQgYW5kIGhpZ2hsaWdodFxuXHR2YXIgc2NyaXB0ID0gXy51dGlsLmN1cnJlbnRTY3JpcHQoKTtcblxuXHRpZiAoc2NyaXB0KSB7XG5cdFx0Xy5maWxlbmFtZSA9IHNjcmlwdC5zcmM7XG5cblx0XHRpZiAoc2NyaXB0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tYW51YWwnKSkge1xuXHRcdFx0Xy5tYW51YWwgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjaygpIHtcblx0XHRpZiAoIV8ubWFudWFsKSB7XG5cdFx0XHRfLmhpZ2hsaWdodEFsbCgpO1xuXHRcdH1cblx0fVxuXG5cdGlmICghXy5tYW51YWwpIHtcblx0XHQvLyBJZiB0aGUgZG9jdW1lbnQgc3RhdGUgaXMgXCJsb2FkaW5nXCIsIHRoZW4gd2UnbGwgdXNlIERPTUNvbnRlbnRMb2FkZWQuXG5cdFx0Ly8gSWYgdGhlIGRvY3VtZW50IHN0YXRlIGlzIFwiaW50ZXJhY3RpdmVcIiBhbmQgdGhlIHByaXNtLmpzIHNjcmlwdCBpcyBkZWZlcnJlZCwgdGhlbiB3ZSdsbCBhbHNvIHVzZSB0aGVcblx0XHQvLyBET01Db250ZW50TG9hZGVkIGV2ZW50IGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgc29tZSBwbHVnaW5zIG9yIGxhbmd1YWdlcyB3aGljaCBoYXZlIGFsc28gYmVlbiBkZWZlcnJlZCBhbmQgdGhleVxuXHRcdC8vIG1pZ2h0IHRha2UgbG9uZ2VyIG9uZSBhbmltYXRpb24gZnJhbWUgdG8gZXhlY3V0ZSB3aGljaCBjYW4gY3JlYXRlIGEgcmFjZSBjb25kaXRpb24gd2hlcmUgb25seSBzb21lIHBsdWdpbnMgaGF2ZVxuXHRcdC8vIGJlZW4gbG9hZGVkIHdoZW4gUHJpc20uaGlnaGxpZ2h0QWxsKCkgaXMgZXhlY3V0ZWQsIGRlcGVuZGluZyBvbiBob3cgZmFzdCByZXNvdXJjZXMgYXJlIGxvYWRlZC5cblx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1ByaXNtSlMvcHJpc20vaXNzdWVzLzIxMDJcblx0XHR2YXIgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG5cdFx0aWYgKHJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJyB8fCByZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnICYmIHNjcmlwdCAmJiBzY3JpcHQuZGVmZXIpIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2ssIDE2KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gXztcblxufShfc2VsZikpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmlzbTtcbn1cblxuLy8gaGFjayBmb3IgY29tcG9uZW50cyB0byB3b3JrIGNvcnJlY3RseSBpbiBub2RlLmpzXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Z2xvYmFsLlByaXNtID0gUHJpc207XG59XG5cbi8vIHNvbWUgYWRkaXRpb25hbCBkb2N1bWVudGF0aW9uL3R5cGVzXG5cbi8qKlxuICogVGhlIGV4cGFuc2lvbiBvZiBhIHNpbXBsZSBgUmVnRXhwYCBsaXRlcmFsIHRvIHN1cHBvcnQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLlxuICpcbiAqIEB0eXBlZGVmIEdyYW1tYXJUb2tlblxuICogQHByb3BlcnR5IHtSZWdFeHB9IHBhdHRlcm4gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBvZiB0aGUgdG9rZW4uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtsb29rYmVoaW5kPWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIGZpcnN0IGNhcHR1cmluZyBncm91cCBvZiBgcGF0dGVybmAgd2lsbCAoZWZmZWN0aXZlbHkpXG4gKiBiZWhhdmUgYXMgYSBsb29rYmVoaW5kIGdyb3VwIG1lYW5pbmcgdGhhdCB0aGUgY2FwdHVyZWQgdGV4dCB3aWxsIG5vdCBiZSBwYXJ0IG9mIHRoZSBtYXRjaGVkIHRleHQgb2YgdGhlIG5ldyB0b2tlbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2dyZWVkeT1mYWxzZV0gV2hldGhlciB0aGUgdG9rZW4gaXMgZ3JlZWR5LlxuICogQHByb3BlcnR5IHtzdHJpbmd8c3RyaW5nW119IFthbGlhc10gQW4gb3B0aW9uYWwgYWxpYXMgb3IgbGlzdCBvZiBhbGlhc2VzLlxuICogQHByb3BlcnR5IHtHcmFtbWFyfSBbaW5zaWRlXSBUaGUgbmVzdGVkIGdyYW1tYXIgb2YgdGhpcyB0b2tlbi5cbiAqXG4gKiBUaGUgYGluc2lkZWAgZ3JhbW1hciB3aWxsIGJlIHVzZWQgdG8gdG9rZW5pemUgdGhlIHRleHQgdmFsdWUgb2YgZWFjaCB0b2tlbiBvZiB0aGlzIGtpbmQuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBtYWtlIG5lc3RlZCBhbmQgZXZlbiByZWN1cnNpdmUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMuXG4gKlxuICogTm90ZTogVGhpcyBjYW4gY2F1c2UgaW5maW5pdGUgcmVjdXJzaW9uLiBCZSBjYXJlZnVsIHdoZW4geW91IGVtYmVkIGRpZmZlcmVudCBsYW5ndWFnZXMgb3IgZXZlbiB0aGUgc2FtZSBsYW5ndWFnZSBpbnRvXG4gKiBlYWNoIGFub3RoZXIuXG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBHcmFtbWFyXG4gKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgUmVnRXhwIHwgR3JhbW1hclRva2VuIHwgQXJyYXk8UmVnRXhwIHwgR3JhbW1hclRva2VuPj59XG4gKiBAcHJvcGVydHkge0dyYW1tYXJ9IFtyZXN0XSBBbiBvcHRpb25hbCBncmFtbWFyIG9iamVjdCB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhpcyBncmFtbWFyLlxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB3aGljaCB3aWxsIGludm9rZWQgYWZ0ZXIgYW4gZWxlbWVudCB3YXMgc3VjY2Vzc2Z1bGx5IGhpZ2hsaWdodGVkLlxuICpcbiAqIEBjYWxsYmFjayBIaWdobGlnaHRDYWxsYmFja1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHN1Y2Nlc3NmdWxseSBoaWdobGlnaHRlZC5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEhvb2tDYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBlbnYgVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBvZiB0aGUgaG9vay5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1tYXJrdXAuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCA9IHtcblx0J2NvbW1lbnQnOiB7XG5cdFx0cGF0dGVybjogLzwhLS0oPzooPyE8IS0tKVtcXHNcXFNdKSo/LS0+Lyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3Byb2xvZyc6IHtcblx0XHRwYXR0ZXJuOiAvPFxcP1tcXHNcXFNdKz9cXD8+Lyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2RvY3R5cGUnOiB7XG5cdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtZG9jdHlwZWRlY2xcblx0XHRwYXR0ZXJuOiAvPCFET0NUWVBFKD86W14+XCInW1xcXV18XCJbXlwiXSpcInwnW14nXSonKSsoPzpcXFsoPzpbXjxcIidcXF1dfFwiW15cIl0qXCJ8J1teJ10qJ3w8KD8hIS0tKXw8IS0tKD86W14tXXwtKD8hLT4pKSotLT4pKlxcXVxccyopPz4vaSxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnaW50ZXJuYWwtc3Vic2V0Jzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKF5bXlxcW10qXFxbKVtcXHNcXFNdKyg/PVxcXT4kKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiBudWxsIC8vIHNlZSBiZWxvd1xuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9cIlteXCJdKlwifCdbXiddKicvLFxuXHRcdFx0XHRncmVlZHk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXjwhfD4kfFtbXFxdXS8sXG5cdFx0XHQnZG9jdHlwZS10YWcnOiAvXkRPQ1RZUEUvaSxcblx0XHRcdCduYW1lJzogL1teXFxzPD4nXCJdKy9cblx0XHR9XG5cdH0sXG5cdCdjZGF0YSc6IHtcblx0XHRwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCd0YWcnOiB7XG5cdFx0cGF0dGVybjogLzxcXC8/KD8hXFxkKVteXFxzPlxcLz0kPCVdKyg/Olxccyg/OlxccypbXlxccz5cXC89XSsoPzpcXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSl8KD89W1xccy8+XSkpKSspP1xccypcXC8/Pi8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RhZyc6IHtcblx0XHRcdFx0cGF0dGVybjogL148XFwvP1teXFxzPlxcL10rLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL148XFwvPy8sXG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzcGVjaWFsLWF0dHInOiBbXSxcblx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKS8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL149Lyxcblx0XHRcdFx0XHRcdFx0YWxpYXM6ICdhdHRyLWVxdWFscydcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQvXCJ8Jy9cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXFwvPz4vLFxuXHRcdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL1teXFxzPlxcL10rLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9LFxuXHQnZW50aXR5JzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8mW1xcZGEtel17MSw4fTsvaSxcblx0XHRcdGFsaWFzOiAnbmFtZWQtZW50aXR5J1xuXHRcdH0sXG5cdFx0LyYjeD9bXFxkYS1mXXsxLDh9Oy9pXG5cdF1cbn07XG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddLmluc2lkZVsnZW50aXR5J10gPVxuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwWydlbnRpdHknXTtcblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ2RvY3R5cGUnXS5pbnNpZGVbJ2ludGVybmFsLXN1YnNldCddLmluc2lkZSA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cbi8vIFBsdWdpbiB0byBtYWtlIGVudGl0eSB0aXRsZSBzaG93IHRoZSByZWFsIGVudGl0eSwgaWRlYSBieSBSb21hbiBLb21hcm92XG5QcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbiAoZW52KSB7XG5cblx0aWYgKGVudi50eXBlID09PSAnZW50aXR5Jykge1xuXHRcdGVudi5hdHRyaWJ1dGVzWyd0aXRsZSddID0gZW52LmNvbnRlbnQucmVwbGFjZSgvJmFtcDsvLCAnJicpO1xuXHR9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLCAnYWRkSW5saW5lZCcsIHtcblx0LyoqXG5cdCAqIEFkZHMgYW4gaW5saW5lZCBsYW5ndWFnZSB0byBtYXJrdXAuXG5cdCAqXG5cdCAqIEFuIGV4YW1wbGUgb2YgYW4gaW5saW5lZCBsYW5ndWFnZSBpcyBDU1Mgd2l0aCBgPHN0eWxlPmAgdGFncy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgVGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBpbmxpbmVkIGxhbmd1YWdlLiBUaGlzIG5hbWUgd2lsbCBiZSB0cmVhdGVkIGFzXG5cdCAqIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG5cdCAqIEBleGFtcGxlXG5cdCAqIGFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXHQgKi9cblx0dmFsdWU6IGZ1bmN0aW9uIGFkZElubGluZWQodGFnTmFtZSwgbGFuZykge1xuXHRcdHZhciBpbmNsdWRlZENkYXRhSW5zaWRlID0ge307XG5cdFx0aW5jbHVkZWRDZGF0YUluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuXHRcdFx0cGF0dGVybjogLyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHR9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2NkYXRhJ10gPSAvXjwhXFxbQ0RBVEFcXFt8XFxdXFxdPiQvaTtcblxuXHRcdHZhciBpbnNpZGUgPSB7XG5cdFx0XHQnaW5jbHVkZWQtY2RhdGEnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT4vaSxcblx0XHRcdFx0aW5zaWRlOiBpbmNsdWRlZENkYXRhSW5zaWRlXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRpbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHR9O1xuXG5cdFx0dmFyIGRlZiA9IHt9O1xuXHRcdGRlZlt0YWdOYW1lXSA9IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKDxfX1tePl0qPikoPzo8IVxcW0NEQVRBXFxbKD86W15cXF1dfFxcXSg/IVxcXT4pKSpcXF1cXF0+fCg/ITwhXFxbQ0RBVEFcXFspW1xcc1xcU10pKj8oPz08XFwvX18+KS8uc291cmNlLnJlcGxhY2UoL19fL2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRhZ05hbWU7IH0pLCAnaScpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZTogaW5zaWRlXG5cdFx0fTtcblxuXHRcdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjZGF0YScsIGRlZik7XG5cdH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLCAnYWRkQXR0cmlidXRlJywge1xuXHQvKipcblx0ICogQWRkcyBhbiBwYXR0ZXJuIHRvIGhpZ2hsaWdodCBsYW5ndWFnZXMgZW1iZWRkZWQgaW4gSFRNTCBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYHN0eWxlYCBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXR0ck5hbWUgVGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBpbmxpbmVkIGxhbmd1YWdlLiBUaGlzIG5hbWUgd2lsbCBiZSB0cmVhdGVkIGFzXG5cdCAqIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG5cdCAqIEBleGFtcGxlXG5cdCAqIGFkZEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3NzJyk7XG5cdCAqL1xuXHR2YWx1ZTogZnVuY3Rpb24gKGF0dHJOYW1lLCBsYW5nKSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuaW5zaWRlWydzcGVjaWFsLWF0dHInXS5wdXNoKHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cChcblx0XHRcdFx0LyhefFtcIidcXHNdKS8uc291cmNlICsgJyg/OicgKyBhdHRyTmFtZSArICcpJyArIC9cXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSkvLnNvdXJjZSxcblx0XHRcdFx0J2knXG5cdFx0XHQpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnYXR0ci1uYW1lJzogL15bXlxccz1dKy8sXG5cdFx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC89W1xcc1xcU10rLyxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCd2YWx1ZSc6IHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogLyhePVxccyooW1wiJ118KD8hW1wiJ10pKSlcXFNbXFxzXFxTXSooPz1cXDIkKS8sXG5cdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGFsaWFzOiBbbGFuZywgJ2xhbmd1YWdlLScgKyBsYW5nXSxcblx0XHRcdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXj0vLFxuXHRcdFx0XHRcdFx0XHRcdGFsaWFzOiAnYXR0ci1lcXVhbHMnXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdC9cInwnL1xuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmh0bWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLm1hdGhtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMuc3ZnID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblxuUHJpc20ubGFuZ3VhZ2VzLnhtbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KTtcblByaXNtLmxhbmd1YWdlcy5zc21sID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcblByaXNtLmxhbmd1YWdlcy5hdG9tID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcblByaXNtLmxhbmd1YWdlcy5yc3MgPSBQcmlzbS5sYW5ndWFnZXMueG1sO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY3NzLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgc3RyaW5nID0gLyg/OlwiKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cIlxcXFxcXHJcXG5dKSpcInwnKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W14nXFxcXFxcclxcbl0pKicpLztcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzID0ge1xuXHRcdCdjb21tZW50JzogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuXHRcdCdhdHJ1bGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvQFtcXHctXSg/OlteO3tcXHNdfFxccysoPyFbXFxze10pKSooPzo7fCg/PVxccypcXHspKS8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3J1bGUnOiAvXkBbXFx3LV0rLyxcblx0XHRcdFx0J3NlbGVjdG9yLWZ1bmN0aW9uLWFyZ3VtZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXFxic2VsZWN0b3JcXHMqXFwoXFxzKig/IVtcXHMpXSkpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCkpKyg/PVxccypcXCkpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGFsaWFzOiAnc2VsZWN0b3InXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdrZXl3b3JkJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXnxbXlxcdy1dKSg/OmFuZHxub3R8b25seXxvcikoPyFbXFx3LV0pLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU2VlIHJlc3QgYmVsb3dcblx0XHRcdH1cblx0XHR9LFxuXHRcdCd1cmwnOiB7XG5cdFx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ1xcXFxidXJsXFxcXCgoPzonICsgc3RyaW5nLnNvdXJjZSArICd8JyArIC8oPzpbXlxcXFxcXHJcXG4oKVwiJ118XFxcXFtcXHNcXFNdKSovLnNvdXJjZSArICcpXFxcXCknLCAnaScpLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdmdW5jdGlvbic6IC9edXJsL2ksXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFwofFxcKSQvLFxuXHRcdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnXicgKyBzdHJpbmcuc291cmNlICsgJyQnKSxcblx0XHRcdFx0XHRhbGlhczogJ3VybCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3NlbGVjdG9yJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCcoXnxbe31cXFxcc10pW157fVxcXFxzXSg/Oltee307XCJcXCdcXFxcc118XFxcXHMrKD8hW1xcXFxze10pfCcgKyBzdHJpbmcuc291cmNlICsgJykqKD89XFxcXHMqXFxcXHspJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogc3RyaW5nLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQncHJvcGVydHknOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14tXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVstX2EtelxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVstXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxccyo6KS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J2ltcG9ydGFudCc6IC8haW1wb3J0YW50XFxiL2ksXG5cdFx0J2Z1bmN0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLWEtejAtOV0pWy1hLXowLTldKyg/PVxcKCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bKCl7fTs6LF0vXG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuY3NzO1xuXG5cdHZhciBtYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRpZiAobWFya3VwKSB7XG5cdFx0bWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblx0XHRtYXJrdXAudGFnLmFkZEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3NzJyk7XG5cdH1cblxufShQcmlzbSkpO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY2xpa2UuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmNsaWtlID0ge1xuXHQnY29tbWVudCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3x0cmFpdHxpbnN0YW5jZW9mfG5ldylcXHMrfFxcYmNhdGNoXFxzK1xcKClbXFx3LlxcXFxdKy9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWy5cXFxcXS9cblx0XHR9XG5cdH0sXG5cdCdrZXl3b3JkJzogL1xcYig/OmlmfGVsc2V8d2hpbGV8ZG98Zm9yfHJldHVybnxpbnxpbnN0YW5jZW9mfGZ1bmN0aW9ufG5ld3x0cnl8dGhyb3d8Y2F0Y2h8ZmluYWxseXxudWxsfGJyZWFrfGNvbnRpbnVlKVxcYi8sXG5cdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0J2Z1bmN0aW9uJzogL1xcYlxcdysoPz1cXCgpLyxcblx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdvcGVyYXRvcic6IC9bPD5dPT98WyE9XT0/PT98LS0/fFxcK1xcKz98JiY/fFxcfFxcfD98Wz8qL35eJV0vLFxuXHQncHVuY3R1YXRpb24nOiAvW3t9W1xcXTsoKSwuOl0vXG59O1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tamF2YXNjcmlwdC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQnY2xhc3MtbmFtZSc6IFtcblx0XHRQcmlzbS5sYW5ndWFnZXMuY2xpa2VbJ2NsYXNzLW5hbWUnXSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVtfJEEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxcLig/OnByb3RvdHlwZXxjb25zdHJ1Y3RvcikpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdrZXl3b3JkJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86XnxcXH0pXFxzKiljYXRjaFxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14uXXxcXC5cXC5cXC5cXHMqKVxcYig/OmFzfGFzc2VydCg/PVxccypcXHspfGFzeW5jKD89XFxzKig/OmZ1bmN0aW9uXFxifFxcKHxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5KD89XFxzKig/Olxce3wkKSl8Zm9yfGZyb20oPz1cXHMqKD86WydcIl18JCkpfGZ1bmN0aW9ufCg/OmdldHxzZXQpKD89XFxzKig/OlsjXFxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XSxcblx0Ly8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG5cdCdmdW5jdGlvbic6IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcblx0J251bWJlcic6IC9cXGIoPzooPzowW3hYXSg/OltcXGRBLUZhLWZdKD86X1tcXGRBLUZhLWZdKT8pK3wwW2JCXSg/OlswMV0oPzpfWzAxXSk/KSt8MFtvT10oPzpbMC03XSg/Ol9bMC03XSk/KSspbj98KD86XFxkKD86X1xcZCk/KStufE5hTnxJbmZpbml0eSlcXGJ8KD86XFxiKD86XFxkKD86X1xcZCk/KStcXC4/KD86XFxkKD86X1xcZCk/KSp8XFxCXFwuKD86XFxkKD86X1xcZCk/KSspKD86W0VlXVsrLV0/KD86XFxkKD86X1xcZCk/KSspPy8sXG5cdCdvcGVyYXRvcic6IC8tLXxcXCtcXCt8XFwqXFwqPT98PT58JiY9P3xcXHxcXHw9P3xbIT1dPT18PDw9P3w+Pj4/PT98Wy0rKi8lJnxeIT08Pl09P3xcXC57M318XFw/XFw/PT98XFw/XFwuP3xbfjpdL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydjbGFzcy1uYW1lJ11bMF0ucGF0dGVybiA9IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfG5ldylcXHMrKVtcXHcuXFxcXF0rLztcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdrZXl3b3JkJywge1xuXHQncmVnZXgnOiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1kdXBlLWNoYXJhY3RlcnMtY2hhcmFjdGVyLWNsYXNzXG5cdFx0cGF0dGVybjogLygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc118XFxiKD86cmV0dXJufHlpZWxkKSlcXHMqKVxcLyg/OlxcWyg/OlteXFxdXFxcXFxcclxcbl18XFxcXC4pKlxcXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2RnaW15dXNdezAsN30oPz0oPzpcXHN8XFwvXFwqKD86W14qXXxcXCooPyFcXC8pKSpcXCpcXC8pKig/OiR8W1xcclxcbiwuOzp9KVxcXV18XFwvXFwvKSkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3JlZ2V4LXNvdXJjZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL14oXFwvKVtcXHNcXFNdKyg/PVxcL1thLXpdKiQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1yZWdleCcsXG5cdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnJlZ2V4XG5cdFx0XHR9LFxuXHRcdFx0J3JlZ2V4LWRlbGltaXRlcic6IC9eXFwvfFxcLyQvLFxuXHRcdFx0J3JlZ2V4LWZsYWdzJzogL15bYS16XSskLyxcblx0XHR9XG5cdH0sXG5cdC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcblx0J2Z1bmN0aW9uLXZhcmlhYmxlJzoge1xuXHRcdHBhdHRlcm46IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfCg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSopXFxzKj0+KSkvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdwYXJhbWV0ZXInOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhmdW5jdGlvbig/OlxccysoPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKT9cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoW14oKV0qXFwpKSsoPz1cXHMqXFwpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKSg/IVxccylbXyRhLXpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqPT4pL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqPT4pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/OlxcYnxcXHN8XikoPyEoPzphc3xhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZCkoPyFbJFxcd1xceEEwLVxcdUZGRkZdKSkoPzooPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqXFxzKilcXChcXHMqfFxcXVxccypcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqXFx7KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH1cblx0XSxcblx0J2NvbnN0YW50JzogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdzdHJpbmcnLCB7XG5cdCdoYXNoYmFuZyc6IHtcblx0XHRwYXR0ZXJuOiAvXiMhLiovLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRhbGlhczogJ2NvbW1lbnQnXG5cdH0sXG5cdCd0ZW1wbGF0ZS1zdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118XFwkXFx7KD86W157fV18XFx7KD86W157fV18XFx7W159XSpcXH0pKlxcfSkrXFx9fCg/IVxcJFxceylbXlxcXFxgXSkqYC8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RlbXBsYXRlLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXmB8YCQvLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKVxcJFxceyg/Oltee31dfFxceyg/Oltee31dfFxce1tefV0qXFx9KSpcXH0pK1xcfS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXCRcXHt8XFx9JC8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH1cblx0fVxufSk7XG5cbmlmIChQcmlzbS5sYW5ndWFnZXMubWFya3VwKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmFkZElubGluZWQoJ3NjcmlwdCcsICdqYXZhc2NyaXB0Jyk7XG5cblx0Ly8gYWRkIGF0dHJpYnV0ZSBzdXBwb3J0IGZvciBhbGwgRE9NIGV2ZW50cy5cblx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzI1N0YW5kYXJkX2V2ZW50c1xuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRBdHRyaWJ1dGUoXG5cdFx0L29uKD86YWJvcnR8Ymx1cnxjaGFuZ2V8Y2xpY2t8Y29tcG9zaXRpb24oPzplbmR8c3RhcnR8dXBkYXRlKXxkYmxjbGlja3xlcnJvcnxmb2N1cyg/OmlufG91dCk/fGtleSg/OmRvd258dXApfGxvYWR8bW91c2UoPzpkb3dufGVudGVyfGxlYXZlfG1vdmV8b3V0fG92ZXJ8dXApfHJlc2V0fHJlc2l6ZXxzY3JvbGx8c2VsZWN0fHNsb3RjaGFuZ2V8c3VibWl0fHVubG9hZHx3aGVlbCkvLnNvdXJjZSxcblx0XHQnamF2YXNjcmlwdCdcblx0KTtcbn1cblxuUHJpc20ubGFuZ3VhZ2VzLmpzID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1maWxlLWhpZ2hsaWdodC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9tYXRjaGVzI1BvbHlmaWxsXG5cdGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuXHRcdEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cdH1cblxuXHR2YXIgTE9BRElOR19NRVNTQUdFID0gJ0xvYWRpbmfigKYnO1xuXHR2YXIgRkFJTFVSRV9NRVNTQUdFID0gZnVuY3Rpb24gKHN0YXR1cywgbWVzc2FnZSkge1xuXHRcdHJldHVybiAn4pyWIEVycm9yICcgKyBzdGF0dXMgKyAnIHdoaWxlIGZldGNoaW5nIGZpbGU6ICcgKyBtZXNzYWdlO1xuXHR9O1xuXHR2YXIgRkFJTFVSRV9FTVBUWV9NRVNTQUdFID0gJ+KcliBFcnJvcjogRmlsZSBkb2VzIG5vdCBleGlzdCBvciBpcyBlbXB0eSc7XG5cblx0dmFyIEVYVEVOU0lPTlMgPSB7XG5cdFx0J2pzJzogJ2phdmFzY3JpcHQnLFxuXHRcdCdweSc6ICdweXRob24nLFxuXHRcdCdyYic6ICdydWJ5Jyxcblx0XHQncHMxJzogJ3Bvd2Vyc2hlbGwnLFxuXHRcdCdwc20xJzogJ3Bvd2Vyc2hlbGwnLFxuXHRcdCdzaCc6ICdiYXNoJyxcblx0XHQnYmF0JzogJ2JhdGNoJyxcblx0XHQnaCc6ICdjJyxcblx0XHQndGV4JzogJ2xhdGV4J1xuXHR9O1xuXG5cdHZhciBTVEFUVVNfQVRUUiA9ICdkYXRhLXNyYy1zdGF0dXMnO1xuXHR2YXIgU1RBVFVTX0xPQURJTkcgPSAnbG9hZGluZyc7XG5cdHZhciBTVEFUVVNfTE9BREVEID0gJ2xvYWRlZCc7XG5cdHZhciBTVEFUVVNfRkFJTEVEID0gJ2ZhaWxlZCc7XG5cblx0dmFyIFNFTEVDVE9SID0gJ3ByZVtkYXRhLXNyY106bm90KFsnICsgU1RBVFVTX0FUVFIgKyAnPVwiJyArIFNUQVRVU19MT0FERUQgKyAnXCJdKSdcblx0XHQrICc6bm90KFsnICsgU1RBVFVTX0FUVFIgKyAnPVwiJyArIFNUQVRVU19MT0FESU5HICsgJ1wiXSknO1xuXG5cdHZhciBsYW5nID0gL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2k7XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIFByaXNtIGBsYW5ndWFnZS14eHh4YCBvciBgbGFuZy14eHh4YCBjbGFzcyB0byB0aGUgZ2l2ZW4gbGFuZ3VhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0TGFuZ3VhZ2VDbGFzcyhlbGVtZW50LCBsYW5ndWFnZSkge1xuXHRcdHZhciBjbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZTtcblx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShsYW5nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblx0fVxuXG5cblx0UHJpc20uaG9va3MuYWRkKCdiZWZvcmUtaGlnaGxpZ2h0YWxsJywgZnVuY3Rpb24gKGVudikge1xuXHRcdGVudi5zZWxlY3RvciArPSAnLCAnICsgU0VMRUNUT1I7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXNhbml0eS1jaGVjaycsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgcHJlID0gLyoqIEB0eXBlIHtIVE1MUHJlRWxlbWVudH0gKi8gKGVudi5lbGVtZW50KTtcblx0XHRpZiAocHJlLm1hdGNoZXMoU0VMRUNUT1IpKSB7XG5cdFx0XHRlbnYuY29kZSA9ICcnOyAvLyBmYXN0LXBhdGggdGhlIHdob2xlIHRoaW5nIGFuZCBnbyB0byBjb21wbGV0ZVxuXG5cdFx0XHRwcmUuc2V0QXR0cmlidXRlKFNUQVRVU19BVFRSLCBTVEFUVVNfTE9BRElORyk7IC8vIG1hcmsgYXMgbG9hZGluZ1xuXG5cdFx0XHQvLyBhZGQgY29kZSBlbGVtZW50IHdpdGggbG9hZGluZyBtZXNzYWdlXG5cdFx0XHR2YXIgY29kZSA9IHByZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdDT0RFJykpO1xuXHRcdFx0Y29kZS50ZXh0Q29udGVudCA9IExPQURJTkdfTUVTU0FHRTtcblxuXHRcdFx0dmFyIHNyYyA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG5cblx0XHRcdHZhciBsYW5ndWFnZSA9IGVudi5sYW5ndWFnZTtcblx0XHRcdGlmIChsYW5ndWFnZSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdC8vIHRoZSBsYW5ndWFnZSBtaWdodCBiZSAnbm9uZScgYmVjYXVzZSB0aGVyZSBpcyBubyBsYW5ndWFnZSBzZXQ7XG5cdFx0XHRcdC8vIGluIHRoaXMgY2FzZSwgd2Ugd2FudCB0byB1c2UgdGhlIGV4dGVuc2lvbiBhcyB0aGUgbGFuZ3VhZ2Vcblx0XHRcdFx0dmFyIGV4dGVuc2lvbiA9ICgvXFwuKFxcdyspJC8uZXhlYyhzcmMpIHx8IFssICdub25lJ10pWzFdO1xuXHRcdFx0XHRsYW5ndWFnZSA9IEVYVEVOU0lPTlNbZXh0ZW5zaW9uXSB8fCBleHRlbnNpb247XG5cdFx0XHR9XG5cblx0XHRcdC8vIHNldCBsYW5ndWFnZSBjbGFzc2VzXG5cdFx0XHRzZXRMYW5ndWFnZUNsYXNzKGNvZGUsIGxhbmd1YWdlKTtcblx0XHRcdHNldExhbmd1YWdlQ2xhc3MocHJlLCBsYW5ndWFnZSk7XG5cblx0XHRcdC8vIHByZWxvYWQgdGhlIGxhbmd1YWdlXG5cdFx0XHR2YXIgYXV0b2xvYWRlciA9IFByaXNtLnBsdWdpbnMuYXV0b2xvYWRlcjtcblx0XHRcdGlmIChhdXRvbG9hZGVyKSB7XG5cdFx0XHRcdGF1dG9sb2FkZXIubG9hZExhbmd1YWdlcyhsYW5ndWFnZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGxvYWQgZmlsZVxuXHRcdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdFx0eGhyLm9wZW4oJ0dFVCcsIHNyYywgdHJ1ZSk7XG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuXHRcdFx0XHRcdGlmICh4aHIuc3RhdHVzIDwgNDAwICYmIHhoci5yZXNwb25zZVRleHQpIHtcblx0XHRcdFx0XHRcdC8vIG1hcmsgYXMgbG9hZGVkXG5cdFx0XHRcdFx0XHRwcmUuc2V0QXR0cmlidXRlKFNUQVRVU19BVFRSLCBTVEFUVVNfTE9BREVEKTtcblxuXHRcdFx0XHRcdFx0Ly8gaGlnaGxpZ2h0IGNvZGVcblx0XHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHRcdFx0UHJpc20uaGlnaGxpZ2h0RWxlbWVudChjb2RlKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBtYXJrIGFzIGZhaWxlZFxuXHRcdFx0XHRcdFx0cHJlLnNldEF0dHJpYnV0ZShTVEFUVVNfQVRUUiwgU1RBVFVTX0ZBSUxFRCk7XG5cblx0XHRcdFx0XHRcdGlmICh4aHIuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0gRkFJTFVSRV9NRVNTQUdFKHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSBGQUlMVVJFX0VNUFRZX01FU1NBR0U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0eGhyLnNlbmQobnVsbCk7XG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQgPSB7XG5cdFx0LyoqXG5cdFx0ICogRXhlY3V0ZXMgdGhlIEZpbGUgSGlnaGxpZ2h0IHBsdWdpbiBmb3IgYWxsIG1hdGNoaW5nIGBwcmVgIGVsZW1lbnRzIHVuZGVyIHRoZSBnaXZlbiBjb250YWluZXIuXG5cdFx0ICpcblx0XHQgKiBOb3RlOiBFbGVtZW50cyB3aGljaCBhcmUgYWxyZWFkeSBsb2FkZWQgb3IgY3VycmVudGx5IGxvYWRpbmcgd2lsbCBub3QgYmUgdG91Y2hlZCBieSB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gW2NvbnRhaW5lcj1kb2N1bWVudF1cblx0XHQgKi9cblx0XHRoaWdobGlnaHQ6IGZ1bmN0aW9uIGhpZ2hsaWdodChjb250YWluZXIpIHtcblx0XHRcdHZhciBlbGVtZW50cyA9IChjb250YWluZXIgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1IpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgKGVsZW1lbnQgPSBlbGVtZW50c1tpKytdKTspIHtcblx0XHRcdFx0UHJpc20uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0dmFyIGxvZ2dlZCA9IGZhbHNlO1xuXHQvKiogQGRlcHJlY2F0ZWQgVXNlIGBQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQuaGlnaGxpZ2h0YCBpbnN0ZWFkLiAqL1xuXHRQcmlzbS5maWxlSGlnaGxpZ2h0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICghbG9nZ2VkKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1ByaXNtLmZpbGVIaWdobGlnaHQgaXMgZGVwcmVjYXRlZC4gVXNlIGBQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQuaGlnaGxpZ2h0YCBpbnN0ZWFkLicpO1xuXHRcdFx0bG9nZ2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0UHJpc20ucGx1Z2lucy5maWxlSGlnaGxpZ2h0LmhpZ2hsaWdodC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHR9O1xuXG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==