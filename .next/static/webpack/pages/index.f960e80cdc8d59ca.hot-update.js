"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// Custom Components\n\nvar _this = undefined;\nvar Home = function(param) {\n    var posts = param.posts;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"container mx-auto px-10 mb-8\",\n        __source: {\n            fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"CogBlog\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"grid grid-cols-1 lg:grid-cols-12 gap-12\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"lg:col-span-8 col-span-1\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: posts.map(function(post) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.PostCard, {\n                                post: post,\n                                __source: {\n                                    fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            }, post.title);\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"lg:col-span-4 col-span-1\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"lg:sticky relative top-8\",\n                            __source: {\n                                fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.PostWidget, {\n                                    categories: posts.node,\n                                    __source: {\n                                        fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Categories, {\n                                    __source: {\n                                        fileName: \"/Users/edisonmasis/react-apps/bloggg/pages/index.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNEI7QUFJNUIsRUFBb0I7QUFDNEM7O0FBSWhFLEdBQUssQ0FBQ0ksSUFBSSxHQUFtQyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7O0lBQ25ELE1BQU0sdUVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQThCOzs7Ozs7OztrRkFDMUNQLGtEQUFJOzs7Ozs7Ozt5RkFDRlEsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFPOzt5RkFDYkMsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQWE7d0JBQUNDLE9BQU8sRUFBQyxDQUE4Qjs7Ozs7Ozs7eUZBQzlEQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7a0ZBRXJDUixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBeUM7Ozs7Ozs7O3lGQUNyREQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQTBCOzs7Ozs7O2tDQUN0Q0YsS0FBSyxDQUFDVSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFlOzBDQUN6QixNQUFNLHdEQUFMZixpREFBUTtnQ0FBQ2UsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7OytCQUFPQSxJQUFJLENBQUNSLEtBQUs7Ozt5RkFHeENGLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUEwQjs7Ozs7Ozt3R0FDdENELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUEwQjs7Ozs7Ozs7cUdBQ3RDSixtREFBVTtvQ0FBQ2MsVUFBVSxFQUFFWixLQUFLLENBQUNhLElBQUk7Ozs7Ozs7O3FHQUNqQ2hCLG1EQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUFNdkIsQ0FBQztLQXZCS0UsSUFBSTs7QUFrQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0IE1vZHVsZXNcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG4vL1R5cGVzXG5pbXBvcnQgeyBQb3N0c1R5cGUgfSBmcm9tIFwiLi4vVHlwZURlZnMvUG9zdHNcIjtcbi8vIEN1c3RvbSBDb21wb25lbnRzXG5pbXBvcnQgeyBQb3N0Q2FyZCwgQ2F0ZWdvcmllcywgUG9zdFdpZGdldCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG4vLyBEYXRhXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZTx7cG9zdHM6IFBvc3RzVHlwZVtdfT4gPSAoeyBwb3N0cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0xMCBtYi04XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvZ0Jsb2c8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMTIgZ2FwLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tOCBjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogUG9zdHNUeXBlKSA9PiAoXG4gICAgICAgICAgICA8UG9zdENhcmQgcG9zdD17cG9zdH0ga2V5PXtwb3N0LnRpdGxlfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi00IGNvbC1zcGFuLTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnN0aWNreSByZWxhdGl2ZSB0b3AtOFwiPlxuICAgICAgICAgICAgPFBvc3RXaWRnZXQgY2F0ZWdvcmllcz17cG9zdHMubm9kZX0vPlxuICAgICAgICAgICAgPENhdGVnb3JpZXMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpOiBQcm9taXNlPHsgcHJvcHM6IHsgcG9zdHM6IFBvc3RzVHlwZVtdIH0gfT4ge1xuICBjb25zdCBwb3N0cyA9IChhd2FpdCBnZXRQb3N0cygpKSB8fCBbXTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiSGVhZCIsIlBvc3RDYXJkIiwiQ2F0ZWdvcmllcyIsIlBvc3RXaWRnZXQiLCJIb21lIiwicG9zdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFwIiwicG9zdCIsImNhdGVnb3JpZXMiLCJub2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});