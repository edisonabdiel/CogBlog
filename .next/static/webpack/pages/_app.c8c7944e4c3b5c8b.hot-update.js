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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gi */ \"./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//Next modules\n\n\n// Icons\n\n// Middlewear\n\nvar _this = undefined;\nvar PostCard = function(param) {\n    var post = param.post;\n    var ref;\n    var data = post === null || post === void 0 ? void 0 : post.node;\n    console.log(data);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"bg-black bg-opacity-55 shadow-xl rounded-lg p-0 lg:p-8 pb-12 mb-8\",\n        __source: {\n            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"relative overflow-hidden shadow-md pb-80 mb-6\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: (ref = data.featuredImage) === null || ref === void 0 ? void 0 : ref.url,\n                    alt: data.title,\n                    className: \"object-top absolute h-80 w-full object-cover shadow-lg pb-68 mb-6 rounded-lg\",\n                    layout: \"fill\",\n                    __source: {\n                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"transition duration-500 text-center mb-7 cursor-pointer hover:text-purple-400 ease-in-out text-3xl font-light\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/post/\".concat(data.slug),\n                    __source: {\n                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: data.title\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"block lg:flex text-center items-center justify-center mb-8 w-full\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex items-center justify-cnter mb-4 lg:mb-0 w-full lg:w-auto mr-8\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: data.author.photo.url,\n                                alt: data.author.name,\n                                height: 30,\n                                width: 30,\n                                className: \"align-middle rounded-full\",\n                                __source: {\n                                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"inline align-middle text-gray-400 ml-2 font-medium text-gray-400\",\n                                __source: {\n                                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: data.author.name\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"transition duration-500 font-medium text-gray-500 hover:text-red-700 ease-in-out\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiSly, {\n                            __source: {\n                                fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"ml-8 font-medium text-gray-400\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: moment__WEBPACK_IMPORTED_MODULE_4___default()(data.createdAt).format('MM DD, YYYY')\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                className: \"text-center text-lg text-gray-400 font-normal px-4 lg:px-20 mb-4\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: data.excerpt\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"text-center\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/post/\".concat(data.slug),\n                    __source: {\n                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"transition duration-500 text-gray-200 transform hover:-translate-y-1 inline-block bg-purple-700 tex-lg font-medium rounded-full px-5 py-2 cursor-pointer\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Read more\"\n                    })\n                })\n            })\n        ]\n    }));\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUlqQyxFQUFjO0FBQ2dCO0FBQ0Y7QUFDNUIsRUFBUTtBQUM4QjtBQUN0QyxFQUFhO0FBQ2M7O0FBRTNCLEdBQUssQ0FBQ0ssUUFBUSxHQUFxQixRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7UUFTM0JDLEdBQWtCO0lBUi9CLEdBQUssQ0FBQ0EsSUFBSSxHQUFjRCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFVLEdBQVZBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUVFLElBQUk7SUFFbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJO0lBRWhCLE1BQU0sdUVBQ0hJLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQW1FOzs7Ozs7OztpRkFDL0VELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUErQzs7Ozs7OzsrRkFDM0RYLG1EQUFLO29CQUNKWSxHQUFHLEdBQUVOLEdBQWtCLEdBQWxCQSxJQUFJLENBQUNPLGFBQWEsY0FBbEJQLEdBQWtCLEtBQWxCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxHQUFrQixDQUFFUSxHQUFHO29CQUM1QkMsR0FBRyxFQUFFVCxJQUFJLENBQUNVLEtBQUs7b0JBQ2ZMLFNBQVMsRUFBQyxDQUE4RTtvQkFDeEZNLE1BQU0sRUFBQyxDQUFNOzs7Ozs7Ozs7aUZBR2hCQyxDQUFFO2dCQUFDUCxTQUFTLEVBQUMsQ0FBK0c7Ozs7Ozs7K0ZBQzFIVixrREFBSTtvQkFBQ2tCLElBQUksRUFBRyxDQUFNLFFBQVksT0FBVmIsSUFBSSxDQUFDYyxJQUFJOzs7Ozs7OzhCQUM3QmQsSUFBSSxDQUFDVSxLQUFLOzs7a0ZBR1pOLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtRTs7Ozs7Ozs7MEZBQy9FRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBb0U7Ozs7Ozs7O2lHQUNoRlgsbURBQUs7Z0NBQ0pZLEdBQUcsRUFBRU4sSUFBSSxDQUFDZSxNQUFNLENBQUNDLEtBQUssQ0FBQ1IsR0FBRztnQ0FDMUJDLEdBQUcsRUFBRVQsSUFBSSxDQUFDZSxNQUFNLENBQUNFLElBQUk7Z0NBQ3JCQyxNQUFNLEVBQUUsRUFBRTtnQ0FDVkMsS0FBSyxFQUFFLEVBQUU7Z0NBQ1RkLFNBQVMsRUFBQyxDQUEyQjs7Ozs7Ozs7aUdBRXRDZSxDQUFDO2dDQUFDZixTQUFTLEVBQUMsQ0FBa0U7Ozs7Ozs7MENBQUVMLElBQUksQ0FBQ2UsTUFBTSxDQUFDRSxJQUFJOzs7O3lGQUVsR2IsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQWtGOzs7Ozs7O3VHQUM5RlQsaURBQUs7Ozs7Ozs7Ozt5RkFFTHlCLENBQUk7d0JBQUNoQixTQUFTLEVBQUMsQ0FBZ0M7Ozs7Ozs7a0NBQzdDUiw2Q0FBTSxDQUFDRyxJQUFJLENBQUNzQixTQUFTLEVBQUVDLE1BQU0sQ0FBQyxDQUFhOzs7O2lGQUdqREgsQ0FBQztnQkFBQ2YsU0FBUyxFQUFDLENBQWtFOzs7Ozs7OzBCQUFFTCxJQUFJLENBQUN3QixPQUFPOztpRkFDNUZwQixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBYTs7Ozs7OzsrRkFDekJWLGtEQUFJO29CQUFDa0IsSUFBSSxFQUFHLENBQU0sUUFBWSxPQUFWYixJQUFJLENBQUNjLElBQUk7Ozs7Ozs7bUdBQzNCTyxDQUFJO3dCQUFDaEIsU0FBUyxFQUFDLENBQTBKOzs7Ozs7O2tDQUFDLENBQVM7Ozs7OztBQUs5TCxDQUFDO0tBOUNLUCxRQUFRO0FBZ0RkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC50c3g/NDA1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbi8vVHlwZXNcbmltcG9ydCB7IFBvc3RzVHlwZSB9IGZyb20gXCIuLi9UeXBlRGVmcy9Qb3N0c1wiO1xuaW1wb3J0IHsgUG9zdENhcmRUeXBlIH0gZnJvbSBcIi4uL1R5cGVEZWZzL1Bvc3RDYXJkXCI7XG4vL05leHQgbW9kdWxlc1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBJY29uc1xuaW1wb3J0IHsgR2lTbHkgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbi8vIE1pZGRsZXdlYXJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5jb25zdCBQb3N0Q2FyZDogRkM8UG9zdENhcmRUeXBlPiA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBkYXRhOiBQb3N0c1R5cGUgPSBwb3N0Py5ub2RlO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBiZy1vcGFjaXR5LTU1IHNoYWRvdy14bCByb3VuZGVkLWxnIHAtMCBsZzpwLTggcGItMTIgbWItOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIHBiLTgwIG1iLTZcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtkYXRhLmZlYXR1cmVkSW1hZ2U/LnVybH1cbiAgICAgICAgICBhbHQ9e2RhdGEudGl0bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LXRvcCBhYnNvbHV0ZSBoLTgwIHctZnVsbCBvYmplY3QtY292ZXIgc2hhZG93LWxnIHBiLTY4IG1iLTYgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCB0ZXh0LWNlbnRlciBtYi03IGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcHVycGxlLTQwMCBlYXNlLWluLW91dCB0ZXh0LTN4bCBmb250LWxpZ2h0XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke2RhdGEuc2x1Z31gfT5cbiAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGxnOmZsZXggdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTggdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jbnRlciBtYi00IGxnOm1iLTAgdy1mdWxsIGxnOnctYXV0byBtci04XCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2RhdGEuYXV0aG9yLnBob3RvLnVybH1cbiAgICAgICAgICAgIGFsdD17ZGF0YS5hdXRob3IubmFtZX1cbiAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBhbGlnbi1taWRkbGUgdGV4dC1ncmF5LTQwMCBtbC0yIGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj57ZGF0YS5hdXRob3IubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1yZWQtNzAwIGVhc2UtaW4tb3V0XCI+XG4gICAgICAgICAgPEdpU2x5IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTggZm9udC1tZWRpdW0gdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAge21vbWVudChkYXRhLmNyZWF0ZWRBdCkuZm9ybWF0KCdNTSBERCwgWVlZWScpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LWdyYXktNDAwIGZvbnQtbm9ybWFsIHB4LTQgbGc6cHgtMjAgbWItNFwiPntkYXRhLmV4Y2VycHR9PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtkYXRhLnNsdWd9YH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdGV4dC1ncmF5LTIwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgaW5saW5lLWJsb2NrIGJnLXB1cnBsZS03MDAgdGV4LWxnIGZvbnQtbWVkaXVtIHJvdW5kZWQtZnVsbCBweC01IHB5LTIgY3Vyc29yLXBvaW50ZXJcIj5SZWFkIG1vcmU8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkxpbmsiLCJHaVNseSIsIm1vbWVudCIsIlBvc3RDYXJkIiwicG9zdCIsImRhdGEiLCJub2RlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImZlYXR1cmVkSW1hZ2UiLCJ1cmwiLCJhbHQiLCJ0aXRsZSIsImxheW91dCIsImgxIiwiaHJlZiIsInNsdWciLCJhdXRob3IiLCJwaG90byIsIm5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsInAiLCJzcGFuIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiZXhjZXJwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.tsx\n");

/***/ })

});