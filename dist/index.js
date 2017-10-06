/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vanilla_lazyload_dist_lazyload_min__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vanilla_lazyload_dist_lazyload_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_vanilla_lazyload_dist_lazyload_min__);


function init_map() {
  var position = new google.maps.LatLng(27.686149, 85.331765);
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 16,
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var marker = new google.maps.Marker({map: map, position: position});
}

window.init_map = init_map;



var myLazyLoad = new __WEBPACK_IMPORTED_MODULE_1__node_modules_vanilla_lazyload_dist_lazyload_min___default.a();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===( false?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e.LazyLoad=t()}(this,function(){"use strict";var e={elements_selector:"img",container:document,threshold:300,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",callback_load:null,callback_error:null,callback_set:null},t=function(e,t){return e.getAttribute("data-"+t)},n=function(e,t,n){return e.setAttribute("data-"+t,n)},r=function(e){return e.filter(function(e){return!t(e,"was-processed")})},s=function(e,t){var n=new e(t),r=new CustomEvent("LazyLoad::Initialized",{detail:{instance:n}});window.dispatchEvent(r)},o=function(e,n){var r=n.data_srcset,s=e.parentElement;if("PICTURE"===s.tagName)for(var o,a=0;o=s.children[a];a+=1)if("SOURCE"===o.tagName){var i=t(o,r);i&&o.setAttribute("srcset",i)}},a=function(e,n){var r=n.data_src,s=n.data_srcset,a=e.tagName,i=t(e,r);if("IMG"===a){o(e,n);var c=t(e,s);return c&&e.setAttribute("srcset",c),void(i&&e.setAttribute("src",i))}"IFRAME"!==a?i&&(e.style.backgroundImage='url("'+i+'")'):i&&e.setAttribute("src",i)},i=!!document.body.classList,c=function(e,t){i?e.classList.add(t):e.className+=(e.className?" ":"")+t},l=function(e,t){i?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},u=function(e,t){e&&e(t)},f=function(e,t,n){e.removeEventListener("load",t),e.removeEventListener("error",n)},d=function(e,t){var n=function n(s){_(s,!0,t),f(e,n,r)},r=function r(s){_(s,!1,t),f(e,n,r)};e.addEventListener("load",n),e.addEventListener("error",r)},_=function(e,t,n){var r=e.target;l(r,n.class_loading),c(r,t?n.class_loaded:n.class_error),u(t?n.callback_load:n.callback_error,r)},v=function(e,t){["IMG","IFRAME"].indexOf(e.tagName)>-1&&(d(e,t),c(e,t.class_loading)),a(e,t),n(e,"was-processed",!0),u(t.callback_set,e)},m=function(t,n){this._settings=_extends({},e,t),this._setObserver(),this.update(n)};m.prototype={_setObserver:function(){var e=this;if("IntersectionObserver"in window){var t=this._settings;this._observer=new IntersectionObserver(function(n){n.forEach(function(n){if(n.intersectionRatio>0){var r=n.target;v(r,t),e._observer.unobserve(r)}}),e._elements=r(e._elements)},{root:t.container===document?null:t.container,rootMargin:t.threshold+"px"})}},update:function(e){var t=this,n=this._settings,s=e||n.container.querySelectorAll(n.elements_selector);this._elements=r(Array.prototype.slice.call(s)),this._observer?this._elements.forEach(function(e){t._observer.observe(e)}):(this._elements.forEach(function(e){v(e,n)}),this._elements=r(this._elements))},destroy:function(){var e=this;this._observer&&(r(this._elements).forEach(function(t){e._observer.unobserve(t)}),this._observer=null),this._elements=null,this._settings=null}};var b=window.lazyLoadOptions;return b&&function(e,t){if(t.length)for(var n,r=0;n=t[r];r+=1)s(e,n);else s(e,t)}(m,b),m});

/***/ })
/******/ ]);