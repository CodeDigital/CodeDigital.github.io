webpackHotUpdate("static\\development\\pages\\[project].js",{

/***/ "./src/components/Sharing.js":
/*!***********************************!*\
  !*** ./src/components/Sharing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sharing; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");






var _jsxFileName = "C:\\Users\\digit\\Desktop\\Code\\Websites\\CodeDigital.github.io\\src\\components\\Sharing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Importing sharing buttons from react


var Sharing = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Sharing, _React$Component);

  var _super = _createSuper(Sharing);

  function Sharing(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sharing);

    _this = _super.call(this, props);
    _this.onPopupClicked = _this.onPopupClicked.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sharing, [{
    key: "onPopupClicked",
    value: function onPopupClicked() {
      this.props.onClose();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.disp) {
        return __jsx("div", {
          className: "popup",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 9
          }
        }, __jsx("button", {
          className: "popup-button",
          onClick: this.onPopupClicked,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }
        }), __jsx("div", {
          className: "popup-container",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "popup-div",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }
        }, __jsx("h1", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }
        }, "Share \"", this.props.project.name, "\""), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }
        }), __jsx("div", {
          className: "share-button-div",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["EmailShareButton"], {
          url: this.props.url,
          subject: 'Check out "' + this.props.project.name + '" on CodeDigital!',
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["EmailIcon"], {
          round: "true",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 29
          }
        })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["FacebookShareButton"], {
          url: this.props.url,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["FacebookIcon"], {
          round: "true",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 29
          }
        })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["FacebookMessengerShareButton"], {
          url: this.props.url,
          appId: "2064569620236469",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["FacebookMessengerIcon"], {
          round: "true",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 29
          }
        })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["LineShareButton"], {
          url: this.props.url,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["LineIcon"], {
          round: "true",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }
        })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["LinkedinShareButton"], {
          url: this.props.url,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["LinkedinIcon"], {
          round: "true",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 29
          }
        })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["PinterestShareButton"], {
          url: this.props.url,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["PinterestIcon"], {
          round: "true",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 29
          }
        }), __jsx("span", {
          className: "share-count-wrapper",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 29
          }
        }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_7__["PinterestShareCount"], {
          url: this.props.url,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 33
          }
        }, function (count) {
          console.log(count);
          return count;
        })))))));
      } else {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 20
          }
        });
      }
    }
  }]);

  return Sharing;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=[project].js.5801f6340db97b3df961.hot-update.js.map