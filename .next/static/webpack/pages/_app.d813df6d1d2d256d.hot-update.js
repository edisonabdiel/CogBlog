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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./services/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//Services\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//TODO: Create type for PostWidget\nvar PostWidget = function(param) {\n    var categories = param.categories, slug = param.slug;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), relatedPosts = ref[0], setRelatedPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (slug) {\n            (0,_services__WEBPACK_IMPORTED_MODULE_2__.getSimilarPosts)(categories, slug).then(function(res) {\n                return setRelatedPosts(res);\n            });\n        } else {\n            (0,_services__WEBPACK_IMPORTED_MODULE_2__.getRecentPosts)().then(function(res) {\n                return setRelatedPosts(res);\n            });\n        }\n    }, [\n        slug\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"bg-black bg-opacity-25 shadow-xl rounded-lg p-0 lg:p-8 pb-12 mb-8\",\n        __source: {\n            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n            __source: {\n                fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: \"Related Posts\"\n        })\n    }));\n};\n_s(PostWidget, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = PostWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostWidget);\nvar _c;\n$RefreshReg$(_c, \"PostWidget\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RXaWRnZXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNEO0FBT3RELEVBQVU7QUFDbUQ7OztBQUU3RCxFQUFrQztBQUVsQyxHQUFLLENBQUNLLFVBQVUsR0FBWSxRQUFRLFFBQWlCLENBQUM7UUFBeEJDLFVBQVUsU0FBVkEsVUFBVSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7O0lBQzFDLEdBQUssQ0FBbUNOLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBNUNPLFlBQVksR0FBcUJQLEdBQVksS0FBL0JRLGVBQWUsR0FBSVIsR0FBWTtJQUVwREMsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYixFQUFFLEVBQUVLLElBQUksRUFBRSxDQUFDO1lBQ1BILDBEQUFlLENBQUNFLFVBQVUsRUFBRUMsSUFBSSxFQUMzQkcsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztnQkFBS0YsTUFBTSxDQUFOQSxlQUFlLENBQUNFLEdBQUc7O1FBQzFDLENBQUMsTUFBTSxDQUFDO1lBQ0pSLHlEQUFjLEdBQ2JPLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7Z0JBQUtGLE1BQU0sQ0FBTkEsZUFBZSxDQUFDRSxHQUFHOztRQUN2QyxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUNKO1FBQUFBLElBQUk7SUFBQSxDQUFDO0lBR1QsTUFBTSxzRUFDREssQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBbUU7Ozs7Ozs7dUZBQzdFQyxDQUFFOzs7Ozs7O3NCQUFDLENBQWE7OztBQUk3QixDQUFDO0dBcEJLVCxVQUFVO0tBQVZBLFVBQVU7QUFzQmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0V2lkZ2V0LnRzeD8wZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8vTWlkZGxld2FyZVxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuLy9OZXh0IGNvbXBvbmVudHNcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vL1R5cGVzXG5pbXBvcnQgeyBDYXRlZ29yeVR5cGUgfSBmcm9tICcuLi9UeXBlRGVmcy9DYXRlZ29yaWVzJztcbi8vU2VydmljZXNcbmltcG9ydCB7IGdldFJlY2VudFBvc3RzLCBnZXRTaW1pbGFyUG9zdHMgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbi8vVE9ETzogQ3JlYXRlIHR5cGUgZm9yIFBvc3RXaWRnZXRcblxuY29uc3QgUG9zdFdpZGdldDogRkM8YW55PiA9ICh7Y2F0ZWdvcmllcywgc2x1ZyB9KSA9PiB7XG4gICAgY29uc3QgW3JlbGF0ZWRQb3N0cywgc2V0UmVsYXRlZFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzbHVnKSB7XG4gICAgICAgICAgICBnZXRTaW1pbGFyUG9zdHMoY2F0ZWdvcmllcywgc2x1ZylcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiBzZXRSZWxhdGVkUG9zdHMocmVzKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldFJlY2VudFBvc3RzKClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHNldFJlbGF0ZWRQb3N0cyhyZXMpKVxuICAgICAgIH1cbiAgICB9LCBbc2x1Z10pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGJnLW9wYWNpdHktMjUgc2hhZG93LXhsIHJvdW5kZWQtbGcgcC0wIGxnOnAtOCBwYi0xMiBtYi04XCI+XG4gICAgICAgICAgICA8aDM+UmVsYXRlZCBQb3N0czwvaDM+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0V2lkZ2V0O1xuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0UmVjZW50UG9zdHMiLCJnZXRTaW1pbGFyUG9zdHMiLCJQb3N0V2lkZ2V0IiwiY2F0ZWdvcmllcyIsInNsdWciLCJyZWxhdGVkUG9zdHMiLCJzZXRSZWxhdGVkUG9zdHMiLCJ0aGVuIiwicmVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostWidget.tsx\n");

/***/ })

});