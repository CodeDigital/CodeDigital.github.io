webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Navigator.js":
/*!*************************************!*\
  !*** ./src/components/Navigator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\digit\\Desktop\\Code\\Websites\\CodeDigital.github.io\\src\\components\\Navigator.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
var SEARCHPARAM = "?search=";
var WEBLOGPARAM = "&weblog=";

function checkURLSearch() {
  var lsearch = window.location.search; //let query = lsearch.substr(lsearch.indexOf(SEARCHPARAM)+SEARCHPARAM.length,lsearch.indexOf(WEBLOGPARAM));

  if (lsearch) {
    var query = lsearch.substring(lsearch.indexOf(SEARCHPARAM) + SEARCHPARAM.length, lsearch.includes(WEBLOGPARAM) ? lsearch.indexOf(WEBLOGPARAM) : lsearch.length - 1);
    var weblog = lsearch.substring(lsearch.indexOf(WEBLOGPARAM) + WEBLOGPARAM.length);
    var isWeblog = weblog.includes("true") ? true : false;
    return {
      search: query,
      weblog: isWeblog
    };
  } else {
    return false;
  }
}

var Navigator = function Navigator(props) {
  // onSearch;
  //console.log(props.value)
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.searchValue.length > 0 ? props.searchValue : ""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      searchValue = _React$useState2[0],
      setSearchValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.weblog),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      weblog = _React$useState4[0],
      setWeblog = _React$useState4[1]; // const [onSearch,] = React.useState(props.onSearch);
  // const [onWeblog,] = React.useState(props.onWeblog);
  // this.handleSearch = this.handleSearch.bind(this);
  // this.weblogMode = this.weblogMode.bind(this);
  // this.weblogButton = this.weblogButton.bind(this);


  var handleSearch = function handleSearch(event) {
    setSearchValue(event.target.value);
    props.onSearch(event.target.value);
  };

  var weblogMode = function weblogMode(event) {
    setWeblog(event.target.checked);
    props.onWeblog(event.target.checked);
  };

  var weblogButton = function weblogButton() {
    var isWeblog = !weblog;
    weblogMode({
      target: {
        checked: isWeblog
      }
    });
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (sessionStorage.getItem("searchValue")) {
      var newSearch = ' ' + sessionStorage.getItem("searchValue");
      newSearch = newSearch.slice(1); // console.log(newSearch);

      handleSearch({
        target: {
          value: newSearch
        }
      });
    } else {
      handleSearch({
        target: {
          value: searchValue
        }
      });
    }

    if (typeof sessionStorage.getItem("weblog") !== undefined) {
      var newWeblog = sessionStorage.getItem("weblog") == 'true'; // console.log("In postMount:", newWeblog);

      document.getElementById('webLogMode').checked = newWeblog;
      weblogMode({
        target: {
          checked: newWeblog
        }
      });
    } // console.log(weblog);

  }, []);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    sessionStorage.setItem("weblog", weblog); // console.log("In setWeblog:", weblog);

    handleSearch({
      target: {
        value: searchValue
      }
    });
  }, [weblog]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (searchValue.length > 0) {
      sessionStorage.setItem("searchValue", searchValue);
      handleSearch({
        target: {
          value: searchValue
        }
      });
    }
  }, [searchValue]); //if(this.props.weblog){

  return __jsx("div", {
    className: "navigator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: "n/a",
    src: "assets/img/searchIcon.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: weblogButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "checkbox",
    id: "webLogMode",
    name: "webLogMode",
    checked: weblog,
    onChange: weblogMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 48
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "Weblog")), __jsx("input", {
    autoComplete: "on",
    placeholder: "Search projects by name or tag",
    type: "text",
    value: searchValue,
    onChange: handleSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigator);

/***/ })

})
//# sourceMappingURL=index.js.2dc0e9ea5f81ede07118.hot-update.js.map