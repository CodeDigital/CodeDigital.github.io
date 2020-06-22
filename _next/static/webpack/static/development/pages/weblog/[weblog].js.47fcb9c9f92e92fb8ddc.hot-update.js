webpackHotUpdate("static\\development\\pages\\weblog\\[weblog].js",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\digit\\Desktop\\Code\\Websites\\CodeDigital.github.io\\src\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function checkAnniversary() {
  var today = new Date(); //Dec 24, 2017

  if (today.getDate === 27 && today.getMonth === 12) {
    return "anniversary";
  } else {
    return ""; // return "anniversary"
  }
}

var Header = function Header() {
  return __jsx("div", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("img", {
    alt: "N/A",
    src: "/assets/img/phoenixIcon.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  })), __jsx("h1", {
    className: checkAnniversary() + ' ',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, "<Code>Digital"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=[weblog].js.47fcb9c9f92e92fb8ddc.hot-update.js.map