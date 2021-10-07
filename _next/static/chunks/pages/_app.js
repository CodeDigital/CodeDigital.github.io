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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  font-family: Monaco, monospace;\n}\n\nbody {\n  background-color: #222222;\n  font-size: 14px;\n}\n\ninput[type=search]::-webkit-search-cancel-button {\n  display: none;\n}\n\ninput[type=search]::-ms-clear {\n  display: none;\n}\n\n.button-regular {\n  cursor: pointer;\n  padding: 5px;\n  font-size: 11px;\n  background-color: #FF2277;\n  color: #FDFFFC;\n  margin: 10px;\n  position: absolute;\n  color: #FDFFFC;\n  border: none;\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n  font-family: Monaco, monospace;\n}\n\n.page-404 {\n  text-align: center;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.page-404 * {\n  margin: 0px;\n  padding: 0px;\n}\n\n.page-404 h1 {\n  text-shadow: greenyellow -1px 0px 0px, cyan 0.5px -1px 0px, red 1.5px 1px 0px;\n  font-size: 42px;\n  margin: 0;\n}\n\n.page-404 h2 {\n  font-size: 28px;\n  margin: 0;\n}\n\n.page-404 img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 40vw;\n}\n\n.page-404 img:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n          filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n}\n\n.page-404 h2:hover {\n  -webkit-filter: drop-shadow(greenyellow -1px 0px 0px) drop-shadow(cyan 0.5px -1px 0px) drop-shadow(red 1.5px 1px 0px);\n          filter: drop-shadow(greenyellow -1px 0px 0px) drop-shadow(cyan 0.5px -1px 0px) drop-shadow(red 1.5px 1px 0px);\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.shadowed:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: #222222 1px 1px 10px;\n          box-shadow: #222222 1px 1px 10px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #222222;\n  color: #FDFFFC;\n  font-family: Monaco, monospace;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n}\n\na {\n  color: white;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  cursor: pointer;\n}\n\na:hover {\n  text-shadow: 0 0 5px #FDFFFC;\n}\n\ncode {\n  background-color: #393E41;\n  padding: 3px;\n  border-radius: 5px;\n}\n\n.header {\n  font-family: Monaco, monospace;\n  background-color: #393E41;\n  width: 100%;\n  height: 75px;\n}\n\n.header ::slotted {\n  float: left;\n}\n\n.header img {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  height: 65px;\n  margin: 5px;\n}\n\n.header img:hover {\n  -webkit-transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n          transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n  -webkit-filter: drop-shadow(greenyellow -2px 0px 0px) drop-shadow(cyan 1.5px -2px 0px) drop-shadow(red 2.5px 1.5px 0px);\n          filter: drop-shadow(greenyellow -2px 0px 0px) drop-shadow(cyan 1.5px -2px 0px) drop-shadow(red 2.5px 1.5px 0px);\n}\n\n.header h1 {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n\n.header h1:hover {\n  -webkit-filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n          filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n  -webkit-transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n          transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n}\n\n.anniversary {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #FF2277), color-stop(100%, aqua));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #FF2277 0%, aqua 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #FF2277 0%, aqua 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffff\", endColorstr=\"#ff00ff\",GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.phoenix {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #C52437), color-stop(100%, #F7E27C));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.vhs-color {\n  text-shadow: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3.5px 0px;\n}\n\n.tertiary-text-color {\n  color: #FF2277;\n}\n\n.main-gradient-text {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #C52437), color-stop(100%, #F7E27C));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.main-body {\n  top: 75px;\n  height: -webkit-calc(100% - 75px);\n  height: calc(100% - 75px);\n}\n\n.popup {\n  display: block;\n  position: absolute;\n  z-index: 101;\n  border: none;\n  top: 75px;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  text-align: center;\n}\n\n.popup-button {\n  display: block;\n  position: absolute;\n  z-index: 101;\n  border: none;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  background: black;\n  background: transparent\\9 ;\n  background: rgba(0, 0, 0, 0.8);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#22000000,endColorstr=#22000000);\n  zoom: 1;\n  width: 100vw;\n}\n\n.popup-container {\n  z-index: 110;\n  display: block;\n  position: absolute;\n  width: 100vw;\n  text-align: center;\n  padding: 50px 0px;\n  pointer-events: none;\n}\n\n.popup-div {\n  display: block;\n  font-size: larger;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 500px;\n  -webkit-box-shadow: 10px 10px 0px #FF2277;\n          box-shadow: 10px 10px 0px #FF2277;\n  color: #FDFFFC;\n  background-color: #222222;\n  padding: 20px 50px;\n  pointer-events: all;\n}\n\n.popup h1 {\n  text-align: center;\n}\n\n.popup code {\n  border-radius: 0;\n  background-color: #FF2277;\n  -webkit-box-shadow: inset 0 0 10px #393E41;\n  box-shadow: inset 0 0 10px #393E41;\n}\n\n.popup > div small {\n  text-align: center;\n  display: block;\n  color: #FF2277;\n  margin-top: 20px;\n}\n\n.share-button-div {\n  text-align: center;\n}\n\n.share-button-div > * {\n  margin: 5px;\n  -webkit-transition: ease-in 0.3s;\n  transition: ease-in 0.3s;\n}\n\n.share-button-div > *:hover .share-button-icon {\n  -webkit-box-shadow: #FF2277 3px 2px;\n          box-shadow: #FF2277 3px 2px;\n}\n\n.share-button-icon {\n  border-radius: 1000px;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.share-count-wrapper > * {\n  margin-left: -20px;\n  margin-top: -5px;\n  padding: 3px 6px;\n  background-color: #393E41;\n  color: #FDFFFC;\n  border-radius: 8px;\n}\n\n.share-link-copy {\n  padding: 7.5px 10px;\n  padding-top: 7;\n  padding-bottom: 8;\n  background-color: #FF2277;\n  color: #FDFFFC;\n  border: none;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.share-link {\n  text-align: center;\n  width: 320px;\n  padding: 7.5px;\n  text-overflow: ellipsis;\n  border: none;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.navigator {\n  background-color: #FF2277;\n  height: 35px;\n  top: 75px;\n  width: 100%;\n  margin: 0;\n}\n\n.navigator img {\n  display: block;\n  height: 25px;\n  margin: 5px;\n  right: 5px;\n  pointer-events: none;\n  position: absolute;\n}\n\n.navigator input {\n  -webkit-box-shadow: inset 0 0 10px #393E41;\n  box-shadow: inset 0 0 10px #393E41;\n  font-size: 15px;\n  background: #FF2277;\n  border: none;\n  color: #FDFFFC;\n  width: -webkit-calc(100% - 45px);\n  width: calc(100% - 45px);\n  height: 100%;\n  padding: 0 10px;\n  padding-right: 35px;\n}\n\n.navigator input::-webkit-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input::-moz-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input:-ms-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input::placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator button {\n  -webkit-transition: ease-in 0.3s;\n  transition: ease-in 0.3s;\n  color: #FDFFFC;\n  display: block;\n  position: absolute;\n  height: 30px;\n  background-color: #222222;\n  margin: 1.25px;\n  right: 45px;\n  border: none;\n  padding: 8px 8px;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.navigator button:hover {\n  -webkit-box-shadow: #393E41 7.5px 2.5px;\n          box-shadow: #393E41 7.5px 2.5px;\n}\n\n.navigator button input {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  border: none;\n  color: #FDFFFC;\n  width: 15px;\n  height: 15px;\n  float: left;\n}\n\n.navigator button label {\n  margin-top: 0px;\n  margin-left: 8px;\n  float: right;\n}\n\n.project-list {\n  margin: 0;\n  height: -webkit-calc(100vh - 35px - 75px - 70px);\n  height: calc(100vh - 35px - 75px - 70px);\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.link-disabled {\n  display: none;\n}\n\n.project-thumbnail {\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n          box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n  height: 250px;\n  width: 250px;\n  display: inline-table;\n  text-align: right;\n  position: relative;\n  padding: 0;\n  margin: 30px;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.project-thumbnail:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n          box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n  text-shadow: none;\n}\n\n.project-thumbnail:last-of-type {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  margin-bottom: 50px;\n}\n\n.project-thumbnail div {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  text-align: center;\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.project-thumbnail div * {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  padding: 0px 20px;\n}\n\n.project-thumbnail div p {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.project-thumbnail small {\n  text-align: right;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  display: block;\n  position: absolute;\n  margin: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  right: 0;\n  bottom: 0;\n}\n\n.post-thumbnail {\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n          box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n  height: 250px;\n  width: 250px;\n  display: inline-table;\n  text-align: right;\n  position: relative;\n  padding: 0;\n  margin: 30px;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.post-thumbnail:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n          box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n  text-shadow: none;\n}\n\n.post-thumbnail:last-of-type {\n  margin-bottom: 50px;\n}\n\n.post-thumbnail div {\n  text-align: center;\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.post-thumbnail div * {\n  padding: 0px 20px;\n}\n\n.post-thumbnail div p {\n  margin-top: 10px;\n}\n\n.post-thumbnail small {\n  text-align: right;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  display: block;\n  position: absolute;\n  margin: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  right: 0;\n  bottom: 0;\n}\n\n.project-page {\n  margin: 0;\n  padding: 0;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  width: 100%;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.close-icon {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  margin: 5px;\n  position: absolute;\n  float: right;\n  z-index: 100;\n  right: 35px;\n  margin-top: 15px;\n  -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n  filter: drop-shadow(6px 5px 5px #FF2277);\n  cursor: pointer;\n}\n\n.close-icon:hover {\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.share-icon {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  margin: 5px;\n  position: absolute;\n  float: right;\n  right: 90px;\n  z-index: 100;\n  margin-top: 15px;\n  -webkit-filter: drop-shadow(6px 5px 2px #FF2277);\n  filter: drop-shadow(6px 5px 2px #FF2277);\n  cursor: pointer;\n}\n\n.share-icon:hover {\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n}\n\n.about-h1 {\n  margin: 10px;\n  margin-bottom: 20px;\n}\n\n.about-h2 {\n  margin: 10px;\n  margin-bottom: -5px;\n  text-align: left;\n}\n\n.about-p {\n  text-align: left;\n  margin-bottom: -7.5px;\n  padding-bottom: 7.5px;\n  text-align: justify;\n}\n\n.about-me {\n  margin-top: 10px;\n  background-color: #FF2277;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n  padding: 15px;\n  margin-bottom: 40px;\n}\n\n.about-me img {\n  -webkit-box-shadow: #222222 1px 1px 10px;\n          box-shadow: #222222 1px 1px 10px;\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n}\n\n.about-me img:hover {\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n}\n\n.contact-container {\n  width: -webkit-calc(100vw - 100px);\n  width: calc(100vw - 100px);\n  padding: 0 50px;\n  padding-top: 50px;\n}\n\n.contact-left {\n  float: left;\n  width: 40%;\n  text-align: center;\n}\n\n.contact-right h1 {\n  margin-bottom: 20px;\n}\n\n.contact-p {\n  background-color: #FF2277;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n  padding: 20px;\n  text-align: justify;\n}\n\n.contact-thumbnail {\n  display: block;\n  background-color: #393E41;\n  width: 100%;\n  height: 40px;\n  margin-bottom: 20px;\n  padding: 10px;\n  text-decoration: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #FF2277;\n          box-shadow: 10px 7.5px 1px 0px #FF2277;\n}\n\n.contact-thumbnail:hover {\n  -webkit-box-shadow: 5px 5px 1px 0px #FF2277;\n          box-shadow: 5px 5px 1px 0px #FF2277;\n}\n\n.contact-thumbnail div {\n  float: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 40px;\n  display: block;\n  padding: 0 20px;\n  text-decoration: none;\n  margin-top: -5px;\n  width: -webkit-calc(100% - 80px);\n  width: calc(100% - 80px);\n  text-align: right;\n}\n\n.contact-thumbnail img {\n  width: 40px;\n  float: left;\n}\n\n.p5-info {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  z-index: 1;\n  border-bottom: 2px solid #393E41;\n}\n\n.p5-info h1 {\n  font-size: 42px;\n  text-align: left;\n  margin-left: 100px;\n  padding-top: 10px;\n}\n\n.p5-info p {\n  display: none;\n  visibility: hidden;\n  opacity: 1;\n}\n\n.p5-info input {\n  background-color: #FF2277;\n}\n\n.p5-info button {\n  background-color: #FF2277;\n  color: #FDFFFC;\n  margin: 10px;\n  position: absolute;\n  color: #FDFFFC;\n  border: none;\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n}\n\n.p5-info-slide {\n  background: none;\n  border: none;\n  height: 75px;\n  position: fixed;\n  z-index: 100;\n  left: 25px;\n  margin: 5px;\n  margin-top: 15px;\n}\n\n.p5-info-slide img {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n  filter: drop-shadow(6px 5px 5px #FF2277);\n}\n\n.p5-info-slide img:hover {\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.p5-info-show {\n  z-index: 5;\n  border-bottom: 2px solid #FF2277;\n  -webkit-box-shadow: 0px 10px 10px black;\n          box-shadow: 0px 10px 10px black;\n}\n\n.p5-info-show p {\n  opacity: 1;\n  display: block;\n  visibility: visible;\n}\n\n.p5-info-show::after {\n  z-index: 20;\n  content: \"Hide this information panel with the ^ button above\";\n  font-style: italic;\n  font-size: 10.5px;\n  display: inline;\n  position: absolute;\n  left: 10px;\n}\n\n.p5-canvas {\n  width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: absolute;\n  z-index: 0;\n  top: 150px;\n  height: -webkit-calc(100vh - 75px - 70px - 75px);\n  height: calc(100vh - 75px - 70px - 75px);\n  text-align: center;\n  cursor: crosshair;\n}\n\n.weblog-signature {\n  margin-top: 15px;\n  text-shadow: black 1px 1px 5px;\n  padding-left: 30px;\n  color: #FF2277;\n  font-weight: normal;\n  margin-bottom: 50px;\n}\n\n.music-release-banner {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 0% 20%;\n  background-size: cover;\n  background-blend-mode: darken;\n  border-bottom: 1px solid white;\n  text-align: center;\n  padding: 15px;\n  padding-top: 0px;\n}\n\n.music-release-banner p, .music-release-banner h1, .music-release-banner h2, .music-release-banner h3 {\n  display: block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  margin: 0 auto;\n  padding: 0;\n  text-shadow: 1px 1px 5px black;\n}\n\n.submergence-hover {\n  -webkit-transition: ease-out 0.2s;\n  transition: ease-out 0.2s;\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.submergence-hover img {\n  -webkit-transition: ease-out 0.2s;\n  transition: ease-out 0.2s;\n}\n\n.submergence-hover:hover {\n  -webkit-filter: drop-shadow(6px 5px 0px #FF2277);\n  filter: drop-shadow(6px 5px 0px #FF2277);\n}\n\n.footer {\n  height: 70px;\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  margin: 0;\n}\n\n.footer hr {\n  border-color: #FF2277;\n}\n\n.footer button, .footer a {\n  font-size: 14px;\n  padding: 0;\n  color: #FDFFFC;\n  text-decoration: underline;\n  background: none;\n  border: none;\n}\n\n.footer a {\n  text-shadow: 2px 2px 4px #222222;\n}\n\n.footer button:hover, .footer a:hover {\n  text-shadow: 0 0 5px #FDFFFC;\n}\n\n.copyright {\n  margin-top: 0px;\n  color: #FF2277;\n  font-size: 14px;\n  text-shadow: #222222 2px 2px 1px;\n}\n\n@media only screen and (min-width: 769px) {\n  body {\n    overflow: hidden;\n  }\n\n  .header {\n    height: 75px;\n  }\n\n  .header h1, .header img {\n    float: left;\n    font-size: 55px;\n  }\n\n  .header h1 {\n    margin-top: 3px;\n    padding: 0;\n  }\n\n  .button-regular {\n    padding: 7.5px 12px;\n  }\n\n  .hide-on-web {\n    visibility: hidden;\n  }\n\n  .hide-on-mobile {\n    visibility: visible;\n  }\n\n  .popup {\n    height: -webkit-calc(100% - 75px - 70px);\n    height: calc(100% - 75px - 70px);\n  }\n\n  .navigator img {\n    display: block;\n  }\n\n  .navigator button {\n    right: 45px;\n  }\n\n  .project-list {\n    margin: 0;\n    height: -webkit-calc(100vh - 35px - 75px - 70px);\n    height: calc(100vh - 35px - 75px - 70px);\n    padding: 0px 50px;\n  }\n\n  .project-thumbnail {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    height: 250px;\n    width: 250px;\n  }\n\n  .post-thumbnail {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    height: 250px;\n    width: 250px;\n  }\n\n  .project-thumbnail:first-of-type, .post-thumbnail:first-of-type {\n    margin-top: 50px;\n  }\n\n  .project-thumbnail:last-of-type, .post-thumbnail:last-of-type {\n    margin-bottom: 200px;\n  }\n\n  .project-thumbnail p {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: none;\n  }\n\n  .project-thumbnail:hover p {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: block;\n  }\n\n  .project-thumbnail:hover small {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: none;\n  }\n\n  .project-thumbnail:hover div {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n  }\n\n  .close-icon {\n    height: 40px;\n  }\n\n  .project-page {\n    height: -webkit-calc(100vh - 75px - 70px);\n    height: calc(100vh - 75px - 70px);\n  }\n\n  .contact-left {\n    float: left;\n    width: 40%;\n    text-align: center;\n  }\n\n  .contact-right {\n    float: right;\n    left: 40vw;\n    text-align: center;\n    position: fixed;\n    width: -webkit-calc(60vw - 100px);\n    width: calc(60vw - 100px);\n    margin-left: 10px;\n    padding: 0px 50px;\n  }\n\n  .contact-right h1 {\n    margin-bottom: 20px;\n  }\n\n  .about {\n    margin: 0 20%;\n    margin-bottom: 40px;\n  }\n\n  .about-me {\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n  }\n\n  .about-me img {\n    width: -webkit-calc(50% - 42.5px);\n    width: calc(50% - 42.5px);\n    display: inline-block;\n    right: 0;\n    -webkit-align-self: center;\n            align-self: center;\n  }\n\n  .about-me div {\n    width: 50%;\n    padding-right: 30px;\n    -webkit-align-self: center;\n            align-self: center;\n  }\n\n  .about-me div p {\n    width: 100%;\n  }\n\n  .about-me:last-child {\n    padding-bottom: 20px;\n  }\n\n  .p5-info {\n    height: 75px;\n    background-color: #222222;\n  }\n\n  .p5-info h1 {\n    font-size: 42px;\n    margin-left: 100px;\n    padding-top: 10px;\n  }\n\n  .p5-info p {\n    max-width: 750px;\n    margin: 10px auto;\n  }\n\n  .p5-info input {\n    position: static;\n    display: block;\n    margin-left: 5px;\n    margin-bottom: -5px;\n  }\n\n  .p5-info button {\n    padding: 7.5px 12px;\n    margin: 10px;\n    position: absolute;\n    float: right;\n    top: 10px;\n    right: 145px;\n  }\n\n  .p5-info-slide {\n    background: none;\n    border: none;\n    height: 75px;\n    position: fixed;\n    left: 25px;\n    margin: 5px;\n    margin-top: 15px;\n  }\n\n  .p5-info-slide img {\n    -webkit-transition: ease-in 0.2s;\n    transition: ease-in 0.2s;\n    height: 40px;\n    -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n    filter: drop-shadow(6px 5px 5px #FF2277);\n  }\n\n  .p5-info-show {\n    height: auto;\n    padding-bottom: 10px;\n  }\n\n  .p5-info-show::after {\n    margin-top: 20px;\n  }\n\n  .submergence-hover br {\n    display: none;\n  }\n\n  .weblog-post {\n    padding: 10px 30px;\n  }\n\n  .weblog-post * {\n    max-width: 750px;\n    margin: 2px auto;\n    text-align: center;\n  }\n\n  .weblog-post small {\n    display: block;\n  }\n\n  .weblog-post p {\n    text-align: justify;\n    line-height: 25px;\n  }\n\n  .weblog-post h1 {\n    max-width: -webkit-calc(100vw - 250px);\n    max-width: calc(100vw - 250px);\n    display: block;\n  }\n\n  .footer {\n    position: fixed;\n    background-color: #393E41;\n    height: 70px;\n  }\n\n  .footer button, .footer a {\n    display: inline-block;\n    margin: 5px 15px;\n    margin-top: 15px;\n  }\n}\n@media only screen and (max-width: 769px) {\n  body {\n    font-size: 11px;\n    height: 100%;\n    width: 100vw;\n  }\n\n  html {\n    height: 100%;\n  }\n\n  code {\n    padding: 0px 4px;\n  }\n\n  .main-body {\n    height: 100%;\n    width: 100vw;\n  }\n\n  .header {\n    text-align: center;\n    height: 40px;\n    width: 100vw;\n  }\n\n  .header h1 {\n    font-size: 28px;\n    margin: 0px;\n    margin-top: 2px;\n    margin-left: 8px;\n    float: left;\n  }\n\n  .header img {\n    height: 30px;\n    float: right;\n  }\n\n  .hide-on-web {\n    visibility: visible;\n  }\n\n  .hide-on-mobile {\n    visibility: hidden;\n  }\n\n  .popup {\n    display: none;\n    top: 40px;\n    height: -webkit-calc(100% - 40px - 70px);\n    height: calc(100% - 40px - 70px);\n  }\n\n  .navigator img {\n    display: none;\n  }\n\n  .navigator button {\n    right: 5px;\n    font-size: 11px;\n  }\n\n  .navigator input {\n    font-size: 11px;\n    width: -webkit-calc(100% - 45px);\n    width: calc(100% - 45px);\n  }\n\n  .project-thumbnail {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    -webkit-box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n            box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n  }\n\n  .project-thumbnail:first-of-type {\n    margin-top: 20px;\n  }\n\n  .project-thumbnail:last-of-type {\n    margin-bottom: 100px;\n  }\n\n  .post-thumbnail {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    -webkit-box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n            box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n  }\n\n  .post-thumbnail:last-of-type {\n    margin-bottom: 100px;\n  }\n\n  .post-thumbnail:first-of-type {\n    margin-top: 20px;\n  }\n\n  .project-thumbnail p {\n    display: none;\n  }\n\n  .project-thumbnail h2 {\n    padding: 0px 40px;\n  }\n\n  .project-list {\n    margin-top: 2px;\n    height: -webkit-calc(100% - (35px + 40px + 70px));\n    height: calc(100% - (35px + 40px + 70px));\n    overflow-y: auto;\n    margin-left: -10px;\n    position: absolute;\n    text-align: center;\n  }\n\n  .close-icon {\n    position: fixed;\n    right: 0px;\n    margin-top: 2px;\n    height: 30px;\n  }\n\n  .project-page {\n    height: -webkit-calc(100% - (40px + 70px));\n    height: calc(100% - (40px + 70px));\n    position: absolute;\n  }\n\n  .share-icon {\n    display: none;\n  }\n\n  .contact-container {\n    width: -webkit-calc(100vw - 100px);\n    width: calc(100vw - 100px);\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .contact-left {\n    width: -webkit-calc(100% - 60px);\n    width: calc(100% - 60px);\n    text-align: center;\n    float: none;\n    padding: 0 30px;\n    margin-left: -25px;\n  }\n\n  .contact-right {\n    float: none;\n    left: 0px;\n    text-align: center;\n    position: relative;\n    width: 100%;\n    padding: 0;\n  }\n\n  .contact-right h1 {\n    margin-bottom: 20px;\n  }\n\n  .contact-thumbnail div {\n    font-size: 20px;\n    margin-top: 10px;\n  }\n\n  .about {\n    margin: 0 20px;\n  }\n\n  .about-me {\n    padding: 15px;\n  }\n\n  .about-me img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    width: 50%;\n  }\n\n  .about-me p {\n    display: block;\n  }\n\n  .p5-info h1 {\n    font-size: 22px;\n    margin-left: 37.5px;\n    padding: 5px;\n    max-width: 45%;\n    max-width: -webkit-calc(100% - 200px);\n    max-width: calc(100% - 200px);\n    max-height: 26px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  .p5-info p {\n    text-align: justify;\n    padding: 5px;\n  }\n\n  .p5-info button, .p5-info input {\n    font-size: 11px;\n    margin-top: 5px;\n    position: static;\n    display: block;\n    float: right;\n    margin-right: 5px;\n    color: #FDFFFC;\n  }\n\n  .p5-info button {\n    padding: 5px;\n    margin: 7.5px;\n    position: absolute;\n    top: -2px;\n    right: 35px;\n  }\n\n  .p5-info input {\n    width: 165px;\n    position: absolute;\n    margin: 0;\n    margin-top: -2px;\n    margin-left: 5px;\n  }\n\n  .p5-info-slide {\n    background: none;\n    border: none;\n    height: 40px;\n    position: fixed;\n    left: 0px;\n    margin: 5px;\n    margin-top: 3px;\n  }\n\n  .p5-info-slide img {\n    -webkit-transition: ease-in 0.2s;\n    transition: ease-in 0.2s;\n    height: 30px;\n    -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n    filter: drop-shadow(6px 5px 5px #FF2277);\n  }\n\n  .p5-info-show {\n    height: auto;\n    padding-bottom: 5px;\n    background-color: #222222;\n  }\n\n  .p5-info-show::after {\n    margin-top: 20px;\n  }\n\n  .p5-info-show h1 {\n    max-height: inherit !important;\n    white-space: normal;\n    text-overflow: ellipsis;\n  }\n\n  .p5-canvas {\n    top: 40px;\n    height: -webkit-calc(100% - 40px);\n    height: calc(100% - 40px);\n    padding: 0;\n  }\n\n  .submergence-hover br {\n    display: block;\n  }\n\n  .weblog-post {\n    padding: 0 10px;\n    text-align: center;\n    margin-top: 10px;\n  }\n\n  .weblog-post p {\n    text-align: left;\n    line-height: 20px;\n  }\n\n  .footer {\n    width: 100%;\n    height: 70px;\n    background-color: #393E41;\n    position: fixed;\n  }\n\n  .footer button, .footer a {\n    display: inline-block;\n    margin: 7.5px 20px;\n    margin-top: 15px;\n  }\n}", "",{"version":3,"sources":["webpack://index.scss","webpack://navigation.scss","webpack://thumbnail.scss","webpack://project.scss","webpack://web-view.scss","webpack://mobile-view.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-color: #222222;\r\n$secondary-color: #393E41;\r\n$tertiary-color: #FF2277;\r\n// $tertiary-color: #CC0044;\r\n$primary-text-color: #FDFFFC;\r\n$secondary-text-color: #393E41;\r\n$tertiary-text-color: #FF2277;\r\n// $tertiary-text-color: #EE1166;\r\n$phoenix-primary-color: #C52437;\r\n$phoenix-secondary-color: #F08843;\r\n$phoenix-tertiary-color: #F7E27C;\r\n\r\n// $tertiary-color: $phoenix-primary-color;\r\n// $tertiary-text-color: $phoenix-secondary-color;\r\n\r\n$title-font: Monaco, monospace;\r\n// $body-font: Arial, Helvetica, sans-serif;\r\n// $body-font: Monospace;\r\n$body-font: Monaco, monospace;\r\n$header-height: 75px;\r\n$search-height: 35px;\r\n$thumbnail-size: 250px;\r\n$bottom-height: 70px;\r\n$regular-font-size: 14px;\r\n$p5-info-height: 75px;\r\n$thumbnail-transition: ease-in 0.25s;\r\n$vhs-shadows-l: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3px 0px;\r\n$vhs-shadows-m: greenyellow -2px 0px 0px, cyan 1.5px -2px 0px, red 2.5px 1.5px 0px;\r\n$vhs-shadows-s: greenyellow -1px 0px 0px, cyan 0.5px -1px 0px, red 1.5px 1px 0px;\r\n$vhs-shadows-drop-l: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\r\n$vhs-shadows-drop-m: drop-shadow(greenyellow -2px 0px 0px) drop-shadow(cyan 1.5px -2px 0px) drop-shadow(red 2.5px 1.5px 0px);\r\n$vhs-shadows-drop-s: drop-shadow(greenyellow -1px 0px 0px) drop-shadow(cyan 0.5px -1px 0px) drop-shadow(red 1.5px 1px 0px);\r\n$grey-shadow: $primary-color 1px 1px 10px;\r\n$grey-shadow-drop: drop-shadow($primary-color 1px 1px 10px);\r\n\r\n* {\r\n  margin: 0;\r\n  font-family: $body-font;\r\n}\r\n\r\nbody {\r\n    background-color: $primary-color;\r\n    font-size:$regular-font-size;\r\n}\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button{\r\n    //-webkit-appearance: none;\r\n    display: none;\r\n}\r\n\r\ninput[type=\"search\"]::-ms-clear{\r\n    display: none;\r\n}\r\n\r\n.button-regular{\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    font-size: 11px;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    margin: 10px;\r\n    position: absolute;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    font-family: $body-font;\r\n}\r\n\r\n.page-404{\r\n    text-align: center;\r\n    // padding: 10%;\r\n    // padding: 10px;\r\n    // display: block;\r\n\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -ms-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-404 *{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.page-404 h1{\r\n    text-shadow: $vhs-shadows-s;\r\n    font-size: 3 * $regular-font-size;\r\n    margin: 0;\r\n}\r\n\r\n.page-404 h2{\r\n    font-size: 2 * $regular-font-size;\r\n    margin: 0;\r\n}\r\n\r\n.page-404 img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    // width: 100%;\r\n    width: 40vw;\r\n    // filter:/*drop-shadow($tertiary-color 0px 0px 50px) */\r\n    //     // drop-shadow($tertiary-color 40px 0px 0px)\r\n    //     // drop-shadow($tertiary-color -40px 0px 0px)\r\n    //     drop-shadow($tertiary-color 0px 40px 0px);\r\n    //     // drop-shadow($tertiary-color 0px -40px 0px);\r\n}\r\n\r\n.page-404 img:hover{\r\n    transition: $thumbnail-transition;\r\n    filter: $vhs-shadows-drop-l;\r\n}\r\n\r\n.page-404 h2:hover{\r\n    filter:$vhs-shadows-drop-s;\r\n    transition: $thumbnail-transition;\r\n\r\n}\r\n\r\n.shadowed:hover{\r\n    transition: $thumbnail-transition;\r\n\r\n    box-shadow: $grey-shadow;\r\n    // box-shadow: $vhs-shadows-l;\r\n    // text-shadow: $vhs-shadows-l;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color:$primary-color;\r\n    color:$primary-text-color;\r\n    font-family: $body-font;\r\n    height: 100vh;\r\n    width: 100vw;;\r\n    overflow: hidden;\r\n}\r\n\r\na {\r\n    color:white;\r\n    transition: $thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    cursor: pointer;\r\n}\r\n\r\na:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    text-shadow: 0 0 5px $primary-text-color;\r\n}\r\n\r\ncode {\r\n    background-color: $secondary-color;\r\n    padding: 3px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.header {\r\n    font-family: $title-font;\r\n    background-color: $secondary-color;\r\n    width: 100%;\r\n    height: $header-height;\r\n}\r\n\r\n.header ::slotted {\r\n    float:left;\r\n}\r\n\r\n.header img {\r\n    transition: $thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    height: ($header-height - 10);\r\n    margin: 5px;\r\n    // box-shadow: greenyellow -1.5px 1.5px 0px, cyan 0.5px -1.5px 0px, red 1.5px 1.5px 0px;\r\n\r\n}\r\n\r\n.header img:hover {\r\n        // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n        transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n        filter: $vhs-shadows-drop-m;\r\n        // filter: $grey-shadow-drop;\r\n}\r\n\r\n.header h1 {\r\n    transition: $thumbnail-transition;\r\n    // // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n}\r\n\r\n.header h1:hover{\r\n    filter: $vhs-shadows-drop-l;\r\n    transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.anniversary {\r\n    background: -moz-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $tertiary-color), color-stop(100%, rgba(0,255,255,1))); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffff', endColorstr='#ff00ff',GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.phoenix {\r\n    background: -moz-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $phoenix-primary-color), color-stop(100%, $phoenix-tertiary-color)); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.vhs-color {\r\n    // mix-blend-mode: difference; \r\n    // color: #00f;\r\n    // opacity: 0.5;\r\n    // text-shadow: #0f0 5px 5px 1px, #f00 10px 10px 1px; //, #00f -5px -5px 0px;\r\n    text-shadow: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3.5px 0px;\r\n}\r\n\r\n.tertiary-text-color{\r\n    color: $tertiary-text-color;\r\n}\r\n\r\n.main-gradient-text {\r\n    background: -moz-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $phoenix-primary-color), color-stop(100%, $phoenix-tertiary-color)); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n// .header h1:hover {\r\n//     // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n//     // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n// }\r\n\r\n.main-body{\r\n    top: $header-height;\r\n    height: calc(100% - #{$header-height});\r\n}\r\n\r\n.popup{\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 101;\r\n    border:none;\r\n    top: $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    text-align: center;\r\n}\r\n\r\n.popup-button{\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 101;\r\n    border:none;\r\n    // top: $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    background:rgb(0,0,0);\r\n    background: transparent\\9;\r\n    background:rgba(0,0,0,0.8);\r\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#22000000,endColorstr=#22000000);\r\n    zoom: 1;\r\n    width:100vw;\r\n}\r\n\r\n.popup-container{\r\n    z-index: 110;\r\n    display: block;\r\n    position: absolute;\r\n    width: 100vw;\r\n    text-align: center;\r\n    // padding:100px 0px;\r\n    padding: 50px 0px;\r\n    pointer-events: none;\r\n}\r\n\r\n.popup-div {\r\n    display: block;\r\n    font-size: larger;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n    // margin-top:50px;\r\n    width: 500px;\r\n    // box-shadow: 10px 10px 10px black;\r\n    box-shadow: 10px 10px 0px $tertiary-color;\r\n    // border-radius: 100px;\r\n    color:$primary-text-color;\r\n    background-color: $primary-color;\r\n    padding: 20px 50px;\r\n    pointer-events: all;\r\n}\r\n\r\n.popup h1 {\r\n    text-align: center;\r\n}\r\n\r\n.popup code {\r\n    border-radius: 0;\r\n    background-color: $tertiary-color;\r\n    -moz-box-shadow:    inset 0 0 10px $secondary-color;\r\n    -webkit-box-shadow: inset 0 0 10px $secondary-color;\r\n    box-shadow:         inset 0 0 10px $secondary-color;\r\n}\r\n\r\n.popup > div small {\r\n    text-align: center;\r\n    display: block;\r\n    color: $tertiary-text-color;\r\n    margin-top:20px;\r\n}\r\n\r\n.share-button-div{\r\n    text-align: center;\r\n}\r\n\r\n.share-button-div > *{\r\n    margin: 5px;\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    transition: ease-in 0.3s;\r\n}\r\n\r\n.share-button-div > *:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n\r\n    .share-button-icon{\r\n        box-shadow:$tertiary-color 3px 2px;\r\n    }\r\n}\r\n\r\n.share-button-icon{\r\n    border-radius: 1000px;\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.share-count-wrapper > *{\r\n    margin-left: -20px;\r\n    margin-top: -5px;\r\n    padding: 3px 6px;\r\n    background-color: $secondary-color;\r\n    color: $primary-text-color;\r\n    border-radius: 8px;\r\n}\r\n\r\n.share-link-container{\r\n    // background-color: white;\r\n}\r\n\r\n.share-link-copy{\r\n    padding: 7.5px 10px;\r\n    padding-top: 7;\r\n    padding-bottom: 8;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    // border-radius: 20px;\r\n    // border-top-right-radius: 20px;\r\n    // border-bottom-right-radius: 20px;\r\n\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.share-link{\r\n\r\n    // -moz-user-select: all;\r\n    // -webkit-user-select: all;\r\n    // -ms-user-select: all;\r\n    // user-select: all;\r\n\r\n    text-align: center;\r\n    width: 320px;\r\n    padding: 7.5px;\r\n    text-overflow: ellipsis;\r\n    border: none;\r\n    // border-top-left-radius: 20px;\r\n    // border-bottom-left-radius: 20px;\r\n\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n@import './navigation.scss';\r\n\r\n.project-list {\r\n    margin:0;\r\n    height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n    text-align: center;\r\n    overflow-x:hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.link-disabled {\r\n    display: none;\r\n}\r\n\r\n@import './thumbnail.scss';\r\n@import './project.scss';\r\n\r\n.footer{\r\n    height: $bottom-height;\r\n    width: 100vw;\r\n    position: fixed;\r\n    bottom: 0;\r\n    text-align: center;\r\n    margin:0;\r\n}\r\n\r\n.footer hr{\r\n    border-color:$tertiary-color\r\n}\r\n\r\n.footer button, .footer a{\r\n    font-size:$regular-font-size;\r\n    padding: 0;\r\n    color: $primary-text-color;    \r\n    // text-shadow: $primary-color 2px 2px 1px;\r\n    text-decoration: underline;\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.footer a{\r\n    text-shadow: 2px 2px 4px $primary-color;\r\n}\r\n\r\n.footer button:hover, .footer a:hover {\r\n    text-shadow: 0 0 5px $primary-text-color;\r\n}\r\n\r\n.copyright {\r\n    margin-top: 0px;\r\n    color:$tertiary-text-color;\r\n    font-size: $regular-font-size;\r\n    text-shadow: $primary-color 2px 2px 1px;\r\n}\r\n\r\n@import 'web-view.scss';\r\n@import 'mobile-view.scss';",".navigator {\r\n    background-color: $tertiary-color;\r\n    height: $search-height;\r\n    top: $header-height;\r\n    width: 100%;\r\n    margin:0;\r\n}\r\n\r\n.navigator img {\r\n    display: block;\r\n    height: $search-height - 10;\r\n    margin: 5px;\r\n    right: 5px;\r\n    pointer-events:none;\r\n    position: absolute;\r\n}\r\n\r\n.navigator input {\r\n    -moz-box-shadow:    inset 0 0 10px $secondary-color;\r\n    -webkit-box-shadow: inset 0 0 10px $secondary-color;\r\n    box-shadow:         inset 0 0 10px $secondary-color;\r\n    font-size: $search-height - 20;\r\n    background:$tertiary-color;\r\n    border:none;\r\n    color:$primary-text-color;\r\n    width: calc(100% - 45px);\r\n    height:100%;\r\n    padding: 0 10px;\r\n    padding-right:$search-height;\r\n}\r\n\r\n.navigator input::placeholder {\r\n    color:$primary-text-color;\r\n    text-shadow: 1px 1px 4px $secondary-text-color;\r\n    // text-shadow: -1px -1px 2.5px $secondary-text-color, 1px -1px 2.5px $secondary-text-color, -1px 1px 2.5px $secondary-text-color, 1px 1px 2.5px $secondary-text-color;\r\n}\r\n\r\n.navigator button {\r\n    transition: ease-in 0.3s;\r\n    color: $primary-text-color;\r\n    display: block;\r\n    position: absolute;\r\n    height: $search-height - 5px;\r\n    background-color: $primary-color;\r\n    margin: 1.25px;\r\n    right: $search-height+10px;\r\n    border:none;\r\n    padding: 8px 8px;\r\n    // border-radius: 5px;\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    // box-shadow: $secondary-color 7.5px 2.5px;\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.navigator button:hover{\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    box-shadow: $secondary-color 7.5px 2.5px;\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    // box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.navigator button input{\r\n    -moz-box-shadow:    none;\r\n    -webkit-box-shadow: none;\r\n    box-shadow:         none;\r\n    background:none;\r\n    border:none;\r\n    color:$primary-text-color;\r\n    width: $search-height - 20;\r\n    height: $search-height - 20;\r\n    float:left;\r\n}\r\n\r\n.navigator button label{\r\n    margin-top:0px;\r\n    margin-left: 8px;\r\n    float:right;\r\n}\r\n\r\n// input[type=\"checkbox\"]::before {\r\n//     content: \"\";\r\n//     display: inline-block;\r\n//     margin-left: -3px;\r\n//     margin-top: -1.5px;\r\n//     height: 16px;\r\n//     width: 16px;\r\n//     background-color: white;\r\n//     border: 1px solid rgb(166, 166, 166);\r\n//     border-radius: 4px;\r\n//     // box-shadow: inset 0 2px 5px rgba(0,0,0,0.25);\r\n//  }\r\n\r\n//  input[type=\"checkbox\"]:checked::before {\r\n//     background-color: $tertiary-color;\r\n//     border: 1px solid $tertiary-color;\r\n\r\n//  }\r\n\r\n// input[type=\"checkbox\"]:checked::after {\r\n//     content: '';\r\n//     position: absolute;\r\n//     width: 11px;\r\n//     height: 4px;\r\n//     background-color: $tertiary-color;\r\n//     top: 11px;\r\n//     left: 10.9px;\r\n//     border: 3px solid white;\r\n//     border-top: none;\r\n//     border-right: none;\r\n//     -webkit-transform: rotate(-45deg);\r\n//     -moz-transform: rotate(-45deg);\r\n//     -o-transform: rotate(-45deg);\r\n//     -ms-transform: rotate(-45deg);\r\n//     transform: rotate(-45deg);\r\n//  }",".project-thumbnail {\r\n    text-decoration:none;\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    // box-shadow:inset 0 0 $thumbnail-size 75px #101010, 5px 5px 1px 0px $secondary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 75px #101010,10px 7.5px 1px 0px $tertiary-color;\r\n    // box-shadow: inset 0 0 $thumbnail-size 75px #101010, $vhs-shadows-l;\r\n    // border-radius: 0px;\r\n    height: $thumbnail-size;\r\n    width: $thumbnail-size;\r\n    display: inline-table;\r\n    text-align: right;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 30px;\r\n    transition:$thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.project-thumbnail:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transition:$thumbnail-transition;\r\n    // box-shadow:inset 0 0 $thumbnail-size 200px black,10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 200px black, 5px 5px 1px 0px $secondary-color;\r\n    text-shadow: none;\r\n}\r\n\r\n.project-thumbnail:last-of-type {\r\n    transition:$thumbnail-transition;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.project-thumbnail div {\r\n    transition:$thumbnail-transition;\r\n    // display:table;\r\n    text-align: center;\r\n    width:$thumbnail-size;\r\n    //height: 100%;\r\n    // margin-top: 10%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.project-thumbnail div *{\r\n    transition:$thumbnail-transition;\r\n    padding: 0px 20px;\r\n}\r\n\r\n.project-thumbnail div p {\r\n    transition:$thumbnail-transition;\r\n    margin-top: 10px;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.project-thumbnail small {\r\n    text-align: right;\r\n    transition:$thumbnail-transition;\r\n    display: block;\r\n    position: absolute;\r\n    margin: 10px;\r\n    max-width: $thumbnail-size - 20px;\r\n    // white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.post-thumbnail {\r\n    text-decoration:none;\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    // box-shadow:inset 0 0 $thumbnail-size 75px #101010, 5px 5px 1px 0px $secondary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 75px #101010,10px 7.5px 1px 0px $tertiary-color;\r\n    // border-radius: 5px;\r\n    height: $thumbnail-size;\r\n    width: $thumbnail-size;\r\n    display: inline-table;\r\n    text-align: right;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 30px;\r\n    transition:$thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.post-thumbnail:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transition:$thumbnail-transition;\r\n    // box-shadow:inset 0 0 $thumbnail-size 200px black,10px 7.5px 1px 0px $tertiary-color;\r\n        box-shadow:inset 0 0 $thumbnail-size 200px black, 5px 5px 1px 0px $secondary-color;\r\n    text-shadow: none;\r\n}\r\n\r\n.post-thumbnail:last-of-type {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.post-thumbnail div {\r\n    // display:table;\r\n    text-align: center;\r\n    width:$thumbnail-size;\r\n    //height: 100%;\r\n    // margin-top: 10%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.post-thumbnail div *{\r\n    padding: 0px 20px;\r\n}\r\n\r\n.post-thumbnail div p {\r\n    margin-top: 10px;\r\n}\r\n\r\n.post-thumbnail small {\r\n    text-align: right;\r\n    transition:$thumbnail-transition;\r\n    display: block;\r\n    position: absolute;\r\n    margin: 10px;\r\n    max-width: $thumbnail-size - 20px;\r\n    // white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    right: 0;\r\n    bottom: 0;\r\n}",".project-page {\r\n    margin:0;\r\n    padding:0;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    width:100%;\r\n    text-align: center;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n// .project-page h1:first-of-type{\r\n//     padding-top: 10px;\r\n// }\r\n\r\n// .project-page p:first-of-type{\r\n//     padding: 10px;\r\n//     padding-top: 0px;\r\n// }\r\n\r\n.close-icon {\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    margin: 5px;\r\n    // position:sticky;\r\n    position: absolute;\r\n    float: right;\r\n    z-index: 100;\r\n    right: 35px;\r\n    margin-top: 15px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-icon:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-m;\r\n    // filter: $vhs-shadows-drop-m;\r\n}\r\n\r\n.share-icon {\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    margin: 5px;\r\n    // position:sticky;\r\n    position: absolute;\r\n    float: right;\r\n    right: 90px;\r\n    z-index: 100;\r\n    margin-top: 15px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 2px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 2px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n    cursor: pointer;\r\n}\r\n\r\n.share-icon:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    // -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    // filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-s;\r\n    // filter: $vhs-shadows-drop-s;\r\n}\r\n\r\n.about-h1{\r\n    margin: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.about-h2{\r\n    margin: 10px;\r\n    // margin-top:30px;\r\n    margin-bottom: -5px;\r\n    text-align: left;\r\n    // padding: 10px;\r\n    // background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    // box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n}\r\n\r\n.about-p{\r\n    text-align: left;\r\n    // text-align: justify;\r\n    margin-bottom: -7.5px;\r\n    padding-bottom: 7.5px;\r\n    text-align: justify;\r\n}\r\n\r\n.about-me{\r\n    margin-top: 10px;\r\n    // border-radius: 10px;\r\n    background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    padding: 15px;\r\n    // padding-bottom: 10px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.about-me img{\r\n    // border-radius: 10px;\r\n    // background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    box-shadow: $primary-color 1px 1px 10px;\r\n    // box-shadow: 10px 7.5px 1px 0px $primary-color;\r\n    // height: 20px;\r\n    // width: 10px;\r\n    transition: ease-in 0.2s;\r\n\r\n}\r\n\r\n.about-me img:hover{\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n}\r\n\r\n.contact-container {\r\n    width: calc(100vw - 100px);\r\n    padding: 0 50px;\r\n    padding-top: 50px;\r\n}\r\n\r\n$contact-left: 40%;\r\n\r\n.contact-left {\r\n    float: left;\r\n    width: $contact-left;\r\n    text-align: center;\r\n}\r\n\r\n.contact-right h1{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contact-p{\r\n    background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    padding: 20px;\r\n    text-align: justify;\r\n}\r\n\r\n.contact-thumbnail {\r\n    display: block;\r\n    background-color: $secondary-color;\r\n    width: 100%;\r\n    height: 40px;\r\n    // border-radius: 100px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n}\r\n\r\n.contact-thumbnail:hover{\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    box-shadow:5px 5px 1px 0px $tertiary-color;\r\n}\r\n\r\n.contact-thumbnail div{\r\n    float: right;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    font-size: 40px;\r\n    display: block;\r\n    padding: 0 20px;\r\n    text-decoration: none;\r\n    margin-top: -5px;\r\n    width: calc(100% - 80px);\r\n    text-align: right;\r\n}\r\n\r\n.contact-thumbnail img{\r\n    width: 40px;\r\n    float: left;\r\n}\r\n\r\n.p5-info {\r\n    position: absolute;\r\n    width: 100%;\r\n    // transition: ease-in 0.2s;\r\n    text-align: center;\r\n    z-index: 1;\r\n    border-bottom: 2px solid $secondary-color;\r\n}\r\n\r\n.p5-info h1{\r\n    // transition: ease-in 0.2s;\r\n    font-size: 3 * $regular-font-size;\r\n    text-align: left;\r\n    margin-left: $p5-info-height + 25px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.p5-info p{\r\n    // transition: all ease-in 0.2s;\r\n    // margin-top: 5px;\r\n    display: none;\r\n    visibility: hidden;\r\n    opacity: 1;\r\n\r\n}\r\n\r\n.p5-info input {\r\n    // z-index: 20;\r\n    // transition: ease-in 0.2s;\r\n    background-color: $tertiary-color;\r\n    // padding: 5px;\r\n    // margin: 10px;\r\n    // position: absolute;\r\n    // top:$header-height+12px;\r\n    // right: 145px;\r\n    // width: 80px;\r\n    // left: 0;\r\n}\r\n\r\n.p5-info button {\r\n    // transition: ease-in 0.2s;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    margin: 10px;\r\n    position: absolute;\r\n    // top:$header-height+ 12px;\r\n    // right: 145px;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n}\r\n\r\n.p5-info-slide {\r\n    background: none;\r\n    border: none;\r\n    height: $p5-info-height;\r\n    // margin: 5px;\r\n    position:fixed;\r\n    z-index: 100;\r\n    left: 25px;\r\n    // margin-top: 10px;\r\n    margin: 5px;\r\n    // right: 35px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.p5-info-slide img{\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n}\r\n\r\n.p5-info-slide img:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-m;\r\n    // filter: $vhs-shadows-drop-m;\r\n}\r\n\r\n.p5-info-show{\r\n    z-index: 5;\r\n    // transition: ease-in 0.2s;\r\n    border-bottom: 2px solid $tertiary-color;\r\n    box-shadow: 0px 10px 10px black;\r\n}\r\n\r\n.p5-info-show p{\r\n    // transition: all ease-in 0.2s;\r\n    opacity: 1;\r\n    display: block;\r\n    visibility: visible;\r\n}\r\n\r\n.p5-info-show::after{\r\n    z-index: 20;\r\n    content: \"Hide this information panel with the ^ button above\";\r\n    font-style: italic;\r\n    font-size: 0.75 * $regular-font-size;\r\n    // float: left;\r\n    display: inline;\r\n    position: absolute;\r\n    left: 10px;\r\n    // bottom: px;\r\n}\r\n\r\n.p5-canvas{\r\n    // margin-left: 5px;\r\n    width: 100vw;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    // border: white 2px solid;\r\n    position: absolute;\r\n    z-index: 0;\r\n    top: $p5-info-height + $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height});\r\n    // max-height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height} - 10px);\r\n    text-align: center;\r\n    cursor: crosshair;\r\n}\r\n\r\n.weblog-signature{\r\n    margin-top:15px;\r\n    text-shadow: black 1px 1px 5px;\r\n    padding-left: 30px;\r\n    color:$tertiary-text-color;\r\n    font-weight: normal;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.music-release-banner{\r\n    background: url('../../../public/assets/img/music-banner.jpg');\r\n    background-position:0% 20%;\r\n    background-size: cover;\r\n    background-blend-mode: darken;\r\n    border-bottom:1px solid white;\r\n    text-align: center;\r\n    padding: 15px;\r\n    padding-top: 0px;\r\n}\r\n\r\n\r\n.music-release-banner p,.music-release-banner h1,.music-release-banner h2,.music-release-banner h3 {\r\n    display: block;\r\n    width: max-content;\r\n    height: max-content;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    text-shadow: 1px 1px 5px black;\r\n}\r\n\r\n.submergence-hover{\r\n    transition: ease-out 0.2s;\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n}\r\n\r\n.submergence-hover img{\r\n    transition: ease-out 0.2s;\r\n}\r\n\r\n.submergence-hover:hover{\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 0px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 0px $tertiary-color);\r\n}\r\n\r\n// .submergence-hover:hover img {\r\n//     // transform: translateX(1px) translateY(20px);\r\n// }\r\n","@media only screen and (min-width: 769px){\r\n    $header-height:75px;\r\n    $thumbnail-size: 250px;\r\n    $bottom-height: 70px;\r\n\r\n    body{\r\n        overflow: hidden;\r\n    }\r\n\r\n    h1 {\r\n        // text-shadow: $vhs-shadows-l;\r\n    }\r\n    \r\n    h2 {\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .header {\r\n        height:$header-height;\r\n    }\r\n\r\n    .header h1, .header img {\r\n        float: left;\r\n        font-size: $header-height - 20;\r\n    }\r\n\r\n    .header h1 {\r\n        margin-top: 3px;\r\n        // margin-right: 10px;\r\n        // float: right;\r\n        padding: 0;\r\n        // bottom: 3px;\r\n    }\r\n\r\n    .header img {\r\n        // greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3px 0px;\r\n        // -webkit-filter: $vhs-shadows-drop-s;\r\n        // filter: $vhs-shadows-drop-s;\r\n    }\r\n\r\n    .button-regular {\r\n        padding: 7.5px 12px;\r\n    }\r\n\r\n    .hide-on-web {\r\n        visibility: hidden;\r\n    }\r\n\r\n    .hide-on-mobile {\r\n        visibility: visible;\r\n    }\r\n\r\n    .popup{\r\n        height: calc(100% - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .navigator img {\r\n        display: block;\r\n    }\r\n\r\n    .navigator button{\r\n        right:$search-height+10px;\r\n    }\r\n\r\n    .project-list {\r\n        margin:0;\r\n        height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n        padding: 0px 50px;\r\n    }\r\n\r\n    .project-thumbnail {\r\n        transition:$thumbnail-transition;\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n    }\r\n\r\n    .post-thumbnail {\r\n        transition:$thumbnail-transition;\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n    }\r\n\r\n    .project-thumbnail:first-of-type, .post-thumbnail:first-of-type{\r\n        margin-top: 50px;\r\n    }\r\n\r\n    .project-thumbnail:last-of-type, .post-thumbnail:last-of-type{\r\n        margin-bottom: 200px;\r\n    }\r\n    \r\n    .project-thumbnail p {\r\n        transition:$thumbnail-transition;\r\n        display: none;\r\n    }\r\n\r\n    .project-thumbnail:hover p {\r\n        transition:$thumbnail-transition;\r\n        display: block;\r\n    }\r\n\r\n    .project-thumbnail:hover small{\r\n        transition:$thumbnail-transition;\r\n        display: none;\r\n    }\r\n\r\n    .project-thumbnail:hover div{\r\n        transition:$thumbnail-transition;\r\n    }\r\n\r\n\r\n    .close-icon{\r\n        height: 40px;\r\n    }\r\n\r\n    .project-page{\r\n        height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .contact-left {\r\n        float: left;\r\n        width: $contact-left;\r\n        text-align: center;\r\n    \r\n    }\r\n    \r\n    .contact-right {\r\n        float: right;\r\n        left: calc(0.4 * (100vw));\r\n        text-align: center;\r\n        position: fixed;\r\n        width: calc(0.6 * (100vw) - 100px);\r\n        margin-left: 10px;\r\n        padding: 0px 50px;\r\n    }\r\n    \r\n    .contact-right h1{\r\n        margin-bottom: 20px;\r\n    }\r\n    \r\n\r\n    .about{\r\n        margin: 0 20%;\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .about-me{\r\n        display: flex;\r\n    }\r\n\r\n    .about-me img{\r\n        width: calc(50% - 42.5px);\r\n        // margin-right: 5px;\r\n        // height: auto;\r\n        display: inline-block;\r\n        right: 0;\r\n        align-self: center;\r\n    }\r\n    \r\n    .about-me div {\r\n        width: 50%;\r\n        // margin-right: 20px;\r\n        // margin-left: 0px;\r\n        // padding: 0;\r\n        // padding: 0 10px;\r\n        padding-right: 30px;\r\n        align-self: center;\r\n    }\r\n\r\n    .about-me div p {\r\n        width: 100%;\r\n    }\r\n\r\n    .about-me:last-child{\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    .p5-info{\r\n        // padding-top: 10px;\r\n        height: $p5-info-height;\r\n        // margin-top: -5px;\r\n        background-color: $primary-color;\r\n        // background-color: white;\r\n    }\r\n    \r\n    .p5-info h1{\r\n        font-size: 3 * $regular-font-size;\r\n        margin-left: $p5-info-height + 25px;\r\n        padding-top: 10px;\r\n    }   \r\n\r\n    .p5-info p{\r\n        max-width: 750px;\r\n        margin: 10px auto;\r\n    }\r\n\r\n    .p5-info input {\r\n        position: static;\r\n        display: block;\r\n        // top: 0;\r\n        margin-left: 5px;\r\n        margin-bottom: -5px;\r\n        // bottom: $bottom-height;\r\n        // top:$header-height + $p5-info-height;\r\n    }\r\n\r\n    .p5-info button {\r\n        // padding: 5px;\r\n        // display: block;\r\n        padding: 7.5px 12px;\r\n        margin: 10px;\r\n        position: absolute;\r\n        float: right;\r\n        // top:$header-height+ 12px;\r\n        top: 10px;\r\n        right: 145px;\r\n    }\r\n\r\n    .p5-info-slide {\r\n        background: none;\r\n        border: none;\r\n        height: $p5-info-height;\r\n        // margin: 5px;\r\n        position:fixed;\r\n        left: 25px;\r\n        // margin-top: 10px;\r\n        margin: 5px;\r\n        // right: 35px;\r\n        margin-top: 15px;\r\n    }\r\n    \r\n    .p5-info-slide img{\r\n        transition: ease-in 0.2s;\r\n        height: 40px;\r\n        // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n        -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        // -webkit-filter: $vhs-shadows-drop-l;\r\n        // filter: $vhs-shadows-drop-l;\r\n    }\r\n\r\n    .p5-info-show{\r\n        height: auto;\r\n        padding-bottom: 10px;\r\n    }\r\n\r\n    .p5-info-show::after{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    // .p5-canvas {\r\n    //     // margin-top: $p5-info-height;\r\n    //     // background-color: blue;\r\n    //     // height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height});\r\n    // }\r\n\r\n    .submergence-hover br{\r\n        display: none;\r\n    }\r\n\r\n    .weblog-post{\r\n        padding: 10px 30px;\r\n        // text-align: center;\r\n    }\r\n\r\n    .weblog-post * {\r\n        max-width: 750px;\r\n        margin: 2px auto;\r\n        text-align: center;\r\n    }\r\n\r\n    .weblog-post small{\r\n        // margin: 0px;\r\n        display: block;\r\n    }\r\n\r\n    .weblog-post p {\r\n        // text-align: left;\r\n        text-align: justify;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .weblog-post h1 {\r\n        max-width: calc(100vw - 250px);\r\n        display: block;\r\n    }\r\n\r\n    .footer {\r\n        position: fixed;\r\n        background-color: $secondary-color;\r\n        height: $bottom-height;\r\n    }\r\n\r\n    .footer button, .footer a {\r\n        display: inline-block;\r\n        margin: 5px 15px;\r\n        margin-top: 15px;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n}\r\n","@media only screen and (max-width: 769px){\r\n    $header-height:40px;\r\n    $thumbnail-size: 200px;\r\n    $bottom-height: 70px;\r\n    $regular-font-size: 11px;\r\n    $p5-info-height: 40px;\r\n    $p5-info-closed: 26px;\r\n\r\n    body {\r\n        font-size:$regular-font-size;\r\n        height: 100%;\r\n        width: 100vw;\r\n    }\r\n\r\n    html{\r\n        height: 100%;\r\n    }\r\n\r\n    code{\r\n        padding: 0px 4px;\r\n    }\r\n\r\n    h1 {\r\n        // text-shadow: greenyellow -1px 1px 0px, cyan 0px -1px 0px, red 1px 1px 0px;\r\n        // text-shadow: $vhs-shadows-m;\r\n    }\r\n    \r\n    h2 {\r\n        // text-shadow: greenyellow -1px 1px 0px, cyan 0px -1px 0px, red 1px 1px 0px;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .main-body{\r\n        height: 100%;\r\n        width: 100vw;\r\n    }\r\n\r\n    .header {\r\n        text-align: center;\r\n        height:$header-height;\r\n        width: 100vw;\r\n    }\r\n\r\n    .header h1{\r\n        font-size: 28px;\r\n        margin: 0px;\r\n        margin-top: 2px;\r\n        margin-left:8px;\r\n        float: left;\r\n    }\r\n\r\n    .header img {\r\n        height: 30px;\r\n        float: right;\r\n    }\r\n\r\n    .hide-on-web {\r\n        visibility: visible;\r\n    }\r\n\r\n    .hide-on-mobile {\r\n        visibility: hidden;\r\n    }\r\n\r\n\r\n    .popup{\r\n        display:none;\r\n        top: $header-height;\r\n        height: calc(100% - #{$header-height} - #{$bottom-height});\r\n    }\r\n    .navigator img {\r\n        display: none;\r\n    }\r\n\r\n    .navigator button{\r\n        right:5px;\r\n        font-size: $regular-font-size;\r\n    }\r\n\r\n    .navigator input{\r\n        font-size: $regular-font-size;\r\n        width: calc(100% - 45px);\r\n    }\r\n\r\n    .project-thumbnail{\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n        // margin: 10px;\r\n        margin: 10px;\r\n        box-shadow:inset 0 0 $thumbnail-size 50px black, 10px 10px 1px 0px $tertiary-color;\r\n    }\r\n\r\n    .project-thumbnail:first-of-type{\r\n        margin-top: 20px;\r\n    }\r\n    .project-thumbnail:last-of-type{\r\n        margin-bottom: 100px;\r\n    }\r\n    \r\n    .post-thumbnail {\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n        margin: 10px;\r\n        box-shadow:inset 0 0 $thumbnail-size 50px black, 10px 10px 1px 0px $tertiary-color;\r\n    }\r\n\r\n    .post-thumbnail:last-of-type{\r\n        margin-bottom: 100px;\r\n    }\r\n\r\n    .post-thumbnail:first-of-type{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .project-thumbnail p {\r\n        display:none;\r\n    }\r\n\r\n    .project-thumbnail h2 {\r\n        padding: 0px 40px;\r\n    }\r\n\r\n    .project-list {\r\n        margin-top:2px;\r\n        // width: calc(100% - 20px);\r\n        height: calc(100% - (#{$search-height} + #{$header-height} + #{$bottom-height}));\r\n        // height: 100%;\r\n        // max-height: 10px;\r\n        overflow-y: auto;\r\n        // padding: 0px;\r\n        // margin: 0px;\r\n        // padding: 0px 10px;\r\n        // padding-right: 20px;\r\n        margin-left: -10px;\r\n        position: absolute;\r\n        text-align: center;\r\n    }\r\n\r\n    .close-icon {\r\n        // position: sticky;\r\n        position: fixed;\r\n        right: 0px;\r\n        margin-top: 2px;\r\n        height: 30px;\r\n\r\n    }\r\n\r\n    .project-page{\r\n        height: calc(100% - (#{$header-height} + #{$bottom-height}));\r\n        position: absolute;\r\n    }\r\n\r\n    .share-icon {\r\n        display: none;\r\n    }\r\n\r\n    .contact-container {\r\n        width: calc(100vw - 100px);\r\n        text-align: center;\r\n        padding: 30px 50px;\r\n    }\r\n\r\n    .contact-left {\r\n        width: calc(100% - 60px);\r\n        text-align: center;\r\n        float: none;\r\n        padding: 0 30px;\r\n        margin-left: -25px;\r\n    }\r\n    \r\n    .contact-right {\r\n        float: none;\r\n        left: 0px;\r\n        text-align: center;\r\n        position: relative;\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    \r\n    .contact-right h1{\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .contact-thumbnail div{\r\n        font-size: 20px;\r\n        margin-top: 10px;\r\n        // float: right;\r\n    }\r\n\r\n    .about{\r\n        margin: 0 20px;\r\n    }\r\n\r\n    .about-me {\r\n        padding: 15px;\r\n    }\r\n\r\n    .about-me img{\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-top: 10px;\r\n        width: 50%;\r\n    }\r\n    \r\n    .about-me p {\r\n        display: block;\r\n    }\r\n\r\n    // .about-me div{\r\n    //     // margin-top: 20px;\r\n    // }\r\n\r\n    .p5-info h1{\r\n        font-size: 2 * $regular-font-size;\r\n        margin-left: $p5-info-height - 2.5px;\r\n        padding: 5px;\r\n        max-width: 45%;\r\n        max-width: calc(100% - 200px);\r\n        max-height: $p5-info-closed;\r\n        overflow: hidden;\r\n        white-space: nowrap;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .p5-info p{\r\n        text-align: justify;\r\n        padding: 5px;\r\n    }\r\n\r\n    .p5-info button, .p5-info input {\r\n        font-size: $regular-font-size;\r\n        margin-top: 5px;\r\n        position: static;\r\n        display: block;\r\n        float: right;\r\n        margin-right: 5px;\r\n        color: $primary-text-color;\r\n    }\r\n\r\n    .p5-info button{\r\n        padding: 5px;\r\n        margin: 7.5px;\r\n        position: absolute;\r\n        top:-2px;\r\n        right: 35px;\r\n        // top: 10px;\r\n        // right: 10px;\r\n    }\r\n\r\n    .p5-info input{\r\n        width: 165px;\r\n        position: absolute;\r\n        margin: 0;\r\n        margin-top: -2px;\r\n        margin-left: 5px;\r\n        // display: inline/;\r\n        // margin: 0 auto;\r\n        // margin-left: auto;\r\n        // margin-right: auto;\r\n        // padding: 0;\r\n        // margin-top: 12px;\r\n    }\r\n\r\n    .p5-info-slide {\r\n        background: none;\r\n        border: none;\r\n        height: $p5-info-height;\r\n        position:fixed;\r\n        left: 0px;\r\n        margin: 5px;\r\n        margin-top: 3px;\r\n    }\r\n    \r\n    .p5-info-slide img{\r\n        transition: ease-in 0.2s;\r\n        height: 30px;\r\n        // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n        -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        // -webkit-filter: $vhs-shadows-drop-l;\r\n        // filter: $vhs-shadows-drop-l;\r\n    }\r\n\r\n    .p5-info-show{\r\n        height: auto;\r\n        padding-bottom: 5px;\r\n        background-color: $primary-color;\r\n    }\r\n\r\n    .p5-info-show::after{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .p5-info-show h1{\r\n        // overflow: none;\r\n        max-height: inherit !important;\r\n        white-space:normal;\r\n        // text-overflow:inherit;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .p5-canvas{\r\n        top: $p5-info-height;\r\n        height: calc(100% - #{$p5-info-height});\r\n        // margin-bottom: -20px;\r\n        padding: 0;\r\n        // margin: 0;\r\n    }\r\n\r\n    .submergence-hover br{\r\n        display: block;\r\n    }\r\n\r\n    .weblog-post{\r\n        padding: 0 10px;\r\n        text-align: center;\r\n        // margin:5px;\r\n        margin-top:10px;\r\n    }\r\n\r\n    .weblog-post p {\r\n        text-align: left;\r\n        line-height: 20px;\r\n    }\r\n\r\n    .footer {\r\n        width: 100%;\r\n        height:$bottom-height;\r\n        // background-color: none;\r\n        background-color: $secondary-color;\r\n        // position: relative;\r\n        position: fixed;\r\n        //position: fixed;\r\n        // background-color: blue;\r\n    }\r\n\r\n    .footer button, .footer a {\r\n        // display: block;\r\n        display: inline-block;\r\n        // margin: 15px auto;\r\n        margin: 7.5px 20px;\r\n        margin-top:15px;\r\n        // text-shadow: $vhs-shadows-s;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .copyright{\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzPzE4MWIiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbWF0Y2gtYnJhY2VzL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3M/M2ZhNyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzPzg3MTgiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdy5jc3M/OTcyZCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXguc2Nzcz8wN2RhIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20tdG9tb3Jyb3cuY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvYXNzZXRzL2ltZy9tdXNpYy1iYW5uZXIuanBnIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2NvcHktdG8tY2xpcGJvYXJkL3ByaXNtLWNvcHktdG8tY2xpcGJvYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2Rvd25sb2FkLWJ1dHRvbi9wcmlzbS1kb3dubG9hZC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL25vcm1hbGl6ZS13aGl0ZXNwYWNlL3ByaXNtLW5vcm1hbGl6ZS13aGl0ZXNwYWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL3Nob3ctbGFuZ3VhZ2UvcHJpc20tc2hvdy1sYW5ndWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3ByaXNtLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwicHJvcHMiLCJSZWFjdCIsIlByaXNtIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0NBRUE7QUFDQTs7QUFDQTtBQUNBO0NBQzBEOztBQUMxRDtDQUMwRDs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV2QkMsd0RBQUEsQ0FBZ0IsWUFBSTtBQUNsQkMsK0RBQUE7QUFDRCxHQUZELEVBRUUsRUFGRjtBQUZ1QixNQU1iQyxTQU5hLEdBTVlILEtBTlosQ0FNYkcsU0FOYTtBQUFBLE1BTUZDLFNBTkUsR0FNWUosS0FOWixDQU1GSSxTQU5FO0FBT3JCLFNBQ0ksTUFBQyxTQUFELGlKQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESjtBQUdILENBVkQ7O0dBQU1MLEs7O0tBQUFBLEs7QUFZTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHVEQUE0QjtBQUNuRDtBQUNBOzs7Ozs7Ozs7OztBQ05BLFVBQVUsbUJBQU8sQ0FBQyw2TUFBaUc7QUFDbkgsMEJBQTBCLG1CQUFPLENBQUMsc2NBQXNNOztBQUV4Tzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNB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Y0FBYyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxhQUFhLGVBQWUsWUFBWSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFdBQVcsUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLGFBQWEsZUFBZSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxhQUFhLFFBQVEsTUFBTSxhQUFhLGVBQWUsYUFBYSxXQUFXLE9BQU8sTUFBTSxhQUFhLGVBQWUsYUFBYSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksY0FBYyxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFdBQVcsUUFBUSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksWUFBWSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsTUFBTSxZQUFZLGFBQWEsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sYUFBYSxlQUFlLGFBQWEsT0FBTyxNQUFNLGFBQWEsZUFBZSxhQUFhLFdBQVcsT0FBTyxNQUFNLFdBQVcsYUFBYSxlQUFlLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsYUFBYSxlQUFlLFFBQVEsTUFBTSxhQUFhLGVBQWUsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsYUFBYSxlQUFlLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFNBQVMsTUFBTSxZQUFZLGFBQWEsWUFBWSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksU0FBUyxNQUFNLFlBQVksWUFBWSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sT0FBTyxLQUFLLFdBQVcsUUFBUSxPQUFPLFdBQVcsU0FBUyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFlBQVksYUFBYSxZQUFZLFlBQVksU0FBUyxPQUFPLFlBQVksYUFBYSxZQUFZLFlBQVksU0FBUyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFlBQVksYUFBYSxXQUFXLFFBQVEsT0FBTyxZQUFZLGFBQWEsV0FBVyxRQUFRLE9BQU8sWUFBWSxhQUFhLFdBQVcsUUFBUSxPQUFPLFlBQVksYUFBYSxTQUFTLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsWUFBWSxRQUFRLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxhQUFhLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFlBQVksWUFBWSxTQUFTLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxZQUFZLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsWUFBWSxTQUFTLE9BQU8sWUFBWSxhQUFhLFdBQVcsUUFBUSxPQUFPLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUs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QUFDQTs7QUFFQTtBQUNBLEtBQUssS0FBNkI7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDOzs7Ozs7Ozs7OztBQ3JNRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCLFlBQVksT0FBTztBQUNuQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0EsaUJBQWlCOztBQUVqQixpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgJy4uL2Fzc2V0cy9jc3MvaW5kZXguc2Nzcyc7XHJcblxyXG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcyc7XHJcbmltcG9ydCAncHJpc21qcy90aGVtZXMvcHJpc20tdG9tb3Jyb3cuY3NzJztcclxuLy8gaW1wb3J0ICdwcmlzbWpzL3RoZW1lcy9wcmlzbS1va2FpZGlhLmNzcyc7XHJcbi8vIGltcG9ydCAncHJpc21qcy90aGVtZXMvcHJpc20tZnVua3kuY3NzJ1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXInO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzJztcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycyc7IC8vIGNsYXNzPVwibGluZS1udW1iZXJzXCJcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5jc3MnO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzJzsgLy8gY2xhc3M9XCJtYXRjaC1icmFjZXNcIlxyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmNzcyc7XHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL2NvcHktdG8tY2xpcGJvYXJkL3ByaXNtLWNvcHktdG8tY2xpcGJvYXJkJztcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvbm9ybWFsaXplLXdoaXRlc3BhY2UvcHJpc20tbm9ybWFsaXplLXdoaXRlc3BhY2UnO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9zaG93LWxhbmd1YWdlL3ByaXNtLXNob3ctbGFuZ3VhZ2UnO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9kb3dubG9hZC1idXR0b24vcHJpc20tZG93bmxvYWQtYnV0dG9uJztcclxuXHJcbi8vIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xyXG5cclxuLy8gaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuXHJcbmNvbnN0IE15QXBwID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XHJcbiAgfSxbXSk7XHJcblxyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tbGluZS1udW1iZXJzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tbGluZS1udW1iZXJzLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS1tYXRjaC1icmFjZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS10b29sYmFyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tdG9vbGJhci5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS10b29sYmFyLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tdG9tb3Jyb3cuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS10b21vcnJvdy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS10b21vcnJvdy5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL2luZGV4LnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLmxpbmUtbnVtYmVycyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmctbGVmdDogMy44ZW07XFxuXFx0Y291bnRlci1yZXNldDogbGluZW51bWJlcjtcXG59XFxuXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzID4gY29kZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdoaXRlLXNwYWNlOiBpbmhlcml0O1xcbn1cXG5cXG4ubGluZS1udW1iZXJzIC5saW5lLW51bWJlcnMtcm93cyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdHRvcDogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0bGVmdDogLTMuOGVtO1xcblxcdHdpZHRoOiAzZW07IC8qIHdvcmtzIGZvciBsaW5lLW51bWJlcnMgYmVsb3cgMTAwMCBsaW5lcyAqL1xcblxcdGxldHRlci1zcGFjaW5nOiAtMXB4O1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5OTk7XFxuXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG59XFxuXFxuXFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbiB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGxpbmVudW1iZXI7XFxuXFx0fVxcblxcblxcdFxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW46YmVmb3JlIHtcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGxpbmVudW1iZXIpO1xcblxcdFxcdFxcdGNvbG9yOiAjOTk5O1xcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdFxcdHBhZGRpbmctcmlnaHQ6IDAuOGVtO1xcblxcdFxcdFxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdFxcdH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsTUFBTTtDQUNOLGVBQWU7Q0FDZixZQUFZO0NBQ1osVUFBVSxFQUFFLDRDQUE0QztDQUN4RCxvQkFBb0I7Q0FDcEIsNEJBQTRCOztDQUU1Qix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixpQkFBaUI7O0FBRWxCOztDQUVDO0VBQ0MsY0FBYztFQUNkLDZCQUE2QjtDQUM5Qjs7RUFFQztHQUNDLDRCQUE0QjtHQUM1QixXQUFXO0dBQ1gsY0FBYztHQUNkLG9CQUFvQjtHQUNwQixpQkFBaUI7RUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wicHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAzLjhlbTtcXG5cXHRjb3VudGVyLXJlc2V0OiBsaW5lbnVtYmVyO1xcbn1cXG5cXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXS5saW5lLW51bWJlcnMgPiBjb2RlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2hpdGUtc3BhY2U6IGluaGVyaXQ7XFxufVxcblxcbi5saW5lLW51bWJlcnMgLmxpbmUtbnVtYmVycy1yb3dzIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0dG9wOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRsZWZ0OiAtMy44ZW07XFxuXFx0d2lkdGg6IDNlbTsgLyogd29ya3MgZm9yIGxpbmUtbnVtYmVycyBiZWxvdyAxMDAwIGxpbmVzICovXFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTtcXG5cXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcbn1cXG5cXG5cXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRjb3VudGVyLWluY3JlbWVudDogbGluZW51bWJlcjtcXG5cXHR9XFxuXFxuXFx0XFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbjpiZWZvcmUge1xcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIobGluZW51bWJlcik7XFxuXFx0XFx0XFx0Y29sb3I6ICM5OTk7XFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0XFx0cGFkZGluZy1yaWdodDogMC44ZW07XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0XFx0fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1ob3ZlcixcXG4udG9rZW4ucHVuY3R1YXRpb24uYnJhY2Utc2VsZWN0ZWQge1xcblxcdG91dGxpbmU6IHNvbGlkIDFweDtcXG59XFxuXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xLFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtNSxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTkge1xcblxcdGNvbG9yOiAjRTUwO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMixcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTYsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xMCB7XFxuXFx0Y29sb3I6ICMwQjM7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0zLFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtNyxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTExIHtcXG5cXHRjb2xvcjogIzI2RjtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTQsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC04LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMTIge1xcblxcdGNvbG9yOiAjRTBFO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL21hdGNoLWJyYWNlcy9wcmlzbS1tYXRjaC1icmFjZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTs7O0NBR0MsV0FBVztDQUNYLFVBQVU7QUFDWDtBQUNBOzs7Q0FHQyxXQUFXO0NBQ1gsVUFBVTtBQUNYO0FBQ0E7OztDQUdDLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7QUFDQTs7O0NBR0MsV0FBVztDQUNYLFVBQVU7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtaG92ZXIsXFxuLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLXNlbGVjdGVkIHtcXG5cXHRvdXRsaW5lOiBzb2xpZCAxcHg7XFxufVxcblxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMSxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTUsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC05IHtcXG5cXHRjb2xvcjogI0U1MDtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTIsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC02LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMTAge1xcblxcdGNvbG9yOiAjMEIzO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMyxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTcsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xMSB7XFxuXFx0Y29sb3I6ICMyNkY7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC00LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtOCxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTEyIHtcXG5cXHRjb2xvcjogI0UwRTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY29kZS10b29sYmFyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogLjNlbTtcXG5cXHRyaWdodDogLjJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhcjpob3ZlciA+IC50b29sYmFyIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBTZXBhcmF0ZSBsaW5lIGIvYyBydWxlcyBhcmUgdGhyb3duIG91dCBpZiBzZWxlY3RvciBpcyBpbnZhbGlkLlxcbiAgIElFMTEgYW5kIG9sZCBFZGdlIHZlcnNpb25zIGRvbid0IHN1cHBvcnQgOmZvY3VzLXdpdGhpbi4gKi9cXG5kaXYuY29kZS10b29sYmFyOmZvY3VzLXdpdGhpbiA+IC50b29sYmFyIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXHRvdmVyZmxvdzogdmlzaWJsZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIGZvciBidXR0b24gKi9cXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGEsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3BhbiB7XFxuXFx0Y29sb3I6ICNiYmI7XFxuXFx0Zm9udC1zaXplOiAuOGVtO1xcblxcdHBhZGRpbmc6IDAgLjVlbTtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmMmYwO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMC4yKTtcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDAgMCByZ2JhKDAsMCwwLDAuMik7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDJweCAwIDAgcmdiYSgwLDAsMCwwLjIpO1xcblxcdGJvcmRlci1yYWRpdXM6IC41ZW07XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhOmhvdmVyLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhOmZvY3VzLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b246aG92ZXIsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbjpmb2N1cyxcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3Bhbjpob3ZlcixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3Bhbjpmb2N1cyB7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsNENBQW9DO0NBQXBDLG9DQUFvQztDQUNwQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7NERBQzREO0FBQzVEO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsY0FBYztDQUNkLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVix5QkFBeUIsRUFBRSxlQUFlO0NBQzFDLHNCQUFzQjtDQUN0QixxQkFBcUI7QUFDdEI7O0FBRUE7OztDQUdDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixvQ0FBb0M7Q0FDcEMsNkNBQXFDO1NBQXJDLHFDQUFxQztDQUNyQyxtQkFBbUI7QUFDcEI7O0FBRUE7Ozs7OztDQU1DLGNBQWM7Q0FDZCxxQkFBcUI7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGl2LmNvZGUtdG9vbGJhciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IC4zZW07XFxuXFx0cmlnaHQ6IC4yZW07XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdG9wYWNpdHk6IDA7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXI6aG92ZXIgPiAudG9vbGJhciB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLyogU2VwYXJhdGUgbGluZSBiL2MgcnVsZXMgYXJlIHRocm93biBvdXQgaWYgc2VsZWN0b3IgaXMgaW52YWxpZC5cXG4gICBJRTExIGFuZCBvbGQgRWRnZSB2ZXJzaW9ucyBkb24ndCBzdXBwb3J0IDpmb2N1cy13aXRoaW4uICovXFxuZGl2LmNvZGUtdG9vbGJhcjpmb2N1cy13aXRoaW4gPiAudG9vbGJhciB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGJvcmRlcjogMDtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0b3ZlcmZsb3c6IHZpc2libGU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBmb3IgYnV0dG9uICovXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b24sXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IHNwYW4ge1xcblxcdGNvbG9yOiAjYmJiO1xcblxcdGZvbnQtc2l6ZTogLjhlbTtcXG5cXHRwYWRkaW5nOiAwIC41ZW07XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjJmMDtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuMik7XFxuXFx0Ym94LXNoYWRvdzogMCAycHggMCAwIHJnYmEoMCwwLDAsMC4yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAuNWVtO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYTpob3ZlcixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYTpmb2N1cyxcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uOmhvdmVyLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b246Zm9jdXMsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IHNwYW46aG92ZXIsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IHNwYW46Zm9jdXMge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogcHJpc20uanMgdG9tb3Jyb3cgbmlnaHQgZWlnaHRpZXMgZm9yIEphdmFTY3JpcHQsIENvZmZlZVNjcmlwdCwgQ1NTIGFuZCBIVE1MXFxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi90b21vcnJvdy10aGVtZVxcbiAqIEBhdXRob3IgUm9zZSBQcml0Y2hhcmRcXG4gKi9cXG5cXG5jb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0sXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdGNvbG9yOiAjY2NjO1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHdoaXRlLXNwYWNlOiBwcmU7XFxuXFx0d29yZC1zcGFjaW5nOiBub3JtYWw7XFxuXFx0d29yZC1icmVhazogbm9ybWFsO1xcblxcdHdvcmQtd3JhcDogbm9ybWFsO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG5cXG5cXHQtd2Via2l0LWh5cGhlbnM6IG5vbmU7XFxuXFx0LW1vei1oeXBoZW5zOiBub25lO1xcblxcdC1tcy1oeXBoZW5zOiBub25lO1xcblxcdGh5cGhlbnM6IG5vbmU7XFxuXFxufVxcblxcbi8qIENvZGUgYmxvY2tzICovXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHRtYXJnaW46IC41ZW0gMDtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLFxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kOiAjMmQyZDJkO1xcbn1cXG5cXG4vKiBJbmxpbmUgY29kZSAqL1xcbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0cGFkZGluZzogLjFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuM2VtO1xcblxcdHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblxcbi50b2tlbi5jb21tZW50LFxcbi50b2tlbi5ibG9jay1jb21tZW50LFxcbi50b2tlbi5wcm9sb2csXFxuLnRva2VuLmRvY3R5cGUsXFxuLnRva2VuLmNkYXRhIHtcXG5cXHRjb2xvcjogIzk5OTtcXG59XFxuXFxuLnRva2VuLnB1bmN0dWF0aW9uIHtcXG5cXHRjb2xvcjogI2NjYztcXG59XFxuXFxuLnRva2VuLnRhZyxcXG4udG9rZW4uYXR0ci1uYW1lLFxcbi50b2tlbi5uYW1lc3BhY2UsXFxuLnRva2VuLmRlbGV0ZWQge1xcblxcdGNvbG9yOiAjZTI3NzdhO1xcbn1cXG5cXG4udG9rZW4uZnVuY3Rpb24tbmFtZSB7XFxuXFx0Y29sb3I6ICM2MTk2Y2M7XFxufVxcblxcbi50b2tlbi5ib29sZWFuLFxcbi50b2tlbi5udW1iZXIsXFxuLnRva2VuLmZ1bmN0aW9uIHtcXG5cXHRjb2xvcjogI2YwOGQ0OTtcXG59XFxuXFxuLnRva2VuLnByb3BlcnR5LFxcbi50b2tlbi5jbGFzcy1uYW1lLFxcbi50b2tlbi5jb25zdGFudCxcXG4udG9rZW4uc3ltYm9sIHtcXG5cXHRjb2xvcjogI2Y4YzU1NTtcXG59XFxuXFxuLnRva2VuLnNlbGVjdG9yLFxcbi50b2tlbi5pbXBvcnRhbnQsXFxuLnRva2VuLmF0cnVsZSxcXG4udG9rZW4ua2V5d29yZCxcXG4udG9rZW4uYnVpbHRpbiB7XFxuXFx0Y29sb3I6ICNjYzk5Y2Q7XFxufVxcblxcbi50b2tlbi5zdHJpbmcsXFxuLnRva2VuLmNoYXIsXFxuLnRva2VuLmF0dHItdmFsdWUsXFxuLnRva2VuLnJlZ2V4LFxcbi50b2tlbi52YXJpYWJsZSB7XFxuXFx0Y29sb3I6ICM3ZWM2OTk7XFxufVxcblxcbi50b2tlbi5vcGVyYXRvcixcXG4udG9rZW4uZW50aXR5LFxcbi50b2tlbi51cmwge1xcblxcdGNvbG9yOiAjNjdjZGNjO1xcbn1cXG5cXG4udG9rZW4uaW1wb3J0YW50LFxcbi50b2tlbi5ib2xkIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRva2VuLml0YWxpYyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udG9rZW4uZW50aXR5IHtcXG5cXHRjdXJzb3I6IGhlbHA7XFxufVxcblxcbi50b2tlbi5pbnNlcnRlZCB7XFxuXFx0Y29sb3I6IGdyZWVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3ByaXNtanMvdGhlbWVzL3ByaXNtLXRvbW9ycm93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7OztFQUlFOztBQUVGOztDQUVDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsc0VBQXNFO0NBQ3RFLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjs7Q0FFaEIsZ0JBQWdCO0NBRWhCLFdBQVc7O0NBRVgscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsYUFBYTs7QUFFZDs7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7O0FBRUE7Ozs7O0NBS0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBOzs7O0NBSUMsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBOzs7Q0FHQyxjQUFjO0FBQ2Y7O0FBRUE7Ozs7Q0FJQyxjQUFjO0FBQ2Y7O0FBRUE7Ozs7O0NBS0MsY0FBYztBQUNmOztBQUVBOzs7OztDQUtDLGNBQWM7QUFDZjs7QUFFQTs7O0NBR0MsY0FBYztBQUNmOztBQUVBOztDQUVDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIHByaXNtLmpzIHRvbW9ycm93IG5pZ2h0IGVpZ2h0aWVzIGZvciBKYXZhU2NyaXB0LCBDb2ZmZWVTY3JpcHQsIENTUyBhbmQgSFRNTFxcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2tlbXBzb24vdG9tb3Jyb3ctdGhlbWVcXG4gKiBAYXV0aG9yIFJvc2UgUHJpdGNoYXJkXFxuICovXFxuXFxuY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLFxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRjb2xvcjogI2NjYztcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHR3aGl0ZS1zcGFjZTogcHJlO1xcblxcdHdvcmQtc3BhY2luZzogbm9ybWFsO1xcblxcdHdvcmQtYnJlYWs6IG5vcm1hbDtcXG5cXHR3b3JkLXdyYXA6IG5vcm1hbDtcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcblxcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0LW8tdGFiLXNpemU6IDQ7XFxuXFx0dGFiLXNpemU6IDQ7XFxuXFxuXFx0LXdlYmtpdC1oeXBoZW5zOiBub25lO1xcblxcdC1tb3otaHlwaGVuczogbm9uZTtcXG5cXHQtbXMtaHlwaGVuczogbm9uZTtcXG5cXHRoeXBoZW5zOiBub25lO1xcblxcbn1cXG5cXG4vKiBDb2RlIGJsb2NrcyAqL1xcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0bWFyZ2luOiAuNWVtIDA7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSxcXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogIzJkMmQyZDtcXG59XFxuXFxuLyogSW5saW5lIGNvZGUgKi9cXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdHBhZGRpbmc6IC4xZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogLjNlbTtcXG5cXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5cXG4udG9rZW4uY29tbWVudCxcXG4udG9rZW4uYmxvY2stY29tbWVudCxcXG4udG9rZW4ucHJvbG9nLFxcbi50b2tlbi5kb2N0eXBlLFxcbi50b2tlbi5jZGF0YSB7XFxuXFx0Y29sb3I6ICM5OTk7XFxufVxcblxcbi50b2tlbi5wdW5jdHVhdGlvbiB7XFxuXFx0Y29sb3I6ICNjY2M7XFxufVxcblxcbi50b2tlbi50YWcsXFxuLnRva2VuLmF0dHItbmFtZSxcXG4udG9rZW4ubmFtZXNwYWNlLFxcbi50b2tlbi5kZWxldGVkIHtcXG5cXHRjb2xvcjogI2UyNzc3YTtcXG59XFxuXFxuLnRva2VuLmZ1bmN0aW9uLW5hbWUge1xcblxcdGNvbG9yOiAjNjE5NmNjO1xcbn1cXG5cXG4udG9rZW4uYm9vbGVhbixcXG4udG9rZW4ubnVtYmVyLFxcbi50b2tlbi5mdW5jdGlvbiB7XFxuXFx0Y29sb3I6ICNmMDhkNDk7XFxufVxcblxcbi50b2tlbi5wcm9wZXJ0eSxcXG4udG9rZW4uY2xhc3MtbmFtZSxcXG4udG9rZW4uY29uc3RhbnQsXFxuLnRva2VuLnN5bWJvbCB7XFxuXFx0Y29sb3I6ICNmOGM1NTU7XFxufVxcblxcbi50b2tlbi5zZWxlY3RvcixcXG4udG9rZW4uaW1wb3J0YW50LFxcbi50b2tlbi5hdHJ1bGUsXFxuLnRva2VuLmtleXdvcmQsXFxuLnRva2VuLmJ1aWx0aW4ge1xcblxcdGNvbG9yOiAjY2M5OWNkO1xcbn1cXG5cXG4udG9rZW4uc3RyaW5nLFxcbi50b2tlbi5jaGFyLFxcbi50b2tlbi5hdHRyLXZhbHVlLFxcbi50b2tlbi5yZWdleCxcXG4udG9rZW4udmFyaWFibGUge1xcblxcdGNvbG9yOiAjN2VjNjk5O1xcbn1cXG5cXG4udG9rZW4ub3BlcmF0b3IsXFxuLnRva2VuLmVudGl0eSxcXG4udG9rZW4udXJsIHtcXG5cXHRjb2xvcjogIzY3Y2RjYztcXG59XFxuXFxuLnRva2VuLmltcG9ydGFudCxcXG4udG9rZW4uYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50b2tlbi5pdGFsaWMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRva2VuLmVudGl0eSB7XFxuXFx0Y3Vyc29yOiBoZWxwO1xcbn1cXG5cXG4udG9rZW4uaW5zZXJ0ZWQge1xcblxcdGNvbG9yOiBncmVlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1nL211c2ljLWJhbm5lci5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotbXMtY2xlYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbi1yZWd1bGFyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjIyNzc7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggIzM5M0U0MSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggIzM5M0U0MSk7XFxuICBmb250LWZhbWlseTogTW9uYWNvLCBtb25vc3BhY2U7XFxufVxcblxcbi5wYWdlLTQwNCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4ucGFnZS00MDQgKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnBhZ2UtNDA0IGgxIHtcXG4gIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtMXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTFweCAwcHgsIHJlZCAxLjVweCAxcHggMHB4O1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGFnZS00MDQgaDIge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGFnZS00MDQgaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNDB2dztcXG59XFxuXFxuLnBhZ2UtNDA0IGltZzpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbn1cXG5cXG4ucGFnZS00MDQgaDI6aG92ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC0xcHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtMXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDEuNXB4IDFweCAwcHgpO1xcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC0xcHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtMXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDEuNXB4IDFweCAwcHgpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG59XFxuXFxuLnNoYWRvd2VkOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICMyMjIyMjIgMXB4IDFweCAxMHB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMjIyMjIyIDFweCAxcHggMTBweDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgbW9ub3NwYWNlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjRkRGRkZDO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4uaGVhZGVyIDo6c2xvdHRlZCB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXG4gIGhlaWdodDogNjVweDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZzpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coZ3JlZW55ZWxsb3cgLTJweCAwcHggMHB4KSBkcm9wLXNoYWRvdyhjeWFuIDEuNXB4IC0ycHggMHB4KSBkcm9wLXNoYWRvdyhyZWQgMi41cHggMS41cHggMHB4KTtcXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyhncmVlbnllbGxvdyAtMnB4IDBweCAwcHgpIGRyb3Atc2hhZG93KGN5YW4gMS41cHggLTJweCAwcHgpIGRyb3Atc2hhZG93KHJlZCAyLjVweCAxLjVweCAwcHgpO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxufVxcblxcbi5oZWFkZXIgaDE6aG92ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcbn1cXG5cXG4uYW5uaXZlcnNhcnkge1xcbiAgLyogZmYzLjYrICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgI0ZGMjI3NyksIGNvbG9yLXN0b3AoMTAwJSwgYXF1YSkpO1xcbiAgLyogc2FmYXJpNCssY2hyb21lICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZGMjI3NyAwJSwgYXF1YSAxMDAlKTtcXG4gIC8qIHNhZmFyaTUuMSssY2hyb21lMTArICovXFxuICAvKiBvcGVyYSAxMS4xMCsgKi9cXG4gIC8qIGllMTArICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRjIyNzcgMCUsIGFxdWEgMTAwJSk7XFxuICAvKiB3M2MgKi9cXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVxcXCIjMDBmZmZmXFxcIiwgZW5kQ29sb3JzdHI9XFxcIiNmZjAwZmZcXFwiLEdyYWRpZW50VHlwZT0xICk7XFxuICAvKiBpZTYtOSAqL1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5waG9lbml4IHtcXG4gIC8qIGZmMy42KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNDNTI0MzcpLCBjb2xvci1zdG9wKDEwMCUsICNGN0UyN0MpKTtcXG4gIC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNDNTI0MzcgMCUsICNGN0UyN0MgMTAwJSk7XFxuICAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcbiAgLyogb3BlcmEgMTEuMTArICovXFxuICAvKiBpZTEwKyAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjQzUyNDM3IDAlLCAjRjdFMjdDIDEwMCUpO1xcbiAgLyogdzNjICovXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0kcGhvZW5peC1wcmltYXJ5LWNvbG9yLCBlbmRDb2xvcnN0cj0kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcixHcmFkaWVudFR5cGU9MSApO1xcbiAgLyogaWU2LTkgKi9cXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udmhzLWNvbG9yIHtcXG4gIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtNXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTVweCAwcHgsIHJlZCAzLjVweCAzLjVweCAwcHg7XFxufVxcblxcbi50ZXJ0aWFyeS10ZXh0LWNvbG9yIHtcXG4gIGNvbG9yOiAjRkYyMjc3O1xcbn1cXG5cXG4ubWFpbi1ncmFkaWVudC10ZXh0IHtcXG4gIC8qIGZmMy42KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNDNTI0MzcpLCBjb2xvci1zdG9wKDEwMCUsICNGN0UyN0MpKTtcXG4gIC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNDNTI0MzcgMCUsICNGN0UyN0MgMTAwJSk7XFxuICAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcbiAgLyogb3BlcmEgMTEuMTArICovXFxuICAvKiBpZTEwKyAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjQzUyNDM3IDAlLCAjRjdFMjdDIDEwMCUpO1xcbiAgLyogdzNjICovXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0kcGhvZW5peC1wcmltYXJ5LWNvbG9yLCBlbmRDb2xvcnN0cj0kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcixHcmFkaWVudFR5cGU9MSApO1xcbiAgLyogaWU2LTkgKi9cXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubWFpbi1ib2R5IHtcXG4gIHRvcDogNzVweDtcXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA3NXB4KTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzVweCk7XFxufVxcblxcbi5wb3B1cCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRvcDogNzVweDtcXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMHZoIC0gNzVweCAtIDcwcHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCAtIDcwcHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XFxcXDkgO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0jMjIwMDAwMDAsZW5kQ29sb3JzdHI9IzIyMDAwMDAwKTtcXG4gIHpvb206IDE7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIge1xcbiAgei1pbmRleDogMTEwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4IDBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucG9wdXAtZGl2IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiA1MDBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMHB4ICNGRjIyNzc7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ucG9wdXAgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAgY29kZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzM5M0U0MTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMzOTNFNDE7XFxufVxcblxcbi5wb3B1cCA+IGRpdiBzbWFsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjRkYyMjc3O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNoYXJlLWJ1dHRvbi1kaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hhcmUtYnV0dG9uLWRpdiA+ICoge1xcbiAgbWFyZ2luOiA1cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG59XFxuXFxuLnNoYXJlLWJ1dHRvbi1kaXYgPiAqOmhvdmVyIC5zaGFyZS1idXR0b24taWNvbiB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICNGRjIyNzcgM3B4IDJweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogI0ZGMjI3NyAzcHggMnB4O1xcbn1cXG5cXG4uc2hhcmUtYnV0dG9uLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxufVxcblxcbi5zaGFyZS1jb3VudC13cmFwcGVyID4gKiB7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnNoYXJlLWxpbmstY29weSB7XFxuICBwYWRkaW5nOiA3LjVweCAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDc7XFxuICBwYWRkaW5nLWJvdHRvbTogODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjIyNzc7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxuICAgICAgICAgIGJveC1zaGFkb3c6ICMzOTNFNDEgNXB4IDIuNXB4O1xcbn1cXG5cXG4uc2hhcmUtbGluayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMzIwcHg7XFxuICBwYWRkaW5nOiA3LjVweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxufVxcblxcbi5uYXZpZ2F0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIGhlaWdodDogMzVweDtcXG4gIHRvcDogNzVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzM5M0U0MTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMzOTNFNDE7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkYyMjc3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA0NXB4KTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxufVxcblxcbi5uYXZpZ2F0b3IgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggIzM5M0U0MTtcXG59XFxuXFxuLm5hdmlnYXRvciBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGJ1dHRvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgbWFyZ2luOiAxLjI1cHg7XFxuICByaWdodDogNDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweCA4cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICMzOTNFNDEgNXB4IDIuNXB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG59XFxuXFxuLm5hdmlnYXRvciBidXR0b246aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDcuNXB4IDIuNXB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMzkzRTQxIDcuNXB4IDIuNXB4O1xcbn1cXG5cXG4ubmF2aWdhdG9yIGJ1dHRvbiBpbnB1dCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLm5hdmlnYXRvciBidXR0b24gbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDM1cHggLSA3NXB4IC0gNzBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNXB4IC0gNzVweCAtIDcwcHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmxpbmstZGlzYWJsZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMjUwcHggNzVweCAjMTAxMDEwLCAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDc1cHggIzEwMTAxMCwgMTBweCA3LjVweCAxcHggMHB4ICNGRjIyNzc7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICMzOTNFNDE7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICMzOTNFNDE7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiAqIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiBwIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIHNtYWxsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAyMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCA3NXB4ICMxMDEwMTAsIDEwcHggNy41cHggMXB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjUwcHggNzVweCAjMTAxMDEwLCAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDMwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWw6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wb3N0LXRodW1ibmFpbCBkaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnBvc3QtdGh1bWJuYWlsIGRpdiAqIHtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWwgZGl2IHAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnBvc3QtdGh1bWJuYWlsIHNtYWxsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAyMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1wYWdlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNsb3NlLWljb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZS1pY29uOmhvdmVyIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxufVxcblxcbi5zaGFyZS1pY29uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICByaWdodDogOTBweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAycHggI0ZGMjI3Nyk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMnB4ICNGRjIyNzcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hhcmUtaWNvbjpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG59XFxuXFxuLmFib3V0LWgxIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hYm91dC1oMiB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmFib3V0LXAge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IC03LjVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3LjVweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5hYm91dC1tZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICMzOTNFNDE7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggNy41cHggMXB4IDBweCAjMzkzRTQxO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5hYm91dC1tZSBpbWcge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMjIyMjIyIDFweCAxcHggMTBweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzIyMjIyMiAxcHggMXB4IDEwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG59XFxuXFxuLmFib3V0LW1lIGltZzpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggNy41cHggMXB4IDBweCAjMzkzRTQxO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggIzM5M0U0MTtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwdncgLSAxMDBweCk7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4uY29udGFjdC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtcmlnaHQgaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNvbnRhY3QtcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYyMjc3O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICMzOTNFNDE7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICNGRjIyNzc7XFxufVxcblxcbi5jb250YWN0LXRodW1ibmFpbDpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMXB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDFweCAwcHggI0ZGMjI3NztcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIGRpdiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gODBweCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4ucDUtaW5mbyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM5M0U0MTtcXG59XFxuXFxuLnA1LWluZm8gaDEge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ucDUtaW5mbyBwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucDUtaW5mbyBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYyMjc3O1xcbn1cXG5cXG4ucDUtaW5mbyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICBib3JkZXI6IG5vbmU7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG59XFxuXFxuLnA1LWluZm8tc2xpZGUge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNzVweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGxlZnQ6IDI1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5wNS1pbmZvLXNsaWRlIGltZyB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIGhlaWdodDogNDBweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxufVxcblxcbi5wNS1pbmZvLXNsaWRlIGltZzpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICMzOTNFNDEpO1xcbn1cXG5cXG4ucDUtaW5mby1zaG93IHtcXG4gIHotaW5kZXg6IDU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXG59XFxuXFxuLnA1LWluZm8tc2hvdyBwIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5wNS1pbmZvLXNob3c6OmFmdGVyIHtcXG4gIHotaW5kZXg6IDIwO1xcbiAgY29udGVudDogXFxcIkhpZGUgdGhpcyBpbmZvcm1hdGlvbiBwYW5lbCB3aXRoIHRoZSBeIGJ1dHRvbiBhYm92ZVxcXCI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDEwLjVweDtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5wNS1jYW52YXMge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDA7XFxuICB0b3A6IDE1MHB4O1xcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCAtIDc1cHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCAtIDcwcHggLSA3NXB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4ud2VibG9nLXNpZ25hdHVyZSB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgY29sb3I6ICNGRjIyNzc7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLm11c2ljLXJlbGVhc2UtYmFubmVyIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDBweDtcXG59XFxuXFxuLm11c2ljLXJlbGVhc2UtYmFubmVyIHAsIC5tdXNpYy1yZWxlYXNlLWJhbm5lciBoMSwgLm11c2ljLXJlbGVhc2UtYmFubmVyIGgyLCAubXVzaWMtcmVsZWFzZS1iYW5uZXIgaDMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiAtbW96LW1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCBibGFjaztcXG59XFxuXFxuLnN1Ym1lcmdlbmNlLWhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICMzOTNFNDEpO1xcbn1cXG5cXG4uc3VibWVyZ2VuY2UtaG92ZXIgaW1nIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxufVxcblxcbi5zdWJtZXJnZW5jZS1ob3Zlcjpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAwcHggI0ZGMjI3Nyk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMHB4ICNGRjIyNzcpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZvb3RlciBociB7XFxuICBib3JkZXItY29sb3I6ICNGRjIyNzc7XFxufVxcblxcbi5mb290ZXIgYnV0dG9uLCAuZm9vdGVyIGEge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMyMjIyMjI7XFxufVxcblxcbi5mb290ZXIgYnV0dG9uOmhvdmVyLCAuZm9vdGVyIGE6aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI0ZERkZGQztcXG59XFxuXFxuLmNvcHlyaWdodCB7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBjb2xvcjogI0ZGMjI3NztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtc2hhZG93OiAjMjIyMjIyIDJweCAycHggMXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIGgxLCAuaGVhZGVyIGltZyB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDU1cHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLmJ1dHRvbi1yZWd1bGFyIHtcXG4gICAgcGFkZGluZzogNy41cHggMTJweDtcXG4gIH1cXG5cXG4gIC5oaWRlLW9uLXdlYiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5oaWRlLW9uLW1vYmlsZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICAucG9wdXAge1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDAlIC0gNzVweCAtIDcwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDc1cHggLSA3MHB4KTtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0b3IgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAubmF2aWdhdG9yIGJ1dHRvbiB7XFxuICAgIHJpZ2h0OiA0NXB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtbGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSAzNXB4IC0gNzVweCAtIDcwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNXB4IC0gNzVweCAtIDcwcHgpO1xcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcblxcbiAgLnBvc3QtdGh1bWJuYWlsIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6Zmlyc3Qtb2YtdHlwZSwgLnBvc3QtdGh1bWJuYWlsOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSwgLnBvc3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsIHAge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgcCB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgc21hbGwge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgZGl2IHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgfVxcblxcbiAgLmNsb3NlLWljb24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC1wYWdlIHtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWxlZnQge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtcmlnaHQge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGxlZnQ6IDQwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDYwdncgLSAxMDBweCk7XFxuICAgIHdpZHRoOiBjYWxjKDYwdncgLSAxMDBweCk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LXJpZ2h0IGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5hYm91dCB7XFxuICAgIG1hcmdpbjogMCAyMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmFib3V0LW1lIGltZyB7XFxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoNTAlIC0gNDIuNXB4KTtcXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gNDIuNXB4KTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICByaWdodDogMDtcXG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lIGRpdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSBkaXYgcCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIHtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgfVxcblxcbiAgLnA1LWluZm8gaDEge1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAucDUtaW5mbyBwIHtcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB9XFxuXFxuICAucDUtaW5mbyBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNy41cHggMTJweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTQ1cHg7XFxuICB9XFxuXFxuICAucDUtaW5mby1zbGlkZSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8tc2xpZGUgaW1nIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxuICB9XFxuXFxuICAucDUtaW5mby1zaG93IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNob3c6OmFmdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIC5zdWJtZXJnZW5jZS1ob3ZlciBiciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAud2VibG9nLXBvc3Qge1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICB9XFxuXFxuICAud2VibG9nLXBvc3QgKiB7XFxuICAgIG1heC13aWR0aDogNzUwcHg7XFxuICAgIG1hcmdpbjogMnB4IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC53ZWJsb2ctcG9zdCBzbWFsbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLndlYmxvZy1wb3N0IHAge1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gIH1cXG5cXG4gIC53ZWJsb2ctcG9zdCBoMSB7XFxuICAgIG1heC13aWR0aDogLXdlYmtpdC1jYWxjKDEwMHZ3IC0gMjUwcHgpO1xcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyNTBweCk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciBidXR0b24sIC5mb290ZXIgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiA1cHggMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuXFxuICBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgY29kZSB7XFxuICAgIHBhZGRpbmc6IDBweCA0cHg7XFxuICB9XFxuXFxuICAubWFpbi1ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG5cXG4gIC5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgfVxcblxcbiAgLmhlYWRlciBpbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gIH1cXG5cXG4gIC5oaWRlLW9uLXdlYiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICAuaGlkZS1vbi1tb2JpbGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuXFxuICAucG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA0MHB4IC0gNzBweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCAtIDcwcHgpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRvciBpbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRvciBidXR0b24ge1xcbiAgICByaWdodDogNXB4O1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxuXFxuICAubmF2aWdhdG9yIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA0NXB4KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ1cHgpO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwMHB4IDUwcHggYmxhY2ssIDEwcHggMTBweCAxcHggMHB4ICNGRjIyNzc7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwMHB4IDUwcHggYmxhY2ssIDEwcHggMTBweCAxcHggMHB4ICNGRjIyNzc7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICB9XFxuXFxuICAucG9zdC10aHVtYm5haWwge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwcHggNTBweCBibGFjaywgMTBweCAxMHB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwcHggNTBweCBibGFjaywgMTBweCAxMHB4IDFweCAwcHggI0ZGMjI3NztcXG4gIH1cXG5cXG4gIC5wb3N0LXRodW1ibmFpbDpsYXN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5wb3N0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbCBwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbCBoMiB7XFxuICAgIHBhZGRpbmc6IDBweCA0MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtICgzNXB4ICsgNDBweCArIDcwcHgpKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAoMzVweCArIDQwcHggKyA3MHB4KSk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2xvc2UtaWNvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC1wYWdlIHtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtICg0MHB4ICsgNzBweCkpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICg0MHB4ICsgNzBweCkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB9XFxuXFxuICAuc2hhcmUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250YWluZXIge1xcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMHZ3IC0gMTAwcHgpO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1sZWZ0IHtcXG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gNjBweCk7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1yaWdodCB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LXJpZ2h0IGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LXRodW1ibmFpbCBkaXYge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAuYWJvdXQge1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUgcCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLnA1LWluZm8gaDEge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNy41cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWF4LXdpZHRoOiA0NSU7XFxuICAgIG1heC13aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSAyMDBweCk7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xcbiAgICBtYXgtaGVpZ2h0OiAyNnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIHAge1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuXFxuICAucDUtaW5mbyBidXR0b24sIC5wNS1pbmZvIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBjb2xvcjogI0ZERkZGQztcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA3LjVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0ycHg7XFxuICAgIHJpZ2h0OiAzNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8gaW5wdXQge1xcbiAgICB3aWR0aDogMTY1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8tc2xpZGUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICB9XFxuXFxuICAucDUtaW5mby1zbGlkZSBpbWcge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNob3cge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICB9XFxuXFxuICAucDUtaW5mby1zaG93OjphZnRlciB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuXFxuICAucDUtaW5mby1zaG93IGgxIHtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIH1cXG5cXG4gIC5wNS1jYW52YXMge1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA0MHB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5zdWJtZXJnZW5jZS1ob3ZlciBiciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLndlYmxvZy1wb3N0IHtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAud2VibG9nLXBvc3QgcCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gIH1cXG5cXG4gIC5mb290ZXIgYnV0dG9uLCAuZm9vdGVyIGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogNy41cHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly9uYXZpZ2F0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly90aHVtYm5haWwuc2Nzc1wiLFwid2VicGFjazovL3Byb2plY3Quc2Nzc1wiLFwid2VicGFjazovL3dlYi12aWV3LnNjc3NcIixcIndlYnBhY2s6Ly9tb2JpbGUtdmlldy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQW1DQTtFQUNFLFNBQUE7RUFDQSw4QkFuQlU7QUFmWjs7QUFxQ0E7RUFDSSx5QkF6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QXRRYTtJQXVRYixlQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VMc2hDTjs7RUtuaENFO0lBQ0ksZ0NBQUE7SUFBQSx3QkFBQTtJQUNBLFlBQUE7SUFFQSxnREFBQTtJQUNBLHdDQUFBO0VMcWhDTjs7RUtoaENFO0lBQ0ksWUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJML1JRO0VBa3pDZDs7RUtoaENFO0lBQ0ksZ0JBQUE7RUxtaENOOztFS2hoQ0U7SUFFSSw4QkFBQTtJQUNBLG1CQUFBO0lBRUEsdUJBQUE7RUxpaENOOztFSzlnQ0U7SUFDSSxTQTFTYTtJQTJTYixpQ0FBQTtJQUFBLHlCQUFBO0lBRUEsVUFBQTtFTGdoQ047O0VLNWdDRTtJQUNJLGNBQUE7RUwrZ0NOOztFSzVnQ0U7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFFQSxnQkFBQTtFTDhnQ047O0VLM2dDRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUw4Z0NOOztFSzNnQ0U7SUFDSSxXQUFBO0lBQ0EsWUFyVVk7SUF1VVoseUJMelVVO0lLMlVWLGVBQUE7RUw0Z0NOOztFS3ZnQ0U7SUFFSSxxQkFBQTtJQUVBLGtCQUFBO0lBQ0EsZ0JBQUE7RUx3Z0NOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHByaW1hcnktY29sb3I6ICMyMjIyMjI7XFxyXFxuJHNlY29uZGFyeS1jb2xvcjogIzM5M0U0MTtcXHJcXG4kdGVydGlhcnktY29sb3I6ICNGRjIyNzc7XFxyXFxuLy8gJHRlcnRpYXJ5LWNvbG9yOiAjQ0MwMDQ0O1xcclxcbiRwcmltYXJ5LXRleHQtY29sb3I6ICNGREZGRkM7XFxyXFxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjMzkzRTQxO1xcclxcbiR0ZXJ0aWFyeS10ZXh0LWNvbG9yOiAjRkYyMjc3O1xcclxcbi8vICR0ZXJ0aWFyeS10ZXh0LWNvbG9yOiAjRUUxMTY2O1xcclxcbiRwaG9lbml4LXByaW1hcnktY29sb3I6ICNDNTI0Mzc7XFxyXFxuJHBob2VuaXgtc2Vjb25kYXJ5LWNvbG9yOiAjRjA4ODQzO1xcclxcbiRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yOiAjRjdFMjdDO1xcclxcblxcclxcbi8vICR0ZXJ0aWFyeS1jb2xvcjogJHBob2VuaXgtcHJpbWFyeS1jb2xvcjtcXHJcXG4vLyAkdGVydGlhcnktdGV4dC1jb2xvcjogJHBob2VuaXgtc2Vjb25kYXJ5LWNvbG9yO1xcclxcblxcclxcbiR0aXRsZS1mb250OiBNb25hY28sIG1vbm9zcGFjZTtcXHJcXG4vLyAkYm9keS1mb250OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbi8vICRib2R5LWZvbnQ6IE1vbm9zcGFjZTtcXHJcXG4kYm9keS1mb250OiBNb25hY28sIG1vbm9zcGFjZTtcXHJcXG4kaGVhZGVyLWhlaWdodDogNzVweDtcXHJcXG4kc2VhcmNoLWhlaWdodDogMzVweDtcXHJcXG4kdGh1bWJuYWlsLXNpemU6IDI1MHB4O1xcclxcbiRib3R0b20taGVpZ2h0OiA3MHB4O1xcclxcbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcXHJcXG4kcDUtaW5mby1oZWlnaHQ6IDc1cHg7XFxyXFxuJHRodW1ibmFpbC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcclxcbiR2aHMtc2hhZG93cy1sOiBncmVlbnllbGxvdyAtNXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTVweCAwcHgsIHJlZCAzLjVweCAzcHggMHB4O1xcclxcbiR2aHMtc2hhZG93cy1tOiBncmVlbnllbGxvdyAtMnB4IDBweCAwcHgsIGN5YW4gMS41cHggLTJweCAwcHgsIHJlZCAyLjVweCAxLjVweCAwcHg7XFxyXFxuJHZocy1zaGFkb3dzLXM6IGdyZWVueWVsbG93IC0xcHggMHB4IDBweCwgY3lhbiAwLjVweCAtMXB4IDBweCwgcmVkIDEuNXB4IDFweCAwcHg7XFxyXFxuJHZocy1zaGFkb3dzLWRyb3AtbDogZHJvcC1zaGFkb3coZ3JlZW55ZWxsb3cgLTVweCAwcHggMHB4KSBkcm9wLXNoYWRvdyhjeWFuIDAuNXB4IC01cHggMHB4KSBkcm9wLXNoYWRvdyhyZWQgMy41cHggM3B4IDBweCk7XFxyXFxuJHZocy1zaGFkb3dzLWRyb3AtbTogZHJvcC1zaGFkb3coZ3JlZW55ZWxsb3cgLTJweCAwcHggMHB4KSBkcm9wLXNoYWRvdyhjeWFuIDEuNXB4IC0ycHggMHB4KSBkcm9wLXNoYWRvdyhyZWQgMi41cHggMS41cHggMHB4KTtcXHJcXG4kdmhzLXNoYWRvd3MtZHJvcC1zOiBkcm9wLXNoYWRvdyhncmVlbnllbGxvdyAtMXB4IDBweCAwcHgpIGRyb3Atc2hhZG93KGN5YW4gMC41cHggLTFweCAwcHgpIGRyb3Atc2hhZG93KHJlZCAxLjVweCAxcHggMHB4KTtcXHJcXG4kZ3JleS1zaGFkb3c6ICRwcmltYXJ5LWNvbG9yIDFweCAxcHggMTBweDtcXHJcXG4kZ3JleS1zaGFkb3ctZHJvcDogZHJvcC1zaGFkb3coJHByaW1hcnktY29sb3IgMXB4IDFweCAxMHB4KTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkYm9keS1mb250O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTokcmVndWxhci1mb250LXNpemU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9ue1xcclxcbiAgICAvLy13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi1tcy1jbGVhcntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1yZWd1bGFye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRib2R5LWZvbnQ7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLTQwNHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAvLyBwYWRkaW5nOiAxMCU7XFxyXFxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xcclxcblxcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtNDA0ICp7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLTQwNCBoMXtcXHJcXG4gICAgdGV4dC1zaGFkb3c6ICR2aHMtc2hhZG93cy1zO1xcclxcbiAgICBmb250LXNpemU6IDMgKiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtNDA0IGgye1xcclxcbiAgICBmb250LXNpemU6IDIgKiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtNDA0IGltZ3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIC8vIHdpZHRoOiAxMDAlO1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgLy8gZmlsdGVyOi8qZHJvcC1zaGFkb3coJHRlcnRpYXJ5LWNvbG9yIDBweCAwcHggNTBweCkgKi9cXHJcXG4gICAgLy8gICAgIC8vIGRyb3Atc2hhZG93KCR0ZXJ0aWFyeS1jb2xvciA0MHB4IDBweCAwcHgpXFxyXFxuICAgIC8vICAgICAvLyBkcm9wLXNoYWRvdygkdGVydGlhcnktY29sb3IgLTQwcHggMHB4IDBweClcXHJcXG4gICAgLy8gICAgIGRyb3Atc2hhZG93KCR0ZXJ0aWFyeS1jb2xvciAwcHggNDBweCAwcHgpO1xcclxcbiAgICAvLyAgICAgLy8gZHJvcC1zaGFkb3coJHRlcnRpYXJ5LWNvbG9yIDBweCAtNDBweCAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS00MDQgaW1nOmhvdmVye1xcclxcbiAgICB0cmFuc2l0aW9uOiAkdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtNDA0IGgyOmhvdmVye1xcclxcbiAgICBmaWx0ZXI6JHZocy1zaGFkb3dzLWRyb3AtcztcXHJcXG4gICAgdHJhbnNpdGlvbjogJHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93ZWQ6aG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246ICR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogJGdyZXktc2hhZG93O1xcclxcbiAgICAvLyBib3gtc2hhZG93OiAkdmhzLXNoYWRvd3MtbDtcXHJcXG4gICAgLy8gdGV4dC1zaGFkb3c6ICR2aHMtc2hhZG93cy1sO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICBjb2xvcjokcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBmb250LWZhbWlseTogJGJvZHktZm9udDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3OztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAkdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxufVxcclxcblxcclxcbmNvZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkdGl0bGUtZm9udDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgOjpzbG90dGVkIHtcXHJcXG4gICAgZmxvYXQ6bGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBpbWcge1xcclxcbiAgICB0cmFuc2l0aW9uOiAkdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIGhlaWdodDogKCRoZWFkZXItaGVpZ2h0IC0gMTApO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogZ3JlZW55ZWxsb3cgLTEuNXB4IDEuNXB4IDBweCwgY3lhbiAwLjVweCAtMS41cHggMHB4LCByZWQgMS41cHggMS41cHggMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGltZzpob3ZlciB7XFxyXFxuICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgICAgIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbTtcXHJcXG4gICAgICAgIC8vIGZpbHRlcjogJGdyZXktc2hhZG93LWRyb3A7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaDEge1xcclxcbiAgICB0cmFuc2l0aW9uOiAkdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIC8vIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaDE6aG92ZXJ7XFxyXFxuICAgIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubml2ZXJzYXJ5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsICR0ZXJ0aWFyeS1jb2xvciAwJSwgcmdiYSgwLDI1NSwyNTUsMSkgMTAwJSk7IC8qIGZmMy42KyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgJHRlcnRpYXJ5LWNvbG9yKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDAsMjU1LDI1NSwxKSkpOyAvKiBzYWZhcmk0KyxjaHJvbWUgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICR0ZXJ0aWFyeS1jb2xvciAwJSwgcmdiYSgwLDI1NSwyNTUsMSkgMTAwJSk7IC8qIHNhZmFyaTUuMSssY2hyb21lMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHRlcnRpYXJ5LWNvbG9yIDAlLCByZ2JhKDAsMjU1LDI1NSwxKSAxMDAlKTsgLyogb3BlcmEgMTEuMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsICR0ZXJ0aWFyeS1jb2xvciAwJSwgcmdiYSgwLDI1NSwyNTUsMSkgMTAwJSk7IC8qIGllMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHRlcnRpYXJ5LWNvbG9yIDAlLCByZ2JhKDAsMjU1LDI1NSwxKSAxMDAlKTsgLyogdzNjICovXFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDBmZmZmJywgZW5kQ29sb3JzdHI9JyNmZjAwZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIGllNi05ICovXFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5waG9lbml4IHtcXHJcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiBmZjMuNisgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICRwaG9lbml4LXByaW1hcnktY29sb3IpLCBjb2xvci1zdG9wKDEwMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yKSk7IC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIHNhZmFyaTUuMSssY2hyb21lMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIG9wZXJhIDExLjEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogaWUxMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogdzNjICovXFxyXFxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPSRwaG9lbml4LXByaW1hcnktY29sb3IsIGVuZENvbG9yc3RyPSRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yLEdyYWRpZW50VHlwZT0xICk7IC8qIGllNi05ICovXFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi52aHMtY29sb3Ige1xcclxcbiAgICAvLyBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgXFxyXFxuICAgIC8vIGNvbG9yOiAjMDBmO1xcclxcbiAgICAvLyBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIC8vIHRleHQtc2hhZG93OiAjMGYwIDVweCA1cHggMXB4LCAjZjAwIDEwcHggMTBweCAxcHg7IC8vLCAjMDBmIC01cHggLTVweCAwcHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtNXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTVweCAwcHgsIHJlZCAzLjVweCAzLjVweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXJ0aWFyeS10ZXh0LWNvbG9ye1xcclxcbiAgICBjb2xvcjogJHRlcnRpYXJ5LXRleHQtY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWdyYWRpZW50LXRleHQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIGZmMy42KyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgJHBob2VuaXgtcHJpbWFyeS1jb2xvciksIGNvbG9yLXN0b3AoMTAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IpKTsgLyogc2FmYXJpNCssY2hyb21lICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogc2FmYXJpNS4xKyxjaHJvbWUxMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogb3BlcmEgMTEuMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiBpZTEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiB3M2MgKi9cXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JHBob2VuaXgtcHJpbWFyeS1jb2xvciwgZW5kQ29sb3JzdHI9JHBob2VuaXgtdGVydGlhcnktY29sb3IsR3JhZGllbnRUeXBlPTEgKTsgLyogaWU2LTkgKi9cXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gLmhlYWRlciBoMTpob3ZlciB7XFxyXFxuLy8gICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuLy8gICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuLy8gfVxcclxcblxcclxcbi5tYWluLWJvZHl7XFxyXFxuICAgIHRvcDogJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVhZGVyLWhlaWdodH0pO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIHRvcDogJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idXR0b257XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIC8vIHRvcDogJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYigwLDAsMCk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XFxcXDk7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjgpO1xcclxcbiAgICBmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9IzIyMDAwMDAwLGVuZENvbG9yc3RyPSMyMjAwMDAwMCk7XFxyXFxuICAgIHpvb206IDE7XFxyXFxuICAgIHdpZHRoOjEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVye1xcclxcbiAgICB6LWluZGV4OiAxMTA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAvLyBwYWRkaW5nOjEwMHB4IDBweDtcXHJcXG4gICAgcGFkZGluZzogNTBweCAwcHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZGl2IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcXHJcXG4gICAgLy8gbWFyZ2luLXRvcDo1MHB4O1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGJsYWNrO1xcclxcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICAgIGNvbG9yOiRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIGNvZGUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDEwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDAgMCAxMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCA+IGRpdiBzbWFsbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAkdGVydGlhcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtYnV0dG9uLWRpdntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtYnV0dG9uLWRpdiA+ICp7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoNmRlZykgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWJ1dHRvbi1kaXYgPiAqOmhvdmVyIHtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG5cXHJcXG4gICAgLnNoYXJlLWJ1dHRvbi1pY29ue1xcclxcbiAgICAgICAgYm94LXNoYWRvdzokdGVydGlhcnktY29sb3IgM3B4IDJweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtYnV0dG9uLWljb257XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogJHNlY29uZGFyeS1jb2xvciA1cHggMi41cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1jb3VudC13cmFwcGVyID4gKntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcclxcbiAgICBwYWRkaW5nOiAzcHggNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtbGluay1jb250YWluZXJ7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtbGluay1jb3B5e1xcclxcbiAgICBwYWRkaW5nOiA3LjVweCAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcblxcclxcbiAgICBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDVweCAyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWxpbmt7XFxyXFxuXFxyXFxuICAgIC8vIC1tb3otdXNlci1zZWxlY3Q6IGFsbDtcXHJcXG4gICAgLy8gLXdlYmtpdC11c2VyLXNlbGVjdDogYWxsO1xcclxcbiAgICAvLyAtbXMtdXNlci1zZWxlY3Q6IGFsbDtcXHJcXG4gICAgLy8gdXNlci1zZWxlY3Q6IGFsbDtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDcuNXB4O1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcblxcclxcbiAgICBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDVweCAyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuQGltcG9ydCAnLi9uYXZpZ2F0aW9uLnNjc3MnO1xcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skc2VhcmNoLWhlaWdodH0gLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstZGlzYWJsZWQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AaW1wb3J0ICcuL3RodW1ibmFpbC5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3Byb2plY3Quc2Nzcyc7XFxyXFxuXFxyXFxuLmZvb3RlcntcXHJcXG4gICAgaGVpZ2h0OiAkYm90dG9tLWhlaWdodDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBocntcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiR0ZXJ0aWFyeS1jb2xvclxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGJ1dHRvbiwgLmZvb3RlciBhe1xcclxcbiAgICBmb250LXNpemU6JHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjsgICAgXFxyXFxuICAgIC8vIHRleHQtc2hhZG93OiAkcHJpbWFyeS1jb2xvciAycHggMnB4IDFweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhe1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggJHByaW1hcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYnV0dG9uOmhvdmVyLCAuZm9vdGVyIGE6aG92ZXIge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uY29weXJpZ2h0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgICBjb2xvcjokdGVydGlhcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgIHRleHQtc2hhZG93OiAkcHJpbWFyeS1jb2xvciAycHggMnB4IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuQGltcG9ydCAnd2ViLXZpZXcuc2Nzcyc7XFxyXFxuQGltcG9ydCAnbW9iaWxlLXZpZXcuc2Nzcyc7XCIsXCIubmF2aWdhdG9yIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBoZWlnaHQ6ICRzZWFyY2gtaGVpZ2h0O1xcclxcbiAgICB0b3A6ICRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0b3IgaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogJHNlYXJjaC1oZWlnaHQgLSAxMDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRvciBpbnB1dCB7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDEwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDAgMCAxMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogJHNlYXJjaC1oZWlnaHQgLSAyMDtcXHJcXG4gICAgYmFja2dyb3VuZDokdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBjb2xvcjokcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6JHNlYXJjaC1oZWlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0b3IgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6JHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgLy8gdGV4dC1zaGFkb3c6IC0xcHggLTFweCAyLjVweCAkc2Vjb25kYXJ5LXRleHQtY29sb3IsIDFweCAtMXB4IDIuNXB4ICRzZWNvbmRhcnktdGV4dC1jb2xvciwgLTFweCAxcHggMi41cHggJHNlY29uZGFyeS10ZXh0LWNvbG9yLCAxcHggMXB4IDIuNXB4ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRvciBidXR0b24ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuM3M7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6ICRzZWFyY2gtaGVpZ2h0IC0gNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgbWFyZ2luOiAxLjI1cHg7XFxyXFxuICAgIHJpZ2h0OiAkc2VhcmNoLWhlaWdodCsxMHB4O1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoNmRlZykgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6ICRzZWNvbmRhcnktY29sb3IgNy41cHggMi41cHg7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIGJveC1zaGFkb3c6ICRzZWNvbmRhcnktY29sb3IgNXB4IDIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdG9yIGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDZkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDcuNXB4IDIuNXB4O1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICAvLyBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDVweCAyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRvciBidXR0b24gaW5wdXR7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogICAgbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiAgICAgICAgIG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIGNvbG9yOiRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIHdpZHRoOiAkc2VhcmNoLWhlaWdodCAtIDIwO1xcclxcbiAgICBoZWlnaHQ6ICRzZWFyY2gtaGVpZ2h0IC0gMjA7XFxyXFxuICAgIGZsb2F0OmxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0b3IgYnV0dG9uIGxhYmVse1xcclxcbiAgICBtYXJnaW4tdG9wOjBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgZmxvYXQ6cmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi8vIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuLy8gICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuLy8gICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xcclxcbi8vICAgICBtYXJnaW4tdG9wOiAtMS41cHg7XFxyXFxuLy8gICAgIGhlaWdodDogMTZweDtcXHJcXG4vLyAgICAgd2lkdGg6IDE2cHg7XFxyXFxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY2LCAxNjYsIDE2Nik7XFxyXFxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4vLyAgICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAycHggNXB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxuLy8gIH1cXHJcXG5cXHJcXG4vLyAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG5cXHJcXG4vLyAgfVxcclxcblxcclxcbi8vIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbi8vICAgICBjb250ZW50OiAnJztcXHJcXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbi8vICAgICB3aWR0aDogMTFweDtcXHJcXG4vLyAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4vLyAgICAgdG9wOiAxMXB4O1xcclxcbi8vICAgICBsZWZ0OiAxMC45cHg7XFxyXFxuLy8gICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcclxcbi8vICAgICBib3JkZXItdG9wOiBub25lO1xcclxcbi8vICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4vLyAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbi8vICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbi8vICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4vLyAgfVwiLFwiLnByb2plY3QtdGh1bWJuYWlsIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDc1cHggIzEwMTAxMCwgNXB4IDVweCAxcHggMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSA3NXB4ICMxMDEwMTAsMTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSA3NXB4ICMxMDEwMTAsICR2aHMtc2hhZG93cy1sO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgIGhlaWdodDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRodW1ibmFpbDpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgMjAwcHggYmxhY2ssMTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRodW1ibmFpbDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiB7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyBkaXNwbGF5OnRhYmxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgLy9oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aHVtYm5haWwgZGl2ICp7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiBwIHtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRodW1ibmFpbCBzbWFsbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6ICR0aHVtYm5haWwtc2l6ZSAtIDIwcHg7XFxyXFxuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC10aHVtYm5haWwge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcclxcbiAgICAvLyBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgNzVweCAjMTAxMDEwLCA1cHggNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDc1cHggIzEwMTAxMCwxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGhlaWdodDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbDpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAvLyBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgMjAwcHggYmxhY2ssMTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtdGh1bWJuYWlsIGRpdiB7XFxyXFxuICAgIC8vIGRpc3BsYXk6dGFibGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6JHRodW1ibmFpbC1zaXplO1xcclxcbiAgICAvL2hlaWdodDogMTAwJTtcXHJcXG4gICAgLy8gbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbCBkaXYgKntcXHJcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbCBkaXYgcCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbCBzbWFsbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6ICR0aHVtYm5haWwtc2l6ZSAtIDIwcHg7XFxyXFxuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cIixcIi5wcm9qZWN0LXBhZ2Uge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8vIC5wcm9qZWN0LXBhZ2UgaDE6Zmlyc3Qtb2YtdHlwZXtcXHJcXG4vLyAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuLy8gfVxcclxcblxcclxcbi8vIC5wcm9qZWN0LXBhZ2UgcDpmaXJzdC1vZi10eXBle1xcclxcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbi8vICAgICBwYWRkaW5nLXRvcDogMHB4O1xcclxcbi8vIH1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgLy8gcG9zaXRpb246c3RpY2t5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICByaWdodDogMzVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDE1ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy90ZXh0LXNoYWRvdzogMTBweCAxMHB4IDBweCAjRkYyMjc3O1xcclxcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbTtcXHJcXG4gICAgLy8gZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1tO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtaWNvbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgLy8gcG9zaXRpb246c3RpY2t5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcmlnaHQ6IDkwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDE1ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMnB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAycHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtaWNvbjpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggMi41cHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIC8vIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy8gZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy90ZXh0LXNoYWRvdzogMTBweCAxMHB4IDBweCAjRkYyMjc3O1xcclxcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtcztcXHJcXG4gICAgLy8gZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaDF7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWgye1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIC8vIG1hcmdpbi10b3A6MzBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgLy8gcGFkZGluZzogMTBweDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAvLyBib3gtc2hhZG93OiBibGFjayAxcHggMXB4IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6MTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIC8vIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC03LjVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDcuNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtbWV7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogYmxhY2sgMXB4IDFweCAxMHB4O1xcclxcbiAgICAvLyBib3gtc2hhZG93OjEwcHggNy41cHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6MTBweCA3LjVweCAxcHggMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtbWUgaW1ne1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6ICRwcmltYXJ5LWNvbG9yIDFweCAxcHggMTBweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIC8vIHdpZHRoOiAxMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5hYm91dC1tZSBpbWc6aG92ZXJ7XFxyXFxuICAgIGJveC1zaGFkb3c6MTBweCA3LjVweCAxcHggMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTAwcHgpO1xcclxcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4kY29udGFjdC1sZWZ0OiA0MCU7XFxyXFxuXFxyXFxuLmNvbnRhY3QtbGVmdCB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICB3aWR0aDogJGNvbnRhY3QtbGVmdDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1yaWdodCBoMXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAvLyBib3gtc2hhZG93OiBibGFjayAxcHggMXB4IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6MTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdGh1bWJuYWlsIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICBib3gtc2hhZG93OjEwcHggNy41cHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXRodW1ibmFpbDpob3ZlcntcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgYm94LXNoYWRvdzo1cHggNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC10aHVtYm5haWwgZGl2e1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTVweDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdGh1bWJuYWlsIGltZ3tcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8vIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8gaDF7XFxyXFxuICAgIC8vIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgZm9udC1zaXplOiAzICogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogJHA1LWluZm8taGVpZ2h0ICsgMjVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvIHB7XFxyXFxuICAgIC8vIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuMnM7XFxyXFxuICAgIC8vIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mbyBpbnB1dCB7XFxyXFxuICAgIC8vIHotaW5kZXg6IDIwO1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gcGFkZGluZzogNXB4O1xcclxcbiAgICAvLyBtYXJnaW46IDEwcHg7XFxyXFxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgLy8gdG9wOiRoZWFkZXItaGVpZ2h0KzEycHg7XFxyXFxuICAgIC8vIHJpZ2h0OiAxNDVweDtcXHJcXG4gICAgLy8gd2lkdGg6IDgwcHg7XFxyXFxuICAgIC8vIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvIGJ1dHRvbiB7XFxyXFxuICAgIC8vIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIC8vIHRvcDokaGVhZGVyLWhlaWdodCsgMTJweDtcXHJcXG4gICAgLy8gcmlnaHQ6IDE0NXB4O1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggMi41cHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mby1zbGlkZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgIC8vIG1hcmdpbjogNXB4O1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBsZWZ0OiAyNXB4O1xcclxcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgLy8gcmlnaHQ6IDM1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvLXNsaWRlIGltZ3tcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxNWRlZykgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgIC8vIC13ZWJraXQtZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbiAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvLXNsaWRlIGltZzpob3ZlciB7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy90ZXh0LXNoYWRvdzogMTBweCAxMHB4IDBweCAjRkYyMjc3O1xcclxcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbTtcXHJcXG4gICAgLy8gZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1tO1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mby1zaG93e1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvLXNob3cgcHtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4ycztcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvLXNob3c6OmFmdGVye1xcclxcbiAgICB6LWluZGV4OiAyMDtcXHJcXG4gICAgY29udGVudDogXFxcIkhpZGUgdGhpcyBpbmZvcm1hdGlvbiBwYW5lbCB3aXRoIHRoZSBeIGJ1dHRvbiBhYm92ZVxcXCI7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1ICogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICAvLyBmbG9hdDogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgIC8vIGJvdHRvbTogcHg7XFxyXFxufVxcclxcblxcclxcbi5wNS1jYW52YXN7XFxyXFxuICAgIC8vIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbiAgICAvLyBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICB0b3A6ICRwNS1pbmZvLWhlaWdodCArICRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9IC0gI3skcDUtaW5mby1oZWlnaHR9KTtcXHJcXG4gICAgLy8gbWF4LWhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0gLSAjeyRwNS1pbmZvLWhlaWdodH0gLSAxMHB4KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmxvZy1zaWduYXR1cmV7XFxyXFxuICAgIG1hcmdpbi10b3A6MTVweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiR0ZXJ0aWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXVzaWMtcmVsZWFzZS1iYW5uZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWcvbXVzaWMtYmFubmVyLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDIwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxyXFxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tdXNpYy1yZWxlYXNlLWJhbm5lciBwLC5tdXNpYy1yZWxlYXNlLWJhbm5lciBoMSwubXVzaWMtcmVsZWFzZS1iYW5uZXIgaDIsLm11c2ljLXJlbGVhc2UtYmFubmVyIGgzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1lcmdlbmNlLWhvdmVye1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjJzO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zdWJtZXJnZW5jZS1ob3ZlciBpbWd7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5zdWJtZXJnZW5jZS1ob3Zlcjpob3ZlcntcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDE1ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMHB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAwcHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gLnN1Ym1lcmdlbmNlLWhvdmVyOmhvdmVyIGltZyB7XFxyXFxuLy8gICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpIHRyYW5zbGF0ZVkoMjBweCk7XFxyXFxuLy8gfVxcclxcblwiLFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCl7XFxyXFxuICAgICRoZWFkZXItaGVpZ2h0Ojc1cHg7XFxyXFxuICAgICR0aHVtYm5haWwtc2l6ZTogMjUwcHg7XFxyXFxuICAgICRib3R0b20taGVpZ2h0OiA3MHB4O1xcclxcblxcclxcbiAgICBib2R5e1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICAvLyB0ZXh0LXNoYWRvdzogJHZocy1zaGFkb3dzLWw7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDokaGVhZGVyLWhlaWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIGgxLCAuaGVhZGVyIGltZyB7XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogJGhlYWRlci1oZWlnaHQgLSAyMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIGgxIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgICAgIC8vIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAvLyBib3R0b206IDNweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIGltZyB7XFxyXFxuICAgICAgICAvLyBncmVlbnllbGxvdyAtNXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTVweCAwcHgsIHJlZCAzLjVweCAzcHggMHB4O1xcclxcbiAgICAgICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLXM7XFxyXFxuICAgICAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbi1yZWd1bGFyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDcuNXB4IDEycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhpZGUtb24td2ViIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGlkZS1vbi1tb2JpbGUge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucG9wdXB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZpZ2F0b3IgaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZpZ2F0b3IgYnV0dG9ue1xcclxcbiAgICAgICAgcmlnaHQ6JHNlYXJjaC1oZWlnaHQrMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC1saXN0IHtcXHJcXG4gICAgICAgIG1hcmdpbjowO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skc2VhcmNoLWhlaWdodH0gLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDBweCA1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIGhlaWdodDokdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgICAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wb3N0LXRodW1ibmFpbCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIGhlaWdodDokdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgICAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBlLCAucG9zdC10aHVtYm5haWw6Zmlyc3Qtb2YtdHlwZXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSwgLnBvc3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZXtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWwgcCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIHAge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgc21hbGx7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIGRpdntcXHJcXG4gICAgICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5jbG9zZS1pY29ue1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXBhZ2V7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdC1sZWZ0IHtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgd2lkdGg6ICRjb250YWN0LWxlZnQ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY29udGFjdC1yaWdodCB7XFxyXFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKDAuNCAqICgxMDB2dykpO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMC42ICogKDEwMHZ3KSAtIDEwMHB4KTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4IDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jb250YWN0LXJpZ2h0IGgxe1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgLmFib3V0e1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDIwJTtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LW1le1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWUgaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNDIuNXB4KTtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICAgICAgLy8gaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5hYm91dC1tZSBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgLy8gcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWUgZGl2IHAge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LW1lOmxhc3QtY2hpbGR7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mb3tcXHJcXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgICAgICAvLyBtYXJnaW4tdG9wOiAtNXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnA1LWluZm8gaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMgKiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogJHA1LWluZm8taGVpZ2h0ICsgMjVweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICB9ICAgXFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvIHB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gaW5wdXQge1xcclxcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgLy8gdG9wOiAwO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XFxyXFxuICAgICAgICAvLyBib3R0b206ICRib3R0b20taGVpZ2h0O1xcclxcbiAgICAgICAgLy8gdG9wOiRoZWFkZXItaGVpZ2h0ICsgJHA1LWluZm8taGVpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvIGJ1dHRvbiB7XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDcuNXB4IDEycHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgICAgICAvLyB0b3A6JGhlYWRlci1oZWlnaHQrIDEycHg7XFxyXFxuICAgICAgICB0b3A6IDEwcHg7XFxyXFxuICAgICAgICByaWdodDogMTQ1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8tc2xpZGUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGhlaWdodDogJHA1LWluZm8taGVpZ2h0O1xcclxcbiAgICAgICAgLy8gbWFyZ2luOiA1cHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgICAgIGxlZnQ6IDI1cHg7XFxyXFxuICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgICAgICAvLyByaWdodDogMzVweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5wNS1pbmZvLXNsaWRlIGltZ3tcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxNWRlZykgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgICAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgICAgIC8vIC13ZWJraXQtZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbiAgICAgICAgLy8gZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvLXNob3d7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zaG93OjphZnRlcntcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gLnA1LWNhbnZhcyB7XFxyXFxuICAgIC8vICAgICAvLyBtYXJnaW4tdG9wOiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgIC8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICAvLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSAtICN7JHA1LWluZm8taGVpZ2h0fSk7XFxyXFxuICAgIC8vIH1cXHJcXG5cXHJcXG4gICAgLnN1Ym1lcmdlbmNlLWhvdmVyIGJye1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3R7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0ICoge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMnB4IGF1dG87XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0IHNtYWxse1xcclxcbiAgICAgICAgLy8gbWFyZ2luOiAwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3QgcCB7XFxyXFxuICAgICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53ZWJsb2ctcG9zdCBoMSB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyNTBweCk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgICAgICBoZWlnaHQ6ICRib3R0b20taGVpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXIgYnV0dG9uLCAuZm9vdGVyIGEge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgICAgICAvLyB0ZXh0LXNoYWRvdzogJHZocy1zaGFkb3dzLXM7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KXtcXHJcXG4gICAgJGhlYWRlci1oZWlnaHQ6NDBweDtcXHJcXG4gICAgJHRodW1ibmFpbC1zaXplOiAyMDBweDtcXHJcXG4gICAgJGJvdHRvbS1oZWlnaHQ6IDcwcHg7XFxyXFxuICAgICRyZWd1bGFyLWZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgJHA1LWluZm8taGVpZ2h0OiA0MHB4O1xcclxcbiAgICAkcDUtaW5mby1jbG9zZWQ6IDI2cHg7XFxyXFxuXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBodG1se1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGNvZGV7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHggNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtMXB4IDFweCAwcHgsIGN5YW4gMHB4IC0xcHggMHB4LCByZWQgMXB4IDFweCAwcHg7XFxyXFxuICAgICAgICAvLyB0ZXh0LXNoYWRvdzogJHZocy1zaGFkb3dzLW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtMXB4IDFweCAwcHgsIGN5YW4gMHB4IC0xcHggMHB4LCByZWQgMXB4IDFweCAwcHg7XFxyXFxuICAgICAgICAvLyB0ZXh0LXNoYWRvdzogJHZocy1zaGFkb3dzLXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW4tYm9keXtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDokaGVhZGVyLWhlaWdodDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIGgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDo4cHg7XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIGltZyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhpZGUtb24td2ViIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhpZGUtb24tbW9iaWxlIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAucG9wdXB7XFxyXFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgICAgICB0b3A6ICRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9KTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2aWdhdG9yIGltZyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZpZ2F0b3IgYnV0dG9ue1xcclxcbiAgICAgICAgcmlnaHQ6NXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmlnYXRvciBpbnB1dHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ1cHgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbHtcXHJcXG4gICAgICAgIGhlaWdodDokdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgICAgICB3aWR0aDogJHRodW1ibmFpbC1zaXplO1xcclxcbiAgICAgICAgLy8gbWFyZ2luOiAxMHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDUwcHggYmxhY2ssIDEwcHggMTBweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6Zmlyc3Qtb2YtdHlwZXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZXtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucG9zdC10aHVtYm5haWwge1xcclxcbiAgICAgICAgaGVpZ2h0OiR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgNTBweCBibGFjaywgMTBweCAxMHB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wb3N0LXRodW1ibmFpbDpsYXN0LW9mLXR5cGV7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucG9zdC10aHVtYm5haWw6Zmlyc3Qtb2YtdHlwZXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsIHAge1xcclxcbiAgICAgICAgZGlzcGxheTpub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbCBoMiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHggNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC1saXN0IHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MnB4O1xcclxcbiAgICAgICAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAoI3skc2VhcmNoLWhlaWdodH0gKyAjeyRoZWFkZXItaGVpZ2h0fSArICN7JGJvdHRvbS1oZWlnaHR9KSk7XFxyXFxuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAvLyBtYXgtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgICAgIC8vIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgICAgIC8vIG1hcmdpbjogMHB4O1xcclxcbiAgICAgICAgLy8gcGFkZGluZzogMHB4IDEwcHg7XFxyXFxuICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jbG9zZS1pY29uIHtcXHJcXG4gICAgICAgIC8vIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICByaWdodDogMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXBhZ2V7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICgjeyRoZWFkZXItaGVpZ2h0fSArICN7JGJvdHRvbS1oZWlnaHR9KSk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNoYXJlLWljb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMDBweCk7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3QtbGVmdCB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNvbnRhY3QtcmlnaHQge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgICAgICBsZWZ0OiAwcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jb250YWN0LXJpZ2h0IGgxe1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdC10aHVtYm5haWwgZGl2e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAgIC8vIGZsb2F0OiByaWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXR7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWUge1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWUgaW1ne1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuYWJvdXQtbWUgcCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuYWJvdXQtbWUgZGl2e1xcclxcbiAgICAvLyAgICAgLy8gbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgLy8gfVxcclxcblxcclxcbiAgICAucDUtaW5mbyBoMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMiAqICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkcDUtaW5mby1oZWlnaHQgLSAyLjVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNDUlO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAkcDUtaW5mby1jbG9zZWQ7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvIHB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvIGJ1dHRvbiwgLnA1LWluZm8gaW5wdXQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvIGJ1dHRvbntcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNy41cHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6LTJweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgLy8gdG9wOiAxMHB4O1xcclxcbiAgICAgICAgLy8gcmlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gaW5wdXR7XFxyXFxuICAgICAgICB3aWR0aDogMTY1cHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgICAgIC8vIGRpc3BsYXk6IGlubGluZS87XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgLy8gcGFkZGluZzogMDtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDEycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8tc2xpZGUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGhlaWdodDogJHA1LWluZm8taGVpZ2h0O1xcclxcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICAgICAgICBsZWZ0OiAwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnA1LWluZm8tc2xpZGUgaW1ne1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDE1ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICAgICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgICAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8tc2hvd3tcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zaG93OjphZnRlcntcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8tc2hvdyBoMXtcXHJcXG4gICAgICAgIC8vIG92ZXJmbG93OiBub25lO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgd2hpdGUtc3BhY2U6bm9ybWFsO1xcclxcbiAgICAgICAgLy8gdGV4dC1vdmVyZmxvdzppbmhlcml0O1xcclxcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWNhbnZhc3tcXHJcXG4gICAgICAgIHRvcDogJHA1LWluZm8taGVpZ2h0O1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRwNS1pbmZvLWhlaWdodH0pO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgLy8gbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zdWJtZXJnZW5jZS1ob3ZlciBicntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53ZWJsb2ctcG9zdHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIC8vIG1hcmdpbjo1cHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0IHAge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6JGJvdHRvbS1oZWlnaHQ7XFxyXFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIC8vcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyIGJ1dHRvbiwgLmZvb3RlciBhIHtcXHJcXG4gICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgLy8gbWFyZ2luOiAxNXB4IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW46IDcuNXB4IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XFxyXFxuICAgICAgICAvLyB0ZXh0LXNoYWRvdzogJHZocy1zaGFkb3dzLXM7XFxyXFxuICAgICAgICAvLyB0ZXh0LXNoYWRvdzogJHZocy1zaGFkb3dzLXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvcHlyaWdodHtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT17OTE6ZnVuY3Rpb24oZSl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUscil7aWYoIXIpe3I9e319ZT1lJiZlLl9fZXNNb2R1bGU/ZS5kZWZhdWx0OmU7aWYodHlwZW9mIGUhPT1cInN0cmluZ1wiKXtyZXR1cm4gZX1pZigvXlsnXCJdLipbJ1wiXSQvLnRlc3QoZSkpe2U9ZS5zbGljZSgxLC0xKX1pZihyLmhhc2gpe2UrPXIuaGFzaH1pZigvW1wiJygpIFxcdFxcbl0vLnRlc3QoZSl8fHIubmVlZFF1b3Rlcyl7cmV0dXJuJ1wiJy5jb25jYXQoZS5yZXBsYWNlKC9cIi9nLCdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZyxcIlxcXFxuXCIpLCdcIicpfXJldHVybiBlfX19O3ZhciByPXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18odCl7aWYoclt0XSl7cmV0dXJuIHJbdF0uZXhwb3J0c312YXIgXz1yW3RdPXtleHBvcnRzOnt9fTt2YXIgbj10cnVlO3RyeXtlW3RdKF8sXy5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO249ZmFsc2V9ZmluYWxseXtpZihuKWRlbGV0ZSByW3RdfXJldHVybiBfLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTEpfSgpOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvbXVzaWMtYmFubmVyLmQ1MzJmMmY3MjZiMmEwMDMwZTdmN2U1N2Q1ZjhmOWE0LmpwZ1wiOyIsIihmdW5jdGlvbiAoKSB7XG5cblx0aWYgKHR5cGVvZiBQcmlzbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghUHJpc20ucGx1Z2lucy50b29sYmFyKSB7XG5cdFx0Y29uc29sZS53YXJuKCdDb3B5IHRvIENsaXBib2FyZCBwbHVnaW4gbG9hZGVkIGJlZm9yZSBUb29sYmFyIHBsdWdpbi4nKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qKlxuXHQgKiBXaGVuIHRoZSBnaXZlbiBlbGVtZW50cyBpcyBjbGlja2VkIGJ5IHRoZSB1c2VyLCB0aGUgZ2l2ZW4gdGV4dCB3aWxsIGJlIGNvcGllZCB0byBjbGlwYm9hcmQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtDb3B5SW5mb30gY29weUluZm9cblx0ICpcblx0ICogQHR5cGVkZWYgQ29weUluZm9cblx0ICogQHByb3BlcnR5IHsoKSA9PiBzdHJpbmd9IGdldFRleHRcblx0ICogQHByb3BlcnR5IHsoKSA9PiB2b2lkfSBzdWNjZXNzXG5cdCAqIEBwcm9wZXJ0eSB7KHJlYXNvbjogdW5rbm93bikgPT4gdm9pZH0gZXJyb3Jcblx0ICovXG5cdGZ1bmN0aW9uIHJlZ2lzdGVyQ2xpcGJvYXJkKGVsZW1lbnQsIGNvcHlJbmZvKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvcHlUZXh0VG9DbGlwYm9hcmQoY29weUluZm8pO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMwODEwMzIyLzc1OTU0NzJcblxuXHQvKiogQHBhcmFtIHtDb3B5SW5mb30gY29weUluZm8gKi9cblx0ZnVuY3Rpb24gZmFsbGJhY2tDb3B5VGV4dFRvQ2xpcGJvYXJkKGNvcHlJbmZvKSB7XG5cdFx0dmFyIHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHR0ZXh0QXJlYS52YWx1ZSA9IGNvcHlJbmZvLmdldFRleHQoKTtcblxuXHRcdC8vIEF2b2lkIHNjcm9sbGluZyB0byBib3R0b21cblx0XHR0ZXh0QXJlYS5zdHlsZS50b3AgPSAnMCc7XG5cdFx0dGV4dEFyZWEuc3R5bGUubGVmdCA9ICcwJztcblx0XHR0ZXh0QXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcblx0XHR0ZXh0QXJlYS5mb2N1cygpO1xuXHRcdHRleHRBcmVhLnNlbGVjdCgpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoc3VjY2Vzc2Z1bCkge1xuXHRcdFx0XHRcdGNvcHlJbmZvLnN1Y2Nlc3MoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb3B5SW5mby5lcnJvcigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb3B5SW5mby5lcnJvcihlcnIpO1xuXHRcdFx0fSwgMSk7XG5cdFx0fVxuXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0QXJlYSk7XG5cdH1cblx0LyoqIEBwYXJhbSB7Q29weUluZm99IGNvcHlJbmZvICovXG5cdGZ1bmN0aW9uIGNvcHlUZXh0VG9DbGlwYm9hcmQoY29weUluZm8pIHtcblx0XHRpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuXHRcdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weUluZm8uZ2V0VGV4dCgpKS50aGVuKGNvcHlJbmZvLnN1Y2Nlc3MsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Ly8gdHJ5IHRoZSBmYWxsYmFjayBpbiBjYXNlIGB3cml0ZVRleHRgIGRpZG4ndCB3b3JrXG5cdFx0XHRcdGZhbGxiYWNrQ29weVRleHRUb0NsaXBib2FyZChjb3B5SW5mbyk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmFsbGJhY2tDb3B5VGV4dFRvQ2xpcGJvYXJkKGNvcHlJbmZvKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2VsZWN0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0ICovXG5cdGZ1bmN0aW9uIHNlbGVjdEVsZW1lbnRUZXh0KGVsZW1lbnQpIHtcblx0XHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjAwNzk5MTAvNzU5NTQ3MlxuXHRcdHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5zZWxlY3RBbGxDaGlsZHJlbihlbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmF2ZXJzZXMgdXAgdGhlIERPTSB0cmVlIHRvIGZpbmQgZGF0YSBhdHRyaWJ1dGVzIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IHN0YXJ0RWxlbWVudCBBbiBlbGVtZW50IHRvIHN0YXJ0IGZyb20uXG5cdCAqIEByZXR1cm5zIHtTZXR0aW5nc30gVGhlIHBsdWdpbiBzZXR0aW5ncy5cblx0ICogQHR5cGVkZWYge1JlY29yZDxcImNvcHlcIiB8IFwiY29weS1lcnJvclwiIHwgXCJjb3B5LXN1Y2Nlc3NcIiB8IFwiY29weS10aW1lb3V0XCIsIHN0cmluZyB8IG51bWJlcj59IFNldHRpbmdzXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRTZXR0aW5ncyhzdGFydEVsZW1lbnQpIHtcblx0XHQvKiogQHR5cGUge1NldHRpbmdzfSAqL1xuXHRcdHZhciBzZXR0aW5ncyA9IHtcblx0XHRcdCdjb3B5JzogJ0NvcHknLFxuXHRcdFx0J2NvcHktZXJyb3InOiAnUHJlc3MgQ3RybCtDIHRvIGNvcHknLFxuXHRcdFx0J2NvcHktc3VjY2Vzcyc6ICdDb3BpZWQhJyxcblx0XHRcdCdjb3B5LXRpbWVvdXQnOiA1MDAwXG5cdFx0fTtcblxuXHRcdHZhciBwcmVmaXggPSAnZGF0YS1wcmlzbWpzLSc7XG5cdFx0Zm9yICh2YXIga2V5IGluIHNldHRpbmdzKSB7XG5cdFx0XHR2YXIgYXR0ciA9IHByZWZpeCArIGtleTtcblx0XHRcdHZhciBlbGVtZW50ID0gc3RhcnRFbGVtZW50O1xuXHRcdFx0d2hpbGUgKGVsZW1lbnQgJiYgIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHIpKSB7XG5cdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0XHRzZXR0aW5nc1trZXldID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzZXR0aW5ncztcblx0fVxuXG5cdFByaXNtLnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbignY29weS10by1jbGlwYm9hcmQnLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0dmFyIGVsZW1lbnQgPSBlbnYuZWxlbWVudDtcblxuXHRcdHZhciBzZXR0aW5ncyA9IGdldFNldHRpbmdzKGVsZW1lbnQpO1xuXG5cdFx0dmFyIGxpbmtDb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0bGlua0NvcHkuY2xhc3NOYW1lID0gJ2NvcHktdG8tY2xpcGJvYXJkLWJ1dHRvbic7XG5cdFx0bGlua0NvcHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXHRcdHZhciBsaW5rU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5rQ29weS5hcHBlbmRDaGlsZChsaW5rU3Bhbik7XG5cblx0XHRzZXRTdGF0ZSgnY29weScpO1xuXG5cdFx0cmVnaXN0ZXJDbGlwYm9hcmQobGlua0NvcHksIHtcblx0XHRcdGdldFRleHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZXRTdGF0ZSgnY29weS1zdWNjZXNzJyk7XG5cblx0XHRcdFx0cmVzZXRUZXh0KCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2V0U3RhdGUoJ2NvcHktZXJyb3InKTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxlY3RFbGVtZW50VGV4dChlbGVtZW50KTtcblx0XHRcdFx0fSwgMSk7XG5cblx0XHRcdFx0cmVzZXRUZXh0KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbGlua0NvcHk7XG5cblx0XHRmdW5jdGlvbiByZXNldFRleHQoKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2V0U3RhdGUoJ2NvcHknKTsgfSwgc2V0dGluZ3NbJ2NvcHktdGltZW91dCddKTtcblx0XHR9XG5cblx0XHQvKiogQHBhcmFtIHtcImNvcHlcIiB8IFwiY29weS1lcnJvclwiIHwgXCJjb3B5LXN1Y2Nlc3NcIn0gc3RhdGUgKi9cblx0XHRmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuXHRcdFx0bGlua1NwYW4udGV4dENvbnRlbnQgPSBzZXR0aW5nc1tzdGF0ZV07XG5cdFx0XHRsaW5rQ29weS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29weS1zdGF0ZScsIHN0YXRlKTtcblx0XHR9XG5cdH0pO1xufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG5cblx0aWYgKHR5cGVvZiBQcmlzbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdFByaXNtLnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbignZG93bmxvYWQtZmlsZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgcHJlID0gZW52LmVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHRpZiAoIXByZSB8fCAhL3ByZS9pLnRlc3QocHJlLm5vZGVOYW1lKSB8fCAhcHJlLmhhc0F0dHJpYnV0ZSgnZGF0YS1zcmMnKSB8fCAhcHJlLmhhc0F0dHJpYnV0ZSgnZGF0YS1kb3dubG9hZC1saW5rJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIHNyYyA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG5cdFx0dmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0YS50ZXh0Q29udGVudCA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG93bmxvYWQtbGluay1sYWJlbCcpIHx8ICdEb3dubG9hZCc7XG5cdFx0YS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJycpO1xuXHRcdGEuaHJlZiA9IHNyYztcblx0XHRyZXR1cm4gYTtcblx0fSk7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogUGx1Z2luIG5hbWUgd2hpY2ggaXMgdXNlZCBhcyBhIGNsYXNzIG5hbWUgZm9yIDxwcmU+IHdoaWNoIGlzIGFjdGl2YXRpbmcgdGhlIHBsdWdpblxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0dmFyIFBMVUdJTl9OQU1FID0gJ2xpbmUtbnVtYmVycyc7XG5cblx0LyoqXG5cdCAqIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIGZvciBkZXRlcm1pbmluZyBsaW5lIGJyZWFrc1xuXHQgKlxuXHQgKiBAdHlwZSB7UmVnRXhwfVxuXHQgKi9cblx0dmFyIE5FV19MSU5FX0VYUCA9IC9cXG4oPyEkKS9nO1xuXG5cblx0LyoqXG5cdCAqIEdsb2JhbCBleHBvcnRzXG5cdCAqL1xuXHR2YXIgY29uZmlnID0gUHJpc20ucGx1Z2lucy5saW5lTnVtYmVycyA9IHtcblx0XHQvKipcblx0XHQgKiBHZXQgbm9kZSBmb3IgcHJvdmlkZWQgbGluZSBudW1iZXJcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBwcmUgZWxlbWVudFxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgbGluZSBudW1iZXJcblx0XHQgKiBAcmV0dXJucyB7RWxlbWVudHx1bmRlZmluZWR9XG5cdFx0ICovXG5cdFx0Z2V0TGluZTogZnVuY3Rpb24gKGVsZW1lbnQsIG51bWJlcikge1xuXHRcdFx0aWYgKGVsZW1lbnQudGFnTmFtZSAhPT0gJ1BSRScgfHwgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFBMVUdJTl9OQU1FKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsaW5lTnVtYmVyUm93cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUtbnVtYmVycy1yb3dzJyk7XG5cdFx0XHRpZiAoIWxpbmVOdW1iZXJSb3dzKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBsaW5lTnVtYmVyU3RhcnQgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpLCAxMCkgfHwgMTtcblx0XHRcdHZhciBsaW5lTnVtYmVyRW5kID0gbGluZU51bWJlclN0YXJ0ICsgKGxpbmVOdW1iZXJSb3dzLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuXG5cdFx0XHRpZiAobnVtYmVyIDwgbGluZU51bWJlclN0YXJ0KSB7XG5cdFx0XHRcdG51bWJlciA9IGxpbmVOdW1iZXJTdGFydDtcblx0XHRcdH1cblx0XHRcdGlmIChudW1iZXIgPiBsaW5lTnVtYmVyRW5kKSB7XG5cdFx0XHRcdG51bWJlciA9IGxpbmVOdW1iZXJFbmQ7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsaW5lSW5kZXggPSBudW1iZXIgLSBsaW5lTnVtYmVyU3RhcnQ7XG5cblx0XHRcdHJldHVybiBsaW5lTnVtYmVyUm93cy5jaGlsZHJlbltsaW5lSW5kZXhdO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZXNpemVzIHRoZSBsaW5lIG51bWJlcnMgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgbm90IGFkZCBsaW5lIG51bWJlcnMuIEl0IHdpbGwgb25seSByZXNpemUgZXhpc3Rpbmcgb25lcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgQSBgPHByZT5gIGVsZW1lbnQgd2l0aCBsaW5lIG51bWJlcnMuXG5cdFx0ICogQHJldHVybnMge3ZvaWR9XG5cdFx0ICovXG5cdFx0cmVzaXplOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0cmVzaXplRWxlbWVudHMoW2VsZW1lbnRdKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogV2hldGhlciB0aGUgcGx1Z2luIGNhbiBhc3N1bWUgdGhhdCB0aGUgdW5pdHMgZm9udCBzaXplcyBhbmQgbWFyZ2lucyBhcmUgbm90IGRlcGVuZGVkIG9uIHRoZSBzaXplIG9mXG5cdFx0ICogdGhlIGN1cnJlbnQgdmlld3BvcnQuXG5cdFx0ICpcblx0XHQgKiBTZXR0aW5nIHRoaXMgdG8gYHRydWVgIHdpbGwgYWxsb3cgdGhlIHBsdWdpbiB0byBkbyBjZXJ0YWluIG9wdGltaXphdGlvbnMgZm9yIGJldHRlciBwZXJmb3JtYW5jZS5cblx0XHQgKlxuXHRcdCAqIFNldCB0aGlzIHRvIGBmYWxzZWAgaWYgeW91IHVzZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBDU1MgdW5pdHM6IGB2aGAsIGB2d2AsIGB2bWluYCwgYHZtYXhgLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0YXNzdW1lVmlld3BvcnRJbmRlcGVuZGVuY2U6IHRydWVcblx0fTtcblxuXHQvKipcblx0ICogUmVzaXplcyB0aGUgZ2l2ZW4gZWxlbWVudHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXX0gZWxlbWVudHNcblx0ICovXG5cdGZ1bmN0aW9uIHJlc2l6ZUVsZW1lbnRzKGVsZW1lbnRzKSB7XG5cdFx0ZWxlbWVudHMgPSBlbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcblx0XHRcdHZhciBjb2RlU3R5bGVzID0gZ2V0U3R5bGVzKGUpO1xuXHRcdFx0dmFyIHdoaXRlU3BhY2UgPSBjb2RlU3R5bGVzWyd3aGl0ZS1zcGFjZSddO1xuXHRcdFx0cmV0dXJuIHdoaXRlU3BhY2UgPT09ICdwcmUtd3JhcCcgfHwgd2hpdGVTcGFjZSA9PT0gJ3ByZS1saW5lJztcblx0XHR9KTtcblxuXHRcdGlmIChlbGVtZW50cy5sZW5ndGggPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBpbmZvcyA9IGVsZW1lbnRzLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0dmFyIGNvZGVFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdjb2RlJyk7XG5cdFx0XHR2YXIgbGluZU51bWJlcnNXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKTtcblx0XHRcdGlmICghY29kZUVsZW1lbnQgfHwgIWxpbmVOdW1iZXJzV3JhcHBlcikge1xuXHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXG5cdFx0XHQvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJTaXplciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUtbnVtYmVycy1zaXplcicpO1xuXHRcdFx0dmFyIGNvZGVMaW5lcyA9IGNvZGVFbGVtZW50LnRleHRDb250ZW50LnNwbGl0KE5FV19MSU5FX0VYUCk7XG5cblx0XHRcdGlmICghbGluZU51bWJlclNpemVyKSB7XG5cdFx0XHRcdGxpbmVOdW1iZXJTaXplciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0bGluZU51bWJlclNpemVyLmNsYXNzTmFtZSA9ICdsaW5lLW51bWJlcnMtc2l6ZXInO1xuXG5cdFx0XHRcdGNvZGVFbGVtZW50LmFwcGVuZENoaWxkKGxpbmVOdW1iZXJTaXplcik7XG5cdFx0XHR9XG5cblx0XHRcdGxpbmVOdW1iZXJTaXplci5pbm5lckhUTUwgPSAnMCc7XG5cdFx0XHRsaW5lTnVtYmVyU2l6ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0XHRcdHZhciBvbmVMaW5lckhlaWdodCA9IGxpbmVOdW1iZXJTaXplci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0XHRsaW5lTnVtYmVyU2l6ZXIuaW5uZXJIVE1MID0gJyc7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdGxpbmVzOiBjb2RlTGluZXMsXG5cdFx0XHRcdGxpbmVIZWlnaHRzOiBbXSxcblx0XHRcdFx0b25lTGluZXJIZWlnaHQ6IG9uZUxpbmVySGVpZ2h0LFxuXHRcdFx0XHRzaXplcjogbGluZU51bWJlclNpemVyLFxuXHRcdFx0fTtcblx0XHR9KS5maWx0ZXIoQm9vbGVhbik7XG5cblx0XHRpbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvKSB7XG5cdFx0XHR2YXIgbGluZU51bWJlclNpemVyID0gaW5mby5zaXplcjtcblx0XHRcdHZhciBsaW5lcyA9IGluZm8ubGluZXM7XG5cdFx0XHR2YXIgbGluZUhlaWdodHMgPSBpbmZvLmxpbmVIZWlnaHRzO1xuXHRcdFx0dmFyIG9uZUxpbmVySGVpZ2h0ID0gaW5mby5vbmVMaW5lckhlaWdodDtcblxuXHRcdFx0bGluZUhlaWdodHNbbGluZXMubGVuZ3RoIC0gMV0gPSB1bmRlZmluZWQ7XG5cdFx0XHRsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lLCBpbmRleCkge1xuXHRcdFx0XHRpZiAobGluZSAmJiBsaW5lLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHR2YXIgZSA9IGxpbmVOdW1iZXJTaXplci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdFx0XHRcdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdFx0ZS50ZXh0Q29udGVudCA9IGxpbmU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGluZUhlaWdodHNbaW5kZXhdID0gb25lTGluZXJIZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0aW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoaW5mbykge1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJTaXplciA9IGluZm8uc2l6ZXI7XG5cdFx0XHR2YXIgbGluZUhlaWdodHMgPSBpbmZvLmxpbmVIZWlnaHRzO1xuXG5cdFx0XHR2YXIgY2hpbGRJbmRleCA9IDA7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVIZWlnaHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChsaW5lSGVpZ2h0c1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0bGluZUhlaWdodHNbaV0gPSBsaW5lTnVtYmVyU2l6ZXIuY2hpbGRyZW5bY2hpbGRJbmRleCsrXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGluZm9zLmZvckVhY2goZnVuY3Rpb24gKGluZm8pIHtcblx0XHRcdHZhciBsaW5lTnVtYmVyU2l6ZXIgPSBpbmZvLnNpemVyO1xuXHRcdFx0dmFyIHdyYXBwZXIgPSBpbmZvLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUtbnVtYmVycy1yb3dzJyk7XG5cblx0XHRcdGxpbmVOdW1iZXJTaXplci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0bGluZU51bWJlclNpemVyLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRpbmZvLmxpbmVIZWlnaHRzLmZvckVhY2goZnVuY3Rpb24gKGhlaWdodCwgbGluZU51bWJlcikge1xuXHRcdFx0XHR3cmFwcGVyLmNoaWxkcmVuW2xpbmVOdW1iZXJdLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHN0eWxlIGRlY2xhcmF0aW9ucyBmb3IgdGhlIGVsZW1lbnRcblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRTdHlsZXMoZWxlbWVudCkge1xuXHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSA6IChlbGVtZW50LmN1cnJlbnRTdHlsZSB8fCBudWxsKTtcblx0fVxuXG5cdHZhciBsYXN0V2lkdGggPSB1bmRlZmluZWQ7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGNvbmZpZy5hc3N1bWVWaWV3cG9ydEluZGVwZW5kZW5jZSAmJiBsYXN0V2lkdGggPT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxhc3RXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG5cdFx0cmVzaXplRWxlbWVudHMoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlLicgKyBQTFVHSU5fTkFNRSkpKTtcblx0fSk7XG5cblx0UHJpc20uaG9va3MuYWRkKCdjb21wbGV0ZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRpZiAoIWVudi5jb2RlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGNvZGUgPSAvKiogQHR5cGUge0VsZW1lbnR9ICovIChlbnYuZWxlbWVudCk7XG5cdFx0dmFyIHByZSA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChjb2RlLnBhcmVudE5vZGUpO1xuXG5cdFx0Ly8gd29ya3Mgb25seSBmb3IgPGNvZGU+IHdyYXBwZWQgaW5zaWRlIDxwcmU+IChub3QgaW5saW5lKVxuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQWJvcnQgaWYgbGluZSBudW1iZXJzIGFscmVhZHkgZXhpc3RzXG5cdFx0aWYgKGNvZGUucXVlcnlTZWxlY3RvcignLmxpbmUtbnVtYmVycy1yb3dzJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBvbmx5IGFkZCBsaW5lIG51bWJlcnMgaWYgPGNvZGU+IG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIGhhcyB0aGUgYGxpbmUtbnVtYmVyc2AgY2xhc3Ncblx0XHRpZiAoIVByaXNtLnV0aWwuaXNBY3RpdmUoY29kZSwgUExVR0lOX05BTUUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBjbGFzcyAnbGluZS1udW1iZXJzJyBmcm9tIHRoZSA8Y29kZT5cblx0XHRjb2RlLmNsYXNzTGlzdC5yZW1vdmUoUExVR0lOX05BTUUpO1xuXHRcdC8vIEFkZCB0aGUgY2xhc3MgJ2xpbmUtbnVtYmVycycgdG8gdGhlIDxwcmU+XG5cdFx0cHJlLmNsYXNzTGlzdC5hZGQoUExVR0lOX05BTUUpO1xuXG5cdFx0dmFyIG1hdGNoID0gZW52LmNvZGUubWF0Y2goTkVXX0xJTkVfRVhQKTtcblx0XHR2YXIgbGluZXNOdW0gPSBtYXRjaCA/IG1hdGNoLmxlbmd0aCArIDEgOiAxO1xuXHRcdHZhciBsaW5lTnVtYmVyc1dyYXBwZXI7XG5cblx0XHR2YXIgbGluZXMgPSBuZXcgQXJyYXkobGluZXNOdW0gKyAxKS5qb2luKCc8c3Bhbj48L3NwYW4+Jyk7XG5cblx0XHRsaW5lTnVtYmVyc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXHRcdGxpbmVOdW1iZXJzV3JhcHBlci5jbGFzc05hbWUgPSAnbGluZS1udW1iZXJzLXJvd3MnO1xuXHRcdGxpbmVOdW1iZXJzV3JhcHBlci5pbm5lckhUTUwgPSBsaW5lcztcblxuXHRcdGlmIChwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXN0YXJ0JykpIHtcblx0XHRcdHByZS5zdHlsZS5jb3VudGVyUmVzZXQgPSAnbGluZW51bWJlciAnICsgKHBhcnNlSW50KHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhcnQnKSwgMTApIC0gMSk7XG5cdFx0fVxuXG5cdFx0ZW52LmVsZW1lbnQuYXBwZW5kQ2hpbGQobGluZU51bWJlcnNXcmFwcGVyKTtcblxuXHRcdHJlc2l6ZUVsZW1lbnRzKFtwcmVdKTtcblxuXHRcdFByaXNtLmhvb2tzLnJ1bignbGluZS1udW1iZXJzJywgZW52KTtcblx0fSk7XG5cblx0UHJpc20uaG9va3MuYWRkKCdsaW5lLW51bWJlcnMnLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0ZW52LnBsdWdpbnMgPSBlbnYucGx1Z2lucyB8fCB7fTtcblx0XHRlbnYucGx1Z2lucy5saW5lTnVtYmVycyA9IHRydWU7XG5cdH0pO1xuXG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZnVuY3Rpb24gbWFwQ2xhc3NOYW1lKG5hbWUpIHtcblx0XHR2YXIgY3VzdG9tQ2xhc3MgPSBQcmlzbS5wbHVnaW5zLmN1c3RvbUNsYXNzO1xuXHRcdGlmIChjdXN0b21DbGFzcykge1xuXHRcdFx0cmV0dXJuIGN1c3RvbUNsYXNzLmFwcGx5KG5hbWUsICdub25lJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuYW1lO1xuXHRcdH1cblx0fVxuXG5cdHZhciBQQVJUTkVSID0ge1xuXHRcdCcoJzogJyknLFxuXHRcdCdbJzogJ10nLFxuXHRcdCd7JzogJ30nLFxuXHR9O1xuXG5cdC8vIFRoZSBuYW1lcyBmb3IgYnJhY2UgdHlwZXMuXG5cdC8vIFRoZXNlIG5hbWVzIGhhdmUgdHdvIHB1cnBvc2VzOiAxKSB0aGV5IGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nIGFuZCAyKSB0aGV5IGFyZSB1c2VkIHRvIHBhaXIgYnJhY2VzLiBPbmx5IGJyYWNlc1xuXHQvLyBvZiB0aGUgc2FtZSB0eXBlIGFyZSBwYWlyZWQuXG5cdHZhciBOQU1FUyA9IHtcblx0XHQnKCc6ICdicmFjZS1yb3VuZCcsXG5cdFx0J1snOiAnYnJhY2Utc3F1YXJlJyxcblx0XHQneyc6ICdicmFjZS1jdXJseScsXG5cdH07XG5cblx0Ly8gQSBtYXAgZm9yIGJyYWNlIGFsaWFzZXMuXG5cdC8vIFRoaXMgaXMgdXNlZnVsIGZvciB3aGVuIHNvbWUgYnJhY2VzIGhhdmUgYSBwcmVmaXgvc3VmZml4IGFzIHBhcnQgb2YgdGhlIHB1bmN0dWF0aW9uIHRva2VuLlxuXHR2YXIgQlJBQ0VfQUxJQVNfTUFQID0ge1xuXHRcdCckeyc6ICd7JywgLy8gSlMgdGVtcGxhdGUgcHVuY3R1YXRpb24gKGUuZy4gYGZvbyAke2JhciArIDF9YClcblx0fTtcblxuXHR2YXIgTEVWRUxfV0FSUCA9IDEyO1xuXG5cdHZhciBwYWlySWRDb3VudGVyID0gMDtcblxuXHR2YXIgQlJBQ0VfSURfUEFUVEVSTiA9IC9eKHBhaXItXFxkKy0pKG9wZW58Y2xvc2UpJC87XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGJyYWNlIHBhcnRuZXIgZ2l2ZW4gb25lIGJyYWNlIG9mIGEgYnJhY2UgcGFpci5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnJhY2Vcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0UGFydG5lckJyYWNlKGJyYWNlKSB7XG5cdFx0dmFyIG1hdGNoID0gQlJBQ0VfSURfUEFUVEVSTi5leGVjKGJyYWNlLmlkKTtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBtYXRjaFsxXSArIChtYXRjaFsyXSA9PSAnb3BlbicgPyAnY2xvc2UnIDogJ29wZW4nKSk7XG5cdH1cblxuXHQvKipcblx0ICogQHRoaXMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0ZnVuY3Rpb24gaG92ZXJCcmFjZSgpIHtcblx0XHRpZiAoIVByaXNtLnV0aWwuaXNBY3RpdmUodGhpcywgJ2JyYWNlLWhvdmVyJywgdHJ1ZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRbdGhpcywgZ2V0UGFydG5lckJyYWNlKHRoaXMpXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRlLmNsYXNzTGlzdC5hZGQobWFwQ2xhc3NOYW1lKCdicmFjZS1ob3ZlcicpKTtcblx0XHR9KTtcblx0fVxuXHQvKipcblx0ICogQHRoaXMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0ZnVuY3Rpb24gbGVhdmVCcmFjZSgpIHtcblx0XHRbdGhpcywgZ2V0UGFydG5lckJyYWNlKHRoaXMpXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRlLmNsYXNzTGlzdC5yZW1vdmUobWFwQ2xhc3NOYW1lKCdicmFjZS1ob3ZlcicpKTtcblx0XHR9KTtcblx0fVxuXHQvKipcblx0ICogQHRoaXMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0ZnVuY3Rpb24gY2xpY2tCcmFjZSgpIHtcblx0XHRpZiAoIVByaXNtLnV0aWwuaXNBY3RpdmUodGhpcywgJ2JyYWNlLXNlbGVjdCcsIHRydWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0W3RoaXMsIGdldFBhcnRuZXJCcmFjZSh0aGlzKV0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXHRcdFx0ZS5jbGFzc0xpc3QuYWRkKG1hcENsYXNzTmFtZSgnYnJhY2Utc2VsZWN0ZWQnKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRQcmlzbS5ob29rcy5hZGQoJ2NvbXBsZXRlJywgZnVuY3Rpb24gKGVudikge1xuXG5cdFx0LyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cblx0XHR2YXIgY29kZSA9IGVudi5lbGVtZW50O1xuXHRcdHZhciBwcmUgPSBjb2RlLnBhcmVudEVsZW1lbnQ7XG5cblx0XHRpZiAoIXByZSB8fCBwcmUudGFnTmFtZSAhPSAnUFJFJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGZpbmQgdGhlIGJyYWNlcyB0byBtYXRjaFxuXHRcdC8qKiBAdHlwZSB7c3RyaW5nW119ICovXG5cdFx0dmFyIHRvTWF0Y2ggPSBbXTtcblx0XHRpZiAoUHJpc20udXRpbC5pc0FjdGl2ZShjb2RlLCAnbWF0Y2gtYnJhY2VzJykpIHtcblx0XHRcdHRvTWF0Y2gucHVzaCgnKCcsICdbJywgJ3snKTtcblx0XHR9XG5cblx0XHRpZiAodG9NYXRjaC5sZW5ndGggPT0gMCkge1xuXHRcdFx0Ly8gbm90aGluZyB0byBtYXRjaFxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghcHJlLl9fbGlzdGVuZXJBZGRlZCkge1xuXHRcdFx0Ly8gY29kZSBibG9ja3MgbWlnaHQgYmUgaGlnaGxpZ2h0ZWQgbW9yZSB0aGFuIG9uY2Vcblx0XHRcdHByZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiByZW1vdmVCcmFjZVNlbGVjdGVkKCkge1xuXHRcdFx0XHQvLyB0aGUgY29kZSBlbGVtZW50IG1pZ2h0IGhhdmUgYmVlbiByZXBsYWNlZFxuXHRcdFx0XHR2YXIgY29kZSA9IHByZS5xdWVyeVNlbGVjdG9yKCdjb2RlJyk7XG5cdFx0XHRcdHZhciBjbGFzc05hbWUgPSBtYXBDbGFzc05hbWUoJ2JyYWNlLXNlbGVjdGVkJyk7XG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvZGUucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjbGFzc05hbWUpKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0ZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJlLCAnX19saXN0ZW5lckFkZGVkJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblx0XHR9XG5cblx0XHQvKiogQHR5cGUge0hUTUxTcGFuRWxlbWVudFtdfSAqL1xuXHRcdHZhciBwdW5jdHVhdGlvbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuXHRcdFx0Y29kZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuLicgKyBtYXBDbGFzc05hbWUoJ3Rva2VuJykgKyAnLicgKyBtYXBDbGFzc05hbWUoJ3B1bmN0dWF0aW9uJykpXG5cdFx0KTtcblxuXHRcdC8qKiBAdHlwZSB7eyBpbmRleDogbnVtYmVyLCBvcGVuOiBib29sZWFuLCBlbGVtZW50OiBIVE1MRWxlbWVudCB9W119ICovXG5cdFx0dmFyIGFsbEJyYWNlcyA9IFtdO1xuXG5cdFx0dG9NYXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChvcGVuKSB7XG5cdFx0XHR2YXIgY2xvc2UgPSBQQVJUTkVSW29wZW5dO1xuXHRcdFx0dmFyIG5hbWUgPSBtYXBDbGFzc05hbWUoTkFNRVNbb3Blbl0pO1xuXG5cdFx0XHQvKiogQHR5cGUge1tudW1iZXIsIG51bWJlcl1bXX0gKi9cblx0XHRcdHZhciBwYWlycyA9IFtdO1xuXHRcdFx0LyoqIEB0eXBlIHtudW1iZXJbXX0gKi9cblx0XHRcdHZhciBvcGVuU3RhY2sgPSBbXTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdW5jdHVhdGlvbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgZWxlbWVudCA9IHB1bmN0dWF0aW9uW2ldO1xuXHRcdFx0XHRpZiAoZWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCA9PSAwKSB7XG5cdFx0XHRcdFx0dmFyIHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXHRcdFx0XHRcdHRleHQgPSBCUkFDRV9BTElBU19NQVBbdGV4dF0gfHwgdGV4dDtcblx0XHRcdFx0XHRpZiAodGV4dCA9PT0gb3Blbikge1xuXHRcdFx0XHRcdFx0YWxsQnJhY2VzLnB1c2goeyBpbmRleDogaSwgb3BlbjogdHJ1ZSwgZWxlbWVudDogZWxlbWVudCB9KTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChtYXBDbGFzc05hbWUoJ2JyYWNlLW9wZW4nKSk7XG5cdFx0XHRcdFx0XHRvcGVuU3RhY2sucHVzaChpKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRleHQgPT09IGNsb3NlKSB7XG5cdFx0XHRcdFx0XHRhbGxCcmFjZXMucHVzaCh7IGluZGV4OiBpLCBvcGVuOiBmYWxzZSwgZWxlbWVudDogZWxlbWVudCB9KTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChtYXBDbGFzc05hbWUoJ2JyYWNlLWNsb3NlJykpO1xuXHRcdFx0XHRcdFx0aWYgKG9wZW5TdGFjay5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0cGFpcnMucHVzaChbaSwgb3BlblN0YWNrLnBvcCgpXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHBhaXJzLmZvckVhY2goZnVuY3Rpb24gKHBhaXIpIHtcblx0XHRcdFx0dmFyIHBhaXJJZCA9ICdwYWlyLScgKyAocGFpcklkQ291bnRlcisrKSArICctJztcblxuXHRcdFx0XHR2YXIgb3BlbmluZyA9IHB1bmN0dWF0aW9uW3BhaXJbMF1dO1xuXHRcdFx0XHR2YXIgY2xvc2luZyA9IHB1bmN0dWF0aW9uW3BhaXJbMV1dO1xuXG5cdFx0XHRcdG9wZW5pbmcuaWQgPSBwYWlySWQgKyAnb3Blbic7XG5cdFx0XHRcdGNsb3NpbmcuaWQgPSBwYWlySWQgKyAnY2xvc2UnO1xuXG5cdFx0XHRcdFtvcGVuaW5nLCBjbG9zaW5nXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0ZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJCcmFjZSk7XG5cdFx0XHRcdFx0ZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbGVhdmVCcmFjZSk7XG5cdFx0XHRcdFx0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQnJhY2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0dmFyIGxldmVsID0gMDtcblx0XHRhbGxCcmFjZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7IH0pO1xuXHRcdGFsbEJyYWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChicmFjZSkge1xuXHRcdFx0aWYgKGJyYWNlLm9wZW4pIHtcblx0XHRcdFx0YnJhY2UuZWxlbWVudC5jbGFzc0xpc3QuYWRkKG1hcENsYXNzTmFtZSgnYnJhY2UtbGV2ZWwtJyArIChsZXZlbCAlIExFVkVMX1dBUlAgKyAxKSkpO1xuXHRcdFx0XHRsZXZlbCsrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV2ZWwgPSBNYXRoLm1heCgwLCBsZXZlbCAtIDEpO1xuXHRcdFx0XHRicmFjZS5lbGVtZW50LmNsYXNzTGlzdC5hZGQobWFwQ2xhc3NOYW1lKCdicmFjZS1sZXZlbC0nICsgKGxldmVsICUgTEVWRUxfV0FSUCArIDEpKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIChvYmoxLCBvYmoyKSB7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmoyKSB7XG5cdFx0XHRpZiAob2JqMi5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdFx0XHRvYmoxW25hbWVdID0gb2JqMltuYW1lXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG9iajE7XG5cdH07XG5cblx0ZnVuY3Rpb24gTm9ybWFsaXplV2hpdGVzcGFjZShkZWZhdWx0cykge1xuXHRcdHRoaXMuZGVmYXVsdHMgPSBhc3NpZ24oe30sIGRlZmF1bHRzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoLy0oXFx3KS9nLCBmdW5jdGlvbiAobWF0Y2gsIGZpcnN0Q2hhcikge1xuXHRcdFx0cmV0dXJuIGZpcnN0Q2hhci50b1VwcGVyQ2FzZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdGFiTGVuKHN0cikge1xuXHRcdHZhciByZXMgPSAwO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoc3RyLmNoYXJDb2RlQXQoaSkgPT0gJ1xcdCcuY2hhckNvZGVBdCgwKSkge1xuXHRcdFx0XHRyZXMgKz0gMztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0ci5sZW5ndGggKyByZXM7XG5cdH1cblxuXHROb3JtYWxpemVXaGl0ZXNwYWNlLnByb3RvdHlwZSA9IHtcblx0XHRzZXREZWZhdWx0czogZnVuY3Rpb24gKGRlZmF1bHRzKSB7XG5cdFx0XHR0aGlzLmRlZmF1bHRzID0gYXNzaWduKHRoaXMuZGVmYXVsdHMsIGRlZmF1bHRzKTtcblx0XHR9LFxuXHRcdG5vcm1hbGl6ZTogZnVuY3Rpb24gKGlucHV0LCBzZXR0aW5ncykge1xuXHRcdFx0c2V0dGluZ3MgPSBhc3NpZ24odGhpcy5kZWZhdWx0cywgc2V0dGluZ3MpO1xuXG5cdFx0XHRmb3IgKHZhciBuYW1lIGluIHNldHRpbmdzKSB7XG5cdFx0XHRcdHZhciBtZXRob2ROYW1lID0gdG9DYW1lbENhc2UobmFtZSk7XG5cdFx0XHRcdGlmIChuYW1lICE9PSAnbm9ybWFsaXplJyAmJiBtZXRob2ROYW1lICE9PSAnc2V0RGVmYXVsdHMnICYmXG5cdFx0XHRcdFx0c2V0dGluZ3NbbmFtZV0gJiYgdGhpc1ttZXRob2ROYW1lXSkge1xuXHRcdFx0XHRcdGlucHV0ID0gdGhpc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIGlucHV0LCBzZXR0aW5nc1tuYW1lXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGlucHV0O1xuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCAqIE5vcm1hbGl6YXRpb24gbWV0aG9kc1xuXHRcdCAqL1xuXHRcdGxlZnRUcmltOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxzKy8sICcnKTtcblx0XHR9LFxuXHRcdHJpZ2h0VHJpbTogZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxzKyQvLCAnJyk7XG5cdFx0fSxcblx0XHR0YWJzVG9TcGFjZXM6IGZ1bmN0aW9uIChpbnB1dCwgc3BhY2VzKSB7XG5cdFx0XHRzcGFjZXMgPSBzcGFjZXN8MCB8fCA0O1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcdC9nLCBuZXcgQXJyYXkoKytzcGFjZXMpLmpvaW4oJyAnKSk7XG5cdFx0fSxcblx0XHRzcGFjZXNUb1RhYnM6IGZ1bmN0aW9uIChpbnB1dCwgc3BhY2VzKSB7XG5cdFx0XHRzcGFjZXMgPSBzcGFjZXN8MCB8fCA0O1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoUmVnRXhwKCcgeycgKyBzcGFjZXMgKyAnfScsICdnJyksICdcXHQnKTtcblx0XHR9LFxuXHRcdHJlbW92ZVRyYWlsaW5nOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXHMqPyQvZ20sICcnKTtcblx0XHR9LFxuXHRcdC8vIFN1cHBvcnQgZm9yIGRlcHJlY2F0ZWQgcGx1Z2luIHJlbW92ZS1pbml0aWFsLWxpbmUtZmVlZFxuXHRcdHJlbW92ZUluaXRpYWxMaW5lRmVlZDogZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZSgvXig/Olxccj9cXG58XFxyKS8sICcnKTtcblx0XHR9LFxuXHRcdHJlbW92ZUluZGVudDogZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0XHR2YXIgaW5kZW50cyA9IGlucHV0Lm1hdGNoKC9eW15cXFNcXG5cXHJdKig/PVxcUykvZ20pO1xuXG5cdFx0XHRpZiAoIWluZGVudHMgfHwgIWluZGVudHNbMF0ubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBpbnB1dDtcblx0XHRcdH1cblxuXHRcdFx0aW5kZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoOyB9KTtcblxuXHRcdFx0aWYgKCFpbmRlbnRzWzBdLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gaW5wdXQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKFJlZ0V4cCgnXicgKyBpbmRlbnRzWzBdLCAnZ20nKSwgJycpO1xuXHRcdH0sXG5cdFx0aW5kZW50OiBmdW5jdGlvbiAoaW5wdXQsIHRhYnMpIHtcblx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKC9eW15cXFNcXG5cXHJdKig/PVxcUykvZ20sIG5ldyBBcnJheSgrK3RhYnMpLmpvaW4oJ1xcdCcpICsgJyQmJyk7XG5cdFx0fSxcblx0XHRicmVha0xpbmVzOiBmdW5jdGlvbiAoaW5wdXQsIGNoYXJhY3RlcnMpIHtcblx0XHRcdGNoYXJhY3RlcnMgPSAoY2hhcmFjdGVycyA9PT0gdHJ1ZSkgPyA4MCA6IGNoYXJhY3RlcnN8MCB8fCA4MDtcblxuXHRcdFx0dmFyIGxpbmVzID0gaW5wdXQuc3BsaXQoJ1xcbicpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAodGFiTGVuKGxpbmVzW2ldKSA8PSBjaGFyYWN0ZXJzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgbGluZSA9IGxpbmVzW2ldLnNwbGl0KC8oXFxzKykvZyk7XG5cdFx0XHRcdHZhciBsZW4gPSAwO1xuXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGluZS5sZW5ndGg7ICsraikge1xuXHRcdFx0XHRcdHZhciB0bCA9IHRhYkxlbihsaW5lW2pdKTtcblx0XHRcdFx0XHRsZW4gKz0gdGw7XG5cdFx0XHRcdFx0aWYgKGxlbiA+IGNoYXJhY3RlcnMpIHtcblx0XHRcdFx0XHRcdGxpbmVbal0gPSAnXFxuJyArIGxpbmVbal07XG5cdFx0XHRcdFx0XHRsZW4gPSB0bDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGluZXNbaV0gPSBsaW5lLmpvaW4oJycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBTdXBwb3J0IG5vZGUgbW9kdWxlc1xuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IE5vcm1hbGl6ZVdoaXRlc3BhY2U7XG5cdH1cblxuXHRQcmlzbS5wbHVnaW5zLk5vcm1hbGl6ZVdoaXRlc3BhY2UgPSBuZXcgTm9ybWFsaXplV2hpdGVzcGFjZSh7XG5cdFx0J3JlbW92ZS10cmFpbGluZyc6IHRydWUsXG5cdFx0J3JlbW92ZS1pbmRlbnQnOiB0cnVlLFxuXHRcdCdsZWZ0LXRyaW0nOiB0cnVlLFxuXHRcdCdyaWdodC10cmltJzogdHJ1ZSxcblx0XHQvKidicmVhay1saW5lcyc6IDgwLFxuXHRcdCdpbmRlbnQnOiAyLFxuXHRcdCdyZW1vdmUtaW5pdGlhbC1saW5lLWZlZWQnOiBmYWxzZSxcblx0XHQndGFicy10by1zcGFjZXMnOiA0LFxuXHRcdCdzcGFjZXMtdG8tdGFicyc6IDQqL1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0dmFyIE5vcm1hbGl6ZXIgPSBQcmlzbS5wbHVnaW5zLk5vcm1hbGl6ZVdoaXRlc3BhY2U7XG5cblx0XHQvLyBDaGVjayBzZXR0aW5nc1xuXHRcdGlmIChlbnYuc2V0dGluZ3MgJiYgZW52LnNldHRpbmdzWyd3aGl0ZXNwYWNlLW5vcm1hbGl6YXRpb24nXSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBDaGVjayBjbGFzc2VzXG5cdFx0aWYgKCFQcmlzbS51dGlsLmlzQWN0aXZlKGVudi5lbGVtZW50LCAnd2hpdGVzcGFjZS1ub3JtYWxpemF0aW9uJywgdHJ1ZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBTaW1wbGUgbW9kZSBpZiB0aGVyZSBpcyBubyBlbnYuZWxlbWVudFxuXHRcdGlmICgoIWVudi5lbGVtZW50IHx8ICFlbnYuZWxlbWVudC5wYXJlbnROb2RlKSAmJiBlbnYuY29kZSkge1xuXHRcdFx0ZW52LmNvZGUgPSBOb3JtYWxpemVyLm5vcm1hbGl6ZShlbnYuY29kZSwgZW52LnNldHRpbmdzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBOb3JtYWwgbW9kZVxuXHRcdHZhciBwcmUgPSBlbnYuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmICghZW52LmNvZGUgfHwgIXByZSB8fCBwcmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3ByZScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY2hpbGRyZW4gPSBwcmUuY2hpbGROb2Rlcztcblx0XHR2YXIgYmVmb3JlID0gJyc7XG5cdFx0dmFyIGFmdGVyID0gJyc7XG5cdFx0dmFyIGNvZGVGb3VuZCA9IGZhbHNlO1xuXG5cdFx0Ly8gTW92ZSBzdXJyb3VuZGluZyB3aGl0ZXNwYWNlIGZyb20gdGhlIDxwcmU+IHRhZyBpbnRvIHRoZSA8Y29kZT4gdGFnXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuXHRcdFx0dmFyIG5vZGUgPSBjaGlsZHJlbltpXTtcblxuXHRcdFx0aWYgKG5vZGUgPT0gZW52LmVsZW1lbnQpIHtcblx0XHRcdFx0Y29kZUZvdW5kID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJyN0ZXh0Jykge1xuXHRcdFx0XHRpZiAoY29kZUZvdW5kKSB7XG5cdFx0XHRcdFx0YWZ0ZXIgKz0gbm9kZS5ub2RlVmFsdWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YmVmb3JlICs9IG5vZGUubm9kZVZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cHJlLnJlbW92ZUNoaWxkKG5vZGUpO1xuXHRcdFx0XHQtLWk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCFlbnYuZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggfHwgIVByaXNtLnBsdWdpbnMuS2VlcE1hcmt1cCkge1xuXHRcdFx0ZW52LmNvZGUgPSBiZWZvcmUgKyBlbnYuY29kZSArIGFmdGVyO1xuXHRcdFx0ZW52LmNvZGUgPSBOb3JtYWxpemVyLm5vcm1hbGl6ZShlbnYuY29kZSwgZW52LnNldHRpbmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gUHJlc2VydmUgbWFya3VwIGZvciBrZWVwLW1hcmt1cCBwbHVnaW5cblx0XHRcdHZhciBodG1sID0gYmVmb3JlICsgZW52LmVsZW1lbnQuaW5uZXJIVE1MICsgYWZ0ZXI7XG5cdFx0XHRlbnYuZWxlbWVudC5pbm5lckhUTUwgPSBOb3JtYWxpemVyLm5vcm1hbGl6ZShodG1sLCBlbnYuc2V0dGluZ3MpO1xuXHRcdFx0ZW52LmNvZGUgPSBlbnYuZWxlbWVudC50ZXh0Q29udGVudDtcblx0XHR9XG5cdH0pO1xuXG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFQcmlzbS5wbHVnaW5zLnRvb2xiYXIpIHtcblx0XHRjb25zb2xlLndhcm4oJ1Nob3cgTGFuZ3VhZ2VzIHBsdWdpbiBsb2FkZWQgYmVmb3JlIFRvb2xiYXIgcGx1Z2luLicpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyogZXNsaW50LWRpc2FibGUgKi9cblxuXHQvLyBUaGUgbGFuZ3VhZ2VzIG1hcCBpcyBidWlsdCBhdXRvbWF0aWNhbGx5IHdpdGggZ3VscFxuXHR2YXIgTGFuZ3VhZ2VzID0gLypsYW5ndWFnZXNfcGxhY2Vob2xkZXJbKi97XG5cdFx0XCJub25lXCI6IFwiUGxhaW4gdGV4dFwiLFxuXHRcdFwicGxhaW5cIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJwbGFpbnRleHRcIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJ0ZXh0XCI6IFwiUGxhaW4gdGV4dFwiLFxuXHRcdFwidHh0XCI6IFwiUGxhaW4gdGV4dFwiLFxuXHRcdFwiaHRtbFwiOiBcIkhUTUxcIixcblx0XHRcInhtbFwiOiBcIlhNTFwiLFxuXHRcdFwic3ZnXCI6IFwiU1ZHXCIsXG5cdFx0XCJtYXRobWxcIjogXCJNYXRoTUxcIixcblx0XHRcInNzbWxcIjogXCJTU01MXCIsXG5cdFx0XCJyc3NcIjogXCJSU1NcIixcblx0XHRcImNzc1wiOiBcIkNTU1wiLFxuXHRcdFwiY2xpa2VcIjogXCJDLWxpa2VcIixcblx0XHRcImpzXCI6IFwiSmF2YVNjcmlwdFwiLFxuXHRcdFwiYWJhcFwiOiBcIkFCQVBcIixcblx0XHRcImFibmZcIjogXCJBQk5GXCIsXG5cdFx0XCJhbFwiOiBcIkFMXCIsXG5cdFx0XCJhbnRscjRcIjogXCJBTlRMUjRcIixcblx0XHRcImc0XCI6IFwiQU5UTFI0XCIsXG5cdFx0XCJhcGFjaGVjb25mXCI6IFwiQXBhY2hlIENvbmZpZ3VyYXRpb25cIixcblx0XHRcImFwbFwiOiBcIkFQTFwiLFxuXHRcdFwiYXFsXCI6IFwiQVFMXCIsXG5cdFx0XCJhcmZmXCI6IFwiQVJGRlwiLFxuXHRcdFwiYXNjaWlkb2NcIjogXCJBc2NpaURvY1wiLFxuXHRcdFwiYWRvY1wiOiBcIkFzY2lpRG9jXCIsXG5cdFx0XCJhc3BuZXRcIjogXCJBU1AuTkVUIChDIylcIixcblx0XHRcImFzbTY1MDJcIjogXCI2NTAyIEFzc2VtYmx5XCIsXG5cdFx0XCJhdXRvaG90a2V5XCI6IFwiQXV0b0hvdGtleVwiLFxuXHRcdFwiYXV0b2l0XCI6IFwiQXV0b0l0XCIsXG5cdFx0XCJhdmlzeW50aFwiOiBcIkF2aVN5bnRoXCIsXG5cdFx0XCJhdnNcIjogXCJBdmlTeW50aFwiLFxuXHRcdFwiYXZyby1pZGxcIjogXCJBdnJvIElETFwiLFxuXHRcdFwiYXZkbFwiOiBcIkF2cm8gSURMXCIsXG5cdFx0XCJiYXNpY1wiOiBcIkJBU0lDXCIsXG5cdFx0XCJiYmNvZGVcIjogXCJCQmNvZGVcIixcblx0XHRcImJuZlwiOiBcIkJORlwiLFxuXHRcdFwicmJuZlwiOiBcIlJCTkZcIixcblx0XHRcImJzbFwiOiBcIkJTTCAoMUM6RW50ZXJwcmlzZSlcIixcblx0XHRcIm9zY3JpcHRcIjogXCJPbmVTY3JpcHRcIixcblx0XHRcImNzaGFycFwiOiBcIkMjXCIsXG5cdFx0XCJjc1wiOiBcIkMjXCIsXG5cdFx0XCJkb3RuZXRcIjogXCJDI1wiLFxuXHRcdFwiY3BwXCI6IFwiQysrXCIsXG5cdFx0XCJjZnNjcmlwdFwiOiBcIkNGU2NyaXB0XCIsXG5cdFx0XCJjZmNcIjogXCJDRlNjcmlwdFwiLFxuXHRcdFwiY2lsXCI6IFwiQ0lMXCIsXG5cdFx0XCJjbWFrZVwiOiBcIkNNYWtlXCIsXG5cdFx0XCJjb2JvbFwiOiBcIkNPQk9MXCIsXG5cdFx0XCJjb2ZmZWVcIjogXCJDb2ZmZWVTY3JpcHRcIixcblx0XHRcImNvbmNcIjogXCJDb25jdXJuYXNcIixcblx0XHRcImNzcFwiOiBcIkNvbnRlbnQtU2VjdXJpdHktUG9saWN5XCIsXG5cdFx0XCJjc3MtZXh0cmFzXCI6IFwiQ1NTIEV4dHJhc1wiLFxuXHRcdFwiY3N2XCI6IFwiQ1NWXCIsXG5cdFx0XCJkYXRhd2VhdmVcIjogXCJEYXRhV2VhdmVcIixcblx0XHRcImRheFwiOiBcIkRBWFwiLFxuXHRcdFwiZGphbmdvXCI6IFwiRGphbmdvL0ppbmphMlwiLFxuXHRcdFwiamluamEyXCI6IFwiRGphbmdvL0ppbmphMlwiLFxuXHRcdFwiZG5zLXpvbmUtZmlsZVwiOiBcIkROUyB6b25lIGZpbGVcIixcblx0XHRcImRucy16b25lXCI6IFwiRE5TIHpvbmUgZmlsZVwiLFxuXHRcdFwiZG9ja2VyZmlsZVwiOiBcIkRvY2tlclwiLFxuXHRcdFwiZG90XCI6IFwiRE9UIChHcmFwaHZpeilcIixcblx0XHRcImd2XCI6IFwiRE9UIChHcmFwaHZpeilcIixcblx0XHRcImVibmZcIjogXCJFQk5GXCIsXG5cdFx0XCJlZGl0b3Jjb25maWdcIjogXCJFZGl0b3JDb25maWdcIixcblx0XHRcImVqc1wiOiBcIkVKU1wiLFxuXHRcdFwiZXRsdWFcIjogXCJFbWJlZGRlZCBMdWEgdGVtcGxhdGluZ1wiLFxuXHRcdFwiZXJiXCI6IFwiRVJCXCIsXG5cdFx0XCJleGNlbC1mb3JtdWxhXCI6IFwiRXhjZWwgRm9ybXVsYVwiLFxuXHRcdFwieGxzeFwiOiBcIkV4Y2VsIEZvcm11bGFcIixcblx0XHRcInhsc1wiOiBcIkV4Y2VsIEZvcm11bGFcIixcblx0XHRcImZzaGFycFwiOiBcIkYjXCIsXG5cdFx0XCJmaXJlc3RvcmUtc2VjdXJpdHktcnVsZXNcIjogXCJGaXJlc3RvcmUgc2VjdXJpdHkgcnVsZXNcIixcblx0XHRcImZ0bFwiOiBcIkZyZWVNYXJrZXIgVGVtcGxhdGUgTGFuZ3VhZ2VcIixcblx0XHRcImdtbFwiOiBcIkdhbWVNYWtlciBMYW5ndWFnZVwiLFxuXHRcdFwiZ2FtZW1ha2VybGFuZ3VhZ2VcIjogXCJHYW1lTWFrZXIgTGFuZ3VhZ2VcIixcblx0XHRcImdhcFwiOiBcIkdBUCAoQ0FTKVwiLFxuXHRcdFwiZ2NvZGVcIjogXCJHLWNvZGVcIixcblx0XHRcImdkc2NyaXB0XCI6IFwiR0RTY3JpcHRcIixcblx0XHRcImdlZGNvbVwiOiBcIkdFRENPTVwiLFxuXHRcdFwiZ2xzbFwiOiBcIkdMU0xcIixcblx0XHRcImduXCI6IFwiR05cIixcblx0XHRcImduaVwiOiBcIkdOXCIsXG5cdFx0XCJncmFwaHFsXCI6IFwiR3JhcGhRTFwiLFxuXHRcdFwiaGJzXCI6IFwiSGFuZGxlYmFyc1wiLFxuXHRcdFwiaHNcIjogXCJIYXNrZWxsXCIsXG5cdFx0XCJoY2xcIjogXCJIQ0xcIixcblx0XHRcImhsc2xcIjogXCJITFNMXCIsXG5cdFx0XCJodHRwXCI6IFwiSFRUUFwiLFxuXHRcdFwiaHBrcFwiOiBcIkhUVFAgUHVibGljLUtleS1QaW5zXCIsXG5cdFx0XCJoc3RzXCI6IFwiSFRUUCBTdHJpY3QtVHJhbnNwb3J0LVNlY3VyaXR5XCIsXG5cdFx0XCJpY2hpZ29qYW1cIjogXCJJY2hpZ29KYW1cIixcblx0XHRcImljdS1tZXNzYWdlLWZvcm1hdFwiOiBcIklDVSBNZXNzYWdlIEZvcm1hdFwiLFxuXHRcdFwiaWRyXCI6IFwiSWRyaXNcIixcblx0XHRcImlnbm9yZVwiOiBcIi5pZ25vcmVcIixcblx0XHRcImdpdGlnbm9yZVwiOiBcIi5naXRpZ25vcmVcIixcblx0XHRcImhnaWdub3JlXCI6IFwiLmhnaWdub3JlXCIsXG5cdFx0XCJucG1pZ25vcmVcIjogXCIubnBtaWdub3JlXCIsXG5cdFx0XCJpbmZvcm03XCI6IFwiSW5mb3JtIDdcIixcblx0XHRcImphdmFkb2NcIjogXCJKYXZhRG9jXCIsXG5cdFx0XCJqYXZhZG9jbGlrZVwiOiBcIkphdmFEb2MtbGlrZVwiLFxuXHRcdFwiamF2YXN0YWNrdHJhY2VcIjogXCJKYXZhIHN0YWNrIHRyYWNlXCIsXG5cdFx0XCJqcVwiOiBcIkpRXCIsXG5cdFx0XCJqc2RvY1wiOiBcIkpTRG9jXCIsXG5cdFx0XCJqcy1leHRyYXNcIjogXCJKUyBFeHRyYXNcIixcblx0XHRcImpzb25cIjogXCJKU09OXCIsXG5cdFx0XCJ3ZWJtYW5pZmVzdFwiOiBcIldlYiBBcHAgTWFuaWZlc3RcIixcblx0XHRcImpzb241XCI6IFwiSlNPTjVcIixcblx0XHRcImpzb25wXCI6IFwiSlNPTlBcIixcblx0XHRcImpzc3RhY2t0cmFjZVwiOiBcIkpTIHN0YWNrIHRyYWNlXCIsXG5cdFx0XCJqcy10ZW1wbGF0ZXNcIjogXCJKUyBUZW1wbGF0ZXNcIixcblx0XHRcImt0c1wiOiBcIktvdGxpbiBTY3JpcHRcIixcblx0XHRcImt0XCI6IFwiS290bGluXCIsXG5cdFx0XCJrdW1pclwiOiBcIkt1TWlyICjQmtGD0JzQuNGAKVwiLFxuXHRcdFwia3VtXCI6IFwiS3VNaXIgKNCa0YPQnNC40YApXCIsXG5cdFx0XCJsYXRleFwiOiBcIkxhVGVYXCIsXG5cdFx0XCJ0ZXhcIjogXCJUZVhcIixcblx0XHRcImNvbnRleHRcIjogXCJDb25UZVh0XCIsXG5cdFx0XCJsaWx5cG9uZFwiOiBcIkxpbHlQb25kXCIsXG5cdFx0XCJseVwiOiBcIkxpbHlQb25kXCIsXG5cdFx0XCJlbWFjc1wiOiBcIkxpc3BcIixcblx0XHRcImVsaXNwXCI6IFwiTGlzcFwiLFxuXHRcdFwiZW1hY3MtbGlzcFwiOiBcIkxpc3BcIixcblx0XHRcImxsdm1cIjogXCJMTFZNIElSXCIsXG5cdFx0XCJsb2dcIjogXCJMb2cgZmlsZVwiLFxuXHRcdFwibG9sY29kZVwiOiBcIkxPTENPREVcIixcblx0XHRcIm1hZ21hXCI6IFwiTWFnbWEgKENBUylcIixcblx0XHRcIm1kXCI6IFwiTWFya2Rvd25cIixcblx0XHRcIm1hcmt1cC10ZW1wbGF0aW5nXCI6IFwiTWFya3VwIHRlbXBsYXRpbmdcIixcblx0XHRcIm1hdGxhYlwiOiBcIk1BVExBQlwiLFxuXHRcdFwibWF4c2NyaXB0XCI6IFwiTUFYU2NyaXB0XCIsXG5cdFx0XCJtZWxcIjogXCJNRUxcIixcblx0XHRcIm1vbmdvZGJcIjogXCJNb25nb0RCXCIsXG5cdFx0XCJtb29uXCI6IFwiTW9vblNjcmlwdFwiLFxuXHRcdFwibjFxbFwiOiBcIk4xUUxcIixcblx0XHRcIm40anNcIjogXCJONEpTXCIsXG5cdFx0XCJuNGpzZFwiOiBcIk40SlNcIixcblx0XHRcIm5hbmQydGV0cmlzLWhkbFwiOiBcIk5hbmQgVG8gVGV0cmlzIEhETFwiLFxuXHRcdFwibmFuaXNjcmlwdFwiOiBcIk5hbmlub3ZlbCBTY3JpcHRcIixcblx0XHRcIm5hbmlcIjogXCJOYW5pbm92ZWwgU2NyaXB0XCIsXG5cdFx0XCJuYXNtXCI6IFwiTkFTTVwiLFxuXHRcdFwibmVvblwiOiBcIk5FT05cIixcblx0XHRcIm5naW54XCI6IFwibmdpbnhcIixcblx0XHRcIm5zaXNcIjogXCJOU0lTXCIsXG5cdFx0XCJvYmplY3RpdmVjXCI6IFwiT2JqZWN0aXZlLUNcIixcblx0XHRcIm9iamNcIjogXCJPYmplY3RpdmUtQ1wiLFxuXHRcdFwib2NhbWxcIjogXCJPQ2FtbFwiLFxuXHRcdFwib3BlbmNsXCI6IFwiT3BlbkNMXCIsXG5cdFx0XCJvcGVucWFzbVwiOiBcIk9wZW5RYXNtXCIsXG5cdFx0XCJxYXNtXCI6IFwiT3BlblFhc21cIixcblx0XHRcInBhcmlncFwiOiBcIlBBUkkvR1BcIixcblx0XHRcIm9iamVjdHBhc2NhbFwiOiBcIk9iamVjdCBQYXNjYWxcIixcblx0XHRcInBzbFwiOiBcIlBBVFJPTCBTY3JpcHRpbmcgTGFuZ3VhZ2VcIixcblx0XHRcInBjYXhpc1wiOiBcIlBDLUF4aXNcIixcblx0XHRcInB4XCI6IFwiUEMtQXhpc1wiLFxuXHRcdFwicGVvcGxlY29kZVwiOiBcIlBlb3BsZUNvZGVcIixcblx0XHRcInBjb2RlXCI6IFwiUGVvcGxlQ29kZVwiLFxuXHRcdFwicGhwXCI6IFwiUEhQXCIsXG5cdFx0XCJwaHBkb2NcIjogXCJQSFBEb2NcIixcblx0XHRcInBocC1leHRyYXNcIjogXCJQSFAgRXh0cmFzXCIsXG5cdFx0XCJwbHNxbFwiOiBcIlBML1NRTFwiLFxuXHRcdFwicG93ZXJxdWVyeVwiOiBcIlBvd2VyUXVlcnlcIixcblx0XHRcInBxXCI6IFwiUG93ZXJRdWVyeVwiLFxuXHRcdFwibXNjcmlwdFwiOiBcIlBvd2VyUXVlcnlcIixcblx0XHRcInBvd2Vyc2hlbGxcIjogXCJQb3dlclNoZWxsXCIsXG5cdFx0XCJwcm9tcWxcIjogXCJQcm9tUUxcIixcblx0XHRcInByb3BlcnRpZXNcIjogXCIucHJvcGVydGllc1wiLFxuXHRcdFwicHJvdG9idWZcIjogXCJQcm90b2NvbCBCdWZmZXJzXCIsXG5cdFx0XCJwdXJlYmFzaWNcIjogXCJQdXJlQmFzaWNcIixcblx0XHRcInBiZmFzbVwiOiBcIlB1cmVCYXNpY1wiLFxuXHRcdFwicHVyc1wiOiBcIlB1cmVTY3JpcHRcIixcblx0XHRcInB5XCI6IFwiUHl0aG9uXCIsXG5cdFx0XCJxc2hhcnBcIjogXCJRI1wiLFxuXHRcdFwicXNcIjogXCJRI1wiLFxuXHRcdFwicVwiOiBcIlEgKGtkYisgZGF0YWJhc2UpXCIsXG5cdFx0XCJxbWxcIjogXCJRTUxcIixcblx0XHRcInJrdFwiOiBcIlJhY2tldFwiLFxuXHRcdFwiY3NodG1sXCI6IFwiUmF6b3IgQyNcIixcblx0XHRcInJhem9yXCI6IFwiUmF6b3IgQyNcIixcblx0XHRcImpzeFwiOiBcIlJlYWN0IEpTWFwiLFxuXHRcdFwidHN4XCI6IFwiUmVhY3QgVFNYXCIsXG5cdFx0XCJyZW5weVwiOiBcIlJlbidweVwiLFxuXHRcdFwicnB5XCI6IFwiUmVuJ3B5XCIsXG5cdFx0XCJyZXN0XCI6IFwicmVTVCAocmVTdHJ1Y3R1cmVkVGV4dClcIixcblx0XHRcInJvYm90ZnJhbWV3b3JrXCI6IFwiUm9ib3QgRnJhbWV3b3JrXCIsXG5cdFx0XCJyb2JvdFwiOiBcIlJvYm90IEZyYW1ld29ya1wiLFxuXHRcdFwicmJcIjogXCJSdWJ5XCIsXG5cdFx0XCJzYXNcIjogXCJTQVNcIixcblx0XHRcInNhc3NcIjogXCJTYXNzIChTYXNzKVwiLFxuXHRcdFwic2Nzc1wiOiBcIlNhc3MgKFNjc3MpXCIsXG5cdFx0XCJzaGVsbC1zZXNzaW9uXCI6IFwiU2hlbGwgc2Vzc2lvblwiLFxuXHRcdFwic2gtc2Vzc2lvblwiOiBcIlNoZWxsIHNlc3Npb25cIixcblx0XHRcInNoZWxsc2Vzc2lvblwiOiBcIlNoZWxsIHNlc3Npb25cIixcblx0XHRcInNtbFwiOiBcIlNNTFwiLFxuXHRcdFwic21sbmpcIjogXCJTTUwvTkpcIixcblx0XHRcInNvbGlkaXR5XCI6IFwiU29saWRpdHkgKEV0aGVyZXVtKVwiLFxuXHRcdFwic29sXCI6IFwiU29saWRpdHkgKEV0aGVyZXVtKVwiLFxuXHRcdFwic29sdXRpb24tZmlsZVwiOiBcIlNvbHV0aW9uIGZpbGVcIixcblx0XHRcInNsblwiOiBcIlNvbHV0aW9uIGZpbGVcIixcblx0XHRcInNveVwiOiBcIlNveSAoQ2xvc3VyZSBUZW1wbGF0ZSlcIixcblx0XHRcInNwYXJxbFwiOiBcIlNQQVJRTFwiLFxuXHRcdFwicnFcIjogXCJTUEFSUUxcIixcblx0XHRcInNwbHVuay1zcGxcIjogXCJTcGx1bmsgU1BMXCIsXG5cdFx0XCJzcWZcIjogXCJTUUY6IFN0YXR1cyBRdW8gRnVuY3Rpb24gKEFybWEgMylcIixcblx0XHRcInNxbFwiOiBcIlNRTFwiLFxuXHRcdFwiaWVjc3RcIjogXCJTdHJ1Y3R1cmVkIFRleHQgKElFQyA2MTEzMS0zKVwiLFxuXHRcdFwic3lzdGVtZFwiOiBcIlN5c3RlbWQgY29uZmlndXJhdGlvbiBmaWxlXCIsXG5cdFx0XCJ0NC10ZW1wbGF0aW5nXCI6IFwiVDQgdGVtcGxhdGluZ1wiLFxuXHRcdFwidDQtY3NcIjogXCJUNCBUZXh0IFRlbXBsYXRlcyAoQyMpXCIsXG5cdFx0XCJ0NFwiOiBcIlQ0IFRleHQgVGVtcGxhdGVzIChDIylcIixcblx0XHRcInQ0LXZiXCI6IFwiVDQgVGV4dCBUZW1wbGF0ZXMgKFZCKVwiLFxuXHRcdFwidGFwXCI6IFwiVEFQXCIsXG5cdFx0XCJ0dDJcIjogXCJUZW1wbGF0ZSBUb29sa2l0IDJcIixcblx0XHRcInRvbWxcIjogXCJUT01MXCIsXG5cdFx0XCJ0cmlnXCI6IFwiVHJpR1wiLFxuXHRcdFwidHNcIjogXCJUeXBlU2NyaXB0XCIsXG5cdFx0XCJ0c2NvbmZpZ1wiOiBcIlRTQ29uZmlnXCIsXG5cdFx0XCJ1c2NyaXB0XCI6IFwiVW5yZWFsU2NyaXB0XCIsXG5cdFx0XCJ1Y1wiOiBcIlVucmVhbFNjcmlwdFwiLFxuXHRcdFwidXJpXCI6IFwiVVJJXCIsXG5cdFx0XCJ1cmxcIjogXCJVUkxcIixcblx0XHRcInZibmV0XCI6IFwiVkIuTmV0XCIsXG5cdFx0XCJ2aGRsXCI6IFwiVkhETFwiLFxuXHRcdFwidmltXCI6IFwidmltXCIsXG5cdFx0XCJ2aXN1YWwtYmFzaWNcIjogXCJWaXN1YWwgQmFzaWNcIixcblx0XHRcInZiYVwiOiBcIlZCQVwiLFxuXHRcdFwidmJcIjogXCJWaXN1YWwgQmFzaWNcIixcblx0XHRcIndhc21cIjogXCJXZWJBc3NlbWJseVwiLFxuXHRcdFwid2lraVwiOiBcIldpa2kgbWFya3VwXCIsXG5cdFx0XCJ3b2xmcmFtXCI6IFwiV29sZnJhbSBsYW5ndWFnZVwiLFxuXHRcdFwibmJcIjogXCJNYXRoZW1hdGljYSBOb3RlYm9va1wiLFxuXHRcdFwid2xcIjogXCJXb2xmcmFtIGxhbmd1YWdlXCIsXG5cdFx0XCJ4ZW9yYWN1YmVcIjogXCJYZW9yYUN1YmVcIixcblx0XHRcInhtbC1kb2NcIjogXCJYTUwgZG9jICgubmV0KVwiLFxuXHRcdFwieG9qb1wiOiBcIlhvam8gKFJFQUxiYXNpYylcIixcblx0XHRcInhxdWVyeVwiOiBcIlhRdWVyeVwiLFxuXHRcdFwieWFtbFwiOiBcIllBTUxcIixcblx0XHRcInltbFwiOiBcIllBTUxcIixcblx0XHRcInlhbmdcIjogXCJZQU5HXCJcblx0fS8qXSovO1xuXG5cdC8qIGVzbGludC1lbmFibGUgKi9cblxuXHRQcmlzbS5wbHVnaW5zLnRvb2xiYXIucmVnaXN0ZXJCdXR0b24oJ3Nob3ctbGFuZ3VhZ2UnLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0dmFyIHByZSA9IGVudi5lbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0aWYgKCFwcmUgfHwgIS9wcmUvaS50ZXN0KHByZS5ub2RlTmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBUcmllcyB0byBndWVzcyB0aGUgbmFtZSBvZiBhIGxhbmd1YWdlIGdpdmVuIGl0cyBpZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgbGFuZ3VhZ2UgaWQuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBndWVzc1RpdGxlKGlkKSB7XG5cdFx0XHRpZiAoIWlkKSB7XG5cdFx0XHRcdHJldHVybiBpZDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoaWQuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBpZC5zdWJzdHJpbmcoMSkpLnJlcGxhY2UoL3MoPz1jcmlwdCkvLCAnUycpO1xuXHRcdH1cblxuXHRcdHZhciBsYW5ndWFnZSA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFuZ3VhZ2UnKSB8fCBMYW5ndWFnZXNbZW52Lmxhbmd1YWdlXSB8fCBndWVzc1RpdGxlKGVudi5sYW5ndWFnZSk7XG5cblx0XHRpZiAoIWxhbmd1YWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBsYW5ndWFnZTtcblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9KTtcblxufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG5cblx0aWYgKHR5cGVvZiBQcmlzbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBjYWxsYmFja3MgPSBbXTtcblx0dmFyIG1hcCA9IHt9O1xuXHR2YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9O1xuXG5cdFByaXNtLnBsdWdpbnMudG9vbGJhciA9IHt9O1xuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiBCdXR0b25PcHRpb25zXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IGRpc3BsYXllZC5cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFt1cmxdIFRoZSBVUkwgb2YgdGhlIGxpbmsgd2hpY2ggd2lsbCBiZSBjcmVhdGVkLlxuXHQgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBbb25DbGlja10gVGhlIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgYGNsaWNrYCBldmVudCBvZiB0aGUgY3JlYXRlZCBidXR0b24uXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY2xhc3NOYW1lXSBUaGUgY2xhc3MgYXR0cmlidXRlIHRvIGluY2x1ZGUgd2l0aCBlbGVtZW50LlxuXHQgKi9cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBidXR0b24gY2FsbGJhY2sgd2l0aCB0aGUgdG9vbGJhci5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleVxuXHQgKiBAcGFyYW0ge0J1dHRvbk9wdGlvbnN8RnVuY3Rpb259IG9wdHNcblx0ICovXG5cdHZhciByZWdpc3RlckJ1dHRvbiA9IFByaXNtLnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbiA9IGZ1bmN0aW9uIChrZXksIG9wdHMpIHtcblx0XHR2YXIgY2FsbGJhY2s7XG5cblx0XHRpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNhbGxiYWNrID0gb3B0cztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2FsbGJhY2sgPSBmdW5jdGlvbiAoZW52KSB7XG5cdFx0XHRcdHZhciBlbGVtZW50O1xuXG5cdFx0XHRcdGlmICh0eXBlb2Ygb3B0cy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRcdGVsZW1lbnQudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRvcHRzLm9uQ2xpY2suY2FsbCh0aGlzLCBlbnYpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRzLnVybCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0XHRcdGVsZW1lbnQuaHJlZiA9IG9wdHMudXJsO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAob3B0cy5jbGFzc05hbWUpIHtcblx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQob3B0cy5jbGFzc05hbWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IG9wdHMudGV4dDtcblxuXHRcdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKGtleSBpbiBtYXApIHtcblx0XHRcdGNvbnNvbGUud2FybignVGhlcmUgaXMgYSBidXR0b24gd2l0aCB0aGUga2V5IFwiJyArIGtleSArICdcIiByZWdpc3RlcmVkIGFscmVhZHkuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y2FsbGJhY2tzLnB1c2gobWFwW2tleV0gPSBjYWxsYmFjayk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGNhbGxiYWNrIG9yZGVyIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtzdHJpbmdbXSB8IHVuZGVmaW5lZH1cblx0ICovXG5cdGZ1bmN0aW9uIGdldE9yZGVyKGVsZW1lbnQpIHtcblx0XHR3aGlsZSAoZWxlbWVudCkge1xuXHRcdFx0dmFyIG9yZGVyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbGJhci1vcmRlcicpO1xuXHRcdFx0aWYgKG9yZGVyICE9IG51bGwpIHtcblx0XHRcdFx0b3JkZXIgPSBvcmRlci50cmltKCk7XG5cdFx0XHRcdGlmIChvcmRlci5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JkZXIuc3BsaXQoL1xccyosXFxzKi9nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFBvc3QtaGlnaGxpZ2h0IFByaXNtIGhvb2sgY2FsbGJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSBlbnZcblx0ICovXG5cdHZhciBob29rID0gUHJpc20ucGx1Z2lucy50b29sYmFyLmhvb2sgPSBmdW5jdGlvbiAoZW52KSB7XG5cdFx0Ly8gQ2hlY2sgaWYgaW5saW5lIG9yIGFjdHVhbCBjb2RlIGJsb2NrIChjcmVkaXQgdG8gbGluZS1udW1iZXJzIHBsdWdpbilcblx0XHR2YXIgcHJlID0gZW52LmVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHRpZiAoIXByZSB8fCAhL3ByZS9pLnRlc3QocHJlLm5vZGVOYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEF1dG9sb2FkZXIgcmVoaWdobGlnaHRzLCBzbyBvbmx5IGRvIHRoaXMgb25jZS5cblx0XHRpZiAocHJlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2RlLXRvb2xiYXInKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENyZWF0ZSB3cmFwcGVyIGZvciA8cHJlPiB0byBwcmV2ZW50IHNjcm9sbGluZyB0b29sYmFyIHdpdGggY29udGVudFxuXHRcdHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb2RlLXRvb2xiYXInKTtcblx0XHRwcmUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgcHJlKTtcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKHByZSk7XG5cblx0XHQvLyBTZXR1cCB0aGUgdG9vbGJhclxuXHRcdHZhciB0b29sYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dG9vbGJhci5jbGFzc0xpc3QuYWRkKCd0b29sYmFyJyk7XG5cblx0XHQvLyBvcmRlciBjYWxsYmFja3Ncblx0XHR2YXIgZWxlbWVudENhbGxiYWNrcyA9IGNhbGxiYWNrcztcblx0XHR2YXIgb3JkZXIgPSBnZXRPcmRlcihlbnYuZWxlbWVudCk7XG5cdFx0aWYgKG9yZGVyKSB7XG5cdFx0XHRlbGVtZW50Q2FsbGJhY2tzID0gb3JkZXIubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0cmV0dXJuIG1hcFtrZXldIHx8IG5vb3A7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRlbGVtZW50Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgZWxlbWVudCA9IGNhbGxiYWNrKGVudik7XG5cblx0XHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXItaXRlbScpO1xuXG5cdFx0XHRpdGVtLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdFx0dG9vbGJhci5hcHBlbmRDaGlsZChpdGVtKTtcblx0XHR9KTtcblxuXHRcdC8vIEFkZCBvdXIgdG9vbGJhciB0byB0aGUgY3VycmVudGx5IGNyZWF0ZWQgd3JhcHBlciBvZiA8cHJlPiB0YWdcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKHRvb2xiYXIpO1xuXHR9O1xuXG5cdHJlZ2lzdGVyQnV0dG9uKCdsYWJlbCcsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgcHJlID0gZW52LmVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHRpZiAoIXByZSB8fCAhL3ByZS9pLnRlc3QocHJlLm5vZGVOYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghcHJlLmhhc0F0dHJpYnV0ZSgnZGF0YS1sYWJlbCcpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGVsZW1lbnQ7IHZhciB0ZW1wbGF0ZTtcblx0XHR2YXIgdGV4dCA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwnKTtcblx0XHR0cnkge1xuXHRcdFx0Ly8gQW55IG5vcm1hbCB0ZXh0IHdpbGwgYmxvdyB1cCB0aGlzIHNlbGVjdG9yLlxuXHRcdFx0dGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZSMnICsgdGV4dCk7XG5cdFx0fSBjYXRjaCAoZSkgeyAvKiBub29wICovIH1cblxuXHRcdGlmICh0ZW1wbGF0ZSkge1xuXHRcdFx0ZWxlbWVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXVybCcpKSB7XG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdGVsZW1lbnQuaHJlZiA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fSk7XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIHRoZSB0b29sYmFyIHdpdGggUHJpc20uXG5cdCAqL1xuXHRQcmlzbS5ob29rcy5hZGQoJ2NvbXBsZXRlJywgaG9vayk7XG59KCkpO1xuIiwiXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWNvcmUuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLy8vIDxyZWZlcmVuY2UgbGliPVwiV2ViV29ya2VyXCIvPlxuXG52YXIgX3NlbGYgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXG5cdD8gd2luZG93ICAgLy8gaWYgaW4gYnJvd3NlclxuXHQ6IChcblx0XHQodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpXG5cdFx0XHQ/IHNlbGYgLy8gaWYgaW4gd29ya2VyXG5cdFx0XHQ6IHt9ICAgLy8gaWYgaW4gbm9kZSBqc1xuXHQpO1xuXG4vKipcbiAqIFByaXNtOiBMaWdodHdlaWdodCwgcm9idXN0LCBlbGVnYW50IHN5bnRheCBoaWdobGlnaHRpbmdcbiAqXG4gKiBAbGljZW5zZSBNSVQgPGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUPlxuICogQGF1dGhvciBMZWEgVmVyb3UgPGh0dHBzOi8vbGVhLnZlcm91Lm1lPlxuICogQG5hbWVzcGFjZVxuICogQHB1YmxpY1xuICovXG52YXIgUHJpc20gPSAoZnVuY3Rpb24gKF9zZWxmKSB7XG5cblx0Ly8gUHJpdmF0ZSBoZWxwZXIgdmFyc1xuXHR2YXIgbGFuZyA9IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pO1xuXHR2YXIgdW5pcXVlSWQgPSAwO1xuXG5cdC8vIFRoZSBncmFtbWFyIG9iamVjdCBmb3IgcGxhaW50ZXh0XG5cdHZhciBwbGFpblRleHRHcmFtbWFyID0ge307XG5cblxuXHR2YXIgXyA9IHtcblx0XHQvKipcblx0XHQgKiBCeSBkZWZhdWx0LCBQcmlzbSB3aWxsIGF0dGVtcHQgdG8gaGlnaGxpZ2h0IGFsbCBjb2RlIGVsZW1lbnRzIChieSBjYWxsaW5nIHtAbGluayBQcmlzbS5oaWdobGlnaHRBbGx9KSBvbiB0aGVcblx0XHQgKiBjdXJyZW50IHBhZ2UgYWZ0ZXIgdGhlIHBhZ2UgZmluaXNoZWQgbG9hZGluZy4gVGhpcyBtaWdodCBiZSBhIHByb2JsZW0gaWYgZS5nLiB5b3Ugd2FudGVkIHRvIGFzeW5jaHJvbm91c2x5IGxvYWRcblx0XHQgKiBhZGRpdGlvbmFsIGxhbmd1YWdlcyBvciBwbHVnaW5zIHlvdXJzZWxmLlxuXHRcdCAqXG5cdFx0ICogQnkgc2V0dGluZyB0aGlzIHZhbHVlIHRvIGB0cnVlYCwgUHJpc20gd2lsbCBub3QgYXV0b21hdGljYWxseSBoaWdobGlnaHQgYWxsIGNvZGUgZWxlbWVudHMgb24gdGhlIHBhZ2UuXG5cdFx0ICpcblx0XHQgKiBZb3Ugb2J2aW91c2x5IGhhdmUgdG8gY2hhbmdlIHRoaXMgdmFsdWUgYmVmb3JlIHRoZSBhdXRvbWF0aWMgaGlnaGxpZ2h0aW5nIHN0YXJ0ZWQuIFRvIGRvIHRoaXMsIHlvdSBjYW4gYWRkIGFuXG5cdFx0ICogZW1wdHkgUHJpc20gb2JqZWN0IGludG8gdGhlIGdsb2JhbCBzY29wZSBiZWZvcmUgbG9hZGluZyB0aGUgUHJpc20gc2NyaXB0IGxpa2UgdGhpczpcblx0XHQgKlxuXHRcdCAqIGBgYGpzXG5cdFx0ICogd2luZG93LlByaXNtID0gd2luZG93LlByaXNtIHx8IHt9O1xuXHRcdCAqIFByaXNtLm1hbnVhbCA9IHRydWU7XG5cdFx0ICogLy8gYWRkIGEgbmV3IDxzY3JpcHQ+IHRvIGxvYWQgUHJpc20ncyBzY3JpcHRcblx0XHQgKiBgYGBcblx0XHQgKlxuXHRcdCAqIEBkZWZhdWx0IGZhbHNlXG5cdFx0ICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdG1hbnVhbDogX3NlbGYuUHJpc20gJiYgX3NlbGYuUHJpc20ubWFudWFsLFxuXHRcdGRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcjogX3NlbGYuUHJpc20gJiYgX3NlbGYuUHJpc20uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyLFxuXG5cdFx0LyoqXG5cdFx0ICogQSBuYW1lc3BhY2UgZm9yIHV0aWxpdHkgbWV0aG9kcy5cblx0XHQgKlxuXHRcdCAqIEFsbCBmdW5jdGlvbiBpbiB0aGlzIG5hbWVzcGFjZSB0aGF0IGFyZSBub3QgZXhwbGljaXRseSBtYXJrZWQgYXMgX3B1YmxpY18gYXJlIGZvciBfX2ludGVybmFsIHVzZSBvbmx5X18gYW5kIG1heVxuXHRcdCAqIGNoYW5nZSBvciBkaXNhcHBlYXIgYXQgYW55IHRpbWUuXG5cdFx0ICpcblx0XHQgKiBAbmFtZXNwYWNlXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICovXG5cdFx0dXRpbDoge1xuXHRcdFx0ZW5jb2RlOiBmdW5jdGlvbiBlbmNvZGUodG9rZW5zKSB7XG5cdFx0XHRcdGlmICh0b2tlbnMgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgVG9rZW4odG9rZW5zLnR5cGUsIGVuY29kZSh0b2tlbnMuY29udGVudCksIHRva2Vucy5hbGlhcyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRva2Vucy5tYXAoZW5jb2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW5zLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoL1xcdTAwYTAvZywgJyAnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSB0eXBlIG9mIHRoZSBnaXZlbiB2YWx1ZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge2FueX0gb1xuXHRcdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHRcdCAqIEBleGFtcGxlXG5cdFx0XHQgKiB0eXBlKG51bGwpICAgICAgPT09ICdOdWxsJ1xuXHRcdFx0ICogdHlwZSh1bmRlZmluZWQpID09PSAnVW5kZWZpbmVkJ1xuXHRcdFx0ICogdHlwZSgxMjMpICAgICAgID09PSAnTnVtYmVyJ1xuXHRcdFx0ICogdHlwZSgnZm9vJykgICAgID09PSAnU3RyaW5nJ1xuXHRcdFx0ICogdHlwZSh0cnVlKSAgICAgID09PSAnQm9vbGVhbidcblx0XHRcdCAqIHR5cGUoWzEsIDJdKSAgICA9PT0gJ0FycmF5J1xuXHRcdFx0ICogdHlwZSh7fSkgICAgICAgID09PSAnT2JqZWN0J1xuXHRcdFx0ICogdHlwZShTdHJpbmcpICAgID09PSAnRnVuY3Rpb24nXG5cdFx0XHQgKiB0eXBlKC9hYmMrLykgICAgPT09ICdSZWdFeHAnXG5cdFx0XHQgKi9cblx0XHRcdHR5cGU6IGZ1bmN0aW9uIChvKSB7XG5cdFx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIGEgdW5pcXVlIG51bWJlciBmb3IgdGhlIGdpdmVuIG9iamVjdC4gTGF0ZXIgY2FsbHMgd2lsbCBzdGlsbCByZXR1cm4gdGhlIHNhbWUgbnVtYmVyLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcblx0XHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdFx0XHQgKi9cblx0XHRcdG9iaklkOiBmdW5jdGlvbiAob2JqKSB7XG5cdFx0XHRcdGlmICghb2JqWydfX2lkJ10pIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAnX19pZCcsIHsgdmFsdWU6ICsrdW5pcXVlSWQgfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9ialsnX19pZCddO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDcmVhdGVzIGEgZGVlcCBjbG9uZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0LlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoZSBtYWluIGludGVuZGVkIHVzZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIGNsb25lIGxhbmd1YWdlIGRlZmluaXRpb25zLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7VH0gb1xuXHRcdFx0ICogQHBhcmFtIHtSZWNvcmQ8bnVtYmVyLCBhbnk+fSBbdmlzaXRlZF1cblx0XHRcdCAqIEByZXR1cm5zIHtUfVxuXHRcdFx0ICogQHRlbXBsYXRlIFRcblx0XHRcdCAqL1xuXHRcdFx0Y2xvbmU6IGZ1bmN0aW9uIGRlZXBDbG9uZShvLCB2aXNpdGVkKSB7XG5cdFx0XHRcdHZpc2l0ZWQgPSB2aXNpdGVkIHx8IHt9O1xuXG5cdFx0XHRcdHZhciBjbG9uZTsgdmFyIGlkO1xuXHRcdFx0XHRzd2l0Y2ggKF8udXRpbC50eXBlKG8pKSB7XG5cdFx0XHRcdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2aXNpdGVkW2lkXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNsb25lID0gLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSAqLyAoe30pO1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0XHRcdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdFx0XHRcdGNsb25lW2tleV0gPSBkZWVwQ2xvbmUob1trZXldLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovIChjbG9uZSk7XG5cblx0XHRcdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdFx0XHRpZCA9IF8udXRpbC5vYmpJZChvKTtcblx0XHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjbG9uZSA9IFtdO1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdFx0KC8qKiBAdHlwZSB7QXJyYXl9ICovKC8qKiBAdHlwZSB7YW55fSAqLyhvKSkpLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmVbaV0gPSBkZWVwQ2xvbmUodiwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAoY2xvbmUpO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiBvO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgdGhlIFByaXNtIGxhbmd1YWdlIG9mIHRoZSBnaXZlbiBlbGVtZW50IHNldCBieSBhIGBsYW5ndWFnZS14eHh4YCBvciBgbGFuZy14eHh4YCBjbGFzcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBubyBsYW5ndWFnZSBpcyBzZXQgZm9yIHRoZSBlbGVtZW50IG9yIHRoZSBlbGVtZW50IGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCwgYG5vbmVgIHdpbGwgYmUgcmV0dXJuZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG5cdFx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdFx0ICovXG5cdFx0XHRnZXRMYW5ndWFnZTogZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdFx0d2hpbGUgKGVsZW1lbnQgJiYgIWxhbmcudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIChlbGVtZW50LmNsYXNzTmFtZS5tYXRjaChsYW5nKSB8fCBbLCAnbm9uZSddKVsxXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAnbm9uZSc7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgdGhlIHNjcmlwdCBlbGVtZW50IHRoYXQgaXMgY3VycmVudGx5IGV4ZWN1dGluZy5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGlzIGRvZXMgX19ub3RfXyB3b3JrIGZvciBsaW5lIHNjcmlwdCBlbGVtZW50LlxuXHRcdFx0ICpcblx0XHRcdCAqIEByZXR1cm5zIHtIVE1MU2NyaXB0RWxlbWVudCB8IG51bGx9XG5cdFx0XHQgKi9cblx0XHRcdGN1cnJlbnRTY3JpcHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoJ2N1cnJlbnRTY3JpcHQnIGluIGRvY3VtZW50ICYmIDEgPCAyIC8qIGhhY2sgdG8gdHJpcCBUUycgZmxvdyBhbmFseXNpcyAqLykge1xuXHRcdFx0XHRcdHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSUUxMSB3b3JrYXJvdW5kXG5cdFx0XHRcdC8vIHdlJ2xsIGdldCB0aGUgc3JjIG9mIHRoZSBjdXJyZW50IHNjcmlwdCBieSBwYXJzaW5nIElFMTEncyBlcnJvciBzdGFjayB0cmFjZVxuXHRcdFx0XHQvLyB0aGlzIHdpbGwgbm90IHdvcmsgZm9yIGlubGluZSBzY3JpcHRzXG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Ly8gR2V0IGZpbGUgc3JjIHVybCBmcm9tIHN0YWNrLiBTcGVjaWZpY2FsbHkgd29ya3Mgd2l0aCB0aGUgZm9ybWF0IG9mIHN0YWNrIHRyYWNlcyBpbiBJRS5cblx0XHRcdFx0XHQvLyBBIHN0YWNrIHdpbGwgbG9vayBsaWtlIHRoaXM6XG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHQvLyBFcnJvclxuXHRcdFx0XHRcdC8vICAgIGF0IF8udXRpbC5jdXJyZW50U2NyaXB0IChodHRwOi8vbG9jYWxob3N0L2NvbXBvbmVudHMvcHJpc20tY29yZS5qczoxMTk6NSlcblx0XHRcdFx0XHQvLyAgICBhdCBHbG9iYWwgY29kZSAoaHR0cDovL2xvY2FsaG9zdC9jb21wb25lbnRzL3ByaXNtLWNvcmUuanM6NjA2OjEpXG5cblx0XHRcdFx0XHR2YXIgc3JjID0gKC9hdCBbXihcXHJcXG5dKlxcKCguKik6W146XSs6W146XStcXCkkL2kuZXhlYyhlcnIuc3RhY2spIHx8IFtdKVsxXTtcblx0XHRcdFx0XHRpZiAoc3JjKSB7XG5cdFx0XHRcdFx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgaW4gc2NyaXB0cykge1xuXHRcdFx0XHRcdFx0XHRpZiAoc2NyaXB0c1tpXS5zcmMgPT0gc3JjKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNjcmlwdHNbaV07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB3aGV0aGVyIGEgZ2l2ZW4gY2xhc3MgaXMgYWN0aXZlIGZvciBgZWxlbWVudGAuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIGNsYXNzIGNhbiBiZSBhY3RpdmF0ZWQgaWYgYGVsZW1lbnRgIG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIGhhcyB0aGUgZ2l2ZW4gY2xhc3MgYW5kIGl0IGNhbiBiZSBkZWFjdGl2YXRlZFxuXHRcdFx0ICogaWYgYGVsZW1lbnRgIG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIGhhcyB0aGUgbmVnYXRlZCB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBjbGFzcy4gVGhlIF9uZWdhdGVkIHZlcnNpb25fIG9mIHRoZVxuXHRcdFx0ICogZ2l2ZW4gY2xhc3MgaXMganVzdCB0aGUgZ2l2ZW4gY2xhc3Mgd2l0aCBhIGBuby1gIHByZWZpeC5cblx0XHRcdCAqXG5cdFx0XHQgKiBXaGV0aGVyIHRoZSBjbGFzcyBpcyBhY3RpdmUgaXMgZGV0ZXJtaW5lZCBieSB0aGUgY2xvc2VzdCBhbmNlc3RvciBvZiBgZWxlbWVudGAgKHdoZXJlIGBlbGVtZW50YCBpdHNlbGYgaXNcblx0XHRcdCAqIGNsb3Nlc3QgYW5jZXN0b3IpIHRoYXQgaGFzIHRoZSBnaXZlbiBjbGFzcyBvciB0aGUgbmVnYXRlZCB2ZXJzaW9uIG9mIGl0LiBJZiBuZWl0aGVyIGBlbGVtZW50YCBub3IgYW55IG9mIGl0c1xuXHRcdFx0ICogYW5jZXN0b3JzIGhhdmUgdGhlIGdpdmVuIGNsYXNzIG9yIHRoZSBuZWdhdGVkIHZlcnNpb24gb2YgaXQsIHRoZW4gdGhlIGRlZmF1bHQgYWN0aXZhdGlvbiB3aWxsIGJlIHJldHVybmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEluIHRoZSBwYXJhZG94aWNhbCBzaXR1YXRpb24gd2hlcmUgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgY29udGFpbnMgX19ib3RoX18gdGhlIGdpdmVuIGNsYXNzIGFuZCB0aGUgbmVnYXRlZFxuXHRcdFx0ICogdmVyc2lvbiBvZiBpdCwgdGhlIGNsYXNzIGlzIGNvbnNpZGVyZWQgYWN0aXZlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuXHRcdFx0ICogQHBhcmFtIHtib29sZWFufSBbZGVmYXVsdEFjdGl2YXRpb249ZmFsc2VdXG5cdFx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHRcdCAqL1xuXHRcdFx0aXNBY3RpdmU6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUsIGRlZmF1bHRBY3RpdmF0aW9uKSB7XG5cdFx0XHRcdHZhciBubyA9ICduby0nICsgY2xhc3NOYW1lO1xuXG5cdFx0XHRcdHdoaWxlIChlbGVtZW50KSB7XG5cdFx0XHRcdFx0dmFyIGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuXHRcdFx0XHRcdGlmIChjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjbGFzc0xpc3QuY29udGFpbnMobm8pKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICEhZGVmYXVsdEFjdGl2YXRpb247XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRoaXMgbmFtZXNwYWNlIGNvbnRhaW5zIGFsbCBjdXJyZW50bHkgbG9hZGVkIGxhbmd1YWdlcyBhbmQgdGhlIHNvbWUgaGVscGVyIGZ1bmN0aW9ucyB0byBjcmVhdGUgYW5kIG1vZGlmeSBsYW5ndWFnZXMuXG5cdFx0ICpcblx0XHQgKiBAbmFtZXNwYWNlXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGxhbmd1YWdlczoge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgZ3JhbW1hciBmb3IgcGxhaW4sIHVuZm9ybWF0dGVkIHRleHQuXG5cdFx0XHQgKi9cblx0XHRcdHBsYWluOiBwbGFpblRleHRHcmFtbWFyLFxuXHRcdFx0cGxhaW50ZXh0OiBwbGFpblRleHRHcmFtbWFyLFxuXHRcdFx0dGV4dDogcGxhaW5UZXh0R3JhbW1hcixcblx0XHRcdHR4dDogcGxhaW5UZXh0R3JhbW1hcixcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIHRoZSBsYW5ndWFnZSB3aXRoIHRoZSBnaXZlbiBpZCBhbmQgYXBwZW5kcyB0aGUgZ2l2ZW4gdG9rZW5zLlxuXHRcdFx0ICpcblx0XHRcdCAqIElmIGEgdG9rZW4gaW4gYHJlZGVmYCBhbHNvIGFwcGVhcnMgaW4gdGhlIGNvcGllZCBsYW5ndWFnZSwgdGhlbiB0aGUgZXhpc3RpbmcgdG9rZW4gaW4gdGhlIGNvcGllZCBsYW5ndWFnZVxuXHRcdFx0ICogd2lsbCBiZSBvdmVyd3JpdHRlbiBhdCBpdHMgb3JpZ2luYWwgcG9zaXRpb24uXG5cdFx0XHQgKlxuXHRcdFx0ICogIyMgQmVzdCBwcmFjdGljZXNcblx0XHRcdCAqXG5cdFx0XHQgKiBTaW5jZSB0aGUgcG9zaXRpb24gb2Ygb3ZlcndyaXRpbmcgdG9rZW5zICh0b2tlbiBpbiBgcmVkZWZgIHRoYXQgb3ZlcndyaXRlIHRva2VucyBpbiB0aGUgY29waWVkIGxhbmd1YWdlKVxuXHRcdFx0ICogZG9lc24ndCBtYXR0ZXIsIHRoZXkgY2FuIHRlY2huaWNhbGx5IGJlIGluIGFueSBvcmRlci4gSG93ZXZlciwgdGhpcyBjYW4gYmUgY29uZnVzaW5nIHRvIG90aGVycyB0aGF0IHRyeWluZyB0b1xuXHRcdFx0ICogdW5kZXJzdGFuZCB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBiZWNhdXNlLCBub3JtYWxseSwgdGhlIG9yZGVyIG9mIHRva2VucyBtYXR0ZXJzIGluIFByaXNtIGdyYW1tYXJzLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoZXJlZm9yZSwgaXQgaXMgZW5jb3VyYWdlZCB0byBvcmRlciBvdmVyd3JpdGluZyB0b2tlbnMgYWNjb3JkaW5nIHRvIHRoZSBwb3NpdGlvbnMgb2YgdGhlIG92ZXJ3cml0dGVuIHRva2Vucy5cblx0XHRcdCAqIEZ1cnRoZXJtb3JlLCBhbGwgbm9uLW92ZXJ3cml0aW5nIHRva2VucyBzaG91bGQgYmUgcGxhY2VkIGFmdGVyIHRoZSBvdmVyd3JpdGluZyBvbmVzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIGxhbmd1YWdlIHRvIGV4dGVuZC4gVGhpcyBoYXMgdG8gYmUgYSBrZXkgaW4gYFByaXNtLmxhbmd1YWdlc2AuXG5cdFx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IHJlZGVmIFRoZSBuZXcgdG9rZW5zIHRvIGFwcGVuZC5cblx0XHRcdCAqIEByZXR1cm5zIHtHcmFtbWFyfSBUaGUgbmV3IGxhbmd1YWdlIGNyZWF0ZWQuXG5cdFx0XHQgKiBAcHVibGljXG5cdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0ICogUHJpc20ubGFuZ3VhZ2VzWydjc3Mtd2l0aC1jb2xvcnMnXSA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NzcycsIHtcblx0XHRcdCAqICAgICAvLyBQcmlzbS5sYW5ndWFnZXMuY3NzIGFscmVhZHkgaGFzIGEgJ2NvbW1lbnQnIHRva2VuLCBzbyB0aGlzIHRva2VuIHdpbGwgb3ZlcndyaXRlIENTUycgJ2NvbW1lbnQnIHRva2VuXG5cdFx0XHQgKiAgICAgLy8gYXQgaXRzIG9yaWdpbmFsIHBvc2l0aW9uXG5cdFx0XHQgKiAgICAgJ2NvbW1lbnQnOiB7IC4uLiB9LFxuXHRcdFx0ICogICAgIC8vIENTUyBkb2Vzbid0IGhhdmUgYSAnY29sb3InIHRva2VuLCBzbyB0aGlzIHRva2VuIHdpbGwgYmUgYXBwZW5kZWRcblx0XHRcdCAqICAgICAnY29sb3InOiAvXFxiKD86cmVkfGdyZWVufGJsdWUpXFxiL1xuXHRcdFx0ICogfSk7XG5cdFx0XHQgKi9cblx0XHRcdGV4dGVuZDogZnVuY3Rpb24gKGlkLCByZWRlZikge1xuXHRcdFx0XHR2YXIgbGFuZyA9IF8udXRpbC5jbG9uZShfLmxhbmd1YWdlc1tpZF0pO1xuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiByZWRlZikge1xuXHRcdFx0XHRcdGxhbmdba2V5XSA9IHJlZGVmW2tleV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbGFuZztcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogSW5zZXJ0cyB0b2tlbnMgX2JlZm9yZV8gYW5vdGhlciB0b2tlbiBpbiBhIGxhbmd1YWdlIGRlZmluaXRpb24gb3IgYW55IG90aGVyIGdyYW1tYXIuXG5cdFx0XHQgKlxuXHRcdFx0ICogIyMgVXNhZ2Vcblx0XHRcdCAqXG5cdFx0XHQgKiBUaGlzIGhlbHBlciBtZXRob2QgbWFrZXMgaXQgZWFzeSB0byBtb2RpZnkgZXhpc3RpbmcgbGFuZ3VhZ2VzLiBGb3IgZXhhbXBsZSwgdGhlIENTUyBsYW5ndWFnZSBkZWZpbml0aW9uXG5cdFx0XHQgKiBub3Qgb25seSBkZWZpbmVzIENTUyBoaWdobGlnaHRpbmcgZm9yIENTUyBkb2N1bWVudHMsIGJ1dCBhbHNvIG5lZWRzIHRvIGRlZmluZSBoaWdobGlnaHRpbmcgZm9yIENTUyBlbWJlZGRlZFxuXHRcdFx0ICogaW4gSFRNTCB0aHJvdWdoIGA8c3R5bGU+YCBlbGVtZW50cy4gVG8gZG8gdGhpcywgaXQgbmVlZHMgdG8gbW9kaWZ5IGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYCBhbmQgYWRkIHRoZVxuXHRcdFx0ICogYXBwcm9wcmlhdGUgdG9rZW5zLiBIb3dldmVyLCBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAgaXMgYSByZWd1bGFyIEphdmFTY3JpcHQgb2JqZWN0IGxpdGVyYWwsIHNvIGlmIHlvdSBkb1xuXHRcdFx0ICogdGhpczpcblx0XHRcdCAqXG5cdFx0XHQgKiBgYGBqc1xuXHRcdFx0ICogUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC5zdHlsZSA9IHtcblx0XHRcdCAqICAgICAvLyB0b2tlblxuXHRcdFx0ICogfTtcblx0XHRcdCAqIGBgYFxuXHRcdFx0ICpcblx0XHRcdCAqIHRoZW4gdGhlIGBzdHlsZWAgdG9rZW4gd2lsbCBiZSBhZGRlZCAoYW5kIHByb2Nlc3NlZCkgYXQgdGhlIGVuZC4gYGluc2VydEJlZm9yZWAgYWxsb3dzIHlvdSB0byBpbnNlcnQgdG9rZW5zXG5cdFx0XHQgKiBiZWZvcmUgZXhpc3RpbmcgdG9rZW5zLiBGb3IgdGhlIENTUyBleGFtcGxlIGFib3ZlLCB5b3Ugd291bGQgdXNlIGl0IGxpa2UgdGhpczpcblx0XHRcdCAqXG5cdFx0XHQgKiBgYGBqc1xuXHRcdFx0ICogUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NkYXRhJywge1xuXHRcdFx0ICogICAgICdzdHlsZSc6IHtcblx0XHRcdCAqICAgICAgICAgLy8gdG9rZW5cblx0XHRcdCAqICAgICB9XG5cdFx0XHQgKiB9KTtcblx0XHRcdCAqIGBgYFxuXHRcdFx0ICpcblx0XHRcdCAqICMjIFNwZWNpYWwgY2FzZXNcblx0XHRcdCAqXG5cdFx0XHQgKiBJZiB0aGUgZ3JhbW1hcnMgb2YgYGluc2lkZWAgYW5kIGBpbnNlcnRgIGhhdmUgdG9rZW5zIHdpdGggdGhlIHNhbWUgbmFtZSwgdGhlIHRva2VucyBpbiBgaW5zaWRlYCdzIGdyYW1tYXJcblx0XHRcdCAqIHdpbGwgYmUgaWdub3JlZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGlzIGJlaGF2aW9yIGNhbiBiZSB1c2VkIHRvIGluc2VydCB0b2tlbnMgYWZ0ZXIgYGJlZm9yZWA6XG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjb21tZW50Jywge1xuXHRcdFx0ICogICAgICdjb21tZW50JzogUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC5jb21tZW50LFxuXHRcdFx0ICogICAgIC8vIHRva2VucyBhZnRlciAnY29tbWVudCdcblx0XHRcdCAqIH0pO1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogIyMgTGltaXRhdGlvbnNcblx0XHRcdCAqXG5cdFx0XHQgKiBUaGUgbWFpbiBwcm9ibGVtIGBpbnNlcnRCZWZvcmVgIGhhcyB0byBzb2x2ZSBpcyBpdGVyYXRpb24gb3JkZXIuIFNpbmNlIEVTMjAxNSwgdGhlIGl0ZXJhdGlvbiBvcmRlciBmb3Igb2JqZWN0XG5cdFx0XHQgKiBwcm9wZXJ0aWVzIGlzIGd1YXJhbnRlZWQgdG8gYmUgdGhlIGluc2VydGlvbiBvcmRlciAoZXhjZXB0IGZvciBpbnRlZ2VyIGtleXMpIGJ1dCBzb21lIGJyb3dzZXJzIGJlaGF2ZVxuXHRcdFx0ICogZGlmZmVyZW50bHkgd2hlbiBrZXlzIGFyZSBkZWxldGVkIGFuZCByZS1pbnNlcnRlZC4gU28gYGluc2VydEJlZm9yZWAgY2FuJ3QgYmUgaW1wbGVtZW50ZWQgYnkgdGVtcG9yYXJpbHlcblx0XHRcdCAqIGRlbGV0aW5nIHByb3BlcnRpZXMgd2hpY2ggaXMgbmVjZXNzYXJ5IHRvIGluc2VydCBhdCBhcmJpdHJhcnkgcG9zaXRpb25zLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRvIHNvbHZlIHRoaXMgcHJvYmxlbSwgYGluc2VydEJlZm9yZWAgZG9lc24ndCBhY3R1YWxseSBpbnNlcnQgdGhlIGdpdmVuIHRva2VucyBpbnRvIHRoZSB0YXJnZXQgb2JqZWN0LlxuXHRcdFx0ICogSW5zdGVhZCwgaXQgd2lsbCBjcmVhdGUgYSBuZXcgb2JqZWN0IGFuZCByZXBsYWNlIGFsbCByZWZlcmVuY2VzIHRvIHRoZSB0YXJnZXQgb2JqZWN0IHdpdGggdGhlIG5ldyBvbmUuIFRoaXNcblx0XHRcdCAqIGNhbiBiZSBkb25lIHdpdGhvdXQgdGVtcG9yYXJpbHkgZGVsZXRpbmcgcHJvcGVydGllcywgc28gdGhlIGl0ZXJhdGlvbiBvcmRlciBpcyB3ZWxsLWRlZmluZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogSG93ZXZlciwgb25seSByZWZlcmVuY2VzIHRoYXQgY2FuIGJlIHJlYWNoZWQgZnJvbSBgUHJpc20ubGFuZ3VhZ2VzYCBvciBgaW5zZXJ0YCB3aWxsIGJlIHJlcGxhY2VkLiBJLmUuIGlmXG5cdFx0XHQgKiB5b3UgaG9sZCB0aGUgdGFyZ2V0IG9iamVjdCBpbiBhIHZhcmlhYmxlLCB0aGVuIHRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGUgd2lsbCBub3QgY2hhbmdlLlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiB2YXIgb2xkTWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblx0XHRcdCAqIHZhciBuZXdNYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY29tbWVudCcsIHsgLi4uIH0pO1xuXHRcdFx0ICpcblx0XHRcdCAqIGFzc2VydChvbGRNYXJrdXAgIT09IFByaXNtLmxhbmd1YWdlcy5tYXJrdXApO1xuXHRcdFx0ICogYXNzZXJ0KG5ld01hcmt1cCA9PT0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCk7XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW5zaWRlIFRoZSBwcm9wZXJ0eSBvZiBgcm9vdGAgKGUuZy4gYSBsYW5ndWFnZSBpZCBpbiBgUHJpc20ubGFuZ3VhZ2VzYCkgdGhhdCBjb250YWlucyB0aGVcblx0XHRcdCAqIG9iamVjdCB0byBiZSBtb2RpZmllZC5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBiZWZvcmUgVGhlIGtleSB0byBpbnNlcnQgYmVmb3JlLlxuXHRcdFx0ICogQHBhcmFtIHtHcmFtbWFyfSBpbnNlcnQgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGtleS12YWx1ZSBwYWlycyB0byBiZSBpbnNlcnRlZC5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gW3Jvb3RdIFRoZSBvYmplY3QgY29udGFpbmluZyBgaW5zaWRlYCwgaS5lLiB0aGUgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlXG5cdFx0XHQgKiBvYmplY3QgdG8gYmUgbW9kaWZpZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogRGVmYXVsdHMgdG8gYFByaXNtLmxhbmd1YWdlc2AuXG5cdFx0XHQgKiBAcmV0dXJucyB7R3JhbW1hcn0gVGhlIG5ldyBncmFtbWFyIG9iamVjdC5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqL1xuXHRcdFx0aW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiAoaW5zaWRlLCBiZWZvcmUsIGluc2VydCwgcm9vdCkge1xuXHRcdFx0XHRyb290ID0gcm9vdCB8fCAvKiogQHR5cGUge2FueX0gKi8gKF8ubGFuZ3VhZ2VzKTtcblx0XHRcdFx0dmFyIGdyYW1tYXIgPSByb290W2luc2lkZV07XG5cdFx0XHRcdC8qKiBAdHlwZSB7R3JhbW1hcn0gKi9cblx0XHRcdFx0dmFyIHJldCA9IHt9O1xuXG5cdFx0XHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdFx0XHRpZiAoZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblxuXHRcdFx0XHRcdFx0aWYgKHRva2VuID09IGJlZm9yZSkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBuZXdUb2tlbiBpbiBpbnNlcnQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoaW5zZXJ0Lmhhc093blByb3BlcnR5KG5ld1Rva2VuKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0W25ld1Rva2VuXSA9IGluc2VydFtuZXdUb2tlbl07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIERvIG5vdCBpbnNlcnQgdG9rZW4gd2hpY2ggYWxzbyBvY2N1ciBpbiBpbnNlcnQuIFNlZSAjMTUyNVxuXHRcdFx0XHRcdFx0aWYgKCFpbnNlcnQuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRcdHJldFt0b2tlbl0gPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgb2xkID0gcm9vdFtpbnNpZGVdO1xuXHRcdFx0XHRyb290W2luc2lkZV0gPSByZXQ7XG5cblx0XHRcdFx0Ly8gVXBkYXRlIHJlZmVyZW5jZXMgaW4gb3RoZXIgbGFuZ3VhZ2UgZGVmaW5pdGlvbnNcblx0XHRcdFx0Xy5sYW5ndWFnZXMuREZTKF8ubGFuZ3VhZ2VzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gb2xkICYmIGtleSAhPSBpbnNpZGUpIHtcblx0XHRcdFx0XHRcdHRoaXNba2V5XSA9IHJldDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBUcmF2ZXJzZSBhIGxhbmd1YWdlIGRlZmluaXRpb24gd2l0aCBEZXB0aCBGaXJzdCBTZWFyY2hcblx0XHRcdERGUzogZnVuY3Rpb24gREZTKG8sIGNhbGxiYWNrLCB0eXBlLCB2aXNpdGVkKSB7XG5cdFx0XHRcdHZpc2l0ZWQgPSB2aXNpdGVkIHx8IHt9O1xuXG5cdFx0XHRcdHZhciBvYmpJZCA9IF8udXRpbC5vYmpJZDtcblxuXHRcdFx0XHRmb3IgKHZhciBpIGluIG8pIHtcblx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChvLCBpLCBvW2ldLCB0eXBlIHx8IGkpO1xuXG5cdFx0XHRcdFx0XHR2YXIgcHJvcGVydHkgPSBvW2ldO1xuXHRcdFx0XHRcdFx0dmFyIHByb3BlcnR5VHlwZSA9IF8udXRpbC50eXBlKHByb3BlcnR5KTtcblxuXHRcdFx0XHRcdFx0aWYgKHByb3BlcnR5VHlwZSA9PT0gJ09iamVjdCcgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRERlMocHJvcGVydHksIGNhbGxiYWNrLCBudWxsLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocHJvcGVydHlUeXBlID09PSAnQXJyYXknICYmICF2aXNpdGVkW29iaklkKHByb3BlcnR5KV0pIHtcblx0XHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgaSwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHBsdWdpbnM6IHt9LFxuXG5cdFx0LyoqXG5cdFx0ICogVGhpcyBpcyB0aGUgbW9zdCBoaWdoLWxldmVsIGZ1bmN0aW9uIGluIFByaXNt4oCZcyBBUEkuXG5cdFx0ICogSXQgZmV0Y2hlcyBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIGAubGFuZ3VhZ2UteHh4eGAgY2xhc3MgYW5kIHRoZW4gY2FsbHMge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IG9uXG5cdFx0ICogZWFjaCBvbmUgb2YgdGhlbS5cblx0XHQgKlxuXHRcdCAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byBgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGFzeW5jLCBjYWxsYmFjaylgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbYXN5bmM9ZmFsc2VdIFNhbWUgYXMgaW4ge0BsaW5rIFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyfS5cblx0XHQgKiBAcGFyYW0ge0hpZ2hsaWdodENhbGxiYWNrfSBbY2FsbGJhY2tdIFNhbWUgYXMgaW4ge0BsaW5rIFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyfS5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0QWxsOiBmdW5jdGlvbiAoYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0XHRfLmhpZ2hsaWdodEFsbFVuZGVyKGRvY3VtZW50LCBhc3luYywgY2FsbGJhY2spO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBGZXRjaGVzIGFsbCB0aGUgZGVzY2VuZGFudHMgb2YgYGNvbnRhaW5lcmAgdGhhdCBoYXZlIGEgYC5sYW5ndWFnZS14eHh4YCBjbGFzcyBhbmQgdGhlbiBjYWxsc1xuXHRcdCAqIHtAbGluayBQcmlzbS5oaWdobGlnaHRFbGVtZW50fSBvbiBlYWNoIG9uZSBvZiB0aGVtLlxuXHRcdCAqXG5cdFx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0XHQgKiAxLiBgYmVmb3JlLWhpZ2hsaWdodGFsbGBcblx0XHQgKiAyLiBgYmVmb3JlLWFsbC1lbGVtZW50cy1oaWdobGlnaHRgXG5cdFx0ICogMy4gQWxsIGhvb2tzIG9mIHtAbGluayBQcmlzbS5oaWdobGlnaHRFbGVtZW50fSBmb3IgZWFjaCBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtQYXJlbnROb2RlfSBjb250YWluZXIgVGhlIHJvb3QgZWxlbWVudCwgd2hvc2UgZGVzY2VuZGFudHMgdGhhdCBoYXZlIGEgYC5sYW5ndWFnZS14eHh4YCBjbGFzcyB3aWxsIGJlIGhpZ2hsaWdodGVkLlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FzeW5jPWZhbHNlXSBXaGV0aGVyIGVhY2ggZWxlbWVudCBpcyB0byBiZSBoaWdobGlnaHRlZCBhc3luY2hyb25vdXNseSB1c2luZyBXZWIgV29ya2Vycy5cblx0XHQgKiBAcGFyYW0ge0hpZ2hsaWdodENhbGxiYWNrfSBbY2FsbGJhY2tdIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZWFjaCBlbGVtZW50IGFmdGVyIGl0cyBoaWdobGlnaHRpbmcgaXMgZG9uZS5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0QWxsVW5kZXI6IGZ1bmN0aW9uIChjb250YWluZXIsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGVudiA9IHtcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrLFxuXHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lcixcblx0XHRcdFx0c2VsZWN0b3I6ICdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSwgW2NsYXNzKj1cImxhbmd1YWdlLVwiXSBjb2RlLCBjb2RlW2NsYXNzKj1cImxhbmctXCJdLCBbY2xhc3MqPVwibGFuZy1cIl0gY29kZSdcblx0XHRcdH07XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaGlnaGxpZ2h0YWxsJywgZW52KTtcblxuXHRcdFx0ZW52LmVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVudi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChlbnYuc2VsZWN0b3IpKTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1hbGwtZWxlbWVudHMtaGlnaGxpZ2h0JywgZW52KTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGVsZW1lbnQ7IChlbGVtZW50ID0gZW52LmVsZW1lbnRzW2krK10pOykge1xuXHRcdFx0XHRfLmhpZ2hsaWdodEVsZW1lbnQoZWxlbWVudCwgYXN5bmMgPT09IHRydWUsIGVudi5jYWxsYmFjayk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEhpZ2hsaWdodHMgdGhlIGNvZGUgaW5zaWRlIGEgc2luZ2xlIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHRcdCAqIDEuIGBiZWZvcmUtc2FuaXR5LWNoZWNrYFxuXHRcdCAqIDIuIGBiZWZvcmUtaGlnaGxpZ2h0YFxuXHRcdCAqIDMuIEFsbCBob29rcyBvZiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0fS4gVGhlc2UgaG9va3Mgd2lsbCBiZSBydW4gYnkgYW4gYXN5bmNocm9ub3VzIHdvcmtlciBpZiBgYXN5bmNgIGlzIGB0cnVlYC5cblx0XHQgKiA0LiBgYmVmb3JlLWluc2VydGBcblx0XHQgKiA1LiBgYWZ0ZXItaGlnaGxpZ2h0YFxuXHRcdCAqIDYuIGBjb21wbGV0ZWBcblx0XHQgKlxuXHRcdCAqIFNvbWUgdGhlIGFib3ZlIGhvb2tzIHdpbGwgYmUgc2tpcHBlZCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGNvbnRhaW4gYW55IHRleHQgb3IgdGhlcmUgaXMgbm8gZ3JhbW1hciBsb2FkZWQgZm9yXG5cdFx0ICogdGhlIGVsZW1lbnQncyBsYW5ndWFnZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBjb2RlLlxuXHRcdCAqIEl0IG11c3QgaGF2ZSBhIGNsYXNzIG9mIGBsYW5ndWFnZS14eHh4YCB0byBiZSBwcm9jZXNzZWQsIHdoZXJlIGB4eHh4YCBpcyBhIHZhbGlkIGxhbmd1YWdlIGlkZW50aWZpZXIuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbYXN5bmM9ZmFsc2VdIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgdG8gYmUgaGlnaGxpZ2h0ZWQgYXN5bmNocm9ub3VzbHkgdXNpbmcgV2ViIFdvcmtlcnNcblx0XHQgKiB0byBpbXByb3ZlIHBlcmZvcm1hbmNlIGFuZCBhdm9pZCBibG9ja2luZyB0aGUgVUkgd2hlbiBoaWdobGlnaHRpbmcgdmVyeSBsYXJnZSBjaHVua3Mgb2YgY29kZS4gVGhpcyBvcHRpb24gaXNcblx0XHQgKiBbZGlzYWJsZWQgYnkgZGVmYXVsdF0oaHR0cHM6Ly9wcmlzbWpzLmNvbS9mYXEuaHRtbCN3aHktaXMtYXN5bmNocm9ub3VzLWhpZ2hsaWdodGluZy1kaXNhYmxlZC1ieS1kZWZhdWx0KS5cblx0XHQgKlxuXHRcdCAqIE5vdGU6IEFsbCBsYW5ndWFnZSBkZWZpbml0aW9ucyByZXF1aXJlZCB0byBoaWdobGlnaHQgdGhlIGNvZGUgbXVzdCBiZSBpbmNsdWRlZCBpbiB0aGUgbWFpbiBgcHJpc20uanNgIGZpbGUgZm9yXG5cdFx0ICogYXN5bmNocm9ub3VzIGhpZ2hsaWdodGluZyB0byB3b3JrLiBZb3UgY2FuIGJ1aWxkIHlvdXIgb3duIGJ1bmRsZSBvbiB0aGVcblx0XHQgKiBbRG93bmxvYWQgcGFnZV0oaHR0cHM6Ly9wcmlzbWpzLmNvbS9kb3dubG9hZC5odG1sKS5cblx0XHQgKiBAcGFyYW0ge0hpZ2hsaWdodENhbGxiYWNrfSBbY2FsbGJhY2tdIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBkb25lLlxuXHRcdCAqIE1vc3RseSB1c2VmdWwgd2hlbiBgYXN5bmNgIGlzIGB0cnVlYCwgc2luY2UgaW4gdGhhdCBjYXNlLCB0aGUgaGlnaGxpZ2h0aW5nIGlzIGRvbmUgYXN5bmNocm9ub3VzbHkuXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodEVsZW1lbnQ6IGZ1bmN0aW9uIChlbGVtZW50LCBhc3luYywgY2FsbGJhY2spIHtcblx0XHRcdC8vIEZpbmQgbGFuZ3VhZ2Vcblx0XHRcdHZhciBsYW5ndWFnZSA9IF8udXRpbC5nZXRMYW5ndWFnZShlbGVtZW50KTtcblx0XHRcdHZhciBncmFtbWFyID0gXy5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXG5cdFx0XHQvLyBTZXQgbGFuZ3VhZ2Ugb24gdGhlIGVsZW1lbnQsIGlmIG5vdCBwcmVzZW50XG5cdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXG5cdFx0XHQvLyBTZXQgbGFuZ3VhZ2Ugb24gdGhlIHBhcmVudCwgZm9yIHN0eWxpbmdcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAncHJlJykge1xuXHRcdFx0XHRwYXJlbnQuY2xhc3NOYW1lID0gcGFyZW50LmNsYXNzTmFtZS5yZXBsYWNlKGxhbmcsICcnKS5yZXBsYWNlKC9cXHMrL2csICcgJykgKyAnIGxhbmd1YWdlLScgKyBsYW5ndWFnZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvZGUgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2UsXG5cdFx0XHRcdGdyYW1tYXI6IGdyYW1tYXIsXG5cdFx0XHRcdGNvZGU6IGNvZGVcblx0XHRcdH07XG5cblx0XHRcdGZ1bmN0aW9uIGluc2VydEhpZ2hsaWdodGVkQ29kZShoaWdobGlnaHRlZENvZGUpIHtcblx0XHRcdFx0ZW52LmhpZ2hsaWdodGVkQ29kZSA9IGhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWluc2VydCcsIGVudik7XG5cblx0XHRcdFx0ZW52LmVsZW1lbnQuaW5uZXJIVE1MID0gZW52LmhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItaGlnaGxpZ2h0JywgZW52KTtcblx0XHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtc2FuaXR5LWNoZWNrJywgZW52KTtcblxuXHRcdFx0Ly8gcGx1Z2lucyBtYXkgY2hhbmdlL2FkZCB0aGUgcGFyZW50L2VsZW1lbnRcblx0XHRcdHBhcmVudCA9IGVudi5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAncHJlJyAmJiAhcGFyZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuXHRcdFx0XHRwYXJlbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZW52LmNvZGUpIHtcblx0XHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHQnLCBlbnYpO1xuXG5cdFx0XHRpZiAoIWVudi5ncmFtbWFyKSB7XG5cdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLnV0aWwuZW5jb2RlKGVudi5jb2RlKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGFzeW5jICYmIF9zZWxmLldvcmtlcikge1xuXHRcdFx0XHR2YXIgd29ya2VyID0gbmV3IFdvcmtlcihfLmZpbGVuYW1lKTtcblxuXHRcdFx0XHR3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShldnQuZGF0YSk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0d29ya2VyLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRsYW5ndWFnZTogZW52Lmxhbmd1YWdlLFxuXHRcdFx0XHRcdGNvZGU6IGVudi5jb2RlLFxuXHRcdFx0XHRcdGltbWVkaWF0ZUNsb3NlOiB0cnVlXG5cdFx0XHRcdH0pKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLmhpZ2hsaWdodChlbnYuY29kZSwgZW52LmdyYW1tYXIsIGVudi5sYW5ndWFnZSkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBMb3ctbGV2ZWwgZnVuY3Rpb24sIG9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW914oCZcmUgZG9pbmcuIEl0IGFjY2VwdHMgYSBzdHJpbmcgb2YgdGV4dCBhcyBpbnB1dFxuXHRcdCAqIGFuZCB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMgdG8gdXNlLCBhbmQgcmV0dXJucyBhIHN0cmluZyB3aXRoIHRoZSBIVE1MIHByb2R1Y2VkLlxuXHRcdCAqXG5cdFx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0XHQgKiAxLiBgYmVmb3JlLXRva2VuaXplYFxuXHRcdCAqIDIuIGBhZnRlci10b2tlbml6ZWBcblx0XHQgKiAzLiBgd3JhcGA6IE9uIGVhY2gge0BsaW5rIFRva2VufS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IEEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG8gYmUgaGlnaGxpZ2h0ZWQuXG5cdFx0ICogQHBhcmFtIHtHcmFtbWFyfSBncmFtbWFyIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0b2tlbnMgdG8gdXNlLlxuXHRcdCAqXG5cdFx0ICogVXN1YWxseSBhIGxhbmd1YWdlIGRlZmluaXRpb24gbGlrZSBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSBuYW1lIG9mIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9uIHBhc3NlZCB0byBgZ3JhbW1hcmAuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIGhpZ2hsaWdodGVkIEhUTUwuXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogUHJpc20uaGlnaGxpZ2h0KCd2YXIgZm9vID0gdHJ1ZTsnLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCwgJ2phdmFzY3JpcHQnKTtcblx0XHQgKi9cblx0XHRoaWdobGlnaHQ6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyLCBsYW5ndWFnZSkge1xuXHRcdFx0dmFyIGVudiA9IHtcblx0XHRcdFx0Y29kZTogdGV4dCxcblx0XHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlXG5cdFx0XHR9O1xuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS10b2tlbml6ZScsIGVudik7XG5cdFx0XHRlbnYudG9rZW5zID0gXy50b2tlbml6ZShlbnYuY29kZSwgZW52LmdyYW1tYXIpO1xuXHRcdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLXRva2VuaXplJywgZW52KTtcblx0XHRcdHJldHVybiBUb2tlbi5zdHJpbmdpZnkoXy51dGlsLmVuY29kZShlbnYudG9rZW5zKSwgZW52Lmxhbmd1YWdlKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVGhpcyBpcyB0aGUgaGVhcnQgb2YgUHJpc20sIGFuZCB0aGUgbW9zdCBsb3ctbGV2ZWwgZnVuY3Rpb24geW91IGNhbiB1c2UuIEl0IGFjY2VwdHMgYSBzdHJpbmcgb2YgdGV4dCBhcyBpbnB1dFxuXHRcdCAqIGFuZCB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMgdG8gdXNlLCBhbmQgcmV0dXJucyBhbiBhcnJheSB3aXRoIHRoZSB0b2tlbml6ZWQgY29kZS5cblx0XHQgKlxuXHRcdCAqIFdoZW4gdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gaW5jbHVkZXMgbmVzdGVkIHRva2VucywgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCByZWN1cnNpdmVseSBvbiBlYWNoIG9mIHRoZXNlIHRva2Vucy5cblx0XHQgKlxuXHRcdCAqIFRoaXMgbWV0aG9kIGNvdWxkIGJlIHVzZWZ1bCBpbiBvdGhlciBjb250ZXh0cyBhcyB3ZWxsLCBhcyBhIHZlcnkgY3J1ZGUgcGFyc2VyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgQSBzdHJpbmcgd2l0aCB0aGUgY29kZSB0byBiZSBoaWdobGlnaHRlZC5cblx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGdyYW1tYXIgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRva2VucyB0byB1c2UuXG5cdFx0ICpcblx0XHQgKiBVc3VhbGx5IGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBsaWtlIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYC5cblx0XHQgKiBAcmV0dXJucyB7VG9rZW5TdHJlYW19IEFuIGFycmF5IG9mIHN0cmluZ3MgYW5kIHRva2VucywgYSB0b2tlbiBzdHJlYW0uXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogbGV0IGNvZGUgPSBgdmFyIGZvbyA9IDA7YDtcblx0XHQgKiBsZXQgdG9rZW5zID0gUHJpc20udG9rZW5pemUoY29kZSwgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQpO1xuXHRcdCAqIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcblx0XHQgKiAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgUHJpc20uVG9rZW4gJiYgdG9rZW4udHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHQgKiAgICAgICAgIGNvbnNvbGUubG9nKGBGb3VuZCBudW1lcmljIGxpdGVyYWw6ICR7dG9rZW4uY29udGVudH1gKTtcblx0XHQgKiAgICAgfVxuXHRcdCAqIH0pO1xuXHRcdCAqL1xuXHRcdHRva2VuaXplOiBmdW5jdGlvbiAodGV4dCwgZ3JhbW1hcikge1xuXHRcdFx0dmFyIHJlc3QgPSBncmFtbWFyLnJlc3Q7XG5cdFx0XHRpZiAocmVzdCkge1xuXHRcdFx0XHRmb3IgKHZhciB0b2tlbiBpbiByZXN0KSB7XG5cdFx0XHRcdFx0Z3JhbW1hclt0b2tlbl0gPSByZXN0W3Rva2VuXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRlbGV0ZSBncmFtbWFyLnJlc3Q7XG5cdFx0XHR9XG5cblx0XHRcdHZhciB0b2tlbkxpc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xuXHRcdFx0YWRkQWZ0ZXIodG9rZW5MaXN0LCB0b2tlbkxpc3QuaGVhZCwgdGV4dCk7XG5cblx0XHRcdG1hdGNoR3JhbW1hcih0ZXh0LCB0b2tlbkxpc3QsIGdyYW1tYXIsIHRva2VuTGlzdC5oZWFkLCAwKTtcblxuXHRcdFx0cmV0dXJuIHRvQXJyYXkodG9rZW5MaXN0KTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQG5hbWVzcGFjZVxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRob29rczoge1xuXHRcdFx0YWxsOiB7fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBBZGRzIHRoZSBnaXZlbiBjYWxsYmFjayB0byB0aGUgbGlzdCBvZiBjYWxsYmFja3MgZm9yIHRoZSBnaXZlbiBob29rLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoZSBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgaG9vayBpdCBpcyByZWdpc3RlcmVkIGZvciBpcyBydW4uXG5cdFx0XHQgKiBIb29rcyBhcmUgdXN1YWxseSBkaXJlY3RseSBydW4gYnkgYSBoaWdobGlnaHQgZnVuY3Rpb24gYnV0IHlvdSBjYW4gYWxzbyBydW4gaG9va3MgeW91cnNlbGYuXG5cdFx0XHQgKlxuXHRcdFx0ICogT25lIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbiBiZSByZWdpc3RlcmVkIHRvIG11bHRpcGxlIGhvb2tzIGFuZCB0aGUgc2FtZSBob29rIG11bHRpcGxlIHRpbWVzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rLlxuXHRcdFx0ICogQHBhcmFtIHtIb29rQ2FsbGJhY2t9IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBnaXZlbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG5cdFx0XHQgKiBAcHVibGljXG5cdFx0XHQgKi9cblx0XHRcdGFkZDogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG5cdFx0XHRcdHZhciBob29rcyA9IF8uaG9va3MuYWxsO1xuXG5cdFx0XHRcdGhvb2tzW25hbWVdID0gaG9va3NbbmFtZV0gfHwgW107XG5cblx0XHRcdFx0aG9va3NbbmFtZV0ucHVzaChjYWxsYmFjayk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJ1bnMgYSBob29rIGludm9raW5nIGFsbCByZWdpc3RlcmVkIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQ2FsbGJhY2tzIHdpbGwgYmUgaW52b2tlZCBzeW5jaHJvbm91c2x5IGFuZCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIHJlZ2lzdGVyZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2suXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IGVudiBUaGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIG9mIHRoZSBob29rIHBhc3NlZCB0byBhbGwgY2FsbGJhY2tzIHJlZ2lzdGVyZWQuXG5cdFx0XHQgKiBAcHVibGljXG5cdFx0XHQgKi9cblx0XHRcdHJ1bjogZnVuY3Rpb24gKG5hbWUsIGVudikge1xuXHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gXy5ob29rcy5hbGxbbmFtZV07XG5cblx0XHRcdFx0aWYgKCFjYWxsYmFja3MgfHwgIWNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgY2FsbGJhY2s7IChjYWxsYmFjayA9IGNhbGxiYWNrc1tpKytdKTspIHtcblx0XHRcdFx0XHRjYWxsYmFjayhlbnYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdFRva2VuOiBUb2tlblxuXHR9O1xuXHRfc2VsZi5QcmlzbSA9IF87XG5cblxuXHQvLyBUeXBlc2NyaXB0IG5vdGU6XG5cdC8vIFRoZSBmb2xsb3dpbmcgY2FuIGJlIHVzZWQgdG8gaW1wb3J0IHRoZSBUb2tlbiB0eXBlIGluIEpTRG9jOlxuXHQvL1xuXHQvLyAgIEB0eXBlZGVmIHtJbnN0YW5jZVR5cGU8aW1wb3J0KFwiLi9wcmlzbS1jb3JlXCIpW1wiVG9rZW5cIl0+fSBUb2tlblxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IHRva2VuLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBTZWUge0BsaW5rIFRva2VuI3R5cGUgdHlwZX1cblx0ICogQHBhcmFtIHtzdHJpbmcgfCBUb2tlblN0cmVhbX0gY29udGVudCBTZWUge0BsaW5rIFRva2VuI2NvbnRlbnQgY29udGVudH1cblx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFthbGlhc10gVGhlIGFsaWFzKGVzKSBvZiB0aGUgdG9rZW4uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWF0Y2hlZFN0cj1cIlwiXSBBIGNvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbS5cblx0ICogQGNsYXNzXG5cdCAqIEBnbG9iYWxcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0ZnVuY3Rpb24gVG9rZW4odHlwZSwgY29udGVudCwgYWxpYXMsIG1hdGNoZWRTdHIpIHtcblx0XHQvKipcblx0XHQgKiBUaGUgdHlwZSBvZiB0aGUgdG9rZW4uXG5cdFx0ICpcblx0XHQgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGtleSBvZiBhIHBhdHRlcm4gaW4gYSB7QGxpbmsgR3JhbW1hcn0uXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqIEBzZWUgR3JhbW1hclRva2VuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHN0cmluZ3Mgb3IgdG9rZW5zIGNvbnRhaW5lZCBieSB0aGlzIHRva2VuLlxuXHRcdCAqXG5cdFx0ICogVGhpcyB3aWxsIGJlIGEgdG9rZW4gc3RyZWFtIGlmIHRoZSBwYXR0ZXJuIG1hdGNoZWQgYWxzbyBkZWZpbmVkIGFuIGBpbnNpZGVgIGdyYW1tYXIuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7c3RyaW5nIHwgVG9rZW5TdHJlYW19XG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGFsaWFzKGVzKSBvZiB0aGUgdG9rZW4uXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7c3RyaW5nfHN0cmluZ1tdfVxuXHRcdCAqIEBzZWUgR3JhbW1hclRva2VuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMuYWxpYXMgPSBhbGlhcztcblx0XHQvLyBDb3B5IG9mIHRoZSBmdWxsIHN0cmluZyB0aGlzIHRva2VuIHdhcyBjcmVhdGVkIGZyb21cblx0XHR0aGlzLmxlbmd0aCA9IChtYXRjaGVkU3RyIHx8ICcnKS5sZW5ndGggfCAwO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgdG9rZW4gc3RyZWFtIGlzIGFuIGFycmF5IG9mIHN0cmluZ3MgYW5kIHtAbGluayBUb2tlbiBUb2tlbn0gb2JqZWN0cy5cblx0ICpcblx0ICogVG9rZW4gc3RyZWFtcyBoYXZlIHRvIGZ1bGZpbGwgYSBmZXcgcHJvcGVydGllcyB0aGF0IGFyZSBhc3N1bWVkIGJ5IG1vc3QgZnVuY3Rpb25zIChtb3N0bHkgaW50ZXJuYWwgb25lcykgdGhhdCBwcm9jZXNzXG5cdCAqIHRoZW0uXG5cdCAqXG5cdCAqIDEuIE5vIGFkamFjZW50IHN0cmluZ3MuXG5cdCAqIDIuIE5vIGVtcHR5IHN0cmluZ3MuXG5cdCAqXG5cdCAqICAgIFRoZSBvbmx5IGV4Y2VwdGlvbiBoZXJlIGlzIHRoZSB0b2tlbiBzdHJlYW0gdGhhdCBvbmx5IGNvbnRhaW5zIHRoZSBlbXB0eSBzdHJpbmcgYW5kIG5vdGhpbmcgZWxzZS5cblx0ICpcblx0ICogQHR5cGVkZWYge0FycmF5PHN0cmluZyB8IFRva2VuPn0gVG9rZW5TdHJlYW1cblx0ICogQGdsb2JhbFxuXHQgKiBAcHVibGljXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdG9rZW4gb3IgdG9rZW4gc3RyZWFtIHRvIGFuIEhUTUwgcmVwcmVzZW50YXRpb24uXG5cdCAqXG5cdCAqIFRoZSBmb2xsb3dpbmcgaG9va3Mgd2lsbCBiZSBydW46XG5cdCAqIDEuIGB3cmFwYDogT24gZWFjaCB7QGxpbmsgVG9rZW59LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IFRva2VuIHwgVG9rZW5TdHJlYW19IG8gVGhlIHRva2VuIG9yIHRva2VuIHN0cmVhbSB0byBiZSBjb252ZXJ0ZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbmFtZSBvZiBjdXJyZW50IGxhbmd1YWdlLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgSFRNTCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdG9rZW4gb3IgdG9rZW4gc3RyZWFtLlxuXHQgKiBAbWVtYmVyb2YgVG9rZW5cblx0ICogQHN0YXRpY1xuXHQgKi9cblx0VG9rZW4uc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KG8sIGxhbmd1YWdlKSB7XG5cdFx0aWYgKHR5cGVvZiBvID09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gbztcblx0XHR9XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobykpIHtcblx0XHRcdHZhciBzID0gJyc7XG5cdFx0XHRvLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0cyArPSBzdHJpbmdpZnkoZSwgbGFuZ3VhZ2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHR9XG5cblx0XHR2YXIgZW52ID0ge1xuXHRcdFx0dHlwZTogby50eXBlLFxuXHRcdFx0Y29udGVudDogc3RyaW5naWZ5KG8uY29udGVudCwgbGFuZ3VhZ2UpLFxuXHRcdFx0dGFnOiAnc3BhbicsXG5cdFx0XHRjbGFzc2VzOiBbJ3Rva2VuJywgby50eXBlXSxcblx0XHRcdGF0dHJpYnV0ZXM6IHt9LFxuXHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlXG5cdFx0fTtcblxuXHRcdHZhciBhbGlhc2VzID0gby5hbGlhcztcblx0XHRpZiAoYWxpYXNlcykge1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoYWxpYXNlcykpIHtcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZW52LmNsYXNzZXMsIGFsaWFzZXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW52LmNsYXNzZXMucHVzaChhbGlhc2VzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRfLmhvb2tzLnJ1bignd3JhcCcsIGVudik7XG5cblx0XHR2YXIgYXR0cmlidXRlcyA9ICcnO1xuXHRcdGZvciAodmFyIG5hbWUgaW4gZW52LmF0dHJpYnV0ZXMpIHtcblx0XHRcdGF0dHJpYnV0ZXMgKz0gJyAnICsgbmFtZSArICc9XCInICsgKGVudi5hdHRyaWJ1dGVzW25hbWVdIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykgKyAnXCInO1xuXHRcdH1cblxuXHRcdHJldHVybiAnPCcgKyBlbnYudGFnICsgJyBjbGFzcz1cIicgKyBlbnYuY2xhc3Nlcy5qb2luKCcgJykgKyAnXCInICsgYXR0cmlidXRlcyArICc+JyArIGVudi5jb250ZW50ICsgJzwvJyArIGVudi50YWcgKyAnPic7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UmVnRXhwfSBwYXR0ZXJuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwb3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICogQHBhcmFtIHtib29sZWFufSBsb29rYmVoaW5kXG5cdCAqIEByZXR1cm5zIHtSZWdFeHBFeGVjQXJyYXkgfCBudWxsfVxuXHQgKi9cblx0ZnVuY3Rpb24gbWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIHBvcywgdGV4dCwgbG9va2JlaGluZCkge1xuXHRcdHBhdHRlcm4ubGFzdEluZGV4ID0gcG9zO1xuXHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcblx0XHRpZiAobWF0Y2ggJiYgbG9va2JlaGluZCAmJiBtYXRjaFsxXSkge1xuXHRcdFx0Ly8gY2hhbmdlIHRoZSBtYXRjaCB0byByZW1vdmUgdGhlIHRleHQgbWF0Y2hlZCBieSB0aGUgUHJpc20gbG9va2JlaGluZCBncm91cFxuXHRcdFx0dmFyIGxvb2tiZWhpbmRMZW5ndGggPSBtYXRjaFsxXS5sZW5ndGg7XG5cdFx0XHRtYXRjaC5pbmRleCArPSBsb29rYmVoaW5kTGVuZ3RoO1xuXHRcdFx0bWF0Y2hbMF0gPSBtYXRjaFswXS5zbGljZShsb29rYmVoaW5kTGVuZ3RoKTtcblx0XHR9XG5cdFx0cmV0dXJuIG1hdGNoO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdDxzdHJpbmcgfCBUb2tlbj59IHRva2VuTGlzdFxuXHQgKiBAcGFyYW0ge2FueX0gZ3JhbW1hclxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPHN0cmluZyB8IFRva2VuPn0gc3RhcnROb2RlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFBvc1xuXHQgKiBAcGFyYW0ge1JlbWF0Y2hPcHRpb25zfSBbcmVtYXRjaF1cblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqIEBwcml2YXRlXG5cdCAqXG5cdCAqIEB0eXBlZGVmIFJlbWF0Y2hPcHRpb25zXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjYXVzZVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gcmVhY2hcblx0ICovXG5cdGZ1bmN0aW9uIG1hdGNoR3JhbW1hcih0ZXh0LCB0b2tlbkxpc3QsIGdyYW1tYXIsIHN0YXJ0Tm9kZSwgc3RhcnRQb3MsIHJlbWF0Y2gpIHtcblx0XHRmb3IgKHZhciB0b2tlbiBpbiBncmFtbWFyKSB7XG5cdFx0XHRpZiAoIWdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pIHx8ICFncmFtbWFyW3Rva2VuXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHBhdHRlcm5zID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0XHRwYXR0ZXJucyA9IEFycmF5LmlzQXJyYXkocGF0dGVybnMpID8gcGF0dGVybnMgOiBbcGF0dGVybnNdO1xuXG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHBhdHRlcm5zLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGlmIChyZW1hdGNoICYmIHJlbWF0Y2guY2F1c2UgPT0gdG9rZW4gKyAnLCcgKyBqKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHBhdHRlcm5PYmogPSBwYXR0ZXJuc1tqXTtcblx0XHRcdFx0dmFyIGluc2lkZSA9IHBhdHRlcm5PYmouaW5zaWRlO1xuXHRcdFx0XHR2YXIgbG9va2JlaGluZCA9ICEhcGF0dGVybk9iai5sb29rYmVoaW5kO1xuXHRcdFx0XHR2YXIgZ3JlZWR5ID0gISFwYXR0ZXJuT2JqLmdyZWVkeTtcblx0XHRcdFx0dmFyIGFsaWFzID0gcGF0dGVybk9iai5hbGlhcztcblxuXHRcdFx0XHRpZiAoZ3JlZWR5ICYmICFwYXR0ZXJuT2JqLnBhdHRlcm4uZ2xvYmFsKSB7XG5cdFx0XHRcdFx0Ly8gV2l0aG91dCB0aGUgZ2xvYmFsIGZsYWcsIGxhc3RJbmRleCB3b24ndCB3b3JrXG5cdFx0XHRcdFx0dmFyIGZsYWdzID0gcGF0dGVybk9iai5wYXR0ZXJuLnRvU3RyaW5nKCkubWF0Y2goL1tpbXN1eV0qJC8pWzBdO1xuXHRcdFx0XHRcdHBhdHRlcm5PYmoucGF0dGVybiA9IFJlZ0V4cChwYXR0ZXJuT2JqLnBhdHRlcm4uc291cmNlLCBmbGFncyArICdnJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiogQHR5cGUge1JlZ0V4cH0gKi9cblx0XHRcdFx0dmFyIHBhdHRlcm4gPSBwYXR0ZXJuT2JqLnBhdHRlcm4gfHwgcGF0dGVybk9iajtcblxuXHRcdFx0XHRmb3IgKCAvLyBpdGVyYXRlIHRoZSB0b2tlbiBsaXN0IGFuZCBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHRva2VuL3N0cmluZyBwb3NpdGlvblxuXHRcdFx0XHRcdHZhciBjdXJyZW50Tm9kZSA9IHN0YXJ0Tm9kZS5uZXh0LCBwb3MgPSBzdGFydFBvcztcblx0XHRcdFx0XHRjdXJyZW50Tm9kZSAhPT0gdG9rZW5MaXN0LnRhaWw7XG5cdFx0XHRcdFx0cG9zICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aCwgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG5cdFx0XHRcdCkge1xuXG5cdFx0XHRcdFx0aWYgKHJlbWF0Y2ggJiYgcG9zID49IHJlbWF0Y2gucmVhY2gpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBzdHIgPSBjdXJyZW50Tm9kZS52YWx1ZTtcblxuXHRcdFx0XHRcdGlmICh0b2tlbkxpc3QubGVuZ3RoID4gdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdC8vIFNvbWV0aGluZyB3ZW50IHRlcnJpYmx5IHdyb25nLCBBQk9SVCwgQUJPUlQhXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHN0ciBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgcmVtb3ZlQ291bnQgPSAxOyAvLyB0aGlzIGlzIHRoZSB0byBwYXJhbWV0ZXIgb2YgcmVtb3ZlQmV0d2VlblxuXHRcdFx0XHRcdHZhciBtYXRjaDtcblxuXHRcdFx0XHRcdGlmIChncmVlZHkpIHtcblx0XHRcdFx0XHRcdG1hdGNoID0gbWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIHBvcywgdGV4dCwgbG9va2JlaGluZCk7XG5cdFx0XHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2YXIgZnJvbSA9IG1hdGNoLmluZGV4O1xuXHRcdFx0XHRcdFx0dmFyIHRvID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR2YXIgcCA9IHBvcztcblxuXHRcdFx0XHRcdFx0Ly8gZmluZCB0aGUgbm9kZSB0aGF0IGNvbnRhaW5zIHRoZSBtYXRjaFxuXHRcdFx0XHRcdFx0cCArPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoZnJvbSA+PSBwKSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcblx0XHRcdFx0XHRcdFx0cCArPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBhZGp1c3QgcG9zIChhbmQgcClcblx0XHRcdFx0XHRcdHAgLT0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0cG9zID0gcDtcblxuXHRcdFx0XHRcdFx0Ly8gdGhlIGN1cnJlbnQgbm9kZSBpcyBhIFRva2VuLCB0aGVuIHRoZSBtYXRjaCBzdGFydHMgaW5zaWRlIGFub3RoZXIgVG9rZW4sIHdoaWNoIGlzIGludmFsaWRcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Tm9kZS52YWx1ZSBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBmaW5kIHRoZSBsYXN0IG5vZGUgd2hpY2ggaXMgYWZmZWN0ZWQgYnkgdGhpcyBtYXRjaFxuXHRcdFx0XHRcdFx0Zm9yIChcblx0XHRcdFx0XHRcdFx0dmFyIGsgPSBjdXJyZW50Tm9kZTtcblx0XHRcdFx0XHRcdFx0ayAhPT0gdG9rZW5MaXN0LnRhaWwgJiYgKHAgPCB0byB8fCB0eXBlb2Ygay52YWx1ZSA9PT0gJ3N0cmluZycpO1xuXHRcdFx0XHRcdFx0XHRrID0gay5uZXh0XG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0cmVtb3ZlQ291bnQrKztcblx0XHRcdFx0XHRcdFx0cCArPSBrLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJlbW92ZUNvdW50LS07XG5cblx0XHRcdFx0XHRcdC8vIHJlcGxhY2Ugd2l0aCB0aGUgbmV3IG1hdGNoXG5cdFx0XHRcdFx0XHRzdHIgPSB0ZXh0LnNsaWNlKHBvcywgcCk7XG5cdFx0XHRcdFx0XHRtYXRjaC5pbmRleCAtPSBwb3M7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG1hdGNoID0gbWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIDAsIHN0ciwgbG9va2JlaGluZCk7XG5cdFx0XHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblx0XHRcdFx0XHR2YXIgZnJvbSA9IG1hdGNoLmluZGV4O1xuXHRcdFx0XHRcdHZhciBtYXRjaFN0ciA9IG1hdGNoWzBdO1xuXHRcdFx0XHRcdHZhciBiZWZvcmUgPSBzdHIuc2xpY2UoMCwgZnJvbSk7XG5cdFx0XHRcdFx0dmFyIGFmdGVyID0gc3RyLnNsaWNlKGZyb20gKyBtYXRjaFN0ci5sZW5ndGgpO1xuXG5cdFx0XHRcdFx0dmFyIHJlYWNoID0gcG9zICsgc3RyLmxlbmd0aDtcblx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiByZWFjaCA+IHJlbWF0Y2gucmVhY2gpIHtcblx0XHRcdFx0XHRcdHJlbWF0Y2gucmVhY2ggPSByZWFjaDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgcmVtb3ZlRnJvbSA9IGN1cnJlbnROb2RlLnByZXY7XG5cblx0XHRcdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVGcm9tID0gYWRkQWZ0ZXIodG9rZW5MaXN0LCByZW1vdmVGcm9tLCBiZWZvcmUpO1xuXHRcdFx0XHRcdFx0cG9zICs9IGJlZm9yZS5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVtb3ZlUmFuZ2UodG9rZW5MaXN0LCByZW1vdmVGcm9tLCByZW1vdmVDb3VudCk7XG5cblx0XHRcdFx0XHR2YXIgd3JhcHBlZCA9IG5ldyBUb2tlbih0b2tlbiwgaW5zaWRlID8gXy50b2tlbml6ZShtYXRjaFN0ciwgaW5zaWRlKSA6IG1hdGNoU3RyLCBhbGlhcywgbWF0Y2hTdHIpO1xuXHRcdFx0XHRcdGN1cnJlbnROb2RlID0gYWRkQWZ0ZXIodG9rZW5MaXN0LCByZW1vdmVGcm9tLCB3cmFwcGVkKTtcblxuXHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0YWRkQWZ0ZXIodG9rZW5MaXN0LCBjdXJyZW50Tm9kZSwgYWZ0ZXIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChyZW1vdmVDb3VudCA+IDEpIHtcblx0XHRcdFx0XHRcdC8vIGF0IGxlYXN0IG9uZSBUb2tlbiBvYmplY3Qgd2FzIHJlbW92ZWQsIHNvIHdlIGhhdmUgdG8gZG8gc29tZSByZW1hdGNoaW5nXG5cdFx0XHRcdFx0XHQvLyB0aGlzIGNhbiBvbmx5IGhhcHBlbiBpZiB0aGUgY3VycmVudCBwYXR0ZXJuIGlzIGdyZWVkeVxuXG5cdFx0XHRcdFx0XHQvKiogQHR5cGUge1JlbWF0Y2hPcHRpb25zfSAqL1xuXHRcdFx0XHRcdFx0dmFyIG5lc3RlZFJlbWF0Y2ggPSB7XG5cdFx0XHRcdFx0XHRcdGNhdXNlOiB0b2tlbiArICcsJyArIGosXG5cdFx0XHRcdFx0XHRcdHJlYWNoOiByZWFjaFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdG1hdGNoR3JhbW1hcih0ZXh0LCB0b2tlbkxpc3QsIGdyYW1tYXIsIGN1cnJlbnROb2RlLnByZXYsIHBvcywgbmVzdGVkUmVtYXRjaCk7XG5cblx0XHRcdFx0XHRcdC8vIHRoZSByZWFjaCBtaWdodCBoYXZlIGJlZW4gZXh0ZW5kZWQgYmVjYXVzZSBvZiB0aGUgcmVtYXRjaGluZ1xuXHRcdFx0XHRcdFx0aWYgKHJlbWF0Y2ggJiYgbmVzdGVkUmVtYXRjaC5yZWFjaCA+IHJlbWF0Y2gucmVhY2gpIHtcblx0XHRcdFx0XHRcdFx0cmVtYXRjaC5yZWFjaCA9IG5lc3RlZFJlbWF0Y2gucmVhY2g7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIExpbmtlZExpc3ROb2RlXG5cdCAqIEBwcm9wZXJ0eSB7VH0gdmFsdWVcblx0ICogQHByb3BlcnR5IHtMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGx9IHByZXYgVGhlIHByZXZpb3VzIG5vZGUuXG5cdCAqIEBwcm9wZXJ0eSB7TGlua2VkTGlzdE5vZGU8VD4gfCBudWxsfSBuZXh0IFRoZSBuZXh0IG5vZGUuXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gTGlua2VkTGlzdCgpIHtcblx0XHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHRcdHZhciBoZWFkID0geyB2YWx1ZTogbnVsbCwgcHJldjogbnVsbCwgbmV4dDogbnVsbCB9O1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dmFyIHRhaWwgPSB7IHZhbHVlOiBudWxsLCBwcmV2OiBoZWFkLCBuZXh0OiBudWxsIH07XG5cdFx0aGVhZC5uZXh0ID0gdGFpbDtcblxuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dGhpcy5oZWFkID0gaGVhZDtcblx0XHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHRcdHRoaXMudGFpbCA9IHRhaWw7XG5cdFx0dGhpcy5sZW5ndGggPSAwO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgYSBuZXcgbm9kZSB3aXRoIHRoZSBnaXZlbiB2YWx1ZSB0byB0aGUgbGlzdC5cblx0ICpcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdE5vZGU8VD59IG5vZGVcblx0ICogQHBhcmFtIHtUfSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7TGlua2VkTGlzdE5vZGU8VD59IFRoZSBhZGRlZCBub2RlLlxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKi9cblx0ZnVuY3Rpb24gYWRkQWZ0ZXIobGlzdCwgbm9kZSwgdmFsdWUpIHtcblx0XHQvLyBhc3N1bWVzIHRoYXQgbm9kZSAhPSBsaXN0LnRhaWwgJiYgdmFsdWVzLmxlbmd0aCA+PSAwXG5cdFx0dmFyIG5leHQgPSBub2RlLm5leHQ7XG5cblx0XHR2YXIgbmV3Tm9kZSA9IHsgdmFsdWU6IHZhbHVlLCBwcmV2OiBub2RlLCBuZXh0OiBuZXh0IH07XG5cdFx0bm9kZS5uZXh0ID0gbmV3Tm9kZTtcblx0XHRuZXh0LnByZXYgPSBuZXdOb2RlO1xuXHRcdGxpc3QubGVuZ3RoKys7XG5cblx0XHRyZXR1cm4gbmV3Tm9kZTtcblx0fVxuXHQvKipcblx0ICogUmVtb3ZlcyBgY291bnRgIG5vZGVzIGFmdGVyIHRoZSBnaXZlbiBub2RlLiBUaGUgZ2l2ZW4gbm9kZSB3aWxsIG5vdCBiZSByZW1vdmVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3Q8VD59IGxpc3Rcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxUPn0gbm9kZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gY291bnRcblx0ICogQHRlbXBsYXRlIFRcblx0ICovXG5cdGZ1bmN0aW9uIHJlbW92ZVJhbmdlKGxpc3QsIG5vZGUsIGNvdW50KSB7XG5cdFx0dmFyIG5leHQgPSBub2RlLm5leHQ7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudCAmJiBuZXh0ICE9PSBsaXN0LnRhaWw7IGkrKykge1xuXHRcdFx0bmV4dCA9IG5leHQubmV4dDtcblx0XHR9XG5cdFx0bm9kZS5uZXh0ID0gbmV4dDtcblx0XHRuZXh0LnByZXYgPSBub2RlO1xuXHRcdGxpc3QubGVuZ3RoIC09IGk7XG5cdH1cblx0LyoqXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuXHQgKiBAcmV0dXJucyB7VFtdfVxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKi9cblx0ZnVuY3Rpb24gdG9BcnJheShsaXN0KSB7XG5cdFx0dmFyIGFycmF5ID0gW107XG5cdFx0dmFyIG5vZGUgPSBsaXN0LmhlYWQubmV4dDtcblx0XHR3aGlsZSAobm9kZSAhPT0gbGlzdC50YWlsKSB7XG5cdFx0XHRhcnJheS5wdXNoKG5vZGUudmFsdWUpO1xuXHRcdFx0bm9kZSA9IG5vZGUubmV4dDtcblx0XHR9XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cblxuXHRpZiAoIV9zZWxmLmRvY3VtZW50KSB7XG5cdFx0aWYgKCFfc2VsZi5hZGRFdmVudExpc3RlbmVyKSB7XG5cdFx0XHQvLyBpbiBOb2RlLmpzXG5cdFx0XHRyZXR1cm4gXztcblx0XHR9XG5cblx0XHRpZiAoIV8uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyKSB7XG5cdFx0XHQvLyBJbiB3b3JrZXJcblx0XHRcdF9zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdHZhciBtZXNzYWdlID0gSlNPTi5wYXJzZShldnQuZGF0YSk7XG5cdFx0XHRcdHZhciBsYW5nID0gbWVzc2FnZS5sYW5ndWFnZTtcblx0XHRcdFx0dmFyIGNvZGUgPSBtZXNzYWdlLmNvZGU7XG5cdFx0XHRcdHZhciBpbW1lZGlhdGVDbG9zZSA9IG1lc3NhZ2UuaW1tZWRpYXRlQ2xvc2U7XG5cblx0XHRcdFx0X3NlbGYucG9zdE1lc3NhZ2UoXy5oaWdobGlnaHQoY29kZSwgXy5sYW5ndWFnZXNbbGFuZ10sIGxhbmcpKTtcblx0XHRcdFx0aWYgKGltbWVkaWF0ZUNsb3NlKSB7XG5cdFx0XHRcdFx0X3NlbGYuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBfO1xuXHR9XG5cblx0Ly8gR2V0IGN1cnJlbnQgc2NyaXB0IGFuZCBoaWdobGlnaHRcblx0dmFyIHNjcmlwdCA9IF8udXRpbC5jdXJyZW50U2NyaXB0KCk7XG5cblx0aWYgKHNjcmlwdCkge1xuXHRcdF8uZmlsZW5hbWUgPSBzY3JpcHQuc3JjO1xuXG5cdFx0aWYgKHNjcmlwdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbWFudWFsJykpIHtcblx0XHRcdF8ubWFudWFsID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2soKSB7XG5cdFx0aWYgKCFfLm1hbnVhbCkge1xuXHRcdFx0Xy5oaWdobGlnaHRBbGwoKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIV8ubWFudWFsKSB7XG5cdFx0Ly8gSWYgdGhlIGRvY3VtZW50IHN0YXRlIGlzIFwibG9hZGluZ1wiLCB0aGVuIHdlJ2xsIHVzZSBET01Db250ZW50TG9hZGVkLlxuXHRcdC8vIElmIHRoZSBkb2N1bWVudCBzdGF0ZSBpcyBcImludGVyYWN0aXZlXCIgYW5kIHRoZSBwcmlzbS5qcyBzY3JpcHQgaXMgZGVmZXJyZWQsIHRoZW4gd2UnbGwgYWxzbyB1c2UgdGhlXG5cdFx0Ly8gRE9NQ29udGVudExvYWRlZCBldmVudCBiZWNhdXNlIHRoZXJlIG1pZ2h0IGJlIHNvbWUgcGx1Z2lucyBvciBsYW5ndWFnZXMgd2hpY2ggaGF2ZSBhbHNvIGJlZW4gZGVmZXJyZWQgYW5kIHRoZXlcblx0XHQvLyBtaWdodCB0YWtlIGxvbmdlciBvbmUgYW5pbWF0aW9uIGZyYW1lIHRvIGV4ZWN1dGUgd2hpY2ggY2FuIGNyZWF0ZSBhIHJhY2UgY29uZGl0aW9uIHdoZXJlIG9ubHkgc29tZSBwbHVnaW5zIGhhdmVcblx0XHQvLyBiZWVuIGxvYWRlZCB3aGVuIFByaXNtLmhpZ2hsaWdodEFsbCgpIGlzIGV4ZWN1dGVkLCBkZXBlbmRpbmcgb24gaG93IGZhc3QgcmVzb3VyY2VzIGFyZSBsb2FkZWQuXG5cdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9QcmlzbUpTL3ByaXNtL2lzc3Vlcy8yMTAyXG5cdFx0dmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuXHRcdGlmIChyZWFkeVN0YXRlID09PSAnbG9hZGluZycgfHwgcmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyAmJiBzY3JpcHQgJiYgc2NyaXB0LmRlZmVyKSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcblx0XHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2spO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrLCAxNik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIF87XG5cbn0oX3NlbGYpKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gUHJpc207XG59XG5cbi8vIGhhY2sgZm9yIGNvbXBvbmVudHMgdG8gd29yayBjb3JyZWN0bHkgaW4gbm9kZS5qc1xuaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdGdsb2JhbC5QcmlzbSA9IFByaXNtO1xufVxuXG4vLyBzb21lIGFkZGl0aW9uYWwgZG9jdW1lbnRhdGlvbi90eXBlc1xuXG4vKipcbiAqIFRoZSBleHBhbnNpb24gb2YgYSBzaW1wbGUgYFJlZ0V4cGAgbGl0ZXJhbCB0byBzdXBwb3J0IGFkZGl0aW9uYWwgcHJvcGVydGllcy5cbiAqXG4gKiBAdHlwZWRlZiBHcmFtbWFyVG9rZW5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBwYXR0ZXJuIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gb2YgdGhlIHRva2VuLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbbG9va2JlaGluZD1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBmaXJzdCBjYXB0dXJpbmcgZ3JvdXAgb2YgYHBhdHRlcm5gIHdpbGwgKGVmZmVjdGl2ZWx5KVxuICogYmVoYXZlIGFzIGEgbG9va2JlaGluZCBncm91cCBtZWFuaW5nIHRoYXQgdGhlIGNhcHR1cmVkIHRleHQgd2lsbCBub3QgYmUgcGFydCBvZiB0aGUgbWF0Y2hlZCB0ZXh0IG9mIHRoZSBuZXcgdG9rZW4uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtncmVlZHk9ZmFsc2VdIFdoZXRoZXIgdGhlIHRva2VuIGlzIGdyZWVkeS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfHN0cmluZ1tdfSBbYWxpYXNdIEFuIG9wdGlvbmFsIGFsaWFzIG9yIGxpc3Qgb2YgYWxpYXNlcy5cbiAqIEBwcm9wZXJ0eSB7R3JhbW1hcn0gW2luc2lkZV0gVGhlIG5lc3RlZCBncmFtbWFyIG9mIHRoaXMgdG9rZW4uXG4gKlxuICogVGhlIGBpbnNpZGVgIGdyYW1tYXIgd2lsbCBiZSB1c2VkIHRvIHRva2VuaXplIHRoZSB0ZXh0IHZhbHVlIG9mIGVhY2ggdG9rZW4gb2YgdGhpcyBraW5kLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbWFrZSBuZXN0ZWQgYW5kIGV2ZW4gcmVjdXJzaXZlIGxhbmd1YWdlIGRlZmluaXRpb25zLlxuICpcbiAqIE5vdGU6IFRoaXMgY2FuIGNhdXNlIGluZmluaXRlIHJlY3Vyc2lvbi4gQmUgY2FyZWZ1bCB3aGVuIHlvdSBlbWJlZCBkaWZmZXJlbnQgbGFuZ3VhZ2VzIG9yIGV2ZW4gdGhlIHNhbWUgbGFuZ3VhZ2UgaW50b1xuICogZWFjaCBhbm90aGVyLlxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYgR3JhbW1hclxuICogQHR5cGUge09iamVjdDxzdHJpbmcsIFJlZ0V4cCB8IEdyYW1tYXJUb2tlbiB8IEFycmF5PFJlZ0V4cCB8IEdyYW1tYXJUb2tlbj4+fVxuICogQHByb3BlcnR5IHtHcmFtbWFyfSBbcmVzdF0gQW4gb3B0aW9uYWwgZ3JhbW1hciBvYmplY3QgdGhhdCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoaXMgZ3JhbW1hci5cbiAqIEBnbG9iYWxcbiAqIEBwdWJsaWNcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBpbnZva2VkIGFmdGVyIGFuIGVsZW1lbnQgd2FzIHN1Y2Nlc3NmdWxseSBoaWdobGlnaHRlZC5cbiAqXG4gKiBAY2FsbGJhY2sgSGlnaGxpZ2h0Q2FsbGJhY2tcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCBzdWNjZXNzZnVsbHkgaGlnaGxpZ2h0ZWQuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBnbG9iYWxcbiAqIEBwdWJsaWNcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBIb29rQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gZW52IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgb2YgdGhlIGhvb2suXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBnbG9iYWxcbiAqIEBwdWJsaWNcbiAqL1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tbWFya3VwLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXAgPSB7XG5cdCdjb21tZW50Jzoge1xuXHRcdHBhdHRlcm46IC88IS0tKD86KD8hPCEtLSlbXFxzXFxTXSkqPy0tPi8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdwcm9sb2cnOiB7XG5cdFx0cGF0dGVybjogLzxcXD9bXFxzXFxTXSs/XFw/Pi8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdkb2N0eXBlJzoge1xuXHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULWRvY3R5cGVkZWNsXG5cdFx0cGF0dGVybjogLzwhRE9DVFlQRSg/OltePlwiJ1tcXF1dfFwiW15cIl0qXCJ8J1teJ10qJykrKD86XFxbKD86W148XCInXFxdXXxcIlteXCJdKlwifCdbXiddKid8PCg/ISEtLSl8PCEtLSg/OlteLV18LSg/IS0+KSkqLS0+KSpcXF1cXHMqKT8+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2ludGVybmFsLXN1YnNldCc6IHtcblx0XHRcdFx0cGF0dGVybjogLyheW15cXFtdKlxcWylbXFxzXFxTXSsoPz1cXF0+JCkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogbnVsbCAvLyBzZWUgYmVsb3dcblx0XHRcdH0sXG5cdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXCJbXlwiXSpcInwnW14nXSonLyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL148IXw+JHxbW1xcXV0vLFxuXHRcdFx0J2RvY3R5cGUtdGFnJzogL15ET0NUWVBFL2ksXG5cdFx0XHQnbmFtZSc6IC9bXlxcczw+J1wiXSsvXG5cdFx0fVxuXHR9LFxuXHQnY2RhdGEnOiB7XG5cdFx0cGF0dGVybjogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi9pLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQndGFnJzoge1xuXHRcdHBhdHRlcm46IC88XFwvPyg/IVxcZClbXlxccz5cXC89JDwlXSsoPzpcXHMoPzpcXHMqW15cXHM+XFwvPV0rKD86XFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpfCg/PVtcXHMvPl0pKSkrKT9cXHMqXFwvPz4vLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd0YWcnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9ePFxcLz9bXlxccz5cXC9dKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePFxcLz8vLFxuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnc3BlY2lhbC1hdHRyJzogW10sXG5cdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0cGF0dGVybjogLz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC9ePS8sXG5cdFx0XHRcdFx0XHRcdGFsaWFzOiAnYXR0ci1lcXVhbHMnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0L1wifCcvXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLz8+Lyxcblx0XHRcdCdhdHRyLW5hbWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9bXlxccz5cXC9dKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fSxcblx0J2VudGl0eSc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvJltcXGRhLXpdezEsOH07L2ksXG5cdFx0XHRhbGlhczogJ25hbWVkLWVudGl0eSdcblx0XHR9LFxuXHRcdC8mI3g/W1xcZGEtZl17MSw4fTsvaVxuXHRdXG59O1xuXG5QcmlzbS5sYW5ndWFnZXMubWFya3VwWyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbJ2VudGl0eSddID1cblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZW50aXR5J107XG5QcmlzbS5sYW5ndWFnZXMubWFya3VwWydkb2N0eXBlJ10uaW5zaWRlWydpbnRlcm5hbC1zdWJzZXQnXS5pbnNpZGUgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXG4vLyBQbHVnaW4gdG8gbWFrZSBlbnRpdHkgdGl0bGUgc2hvdyB0aGUgcmVhbCBlbnRpdHksIGlkZWEgYnkgUm9tYW4gS29tYXJvdlxuUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24gKGVudikge1xuXG5cdGlmIChlbnYudHlwZSA9PT0gJ2VudGl0eScpIHtcblx0XHRlbnYuYXR0cmlidXRlc1sndGl0bGUnXSA9IGVudi5jb250ZW50LnJlcGxhY2UoLyZhbXA7LywgJyYnKTtcblx0fVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZElubGluZWQnLCB7XG5cdC8qKlxuXHQgKiBBZGRzIGFuIGlubGluZWQgbGFuZ3VhZ2UgdG8gbWFya3VwLlxuXHQgKlxuXHQgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYDxzdHlsZT5gIHRhZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuXHQgKiBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyBUaGUgbGFuZ3VhZ2Uga2V5LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBhZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblx0ICovXG5cdHZhbHVlOiBmdW5jdGlvbiBhZGRJbmxpbmVkKHRhZ05hbWUsIGxhbmcpIHtcblx0XHR2YXIgaW5jbHVkZWRDZGF0YUluc2lkZSA9IHt9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC8oXjwhXFxbQ0RBVEFcXFspW1xcc1xcU10rPyg/PVxcXVxcXT4kKS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydjZGF0YSddID0gL148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2k7XG5cblx0XHR2YXIgaW5zaWRlID0ge1xuXHRcdFx0J2luY2x1ZGVkLWNkYXRhJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG5cdFx0XHRcdGluc2lkZTogaW5jbHVkZWRDZGF0YUluc2lkZVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0aW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblxuXHRcdHZhciBkZWYgPSB7fTtcblx0XHRkZWZbdGFnTmFtZV0gPSB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyg8X19bXj5dKj4pKD86PCFcXFtDREFUQVxcWyg/OlteXFxdXXxcXF0oPyFcXF0+KSkqXFxdXFxdPnwoPyE8IVxcW0NEQVRBXFxbKVtcXHNcXFNdKSo/KD89PFxcL19fPikvLnNvdXJjZS5yZXBsYWNlKC9fXy9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0YWdOYW1lOyB9KSwgJ2knKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IGluc2lkZVxuXHRcdH07XG5cblx0XHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCBkZWYpO1xuXHR9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZEF0dHJpYnV0ZScsIHtcblx0LyoqXG5cdCAqIEFkZHMgYW4gcGF0dGVybiB0byBoaWdobGlnaHQgbGFuZ3VhZ2VzIGVtYmVkZGVkIGluIEhUTUwgYXR0cmlidXRlcy5cblx0ICpcblx0ICogQW4gZXhhbXBsZSBvZiBhbiBpbmxpbmVkIGxhbmd1YWdlIGlzIENTUyB3aXRoIGBzdHlsZWAgYXR0cmlidXRlcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGF0dHJOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuXHQgKiBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyBUaGUgbGFuZ3VhZ2Uga2V5LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBhZGRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NzcycpO1xuXHQgKi9cblx0dmFsdWU6IGZ1bmN0aW9uIChhdHRyTmFtZSwgbGFuZykge1xuXHRcdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmluc2lkZVsnc3BlY2lhbC1hdHRyJ10ucHVzaCh7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoXG5cdFx0XHRcdC8oXnxbXCInXFxzXSkvLnNvdXJjZSArICcoPzonICsgYXR0ck5hbWUgKyAnKScgKyAvXFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpLy5zb3VyY2UsXG5cdFx0XHRcdCdpJ1xuXHRcdFx0KSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2F0dHItbmFtZSc6IC9eW15cXHM9XSsvLFxuXHRcdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvPVtcXHNcXFNdKy8sXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQndmFsdWUnOiB7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC8oXj1cXHMqKFtcIiddfCg/IVtcIiddKSkpXFxTW1xcc1xcU10qKD89XFwyJCkvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRhbGlhczogW2xhbmcsICdsYW5ndWFnZS0nICsgbGFuZ10sXG5cdFx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0cGF0dGVybjogL149Lyxcblx0XHRcdFx0XHRcdFx0XHRhbGlhczogJ2F0dHItZXF1YWxzJ1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQvXCJ8Jy9cblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy5odG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5tYXRobWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cblByaXNtLmxhbmd1YWdlcy54bWwgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5QcmlzbS5sYW5ndWFnZXMuc3NtbCA9IFByaXNtLmxhbmd1YWdlcy54bWw7XG5QcmlzbS5sYW5ndWFnZXMuYXRvbSA9IFByaXNtLmxhbmd1YWdlcy54bWw7XG5QcmlzbS5sYW5ndWFnZXMucnNzID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWNzcy5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIHN0cmluZyA9IC8oPzpcIig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXCJcXFxcXFxyXFxuXSkqXCJ8Jyg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteJ1xcXFxcXHJcXG5dKSonKS87XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNzcyA9IHtcblx0XHQnY29tbWVudCc6IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcblx0XHQnYXRydWxlJzoge1xuXHRcdFx0cGF0dGVybjogL0BbXFx3LV0oPzpbXjt7XFxzXXxcXHMrKD8hW1xcc3tdKSkqKD86O3woPz1cXHMqXFx7KSkvLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdydWxlJzogL15AW1xcdy1dKy8sXG5cdFx0XHRcdCdzZWxlY3Rvci1mdW5jdGlvbi1hcmd1bWVudCc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKFxcYnNlbGVjdG9yXFxzKlxcKFxccyooPyFbXFxzKV0pKSg/OlteKClcXHNdfFxccysoPyFbXFxzKV0pfFxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpKSsoPz1cXHMqXFwpKS8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRhbGlhczogJ3NlbGVjdG9yJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQna2V5d29yZCc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKF58W15cXHctXSkoPzphbmR8bm90fG9ubHl8b3IpKD8hW1xcdy1dKS8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFNlZSByZXN0IGJlbG93XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQndXJsJzoge1xuXHRcdFx0Ly8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCdcXFxcYnVybFxcXFwoKD86JyArIHN0cmluZy5zb3VyY2UgKyAnfCcgKyAvKD86W15cXFxcXFxyXFxuKClcIiddfFxcXFxbXFxzXFxTXSkqLy5zb3VyY2UgKyAnKVxcXFwpJywgJ2knKSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZnVuY3Rpb24nOiAvXnVybC9pLFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXlxcKHxcXCkkLyxcblx0XHRcdFx0J3N0cmluZyc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ14nICsgc3RyaW5nLnNvdXJjZSArICckJyksXG5cdFx0XHRcdFx0YWxpYXM6ICd1cmwnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdzZWxlY3Rvcic6IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnKF58W3t9XFxcXHNdKVtee31cXFxcc10oPzpbXnt9O1wiXFwnXFxcXHNdfFxcXFxzKyg/IVtcXFxcc3tdKXwnICsgc3RyaW5nLnNvdXJjZSArICcpKig/PVxcXFxzKlxcXFx7KScpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J3N0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IHN0cmluZyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0J3Byb3BlcnR5Jzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLVxcd1xceEEwLVxcdUZGRkZdKSg/IVxccylbLV9hLXpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbLVxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqOikvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdpbXBvcnRhbnQnOiAvIWltcG9ydGFudFxcYi9pLFxuXHRcdCdmdW5jdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXi1hLXowLTldKVstYS16MC05XSsoPz1cXCgpL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQncHVuY3R1YXRpb24nOiAvWygpe307OixdL1xuXHR9O1xuXG5cdFByaXNtLmxhbmd1YWdlcy5jc3NbJ2F0cnVsZSddLmluc2lkZS5yZXN0ID0gUHJpc20ubGFuZ3VhZ2VzLmNzcztcblxuXHR2YXIgbWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblx0aWYgKG1hcmt1cCkge1xuXHRcdG1hcmt1cC50YWcuYWRkSW5saW5lZCgnc3R5bGUnLCAnY3NzJyk7XG5cdFx0bWFya3VwLnRhZy5hZGRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NzcycpO1xuXHR9XG5cbn0oUHJpc20pKTtcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWNsaWtlLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblByaXNtLmxhbmd1YWdlcy5jbGlrZSA9IHtcblx0J2NvbW1lbnQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnY2xhc3MtbmFtZSc6IHtcblx0XHRwYXR0ZXJuOiAvKFxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8dHJhaXR8aW5zdGFuY2VvZnxuZXcpXFxzK3xcXGJjYXRjaFxccytcXCgpW1xcdy5cXFxcXSsvaSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1suXFxcXF0vXG5cdFx0fVxuXHR9LFxuXHQna2V5d29yZCc6IC9cXGIoPzppZnxlbHNlfHdoaWxlfGRvfGZvcnxyZXR1cm58aW58aW5zdGFuY2VvZnxmdW5jdGlvbnxuZXd8dHJ5fHRocm93fGNhdGNofGZpbmFsbHl8bnVsbHxicmVha3xjb250aW51ZSlcXGIvLFxuXHQnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG5cdCdmdW5jdGlvbic6IC9cXGJcXHcrKD89XFwoKS8sXG5cdCdudW1iZXInOiAvXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkKyg/OlxcLlxcZCopP3xcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9pLFxuXHQnb3BlcmF0b3InOiAvWzw+XT0/fFshPV09Pz0/fC0tP3xcXCtcXCs/fCYmP3xcXHxcXHw/fFs/Ki9+XiVdLyxcblx0J3B1bmN0dWF0aW9uJzogL1t7fVtcXF07KCksLjpdL1xufTtcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWphdmFzY3JpcHQuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0J2NsYXNzLW5hbWUnOiBbXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmNsaWtlWydjbGFzcy1uYW1lJ10sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKSg/IVxccylbXyRBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXC4oPzpwcm90b3R5cGV8Y29uc3RydWN0b3IpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQna2V5d29yZCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/Ol58XFx9KVxccyopY2F0Y2hcXGIvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteLl18XFwuXFwuXFwuXFxzKilcXGIoPzphc3xhc3NlcnQoPz1cXHMqXFx7KXxhc3luYyg/PVxccyooPzpmdW5jdGlvblxcYnxcXCh8WyRcXHdcXHhBMC1cXHVGRkZGXXwkKSl8YXdhaXR8YnJlYWt8Y2FzZXxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseSg/PVxccyooPzpcXHt8JCkpfGZvcnxmcm9tKD89XFxzKig/OlsnXCJdfCQpKXxmdW5jdGlvbnwoPzpnZXR8c2V0KSg/PVxccyooPzpbI1xcWyRcXHdcXHhBMC1cXHVGRkZGXXwkKSl8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdF0sXG5cdC8vIEFsbG93IGZvciBhbGwgbm9uLUFTQ0lJIGNoYXJhY3RlcnMgKFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMDA4NDQ0KVxuXHQnZnVuY3Rpb24nOiAvIz8oPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKig/OlxcLlxccyooPzphcHBseXxiaW5kfGNhbGwpXFxzKik/XFwoKS8sXG5cdCdudW1iZXInOiAvXFxiKD86KD86MFt4WF0oPzpbXFxkQS1GYS1mXSg/Ol9bXFxkQS1GYS1mXSk/KSt8MFtiQl0oPzpbMDFdKD86X1swMV0pPykrfDBbb09dKD86WzAtN10oPzpfWzAtN10pPykrKW4/fCg/OlxcZCg/Ol9cXGQpPykrbnxOYU58SW5maW5pdHkpXFxifCg/OlxcYig/OlxcZCg/Ol9cXGQpPykrXFwuPyg/OlxcZCg/Ol9cXGQpPykqfFxcQlxcLig/OlxcZCg/Ol9cXGQpPykrKSg/OltFZV1bKy1dPyg/OlxcZCg/Ol9cXGQpPykrKT8vLFxuXHQnb3BlcmF0b3InOiAvLS18XFwrXFwrfFxcKlxcKj0/fD0+fCYmPT98XFx8XFx8PT98WyE9XT09fDw8PT98Pj4+Pz0/fFstKyovJSZ8XiE9PD5dPT98XFwuezN9fFxcP1xcPz0/fFxcP1xcLj98W346XS9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsnY2xhc3MtbmFtZSddWzBdLnBhdHRlcm4gPSAvKFxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxuZXcpXFxzKylbXFx3LlxcXFxdKy87XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAna2V5d29yZCcsIHtcblx0J3JlZ2V4Jzoge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZHVwZS1jaGFyYWN0ZXJzLWNoYXJhY3Rlci1jbGFzc1xuXHRcdHBhdHRlcm46IC8oKD86XnxbXiRcXHdcXHhBMC1cXHVGRkZGLlwiJ1xcXSlcXHNdfFxcYig/OnJldHVybnx5aWVsZCkpXFxzKilcXC8oPzpcXFsoPzpbXlxcXVxcXFxcXHJcXG5dfFxcXFwuKSpcXF18XFxcXC58W14vXFxcXFxcW1xcclxcbl0pK1xcL1tkZ2lteXVzXXswLDd9KD89KD86XFxzfFxcL1xcKig/OlteKl18XFwqKD8hXFwvKSkqXFwqXFwvKSooPzokfFtcXHJcXG4sLjs6fSlcXF1dfFxcL1xcLykpLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdyZWdleC1zb3VyY2UnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9eKFxcLylbXFxzXFxTXSsoPz1cXC9bYS16XSokKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnbGFuZ3VhZ2UtcmVnZXgnLFxuXHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5yZWdleFxuXHRcdFx0fSxcblx0XHRcdCdyZWdleC1kZWxpbWl0ZXInOiAvXlxcL3xcXC8kLyxcblx0XHRcdCdyZWdleC1mbGFncyc6IC9eW2Etel0rJC8sXG5cdFx0fVxuXHR9LFxuXHQvLyBUaGlzIG11c3QgYmUgZGVjbGFyZWQgYmVmb3JlIGtleXdvcmQgYmVjYXVzZSB3ZSB1c2UgXCJmdW5jdGlvblwiIGluc2lkZSB0aGUgbG9vay1mb3J3YXJkXG5cdCdmdW5jdGlvbi12YXJpYWJsZSc6IHtcblx0XHRwYXR0ZXJuOiAvIz8oPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKls9Ol1cXHMqKD86YXN5bmNcXHMqKT8oPzpcXGJmdW5jdGlvblxcYnwoPzpcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKXwoPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKVxccyo9PikpLyxcblx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHR9LFxuXHQncGFyYW1ldGVyJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oZnVuY3Rpb24oPzpcXHMrKD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKik/XFxzKlxcKFxccyopKD8hXFxzKSg/OlteKClcXHNdfFxccysoPyFbXFxzKV0pfFxcKFteKCldKlxcKSkrKD89XFxzKlxcKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXiRcXHdcXHhBMC1cXHVGRkZGXSkoPyFcXHMpW18kYS16XFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKj0+KS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXFwoXFxzKikoPyFcXHMpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoW14oKV0qXFwpKSsoPz1cXHMqXFwpXFxzKj0+KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLygoPzpcXGJ8XFxzfF4pKD8hKD86YXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpKD8hWyRcXHdcXHhBMC1cXHVGRkZGXSkpKD86KD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKlxccyopXFwoXFxzKnxcXF1cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoW14oKV0qXFwpKSsoPz1cXHMqXFwpXFxzKlxceykvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9XG5cdF0sXG5cdCdjb25zdGFudCc6IC9cXGJbQS1aXSg/OltBLVpfXXxcXGR4PykqXFxiL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAnc3RyaW5nJywge1xuXHQnaGFzaGJhbmcnOiB7XG5cdFx0cGF0dGVybjogL14jIS4qLyxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0YWxpYXM6ICdjb21tZW50J1xuXHR9LFxuXHQndGVtcGxhdGUtc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC9gKD86XFxcXFtcXHNcXFNdfFxcJFxceyg/Oltee31dfFxceyg/Oltee31dfFxce1tefV0qXFx9KSpcXH0pK1xcfXwoPyFcXCRcXHspW15cXFxcYF0pKmAvLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd0ZW1wbGF0ZS1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogL15gfGAkLyxcblx0XHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0XHR9LFxuXHRcdFx0J2ludGVycG9sYXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKilcXCRcXHsoPzpbXnt9XXxcXHsoPzpbXnt9XXxcXHtbXn1dKlxcfSkqXFx9KStcXH0vLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbi1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9eXFwkXFx7fFxcfSQvLFxuXHRcdFx0XHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnc3RyaW5nJzogL1tcXHNcXFNdKy9cblx0XHR9XG5cdH1cbn0pO1xuXG5pZiAoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCkge1xuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzY3JpcHQnLCAnamF2YXNjcmlwdCcpO1xuXG5cdC8vIGFkZCBhdHRyaWJ1dGUgc3VwcG9ydCBmb3IgYWxsIERPTSBldmVudHMuXG5cdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cyNTdGFuZGFyZF9ldmVudHNcblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuYWRkQXR0cmlidXRlKFxuXHRcdC9vbig/OmFib3J0fGJsdXJ8Y2hhbmdlfGNsaWNrfGNvbXBvc2l0aW9uKD86ZW5kfHN0YXJ0fHVwZGF0ZSl8ZGJsY2xpY2t8ZXJyb3J8Zm9jdXMoPzppbnxvdXQpP3xrZXkoPzpkb3dufHVwKXxsb2FkfG1vdXNlKD86ZG93bnxlbnRlcnxsZWF2ZXxtb3ZlfG91dHxvdmVyfHVwKXxyZXNldHxyZXNpemV8c2Nyb2xsfHNlbGVjdHxzbG90Y2hhbmdlfHN1Ym1pdHx1bmxvYWR8d2hlZWwpLy5zb3VyY2UsXG5cdFx0J2phdmFzY3JpcHQnXG5cdCk7XG59XG5cblByaXNtLmxhbmd1YWdlcy5qcyA9IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0O1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tZmlsZS1oaWdobGlnaHQuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvbWF0Y2hlcyNQb2x5ZmlsbFxuXHRpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcblx0XHRFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXHR9XG5cblx0dmFyIExPQURJTkdfTUVTU0FHRSA9ICdMb2FkaW5n4oCmJztcblx0dmFyIEZBSUxVUkVfTUVTU0FHRSA9IGZ1bmN0aW9uIChzdGF0dXMsIG1lc3NhZ2UpIHtcblx0XHRyZXR1cm4gJ+KcliBFcnJvciAnICsgc3RhdHVzICsgJyB3aGlsZSBmZXRjaGluZyBmaWxlOiAnICsgbWVzc2FnZTtcblx0fTtcblx0dmFyIEZBSUxVUkVfRU1QVFlfTUVTU0FHRSA9ICfinJYgRXJyb3I6IEZpbGUgZG9lcyBub3QgZXhpc3Qgb3IgaXMgZW1wdHknO1xuXG5cdHZhciBFWFRFTlNJT05TID0ge1xuXHRcdCdqcyc6ICdqYXZhc2NyaXB0Jyxcblx0XHQncHknOiAncHl0aG9uJyxcblx0XHQncmInOiAncnVieScsXG5cdFx0J3BzMSc6ICdwb3dlcnNoZWxsJyxcblx0XHQncHNtMSc6ICdwb3dlcnNoZWxsJyxcblx0XHQnc2gnOiAnYmFzaCcsXG5cdFx0J2JhdCc6ICdiYXRjaCcsXG5cdFx0J2gnOiAnYycsXG5cdFx0J3RleCc6ICdsYXRleCdcblx0fTtcblxuXHR2YXIgU1RBVFVTX0FUVFIgPSAnZGF0YS1zcmMtc3RhdHVzJztcblx0dmFyIFNUQVRVU19MT0FESU5HID0gJ2xvYWRpbmcnO1xuXHR2YXIgU1RBVFVTX0xPQURFRCA9ICdsb2FkZWQnO1xuXHR2YXIgU1RBVFVTX0ZBSUxFRCA9ICdmYWlsZWQnO1xuXG5cdHZhciBTRUxFQ1RPUiA9ICdwcmVbZGF0YS1zcmNdOm5vdChbJyArIFNUQVRVU19BVFRSICsgJz1cIicgKyBTVEFUVVNfTE9BREVEICsgJ1wiXSknXG5cdFx0KyAnOm5vdChbJyArIFNUQVRVU19BVFRSICsgJz1cIicgKyBTVEFUVVNfTE9BRElORyArICdcIl0pJztcblxuXHR2YXIgbGFuZyA9IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pO1xuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBQcmlzbSBgbGFuZ3VhZ2UteHh4eGAgb3IgYGxhbmcteHh4eGAgY2xhc3MgdG8gdGhlIGdpdmVuIGxhbmd1YWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGZ1bmN0aW9uIHNldExhbmd1YWdlQ2xhc3MoZWxlbWVudCwgbGFuZ3VhZ2UpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWU7XG5cdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCk7XG5cdH1cblxuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLWhpZ2hsaWdodGFsbCcsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRlbnYuc2VsZWN0b3IgKz0gJywgJyArIFNFTEVDVE9SO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0dmFyIHByZSA9IC8qKiBAdHlwZSB7SFRNTFByZUVsZW1lbnR9ICovIChlbnYuZWxlbWVudCk7XG5cdFx0aWYgKHByZS5tYXRjaGVzKFNFTEVDVE9SKSkge1xuXHRcdFx0ZW52LmNvZGUgPSAnJzsgLy8gZmFzdC1wYXRoIHRoZSB3aG9sZSB0aGluZyBhbmQgZ28gdG8gY29tcGxldGVcblxuXHRcdFx0cHJlLnNldEF0dHJpYnV0ZShTVEFUVVNfQVRUUiwgU1RBVFVTX0xPQURJTkcpOyAvLyBtYXJrIGFzIGxvYWRpbmdcblxuXHRcdFx0Ly8gYWRkIGNvZGUgZWxlbWVudCB3aXRoIGxvYWRpbmcgbWVzc2FnZVxuXHRcdFx0dmFyIGNvZGUgPSBwcmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQ09ERScpKTtcblx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSBMT0FESU5HX01FU1NBR0U7XG5cblx0XHRcdHZhciBzcmMgPSBwcmUuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuXG5cdFx0XHR2YXIgbGFuZ3VhZ2UgPSBlbnYubGFuZ3VhZ2U7XG5cdFx0XHRpZiAobGFuZ3VhZ2UgPT09ICdub25lJykge1xuXHRcdFx0XHQvLyB0aGUgbGFuZ3VhZ2UgbWlnaHQgYmUgJ25vbmUnIGJlY2F1c2UgdGhlcmUgaXMgbm8gbGFuZ3VhZ2Ugc2V0O1xuXHRcdFx0XHQvLyBpbiB0aGlzIGNhc2UsIHdlIHdhbnQgdG8gdXNlIHRoZSBleHRlbnNpb24gYXMgdGhlIGxhbmd1YWdlXG5cdFx0XHRcdHZhciBleHRlbnNpb24gPSAoL1xcLihcXHcrKSQvLmV4ZWMoc3JjKSB8fCBbLCAnbm9uZSddKVsxXTtcblx0XHRcdFx0bGFuZ3VhZ2UgPSBFWFRFTlNJT05TW2V4dGVuc2lvbl0gfHwgZXh0ZW5zaW9uO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBzZXQgbGFuZ3VhZ2UgY2xhc3Nlc1xuXHRcdFx0c2V0TGFuZ3VhZ2VDbGFzcyhjb2RlLCBsYW5ndWFnZSk7XG5cdFx0XHRzZXRMYW5ndWFnZUNsYXNzKHByZSwgbGFuZ3VhZ2UpO1xuXG5cdFx0XHQvLyBwcmVsb2FkIHRoZSBsYW5ndWFnZVxuXHRcdFx0dmFyIGF1dG9sb2FkZXIgPSBQcmlzbS5wbHVnaW5zLmF1dG9sb2FkZXI7XG5cdFx0XHRpZiAoYXV0b2xvYWRlcikge1xuXHRcdFx0XHRhdXRvbG9hZGVyLmxvYWRMYW5ndWFnZXMobGFuZ3VhZ2UpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBsb2FkIGZpbGVcblx0XHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdHhoci5vcGVuKCdHRVQnLCBzcmMsIHRydWUpO1xuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcblx0XHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA8IDQwMCAmJiB4aHIucmVzcG9uc2VUZXh0KSB7XG5cdFx0XHRcdFx0XHQvLyBtYXJrIGFzIGxvYWRlZFxuXHRcdFx0XHRcdFx0cHJlLnNldEF0dHJpYnV0ZShTVEFUVVNfQVRUUiwgU1RBVFVTX0xPQURFRCk7XG5cblx0XHRcdFx0XHRcdC8vIGhpZ2hsaWdodCBjb2RlXG5cdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0XHRcdFByaXNtLmhpZ2hsaWdodEVsZW1lbnQoY29kZSk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gbWFyayBhcyBmYWlsZWRcblx0XHRcdFx0XHRcdHByZS5zZXRBdHRyaWJ1dGUoU1RBVFVTX0FUVFIsIFNUQVRVU19GQUlMRUQpO1xuXG5cdFx0XHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA+PSA0MDApIHtcblx0XHRcdFx0XHRcdFx0Y29kZS50ZXh0Q29udGVudCA9IEZBSUxVUkVfTUVTU0FHRSh4aHIuc3RhdHVzLCB4aHIuc3RhdHVzVGV4dCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0gRkFJTFVSRV9FTVBUWV9NRVNTQUdFO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHhoci5zZW5kKG51bGwpO1xuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ucGx1Z2lucy5maWxlSGlnaGxpZ2h0ID0ge1xuXHRcdC8qKlxuXHRcdCAqIEV4ZWN1dGVzIHRoZSBGaWxlIEhpZ2hsaWdodCBwbHVnaW4gZm9yIGFsbCBtYXRjaGluZyBgcHJlYCBlbGVtZW50cyB1bmRlciB0aGUgZ2l2ZW4gY29udGFpbmVyLlxuXHRcdCAqXG5cdFx0ICogTm90ZTogRWxlbWVudHMgd2hpY2ggYXJlIGFscmVhZHkgbG9hZGVkIG9yIGN1cnJlbnRseSBsb2FkaW5nIHdpbGwgbm90IGJlIHRvdWNoZWQgYnkgdGhpcyBtZXRob2QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1BhcmVudE5vZGV9IFtjb250YWluZXI9ZG9jdW1lbnRdXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0OiBmdW5jdGlvbiBoaWdobGlnaHQoY29udGFpbmVyKSB7XG5cdFx0XHR2YXIgZWxlbWVudHMgPSAoY29udGFpbmVyIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SKTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGVsZW1lbnQ7IChlbGVtZW50ID0gZWxlbWVudHNbaSsrXSk7KSB7XG5cdFx0XHRcdFByaXNtLmhpZ2hsaWdodEVsZW1lbnQoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBsb2dnZWQgPSBmYWxzZTtcblx0LyoqIEBkZXByZWNhdGVkIFVzZSBgUHJpc20ucGx1Z2lucy5maWxlSGlnaGxpZ2h0LmhpZ2hsaWdodGAgaW5zdGVhZC4gKi9cblx0UHJpc20uZmlsZUhpZ2hsaWdodCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIWxvZ2dlZCkge1xuXHRcdFx0Y29uc29sZS53YXJuKCdQcmlzbS5maWxlSGlnaGxpZ2h0IGlzIGRlcHJlY2F0ZWQuIFVzZSBgUHJpc20ucGx1Z2lucy5maWxlSGlnaGxpZ2h0LmhpZ2hsaWdodGAgaW5zdGVhZC4nKTtcblx0XHRcdGxvZ2dlZCA9IHRydWU7XG5cdFx0fVxuXHRcdFByaXNtLnBsdWdpbnMuZmlsZUhpZ2hsaWdodC5oaWdobGlnaHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0fTtcblxufSgpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=