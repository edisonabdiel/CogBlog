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

/***/ "./services/index.ts":
/*!***************************!*\
  !*** ./services/index.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPosts\": function() { return /* binding */ getPosts; },\n/* harmony export */   \"getRecentPosts\": function() { return /* binding */ getRecentPosts; },\n/* harmony export */   \"getSimilarPosts\": function() { return /* binding */ getSimilarPosts; }\n/* harmony export */ });\n/* harmony import */ var _Users_edisonmasis_react_apps_bloggg_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_edisonmasis_react_apps_bloggg_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_edisonmasis_react_apps_bloggg_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query MyQuery {\\n        postsConnection {\\n          edges {\\n            node {\\n              author {\\n                bio\\n                id\\n                name\\n                photo {\\n                  url\\n                }\\n              }\\n              createdAt\\n              excerpt\\n              title\\n              slug\\n              categories {\\n                name\\n                slug\\n              }\\n              featuredImage {\\n                url\\n              }\\n            }\\n          }\\n        }\\n      }\\n      \\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GetPostDetails() {\\n        posts(\\n          orderBy: createdAt_ASC\\n          last: 3\\n        ) {\\n          title\\n          featuredImage {\\n            url\\n          }\\n          slug\\n          createdAt\\n        }\\n      }\\n      \\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GetPostDetails($slug: String!) {\\n        posts(\\n          where: {\\n            slug_not: $slug,\\n            AND: {\\n              \\n            }\\n          }\\n          orderBy: createdAt_ASC\\n          last: 3\\n        ) {\\n          title\\n          featuredImage {\\n            url\\n          }\\n          slug\\n          createdAt\\n        }\\n      }\\n      \\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar graphqlAPI = \"https://api-eu-central-1.graphcms.com/v2/ckvmil9rk12wj01z214mp71uu/master\";\nvar getPosts = _asyncToGenerator(_Users_edisonmasis_react_apps_bloggg_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var query, res;\n    return _Users_edisonmasis_react_apps_bloggg_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                query = (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\n                _ctx.next = 3;\n                return (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.request)(graphqlAPI, query);\n            case 3:\n                res = _ctx.sent;\n                return _ctx.abrupt(\"return\", res.postsConnection.edges);\n            case 5:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar getRecentPosts = _asyncToGenerator(_Users_edisonmasis_react_apps_bloggg_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var query, res;\n    return _Users_edisonmasis_react_apps_bloggg_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                query = (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject1());\n                _ctx.next = 3;\n                return (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.request)(graphqlAPI, query);\n            case 3:\n                res = _ctx.sent;\n                return _ctx.abrupt(\"return\", res.postsConnection.edges);\n            case 5:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar getSimilarPosts = _asyncToGenerator(_Users_edisonmasis_react_apps_bloggg_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(slug) {\n    var query, res;\n    return _Users_edisonmasis_react_apps_bloggg_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                query = (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\n                _ctx.next = 3;\n                return (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.request)(graphqlAPI, query, {\n                    slug: slug\n                });\n            case 3:\n                res = _ctx.sent;\n                return _ctx.abrupt(\"return\", res.postsConnection.edges);\n            case 5:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU0xQixDQTZCaEI7Ozs7Ozs7OztRQVFnQixDQWVoQjs7Ozs7Ozs7O1FBUWdCLENBcUJoQjs7Ozs7OztBQXBGSixHQUFLLENBQUNFLFVBQVUsR0FBR0MsMkVBQXlDO0FBRXJELEdBQUssQ0FBQ0csUUFBUSxvS0FBRyxRQUFRLFdBQWtCLENBQUM7UUFDM0NDLEtBQUssRUFnQ0xDLEdBQUc7Ozs7Z0JBaENIRCxLQUFLLEdBQUdOLG9EQUFHOzt1QkFnQ2VELHdEQUFPLENBQUNFLFVBQVUsRUFBRUssS0FBSzs7Z0JBQW5EQyxHQUFHOzZDQUNGQSxHQUFHLENBQUNDLGVBQWUsQ0FBQ0MsS0FBSzs7Ozs7O0FBQ2xDLENBQUM7QUFFTSxHQUFLLENBQUNDLGNBQWMsb0tBQUcsUUFBUSxXQUFrQixDQUFDO1FBQ2pESixLQUFLLEVBa0JMQyxHQUFHOzs7O2dCQWxCSEQsS0FBSyxHQUFHTixvREFBRzs7dUJBa0JlRCx3REFBTyxDQUFDRSxVQUFVLEVBQUVLLEtBQUs7O2dCQUFuREMsR0FBRzs2Q0FDRkEsR0FBRyxDQUFDQyxlQUFlLENBQUNDLEtBQUs7Ozs7OztBQUNsQyxDQUFDO0FBRU0sR0FBSyxDQUFDRSxlQUFlLG9LQUFHLFFBQVEsU0FBREMsSUFBWSxFQUFtQixDQUFDO1FBQzlETixLQUFLLEVBd0JMQyxHQUFHOzs7O2dCQXhCSEQsS0FBSyxHQUFHTixvREFBRzs7dUJBd0JlRCx3REFBTyxDQUFDRSxVQUFVLEVBQUVLLEtBQUssRUFBRSxDQUFDO29CQUFDTSxJQUFJLEVBQUpBLElBQUk7Z0JBQUMsQ0FBQzs7Z0JBQTdETCxHQUFHOzZDQUNGQSxHQUFHLENBQUNDLGVBQWUsQ0FBQ0MsS0FBSzs7Ozs7O0FBQ2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvaW5kZXgudHM/OWVjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0LCBncWwgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5pbXBvcnQgeyBTZXJ2aWNlc1R5cGUgfSBmcm9tIFwiLi4vVHlwZURlZnMvU2VydmljZXNcIjtcblxuY29uc3QgZ3JhcGhxbEFQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dSQVBIQ01TX0VORFBPSU5UO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgY29uc3QgcXVlcnkgPSBncWxgXG4gICAgcXVlcnkgTXlRdWVyeSB7XG4gICAgICAgIHBvc3RzQ29ubmVjdGlvbiB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgICAgICAgYmlvXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgcGhvdG8ge1xuICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICAgICAgICBleGNlcnB0XG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgYDtcbiAgICBcbiAgICBcbiAgY29uc3QgcmVzOiBTZXJ2aWNlc1R5cGUgPSBhd2FpdCByZXF1ZXN0KGdyYXBocWxBUEksIHF1ZXJ5KTtcbiAgcmV0dXJuIHJlcy5wb3N0c0Nvbm5lY3Rpb24uZWRnZXM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmVjZW50UG9zdHMgPSBhc3luYyAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgY29uc3QgcXVlcnkgPSBncWxgXG4gICAgcXVlcnkgR2V0UG9zdERldGFpbHMoKSB7XG4gICAgICAgIHBvc3RzKFxuICAgICAgICAgIG9yZGVyQnk6IGNyZWF0ZWRBdF9BU0NcbiAgICAgICAgICBsYXN0OiAzXG4gICAgICAgICkge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICBgO1xuICAgIFxuICAgIFxuICBjb25zdCByZXM6IFNlcnZpY2VzVHlwZSA9IGF3YWl0IHJlcXVlc3QoZ3JhcGhxbEFQSSwgcXVlcnkpO1xuICByZXR1cm4gcmVzLnBvc3RzQ29ubmVjdGlvbi5lZGdlcztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTaW1pbGFyUG9zdHMgPSBhc3luYyAoc2x1Zzogc3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgY29uc3QgcXVlcnkgPSBncWxgXG4gICAgcXVlcnkgR2V0UG9zdERldGFpbHMoJHNsdWc6IFN0cmluZyEpIHtcbiAgICAgICAgcG9zdHMoXG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHNsdWdfbm90OiAkc2x1ZyxcbiAgICAgICAgICAgIEFORDoge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgb3JkZXJCeTogY3JlYXRlZEF0X0FTQ1xuICAgICAgICAgIGxhc3Q6IDNcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICAgIH1cbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgIGA7XG4gICAgXG4gICAgXG4gIGNvbnN0IHJlczogU2VydmljZXNUeXBlID0gYXdhaXQgcmVxdWVzdChncmFwaHFsQVBJLCBxdWVyeSwgeyBzbHVnIH0pO1xuICByZXR1cm4gcmVzLnBvc3RzQ29ubmVjdGlvbi5lZGdlcztcbiB9OyJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwiZ3FsIiwiZ3JhcGhxbEFQSSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HUkFQSENNU19FTkRQT0lOVCIsImdldFBvc3RzIiwicXVlcnkiLCJyZXMiLCJwb3N0c0Nvbm5lY3Rpb24iLCJlZGdlcyIsImdldFJlY2VudFBvc3RzIiwiZ2V0U2ltaWxhclBvc3RzIiwic2x1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/index.ts\n");

/***/ })

});