/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Handlers.js":
/*!*************************!*\
  !*** ./src/Handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Handlers\": () => (/* binding */ Handlers)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.js */ \"./src/templates.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Handlers = /*#__PURE__*/function () {\n  function Handlers() {\n    _classCallCheck(this, Handlers);\n\n    this.isMousedown = false;\n    this.delay = 1000;\n    this.bindEvents();\n  }\n\n  _createClass(Handlers, [{\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      this.changeValue = this.changeValue.bind(this);\n      this.handleClick = this.handleClick.bind(this);\n      this.handleMouseup = this.handleMouseup.bind(this);\n      this.handleMousedown = this.handleMousedown.bind(this);\n      this.handleMouseLeave = this.handleMouseLeave.bind(this);\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(event) {\n      var target = event.target;\n\n      if (target.id === 'add-spinbox-button') {\n        this.addSpinbox();\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.on)((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.$$)('.spinbox__button', this.getLastSpinbox()), 'mouseleave', this.handleMouseLeave);\n      } else if (target.className === 'spinbox__button delete') {\n        this.deleteSpinbox(target);\n      }\n    }\n  }, {\n    key: \"changeValue\",\n    value: function changeValue(action, $input) {\n      var _this = this;\n\n      if (!this.isMousedown) {\n        return;\n      }\n\n      if (this.delay > 35) {\n        this.delay /= 1.1;\n      }\n\n      $input.value = parseInt($input.value, 10) + parseInt(action, 10);\n      setTimeout(function () {\n        _this.changeValue(action, $input);\n      }, this.delay);\n    }\n  }, {\n    key: \"handleMouseup\",\n    value: function handleMouseup(event) {\n      var target = event.target;\n\n      if (target.classList.contains('spinbox__button')) {\n        this.isMousedown = false;\n        this.delay = 1000;\n      }\n    }\n  }, {\n    key: \"handleMouseLeave\",\n    value: function handleMouseLeave(event) {\n      var target = event.target;\n\n      if (target.classList.contains('spinbox__button')) {\n        this.isMousedown = false;\n        this.delay = 1000;\n      }\n    }\n  }, {\n    key: \"handleMousedown\",\n    value: function handleMousedown(event) {\n      var target = event.target;\n\n      if (target.classList.contains('spinbox__button')) {\n        var $spinbox = target.closest('.spinbox');\n        var $input = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.$)('input', $spinbox);\n\n        if (target.classList.contains('add')) {\n          this.isMousedown = true;\n          this.changeValue(1, $input);\n        } else if (target.classList.contains('substract')) {\n          this.isMousedown = true;\n          this.changeValue(-1, $input);\n        }\n      }\n    }\n  }, {\n    key: \"calcLastSpinboxIndex\",\n    value: function calcLastSpinboxIndex() {\n      return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.$$)('.spinbox').length - 1;\n    }\n  }, {\n    key: \"getLastSpinbox\",\n    value: function getLastSpinbox() {\n      return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.$$)('.spinbox')[this.calcLastSpinboxIndex()];\n    }\n  }, {\n    key: \"addSpinbox\",\n    value: function addSpinbox() {\n      var lastSpinbox = this.getLastSpinbox();\n\n      if (lastSpinbox) {\n        lastSpinbox.insertAdjacentHTML('afterend', (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.returnSpinboxHTMLTemplate)());\n      } else {\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.$)('#app').insertAdjacentHTML('afterbegin', (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.returnSpinboxHTMLTemplate)());\n      }\n    }\n  }, {\n    key: \"deleteSpinbox\",\n    value: function deleteSpinbox(target) {\n      var $spinbox = target.closest('.spinbox');\n      $spinbox.remove();\n    }\n  }]);\n\n  return Handlers;\n}();\n\n//# sourceURL=webpack://naver-pbl/./src/Handlers.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Handlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handlers.js */ \"./src/Handlers.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates.js */ \"./src/templates.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar SpinboxApp = /*#__PURE__*/function () {\n  function SpinboxApp() {\n    _classCallCheck(this, SpinboxApp);\n\n    this.handlers = new _Handlers_js__WEBPACK_IMPORTED_MODULE_0__.Handlers();\n  }\n\n  _createClass(SpinboxApp, [{\n    key: \"addEvents\",\n    value: function addEvents() {\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.on)((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.$)('#app'), 'click', this.handlers.handleClick);\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.on)((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.$)('#app'), 'mouseup', this.handlers.handleMouseup);\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.on)((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.$)('#app'), 'mousedown', this.handlers.handleMousedown);\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.on)((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.$$)('.spinbox__button', (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.$)('#app')), 'mouseleave', this.handlers.handleMouseLeave);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.$)('#app').insertAdjacentHTML('beforeend', (0,_templates_js__WEBPACK_IMPORTED_MODULE_2__.returnSpinboxHTMLTemplate)());\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.$)('#app').insertAdjacentHTML('beforeend', (0,_templates_js__WEBPACK_IMPORTED_MODULE_2__.returnAddSpinboxButtonHTMLTemplate)());\n    }\n  }]);\n\n  return SpinboxApp;\n}();\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var spinboxApp = new SpinboxApp();\n  spinboxApp.init();\n  spinboxApp.addEvents();\n});\n\n//# sourceURL=webpack://naver-pbl/./src/app.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$),\n/* harmony export */   \"on\": () => (/* binding */ on)\n/* harmony export */ });\nfunction $(selector) {\n  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return scope.querySelector(selector);\n}\nfunction $$(selector) {\n  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return scope.querySelectorAll(selector);\n}\nfunction on(target, eventName, handler) {\n  if (target.length) {\n    target.forEach(function (node) {\n      node.addEventListener(eventName, handler);\n    });\n    return;\n  }\n\n  return target.addEventListener(eventName, handler);\n}\n\n//# sourceURL=webpack://naver-pbl/./src/helpers.js?");

/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"returnSpinboxHTMLTemplate\": () => (/* binding */ returnSpinboxHTMLTemplate),\n/* harmony export */   \"returnAddSpinboxButtonHTMLTemplate\": () => (/* binding */ returnAddSpinboxButtonHTMLTemplate)\n/* harmony export */ });\nfunction returnSpinboxHTMLTemplate() {\n  return \"\\n      <div class='spinbox'>\\n        <input type='number' value='0' />\\n        <button class='spinbox__button add'>\\n          +\\n        </button>\\n        <button class='spinbox__button substract'>\\n          -\\n        </button>\\n        <button class='spinbox__button delete'>\\n          \\uC2A4\\uD540\\uBC15\\uC2A4 \\uC0AD\\uC81C\\uD558\\uAE30\\n        </button>\\n      </div>\\n  \";\n}\nfunction returnAddSpinboxButtonHTMLTemplate() {\n  return \"\\n    <button id='add-spinbox-button'>\\uC2A4\\uD540\\uBC15\\uC2A4 \\uB808\\uC774\\uC544\\uC6C3 \\uCD94\\uAC00\\uD558\\uAE30</button>\\n  \";\n}\n\n//# sourceURL=webpack://naver-pbl/./src/templates.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;