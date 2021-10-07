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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  font-family: Monaco, monospace;\n}\n\nbody {\n  background-color: #222222;\n  font-size: 14px;\n}\n\ninput[type=search]::-webkit-search-cancel-button {\n  display: none;\n}\n\ninput[type=search]::-ms-clear {\n  display: none;\n}\n\n.button-regular {\n  cursor: pointer;\n  padding: 5px;\n  font-size: 11px;\n  background-color: #FF2277;\n  color: #FDFFFC;\n  margin: 10px;\n  position: absolute;\n  color: #FDFFFC;\n  border: none;\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n  font-family: Monaco, monospace;\n}\n\n.page-404 {\n  text-align: center;\n  padding: 10%;\n}\n\n.page-404 h1 {\n  text-shadow: greenyellow -1px 0px 0px, cyan 0.5px -1px 0px, red 1.5px 1px 0px;\n}\n\n.page-404 img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 100%;\n}\n\n.page-404 img:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n          filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n}\n\n.page-404 h2:hover {\n  -webkit-filter: drop-shadow(greenyellow -1px 0px 0px) drop-shadow(cyan 0.5px -1px 0px) drop-shadow(red 1.5px 1px 0px);\n          filter: drop-shadow(greenyellow -1px 0px 0px) drop-shadow(cyan 0.5px -1px 0px) drop-shadow(red 1.5px 1px 0px);\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.shadowed:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: #222222 1px 1px 10px;\n          box-shadow: #222222 1px 1px 10px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #222222;\n  color: #FDFFFC;\n  font-family: Monaco, monospace;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n}\n\na {\n  color: white;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  cursor: pointer;\n}\n\na:hover {\n  text-shadow: 0 0 5px #FDFFFC;\n}\n\ncode {\n  background-color: #393E41;\n  padding: 3px;\n  border-radius: 5px;\n}\n\n.header {\n  font-family: Monaco, monospace;\n  background-color: #393E41;\n  width: 100%;\n  height: 75px;\n}\n\n.header ::slotted {\n  float: left;\n}\n\n.header img {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  height: 65px;\n  margin: 5px;\n}\n\n.header img:hover {\n  -webkit-transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n          transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n  -webkit-filter: drop-shadow(greenyellow -2px 0px 0px) drop-shadow(cyan 1.5px -2px 0px) drop-shadow(red 2.5px 1.5px 0px);\n          filter: drop-shadow(greenyellow -2px 0px 0px) drop-shadow(cyan 1.5px -2px 0px) drop-shadow(red 2.5px 1.5px 0px);\n}\n\n.header h1 {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n\n.header h1:hover {\n  -webkit-filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n          filter: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\n  -webkit-transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n          transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n}\n\n.anniversary {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #FF2277), color-stop(100%, aqua));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #FF2277 0%, aqua 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #FF2277 0%, aqua 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffff\", endColorstr=\"#ff00ff\",GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.phoenix {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #C52437), color-stop(100%, #F7E27C));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.vhs-color {\n  text-shadow: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3.5px 0px;\n}\n\n.tertiary-text-color {\n  color: #FF2277;\n}\n\n.main-gradient-text {\n  /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #C52437), color-stop(100%, #F7E27C));\n  /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.main-body {\n  top: 75px;\n  height: -webkit-calc(100% - 75px);\n  height: calc(100% - 75px);\n}\n\n.popup {\n  display: block;\n  position: absolute;\n  z-index: 101;\n  border: none;\n  top: 75px;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  text-align: center;\n}\n\n.popup-button {\n  display: block;\n  position: absolute;\n  z-index: 101;\n  border: none;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  background: black;\n  background: transparent\\9 ;\n  background: rgba(0, 0, 0, 0.8);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#22000000,endColorstr=#22000000);\n  zoom: 1;\n  width: 100vw;\n}\n\n.popup-container {\n  z-index: 110;\n  display: block;\n  position: absolute;\n  width: 100vw;\n  text-align: center;\n  padding: 50px 0px;\n  pointer-events: none;\n}\n\n.popup-div {\n  display: block;\n  font-size: larger;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 500px;\n  -webkit-box-shadow: 10px 10px 0px #FF2277;\n          box-shadow: 10px 10px 0px #FF2277;\n  color: #FDFFFC;\n  background-color: #222222;\n  padding: 20px 50px;\n  pointer-events: all;\n}\n\n.popup h1 {\n  text-align: center;\n}\n\n.popup code {\n  border-radius: 0;\n  background-color: #FF2277;\n  -webkit-box-shadow: inset 0 0 10px #393E41;\n  box-shadow: inset 0 0 10px #393E41;\n}\n\n.popup > div small {\n  text-align: center;\n  display: block;\n  color: #FF2277;\n  margin-top: 20px;\n}\n\n.share-button-div {\n  text-align: center;\n}\n\n.share-button-div > * {\n  margin: 5px;\n  -webkit-transition: ease-in 0.3s;\n  transition: ease-in 0.3s;\n}\n\n.share-button-div > *:hover .share-button-icon {\n  -webkit-box-shadow: #FF2277 3px 2px;\n          box-shadow: #FF2277 3px 2px;\n}\n\n.share-button-icon {\n  border-radius: 1000px;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.share-count-wrapper > * {\n  margin-left: -20px;\n  margin-top: -5px;\n  padding: 3px 6px;\n  background-color: #393E41;\n  color: #FDFFFC;\n  border-radius: 8px;\n}\n\n.share-link-copy {\n  padding: 7.5px 10px;\n  padding-top: 7;\n  padding-bottom: 8;\n  background-color: #FF2277;\n  color: #FDFFFC;\n  border: none;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.share-link {\n  text-align: center;\n  width: 320px;\n  padding: 7.5px;\n  text-overflow: ellipsis;\n  border: none;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.navigator {\n  background-color: #FF2277;\n  height: 35px;\n  top: 75px;\n  width: 100%;\n  margin: 0;\n}\n\n.navigator img {\n  display: block;\n  height: 25px;\n  margin: 5px;\n  right: 5px;\n  pointer-events: none;\n  position: absolute;\n}\n\n.navigator input {\n  -webkit-box-shadow: inset 0 0 10px #393E41;\n  box-shadow: inset 0 0 10px #393E41;\n  font-size: 15px;\n  background: #FF2277;\n  border: none;\n  color: #FDFFFC;\n  width: -webkit-calc(100% - 45px);\n  width: calc(100% - 45px);\n  height: 100%;\n  padding: 0 10px;\n  padding-right: 35px;\n}\n\n.navigator input::-webkit-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input::-moz-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input:-ms-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator input::placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41;\n}\n\n.navigator button {\n  -webkit-transition: ease-in 0.3s;\n  transition: ease-in 0.3s;\n  color: #FDFFFC;\n  display: block;\n  position: absolute;\n  height: 30px;\n  background-color: #222222;\n  margin: 1.25px;\n  right: 45px;\n  border: none;\n  padding: 8px 8px;\n  -webkit-box-shadow: #393E41 5px 2.5px;\n          box-shadow: #393E41 5px 2.5px;\n}\n\n.navigator button:hover {\n  -webkit-box-shadow: #393E41 7.5px 2.5px;\n          box-shadow: #393E41 7.5px 2.5px;\n}\n\n.navigator button input {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  border: none;\n  color: #FDFFFC;\n  width: 15px;\n  height: 15px;\n  float: left;\n}\n\n.navigator button label {\n  margin-top: 0px;\n  margin-left: 8px;\n  float: right;\n}\n\n.project-list {\n  margin: 0;\n  height: -webkit-calc(100vh - 35px - 75px - 70px);\n  height: calc(100vh - 35px - 75px - 70px);\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.link-disabled {\n  display: none;\n}\n\n.project-thumbnail {\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n          box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n  height: 250px;\n  width: 250px;\n  display: inline-table;\n  text-align: right;\n  position: relative;\n  padding: 0;\n  margin: 30px;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.project-thumbnail:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n          box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n  text-shadow: none;\n}\n\n.project-thumbnail:last-of-type {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  margin-bottom: 50px;\n}\n\n.project-thumbnail div {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  text-align: center;\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.project-thumbnail div * {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  padding: 0px 20px;\n}\n\n.project-thumbnail div p {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.project-thumbnail small {\n  text-align: right;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  display: block;\n  position: absolute;\n  margin: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  right: 0;\n  bottom: 0;\n}\n\n.post-thumbnail {\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n          box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n  height: 250px;\n  width: 250px;\n  display: inline-table;\n  text-align: right;\n  position: relative;\n  padding: 0;\n  margin: 30px;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n}\n\n.post-thumbnail:hover {\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  -webkit-box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n          box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n  text-shadow: none;\n}\n\n.post-thumbnail:last-of-type {\n  margin-bottom: 50px;\n}\n\n.post-thumbnail div {\n  text-align: center;\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.post-thumbnail div * {\n  padding: 0px 20px;\n}\n\n.post-thumbnail div p {\n  margin-top: 10px;\n}\n\n.post-thumbnail small {\n  text-align: right;\n  -webkit-transition: ease-in 0.25s;\n  transition: ease-in 0.25s;\n  display: block;\n  position: absolute;\n  margin: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  right: 0;\n  bottom: 0;\n}\n\n.project-page {\n  margin: 0;\n  padding: 0;\n  height: -webkit-calc(100vh - 75px - 70px);\n  height: calc(100vh - 75px - 70px);\n  width: 100%;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.close-icon {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  margin: 5px;\n  position: absolute;\n  float: right;\n  z-index: 100;\n  right: 35px;\n  margin-top: 15px;\n  -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n  filter: drop-shadow(6px 5px 5px #FF2277);\n  cursor: pointer;\n}\n\n.close-icon:hover {\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.share-icon {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  margin: 5px;\n  position: absolute;\n  float: right;\n  right: 90px;\n  z-index: 100;\n  margin-top: 15px;\n  -webkit-filter: drop-shadow(6px 5px 2px #FF2277);\n  filter: drop-shadow(6px 5px 2px #FF2277);\n  cursor: pointer;\n}\n\n.share-icon:hover {\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n}\n\n.about-h1 {\n  margin: 10px;\n  margin-bottom: 20px;\n}\n\n.about-h2 {\n  margin: 10px;\n  margin-bottom: -5px;\n  text-align: left;\n}\n\n.about-p {\n  text-align: left;\n  margin-bottom: -7.5px;\n  padding-bottom: 7.5px;\n  text-align: justify;\n}\n\n.about-me {\n  margin-top: 10px;\n  background-color: #FF2277;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n  padding: 15px;\n  margin-bottom: 40px;\n}\n\n.about-me img {\n  -webkit-box-shadow: #222222 1px 1px 10px;\n          box-shadow: #222222 1px 1px 10px;\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n}\n\n.about-me img:hover {\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n}\n\n.contact-container {\n  width: -webkit-calc(100vw - 100px);\n  width: calc(100vw - 100px);\n  padding: 0 50px;\n  padding-top: 50px;\n}\n\n.contact-left {\n  float: left;\n  width: 40%;\n  text-align: center;\n}\n\n.contact-right h1 {\n  margin-bottom: 20px;\n}\n\n.contact-p {\n  background-color: #FF2277;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #393E41;\n          box-shadow: 10px 7.5px 1px 0px #393E41;\n  padding: 20px;\n  text-align: justify;\n}\n\n.contact-thumbnail {\n  display: block;\n  background-color: #393E41;\n  width: 100%;\n  height: 40px;\n  margin-bottom: 20px;\n  padding: 10px;\n  text-decoration: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-shadow: 10px 7.5px 1px 0px #FF2277;\n          box-shadow: 10px 7.5px 1px 0px #FF2277;\n}\n\n.contact-thumbnail:hover {\n  -webkit-box-shadow: 5px 5px 1px 0px #FF2277;\n          box-shadow: 5px 5px 1px 0px #FF2277;\n}\n\n.contact-thumbnail div {\n  float: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 40px;\n  display: block;\n  padding: 0 20px;\n  text-decoration: none;\n  margin-top: -5px;\n  width: -webkit-calc(100% - 80px);\n  width: calc(100% - 80px);\n  text-align: right;\n}\n\n.contact-thumbnail img {\n  width: 40px;\n  float: left;\n}\n\n.p5-info {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  z-index: 1;\n  border-bottom: 2px solid #393E41;\n}\n\n.p5-info h1 {\n  font-size: 42px;\n  text-align: left;\n  margin-left: 100px;\n  padding-top: 10px;\n}\n\n.p5-info p {\n  display: none;\n  visibility: hidden;\n  opacity: 1;\n}\n\n.p5-info input {\n  background-color: #FF2277;\n}\n\n.p5-info button {\n  background-color: #FF2277;\n  color: #FDFFFC;\n  margin: 10px;\n  position: absolute;\n  color: #FDFFFC;\n  border: none;\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41);\n}\n\n.p5-info-slide {\n  background: none;\n  border: none;\n  height: 75px;\n  position: fixed;\n  z-index: 100;\n  left: 25px;\n  margin: 5px;\n  margin-top: 15px;\n}\n\n.p5-info-slide img {\n  -webkit-transition: ease-in 0.2s;\n  transition: ease-in 0.2s;\n  height: 40px;\n  -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n  filter: drop-shadow(6px 5px 5px #FF2277);\n}\n\n.p5-info-slide img:hover {\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.p5-info-show {\n  z-index: 5;\n  border-bottom: 2px solid #FF2277;\n  -webkit-box-shadow: 0px 10px 10px black;\n          box-shadow: 0px 10px 10px black;\n}\n\n.p5-info-show p {\n  opacity: 1;\n  display: block;\n  visibility: visible;\n}\n\n.p5-info-show::after {\n  z-index: 20;\n  content: \"Hide this information panel with the ^ button above\";\n  font-style: italic;\n  font-size: 10.5px;\n  display: inline;\n  position: absolute;\n  left: 10px;\n}\n\n.p5-canvas {\n  width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: absolute;\n  z-index: 0;\n  top: 150px;\n  height: -webkit-calc(100vh - 75px - 70px - 75px);\n  height: calc(100vh - 75px - 70px - 75px);\n  text-align: center;\n  cursor: crosshair;\n}\n\n.weblog-signature {\n  margin-top: 15px;\n  text-shadow: black 1px 1px 5px;\n  padding-left: 30px;\n  color: #FF2277;\n  font-weight: normal;\n  margin-bottom: 50px;\n}\n\n.music-release-banner {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 0% 20%;\n  background-size: cover;\n  background-blend-mode: darken;\n  border-bottom: 1px solid white;\n  text-align: center;\n  padding: 15px;\n  padding-top: 0px;\n}\n\n.music-release-banner p, .music-release-banner h1, .music-release-banner h2, .music-release-banner h3 {\n  display: block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  margin: 0 auto;\n  padding: 0;\n  text-shadow: 1px 1px 5px black;\n}\n\n.submergence-hover {\n  -webkit-transition: ease-out 0.2s;\n  transition: ease-out 0.2s;\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41);\n}\n\n.submergence-hover img {\n  -webkit-transition: ease-out 0.2s;\n  transition: ease-out 0.2s;\n}\n\n.submergence-hover:hover {\n  -webkit-filter: drop-shadow(6px 5px 0px #FF2277);\n  filter: drop-shadow(6px 5px 0px #FF2277);\n}\n\n.footer {\n  height: 70px;\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  margin: 0;\n}\n\n.footer hr {\n  border-color: #FF2277;\n}\n\n.footer button, .footer a {\n  font-size: 14px;\n  padding: 0;\n  color: #FDFFFC;\n  text-decoration: underline;\n  background: none;\n  border: none;\n}\n\n.footer a {\n  text-shadow: 2px 2px 4px #222222;\n}\n\n.footer button:hover, .footer a:hover {\n  text-shadow: 0 0 5px #FDFFFC;\n}\n\n.copyright {\n  margin-top: 0px;\n  color: #FF2277;\n  font-size: 14px;\n  text-shadow: #222222 2px 2px 1px;\n}\n\n@media only screen and (min-width: 769px) {\n  body {\n    overflow: hidden;\n  }\n\n  .header {\n    height: 75px;\n  }\n\n  .header h1, .header img {\n    float: left;\n    font-size: 55px;\n  }\n\n  .header h1 {\n    margin-top: 3px;\n    padding: 0;\n  }\n\n  .button-regular {\n    padding: 7.5px 12px;\n  }\n\n  .hide-on-web {\n    visibility: hidden;\n  }\n\n  .hide-on-mobile {\n    visibility: visible;\n  }\n\n  .popup {\n    height: -webkit-calc(100% - 75px - 70px);\n    height: calc(100% - 75px - 70px);\n  }\n\n  .navigator img {\n    display: block;\n  }\n\n  .navigator button {\n    right: 45px;\n  }\n\n  .project-list {\n    margin: 0;\n    height: -webkit-calc(100vh - 35px - 75px - 70px);\n    height: calc(100vh - 35px - 75px - 70px);\n    padding: 0px 50px;\n  }\n\n  .project-thumbnail {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    height: 250px;\n    width: 250px;\n  }\n\n  .post-thumbnail {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    height: 250px;\n    width: 250px;\n  }\n\n  .project-thumbnail:first-of-type, .post-thumbnail:first-of-type {\n    margin-top: 50px;\n  }\n\n  .project-thumbnail:last-of-type, .post-thumbnail:last-of-type {\n    margin-bottom: 200px;\n  }\n\n  .project-thumbnail p {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: none;\n  }\n\n  .project-thumbnail:hover p {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: block;\n  }\n\n  .project-thumbnail:hover small {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n    display: none;\n  }\n\n  .project-thumbnail:hover div {\n    -webkit-transition: ease-in 0.25s;\n    transition: ease-in 0.25s;\n  }\n\n  .close-icon {\n    height: 40px;\n  }\n\n  .project-page {\n    height: -webkit-calc(100vh - 75px - 70px);\n    height: calc(100vh - 75px - 70px);\n  }\n\n  .contact-left {\n    float: left;\n    width: 40%;\n    text-align: center;\n  }\n\n  .contact-right {\n    float: right;\n    left: 40vw;\n    text-align: center;\n    position: fixed;\n    width: -webkit-calc(60vw - 100px);\n    width: calc(60vw - 100px);\n    margin-left: 10px;\n    padding: 0px 50px;\n  }\n\n  .contact-right h1 {\n    margin-bottom: 20px;\n  }\n\n  .about {\n    margin: 0 20%;\n    margin-bottom: 40px;\n  }\n\n  .about-me {\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n  }\n\n  .about-me img {\n    width: -webkit-calc(50% - 42.5px);\n    width: calc(50% - 42.5px);\n    display: inline-block;\n    right: 0;\n    -webkit-align-self: center;\n            align-self: center;\n  }\n\n  .about-me div {\n    width: 50%;\n    padding-right: 30px;\n    -webkit-align-self: center;\n            align-self: center;\n  }\n\n  .about-me div p {\n    width: 100%;\n  }\n\n  .about-me:last-child {\n    padding-bottom: 20px;\n  }\n\n  .p5-info {\n    height: 75px;\n    background-color: #222222;\n  }\n\n  .p5-info h1 {\n    font-size: 42px;\n    margin-left: 100px;\n    padding-top: 10px;\n  }\n\n  .p5-info p {\n    max-width: 750px;\n    margin: 10px auto;\n  }\n\n  .p5-info input {\n    position: static;\n    display: block;\n    margin-left: 5px;\n    margin-bottom: -5px;\n  }\n\n  .p5-info button {\n    padding: 7.5px 12px;\n    margin: 10px;\n    position: absolute;\n    float: right;\n    top: 10px;\n    right: 145px;\n  }\n\n  .p5-info-slide {\n    background: none;\n    border: none;\n    height: 75px;\n    position: fixed;\n    left: 25px;\n    margin: 5px;\n    margin-top: 15px;\n  }\n\n  .p5-info-slide img {\n    -webkit-transition: ease-in 0.2s;\n    transition: ease-in 0.2s;\n    height: 40px;\n    -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n    filter: drop-shadow(6px 5px 5px #FF2277);\n  }\n\n  .p5-info-show {\n    height: auto;\n    padding-bottom: 10px;\n  }\n\n  .p5-info-show::after {\n    margin-top: 20px;\n  }\n\n  .submergence-hover br {\n    display: none;\n  }\n\n  .weblog-post {\n    padding: 10px 30px;\n  }\n\n  .weblog-post * {\n    max-width: 750px;\n    margin: 2px auto;\n    text-align: center;\n  }\n\n  .weblog-post small {\n    display: block;\n  }\n\n  .weblog-post p {\n    text-align: justify;\n    line-height: 25px;\n  }\n\n  .weblog-post h1 {\n    max-width: -webkit-calc(100vw - 250px);\n    max-width: calc(100vw - 250px);\n    display: block;\n  }\n\n  .footer {\n    position: fixed;\n    background-color: #393E41;\n    height: 70px;\n  }\n\n  .footer button, .footer a {\n    display: inline-block;\n    margin: 5px 15px;\n    margin-top: 15px;\n  }\n}\n@media only screen and (max-width: 769px) {\n  body {\n    font-size: 11px;\n    height: 100%;\n    width: 100vw;\n  }\n\n  html {\n    height: 100%;\n  }\n\n  code {\n    padding: 0px 4px;\n  }\n\n  .main-body {\n    height: 100%;\n    width: 100vw;\n  }\n\n  .header {\n    text-align: center;\n    height: 40px;\n    width: 100vw;\n  }\n\n  .header h1 {\n    font-size: 28px;\n    margin: 0px;\n    margin-top: 2px;\n    margin-left: 8px;\n    float: left;\n  }\n\n  .header img {\n    height: 30px;\n    float: right;\n  }\n\n  .hide-on-web {\n    visibility: visible;\n  }\n\n  .hide-on-mobile {\n    visibility: hidden;\n  }\n\n  .popup {\n    display: none;\n    top: 40px;\n    height: -webkit-calc(100% - 40px - 70px);\n    height: calc(100% - 40px - 70px);\n  }\n\n  .navigator img {\n    display: none;\n  }\n\n  .navigator button {\n    right: 5px;\n    font-size: 11px;\n  }\n\n  .navigator input {\n    font-size: 11px;\n    width: -webkit-calc(100% - 45px);\n    width: calc(100% - 45px);\n  }\n\n  .project-thumbnail {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    -webkit-box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n            box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n  }\n\n  .project-thumbnail:first-of-type {\n    margin-top: 20px;\n  }\n\n  .project-thumbnail:last-of-type {\n    margin-bottom: 100px;\n  }\n\n  .post-thumbnail {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    -webkit-box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n            box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277;\n  }\n\n  .post-thumbnail:last-of-type {\n    margin-bottom: 100px;\n  }\n\n  .post-thumbnail:first-of-type {\n    margin-top: 20px;\n  }\n\n  .project-thumbnail p {\n    display: none;\n  }\n\n  .project-thumbnail h2 {\n    padding: 0px 40px;\n  }\n\n  .project-list {\n    margin-top: 2px;\n    height: -webkit-calc(100% - (35px + 40px + 70px));\n    height: calc(100% - (35px + 40px + 70px));\n    overflow-y: auto;\n    margin-left: -10px;\n    position: absolute;\n    text-align: center;\n  }\n\n  .close-icon {\n    position: fixed;\n    right: 0px;\n    margin-top: 2px;\n    height: 30px;\n  }\n\n  .project-page {\n    height: -webkit-calc(100% - (40px + 70px));\n    height: calc(100% - (40px + 70px));\n    position: absolute;\n  }\n\n  .share-icon {\n    display: none;\n  }\n\n  .contact-container {\n    width: -webkit-calc(100vw - 100px);\n    width: calc(100vw - 100px);\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .contact-left {\n    width: -webkit-calc(100% - 60px);\n    width: calc(100% - 60px);\n    text-align: center;\n    float: none;\n    padding: 0 30px;\n    margin-left: -25px;\n  }\n\n  .contact-right {\n    float: none;\n    left: 0px;\n    text-align: center;\n    position: relative;\n    width: 100%;\n    padding: 0;\n  }\n\n  .contact-right h1 {\n    margin-bottom: 20px;\n  }\n\n  .contact-thumbnail div {\n    font-size: 20px;\n    margin-top: 10px;\n  }\n\n  .about {\n    margin: 0 20px;\n  }\n\n  .about-me {\n    padding: 15px;\n  }\n\n  .about-me img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    width: 50%;\n  }\n\n  .about-me p {\n    display: block;\n  }\n\n  .p5-info h1 {\n    font-size: 22px;\n    margin-left: 37.5px;\n    padding: 5px;\n    max-width: 45%;\n    max-width: -webkit-calc(100% - 200px);\n    max-width: calc(100% - 200px);\n    max-height: 26px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  .p5-info p {\n    text-align: justify;\n    padding: 5px;\n  }\n\n  .p5-info button, .p5-info input {\n    font-size: 11px;\n    margin-top: 5px;\n    position: static;\n    display: block;\n    float: right;\n    margin-right: 5px;\n    color: #FDFFFC;\n  }\n\n  .p5-info button {\n    padding: 5px;\n    margin: 7.5px;\n    position: absolute;\n    top: -2px;\n    right: 35px;\n  }\n\n  .p5-info input {\n    width: 165px;\n    position: absolute;\n    margin: 0;\n    margin-top: -2px;\n    margin-left: 5px;\n  }\n\n  .p5-info-slide {\n    background: none;\n    border: none;\n    height: 40px;\n    position: fixed;\n    left: 0px;\n    margin: 5px;\n    margin-top: 3px;\n  }\n\n  .p5-info-slide img {\n    -webkit-transition: ease-in 0.2s;\n    transition: ease-in 0.2s;\n    height: 30px;\n    -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n    filter: drop-shadow(6px 5px 5px #FF2277);\n  }\n\n  .p5-info-show {\n    height: auto;\n    padding-bottom: 5px;\n    background-color: #222222;\n  }\n\n  .p5-info-show::after {\n    margin-top: 20px;\n  }\n\n  .p5-info-show h1 {\n    max-height: inherit !important;\n    white-space: normal;\n    text-overflow: ellipsis;\n  }\n\n  .p5-canvas {\n    top: 40px;\n    height: -webkit-calc(100% - 40px);\n    height: calc(100% - 40px);\n    padding: 0;\n  }\n\n  .submergence-hover br {\n    display: block;\n  }\n\n  .weblog-post {\n    padding: 0 10px;\n    text-align: center;\n    margin-top: 10px;\n  }\n\n  .weblog-post p {\n    text-align: left;\n    line-height: 20px;\n  }\n\n  .footer {\n    width: 100%;\n    height: 70px;\n    background-color: #393E41;\n    position: fixed;\n  }\n\n  .footer button, .footer a {\n    display: inline-block;\n    margin: 7.5px 20px;\n    margin-top: 15px;\n  }\n}", "",{"version":3,"sources":["webpack://index.scss","webpack://navigation.scss","webpack://thumbnail.scss","webpack://project.scss","webpack://web-view.scss","webpack://mobile-view.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-color: #222222;\r\n$secondary-color: #393E41;\r\n$tertiary-color: #FF2277;\r\n// $tertiary-color: #CC0044;\r\n$primary-text-color: #FDFFFC;\r\n$secondary-text-color: #393E41;\r\n$tertiary-text-color: #FF2277;\r\n// $tertiary-text-color: #EE1166;\r\n$phoenix-primary-color: #C52437;\r\n$phoenix-secondary-color: #F08843;\r\n$phoenix-tertiary-color: #F7E27C;\r\n\r\n// $tertiary-color: $phoenix-primary-color;\r\n// $tertiary-text-color: $phoenix-secondary-color;\r\n\r\n$title-font: Monaco, monospace;\r\n// $body-font: Arial, Helvetica, sans-serif;\r\n// $body-font: Monospace;\r\n$body-font: Monaco, monospace;\r\n$header-height: 75px;\r\n$search-height: 35px;\r\n$thumbnail-size: 250px;\r\n$bottom-height: 70px;\r\n$regular-font-size: 14px;\r\n$p5-info-height: 75px;\r\n$thumbnail-transition: ease-in 0.25s;\r\n$vhs-shadows-l: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3px 0px;\r\n$vhs-shadows-m: greenyellow -2px 0px 0px, cyan 1.5px -2px 0px, red 2.5px 1.5px 0px;\r\n$vhs-shadows-s: greenyellow -1px 0px 0px, cyan 0.5px -1px 0px, red 1.5px 1px 0px;\r\n$vhs-shadows-drop-l: drop-shadow(greenyellow -5px 0px 0px) drop-shadow(cyan 0.5px -5px 0px) drop-shadow(red 3.5px 3px 0px);\r\n$vhs-shadows-drop-m: drop-shadow(greenyellow -2px 0px 0px) drop-shadow(cyan 1.5px -2px 0px) drop-shadow(red 2.5px 1.5px 0px);\r\n$vhs-shadows-drop-s: drop-shadow(greenyellow -1px 0px 0px) drop-shadow(cyan 0.5px -1px 0px) drop-shadow(red 1.5px 1px 0px);\r\n$grey-shadow: $primary-color 1px 1px 10px;\r\n$grey-shadow-drop: drop-shadow($primary-color 1px 1px 10px);\r\n\r\n* {\r\n  margin: 0;\r\n  font-family: $body-font;\r\n}\r\n\r\nbody {\r\n    background-color: $primary-color;\r\n    font-size:$regular-font-size;\r\n}\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button{\r\n    //-webkit-appearance: none;\r\n    display: none;\r\n}\r\n\r\ninput[type=\"search\"]::-ms-clear{\r\n    display: none;\r\n}\r\n\r\n.button-regular{\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    font-size: 11px;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    margin: 10px;\r\n    position: absolute;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    font-family: $body-font;\r\n}\r\n\r\n.page-404{\r\n    text-align: center;\r\n    padding: 10%;\r\n}\r\n\r\n.page-404 h1{\r\n    text-shadow: $vhs-shadows-s;\r\n}\r\n\r\n.page-404 img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 100%;\r\n    // filter:/*drop-shadow($tertiary-color 0px 0px 50px) */\r\n    //     // drop-shadow($tertiary-color 40px 0px 0px)\r\n    //     // drop-shadow($tertiary-color -40px 0px 0px)\r\n    //     drop-shadow($tertiary-color 0px 40px 0px);\r\n    //     // drop-shadow($tertiary-color 0px -40px 0px);\r\n}\r\n\r\n.page-404 img:hover{\r\n    transition: $thumbnail-transition;\r\n    filter: $vhs-shadows-drop-l;\r\n}\r\n\r\n.page-404 h2:hover{\r\n    filter:$vhs-shadows-drop-s;\r\n    transition: $thumbnail-transition;\r\n\r\n}\r\n\r\n.shadowed:hover{\r\n    transition: $thumbnail-transition;\r\n\r\n    box-shadow: $grey-shadow;\r\n    // box-shadow: $vhs-shadows-l;\r\n    // text-shadow: $vhs-shadows-l;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color:$primary-color;\r\n    color:$primary-text-color;\r\n    font-family: $body-font;\r\n    height: 100vh;\r\n    width: 100vw;;\r\n    overflow: hidden;\r\n}\r\n\r\na {\r\n    color:white;\r\n    transition: $thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    cursor: pointer;\r\n}\r\n\r\na:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    text-shadow: 0 0 5px $primary-text-color;\r\n}\r\n\r\ncode {\r\n    background-color: $secondary-color;\r\n    padding: 3px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.header {\r\n    font-family: $title-font;\r\n    background-color: $secondary-color;\r\n    width: 100%;\r\n    height: $header-height;\r\n}\r\n\r\n.header ::slotted {\r\n    float:left;\r\n}\r\n\r\n.header img {\r\n    transition: $thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    height: ($header-height - 10);\r\n    margin: 5px;\r\n    // box-shadow: greenyellow -1.5px 1.5px 0px, cyan 0.5px -1.5px 0px, red 1.5px 1.5px 0px;\r\n\r\n}\r\n\r\n.header img:hover {\r\n        // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n        transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n        filter: $vhs-shadows-drop-m;\r\n        // filter: $grey-shadow-drop;\r\n}\r\n\r\n.header h1 {\r\n    transition: $thumbnail-transition;\r\n    // // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n}\r\n\r\n.header h1:hover{\r\n    filter: $vhs-shadows-drop-l;\r\n    transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.anniversary {\r\n    background: -moz-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $tertiary-color), color-stop(100%, rgba(0,255,255,1))); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffff', endColorstr='#ff00ff',GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.phoenix {\r\n    background: -moz-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $phoenix-primary-color), color-stop(100%, $phoenix-tertiary-color)); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.vhs-color {\r\n    // mix-blend-mode: difference; \r\n    // color: #00f;\r\n    // opacity: 0.5;\r\n    // text-shadow: #0f0 5px 5px 1px, #f00 10px 10px 1px; //, #00f -5px -5px 0px;\r\n    text-shadow: greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3.5px 0px;\r\n}\r\n\r\n.tertiary-text-color{\r\n    color: $tertiary-text-color;\r\n}\r\n\r\n.main-gradient-text {\r\n    background: -moz-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $phoenix-primary-color), color-stop(100%, $phoenix-tertiary-color)); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n// .header h1:hover {\r\n//     // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n//     // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n// }\r\n\r\n.main-body{\r\n    top: $header-height;\r\n    height: calc(100% - #{$header-height});\r\n}\r\n\r\n.popup{\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 101;\r\n    border:none;\r\n    top: $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    text-align: center;\r\n}\r\n\r\n.popup-button{\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 101;\r\n    border:none;\r\n    // top: $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    background:rgb(0,0,0);\r\n    background: transparent\\9;\r\n    background:rgba(0,0,0,0.8);\r\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#22000000,endColorstr=#22000000);\r\n    zoom: 1;\r\n    width:100vw;\r\n}\r\n\r\n.popup-container{\r\n    z-index: 110;\r\n    display: block;\r\n    position: absolute;\r\n    width: 100vw;\r\n    text-align: center;\r\n    // padding:100px 0px;\r\n    padding: 50px 0px;\r\n    pointer-events: none;\r\n}\r\n\r\n.popup-div {\r\n    display: block;\r\n    font-size: larger;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n    // margin-top:50px;\r\n    width: 500px;\r\n    // box-shadow: 10px 10px 10px black;\r\n    box-shadow: 10px 10px 0px $tertiary-color;\r\n    // border-radius: 100px;\r\n    color:$primary-text-color;\r\n    background-color: $primary-color;\r\n    padding: 20px 50px;\r\n    pointer-events: all;\r\n}\r\n\r\n.popup h1 {\r\n    text-align: center;\r\n}\r\n\r\n.popup code {\r\n    border-radius: 0;\r\n    background-color: $tertiary-color;\r\n    -moz-box-shadow:    inset 0 0 10px $secondary-color;\r\n    -webkit-box-shadow: inset 0 0 10px $secondary-color;\r\n    box-shadow:         inset 0 0 10px $secondary-color;\r\n}\r\n\r\n.popup > div small {\r\n    text-align: center;\r\n    display: block;\r\n    color: $tertiary-text-color;\r\n    margin-top:20px;\r\n}\r\n\r\n.share-button-div{\r\n    text-align: center;\r\n}\r\n\r\n.share-button-div > *{\r\n    margin: 5px;\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    transition: ease-in 0.3s;\r\n}\r\n\r\n.share-button-div > *:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n\r\n    .share-button-icon{\r\n        box-shadow:$tertiary-color 3px 2px;\r\n    }\r\n}\r\n\r\n.share-button-icon{\r\n    border-radius: 1000px;\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.share-count-wrapper > *{\r\n    margin-left: -20px;\r\n    margin-top: -5px;\r\n    padding: 3px 6px;\r\n    background-color: $secondary-color;\r\n    color: $primary-text-color;\r\n    border-radius: 8px;\r\n}\r\n\r\n.share-link-container{\r\n    // background-color: white;\r\n}\r\n\r\n.share-link-copy{\r\n    padding: 7.5px 10px;\r\n    padding-top: 7;\r\n    padding-bottom: 8;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    // border-radius: 20px;\r\n    // border-top-right-radius: 20px;\r\n    // border-bottom-right-radius: 20px;\r\n\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.share-link{\r\n\r\n    // -moz-user-select: all;\r\n    // -webkit-user-select: all;\r\n    // -ms-user-select: all;\r\n    // user-select: all;\r\n\r\n    text-align: center;\r\n    width: 320px;\r\n    padding: 7.5px;\r\n    text-overflow: ellipsis;\r\n    border: none;\r\n    // border-top-left-radius: 20px;\r\n    // border-bottom-left-radius: 20px;\r\n\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n@import './navigation.scss';\r\n\r\n.project-list {\r\n    margin:0;\r\n    height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n    text-align: center;\r\n    overflow-x:hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.link-disabled {\r\n    display: none;\r\n}\r\n\r\n@import './thumbnail.scss';\r\n@import './project.scss';\r\n\r\n.footer{\r\n    height: $bottom-height;\r\n    width: 100vw;\r\n    position: fixed;\r\n    bottom: 0;\r\n    text-align: center;\r\n    margin:0;\r\n}\r\n\r\n.footer hr{\r\n    border-color:$tertiary-color\r\n}\r\n\r\n.footer button, .footer a{\r\n    font-size:$regular-font-size;\r\n    padding: 0;\r\n    color: $primary-text-color;    \r\n    // text-shadow: $primary-color 2px 2px 1px;\r\n    text-decoration: underline;\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.footer a{\r\n    text-shadow: 2px 2px 4px $primary-color;\r\n}\r\n\r\n.footer button:hover, .footer a:hover {\r\n    text-shadow: 0 0 5px $primary-text-color;\r\n}\r\n\r\n.copyright {\r\n    margin-top: 0px;\r\n    color:$tertiary-text-color;\r\n    font-size: $regular-font-size;\r\n    text-shadow: $primary-color 2px 2px 1px;\r\n}\r\n\r\n@import 'web-view.scss';\r\n@import 'mobile-view.scss';",".navigator {\r\n    background-color: $tertiary-color;\r\n    height: $search-height;\r\n    top: $header-height;\r\n    width: 100%;\r\n    margin:0;\r\n}\r\n\r\n.navigator img {\r\n    display: block;\r\n    height: $search-height - 10;\r\n    margin: 5px;\r\n    right: 5px;\r\n    pointer-events:none;\r\n    position: absolute;\r\n}\r\n\r\n.navigator input {\r\n    -moz-box-shadow:    inset 0 0 10px $secondary-color;\r\n    -webkit-box-shadow: inset 0 0 10px $secondary-color;\r\n    box-shadow:         inset 0 0 10px $secondary-color;\r\n    font-size: $search-height - 20;\r\n    background:$tertiary-color;\r\n    border:none;\r\n    color:$primary-text-color;\r\n    width: calc(100% - 45px);\r\n    height:100%;\r\n    padding: 0 10px;\r\n    padding-right:$search-height;\r\n}\r\n\r\n.navigator input::placeholder {\r\n    color:$primary-text-color;\r\n    text-shadow: 1px 1px 4px $secondary-text-color;\r\n    // text-shadow: -1px -1px 2.5px $secondary-text-color, 1px -1px 2.5px $secondary-text-color, -1px 1px 2.5px $secondary-text-color, 1px 1px 2.5px $secondary-text-color;\r\n}\r\n\r\n.navigator button {\r\n    transition: ease-in 0.3s;\r\n    color: $primary-text-color;\r\n    display: block;\r\n    position: absolute;\r\n    height: $search-height - 5px;\r\n    background-color: $primary-color;\r\n    margin: 1.25px;\r\n    right: $search-height+10px;\r\n    border:none;\r\n    padding: 8px 8px;\r\n    // border-radius: 5px;\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    // box-shadow: $secondary-color 7.5px 2.5px;\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.navigator button:hover{\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    box-shadow: $secondary-color 7.5px 2.5px;\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    // box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.navigator button input{\r\n    -moz-box-shadow:    none;\r\n    -webkit-box-shadow: none;\r\n    box-shadow:         none;\r\n    background:none;\r\n    border:none;\r\n    color:$primary-text-color;\r\n    width: $search-height - 20;\r\n    height: $search-height - 20;\r\n    float:left;\r\n}\r\n\r\n.navigator button label{\r\n    margin-top:0px;\r\n    margin-left: 8px;\r\n    float:right;\r\n}\r\n\r\n// input[type=\"checkbox\"]::before {\r\n//     content: \"\";\r\n//     display: inline-block;\r\n//     margin-left: -3px;\r\n//     margin-top: -1.5px;\r\n//     height: 16px;\r\n//     width: 16px;\r\n//     background-color: white;\r\n//     border: 1px solid rgb(166, 166, 166);\r\n//     border-radius: 4px;\r\n//     // box-shadow: inset 0 2px 5px rgba(0,0,0,0.25);\r\n//  }\r\n\r\n//  input[type=\"checkbox\"]:checked::before {\r\n//     background-color: $tertiary-color;\r\n//     border: 1px solid $tertiary-color;\r\n\r\n//  }\r\n\r\n// input[type=\"checkbox\"]:checked::after {\r\n//     content: '';\r\n//     position: absolute;\r\n//     width: 11px;\r\n//     height: 4px;\r\n//     background-color: $tertiary-color;\r\n//     top: 11px;\r\n//     left: 10.9px;\r\n//     border: 3px solid white;\r\n//     border-top: none;\r\n//     border-right: none;\r\n//     -webkit-transform: rotate(-45deg);\r\n//     -moz-transform: rotate(-45deg);\r\n//     -o-transform: rotate(-45deg);\r\n//     -ms-transform: rotate(-45deg);\r\n//     transform: rotate(-45deg);\r\n//  }",".project-thumbnail {\r\n    text-decoration:none;\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    // box-shadow:inset 0 0 $thumbnail-size 75px #101010, 5px 5px 1px 0px $secondary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 75px #101010,10px 7.5px 1px 0px $tertiary-color;\r\n    // box-shadow: inset 0 0 $thumbnail-size 75px #101010, $vhs-shadows-l;\r\n    // border-radius: 0px;\r\n    height: $thumbnail-size;\r\n    width: $thumbnail-size;\r\n    display: inline-table;\r\n    text-align: right;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 30px;\r\n    transition:$thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.project-thumbnail:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transition:$thumbnail-transition;\r\n    // box-shadow:inset 0 0 $thumbnail-size 200px black,10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 200px black, 5px 5px 1px 0px $secondary-color;\r\n    text-shadow: none;\r\n}\r\n\r\n.project-thumbnail:last-of-type {\r\n    transition:$thumbnail-transition;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.project-thumbnail div {\r\n    transition:$thumbnail-transition;\r\n    // display:table;\r\n    text-align: center;\r\n    width:$thumbnail-size;\r\n    //height: 100%;\r\n    // margin-top: 10%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.project-thumbnail div *{\r\n    transition:$thumbnail-transition;\r\n    padding: 0px 20px;\r\n}\r\n\r\n.project-thumbnail div p {\r\n    transition:$thumbnail-transition;\r\n    margin-top: 10px;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.project-thumbnail small {\r\n    text-align: right;\r\n    transition:$thumbnail-transition;\r\n    display: block;\r\n    position: absolute;\r\n    margin: 10px;\r\n    max-width: $thumbnail-size - 20px;\r\n    // white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.post-thumbnail {\r\n    text-decoration:none;\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    // box-shadow:inset 0 0 $thumbnail-size 75px #101010, 5px 5px 1px 0px $secondary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 75px #101010,10px 7.5px 1px 0px $tertiary-color;\r\n    // border-radius: 5px;\r\n    height: $thumbnail-size;\r\n    width: $thumbnail-size;\r\n    display: inline-table;\r\n    text-align: right;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 30px;\r\n    transition:$thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.post-thumbnail:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transition:$thumbnail-transition;\r\n    // box-shadow:inset 0 0 $thumbnail-size 200px black,10px 7.5px 1px 0px $tertiary-color;\r\n        box-shadow:inset 0 0 $thumbnail-size 200px black, 5px 5px 1px 0px $secondary-color;\r\n    text-shadow: none;\r\n}\r\n\r\n.post-thumbnail:last-of-type {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.post-thumbnail div {\r\n    // display:table;\r\n    text-align: center;\r\n    width:$thumbnail-size;\r\n    //height: 100%;\r\n    // margin-top: 10%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.post-thumbnail div *{\r\n    padding: 0px 20px;\r\n}\r\n\r\n.post-thumbnail div p {\r\n    margin-top: 10px;\r\n}\r\n\r\n.post-thumbnail small {\r\n    text-align: right;\r\n    transition:$thumbnail-transition;\r\n    display: block;\r\n    position: absolute;\r\n    margin: 10px;\r\n    max-width: $thumbnail-size - 20px;\r\n    // white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    right: 0;\r\n    bottom: 0;\r\n}",".project-page {\r\n    margin:0;\r\n    padding:0;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    width:100%;\r\n    text-align: center;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n// .project-page h1:first-of-type{\r\n//     padding-top: 10px;\r\n// }\r\n\r\n// .project-page p:first-of-type{\r\n//     padding: 10px;\r\n//     padding-top: 0px;\r\n// }\r\n\r\n.close-icon {\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    margin: 5px;\r\n    // position:sticky;\r\n    position: absolute;\r\n    float: right;\r\n    z-index: 100;\r\n    right: 35px;\r\n    margin-top: 15px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-icon:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-m;\r\n    // filter: $vhs-shadows-drop-m;\r\n}\r\n\r\n.share-icon {\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    margin: 5px;\r\n    // position:sticky;\r\n    position: absolute;\r\n    float: right;\r\n    right: 90px;\r\n    z-index: 100;\r\n    margin-top: 15px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 2px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 2px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n    cursor: pointer;\r\n}\r\n\r\n.share-icon:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    // -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    // filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-s;\r\n    // filter: $vhs-shadows-drop-s;\r\n}\r\n\r\n.about-h1{\r\n    margin: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.about-h2{\r\n    margin: 10px;\r\n    // margin-top:30px;\r\n    margin-bottom: -5px;\r\n    text-align: left;\r\n    // padding: 10px;\r\n    // background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    // box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n}\r\n\r\n.about-p{\r\n    text-align: left;\r\n    // text-align: justify;\r\n    margin-bottom: -7.5px;\r\n    padding-bottom: 7.5px;\r\n    text-align: justify;\r\n}\r\n\r\n.about-me{\r\n    margin-top: 10px;\r\n    // border-radius: 10px;\r\n    background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    padding: 15px;\r\n    // padding-bottom: 10px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.about-me img{\r\n    // border-radius: 10px;\r\n    // background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    box-shadow: $primary-color 1px 1px 10px;\r\n    // box-shadow: 10px 7.5px 1px 0px $primary-color;\r\n    // height: 20px;\r\n    // width: 10px;\r\n    transition: ease-in 0.2s;\r\n\r\n}\r\n\r\n.about-me img:hover{\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n}\r\n\r\n.contact-container {\r\n    width: calc(100vw - 100px);\r\n    padding: 0 50px;\r\n    padding-top: 50px;\r\n}\r\n\r\n$contact-left: 40%;\r\n\r\n.contact-left {\r\n    float: left;\r\n    width: $contact-left;\r\n    text-align: center;\r\n}\r\n\r\n.contact-right h1{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contact-p{\r\n    background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    padding: 20px;\r\n    text-align: justify;\r\n}\r\n\r\n.contact-thumbnail {\r\n    display: block;\r\n    background-color: $secondary-color;\r\n    width: 100%;\r\n    height: 40px;\r\n    // border-radius: 100px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n}\r\n\r\n.contact-thumbnail:hover{\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    box-shadow:5px 5px 1px 0px $tertiary-color;\r\n}\r\n\r\n.contact-thumbnail div{\r\n    float: right;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    font-size: 40px;\r\n    display: block;\r\n    padding: 0 20px;\r\n    text-decoration: none;\r\n    margin-top: -5px;\r\n    width: calc(100% - 80px);\r\n    text-align: right;\r\n}\r\n\r\n.contact-thumbnail img{\r\n    width: 40px;\r\n    float: left;\r\n}\r\n\r\n.p5-info {\r\n    position: absolute;\r\n    width: 100%;\r\n    // transition: ease-in 0.2s;\r\n    text-align: center;\r\n    z-index: 1;\r\n    border-bottom: 2px solid $secondary-color;\r\n}\r\n\r\n.p5-info h1{\r\n    // transition: ease-in 0.2s;\r\n    font-size: 3 * $regular-font-size;\r\n    text-align: left;\r\n    margin-left: $p5-info-height + 25px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.p5-info p{\r\n    // transition: all ease-in 0.2s;\r\n    // margin-top: 5px;\r\n    display: none;\r\n    visibility: hidden;\r\n    opacity: 1;\r\n\r\n}\r\n\r\n.p5-info input {\r\n    // z-index: 20;\r\n    // transition: ease-in 0.2s;\r\n    background-color: $tertiary-color;\r\n    // padding: 5px;\r\n    // margin: 10px;\r\n    // position: absolute;\r\n    // top:$header-height+12px;\r\n    // right: 145px;\r\n    // width: 80px;\r\n    // left: 0;\r\n}\r\n\r\n.p5-info button {\r\n    // transition: ease-in 0.2s;\r\n    background-color: $tertiary-color;\r\n    color: $primary-text-color;\r\n    margin: 10px;\r\n    position: absolute;\r\n    // top:$header-height+ 12px;\r\n    // right: 145px;\r\n    color: $primary-text-color;\r\n    border: none;\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n}\r\n\r\n.p5-info-slide {\r\n    background: none;\r\n    border: none;\r\n    height: $p5-info-height;\r\n    // margin: 5px;\r\n    position:fixed;\r\n    z-index: 100;\r\n    left: 25px;\r\n    // margin-top: 10px;\r\n    margin: 5px;\r\n    // right: 35px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.p5-info-slide img{\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    // -webkit-filter: $vhs-shadows-drop-l;\r\n    // filter: $vhs-shadows-drop-l;\r\n}\r\n\r\n.p5-info-slide img:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n    // -webkit-filter: $vhs-shadows-drop-m;\r\n    // filter: $vhs-shadows-drop-m;\r\n}\r\n\r\n.p5-info-show{\r\n    z-index: 5;\r\n    // transition: ease-in 0.2s;\r\n    border-bottom: 2px solid $tertiary-color;\r\n    box-shadow: 0px 10px 10px black;\r\n}\r\n\r\n.p5-info-show p{\r\n    // transition: all ease-in 0.2s;\r\n    opacity: 1;\r\n    display: block;\r\n    visibility: visible;\r\n}\r\n\r\n.p5-info-show::after{\r\n    z-index: 20;\r\n    content: \"Hide this information panel with the ^ button above\";\r\n    font-style: italic;\r\n    font-size: 0.75 * $regular-font-size;\r\n    // float: left;\r\n    display: inline;\r\n    position: absolute;\r\n    left: 10px;\r\n    // bottom: px;\r\n}\r\n\r\n.p5-canvas{\r\n    // margin-left: 5px;\r\n    width: 100vw;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    // border: white 2px solid;\r\n    position: absolute;\r\n    z-index: 0;\r\n    top: $p5-info-height + $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height});\r\n    // max-height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height} - 10px);\r\n    text-align: center;\r\n    cursor: crosshair;\r\n}\r\n\r\n.weblog-signature{\r\n    margin-top:15px;\r\n    text-shadow: black 1px 1px 5px;\r\n    padding-left: 30px;\r\n    color:$tertiary-text-color;\r\n    font-weight: normal;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.music-release-banner{\r\n    background: url('../../../public/assets/img/music-banner.jpg');\r\n    background-position:0% 20%;\r\n    background-size: cover;\r\n    background-blend-mode: darken;\r\n    border-bottom:1px solid white;\r\n    text-align: center;\r\n    padding: 15px;\r\n    padding-top: 0px;\r\n}\r\n\r\n\r\n.music-release-banner p,.music-release-banner h1,.music-release-banner h2,.music-release-banner h3 {\r\n    display: block;\r\n    width: max-content;\r\n    height: max-content;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    text-shadow: 1px 1px 5px black;\r\n}\r\n\r\n.submergence-hover{\r\n    transition: ease-out 0.2s;\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n}\r\n\r\n.submergence-hover img{\r\n    transition: ease-out 0.2s;\r\n}\r\n\r\n.submergence-hover:hover{\r\n    // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 0px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 0px $tertiary-color);\r\n}\r\n\r\n// .submergence-hover:hover img {\r\n//     // transform: translateX(1px) translateY(20px);\r\n// }\r\n","@media only screen and (min-width: 769px){\r\n    $header-height:75px;\r\n    $thumbnail-size: 250px;\r\n    $bottom-height: 70px;\r\n\r\n    body{\r\n        overflow: hidden;\r\n    }\r\n\r\n    h1 {\r\n        // text-shadow: $vhs-shadows-l;\r\n    }\r\n    \r\n    h2 {\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .header {\r\n        height:$header-height;\r\n    }\r\n\r\n    .header h1, .header img {\r\n        float: left;\r\n        font-size: $header-height - 20;\r\n    }\r\n\r\n    .header h1 {\r\n        margin-top: 3px;\r\n        // margin-right: 10px;\r\n        // float: right;\r\n        padding: 0;\r\n        // bottom: 3px;\r\n    }\r\n\r\n    .header img {\r\n        // greenyellow -5px 0px 0px, cyan 0.5px -5px 0px, red 3.5px 3px 0px;\r\n        // -webkit-filter: $vhs-shadows-drop-s;\r\n        // filter: $vhs-shadows-drop-s;\r\n    }\r\n\r\n    .button-regular {\r\n        padding: 7.5px 12px;\r\n    }\r\n\r\n    .hide-on-web {\r\n        visibility: hidden;\r\n    }\r\n\r\n    .hide-on-mobile {\r\n        visibility: visible;\r\n    }\r\n\r\n    .popup{\r\n        height: calc(100% - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .navigator img {\r\n        display: block;\r\n    }\r\n\r\n    .navigator button{\r\n        right:$search-height+10px;\r\n    }\r\n\r\n    .project-list {\r\n        margin:0;\r\n        height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n        padding: 0px 50px;\r\n    }\r\n\r\n    .project-thumbnail {\r\n        transition:$thumbnail-transition;\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n    }\r\n\r\n    .post-thumbnail {\r\n        transition:$thumbnail-transition;\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n    }\r\n\r\n    .project-thumbnail:first-of-type, .post-thumbnail:first-of-type{\r\n        margin-top: 50px;\r\n    }\r\n\r\n    .project-thumbnail:last-of-type, .post-thumbnail:last-of-type{\r\n        margin-bottom: 200px;\r\n    }\r\n    \r\n    .project-thumbnail p {\r\n        transition:$thumbnail-transition;\r\n        display: none;\r\n    }\r\n\r\n    .project-thumbnail:hover p {\r\n        transition:$thumbnail-transition;\r\n        display: block;\r\n    }\r\n\r\n    .project-thumbnail:hover small{\r\n        transition:$thumbnail-transition;\r\n        display: none;\r\n    }\r\n\r\n    .project-thumbnail:hover div{\r\n        transition:$thumbnail-transition;\r\n    }\r\n\r\n\r\n    .close-icon{\r\n        height: 40px;\r\n    }\r\n\r\n    .project-page{\r\n        height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .contact-left {\r\n        float: left;\r\n        width: $contact-left;\r\n        text-align: center;\r\n    \r\n    }\r\n    \r\n    .contact-right {\r\n        float: right;\r\n        left: calc(0.4 * (100vw));\r\n        text-align: center;\r\n        position: fixed;\r\n        width: calc(0.6 * (100vw) - 100px);\r\n        margin-left: 10px;\r\n        padding: 0px 50px;\r\n    }\r\n    \r\n    .contact-right h1{\r\n        margin-bottom: 20px;\r\n    }\r\n    \r\n\r\n    .about{\r\n        margin: 0 20%;\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .about-me{\r\n        display: flex;\r\n    }\r\n\r\n    .about-me img{\r\n        width: calc(50% - 42.5px);\r\n        // margin-right: 5px;\r\n        // height: auto;\r\n        display: inline-block;\r\n        right: 0;\r\n        align-self: center;\r\n    }\r\n    \r\n    .about-me div {\r\n        width: 50%;\r\n        // margin-right: 20px;\r\n        // margin-left: 0px;\r\n        // padding: 0;\r\n        // padding: 0 10px;\r\n        padding-right: 30px;\r\n        align-self: center;\r\n    }\r\n\r\n    .about-me div p {\r\n        width: 100%;\r\n    }\r\n\r\n    .about-me:last-child{\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    .p5-info{\r\n        // padding-top: 10px;\r\n        height: $p5-info-height;\r\n        // margin-top: -5px;\r\n        background-color: $primary-color;\r\n        // background-color: white;\r\n    }\r\n    \r\n    .p5-info h1{\r\n        font-size: 3 * $regular-font-size;\r\n        margin-left: $p5-info-height + 25px;\r\n        padding-top: 10px;\r\n    }   \r\n\r\n    .p5-info p{\r\n        max-width: 750px;\r\n        margin: 10px auto;\r\n    }\r\n\r\n    .p5-info input {\r\n        position: static;\r\n        display: block;\r\n        // top: 0;\r\n        margin-left: 5px;\r\n        margin-bottom: -5px;\r\n        // bottom: $bottom-height;\r\n        // top:$header-height + $p5-info-height;\r\n    }\r\n\r\n    .p5-info button {\r\n        // padding: 5px;\r\n        // display: block;\r\n        padding: 7.5px 12px;\r\n        margin: 10px;\r\n        position: absolute;\r\n        float: right;\r\n        // top:$header-height+ 12px;\r\n        top: 10px;\r\n        right: 145px;\r\n    }\r\n\r\n    .p5-info-slide {\r\n        background: none;\r\n        border: none;\r\n        height: $p5-info-height;\r\n        // margin: 5px;\r\n        position:fixed;\r\n        left: 25px;\r\n        // margin-top: 10px;\r\n        margin: 5px;\r\n        // right: 35px;\r\n        margin-top: 15px;\r\n    }\r\n    \r\n    .p5-info-slide img{\r\n        transition: ease-in 0.2s;\r\n        height: 40px;\r\n        // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n        -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        // -webkit-filter: $vhs-shadows-drop-l;\r\n        // filter: $vhs-shadows-drop-l;\r\n    }\r\n\r\n    .p5-info-show{\r\n        height: auto;\r\n        padding-bottom: 10px;\r\n    }\r\n\r\n    .p5-info-show::after{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    // .p5-canvas {\r\n    //     // margin-top: $p5-info-height;\r\n    //     // background-color: blue;\r\n    //     // height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height});\r\n    // }\r\n\r\n    .submergence-hover br{\r\n        display: none;\r\n    }\r\n\r\n    .weblog-post{\r\n        padding: 10px 30px;\r\n        // text-align: center;\r\n    }\r\n\r\n    .weblog-post * {\r\n        max-width: 750px;\r\n        margin: 2px auto;\r\n        text-align: center;\r\n    }\r\n\r\n    .weblog-post small{\r\n        // margin: 0px;\r\n        display: block;\r\n    }\r\n\r\n    .weblog-post p {\r\n        // text-align: left;\r\n        text-align: justify;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .weblog-post h1 {\r\n        max-width: calc(100vw - 250px);\r\n        display: block;\r\n    }\r\n\r\n    .footer {\r\n        position: fixed;\r\n        background-color: $secondary-color;\r\n        height: $bottom-height;\r\n    }\r\n\r\n    .footer button, .footer a {\r\n        display: inline-block;\r\n        margin: 5px 15px;\r\n        margin-top: 15px;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n}\r\n","@media only screen and (max-width: 769px){\r\n    $header-height:40px;\r\n    $thumbnail-size: 200px;\r\n    $bottom-height: 70px;\r\n    $regular-font-size: 11px;\r\n    $p5-info-height: 40px;\r\n    $p5-info-closed: 26px;\r\n\r\n    body {\r\n        font-size:$regular-font-size;\r\n        height: 100%;\r\n        width: 100vw;\r\n    }\r\n\r\n    html{\r\n        height: 100%;\r\n    }\r\n\r\n    code{\r\n        padding: 0px 4px;\r\n    }\r\n\r\n    h1 {\r\n        // text-shadow: greenyellow -1px 1px 0px, cyan 0px -1px 0px, red 1px 1px 0px;\r\n        // text-shadow: $vhs-shadows-m;\r\n    }\r\n    \r\n    h2 {\r\n        // text-shadow: greenyellow -1px 1px 0px, cyan 0px -1px 0px, red 1px 1px 0px;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .main-body{\r\n        height: 100%;\r\n        width: 100vw;\r\n    }\r\n\r\n    .header {\r\n        text-align: center;\r\n        height:$header-height;\r\n        width: 100vw;\r\n    }\r\n\r\n    .header h1{\r\n        font-size: 28px;\r\n        margin: 0px;\r\n        margin-top: 2px;\r\n        margin-left:8px;\r\n        float: left;\r\n    }\r\n\r\n    .header img {\r\n        height: 30px;\r\n        float: right;\r\n    }\r\n\r\n    .hide-on-web {\r\n        visibility: visible;\r\n    }\r\n\r\n    .hide-on-mobile {\r\n        visibility: hidden;\r\n    }\r\n\r\n\r\n    .popup{\r\n        display:none;\r\n        top: $header-height;\r\n        height: calc(100% - #{$header-height} - #{$bottom-height});\r\n    }\r\n    .navigator img {\r\n        display: none;\r\n    }\r\n\r\n    .navigator button{\r\n        right:5px;\r\n        font-size: $regular-font-size;\r\n    }\r\n\r\n    .navigator input{\r\n        font-size: $regular-font-size;\r\n        width: calc(100% - 45px);\r\n    }\r\n\r\n    .project-thumbnail{\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n        // margin: 10px;\r\n        margin: 10px;\r\n        box-shadow:inset 0 0 $thumbnail-size 50px black, 10px 10px 1px 0px $tertiary-color;\r\n    }\r\n\r\n    .project-thumbnail:first-of-type{\r\n        margin-top: 20px;\r\n    }\r\n    .project-thumbnail:last-of-type{\r\n        margin-bottom: 100px;\r\n    }\r\n    \r\n    .post-thumbnail {\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n        margin: 10px;\r\n        box-shadow:inset 0 0 $thumbnail-size 50px black, 10px 10px 1px 0px $tertiary-color;\r\n    }\r\n\r\n    .post-thumbnail:last-of-type{\r\n        margin-bottom: 100px;\r\n    }\r\n\r\n    .post-thumbnail:first-of-type{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .project-thumbnail p {\r\n        display:none;\r\n    }\r\n\r\n    .project-thumbnail h2 {\r\n        padding: 0px 40px;\r\n    }\r\n\r\n    .project-list {\r\n        margin-top:2px;\r\n        // width: calc(100% - 20px);\r\n        height: calc(100% - (#{$search-height} + #{$header-height} + #{$bottom-height}));\r\n        // height: 100%;\r\n        // max-height: 10px;\r\n        overflow-y: auto;\r\n        // padding: 0px;\r\n        // margin: 0px;\r\n        // padding: 0px 10px;\r\n        // padding-right: 20px;\r\n        margin-left: -10px;\r\n        position: absolute;\r\n        text-align: center;\r\n    }\r\n\r\n    .close-icon {\r\n        // position: sticky;\r\n        position: fixed;\r\n        right: 0px;\r\n        margin-top: 2px;\r\n        height: 30px;\r\n\r\n    }\r\n\r\n    .project-page{\r\n        height: calc(100% - (#{$header-height} + #{$bottom-height}));\r\n        position: absolute;\r\n    }\r\n\r\n    .share-icon {\r\n        display: none;\r\n    }\r\n\r\n    .contact-container {\r\n        width: calc(100vw - 100px);\r\n        text-align: center;\r\n        padding: 30px 50px;\r\n    }\r\n\r\n    .contact-left {\r\n        width: calc(100% - 60px);\r\n        text-align: center;\r\n        float: none;\r\n        padding: 0 30px;\r\n        margin-left: -25px;\r\n    }\r\n    \r\n    .contact-right {\r\n        float: none;\r\n        left: 0px;\r\n        text-align: center;\r\n        position: relative;\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    \r\n    .contact-right h1{\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .contact-thumbnail div{\r\n        font-size: 20px;\r\n        margin-top: 10px;\r\n        // float: right;\r\n    }\r\n\r\n    .about{\r\n        margin: 0 20px;\r\n    }\r\n\r\n    .about-me {\r\n        padding: 15px;\r\n    }\r\n\r\n    .about-me img{\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-top: 10px;\r\n        width: 50%;\r\n    }\r\n    \r\n    .about-me p {\r\n        display: block;\r\n    }\r\n\r\n    // .about-me div{\r\n    //     // margin-top: 20px;\r\n    // }\r\n\r\n    .p5-info h1{\r\n        font-size: 2 * $regular-font-size;\r\n        margin-left: $p5-info-height - 2.5px;\r\n        padding: 5px;\r\n        max-width: 45%;\r\n        max-width: calc(100% - 200px);\r\n        max-height: $p5-info-closed;\r\n        overflow: hidden;\r\n        white-space: nowrap;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .p5-info p{\r\n        text-align: justify;\r\n        padding: 5px;\r\n    }\r\n\r\n    .p5-info button, .p5-info input {\r\n        font-size: $regular-font-size;\r\n        margin-top: 5px;\r\n        position: static;\r\n        display: block;\r\n        float: right;\r\n        margin-right: 5px;\r\n        color: $primary-text-color;\r\n    }\r\n\r\n    .p5-info button{\r\n        padding: 5px;\r\n        margin: 7.5px;\r\n        position: absolute;\r\n        top:-2px;\r\n        right: 35px;\r\n        // top: 10px;\r\n        // right: 10px;\r\n    }\r\n\r\n    .p5-info input{\r\n        width: 165px;\r\n        position: absolute;\r\n        margin: 0;\r\n        margin-top: -2px;\r\n        margin-left: 5px;\r\n        // display: inline/;\r\n        // margin: 0 auto;\r\n        // margin-left: auto;\r\n        // margin-right: auto;\r\n        // padding: 0;\r\n        // margin-top: 12px;\r\n    }\r\n\r\n    .p5-info-slide {\r\n        background: none;\r\n        border: none;\r\n        height: $p5-info-height;\r\n        position:fixed;\r\n        left: 0px;\r\n        margin: 5px;\r\n        margin-top: 3px;\r\n    }\r\n    \r\n    .p5-info-slide img{\r\n        transition: ease-in 0.2s;\r\n        height: 30px;\r\n        // transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n        -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n        // -webkit-filter: $vhs-shadows-drop-l;\r\n        // filter: $vhs-shadows-drop-l;\r\n    }\r\n\r\n    .p5-info-show{\r\n        height: auto;\r\n        padding-bottom: 5px;\r\n        background-color: $primary-color;\r\n    }\r\n\r\n    .p5-info-show::after{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .p5-info-show h1{\r\n        // overflow: none;\r\n        max-height: inherit !important;\r\n        white-space:normal;\r\n        // text-overflow:inherit;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .p5-canvas{\r\n        top: $p5-info-height;\r\n        height: calc(100% - #{$p5-info-height});\r\n        // margin-bottom: -20px;\r\n        padding: 0;\r\n        // margin: 0;\r\n    }\r\n\r\n    .submergence-hover br{\r\n        display: block;\r\n    }\r\n\r\n    .weblog-post{\r\n        padding: 0 10px;\r\n        text-align: center;\r\n        // margin:5px;\r\n        margin-top:10px;\r\n    }\r\n\r\n    .weblog-post p {\r\n        text-align: left;\r\n        line-height: 20px;\r\n    }\r\n\r\n    .footer {\r\n        width: 100%;\r\n        height:$bottom-height;\r\n        // background-color: none;\r\n        background-color: $secondary-color;\r\n        // position: relative;\r\n        position: fixed;\r\n        //position: fixed;\r\n        // background-color: blue;\r\n    }\r\n\r\n    .footer button, .footer a {\r\n        // display: block;\r\n        display: inline-block;\r\n        // margin: 15px auto;\r\n        margin: 7.5px 20px;\r\n        margin-top:15px;\r\n        // text-shadow: $vhs-shadows-s;\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n\r\n    .copyright{\r\n        // text-shadow: $vhs-shadows-s;\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzPzE4MWIiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbWF0Y2gtYnJhY2VzL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3M/M2ZhNyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzPzg3MTgiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdy5jc3M/OTcyZCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXguc2Nzcz8wN2RhIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20tdG9tb3Jyb3cuY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvYXNzZXRzL2ltZy9tdXNpYy1iYW5uZXIuanBnIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2NvcHktdG8tY2xpcGJvYXJkL3ByaXNtLWNvcHktdG8tY2xpcGJvYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2Rvd25sb2FkLWJ1dHRvbi9wcmlzbS1kb3dubG9hZC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9tYXRjaC1icmFjZXMvcHJpc20tbWF0Y2gtYnJhY2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL25vcm1hbGl6ZS13aGl0ZXNwYWNlL3ByaXNtLW5vcm1hbGl6ZS13aGl0ZXNwYWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL3Nob3ctbGFuZ3VhZ2UvcHJpc20tc2hvdy1sYW5ndWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3ByaXNtLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwicHJvcHMiLCJSZWFjdCIsIlByaXNtIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0NBRUE7QUFDQTs7QUFDQTtBQUNBO0NBQzBEOztBQUMxRDtDQUMwRDs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV2QkMsd0RBQUEsQ0FBZ0IsWUFBSTtBQUNsQkMsK0RBQUE7QUFDRCxHQUZELEVBRUUsRUFGRjtBQUZ1QixNQU1iQyxTQU5hLEdBTVlILEtBTlosQ0FNYkcsU0FOYTtBQUFBLE1BTUZDLFNBTkUsR0FNWUosS0FOWixDQU1GSSxTQU5FO0FBT3JCLFNBQ0ksTUFBQyxTQUFELGlKQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESjtBQUdILENBVkQ7O0dBQU1MLEs7O0tBQUFBLEs7QUFZTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHVEQUE0QjtBQUNuRDtBQUNBOzs7Ozs7Ozs7OztBQ05BLFVBQVUsbUJBQU8sQ0FBQyw2TUFBaUc7QUFDbkgsMEJBQTBCLG1CQUFPLENBQUMsc2NBQXNNOztBQUV4Tzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNB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QUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLGFBQWEsUUFBUSxNQUFNLGFBQWEsZUFBZSxhQUFhLFdBQVcsT0FBTyxNQUFNLGFBQWEsZUFBZSxhQUFhLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxjQUFjLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsV0FBVyxRQUFRLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxZQUFZLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxNQUFNLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxhQUFhLGVBQWUsYUFBYSxPQUFPLE1BQU0sYUFBYSxlQUFlLGFBQWEsV0FBVyxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxhQUFhLGVBQWUsUUFBUSxNQUFNLGFBQWEsZUFBZSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksU0FBUyxNQUFNLFlBQVksYUFBYSxZQUFZLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxTQUFTLE1BQU0sWUFBWSxZQUFZLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxPQUFPLEtBQUssV0FBVyxRQUFRLE9BQU8sV0FBVyxTQUFTLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sWUFBWSxhQUFhLFlBQVksWUFBWSxTQUFTLE9BQU8sWUFBWSxhQUFhLFlBQVksWUFBWSxTQUFTLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sWUFBWSxhQUFhLFdBQVcsUUFBUSxPQUFPLFlBQVksYUFBYSxXQUFXLFFBQVEsT0FBTyxZQUFZLGFBQWEsV0FBVyxRQUFRLE9BQU8sWUFBWSxhQUFhLFNBQVMsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxZQUFZLFFBQVEsT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLGFBQWEsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsWUFBWSxZQUFZLFNBQVMsT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFlBQVksV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sVUFBVSxZQUFZLFNBQVMsT0FBTyxZQUFZLGFBQWEsV0FBVyxRQUFRLE9BQU8sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsUUFBUSxPQUFPLFlBQVksWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsU0FBUyxP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SztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUM7Ozs7Ozs7Ozs7O0FDck1EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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OztBQUdBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQSxpQkFBaUI7O0FBRWpCLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QjtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCAnLi4vYXNzZXRzL2Nzcy9pbmRleC5zY3NzJztcclxuXHJcbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJztcclxuaW1wb3J0ICdwcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdy5jc3MnO1xyXG4vLyBpbXBvcnQgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLW9rYWlkaWEuY3NzJztcclxuLy8gaW1wb3J0ICdwcmlzbWpzL3RoZW1lcy9wcmlzbS1mdW5reS5jc3MnXHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhcic7XHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhci5jc3MnO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzJzsgLy8gY2xhc3M9XCJsaW5lLW51bWJlcnNcIlxyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzcyc7XHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL21hdGNoLWJyYWNlcy9wcmlzbS1tYXRjaC1icmFjZXMnOyAvLyBjbGFzcz1cIm1hdGNoLWJyYWNlc1wiXHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL21hdGNoLWJyYWNlcy9wcmlzbS1tYXRjaC1icmFjZXMuY3NzJztcclxuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvY29weS10by1jbGlwYm9hcmQvcHJpc20tY29weS10by1jbGlwYm9hcmQnO1xyXG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9ub3JtYWxpemUtd2hpdGVzcGFjZS9wcmlzbS1ub3JtYWxpemUtd2hpdGVzcGFjZSc7XHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL3Nob3ctbGFuZ3VhZ2UvcHJpc20tc2hvdy1sYW5ndWFnZSc7XHJcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL2Rvd25sb2FkLWJ1dHRvbi9wcmlzbS1kb3dubG9hZC1idXR0b24nO1xyXG5cclxuLy8gUHJpc20uaGlnaGxpZ2h0QWxsKCk7XHJcblxyXG4vLyBpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xyXG5cclxuY29uc3QgTXlBcHAgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcclxuICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7IiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tbGluZS1udW1iZXJzLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tbWF0Y2gtYnJhY2VzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vcHJpc20tbWF0Y2gtYnJhY2VzLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLXRvb2xiYXIuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS10b29sYmFyLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLXRvb2xiYXIuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9wcmlzbS10b21vcnJvdy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLXRvbW9ycm93LmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3ByaXNtLXRvbW9ycm93LmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbNF0hLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vaW5kZXguc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbNF0hLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWlkKycgJytjb3VudC50b1N0cmluZygpO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcjppZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhPydAbWVkaWEgJytvYmoubWVkaWErJyB7JytvYmouY3NzKyd9JzpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPSdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSsnICovJzt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT1mdW5jdGlvbigpe3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGxpc3Qsb3B0aW9ucyl7b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwicHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAzLjhlbTtcXG5cXHRjb3VudGVyLXJlc2V0OiBsaW5lbnVtYmVyO1xcbn1cXG5cXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXS5saW5lLW51bWJlcnMgPiBjb2RlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2hpdGUtc3BhY2U6IGluaGVyaXQ7XFxufVxcblxcbi5saW5lLW51bWJlcnMgLmxpbmUtbnVtYmVycy1yb3dzIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0dG9wOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRsZWZ0OiAtMy44ZW07XFxuXFx0d2lkdGg6IDNlbTsgLyogd29ya3MgZm9yIGxpbmUtbnVtYmVycyBiZWxvdyAxMDAwIGxpbmVzICovXFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTtcXG5cXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcbn1cXG5cXG5cXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRjb3VudGVyLWluY3JlbWVudDogbGluZW51bWJlcjtcXG5cXHR9XFxuXFxuXFx0XFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbjpiZWZvcmUge1xcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIobGluZW51bWJlcik7XFxuXFx0XFx0XFx0Y29sb3I6ICM5OTk7XFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0XFx0cGFkZGluZy1yaWdodDogMC44ZW07XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0XFx0fVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixNQUFNO0NBQ04sZUFBZTtDQUNmLFlBQVk7Q0FDWixVQUFVLEVBQUUsNENBQTRDO0NBQ3hELG9CQUFvQjtDQUNwQiw0QkFBNEI7O0NBRTVCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGlCQUFpQjs7QUFFbEI7O0NBRUM7RUFDQyxjQUFjO0VBQ2QsNkJBQTZCO0NBQzlCOztFQUVDO0dBQ0MsNEJBQTRCO0dBQzVCLFdBQVc7R0FDWCxjQUFjO0dBQ2Qsb0JBQW9CO0dBQ3BCLGlCQUFpQjtFQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJwcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXS5saW5lLW51bWJlcnMge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDMuOGVtO1xcblxcdGNvdW50ZXItcmVzZXQ6IGxpbmVudW1iZXI7XFxufVxcblxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLmxpbmUtbnVtYmVycyA+IGNvZGUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aGl0ZS1zcGFjZTogaW5oZXJpdDtcXG59XFxuXFxuLmxpbmUtbnVtYmVycyAubGluZS1udW1iZXJzLXJvd3Mge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHR0b3A6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGxlZnQ6IC0zLjhlbTtcXG5cXHR3aWR0aDogM2VtOyAvKiB3b3JrcyBmb3IgbGluZS1udW1iZXJzIGJlbG93IDEwMDAgbGluZXMgKi9cXG5cXHRsZXR0ZXItc3BhY2luZzogLTFweDtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5O1xcblxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxufVxcblxcblxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW4ge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBsaW5lbnVtYmVyO1xcblxcdH1cXG5cXG5cXHRcXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuOmJlZm9yZSB7XFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihsaW5lbnVtYmVyKTtcXG5cXHRcXHRcXHRjb2xvcjogIzk5OTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRcXHRwYWRkaW5nLXJpZ2h0OiAwLjhlbTtcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHRcXHR9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWhvdmVyLFxcbi50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1zZWxlY3RlZCB7XFxuXFx0b3V0bGluZTogc29saWQgMXB4O1xcbn1cXG5cXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTEsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC01LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtOSB7XFxuXFx0Y29sb3I6ICNFNTA7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0yLFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtNixcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTEwIHtcXG5cXHRjb2xvcjogIzBCMztcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTMsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC03LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMTEge1xcblxcdGNvbG9yOiAjMjZGO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtNCxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTgsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xMiB7XFxuXFx0Y29sb3I6ICNFMEU7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbWF0Y2gtYnJhY2VzL3ByaXNtLW1hdGNoLWJyYWNlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUMsa0JBQWtCO0FBQ25COztBQUVBOzs7Q0FHQyxXQUFXO0NBQ1gsVUFBVTtBQUNYO0FBQ0E7OztDQUdDLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7QUFDQTs7O0NBR0MsV0FBVztDQUNYLFVBQVU7QUFDWDtBQUNBOzs7Q0FHQyxXQUFXO0NBQ1gsVUFBVTtBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1ob3ZlcixcXG4udG9rZW4ucHVuY3R1YXRpb24uYnJhY2Utc2VsZWN0ZWQge1xcblxcdG91dGxpbmU6IHNvbGlkIDFweDtcXG59XFxuXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xLFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtNSxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTkge1xcblxcdGNvbG9yOiAjRTUwO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMixcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTYsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0xMCB7XFxuXFx0Y29sb3I6ICMwQjM7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC0zLFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtNyxcXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTExIHtcXG5cXHRjb2xvcjogIzI2RjtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4ucmFpbmJvdy1icmFjZXMgLnRva2VuLnB1bmN0dWF0aW9uLmJyYWNlLWxldmVsLTQsXFxuLnJhaW5ib3ctYnJhY2VzIC50b2tlbi5wdW5jdHVhdGlvbi5icmFjZS1sZXZlbC04LFxcbi5yYWluYm93LWJyYWNlcyAudG9rZW4ucHVuY3R1YXRpb24uYnJhY2UtbGV2ZWwtMTIge1xcblxcdGNvbG9yOiAjRTBFO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jb2RlLXRvb2xiYXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAuM2VtO1xcblxcdHJpZ2h0OiAuMmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRvcGFjaXR5OiAwO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyOmhvdmVyID4gLnRvb2xiYXIge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIFNlcGFyYXRlIGxpbmUgYi9jIHJ1bGVzIGFyZSB0aHJvd24gb3V0IGlmIHNlbGVjdG9yIGlzIGludmFsaWQuXFxuICAgSUUxMSBhbmQgb2xkIEVkZ2UgdmVyc2lvbnMgZG9uJ3Qgc3VwcG9ydCA6Zm9jdXMtd2l0aGluLiAqL1xcbmRpdi5jb2RlLXRvb2xiYXI6Zm9jdXMtd2l0aGluID4gLnRvb2xiYXIge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0ge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGEge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcdG92ZXJmbG93OiB2aXNpYmxlO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogZm9yIGJ1dHRvbiAqL1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYSxcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBzcGFuIHtcXG5cXHRjb2xvcjogI2JiYjtcXG5cXHRmb250LXNpemU6IC44ZW07XFxuXFx0cGFkZGluZzogMCAuNWVtO1xcblxcdGJhY2tncm91bmQ6ICNmNWYyZjA7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjIpO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMCAwIHJnYmEoMCwwLDAsMC4yKTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgMCByZ2JhKDAsMCwwLDAuMik7XFxuXFx0Ym9yZGVyLXJhZGl1czogLjVlbTtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGE6aG92ZXIsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGE6Zm9jdXMsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbjpob3ZlcixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gYnV0dG9uOmZvY3VzLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBzcGFuOmhvdmVyLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBzcGFuOmZvY3VzIHtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFdBQVc7Q0FDWCw0Q0FBb0M7Q0FBcEMsb0NBQW9DO0NBQ3BDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTs0REFDNEQ7QUFDNUQ7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFNBQVM7Q0FDVCxjQUFjO0NBQ2QsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLHlCQUF5QixFQUFFLGVBQWU7Q0FDMUMsc0JBQXNCO0NBQ3RCLHFCQUFxQjtBQUN0Qjs7QUFFQTs7O0NBR0MsV0FBVztDQUNYLGVBQWU7Q0FDZixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLG9DQUFvQztDQUNwQyw2Q0FBcUM7U0FBckMscUNBQXFDO0NBQ3JDLG1CQUFtQjtBQUNwQjs7QUFFQTs7Ozs7O0NBTUMsY0FBYztDQUNkLHFCQUFxQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaXYuY29kZS10b29sYmFyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogLjNlbTtcXG5cXHRyaWdodDogLjJlbTtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhcjpob3ZlciA+IC50b29sYmFyIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBTZXBhcmF0ZSBsaW5lIGIvYyBydWxlcyBhcmUgdGhyb3duIG91dCBpZiBzZWxlY3RvciBpcyBpbnZhbGlkLlxcbiAgIElFMTEgYW5kIG9sZCBFZGdlIHZlcnNpb25zIGRvbid0IHN1cHBvcnQgOmZvY3VzLXdpdGhpbi4gKi9cXG5kaXYuY29kZS10b29sYmFyOmZvY3VzLXdpdGhpbiA+IC50b29sYmFyIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXHRvdmVyZmxvdzogdmlzaWJsZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIGZvciBidXR0b24gKi9cXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGEsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3BhbiB7XFxuXFx0Y29sb3I6ICNiYmI7XFxuXFx0Zm9udC1zaXplOiAuOGVtO1xcblxcdHBhZGRpbmc6IDAgLjVlbTtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmMmYwO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMC4yKTtcXG5cXHRib3gtc2hhZG93OiAwIDJweCAwIDAgcmdiYSgwLDAsMCwwLjIpO1xcblxcdGJvcmRlci1yYWRpdXM6IC41ZW07XFxufVxcblxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhOmhvdmVyLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBhOmZvY3VzLFxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciA+IC50b29sYmFyLWl0ZW0gPiBidXR0b246aG92ZXIsXFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyID4gLnRvb2xiYXItaXRlbSA+IGJ1dHRvbjpmb2N1cyxcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3Bhbjpob3ZlcixcXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgPiAudG9vbGJhci1pdGVtID4gc3Bhbjpmb2N1cyB7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBwcmlzbS5qcyB0b21vcnJvdyBuaWdodCBlaWdodGllcyBmb3IgSmF2YVNjcmlwdCwgQ29mZmVlU2NyaXB0LCBDU1MgYW5kIEhUTUxcXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNrZW1wc29uL3RvbW9ycm93LXRoZW1lXFxuICogQGF1dGhvciBSb3NlIFByaXRjaGFyZFxcbiAqL1xcblxcbmNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSxcXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0Y29sb3I6ICNjY2M7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgJ1VidW50dSBNb25vJywgbW9ub3NwYWNlO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0d2hpdGUtc3BhY2U6IHByZTtcXG5cXHR3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG5cXHR3b3JkLWJyZWFrOiBub3JtYWw7XFxuXFx0d29yZC13cmFwOiBub3JtYWw7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG5cXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdHRhYi1zaXplOiA0O1xcblxcblxcdC13ZWJraXQtaHlwaGVuczogbm9uZTtcXG5cXHQtbW96LWh5cGhlbnM6IG5vbmU7XFxuXFx0LW1zLWh5cGhlbnM6IG5vbmU7XFxuXFx0aHlwaGVuczogbm9uZTtcXG5cXG59XFxuXFxuLyogQ29kZSBibG9ja3MgKi9cXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdG1hcmdpbjogLjVlbSAwO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0sXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdGJhY2tncm91bmQ6ICMyZDJkMmQ7XFxufVxcblxcbi8qIElubGluZSBjb2RlICovXFxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRwYWRkaW5nOiAuMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IC4zZW07XFxuXFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXFxuLnRva2VuLmNvbW1lbnQsXFxuLnRva2VuLmJsb2NrLWNvbW1lbnQsXFxuLnRva2VuLnByb2xvZyxcXG4udG9rZW4uZG9jdHlwZSxcXG4udG9rZW4uY2RhdGEge1xcblxcdGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4udG9rZW4ucHVuY3R1YXRpb24ge1xcblxcdGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4udG9rZW4udGFnLFxcbi50b2tlbi5hdHRyLW5hbWUsXFxuLnRva2VuLm5hbWVzcGFjZSxcXG4udG9rZW4uZGVsZXRlZCB7XFxuXFx0Y29sb3I6ICNlMjc3N2E7XFxufVxcblxcbi50b2tlbi5mdW5jdGlvbi1uYW1lIHtcXG5cXHRjb2xvcjogIzYxOTZjYztcXG59XFxuXFxuLnRva2VuLmJvb2xlYW4sXFxuLnRva2VuLm51bWJlcixcXG4udG9rZW4uZnVuY3Rpb24ge1xcblxcdGNvbG9yOiAjZjA4ZDQ5O1xcbn1cXG5cXG4udG9rZW4ucHJvcGVydHksXFxuLnRva2VuLmNsYXNzLW5hbWUsXFxuLnRva2VuLmNvbnN0YW50LFxcbi50b2tlbi5zeW1ib2wge1xcblxcdGNvbG9yOiAjZjhjNTU1O1xcbn1cXG5cXG4udG9rZW4uc2VsZWN0b3IsXFxuLnRva2VuLmltcG9ydGFudCxcXG4udG9rZW4uYXRydWxlLFxcbi50b2tlbi5rZXl3b3JkLFxcbi50b2tlbi5idWlsdGluIHtcXG5cXHRjb2xvcjogI2NjOTljZDtcXG59XFxuXFxuLnRva2VuLnN0cmluZyxcXG4udG9rZW4uY2hhcixcXG4udG9rZW4uYXR0ci12YWx1ZSxcXG4udG9rZW4ucmVnZXgsXFxuLnRva2VuLnZhcmlhYmxlIHtcXG5cXHRjb2xvcjogIzdlYzY5OTtcXG59XFxuXFxuLnRva2VuLm9wZXJhdG9yLFxcbi50b2tlbi5lbnRpdHksXFxuLnRva2VuLnVybCB7XFxuXFx0Y29sb3I6ICM2N2NkY2M7XFxufVxcblxcbi50b2tlbi5pbXBvcnRhbnQsXFxuLnRva2VuLmJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udG9rZW4uaXRhbGljIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50b2tlbi5lbnRpdHkge1xcblxcdGN1cnNvcjogaGVscDtcXG59XFxuXFxuLnRva2VuLmluc2VydGVkIHtcXG5cXHRjb2xvcjogZ3JlZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20tdG9tb3Jyb3cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7O0VBSUU7O0FBRUY7O0NBRUMsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixzRUFBc0U7Q0FDdEUsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZ0JBQWdCOztDQUVoQixnQkFBZ0I7Q0FFaEIsV0FBVzs7Q0FFWCxxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixhQUFhOztBQUVkOztBQUVBLGdCQUFnQjtBQUNoQjtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsY0FBYztBQUNmOztBQUVBOztDQUVDLG1CQUFtQjtBQUNwQjs7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjs7QUFFQTs7Ozs7Q0FLQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Ozs7Q0FJQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7OztDQUdDLGNBQWM7QUFDZjs7QUFFQTs7OztDQUlDLGNBQWM7QUFDZjs7QUFFQTs7Ozs7Q0FLQyxjQUFjO0FBQ2Y7O0FBRUE7Ozs7O0NBS0MsY0FBYztBQUNmOztBQUVBOzs7Q0FHQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogcHJpc20uanMgdG9tb3Jyb3cgbmlnaHQgZWlnaHRpZXMgZm9yIEphdmFTY3JpcHQsIENvZmZlZVNjcmlwdCwgQ1NTIGFuZCBIVE1MXFxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlza2VtcHNvbi90b21vcnJvdy10aGVtZVxcbiAqIEBhdXRob3IgUm9zZSBQcml0Y2hhcmRcXG4gKi9cXG5cXG5jb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0sXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdGNvbG9yOiAjY2NjO1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHdoaXRlLXNwYWNlOiBwcmU7XFxuXFx0d29yZC1zcGFjaW5nOiBub3JtYWw7XFxuXFx0d29yZC1icmVhazogbm9ybWFsO1xcblxcdHdvcmQtd3JhcDogbm9ybWFsO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHQtby10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG5cXG5cXHQtd2Via2l0LWh5cGhlbnM6IG5vbmU7XFxuXFx0LW1vei1oeXBoZW5zOiBub25lO1xcblxcdC1tcy1oeXBoZW5zOiBub25lO1xcblxcdGh5cGhlbnM6IG5vbmU7XFxuXFxufVxcblxcbi8qIENvZGUgYmxvY2tzICovXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHRtYXJnaW46IC41ZW0gMDtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLFxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kOiAjMmQyZDJkO1xcbn1cXG5cXG4vKiBJbmxpbmUgY29kZSAqL1xcbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0cGFkZGluZzogLjFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuM2VtO1xcblxcdHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblxcbi50b2tlbi5jb21tZW50LFxcbi50b2tlbi5ibG9jay1jb21tZW50LFxcbi50b2tlbi5wcm9sb2csXFxuLnRva2VuLmRvY3R5cGUsXFxuLnRva2VuLmNkYXRhIHtcXG5cXHRjb2xvcjogIzk5OTtcXG59XFxuXFxuLnRva2VuLnB1bmN0dWF0aW9uIHtcXG5cXHRjb2xvcjogI2NjYztcXG59XFxuXFxuLnRva2VuLnRhZyxcXG4udG9rZW4uYXR0ci1uYW1lLFxcbi50b2tlbi5uYW1lc3BhY2UsXFxuLnRva2VuLmRlbGV0ZWQge1xcblxcdGNvbG9yOiAjZTI3NzdhO1xcbn1cXG5cXG4udG9rZW4uZnVuY3Rpb24tbmFtZSB7XFxuXFx0Y29sb3I6ICM2MTk2Y2M7XFxufVxcblxcbi50b2tlbi5ib29sZWFuLFxcbi50b2tlbi5udW1iZXIsXFxuLnRva2VuLmZ1bmN0aW9uIHtcXG5cXHRjb2xvcjogI2YwOGQ0OTtcXG59XFxuXFxuLnRva2VuLnByb3BlcnR5LFxcbi50b2tlbi5jbGFzcy1uYW1lLFxcbi50b2tlbi5jb25zdGFudCxcXG4udG9rZW4uc3ltYm9sIHtcXG5cXHRjb2xvcjogI2Y4YzU1NTtcXG59XFxuXFxuLnRva2VuLnNlbGVjdG9yLFxcbi50b2tlbi5pbXBvcnRhbnQsXFxuLnRva2VuLmF0cnVsZSxcXG4udG9rZW4ua2V5d29yZCxcXG4udG9rZW4uYnVpbHRpbiB7XFxuXFx0Y29sb3I6ICNjYzk5Y2Q7XFxufVxcblxcbi50b2tlbi5zdHJpbmcsXFxuLnRva2VuLmNoYXIsXFxuLnRva2VuLmF0dHItdmFsdWUsXFxuLnRva2VuLnJlZ2V4LFxcbi50b2tlbi52YXJpYWJsZSB7XFxuXFx0Y29sb3I6ICM3ZWM2OTk7XFxufVxcblxcbi50b2tlbi5vcGVyYXRvcixcXG4udG9rZW4uZW50aXR5LFxcbi50b2tlbi51cmwge1xcblxcdGNvbG9yOiAjNjdjZGNjO1xcbn1cXG5cXG4udG9rZW4uaW1wb3J0YW50LFxcbi50b2tlbi5ib2xkIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRva2VuLml0YWxpYyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udG9rZW4uZW50aXR5IHtcXG5cXHRjdXJzb3I6IGhlbHA7XFxufVxcblxcbi50b2tlbi5pbnNlcnRlZCB7XFxuXFx0Y29sb3I6IGdyZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWcvbXVzaWMtYmFubmVyLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi1tcy1jbGVhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnV0dG9uLXJlZ3VsYXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICBib3JkZXI6IG5vbmU7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIG1vbm9zcGFjZTtcXG59XFxuXFxuLnBhZ2UtNDA0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwJTtcXG59XFxuXFxuLnBhZ2UtNDA0IGgxIHtcXG4gIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtMXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTFweCAwcHgsIHJlZCAxLjVweCAxcHggMHB4O1xcbn1cXG5cXG4ucGFnZS00MDQgaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBhZ2UtNDA0IGltZzpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbn1cXG5cXG4ucGFnZS00MDQgaDI6aG92ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC0xcHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtMXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDEuNXB4IDFweCAwcHgpO1xcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC0xcHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtMXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDEuNXB4IDFweCAwcHgpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG59XFxuXFxuLnNoYWRvd2VkOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICMyMjIyMjIgMXB4IDFweCAxMHB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMjIyMjIyIDFweCAxcHggMTBweDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgbW9ub3NwYWNlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjRkRGRkZDO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4uaGVhZGVyIDo6c2xvdHRlZCB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXG4gIGhlaWdodDogNjVweDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZzpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coZ3JlZW55ZWxsb3cgLTJweCAwcHggMHB4KSBkcm9wLXNoYWRvdyhjeWFuIDEuNXB4IC0ycHggMHB4KSBkcm9wLXNoYWRvdyhyZWQgMi41cHggMS41cHggMHB4KTtcXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyhncmVlbnllbGxvdyAtMnB4IDBweCAwcHgpIGRyb3Atc2hhZG93KGN5YW4gMS41cHggLTJweCAwcHgpIGRyb3Atc2hhZG93KHJlZCAyLjVweCAxLjVweCAwcHgpO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxufVxcblxcbi5oZWFkZXIgaDE6aG92ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcbn1cXG5cXG4uYW5uaXZlcnNhcnkge1xcbiAgLyogZmYzLjYrICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgI0ZGMjI3NyksIGNvbG9yLXN0b3AoMTAwJSwgYXF1YSkpO1xcbiAgLyogc2FmYXJpNCssY2hyb21lICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZGMjI3NyAwJSwgYXF1YSAxMDAlKTtcXG4gIC8qIHNhZmFyaTUuMSssY2hyb21lMTArICovXFxuICAvKiBvcGVyYSAxMS4xMCsgKi9cXG4gIC8qIGllMTArICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRjIyNzcgMCUsIGFxdWEgMTAwJSk7XFxuICAvKiB3M2MgKi9cXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVxcXCIjMDBmZmZmXFxcIiwgZW5kQ29sb3JzdHI9XFxcIiNmZjAwZmZcXFwiLEdyYWRpZW50VHlwZT0xICk7XFxuICAvKiBpZTYtOSAqL1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5waG9lbml4IHtcXG4gIC8qIGZmMy42KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNDNTI0MzcpLCBjb2xvci1zdG9wKDEwMCUsICNGN0UyN0MpKTtcXG4gIC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNDNTI0MzcgMCUsICNGN0UyN0MgMTAwJSk7XFxuICAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcbiAgLyogb3BlcmEgMTEuMTArICovXFxuICAvKiBpZTEwKyAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjQzUyNDM3IDAlLCAjRjdFMjdDIDEwMCUpO1xcbiAgLyogdzNjICovXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0kcGhvZW5peC1wcmltYXJ5LWNvbG9yLCBlbmRDb2xvcnN0cj0kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcixHcmFkaWVudFR5cGU9MSApO1xcbiAgLyogaWU2LTkgKi9cXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udmhzLWNvbG9yIHtcXG4gIHRleHQtc2hhZG93OiBncmVlbnllbGxvdyAtNXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTVweCAwcHgsIHJlZCAzLjVweCAzLjVweCAwcHg7XFxufVxcblxcbi50ZXJ0aWFyeS10ZXh0LWNvbG9yIHtcXG4gIGNvbG9yOiAjRkYyMjc3O1xcbn1cXG5cXG4ubWFpbi1ncmFkaWVudC10ZXh0IHtcXG4gIC8qIGZmMy42KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNDNTI0MzcpLCBjb2xvci1zdG9wKDEwMCUsICNGN0UyN0MpKTtcXG4gIC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNDNTI0MzcgMCUsICNGN0UyN0MgMTAwJSk7XFxuICAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcbiAgLyogb3BlcmEgMTEuMTArICovXFxuICAvKiBpZTEwKyAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjQzUyNDM3IDAlLCAjRjdFMjdDIDEwMCUpO1xcbiAgLyogdzNjICovXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0kcGhvZW5peC1wcmltYXJ5LWNvbG9yLCBlbmRDb2xvcnN0cj0kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcixHcmFkaWVudFR5cGU9MSApO1xcbiAgLyogaWU2LTkgKi9cXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubWFpbi1ib2R5IHtcXG4gIHRvcDogNzVweDtcXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA3NXB4KTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzVweCk7XFxufVxcblxcbi5wb3B1cCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRvcDogNzVweDtcXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMHZoIC0gNzVweCAtIDcwcHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCAtIDcwcHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XFxcXDkgO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0jMjIwMDAwMDAsZW5kQ29sb3JzdHI9IzIyMDAwMDAwKTtcXG4gIHpvb206IDE7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIge1xcbiAgei1pbmRleDogMTEwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4IDBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucG9wdXAtZGl2IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiA1MDBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMHB4ICNGRjIyNzc7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ucG9wdXAgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAgY29kZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzM5M0U0MTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMzOTNFNDE7XFxufVxcblxcbi5wb3B1cCA+IGRpdiBzbWFsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjRkYyMjc3O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNoYXJlLWJ1dHRvbi1kaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hhcmUtYnV0dG9uLWRpdiA+ICoge1xcbiAgbWFyZ2luOiA1cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG59XFxuXFxuLnNoYXJlLWJ1dHRvbi1kaXYgPiAqOmhvdmVyIC5zaGFyZS1idXR0b24taWNvbiB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICNGRjIyNzcgM3B4IDJweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogI0ZGMjI3NyAzcHggMnB4O1xcbn1cXG5cXG4uc2hhcmUtYnV0dG9uLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxufVxcblxcbi5zaGFyZS1jb3VudC13cmFwcGVyID4gKiB7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnNoYXJlLWxpbmstY29weSB7XFxuICBwYWRkaW5nOiA3LjVweCAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDc7XFxuICBwYWRkaW5nLWJvdHRvbTogODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjIyNzc7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxuICAgICAgICAgIGJveC1zaGFkb3c6ICMzOTNFNDEgNXB4IDIuNXB4O1xcbn1cXG5cXG4uc2hhcmUtbGluayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMzIwcHg7XFxuICBwYWRkaW5nOiA3LjVweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM5M0U0MSA1cHggMi41cHg7XFxufVxcblxcbi5uYXZpZ2F0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIGhlaWdodDogMzVweDtcXG4gIHRvcDogNzVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggIzM5M0U0MTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICMzOTNFNDE7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkYyMjc3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA0NXB4KTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxufVxcblxcbi5uYXZpZ2F0b3IgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggIzM5M0U0MTtcXG59XFxuXFxuLm5hdmlnYXRvciBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI0ZERkZGQztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCAjMzkzRTQxO1xcbn1cXG5cXG4ubmF2aWdhdG9yIGJ1dHRvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgbWFyZ2luOiAxLjI1cHg7XFxuICByaWdodDogNDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweCA4cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICMzOTNFNDEgNXB4IDIuNXB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMzkzRTQxIDVweCAyLjVweDtcXG59XFxuXFxuLm5hdmlnYXRvciBidXR0b246aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMzkzRTQxIDcuNXB4IDIuNXB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAjMzkzRTQxIDcuNXB4IDIuNXB4O1xcbn1cXG5cXG4ubmF2aWdhdG9yIGJ1dHRvbiBpbnB1dCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLm5hdmlnYXRvciBidXR0b24gbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDM1cHggLSA3NXB4IC0gNzBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNXB4IC0gNzVweCAtIDcwcHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmxpbmstZGlzYWJsZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMjUwcHggNzVweCAjMTAxMDEwLCAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDc1cHggIzEwMTAxMCwgMTBweCA3LjVweCAxcHggMHB4ICNGRjIyNzc7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICMzOTNFNDE7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCAyMDBweCBibGFjaywgNXB4IDVweCAxcHggMHB4ICMzOTNFNDE7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiAqIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIGRpdiBwIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnByb2plY3QtdGh1bWJuYWlsIHNtYWxsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAyMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyNTBweCA3NXB4ICMxMDEwMTAsIDEwcHggNy41cHggMXB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjUwcHggNzVweCAjMTAxMDEwLCAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDMwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWw6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1MHB4IDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wb3N0LXRodW1ibmFpbCBkaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnBvc3QtdGh1bWJuYWlsIGRpdiAqIHtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4ucG9zdC10aHVtYm5haWwgZGl2IHAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnBvc3QtdGh1bWJuYWlsIHNtYWxsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAyMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1wYWdlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNsb3NlLWljb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZS1pY29uOmhvdmVyIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxufVxcblxcbi5zaGFyZS1pY29uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICByaWdodDogOTBweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAycHggI0ZGMjI3Nyk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMnB4ICNGRjIyNzcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hhcmUtaWNvbjpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG59XFxuXFxuLmFib3V0LWgxIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hYm91dC1oMiB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmFib3V0LXAge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IC03LjVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3LjVweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5hYm91dC1tZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICMzOTNFNDE7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggNy41cHggMXB4IDBweCAjMzkzRTQxO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5hYm91dC1tZSBpbWcge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjMjIyMjIyIDFweCAxcHggMTBweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogIzIyMjIyMiAxcHggMXB4IDEwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG59XFxuXFxuLmFib3V0LW1lIGltZzpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggNy41cHggMXB4IDBweCAjMzkzRTQxO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggIzM5M0U0MTtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwdncgLSAxMDBweCk7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4uY29udGFjdC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtcmlnaHQgaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNvbnRhY3QtcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYyMjc3O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggIzM5M0U0MTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICMzOTNFNDE7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCA3LjVweCAxcHggMHB4ICNGRjIyNzc7XFxufVxcblxcbi5jb250YWN0LXRodW1ibmFpbDpob3ZlciB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMXB4IDBweCAjRkYyMjc3O1xcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDFweCAwcHggI0ZGMjI3NztcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIGRpdiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gODBweCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNvbnRhY3QtdGh1bWJuYWlsIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4ucDUtaW5mbyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM5M0U0MTtcXG59XFxuXFxuLnA1LWluZm8gaDEge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ucDUtaW5mbyBwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucDUtaW5mbyBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYyMjc3O1xcbn1cXG5cXG4ucDUtaW5mbyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMjI3NztcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICNGREZGRkM7XFxuICBib3JkZXI6IG5vbmU7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAjMzkzRTQxKTtcXG59XFxuXFxuLnA1LWluZm8tc2xpZGUge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNzVweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGxlZnQ6IDI1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5wNS1pbmZvLXNsaWRlIGltZyB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gIGhlaWdodDogNDBweDtcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxufVxcblxcbi5wNS1pbmZvLXNsaWRlIGltZzpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICMzOTNFNDEpO1xcbn1cXG5cXG4ucDUtaW5mby1zaG93IHtcXG4gIHotaW5kZXg6IDU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGMjI3NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXG59XFxuXFxuLnA1LWluZm8tc2hvdyBwIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5wNS1pbmZvLXNob3c6OmFmdGVyIHtcXG4gIHotaW5kZXg6IDIwO1xcbiAgY29udGVudDogXFxcIkhpZGUgdGhpcyBpbmZvcm1hdGlvbiBwYW5lbCB3aXRoIHRoZSBeIGJ1dHRvbiBhYm92ZVxcXCI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDEwLjVweDtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5wNS1jYW52YXMge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDA7XFxuICB0b3A6IDE1MHB4O1xcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCAtIDc1cHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCAtIDcwcHggLSA3NXB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4ud2VibG9nLXNpZ25hdHVyZSB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgY29sb3I6ICNGRjIyNzc7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLm11c2ljLXJlbGVhc2UtYmFubmVyIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDBweDtcXG59XFxuXFxuLm11c2ljLXJlbGVhc2UtYmFubmVyIHAsIC5tdXNpYy1yZWxlYXNlLWJhbm5lciBoMSwgLm11c2ljLXJlbGVhc2UtYmFubmVyIGgyLCAubXVzaWMtcmVsZWFzZS1iYW5uZXIgaDMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiAtbW96LW1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCBibGFjaztcXG59XFxuXFxuLnN1Ym1lcmdlbmNlLWhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDJweCAwcHggIzM5M0U0MSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICMzOTNFNDEpO1xcbn1cXG5cXG4uc3VibWVyZ2VuY2UtaG92ZXIgaW1nIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxufVxcblxcbi5zdWJtZXJnZW5jZS1ob3Zlcjpob3ZlciB7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAwcHggI0ZGMjI3Nyk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggMHB4ICNGRjIyNzcpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZvb3RlciBociB7XFxuICBib3JkZXItY29sb3I6ICNGRjIyNzc7XFxufVxcblxcbi5mb290ZXIgYnV0dG9uLCAuZm9vdGVyIGEge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjRkRGRkZDO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMyMjIyMjI7XFxufVxcblxcbi5mb290ZXIgYnV0dG9uOmhvdmVyLCAuZm9vdGVyIGE6aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI0ZERkZGQztcXG59XFxuXFxuLmNvcHlyaWdodCB7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBjb2xvcjogI0ZGMjI3NztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtc2hhZG93OiAjMjIyMjIyIDJweCAycHggMXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIGgxLCAuaGVhZGVyIGltZyB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDU1cHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLmJ1dHRvbi1yZWd1bGFyIHtcXG4gICAgcGFkZGluZzogNy41cHggMTJweDtcXG4gIH1cXG5cXG4gIC5oaWRlLW9uLXdlYiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5oaWRlLW9uLW1vYmlsZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICAucG9wdXAge1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDAlIC0gNzVweCAtIDcwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDc1cHggLSA3MHB4KTtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0b3IgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAubmF2aWdhdG9yIGJ1dHRvbiB7XFxuICAgIHJpZ2h0OiA0NXB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtbGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSAzNXB4IC0gNzVweCAtIDcwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNXB4IC0gNzVweCAtIDcwcHgpO1xcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcblxcbiAgLnBvc3QtdGh1bWJuYWlsIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6Zmlyc3Qtb2YtdHlwZSwgLnBvc3QtdGh1bWJuYWlsOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSwgLnBvc3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsIHAge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgcCB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgc21hbGwge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4yNXM7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgZGl2IHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMjVzO1xcbiAgfVxcblxcbiAgLmNsb3NlLWljb24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC1wYWdlIHtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSA3NXB4IC0gNzBweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHggLSA3MHB4KTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWxlZnQge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtcmlnaHQge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGxlZnQ6IDQwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDYwdncgLSAxMDBweCk7XFxuICAgIHdpZHRoOiBjYWxjKDYwdncgLSAxMDBweCk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LXJpZ2h0IGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5hYm91dCB7XFxuICAgIG1hcmdpbjogMCAyMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmFib3V0LW1lIGltZyB7XFxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoNTAlIC0gNDIuNXB4KTtcXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gNDIuNXB4KTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICByaWdodDogMDtcXG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lIGRpdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSBkaXYgcCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIHtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgfVxcblxcbiAgLnA1LWluZm8gaDEge1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAucDUtaW5mbyBwIHtcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB9XFxuXFxuICAucDUtaW5mbyBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNy41cHggMTJweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTQ1cHg7XFxuICB9XFxuXFxuICAucDUtaW5mby1zbGlkZSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8tc2xpZGUgaW1nIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggI0ZGMjI3Nyk7XFxuICB9XFxuXFxuICAucDUtaW5mby1zaG93IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNob3c6OmFmdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIC5zdWJtZXJnZW5jZS1ob3ZlciBiciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAud2VibG9nLXBvc3Qge1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICB9XFxuXFxuICAud2VibG9nLXBvc3QgKiB7XFxuICAgIG1heC13aWR0aDogNzUwcHg7XFxuICAgIG1hcmdpbjogMnB4IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC53ZWJsb2ctcG9zdCBzbWFsbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLndlYmxvZy1wb3N0IHAge1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gIH1cXG5cXG4gIC53ZWJsb2ctcG9zdCBoMSB7XFxuICAgIG1heC13aWR0aDogLXdlYmtpdC1jYWxjKDEwMHZ3IC0gMjUwcHgpO1xcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyNTBweCk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciBidXR0b24sIC5mb290ZXIgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiA1cHggMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuXFxuICBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgY29kZSB7XFxuICAgIHBhZGRpbmc6IDBweCA0cHg7XFxuICB9XFxuXFxuICAubWFpbi1ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG5cXG4gIC5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgfVxcblxcbiAgLmhlYWRlciBpbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gIH1cXG5cXG4gIC5oaWRlLW9uLXdlYiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICAuaGlkZS1vbi1tb2JpbGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuXFxuICAucG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA0MHB4IC0gNzBweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCAtIDcwcHgpO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRvciBpbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRvciBidXR0b24ge1xcbiAgICByaWdodDogNXB4O1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxuXFxuICAubmF2aWdhdG9yIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA0NXB4KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ1cHgpO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwMHB4IDUwcHggYmxhY2ssIDEwcHggMTBweCAxcHggMHB4ICNGRjIyNzc7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwMHB4IDUwcHggYmxhY2ssIDEwcHggMTBweCAxcHggMHB4ICNGRjIyNzc7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC10aHVtYm5haWw6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICB9XFxuXFxuICAucG9zdC10aHVtYm5haWwge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwcHggNTBweCBibGFjaywgMTBweCAxMHB4IDFweCAwcHggI0ZGMjI3NztcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwcHggNTBweCBibGFjaywgMTBweCAxMHB4IDFweCAwcHggI0ZGMjI3NztcXG4gIH1cXG5cXG4gIC5wb3N0LXRodW1ibmFpbDpsYXN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5wb3N0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbCBwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRodW1ibmFpbCBoMiB7XFxuICAgIHBhZGRpbmc6IDBweCA0MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtICgzNXB4ICsgNDBweCArIDcwcHgpKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAoMzVweCArIDQwcHggKyA3MHB4KSk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2xvc2UtaWNvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC1wYWdlIHtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtICg0MHB4ICsgNzBweCkpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICg0MHB4ICsgNzBweCkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB9XFxuXFxuICAuc2hhcmUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250YWluZXIge1xcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMHZ3IC0gMTAwcHgpO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1sZWZ0IHtcXG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gNjBweCk7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1yaWdodCB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LXJpZ2h0IGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LXRodW1ibmFpbCBkaXYge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAuYWJvdXQge1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUgcCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLnA1LWluZm8gaDEge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNy41cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWF4LXdpZHRoOiA0NSU7XFxuICAgIG1heC13aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSAyMDBweCk7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xcbiAgICBtYXgtaGVpZ2h0OiAyNnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIHAge1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuXFxuICAucDUtaW5mbyBidXR0b24sIC5wNS1pbmZvIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBjb2xvcjogI0ZERkZGQztcXG4gIH1cXG5cXG4gIC5wNS1pbmZvIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA3LjVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0ycHg7XFxuICAgIHJpZ2h0OiAzNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8gaW5wdXQge1xcbiAgICB3aWR0aDogMTY1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgfVxcblxcbiAgLnA1LWluZm8tc2xpZGUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICB9XFxuXFxuICAucDUtaW5mby1zbGlkZSBpbWcge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAjRkYyMjc3KTtcXG4gIH1cXG5cXG4gIC5wNS1pbmZvLXNob3cge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuICB9XFxuXFxuICAucDUtaW5mby1zaG93OjphZnRlciB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuXFxuICAucDUtaW5mby1zaG93IGgxIHtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIH1cXG5cXG4gIC5wNS1jYW52YXMge1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA0MHB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5zdWJtZXJnZW5jZS1ob3ZlciBiciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLndlYmxvZy1wb3N0IHtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICB9XFxuXFxuICAud2VibG9nLXBvc3QgcCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gIH1cXG5cXG4gIC5mb290ZXIgYnV0dG9uLCAuZm9vdGVyIGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogNy41cHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly9uYXZpZ2F0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly90aHVtYm5haWwuc2Nzc1wiLFwid2VicGFjazovL3Byb2plY3Quc2Nzc1wiLFwid2VicGFjazovL3dlYi12aWV3LnNjc3NcIixcIndlYnBhY2s6Ly9tb2JpbGUtdmlldy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQW1DQTtFQUNFLFNBQUE7RUFDQSw4QkFuQlU7QUFmWjs7QUFxQ0E7RUFDSSx5QkF6Q1k7RUEwQ1osZUFuQmdCO0FBZnBCOztBQXFDQTtFQUVJLGFBQUE7QUFuQ0o7O0FBc0NBO0VBQ0ksYUFBQTtBQW5DSjs7QUFzQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkF4RGE7RUF5RGIsY0F2RGlCO0VBd0RqQixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTFEaUI7RUEyRGpCLFlBQUE7RUFDQSxrREFBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBaERRO0FBYVo7O0FBc0NBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBbkNKOztBQXNDQTtFQUNJLDZFQS9DWTtBQVloQjs7QUFzQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFuQ0o7O0FBMkNBO0VBQ0ksaUNBbEVtQjtFQWtFbkIseUJBbEVtQjtFQW1FbkIscUhBL0RpQjtVQStEakIsNkdBL0RpQjtBQXVCckI7O0FBMkNBO0VBQ0kscUhBakVpQjtVQWlFakIsNkdBakVpQjtFQWtFakIsaUNBeEVtQjtFQXdFbkIseUJBeEVtQjtBQWdDdkI7O0FBNENBO0VBQ0ksaUNBN0VtQjtFQTZFbkIseUJBN0VtQjtFQStFbkIsd0NBeEVVO1VBd0VWLGdDQXhFVTtBQThCZDs7QUErQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQWhIWTtFQWlIWixjQTdH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MWdDRTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFTDZnQ047O0VLeGdDRTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VMMmdDTjs7RUtsZ0NFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUF0UWE7SUF1UWIsZUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFTHFnQ047O0VLbGdDRTtJQUNJLGdDQUFBO0lBQUEsd0JBQUE7SUFDQSxZQUFBO0lBRUEsZ0RBQUE7SUFDQSx3Q0FBQTtFTG9nQ047O0VLLy9CRTtJQUNJLFlBQUE7SUFDQSxtQkFBQTtJQUNBLHlCTC9SUTtFQWl5Q2Q7O0VLLy9CRTtJQUNJLGdCQUFBO0VMa2dDTjs7RUsvL0JFO0lBRUksOEJBQUE7SUFDQSxtQkFBQTtJQUVBLHVCQUFBO0VMZ2dDTjs7RUs3L0JFO0lBQ0ksU0ExU2E7SUEyU2IsaUNBQUE7SUFBQSx5QkFBQTtJQUVBLFVBQUE7RUwrL0JOOztFSzMvQkU7SUFDSSxjQUFBO0VMOC9CTjs7RUszL0JFO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBRUEsZ0JBQUE7RUw2L0JOOztFSzEvQkU7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VMNi9CTjs7RUsxL0JFO0lBQ0ksV0FBQTtJQUNBLFlBclVZO0lBdVVaLHlCTHpVVTtJSzJVVixlQUFBO0VMMi9CTjs7RUt0L0JFO0lBRUkscUJBQUE7SUFFQSxrQkFBQTtJQUNBLGdCQUFBO0VMdS9CTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRwcmltYXJ5LWNvbG9yOiAjMjIyMjIyO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICMzOTNFNDE7XFxyXFxuJHRlcnRpYXJ5LWNvbG9yOiAjRkYyMjc3O1xcclxcbi8vICR0ZXJ0aWFyeS1jb2xvcjogI0NDMDA0NDtcXHJcXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjRkRGRkZDO1xcclxcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzM5M0U0MTtcXHJcXG4kdGVydGlhcnktdGV4dC1jb2xvcjogI0ZGMjI3NztcXHJcXG4vLyAkdGVydGlhcnktdGV4dC1jb2xvcjogI0VFMTE2NjtcXHJcXG4kcGhvZW5peC1wcmltYXJ5LWNvbG9yOiAjQzUyNDM3O1xcclxcbiRwaG9lbml4LXNlY29uZGFyeS1jb2xvcjogI0YwODg0MztcXHJcXG4kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcjogI0Y3RTI3QztcXHJcXG5cXHJcXG4vLyAkdGVydGlhcnktY29sb3I6ICRwaG9lbml4LXByaW1hcnktY29sb3I7XFxyXFxuLy8gJHRlcnRpYXJ5LXRleHQtY29sb3I6ICRwaG9lbml4LXNlY29uZGFyeS1jb2xvcjtcXHJcXG5cXHJcXG4kdGl0bGUtZm9udDogTW9uYWNvLCBtb25vc3BhY2U7XFxyXFxuLy8gJGJvZHktZm9udDogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4vLyAkYm9keS1mb250OiBNb25vc3BhY2U7XFxyXFxuJGJvZHktZm9udDogTW9uYWNvLCBtb25vc3BhY2U7XFxyXFxuJGhlYWRlci1oZWlnaHQ6IDc1cHg7XFxyXFxuJHNlYXJjaC1oZWlnaHQ6IDM1cHg7XFxyXFxuJHRodW1ibmFpbC1zaXplOiAyNTBweDtcXHJcXG4kYm90dG9tLWhlaWdodDogNzBweDtcXHJcXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XFxyXFxuJHA1LWluZm8taGVpZ2h0OiA3NXB4O1xcclxcbiR0aHVtYm5haWwtdHJhbnNpdGlvbjogZWFzZS1pbiAwLjI1cztcXHJcXG4kdmhzLXNoYWRvd3MtbDogZ3JlZW55ZWxsb3cgLTVweCAwcHggMHB4LCBjeWFuIDAuNXB4IC01cHggMHB4LCByZWQgMy41cHggM3B4IDBweDtcXHJcXG4kdmhzLXNoYWRvd3MtbTogZ3JlZW55ZWxsb3cgLTJweCAwcHggMHB4LCBjeWFuIDEuNXB4IC0ycHggMHB4LCByZWQgMi41cHggMS41cHggMHB4O1xcclxcbiR2aHMtc2hhZG93cy1zOiBncmVlbnllbGxvdyAtMXB4IDBweCAwcHgsIGN5YW4gMC41cHggLTFweCAwcHgsIHJlZCAxLjVweCAxcHggMHB4O1xcclxcbiR2aHMtc2hhZG93cy1kcm9wLWw6IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC01cHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAwLjVweCAtNXB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDMuNXB4IDNweCAwcHgpO1xcclxcbiR2aHMtc2hhZG93cy1kcm9wLW06IGRyb3Atc2hhZG93KGdyZWVueWVsbG93IC0ycHggMHB4IDBweCkgZHJvcC1zaGFkb3coY3lhbiAxLjVweCAtMnB4IDBweCkgZHJvcC1zaGFkb3cocmVkIDIuNXB4IDEuNXB4IDBweCk7XFxyXFxuJHZocy1zaGFkb3dzLWRyb3AtczogZHJvcC1zaGFkb3coZ3JlZW55ZWxsb3cgLTFweCAwcHggMHB4KSBkcm9wLXNoYWRvdyhjeWFuIDAuNXB4IC0xcHggMHB4KSBkcm9wLXNoYWRvdyhyZWQgMS41cHggMXB4IDBweCk7XFxyXFxuJGdyZXktc2hhZG93OiAkcHJpbWFyeS1jb2xvciAxcHggMXB4IDEwcHg7XFxyXFxuJGdyZXktc2hhZG93LWRyb3A6IGRyb3Atc2hhZG93KCRwcmltYXJ5LWNvbG9yIDFweCAxcHggMTBweCk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogJGJvZHktZm9udDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICBmb250LXNpemU6JHJlZ3VsYXItZm9udC1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbntcXHJcXG4gICAgLy8td2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotbXMtY2xlYXJ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tcmVndWxhcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggMi41cHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkYm9keS1mb250O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS00MDR7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS00MDQgaDF7XFxyXFxuICAgIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtNDA0IGltZ3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvLyBmaWx0ZXI6Lypkcm9wLXNoYWRvdygkdGVydGlhcnktY29sb3IgMHB4IDBweCA1MHB4KSAqL1xcclxcbiAgICAvLyAgICAgLy8gZHJvcC1zaGFkb3coJHRlcnRpYXJ5LWNvbG9yIDQwcHggMHB4IDBweClcXHJcXG4gICAgLy8gICAgIC8vIGRyb3Atc2hhZG93KCR0ZXJ0aWFyeS1jb2xvciAtNDBweCAwcHggMHB4KVxcclxcbiAgICAvLyAgICAgZHJvcC1zaGFkb3coJHRlcnRpYXJ5LWNvbG9yIDBweCA0MHB4IDBweCk7XFxyXFxuICAgIC8vICAgICAvLyBkcm9wLXNoYWRvdygkdGVydGlhcnktY29sb3IgMHB4IC00MHB4IDBweCk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLTQwNCBpbWc6aG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246ICR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS00MDQgaDI6aG92ZXJ7XFxyXFxuICAgIGZpbHRlcjokdmhzLXNoYWRvd3MtZHJvcC1zO1xcclxcbiAgICB0cmFuc2l0aW9uOiAkdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zaGFkb3dlZDpob3ZlcntcXHJcXG4gICAgdHJhbnNpdGlvbjogJHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcblxcclxcbiAgICBib3gtc2hhZG93OiAkZ3JleS1zaGFkb3c7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6ICR2aHMtc2hhZG93cy1sO1xcclxcbiAgICAvLyB0ZXh0LXNoYWRvdzogJHZocy1zaGFkb3dzLWw7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6JHByaW1hcnktY29sb3I7XFxyXFxuICAgIGNvbG9yOiRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkYm9keS1mb250O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246ICR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuY29kZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICR0aXRsZS1mb250O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciA6OnNsb3R0ZWQge1xcclxcbiAgICBmbG9hdDpsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGltZyB7XFxyXFxuICAgIHRyYW5zaXRpb246ICR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgaGVpZ2h0OiAoJGhlYWRlci1oZWlnaHQgLSAxMCk7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAvLyBib3gtc2hhZG93OiBncmVlbnllbGxvdyAtMS41cHggMS41cHggMHB4LCBjeWFuIDAuNXB4IC0xLjVweCAwcHgsIHJlZCAxLjVweCAxLjVweCAwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaW1nOmhvdmVyIHtcXHJcXG4gICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAgICAgZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1tO1xcclxcbiAgICAgICAgLy8gZmlsdGVyOiAkZ3JleS1zaGFkb3ctZHJvcDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBoMSB7XFxyXFxuICAgIHRyYW5zaXRpb246ICR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgLy8gLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBoMTpob3ZlcntcXHJcXG4gICAgZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpIHJvdGF0ZVkoLTE1ZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5uaXZlcnNhcnkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHRlcnRpYXJ5LWNvbG9yIDAlLCByZ2JhKDAsMjU1LDI1NSwxKSAxMDAlKTsgLyogZmYzLjYrICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCAkdGVydGlhcnktY29sb3IpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMCwyNTUsMjU1LDEpKSk7IC8qIHNhZmFyaTQrLGNocm9tZSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHRlcnRpYXJ5LWNvbG9yIDAlLCByZ2JhKDAsMjU1LDI1NSwxKSAxMDAlKTsgLyogc2FmYXJpNS4xKyxjaHJvbWUxMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkdGVydGlhcnktY29sb3IgMCUsIHJnYmEoMCwyNTUsMjU1LDEpIDEwMCUpOyAvKiBvcGVyYSAxMS4xMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHRlcnRpYXJ5LWNvbG9yIDAlLCByZ2JhKDAsMjU1LDI1NSwxKSAxMDAlKTsgLyogaWUxMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkdGVydGlhcnktY29sb3IgMCUsIHJnYmEoMCwyNTUsMjU1LDEpIDEwMCUpOyAvKiB3M2MgKi9cXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMGZmZmYnLCBlbmRDb2xvcnN0cj0nI2ZmMDBmZicsR3JhZGllbnRUeXBlPTEgKTsgLyogaWU2LTkgKi9cXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnBob2VuaXgge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIGZmMy42KyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgJHBob2VuaXgtcHJpbWFyeS1jb2xvciksIGNvbG9yLXN0b3AoMTAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IpKTsgLyogc2FmYXJpNCssY2hyb21lICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogc2FmYXJpNS4xKyxjaHJvbWUxMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogb3BlcmEgMTEuMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiBpZTEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiB3M2MgKi9cXHJcXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JHBob2VuaXgtcHJpbWFyeS1jb2xvciwgZW5kQ29sb3JzdHI9JHBob2VuaXgtdGVydGlhcnktY29sb3IsR3JhZGllbnRUeXBlPTEgKTsgLyogaWU2LTkgKi9cXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnZocy1jb2xvciB7XFxyXFxuICAgIC8vIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyBcXHJcXG4gICAgLy8gY29sb3I6ICMwMGY7XFxyXFxuICAgIC8vIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgLy8gdGV4dC1zaGFkb3c6ICMwZjAgNXB4IDVweCAxcHgsICNmMDAgMTBweCAxMHB4IDFweDsgLy8sICMwMGYgLTVweCAtNXB4IDBweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IGdyZWVueWVsbG93IC01cHggMHB4IDBweCwgY3lhbiAwLjVweCAtNXB4IDBweCwgcmVkIDMuNXB4IDMuNXB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlcnRpYXJ5LXRleHQtY29sb3J7XFxyXFxuICAgIGNvbG9yOiAkdGVydGlhcnktdGV4dC1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tZ3JhZGllbnQtdGV4dCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yIDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvciAxMDAlKTsgLyogZmYzLjYrICovXFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCAkcGhvZW5peC1wcmltYXJ5LWNvbG9yKSwgY29sb3Itc3RvcCgxMDAlLCAkcGhvZW5peC10ZXJ0aWFyeS1jb2xvcikpOyAvKiBzYWZhcmk0KyxjaHJvbWUgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiBzYWZhcmk1LjErLGNocm9tZTEwKyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICRwaG9lbml4LXByaW1hcnktY29sb3IgMCUsICRwaG9lbml4LXRlcnRpYXJ5LWNvbG9yIDEwMCUpOyAvKiBvcGVyYSAxMS4xMCsgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIGllMTArICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBob2VuaXgtcHJpbWFyeS1jb2xvciAwJSwgJHBob2VuaXgtdGVydGlhcnktY29sb3IgMTAwJSk7IC8qIHczYyAqL1xcclxcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0kcGhvZW5peC1wcmltYXJ5LWNvbG9yLCBlbmRDb2xvcnN0cj0kcGhvZW5peC10ZXJ0aWFyeS1jb2xvcixHcmFkaWVudFR5cGU9MSApOyAvKiBpZTYtOSAqL1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vLyAuaGVhZGVyIGgxOmhvdmVyIHtcXHJcXG4vLyAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4vLyAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuLm1haW4tYm9keXtcXHJcXG4gICAgdG9wOiAkaGVhZGVyLWhlaWdodDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWFkZXItaGVpZ2h0fSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTAxO1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgdG9wOiAkaGVhZGVyLWhlaWdodDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWJ1dHRvbntcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTAxO1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgLy8gdG9wOiAkaGVhZGVyLWhlaWdodDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSk7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiKDAsMCwwKTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcXFxcOTtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuOCk7XFxyXFxuICAgIGZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0jMjIwMDAwMDAsZW5kQ29sb3JzdHI9IzIyMDAwMDAwKTtcXHJcXG4gICAgem9vbTogMTtcXHJcXG4gICAgd2lkdGg6MTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXJ7XFxyXFxuICAgIHotaW5kZXg6IDExMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC8vIHBhZGRpbmc6MTAwcHggMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xcclxcbiAgICAvLyBtYXJnaW4tdG9wOjUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgY29sb3I6JHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgY29kZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDEwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwID4gZGl2IHNtYWxsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29sb3I6ICR0ZXJ0aWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBtYXJnaW4tdG9wOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1idXR0b24tZGl2e1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1idXR0b24tZGl2ID4gKntcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCg2ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtYnV0dG9uLWRpdiA+ICo6aG92ZXIge1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcblxcclxcbiAgICAuc2hhcmUtYnV0dG9uLWljb257XFxyXFxuICAgICAgICBib3gtc2hhZG93OiR0ZXJ0aWFyeS1jb2xvciAzcHggMnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1idXR0b24taWNvbntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAkc2Vjb25kYXJ5LWNvbG9yIDVweCAyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlLWNvdW50LXdyYXBwZXIgPiAqe1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweCA2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1saW5rLWNvbnRhaW5lcntcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1saW5rLWNvcHl7XFxyXFxuICAgIHBhZGRpbmc6IDcuNXB4IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA3O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogODtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAvLyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG4gICAgLy8gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6ICRzZWNvbmRhcnktY29sb3IgNXB4IDIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhcmUtbGlua3tcXHJcXG5cXHJcXG4gICAgLy8gLW1vei11c2VyLXNlbGVjdDogYWxsO1xcclxcbiAgICAvLyAtd2Via2l0LXVzZXItc2VsZWN0OiBhbGw7XFxyXFxuICAgIC8vIC1tcy11c2VyLXNlbGVjdDogYWxsO1xcclxcbiAgICAvLyB1c2VyLXNlbGVjdDogYWxsO1xcclxcblxcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgcGFkZGluZzogNy41cHg7XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIC8vIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6ICRzZWNvbmRhcnktY29sb3IgNXB4IDIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AaW1wb3J0ICcuL25hdmlnYXRpb24uc2Nzcyc7XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRzZWFyY2gtaGVpZ2h0fSAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay1kaXNhYmxlZCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBpbXBvcnQgJy4vdGh1bWJuYWlsLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vcHJvamVjdC5zY3NzJztcXHJcXG5cXHJcXG4uZm9vdGVye1xcclxcbiAgICBoZWlnaHQ6ICRib3R0b20taGVpZ2h0O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGhye1xcclxcbiAgICBib3JkZXItY29sb3I6JHRlcnRpYXJ5LWNvbG9yXFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYnV0dG9uLCAuZm9vdGVyIGF7XFxyXFxuICAgIGZvbnQtc2l6ZTokcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yOyAgICBcXHJcXG4gICAgLy8gdGV4dC1zaGFkb3c6ICRwcmltYXJ5LWNvbG9yIDJweCAycHggMXB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGF7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAkcHJpbWFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBidXR0b246aG92ZXIsIC5mb290ZXIgYTpob3ZlciB7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5jb3B5cmlnaHQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIGNvbG9yOiR0ZXJ0aWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6ICRwcmltYXJ5LWNvbG9yIDJweCAycHggMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AaW1wb3J0ICd3ZWItdmlldy5zY3NzJztcXHJcXG5AaW1wb3J0ICdtb2JpbGUtdmlldy5zY3NzJztcIixcIi5uYXZpZ2F0b3Ige1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGhlaWdodDogJHNlYXJjaC1oZWlnaHQ7XFxyXFxuICAgIHRvcDogJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRvciBpbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgaGVpZ2h0OiAkc2VhcmNoLWhlaWdodCAtIDEwO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdG9yIGlucHV0IHtcXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDEwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAkc2VhcmNoLWhlaWdodCAtIDIwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIGNvbG9yOiRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDokc2VhcmNoLWhlaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRvciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjokcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICAvLyB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDIuNXB4ICRzZWNvbmRhcnktdGV4dC1jb2xvciwgMXB4IC0xcHggMi41cHggJHNlY29uZGFyeS10ZXh0LWNvbG9yLCAtMXB4IDFweCAyLjVweCAkc2Vjb25kYXJ5LXRleHQtY29sb3IsIDFweCAxcHggMi41cHggJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdG9yIGJ1dHRvbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4zcztcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogJHNlYXJjaC1oZWlnaHQgLSA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICBtYXJnaW46IDEuMjVweDtcXHJcXG4gICAgcmlnaHQ6ICRzZWFyY2gtaGVpZ2h0KzEwcHg7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCg2ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogJHNlY29uZGFyeS1jb2xvciA3LjVweCAyLjVweDtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgYm94LXNoYWRvdzogJHNlY29uZGFyeS1jb2xvciA1cHggMi41cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0b3IgYnV0dG9uOmhvdmVye1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoNmRlZykgcm90YXRlWSgtMjBkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIGJveC1zaGFkb3c6ICRzZWNvbmRhcnktY29sb3IgNy41cHggMi41cHg7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyk7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6ICRzZWNvbmRhcnktY29sb3IgNXB4IDIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdG9yIGJ1dHRvbiBpbnB1dHtcXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICBub25lO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6ICAgICAgICAgbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDpub25lO1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgY29sb3I6JHByaW1hcnktdGV4dC1jb2xvcjtcXHJcXG4gICAgd2lkdGg6ICRzZWFyY2gtaGVpZ2h0IC0gMjA7XFxyXFxuICAgIGhlaWdodDogJHNlYXJjaC1oZWlnaHQgLSAyMDtcXHJcXG4gICAgZmxvYXQ6bGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRvciBidXR0b24gbGFiZWx7XFxyXFxuICAgIG1hcmdpbi10b3A6MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbiAgICBmbG9hdDpyaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXHJcXG4vLyAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4vLyAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxyXFxuLy8gICAgIG1hcmdpbi10b3A6IC0xLjVweDtcXHJcXG4vLyAgICAgaGVpZ2h0OiAxNnB4O1xcclxcbi8vICAgICB3aWR0aDogMTZweDtcXHJcXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjYsIDE2NiwgMTY2KTtcXHJcXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbi8vICAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjI1KTtcXHJcXG4vLyAgfVxcclxcblxcclxcbi8vICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgJHRlcnRpYXJ5LWNvbG9yO1xcclxcblxcclxcbi8vICB9XFxyXFxuXFxyXFxuLy8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjphZnRlciB7XFxyXFxuLy8gICAgIGNvbnRlbnQ6ICcnO1xcclxcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuLy8gICAgIHdpZHRoOiAxMXB4O1xcclxcbi8vICAgICBoZWlnaHQ6IDRweDtcXHJcXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbi8vICAgICB0b3A6IDExcHg7XFxyXFxuLy8gICAgIGxlZnQ6IDEwLjlweDtcXHJcXG4vLyAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxyXFxuLy8gICAgIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuLy8gICAgIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4vLyAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbi8vICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuLy8gICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuLy8gICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbi8vICB9XCIsXCIucHJvamVjdC10aHVtYm5haWwge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcclxcbiAgICAvLyBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgNzVweCAjMTAxMDEwLCA1cHggNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDc1cHggIzEwMTAxMCwxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDc1cHggIzEwMTAxMCwgJHZocy1zaGFkb3dzLWw7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgIHdpZHRoOiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGh1bWJuYWlsOmhvdmVyIHtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSAyMDBweCBibGFjaywxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgMjAwcHggYmxhY2ssIDVweCA1cHggMXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aHVtYm5haWwgZGl2IHtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIC8vIGRpc3BsYXk6dGFibGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6JHRodW1ibmFpbC1zaXplO1xcclxcbiAgICAvL2hlaWdodDogMTAwJTtcXHJcXG4gICAgLy8gbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRodW1ibmFpbCBkaXYgKntcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aHVtYm5haWwgZGl2IHAge1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGh1bWJuYWlsIHNtYWxsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIG1heC13aWR0aDogJHRodW1ibmFpbC1zaXplIC0gMjBweDtcXHJcXG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSA3NXB4ICMxMDEwMTAsIDVweCA1cHggMXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgNzVweCAjMTAxMDEwLDEwcHggNy41cHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgIHdpZHRoOiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKSByb3RhdGVZKC0xNWRlZykgcm90YXRlWigxZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtdGh1bWJuYWlsOmhvdmVyIHtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSAyMDBweCBibGFjaywxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzppbnNldCAwIDAgJHRodW1ibmFpbC1zaXplIDIwMHB4IGJsYWNrLCA1cHggNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LXRodW1ibmFpbDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC10aHVtYm5haWwgZGl2IHtcXHJcXG4gICAgLy8gZGlzcGxheTp0YWJsZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDokdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgIC8vaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvLyBtYXJnaW4tdG9wOiAxMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtdGh1bWJuYWlsIGRpdiAqe1xcclxcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtdGh1bWJuYWlsIGRpdiBwIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtdGh1bWJuYWlsIHNtYWxsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIG1heC13aWR0aDogJHRodW1ibmFpbC1zaXplIC0gMjBweDtcXHJcXG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxufVwiLFwiLnByb2plY3QtcGFnZSB7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLy8gLnByb2plY3QtcGFnZSBoMTpmaXJzdC1vZi10eXBle1xcclxcbi8vICAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuLy8gLnByb2plY3QtcGFnZSBwOmZpcnN0LW9mLXR5cGV7XFxyXFxuLy8gICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuLy8gICAgIHBhZGRpbmctdG9wOiAwcHg7XFxyXFxuLy8gfVxcclxcblxcclxcbi5jbG9zZS1pY29uIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAvLyBwb3NpdGlvbjpzdGlja3k7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIHJpZ2h0OiAzNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTVkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgLy8gZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOmhvdmVyIHtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICAvL3RleHQtc2hhZG93OiAxMHB4IDEwcHggMHB4ICNGRjIyNzc7XFxyXFxuICAgIC8vIC13ZWJraXQtZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1tO1xcclxcbiAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLW07XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1pY29uIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAvLyBwb3NpdGlvbjpzdGlja3k7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICByaWdodDogOTBweDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTVkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAycHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDJweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgLy8gZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1sO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZS1pY29uOmhvdmVyIHtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIuNXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICAvLyBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICAvL3RleHQtc2hhZG93OiAxMHB4IDEwcHggMHB4ICNGRjIyNzc7XFxyXFxuICAgIC8vIC13ZWJraXQtZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1zO1xcclxcbiAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLXM7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1oMXtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaDJ7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgLy8gbWFyZ2luLXRvcDozMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMTBweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3gtc2hhZG93OjEwcHggNy41cHggMXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgLy8gdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTcuNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNy41cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1tZXtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAvLyBib3gtc2hhZG93OiBibGFjayAxcHggMXB4IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6MTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1tZSBpbWd7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogJHByaW1hcnktY29sb3IgMXB4IDFweCAxMHB4O1xcclxcbiAgICAvLyBib3gtc2hhZG93OiAxMHB4IDcuNXB4IDFweCAwcHggJHByaW1hcnktY29sb3I7XFxyXFxuICAgIC8vIGhlaWdodDogMjBweDtcXHJcXG4gICAgLy8gd2lkdGg6IDEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LW1lIGltZzpob3ZlcntcXHJcXG4gICAgYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHNlY29uZGFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMDBweCk7XFxyXFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiRjb250YWN0LWxlZnQ6IDQwJTtcXHJcXG5cXHJcXG4uY29udGFjdC1sZWZ0IHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHdpZHRoOiAkY29udGFjdC1sZWZ0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXJpZ2h0IGgxe1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1we1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC8vIGJveC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMTBweDtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzoxMHB4IDcuNXB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OjEwcHggNy41cHggMXB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC10aHVtYm5haWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZykgcm90YXRlWSgtMTVkZWcpIHJvdGF0ZVooMWRlZyk7XFxyXFxuICAgIGJveC1zaGFkb3c6MTBweCA3LjVweCAxcHggMHB4ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdGh1bWJuYWlsOmhvdmVye1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xcclxcbiAgICBib3gtc2hhZG93OjVweCA1cHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXRodW1ibmFpbCBkaXZ7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC10aHVtYm5haWwgaW1ne1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ucDUtaW5mbyBoMXtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICBmb250LXNpemU6IDMgKiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAkcDUtaW5mby1oZWlnaHQgKyAyNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8gcHtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4ycztcXHJcXG4gICAgLy8gbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvIGlucHV0IHtcXHJcXG4gICAgLy8gei1pbmRleDogMjA7XFxyXFxuICAgIC8vIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAvLyBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIC8vIG1hcmdpbjogMTBweDtcXHJcXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAvLyB0b3A6JGhlYWRlci1oZWlnaHQrMTJweDtcXHJcXG4gICAgLy8gcmlnaHQ6IDE0NXB4O1xcclxcbiAgICAvLyB3aWR0aDogODBweDtcXHJcXG4gICAgLy8gbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8gYnV0dG9uIHtcXHJcXG4gICAgLy8gdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgLy8gdG9wOiRoZWFkZXItaGVpZ2h0KyAxMnB4O1xcclxcbiAgICAvLyByaWdodDogMTQ1cHg7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggMi41cHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyLjVweCAwcHggJHNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvLXNsaWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBoZWlnaHQ6ICRwNS1pbmZvLWhlaWdodDtcXHJcXG4gICAgLy8gbWFyZ2luOiA1cHg7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIGxlZnQ6IDI1cHg7XFxyXFxuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAvLyByaWdodDogMzVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8tc2xpZGUgaW1ne1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDE1ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCA1cHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8tc2xpZGUgaW1nOmhvdmVyIHtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcXHJcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAycHggMHB4ICRzZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICAvL3RleHQtc2hhZG93OiAxMHB4IDEwcHggMHB4ICNGRjIyNzc7XFxyXFxuICAgIC8vIC13ZWJraXQtZmlsdGVyOiAkdmhzLXNoYWRvd3MtZHJvcC1tO1xcclxcbiAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLW07XFxyXFxufVxcclxcblxcclxcbi5wNS1pbmZvLXNob3d7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIC8vIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8tc2hvdyBwe1xcclxcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjJzO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWluZm8tc2hvdzo6YWZ0ZXJ7XFxyXFxuICAgIHotaW5kZXg6IDIwO1xcclxcbiAgICBjb250ZW50OiBcXFwiSGlkZSB0aGlzIGluZm9ybWF0aW9uIHBhbmVsIHdpdGggdGhlIF4gYnV0dG9uIGFib3ZlXFxcIjtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXNpemU6IDAuNzUgKiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgIC8vIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgLy8gYm90dG9tOiBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnA1LWNhbnZhc3tcXHJcXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICAgIC8vIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIHRvcDogJHA1LWluZm8taGVpZ2h0ICsgJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0gLSAjeyRwNS1pbmZvLWhlaWdodH0pO1xcclxcbiAgICAvLyBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSAtICN7JHA1LWluZm8taGVpZ2h0fSAtIDEwcHgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VibG9nLXNpZ25hdHVyZXtcXHJcXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gICAgY29sb3I6JHRlcnRpYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tdXNpYy1yZWxlYXNlLWJhbm5lcntcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9tdXNpYy1iYW5uZXIuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246MCUgMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm11c2ljLXJlbGVhc2UtYmFubmVyIHAsLm11c2ljLXJlbGVhc2UtYmFubmVyIGgxLC5tdXNpYy1yZWxlYXNlLWJhbm5lciBoMiwubXVzaWMtcmVsZWFzZS1iYW5uZXIgaDMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWVyZ2VuY2UtaG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxyXFxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMnB4IDBweCAkc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1lcmdlbmNlLWhvdmVyIGltZ3tcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1lcmdlbmNlLWhvdmVyOmhvdmVye1xcclxcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTVkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNnB4IDVweCAwcHggJHRlcnRpYXJ5LWNvbG9yKTtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDBweCAkdGVydGlhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyAuc3VibWVyZ2VuY2UtaG92ZXI6aG92ZXIgaW1nIHtcXHJcXG4vLyAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG4vLyB9XFxyXFxuXCIsXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KXtcXHJcXG4gICAgJGhlYWRlci1oZWlnaHQ6NzVweDtcXHJcXG4gICAgJHRodW1ibmFpbC1zaXplOiAyNTBweDtcXHJcXG4gICAgJGJvdHRvbS1oZWlnaHQ6IDcwcHg7XFxyXFxuXFxyXFxuICAgIGJvZHl7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtbDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6ICR2aHMtc2hhZG93cy1zO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaDEsIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkaGVhZGVyLWhlaWdodCAtIDIwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaDEge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgLy8gZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIC8vIGJvdHRvbTogM3B4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgICAgIC8vIGdyZWVueWVsbG93IC01cHggMHB4IDBweCwgY3lhbiAwLjVweCAtNXB4IDBweCwgcmVkIDMuNXB4IDNweCAwcHg7XFxyXFxuICAgICAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtcztcXHJcXG4gICAgICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9uLXJlZ3VsYXIge1xcclxcbiAgICAgICAgcGFkZGluZzogNy41cHggMTJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGlkZS1vbi13ZWIge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oaWRlLW9uLW1vYmlsZSB7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wb3B1cHtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVhZGVyLWhlaWdodH0gLSAjeyRib3R0b20taGVpZ2h0fSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmlnYXRvciBpbWcge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmlnYXRvciBidXR0b257XFxyXFxuICAgICAgICByaWdodDokc2VhcmNoLWhlaWdodCsxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICAgICAgbWFyZ2luOjA7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRzZWFyY2gtaGVpZ2h0fSAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAgICAgaGVpZ2h0OiR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBvc3QtdGh1bWJuYWlsIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAgICAgaGVpZ2h0OiR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsOmZpcnN0LW9mLXR5cGUsIC5wb3N0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6bGFzdC1vZi10eXBlLCAucG9zdC10aHVtYm5haWw6bGFzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbCBwIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgcCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiR0aHVtYm5haWwtdHJhbnNpdGlvbjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbDpob3ZlciBzbWFsbHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246JHRodW1ibmFpbC10cmFuc2l0aW9uO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6aG92ZXIgZGl2e1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjokdGh1bWJuYWlsLXRyYW5zaXRpb247XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmNsb3NlLWljb257XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtcGFnZXtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0LWxlZnQge1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICB3aWR0aDogJGNvbnRhY3QtbGVmdDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jb250YWN0LXJpZ2h0IHtcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoMC40ICogKDEwMHZ3KSk7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygwLjYgKiAoMTAwdncpIC0gMTAwcHgpO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHggNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNvbnRhY3QtcmlnaHQgaDF7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAuYWJvdXR7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMjAlO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC1tZSBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA0Mi41cHgpO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgICAgICAvLyBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmFib3V0LW1lIGRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gICAgICAgIC8vIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC1tZSBkaXYgcCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtbWU6bGFzdC1jaGlsZHtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZve1xcclxcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6ICRwNS1pbmZvLWhlaWdodDtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IC01cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucDUtaW5mbyBoMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMyAqICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkcDUtaW5mby1oZWlnaHQgKyAyNXB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIH0gICBcXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gcHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNzUwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mbyBpbnB1dCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAvLyB0b3A6IDA7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcXHJcXG4gICAgICAgIC8vIGJvdHRvbTogJGJvdHRvbS1oZWlnaHQ7XFxyXFxuICAgICAgICAvLyB0b3A6JGhlYWRlci1oZWlnaHQgKyAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gYnV0dG9uIHtcXHJcXG4gICAgICAgIC8vIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcGFkZGluZzogNy41cHggMTJweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgIC8vIHRvcDokaGVhZGVyLWhlaWdodCsgMTJweDtcXHJcXG4gICAgICAgIHRvcDogMTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxNDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zbGlkZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICAgICAgbGVmdDogMjVweDtcXHJcXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgICAgIC8vIHJpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnA1LWluZm8tc2xpZGUgaW1ne1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGVYKDE1ZGVnKSByb3RhdGVZKC0yMGRlZykgcm90YXRlWigxZGVnKTtcXHJcXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2cHggNXB4IDVweCAkdGVydGlhcnktY29sb3IpO1xcclxcbiAgICAgICAgLy8gLXdlYmtpdC1maWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgICAgICAvLyBmaWx0ZXI6ICR2aHMtc2hhZG93cy1kcm9wLWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8tc2hvd3tcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvLXNob3c6OmFmdGVye1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAucDUtY2FudmFzIHtcXHJcXG4gICAgLy8gICAgIC8vIG1hcmdpbi10b3A6ICRwNS1pbmZvLWhlaWdodDtcXHJcXG4gICAgLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIC8vICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItaGVpZ2h0fSAtICN7JGJvdHRvbS1oZWlnaHR9IC0gI3skcDUtaW5mby1oZWlnaHR9KTtcXHJcXG4gICAgLy8gfVxcclxcblxcclxcbiAgICAuc3VibWVyZ2VuY2UtaG92ZXIgYnJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53ZWJsb2ctcG9zdHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3QgKiB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAycHggYXV0bztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3Qgc21hbGx7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53ZWJsb2ctcG9zdCBwIHtcXHJcXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0IGgxIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDI1MHB4KTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgICAgIGhlaWdodDogJGJvdHRvbS1oZWlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciBidXR0b24sIC5mb290ZXIgYSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpe1xcclxcbiAgICAkaGVhZGVyLWhlaWdodDo0MHB4O1xcclxcbiAgICAkdGh1bWJuYWlsLXNpemU6IDIwMHB4O1xcclxcbiAgICAkYm90dG9tLWhlaWdodDogNzBweDtcXHJcXG4gICAgJHJlZ3VsYXItZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICAkcDUtaW5mby1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgICRwNS1pbmZvLWNsb3NlZDogMjZweDtcXHJcXG5cXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBmb250LXNpemU6JHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGh0bWx7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgY29kZXtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDBweCA0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6IGdyZWVueWVsbG93IC0xcHggMXB4IDBweCwgY3lhbiAwcHggLTFweCAwcHgsIHJlZCAxcHggMXB4IDBweDtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6IGdyZWVueWVsbG93IC0xcHggMXB4IDBweCwgY3lhbiAwcHggLTFweCAwcHgsIHJlZCAxcHggMXB4IDBweDtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbi1ib2R5e1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiRoZWFkZXItaGVpZ2h0O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjhweDtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGlkZS1vbi13ZWIge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGlkZS1vbi1tb2JpbGUge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5wb3B1cHtcXHJcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgICAgIHRvcDogJGhlYWRlci1oZWlnaHQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlYWRlci1oZWlnaHR9IC0gI3skYm90dG9tLWhlaWdodH0pO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZpZ2F0b3IgaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmlnYXRvciBidXR0b257XFxyXFxuICAgICAgICByaWdodDo1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2aWdhdG9yIGlucHV0e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkcmVndWxhci1mb250LXNpemU7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlse1xcclxcbiAgICAgICAgaGVpZ2h0OiR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAkdGh1bWJuYWlsLXNpemU7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICBib3gtc2hhZG93Omluc2V0IDAgMCAkdGh1bWJuYWlsLXNpemUgNTBweCBibGFjaywgMTBweCAxMHB4IDFweCAwcHggJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWw6bGFzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5wb3N0LXRodW1ibmFpbCB7XFxyXFxuICAgICAgICBoZWlnaHQ6JHRodW1ibmFpbC1zaXplO1xcclxcbiAgICAgICAgd2lkdGg6ICR0aHVtYm5haWwtc2l6ZTtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwICR0aHVtYm5haWwtc2l6ZSA1MHB4IGJsYWNrLCAxMHB4IDEwcHggMXB4IDBweCAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBvc3QtdGh1bWJuYWlsOmxhc3Qtb2YtdHlwZXtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wb3N0LXRodW1ibmFpbDpmaXJzdC1vZi10eXBle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdC10aHVtYm5haWwgcCB7XFxyXFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGh1bWJuYWlsIGgyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDBweCA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDoycHg7XFxyXFxuICAgICAgICAvLyB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICgjeyRzZWFyY2gtaGVpZ2h0fSArICN7JGhlYWRlci1oZWlnaHR9ICsgI3skYm90dG9tLWhlaWdodH0pKTtcXHJcXG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICAgICAgLy8gcGFkZGluZzogMHB4O1xcclxcbiAgICAgICAgLy8gbWFyZ2luOiAwcHg7XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNsb3NlLWljb24ge1xcclxcbiAgICAgICAgLy8gcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtcGFnZXtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gKCN7JGhlYWRlci1oZWlnaHR9ICsgI3skYm90dG9tLWhlaWdodH0pKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2hhcmUtaWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdC1sZWZ0IHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY29udGFjdC1yaWdodCB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNvbnRhY3QtcmlnaHQgaDF7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0LXRodW1ibmFpbCBkaXZ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgICAgLy8gZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC1tZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dC1tZSBpbWd7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5hYm91dC1tZSBwIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5hYm91dC1tZSBkaXZ7XFxyXFxuICAgIC8vICAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICAvLyB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvIGgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyICogJHJlZ3VsYXItZm9udC1zaXplO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRwNS1pbmZvLWhlaWdodCAtIDIuNXB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6ICRwNS1pbmZvLWNsb3NlZDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gcHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gYnV0dG9uLCAucDUtaW5mbyBpbnB1dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnA1LWluZm8gYnV0dG9ue1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA3LjVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDotMnB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDM1cHg7XFxyXFxuICAgICAgICAvLyB0b3A6IDEwcHg7XFxyXFxuICAgICAgICAvLyByaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mbyBpbnB1dHtcXHJcXG4gICAgICAgIHdpZHRoOiAxNjVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLztcXHJcXG4gICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zbGlkZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucDUtaW5mby1zbGlkZSBpbWd7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVgoMTVkZWcpIHJvdGF0ZVkoLTIwZGVnKSByb3RhdGVaKDFkZWcpO1xcclxcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDZweCA1cHggNXB4ICR0ZXJ0aWFyeS1jb2xvcik7XFxyXFxuICAgICAgICAvLyAtd2Via2l0LWZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgICAgIC8vIGZpbHRlcjogJHZocy1zaGFkb3dzLWRyb3AtbDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zaG93e1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wNS1pbmZvLXNob3c6OmFmdGVye1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtaW5mby1zaG93IGgxe1xcclxcbiAgICAgICAgLy8gb3ZlcmZsb3c6IG5vbmU7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTpub3JtYWw7XFxyXFxuICAgICAgICAvLyB0ZXh0LW92ZXJmbG93OmluaGVyaXQ7XFxyXFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucDUtY2FudmFze1xcclxcbiAgICAgICAgdG9wOiAkcDUtaW5mby1oZWlnaHQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHA1LWluZm8taGVpZ2h0fSk7XFxyXFxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAtMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1Ym1lcmdlbmNlLWhvdmVyIGJye1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlYmxvZy1wb3N0e1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgLy8gbWFyZ2luOjVweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VibG9nLXBvc3QgcCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDokYm90dG9tLWhlaWdodDtcXHJcXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgLy9wb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXIgYnV0dG9uLCAuZm9vdGVyIGEge1xcclxcbiAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAvLyBtYXJnaW46IDE1cHggYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbjogNy41cHggMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAkdmhzLXNoYWRvd3MtcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29weXJpZ2h0e1xcclxcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6ICR2aHMtc2hhZG93cy1zO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXs5MTpmdW5jdGlvbihlKXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxyKXtpZighcil7cj17fX1lPWUmJmUuX19lc01vZHVsZT9lLmRlZmF1bHQ6ZTtpZih0eXBlb2YgZSE9PVwic3RyaW5nXCIpe3JldHVybiBlfWlmKC9eWydcIl0uKlsnXCJdJC8udGVzdChlKSl7ZT1lLnNsaWNlKDEsLTEpfWlmKHIuaGFzaCl7ZSs9ci5oYXNofWlmKC9bXCInKCkgXFx0XFxuXS8udGVzdChlKXx8ci5uZWVkUXVvdGVzKXtyZXR1cm4nXCInLmNvbmNhdChlLnJlcGxhY2UoL1wiL2csJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLFwiXFxcXG5cIiksJ1wiJyl9cmV0dXJuIGV9fX07dmFyIHI9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyh0KXtpZihyW3RdKXtyZXR1cm4gclt0XS5leHBvcnRzfXZhciBfPXJbdF09e2V4cG9ydHM6e319O3ZhciBuPXRydWU7dHJ5e2VbdF0oXyxfLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7bj1mYWxzZX1maW5hbGx5e2lmKG4pZGVsZXRlIHJbdF19cmV0dXJuIF8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MSl9KCk7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9tdXNpYy1iYW5uZXIuZDUzMmYyZjcyNmIyYTAwMzBlN2Y3ZTU3ZDVmOGY5YTQuanBnXCI7IiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFQcmlzbS5wbHVnaW5zLnRvb2xiYXIpIHtcblx0XHRjb25zb2xlLndhcm4oJ0NvcHkgdG8gQ2xpcGJvYXJkIHBsdWdpbiBsb2FkZWQgYmVmb3JlIFRvb2xiYXIgcGx1Z2luLicpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdoZW4gdGhlIGdpdmVuIGVsZW1lbnRzIGlzIGNsaWNrZWQgYnkgdGhlIHVzZXIsIHRoZSBnaXZlbiB0ZXh0IHdpbGwgYmUgY29waWVkIHRvIGNsaXBib2FyZC5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge0NvcHlJbmZvfSBjb3B5SW5mb1xuXHQgKlxuXHQgKiBAdHlwZWRlZiBDb3B5SW5mb1xuXHQgKiBAcHJvcGVydHkgeygpID0+IHN0cmluZ30gZ2V0VGV4dFxuXHQgKiBAcHJvcGVydHkgeygpID0+IHZvaWR9IHN1Y2Nlc3Ncblx0ICogQHByb3BlcnR5IHsocmVhc29uOiB1bmtub3duKSA9PiB2b2lkfSBlcnJvclxuXHQgKi9cblx0ZnVuY3Rpb24gcmVnaXN0ZXJDbGlwYm9hcmQoZWxlbWVudCwgY29weUluZm8pIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29weVRleHRUb0NsaXBib2FyZChjb3B5SW5mbyk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzA4MTAzMjIvNzU5NTQ3MlxuXG5cdC8qKiBAcGFyYW0ge0NvcHlJbmZvfSBjb3B5SW5mbyAqL1xuXHRmdW5jdGlvbiBmYWxsYmFja0NvcHlUZXh0VG9DbGlwYm9hcmQoY29weUluZm8pIHtcblx0XHR2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXHRcdHRleHRBcmVhLnZhbHVlID0gY29weUluZm8uZ2V0VGV4dCgpO1xuXG5cdFx0Ly8gQXZvaWQgc2Nyb2xsaW5nIHRvIGJvdHRvbVxuXHRcdHRleHRBcmVhLnN0eWxlLnRvcCA9ICcwJztcblx0XHR0ZXh0QXJlYS5zdHlsZS5sZWZ0ID0gJzAnO1xuXHRcdHRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuXHRcdHRleHRBcmVhLmZvY3VzKCk7XG5cdFx0dGV4dEFyZWEuc2VsZWN0KCk7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChzdWNjZXNzZnVsKSB7XG5cdFx0XHRcdFx0Y29weUluZm8uc3VjY2VzcygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvcHlJbmZvLmVycm9yKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNvcHlJbmZvLmVycm9yKGVycik7XG5cdFx0XHR9LCAxKTtcblx0XHR9XG5cblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcblx0fVxuXHQvKiogQHBhcmFtIHtDb3B5SW5mb30gY29weUluZm8gKi9cblx0ZnVuY3Rpb24gY29weVRleHRUb0NsaXBib2FyZChjb3B5SW5mbykge1xuXHRcdGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG5cdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5SW5mby5nZXRUZXh0KCkpLnRoZW4oY29weUluZm8uc3VjY2VzcywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQvLyB0cnkgdGhlIGZhbGxiYWNrIGluIGNhc2UgYHdyaXRlVGV4dGAgZGlkbid0IHdvcmtcblx0XHRcdFx0ZmFsbGJhY2tDb3B5VGV4dFRvQ2xpcGJvYXJkKGNvcHlJbmZvKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmYWxsYmFja0NvcHlUZXh0VG9DbGlwYm9hcmQoY29weUluZm8pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZWxlY3RzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHQgKi9cblx0ZnVuY3Rpb24gc2VsZWN0RWxlbWVudFRleHQoZWxlbWVudCkge1xuXHRcdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMDA3OTkxMC83NTk1NDcyXG5cdFx0d2luZG93LmdldFNlbGVjdGlvbigpLnNlbGVjdEFsbENoaWxkcmVuKGVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyYXZlcnNlcyB1cCB0aGUgRE9NIHRyZWUgdG8gZmluZCBkYXRhIGF0dHJpYnV0ZXMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gc3RhcnRFbGVtZW50IEFuIGVsZW1lbnQgdG8gc3RhcnQgZnJvbS5cblx0ICogQHJldHVybnMge1NldHRpbmdzfSBUaGUgcGx1Z2luIHNldHRpbmdzLlxuXHQgKiBAdHlwZWRlZiB7UmVjb3JkPFwiY29weVwiIHwgXCJjb3B5LWVycm9yXCIgfCBcImNvcHktc3VjY2Vzc1wiIHwgXCJjb3B5LXRpbWVvdXRcIiwgc3RyaW5nIHwgbnVtYmVyPn0gU2V0dGluZ3Ncblx0ICovXG5cdGZ1bmN0aW9uIGdldFNldHRpbmdzKHN0YXJ0RWxlbWVudCkge1xuXHRcdC8qKiBAdHlwZSB7U2V0dGluZ3N9ICovXG5cdFx0dmFyIHNldHRpbmdzID0ge1xuXHRcdFx0J2NvcHknOiAnQ29weScsXG5cdFx0XHQnY29weS1lcnJvcic6ICdQcmVzcyBDdHJsK0MgdG8gY29weScsXG5cdFx0XHQnY29weS1zdWNjZXNzJzogJ0NvcGllZCEnLFxuXHRcdFx0J2NvcHktdGltZW91dCc6IDUwMDBcblx0XHR9O1xuXG5cdFx0dmFyIHByZWZpeCA9ICdkYXRhLXByaXNtanMtJztcblx0XHRmb3IgKHZhciBrZXkgaW4gc2V0dGluZ3MpIHtcblx0XHRcdHZhciBhdHRyID0gcHJlZml4ICsga2V5O1xuXHRcdFx0dmFyIGVsZW1lbnQgPSBzdGFydEVsZW1lbnQ7XG5cdFx0XHR3aGlsZSAoZWxlbWVudCAmJiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcblx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRcdHNldHRpbmdzW2tleV0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG5cblx0UHJpc20ucGx1Z2lucy50b29sYmFyLnJlZ2lzdGVyQnV0dG9uKCdjb3B5LXRvLWNsaXBib2FyZCcsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgZWxlbWVudCA9IGVudi5lbGVtZW50O1xuXG5cdFx0dmFyIHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoZWxlbWVudCk7XG5cblx0XHR2YXIgbGlua0NvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRsaW5rQ29weS5jbGFzc05hbWUgPSAnY29weS10by1jbGlwYm9hcmQtYnV0dG9uJztcblx0XHRsaW5rQ29weS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cdFx0dmFyIGxpbmtTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGxpbmtDb3B5LmFwcGVuZENoaWxkKGxpbmtTcGFuKTtcblxuXHRcdHNldFN0YXRlKCdjb3B5Jyk7XG5cblx0XHRyZWdpc3RlckNsaXBib2FyZChsaW5rQ29weSwge1xuXHRcdFx0Z2V0VGV4dDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudC50ZXh0Q29udGVudDtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNldFN0YXRlKCdjb3B5LXN1Y2Nlc3MnKTtcblxuXHRcdFx0XHRyZXNldFRleHQoKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZXRTdGF0ZSgnY29weS1lcnJvcicpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGVjdEVsZW1lbnRUZXh0KGVsZW1lbnQpO1xuXHRcdFx0XHR9LCAxKTtcblxuXHRcdFx0XHRyZXNldFRleHQoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBsaW5rQ29weTtcblxuXHRcdGZ1bmN0aW9uIHJlc2V0VGV4dCgpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZXRTdGF0ZSgnY29weScpOyB9LCBzZXR0aW5nc1snY29weS10aW1lb3V0J10pO1xuXHRcdH1cblxuXHRcdC8qKiBAcGFyYW0ge1wiY29weVwiIHwgXCJjb3B5LWVycm9yXCIgfCBcImNvcHktc3VjY2Vzc1wifSBzdGF0ZSAqL1xuXHRcdGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG5cdFx0XHRsaW5rU3Bhbi50ZXh0Q29udGVudCA9IHNldHRpbmdzW3N0YXRlXTtcblx0XHRcdGxpbmtDb3B5LnNldEF0dHJpYnV0ZSgnZGF0YS1jb3B5LXN0YXRlJywgc3RhdGUpO1xuXHRcdH1cblx0fSk7XG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0UHJpc20ucGx1Z2lucy50b29sYmFyLnJlZ2lzdGVyQnV0dG9uKCdkb3dubG9hZC1maWxlJywgZnVuY3Rpb24gKGVudikge1xuXHRcdHZhciBwcmUgPSBlbnYuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpIHx8ICFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXNyYycpIHx8ICFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLWRvd25sb2FkLWxpbmsnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgc3JjID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcblx0XHR2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRhLnRleHRDb250ZW50ID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1kb3dubG9hZC1saW5rLWxhYmVsJykgfHwgJ0Rvd25sb2FkJztcblx0XHRhLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnJyk7XG5cdFx0YS5ocmVmID0gc3JjO1xuXHRcdHJldHVybiBhO1xuXHR9KTtcblxufSgpKTtcbiIsIihmdW5jdGlvbiAoKSB7XG5cblx0aWYgKHR5cGVvZiBQcmlzbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbHVnaW4gbmFtZSB3aGljaCBpcyB1c2VkIGFzIGEgY2xhc3MgbmFtZSBmb3IgPHByZT4gd2hpY2ggaXMgYWN0aXZhdGluZyB0aGUgcGx1Z2luXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHR2YXIgUExVR0lOX05BTUUgPSAnbGluZS1udW1iZXJzJztcblxuXHQvKipcblx0ICogUmVndWxhciBleHByZXNzaW9uIHVzZWQgZm9yIGRldGVybWluaW5nIGxpbmUgYnJlYWtzXG5cdCAqXG5cdCAqIEB0eXBlIHtSZWdFeHB9XG5cdCAqL1xuXHR2YXIgTkVXX0xJTkVfRVhQID0gL1xcbig/ISQpL2c7XG5cblxuXHQvKipcblx0ICogR2xvYmFsIGV4cG9ydHNcblx0ICovXG5cdHZhciBjb25maWcgPSBQcmlzbS5wbHVnaW5zLmxpbmVOdW1iZXJzID0ge1xuXHRcdC8qKlxuXHRcdCAqIEdldCBub2RlIGZvciBwcm92aWRlZCBsaW5lIG51bWJlclxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHByZSBlbGVtZW50XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciBsaW5lIG51bWJlclxuXHRcdCAqIEByZXR1cm5zIHtFbGVtZW50fHVuZGVmaW5lZH1cblx0XHQgKi9cblx0XHRnZXRMaW5lOiBmdW5jdGlvbiAoZWxlbWVudCwgbnVtYmVyKSB7XG5cdFx0XHRpZiAoZWxlbWVudC50YWdOYW1lICE9PSAnUFJFJyB8fCAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoUExVR0lOX05BTUUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxpbmVOdW1iZXJSb3dzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKTtcblx0XHRcdGlmICghbGluZU51bWJlclJvd3MpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGxpbmVOdW1iZXJTdGFydCA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXJ0JyksIDEwKSB8fCAxO1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJFbmQgPSBsaW5lTnVtYmVyU3RhcnQgKyAobGluZU51bWJlclJvd3MuY2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG5cblx0XHRcdGlmIChudW1iZXIgPCBsaW5lTnVtYmVyU3RhcnQpIHtcblx0XHRcdFx0bnVtYmVyID0gbGluZU51bWJlclN0YXJ0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG51bWJlciA+IGxpbmVOdW1iZXJFbmQpIHtcblx0XHRcdFx0bnVtYmVyID0gbGluZU51bWJlckVuZDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxpbmVJbmRleCA9IG51bWJlciAtIGxpbmVOdW1iZXJTdGFydDtcblxuXHRcdFx0cmV0dXJuIGxpbmVOdW1iZXJSb3dzLmNoaWxkcmVuW2xpbmVJbmRleF07XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlc2l6ZXMgdGhlIGxpbmUgbnVtYmVycyBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIFRoaXMgZnVuY3Rpb24gd2lsbCBub3QgYWRkIGxpbmUgbnVtYmVycy4gSXQgd2lsbCBvbmx5IHJlc2l6ZSBleGlzdGluZyBvbmVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBBIGA8cHJlPmAgZWxlbWVudCB3aXRoIGxpbmUgbnVtYmVycy5cblx0XHQgKiBAcmV0dXJucyB7dm9pZH1cblx0XHQgKi9cblx0XHRyZXNpemU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRyZXNpemVFbGVtZW50cyhbZWxlbWVudF0pO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIHRoZSBwbHVnaW4gY2FuIGFzc3VtZSB0aGF0IHRoZSB1bml0cyBmb250IHNpemVzIGFuZCBtYXJnaW5zIGFyZSBub3QgZGVwZW5kZWQgb24gdGhlIHNpemUgb2Zcblx0XHQgKiB0aGUgY3VycmVudCB2aWV3cG9ydC5cblx0XHQgKlxuXHRcdCAqIFNldHRpbmcgdGhpcyB0byBgdHJ1ZWAgd2lsbCBhbGxvdyB0aGUgcGx1Z2luIHRvIGRvIGNlcnRhaW4gb3B0aW1pemF0aW9ucyBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuXHRcdCAqXG5cdFx0ICogU2V0IHRoaXMgdG8gYGZhbHNlYCBpZiB5b3UgdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIENTUyB1bml0czogYHZoYCwgYHZ3YCwgYHZtaW5gLCBgdm1heGAuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRhc3N1bWVWaWV3cG9ydEluZGVwZW5kZW5jZTogdHJ1ZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXNpemVzIHRoZSBnaXZlbiBlbGVtZW50cy5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBlbGVtZW50c1xuXHQgKi9cblx0ZnVuY3Rpb24gcmVzaXplRWxlbWVudHMoZWxlbWVudHMpIHtcblx0XHRlbGVtZW50cyA9IGVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuXHRcdFx0dmFyIGNvZGVTdHlsZXMgPSBnZXRTdHlsZXMoZSk7XG5cdFx0XHR2YXIgd2hpdGVTcGFjZSA9IGNvZGVTdHlsZXNbJ3doaXRlLXNwYWNlJ107XG5cdFx0XHRyZXR1cm4gd2hpdGVTcGFjZSA9PT0gJ3ByZS13cmFwJyB8fCB3aGl0ZVNwYWNlID09PSAncHJlLWxpbmUnO1xuXHRcdH0pO1xuXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGluZm9zID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHR2YXIgY29kZUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcblx0XHRcdHZhciBsaW5lTnVtYmVyc1dyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcnMtcm93cycpO1xuXHRcdFx0aWYgKCFjb2RlRWxlbWVudCB8fCAhbGluZU51bWJlcnNXcmFwcGVyKSB7XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG5cdFx0XHR2YXIgbGluZU51bWJlclNpemVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXNpemVyJyk7XG5cdFx0XHR2YXIgY29kZUxpbmVzID0gY29kZUVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoTkVXX0xJTkVfRVhQKTtcblxuXHRcdFx0aWYgKCFsaW5lTnVtYmVyU2l6ZXIpIHtcblx0XHRcdFx0bGluZU51bWJlclNpemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRsaW5lTnVtYmVyU2l6ZXIuY2xhc3NOYW1lID0gJ2xpbmUtbnVtYmVycy1zaXplcic7XG5cblx0XHRcdFx0Y29kZUVsZW1lbnQuYXBwZW5kQ2hpbGQobGluZU51bWJlclNpemVyKTtcblx0XHRcdH1cblxuXHRcdFx0bGluZU51bWJlclNpemVyLmlubmVySFRNTCA9ICcwJztcblx0XHRcdGxpbmVOdW1iZXJTaXplci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0dmFyIG9uZUxpbmVySGVpZ2h0ID0gbGluZU51bWJlclNpemVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRcdGxpbmVOdW1iZXJTaXplci5pbm5lckhUTUwgPSAnJztcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0bGluZXM6IGNvZGVMaW5lcyxcblx0XHRcdFx0bGluZUhlaWdodHM6IFtdLFxuXHRcdFx0XHRvbmVMaW5lckhlaWdodDogb25lTGluZXJIZWlnaHQsXG5cdFx0XHRcdHNpemVyOiBsaW5lTnVtYmVyU2l6ZXIsXG5cdFx0XHR9O1xuXHRcdH0pLmZpbHRlcihCb29sZWFuKTtcblxuXHRcdGluZm9zLmZvckVhY2goZnVuY3Rpb24gKGluZm8pIHtcblx0XHRcdHZhciBsaW5lTnVtYmVyU2l6ZXIgPSBpbmZvLnNpemVyO1xuXHRcdFx0dmFyIGxpbmVzID0gaW5mby5saW5lcztcblx0XHRcdHZhciBsaW5lSGVpZ2h0cyA9IGluZm8ubGluZUhlaWdodHM7XG5cdFx0XHR2YXIgb25lTGluZXJIZWlnaHQgPSBpbmZvLm9uZUxpbmVySGVpZ2h0O1xuXG5cdFx0XHRsaW5lSGVpZ2h0c1tsaW5lcy5sZW5ndGggLSAxXSA9IHVuZGVmaW5lZDtcblx0XHRcdGxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUsIGluZGV4KSB7XG5cdFx0XHRcdGlmIChsaW5lICYmIGxpbmUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHZhciBlID0gbGluZU51bWJlclNpemVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0XHRcdFx0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0XHRlLnRleHRDb250ZW50ID0gbGluZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaW5lSGVpZ2h0c1tpbmRleF0gPSBvbmVMaW5lckhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRpbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvKSB7XG5cdFx0XHR2YXIgbGluZU51bWJlclNpemVyID0gaW5mby5zaXplcjtcblx0XHRcdHZhciBsaW5lSGVpZ2h0cyA9IGluZm8ubGluZUhlaWdodHM7XG5cblx0XHRcdHZhciBjaGlsZEluZGV4ID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGluZUhlaWdodHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGxpbmVIZWlnaHRzW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRsaW5lSGVpZ2h0c1tpXSA9IGxpbmVOdW1iZXJTaXplci5jaGlsZHJlbltjaGlsZEluZGV4KytdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoaW5mbykge1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJTaXplciA9IGluZm8uc2l6ZXI7XG5cdFx0XHR2YXIgd3JhcHBlciA9IGluZm8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKTtcblxuXHRcdFx0bGluZU51bWJlclNpemVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRsaW5lTnVtYmVyU2l6ZXIuaW5uZXJIVE1MID0gJyc7XG5cblx0XHRcdGluZm8ubGluZUhlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAoaGVpZ2h0LCBsaW5lTnVtYmVyKSB7XG5cdFx0XHRcdHdyYXBwZXIuY2hpbGRyZW5bbGluZU51bWJlcl0uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4Jztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgc3R5bGUgZGVjbGFyYXRpb25zIGZvciB0aGUgZWxlbWVudFxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0ICovXG5cdGZ1bmN0aW9uIGdldFN0eWxlcyhlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIDogKGVsZW1lbnQuY3VycmVudFN0eWxlIHx8IG51bGwpO1xuXHR9XG5cblx0dmFyIGxhc3RXaWR0aCA9IHVuZGVmaW5lZDtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoY29uZmlnLmFzc3VtZVZpZXdwb3J0SW5kZXBlbmRlbmNlICYmIGxhc3RXaWR0aCA9PT0gd2luZG93LmlubmVyV2lkdGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGFzdFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0XHRyZXNpemVFbGVtZW50cyhBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUuJyArIFBMVUdJTl9OQU1FKSkpO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2NvbXBsZXRlJywgZnVuY3Rpb24gKGVudikge1xuXHRcdGlmICghZW52LmNvZGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY29kZSA9IC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKGVudi5lbGVtZW50KTtcblx0XHR2YXIgcHJlID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKGNvZGUucGFyZW50Tm9kZSk7XG5cblx0XHQvLyB3b3JrcyBvbmx5IGZvciA8Y29kZT4gd3JhcHBlZCBpbnNpZGUgPHByZT4gKG5vdCBpbmxpbmUpXG5cdFx0aWYgKCFwcmUgfHwgIS9wcmUvaS50ZXN0KHByZS5ub2RlTmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBYm9ydCBpZiBsaW5lIG51bWJlcnMgYWxyZWFkeSBleGlzdHNcblx0XHRpZiAoY29kZS5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIG9ubHkgYWRkIGxpbmUgbnVtYmVycyBpZiA8Y29kZT4gb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBgbGluZS1udW1iZXJzYCBjbGFzc1xuXHRcdGlmICghUHJpc20udXRpbC5pc0FjdGl2ZShjb2RlLCBQTFVHSU5fTkFNRSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIGNsYXNzICdsaW5lLW51bWJlcnMnIGZyb20gdGhlIDxjb2RlPlxuXHRcdGNvZGUuY2xhc3NMaXN0LnJlbW92ZShQTFVHSU5fTkFNRSk7XG5cdFx0Ly8gQWRkIHRoZSBjbGFzcyAnbGluZS1udW1iZXJzJyB0byB0aGUgPHByZT5cblx0XHRwcmUuY2xhc3NMaXN0LmFkZChQTFVHSU5fTkFNRSk7XG5cblx0XHR2YXIgbWF0Y2ggPSBlbnYuY29kZS5tYXRjaChORVdfTElORV9FWFApO1xuXHRcdHZhciBsaW5lc051bSA9IG1hdGNoID8gbWF0Y2gubGVuZ3RoICsgMSA6IDE7XG5cdFx0dmFyIGxpbmVOdW1iZXJzV3JhcHBlcjtcblxuXHRcdHZhciBsaW5lcyA9IG5ldyBBcnJheShsaW5lc051bSArIDEpLmpvaW4oJzxzcGFuPjwvc3Bhbj4nKTtcblxuXHRcdGxpbmVOdW1iZXJzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5lTnVtYmVyc1dyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLmNsYXNzTmFtZSA9ICdsaW5lLW51bWJlcnMtcm93cyc7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLmlubmVySFRNTCA9IGxpbmVzO1xuXG5cdFx0aWYgKHByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3RhcnQnKSkge1xuXHRcdFx0cHJlLnN0eWxlLmNvdW50ZXJSZXNldCA9ICdsaW5lbnVtYmVyICcgKyAocGFyc2VJbnQocHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpLCAxMCkgLSAxKTtcblx0XHR9XG5cblx0XHRlbnYuZWxlbWVudC5hcHBlbmRDaGlsZChsaW5lTnVtYmVyc1dyYXBwZXIpO1xuXG5cdFx0cmVzaXplRWxlbWVudHMoW3ByZV0pO1xuXG5cdFx0UHJpc20uaG9va3MucnVuKCdsaW5lLW51bWJlcnMnLCBlbnYpO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2xpbmUtbnVtYmVycycsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRlbnYucGx1Z2lucyA9IGVudi5wbHVnaW5zIHx8IHt9O1xuXHRcdGVudi5wbHVnaW5zLmxpbmVOdW1iZXJzID0gdHJ1ZTtcblx0fSk7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmdW5jdGlvbiBtYXBDbGFzc05hbWUobmFtZSkge1xuXHRcdHZhciBjdXN0b21DbGFzcyA9IFByaXNtLnBsdWdpbnMuY3VzdG9tQ2xhc3M7XG5cdFx0aWYgKGN1c3RvbUNsYXNzKSB7XG5cdFx0XHRyZXR1cm4gY3VzdG9tQ2xhc3MuYXBwbHkobmFtZSwgJ25vbmUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXHR9XG5cblx0dmFyIFBBUlRORVIgPSB7XG5cdFx0JygnOiAnKScsXG5cdFx0J1snOiAnXScsXG5cdFx0J3snOiAnfScsXG5cdH07XG5cblx0Ly8gVGhlIG5hbWVzIGZvciBicmFjZSB0eXBlcy5cblx0Ly8gVGhlc2UgbmFtZXMgaGF2ZSB0d28gcHVycG9zZXM6IDEpIHRoZXkgY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcgYW5kIDIpIHRoZXkgYXJlIHVzZWQgdG8gcGFpciBicmFjZXMuIE9ubHkgYnJhY2VzXG5cdC8vIG9mIHRoZSBzYW1lIHR5cGUgYXJlIHBhaXJlZC5cblx0dmFyIE5BTUVTID0ge1xuXHRcdCcoJzogJ2JyYWNlLXJvdW5kJyxcblx0XHQnWyc6ICdicmFjZS1zcXVhcmUnLFxuXHRcdCd7JzogJ2JyYWNlLWN1cmx5Jyxcblx0fTtcblxuXHQvLyBBIG1hcCBmb3IgYnJhY2UgYWxpYXNlcy5cblx0Ly8gVGhpcyBpcyB1c2VmdWwgZm9yIHdoZW4gc29tZSBicmFjZXMgaGF2ZSBhIHByZWZpeC9zdWZmaXggYXMgcGFydCBvZiB0aGUgcHVuY3R1YXRpb24gdG9rZW4uXG5cdHZhciBCUkFDRV9BTElBU19NQVAgPSB7XG5cdFx0JyR7JzogJ3snLCAvLyBKUyB0ZW1wbGF0ZSBwdW5jdHVhdGlvbiAoZS5nLiBgZm9vICR7YmFyICsgMX1gKVxuXHR9O1xuXG5cdHZhciBMRVZFTF9XQVJQID0gMTI7XG5cblx0dmFyIHBhaXJJZENvdW50ZXIgPSAwO1xuXG5cdHZhciBCUkFDRV9JRF9QQVRURVJOID0gL14ocGFpci1cXGQrLSkob3BlbnxjbG9zZSkkLztcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYnJhY2UgcGFydG5lciBnaXZlbiBvbmUgYnJhY2Ugb2YgYSBicmFjZSBwYWlyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBicmFjZVxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRQYXJ0bmVyQnJhY2UoYnJhY2UpIHtcblx0XHR2YXIgbWF0Y2ggPSBCUkFDRV9JRF9QQVRURVJOLmV4ZWMoYnJhY2UuaWQpO1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG1hdGNoWzFdICsgKG1hdGNoWzJdID09ICdvcGVuJyA/ICdjbG9zZScgOiAnb3BlbicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdGhpcyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBob3ZlckJyYWNlKCkge1xuXHRcdGlmICghUHJpc20udXRpbC5pc0FjdGl2ZSh0aGlzLCAnYnJhY2UtaG92ZXInLCB0cnVlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdFt0aGlzLCBnZXRQYXJ0bmVyQnJhY2UodGhpcyldLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdGUuY2xhc3NMaXN0LmFkZChtYXBDbGFzc05hbWUoJ2JyYWNlLWhvdmVyJykpO1xuXHRcdH0pO1xuXHR9XG5cdC8qKlxuXHQgKiBAdGhpcyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBsZWF2ZUJyYWNlKCkge1xuXHRcdFt0aGlzLCBnZXRQYXJ0bmVyQnJhY2UodGhpcyldLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdGUuY2xhc3NMaXN0LnJlbW92ZShtYXBDbGFzc05hbWUoJ2JyYWNlLWhvdmVyJykpO1xuXHRcdH0pO1xuXHR9XG5cdC8qKlxuXHQgKiBAdGhpcyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRmdW5jdGlvbiBjbGlja0JyYWNlKCkge1xuXHRcdGlmICghUHJpc20udXRpbC5pc0FjdGl2ZSh0aGlzLCAnYnJhY2Utc2VsZWN0JywgdHJ1ZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRbdGhpcywgZ2V0UGFydG5lckJyYWNlKHRoaXMpXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRlLmNsYXNzTGlzdC5hZGQobWFwQ2xhc3NOYW1lKCdicmFjZS1zZWxlY3RlZCcpKTtcblx0XHR9KTtcblx0fVxuXG5cdFByaXNtLmhvb2tzLmFkZCgnY29tcGxldGUnLCBmdW5jdGlvbiAoZW52KSB7XG5cblx0XHQvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuXHRcdHZhciBjb2RlID0gZW52LmVsZW1lbnQ7XG5cdFx0dmFyIHByZSA9IGNvZGUucGFyZW50RWxlbWVudDtcblxuXHRcdGlmICghcHJlIHx8IHByZS50YWdOYW1lICE9ICdQUkUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gZmluZCB0aGUgYnJhY2VzIHRvIG1hdGNoXG5cdFx0LyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9cblx0XHR2YXIgdG9NYXRjaCA9IFtdO1xuXHRcdGlmIChQcmlzbS51dGlsLmlzQWN0aXZlKGNvZGUsICdtYXRjaC1icmFjZXMnKSkge1xuXHRcdFx0dG9NYXRjaC5wdXNoKCcoJywgJ1snLCAneycpO1xuXHRcdH1cblxuXHRcdGlmICh0b01hdGNoLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHQvLyBub3RoaW5nIHRvIG1hdGNoXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFwcmUuX19saXN0ZW5lckFkZGVkKSB7XG5cdFx0XHQvLyBjb2RlIGJsb2NrcyBtaWdodCBiZSBoaWdobGlnaHRlZCBtb3JlIHRoYW4gb25jZVxuXHRcdFx0cHJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIHJlbW92ZUJyYWNlU2VsZWN0ZWQoKSB7XG5cdFx0XHRcdC8vIHRoZSBjb2RlIGVsZW1lbnQgbWlnaHQgaGF2ZSBiZWVuIHJlcGxhY2VkXG5cdFx0XHRcdHZhciBjb2RlID0gcHJlLnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcblx0XHRcdFx0dmFyIGNsYXNzTmFtZSA9IG1hcENsYXNzTmFtZSgnYnJhY2Utc2VsZWN0ZWQnKTtcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29kZS5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNsYXNzTmFtZSkpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcmUsICdfX2xpc3RlbmVyQWRkZWQnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXHRcdH1cblxuXHRcdC8qKiBAdHlwZSB7SFRNTFNwYW5FbGVtZW50W119ICovXG5cdFx0dmFyIHB1bmN0dWF0aW9uID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG5cdFx0XHRjb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4uJyArIG1hcENsYXNzTmFtZSgndG9rZW4nKSArICcuJyArIG1hcENsYXNzTmFtZSgncHVuY3R1YXRpb24nKSlcblx0XHQpO1xuXG5cdFx0LyoqIEB0eXBlIHt7IGluZGV4OiBudW1iZXIsIG9wZW46IGJvb2xlYW4sIGVsZW1lbnQ6IEhUTUxFbGVtZW50IH1bXX0gKi9cblx0XHR2YXIgYWxsQnJhY2VzID0gW107XG5cblx0XHR0b01hdGNoLmZvckVhY2goZnVuY3Rpb24gKG9wZW4pIHtcblx0XHRcdHZhciBjbG9zZSA9IFBBUlRORVJbb3Blbl07XG5cdFx0XHR2YXIgbmFtZSA9IG1hcENsYXNzTmFtZShOQU1FU1tvcGVuXSk7XG5cblx0XHRcdC8qKiBAdHlwZSB7W251bWJlciwgbnVtYmVyXVtdfSAqL1xuXHRcdFx0dmFyIHBhaXJzID0gW107XG5cdFx0XHQvKiogQHR5cGUge251bWJlcltdfSAqL1xuXHRcdFx0dmFyIG9wZW5TdGFjayA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB1bmN0dWF0aW9uLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gcHVuY3R1YXRpb25baV07XG5cdFx0XHRcdGlmIChlbGVtZW50LmNoaWxkRWxlbWVudENvdW50ID09IDApIHtcblx0XHRcdFx0XHR2YXIgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cdFx0XHRcdFx0dGV4dCA9IEJSQUNFX0FMSUFTX01BUFt0ZXh0XSB8fCB0ZXh0O1xuXHRcdFx0XHRcdGlmICh0ZXh0ID09PSBvcGVuKSB7XG5cdFx0XHRcdFx0XHRhbGxCcmFjZXMucHVzaCh7IGluZGV4OiBpLCBvcGVuOiB0cnVlLCBlbGVtZW50OiBlbGVtZW50IH0pO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG1hcENsYXNzTmFtZSgnYnJhY2Utb3BlbicpKTtcblx0XHRcdFx0XHRcdG9wZW5TdGFjay5wdXNoKGkpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGV4dCA9PT0gY2xvc2UpIHtcblx0XHRcdFx0XHRcdGFsbEJyYWNlcy5wdXNoKHsgaW5kZXg6IGksIG9wZW46IGZhbHNlLCBlbGVtZW50OiBlbGVtZW50IH0pO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG1hcENsYXNzTmFtZSgnYnJhY2UtY2xvc2UnKSk7XG5cdFx0XHRcdFx0XHRpZiAob3BlblN0YWNrLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRwYWlycy5wdXNoKFtpLCBvcGVuU3RhY2sucG9wKCldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cGFpcnMuZm9yRWFjaChmdW5jdGlvbiAocGFpcikge1xuXHRcdFx0XHR2YXIgcGFpcklkID0gJ3BhaXItJyArIChwYWlySWRDb3VudGVyKyspICsgJy0nO1xuXG5cdFx0XHRcdHZhciBvcGVuaW5nID0gcHVuY3R1YXRpb25bcGFpclswXV07XG5cdFx0XHRcdHZhciBjbG9zaW5nID0gcHVuY3R1YXRpb25bcGFpclsxXV07XG5cblx0XHRcdFx0b3BlbmluZy5pZCA9IHBhaXJJZCArICdvcGVuJztcblx0XHRcdFx0Y2xvc2luZy5pZCA9IHBhaXJJZCArICdjbG9zZSc7XG5cblx0XHRcdFx0W29wZW5pbmcsIGNsb3NpbmddLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlckJyYWNlKTtcblx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBsZWF2ZUJyYWNlKTtcblx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tCcmFjZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHR2YXIgbGV2ZWwgPSAwO1xuXHRcdGFsbEJyYWNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmluZGV4IC0gYi5pbmRleDsgfSk7XG5cdFx0YWxsQnJhY2VzLmZvckVhY2goZnVuY3Rpb24gKGJyYWNlKSB7XG5cdFx0XHRpZiAoYnJhY2Uub3Blbikge1xuXHRcdFx0XHRicmFjZS5lbGVtZW50LmNsYXNzTGlzdC5hZGQobWFwQ2xhc3NOYW1lKCdicmFjZS1sZXZlbC0nICsgKGxldmVsICUgTEVWRUxfV0FSUCArIDEpKSk7XG5cdFx0XHRcdGxldmVsKys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXZlbCA9IE1hdGgubWF4KDAsIGxldmVsIC0gMSk7XG5cdFx0XHRcdGJyYWNlLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChtYXBDbGFzc05hbWUoJ2JyYWNlLWxldmVsLScgKyAobGV2ZWwgJSBMRVZFTF9XQVJQICsgMSkpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKG9iajEsIG9iajIpIHtcblx0XHRmb3IgKHZhciBuYW1lIGluIG9iajIpIHtcblx0XHRcdGlmIChvYmoyLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0XHRcdG9iajFbbmFtZV0gPSBvYmoyW25hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb2JqMTtcblx0fTtcblxuXHRmdW5jdGlvbiBOb3JtYWxpemVXaGl0ZXNwYWNlKGRlZmF1bHRzKSB7XG5cdFx0dGhpcy5kZWZhdWx0cyA9IGFzc2lnbih7fSwgZGVmYXVsdHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9DYW1lbENhc2UodmFsdWUpIHtcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvLShcXHcpL2csIGZ1bmN0aW9uIChtYXRjaCwgZmlyc3RDaGFyKSB7XG5cdFx0XHRyZXR1cm4gZmlyc3RDaGFyLnRvVXBwZXJDYXNlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB0YWJMZW4oc3RyKSB7XG5cdFx0dmFyIHJlcyA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChzdHIuY2hhckNvZGVBdChpKSA9PSAnXFx0Jy5jaGFyQ29kZUF0KDApKSB7XG5cdFx0XHRcdHJlcyArPSAzO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RyLmxlbmd0aCArIHJlcztcblx0fVxuXG5cdE5vcm1hbGl6ZVdoaXRlc3BhY2UucHJvdG90eXBlID0ge1xuXHRcdHNldERlZmF1bHRzOiBmdW5jdGlvbiAoZGVmYXVsdHMpIHtcblx0XHRcdHRoaXMuZGVmYXVsdHMgPSBhc3NpZ24odGhpcy5kZWZhdWx0cywgZGVmYXVsdHMpO1xuXHRcdH0sXG5cdFx0bm9ybWFsaXplOiBmdW5jdGlvbiAoaW5wdXQsIHNldHRpbmdzKSB7XG5cdFx0XHRzZXR0aW5ncyA9IGFzc2lnbih0aGlzLmRlZmF1bHRzLCBzZXR0aW5ncyk7XG5cblx0XHRcdGZvciAodmFyIG5hbWUgaW4gc2V0dGluZ3MpIHtcblx0XHRcdFx0dmFyIG1ldGhvZE5hbWUgPSB0b0NhbWVsQ2FzZShuYW1lKTtcblx0XHRcdFx0aWYgKG5hbWUgIT09ICdub3JtYWxpemUnICYmIG1ldGhvZE5hbWUgIT09ICdzZXREZWZhdWx0cycgJiZcblx0XHRcdFx0XHRzZXR0aW5nc1tuYW1lXSAmJiB0aGlzW21ldGhvZE5hbWVdKSB7XG5cdFx0XHRcdFx0aW5wdXQgPSB0aGlzW21ldGhvZE5hbWVdLmNhbGwodGhpcywgaW5wdXQsIHNldHRpbmdzW25hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaW5wdXQ7XG5cdFx0fSxcblxuXHRcdC8qXG5cdFx0ICogTm9ybWFsaXphdGlvbiBtZXRob2RzXG5cdFx0ICovXG5cdFx0bGVmdFRyaW06IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXHMrLywgJycpO1xuXHRcdH0sXG5cdFx0cmlnaHRUcmltOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXHMrJC8sICcnKTtcblx0XHR9LFxuXHRcdHRhYnNUb1NwYWNlczogZnVuY3Rpb24gKGlucHV0LCBzcGFjZXMpIHtcblx0XHRcdHNwYWNlcyA9IHNwYWNlc3wwIHx8IDQ7XG5cdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZSgvXFx0L2csIG5ldyBBcnJheSgrK3NwYWNlcykuam9pbignICcpKTtcblx0XHR9LFxuXHRcdHNwYWNlc1RvVGFiczogZnVuY3Rpb24gKGlucHV0LCBzcGFjZXMpIHtcblx0XHRcdHNwYWNlcyA9IHNwYWNlc3wwIHx8IDQ7XG5cdFx0XHRyZXR1cm4gaW5wdXQucmVwbGFjZShSZWdFeHAoJyB7JyArIHNwYWNlcyArICd9JywgJ2cnKSwgJ1xcdCcpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlVHJhaWxpbmc6IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL1xccyo/JC9nbSwgJycpO1xuXHRcdH0sXG5cdFx0Ly8gU3VwcG9ydCBmb3IgZGVwcmVjYXRlZCBwbHVnaW4gcmVtb3ZlLWluaXRpYWwtbGluZS1mZWVkXG5cdFx0cmVtb3ZlSW5pdGlhbExpbmVGZWVkOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHJldHVybiBpbnB1dC5yZXBsYWNlKC9eKD86XFxyP1xcbnxcXHIpLywgJycpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlSW5kZW50OiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdHZhciBpbmRlbnRzID0gaW5wdXQubWF0Y2goL15bXlxcU1xcblxccl0qKD89XFxTKS9nbSk7XG5cblx0XHRcdGlmICghaW5kZW50cyB8fCAhaW5kZW50c1swXS5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGlucHV0O1xuXHRcdFx0fVxuXG5cdFx0XHRpbmRlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7IH0pO1xuXG5cdFx0XHRpZiAoIWluZGVudHNbMF0ubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBpbnB1dDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoUmVnRXhwKCdeJyArIGluZGVudHNbMF0sICdnbScpLCAnJyk7XG5cdFx0fSxcblx0XHRpbmRlbnQ6IGZ1bmN0aW9uIChpbnB1dCwgdGFicykge1xuXHRcdFx0cmV0dXJuIGlucHV0LnJlcGxhY2UoL15bXlxcU1xcblxccl0qKD89XFxTKS9nbSwgbmV3IEFycmF5KCsrdGFicykuam9pbignXFx0JykgKyAnJCYnKTtcblx0XHR9LFxuXHRcdGJyZWFrTGluZXM6IGZ1bmN0aW9uIChpbnB1dCwgY2hhcmFjdGVycykge1xuXHRcdFx0Y2hhcmFjdGVycyA9IChjaGFyYWN0ZXJzID09PSB0cnVlKSA/IDgwIDogY2hhcmFjdGVyc3wwIHx8IDgwO1xuXG5cdFx0XHR2YXIgbGluZXMgPSBpbnB1dC5zcGxpdCgnXFxuJyk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmICh0YWJMZW4obGluZXNbaV0pIDw9IGNoYXJhY3RlcnMpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBsaW5lID0gbGluZXNbaV0uc3BsaXQoLyhcXHMrKS9nKTtcblx0XHRcdFx0dmFyIGxlbiA9IDA7XG5cblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0dmFyIHRsID0gdGFiTGVuKGxpbmVbal0pO1xuXHRcdFx0XHRcdGxlbiArPSB0bDtcblx0XHRcdFx0XHRpZiAobGVuID4gY2hhcmFjdGVycykge1xuXHRcdFx0XHRcdFx0bGluZVtqXSA9ICdcXG4nICsgbGluZVtqXTtcblx0XHRcdFx0XHRcdGxlbiA9IHRsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5lc1tpXSA9IGxpbmUuam9pbignJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFN1cHBvcnQgbm9kZSBtb2R1bGVzXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gTm9ybWFsaXplV2hpdGVzcGFjZTtcblx0fVxuXG5cdFByaXNtLnBsdWdpbnMuTm9ybWFsaXplV2hpdGVzcGFjZSA9IG5ldyBOb3JtYWxpemVXaGl0ZXNwYWNlKHtcblx0XHQncmVtb3ZlLXRyYWlsaW5nJzogdHJ1ZSxcblx0XHQncmVtb3ZlLWluZGVudCc6IHRydWUsXG5cdFx0J2xlZnQtdHJpbSc6IHRydWUsXG5cdFx0J3JpZ2h0LXRyaW0nOiB0cnVlLFxuXHRcdC8qJ2JyZWFrLWxpbmVzJzogODAsXG5cdFx0J2luZGVudCc6IDIsXG5cdFx0J3JlbW92ZS1pbml0aWFsLWxpbmUtZmVlZCc6IGZhbHNlLFxuXHRcdCd0YWJzLXRvLXNwYWNlcyc6IDQsXG5cdFx0J3NwYWNlcy10by10YWJzJzogNCovXG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXNhbml0eS1jaGVjaycsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgTm9ybWFsaXplciA9IFByaXNtLnBsdWdpbnMuTm9ybWFsaXplV2hpdGVzcGFjZTtcblxuXHRcdC8vIENoZWNrIHNldHRpbmdzXG5cdFx0aWYgKGVudi5zZXR0aW5ncyAmJiBlbnYuc2V0dGluZ3NbJ3doaXRlc3BhY2Utbm9ybWFsaXphdGlvbiddID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGNsYXNzZXNcblx0XHRpZiAoIVByaXNtLnV0aWwuaXNBY3RpdmUoZW52LmVsZW1lbnQsICd3aGl0ZXNwYWNlLW5vcm1hbGl6YXRpb24nLCB0cnVlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFNpbXBsZSBtb2RlIGlmIHRoZXJlIGlzIG5vIGVudi5lbGVtZW50XG5cdFx0aWYgKCghZW52LmVsZW1lbnQgfHwgIWVudi5lbGVtZW50LnBhcmVudE5vZGUpICYmIGVudi5jb2RlKSB7XG5cdFx0XHRlbnYuY29kZSA9IE5vcm1hbGl6ZXIubm9ybWFsaXplKGVudi5jb2RlLCBlbnYuc2V0dGluZ3MpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE5vcm1hbCBtb2RlXG5cdFx0dmFyIHByZSA9IGVudi5lbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0aWYgKCFlbnYuY29kZSB8fCAhcHJlIHx8IHByZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAncHJlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBjaGlsZHJlbiA9IHByZS5jaGlsZE5vZGVzO1xuXHRcdHZhciBiZWZvcmUgPSAnJztcblx0XHR2YXIgYWZ0ZXIgPSAnJztcblx0XHR2YXIgY29kZUZvdW5kID0gZmFsc2U7XG5cblx0XHQvLyBNb3ZlIHN1cnJvdW5kaW5nIHdoaXRlc3BhY2UgZnJvbSB0aGUgPHByZT4gdGFnIGludG8gdGhlIDxjb2RlPiB0YWdcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG5cdFx0XHR2YXIgbm9kZSA9IGNoaWxkcmVuW2ldO1xuXG5cdFx0XHRpZiAobm9kZSA9PSBlbnYuZWxlbWVudCkge1xuXHRcdFx0XHRjb2RlRm91bmQgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChub2RlLm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG5cdFx0XHRcdGlmIChjb2RlRm91bmQpIHtcblx0XHRcdFx0XHRhZnRlciArPSBub2RlLm5vZGVWYWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRiZWZvcmUgKz0gbm9kZS5ub2RlVmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwcmUucmVtb3ZlQ2hpbGQobm9kZSk7XG5cdFx0XHRcdC0taTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIWVudi5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aCB8fCAhUHJpc20ucGx1Z2lucy5LZWVwTWFya3VwKSB7XG5cdFx0XHRlbnYuY29kZSA9IGJlZm9yZSArIGVudi5jb2RlICsgYWZ0ZXI7XG5cdFx0XHRlbnYuY29kZSA9IE5vcm1hbGl6ZXIubm9ybWFsaXplKGVudi5jb2RlLCBlbnYuc2V0dGluZ3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBQcmVzZXJ2ZSBtYXJrdXAgZm9yIGtlZXAtbWFya3VwIHBsdWdpblxuXHRcdFx0dmFyIGh0bWwgPSBiZWZvcmUgKyBlbnYuZWxlbWVudC5pbm5lckhUTUwgKyBhZnRlcjtcblx0XHRcdGVudi5lbGVtZW50LmlubmVySFRNTCA9IE5vcm1hbGl6ZXIubm9ybWFsaXplKGh0bWwsIGVudi5zZXR0aW5ncyk7XG5cdFx0XHRlbnYuY29kZSA9IGVudi5lbGVtZW50LnRleHRDb250ZW50O1xuXHRcdH1cblx0fSk7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIVByaXNtLnBsdWdpbnMudG9vbGJhcikge1xuXHRcdGNvbnNvbGUud2FybignU2hvdyBMYW5ndWFnZXMgcGx1Z2luIGxvYWRlZCBiZWZvcmUgVG9vbGJhciBwbHVnaW4uJyk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5cdC8vIFRoZSBsYW5ndWFnZXMgbWFwIGlzIGJ1aWx0IGF1dG9tYXRpY2FsbHkgd2l0aCBndWxwXG5cdHZhciBMYW5ndWFnZXMgPSAvKmxhbmd1YWdlc19wbGFjZWhvbGRlclsqL3tcblx0XHRcIm5vbmVcIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJwbGFpblwiOiBcIlBsYWluIHRleHRcIixcblx0XHRcInBsYWludGV4dFwiOiBcIlBsYWluIHRleHRcIixcblx0XHRcInRleHRcIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJ0eHRcIjogXCJQbGFpbiB0ZXh0XCIsXG5cdFx0XCJodG1sXCI6IFwiSFRNTFwiLFxuXHRcdFwieG1sXCI6IFwiWE1MXCIsXG5cdFx0XCJzdmdcIjogXCJTVkdcIixcblx0XHRcIm1hdGhtbFwiOiBcIk1hdGhNTFwiLFxuXHRcdFwic3NtbFwiOiBcIlNTTUxcIixcblx0XHRcInJzc1wiOiBcIlJTU1wiLFxuXHRcdFwiY3NzXCI6IFwiQ1NTXCIsXG5cdFx0XCJjbGlrZVwiOiBcIkMtbGlrZVwiLFxuXHRcdFwianNcIjogXCJKYXZhU2NyaXB0XCIsXG5cdFx0XCJhYmFwXCI6IFwiQUJBUFwiLFxuXHRcdFwiYWJuZlwiOiBcIkFCTkZcIixcblx0XHRcImFsXCI6IFwiQUxcIixcblx0XHRcImFudGxyNFwiOiBcIkFOVExSNFwiLFxuXHRcdFwiZzRcIjogXCJBTlRMUjRcIixcblx0XHRcImFwYWNoZWNvbmZcIjogXCJBcGFjaGUgQ29uZmlndXJhdGlvblwiLFxuXHRcdFwiYXBsXCI6IFwiQVBMXCIsXG5cdFx0XCJhcWxcIjogXCJBUUxcIixcblx0XHRcImFyZmZcIjogXCJBUkZGXCIsXG5cdFx0XCJhc2NpaWRvY1wiOiBcIkFzY2lpRG9jXCIsXG5cdFx0XCJhZG9jXCI6IFwiQXNjaWlEb2NcIixcblx0XHRcImFzcG5ldFwiOiBcIkFTUC5ORVQgKEMjKVwiLFxuXHRcdFwiYXNtNjUwMlwiOiBcIjY1MDIgQXNzZW1ibHlcIixcblx0XHRcImF1dG9ob3RrZXlcIjogXCJBdXRvSG90a2V5XCIsXG5cdFx0XCJhdXRvaXRcIjogXCJBdXRvSXRcIixcblx0XHRcImF2aXN5bnRoXCI6IFwiQXZpU3ludGhcIixcblx0XHRcImF2c1wiOiBcIkF2aVN5bnRoXCIsXG5cdFx0XCJhdnJvLWlkbFwiOiBcIkF2cm8gSURMXCIsXG5cdFx0XCJhdmRsXCI6IFwiQXZybyBJRExcIixcblx0XHRcImJhc2ljXCI6IFwiQkFTSUNcIixcblx0XHRcImJiY29kZVwiOiBcIkJCY29kZVwiLFxuXHRcdFwiYm5mXCI6IFwiQk5GXCIsXG5cdFx0XCJyYm5mXCI6IFwiUkJORlwiLFxuXHRcdFwiYnNsXCI6IFwiQlNMICgxQzpFbnRlcnByaXNlKVwiLFxuXHRcdFwib3NjcmlwdFwiOiBcIk9uZVNjcmlwdFwiLFxuXHRcdFwiY3NoYXJwXCI6IFwiQyNcIixcblx0XHRcImNzXCI6IFwiQyNcIixcblx0XHRcImRvdG5ldFwiOiBcIkMjXCIsXG5cdFx0XCJjcHBcIjogXCJDKytcIixcblx0XHRcImNmc2NyaXB0XCI6IFwiQ0ZTY3JpcHRcIixcblx0XHRcImNmY1wiOiBcIkNGU2NyaXB0XCIsXG5cdFx0XCJjaWxcIjogXCJDSUxcIixcblx0XHRcImNtYWtlXCI6IFwiQ01ha2VcIixcblx0XHRcImNvYm9sXCI6IFwiQ09CT0xcIixcblx0XHRcImNvZmZlZVwiOiBcIkNvZmZlZVNjcmlwdFwiLFxuXHRcdFwiY29uY1wiOiBcIkNvbmN1cm5hc1wiLFxuXHRcdFwiY3NwXCI6IFwiQ29udGVudC1TZWN1cml0eS1Qb2xpY3lcIixcblx0XHRcImNzcy1leHRyYXNcIjogXCJDU1MgRXh0cmFzXCIsXG5cdFx0XCJjc3ZcIjogXCJDU1ZcIixcblx0XHRcImRhdGF3ZWF2ZVwiOiBcIkRhdGFXZWF2ZVwiLFxuXHRcdFwiZGF4XCI6IFwiREFYXCIsXG5cdFx0XCJkamFuZ29cIjogXCJEamFuZ28vSmluamEyXCIsXG5cdFx0XCJqaW5qYTJcIjogXCJEamFuZ28vSmluamEyXCIsXG5cdFx0XCJkbnMtem9uZS1maWxlXCI6IFwiRE5TIHpvbmUgZmlsZVwiLFxuXHRcdFwiZG5zLXpvbmVcIjogXCJETlMgem9uZSBmaWxlXCIsXG5cdFx0XCJkb2NrZXJmaWxlXCI6IFwiRG9ja2VyXCIsXG5cdFx0XCJkb3RcIjogXCJET1QgKEdyYXBodml6KVwiLFxuXHRcdFwiZ3ZcIjogXCJET1QgKEdyYXBodml6KVwiLFxuXHRcdFwiZWJuZlwiOiBcIkVCTkZcIixcblx0XHRcImVkaXRvcmNvbmZpZ1wiOiBcIkVkaXRvckNvbmZpZ1wiLFxuXHRcdFwiZWpzXCI6IFwiRUpTXCIsXG5cdFx0XCJldGx1YVwiOiBcIkVtYmVkZGVkIEx1YSB0ZW1wbGF0aW5nXCIsXG5cdFx0XCJlcmJcIjogXCJFUkJcIixcblx0XHRcImV4Y2VsLWZvcm11bGFcIjogXCJFeGNlbCBGb3JtdWxhXCIsXG5cdFx0XCJ4bHN4XCI6IFwiRXhjZWwgRm9ybXVsYVwiLFxuXHRcdFwieGxzXCI6IFwiRXhjZWwgRm9ybXVsYVwiLFxuXHRcdFwiZnNoYXJwXCI6IFwiRiNcIixcblx0XHRcImZpcmVzdG9yZS1zZWN1cml0eS1ydWxlc1wiOiBcIkZpcmVzdG9yZSBzZWN1cml0eSBydWxlc1wiLFxuXHRcdFwiZnRsXCI6IFwiRnJlZU1hcmtlciBUZW1wbGF0ZSBMYW5ndWFnZVwiLFxuXHRcdFwiZ21sXCI6IFwiR2FtZU1ha2VyIExhbmd1YWdlXCIsXG5cdFx0XCJnYW1lbWFrZXJsYW5ndWFnZVwiOiBcIkdhbWVNYWtlciBMYW5ndWFnZVwiLFxuXHRcdFwiZ2FwXCI6IFwiR0FQIChDQVMpXCIsXG5cdFx0XCJnY29kZVwiOiBcIkctY29kZVwiLFxuXHRcdFwiZ2RzY3JpcHRcIjogXCJHRFNjcmlwdFwiLFxuXHRcdFwiZ2VkY29tXCI6IFwiR0VEQ09NXCIsXG5cdFx0XCJnbHNsXCI6IFwiR0xTTFwiLFxuXHRcdFwiZ25cIjogXCJHTlwiLFxuXHRcdFwiZ25pXCI6IFwiR05cIixcblx0XHRcImdyYXBocWxcIjogXCJHcmFwaFFMXCIsXG5cdFx0XCJoYnNcIjogXCJIYW5kbGViYXJzXCIsXG5cdFx0XCJoc1wiOiBcIkhhc2tlbGxcIixcblx0XHRcImhjbFwiOiBcIkhDTFwiLFxuXHRcdFwiaGxzbFwiOiBcIkhMU0xcIixcblx0XHRcImh0dHBcIjogXCJIVFRQXCIsXG5cdFx0XCJocGtwXCI6IFwiSFRUUCBQdWJsaWMtS2V5LVBpbnNcIixcblx0XHRcImhzdHNcIjogXCJIVFRQIFN0cmljdC1UcmFuc3BvcnQtU2VjdXJpdHlcIixcblx0XHRcImljaGlnb2phbVwiOiBcIkljaGlnb0phbVwiLFxuXHRcdFwiaWN1LW1lc3NhZ2UtZm9ybWF0XCI6IFwiSUNVIE1lc3NhZ2UgRm9ybWF0XCIsXG5cdFx0XCJpZHJcIjogXCJJZHJpc1wiLFxuXHRcdFwiaWdub3JlXCI6IFwiLmlnbm9yZVwiLFxuXHRcdFwiZ2l0aWdub3JlXCI6IFwiLmdpdGlnbm9yZVwiLFxuXHRcdFwiaGdpZ25vcmVcIjogXCIuaGdpZ25vcmVcIixcblx0XHRcIm5wbWlnbm9yZVwiOiBcIi5ucG1pZ25vcmVcIixcblx0XHRcImluZm9ybTdcIjogXCJJbmZvcm0gN1wiLFxuXHRcdFwiamF2YWRvY1wiOiBcIkphdmFEb2NcIixcblx0XHRcImphdmFkb2NsaWtlXCI6IFwiSmF2YURvYy1saWtlXCIsXG5cdFx0XCJqYXZhc3RhY2t0cmFjZVwiOiBcIkphdmEgc3RhY2sgdHJhY2VcIixcblx0XHRcImpxXCI6IFwiSlFcIixcblx0XHRcImpzZG9jXCI6IFwiSlNEb2NcIixcblx0XHRcImpzLWV4dHJhc1wiOiBcIkpTIEV4dHJhc1wiLFxuXHRcdFwianNvblwiOiBcIkpTT05cIixcblx0XHRcIndlYm1hbmlmZXN0XCI6IFwiV2ViIEFwcCBNYW5pZmVzdFwiLFxuXHRcdFwianNvbjVcIjogXCJKU09ONVwiLFxuXHRcdFwianNvbnBcIjogXCJKU09OUFwiLFxuXHRcdFwianNzdGFja3RyYWNlXCI6IFwiSlMgc3RhY2sgdHJhY2VcIixcblx0XHRcImpzLXRlbXBsYXRlc1wiOiBcIkpTIFRlbXBsYXRlc1wiLFxuXHRcdFwia3RzXCI6IFwiS290bGluIFNjcmlwdFwiLFxuXHRcdFwia3RcIjogXCJLb3RsaW5cIixcblx0XHRcImt1bWlyXCI6IFwiS3VNaXIgKNCa0YPQnNC40YApXCIsXG5cdFx0XCJrdW1cIjogXCJLdU1pciAo0JrRg9Cc0LjRgClcIixcblx0XHRcImxhdGV4XCI6IFwiTGFUZVhcIixcblx0XHRcInRleFwiOiBcIlRlWFwiLFxuXHRcdFwiY29udGV4dFwiOiBcIkNvblRlWHRcIixcblx0XHRcImxpbHlwb25kXCI6IFwiTGlseVBvbmRcIixcblx0XHRcImx5XCI6IFwiTGlseVBvbmRcIixcblx0XHRcImVtYWNzXCI6IFwiTGlzcFwiLFxuXHRcdFwiZWxpc3BcIjogXCJMaXNwXCIsXG5cdFx0XCJlbWFjcy1saXNwXCI6IFwiTGlzcFwiLFxuXHRcdFwibGx2bVwiOiBcIkxMVk0gSVJcIixcblx0XHRcImxvZ1wiOiBcIkxvZyBmaWxlXCIsXG5cdFx0XCJsb2xjb2RlXCI6IFwiTE9MQ09ERVwiLFxuXHRcdFwibWFnbWFcIjogXCJNYWdtYSAoQ0FTKVwiLFxuXHRcdFwibWRcIjogXCJNYXJrZG93blwiLFxuXHRcdFwibWFya3VwLXRlbXBsYXRpbmdcIjogXCJNYXJrdXAgdGVtcGxhdGluZ1wiLFxuXHRcdFwibWF0bGFiXCI6IFwiTUFUTEFCXCIsXG5cdFx0XCJtYXhzY3JpcHRcIjogXCJNQVhTY3JpcHRcIixcblx0XHRcIm1lbFwiOiBcIk1FTFwiLFxuXHRcdFwibW9uZ29kYlwiOiBcIk1vbmdvREJcIixcblx0XHRcIm1vb25cIjogXCJNb29uU2NyaXB0XCIsXG5cdFx0XCJuMXFsXCI6IFwiTjFRTFwiLFxuXHRcdFwibjRqc1wiOiBcIk40SlNcIixcblx0XHRcIm40anNkXCI6IFwiTjRKU1wiLFxuXHRcdFwibmFuZDJ0ZXRyaXMtaGRsXCI6IFwiTmFuZCBUbyBUZXRyaXMgSERMXCIsXG5cdFx0XCJuYW5pc2NyaXB0XCI6IFwiTmFuaW5vdmVsIFNjcmlwdFwiLFxuXHRcdFwibmFuaVwiOiBcIk5hbmlub3ZlbCBTY3JpcHRcIixcblx0XHRcIm5hc21cIjogXCJOQVNNXCIsXG5cdFx0XCJuZW9uXCI6IFwiTkVPTlwiLFxuXHRcdFwibmdpbnhcIjogXCJuZ2lueFwiLFxuXHRcdFwibnNpc1wiOiBcIk5TSVNcIixcblx0XHRcIm9iamVjdGl2ZWNcIjogXCJPYmplY3RpdmUtQ1wiLFxuXHRcdFwib2JqY1wiOiBcIk9iamVjdGl2ZS1DXCIsXG5cdFx0XCJvY2FtbFwiOiBcIk9DYW1sXCIsXG5cdFx0XCJvcGVuY2xcIjogXCJPcGVuQ0xcIixcblx0XHRcIm9wZW5xYXNtXCI6IFwiT3BlblFhc21cIixcblx0XHRcInFhc21cIjogXCJPcGVuUWFzbVwiLFxuXHRcdFwicGFyaWdwXCI6IFwiUEFSSS9HUFwiLFxuXHRcdFwib2JqZWN0cGFzY2FsXCI6IFwiT2JqZWN0IFBhc2NhbFwiLFxuXHRcdFwicHNsXCI6IFwiUEFUUk9MIFNjcmlwdGluZyBMYW5ndWFnZVwiLFxuXHRcdFwicGNheGlzXCI6IFwiUEMtQXhpc1wiLFxuXHRcdFwicHhcIjogXCJQQy1BeGlzXCIsXG5cdFx0XCJwZW9wbGVjb2RlXCI6IFwiUGVvcGxlQ29kZVwiLFxuXHRcdFwicGNvZGVcIjogXCJQZW9wbGVDb2RlXCIsXG5cdFx0XCJwaHBcIjogXCJQSFBcIixcblx0XHRcInBocGRvY1wiOiBcIlBIUERvY1wiLFxuXHRcdFwicGhwLWV4dHJhc1wiOiBcIlBIUCBFeHRyYXNcIixcblx0XHRcInBsc3FsXCI6IFwiUEwvU1FMXCIsXG5cdFx0XCJwb3dlcnF1ZXJ5XCI6IFwiUG93ZXJRdWVyeVwiLFxuXHRcdFwicHFcIjogXCJQb3dlclF1ZXJ5XCIsXG5cdFx0XCJtc2NyaXB0XCI6IFwiUG93ZXJRdWVyeVwiLFxuXHRcdFwicG93ZXJzaGVsbFwiOiBcIlBvd2VyU2hlbGxcIixcblx0XHRcInByb21xbFwiOiBcIlByb21RTFwiLFxuXHRcdFwicHJvcGVydGllc1wiOiBcIi5wcm9wZXJ0aWVzXCIsXG5cdFx0XCJwcm90b2J1ZlwiOiBcIlByb3RvY29sIEJ1ZmZlcnNcIixcblx0XHRcInB1cmViYXNpY1wiOiBcIlB1cmVCYXNpY1wiLFxuXHRcdFwicGJmYXNtXCI6IFwiUHVyZUJhc2ljXCIsXG5cdFx0XCJwdXJzXCI6IFwiUHVyZVNjcmlwdFwiLFxuXHRcdFwicHlcIjogXCJQeXRob25cIixcblx0XHRcInFzaGFycFwiOiBcIlEjXCIsXG5cdFx0XCJxc1wiOiBcIlEjXCIsXG5cdFx0XCJxXCI6IFwiUSAoa2RiKyBkYXRhYmFzZSlcIixcblx0XHRcInFtbFwiOiBcIlFNTFwiLFxuXHRcdFwicmt0XCI6IFwiUmFja2V0XCIsXG5cdFx0XCJjc2h0bWxcIjogXCJSYXpvciBDI1wiLFxuXHRcdFwicmF6b3JcIjogXCJSYXpvciBDI1wiLFxuXHRcdFwianN4XCI6IFwiUmVhY3QgSlNYXCIsXG5cdFx0XCJ0c3hcIjogXCJSZWFjdCBUU1hcIixcblx0XHRcInJlbnB5XCI6IFwiUmVuJ3B5XCIsXG5cdFx0XCJycHlcIjogXCJSZW4ncHlcIixcblx0XHRcInJlc3RcIjogXCJyZVNUIChyZVN0cnVjdHVyZWRUZXh0KVwiLFxuXHRcdFwicm9ib3RmcmFtZXdvcmtcIjogXCJSb2JvdCBGcmFtZXdvcmtcIixcblx0XHRcInJvYm90XCI6IFwiUm9ib3QgRnJhbWV3b3JrXCIsXG5cdFx0XCJyYlwiOiBcIlJ1YnlcIixcblx0XHRcInNhc1wiOiBcIlNBU1wiLFxuXHRcdFwic2Fzc1wiOiBcIlNhc3MgKFNhc3MpXCIsXG5cdFx0XCJzY3NzXCI6IFwiU2FzcyAoU2NzcylcIixcblx0XHRcInNoZWxsLXNlc3Npb25cIjogXCJTaGVsbCBzZXNzaW9uXCIsXG5cdFx0XCJzaC1zZXNzaW9uXCI6IFwiU2hlbGwgc2Vzc2lvblwiLFxuXHRcdFwic2hlbGxzZXNzaW9uXCI6IFwiU2hlbGwgc2Vzc2lvblwiLFxuXHRcdFwic21sXCI6IFwiU01MXCIsXG5cdFx0XCJzbWxualwiOiBcIlNNTC9OSlwiLFxuXHRcdFwic29saWRpdHlcIjogXCJTb2xpZGl0eSAoRXRoZXJldW0pXCIsXG5cdFx0XCJzb2xcIjogXCJTb2xpZGl0eSAoRXRoZXJldW0pXCIsXG5cdFx0XCJzb2x1dGlvbi1maWxlXCI6IFwiU29sdXRpb24gZmlsZVwiLFxuXHRcdFwic2xuXCI6IFwiU29sdXRpb24gZmlsZVwiLFxuXHRcdFwic295XCI6IFwiU295IChDbG9zdXJlIFRlbXBsYXRlKVwiLFxuXHRcdFwic3BhcnFsXCI6IFwiU1BBUlFMXCIsXG5cdFx0XCJycVwiOiBcIlNQQVJRTFwiLFxuXHRcdFwic3BsdW5rLXNwbFwiOiBcIlNwbHVuayBTUExcIixcblx0XHRcInNxZlwiOiBcIlNRRjogU3RhdHVzIFF1byBGdW5jdGlvbiAoQXJtYSAzKVwiLFxuXHRcdFwic3FsXCI6IFwiU1FMXCIsXG5cdFx0XCJpZWNzdFwiOiBcIlN0cnVjdHVyZWQgVGV4dCAoSUVDIDYxMTMxLTMpXCIsXG5cdFx0XCJzeXN0ZW1kXCI6IFwiU3lzdGVtZCBjb25maWd1cmF0aW9uIGZpbGVcIixcblx0XHRcInQ0LXRlbXBsYXRpbmdcIjogXCJUNCB0ZW1wbGF0aW5nXCIsXG5cdFx0XCJ0NC1jc1wiOiBcIlQ0IFRleHQgVGVtcGxhdGVzIChDIylcIixcblx0XHRcInQ0XCI6IFwiVDQgVGV4dCBUZW1wbGF0ZXMgKEMjKVwiLFxuXHRcdFwidDQtdmJcIjogXCJUNCBUZXh0IFRlbXBsYXRlcyAoVkIpXCIsXG5cdFx0XCJ0YXBcIjogXCJUQVBcIixcblx0XHRcInR0MlwiOiBcIlRlbXBsYXRlIFRvb2xraXQgMlwiLFxuXHRcdFwidG9tbFwiOiBcIlRPTUxcIixcblx0XHRcInRyaWdcIjogXCJUcmlHXCIsXG5cdFx0XCJ0c1wiOiBcIlR5cGVTY3JpcHRcIixcblx0XHRcInRzY29uZmlnXCI6IFwiVFNDb25maWdcIixcblx0XHRcInVzY3JpcHRcIjogXCJVbnJlYWxTY3JpcHRcIixcblx0XHRcInVjXCI6IFwiVW5yZWFsU2NyaXB0XCIsXG5cdFx0XCJ1cmlcIjogXCJVUklcIixcblx0XHRcInVybFwiOiBcIlVSTFwiLFxuXHRcdFwidmJuZXRcIjogXCJWQi5OZXRcIixcblx0XHRcInZoZGxcIjogXCJWSERMXCIsXG5cdFx0XCJ2aW1cIjogXCJ2aW1cIixcblx0XHRcInZpc3VhbC1iYXNpY1wiOiBcIlZpc3VhbCBCYXNpY1wiLFxuXHRcdFwidmJhXCI6IFwiVkJBXCIsXG5cdFx0XCJ2YlwiOiBcIlZpc3VhbCBCYXNpY1wiLFxuXHRcdFwid2FzbVwiOiBcIldlYkFzc2VtYmx5XCIsXG5cdFx0XCJ3aWtpXCI6IFwiV2lraSBtYXJrdXBcIixcblx0XHRcIndvbGZyYW1cIjogXCJXb2xmcmFtIGxhbmd1YWdlXCIsXG5cdFx0XCJuYlwiOiBcIk1hdGhlbWF0aWNhIE5vdGVib29rXCIsXG5cdFx0XCJ3bFwiOiBcIldvbGZyYW0gbGFuZ3VhZ2VcIixcblx0XHRcInhlb3JhY3ViZVwiOiBcIlhlb3JhQ3ViZVwiLFxuXHRcdFwieG1sLWRvY1wiOiBcIlhNTCBkb2MgKC5uZXQpXCIsXG5cdFx0XCJ4b2pvXCI6IFwiWG9qbyAoUkVBTGJhc2ljKVwiLFxuXHRcdFwieHF1ZXJ5XCI6IFwiWFF1ZXJ5XCIsXG5cdFx0XCJ5YW1sXCI6IFwiWUFNTFwiLFxuXHRcdFwieW1sXCI6IFwiWUFNTFwiLFxuXHRcdFwieWFuZ1wiOiBcIllBTkdcIlxuXHR9LypdKi87XG5cblx0LyogZXNsaW50LWVuYWJsZSAqL1xuXG5cdFByaXNtLnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbignc2hvdy1sYW5ndWFnZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgcHJlID0gZW52LmVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHRpZiAoIXByZSB8fCAhL3ByZS9pLnRlc3QocHJlLm5vZGVOYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFRyaWVzIHRvIGd1ZXNzIHRoZSBuYW1lIG9mIGEgbGFuZ3VhZ2UgZ2l2ZW4gaXRzIGlkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBsYW5ndWFnZSBpZC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGd1ZXNzVGl0bGUoaWQpIHtcblx0XHRcdGlmICghaWQpIHtcblx0XHRcdFx0cmV0dXJuIGlkO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChpZC5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIGlkLnN1YnN0cmluZygxKSkucmVwbGFjZSgvcyg/PWNyaXB0KS8sICdTJyk7XG5cdFx0fVxuXG5cdFx0dmFyIGxhbmd1YWdlID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1sYW5ndWFnZScpIHx8IExhbmd1YWdlc1tlbnYubGFuZ3VhZ2VdIHx8IGd1ZXNzVGl0bGUoZW52Lmxhbmd1YWdlKTtcblxuXHRcdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IGxhbmd1YWdlO1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH0pO1xuXG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHR2YXIgbWFwID0ge307XG5cdHZhciBub29wID0gZnVuY3Rpb24gKCkge307XG5cblx0UHJpc20ucGx1Z2lucy50b29sYmFyID0ge307XG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIEJ1dHRvbk9wdGlvbnNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHRleHQgVGhlIHRleHQgZGlzcGxheWVkLlxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gW3VybF0gVGhlIFVSTCBvZiB0aGUgbGluayB3aGljaCB3aWxsIGJlIGNyZWF0ZWQuXG5cdCAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IFtvbkNsaWNrXSBUaGUgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBgY2xpY2tgIGV2ZW50IG9mIHRoZSBjcmVhdGVkIGJ1dHRvbi5cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFtjbGFzc05hbWVdIFRoZSBjbGFzcyBhdHRyaWJ1dGUgdG8gaW5jbHVkZSB3aXRoIGVsZW1lbnQuXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGJ1dHRvbiBjYWxsYmFjayB3aXRoIHRoZSB0b29sYmFyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG5cdCAqIEBwYXJhbSB7QnV0dG9uT3B0aW9uc3xGdW5jdGlvbn0gb3B0c1xuXHQgKi9cblx0dmFyIHJlZ2lzdGVyQnV0dG9uID0gUHJpc20ucGx1Z2lucy50b29sYmFyLnJlZ2lzdGVyQnV0dG9uID0gZnVuY3Rpb24gKGtleSwgb3B0cykge1xuXHRcdHZhciBjYWxsYmFjaztcblxuXHRcdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y2FsbGJhY2sgPSBvcHRzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uIChlbnYpIHtcblx0XHRcdFx0dmFyIGVsZW1lbnQ7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBvcHRzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRcdFx0ZWxlbWVudC50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdG9wdHMub25DbGljay5jYWxsKHRoaXMsIGVudik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9wdHMudXJsID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdFx0ZWxlbWVudC5ocmVmID0gb3B0cy51cmw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChvcHRzLmNsYXNzTmFtZSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcHRzLmNsYXNzTmFtZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gb3B0cy50ZXh0O1xuXG5cdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAoa2V5IGluIG1hcCkge1xuXHRcdFx0Y29uc29sZS53YXJuKCdUaGVyZSBpcyBhIGJ1dHRvbiB3aXRoIHRoZSBrZXkgXCInICsga2V5ICsgJ1wiIHJlZ2lzdGVyZWQgYWxyZWFkeS4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjYWxsYmFja3MucHVzaChtYXBba2V5XSA9IGNhbGxiYWNrKTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgY2FsbGJhY2sgb3JkZXIgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZ1tdIHwgdW5kZWZpbmVkfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0T3JkZXIoZWxlbWVudCkge1xuXHRcdHdoaWxlIChlbGVtZW50KSB7XG5cdFx0XHR2YXIgb3JkZXIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10b29sYmFyLW9yZGVyJyk7XG5cdFx0XHRpZiAob3JkZXIgIT0gbnVsbCkge1xuXHRcdFx0XHRvcmRlciA9IG9yZGVyLnRyaW0oKTtcblx0XHRcdFx0aWYgKG9yZGVyLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBvcmRlci5zcGxpdCgvXFxzKixcXHMqL2cpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUG9zdC1oaWdobGlnaHQgUHJpc20gaG9vayBjYWxsYmFjay5cblx0ICpcblx0ICogQHBhcmFtIGVudlxuXHQgKi9cblx0dmFyIGhvb2sgPSBQcmlzbS5wbHVnaW5zLnRvb2xiYXIuaG9vayA9IGZ1bmN0aW9uIChlbnYpIHtcblx0XHQvLyBDaGVjayBpZiBpbmxpbmUgb3IgYWN0dWFsIGNvZGUgYmxvY2sgKGNyZWRpdCB0byBsaW5lLW51bWJlcnMgcGx1Z2luKVxuXHRcdHZhciBwcmUgPSBlbnYuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQXV0b2xvYWRlciByZWhpZ2hsaWdodHMsIHNvIG9ubHkgZG8gdGhpcyBvbmNlLlxuXHRcdGlmIChwcmUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvZGUtdG9vbGJhcicpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIHdyYXBwZXIgZm9yIDxwcmU+IHRvIHByZXZlbnQgc2Nyb2xsaW5nIHRvb2xiYXIgd2l0aCBjb250ZW50XG5cdFx0dmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvZGUtdG9vbGJhcicpO1xuXHRcdHByZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBwcmUpO1xuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJlKTtcblxuXHRcdC8vIFNldHVwIHRoZSB0b29sYmFyXG5cdFx0dmFyIHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0b29sYmFyLmNsYXNzTGlzdC5hZGQoJ3Rvb2xiYXInKTtcblxuXHRcdC8vIG9yZGVyIGNhbGxiYWNrc1xuXHRcdHZhciBlbGVtZW50Q2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuXHRcdHZhciBvcmRlciA9IGdldE9yZGVyKGVudi5lbGVtZW50KTtcblx0XHRpZiAob3JkZXIpIHtcblx0XHRcdGVsZW1lbnRDYWxsYmFja3MgPSBvcmRlci5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRyZXR1cm4gbWFwW2tleV0gfHwgbm9vcDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGVsZW1lbnRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBlbGVtZW50ID0gY2FsbGJhY2soZW52KTtcblxuXHRcdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgndG9vbGJhci1pdGVtJyk7XG5cblx0XHRcdGl0ZW0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHR0b29sYmFyLmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQWRkIG91ciB0b29sYmFyIHRvIHRoZSBjdXJyZW50bHkgY3JlYXRlZCB3cmFwcGVyIG9mIDxwcmU+IHRhZ1xuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQodG9vbGJhcik7XG5cdH07XG5cblx0cmVnaXN0ZXJCdXR0b24oJ2xhYmVsJywgZnVuY3Rpb24gKGVudikge1xuXHRcdHZhciBwcmUgPSBlbnYuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLWxhYmVsJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZWxlbWVudDsgdmFyIHRlbXBsYXRlO1xuXHRcdHZhciB0ZXh0ID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbCcpO1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBBbnkgbm9ybWFsIHRleHQgd2lsbCBibG93IHVwIHRoaXMgc2VsZWN0b3IuXG5cdFx0XHR0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlIycgKyB0ZXh0KTtcblx0XHR9IGNhdGNoIChlKSB7IC8qIG5vb3AgKi8gfVxuXG5cdFx0aWYgKHRlbXBsYXRlKSB7XG5cdFx0XHRlbGVtZW50ID0gdGVtcGxhdGUuY29udGVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdXJsJykpIHtcblx0XHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0ZWxlbWVudC5ocmVmID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9KTtcblxuXHQvKipcblx0ICogUmVnaXN0ZXIgdGhlIHRvb2xiYXIgd2l0aCBQcmlzbS5cblx0ICovXG5cdFByaXNtLmhvb2tzLmFkZCgnY29tcGxldGUnLCBob29rKTtcbn0oKSk7XG4iLCJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY29yZS5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBsaWI9XCJXZWJXb3JrZXJcIi8+XG5cbnZhciBfc2VsZiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0PyB3aW5kb3cgICAvLyBpZiBpbiBicm93c2VyXG5cdDogKFxuXHRcdCh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSlcblx0XHRcdD8gc2VsZiAvLyBpZiBpbiB3b3JrZXJcblx0XHRcdDoge30gICAvLyBpZiBpbiBub2RlIGpzXG5cdCk7XG5cbi8qKlxuICogUHJpc206IExpZ2h0d2VpZ2h0LCByb2J1c3QsIGVsZWdhbnQgc3ludGF4IGhpZ2hsaWdodGluZ1xuICpcbiAqIEBsaWNlbnNlIE1JVCA8aHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQ+XG4gKiBAYXV0aG9yIExlYSBWZXJvdSA8aHR0cHM6Ly9sZWEudmVyb3UubWU+XG4gKiBAbmFtZXNwYWNlXG4gKiBAcHVibGljXG4gKi9cbnZhciBQcmlzbSA9IChmdW5jdGlvbiAoX3NlbGYpIHtcblxuXHQvLyBQcml2YXRlIGhlbHBlciB2YXJzXG5cdHZhciBsYW5nID0gL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2k7XG5cdHZhciB1bmlxdWVJZCA9IDA7XG5cblx0Ly8gVGhlIGdyYW1tYXIgb2JqZWN0IGZvciBwbGFpbnRleHRcblx0dmFyIHBsYWluVGV4dEdyYW1tYXIgPSB7fTtcblxuXG5cdHZhciBfID0ge1xuXHRcdC8qKlxuXHRcdCAqIEJ5IGRlZmF1bHQsIFByaXNtIHdpbGwgYXR0ZW1wdCB0byBoaWdobGlnaHQgYWxsIGNvZGUgZWxlbWVudHMgKGJ5IGNhbGxpbmcge0BsaW5rIFByaXNtLmhpZ2hsaWdodEFsbH0pIG9uIHRoZVxuXHRcdCAqIGN1cnJlbnQgcGFnZSBhZnRlciB0aGUgcGFnZSBmaW5pc2hlZCBsb2FkaW5nLiBUaGlzIG1pZ2h0IGJlIGEgcHJvYmxlbSBpZiBlLmcuIHlvdSB3YW50ZWQgdG8gYXN5bmNocm9ub3VzbHkgbG9hZFxuXHRcdCAqIGFkZGl0aW9uYWwgbGFuZ3VhZ2VzIG9yIHBsdWdpbnMgeW91cnNlbGYuXG5cdFx0ICpcblx0XHQgKiBCeSBzZXR0aW5nIHRoaXMgdmFsdWUgdG8gYHRydWVgLCBQcmlzbSB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IGhpZ2hsaWdodCBhbGwgY29kZSBlbGVtZW50cyBvbiB0aGUgcGFnZS5cblx0XHQgKlxuXHRcdCAqIFlvdSBvYnZpb3VzbHkgaGF2ZSB0byBjaGFuZ2UgdGhpcyB2YWx1ZSBiZWZvcmUgdGhlIGF1dG9tYXRpYyBoaWdobGlnaHRpbmcgc3RhcnRlZC4gVG8gZG8gdGhpcywgeW91IGNhbiBhZGQgYW5cblx0XHQgKiBlbXB0eSBQcmlzbSBvYmplY3QgaW50byB0aGUgZ2xvYmFsIHNjb3BlIGJlZm9yZSBsb2FkaW5nIHRoZSBQcmlzbSBzY3JpcHQgbGlrZSB0aGlzOlxuXHRcdCAqXG5cdFx0ICogYGBganNcblx0XHQgKiB3aW5kb3cuUHJpc20gPSB3aW5kb3cuUHJpc20gfHwge307XG5cdFx0ICogUHJpc20ubWFudWFsID0gdHJ1ZTtcblx0XHQgKiAvLyBhZGQgYSBuZXcgPHNjcmlwdD4gdG8gbG9hZCBQcmlzbSdzIHNjcmlwdFxuXHRcdCAqIGBgYFxuXHRcdCAqXG5cdFx0ICogQGRlZmF1bHQgZmFsc2Vcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0bWFudWFsOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5tYW51YWwsXG5cdFx0ZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIsXG5cblx0XHQvKipcblx0XHQgKiBBIG5hbWVzcGFjZSBmb3IgdXRpbGl0eSBtZXRob2RzLlxuXHRcdCAqXG5cdFx0ICogQWxsIGZ1bmN0aW9uIGluIHRoaXMgbmFtZXNwYWNlIHRoYXQgYXJlIG5vdCBleHBsaWNpdGx5IG1hcmtlZCBhcyBfcHVibGljXyBhcmUgZm9yIF9faW50ZXJuYWwgdXNlIG9ubHlfXyBhbmQgbWF5XG5cdFx0ICogY2hhbmdlIG9yIGRpc2FwcGVhciBhdCBhbnkgdGltZS5cblx0XHQgKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKi9cblx0XHR1dGlsOiB7XG5cdFx0XHRlbmNvZGU6IGZ1bmN0aW9uIGVuY29kZSh0b2tlbnMpIHtcblx0XHRcdFx0aWYgKHRva2VucyBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBUb2tlbih0b2tlbnMudHlwZSwgZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRva2VucykpIHtcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW5zLm1hcChlbmNvZGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0b2tlbnMucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvXFx1MDBhMC9nLCAnICcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHR5cGUgb2YgdGhlIGdpdmVuIHZhbHVlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7YW55fSBvXG5cdFx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIHR5cGUobnVsbCkgICAgICA9PT0gJ051bGwnXG5cdFx0XHQgKiB0eXBlKHVuZGVmaW5lZCkgPT09ICdVbmRlZmluZWQnXG5cdFx0XHQgKiB0eXBlKDEyMykgICAgICAgPT09ICdOdW1iZXInXG5cdFx0XHQgKiB0eXBlKCdmb28nKSAgICAgPT09ICdTdHJpbmcnXG5cdFx0XHQgKiB0eXBlKHRydWUpICAgICAgPT09ICdCb29sZWFuJ1xuXHRcdFx0ICogdHlwZShbMSwgMl0pICAgID09PSAnQXJyYXknXG5cdFx0XHQgKiB0eXBlKHt9KSAgICAgICAgPT09ICdPYmplY3QnXG5cdFx0XHQgKiB0eXBlKFN0cmluZykgICAgPT09ICdGdW5jdGlvbidcblx0XHRcdCAqIHR5cGUoL2FiYysvKSAgICA9PT0gJ1JlZ0V4cCdcblx0XHRcdCAqL1xuXHRcdFx0dHlwZTogZnVuY3Rpb24gKG8pIHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgYSB1bmlxdWUgbnVtYmVyIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LiBMYXRlciBjYWxscyB3aWxsIHN0aWxsIHJldHVybiB0aGUgc2FtZSBudW1iZXIuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IG9ialxuXHRcdFx0ICogQHJldHVybnMge251bWJlcn1cblx0XHRcdCAqL1xuXHRcdFx0b2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdFx0aWYgKCFvYmpbJ19faWQnXSkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdfX2lkJywgeyB2YWx1ZTogKyt1bmlxdWVJZCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb2JqWydfX2lkJ107XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgYSBkZWVwIGNsb25lIG9mIHRoZSBnaXZlbiBvYmplY3QuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIG1haW4gaW50ZW5kZWQgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gY2xvbmUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtUfSBvXG5cdFx0XHQgKiBAcGFyYW0ge1JlY29yZDxudW1iZXIsIGFueT59IFt2aXNpdGVkXVxuXHRcdFx0ICogQHJldHVybnMge1R9XG5cdFx0XHQgKiBAdGVtcGxhdGUgVFxuXHRcdFx0ICovXG5cdFx0XHRjbG9uZTogZnVuY3Rpb24gZGVlcENsb25lKG8sIHZpc2l0ZWQpIHtcblx0XHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdFx0dmFyIGNsb25lOyB2YXIgaWQ7XG5cdFx0XHRcdHN3aXRjaCAoXy51dGlsLnR5cGUobykpIHtcblx0XHRcdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0XHRpZiAodmlzaXRlZFtpZF0pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2xvbmUgPSAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIGFueT59ICovICh7fSk7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xvbmVba2V5XSA9IGRlZXBDbG9uZShvW2tleV0sIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKGNsb25lKTtcblxuXHRcdFx0XHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2aXNpdGVkW2lkXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0XHQoLyoqIEB0eXBlIHtBcnJheX0gKi8oLyoqIEB0eXBlIHthbnl9ICovKG8pKSkuZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuXHRcdFx0XHRcdFx0XHRjbG9uZVtpXSA9IGRlZXBDbG9uZSh2LCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovIChjbG9uZSk7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB0aGUgUHJpc20gbGFuZ3VhZ2Ugb2YgdGhlIGdpdmVuIGVsZW1lbnQgc2V0IGJ5IGEgYGxhbmd1YWdlLXh4eHhgIG9yIGBsYW5nLXh4eHhgIGNsYXNzLlxuXHRcdFx0ICpcblx0XHRcdCAqIElmIG5vIGxhbmd1YWdlIGlzIHNldCBmb3IgdGhlIGVsZW1lbnQgb3IgdGhlIGVsZW1lbnQgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCBgbm9uZWAgd2lsbCBiZSByZXR1cm5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0XHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0XHQgKi9cblx0XHRcdGdldExhbmd1YWdlOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0XHR3aGlsZSAoZWxlbWVudCAmJiAhbGFuZy50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGVsZW1lbnQuY2xhc3NOYW1lLm1hdGNoKGxhbmcpIHx8IFssICdub25lJ10pWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICdub25lJztcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB0aGUgc2NyaXB0IGVsZW1lbnQgdGhhdCBpcyBjdXJyZW50bHkgZXhlY3V0aW5nLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgZG9lcyBfX25vdF9fIHdvcmsgZm9yIGxpbmUgc2NyaXB0IGVsZW1lbnQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHJldHVybnMge0hUTUxTY3JpcHRFbGVtZW50IHwgbnVsbH1cblx0XHRcdCAqL1xuXHRcdFx0Y3VycmVudFNjcmlwdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgnY3VycmVudFNjcmlwdCcgaW4gZG9jdW1lbnQgJiYgMSA8IDIgLyogaGFjayB0byB0cmlwIFRTJyBmbG93IGFuYWx5c2lzICovKSB7XG5cdFx0XHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJRTExIHdvcmthcm91bmRcblx0XHRcdFx0Ly8gd2UnbGwgZ2V0IHRoZSBzcmMgb2YgdGhlIGN1cnJlbnQgc2NyaXB0IGJ5IHBhcnNpbmcgSUUxMSdzIGVycm9yIHN0YWNrIHRyYWNlXG5cdFx0XHRcdC8vIHRoaXMgd2lsbCBub3Qgd29yayBmb3IgaW5saW5lIHNjcmlwdHNcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHQvLyBHZXQgZmlsZSBzcmMgdXJsIGZyb20gc3RhY2suIFNwZWNpZmljYWxseSB3b3JrcyB3aXRoIHRoZSBmb3JtYXQgb2Ygc3RhY2sgdHJhY2VzIGluIElFLlxuXHRcdFx0XHRcdC8vIEEgc3RhY2sgd2lsbCBsb29rIGxpa2UgdGhpczpcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIEVycm9yXG5cdFx0XHRcdFx0Ly8gICAgYXQgXy51dGlsLmN1cnJlbnRTY3JpcHQgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjExOTo1KVxuXHRcdFx0XHRcdC8vICAgIGF0IEdsb2JhbCBjb2RlIChodHRwOi8vbG9jYWxob3N0L2NvbXBvbmVudHMvcHJpc20tY29yZS5qczo2MDY6MSlcblxuXHRcdFx0XHRcdHZhciBzcmMgPSAoL2F0IFteKFxcclxcbl0qXFwoKC4qKTpbXjpdKzpbXjpdK1xcKSQvaS5leGVjKGVyci5zdGFjaykgfHwgW10pWzFdO1xuXHRcdFx0XHRcdGlmIChzcmMpIHtcblx0XHRcdFx0XHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiBzY3JpcHRzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChzY3JpcHRzW2ldLnNyYyA9PSBzcmMpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2NyaXB0c1tpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHdoZXRoZXIgYSBnaXZlbiBjbGFzcyBpcyBhY3RpdmUgZm9yIGBlbGVtZW50YC5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGUgY2xhc3MgY2FuIGJlIGFjdGl2YXRlZCBpZiBgZWxlbWVudGAgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBnaXZlbiBjbGFzcyBhbmQgaXQgY2FuIGJlIGRlYWN0aXZhdGVkXG5cdFx0XHQgKiBpZiBgZWxlbWVudGAgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIGdpdmVuIGNsYXNzLiBUaGUgX25lZ2F0ZWQgdmVyc2lvbl8gb2YgdGhlXG5cdFx0XHQgKiBnaXZlbiBjbGFzcyBpcyBqdXN0IHRoZSBnaXZlbiBjbGFzcyB3aXRoIGEgYG5vLWAgcHJlZml4LlxuXHRcdFx0ICpcblx0XHRcdCAqIFdoZXRoZXIgdGhlIGNsYXNzIGlzIGFjdGl2ZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBjbG9zZXN0IGFuY2VzdG9yIG9mIGBlbGVtZW50YCAod2hlcmUgYGVsZW1lbnRgIGl0c2VsZiBpc1xuXHRcdFx0ICogY2xvc2VzdCBhbmNlc3RvcikgdGhhdCBoYXMgdGhlIGdpdmVuIGNsYXNzIG9yIHRoZSBuZWdhdGVkIHZlcnNpb24gb2YgaXQuIElmIG5laXRoZXIgYGVsZW1lbnRgIG5vciBhbnkgb2YgaXRzXG5cdFx0XHQgKiBhbmNlc3RvcnMgaGF2ZSB0aGUgZ2l2ZW4gY2xhc3Mgb3IgdGhlIG5lZ2F0ZWQgdmVyc2lvbiBvZiBpdCwgdGhlbiB0aGUgZGVmYXVsdCBhY3RpdmF0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogSW4gdGhlIHBhcmFkb3hpY2FsIHNpdHVhdGlvbiB3aGVyZSB0aGUgY2xvc2VzdCBhbmNlc3RvciBjb250YWlucyBfX2JvdGhfXyB0aGUgZ2l2ZW4gY2xhc3MgYW5kIHRoZSBuZWdhdGVkXG5cdFx0XHQgKiB2ZXJzaW9uIG9mIGl0LCB0aGUgY2xhc3MgaXMgY29uc2lkZXJlZCBhY3RpdmUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWZhdWx0QWN0aXZhdGlvbj1mYWxzZV1cblx0XHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdFx0ICovXG5cdFx0XHRpc0FjdGl2ZTogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSwgZGVmYXVsdEFjdGl2YXRpb24pIHtcblx0XHRcdFx0dmFyIG5vID0gJ25vLScgKyBjbGFzc05hbWU7XG5cblx0XHRcdFx0d2hpbGUgKGVsZW1lbnQpIHtcblx0XHRcdFx0XHR2YXIgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG5cdFx0XHRcdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucyhubykpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gISFkZWZhdWx0QWN0aXZhdGlvbjtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVGhpcyBuYW1lc3BhY2UgY29udGFpbnMgYWxsIGN1cnJlbnRseSBsb2FkZWQgbGFuZ3VhZ2VzIGFuZCB0aGUgc29tZSBoZWxwZXIgZnVuY3Rpb25zIHRvIGNyZWF0ZSBhbmQgbW9kaWZ5IGxhbmd1YWdlcy5cblx0XHQgKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0bGFuZ3VhZ2VzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBncmFtbWFyIGZvciBwbGFpbiwgdW5mb3JtYXR0ZWQgdGV4dC5cblx0XHRcdCAqL1xuXHRcdFx0cGxhaW46IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHRwbGFpbnRleHQ6IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHR0ZXh0OiBwbGFpblRleHRHcmFtbWFyLFxuXHRcdFx0dHh0OiBwbGFpblRleHRHcmFtbWFyLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIGxhbmd1YWdlIHdpdGggdGhlIGdpdmVuIGlkIGFuZCBhcHBlbmRzIHRoZSBnaXZlbiB0b2tlbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgYSB0b2tlbiBpbiBgcmVkZWZgIGFsc28gYXBwZWFycyBpbiB0aGUgY29waWVkIGxhbmd1YWdlLCB0aGVuIHRoZSBleGlzdGluZyB0b2tlbiBpbiB0aGUgY29waWVkIGxhbmd1YWdlXG5cdFx0XHQgKiB3aWxsIGJlIG92ZXJ3cml0dGVuIGF0IGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBCZXN0IHByYWN0aWNlc1xuXHRcdFx0ICpcblx0XHRcdCAqIFNpbmNlIHRoZSBwb3NpdGlvbiBvZiBvdmVyd3JpdGluZyB0b2tlbnMgKHRva2VuIGluIGByZWRlZmAgdGhhdCBvdmVyd3JpdGUgdG9rZW5zIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2UpXG5cdFx0XHQgKiBkb2Vzbid0IG1hdHRlciwgdGhleSBjYW4gdGVjaG5pY2FsbHkgYmUgaW4gYW55IG9yZGVyLiBIb3dldmVyLCB0aGlzIGNhbiBiZSBjb25mdXNpbmcgdG8gb3RoZXJzIHRoYXQgdHJ5aW5nIHRvXG5cdFx0XHQgKiB1bmRlcnN0YW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9uIGJlY2F1c2UsIG5vcm1hbGx5LCB0aGUgb3JkZXIgb2YgdG9rZW5zIG1hdHRlcnMgaW4gUHJpc20gZ3JhbW1hcnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlcmVmb3JlLCBpdCBpcyBlbmNvdXJhZ2VkIHRvIG9yZGVyIG92ZXJ3cml0aW5nIHRva2VucyBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9ucyBvZiB0aGUgb3ZlcndyaXR0ZW4gdG9rZW5zLlxuXHRcdFx0ICogRnVydGhlcm1vcmUsIGFsbCBub24tb3ZlcndyaXRpbmcgdG9rZW5zIHNob3VsZCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIG92ZXJ3cml0aW5nIG9uZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgbGFuZ3VhZ2UgdG8gZXh0ZW5kLiBUaGlzIGhhcyB0byBiZSBhIGtleSBpbiBgUHJpc20ubGFuZ3VhZ2VzYC5cblx0XHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gcmVkZWYgVGhlIG5ldyB0b2tlbnMgdG8gYXBwZW5kLlxuXHRcdFx0ICogQHJldHVybnMge0dyYW1tYXJ9IFRoZSBuZXcgbGFuZ3VhZ2UgY3JlYXRlZC5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqIEBleGFtcGxlXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXNbJ2Nzcy13aXRoLWNvbG9ycyddID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY3NzJywge1xuXHRcdFx0ICogICAgIC8vIFByaXNtLmxhbmd1YWdlcy5jc3MgYWxyZWFkeSBoYXMgYSAnY29tbWVudCcgdG9rZW4sIHNvIHRoaXMgdG9rZW4gd2lsbCBvdmVyd3JpdGUgQ1NTJyAnY29tbWVudCcgdG9rZW5cblx0XHRcdCAqICAgICAvLyBhdCBpdHMgb3JpZ2luYWwgcG9zaXRpb25cblx0XHRcdCAqICAgICAnY29tbWVudCc6IHsgLi4uIH0sXG5cdFx0XHQgKiAgICAgLy8gQ1NTIGRvZXNuJ3QgaGF2ZSBhICdjb2xvcicgdG9rZW4sIHNvIHRoaXMgdG9rZW4gd2lsbCBiZSBhcHBlbmRlZFxuXHRcdFx0ICogICAgICdjb2xvcic6IC9cXGIoPzpyZWR8Z3JlZW58Ymx1ZSlcXGIvXG5cdFx0XHQgKiB9KTtcblx0XHRcdCAqL1xuXHRcdFx0ZXh0ZW5kOiBmdW5jdGlvbiAoaWQsIHJlZGVmKSB7XG5cdFx0XHRcdHZhciBsYW5nID0gXy51dGlsLmNsb25lKF8ubGFuZ3VhZ2VzW2lkXSk7XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHJlZGVmKSB7XG5cdFx0XHRcdFx0bGFuZ1trZXldID0gcmVkZWZba2V5XTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBsYW5nO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbnNlcnRzIHRva2VucyBfYmVmb3JlXyBhbm90aGVyIHRva2VuIGluIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBvciBhbnkgb3RoZXIgZ3JhbW1hci5cblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBVc2FnZVxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgaGVscGVyIG1ldGhvZCBtYWtlcyBpdCBlYXN5IHRvIG1vZGlmeSBleGlzdGluZyBsYW5ndWFnZXMuIEZvciBleGFtcGxlLCB0aGUgQ1NTIGxhbmd1YWdlIGRlZmluaXRpb25cblx0XHRcdCAqIG5vdCBvbmx5IGRlZmluZXMgQ1NTIGhpZ2hsaWdodGluZyBmb3IgQ1NTIGRvY3VtZW50cywgYnV0IGFsc28gbmVlZHMgdG8gZGVmaW5lIGhpZ2hsaWdodGluZyBmb3IgQ1NTIGVtYmVkZGVkXG5cdFx0XHQgKiBpbiBIVE1MIHRocm91Z2ggYDxzdHlsZT5gIGVsZW1lbnRzLiBUbyBkbyB0aGlzLCBpdCBuZWVkcyB0byBtb2RpZnkgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgIGFuZCBhZGQgdGhlXG5cdFx0XHQgKiBhcHByb3ByaWF0ZSB0b2tlbnMuIEhvd2V2ZXIsIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYCBpcyBhIHJlZ3VsYXIgSmF2YVNjcmlwdCBvYmplY3QgbGl0ZXJhbCwgc28gaWYgeW91IGRvXG5cdFx0XHQgKiB0aGlzOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMubWFya3VwLnN0eWxlID0ge1xuXHRcdFx0ICogICAgIC8vIHRva2VuXG5cdFx0XHQgKiB9O1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogdGhlbiB0aGUgYHN0eWxlYCB0b2tlbiB3aWxsIGJlIGFkZGVkIChhbmQgcHJvY2Vzc2VkKSBhdCB0aGUgZW5kLiBgaW5zZXJ0QmVmb3JlYCBhbGxvd3MgeW91IHRvIGluc2VydCB0b2tlbnNcblx0XHRcdCAqIGJlZm9yZSBleGlzdGluZyB0b2tlbnMuIEZvciB0aGUgQ1NTIGV4YW1wbGUgYWJvdmUsIHlvdSB3b3VsZCB1c2UgaXQgbGlrZSB0aGlzOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCB7XG5cdFx0XHQgKiAgICAgJ3N0eWxlJzoge1xuXHRcdFx0ICogICAgICAgICAvLyB0b2tlblxuXHRcdFx0ICogICAgIH1cblx0XHRcdCAqIH0pO1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogIyMgU3BlY2lhbCBjYXNlc1xuXHRcdFx0ICpcblx0XHRcdCAqIElmIHRoZSBncmFtbWFycyBvZiBgaW5zaWRlYCBhbmQgYGluc2VydGAgaGF2ZSB0b2tlbnMgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGUgdG9rZW5zIGluIGBpbnNpZGVgJ3MgZ3JhbW1hclxuXHRcdFx0ICogd2lsbCBiZSBpZ25vcmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIHVzZWQgdG8gaW5zZXJ0IHRva2VucyBhZnRlciBgYmVmb3JlYDpcblx0XHRcdCAqXG5cdFx0XHQgKiBgYGBqc1xuXHRcdFx0ICogUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NvbW1lbnQnLCB7XG5cdFx0XHQgKiAgICAgJ2NvbW1lbnQnOiBQcmlzbS5sYW5ndWFnZXMubWFya3VwLmNvbW1lbnQsXG5cdFx0XHQgKiAgICAgLy8gdG9rZW5zIGFmdGVyICdjb21tZW50J1xuXHRcdFx0ICogfSk7XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBMaW1pdGF0aW9uc1xuXHRcdFx0ICpcblx0XHRcdCAqIFRoZSBtYWluIHByb2JsZW0gYGluc2VydEJlZm9yZWAgaGFzIHRvIHNvbHZlIGlzIGl0ZXJhdGlvbiBvcmRlci4gU2luY2UgRVMyMDE1LCB0aGUgaXRlcmF0aW9uIG9yZGVyIGZvciBvYmplY3Rcblx0XHRcdCAqIHByb3BlcnRpZXMgaXMgZ3VhcmFudGVlZCB0byBiZSB0aGUgaW5zZXJ0aW9uIG9yZGVyIChleGNlcHQgZm9yIGludGVnZXIga2V5cykgYnV0IHNvbWUgYnJvd3NlcnMgYmVoYXZlXG5cdFx0XHQgKiBkaWZmZXJlbnRseSB3aGVuIGtleXMgYXJlIGRlbGV0ZWQgYW5kIHJlLWluc2VydGVkLiBTbyBgaW5zZXJ0QmVmb3JlYCBjYW4ndCBiZSBpbXBsZW1lbnRlZCBieSB0ZW1wb3JhcmlseVxuXHRcdFx0ICogZGVsZXRpbmcgcHJvcGVydGllcyB3aGljaCBpcyBuZWNlc3NhcnkgdG8gaW5zZXJ0IGF0IGFyYml0cmFyeSBwb3NpdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogVG8gc29sdmUgdGhpcyBwcm9ibGVtLCBgaW5zZXJ0QmVmb3JlYCBkb2Vzbid0IGFjdHVhbGx5IGluc2VydCB0aGUgZ2l2ZW4gdG9rZW5zIGludG8gdGhlIHRhcmdldCBvYmplY3QuXG5cdFx0XHQgKiBJbnN0ZWFkLCBpdCB3aWxsIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIHJlcGxhY2UgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCB0aGUgbmV3IG9uZS4gVGhpc1xuXHRcdFx0ICogY2FuIGJlIGRvbmUgd2l0aG91dCB0ZW1wb3JhcmlseSBkZWxldGluZyBwcm9wZXJ0aWVzLCBzbyB0aGUgaXRlcmF0aW9uIG9yZGVyIGlzIHdlbGwtZGVmaW5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBIb3dldmVyLCBvbmx5IHJlZmVyZW5jZXMgdGhhdCBjYW4gYmUgcmVhY2hlZCBmcm9tIGBQcmlzbS5sYW5ndWFnZXNgIG9yIGBpbnNlcnRgIHdpbGwgYmUgcmVwbGFjZWQuIEkuZS4gaWZcblx0XHRcdCAqIHlvdSBob2xkIHRoZSB0YXJnZXQgb2JqZWN0IGluIGEgdmFyaWFibGUsIHRoZW4gdGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZSB3aWxsIG5vdCBjaGFuZ2UuXG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIHZhciBvbGRNYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRcdFx0ICogdmFyIG5ld01hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjb21tZW50JywgeyAuLi4gfSk7XG5cdFx0XHQgKlxuXHRcdFx0ICogYXNzZXJ0KG9sZE1hcmt1cCAhPT0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCk7XG5cdFx0XHQgKiBhc3NlcnQobmV3TWFya3VwID09PSBQcmlzbS5sYW5ndWFnZXMubWFya3VwKTtcblx0XHRcdCAqIGBgYFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbnNpZGUgVGhlIHByb3BlcnR5IG9mIGByb290YCAoZS5nLiBhIGxhbmd1YWdlIGlkIGluIGBQcmlzbS5sYW5ndWFnZXNgKSB0aGF0IGNvbnRhaW5zIHRoZVxuXHRcdFx0ICogb2JqZWN0IHRvIGJlIG1vZGlmaWVkLlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGJlZm9yZSBUaGUga2V5IHRvIGluc2VydCBiZWZvcmUuXG5cdFx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGluc2VydCBBbiBvYmplY3QgY29udGFpbmluZyB0aGUga2V5LXZhbHVlIHBhaXJzIHRvIGJlIGluc2VydGVkLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBbcm9vdF0gVGhlIG9iamVjdCBjb250YWluaW5nIGBpbnNpZGVgLCBpLmUuIHRoZSBvYmplY3QgdGhhdCBjb250YWlucyB0aGVcblx0XHRcdCAqIG9iamVjdCB0byBiZSBtb2RpZmllZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBEZWZhdWx0cyB0byBgUHJpc20ubGFuZ3VhZ2VzYC5cblx0XHRcdCAqIEByZXR1cm5zIHtHcmFtbWFyfSBUaGUgbmV3IGdyYW1tYXIgb2JqZWN0LlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICovXG5cdFx0XHRpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChpbnNpZGUsIGJlZm9yZSwgaW5zZXJ0LCByb290KSB7XG5cdFx0XHRcdHJvb3QgPSByb290IHx8IC8qKiBAdHlwZSB7YW55fSAqLyAoXy5sYW5ndWFnZXMpO1xuXHRcdFx0XHR2YXIgZ3JhbW1hciA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdFx0LyoqIEB0eXBlIHtHcmFtbWFyfSAqL1xuXHRcdFx0XHR2YXIgcmV0ID0ge307XG5cblx0XHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0XHRcdGlmIChncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXG5cdFx0XHRcdFx0XHRpZiAodG9rZW4gPT0gYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIG5ld1Rva2VuIGluIGluc2VydCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChpbnNlcnQuaGFzT3duUHJvcGVydHkobmV3VG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXRbbmV3VG9rZW5dID0gaW5zZXJ0W25ld1Rva2VuXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gRG8gbm90IGluc2VydCB0b2tlbiB3aGljaCBhbHNvIG9jY3VyIGluIGluc2VydC4gU2VlICMxNTI1XG5cdFx0XHRcdFx0XHRpZiAoIWluc2VydC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblx0XHRcdFx0XHRcdFx0cmV0W3Rva2VuXSA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBvbGQgPSByb290W2luc2lkZV07XG5cdFx0XHRcdHJvb3RbaW5zaWRlXSA9IHJldDtcblxuXHRcdFx0XHQvLyBVcGRhdGUgcmVmZXJlbmNlcyBpbiBvdGhlciBsYW5ndWFnZSBkZWZpbml0aW9uc1xuXHRcdFx0XHRfLmxhbmd1YWdlcy5ERlMoXy5sYW5ndWFnZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBvbGQgJiYga2V5ICE9IGluc2lkZSkge1xuXHRcdFx0XHRcdFx0dGhpc1trZXldID0gcmV0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFRyYXZlcnNlIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiB3aXRoIERlcHRoIEZpcnN0IFNlYXJjaFxuXHRcdFx0REZTOiBmdW5jdGlvbiBERlMobywgY2FsbGJhY2ssIHR5cGUsIHZpc2l0ZWQpIHtcblx0XHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdFx0dmFyIG9iaklkID0gXy51dGlsLm9iaklkO1xuXG5cdFx0XHRcdGZvciAodmFyIGkgaW4gbykge1xuXHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG8sIGksIG9baV0sIHR5cGUgfHwgaSk7XG5cblx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eSA9IG9baV07XG5cdFx0XHRcdFx0XHR2YXIgcHJvcGVydHlUeXBlID0gXy51dGlsLnR5cGUocHJvcGVydHkpO1xuXG5cdFx0XHRcdFx0XHRpZiAocHJvcGVydHlUeXBlID09PSAnT2JqZWN0JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIG51bGwsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9wZXJ0eVR5cGUgPT09ICdBcnJheScgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRERlMocHJvcGVydHksIGNhbGxiYWNrLCBpLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cGx1Z2luczoge30sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGlzIHRoZSBtb3N0IGhpZ2gtbGV2ZWwgZnVuY3Rpb24gaW4gUHJpc23igJlzIEFQSS5cblx0XHQgKiBJdCBmZXRjaGVzIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBoYXZlIGEgYC5sYW5ndWFnZS14eHh4YCBjbGFzcyBhbmQgdGhlbiBjYWxscyB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0RWxlbWVudH0gb25cblx0XHQgKiBlYWNoIG9uZSBvZiB0aGVtLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIGBQcmlzbS5oaWdobGlnaHRBbGxVbmRlcihkb2N1bWVudCwgYXN5bmMsIGNhbGxiYWNrKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gU2FtZSBhcyBpbiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXJ9LlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gU2FtZSBhcyBpbiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXJ9LlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRoaWdobGlnaHRBbGw6IGZ1bmN0aW9uIChhc3luYywgY2FsbGJhY2spIHtcblx0XHRcdF8uaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGFzeW5jLCBjYWxsYmFjayk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEZldGNoZXMgYWxsIHRoZSBkZXNjZW5kYW50cyBvZiBgY29udGFpbmVyYCB0aGF0IGhhdmUgYSBgLmxhbmd1YWdlLXh4eHhgIGNsYXNzIGFuZCB0aGVuIGNhbGxzXG5cdFx0ICoge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IG9uIGVhY2ggb25lIG9mIHRoZW0uXG5cdFx0ICpcblx0XHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHRcdCAqIDEuIGBiZWZvcmUtaGlnaGxpZ2h0YWxsYFxuXHRcdCAqIDIuIGBiZWZvcmUtYWxsLWVsZW1lbnRzLWhpZ2hsaWdodGBcblx0XHQgKiAzLiBBbGwgaG9va3Mgb2Yge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IGZvciBlYWNoIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGNvbnRhaW5lciBUaGUgcm9vdCBlbGVtZW50LCB3aG9zZSBkZXNjZW5kYW50cyB0aGF0IGhhdmUgYSBgLmxhbmd1YWdlLXh4eHhgIGNsYXNzIHdpbGwgYmUgaGlnaGxpZ2h0ZWQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbYXN5bmM9ZmFsc2VdIFdoZXRoZXIgZWFjaCBlbGVtZW50IGlzIHRvIGJlIGhpZ2hsaWdodGVkIGFzeW5jaHJvbm91c2x5IHVzaW5nIFdlYiBXb3JrZXJzLlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBlYWNoIGVsZW1lbnQgYWZ0ZXIgaXRzIGhpZ2hsaWdodGluZyBpcyBkb25lLlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRoaWdobGlnaHRBbGxVbmRlcjogZnVuY3Rpb24gKGNvbnRhaW5lciwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLFxuXHRcdFx0XHRzZWxlY3RvcjogJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ1xuXHRcdFx0fTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHRhbGwnLCBlbnYpO1xuXG5cdFx0XHRlbnYuZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZW52LmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGVudi5zZWxlY3RvcikpO1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWFsbC1lbGVtZW50cy1oaWdobGlnaHQnLCBlbnYpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgKGVsZW1lbnQgPSBlbnYuZWxlbWVudHNbaSsrXSk7KSB7XG5cdFx0XHRcdF8uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50LCBhc3luYyA9PT0gdHJ1ZSwgZW52LmNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSGlnaGxpZ2h0cyB0aGUgY29kZSBpbnNpZGUgYSBzaW5nbGUgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIFRoZSBmb2xsb3dpbmcgaG9va3Mgd2lsbCBiZSBydW46XG5cdFx0ICogMS4gYGJlZm9yZS1zYW5pdHktY2hlY2tgXG5cdFx0ICogMi4gYGJlZm9yZS1oaWdobGlnaHRgXG5cdFx0ICogMy4gQWxsIGhvb2tzIG9mIHtAbGluayBQcmlzbS5oaWdobGlnaHR9LiBUaGVzZSBob29rcyB3aWxsIGJlIHJ1biBieSBhbiBhc3luY2hyb25vdXMgd29ya2VyIGlmIGBhc3luY2AgaXMgYHRydWVgLlxuXHRcdCAqIDQuIGBiZWZvcmUtaW5zZXJ0YFxuXHRcdCAqIDUuIGBhZnRlci1oaWdobGlnaHRgXG5cdFx0ICogNi4gYGNvbXBsZXRlYFxuXHRcdCAqXG5cdFx0ICogU29tZSB0aGUgYWJvdmUgaG9va3Mgd2lsbCBiZSBza2lwcGVkIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgY29udGFpbiBhbnkgdGV4dCBvciB0aGVyZSBpcyBubyBncmFtbWFyIGxvYWRlZCBmb3Jcblx0XHQgKiB0aGUgZWxlbWVudCdzIGxhbmd1YWdlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGNvZGUuXG5cdFx0ICogSXQgbXVzdCBoYXZlIGEgY2xhc3Mgb2YgYGxhbmd1YWdlLXh4eHhgIHRvIGJlIHByb2Nlc3NlZCwgd2hlcmUgYHh4eHhgIGlzIGEgdmFsaWQgbGFuZ3VhZ2UgaWRlbnRpZmllci5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gV2hldGhlciB0aGUgZWxlbWVudCBpcyB0byBiZSBoaWdobGlnaHRlZCBhc3luY2hyb25vdXNseSB1c2luZyBXZWIgV29ya2Vyc1xuXHRcdCAqIHRvIGltcHJvdmUgcGVyZm9ybWFuY2UgYW5kIGF2b2lkIGJsb2NraW5nIHRoZSBVSSB3aGVuIGhpZ2hsaWdodGluZyB2ZXJ5IGxhcmdlIGNodW5rcyBvZiBjb2RlLiBUaGlzIG9wdGlvbiBpc1xuXHRcdCAqIFtkaXNhYmxlZCBieSBkZWZhdWx0XShodHRwczovL3ByaXNtanMuY29tL2ZhcS5odG1sI3doeS1pcy1hc3luY2hyb25vdXMtaGlnaGxpZ2h0aW5nLWRpc2FibGVkLWJ5LWRlZmF1bHQpLlxuXHRcdCAqXG5cdFx0ICogTm90ZTogQWxsIGxhbmd1YWdlIGRlZmluaXRpb25zIHJlcXVpcmVkIHRvIGhpZ2hsaWdodCB0aGUgY29kZSBtdXN0IGJlIGluY2x1ZGVkIGluIHRoZSBtYWluIGBwcmlzbS5qc2AgZmlsZSBmb3Jcblx0XHQgKiBhc3luY2hyb25vdXMgaGlnaGxpZ2h0aW5nIHRvIHdvcmsuIFlvdSBjYW4gYnVpbGQgeW91ciBvd24gYnVuZGxlIG9uIHRoZVxuXHRcdCAqIFtEb3dubG9hZCBwYWdlXShodHRwczovL3ByaXNtanMuY29tL2Rvd25sb2FkLmh0bWwpLlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIGRvbmUuXG5cdFx0ICogTW9zdGx5IHVzZWZ1bCB3aGVuIGBhc3luY2AgaXMgYHRydWVgLCBzaW5jZSBpbiB0aGF0IGNhc2UsIHRoZSBoaWdobGlnaHRpbmcgaXMgZG9uZSBhc3luY2hyb25vdXNseS5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0RWxlbWVudDogZnVuY3Rpb24gKGVsZW1lbnQsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdFx0Ly8gRmluZCBsYW5ndWFnZVxuXHRcdFx0dmFyIGxhbmd1YWdlID0gXy51dGlsLmdldExhbmd1YWdlKGVsZW1lbnQpO1xuXHRcdFx0dmFyIGdyYW1tYXIgPSBfLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cblx0XHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgZWxlbWVudCwgaWYgbm90IHByZXNlbnRcblx0XHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShsYW5nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cblx0XHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgcGFyZW50LCBmb3Igc3R5bGluZ1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnKSB7XG5cdFx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY29kZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cblx0XHRcdHZhciBlbnYgPSB7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZSxcblx0XHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdFx0Y29kZTogY29kZVxuXHRcdFx0fTtcblxuXHRcdFx0ZnVuY3Rpb24gaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGhpZ2hsaWdodGVkQ29kZSkge1xuXHRcdFx0XHRlbnYuaGlnaGxpZ2h0ZWRDb2RlID0gaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0XHRlbnYuZWxlbWVudC5pbm5lckhUTUwgPSBlbnYuaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRcdF8uaG9va3MucnVuKCdhZnRlci1oaWdobGlnaHQnLCBlbnYpO1xuXHRcdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0XHQvLyBwbHVnaW5zIG1heSBjaGFuZ2UvYWRkIHRoZSBwYXJlbnQvZWxlbWVudFxuXHRcdFx0cGFyZW50ID0gZW52LmVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnICYmICFwYXJlbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG5cdFx0XHRcdHBhcmVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8udXRpbC5lbmNvZGUoZW52LmNvZGUpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYXN5bmMgJiYgX3NlbGYuV29ya2VyKSB7XG5cdFx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKF8uZmlsZW5hbWUpO1xuXG5cdFx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGV2dC5kYXRhKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdGxhbmd1YWdlOiBlbnYubGFuZ3VhZ2UsXG5cdFx0XHRcdFx0Y29kZTogZW52LmNvZGUsXG5cdFx0XHRcdFx0aW1tZWRpYXRlQ2xvc2U6IHRydWVcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8uaGlnaGxpZ2h0KGVudi5jb2RlLCBlbnYuZ3JhbW1hciwgZW52Lmxhbmd1YWdlKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIExvdy1sZXZlbCBmdW5jdGlvbiwgb25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3XigJlyZSBkb2luZy4gSXQgYWNjZXB0cyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0XG5cdFx0ICogYW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9ucyB0byB1c2UsIGFuZCByZXR1cm5zIGEgc3RyaW5nIHdpdGggdGhlIEhUTUwgcHJvZHVjZWQuXG5cdFx0ICpcblx0XHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHRcdCAqIDEuIGBiZWZvcmUtdG9rZW5pemVgXG5cdFx0ICogMi4gYGFmdGVyLXRva2VuaXplYFxuXHRcdCAqIDMuIGB3cmFwYDogT24gZWFjaCB7QGxpbmsgVG9rZW59LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgQSBzdHJpbmcgd2l0aCB0aGUgY29kZSB0byBiZSBoaWdobGlnaHRlZC5cblx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGdyYW1tYXIgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRva2VucyB0byB1c2UuXG5cdFx0ICpcblx0XHQgKiBVc3VhbGx5IGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBsaWtlIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIG5hbWUgb2YgdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gcGFzc2VkIHRvIGBncmFtbWFyYC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgaGlnaGxpZ2h0ZWQgSFRNTC5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBQcmlzbS5oaWdobGlnaHQoJ3ZhciBmb28gPSB0cnVlOycsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0LCAnamF2YXNjcmlwdCcpO1xuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodDogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIsIGxhbmd1YWdlKSB7XG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRjb2RlOiB0ZXh0LFxuXHRcdFx0XHRncmFtbWFyOiBncmFtbWFyLFxuXHRcdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHRcdH07XG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXRva2VuaXplJywgZW52KTtcblx0XHRcdGVudi50b2tlbnMgPSBfLnRva2VuaXplKGVudi5jb2RlLCBlbnYuZ3JhbW1hcik7XG5cdFx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItdG9rZW5pemUnLCBlbnYpO1xuXHRcdFx0cmV0dXJuIFRva2VuLnN0cmluZ2lmeShfLnV0aWwuZW5jb2RlKGVudi50b2tlbnMpLCBlbnYubGFuZ3VhZ2UpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGlzIHRoZSBoZWFydCBvZiBQcmlzbSwgYW5kIHRoZSBtb3N0IGxvdy1sZXZlbCBmdW5jdGlvbiB5b3UgY2FuIHVzZS4gSXQgYWNjZXB0cyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0XG5cdFx0ICogYW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9ucyB0byB1c2UsIGFuZCByZXR1cm5zIGFuIGFycmF5IHdpdGggdGhlIHRva2VuaXplZCBjb2RlLlxuXHRcdCAqXG5cdFx0ICogV2hlbiB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBpbmNsdWRlcyBuZXN0ZWQgdG9rZW5zLCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHJlY3Vyc2l2ZWx5IG9uIGVhY2ggb2YgdGhlc2UgdG9rZW5zLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBtZXRob2QgY291bGQgYmUgdXNlZnVsIGluIG90aGVyIGNvbnRleHRzIGFzIHdlbGwsIGFzIGEgdmVyeSBjcnVkZSBwYXJzZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBBIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvIGJlIGhpZ2hsaWdodGVkLlxuXHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gZ3JhbW1hciBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdG9rZW5zIHRvIHVzZS5cblx0XHQgKlxuXHRcdCAqIFVzdWFsbHkgYSBsYW5ndWFnZSBkZWZpbml0aW9uIGxpa2UgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgLlxuXHRcdCAqIEByZXR1cm5zIHtUb2tlblN0cmVhbX0gQW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQgdG9rZW5zLCBhIHRva2VuIHN0cmVhbS5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBsZXQgY29kZSA9IGB2YXIgZm9vID0gMDtgO1xuXHRcdCAqIGxldCB0b2tlbnMgPSBQcmlzbS50b2tlbml6ZShjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG5cdFx0ICogdG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuXHRcdCAqICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBQcmlzbS5Ub2tlbiAmJiB0b2tlbi50eXBlID09PSAnbnVtYmVyJykge1xuXHRcdCAqICAgICAgICAgY29uc29sZS5sb2coYEZvdW5kIG51bWVyaWMgbGl0ZXJhbDogJHt0b2tlbi5jb250ZW50fWApO1xuXHRcdCAqICAgICB9XG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0dG9rZW5pemU6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyKSB7XG5cdFx0XHR2YXIgcmVzdCA9IGdyYW1tYXIucmVzdDtcblx0XHRcdGlmIChyZXN0KSB7XG5cdFx0XHRcdGZvciAodmFyIHRva2VuIGluIHJlc3QpIHtcblx0XHRcdFx0XHRncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGdyYW1tYXIucmVzdDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHRva2VuTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG5cdFx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIHRva2VuTGlzdC5oZWFkLCB0ZXh0KTtcblxuXHRcdFx0bWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgdG9rZW5MaXN0LmhlYWQsIDApO1xuXG5cdFx0XHRyZXR1cm4gdG9BcnJheSh0b2tlbkxpc3QpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBAbmFtZXNwYWNlXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGhvb2tzOiB7XG5cdFx0XHRhbGw6IHt9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEFkZHMgdGhlIGdpdmVuIGNhbGxiYWNrIHRvIHRoZSBsaXN0IG9mIGNhbGxiYWNrcyBmb3IgdGhlIGdpdmVuIGhvb2suXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBob29rIGl0IGlzIHJlZ2lzdGVyZWQgZm9yIGlzIHJ1bi5cblx0XHRcdCAqIEhvb2tzIGFyZSB1c3VhbGx5IGRpcmVjdGx5IHJ1biBieSBhIGhpZ2hsaWdodCBmdW5jdGlvbiBidXQgeW91IGNhbiBhbHNvIHJ1biBob29rcyB5b3Vyc2VsZi5cblx0XHRcdCAqXG5cdFx0XHQgKiBPbmUgY2FsbGJhY2sgZnVuY3Rpb24gY2FuIGJlIHJlZ2lzdGVyZWQgdG8gbXVsdGlwbGUgaG9va3MgYW5kIHRoZSBzYW1lIGhvb2sgbXVsdGlwbGUgdGltZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2suXG5cdFx0XHQgKiBAcGFyYW0ge0hvb2tDYWxsYmFja30gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGdpdmVuIGVudmlyb25tZW50IHZhcmlhYmxlcy5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqL1xuXHRcdFx0YWRkOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcblx0XHRcdFx0dmFyIGhvb2tzID0gXy5ob29rcy5hbGw7XG5cblx0XHRcdFx0aG9va3NbbmFtZV0gPSBob29rc1tuYW1lXSB8fCBbXTtcblxuXHRcdFx0XHRob29rc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUnVucyBhIGhvb2sgaW52b2tpbmcgYWxsIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGVudmlyb25tZW50IHZhcmlhYmxlcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBDYWxsYmFja3Mgd2lsbCBiZSBpbnZva2VkIHN5bmNocm9ub3VzbHkgYW5kIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gZW52IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgb2YgdGhlIGhvb2sgcGFzc2VkIHRvIGFsbCBjYWxsYmFja3MgcmVnaXN0ZXJlZC5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqL1xuXHRcdFx0cnVuOiBmdW5jdGlvbiAobmFtZSwgZW52KSB7XG5cdFx0XHRcdHZhciBjYWxsYmFja3MgPSBfLmhvb2tzLmFsbFtuYW1lXTtcblxuXHRcdFx0XHRpZiAoIWNhbGxiYWNrcyB8fCAhY2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBjYWxsYmFjazsgKGNhbGxiYWNrID0gY2FsbGJhY2tzW2krK10pOykge1xuXHRcdFx0XHRcdGNhbGxiYWNrKGVudik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VG9rZW46IFRva2VuXG5cdH07XG5cdF9zZWxmLlByaXNtID0gXztcblxuXG5cdC8vIFR5cGVzY3JpcHQgbm90ZTpcblx0Ly8gVGhlIGZvbGxvd2luZyBjYW4gYmUgdXNlZCB0byBpbXBvcnQgdGhlIFRva2VuIHR5cGUgaW4gSlNEb2M6XG5cdC8vXG5cdC8vICAgQHR5cGVkZWYge0luc3RhbmNlVHlwZTxpbXBvcnQoXCIuL3ByaXNtLWNvcmVcIilbXCJUb2tlblwiXT59IFRva2VuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgdG9rZW4uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFNlZSB7QGxpbmsgVG9rZW4jdHlwZSB0eXBlfVxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IFRva2VuU3RyZWFtfSBjb250ZW50IFNlZSB7QGxpbmsgVG9rZW4jY29udGVudCBjb250ZW50fVxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW2FsaWFzXSBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFttYXRjaGVkU3RyPVwiXCJdIEEgY29weSBvZiB0aGUgZnVsbCBzdHJpbmcgdGhpcyB0b2tlbiB3YXMgY3JlYXRlZCBmcm9tLlxuXHQgKiBAY2xhc3Ncblx0ICogQGdsb2JhbFxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRmdW5jdGlvbiBUb2tlbih0eXBlLCBjb250ZW50LCBhbGlhcywgbWF0Y2hlZFN0cikge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB0eXBlIG9mIHRoZSB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIFRoaXMgaXMgdXN1YWxseSB0aGUga2V5IG9mIGEgcGF0dGVybiBpbiBhIHtAbGluayBHcmFtbWFyfS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHQvKipcblx0XHQgKiBUaGUgc3RyaW5ncyBvciB0b2tlbnMgY29udGFpbmVkIGJ5IHRoaXMgdG9rZW4uXG5cdFx0ICpcblx0XHQgKiBUaGlzIHdpbGwgYmUgYSB0b2tlbiBzdHJlYW0gaWYgdGhlIHBhdHRlcm4gbWF0Y2hlZCBhbHNvIGRlZmluZWQgYW4gYGluc2lkZWAgZ3JhbW1hci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmcgfCBUb2tlblN0cmVhbX1cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHQvKipcblx0XHQgKiBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd8c3RyaW5nW119XG5cdFx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5hbGlhcyA9IGFsaWFzO1xuXHRcdC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXHRcdHRoaXMubGVuZ3RoID0gKG1hdGNoZWRTdHIgfHwgJycpLmxlbmd0aCB8IDA7XG5cdH1cblxuXHQvKipcblx0ICogQSB0b2tlbiBzdHJlYW0gaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQge0BsaW5rIFRva2VuIFRva2VufSBvYmplY3RzLlxuXHQgKlxuXHQgKiBUb2tlbiBzdHJlYW1zIGhhdmUgdG8gZnVsZmlsbCBhIGZldyBwcm9wZXJ0aWVzIHRoYXQgYXJlIGFzc3VtZWQgYnkgbW9zdCBmdW5jdGlvbnMgKG1vc3RseSBpbnRlcm5hbCBvbmVzKSB0aGF0IHByb2Nlc3Ncblx0ICogdGhlbS5cblx0ICpcblx0ICogMS4gTm8gYWRqYWNlbnQgc3RyaW5ncy5cblx0ICogMi4gTm8gZW1wdHkgc3RyaW5ncy5cblx0ICpcblx0ICogICAgVGhlIG9ubHkgZXhjZXB0aW9uIGhlcmUgaXMgdGhlIHRva2VuIHN0cmVhbSB0aGF0IG9ubHkgY29udGFpbnMgdGhlIGVtcHR5IHN0cmluZyBhbmQgbm90aGluZyBlbHNlLlxuXHQgKlxuXHQgKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nIHwgVG9rZW4+fSBUb2tlblN0cmVhbVxuXHQgKiBAZ2xvYmFsXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIHRoZSBnaXZlbiB0b2tlbiBvciB0b2tlbiBzdHJlYW0gdG8gYW4gSFRNTCByZXByZXNlbnRhdGlvbi5cblx0ICpcblx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0ICogMS4gYHdyYXBgOiBPbiBlYWNoIHtAbGluayBUb2tlbn0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgVG9rZW4gfCBUb2tlblN0cmVhbX0gbyBUaGUgdG9rZW4gb3IgdG9rZW4gc3RyZWFtIHRvIGJlIGNvbnZlcnRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSBuYW1lIG9mIGN1cnJlbnQgbGFuZ3VhZ2UuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBIVE1MIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0b2tlbiBvciB0b2tlbiBzdHJlYW0uXG5cdCAqIEBtZW1iZXJvZiBUb2tlblxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRUb2tlbi5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkobywgbGFuZ3VhZ2UpIHtcblx0XHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBvO1xuXHRcdH1cblx0XHRpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuXHRcdFx0dmFyIHMgPSAnJztcblx0XHRcdG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRzICs9IHN0cmluZ2lmeShlLCBsYW5ndWFnZSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBzO1xuXHRcdH1cblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHR0eXBlOiBvLnR5cGUsXG5cdFx0XHRjb250ZW50OiBzdHJpbmdpZnkoby5jb250ZW50LCBsYW5ndWFnZSksXG5cdFx0XHR0YWc6ICdzcGFuJyxcblx0XHRcdGNsYXNzZXM6IFsndG9rZW4nLCBvLnR5cGVdLFxuXHRcdFx0YXR0cmlidXRlczoge30sXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHR9O1xuXG5cdFx0dmFyIGFsaWFzZXMgPSBvLmFsaWFzO1xuXHRcdGlmIChhbGlhc2VzKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhbGlhc2VzKSkge1xuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnYuY2xhc3Nlcy5wdXNoKGFsaWFzZXMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF8uaG9va3MucnVuKCd3cmFwJywgZW52KTtcblxuXHRcdHZhciBhdHRyaWJ1dGVzID0gJyc7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBlbnYuYXR0cmlidXRlcykge1xuXHRcdFx0YXR0cmlidXRlcyArPSAnICcgKyBuYW1lICsgJz1cIicgKyAoZW52LmF0dHJpYnV0ZXNbbmFtZV0gfHwgJycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKSArICdcIic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICc8JyArIGVudi50YWcgKyAnIGNsYXNzPVwiJyArIGVudi5jbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyBhdHRyaWJ1dGVzICsgJz4nICsgZW52LmNvbnRlbnQgKyAnPC8nICsgZW52LnRhZyArICc+Jztcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtSZWdFeHB9IHBhdHRlcm5cblx0ICogQHBhcmFtIHtudW1iZXJ9IHBvc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb2tiZWhpbmRcblx0ICogQHJldHVybnMge1JlZ0V4cEV4ZWNBcnJheSB8IG51bGx9XG5cdCAqL1xuXHRmdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKSB7XG5cdFx0cGF0dGVybi5sYXN0SW5kZXggPSBwb3M7XG5cdFx0dmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xuXHRcdGlmIChtYXRjaCAmJiBsb29rYmVoaW5kICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQvLyBjaGFuZ2UgdGhlIG1hdGNoIHRvIHJlbW92ZSB0aGUgdGV4dCBtYXRjaGVkIGJ5IHRoZSBQcmlzbSBsb29rYmVoaW5kIGdyb3VwXG5cdFx0XHR2YXIgbG9va2JlaGluZExlbmd0aCA9IG1hdGNoWzFdLmxlbmd0aDtcblx0XHRcdG1hdGNoLmluZGV4ICs9IGxvb2tiZWhpbmRMZW5ndGg7XG5cdFx0XHRtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGxvb2tiZWhpbmRMZW5ndGgpO1xuXHRcdH1cblx0XHRyZXR1cm4gbWF0Y2g7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PHN0cmluZyB8IFRva2VuPn0gdG9rZW5MaXN0XG5cdCAqIEBwYXJhbSB7YW55fSBncmFtbWFyXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdE5vZGU8c3RyaW5nIHwgVG9rZW4+fSBzdGFydE5vZGVcblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0UG9zXG5cdCAqIEBwYXJhbSB7UmVtYXRjaE9wdGlvbnN9IFtyZW1hdGNoXVxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICogQHByaXZhdGVcblx0ICpcblx0ICogQHR5cGVkZWYgUmVtYXRjaE9wdGlvbnNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGNhdXNlXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByZWFjaFxuXHQgKi9cblx0ZnVuY3Rpb24gbWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgc3RhcnROb2RlLCBzdGFydFBvcywgcmVtYXRjaCkge1xuXHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdGlmICghZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikgfHwgIWdyYW1tYXJbdG9rZW5dKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybnMgPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdHBhdHRlcm5zID0gQXJyYXkuaXNBcnJheShwYXR0ZXJucykgPyBwYXR0ZXJucyA6IFtwYXR0ZXJuc107XG5cblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcGF0dGVybnMubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0aWYgKHJlbWF0Y2ggJiYgcmVtYXRjaC5jYXVzZSA9PSB0b2tlbiArICcsJyArIGopIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcGF0dGVybk9iaiA9IHBhdHRlcm5zW2pdO1xuXHRcdFx0XHR2YXIgaW5zaWRlID0gcGF0dGVybk9iai5pbnNpZGU7XG5cdFx0XHRcdHZhciBsb29rYmVoaW5kID0gISFwYXR0ZXJuT2JqLmxvb2tiZWhpbmQ7XG5cdFx0XHRcdHZhciBncmVlZHkgPSAhIXBhdHRlcm5PYmouZ3JlZWR5O1xuXHRcdFx0XHR2YXIgYWxpYXMgPSBwYXR0ZXJuT2JqLmFsaWFzO1xuXG5cdFx0XHRcdGlmIChncmVlZHkgJiYgIXBhdHRlcm5PYmoucGF0dGVybi5nbG9iYWwpIHtcblx0XHRcdFx0XHQvLyBXaXRob3V0IHRoZSBnbG9iYWwgZmxhZywgbGFzdEluZGV4IHdvbid0IHdvcmtcblx0XHRcdFx0XHR2YXIgZmxhZ3MgPSBwYXR0ZXJuT2JqLnBhdHRlcm4udG9TdHJpbmcoKS5tYXRjaCgvW2ltc3V5XSokLylbMF07XG5cdFx0XHRcdFx0cGF0dGVybk9iai5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm5PYmoucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qKiBAdHlwZSB7UmVnRXhwfSAqL1xuXHRcdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5PYmoucGF0dGVybiB8fCBwYXR0ZXJuT2JqO1xuXG5cdFx0XHRcdGZvciAoIC8vIGl0ZXJhdGUgdGhlIHRva2VuIGxpc3QgYW5kIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgdG9rZW4vc3RyaW5nIHBvc2l0aW9uXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnROb2RlID0gc3RhcnROb2RlLm5leHQsIHBvcyA9IHN0YXJ0UG9zO1xuXHRcdFx0XHRcdGN1cnJlbnROb2RlICE9PSB0b2tlbkxpc3QudGFpbDtcblx0XHRcdFx0XHRwb3MgKz0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoLCBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcblx0XHRcdFx0KSB7XG5cblx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiBwb3MgPj0gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHN0ciA9IGN1cnJlbnROb2RlLnZhbHVlO1xuXG5cdFx0XHRcdFx0aWYgKHRva2VuTGlzdC5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIEFCT1JULCBBQk9SVCFcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc3RyIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciByZW1vdmVDb3VudCA9IDE7IC8vIHRoaXMgaXMgdGhlIHRvIHBhcmFtZXRlciBvZiByZW1vdmVCZXR3ZWVuXG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xuXG5cdFx0XHRcdFx0aWYgKGdyZWVkeSkge1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0XHR2YXIgdG8gPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0XHRcdHZhciBwID0gcG9zO1xuXG5cdFx0XHRcdFx0XHQvLyBmaW5kIHRoZSBub2RlIHRoYXQgY29udGFpbnMgdGhlIG1hdGNoXG5cdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlIChmcm9tID49IHApIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuXHRcdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIGFkanVzdCBwb3MgKGFuZCBwKVxuXHRcdFx0XHRcdFx0cCAtPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRwb3MgPSBwO1xuXG5cdFx0XHRcdFx0XHQvLyB0aGUgY3VycmVudCBub2RlIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnROb2RlLnZhbHVlIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIGZpbmQgdGhlIGxhc3Qgbm9kZSB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIG1hdGNoXG5cdFx0XHRcdFx0XHRmb3IgKFxuXHRcdFx0XHRcdFx0XHR2YXIgayA9IGN1cnJlbnROb2RlO1xuXHRcdFx0XHRcdFx0XHRrICE9PSB0b2tlbkxpc3QudGFpbCAmJiAocCA8IHRvIHx8IHR5cGVvZiBrLnZhbHVlID09PSAnc3RyaW5nJyk7XG5cdFx0XHRcdFx0XHRcdGsgPSBrLm5leHRcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRyZW1vdmVDb3VudCsrO1xuXHRcdFx0XHRcdFx0XHRwICs9IGsudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmVtb3ZlQ291bnQtLTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRcdHN0ciA9IHRleHQuc2xpY2UocG9zLCBwKTtcblx0XHRcdFx0XHRcdG1hdGNoLmluZGV4IC09IHBvcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgMCwgc3RyLCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0dmFyIG1hdGNoU3RyID0gbWF0Y2hbMF07XG5cdFx0XHRcdFx0dmFyIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKTtcblx0XHRcdFx0XHR2YXIgYWZ0ZXIgPSBzdHIuc2xpY2UoZnJvbSArIG1hdGNoU3RyLmxlbmd0aCk7XG5cblx0XHRcdFx0XHR2YXIgcmVhY2ggPSBwb3MgKyBzdHIubGVuZ3RoO1xuXHRcdFx0XHRcdGlmIChyZW1hdGNoICYmIHJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0cmVtYXRjaC5yZWFjaCA9IHJlYWNoO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciByZW1vdmVGcm9tID0gY3VycmVudE5vZGUucHJldjtcblxuXHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdHJlbW92ZUZyb20gPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIGJlZm9yZSk7XG5cdFx0XHRcdFx0XHRwb3MgKz0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZW1vdmVSYW5nZSh0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHJlbW92ZUNvdW50KTtcblxuXHRcdFx0XHRcdHZhciB3cmFwcGVkID0gbmV3IFRva2VuKHRva2VuLCBpbnNpZGUgPyBfLnRva2VuaXplKG1hdGNoU3RyLCBpbnNpZGUpIDogbWF0Y2hTdHIsIGFsaWFzLCBtYXRjaFN0cik7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHdyYXBwZWQpO1xuXG5cdFx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIGN1cnJlbnROb2RlLCBhZnRlcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlbW92ZUNvdW50ID4gMSkge1xuXHRcdFx0XHRcdFx0Ly8gYXQgbGVhc3Qgb25lIFRva2VuIG9iamVjdCB3YXMgcmVtb3ZlZCwgc28gd2UgaGF2ZSB0byBkbyBzb21lIHJlbWF0Y2hpbmdcblx0XHRcdFx0XHRcdC8vIHRoaXMgY2FuIG9ubHkgaGFwcGVuIGlmIHRoZSBjdXJyZW50IHBhdHRlcm4gaXMgZ3JlZWR5XG5cblx0XHRcdFx0XHRcdC8qKiBAdHlwZSB7UmVtYXRjaE9wdGlvbnN9ICovXG5cdFx0XHRcdFx0XHR2YXIgbmVzdGVkUmVtYXRjaCA9IHtcblx0XHRcdFx0XHRcdFx0Y2F1c2U6IHRva2VuICsgJywnICsgaixcblx0XHRcdFx0XHRcdFx0cmVhY2g6IHJlYWNoXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0bWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgY3VycmVudE5vZGUucHJldiwgcG9zLCBuZXN0ZWRSZW1hdGNoKTtcblxuXHRcdFx0XHRcdFx0Ly8gdGhlIHJlYWNoIG1pZ2h0IGhhdmUgYmVlbiBleHRlbmRlZCBiZWNhdXNlIG9mIHRoZSByZW1hdGNoaW5nXG5cdFx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiBuZXN0ZWRSZW1hdGNoLnJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0XHRyZW1hdGNoLnJlYWNoID0gbmVzdGVkUmVtYXRjaC5yZWFjaDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGVkZWYgTGlua2VkTGlzdE5vZGVcblx0ICogQHByb3BlcnR5IHtUfSB2YWx1ZVxuXHQgKiBAcHJvcGVydHkge0xpbmtlZExpc3ROb2RlPFQ+IHwgbnVsbH0gcHJldiBUaGUgcHJldmlvdXMgbm9kZS5cblx0ICogQHByb3BlcnR5IHtMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGx9IG5leHQgVGhlIG5leHQgbm9kZS5cblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHByaXZhdGVcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBMaW5rZWRMaXN0KCkge1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dmFyIGhlYWQgPSB7IHZhbHVlOiBudWxsLCBwcmV2OiBudWxsLCBuZXh0OiBudWxsIH07XG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR2YXIgdGFpbCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IGhlYWQsIG5leHQ6IG51bGwgfTtcblx0XHRoZWFkLm5leHQgPSB0YWlsO1xuXG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR0aGlzLmhlYWQgPSBoZWFkO1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dGhpcy50YWlsID0gdGFpbDtcblx0XHR0aGlzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIG5ldyBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBsaXN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3Q8VD59IGxpc3Rcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxUPn0gbm9kZVxuXHQgKiBAcGFyYW0ge1R9IHZhbHVlXG5cdCAqIEByZXR1cm5zIHtMaW5rZWRMaXN0Tm9kZTxUPn0gVGhlIGFkZGVkIG5vZGUuXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiBhZGRBZnRlcihsaXN0LCBub2RlLCB2YWx1ZSkge1xuXHRcdC8vIGFzc3VtZXMgdGhhdCBub2RlICE9IGxpc3QudGFpbCAmJiB2YWx1ZXMubGVuZ3RoID49IDBcblx0XHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblxuXHRcdHZhciBuZXdOb2RlID0geyB2YWx1ZTogdmFsdWUsIHByZXY6IG5vZGUsIG5leHQ6IG5leHQgfTtcblx0XHRub2RlLm5leHQgPSBuZXdOb2RlO1xuXHRcdG5leHQucHJldiA9IG5ld05vZGU7XG5cdFx0bGlzdC5sZW5ndGgrKztcblxuXHRcdHJldHVybiBuZXdOb2RlO1xuXHR9XG5cdC8qKlxuXHQgKiBSZW1vdmVzIGBjb3VudGAgbm9kZXMgYWZ0ZXIgdGhlIGdpdmVuIG5vZGUuIFRoZSBnaXZlbiBub2RlIHdpbGwgbm90IGJlIHJlbW92ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPFQ+fSBub2RlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKi9cblx0ZnVuY3Rpb24gcmVtb3ZlUmFuZ2UobGlzdCwgbm9kZSwgY291bnQpIHtcblx0XHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50ICYmIG5leHQgIT09IGxpc3QudGFpbDsgaSsrKSB7XG5cdFx0XHRuZXh0ID0gbmV4dC5uZXh0O1xuXHRcdH1cblx0XHRub2RlLm5leHQgPSBuZXh0O1xuXHRcdG5leHQucHJldiA9IG5vZGU7XG5cdFx0bGlzdC5sZW5ndGggLT0gaTtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG5cdCAqIEByZXR1cm5zIHtUW119XG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FycmF5KGxpc3QpIHtcblx0XHR2YXIgYXJyYXkgPSBbXTtcblx0XHR2YXIgbm9kZSA9IGxpc3QuaGVhZC5uZXh0O1xuXHRcdHdoaWxlIChub2RlICE9PSBsaXN0LnRhaWwpIHtcblx0XHRcdGFycmF5LnB1c2gobm9kZS52YWx1ZSk7XG5cdFx0XHRub2RlID0gbm9kZS5uZXh0O1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxuXG5cdGlmICghX3NlbGYuZG9jdW1lbnQpIHtcblx0XHRpZiAoIV9zZWxmLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdC8vIGluIE5vZGUuanNcblx0XHRcdHJldHVybiBfO1xuXHRcdH1cblxuXHRcdGlmICghXy5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIpIHtcblx0XHRcdC8vIEluIHdvcmtlclxuXHRcdFx0X3NlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0dmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2dC5kYXRhKTtcblx0XHRcdFx0dmFyIGxhbmcgPSBtZXNzYWdlLmxhbmd1YWdlO1xuXHRcdFx0XHR2YXIgY29kZSA9IG1lc3NhZ2UuY29kZTtcblx0XHRcdFx0dmFyIGltbWVkaWF0ZUNsb3NlID0gbWVzc2FnZS5pbW1lZGlhdGVDbG9zZTtcblxuXHRcdFx0XHRfc2VsZi5wb3N0TWVzc2FnZShfLmhpZ2hsaWdodChjb2RlLCBfLmxhbmd1YWdlc1tsYW5nXSwgbGFuZykpO1xuXHRcdFx0XHRpZiAoaW1tZWRpYXRlQ2xvc2UpIHtcblx0XHRcdFx0XHRfc2VsZi5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHQvLyBHZXQgY3VycmVudCBzY3JpcHQgYW5kIGhpZ2hsaWdodFxuXHR2YXIgc2NyaXB0ID0gXy51dGlsLmN1cnJlbnRTY3JpcHQoKTtcblxuXHRpZiAoc2NyaXB0KSB7XG5cdFx0Xy5maWxlbmFtZSA9IHNjcmlwdC5zcmM7XG5cblx0XHRpZiAoc2NyaXB0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tYW51YWwnKSkge1xuXHRcdFx0Xy5tYW51YWwgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjaygpIHtcblx0XHRpZiAoIV8ubWFudWFsKSB7XG5cdFx0XHRfLmhpZ2hsaWdodEFsbCgpO1xuXHRcdH1cblx0fVxuXG5cdGlmICghXy5tYW51YWwpIHtcblx0XHQvLyBJZiB0aGUgZG9jdW1lbnQgc3RhdGUgaXMgXCJsb2FkaW5nXCIsIHRoZW4gd2UnbGwgdXNlIERPTUNvbnRlbnRMb2FkZWQuXG5cdFx0Ly8gSWYgdGhlIGRvY3VtZW50IHN0YXRlIGlzIFwiaW50ZXJhY3RpdmVcIiBhbmQgdGhlIHByaXNtLmpzIHNjcmlwdCBpcyBkZWZlcnJlZCwgdGhlbiB3ZSdsbCBhbHNvIHVzZSB0aGVcblx0XHQvLyBET01Db250ZW50TG9hZGVkIGV2ZW50IGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgc29tZSBwbHVnaW5zIG9yIGxhbmd1YWdlcyB3aGljaCBoYXZlIGFsc28gYmVlbiBkZWZlcnJlZCBhbmQgdGhleVxuXHRcdC8vIG1pZ2h0IHRha2UgbG9uZ2VyIG9uZSBhbmltYXRpb24gZnJhbWUgdG8gZXhlY3V0ZSB3aGljaCBjYW4gY3JlYXRlIGEgcmFjZSBjb25kaXRpb24gd2hlcmUgb25seSBzb21lIHBsdWdpbnMgaGF2ZVxuXHRcdC8vIGJlZW4gbG9hZGVkIHdoZW4gUHJpc20uaGlnaGxpZ2h0QWxsKCkgaXMgZXhlY3V0ZWQsIGRlcGVuZGluZyBvbiBob3cgZmFzdCByZXNvdXJjZXMgYXJlIGxvYWRlZC5cblx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1ByaXNtSlMvcHJpc20vaXNzdWVzLzIxMDJcblx0XHR2YXIgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG5cdFx0aWYgKHJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJyB8fCByZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnICYmIHNjcmlwdCAmJiBzY3JpcHQuZGVmZXIpIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2ssIDE2KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gXztcblxufShfc2VsZikpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmlzbTtcbn1cblxuLy8gaGFjayBmb3IgY29tcG9uZW50cyB0byB3b3JrIGNvcnJlY3RseSBpbiBub2RlLmpzXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Z2xvYmFsLlByaXNtID0gUHJpc207XG59XG5cbi8vIHNvbWUgYWRkaXRpb25hbCBkb2N1bWVudGF0aW9uL3R5cGVzXG5cbi8qKlxuICogVGhlIGV4cGFuc2lvbiBvZiBhIHNpbXBsZSBgUmVnRXhwYCBsaXRlcmFsIHRvIHN1cHBvcnQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLlxuICpcbiAqIEB0eXBlZGVmIEdyYW1tYXJUb2tlblxuICogQHByb3BlcnR5IHtSZWdFeHB9IHBhdHRlcm4gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBvZiB0aGUgdG9rZW4uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtsb29rYmVoaW5kPWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIGZpcnN0IGNhcHR1cmluZyBncm91cCBvZiBgcGF0dGVybmAgd2lsbCAoZWZmZWN0aXZlbHkpXG4gKiBiZWhhdmUgYXMgYSBsb29rYmVoaW5kIGdyb3VwIG1lYW5pbmcgdGhhdCB0aGUgY2FwdHVyZWQgdGV4dCB3aWxsIG5vdCBiZSBwYXJ0IG9mIHRoZSBtYXRjaGVkIHRleHQgb2YgdGhlIG5ldyB0b2tlbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2dyZWVkeT1mYWxzZV0gV2hldGhlciB0aGUgdG9rZW4gaXMgZ3JlZWR5LlxuICogQHByb3BlcnR5IHtzdHJpbmd8c3RyaW5nW119IFthbGlhc10gQW4gb3B0aW9uYWwgYWxpYXMgb3IgbGlzdCBvZiBhbGlhc2VzLlxuICogQHByb3BlcnR5IHtHcmFtbWFyfSBbaW5zaWRlXSBUaGUgbmVzdGVkIGdyYW1tYXIgb2YgdGhpcyB0b2tlbi5cbiAqXG4gKiBUaGUgYGluc2lkZWAgZ3JhbW1hciB3aWxsIGJlIHVzZWQgdG8gdG9rZW5pemUgdGhlIHRleHQgdmFsdWUgb2YgZWFjaCB0b2tlbiBvZiB0aGlzIGtpbmQuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBtYWtlIG5lc3RlZCBhbmQgZXZlbiByZWN1cnNpdmUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMuXG4gKlxuICogTm90ZTogVGhpcyBjYW4gY2F1c2UgaW5maW5pdGUgcmVjdXJzaW9uLiBCZSBjYXJlZnVsIHdoZW4geW91IGVtYmVkIGRpZmZlcmVudCBsYW5ndWFnZXMgb3IgZXZlbiB0aGUgc2FtZSBsYW5ndWFnZSBpbnRvXG4gKiBlYWNoIGFub3RoZXIuXG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBHcmFtbWFyXG4gKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgUmVnRXhwIHwgR3JhbW1hclRva2VuIHwgQXJyYXk8UmVnRXhwIHwgR3JhbW1hclRva2VuPj59XG4gKiBAcHJvcGVydHkge0dyYW1tYXJ9IFtyZXN0XSBBbiBvcHRpb25hbCBncmFtbWFyIG9iamVjdCB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhpcyBncmFtbWFyLlxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB3aGljaCB3aWxsIGludm9rZWQgYWZ0ZXIgYW4gZWxlbWVudCB3YXMgc3VjY2Vzc2Z1bGx5IGhpZ2hsaWdodGVkLlxuICpcbiAqIEBjYWxsYmFjayBIaWdobGlnaHRDYWxsYmFja1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHN1Y2Nlc3NmdWxseSBoaWdobGlnaHRlZC5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEhvb2tDYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBlbnYgVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBvZiB0aGUgaG9vay5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1tYXJrdXAuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCA9IHtcblx0J2NvbW1lbnQnOiB7XG5cdFx0cGF0dGVybjogLzwhLS0oPzooPyE8IS0tKVtcXHNcXFNdKSo/LS0+Lyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3Byb2xvZyc6IHtcblx0XHRwYXR0ZXJuOiAvPFxcP1tcXHNcXFNdKz9cXD8+Lyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2RvY3R5cGUnOiB7XG5cdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtZG9jdHlwZWRlY2xcblx0XHRwYXR0ZXJuOiAvPCFET0NUWVBFKD86W14+XCInW1xcXV18XCJbXlwiXSpcInwnW14nXSonKSsoPzpcXFsoPzpbXjxcIidcXF1dfFwiW15cIl0qXCJ8J1teJ10qJ3w8KD8hIS0tKXw8IS0tKD86W14tXXwtKD8hLT4pKSotLT4pKlxcXVxccyopPz4vaSxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnaW50ZXJuYWwtc3Vic2V0Jzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKF5bXlxcW10qXFxbKVtcXHNcXFNdKyg/PVxcXT4kKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiBudWxsIC8vIHNlZSBiZWxvd1xuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9cIlteXCJdKlwifCdbXiddKicvLFxuXHRcdFx0XHRncmVlZHk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXjwhfD4kfFtbXFxdXS8sXG5cdFx0XHQnZG9jdHlwZS10YWcnOiAvXkRPQ1RZUEUvaSxcblx0XHRcdCduYW1lJzogL1teXFxzPD4nXCJdKy9cblx0XHR9XG5cdH0sXG5cdCdjZGF0YSc6IHtcblx0XHRwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCd0YWcnOiB7XG5cdFx0cGF0dGVybjogLzxcXC8/KD8hXFxkKVteXFxzPlxcLz0kPCVdKyg/Olxccyg/OlxccypbXlxccz5cXC89XSsoPzpcXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSl8KD89W1xccy8+XSkpKSspP1xccypcXC8/Pi8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RhZyc6IHtcblx0XHRcdFx0cGF0dGVybjogL148XFwvP1teXFxzPlxcL10rLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL148XFwvPy8sXG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzcGVjaWFsLWF0dHInOiBbXSxcblx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKS8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL149Lyxcblx0XHRcdFx0XHRcdFx0YWxpYXM6ICdhdHRyLWVxdWFscydcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQvXCJ8Jy9cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXFwvPz4vLFxuXHRcdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL1teXFxzPlxcL10rLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9LFxuXHQnZW50aXR5JzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8mW1xcZGEtel17MSw4fTsvaSxcblx0XHRcdGFsaWFzOiAnbmFtZWQtZW50aXR5J1xuXHRcdH0sXG5cdFx0LyYjeD9bXFxkYS1mXXsxLDh9Oy9pXG5cdF1cbn07XG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddLmluc2lkZVsnZW50aXR5J10gPVxuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwWydlbnRpdHknXTtcblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ2RvY3R5cGUnXS5pbnNpZGVbJ2ludGVybmFsLXN1YnNldCddLmluc2lkZSA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cbi8vIFBsdWdpbiB0byBtYWtlIGVudGl0eSB0aXRsZSBzaG93IHRoZSByZWFsIGVudGl0eSwgaWRlYSBieSBSb21hbiBLb21hcm92XG5QcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbiAoZW52KSB7XG5cblx0aWYgKGVudi50eXBlID09PSAnZW50aXR5Jykge1xuXHRcdGVudi5hdHRyaWJ1dGVzWyd0aXRsZSddID0gZW52LmNvbnRlbnQucmVwbGFjZSgvJmFtcDsvLCAnJicpO1xuXHR9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLCAnYWRkSW5saW5lZCcsIHtcblx0LyoqXG5cdCAqIEFkZHMgYW4gaW5saW5lZCBsYW5ndWFnZSB0byBtYXJrdXAuXG5cdCAqXG5cdCAqIEFuIGV4YW1wbGUgb2YgYW4gaW5saW5lZCBsYW5ndWFnZSBpcyBDU1Mgd2l0aCBgPHN0eWxlPmAgdGFncy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgVGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBpbmxpbmVkIGxhbmd1YWdlLiBUaGlzIG5hbWUgd2lsbCBiZSB0cmVhdGVkIGFzXG5cdCAqIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG5cdCAqIEBleGFtcGxlXG5cdCAqIGFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXHQgKi9cblx0dmFsdWU6IGZ1bmN0aW9uIGFkZElubGluZWQodGFnTmFtZSwgbGFuZykge1xuXHRcdHZhciBpbmNsdWRlZENkYXRhSW5zaWRlID0ge307XG5cdFx0aW5jbHVkZWRDZGF0YUluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuXHRcdFx0cGF0dGVybjogLyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHR9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2NkYXRhJ10gPSAvXjwhXFxbQ0RBVEFcXFt8XFxdXFxdPiQvaTtcblxuXHRcdHZhciBpbnNpZGUgPSB7XG5cdFx0XHQnaW5jbHVkZWQtY2RhdGEnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT4vaSxcblx0XHRcdFx0aW5zaWRlOiBpbmNsdWRlZENkYXRhSW5zaWRlXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRpbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHR9O1xuXG5cdFx0dmFyIGRlZiA9IHt9O1xuXHRcdGRlZlt0YWdOYW1lXSA9IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKDxfX1tePl0qPikoPzo8IVxcW0NEQVRBXFxbKD86W15cXF1dfFxcXSg/IVxcXT4pKSpcXF1cXF0+fCg/ITwhXFxbQ0RBVEFcXFspW1xcc1xcU10pKj8oPz08XFwvX18+KS8uc291cmNlLnJlcGxhY2UoL19fL2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRhZ05hbWU7IH0pLCAnaScpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZTogaW5zaWRlXG5cdFx0fTtcblxuXHRcdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjZGF0YScsIGRlZik7XG5cdH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLCAnYWRkQXR0cmlidXRlJywge1xuXHQvKipcblx0ICogQWRkcyBhbiBwYXR0ZXJuIHRvIGhpZ2hsaWdodCBsYW5ndWFnZXMgZW1iZWRkZWQgaW4gSFRNTCBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYHN0eWxlYCBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXR0ck5hbWUgVGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBpbmxpbmVkIGxhbmd1YWdlLiBUaGlzIG5hbWUgd2lsbCBiZSB0cmVhdGVkIGFzXG5cdCAqIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG5cdCAqIEBleGFtcGxlXG5cdCAqIGFkZEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3NzJyk7XG5cdCAqL1xuXHR2YWx1ZTogZnVuY3Rpb24gKGF0dHJOYW1lLCBsYW5nKSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuaW5zaWRlWydzcGVjaWFsLWF0dHInXS5wdXNoKHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cChcblx0XHRcdFx0LyhefFtcIidcXHNdKS8uc291cmNlICsgJyg/OicgKyBhdHRyTmFtZSArICcpJyArIC9cXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSkvLnNvdXJjZSxcblx0XHRcdFx0J2knXG5cdFx0XHQpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnYXR0ci1uYW1lJzogL15bXlxccz1dKy8sXG5cdFx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC89W1xcc1xcU10rLyxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCd2YWx1ZSc6IHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogLyhePVxccyooW1wiJ118KD8hW1wiJ10pKSlcXFNbXFxzXFxTXSooPz1cXDIkKS8sXG5cdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGFsaWFzOiBbbGFuZywgJ2xhbmd1YWdlLScgKyBsYW5nXSxcblx0XHRcdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXj0vLFxuXHRcdFx0XHRcdFx0XHRcdGFsaWFzOiAnYXR0ci1lcXVhbHMnXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdC9cInwnL1xuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmh0bWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLm1hdGhtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMuc3ZnID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblxuUHJpc20ubGFuZ3VhZ2VzLnhtbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KTtcblByaXNtLmxhbmd1YWdlcy5zc21sID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcblByaXNtLmxhbmd1YWdlcy5hdG9tID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcblByaXNtLmxhbmd1YWdlcy5yc3MgPSBQcmlzbS5sYW5ndWFnZXMueG1sO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY3NzLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgc3RyaW5nID0gLyg/OlwiKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cIlxcXFxcXHJcXG5dKSpcInwnKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W14nXFxcXFxcclxcbl0pKicpLztcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzID0ge1xuXHRcdCdjb21tZW50JzogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuXHRcdCdhdHJ1bGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvQFtcXHctXSg/OlteO3tcXHNdfFxccysoPyFbXFxze10pKSooPzo7fCg/PVxccypcXHspKS8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3J1bGUnOiAvXkBbXFx3LV0rLyxcblx0XHRcdFx0J3NlbGVjdG9yLWZ1bmN0aW9uLWFyZ3VtZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXFxic2VsZWN0b3JcXHMqXFwoXFxzKig/IVtcXHMpXSkpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCkpKyg/PVxccypcXCkpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGFsaWFzOiAnc2VsZWN0b3InXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdrZXl3b3JkJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXnxbXlxcdy1dKSg/OmFuZHxub3R8b25seXxvcikoPyFbXFx3LV0pLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU2VlIHJlc3QgYmVsb3dcblx0XHRcdH1cblx0XHR9LFxuXHRcdCd1cmwnOiB7XG5cdFx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ1xcXFxidXJsXFxcXCgoPzonICsgc3RyaW5nLnNvdXJjZSArICd8JyArIC8oPzpbXlxcXFxcXHJcXG4oKVwiJ118XFxcXFtcXHNcXFNdKSovLnNvdXJjZSArICcpXFxcXCknLCAnaScpLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdmdW5jdGlvbic6IC9edXJsL2ksXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFwofFxcKSQvLFxuXHRcdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnXicgKyBzdHJpbmcuc291cmNlICsgJyQnKSxcblx0XHRcdFx0XHRhbGlhczogJ3VybCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3NlbGVjdG9yJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCcoXnxbe31cXFxcc10pW157fVxcXFxzXSg/Oltee307XCJcXCdcXFxcc118XFxcXHMrKD8hW1xcXFxze10pfCcgKyBzdHJpbmcuc291cmNlICsgJykqKD89XFxcXHMqXFxcXHspJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogc3RyaW5nLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQncHJvcGVydHknOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14tXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVstX2EtelxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVstXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxccyo6KS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J2ltcG9ydGFudCc6IC8haW1wb3J0YW50XFxiL2ksXG5cdFx0J2Z1bmN0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLWEtejAtOV0pWy1hLXowLTldKyg/PVxcKCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bKCl7fTs6LF0vXG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuY3NzO1xuXG5cdHZhciBtYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRpZiAobWFya3VwKSB7XG5cdFx0bWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblx0XHRtYXJrdXAudGFnLmFkZEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3NzJyk7XG5cdH1cblxufShQcmlzbSkpO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY2xpa2UuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmNsaWtlID0ge1xuXHQnY29tbWVudCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3x0cmFpdHxpbnN0YW5jZW9mfG5ldylcXHMrfFxcYmNhdGNoXFxzK1xcKClbXFx3LlxcXFxdKy9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWy5cXFxcXS9cblx0XHR9XG5cdH0sXG5cdCdrZXl3b3JkJzogL1xcYig/OmlmfGVsc2V8d2hpbGV8ZG98Zm9yfHJldHVybnxpbnxpbnN0YW5jZW9mfGZ1bmN0aW9ufG5ld3x0cnl8dGhyb3d8Y2F0Y2h8ZmluYWxseXxudWxsfGJyZWFrfGNvbnRpbnVlKVxcYi8sXG5cdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0J2Z1bmN0aW9uJzogL1xcYlxcdysoPz1cXCgpLyxcblx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdvcGVyYXRvcic6IC9bPD5dPT98WyE9XT0/PT98LS0/fFxcK1xcKz98JiY/fFxcfFxcfD98Wz8qL35eJV0vLFxuXHQncHVuY3R1YXRpb24nOiAvW3t9W1xcXTsoKSwuOl0vXG59O1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tamF2YXNjcmlwdC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQnY2xhc3MtbmFtZSc6IFtcblx0XHRQcmlzbS5sYW5ndWFnZXMuY2xpa2VbJ2NsYXNzLW5hbWUnXSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVtfJEEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxcLig/OnByb3RvdHlwZXxjb25zdHJ1Y3RvcikpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdrZXl3b3JkJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86XnxcXH0pXFxzKiljYXRjaFxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14uXXxcXC5cXC5cXC5cXHMqKVxcYig/OmFzfGFzc2VydCg/PVxccypcXHspfGFzeW5jKD89XFxzKig/OmZ1bmN0aW9uXFxifFxcKHxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5KD89XFxzKig/Olxce3wkKSl8Zm9yfGZyb20oPz1cXHMqKD86WydcIl18JCkpfGZ1bmN0aW9ufCg/OmdldHxzZXQpKD89XFxzKig/OlsjXFxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XSxcblx0Ly8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG5cdCdmdW5jdGlvbic6IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcblx0J251bWJlcic6IC9cXGIoPzooPzowW3hYXSg/OltcXGRBLUZhLWZdKD86X1tcXGRBLUZhLWZdKT8pK3wwW2JCXSg/OlswMV0oPzpfWzAxXSk/KSt8MFtvT10oPzpbMC03XSg/Ol9bMC03XSk/KSspbj98KD86XFxkKD86X1xcZCk/KStufE5hTnxJbmZpbml0eSlcXGJ8KD86XFxiKD86XFxkKD86X1xcZCk/KStcXC4/KD86XFxkKD86X1xcZCk/KSp8XFxCXFwuKD86XFxkKD86X1xcZCk/KSspKD86W0VlXVsrLV0/KD86XFxkKD86X1xcZCk/KSspPy8sXG5cdCdvcGVyYXRvcic6IC8tLXxcXCtcXCt8XFwqXFwqPT98PT58JiY9P3xcXHxcXHw9P3xbIT1dPT18PDw9P3w+Pj4/PT98Wy0rKi8lJnxeIT08Pl09P3xcXC57M318XFw/XFw/PT98XFw/XFwuP3xbfjpdL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydjbGFzcy1uYW1lJ11bMF0ucGF0dGVybiA9IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfG5ldylcXHMrKVtcXHcuXFxcXF0rLztcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdrZXl3b3JkJywge1xuXHQncmVnZXgnOiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1kdXBlLWNoYXJhY3RlcnMtY2hhcmFjdGVyLWNsYXNzXG5cdFx0cGF0dGVybjogLygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc118XFxiKD86cmV0dXJufHlpZWxkKSlcXHMqKVxcLyg/OlxcWyg/OlteXFxdXFxcXFxcclxcbl18XFxcXC4pKlxcXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2RnaW15dXNdezAsN30oPz0oPzpcXHN8XFwvXFwqKD86W14qXXxcXCooPyFcXC8pKSpcXCpcXC8pKig/OiR8W1xcclxcbiwuOzp9KVxcXV18XFwvXFwvKSkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3JlZ2V4LXNvdXJjZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL14oXFwvKVtcXHNcXFNdKyg/PVxcL1thLXpdKiQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1yZWdleCcsXG5cdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnJlZ2V4XG5cdFx0XHR9LFxuXHRcdFx0J3JlZ2V4LWRlbGltaXRlcic6IC9eXFwvfFxcLyQvLFxuXHRcdFx0J3JlZ2V4LWZsYWdzJzogL15bYS16XSskLyxcblx0XHR9XG5cdH0sXG5cdC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcblx0J2Z1bmN0aW9uLXZhcmlhYmxlJzoge1xuXHRcdHBhdHRlcm46IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfCg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSopXFxzKj0+KSkvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdwYXJhbWV0ZXInOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhmdW5jdGlvbig/OlxccysoPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKT9cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoW14oKV0qXFwpKSsoPz1cXHMqXFwpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKSg/IVxccylbXyRhLXpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqPT4pL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqPT4pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/OlxcYnxcXHN8XikoPyEoPzphc3xhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZCkoPyFbJFxcd1xceEEwLVxcdUZGRkZdKSkoPzooPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqXFxzKilcXChcXHMqfFxcXVxccypcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqXFx7KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH1cblx0XSxcblx0J2NvbnN0YW50JzogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdzdHJpbmcnLCB7XG5cdCdoYXNoYmFuZyc6IHtcblx0XHRwYXR0ZXJuOiAvXiMhLiovLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRhbGlhczogJ2NvbW1lbnQnXG5cdH0sXG5cdCd0ZW1wbGF0ZS1zdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118XFwkXFx7KD86W157fV18XFx7KD86W157fV18XFx7W159XSpcXH0pKlxcfSkrXFx9fCg/IVxcJFxceylbXlxcXFxgXSkqYC8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RlbXBsYXRlLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXmB8YCQvLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKVxcJFxceyg/Oltee31dfFxceyg/Oltee31dfFxce1tefV0qXFx9KSpcXH0pK1xcfS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXCRcXHt8XFx9JC8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH1cblx0fVxufSk7XG5cbmlmIChQcmlzbS5sYW5ndWFnZXMubWFya3VwKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmFkZElubGluZWQoJ3NjcmlwdCcsICdqYXZhc2NyaXB0Jyk7XG5cblx0Ly8gYWRkIGF0dHJpYnV0ZSBzdXBwb3J0IGZvciBhbGwgRE9NIGV2ZW50cy5cblx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzI1N0YW5kYXJkX2V2ZW50c1xuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRBdHRyaWJ1dGUoXG5cdFx0L29uKD86YWJvcnR8Ymx1cnxjaGFuZ2V8Y2xpY2t8Y29tcG9zaXRpb24oPzplbmR8c3RhcnR8dXBkYXRlKXxkYmxjbGlja3xlcnJvcnxmb2N1cyg/OmlufG91dCk/fGtleSg/OmRvd258dXApfGxvYWR8bW91c2UoPzpkb3dufGVudGVyfGxlYXZlfG1vdmV8b3V0fG92ZXJ8dXApfHJlc2V0fHJlc2l6ZXxzY3JvbGx8c2VsZWN0fHNsb3RjaGFuZ2V8c3VibWl0fHVubG9hZHx3aGVlbCkvLnNvdXJjZSxcblx0XHQnamF2YXNjcmlwdCdcblx0KTtcbn1cblxuUHJpc20ubGFuZ3VhZ2VzLmpzID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1maWxlLWhpZ2hsaWdodC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2YgUHJpc20gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9tYXRjaGVzI1BvbHlmaWxsXG5cdGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuXHRcdEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cdH1cblxuXHR2YXIgTE9BRElOR19NRVNTQUdFID0gJ0xvYWRpbmfigKYnO1xuXHR2YXIgRkFJTFVSRV9NRVNTQUdFID0gZnVuY3Rpb24gKHN0YXR1cywgbWVzc2FnZSkge1xuXHRcdHJldHVybiAn4pyWIEVycm9yICcgKyBzdGF0dXMgKyAnIHdoaWxlIGZldGNoaW5nIGZpbGU6ICcgKyBtZXNzYWdlO1xuXHR9O1xuXHR2YXIgRkFJTFVSRV9FTVBUWV9NRVNTQUdFID0gJ+KcliBFcnJvcjogRmlsZSBkb2VzIG5vdCBleGlzdCBvciBpcyBlbXB0eSc7XG5cblx0dmFyIEVYVEVOU0lPTlMgPSB7XG5cdFx0J2pzJzogJ2phdmFzY3JpcHQnLFxuXHRcdCdweSc6ICdweXRob24nLFxuXHRcdCdyYic6ICdydWJ5Jyxcblx0XHQncHMxJzogJ3Bvd2Vyc2hlbGwnLFxuXHRcdCdwc20xJzogJ3Bvd2Vyc2hlbGwnLFxuXHRcdCdzaCc6ICdiYXNoJyxcblx0XHQnYmF0JzogJ2JhdGNoJyxcblx0XHQnaCc6ICdjJyxcblx0XHQndGV4JzogJ2xhdGV4J1xuXHR9O1xuXG5cdHZhciBTVEFUVVNfQVRUUiA9ICdkYXRhLXNyYy1zdGF0dXMnO1xuXHR2YXIgU1RBVFVTX0xPQURJTkcgPSAnbG9hZGluZyc7XG5cdHZhciBTVEFUVVNfTE9BREVEID0gJ2xvYWRlZCc7XG5cdHZhciBTVEFUVVNfRkFJTEVEID0gJ2ZhaWxlZCc7XG5cblx0dmFyIFNFTEVDVE9SID0gJ3ByZVtkYXRhLXNyY106bm90KFsnICsgU1RBVFVTX0FUVFIgKyAnPVwiJyArIFNUQVRVU19MT0FERUQgKyAnXCJdKSdcblx0XHQrICc6bm90KFsnICsgU1RBVFVTX0FUVFIgKyAnPVwiJyArIFNUQVRVU19MT0FESU5HICsgJ1wiXSknO1xuXG5cdHZhciBsYW5nID0gL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2k7XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIFByaXNtIGBsYW5ndWFnZS14eHh4YCBvciBgbGFuZy14eHh4YCBjbGFzcyB0byB0aGUgZ2l2ZW4gbGFuZ3VhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0TGFuZ3VhZ2VDbGFzcyhlbGVtZW50LCBsYW5ndWFnZSkge1xuXHRcdHZhciBjbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZTtcblx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShsYW5nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcblx0fVxuXG5cblx0UHJpc20uaG9va3MuYWRkKCdiZWZvcmUtaGlnaGxpZ2h0YWxsJywgZnVuY3Rpb24gKGVudikge1xuXHRcdGVudi5zZWxlY3RvciArPSAnLCAnICsgU0VMRUNUT1I7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXNhbml0eS1jaGVjaycsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHR2YXIgcHJlID0gLyoqIEB0eXBlIHtIVE1MUHJlRWxlbWVudH0gKi8gKGVudi5lbGVtZW50KTtcblx0XHRpZiAocHJlLm1hdGNoZXMoU0VMRUNUT1IpKSB7XG5cdFx0XHRlbnYuY29kZSA9ICcnOyAvLyBmYXN0LXBhdGggdGhlIHdob2xlIHRoaW5nIGFuZCBnbyB0byBjb21wbGV0ZVxuXG5cdFx0XHRwcmUuc2V0QXR0cmlidXRlKFNUQVRVU19BVFRSLCBTVEFUVVNfTE9BRElORyk7IC8vIG1hcmsgYXMgbG9hZGluZ1xuXG5cdFx0XHQvLyBhZGQgY29kZSBlbGVtZW50IHdpdGggbG9hZGluZyBtZXNzYWdlXG5cdFx0XHR2YXIgY29kZSA9IHByZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdDT0RFJykpO1xuXHRcdFx0Y29kZS50ZXh0Q29udGVudCA9IExPQURJTkdfTUVTU0FHRTtcblxuXHRcdFx0dmFyIHNyYyA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG5cblx0XHRcdHZhciBsYW5ndWFnZSA9IGVudi5sYW5ndWFnZTtcblx0XHRcdGlmIChsYW5ndWFnZSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdC8vIHRoZSBsYW5ndWFnZSBtaWdodCBiZSAnbm9uZScgYmVjYXVzZSB0aGVyZSBpcyBubyBsYW5ndWFnZSBzZXQ7XG5cdFx0XHRcdC8vIGluIHRoaXMgY2FzZSwgd2Ugd2FudCB0byB1c2UgdGhlIGV4dGVuc2lvbiBhcyB0aGUgbGFuZ3VhZ2Vcblx0XHRcdFx0dmFyIGV4dGVuc2lvbiA9ICgvXFwuKFxcdyspJC8uZXhlYyhzcmMpIHx8IFssICdub25lJ10pWzFdO1xuXHRcdFx0XHRsYW5ndWFnZSA9IEVYVEVOU0lPTlNbZXh0ZW5zaW9uXSB8fCBleHRlbnNpb247XG5cdFx0XHR9XG5cblx0XHRcdC8vIHNldCBsYW5ndWFnZSBjbGFzc2VzXG5cdFx0XHRzZXRMYW5ndWFnZUNsYXNzKGNvZGUsIGxhbmd1YWdlKTtcblx0XHRcdHNldExhbmd1YWdlQ2xhc3MocHJlLCBsYW5ndWFnZSk7XG5cblx0XHRcdC8vIHByZWxvYWQgdGhlIGxhbmd1YWdlXG5cdFx0XHR2YXIgYXV0b2xvYWRlciA9IFByaXNtLnBsdWdpbnMuYXV0b2xvYWRlcjtcblx0XHRcdGlmIChhdXRvbG9hZGVyKSB7XG5cdFx0XHRcdGF1dG9sb2FkZXIubG9hZExhbmd1YWdlcyhsYW5ndWFnZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGxvYWQgZmlsZVxuXHRcdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdFx0eGhyLm9wZW4oJ0dFVCcsIHNyYywgdHJ1ZSk7XG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuXHRcdFx0XHRcdGlmICh4aHIuc3RhdHVzIDwgNDAwICYmIHhoci5yZXNwb25zZVRleHQpIHtcblx0XHRcdFx0XHRcdC8vIG1hcmsgYXMgbG9hZGVkXG5cdFx0XHRcdFx0XHRwcmUuc2V0QXR0cmlidXRlKFNUQVRVU19BVFRSLCBTVEFUVVNfTE9BREVEKTtcblxuXHRcdFx0XHRcdFx0Ly8gaGlnaGxpZ2h0IGNvZGVcblx0XHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHRcdFx0UHJpc20uaGlnaGxpZ2h0RWxlbWVudChjb2RlKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBtYXJrIGFzIGZhaWxlZFxuXHRcdFx0XHRcdFx0cHJlLnNldEF0dHJpYnV0ZShTVEFUVVNfQVRUUiwgU1RBVFVTX0ZBSUxFRCk7XG5cblx0XHRcdFx0XHRcdGlmICh4aHIuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0gRkFJTFVSRV9NRVNTQUdFKHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSBGQUlMVVJFX0VNUFRZX01FU1NBR0U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0eGhyLnNlbmQobnVsbCk7XG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQgPSB7XG5cdFx0LyoqXG5cdFx0ICogRXhlY3V0ZXMgdGhlIEZpbGUgSGlnaGxpZ2h0IHBsdWdpbiBmb3IgYWxsIG1hdGNoaW5nIGBwcmVgIGVsZW1lbnRzIHVuZGVyIHRoZSBnaXZlbiBjb250YWluZXIuXG5cdFx0ICpcblx0XHQgKiBOb3RlOiBFbGVtZW50cyB3aGljaCBhcmUgYWxyZWFkeSBsb2FkZWQgb3IgY3VycmVudGx5IGxvYWRpbmcgd2lsbCBub3QgYmUgdG91Y2hlZCBieSB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gW2NvbnRhaW5lcj1kb2N1bWVudF1cblx0XHQgKi9cblx0XHRoaWdobGlnaHQ6IGZ1bmN0aW9uIGhpZ2hsaWdodChjb250YWluZXIpIHtcblx0XHRcdHZhciBlbGVtZW50cyA9IChjb250YWluZXIgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1IpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgKGVsZW1lbnQgPSBlbGVtZW50c1tpKytdKTspIHtcblx0XHRcdFx0UHJpc20uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0dmFyIGxvZ2dlZCA9IGZhbHNlO1xuXHQvKiogQGRlcHJlY2F0ZWQgVXNlIGBQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQuaGlnaGxpZ2h0YCBpbnN0ZWFkLiAqL1xuXHRQcmlzbS5maWxlSGlnaGxpZ2h0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICghbG9nZ2VkKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1ByaXNtLmZpbGVIaWdobGlnaHQgaXMgZGVwcmVjYXRlZC4gVXNlIGBQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQuaGlnaGxpZ2h0YCBpbnN0ZWFkLicpO1xuXHRcdFx0bG9nZ2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0UHJpc20ucGx1Z2lucy5maWxlSGlnaGxpZ2h0LmhpZ2hsaWdodC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHR9O1xuXG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==