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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar PostWidget = function(param) {\n    var categories = param.categories, slug = param.slug;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), relatedPosts = ref[0], setRelatedPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (slug) {\n            getSimilarPosts(category, slug).then(function(res) {\n                return setRelatedPosts(res);\n            });\n        } else {\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: \"PostWidgets\"\n    }));\n};\n_s(PostWidget, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = PostWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostWidget);\nvar _c;\n$RefreshReg$(_c, \"PostWidget\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RXaWRnZXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0Q7OztBQVV0RCxHQUFLLENBQUNHLFVBQVUsR0FBcUIsUUFBUSxRQUFpQixDQUFDO1FBQXhCQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsSUFBSSxTQUFKQSxJQUFJOztJQUNuRCxHQUFLLENBQW1DSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTVDSyxZQUFZLEdBQXFCTCxHQUFZLEtBQS9CTSxlQUFlLEdBQUlOLEdBQVk7SUFFcERDLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2IsRUFBRSxFQUFFRyxJQUFJLEVBQUUsQ0FBQztZQUNQRyxlQUFlLENBQUNDLFFBQVEsRUFBRUosSUFBSSxFQUN6QkssSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztnQkFBS0osTUFBTSxDQUFOQSxlQUFlLENBQUNJLEdBQUc7O1FBQzFDLENBQUMsTUFBTSxDQUFDO1FBRVQsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHTCxNQUFNLHNFQUNEQyxDQUFHOzs7Ozs7O2tCQUFDLENBRUw7O0FBRVIsQ0FBQztHQWxCS1QsVUFBVTtLQUFWQSxVQUFVO0FBb0JoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdFdpZGdldC50c3g/MGVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vL01pZGRsZXdhcmVcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vTmV4dCBjb21wb25lbnRzXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy9UeXBlc1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSAnLi4vVHlwZURlZnMvQ2F0ZWdvcmllcyc7XG4vL1NlcnZpY2VzXG5pbXBvcnQgeyBnZXRSZWNlbnRQb3N0cyB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuY29uc3QgUG9zdFdpZGdldDogRkM8Q2F0ZWdvcnlUeXBlPiA9ICh7Y2F0ZWdvcmllcywgc2x1ZyB9KSA9PiB7XG4gICAgY29uc3QgW3JlbGF0ZWRQb3N0cywgc2V0UmVsYXRlZFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzbHVnKSB7XG4gICAgICAgICAgICBnZXRTaW1pbGFyUG9zdHMoY2F0ZWdvcnksIHNsdWcpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gc2V0UmVsYXRlZFBvc3RzKHJlcykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICB9XG4gICAgfSwgW10pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgUG9zdFdpZGdldHNcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0V2lkZ2V0O1xuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9zdFdpZGdldCIsImNhdGVnb3JpZXMiLCJzbHVnIiwicmVsYXRlZFBvc3RzIiwic2V0UmVsYXRlZFBvc3RzIiwiZ2V0U2ltaWxhclBvc3RzIiwiY2F0ZWdvcnkiLCJ0aGVuIiwicmVzIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostWidget.tsx\n");

/***/ })

});