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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//Next modules\n\n\nvar _this = undefined;\nvar PostCard = function(param) {\n    var post = param.post;\n    var ref;\n    var data = post === null || post === void 0 ? void 0 : post.node;\n    console.log(data);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"bg-grey-300 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8\",\n        __source: {\n            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"relative overflow-hidden shadow-md pb-80 mb-6\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: (ref = data.featuredImage) === null || ref === void 0 ? void 0 : ref.url,\n                    alt: data.title,\n                    className: \"object-top absolute h-80 w-full object-cover shadow-lg pb-68 mb-6 rounded-lg\",\n                    layout: \"fill\",\n                    __source: {\n                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"transition duration-500 text-center mb-7 cursor-pointer hover:text-purple-400 ease-in-out text-3xl font-light\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/post/\".concat(data.slug),\n                    __source: {\n                        fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: data.title\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"block lg:flex text-center items-center justify-center mb-8 w-full\",\n                __source: {\n                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex items-center justify-cnter mb-4 lg:mb-0 w-full lg:w-auto mr-8\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: data.author.photo.url,\n                                alt: data.author.name,\n                                height: 30,\n                                width: 30,\n                                className: \"align-middle rounded-full\",\n                                __source: {\n                                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"inline align-middle text-gray-400 ml-2\",\n                                __source: {\n                                    fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: data.author.name\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"font-medium text-gray-400\",\n                        __source: {\n                            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostCard.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUlqQyxFQUFjO0FBQ2dCO0FBQ0Y7O0FBSTVCLEdBQUssQ0FBQ0csUUFBUSxHQUFxQixRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7UUFTM0JDLEdBQWtCO0lBUi9CLEdBQUssQ0FBQ0EsSUFBSSxHQUFjRCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFVLEdBQVZBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUVFLElBQUk7SUFFbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJO0lBRWhCLE1BQU0sdUVBQ0hJLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXdEOzs7Ozs7OztpRkFDcEVELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUErQzs7Ozs7OzsrRkFDM0RULG1EQUFLO29CQUNKVSxHQUFHLEdBQUVOLEdBQWtCLEdBQWxCQSxJQUFJLENBQUNPLGFBQWEsY0FBbEJQLEdBQWtCLEtBQWxCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxHQUFrQixDQUFFUSxHQUFHO29CQUM1QkMsR0FBRyxFQUFFVCxJQUFJLENBQUNVLEtBQUs7b0JBQ2ZMLFNBQVMsRUFBQyxDQUE4RTtvQkFDeEZNLE1BQU0sRUFBQyxDQUFNOzs7Ozs7Ozs7aUZBR2hCQyxDQUFFO2dCQUFDUCxTQUFTLEVBQUMsQ0FBK0c7Ozs7Ozs7K0ZBQzFIUixrREFBSTtvQkFBQ2dCLElBQUksRUFBRyxDQUFNLFFBQVksT0FBVmIsSUFBSSxDQUFDYyxJQUFJOzs7Ozs7OzhCQUM3QmQsSUFBSSxDQUFDVSxLQUFLOzs7a0ZBR1pOLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtRTs7Ozs7Ozs7MEZBQy9FRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBb0U7Ozs7Ozs7O2lHQUNoRlQsbURBQUs7Z0NBQ0pVLEdBQUcsRUFBRU4sSUFBSSxDQUFDZSxNQUFNLENBQUNDLEtBQUssQ0FBQ1IsR0FBRztnQ0FDMUJDLEdBQUcsRUFBRVQsSUFBSSxDQUFDZSxNQUFNLENBQUNFLElBQUk7Z0NBQ3JCQyxNQUFNLEVBQUUsRUFBRTtnQ0FDVkMsS0FBSyxFQUFFLEVBQUU7Z0NBQ1RkLFNBQVMsRUFBQyxDQUEyQjs7Ozs7Ozs7aUdBRXRDZSxDQUFDO2dDQUFDZixTQUFTLEVBQUMsQ0FBd0M7Ozs7Ozs7MENBQUVMLElBQUksQ0FBQ2UsTUFBTSxDQUFDRSxJQUFJOzs7O3lGQUV4RWIsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQTJCOzs7Ozs7Ozs7Ozs7QUFJbEQsQ0FBQztLQW5DS1AsUUFBUTtBQXFDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdENhcmQudHN4PzQwNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG4vL1R5cGVzXG5pbXBvcnQgeyBQb3N0c1R5cGUgfSBmcm9tIFwiLi4vVHlwZURlZnMvUG9zdHNcIjtcbmltcG9ydCB7IFBvc3RDYXJkVHlwZSB9IGZyb20gXCIuLi9UeXBlRGVmcy9Qb3N0Q2FyZFwiO1xuLy9OZXh0IG1vZHVsZXNcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gSWNvbnNcbmltcG9ydCB7IEZhUmVnQ2xvY2ssIEZhUmVnQ2FsZW5kYXJBbHQsIEZhUmVnVXNlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5jb25zdCBQb3N0Q2FyZDogRkM8UG9zdENhcmRUeXBlPiA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBkYXRhOiBQb3N0c1R5cGUgPSBwb3N0Py5ub2RlO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmV5LTMwMCBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTAgbGc6cC04IHBiLTEyIG1iLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1tZCBwYi04MCBtYi02XCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17ZGF0YS5mZWF0dXJlZEltYWdlPy51cmx9XG4gICAgICAgICAgYWx0PXtkYXRhLnRpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC10b3AgYWJzb2x1dGUgaC04MCB3LWZ1bGwgb2JqZWN0LWNvdmVyIHNoYWRvdy1sZyBwYi02OCBtYi02IHJvdW5kZWQtbGdcIlxuICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdGV4dC1jZW50ZXIgbWItNyBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXB1cnBsZS00MDAgZWFzZS1pbi1vdXQgdGV4dC0zeGwgZm9udC1saWdodFwiPlxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtkYXRhLnNsdWd9YH0+XG4gICAgICAgIHtkYXRhLnRpdGxlfVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBsZzpmbGV4IHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi04IHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY250ZXIgbWItNCBsZzptYi0wIHctZnVsbCBsZzp3LWF1dG8gbXItOFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtkYXRhLmF1dGhvci5waG90by51cmx9XG4gICAgICAgICAgICBhbHQ9e2RhdGEuYXV0aG9yLm5hbWV9XG4gICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUgYWxpZ24tbWlkZGxlIHRleHQtZ3JheS00MDAgbWwtMlwiPntkYXRhLmF1dGhvci5uYW1lfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTQwMFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTGluayIsIlBvc3RDYXJkIiwicG9zdCIsImRhdGEiLCJub2RlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImZlYXR1cmVkSW1hZ2UiLCJ1cmwiLCJhbHQiLCJ0aXRsZSIsImxheW91dCIsImgxIiwiaHJlZiIsInNsdWciLCJhdXRob3IiLCJwaG90byIsIm5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostCard.tsx\n");

/***/ })

});