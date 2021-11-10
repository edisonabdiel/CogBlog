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

/***/ "./components/PostWidget.tsx":
/*!***********************************!*\
  !*** ./components/PostWidget.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services */ \"./services/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar PostWidget = function(param) {\n    var categories = param.categories, slug = param.slug;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), relatedPosts = ref[0], setRelatedPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (slug) {\n            (0,_services__WEBPACK_IMPORTED_MODULE_6__.getSimilarPosts)(categories, slug).then(function(result) {\n                setRelatedPosts(result);\n            });\n        } else {\n            (0,_services__WEBPACK_IMPORTED_MODULE_6__.getRecentPosts)().then(function(result) {\n                setRelatedPosts(result);\n            });\n        }\n    }, [\n        slug\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"bg-fray bg-opacity-25 shadow-xl rounded-lg p-8 pb-12 mb-8\",\n        __source: {\n            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                className: \"text-xl mb-8 font-normal border-b pb-4 titles-names\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: slug ? \"Related Posts\" : \"Recent Posts\"\n            }),\n            relatedPosts === null || relatedPosts === void 0 ? void 0 : relatedPosts.map(function(post) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"flex items-center w-full mb-4\",\n                    __source: {\n                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"w-16 flex-none\",\n                            __source: {\n                                fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                alt: post.title,\n                                height: 60,\n                                width: 60,\n                                loader: _util__WEBPACK_IMPORTED_MODULE_5__.grpahCMSImageLoader,\n                                unoptimized: true,\n                                className: \"align-middle rounded-full\",\n                                src: post.featuredImage.url,\n                                __source: {\n                                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"flex-grow ml-4\",\n                            __source: {\n                                fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/post/\".concat(post.slug),\n                                    passHref: true,\n                                    __source: {\n                                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this1,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        className: \"text-lg font-thin transition duration-500 text-center mb-7 cursor-pointer hover:text-purple-400 ease-in-out\",\n                                        __source: {\n                                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this1,\n                                        children: post.title\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    className: \"text-sm text-gray-600\",\n                                    __source: {\n                                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this1,\n                                    children: moment__WEBPACK_IMPORTED_MODULE_3___default()(post.date).format(\"MMMM Do YYYY\")\n                                })\n                            ]\n                        })\n                    ]\n                }, post.title);\n            })\n        ]\n    }));\n};\n_s(PostWidget, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = PostWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostWidget);\nvar _c;\n$RefreshReg$(_c, \"PostWidget\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RXaWRnZXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUN4QjtBQUNIO0FBQ0M7QUFFaUI7QUFDZ0I7OztBQUc3RCxHQUFLLENBQUNTLFVBQVUsR0FBK0MsUUFBUSxRQUFrQixDQUFDO1FBQXhCQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsSUFBSSxTQUFKQSxJQUFJOzs7SUFDaEYsR0FBSyxDQUFtQ1YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE1Q1csWUFBWSxHQUFxQlgsR0FBWSxLQUEvQlksZUFBZSxHQUFJWixHQUFZO0lBRXBEQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEVBQUUsRUFBRVMsSUFBSSxFQUFFLENBQUM7WUFDVEosMERBQWUsQ0FBQ0csVUFBVSxFQUFFQyxJQUFJLEVBQUVHLElBQUksQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDO2dCQUNsREYsZUFBZSxDQUFDRSxNQUFNO1lBQ3hCLENBQUM7UUFDSCxDQUFDLE1BQU0sQ0FBQztZQUNOUCx5REFBYyxHQUFHTSxJQUFJLENBQUMsUUFBUSxDQUFQQyxNQUFNLEVBQUssQ0FBQztnQkFDakNGLGVBQWUsQ0FBQ0UsTUFBTTtZQUN4QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDSjtRQUFBQSxJQUFJO0lBQUEsQ0FBQztJQUVULE1BQU0sdUVBQ0hLLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTJEOzs7Ozs7OztpRkFDdkVDLENBQUU7Z0JBQUNELFNBQVMsRUFBQyxDQUFxRDs7Ozs7OzswQkFDaEVOLElBQUksR0FBRyxDQUFlLGlCQUFHLENBQWM7O1lBRXpDQyxZQUFZLGFBQVpBLFlBQVksS0FBWkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsWUFBWSxDQUFFTyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFlOzhCQUNqQyxNQUFNLHlEQUFMSixDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBK0I7Ozs7Ozs7OzZGQUMzQ0QsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQWdCOzs7Ozs7OzJHQUM1QmQsbURBQUs7Z0NBQ0prQixHQUFHLEVBQUVELElBQUksQ0FBQ0UsS0FBSztnQ0FDZkMsTUFBTSxFQUFFLEVBQUU7Z0NBQ1ZDLEtBQUssRUFBRSxFQUFFO2dDQUNUQyxNQUFNLEVBQUVuQixzREFBbUI7Z0NBQzNCb0IsV0FBVztnQ0FDWFQsU0FBUyxFQUFDLENBQTJCO2dDQUNyQ1UsR0FBRyxFQUFFUCxJQUFJLENBQUNRLGFBQWEsQ0FBQ0MsR0FBRzs7Ozs7Ozs7OzhGQUc5QmIsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQWdCOzs7Ozs7OztxR0FDNUJaLGtEQUFJO29DQUFDeUIsSUFBSSxFQUFHLENBQU0sUUFBWSxPQUFWVixJQUFJLENBQUNULElBQUk7b0NBQUlvQixRQUFROzs7Ozs7O21IQUN2Q0MsQ0FBQzt3Q0FBQ2YsU0FBUyxFQUFDLENBQTZHOzs7Ozs7O2tEQUN2SEcsSUFBSSxDQUFDRSxLQUFLOzs7cUdBR2RXLENBQUM7b0NBQUNoQixTQUFTLEVBQUMsQ0FBdUI7Ozs7Ozs7OENBQ2pDYiw2Q0FBTSxDQUFDZ0IsSUFBSSxDQUFDYyxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxDQUFjOzs7OzttQkFuQk1mLElBQUksQ0FBQ0UsS0FBSzs7OztBQTBCdEUsQ0FBQztHQS9DS2IsVUFBVTtLQUFWQSxVQUFVO0FBaURoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdFdpZGdldC50c3g/MGVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBncnBhaENNU0ltYWdlTG9hZGVyIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBnZXRTaW1pbGFyUG9zdHMsIGdldFJlY2VudFBvc3RzIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgUG9zdHNUeXBlIH0gZnJvbSAnLi4vVHlwZURlZnMnO1xuXG5jb25zdCBQb3N0V2lkZ2V0OiBGQzx7Y2F0ZWdvcmllcz86IHN0cmluZ1tdLCBzbHVnPzogc3RyaW5nfT4gPSAoeyBjYXRlZ29yaWVzLCBzbHVnIH0pID0+IHtcbiAgY29uc3QgW3JlbGF0ZWRQb3N0cywgc2V0UmVsYXRlZFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzbHVnKSB7XG4gICAgICBnZXRTaW1pbGFyUG9zdHMoY2F0ZWdvcmllcywgc2x1ZykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHNldFJlbGF0ZWRQb3N0cyhyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldFJlY2VudFBvc3RzKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHNldFJlbGF0ZWRQb3N0cyhyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc2x1Z10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1mcmF5IGJnLW9wYWNpdHktMjUgc2hhZG93LXhsIHJvdW5kZWQtbGcgcC04IHBiLTEyIG1iLThcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTggZm9udC1ub3JtYWwgYm9yZGVyLWIgcGItNCB0aXRsZXMtbmFtZXNcIj5cbiAgICAgICAge3NsdWcgPyBcIlJlbGF0ZWQgUG9zdHNcIiA6IFwiUmVjZW50IFBvc3RzXCJ9XG4gICAgICA8L2gzPlxuICAgICAge3JlbGF0ZWRQb3N0cz8ubWFwKChwb3N0OiBQb3N0c1R5cGUpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgbWItNFwiIGtleT17cG9zdC50aXRsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGZsZXgtbm9uZVwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs2MH1cbiAgICAgICAgICAgICAgd2lkdGg9ezYwfVxuICAgICAgICAgICAgICBsb2FkZXI9e2dycGFoQ01TSW1hZ2VMb2FkZXJ9XG4gICAgICAgICAgICAgIHVub3B0aW1pemVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICBzcmM9e3Bvc3QuZmVhdHVyZWRJbWFnZS51cmx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG1sLTRcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXRoaW4gdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdGV4dC1jZW50ZXIgbWItNyBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXB1cnBsZS00MDAgZWFzZS1pbi1vdXRcIj5cbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgIHttb21lbnQocG9zdC5kYXRlKS5mb3JtYXQoXCJNTU1NIERvIFlZWVlcIil9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0V2lkZ2V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIm1vbWVudCIsIkxpbmsiLCJncnBhaENNU0ltYWdlTG9hZGVyIiwiZ2V0U2ltaWxhclBvc3RzIiwiZ2V0UmVjZW50UG9zdHMiLCJQb3N0V2lkZ2V0IiwiY2F0ZWdvcmllcyIsInNsdWciLCJyZWxhdGVkUG9zdHMiLCJzZXRSZWxhdGVkUG9zdHMiLCJ0aGVuIiwicmVzdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJwb3N0IiwiYWx0IiwidGl0bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImxvYWRlciIsInVub3B0aW1pemVkIiwic3JjIiwiZmVhdHVyZWRJbWFnZSIsInVybCIsImhyZWYiLCJwYXNzSHJlZiIsImEiLCJwIiwiZGF0ZSIsImZvcm1hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostWidget.tsx\n");

/***/ })

});