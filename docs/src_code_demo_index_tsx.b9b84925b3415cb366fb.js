"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_markdown_parse"] = self["webpackChunkreact_markdown_parse"] || []).push([["src_code_demo_index_tsx"],{

/***/ "./src/code/demo/index.tsx":
/*!*********************************!*\
  !*** ./src/code/demo/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@18.2.0@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/code/index.tsx\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.Code, { lang: \"tsx\" }, `import React from \"react\"\nimport { HighLighter } from './high'\n\nexport default function () {\n\treturn <div style={{ color: '#fff' }}>\n\t\t<HighLighter />\n\t</div>\n}`);\n}\n\n\n//# sourceURL=webpack://react-markdown-parse/./src/code/demo/index.tsx?");

/***/ }),

/***/ "./src/code/index.tsx":
/*!****************************!*\
  !*** ./src/code/index.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Code\": () => (/* binding */ Code)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@18.2.0@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/_react-syntax-highlighter@15.5.0@react-syntax-highlighter/dist/esm/default-highlight.js\");\n/* harmony import */ var react_syntax_highlighter_dist_esm_styles_hljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/hljs */ \"./node_modules/_react-syntax-highlighter@15.5.0@react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark.js\");\n\n\n\nfunction Code(props) {\n  const { children } = props;\n  const content = children.replace(/^\\s+|\\s+$/g, \"\");\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    {\n      showLineNumbers: true,\n      language: props.lang,\n      style: react_syntax_highlighter_dist_esm_styles_hljs__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      wrapLongLines: true,\n      customStyle: { tabSize: 1, lineHeight: 1.5 }\n    },\n    content.replace(/```[a-zA-Z0-9]{0,}\\r?\\n/gi, \"\").replace(\"```\", \"\").replace(/\\r?\\n$/gi, \"\")\n  );\n}\n\n\n//# sourceURL=webpack://react-markdown-parse/./src/code/index.tsx?");

/***/ })

}]);