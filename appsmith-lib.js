/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["appsmith-lib"] = factory();
	else
		root["appsmith-lib"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// index.js\r\n\r\n// Importe as funções dos arquivos utils\r\nconst { formatDate } = __webpack_require__(/*! ./utils/dateUtils */ \"./src/utils/dateUtils.js\");\r\nconst { toUpperCase } = __webpack_require__(/*! ./utils/stringUtils */ \"./src/utils/stringUtils.js\");\r\n\r\n// Exporte todas as funções para serem utilizadas fora do módulo\r\nmodule.exports = { formatDate, toUpperCase };\r\n\n\n//# sourceURL=webpack://appsmith-lib/./src/index.js?");

/***/ }),

/***/ "./src/utils/dateUtils.js":
/*!********************************!*\
  !*** ./src/utils/dateUtils.js ***!
  \********************************/
/***/ ((module) => {

eval("// utils/dateUtils.js\r\n\r\n/**\r\n * Formata uma data no formato \"dd/mm/yyyy\"\r\n * @param {Date} date A data a ser formatada\r\n * @returns {string} A data formatada no formato \"dd/mm/yyyy\"\r\n */\r\nfunction formatDate(date) {\r\n  const day = String(date.getDate()).padStart(2, '0');\r\n  const month = String(date.getMonth() + 1).padStart(2, '0');\r\n  const year = date.getFullYear();\r\n  return `${day}/${month}/${year}`;\r\n}\r\n\r\n// Exporte a função formatDate para ser utilizada em outros arquivos\r\nmodule.exports = { formatDate };\r\n\n\n//# sourceURL=webpack://appsmith-lib/./src/utils/dateUtils.js?");

/***/ }),

/***/ "./src/utils/stringUtils.js":
/*!**********************************!*\
  !*** ./src/utils/stringUtils.js ***!
  \**********************************/
/***/ ((module) => {

eval("// utils/stringUtils.js\r\n\r\n/**\r\n * Converte uma string para maiúsculas\r\n * @param {string} str A string a ser convertida\r\n * @returns {string} A string convertida para maiúsculas\r\n */\r\nfunction toUpperCase(str) {\r\n  return str.toUpperCase();\r\n}\r\n\r\n// Exporte a função toUpperCase para ser utilizada em outros arquivos\r\nmodule.exports = { toUpperCase };\r\n\n\n//# sourceURL=webpack://appsmith-lib/./src/utils/stringUtils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});