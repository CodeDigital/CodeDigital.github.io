(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(3);
var delegate = __webpack_require__(4);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(5);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(0);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);

// CONCATENATED MODULE: ./src/clipboard-action.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var clipboard_action_ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = select_default()(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = select_default()(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }
            document.activeElement.blur();
            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

/* harmony default export */ var clipboard_action = (clipboard_action_ClipboardAction);
// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(1);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);

// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(2);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);

// CONCATENATED MODULE: ./src/clipboard.js
var clipboard_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clipboard_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */

var clipboard_Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        clipboard_classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    clipboard_createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = listen_default()(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new clipboard_action({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(tiny_emitter_default.a);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

/* harmony default export */ var clipboard = __webpack_exports__["default"] = (clipboard_Clipboard);

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n", "",{"version":3,"sources":["C:/Users/digit/Desktop/Code/Websites/CodeDigital.github.io/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;CACpB,MAAM;CACN,eAAe;CACf,YAAY;CACZ,UAAU,EAAE,4CAA4C;CACxD,oBAAoB;CACpB,4BAA4B;;CAE5B,yBAAyB;CACzB,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;;AAElB;;CAEC;EACC,oBAAoB;EACpB,cAAc;EACd,6BAA6B;CAC9B;;EAEC;GACC,4BAA4B;GAC5B,WAAW;GACX,cAAc;GACd,oBAAoB;GACpB,iBAAiB;EAClB","file":"prism-line-numbers.css","sourcesContent":["pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/match-braces/prism-match-braces.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/prismjs/plugins/match-braces/prism-match-braces.css ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".token.punctuation.brace-hover,\n.token.punctuation.brace-selected {\n\toutline: solid 1px;\n}\n\n.rainbow-braces .token.punctuation.brace-level-1,\n.rainbow-braces .token.punctuation.brace-level-5,\n.rainbow-braces .token.punctuation.brace-level-9 {\n\tcolor: #E50;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-2,\n.rainbow-braces .token.punctuation.brace-level-6,\n.rainbow-braces .token.punctuation.brace-level-10 {\n\tcolor: #0B3;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-3,\n.rainbow-braces .token.punctuation.brace-level-7,\n.rainbow-braces .token.punctuation.brace-level-11 {\n\tcolor: #26F;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-4,\n.rainbow-braces .token.punctuation.brace-level-8,\n.rainbow-braces .token.punctuation.brace-level-12 {\n\tcolor: #E0E;\n\topacity: 1;\n}\n", "",{"version":3,"sources":["C:/Users/digit/Desktop/Code/Websites/CodeDigital.github.io/node_modules/prismjs/plugins/match-braces/prism-match-braces.css"],"names":[],"mappings":"AAAA;;CAEC,kBAAkB;AACnB;;AAEA;;;CAGC,WAAW;CACX,UAAU;AACX;AACA;;;CAGC,WAAW;CACX,UAAU;AACX;AACA;;;CAGC,WAAW;CACX,UAAU;AACX;AACA;;;CAGC,WAAW;CACX,UAAU;AACX","file":"prism-match-braces.css","sourcesContent":[".token.punctuation.brace-hover,\n.token.punctuation.brace-selected {\n\toutline: solid 1px;\n}\n\n.rainbow-braces .token.punctuation.brace-level-1,\n.rainbow-braces .token.punctuation.brace-level-5,\n.rainbow-braces .token.punctuation.brace-level-9 {\n\tcolor: #E50;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-2,\n.rainbow-braces .token.punctuation.brace-level-6,\n.rainbow-braces .token.punctuation.brace-level-10 {\n\tcolor: #0B3;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-3,\n.rainbow-braces .token.punctuation.brace-level-7,\n.rainbow-braces .token.punctuation.brace-level-11 {\n\tcolor: #26F;\n\topacity: 1;\n}\n.rainbow-braces .token.punctuation.brace-level-4,\n.rainbow-braces .token.punctuation.brace-level-8,\n.rainbow-braces .token.punctuation.brace-level-12 {\n\tcolor: #E0E;\n\topacity: 1;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "div.code-toolbar {\n\tposition: relative;\n}\n\ndiv.code-toolbar > .toolbar {\n\tposition: absolute;\n\ttop: .3em;\n\tright: .2em;\n\ttransition: opacity 0.3s ease-in-out;\n\topacity: 0;\n}\n\ndiv.code-toolbar:hover > .toolbar {\n\topacity: 1;\n}\n\n/* Separate line b/c rules are thrown out if selector is invalid.\n   IE11 and old Edge versions don't support :focus-within. */\ndiv.code-toolbar:focus-within > .toolbar {\n\topacity: 1;\n}\n\ndiv.code-toolbar > .toolbar .toolbar-item {\n\tdisplay: inline-block;\n}\n\ndiv.code-toolbar > .toolbar a {\n\tcursor: pointer;\n}\n\ndiv.code-toolbar > .toolbar button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n}\n\ndiv.code-toolbar > .toolbar a,\ndiv.code-toolbar > .toolbar button,\ndiv.code-toolbar > .toolbar span {\n\tcolor: #bbb;\n\tfont-size: .8em;\n\tpadding: 0 .5em;\n\tbackground: #f5f2f0;\n\tbackground: rgba(224, 224, 224, 0.2);\n\tbox-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n\tborder-radius: .5em;\n}\n\ndiv.code-toolbar > .toolbar a:hover,\ndiv.code-toolbar > .toolbar a:focus,\ndiv.code-toolbar > .toolbar button:hover,\ndiv.code-toolbar > .toolbar button:focus,\ndiv.code-toolbar > .toolbar span:hover,\ndiv.code-toolbar > .toolbar span:focus {\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n", "",{"version":3,"sources":["C:/Users/digit/Desktop/Code/Websites/CodeDigital.github.io/node_modules/prismjs/plugins/toolbar/prism-toolbar.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,oCAAoC;CACpC,UAAU;AACX;;AAEA;CACC,UAAU;AACX;;AAEA;4DAC4D;AAC5D;CACC,UAAU;AACX;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,SAAS;CACT,cAAc;CACd,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,UAAU;CACV,yBAAyB,EAAE,eAAe;CAC1C,sBAAsB;CACtB,qBAAqB;AACtB;;AAEA;;;CAGC,WAAW;CACX,eAAe;CACf,eAAe;CACf,mBAAmB;CACnB,oCAAoC;CACpC,qCAAqC;CACrC,mBAAmB;AACpB;;AAEA;;;;;;CAMC,cAAc;CACd,qBAAqB;AACtB","file":"prism-toolbar.css","sourcesContent":["div.code-toolbar {\n\tposition: relative;\n}\n\ndiv.code-toolbar > .toolbar {\n\tposition: absolute;\n\ttop: .3em;\n\tright: .2em;\n\ttransition: opacity 0.3s ease-in-out;\n\topacity: 0;\n}\n\ndiv.code-toolbar:hover > .toolbar {\n\topacity: 1;\n}\n\n/* Separate line b/c rules are thrown out if selector is invalid.\n   IE11 and old Edge versions don't support :focus-within. */\ndiv.code-toolbar:focus-within > .toolbar {\n\topacity: 1;\n}\n\ndiv.code-toolbar > .toolbar .toolbar-item {\n\tdisplay: inline-block;\n}\n\ndiv.code-toolbar > .toolbar a {\n\tcursor: pointer;\n}\n\ndiv.code-toolbar > .toolbar button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n}\n\ndiv.code-toolbar > .toolbar a,\ndiv.code-toolbar > .toolbar button,\ndiv.code-toolbar > .toolbar span {\n\tcolor: #bbb;\n\tfont-size: .8em;\n\tpadding: 0 .5em;\n\tbackground: #f5f2f0;\n\tbackground: rgba(224, 224, 224, 0.2);\n\tbox-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n\tborder-radius: .5em;\n}\n\ndiv.code-toolbar > .toolbar a:hover,\ndiv.code-toolbar > .toolbar a:focus,\ndiv.code-toolbar > .toolbar button:hover,\ndiv.code-toolbar > .toolbar button:focus,\ndiv.code-toolbar > .toolbar span:hover,\ndiv.code-toolbar > .toolbar span:focus {\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/themes/prism-tomorrow.css":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/prismjs/themes/prism-tomorrow.css ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/**\n * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML\n * Based on https://github.com/chriskempson/tomorrow-theme\n * @author Rose Pritchard\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #ccc;\n\tbackground: none;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #2d2d2d;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #999;\n}\n\n.token.punctuation {\n\tcolor: #ccc;\n}\n\n.token.tag,\n.token.attr-name,\n.token.namespace,\n.token.deleted {\n\tcolor: #e2777a;\n}\n\n.token.function-name {\n\tcolor: #6196cc;\n}\n\n.token.boolean,\n.token.number,\n.token.function {\n\tcolor: #f08d49;\n}\n\n.token.property,\n.token.class-name,\n.token.constant,\n.token.symbol {\n\tcolor: #f8c555;\n}\n\n.token.selector,\n.token.important,\n.token.atrule,\n.token.keyword,\n.token.builtin {\n\tcolor: #cc99cd;\n}\n\n.token.string,\n.token.char,\n.token.attr-value,\n.token.regex,\n.token.variable {\n\tcolor: #7ec699;\n}\n\n.token.operator,\n.token.entity,\n.token.url {\n\tcolor: #67cdcc;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\n.token.inserted {\n\tcolor: green;\n}\n", "",{"version":3,"sources":["C:/Users/digit/Desktop/Code/Websites/CodeDigital.github.io/node_modules/prismjs/themes/prism-tomorrow.css"],"names":[],"mappings":"AAAA;;;;EAIE;;AAEF;;CAEC,WAAW;CACX,gBAAgB;CAChB,sEAAsE;CACtE,cAAc;CACd,gBAAgB;CAChB,gBAAgB;CAChB,oBAAoB;CACpB,kBAAkB;CAClB,iBAAiB;CACjB,gBAAgB;;CAEhB,gBAAgB;CAChB,cAAc;CACd,WAAW;;CAEX,qBAAqB;CAErB,iBAAiB;CACjB,aAAa;;AAEd;;AAEA,gBAAgB;AAChB;CACC,YAAY;CACZ,cAAc;CACd,cAAc;AACf;;AAEA;;CAEC,mBAAmB;AACpB;;AAEA,gBAAgB;AAChB;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;AACpB;;AAEA;;;;;CAKC,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ;;AAEA;;;;CAIC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;;;CAGC,cAAc;AACf;;AAEA;;;;CAIC,cAAc;AACf;;AAEA;;;;;CAKC,cAAc;AACf;;AAEA;;;;;CAKC,cAAc;AACf;;AAEA;;;CAGC,cAAc;AACf;;AAEA;;CAEC,iBAAiB;AAClB;AACA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb","file":"prism-tomorrow.css","sourcesContent":["/**\n * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML\n * Based on https://github.com/chriskempson/tomorrow-theme\n * @author Rose Pritchard\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #ccc;\n\tbackground: none;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #2d2d2d;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #999;\n}\n\n.token.punctuation {\n\tcolor: #ccc;\n}\n\n.token.tag,\n.token.attr-name,\n.token.namespace,\n.token.deleted {\n\tcolor: #e2777a;\n}\n\n.token.function-name {\n\tcolor: #6196cc;\n}\n\n.token.boolean,\n.token.number,\n.token.function {\n\tcolor: #f08d49;\n}\n\n.token.property,\n.token.class-name,\n.token.constant,\n.token.symbol {\n\tcolor: #f8c555;\n}\n\n.token.selector,\n.token.important,\n.token.atrule,\n.token.keyword,\n.token.builtin {\n\tcolor: #cc99cd;\n}\n\n.token.string,\n.token.char,\n.token.attr-value,\n.token.regex,\n.token.variable {\n\tcolor: #7ec699;\n}\n\n.token.operator,\n.token.entity,\n.token.url {\n\tcolor: #67cdcc;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\n.token.inserted {\n\tcolor: green;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/css/index.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/assets/css/index.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ../../../public/assets/img/music-banner.jpg */ "./public/assets/img/music-banner.jpg");
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  font-family: Monospace; }\n\nbody {\n  background-color: #222222;\n  font-size: 14px; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  display: none; }\n\ninput[type=\"search\"]::-ms-clear {\n  display: none; }\n\nbody {\n  background-color: #222222;\n  color: #FDFFFC;\n  font-family: Monospace;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden; }\n\na {\n  color: white;\n  transition: ease-in 0.25s;\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }\n\na:hover {\n  transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n  text-shadow: 0 0 5px #FDFFFC; }\n\ncode {\n  background-color: #393E41;\n  padding: 3px;\n  border-radius: 5px; }\n\n.header {\n  font-family: Monospace;\n  background-color: #393E41;\n  width: 100%;\n  height: 75px; }\n\n.header ::slotted {\n  float: left; }\n\n.header img {\n  transition: ease-in 0.25s;\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  height: 65px;\n  margin: 5px; }\n\n.header img:hover {\n  transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg); }\n\n.header h1 {\n  transition: ease-in 0.25s;\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }\n\n.anniversary {\n  /* ff3.6+ */\n  /* safari4+,chrome */\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #FF2277 0%, cyan 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffff', endColorstr='#ff00ff',GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent; }\n\n.phoenix {\n  /* ff3.6+ */\n  /* safari4+,chrome */\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent; }\n\n.tertiary-text-color {\n  color: #FF2277; }\n\n.main-gradient-text {\n  /* ff3.6+ */\n  /* safari4+,chrome */\n  /* safari5.1+,chrome10+ */\n  /* opera 11.10+ */\n  /* ie10+ */\n  background: linear-gradient(45deg, #C52437 0%, #F7E27C 100%);\n  /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 );\n  /* ie6-9 */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent; }\n\n.main-body {\n  top: 75px;\n  height: calc(100% - 75px); }\n\n.popup {\n  display: block;\n  position: absolute;\n  z-index: 101;\n  border: none;\n  top: 75px;\n  height: calc(100vh - 75px - 70px);\n  text-align: center; }\n\n.popup-button {\n  display: block;\n  position: absolute;\n  z-index: 101;\n  border: none;\n  height: calc(100vh - 75px - 70px);\n  background: black;\n  background: transparent\\9;\n  background: rgba(0, 0, 0, 0.8);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#22000000,endColorstr=#22000000);\n  zoom: 1;\n  width: 100vw; }\n\n.popup-container {\n  z-index: 110;\n  display: block;\n  position: absolute;\n  width: 100vw;\n  text-align: center;\n  padding: 100px 0px;\n  pointer-events: none; }\n\n.popup-div {\n  display: block;\n  font-size: larger;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 500px;\n  box-shadow: 10px 10px 0px #FF2277;\n  color: #FDFFFC;\n  background-color: #222222;\n  padding: 20px 50px;\n  pointer-events: all; }\n\n.popup h1 {\n  text-align: center; }\n\n.popup code {\n  border-radius: 0;\n  background-color: #FF2277;\n  box-shadow: inset 0 0 10px #393E41; }\n\n.popup > div small {\n  text-align: center;\n  display: block;\n  color: #FF2277;\n  margin-top: 20px; }\n\n.share-button-div {\n  text-align: center; }\n\n.share-button-div > * {\n  margin: 5px;\n  transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\n  transition: ease-in 0.3s; }\n\n.share-button-div > *:hover {\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }\n  .share-button-div > *:hover .share-button-icon {\n    box-shadow: #FF2277 3px 2px; }\n\n.share-button-icon {\n  border-radius: 1000px;\n  box-shadow: #393E41 5px 2.5px; }\n\n.share-count-wrapper > * {\n  margin-left: -20px;\n  margin-top: -5px;\n  padding: 3px 6px;\n  background-color: #393E41;\n  color: #FDFFFC;\n  border-radius: 8px; }\n\n.navigator {\n  background-color: #FF2277;\n  height: 35px;\n  top: 75px;\n  width: 100%;\n  margin: 0; }\n\n.navigator img {\n  display: block;\n  height: 25px;\n  margin: 5px;\n  right: 5px;\n  pointer-events: none;\n  position: absolute; }\n\n.navigator input {\n  box-shadow: inset 0 0 10px #393E41;\n  font-size: 15px;\n  background: #FF2277;\n  border: none;\n  color: #FDFFFC;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  padding-right: 35px; }\n\n.navigator input::-webkit-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41; }\n\n.navigator input::-moz-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41; }\n\n.navigator input:-ms-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41; }\n\n.navigator input::-ms-input-placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41; }\n\n.navigator input::placeholder {\n  color: #FDFFFC;\n  text-shadow: 1px 1px 4px #393E41; }\n\n.navigator button {\n  transition: ease-in 0.3s;\n  color: #FDFFFC;\n  display: block;\n  position: absolute;\n  height: 30px;\n  background-color: #222222;\n  margin: 1.25px;\n  right: 45px;\n  border: none;\n  padding: 8px 12px;\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  box-shadow: #393E41 5px 2.5px; }\n\n.navigator button:hover {\n  transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\n  box-shadow: #393E41 7.5px 2.5px; }\n\n.navigator button input {\n  box-shadow: none;\n  background: none;\n  border: none;\n  color: #FDFFFC;\n  width: 15px;\n  height: 15px;\n  float: left; }\n\n.navigator button label {\n  margin-top: 0px;\n  margin-left: 5px;\n  float: right; }\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  display: inline-block;\n  margin-left: -4px;\n  margin-top: -1.5px;\n  height: 16px;\n  width: 16px;\n  background-color: white;\n  border: 1px solid #a6a6a6;\n  border-radius: 4px; }\n\ninput[type=\"checkbox\"]:checked::before {\n  background-color: #FF2277;\n  border: 1px solid #FF2277; }\n\ninput[type=\"checkbox\"]:checked::after {\n  content: '';\n  position: absolute;\n  width: 11px;\n  height: 4px;\n  background-color: #FF2277;\n  top: 11px;\n  left: 11px;\n  border: 3px solid white;\n  border-top: none;\n  border-right: none;\n  transform: rotate(-45deg); }\n\n.project-list {\n  margin: 0;\n  height: calc(100vh - 35px - 75px - 70px);\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.link-disabled {\n  display: none; }\n\n.project-thumbnail {\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n  border-radius: 0px;\n  height: 250px;\n  width: 250px;\n  display: inline-table;\n  text-align: right;\n  position: relative;\n  padding: 0;\n  margin: 30px;\n  transition: ease-in 0.25s;\n  transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg); }\n\n.project-thumbnail:hover {\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  transition: ease-in 0.25s;\n  box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n  text-shadow: none; }\n\n.project-thumbnail:last-of-type {\n  transition: ease-in 0.25s;\n  margin-bottom: 50px; }\n\n.project-thumbnail div {\n  transition: ease-in 0.25s;\n  text-align: center;\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.project-thumbnail div * {\n  transition: ease-in 0.25s;\n  padding: 0px 20px; }\n\n.project-thumbnail div p {\n  transition: ease-in 0.25s;\n  margin-top: 10px;\n  text-align: left; }\n\n.project-thumbnail small {\n  text-align: right;\n  transition: ease-in 0.25s;\n  display: block;\n  position: absolute;\n  margin: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  right: 0;\n  bottom: 0; }\n\n.post-thumbnail {\n  text-decoration: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: inset 0 0 250px 75px #101010, 10px 7.5px 1px 0px #FF2277;\n  border-radius: 5px;\n  height: 250px;\n  width: 250px;\n  display: inline-table;\n  text-align: right;\n  position: relative;\n  padding: 0;\n  margin: 30px;\n  transition: ease-in 0.25s;\n  transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg); }\n\n.post-thumbnail:hover {\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  transition: ease-in 0.25s;\n  box-shadow: inset 0 0 250px 200px black, 5px 5px 1px 0px #393E41;\n  text-shadow: none; }\n\n.post-thumbnail:last-of-type {\n  margin-bottom: 50px; }\n\n.post-thumbnail div {\n  text-align: center;\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.post-thumbnail div * {\n  padding: 0px 20px; }\n\n.post-thumbnail div p {\n  margin-top: 10px; }\n\n.post-thumbnail small {\n  text-align: right;\n  transition: ease-in 0.25s;\n  display: block;\n  position: absolute;\n  margin: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  right: 0;\n  bottom: 0; }\n\n.project-page {\n  margin: 0;\n  padding: 0;\n  height: calc(100vh - 75px - 70px);\n  width: 100%;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.project-page h1:first-of-type {\n  padding-top: 10px; }\n\n.project-page p:first-of-type {\n  padding: 10px;\n  padding-top: 0px; }\n\n.close-icon {\n  transition: ease-in 0.2s;\n  height: 40px;\n  margin: 5px;\n  position: fixed;\n  right: 25px;\n  margin-top: 20px;\n  transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\n  -webkit-filter: drop-shadow(6px 5px 5px #FF2277);\n  filter: drop-shadow(6px 5px 5px #FF2277); }\n\n.close-icon:hover {\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41); }\n\n.share-icon {\n  transition: ease-in 0.2s;\n  height: 40px;\n  margin: 5px;\n  position: fixed;\n  right: 75px;\n  margin-top: 20px;\n  transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\n  -webkit-filter: drop-shadow(6px 5px 2px #FF2277);\n  filter: drop-shadow(6px 5px 2px #FF2277); }\n\n.share-icon:hover {\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  -webkit-filter: drop-shadow(5px 2.5px 0px #393E41);\n  filter: drop-shadow(5px 2.5px 0px #393E41); }\n\n.about-h1 {\n  margin: 10px;\n  margin-bottom: 20px; }\n\n.about-h2 {\n  margin: 10px;\n  margin-bottom: -5px;\n  text-align: left; }\n\n.about-p {\n  text-align: left;\n  margin-bottom: -7.5px; }\n\n.about-me {\n  margin-top: 10px;\n  background-color: #FF2277;\n  box-shadow: 10px 7.5px 1px 0px #393E41;\n  padding: 15px;\n  margin-bottom: 40px; }\n\n.about-me img {\n  box-shadow: #222222 1px 1px 10px; }\n\n.contact-container {\n  width: calc(100vw - 100px);\n  padding: 0 50px;\n  padding-top: 50px; }\n\n.contact-left {\n  float: left;\n  width: 40%;\n  text-align: center; }\n\n.contact-right h1 {\n  margin-bottom: 20px; }\n\n.contact-p {\n  background-color: #FF2277;\n  box-shadow: 10px 7.5px 1px 0px #393E41;\n  padding: 20px;\n  text-align: justify; }\n\n.contact-thumbnail {\n  display: block;\n  background-color: #393E41;\n  width: 100%;\n  height: 40px;\n  margin-bottom: 20px;\n  padding: 10px;\n  text-decoration: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\n  box-shadow: 10px 7.5px 1px 0px #FF2277; }\n\n.contact-thumbnail:hover {\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n  box-shadow: 5px 5px 1px 0px #FF2277; }\n\n.contact-thumbnail div {\n  float: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 40px;\n  display: block;\n  padding: 0 20px;\n  text-decoration: none;\n  margin-top: -5px;\n  width: calc(100% - 80px);\n  text-align: right; }\n\n.contact-thumbnail img {\n  width: 40px;\n  float: left; }\n\n.p5-info {\n  text-align: center;\n  padding-top: 10px; }\n\n.p5-info h1 {\n  font-size: 42px; }\n\n.p5-info p {\n  margin-top: 5px; }\n\n.p5-info input {\n  background-color: #FF2277;\n  margin: 10px;\n  position: absolute;\n  top: 85px;\n  left: 0; }\n\n.p5-canvas {\n  margin-left: 5px;\n  width: calc(100vw - 5px);\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: calc(100vh - 75px - 70px - 105px - 20px);\n  text-align: center; }\n\n.weblog-signature {\n  margin-top: 15px;\n  text-shadow: black 1px 1px 5px;\n  padding-left: 30px;\n  color: #FF2277;\n  font-weight: normal;\n  margin-bottom: 50px; }\n\n.music-release-banner {\n  background: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n  background-position: 0% 20%;\n  background-size: cover;\n  background-blend-mode: darken;\n  border-bottom: 1px solid white;\n  text-align: center;\n  padding: 15px;\n  padding-top: 0px; }\n\n.music-release-banner p, .music-release-banner h1, .music-release-banner h2, .music-release-banner h3 {\n  display: block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  margin: 0 auto;\n  padding: 0;\n  text-shadow: 1px 1px 5px black; }\n\n.submergence-hover {\n  transition: ease-out 0.2s;\n  -webkit-filter: drop-shadow(4px 2px 0px #393E41);\n  filter: drop-shadow(4px 2px 0px #393E41); }\n\n.submergence-hover img {\n  transition: ease-out 0.2s; }\n\n.submergence-hover:hover {\n  transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\n  -webkit-filter: drop-shadow(6px 5px 0px #FF2277);\n  filter: drop-shadow(6px 5px 0px #FF2277); }\n\n.submergence-hover:hover img {\n  transform: translateX(1px) translateY(20px); }\n\n.footer {\n  height: 70px;\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  margin: 0; }\n\n.footer hr {\n  border-color: #FF2277; }\n\n.footer button, .footer a {\n  font-size: 14px;\n  padding: 0;\n  color: #FDFFFC;\n  text-decoration: underline;\n  background: none;\n  border: none; }\n\n.footer a {\n  text-shadow: 2px 2px 4px #222222; }\n\n.footer button:hover, .footer a:hover {\n  text-shadow: 0 0 5px #FDFFFC; }\n\n.copyright {\n  margin-top: 0px;\n  color: #FF2277;\n  font-size: 14px;\n  text-shadow: #222222 2px 2px 1px; }\n\n@media only screen and (min-width: 768px) {\n  body {\n    overflow: hidden; }\n  .header {\n    height: 75px; }\n  .header h1, .header img {\n    float: left;\n    font-size: 55px; }\n  .header h1 {\n    margin-top: 3px;\n    padding: 0; }\n  .popup {\n    height: calc(100% - 75px - 70px); }\n  .navigator img {\n    display: block; }\n  .navigator button {\n    right: 45px; }\n  .project-list {\n    margin: 0;\n    height: calc(100vh - 35px - 75px - 70px);\n    padding: 0px 50px; }\n  .project-thumbnail {\n    transition: ease-in 0.25s;\n    height: 250px;\n    width: 250px; }\n  .post-thumbnail {\n    transition: ease-in 0.25s;\n    height: 250px;\n    width: 250px; }\n  .project-thumbnail p {\n    transition: ease-in 0.25s;\n    display: none; }\n  .project-thumbnail:hover p {\n    transition: ease-in 0.25s;\n    display: block; }\n  .project-thumbnail:hover small {\n    transition: ease-in 0.25s;\n    display: none; }\n  .project-thumbnail:hover div {\n    transition: ease-in 0.25s; }\n  .project-page {\n    height: calc(100vh - 75px - 70px); }\n  .contact-left {\n    float: left;\n    width: 40%;\n    text-align: center; }\n  .contact-right {\n    float: right;\n    left: calc(0.4 * (100vw));\n    text-align: center;\n    position: fixed;\n    width: calc(0.6 * (100vw) - 100px);\n    margin-left: 10px;\n    padding: 0px 50px; }\n  .contact-right h1 {\n    margin-bottom: 20px; }\n  .about {\n    margin: 0 20%;\n    margin-bottom: 40px; }\n  .about-me {\n    display: flex; }\n  .about-me img {\n    width: calc(50% - 42.5px);\n    display: inline-block;\n    right: 0;\n    align-self: center; }\n  .about-me div {\n    width: 50%;\n    padding-right: 37.5px;\n    align-self: center; }\n  .about-me div p {\n    width: 100%; }\n  .about-me:last-child {\n    padding-bottom: 20px; }\n  .p5-info {\n    height: 105px; }\n  .p5-info input {\n    position: absolute;\n    top: 85px; }\n  .weblog-post {\n    padding: 0 200px;\n    text-align: center; }\n  .weblog-post p {\n    text-align: left;\n    line-height: 25px; }\n  .footer {\n    position: fixed;\n    background-color: #393E41;\n    height: 70px; }\n  .footer button, .footer a {\n    display: inline-block;\n    margin: 5px 15px;\n    margin-top: 15px; } }\n\n@media only screen and (max-width: 768px) {\n  .header {\n    text-align: center;\n    height: 40px; }\n  .header h1 {\n    font-size: 20px;\n    margin: 0px;\n    margin-top: 8px;\n    margin-right: 10px;\n    float: right; }\n  .header img {\n    height: 30px;\n    float: left; }\n  .popup {\n    display: none;\n    top: 40px;\n    height: calc(100vh - 40px - 170px); }\n  .navigator img {\n    display: none; }\n  .navigator button {\n    right: 5px; }\n  .project-thumbnail {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277; }\n  .post-thumbnail {\n    height: 200px;\n    width: 200px;\n    margin: 10px;\n    box-shadow: inset 0 0 200px 50px black, 10px 10px 1px 0px #FF2277; }\n  .project-thumbnail p {\n    display: none; }\n  .project-thumbnail h2 {\n    padding: 0px 40px; }\n  .project-list {\n    margin-top: 2px;\n    height: calc(100vh - 35px - 40px - 170px);\n    padding: 0px 10px; }\n  .project-page {\n    height: calc(100vh - 40px - 170px); }\n  .share-icon {\n    display: none; }\n  .contact-container {\n    width: calc(100vw - 100px);\n    text-align: center;\n    padding: 30px 50px; }\n  .contact-left {\n    width: calc(100% - 60px);\n    text-align: center;\n    float: none;\n    padding: 0 30px;\n    margin-left: -25px; }\n  .contact-right {\n    float: none;\n    left: 0px;\n    text-align: center;\n    position: relative;\n    width: 100%;\n    padding: 0; }\n  .contact-right h1 {\n    margin-bottom: 20px; }\n  .contact-thumbnail div {\n    font-size: 20px;\n    margin-top: 10px; }\n  .about {\n    margin: 0 20px; }\n  .about-me {\n    padding: 10px; }\n  .about-me img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    width: 50%; }\n  .about-me p {\n    display: block; }\n  .about-me div {\n    margin-top: 20px; }\n  .p5-info input {\n    position: relative;\n    top: 0; }\n  .weblog-post {\n    padding: 0 10px;\n    text-align: center; }\n  .weblog-post p {\n    text-align: left;\n    line-height: 20px; }\n  .footer {\n    height: 170px;\n    background-color: none;\n    position: relative; }\n  .footer button, .footer a {\n    display: block;\n    margin: 20px auto; }\n  .copyright {\n    margin-bottom: 15px; } }\n", "",{"version":3,"sources":["C:/Users/digit/Desktop/Code/Websites/CodeDigital.github.io/src/assets/css/index.scss","C:/Users/digit/Desktop/Code/Websites/CodeDigital.github.io/src/assets/css/navigation.scss","C:/Users/digit/Desktop/Code/Websites/CodeDigital.github.io/src/assets/css/thumbnail.scss","C:/Users/digit/Desktop/Code/Websites/CodeDigital.github.io/src/assets/css/project.scss","C:/Users/digit/Desktop/Code/Websites/CodeDigital.github.io/src/assets/css/web-view.scss","C:/Users/digit/Desktop/Code/Websites/CodeDigital.github.io/src/assets/css/mobile-view.scss"],"names":[],"mappings":"AAwBA;EACE,SAAS;EACT,sBAXmB,EAAA;;AAcrB;EACI,yBA9BmB;EA+BnB,eAXoB,EAAA;;AAcxB;EAEI,aAAa,EAAA;;AAGjB;EACI,aAAa,EAAA;;AAGjB;EACI,yBA5CmB;EA6CnB,cA1CwB;EA2CxB,sBA/BiB;EAgCjB,aAAa;EACb,YAAY;EACZ,gBAAgB,EAAA;;AAGpB;EACI,YAAW;EACX,yBAhCgC;EAkChC,oDAAoD,EAAA;;AAGxD;EAEI,uDAAuD;EACvD,4BA3DwB,EAAA;;AA8D5B;EACI,yBAjEqB;EAkErB,YAAY;EACZ,kBAAkB,EAAA;;AAGtB;EACI,sBA3DkB;EA4DlB,yBAxEqB;EAyErB,WAAW;EACX,YA3DgB,EAAA;;AA8DpB;EACI,WAAU,EAAA;;AAGd;EACI,yBA7DgC;EA+D5B,oDAAoD;EACxD,YAA6B;EAC7B,WAAW,EAAA;;AAGf;EAEQ,uDAAuD,EAAA;;AAG/D;EACI,yBA1EgC;EA4EhC,oDAAoD,EAAA;;AAGxD;EACyF,WAAA;EAC+C,oBAAA;EAC5C,yBAAA;EACL,iBAAA;EACC,UAAA;EACpF,yDAA8E;EAAE,QAAA;EAChF,mHAAmH;EAAE,UAAA;EACrH,6BAA6B;EAC7B,oCAAoC,EAAA;;AAGxC;EACsG,WAAA;EAC+C,oBAAA;EAC5C,yBAAA;EACL,iBAAA;EACC,UAAA;EACjG,4DAA2F;EAAE,QAAA;EAC7F,8IAA8I;EAAE,UAAA;EAChJ,6BAA6B;EAC7B,oCAAoC,EAAA;;AAGxC;EACI,cAzHyB,EAAA;;AA4H7B;EACsG,WAAA;EAC+C,oBAAA;EAC5C,yBAAA;EACL,iBAAA;EACC,UAAA;EACjG,4DAA2F;EAAE,QAAA;EAC7F,8IAA8I;EAAE,UAAA;EAChJ,6BAA6B;EAC7B,oCAAoC,EAAA;;AAQxC;EACI,SAnIgB;EAoIhB,yBAAsC,EAAA;;AAG1C;EACI,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,YAAW;EACX,SA5IgB;EA6IhB,iCAA2D;EAC3D,kBAAkB,EAAA;;AAGtB;EACI,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,YAAW;EAEX,iCAA2D;EAC3D,iBAAqB;EACrB,yBAAyB;EACzB,8BAA0B;EAC1B,iGAAgG;EAChG,OAAO;EACP,YAAW,EAAA;;AAGf;EACI,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,kBAAiB;EACjB,oBAAoB,EAAA;;AAGxB;EACI,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAiB;EAEjB,YAAY;EAEZ,iCAjMoB;EAmMpB,cAlMwB;EAmMxB,yBAtMmB;EAuMnB,kBAAkB;EAClB,mBAAmB,EAAA;;AAGvB;EACI,kBAAkB,EAAA;;AAGtB;EACI,gBAAgB;EAChB,yBA/MoB;EAkNpB,kCAnNqB,EAAA;;AAsNzB;EACI,kBAAkB;EAClB,cAAc;EACd,cArNyB;EAsNzB,gBAAe,EAAA;;AAGnB;EACI,kBAAkB,EAAA;;AAGtB;EACI,WAAW;EACX,sDAAsD;EACtD,wBAAwB,EAAA;;AAG5B;EACI,oDAAoD,EAAA;EADxD;IAIQ,2BAAkC,EAAA;;AAI1C;EACI,qBAAqB;EACrB,6BAAsC,EAAA;;AAG1C;EACI,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,yBAxPqB;EAyPrB,cAvPwB;EAwPxB,kBAAkB,EAAA;;AC3PtB;EACI,yBDCoB;ECApB,YDegB;ECdhB,SDagB;ECZhB,WAAW;EACX,SAAQ,EAAA;;AAGZ;EACI,cAAc;EACd,YAA2B;EAC3B,WAAW;EACX,UAAU;EACV,oBAAmB;EACnB,kBAAkB,EAAA;;AAGtB;EAGI,kCDnBqB;ECoBrB,eAA8B;EAC9B,mBDpBoB;ECqBpB,YAAW;EACX,cDrBwB;ECsBxB,WAAW;EACX,YAAW;EACX,aAAa;EACb,mBDXgB,EAAA;;ACcpB;EACI,cD7BwB;EC8BxB,gCD7B0B,EAAA;;AC2B9B;EACI,cD7BwB;EC8BxB,gCD7B0B,EAAA;;AC2B9B;EACI,cD7BwB;EC8BxB,gCD7B0B,EAAA;;AC2B9B;EACI,cD7BwB;EC8BxB,gCD7B0B,EAAA;;AC2B9B;EACI,cD7BwB;EC8BxB,gCD7B0B,EAAA;;ACiC9B;EACI,wBAAwB;EACxB,cDpCwB;ECqCxB,cAAc;EACd,kBAAkB;EAClB,YAA4B;EAC5B,yBD3CmB;EC4CnB,cAAc;EACd,WAA0B;EAC1B,YAAW;EACX,iBAAiB;EAIjB,oDAAoD;EACpD,6BAAsC,EAAA;;AAG1C;EACI,sDAAsD;EACtD,+BAAwC,EAAA;;AAK5C;EAGI,gBAAwB;EACxB,gBAAe;EACf,YAAW;EACX,cDjEwB;ECkExB,WAA0B;EAC1B,YAA2B;EAC3B,WAAU,EAAA;;AAGd;EACI,eAAc;EACd,gBAAgB;EAChB,YAAW,EAAA;;AAGf;EACI,WAAW;EACX,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,yBAAoC;EACpC,kBAAkB,EAAA;;AAIrB;EACG,yBD5FoB;EC6FpB,yBD7FoB,EAAA;;ACiGxB;EACI,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,yBDtGoB;ECuGpB,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;EAKlB,yBAAyB,EAAA;;AD8I7B;EACI,SAAQ;EACR,wCAA+E;EAC/E,kBAAkB;EAClB,kBAAiB;EACjB,gBAAgB,EAAA;;AAGpB;EACI,aAAa,EAAA;;AEzQjB;EACI,qBAAoB;EACpB,sBAAsB;EACtB,4BAA2B;EAE3B,oEFHoB;EEIpB,kBAAkB;EAClB,aFWkB;EEVlB,YFUkB;EETlB,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,yBFQgC;EEPhC,uDAAuD,EAAA;;AAG3D;EACI,oDAAoD;EACpD,yBFEgC;EEA5B,gEFrBiB;EEsBrB,iBAAiB,EAAA;;AAGrB;EACI,yBFLgC;EEMhC,mBAAmB,EAAA;;AAGvB;EACI,yBFVgC;EEYhC,kBAAkB;EAClB,YFjBkB;EEoBlB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAA+B,EAAA;;AAGnC;EACI,yBFvBgC;EEwBhC,iBAAiB,EAAA;;AAGrB;EACI,yBF5BgC;EE6BhC,gBAAgB;EAChB,gBAAgB,EAAA;;AAIpB;EACI,iBAAiB;EACjB,yBFpCgC;EEqChC,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,gBAAiC;EAEjC,gBAAgB;EAChB,uBAAuB;EACvB,QAAQ;EACR,SAAS,EAAA;;AAGb;EACI,qBAAoB;EACpB,sBAAsB;EACtB,4BAA2B;EAE3B,oEFzEoB;EE0EpB,kBAAkB;EAClB,aF3DkB;EE4DlB,YF5DkB;EE6DlB,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,yBF9DgC;EE+DhC,uDAAuD,EAAA;;AAG3D;EACI,oDAAoD;EACpD,yBFpEgC;EEsE5B,gEF3FiB;EE4FrB,iBAAiB,EAAA;;AAGrB;EACI,mBAAmB,EAAA;;AAGvB;EAEI,kBAAkB;EAClB,YFrFkB;EEwFlB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAA+B,EAAA;;AAGnC;EACI,iBAAiB,EAAA;;AAGrB;EACI,gBAAgB,EAAA;;AAGpB;EACI,iBAAiB;EACjB,yBFpGgC;EEqGhC,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,gBAAiC;EAEjC,gBAAgB;EAChB,uBAAuB;EACvB,QAAQ;EACR,SAAS,EAAA;;ACnIb;EACI,SAAQ;EACR,UAAS;EACT,iCAA2D;EAC3D,WAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB,EAAA;;AAGpB;EACI,iBAAiB,EAAA;;AAGrB;EACI,aAAa;EACb,gBAAgB,EAAA;;AAGpB;EACI,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,eAAc;EACd,WAAW;EACX,gBAAgB;EAChB,uDAAuD;EACvD,gDAAwD;EACxD,wCAAgD,EAAA;;AAGpD;EACI,oDAAoD;EACpD,gDAAyD;EACzD,wCAAiD,EAAA;;AAIrD;EACI,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,eAAc;EACd,WAAW;EACX,gBAAgB;EAChB,uDAAuD;EACvD,gDAAwD;EACxD,wCAAgD,EAAA;;AAGpD;EACI,oDAAoD;EACpD,kDAA2D;EAC3D,0CAAmD,EAAA;;AAMvD;EACI,YAAY;EACZ,mBAAmB,EAAA;;AAGvB;EACI,YAAY;EAEZ,mBAAmB;EACnB,gBAAgB,EAAA;;AAUpB;EACI,gBAAgB;EAEhB,qBAAqB,EAAA;;AAGzB;EACI,gBAAgB;EAEhB,yBHrFoB;EG0FpB,sCH3FqB;EG4FrB,aAAa;EAEb,mBAAmB,EAAA;;AAGvB;EAKI,gCAAuC,EAAA;;AAO3C;EACI,0BAA0B;EAC1B,eAAe;EACf,iBAAiB,EAAA;;AAKrB;EACI,WAAW;EACX,UAJc;EAKd,kBAAkB,EAAA;;AAGtB;EACI,mBAAmB,EAAA;;AAGvB;EACI,yBH/HoB;EGoIpB,sCHrIqB;EGsIrB,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACI,cAAc;EACd,yBH5IqB;EG6IrB,WAAW;EACX,YAAY;EAEZ,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,uDAAuD;EACvD,sCHtJoB,EAAA;;AGyJxB;EACI,oDAAoD;EACpD,mCH3JoB,EAAA;;AG8JxB;EACI,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,gBAAgB;EAChB,wBAAwB;EACxB,iBAAiB,EAAA;;AAGrB;EACI,WAAW;EACX,WAAW,EAAA;;AAGf;EACI,kBAAkB;EAClB,iBAAiB,EAAA;;AAGrB;EACI,eAAiC,EAAA;;AAGrC;EACI,eAAe,EAAA;;AAGnB;EACI,yBH/LoB;EGgMpB,YAAY;EACZ,kBAAkB;EAClB,SAAuB;EACvB,OAAO,EAAA;;AAGX;EACI,gBAAgB;EAChB,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB;EAElB,gDAAuF;EAEvF,kBAAkB,EAAA;;AAGtB;EACI,gBAAe;EACf,8BAA8B;EAC9B,kBAAkB;EAClB,cHlNyB;EGmNzB,mBAAmB;EACnB,mBAAmB,EAAA;;AAGvB;EACI,8CAA8D;EAC9D,2BAA0B;EAC1B,sBAAsB;EACtB,6BAA6B;EAC7B,8BAA6B;EAC7B,kBAAkB;EAClB,aAAa;EACb,gBAAgB,EAAA;;AAIpB;EACI,cAAc;EACd,0BAAkB;EAAlB,uBAAkB;EAAlB,kBAAkB;EAClB,2BAAmB;EAAnB,wBAAmB;EAAnB,mBAAmB;EACnB,cAAc;EACd,UAAU;EACV,8BAA8B,EAAA;;AAGlC;EACI,yBAAyB;EACzB,gDAAyD;EACzD,wCAAiD,EAAA;;AAGrD;EACI,yBAAyB,EAAA;;AAG7B;EACI,uDAAuD;EACvD,gDAAwD;EACxD,wCAAgD,EAAA;;AAGpD;EACI,2CAA2C,EAAA;;AHa/C;EACI,YA7PgB;EA8PhB,YAAY;EACZ,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,SAAQ,EAAA;;AAGZ;EACI,qBAvRoB,EAAA;;AA0RxB;EACI,eAzQoB;EA0QpB,UAAU;EACV,cA5RwB;EA8RxB,0BAA0B;EAC1B,gBAAgB;EAChB,YAAY,EAAA;;AAGhB;EACI,gCAvSmB,EAAA;;AA0SvB;EACI,4BAxSwB,EAAA;;AA2S5B;EACI,eAAe;EACf,cA3SyB;EA4SzB,eA7RoB;EA8RpB,gCAAuC,EAAA;;AIlT3C;EAKI;IACI,gBAAgB,EAAA;EAGpB;IACI,YATe,EAAA;EAYnB;IACI,WAAW;IACX,eAA8B,EAAA;EAGlC;IACI,eAAe;IAGf,UAAU,EAAA;EAId;IACI,gCAA0D,EAAA;EAG9D;IACI,cAAc,EAAA;EAGlB;IACI,WAAyB,EAAA;EAG7B;IACI,SAAQ;IACR,wCAA+E;IAC/E,iBAAiB,EAAA;EAGrB;IACI,yBJvB4B;IIwB5B,aA5CkB;IA6ClB,YA7CkB,EAAA;EAgDtB;IACI,yBJ7B4B;II8B5B,aAlDkB;IAmDlB,YAnDkB,EAAA;EAsDtB;IACI,yBJnC4B;IIoC5B,aAAa,EAAA;EAGjB;IACI,yBJxC4B;IIyC5B,cAAc,EAAA;EAGlB;IACI,yBJ7C4B;II8C5B,aAAa,EAAA;EAGjB;IACI,yBJlD4B,EAAA;EIqDhC;IACI,iCAA2D,EAAA;EAG/D;IACI,WAAW;IACX,UDmCU;IClCV,kBAAkB,EAAA;EAItB;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,kCAAkC;IAClC,iBAAiB;IACjB,iBAAiB,EAAA;EAGrB;IACI,mBAAmB,EAAA;EAIvB;IACI,aAAa;IACb,mBAAmB,EAAA;EAGvB;IACI,aAAa,EAAA;EAGjB;IACI,yBAAyB;IAGzB,qBAAqB;IACrB,QAAQ;IACR,kBAAkB,EAAA;EAGtB;IACI,UAAU;IAKV,qBAAqB;IACrB,kBAAkB,EAAA;EAGtB;IACI,WAAW,EAAA;EAGf;IACI,oBAAoB,EAAA;EAGxB;IACI,aJrHc,EAAA;EIwHlB;IACI,kBAAkB;IAClB,SAAuB,EAAA;EAG3B;IACI,gBAAgB;IAChB,kBAAkB,EAAA;EAGtB;IACI,gBAAgB;IAChB,iBAAiB,EAAA;EAGrB;IACI,eAAe;IACf,yBJ7JiB;II8JjB,YA5JgB,EAAA;EA+JpB;IACI,qBAAqB;IACrB,gBAAgB;IAChB,gBAAgB,EAAA,EACnB;;ACtKL;EASI;IACI,kBAAkB;IAClB,YAVe,EAAA;EAanB;IACI,eAAe;IACf,WAAW;IACX,eAAe;IACf,kBAAiB;IACjB,YAAY,EAAA;EAGhB;IACI,YAAY;IACZ,WAAW,EAAA;EAGf;IACI,aAAY;IACZ,SA5Be;IA6Bf,kCAA2D,EAAA;EAG/D;IACI,aAAa,EAAA;EAGjB;IACI,UAAS,EAAA;EAGb;IACI,aAxCkB;IAyClB,YAzCkB;IA0ClB,YAAY;IACZ,iEL3CgB,EAAA;EK+CpB;IACI,aAhDkB;IAiDlB,YAjDkB;IAkDlB,YAAY;IACZ,iELnDgB,EAAA;EKsDpB;IACI,aAAY,EAAA;EAGhB;IACI,iBAAiB,EAAA;EAGrB;IACI,eAAc;IACd,yCAA+E;IAC/E,iBAAiB,EAAA;EAGrB;IACI,kCAA2D,EAAA;EAG/D;IACI,aAAa,EAAA;EAGjB;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB,EAAA;EAGtB;IACI,wBAAwB;IACxB,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,kBAAkB,EAAA;EAGtB;IACI,WAAW;IACX,SAAS;IACT,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,UAAU,EAAA;EAGd;IACI,mBAAmB,EAAA;EAGvB;IACI,eAAe;IACf,gBAAgB,EAAA;EAKpB;IACI,cAAc,EAAA;EAGlB;IACI,aAAa,EAAA;EAGjB;IACI,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,UAAU,EAAA;EAGd;IACI,cAAc,EAAA;EAGlB;IACI,gBAAgB,EAAA;EAGpB;IACI,kBAAkB;IAClB,MAAK,EAAA;EAGT;IACI,eAAe;IACf,kBAAkB,EAAA;EAGtB;IACI,gBAAgB;IAChB,iBAAiB,EAAA;EAGrB;IACI,aArJiB;IAsJjB,sBAAsB;IACrB,kBAAkB,EAAA;EAIvB;IACI,cAAc;IACd,iBAAiB,EAAA;EAGrB;IACI,mBAAkB,EAAA,EACrB","file":"index.scss","sourcesContent":["$primary-color: #222222;\r\n$secondary-color: #393E41;\r\n$tertiary-color: #FF2277;\r\n$primary-text-color: #FDFFFC;\r\n$secondary-text-color: #393E41;\r\n$tertiary-text-color: #FF2277;\r\n$phoenix-primary-color: #C52437;\r\n$phoenix-secondary-color: #F08843;\r\n$phoenix-tertiary-color: #F7E27C;\r\n\r\n// $tertiary-color: $phoenix-primary-color;\r\n// $tertiary-text-color: $phoenix-secondary-color;\r\n\r\n$title-font: Monospace;\r\n// $body-font: Arial, Helvetica, sans-serif;\r\n$body-font: Monospace;\r\n$header-height: 75px;\r\n$search-height: 35px;\r\n$thumbnail-size: 250px;\r\n$bottom-height: 70px;\r\n$regular-font-size: 14px;\r\n$p5-info-height: 105px;\r\n$thumbnail-transition: ease-in 0.25s;\r\n\r\n* {\r\n  margin: 0;\r\n  font-family: $body-font;\r\n}\r\n\r\nbody {\r\n    background-color: $primary-color;\r\n    font-size:$regular-font-size;\r\n}\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button{\r\n    //-webkit-appearance: none;\r\n    display: none;\r\n}\r\n\r\ninput[type=\"search\"]::-ms-clear{\r\n    display: none;\r\n}\r\n\r\nbody {\r\n    background-color:$primary-color;\r\n    color:$primary-text-color;\r\n    font-family: $body-font;\r\n    height: 100vh;\r\n    width: 100vw;;\r\n    overflow: hidden;\r\n}\r\n\r\na {\r\n    color:white;\r\n    transition: $thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n}\r\n\r\na:hover {\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    text-shadow: 0 0 5px $primary-text-color;\r\n}\r\n\r\ncode {\r\n    background-color: $secondary-color;\r\n    padding: 3px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.header {\r\n    font-family: $title-font;\r\n    background-color: $secondary-color;\r\n    width: 100%;\r\n    height: $header-height;\r\n}\r\n\r\n.header ::slotted {\r\n    float:left;\r\n}\r\n\r\n.header img {\r\n    transition: $thumbnail-transition;\r\n        // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    height: ($header-height - 10);\r\n    margin: 5px;\r\n}\r\n\r\n.header img:hover {\r\n        // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n        transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.header h1 {\r\n    transition: $thumbnail-transition;\r\n    // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n}\r\n\r\n.anniversary {\r\n    background: -moz-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $tertiary-color), color-stop(100%, rgba(0,255,255,1))); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $tertiary-color 0%, rgba(0,255,255,1) 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffff', endColorstr='#ff00ff',GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.phoenix {\r\n    background: -moz-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $phoenix-primary-color), color-stop(100%, $phoenix-tertiary-color)); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.tertiary-text-color{\r\n    color: $tertiary-text-color;\r\n}\r\n\r\n.main-gradient-text {\r\n    background: -moz-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ff3.6+ */\r\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, $phoenix-primary-color), color-stop(100%, $phoenix-tertiary-color)); /* safari4+,chrome */\r\n    background: -webkit-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* safari5.1+,chrome10+ */\r\n    background: -o-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* opera 11.10+ */\r\n    background: -ms-linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* ie10+ */\r\n    background: linear-gradient(45deg, $phoenix-primary-color 0%, $phoenix-tertiary-color 100%); /* w3c */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=$phoenix-primary-color, endColorstr=$phoenix-tertiary-color,GradientType=1 ); /* ie6-9 */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n// .header h1:hover {\r\n//     // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n//     // transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n// }\r\n\r\n.main-body{\r\n    top: $header-height;\r\n    height: calc(100% - #{$header-height});\r\n}\r\n\r\n.popup{\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 101;\r\n    border:none;\r\n    top: $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    text-align: center;\r\n}\r\n\r\n.popup-button{\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 101;\r\n    border:none;\r\n    // top: $header-height;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    background:rgb(0,0,0);\r\n    background: transparent\\9;\r\n    background:rgba(0,0,0,0.8);\r\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#22000000,endColorstr=#22000000);\r\n    zoom: 1;\r\n    width:100vw;\r\n}\r\n\r\n.popup-container{\r\n    z-index: 110;\r\n    display: block;\r\n    position: absolute;\r\n    width: 100vw;\r\n    text-align: center;\r\n    padding:100px 0px;\r\n    pointer-events: none;\r\n}\r\n\r\n.popup-div {\r\n    display: block;\r\n    font-size: larger;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n    // margin-top:50px;\r\n    width: 500px;\r\n    // box-shadow: 10px 10px 10px black;\r\n    box-shadow: 10px 10px 0px $tertiary-color;\r\n    // border-radius: 100px;\r\n    color:$primary-text-color;\r\n    background-color: $primary-color;\r\n    padding: 20px 50px;\r\n    pointer-events: all;\r\n}\r\n\r\n.popup h1 {\r\n    text-align: center;\r\n}\r\n\r\n.popup code {\r\n    border-radius: 0;\r\n    background-color: $tertiary-color;\r\n    -moz-box-shadow:    inset 0 0 10px $secondary-color;\r\n    -webkit-box-shadow: inset 0 0 10px $secondary-color;\r\n    box-shadow:         inset 0 0 10px $secondary-color;\r\n}\r\n\r\n.popup > div small {\r\n    text-align: center;\r\n    display: block;\r\n    color: $tertiary-text-color;\r\n    margin-top:20px;\r\n}\r\n\r\n.share-button-div{\r\n    text-align: center;\r\n}\r\n\r\n.share-button-div > *{\r\n    margin: 5px;\r\n    transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    transition: ease-in 0.3s;\r\n}\r\n\r\n.share-button-div > *:hover {\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n\r\n    .share-button-icon{\r\n        box-shadow:$tertiary-color 3px 2px;\r\n    }\r\n}\r\n\r\n.share-button-icon{\r\n    border-radius: 1000px;\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.share-count-wrapper > *{\r\n    margin-left: -20px;\r\n    margin-top: -5px;\r\n    padding: 3px 6px;\r\n    background-color: $secondary-color;\r\n    color: $primary-text-color;\r\n    border-radius: 8px;\r\n}\r\n\r\n@import './navigation.scss';\r\n\r\n.project-list {\r\n    margin:0;\r\n    height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n    text-align: center;\r\n    overflow-x:hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.link-disabled {\r\n    display: none;\r\n}\r\n\r\n@import './thumbnail.scss';\r\n@import './project.scss';\r\n\r\n.footer{\r\n    height: $bottom-height;\r\n    width: 100vw;\r\n    position: fixed;\r\n    bottom: 0;\r\n    text-align: center;\r\n    margin:0;\r\n}\r\n\r\n.footer hr{\r\n    border-color:$tertiary-color\r\n}\r\n\r\n.footer button, .footer a{\r\n    font-size:$regular-font-size;\r\n    padding: 0;\r\n    color: $primary-text-color;    \r\n    // text-shadow: $primary-color 2px 2px 1px;\r\n    text-decoration: underline;\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.footer a{\r\n    text-shadow: 2px 2px 4px $primary-color;\r\n}\r\n\r\n.footer button:hover, .footer a:hover {\r\n    text-shadow: 0 0 5px $primary-text-color;\r\n}\r\n\r\n.copyright {\r\n    margin-top: 0px;\r\n    color:$tertiary-text-color;\r\n    font-size: $regular-font-size;\r\n    text-shadow: $primary-color 2px 2px 1px;\r\n}\r\n\r\n@import 'web-view.scss';\r\n@import 'mobile-view.scss';",".navigator {\r\n    background-color: $tertiary-color;\r\n    height: $search-height;\r\n    top: $header-height;\r\n    width: 100%;\r\n    margin:0;\r\n}\r\n\r\n.navigator img {\r\n    display: block;\r\n    height: $search-height - 10;\r\n    margin: 5px;\r\n    right: 5px;\r\n    pointer-events:none;\r\n    position: absolute;\r\n}\r\n\r\n.navigator input {\r\n    -moz-box-shadow:    inset 0 0 10px $secondary-color;\r\n    -webkit-box-shadow: inset 0 0 10px $secondary-color;\r\n    box-shadow:         inset 0 0 10px $secondary-color;\r\n    font-size: $search-height - 20;\r\n    background:$tertiary-color;\r\n    border:none;\r\n    color:$primary-text-color;\r\n    width: 100%;\r\n    height:100%;\r\n    padding: 10px;\r\n    padding-right:$search-height;\r\n}\r\n\r\n.navigator input::placeholder {\r\n    color:$primary-text-color;\r\n    text-shadow: 1px 1px 4px $secondary-text-color;\r\n    // text-shadow: -1px -1px 2.5px $secondary-text-color, 1px -1px 2.5px $secondary-text-color, -1px 1px 2.5px $secondary-text-color, 1px 1px 2.5px $secondary-text-color;\r\n}\r\n\r\n.navigator button {\r\n    transition: ease-in 0.3s;\r\n    color: $primary-text-color;\r\n    display: block;\r\n    position: absolute;\r\n    height: $search-height - 5px;\r\n    background-color: $primary-color;\r\n    margin: 1.25px;\r\n    right: $search-height+10px;\r\n    border:none;\r\n    padding: 8px 12px;\r\n    // border-radius: 5px;\r\n    // transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    // box-shadow: $secondary-color 7.5px 2.5px;\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.navigator button:hover{\r\n    transform: rotateX(6deg) rotateY(-20deg) rotateZ(1deg);\r\n    box-shadow: $secondary-color 7.5px 2.5px;\r\n    // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    // box-shadow: $secondary-color 5px 2.5px;\r\n}\r\n\r\n.navigator button input{\r\n    -moz-box-shadow:    none;\r\n    -webkit-box-shadow: none;\r\n    box-shadow:         none;\r\n    background:none;\r\n    border:none;\r\n    color:$primary-text-color;\r\n    width: $search-height - 20;\r\n    height: $search-height - 20;\r\n    float:left;\r\n}\r\n\r\n.navigator button label{\r\n    margin-top:0px;\r\n    margin-left: 5px;\r\n    float:right;\r\n}\r\n\r\ninput[type=\"checkbox\"]::before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    margin-left: -4px;\r\n    margin-top: -1.5px;\r\n    height: 16px;\r\n    width: 16px;\r\n    background-color: white;\r\n    border: 1px solid rgb(166, 166, 166);\r\n    border-radius: 4px;\r\n    // box-shadow: inset 0 2px 5px rgba(0,0,0,0.25);\r\n }\r\n\r\n input[type=\"checkbox\"]:checked::before {\r\n    background-color: $tertiary-color;\r\n    border: 1px solid $tertiary-color;\r\n\r\n }\r\n\r\ninput[type=\"checkbox\"]:checked::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 11px;\r\n    height: 4px;\r\n    background-color: $tertiary-color;\r\n    top: 11px;\r\n    left: 11px;\r\n    border: 3px solid white;\r\n    border-top: none;\r\n    border-right: none;\r\n    -webkit-transform: rotate(-45deg);\r\n    -moz-transform: rotate(-45deg);\r\n    -o-transform: rotate(-45deg);\r\n    -ms-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n }",".project-thumbnail {\r\n    text-decoration:none;\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    // box-shadow:inset 0 0 $thumbnail-size 75px #101010, 5px 5px 1px 0px $secondary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 75px #101010,10px 7.5px 1px 0px $tertiary-color;\r\n    border-radius: 0px;\r\n    height: $thumbnail-size;\r\n    width: $thumbnail-size;\r\n    display: inline-table;\r\n    text-align: right;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 30px;\r\n    transition:$thumbnail-transition;\r\n    transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.project-thumbnail:hover {\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transition:$thumbnail-transition;\r\n    // box-shadow:inset 0 0 $thumbnail-size 200px black,10px 7.5px 1px 0px $tertiary-color;\r\n        box-shadow:inset 0 0 $thumbnail-size 200px black, 5px 5px 1px 0px $secondary-color;\r\n    text-shadow: none;\r\n}\r\n\r\n.project-thumbnail:last-of-type {\r\n    transition:$thumbnail-transition;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.project-thumbnail div {\r\n    transition:$thumbnail-transition;\r\n    // display:table;\r\n    text-align: center;\r\n    width:$thumbnail-size;\r\n    //height: 100%;\r\n    // margin-top: 10%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.project-thumbnail div *{\r\n    transition:$thumbnail-transition;\r\n    padding: 0px 20px;\r\n}\r\n\r\n.project-thumbnail div p {\r\n    transition:$thumbnail-transition;\r\n    margin-top: 10px;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.project-thumbnail small {\r\n    text-align: right;\r\n    transition:$thumbnail-transition;\r\n    display: block;\r\n    position: absolute;\r\n    margin: 10px;\r\n    max-width: $thumbnail-size - 20px;\r\n    // white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.post-thumbnail {\r\n    text-decoration:none;\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    // box-shadow:inset 0 0 $thumbnail-size 75px #101010, 5px 5px 1px 0px $secondary-color;\r\n    box-shadow:inset 0 0 $thumbnail-size 75px #101010,10px 7.5px 1px 0px $tertiary-color;\r\n    border-radius: 5px;\r\n    height: $thumbnail-size;\r\n    width: $thumbnail-size;\r\n    display: inline-table;\r\n    text-align: right;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 30px;\r\n    transition:$thumbnail-transition;\r\n    transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n}\r\n\r\n.post-thumbnail:hover {\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    transition:$thumbnail-transition;\r\n    // box-shadow:inset 0 0 $thumbnail-size 200px black,10px 7.5px 1px 0px $tertiary-color;\r\n        box-shadow:inset 0 0 $thumbnail-size 200px black, 5px 5px 1px 0px $secondary-color;\r\n    text-shadow: none;\r\n}\r\n\r\n.post-thumbnail:last-of-type {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.post-thumbnail div {\r\n    // display:table;\r\n    text-align: center;\r\n    width:$thumbnail-size;\r\n    //height: 100%;\r\n    // margin-top: 10%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.post-thumbnail div *{\r\n    padding: 0px 20px;\r\n}\r\n\r\n.post-thumbnail div p {\r\n    margin-top: 10px;\r\n}\r\n\r\n.post-thumbnail small {\r\n    text-align: right;\r\n    transition:$thumbnail-transition;\r\n    display: block;\r\n    position: absolute;\r\n    margin: 10px;\r\n    max-width: $thumbnail-size - 20px;\r\n    // white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    right: 0;\r\n    bottom: 0;\r\n}",".project-page {\r\n    margin:0;\r\n    padding:0;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    width:100%;\r\n    text-align: center;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.project-page h1:first-of-type{\r\n    padding-top: 10px;\r\n}\r\n\r\n.project-page p:first-of-type{\r\n    padding: 10px;\r\n    padding-top: 0px;\r\n}\r\n\r\n.close-icon {\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    margin: 5px;\r\n    position:fixed;\r\n    right: 25px;\r\n    margin-top: 20px;\r\n    transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 5px $tertiary-color);\r\n}\r\n\r\n.close-icon:hover {\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n}\r\n\r\n.share-icon {\r\n    transition: ease-in 0.2s;\r\n    height: 40px;\r\n    margin: 5px;\r\n    position:fixed;\r\n    right: 75px;\r\n    margin-top: 20px;\r\n    transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 2px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 2px $tertiary-color);\r\n}\r\n\r\n.share-icon:hover {\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    -webkit-filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    filter: drop-shadow(5px 2.5px 0px $secondary-color);\r\n    // -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    // filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    //text-shadow: 10px 10px 0px #FF2277;\r\n}\r\n\r\n.about-h1{\r\n    margin: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.about-h2{\r\n    margin: 10px;\r\n    // margin-top:30px;\r\n    margin-bottom: -5px;\r\n    text-align: left;\r\n    // padding: 10px;\r\n    // background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    // box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n}\r\n\r\n.about-p{\r\n    text-align: left;\r\n    // text-align: justify;\r\n    margin-bottom: -7.5px;\r\n}\r\n\r\n.about-me{\r\n    margin-top: 10px;\r\n    // border-radius: 10px;\r\n    background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    padding: 15px;\r\n    // padding-bottom: 10px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.about-me img{\r\n    // border-radius: 10px;\r\n    // background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    box-shadow: $primary-color 1px 1px 10px;\r\n    // box-shadow: 10px 7.5px 1px 0px $primary-color;\r\n    // box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    // height: 20px;\r\n    // width: 10px;\r\n}\r\n\r\n.contact-container {\r\n    width: calc(100vw - 100px);\r\n    padding: 0 50px;\r\n    padding-top: 50px;\r\n}\r\n\r\n$contact-left: 40%;\r\n\r\n.contact-left {\r\n    float: left;\r\n    width: $contact-left;\r\n    text-align: center;\r\n}\r\n\r\n.contact-right h1{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contact-p{\r\n    background-color: $tertiary-color;\r\n    // background-color: $secondary-color;\r\n    // border-radius: 10px;\r\n    // box-shadow: black 1px 1px 10px;\r\n    // box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n    box-shadow:10px 7.5px 1px 0px $secondary-color;\r\n    padding: 20px;\r\n    text-align: justify;\r\n}\r\n\r\n.contact-thumbnail {\r\n    display: block;\r\n    background-color: $secondary-color;\r\n    width: 100%;\r\n    height: 40px;\r\n    // border-radius: 100px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    transform: rotateX(10deg) rotateY(-15deg) rotateZ(1deg);\r\n    box-shadow:10px 7.5px 1px 0px $tertiary-color;\r\n}\r\n\r\n.contact-thumbnail:hover{\r\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n    box-shadow:5px 5px 1px 0px $tertiary-color;\r\n}\r\n\r\n.contact-thumbnail div{\r\n    float: right;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    font-size: 40px;\r\n    display: block;\r\n    padding: 0 20px;\r\n    text-decoration: none;\r\n    margin-top: -5px;\r\n    width: calc(100% - 80px);\r\n    text-align: right;\r\n}\r\n\r\n.contact-thumbnail img{\r\n    width: 40px;\r\n    float: left;\r\n}\r\n\r\n.p5-info {\r\n    text-align: center;\r\n    padding-top: 10px;\r\n}\r\n\r\n.p5-info h1{\r\n    font-size: 3 * $regular-font-size;\r\n}\r\n\r\n.p5-info p{\r\n    margin-top: 5px;\r\n}\r\n\r\n.p5-info input {\r\n    background-color: $tertiary-color;\r\n    margin: 10px;\r\n    position: absolute;\r\n    top:$header-height+10px;\r\n    left: 0;\r\n}\r\n\r\n.p5-canvas{\r\n    margin-left: 5px;\r\n    width: calc(100vw - 5px);\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    // border: white 2px solid;\r\n    height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height} - 20px);\r\n    // max-height: calc(100vh - #{$header-height} - #{$bottom-height} - #{$p5-info-height} - 10px);\r\n    text-align: center;\r\n}\r\n\r\n.weblog-signature{\r\n    margin-top:15px;\r\n    text-shadow: black 1px 1px 5px;\r\n    padding-left: 30px;\r\n    color:$tertiary-text-color;\r\n    font-weight: normal;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.music-release-banner{\r\n    background: url('../../../public/assets/img/music-banner.jpg');\r\n    background-position:0% 20%;\r\n    background-size: cover;\r\n    background-blend-mode: darken;\r\n    border-bottom:1px solid white;\r\n    text-align: center;\r\n    padding: 15px;\r\n    padding-top: 0px;\r\n}\r\n\r\n\r\n.music-release-banner p,.music-release-banner h1,.music-release-banner h2,.music-release-banner h3 {\r\n    display: block;\r\n    width: max-content;\r\n    height: max-content;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    text-shadow: 1px 1px 5px black;\r\n}\r\n\r\n.submergence-hover{\r\n    transition: ease-out 0.2s;\r\n    -webkit-filter: drop-shadow(4px 2px 0px $secondary-color);\r\n    filter: drop-shadow(4px 2px 0px $secondary-color);\r\n}\r\n\r\n.submergence-hover img{\r\n    transition: ease-out 0.2s;\r\n}\r\n\r\n.submergence-hover:hover{\r\n    transform: rotateX(15deg) rotateY(-20deg) rotateZ(1deg);\r\n    -webkit-filter: drop-shadow(6px 5px 0px $tertiary-color);\r\n    filter: drop-shadow(6px 5px 0px $tertiary-color);\r\n}\r\n\r\n.submergence-hover:hover img {\r\n    transform: translateX(1px) translateY(20px);\r\n}\r\n","@media only screen and (min-width: 768px){\r\n    $header-height:75px;\r\n    $thumbnail-size: 250px;\r\n    $bottom-height: 70px;\r\n\r\n    body{\r\n        overflow: hidden;\r\n    }\r\n\r\n    .header {\r\n        height:$header-height;\r\n    }\r\n\r\n    .header h1, .header img {\r\n        float: left;\r\n        font-size: $header-height - 20;\r\n    }\r\n\r\n    .header h1 {\r\n        margin-top: 3px;\r\n        // margin-right: 10px;\r\n        // float: right;\r\n        padding: 0;\r\n        // bottom: 3px;\r\n    }\r\n\r\n    .popup{\r\n        height: calc(100% - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .navigator img {\r\n        display: block;\r\n    }\r\n\r\n    .navigator button{\r\n        right:$search-height+10px;\r\n    }\r\n\r\n    .project-list {\r\n        margin:0;\r\n        height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n        padding: 0px 50px;\r\n    }\r\n\r\n    .project-thumbnail {\r\n        transition:$thumbnail-transition;\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n    }\r\n\r\n    .post-thumbnail {\r\n        transition:$thumbnail-transition;\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n    }\r\n    \r\n    .project-thumbnail p {\r\n        transition:$thumbnail-transition;\r\n        display: none;\r\n    }\r\n\r\n    .project-thumbnail:hover p {\r\n        transition:$thumbnail-transition;\r\n        display: block;\r\n    }\r\n\r\n    .project-thumbnail:hover small{\r\n        transition:$thumbnail-transition;\r\n        display: none;\r\n    }\r\n\r\n    .project-thumbnail:hover div{\r\n        transition:$thumbnail-transition;\r\n    }\r\n\r\n    .project-page{\r\n        height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .contact-left {\r\n        float: left;\r\n        width: $contact-left;\r\n        text-align: center;\r\n    \r\n    }\r\n    \r\n    .contact-right {\r\n        float: right;\r\n        left: calc(0.4 * (100vw));\r\n        text-align: center;\r\n        position: fixed;\r\n        width: calc(0.6 * (100vw) - 100px);\r\n        margin-left: 10px;\r\n        padding: 0px 50px;\r\n    }\r\n    \r\n    .contact-right h1{\r\n        margin-bottom: 20px;\r\n    }\r\n    \r\n\r\n    .about{\r\n        margin: 0 20%;\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .about-me{\r\n        display: flex;\r\n    }\r\n\r\n    .about-me img{\r\n        width: calc(50% - 42.5px);\r\n        // margin-right: 5px;\r\n        // height: auto;\r\n        display: inline-block;\r\n        right: 0;\r\n        align-self: center;\r\n    }\r\n    \r\n    .about-me div {\r\n        width: 50%;\r\n        // margin-right: 20px;\r\n        // margin-left: 0px;\r\n        // padding: 0;\r\n        // padding: 0 10px;\r\n        padding-right: 37.5px;\r\n        align-self: center;\r\n    }\r\n\r\n    .about-me div p {\r\n        width: 100%;\r\n    }\r\n\r\n    .about-me:last-child{\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    .p5-info{\r\n        height: $p5-info-height;\r\n    }\r\n\r\n    .p5-info input {\r\n        position: absolute;\r\n        top:$header-height+10px;\r\n    }\r\n\r\n    .weblog-post{\r\n        padding: 0 200px;\r\n        text-align: center;\r\n    }\r\n\r\n    .weblog-post p {\r\n        text-align: left;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .footer {\r\n        position: fixed;\r\n        background-color: $secondary-color;\r\n        height: $bottom-height;\r\n    }\r\n\r\n    .footer button, .footer a {\r\n        display: inline-block;\r\n        margin: 5px 15px;\r\n        margin-top: 15px;\r\n    }\r\n}\r\n","@media only screen and (max-width: 768px){\r\n    $header-height:40px;\r\n    $thumbnail-size: 200px;\r\n    $bottom-height: 170px;\r\n\r\n    body{\r\n        //overflow-y: auto;\r\n    }\r\n\r\n    .header {\r\n        text-align: center;\r\n        height:$header-height;\r\n    }\r\n\r\n    .header h1{\r\n        font-size: 20px;\r\n        margin: 0px;\r\n        margin-top: 8px;\r\n        margin-right:10px;\r\n        float: right;\r\n    }\r\n\r\n    .header img {\r\n        height: 30px;\r\n        float: left;\r\n    }\r\n\r\n    .popup{\r\n        display:none;\r\n        top: $header-height;\r\n        height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .navigator img {\r\n        display: none;\r\n    }\r\n\r\n    .navigator button{\r\n        right:5px;\r\n    }\r\n\r\n    .project-thumbnail{\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n        margin: 10px;\r\n        box-shadow:inset 0 0 $thumbnail-size 50px black, 10px 10px 1px 0px $tertiary-color;\r\n    }\r\n\r\n    \r\n    .post-thumbnail {\r\n        height:$thumbnail-size;\r\n        width: $thumbnail-size;\r\n        margin: 10px;\r\n        box-shadow:inset 0 0 $thumbnail-size 50px black, 10px 10px 1px 0px $tertiary-color;\r\n    }\r\n\r\n    .project-thumbnail p {\r\n        display:none;\r\n    }\r\n\r\n    .project-thumbnail h2 {\r\n        padding: 0px 40px;\r\n    }\r\n\r\n    .project-list {\r\n        margin-top:2px;\r\n        height: calc(100vh - #{$search-height} - #{$header-height} - #{$bottom-height});\r\n        padding: 0px 10px;\r\n    }\r\n\r\n    .project-page{\r\n        height: calc(100vh - #{$header-height} - #{$bottom-height});\r\n    }\r\n\r\n    .share-icon {\r\n        display: none;\r\n    }\r\n\r\n    .contact-container {\r\n        width: calc(100vw - 100px);\r\n        text-align: center;\r\n        padding: 30px 50px;\r\n    }\r\n\r\n    .contact-left {\r\n        width: calc(100% - 60px);\r\n        text-align: center;\r\n        float: none;\r\n        padding: 0 30px;\r\n        margin-left: -25px;\r\n    }\r\n    \r\n    .contact-right {\r\n        float: none;\r\n        left: 0px;\r\n        text-align: center;\r\n        position: relative;\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    \r\n    .contact-right h1{\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .contact-thumbnail div{\r\n        font-size: 20px;\r\n        margin-top: 10px;\r\n        // float: right;\r\n    }\r\n    \r\n\r\n    .about{\r\n        margin: 0 20px;\r\n    }\r\n\r\n    .about-me {\r\n        padding: 10px;\r\n    }\r\n\r\n    .about-me img{\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-top: 10px;\r\n        width: 50%;\r\n    }\r\n    \r\n    .about-me p {\r\n        display: block;\r\n    }\r\n\r\n    .about-me div{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .p5-info input {\r\n        position: relative;\r\n        top:0;\r\n    }\r\n\r\n    .weblog-post{\r\n        padding: 0 10px;\r\n        text-align: center;\r\n    }\r\n\r\n    .weblog-post p {\r\n        text-align: left;\r\n        line-height: 20px;\r\n    }\r\n\r\n    .footer {\r\n        height:$bottom-height;\r\n        background-color: none;\r\n         position: relative;\r\n        //position: fixed;\r\n    }\r\n\r\n    .footer button, .footer a {\r\n        display: block;\r\n        margin: 20px auto;\r\n    }\r\n\r\n    .copyright {\r\n        margin-bottom:15px;\r\n    }\r\n\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./src/pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./src/pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./src/pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){
	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	if (!Prism.plugins.toolbar) {
		console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');

		return;
	}

	var ClipboardJS = window.ClipboardJS || undefined;

	if (!ClipboardJS && "function" === 'function') {
		ClipboardJS = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
	}

	var callbacks = [];

	if (!ClipboardJS) {
		var script = document.createElement('script');
		var head = document.querySelector('head');

		script.onload = function() {
			ClipboardJS = window.ClipboardJS;

			if (ClipboardJS) {
				while (callbacks.length) {
					callbacks.pop()();
				}
			}
		};

		script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js';
		head.appendChild(script);
	}

	Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
		var linkCopy = document.createElement('button');
		linkCopy.textContent = 'Copy';

		if (!ClipboardJS) {
			callbacks.push(registerClipboard);
		} else {
			registerClipboard();
		}

		return linkCopy;

		function registerClipboard() {
			var clip = new ClipboardJS(linkCopy, {
				'text': function () {
					return env.code;
				}
			});

			clip.on('success', function() {
				linkCopy.textContent = 'Copied!';

				resetText();
			});
			clip.on('error', function () {
				linkCopy.textContent = 'Press Ctrl+C to copy';

				resetText();
			});
		}

		function resetText() {
			setTimeout(function () {
				linkCopy.textContent = 'Copy';
			}, 5000);
		}
	});
})();


/***/ }),

/***/ "./node_modules/prismjs/plugins/download-button/prism-download-button.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/download-button/prism-download-button.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
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

})();


/***/ }),

/***/ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!**************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-line-numbers.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-line-numbers.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-line-numbers.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	/**
	 * Plugin name which is used as a class name for <pre> which is activating the plugin
	 * @type {String}
	 */
	var PLUGIN_NAME = 'line-numbers';

	/**
	 * Regular expression used for determining line breaks
	 * @type {RegExp}
	 */
	var NEW_LINE_EXP = /\n(?!$)/g;

	/**
	 * Resizes line numbers spans according to height of line of code
	 * @param {Element} element <pre> element
	 */
	var _resizeElement = function (element) {
		var codeStyles = getStyles(element);
		var whiteSpace = codeStyles['white-space'];

		if (whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line') {
			var codeElement = element.querySelector('code');
			var lineNumbersWrapper = element.querySelector('.line-numbers-rows');
			var lineNumberSizer = element.querySelector('.line-numbers-sizer');
			var codeLines = codeElement.textContent.split(NEW_LINE_EXP);

			if (!lineNumberSizer) {
				lineNumberSizer = document.createElement('span');
				lineNumberSizer.className = 'line-numbers-sizer';

				codeElement.appendChild(lineNumberSizer);
			}

			lineNumberSizer.style.display = 'block';

			codeLines.forEach(function (line, lineNumber) {
				lineNumberSizer.textContent = line || '\n';
				var lineSize = lineNumberSizer.getBoundingClientRect().height;
				lineNumbersWrapper.children[lineNumber].style.height = lineSize + 'px';
			});

			lineNumberSizer.textContent = '';
			lineNumberSizer.style.display = 'none';
		}
	};

	/**
	 * Returns style declarations for the element
	 * @param {Element} element
	 */
	var getStyles = function (element) {
		if (!element) {
			return null;
		}

		return window.getComputedStyle ? getComputedStyle(element) : (element.currentStyle || null);
	};

	window.addEventListener('resize', function () {
		Array.prototype.forEach.call(document.querySelectorAll('pre.' + PLUGIN_NAME), _resizeElement);
	});

	Prism.hooks.add('complete', function (env) {
		if (!env.code) {
			return;
		}

		var code = env.element;
		var pre = code.parentNode;

		// works only for <code> wrapped inside <pre> (not inline)
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		// Abort if line numbers already exists
		if (code.querySelector('.line-numbers-rows')) {
			return;
		}

		var addLineNumbers = false;
		var lineNumbersRegex = /(?:^|\s)line-numbers(?:\s|$)/;

		for (var element = code; element; element = element.parentNode) {
			if (lineNumbersRegex.test(element.className)) {
				addLineNumbers = true;
				break;
			}
		}

		// only add line numbers if <code> or one of its ancestors has the `line-numbers` class
		if (!addLineNumbers) {
			return;
		}

		// Remove the class 'line-numbers' from the <code>
		code.className = code.className.replace(lineNumbersRegex, ' ');
		// Add the class 'line-numbers' to the <pre>
		if (!lineNumbersRegex.test(pre.className)) {
			pre.className += ' line-numbers';
		}

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

		_resizeElement(pre);

		Prism.hooks.run('line-numbers', env);
	});

	Prism.hooks.add('line-numbers', function (env) {
		env.plugins = env.plugins || {};
		env.plugins.lineNumbers = true;
	});

	/**
	 * Global exports
	 */
	Prism.plugins.lineNumbers = {
		/**
		 * Get node for provided line number
		 * @param {Element} element pre element
		 * @param {Number} number line number
		 * @return {Element|undefined}
		 */
		getLine: function (element, number) {
			if (element.tagName !== 'PRE' || !element.classList.contains(PLUGIN_NAME)) {
				return;
			}

			var lineNumberRows = element.querySelector('.line-numbers-rows');
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
		}
	};

}());


/***/ }),

/***/ "./node_modules/prismjs/plugins/match-braces/prism-match-braces.css":
/*!**************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/match-braces/prism-match-braces.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-match-braces.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/match-braces/prism-match-braces.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-match-braces.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/match-braces/prism-match-braces.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-match-braces.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/match-braces/prism-match-braces.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/prismjs/plugins/match-braces/prism-match-braces.js":
/*!*************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/match-braces/prism-match-braces.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	var MATCH_ALL_CLASS = /(?:^|\s)match-braces(?:\s|$)/;

	var BRACE_HOVER_CLASS = /(?:^|\s)brace-hover(?:\s|$)/;
	var BRACE_SELECTED_CLASS = /(?:^|\s)brace-selected(?:\s|$)/;

	var NO_BRACE_HOVER_CLASS = /(?:^|\s)no-brace-hover(?:\s|$)/;
	var NO_BRACE_SELECT_CLASS = /(?:^|\s)no-brace-select(?:\s|$)/;

	var PARTNER = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	var NAMES = {
		'(': 'brace-round',
		'[': 'brace-square',
		'{': 'brace-curly',
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
		for (var parent = this.parentElement; parent; parent = parent.parentElement) {
			if (NO_BRACE_HOVER_CLASS.test(parent.className)) {
				return;
			}
		}

		[this, getPartnerBrace(this)].forEach(function (ele) {
			ele.className = (ele.className.replace(BRACE_HOVER_CLASS, ' ') + ' brace-hover').replace(/\s+/g, ' ');
		});
	}
	/**
	 * @this {HTMLElement}
	 */
	function leaveBrace() {
		[this, getPartnerBrace(this)].forEach(function (ele) {
			ele.className = ele.className.replace(BRACE_HOVER_CLASS, ' ');
		});
	}
	/**
	 * @this {HTMLElement}
	 */
	function clickBrace() {
		for (var parent = this.parentElement; parent; parent = parent.parentElement) {
			if (NO_BRACE_SELECT_CLASS.test(parent.className)) {
				return;
			}
		}

		[this, getPartnerBrace(this)].forEach(function (ele) {
			ele.className = (ele.className.replace(BRACE_SELECTED_CLASS, ' ') + ' brace-selected').replace(/\s+/g, ' ');
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
		for (var ele = code; ele; ele = ele.parentElement) {
			if (MATCH_ALL_CLASS.test(ele.className)) {
				toMatch.push('(', '[', '{');
				break;
			}
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
				Array.prototype.slice.call(code.querySelectorAll('.brace-selected')).forEach(function (element) {
					element.className = element.className.replace(BRACE_SELECTED_CLASS, ' ');
				});
			});
			Object.defineProperty(pre, '__listenerAdded', { value: true });
		}

		/** @type {HTMLSpanElement[]} */
		var punctuation = Array.prototype.slice.call(code.querySelectorAll('span.token.punctuation'));

		/** @type {{ index: number, open: boolean, element: HTMLElement }[]} */
		var allBraces = [];

		toMatch.forEach(function (open) {
			var close = PARTNER[open];
			var name = NAMES[open];

			/** @type {[number, number][]} */
			var pairs = [];
			/** @type {number[]} */
			var openStack = [];

			for (var i = 0; i < punctuation.length; i++) {
				var element = punctuation[i];
				if (element.childElementCount == 0) {
					var text = element.textContent;
					if (text === open) {
						allBraces.push({ index: i, open: true, element: element });
						element.className += ' ' + name;
						element.className += ' brace-open';
						openStack.push(i);
					} else if (text === close) {
						allBraces.push({ index: i, open: false, element: element });
						element.className += ' ' + name;
						element.className += ' brace-close';
						if (openStack.length) {
							pairs.push([i, openStack.pop()]);
						}
					}
				}
			}

			pairs.forEach(function (pair) {
				var pairId = 'pair-' + (pairIdCounter++) + '-';

				var openEle = punctuation[pair[0]];
				var closeEle = punctuation[pair[1]];

				openEle.id = pairId + 'open';
				closeEle.id = pairId + 'close';

				[openEle, closeEle].forEach(function (ele) {
					ele.addEventListener('mouseenter', hoverBrace);
					ele.addEventListener('mouseleave', leaveBrace);
					ele.addEventListener('click', clickBrace);
				});
			});
		});

		var level = 0;
		allBraces.sort(function (a, b) { return a.index - b.index; });
		allBraces.forEach(function (brace) {
			if (brace.open) {
				brace.element.className += ' brace-level-' + (level % LEVEL_WARP + 1);
				level++;
			} else {
				level = Math.max(0, level - 1);
				brace.element.className += ' brace-level-' + (level % LEVEL_WARP + 1);
			}
		});

	});

}());


/***/ }),

/***/ "./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function() {

var assign = Object.assign || function (obj1, obj2) {
	for (var name in obj2) {
		if (obj2.hasOwnProperty(name))
			obj1[name] = obj2[name];
	}
	return obj1;
}

function NormalizeWhitespace(defaults) {
	this.defaults = assign({}, defaults);
}

function toCamelCase(value) {
	return value.replace(/-(\w)/g, function(match, firstChar) {
		return firstChar.toUpperCase();
	});
}

function tabLen(str) {
	var res = 0;
	for (var i = 0; i < str.length; ++i) {
		if (str.charCodeAt(i) == '\t'.charCodeAt(0))
			res += 3;
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
			if (name !== "normalize" && methodName !== 'setDefaults' &&
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

		if (!indents || !indents[0].length)
			return input;

		indents.sort(function(a, b){return a.length - b.length; });

		if (!indents[0].length)
			return input;

		return input.replace(RegExp('^' + indents[0], 'gm'), '');
	},
	indent: function (input, tabs) {
		return input.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++tabs).join('\t') + '$&');
	},
	breakLines: function (input, characters) {
		characters = (characters === true) ? 80 : characters|0 || 80;

		var lines = input.split('\n');
		for (var i = 0; i < lines.length; ++i) {
			if (tabLen(lines[i]) <= characters)
				continue;

			var line = lines[i].split(/(\s+)/g),
			    len = 0;

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

// Exit if prism is not loaded
if (typeof Prism === 'undefined') {
	return;
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

	// Simple mode if there is no env.element
	if ((!env.element || !env.element.parentNode) && env.code) {
		env.code = Normalizer.normalize(env.code, env.settings);
		return;
	}

	// Normal mode
	var pre = env.element.parentNode;
	var clsReg = /(?:^|\s)no-whitespace-normalization(?:\s|$)/;
	if (!env.code || !pre || pre.nodeName.toLowerCase() !== 'pre' ||
			clsReg.test(pre.className) || clsReg.test(env.element.className))
		return;

	var children = pre.childNodes,
	    before = '',
	    after = '',
	    codeFound = false;

	// Move surrounding whitespace from the <pre> tag into the <code> tag
	for (var i = 0; i < children.length; ++i) {
		var node = children[i];

		if (node == env.element) {
			codeFound = true;
		} else if (node.nodeName === "#text") {
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
/*! no static exports found */
/***/ (function(module, exports) {

(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	if (!Prism.plugins.toolbar) {
		console.warn('Show Languages plugin loaded before Toolbar plugin.');

		return;
	}

	// The languages map is built automatically with gulp
	var Languages = /*languages_placeholder[*/{
		"html": "HTML",
		"xml": "XML",
		"svg": "SVG",
		"mathml": "MathML",
		"css": "CSS",
		"clike": "C-like",
		"js": "JavaScript",
		"abap": "ABAP",
		"abnf": "Augmented Backus–Naur form",
		"antlr4": "ANTLR4",
		"g4": "ANTLR4",
		"apacheconf": "Apache Configuration",
		"apl": "APL",
		"aql": "AQL",
		"arff": "ARFF",
		"asciidoc": "AsciiDoc",
		"adoc": "AsciiDoc",
		"asm6502": "6502 Assembly",
		"aspnet": "ASP.NET (C#)",
		"autohotkey": "AutoHotkey",
		"autoit": "AutoIt",
		"shell": "Bash",
		"basic": "BASIC",
		"bbcode": "BBcode",
		"shortcode": "BBcode",
		"bnf": "Backus–Naur form",
		"rbnf": "Routing Backus–Naur form",
		"conc": "Concurnas",
		"csharp": "C#",
		"cs": "C#",
		"dotnet": "C#",
		"cpp": "C++",
		"cil": "CIL",
		"coffee": "CoffeeScript",
		"cmake": "CMake",
		"csp": "Content-Security-Policy",
		"css-extras": "CSS Extras",
		"dax": "DAX",
		"django": "Django/Jinja2",
		"jinja2": "Django/Jinja2",
		"dns-zone-file": "DNS zone file",
		"dns-zone": "DNS zone file",
		"dockerfile": "Docker",
		"ebnf": "Extended Backus–Naur form",
		"ejs": "EJS",
		"etlua": "Embedded Lua templating",
		"erb": "ERB",
		"excel-formula": "Excel Formula",
		"xlsx": "Excel Formula",
		"xls": "Excel Formula",
		"fsharp": "F#",
		"firestore-security-rules": "Firestore security rules",
		"ftl": "FreeMarker Template Language",
		"gcode": "G-code",
		"gdscript": "GDScript",
		"gedcom": "GEDCOM",
		"glsl": "GLSL",
		"gml": "GameMaker Language",
		"gamemakerlanguage": "GameMaker Language",
		"graphql": "GraphQL",
		"hs": "Haskell",
		"hcl": "HCL",
		"http": "HTTP",
		"hpkp": "HTTP Public-Key-Pins",
		"hsts": "HTTP Strict-Transport-Security",
		"ichigojam": "IchigoJam",
		"inform7": "Inform 7",
		"javadoc": "JavaDoc",
		"javadoclike": "JavaDoc-like",
		"javastacktrace": "Java stack trace",
		"jq": "JQ",
		"jsdoc": "JSDoc",
		"js-extras": "JS Extras",
		"js-templates": "JS Templates",
		"json": "JSON",
		"jsonp": "JSONP",
		"json5": "JSON5",
		"latex": "LaTeX",
		"tex": "TeX",
		"context": "ConTeXt",
		"lilypond": "LilyPond",
		"ly": "LilyPond",
		"emacs": "Lisp",
		"elisp": "Lisp",
		"emacs-lisp": "Lisp",
		"llvm": "LLVM IR",
		"lolcode": "LOLCODE",
		"md": "Markdown",
		"markup-templating": "Markup templating",
		"matlab": "MATLAB",
		"mel": "MEL",
		"moon": "MoonScript",
		"n1ql": "N1QL",
		"n4js": "N4JS",
		"n4jsd": "N4JS",
		"nand2tetris-hdl": "Nand To Tetris HDL",
		"nasm": "NASM",
		"neon": "NEON",
		"nginx": "nginx",
		"nsis": "NSIS",
		"objectivec": "Objective-C",
		"ocaml": "OCaml",
		"opencl": "OpenCL",
		"parigp": "PARI/GP",
		"objectpascal": "Object Pascal",
		"pcaxis": "PC-Axis",
		"px": "PC-Axis",
		"php": "PHP",
		"phpdoc": "PHPDoc",
		"php-extras": "PHP Extras",
		"plsql": "PL/SQL",
		"powerquery": "PowerQuery",
		"pq": "PowerQuery",
		"mscript": "PowerQuery",
		"powershell": "PowerShell",
		"properties": ".properties",
		"protobuf": "Protocol Buffers",
		"py": "Python",
		"q": "Q (kdb+ database)",
		"qml": "QML",
		"jsx": "React JSX",
		"tsx": "React TSX",
		"renpy": "Ren'py",
		"rest": "reST (reStructuredText)",
		"robotframework": "Robot Framework",
		"robot": "Robot Framework",
		"rb": "Ruby",
		"sas": "SAS",
		"sass": "Sass (Sass)",
		"scss": "Sass (Scss)",
		"shell-session": "Shell session",
		"solidity": "Solidity (Ethereum)",
		"solution-file": "Solution file",
		"sln": "Solution file",
		"soy": "Soy (Closure Template)",
		"sparql": "SPARQL",
		"rq": "SPARQL",
		"splunk-spl": "Splunk SPL",
		"sqf": "SQF: Status Quo Function (Arma 3)",
		"sql": "SQL",
		"tap": "TAP",
		"toml": "TOML",
		"tt2": "Template Toolkit 2",
		"trig": "TriG",
		"ts": "TypeScript",
		"t4-cs": "T4 Text Templates (C#)",
		"t4": "T4 Text Templates (C#)",
		"t4-vb": "T4 Text Templates (VB)",
		"t4-templating": "T4 templating",
		"vbnet": "VB.Net",
		"vhdl": "VHDL",
		"vim": "vim",
		"visual-basic": "Visual Basic",
		"vb": "Visual Basic",
		"wasm": "WebAssembly",
		"wiki": "Wiki markup",
		"xeoracube": "XeoraCube",
		"xojo": "Xojo (REALbasic)",
		"xquery": "XQuery",
		"yaml": "YAML",
		"yml": "YAML"
	}/*]*/;

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

})();


/***/ }),

/***/ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.css":
/*!****************************************************************!*\
  !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-toolbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-toolbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-toolbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){
	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	var callbacks = [];
	var map = {};
	var noop = function() {};

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

		elementCallbacks.forEach(function(callback) {
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

	registerButton('label', function(env) {
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		if (!pre.hasAttribute('data-label')) {
			return;
		}

		var element, template;
		var text = pre.getAttribute('data-label');
		try {
			// Any normal text will blow up this selector.
			template = document.querySelector('template#' + text);
		} catch (e) {}

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
})();


/***/ }),

/***/ "./node_modules/prismjs/prism.js":
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
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

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

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
			if ('currentScript' in document) {
				return document.currentScript;
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

				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
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
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
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
			_.languages.DFS(_.languages, function(key, value) {
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

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			container: container,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

		_.hooks.run('before-all-elements-highlight', env);

		for (var i = 0, element; element = env.elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentNode;
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

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

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

	tokenize: function(text, grammar) {
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

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length|0;
	this.greedy = !!greedy;
}

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
 * @param {string} text
 * @param {LinkedList<string | Token>} tokenList
 * @param {any} grammar
 * @param {LinkedListNode<string | Token>} startNode
 * @param {number} startPos
 * @param {boolean} [oneshot=false]
 * @param {string} [target]
 */
function matchGrammar(text, tokenList, grammar, startNode, startPos, oneshot, target) {
	for (var token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
			continue;
		}

		var patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];

		for (var j = 0; j < patterns.length; ++j) {
			if (target && target == token + ',' + j) {
				return;
			}

			var pattern = patterns[j],
				inside = pattern.inside,
				lookbehind = !!pattern.lookbehind,
				greedy = !!pattern.greedy,
				lookbehindLength = 0,
				alias = pattern.alias;

			if (greedy && !pattern.pattern.global) {
				// Without the global flag, lastIndex won't work
				var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
				pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
			}

			pattern = pattern.pattern || pattern;

			for ( // iterate the token list and keep track of the current token/string position
				var currentNode = startNode.next, pos = startPos;
				currentNode !== tokenList.tail;
				pos += currentNode.value.length, currentNode = currentNode.next
			) {

				var str = currentNode.value;

				if (tokenList.length > text.length) {
					// Something went terribly wrong, ABORT, ABORT!
					return;
				}

				if (str instanceof Token) {
					continue;
				}

				var removeCount = 1; // this is the to parameter of removeBetween

				if (greedy && currentNode != tokenList.tail.prev) {
					pattern.lastIndex = pos;
					var match = pattern.exec(text);
					if (!match) {
						break;
					}

					var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
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
						k !== tokenList.tail && (p < to || (typeof k.value === 'string' && !k.prev.value.greedy));
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
					pattern.lastIndex = 0;

					var match = pattern.exec(str);
				}

				if (!match) {
					if (oneshot) {
						break;
					}

					continue;
				}

				if (lookbehind) {
					lookbehindLength = match[1] ? match[1].length : 0;
				}

				var from = match.index + lookbehindLength,
					match = match[0].slice(lookbehindLength),
					to = from + match.length,
					before = str.slice(0, from),
					after = str.slice(to);

				var removeFrom = currentNode.prev;

				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}

				removeRange(tokenList, removeFrom, removeCount);

				var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
				currentNode = addAfter(tokenList, removeFrom, wrapped);

				if (after) {
					addAfter(tokenList, currentNode, after);
				}


				if (removeCount > 1)
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, true, token + ',' + j);

				if (oneshot)
					break;
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
 */

/**
 * @template T
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
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

//Get current script and highlight
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

})(_self);

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
		greedy: true
	},
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
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
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

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
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				}
				// See rest below
			}
		},
		'url': {
			pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, markup.tag);
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
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
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
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
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
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
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	/**
	 * @param {Element} [container=document]
	 */
	self.Prism.fileHighlight = function(container) {
		container = container || document;

		var Extensions = {
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

		Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			// ignore if already loaded
			if (pre.hasAttribute('data-src-loaded')) {
				return;
			}

			// load current
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-([\w-]+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
						// mark as loaded
						pre.setAttribute('data-src-loaded', '');
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});
	};

	document.addEventListener('DOMContentLoaded', function () {
		// execute inside handler, for dropping Event as argument
		self.Prism.fileHighlight();
	});

})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/prismjs/themes/prism-tomorrow.css":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/themes/prism-tomorrow.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-tomorrow.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/themes/prism-tomorrow.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-tomorrow.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/themes/prism-tomorrow.css",
      function () {
        var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./prism-tomorrow.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/prismjs/themes/prism-tomorrow.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./public/assets/img/music-banner.jpg":
/*!********************************************!*\
  !*** ./public/assets/img/music-banner.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/music-banner.d532f2f726b2a0030e7f7e57d5f8f9a4.jpg";

/***/ }),

/***/ "./src/assets/css/index.scss":
/*!***********************************!*\
  !*** ./src/assets/css/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/css/index.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/css/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/css/index.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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


var _this = undefined,
    _jsxFileName = "C:\\Users\\digit\\Desktop\\Code\\Websites\\CodeDigital.github.io\\src\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/themes/prism-funky.css'



 // class="line-numbers"


 // class="match-braces"





 // Prism.highlightAll();
// import App from 'next/app'

var MyApp = function MyApp(props) {
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    prismjs__WEBPACK_IMPORTED_MODULE_3___default.a.highlightAll();
  }, []);
  var Component = props.Component,
      pageProps = props.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! C:\Users\digit\Desktop\Code\Websites\CodeDigital.github.io\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map