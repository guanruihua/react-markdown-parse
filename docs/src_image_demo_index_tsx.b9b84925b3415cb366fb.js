"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_markdown_parse"] = self["webpackChunkreact_markdown_parse"] || []).push([["src_image_demo_index_tsx"],{

/***/ "./src/image/demo/index.tsx":
/*!**********************************!*\
  !*** ./src/image/demo/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@18.2.0@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var unit_testing_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unit-testing-react */ \"./node_modules/_unit-testing-react@0.2.1@unit-testing-react/dist/index.umd.js\");\n/* harmony import */ var unit_testing_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unit_testing_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ \"./src/image/index.tsx\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(unit_testing_react__WEBPACK_IMPORTED_MODULE_1__.Container, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.MImage, null, `![test1](./img/pkg.png)`), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.MImage, null, `![test2](/img/pkg.png)`), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.MImage, null, `![test3](./demo/img/pkg.png)`), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.MImage, null, `![test4](/demo/img/pkg.png)`), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.MImage, null, `![test5](./image/demo/img/pkg.png)`), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.MImage, null, `![test6](/image/demo/img/pkg.png)`));\n}\n\n\n//# sourceURL=webpack://react-markdown-parse/./src/image/demo/index.tsx?");

/***/ }),

/***/ "./src/image/index.tsx":
/*!*****************************!*\
  !*** ./src/image/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MImage\": () => (/* binding */ MImage),\n/* harmony export */   \"isEffectImageUrl\": () => (/* binding */ isEffectImageUrl)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@18.2.0@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line */ \"./src/line/index.tsx\");\n\n\nfunction isEffectImageUrl(url) {\n  return new Promise((resolve) => {\n    const img = new Image();\n    img.addEventListener(\"load\", () => {\n      resolve(true);\n    });\n    img.addEventListener(\"error\", () => {\n      resolve(false);\n    });\n    img.src = url;\n  });\n}\nfunction MImage(props) {\n  const { children } = props;\n  if (/^!\\[.*\\]\\(.*\\)$/.test(children)) {\n    const [, alt, url] = /^!\\[(.{0,})\\]\\((.{0,})\\)$/.exec(children) || [\"\", \"\", \"\"];\n    console.log(url);\n    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { alt, src: url });\n  }\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_line__WEBPACK_IMPORTED_MODULE_1__.LineFormat, null, children);\n}\n\n\n//# sourceURL=webpack://react-markdown-parse/./src/image/index.tsx?");

/***/ }),

/***/ "./src/line/index.tsx":
/*!****************************!*\
  !*** ./src/line/index.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LineFormat\": () => (/* binding */ LineFormat)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@18.2.0@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction LineFormat(props) {\n  const { children } = props;\n  const renderContent = children;\n  if (props.emptyContainer === true) {\n    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, renderContent);\n  }\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"line\" }, renderContent);\n}\n\n\n//# sourceURL=webpack://react-markdown-parse/./src/line/index.tsx?");

/***/ })

}]);