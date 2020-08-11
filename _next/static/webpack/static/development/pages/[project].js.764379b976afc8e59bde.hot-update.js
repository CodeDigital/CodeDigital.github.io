webpackHotUpdate("static\\development\\pages\\[project].js",{

/***/ "./src/pages/[project].js":
/*!********************************!*\
  !*** ./src/pages/[project].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Body */ "./src/components/Body.js");
/* harmony import */ var _components_Sharing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sharing */ "./src/components/Sharing.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/urls */ "./lib/urls.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\digit\\Desktop\\Code\\Websites\\CodeDigital.github.io\\src\\pages\\[project].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
//TODO: Convert this to function component!








var Project = function Project(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])(); // console.log(router);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      share = _React$useState2[0],
      setShare = _React$useState2[1];

  var onShareClick = function onShareClick() {
    setShare(true);
  };

  var onShareClose = function onShareClose() {
    setShare(false);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    return function () {
      console.log('Clearing p5 Sketches');

      try {
        remove();
      } catch (_unused) {
        console.log('P5 Sketch Not Removed');
      }

      try {
        unmountScript();
      } catch (_unused2) {
        console.log('No Unmount Script');
      }

      try {
        endSound();
      } catch (_unused3) {
        console.log('No "endsound" Script');
      }
    };
  }, []);
  return __jsx(_components_Body__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "project-page",
    id: "project-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(props.scripts), __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, props.project.name + " | Code Digital"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "title",
    content: props.project.name + " | Code Digital",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: props.project.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:url",
    content: Object(_lib_urls__WEBPACK_IMPORTED_MODULE_8__["getFullURL"])(router.asPath),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:title",
    content: props.project.name + " | Code Digital",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:description",
    content: props.project.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    content: Object(_lib_urls__WEBPACK_IMPORTED_MODULE_8__["getFullURL"])('/_posts/projects' + router.asPath + '/thumbnail.png'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: Object(_lib_urls__WEBPACK_IMPORTED_MODULE_8__["getFullURL"])(router.asPath),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: props.project.name + " | Code Digital",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: props.project.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:image",
    content: Object(_lib_urls__WEBPACK_IMPORTED_MODULE_8__["getFullURL"])('/_posts/projects' + router.asPath + '/thumbnail.png'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  })), __jsx("div", {
    id: "projectHTMLContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(props.project.html)), __jsx(_components_Sharing__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: Object(_lib_urls__WEBPACK_IMPORTED_MODULE_8__["getFullURL"])(router.asPath),
    project: props.project,
    disp: share,
    onClose: onShareClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  })));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=[project].js.764379b976afc8e59bde.hot-update.js.map