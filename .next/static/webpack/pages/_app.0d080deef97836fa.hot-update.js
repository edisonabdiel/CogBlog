"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/PostCard.tsx":
/*!*********************************!*\
  !*** ./components/PostCard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gi */ \"./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//Next modules\n\n\n// Icons\n\n\nvar _this = undefined;\nvar PostCard = function(param) {\n    var post = param.post;\n    var ref;\n    var data = post === null || post === void 0 ? void 0 : post.node;\n    console.log(data);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"bg-grey-300 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8\",\n        __source: {\n            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"relative overflow-hidden shadow-md pb-80 mb-6\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: (ref = data.featuredImage) === null || ref === void 0 ? void 0 : ref.url,\n                    alt: data.title,\n                    className: \"object-top absolute h-80 w-full object-cover shadow-lg pb-68 mb-6 rounded-lg\",\n                    layout: \"fill\",\n                    __source: {\n                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"transition duration-500 text-center mb-7 cursor-pointer hover:text-purple-400 ease-in-out text-3xl font-light\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/post/\".concat(data.slug),\n                    __source: {\n                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: data.title\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"block lg:flex text-center items-center justify-center mb-8 w-full\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex items-center justify-cnter mb-4 lg:mb-0 w-full lg:w-auto mr-8\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: data.author.photo.url,\n                                alt: data.author.name,\n                                height: 30,\n                                width: 30,\n                                className: \"align-middle rounded-full\",\n                                __source: {\n                                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"inline align-middle text-gray-400 ml-2\",\n                                __source: {\n                                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: data.author.name\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"transition duration-500 font-medium text-gray-400 hover:text-red-500 ease-in-out \",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiSly, {\n                                __source: {\n                                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: moment__WEBPACK_IMPORTED_MODULE_4___default()(data.createdAt).format('  ')\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUlqQyxFQUFjO0FBQ2dCO0FBQ0Y7QUFDNUIsRUFBUTtBQUM4QjtBQUNYOztBQUUzQixHQUFLLENBQUNLLFFBQVEsR0FBcUIsUUFBUSxRQUFNLENBQUM7UUFBWkMsSUFBSSxTQUFKQSxJQUFJO1FBUzNCQyxHQUFrQjtJQVIvQixHQUFLLENBQUNBLElBQUksR0FBY0QsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsSUFBSSxDQUFFRSxJQUFJO0lBRWxDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSTtJQUVoQixNQUFNLHVFQUNISSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUF3RDs7Ozs7Ozs7aUZBQ3BFRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBK0M7Ozs7Ozs7K0ZBQzNEWCxtREFBSztvQkFDSlksR0FBRyxHQUFFTixHQUFrQixHQUFsQkEsSUFBSSxDQUFDTyxhQUFhLGNBQWxCUCxHQUFrQixLQUFsQkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsR0FBa0IsQ0FBRVEsR0FBRztvQkFDNUJDLEdBQUcsRUFBRVQsSUFBSSxDQUFDVSxLQUFLO29CQUNmTCxTQUFTLEVBQUMsQ0FBOEU7b0JBQ3hGTSxNQUFNLEVBQUMsQ0FBTTs7Ozs7Ozs7O2lGQUdoQkMsQ0FBRTtnQkFBQ1AsU0FBUyxFQUFDLENBQStHOzs7Ozs7OytGQUMxSFYsa0RBQUk7b0JBQUNrQixJQUFJLEVBQUcsQ0FBTSxRQUFZLE9BQVZiLElBQUksQ0FBQ2MsSUFBSTs7Ozs7Ozs4QkFDN0JkLElBQUksQ0FBQ1UsS0FBSzs7O2tGQUdaTixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBbUU7Ozs7Ozs7OzBGQUMvRUQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQW9FOzs7Ozs7OztpR0FDaEZYLG1EQUFLO2dDQUNKWSxHQUFHLEVBQUVOLElBQUksQ0FBQ2UsTUFBTSxDQUFDQyxLQUFLLENBQUNSLEdBQUc7Z0NBQzFCQyxHQUFHLEVBQUVULElBQUksQ0FBQ2UsTUFBTSxDQUFDRSxJQUFJO2dDQUNyQkMsTUFBTSxFQUFFLEVBQUU7Z0NBQ1ZDLEtBQUssRUFBRSxFQUFFO2dDQUNUZCxTQUFTLEVBQUMsQ0FBMkI7Ozs7Ozs7O2lHQUV0Q2UsQ0FBQztnQ0FBQ2YsU0FBUyxFQUFDLENBQXdDOzs7Ozs7OzBDQUFFTCxJQUFJLENBQUNlLE1BQU0sQ0FBQ0UsSUFBSTs7OzswRkFFeEViLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFtRjs7Ozs7Ozs7aUdBQy9GVCxpREFBSzs7Ozs7Ozs7aUdBQ0x5QixDQUFJOzs7Ozs7OzBDQUNGeEIsNkNBQU0sQ0FBQ0csSUFBSSxDQUFDc0IsU0FBUyxFQUFFQyxNQUFNLENBQUMsQ0FBSTs7Ozs7Ozs7QUFNL0MsQ0FBQztLQXhDS3pCLFFBQVE7QUEwQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RDYXJkLnRzeD80MDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuLy9UeXBlc1xuaW1wb3J0IHsgUG9zdHNUeXBlIH0gZnJvbSBcIi4uL1R5cGVEZWZzL1Bvc3RzXCI7XG5pbXBvcnQgeyBQb3N0Q2FyZFR5cGUgfSBmcm9tIFwiLi4vVHlwZURlZnMvUG9zdENhcmRcIjtcbi8vTmV4dCBtb2R1bGVzXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIEljb25zXG5pbXBvcnQgeyBHaVNseSB9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmNvbnN0IFBvc3RDYXJkOiBGQzxQb3N0Q2FyZFR5cGU+ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGRhdGE6IFBvc3RzVHlwZSA9IHBvc3Q/Lm5vZGU7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZXktMzAwIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtMCBsZzpwLTggcGItMTIgbWItOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIHBiLTgwIG1iLTZcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtkYXRhLmZlYXR1cmVkSW1hZ2U/LnVybH1cbiAgICAgICAgICBhbHQ9e2RhdGEudGl0bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LXRvcCBhYnNvbHV0ZSBoLTgwIHctZnVsbCBvYmplY3QtY292ZXIgc2hhZG93LWxnIHBiLTY4IG1iLTYgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCB0ZXh0LWNlbnRlciBtYi03IGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcHVycGxlLTQwMCBlYXNlLWluLW91dCB0ZXh0LTN4bCBmb250LWxpZ2h0XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke2RhdGEuc2x1Z31gfT5cbiAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGxnOmZsZXggdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTggdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jbnRlciBtYi00IGxnOm1iLTAgdy1mdWxsIGxnOnctYXV0byBtci04XCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2RhdGEuYXV0aG9yLnBob3RvLnVybH1cbiAgICAgICAgICAgIGFsdD17ZGF0YS5hdXRob3IubmFtZX1cbiAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBhbGlnbi1taWRkbGUgdGV4dC1ncmF5LTQwMCBtbC0yXCI+e2RhdGEuYXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtcmVkLTUwMCBlYXNlLWluLW91dCBcIj5cbiAgICAgICAgICA8R2lTbHkgLz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHttb21lbnQoZGF0YS5jcmVhdGVkQXQpLmZvcm1hdCgnICAnKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTGluayIsIkdpU2x5IiwibW9tZW50IiwiUG9zdENhcmQiLCJwb3N0IiwiZGF0YSIsIm5vZGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiZmVhdHVyZWRJbWFnZSIsInVybCIsImFsdCIsInRpdGxlIiwibGF5b3V0IiwiaDEiLCJocmVmIiwic2x1ZyIsImF1dGhvciIsInBob3RvIiwibmFtZSIsImhlaWdodCIsIndpZHRoIiwicCIsInNwYW4iLCJjcmVhdGVkQXQiLCJmb3JtYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostCard.tsx\n");

/***/ })

});