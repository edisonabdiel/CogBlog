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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar PostWidget = function(param) {\n    var categories = param.categories, slug = param.slug;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), relatedPosts = ref[0], setRelatedPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (slug) {\n            getSimilarPosts(category, slug).then(function(res) {\n                return setRelatedPosts(res);\n            });\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/edisonmasis/react-apps/bloggg/components/PostWidget.tsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: \"PostWidgets\"\n    }));\n};\n_s(PostWidget, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = PostWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostWidget);\nfunction getSimilarPosts(category, slug) {\n    throw new Error('Function not implemented.');\n}\nfunction category(category, slug) {\n    throw new Error('Function not implemented.');\n}\nvar _c;\n$RefreshReg$(_c, \"PostWidget\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RXaWRnZXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0Q7OztBQVV0RCxHQUFLLENBQUNHLFVBQVUsR0FBcUIsUUFBUSxRQUFpQixDQUFDO1FBQXhCQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsSUFBSSxTQUFKQSxJQUFJOztJQUNuRCxHQUFLLENBQW1DSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTVDSyxZQUFZLEdBQXFCTCxHQUFZLEtBQS9CTSxlQUFlLEdBQUlOLEdBQVk7SUFFcERDLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2IsRUFBRSxFQUFFRyxJQUFJLEVBQUUsQ0FBQztZQUNQRyxlQUFlLENBQUNDLFFBQVEsRUFBRUosSUFBSSxFQUN6QkssSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztnQkFBS0osTUFBTSxDQUFOQSxlQUFlLENBQUNJLEdBQUc7O1FBQzNDLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR0wsTUFBTSxzRUFDREMsQ0FBRzs7Ozs7OztrQkFBQyxDQUVMOztBQUVSLENBQUM7R0FoQktULFVBQVU7S0FBVkEsVUFBVTtBQWtCaEIsK0RBQWVBLFVBQVUsRUFBQztTQUVqQkssZUFBZSxDQUFDQyxRQUFhLEVBQUVKLElBQVksRUFBRSxDQUFDO0lBQ25ELEtBQUssQ0FBQyxHQUFHLENBQUNRLEtBQUssQ0FBQyxDQUEyQjtBQUMvQyxDQUFDO1NBRVFKLFFBQVEsQ0FBQ0EsUUFBYSxFQUFFSixJQUFZLEVBQUUsQ0FBQztJQUM1QyxLQUFLLENBQUMsR0FBRyxDQUFDUSxLQUFLLENBQUMsQ0FBMkI7QUFDL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RXaWRnZXQudHN4PzBlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLy9NaWRkbGV3YXJlXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG4vL05leHQgY29tcG9uZW50c1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vVHlwZXNcbmltcG9ydCB7IENhdGVnb3J5VHlwZSB9IGZyb20gJy4uL1R5cGVEZWZzL0NhdGVnb3JpZXMnO1xuLy9TZXJ2aWNlc1xuaW1wb3J0IHsgZ2V0UmVjZW50UG9zdHMgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbmNvbnN0IFBvc3RXaWRnZXQ6IEZDPENhdGVnb3J5VHlwZT4gPSAoe2NhdGVnb3JpZXMsIHNsdWcgfSkgPT4ge1xuICAgIGNvbnN0IFtyZWxhdGVkUG9zdHMsIHNldFJlbGF0ZWRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2x1Zykge1xuICAgICAgICAgICAgZ2V0U2ltaWxhclBvc3RzKGNhdGVnb3J5LCBzbHVnKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHNldFJlbGF0ZWRQb3N0cyhyZXMpKVxuICAgICAgIH1cbiAgICB9LCBbXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBQb3N0V2lkZ2V0c1xuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RXaWRnZXQ7XG5cbmZ1bmN0aW9uIGdldFNpbWlsYXJQb3N0cyhjYXRlZ29yeTogYW55LCBzbHVnOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC4nKTtcbn1cblxuZnVuY3Rpb24gY2F0ZWdvcnkoY2F0ZWdvcnk6IGFueSwgc2x1Zzogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuJyk7XG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9zdFdpZGdldCIsImNhdGVnb3JpZXMiLCJzbHVnIiwicmVsYXRlZFBvc3RzIiwic2V0UmVsYXRlZFBvc3RzIiwiZ2V0U2ltaWxhclBvc3RzIiwiY2F0ZWdvcnkiLCJ0aGVuIiwicmVzIiwiZGl2IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostWidget.tsx\n");

/***/ })

});