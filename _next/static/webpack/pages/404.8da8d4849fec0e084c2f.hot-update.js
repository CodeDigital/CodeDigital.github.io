self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./lib/urls.js":
/*!*********************!*\
  !*** ./lib/urls.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFullURL": function() { return /* binding */ getFullURL; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var BASEURL = 'https://codedigital.github.io';
function getFullURL(pathName) {
  return BASEURL + pathName;
}

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

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Custom404; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/urls */ "./lib/urls.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Code\\Projects\\web-projects\\CodeDigital.github.io\\src\\pages\\404.js",
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Custom404() {
  _s();

  var name404 = "Page not found";
  var desc404 = "Yeah, this is not right. I've triple checked... This link... I don't have it here.";
  var img404 = (0,_lib_urls__WEBPACK_IMPORTED_MODULE_3__.getFullURL)('/assets/img/codeArrowIconNoBackground.png');
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return __jsx("div", {
    className: "page-404",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }
  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, name404 + " | Code Digital"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "title",
    content: name404 + " | Code Digital",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: desc404,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:url",
    content: (0,_lib_urls__WEBPACK_IMPORTED_MODULE_3__.getFullURL)(router.asPath),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:title",
    content: name404 + " | Code Digital",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:description",
    content: desc404,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    content: img404,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: (0,_lib_urls__WEBPACK_IMPORTED_MODULE_3__.getFullURL)(router.asPath),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: name404 + " | Code Digital",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: desc404,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:image",
    content: img404,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "404 - Sorry, I haven't made this link yet."), __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("img", {
    alt: "N/A",
    src: "/assets/img/codeArrowOnlyIcon.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Return to Safety")));
}

_s(Custom404, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Custom404;

var _c;

$RefreshReg$(_c, "Custom404");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy80MDQuanMiXSwibmFtZXMiOlsiQkFTRVVSTCIsImdldEZ1bGxVUkwiLCJwYXRoTmFtZSIsIkN1c3RvbTQwNCIsIm5hbWU0MDQiLCJkZXNjNDA0IiwiaW1nNDA0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYXNQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBRywrQkFBaEI7QUFFTyxTQUFTQyxVQUFULENBQW9CQyxRQUFwQixFQUE2QjtBQUNoQyxTQUFPRixPQUFPLEdBQUdFLFFBQWpCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQ0E7QUFFQTtBQUdlLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFFaEMsTUFBTUMsT0FBTyxHQUFHLGdCQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxvRkFBaEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdMLHFEQUFVLENBQUMsMkNBQUQsQ0FBekI7QUFDQSxNQUFNTSxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsU0FBTztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSCxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFKLE9BQU8sR0FBRyxpQkFBbEIsQ0FEQSxFQUVRO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGUixFQUtRO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBbUIsV0FBTyxFQUFFQSxPQUFPLEdBQUcsaUJBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMUixFQU1RO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFQyxPQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTlIsRUFTUTtBQUFNLFlBQVEsRUFBQyxTQUFmO0FBQXlCLFdBQU8sRUFBQyxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVFIsRUFVUTtBQUFNLFlBQVEsRUFBQyxRQUFmO0FBQXdCLFdBQU8sRUFBRUoscURBQVUsQ0FBQ00sTUFBTSxDQUFDRSxNQUFSLENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWUixFQVdRO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFFTCxPQUFPLEdBQUcsaUJBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYUixFQVlRO0FBQU0sWUFBUSxFQUFDLGdCQUFmO0FBQWdDLFdBQU8sRUFBRUMsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpSLEVBYVE7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVDLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiUixFQWdCUTtBQUFNLFlBQVEsRUFBQyxjQUFmO0FBQThCLFdBQU8sRUFBQyxxQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCUixFQWlCUTtBQUFNLFlBQVEsRUFBQyxhQUFmO0FBQTZCLFdBQU8sRUFBRUwscURBQVUsQ0FBQ00sTUFBTSxDQUFDRSxNQUFSLENBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQlIsRUFrQlE7QUFBTSxZQUFRLEVBQUMsZUFBZjtBQUErQixXQUFPLEVBQUVMLE9BQU8sR0FBRyxpQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCUixFQW1CUTtBQUFNLFlBQVEsRUFBQyxxQkFBZjtBQUFxQyxXQUFPLEVBQUVDLE9BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQlIsRUFvQlE7QUFBTSxZQUFRLEVBQUMsZUFBZjtBQUErQixXQUFPLEVBQUVDLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQlIsQ0FGRyxFQTJCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQTNCRyxFQTZCSDtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxLQUFUO0FBQWUsT0FBRyxFQUFDLG1DQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLENBN0JHLENBQVA7QUFrQ0Q7O0dBekNxQkgsUztVQUtMSyxrRDs7O0tBTEtMLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0LjhkYThkNDg0OWZlYzBlMDg0YzJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQVNFVVJMID0gJ2h0dHBzOi8vY29kZWRpZ2l0YWwuZ2l0aHViLmlvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsVVJMKHBhdGhOYW1lKXtcclxuICAgIHJldHVybiBCQVNFVVJMICsgcGF0aE5hbWU7XHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQge2dldEZ1bGxVUkx9IGZyb20gJy4uLy4uL2xpYi91cmxzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b200MDQoKSB7XHJcblxyXG4gICAgY29uc3QgbmFtZTQwNCA9IFwiUGFnZSBub3QgZm91bmRcIjtcclxuICAgIGNvbnN0IGRlc2M0MDQgPSBcIlllYWgsIHRoaXMgaXMgbm90IHJpZ2h0LiBJJ3ZlIHRyaXBsZSBjaGVja2VkLi4uIFRoaXMgbGluay4uLiBJIGRvbid0IGhhdmUgaXQgaGVyZS5cIjtcclxuICAgIGNvbnN0IGltZzQwNCA9IGdldEZ1bGxVUkwoJy9hc3NldHMvaW1nL2NvZGVBcnJvd0ljb25Ob0JhY2tncm91bmQucG5nJyk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlLTQwNFwiPlxyXG5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e25hbWU0MDQgKyBcIiB8IENvZGUgRGlnaXRhbFwifTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBQcmltYXJ5IE1ldGEgVGFncyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXtuYW1lNDA0ICsgXCIgfCBDb2RlIERpZ2l0YWxcIn0vPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzYzQwNH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIE9wZW4gR3JhcGggLyBGYWNlYm9vayAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17Z2V0RnVsbFVSTChyb3V0ZXIuYXNQYXRoKX0vPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e25hbWU0MDQgKyBcIiB8IENvZGUgRGlnaXRhbFwifS8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzYzQwNH0vPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltZzQwNH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIFR3aXR0ZXIgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXtnZXRGdWxsVVJMKHJvdXRlci5hc1BhdGgpfS8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtuYW1lNDA0ICsgXCIgfCBDb2RlIERpZ2l0YWxcIn0vPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzYzQwNH0vPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17aW1nNDA0fS8+ICBcclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG57LyogcHVibGljXFxhc3NldHNcXGltZ1xcY29kZUFycm93SWNvbk5vQmFja2dyb3VuZC5wbmcgKi99XHJcblxyXG4gICAgICAgIDxoMT40MDQgLSBTb3JyeSwgSSBoYXZlbid0IG1hZGUgdGhpcyBsaW5rIHlldC48L2gxPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiTi9BXCIgc3JjPVwiL2Fzc2V0cy9pbWcvY29kZUFycm93T25seUljb24ucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDxoMj5SZXR1cm4gdG8gU2FmZXR5PC9oMj5cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==